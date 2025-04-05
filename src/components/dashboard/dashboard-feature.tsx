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
    "2w3nKpEk9DKChCiyShGeCrSstgpeuGRGXwWe9jUh9vVTuDZaSFQWsiFBbUdjc8k3PTNUXhu78VWVNna3aqc5bFvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHZVePhmEpgYda7gQomsQjyYpAaV3BvFUndtVwwTFES3GYd8EutjZu9CSuqJ69shUParpVFyCq8RNY3k2zb1VTP",
  "key1": "32HsnHamLD3wdg9PCgFjJYPbrELNjDtXUn5iMYR6QYJ31ctvLpcsZZquVD5CMNUBExSrauszXRWSSHoGocVc6GR1",
  "key2": "R8K4aXbJzdu7iLTv1skF26Jwhje6CWjxHWCSDQaK2WCeYADxTmsNJ8ExAqQepW7xeckuv4YDdUJ2yzthEtEZLkC",
  "key3": "2jg5gVBu1ahdbMsX2sfaeo9HcaJxqStMs6cgHYY8Bq35Lry3XPqbV7iaauN8SDR4tXJ1irY9Zthhrhb6THjfDbzb",
  "key4": "2WDuXvEKNkzKUdFR4UthrWng7Cpr55L39ERj2Mef4dSko7TWW3z8YrbXoYLk4HDvTGx67TZFLF4dZWWtxJ1xqfSi",
  "key5": "3YggHKdmqoA73dv1j4pyV7T97R5e5CfvEpgCGm1wxK7DkU2jKZeXV47WsgRPgnuzXqX4epQ2YP5Zx8MxuevyU97z",
  "key6": "3affWGafQdg39deKRHdr5ytrWaH2vT69jMNQJ7ryB8YG8669EJFWe3k9c2yuXBZFJwSX4YMbcNh7ixA86yLxyfk6",
  "key7": "5LBgntFqwwy82XEEt6Yd1s5cgC2juBYtEsxSfiWNueUuNxNHnbvHaGvvD423XX5k1uRdSGo8cMr3N61v7Lfh9w1M",
  "key8": "3nrgRHPUGPMfqZyePx4u38Ho3nUXmSWsTgTj5yPtRCCqEgX2G4ER2xh1k8hV2UcUyeruni2zRyuUPsJJF82LjS5a",
  "key9": "pXWNt52BgurY5MmFDXgzBge6AdvARCpahKZYoWD6oAu6aKUQjU9RkvGPCAv6zMLETnrGwF5YygpraTBaaPuZXSo",
  "key10": "4hiSR8kG2R6zFh5ZjHYBAnSA9EBvQviZHxTf2g61xY1WCGfRZz3Mgo7ntXehRabcwebsQu3yRPYcqs32njGBUFEB",
  "key11": "4w7jNPnJd7RYWYdQHZqwfr7LZnZuRvYnjE9YP6stuzvcMk1BcCLzqHHmjoj9T4htCYH4RE262devyBHHKDzwNoXP",
  "key12": "5zboHNb7amQeregq3n8Rp2Q7wfPvmARq6YWhHS4Vnvan6fQXb47vvpDMETxwmQEtdZsGofDXfh14SsTef79ncR2x",
  "key13": "4nbHXjrnhENRWJqN1sHxscEdh15UaLgefSi3wQ7o3RHGgEkDb8w9MpVZfiwTmxRzQTX3YnPoFHszEYbGXJ7hUzWu",
  "key14": "4cM6CHpZeSjjNJJtt3LB9VBCZdP1SRwJorrPaMynmoDEzfpDEFjX8d4FWycjFt2gXpcMQAAFnpRvvyXXvkGMo3FC",
  "key15": "4F6hgm3xcgQPQPMpDvAiMBaNpmy257H2czYmaV5YcGVgNUuhkRqfD52Z39Yk2bxo8W7XuFYdTHSSvHtxW3JjR7u7",
  "key16": "3RScXcRQfCpHtDd9sMgPGep3xSbBdECzL7cf9NBhri8EGWVfjyWcfJX7AKCm2kEHVERpbkDfWvTEUQhazngZssRu",
  "key17": "fEoX1pHk5MxBm4c42Bw1euoR3EepJU7c4Joo82HvHbyYR4oXebv8ViUbtFG2ZRiQGrK57tMgyjQj65PxPzppWA8",
  "key18": "4wFgjeVHZXf1ffCoU6pkkcKCrKhg2jREKDH7CQbeeuvwtU1DN1AYbMgv6HSFWw6qp5R2fszE4VZS8WUbFVnZ8wf3",
  "key19": "5Y3eVtCRQDNziHV3wiuELGjh9H9SvhhGut3EyvjVCHJ5wgQHLCukoPE4mdq6JKmjhnP9C99dJMSgMdTQyJSgLgZE",
  "key20": "91fkGMCrR5oYHWdD5yXtwWityaig2LLHMDVP9xoy91rKZaksCZdsZnBADTtp9xr7N1XNb9KuAxFhDVHVkhy2zYB",
  "key21": "4aWZD7hifV7J1Dqt5dHHXmAgJ82gre7zXhEcknr52hWBmtpDdxTbzWbwwyisWh2C6vHmdUoJDmeymYgFcAjbAoFr",
  "key22": "3J2s5cTmfbcUxpUdWcqahdBkMrr8hhdBnsJUU23t3bqT9wpSTMdFkBgAgZ8jtKnCDUbf7MZfpWF3Lq2nZ3g6jLi2",
  "key23": "3mD22SXn6q8psTikvTDnQvQcxrEyUyhSX3JipCNZQMCqTc7YCHCxgxRPaQMezoQKSNdw3Hv86EKVoyMi4WkuNxDt",
  "key24": "5uUSDqenz8JoeJJFsyyrkLHiX4h8uHcsqT7UkCs7DZRzozeDeaotghu669qbiRo19PJZskW31W5mtDseexjMS8EP",
  "key25": "nfDTnT6DYr2n35DqA54mpRUyP5hL8Ls3QXXRjDWrVFbkyiEy4HoZXEYZJjXbtkagjdaSrYzeigcZ738YjaxbxRb",
  "key26": "3iK7ucKZjMRGhpVwDmpvjQwPkcVuYd1yCva1p3fjGsAqdt7KA68TJF8kjLYqtZR2qz7rT6zJ1ZtrhmzgrTcNoaGo",
  "key27": "4V3pqeK49dP3PkMsCVrPtkUtCRXpBjJC9UB6H5h5bX5jtiC2GqNfJtAqiVVShHTVziFpMHE3Fx634LK6UpHdpxZJ",
  "key28": "4C9TDCdqZFr9KQszTZXFpyLJ1PrehrFRDzERdoJnGvQg5J2g9FfsxdX1MGHpTZUv8Z9NbedKc5PDMw41ByzrFB82",
  "key29": "4fgDpehFvSuPrXmqxNaxB4HNYeVNHvtRTcUmpe6kPv2abnJ88Mv15KSaxaStUhQZdbSgnVKoNjaakP3dkjg1RPQj",
  "key30": "bvNs2NwETy1Qt6Z29XGu1HhE3VVVe5vpnyZct5MG3wuAKLZDGrR89yaN4Eys4iRYHh2ZHa9FtJiiQHYMkMPH79N",
  "key31": "bVsudkCnHV1r5JN2yRexR1iSwViAiLyfC69gSAyJnf3CC6ZCReVRVjpTWHpHkFK5ZrUZeu1o1DzQDPdSUZxDiF2",
  "key32": "5YGpfXP8Ux2ezDR3Bky894qL1vJGiMpeAwxNvroaX8FMz6kXtMh4PjHqe9GkqffkEQA7r6SeeauPgJz95RRRhcqV"
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
