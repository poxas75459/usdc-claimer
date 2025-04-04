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
    "HFV3GWKtTvHyceuFUsUz5SNaaMnSAeHQJTkG5ZrCHV7Skzyr6mdLdCNNt7cMixF46DUg1M9uiqjtNHtfVvm87v2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FouKEV6QyvZfkwVArsN2HJ1xTqkeMFitkguspnU3Z7dZkZj7JQKFnyc7umFQyVp7cF2kUUcCReTVAHBKikaKJYu",
  "key1": "5KqfrNrffmPLg6veYajjXsxYzutfuVgFiUFPTuago59Eprc2Gj8Lb94fr47kJ54yYrkouavUtxrYTLYBbmjiBEua",
  "key2": "4yBXu31LnPPJtZyQ99J84EGtMywLQ7tR1gcV1biRTsjtZUncG4D9fZ2Axjdac5JFR3sWj9oomv3kgGFJeg2nfaWt",
  "key3": "4AohEdHUixFhr6Y7iQPQzCrAuRCZp8PzC4xsNmRxLeE8uwQrMYmyr3Ut3QsDUf4f9HF3SU1pq69J8d7eyJwSNMjX",
  "key4": "5pGUTpHBhCUqaYXGcorGBK8YCX5NAgXnbBk6nZi1b2ZWTBfSa9ArQB8FzG3WDsAZwXQjh4JMtmm3fKx46CQ6EwMx",
  "key5": "8wUEUrRh13o1XqA73PrKJdYSxiRnfmtBxzNeHtfn13pFewpcEw7f4gdbr77ybyDkjAkxgRVsvrT3HjpvXCAqH6c",
  "key6": "5QnjaSTcGtnbF5QSnpXrkGgi9hq21YyK9sJL4ooGzge9AR9cV3ag6qdSRCkvRLLhyom6mssxb7Lwtjx9xvhmpFhd",
  "key7": "4hBBLGebMQ6MKL8wt2N2fPc53rBMEn9mUGCr17s7FUesbVLXgWfYn6pHWrNxibpQLWgNWogQgGjQKh5EoX2uw1iv",
  "key8": "Y5WAoobAuojvEoYpt4VUjUG2soqmdSvomS9wEyHJuJGLFXSmqqrngj2NipWe9xcWKEq8t36YEgb8tDv9eKJdVAR",
  "key9": "8Z85ftNRDeAa5vEto94PabqA3bRAT8Yj6HgyvTiDuFyRy5TAU6Pa62s31JyZcfu6zXatra1N31ggSSaZwo4h7pD",
  "key10": "5qMFzRnDF1HUPCgSTiku99NfXnV5NDUB7PK3JiV9R4bRBqeeQqcafFbVR9aRjDTx46P53mYmm6BFVvxjpUcKFGTb",
  "key11": "vwebmzpVDihXtSQNNs6nfQC3QaW2ucZU9SzbhP3PJBQ3PTbsbSNdmEeAtBXmC9wwmDBx8zwQDBM2C17xKHrJy5N",
  "key12": "3jvgJUvHjWMAT69cRVcBZVtXFtq6jgVXJAkRzaau2pZoiCgR3q6bYJeDUJTrDpRpvgLmSieKRrhLxyArSvMGxxs7",
  "key13": "5nddGi2HXqZpENPJ3WK6FyQ8vqehLDcMhYJDYUBKVKdrW9YaPZPcgGmGQdJGW3Zyn6id2SqAF22xAqgzyeVBo7e1",
  "key14": "4eHncT59XJE9ifLVdgQHDfUYgx2sZExqASLXQ3sqc9Q2RG6zEMCxwBar2jd6F5UvWw4zxE7TTZdLvhR6T2Cc9H7v",
  "key15": "5mChzTUhhakVJx7sW2rRVj6TXPpcbVzxBbD8Dsg9FJGgjHX46quT9chHueHc1TyvRA1LRWi8ER4d1ZfoCL6nbMnX",
  "key16": "4sdwyMtkwedtmGuBYanDCPf2UVoEFrTo7z7EtdheurskiDqBGujU9dFSzoxKVUJGetcPZ2ubs6Emzj7LVxccnC1K",
  "key17": "syNCRWz3eG2Amn8h1TDxZJ2UFTktoPYnJ4htWtBnv962HGc99Kh9hsb2WQC96g3BfKxstrT9N8GnxzZUT3tPtPk",
  "key18": "5pyicNbjJUG1BmwjArS7FzZGrxNdtz2hqwFgqiTcdDuMTv8Dz6AW6o6QMEKRqP8temsdCLeeBmFkroyPCNZL8juT",
  "key19": "DM3cEdyEk22o8HbT4cRjconFMcVtFZqiv7dQaXgZbYTF1pay8GKbndrtfwBU5WxtLgbFeZCvcs3sEqyFXZpV3bc",
  "key20": "2gF7twrxGGVxgcPmajGyQHiknNG8vUiryKAgghXkbyxdLh7TJk4CKMEUFUyWQA6j6bKxwahu3NTkaDu4hGyuax8h",
  "key21": "3V1D4bvtijWimrwHSsH4BhuXaUwhcEeUg8DMS7wtrQqtBJRe2Pm6yQtTBkhReWvVL6TgfLd88njvcHTh8QFvnAXi",
  "key22": "2ThcUbXigcHRF8wC8MykaWCuLpu3TrhS81h3bAHEKZvRFDxPpMErBQaTPEDceJyHh6zdjV46t5Bggw84mVACouug",
  "key23": "5cZZf2GurybzEfhx4HSshJwAGKBmxJCjLr6QT8wYsChqkKdmeJhx1Tn3s4Ao8Z26brT5ArxaJLua8T5UFXqKqmZP",
  "key24": "4n266NZBfVnMHxCyafSnNfcEx7Cq8KS7br8h7wyuhJMD1v3tvKxTumtXzi83rhJa3tKshhaAfEQNJz9YfFvMcKjF"
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
