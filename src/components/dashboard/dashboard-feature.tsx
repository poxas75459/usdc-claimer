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
    "zfs7mmT8BDuLXYAEGKtzUZP8TaDF9eewknt8WoQ2awM6ukNRnUWp8p789vKhSkbHwMk1uer5BKzBhRp3RPNSMC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZnRJEcYdmGK8yjgZh8j2EBJdHn2Djx6nznoLAK5kvwiVM5K7RgA3uHhPue15ZSgFoB7XLdHWMkCtEhn6zx8DaGt",
  "key1": "eF5KVyTdZi3KoTgZyjgYndXmTvqTVbFL8NSSXsJhJVLGabBEHxtoTc7Yq7cFNTVtBpPk36Rtfktd5q12oS7QFdN",
  "key2": "467Q7SY8gh8FTdEPJZ6kk4oyPbpEVGg4kddaxa4ffFEPb9vRhUJcAkj1ev3fZ5cyynZ4BVR9z8ENyErexH4sZGhG",
  "key3": "kufzFNTmEx9GZ8S9HpGMPVNsUPrqn4MTbFK3Hg9vaFBxHBWZhZY9m6D3AiZLgcya9KWdYi5GXmohDS47pHpm8HU",
  "key4": "5wH7ewk7Yg28cnmVzT1xxPwYSdZS2RKg6gRCaHQqFGoMRLCMB9dcnsBX4mXpoWYfBSPBdTwNPYkkf9Ftf3zFD4ef",
  "key5": "2v6kgrH2s8fvmJZpf3sCT2zHw9W5GcS4iZ6zg7P7cMFBaZRYNR5b2iXuHrwcqPrW2dwCLkhKthJKmT6QCZipCJYs",
  "key6": "4GJYXqBDQVbpAwU34N5JXDGAZ9bkBWwwkErmwjUm55gLmR21pBuGp9Fq7bgqWzdbKA5fCxJRFkuEcCzv593GgjMa",
  "key7": "36ST15XxJydRPxTWJywUg8cq1UPYSSweZ2ADCXozL2W2DLwR1uGzcjscyie6sWNKSwJKYKn5XY9uXWq8nrP4mNMg",
  "key8": "51dVy85HFDCEBbF1DKZmXLBZkGnMSRG4BorcuKayoyb3JnB5QVsixmmVvNFB9R4XqAE3uRTXxxeAujhLDud26KNe",
  "key9": "4q7FkkCCZhxbouRE91pyJDXrtqeKDWKmxr6CLfpYT1oGYsX5ubWEC4zdLKorVAo895acoajhm6hVVh937Ut7gv9B",
  "key10": "3u2nuQRvmH8kHshaabeJXsbjQPVPPPppUBFPZVQT4V7asxY2qe8rU8wqEQJGG2GYojVc5FhDAGJBmysEkDQGmEhD",
  "key11": "3LkkgaxE21auZYrgM85oG5j1qhjnLNuicuvk5j7gNthf6EZhiY2WJjQ1o9qwDGw7FsrDiZDKpay9y22dtCk4hNkb",
  "key12": "3pT2dVBEeeq4ez658cdeEcwjGRSYJkqKNZj8wEtodto2gT1YktsJvaSmnJWc5zqALq3ZpapHVH9Zbn8pJtBfHGXR",
  "key13": "5G6Yj562jDjPEUktuiJACDa8yejCu6HTvDNdDMnqsCyxY21an38TaHskQrksBeDo6nyucv79pD2H32yWWo5qW3ct",
  "key14": "3ZPvh6MRHJuzh1tKxQGB5avBfkiwwtoB5fhtj2Lwq5AyQ9WDD4bw3Ha4xshPpKCXRs4bhoHznw6HgAQFarMRR4E3",
  "key15": "2DiT1PPXXhATszUdUfPaNktjGMZgHi5BgXwdPg8VECxN9taTcYd5xkKLyFKLZCMvYZ6wPncvDWwjYzouiEPjCkSm",
  "key16": "CH3dpTjgRSXMZaxdRDc3x8wruZ4BBvbzxhbQycrjwny9bs36D4a4q6FzQAw2Zarijni9oGBtxLS6767w3zonWZp",
  "key17": "4sKqZ5VUZKXr55z9QFFYTWfXGDUBywbPQun7ZcpzXiQNL54Gd5zhXMjNXyCy1YUBvVB4P1xdg5G8sz7qfAx75QCV",
  "key18": "UsDGso8J6A8MXyg4CchPAjmSgvRMKgpVM4J6WP1ibuqqoMXUzuMAxM4J6Gon3HXzKhWg4FhbpfNsqPgwrE7ERam",
  "key19": "dCm6nshrs41UwMyQbiNSS48BBLa8e2w11FX8etG6Awke3MiWasn1n3tZv9tdtWFbrRBtBmEh9jd6Kzqg31rbGVv",
  "key20": "cwyXVbJsixhhMkVv1923ZsxcnhNDEAJdWjRPDffGan44TA2hbzi7HFy6htRHcHDEM7igEZESX1qMC1yg5x9J7Zn",
  "key21": "3VDZkYo65UxVUpfHXgGLod735QDaTuYmKkU58m2n322t3b5egyCx2XLzQLWPgpyP8oc4rjyiKgx3iqRnoDqkM1SK",
  "key22": "3CJHyHGmuZCxZuVT5jfELj5H36nSWAgThdtHo7M5bPrV6mLFhxHBtQ7zxBzkVSx2TCzd34GBFQ4kDccvaVxAfcNB",
  "key23": "5BcabvQgGTHh9aeE9i67rVmr2NjYgWhHdHdRSFGW8dmLkTVQw3hxGpvr6N1ujTftYApd8Pwqe9gmyRBSLME917EE",
  "key24": "445VynUpB1BndcRQfzHMTMFLy3S8eZe6PcSTvTettZUWYtoLiNoeRP2JqXemgbA3Kk5pNbsrcLbjVfRUTxBbaBop",
  "key25": "g8Ef3viMDazbsPCWWK9QFL8DC1pG3r5HhH36C5Ee3gN6GVvSQXjrxp4vu56B8FbsYZjyr8jE3VgnKJqkT4xxbnu",
  "key26": "363iBB9jKC6GCLY4SS9feNBx52C8u1eiqsrfuC1e6EooEHxzmxRYgF48Y4jGReY3QhWpY6hV7KsqGtEhDo6EwPh8",
  "key27": "2178B2bg4baPX6ASjfJ8RZKGSXmDuc58p4bS9E3jmHXWkxrZbRJLMahuQhpoXtii91Kivf8VRhZLWbHefvWaG7QX",
  "key28": "4KYh8RJ9PwXDPEG1iTC5sY8oHPZWNxqEKecMZWS4hDGAyK6y6aGmGz5Ja1uaBASUon7a5bGhePzEtBFneU8QmAwo",
  "key29": "2GLFoZ8ZbMjdhMmyH9G6RSRtHCQmTSKJBDdHzJa5umyvyD9HVR5HCzrtEZ25tF1htdci7gPEftEBz1V3YdB4R7nj",
  "key30": "4rYLemehgWPx3ZJ9NfHEGiz5YR1bzoPd38iZWwhcPN3SD8bA4CsExxW7srpZpMuSaCi7iPezVD38smc41hj4gVhj",
  "key31": "5YJrSzXWpsGrGuiDj6BSpuvWAkwg7mMJRUtR1HedqAVj5ehmY1sCP2xojmxrYehG2j9sVpvV7tFZvmerQLMwZUCx",
  "key32": "4qau9puP83mbCTQK4MYA3Fs8HD9iwFLmMTgzyy7dcwwrq9ZzAwXw9ecLKMWSVyVZCAnBygMcj6wAMJhr9KP1hvfR",
  "key33": "2U7wNSeVKRpWhuucy6qhf1oephjF9CrHBZaUXunAuBHx2oTjGhGufzvuEsmjCEPAJotYHSAi7ZXf69pibcjVpKXS",
  "key34": "2bQf17FrC9vjWeKdDZozmRfhnwLFA76T1kdZdhmqSpWt22C9uDmXjt5Pj4GJYtrwnN1YjzKNoDbAB3cjXTTFP2N7",
  "key35": "5DJLM4sfn8FrMBGmB2wH2WF8GHgFe9mxXP1bPfmwoKRGN6WQP9zVBujg8jHodZx6PtCz8R2LpSAqnrKqhC3enVoa",
  "key36": "4XFRupuXoYpgigQqXSXHrMS4pNVZwgrYS68SKwpSJXjmZ4i6sNYt1bkQDPpmnqwCyeNb4Hg81eV36Fio8JioAnzf",
  "key37": "3vifTJKvKKPzR7pQuutswAnmfBhKMLN15cigmVkeypWTr3KguJFxvVxxLHjsS87iCke4E7BUN6KWWkR2qbyvJZ9k",
  "key38": "5YEPh5rkYQLNGZ99ADMrqmkUTqw6AQEY2V2ZhKc1NJgqK3wztC5JTQK9gFVifPs8DnAWuwFsie6MGpVTN1ir8FNZ"
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
