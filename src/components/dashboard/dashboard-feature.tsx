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
    "4hSD3uRJFRK7FAaagv4DpgpXpSScpx9F5jm9nBokbpG9D57kYZxEZ7yvb2R3TZRkyVhgpRTpAEyuLkSKvukQvcPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mdqtszikJ9Z9LiRvoXDM5i5Eacut4CtfZ632vK6yQZjw6mmLbGxbzdWpSCcF5reuhonwCpfaNbS3fCXp6iUDmfj",
  "key1": "8oUq9RLhHAscG7TdWpvwhR2BHiaAumMYKCVRxSo59Hpfo3VWSc8ZRVAckYm26Q8wGGoNzGb4KH71na1ZAYgVpTR",
  "key2": "5kmfjgGMuK7dKqYJKSDce13cQpH65agAoSDYpPg3dj2vjd1CcAz6kBNDXWdmsoKm8WG24TAvEkhtbsXV3FStTzxJ",
  "key3": "4Fk13uyzw8138An76NipKnf2QFkKVkW1sNH1qg5XAv5J1mGAmQEwJZDTacmJnwnZni9Kr6eaPgLFy9bWj2tBRe67",
  "key4": "2zz2L6iYe3FY3ojHt7AZ19VnHQ2JLcPSkmXAZjocoNkPHzuT3HHoJq5GmuM8dnX545KLCCKf2rMz64geqtbGwtjd",
  "key5": "3fnnWowD4dZHKVy21JSy1YMchGd6txiH991Ad5gi6VHzKymaExAHpdKS3cAgLQZDgm6hi13CFJGTfa26ckhN4tYy",
  "key6": "34SaZWgNxZ1nS3h75oFDLsvNvpJvFUUEujevRo1gq3yjqvcdokdfCfLGWUAS4gsGbypbKWyRcmA2MMsmYjTM2QWv",
  "key7": "4zxbgcEeVcctDYFwahM3sLisUT9LvzWtnb82jUKf3qSpzaj68VDJhg4v3hCEk9BT5zVi3UZzi5pNENfUFa69ApJL",
  "key8": "5sF1XTtNdPjFsgkgaSQgistrYKCYSx2by95TDwek8dadYaq9bUQrYcCn7iznH5my3iycs5W5SuTSTbRovsidcBSh",
  "key9": "5boeVkSBcJPUJvq8dbrhpysVQe7VggDQBq49yoF4bFhz4e8m3zpqRYWvvRM7msNKmSZ6QgtR4MUfEwfzCyHZmFWQ",
  "key10": "2KFdsgHiYfyo483ZxF1krr4wXesFMLRk6bC8eiHMgBFJ3xdeu4ELw5QxVKFCvyFu3jt4p2Wtu8YEY2XptjLP434Z",
  "key11": "3pze4sHroWaRRXPQzGBYLAfSkGpdLGodQLK1oeDi1QddHWmLWxY8WFp5ABN1vZXhQkBPb3MZT9NEeNzU8ZnKK2kN",
  "key12": "4kmdc3dbc34zMHdzDjEp2L42HsWvpEcn32CJfCEnqCdgB42ghkoerKM3F2XonXkvevTq84LJesfKMYVYcA2Zc93y",
  "key13": "3TKmxQRNiPwDwcEnhn47qBv5NDk8GEGguqk7GgdHCgQtMwgAHaNGSWdzFHazURtDWjmgAs4g5dtfFv3xFaXpDYNS",
  "key14": "5nDS4wafBrLT1DL4Aru5aQggskKfPHW8EysAXNE5ASkjFw1DVyrVB5oHgAEDdR1HAGgEXSk1PcsdbLmL8Poo76WB",
  "key15": "34ZCw1YZC44kvFvynx5BQXdvvS4zaBT63TwYU5m1MuWeAv2bgMgqJa7iyrqogwZFLEEYgJtZX5DBfrSZ4uopFttW",
  "key16": "2QS8v6oMAqCFZxzPkeuWxZ88hcntb2CTZ2L4PTL4EoyPZUCKWt74GZm45rjUyqb6aXviuY3dZrXm4TzYKt5q7ufQ",
  "key17": "NbZXcHDLszARzfRXk6B3bowh4sQnWH1C9dUEaZLNLyt87D9BPbtNAV2tVLCYako5qHuNzvaCHRtwneyK3U3T77L",
  "key18": "3kzx3oFPqN5EubJ5b156puPMCJ92oJYrN9rmgSNqkbM9WZUpJagGv3z8kPYTeDFeefrvpZeueygfrDvamQFAyuxG",
  "key19": "3uwzb5hawCug8WoeFbJAufLouWVhjstF1abtVTonPPLVkZEG67U3EqCdbBoJc6ajUVDTPC3TS7vjsDh7nVN8nb45",
  "key20": "5ULusNQnSEUFkmXJTqbwHhV54Ber6J26pdJjNyMQBTHhBguP4LX8apWp6zippZmaN96etW1EnjB8z99Em4Xo4Zgc",
  "key21": "3c67o1MRtb1aeTyEveCf2fXz1MzrqMCaLjvuoTyh7XHdZEmzQwMZMxfpJpDVugQheZDaBPMc7CwiLbWtNTmGrMvB",
  "key22": "3nQyzDxj8DEp7Kg2VKn16uRSQmPcNpJ6q3tGtXnxDkARLwsWWLwijeuqkSJ44JFRZB1GdDfYtbnY5ZZ4REqRuUtb",
  "key23": "4wy9153YLKCud1JVtMC7ePJcVrRPB7eki8MnvRGSWSaWGVwetLtkEgzsSTKXFGXrVdaF4kefRNnKSfCsQe7FgSwS",
  "key24": "4j3cmm8bKKL6f1fUzEbTiDutwbyxkLUrczh4duPkxX4sv1W7gwbn482RnfnM4CgieL24du3UxxAN4caF4siYiwqY",
  "key25": "4rajHDgQyxcqQQxStdHWaWn18uMuaPg5MWuxCPsCTnY8Bt1JMtXo7MuhAFheFGHHBjQApqWsSw9wa42SxhcbFAjb",
  "key26": "AGuK1518syNuofsgVF8pakFEZMbicSFHKRixETWvAAXmMgARxFkGSbQT5BByonUqv7WW3nQfFe96sULbB62u3s5",
  "key27": "eXaQSXQNbqV92z6hNcsJuT6d3XVRNdUXBDfmDXEtmzAkEdhRQeyfSSbwXkaJdS69tbfjSukb3V6YNqXdPpnj97c",
  "key28": "65ERzibSzBPfjjAPEth7td2DQ36NRKFEPJGDsU35FsDRfvy6obmSVbXD8XTX4rvtwvh9cv4PMEQScfp3Ks132oGi",
  "key29": "2qjgWSRFDLGFi3RJtBLt12xaNgkLSz5Ahm3GohiwYc86RYgxQH2Ppucdh1gQ1wHzkcoEaUXX9B7sNge7fFTDGcYr",
  "key30": "2x563kMqX7Di8bJUsZyB1YcUBFKauZyB2B3TaLe7RhNdiTe9RbfQEwBSrt1QWA7wBs3awsMFJbyXYP2UjCPnApfq",
  "key31": "3hCQBzpdrXDpwUa8aVa82S1WLkKfbjYGBsueVEq8D9JVwS8HBBpMSqd6uckFDmjtpiR24jjMhj1oi4RfVJLRDSmR",
  "key32": "3uqUWJDZDPyQLeaSMrH4NYgVQ5cLfFFcG12n6LMqyX6U15wkA8rZj7HRoCtEdzk6F4ZfSJ69j1s4ncU1QcndxoJL",
  "key33": "29rge87v7eKU57nrAiJp7oJbH7GNuhxhs5kLJo1p2fbRfByzCiHKaqDPHeCXWxDuPhLSwD3hTgqGxPL3NAf6FCom",
  "key34": "3KAuAyYMfCUWFspV5UkVRLmbnm55sP92wXeUKJvgZnu9hRDUK2rcZda4FaWEJQmWzaACjQpMh7ngLEdCq8yKMxa4",
  "key35": "4mqCXGxcC9DctbG1fV2YfanSUzSs1bVvC4Qd9Ej9knWhiW2rJM1Trgb8sbsAaTkQF48kEw4hyWMioKDQVyWwAA3Z",
  "key36": "5UVn3TvzJYaWVrJvogrvi6Zatw3pqkph7uDxqtQSocHXVrBUtW33KsJMGb33PguU6hd3UTYocg4aWGJjrxCSXrty",
  "key37": "2Bq33We25ua6yhhtobL42eoWHDmhGUxBATB5y7yvfiZmQXABe6cQznXaPJZiCp6r8xfLtahama49Jdj9asdAL34e",
  "key38": "4X9cMV86xRDPK9hX4p5VkQ1aPt2CkUnMvA3cxy1EdZEx41hYVQ5gtTeYg6ENZV7ThPnPKVLZFpmcHBYdtfNARgR8",
  "key39": "3DNdE3HrzmjhpErqcikSKZbAzYkYixNwXdbpfGyBrxtNrttAyddbu1VYu7AuLizKvqkkTKR3LtE8FxpZ1a4wMEWe",
  "key40": "3mWC9EJv7QbmKrayWiRwhspgN14d7ZZ4pEjzWNmx3em9x4TFHAgqT2g988k8y1yogEJi2SEDE7ZRjSvQWe2YwKiS",
  "key41": "52rQ62rsA6rjE4QnC1PgVccRC9cnwpXGNargCSYbbrqwciPa9AViRSKBXjXgv2VAKAhGn8fthXvo2rPGqMhohtS8"
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
