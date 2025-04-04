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
    "2xmYyfqAKijhZD7NK6ATcFYXhqLSz4oztXtMj7jikSrRKmz61rLwvMYV9HCwC1JNJD9hdNBxDS9nwbTTMitHTyFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cJ3ygCvNVHpdqcWgSJLVdRpAQEwGhb6vH2nBs3rUPiZBjrQ6WDkXX7CCj4FJR7nGoumxD22PqfJA7tHW9WtKA56",
  "key1": "2qDmh2t2TudXJE3aPYhaaJBG6oDjEFT12radRhvYAUpjmxKWY1oUPC8XzgRmZSA8Pk6cWx2qzt5PRreicxHyUpem",
  "key2": "2QkfV6kNVzDBBpw92sYSbPyvEMPhj1DkkZtpP3C5msWMqsFZkBFztYxURViUYCZmcqSpbrvM6PLoRmH1dNBNjrFB",
  "key3": "vSKhsrUkWciirGjFj5ThQB351s5Yzrrp62EJ5MJSh915GVdkVYqvvdBi9icEFXDJsck27nzSsXQFQN6yjhnWcgp",
  "key4": "5NTSSzXPWY1eMH7VmR4ytMct93eEJvbVCz9GYHoRNRiWBYCHKpw6vJD27Xt3Xj9jaLm55iwGpL3LDgjUh3SBfDzH",
  "key5": "3YwSfAaeE2ri2yDQUynUPy7hEuE7WCVT4ja7c4okBQfggyMdBf5vnwDnpVh7byeninHe8BFddAhns334cDnVMqsv",
  "key6": "4oBG5wuGvqouLEGZvVVYiTjZBxQdLScE1TeXdyPNvkaTbnDxRWBnNHG3aqHnEy7t4hWABUetJKnafHMwR9sBXrFV",
  "key7": "5qCoTtniAuLaW1MXBokxqFkMdDrNgFNyjFWBDao7UxbxLpx7Z77F7kZhe2n8JCEYpYwX3ZoDAsRrj6LP9HFCdGWw",
  "key8": "o3iF4LieFLstvCHPxXHZfCo3Dx3mXJi9nKPM7onZr8M1qS7m8nGua12yQ5HLrJFPjRUqLSFZhaqTP9PwJkSL2L6",
  "key9": "5pxXmHe6RqtowNYNSv9UyPmmZkrff2FwEbMSNi9LJsYgieXgXKm6r7NBmwGsyPZFZZeSHEFYd7HiFdMa7F7hJiXb",
  "key10": "3AXaBiZmnHoeRbSZJea1nuyQeCgzRNT2ByDApDfffeKyvoNmmjuZ4JhkxmcTekJgBeHLoodQnau6fTSGzxyeYY32",
  "key11": "37MYHwNjBaqQygXZD4nMj5ceNRLaJytTY4ZAcKRZaAxs8f9YXzfprNieAw9wbGH5WCwmk2nTSfvbqwiGvqfL6E4j",
  "key12": "5ZqRGTxgGujU6Hz6DqovFbM9nnPTERwtpxUVcUMgbJeh4V1RKmMVBfBRfQtcScPN1igZwkdEAwxYfmaw3mhgXEtr",
  "key13": "3k1wRwcUqzwKG39PHyKRHrs4RnYtYvxmdLDLytmqz2JcjJPiKjpsVFDosHWYtmFKByw82vPvi7c4AWwm4GdfLgvg",
  "key14": "5cPJxcHwSN16BGGiPbTAHRGYQBds2oQaMJTPw67oQke82XHyp2SgMdruoLYQtpq3C1zmeUaPJ5pXEY5j5RVT4YUq",
  "key15": "RLdW87So4sUJEnygR3Tb7ZbfJZz7kWd5L3RqdQhYyjXirmi5Vag3rwbXGoai1FLqqZaEmkA1MLeVgvGuTuRxoYF",
  "key16": "26ZERq5nHM83EtANH8a8gHzExZnZiK5s3EZNQ6EfSosQSkLpKCxQyBU1SdEAfyT225wJxyuZG9jkL5C7aCWvBsR1",
  "key17": "49VyMjTxpwW6Mj7k794urxSeiw9G5jo9AuWCu3SdvbaFJoWw7AVZ51JA6miJwNPtRDd4UKe34RqjRJ3njuqxwvDL",
  "key18": "5hXbLdAy4ebSHbciaAE8a4rrfGTXouxemzqomexeu89hByNXotoBvQZEpuAnXquqrFmBCf3aCMbL34PSBFCyKidm",
  "key19": "chBpwzcyQkYV4ZG9BF7H8VSFmhru7WTuXzn2RReJzAdgYENfWwpxJtjKG2GfDwL3rMLGziSxeQ6XeWroRpgKAKu",
  "key20": "42FAAaqc7fXzTQ9DK8M2aJCPro6LF6xLDEHM1KNRcxo1nxwoN6qBZuXjjUdnJ1ZoTdjP4FLoPmGE255mp7MvgW1h",
  "key21": "24mK2pdW3SzbYj5ZgrrrUam3csCV6B7eLkrfbn3puLQNxqig1K16xQjbU8fRrYKmHFpqyncSWCyV3wbJJGyRcqA1",
  "key22": "5vqp7hrL9oLpVHNiNtwW94ijmMuS3Pv3aNXiq2n5HTZd9XX8wjvbnRYSAm1UrNyHZSAZZCqMf94jfRt86QHkXoFC",
  "key23": "4C1V9Z5Qgr7h3V3RqpXeHV2jEDW6Xgg1idyqKbPPGmSp3Xuqct7GSTuQCJvahY8VKX8VLEQXnivuXF9cb24MRRiC",
  "key24": "345aqshi88inntBF9gxULwZrLRzPLmcG94LkrPrEadXuPA49tnE7vSGLVPTywpJWoGYnUA7YjD4sgMmPref2Tvk9",
  "key25": "22qAqzn2NQyJd2Vab3uEhcCvv7adB4iYv8QdurG64aarUPXAXBuyz6nT8SZE89kQ2KTNwTi4pKnorzBnC83PvdcN",
  "key26": "4A9hAfgjxJGnwyktQMbJvVTv2UuwwVdRtSX1FfyayUoCxAnbNufvSmdRkVNf9cF5R5iCUvVEEHZjaT85jLJUDn3n",
  "key27": "2CEuRKUJCrUKyK2RPZvdq56Rdkz94dia7CupHK53moF9G8me6UemGjX9vEt8awYSbtP4q2WogK5pNTik8ZKqepd3",
  "key28": "2UAAztsS39vaiGpucuyE2DS1mmjHGkEytNRrMBZXz8aJcQAaKvYfiwW1gmPbfw6zA1Z2YyeY2sHU2Sv7sQargA8R",
  "key29": "3ULQgAzezwEUaxbMnhqaeMZVWqmzKr9vgScs3p3s4DiYciCkJp92Zko97URCBw9AkSeiPzBstik8yy19iMm3fGsd"
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
