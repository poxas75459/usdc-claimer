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
    "4uMXAcbjkDiehcxHmX8rHrbeipZHNDv8boRqaneRSCueGc42WHfAqdd1iRPghFbTVqsXL6o4PtUvRmC5vcjGjiSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sYsjAhjM6AxGb5FNC2PvTkijwDyo59KuvWbtyeKaAG4AHbDrqVmAxsZ4qRmVfghEXm8aJfUmSXpa1MCZ3EXr5b5",
  "key1": "3aSojv9SXTpqid4rworPBU1LkQDQC2NLtqhHBuRBwPdMGDwDC1J79fsihEx53wEka1KzB2SaTBCejRq3eRFetkPz",
  "key2": "3seHub3vEMP6rV1WsPCC91tX82NSkqBwFr7MXXU7SwEjafxkGwLPEVC6VXzC9ucrw5uGrATjP9igdxuZW7ASAjzN",
  "key3": "9S9gNS5uZxa585uckcTfiTWbRxRznaKBx5d4nHiLzMSkC8kgsyeZEJsLgebJtYzpmM62VfQksxGzEdBeBKxnKey",
  "key4": "u8KJWExWHLZLvsZWL1sBH4JLgU3HMCq2fckbprjT2tKBxnktgowqmTHuQc7dF6PNrpq4RJh6TRcDSPTexdcvreu",
  "key5": "41VzGuTyNP6LbwbExhhfuYbqQfiiFRKsiqobe5PsmFq8xamAzMCkxpp1wHeScjtqf6mXmTVQ8mGoiKbQWe94ymWt",
  "key6": "4J47MKA7EkeKvsbYNSnyzcBA23iFrouiQyRHUPx3TjPjoXRAAKh96hyHrkmdYWRxEpYEQFGgNKTbi8YgZQ5S6jPP",
  "key7": "2syBtdtexqnfi1vPT6pHYhiGtfnAHoEAVhtyk8YNxPhp1ZpHokyH9yxK9HjVWSu4Ui5evF9qdYBuRs35Rg8WBXB6",
  "key8": "22T2em8jGBYzsiZ1ibFZnHgMnG3mAdynePkdyDSiKkyL4uA5TH9mtvWXmMpiehhdVjJ9y8Dhh4YP91gKugggPrZd",
  "key9": "26n1mnUSAhNguBJAu6WV22iHTeYEgVtwFEhL9qt7LV9oghc4jeDUWQgaWWqDYZapikPi9UBTZgn9xXBB1HoMi6oD",
  "key10": "46pWDjteXg3NuthhbWkkmTYnzGkCdddAgoreUKGso1qm4rRQoPzF9JgU3jkAK6AYnG74RKdGkfq2m7hkz2Rz9r7W",
  "key11": "2yfgDfFcRDfgfNe8Sw4xDnLTJZ4HBwT7jVooSDjRjtY2i9MzKwahws9Tmwd9LRLVQ3WAQmgvcMS7FxKLDQ8Ujt3F",
  "key12": "4qkZbSeH4MNaMxYfyChehBPBBVtZj9SCccFq7m6wBjmrTKf7kmoNQMiuwDbwy6psaDQQvGtBezCwSJZWLgR4QAKM",
  "key13": "nnTytmM613zYCD8bNXKo5EHTWnpVxvMr5zQ8UbH7F1Dc3UaiWajGfywvV4dXCdz9cRrXHprhgsEyXtpwSMNAc77",
  "key14": "4Tf27r6CSQaT4fpQ4PPUkaGGGtKXYiNzQqKkroffZKJFFNYy5VhoXXmquXTDd5J1ymTmdDgmY3P3UQdL7dXDsvXN",
  "key15": "2DLzvXYxnjUjR6GkDhXBCHMBEZtdLPoWwpQQ6RgHTZ7nrQ4QpTMvyApbFCRGdLYCLf7zbtpzNQx3dYJbPvfQ17gM",
  "key16": "44Lf87z9kGCsHFmE2p5wArfqxat1rfTGkMv37s83X6K8vV9xfS4uyEbAkCHroC5UnEMeEzLZMbBHm432fTGWaE2P",
  "key17": "5RSaxB75BVHN9Q7UrBopqjPRht6sqwMiuqrYAXL68H5Z89KYFjnMyqmDC8LVet4RpzH4E3fRDL1PFq55sQpZ7BEK",
  "key18": "4PjvTmzakDo7cb7pdALVAKTpmMgo2wcxT9ygsVH9ftM1yY49EJnLE99gp4aCoG3tD6p864QNWV4FeG3wdFyQXmHj",
  "key19": "63vHb6kpfKCHDbrTSMaiMnZ79EiZeGUd2wWXH8qcAc1ENovhgAR1xu63FuGgcPuqTQtWVP4sWBnnqdiRkKeYcydU",
  "key20": "2gRNb3EHSAuwWcDgkurf54NvDLJjqHDQRTtCxXNXzHaizekh8WyZNbsN88msMgPJcw5fSNrNVK9rF3T7McgrdxS5",
  "key21": "5sFTpCDFE179ar5t2j2SEGvti9XLzLU87G7JeZ7LVmwsNPacvopHvvk6GxHtoCDR6ymtNLZLdHQLBt2nvGS2Tj8M",
  "key22": "kTiWzAkRHz8KUDib5kJ37rdFpvHL6Xw1bUuauWjrs2LUXhLWxNagzUkzGaKiaabUGM3pP7XqDchFQj1hLDjCNmT",
  "key23": "3M9AGRWq51wtgTdk5VF9Z8R6qtRhHYvTcTUyLYqDNv3RA3gyZ4vKisV4C9yyoXkLVRkDUmsmXGSxXXEXNw3kS23G",
  "key24": "43WpTg9HQX9hT5o3PQ759pE5SCA8npkijZEGJ6c2uPaTdajTsNB2DQJhpwc8FxyMBGU8myxVFU3fLo61C3uKwzvX",
  "key25": "2BdLY9kswWM8Fjy65zSecSH2qzvD9E6roiGfejdqzqZsg6RoZ7J93FhQRBHvhLVqbnsHW45cpbptpFPeUwunS4K6",
  "key26": "5qwVwPehShibZ8y6KiYpW63LQ5TS9TxWZjnaojEqnPMGukGGJ7iA6qFufUUab2xDvZY418jagYcaEyNifrBNJS7o",
  "key27": "4ru5kXjNS18f15WBo9Z2bWs6fJn3JpinHoo1pZ1kJBZ7n5GxT9kYMHwoTZycMTyVugkbx47Sgq1vqSnZ936Ws9Sm",
  "key28": "2G3Dg8LRhYSZoZnMGsAF2Nrg3s5R1sKNuhN8yhnz86vN1MBGVNmZ2b7S1S4dfdhgk4LXgWcQ2qs7jhRmKwAG8STm",
  "key29": "645Dnzm9Ge3pEJLmLShcZXBPXTFwc19BWT7iYszQqTqwej9CmxpeL2kwK6Zq8kZ7a7y82yzZ9Emd39HwYDEW3HFf",
  "key30": "5LCsSNbiABfL7v93G7Ct1DsHoWVkp3SgLRN9BcqDiXtiZwB4RBd4oHZZdm8vpmfVmv1GjrVNfPGZEx7S64LuNYqN",
  "key31": "2koFj63x1jxTM1MQFWAdyoShYSTJfGf1iABtsFqKgzJz1YHvLwGTFrayDFKrXAXct9fYJc7ZMMJETTuexRveAgww",
  "key32": "5vL1HzNmqDLWS8u1CBAVmsfEeTRxRrHPMdJhaEwp2f6FcZnPj2ZtttEMwZGxfRbFs1HPWyJwneifTJZ3s8WEh2zu",
  "key33": "3dATWHEmjcRA4QAf7XCrvHUbkjcKbQi6a5sGDiXSHgHuioawKGKTuNMJGQqkTquK2qGZHaNDY77xqd8aQ6yK4XJ9",
  "key34": "3p3FMEEXGsVXjEz2BsvBBW2mQmmUVJECK1ThzPcBVLMXtKFS121rmPetXNnLBB4ozAgJT6ggvKSveYz3dhZpS5BK",
  "key35": "41Gss2p4HWgTaF2hKoRanzwpCdpufYT7RMcvaqNozTV4kZhns4QyfpZ47xaWkc3KAYx3deG9pMVfgQzK9qTtBhqe",
  "key36": "NmhXDDR4mRFDxVRcyB8Kj7uySYEduHF1bnDQQUiEyTA2L88VZrNc863k7poXeRcMAsmRd3eCdmBQQSLRSqeGKMh",
  "key37": "5DSnueCh21FsxcfegtzNiV6uGFGNgbsiCsShSKtG3stANN2NQ5J8Lx25ViUschP8Zg7PDrAoR9oHa4RqgMDp5ANz",
  "key38": "CzQkWFG3NEBXpJLrWyC26vv6Pefyxd3bXSTxap9X4t4GvU8AKqeawdud8UkupEJPLQHPYFbktESYxqwRRigcmpH",
  "key39": "moHx7g1PapDeeGTfmiDUH4pMWWkzUtJoFd5zGXkJ38AmViBrpWTscqJ1kbk1kGiSJsGQrStaydsfBUzyi8B2sA7",
  "key40": "52YQAnSEZJNYXDQoA2np1JCo33F8Z4pip3LzjwBaZodKG5gLajo54Sn7EeoZ5tQXt3WbNa33BLrU6JF5CPoZwAvk",
  "key41": "35RxAGTn3K6cN6JDhG9KZiQ2gPZ4cZoebHuk33XMC3fGzEnfQ8wBirGhUYwD47G6GRACmiDJFhk6zgp9UNgAjFbx",
  "key42": "52JNcfkxYiD8xjd6CZp2CMYSMgL7rKmzZUBWEijEx2vAF24AzxcQihkZB3xCXe6fX5Juf3a3tbPYQWYvohbiVVkJ",
  "key43": "K4NsPyW4rX5FpNCTUAEu3bUJGbDcWgAukF8aiZyHPHpJ1VYrQoK6aqmuqRNhkiBoppHwQuBE1yFEekSzfkJFo41",
  "key44": "3TJNANS7cvw4Q5ebwyY6ZTcDWPPuwWiC9bXEJVguYosqFXXtU1VDNcc5ZMQF5ziJRjb6APdkoDUp3N3CuaQjzDDS",
  "key45": "2CSNudSnqCoV1n3E7wCHHN8U4bENKGrSNE5JLKPmcZpu9iU5wAs2XwAAUMgh8m7UhC3jyQpUH3EEgMP2yLMmJ1xU",
  "key46": "3XnouiyMUo33GgeW3iExsDF7GNCEPc4rrb8pT1DLTEbXNrsqGwczKHoH5s7u1kG8kCfB8mcRezMmzXWSewFuXXE4",
  "key47": "aiVpwRsT1UBaKZc286U7se4FeLg6zLMmgyPDQbaVHM8AMcVgAAchwzKjJmWkinWt21ScFs9Q9EjniwoEmRVHyW5",
  "key48": "5nwURyPZa7eAS4e6o2KVMaJkFnzxm2t8iaAx7pnYB2gjCYNrW1s4HMcdTaUboibfnk8WapVCchbHReLZM2WoGBds",
  "key49": "tRv28trasdBuGUBNWpykMXeMEpRg3phT9BhY9iEy9pCn5jMva1JWtVdfGEeqB59WryLPLiVncm8iUhkAZrxkM8R"
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
