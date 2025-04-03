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
    "5tN3QgukoUvjkWJ7reLy6PQZKHZ46ZDwE8KaycXgi1zYgS2mBfDJjbhzjJ1UYFozdEW8SAxjJroZTt7zFpjps1CV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FAj4QV7qnxhvzzRuN8Uk858YLpkSoquumPGbHuZtSMqYaor4exbK4vNz4DkQ5bQHeeYbCqxZWh9T1rELgKE2DHo",
  "key1": "4SAFJACxSfQtbx2svBAqbP2nCU1QstRKXAYvpMHUwnworvjrxM14KAEkFifXK5r4TpggyJdDNYeDVdAig4K3ho9C",
  "key2": "46ycHvs68JEnH1mjBhba2AoM2XsFV4g2TgNNvJp31cLVX5jU8h2vj9CCTdDry8zjCesFkgZau6Y467YLU4UmhrVA",
  "key3": "2CiK8sxa75TzMPSxZU3UhurmQ2rwJDb93dPh9CUcx2L3PXrrHkWhBLwZ1tpgzuAttKYmtgU9UxARNNxpia9hapns",
  "key4": "2pZyGfTozLScqdVu7CgmxcjhCNr29THHBTdiDrnhoU1PrDWU66i7KvPPP77Rg8weXLRYWURjG7ZRXvbWaYbLPXDR",
  "key5": "5zrbouSayQrxPB6AT8mkwjkEraKzr35XJEBgdRM8KHC1xFuFvFN7tYAVkrkL2AvJJbFbcvLmv2VWHPfYXGhB2uyf",
  "key6": "HsrKQUybeqYWENwX7ubLk7UgAE1wY7FAQ6WsCJiUfYvi5WuvE9h3urGnmGSGF4oqCzpYBpLvaVHyKB2pDcTwmak",
  "key7": "dw6Cj9iuab5sLH7hm7118dXiHe8gTtoYftXF81JXPGV3QwCDorSkDfSGECkxsa1DGpMDmkqcizxvt3ZKVsXSNbU",
  "key8": "57codrJBmGSFUGL5hTkxi5zATGADwRZ5Sm3sVW8rLAB3YCJ8GcxuS9mjvCcXAeQMEMresjFCCoUjAth669CXttfg",
  "key9": "2LGddFyTuPf2tcswWfW4CSseT6Gmj3jZjMntKZ6hgjSP9HGvpfTkdTKyekKAX5jn2xkNtvZNcUYW7e8xmLEuognm",
  "key10": "2zTs2jozmENeQxv3dBUA8ihh4fUWRHbkk4MZCtHL4PBMTMu73vKzFxQkftKvHewK3NT3Kno7fG7WBQAUfwEtyo9N",
  "key11": "3ymaENto5u9fJ3Xu8RgremCGc2WJLMnCCSqoYkXcafMAh2r1hAZhu2HBNF6ypRADMZjCVqZ8YZDsC7wLP55BQXL1",
  "key12": "3sVQyyLhJPKaAQYS3UMysvJMzvVXXUhSdi45cbhEJse1GPhiMD2J4LAxDEzZtF64UBWd8coD2aXxwRv6yhcn6s1q",
  "key13": "4NCjNSBToJ9bJ3ciHafxe75WWuYWpu2afU4RKfcgUesh2SgAzWAw8AeKn5NWeD7n3L5xkh5bYSPqmg6J5ULpBv84",
  "key14": "3jXqrsYv1KpqcsBj9SvDZG9e7hf8MVvN8pRtYU7vtTg3PVZL5YWx98z7pxVoqg6wEi38uQGBjyufU5AhJaDjiFxS",
  "key15": "cvUB7DcmrthkEDnUTcYTZemBtiJvd496LKs3MHnRi3F5YikTtWC2UL1Htux4DByJmbj3G8bUTTvR8QiN1Rpx32b",
  "key16": "GYfdKnC1Ss7Kc9dL9fn9z6ADSAimkdzxmXtM5oEGNieMKXnhoF4jL5T8mFiei77j6wXG5UDCs2FZ4kGMcnST9XX",
  "key17": "RBCzGanyiQb66oN9skqeLsPmtoVQQJ3WSS5zQ84rWX3eYf3AgRLN8ruiCdQVc7WWZimAosWdDrHd9YM3QTVBEwe",
  "key18": "4RuAVino11EBSjhDa2oXL94R1FGKEnPJTePdjefoF9QDuAhZs5JNFzv26jWeJkDGtiRniL3jbb2YD2mcW29c5oYv",
  "key19": "78j8qTbi1vzn6s9aqjvas5aFyqCQ4V1KWRb24fUiRBbcMLKb4ci4pG7JvmUEakqGjY36uoRJa3BVZi8Z5EB1525",
  "key20": "5m56XsBrMqN4npJ7JjMa4UHWdcPN7Lf4LaFgfctzyzA8oFZTEsTEGsddi4wVPKicGL2HzQb3d6NM1iLuNzjVnTep",
  "key21": "2zkncBJBGiWznmhqvmYitnRLBXmJMoMbvukrsw7zC7kcs5qQChfKxcqNuPTDfkA87HCg7LHWH444As7Q9r32LLGZ",
  "key22": "aQm9Tn8u6K7CdvJcBpwD6hSig3jqXePfjdYVw6BtW9AiBSFiVc9ChQZC64YwyoKzDARUS6m8kLn6o8PSC7JmFnc",
  "key23": "4voBSABYJqkySxme6ai4ZCKsdKH6qiLs1LwMckRacAZfBzwgbcFaBa2C5LRVRXqfcsVuSYs9tS6764G8Sj1JF4rv",
  "key24": "2XcpnvRLPexMbAPja3CRPBB9aa93EwRLD6fBBjsUVp9kUFt5UenVQHr9q2yghZaz1v4mkLyL7jWpPxL2BRcoyKbH",
  "key25": "3HgiLcfqN5RLtwy6gZzTDTsjhHfWC2Tsdaw5jvQY4BSLgeHuRy24XDZSuJux7qUbsvDpeGuw1z6KYXoxXQpmT5xm",
  "key26": "37553gYrEhrYyfejme8dXpAAiDNkZEpspzUSnwJihpkt32ARPDcWSFv66hFSbQihQwWwkt6o5vEcuLaDi2RcWUXY",
  "key27": "2acFYS7wxU9sui4mJAuxDeda2jH6QtYynom5ixm24AEf149bScxNGm9N3rB4VGNTNduGFJB1Yd57LYh3W4E1kVWs",
  "key28": "2Quc3q28S37ebBnubkZHzhHgyKDc6YNqvap63nBCJAK8c7TL4hamY7ypvWGMbUpZj3eqaFNsqnE5j2FFxqkUVNvJ",
  "key29": "56SwdchQx4bEGi1EpzCPPQ2jwvsVyrZQMA2fhQQGLJA3V5efivprByRFFe7JPmwPjgszayptzPxSP2xSiaaDwrDA",
  "key30": "9QYoAvvdvvmuoDBMyxvtR6GquUDUkUPus1Bo5T23pLMm3hxDoCk1m861BPPn9Tjeoyyo2EtgavCWbLPeZVjSX98",
  "key31": "4eEXGX86N8pKdQhSXVBtoWm27YXgQr1dgzedR2ieC9ADtUDyJ2w2nAzNa9w9MCZmkrKHzfw2ZcNBExN5nGgJEo1J",
  "key32": "FfMXkZoE3sr8d5GXdc81qciuMVeAzUWT6QoCoPPHvRfHiRciyom8peaZeJUN2dPPQzStbDPRxvtudyQWKgMg9GA",
  "key33": "666Nh3DZ7w1XjgTRTmypYPnbH6QPx5ywtvVcaVf5rjV7LVmwru6q7DpXNbFuygLkTc1DnppJ3Y4V5b3BPbhN5ygr",
  "key34": "4TekZyCPgjhW46f8ayM6HmchVBt2oaXDVGT9oXrdu188FTrttmcn4E9F1wRBvTQsdvX2CCkDgRfxN3GVZN61rdsp",
  "key35": "28GuGUZrqYS1FK3fhmr9JfnKU6zLhVBduyBT2jP5L3eXiBEkMVLm7vRsjzA9653TagS83Gwi97j5W63MAmJp6Kqz",
  "key36": "49Bha8XnnNa1x129WHabXvNUDibupNZLRjJJa1jzK8euqVn4qB3Eac8py6k2xp9GqqQ3h6gzHqLKsT2gAzV6epUD",
  "key37": "4WpMf8DZSHRH4J822DJP5WwFaGNUa4FvcnCWBWCStTbh6H2RhhQxqBsXVWvdBJniApqjzatsWTfaCUaeDesmawTB",
  "key38": "bzpd4D9qjSJFrqhw7R6Ec9UAfg7rzGLKpUMJtXzaty2czmZg2pgup1q2u9ReVPSntSoQMMWhDrhsGPFXZBCr7se",
  "key39": "eoM8aRXnzbgiPyRm995DSJxHZgFts7zG9vwqfNCMUpABEsP21siKtN6Dr8jFAp7dcH2Av6PkPwLKtXh8N8K2kth",
  "key40": "q6wPSJB1yfbyexDGq93FXZvbiBfMXq5ERFpScKHdedAovEvfPY5CXKYGnm5R2kUxLSQu7epwDXGZGeB9Gjv7Uam",
  "key41": "46TXpCQNg2p4rMgxLHtWLw1oTgcRGGHVEowYQ8hRQbGcPpzrqoextTxnoUMKMZmy37MQYSdycstKJcxcyaqbJxNB",
  "key42": "5iCPJdXxH5S3pFzXnR7JbG2X67cxJszTRZqJnUHDcXWiheZPwuv4YgTdjLPHcZMDJ4x7xm2vfZy51w4ntuRBTyzq",
  "key43": "2FLCuRjzcydtJmFnAmYuYWgKwgpUyDfgJauZJsVVdZYi2YjXkCX7kUEeFe2mX1Bk1HGhCQJV1WCkFAuRpcF31VzC",
  "key44": "YUxERPcf9qzBNeamrWg4YhgFm6z8drHdyg2xZqt3Rbzc1mRvZHj7huFaNzogR7WnksetyajdPo6Nexe91jXRqVG"
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
