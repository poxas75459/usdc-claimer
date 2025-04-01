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
    "57gMR1mQPmVpcx8wUEZ8zYuEVZbWJKwmtqHx9mm9fWTQDoPqF5QM2zp3pWVqMouDtPTd84PBoWJ2TgFfwnnRMeEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R9GstLabi46ykpWVxP7HjgAQW9neh7PzL8e1PSadKvpmQxc6h1hujcxVgv3pgiA2mgQuZmRYG8u8N6oc8znxagr",
  "key1": "5mrMDNDhwHEN2EMLkpSEby9Vs1LbcEwaAtKSViC53HbFrPyudAnTAMXMZ28UBSFa3ivdPh8gBBtQk4HhzX7qmQe8",
  "key2": "2Duq2ik9XnTdaozSw8rNaesT97gTTKs5e26L6CSF3Ve1d2SZp11P3X8RjdQjPaH59R71wQEv9g3msv56ABzu3Nsf",
  "key3": "3Y4aKDAC82NhVwxRBa3TdHf9iTyJaMbhtp3VsB7ySPFyEz39QkkoHHBHuQbmHcGdHwTQQgT4gGLFsU6iqpwbi9Tb",
  "key4": "Er24gaXjnMHSzq7ysb71cps53286eTNR45As9tiSpwiLGzX63HD6YfXeLBXac2AH6TXVukMoFZ9hsVujtNinUjm",
  "key5": "aq1tQRN1HEgQodki6z3UTMyhn3JkqfAjuqCV674K1yAfLbgqEF9ikycZ1MeBgKyyHi2sBLeiDczs6xgcc7bc7wS",
  "key6": "3LoqKuxfFNh4QrkrGfs8TTYLnJypk39K88pJoQpcQpK65Kh6XXxJtVw9UwsH85MLiLZi2oKpFiE7jQewyqhdVmMz",
  "key7": "4p2o5Cjt8x38n3eVFTZ6qk74PnYeZ93Q8Z1bUdRfH2GsjHvUsuSFwM44wVNmcts4KjeqmK5JBGVJCVSH9TK12QtD",
  "key8": "3dCtGuzAA95KJNWGmmsnT2Y8jQNDKa8Wmuxh2ZjTEEbDpMH37N7F554zxvjLSRppmgZHcq2bwYQQ7hEe1ZEJ1c6u",
  "key9": "CyBFjKnHJvBTCgJQvEV5ZhHSEigCp8RQBSuBWCYaP9EqQKdqfCb4YJDTqmfXZzpY95f6brm3DJroeAqZXMTkhdg",
  "key10": "2qkjn3fmi7Jm3pgMwoTDMrhyH1DZ6TxFAxtiEQ4SVe9jJkZTkTToo1vURFo1bVFmYEBQdqMGvqEh246PAuux7bUP",
  "key11": "5LH9wqME4FPW4irzwC8Spd1LrXmxzycpdBMieNDxSqf4wkhdkLt9hc2wKP2biuJWN4MBRFdHfuWWCTrxt7aU6Pnr",
  "key12": "4yvLMeyQcvDdjKdzBseZndJeaFGJ64bKBHdNMyvrbnjYWn92e6Lhngf8K8izV5272Czw8BzqfSQnDrtVnXARpR3L",
  "key13": "egkicQA43UEtS4iHtzQEL4EiLQanUKL37B5U69Xyifeh96aosBAxJqg2fdRWVLfh68RxCS3zpW8UcX3QvWWeocx",
  "key14": "4wsmjc94iYcCT9pima3VfcPsPAtspV4dQ4JsiSR7jYzE3FGh9JutqyTNxxikLLdCdj7BvzsrXfUtXHshh6s9c3HF",
  "key15": "4k8FiZ4kwcjq76hzG8YAzKmbfwUW8wzgpwwysB7r9Wx5zhwRWkZyqag7Hie6Zy3kjmf8HpPhTPvhs6E4SK89zcdQ",
  "key16": "31VFN5PpTqPS3Uc8jL3Zxnc3iM2VcCUUsJyJuVhRMzp16RWdzSCaoQfE8SC6DzHGocbJ52bUHc5hM5hpDJ51WcUb",
  "key17": "5b5vutEYPiqkTazSHsoT8zaMi7ixpa5CiZbR1rGdPxZ8KMtrLt4uFTVdgzyGEyVemD79w3Wxhd8fwDv9nLk4ae6e",
  "key18": "oj4X487tp4FSAVSg5HBW5zXfbJqcsCGJqPEEcMeSoYrNZg3D7vAZi8a2grbzTJf7DKoaF6rTE19k7yLtkS6Fsmg",
  "key19": "25bdPfeSJWvtSdi8GRFRui5BXB1H8SE6MHsFsuoVEYzxYrCqCGYdVWC4Vwn7UwBZXCSQy9kbCMqG6cazrNd7fxNf",
  "key20": "2VnhTJFTA4zTrezZCLJFDnV2cnDMsXHt3Ba3NwLGS7hG6HmTyQaRfp52SweSTv6eJLPyYqAvhDZWhvX9fdKHk43S",
  "key21": "2JLvhc3TrwbvK1yT8ZACyFrPFJyhVphL4cUh4uHN5CxiXXsdLugQGPPq8ATWXTwSfx1R9pLeAVrKpVJidAcxBW7k",
  "key22": "4ggy2QJc7pDcC8N5J1r1fYnxNoQ4ui36vk2rK6Fbe75F3e6fo7XUzhAZ2aCC38mAHU34YhyETpp9cVjXthuv1QMs",
  "key23": "39UKsXsWythMqgWk8thBEPXpWi584TK6FNe1reqqPpKi1vMr4sUTgg8hwW8wW4bb9jKRoAGCjPZiRrByMqyK1Jig",
  "key24": "2JZmMPYHksYAvHURvbddBHZqn9gNUpLHYa3R11ZWjP8JWLD3WaptVzgDoWGzkyiwDNi46et3RbdsVx8jqCtWqb9p",
  "key25": "5xHFBELb8tEUvM5inZFFZVxAdjxSTBfzLXfk2631ot1pAALkUwQoNts33p8VHpF4UAwmZJiavQLyMAvnMn22C8M1"
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
