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
    "4o4F5qS26bQBPraTHVn61qEjBhJX6SVEWM9KAyRrmVn1cfUMKQS1gbhAJ3cG1gERjbkAzAM6qLxQ1HCi79zHYrEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55q6vHygH3aBeZpqy9ZtPLWTSUaoNU2Xjf9zLC9CsddZV58em3EvKeHUWeU4AVWNBASdB7FxcE1JM26anLudfhke",
  "key1": "3Xk2REDhuGtKvXgKAo42syB8vCjWJFzGK7YKztq4NRTyjuzMVVVrod3FspVD5UUeY8ZTWzAAd89Vky35iWyd6cvQ",
  "key2": "3rmqh21onwDrm1SQGwzoKBo1WfB8R45Rmu272v5V1wQJLXddC6vG45SHFUrshGgVo3xRR2uH1AZ9pYdPWXdJ6eMM",
  "key3": "2QHHh9zhftR2EmoN7qGkAr52Yyu5j23PwhmtNZjNs5RnRiB3bABWQYovPK34smGvNgTR91ev6ZHQLpUG4URRghFR",
  "key4": "27zyiGZiQtFqLFZtZP4yqXFKhYVuPPFWpzS4ofXFpLGsCQoaM2XF8x3Ey8V3Uhqszni387bXtzHBbttagUr9BNSw",
  "key5": "64aXfYyyV3v5aAsVhYti9xspUEG6j2mRbLLu9fVZCE6cBB5jnhGAt8Gc3xKsgbx9s4aQuTRBfZNRhFU2pBfXJKwY",
  "key6": "z7X4yMheZL4saEG7JZShWgZaEwRT9agonJaWAJ6GSpNNKPxe5yCgrkXa287aWUvab6j5gEjLZs5ykQXZDjnQywz",
  "key7": "Qxn3yVFzPskNTZdheYHzv3GmvVrYwRo4uAPLf9FWe5tK9w1myhpXhUZygMQJBVnqBGNFjrs6yvctt77So9wCfD6",
  "key8": "3bK12eLzaEhEVqGFJ5qF1KCTqfaqbqtxM9eG731WnNLvLAcojiosDueCBrrfRLgCcjk8PVsAaNYAYnmHcZwh4mbh",
  "key9": "62SHPwDmc6QWoW1K3cmZKRQ9T6bDHSwwG5zBf7MjXkaMCqv9umvkhi5kPgFUzx3d8Fi9vNwuReviYR4fNcQ1fhsf",
  "key10": "4LuwTaLNW52VC8rmiGiAsK6GQjseDxnztDQF4k37WJH9pkJ5kLaBsEZH4L5zwiH1E51EovpTQ4AX976kFt9E89as",
  "key11": "5NBaZsPZW1KSUvHf7cMCaJjJYNTiGEGQtXTWaqvkybxH8snWDZYDT1rHyHV8PAkbnj8REC2SwYzdumXne22eVkJn",
  "key12": "39XZ9hwbA5YSXZ4PiF3Y4F1GXzocX7JVb8e4Hbi9u4E9RY3pTrr5wVJSBG3rb74fDR1fCpyJ1xDsR7Pkhck1xNxW",
  "key13": "62AdtyX9i8bBcxYdAsVGb6SQEg8G3vQBkPeksyWmuJ7viSxTdeS9JBhstqVtNz7ZZBuptDy8nFRgjsPRJUwV7WYB",
  "key14": "ap3fMRZFs3pdAEwrbJmFo1rFv4U2VtpQY63a3WtXUVDaf2vX2vaLFFr4NLx29ubT8y4m223iziopbgoTKuzkMRA",
  "key15": "QPAwuVAt2YwvdW4TUmLXFvriac6EVxxP9XPT9yod2FDMuhHDr5mbu4KZ73BTRZKuehTDKXE6K8hpLbcX4G9CqCp",
  "key16": "3r7BZfXzPaLsYCcqxY4VFtZfhJpLbQ75J26mNHekw6SgzUHYRLPruyBEusFyjnugGyCm2z6aTnpg73RHx5DYrfjM",
  "key17": "4UudVpcczcV9gaoV14X1LFAarrcecCjWMaq5UExnDK9pKwuLjiAseTcuVEUM1PJsNDmcHFRbcpnZtJHFsziyHkaM",
  "key18": "5N8h6eCxyuzhyWvE18ErebAUaALsJWeYkE5o8vGJfMPfW8bwucfDPaNRShbT9mdchZXPPTixu2zuaE17zEHGQuQT",
  "key19": "34sCgpzTdJYGBJKU3eK7aU4ajQ2g6rg71AuCtjoTxck7XJGNgzRYa6W3ShBho8RXmDts1DEiuYKMy8NarcJyX8Ts",
  "key20": "2HSHxhXuAArV1LRrYBr3A9o1F6TnLSajepdg7qMupfPG79X87z9RqtWCxck1SxCwLeDzd4qKFwcwpbudaPVWTXuj",
  "key21": "3zpGYSSfPA2UZZgHiRHmpPu4nYvja6nySueqFeiKgN8PzosR7Eeo9uw8PKT3KcHKczuC41pHcJ4ngT3Qc3fjWRRi",
  "key22": "53u8qfJmosnYygtCZv8zUmXcr4B69isjQUbojLMqvuAFAJ4FxKHA1yowuVxcjFzvwqTsHnffzPSzWU5xbmQFgPHY",
  "key23": "3V9yW8ZWdhVrQ1RxLEqnMcgtGGFxX2VhAFaouRGTMTNKf2zfyWC7yLLk1reFgKTjJv1XGLKCF5UkbHkYiFEudMwW",
  "key24": "3KMgHNZK8iDiZeBWnPbuz5VC78UkKxcC26ScGagFFoYMU1rhdZWPCFy9cBP7GXn4yxWdh3X5xDXR4TLnSrez5zjG",
  "key25": "2Gp7MXKyN4rWW89VpeydNELvApWjUMVw67NgwEai67VT86V1qDgR98YoALFuwoaDvfRS3r4vo5TFbF335nXqhWev",
  "key26": "3JxxJu7MC8doP6X7GV42myTGDgKXf2GohY8FrKaNjY6AhtXWdyJuCLkGfpkb3b3FMMCYy8K7b19GeFFfod4aEhT",
  "key27": "2WEwYXEfTDZmzwcpk1skZyUQi8DaBZRwrJuKtbUqaNDTGoda87EfGyw2DzeoZvVUhFz1CaZgMCWMvJsRz1vmWSZ7",
  "key28": "5bR3BajhJQajt67AoruoR5CsSa1DABia8nnBXWC1vjUv12JjwMJ4zVy7vKjSFVGyYN3uHoE7q8u4SytpCVhAVSwR",
  "key29": "3niBQoeDELhjofXeAZoFoDHkdBy6c8sSCnGdaLHfAXGrBr2k6pKR64xNJ7UuCCrTVEagY4ocG6fY6bdy7JNsBaS5"
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
