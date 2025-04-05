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
    "3m31YHe5bTZPuLrLTvhKqmnMefpAeVGQ1nJ3KF8WeUWZ3TNYGcUQW8kCkXGtx3VdjcTA92ehm5TaijqQxFyBHAAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38evqyrbPZk1HAK8FsTL2hqfhT453PEuqedWdutWHBcbjuZqPKf79S5gw6qxEJRw6PfvDhbVKTegSTjR7jCexqXv",
  "key1": "3N83MW15v69bmKNpXYS11kBWRwEATLzKY3JXvEhVMU8rjaWW9EV5sk1ErbMwrzytA5rKevTpeZD4JFS3PYVkCEmg",
  "key2": "QCDxuz9fNAWTiZWsdEipb1w8JW8EpHQsuTUSqr73zyFVBY8hraxKushUfoZz3XWBetpjK1vUSUn551VJn1monw9",
  "key3": "2EfYfKA5wxXU2N3wLqCEEMM99cHGawhZLqLqSNN7jwLv9Ezmcw1rYJ89qCyvnfvcvf2gqvnbFkpLNnPLfa8tN3CL",
  "key4": "3q9z6hdPz3JLn8WkNNPqdgXmczHvJ4QicvXGDBW72XLJozbEkZoR1VfM2EYGfQfHRpDrrtLuhGSBTDZZebeyyRVv",
  "key5": "5XwPzLGtFPS7CCmKPC76Yna4zE9BiUVLY6dRn4gL6RdyjxUcSipYPkk8XT7HCdWRni29zM7DA6aDX8FVkKbDSG6z",
  "key6": "3u8odXiF7XTUAKm91wdBucwsKEgLpDgDNCC7mBbKPctT85AxXM2mtwXGuULb4gFLHCXbgshcAW8q9ns2QgUrqq9b",
  "key7": "3BwUAmTa8ZGMQWmAezGA8vQCTCqF24saNcb6SnN6nAwK6Q9D6vhr1KBdRNZKpP58TkD3MbsQ4CnMF5m12a6V4ww",
  "key8": "LTVCt1aocBB37PQiqiNYF9ioVMMNzoq2i15rVadNpSuZTrjfPoWpJGgvgDRmeGkLX7Va22ESTg8qwL7LxW1UeMG",
  "key9": "5c6NR2gVf6Y4dPLfdMSaUw5r9RJ7SiqZ1U6vKzUG3wJSWGHgVVPtNT2CFZW1TRpyyuB5WJ9zJ6qLPYVbSs1UjmiF",
  "key10": "3MwriCMZxGxSnJDPxeR2vecbbynQap3RtFGPqgkFAVmq2tePmyqAvHBexc6PGUbmTzARSdpAVekE9VGHZVKkWABY",
  "key11": "26537RboFgHaEgBDqr6etKuWPfZp97ZcAsSCo4fwdsH8T1F8m29fjxNJwLW3Qt9pZv7LfboBsfZdip4yg5Bs4bDY",
  "key12": "5QYkVnPVYSACVUHW73gA6pcg2gTBF3Lc84momASyQZDnEHK9ZvAdBfak3g23QY9kA56UcwiqwkXPJeJvyhQcEPYW",
  "key13": "4czKQezpQ9ofp6ZgUCiwSHhJYb3d6BxF86Z8Ao3By3XhuFCQRM3ZSX9q3XPpUxMym7hU7qo7QmqepFNPmRbRdqs1",
  "key14": "5FB8P8dEmdqzc7wyXtXfoeKK196p5MuFDaUZi5Mpk9kziwupsrsMoPYps2sFAsZDk4YZ1muw4b6pYZvRq57b3gHC",
  "key15": "mdYPoew54kWyzorsYjrRGvGvMsM8aRqCyURQ6CjkUqynu29ty99ENd9CsH1iD43JMBqK86CAzYT4CmLDt1NQJJu",
  "key16": "3U4D1tUp53a3qksNXrbDoYdE6bXXCK1vhPG6rS14wRx1nBtPxeLJ9NCWknJstXtwfyf7hsk4X6oqXbmiahJBmcbV",
  "key17": "3UN2773fErKw7xhRgimCWhP99xGc3KF7Hz42gKZFqgUNVogi3ogTTF6MLC2F3Q1nbqUNXf7R2Arjyu88vv8TQRy8",
  "key18": "4Ac7jrjpsQbKZJCSMqsRugbUYUuMfiMAZV7kn2g7esdpGgYtW6TCjb8mZ6qvVmcE1ReKzUScfbxw96j2VtR89iLe",
  "key19": "5yQoPvascrkR8ds7HbAgECjaZhKgqsLmZbc2ZsGJs2xHviptYAvUeFEMMonPLNQcqDH9uDqEaT7iuoE1b6kiS9F7",
  "key20": "2pNwWzGNPJPNe185cYajeRwTAwPrmg9KbSRzE6GUb5hX7ZruT94pXspUT3nMxEyjWQhJuihDAtsFArw9dt2vpqCS",
  "key21": "UcUhVw8TUkGtaJAVPmkgoDUVaAGpiahzx9H4uSaV7YL7b3vNZX9dqZ9AaBC8VXCNZjpUXMHCBwkrnH7C9vdkuqW",
  "key22": "5ks8CYJriUjBowFtR7iaV1vREtyXz5WbTwrzKyj8WsKPYpmtVynmP8gmJNfmQhX11kviccn9fPDgLzsudQCMb4Fu",
  "key23": "5VPm7vhSC6ivybgYUfkrMRhAn82yvMdh6To5ZQ5fMCe3zzxeKrPgoS4Z5Z8v4aujaBEN9SrdSCi8yeKASaqqAcMr",
  "key24": "3nMaPiNUtFGtpMBWLHWJqXMQZCeVf97p28PLgVNPZaP7NNjpcFf6Fbq5He6CM2jG8ySjKtT1gkwDsCi7EJyqeQng",
  "key25": "64qtmSiFrT3MhM2fxsiwdEedMEBTuu4NVLRNdauoGkusL9HQ1AdHUkn2BpQ2GpTrZVt6XjWWE8uJM7UtB2sLg2BA",
  "key26": "3FbLfzNuApud6oJbDWNPaf5s9WdovWdcSQyoYC8HsWGxxdyG7moujPfDhizwXg2y1givuvudpK17yv69znfwkmWu"
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
