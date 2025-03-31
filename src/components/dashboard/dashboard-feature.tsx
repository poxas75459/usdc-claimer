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
    "3QWEyrP2muo7tKP5ddRkbjD3DDfW8UthmwTTCriWuo76BK625UUhi6j3vNQJYHrEhGMSidohqdRiURaPEfzSNFdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTh7UL2LKj8ygimsyVd57ym3QtiWyhcQ8p2GDTftgapDL58481WoUxS5LzS68RbAD2EJCpFoNAfqGpMy4yEeJ81",
  "key1": "YfbeL3VJZtqs3d1Ng7vQ5SmZSAWU8tzHNtZGpCMV14eWQafr1hNPeq6T7hgSsMC4W7Zv5vpafXwmSTAEjxM6Fuq",
  "key2": "27CXePTnj91xSp74Zmf2inNUX3Yov8Tu5haGtNsPXbkw3PKzMYXbv7stg62K8HzXs94oVPp6xTnCutSMTRF3PMGD",
  "key3": "kU1zvKrzpt2smThSNNzHmmGR9tP7JdsBAg6ZZvcTcK1L7GgjUBTyDhUv7TcVVd56SvzMAPwLPVfN4RrC62c5LPL",
  "key4": "43358KBoZXx9wGwsQ3Ad5ZUbHpTGHVpfy5Qmxrech8ve3cnZAvpZpX7737JgbhvcBvTRfHVHRQ8NEd9BgNxEG192",
  "key5": "VaQNVJm6SHCr72TPia8zdDKR2trm9xto2nhL6k1Qint4atnb5rayRXBZpEj91hPRBMkcxQwrdzvhcXTjhiGBnXS",
  "key6": "3p5F4EGh8QRZ5ci4ey5zY3ZhGz68s2Pxx3tsLQJWXGbhUSbLPFzLx7z1aHUoq2oZcbyZaTxGnWinZs1rWZZPvKyA",
  "key7": "4gU8qT8nyeHNwdu98BrHpuCHdTy2x7RX7yBLoFu8yhcYnqccr5fS6YAo7aVGnv1TqTvYDPwzzWXeJtuZjvP8nHzQ",
  "key8": "coEa7xYZFa7CFVXmKpum6uNK15XQkBu5Qc2EreyDN5oUgb1utHufNwLA1SrPzuWPX4wvetpnqmf1ydhshbLy9fu",
  "key9": "3w7wPJfyAKRNo2VenbvALTb1R7L68tTsPc6cL6T3X23X7JKPpbyyT82PZB8yxsoZeRNmpRoCH8D4GDirnzjemavD",
  "key10": "4SKeVGMxRpE3WB5zPN8WGJsVSV8Rwcs8XPY7fKvS8w2SJdusxiHFhGryuiddJPpSQbXrZtdphFjw1Dr6WRB261fq",
  "key11": "4VAePQFRNiJfWp46Xf3FPWag4ym8AouWK5GFnVc3JAxBPRvgZg4vgm4vLYFHcuCJoeeYXCaq5Kk4veqUkSaZEpmp",
  "key12": "5jYJwnQWeUAdaT2Qt1KYK6y6SbmcHgGQkpbgLdkdVVTpdxeTNBBQ1UsU6QvG2QKS2Sj7anG6T1PNZai7MqoRUCSu",
  "key13": "44X24BXYZddLiJws6VuECrBU6XqTupXnF7342tqyFXm2K39YkNFLDi45fZnyoWbNTMkoe1PJdYe3g5m1YWeCcPfr",
  "key14": "4YAw4h9eZQVNgAXhnqnntj5RqoESbUrUH9fm5xBU4yHodR95DFxQhvt1BmooAWGKsstfocq3fd9w1VvnD1Et6Had",
  "key15": "38xyL5RjfgBcnAbkaoQEYujv6X8Fy1tACyraBznpkVLgawaWFLBTm1gPoiWptMRTtvP8uRimdSXLkEiBYWP5k1Zp",
  "key16": "2XXBnRgksEHzDs4cWQMS3ZU3U7P3pMu5bs6KcJ2UuYh8TsgdVos9ffY6hY842rH5RuJf6xNuhSk3vZftBNRwkLYJ",
  "key17": "5PvXWVtCmTJXTvTFjJxK1jrycVeVGiCj6Xm2jB9tXTuwcqUkyxmt44GUXr5VXJiPPc4yztSsZ5tGC1ZQ9CfQJ1wS",
  "key18": "3j1d2oCEmUAXdbG22UMNmxuDn4bpwBwewmrSJzizGM7Ze7NxUVcEkzAase769bZ7VwS5FqpknundQ1kkDWMakbmd",
  "key19": "4QZYo32YNmhiGvqHyzUV6ruC1SYd9beph18SpR9Me2R9fWAWRPoD5GyZE6KArBTAUUdFFMdk8okwiAmB6Kw12qeC",
  "key20": "3mVpTdxZZTER6PfT9x6Uq8dTmnVPfFoQDaRKDM8cxpweDbk8NUakEKRrA92PErJ8cXKcAZRozvJGC5zNmqVJgudk",
  "key21": "Yxs9Zx25sSesFiZAQ9PeB17CQuDNfnRuWtbyZj68ApnXRoGLUh9t6FxZ1YLVQ9amJ6Hb2TEVVhmW6TDyTUYdDaw",
  "key22": "UZzVqeGXm1hCWuVu2c3hqgwBYe9fgMiH177rg8aeRWeX4Tb5d1Uyc3x39tj43E2umejvDhWSbdJuKXBXSe7ZxzA",
  "key23": "32Nfz53PQTfX7zzf1EWCphsQaZoiWCzKyKWeamSxYCcdPo3Ku5f71m5xB4E1yGhYB9zvdF5HTNZaQPxKPtQYS3Dj",
  "key24": "36AuwYR2Vdwx2zMoBfJUVhMY11N6WQZWUjxRoeGDPHNVubrfuyWKk5VTLgjii3vkjBgbh4HPR962ZEEngs6qbHLz",
  "key25": "47ThZqXU4MeoEQytNuq51JiNbRv3rxq8ktQVL1SNoTmDQMYbCTAbcdMD9uWpmu12ywDADRnq5frPuP1C4iAGVaxp",
  "key26": "5yKsT6pACckhGxaCC1WpVwVmELTyWuTNjtoEVMLLcdKX2g5KAzmuZwFR4ypk9akDqum7K5TEoBon6sN2mcQiugw",
  "key27": "3uWkU3urAKC2i5ZRLhZE3Z9Ebxb5TzBfmBQtr69Bz6wsofqYo113hFPZaHSRUkd9Pebppiqrvt4RR7FreFeT9ZuC",
  "key28": "253psorUM7gAGcscEG8BbzLDr4MRdeb8Xzv1Vy8ySYxM2R85xjsde6HFBTap8ySKENd7bWZz87Qmo5vSA7x8sy7C",
  "key29": "doyz5PxnJXvHuC53KDTXJeS4T78jKNnMgJ1VC5NcptM3Co1wB1jqQZWMBhd4kvA8qx4VsYBdLzpuLtw2Wm8SiUv",
  "key30": "454FhFvTxqtxH64Qg31JUzDnLCgqhh9RaGRoHqHcerLYyAABRhwfucyRn12GscEvAkEeiYxs6cFc97GYuumu96mR",
  "key31": "3MQiC4cfgEK1yCG94urLC9pyRia2GLfxsLgeX5UBYUrfoJb5rLuUyC2WTkCvquwa6ckSkCK9NDiLyH6n4u3Gnekf",
  "key32": "256kSLUyCZnrFgg8q2cKB7vUHPEdLQsN6R9hNjvaVAG8qoX87K3wLJdwFnyArYaiuhSoBHSSXPjcJ2ek7iWXCmCR",
  "key33": "3Qr7VW5KHN32SJy92U27Xycaw531h7tTrGpTxVVkSjB1cmeeSUyW1vzd4FCLXL9kxXdG8HGVoZYfbodwQtqNXSvs",
  "key34": "5qD1DM1xm31UJ68wSEc2F7HNk4dJ8LTigXk22R8XRJsbPtYM79CsX7DoYbz9cznWhAuTFMaHDgYyTcBfPqWh93Zf",
  "key35": "4Fqs8p7ZCqi3U8sRmbqVbuCAaSGobw14zBaQx6xg7URAoQ36Gfau5dJN6VfAFsgxQ43p8ktrvdCVaPcYRNQijf7P",
  "key36": "uK5MYXzY9upqtxqYk7h4q5xRwn8JvkNwa2bbUNqbXjLgB242VC2n7PicQX6pvL3VRKgn2qV7o6mDxHhLyumYoLa"
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
