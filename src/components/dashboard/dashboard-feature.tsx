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
    "3USSb4jfZ2GpuSr9ht7B8TSb6nAfxUXrov56Be9ngUNTWim5E1BtEiKPfwWqCpQx2rbQqrY9r634K3x511fiyMFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phs8Ma1WcdVoHp957atPdd8v2TjRHG3KRZBqYETCcBQ5z3FvxSmEH8ioNKaErgfwT6PQbNtjfkiomYv9tWd6DQq",
  "key1": "4oxphuED1HRUNzZmSgGtTPgh4tEgJcGpEoztGcHoCCtT4f7DuHWS3bUpEKjYn6af8rwYhWyMJqapQinyKu4uonKr",
  "key2": "5pG1xuLfXWM4hbCvggzuLZpEHnyA8AszAeZTE9rZzNjyiJw7EN5wmok2aLJg3wYajo32SzxfHabmXPdTiok1G3cg",
  "key3": "2VwcxWeB9QEUuywWTNY7ysfuLRhaTBbBsaCN8uqDGUoGkrLLo64tWK9GTtEksD9xf5sP6PHjxogc4BcDqz49XFNq",
  "key4": "3Jj1hWLFoWohRovJkFzVXUeRdDvzPsZpSgowmW1TxpsHpdYzzNMicveyxCrBkMNbfm87pCSA2QwpNsfYBTWhQRyQ",
  "key5": "4WnTWwKRhxo47aCGjN6yi1SBZGtbigPCFcNbFEJJ4sSUgToNVzfAZKsJ9DCX1KYCzxwLvjnEurnqF9nsxfZfMHqB",
  "key6": "EiH5u9CZNsEB53K14ErU2dKVWG2Tp5o9pcviQH8XjuF7oaLoZrNUKARVSPcmD4qZbsuFzSEZykovowPhQXXjANU",
  "key7": "2EM6SSJQeqzGCAxvzTKVHC9JfHsfLCVUkGe7QD2unFvR9qtUFibJpxxvEBbvXbDx9WBYwRZ89BXunPck4WgwQ4wx",
  "key8": "29w1spfp6MLkcgQxGLrhX84Ca93HWF6551ZckhuUuAKHe3defhEfYVuYZLQSWTfKnyR3Bat12VKu1LJ9wWogcLS2",
  "key9": "26YQwLxRjmetqF9wx8ehT8b7imYc4YrVj4burFuMs2X5E1WDfYTULH5388LTiEzUPrafshQWxRqqp7Hg1mYyZg8u",
  "key10": "522jz2ySAakbzy71WZVmZ5p3UdSEyw61TUBs7H3fcw5abpSBdFLP4Mesnp1fyrF4xEH77QfADJtUKpTfAo1QBTNH",
  "key11": "9MNczVgjQzwXvNv53j2L9qhi2ZzixsMhd9qt9FLJriYzTzUHgCcRPBGbr9vLF8VEvhqezRn9PfBDgk2kH1CE3vq",
  "key12": "2eU95WwdVsEn9G9ui3ZFc6yfcWFEjz7d68xsShsKD8uLGXBUtzUngXdYVf7t2CkLqYmZZiACx1WNffBWpsFzo84C",
  "key13": "4YTJzgwvpkFoK3CP3hhqXmZQp8ZridDE5P1hN12CEm5ckFoTx5ZPaqXWWjgVvpZpwY4TE9HnskXDwNB86brkf6nT",
  "key14": "5ccRRUAGuMCqrrKBZZ1MhKbd66oDAeTfEr5Hx576jAzuGdqkRo2EbeVWAkLkHSR8QYE5sFNtkYQjeEupqMmj9wai",
  "key15": "5hUos6CVWjwk6N3PdreqVpdxQptzqv5ggofWqy6PKeurwEVMUwaoMW5KB3hbndeZiBgHw36CKw3DnaK7wWCLaJpa",
  "key16": "55zDAApwebbwWL9FcFtJjRrAaCNVbyVjAwoj3oXULdD5Gmgpk6prY57bnzGAK9hvRQAa7gNnfX7o2zmAZcpvh5iL",
  "key17": "42GjkGgGNBvhf5cDgJtRuYZr6e1PHfK2dcMk8GA4LmwAWqDmXEdULwsDF5Tz7pTJc3oVmV8wFbHZzrXWyBXroduy",
  "key18": "2Dyq4qdUpFqFJJCAyAhrn6SQ8imKhZwc2QW4vjHWxjpizf68pKW3uKNuqBjeqKxhRybHewrYM1Y151FHyCe12Dgm",
  "key19": "4Mit7LSjgwKrYbtf9zdVBw4ivaW9dF6CCeDMzuRGWJEPpggCuaqwvuxbU8d4sDTyJvbez12UgpQyRdqvW3NpT6o7",
  "key20": "zcUjC4emK72sPqfCKd7KqHqLGWeCDz7zQTMfQCPvZTaoog4pL1EvGRWEJEKhmhvbMdeNfucdHZNyBPHtgzY5BaJ",
  "key21": "pFS2BfZdhCkLreefjNExX8wqsh2565yKzKqAXovoaC6CkpYNhXuw9S8HViVdmgokxHbVX8Q18Jf3oWc829PhcTX",
  "key22": "5goj7sBuei4eBrKundPqnJwGdUmugj6Z3NTtQn1NLUzhLJgf9But7GpicfT4AQF4c7GeqN43DYH57CnUbWnqoHHt",
  "key23": "5xQ1BUFiui5czTmg2PwDr8DyjGjgRQGxciawP5gBaszhcfJf2DLS5rp98hva9RRqvVkUrAkC45pRXP2gwGWWkEW6",
  "key24": "yToigCjF8ALApnYT7sKkkfNhEQQ3rLugNMR2Smhq5EJdijY5XG3cemLcnkCj4o2gpXqVPbZVLAqx4n7ZQsLA7ky",
  "key25": "2cfSkodxgABQfVYSvaS6XDTKRugaZpz4bvqUquUhk87WKsVQh8egKLXC7rNsNcLur45WxwuwFec1HL64pJ4muywe",
  "key26": "2NRdSTBEi1SgQ3r3SGF3BxRiJemj2BHLMSrWZJySKNSoMTQfoj636HtAE8HpKo6e3WXfaPTFhcNHS17GVFk7nMcF",
  "key27": "43nKfddnWGExdaY9EgNUHNQaxTGjxRw7gvTRixkJ3bfLP5Jvfz2r2E6rvkjF6cgz7xZqAgyhRwY7AdLvgxVTh9ZP",
  "key28": "4QfcbsAqCiGDGr2ErvNVWnA5pkjYkhZQ3bZ8sn5RDjRZPqku5ytDBvge1K6HUE3Mq6wyJjoeYbMrTZUEeAoCRSTw",
  "key29": "2niKsTjegi4FZZ8nGsCzGTe7yk88VSon9vSBGgiCd24gRYd9JdHarrqGVQVSAPe7CbkCZjDVtQWqroE1mdrb6QL1",
  "key30": "5VTLzuppaEwaA6tnL4vajqCLQ8dPa6tKfEeip7awGyrpwJNBoko65J2yq859Sa1Zc6xfu8cjqczdH61vwezhwVBx",
  "key31": "34Nd8efqantmgDouezrzwcEakd2QbHYAWVquHz1krb6mhckWWdUQQDMNEJ7HK6Saoo1ifmMqkPJKJExC8wpAPB69",
  "key32": "g1ZWo69YK24DMJW9qVZUcz1acVoJL6ETctH5JY3aNj2y5jF1Xm5QWRGborPf14GP8hn6ZrNxpji93GxrrGYjNws",
  "key33": "2EhodjSB9mB7Lw3947wj3dPk6MwJy6HwXepyAKpd1E8QJK7wat6EFVpMsnak5bSW7FAQj2Q8pVzuqowN31z7PdyF",
  "key34": "2ArptAqFYQeLTuxqY89siKmYhmmQxLUksanyUuc6nD3aqY4KwBY3BfVBPignFCoFwvshkguebwht2cquziMkYyQd",
  "key35": "3mY8p5opvxANpYxMQUBdshSmnfGnvmmuqbQTr27N97CmTxwz4ZtMckaAWQn95zm5ZEYTVxJjPQR2HjJR42oiBhsP",
  "key36": "5g5hzCCnU2CWe2tWDCWzQttvgkj4hGLLMRU8vuxrHUw3GpMgZBGwbPHE8v95L8RRaNWgnqQaSoVDMbEsEEFrTMQ8",
  "key37": "4zNtryECrydBNS3nzws1VnfMdKGhbD6Ddne57RPbBfV5LobACbxFbwvSV3XynthZFrn3E7hWZMhPx9PQFKeYjmFE",
  "key38": "rqGj9C7N4iLH2cWCNsQoidaoJ2Qby5TYzdUDXz9vHLznAG16smA2CN8b6FfwxqQpCLwHXcmRxAo3RVvBLEBbEym",
  "key39": "2ebfUkRuHhEJ1sTWmtvvpQe6igunLDobi5TT9MeTJRji5SueJ6FRpBmcm8X1EaKw9HWS8xWtbawQAfGyDDnHKmBw",
  "key40": "5Q9e5AyBnb4zp7GPiBPJow6uaSoFPzicvGfAhzwmBFd5ovz1crkeuwdw11B4wzxghd8QjTYJmXokqFbH5DEJrZLx"
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
