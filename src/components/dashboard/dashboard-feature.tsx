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
    "3KXr9VtktpdMuSnCRNp5i1UnAHidjVo93geYLwqU3Lx3r8pQ4JT1gtL1k7q2KeFH6XAuCsjNZrit6Wbzr9Xuksnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tzR8v5FnRE5S6CUda8V8eR5GVBxDYvsYYXyGNRHF4CaNAtvQWWwULwoxnR9NLjE7BAgMKyCfcsRrP7TinNqg7LM",
  "key1": "GMjFrzR3iadBDoxnceTMdDAEp2Vtmri3xPHEU152yckZTHdofLWJrHrfAJVLi9ccAULRAgZceg5ktDypA1C91W8",
  "key2": "24JJcQo9iWS1pHxUEwmoRY6HgT4nFEgGzo9w2ns6gatNWVbv5CmCTtx2uKdwBDThNYUKnDcHNescckjnd6VNDiYg",
  "key3": "4kWqVnHxvTiq19CqMPxUxbMzEnuWv8U85yNcaVmqnDHaAsnKMAre6DD7FXAXhYsZyrD3zzXx5dgK1ExohbF79gb5",
  "key4": "53yg6wh2bpRJNZTWvEhTuYukLf11sF4f1vgvYfftivMk95GT9jPVei8RYv37naKWCsUeeWBKViZorg63nSfnLfoN",
  "key5": "5wCZYUFY6omzc6fR6pZfiBCLvQxyqDont66kZ8L7Fgu1svsLGXCYoxWXr2Ee3mth7A8C3WHZQUp2pVa5NP31Xkns",
  "key6": "3EQjcDYfkBkK1k4qCdBBfmFMckNbeGBBs15JWP4P4SRU919VwNBskm1r733WHUvRsNQ4Ryzm8DLECgDoj6YbjDkm",
  "key7": "5Fmyx9oC9snY8mLUfas45kZMdsmyPxE1FDcsTzYc7xw42q4UEZnU7PSeUHTDdScGanjNEDamCrst21gxXVFpXsYT",
  "key8": "51arMTuH8sbAn1yhQ4t9T3L5vpDGVhMHdaCdoAbgDtETccGGpVJTQdfoe9pnjqebQMdH8ApNtYq3r8EXWHuQqJX9",
  "key9": "4aXri2kXdyHEvzd4WsFiomDsDW4XzHTXGijzuysDanfNXbFTEaBzf1vwn2jptNzBPTH43cxLaX83Gp5CCizT4mL2",
  "key10": "4dv7vQkoVy4B9KrbJVSQWAig7yfEAQJxeF8BNhMbUr3c5XWBPXqCteGSZvfCDBpqxtfaCYAk7wJsyZDoivSTUqPp",
  "key11": "2QFau3ZWc9Z246haRKPeFDPkrnY89KUSw6JiicQoeZ9nHfu8i3Bou5K4HMiJqRv89zMLLeRvc2x7n4UDFkZzRGen",
  "key12": "5mruSGkCKGWJY43foWL2eN1AcVqhm89zwZ9aLJoAC3UZavsrN9UnA2KVLurticSumPfJfKKConsefXRmXsJBWiii",
  "key13": "4LLDi4BksS4dTLtL9A53kXnY3U6AbBCDLVFcwHr4i88PQDbi6DgwBT2PiE4C2zPPQVyW6WBQ6tUAGknp5udgip2K",
  "key14": "9PWZo8HtXyjVVk4od4WdauBsRZaZthsFv1vvjsSVpBp6H7gAvGBZT6XgXE78uKC2SnHtCYHSDPXDZ5taLETKFhs",
  "key15": "5QwkhNvg7qHbUbuzWjxUUYV1bk1VaFs7Xv7QjPpTEryGFHg3LfpmXwzs8CoZnLDbHroR8Z1pAujvTYbRF2moqu4S",
  "key16": "5EanyMXBngH93GmT5J2hjk2kwBhUtdw4cfciyAf4p6wWMZxnnj386mBaBZRAYtgvgG6E5ViC6heMUr6XAxhEtcxY",
  "key17": "5b3ESXXCQQL9Y1aZhWWxLZpc5gemE1ZkQ2YGNwPfFhE5TzyvRq7wGvmhJfazydwqF4c7x1sV3LvLY8gxctsHGzGX",
  "key18": "3AVLgQvYXf8XTyesjEPjE3x71ve7cUsn9nsSSb7FyB2aVzvg1v3P6c28CysYsYyrpoEy9HhHTKxEB77LPCyJWaxh",
  "key19": "LUW7R8RGGHA8oKwMV24p1i3GaosZkCgEDvhudB68VWKXmnFNYvmJ3AJtcd3xRdAGaxY1YBzGvTcL9hyzUfjNKw2",
  "key20": "3U6UZMjVpPdhru7AuESVXAnNGgaGRLgjnD6fVNYQf5tfQxixqLG6JNRjWCkZuuiyjASQVCVDd91znnxZ7qoYn2qx",
  "key21": "52o89eEGomiyjbktdNPjhHjszXtFeAEktC3tyQgV4C9t7hr81wFBFsWd2aFp65MFM8qruMkmNUPHcJ2WdSrf1Z77",
  "key22": "TbksurvQdkFnsmLrA2d3vw7NbsryAGaDzQsHGWhi14mgg1v9DtuSsUHS5zQnc2ZzUWdm1SJqeKekj5z5rcjj1v2",
  "key23": "2wHVB6QqdFog1oHvpPZhFbJvxU62h2dNN2kNS2vMcc1yxTKAq6C1weHMePSG7MPNmYHMh5uyVdmEJLQGQdLsm9yE",
  "key24": "2KZzzCJfUSMmqPA4R5tBK4f94wPdcrYQHkfzf7REWDBveEKmYuckgFvCm4yKcPPXhB4eSheCaUW8oLvjENXMpMpJ"
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
