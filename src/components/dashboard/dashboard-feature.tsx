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
    "4GTYLd5SiuewmCKgYxiCMxsZoaQ5LEyigWCTgTTEUC7VarP3YChEqx1q9k96SqJQ9gTKm5ogu5XhVJcBjhWyDkpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JrNZ4wCUbiM3kN3zC2ow6vuXYgn5VGhxWUBXEwQ7uSQn1b88zmDRBSWxicbiujo7wboh6YcVmqJwjUe28tf4Jzi",
  "key1": "5fmda5RWd3kztfT7wwgMg5PsWaFqvtucbFiYHVR72QctiWMs6zmbqKVzZLSSXnWQu44ZjxAwBd4m7R4BWXkuqzou",
  "key2": "54Yoea7yhshG1BpLeRcX64epz9DaR7b68wgxVR2TTcNXgfdGih2pGx2czf4FboXQz7jTQ7pdkYM98AL3UoiAiCuu",
  "key3": "5J4w5zEwuXFGRMuPyuxAZieMG6YR44FBnFdDMUBvcDtTPzKtpCQUKa9wjTZWoRKkQVQyehw4xDYMvWq3TiBP7HkV",
  "key4": "27rsRBAhfPXN58LLAVAme4HzVBmhngc6mYCmhZuwHbh7ou3diCA4S4PCjf5fNMHWEPD1QXK3oFtqkG4NtjQHHita",
  "key5": "2bYGzjkJHkX2mo8EcyukB5RL8RA89VNehs7Tb375suDqjU5KNs7JguyqTw5Q4PCequt82yWbYXQcc7JDycTn2XL5",
  "key6": "3sJD7TaxHEQenCg3p5kWpWHav1aouWfz3CGXoMtegTNCqXfUrLqqHXytiN3L7CPouKAcPsVYT74GdvWLat5jpKt5",
  "key7": "5Wcd1XonVfYpR1MzCkSfmauD2Qsb3wFDVRXzvBqJXxXDS34qguFtRjeqJHAQLFnheqpPXrK7iM9uUX2aKTuzt5mA",
  "key8": "5MGMaBYd6Q8ZNzHZeqnKjhfq7rBYU4YDzhDWDbvBph8JtFVVN9MJiNT3j8MudqL4QNL4btnYaUTJPL8auqSDxKZV",
  "key9": "2MbNRT1DGcb5SUNzr5tQA8BbLVr7fFTy2aVdyCXfyeVHeCHfXuUUQMaKeeY7py6nrhwunsmCiqeG3ZW5UxVFfz92",
  "key10": "3PTxhBV9faRA839kGRSpoPgqU1hH5AJjAcgQ52WowGePP6zSZJ7b4wRkz7zSzXT93ij216U36duecRaZS7Wnm3MZ",
  "key11": "4bVgB1sierm9q7XNci9RyT6CzQ5haE6xRr4PausUTgUAS71ULCmquDdJFVayxEePhktHNdtodUB3v2ajjkpUR2pp",
  "key12": "5UhqoqVRGtZ3fQ1r3YzuhL4cg8J2Vk9Em8BqqzcwWiVmesnmkWUw9WDcB5Vaqf8F3739GwtKyU4gMSeMVGZkWcaZ",
  "key13": "3BienYia3m6Ynox1UMQHb3GBwLtXbQL4fBt4ZFNaEQSq28GjvHwnpMfM4sg2CJLmsotXPkdLm8vtdakq4q4XzfgN",
  "key14": "3SUnq37yq4kFtnLRA8zsKkmNysXC5Hvr4xHco3QGQTJF1JyuggWRTf2RfHQtyEerT2A2kYDQEbPuEfQFw5zHyz86",
  "key15": "2YMfVpRGnV6TBm2Zy9h4fsor5RxwFyuzg5ikrEtWAA4mucrXUdTjbRLaviMas5DaTKZMnsT4QhVybdycEF1s2g81",
  "key16": "5eWoiuyABFWPHMhsXpYq8Wk5xUnaJEZ5xVzwFwPKF1cEzxHuaboMfDSba4mnJYuG6Pr6iVvJSrEE8PtgCnN5FnR2",
  "key17": "2srtZBW2tWn2oaUjcTKBRSbKG6vB7Kn1anLz4EGyn4Noj32s6X62QFSDNNWr76LdWWwLJnH6fVBVeW8bANYJhPid",
  "key18": "5gLm77uzhF5vZmuB8gecG2HWvwHEk753Gt4KVPB4tFGcBhXMQnroBkH83o8eaZxc9u3QEjdKu5NaZ4K2nfD3Erq5",
  "key19": "4sdPG3iqcEERgTKPyWRB7JMncjKb6ucxA7bR5dVD3Jxks2Mwa5Gr3MCDmG6yKJTWDUgCJpTmHwSjaUr68qyHz5R5",
  "key20": "2ku6Fmi4xvbPE5hrDhGosYvSHDVNQoXrf9BX1qH8QZPJWKAPjKmtKd1CCdrMhuG5HAWutJXxyrPj5ALJJzPvQ8gQ",
  "key21": "CwwaRPaBqHD6QbkbxNWCmLiuYi61xvGqXKHLkV6xpNVHXm47nJ6Edxe5YttUiafVFc8xq9VQqorcQdnTtSHehjD",
  "key22": "61AhEwmnqsQ5vQYA53XDgT1rEzTeuMaof3bfhvvugj47B6AWRDV8zerkcbCdFxuj8hYUXk5pgbbgPp4wML8L4r4j",
  "key23": "32ESEaH98vqhAL5bNZyFGraMSXM9YfrcSEiWKNW2HKK8GQheUNkDPngSwodh24Kh5aBDQWsGWk94fhxjuETcThe8",
  "key24": "3uHHNDZcKDneVc5pfAvBNdvqpdCoaYbzhkbKWpvFw3C3QMPnF7eVD2HuUPzrywafVdsfnxsCCoo98BwPGbDrwnuU",
  "key25": "4CZ1Sf7P8UHEECWf3YHcLkSt7LLFpMta3apxFQoKT9wB3mMNhyHPW797tiFc8nuv7P6G6cNr5bd6DkAFY1DZFRY3",
  "key26": "2NRuPFKH3HpWEBDg3VNCFfW5oWCRWQcHFfYFUbLvxLvtH6zcetAceP79PMEs4cR4WG9jQnpHjSd5LxbfX8NzHnHb",
  "key27": "4CWM3zco6MJY3UV65jvxUX7VK1JkXzwVPHp5GZhk7k2LsMjFqTkcETvQgSeDsoGDrTe66755M4pYC28fMBCSBFeG",
  "key28": "2ZjAyVEb9m13Fq5bL3bcYAuPUP2hsjHaEpKff6GdSXx82YeXbKPrwdk13qyz3FwTWVGVXw3oni6TkGw1GwHRGLUz",
  "key29": "3gHLuqRP146DAt7cHczaQ8xKyECS5bGBSMUwAe9iNfWEVSLqkzCRFAt6p6RMW3Jb8NM7iFBuEv7x19u9RwfP1hRt",
  "key30": "2ZvJDAYm7hwfi5ALemgkbBCjhRXTA8upQPy2HYZtvQSgRDphLSwd5MiTHtPY5fowmExAkSGckFg6XNbjmDJrFgxt",
  "key31": "J9C6mL4aSd9Vw1izfLy4PciQgtRejsGmVzuPx87V55zsZSh9B1dvKkxxwRuwLGGDKoTzMqAGqqRUQpjVH1wyD57",
  "key32": "3mpTekyXWQU8Bf4hd5GeQRxTJFtBAWvwM1yiwEo9hsZ9X9w53C38s1G1JFjzssDuWLSkYM7Wdd7fg6WmoABeDmrE",
  "key33": "5ezgkY9TBcHaisLzLFF8f4FhiHuyjxJfwEgsDa9UCCLVVMnT3L9DbPb9D6fbctE4FSNFcfkCYa1hCMX4ddbfJn1E",
  "key34": "2fe7CTcLE65EickxEvLNmpqTdqxpxMVSwwDqEqULEhm3D8jTZtqTKdYtdnVxyoLUpwjoB7fXt3Z5RV6s3DiKqts6",
  "key35": "8aqbihGAHDFMkSp7HGrpoqMYHbKhjr9gMezTkYoAGgFHvuzKJw2oMj5xdbKqgFGkmoCvyfAdg2bSZgUwiA17SBU",
  "key36": "55rvdTxhCEaLP8w8ri9LE5fjyhkEtW9foMfTaQJ4AQJ6tsiXeH95o2hBJ9XWg75pdoLRezcJpuzLsZVbouvXbtBw",
  "key37": "4feu545xgFBVd3rT57Xcp4m4YDT12HpSRA7w2A5i8rVFtVosjDNJG7X3cqvQUPHTs1ULce3LXQDbVxc93Y81DGCS",
  "key38": "41hKHPQ5LKnNQRQkWQQK5RuThqTYXAxXa1mg85KT8Q7n1CNKH32yyrCUNVUsV55fXE7yaYHh7EutnSn8pxrgYWR4",
  "key39": "4SAEF9tvGqP5GCuaYmF9s4HgNPugePAG3xEh4Zur9vV2uaBo3p3Dw9kfL4wim8Tdvghaq3e75HsMF5c98UFMLZQK",
  "key40": "VeM7Zx2q2CdXmiJJxVCgoza2qxDHbaL5WqfUDu9HL8U1TYhtMghfxRHVc47dVmzVSjJVrN9nqWc5rMJ3b9xRtVQ",
  "key41": "4fFzs2H1DkKaZxiXrDQDQ3jHLiqhzaruuk9iUkMs5HggP841XkoNhyjLqsggBPGJo3hgRPiBtfUM5jLNKuxdfPkP",
  "key42": "xz8YK9zgABncuqJqzEqi8qaN689oGSmkpCQtdfPVrnUyCVmmXyS8Ths1o4h7jRoLsAM1RvK12z5CduSErWHVKsH",
  "key43": "4J3bz79bkbAVxmvadFJ7ppS6BDZ6EVwrqCNNCJZNMAagH5PBb6tbriBoT51mzH4jgLNHpAduvarBiqTRzWAyPea5",
  "key44": "5mn4emyiscoRdKaMKcMMrB4xeihMwxFjAebJP7vVUVDidjJ3J2dWX6cmumzAmFw7hu7ovz1CrqNAfp69XjeDuy5h",
  "key45": "4bwfZMYvwBk2eE9gkPxbnzJYxXu7mHhMfoA4HcJ2WZBPPZ4EHTwMYvLQTM2gYNk6EYUKDtCAUtLN3nGkyZmBtDea",
  "key46": "2wjGgoB8oMchoivxZqjmYVuzcW5kYhZRt8o6mDDaNGCLrEignsdL3wfod3xAQCa8qTUwkZGNgfH5saEJ5zJdD5rG",
  "key47": "49VjFmVhgLaGafKgaTK64KSDXpBj5YdcxTXW8qfuVR5CPXeBLBc8yspRdBgjKW8SBYmoAg5vD2Jo2RQZEUwVYYkC",
  "key48": "DirX6Qrt52WPLtVWUA6jbu4Fungqs4wNG6AKkYrUgujzk6RoW2hJaRAGagjpCtxZavFsehFQAcJcheafgoKPNvA",
  "key49": "55YBKPEsqwenWsDqYVBguVCLrrk8DtA4DXCDx1KTtqqbBzX21smDAxyRYnZjtMD7VTPM1DFhgjVRPj5VpeUXW6re"
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
