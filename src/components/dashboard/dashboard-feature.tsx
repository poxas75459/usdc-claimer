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
    "4HM43k3hgWBteNFZ5DAebQxb59D1io8rUnucAQRH8PVWJDYApiLGuGVUTwq5XYiZtGT1gqUXQEq5Jf6eXkMrmozL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YUdyHVD3uTRT7ZLgn4uyHK11hdDgbb6JY8FoZ9GimXC7qFAsiL6WZSfJ1f8rUunzMHjuxGH5eqv7v3Yri26jwki",
  "key1": "5GMUgquvJNKnmh1b5gvS2nnDu7VY1SyAtofJ3S4aVXEYpiC6ohKiHH4SVhGedgeUaPWFPwFVQkcktJLDeQ3D2EB7",
  "key2": "2aU9JJ1RwZrf8PYUR6dKBhcwMr8uyAAMidJtV2AAB5DHtZWQtfe6Ygqo38rnAxeR3h4hXp5nJXzwiHKKv3hxgjaD",
  "key3": "2J7eA8rpjyNisNhm32SGkddUFHmfcmHxMEjY3mqCw6G5RdMz2L59tk3ZAkGo1h3qu6B2xKn3zcBJbcExhQjknMiU",
  "key4": "DcZYQpbr54PKnQoYewxBPtbYyCpzc4kaHzkv2XYXEGuGBJ3EkLmnjsF8bVR9oTrCgSCsbLJw2GaPE2u241GoXFJ",
  "key5": "42UioUJt9ziNoraomVaCUDPJeQzzEsThsgrpnPYnnBLc7fc8nKGTSGrxBgNUH68xqHPvaQLzUM6HHx1z7ywhaabh",
  "key6": "2BQ3ERfhYQFcxVDdCM1bq8x8e9tRwWEzTribDJEezhf1YTycRPwP2oaqQK18NYibDR5ZEmZ1puUTHabnt38LFdyK",
  "key7": "5is29u28tEr8z8R6rjzvcE1bXPwnAUFWNLHmRkerCfyhoijk4K4WUfEoVSYJsR4od6iSmEQ7dQkd6q8aBY2tcVfA",
  "key8": "h5XiCRi6WXrZF9j9u249DuQtgfT15mmK2ku3b7F88wtND52ffdBStzuf4hMDvryzPSzSKqbofocKEvPKWF7dQxh",
  "key9": "D5z85fhWvdj3RrJ2h7bt6XcsurK4tnd8JxxfShxB3LD9YVeBr22jZBcNrTB58jcczDh4u77Z5dBMnPjghrgMfZ3",
  "key10": "4Sugk4RNCumypSBwBsjQ58kTkwuxxxXDZ9sN6RnQvGezdpNo8uL4i85rWHxgoDfXADSeoLQ8feoEwMgJFgyzGsUH",
  "key11": "2bhZLm38uAGTLtKyHyGqNLEeLPDBUuZiGtYtpa7rymwL8KvU3qbvWeMHDk9iHHGZWFBmuHkKFNAYqPxxWjU82R5s",
  "key12": "4zAN3DRth5qoa1xcx55D4LoB4YrD8jezYe2Wevz36HYtGsfAN8EiKdEkUf4fWBnwkPRw4jGxScz5fneKPRmWfHUM",
  "key13": "vepwa7T2ihUcUkYMJM4UaxMzqnq7bnKEL1a9wv1g9vDjgKRC48GvRzBW7C9kWd4icMJ2UYz55htDGKXvvsHBgYP",
  "key14": "34skbY74rD7yYzhhv32ypcBvXi1vp63wn25UNBpp83oVNiHdHdLpsCrYT8jVVpEqn2AvnvhYUgdVVsc9XTk2icpa",
  "key15": "4oYrf3tFbi7n9m1Gbk4M3pifAMh7Qa5JhEQbH28rWeJ6oRbdRtwB6VBzZe7NGvhKZQFtgjV6qgE4TgoV7cNB2tTp",
  "key16": "4vHyRuGiiyL4iY9tnWfr41UPPjQdpQPSKMkdMUqep8ZcTNcanws3XCA5iiHmeYKZ51NDMqEcQzE8HC4AXq8KwQ2F",
  "key17": "5hNfJ98J5168P4TxiyWQE9nWGjcRQKwNkATN5JvM7EDJKbFbJNPYxwAWfDtKXMGozMTg9168yym9Ms77NJYgPjjw",
  "key18": "2TBK9rcGTsuWJcAjczNgEm2nnZ7qARkuyf5bd9FaF2mTh4CeKqZYpBxgqn8qfc9WxbycmaYzVfQ8Lf4jqPqGcZ2t",
  "key19": "4wZyo2NLEajCeoYin6BwrBkGjwo4BZcQqQ64ZK93LUtNBPNTsgU5CDgfqcUZPoor9i1zA4cGtFAyQAqYTa9VphLX",
  "key20": "Y3uaDJ6F81PSgrLWvc6QjrJQcZktaXRQ6D5G3rbPkzWhhtSSy7AAoQCHCxaxFFmPKtQdJRc64tp8bibRFfSZKZG",
  "key21": "5NFyfE85caG2hN2rDmA7wuyaRTYEeAYcQQxTMBb47rByniCEQCXFQWzHt77oUpHg7KDNc1MTj9nCMnKhDiPr5TLU",
  "key22": "2B6dz7YMhynWX4ygAXQUQu8P7SrYU5PmfW24fr2CQJjqLaMcMMPo5iE1F4714UBzwb8fBJFCkh2JtyaE1ga7aJz9",
  "key23": "3WfS79jeEATCzVcGzQdciuqwGXcUZXGnUDgYhHuyrjSjrcnDW6GrnJFgExeYJC7LtJDgVsgTFZfS9pJsuSEmPxXH",
  "key24": "jDTPAh971N6yhvGki92atnNycbKVKbc3QR2p2V73CRqFih5vB11t6Mo8HCpXYuGv7PyrECq69CBdDqGY9H48XqV",
  "key25": "5ZBQZWy3XV49X6zRLQPsdoKJb6HZN7rfKQu8gt1PdoNMwJQLKxSFyJ7KMhUpMEGywY9zMohrE1hitqj9wRZE4NET",
  "key26": "47K5fRHfkBmeZ7JgS8p72rEFXBo34ePkyCHTUb1kDCU9ducHbZtjPmPmfwHY8Lp2dGAxTkBRhqtNqywu3YLQDG9y",
  "key27": "3vFmaPaEHsw1D9Cn4QoY6SDZdTC9dNL6wT42tR4f9gDrH3DVh2CQaLHrxA4TaEuA1q7nB6yo6f34Ze6kjaFQWCmg",
  "key28": "2Xwom1j9aHWvGSEJ1Q2wJzLpNL1vjui2NfozAYsZpL6biFKGJU1LWifYfjKkamt2fd92RCLoEciFATF5W49RfXsR",
  "key29": "4rf5urTMhMh1z3t3UY1ASFSmHUBcCouPAcGCKNR2wSzzUvjjcbgn6Aynjs2X3fFmthyKrJi9RBpF4tznSoawaifg",
  "key30": "5QB7YTbZaewr2jYyZBDLKSpSx6saDAMrRQe42rLGJGJwoevhB4RTAQgVG9MDV2hsR73W3sEPXokedooQqtiNJPCC",
  "key31": "2KR37NSDJu5x1Bmc1YSEaNwznmLzfAXH2fa77YJMchoTq6Hw2FRdZYATXeeDKnaFGmARaXFsmiKgsoqpyMiU93v3",
  "key32": "54SY9PotsSLQor4aE5Lk5CjrYji6jKgK11tDtkpqfzBgQ8vcYRvih5LgBgTviU4RgdBXsU2rmfkvbJDSFm9muz2R",
  "key33": "28tarh5ho9N2ZvvqNq7Tf8r9JYeuVuVmDbc2YXBZxrte9yhtQtXxJ7k5PbQy5AYxYm6C65FihJdhhvcRf8jNVkhF",
  "key34": "3R8tic9hDCY87DEMzKhkgejPCGPkZ65G75KD974HFgRJE2zX7schZcqxCbqoMtm6zCyegqEcXzCm19SQ6eQgd9LB",
  "key35": "2zdVn8zHzu3PVQTDq2ur3kuoj1x3WsdVUTv4g2qYagYodUFaYzLKneuBsHvK4RLnJgU7KKsBTwVfADHCY7CS66oP",
  "key36": "2om3F51kFC1B1gJ3sqPbpwRVMKtjMuNKhVKtG73oZb3KhcyZDnio1zdnXT2sRyuJ5AVTevwCWogaYSdNGp4X9MnL",
  "key37": "3wMdyCo34ShJ5gh91GiDCmR1vzRez3FXmMgYRTAU1XuJND8nFi7H6ZqDJCLQczh5iFtESoj4mUM4WCFKqZSCWjy8",
  "key38": "5qttieWDvaWzrpNuYXpKbJp9h4fEipPqvVikXNio3eU7eXG1cgqZ1kNbrE3QeRouvaYynDjRF4a7aUzoxuCRPAVa",
  "key39": "36QibWdrofXKozMdV7wUzXHqYfTmjSMD9YC6ZfmdGFtkoFFaUC4XSHyX3g1KyUsVqHj7zfaX3q3aejjCnjRv137d",
  "key40": "3rDU9MHxLzid4LazP4AeDx5ysHZiyZEnrbHN8wzMV7Ns7FaVNE3DPiwSmV5yvKH3N36pkzo5WqQNxx6Fyca4MK4C"
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
