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
    "3dr16yDJXQXPivmiwBzaZmgvpGJgSRb4bznKtBfmHp6g1TwtpgrciniJFpqvo8D4kMyRkaM8zhc6bMpesDFaBbqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oXjbbx97GJqMQZTeayGuLL9pSVPVvwd2w2kw3oWuEuKGBgEzHew8C5898mtDQx2h39xcqhBu6byMymaRYpRxUuk",
  "key1": "4tU9KDQF17oPetzW3tBCGAvKG5dUvNoo7LabRhLHck3XXc1MJf6V9nuTaBpN6wpoNGiT8Urji7NKF9xZVDwyM2cG",
  "key2": "4VoM6HAym1fTq1NQuZoiR3WGRsrfcuBvtWnjUbq7vEH8BqbJFfrtTT7qmpByqTPE2sJR5NtufZpiYX9p57KJ1Rn5",
  "key3": "362pnJ6PpFKkzJvyGmC1HhtxqARoEjLEY9xduTMKDc3KdN8u4hhrdtruLhGAwCVGgMTx64ZFRk8a8LSuZwMAUxqN",
  "key4": "mjidH4Hspxn7hCJ1WH9m3LCYYXTwKT6QNuYTkMaYNPvwcjQCcyDeYFmDHK4JMHVQnDo6HvK46KzsePbNeSuDP1w",
  "key5": "2WFemkfXCofcafJofHYcKWa32ywP1E85HB6ekxBFqFtsxQtK6GxrjnAvcUYe8KGokM383DhDshjVRSaQJQD1mneu",
  "key6": "3c7NVivnqA86PYRvejeuqofqTzcnN9o4GWLLCw58DahsKagtC6jpC4mjGsKxQhxrEaYGQvHodcEwKZQFxQDw3dtB",
  "key7": "3oksTZsEFdnzWeVSRDMHqytQoZ1xtJmyyvTtdnJ2FJSNb1qgiK2H2qPfMvJQwvewhU4TMKp6E3NhtJFbN5EKzjNJ",
  "key8": "2D44KUdyL4tChihzizgwtxZwmmVDKSv7C1S4y5NQJr7k5LeaMAzB67Jgz5grXtz1QdNZRpUKw6oH3mfWDT1TgaPL",
  "key9": "2KwRxCfy1ayA5DCmnAKpcqgXwvRgrtr1mHBzFVbkGVZb1vuDqaRbS5wof3qxaE4WdEgKYGqptTUNVqeMZz9Uu5xr",
  "key10": "52UYP4xnH9rJnEL671ei6dimS4BtxDZCBFZoc6uwwuiX1uKBrBYybRoWARsWvVF673qRS4TcqKXm9GDtqoghs3C3",
  "key11": "3NDVQJbt6Sj8SJiKNtH4sNwRxPenJrmdrSmwdEek6JXdt3xqcY2dFpfBVf1AoA99aqbJLtTmDsL3aUXZ5tNf2U5o",
  "key12": "3Vf1Mp1oMf5VcH9yXvyNNtu1nRbyJiQZ7qX7FbFjty8oWw7Ji9dCha5epVGZmmAwyfF8RuFPUfUVUAKmL3pR5CLx",
  "key13": "29RTZg5DWhYoczwLsJ3Hvtpb63xDHeBMyzNBZuBdEjSoZSktCJMQQhudkdueYcyi6VbqieqqF7AUEv81Bnpi1LJK",
  "key14": "2pskkBQ6667kKk4eytPuRGcf3fi3eGTzFtmHMNvgw5DmuH3VUf2ZSt6GZMseXghygHgbgtod3jLWQtey9V56cz5b",
  "key15": "48B26ttk5rDntvtP9CdfYsKXJ2MJFxVnXoZW5dN3N3bzbbYVGT3GRVe4iCzA3fGzr1bzC6sotfnom9GUz1xYxLh",
  "key16": "MN7DaxmP8bcFkm8Fv3WFADRoUjwe75oKzggr1ZwUcv5ohvfAWQkaFczkAPeo7kNRei21nhj1nBM1cB4HnEMZB6R",
  "key17": "6cTEviu6foqK8oRbBF6FtLTMvF72HJZnqvi89xpBWrJKvrEraq6YEHbuGjoMQity4A9oJhiCPH1GgiC9gJcJbE5",
  "key18": "5C5XmCLNngaT9iNGarRwFE6hujjMu6aBszTrXTf8zXYUXNg2qahoLW64JEaNdZVfNszjSymmoEbFh8HEjcHBC7ow",
  "key19": "56EFdoZKLHVSiPxy8ooD7Z2aEN7tPWozdZAhVg3w1kVKGGiM7TGescwipjgpUng65XRqxWkhUcrJF6xqzB3z9JjY",
  "key20": "3CL4hvDCoaTda9c9bafNjaaycE35pe7KV6nqyXrB2D93UhmY9yTSMt8oHFT74TsyqibNaVfq7iQUYackTvXw5H23",
  "key21": "QkA5HQqxU8P1d85nDbKg9WuqdCBaoLW5bhxFd6cM7vXYSke8UyDAZn6DZasyHDzD8kuk13ABMaVHssypMA4VCc1",
  "key22": "2D4RM9SJUK5dLZWFcYwGpLaLxgnHz55ghTgWnhQVMTwq7sMqBkYieziQjkmpzgYpXDZK3Z2AAkySpYA1MEp3qQZH",
  "key23": "3SSkM7RN2r5QqcTrMs2mKQZQAUP6zSEbkV7siWPzVmr9oKKRb5zPuo7V9Goghc1iRhDKFvZWDPc7SQ5LvVgwup4w",
  "key24": "Zaiz3sPncZKzJmv1NMsW6bZosGY4dRQhdfF29zTyhLVydLLRqrPhExV7oE9AFaQhhqzMPQwkvcCBNbaCXi7ppRE",
  "key25": "3YY1baU1NW1WcT7QhSDYcjVbwXdJVaowFVNftBT3ZTwHGrGAwNJ7HWp4mhHq7MVsoLXrkdGJ1W1tCSHYH8pcX7CT",
  "key26": "4oa46umAnyoyVuPZ366vYgfJZ4Lgp5Am582PUDz4sGzARKAyVHpwQTKEx5kqpMRAhNtKxwRTTDY55cgRdFpyw6Ww",
  "key27": "S7ciGD4GCpYBScRV1uejuvykdm2dc152thsEgu8MbtL6bcfM8XvTCYiU1au59CZLQNsMRmuDGXTsgKLqBb3tWQQ",
  "key28": "2qTDUrzDjgkQayc6WqnA2fQJ3jaPwEii5ZXpv2UkfLP4qs1F2Dttfev5buwT5qUXa1SE77fkzgTG9KQc5m6bujvL",
  "key29": "2fQvo2gQTWwDG3BJxemskdckqqP6gwyxMuWeeXvHZmgu3R5ERBHS4zxFMvhn1y7BXG6GuzzRKp1hKZXWJ737xMw9",
  "key30": "2Jd2SQjdhwYkt1GURfTmq3SNswqYGeQzmQ2b53eWRzVqAUuDeo5PWfhYsQBmtdpZXvcpMJU5E4NEJ7oQuDLzSreN"
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
