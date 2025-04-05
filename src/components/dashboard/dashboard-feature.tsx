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
    "58ZxZdvL3VSNoQVoyQZcTFcmFKPUYEnXDdvwC7stv2ZTjAPn6Dw8pwtmhkdTKUzv1JhjMshPwgytUHGzHbXMSX1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcDUBBbLGN4szrYpQK4ZNSD2AqVU3udGqGJ9YMnGMyqN68QePZznB7n4KvaLwH5m3CtpPzmWDq5rA5LbXEk3xLW",
  "key1": "57ZeBLn1tWpKL18HQSaBdbU9WkWrfHgdWnMvFXLhgeUQpYBnmGn6rNTjnrqZFZWkfL6CLXEaRyMT8EDjFQoR4n6g",
  "key2": "4h19R5wafb1UrAv9yr5Zh1xu3ZCNa7gEHywMq8avNpczQnysNJ67SsaCaRMYjESV6N7v4pg8pdedCQ85p2JTyTLT",
  "key3": "43iW3K47y5CwvevevWsMmRDQsnJyrDpcbkcPJ6NkjfSqzyAeFP3MA1bMZt1navpTCLrsiz6g5mpSoE3PjPNStvVT",
  "key4": "4YFFBBvfYgEJUqzBFSiXxFVbcQoD6Hfp9juPSq9HyQaK3Z2BrNrn6p5hhfcx2yuksf7e7kGQqT9Ktie28yEoFbFa",
  "key5": "BtbJCyEMoiVwW858bmBxJnapoJKBdJmQvGDfitpRdUaWjPgMnGXQ34z7jaaXHbKWrjmt1Yh15tnsCG5Zcau76VG",
  "key6": "3zogjHRJ4q7qavznwBfWGiRwoNkq3YgJ9YYWHBnRdN64aZ2AnQp7bZhw42CKSypANS1czj4L4t6DebbiPwFB9Ct7",
  "key7": "4M53NysNYQRx4ZHkzaxvQcfkBECBBcZVxkXujw3Kiuor7JTrHahyeJd3ftdbNRaXtoE7zumAGQBs7ZFbYPEZBBbc",
  "key8": "3ugjhHS6iMjz7cW8nPkv4amRnkRJRbhsxiqvRkGbmmNUAzjFNVsz9KaGMoUnBwZNnw4AHycDkmBkuHFhMEhoQMEw",
  "key9": "4Ayu3J52Z813GmFKziZdEXsUwatcqXjxTFcY1sskgTixjBgKU8J8raV4o4dsat8Mz3YipF9r8ARKmbrfbLKt5cq6",
  "key10": "32LjtvSqwn5hQfRaNiGTRaJmsP8FFmz6P6W4Tj3dvuVYjTtVHJ8A131C4WhjTwD6Us3vRU5SSuWSC3Zzsh2wDUHq",
  "key11": "59P1JEEY2kiFKLREexibNCAYUQuJn8fp2qPjkRigBg4Z1ZV2v95EteBvabtP8sXTGskS4iqr87rTsA3MrxwqBmpY",
  "key12": "5o6j4oAb8aPezUunC8oSxE9xWb4usXUmkEieUp2qSMvUs9L3Q7yGFGpdHiVdTCDTRoPTnrnGHL59YfTeFUKZ5jAC",
  "key13": "4HLTUNr8UDqs59PUEBv2syofRL8k9kCSGnBf6VF6EAHP3FVqv8YDdb32fo83jCfMMb5q1wrofCarjpoNkhDJcwwn",
  "key14": "4GpVh7havWM3XFfDkCZJh17iesmQjopytFKBaRDxHdUc47byxzBh3XN4XcQdBvDsQXyYcgWWUnnJ541vKVKg3526",
  "key15": "3ZvaE7ySYH7w44DeQdeNoGH66MwPcMbr3Q7n1KUoFLBKQisiww2oCKwEedvTmA2rbc4CVhQ8cWKkkKsbc3LK1Ep3",
  "key16": "2K2iAZnzGaW5FgWdae4YdUj2sETkUp5gBCJ5135ao6E4oYYfktPjqYbL3z9Jy7D7u6D1QnCmFw4Ty1xsipuBYJJ3",
  "key17": "ncxXqwT19t6HnagKmmi8QQZxAvqKC2s3p5dsGVMz1p4e9PFKKMzUBfasFME9WtN5E2pqDYTiB7xGrktqDWSbAnz",
  "key18": "5eFrZzweANscKkk2bLDqqjUyxfAMpCQ324BHTSFxww3pkYFD1jwinx1B1sd8f1g6UQh9Fzpm57vb8bVLSHGwFZ76",
  "key19": "3UHwbELmFMcitL72jJte7bBgbXYa8yMe1sVnsdkW59dMEwkKfR3vUFfZgR7LWxu3JRoA2Ji3rCRN8cQNpSMeSary",
  "key20": "hi2hCTy5kkZR7bA66BxxQrxMGaP7AsWYnQket37mEWA2iUGx5xQCa7pJHqqN2gxHHHGncyeFMeLcu9YwzjL2G4x",
  "key21": "2pj6exDfvTnMkwQm862sdKEYiUvjQo3SwFAo3wCWrpFzaxYoesJsBGztqrHMXjHb3Z7fJtr2moC5jvZncZJ2Sm1e",
  "key22": "2bEfdMMTN5FPrKTnG9rSY8uTf7Uax5eFQSrFeoFsoUTGEsx63MqFnm4nRzWX8QQGXbE8ymwEBLjB5TmczZTp6hcX",
  "key23": "zSM3udXvUsJtaSoa5hHjveEgusgJj1LbyhQDzCA5kKnazY8enzafpspqUMvGFHeY1MFFwSJhHE5ztyy2W2ogFwk",
  "key24": "51NMbeMKLZjDqQePsw1Xg9SHBWkk1aoSpXTR7EJMvKhpExvjdq3yvHpsHBobLkW6USyavMLwpfNGYvWaEip6kWif",
  "key25": "6t9rbxo1vqFHBr8xxj4GytNGsxquxw1dFgU95fXmeEahoePxG6Xcj1WVJK2b8C7cX6v8cEu3mDkVUPVSFNaGmU1",
  "key26": "4AA3pKFQdco6ceH4urS4GxArjBhbXLn9wA41wJLvZhLbTUEcCBxLvuq2CM545wKWbiHvFzV1ijwENZHhMx3xVXET",
  "key27": "2rJZ7EMHGn6qPHrzdkw9WxeLG1TthBBFvdzJHScQWdDPDMVgvKcvrromNpuoni52XyeFAE1VxzBtkBDeP1GsDHVP",
  "key28": "2a8ru8tYVN8z54oQRg5GmhxBi9pHaaeBSXtReHHwHDeuoaTAVkcgEwXSZUCe9nT76aXW4ZXhDALw2KvHiRe61MHB",
  "key29": "5EX9XkoCxBGF3wWxTT9TzHBnDBxApfmj5ZfEHuL8gepd2Vr1mDAHjEq8a8hjhdHp1Xps4nZetKSh4LvwYLf5k26d",
  "key30": "3LQiZTTyZ1JbiyxiWUmXjqQ7Dcrt9tnCvQcWMdgeXnoHQX6DqscMEmQpykHaWsCnveVJEGJDLHUAJhaaHHaP3k9a",
  "key31": "5wJ6CZRQihW9m6GRwMtaYsBtetMwUQfvqGV6Ma6twsew5K4L7V1xEm64SMpWCGzvJQ4KsuBfYP2tfVVQ4p7B38my",
  "key32": "59Ydg2MuNVr1wUoyPuUaFFuaV2bauredksyyeEYLACCzYrovkyBvkhUYkmq445DJeWdDQjRoTYKuVAKFApSb7Ywk",
  "key33": "5228XRCgndMc9S5MerZJU8MesLf93o7D7Je1sxN6G1fx6v4R57zn3pcybrM3Qzp7YBo7Tbr2Tn3SCSKTF6dpQhyz",
  "key34": "5n7bjqofQb1qQ6GhXqfdkifWBGwBawEH9Vco1oqaCSziBabBAdPgpw9F277uA1z3f298n5bDjhSXQeC2mmWevxAB"
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
