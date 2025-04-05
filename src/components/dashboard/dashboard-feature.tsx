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
    "328SxD2eTiUdiu2wyC8fncdMmaGWj2tfWC6qgKirC3jpdBhSUZ7gC2jmgNo74XSDoGALu7y6CnXyRj8drG6JcYq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AXSsrhGVhhn243YqYnmaTXneTJTvTB9Cfbw6sCLvzyMLLBsLM7gaUp8JE3gCH244d5d4bnQRhGrszqpf2Bd9nBP",
  "key1": "3NJkmjLzmJ6LSN5QPvQMWYf8tvYSZiZLfW3q3b2f8bwbBqVayDV3Bc8xJwBkLx5LahAgV2rWtYF2R5PQ79mmjNmF",
  "key2": "4krSnHRKBXSGHBXoXqerBzDuG1LJkAspJtWgN4MgTfHuyoaRKBMBvaqZdPjSJmpa7rLNgAqzjqxYPwnRN49EDpH7",
  "key3": "67j9mqFdiZajkXUU7NtbiTVejc6SNxH6oMag5JimwvEnaQXjKrRKsRVxfFBRurtwpLVmgACDd1Z31KXvidD28eJ9",
  "key4": "ijDd8figMZTnntn9w18CNJz6mmUaeXE72SbByQY4njKBwsLV3dYKnXYPgapUBMRhMm4K6LjjTSmV9YB4vm2VPP3",
  "key5": "pkkbWGNTawwoHkvPaMyMkof5oXtgwUaUSWe82AaZNiQLh8chjNXUjrBoHTUhYH7HSAJRQNHwvvXpSLW9gMwnH6Y",
  "key6": "65MFpvpWhWBeSRcnsiSjHQWeyPhYw72bDbP9STwaPEMhZvNxkhPSGcwAY6bBuC8BdR2uVb3BN4Jkyp7KmpemWbJi",
  "key7": "4FsxwfSzr3aRG5cF6Kmfurr6PvaoYpy9Pg5y98TBdg2AgB7YqhptWzx3GcRDVDsRZVECyfubLiXsViM3z1XdDZqX",
  "key8": "3htMd2Y5vrnK3w2UHkFzvFchjHiTfCctvesVBFXcGDZMwQUzPTmkp4LmSwGoTRQMUmzZeRDAjzwYEqMXBehTGFzo",
  "key9": "5hR5C4u7tq1sMRJ8K8qjLKuJro8mZhRpPF76fBBX8PLFsndGJtnkcr54a9cBCBrZpXyTSdV37oe6VB7Siw41neGP",
  "key10": "4LKe1MEGVtH5ZnkzmsBnWqwzV7Yhz3kAZ276kCNkTzaWfNUgBzhHuF3M3d4gJfW3AouBZTZWdZbBWJam4pGaX2jq",
  "key11": "n3wy9YHMUoakkDWKRVUTk1me1zcgfGVM26kKAcTm7eQJgrVaGkhSQHgFHGynNttjJGUTwNXUd7aXK83SrddyYuP",
  "key12": "3JyxzKjuTUdL3J9TuEhd1TW5rUfiki1dbQaQmfPVDGZ4WmA2UHWt7CeqwtAcBPquS1xoXvr6HhTBnGaZSgdLgqbh",
  "key13": "29Pog7stDYGNDvM39KU3RQYk9MhQRWyuSYyLfL1XRQzr9T3Nsq8dd3dNrJ7XhNUEg1MFrZ8nP9vx9KmkCVgH5QNJ",
  "key14": "32FC1YTjaKwCRWkDNaDkmTmN4Jj5gdcnoLZvN7zqRUTVNCx1gbmzL2vNyszmjutGoWVdWLsvGAa8F675SeqHF6WA",
  "key15": "XBjxp3dF45kBHmnNBJ4gyS3h62ACQ9fieZesFWDqxQSqSsX4KnnTedEqPFZen29w7RuwGLjdTbGfdxQNAyia8L5",
  "key16": "5MwRzYkJ3xnUT68JEpJieqeb8ZQXe2o5HUnz1ZeG9rCV8wkMQ2nt2LDEmh5bG18tUXKwcjPpoRxppmMPTy7EnK8q",
  "key17": "2xNrWmWeHy8kobAGvCcn63EXX2k1vHJgXwoub4LVXMquUdfTAtFycEZpMwnd9Y7jTuQKfen7nLofYxn8fhVnCXyz",
  "key18": "4tLS2XV6Qd8EMjA5RPB4Z2PSLNJ45vuuBSZdmRebCvfCdxAHwYbFFMzZidMG4CvXs8X2mEjpQXyHojqpQSEHnQco",
  "key19": "9UkddeTji6eazsTLveagjrms7GCbR5JMUUreVge7spYEVcroo2YafAcUDFLdMt8MXVwG5wC4UME1avmWW1Ut42h",
  "key20": "5d3bMtkVosu6mqaScp9spwk2GaeYnQtv1vV98JGb6RVTQ8bwTgMqz2ZqLXmmYWVwKJSFM54eMopBX5P5aMdctuHV",
  "key21": "2vhufi89qrMXjDUHafTbUDYcvmDEPj9HBK2jg75uV6C6D94Vu3aKNpkPgAQUghM5zNaHb1P3ABpUVgHiSKSEVbjq",
  "key22": "3PTuytxyyLgGiGjuSWeLimVtW3thrMdgHVqYBttj41c3nN6UwZ34kNvSPs7pdbpwJjmojsVcva2PS6D4Cqe1kt2e",
  "key23": "5ubWdk4JukGs1LmZiwepzSjjETtjXqZ7RxumbewrxbuoZEHwDpWLfjoFgBj4nmUUsfAfPpgRE8pEmpfFa3ExSri5",
  "key24": "3VHKPHCRuZBd2yZRJ9wY53ohBHXNVQEFrS7jeMsEoxxeViRsq9rdY4i5zVB3beQqtS6wu8YWKcLREnFKpeEpJAZ3",
  "key25": "YMxzQqP7KJxFHop6xeDRJok37d1ipjRcB2ZEtHzjMhJoGAQauaQkrfHFpAqXb31eHACNxtqeLWUfzc5cooExbUw",
  "key26": "4iVfc7Aq9XCX3tS2v9c5nfeKjmd9oGsJfsZJwqoHX8iZAhnLy2sXarfbCQ5gNvjNztR1j5bFKpoozwEQJTSHGszE",
  "key27": "5W3WqGqiZGUeQs4wDqaTFnwJVF2bEZ2bv3tiEGcHLYrzuvDoNyMinQgXFecArttB8EH6EBeds3vDd2QBpSi7Y1CM",
  "key28": "wbo6F85NRFaCKDUYnFmiWLU9TLYX8qaoR65mFSYEE8wKJuKskuexCRKx5G9rvD1f3jzSVSEa85GxHghSQuVLvM2",
  "key29": "4U3pWDTNdaUV1739RVg7WqsrKorkRNdgmFAcz6KwteWMsW5djhn1CYEginU3JtSQTvyAp48F9qWwPN1dBYEi9trJ",
  "key30": "2NhcDhbwYhQ43ZmyWXH2JLNBfWZ6yjvjfBCQirFm2dBrsTpF49NK6bqRWbinu4K5YtcBffRcSHmnFcQ84iZ7wVyh",
  "key31": "5pMTn9LwYoKmYzdQyhh9Ze3uL5ELcURVNGw5HDBTceJXLZGtbStwDnkYmYMhyrBcCyeN82m89ofyAJkkn4gBu1so",
  "key32": "3vZDgtcWyGvMrAgz4gUd1AMsH1tKkktjkXJt4xPspAAqYD4EuTo3pwn14eMgoNChu9jtUopDukb15CYfTrSqMPkg",
  "key33": "2NkE2Au7j4rnWHVfgDKJiLWVkGURWavdXYfbQ1uMGi51oPRP7mnxmXKXopwUuhmnnGuC5PdFMVShaqwGdCtRu3sq",
  "key34": "4L87LvcuC5hHLquJ81Wfg6qrvRza9JcKYAfAmgYxX3KfmJaeDvB4MorngP49XkWrgv3KNhwKcsdjdfESAM6tyerE",
  "key35": "yDPF41z49sFTTefGh6VTSH4mtxkreiepotU5hPbxe6eKFyJ7aJ73cZRyijuTJKFASTSj8sRwwyn6XuiYAzDKTvW"
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
