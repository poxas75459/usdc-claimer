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
    "BGoS27v8B3AJsc8DeX9yWCHNxNUrvFCTR7MLTRKGssK9yuPP5HnkAqUjzjJkrbwF71Rwt68UE8EVfe4PxdGJihp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xmSu6iy2DZt7YmhdT39UzXPjBDfg2R2pBfHPz1WqqJFs9CqmSSxETfq6eugtiCg9zHBe4CqT6AnjLknRJx2PadH",
  "key1": "4RZuu5Kf2Pmuq4a3JkDyveb5swJEvy41mr3hfYdqAj4vwZpt44oEBQKFsi2X6YsNXc8EeeS7gVSFyKRpf95ATrgM",
  "key2": "ktAsnbpTtUXYV1mgqnFWLwEXzk6yksMbuZPuBfnVZWMEX35AnWCTEQ9KBDRnjg1AspF2quixSKbDvgMLBKqjZWw",
  "key3": "5NVQjytNagviCiZEfSdmLcL43Qe3YWZ3saHhvQ82JWacKUAc61Ejq9m9Tp3iqY5c4eH3obMVxknaNxAAoXME9Amx",
  "key4": "3eFJAxg2YPAaaFWex94tyyyrNtZTAh9wcoV2YXVRHKY12yyZwUCB1vNTuDkgEM3uzPqsBrCD6HgLHzhcUxn9EeS7",
  "key5": "2ihwoA7FVwtoi2FgXjr2EaxLcXCM7Lzy5p4uAWAyirQmGdD7WNrtVu7pUejDTNLRaKZqoHqhe2UQkrBxtYFYdx56",
  "key6": "35Epmkc7V91XKNfSiH6dqpWkvzs9rr9eMJ4NiFjFmsvnjdFkwFWRURPXnQM62BSiBXag5EnGQhgYuVAgGwtp6mks",
  "key7": "48gqRBMc93YkJ1UFmu4bqzYPniqPfsjre3xvvaDCPuzb99aHzog2v6psK9xZJaCsu8SBJTNcUTziqrwepwmiJNMf",
  "key8": "2HC6T5XVywoqTYwmARtQta2BNmzWDXgCNnjgbxksqwXEckoWRgsgY7BDiFPYiEfdfPgC1Mi9Wfxjs8VDSjQChHZK",
  "key9": "5yHobLDaMQgMF2qMB6bd78cShkbxuDf4FiQab4U8AwLs5NQiF1T8PxaH9F8WAcAMLjayuoog45rM2AxtffQ1tFD2",
  "key10": "4MJSenYVyXoTVxgM8MNogUCJMB3UG9i5UDREEtyBvchhvWAksfxsXYFCZPm8dSprg4d2YzT1rmRYVo9TguUf1aYs",
  "key11": "5YycQc4mVdEozQknU33kGcbTmCtAnQuiY8gpBaSkXjYJ5vGrbLtX5vMnwyiQkbVCM39Ju6hBUcvdij8Sy2oiDAtL",
  "key12": "GdkVPuuDoiydr3LG7dFVCn2i4kJk9xv9cMytdDwA55rRpdBGUpVPhfnC19Ev4CuXv4cNBainaotViywaiCH76Ef",
  "key13": "5KkswMRjaqvGKZBBEtFMD5s7NaR5yUy8Kz2LbMCEhMjHbs8jhF7Zr6NArTLxkm2BYFoW14XZNHW6u92pEhczSEGY",
  "key14": "gQeBvUpPpHzh9vWzGAiBhP8eZu6vLgT35iMhiV18b77RgccbhtgJwwh95PzMugZZ3diec5d2niT2rbtFK332rUw",
  "key15": "5AUJzRzgyoXnnDBnfKsQtCBfu4GtZWUHrMKVit3ust7chjbUcnPsU1nzb7ZcZZE3ePR1sLbfK3oqSSoMBH3EKkSe",
  "key16": "fQtKFyvtqW7WHZfbdkujf1N1CRXc6DoE18Y9N4DxQsQM2r62erJSLNNEfkVm8dzdQxPumxuMBhTKpXdpYAwdJbb",
  "key17": "3G4UkUDpGHfYWQDGNbVeWHePGcir5Mcbiwk8MdKvuwrTCoMwsCaFGbpQRfswPtSUhK57PT1pod13uwcSQyjipnoE",
  "key18": "3xKSDtWMUBuue7xmx4dXEhU7rjUPrUjmHrGztGT6XesB8yJw8HzDkJaCDnsT7J4HXwGGXXh2FKHvqbauTNGRSXSp",
  "key19": "agahSAeyxnHyZDV7TnRKwp2Fc49TWLzYNyvUiUw1AQ3NcryRr6AC3fEk8obbqRNkmaQkH9fNgtDkEEaKe8CVKmG",
  "key20": "2hRdDGGY7VqYS39ysLXu4xUKUmtBBqd3QKPDtr8tryZf9LW2fu9FwoBAqvnLUBomaVuPidAtRyDj4P5goCmaqyNh",
  "key21": "JhXNAP9D6cGf2gxNA8StULGspu5NxCUKmJVAy31gFFE88QH7eyoQXaznaPRMfDCvTSrfYyy1BYvQrVbtwtBcmzB",
  "key22": "7g3XsJMwznsGufCerNzzNuHn23vBRJt2JCubS5Hc2QMwuxCi3hTU1xsvedPdZ6JDM8VoyzNnFuC81BrLGnadR1X",
  "key23": "3z8qasGP73WV2URsk8ebPL3wR8CMybauVQrPDivJE9mf4Gt8vBGdWKmNEZ6axjBBKzuKxCsqoqi2Pkw3nYWeJ4bM",
  "key24": "35jXv1dgfL6c8rpJxUc6NUSsm2nrkcAq56BKb4czruqxhiFDNUK1RjYxjMoK5kgfXiyBubCwXwYomYKC3VxofPEy"
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
