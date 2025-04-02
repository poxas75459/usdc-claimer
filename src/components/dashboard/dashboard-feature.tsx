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
    "2xJPGRNBV7YLFLVzVUGY1WTbjRoaJt2vXZuYbB9SF4XuZbrLEuoboUQu1En54C9BUe4EsgTTjGWPGxbrKL8UBWDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LMxP1dZ41BibGcphdHGUf6iZ3wb9R7N8oc5XsLcemFN7UFmcEdRH6NZJ2Bmp2fF5ejoLGUghgxkzLTWqcYaD5L3",
  "key1": "5EguAPijciJ2W5ekuzwmEweak5QJDzncWeNQESSDXyKCTSh34v1664kU161HY1mFsCAgF5KSjQkYtiAhMPAGsbGp",
  "key2": "2azSfUZWGJ74wgD3mkB2zSM6kE3YiFKtDz2zFfr8o6Nfo45ySowF4z2VYRsyxwu3nq3UN4fkuAJukrLu8MUXW3y3",
  "key3": "25PPY62MRJbvKWuWkz4DcSeyB2jCk3Po3jyUcMQMdPRLbviUjMnd6AjD3A36pQs95eGRs6B2VoBXcEguU7pcwfAA",
  "key4": "kXdDLZidx6QeNqiy1JUvg7P8yGSZv7gYNWtQGvZLtcasY3YAVTvuiY9KmbpJ5FJxiGFG5AWCwcDeVxvhmPMrtbw",
  "key5": "3xVofAh25aJAUkHr5ixkUWx9djTEhjG3toN5TFCtjmriNfAhijuB2F9zKU1kock2WPnjyt8HEunnXLRfMwqv9dT4",
  "key6": "ih78uFRA7m9YiEveoTcwhCFFuQzb5GgYEThMwUxZ7JjEhw4nHVchEpVULoYrcxX7tta7jvS4hM1keUBDiwGA959",
  "key7": "4DH7RE5h43y7tm2JoXZH84Dw7hXyG4soF8yEZhAWJkAXpLPgVpEzf4YkEfhEFSMHwdJj7bTMW8j9G6Ks8asDbaHM",
  "key8": "v98QVqq72E5TdC8uaFCiyPFiFchiGqUb6h4XuLbTME2TCKhJMVQe99d9rRsbj1qiP65cZn5KWoDeupH4yxkxWzE",
  "key9": "4s212mGF1cZEKTjqDqN6ap66ZQwdCTcrTqbCJvmFVP2cpka2wPJ6u6YY3EwPrWEZALSh9yswTrm3cLertBQwxSSH",
  "key10": "3Widsg6tvvhCt6gCuq8rqmDKW3B3NEfK9YfG3QvsvRPwpVo9avjauo3TPrrrNmbMb5K97RKZrZ3F7aVBsHpQBqkG",
  "key11": "5L8VrTPRyMwGoHiBcn45gdfMeKinhpPWoMCuwdHxJnfu1iUASmWaCazvLCX9cFfWKcbEPmnRMGsiFDPQCsXFyL7Q",
  "key12": "2RUhLgtCSFtZrA65LnYFEuMvPqAxukawe8VVouaNQhne2zH4TynU8yiPVNBZCY8FAa8tmi4AZGyTcBg5Zr32bNCk",
  "key13": "3MRxA5BmNMYUMimEbJcWvtSFyadyqCQ56K6g5S1qPQnkzC9xTnBHQivZURCzougXhirQHsZDbdRdBhSiAEADE4tG",
  "key14": "3Dif3kTUcuEXz2rPNArg4WcnNW5YgMhfVbs85nYBmD7Bz8VwbPNzqMv1bFtx6geP5Qzc7EKCvreWZjsCgfq7hP13",
  "key15": "2QaXFY2yJtDvb82uMwxZCTfzTxEykZ8j43EL8BSVcBBYS8PisWkChEEjmvC5Kkd3ku8U2ursimcMbJbWiPqWb4fu",
  "key16": "doXAHwcUhcq2Ws6JkUvx71YXq2gvnVo5hVshvrUbmbMxPPYQK1Azq2pqpJwaBQUcPEXLP6NAVfcHDBYiy6QsDmD",
  "key17": "MqNoVrcbs7QdgsSfpqp9pBSsC3yapy7wsRHJX6TwLN7bRsGu1hdSucbqw4j2HArCjoq9qBHGSWHn4G7eGgr4o67",
  "key18": "5w3dVWCtSuLhG3iK4BT57jMLMn9NP3NdZpp6Zk1YXpSWLyNJpwq9c1ce7HF5CyWHjTxEa9icDwQ8pCXaQqT6Jtzn",
  "key19": "2sfZMQeSivkFx75AWNHBZcNtWZaT4uc3XNpjhxFd4qWqcrefuzMLGgg2uuUnx58tZ2y4y5Pu7GHeoHFGKPudC6Ws",
  "key20": "5zQKhDzio5b8XUAm2x87GZXBKjMJqoTrndTq6LD3qFe7EiqDMn2uvVtAno3MxvokTnwYVay4FG9EoggSEhASodwf",
  "key21": "5SoZiUAptJgczbRcCLG2QFeiMYpywr9f9YQ5qsMoYcVvNr3SWzG7iCVysiy2MGcA3ZbLZz3dVPKwRnPSrEgRYhaP",
  "key22": "5Ze77mmJrHhPZdhb7tWJJzqPzZ9zR9Q5PeQZn4MdpGknvJoFpsXfmCTBrwep6rxhveqd8iwSHtNpGqs9KFzmNmwF",
  "key23": "31a38zQAGkvYBDiXJknzZzybimxvkmpb343VKchEv8XRi8C2JxZREBjKG63gjruRHjCZXjtB2NnCoAiErMbWDDp9",
  "key24": "5qLHen5fwS3FF5EhdGkjM2LcVs7QkbjugwTeamoBtkysRg8knxjb8aS8mitemzcpGAFqoNhbELiwxZKH5UKypPjm"
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
