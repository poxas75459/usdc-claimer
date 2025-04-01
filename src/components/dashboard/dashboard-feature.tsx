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
    "3sgkTkEojXCwd7iXK66F1mR2bXHdZuGF3ZfZqeLP4dGEbchZes85S4YFbTzRvmrpHgnfxacZew3PACF37pggwWox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56dYqHEuwHLyVAef7LAFAQ5ctxLEz31cTR9iZwwiNni26mNaCWd5wzbnmL2ssYfUNthP6rcMnKWq159q4J8PfQQp",
  "key1": "5gbUG1TqeZxuMXPjekciy32NijvKsXsYR9JURbooeiZWKRESpsdHwwtk9ELETSj4ZQhpnHVvyXPjoZFMjeRywa4Q",
  "key2": "mFjmJyKpctcDiRX3bkmVccgT5XQDv257PSCfu1d6HirEBsH4qvQyc3c2F2bw5m1WboxkXUb78j8R9vBPqUPvPWy",
  "key3": "2yP7k99bWD5LjMviYXf8wAXmD4YvjawTB5HEA97XiiSjbW1iFTX7Y5GFvgTa8ATd8UEddthakmk33QSBux9wpLmF",
  "key4": "5PXdavt4pHQsV3myfRNuwCWTmN8pcw2gPUD6XBeiuBd7casBsE3YrZd5WoAv19CQH9hbmoWub4xuYtdEo9uTvenm",
  "key5": "iVKataRDFwekqBRH1A47XmjhHqHhzvkdLihzjok4Bu4Y2LCxoA7XsuaGYoEfjBsvC3KnpHoBdkwm8aiFk5NPtBq",
  "key6": "23f87mmxkmoV34dUf47C93rQKCJkzfkPXk6fbBk8xA7EHBy2ujBT1cEangYQYGUJLjDeTXoVTtJ9hgwKKC8jgSP7",
  "key7": "26HPKzugEhp4A5NFKTaAE9Yq2qEFyw8mFvmpu1UQvrBW8ChWM4acacb8FrdbA5SJLkoejEnYBcu92Ac6pyLuPoxQ",
  "key8": "2fVgMwjaHpBUhMjnwqiCSsoBvCoXKDToQqoQwUVdm2yiCkuBsJV5E8etHG2er7p5gNVqn4ggyVwEBTQgdHMAf7dV",
  "key9": "2rgGKHd99YsF5rwieyFV8iCmDGCiHET6StCuv7F6Y9bRLMoo5Ze5GV1HE64ZyioUWoyuPwEJxMYzExYJW2VUbvCy",
  "key10": "Uaxs3tCr62u7f4SMv97XBWVVcXqJyscM6FgkCWhrSQPeJzRYxacHrmJxzP4ETCzsVqQUdNVhkD7qNHwVowD9ZhG",
  "key11": "54pXF76hjHaGC1SUy4XwU7nzx2ydUSXjrXo4QAWfVDLsgKgUZqZRQuMorQAjJ5gQDbDpruuv3Ye6YiADqRW5bQg7",
  "key12": "5jAEb7B3tvRJ6gnC57pxzYyBAuttnryKaNLofUSFycmssgur74vXfsT7qkSM7seeGVDYWNAi9Gzvv9ww3jE7GHzX",
  "key13": "CkrT6Z8SAfkPqfaB6hZuGpBGVYRFQ8w2thRFjdEnN3GBTZnKGZRGn7oKZ6bG4vDfqUynjr61fjvqgj4VsUqPDVx",
  "key14": "4vYDE8r9aAaCjF2nyHToQ4QHykBUJyaaZzdP8sPZevx8BSvjUGMnLLkmSZq8i65tCortgqKWuqP8Uyfr7kw1eoRU",
  "key15": "2YLHiVo82ugv3H4HYnfsVLh1eRY1RMQzgbJFGd4NQv79pZk2kx1WZuoSXMrqs7MBA2LGBZXugKyZk7uyABmyEpnw",
  "key16": "5ViDdxE3tmWmb1nHRqFUcPLAAWPJrimn5GS7H8hqrgGoTLLGJXiu8rV7UAD2CFUJMiKBmCzzbEkJH7B4xQKaQo9f",
  "key17": "4NhscNeVsudHJgKgtyum7TBCwabK7W8xV9GQwxQdzxJPZkhADyihzJ2aN8BvzsGoc1p42SGmr4uJMESsnSQiU8CX",
  "key18": "2XLLvDs96BMKQjSc6PBiFdUM6Zi5hEXW5fqMFsjT4YwoP7h99potYNNeti7Vxk76zYVYTZJocehEqDauLi14zL91",
  "key19": "2qJYyGW3X7hsMpANGjjZDGwxCeEvhL1cdoYmDnDwJA3Lv3N58SAAPwfwaCd98XXDxL7ePUDywmW48jPbmXcDZMKw",
  "key20": "5HKGUYD85aHqHZ2FeqxtsHSb2FrHj5LQnrUBp1C33zuPnyMxd8Qczs19RGco5ahyRnYUTEEWpj3gmvvnmd9ca3ER",
  "key21": "2tjsTDiEedNs6BwY4tRviBaaphMD4G1rQXyDk9qMmLfNFnvrbLky19CEYY9chefMGb888JZjZ7TVmBPJiZXHTiN",
  "key22": "2ULSjaAxUBfdd4TBP8th6kHLhR1u3rzm4yj9xHBw1h81UTcm5eHYcv5o8N2Vb9GDHqgnDgZwENYEPPhujEgcgP46",
  "key23": "2mwA6RCsoWEghxF48rPh1KLE9LhA9hc9HHVWchjJF4sdGjxR8wg4Pvn3g9smRLBmNcfeRfrCNauZnD5zAAoSVvef",
  "key24": "3hkhdDtErEdXkMox6DPZCZViasJJnrNSXd7YMEgacATprhpaSHazTRwqJanKG6uVGBByxM2nUZtRQci1iHWba6tz",
  "key25": "64SnLJ9vSr53aYzq2b3KCoS7LdpZrM2BYqBv8AKs3Nt8A1TmCW7N9xzVvWzS2JBH7nZHU7iPhdejYsc1mj8ZxaBU",
  "key26": "4hS12ok1r8yYq3CgFuzVj5XByEm5cdtqm2dGgg7Cy2v9MeYxRb87riVYr4rXsU5dHXNyhnLZnHU3dnKmhKB3prPK"
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
