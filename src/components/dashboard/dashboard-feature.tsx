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
    "2w9GmNFVM88qJ2jCnET6NsApaa3yKoPxpxYpkmX5vsPTRMZpKhKq8XpQ9zz5AxfZQUkWuz5BR4qRQutrBWLJMXCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bX8jTFn4TuvutCTCuRBnN7Qy6P2WUF7YV8BiUjXgkCcNMvc9udoyqzvBMr8Wj8sH28NCvMbzBkxmDczhCQoLAx1",
  "key1": "ARiggVfcPdbhg6MDxSJt4rG1qR4rMd4VVUKuFWHJKZcv6xWaZugRk5awpqMMV7cN5Y8rvg63imbFbsLFp1AyaqH",
  "key2": "2NpvzACYaX1WotM9jCbLhFkCEZ8XsRProqKGKhXWSnx7o7L4Hn6Q8JvTJqwqpkBnF51LiBMBxorBs4RbJQmhTvYS",
  "key3": "2r8UkMM5UuFvGPCAKrxjcZuoYKciNtNBiWbprkeRURAAW952zjG12HrZb7RfiR5FirThS21vsQvLnos9KAdGVTfD",
  "key4": "3fLQx9C2xwRLcvCCuKfiT4DZgQhbvJuBCmSbRBQgFRFRAKt4J3tmRb3snvQhCJjSxoNNELvMzQHwPrmAWWejD1V2",
  "key5": "2so9c57jpYjaCtE6efZU4nCLvKoD1UdYStD5f2igvPuB9PauB5qDsTn77NdHyeSWAskP4wSiUV5nJkvMf9b42z3G",
  "key6": "39Nf1GfJ3z495cSzUHcVEAMtbSEBxrHvoiMrwyFPwKRgKtJdekv3KKMoVNMcuNn8pzPDARZr6UgMQKxdc7iWZQrP",
  "key7": "3twDVacopBx1WgjJapz5G6wtC7yiMfmoQ9zuvp5wtLPr3aazLVZCUMSNMHtR2n5BjVkQPrUXzeNEd5LdfDEfCebQ",
  "key8": "2PzjmBeS4YLnrDycHBvofoFXurjAAyYxvfRuDLurWTePYZJvqVpXpurN59f77t5AnwcHizB1fLGxXVEQSbAwZLYj",
  "key9": "2787Ab2VZKm5NJq3pWuG6aYQjdCqKDHd1uKew3QPQP67G5UDQ3q5AAX6PUbsHxVLCYuHezqP2zz78CStrRZs1bsu",
  "key10": "5ArLWRrhoZ3RuJpSSkYbk6QvCP8LvG2paVGopiPLebWAESivqqTZuSYEtWEHouWQToMRowxaUp4Ji1nstgpCgs1k",
  "key11": "3W2zBQZwMRjjzCAAAn7MaYzdxktFx91f6apUQNLx8Nxat4JANaMx6PS2wzc6T8gLinGzwu6HNhN4VLDYbpiukc9B",
  "key12": "9BUgsBVdF22L9BLhMU8JhcqtvVnA6Fio5NWLVt983WDy5MMzPot6824J9zm7ZwTP8AEpqMSywmssRkaXTi1WbVP",
  "key13": "3g3Gq8RaC75eaEh7HufiuwhUaVsffHgdsS69S9hKs223WnNBaf8Qy8HmHk4hTjXVWBwNtajmFpf7CprYjr6qiUVQ",
  "key14": "3DbVN7D2P5cjREqFLs8rjPqredHkFYYQ25CuHNYzdG4XhdsNdMdB4K7cnsbC2RvmVzkjuthSsZyt8WGzJrFYSKEb",
  "key15": "5mYY5aHDvPk1syQvn7FRn96FNm37aswx93LL57oCghLUvStFMZsY2Q8WLmQMJahe7MCsx8GByn7kscRebJFM88Rz",
  "key16": "MMsPWwQmwt6NmPtqM2iM5UMyyanvSgKmYKct1VjzLD3VY85jPm1CYWnfit92pSN7FEvHQYCrHaShvVQLM6pb4Tc",
  "key17": "sbxf5Na2rWxiR8yRc8m3A7rhnkqEJFFsmm1fGVGiwKCCxj2VXHSrQV4VG4CvNqgTvByTuEFVD1pBu46P9acB2JE",
  "key18": "2DYW7EZAHVHvFuQUZmALV7tVbUVJRQYMW5N44A6TR8eDfaHBAKsMeu2awDsHCGj5fbugPinbM4XhmSfqnBAE4ep",
  "key19": "46RRirAKXs34mh1ehTQEiEcAJRPSYxzuDeSGT9AKt1fcEdavWhhVjzXsuXHbke4wkSeD9vWkaQ85e882uAQoGjG",
  "key20": "5DWum2QMH36qoKuesyzwZgBD4GcMP8HqC3bj6AzRMHD7No2sieQPqmaG8p3tWchryz6LUe4VKWZrQnqFJaiGPXAf",
  "key21": "38zyainw9L6Cgc915YksAPJLtRvuwG1pQGtzjgTXNwuZY6f49PCoqzJ7ZuUfCY6ZD3fmEL7AES1cip9atamaer5s",
  "key22": "51NrJpNdzTiEkKL3nqbSHgqHwAuX8DBhoXR5opjQroh6Dh5V8GNitcmUKTV9km5BVKcEJvajRWB1dK5MVHPjJ2X1",
  "key23": "7JcBqVfWojjZ7eSr3XCj3Yo6C42NRvg6nNjxjqDrjBsNRJH5HvgmaNoGXhAZYYx2Njd74boRmcax199xGkPxZEN",
  "key24": "3tiJ5qFb6NDKkH56oL1fLdHTiRrZomzVKChV8vTsxeHcbr2VNjHFeZN7CUJu7suU1ACix39LkfQrwfyZXZRcfMF9",
  "key25": "2ksFwH3T7tJoGQi4jMRhe515grSupjE4ASmphdqkJQaxWCfwStiufbZHgGxAdgDtTuVsv5yuiB4jXPcxKgNFajyQ",
  "key26": "HVR9igdC2VMWs9Dro5oBREXBiGsYXNAZyuc2MuK3JDDMsWzmMXtUjYaPkDhk5JsDSHiwRpAnaNfa7qd9X7voUAs",
  "key27": "5rvtiNpARPkv6Ci3MYH1wmEX1MwEYBVURPoRoHmU2JBRob71sg3tUP9KwuJ4pogYAB6kJVTynKeU6oCNe3sJbfCn",
  "key28": "2adGdte7UND4NZ5KLvjofFcW177Ncg1f1PXw8dioGMRf6rMjyvDtHnKWcmk4NK2mV6itMYes8SbQ44ry2Dpw8DgT",
  "key29": "26GBVYRkWJEAnotY5mGpWscYq6JLQmTSE5YNrewZFdEufrjgcAHpKkeVhPP45zjxBgaEPpVTmcpeKokmDiiUjh5q",
  "key30": "3dznXACtuzRwWsnDqAXvRmUYyz4mt81hYbef4NZVQvp9Ncndp2nxZKsrMkUp92onDMWUSs532J4gAgpQzp4gy5rX",
  "key31": "4oxpfVgZ549uG8Ck59duYBPnWwCddYVD2CPrYTBPxQoGqQeYhUb9pVtoCVjNcDbHbqhS8DYDgt4jpdjPJc4TpYm3",
  "key32": "4J2TvmSkgUymEn1J7PPLDFQZYdpWatPpLeH2DUqA6TLteQU7GgGuBL4zuKoQDAbHeDCZsFBiPuK7JkuvVMHwDyFK",
  "key33": "2g1KcKZ2fmhJQDW4hW9J3Y76HfTqhVRWbDK1XpKgk9jce2vMhHYnX8f7d2FeokvU8FemEWMg9vf6CppaDUQogd3V",
  "key34": "4tG1fQzHSTon42UjpyqofAAw62WtxUz4RnSaJVkxtQgTHwQQRQ8eZj64CkrYcFXpZhC3BThwPiku9i75kini6yze",
  "key35": "54ZWGZ4bEYtR4SFpqhZvvvy7GeGKitj6JhjbDZsAgwNa2KCWwLanhoHYS5A2tF36QT9LaANRuLstRRc7vCQgFa2",
  "key36": "4mpeshZTGT2ZP5n1TX3ySHXEEVVZBPBu7A1ThmfvxhUojq6cUnqEKz9NfpmvCsmJT1aeZHSkhjUiedQH2uoUW2s8",
  "key37": "4VGN8twkCRs5cZGLPLAdKXS8fvacijGVeSD9rCoNUGPXmSacWeESZQZCygoGkEiZKNbYyZJ68oXDzzMpHShWVemw",
  "key38": "5zBWPfQyQSHdxA2E5KNFK3cjP5zxQ9veEGUvT7C5bcD3mnYuTWibmwMgSEN97TXMSDRBoY2RXRZqcyKy9jyWX2c8",
  "key39": "y5SZSc3jRFoVkRwwnNgJ8yg9eH42VfTkj4zaMCZzv97h5wJ3Kr194spygkTRXBZSLEyNwwtQrNyhjm2bg51wWGy",
  "key40": "5fqGJtR9zLcnCenPqfuiif7PgVyVoUfLyPRPPmzWrbsWkW9sARi24WkCYTxoLgpEFSAmcEtruYRruafAXdbJq819",
  "key41": "DgzzoMm5ayZQS4v14LFFrUSv6c5X85ywNbC8J9ko2fKyfxzjgBnpCXiUcUPoJ29tbk5LuYK3B8hf75ZmH56uDpa"
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
