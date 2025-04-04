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
    "3yFozQJV3NNhHB7fKRgJSpLBJCTbxv1HQTaVqwWBTJyPT5Pb8r5gW13arnoSH4S1QKANTxcETn7Uw4kqVodvPt9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nz3udp9K8bJe8vbx66HSpko126s2xkcLJKf8nGhTG1yPa5pRuhaytBwoAShCJa2YYDpLufg1XPFFmJU3cH2h8Z8",
  "key1": "21dEC9XWz5cfijkzi68XKPsH7VsGqPxtf5gJ9KVuJr47FzkuuGMnJ5DF1BdBg7E962Rfnnk9JUGp3nzUxav93Npv",
  "key2": "5ucKdAqUZ3hLq4YwyH5KFkajuAYqL3kjPZcGmtxFFqhsqXAinv5SXLYSyoc9r7PEAvKARGCFgVEr65JpRQskbPAJ",
  "key3": "4PAiV5Ht8Ch7Nv4oZExajoWpwv6nRssk8vsvXdxbLWr9FYN4FNvU5pkG4tSQMjj82gx67Q6aYoLD4q7VYu5Rqn7E",
  "key4": "3RBbyVzvfuqCzMYcCKLFu5H1hcsSar5nvmtf8zqVJQoKB3yUtoMSW8M484HuQpaKtKZPFo2aUyx4UQeE1xmCmWru",
  "key5": "DSwF8rUXktJNZmuVejcpr4Md7N5NZEAjwXYMFuAGQbjZUoeaTbosEtkDaMhHKU7XNviKW5fj5LTuxMWtUdrkeKt",
  "key6": "3aqY87KdN8dE9UTNavaxtNm8Aqdg5n3rBJHXhFMMhzWFaFpe3KQEUhPbf9akeV4ARSihiWBfTqhnjG62gKWwXkgg",
  "key7": "4cBLivPpRWEgSteheTCPhNFwkyQXVg2oQ3XaPnW6kMRDMxCrPaL7y8tTxVYsJQ69UyYYq6ySAABhzQpLB5ts6Vip",
  "key8": "2JZEn2XFDeNe2U32LsZNFuA4GLYMZKACs7ig6tZD1zmmc8A1wm8c4j13VwcQTgWzrLzYChDGsUgRUk9nMk4zK2md",
  "key9": "44uXK7qzHHbFxiV74gNmtRecY2evv5SKys4y8TpQqf2cXFsh824TNxHFXLGnrBAq6ypcGAkioMj9SiwzMgrxoLrf",
  "key10": "WnXxci4jMgiqSe86nEAnQwxCrgQt394TjUXmf8ihgoCr4gJzgU2znfAibdFHBsxiYXJi756qRACezVsCgN8CBFR",
  "key11": "4VUaJWUJRfUU1sutpBZBXmyxGvB5Ykzo3N3UPCRHSpwuaR266RattU1aZvjEAdXFV9FxZFEAUpPgzKxHYvWz1Pv2",
  "key12": "3HERYcdVQ1pxaRKafKXZK5YMiji1Y3khyjna4vTPXpzouqJm2b92EGApduHabv8qkR7JzRhjn9LzQuKKkP97rcHN",
  "key13": "4PXoT2iDmpNrMNBVeE2H3kAxsRCq5hisRzqTc1G2SXrszifmMQ7NEWkwEswoiGRWPrm8PPDtpPPH7NrF6A1xVG91",
  "key14": "67KygcSt82ZeSG7HzTbEzGof8EwH3tS2X1wqQwk8wDpC48WigJnK2UdaMRW9K15a4QEThQRDerDSRAbuamDKUZdH",
  "key15": "ahMU2oPu1gGkicLA3LEF9T1PWGggfXGQZj6z4aUWQNudcje2xYXAyVfTod2eDi8SwjN7Pu28bk7Ffz22HHxtGGp",
  "key16": "3y72V2ZioTv9gGJ9ptPret1QauJdkSztCXnGh4Xi65GyF33ybWfeRRmSyVdxa8Z5A7SAefxZZD1SCfnyFBJEK2QU",
  "key17": "2kLmhhpjsLHYQLUMdbeGQcjQYXZmx9Dh78LBWP3LruBE9VHCYXheRpQfyCnDyactcCDfbnQGyR7ExM4cybZHUaHZ",
  "key18": "4MTFkQRFtc7cYRQ7pv5PppPAD8orv5DXDgLMU33axNCgSRqT7YX8Ak6c8qFCwRjc2NGLo8eNS9miKWcszVAKBvaE",
  "key19": "A31QwfSdhKmkh68JUbJZf8v47CCzjcum9mJkgiSc2S7WerEsjGQJNZsc4eRwtMLz8kbpTCB9yXo7giNUKVAPYj2",
  "key20": "3hWNZhsKH5ZdR43Xuo9kw2uv6tvFUmHYDFXNJZWQAd5ERwJsFqZi6csqntYJk7a5SJPJD6duaeh5QbYpgGC4fvun",
  "key21": "3J7SezjBS85DJCC3fCfuPmj2FwXNfyMrYWa6gNmJauCN6wnpZ5gSTinNf5PB61s6SVA4UKmJVDFxaMGni5fjUSA9",
  "key22": "22QPKxY3QHWKSn2kZwW791Gkr7vjAnDiCFe9ufMD3sV9fUeCoQF9dFs7gwzax7LZDGUbndxb64gr9fwpmVX25VEW",
  "key23": "56G45xXBGb6veWnvwEX1S6p6UbpomRp2MHf1ozTtECHT6VTeDjzXS8KDmT64BRYpC6E44vULTedVifoeHKehZNkp",
  "key24": "4MZRR49n833sGFVCKUEjMJzJrvWSS42Z6apG6uLimehxtDiu5kvTCR5ofVvVcog5WFSjZoK2ptqYoneKBmkwEmcb",
  "key25": "mhrNCLvJECaBQAAipZnHSo1oXjJgrkgVyqKRBkHdbncv8VpEe4bVpDR693FK1e1UqXmxPEuy1PUaq1xENkCPy1x",
  "key26": "4G64yRJVpzWrJhAyTFX2AxywQuaav4chMfK7Sy2LL9fSvsBoc5ZmVXZAHEkDw5BCAdwypK1oWeustZMszAR6LqSJ",
  "key27": "4rZyUYAvXHhpTpNXEENhSabE1EWeu1LPNSRG1DHZqsN1Xz29kwsJB259gQaGVxZRSx9Fz56dRvDoSW1PU8Wey3WN",
  "key28": "2MA65SgF58wgqfRBXp2DP5NJcPwsSdYxmxg1wewPreFaaq2VLQc9YznGXbFvTNmZDXnZ2QrBFp3FA3A64NkWMVt",
  "key29": "4xHL4jMpYMYw9xeVbN1oHvP1aAUzNLXLb55t2iFYWyCY8ZJngpUeXowtXLCAjLaDKg7mcWkjbCXUMs17Sdgi5CWJ",
  "key30": "2ziF9zpb1D5f1fkw7GcRqf4QpiqgPhuB1FzEeQwXz6366gJCFYLSYodoZLKpn51oMao98qWEN2runjKLmYg6M3S2",
  "key31": "5oiK4zpbmyR63ftXufpvxdnbK7qG5yggbJbygi7ZqSsdMdBjiioWYr1QM7KYapdiHrAcVVrjJe366beTJnhMJmd8",
  "key32": "5ibTRbm32UY5sVwSpZimwMqY2it7dHURBxp48JmmpGd591Mi1fJ8ETe97HEzM2dAduRKM7iVnZXGSrJSivhYA3Nw",
  "key33": "2Fa8fjeg1Tvdjny6f5JHg7BNdDoGXk4GX958ermjnXQBJH13uca2JYWn18ZxWtKEpwSgvsbcti5RfKsENWAzQyK4",
  "key34": "2gLccNqJ93oNWeg3KR3ay73KPzX513MppBNWqthE7dVsPiD37tQufjR7TWuxGCzRJ8KRot7vURn311Szv6fu4ZQ9",
  "key35": "qFrsW49fHspjdxW4m7YgJSPTD5CeEgoXPFoKgeCA55KXD6QPYzEE2Kf4sHdaEEKrHdYy3VbZoPtfH8DjgoAHvpx",
  "key36": "4n8re35rXzNgPaUyHmYzqfPcLhMsXUkVJ5sFXcmYd3GsnP4vZDMYdPGAd9SF5Xvf3nuQ2SkbUEjRXHNUdzWgQhqU",
  "key37": "2Fr7VUGn38v9CJBQ5E6jwGX8XvwtzpLVRrbzDki182u2agdipkqiX4iWyLqk2q2nJsEryhevvko1Lg4am25jxExG",
  "key38": "3162Y1EfvT6kwmcQmpKJ6uwMCW1nFoT9ysGhJY4CuHgSpGoQmPQ5BZYtTSuU9THMo2JMhCDDxZ4VjxesGgjEez7o",
  "key39": "5Ka9etfMb7y4hPapFUW6zPzk2LtxEK21A6ukWSLNrdyZ9g3XMwJMi4fzUm6oivqtiem9BcqxJbqkxrkT7FQWWPvw",
  "key40": "64VRYHiGyeDRmrMgwZzKnA6eAPbtV19bEPBgxDQSZhUDQdeibQLjuEPKAMK53AaxAJ1FWDfLix89DCGVryzgY1jw",
  "key41": "4DieAzjnFVQEjTiFFnKEHvWWmqEzrUVUXaE7myLQoZNDDYMsSAPtVYAVmwp5RVxuYkoPizWByTmPgpMJGww2n7SU",
  "key42": "4mda9owMnoy6jCi2KfC1FC5H9RCiCmZwt3PimqHJhSs7ssNKENoJ4Wtak9W8crvwUtNifVjQFsT9uEGHDfiPDtqW",
  "key43": "dbjahG44czFWBERDTkXX6t2r69gDZgUqzC32rqwKxhbwdP75xFPFrcsUmuffmAwkk9hYD3qav1iGApF7XNyFWCj",
  "key44": "4Re6YNdqToERKoqbmC5nTrHHRzsExopE2Vg1rutL92XVocuST3j11SSRkWaCgVeJqkSyGbR7UBMcZXnE9TdDqjig",
  "key45": "3xFSAiUf8mDE7q7jV6Y7f6Z4TNq5nrShRqS9kH1GpTpESYMVoLNon5aEK7HTMkag2yH6qCcjGTR23wHJWaVGQ4vj",
  "key46": "4YHSHQ4SkRsfL3U7kx1ycEoKaeRpRDAJQvGvUPoJQ585ZY1RwPZNR3mru34b3x3tkNeFTdtPctASDxZ9gJYfgvTu"
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
