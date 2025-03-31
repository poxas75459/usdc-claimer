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
    "5H6m3M9RkZRJfF8Sb8jhXNoyDNHCp2RcBZjaKRAA1bUXBcPtdphHtEcioLheHwEodoSz782M9sPVAb6Kdue1obhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B3mGAZ91LevdS3a8VftDwok87za4aaiQtzhMAgFbU2Q1C1MiXVEuGJMs2oh7uLzENKN4goQEfXYy6NYzbEAZttq",
  "key1": "4HP3WGLzJ8yiZdyjwfcKJPrAx9yzBDnS1NTxsuN56H7x42aT2cGUZp8xX1SBckxt3NQQtiUvnQiMtiVE1gbbj4FL",
  "key2": "4SpcpXTQpJaTDPvuzBzS4CYg5kHR6otVi5UM38iNPZ5CwEbqb8bHTZUHSn7WAsxBoE4v5dNhhRKgWgWch2qCoPTn",
  "key3": "2GDSvQ4h4RtdECo9HopUMwi1QgvT7HqZydLJm7SdfLbzk8t9JkNSfsnqxXnb22YJJkztbsjTsSc8cjV6zmJK7cWi",
  "key4": "5bxyXYmuqVX4iUSWTRuUCb32hGSYUZvmqpJ6L3gFBWkUpsKEjCCqyq3ZihH4EUUuBcuPzr4QQVK3tSAeX2NVTz6r",
  "key5": "3tfHkGeJ59uw123kbGC422FTVMHdVTbig87f64MGRbYw8jiZnKFFRdJrKnHP3Ef9KHPsxb4z9ZsK8HAZh1KTgd6i",
  "key6": "5aHGApjKhTeqq4B1iUv5gsUixS9zJkiPbUcZ3mA6rj1mUCr9vYXMwGNj2rmpaHkN6W38CmkuRLN6FgmQUY2gjK4u",
  "key7": "3vnM8F2P2vT345sQPy4mL7vP939YDsTX7LGPSXmjDfmBTH6ZSw9wNDvAYRRJNWHfkmTczDbZc4ZrZsYyTUbLVdRa",
  "key8": "DAxtxjRcfN6BkYHiCeUdJ3bhfrCwsfwTufc7F5CSw24MyN1uyy7PFLH42ZyBbPNkzaFg8RTFMjsfYdvgXfCFqDq",
  "key9": "3G1xpgmt7GUhWKsfE99q1MJXJwPZjZtqMv6kEgoYidQyLDPKvAokfd6A2s9kaVVS2psRD7HM1Mu6kpEXGSY5UufZ",
  "key10": "4VNiR4bGHmWasJGwpUjhUxKsSr8PLgsxFz52NEb6Bpi13qV3YK6nxFbKHSkFBJhgzuPBf8Fd4Z8CoyDtKXxxngpB",
  "key11": "KUuFvsegExhZJiqo9i37bmRUxToyZheAArnogvCduxeGffxvmNTBdLbMCfx697MipTzwJodoBY5U993x7kFzkHL",
  "key12": "2ky5B1Uc6krPyqJmirGqwVpn9PfakUP173Z9sEjpi2ZMB2MYWDEJD5uwavmsHJ4EyFPpPCJZL8ffFh7o2mayEE5Q",
  "key13": "49S98GWQD1K2KthqcbuiXTcRCYa8xcpNmMdjRRsjAHYSbRipWmrMNzMQrhmTqayKxfGTrgeLr4D7HdpSKAtTzuBY",
  "key14": "28X5f8Cjj6o2pQPYf1MYk9E3Yrws5Wq5WMfnLrXtTDaeDLKgpZ2nHcBt78kPNyLwiTLmqHXKxnQt8taBepbRXYRf",
  "key15": "5kAxZP8vhFvkirSgwFYHwF1H7RFTkQh2wV6xM4EADvHmR2jjX2iN37nMzh99qpVn6JVYnTSRHXYEB535QuzY1kjq",
  "key16": "4DePBpkSv9hFdcnbE6kzUBVMrciVndtv2QXmhbsgLfWaoVLiykxgmBwbaGuuycvmyspSpdCSuZGvKrPcmzF6hToa",
  "key17": "5Hd6uppcrk5qDrWhf6XTWMeVjiGvX68eCokJUFx3FPXkG8rr5FwyZY9XnYcypHfJim5SN5YtUTcU5eV66i3xRBVg",
  "key18": "aTCQq6GhpN9fDXnSc3Af6FLt1QSFkFwV4sj9yHJATa8Lrj9mG2AYeuy5gXJi1oeJk49J2HxzXMgs54S3kzKJUE1",
  "key19": "2duTeifwQmjYFPB72CYDrKS26GjgZwncNwrZ5NnipW4QE3kQxjmCBkjzgVzypYHjb7FDSvM2fodZGzfCQyQt2hLu",
  "key20": "5skZX6HTbLi4HQ3R2pQoFPGsgrTPv1Vdzsb4wkJvGrNAyt1ckF7K5SNr1j6VuLdHcanEhZ957ZKWM5G2y6QoJwg6",
  "key21": "2LuAC38c7XEYEcZXPiZ6Xa8y6NyebaJg1Fa7g2CmBBNnNqUHtAFMtfZxNbFncdsrKMWRV8UcZGJuhrrfuKVeSUAB",
  "key22": "2yf42RxD6Vrn2piBWqVuRX9dxiGwKtf2BfKkbmMC1HB19PPT9hLpn6HgeboKk2QWQizWq2Vf3o5vQXRQUGXhUvki",
  "key23": "62J9y8QEjWeXhWh7DNvxwWb22jRz4QwFsyexomtLJUMfSYgqTacRGLB7b5UteXxW2vymQmmS39c4Fh25P7LZobku",
  "key24": "4urTkFeiGspaknWDW9ZJZcFwAZhAw9HarCzHty4ofC3mSJpC1GUFeP6VCD9rMGrCGVaDe6CiHDfs6LJ5hTvHWsUi",
  "key25": "5p39HTMGcMnc4Hu6rnTrjy2LRx3FeTSE7y7xuym9FFiULKzdu1ybSD2Ux1BKaQipgpz9VBCc5cGVhektcNd4cV4M",
  "key26": "3pVfVcQ2MPr5baH7qoSzmmvBBxttUxCu2hQhAxfq5P4yYx9GnkVwkA64JHLFywkM5YJB78X6TsTVwF8U7SouLNff",
  "key27": "5ewTQvfoTVAVpU6dktmyczggYrMniHJQRppYoBPXhV6xYan7kog9EYX2AGRKoH3B8t7xT1zUas9MDjnEUevN8TGu",
  "key28": "5moFj8YT6uLdnpVRxMZVDrtKQBT1EMHfTdc1xNESw8gUGuMsSBdkUPkx5URYgy8uEuw1XTVMTANLYDwaGdH6fmus",
  "key29": "cvUAB5i6rSMxZViYFK5HeEA1cdfxwyKLSSDKFRi66YTVasmewpNtZqB9c1Da5ZsQ46LLndqtPN7RrGMoy28snyc",
  "key30": "ddNh5MTGDdX4rUUHbNjHXBxNEN7dFVoFc3YKiJNgZQsBECbUZbXZ1bPjVRmVgbzfRr7cNXxtZJMoE3fr2rtfgox",
  "key31": "2rn2qBCS6RMZatkZoTkx8Mu7dGvkrwtNHHMPu4de75gjJXz8CmLSRkaL12PX7qJkzf5rKXAcb3smFUhvoDpPu5x4",
  "key32": "wZqUdeZhoGd3wSmc954q7vR9QQY3HJb3gUBbQQ6hWPzNcLPdua9tsdgox6CSzGSsTd7SwBkbnXjuNuhBVRX1Mei",
  "key33": "5qegV33JWzV5osdD3mUEeQci31Xixco3XJNs34yURHzqmmBDqYNPXPiyTPm7usxzhvqhked6gNv7LedCWgVpFktg",
  "key34": "3ofUpfArRu4MqTkAzpSh5Bn9w4CrrzLejMKFVyPN93KvtCSkPyyTPVh3yMPcNRZeabuubapMqAVpkYHsvQ9ZHJhM",
  "key35": "4J3AuCJboS82DxfFXoPdTaPMDzeGVhhaiNkR5RXRbVPRrcBgLTJus7g26AMg2WtmATCJP6cZSNX6RrsF7Yakh3Ks",
  "key36": "26baJtcvQX9cX8JKA6vK8g1tniNUnTJeNvhYnDQSiroNVQ23WMzzobuuv4WgMPjxLz2tHm9bSmePAsfAiNyxtJ9e",
  "key37": "4By3gArpuksf2xrWFk127S7CThGazzvu2wMqVJUjXt2KbenWBgP6d2AFhep7Ex8bmaExBa62YXUcgQGzHH87NNMk",
  "key38": "53jH3yWbY6crA8k3Eh6WoKiMgscNBx9xhd8hn7VnpjJhMPw8gZ33k1hdPAN1dY9Gkp8ADLPwmffGY57hGvG671z",
  "key39": "2wBx3y91pveM5VLt3hnhCSYtdPCbqUgsUV8HwKGqLaoERPppjgr2dHABankJEUza5uhE8byRayJ4tBa6swVHTRMX",
  "key40": "2tsPa6T5uriYebxAQeCvz6YUSxjBi8weR6uF4b8KDC6uR7paXHVwtGMMidKM2cuGCdFBAGGPXVetXFHUTAjVRp9Q",
  "key41": "3R11n2M9yRSpX6N6AZ4F8JthafSS7Gdx9wrC5HEAH9EMQErJcSu8CBgX8fZX6afmBYjFU6jotgSRyvuFSonmFjT7",
  "key42": "3oyFXrNGQmMzdZC4MNLNS3cDPyyJ5E58Xuidkr9dNkyRkFCGkfgNQMXJrieCqtukcLfhCeKshUwJAZhCHPk38ubC",
  "key43": "5kZFhLrY5axpnKxL9dW7agRvg7jncPTTorEXsQV8WyQgsrtqDQoS5iREZUwdwaYvQDLyGfEQGcyNW5L2pUZf1VN8",
  "key44": "411xHzfCeSKHi4o4ZqoQTYxrA6ZuuQB6UJ7Z2TiJRsxHch3PiC37wh4vCCfL2SxFyVLUBz1MqhXUpUoNt2qJticX",
  "key45": "DdKfkyikifHNmmA1Jrd2ChvKm1kgWRzzPzXG2gVHH2ctu6MH2kWHqBpKwWZV2y3dmanwrHzQ1XjAe1rka3fUjsu",
  "key46": "5aWQEzMAmr4jQFxRMn9fBzDZ3WYhRiqsvyoiPk9oCjgLkhBn9KDGwoEXLdUVH9XDs63Gr8jcFzUUiy1TgskTFzPX",
  "key47": "2LjSR3KAKq4K5hZrnDec5JJqCf8t8jYY8AAbXFxmbRrtBVynCvJnpwoQiWAo8xWTsVhKTGuR6r4rZCBUL8Ji7J5A",
  "key48": "bHawuUx2skPmgh1w2F9dCP7JBgcV6eochKhnmmAUT5hqt3zuLNsssaRVJbL7ML8MLQ1n4zPM9Pyh1qUo6xP5Smc",
  "key49": "Bu2ymSkPBrYetmzMNHC8Vjefu2n86x89wGeNu1qXqVWKXZh5Wy9TtxN3avjBeVrF4m1yTHxDsLEYVsciuCDod5F"
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
