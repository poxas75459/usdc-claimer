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
    "4Vx8ipa7hMZmdLg42dVCCAfUe7fQVSGaov3hSJrcaCWWAg8ZTmea6wm4JkzZWiYs8rK44Yz5LmqD1dKec421Z3XN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61wAJSBBPu7RhaMWop16ouLFD2o141JM8GuqSUweDu73qmbdAMs7fyPBhrunKSsSojP43RGvFs6d3L8kwcXSrzop",
  "key1": "4gwLiPzKmcD5jfhhYH4NjG5octmfBgcMariCTSZzzExJM9LcxEXuNgqcAoZjHhA5hTEoEztWZXRQNx99Ss47Huf6",
  "key2": "37s1BwmoPNqZjTmn6vcMy7wvN1n2or7tgG1nhzhSUhZwcxhKyZjxC5qWEgCXpJsvpYWEvApDcfxJ3JdtpanvAdT9",
  "key3": "32bHPgr2u1vQxYVUkRjkaTpH4j8bLVYii5DjSJtXjzFhjHy4Dz6v3MoMdJ3KiD1eHneyzz4YRsu1T8QeFWLxUxCG",
  "key4": "5g3HUfX5QnnK85CLimGbBmgALENpo6WmjjFy2tdBa14Ca6fKvUMSxQeq6hf9JePwPtuFbcQSRGmr2JMbXkCTEDb2",
  "key5": "4wf5LSHqeG6xKnvMa1HFTX5n3hhNp1mVnwTLg7UiExUeUbsZ8jFtruAUmEMMW9d71H4FcLvtZAVHE5NBaVrQRu3i",
  "key6": "5SpQPL1m6gZCP1DLuC5NYac3aZaPbfuVsXHGTXVw3TXuDiQ6ZhXUfscYHNHasyhxJa2JoCJtH5D5B1E1rr6ciwNy",
  "key7": "27WSTCLJt6NLatWBWrmBEfwN1C7Qb6aVb8Rdgbq8SiHYDt3RxTkQuwcpeWc7iBz57dHDzHFCpSV9c3Jr4qJAASVH",
  "key8": "uZM5XUjjLEBZPP2anjSKrJDpF2kGf6NiS1EHMG2ws3Y3onjtPm6Vb7nJgDm8DJSDDGczCy8dEu53hc3u9ravRrH",
  "key9": "2H6o2eVWKkybWBq5jpLLyMVzbGBP1FzuxAUAsJSwTs8WtcQvgBHAsxEgRt6Lbragbvgy2ERuczQwjeHceCCb5XLF",
  "key10": "5anWQvXGQn4DRK2MCC2TdZovpNZEVm7KW3U64bB7v7A9tahfD8PLBcsJny3cFXL5xxZFQrVd5WHYz7quZuETyGTr",
  "key11": "3ULuE2djxaw7jfkwi5qFdPHtviTqn9rkHLa7wD2RWLmM4nYv8Ugotzs9rp1yCBMEZRdHRx2jNkpArmeLitXFkkBX",
  "key12": "5KKirKxbNmyPkUE1rbNEU7UtZQGd9rJMVmVT5qGsVn3ob6MtUHmdG2H6JC19JxtMAFHy9vtuswd1SFjM4LpNSyVm",
  "key13": "3UQ8yqQ9vJDXoAETbVLmJATkeijBa3BBG1qjGHHsvx9BLMxRXmoBBWcupTSeSNATyfQSxZAhJMd8eoezbWaTkpmj",
  "key14": "59MvpeqNpbc55DpfBbkpWPgVWJACiQphJ4JBEYXMcEg21M38x7qD7BrhsoZeDzvSRzhqXC7yhHMuvh1CUU9oBu2o",
  "key15": "4KhC1UdRR7ekDQn7vPfprXFmtWcVzjH1DZvbUfJK2DXAgEvLQ3gMg8vCX561oCR92RqwLYVaqsVZkRbPguofrQNH",
  "key16": "5kPYwLaJiHx2TtdCBBN8i4qo5p5GmXtgtMNHQYCSP1cKE7L9UcYcmKKsiWPyxqrmVAyYuZdqQr7LNzn4JVEmd9dr",
  "key17": "3zmgUKLXfjALSpQvwdPXRMBdX6A73ALVHAPnQbG6SETqMc5fha1RQrBRNV794QmHXZjc8iuzG1WXGzjP2n5XMQgn",
  "key18": "3LYUFSUAbcya7xrxDGS1HcmH4D32D1zo5HAJWf9AMrPMkNJLt1M2YYEytM1BJE8rhbReWyAR5iMJ47H3fGtzrU8w",
  "key19": "3KQxXNPn8JFEKbLyYcw8PgtUmnuEGQbQcPqU5Z8GJdFYqgm1aPdMyjKEoYFwa52RdqdkLYdGjPJPnShKFcrg9rFw",
  "key20": "23hH3FWs7K37qFdetPL8HhYnrFxsiNmR99dSuhPJQgMsvkYfsddjnsXqAc7pY7fGdUAmNaWJMDBygfZaucacBMPm",
  "key21": "5jb73tXzz4cUAxexAZ4BnFrw1FEav4YrEpBAPo6JvNzqYp8kRtjGabn42AnFJU95SCtJ8BPcrLtPsJbCVuDZ1WF4",
  "key22": "X2cjf79Dag6CjBbhQW34sV3CUc8o1xhgsXJPaNSXr1vZaW3TPnCtSCMTQMnrRgx4i6g7v7kAxDVX9LP3B26KHy3",
  "key23": "nWR8csWVDZohvq88U95BuapPhhTVeSq3jRnS34sQG1dskYx5q5qh6P9qCjyP8qoNqPaQSnjUb4HmawE5ZiVvs94",
  "key24": "3wjj7N5ZmjeXAvviNPCtnFfMnvpZxxdMxSrWxzvWVRk81w6PE5UeNoYgouzBL7K3fXdeXa4rSgGAWyQqSKLH4ska",
  "key25": "DseMB1wtGvL13BaAvcdydf7ajxf44cmkxoXqKj76WhTFbJCtLtJFPpcvVNmyHLa3x5L3FLMfhZH2kgEQ5Es2M7t",
  "key26": "4yD3xtrrEH4DL2uwyjeixLJ8HBxtQ98Yf2vLdNvsHuPeDVL8zk3QopkLjQnG81U2mMYQFBCtkTBXsEBrFBDrNQD6",
  "key27": "4A64kxXC7W8QY6gMFNmtWF1dJwGJPomWeXTjEBxRHsrwGxtk9xZ2xmy1WMLiKw9wzYffPCv2QTbUCMkxNbFdXDpB",
  "key28": "8mHGHZ9RUCuefpaynNVq6yc7XgfcmK7sRcLUtpy6sqeLinGFcyS62q6ovoJsDjF1LAZe3CcpQ3i1cn484454B7m"
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
