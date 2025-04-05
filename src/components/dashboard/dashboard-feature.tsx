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
    "3UWT8FfuVAHwDe7Qmgp6ffcsHDMioajeXM7nun9VRdQDK58u9xYxkQWoufPSCkidmLk5r1hjFhghVWk7AY3uTCn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dM5dC1gi2g4RVpQp67XKad5T1p4Wnt88UH2AoyBCLprjnpPJWMCgcXf5C5nLqRLEdMjFXtdUcGErtMF8bTURgPm",
  "key1": "5aEzX7kaaR2KWciYNG7RAsgmeFskJpcC6c4Wbw9LWJ55qFatoKEsovm6F7mBMhkdR7ziGsFDgJqkNBfwtUpMu4tf",
  "key2": "3vA1yM6JshFJcn6GyQikA8t5B6x47pqygypMBcRuzXGSN6m2AicJxYiM2cR2UhtdZe2fAePENpDYxY5HjbvDKdG2",
  "key3": "aS7Utt1tKHCEmskNf99kzGQNA28kRcrPezCK6ZkNnQZV68r9NLAd7rLMhD965wkUFE9b4yXT1M1bLp9522fj6mr",
  "key4": "2YSBS8FVvtHd3UAhVsCKbnp2TYc8Z9xn1yY1VKh77PpKDPCbwgUSme89iRqy9jFfQNyD9uf1b2XxddxFsCJPBnmW",
  "key5": "HErXxsNGDkS3TXMqqh7fy1W6UT77Jx1i18TJqNP9dveYFXUV5utoGjMwHJWu1SBfHaaV15qTCMbYhkbTH2A3Cxn",
  "key6": "fAtAbRp28Ymh661Mx2EK3hDBsmsbBDRNKGnBXceod6sbQtjhBRuRadwBPRYDdtaFRR1pyFixzFhR2LdE9DvXC84",
  "key7": "36aWvdwEXvtXpbDXczGtLwhgzfwXVDrRYopK65smcqv3YAMMKaFDVEDfQ4UR3KpUSTyb1rrG2iGBybiBFHZDfHNz",
  "key8": "4p8hu7WgaU3f3vnEqSuHEUkoFeboHbdbBEfpSxUZ1PcbNmjdGmphrNQVYELzeuLBU4Nzx8EEnAJHf3fUrcjVA7g2",
  "key9": "4ApgbD3HHsjzJmJe6RLrcEQJzjLGsBqVPKaU6u6HQqPMNbrvE5tGTA4V8KNbSRkV3rz76riqMWQsqFSZ3pcY41c5",
  "key10": "36buaSMUDxNu1ZzC4WsJMMrcukk3Pqw316EkxiGGceyyrSv8sLPQHkT4n7F1qS5uY1YpWhVWHTfoTYuPbVBZahaB",
  "key11": "3wEou63ubHKTJjTcTmKMGFZ8SP7mtB96nRHDMmPPQUVNEa6gP3tuceEx3V3peXtEgx2zCxo8qPkPxDow4uomP78p",
  "key12": "4faQCdMUbsJKkp3PpexX73p8wF2hBiCcVQJaYk7iBFEwEsw2N8ee4dyACismc2UK5c48qnXyNLKxaZPbMHnbutbZ",
  "key13": "59PydMRs8VzkNBW5ZPWC6q4nu88xR7hxCmeLZTJML2KuqYcYwn9RMPL1zMbRDY5jhkpJkt9t3QLoLmhpJVnELWep",
  "key14": "2QX2DS9N6nTfQEKNZmoqA1QA792ADcSRoP7ydGUqJJHY7xwbgeD67Tn6NCHA5gjEZV3h7pjHLtCGTZj9mcTyVyVb",
  "key15": "2CciCfA4jDiGYDoQSaxfDmpaqS5TRM1DSqbQ42VNpC3YJDGFaCd8c8QgaoR1qZu13QWgZEuQuvj3kXS7V8rPMaJr",
  "key16": "2pmF7i8PgegFBcPvV5tqWzvhHzgj4TUuH73kZS7ufLXRBBuy8MBCFBYwG38K15DmJTy8bMEp83naLU2eoK3ZWiU2",
  "key17": "Z43sbgcEVcg2gtdfYnKXLpBzgTJXAzjk3a4EMeMjRU5YVseQNUjNc5fm3TQTSJHVu3uSfsCAq8ktDTdMHd1rPZt",
  "key18": "56HP1aGZ6gpcvbPckT41tmEqpR6U2d67k2YQ2frdbVFCxGS4hHzYUGLA4wp9PWF6ABJ4w1ZLXimNY6sSJAioYef1",
  "key19": "1ii3KZP8oVQ8ERUUYn5DzU4mmEyFSoViTqP5XY5SvGmz97GoRXHB3QSf95sD1etCqE7mdpa3J8qFvCpRA44NQCm",
  "key20": "5ZaMCASzVmm6B26aAy2W185rTzZD8sU3Jk5fUCF2xp7PbP8UvLUNRNSzKVp66mKbwb2BMZTsH3bhcGMtrYYoSdEu",
  "key21": "2VivAm8ZotHzarukcY3kEeLFZ1WTCPE1cCKUCuNT3XL9mvAmh12oK88kqk1X47nG2z3NXg4gWPBaxkwsFRfr7EAk",
  "key22": "5GugtZ1L1m6HFsUyZm1kp5aATAPksTAxjVezNsGpHDkpfvUMMSoEjTjJHPhPaH9ZyQAFvCbeCGU7QWjhWV67H91M",
  "key23": "3WDj5skjPS1ftoHquvjkGW5SuBhfNgv7fEgyhHEaDnw25K1y3hvZXEaRxr6dfkEwnDBmquZ1Sdx6Vu6qNq9FWYf3",
  "key24": "44PiUDc22eZ2tdHQE36e7QV7YEHAUakXnCA7NjJstMbdiZRsbsUkwbNkGJa9AZGHM8xPbGVZeKbvaUECULstP8A3",
  "key25": "3Mf6ubAA2fuMoukiQgZ5x6StDnAUoqvB5jEugWBCaioKrKkfLBgXGqGYwxsxQzxosiJ4L3hg627aYgJYRsWH953v",
  "key26": "5BUxFba82rfv4CLeko3Cj7KRkzxwArdC2qJuhRihHT27gABGzTiqogXhgZmtW62inrbe74YmAvatWKewiFGTeRro",
  "key27": "soNj2moCaAJ3wjyu7oRra4kXa26PagJLNhjk5kZFhd9x3BenZtXsYfRuSnvPMT9N3Efub7gzjzmxJeJTfbySK59",
  "key28": "bpip7DFyaxjuxGcohECqJJLgtLnxdWZS1kUe83RdMxvTJktorU8Cj996cKSBNYBKMDneDUoUcGoKJkuRkuge84k",
  "key29": "xK6Er7n65nfpTTRWYNytqxFa3k7vF762ySxKaFfavJEvo6DVqFr8zLMUcDXz6Mkfmz8LqeXo3UKrrYZD5hJ3Jr8",
  "key30": "ZNEtEY4Uc92bab9LeutgvraPves6HkzRgBrgegEPcRBYJ3BVD3CYijuV8tmAtWzSHkLx56VveaKPZNbKpL8ZndK",
  "key31": "5es2MBK2rhZ6ttsk4Ho5WFK1N5VghmtkxJbdE4qk9RQxXz7qKQApKsirzhwD4j9izfqpE7L7ubkm6R7XjAs3pKH9",
  "key32": "2x5Ab6ynyouAMVar7NwHymAzCprCjR6pYZrmt5cfjSdBRbk1bhnmeK2qSs37bsTYARWaGBHi7XY2sJ9hM28hFNVE",
  "key33": "ZqCrvrM3R5co3GownnqGXJq1Cm7W5hmTxkdED7XBvV1skrNV46oCD1EqDm9pZzb6wKZnYUpFVSSb5vVnFJrHGEd",
  "key34": "gHsErWjPQ1WTPcNEu8LDKk5AYzy8YbjEE5LgE4wjmiYo2XRuKFtHDycq5eKj6ZiFf1DtyT2nfyTahULVuVXctcU",
  "key35": "4znmkJemAuFdYfh2BDHT2A4jwZnfnSeSKqZWmXmqi1p7L2nbL3ArLzJved6iUe68pkmhC22NpgKHcvh1CYpn5oL",
  "key36": "4ZeKiwkFZeNRQYBMJWmXr5vsbpKLmWQKr5KEtVErrz4bz4aGUqZGwmVKeL8ofYv6QHMEdLH88kWrP6D2YzQQ2NVa",
  "key37": "BydTizhabNztBceZUEGLrB46EDCRJ6NVJv46yV9qbVG3JavLpScefNcfDi9UeagPoGEsYiGgjUEpyhGP38ang1E",
  "key38": "2ANw4UV8smPPqUjF31s11TqJrZJkmZCjs8AvNxWzfbx9CLpL8oXE2S5LDhfk7NJwznFi6Gd8St4EE46tXwpUvpBG",
  "key39": "5SuCuerNTkDdvvvGUe3B55WMMKtGnknFkUYqFR9HgZtSw7S42kz8RXd3e1vGWswrorZDdF9gXE3tqy8BFNdgLkcG",
  "key40": "3SFFJ9toNZCzcoKdoyE7tXa5YNUWSN2wm3igAiFRAktt2PunYyeL9UnUsNkUwV494SQe8PCAVvNNKmpMTJHNzQFo",
  "key41": "j8pQWYvzKcu6ViCVCF2sHoEpoCb1UbACXq6fd3RQhw77ujADaEX5sEDCiTuxEWcN5bMZy7qmt9hG7qJvQPFFLTH",
  "key42": "4F4ofnemaQyxHuuZtkJiCsRHEubEj4oES7UwgSf7VKWM6mBeTWfxcuuUgBrwGSb7z9q5z2Sahs8YKwjHmsWzT9kS"
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
