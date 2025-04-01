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
    "LRGmQUXGkwVNAsbkeh6v4y1mVLQjjeZSLEKwBF6SFV8tvJwaVu5jY5DZPyFuaUsjCnDzdeQYPPPquXkNcpCkT7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twzrFtZctM8uxEvMn6uQrL9oQGLU5rYs359brtcKxsmGDQzbTRappNsuK1W94ZXBtB3UqaPAYi9P4hU5QwwZnfd",
  "key1": "51BLbiKZZvQWiwyxHsGWPPqFpbLgeqWg4idhbCjY3gvGjqjiqRfzxsJY4BB3u3R4PpNEiAZ1LpZT2BPhp4ovj4yC",
  "key2": "4bLzoTmnJykG6R15QGqJAcz563ruRgFQvkk1HWvDbTkBSnFpyQebiDrLDDBBLpxT9hgvf53xHdwxdxwULPgByhr5",
  "key3": "2KU3Fdsipy6JYepzx5EuSERUezDrMy4jwz7Z6BirLXx9e3cddR5QmzqkcP4A3ufNpndgF5whMRT3tvrcHu11rRtY",
  "key4": "3WC1Y6RTfq84ENAjaZQQKu3CiEpZ1rsHTkaWWzsjyAMc4YLcFuSsPNyCRwLnT3AWB3Zjfgyj6Xw3UUZiVwKueUXf",
  "key5": "2Ut5WXTQTH8R2iyZj8DR86EpGsgJQNTw3rLRU4rCtPcUnL2vswuDVmbNbz6uA65odYBJoG54L2BQypATyneBZeqk",
  "key6": "eYqjNBAwVnGL8axbn9YFhDCdw7wpEKsDzQGsPyzwB6EpNK9yCmUviCnQpCbD4A4fVM2ud2ECcvt3ievNtYqnVsA",
  "key7": "356ZDPwkjM5xaiZL1w41LinkGP3wik6tbhFBQTp4egwmju9eckbMy2RkuCXvsMQ9XaGxtpKW4ipT9SKk5KB2qcj",
  "key8": "64RFp58JiWdR5kgJW5NJkRfXPoy8poSLoF1cPvWTCsfR6C9b2V2Wce5Q5q12r3YyRt4sbztrmPz5rhT8rqngA6Af",
  "key9": "RtqjHwoXAtiw2cf5tT9p8cM7LmeV3obqxPdTvPREJo1tWsDGpkhYDAdy2WwYZz3jxjhrKXHoovKLLiPXv9hU3Ch",
  "key10": "ain3ods8JbFAaP73jHhChNingQGwwJfi8BVJ2Av7P2u5ypNABB5snRbH5SNmkKQFzhbJffwA7XsDRmpi3CeecXL",
  "key11": "2nEw18jiF83tNGJLEmSpSZrzkEp3sFwVkkvaFTkesf3tZQqLbVJgTE1Uu2oLP9LxkZCc5deXBZS5vRd6UcPK5iVc",
  "key12": "3P5YtogfFEPK42tfjWKNix7RRz3uJmw9CfsYhc1Q6iLpEgN4d3UrfTyQ7Qk1sp2pBP54s7Cg7xcj5C8aFtzgu6RR",
  "key13": "2R5YQWBJa8BPtvy9snT3Eu5McuYJQAyCyJ21meGDvk5Tb4wwdSoDGnWTH2vckAfcGhsdWgL2QSz4iazvqPaa5HqR",
  "key14": "2ToT7nSm8HeqToGEqzm8AsihLV3HtByhoPSao7FaxKEZ3zaGd2QXN3Kfq9q1pg1cfpuLtgS75qLTv2eCSkprsLeK",
  "key15": "2mwMHE6wqVqyeLp4nVqFVQLEBTnUh5r69QYjXT4GzAPLn6jANGPjKQE5JNeFaTUyenvtkAd4Qk2LwsbJ9wBsQDgB",
  "key16": "4viW5Adb5kEZceuDZTvJCtEGRPekUxT36C27V7nn7Cs9q76DmoRDZHFanJYUCEGuekzX4rrYt5N4TbHfmoZqcFya",
  "key17": "3RMbPWegV8s9Cy2dew91ffzLkCwr65i8d5roCKDptRbW6qMzn5kHqiY2brG7ui3DLsiz5d94EdG17P5zPAwv9NtP",
  "key18": "3irh25Qs1LBFuBSgpm1zrKiKjJZbM7bwGjDWu7KRC7fsLSXAnYR8PGPNZVdzhXcYqSJc7Pjs7aTAaeKnaQW7qKKe",
  "key19": "2D7RF8s44WXfEa4uWZXsDwZgZ4w2VJZAuGnG4Ntktf8v2FbjYYV62U5HFgfdRBhN62NJ2rF19iW1bWS6Qhr6ocNg",
  "key20": "zVpyo6mwLhhb9FM9PuDmCxJVRGdwWiZGuW6N5rzUkFSM42B575XxKaD9EzqtHpyihoxCiX9pDX2Qcm3tDrt6SjA",
  "key21": "4gpVCMeSWL97JVdDdrqc48dpY8nm6aC3UcPK7aVugLRjCYKmqvXkLuPgEUB6GJu9yFSEZpegY2DW69rm5twwLEor",
  "key22": "3KbC7MLz1ENYpXXGDnp9UwUwrpSZEfWYvUfcLfDS4aqbcszokUCmDv9Dp9t5tHmJzJn9mJKvRAG19C7wnNGChpfk",
  "key23": "21um33xSb3urmHd4rv9XgRjpj9cpoRdCREEcU8JtVpNgzEzQwDycEkRbp8aSWsuVTNukFUDZetbumNisSQuXCqAR",
  "key24": "5cvnoUo3P31zrhZDxkDDuPUxYGyXJafpPsh9UkE1y87kAJXbSrGBhKAKTzxEo2n4cD9Y1vNE8PhWqer85cMxjnaS",
  "key25": "2rE1EZxsuuSyoMoXUtkW48k5EKpmdDySueRqyGmkgt3dNPcprbg6eknjHdHNZ7Z1rWYCDb6fuAG7GkC44a8FkdEk",
  "key26": "2JnFuBJD3qMjGj5HqA7qLspLG3uAhR8ri6LCHSZ5cZPRqW1wuswQ1cSdDGvP1Dhhz2EbNHQ4J723JKEQoCNNeDwt",
  "key27": "4nCvr8vqRqX8PrDyYHYzU2us8pykBTSja1wLBfREav1iouCpph6RAhGPPqXUjJdC6xvAuM1gK7ChDXji9az2kJaM",
  "key28": "475sh97uefLBxvQYPkCm8eNqLWE6Mc3cnp75gSfqKZmMJadknupg3W1h8K7LsTM8Aop4JLFkA46Dhn9Gj8rKDTac",
  "key29": "3jQ6r8fMpPu9NsE46Wmi7uZ79hf7SSiCWFTPmVx1XD19HEuHSiMCw75KoAW4v3J7iQYCdsJdbcQZKS66GSSNDwKu",
  "key30": "4qtVQaXUjgBsSBMED5Ygisvis9GRq3FuVfLRjUmnDz4ad52or5hAYVDx5G3jEQZAiK8C5gziSfvsEN1QKzUoxj1x",
  "key31": "41v3WPJPREECAzFNJqZ1NAAPg2ozbN7G3hqXR6iHGGcYGkYBaCezRpdq8JvEszCQjhe4EyQfZyYosCcdW6nBHR9d",
  "key32": "5d2WdPzP9iADVGrDgR6SwarKXo8Gdpyy6hpH5CWNF21ZrqemFehPHaukP7SUHKuQzYsksDf2V82vtjhqvfCq1Vdw",
  "key33": "5LHjKt9aW3wVMSEesX5dpGQ7oUYVqqerSv55KaMdmyToynk8zBqhgnbpiWo6PDvifjQos3VVsKzK4KtxBrG4TWcj",
  "key34": "1r8NPvfgEDLSn4221eZyGvfNzXkuvs8fqatcjJdu3uyVyTNTBDQTZ4SELsgP4ZoyBoGxyYSiHi2tshSQM567zBo",
  "key35": "SCUCJUmdfLZy1JsZQnQW7pQf6Xbm8P5iNZKFqb3kN9rMqtxXXupkwyArJrnrNztKMVghfLCA8hGjFiVgVzqZAPx",
  "key36": "4aqa7oXhZnFr4BhNUF2RaKVaYskPJsHiHyh25zVSGjzoJ55xLPjsJzuLF6ETfpjwvQP4X4V7Z5iEdrSKVLELmmPB",
  "key37": "vQ4YLddSyxHPuSaUdLh33Wqg9CwMKKuDJao7dnDdRfuuewgGBnewYhwBAH6BsMKTjR9m6n6Zk6Xdd3x83sXWTZL",
  "key38": "45NHssAnNTEffSmd8VLikPnGTWHWfRfiD4geofeS5yVkbdsEYCGHPBAG22DAJr2UskStmFa1wUQSg7XgxsjrLNSk",
  "key39": "4pncXDkPcXLYCsJusn6HSYWww7koqoiPTLPoEYLM8QeVbJ8SErv4iqv7MnHXBr9EMSqzm3iyhLnxWfC9nb1xr4JC",
  "key40": "66mn9qmxPWAC7Adr8XG9Y7VNisTVphiZvKcEggmnCNZK5Ak1GziXG6SteKJwoghzV1ikG5y6iRy8PWKiLX5pYYvS",
  "key41": "67257VmceCS2VpG8USRax9EFqe1tSjWitzjtibcbvjbdy6YpAuGM8PjE1ax9HQ2YcQU1AgXUGMWZN6A7kus3GQUB",
  "key42": "j6XPYowXhpQmKzyEQrXQvBT4iwGR4aKPLmf1u5K5uroGRp3AFmimuWaQsZg2dpxrmcdQCtWWbgxUAmnJF6THyz7",
  "key43": "4utdTjDBtNqKuT6YBmajWCxShEdyWUPAYQfTAV3gwyazMK82kBvHCumS7bzjvuFF3NmmTJFtS52qsfQuKsZ9PMVS",
  "key44": "2cckcp6mh13dfN7zZRzbwQ6Y2AkPRgy7nQmTRanWVMSNv1ssNnvC4n9AK48RJkABWE7EGY5EiK4FMrAEBqc2qhGh",
  "key45": "2ywqJ78vca1XxgnM5Vb1X67EtaNTvB9dw6me9VGjxSkUmyVDB5eXpX8m2KpEAZ4wa4nzm1QPg251AbiVDy6mLFNT",
  "key46": "4T1THDU55jPYhHJC593J5xzjc15U2o8G97QoBY113BYqZiQy3EyZqwms6Pr5w2nPC1gXTzMCqsxrEy8EPGuvXjJP",
  "key47": "2hLMx5W4J5yLdZbgckUo35PioZUjyHwwJBczpi1KWwHQjF2xv5fL2ihCvSso83ePJzhuXhtPgTSGaPTjR24wffdL",
  "key48": "U6yYUfpLsAbGH7dapQEqaNTbVhYKZnz4LF5yRNLtXhkYQ5b8uPEKNMCPYMQHbMSf44zffQMzeGDFCsAuaE1Znkr",
  "key49": "4GQE9hHzwvzikas8hetWEAtB7Xi3q1u8ZdVHTcsPKUUyyK74E3chS3qZAQvUasdwDZg4jCHDXPBVqNZyyu2VefR9"
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
