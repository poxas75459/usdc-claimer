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
    "4rppJtXuayE9TtGbo94Tngnufzx67jv3kd9ihq6mCYirYdNPD84s5GSzUpS8KpRe82X8L2pJXsvnbw4y9ATXk5hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26mDgme1SBiG5cPrjzgdtoeZaiUYwdhukdx7mcjoz98nzwwhw3HkhEAfLDmrCtziX9EQ1YKCoE25P2cEk9xHZdRc",
  "key1": "5DbWsHcx2d7uwHntUc5K4ZvpYxb9TF312VvtTN7bKqMnEQKuGyuCoZjrwPmmjAWPQacvphrjhSzRTQUdjastSP5o",
  "key2": "4YMxJVmLtKhvSQc4m8gCWTBH2dL8xMiZyp5oCc5Z2ucYX6e94W6oZ7WsugywSXZ6QrKnXQKdU527VCA9myiZ2536",
  "key3": "4LNVGTseSpiisrXtr3GPVTofMFhezWyg9kJXuzCQ8wE3AAAhNDDi1Mc4HxcjHqNxKWmgQBZAPEutMBmvuXMvN1fT",
  "key4": "2tktaWqS9LStuzA8d8CdUkkYWhSDSN6nbxSs54Tn846M1zuWDoKEravHhsydHwAydFL6wLLiD4TydTvQGfeXg8wf",
  "key5": "3smAuKdveXkjjjKkAK8f2UWLxiySmEgzLXZuXCuaY6wK1fnpdbw3cE9FsErrZsNUWi8oMDhBDQMthAK5qiRPwERz",
  "key6": "3hon49YgSD2UHBUvMi4Mw3HXYj16Wtom5w3yHCV3gbPVEBW9hyKXsCcTWmcvGVhgZe5G9GHQNimtqrioVwbbTrku",
  "key7": "356EzD8JLNftwjKGVVjAB7km9boNFfyJeZerLxkH5aX15xxnefhhkgpkKVp9HXtcsyQv2AUAi9GhvsHHXRb7iUtp",
  "key8": "43mna5uURJ3g2VxQq6haFEG5jPotWMA5c9BpUWRXz41KnTgU16vvkjYes9V4aRiRDUpS6G6Rix2dLYZupkddnrXP",
  "key9": "628YFfruhdKjZcHMbB7dfvJubjV8Kg28Q1Riihtd89JGazHULbuUuQxngGbzXtxMLgvs5s2LyHwRHFg1v1E8Regz",
  "key10": "4Vw9QRFkZhHcgT5gHPcygJaoKNiDbVR1pjarj4UeoGNJpRjUNwmLvYD7PRmAu9QswskpxGNKfdSSG8AsLhbf2CDc",
  "key11": "4GK9rxUfzcTwzAZSHqp5mngBsKFtYyyRjkAZZvFwVEU7H4hjnW8UNFnWGQW3oWs1Az2aUk39VXDpfPSkXro7pTSY",
  "key12": "3e6KmMrXNZPW55aF7EbZftn3KvmV97XTPuJMfUQLFVmi6tPxDtVmbijetB6uxfiEbeVh7vfCN7j1Pkez3pCLEnCb",
  "key13": "5EeQAdc8gwie81GQLJmTtxVXt7LFJo6iUNDELwmfJqqnzTdqNcfwrsnB631GmTjJ2QgnUiFh5iPCaVYUiphzgh5d",
  "key14": "5B52qddc1BEs5x8owNHx5KZTnAJhV7JSVLCytDg1AaTnUxJhBG52eiSNLr4WSrzyE4R4m3eP5vDdK6yLtRCsQEKk",
  "key15": "5aUUg3LQSU6CS7cEtmFN1F1h71ZeKYq3orkkDkDiDVYQ3M7W1z57JsKF4mwh5PvfXc1DpfVtAu2yGuAPzjSajmYD",
  "key16": "9ZkWzMQhaRzx9XUH8uwYimvv98EoWZnijdsnoM1nbyBGD6uJurmKwiV3WPV58GUGFMremFzAsyoft7eKrn3STtr",
  "key17": "5pXFmuJfa8SnSQpEBWhuhfqCbvZMrGTKAk4jE4VwvE6ZQHCDGLV2HLkUa279TwFGFcFYtArseCsqhfggbdUoAZcY",
  "key18": "5r3iJ3pGD2nop75cGSijzQ9vLfz7vLFFcgeEgQzaPW2LKbgJtKyUixC1AMondpncFs1iFZ3W5Am7uSSd8zdx69Q2",
  "key19": "4eLcXYHdUnb3upWeR3SbchUBGsPRNVUvrNnj8EB7w2MEg6CA7jESxgevj1ZMmVahv2Xdcbez2r6b3wG1WZa9z9Po",
  "key20": "3kWqcRtkiafz3hL5DSLuiurPThi6GQXA93Dk1Z3WZpaq6DBEXY6ZMBkWtBXXRcytSgBguzQiWDPdYYu7G4ZSVQrC",
  "key21": "AJCFLTLFXBmrqvRphxTT6r4CiJFqbebNuqBoiCRBRWEu5xTZsHbhpW14yMte4q4x4evq6VdEArM4KjbDqhkdZDX",
  "key22": "4jXdPx7duKG2qoYP55PabbR2G5j9cmYsxd5dgRy5iUei5dTeoqYfEjaJS1XtELbPKSpZcYDwzbV3HKW2kdhpJHv3",
  "key23": "4XTpcpnGywC7XQgXNYC1SDPMZcLQH5Y7jCVLJJ8iGmu7x1npHkxxR1f7uGT73gLF3mTPkqa4d6i8dZAGNpQETjxV",
  "key24": "2S1tBYf3rnc1zs4LDYJabD9au9TxRqA61W84ASLi869tedLbmMnEi1bvosJBa4fn7Dy6GM1L7MjP6WPoS7mYpcMw",
  "key25": "2QkS2q2qNE93kXxqYHnnZ1T7mfbwkghKKDD5mvKTVYB4Pr7UrkcewBfxuLvKU7gvy1Y5NJevtdb8twmX6VJshtfi"
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
