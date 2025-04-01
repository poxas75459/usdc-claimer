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
    "3EEnbBRYrsXEbGZBSr65xozW5wTPXrxNatNNrtSPc41ZiCVJvq77J2wesBdfp4e5byFSsqHHRTMwwV6bzYU1tiMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXyvx3pM6VZzQ8H4WdZRP2BwnjrmM2gxsEZ2uVU1hxLENuoR4eVV4yjj8z5thWp9PfFTLSDyo2zFyBNobJGSpQ9",
  "key1": "4c7gomompdNeP3kHWNHkqUF86xBhZynSyQFyXdDNyoXQKvyNB5JoYjApebUawGz1p21qKNkXzXZEqVN6F8ujnHzP",
  "key2": "4Jnox7zwQX3iMNpcHbuStzMTMeMHmi39T4B7zFB9hg4Nn9MAZBo3w2zYJASaKDQWubFEFpced4U7AXE6SYjBZPtD",
  "key3": "2m6GwVQa2qdDKsjXxbrUzs36FrYTB3CYpAEgDP8e3rwptAfRFtLWtibbwLW9kg6wWodTBNgETV3mpeko1CZdXben",
  "key4": "2e4XndeaQyEuXKuZYmhxP6djCKfuSBDEZSmCKf31nmoxupu2HdMC5c74Q9iscUJmE3DExtqiodTw69vhpdgGEkCd",
  "key5": "4undZUbvK1YSTP5KfkVzLqLzfgEGrCbn9KqCEdQXzKTd3TA1CKackVsjyJGmbpc3yqYKqNTcD7Z9jX6weypyvpDj",
  "key6": "qopQ5Mva7Rvy4meRmUqcUA64GAc8bZxjDgmGp5VLRQUQVgJwec5TWg7omDAvYkBScqZ2BxEYXtHcSBAAbaQTQ8n",
  "key7": "hjtZt8aN8dyPbLCwmsuxBDyHx1tPijGj7j7Kc75vZgKJwRvq8vnV5Sj1d6juQLhoy25pJpTtVDtakKB28jXd8WM",
  "key8": "5HFKyg8PTVLBUPM9aAspLhw67E6QL44gaA3VyStyznt2esntrjZvnM9P58epUyYn8gNV6xCPngq9RWNNsFKzyWWv",
  "key9": "ehabwZQrRBMs8eRMLesejpF2PpMSbzPA7cw42iyTkG7pWcm8CPntqaa1WExQRGKzZ6zpbFYAND9UJQRnsHPyXfs",
  "key10": "424QMqGtb9Lf99bnWDrczm8uyATsFn5UoRC1dGyCc2ETcMTsJms95tNVW1j4CCsLpdBwJPjp71TNAhFpbDUNdAna",
  "key11": "EgvJ1BuUjEWYQEmezpp2SadWB9ZftsqvJ5TTQi7hJe1CxvRzQzbBvPex9WGvqVAqErWkpnpzbNFfpBL97ReTE8J",
  "key12": "2nA2mBzbKusvzSY1bAbfv5AyzeqKcjqZUWHutvjV58GFyweHi8ntfqq9JdBL3KUdDB51hAbJNWu2FE9sgyn9j4KS",
  "key13": "4bCbFDBmZcGngtT2uAgk7xr1u5MaqhUJuTExbCevJR9dND17xTGz2kDEMHVikEzVreYP4xPGU4XGLkLpVzbyD8P3",
  "key14": "5deq1tZ9PZ1LujueTSFGxix56fkdnoRjphJv8CCrJ48npPc81EtJRV2Cvj9t1AT5Zcqi5eYwzPJYxBhzE8Dbpp56",
  "key15": "n9aWvWzQNj7oYq7EpCK1nfgv2iaTJSDXzhtzKJMQn5KKLkH6RvTx5J1aXr7pCdsnj8QfYMfhhKiomZg4EJHvsgV",
  "key16": "3eUXNBtJo1D67VDrioUddP3BsPnhez3GQtm5xaXWLW1ghh398mvmgh89AmPFMBNRb5Q8GQ7opRDf8cvJSQFwgHHQ",
  "key17": "39tQTW9uAbUstwrvLCBshBTsjEgeF59oVrUXc5TvJuFdELnd91mFAhAY82PEVvLJs3XL2mWxJHzp6jUpNpUxfbgH",
  "key18": "5ihHDafGw3pgkchi5TGrx9xRBxRMCaqXRuhv32X8YCa9g5pi3LFk4JqH35N8ghewDqyAg46fn4x6zaSYhEWqQVDj",
  "key19": "3qPnwirUEsdDqxNHyN4JczAPBCxZbVuDHPGhzL7KVxzFKsNfjQr2w9Qqqf5Rh2FwE1748VTNVSuPkq8ECymkEk9c",
  "key20": "2RJLVEDx6XrMMbK8DjVuJWC9C7psCd3jd5HmhSZTzmz6HsGsmR7DhLaPwPcLrj7TFbUNeGKsaY1mv8mxoT1p4YKT",
  "key21": "4wnhSJFhehUBfotdWzkddQkw65MVJb3cC4DRvpAq8vPNaMUQaX1zQhzUJypAk4SVtRPYpGoDnDT367t8wiGM645R",
  "key22": "DUkyLowMBVPqmMpqov57JwY7uvRFA4orGgAX8rLBdGUZzG6z2s4MP8gVnrTm617kmRmtXSGZCHyHL2Jj8BrEWyv",
  "key23": "3jVbmagSD6UpRjYaRUuejBtjp4vB5gjgFj7pTNz8tiKPFkg2Vj6fGDj7vAQVvGXNjB6vEtb76ZtKN6PFAg1eCR9Z",
  "key24": "jV2sQXk6cjxSqfRsY1wVc6CJTyWyPH2nMqJASJtTQoLNgXcy7kHNS1wYThLm918GGHNyngtjuKnqMxoJnS3GHdz"
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
