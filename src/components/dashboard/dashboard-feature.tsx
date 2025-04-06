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
    "368VSTUZKySrQByF1iEtvD2mNA2gk5dhvgXMNAB2JKAXoHy8FnS6EUrWcJtkBcT7YyMXwZGVnp2cAKMCPxH7quXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJstfymNcL5JnKgggj9qat1zZnjVnR7gdzwiGm6sFiJeE4cWA18YrL2whMD7TgVUAxn6E4v14M9PwGsQ5NcyF8P",
  "key1": "4UeW7BKJVznNGLJ3WZiZgGyCGP3uSFnjg3fPwEAr1UGBVWGktHpk5mbR4J6ia7TcAR5zUXFBL9ELW79oeK13kniG",
  "key2": "2VcTWH84KPvuQcChDw4FHvUyP8BrHLtG3FbKzoshWcuL8Ba9BhRsVv4jPEh4JtEjLEA7n2p5FwLGw1cCRR685w1R",
  "key3": "LnaM348fh8kbzgVza3wnZyfyn9DnbdFx3smtDvZNcZMUyCZzJoTW2ezA5mAJjKeacPaUmTWKz9am2S1mg4SWHZH",
  "key4": "5UaEpVaWHHzdVytkysSfFhEKjpVubuBFp56arUF81QSzNhxKhganzSUxKuzP2Se5Xf9jb7eQxKDBsReBdWBmKEVw",
  "key5": "Z2PbB5Hu9W7iv8sWBCVd1xYh1GbauS1LYgJgg5HJwAa79rL3VHGK6CpHJok3QobdAnrTba9pbqYxbr2HRQt1qSP",
  "key6": "4vDFEGNg7M8dZi8VkBnuf4ugnytpjs6Mbrn4kzunnm2YszTxZaw7aaFhJZgXZ7JQnEwJhTNuk6kVEfwTwoFRj32S",
  "key7": "55T6HSwQTPbwyNpi2HVCBdhFAaP2sZDQs4KNswHWuHpX45NYoXCZYcztJSr9QKwQZRcA2Ss3rRNATgXKe6rq8Qw8",
  "key8": "NeNX2yzMkY8eYgW1MsBpfgt8oYcmujgttcrFKeRBsJR3SHYieTaakUy6QUTPEcF3HuP4wsg7q7DXZU1LBrzLfNX",
  "key9": "4wdjkK11i7N3Skx14nCadCcT2ZX4Dtt9CP3HPo21WKo9eDKSoWxCW4AgkGvvMJpZkQTomjckHsRUJeyJh3dNBVUP",
  "key10": "33rKuHkzeJLrNoS5NfAscyhtUHmzj6AkTKeRfAkCqp7FAei5Wqop1nQCfWdsFXd8AUERcNzp4AZwnwZfjYb6BqLA",
  "key11": "5RMTYbAeGsGeeEtdJURmb2cuG4dvRpKbfryWHWRLv8x4p1ngcL7Lq59iYxGE8gB333TgqxB6tB7xKG7JQuvn9AxS",
  "key12": "4EuDa58751DfvckDNWZnLAhg59BG2UQkakq9b5piYvcJTKNhLuVZCjzcseRfXh2trRi16ThBnxWmDZzPrcbEPvR6",
  "key13": "2uTFKr2DKrj1eVfK8ydLVDhFM57UF9BqKwWQ4Fie3nbQJcNVffxhHeCKArBq5UADVjtjaqG2fi5KrQNBPW4uZsvB",
  "key14": "2D7LkYuaJRjeBCvAqZTxGxRjB5YDzj5adkrjiKVPjuu5wDvkC4XnT6Sa51pVMqWrmD2aHWABivNQwzzdWqoP9sZD",
  "key15": "3viVgJpba4t3x27ZoqNYD9h9FQweb6QQA7RVjt2eDm6dR9BvPCNkpQBwxUvz2gEfbbSf4okHUMf8Y1DXbfZMRi1N",
  "key16": "4y7sP4ZsnHqWnYRhXTpmALXnXb8EGns6qc7R7JC1xsRrpPyXaxMVYpAUFfXFRY51mftes2BRtUS8MkSk1tCC7paB",
  "key17": "4D47jsaAbXQysywTJVSK8io7woWznDuDx1BGZ8ADkRMuYRHZk8pCKRYZ9bQXZsmuoiyRsUHPP1K9XPSprsvBcGzu",
  "key18": "TbwfqECtez4pBnzgfVZWCSMFJnHjF8gqfuYLaWTfDSW139LPbdYCxhgbPtdHCLDkGpKdkayMDSLQhQGxrDmpmcT",
  "key19": "2swKR1NVp7m2KGKiqpx2c77Va3bDyo1qQf1iXE34ax9UH1TWiMQ9uCXXXSmKfAwTC78tR2oRgmcB3rbs3KgvPoMp",
  "key20": "28iVm4p2RpGwLPybNqGqdod5rNWru5PgBkWBhXbKpoE7g1TEFa1m6GFLnvWDfNiR5QbFfBLM9hQ1CbPyLysqb4x3",
  "key21": "5ndAteeV5H8PpdHQBmPAqKrLdn9dQEpo7SJ5Uw8unFumLEmVSJ2hu7ALoFSALiYw6abt6KSLHjmJVqhHnDoHGbU1",
  "key22": "WG8Bn4PbBRSyaEw5KHNmD7zFLpXJoRA5nweZbYHypkgEBsbJzQFkaqUPaBH66jtwo8kj9RT146wsQgSE1CS4WX1",
  "key23": "yAEgu5fspqRjhKXwq2yzHo46ULXp11nDfW1G3j8zVguyQdhn4GsnPyCoZALy8iE4B9krsaFC7bS3TfGx2MpqBEG",
  "key24": "5RYTGxC1aajDRhCWPZTcmmtcVNgmHh5YmxARV1R47j4nFCgXfjhy4DrqRnxnXAh6AfEq4RxiVaEKSNgGHFjAmi9G",
  "key25": "1P9KsS9jGaeaHLmgQLrnURAbqtYZGhPUwov45czogLwf9LSeLqD7B4BM738ByrABruNJ7wopwzracekHoNKfWRG",
  "key26": "Jas1dB8pqPxren7mDovJayTLLCDHfJmLH4UWoJpdV7NWuxuTDgFQvsgGhrThQxDz57vbCXB6bYq5iiPQeHNhxfA",
  "key27": "CeuyhwA8EDk2Yzk5ppXnRPQZhsf6mP3vFptF6YskwkT1UFS6NCJnmoXpH9Mt3gEf8imqpnPCtuRCZtVu3T4cSG5",
  "key28": "4yRMVrb2ATtbDsujQFhMwCqTMwcea7QFE73agPuZmkNn5MAmrd9rK3yRZXoUKKTWojZ5vad45uvyFeyU22NZTtgP",
  "key29": "2E9ekuJ3YubLB4eR76L28DwzRqbcWH98d4HewazSKFkEsdWLuCRBZkKQ2yDKRUtHczRPHSqY1RgWfWBSSzBhp31c",
  "key30": "559HUWxRtvUDfbWsH5g6wCtikbJ5iM8EXhe9vvrLkqECtzXLM3vHPGtFbE2CJXzDGBDgZ7UQsP3gUM26zqunNGcR",
  "key31": "5GA2Ta9XD75bURbnLBbxknofQXrYLSUNJUjbXWNUacM98RgatXriroDKSV18fxqLUNc3RrUwH8GcsPhiU7jXEmef",
  "key32": "5Kxt4c47Gy3zw5xQPatmw2gUCcXHzNmMbpFXcNyxaYjdsrB2QSbTMxdVCYprhH5q8TzChNkPX7ALQWR6necPWBGx",
  "key33": "32Lo2yiSZMUtzMhQoNo95wPL1FvoEU8f28QdW42AeS7fH6EKxw3EW8L5BPBDTUi6AGjuQWMrhnWDumNihzLVjC2H",
  "key34": "3YtM8s4Lxb8vMraaYCv7knwtmo7aCAcKhxBGXUwWJgcmqCswp43JDVLLJq9LqREecS2PDb3gVSKXa69LRYSWpW9a",
  "key35": "3bqZgDoX5xtRSmD83mKnrHJFZqDeYKWsxRgFRBp98DCde9tZKBd4SbR1rtCEgmPv33qh2wEpn12CDpoV6dviJii3",
  "key36": "2jQBugbzyhJUwGebiBfTyM1CtiQz5nHs8i9WaUmZPehWSarhKkNrK3zrMkjnZrsFRVRedUFEAteKAVxc9a5i7eyi",
  "key37": "2o9wMyCV2ScRLBMF9iQFXaKHhJDRdacAUW94Abf2FioXgJ5jeHvSVREHQtZCMvfv61GQD2wJwLjrqNgkWEhKQod4",
  "key38": "jboRa89UjQ9UNj1tTMNSbswFu38b1Lj5ztUPShLmGqqZD6Lr7Lf6PdyoseMMZEZH8sr9rYUMCZVd32mfaQU8fsd",
  "key39": "5iS8d7ckZUTTE23KCsSRvK1SXozHLaULDgWmhrNppHq9b2fdepoUmaMU3moKsHEQcDbRaiguic4beKe8aKY7H2wi",
  "key40": "4WB4uHkR4WtaYWuo6PGQwbVGgt2Ckkj1NfDjWNZRyGmgy98tVDsMH84dTPha3ZbuA5bqeWFQ8y6XLYsuBVFv52rW"
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
