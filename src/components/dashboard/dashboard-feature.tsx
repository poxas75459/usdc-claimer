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
    "4vBhQWudewg1iyHBMk9C7abSe3vYhnTXdnmjKHeKEamgGo6DQH2wfnadvK6ZoTdg37fDCmohn4PUAfcu4RAXkkmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfc6T6hrVpwU7zmddFk4roXC1jKU2cLepAyy4x9k7fU9ZtEYRoXUAtUAsxEfX3Jbx1Emp8Gju9HUDxsEKbzL4qm",
  "key1": "4KknxaydnyaaZRefxRVqAxG4wx9TbmV84ywbwvQUM1YM16eZwKZVW8YF6peqXLBcuoexTvobH7R9KMoDnv2KoDm7",
  "key2": "22QGwCzhMoCK7GY21jkgmJwyemU8WKtnj4rUtk2rcJxiY3Qsnri3C5n5fzW8dJ56nL4wtvX66nqayxdb71RJMVu6",
  "key3": "3rB5eQxRuobatERuiMK8Hvw1WJbHsTaNkt6s8JLNhUxkV5YK9KjLstFAoobWEMS6nCCDQUk97a5cH7XvKMxHgspU",
  "key4": "3wRBTBWUw8BDgzS65Jy6XyXjukkY2rR33DKNMboXjANSX3wvHJPNxQFjmo8g37TrCsDEqB3GPHJdQrBwQL39wyG8",
  "key5": "JKfVZkwYe94nenNBds799DCRBYXxcRiadBUYPMLk7PT46QRCuJVFt5WkQfgrbuphWC2RWmX9FY9uKmwFZAKbarD",
  "key6": "2qarS6JsP2hHjnFyjfDrXdVB1TNq25Z534N7q8LaDct6Xv2MrfrHaScDbckhBoQQbm389sSu1f7cCijdijj8iRUW",
  "key7": "4YQEjq7CDmWvkgPseoVcRCP5JNMedavob4D8rsd1puoKjETkztSbR8PFVeVjddAsrcEwAuF2GKUpp1qgRSzJqeU3",
  "key8": "3zc4Em6CVUrPCcjPXkwyvyVEKH32QXgUjAY5yLQHVqVfptgFW3qxKcndBa6YSitQ3JFYkBoytU51TnC8XWoq1AZJ",
  "key9": "2vNtNru3VmhiJPDjDLGWqfBbM3BcABd2Bo4daM4tTpyenGDj9feecn3qMzoHekKjHj6XyhQEDZYm77zNLnXVA4k3",
  "key10": "fNg2wQLmPUFyzAHMbhM8kDsSUhG7CVHCCYf5Xzs31egVPMkjRms5LJSM1iVYVcc7FuB1PVvTUoTYCzC5RNDovLD",
  "key11": "574xR4fuSYrQczjZCGbwGRKA7Mrue96cfwrr8dCmaszghjWbExzN5uomZpF6ndFA4JmTFiRMSC7WNq4SZJva3afB",
  "key12": "2CvaZwEHiUXjnqRAzbJYSUEZpGZauvX7Hex38kWPt6JDcV7h6HP2kvgf1i7RCnLTQr7ig6mccBDkgMDEq9J7DDQi",
  "key13": "4aqbKEhdfDAX1M4HTUuxMWnxLHR7gC2622J7qth2XtnpttfMs27FGQQvvQvRQusx7QNJWAjJZeNYzkLWSrxQpe1e",
  "key14": "5hUFTd2oJNc1dxLFV1LUe21PhEisUATdKK1VW5Zpcci57LEws2Zu5dXP23ktb5Ydwmn9DWQW91bApsbVcuRTTcea",
  "key15": "2jizLJ4VZtMzXchskXqGQihBhkVg1wfJszFZ1gcKY6LKBMMhCus9siM2QmZDwGfhLLPiaRqbC4DQ8n1A232iRQx4",
  "key16": "cBM45MHnrsNrMxnkdf4KrD7Xcu1rEijUhgf7LoW7EzrPxCwxHWGG2fAHpncyWnJDWPYJbqQeY4gkZb9v1QmLLJK",
  "key17": "1TznxWUrjH3acEixoGNKz3Gh6HQPwhrZfbs24gsgvYFMQTCAG1JvfR9wDyEwkkCnXbz18H1SoVD1tgF3DoU7fTf",
  "key18": "oxetNz5NgCauu1uqknfRakvgnCrYoeVYgutYPgCycx81WuZiUDRRpqp5Hqtu1eYPE2GpWEvF5nqrukT5ztDQsmt",
  "key19": "4JWCkrsU5RScQALNgWo6oHPNSK2fHQmFBADqkvpQfCz3yoDYmSaTecJnYDdW1Vp3rCTwgiGApfcixKVaCbg8q27a",
  "key20": "4ZdjaSY2eDJ2SKgbGLtvwCfdnswcFwgu59hnLzX2nBwbvAZePbFx9g2ERNxZFQVp7MJiqfbBGSVvYALeUoNQzW8W",
  "key21": "62QzuHzFiaQXcm3YYgq54aGW5XSrQ8qeXsSaCeV6CDbRcJTeZ7CzRRpWjkuAf4gSepojqt8bGrxTWf1dRZmNAuEH",
  "key22": "2Zu2d3icVVMFNUrk2bh2k1L3gbexVtEtjnmXCEFbHPy3yCTY83v26rwMLqhh4nSbLMY8ATTGZd5NTVAQkDsDCunQ",
  "key23": "3Lxed4wwGpYFhfssrByn6QsTjjcaUUXDNBJ5oLPd6b3fsTTPrnrHHABTB4Ah9o1YqxFou1m5UKGRtn2154xQHHKf",
  "key24": "62B7c3pNEHqDrsQnYe9bmQdgQNZy83hEt5iw3wsMwHKjfsh6VkJuonNjDBUumd7b4jCfkjqbq5aEY7ibsBqZ31op",
  "key25": "5JfGbZyKBdtbgQNtFAhpGNooYJUu9wksTLQoqFMM8g4hHp7pQb4Sk8p93PAdMbFQAU32KNVtvoqdQuDYQHmQD6Qd",
  "key26": "2DsAXqU8w9nh835Rb5PQgHhCMEBnvZubsR1FhpdsmDiHDkHiKBZTirohQZz6X8Yr21z4KtWE5VkVdisSNucw3hyP",
  "key27": "2wR66oZmFiVA1wBZMA9GAZ447Md4878aXqo9KjRAnVbUcgqt8GJJ5Ex5AizA1ELufiL3CfExEZyM7Grrf3A9m2vx",
  "key28": "4CV3yXoatEjEz53gHRTbra6tzJSb5u5FHKUXsVsxVYa679va4AESmvsM48ZugQ4Dvv3qagZsjokfDqPaBPnKw9h2",
  "key29": "31bwUUhstHKpJdMUNFH4vPKnSWk4csDrvNbj2eLa2M49rdhbSyiXqueH8CNPYykGQD6HMkGZyioQpuxZt5A7K2PJ",
  "key30": "5EQfHonhf9RAEoybxMyrfrZft19w4KR6QuMc1d7SNvKcrGPmdy3e7v2Vzif8LpVK8ygj5s9SSrYddP8VgAAPvcQQ",
  "key31": "3Lwb8sLyqETLgHNFzpy4xWhGjT6MgEMDTbdNzC76e9w85oM3gEWjwKqKWv3XkRjSVDUjUKqZs59cAuuDNh9Vzu4T",
  "key32": "512r7xq6qRuupqM7M8RB4HXiVFmmtrha2b1EAyvguSbxKjcqiSMzgGDrKvZ8znseV4G4W1KjiwkLjpqb6qjFTuvX",
  "key33": "GcnrnVw6DuEJDdWA5sULPZF7up7gA81GzrCEiYQzM7FtwCJAeaHMj5ocBvqGQXZT5PNJeS7cVqunPAn4bMhiFim",
  "key34": "2PaXzMNpDCatr4AU41qVCZyE5GzD1uxVWrE4q2jzdhkvB2LNHVTj86VhHVsdu4Zm3igkn6tXnbaKJxxuZJ41wFEX",
  "key35": "2bHyz3FNda67dWWM5Qus87nE91bGvXx9CZodoNSnpCKoCiam1zM7XhHyHCHZ5kSGW2teEBQa7AZ6kjryioKmTNth",
  "key36": "3P3ttRoRfCtA7ivkgXcX4KkhV92H3NFaMu7zQG3Ruif9unf2TA9o7wk9jhLMYyJ6WpudeWfARG3GUFmAkVAy7o96",
  "key37": "2h94gwqX64MJ62ui5STssfcTX93vNPkbALgPQT3Km9BWK6QmAuu1H7ysWj5FFhLBAvsfrchk375eWzm7LbzdGFp5",
  "key38": "4hbgWh2zZ3NrdE6bMYL87WB5xhtYtHoJPXzuoo5tU2CVy11KPzBd7Dcd8XW5wsGdrzuYnVYJrQ6DX1M311myCe8",
  "key39": "5R8yMgdVkB5xXYSnsWAcrhCohy946DVZTAr7KuAdJtivjbnJRNCsYXFbttCjM5gF5RxkRPmn1zqLDtUE26xQK6Bo",
  "key40": "5QrpJ9UEPMfnrp1b8VpAkGU28PaM2fkffNkFNYkV4ee48SWxUGhNTHniKTx37jV67fsorc6TLRFQxcxxkdAbC4jF",
  "key41": "66FbVPtfUPRZDYQZ5sHfNoDWz8fG1XacdRjpvNQGPPLj2UvLDMVbwZL1RNSxvN99SCoyUANWb2ox95DWA9PJ7kDG"
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
