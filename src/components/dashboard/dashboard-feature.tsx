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
    "4d91Nwj8f9NoKPyHV1bFT1ynGKZWUcZKzAcnUMUJqF9rdmuZcwPkDZBw2DPtEgDVsrCqvyw6j6jnNhM5CmLDswuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LYdogUcxNQKibiNchiHZmu67hMJHPmjVXqYwYAgRRXJ75d8VZSLJCn5siCbSup6RkkTYWTsP5y3S1AKddGPEWgL",
  "key1": "uDxuiKiKwkypt7FJd4WnxRiDpDvcgAh26kUpcaA65AQrPRZkRCVYYzMbvvw4Agdi39eqcdcM5brLTSL2GzQ9eUu",
  "key2": "4BCMChD1m6Q38VrdgN9X37VPXSpQSEux1baKgCxyWC3Umcnp9x9Q6A8a2eMFCgRzpwY4yKkLA7DzxB5wD7zYZ71d",
  "key3": "9FENMafJvJiaq7hUQRfmyG1JJv2g5YWpUZHKavR8MQNaZDM4JpyW7x9pioB3WJsoFtxMFpPgKbiPfA2Z11hHNbv",
  "key4": "35vBquwyALKk5TAoU2Zjy5owoafdi3FBhDf3hn8StzgafJcNBqNWBeTRY4WSZvMAKyzRDDYqtjE9ECbySEaqiMCh",
  "key5": "2w1wKcwEvARrh512moRH1iCUuiUgt3bUbZKu9B6bMfWZqBL55Rk8Se6vN6fEy8nHa7bFRbskQcknNGe2r9sGDQdC",
  "key6": "4CVJ5cRTGcU8ajfHGHNcjvcBuckwqBPK9mQ2yy7K7oZ24aZhzWQigvgjLgzxA43jGf6VfvGMGkyy1qwgDWtK8Sif",
  "key7": "3RqDz3wAZLpyzmWQbLeBk6LfABFesH9M5bA4fbGwXwHDMBbnsY9rJ1V7JH2aGoo4oLXGNk2SiQW1PLivTM5NDCJr",
  "key8": "4aU4fVGr8uWzyeuxntn7aYrySLNmdGzhneWGXFB2hVfEd21CGAf3q895RHKKJYiDp1otvDVCNrUbzU5V2hnbhEeR",
  "key9": "FgAPv1pwAZ4nDBy2eKntteaBnUACcG5RuETffu7wHQdcDXH9XuyBXUfSezcQb5mxSL9eaePYF4cpgvGNFz9foin",
  "key10": "59ibnmuyFdbiRmRk1tQbciwmYDPi2Rn76JGPWmXLSieFMaiT9rTGX7daR2ZZGj6urH5BsLLpCKTpSP9VWwWkinSo",
  "key11": "4kp2KS4NArJnqXDDfxULQKZsiJS5R57KLBdQKdRj3RTuNnavMrqTXHvsZ46pcAYBWKRNVQ5WGbwVuvRt9YCRNLD",
  "key12": "5VV7B2XmkmKmheyq5u4UvkE8CHbdYNvhrAsWqGbcDdegvb5EH3kvfGVCsrgPJ5XGakEWLkp3t37A8e6DiYvpquRJ",
  "key13": "2FUk5prZXh5ur8Hs3oNf7mo9W4UqNsbcd1sRkY1g81Q74CQnqD4GEH8fnDjBoUhQC2mn82vJftQ8Ay9zLNP7SiHL",
  "key14": "wv5538NXk63ZRHaMDHDinbZguGkFXXNVPJ19ajWwsp7gUTsziTF5HZTiZNi64HC757up9iR9vFEEUstJL9CX8Tx",
  "key15": "4Can3AqjEKXicqEzpwT9grpdrBPavwj21UXj7v7xb2XXX5zdMubSvBJx4vS4pb9Dbkkube16xpMKP9vUiyWiNJ78",
  "key16": "3xrxkqhWFKSRb6EYiDR1VjP4iVw7NQDLTwy56CTsXSUPWaLPyhy4xiDKg4u7qZu7Cp8tXM59Dm7fT3LVNfiXtwm5",
  "key17": "4m8RzQfA1xtVVJ2WVpYoWb2TePBKViWzmSKgMS2LvMriGuxpTbPWidyA85oCJNKKTavk7u57534FWgBZdwio7y7S",
  "key18": "UBYVGKThmtCFWZWjDVDHkEQFtmFPunT84ufzLgkMaMcLVKpDNMMudRT4wu8viszXkQhUUD2WRJMUm7oXokdruyB",
  "key19": "shQ6eW36AC8oJnoPGGT7NvtTrMhUYH7uFJQ7ZkwBXFRR6PtxvQFtZiBAH2kQ8mJHPoujGC2FNitCpb9eTqBWPCn",
  "key20": "3fva8Ms7P5f3zqr2AjjAhX2WP4mUPVebAcuLoo27gqwcdY74AXbNhWMHAyMeuyfKjGhyGW1CCshPc2CvkvLdyZ4p",
  "key21": "5JFAqCqe8c4gZcL8VL1qKhJ2rbzbaarjq7CDmwC1TDTdobTJVTzWnzwUx9iXB85cbhCBGDD1rKU2F7u9ZvFpexQ2",
  "key22": "5ZLpMXJp7U92vhd1YPsXjK9fKkr544kPm45f9muASVCVAyz4gCCHpkwyPiTvddhchnP2bUyPi3MF1g2ctmXXPAix",
  "key23": "28obZ8fqc78aegvd3vjvBEtPvuwQvJ8pcdjuZBV1e9k3XfK5jRTeGVZqh7Z4Yw25XqASz9WA7UBLfjGgTm8aHHqN",
  "key24": "5fbgyrsbt2tajDBHXvxvmF1C28pzBikTa9GHHu3e21W4HZ2UjMxDCGcncgxQKBSmziA7DuHJRcLtZHqsrL3VYMV3",
  "key25": "518mx4mZ6rTEFQMU2VEK4KWqieg4XNktjmDfY2AnY6fAq2NtgWwZd4FSDWscEPP26b8DfXv1cZjZtSeUPqLtiW8b",
  "key26": "3K8DGrC3vHRwwYyDTDrMKtDAFxB8XjTNzqxSifWhET4oYtQwBta3S1HKNCNZADDdMPeC2xgmD9A3BZFqNt3wqEJu"
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
