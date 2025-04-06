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
    "522CTZp6u1rUnBRxQCZbBhTmkGf9RxakSoqKQ4tF4pfFPNvPzifhhvgLqeEx2qXAK68E9e6zdCWryKicQ116dccM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oWLSpSTSHKkoLMigWu4Gnkg3wFv5Gk53SxfiZfigwbmCjARLjfAcjeEH9XZFzLEWhp3K75qCww9QqwopHMHjXdK",
  "key1": "pNetnhPQePgmuXoniktKz9i5L7GaYAm646b3vJxEwuLs8NpomVVrVELXmemwcoUZw2U5jEMpqYcPWRQc7rieiaB",
  "key2": "3WFNAHZ9LopPF1wC6WFwSraoYyCTnFYcPrDi36J5P5DmVUA7rDp9H3urdTjqcj46Mz1ZPjFFbZ4PYimMRtFUZKWH",
  "key3": "4iXWvpp6raD7Xnod9eBkkDqngBiJs7bPsovvcUuf7UJoBBg6RFFofmncBMCMbJykYrEZwfNVsEEtY6TrLEbA3j29",
  "key4": "2VKmQgsz6ZQqS4Sp9haEwFprmimTSYya2x6nbA5y1jk9D6UpdwiMuJpR2c9Yx9yzBqW8kW55PH3gQhqyjab7cTUM",
  "key5": "3FMm5eanWtUNEPMBDPMELQGQnkPtik4i7mRdXsjD7WSXrkUKeQ1gTM8yGkEQ9g6xX4kWbJ29K4X7Qw5pWatjntmQ",
  "key6": "4SbJbENU4LeMPwdeEZNUceLnFmwVbAomyTcrZCt7VBJXVK8vgK5XeyGKdAJ3u95LhukQS7fnSChz2bkRJNc9LVNv",
  "key7": "4GndXTTNUFQMyQWXMpiFRFakMiUoixBNCefCa4PVQcoJjc6qFs1rU9KfpqLkCe6EuZK7oHcbDugEYfgexdD5mUCD",
  "key8": "2Rcj2BrkFsvHwwyU4NgscuhUwk71YW29Kekpo6FeqtjxAeHfhmTvjHubcmwnfXkvevnax5jH5vtrNRvMbbpESZB3",
  "key9": "3mSAU7fJDjBmj9V5N2ZuSepLGBHefyVNkopyCACd7VgNtimk15oMFMSBV5HjxGdDQgMa2gVefLMd96dZ8xK8ptJD",
  "key10": "2uVsjXavf4tDZdDPa1JHGhG9WjQMvppfrRSenQVwLc9vvdRh8jYL8UfddjQVkyBWn5E8K3zRYPRb7MCmYVtRDdgr",
  "key11": "3SefyySZKo1NcQvZfc5x1VtNPXPCv4tL1kJ8DAmcUe8bPM8MmvjaoKg7GammYFNKMxH4RgxRUaMqW88YR76VE4P5",
  "key12": "4B9gAygZUgNeTZpPs9jSniHUwwGYFb7i1ZyCQy36HM4gm3kg5ZC32uXQYKDpQSkHx2GtDawvhY9RS77AeiBuHDfV",
  "key13": "4w15xafDUqwD1pJnCpxcuVHox9VEPzWLJNm3pF3AFeVNsjNm327actAzeKvW7Abfizen2G9KQKzZnCv4t2DKTXfs",
  "key14": "4WpqX6sXG3BbqTnrepBhycJzSHPaUuA5JUtsUsbS3znXDv4wYU1Nayqiv6q6PbrQYAAGyqNLieCrz4AopGAD2x41",
  "key15": "Hrk9RxLXKWke4SPrntAJbb2KphH6zuAKmYLEERv5sDzeF3pySr49RPfUTJwqLdZgrwQMMookqcfuwSaS6iX4FbS",
  "key16": "5jdhrc43vhLt7tinTpuQCaHXRUS996Cj1qjUYRHwhJRKxY3ruvhoFPrZTeEWC6GhRo92mVnqpob4W9w4DrkBVCN2",
  "key17": "3HAgBZdCsLSxN8CnwPGtSywY8X99Ddw8LbXCw3ZCewNAyzP3aZ692fZFZ4ikpZCrHeqmEUU5NeKyhvceHKhMrTVP",
  "key18": "3hE69YKQvN9aMMsDJ71H513LVYUgE3xdE96nXAhn7mvzw3wGAME8UnSYvb65xERVLvsgTVmXaysCcUrCVstp3wxJ",
  "key19": "2wD1FPUCjZzU8fDdNuB1aZftFReQgawrYG9tpsT84anaHEh8yf49dSariCNCJCkcQMPsb9XQfo3eWLgVqbMTxEFH",
  "key20": "2SZL9pHKnNVn7tTbnQhdDcRDDhRN6wHcwyiWo6SuNbEJiYGitGLp7mG1Ae1sWg9NXd3QfV77hbrKD6dgbQXUU3zq",
  "key21": "5PkaWE9FDcMsSxYGZp5UqSMzS8F2oxuqa8ANvRvmgyCwSLarGfC7Wb3UQBtR6CMyz1HhU6cLKdw5hENgZ7ZzXQ8R",
  "key22": "5Qem34PBPEBEvk7NFXYFmtZbAQTsLBsqGU6xYSdgn1RfcpNU59DBiqwJQZpkiXf3ofLmYqPZzvKCWMxGiauJF6U8",
  "key23": "qg2SDY6dcbZbbTJtnafyw3hCm52oANYxCwatxum4sxzhUH6WQP7DXQeTySbdUSSmfFcxz4KWiHqS6HpUNLxcHQW",
  "key24": "4q5Sifjn6vCTAU76RA7Tn2pmVzDDZFzLtPyXxjSctsDU5dehtqZgQ4ku47iMuAehybd3seEnvvG4PtNWbF2s4cjW",
  "key25": "5bCqtD46eREa8EKVUNPexgXrMJUH7fTRsFc8V5PhQxzYjSzffDGPuSQ5S8jvAY87sbyRyZH56Zbsn4Nf5RsRtxwV",
  "key26": "4QBK54nnBP3hrWUTAjFLd3aqoMG2fHzcGWPHGqUx7Jg6wQvvYsVARQp72ii9kRhuDu8yRdd13H8eTLcYUVubTTQY",
  "key27": "qNH9sG4BX7wH97cw7KJLv2gEktiTag7uJVRZj4VdALNaui4brUsVupVwHpTPHmek9JD77rN5QtscLWyd84xSmVq",
  "key28": "5Ez1QSRhDtPbQtjymwSMJuNXPABEGj2K3cTrg9hdsv1phaQBSCgWNx6ijAykGEdPAAbtdmEc4XgyxR12y2xj6TGN",
  "key29": "22BpaDueywmGW87c1isCdpgDCvqRWihQ7mZUtFfAMEtf8FeUaSygdho8G1B82ZBabyc13vH1NUeSVoNcDQtjgxny",
  "key30": "2hQJxW17aA7UX5joSGCaugNRTD8arGs57cV8X6ydo41Hti7STL2dPtTzLW7X9CbUXaxi66ptj9x8ixNFpTvKS7Sh",
  "key31": "2paEdbTZsSUVNVFMM8R53tGzdj7Td7jrYkR2FskuCJC6pCHxGWtqU31u6BzutnzWBiqdMJxTf4YmPZjkbkBWRr8s",
  "key32": "3hNCkiAumyu1YMeVqTgrV8Chn6hAtZn6wK35v6id4yGP9DY248z2UynJiiXYTnnzrzn4JWFKxmH2Ti1kJ6j6GWCm",
  "key33": "5QfBNvVmtCZRisQjCR2b5CGtPKgqqiAbShuzSekY5QTPkWHkU5LZEqB8GaGc5v1vHgiNDfHddJwqpCUZZgVDtLT4",
  "key34": "47kdsx6kx7iNQgtLWK8rurBMNp3HHPtQyhDaocSbo5c8BfKrcoE942jjJX4fE7JkbrDccDmrGkcGGMTrJp4cw9YN"
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
