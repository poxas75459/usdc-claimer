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
    "2Dkc7Chg8SfqhiEY44naeEpLZKjCvyMK8SfPb956adHSVQc8Edraejx5CWzAdJTERMjRdWAka7t1wy9WfgovboxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S2LX6pddfZtehWFTox1DSZn5v1j8uPzf36bAYDiCaHP7uZW5XufdPuc4xLHSjdFWJerLAByiye9iBVLTc18c6ac",
  "key1": "53LExYxuicyaHAHGePPEqZZvuxLTag8ZU9xFRj9AosBP39p2TwhcAcpvSCvXnSzJB2skRMHX6ZCf9zRRgDwWbJFy",
  "key2": "3g452z1pyDB2oAa7EAuikTWuphGF1sWMRpmvnsWR5eT9b149gD2oErz1Bh5E28VwLMaUiQtLAY1oYipR6yVbpnXi",
  "key3": "5sWwvsUs36Bty9JRrGBAUDdHXR2qaLj8Ek6C5evduBKC4D3MaTwQe7xEwd9MLT3BR2zLyu5LUuKMUiGevR9uS1ae",
  "key4": "3bbiHAj5WkMkckGPxfPe7a9ZMBDxtFFpqGSP7KbBPffsU3cfo2E2Xs2LYDxE1vJwBryXUCTTo7BUcshz7MbHSHDT",
  "key5": "5fDEt1oVLLbNeSmE1wzmNLJhBqDPniomR7H2pXuiHas49UL4xa2AKMcUtAr9GkcwtgPAZDRvzTAj8urRQrDc1hhp",
  "key6": "4tMjntB8fX7sqHdQvvcWbVPiSJ4E6Tc4F6kecwM3iynZtaiZsSeQtm7P3sfRVZnAaQWDuJfiHWvTtUgneZxCedJj",
  "key7": "5u9s8SNT3DUtb7rgWR59hXRrkd3MvFeDPzWnisuAYEdmfHoTj54Q2hT3tMeF12xpoL8unHSU34hRXBim8SWmLB3o",
  "key8": "ALb1JoxqM5i18E6vMBPw7F9my9XBcZEgmV2MFF5Ms6zXxZV9M7XmEF8MDvUFrT734Nc7VM2eJVcDjBkt12a7DF5",
  "key9": "2Pz9Tcwb6G8yHaMVYjprBBwfiwgX8C2mkL8pXnF3s9iHnoeCwwGbLzfLM5rs8XfqRL3LnbW7R55pfiXdVCbdMAcV",
  "key10": "2S6ehkHDCCUt4mH9m77qh87dYGR2TMs56SKrJuDoX9W2u6pe4udLJppAMUmbuuxhMd99tEFpRGwPi3iHJJuyZuEg",
  "key11": "2izyCjAwED9WCMNhhsxGvHsuS8uGRW3jszHvsCQjWSnHi5gLWyfW7kFE5jtaPfhyoFmJ4b8o26dYMvm1q33qcLs2",
  "key12": "2c6u9JeR9kCnP9Spb7gXm1fbBiZ2CnMrDN6gCjCxcepoCBZaAUAnLsUd1QjmMWo2NMYKVU2wCPe1n6Jjmm24bwyx",
  "key13": "3k43ecgLnU5hmtJEo5QYCPbDbR4emDdRQjAYLnNtjWG51sg2ndogZmdNra61xYJB8qBLS9x6k729pYZ1Sk57ToAn",
  "key14": "4RMWBLMjWh5CcarsjZ4ma9RLVfRSVEkJEuWAjQ8qYhgiGh7k3cVHvAfDSNCz8hRcr9qeusdfY5EeDFGycXXXbiwk",
  "key15": "3vnXp7mkcPCAMDWsae5xnzUaGuYSLkXga6wpt8tqVMQQEdD1Hbm1WsCPwz34m4GENWRfPDjCgMkSWR5pn1jF3DjA",
  "key16": "466pdGhCaMovzo6JwEfoypGzUjc3MwhDVsx1iRthyF8Xk8FKDis6TJ4yNFHRaoEKAXffYfczW2nuJoW3PYQ5nXMC",
  "key17": "46ds5Cqi1Rzt23cySabuwXjeDFW6RczLE4D9rcyCnvcWQTV1ia6oSwMychfigQRGY5cyLTUsjgyx37UMdELDwZN9",
  "key18": "5XqBPeakdSEvQBStGchX2WWSVwLP3jayNJKDA2wgvv8y11eLStQD88p8QzkDsgvzUafwUr8Ex7fxpAbFrQ6bC1kY",
  "key19": "2UuF8jQY2PUHavwpU5zffWeBXov84CpRuAUthKnGk1N8qDNQ6KwbP9TwnKndyQSKFvFRGEe2TMzVbJqtD5nnqeS6",
  "key20": "2dMKJ9tH6fazFciZWNtQ4oEbi9a9iLJ4RA8xE4xeNqyKXLs7xLARFoWSnLnipZpxVKPoGK2HMayPC44yzsAC8YXt",
  "key21": "3BqqHDAbMojFMzHtjZv9ZaAwWVbckjHkYHdzKD2iHLNSEGkyS8HQzHZzX8Lg8NrB1bK9g7AQZMWUeadR4wxJqkC1",
  "key22": "22QmXixA3Z7ht8sV3XkFwNpAUC88bGVh49vyYG5S9mnTvovVkFRdRReREqxCHVtSWY7SLLVddPV8p5J74ZfqLqYv",
  "key23": "X9hWwdnrtyYtF9e6vyDpszepGkhHCGkcWuhZFiJhqEbUwCMnyLL7cvoLntDEw85WKtB56KbvW3bcN68vPg6zBar",
  "key24": "2MFPNzg85HNyCMWqLC5GZQ3hoR6kLLj13LXrgiJsbFPqwTk6SZ7uZwyx6qeT5h8vM61FNVEfBQMfDZ2wmLmcwEYs",
  "key25": "darNdQ1bg6e8grJNgn7RfhiMvV7L6sz7JP3cosQoaYhhqDE7GcXVQ5QXnuP4t5nnN2uA3xXjSXMiGTHCGGQ1TU2",
  "key26": "4iJDRW6KB8oKG2ZNMcPcYppXLrRExZN6q5gUWFHcLafcXk5idLQ2iDTAAkpGdJVtz2k3q7B7fwfiiWhAk1ys5b5q",
  "key27": "5NJGamyawre27KtCmbTHj1m3R12MTuodJYHnsEUF2m1fvkr8ws166KNRynokWA9jrDUACVorhvspnQrR8e3Pt71n",
  "key28": "umKsgDFFh9ofyCwENV3eVMKUVrsSqJsuxf4g9AE3CpXycunF5vegRCbtb9VdjwH1WdDVi7T6SnFubpzSkS1gMBi",
  "key29": "4wvVKupvinmq7Tpbx2XEfJY15ikhW7GQS9N2HtFiokrSKEjNyoZVsYPJGPvhvYpGaA3T9T3VuVvxjxaye7sGbGR",
  "key30": "4V5Zd7pHbKE8PAmXqHFifxDKZE5S87VHQ5sVzsp2gVxKBorBrZzdb5FjU26m2gdt4oqbdvgks2AnK7N1HebGPHcS",
  "key31": "3LELz2yH323HoLP6iJC8qZXFvQ2eUnNeMadEX5QvXx5acTjwPTSFPBoitPzwxe73CnxSM84SbChmDACHbLJJU4AS"
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
