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
    "5t9wWuEQwEm3m4Ef5NVS16yh4ZH2gNpmS4ZjFiTo6ck2DZp6KHkMhpsfYbj8A3eKPpR2JUsJL1uVe2WD3s9RGFGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UAuxeaRcRBj4J6sugNbMKmyk7Kz5Q4HjzNoWkcdJdBYPByJhPxE3xJ4eGTBdebjnrXPytAXMMQTjvwv85ho4A3E",
  "key1": "3jskxEiKPhtM7VGXj8RrjrhLbD7dZV9gbw632cEYMDFJRFUuFYcd2mtnfdcCsJujhWgiMrrEsRJ4kCFRHinFgrvV",
  "key2": "3GVGtFqzg5kYXVEzs2yok9J3YeCBbNPWEDQqeRGZ7AGMq1SCbJfW4J4WVgzDkE1c553eBp7sRGahNCd9mecJBoQ6",
  "key3": "2z7L2gjAE9rvtorMLV5jMnakaPVHnUN7t2GpizW1uCBNUneFVqryHFLXJGkGAwGgirnybDMGdqdbn1zuV36v5xqS",
  "key4": "3tQNzyCg87QPoxvkGxGGcoigdiKkTsqox2LKBKvm125WLXUcjCvaBfpVmusxkLcdGVdjEMUKG2ZTAWTYofhvN2yL",
  "key5": "2f277gPSH8cRHrb8MMJKKgayFEAQ24j7QMsA1HZxRDtwzGKLsSUj3LexCXXX2wzkWPz99eJMVRY8wV23sPiHfqiY",
  "key6": "5URx5xMyUpYnqL8bfujYhN8JnPWeSERnaefpkY8ybLdeynC7V9cDPK4fqLQcnfL5LpKNxBcYNrokTrUhvLiZkJD8",
  "key7": "5znFwcxgPpP1oWcedJcniALC2qD31zhrQESXRg4E14137T1PoWHYmDAFHSuLHddwTGEx4HM8HLkv5nF28wciVVB2",
  "key8": "RuNUPiBgQdNj3b8bv1aFmyEiT4FgSToWpzh8nxDjLN14oWGnE7fAPdhcfQZcw29Ra8dg9fe7FhdeinNPSajZJPm",
  "key9": "5xPEFZBUZuRN6de9ij77t4j6XNjvnofzxCoKd8e2EnHcvuDs6eznSnUnoZgmBNidADFBpRJgBmQ7D1FDRKAt4Y8m",
  "key10": "3MMBTqcuAc8AxasdfTM9ZCRp5SctaUj1pdukuiWbh9AWyDsEDzssVt9fWfFavoJxLKTw7nxHBz8JZBUq1w8y5Rra",
  "key11": "5CJySLfNpXCYwiUn6UeVUM3yshcMqzXnhUEz6D8ezLe5Vi2oKkWsacKz6wUED7Dn65dEh2LDMhKaMTokStoWcW44",
  "key12": "vEsqtGQTHx2WJDH7K1ktZX2ANc8RgrJNQj1mM7gznJWqZHxTmLRT6XsUcM3D1YTfj2tDbefLdTeKTQ3JoLnX1aW",
  "key13": "5ALLMzEg78T5FqP51cvdJ2JMCUH95dXwThL6jAnsr3sJgXhtRu3vyfTAoeE2DS7Yh3s1HU4FhenjqzgUWcDMGT1s",
  "key14": "5cXhE2J6CaRvbYpNRp8c1EVTVeDKKm8LoGRM4HC89E1EDdi3rLiw3SkHNEd6uszQ5ugmVA4vbN3CkcLQqnvqorRS",
  "key15": "5xnAc1sFSML3EtCE4bG9ZUCmhYWrzuAuAcZfSEfPVa6HpMRyJv35c1JB9gLRtJbHTb9MLoKJnuY8o5WcALueYs71",
  "key16": "KEv5rK5qTyHUCbGNoW7dNfY5WSXAnBDWpkH5PjMyPQpTw8CUivVXuw9ov58XZsWPTDZaBWgPEfvListzAHrQqNY",
  "key17": "26NDQPxQnL4arWxVqLxpWdmX6b4hnK7bswL5KKxYy63AdPX6VpQwr8yhAuy8iqThDTvoettzpetVsUbsx49GrS3r",
  "key18": "uqZemhfoVKPnMnEcHQMhpnr3NC2WQxPgZajfiTHkgaQHg9RYexaaSMZHtoNJ491NVt479mtDmHAuakEDKd5BBCn",
  "key19": "3AUNEAkQygrGEXBPYJQaazxpyoxp4zWZhGy3QDmbqxURnfhkxGkoZUN8s5ZNMgtMDijw1BpRkzv7yKZDvph1XLTg",
  "key20": "5hSN86tBiUpVTHBvkncD3LQ5FCX8WPDaXSjg9u6Ywxw7RpE2KhbffuUACVDoaoqLaHFB95y5L17hP5SRmy5YnRSA",
  "key21": "4tMZun1tbRsTbbhM2Cfgz7m3g46R1GeG4SKNZrLnwGvqwee6H2P1ax9gUn6jL9YpUg9grfesv28E269EVvGAZxdY",
  "key22": "GNiFD4hJ12Px69tGUFMazzU5QDj8JAVBF2zQ1gmCxDi7tGZeVDSYQX7dSfpaXSSirm8kHVPuPKHnP9fpFiCZnBi",
  "key23": "4hG5bMY94byt23z38YASSZAKiMJRQ7Hp5WJFgNDqP9SBh6gfAz1QbDhyFttQsuViJXtDUE4FDhjW4gRfKoLyJH27",
  "key24": "26paWCfHYug3DDbfNXk6gN3TLRYhtP6LmGUxPLHDbAqpt1RWVWH6bMydqgWD2qHQ1TAMzALNQKy5EisNUs3o3BCg",
  "key25": "3JJ9NENTmXu8SMsRY2JykYMAoPn2pDCT6hgGRHSeZHVvVtmXBSH5WudfHk885AzpMYXYxx13Nyo9NXF6fWPbG1hW",
  "key26": "29RJi71zJF28HET5bCo82t4wpaqAYqMWMVCWFMvN1pJH2kyeCrHwnqpJSrt4D9rBLgBEy5him1WvFmkUKqdNsFzu",
  "key27": "3ehoyeaaDbRaYRHzqVUV18epY5ABgH1R1hzMmjnVhbX5Z11VYUVM51Q3YAAWBr1JMuCnyQRKvHRQxxyymKPbcGSp",
  "key28": "2Ydao8Ta3tAVDGW84SjqPS5oFn4agu9mEPFbvEDNGMwai7FP1C5yWNY7rKRddnmeCxGz11T492hsJVyHMT2inbT8",
  "key29": "5hQj8ACEf2u8vWyxzWYSAbPH4rLYPCoTbEuvT2gBcgXzTJqMrnr1XQ6Q2VRcd2kNCCxdct78bQpmiYwXW4hQDeQb",
  "key30": "4jFhxB8FYxgiikKrYixnHG8G7eYLoKFH16LpizK9QkveLK9C4GsuQCDMqBhGij88DMj5scxtNrFa4AAHsCYAJQUF",
  "key31": "4SQWBj1Ay5rceFRHRAkoksYjGYvyEwYK8qJeYUVKDMMpzX4mMUiCEA2ULbuyWUEejAzgRvHNAT7qRR55aNifqUvK",
  "key32": "4UBJbsWnHcBeDnTkVte87218K4BfZeFFCPvaF9U5PyzzCWpNhWb8X3xMB7cwVqBwdG2GspfB8wmdKMJYa4ujvq6P",
  "key33": "5W4g3mtkfkFH5QjX97pcZDPdbEiEqusQHPPnjE2xGSB4eDg3PKtyYHzoDHJnhafU3k2kGtfhFt3g7bJmare19x6C"
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
