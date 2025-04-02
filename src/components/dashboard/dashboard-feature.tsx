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
    "p17ZE48dwP4XPJTQTYLysw9RkpTaJZn3NX5CrPPY2zCxYTx3dvMc1gh4746VBnveXS2YgJqGrpWU5N8WvAFa8az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDKKCyUgqdjYme64z9BXqitn9nS98WhS9iLUaU1hKhZVYe7sqBEnaCm6NB8a4NqLMq7xd2MhKsReGpYSmZaigrT",
  "key1": "3aDU1P2n5FXkttfFybTzhNUrPGp7XPdjYgGmeFvCwxUU1MmMRUtzf8WKp9zYfBENScs6CDT6NDYPGSzowcR8aQvt",
  "key2": "61aTNmViPhCft9NiEhFrUDm2cgtJY6uyYJp5e3MF4M8xE2q8U8tAcGBytAnWHsKkeidCYgqeqgNkdw2fXBqnVRM8",
  "key3": "5YerB7QAsvFxTxkazcmJDzWRrLM4maxbqkaNWFUAFjjcKsDVytfpafwbXfN3bd4UYYyeLsBfR8AsE6CZXaBM5GDg",
  "key4": "4ufTYJBQe9QR5TQiXNMBPVvUi5cDVoLsuWnXW4aCkQZZH7nWwfvv4YLqPwTgq2csbuxhxnn4dpDYghhw3QEe2RPt",
  "key5": "4NMkRTqasMvgniEaDAcQdcGyGq1QrhyyHE5jjuP4tMZCACMH78J31G777ubtWgGWrxPquMU3WTi2f5Yk8B2qbU15",
  "key6": "5VFk6zUHKrSc4zaAFdbZ7DkVFoZmQyBEuQkMRafiyXPkMNGjJvCaEMqynFoGZTzAxD33DqjS15BYRHuq9PTJQbmk",
  "key7": "62u3zRK2PtUwytSz38bD2PktESxRomEh5tWddLdyfZYCHNSifvbMbMcxN59XMyHVcfB7po2b8iUehnakTjFfhyfk",
  "key8": "24G2nouXXcGGtiresCYGTf79VhNsHLyLmNFNMfemHYkz6oqEY74VfLKYpZRNxLzNuoDGDyXEPhLRJqvjkMaJgBkS",
  "key9": "3DLwMYdqAQEk5zfePm2eWFzsCQ7Dngu917ZY6MKT15bNgv7u3LzmX4ZwipCKPfBQjoNhVFeF6qBG5YVrUPY6NSVr",
  "key10": "2uWePCHxb99cTJAtTfNQ3nMRzdmmiW1d8pf5Nty7JYLAYYtAzEcp54LygVEpnfa97fEefjTgdhTZ4LPJUyN2NoA4",
  "key11": "2AAgedxGGhQhVzWvnbnpUrvorSEGnu1drTG8fxEgb3uL8AwdofgoPthwxMV1tJHgT4h7159cKncuqcsiJfsTau2E",
  "key12": "aWC3nrxQWwKEzDz3rhAru4oa81xNXwRQEe34QmN9zfPggGXUvdgZdSgfY2G4JeMG1Q4HjieFysdSNnn7qLvRkbB",
  "key13": "2iA29bdqeQmFQYdAraqtqcWxiG9FXZP8Tt7YU7JiVhKkFoEwLXuRwhxsWX27Bxaobg8cRduFaBVgumPs3PJ1npk3",
  "key14": "3nhkbVE2KzWgiKvurXC3UAhMiUNkK9oYXz5WrNNvyt5bpHW73M3uuKbwCWj3e1ozUe9Keocr5qFQwEghBHMbMVCL",
  "key15": "38uVefLxBUUdu8cCgUJgmgLGY3BAkAjc5t3EVw1Vjfjs3Xy3DfdEp7LLzZ6eojRZu2TKY5mjK5HZjAMSZxv4BTdA",
  "key16": "621JozXMkvVYnAgAVCxAJdCGrV8gL9YfrxojJGXB17NSAjFG2gMShdvCdW7qWXAzG2oTFYHy8cpcZqZbABvEdy3h",
  "key17": "LeQqXWepURuB5mTmreJGMMt38PFJ5Qy226Q9wRajzoLgLz1d3syqJCJJo14Dc1FqKESH4Q3GcdqccE6fupn5YBr",
  "key18": "38t6Wu9M7wVSr1wnziFQ4d56eGa781FcwaQ3B7cstpfDUPDNYkB4n7zRR6fWASjELSKxzf3sec3JUrCiwLPjRHFh",
  "key19": "3FWmuu41o7HDG81PUAqTKD5Rm9T1S9qm2q93nyHHRue2qyhUKFh7At65yJGCqejBJehcTciEBpMNuKECtCcg6MTM",
  "key20": "N4t1Y27keVt6o21fr3hbeqRkm7J9JqazhjeX2Wt1ZCutHwZu9e9D5MzRikHjkRjgJhJiSRWwpbnxkcy3N36GNo8",
  "key21": "2L9DcXJVRj8HaBuHk8rFHZkHhh9a7NyYDLnST4SPZY1okkUuYj1DgGcxH5BFtkqhWAas2t9s5JkbWjTwAw5yHob1",
  "key22": "5HrPjVVTLnZ4EPcVSJadd4YWauAWw4BSB3ysPmEHe9HhFYFcmS33RSLucAGmayeGpg4jstH5fvsoC6KcQJyYihe1",
  "key23": "4Bwq4n1zsEPSrkADz7w7EMkZX5mj4LbBLWXCXdRZAB6HQisd5RfAg7X5wfuB3oxvkKDisDcmfyLQ5L4xeD34WyNT",
  "key24": "pAvgX3R2CWLvGxXSyhXKzv54nF1igj2TmBco85ZagaFWcr6P76iYbA9cEZyAzLZmC3YMCFZxqsLyegDcZY5tX2Y",
  "key25": "2JExYGDDbd49cgXjaQ92WE7YoTstXC1fFFV19jKXBrfLfh3YLbAC1HfPBxCyhgeBvbXCCqzC4W9sZzi5mJTsV5mn",
  "key26": "5NYuc2jJD4Cz7fUqeaN6tQQ1QCZQQYVAKLixGTJYpUZzLXLdXhb4LE6rSrBrTW9KrH1gvu8dzdJKaFoUzKCGzdx3",
  "key27": "44zNKuRmsoYfBQzpgbyCQp6Njn9t7unszpaYeN9hXRvcmRTmeXe3WBTffjKNfrCkch1mwPGzXK5GkByXyX9e8n7o",
  "key28": "oTS5xGVahE2vBoN9zvLfpWrYpZ7nE7MLoH1GHYK2mGMYxP14AaRURKiiu98pxWhUyxHrs1Hahrz8jRVH2qCT187",
  "key29": "5RMLRnNzoDaVtaMWSdELEBBwNdgjfEGdzUKm15VMTUG9PxdXrCu8DhZEHnpwU9YW8kz2nmwsgyFxBvKjK8BPeEYd",
  "key30": "629HsJL9eZwpyncTK6rLLjBDztp46MQKPm11gXwtW4xNKWdHbBkdfXftNMAyYpZPoeCXhtqnVL8z3dEUpNQiYiCf",
  "key31": "5nqi4r64DZutqd4jjG4guQVQWHWe921sD1MVx7c3F42L7NLFPWyKpR345i6K29qzRzSENDh4VGWmSYANEAC9Yrnk",
  "key32": "33YW93LVU6cJLLS9kaDLAMvTsjcJyQZ8NNYYdkq34EN5w9edCgSxpVkU1rsWdvuJ1V9Rwk4up8YRsjhbQ99ijdTH",
  "key33": "4vFkRtTgXvsPxzJWfWTweyJ9T2ezz97cEMn41cTAmEH6oPDWrzSr4SaVBfhKNX9PAFnxHoF6QQKfNgbhjapATnW1",
  "key34": "24mQxP6oCwJDW29XSVgAdQg9cXzBPpy2CfaxJL8bR8Q9yQza7EpSc2cxvcnmVLM2jWeGbMP3xxyLWRUQ688jwoGU"
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
