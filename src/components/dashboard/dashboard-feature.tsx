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
    "3JKLW1Uyd3jckXNxn7naUeNGZ7vGbGhPEKgjN58ceXmvjeHEASgcojCQrH7RKLZ2SauHkup8AQ2gkXtg26PC5Avm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qbCKSFLvM8vqJq9AgFwLo5WRjXfNENRV7mUvhVymavTbns96RJfd5oYCtvWWZVUiBUaKh875KkmVWukkqDUcKQ",
  "key1": "4C41KyKtDNL283WBsHndTrC2mDaiYWm9bjiSwqv18tf3ZdTWSAWpZDNXwjKvmeHzjBgPXSVZ63hiWKtchHDsG5DP",
  "key2": "5kQpQx9YSW7NiHi4RgjBrNp1QwwNx2HmyJDxYRBHzu8uDL8snd8XbZiozur8QX79inyhBrsn3EX6kbYpUegryWwE",
  "key3": "YkHWDZTFEUUN2gmZR8gDCVk98jpnGvNFPPUqEHKL61mZdnUfTVCtLzA5ca3Nn71FNNQ7UZiAZkYPPydg4wAQkRy",
  "key4": "3Q7SVdAAgFA2zGxECkVkuujQXGTz8mbQTCukTWYzqARy8x2RCXXMLCaGzKq6UvPCzVQPmkyVhdMmkS6fNtihJ6KZ",
  "key5": "5nC5C8zAnAohKVopeanHsuvroh211EGo8hpLApCCmhLayBzABSz17fg9E12F7xbzdyg55d982BWj69e6nc2hGGhV",
  "key6": "53z1CN6tJZSXCAHPfdx4WdHXJbaVCGAaMAiGVBL71HLmMMj1nJkf83W2b9XzrT3buJBadAyrsGtkqKwxjzLZn8Eq",
  "key7": "urQhiZyxo9kfbjxBYqKSaPFZPek1VgsvitouM3vgK463pyzx8uTmYS5fGZjchEur9hMCYing71VPp8Q76EGfkmQ",
  "key8": "2wE8i3TyTscPMwnH7yhuPSuA5AKzRcyJcHBVrfFxzXu6irzaAE6NXQZk7HpAnuxZH1CsNhtbM3kofpjgBfVVx8fL",
  "key9": "3uxkVXoh84AqD9VXjAySmDZ79MEzWindvPb6pQRSWQFrm31nUeSxvTZCRZe6jUkbWSxyapBpep7Jfzg9yYPsipbw",
  "key10": "b5gZm6Ffp3dLfGxhL8DQkgmgfzzNzQFMyNiwaMDYEZwiPD9yucxJ8AUHjr7hwJY8LQYCpDkGbMGaz6pXkwP42CF",
  "key11": "4A61gS15m6vNK4J8utsqLGCEwjvCfMwcxL4CdgojVxX4WDuZu4cM7vGBYbtMkTqVxZjhNArt65aYDJFZPz8jBXQc",
  "key12": "33P8x2gZ5ocy1FemWgF1AP5oNRSyCLzhnCHpK4iVky4xhj1wxfykjKoS2Rzzs2FTFTXXgJA6gfx281qFpEEpzeBB",
  "key13": "4J2tZVGp63PtyZMTKUJnaM7GAfwt5kkZEEWEGR7Ruh66Z3ZpSKX3VfoT595GDXZb5xwmZoWkxhUAnpuW8LgsWzVc",
  "key14": "2D4f7zJP9ShYNGy5eN11sp89t6Zj8AkEa7SryyDcqeYZ5Pebg56uPKZfwa1ZwtWq3ig77NPMhBZtPnHPk7g9KwUY",
  "key15": "3zL1juttA9pP1M8CCortSvEum1ZbGzsM7xATDpKYbyG4wkcVpudha1jt9kDna5omR6sQWcJoQxrmBwi4CGhTYYX1",
  "key16": "672DwWmvAk7GiVi1AH1fuJsuWVpVCC7KBm98pEbJdSnaAwEq89PTu7ux2LsjACuEfttA6ze9SMYozA4J2wepZewX",
  "key17": "2x8UYrCqvnKqD9619JuR7rB3pQYe8rHao2g25hQBAjWb7JucwwzRWevF6htB6U5KgaUK5C5mk3SvR5kNuNefx2QD",
  "key18": "5CkEi4kqdZC5o4gxQ22e8b3j2hDDQELgqi7pJNkDoGXSkYV6xTt1FuLpW38ieZ4G7GAmpWcxxHoc3uBw6VoNafaL",
  "key19": "3TQh66KeA8DQFZeZLLQNhDJr3AjRobEG5FuLEcGC1YKkFmuhfjSLafd4QWoXxVfLbWJnD7ThrVAuHM3eVQGYQMK2",
  "key20": "5eF5f5rrtjNsShiBfjnrvcytFQjxhuSBSiMbrEbNG6nyz6nVouwFDNjKwmwH5pnzL3X9r4RJiaSsXMjFikjCgKvq",
  "key21": "42p7pVkfnov1ehnrcvVe1NFFABYzgngPQSnScTxmskUbvnDddHNQDEwTE5dEZhSVUDc9AweYUit9V5opHTseG3W",
  "key22": "2M6Wug6ZmJMgaa7Erq2AMK32m4CBkaYftePGDhDEy4CMmqeK9NoeMnc3pzovNA59nmTdMY4H1HFkBQxPrxtkwvRw",
  "key23": "254zHHPPeR2FRcMqwMNeutZqUBZ7qWwtenjipVaHnx7g5aUJyBCZvvoDgSPQypAHsWLwpZGDUZ4HXfWKYDZyayab",
  "key24": "3D4pUqeoPQVrBWmeHQTDncyQEH1qkjpBrSWQ7w3e2Dh8UvXnyjGABhyVEvqb9668ytRa1z2KSGv3pYfCKnQbU51b",
  "key25": "5dsVrkwdRyHR4HK7biUYMt7742NcmTgy7hkd11yhj7mBYz6wsu4UujKK8qz16Hmcgqbf8PP1Lug7Yd79TD7xwbuE",
  "key26": "4zn7XeHZGetbDwnxACaNM7mKRdKaWcxczbHbyYtz4BmHY1aAVeUU6GmTo1LaGdbfDRSjg7R5KFkSA2QQ4eoMT8bh",
  "key27": "3osQ2oU5SH9vErRVrkm27UqMxysPXSjtGRT8387yoKcZvruLmVM78RDyYrggLEuQZm3MdZSxrsBkEZLY11gw4vnZ",
  "key28": "8wJLMQ2fx414EGnUskJg8xqzJN21KTdALdNKzBb6xB1VEKqCNny8SadmQaYmoFqLXpun42aZyf2Mm4dsE1JFzNQ",
  "key29": "3diYeUnigYLTyov6xYZvjEDTcmFwYQj78ApLc5Ny6MuyymioBjbPGfAae4cybf2pRwZxM6WoETBbxpAYN8cWQjVj",
  "key30": "2eDZGZtHcuDWy9BRijdzpvET6BvM9SXT7Yr9LPP2gN5fF1pWHcLoV9u4iMGAT1gjFAvWmefJcK1VNLh2KtrLwQPt",
  "key31": "5F74j3D7UzAjWMqhjAdQSxPAVDpZzqDf8st3QFEpxi3pibFx6dLxhjMLw3mCGrBaSr1pdZjFK81sXxNYDm3Y8SAv",
  "key32": "37rGGHYfSz1dmrzS7f327XdU3Rjm7LwHbyXsqfHvW1WEGLwFWrcmMhpc2T9ZdWhp1r3ZucDG9cGREB328N1AAUa5",
  "key33": "EzGEfU14HgR7GeV3diQB51TRT4ExcDSbqoyrffx12YT78gSqBGwyEn2ThTvVYpQm2nZtwbmKQZgaAtgfcgUh1JN",
  "key34": "496eyurWQyjcQRQoQoogrhbCkdrsaZfPWE83mFgYjEkNn2gPedgQq877Pg9xZi2hHYHFt7aqKSNVvi6Rcr5JN7KS",
  "key35": "4fsRaGnGeJWhcu8byBAz72ryj34UQZJQgarERHMX2Q2mPcGsRojD47Ld6znAUPeCo7cKKyvC5uj1jvN4bkb7w2qE",
  "key36": "4TuToLu9U6TAhpyUQGxrhxHkuQ3aXvdbwrEnwsVm9xCZXpT3ZNjiBQonZiPnSiVkGPx6q7Bjf9QbWRuXLKpGtF9o",
  "key37": "2AqxbXKwn8axfAxgU3AkRZTvpF7ttXpZohR64utgfPRu8YQS5ZYo2XsTrtjpbBAWgWhho21mAD2JWkWuL49FvEWc",
  "key38": "2P2P12817GvUxfLhmqd5jWVw5wmgpzzsH7acGo3ji8ZyzLTJkzqwdoWb6Rk34e82Jg8ZHogoPmBBy6YaM2uzDkZc",
  "key39": "mprHASELYWKasu2tHehAY8wGEZYZnYLydHFeUsgwhPzP2knHSzHKPGkHQ2jxtRUTnVgneMVPLZeaBCBMKiuk7DG",
  "key40": "4AVacUzMtAjTpTPWdEwchg1vh7724DL5X4zRWWu1Ah4HXEeWTCHUbqaraD9U855rdqXiGgTXPpogG5YrZXdri2r5",
  "key41": "4YkVBfJNV1G3fRNEDDm6ZWyQJpqD3vkEjo3bKdKasvjY3CReRUAryNg8XCxZnhNrC8gy6BPT7QGseNM9baxNwoMj",
  "key42": "4t8YoLkZprqEfzM7vn9B8Co7Ke1YkyymGwpX6DMuKcYWFffrX9Ri33WNTby1VGwrgskUNJWWXugbA17ZPdTnHhVD",
  "key43": "3EGSrYZmkxQ5kmzW5UTLwQ1sS4FF14C5uuKFmp2GsneNatjCTQfq8S4rJRyQsRNp9rvSz34AcBBKHZs6PaBxkBMF",
  "key44": "5QMQVc59Sso7bwYL2D8J8M1Vb1Mqq9czXFPCMMai57rTur2sGP1YjMS8qUV6k9mMnf3PyjhPManrcU2vYtf9uwF1"
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
