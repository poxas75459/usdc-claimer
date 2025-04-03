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
    "UsnVq8HcaVFWZSywck6RS5ttoKtBg5RSg9ja3AJuKEjecmeFhiPhq8PythXsucDM9JarpBEY52vfp8wVgFVGfXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aLk6NvbgTi1TGCfWochxNptJ59T1vBsof1MexXEbr1JyKPawMVckVj1HcyNLEcwWNBZpFuB4TS5XV5zgUwEjKRS",
  "key1": "383De5o2ZbjjB2dnCY5e1zKA2iaBEjAEfSiSw3gS2tgmaWtRnjq4MjEaiokStuz9HFJy6uQMvRAV2ZHbPgFQcB9K",
  "key2": "2euSB8d1oewNJ8j9aK54xLxRmtdqDym5SXoDA51R1CJq6x84PveWEDcBtyF58GJQVKWbngd52dNmryidxDXHHdg8",
  "key3": "qzs16XXFrBMT5WxRqSpoHW1x7M3YirpbZYLExw6mbPe6MjZLihviAhihVpzMk1GmUetpvggie3XQAQRmQyiisSg",
  "key4": "3A6pmEMkk1y5X2a6QnxnEH71JsnSxVNZLoQKCPUG5jvbTP4ciZ5x5j9MVCuzmiUECQnEr4LgiPiQq5XXsDN9fTHr",
  "key5": "4KkvvVNACqZ6L552VjNrc2su1iRtd7LY3cvZ5Xgv2VF5BLSqDEjEh6UVsousy29Lc6wAq4s2gwchiaWpP1V6uX5V",
  "key6": "5Z5wdWVZF5fQNss8aohiE6hmjTcSuoWpqt3jd3kjNErvRQfSgM5g9bToTPAxnpiFzATD5Ctami5avQ7GoFQAXaaW",
  "key7": "3Sm19GxzxXwbV6DeoGPELYo7vjCCLjPVx98XnFfAmdGPosZejLq3FhV497V1TQcGBEXVCqVNEscHGzB8TQQBAXUV",
  "key8": "2iSq5h4k3f2bqNAb8v6vGKsDNEMfV4aaGDkU7jBFVpAouGaDANh99vDnQrgv8YwBysKibHc9T3akUdyDakErjpmp",
  "key9": "xDYMwtCtDyY2CJ3Rbw6rFaJZqzwKsLq2sugCn5tBirQsQaaRVnZruEth6q7tTBen9QrDzELZWLHVUGSN62rVUNA",
  "key10": "5jbLQegMatf7Tdje4RHeYuNuDNSjcdPaTsPqyQaw8euTc1PDnvN8c28t8Ghss5LWa8UXLFk4dtaE6FprKc3xaA2r",
  "key11": "54tvyiBftvUbanjoTpdtWqVpeeuUvs15AcKpPGHsuUGzoXuF1zBKfJebQh9RB1Q7Fh3Z9FQFpS2Que7mPVzHoXn9",
  "key12": "447uDhBzKMbwikmDeyyDGwoFNSkvR69XLF2VLDKQmATQHbZ9FFLuXU1AcmjBWoFBfRsq2YLPf2zX8XgFP4MFGmom",
  "key13": "4xFjiiWdaduyA5PyPpoVWEuskjvAX28rTVPVEUz32kZhoqCsBh82Q4jz6GBbWxiiUKE9mhFTrNQYEJEXFcwMuJKj",
  "key14": "2joE7Ss1CbDmBxZXJr3NN7ebKWLRhkByuctLJgD3mnLXcd4hMjHyrWi7A7sozRzCtoLwe8SHAiXXZ1JAusDdaX7U",
  "key15": "4petDn1SRWqNyvJuHaZLSm4AJtMqk2rf7GT52n2fWPjG9ocgkRbuxNvqdWBM4R7ZFVcZMvX3aPurpUuyUanfdYdU",
  "key16": "2D7aSoN8t752rKtByRFtTXLzkfm2dM9fxnXCyLSpDDUaeHbFKQ4V24pNX3apfqzyAv92rcj6Uy5E55xHiHE5bqjS",
  "key17": "4GqG6efEvRXHa7VMymdvDMHYgxkBUZFwKg3Vauv1e4MYtsQzCPT22reeeRz1AE4psSjehzxL5FvXQMxcBZ49EG3m",
  "key18": "4XE21949Q3EZfyBn2VJ98h3sRcTz2DPp3EMmBMnLwNwgTqoxZk5u99XXqJj3NZrQvM7v86YjvV6wSycEa62yvXUV",
  "key19": "2sDNnCzbpkfDVDDWSa1pbo83ZjUJvy5HAippGMeKUFJLLs83tRMVZ9YSL7tDmv89JeiBQUEGVzDk2kYuskkPM8Fe",
  "key20": "3gxuojwetGD2EgYX2yws2W4vK9ZmGEzcrPQWTbnnCkpoL28yAYGEzuS7LDCQj7tptzjg2uGcQa5KY2wf2KfpPFzn",
  "key21": "2Ly1m2QfniJ8PRT8Ap1YUfREWDvarQGRiGdSynudQK1M8erpWC9E9DCtS9gKo8kyqdjgTvrmeA9KRiwgL3fSsPFs",
  "key22": "4rRhwrYM9kgWY5XWuhVbEtHMuxsgeZMoXddtD6sK75LhLSzSDeGfM9BjG8f37vWqtRMpAwqSRjLWTdZv9LwY3JX7",
  "key23": "28YxHubMAxuW9mF22KeqMKyAX4XkRpyjrU4ygdLkdqdkUCenQPGTPC3ZBXPvk7GtaBBXERvZqTBvDy5kDEBHsosn",
  "key24": "GnriFWJVT7ed1qb8Qj8FTaTrvhJTKz43Qt2omFz65aujD8XDtgrybDQv7GJeueS6pSoTq6ia9nGadHswmy2vjpd",
  "key25": "32Eeh29kMcZ5g6U2WgJ6sQrtpX8cn42gsog76bCFwN27pEnvMqnJUS49dkE7NksowGoCzwoiGNocQnramsLRu35C",
  "key26": "aza1RgKR9FKs86dB2wp6g6ZdwBuDfjPJ2SdTQ5HBzHKY28hYJ8cN79EmVkSPG3F3RMBvfymRMPsEVdYEoMfiDrt",
  "key27": "4xQ95cvky36r3HGExZzPVdqprgnu8HFkSqrxyKddXGBoq8EbKY3FkucTU87w7FXPKMEZ9mupatuoTmfDj5HmVehg",
  "key28": "WtZAwEvnfi1NUnwAVH7o5D2BbgHQ3QMt4Pj1VhyscEfEU9uQm98cbjpP1Ad37rkKNwnQ3SsDqKPpRbeFB2yiQpk",
  "key29": "57ok85zQrYpVbNv3YVwvrPFgdKGpxSKuEX9RuaGDTE7KfS9uYSE1Tcc1sbRyQSTfTLHkwsGpWU5F3Jwy9mQ8uPiK",
  "key30": "xQDtDb91ZqtZUSZ1E3F8ZJGUtwkis66yk2kGEuUtb8vL5XuCxbz2W6BEUJiZmcdMo6L6zYvtY1BL8XUd2hncDXW",
  "key31": "43wSb27RHFdxQz3UcDBwc7phbsa8efQ5rxUUUyYfDCHHmNhAjdQjY1P67DQWXcf5UdNqssYzF4Ew8b42R7SsBFXG",
  "key32": "38GzB4V6g9FaP2LWtjAT9pSEAmQg6q6akhhXTndxJsAsVHPSQRMp8WyuypCDwfZGCYELHSkXBSGS9Hh5Krbjp7h2",
  "key33": "SknadUJE5zocmYuNj5kGo8XqYaquP5Wc261Kwx5LJaaLUHMK4ds3i9zbt9w53BM5zDHe17VzYFdP4piScVz8D4D",
  "key34": "4ukU4hEKCuok7GtAiD5oCg16UxBBohZVcTrX1Y7GTeGytX1XjAtVg7XULjXuCP7JxXTRW3SvNyrJ82rApU7vp6wr",
  "key35": "5fFvea8fkfheZFj3SQ1RYBVsZpnTzTXzPvzaDLHo7Xh5NBug8m5pf9CqeEr5yaRstGFcNgAbweo4gXRMvoUwZBZu",
  "key36": "666tLJuY6Px2yA6vPwHkx1MpAVyLXtJHP9KSQifRLgC6M5aCJ37qJ8389C254Mparu7RReQEPmuFzWoJh8LZYkht",
  "key37": "5BH93i5jwbKVq47eXQrUVW3aoJVUnMA5fGHasXSNupz53GJBsW8wizBqDyMi5essRhHxaNnUxJPcsHoMSN2WBUPX",
  "key38": "3ezssxWq2MpLzbCiAKYEGRgSA9d5gNVp4amAJ9M9vgTCCPZTQRNV5m62ae2LzbpzRgMksPKcrN27kkpsLWbMWBJP",
  "key39": "3eEgZ8LghpkT9ueoBhWCRxce5f2t5grf48nzNoFaXySKug3zfzmpjiZ2FrfubGXS9phzrFgi5J7bQNrAzmdUo51Z",
  "key40": "53TW1zA7cJdj8ABSHwCyJ2UJUMK2rYg5ADc2rKJTS6Xh9RHCQ92ANumHL3SHAkjo9Umgc2WdH8hWingFHf1ZhSLn",
  "key41": "58qx6DQtZQyiLqnMdwmbrU7f4ZQJcb3AeJqho91T59ctwaPouRM4SG5fGX63ApJj4xXCkKAzfpNipcQkaAzDL4xj",
  "key42": "YepJjb4RfUXtSpRz3U9DjG6RBjd4PPmuAkQGRWAwJRMhF5sBs261eWQpYXBehHQ2e7w3P7gSydF4sQVmEMfWjVC",
  "key43": "uVN4kyMPkk3EQbZsmrKodxyyq1xm1U9cYTRNVWdEXBDXJYzc4JnCs2zkzpD4mbysheyYasqA1cGHA9VB6dsqBfT",
  "key44": "GSPwaMe19bfH6kGZuWCSCntsoce4pmTRYEoGXd4CzEMF2rSTccqKmWkkhoMrYLxkZdwbKxrDcM5CgqiHG4tzeWq",
  "key45": "91hS4CHnY4r8oVteK9DZVppzcc9te3tHUSn3gV5nQW7hBVMXpWFqTqQP5NpZLS9EDEFBZh6FQFSHtpSohsN9omf"
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
