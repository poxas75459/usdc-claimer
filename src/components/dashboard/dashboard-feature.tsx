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
    "2XAJebndL81Bmf9my2FGkqnBrdb5rmERugcesiKiERhvu3eL3bTLWAfhwyCey39x7kg6Szx2wcMZvU85sQmeoimy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CH5oCaTZ28rywM3cNcDirQipJw1y8VgE5jsfKzeS4Ben33WXC6xkYuDfigivjHB97LnGpxrA5Gqd6kKGZKuTq67",
  "key1": "g4vGvJn7HPfjqG6bF2KaUJFAZRVNtH6DaAq2rXbuckheNyZ1my1T6PcWSnnkfHBWFxFqghe6U8TFgFqzyBLH9eZ",
  "key2": "BAuoMDeDDCzJyWrP2tnrRQJ7RzrpEmB8UHWGpxAadFjtfyKtkak1XrKWcCFSyLCDMqcaG2swT9UhziWq2J2qotv",
  "key3": "unBitwCrpew9SoXbsNBS56eQtk4RS4jnaw3DqYbTEKDrqdiNbt52gyYp9GtXDhdR62UyKiipQ1gZyTxqjtQpZNS",
  "key4": "5unKQfpAGQNYJe9GdAf3zGNo2S2AvfFs87uzywJe7vrdwiggqS3SKovNfBEXxgjcUvviX6eVNkj2oQLXXKynabbz",
  "key5": "4vQdFzDAKsubKF8wQ5VVqKFQQUGqdJtWNUEfeLuiCBAoV8sKRVxD1T1y1FRZ67u71LxaB5DFcYjUuEspjzZMJ3vh",
  "key6": "5DAm6TqWtyA2zmEXsh4u73eYkbK9BpuDBgYybfapaUXoDBDZBKYA9y8TBLdEXzudWm4GXZybaP3LiErfsmXcknLv",
  "key7": "24UJFHnNw878Rehr9Ugvr8r7a7YPgTrg95yYRTPuw7LE3sHtkFqffKmyCsrwiVGFHZvdBo4C8pWHbp9G1FVN1AzR",
  "key8": "4VgNPY1gvNiecoDAsUnEt5nNJSgQvq4qAthMwxs91ca2nHxUoLPPz7FQjc854XPacq2YAWCPgwEqkKxQG2dtx4Gd",
  "key9": "8Vj3tr4hqWgupdvxnsDnS2Bt8xPqJGQkZCcZ2XKv3y5DbR3FvK8QRf3o9Vwc3i8Xqnvxx9ZFo4rj4Qu6wp21rJt",
  "key10": "4cJdkAzPpmwervwHndBwSXZNvNVEQAfGjq1SZQibuXvT2YPMFwoeM2MAsX5hjJYTpniyt9WN3SGT4BrBDhhjaued",
  "key11": "2Aof8sLnmtYcMESUpqBpetwGX6UURthS2eEJYBuQtVGu8K2bRrh6XmoXPxG4vZo6z3Y6debGL36abUUqa1ZW8dhp",
  "key12": "2XbRovZTQhUv48mhrn7VMAwEg3s7M6AWSjGxXvJHhzXwU7EGH3UrqysYV9ADn6aW97X6GiJ6ZZHt4waKaL1UVMC9",
  "key13": "2LyHfMTs5Uw4b1wmXSaQpi7rBLcWyikHNgAAWsgJvu55zu2waoPVpPjyzRE2Ng9NyW9opb12ZYGSpyXUzri4e24",
  "key14": "4n5381PqjQ8UCpwtAumndLRGdwZLV9XkrUerzxbLgR5tNzwxNBKCFUr9V1f8fwqgKMyRSfNdfvoSfHu6cDsdHv2S",
  "key15": "RMtAuYHjK5vcgHzvduvGLeRybrT2H6PGT1KJfqMgXrDjuDKcJktynDVaTwcgotFT4r1VE2UMJWRteGcAd9Meptj",
  "key16": "phSSrtQ83Ko6opXZQu4VPhBB8xGA6nLqNRWZZywHCgzmkpC759dcJ7ENZF6WGJZXm17i3un1CX8KqztJG6W62zj",
  "key17": "ugepqN4DgXDNJfyqkphKm6YesnBAsLh2YQbDcALz3U9haKM2aKn8z96UvAJjmu6RU32Xb2F1cUhz3jDyyHUVfB7",
  "key18": "2iijkYdQ8pM7SDeQgpwZks2J1UbAqMiLgC5jJex8Zo9SA8wyh65uhPVFcLebqpFHN3wu4PZgHE6pXvJE48ujvobY",
  "key19": "5aHyoubWbZifVhLHQnY3778FoWYTyGU4z5S8ZGj2214R8xtpStZtm6TYeMdDCp8zPZwyuwN3jFAFjdS9eqy6HK8",
  "key20": "4BYJATPVLsean4dFQ4FsvdZPftSVsYAfYPAzBbEsvJtkGbsKnG5e8HfGdw36wLpxq14VPt1au7vYB3qZWBFrriBq",
  "key21": "4mNNqS2UymYruF5dx45o6by8bfzce4NgAmbNTBjaoqVMMxVXnPyBCNvfuYd9uAS7wMp7DsmFKYybauCn93amJ7Zi",
  "key22": "4q5p126A6wtPZvnecbE8jjqMyY5VN6n9Gpzd1WpVxfrgLqMb6DKMXGpL4NFUiTCWUNq74mUwHbvqG2BQ9LyF5sJy",
  "key23": "PttDQ4f2M4sDPQkszUhqUDq8BiRHSg7EN4XbjwTWCmjrdrMqY19fHjETKFpJQC3r9nWzpMMGNCXQTVM5DD5c5K4",
  "key24": "2X3gLoYJHA2hZUsSktgnRBdqaUgJxbb7aRuXHtTSLXM2axH7Tzh4YJTzjsqS85ksE2K8xHskGfvsmyjx9PX7oDsm",
  "key25": "4b2n5t22anmucsozU2Zizs2k87kamQBF6sUWVhZ3NSYBCcLjwqcNF6c3wbLmfYkvLcHaK7kMumzbTADk891wTJgW",
  "key26": "5Nb4VzLmuGwiBqxrUDvp6GkrFw3vCWvShCCZJA9FSTPLmuJSR7CMwsaMEPq8JPfEjyYpyn9FWLy46k4tQet1B7x2",
  "key27": "67XLvFnob3mgwNaPRHgTviCepSxoYihdgBSK2CVb5pnUVGzNS3ryrVuph9NVuPemoFfmX2A6VeUaxvMobaSdDfbq",
  "key28": "2k1dgC3UkTMjKM8CwQQBmQ4f4qFxEjZXYjnKgpMBAvuz7YF5don64cVCJS2nBDsdyu9Qo9hXPVSxqup5ES15Y5CR",
  "key29": "2z2akKiGye8n3Ca7g375C8GwXF3pw4F2DnDANVsRumJ9GuRabxedzRr3z4FjqGDpLK71KHfP2jMeUmVGshoo7pSu"
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
