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
    "4wi4oxULT9twowK1S1hF3fRRWxY4NxijswjLEmrivbyUbwiGPy21UUC3B174U5PR4Qdc33tKz1pwvWR3CkkML42j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jwsmgZVBFRUh7bMM93r1MscR7tk5KEWaRfszRJZBwHiQYEWiNoR9iZsDDDvdmPAEbBdwVHZUt3cLw9JwSyjVoYi",
  "key1": "2Wy95bXZtQXAucSvf8QQmQDCmQe8BWJHCj8VhkoMgx6xbtsfoiv7qufZJv2dTNhtBYSXvWiHoPAAoRtNqCZhk8A8",
  "key2": "35gYREHkTVmy7rwkhDbxS4xy5nqWBbdHSVBp1qvKGG2SbUELmULWowQiq2TYM1b9CAm5z1Gs5yogggaD2wadMAKU",
  "key3": "3aqrAVZRD7Yc7rQMDtYAesBNN8sxjohggoz34VgzUMPX4kU2p84KBvowGzjXUjBRw8ZgSmsiN1D6jUmT91RZTodg",
  "key4": "2ScH9NM1FH5voxjWV2qge46V1CdJcpTtUuXSTpGMjTsJpWugQuD5LeLDAV12JZ6rgmAUQJJtVEsApw8TL79QMdpi",
  "key5": "buYuEEKWWXZ9QBtz3Wv6MwPacR5V2D5kkRDVwzQVW4iNQRHVP18wM7XwCXjYYmJ1wjWhsacL7SWLn7uN9RUb7tQ",
  "key6": "67qN7N71121DQL6WVMR3pVNyh8LoYvetvtWLbiKjFFXVoszXfwp71oi48mZT7NxWxmnvmavNNtQ9wLQmvbUByEh1",
  "key7": "31FBQyNEtFZzMEEcEhv2duvLgZtpkMiyiSPE58Z4NQLxT8qbU28uBkY1teR84MkVVwjjLDSD46imjLXZjR4PBuB1",
  "key8": "64dmfDfYBZz7JqKVB2gxyZWKcHq9YY8tmFscYw23gboBQahpxpZxGcHKVHtUWuhZC25HiTSAcwGzVzRw3jPqjwGz",
  "key9": "m4reEZPj8rkzujgxbW6pGEqknXVvcG8yxJTwG1gTqGFGQRwSk9u4Ph5BsPJaHzyyLmWwdyvyTzQZV7VamYSEuam",
  "key10": "2Lnu91WwFgjwzCx8L9eqhXXBJm5aPxoFX9w4QoXVgJZVU8dKYQi7u32A4BoEN9TDXuxv7bSjTMqVD3bmzQpSAM5z",
  "key11": "55nPSAAFPxU9MX8yNtqS3Q48oX4PpPT6bD4Q8mLoyBm3LWxLHAznU4xggH6YAD2Dkm9aX5wKjs7imnB3chNXy3ki",
  "key12": "3N2VztwefBLt4Gb4vthL4pT7sTSAuMgjP4MxQNTAgtUeY3usKQfoVC5r1djxmcDpg3mKJtmjK6c7QBAyDwbDVR5m",
  "key13": "2mHtZ8qzJf3jCb4WjLEwHvACo2V7AuGPeZiuSU7gEq8jXpLqR6jFkcbMGpPQQh6wfuei8P7JJ7fwMtHf6EXrWXqQ",
  "key14": "6e7ZtqFDSXRS53YnX6RosYeSu87U5F8f8RDg7VdDQATz4RbFgD3vNPFwATdzF3QELszznGPn5fnZQVWMrcTBBez",
  "key15": "5VUCZTdVshb8DWaDFmF84eFiR17JmYQnZYMGefA3HThtsjXh249xjHoLCrsumZM4pdqeNJq63miwr9ozTjwPM2fd",
  "key16": "29nct5Gk2kPxg8rcoZZyN9P6wpnVGDHiPdUERPNaj24rUFzBU3xgTA21ruMjKNYGyM9PhNbVViJWYrkLb9MnSJgx",
  "key17": "33fbtFuG4yx69oa6Gt2DPT3HEGBMh5LsKvYatsRm3fyoWrwxeBMiAXp3kV4xEW8yq3gex9TZENe6wSEEjKoqREhK",
  "key18": "4emm5n8venXCrEZoe8BE8GnK17WtBvNnpJs14Qor5KFQgXmYsqSF9ctCxj4wKgupD3bjtma9vt3kypsdKySUKmiA",
  "key19": "5awE7Vhek8BW6WU7H3SKTdMyzCmhnZbtyQRgVhLiCQvaFi19ijLKLE5Cujxc8xVFYpEKgQScAhkRMRT1EgCfDWnh",
  "key20": "5KsZnzuXz1RX2aRCJJLUjHz3dWmCUkisZ5QjBgTzngnrDmwGtD8rMhjakVRbDg6oGVpRMoUbt7WFGzo5pXBZShyM",
  "key21": "4xmNNZQ8LYC1sCkpLJRjWH3ScKyUdRe5QX7eKv6BcEXh2cDnrxSibd4Y7fL2EpeRBycqFVSUsWQ1CcRmF6txPrkJ",
  "key22": "36SCBsA3JE9KbZZY65yjJWd8DDjPTJ3V6Y6yPD8gAage5wCGX8UxiS2vpvFzckTJ1tu4N9jcPgx22ewv9L4zrZcm",
  "key23": "2iz8trFMmmqnZyFaHv6Qby383ttkxUJcXinMjAQ5r6Wvp5fnZv1dCowxZ9DVQV29g4RRbCcLgFCr8rSJMW6kpfir",
  "key24": "5VZD6sHaUkmbYrnw8z9ypYCEv23QP5t1tipZRsHGP9cRPRPPp4xiP8r4M7YsEuSaHHqZ9DqSpLUwx6PfFsUaHuLY",
  "key25": "4GAFeMYFa871NR5pdSvRYASZy4UHhdi1TyHjn9Cbc7FUzyEKPGwiP9qM5VMyR1T1a3KVysM6iEEVqr3bXKDUn37D",
  "key26": "2ufjNNq14D6uZVHhGPw8DExJvmxidkHN7Z43JSKQcrBq9gGMv2bp1z7QocAARjemsYfbxbRGUg9W7x5sLdrdRAxK",
  "key27": "2AHmQ2A5BaQSqcbNBGoC4GmQm7XuTvFVhrPuqo3Gp6RxBLLh853ku132JwdhPixy75kDqNMfsWqpsBJNxXCkbUug",
  "key28": "3xUUUjRGpSBWaaxcnFE2tAVUy4WBQkJUjGB2oPzG4RGa3QGqrR4zjWDYbeESPkQeP7rze6wJh38fHkGehXMYz2if",
  "key29": "4nmwGMdpo2iXeF5RAJV1m8YthPEL8G24sixERsShC9gWvUnW3BUaXB53cm9bLEQEtnYeRWyJ3XsuRpLJNspvoP3K",
  "key30": "ZBaoQi8tEQfSpXe5rmQPm4sDpHV8ZWDGDs23G9QkDLUiXuVrJpCVFd11T6UsWV2h3yL8AqmDpkWgJwhCyUYpb5T",
  "key31": "5CwpUvR32DCMkzz4AJevJ3NT8WSLW4hZpueFYgLj3rND1Df7iaHn3kwbC54YzfGFjKRrgPmEEJ71X6jyiAfnsUcV",
  "key32": "5JGHMkzwcwEB2N89xpwevNzuXQLcApmznnPnch6jnyS2hTvcNppNEvp8gZX57NeUR9FhNEt132ijwsaMko2tcXbF",
  "key33": "5oSmh5L5Pnnq6w8uzMZnkcE1NJXQPpNw3CowVpg2qese9BnzJKDEajZ1dh5tmDj2r5hGz6226CLPntZ37QRB7G71",
  "key34": "2tCLbKciReoq9utG2WJz1QSnqPx5F2JHJpsuLdaVapYoVmKuJuimmZySALDaYjSJgJBvHYqVW4BYViUx4r4FyVJt",
  "key35": "4Gxmz9hykBBNZJZBW2L78R3aEJ7CzMNjQ6cSoHxUHbdYBvxfJYruqJSqJqMoGhtZJcep25VbExa8q5KasKqY5x9w",
  "key36": "2hAaxRgQV8iECQP7GR5N5SFMV3Apj4i2Yegnd8kM9F6Gn8TgiyUJRhBYpsfAYHfc521Hn1VdzjQUvwh4ReCpRFwJ"
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
