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
    "2X4XrF7FCn9dP57cFp7vh7ZoDfjei4kpwr2nbUaTfjB599nB1fM8fC58vE5NcVUDUXhcjUnGHQsi4Ug4CAPUg7KU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLLzn3s6nZgv41Sz1GkBUfKcGfsfhiDvk9diHdCZ4Beo6UkM9rqYZ3otCjBi67soroaTXam3WST5eQ6i6bQ1S1m",
  "key1": "3yf8uPySYdySJUxwGrQ6XVsvjaS5RAubE2FyDPx51ZXrbqwBCYHbvPnXqZdkPHEuuzfdNE7LKt34TtZJrEj3m7uX",
  "key2": "4rn4y2KsePbXbhMbY63VaaguxJHMM4VmQFvsrvKPUSjCtoXZTc6uz7ddLeHBRgT8nL6DL98PuNqjsnJzujEz29U5",
  "key3": "4mqs4qSx1174CvdBJSH7A5BQ5mphjaJDj7ZwSa83E83aC3zuEAVXJs7B4Ghbjzz9c7UBjra45ZUtB1sK6yTEBZEg",
  "key4": "25CMmdpgSmsMt8smGwQ1igiWPJiuyJhWAYBhcdtGHX1TW5QRFXCcGmwH1LT8xxL1pvctjn91teDigHRoRo6cxmMz",
  "key5": "2ZtcduQpWj6cdqPTEPtxbwGtPQLSyEaWwn26TD2fQ31CdxksV4qXac6WdLpx9cRuBYcZE6LFhV17iKVKbk3ZqUcu",
  "key6": "4NpkeZEmf4ceXzFNwZGNDTqhZi89SFZ9UP29rvXsaahZKpSqbnBxm4qXnXxyB5wq1C2CLe5pMZ7vcC5D2o9qC1f9",
  "key7": "3U9tT2zJ25nhftkHf1DgzCQKzCaXwy8RDie7MXeqWDAWRa7xxrMPoxaJjnvbVWpEWcKPcCpYmA45LA3NYwTLhQ48",
  "key8": "2FB3MhtiyyejZpGDmq3Sv2bLRAejYmaSZHoZ9GDLT2doHxPEDDG6tYes5keZCiE3534sp74kefnwAzVwZNFq3NEf",
  "key9": "2YS7sz3Tmmdpn3geQKepukN6Wm9ezjFxaSyqhyMM6Q3uV1CkZm7TjKeJEcJiEh4QW5xKp5QWLKaMSmmAhvoPx9CS",
  "key10": "5RyJPDemrPdfET2NH8aNwtbWzRqf55YVnRxNYobPSGoTi4QNv68aNLZvbFqcCUKKWHeZYtkYxAjoLeRmDFF8aPJq",
  "key11": "4vwzvnSRQ8cgKuZTpX214CJTsUbjNAGjqSog6wqivsL2JdGYac2PSKuZfk1hPGzVvzwaXZw1SFdD2UfqVY8LT3tM",
  "key12": "5APb1XxUKVerbdf6E9CZnLgVtGfBdij22UNjCk2X1WGxUnwtU8uLah78WnAiCbWsKSMbqvtkDFjQRDeqMxUxEeC1",
  "key13": "3y2ntTgnqfcYM9M5mdB46weLvvK2XTksSXtCUym6y42XLcjdtD7ZAV2r9RtLSxYdQs8osjVhySFMk8aS64PifzrR",
  "key14": "3vSTp47byrbppi7ewdECRWh58D4Xjy8BBaM4YhdCU5eMBXL326HS2Feed3LhEQKhhxsveDxZGBYLCVKcFhtoKeej",
  "key15": "4v6WqyrkKju7qFyPgu4UNsvaREHxB2CgMZXqGn3XBNm9y6awj33fvhoJjyZJPrz6ThjL4cBYS82RB7z6sakMqFAW",
  "key16": "64tZ3MCGRmuDoxqkG8ZCYFEZ3nrhPdtsfD6HTX2EVpjcjK8KM2scXyZwyUnCWe189QGgqVbC4bvXLLpSC14D4H5v",
  "key17": "4hHQo441BQkhTZ6kgHcRViT2UxrBGFf1gDb62NkjzE3bxZeyiQqhuLUVMZqkzJUTXZi4kTzBnLFZTGgMsptSC7Mh",
  "key18": "57zsox1F6WwGYKxdqKrCWSAg76aAcq95QoecUTdjBFna2CBHwyZjcdGDbgU9sT4KwXJ7ZS6oxCZwsQgQU2aeEixb",
  "key19": "4EGj6g7DV5Fwp3VCpzv2Bn7F46XFFA8k9GT3B4bamqpdsVj9bmjB1yyahZQe8boRgxTJY2Az4EPQyns4CpCSGnfm",
  "key20": "5Cqao3HReXqu4N3Apz5cizEoFJPfZf4LjA4emNGubijsLFfPa4LcuYfo38kNWQvrQYBMUczSMBASsUHhXfnEj3ED",
  "key21": "3pfc6nLaYWz1Hq59zQ7UEbNUxJZkyuwG5XShLWy8uaM5p6kp5AJb4rmCnHTn3e7hya3tNActktPcmEn2fFREvwTe",
  "key22": "37ZvVC1po3MD9F84LUhhZGFuicyxWZzh32pAAiyqPAsSYeSyEW2YmmfJmxoDR5TfZak3dTFjB5qMEyz4EQTPmCij",
  "key23": "5SuDoygZPRLzpV8YBYnw3V6Qe27sJQfgWaY5WSrcySbt89EaUozgdTy4vEbwhgTjU2qhtEik9JtNYvUiZc7N8ZV3",
  "key24": "wBWFeq13a2sXeCtV878BMjSdvuFDbFo8Q5Sbx6uUS2ETUZ4ezSL6T6oDuug7fTCSAzZZY7bouJGtQzhJ1U4RLUj",
  "key25": "3g7fy6orVNog9Va8xCJAw3rmxnhbvncUseo3tRy3jz2s4Uk4YZyRMcLkG7ep9XNhdae1nm3No5FPeAYchUPE5GQw",
  "key26": "4R4r9FxhF4dRGr8aUmwFxvhcMJwp6PnJcZrdnG5wkSLSgj7eRg484LVSezRbaufxNXUWGhn5njg3r2NuSHYLYuK5",
  "key27": "3i6AufXCigTJ8sy1Mhb9nmF9YYAbCHWgG5iDk2JtW4Foyt6r83hZUMiQDDfFDaSicJneSwqiNawj1rHELq52sV93",
  "key28": "2NcLTjcP3XxScRAT7D4137Mt4nSZSBQzauCgH24DBLuCf3wB5pTwh1ELawh4CpzydVviLatBEjA7dZhpW7s5rWmH",
  "key29": "4GmPae5JLR46AWuWYW1DaTSwxM6mxsx8vrqb2Q5twjmaG6JGuxuK2UShapogDUFvfSqgfG1W1tFky2tUh1WGRmsm"
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
