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
    "3YWLrgVSRsKgKQvM53Z5UiScGrPggXBX8qqrwaKQnH8qht9ioz3EA3Jpar48HmzjSaoB3cQWTYprbzNgoB7wHipd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oGTr1LV9Tm2ToDzAFofuoKYCXSYWAfS4Ng2N5otCu3r8aKS3KqssDZahADwbQ8BHgJui11DNLYEoTafDEhHmNuP",
  "key1": "5c3rZK1557eG28KDkgmt7KVBoJQK8tCNiT3z36WSHtsvhLZtkMDJR3cxGZufC14C9ehei7zPb9twTCuqzsDBkJqR",
  "key2": "25Hwjdawrtz5S18YZfZjnQuL2fwgmXf2XmNFaaMAdEH3f95AhSTxWjh1PscZeyYUJHA94VvGipT84nKrhCGGfdS3",
  "key3": "239s68F1JWR2su6EkWTSMdQe2BGnmYxK66kjxrFD7twQ5mZR5quu6SfD7HD8EyDYgHXY4JcdhjDf7jnttB89Ta9u",
  "key4": "cZXMtyZhjhiVmj5CSHRP9fDz7QDKrtz7DbWoCHjw6Ka89RxSq89UdwQ3QKSvzTLTU1PmqnbcQr5aw2nTqjuVq3x",
  "key5": "25LzzCJUUtt8D438BiJFD4vE2MDYD4Th7t8rjGXRZBRqr8imM9gUkwDV11LhR7JYD43yqeUBSEEByta73RPYoYCc",
  "key6": "52Fcj3VpBRg5KTek6rr9EKJrcaZJszhoH58BtKqd7peTXX3e8PzVL31NR78tTmvdXCRKFDWwczS7KCBQnsEU26Nh",
  "key7": "63NDETVzhpHQjct6oBPYuFHVWHo3xzVs2iBKXBAp88cAXcHREeMk7UEoBMwTvn9Ezx6qYU2bYKn71kUkX4FmSkV8",
  "key8": "xEsj4c5kSP2zUTTn9oUmxjJQpRCZ6C4nFWq41Fv2h7ur7AnzLu6odLieFTJwjcJmve6wLV572qewqBqMwFvBA7w",
  "key9": "3GhoFaKhSLfYvricZue1uGAMYFTQnChhZM7iztxTCYL9AQmeWoQ4LGCXNXv8E3ES8P1zCLk8TwSaGk48ue5pXztn",
  "key10": "3cXSu1B3K1sR21bMRi9LTsHYNdHKjAvRvDV3f37NV9SPpPBRdf1ox7bqr2P8uQXvfDs9yPo9Qf2Mnx9cb3Vo4rpv",
  "key11": "4SKGJVenNmJGTowaax6KHBE16z9ssQ3WY2NcqSrH4DxoFidhbEWXdhxbYaAtB2QDWKhYvGJn8Yp2VxdynKars4m9",
  "key12": "5ab6iPjwdCTEHgtYBNexWmRwV1NM5HAQXsbJ8gpwwnRnZtWewAd8B4UvTPkLrxQBL6A5vHGMQegQtg4C4o32XkZt",
  "key13": "4SAmCXb8FgY8UV4TkmQ9XjSUyW5RhptMmSuxi9DLBDqauUAaYTpuVbiBgHDd5uWvKnX9NVd24d7JtGRFN4FBRar8",
  "key14": "63DrivoHFzJ2QuimK539u88cBRCVadRJTAEgJBxXdpMPPr71Jwsra7r1Vo3AmAav6TqZMyAYR1R3o6MHJf9PjxWy",
  "key15": "4XUuH7uh5ynk7T32i76rW7KPqNRUXstzHq7JQbf4HtytFGjk4kvK42VKP5eLd86DnomR9N4N576CTWf61njAW7B1",
  "key16": "5mFEnGMgQ1en6CavdPYJFTeQUcVSVEQg1b4DUCHuky2fwLMSiX1pqRbWiBQaHbuEU7PC47Evh8eeU8CKy24JhoqA",
  "key17": "2GVA12EwE8HcCywQZ9wzpH9RDp3TNBBxmvHJuam3hfRv9XURdXcgRnUBHgVqkRx28f9u4qiz6rUw6brUQwgAqMhD",
  "key18": "3TFYndxKZFT6adGREDKNBGEJsGTTzdFiXYNXzrPL21fWVXk6NSpHLQTXMQCwZggifpJd1m4iSV57tpcY8ZSHjCMx",
  "key19": "27LyYxrVoQbe2YgnS9tjGPbcm7cb67jNnRy4zZ4yNdD6yZtcep323xCjah4S475b3YPTBUhJH5LyabBeXbRYPfqF",
  "key20": "3gFyUQgPrVLYAWz2fyT9tXv5PLUaX3SPbarrAmRb82UFdfhqrToLBzZWaSCVt4wmRa7cxdogadLJZpMNSDF5yjRx",
  "key21": "2GQSXxmiQvKqAM4GrsE8d3Sku9MRtEPV85k6AtHPcGZ1wVoRk7eQskEt7g4CeQXrc6uDCntxFMuLD4pF7AayxXfr",
  "key22": "4N5kZwBWTwQeGEYUUpVMUwzRcab1evg3VvRCiT53NZT4CSsVb125Nn3QYkGmmgM1T23HgDHvEJJwBTtdH3zt1tjf",
  "key23": "33cv9QdMdPfS2V2a8EiVDL6jA8Sk9AwRVjmtFU3LVJkvK1nod4FzpKScgHcutbiw3bmRSjTe9XJUt7ibqLWbqkqg",
  "key24": "2omaxcH8Ge3WUU2B25NZ3ai4kK6YipYWmsd5sqLJa7Me7QeJpquC1EpSo9jgyU4xGiy87sTda4JEhofbcuCDm9k",
  "key25": "b1oSxHni1CX1fGianJbGEfRa2FAgFRNKrR3rGxvUNdjZZZBNPPG51qxNWU4Y7kYDivVQ8Mdbm8bcc6TUMcsPzNQ",
  "key26": "5KSug5yYukzZCgj93R5R1hAeLy7RkwpPZmtZF8rDif9xsbft9hGrigRQtKU2a5j9f9VwAYUtRxx3vD5JGaTR3ojB",
  "key27": "5sDymcNFNA4QiFsVkWBUFgR2j88ktsub6BxGWcXbfutWxie8eJGtGUJ5aEePMgaitSStyKDwXVYEP9g4CAFE19Dp",
  "key28": "5MTDZNEvCJ1PfeEth2LmaMo6sqW1QL95E3gaka3633ZMf5rMMgRSUhkKAaNuK1vJxNv3HJLVF5yNP6ww1Yc3nfpx",
  "key29": "4KDs8bWP4aBenRpRM4UKaxeGm8jqggo7baPPT7NGGeKDZVZJfTxGitiD9ii1o3R2J7wWspuTe6at3enSd3GZpaYJ",
  "key30": "1yAYTuttzzYLDLGMySbTKFGLDNWQavtnQgbgVpiELptP3vpNn6P6wocYx6tawbk2Dy5TtJKMqze85722bRpxcQp",
  "key31": "5dNKLS4UCoPTWdYHKNKMB1BLgwvMZ85NzSoceVmNBiEqxMd1SW8rAVU74oXKJDpUGxok5ThWJobEagggmpcEQ6rJ",
  "key32": "4fiDa6zrXTyPztFvwtgn5U38VdUvnL2SRf9N2zYA1Ygu7E2pd4qmNNushjvEWxzqRPv79V9Djp4SR6F144M88WsJ",
  "key33": "4Ay7mAgpKHrCbh2KpDxeo6GnY85qsgNgjZaivxX1txeyVQL9WHQYxw7VKdgAckY3MC598i8QFVUEohu3qVXiF1Gz"
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
