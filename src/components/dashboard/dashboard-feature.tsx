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
    "4H1e8aQmozbn9UHDEFi34sTm4xziW2fBHMtVtck5Uh1DPiG763XgTGN2JcqTmt2FMNbJj61YeMt4E5dQdS8b5cV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3532Bx2fVUSMU7XSMiALsetADuYaR9Pk7CPLrMUZAg68vp5pwVETtevGCdnkcM1bGbsiWbXs3PvXdhGNLy7EZTWQ",
  "key1": "66x8N1D3sWYJJxaZ4d2wCB4gKjFjFG4E2XT9dEou8tkH4hXoZsv9NPt5yCt8Rtih49DntpYnLeLdb53T8opxFEnV",
  "key2": "HAcgb4CiDPqHgX6d97DRb4pv1pAXHQbnDbG5wC5gVZgrDmvWjdxP3qnDQsFjZCh4Ec4shjmkA96fAQDmRSMHwnH",
  "key3": "4UNdFvm5D4HBzsCZBAxN7DGpN81gUfRWryETA2pLm6yJF7ryTVV2oR6Gv5qMCcP3Njcurfvkoo94eiazVEC2rinD",
  "key4": "Pjc8WDndQ2dBU3e3jp6WjHfiXLDoetXwiHbAgcFgBVSx3WpXUH6XDheTyxFHpvkH47VWZrJfJKcvQqeYGq4ssCT",
  "key5": "5vkWKz62bxrcmRLmJ3biLMPRs6qJiQAdR18V1QtvsV4bJquF69GanUMY3n1k4ZUw4Ne1FyPK4MddHVuQnw7enY9Z",
  "key6": "5h5d26FKCJFv1UVcuxvtAZzuxA58eutfWccY4DtvK6curRQEJA2SEv9ktUnKvfJwHguuDEfP1YLD2P4yFB4vh7Ei",
  "key7": "4C66quQoNsG9U9QnKoKW8UARn3rVGyFRCxdHFJ4zjxc37rArovFdxue3hNgZqBP1NfjoqBnhNciT4KjQVtsAq3Pu",
  "key8": "3DGQzAN4RJRzHKLfWGphNRzVfrzqEGdJ6kdZc5QPVpFGv2cCmjTLyuLiGavdgafmBkqh9vNr8bZNFDxNHvxCjMfi",
  "key9": "hx5FXUZiFQLbtMcVwri1hAZoqAA4ywbkHsKJMhD1RokHgfz87LUjXCEyvZdjrHCQ5oAH81oUun4UVcAJc8maEdt",
  "key10": "2GsVg69XTjuNQLWCkMjbbmsWeRZBChKA75FbDff4Tfcmnh29UxqGi4R7S3TYFJGQqSsGgTxmGYu9JwAJ2zKT1oCe",
  "key11": "2NpiMoZfEdEVRus1qWN29mU1tGyzwkVLryXDsiccbhfif3gYCuDWdxqMfP7Upht2mJCcYJoi3LUmUaTqsGsLpRpW",
  "key12": "3tiC95ZRj78EphUvbSKSMPrBz6uZyz9HPgpUfA4BfovrdGCCgFgPn4FB5MMuaHxjGxeHEMSxbF9oKa6tpAH461Hh",
  "key13": "5QqWq4V7pVCaTV1K7F1bRWn2RBjJcw6netLkogS9i2spA27N4CQjwjenN5e9Cw6oSXo2tvtGZ8y84WnHGqwjhtkH",
  "key14": "58XcmK3xY1AYdHvswY8YeAT4tpaPtcg9zNzb2M7e3dU9b5YbatuiCNCXSxxUunPS6DbDUxMVEjrpe3F9jDk9a6oM",
  "key15": "LQ36Nhfspqfxf8tYnruxLa4BYoxhX89xUKTk6ZAy7fDDWj6ZJNr9D4WLUqoZcDiUgkGgpEpNcw28Qpa6QuE129H",
  "key16": "P14SEWhHX4eaHLqpuHraunscHFJYgVV8zWELXcyu3daxmQue3fsHHjuUNJfxHBbEJzQoaBc5nGZzo1t9ktRRi1e",
  "key17": "4avcWYQpQG14cCamm8LrJSiqfw6FTmNnyzWsrqGWqfpheUu2jQ8tVyoWP8vh1tW8DN8Gsr8xF2iuiPLp4djrfdPb",
  "key18": "zqAgoxMEQcfDqtXoumazB8X6LucNTbeV5hm5vgTFMW4VjdChMumY7MjwW1MzSo16BWqGoLHmLsEVoaqGoCRZn89",
  "key19": "3uMGT3tHhRT2vL7GS3omC3ECQKS35rCkNhep3wFvNbQ6NghkRBxqqcNQyNKLEhEkZ5ACToYdwrQDnoGbJxLFgnft",
  "key20": "4m26Xa5QmQ6WMZ8xbc2Xyqpw9uzH8fuUtEavSfwyztkGMs8xyrNLf7GaV9QaTvf8cBVZaLyeXzCQMh6cA9r7edP8",
  "key21": "3KUPjib7UawPvj3GC4rrdruQz6zQCFeP9qZFKwxKCFiT9yqnQDejseJi7L2JGoDjvmaBynuxNRkQcsx2ebQA1rfj",
  "key22": "dcTL9dkhUURZCsJjHAqCtv85AALHhdDgiEG5eoWutQYW9TCQWAfvzuyYu8r3DqBgo9TXtBgc9FJZqaizLzr7QjM",
  "key23": "SAZin3rWBd6WFfY9MYsgedpn9LCo8h9WcRwwT1r4zbux3TQyJrVLmJNXjjmneuVTtqdExYoBV5QCEpKd7BaFXHy",
  "key24": "5DV7EGtFwxShyYSnWaNvNMWasbQQwKKHeyJy2FbTCfxbCNbNFuYFemoXsYU3YgSWwXXZtV8H1FekxSuk82xjkC9L",
  "key25": "2NELTwJGjVJdKK8uhxopkJX3CfH9SWBYGaPsNFhq9EJEKoe6KLV5XVeVneCEd48R1rEVU5bHNmaMRxGtpNKsNPKA",
  "key26": "64RYy3Hs4GeiYqrS66xgGexWxNwzpgN8xkXRp135VwZykRAozYoNckwcJnJNHLxjaFJcHDQNbbokqpqMmDdunuy"
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
