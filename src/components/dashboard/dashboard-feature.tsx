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
    "5RSpTt5ybYPhfryGapX96zSVAC3jQTTHBAeRx7xfcLbbzKfFEGgYvdp7pZvNY9pFfzUnwZ7EBr2tM8FgQ7356NUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tCoHfbP8Dsj7KoB6fufaUM1XKaPALz5ZjBNw4iiHYr7yV6twbWe1dCyk2SJRuRLYv3YxcBipu1UQvtv2P6PyM3A",
  "key1": "2KvgPF7dNpt25dwmqLysc6nN2fCD4Fn6zwCN8JdgGG2UDyy6tda32ZTSx4aRAx5fxfysWy7chsUZV6yC2NPo5Diw",
  "key2": "2mWQg1GjYpdUx8taFmqBThG5ea74bJ7GcdEoeMYtP8qaeg4sJ7S2WkPs7RU1ZVdWGZCzBz9pWHcmMtq7GSF7DSoo",
  "key3": "46ev68Bx3JXR6MRrxxzVkjvMEnhfBqLqTyLKckGiDCnMHF7BjT4D4x5H2WqFHGxGxbiBvvB6bags6Dfg34HWCFtj",
  "key4": "314q1HToKa6WZvKd8UHYA4AnMCjcUDJyDhhRo6rBRVUtdLaHsnzrFF3khSLFHxz7KSSnVYop2KMe3g4KBos8XpWD",
  "key5": "kKKy7y9SNLeCK97VMkWKM8gPRE6ZZQTD5ViL3LoeYTLJU6ec4r5NcSDuWUUM8oRQAhHVWoUAaZmn7m1HHnTJDtP",
  "key6": "4xR6wpxwSF741QXpUiA614jrE5UW9PNDbWHjmLoTcEVTufPMCFL5hYufvPSkByHRT9HVvL6EVGk8EAjcuiP31hDk",
  "key7": "67jiqWLsgQVsReG5WLtWRKmTPk3f9qDoNWDvGYycG766TXXBDE5ZBr1hxpQcCJNJZWuai9idMitBVCKyMWiDCzwj",
  "key8": "3HmCiAzPpMNCcKzmnEWsE5X234QeRuraVTkBSubVThkjh9gxgkm76kG8z7XvhTHeR91hjxNbpgpvTZCYogRK5a8X",
  "key9": "4PnshaTwKYH5RPmKfKVUZHDRSgPfKU2iY8povo8i6D8p5KSi94VfVnnJGPtsQjjw1RAttk6JndU2D17JLTQsx52j",
  "key10": "2M2odR9erfgQQU1bm2g9SAe9hUpDdTuvzuibf62VS3RM1Y77EsfHnvo4ZXweUtRykgqrFDzRFsjT4RdCeYKGSbJL",
  "key11": "5daFb78dkCtLEEoJiRAubZNTksXVeLgfqkHwK51MjCVGEW3B5mqqBGHnuwiVJcGmfmRAvUcFJGnbNH8a6owQgJXP",
  "key12": "5rJqJaotgnYTKZavQVB9QfDeA9e5eD3xKNmnsHLTrpdkT9dXBDzbisi6piKPhAHo9jzjBEuT7uHDkinid2EdpyC3",
  "key13": "3iZ7G6QQ8sJWdyTiUvdVAyPKxmRfpqB5z2oS4S14DBcEer1BwGQXqEvHeWfFSVWN2YDfdMim9SHHesnL4fJtN9FJ",
  "key14": "wQj9jdp4d2VKcn324wq7YxQiN2yZ5z9VkCZYwWGnfhDHpXj1WjS7kotLbH1d58DwHTkWFoYF41Eh7TuR2XR1m7F",
  "key15": "UNbxgy19avJsX4b1U3pey9F77NRG57y8cMUVY73ocdxBt7cRdBWJ3z78H4B4MsnoX9Pojq7GsU5PHHkxrDpBF8G",
  "key16": "4V98G4RVcNSVsY74meuxDCXNs5WmEQmsQPcstEhHjKfWLqhgdcwES9FLi472GAN454JZmjFrJftDDzDqjgMDzAXm",
  "key17": "55hZ4GLUYAiy5zku97vXpBMSC6uwsspEMBLEHaM23NFC7XFXWtpGZr4uKgWThgRXKd3e7xyLY75mUbqizp688BVe",
  "key18": "5JLKoddMKEj72Sv43gsfRmTi7eiEBFHUUbZ5a3sPgNKBAMaYkJLe6YDbhKhVUaGWa47mKh9sQNFxG6nThMWPMi25",
  "key19": "3Z4TKLe6EEysiSQ3oWbEjwEBWnS2mUq7hphooiJWLXHcLBzghG4Ax5Kv3a6Q2vYxsQZz3FcAa6hrCX4ZR4rbiY57",
  "key20": "2DZNQKwGk9VGRAFxtWYCtSLTi8eApiwKfvbWQt2YF1Aoq9NJWP7b9MC5NLxDTi7GDWQbtzCjhEGy8B61ggQmwkhQ",
  "key21": "4zuNxMbDyJ81NnCSLFDAtKnJYzhLYAMVqVK6KMrGQnPrLZnorvHDNP5q2gyFrCP3fQBtKfvocqCU4BP6XiJCsw5E",
  "key22": "4vYx7vQndLCoBfLaYkiChaw7DK9dbYP6JKxn4FqrgVy5vQ6BpbYBBNVXY8otQCiRRxNMTe823k34fkRZB2kLHXgj",
  "key23": "28W9v9HAvd1PwHffa1WfGcmw7GEYftk786mJyQL6fMBo8tUvg4XVNKKsjXUjq18yTEMGEuNsQWQJ371LJxK59c5X",
  "key24": "MdTGWTDxreozvBh61uc6fso9kfwMTHpHPN8MXr8cdDoiQwjQyp2tBJ134DrwYg2MM8fwRMU3PE9tnL8pNgKAAAc",
  "key25": "4rKZsseoFEDxWqifiDwpWcGkDKBLZeG5XXeiq4vQ79JKpM5Ttm7KpH1xvG91ZqnUcxyaczD5AQPe529Wdv89gfxb",
  "key26": "5xNQnqM42g2be8kXGxzGsdcP2J3v4BKasj8CdGBTADvATrDTAPXzUe5ewEVQXA4nfH4CwgDTMLcWxVqunxEYQ33J",
  "key27": "5T53F4v25vwGoHbiZ3qwQTq7nJfL6SSB2cffWTtiQHdXwJM6ivNkkLpFLNszrybSwNgsFix1oGj2A98RsBphx32P",
  "key28": "4t1dNUaFmWwbdGBxbdLSThpGve1MNNq5KhGXAt9vgs4TJeLv6pbCHeyac7jhkq55ysGDXzx9RTVMmMUuxJYkSzMC",
  "key29": "pwxnixNPK9v8CGXcozgGiqqnFF9YaNB33HQy7updUrf7Ypejvo1pCEBo1coufQL4YBzVqMnwbhnzF1fZyodR2Pu",
  "key30": "4aVeHHi8vCoyCG9qJcB88tuVQCdQf7qW9pUsF5kbWXYQTrMrGELAHDABUntfYunhGFHL62ERaDR6Bq7qZYvZrrbn",
  "key31": "58RUVYjtiZj77XdhPH3KMeUMntWZFXRawpiQYYQi9V9oDrbJzb8ZAfTQ68r8xu5uKxkR9VuEgToPKmTHLfGxvtZV",
  "key32": "2PeDwCLcakSLqY6KssVZYzpo6d7KLWqmNxgdfSCF2br2jUB9JArL2RR1nJwoYvFkzZPQt3ou3MmtXXbAvgLiSq4q",
  "key33": "2xgTPkJZDSP33BbCqJMQp2WrquWhFRhaACMXoe7Za7ZjGfi57YjdXr1DShPVAyVkFnRZvHThtNhA7xc3QkgVTChB",
  "key34": "L9ky5dZxYbqhZCnxwhLpPeQEAXY7yrKiPkrY5SX5TerCQLo8nw6zBePVizz4yHLQw1HqvRWYhYb8K6etZ6zCD8J",
  "key35": "4ZJ1QgGjSGB4r1dJGY8gBWqrhcsFnT9YTG7JQGibvQ7wu4BwNSfyeXanQkkWgjFZ1qdwM97XNadPkD3NyGZtwNMC",
  "key36": "w46b2uWi2sKqCkvykKhLAGo4MT8eBgQEUXPkmw76Jo44kiwLbruddNE2ph9dTqQSTSQwsauNCa7B7gDLEyUu5c6",
  "key37": "2n3U4T4TS3A3fmyhphBFUcXVMEG2QaWP6u9YKBxhocVxSyyYE4J3euhMnFS5ssymUmbKNUDrRPBHpQBY4DUzcDJq",
  "key38": "5y1FuJaaizDSEWuHUa32hjQhFhvujTrwNcft3t4epPjZeoQv3pDp6uCtczgjVrmtgejNcPCtuysvX67QSfo8noNs",
  "key39": "4bTVhYVE1WYJC3u7kh8tk3fKQ3QGTvyBjuziwBiUG2FjfbWQecyKVDauWViok2PfV3MVLEggguQ4VoBXMxfxv6Gk",
  "key40": "4vfjvgV5KhPPpR9FLA4VQaeYGcjrdrpHgrFwhpcyF1E5QqJYFhHqLFaHvsKUibB4i4f1qZ5M6xNnggAuRMLynYsa",
  "key41": "5SCWhHz98T36RMCb54D2VXbYAcpdufsTNreyegNoDfqP85HHdu6k2mmrc1u5ey41xFuhR1zqViD38R1BvEszsKoZ"
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
