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
    "2MS661A4SLx48YtFk5v9JBPKL6UcH1aNLEKes5iJY1hzF5SzC7TU3g3yLHbGy4eZgyaQdMSUTP57nJqkfF4pacn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RmcCLteFhX9dJBnYt1wX8e7srBKfiJzHBz4G3A5E4fiKANe7KFezRLz8zYiqReoHNV3GBEEzfokFjfw2G25o4fi",
  "key1": "4Po624dhN6DnWQCDjSgCp5N4G4vmLVZwwHKpYgy2ehFAzwU5GMWaMh553Xm7KsCjg1qb3mK88CKgk7DxZN8LjWot",
  "key2": "51PrgWGkyeH1NBRvAadZcYhPMNxw1Uch3Rr7CSYm7th2ACGf57tbvmyExLYoyjGFvD7AgtRt2hZcXD1c7Liry6Lv",
  "key3": "3gSLy9faxKuyEfrd19KLnqYhuB7QTc7WRfocmnFrgXfsE5L2ZGr8m3SD4HCW3habGCdnAt6txyG2CCqe6BDuFLFz",
  "key4": "5ZXrgHm4c9yHBprGeouwaPdCj67gMftBRBUgq5pjSCb7kRQY4fiht6ju9v7Hj2rNT6T6sPk5W3tfw9i7hxM9ot4G",
  "key5": "46TWFLoY7J6djoDrcpx6qWB1cZxL6ey7C2tntF1mqYjC6i9h7HmrsH5wTps2h9B327gU6BqhF883odzJD6u6ftYi",
  "key6": "3hQwWvQSZ8MjoTWZttXUmzzhCZLNaUuFP9WgMTr4E9SP4LTzkaSdD7aGCmK8oBYptZkLntzAMRqjiPTsmEmEz3vn",
  "key7": "2YA7N5kkYT7ZV5w1hmwRgVSm7RUNBqA4DeMHW1WLEiCMiUcH2SST5Mm4tYeQaA3qo5yzmS7EUyKzNb1KdmeFTjVU",
  "key8": "2roV7D3TQmQWw6zafwiFCsjBQvwZEpKYM283QY4BzGH19JX54U8rkWoMbNwLD3k16E7Kfxaz6zradRk7j8462K9r",
  "key9": "44Jv6YDTg2YNu8Y2xA4txGpG179ASKEJ5ckVJVodPT3znCKSLdfMP5Ji4Tu2QEHXQJ4PBxo7ZRm7DxkbEj99nsBa",
  "key10": "2XGBX5DA17F4CMz8ss41Mbh123bo8Q95VP2faqRzeqnBuGqvSGXGEYXJDkRAvNgsmH45i8akvCJZZEB5LLqJpEjT",
  "key11": "4kzNpkpw5vPaV8NC2QynAcuCtShvqHCNXhzwLMxFcEtuuVvxA6kJiu3wtFP6DgC7FVsb2PeJULttBZ9qvEQdeMjB",
  "key12": "CqG9oJYnzh6AMHFRNh5MsiNtvwLAmxaL2eybF4vc8shNgJWFwzr63mgbDHfr3uNdoq98NaSMuaWUxj5ioeoQ1AL",
  "key13": "2BDvjMzPQJWHQnjQor39rFvMrDiEY2WcVowfj4thVqzkzfWfuqUJ49dp25PyNLKtuZ7AFqVZ2ubb96c5t1LVY1Pu",
  "key14": "mAQ81wVYbueiEfrV63vJPw6B5wA4d54eMycKgL6rw1m7qq1VtevHAM3NzGyEcdhQ2sdzdrU3oC8LHzdRZnKNfrP",
  "key15": "3nNWQht7Vhsjm84HgpdGyAfo4jUUu3PMrjKxX51ZvPfH9CRzi55qNFjcJXhqtDc13gxHxPVPB3VWuQdkU5cHPmcy",
  "key16": "5mkBhCJvpKdLD3MuwBJELYU6jNjzonnhgf7JUFRpWEMgCeXAq1L5Xg9LXaKdzcckCfjRZMpFH63VRcvt6KZz8yGU",
  "key17": "2o19RUq2bZxqiQ6E7THG7BnLSUqL2FBknoGcXjobDo1pp7wbPf3SkgeErvGT4natEjhWUmyua7soZrzPAeDLSvKZ",
  "key18": "3fqZcsQ8xi9PRs6NYow19yKTLcb39VDAjSnaHWPyENx3CgNAcXpnA5MVEeuV5H4ebEEzCp3Cwc4rjrAC4HsfvvvX",
  "key19": "2opfoYivUYPijRPxPggXb6VWRVbdqrXP4m1jusN7BCSt8eJ6zkFo6KxZhndcHAzpeMugGEmw8NgZHvnveAXefAjZ",
  "key20": "21ruoXpccyDM2Vvj5ZEgekEHANMW5WD7bGk5zPD6oeKf1935UXSUK3WRA5gczQMiZXWQT8qyeYAPUMeVy7qYdKdz",
  "key21": "LASidq8azS4Vg9SgRNr4S8L4t2a7n1VGNgSJaJKFcAraQSL3VnvjiezZDEHBnVxw39HKouzL7EVZYy519YnrgrS",
  "key22": "3s1kHznewVw7f1hFQBPX18MZ6s3kigfkYagZvcU9gFWAdW2r8spimVoHBzFXkUDTX4dNtBGoWq8TkAZMAjvaPkfz",
  "key23": "oAm3LZwuRdao2PdVW5pq6hR9RF6pcE632qRKokYjj5vg9uQcWWGGSnvoHUVPifVVHerx1DRXUNSbHnSFavoR3K6",
  "key24": "4mHcvCaG2bYShJzme5VAzGxCwLi2cXpGbqEu6ASJ4dqe9wKPEEABU8QKLfpS2noC3z6T465jjvYb3oXE3rUEL2f3",
  "key25": "pLsA8oWMx9fvxtYXowLHis7GmNpuxr4CN1WBVJAxweAgddR4Q5qHzKW24HSFRoMvAPNudtQ64mC43QU9RM7TfHH",
  "key26": "dRJa8rf6LGQeTQrd8RSDfpB91RXexFsRkzxwsA3GFgfpZkc1MYXf4TdRNybz9JnXFYq6HqhSNk3YMVchca4ATQF",
  "key27": "2nvNprT66EvV32tUYfbJYzi9M3ZKKokDQzpTHefHPfWLNyTYNPrnYjsTvNqZBK3FUhTHx9ZR5rVXqFx4wM4sMkmn",
  "key28": "3ZMGXK6C3FScu8tjaHVRf3d7xv4G4PTNaJgKomsbH9SQTv5fsdEBsR6X6FaKJDgyrL2UzyVQHUSAHXknRxWbG8Re",
  "key29": "5BxNpQtCDi4AwtMcHFSVLggkfuyLQD4rWhx3ZCVNhiEDH9UbTVKmy26GE19gy2hJdaRyMaq33UCXJHEeCGZyVFTn",
  "key30": "4M95zXxA1siVVhMjGQnfB6uZFBLQYdV44myEmYT1oGGFF82AFj4RyWzYqxyp5jV8wjixPGss4fWdHxUtg8T76xn9",
  "key31": "4GMp5iVrRxLU3JMRNasdtxn4d4qSKvqNdsCydWXd8RiG4EAQUuyLYFNuDmZCktoGLW9fKfLFo82vkqrgvZTbNBSb",
  "key32": "qxxhPbKwABW2ZQGCduT4hCN99cwDAdfWnVpL2yydevw3CNPsFW6TE59wuVLDf1U4FMFV8kUfNwvJHaktAUmk4RG",
  "key33": "5TWhiDpQhv2bbRZi8ozmUT6rRWX1RB1LnuTRph96S17apz3xzcxXqpzKA9VQFmwNWFMjppRv21kMinxcDf4NZhFw",
  "key34": "g9wfjYU3qXvvYiUc1AHVs6heCJ1czzM9AthzNpANNePSUEhwPHg75Rj2SXgFUMvjBMgm82UkWqnSoGAhypN74t2",
  "key35": "5b8S8QTonEfLXYpPd5MjfyY2fox6vgyBk8SpWk8jP78vY9f7BH7edU1yZ9Kg3EwDUXGif5yrD7vPU8ncx5HL8Wdg",
  "key36": "3hWrxXHtJkK4aPiGHGPYSGgWizpLW7YYSiYAJ8tY65hCucYsGnqCddcjfzXPg3mqTZjfdpdCgHgR4XnUp43FDfQK",
  "key37": "3D51B5pCCiPJEzPXhJYKMNwm96keXxUmiED2iDVnoSPbPLfTnQr4EMvrHj9ejoD1Lb1FRf8sfYihbezHgdCPPG3B",
  "key38": "38GGexTxyLTEMEGXF3NNgVEUJknu6zorYjLPoUup8bfxJQCkQmHntzoHmsaX4PTFbPquKRwdqayXBvoNc3HTmqMt",
  "key39": "5CoULbokmCdB3CfAk96Vw7Yb2MVSS2zSx7ScmZpvdYp1Me3hAq4GqGRWv63NKAcoCGEpJD8EDDgf3JSSVshF8zDc",
  "key40": "2aQ6jd1ngoAtFJVVoAqPvcASvWPhKXqs3ovSMTVdu2adghcu4Gzgb51V2477xrHagbVfBMjWVGmEYt5e9nNE6ACq",
  "key41": "2M59Pg2s526c6Fp27pd9b3hwx88ZV8km9Zaf6Ts8xKS1vQbsm9hGgTVYHuEP28mL3ALzjF1o6uwopSRjZHxkye2P",
  "key42": "36Jj1AhM88neE6CCca5qBJazuGP2yQcY5ocZ263bvcznvpc8tNmkJrmGxNX3GEjMoC9w9ueN7mEbhB554NUy7MUH"
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
