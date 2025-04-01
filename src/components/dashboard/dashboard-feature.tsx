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
    "32zbZ17k33ZSwPDpRXE2KQTPXKgkW9gXKJ7gso6Ho7qS3UhtiWrZ6v1Lc475WmBkgjLDZU7HxzRyWNqdBX9DmM8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45kbzio8hcoyXoebMQxMkVQxbdiJ4Tq34qP4Msky7eSsCDd8CsvZg2rbxtou22uaNK7DS5Dwb4h83eFqHomPo3hb",
  "key1": "2RJzY6oC5wxUBsUfuH7xm9hcVcL6HgghKtDtcgUvncbfo5VRuAs9uzqTWkzw6MBYTCsfmsxkWqnSH6wY4J4NvZPY",
  "key2": "3UjdJC56DFezc336zZrotpBGBeGPffQUbTvbHAcvyH64MVpabgtsUeKtbs3p6YGcco48AP5M7vujQ2CBvDcEZGHe",
  "key3": "3vN5hwEpG1u9jkKFy63QHkRh1kQC8sJULkn3pcVs5VCzwB3uwtmi8PVx7ECzNWTQj2jjKGse8PP2EktQym3XncFT",
  "key4": "SB3gWniHbvLB72Bbg763z9L7DVr33GG2GscVtnpxkEouZfAsLJNMYgptqaLXyhoQaHzwjrPQRpeNuzYM5MukWof",
  "key5": "2fgwrCUk6nH8scVoPoGQkagg7TCaTVVSnamygS3eg49GEUp3qoc5etC4CJPKzzKRkFrMnksvJEQMUqpL3AAkXEZk",
  "key6": "4UX35rjtdb623SfpXLdJrF2RjtWaTy48tUHVqr8QbrR6Bgqmm3qxNpaVqSvFTrnPustoPQGmeVhAJgxujq94J9hZ",
  "key7": "2GaQLVLReDAbn1eCtcgVvaQQREmBUeJu59V6RwhtX56aFPEu1C1qnoF67mwLE8wJYZ8ELdudQCNWHXyDbqCxp6nM",
  "key8": "5ekw2G2Zpgzd2SeydMpw9tRYHau5Az8TnsgfBomSXtXHMS5Uph2uVjnvznZLWAkVKvLEcyC4gLiNxVQzRqJH8hW3",
  "key9": "259oZ29iySGJGPJYSKdGh8GCKBytgiVbHHUoHmyb8h17VSFLW5XzrtUAmfed6bCWyQFVvM1QF766pwCAu5F3vgMf",
  "key10": "b8itXnnbnYrJgYaSFN6CeY2WRKh9MQ5gzjB4nDqyCJVDLYGpDDjbg7jY5HfRzV4n7ppioLb2RwgbApFjiqxQKrU",
  "key11": "3iCe2PgsETxQrGXdNoBeRm6FdU2Ekc1J3NuHs4UJ5TtT7ZWctEwN4AM6bPqwiQq9ZbS1yXt1HvYXBtCk3dxWZ4Vj",
  "key12": "41Fw3FUPkfqfjiABTqhap5hcZDeBXc7XsZ6BdCSNFotD9nihrQ87o8Dqzyi6K1Fdi4axGJ9cPWgeVPX76zo3PY5a",
  "key13": "2MTSc2wMc1KG5h1zYdtQCFbb5ZxtKf7EDi3qtmoeetwdK57B1ELAAeFK9PTjrxGMzEeDR5nzJy8gN9iX7qjEoJiK",
  "key14": "42AtDkWorMyEvx3texqY5R5Tt6hjgMfV7mYPkXYVjWGvUknDGhJxBs1jTPSh5YLNX1duchdxB86KViEE8FCwuTM2",
  "key15": "5J4W1f8GCNP3REHwvfuwrbJC2M75GUiTA4UCkjXyZtCEGzhJojLE74WVcj49ZsSBo9MRJiKmnoUiPbFmFYvrRLCs",
  "key16": "3hNiG2978xixcdLUkJJJadSD3eTPcbzTR9R1Crn25eUTE9yyNG7uVKou8BdisLxwBvbDY4oxSYdnvTU2EMVwR8M7",
  "key17": "5DhLbge1NTweNzBor1QXBw3L2LvHNKek9xLMNYrQzYr5L8uQFoFda8s61UN7u2Ee6ZKMGf1KDQxhsqjDtX3xaAYt",
  "key18": "4Wg8CoSqYoFveXFr3UNNR9axcuAdQLYird1tP2DbfnxXVtLjRdZmcKyw854SjRykL89KLLpUiSJkKeqHkqcaiics",
  "key19": "2iJydozHmhsWNyi9DVHuzjysrHJvoSWRKo2qS7op6h1F8wdJhwRmmFnD1RHcrgRZouJFSSkHMABj9YnjpdpjKnyQ",
  "key20": "fb7FeH57eeo7B4SE57k5HaqodXbEZtA3dghXPMkLu7KyBFjDtVNSom6Qn8nK1fDzQXenrh7nbEmLV2wKeJ3bqhR",
  "key21": "4d9PAPyhs1u7CvH3JzZSgHnvHtX96CqDEU1kLP8kuA7siLVgD7bND9xiheHsgCsJ2CvTCNTp24WBzbTSPnbrxB5K",
  "key22": "VXWdeup78y6UmL8PH6Q2bCwAPhFATbEsMi92nvSkpuGQMyETvZUp4Cwu6npHsngkNQBmJwpmaAZZAz7z9SviFm2",
  "key23": "nATG6iZSMhuSjRAA7Cr9b3p4yLYsX9NR51bSrAaBPDLagJ32CJk1RnsTJiZpxmStjRQUEfPAXY98xtr1PJbfXvp",
  "key24": "4YXErkHUmgpw66prFpWKKBpvQWfUbh4pst64PfUpLHWxpNEk67ukKGvoDpLGHqrAJ6d4qFyH7MAfwsbdxNgEwmPq",
  "key25": "567AhBvnF9tMxkpqSqJswkbrxt2477tbA43CSzDHWSXoFCPSePMyfrz1HbL125UbG3Je59zUTKgUaa5zoqu3GnEv",
  "key26": "NExbjghsNiZTycdSxvf85t6oDTdJqwMqEMsSYATiGGNoaPDZZg8J73cuM3HPFpcp1NLbsCkeLMumQJChJtT4oRJ",
  "key27": "2B9JH4d74W2NuAXyKtRLuojNcjhKAfggg2MevhmJbJZqyKmFNhe3pLx1RgM42ZwYqMHfx9xCZUhW9hgfqKjjanAk",
  "key28": "3hGU793CvYwbxE1BpvSqVqyV26J53Udt1vnMkSdgxU2Q3jdR9s4u7U7h4LK47sgzhW4JJbAWHYiijJZgsVSRSVE8",
  "key29": "35wGAndnqudZg6DiQk2WDkjadFvAxcWddzxgZHoGF6u4Dc74jr11mbv1dkZs5AtDrEGEiSd4JNgpgMSCrABfeHwH",
  "key30": "4tTBp2huFZiyxmeRoUTVUkrWHzXzg1kc1A1Qk7a8fkam8b34TWp5SBmkHzY7gVL6nG5FYF2PqPRjhSfTQ5ezSgu3",
  "key31": "2yA8dvKThZfboQMbUdAXzdJXroHSUSUdh1iHViuibvouGwXdW5KyyQrHNrutsbFUqQwTcTHb3mRmi9mEK2V8eBJs",
  "key32": "CFMknRhJisgK4CJ7sE77Eba7LPR2ULUFUodjgJLrr7RYG4JPWS33BUuR3pkkvho6iUWpp1rsgRJ6AfNrWLVHCDg",
  "key33": "5C2arDvE51uVhq1CkQnMRDFDTzCdaBFQsMLaThYyo7N3ZUGoapeuoD3h3hpcJxrSTJM6GyPh1bKVXgVeHXeU8NYo",
  "key34": "3ZJhD3cru8hECVGWiBtqvhSFaArvirJaYNd7LaP3fiDHAn24jgE3vL8Q3g7FDaDWMchQ5tKUJBcke5NYgR4B6E2M",
  "key35": "5ZLE3yX2TDcg9HZMiQHKUArEZWp9YbyoWnMWBE9omciTeSsH4kpjrFzGTqVHAKqLvdXVQRXDnufPz38ggvCpr5jN",
  "key36": "4BSyzy1CZiUiCTaMevNsdxfUAKAAib9WhMGDRwRz5nP28df7s2z8vmYFPKq65L9FSuLuVePqwBzAMgMJ1rK6hREj",
  "key37": "2GCmd6P3mesqrKcKPBgE337urA8FybWzcUFCzQxvhdYxLsm9dFY2kJkbUsZymaw2UP8vYFAgo4VqdqhVsJdfko7G",
  "key38": "4K3sw9yJvBSCWBL4ToyigqbMSRv4KLFNKcUYoSmrvLnwDvgBWVzrAQwVFDq6UFDxat7wqvakz8Rk4d8SSdChxnM6",
  "key39": "4aqyLA1jc9gdad3vZHUcBsEe1umvcg6b28YqhPV9K3jFN9Qdgueki3CSzw21Z7TA95Yz92671LJ1LXd8GHQUBamH",
  "key40": "5ixe88KunxYsGzxANpjzgPtd9hTYnT3CPaipbLmW5E1BuddfvXbE8qRkZuYRsr2HVEGYnUkXLeASDNtchkCywtSb",
  "key41": "5ps5ZggFEUsDnaNdunAakQT2GNcwyVsxH9A7qRM271kPCX3mKQJGraU9eJ6K8TdeE8ASJ8nsVMMLtevYUQducT5c",
  "key42": "3QefLwjQMBPpoEV7HuQGWYPXyWPP1rZcpaXMPKtnZQBnFTXq3WZNUgsCQeavAdZaFQfsnN2NAM1YxSEXh5cPuft1",
  "key43": "2vWGwZLCZ2YpAaxs2nb3A4189VdWg939tEBfpUpvxAPVkSKXwc8eKUyC3Tp6bU8ksdpGutgmDQHoauZTLi9XydqZ",
  "key44": "5A8xqunbvW7JwFgMxAoW4bJv92rHZZaHLV4awZsSsXcwMQJ17oJpgq47zrydbWYUtZqYoCucDin2oAjztEpQxtfT"
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
