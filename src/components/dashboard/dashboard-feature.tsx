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
    "14kfw9SNi6CRL8iTjan2B9qhhcgP4VRF3B2uM3L8wSxcXDBP6LoYVj2H2KkbmXZnSX2B5XbFskk29av1hbBJHk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jjv6Pj3t7ULSHD4ny5xvr4zJBCeoMC6b7hNMFSoJ6Xj9AjAFNJ6E84GUNP8sbTzPgj6KZhtWUhrJorgSKsqrTp",
  "key1": "vGwDSgMJ44oHUaNNG3L2DdjSwyoz6BTrdvQNnS6cqG5fbev9HdQghPT99HAh6D61Z3rNneYKSdEsXB5BorqTSxk",
  "key2": "3zoc8S2Cx7B1PaqxCEJsRu4sxSTPyNVTsg5giAVfKHK9Z79gkks62vshvB2nXwpsgHNkS3Ey1rSqErEDnkxRb2Ei",
  "key3": "4Xs8Pc6EmYYjohr2tKe2sgQexfb7kTVnHjWBUdWTEka6aR7GncuAci5DzLjmNXza95YtRJbgBY7wqshGEebnDZgv",
  "key4": "5uspwm7qrncZP8PK1NLS9a725hkHxgeTd4ELHDuhf4xE5MiivLtpm42BQnjZbEvzcCuybrfFjbWSRwqofUMQEEBv",
  "key5": "cPsDcGEn4Hoc5qLF9fWmGojaVXX9XA8enJw38Xg8WGBWQbQkP1WztQKzvKAbPt6wSB9xkLcAaxuYPUF9goUfSst",
  "key6": "5TTVwupw1a1yJ15e95ZzeayWkdfzLE9XRLgpm8F8RUaKiNdFbCUEGscfyrtq4YY73MuxUFqXsmnBbWMBUuMriC6a",
  "key7": "3qu62vEaSwxXGjNrpikhbPMC9QhrLAENFRBEu3qDYfbMk8TBbzb1qiXqDkhVfEq51evrqZwzxKWk3BX95YeYgxCr",
  "key8": "24XxmobfP7MMuwpgj4Uvy7efd5LJex5SfHjps2WoRkXVst1yg1592Y2wHF4BAGzSuWPp3T1Qp4fCQeqiExaX5Usg",
  "key9": "1D4y3Cn59rB6WdDjbvEhRukDn3wByj82UHfm11n8nJ5Chu8MGYEgA6pTGr6WxxRhu3AhKQY4TPoXxcmnydhkTxb",
  "key10": "GUJMK6vPFuUbdx4mKsKZbzV9jLJnRDCajj2Jak3LZ5yWh8nDQ6GhqzpbAJwB5HLBzgYYqpRQrJj2BBvC2YeUTu2",
  "key11": "2sweXtQP7wD5hFYh1WkYWTTaMEx3Enba49jxabtPz1HbgbtL5ZCKFNaZw525cNqv9mL34Xtod6QrYRBSNrdEJxEk",
  "key12": "5Mh6n17HYfaAXCKM6x3LajrHaHGh8AaEMC3KtjBzdnXC5k8w1cqN67xweSSWbfh63dCBdi6e9PEQvrie41reR3DB",
  "key13": "PBYHtYdnvyq6sWCTEaYha1bYuKhPbM3f8tmvBpZNNLKxWgXSku1pwLCWjyKHu9JStFpvngRnYYj4yAgBNU9Zjka",
  "key14": "5ZdgtxWjJuFitXaEa6EEDM4cUdXZhXuBSf1Zj2KNXtfCAZQsiyVRJHPaMs96dsJKE2aGRLJtD8UnrhDpKwmaFNyV",
  "key15": "5AinsWzugQPwggStMBN3HQGwv55KkkVEpjGgnxYJ8zjMAfNGZaKiC9ztZwkqMYQ2EP73JgTMGgr2QuC3C6m8yxYw",
  "key16": "2ZeovF6PrqJSQzPDeKicfUmdJfHdbndjf2HTGqPXkj2ucafNFg71JB3oSXTeUHn5TbMCEewnWCH7wrbPaJwWWVS1",
  "key17": "3LPAkKKi56uJdSnAKH9Emvrjs9uVp9aPzYM2RPJFNUmsYAb4e1WvydnGxEb3DsDfqNNYsS3DjRX6DSpjJAHsT4ry",
  "key18": "2rv7ctPVsT8JQLCFJY8bX4GJiHVSfRtZHc3aAJv19hgTwyCbEeT2EqjrcKiRn4M165aKZDKtT16Nb26S8XR84kxb",
  "key19": "2fmgNDUsXmP1Ab51C1Gd5sSyvzbMaSTJ13BVGkcFqEdtC36B9DarotjkwW6YqgxvVeauwF6j8mgTmY5yhAFjqBBn",
  "key20": "4nrmQhQuk6GARzpq6xMMwM1xwkwzwz5kpnxZ7dpv45AZDtiFT1PBCFzWWPmTYvXpj13fZFm853TaTz7wPtJDBmYD",
  "key21": "3v3ZP9sbmYksQZAQm64TRPxvmzM3qoJR8emNXgKwUNxZvZG9hHhHfa64z6rN5GQH4idxptK2a3W1fdEBHGiSrres",
  "key22": "2xSao1VPonjTX61ZbenAieXfoFJpyY5xTnetWCwiXXtRHfhwtQ5TqrsGTKBNePXpAabXe8EvTcWEf9nDzLyWLVjv",
  "key23": "3RUc6sfbTfKSakNouyCgvazZvRgupw678tuipPLMMsCxwk1CTArKQFDQjUWCWu3G4mbLDmuY31UWdScvrsKYLMA2",
  "key24": "5ePMsrTpaaJnqVPfN5kMHfL1s9QNrbhXeYQ1wciUpV79rqXSKp9VPx3ma8AT59o9BkCeTob6M5BbzwkU3An6SvLS",
  "key25": "2Uc1Em4GNFc2j7awzAq3PWMHy87c6AxGUyw7zBM9bCV1W9TwFJ3TfoGfxWwJk6zdcMboH9r8KsgFkZxb2hoxHoKY",
  "key26": "4k8uMhjHLbwvvhzD9ByMk1aUqGr55C97y486MjQL3UFqDCeYhWRWGv2FfswQRAozELuCCoBa6NA9jALWg4KQqNGh",
  "key27": "4o2PdLpreVdXLdGkhJjNvknM4emZAyn7MjSbZf2auDF2D7H3MLciWQu8LRDmgiroC96BZvegwoLqaYS7gjNbGhan",
  "key28": "4aJPeHh5YcApbiGjgsyEouwVSW3fRByN3PdLpm3eoZJ4UvmK8dYYNkBcfL4UZ7vV1CnSWr8AvBJdm2dfhEnGuYeS",
  "key29": "4Veyxk5yyZqwpphirQw933HkfWLpGc1XX2iuR1QWafUaWgDgKGx2LCFysZimsarRB2ZoC5XRCyKx7t9Xs5SCZiuE",
  "key30": "NQwN5trQPoPxXpbbajSRB4sgBdzVrSBPAHViuudB49E7m2RU4wXopNx5TA8k5BVpfGnhNHfZzrWkzF6wcQBf8np",
  "key31": "4EC9JxYNVD3aZXkL2BHejgs1QAkjo8CfmwBPMP8RLxfM881qTrSsqdEmWrHSKaM2Y69Pb11iF2n6HApNtSXbwozd",
  "key32": "51YC87fz2NCv5x34aMM4CcarqmpACRDH5DyfxoSrBDLRQmmaK4zsKKgJ5rm1yiEhhkQhaeKn85AmnwvWdn6dP9Tx",
  "key33": "2iPrfW6C6nBj5D7K9fa4PZ5T4eupngY1nfKWJ2JitncftNGegNznsZBF3KdXpSqEV3NDak1VbLRozq8nDAoN8zRq",
  "key34": "5dhDdpG7Wvyi8qsimVQYHpDQKtgzD4Jq9yPxF31Ub5nDqz6RQycVpFvGk3qwQEgCJHfshcfVz4YnUzgaUZkufy1q",
  "key35": "2qdajXndakZ7WrLavDi6Q545u7ZW1syarvzM3Mujprh9Qvc8YTVSavpfHj2zwZRfdDRcMha23MYWN8oZCqfpzeG3",
  "key36": "mN5iKRaxqnnf3Zs5enZM69cXxtvScYHYhotPwvdTjBPs2oywd6xxkK1JNbwz3qcCsQjFiMV5PDZvkubiMRjGUVU",
  "key37": "5GHhmbikwXA67qRkjBFjUzzNEoFRn8KairPmsorrL8WBDRFNDV9VZJuhJaAFBhr5Lgida5PKGuiR6thXVAkHAAQv",
  "key38": "93UfRTDvn9g8Bmg3cqLXnNgoysQNKHpJVZ7mhQS886EZWT1QyX1PwPy5pmUxBFdA5B1bVoMQBENAfnUoZzkgubr",
  "key39": "epb38g6jmdM37FZM1aMdCW8TNZTHMi2J6wwGG9HoCWoxod39CQKf2RQ9vreA4GSGmpWmbBYibV3DkbPLA9NLfJY",
  "key40": "5aBYfZsMAjdAWCHuE81JV1LvvV58ZZBtjonpM7YFfFMqRfW6ATZgHeykCQAbSuTothHJPByTNNni1cVRSjbSMsHQ",
  "key41": "5XdHxFGxnuewpkNHDDJpPiMYpGFKzYcr97HfNBCUEqupukhhBamSQb6vr3QKJxnutaSgqNC6QxD1Hb1CqaBDGhqz",
  "key42": "27NcovywUQzYSKvdj2rAg46FMZPazgH3PX9L24qzfStsJG6wGwcNK6rZzPmqRSo2Kmyu3D8Cuf3j2VvrRN2X1g3G",
  "key43": "3Yg3iJtnWk6hAuR1jPtgY1RZBvY1LyxaMrt4kyt1YjKZWBrxmNv46jywgvw2tD7U4dCeFp7YF1pfva45u5WifrxH"
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
