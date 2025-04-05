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
    "51nXiCpWbPAvX67NfVCTHsNVpA4hUhawBPuUJyoygSkCSEZqmZDSQbt5jWKZexWxoSZtnCpDcqBnyiTdEre1nCA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdrSAegpndpn8azHSr6A4vqq2vpm1ug5YJZLJ35wHhNZGG75iav4UH1V8skURjGBjMttE7rG4VwgPXsPGCqRYpb",
  "key1": "odmweHkHUtSGUrac5xCB8a8fXEEaSjq8mGFCgXuhR2TtoNKLBn5nhNAAtUzuJ77g5rKnzQHtFvymvsDSjQyhbbM",
  "key2": "4XbpGgA1fimvfYyGrf7hteEzAxcnixignPeaPGnXZotaHXnRJbe1Z8RdJho9G3bYQ2e3fzaGzdk7Vqjx4D8UpFzr",
  "key3": "kgFV6S7AMWf3gD5Q5ayRvDspP9n9UbJrSbPZB3AVCMzsPHHeNc8XiZsLgPt68pJ1ViZdFaQBxzuPX2LzrNNb6jk",
  "key4": "MtvAfdXyJ93WHTwCwoZ1BRaLFBoYhAj4Y83PYqVYaRgaUPSUJbM2z1oHxyoTWwWSwqRVUmvHfwJGG8aumXUhyaG",
  "key5": "3o4eq2RBykBzRWpG31PinMdGJJyLyJ76X9cpEbM2cLyhBA9p9zti4jBbscyzFx1gnG8z2RwKDSXpGD6Y9nDb4WGL",
  "key6": "45cQrvfBSJB7njLFzEpZWKptv6ho8R7HAdbRyZzFhqN47yQ5AkfhmW2AxxRUsStK9bRYk7pp8yxV5c2jdEZLy2Ck",
  "key7": "3b2KHD9PghPZepM8Ex1cKzC2xHDgHsRYi9GJTV9j5egrbyKCgtLo64B4vYTChqcVWfkCukhTT4xBVgfyfSMTsSsN",
  "key8": "5qomSzSbzfquEVWjmBoiBCkbquggyzuXwaWzKRvLmkdHRTz28fF58B5vKRgdj3L2SoLqAp7dxDpgxCTf8dL7fbUx",
  "key9": "2NF2CfBXMucNXm4R2DkD554HgpgwWuWM4LLSSbRfuRU644tkMs2fZ7RFCmNySxA1VxHKc8WLN4xrLPixUo6GpkKS",
  "key10": "37Wc6yiXYaAzcjDt65Pcyw6RfNP9rkTvFPgpZCtJf53NVwYpnzQ5K3z4e1wt7M47oN5abBoP8gsgSuNgZMRAVKPf",
  "key11": "5aqTcpLiL7HVRtQnGqLXyaZPPZRbtC28X9CEwRM5V2jPvDc7cEcFV2geL1kgGfEpimdpezP3WWNt5Tia2mzaK7rV",
  "key12": "5WKYfv5it8xJCvNTB74Ednt5U3QGXsZFQ7tijn1UAWMdiNYaAAt3rWvYJUUVPFr88nQyRwEvfnKjbCPE45cS2438",
  "key13": "qZ7bf7quxF6QqScZPBNwRF5AacekfU86TC98inysKQLpMXdiqa4qk8cqN4C3ErHF5EdzoKpzijNfirnTqFX8iJB",
  "key14": "2SS7DYLka7m7zothsTH9it3CCgaW2bqnXqzhzfcPPvxfeNs9wVAkRfVxMeWrkSnirxaKwpe4dTnpbJ4T1fAysGeg",
  "key15": "5NG7AeHcvwFnC8xXZ9Ad4RJjLYL6eSwssds1P6588PpZzo8akjqbQx42QmXvKk8brXsbZwNoV59KoaDqWwsh7qaM",
  "key16": "5ofh5Avw7bNe9UNfLUvcHeoUTtuFWxCLw9Qf3Z4QUn5BiGTE1mtiJeuzGPR4dv2x6GEAYx2awgy9fJ78Ca5JU1cp",
  "key17": "i2noPBhWYiRCWQfqEKLmAgv4wJYFoNw57dr8y2cCpSdgJTV2vrL1AU4PW4ksAwwwHRxm4d4bf1cE2Ju43TEkonz",
  "key18": "5YZotY5P46AtsqpD6fQzx4hnkXoJH6BHSC8ESKw8fqiqaECnE3a3Zwrzx5GEeMPNj28EUhTT2QyqCWVU71UHwTJ",
  "key19": "4MNxzWePsRUNJFtCRmXK7HoQeoQZvEPZb84HGpm61CNC42GYrdozdbfPUc7utVZDfSqoKzUrQu9pmj3kWPo3fj3Q",
  "key20": "TDDiAdsAYVuHLVrH1XZEDSFVEupebmHMNBFJ3e7TqcznpmnNUsctotErYAQKLYN2DxJWhawWA8qHXUARaF4cR5g",
  "key21": "4kKpGnt5wsJpdD3Qx6FcUsC6d5cuxKSYvNqZrmBPem5M6fH9MwhfFrnxpk9WzrgEkFiERiAvL9UgdurBvY5v8orA",
  "key22": "3ZGSDgovgttBFXnJjdtzHFgndVLiP616c64rWaWLEzt1fRsGJJryuQhVYt2vTnXeFt6HAV7TP7TuhcTK3TNyNCXR",
  "key23": "48m94rA4ZBgdGEfyuswXZDGbF6kh6ZyuDzCB47SLubfboTcQrbdTmygWgBtR94N881E5S1a22SH2VcziSDzVN16V",
  "key24": "3E8sXdjoFMEnKEaX119EjLSdmoKfiwpCqbm67sjGXmNAJMuqF2awqKY2NTvuoTwwpSDmAFNMCCXFhSa6GnJ1Mvys",
  "key25": "JPHN1txjgBNhZ19vBWUeNMys8F9hzQUTV5vgLdBT5cFSz64r6W8hv9SFssjrhh8Lwj9Ss8PkokeTUYi1RWeK9cG",
  "key26": "N9DQpmuGoFmqewsrE2YLAXigcjS6HfhSyAPn8FCJa4SMxqYu685YyLEW3zdiQgT8g2KQsvbQmtpRu9vCq1pJmHT",
  "key27": "3Z1GrW854sfxbZHonekigyXcGCQgPin6tECBF3VXKHFVMwQQRU63usUQMGMwNuufxjwcjH6WwuoHWeUQbEWvwW4J",
  "key28": "APG9kD2gU9CD9dtNKwjnErDZazkwt3i4TRezmwmYgq9jJGJg5zPCMTf1kHxXkfxkdEnopv6VxLvZdCGmttWgViv",
  "key29": "4M8rDRrqNZrAbHg1BraH1U69j6ES8scZkQeR9zgdz3ySvSX9QuG4xUWp8tpzycXQuFV5v5hS7FQdRUzr9trbCdsm",
  "key30": "2TKJaChcFvpiDawG79AA4ZuaQQAab3y115wHwJF5PKC3xxEHoXkD7biCnLfB4FLQJ81K5DTfBWJdgZYmp8ZtS5F4",
  "key31": "33v1XrMWc5qH4zcjya1EAdiasLJafaQ1KPMfb6aaCDQNAfGEGTjyfp6W6cbmozgTSVwB722DhfnRjCLQrvGw1FXx",
  "key32": "3an5nx1TuHMBKMcPC8DTGFRgQpDajKA9gjttegif8h74WwoGZTJYgBmqyyWUEykUMDcRMbs9Lf8f3chSpZGtyptc",
  "key33": "5Lw1CozcWbrKzvpjMWon4vh76xWgXLweMjPxagn6zpgcAL8PFgTeeEjhSyncDSt5ZwxRthXdXgQyM8x6opLNagf1",
  "key34": "4shKs6Su7AmvL1wwL3nTzPuykF6qn6XCnEoo7L3e2eyBULfFoyHkNY6TS44z2qGF3r9xnrZEMyneLDRbusfRQwiP",
  "key35": "2UhepmFhn4sSSTrcwszEJ9rCgYFS2CAbJMgXAoWL3spkt1HsQE4o3o7erUjsHEiG4UBRXZHEguuJXg3LZEpg7rDi",
  "key36": "4hnvPdNvPg7mE1s7aK8VL5M2zvcpF5kJS7vLb6CP4XoJ9rH3zUVoPyhFnbzJX1HtsY4tMufn3MX1iJu5caxp5wa4",
  "key37": "2BpCGgTpH2wfdxRcUD81NpXBSQBtLPti6NwC6uE4WkemddkcbfyieXTmBSRrVXuxtowBUX5pA4Nh34PdxwQVKJ79",
  "key38": "6wXz3Vv6Fmaowm9sEz3G2qjDqC5NSnGk2r2USS5qERoW64CgTDg3p4FuboMDeKgbTx9J9u8MZd4u5DP1221j2oz",
  "key39": "4RiU3Wsp7UpCQsbcuGWkKEQ2NaXwv137YuB4iMwNJdzw62VGBwgjSUGCH2ESrJM6iGxAM7orZf6GU7dbEEmtfqFN",
  "key40": "4SaLjyc2LvuwTfNagZdT6EeS26zzS8SMb4rR995Dw8okf16RuWDsvgNVmF92wcms7z1WA9CoT5sUJZyfZPoBTU7c",
  "key41": "AF8x93aumrfsnTmaSqfujW1GXxEdy1Hrs2gxaRWagwbAurNyBnA4JaevAHhTwd3a4wWXQ56D3pDX7aVmUjyxhnE",
  "key42": "2Eig4NjVQT1D6ZX4szJYWVMkVKh2WXxe9pwx2BAphQYEGmCxGkPuRL96hufkP3xfxSv6Ncjv4JPUDabtv5uWjbh8",
  "key43": "4m2W6MLrTJdrKRriavaibP1KXHQtSyK4LomAb7wJCMxXtbV1omFLqjS2Nu3dHAyT8UptA5qyqLQesMira3hFr8BG"
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
