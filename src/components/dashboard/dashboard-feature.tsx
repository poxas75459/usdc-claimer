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
    "DSKUAhtNJvERzFNLdi3PM5auR2DzrgyP5Gf5deWZsECzQLvDmdbdAteWB9SFsdjvFhCQkWKEmvxVeYBj98fqrgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWRKrUPENyDHhC7yUaexseN74sMWnWVxnWB1EzUx4FWB12HzZtEMcGR4WQErGENBpFDvYS2fi37G5tzx556Bfzz",
  "key1": "29CAq1HZxd34QRtDjVpKtT3Yyyt22Zkekkv3TEE5iLSES9itU3B2L6RF31rvxmnCF3WZzwNF1TqedZqDo15gpTS7",
  "key2": "3KZN5YB4Yy9UJZUT3FEmyFUqrRrUYkcgQXkCXYPH2GeK5VpbHGAqzERo5WPYy6YK833RuoPdGGugUo9Wmc5j1KJm",
  "key3": "5pzvYoGkt3a3hUhCuqApnKqWJi5mAaVgHzDeGpXtNuF1fHvnvZXL82Abk8Q7UUSjRvfztg6LfqMXUYrm9Lcu72j4",
  "key4": "2wDcLvNiCC8ENHrqAdoc5GwDKanoGWqJ5NLPwbbzH26gS6iicWFPS5pE8mVXsXJqGCz3htH5L7Tj2Ptd1o1T9GX6",
  "key5": "3eRLGczZnZtm6riMbojE5t7xH9ATr4T3b2zRr8vs1vq1CPNZ2Qg9pkaVesTkoH2DteRVbq5tauzr3MF8M9nbzaM5",
  "key6": "62wzvKrD1aEpAoR1EYCtHpzPnbDwZj6ALrAM8roEfDZ4dEmLyTFAr26qX1QPYQK8F2C5wHoHBo7b9gs2L7uCuYLP",
  "key7": "gfLCTc2Jz3qnqfqkfvhx51etmumZM9dDrY9tB4RFi5G6JKQaJDsnQ7mYdjKrEajmw27eisx3R5DadbfG4yawrfi",
  "key8": "52BwmvS2vWbBiB7gHWtHxXuKnxoHKDoQk7WpTutRLYGxHhSanot2y9LegDHRp35pW7krAvL3ahRRCkvMLJdSuQHS",
  "key9": "5PynV1AWqrt6sJKHKJ9dZyr3hK6F6sQSmXuhk5gwYUMp2CD48uzEwEo3Sj9upmvy7EAnbPJyQ4XcGv5TLH8i3CpV",
  "key10": "5pL2cB5auVjdvpAcHr2nmC3ZfBmtesK1kWSBnDkYzznjCQAXfC3sTqwH6APvJUSHXsBGDshd6N7SY6ePvtVgXxGV",
  "key11": "3BmjP7PwnnVJ542Gv2z3o3aYLgtD5jU3FqYeLYWbyxAGRkLujCLt2RjMD6PDc6Yz6cdbVZ9ht9CfH5LscxiFSRmC",
  "key12": "66GnsLPt4QPdLUZPDsdPQxgByuAAK516za6KQJMzxD8sj6vCb5V5Nuk63163VH7RnxN6xBpgjQsiuTq5VBPLWHDR",
  "key13": "3ziCjqtDPQdNRvBFBR6ZsseKdeWq6jhHAtD3AQXhjCGe9Via2RRc626AVfrFxomeocRX8XeorKQjVhqeownAjad",
  "key14": "3vJhsQKctKAP5EW696b4i2kyByn8s3kmdB6AgH4uUbKAccmMTBz8TK4yXG4JEidnAFNa6rMNecZQpBJaD1wg4ANT",
  "key15": "2Reqtjq4Bzr5HTV3pdBYti4UFSc2aaNZihYPuVaNA2dPw6pduSL6vspzLbGBD8py2PruG52WZn8G4sHTUawHN1Ly",
  "key16": "4dAssntNLWNJG6U9LTrrrfV5VScKyVNj3BZ7JSTn6AozT5yRQCoYByTYp4vccH7yi2NZCubQ513d4T7j2ZHo7rux",
  "key17": "3mB7iNz257ztNC9sKfrLPh4icgFgBE8mnuYtVzh9xReYVPmBeLjwz9AXMWYTWMmePJCDFjYjvm1Ngcwxc9CD5bQV",
  "key18": "8QiZYQgPSoUXc6KzieNe8U6evXhoEso8CLe9rQPpouXbxdznoZtrYacyRf6iE9PeaynjVj6SFhsw7KYrpgH57Be",
  "key19": "2TwLRqQGqM168e48n9GYGZ4MbFSa9d3Yw56E9zU3EFS2JXrxessuoQRtpZDaHxHtFTMULVG8MkeXc47pTMr4iBKG",
  "key20": "tEKTysD3JdkE1y2PUSkAqyUP5t5WWEDCxxBxMmKQ5d7jh7SsghHq9ZE7ggjBveri9Msxvzo33gJhceQzs3USFp3",
  "key21": "Wvhg4969Km8M7eArwtbMzdfWP2LxQS8T8Le5yN8GAmQnyNB5wVtuBhvMbYDcsKxZQXbAFQmXnFykX58n4E4Ubsc",
  "key22": "2VYEyhtUJUVM6ijCQh4RscGYNf8hX7CBvk96xpcRMZPjPRWRVwhc5xeunywNgD43TqH9f64WeNrEdHsJpWt3Syte",
  "key23": "VtvRoBe4x4KxkoU6KgevYXBnPqFbVcqx4icFomAaHBuu5LLxCsUz6HXkTYvhiGkAHNZmJhGtZjZCyLZG8NTeeUK",
  "key24": "48GrVDP2gcEzYMEQKDbQwJES8x8MYwcpGXYU6g6KZDTHV5WV6iUYdGPjRkwL2n5dsM4JPJy7bAXaCy8Bh3NjFvPm",
  "key25": "8Mwcc9Xk7apdH5XYKyCFXPPxFoxzUpUmaJZ47k7M1a5QjvaBPT8zjyErfxtSG13ouSLKFFR5moWSoPF9b2ztf1P",
  "key26": "4GJi7X5Rr78YkZEVTQ85U95ft6RXBg3mub73QQMaxeo3KoeLkgYpCkU3fX2VSET2WK6ii3EooT76KKDhSc5Lu4Cx",
  "key27": "4tnASeYtkKM7xmBzvQhaJWCggczTL1WMJ49vCTvmR2MhWWhkVgB5QRC1ChoY9YrjiM8KUh9GrbZkJgxTxYnfHyba",
  "key28": "3SBiRB8ErMZTwXWWcxuVNtPUDomt9Uqbv773SB4ifcsLBmstSthrsTgqYDw5bYR8zsZBDrwgPPZoA8hXyFZDGhX8",
  "key29": "eCDSet5Dd9iszzW3gmQpNf2ThdHrVvJkVT5kMVtzvnNkZxJ52hyTppjfr7ysKZ9uQ8dtJRz3yFKCR4yWmUbhUfs",
  "key30": "2n8GKBik2qbErJd4z1u8qHeQ4tn36wtWqaBQeATnYz4nqPbJuZ8McREfWNeDu7CdbZczYqYHgxsEJSPPWXbuAwDZ",
  "key31": "GhQfqczhQ3fVry1NQd7h5C9q6neatZ7hXFUBCH8reQWLdjUFbHxpDpQiTp5UqLYoocEshypcQdU1g74p7i7adko",
  "key32": "559Xc1YRYReS27XaV7VdQLZuXi3JVGfkbT5aHgH2xskQA2KnkZCvMdxiUxdZiKxcHcaZtTE8w6Lj64AFjrdNyKRC",
  "key33": "4pRLji5G7YHAAG7BKFwniDj1kYgCUKqcMo8jbveAQDbyGsv2hWRm6HSBiJU8CvRs2yLU1gmHP76oeivjxo87iV7Z",
  "key34": "4tQgrkwNvxAezpGRnsFKqr3roJJ4hvv44ixCeYBQbXd5HCJGHgozCzer8pC1Lp2CNFZE8jdJTWaj3WQkRxNPEQGx",
  "key35": "5ucDfy1PQVNyND3ZHfFhyUi5ZcfHWP632gQFSei8ZAwRoWMTZQtUF1SuiRa8UAXcaAv96tcuhhswbWDoHG7RKuKE",
  "key36": "2G2s5p53XwbPA8ktUmDUMAjeCKiSVPjNzbdp9NQYeFW7YoHaox7orRqvheLznHBPDrqCtqenSsuSrTUXwYVW1AGz",
  "key37": "2HdRkgoptRRWdMfKNiK56Tiez516sJRkS88Z598Dv8A8PJjnmgWoUwydkfPnS4QtKjsedM9vURC4ndzRM7MmaWg3",
  "key38": "5TJUqvpP4VMCSHDn9rQSwjXkzzeQQkYG7czim5iTk9jZTJxb7BzsURZxqTbKJojS2VcUzbX9GxNty1Ph6yU7sATr",
  "key39": "gaJfJTpQ996DrcK72GnTkA1pehnPLAb4GUm8fKRTCTWQcfnPoqyzLyEH6zSxiFkXc17fPT9v8y125Z9cvytgnJb",
  "key40": "5nU3E1syR8xdCSYY1x26Ld2DxUX5B1QbHtJsi8ZW5bxQ5pfPCEk4rjkDst98dvapG2d4vgy3iUcxRyvGNHoaiUFv",
  "key41": "4WZtzFvYqKTZanCU7TckV5mAYAdax8TpW2fzdaphs1NvYjcRZyFvnkS52A4dy3YLck8qQ1E4XTUm2TUu8aU1rmqo",
  "key42": "48fe9k5MYpgicjdfvsmcL5Xuju11Uzv2gkjhZiExJPxHnzAsGzZbtYaGY9bZNmBqHrxneurhGAjJWwgaZGQq1R75",
  "key43": "2LAcciY8te1SsX23rSbPChuMA9gfLdnSX1t7ho8wK9WtN3Kzsr5YD2m9iKEzFwSmD5Ed8Aku1toGwPmAr5LuTJua",
  "key44": "5L8iYASBXZh936jyXzKSoTtKE3ijXDUvZwySnFHxPBcgLgaSVixsu7ZYoAFB2CGqYLCRaa58Mx5T5d1xekkBJj7j",
  "key45": "3M6Cky58B8o4WjYGZadyH3N6CSKcz2shD4pM9doRhufbmbxrFJcgRJN6kYWpjFmg97sqn5SzRsRweXH7KayG3u3P",
  "key46": "3by2c7zpMTgBvSyZPenp7yaYBWZC86EHVwthB37cysob18JniNGa3TcMZmdeL2ikr78rVqPqNhzetByKCMh49GWi",
  "key47": "5t7xLn4o7aHn1XXFL36uRvewKD5LAMDPi3ANB5Bd2BcJh6Lze52RjrEabHmUqXZBi2P5KMTVFoc8G8R6eWxit7Um",
  "key48": "2bUY8aiPPYRLywWiQem3ALvTSRuWtqdQn9ZbwEwfJe6sc83MdRAapWuPHEgk4PJKXa48ZQRnhENjfBKpckRUDJBD"
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
