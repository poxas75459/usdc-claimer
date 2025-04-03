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
    "5VqkmHwWSnb7JnGx7xWJkNxo71zyhgaahHrZtdhXbrPccMqiM2stNQLEK2pExbdnLfLWHtvppVvrUeuXStsZAb7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXbsbG5UU6KsqyVNPgTDVh1eKosRqBSj5AmhJa42Lb7VJbBz9vpjGeRoycDT6XG9AWPzpnkbPV4kXg1KB26TQnS",
  "key1": "41jVKM1M4rUhbbtQD2GBieBxSf1xoUuais8GGkZtwxLaAqAWSY922Quu9Y68tq9w82EYmwYW9anUdV3fcFCt4qNq",
  "key2": "3xJVDUXfkaCVPy3VSiVpRpekcorYHjkv23xxQsb7LytL4Ne4L9PseaHJH6emZwr5ed7HthgeEvhPYKkEBDy5qgNw",
  "key3": "2JUMNix5bTNvNzSbp2Kc7ehm5uYA6PmXswSFygWhQfhUpWF6VRaRwQGuD1P6jzDSsCLJpYku9robyZHfWRs2wFvJ",
  "key4": "5MB8tPK9Zb2SbhYrqmWdUfJHAcWeV963ShFvnK26JZqH66d5ti9Czn5XMYnyidC3T8ikuRuA8UgKattxB4MLnERw",
  "key5": "YvjfRH4cXBchREF1Ft4kGzXJR1KhbxcD18rQKMnQSmVVzBpLE6owyiEzadF83N6DvDYtW3ExNjBBo8PmFRM5qTS",
  "key6": "xzhtLvqd7oRLxzxGKwnx9XzcVtZhKwwX6WW6DBFAWWCZR31fkWyTMHnXU2kUmCkutFukU4qSxaTCRYihyFbMsmF",
  "key7": "4UsMZ4NFoJzHXgHBTUk5dRNgoamRT62vcqcFK5k34eaumDuz8U22YfjZR9yMxybUjnyBmJ75SPoxR2aPof1KGtCG",
  "key8": "22pdL4E1NRGVDyjbdEwyYnCHCeYg7uGUVFF7Ha3Ft26k8jmCFhCBRigUaaANbPCSLTud7eEgm3LcQyLxz8Bd4zKA",
  "key9": "2WxjEj21QJaSSRGw8pD87Fao2gxndRu1EQf11GLyh3QEV5XCkgJ34jJnasnk1Yx6B4nhCEUmZVtADLJ8L3AYchtV",
  "key10": "2W2kR8P7kzouzhSNmH655ESKJKHZp1ePMCQ6qvJjnwxTxFm33WnP9UbGc7oZd6Wyb6eoNBUjD7MEppZKKn2XgBDf",
  "key11": "2bm1ynfKpcKW7vqddnbMREqZjHVmeyqeiMNV4Y6D8iR49kQgJ8FsTgVRbx6nF3wBWLXe6o6rMkZDbZ3JsB4EcAzJ",
  "key12": "5QDWh8dF3QsA3N6VniwjDHtrcotRb3kwGFXETX5rPhUf5oumk8HQmnLFmEA31fVuXBUuyzUVsMzjLNr9ATgwAnB5",
  "key13": "28AgaB4rFMiofcMGiCF8PaqmuR5BVF5KboJSRHdb2QWsfsnKjxJCaDBrHuzUQjq9yHLNs4GdKaXyoww5C4b3nUBY",
  "key14": "2412b3K3LjZ9SkzwiC8QoPJBATGbj2WcPqprkGKaDLfeUkHXkyuJLHKCsRbrUk28SYSPGFwSr1uhPUSTqkQoQr81",
  "key15": "5uQCwA8oVZkJfT2yn4e2KrD1YWwd1hKEQEnfByxrcwdUvT4LZtcTWG2aiyEf4B2PrfnzPetwQdkDrVoWLZsA8Ugf",
  "key16": "kh1TUH6844AtDXTCuZMFgoXMGynvwV5kC4SDwvZidY23rtRW15foiG4kmWc1QTn72rCS2xQ5gHuAWu785jrVsT4",
  "key17": "4pyycghMi4DWnDQnmzJ8681cpu6JvT8qDvoho8Wy8UnHUtNJziCSbWiXoZAJEQasMVHbJxo4baEWUXftz6RxLDE3",
  "key18": "3TdL819TXN9dwjbKWnxzicHZGUVsj5k8MF8mCMzmAgkgpPfvuWRfAAaGZSJNV1bwEzkawT6z6tocdV6DcTsxLuHk",
  "key19": "3Cv9hva8xQsPteD2VGH6X9n32JVyF54M8Zn4cgsEEBJYnv4KAkSp3DqkhAerPQ61zVfrR9vHLPXSeiNv8PDbN5rJ",
  "key20": "5S9uqoy1NmqKzHxAcB3V8BQEhnrjUiZotTL1sHqquz4zUgr9mDSWdCiJp7k6WjKgg7tPVLFNoTytwTPupDhKoqAJ",
  "key21": "3sdHPbXiFT1kQ974kQm9RU219gK5p11K8xhjSH9Uwas3Q3tdZmuu9UStwaftgyWbCLfGWRvbKMvUhvx9bF6oFWAG",
  "key22": "3CeZ9HxUjgtKGRpgMs9qaorUBnyjGUt4PQPwDTuF2jGkyoZbSdSX5ZeaSFtXwwBi8LHvdstmPSjGwoz7QUVjJ4fy",
  "key23": "Mv6ym1oxj2XgWtxTGvrd5QLJ83iMhSZjh6uh1wiVWPefNbi4YhW1kPi47Uqhi5LCo1Rm56MZeX6upUVwCXyDRy6",
  "key24": "4sWsQqx3U5qBCSPu9jJpRRf7Y35ypnB7ycMkSgZSAYVsRFF3b9YBP5bLFJgnBTVkovQj8bxNDQDq7z3Lp4L6pXNv",
  "key25": "4xpNPajckQ8LAm1v8tsPtVmyR2qh7pF7CpiK7CZP7ZQrTbTsjHJTqpfUBd39xaMV2hxhXr8rXmW3wg5gNCW2RpYe",
  "key26": "3hRjshm24kfhTWWkYDetqihwkp9hgUyBJrpQk9hQXHmVGnxjEaF6rYGktYUCrVqWbhnWM1NqZhWjnnfyBtqJ3tEb",
  "key27": "4BAXEtNtBBRUPRAHwQoo8M5aChaburhvUwLG7gjC53j1W96awWjzEgDVwXfQvwMuA3fc4gcUR2BRLe2EpH1ihViy",
  "key28": "4LKBKa1QBWqYoZTF2VQtppLRFSAGu3oHx4KDkMrmqkAJZLekXrRbk5hMZaPTJuWTFns8JEUBmuyjkYmMaxiAff9J",
  "key29": "21dcrh113Jc6bzXs6K4P4xRdNg7yYqTwVrir5RHTfwLPmTb94WPdN3WqW4kabRznrtvqVughJcufW2qM1Y5yDxa1",
  "key30": "2DQ1kSQGyus8q3x6Qh6AzAYRWBucNkhL659XhXRKYNaZEj9tZGNs2TqprwwyAm2RWFQozfatyHPuGyaoSKShbP2z",
  "key31": "3x545gDQbgyApiVquz7eoumixtv9doGZMomaqsAKNmh1FthCxngKeNrQ5hXnpBtV9fUuhkLdDDtxUymPc1fLmbEq",
  "key32": "4sSMg1yeU8nZQsRK4v7eUofm4C17CmhjX415VqdTs5KuzBHJDqePawrvj8mb4Cy2wXvEGwJoPyjzbuJLYaxmPCHK",
  "key33": "3TRvtYQBAt7FSFQe8f3PE6GmSTEgn4mh487NfJH8CLn2gHbG95WkVgShNw6qCAKfvHPJ4u1nJvJeJe2YhZyiYbk9",
  "key34": "vEvatbcKBjyukrnu4XtGyPMgyvwGgFZmGqWSDNQjnSjLT4ukEuC7p516kPkSLf14PjwDTQmwHzTKtDUHGAcazyr",
  "key35": "DzbrSxJKVzXreiuoHNxwkvW6NL83HHYgmA6mUpFhgM9ndoLXoySDveiVfpGevSaiTjcZQGj13gafEH8UEJU5jqt",
  "key36": "2QfpfTQoxPbG7Qewnk56HLiRcUMHxKeDH2P7GgnKi1g99uPjB6wgNBSULyuDYzBMLxD7CPei8iEvpvNcqysP3rup",
  "key37": "2S1DZvNEaa6E5mv7Uot7W8Z52FtmefQbqMmQzNvbqhvDjcmEX4EGrryDNx2nshdiotCosZF2kCHKZwgTS832VeNX",
  "key38": "3YSj53cmMwhSZeNBd6gCsQbebfkYGRU9JNNP7RPR5yM6XJnra7qsA1dUG8uNpGpVBEDLQMgEtu2fwxxNrjjicw75",
  "key39": "5ddZBTByhYW2xqAmzirxj1QmSHodUw8UD13f2aoYeUtkqzemkReTdpx2Si7ND381UtS7kcmG5B5vT65y2HrfAjck",
  "key40": "2gfXtD2buxhZJ6oLTSYSwfxqwFw4ZXZcaiDq6GUxrGX9ojSMYSkVELMmZeJNNZ6X711tsCd6bWA11FwScGujsMCi",
  "key41": "PfSFHy2kvguJpias8EyxBrvrkuR9PLeZXVYnn5nZmL7jXd5bbnpbWoeR6iQ1m6wWDCEPHTRDts8L6FagUEcD1Wo"
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
