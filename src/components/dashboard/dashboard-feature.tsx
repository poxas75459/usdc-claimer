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
    "5yKog5a3moazqdo15CQ6qCFYAfnZgxKJcWmZF2YWyvBe7EbK9UNreMGBN7VFfAXGyGDRcrhG2iVWv43kvGCJwYWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oxTe9WxPzdSEoqjThH2LBGA8wtNVeG5HUKsk1ZyWLRno925JChCxUXfm4yu7AvGzMS4rnNKcyANd6bydcTqytn",
  "key1": "5S7mukw6wnq88xXHY6BvZuKDkaZVQLXodiD8xvWdnZnpTPsmVMd1k5kpswPZU6muLub96BcXUGX7iCeX1cFGWh11",
  "key2": "2FYGJUwRTGVKUmZg7qxaJGUkVQDXTf48nLDzjpfdqfHDM7TWd7NRcjBwRVgBFQdmRvbbjYYCEXkBB63V7eCFe6f8",
  "key3": "44CGkZj3EM6N1BXoTJyevq5pvdwTYcWJMJan15de2SLpKEW7hX9YugvLA5qfTq66nTWGKzaLdNLXxRdS7swXLrX",
  "key4": "4Yr7nAvUGWdXP5bzEr8JdqLX8DcpxNKJggwWjk7i82kghgCYFHAtZSncx2Q7a6wrSxv3G1o83qFfh25XdBZxB52g",
  "key5": "2YYFGzHbpYTRGB936boYa1TAbFQ8hiuP5qWm4DFj39srfSircTkVKV5npaWZ6b1txZeVy73ZRjV6WA5zsVxFDbgB",
  "key6": "3dN48SbqYwF2gbum3g13jUMkE4HpPo4RNG6nUQoH3XN8wyU8dEdKa1Q2Bvs8mYDRhiaES44qt2kygux8gSQe6Nvv",
  "key7": "514Ri7QSAVWWv7K7xxnkWwDtYSeV6oRQVm6MMMmvmUs7FJLonq3SHSMcmxK4mRJSoZfsf3jSRzn8R1fm5ijLSzN2",
  "key8": "5Uk4W7NXXUBb5y1ZYuJETE6a9NDwX1qm7LjxutnirEZoTsKfMT3QaHiLXitTExuqbaUfsH6bnMc2zfsrZhTJYe12",
  "key9": "4jiEU7Q87gidQPrgbbVp2eb7zBX5ieZRS2hZSVwna6n1Jkh7pyPgjFTV4pY9uso5J1Bwq9MrhysUGtiBEfRQPE2S",
  "key10": "5QUz3GmustvxWfkn17Zo4gg2ZPDHC8JajK75uxXiu5pKbma8sGYRnC5CTwajUFt3dnzqfKhAQSB9mgHJyo5C6UP",
  "key11": "NdccXGEgpJLyS6NJyrDPXCHzdugzFQeShqtbucBDxyiZVjL8KqTVpYTZXxHfgkbgUxQhyThvCq3FeuTiyYzbfPr",
  "key12": "ntePeuRPUfzR8m1jg1DH7LqH7umf2B9K8WUPAx1wmREQqWQMiYvjHh8TqWbtKiqCTHvTgPBwoEFpghEFMmVNzEM",
  "key13": "4EMVPybWNYPPfgv5QTvzy7iZhXxQnNnmRWCAKmGjUXJ91oHYtQMjJ2zxmUgvEBKJeKqV9qtn78yoDXwhJYyRZpLu",
  "key14": "4BQeLHnqBGiDrfdJU4iET4qwzsL8gu1h8jUE3bAEw1ADNUoe9Xgvs9addUMqAHCT8rqgBodWdzAR6FTrcpFwK8s3",
  "key15": "4Hj752abchLCkptEbXZnfDDst3yV4sR1FJ61356zzsNxS8TDMx7yW7uuXjHvkgx9eSGHpgp3bjuq8dbQZYsVeb6q",
  "key16": "2t1qeym5GfKVaU5xZqind2aS7Jhh2igKNaAUH1h6Btdd4d5ehr7wd9RYUaaMv3BxERArcZ3mDYc8GkwXNxwrNmFj",
  "key17": "4eGpEBuydMJvRoeCDTmPcjwQRFWtGeRegmcKbbQL6AdufisLp2697wwZB4LkzNMTx3R8FAwWGSvoLYkbJ5Bacy2P",
  "key18": "4HgeRz3KBVDB4ry55tuTtqfjQS5B8Rt7tiBmaY6CeTZL1iUJaNiHuwceKqjZk4J2VeoQnXGwCMLTxh7JQ8WP1Yuf",
  "key19": "5APxjwBVXCcGPFGrRc9EcXmEpXy2XLppC9gKWhxYQzbfaZJtVQw7QemYMVU36gENtx6nNBCv1vWXpbRnW341L1nf",
  "key20": "3k2YBoPYSckhXGRpCAndAddCdi5HVRnNZ6gEWAX1FEudxVf9GHGdbPkRwTggJj8Uf2zsYYvbwZtxpTRbSn1PuTWf",
  "key21": "5kUdmMeeEfJttiZjZ1DGPP3GvEaD1KSykRemaje8HFPUip9EQr1TWbKFMciHEUVaDpv2cC29EA18usTRYyCw3KCT",
  "key22": "4M5bjyvZxjnhStgW1pm6sWXmCqWGd34r1gr5ZTqqWzbbK5Xzz4KsAWfMvqYgTsTDenAYrWANtKHs6zEyWdifKJfJ",
  "key23": "2SrD9tpKdX6a2wLPUhT61fBVQEoAZ9NMe9gDPWooatDjYn5nYKT3KmQQbwNTCpE681eJyYyydS57Kkkc7nZaemhk",
  "key24": "FjuPtmGq4n9XgPXe63e8KFQ3NvxE3SBJBNqnoVhJDRJ47gXhgmUmSp1edwxGCv3MQS86KAJZoBwqVoWZSU711r5",
  "key25": "4diixssD7oAhVgKVeWJwYNnATPWwFshhUcgAcTqcgB2shjHi1HXiFbannouSvdcvf1tnncmZ4K9qVKzozY3g3tWP",
  "key26": "42QZHzaEy9hhc81DU87YXzhSt6am8MqoUiRtudvmiJYTeKtxxez1KmD8vGu13ruQJHY7sCJx427gY5sXamoF1stg",
  "key27": "61oZ1gsmk1JSMcSUsh44matrteHy3Kn5fC6LBGUXCWr8o3UNLhWSakPP7UNGjqddTBGcbY8HkAzV69zJdJ2eDnsc",
  "key28": "4Dy7ixGcf3MeS6seLXvbH8SG6FXXFueqPcYx4yX7tbv6BVfkMzAcsbxMpdn5DKvMUijpWvN8xBx61eE6AvsvxbbG",
  "key29": "41xqf5XJXJnwFSwZKC1ctsismXvApbFFCFjhDdvKjfDpXeCEXzFyazm8cshS8z3Cgvm3hNwygcuHXXN9ky7eQkyT",
  "key30": "3LEkxDcgJX7Dg7SFDP1UyY8GMeD1sdmbdpL8u7RCA5CtUjAut1cRYacAXQpUBZmHkPaFsKE7cEF2cu6t75wq6wRQ",
  "key31": "4h5CUaha4wAitnBd7j16RyxLxcVghU8kYEdrUY5YGV1YdMS1uoQPJfEhwcKWGdq1D4WgTS4f9EyN31MKosyFqP5E",
  "key32": "2ASkDaQRXubfojn75tdcAJYYA754RtpqeYH5K2nd4ixoKg7ZihkroFsQgFay1FJ1zx1RCtyrNdBMn8K3Jd4XweEX",
  "key33": "284wUN8mmaAqdn6M334h5skMT39As28VCwoVQ37rPSXzXV5dCsFvtaCo3D7Nz8jdkQQEMKLgX29fJ96h5Nx5rbSd"
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
