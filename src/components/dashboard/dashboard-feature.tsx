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
    "2otR7tcLZLNq5APEUeGe6mk57gwtBeyUhydsLmGv4Qh8p5gZPhWPHimPHLvizYpxFhNeiXnGRyLKQxhMCSP94CnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "82mu9w7c1rK5FP7xw8aUSCANUQp6UMRVsWPh1t2stPKaFHxNmBhBWiZBeZ1Sb1iVgUimVm5BtqGtmmtz9qsCkys",
  "key1": "22nwHahgeQLDghvRo2zjQA85rAezLcWppaoZ8v72rbhZXt5tHK2eZoMFVEx9dyFvwEQj5MjNzWoQzhnqDKatwqPB",
  "key2": "2WgoE1CHfdehsSz1Xet8ms2HprN3xTf9YdSVHGbch2pwFxf11sxqeXmKn5aHJi9KWqzjCtSZBFWYhKs5qkpj1ENp",
  "key3": "62BngXvZKk2DKXtTK31UqSWFWRhksdWQ8y7vQiSbFrKPyUzxhyhp2Vw5txvckAZxp5HWnghYJ6iP5Q5tM8AxcHWo",
  "key4": "59yDGkh6E2w8jMFY4VFgLUBwgqjRT8YgcDQ8perPHaZSW4j6BY2a3sEbPigbfPxvUAg884G7LGaoFZ58UfAcVqm5",
  "key5": "3mAXjxMGVNdGgTvvTHNFaLYB2qogyJjcH52ayvwy3ETS84uuKSg26ArCWfFvEHpa3vWknZ6284nEGzCwMr9TBc5Y",
  "key6": "5WoH5joffp3Vv2Lh8V8LfZXAAHSGsvhFCaGQWenuZkzpXYQ2rSXECDBoc6SgNdXDXDmu6VHQ1Ajqpb7PKiU3uXy6",
  "key7": "5ELqnN2kxXSNZgwbZzZmYdk8i4f7p5h3GLRRvxoRzweNsUtb8uzJ8sXBLB6nAdNj28jM4qnMbKixvP5pePjxrnSw",
  "key8": "2oA4tD7P25hvYcADt6xBpPFuHh7QCsvXrjVqdc94BgiDvUDjASp1wi74w9f8ZHPHp8rrsrybw2TLB9iJ3rzVR1ih",
  "key9": "8638BMFwGtmDx2jcX1xGkXHF2mUGHHAKPwwUvboCoC1iLv8gnCJSy4idF3C4pqWhqaV3vE4WJYwrGTmWeYgCJzj",
  "key10": "5D1nuB4gUfZAHufTfWNKkN1Eh97UtmTiuBpZKs1n6wG3YcKxcgHJQhckVZz3F1oHFxQgb57RoGA1rYjPaxCJPvjW",
  "key11": "2DB3YriRBCymQSamdRAHwqNjVbZ2TDoKZxQoBKtMG7MSghZ5FKEytujDcBMuyFWjoWUnimnvfYMB1oV8GqW4dKVP",
  "key12": "xtWRWgVqysU17pi1Hdj7xvynDAUQoAMXgNi5paUFKP81hwFwiExhaGaLPLGjHowa45oPupPuh7YFeQJ1nnDU1Cr",
  "key13": "5GCze3HzmHQbNTb5QhrS3hfGoXkfm3w7yyoSewzZf29eej1kyP8nhzPcCLA4mzJSxsZkJdKQTQdYQYX8EkQD7rbk",
  "key14": "2SJ3J7AnLiKmyTdLnd36Bho59cpZYuo62KeLxrA3TNuWGSKSjgMbYM8nVxWumvnuCewGYfUHpWUESxptynEwN89Y",
  "key15": "hhzbd91qj2R9WabN8g42Hfg6TsPhKxgxiDPn4Pvrahk8M6pZSjoFdYBjscyAYsEeBPiVz4mtas2c5JfSkD8uRFW",
  "key16": "5RDFupxrPmFawzseJembsEmwkMBk49LfPCnhQ53opkibBYCqgGqPwo3tuzQjhs9xnmA57L7WTLmMHcGofQP3mJrj",
  "key17": "5Kf6nHPmtMc3hKtP577SAgwHrG3DenSdJCq1nV3eYTSLbqz6VM1egnJDVQs8ZtDST9ETdxLu3pKsgZCW4zDr4EiK",
  "key18": "2oXs5CwyWSPFaxrW2CAL5L1Kie52Qwn1tQCFjTvX51TmsNMuby3ZPKtUfkreQfsQQ9Tb3yotJE2Q3KjE95GFRczs",
  "key19": "3n7fbKxDaPMPrUQFevneZN4yyxn6RJKiqRJrBvAXdNdP3P3fbQKSLxufGv5s2VeQKT6QGWtpiRuzFMYJ2oTeiLMw",
  "key20": "jfeUNkrmkbVrbwa8kTZNEqmMm87QvUKAEpRnAbYe6ptpD3PUrLPZTsfgrFYXBcAvs6Drn2WQ2hrU1vhRXrB8KsN",
  "key21": "91jUQzsFwLw3hRT3aYc9Ntr9h5RTCUTrrcseEY184en9ybkEcLgkiyJzw7B1M5hh1hR3Q8gufRYFzoX7Y8QaZrj",
  "key22": "24SSxYENQKKt7quutBzEeBMUNpCZsVv4TWorsGGT7TZ3d5pmCsmoPGp57PDByJT1idvHGe36b6vrGAgVEdn9mV9y",
  "key23": "3LTcnsvCNXsBypKtPEumyYR3yknHksTg5kcMsjRa7veWFhtm1ZKcoDXNasoQ6PYGEyrgfcXZWBfhFxbqiL3PRR7x",
  "key24": "3KWdZ2a7Ukpjfm4iJ6HjneaG5sAMKVCfdcpUmyHpyehM4aaxFneNniqPtAKkt8DA4Z6FDXnD1DiEgdZRbJgRiNxh",
  "key25": "LSnLkrWhCzxNUp7cJnUqtqcUACB3cYM5cNu4NqqNBYdrjKKFvmHLHfbjtBBEb18jAFxsPRPT1ZLAVY2tmR8qwY8",
  "key26": "3FgwAFQod1m26GKfT3D7BDn7v16iH6Bg2gs2otdPD48rBdts7Qz3dGDuFQxJ64g4AZmfBqUpdvzL1CjaBSc7fdri",
  "key27": "5H6LW4ctn2neEDtoDJ9QkzzzZMGDj4VnyzEmQJutRAkFoFtmC7qrBwpXeoUPzhTpPjrehnr64gTmhwBFjF7eV13r",
  "key28": "dme5v3iJNpQiNwab8AWGKzz1n33tWC64NnxQwpJbjEkknsavUMNvHXhULcXvWnMAQCvZ6mayx85hfotRxf9cQTM",
  "key29": "5vhBdmNzow4ACwVPwF4QAEUhAJbUamQ5J8RaBNusBXph88gY9eVYatKH7EU96xrocS5Kv8KCRGoju9JoS5E3EmWE",
  "key30": "5PAG8VgUmbuwG1iJRjNmPF1sZ28dPAGgvguzQNkfgcBnUBUmP87KTeweCb3JLUaZorSd2rBQNHUndV139jSEAoc3",
  "key31": "1F9reiwQYWMjtTym4RK53XbTRPQoFhRdePnH9iBR5B8uiBiuXKnBMZBbi7T9WWBLsNqoV4UeVqQnDqqxpnxHooS",
  "key32": "KxF4dB3Z5q47ZVKJGeTC7ift1HAhXKovdjyjsFtLyP7WGWpzRuCTEGX2TrWunEnQPYs3jTrjJofQayqDy3SpYsF",
  "key33": "3oWtu8ACB8wDxafdLRhPMH7a9GWdZUyVMLPZs8ADLNypQkpxS9sDyF12SeFdxn2XFAdg1XVqkTMposNUzL1EGqgF",
  "key34": "2EHvVXgUDjsVjeaW6xKZ9t8niLvuGcotdRkzhM1LWfwMdUfLB5gQY3xAo2MRUDZUS53WFcE4X4aQU6qj2cSiyEPb",
  "key35": "3vLXxsAXjz945sueeuikPCXEg1vUHNSzXxGXJLNzuQRC8gES75UGjGYqNzdMqudNgjnVryeaVzVzD6sZcmeyKdHn",
  "key36": "5GX4u5jcsEVTMxFwDEmth8x1QG578GgMfVYebRWoSbRfg3TBBSNwVcN95Cp4iKH8pef7WMBYr2DqdGyctLxSnNFf",
  "key37": "4dVBupMktcAzVKsVu5M7iQHQpb31q1JCRpHuPwMUX7P493DG1VnLTUfYTCKT2u81CY3JhZnFeDjMHYTis8bKiphZ"
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
