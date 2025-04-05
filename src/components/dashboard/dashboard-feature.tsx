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
    "EFxsxb8ahrHnc5FnQXTPBxb94mYZextPccatiU3rvEV6S6VW2SwteziRUSdAghUbE5E82rL35ubDam1Scry1xpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1wqYjdg3QJyjUie8cqe3LAeMU7Y77u12aqtGNfw4xnWJE5g47s8Hg6yxPeYqnuHL9m9jVswvDvgkSf1N2iiJhde",
  "key1": "55eZdyGMayFoMt4cjdD3ytfmwGRiQvozVNX7xPqG5Gw3HuBjKQV3g2cREk2ZsbWkSqfCfH2pfDJpofyKyYQzSRCT",
  "key2": "2fLWnu3KtER6HCe9HSTUEjjJTWx3GuVwJvFKCfs9K8vpAp6iG6TujeSjFj8SEEjXzw25wrGZSFKQXvJ8H6xaHwpW",
  "key3": "ssbcSymh8VdukeCSGQsDnxXk3xj1hZvCz36MxRNB2A9YGmhRSWbz7BmLUxsTZeiM5ELL5eEjcB9dgUZbjrvbW8T",
  "key4": "53Qc3knsrocNAQaWbS1jbg9QsTefZLA1wqHUqcEUZPLjr5KXaps3EDet6meucYhg68VZLt2wzh2HKxdirstEDfeU",
  "key5": "K2wqQj49rGshhYTuDRzjCvcAEY2hE2uvaw8peBZ3RQFwepqLeZfpPPYzgrsYj7WdTTqLRDUgXBPAt8nnhWovi8n",
  "key6": "4jULfxendex2f5wts7M7CYJB63za9dTorNyMzpEj28jqQKnHMB6gbe3dwrvz4v4mrwxDaniyq7j4hbCmGknmkJt4",
  "key7": "324bheYkXmnhPEg8WtC8UTTwAnAEz6GLadsTFVgj3iPmhwpCZKagj6Do6NKTNitWoXyFhnAWirGWPRyn3zFaqe5k",
  "key8": "uLQJzDrh5DZqdV9A4BDziS4iovRjFeLwskXGSGX39FNzKGEezJoMjFBZavoUXsMD1VirPmEf9Co2Ej3mRHtF9qs",
  "key9": "36CVjgmCvKhBrmsw3m7sXYSWwp5QjfVrjNWzH4t1hdpaGkh8sS2Qi39vGe9NEnoDZRRcWbNij89dGPkp94BfhMSC",
  "key10": "SutPoqSz463q1vEEZVqtsiB1TMRtYEkQeFVkPc8nvyArRF4pqGrZbSoGKZrwm5Pj7jJz6jkUL89SVfvsLmhVmFg",
  "key11": "2VDQMyWqy4E7zatzh1oTM7kAb4BaoEFNz5bAhiyKiQsAs1HsdsXFuDbunB87arFttjBFVBuz9UM4bmvMueHgS2XS",
  "key12": "5nnFBbmGcKU2y5MrZ95aj7r3BRD7egruodu6HjSJdAodFzd8A5WcHvLgoK8fFNnAiTs8a3eRePG5CVHDhPqpq73J",
  "key13": "5tB7qbwDnQgt4BaLbJ5Bfde1PVZitU8cXgGxCYhbrpSv92TZoJDmt1KS8Gojm1wQGEminb317ri9ztPVvmQ961wK",
  "key14": "4xCN2cpfmcurdBCGg44GRiYpPJ3TWqfr6CfCHo72tvh2jkQ9JQ2PwKiMDoLACPJkbtVuFNRCmoR4EqoVopX8QsC9",
  "key15": "2EJYZiqornqjJUN9gQMkissoFSkvFxKRLxxxphw1yJyvVC9hAKUSg7TFscbhfEndKKgtvbVQpdwRcHuNUCL3BCbB",
  "key16": "4avpR5BiWboUyhxZWUdHmVBZbKVCr2tJCqXn9NGHpKYiWoHPfQKe8nwTnJtHD6CVzGUwUSP9nHgKCz4ocb7NizVt",
  "key17": "2Tw74QLcEbjAc3GDSsjZfAFsA7RZAB8LHCkbMhbABRvwT1nPwBQGnt8wMg16QbCb5DHZDEgVpniugwe1rrC5Gb8M",
  "key18": "HpEC5mJSie8sVssi7Hjh7kmRd3yHCsp7ZJRTEZa51rUQcTLtC6trqjty9u8y82DvR6jaM5YubvNkn7fLEnEBQuo",
  "key19": "4VBCSGv7w3AGeYYdr3sSR7UbaqE9xrw1Ah1hcD85mSCn83ZgZdDiFTmN2KfgS1wQ2E9uv7uGdzBxZMjGimf5EVEM",
  "key20": "63L3JcGeE5iyTt1CMmEJSyNjmYYJf81WfYMT2hiqmWjT17CR9auoKLrpQdUKnE6aJfHNYX3NJs349YKmaeARoYxa",
  "key21": "5wcPyb2TRzXhM647zumFPVGA58T47HQPwhCYF6A8BbUNWvgFkCEvFMYo4DvehbuhF511oYHGqLhMmMhQZnyVTQZM",
  "key22": "5DRzomQBoMQz62oEjN8Pk9JZqANcCJYm6J3TggJU2QxNzx8ryGd9asctkyECMxv6gSMEhY6zUdxkHeEzhiZuaHqo",
  "key23": "4dSNGV3evm9gZirgaPJJUbmoyWYTmnGRrwdhzEkME4ZRodPKesmrjiEYPzPu1mWUx2fNUyuvobk2x3dEc7mnGXzR",
  "key24": "5nDYoXomifUbtCeKJiZCW1nhdtzuWCt2X772MawPDv5qevxZRe7GUwt4P32gDauSphxHnHbujQNbd6AxArhA78R4",
  "key25": "37LnzhbU5MWDWVY7eG5onyfb3isMBDSxPaUZiaMb7BKAPn9fLQd8yUvagN3X6xvxEVgDUPHfKV4Hgy1U46J4wHew",
  "key26": "gGy759JUB3SJMFsw8cTbWkDF7SVCJooC2J9nvAiKztvkdF9D7r9grGQAA5eUfnBVeKPKbstv8pmdGw2Xp6JUCed",
  "key27": "49qngzAu5fu1Xi3zX5W8DFefFYvpx2eFyJywh9HkNNqN3JV22gGRtG9EsjyPP4VwrNxtTcjNyyoadedbH6xD5nf6",
  "key28": "4Y83F6KPrHKPg2kP96cgdZskdWGJZ1RHzphVfKXoatdYeWKwZpt5PXh5CDqCgQi574aUv2po4mbDNK7sKPEQm8vZ",
  "key29": "4fXPwTW42vDwxnHrdxp2bcPL5b7zBPWxD91XG9XmHeqb7dTUBfrVQdhSmtGqt9trE4AdrVq59FQtMxSVsNVtq9iL",
  "key30": "3fKVFFzgsYQYz62zAjq2EaN4iC4WUSMVGyXt11uJ9aPHahYcGAG5w56HTgzGPau6svQgQDrzDdCpX7SRkeN9QRi4",
  "key31": "2D5y7o2iZnVx4T9Dkok4Q9ZMVAghZ38Lgf7pqURM4cUm2yv6FxtDED4KpQ92X9hAbeHsWtsXvvbYTig5iw72VeQ8",
  "key32": "4bUkSpSXPisHW3XHJrbahpkh6rEtWeQZeUH1ci2DBfb6pDzLaGWozzQLnKN9tg2jsPjrQPMKE2SGXdtnhdu2sHC8",
  "key33": "4ay8FksWfTiCXHoxZPBgbcqFso662Y8Cwes5LuwgQ1LQyT41F7dDVZKMoA9C9pjkgSM4nMQi9WSK7XHYALwXBt1b",
  "key34": "58wz1Lu3DyGawh9PVr8tRLTum52AJWxoQM1Xamr7eXBm9G6uDvhRsQVLvX85M8e2ERY2tWkoNJcVUNBLo5couPre",
  "key35": "28Wqj9FmW2cKetjJDT1UP6jxqVEv9kS7Xs3CtSF6Eyf6WHdWdGwPUtCqwN8PrLwaWTZVeo54Ue5PNTbBee6zTg2N",
  "key36": "4G7Hu6f1R4TZnqyr3RcKWzWbaLDxZLMhgnFAQeaGChheETTKc5kPZoiZcWk92dmLmom4z3rTPg8iFifAVEx8v3Kj",
  "key37": "DiCVNpX1NpuEJZypaRLzzMgeswjkQZAzw62dQF2VUXgaHdF51Lmopifoh3QwzXBLLeK1qnJo8njp4mpM12GazD2",
  "key38": "39bWKT9tsnboNTCyiWpBsNVkLJWQTe8pXTX7uDM1jFhiraWEhYz2eRBLXmhjbcriBzjKWygeSMnxbeKaUtDLEReX",
  "key39": "3TzVyoPPnsUnboUck9aw95FgXAJf4vDDFWURhn7nJi5bG6NWNHvaYQSQNiqctvuQwc7vaKFMzenns2L2tGNpW77J",
  "key40": "65aFtYRKmuDtLtHadGwhw7ketkNipWuNKpRne7GheSQcEje4Dhx1E8sM8HsyA57hbvZSmbVKAxwBsFcNj9Mv1K4V",
  "key41": "61aFGisi6tULJ8khgB8cavhtBprCukLizxUQzKvucYA3k6G89jA9StqDZSeRXC6osQnLeSHonyeihWLYW6NfyC19",
  "key42": "472NU7ZygeYqCzKCVZhE2FhgKLaGYhfQkC4Vw9rYf3BKRDiUP5HnTTnBL9naiiQ7Z2Gb5GaDyWDftHECLnspLdz9",
  "key43": "2nV6Z42EZ7LUAv9viFhnCyVNMo6C3UcLRRRJUmJ5gi6cRDzNnus7RS3JJrjqGWNbSCyJJ6usqRFghkvooet8CAjt",
  "key44": "33uQxQwc5b9Mdiw83cfQD2Pqzmn349suZsdoJr3CvwExTV3r32xuPXagtWdbB8jKVFhWWeYP6yBv2w29vMti8iwv",
  "key45": "5tSMNJ1oxAV5hA4hmQT7BT1pBUqB5EJbZuqdmU7WkuLo8UrHAvDDvKSLeYnSMyXGmaVu5qoiDAKuNfriDgtPHgMT"
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
