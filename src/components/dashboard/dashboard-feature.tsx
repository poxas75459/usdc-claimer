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
    "3dQXkFWSjQKy13jF7p1seRTF5BbU6mrLS913vJHHvW76ZEaypbg2GoZdk41trY5gTBD1burc53VvGbWWrd5RQPjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DrKmAzfX5qFqpHTae3vjLXt55LbV9tcCkvpjcZ5WNW7Fcu2s2hog7y474uyo4Cf7xTx4Ving5sv4fvvrFio7z94",
  "key1": "67egRH9kTDj7Mz4o1NMwbQQY6tjBij4Vm1WLGnrEodjPrLL59SXte1TYMZ1AANZkJ9GAKRG32eLcVAsAGxX7D32X",
  "key2": "56xFbMjyjFPXX4XEdj4QDKBMiKAe7BjmGuVMd1KECeMHrADCJdiwD5o4kJ1JZqG8e2YBvCHs2m5vWjmgixPgTJtw",
  "key3": "x7yZFhSSEuqSPPvFPu6uHHkrn178honRbJpqxwFHk8WonPPeZzwdtbXz3v1b9dgEanruKLr82qP4tYEisKR99m1",
  "key4": "3M3tqj3EvkEHiy5daaXYgSMMrQYdKPZhGnDQRuEQJShsaTLM8jDVMjegatu4DxVqTGTAfJvobDUe5RhtKX1gppxa",
  "key5": "4hem7UwsRJzyTATq68VrkKbSJPNGXBnGSCGmSee5m7f6S2TEzzKYVbg8MwZEYtywaMQR95BLWq9VqrDy5gyGbX4f",
  "key6": "rcQwkjfxvFccgGcMw6kTr3beKUJujZzrBVjXEzdueDTNzGk7yHcQAhLgwNEVWoYYihsfBdyPmGAZqGqfKAocg7x",
  "key7": "4x4mDk9Yx5R3ynhaxvYcK2JXzu4zHRNX7x3wfTZEn5JkcXFhYn6cnpsUsLD123oQLehGEziD7rpcFMiFfZkGadhf",
  "key8": "4gcrfYgdP8gUuX6GcmKKD7jD9Pagk4gMifXZX5cPbJAT74wtXwSaMjGqa5Xb4XZu5SYx5ZMbrnciWYuAgurHuuoD",
  "key9": "5cjWsFBqiw9B5NdBUtTZEx8Qdxb9UWf5u9RLmR1nvPDDxtyBdtX5mx4SEP7YF6Guyhts9d6Df7HjiNGW5UetJ5BY",
  "key10": "5Vvi5M2SaUFj3vDrqfvBUKwLZBoK4M6GeSMG26ytUk8giDQyEAzmWC3wdyWSCw4PpY3DqgqxhUe25jUTb4MhLAmj",
  "key11": "2TgYHDasicQth2wqcVKzLwTQfVGHu4x9gu7rfZ9jVZgfWhJGfWxgzkFKDe6F2MiANA8HaHM296Yia7iLnTXCUXQh",
  "key12": "37rvfynxww5Qvx1MwohQjAFZYYbHmpVi3Jfiz1BEMma2CzmYq1zK8udL4DJ8qex7tQ1gnFVfSjWmfhSR6b8pUoKx",
  "key13": "4suBpGnBjTrcvRhgNBzo2btFspeetuaC6unBWB5ZAmXE6fpvNEW1sqJEib5ARqZjhSyCdavWQKTnzq6Qv3rt7Jgv",
  "key14": "52V85mTX7Kedu3KVw31JKvg7CsjNmTf8BXVJmiBovtJbDDRYC55TqcQensKW5thUkDaxPWvDY13gtRKWUFz8ohKj",
  "key15": "2EAZfLgdtmST4uTKR6ynW4hXBFYKowV7Kb3v99zCFJWLew2KZdQfRAjp4A9kAC5L9ZU1XPrtZdCVGbkTJ9EcA3Sa",
  "key16": "5ZxjYv5LAvoTEJmFAUvgaqT1UxKB8giK8qKP1op6GjHN4yYWGwgpMJkWiNGzm2n9wV6DJTxmTsfnd5qWjzVmfcSM",
  "key17": "3Siovhr7Y78kC4DGwVEjEVUZQw74KaWR5BdMpZK5kYnaHDByyE51oayK5HwSeqmMPcty5Gdyv9XRihmDDtN6ektN",
  "key18": "3oQU6N7FTZuSYJESaTW6eQaRuATYK3wDoitfiCbZg7LaYQ6gyAcDFND1ZrfEVX2EPEPqXZTb3yCLJW7jpt94f47H",
  "key19": "4zGjm2wbSR3UsTL1hU522G8LVaSgcgPeDmZvzKXJxZgCK1g27fZunfYpnftgKupnNuYin2fj4yndEpUUrDSsEfV5",
  "key20": "3QXFtu78ziB7WUhhsFPBrDkiJir9tG2MyCqauGbEw1LgQDEmut3Vg4LjH6JCoCE6xs5B93kRFvh62GrqmBBt4xYH",
  "key21": "2NLhTmXgyZUd8VDaRJTfBoCvD26FTaAyMypJuN9mXGC33rrmssTDXonXj9LFxWDD7zicWLgYnDASmhTwUAvRcTbu",
  "key22": "CAzpEmEC8p9kWfp2vH7cN947TDTcMzj65wXpYbyge6WuygJjEHs3qEWEjhEd2XyDpXvzLRm9kv8hNWMdjt4CYiE",
  "key23": "2BFA875nwaFjssCnpvTkitHQvGKvK9VCytqEUvb3RKxvPLJHWEkY8j6LdE8ZXxex2wGqXw4VWQe5JwkeAucP1UHn",
  "key24": "36wvCfhGriZqPx8idrPwWUB9kfkfC8mduxmLCwDk4h3Nikj6eiSQen9nKD6g2v942geJ9Sy9RJkoxpZeAXjkzVAF",
  "key25": "3i4DQxsU14BHq7mW4XRVHQXNaBXWJjU5SYaNUXDHUU8UPxDc2QGYNhowXZHiy2TPuid9BATAa89uCWpkHe1YyG3s"
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
