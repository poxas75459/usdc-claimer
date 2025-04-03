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
    "AXETnZtydMrf1Kd8gh9VyDG8sGd1a9cA9whGbKtLRtuY8Z7gjVnGY7mPL1NV6thfaBd876o4YNNTxLdsXFQhC76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294sb4E5bsVAAgBVUE7sqKduAFtSKFxxo7z3CXYcyNYGuBeo4TqgJXH7jStPCKBtsjWAoNbr4waHvCCmc6isJ7xX",
  "key1": "3df64KgHyGaaztKWdc2xG7pmYxu2f2UocSQyp8Gn5sAsAkqnqryfYsTnFc5MbXsgbdNDeucg2J6vGch5TA4eHt2S",
  "key2": "2TxgYNgb18ax54aBKXzgf94zMLn9SVj2A9gvXUfcbjf8i96r76xMCcwEoaMQBGU7CwEiwTbvqVvfqUyJNk4cq8wJ",
  "key3": "4i5SVi7613Gc2Jek82nxTeGSYTR3DBbJwz9hnZY96hDD3b68EgUg6rYKr7WqXC4mK5MB4AjFBqz5CRV8Ny13J6Mn",
  "key4": "5xDY2FwkgfgqKDoqiNu9thJmHX8omYyH6Nsga8ZGg6kif6eSaEpWWVAryAJn1La3ZxSFkXy8We1z5aMvgcnFQZEo",
  "key5": "2xheFxaesxH1uBUMFzLU6J6fdijx9LANL54drApq1raVdBAt2hwAZ45rvDnezXTYBeK6xyXvFf1i22ckUUgAGVVr",
  "key6": "4rHh6ykTCPy4ZaV9C6uZfnVv8n694kpp8F7Md2wUpQsSyYvbr1Dd3UG55UmSamjjdGFb6YxqaooX4bjqoZ6w4QWW",
  "key7": "55VZ11ng6aTXGyT29ehgDAfzijzq79iNwqG3nMuTnhMkZgQXyWMyGGgDMPzfMePYoD96d3Dv7hqF6HCZg5TZ75sN",
  "key8": "Z2VCrSAwx6WtL6D6XkiKZoWbGE84Cv64Yb1GTRBxop7fguBkDezvoPP879k21c86SeAdP5toSePtriyv1whxhmt",
  "key9": "2wHdCUM926VmGjXJjhRpxHcMksJ7zZ1QSJTWji2tXSf6aADA73Rh7MJSjbi9PtQEeM1RHvQC8nSNuzrj7LCVNJcv",
  "key10": "VkiXN6cPBJZuQiqfSQaJPTqvFez3PDZAtKY2uKSPbTTuHevexbMJJFaek9ZahGPpokqMXqhtwHo4Jc6mReNmSya",
  "key11": "34XRTMzHYQxF3bYj2EpdWF6RP4xKG2fRxNThwu4TgxysHpEkmnTo8AKTa7v86zCQRGsP8UtVb3zjzkc5yjctd11a",
  "key12": "3xzTFy2mXTrjNRVPRA7XhML5SKWURyjRXJDRo5WfkuQb3HMbxVL3W2YMAB7xo7NDZmqXmRb54QWxLjxanihA4L2N",
  "key13": "3U2sVp1NHTZw2p8RVEoY6Qw3gcZAcvus5mtYsbcSAZwAB5uRd7ydXVvqb7Sv4SFsT9zTdYYj54ehMvcN7ujB6ocx",
  "key14": "FFdXUoZCnMuJR8XKS4oVRWJXhF8wYoxmG8ZwLm5XXZi3R1GEvmV1aGt8CSGUvyRymcML1fNQg1ELPiz4JySbBXL",
  "key15": "5L9UE8J1SCfeaDrMgvZbSbzBsYsgK689RCz9QGhBU3bNztSvyYoe3kEbV6AvXqofz7C6GDgM42vG4a6R1GZGzkRp",
  "key16": "5GN8bg3tiHf5pYoVmQDBzThtcYYJPWo5QqPvP6r8K6JpGzN7k9aVy1GJ49hSqqRp7j7m4uHEeXMveiEP7JErHopG",
  "key17": "3ZjZoSm9stRzrJQp3pajtUcabDMaCeJwc9zhKXHaoYAekorwk2LoNBoJZhA7pEu2bn9TthUi6uKHufwhhWHLJprC",
  "key18": "5v4UkbLhtWgrKeRP1Z4LwzogksfEp5oyM7DvBuGkqtV39Qkqk2PRJERgu313ebkghN8HsR9rwJXQqsUkzRRLWQ3N",
  "key19": "3VJwj62bE1PzNfxUbWE7E43izkpAqNKA2qCaT4h5WaHc86qjJYXrbRuvxcPAvBLs9zQdNTh6h6f5xKFocgeaMtXF",
  "key20": "2gvB2VX61nvbHTb79zxQ7s1ATCxZ3d1MbiK8S8vxFjmgmp752NTsiCb7J7oZxs12DWyBoMYt6rx2NhcxVWvpKHeZ",
  "key21": "36tawuwfhDdjj4Hug2n61dnRPhK9uqfbtLZYDaKbPApzm6gmQpASkeu1ZSPr6bn9SanShUCqHiXPmGgtVUt8zmGQ",
  "key22": "5WbTiJ1NQGuFxTb98Qf5pWG9jss6uAGXVzntYCvTRygw7C85Xskoprjj4VJJDFf2BJnNPexo26DzU55o24ksW1mr",
  "key23": "5NpcQN9t53JGCspdE5Tf4T7XhacLaJvS8MAFBZ9ths3Aiiw9mPj28pFwh8WWrNcgEhQEDRShYn3tyPEqpLVZtgeC",
  "key24": "63aBfQCXAdN9Zjugiy2m5XmqWpDjWUECHiSUotrnHXgwWLidWvQoWzy9Fhc4uHbxEVEy8szif3Meqb3bY2SHPPWx",
  "key25": "27WUZHbYWBedePe8PjaaUN7jyL84hAw5eGAhRHAG2N3A1FBf8kADySsZotysaTuwEjePV1JYrMwdLpi6gzjC68rG",
  "key26": "2hbJ5PT6VsFdZzhXVkzPET6GqhMKs4K86NGCQX6Fygi6aZDL1LH5nk27c3kWjow5cYiG37C8cJR1Rq9RePR7H3eS"
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
