/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5AgLSgiqpmdJK2UB876cuzmbETbu66PX6cKuAz45ppgNe3jLC2z2VMWg65DZCCbEVkwJGk8uFDKvBihoRydnQwZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NFokdendTbfhi5k4zndgWLvR9DaV5BVY8W5p3e7zT5hPoNiCntvwP9g9CCewXv9LuwNeX9uZ7gKEUHoGexg6x3C",
  "key1": "5MftZqMgiJnuQ29MrAzd4ZLPK3gYdgMYDQaPBoyeM8zjxDrLhx2fRkphuPYfkQnEXxkj3MzFNnT6gPU924K4wgN5",
  "key2": "22a7piuKhAgnYLmswVer8rxNamJjhak8ibyVPx7a2fS4XRk4fL2EmiJzhZV7jviNXA1ESbSoZHyKDcmBxf7EzrYE",
  "key3": "3ueYyHcJrELUktBR1YG5R68XHWG1RuBaGPcZBBiyo1Zk4ExMajoqTFzwQPAe6387b4o9zNCLtrZ2XFiTtG6zPijY",
  "key4": "5bokyd6aaRfUmVNwnL7qc6CMLVpTpCgNm14uE3jPfENeYuhndg942xWzGR6qimsorrSBWnNZEn3YnGuhKEY94ta1",
  "key5": "62vJvggqKvzCEbiVWHVvq4oJbNvVUN7zv2crYfxDY8dhJuRqaqLmBCGe9SsTnLCXrTUqPxkg3Ag4vtuRXUhEFgMT",
  "key6": "42QQ13GnnwuoKnHKUwJWi6BhF6PNqezGYSqTLrYidmnZoDM8CQENTwQV21JbXLBP67aYEuJ1EPFRca1WfHRY7sG2",
  "key7": "jmnxVVXZezbLj7pPyjNnNuqwg5x1kdfYk5AS6RJBGHNLTwt4THG6FqpFQnWzqytJyVx9SzZuUNWdSiZgvje48x6",
  "key8": "61CDpgJcKeckbPiUzmoocsYbLqcS1a1S7DNohEtk5mxsFdTwyxJyNwxPFwpnZ13G7BgW1tDZPd8ezEEWWgXqxF8c",
  "key9": "4xtZSbH3nu6TqEFv4jtW3vxruVArEydob9utPxNwXmTfpkfyY5LaKvZV82XKfTLPnrNNpsEHBQrgdJgriTL2Rj7X",
  "key10": "3FCGG6Tke8cpAvfiRpMx4eDmXzizyRv1yz1diGLi7Epmvo6hX6bqxHZ4MtLpAoALaJQ4f1jPYipmUT8VMqJKsuJ6",
  "key11": "349W3QeDrToYz9hexdFwoERN2Xw32Dr39ghkphHsPyfci645r49MMCshZzUeFkfEYaGPvmxwcRs7UvffziiajdHm",
  "key12": "i7wMYB2oUvBFLugixUXEJddzCPUEH5WbRyrYPd4i1X2RiBs7p5qvDXxyVLboa96vZ93FnDA2P38hJeg8GJf9MBM",
  "key13": "64ZG2jDqvGeVi65KHkWhZ1GowZQjZvBNiDi4EpMdLS9bMh6gw8dM4hxknSQESeQVbMQbGwGeavSGbxfTMzYktWjj",
  "key14": "5MzrGqikHSnXFGxJSD7wqPwS7B8W7fXbBRVfoadN6MgSW5U3X1AxaX68TCp2Mtxuw1hBvBeDkWgeCHXyRqyDrx5T",
  "key15": "3brdFatoKC8xbaznfZxrm4Ghc7QWoSFHpzKnES9wcgsZwYqMqQvEzTz4XcxPfvYd2aDtKWqFWzjW5T5Ke8SmkqK5",
  "key16": "3D259ZQrG9N84EcDSXQrACLyRGfVecXFQDQtHKjEg3S25X811KNdyi3mq1LdoW48CV7bKiyqWLRVzpHZGLFJTrP7",
  "key17": "5eoTyK9QaRYWP6HHk53P3iA2WC9VuoHracszqAzFj7ABgLnVAY2tApZmfiCQFA6rsV1rCUVCmNXU7nk1ERcVmanV",
  "key18": "52sRpK348BuG8GzunLFBPxZGtYZHJCmKGXiUeCZoc4Q54EesBDZabmD89Q4EwNPmHLdeKX1ZcR5PVVB7vVEi97e8",
  "key19": "2gz4D3Eiuo4BNXA99AkTWGvnNsGBZFaSuLi9cg5gj9dLXtEPYoMFJKhwiFsifCujv4YNPg7rxwQJZ2dgsr37x7SN",
  "key20": "T85oTKPptkkEFnyRbBxjZSTyjebKBxUAMWwod4LhvjqTfpHayTUKzYX4FGSor3JRvbM6wKXXT3hzyEmLJGZXfnQ",
  "key21": "22YYSyrUY9JQ2pc8WtiU6M5K8Tfkruo2EWmn6strd1cHDwZfjX39n6bztQgDkzCqpsm3mjdMpCMJcszbRwPbr6Te",
  "key22": "g1oZnTMBt6aLuHrs1nDCQ193HWzWBd58GxmfhA5dFYE9cnRCS6porZ6MGZdYRmkQVmk2ga1HPQDSCtRVJaWBSUy",
  "key23": "3K2kGkh8cpFP9sAH7w4cFswUFtKVmYhjFuYGBWk4qZBx85ZUya8WycHTpATcvCzZqTvuug2SsYtUVkCCT7NGGpLw",
  "key24": "5SBBKZhoy8oCqadWqGcbbDdbeVcoVJ3meAGpLCHXRAMeeTBK79wYpqDwjBFVR7w1GC9MFyRPc2PHJNTkxS3S6ya",
  "key25": "34jJPZ3es1iqZnS1yChtQTTdvBTZmWkdzLqzQJZGDnXzQBumry46v5DTatkbgEBo9LfgCm4d4R21nqsPnvpr1W4J",
  "key26": "ryxVEZkYiSxB84dzrf5zWaocZNaUcFSzW5q8Xo9dA9FvukndVgAWE7UM13ZZ1GGdcCTDCEfTLszhuGowJeFk3W1",
  "key27": "69WmUmVc8BTDHJ4Bx7hzh45cXmXhLbD3AcRpGn6HTVnghcAkkxMVnipsZscBFj9aXXCcpGH98pZoX56QzFYc86Z",
  "key28": "2MiMtagiDtxwD2K8wea7ixWKYtHA9gMEnfAnF5YpBUAKViUvHcCfZxUhhtrQpLjqgwFPLFze3HssmT5pCadDYBCN",
  "key29": "4W7WbZhct6Fm5BaeLujJ9jQ9twQL8GibpSY7FHoZwYMdWiKyo1ZKDeT6jjxue75wfQtS5aQ4T2h143NXLoAKVZYf",
  "key30": "4Y95pWXt9kVoPVSmYrRMNQYY4XJFswnLSx4tAzGLQ1PMFj5Skzym1ZyGym9NryxsiHoGypeH8Zy4Y8gQVm3iowdW",
  "key31": "5ja9Q2Sno6ZtwwdeYeAqudhQK9fcLFNqDgciirLQhpv1BRKFfXPjJUSSgZqNm6PRzQqFignSFe3qxsKwCqLfBq5",
  "key32": "321tz1xbpWxLRGRpq78N7XmNUo9TaBUaRDv5jN8gzUAW9ndZeZJhhhHEaMFgkiRNz9yVBpK8ULUuEvUCm2L8q9Dg",
  "key33": "3kqVQkph6rxXk6TGW3Cmy824krFfqS2ZAY3GrDqVbEemqJ1zsKNr9WkxkrxrQePTUDGWNrjoERTDRtQ1LT2nhBA5",
  "key34": "4Asf71E66VtPtgx6rkB5y3h8CvZtMJ7uutr17ymFudpgsHQB4T2bcVikRAvGdf8moQKsbvLQJ8gf7wTRdB1o7R5S",
  "key35": "3KM6c9AmzZ1gi4T1TcZkUfEAJfjNCPT5u8rVtW9wS4qDKVr7ufNxEJ411NMkUimpRAtptwMeUnK2YCqB2tMZocJX",
  "key36": "2DJVG2Fon1EGdqKxPaF6ZVa6r5jvWc9DbzrWSDuJVMpmZvGWG771UujNhQjYsYEXkGT9vD5Pfuj5qskqjPQCqkoL",
  "key37": "5b7VVokz6B9rEUf44WhMBd23h3bh88h8CHMJfuEKQyim3Fvow4HHbgPoRjbnD6LpGYF4JzKbVCAFo5F9ScTLH8Lo",
  "key38": "29jtxZj3G35eHyXWRb3DQbjMSf6C6ZQD41vNYK5DYKxFcfq4P6DBjdf3coKtm99kSst5D6QEnDmWqHZ3oMfB7uMx",
  "key39": "h5ohRhoCrkSJwogvNgnnEe8PQfY4sNMftUNKQp9qYLFmUUZcVVRS6tbYcjiCas7novpR26f5LZ3vDCXURU394mJ",
  "key40": "5SKcJngskMCM71vxpqVtiXBqc8kJzmAKPFcyUGLkCx1pCAAAHgxQXYfnGGF3ehAaipuXcXJQvVFqSGWCEPAmRjN"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
