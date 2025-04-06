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
    "bptLWtTaxRCz9ffw4XAnLcTnN5bsqCpWEt8M9bEW3wUTDf6YuhV4zSFUCXJXjzCC6Shc9tA1RcQQSqXEW234sr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JzTGD5K2cHgtQUQkz5He5qvKTCV3ZeV8n77Hry8BabM4YuJxKK3fGD5vg2TATdPH1d1sMcY8dBTwcPpGB5kGix2",
  "key1": "5sHEJ8ZhWx89ABTRQa6ii6HGo4nigzDyG5EirfwWM91ZC9XVgM5jE6sALqWTqsY9fkDwt6gLwLZvxESBWFFTCHTZ",
  "key2": "2p39SDgcVSsuLkjg8ASXrb7GNhau8c95V3ML5iMQfFDNrTDpd1GxjsxoZRZda5PFcVwnpR7m6yWNLaqs8ggkJd4q",
  "key3": "5j5XXpMiDgE16oHa4f12hNvWiTQs4QusUuu2KWkvgbd18q6bGfJpGayLDupCq1j7r5ch5GDUKwVrcSvqREHw9Kyv",
  "key4": "vTcKkgjXr6JEMBBWxajBzWNmB32R7Un9MMQSEDX77268yMvAbq76unrWCSQvNJ6ArXAv13FXQ6YAmXf3ZCMRkuU",
  "key5": "mnvUJim4AwWdLkU9YqbmVmiXczSeRQb3JSyk46TH4FPtPVwLCh1TfBQ7j2ZmnChWG1yUDvK3jdYF6K3by8ezd9e",
  "key6": "3VKRSRiqcKcPax9M2mv6jn6rpvswTBeCpGhZYBa9N9oqFxtbmh5MqNBGVrJDotcpXNZSZkucU7DS9dtSjQNS2ZEs",
  "key7": "3BMBoSBVNZXuMcdE8m9uu2BmdCE7364C6dmyMLPbu488C2qw3misZuNvs6kw8m8gd9C1ZE832PVuJ9LX29aypLCf",
  "key8": "oUwkTKdj9CXsA91vGCmw19zBGy4ik6wks3iugZaSjF84UtmK1dDvmpD4hN5TkqfDseMDLc4ZMQPBaCcA35AF9zm",
  "key9": "3E5MZd7J6AX6jxySYLwk8GB7LFJD78wARDhftx7mHHXz1V8S1QujVn3HZ6xSBydPMRzUmkrsbYheB47p9yZ4nfpa",
  "key10": "39TMjEr5MQGiubxH78SqMokryxcSC6f2TjnWWHooGbHv7FZsREwYFZQQLYUHa7QwqQwmD1e2MGyMXhcW4BNnDFFi",
  "key11": "6wMyCkwLq8LKb6sNs5YBEAdwPPCDf7d1CvWTEq1q3G2Qeb4XfdpqVZhF9cobzwvpCK8Cj4NDdwfvC7tYUuJv1iF",
  "key12": "2M6iAvEwWo8dZmMd8bT39mNPTm9pPj2YahFsGjXW5KFWN88owW8MQsX8723iFqK5E3yLjbaijNGAHgbMc57or74e",
  "key13": "65tj9TrH5dhoaJpaBgJ3s8Q3b3QBa2npcUSwKi6nto7Xh7Rwg1xaS2phVsWgf6WyGRSZN3hUNMdW8gjEPwBoGKZR",
  "key14": "ueAq4yoHo83savVpUMEJmcSpJaGSuiQRRmzZBAkUHHYuuJeqJEx21nN3Vk4LEEXLhSmxqhh5KBf7QFep7CdyGDi",
  "key15": "3f9rcjMzrKz181RWmNYYJCWQPA34bpKfpJAYC5rcsGskgTGUqZEFrFTP8iK4Z5WvXtKXhCKwCWqEQfXpvyGrehAg",
  "key16": "2K5g8cVKVvvJbAeor9s6yG6HuQmKkMbrWw6q4YKYp5yFBYJNkxWX2F6Xyt7jm8s92jfF6T5t2zWUdBG4ngPATFyA",
  "key17": "4i3iQ6241zeWLiDMfBd5YiDNz6nVcR88otWKuBJEYGLs786y3p2ir5zeBEXSRVe9r7zx8spQiLfAq4Zip3aQw7F",
  "key18": "5vo4hvsyXBqTXwNmm7tNskEWh1wG6V5LNQz4BQb8usgETK5c6GvNuLzxYosMSVg2EsNEYKHKjJYxk9Pzq95VvaLs",
  "key19": "4mzxfw86TCGgbG1oRHsJk9GC8pnQZx5poHHnM5XBfdCbbwpVygtFNdGSQEdooqZqkXCAsUcuJ4oJSU2K7tPoy54w",
  "key20": "3kzRcLoRoFVWeEgaPVyW1nnRY55KpynRuxHorQdXGmuvjfq2TbBBMF8X4W2i8TPbSLTjhP314M8qmUwMQRDp9Cr6",
  "key21": "46bMghSH75YqCYa7hTLYj1qjZf9spJPnk92QYnbFDWu3ZTVReCbYxe6EL7gFQYqyCNUjxJAVupCPTHmzPLjjf9EE",
  "key22": "26EH6wpSsiNmaFzXVZCjmKVwu4qHQg2AxXCW9fff2zo24XtKMHN2oAg1tAHcD6NSwAt4gvQ6nrRjNSd7vVncGPYg",
  "key23": "2s45BC2URpXepK6rXjkD8hZttKhjddToVstUaZJecz8K7kG22cevt48NiFTBY7T2Yk3xmJcJxqh9BJ5J1UZuJJbR",
  "key24": "3BJK2AAto41qhZQESpxScNXTquA7zuhL911ftmstQtTNiMKCFr1WoTRsdh4xakPqJ2Nn4DMqkk63WR2yzodgVMv",
  "key25": "4Kqc74oQZh1myYbsu8KLxFrq25Aa3kj3fX4uqEa2gsVx37Lp6zojew3Sq26h9oDd43k8dSSEEHMEhQW7JBx4b4hh",
  "key26": "3Jfjv7Dn6iAPUMyAZX7wWHhGDguxEU4z1q5GUCy1qW4XczcRtfSWrPssrUsweiZW3AyTKgXX76xADW7FuegVc3oU",
  "key27": "3FJiaJShHA2bbBgXgtgAP2YCmPEDTyQugh57gLzUweAJ11Abc3jwXp2zM6wdxwSPG1yfaSTv6JKxgxgV2AAAuaT"
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
