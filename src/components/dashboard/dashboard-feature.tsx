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
    "2qSKNJDhfD9nxsh17snSyJG1or1iUUiSfwHm8ZpE96hNKLQ34RdWVomkjwawhSDzcd5FGpAQrE1Wdb1zuMUVq6ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gwz1449k3YBG1ZKeAZqsH34c1FbmsuHBx79Cwqpn1do87MbTALKmNX9mAzjTDjsUD6q6qgzwckhnSRJxcRJEjqQ",
  "key1": "3FMjQanXJZ7JDXhVq1CCWpJ5NMTwBW8uDghgULtANPXKsAD9XAGRCDtDgXDW6w4tzTtFUdQWsJN6PDs3pvFbPP5P",
  "key2": "4bkNdyzKjYp7D9Awi59QC6UMiJo3MDsn6v5ZhAfwxrutqzGxHL1PMVMrtndJkLhW4KQccjd4zMa2RwPnrHycVJFZ",
  "key3": "hvaQuwDykdXq32m2N5EyzPD3SCuJEWouDVVPfWWNU1fKF8THAu4nukNULGKRgxACTXHNRNuJU7qQjY1nyJpBTf4",
  "key4": "wBC4vUBcNus1MGKRNsQpmTgPn5JkXZeRimcHkFEfaFhzKeU5wFqLLQzdhRVriADmwfu4AhAxsAr8VqHFq1Hf5Zy",
  "key5": "3gpUAE82Sz7oqd9xDKmFYLZNkKYAXFGBShtdNypfq1kGUyZqh6Bn45cVXTvdk7Ab1oXQDheu9RzAb3Q3af8N55ih",
  "key6": "2k9GRTBu7gZDHKXwszCEALjpvqigkvFUuky5T1ASjB7ePu6hUckipvHn8HSAkr8dR3bhi1Zt1dDmGEK9q8hp5F7T",
  "key7": "37AP42sAprrcW2DBGzzHerf61NhTMMwD4LWRnu5socQbX2nqKPn3o2moQFjUT5vTxKedGuQJaXTiBwcRHBDVYFE1",
  "key8": "219qfrKzTkro6FFFYiwiNzQtA7cnLadZCtAUrorNrXR6obvee3BCJG2kPFkSfz2d6f31o57i5TshuLnjJhLbR3GV",
  "key9": "3QzSpqVc9aMtLz32tr22C3J1GrqbgekD6JinGnLpYax8rwC9Qmvhw7SYEpRwtvagsq3mZALLciaLagDNnqEq3DCP",
  "key10": "3GQFWkyQjR8c2VJV8tzEctdKQg6aQZVScCmpXsv8MemxmsFdFb1Et9RmV3skBDbwjMuBoqL8ahFKQrDyyLn9zSf3",
  "key11": "TWY8Anh5oDEqpwAPs64MNAJaAwHyrN7ok8wgaAHkiswh92qe7XHQfVBAwHEFFfSagq7EsPAkFN5J5sCEpESBSNe",
  "key12": "5SdJpUud57RZfFEFxMYFysC3UzbkVCjjm2eJn81xi4TqYNqHj7i88Fi9QkAdB8B9o8fEr73K9fGGFQGoEyDtCCLJ",
  "key13": "2EbknmArkBAUNDEY7K6TfhjPSGoDL6DMMehdHKTuM8B5m9i3H5hgVDsZg1yNvZBHuGma5hTeuMoKjPW8JkNSnd1m",
  "key14": "3ZR2pmSE4tVQcZJyQKZQKaC7685P7MuwXVcKAqusRckU5xR793DNvbqjRdoVRR4vistbiH4dSYeSGdCceHwv3ySo",
  "key15": "2LrvkpER2t5GPKC21BE2kCYVkGvHap6zRDVuo5MSwstqERwqx3T3nYf3YbVY4hJemBfCt9QHwxFGHDTm6Ur1PC4W",
  "key16": "3ZDyTSx8EnaUM44QFxrFhXr3JL7NLKgzW5AT4v8gW8fCvRvyZphFsqLBkYDmbpE4A9zCnZTCyfLQsLXqEKk8JoYS",
  "key17": "AVZXU58Ln1YoNuXyesd6S4Na1hHfNkfZ3oFQhVAPQevooPSqxgCFAoxKJjrSWrEeqkKRw9e39N7irVViLe1hPAD",
  "key18": "3mDpKSBLhEuNKQpnWb6uuVM5mhUwzYVkaf5e1a77pwh4NLRcBQsXY8d2ZjLLjRJGdtke3wfxFrQMng6dWVAuWNWE",
  "key19": "2HucyPqgDq17tvbAbcWj27KZhi5ezR8Db8M1EUuqu82DPNUYgXr7cpwj4nsSRkZdBe8yHR3Q2VQjGWFwHY3DPFEk",
  "key20": "2c1rcoeFCmr8qqxcEdXZ2a7aw7s1J5MyfJNnHTbToVBYTjKSHccrCyb5gbJUSbmLWtbMLESXNSa8sdxGhsEMYWr8",
  "key21": "3UNw7PSizXwaC5DB5nxtqNboCzSHVxAatGNae5o6akSr85D2gRWgn5R3JFLyKMz62Fj8NeL5CapXpx8RZKaWujrz",
  "key22": "czYMxw8orZe8SNKSRNbng54QKXETbviGeYeYTATxgmWVcQpsGGup8PJzyCXagwDsE9NxYCEp7JtGHtoTHHgDDKv",
  "key23": "3xPoqJeL6Rt3QeQd7EXLEyo69D5YBRBRDbQbS4PUgGKxZisR3FA26YcChUuRrfCGQZKRJ2BDQHpnyxeGuTYgsb25",
  "key24": "27Leh5CuijMB5EAwrsqbzx2e5C2T8GjTAbpFmJTDCsdgNQkWcpgTFwbfCYinpxv2QbsvbjXMfQa3HNdQfdGzjn3j",
  "key25": "4dRgRFnBtCe2ejqsMSv2ccAKGjTMjdpUqK92Fi8HnBUnUKjHJjnwvkwmeEaSdPc8G4qoHqYzgAh2ubcHF3gogXZV",
  "key26": "5HWHiy8rS7qXyryU6wiDCoLXaAF1gZHg42DVsjNc4kbhi8ZWMvNaGebn2pwbidpkvvHp9ioCnKbxdqaZLewVU2N",
  "key27": "J5rkNCg1y6p5NtQpTx4edDiJthdvP1HQE76uPsWiRQmKJujfWifiXcQHhtkHDzmiKNNQQfJS5e92sseNvaBxtdp",
  "key28": "3EZFAVCheRDuJ5VCspD3oidoNN6S98pm5J4SamhmnzPoC47NUnmoDpkAe5pEUfy4xXGHfC1GQMx9ZtfFCTMmGXhU",
  "key29": "DoHHtchmXdr4HSVc679fMfwkD2zKnCoAXwYKASk2ATDcCQs5jxDBjrs8Bqo2DSXWDRu9XZTWw5c1J1Cu4oQ6bfy",
  "key30": "54hcJcxZUMf1as2YW7VTEuuCgbEyThZZ8WEvnQCEyCmGTu4Dax3RRDcTM9uAfYgicrLrFbELkiEXhvyJRaSGnGkm",
  "key31": "2NwJYTs3o2brzWACC9jVZGVUNTdKmUP4whvs6fHPqkVq3FnQtZmaxCCgjfpzwreYJUWGDNam8qhpyxWBMZ8i3E6P",
  "key32": "5jmcS6uKPuVQT8t9jhqtjDh5xMS4JMCai2SM3TRKvW2wD6pqrEcu6hsLEh6ULJAFnBFYd87iXeH5REaCsBs4n2mX",
  "key33": "sawxp8hnkoAwSHuEDNsE6TxArYg4AtRLRYfVdufU2wTiXX4T5NRqeQQ1SAJACzm94UtSUXvsskfnfmx8A8V7wc4",
  "key34": "28VUttyHNEQvDfrpqFQis9C3sMN7fUHSBtzn6JTPaiiJXRi5nqAvSHWtCh3MH5qPYrEkW2bJyM5ZussvvtVHHA5X",
  "key35": "4ZbatSkdWYsXfsagFRz14PyJWSZC5gqYC1QSn7Ropvd6F4fKno1X2kVKeKMLojHM2A2LmMUeyRvuP5y9sYkegMR5",
  "key36": "5yBbUNWv539RpPFxZycPDEogG6RdEstJ48JFXM9woazoieX5PhN5XWYXvtsGaHPrr3auEhev4L7SuESjebTau93v",
  "key37": "5rs7h66wh9RaqoBSutzgpNzRia1bJMZqLUmaCf8zWxeE9Vv3MqpZi7xmM838nSFYByTakJjQVjfWyPtnz5tg61Cn"
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
