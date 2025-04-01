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
    "PrhwJ3EQvV5ZCV1r8gPP95ghB4yTaCCC5pNz4wtMFeKFF3d9cJRTJtRnzAKX9vbdnanPcpDwbPUS6gaXvh2u5fU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQ9kHypFAbibs3aUMgbcfLxPxqEYCR8nsM7Y4Bm54pQNoC8fAL417vPH4jqQTsMcTEHaRXXz1jpbW9ycTqsaGAN",
  "key1": "42C7Di9joWNML4rUWQfUtJ6bpVmP4ep8sfU5FL4PNR5FpbtyLZi8n4hbic6CEJsnAPiR4yAuBPWKf9q1bJVW8zUN",
  "key2": "mLSmHEJaCP6nieUWWwjnrWUtgKoiDmPBYGwqHu61NF4BffJBN8Sm8GX3wDPAK8PtjwWVcMrf8ShJhUmWQdeHvtJ",
  "key3": "4ynNRQyt9NReGnjfRUNTfbWBZFSKVe5y7dnSv5jko4BsXQL8WDKDYSMgriGZEVx74T3zm2WbiUbtUrn7YLj7WTqk",
  "key4": "2eMVuDjn2Pe9aqMyN9g8UD14gGTikxK7DnFGG6nMKUXb9VjHaTVPwA2bC5W1Attb4HxiaBgnkRzQukVD6LMGWgYs",
  "key5": "5BCyjAMVA55TLujgZZ9LtkRs8MPu4pwbFSYqaM4CXDtNJBDnAefJnTBsTwZJNU5KYk4W4QcNArQBqpZjSHnBciVV",
  "key6": "4Dgw9G8rrKiiapJEWWEdT34qPmY8tPHDFqDzDa8d4CZa17y41Q5F5k7hDVwzdY6BRYhtmrny3eS5TUDKqyQjCqDE",
  "key7": "4wy3iQYSLmFawk14yTGNZtbaudKzSfLS1TWv43rPPJYZ8Kr7W7xJ1ReHQLv3X8P3shPXzV9x7ygmm66TRA1iq82T",
  "key8": "3cFjphDse4Q7aZeUFAL2UL3cxoeyeeo4hEmnAoBnNLNtPrXcnc44TiU86iFZjPs8uJGCGUZjrdF436kkUPkMGxdK",
  "key9": "64DVs1LwkBXJL4RYzpsAszS7PvYsUoFMc2fJ1MVwXDbNb4LF6KWGjHFtuqh34UZ16KGmvp69BMB7E9QpjCqemX8c",
  "key10": "5X8k63KDSHaBnHskhYavax1NsDDuS3ZgK6WNJvD6EfNX989HafLJrgozcHg12q7UaM1NNPoVqU8y5PWevLQuPxsK",
  "key11": "5PNMyVxDQVVLrH4EaM8qh1Ft7y1ZBNxvvyUhKy4S4T4jUvD79KQJa7nSwfzyU1wNYQ4qYznMfiREE2hkXXUR8uYk",
  "key12": "3jaohJyKteeR9nnb2Fj4GavSxrYoTeAfCvpowzWGaJgLQqdmtHzXRFrEQtaEwRiiEiCBwkQxSXNAHZ4BXypwNTDV",
  "key13": "5J4twakZVpTSMiA2TMJBKUadLuoqaXVKmmMUyA5DYjd3iR7w5WD1XprhBEv8rpYcqYk1bm277LPcEhdtvUdY2VYL",
  "key14": "5VLzt4GRyNNj7KQzvkmos3k5VbhrvmYaUZyK1Ua8BAsAtjcXLh9q9QBsari9w5MayeKbQsG1kXKvneATkxTanKBK",
  "key15": "4Knz8RBefmBejT5TK5fkaRhyqMxKS4NGoTt7PdE22Fcd3wZxmAbFW3vfEVas6RB1B7hyb9ZMYvGbNVT2YoDFEZus",
  "key16": "BSsy7Q8T7k197aboSnM9jTMGFD567zsHXLGc1UXqgiDC7VJQv2um7VCpEGBX7z5akN4RUj3Kprpyd9BieinqgpB",
  "key17": "27sbnfvc1pzoae55xvZQKJwcaH36bD33YApc9PCbsPDQB6V36zedyVcSvj4YcBx8rbbfrF8CSBJPe3jSnQY925Ma",
  "key18": "47yKQo3qPLAjkTvEwxUpGS86Jm7wx6tXxcXE5z5aBhKj4CSypZyQ6KVzVT8di5cq1KscQAAfzpUPRHJPextvsgTL",
  "key19": "Uqszr7yHic2SRKY29MyoigBiQizzEENLkJCgtgv36e8a9nJdDAHZkd5jbA7jw29Bd3mVu7oBuvnqCQTzaR4V5XH",
  "key20": "58rpP6fbHCUfMtdfFBDvzNRwYhkGwnLK6jQtE2nJ9DuwATj53ViSyjm6b5zbgcMMqLtFVdHJzDseBbCVnQN1dpVT",
  "key21": "2NtdiXDPynV54fKwTEb9bnBmp9G8KxgBZvTdhBDRpJNYD5GAJH2VmUtzhPkJwiEN83HJ7Sh4KrkqMqa8gARuU3Sk",
  "key22": "5ofazzuSfseaykQUhJ6YCqX7F1T2pRVNZbpoLoVxg6wgHjsXsNVC6ATHLBAeVDRJztBA9dMt5XQskR2uMr9XradG",
  "key23": "MqBgdzKupwPYHjPESPP6AV1TozrAJN3RZL45D81pavo66UFYSRymZyDizDjTmtUFBqnzRqSBh7nDCBv9QCEci1S",
  "key24": "4ZNJcykix8pEYroCjv2ZvyDwUGMBjrMZg6W4xdW38Eo4oypc5BQEB1FW1AUSMwKqFBa8SdMGfJNHndgJ121pYsDv",
  "key25": "4oUVLkgdLi7VoU5ktN7DCBmE8VmVWEqWuCeGBvZN6QGK9WJsUXr3igHKof1xf3EzvjvtKrBCJRjpi4nTMxe6VgDA",
  "key26": "5MCghNevVHckGaRqqWEbrpwB1qGJLEx9AsGKuBAVpEtZQg2A3yjXCjSg9Ykcg4PoY4Ng5QuK7BpG1vRk1Jc7Wg1i",
  "key27": "35LpMjXPQXPy27ug7SpMp8hw2G8afm5Pupw1JwVJHUjLLHrQLb4KiHxeQ9jQqjgKfsy8wfYiSZ2KancaHjK8k9Nj",
  "key28": "539H9R7m8tNCLSCPHMc7YNQbFMVrm2ML2tBdU7oRWGPoVS29jwFRjbkEbGsa3L42gYgLt9zcPUetnWrtp3pMDuDP"
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
