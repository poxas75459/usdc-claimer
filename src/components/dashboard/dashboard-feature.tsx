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
    "23cV9ASN225F7G7HfBsX5wmiK45TjupLZy99cdsd9KYfjN4Rv6BVsNUZRJVATaH5U5vfPGk1YE2hyzs469hFvS2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "529czznKiLoYQd2E4tjmyJvNLQ5hvdsMsT8mraMCUZ2X5cCzjyhaRjtWPLc26dE2mAnPma5DvSvBSpj3YDt6g1EL",
  "key1": "2ZDjsAF71yrhwAapwdfVqARyMDciMgcmuBVHAYLon1qfyuLSzUFQSDZe9b9tSMvd1sqnZ1jib39RuwJSW21vbpfK",
  "key2": "57gCjqarXkm2yTZUCHffXKeMhHcShkpS5jFQTQyrEz6aF817yF1AuRfsGHUEb1z2bXJbrCWTuWrrcJddPEz399Lj",
  "key3": "3ebyLnybY62d5NvPo5p4SoMsmBXFgaD2xu7LZhyzoWn6oojsqR6QNpDaDPs3HLxn9zrLMg44NCVHMpZhyqbzzyYR",
  "key4": "4pgz7nh9wjGmHgMpFs2dQH5KXFzFPpxNyjcm8J8nEJy6B2FJFaNc25FrZ3j12kHs3GY1ZVHbWGhCWg63vzT6ypfF",
  "key5": "5BNe6z8qmkA6vDqJTKoFfjUto6NK44bnLhXTBw3T5oKaXntwgQEyi2i8zDpVQM6NB8sTq4zGCX3h1GyNzWu8oe7B",
  "key6": "3bgyU77eU9ZXnxcgYPpE6TsuFmcXBVHUgE6WssueaYZrDj4sbd1wZekLWuUeGsnmrSp8eXQ7JweHWDLKm6yc2Rfo",
  "key7": "5AadD24EiHoDZv83VBBFr7JjxH3Eps9MRrTF3MrVL8uvKpxpJDZzL6H9BYmWCFbKNWy2LLLuGwTpMbwgjHPHAzac",
  "key8": "4jd1wZJwB79EUcodigABHVJVJuNzEUscUG7MRod71GXgm4dyk6N2jTKzfqdQhjXoJJDJWCtRWGAg3LG3BRwg2vus",
  "key9": "dhYcFvxp6E3Lw3VoBPNKRkNjscxi8z8wKjRgPXG1DctR5Sdb2o984UTdsYJ8k1LS1oG7VDUvX1UjQ8ssBuX43fn",
  "key10": "47aJicMo7ZHLCMFzSri9Vba5QpsGganNr6GBAk2LpaxrntJUMtzxtARdoGSTmTnaDV3iS4oJTyo746SnXsBEJCBd",
  "key11": "51SsYJpheM7WXSX3FaAEmoi9T1V82VnJ28Gw7syEsejrYtRKE7gM7EtY7oLHsecjYV8Pwp6aY5pHQzXCZnUzzjzt",
  "key12": "3pQgEC6STWKGbHqG62QBHzzwtytYvc3R82sSgkFGmcuG382A9AGnXyHzjg5scfw1KanNLmbzpg27ZJL1CX3cZTXB",
  "key13": "3DnsTrUD7DrkBvT89yautcZ3mdLXSH8iY98gkAfFHatqN7xz5QynSJqKAPzD3tPXrHhKhEeEwoJvZ8HMRExHozVK",
  "key14": "bfy7kC9gn5Bu5g5mvo7qCZeBFzAxpNtqaYB58p6dHmuDKZ3Qnxh2jBtHAubdrJ1N4hMPDmckhwPKGA3EzL6MFxu",
  "key15": "pjT73KmT3b8V5qcbatYNdxNaF2coMCf1dcTFnPkYL57EzgrLvMBGKJvhmAXwDRiHzfC9bXmbx9ds4UVKmUJU7uf",
  "key16": "fqw9mEYNJVKtWU8JPwyNZxYdFEqo9xHXA4jCMgPtVFXwb1HXgtjZeVX3BjQ2nEvAhSjs1vSs4MA4ZPuzHZ1WvDK",
  "key17": "uWbZGhYgarPwMtJuo7aGh8ToWeDhGm5avDuSoADZnjqZnHVzuXv7EjX3cQBF47LLnDKKTZPg3gePdHjcsS7CvnE",
  "key18": "2c1T9XkekjR67YhrT1335gwp68gopZQdbgjRHCpXddSNqM6b6sGMs5C5bhNxbPete46FjwJkpNn2AQcM1fLZeSYZ",
  "key19": "5we3LbAQrLPXEy9NDaj1aGmSBT67XUZhSfdtCKUHxTBM3gWm2xcfJgn4bWY3H2xdurkKWy3tLpcpWLcStDhSQTNk",
  "key20": "3DPG4J8YidrEJiSNBWQAgHEJaE1hkNyXM9ybTfVb6hwVRYQ2f19LxzenC84oVA3azMax5eudcPMGSfYUDtD8CPMu",
  "key21": "2qAfT7qQ4nkPSceqtRdY7vkMpLBaaeU22DQLZeKVxwG4Mc9dupyfTqkFNTt7u3fikMzoAkNNcWM8rdDqc1jhBsrw",
  "key22": "58PSdTJz88ttzN2fnzjpwvqNBZQLeNc3y55s5kUziRu9gg8osfKdfdvofr5ydf48zbBJRGtTUFNjbmbqZDDPS1Qv",
  "key23": "5iNWupPg4SzaQcbbRLn5yjd3dRg8YznEjHS7oHYW2Ynm8jjCXNDR5LERFg4zhq7nfXeET8L9KwJanmJa8AZB5g3J",
  "key24": "2Zh1kvRgB7pJqLiNQvGEX3r3VLbq9S7TjZtdxqsPqfqjkjBb1v85Z3d5dEk9poZDunqBDMenvq87CaHVuiAdVgzr",
  "key25": "31KX6xNPTAYNCCGXLJm9hSg82y8gogpYp3Qs4Cg3ghkJya5idgKnxv1p9rs74eMcLsBQqfUQDZujUR9VdXQZm7ux",
  "key26": "4tnXQKZvP66giUJijqFPirHBt5nqdNunBhqPDjz9p5n6HaTiNZnJeT8UK66Qa9Mh2AHDeA3E8Rn21p1MmLC2HNZr",
  "key27": "4sbNAgeEb8N4Dvtpf8GmEobrciXs49tCrwv3Mg9X4xqWue5sMe9dF7kUDeXfANYUTXKgCPJTG8q9jf4rDCYevRUh",
  "key28": "63govGWrJJryxMtQDBPYDnkytnB99Cor2wN9P6dWq55pZgWgEs1gnENYnXNWX3KhJDyjcVHb7Ziq2AnF1nW7GQKP",
  "key29": "fRgupn6qxoNob9E74i5tScDE6CFnnQSoaDYgTejnV5Zi9Aqo9m1Ph25Cu9c1AJUgzDJ6DcPaQXAE7YBvAAGSvg2",
  "key30": "vRWsEeuPL7RgpNUPxxDrne4XjDWMQ3RtRkwwpQr1WboNRViz6QSuxbdpYZ4esp8wRTBtYWkdSuKGE2d9HBg16vy",
  "key31": "3bjDUXkAUtVCx693tSTjjr6qXDr6PEdY1ckEYqUu1Upjd1CS8zzfguXemRhsXFNS5vsYRUwbpjjwtsDpQT2U5ALF",
  "key32": "uFVbr4F1kdN5yD5trVK16GaR32gptJUYq9qzeB1SenaBbSje5oCXPGNGR7q8ZFcy3SD4GZmyfy8mWi5agy5CvPU",
  "key33": "2yGo9n3jTXJ4UYgWnbL2Pdj2Gb6xfSfRD6U6v295Rz1hzz1ZBqY8X663EsfTvUnP3gFraWQT6veqEovxmg7KKvPH",
  "key34": "3EgZKjcxWBuqJvAi8XDroF9i9NAHronqZr7wKdffAW11rLRxA3vaHyshunjNcE74gSnxEcsQwTW8NJSeGSNT3PHn",
  "key35": "2rHHcyFuoq7m5D48y3nTqwEvbCT3HQw19tAXZmWfpPkQXgrSvPtvjnp5VWjuyzxRFZ5u6JgnZinxgEYQA4i1UEVM",
  "key36": "3EDctFZCDy4UANNo9Fd4tQDifMWzx8i4DHAGYZVYpiFj5P3rcAyeWtsRHPDEv9bi2EFPC7p3Wmd5UY3yvF46Hiqv",
  "key37": "KtzPw3TN1CN7cKxSTfvE57nLJm3ZXRcfgSwjYJpH8zKqTeWf19mo7CxXoDYzrdFhQFioxqWoTCPdSPQ1eYoorHB",
  "key38": "5utyGDryHQ1WErHqnrNnG3ncUfAUW24fDmqLxFudk3L4zQhEx6aZc5knGtZPHJZzQkSx9bj5iPaeFY2wvRgoKF25",
  "key39": "5ubdBYhNneqjnCzCZ7cZDw13V5jdN29RCgeN18Lxc1FpaLwAzLUsmo9qQRxaukXv8YUNEY5VDUP3i9fZoSiXCd2b",
  "key40": "4sXdeRmwcfc2Z44fLmELWyvtdtrfdqawN4RMgtJZprcYyRkH2oZbey7wefittRgo3adcy9qzmZQrYEP1CTzK86Ck",
  "key41": "42yr7sd3wvQu5v8iyFV9dZJ6pNVwuNkPH6FmdEbYC9LMLspe3H3MxhYnUBJVNaAU637o2JgmFJurezdj9dh6AXzJ",
  "key42": "4GwLfZUeTdweYmoruKpNx2t8V8U1dyQTrhfC5mwQWUyy2cqvDUZ4mSWsKkUHbJryuSat8aHF5U98cdwwj9YgMp6B",
  "key43": "7sXM95tEiG3LzN24cNKpcNkHLNDDJ715vgA3PmaJ3ncDMVyLYcM24zktRgcqysSHCuFRVzLC9Weift921Rm8o7u",
  "key44": "2xzu6m6dvQ6JDKKVpEZgG93VBtCa4CBHr8wxu8ishtcSG3DPmHfQm4MVEbT8eDyQKSmHCCiJRqJebmBXXWWuyTd6",
  "key45": "49AmxWUZHvTWSQJQwRwU86WEvi4ikTi58pZWgGTfgLtwpeKvKgqPxu84yPvwpo3z1CzqUJb6x7AfqFuGCGexY1ot",
  "key46": "Bkd3BwB9XgQ8FAxuxwNpe9pzJyfgQkyGs8vdi6DDQcmQRsX5x4bwdehAgfJ2MneZYZUcvJ5xrJfrJrn6Yu3VcjS",
  "key47": "3NSj61UeREfs4jtx2Mqg1acp7SeBf7MYSf5tSyRaDdVCsynsqtbbY6VtfZX1p9xWJeqChTt57EMnYtR15SemDzcF"
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
