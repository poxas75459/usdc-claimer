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
    "2KNTAyLbCkTbniGLqwRY9c9LXT8gBMiqSnZzL3r4Qh4tirgPQVa8QCoRrb78WzGbVGYtdCh9MUNzDfBnMywaM6kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Mhy2UuYgmmH7psyaB9qiwhhca7YEzyXGedyn14e6uDdEbxF7NFnN9oa9UwxnjUqtbSZCh6vCLLTQCt5VCT1ciF",
  "key1": "67BgKvvZMwxws2dZQtD7thJB5KvsiAEvFCz7rUSwJksBgj5isvS4v2aCjmuMh7jNmYLxj6h3HxRY3H7oZ1jBVYsF",
  "key2": "DGMrMSr2MLF58LHcBEFWN5r9D7KJNUEeCNp3uBKrx4GkB9ch2dnaHv2nA37BpgYZasXz4r9z6M7BjwRYnwryjjU",
  "key3": "53UwrNzdZMyYHnTCz7pMhraF8Hh2EUyiAQYJ3c7GfoBVguwm83KhF8cQQKMGrL87DpV6MLQo54ZrTopfLrPzqWfn",
  "key4": "36QXr3ZLzPwMtg8KXvBdGzgq8upoJ78Mw5rVMQUUeCpE6DWLRr5yTZC3Qqwki8gQSzuBZv9ounEK3asuiW6v3Jze",
  "key5": "2sBqsnqk4okS8vtHu1pNxLdUXJvFzDcaXntvuGMeYBzuABbMNwiHBuvMpCheBr8Afvs9XTfkL84TiiYiSAvdFPK1",
  "key6": "jBJLvVyF6FSt4cEggPLSKypTxFzPeEGzk1UCRw2uVRsgpMFkDAtANsLpdACZLafysk3zNnLL139C2wKXFHCT433",
  "key7": "2c3J57mH79ghQu6ASUqNUHQw4Qn34Usuf6HhXFux4gsJuuPEZoWtUANu3dKXqTuwEogM4wHeqiQouZvZnqFymT5n",
  "key8": "5wK8mBX587zxhDWtARFAFqB14h4dUBxzHBLmhxEYob559X8PwCJgY8L8tbeagNAYH4dZf4f36aSx3eMnhJg7GL3H",
  "key9": "65PRAD7dYCP6PKQDZAh8FWp7wtGHt9WQdJ6itqU6cFEpehSNKf4ehCvfQNriLmjdXouR8kMVmcUmmH48n2SEAJur",
  "key10": "3eLUvVzf7DFbMMWfaNtBeQUk9ZD6Ax75AR5kceP9GZMEGpMHKA8Sb9RyU89X3UBsxqhfVrn7GGZBmzy3SUjbv4Cy",
  "key11": "3cUqYnptov4c3JUVFS2MUbSNfDA3wijUYFnj66GdScYUn88FcSaTmwHiePHmshLPJF8vpcSvRkKHCEMyeGX82PBV",
  "key12": "44bPLxX9ghn4eLUj1yQ5CXNE3oWG5CGBLidn8aPk5h4dXfDmAADpWreJpWywUnVZYNgYX4rXANvFJHZa2NRaHp8i",
  "key13": "4DLBnLGonQm9trazMQSAwnc4ch3wPTV9PZCyX1LtyAEr8XaEhTEApc8SySs7jqJcNy6mdhsR29X4UFfe7zNdwZxY",
  "key14": "2dG6awbzPcXSi5Vs6WaW438kEwxvztBuq8w2SLhUwpEqfiap9rZTM3GRsdUPdGQ35nVvtiHLJjVu1BkVzqZ7Dbye",
  "key15": "2YGfch6pMe8nkpekHyFw7cNkZ5RLksViwE7ZbWft6aVEerDf87ugkhN1ZP6zBcxf4wy7TUTAc8XqqFp7yWo9GZtr",
  "key16": "4jq6zGjp1F8QV5ania1JB6cRuyUVNbMud7NM8n9SqniTYebysUTJ7joxshkSwopjcttfaqhbgRDfxRGyYH9NYXc1",
  "key17": "3H4W6o2Ev2oTv7CzXthUaEN7ibmVJ76YGkQurr6jryUdp9GSrf7JD1DDUicSVWHp9fBifQt2E5eD4Pv2fSB3RGF1",
  "key18": "63SW8GfNvDm1CqPXm8JJ8EyeB8wokrKtzu5MjFkEqVP32az5jE7YQzcSBvuK7JhNcXnSZT9Vq1LYG1iNjhCCr1AW",
  "key19": "5V3hdXwk6VqWDMNARJ7FTiY5PKf72Rx6DrJ7s6wFSq1qKUwMQxPznxWptbyBaNeeMyLKu9Equ9Vfm8AuBtYfJMU6",
  "key20": "2LgdGkFfeeaSnXJicSpG7SZnD4kg4GMZtgAuXb9gwtEVvjU2KdTKSikirCZNwewb7WcacSeSADaMVPkoaT48vSzY",
  "key21": "5bHYg2wB49JGYHPVWfdkzdPtYMkcxaiQbvh9LgunwvTMzMF2iJsuviDG3aQNU8fAgShSRFJh3gA2JYkAmLDXpf3z",
  "key22": "4XFupJLpRgfbxfzjsgRgE39RhrLifLkqbdy95pzW73dijourt1LCFsaAncSYauJE5cakpJtBY2QaadBbtzRJRmJm",
  "key23": "3a72AGrTMGpXcF7PYZ7AKBqBFSp691A8QshxrvStmtsoUXyZZc1RVmocYc8iVW1ieyEszoCTcRMQVxrCHgCsk952",
  "key24": "4K8JA9VWHsQS4fCwHLAvhGmJdw3nTaixRmWbF5W7wcmFALkJE2pDqatQWoAtm1sSYLuZMf6ux9VaUAiV6Jhqsn7J",
  "key25": "zxVG4cGn5p5tQiPx7nAZ623BPXrivpH8hWZsZYxkP2jAoAJMJ54C8j5jKyC6DSqP7xc6GJq1zKovBrahshMc1VR",
  "key26": "2yTAnXppAnYsWHcejXbh45crCjmdm7F81q8mrzWcSmmYf5YGjfbXdMiYQo5DsC4Cg5QUBpBbaVnmsbTfLT9yiXyd",
  "key27": "4uMHXtBmZ3cKAmTTbqtLjk7TUiwHw5HC5PG9iJEpBRrsH5zz6oDmdFwjyrqdcorNbpCN589YhUTxEfjMA23L3XMs",
  "key28": "55KMjwSekmNeKmX4AHX7U3xHqLHudPsU4NUdEc5JDwkjYbzyGsBtLPsepyTtvThmWiKJpJB6Q2jU6DffeDxJWVJp",
  "key29": "4byWz1DZ7niTNpHm6He5a6r5RK1sEoqFJq9vKZJwvkETH3kkpBgckZGjsmLydYXNjoZ7AsVMDjR7nDNbdzNCxniy",
  "key30": "5PLfaEAzymLc5PEyqRJ5Cb6Ki5nK4gbd252Y3WkZoYtyYZXd9RJ8MNH14L7JdkmTM2ddCsxkD4p9R12wu5nXcVGM",
  "key31": "4KUVJt8MNKvY5AFG8nMdpVnFY92AZ7SjcwXhMubWFtirTZcdPei3xh9Nhy1hSWyw8rt1xV5DeecZavGP1phgDcYD",
  "key32": "uMoi9JzbbFBzoUrCeydJ2v3LMopQLzBAWbxRjWw3erKou8A4r54DSnxP9Dew3sdx8EN1Zo7Zfz73a4WqAci1ERo"
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
