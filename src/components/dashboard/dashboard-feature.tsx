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
    "4t5SastPyzsepq5UHhUDpMfkkpG3gzRtRghcU3To2tN3qUjfrsR8RSikm7sHxUtmkkyXL3N8gjVroNfKusBVp1uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3teErGh5JewSPYb9Fxpn571SxRsakDLj3vZoyNKoTbCqFFHXZoSiuEoV6fjuzDiGfSVC1NfkiL6zHopGNeNonKNc",
  "key1": "3K6zTsAWFeUgrbCyyR14zLSmWoApgaFKVDARY8GdYTKBtvzHFW4g7pgUoLTdD3VS7jhMxuRgK8vLUvhvxykimQgk",
  "key2": "2tzCwTfqYMmZAGRtq5S2Y3NyAtPazKyuCVPzaqsXLHK8agXWLdCLKJ7fXqDsszNSqfVcaJ2xX11MaPhsCyU6DsZj",
  "key3": "5Wm8nZu85coDCaqfk52qCtaKNyifhgVDUHzaTbkdENbPwfg6kk7edDA3TmLhfHZFXsPZ4X55tXeoZpy7dmjSQmeu",
  "key4": "51XnfeY6SHjDDDX8Ae8jY3ndb4eEbthdDoJZ5pkiaTB3mkMK3Y9F8optAsghKNEdTTHsKBcyV8TPLKJCs9VRRsrb",
  "key5": "35EaKXxWewm9SJUdPqDCtKYHErvTNDGHzYZxvAX88dnDcVhYATYhrZoSa6PL4NGhYtp84oahbCbkSjgtaHna6bGp",
  "key6": "5W9PpEN4W3Ko6wWEJwGvLKyejGLEWJacd2MdnJ4DcuRcoTVz525UPWaFzeGMUPXykyHqNqqpUP5cs5gDA8aYbPM8",
  "key7": "3oWZiqhp8V1EiC16RRUk962F5zGq5Q8JCZ8vWz9MrKweMSR4DHdtRvzeaqNPcdPqhydAKuM5GTnJYVeTkD6Nn1qd",
  "key8": "3DyCfjNkNMYE9CWFFUjbUXMfmo4wfwHtG4iy6uDQaUfsKFU3xbasQhfbNxVfc1DVzWeHhJxiTrXUhumEzFkLGfo1",
  "key9": "5eyDAhC4C6p8A79t9Yf1uquuHbczf35tgkDVoznUtLZc6KusvVgWzCYHM7FkW91NVTWd76Q3VR1G4yWE8k4djnUc",
  "key10": "5Kpm57xNdw9jnpWvPJ8q2r8xeowXqm1DxLYTbSRwfs1PrerCTdih9ZTnaZTyXA1zp77Q8FinPGVJroJVHSLReQF5",
  "key11": "wPPsYPDS9JPrw5adEcSCqNCbwZY8163bCZc5xHbWU8xjJcuGMQzQaQDQWM5EbhsjgMfFqjCcSMUVcY9U6WEeBgf",
  "key12": "3SFCbHnbchk3zLy3h6txF7jFTn4Xn9YoKFSNcFCNE75WJ8zT1YB5vTHJSjDK92gJppoWweFmcR3AFLQXu2v1U2HF",
  "key13": "3YKnwFk2VQnFMWTjWGziHTtGJqTA4JnHWajae7s6PSxxaGqCVHSV4c3dE518SR3knMVUj1pPXBq5Ay2GdJNj6B3B",
  "key14": "ddcnNHqJXfUGj8SyHrGNaeQZsWEhkFFCs8V8npJZFkmqnRTyPKHEtWhDqGvE7mUXRsCy1pYpV2JpiwUUCSmYKMn",
  "key15": "4wNfx92jErPhsV2XFaz5576yon3z6nwqKfATp9sV2QHjLGRGBcr62bXXRiDXBk2JVpsv2SAo2uYr7hJWiKcfjDEm",
  "key16": "vmD4ap6xd5Fps5xHrXcj1tNFbL1WoPeVuuSPMbuSKnTW7H93rufGFuky4rpkEXTc9RtLkAzVhhfZe3MAZoA2Vvc",
  "key17": "5JHZ6FV9WXPGdk7dnvcME26mP8swCrfvCzutwKmH6KgvrpT12PoFxYmGCdJm2nWLYBJbw1v9ZSnSQu5eRVgVUjsf",
  "key18": "2BXFk7rnqWNX2voHHz9Lb1x3ZbiFePzx9XdF4RHBFBsraKfN7kz5SmUf26LR6UWjwXeo2opAwCsfbgri8ovCzySB",
  "key19": "PHPGaCtFBm9kV2SdUTcGeyyzSGRoxj7LHxkeX5hrxQNn2hfaNTV96i8tkdZTDyswu9RW1yAn1BtYaZrqMKTdkq8",
  "key20": "4AgaqkAZ1mKPfx3tkhL8QYMTH7rZQHmTSyi4tAVgcZ1QnpgExjAKqJYGx5LjPixPX1AGGbJK6w83NiwnCwSoBLqQ",
  "key21": "5BEQoVNBRGJXXStbhf9keTi3qXmb4kRjRpxmas3uTbASqUBnCPLSSmyrX1prcqo4vgegeS3heupgs4XSDGjrpYiT",
  "key22": "38qAms23FPVJpk6zUnXPwm87gnSRpwNqGAUHvqVuRGJ3MAXcMJfZP2b7Nn9szRGaAKFqVt3sxF1ibKEYfLuXKVmp",
  "key23": "64WzMqxWYFemptuPbC8B7wCsFMwn25xnvPEMNbmRRJP4fyXs8gu72CjXEkZCPg9FFN2yjVzCBgyX8kcbypMpis8o",
  "key24": "4BD8k8TdzbJTrinwaFbCJ6zTzMdqkjZhGbb7gLtbTVvEXbCTzSijCBHrR5pphK24zqczdoKbZtBPxHjSW5LdbPw7",
  "key25": "54hVpgpMfee28WXCRDS7mRowA4i84KG8RZLzgKZr4LybGUtpbKeRCGjD1U3SxHRHUoT7JEpHWTq8s45qJPyFBNbL",
  "key26": "4a2VjdYwvzJerDLY4McqCpT76fxQVGaRPeknz6vT7XBr9DGhjjxL5WnrQ6ub2F2WsVGdEx85Ys1bC4NfrsCVqq61",
  "key27": "jeDFMx5oDvhTzdmVYofrE4uuxHVMAJ7LgqzxVYrys7A2MWW4r5mC2qQHBbLMwwqAaAFFJmHa9VFz6L9d1iGKceJ",
  "key28": "SSHd8hs5sHwVVkjPMG8v9Kh1Dm5AkzNYsRPbUSy2iaJ3v7VuQdSF4ZJrvk3QQkDiFhxpRP4NaQjT8UdNQE4Q1qu",
  "key29": "4YwW5WEPrNrJDdGPxwWL9E1XeqDq2KZzCDfK3t6oE3ZoXEnfCyRhXZKHPvLki2qXUx84mzJq9zBMo7V34YG2pjEM",
  "key30": "xH18dC1UFtrQwKiHB1rHYPnCQgdwHcvSSD3UQ8NUivQaHWESgBjJVTWj7DptupsgKQ7vnkakhBkqS9VyPCR5DqL",
  "key31": "4pRHdisuTwpsS3TwsTTmA6oeHgxzaKGy2cfzaugZkioisbWpBgCgiKEq5NgUKCgeyUFCcCX4jeJfmyWTmCftjG9W",
  "key32": "2KK3VHoqyuwy95JXfK59K5xRR45gXn6EUT5LfcsjJpWXVakUBWpM3vmbTKdSCVh2sdYzUbHTyuHpnHN7L4bZrqqH",
  "key33": "2myLfLruDvdUfrmwa6ky8MeaVTxeSkm4QejJXmbaWqihwrvDdGw92ZuxYNMFWCUnfXJKnoNasYc5KvLW9iRrvWd",
  "key34": "FXr5a3JUPhNUr6eEhe11rfzPXhBMPELmvfJiYBGZchDdJRdn4t5aqPnjq6EHdNpeDA3NaxAfNMpxfbvBSxGcFHn",
  "key35": "2bW2Cp95KK5cMPbvVPcdrXmMWiEuyFhpN2buQCdub4FBBysw8kyntJcT9fck17eYxNB1kFKwKdbZniSnUaVgyjJm",
  "key36": "5Bv6uqyWWo2PpjrrZHSjE5WNgSpbtpTTRkx6oFkpEwVDUfPz22dSFFWni7LCNYECswhPnakMUaJtV2AFKnLwN7ms",
  "key37": "575XZQgTW1zLnbfSdr36n4YjAL1nqhPLgTQv2ACAQtxRX4pPUiSF53Brg6oGvx8XmUWf7ZjX9Zde8gNiNxdPuNvV",
  "key38": "544UjCUAvAqGcKPFg12RfDA2ABXHDX3q38jVTDARcQduPpu4hNTQyeH47cd3gSFP73roGNyywHqbWvTVdsDsqrd4",
  "key39": "5yeLHgk5TD3s63hMERHk6zKRtxeZM6kcwUHvdRKFf4jxRgH7G7pnwTirvF5eyDaDkzgwkqAM7HZyJSegmPSDdf9d",
  "key40": "5hM3WKFPBQLpu82VAZidgfkCBiUhzHeFiYcyAj5ZJn9EQf2Wtt26hY8CNdqdQ81pQXiNfMnL2XmLVADHWKXn1DkG",
  "key41": "26EumD4jNZ5bBuxhTzLPZtnwagvpDDzwtFP1kXRZDz3G1t1roLypmSHxraxBWiZaKGhzLSxoPnEvZBAsjryZsTYZ",
  "key42": "5CoXqgTdWDEweFhkM7HVHGxWPxfLAiKtihNRjZV7L2JKxUijk6wMpKPJEP2WmiA51nuXfeHHensDsKktsXFQcDmS",
  "key43": "2RZfGETvajBXuXnN5PRV1cBfhcyZ9w7Eyir6LcskKnyH9EUVMyLn4ZuYbwXEjTG52Xu6wd3KKP2fYQ7yH4ycmkEt",
  "key44": "2nZbJgoMBkEdtQCggvf2n4v5TAkgdqWQn2SQdfmzrryzBwf2GSMgfwQc3WqwfKtAFaTi2f67vfoqvs27wFkow1GD"
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
