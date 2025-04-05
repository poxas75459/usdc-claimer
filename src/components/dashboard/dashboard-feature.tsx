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
    "5LQnQvMb4VP7ekjHUNhtwexfyjLEHkuiuC6yTJw2Hj2icZdnsUDUiCwh3jsU94rPoAfT76CDAH4qEnd8JxUS9PCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oXxFuVjb7bvHZkg7pSa5tF9A546C9JCa4kxHPuoyujFXbHfbexdGeEsdJDsEaq2bwoEmQBrTBqDAoz1jYW6JmrH",
  "key1": "5HnkRpuXdum46cAsSzDRrPTkhwStoVW6e7nnMRKTdPbVRTc7uqGY4Nx4TKNnDCaN352m5AfXcLMDoL5761HwdScH",
  "key2": "5T57tJykW7k7z8aSprWECjGwenru1nkasMS1XV1MMTXNuMnRFUTvW4nNSeP1SbDH7CVc7JbuLnbh6QVotYAnFPWB",
  "key3": "2Wy3aymFbYy8SdM83CgTqZ2TN2CUFpYQo4hb7R3h61Dnju8EuaSockc3gP8feYkPbqPtmWmkiDm64a23tnEf34ho",
  "key4": "4E5qbcajvGTfGMp5V8oPhwTxgcPiu8mnsktkQX3jnyuDQSFGhGSanqGC2uNjcEvWV5rRewwTTDYVigVXBttHnnPb",
  "key5": "3MX8WmPkbhZuPsvn2ofLLj8WV6ZEbmrPaTinqV96ukrmb3Rq7zwMKPvZXkwPDmWChQR9o2otgnWGgjq8NAa9CKYU",
  "key6": "4gZMhjWQ8oKp4LToiUnmcNbBCgc5s2yDn4qcTVyytFFAxYGJ1g8ndu2joSCgrCpfV4VLFGXU6rZ3RBh1oQfCSJYf",
  "key7": "4CQEoKanq1KnWhcapGZ65psaDDnrjk6MTUxL21Qo2LmyK2adjrtsBJc8NDnoEFjiEi8838Gz1Ki8ws7JDQjfUB2H",
  "key8": "27mjdt7Pgtbisy6NS4gZVcbTfFd7p7bxNJu2ZMbK66Q84eWnFWkge8ZCc2ArkYecV2Pg9smQiD9inSnuRkK5kXJw",
  "key9": "fdnVTt2L9oQKSbdUvppfZ9xXdE1avNo6ySknswNZUrZaRNiBATyMXZTYU4iihRjTh68g3qEJVLyBr7E4M6UJZH2",
  "key10": "58KWHDnFgBivhMMPvDjqQVVnAaGhKHFMrajsmPApgqXYd2gkRHbZRFu45EAgRNgLjSyXQNSpynCAoL94667PJhZs",
  "key11": "2uzmKstow35oPa362yu1ZLxWJTQiRGfY67Vxb8SXMw6QK3QLobcmdxBzFfi7S2p29noo3ZYv3rHzexuzPCDbq1mj",
  "key12": "2AigMoGD7Vcfq5ksdtefuNH2j8XuZUPjHLBVJBDkRJPLtgbXknJAvkSWgFk47hjAhJN8BQsQ6JRGKKR9B3cwGjnw",
  "key13": "4RHupgVPgWpRDws2BvXBmgvn17ujuyyWw3pY3ww8gadQ8Ubjex49XqMaEeg7nSPNontFvnLGo4UGDe3MzGwQY5Uw",
  "key14": "3EmtfcjF59j3Yy4jNr8A48K5rckYQbH2UUywM4UCbjdaBENpYtDT3LLUBjY27rSWuDbR4ypiCMLVmkgDip6br3sX",
  "key15": "3qdjS5CZz3z4fxvw3zKmsHg43rpSsUDnPLz8dMVENtyihuZGe8YwBXEipobC4gBgMrcNqXwGTaX6NxmQoYMbQ3vS",
  "key16": "3ohjsuXrK9CjmanFCcjTriukPGkKBJZNFxB3pYgKBijgYjkqYWkEFPz7XZtYzEiNMCD4CiAFuhKFeTgPRanVMcXn",
  "key17": "36HbiSWqB5DrmQtmhJejk6j7iwx6FUDhAjnbRLN7TbeVERBoJwCCDDZQQmzEMwK4FpwYXSipts9d1xEu2gGs6EQZ",
  "key18": "2DSLMAevkiPM6QsUmzYeA6ktGWnESUBiCD7hNN5Vsy4MVwMGLHY4vCrpnb9ZTd226gU6szoYBBwvLxNEnk1owEsQ",
  "key19": "ZZBvHmhuhgBw2b6wnqnw6AnQkTFqvAYkHXtabiHqRn5215NEUKnytwD2TrpXLq2GbPVri13xa3WiqWgApy5hKqQ",
  "key20": "3QXSECqfp1yFqCbYdxDgnpUUHeDeb7Ceqdn1Nz7vX8cvxBTuEKtoHmSbHtc9v1Lj8Tw6BgVkrExHLxP7pq8DQrcQ",
  "key21": "3RzX67nm8QUwa429YHkSus9adBbgqecwuTBHsegZMUU9mtgtNCBvvxWa3RDxSueyvwix7avc5GKBeZLBuLQQ6CXy",
  "key22": "4unzGKCaFp3mg97jb2PhtJ2qQdnsf5jj36KS7SkGavjRZ9bupYsc4tYoNADcTKzMuzurX4yHEriAwyYkE1AzyR4x",
  "key23": "4GPpLxrghHf6ujqxFpDQgtt6jLL2iZJmtiXYyn9xRNinwweM5TDKnv1yy3JbBiNHdo79RkfZHSGdkpat1D6Ddaaw",
  "key24": "5dhhip6phManV7cSE1nXfAn6z98xbS8Z9SeL3hSvwwQauUq9LctHyL9k5Qbjm12QAGv9Mae5y5Jp3tp62Cnd6NGi",
  "key25": "4NaeaUu4XNa8U2W4mDCFDwk9nBMDinwh4yTcEck2Uxi4vxBo5ZpNSJ9nYq3ipwyMFDYtsanveF4jY5mTB7sBvNbc",
  "key26": "hUpD9PEsbv8RgCeGS489HHw1Ng8XSbvkhc64eksCCkFkjb9vgrvvnUbVcykCMFPN7x7LpQk74DGES7t9zpduQdH",
  "key27": "2aGiLQ9oHeyapnHxf9FUeYVZr1JwTEur4wT9mX4xTNCrBN9zyA9aeNU1uyUr3v6pRCFBnK3FnNB2kVummaFEe7fV",
  "key28": "5vDHgoELJ4RNhnAm48Qe9bHLX7NcCgg1sTFdgJSUib1C8AknF4JJPxFJ9kbbpg5Wu9nb57gNNLiLGfwCMxG2p3XL",
  "key29": "5uuNBdnxMsN2MG4jT8tvPdbQX2JfBUEyg3BWzACe9oEegUJ38YZZAB7LjwrgbhPJXmnjkoDjihyoBCBN1ffcCGZj",
  "key30": "5wip6eCaPCJr88a7TJSLLaWTdtCBszKYr5ZZShtu8hd4x4gDoUcxWUR6QwGnjCzJW5HdP9mFWFhZR8B9UzET6zim",
  "key31": "5Lb2KSAUtzxgtechEssT3F7EW4Cj4s5keQz6Wm8tqDYdceqXSPbQVR2N3MwprXbVh2HdVCFqcjmXCSCREJB1gi4z",
  "key32": "2cFdRmixrNFWSrAVKs2gWhWfyB4HSY4A95t8PSTNHbigjFQxi9hzodEBqybaLcynQyHL2YRKEWwduCMRPrSoukM7",
  "key33": "4wCPDHdk6j19Rzziwai9jT289AxrYzqrUYzFREdngf9igYBR5MHCkSEZiLTzMNLkAmnFrwRiaHwhKaaqfZy9pbft",
  "key34": "5EMaPPXtTszRrpDzWbbZ8MWDoDK4Z2z2nNT9dzg3MoNSgjfKFEz2ZNPCAbkdtdp4GDnUEqJPnmNxRptfYqrPfs6s",
  "key35": "4ntN7egerdnRBeR8RsZjnH3Xy6jg3XD8JNTorZ1MurfFanjYDAdSTAHcgVn4VQsku2RjjwYeDmFft4ANh5pJbtkQ",
  "key36": "3ibounMHSoAsyX3TCrZskQBwrgDT5ehmfm8ztNj2z4R6Atsoo9t8n47FNBuiUBUmjacuEvSDjeV6qBsJW2dXCFtd",
  "key37": "4HDf6jDDG2pRkyxkRUAAkpV689RL1nQpQ9Thi8ic6PbSvErVEf6uw2ViQmuKL6d6CiPKLQGd12f8kGTf3QDE7H7w",
  "key38": "2JNEpXaetxMMDLNysntuNVzRjgAQYdu7yq2P9Ci3kgzQeWsfPDCGGU8ahv7L5HyoPUeXYEq1pr85DZnuBti9eL5R",
  "key39": "d9ASMwDkLkD8VpbQ1YG3iG5wHmweEPfwkD6t4g4h77KGrDS64JzL65uFXgj5gKgrJh1XPe5pdY7osBmzjy4sRD8",
  "key40": "5e9LoQaZePSpLctPkZrutNbqTj2ex7yxRwZePb1S9h46DP84NhEoWa8JRWc6NDmtVSbTUq94AAfqGQD4WZXcVhoT",
  "key41": "62Pw1MCZ6R3oh8RpfiYfsuCaE3igXVt7S6WkqUnTbJLceE5ADH5HjMQsfYLheBDJhYTnzrCqz7MwVyHJERTG6xth",
  "key42": "4uU4HnG7nH5Stdd69iN8X6mBKio5TuzFzXUW2fZBKvYw5QT2qtDJ8MPy7Gjs5hoLsepsD1rRHKzb4Ud5crx2PHrh",
  "key43": "5wHVM2SjzZAtJDtY87SsLVP4oe7mT6DGszA5Y9QEjQcm91tYv96mchUog7ZTWYK8wF6i4j8muwYG8bByR3wiDuhZ"
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
