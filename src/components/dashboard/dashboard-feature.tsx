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
    "2bJv9qSVVbtWXtiuKvhcrnjow1xQXMBDKpscrfnG8gFqDuZrh5tGMC3HeFE4hRDV3aCc3nCy3xurnSAb6pS5WBnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MFyUMaXMKcnRDVyQYKLLo4xXATbHiFzoyR4mVwfEyHkjs3xv4uQr9TQvzPrFot2BjadxnJJ5e3SJN3JBHLqnLj3",
  "key1": "4XJ3LZpxH9URzAnKfAofYjz7UKq7EaudvZLaB1oje18fZqW6nZnsXBcRRANwbT1LT2npMYpFvFVW7uoXc6NKgvws",
  "key2": "2EeJEnv2xLGpxqKXm5bq49xZLnQ7dTZ9o6rLi1ojEKLKVxVbJiHtUYR2mPVYX7Ytq1dzddx9gRg7LyZNBpyF2v4G",
  "key3": "48KpUJKxJC8KjKdRTodTYinHL2QZuxqWSzHGaCkMdmvr4GMMXHYpsR8Y6q9QKcAHacvHiGDvppkcR63edLs8psdq",
  "key4": "5u3yCa5zaARMkSvph2cbEYb2dV58tBZPRJasYPC2KMhyRP6fa7XZpgZAnCj9oFWNuTHtP8YXdiK4QQdDReKjSGAX",
  "key5": "62YVji2CHaHkrPEGZnEM6wQjfegUhVA4v7MRgMSMLyegVWPQMZRYgA5FGm3xZdTFPCUqB7TM3VfEKTjL3bfyosDh",
  "key6": "Xm8fk5oLf8QqG2z3CGNC1mAFY4Mqdwaidwir1L3PP93aEjy7XYegRPUH51BpZrk86iuEEDEs1z53prkr35xSU74",
  "key7": "5BYXUxokKcP2fHsKnSdPJwgqPrrMQwHKajG7YvuXdi1N14iVMfxEHULBtEv75wvkY9EXPexP7p2rv6bMiJDsBLHz",
  "key8": "35jX6qGKD8unPyDk78X3cDfzu9jNnqigHWh4EHJB2BkFfTYc4JkPoBp8D9uNVMmv6VRXJac5Y7DGr9hLGHgVyTdp",
  "key9": "3uPAjcvqNvFtWWdyHe12FEU7PqDUjDiHokZrefYEY59ZN9gvwQoy4iWFQ1eni3moeduJH6fysueTQ7D9ZJurp7A6",
  "key10": "5WLFAw2soA79VhDCkbhMAyBwShEdusdQqiqFaZWeGBoeA5aYCxAt6VNt1bQpa25tPMfULWgW1NtWkUKnqaGo8ASw",
  "key11": "4AmkpSzhZw5jE7Y1AfBaGn7AzBvEWNXd38v4p2MffFmfejsbhBF6UN8JeLKmjRZUAFJhbarBMC2BWF4MkJdpxa6A",
  "key12": "mBbrFN51c9CP3C665w55w4TMQa24TE16ErPbScj6NpsjggWLMwq9JuEJ8S7V4MSCfZHmeTSVXMqT3xXzeiDS9sT",
  "key13": "5Q7gijrnKHKy9Z1ScV5CAffrX7n5svy89nZT9gTtKRpuwhHGhGGKa87mQCrUAZH8wL9QgTnHzGGmam4VTeTCAtbd",
  "key14": "38HVMLBCckYK8YxdMQ8uUGiYhPp5KCZ9LUETAgvLR3TjVfjkJ6jD6iTVpxiu3SYhZhLVRXbqH5yGYLpr81jHHtp6",
  "key15": "4k9g9XtUyitM4cqqBbdaqx5aBpYie1uBqU8Db5J29GVo4DDyFvnuojPJphMDLqe8j6ozddVGapwnZXUKHpq87YUG",
  "key16": "3nWhFJayECu8qQzyp1Dgsn7g9uauxc2iganUh1jGkRaQAfUofU7HkasNVHjgw2cURLkpRBR5YuTo58Y3DzzQzmrD",
  "key17": "4ru1z8RWSi9eJHVt88KphD6GtvtmFv9FLJVFBFVZryPJ6xXnuLG3dgRYfXKBsPt81EZndFeyqpWryDw7AwYfGMeE",
  "key18": "2Djx89fLqYZ4TzF77VGWgrT8WvEDEg65VGR2LTfqMEoe2pUX1bcQK6r2nYysevweGiTJ6NW7fwRN3N6xzpiP9b8o",
  "key19": "47CW7YuQVkdmCs6yuHX7qqurKSKik7nB6TQbNB9aHvEgeog6ttvmgKZN9zZCZBqCF9KZU397wC9Q65qSvLSXQM6e",
  "key20": "4nuCxNPpG7RRoBvQRV1tXaFPJcdPELEAHrpMVsHwsQU8XdH1Bu3CLnmhyUThoBMFHs6Hr7LQ9gotQiTUZyz4mHp1",
  "key21": "5cpxNtkMQLkRuvgUkrJUaHX6fZdVfxZpMYnvXSHC7zyMj7VRtEcEhAeyUum34oo2xjkfdK894rN4otGJzfaUqFTw",
  "key22": "eUTiv7fjpzy9J4ygD5K4bMtWemR81PV4Uzf4N4rVpC5c3fGVbJej4cUgRujVW2fv7cqruHM9NyecUPfzjMAXZEt",
  "key23": "2fdnWPCtjK9zRfN68Ymtx28xuJxCGtD9dhhgt51Hn4U9SJLMC1Hc25DZYjHPTH88ZAikhBGCPF2b4tB8J1kjVYrg",
  "key24": "2L6q7kume4TmWXz5qFZ6envxGtiHy4YapZ5ha3noNKbR54boquNG91nNYDZ3f8Q7oDbrK8bKcFuKVkswRNNrqJTo",
  "key25": "3nVuVrysE31DkP7wTYzR2MHw5KECwXFdSgmCB7sWkAqbRNbSUyGaAGGXh4GUcLVkJc6ShBs1XtrQVsN7DyasTXTD",
  "key26": "4N4votsNtYm4XMGpN6QF4Nymh62ZVXQNTyWTAX1Jd2b7uE2J1n5S9SFE1TfxjtL6yoGAaJ6XuN2GxTkY7SB9NJkp",
  "key27": "8VoDWRdEKcWcS22oVpXtCrzxQUgxJqgEnNdNCq1GyBKkQ2CizVgUUVbDZYoWeryMjLJSDqTeRGsHMzrLhopuiQo",
  "key28": "VuYjQGRhiw927EPx2FbDp77xvvfuANew4WeyByxLjCbtpD2Rp8SgwY6wKAph6y94Vt2YdjfeWKVa4Aza1vR91By",
  "key29": "2E5UdptPq9UC7jgcsyxHBPzYEHGurheQKtgSP5hKGLJ1Vznfos6Nf6FDDM7jaDbBAGzaa75AFdFfSbhvQ4SU58d2",
  "key30": "2SyyMio5g8wgTAQUDoa3qzzbGgxMC3nvemC4pPdK9aBGXk8M6xR9L3yKrcoLubgPNHAMwiijmHZjXm4dKjsQKNLT",
  "key31": "3ViAdZM3bumLuBzL5wf9Ud9MY6WVA4Xzjr9eFZab8MZudr8CXbYUEC6sdTxBoVgLXxKaYbEPoSWp9dJgi34iTzpC",
  "key32": "5T8FiK1EzLy3b12pPNUjQ6FqGobuG1tvC4Ar7PvfsYPZci7fpiDAxpAPCeAuijFp7bu4oetsg3ZEcMpF9GPMcMot",
  "key33": "3Z4XZ7Ac58Y1GcJYeGymAYcch7DbkUHUBCqF7Z5avAecDpBwY2wxz5WQY3LD9XVNnhbj9odxZtLr8XKgAyr5Nh12",
  "key34": "43riRWugqAY2gCz6ha9CAH8xWs2gwYax3vSGLnLfJ7k4d4XpzvoCTthbyY4sbpzQdZHDd53tbVGViienQjwJtG7D",
  "key35": "8edRg8qE42SwAyXpCCHwVNfdpi48GvS5XN6gxHK793T8e6iU18sjfA8tcNJ9ejKXVs8TE1Wzc5D1Gg3NZZ4Dh5i",
  "key36": "2UDm5CvLVnpAubFh2pEE8b6rKCsKDWUdpQL58Jp9qrWZPtW5wB6DvA14EtxteSYpCksjS29YPW8w4NMh5jJFKeqo",
  "key37": "28ZcTmuc838AjNZYENjFfUs2qY5dMAVJMvfNfaaogR5sQHugMAMNfXAEoQjysydzobmMqDuo9Q2r3s8FkxG51TWF"
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
