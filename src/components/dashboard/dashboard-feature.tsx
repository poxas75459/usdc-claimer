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
    "2jnPNe9HzHPg34T8KFdgT8e3q2JvpRSjPSDyxdbTQBRWNFjtnqCmVsDmvfg8QKgvSkurgCTkEn8BigRGBPPggcW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fWsKNrSYiZfWmtpTTAD9rN6KorFXDp2FzYefZdBa1KvZAtGtozHcDatvcAvr52Wb4KkcJLbdGtjwRpthVudU4XG",
  "key1": "XPBdAoUc6e8yzoqBdc4ieXom5XpnA26GudSPhvuaaGFuAW1bWit1b7LvWDQZwvSjqHUzfAdgri8qBNbw4necBMi",
  "key2": "5yHgvawumW7PNyGVhokuozWxuWrsVUgb8Js39sbBmWAzmsJVomTYKXLtWznhQq8mdfUh6hfjmC6o2UhYkkX9VdXZ",
  "key3": "4u8A8T9gREYP5HrD71B8cgQnDGCFywNwsFTzjTXHwRtLJQwnc2D5jDkcL2CPVLiosBNdQBsQiQyswybmgeRb38sm",
  "key4": "5pmhvQ9C4Mw35Gkkf8Me6g2t543zowSTL5RgJEmMVPiNfVBU8bvy5MeUBkAbpkZWgGKQ83z7dGmpfzxMLo6CoHDC",
  "key5": "2CPhHvbiQWU2yqQSHTpPNapuYMNujA6QKJZZyYGt2yKFd3iDS9Sc9VHU3LSa3mSsJxjaBACCiB2SNTjiD4BJQMAt",
  "key6": "5Gc4ZFq182w4qFDiLFxp3m1Wb3YhV6qNtyCNQvd3kPLxWUqjP4YWKpoh1RKi1k5t4AZkNCgvYmT1jttoHa6opq4Z",
  "key7": "3BKpwSYR3JPNgMhW9njyLd1ZHgsxxsNPNVh24SqA7yN94ByVmMRHWLBUfgNLQioJ3Vor7QxSdvfALZgEhsKnWN9z",
  "key8": "QCw6myz9wrtaYxr6CBCBswLJVbBtpUg4qsitatqu9taCD9M6EqggmkWpcztyh1QmzRifkSFDo7oQJk3NMGATWS4",
  "key9": "5RMSPqPz251hNEtdSekpQKnDFbeinycgmkMK7jaCWVYnbfCaXiYhro99nTxc1uFQ5k3V5KpsUtMFV493JQPnspg7",
  "key10": "46SBALbvXFzMQiRCMSxb5sgqZNPqnk3nf7XUF76cDuWHKAFG6REQuvMsxNSC3oiYTZq1GPK2AmRCD7VVsfcXsLpj",
  "key11": "5D2rhdYftm5ZJ77u9xmhkSHVpVMdNK6a331QWFsj8qkeZR4dH1ZcFwR8Jt4KATJV1FJnvmAu14MU6YS9hSgG9ivR",
  "key12": "4XiB2iSMx76hhsa18XwKMw9a9CLb2UG9dRxmxukeLLL7LDgoSorZ8oU9f5STvTN9g5Ku431Sfto9zw2rgsNAdtrk",
  "key13": "5bkApQnFQxrcP28Z1EnffpbKUbDmHJsy3oUAiVGaWcxqvxSSH1vMcBKtw7ZKYHNtXbRcwehY4HA5nuDRroKgxGtx",
  "key14": "2pgpTF2XEMUa8rMY2WfZJV2mM3JgvtLpkWNQUxq2eiWWcAgUKVZQgi8cvVsxM9gAZ11cQMRZjQsbcx56Ry6TSQxP",
  "key15": "5s6TTJBGLazgifiG2P8oppLQ4mELYQwoZBaWwvLCpfgfhwvqKbNZXTAUL5ceZJeoY5tm2wdmPVLgUsfJY3aMxZRA",
  "key16": "32sJ9qmGBgPC8VNPKoHBKfoQAsm5orhYRBJWko34qhBGxW9HQtLowUYwCsXaBSw5pCYgJHjWKoD76PgWKFiVrL7i",
  "key17": "3TaFnm3MZzwzo5XVWsLHFTpNv1x1VxhrofqrFTnn39hVMv23mVWkie2rKAwbDpNXD79jnadQBVLmGcLttxdPEu77",
  "key18": "3D6AVr8gyBe4v7txZ8wuZwDudjK1JVhJaotRyY5kLaq9BvmMkfo3xBoqDvzAD4pEfZaX7HJnxocWbY25J1Ct1848",
  "key19": "3Xqnw5aZ3EeR1H6ufKaUv1kWurwfEEcK7hySnWHsQX52y4qceQh4kJem493QRkpTp1tFrqtwKrrULPaZYuTG9FdX",
  "key20": "2QsUqQi7mx5ZUtTnc9UEwDsHBH2DGkLEhjVb16krF6TrRmmBTNeWwdMXvEGYfHf9CKWEdPmqLjSVAHyBy5W3Z3QD",
  "key21": "5pikNi8w3AqgJSvjL6vAU6NQ4c9FxjLnCQPiDebr5b9wLcbVe8WrcfqJpR5BWNEZznWfLVbn7keVNDy1BZnTZEas",
  "key22": "2Q3xa3VrXsu9M29Y6YMwLGPY2Mb5Fh3AEZi4mGBUNBwFYkVDNxDJCBFEU3feJBG4QssA5Ky6kmpBbAQvbiZQ11dK",
  "key23": "5ZqsouKYEWVdUeYiw5NTuD5YYkENUVp9t6b3Eq3tvUGXR7p45UKiMwiZqcx1mwcFaYpZ6M8qCRRFZdKKjXqpKjoX",
  "key24": "41hFsZ7nwXsU1yyPWdb3d9mkRMpfYen4ccUKJPRRcaKKk2hC2V9XdUj2Y5EPkpcEqBDzCF8mKf9cd7kSuYGiMwBW",
  "key25": "5xUG53cUdxUdH77GfYib3JbfBXjrMFud3UcX5j23nQSQxx2i41fHkjmdb27yP8SFqLuXqvH7wVdCj6tqhsyErE6q",
  "key26": "44b51o8WERbtbVqqaoJdY4r5ry2zzoLJd5gVmj5H382dkaxLiftWBSWuGViKLGaWC1kExhW2KojiqhfHcuVnWu5E",
  "key27": "4kbtxhXR4bTAYG8JRWfrvBXjuDbYueAAdFprdFjShCeNW87U3BeSAzzfA2MkD8TyPcAicP2dQQ36puc35LV42t3U",
  "key28": "aviNeLXtBKGmYcVjd39z4JMKvKNmKAtuKWCdnPSaBPr6nm852wmTYXd53Fk8uiAhZhABQDqULgkvEdRrZCtG1X5",
  "key29": "nxe1wqpCkP9DEq5bk9SXSsozkFrmUsSGfZabcwjGi4M2bGbNgii2KA1gvhgrveo3psxFCzSV52uyMTuXcvzpdC3",
  "key30": "2jWGgtmra85icWqDEpqcj3LoDjEjHeyHDTHxzHQHRZyjDoyvExsjJ3sFJNC4iWR7WjtXvVAGL3pNfyuEZaHPXgvP",
  "key31": "4Z6cWnbha7MFzPJC3hWt1rNASieGPtF8SmZ6mgm1npb8nQqBSpGyN5T5PwUvX732an3LS7pqet9ZSPKbuocA9Eb9",
  "key32": "3fpc6NWadi4igNsFVtAzpzasAxt9kaFxV7Q2GKXVdzjmTkQczXAFaLiSL3QfoVSoifi5x26eVW71wq4vwYjV17wR",
  "key33": "2TjGK7kQEX6LuY2nL2HkZwF3VsLPjGi1mqPXhrL3JrhxCPkAiqkvnGjKRKnGf66cfkk2ZbFkgGhcVwVFCc9cvYw5",
  "key34": "7iDJ63D3vMuWMvpYTyyZWX5eKMfsmPYghf5WcgzhBQRdoTMbyapgjowPjojBBZnzQonp4WQC7VQRf4rd9EiGX85",
  "key35": "Dc36Cm6fxMKXB8FjCwJ9zYTuiLbBDZsmHYUAXGwErmr5X9rWAUKtSyAoyNUy9fTsNvm3hk23mXmVfHQmSB2e8xY",
  "key36": "3ZiWWY7jKbCCcYqHq7XdyJbLHt6mhZ7tzj5qM44t5AbFZfbotnHiv5pDWemsEUKKx31EbpnG2DPzkreLn2pvMAiY",
  "key37": "3yF1AbbGkAL65g2TZYdVFqCCoWyF6bNaTNvypKmu7gr1GkEGFJN8uWnbqm4g8nmpfcE1zsuVogWr2GWQ1sfXxx6X",
  "key38": "3KHEXXbwkRf5UbKMrcUi14sUQCMwstQm9FFtgsa5xfgaYNGzQqKgLTJrW27cvpiKzYfgMWK9Zr8nsfQpT4WFbVMR",
  "key39": "3PrJPpN83yrcHjyD9gNMPsQN2Gy8UhyrYsiYZ1q1Fug7sbsjgeYKL8zpCrC8hbQLDN6aedMgp6nu7d2LtKjXMHEY",
  "key40": "4yj8Enpt3ZvB4Db6ViHWh3e3SyM1R5vsvCgiVaMC9ht2tvDtRE9uvFVNWjPXvgh2gCSjW7jrfq9Y8M1QAm5kQEtB",
  "key41": "5xjwxQWyAkQ7RUAfGp9MGFaSt36pWqsi9g9vVJdjrR6F9xScoEi1mh43AH318VNzcCk1pNjZtX5JxYj9riixPtGC",
  "key42": "3MthgufrvMv8xzoisEk9Z7CwVwAKNGy285UMZxgVnfAUrBk2hcBy3FSZr6Mm9LU5efiqU1eHNdPzkyuwvWyAutmQ",
  "key43": "567qQ8UBLGtLZUPe8UKY7wmgHHN3MG5GsRuJZAfVcbX3QgxFBcTPfWD4L7n4Usjkkw2uQubWJMfMwiAybUQxxr2D",
  "key44": "5yLwPv5CDesuvVwDHCDNSAAvHcS6AwRowBrbJGSDPmP2fQJLrQnz8tUsF7yffsbFno684qmCQnbC5i1S8Sy1pdVR",
  "key45": "4FmAVkThP58iv3nPK6frQyF5UQidWZRmByNx9XsH6wqQgGBZwUmgKusLzZc4JKdhmb8scWREihTaWqPAZarn13pC",
  "key46": "n9SNaYGQfdU32qntwW1N1VrfoavenKSLuzms59DeLEq1woP3QVsHtGdEpVjwMBYxQKxShqWzrorhPHp65KboSN9",
  "key47": "63CejxuKqPKcNmvYap2cL38pzwn4ZMgxyEZaprjVFuRku3JqRoLwMgXdsdq1jSqcNiqRJATaATVDFcgMcXQ3E1EU"
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
