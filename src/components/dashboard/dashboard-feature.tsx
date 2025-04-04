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
    "4eNJejfNFDWtKqE7gjS4d6K2jGD5HDxJWZzfd7mLrQXtvEeASe3jTqn6d9tXnDDy4MBB9fDcwrCYztjBve7xhcMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pUxJbURrX3gySK81VS1Q6Axvk2Be78BfLTdQSDBboAkfkw4VBQs1s1ABkNa58YeievSjAXwnz9TQnvw14mbVkVL",
  "key1": "2eu31fSJtSHzzfU4x45qZ93TyNvd48mM6Coyre9yku64ixKdkrhHiiwTCyfc396T2x4o4Pt9UMLuKWWxrXFmZMrc",
  "key2": "27ztR6io9end1CAoNAJ7LU1yi8PCAP27Lq1GTEpfkGWftMKSWnthpmCg4dU2tSbcarkL41gyN5VRMeoVb7KrUXuy",
  "key3": "5X9xquFeGK3yBzwW8ywXv5yHPgfGfhYMoDFRcKHsMc9ttpzy43HETWGCQARJ7B2XH1Paki6RFWruC4g8bVE3iaVn",
  "key4": "3asma3MzmNLM51uEDZMEK8ecCsyezDQydCSQv9RWPuDsuApe9KEYPr2Ax4tyb9i19hcYmfHcyQsvqUN8RZ8XJMTM",
  "key5": "4MVscjQrxzhovyGbFCsWBzWBXJaB6s5N79bwuD1ECutVbfopSjFDzi8zykZuPwysXLko6rjyy6QWPtWMsN9UANt5",
  "key6": "4PCxyUfpbzdPk6K27MUHJg33z135KUJ9ogp2Nmp4uZqhf32FStn3Hb69wqXmjjxWoyuALaAUKnneVTx1BKQfnV8a",
  "key7": "5eBYSsWvPLfwfATBtLSxNGNGP6hP7jK43KEddSUqp3B1qJTbrk9Bu6DZiTDw9H2qwLNR92iUgCrMkBgSBVbYD1dw",
  "key8": "5MTArxY8nTzGdrMX7Quin4DBSsSujF7wsuxZSqoo78K344ziGbhRC6p7JPTKEe2JFZnd4Aj3hajMQDw5acfuBCAx",
  "key9": "5AecDrAWmWtRXEpJihxvYyhyDWA55Che5HV5UqTNBb66mGn8H5JfTURqJLSin4uTCAkocvvPhr6TC1WxJJe9Ss9L",
  "key10": "zg9YZH63Xx67j42GiYRNNWAFM3FZ92fWxY8eheLEcSsymH1oNzJfdpDesfJRgEJ6keRRSkHuT4vbhf1oXAxRc8y",
  "key11": "2N1HWxGvuXQt7bfCG6r8tpBVr34NApSgD9bCuSh5MSjEDjK7sviy8ursFzrLiwUReqJp4a8hoRrGQ2C6oqaTMNcH",
  "key12": "5mHteCUi4G7fjnEs3A1vjg9MVkjzsETNpsqebrXEL5GR3qt5KM5m6gWgfo3xPVBchjswKNAT8FU2CpRWvz2Qjgdc",
  "key13": "yAb3HEj3QKNcod8gnJa5KhJwTVzvMzq5xTSPXvHvFeayMt5o7xJWuEMQDLbsocYREpQfhh9eMdcLyD4LP3JdzYR",
  "key14": "228eTmygs9C55ntinUXEf75VroQHkjizry1uuBVvHPKZNGyaSqDtncKmuw48V6pUh4etgPb13w7Shkd3LaYB2hyR",
  "key15": "3afHVB5eEoMykPhSsNfwUjhu6pWnTDb8U4JvKca16s8ZWuHyZMYczTZ5xafcfGRvpM2JSGCbc3LJvXQJhnvRdqBi",
  "key16": "2WLR1BvoRy9EhBbPWP9bbfGCH1MXvU2hPeQMVVKrvqn6xdoQn2NxKtGoQ7wHWzSNafHDLb76s5neQDUSuyErXCLD",
  "key17": "384LnyR8whdNRXPaE5gfUtCQod7j5iZsiUjy35pqdWGKRzKTAm98RFNoS8qR4xtnegFJ6LJiQc4aNu8M3Pn53B4",
  "key18": "2LYqyhWgZCJ3axW7fDMPF2R6usGcMTezGsns9fS6ZF7MmquqVohKRTFpeT1YcFfPhyZtutUMraTEvx7MTytYcy8w",
  "key19": "32AQ7cVoTXcrpU6kMsAg8cfoyDC2y6xf3NgFJkqd9pbhEwQGVdcSZtKVV4t1NP49QvsAfK9F9PkXe8gGd8VZH1ko",
  "key20": "4CnLci54GjwJeT3WZJk2VUsfDwR4e1Lqn5w2fpv6U8zGwvU3gY81FCezLYMrmyiWmfMaJzSwBKD9qJyePfWJM9pG",
  "key21": "5zUnifCanjZ9eZyuW2Q911dAZJ4KxnY5yn1BayMVr7sG2p1e6bdq2LzfCQ3NpJmVKXFZNYuA2hngZhijeZiVgTvo",
  "key22": "2KpYkR5tnM6bPJs45wHS6TnBRwsoQSHSFZnT1X67x8fp8Udg9vMrjcxPH4nLGLfbisSHZo6oeYFdkemBYf5vE5BK",
  "key23": "5prmjYkdc1qHKTL1HGPMbAGQnGd2cqRmf9uHDWDwccgDJtArTuntqsc5GqbKv4c5JifxjvvnfWHpMRo7BjxokQdp",
  "key24": "4GxUyYrKeuminNoNBPMzomeBDXzu4sqgS89VqGYFqWSghBNMLqbv6Ry9th7uzLximH141hFWh6kGmdbtrjVZ4hXC",
  "key25": "2Hm59JQ5mCUYhdbPWhPFXeMfDendAU11aQfLKxqBzNouB7Qa7vADxxxXhMvA1WyamtxdJ4kUEH7VnaeBVU6cZRp6",
  "key26": "2iNw6bUe3RNJprFLqAStYKVj4QB3whZGMu31TrFKek4uzCpjf9RQVb9BSbXKSedUTTJ4U5WN4D6ptLWTgafnuVnY",
  "key27": "5y3zA61zcF76PWCKpMexZe9y4cMqUUNd1DNxKmAYd8sANeVpAr6XZHKrYqXjX7FocCyFLiwT6zXNLJgSEhxmhdsv"
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
