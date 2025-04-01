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
    "34sVyAt57GYaw7u28piNFQj137cXcqMHuYjCagxrdd38bZfCtW3VXgd87wm2UYMuvmX9iiXjLgXu3CWhuv8iccgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJKwc6KULKBMeSq7KhmWUxM4X7nEDBSQBSTTgSQymfYGii39cS1MMavXB3dRpCRhfbph8QKD66nf6u1VyWEH5so",
  "key1": "2VayH4pFEiqFCPLCnq4ozF2NiqyVK5GMEt7b2PXTELXGYD2fmkBufMcLYpEpdGdiJNjxjfj8wVeZsDNKejyEM89",
  "key2": "2m5q6F9HhZzt85kbv4a34iWTrBNPWAx4oQkjJdRNzrqc9BvPWDsXr1cAMfqoa3gi2nnSYKEWGmCHhtDwyNo97KpL",
  "key3": "2gAw2Ls5SfdrCWULAhF6rhzGa41VZL2up8Y9hw5PpHPQGp9cQqURGwh7YVJ7zfaMyffy287wWNUjeVRuAjvU98jy",
  "key4": "L9a7ixcz3xrmygtCCL45HfsHxQGvTeJcWJrm6DDJswAVLiuRsvLN7pnYvQUPtyqanusWCKD1FPYkDbTLDfBYZU4",
  "key5": "2Zrk2pPgMbSiRt1uVu5ynqUBWxxDhuzjPwbySqAasL32Fsot26pQZ4LR3NUcA14RboYgCS15NMC3xZtdG83HRjXj",
  "key6": "4n3wYq1afLEdkF12hsoUGArqN6hfE8gztGo35RNPtRHaFW486iA76JmpcNMcwcCrnCU1zwhZC3W5tSooQKVDhBBw",
  "key7": "61Agd3emZRjt2FPbeUfmqjRuP6y3FuLYeqvdKXhJt65e8c5AnFh74VHe3GgARcy5cDtKfMehsef12LULfKLAvEDC",
  "key8": "Gg1gabjK6aUb6SoNSAg7Lh1v4RXFRSGQqVFu135PBbmBH35DCRN7t8NMKzwSX3EfN2FQcCnr9B7sG1fXkHkfEdi",
  "key9": "5DUB6XGzJ5ekqAR2oJjYxELCMpZemxwcb77G7JpV99SFekxiRNo3ovv9mSwUpAkUhpenNKE2v2sCJLryjKsJnueu",
  "key10": "4ciJsQPbcrLKCcwWv6ardQnXFkbXe6ohnzDnEqcPJ1wNmAhYdVArSKsEn7mQjpt9JbBs3mP7ixuRti6nuXT3f6ur",
  "key11": "2eUkYjSKDpJBLsaUjsL3KbWajtCfMQdtrAS9ivqzjzrBQHydiqAUhjuuL6K1v41TdThB1Bhjn28Bs5WrmimNMirv",
  "key12": "Bp995t9a8sQMkC3aGTpNNAVMtBfpiNL8jbn1aEiZYmmtgW16D5kvvTjqTd9TmrPFdSnLVVtxoHRa91EwyCQkT9S",
  "key13": "4n5iDUMZdVLGbEDWcvezvZvQ6F6EY88Hm2S35GEzgSzzhmyaJdqiVTCAatUFcCyWmjRp1TAN53ysVbYAu1VQDnDE",
  "key14": "2VJ9ZQJs7QMffDQSQkwhYfZMkfPfRyhLWgxh1fSen6AZ1gJuQjBNCi6eEz1y3tkqWLawZpeRDJB7qeHWpwHmamba",
  "key15": "4o9qwJdcRQDTnR1ZHCtL349vp82hoMav1YSsW3pY3CDVLtiBRU36s586kSm8DYii6fVHJGskGVahz3hCTPdGiUEP",
  "key16": "594EjMS8KEWz46C54gZXGYgLKanDFxiRnn7KMGFuqzKFvgqqeycFZmWbDVQc5nykRbhfQdW5cGfuaf85WheF3gck",
  "key17": "3Xo42Vr812U83Lp9Thyg2apB3UPG4StiDJor6xgK5oLuaPxR9HoeECa6pS334x23VKjK1dHbqHdwhqdHq7vRnraL",
  "key18": "2XeKSdk5JZidNHpgcphSAVdGKWtbcApUpb82PypeC2exskywF4r57apxeSQBZzLrJdnkcL5SxMZtMo2h5MWjnyaL",
  "key19": "4LMBi9G7D6kxw9PZtjHpSpXSnCh368sRjedAziTAycQA2YrWAcdShaA9UuaEWMTimerH1tLFfbLKBNWofxzDHFP6",
  "key20": "PGhujhHzvEENpMSLJE7vdcXZ9VZe6QyyNjTPw2L7T2WenDjyKKe38rdd8Kb3MR1aFa6XWudwNPDqrPLpT2MAUBt",
  "key21": "3rzpohR3nfb1HCVbiWRiEZHmHUT6BNij7tm2ncxBQYLeeJD9chrhEJQo9wVdJjT1qosEDMvtU3EcMm5Uk77jgiFJ",
  "key22": "4nWfgZX2cQ1Ea8RdN7y6zE7tdfNWa8eDABH3ZWNMYLE6vh1HYUrgjZkk7T5uhcTaLRnMC9NWcHyzAZZooc5bXW8R",
  "key23": "4y85KS8zYBPCeowcRsik5uBp5CnvyZKsajhFCHuUwcXk7k9RWxVBzNjjv5ba1xe6NWxyUkYy2oCZJACUnZNuWCtg",
  "key24": "4VYn8DZa2DnnYk1S9p2mYbzbdpFXVA9JCshtPtZKgsrQJYQrcz8jiw3SXnGXosHzLo3P3cXxowrBWiWiKVfBNgmB",
  "key25": "4JHjJBPQQHWNd1CrkHFWPZ7qjRiTfaeHND4QjDHHf5gTPEMknaAympXeKycKe2vUaZ3PHbgnw5MrxoBsgFgNut1x",
  "key26": "4SaGfwLShQc1yWPwqHShowoRtxK4RMY1Hjm1H18F13bq1oMazyirWdd6WGAeCgDHhSzGrCVG6o39Crkdd8HJpqzX",
  "key27": "5sfzrFsSf3EWB3Xnqiki2RwvDefiVCotGQsYjPtT8UMCzo8cUKNxQrhM782eGGLnr6uqmAVTskmJBFRAyHxhrALR",
  "key28": "j4vzQWwC6WHhGgYp3ouVGzmyUDUVmpjMuX5m2gkXezo8Rkxn4Vct1qJJZDTeyGnFYdRn9fVerzSh3R8fxrcCGH2",
  "key29": "5vTXXRzfjFYCUoWQpYhaGyiPxRog2gaDVFJdYTe86reS28XzfFy95tgTePmsj24pUnGBdxvv1aCdNxMQXRELrc9N",
  "key30": "3ZH4bM7gFU6Z7F4GXoL5Ja5qkvWBFAP8Mm2WrLyo43n2AgeuhkKbFsvSUd7K6xcdWqhNd2rV1ZnKoRZv7exsDyuU",
  "key31": "3VRW4TpmUyPgHdmZYASxLzzfs4CuwV7k4cai3MHRe63nDxukZWa6wvMzPgm7X3oUejLcov1cH8ERWUYRgGaECffM",
  "key32": "24psTyX7498QbsUbJyHcoEQ6xEQZYwAkEjTEWtKudJMPgS4wdrwmuw1RY3hj38efCJA3DgE6EjtjLp398ZZYHB5a",
  "key33": "4PBfaMEoFd9vm8dnPnsiJExnXjJs8VAsXZzQrwKjiVfcYg9ARxYnxRELg8Uc5xcuhmZSSNe5fByFiEzPKKBukHjQ",
  "key34": "5WSeY9ZimE26dYs9Ae8p85sziQY2m7hXhmwABT2szFMNvxLpdrfxoYxj6kEHE9WfoweSKVCDMzrZDPjE15Kxy5hU",
  "key35": "2J2SqPCnRVqCNwXWqobu8JJSBcNfXgk5DkHsPQJW9HLq6oA4wPzBstMhPfvR9sTAwEKZMhoMoNaroz4jou4KbQcM",
  "key36": "2adbuw7B8Re8vzeqdNFNLup1XhbuJjRbEnrbzLoJFCoVGZSuvtyELYTM8CUPrKA4Qj4j8qcsNi2sN9FsyZAwYpyW",
  "key37": "31pyW5mRa2PGiqA8ncopVcVmevEGPQ9t87aexCUxVcese1hZ5Y9Aqj326Z4Y8YNKBa2dWJdWgpiVk28JK1qGsH83",
  "key38": "4oAcgEYzxQgMByt2qJ6pDXiuoN26zHkL5LmhyLWSSwsYxZ5udXoGRTTdYbikwPX5FFHJzpYsSVS5kxkbPiLgv1Aw",
  "key39": "3w4WsC4n3k21w96bTUbRZ7jQQxtdtBEMByJTHvuy7VMY9hRvJY51meRkp63kWBewF3kQ6CSz8rZHe7pHmoG6SvZd",
  "key40": "5P2k7kVbGWvB1tLE8Kptj1dPHs1YksFkKMVQsfbuyZqw5uhGNsgJVwL491vxFpnbYAzg8pNG21mRMYcrinFzsL5p",
  "key41": "2CNsjPcsKR7wZcrxXAVserEjUDkVecXSQYFh1w6TJUMqc6b9bQyVgeBA2WTAvZgo2X8MyCuBp9q7PsQYE99cGDvn",
  "key42": "5fswHwoZdTQxXB99xBmcWrdcgChwh17SwkyWAGdFCMzDwNUjLoo8AVWZCzf7gGyKLrFiYf15h1FrF1BJanTvzRu",
  "key43": "zbx6sddHV5L2bZACYi6ws4a6KDjBGCJ5rZh3tFKq97z598jS3PaEB6ocecLVnxV8SnchUbWbGVGsNumVgsfkmFU",
  "key44": "4kYnGdCWAdMBYCq6ehBYeHTgSV9uxkh6zaK4DhxmpVWj7JLTJh9VvzjN2CYiTcFKRBCPW7bqJwaERzzCbFPrxUNH",
  "key45": "2iqE3F94dyF1bFhbkUg9fBu6nkmbVvr9USdYYQeuLHKgdJ1rowTGAkNqj4CZ6UJZXD6b19PLkBbgkKV2JK1U1HLV",
  "key46": "3ahkfMhawtob4EBvgvu2zXkkCASqtHzPExPBfpBk6swetAkY7N3Qmq629MTNfkzcCfTWB7ugHNUrvpqUvdg7Y3Y5",
  "key47": "3ixmBcdMFxatoYfTKPwoHbop9APgwYaoDjMbjeovVgnNrEtawmv9SEm9aaqw6DJeJichweWmGXx2zuujMdhuG2aG",
  "key48": "5QcrY3BLvfs9ytNwBB1sf5SvtspxDa89v8nurg8wK6JaPS5aYZGmQ4RywJB498gwG9re9XkGtMtCW4D2Tf88TEWJ"
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
