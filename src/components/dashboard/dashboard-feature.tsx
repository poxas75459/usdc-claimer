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
    "3QeyYcdQbXNWT3RxcM8EmcbcMV4ec1ab1aRLaqSN3gCLCx64PoeZXuag4c6jnwzxVfMY2QnLMhn1Lch3funSGkR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K1S73u7DQzx1U9smPH4Nwds5wHboiXdNW2Zo2aELCYAs5hQiGf9QwfaDUsE7JLq43GfEzWmfjqgGQUR6tMnUTt1",
  "key1": "2ps28ryTVcq8WmqCFhwrMX47Kmhns4cvT6BoTFMtCF5ipinbVR2MFvNfVPCDS9uPZs7AvbtTM46PouFrqkLG7THg",
  "key2": "2hqFVrXnFBWnL3UabRhtpwZwKXi3Nn4qqijtd1Zo37XSJmyvrJjByenTGpMwZn9GeAS4Ku2jifgfFmzpQjmQZoD2",
  "key3": "5GEqNTpQHNZBnqErUavnYchV7jm3prujs3GQvpx472siCGSWDmP92eQGSX2WjVv2b6m5a7neYb2hCUR3XpcRbbeq",
  "key4": "2ydc5didpYNSTfMtGVNEwqJFbtNC719m5wypYmB4kD4FJTk63AErrrX4B2gSqYvbe5D9ZN6dCfQaFModGcQJHztf",
  "key5": "RWLNkja2sdsZbzrRVVzG6evgNAHqhhBPeZVYdnirmu6T3QgDwpvBbzSeXJ7dXmiiPsrwH7HascPgoAE67A67nhy",
  "key6": "3H6hEsVjGGQvQh6YB6apV7yRDMhTUgvDqjMFzVahYDkNtG3rDuGS61jjyv7zVj92cAzbXV6k8kpPQxfNooFJXEsa",
  "key7": "679bJzadvJ5hY8UCGcLoMTvpQVn85sUJuPM86fJtDdTG1gm7FzDjZ1ku55bH75SmtFsCYTVkG13ziiK3Zcm9g4dr",
  "key8": "3KW291Na8V3xa3S4ufwYf5nNBLdLsY5PhKj2sfXt7z7nXv3pSxcTaZPaez2262pwoYSW1gAFX5keP2XdRWM14bKo",
  "key9": "CqDQ4zWBngiMbrpV8KsyKNmdkj8Y99XDU6AdT57XoN8EXhALsfm3SAGDr8AQGifzwjW4xZVNYyDhjxaH1PfTuK2",
  "key10": "94tfsze81MNtDfzhGEm1huMJV3GfD6b6xaGpHqxHsgayrp3BKVwFgpsjg7AngaUDTh3oWbNwabjeVcFMhwPyfSm",
  "key11": "2woAkKDaGZHEgG239rL1YvctJFVGTU8FYeibmjWP9bGV54MSLse5LMjBNrhJ4fLMYE5bhY6UM6A8N3uWBYm5Gody",
  "key12": "4FyKMGAJWr6q2f6qM3P8iQEacmpZXtieDZFKT2KnBbJXiFkCiQpquxENxMnzV9cxgTsSd2wGsezvLPw4rvK7B7N3",
  "key13": "4K8uSCqCdmCNFMK13grSQ2H4fSAsQXDwrajbjLf7X4THsRHa7G4TTD7BTXJ6wqvFjNc4sNFu3trdGMdyJAfcG9pr",
  "key14": "2SMnFhzFZxuywd7tvHv5RgPopEF36t9ncu5xJh6wDMz7RgZb5WvqB3KExQvSwzZ5Usgdx5Bp2Htb1X3Fg7SURhHc",
  "key15": "3FM97zpWgXfCp3sdkLdjBCwcXwviYy1yd8w2CYj4a3wzdit6WD5DgkDCC6cYaC9hGUudGaQSvUbPpocp7QRF97up",
  "key16": "4yqrWsMSgPk6D7y56uDW1ZXaUNPmtN7wxgKTd3SK8q4QrvuMAWGSpgs9UvDpDLrecXejijFkCXAtuAAwDAQRPQdF",
  "key17": "3EAARRbNFnL2M9NhtKentkhFKjDQqRWQaT9gADu6KYn2PKB2k2umNwfPsy1Gi9kR493FrY5eti2aGBaYmj3F5oLa",
  "key18": "4rJEZWieGMHHyLAMGBUCsSTAT53FuE6rDeE6BufrGDV9UVEzgG7fZjvfWqxjTBpfE94bHPWXqkfiCXWtV5f3UXCy",
  "key19": "2aTcJ38L8Tt8gWS2yuzq4Woi2j9uR2Se6zgLdFZoSZarfho6vstnUAcSx7wFawvXCK2c5Ki6NFMn4Nv8vPioEXfq",
  "key20": "i5WgU3rc6MAKxDtbQbp6FM5uBfitiuh5tEvddkr8n3zGMvWp12qRMpysikDZYdsqv7LeZa2igHjcJEkg5XdVZe7",
  "key21": "2JtSxPGFVtSAAm2Nm36SVVxBzASirPiZgj1w7X9DGRzU8CMTSvDYsy8c83Gdn1gdcw5edcaS7NxActPkEV8EZrS3",
  "key22": "4DGi8iJGDqQqph1Csy7PfbK4yKaZbmRrk92WDnqbuL7qLcP3ZVMmqGzvAPLPYWnU6zfXRhvpEYBxyzZeimMZKJm5",
  "key23": "VZXdFWCxcjGVCEnGZ7dcPFJK44UhLWcLgGWUe2SMQC8qxfW76zbJdYLKDhkJCttoYA1bFPuvgKcnM9mVnqFjBdt",
  "key24": "4eXNZdxCKTGiHHahSjorEskVceeUg1fti97k71kw1nnE6f8rnYuck2Jj1kxGgbxvmcZU279v7PEfGF1tnAS2Ci36",
  "key25": "cShdS5GVHdyAAnF6StPteUA4WJ8okRew6SEhMhaYNnv1GKW6ENX4vGmK4gZZBD3YxDs9bzryxoyThWAVxm8mx4z",
  "key26": "5mzLHPmGHhWVWsDhsYeyt8W6fXAAezhCfaixoy2MJAbn4ET5knrithAnpdjhMcAw3pCbAHASfVwCr4i2Eq1DQqBb",
  "key27": "XYkuvMmpy8sc3LBcBFJ1YpLSSjuAaxz1cg8TPFPLdmPMkhrpwtnA6tFcCGS5QCN8jWxr9VNhyFDRyvUUTGgCTeM",
  "key28": "3MDHXAmLwRY1smdEpBRB9uKoCLXMvYZKg3JTqk8A3WLwwxH3FkmTey5Wn4Q9kx4kzGZENPyniJpi72kuP3KAQLzT",
  "key29": "3nLHrhuXYq8TWspkUbAg9LeRr9LsFSMyKqjhxtohjCFu1Y7NyeU6b8pzZPaPUjNjzSVZgFfjiTxgQy6x6ih56Uyt",
  "key30": "PmFUNGrcjXUCFh3vZNqNJK2PmNg6dhG3Teb5wJVYGbdenqYVXETsKvNHmm4yH3AH39wLL4GSsMdnF9wwVUi2nPp",
  "key31": "55UWSGd7r6g2giMxe7d7ctz4DxsxhBb5CoyWeAJEEGteZfqT4Qdjmtt2Xz6ERmMqbG4JoTj4DPbKjUKpasA9HrUJ",
  "key32": "3LdyeKj1d3c3wKnFZNNMHMEYi4QzJExW4v5CwNGGLCuYDS5yv6Qr7H4LDVjnxhTZ9BgU4djy3ESN47guLzG8Qayf",
  "key33": "3ZzKTrb65gwPyAybiTvjgeHmaSfiQeKvKEFeCqoh9JXJuhQyqpe5wrcA8LVSjkaUaNZ8Lm6V8Ufhj976yM2xXKQ8",
  "key34": "236ch5aTHbjyNVxtbYJ1Rj97aeiWqDj3v8B7dcV2um2Twkx5gPTevzVAxGk9kobT4TGLfFWBCKhGFrqaH6LS824E",
  "key35": "5MKi4BonQYsVogsXkVUg52Y8dCpTXQjgEd9i7JAvrLBT73WZ3aajYtgYr8p89st61NPTucA5S9VRsHnHnzfQxbvK"
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
