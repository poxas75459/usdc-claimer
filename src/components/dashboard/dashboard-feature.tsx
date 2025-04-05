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
    "61GnYnDKvHvFhFJoYWigaeFVrg3kHfukYS9x6P7aT5bPi7uHUhZNrLSPQAsFPRKU8WVxK2uMkrtWU94kkUFe153A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jmnPjDzzPtRqXNSBTNAd4zAkZ2qcn7tN667SbP44fp4BNt2qG1RNC5zL4N7zbsKtQFZkD9U21XSKnbuQBHdmwbn",
  "key1": "NDFnzuF3rz9iJvraz8E3BSwiJQsz5uvZ8pnvVC5Tk9fYvH7D1uRp85K93G5TdPqauww95XPJMyM4jQXNAMuXhuX",
  "key2": "5qdv9dYNpeq9ub4yWW53LsNrhx5LH9o3eKnaWhn1Bme3za6EqBmkBiXe33pkdUHAbi7XQHio1FrkxJ2mdKMaw3bb",
  "key3": "Af8LPxmhQLTYPjiQYrC5aNB9BnFTj67PsG7NvoxvtcTSYvrn7VvmnL7kd4VMG9qZbaEtjrJoQ2Tedvk7wS2Vyet",
  "key4": "4hVRveVW598WWAfBgFvcHRuy1fZ1ch28dsMfW4w3anH5LVFKqZB5pKRf5cQVkvnu2QSKwJvdsPZQMYiWJ3YLZrLT",
  "key5": "37Psa5BwdLNxVp9q1DipRgNR3T6PDJFEths2NNq3CNbHvhVEALPVXqU5gp6usMLbQ8Ah8XXcc3i4TcedJ87uC4td",
  "key6": "3dbyEnHTTbc68s7U45Z7Vh9mEpfgTdi5xkxd7ZPJTAYGXHgFWui8swNMZmsHWN6NT35GjfesL879msMeoJEVotvQ",
  "key7": "2tW6uV7o77KkToEDRcwaiPT3hMAq5yHzXDbjaVxghopiWKuvfC6xYRdhrHANTYUy3MRfKWq4axE5gXVTKAVVSXLR",
  "key8": "4GWYaboywhfrMoeKFwMr74Pjyowp4jJcjuZtYMqcvsLvfj3U3eL3BGuBrd1AH3dnxxzW742u3jdjRTqAxdMviMrg",
  "key9": "2bhcVeSo93eiqxdJ22wtMZ9QQ7bTt8zLRyLK6Nno35ZT3oSY5cVDThCZEEVMp3i9QT3Vzvyvg28xwvUkjXQArPck",
  "key10": "5YfyfefRZRDMpndqgZJe1EwUWcakyy7ruSXZ57i7NHtmdAwkwaL7EPVTmnGtLmVC1QWvXovRcfSkmHCreRqRyUet",
  "key11": "5JUhoqLv3dR1aBLkXdknpuHWEcdrmigsB6542oG9fyJFVWNbsv4D619BChf7vqJfUmH2nL6Nerw16iBzuLTZ5Dm1",
  "key12": "2gJztjfe1PbLGJTfVrh63YVijpQKQFaTf4wUfJYKxfePUre7zVeH2XHtUB5h9iTXPaysgcjxEiHqBYCTryV7NuLR",
  "key13": "3Z8hH11Qo9JQtiAUqAyr3gfDS4FoxDxDERwkojZk2ZzpRrzAMb9KWw7rPSE4jLrMiUfQ6CoJpmHjGRLxHMuyDG6m",
  "key14": "5DBm6X8JUWdWGAaJNnZZHhsgK6wr3b7V7CQfELXwqycKRViyC8LNX1WyF2oJu8NqHsoHNNsuqLgdtZdQPeTgQf2c",
  "key15": "4pVMuVnLjZgtQcmmjeoa4Z65oELKYSE7D5pJSaECiY4pwnMLWdsuuqULpp2AD5s73McgtvKhRJzBDc5Dzn4WVDQ7",
  "key16": "5hHY97V9ZQiBJZ5ZXcSVvG9KLSXKTKfXNQzwcgYj3YbRnRKELMHa2o6ZBtgJFW5L7CBCsLB8qEz6roB7g359noFJ",
  "key17": "3s3EAXcbomifWVsBGkmz1hoxUUnYgLdJJiwecELX74sqXU7zZU7sddroeQn6JjZjyyExgTYg8zgh2tv3vL1RDj3e",
  "key18": "4tizUMNqm2bx2SXbGfGi6DiJohASPrweQyp2yFPmt1TW5KvTwRvRxqnAtPB8ZBJgwQrGf4B1SATh7DDGzcw5JNcp",
  "key19": "63fqAghc7mjwga8s1e6XUd9keg3QFEEkUxfjYtedhWptWgNrfhk9pTNuV7RYR9cTEw2c7o4dUcQaKung3Wat2Ckh",
  "key20": "48F2No3LdQoU5VeifPUPvkBQsp1A2b1Bv1tPMQMH4fe461BRUN4VokQtQZPfRMdUZSRrRc1ZPSc4Cwz3QH4tw4cB",
  "key21": "2UoocMcNF5QS3ZiVMuMrazorcFNSAzvMc2K6ZcnsUKCB7ricDpSb2YVpTX3yJv3rMAsgfjFsRyJm2BsjjxuwQQAo",
  "key22": "2hc1Vt9VjeTDXUeThi4rBswu3yDWWsB58895FHEHhD2viV3ZwoDp8m3Jor2a5b2k447GELSbgiDZ3SoTtigdgrXk",
  "key23": "4ekUaw4UinNgHKWkcdtK3pfJkNeoFWx78FaEQakWwmDHsqYpwewpNxnN9QGq7SpwHLnDL2GrLq9cCLC4NcFMNBq7",
  "key24": "3jzvB3akJxZ9SPLeJTsE5CurFdBhH1wYM28RuBFtcnfWkPYYhDSgYmL4sNXg4Lc7TSJB3YQSSxAJpVgTMfLnHXeH",
  "key25": "4cHFnChjcUnjN3cPVYLdV2jD883qYMGgaNWnUM8yFnxtBLMNBqaQBuZSBjmdx6cGkSWXt5MX7svSY8NMhyHueRW5",
  "key26": "2SSEhHCdkUi6vHeWG9tSA4y9NPrNLE4Ud7yRWqUc1kogLgNdMo34TnftuazovKWVWFXD2m7Ygq1MUBY324p7ySJQ",
  "key27": "5QTtCMwUCMTmbcR31qYvmC1oEKvq5qVB3acPHVNGZZZkuN8sqguADzGoEpfsNmpqy5mQVYkL8fViUNayfe5auyZd",
  "key28": "3Nob8KRCPfK6R4b44F7ufY6LANWCzcFbnLE9crjAdwiCJfauMRyjo8bBHbbbZ61bka3QjkXk5hCoq5ZG8hnizC1R",
  "key29": "5sGU1JZfJE8KvWNKnjUMUbbzmRq6ntUMmLoF31oPjYrdiLh8KtBkqhJjf5iW1VKhEeksGH2LCy2kqnRsms6ARLrK",
  "key30": "34W3KCYsf7sy55gNaPTJGzC3vDdYV5hGwnwaMdpW2eJybyqHfsiWMsh49y3XbKVK3eDnX1BLLRVMmWB8ypMNvi25",
  "key31": "2x3VpEr7WekqPqSVygd4SCmnkZ5toeYB1UNHkkdFSfEyR5xbbBiQVDjkWwiP3tB6qaUNbGR6f7Mni1stVR1d7s5s",
  "key32": "KEkuAFgLmt1pcrPdcSaqAsPUqX83QswPxf6fHGuQajQYjbJZEmxNwKqsYt5vfwj6j2N2eVsjK4aDG5NZjZe3QR6",
  "key33": "2hNC8JJPrA9AWudXSks3h6FPZWi6BNJfeHas9YTXT6Knej4cacRDfd49h8957dJkTW2jtQU7c6Y3gBLVVrY49kxU",
  "key34": "5cGrGsCeM2kjESNRFTXFe1kZhQaoNuXQVWFWSYXrd3zVjXTEBHJjyU3uoHMfivsKaqaPtbA9MoPBREDhn2KvwqoC",
  "key35": "2RG4z3485PgcKHpSnig2W9sirASA54bqnEaQ6uLfYnwe9DYXm8jzJ8EDNjFSfahCU8YSFBTvZUXRLY1uL3yhTFxH",
  "key36": "4mte1Stk7LxCtYaGUeGiWBPHkAUF7SutbGQmffrPRLPx26y5uvLmSUfzMmaHpWJyaZknhdkJQTMF1HP7SSdV9xQh"
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
