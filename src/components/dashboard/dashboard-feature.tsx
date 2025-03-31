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
    "3TuDMaTNUtaLsc6nBL6MgFyzAyxE4tqvN6VtE9AsVHLLkA7sMcC8wa7sws9rSFjWVEQ3nevbXjo6vyWmKTFzdFok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v2j77CWwB6QCJeP4SuQ9xTrnFE2TygQzb7QDLamaeqcqcCs57VMY4ZfhBqXLjVfAgm33QFvCF1kFSxubn6HN8XC",
  "key1": "NLct78ZVe5qsB4PrGB74NuGMSNE4KZprqCuA7RuWVbX6vVnNSfKoz1ST5NeRDHALBKCRJY59aFarV7CwJXHYM6q",
  "key2": "VJyk2oELNzriwpyAWvJjaxHrcRaz3s7QdJZ28ZbmgzGvYFoba5B9Bfikqacjaqws4oTtgGtdkC4RPc85x719zFN",
  "key3": "4aF7FN27UvzP8XikH98zsfnfjS69s6GCBh5CbuY1SM2SSdiHyijib4jxNxsQKyVTensWtGwdvKRmtT1fWJjt175w",
  "key4": "3n1GKab3g5UmxthqwxYWSbLFgBze77VomDPSgAe8m1UQy24QvwXA7jPyU5PK2YgR364dhh8mT2AWEAeWpq6vWBU5",
  "key5": "2ipdbLEH8CQMEKssV6YPjBDZ2gqKLzfZ5WCWZD3SQHJsqtTUhs96MRLFiarzjKJrRdCw4ABLhPwHEgTcJAJLn9ih",
  "key6": "VXbp15pGGtiKjFTwPrjXP8q5eXcGtUhCxEYwWdHUSjkoTukzPAvfW926Ww5mXCQ332UWHvpWfeZAkM6oZoeu5fq",
  "key7": "3gPaS6u6BRMCbhYV5Z5FhfnTURx6TpqN7GfPYva1u9xn431bEPjQ1b3CenG53Jy5KugGPykp69JkpAeLTqupRQjR",
  "key8": "34toCj4swHV7u9fqhsNVRcCYycrsJThGQaCQEun7VJ2FL1cDRr8jNPAQ6N1BC4szjpieoz4wXYbJtiot7HQKt8Ze",
  "key9": "29SLMyHqhUzmTkKzo3ZnDZkhB3pePbmDhfTfJicwNCRiEV81nrCzcMZWUNYTVD4kcnE2PQzHy3LjH5VsPQBiueB1",
  "key10": "5nj88GW23QWjLzHe9MyhAMUR9eaCAjcRyxifTG8mDgxjJKkuafaB8L2rzhsHoY8nm2cnPBN7TjZNfwes97CKnW9v",
  "key11": "5JMMWjEjxvqBXPF9xZ9JkFVfXfKfX2wsBqH8FPdPmnnLVMbxNxevrkqhtozeeWRcYKiiTyQ7tdfafTJWs3LJW2Ri",
  "key12": "4VDFbjUhde3ZJK9ypj9fNTRgr24ReuYWPbKwnpqp3K949Hc2LtuvLMQFEAuhkQfMpgD6VVZ6CaZ3AqDUDypX72bd",
  "key13": "5Vxrax5byYS9zegHmy9Wywig39hSehReRCY45rroErbnQLipwhnDPeKztxVBRBFn7p7BZqfTbdQjJnUxWKE9Am7Z",
  "key14": "4ArD69nRLaEJpbFV1QVWA1NyB2hUx2EVgH9HDt8CKJ3gi6vyFucKWsSNmozQus1kFSkxwRySU9eTbZ5MRMQh9vo6",
  "key15": "3nV8vJyrnc88mZLdnFkb1scqmfzdvN39Gmoc69DPEK1GDsvroQVYShRdR7ehQPDp9CTBifzUoYdDPfcfCCtW8ujU",
  "key16": "2nn5tEaD2hpmKu5ZoYFeezAmTwSruprEoXoNk8opoQcSr3epmf5Co4Lr3dFPnSuetSDwFjCLtCjhDS7zjP5Na2oM",
  "key17": "5jiQyDVXmJpdi1KUpEWgYNUyppQEjMzFxz5FJTVWKxRfs47YNJGaYz8xjXyuL1YSR6917BfwD3d9rwx6CVg7jeXS",
  "key18": "3c5aNHDPZCh58w3jyKA3mYRrYXKZnfjJh4LqhpLz3zGGUF91E7bkbTCuaapUhCvA9YJVpvJyGqVEo6pdvh47rYP7",
  "key19": "5E2JicfwSatPUozcPwor5GcL6pdaWEEzgtctUJmnpitH92GbJ4XpYDPrKeVgbHh9SrK4AyeNwjVWMmqWG2uPQL1d",
  "key20": "54MJan5qFhTM7CXndHqxhhFjCMohwFYQ5knmHe3vQvUvUsztpn9QrEmvy5YgJMbdm8XXbm6kxWdZK1s8QpsMqhcb",
  "key21": "3E1ojYb7XMjV3gF9ua3QvamNqcgrTJAhQCSUpaWGoiYLFUHE2cj78TC3J7QiBmQNzGisdjKYnqmPpKRiUw2xT9yX",
  "key22": "4vgggYTwn3YHzqzu5yWDV4nzA5ZtxD2KouiahKzFKoQwFETnUCv14qtwdbLj8tUioqUCSVcf7mMs5MTvn292icbi",
  "key23": "rQ92HWxgPyqsAYezJbVeswYcRJkeyNPn1yRsBgTwZ7UiSRVr8aH8xWJAe42cCdVkSubpJMM3gGTG34QTBmSEuAL",
  "key24": "4hKbiDD7gidTJmgezjkoxGcUUzs4mHyENPNWwuvtt5FWLANAjLWzHNMRurogknKkBe82ZGgphQtRswcPK1omMgPy",
  "key25": "3kf3aHuM8VYdgT3NAtj2Ng1hSe8MsjCp5CeL2gxmaqgiGDGzRvemYGpf8NjsuW9TKVBkSiWhP4hTz5WS2iRYEZxZ",
  "key26": "2jLwTMoAeiNsdM94YVEbxxzMbrmWVDnQYxfzYZxbeGYWumu4nDoXneQdgxuVs2cH9NBumAzwfpfzHxKpYWQfT8dv",
  "key27": "2v5RPkNuNdqy1uD1sEVoxgZJk9A1BrRxZVckRnkcCLVtu2nPJmVZRq6CynSAco8ou4XHY8WYnLDWD3TZxT4AFA12",
  "key28": "4AHZ1Fv1kdYWwKAtaKUMdcUSCnyWek7EhshFn99W3mPmbHV27v5CKwVG4BHuizTdxTS2SBAManB7d1xHK7LwfJNo",
  "key29": "4Q7n5BBimBgUL87Zho3gEn8XKA1BRYd1d34EPhPZoR1SmhEE5EcvHSE9wfqYfZa7YEPDKcV3Vj4YVDPuBkPxNvMN",
  "key30": "2ZLhwzDVZeqTGqqbZxyjif7h2JLwofAVbLA2hzEN7bosk2J9bgKE7Qy8iC9KJYkYpmMAbAXhWiwEc3x9ctfbD6F1",
  "key31": "61Td1bnmQdkk2BJFQGr2RtpVxvAnnruX6LWCrY3tbbvmPQu2rpoBXC6U4dMUKNei5gqtUu9qxMRczN1a1qXTR7kk",
  "key32": "rQFYZRmSYvVabRYf9UKvEdinAemtoYr56snhau4HJLf3XYNkTKduU7Cn3qeP5GCZ2R5nz5PZUkCUxiLppv5MqtB",
  "key33": "2gv5Ppnp8CRU1RCQwjFhtzoSjyrD5ps21kPTLGMEviJv2Nd4wEBSMxZJMNagqhaxpV8u6wGZtW6JTXinKHmqKR7T",
  "key34": "3xNo2BWkYWEwFtnh4rPysrY1cJamhKkqBPVLW7Nsf4Bc5jnJJMAyTPUY5wr8RPCYAwjrLLnENywNfDpTrt8L2eCU",
  "key35": "2PMnfk4MNr9tD7mm4Mdu5CcNNH3EhM9NhkGJE4zawPSxHtEUY3Kys9nik3JFumKgv1ukzbd6LuHRBcW7GkPNonuA",
  "key36": "3hbEaaSkF2552v9gTmXWzdFMLFypnaVzC55xFfvFAXXidbTndRS4eJwQGV92Uf6SFR4S2YKi6fjUHCMn1Z9c9g7",
  "key37": "DChnSFWwnE3WmRGvJR7P8u9SmfpYFygri4CZciXSKWfoiDhkkiXDiueuf6gbbQALobTxocDtdTMwCcoY5F7JAaB"
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
