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
    "3WvymxYwaNXgBFjFVTcEvRKf88CsA4rfmj7TWv9KD2BfxbaqhwBn1hbLD99ozGfUC1pkCuxW57UkxAwCWaYoaXU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rjniP8tt9e2bbHJr7GZGB3fjs6bbjVDJFcJGBmgFZ3StF284RdgsFcWa6SYJLkP2fuUuGnv6uYdEwyhY5dT7YqW",
  "key1": "5zuFWNo4nx7A61ctMpZpkfezkQHBbx9VWfWsaJMt6LAFbBvB2zSRwzHNwbWtxrMDMU9J3LhnR7KAdkByroPyFdUg",
  "key2": "3HRj29pf6aFqnodbKUvRn66xFwtQsDYmqwNZM71Y621RjJ1FrNbcGL1VgBKGwnrhWctfuicA5ruLcYuLGG5PZrf1",
  "key3": "5Yt9uVCNETFJ1wHEm4T2khmmkpoJ22ZehbWdjfyY7rdNwYYdXccUSgJFmwjtHeGuZJMnSwnyt8EJ2f5jDyz6sd9e",
  "key4": "4HrXiosEQakUpEh3D1KtNGR5EKEwFCBYgZW5f3rpXQH9py6ANku19xFfcBcoyNnkLd62QwiexiwXG8Dh3KUT8dLX",
  "key5": "5GFwCXLBnQDuaxyE3APpQDygqLQYUjmQLPhe5j4QWJ8ShyowgMvVySmzh88RVvzfEDZkWkix8aLFtfJcLX5szRsW",
  "key6": "KPC9HhW9WpMrxAFM8FnSHS3yVzZT1woH1hNJJd5jmQaW5o4XMUBa8vzANQ5wHvmRMU5TCZ7oAfBb5z1Kuw7jVLU",
  "key7": "5xfBevnaQinRim3pSgiVfhtyhyHV1hcYC16kYcMekHaPWa9NGRV8rfKgt9nakwWzqPsxpbBCG2WVmr6NXDq3Lg21",
  "key8": "4qtfhzGBTz2jZjDcm2o71wozH3Mst4ngU5SLLZ8Sry1Qb7EbbGDh5qj3tPgNcGCSajYdTwUMJAehGiUgATc88mWD",
  "key9": "2zv2rKEV6PxdsfSbbqdVgBN2h9uiVATDpfurvAKh3QDMHEYM9fhZyo3FELrWzNEzsC7SXruCsF258m3JFX7WnfV1",
  "key10": "49KqeERFAQGr5mFDkheeoZGvYbE5otsU3KYqCJANgHA5kNuRkjUCHuZ7et8ucdJYPFwKrjMkpnepypCrUPYEHBsR",
  "key11": "2Ju4Xh9oUR1pjWSdKYFq5iT1ZBAYWKRaNnbD5W3F6zsLe5c6h8BFGSSbKQEuaYaeubF9yK7gXZEcdjxYkJNjXCbc",
  "key12": "4D1XcYFvNPDRVVkErySKnkyRfvhqogAkaGFfbckjzqiUrvoE1qeMNpptVXTo6KBYdZLbgWBcQh9TQfJccw662Nmt",
  "key13": "4VmuegzdymqanzEhDHUbDfmj4Uz6sYKvWL9AXapxjHr69HsPoyQDxeDvpKRDuokB2CVVxJFSP3niKZrpVzcDwFdX",
  "key14": "3Ttr2iF55yKd78rNqPAcRw2XxjUFhQgWD7bNwCY7qp5dufLcC4G8hdka9nnxAAybrCpvYKS7Sot3SSxhJYmJNydm",
  "key15": "5nsLMM38T644bPWgd2CE2PeVEUYJexhr2Zn47RPePRz1nYWYGEqeiBXnFtcBWraevR3aANGVhQwG1LEykpChk4Lj",
  "key16": "5r5kqoFbjLohorCdPRQwZGsiNHjEyziBzHV5QPVmhLQWhjh3pLwrA6xPTa4G4gDqzqRqze5yV75iSSLGyiCHXwTc",
  "key17": "2NkU8EUxhj1HNsS1vwwPwYKoSf2RTLrExz3C3G5tvWGYxKhRgEmng7RAjW3e5gp68PT67PfsxPsiB949RnX3RAV5",
  "key18": "5wmsHsTJT1uek783HqoRSq6TUeEq7KJad88Z5L4qa7xWh357pRZjGLCVHFTVmoGEpVjt8NsfgPtC3BuXrSH1PLKd",
  "key19": "3Wm2jqYTNYTS5wC9859JENX9akRuF9HLJpEGWfhYgWk927ynHdiiE1UrcG2QBab7AyF42KanbmvfMnGysNRi284v",
  "key20": "ziXDCoHfMv5dbicw7ckamSj4cWADhpg3eoEQDdNJ5SEqNZ1XXGmPLqGwFvKt9bpCZbRRK7uWArQmgaeJLhATKtZ",
  "key21": "ptzLNxYnwfSi9c3Q6DtEy4GRCxee7oJXAhEC3Jn1Z2TEzvwnj4bP5bVZs8LoroFLBcZWYtCkygdNRdE2UhUFz4a",
  "key22": "2XLmazcDBaoEiiDiXqjytpTSzF6AVRoa4Hzg3GpaM5Vcu4G3PKTcKBiKBgEuiPQ5pVjykk1CoT1ksvBFvF4UzSVZ",
  "key23": "61DEZB3A2CDfh676gGe6Af3fWBqg9aZ34GEquQkR5AcoVkhSUmKQnowrepjXyd26UGxpgcZcxvtkeR4T3Baw4yqe",
  "key24": "23QygZCDVc4mvpkpBH2WopbD7ehygASZJW7zMoVhDjVHRPB9g2yKzL8CpaUTdKXShNweZqxGvPVPQz9VMHgr82iQ",
  "key25": "4Hd7we6YGKpsHL275TyubgoqJ8gHQBFkU63SAJFJT1Edfb2cxMwNCh7z3fpViwT5vsHQecsf7Vo8jR8QDXHvNoNj",
  "key26": "21r2Hep3wLhkwBECRs9fP21ngsFUr94JfN9AE2tTqoeChnabZEhAHFEpyYc3njYv6RUJrCW96LcEeD7VcKcAGan3",
  "key27": "4RG9U71zB3rRH1CPfWuaQ4LsKkQ1qZUDntMpBi2Yn6stdPfUExXeDEdXF8DAN6kECheWgTwrHBgJDeWd6dSgumFE",
  "key28": "3ChQzP1EARARChL6SukhyAzxtQuYGft7WG11wpHNyL46dqkQhKvkNnmGatcCX9xCiEah9kv6YFqCYeunEJFG3eYL",
  "key29": "3ETPjQQM6R15mXwyEWNWk96TznopCn1xSu6yWfDtPAyESPJiBirZZDbUqHe3Dw4yELw78TvNvo7YNX4bxKaRi68H"
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
