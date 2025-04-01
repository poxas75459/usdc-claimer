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
    "5vPVPhbYLTppAQ9pUoy3Sn7bqj2z7vcE2sw9unGPSa3QUx2ixPvxLnmRj64Ffj11d4Xh5eC6djURkKMPPyaope8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SgYnBzVbsPsyvK9v2H49jPbaKE1NxXawei7EVQweVo5UTfmZ1C1iiH5a6aXHx5mLWgJUDqK8HAFQZicG61WJxp6",
  "key1": "38MA3Tv3NTNxupvQhnYLhbYvHagdDEK2JvnrVDJpcuaw1GieApbX926uwQE8F9Tzs4cqsUnqStMga4x4T6XVoD3i",
  "key2": "2RZhtZnArhkMwGXTz6czsgT31qh46jFFpRaFqrFAc16KVRyfJjek2cpCV9ZZc5EQ4YiHb9cSNWbuxVtnmVboAUmG",
  "key3": "4JeLRR26c5ubmjWJfmyNCD7aYYraqAUHgr5hcmeYKThaVC8REAKHaNmLgpgmPQt8qZVButjHUJnGm5vfTCSNicKP",
  "key4": "65NwXs5CBQ7xZjxiBVjhLbb4tHc2aQQkF6TJQsBjnvNJczqpYn1kSFN7F66p6ugpMoECsPChgbfXe1EmUYKWv9f8",
  "key5": "4PA4szBJYFJQM56LxVyZGQnG8sryGTQhXr3gASgPBwZyXAEcj35u9mdHH2ompfggxLgzULNyF2nXaPvRJ1nc2tLs",
  "key6": "c15GbKb75354Tzy6Wb4isYz25jsBVTpCV2RvFiHff4MEtBYSw6qrZAb4R5ymSS8ZdS19DZMj7Z14bA3khC9YFUa",
  "key7": "2zirR9yh2Xppsu77Q1Cs3nr9DfdwKABt1Q5t3Mfgaux7iPhEQ9ohaaBRmVqrqTCba5AMnhmA4H5YiWY9YXKnLuR1",
  "key8": "M2QwjzK1N9H9cgdNMZ5CNVRLnjsPjamqzhiQYm54M3dZbDkmkNNhQASCsv9JNvvDhTfxWsHHVWZTQmboXUV9KJV",
  "key9": "5cXmvYfpj3bu3zrA7KFzLHzvW2FpcTJDRZRSYZ55rcw2JfozejGxqM1jVMqaast2WyyXbiKapDLH6je4rbTuqb2q",
  "key10": "4REVYgxonikAkcThddPi2mQsbsTUU3sazuBJu8ecwtJ5pis5t5wiBjf3N39JW8mc5VuZ9wTKy3ouRAu31vVEV2e3",
  "key11": "pfgW4VXLzLHvLoCo4GkF8F8AFQcynReM9BK5g4faNc1MQAMSSPvdxag7gy48ZpxLT42QYSsppND12QSmN49i6DP",
  "key12": "3BrMC5TKBhc1jFmBRpoQj5Y8zZ2JHC2zVSitjhWLEGZmgTdVgfP7ScHv1kFew1ywPL1wFKFmMEhfi274PvAWshcD",
  "key13": "23qLmjZvMuTb25CS6fvx8wKvsrEwT7GtSfGWm7W2j1FoYbQuynQ3qgpjtTDoNuuyYgHJq3FuFJoJDTXJLoMSbqCt",
  "key14": "3XEiSLkF6ALoBmdDQUn8JaQwzDDNmN7YYJM4LqT9sbC4M9awPRbYxqYiDmpLzoQGJDqgyD9pxxRkj2Pz6b7mv9gH",
  "key15": "5BYtiZFtmyx6tgYjWYrBnhxh2PHRCRFPosnrDqQsCTz6ts9k3VvZDw8J4TsQm4KigtyUvnKnTXLwAxRqasdbnD5o",
  "key16": "2RL6KJqaHdqQt4DHQubP6cHpCjxH5Ds4fe2STzTa6PcDp7xeBxtyeFyZmDj24BHuoKXyZybEbpLwmsVpDdbW9s8p",
  "key17": "2vQ3ig5jfxGPod2QpzyrrnGkV2RVJNdDZ7oPcLPgvbVwde9nXqsSvPngNZNaZwzG6pfNxixqW7fxcMxCPYASErq1",
  "key18": "2kB1T3iSujJS6MjhgBxoaLaTxxHQPxFMyKH8kwhFFamd17bzseCAUQPUaizkMs6ucfhrsqCocybykrF3voDFSweZ",
  "key19": "5o4MHwE94xiTUsrs7J5mqmkJyzAQz23cTgM6pCLQaANZt5b3jnBUtQ1FFwY5cfQxyr2b1oct2wrw5nK1gUzY1ddA",
  "key20": "245fshTZ1UwSetj9i2bRzBSTuTUJEGP5hjj7G4ggcM2YdstGxdxXnSHMGDdGNVrtCQ4u9VNo5LvLRcNrAXqQT1Sn",
  "key21": "2FGdNuLtYfKNYADcwiD528yEuzgdPaatLUPvmraXzDNUqvAT9EXhtQMMw82nksiu5P7Juf8xW7rZp7bcBJsY8uAX",
  "key22": "4Pd468UsLXdvf2pyFs2dZqySGA9aWWs3Vc6KZ2nEbwDNSw3MsmCDuSUEKcC4utGmCeAR69oBJVWNh7LVaYyDToiv",
  "key23": "3vmNGoHhA6Gpb2pLdTdKCF4pvsSRfoU4Dy5bkcmHbcSMrsjPYCvYvZAULjZ7fR9K6zEZfXFib2LV1X3HLx4ZnVmu",
  "key24": "2DJnngKGi7476BfZHKshbx2bNvihcpNvepRJPZjGmSTm8iLMYzTM6AP63YfpRAwkADvTes5DtRAZnUA45Z1p8JyN",
  "key25": "53psn2T3xkiYuWUU5YHA83x3qEUgiPqNv27JRmvmRnSfYPBevYCQiBwqvjbq8viaGY9P3hZEBLAkXTALAyQKVzwQ",
  "key26": "3LFSriM9EPPDmsYSwpMSeqigAWFLW8F2NTvHgi4JgvCRayqQyAvPQPfB7WhQRFWVji6ggvWSyguYS3mVimNuTNyu",
  "key27": "43PC4NgcrN8jY15r7kdzfp5oLY7WaCBxTjVYCzPYdcEzrpBky9wXyeeyEgTxdJWGqkBvfu3R44S7gwoj8XFPjEWo",
  "key28": "5vtBRihj5nad5Z2BxCvNkeTXMUdMghu6bahWHvCB84uWZmQe5DbhNA5mgYFXFPEMm3VxcwroTGuyMDjPqxCgMjCu",
  "key29": "4NHT9c7JovJFM2zwSa9rbsk7F4SC1d9rkFWUfS6eix9JRHtDCAiZYEwDJM3kiUNMvjL7LigGStTPojXkix4jYiDP",
  "key30": "3hBuRKehn3nkHpSsSBvfdcKHF1cKGh3BSPa11Df8VSLjzDd5QdDtSWk1jjtyhbuNFuF3DNJkeQ3fNxDLQDwfdAig",
  "key31": "1ymmMFHpr5TYXCeyHaFMT4mb2xMrhfc1aHJUyMmjzS6Ly4EFULCYC7EntL9pqmhZHBQaincV1wU25j9wfGjsEma",
  "key32": "5zu3n79eSqqHoQtRmdPR4m8nnNfLyvSdwKiHMnvB7WZGimAgxMw7WCYciPR4n2UXYg3aZei62MhyyAeXyJkDVo4b",
  "key33": "GNoDo9NPF9fxuMWQhKX8nTjEPjMZFyAXGV2tK1CoJ1TScMvF7LfWGzHkGYN7KP5gZv6XoDqJPJFDdZYnknCv7Jh",
  "key34": "3ggLEtma8c5mwh9d5thTkEdjttt8WPSEPjdAs4Hg2rzSCuo1KfRfnrsTYGdrDrCfkeffGkdauvzBe3iYTBKtrg1N",
  "key35": "2u4EGscxVMP1DPqMqqKGRfx2f22qp4FcUEwQd5j6QB2GTq7sDsQz1QLoXDTrgBW5NUTbWqxbR6h28hQMwpUSBD58",
  "key36": "39UXntgV8bVCLdsnu2i5TgjV7S2b6SWFVJes9uwuJYhoJcMvUA72gvoVsWUo38N3MGZMSr9VQq9zdxwFCJDM6SB6",
  "key37": "4tzz29cqy9syQe9391D4wLK7qaCKoWvEF6THP9KfiBhVi2hCbQgavfdy1JDbVEuN3aMZshxaQwaZ6NBjczwfB6XL",
  "key38": "4vzXhCYDeN97UAhDd1xUXW1gY9CEgptQptE82nLwZN6faPn5ekCfhh8M8MabWm2aBJX1neSepP2d9ewLmqsjAWQr",
  "key39": "3cXHwDDhRiswoi4PfdoSqbpgbtxButv4UTtZ6h1b3BF6RQw8W2mqGhasVN4N6YxTL5UewSzdBFukDd1NnpPC8nqR",
  "key40": "3EgMkQHtTy319VobGao1q4D29qyyMsFHadXZpXAuZkSnjC6VET2eZXyjds9n1gCKNPFgom2RMNHnE1QoAPm6aU59",
  "key41": "3Z1hESGtKRzNKakxZmtLdxWV9khKq1XKNpRhReRmfppRPuYsb7UV6i56mhbfBtyWmaz7wzPzr6yZKJUW5kKLa9PD",
  "key42": "4ci2ASctBxUtv8Q8mHYuYyHyBWo8UBzRFkqafPmjPcWaPr4d2Cp7dzQhEa8S2NzHD7rgv8az3fWx88UkJ4juLWpH"
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
