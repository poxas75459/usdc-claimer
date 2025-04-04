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
    "32VWoT9PsSVJXGSCMK6wrxnx7AdenMUY69CzPDTtMsBWo7Y95VHfU3ZGaDPRfYHDRVyJYGoAEiQ9m9ZMYpbT6yx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mL26UZraGN43mpLoKqbEdtD1xkLVCXUN7U8U8S6YJjQKyEpjxB5H16UQrCCu5aY94D5bKyDYVLQUEUqpUeZCmML",
  "key1": "4dQj4Su1yawbiP6ZAHdRFmeh1WkDW1q7xG1rcv3RDtpjm1mBzCsKpUTKJbdXy1AJVyZYVqPaYJCMyGB11rVjLPZa",
  "key2": "2s3GwjkEmB2pJ2UbfhgJLN7MNseMrqxRqew7kyfAio6xL21EnvypoxzyW3nBF5HeUkD8qpDNPh41cbF9V58ojHP2",
  "key3": "5keSk4Bb2cZSuEBMuKH41h7ouBk8XLoiWBGSAwGi6S7GU6ogwHVvEdpz3FMbbWT4YU8pmo1AeBq2rWFGgVPVAvvr",
  "key4": "47kBvY2a7QTuehewDHBGFsn3WiApEPsMW2Z9DeULzsbTAD6MmfyhrGmRUDZg1XbGuD3QkbKJZJAHTAcWnQCjvxNa",
  "key5": "2tC9eriZtNBVRWS8kFLmY2m1tmG86uJ6H4kEuT9LB95G2UWwS1DJtQjNGAu4TSq3c7Ks12wrcegkBZbE51P2QuST",
  "key6": "3saZUVbQhNXcNEMYvdQrux7dRGE75av2VZXt7VVd74kRW7tGmzGzbCL8Jnmrwx8m5phzfm735D5NoDi8EGCjHcko",
  "key7": "5bYfceaxcUFueZziV2pa5RvUtckSkTBgK18DwpfyN5yu2kdbyuu2MVkQDeaoTjp4EXZD5HziuPNW8UerPq2JN4Jj",
  "key8": "47NstkumwCk2Lt4ZZ6s94AHRSfwZxPRmBxkk7bhg7HCLXvEZ2H5iFgcsf3YYLEuUzNwjnzNVcKSHVMjvxU8BVazo",
  "key9": "5h5kMzcBHVMFP5w52jBPaTy6diKZpVNpgQBTnyKD1SFMTJHfD3xpd8ZAq2BLDJPFF5Td13WNTW3D7hgnBaq4US7y",
  "key10": "4NKRvxT6SogudceE59oF5g9C8z3aXAYnJru2dp7S6BiZwSY1mRn7rYvJzu3592J2kTvCoHAzDsBw2FPg2wMYq3fg",
  "key11": "2z56n8Wenaj3ysWApXoEkbfwvmo17mhhzCVPfZJUFcdwjoogPd14VYuaizTR1S13E2SaB3s7JXvuzx5JTdnpxXjf",
  "key12": "3rGT1DUFSp1CXSYati9T8fWVXAYJ8nu5Qybki6Qf6kCuP5iyQjrTHxBzxUqUCwLY4bTJvPZLc4C1iaJs5paV7KHV",
  "key13": "2LcNcwfCy2wzXBXAxfeCxpdQtJNsbmMwh55sGRiDfduhGR88qzo2vPzWjLiZqVeDDKR7y1EExaWCH61Sz9SrT89f",
  "key14": "4PMvprFvRVkZa6zwayxhjV5gFVQratYSEgfqeYeqCafdx4eJMhEqSGGJNdgigMuxNtzNgzXeNCU6FQJGy1GkJ9Dh",
  "key15": "2apyBH2Q8ycLo6KoC3fH19C2n1wMzqzYTSqLNqRERrg19M8Btdr6korAY9Yzmhv5HUWVTyeaFPtTSBAxBhMwXGip",
  "key16": "3F2HzVRGppfDarN16bu8KM7Xeva4Hj2WB75g1LERM99xWyC1uQ6J6426DEsDQwniBAzZf2V5wfvwDrp5P4MwxaZS",
  "key17": "49sVqox2THd4ad8H6JbPaneQpUrAHq1171vjWYTvvxfsp4ZLurASxbNAoxzUSbtYtspnQJrLSFW21RbNJSrQeLeD",
  "key18": "3drdvCKwgBoAuQHq7VjrEfTxeyVL2ksd9SdDWta8ngrH1mLddGgtBdexTyNBsoEexr1t1yJmGAqnctcq6566m5nn",
  "key19": "2bonAdjQetKGHCD8rvgWNGZ15dafBpKCR9QurW9VYiAE59hPXkGxMLE6xymb6FCvCmHuDB9GwQHxd8Evaj78gi6A",
  "key20": "5FaJbngdqfVa2Spf5wqbvh5mbvcJMuDCgiiAY8GiaNJANMGr2F74rDP8VT6mqCTEH645rPNpfuALMpMGoZbYGmd7",
  "key21": "494BiodWAmKjNXn276Y5nA3GAXCzgCVbbbTsiNanWmEdeEUrPfhWwUk4hcnhknxQUjiehQkkdkgydiGXD9V9cVD1",
  "key22": "5dL7xXf8uQYg88RcpKZErcEXHDCkNMwW7TWYfGSKvZbkFr7KAPX91yrXarPkPEtbE9nE33jrf5acUbWVXXR64maG",
  "key23": "4RNXpfBpyNQQfNr7CRRNJnxXRaGNRjfrAEE3QnvJcNusWyTwYfofyrdGTjgoqsPQeyNvxcyQ8Lvwvx1dvJXtnyAj",
  "key24": "4N16ARQyvTa9A3V9kQtNmaxFccGMSfCCCEf8kPsetrq8F1oUDd1fA1PNtTB4LtSp8hBuj4c9zqZJx6rXBbfZkYcm",
  "key25": "5m2X8bPH26tQq34UL9BucHtLGCottTvHQkhP7LJeFerctCUEspp8sVDGU312hN7C7BHFrVgcBxR3NEq6dynN8Hiz",
  "key26": "9N6DYMPHhdcRfTNJykQ39rKWbUbBCmTvdfiQxeztCXdUFFFZdg3yAt2UWY7iUmt3YQVazxSeKtdvazp7XhuPG7Y",
  "key27": "2WjYHx9tGXnQbjSgVKEnisZUfNiTUa7HHoYeWbs45H2nK2SPe6yA5CXBpcY2w3zvgkVzxPgQJiunvBgAoTXLrsfL",
  "key28": "5u3pqxPjgb3KJfpXoMpBm6AYmtB9Js9zJFbrPeDjWZVKsCqtb65eAHLAzMKhL9ssJ6diuMdpip57PcLAJqaoDgDc",
  "key29": "5iUarnKh4B1ADec6Sc6UPC3uwpNe1F4tLM5Tmc7eyC7rCNMpVuzWuesJCpz5ghLYvz6V7Ean8WFqTWLeX6UQLRdU",
  "key30": "2eMVF2hUsUAcU3UakiwA44UaTyNpQiVZ7YWQ7DqHiUUBAAtcrWD1GUBqb5kWM4U3kdv1zCPKQ7gHZaNFC9xF8Xsp",
  "key31": "2E3iChiLPiu4PHEZrSBKmfQsTFud8YNUpgPDKo31769WR1sYJ18jpYJMzsjKtBiVAqJroQS5xWqLh2gz5ucySZTk"
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
