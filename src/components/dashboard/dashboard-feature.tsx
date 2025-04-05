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
    "5tMd46cMRURXfLJddaAgEPXemshCEt1F1Z2iTL5FYoFBExWvim7Fetx6Amb4CsryxwP7udf8yEtzo1ehYNkUtfSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wLEH3ux7iCvDGH8KzYYTx5gZoTs6HeDcNRDFUkrF9Ej88xbErBe8ALqSsfqfbGyhRGc2ZokvJpswttsoqHDwPCo",
  "key1": "25T7i1Nt3tGu9KzdNvufWsHr1jaqxkXND3ro5a1JXrco7jA6AfFdQVjCxZfvXxNjGvM5NxAdjH6h9aY7gUWyYAxR",
  "key2": "5kxvmpQPyGH6baA6oG83MBooPU5aBivZsLc99FUzy6seS24jrh5uHRTTdgLr5iwjMHRpDLAhC1ZrAYB8WxzAd7QS",
  "key3": "2AxAC4kogb6tMpWrW9MEKicb2ktHuCW2KbwN2aqoybVoJMRR6jj3zxAKhPvHDQCo4xdU8P4jL1UB5zoca1BPD7Ky",
  "key4": "63dPk2NxovGHXCgkSAtBWPzzoXQozGsc8MPozudDd544rFBveFBaBVmytPvieqQAkLp1rwMFixoSXE8niDQEtzyd",
  "key5": "487SQAyiJT9Un42B9zyW38ht76cf2iyAxPZLKeLMu9XT73K1CAPst4GfWnC89ktowgNaexWwYh87SHvFB3kcHVVq",
  "key6": "5iaa9MNbzxtEWmnuFZgo6dE9Qna2vKzfKP1hQ2ADvoKCDsPxFb6Mg9gFMWiLwJhHgdsFPV2aBbR7Psr3rpNyw4qD",
  "key7": "4U9DuZk59Kf5bjECMr5fJ9cPTL9495DeHKcZQ6Unj5Hpji6pkuxHv9cMMFSKsSy8rY1nk33tUUrni9epnS9WVD4",
  "key8": "3EypPaBz17SVtNAfFUoR83idyTrTAeyQkkkQarxaSa1MEkczemxGKDMHCF7zSHFqmj8RVM1jC3o9Sj63TMgigTig",
  "key9": "3NCcKHjUxbbMVBMrTGE3dvq2jAHzY3oJfaNDvfBu5gbH12ga81dizTGQfqVR8HkPDU7Ee8x5PeHrmjR9cWxwCvek",
  "key10": "5y95b53tKzv2XiKXWSJ35s5Qo8hThBtYkq4UtjcAt3r1jLKJqYy9mxEbXVpQaAtP37desEvCCmVFWfJFVAGdA1A8",
  "key11": "2PX3J3DsuHZ1wuLfW3H6eirZoR7HamvHc7nLjKx3qerAsJFiEyVijJRFBEbFx3TpSXt9GLMhp1LkFC4JMBVpbqfa",
  "key12": "3FwfJoJQHgrsihzwtEe84bCB2kmFLBhhpMpYvPGi1wUUwN6nYbmBsU8nRvWH7G5rTEPGBQZegFQ1MokvdQbu93s3",
  "key13": "tvf11MFKvxFUVnhzBMeDHds7VkWthbLEqCiunK9ddzvaDcqeyssfZ5FPSfjHEq9WysCCN6LMME6sKjcruskGqP5",
  "key14": "2VFNhc4oeh2p2YarnCZHn43CQEsRK7ptLdoYWSg6WYWAMZFteF2bNSDpD9zKdWveWypcaGptavxh9Sn9kwXp6ZS5",
  "key15": "xwUv8bDcK3n2Yr7aP6pBt1iAcqfTSBfyojuAXAjBgithWZW2g4xw4rSr4SgGwYRE6DJW6ioSrRENoNkMfiqZT1E",
  "key16": "chFA6LoiRHT2j1mMGqJW8ZoQdrvvNYYr1xaK2qdm68Sju4qf7gfxvi4pXwUzkrfprRqxterzDytcHSVm8fvw11Z",
  "key17": "3x2o4xhrq6rgZY2knPtMVxAoWKtMxhi4QLSzeWA9axfpCryGW5qJ8Yza6AZN5yUhkJxHuCvek9gAF38muMdTyRe1",
  "key18": "28iuqNTexVKSsUX1HdMAPKCeJeW3X7t7WzZgT9rnpGp7Gwwk1CiCUph28jDNgumZ5mWDUSiEknpxhmCoXsvSUDbP",
  "key19": "3X1JzUjty6tGPT6gzoSQgzeNHCapWQ2yXYQu2HamLXbuhMp3H8VdErE95os9C5Whc3akvfNxVHQo9gJqdFkJTCFc",
  "key20": "5qwbDYQcbgvEJTMrWYwwgX92sYrqS7CbHzMosiER9kiGtf3LMk2fbNVo4x4DMPUcFy8HF3eXQQ51AhEDuY35eGNE",
  "key21": "21E4a7X3afzeD24Xr9HpD3n5h5Dt8MZ5kKSVvKGNnyqDPW3878LjSigYixvB4SFfYFvUHUA2QMWurnCdiWoquzCy",
  "key22": "56aiMYahpqA2yv3awBfB83aiC14xGHHzAFNFzhdSFW3WAaLnUwZt9vsS1qzTVRm2xox5yBxerTA4mjMEcYCtvRPf",
  "key23": "3iVagJNnAAktX4fEExKqDMB5ZQSFF8dhnLED7U29g1BBqn6fZY51GDixrbAkZxnXLxZqey76hYUvhRszfdGhw1Ec",
  "key24": "aqptixbkM2ajzJZpjoi2TyPMEUnLrvtpGJGGBKmxVWMkrPrwHC6Ea4RPii6Mj8HKCVeKLqF17QZK8efLPrtYRMj"
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
