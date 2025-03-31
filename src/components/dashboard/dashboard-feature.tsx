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
    "52qqP4CBbH9t65cTLi8uhFHfHXJRtWyLjnAefjiLcbsKvnvzybRwW9g65PP4519vEjg1PMsH5ugCmY23Fo8CBJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ty6sEf35h8XWfB4JGsyPRpkk4MFEVX3BsKa8ToTjnxn3hFvmMpXocXgi8pdZrYUSPywwb1hpQRtKaZamh1K8cE",
  "key1": "9BbQg6Byq5Q26tdsgCDuoW3Pxz7PJqLSy19wB6HdvLyQhACevj9zSexJnfspvEB15SMmj9qK1AvxB754bf27P3K",
  "key2": "5esHJReHTYhqQnYvoKsztKL38b4xQs1ojevqw7QLF744K6qkQZmTgLX1G3rttAM3VfAJ4zpbTUAbYkkQDZuwpLwe",
  "key3": "5wGfNeGEjzciTYydBKFucUpBsWbYExtqR13C6uYurUToykZc57kYuTP8QXo1ytagzN4yDoYrZiM5qYTHu2YtGz2H",
  "key4": "5PXvVAvS1VtXdg1uLKjEYacF2ga7NV19NTEZGzwNJnWSHnZ5rnkQhjdEvHtGNWyGj7mTbDuDCGP9waow8tBf7PP9",
  "key5": "3V1AC8rqbkMY2RqPCjA6UNxQeSoj4HKmeSqGvysc3emNqkG8Ht9qP8rPrkupXwxK9rJQEWxxy5zkk9pyaGn5QB7H",
  "key6": "5cC78RUKEdVyEevegC2xBUNyZx3b9oNiyv347nHicJxCfhn6K4swoWNvNTsXNnPBYSqrRCDtHH7ZrVBvT2ERJkXC",
  "key7": "2nf5ncox1ZmfwT5ZYpMXuGXjpttfXiJnUoe4zuH5Wa3NeioQACoSvHSxrmfkrH5U2P6VKUpx3sy57Q1bVNoHBH4Z",
  "key8": "4ycmHPG6nozkZUFLKvW2V2xLTUJx8cURPA5orjmYnsMJoRvVtmB66dXqJi6jzdwvEGexUgEpVmtViyKFEnRKBoAp",
  "key9": "8TUhUyipt2GVyYWrzZn22q7rRMwpcmxtKTDoTMEbFzw6JURmh9c5yjyeFHEZpomcGnyqMizFKeJCBb5dM4rCJUH",
  "key10": "44WJb7aqQejADHw827cPWpa1bna7yXutuJfwk9foRusB9kJbTwbXCT9oUbh3L9ZFwKKBdKcX8M7gZhz3rKsM69rF",
  "key11": "UCVipCixdTGMSKC6nzd2ovdwAbzkgPJ8NHaUzx4QGVZ29PHmcgULyk9ciKKprdyHvgbGr69Zi661GEktTnJNLkz",
  "key12": "3cadD3RwtbJ4f3sERcwuX7zD8y3DBNcuEvA5ZapDw3H1nGM8oj6Ku3aJ4VYANtutxetvYa9oE13Yyv2eneoxb9F3",
  "key13": "2c6zvjEPyrZzsUrKayFSbNQ4Q4M2Q2YJw6QZsB6PTMXB4wJAFpq2fhyQvkCjAyoyGfVKfT6nx5UjudRsDgyyLhye",
  "key14": "5vhLeeR5TyHrQ1u21qwMHeZjMrUaYA2cbgbboymZ13VFHDZLXGLQf1G1jo6gDLSQ7bzU7Ls2ogqquTfbSLxDn8Ru",
  "key15": "a5oWkJUZwsER2jVuVFr3UBaptyDj1DWBAQaggXbmg7cyanHBnRoY6S28AkoyJ2D6EWzMdFA6QjyVQC3uPXh1o1K",
  "key16": "4azMLmNQVbJG9TFwfhqvABuyrvnxqH5sGXF8TavU8ixReh3CcY5CwCMbMequ5J7AGhsPci9QuH4cwcN5nSGRd2fG",
  "key17": "e8rCbekFi9PJjmc3JB9ZjtS8BVqnsLaS5iQTDxaNCXBDkdFTeYSzSr2DmgHuCZHo3W1snXabUPhWDLBybGnGogw",
  "key18": "67HxbECZpgwCFMmEnmVN47mjBcXtx1AbEewwCefFeT4zh1ev1iTDQd7P84mcqDGvH5cASkBWvXroS49gzehtMYpu",
  "key19": "4a639S7NhvCb5STHm6gGbUnxxAzYhptf6b2UsYvrZg8h74s9LYGAjeUHN5sAJrhBeySkngZm74UAEDSNJ5DjbDjh",
  "key20": "5hYh2UGj2jv2b9WjoANza5w8NE2TyULyao3rtjkkFh9rwJoCtMP1VrQ1QpZdRmF8KfALJBbhFuAywuCmpnaJY8g7",
  "key21": "4n7EHH15WhHwzHaC1T9kgJUrzfzLLGFCWfLbrMqRe6XDuq3CjMUZPChXYiomrxopqBht5WZGgUgUbCnmL4kp1W5t",
  "key22": "2yba8ZovVpiDVNHWGhEQtk7mypsA1tuCgRfVMGJ5tDYZnQFhTenfyKQvufciQXUyAjpkmybaeEJyak4njExi2VRm",
  "key23": "3jX4tPgKLxoz4akqQumb28oUjqJtq85qDpZYMYFZ5pfZxygTL9pXLyiFnwmuwPjkpnXXJp3r37b2YYmUQHVWA4A4",
  "key24": "2A3hQRRBnpizt8BmmvP76vHKFdpFZ7g27ynEo8BaHZ3gZi89gZ63ke7SzRJiZt7rxqRhjXg1xgxW2z4rBsjN2bYx",
  "key25": "5drey9tUYCYxeVSxsPrM72SYga3BjQ1hFx2QBZU6419khSHar13WRKyGp7G6MYki3B4PJkpXUfbtfbMZEkmHzNrW",
  "key26": "4vurFjcF5MQeLsP8GD6ndCrcrW6FrE27xxMX1kWFzdh8bQShQthmvVdJPdZJDZAHrwFMNmTVwcKNDw1GTdD5Dn5w",
  "key27": "5zpdqeMcDTjHHdsXGD8m6uS4SBdH5s5yiZsQL5vAqj2bGvT48uCec3RLuz3zWDJp2Nny3trodWrfoP4Jo2QsYKUP"
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
