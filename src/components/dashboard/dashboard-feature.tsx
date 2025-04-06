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
    "5QaswRcxSvTpzyHEMuYG3Eu6HW4REksLEqrUGJXbrEV67M6eLwmYfephapY9BKPwWRSRwEG56Pys6mnU64uvNYy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4reRr2DKd7f775vF1iR2eGvVNqeVjbA1z4m6LCCsofhmhKPvdqATY4hcftBWDwcX7SJwzcETN3VStddXuWQM3EHD",
  "key1": "4jE3v45FYqX5xbtNo1BSYjRVzBMDGRjj8rnWXqsUrLVfHtFHrV5Gnev2z3Bx2m3NhnHacWoVU21Ndqsq2NfZCDk1",
  "key2": "3yMM7JBMhQ2FteQyf4UvVChPoQqUp4FgLu7pAxBYTBJ7pk4yhmSujccBg4GTQDBfCneormmJjYtkmbzxcZMx4una",
  "key3": "EwNfZer4s474ozBHsKLPQcAiW88ZzaLsiQK27wqdP4E35N26sUuSFCuM6GTV3nrsk9ozCuPSWRikueofdWjiFn2",
  "key4": "2HukrPwvZuJn99Tgy4Uhi8mZrNqgF4SQm5AL5c4WPXoWtdr9m5a1s7HsVu6FzmLbsiJjZZSUsitUjDpi11BEei6w",
  "key5": "5xJkp3thHwQmmG3hwMrsmys8agpQq6MYwXLG6yhi1SYtpbddw6fcnW8hswH1FVZMALtk15xMHA9Bi8sbqxShNgdk",
  "key6": "4Q7GbPVw9UgFi2KmnuD5Nk8NsgjBBhSKfcx2re19LY2Z3vrkLdQK4jFKxurFyFj6Y8G1iiN1s3RqNrhgpcP427oy",
  "key7": "4uvGp4NzYpKhXxvq3kszNVrTkaej9SVyapuy5LKEuWoMXy1g1Pri9BfFtK4P7YFn5VTE9yh4dfsxhKG4FQEe5u5s",
  "key8": "3pbagSJao9TzV42YnvdGz4HDaetEP4hx8SdNE28eUTKcEyqUKL3kubHA388vKuvKUHZmj7WS6Z6JMJe9PSDXGYsM",
  "key9": "5Wc7eTLRS6JAq4BC7jhUNxFGwJenTdo2hA8yaVVacdZNyXDaPGroDaicjJGfiCCGnBzJphmEX5TX9muydRVmAb42",
  "key10": "27UpHi2Gvq7Cps2GwqurjrQDe5XL3R1pSpHnSGNcysSXHyAj1iZmnhv1Rgi79BVmULAeRMQSfzwKxsVrUiM3PXrm",
  "key11": "5LbCNjvjDPk8joFiBznkCWt5mDGnsovjn9xUceRFN26gygPFWG2UuyQpQiEMNb4g5kucjXPp65zJVvNhrP4VkLi6",
  "key12": "4fA7MdEB231WncuNMxHQ8qHVvcikkctVsPkqg6dPxew23nhVqHwv9AfLUVruh23H3PTCpU8Hmf1atmmftznBzSQD",
  "key13": "2eJVy2PgZkNZpQJksV7YiJF9gzdV369o6hJf8c48TH2W1qpX4SgXSo7FT3f7XFDu1j8LmnoQtr4j7Dqkfrum1bZa",
  "key14": "4Rwh9Qpht4Wy3UrCbZqTrKdSq2mokmFKoMAMGHwx96RhynNguzmCZgBUtE7G9oNuT9HQEKH19k7CGPCkgBdLiBts",
  "key15": "2cSr6wwms15hyvYStETfEHniePXwTrjS7NdbpSiBXCvQJihP4RxXmoCLvcrNgp4mJpfzSk1xZR2acQSrqSyjSRp2",
  "key16": "3yfrYNQByQ2mUWMQ5WmefVGG4tnLDUxEcpbnZTzQJYoL2EVxZWc2iGmzdupefWANe91HjYnVZEiRjKpZctSda1M4",
  "key17": "5cRxYkEjHLjfkVjchk1d99cxpme5B1UZnaNzM88J7fKERaV7h5mG6VWM6MWz2ypMqLqSo8DTKV7qQBX56NREUUr7",
  "key18": "3r8PvPWjXVhhHggVA33D9chrqGLjZuy3qyLX6fKz1PmD1YxYnBhUizwfXPCf4Tw8BdVerFtjd5LZCd4WzRQ7amUW",
  "key19": "2vzoX677UCUMvJb1aaQRTqoviegKWEpAHq1owWR5aGaiqB8B3utmf7mYKn2kReMKr943hSJVh5YHMJZddEYUqeKk",
  "key20": "3pd3zqqMyAK2w5QDVfTznoAoRP1qGjmawu7drpCkAZqSZKHTEcYSWyuM98XJUPjd8AvDXtmqhm5VUsL9m6YHAanJ",
  "key21": "4KKnBcLkphYEmzkd7Az2GCUvfoxdJgtMemXUdnri7CiQbkt4ghoKoxmyLqWhEtTyBKGAvTbuTPo6K5jpNgXs4Rek",
  "key22": "5Qiu4aSD4jPkziYnAowuKNwoneJEYrYnftojKUuuhoWnYtjAqwDdhNnT4EPLfqZXyphiqEEu4Qcp1F5ojDKVykcK",
  "key23": "j7mae1CBU2dBku9QbDkP3KfsNf2G4ioaNHiHYXyPsCPt8aDXCC4V5rbcattcdhzp8Pkr62hM4RZewj6wUTNS8d3",
  "key24": "Qrm4NCtUcVnU8aDWcx5uFCvNYHkeCXNqisZGdNdtE9Yt2oMG5R664YtaHHjyRD8tetMxtoDQzjKThbH7fxavvR5",
  "key25": "3jfdbkpAaBobNXatAcnWQRrK6uNX83pQdetmUAnEUzk6RHnZfRyFjWHiCpb9MzGbb81BRcvkBx3zpWGj13vpYwDZ",
  "key26": "4Rb5iJDBc1bg34cEQHynQz7QKtc2Nqv9ahhjzTnMFfjqkcx1YRWSisThrubZcG8iazRboGhDEqUCpw6uPrb2Y9Jw",
  "key27": "3FmHx7Fe1FQQbPB6XYE6hWVpmxSHKVKFfkHqfAVp67v1TT1sKA4CGWLXCmVQNpHDo4eDoXgZ8P4QLdKHCjbxviVQ",
  "key28": "46MAvkCrgfLR1BkgBjA1Zq6qYnkJYEjuak5J8TK8kvtGyfnTUo94N1CjdShb7ZwvM6wbEuqBV3h4wHqqFRWNqEJZ",
  "key29": "6NgptVKfRWMe593MmMb9QgscJEeqqpnKU8RNrNB7TFo9bXezJn5VmxW5GrUSX7eiUspsrDzMgVsR7M7CbkGF3dc",
  "key30": "4SNTeyMJAYmKug59dxEVZutpYo7pgxWdutq3bGQUU4kLjRhHiEhVMSkPmKbYFThboQnaGahBsD3QfcSZ69AorV1X",
  "key31": "5w53iXwS9PyefaGAoXbfgAVoZxukCFizEqonmXKfadMSDfgsvk9chDt993vrrLYrh66PPg2VmQizXukT9WibdfNF",
  "key32": "5aA7uxaLz17JJ1FPDJcPjEPDL7pAxq1euhbEuhYrQFCy8W9HVdq3eb2wu4SoaVP4pZoWUDkeBZ8sFVqFFqe9SxBM",
  "key33": "2UEKZ4NCcuGKVAZ9N6qVV5QP3UpfMB87maWgazzDwaTnxGEvF2o91SE9p7ebSYWaY6EUDh5DNw8JoJCrRYAuXLSu",
  "key34": "5QYwdVXik9YzsxWhSjtVQoDWGysu8fzHvaKaZTrS68wyVBUUmBC1A58yh3D36Zsti4gdFgictFiE3Yd6iybSEmfP"
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
