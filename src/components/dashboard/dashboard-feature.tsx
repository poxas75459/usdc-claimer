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
    "5VqjPhrQgm6QpWjYG19Qk8DyebyLjoCq98UkAnp8oNmTk4NTSjtPP92888ddc8BhxVRqh2YF3rc9iwUNW4Xi3Axm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJXH1ZwsDjDwxy6BLsFxQvEoHVZuHHq1kgk4hPNZVxPaGLnVuRyf3kvmEGbbdqby3uxmN2ZD4npNp55fcofvjoS",
  "key1": "5mNw5XQm2xAvkkdeZFb9ZXLkMnP7X7AxT92pd7En5rhyKVQRcEYXYNe6kQrhGewE3sPTHgZYCiXHzFQbXZRVkTtX",
  "key2": "2e2H22nBfBCVz2ruYqsKuSqS7kGkDrNwDU1M1FTG3iGEyWGFLv8SEdmYKQsJqzy4wFcpGHGB9mvV4nacJa78UHG2",
  "key3": "eLcHeM7viK5SHTWM4kKt5hmySaKas4nnn1aV9RmttwK7y6maGuy2c62vJBiScXcWRSD5d6XC5dc3B4hz2ZudEBd",
  "key4": "JzNi3NrUGJiX74XQpUJmn7sjNH1ub52zJzxvSaKKRYEiEdh4UrEv8ZvdfrNb6wYe3GwRmN6WZq32LGKC2Nrgdqh",
  "key5": "5ZVexVxUAcwfM9CWBF4JEriuQv85CkDxSkpkJzie2LCnrwzcKMREa5GTowmH4CWDhV4ULnJVvizf1n8oADaCLven",
  "key6": "2UFr8yHZs3hZ6XuBCA75jdGEtNifP7iN74SPiuCr1YcG9zbwNFjoSWpN1Kz1TH65JKGJA9YYoj4ZQLABXEpGFk5h",
  "key7": "4CbcPmJUKCQ4FddhQqBHURSt29HUdzdFavqbCvDbLXDBD3F2ptutjnzY5ymKqrfXGNWg5dQwxPCMwCHGtXWJZSkB",
  "key8": "5Rw1uThh2DHQWxJZcufVa814DwvZxjrPUrxx3cDx9D9ZLjujhZNhSu4ngNXhoCA2TMJWWgWxtFSMMvcNm3QuD3wX",
  "key9": "33koLieDpxndJcPs9Fz8DrM9uxY5qM6akj6BR2X3D5BABVVHpGYyQGg8MaoWhDNhZMz719qMpfUvXWuLDm1h2maW",
  "key10": "2UJphmog3eGc5VYmVv4nxFB1EbzVa9zXUhRUJ4y5ZwTv5wdUhQem3iAtiLJxtfeGE5nzYmtr8eChud66dkjwtK7X",
  "key11": "2Xih5oW9AZf3R6LsTqhjQ1agfR7tBjyhEJ4Yv57Lrd53dAhBwJRPQj6uq5mtif2yCdBvi17bT1BcgG6onDMLvvDi",
  "key12": "2mkAQu4JsVaNSrkeqY6qSxkSZ1dHBTReGu8otjFWY5Dan7EfNCdjrDNZm5ZEBGnPVytbbBU3R5mjBf5drpZcfgX2",
  "key13": "4JhJni7mfY7PXJA49nxPYCiejW9jGnRiFAnMgBftgbvciMMowKQx2z2ycX1BNqaAYfpGzttTRkkwgEvy832a8fnm",
  "key14": "2fyap6mhgQ3NbnVbJwTc3ceKYWwoxPASGavJ8i1kErhChsWVhLCNxofuZKiSy17jcA1mbokakGcUXB8MrwtD9Zyo",
  "key15": "4CJ5Ybkm9WDCfDPtXpXsevo96zY1wZgGqk4LLbAkK2aHp6Ni11wfFEwrqL5F3NHKZ16AM9Ee88uZ9BuTumSRWiVK",
  "key16": "9QC1F7tPjChT1z2XoeUifWP6BeeLAv1eUm9UwmoCb1KxLFs3DwWhrr2uJuAGxzPh5k93RCdgP3712ZvLAWpw8a5",
  "key17": "28XBdxLev8EJKdzDeooRPU3yYoCbRpvakXSPVaKvxujuVQsJYzyR8v2J9wi5rggJtooLKGep9U86FBD9AR3uXMnu",
  "key18": "4sfBkyHnx2B9AMGWKcS6XLKEa8a4UmA5BLg6xq5x387kPWy25f2kzJFchix3FKh8fAP7iA1T7aqGRb9Z7LHkSwGB",
  "key19": "56L7bK8nFGJaoLfdJZcUG9eXQKFE4Z6M3QPchKMVgZ1EeVTWLVpR5tDrxhLkZcpkkD8sKRxNaCUEi8FaeSFdiZHs",
  "key20": "3V8mnoQkQ8ELETXEnKdupevTvskwKBjg2ny46GN7pJjUCXDkB5fHWDaUD5oQD3ktQGga3rvUwWqm16EwFmVGWwuF",
  "key21": "4SgkS2jppAXAC4CUQgQ1T7rYuzpMGMqSPu1bCK4NrFwJdgz5hdEndTd1zFhXxuCWJMeKXpBtoBv9bFzaNpma4gBH",
  "key22": "3ZdYQzBb6Vg7AtptbEMjYmNm7QLLjp3aqN4mdbxDFAZjoz381nQj8Zv8Y9uaBNYUKodbEwYAWsFHLK2qkY7kJsAn",
  "key23": "59ESAtruobG93dEWLkPyRPVUEboi4MkTvf4ADnYwz7rZQFSE6phppH4Eo9GxAoS3TM2xMm8uVCVxqov3YgX5XQE6",
  "key24": "4MruZGyMpsAc9fhYdwNqB1bECLLXyQEPLabFNfJCAw2wmLdAWrUQDhduvapWMLEaBgNPhPh4EzVKhnHq2yx23vGC",
  "key25": "3NxKuouqzWjF8ZfvTu9B6ZfzHWBwNCQ2VyvBtG3tBHFHRo3J6bVFL1s3abmayJ7jjUKHndv918WKG34gwFaJPtQm",
  "key26": "5PC5YuQQrvVCsDvwU34QEnqoWxKr7YtkFTz954k1iPW4Pt7WhpFdBUrWWbsEzupcMwcnqk1fzQFZ87v1zvwuRFSg",
  "key27": "2N9ykNfkASZgSKJoFTA8WTvVhTeXSVZ6kMKC5CrPEUBExannD5Crd8kUMuSTEmYa7DhsaMdaHmNEo5cjioVvWYrL",
  "key28": "5c5AieAAoXU98VCkysJZ8kVJoCST3eDqKwiSETenrExoRu4K8Q66GPdAm9eXTxmF6AUwK5oWJq5xXE2nqPvyN85J",
  "key29": "3QcvZZa1BowdwnTyc1iRWNorXrb1x34SkhiPGYtn67Vc9SGFSYW87K12tmjcy2C54gmPAsQvgSu4MZGCr6cSafQ9",
  "key30": "32dK7SMWsU94pPura9RZ2KaFpgTqXHL4dZTooVATfX7GArbVmrjvriNd3FAdhR2kh9fuEU5B446KEjZ63KVvMSxM",
  "key31": "5gu2YoJqSTvkCjRKw3k5cTbtxT2HPaD6JNRzDehEXsgy6RfoSMwvSbP7ZtH8HQ8745x4C9DQLvKUFHBYTgvPiHxC",
  "key32": "2v6BYftDA9cxdYcK61AnNpKNS4SdrTiLTBfREaAA2zNA4kwoAm9siFcKQArGcaYqbK2X2secCd1UKmpMhAfd2SGa",
  "key33": "YsAjf9MJfb9C3KGWNDRHNL6qsHxeUFDBtcccNonJ8SNighNDrz4xAc7BWu3fSyapRyZG1Tvo2qFCnX2jDdpSBas",
  "key34": "5FsVSe9PoGpyRq2UgsueDSvvnN6eqs41s1eddhfEeTGGXYruAAo2pgMZcLnjoagifNWDbZGSrogQzFsKy15Np24c",
  "key35": "3Dzqf2Mu2X44PbZGSQN4sUu39LKKwWvut34yyd3egPuqzWLSGYuKwvffSWKfUoG4VC3DZ4SpDSECvTqPetWka2CZ",
  "key36": "5JWwQZFEr4pi785AfdTvghcndAzG8E1FG66DRX8SZHwfNTM6Xw8M5piEsMj4ou3LRDxTDeBzpHZtrviWuvyCbub7",
  "key37": "22PCt2FfqYskVwJojnv5T99Jkqz6DSu1w5zjEXjc8yUMnRdUknvpWfhCrxufNdWxj14wCfZfKchBSWd8YcbY6nfy",
  "key38": "4An9LDFHBynwdGZRgKqR96gjMzgpaAk5EwnzA6jZigvxawnPMo7pE6KiG71icvuiZRxrsvR6MmzWWTUeumdcToaY",
  "key39": "34JrpBSTHdPBGpXd8gpiLC7WiuxLXiuagCeB4eXkN1VdVKZ7BaiDtD3hz8UVjBSF3NBiy7AQabyd6hEgmKnCRpGu",
  "key40": "5jPrn585ygPEgch1i1SFB4DEDRsnymkvLmRdaxmTx69nfbikatqkXQWFXLAx1WGm77SWWNCNG8XWkANv111CYuWT",
  "key41": "47sEJMRcLmKKUuX9PSwqLh8XDrcHym1pLymSPKFsreQsHkzSSsuUWpsTJvzZ8tCKfWMZAcFh3X9RGmXQa7xYN8yW",
  "key42": "oEozKebnEcbC6JYCt3yKh6Udrd8cPkJRddgJGcoS79EoBL2ENiD3agKcrDd54NRNn1tnQ79oofSQphYes2ZqK4g",
  "key43": "3MDryxXCyGPvDTs7VX2BMGTRnM8KqvpHQ5s79pVBSz1rtfnfd6BDniRpFJkASdyasyAH36fAvCU4rdsPnC4GKwZ3"
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
