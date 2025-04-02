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
    "5Yv4ovTr3M8ePRgeN1t8xtERVxY7bn6D8uLoWJB8MRzJU23AM32HcgZXsySn4DpvGzjMUHBz95fKA9VAPL4nU1hE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixy5SrFom3q2SgjkgJ8T5GMa65ThDVeYLor3Z67tXr8FaBtfC9cRRLpkTXh4WGi3N7uYF9WZa3BZKRRGJ7buJbQ",
  "key1": "4cuNHrFaWyKbPU8XkCsK6XUUHP4kiU7c8PYgrjXCZBJwkq3ATMGncruujeTewp11QZYL37Xkrd7p7bytKswmzChM",
  "key2": "2bwoGBNLjocFofYRUkeqrCojHtPpVDAUSBknsHfA1vCKfosfJsH3KEpdmC97AuEsJLyMdQtAgzEgnXWSmXBoFduP",
  "key3": "7u9gvkZdnpSKdAqWr7mqDF7x4azwzDJLvP4gJEMR1sh5uPE39E4BTiydUyXwuT2DMQyv9y1UHgwn6z7ZTFmQ2vR",
  "key4": "ZPNPikS823h4PCzvFjZTtYhipzJhRsd91DqrDrknTprGb3CqzABAZGTTg9DbWDLCTUJreAMmy7yfyeitg36qaP3",
  "key5": "aybcHQSoMY9SCBPy1hcJDaRFZ3WQZgd91oR1GkAPQ2Jfh14NXo51grH9MMrEnLew4jqUVE9Acd5svZyccsBTcy4",
  "key6": "3BfnkhCQbFbCCRMDUSEQ7GgdFPLkAJAfeneefEpEBhr9MP7V6YAuhYs7d4pDEGC8iJovZVf7EP497B8E2yMVLV1Q",
  "key7": "2Le1vVCCNwSPUvvV76c41mz16xSffLWfLvuCKXG9nijEz3HmY987xHMXYGzMK616d787sYQF6XmTfAN2afoGVHwC",
  "key8": "33ZCm5mFwHur2b4KMFUeXYGwPFTFQWoiZxRErxjNbYxS6gVv3nnRYx4CXLMQMA614deRM7CPcFkhf7N9wxeNcU91",
  "key9": "3ZMofE5EU8vRAo7VgZDFkJ6fYYz4ACMBdGZqTkoPQe6oYAAMMAgZuuSUfid9FLonS1nKcFhqZHJX8Yp2n6FBpGQ4",
  "key10": "JLRA6pXnFePZ1a1wAnqAu7ptt3MCPbBsNcZ9obmi94B6YfhiUx2HfV9ZdZ7hZMiwXqhTGR64dzpxaooTWGgWwpj",
  "key11": "2eEHxPue5WvbRkMYam9jna7Q3JX4CRiFHehGUuYobiSeB3KUDWcaJBbNCXkThq8wtpmTiJSyftvipdmm78ZBuUZc",
  "key12": "4FFECW3ULMNT8HAhJaR6pyebkbhsLQw31Dx1DgG61Dn7wRzxXa2hpP5s2Ey2hLjYWzhcxR5Zr1QYt7LhkTyy2HZQ",
  "key13": "mL9SR8uYG8eZWmnWEa5VsoTxw8742kv7TRTr54e7UifvvoEPuDdXvERLUoUutq4o79jYLKVWmYHtoG1kMtzaRf4",
  "key14": "WGttC9djGCibDNRWJWpnnbgoGtQ7Ltr5DJNmPPrKtvD79zsnAr6u8ShWNQGmSGT6R2ysDAMt4wcSN2rjTHxhbtS",
  "key15": "VZ9DmuzQ9SHC9MWeWSH4bkpVMiGz1VRxTyvF2xQct9MxXHkcKuUtqitVXhhgKUQ2qm8MYNpMVUGRQd23RG9JU2y",
  "key16": "5Ut2zSrHycrzE5nx7osdPLCF7FLm7vmfBGRgNPQX8S3wSayWnRN4hpBJqV99cEuLC1CvwfZJHud4r2uJFnKx5Cwr",
  "key17": "Anu6A3zxBstyZsxeDYttjs6hJHx6CBvTtGEnzmH2Hb9AGS8ezoJxT9iFZwLzzgo8ubBMvfErrwCrDCEChdTLt1L",
  "key18": "58f5993fxQ82C5Snp3wAoFbb2gusrdnHxYbs1qRhsSvQt8ZUvLYGSWALh1xAucZEvRU9vYGcqt86C6uRmeiWZhQn",
  "key19": "325AvxsUgjcgK6JUsS2UnCuhYD5Wi4Ev4sPG9oxipkKHqZ2fc4Uc48nbjHqy171HZa7qizLo9wz9SnSzyFxNny1s",
  "key20": "3WTmFqkbHn99j2KkynV4zao2gEY3WvTyCzDBySLxxoApjQLvK5v4nC43PoKU6QFwfaX3qRXaZW6Sd2Yu6XddPTSL",
  "key21": "3RTUfRmhUaacCqdxPV541UCM5L6SDjRiFRYRjB6MEqGVF8KXjDkCM7py4sC7PtADtkpCmXqy2XPCLFTfaa7VoF5Y",
  "key22": "5YrWiUA98ZxrfNNx1nqnZ39WbvQcucyirYdqingwFfEPcqQvzEfNT3FoPLNSbMrnG3PtqgpowR3YdD92dkf6GPyP",
  "key23": "2zqyhbxYXhCeaQmDKFrE97L5BTjsSeAJd8tTnRZXcX9bLhhMAEba1brygkmS6pxAN3dceF57gZeqdxCo5FMgFtJa",
  "key24": "4H8BKB39q4m5RkCVpy3j55joxEvmyzvhKtm3q1bNL24pZuH1LhnvYd4A2uuucPSDdKtdaB4C23piBu1PHnjjBYc5",
  "key25": "2cu6NgRf8gbNCsQhk39mf6y9AhNr2LJHz1U2eCx4a96Mq9Tqr2LyuE9oGrdR2jDpWv6Mb9M8zWrjgL1ze9Gnzj37",
  "key26": "4gpL52H26Zj5UiEQMzrFq7g7SJV48tCMzvT6EEXsZNKkPo9gPfjf97EUUSaWznKtMwTQwFUmhYmbp6dmCxVS7LdR",
  "key27": "4wGSMhkzaKV4w4EALfd2jeQHP6uayyVDTM9f1cKd6NhckBHF1k3bRw36GHJw1kC5LC1SfZSCA4Dnh8DDkBJNcmqq",
  "key28": "2wDV49cB68PbDn31GHTtRYaQaU3TtfL1zFgiDqu6ZFJX8WsSKfLYKgWJHsCVuAgEq79QrHoCsZLwJwo9uf15xdQW",
  "key29": "ReWDFqDXTJCXSBTh8D2MyQ7PjTYgcTWWkEryuextdVobxyvefNcCp3jvNNVvgAAZ4H2kQTCZAY61NrmYbNmPpXt",
  "key30": "1QRAHqBAqJhVpK3ML4AYm1MunrJ2dHy6xttKsyyqRmgMWKuYV6byZgMiiPqPPfSohZUT1GjVq9j1RihwdDHSYbV",
  "key31": "4KzjbkUer852TDutnZbG1Ax8veng44EoYeNJtFjYfLGTUsJ5suWe1cMMwSCwH7p7kraUWLBeZ824LPVAshPbJvkd",
  "key32": "5BhqfQhS29K7T5M6dBWftTMFARs811UwEbfyJnxsgG92rmkUWiLJjjMf86HKxBzsRuASHgaraiP7oj1g13vxnfkD",
  "key33": "5mebNsAuBdZVs629sV7f3sqvhN1PSJ7rdbnbApPz49eGFM3zhar827JG2Ao31HLXF2VJd6qYAaTPz9R8Ajq2MsCU",
  "key34": "4BRq9SEgc1NWpmamqfFiDP5hAA5g59CuRhna5WLwJJf8TKA2zxbSnzdpSP3q9EhVskLzqtTYaDmKnvGMLkzUCDmB",
  "key35": "213L19uaVvtipTTgQJpeJHyi3H1VW5VJGRWLudGwVzrfouCFGHgyBbU5MW7K8QJ1p8CHWT3GB9r1uL4pxGHHRA2P",
  "key36": "ZpEN8wKtvaQZPqtH3PywmiJgt1b6XTnqeyKSLtimJ5rTkq3ZHLgTNwSNWwwh3zc2qLPyJc6wrw4FDsTcJ6SWxZr",
  "key37": "2zoDUV8marfQnaqsQbLED1f6T2XvVn2imCPMa3qCQmHmbPBg9AM6bijfAGxwpjYrBEgepDx2VBi7fFowqoxUq3Ay",
  "key38": "2GvJsZNEXGJ9jBcK6ZHUz454jTpsybVXP993GSPEFMrHfRpyKHB3hqnAwvf81ha4MoBTo4P6cDNLu7Rd3b6J6Sby",
  "key39": "2fgfcTE7U8kssMvL9axffQqQ64SswhMqKruPqWXoxBNc68s3FEeyZ1EE4ApxA8nmKZNipC11nPH6J8snkkz8s5JB",
  "key40": "yX9TQ563vaQSZvkwNrrtMDTTcKypLWAPfFjeT3PEeLGTWYJXfm84yZmSUPY5M2K3szz5TFXehWUwNpfCuBkeXML",
  "key41": "47G4YaDmcefStjEXqMXYGyyccBqPcpL2XZdJcamzUBEPSd9zBpte2MJAg6RH84oPNjJNoFxNMa669toPqHCGTNy9"
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
