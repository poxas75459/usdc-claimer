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
    "2j3No6JKNEzhk8v5dLtWXnHUzYHmv2kSXQonPBkLDqYpwVFcg89cskLSQ9d1cDze2QXqVFd2tSfidsQtDRmMuFvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fRUwY9mC1aspusDAncu9tuASpTECLU1nQYguQYAPbFCNYheQ9NX5kUr7rRMEevMBe2vMGUFLUb4VgSfhj6QAgiF",
  "key1": "31DmL8S47gHr4S8kFZhKPNBSGdXWRTT1Acxq29Xh3Nm5P9pisVNFzW3RrBrtGQ2so9ttfCjSqXYm7jhTumKSN1DN",
  "key2": "27pj8WTiXKVmsAB6qFeuJXdEAFYMsxVf7bH78jfNnfKWEubc4gkadeuqS5u76v6MWWmRrQ5YY4zMYdhvkVuTPfHh",
  "key3": "5bnimUYNZNfkp1bYbTxdDTHZNwhKhSHaQUnhp91E96W9Kz9Cd8KNZE9HkBzh737m9JRfq62dvLYjRKBszR2TpMXp",
  "key4": "26PwH1omRCSnbV2itRmDwiRBn1DaJoQXhchTmyGZujxTVuco16n7vyxd7k2hcMVpBHYRUPJ1CUeRiAM583s2fsyB",
  "key5": "54eFoZDeGcW5NA5Uixgd1r7mRLKRS2DatAXnKub3Y2Xu8VsDkn6fjQpvZCE1H9tzPK5LaoHvw9KGusFPUcDd1xHF",
  "key6": "XYMFhuuhkYWrRHVgi9EejB4DHyQyBnwFRJG8snR2CcHvohFTKgMmZhepzd8xaW8JRizBnGNNVmc1QX87gmshdJ7",
  "key7": "24kLUGdPcVHBzo1UfuiV62trj8fuQ9UUJped25hw4sXFrDnP7s2YXHmxcX7eC1BynZfecBncp26THXCxa4bKQ9wc",
  "key8": "2AKN3CiQNY17MHy2oNVLYWezNFZDPqF1vyKkLdtVSxTdsHvfFeFJYCgFXHHgiW4Gnk4BnTCdzNz6RbFHsNW5GbDr",
  "key9": "22KXH4xJy2Rt3Ak1ZMwJ2Dy8mmb1KGvG3NBZtnjoCiaay9iVJXQwPLwprcCTFrFdziR3HESALckzyHZuJL26Fe9r",
  "key10": "ZHmtYEZfVbenngcoWVmLcfgJdsiQzg7qjQyHJTwaEK581FxcRDwJqrAAEhdoNgCvWBCg1DMLQhW51araqdPh9As",
  "key11": "2Aqjr57yBxT69YEfnqavkM8DqagyMreQgVf9AUsZ1LEFHuZLdinMzSsGc1zioc8KJhDpURQAz6V6fwvzq54aABmN",
  "key12": "595RGJxNAybLsQCM1w1M1NxwkeyfNdg5h61Jb9rLMQggjw5NSjrweTFx8ePJzgUy8sjtk4zXbxmrrfgsBxL7YkMP",
  "key13": "4gZw6JReWqG9zf8kiB2bNofcL1idCDLzSNynoxGRPbfmX28JknqeZbpbcKyzKJzqWycAWqFDriL8DP5qVejiSWC6",
  "key14": "Zsc8LR9hJWLC1wk5iVXnmJXGgzPTxyhrsxWbRaPM8URJcaRBR7oC3hbYpWBKuiHcTFK4rKAeoHpV4Gaxn1ZEyHy",
  "key15": "3ZVAYreSp5tXLGmKh4MUgq7gEJj8Hy95nVDXqypgtponvUuD2h6ZrVSYLZvi9m4twrkXsvtqgWcdnW2j1PEaxzsi",
  "key16": "5DUdJ2c3tUt4ULMNCFJP5FhWgfHVtJvEFMLJ5Y3nVwx76ugNCvZN6ZQkGZRuyZ7bvD2P42LjbJonBKVTvis45oUx",
  "key17": "23H5RHxZFf8srSM4TR5qd9pCjWuN185i2NLmnBk7de47MjwmTMjpsqTJUJCh4ooyyPm8asKBXH2neCdfXsTbC1GL",
  "key18": "2Bzvo3Ad7yQsNk6Ub7VcTtMdFQ1n5DiEu2grukFS9euzX9xPiiJcGi5HmMGsG4epMA6Enk2MNZx65HGQmv1jehAX",
  "key19": "5X6CpgysAVw7DNZD4NtKqAEEhcvXTo8vi3yXhRQr6PeaLekY5wJkimyRJRFEi8iZSuvMGZpLbEfSnzrsyYZLtqmh",
  "key20": "2HPxLqGkDpWjPS8DkvpHnj3fyvWYZ8KgyWvxjrGVoYrhbyFNz9281VJ5Nb2nLhbbStao4CcEfZB3KVKkeG3WvqKg",
  "key21": "uJYfeu46wTYfTLBAAomBFbVnYnHkW2bEENaY6qbv5eoJ4PW2GeSzryuX2GjVSU5GPa8JHwGvUbdtUZiSkuprWSJ",
  "key22": "UjKEhnqjjjHzWyWZ3B396VHr6vJEnNbsw9yKbL386eR31HgU317yDEHAVenwQnxB9hma149qSmszYH3jkAPrkve",
  "key23": "5CraAQev3ataGk66XtZ93An9wvX6KsbJLFbxbMEdBWEGFLjPwVH568K3Ve9s5RLm84w4SEJi61dhNGPFbqHerH3J",
  "key24": "2NCcLrzhVA1b736fVqfE4wZuQcqtSYLqzzuGbeTPv7voLeqcNpdojiYn8qqkm38Se6Q6jGpQSXkSnzFYx8z8san2",
  "key25": "39SCyAoitWkbazMkZU2tvMvjVcckBh1TsRxse9vQgWML7ioy2NDVPisETtprMBna2gy1xVjLhMmTaL1DPovs9r2B",
  "key26": "3WqQfQvJzx2TTD23A3graoRr3v5KKCbWCEwvLB9cb9YrQ3RqEnD3YK1zg9VqEVUkhwGiCe7ZvrVbaTumN141U4BM",
  "key27": "4h3sGibLqeTCwbzdwnmgPTqG3gXXR7YRQeFGFkxxbS3YEkTDCygjf7xsjyPkcx1jg3mU6Tf2H3wc5WQV6GSbf1V9",
  "key28": "dkmLPsPJAsyBYiRWpauDJcQ8s8oErQPQj1zuuqrm3MQxd8MpNGudEWkToFDMeV5QMHNjcEbRcQnZHmuGdJwjsSj",
  "key29": "5XyAwTLXXNP538rR3uCNJKAdQVE6ySkiMwhvXCTGhshtEGG791k8u2TmhxWnGRWystjNXosLPFDAEtnUXT8iWcsS",
  "key30": "uqtVzmsGWScBjh5b8N4m2SvgvrhFwhRWRS1ZBoE5QbHt2t1HDcBsK6JGEoH9nNvxNoRpEvB8SgnwjuuJczDNbfh",
  "key31": "VXtsJHe33ZAaK2qPsQ14nNPwbxPAy2bGdu1Pu3LywAzfQiJLb7fQkgwX3ey9BxEra5QfpcXbjdFD1AsV5F7mKM4",
  "key32": "3szno5ym9ktvNjwVF8U9BZmgdttenbte4eH5Zy8mZMmdrNwgtQT43cxwMcbV7dH3bwsdX5VgNYMSw2s8786VjNmh",
  "key33": "2VEe9qiwVGZbE1C2gNtPdHJ9JUAwReiJQTnyeeafCdUwuGyPiZtaY41fo6d4jUJmDaWUPFsXaQrkYqJM8feLaDgF",
  "key34": "DmgU6viwzVa5zGK6E77CUGbBJkmU2Tb2RSqH6e1ga1JLMiojwbbWEM8LjNBaPeqgU5bWmrzXZtYWH6rBdCupans",
  "key35": "5Xhh6TJ65FdMbuCuBnE37JDYxj4EMz8Qkz6rQxayBzKTWCPqWZZgMV7z3kSKWiYmw2gf16BcwwowYnLA6DprR2mE",
  "key36": "iViJvvH4eF3nCbmyLhSFgqpKzemuqGNFJJcpbPL4Yh7ikkxavanSkhTUzgBc6YWgj8ihsP7K5gdweB474FTSYwu",
  "key37": "34ZQXcPAtfprkN4kNAN9JPx1iFSkpuB2PimPFMkTfJo2kaFPk4pnomRDSm23GJm8rMvwV17WJr6hZUbbfDB8LM6H",
  "key38": "4ipyt8xdiWRStP4JYiMB6Z6RReuwsUGMreW8rxG4xv3s7XETsZewEbUgcF4gfT6eqN7bVKExPYGKP6wG1cPFzcxR",
  "key39": "4B86E1NPiVXLqesJBjBeg1iTFZ4Z9fsAtehVa5by6ykZ3Q9dStrQo5AEFyvV2fA8Di9yw4vJ7aPEJm59hCqGfYbM",
  "key40": "49akYZXJzCRSNRUZkHrEFA2ZL9ZYLJn16Bej2KkSxwgtkudkHyPih5S3oybbwTRrDocppcLHQAe5eT9fUxq3BkW7",
  "key41": "3ek6xz3TA58M3qsStDZJuAVZs6L8phQiZo6NV1aoBxXYGeqeN5TW5AR6cgQKKFBhSE2oYZ9XQiADwuURtKzAwr4q",
  "key42": "5i6bvoV2NVtFvxXFRYNEWu54Ai4k8U1p6sUqe6FuG5K26vnfeQsHV3SE8JoAaqt9kJpUXo9b8TDULGipajdrqtrp",
  "key43": "2FwjNN4H8mqy1E8aCu5UxeQBnMPT5dwj76mRLqAQwKihf2ajaVNwERGSBHof8bzsYjB5Nx4BPs7C5DEcHLLwNdpF",
  "key44": "2Lac8QQiGTsE5CVbnkdZUPdz3TkuEbDyEffsneaRsmoc8WJECexkTErtqEV7fBMEL86TSTtGtoP5KsNhgtJXQkz3",
  "key45": "4Xit5CwrqWK5SZtun1yo1SUgCgUfyk1hHepEejSQDbb95aGbLFdey45Myo4s7omP6n9hhW7ZY6YQCfBPCC8Aheur"
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
