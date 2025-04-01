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
    "5rDrCaHoJyFuLTaQiisxHgUJ4nAi2PAHJdKKdu377G4n2kv5EQd3XH4ZJRFpCQR14A4hfKSxWUN78oNk9ZeEtTNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fHDkWEVxfkxYNEYsCnsm7W1xepyX83KvWYPxtNKjCVZHQAJoVBMxS1hduEXJM3URxLg3sqmiXvprxnT3MzjUTU9",
  "key1": "oWt4mTM6jHCjTEedbdjgJdUXS4EXDvwk8bWYuj7ogiXbdb8ixUcDwoLtMdShkF11MD9zyjVLRGVd4Jm3LmyYjpq",
  "key2": "4ZF6wzQpNug4vT431QPfr8UUrKdVPkGjffzF1Y7jW7GFp89hAJZCKTnboauRQ4SVmdEgfmGafmYg1n94BebfCZfA",
  "key3": "5aW4MRPaRkih1TefVQccqe3hkNytxvCnLHE9VvWQ5hv24nPbu7pVXKFkghvk1RaW3MuE9xHodtyHT6Jn1gRUpcCg",
  "key4": "3Vf6RGrgFc4Kv6qJdx1zTwRaNfHGV1jy58TTBuSu4FfDqs9jFGj8R87PWuu9a2jYHyGLRHHv6m19wxvkTREnXKXi",
  "key5": "9fN56PsbUpkyMeoMvov1zcxKo3ZhvHo4a5yXxJUuxsJuAkTUWPHyHMjvbWKeDVFgkiqwaPk1xHiujUopQagSUni",
  "key6": "2xF5owHeZWYDdEQtB7GVvsHmbUjgssbbinRVkhRqPL8oLURaCDrcC59jTuA1jXpnQc1vHKe4MP1G3SskxDk4qWHy",
  "key7": "3Sb2rXdoXvnMmEaaLzEhqpEV8My96QkztAHQsBsMpcvN3h6HZDYDqv826YE64PJ8NqLKYFL3MKri8H9TNuuwmuKh",
  "key8": "4qKc17DgAk3BmgFTqYS3TP1sHsfXy5MpSq5FMdennLXUmuhWQDgkVqBiihFvwC5mvyPVDCGUHaKDJwmH52BTW22B",
  "key9": "4kqT4h14ifgmnhE6uym6ypvbGpHw7VmPaFr2aG1s3t7vm2f6xCkgjnFbE8rQ6cQh4JJ9CZhWUxoZKLMyyGMuZzqx",
  "key10": "4eCwYTfxiNaA3wND7UXAzGiExWHu7b7cxmxEzijiuymCjfFTmriJLZDHJnH7MoWKAcq4WioEHsCNFwpLkyBa3xDZ",
  "key11": "4XWXqLeMCxW2FXUqLj3x87pYDuwMLjNtJ1WvJeU3ycepgvbHhVMGYcB2a4FKxGdt43rppGrPxV94ZGKNvqFWfygg",
  "key12": "5gM3nsYJnb2Z2TUqZmEe4Xvj34siRu4BJYBrWRHdZx1grRo8uvJHaTAEBuPY9huTYVrTKzDsMbhcKYrPqWrUCTfg",
  "key13": "wmj1Mnsia2wpcrtNbGLMs2vWM9ca4gU6NUU82j1Lrg3Kb36b9JdJ4cvdBrk7ANzG5i6RmRrX8MEf9PiNyeqidDt",
  "key14": "45AxjUCapJQT6EsNPVefEvzncYFjMNmNorh8pYTGj4oZUhG3huFw3WktX9bfH9XdYSXRQ1ZjYp3fAKhDcw6URM41",
  "key15": "5EFTuqmfeSySB6cLJn7FPQkETX1BdhPqHf6uB3zSgwLUsS9z1f1w4gogQkSEBLpTuBM6tg1FzkwQTg5pnmTtuYGp",
  "key16": "29HJdCciXM1aerTxkkXPZDMXf3GpepxYCnbEGyzEpxrrxA3qi5WaSJbBFETZsiaPJA7yQNxb12DRKcUbbbyx9eGi",
  "key17": "4BDbgLwj6kJXPUejKoU1oLUEkSj35bbHrke7tGR3UgvoRZGPdj8V6DdXLoPUni3oJoEgRU3XPBtzqqtnCHzMfZfV",
  "key18": "2Eq6E4E9BP3sXD4QUWa1WBB1h74j4ZLiHrMYccZz78vApmrHZ8g6jFs8zSXznK53GKWTSuBQPnjYyFM56bVRznpq",
  "key19": "39vkwzpbojoWUok41bdz6EqN2DmmqB3gRE1SETe9yE4xyUoTB6wmPvTCYGzdDgYpFcqURYPMBMi2qrK4os8rvnJU",
  "key20": "5P6MR8Avy5rxpLouJwhSNAPptc3KpRhfzSwWNfYXCpTHBynJyi6fzzD8rB7KYKYQirCgue6rArJYzJqaQp6XR9ht",
  "key21": "37tvMUa7RQ5h4BZgnrgjwj1V85aCiU63RVND3y8E9d4CJeygeLCfo5TEosGyQ8N21A1G7eCgU9S1jT4Yad7UaDYU",
  "key22": "3tmueY6pmHB8H263WuPk3f3Xfk7HfSvFGmjcDeGXue1uy2MHrwz4CbnKqEsk9vz1kVQvvdEaFqhqLGDHQcaq3iTV",
  "key23": "34wSyptZ367wCFb6B8oNQBtAq1wp8P2Ajj66zQbRYoJf7A4nzime8uVhHDsDCsZfLAD6bzPGLYthDvuVBW8PKFG7",
  "key24": "3DydmUh7AV7RC4bXJ11hzL31mNXCZFTJ3etbULMTW3VRWoBBiBuPnqRzfY7v5nkNom6n9VRQNhUDjJMVyFdgde5f",
  "key25": "GGWz2wyJuuFSdQnoN5WVRy8LtkN8t17QzDdDkWXqLKcikhQBAaNf3HBSpGHzhkZMSNakvEFf5dZfGzhGkFuLPXV",
  "key26": "38KrtmEFxdzq2Q2QcqQ3WkuCduViwZrFLuPniRGm3aBjZpcbhdXVXFQUjpnWRFvw7HR5KFWNg3ZbtU8xkTtwYuZi",
  "key27": "o1k5HGAN6UWdZGjrF1tcfR9jDMBRFBMunD7NyKwWC4o8vwenoMDcKX2wUZCRSQNuKtUXGrCVbDjadRDsbLR2Z3G",
  "key28": "3qq5vVRsfBXvQ14wny7sXdTuFEbsAgVBs2a6Qcfajm8bZM3DZZ4rKDbdae4bZ9qtj8G74xxSJndAEMupjRGa3BmN",
  "key29": "QqwMUUkz27BnYgg2RdZx1ZCYRb2jwL6HLetKtQqFfonjcmkSeTVRB2Ee3stBRnc7i58QRthFT8uN1u8vmZcygoD",
  "key30": "5V3HauvZCZFCof45FF9j54bbZvMXrYZi3XfbpyKtSkhox32VkVNQ4yxeVvXa3GdHcd7xQjmwB7Y7bUk9v1MAy7Pg",
  "key31": "5eiSWtQRLbARfa971vhexCUnSV54dQ95eTKAMnhBLbmxjUoKhRKpvik5EWDxa46LUwSwwMdaG7QsJ4bbhKr6YbMr"
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
