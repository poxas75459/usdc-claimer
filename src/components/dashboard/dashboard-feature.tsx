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
    "g3xmuCPwqCnvY61UEKy6EkSLGqZFNPaMBxfsgm3SHHDanSJnieNiRRk5Zo8BPg6C8t8nXqUb4RfsFxNKHKjEgFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GouL23jcrWFdevEdgnYo7bLqvAjjRzEXLenNudGsMx96hZ3wJtCryqbwa9SXsdGsQMYDPu3Y8KRMBwP9JsntzNu",
  "key1": "3WpXw9EiCs7xbitKHWFWv2CwAgSmC3bb8k6Hp4tLH2B9TZY78jdN7demvuSmuB16ZFvsUecN71KWr3eZ1iF1qqfH",
  "key2": "3k6vqrXQM3sG2RxkDTPhk1YJFc8y5dmS8QJLsXzPwhaFPyA95eF3dZRT5QGi5QYep6soov3vjpANkdFWEYCxVU9y",
  "key3": "2GirePbHcvCDPMH8BeKnTyyskS9CqrwVvfj6nrSrtnZvEQyceC5wKDrYoxjqCWchSVPKT7EjKaUWBNuqu1DyGCAd",
  "key4": "2uW11qhwMFckvwvYzpqs1KQWXQL5EkG5nX6ufndN5tS2nvCaoUErMYnfTr4d3Uc3dCwwuC7pGrVb52qyfWC7x2r6",
  "key5": "3svpMMipQTt92kDfxDbioU2BahHGidiLhf5mG3qUJiftbYfrxntBQFrsyixuaoLSAbhBcWT8FkDMDcFbCeqhdWUy",
  "key6": "4uj3xvHTkp53nJ4eJn6EUQbbsVNoNmojMEFQiuGYf8npMARX5kfzv6xAn7NKvu35SA1VncohBwXfYZmSmioPddUh",
  "key7": "38wtdnow1RUotipNm2RZ3dE3n1QUUPbThr8VMiwDfJ3oPGTNcRmehRSDjC1xP3WZUMk7yZnYy8s8Wz7Hao279C82",
  "key8": "2tVsa7qvve6ZC354zNnzgtCwBteNqFmtb4Mc3CvqTGLpJp3NEABH6iJueZCa57d4KPUyqHu5As66ubWi69obG5Jy",
  "key9": "2sjFhUir5B5pBqrJH5oD9WVbfjYYFVE1DyaLZzZmMU2nb2CFZ83QPmA15Zf7diznsX6hcGp7BC4DLTu1HjBqq3o1",
  "key10": "M4TKuJRudJcFNgMLA2drnbH93E4ZDMAogsVXgH1cBXZUSUg1Zy5pfPHAmpQmaopGVUNKPNjWiVZWNU7VLBzuQtE",
  "key11": "4mvY8S12hhNXivwvRyqHSBzQPaoxcBuKpnHKo2HPSBpkQj4YrhatLNXRB8CewtQg8jSHJszV4weT1idVj7oJyPRe",
  "key12": "2PcR4z8kUSJ6viiVitPeBh1WU7QADKwAgccBDUG3rhg2oXLHjQCq4XVEeKjVTWm5t579kr76e8LGkNYahsPuuhxH",
  "key13": "QBs79FjPUB1fePzJ1m5JAyMrRWnPFFUB8jaDshin9QgCC7AbkuCkGgZ5oS99RUNEbqtM7ZcaPuBvpdTn1Y6ax6p",
  "key14": "3cExPLnzjXAQKapAL3HAi8upPxQSLmpamPHs9UnNYPciACbnLZNV54JaEDVc3HySbvWjhwUUAmcuADJ4fX8cn3ur",
  "key15": "5ev9RbGhGf7NMqqqgDiJ9WYxQCM9yfDU1zA8Lh2k14rubq9kGxqXsMYHvZETcovdgVCzZdc6YC2aUBNks4Btiq5J",
  "key16": "2pJeWn8i1JLY3SFaL9cgsB8Fg3hKeWfyXr6SaVLc5wocSwF2ZVVXwVgmxee97aWH9XTF2uXaiBCr1AajhRirAq3B",
  "key17": "4ZXS2yV183c7hmSJ5MuN2QwJEZXK2BKFVES3zCkpJDStbbTyTH9HXWy2atnrF3PeWdFThBBy7DkY4uLbSUn1TadX",
  "key18": "53HxP3cn8CyYqSXGnmYEHKVqHUttAygdbSCqRMXUkeQgPhPF9Drt9V1uYjfCZSULsvQyWUC8ZgjsXTc1umjVbkHr",
  "key19": "3w8TkyeQvhJXYu1ea235NhY1L2U7t7ZHdWWYFPuexky8QVnJtR7LZp8PMoX3QtGVot1GbPBcwajxhSSjgKaDEcMY",
  "key20": "5YLHs9m4uEM8sjnQxHGVXS3fQeePQvmAfEDMqpGcTmzqunhST1JE16cFK6xzFWjjvPBzBk74uDnR2AuETgTRwuAV",
  "key21": "3rYkr9rvHbUnjDUni8UCR2cvbeRbcfuWJhZ4PM1uBqNNRZmfsbpxrKmP1gTcgSisUVc5wnn6CnmSVRmvzgybHCJg",
  "key22": "2pc43ATRCrEhRagXkcExQtJpGiNL9Qb8PnLMufg4x7pWS7nZZpxPZmPLJpDW2dLbMk3G2wJ5fuNw4BNCwM3j6cLs",
  "key23": "5RqTkE65RXCVSmRTmMVbyotZUtJugsjhurGGqxD2sgxQMCkBjT4ne8mWRmzoWjgdCquY9SrP9Hc4nuZtbZqt5PVU",
  "key24": "5PyWUJH6Z9RtHLhCjqsV96xPzuLfbNWAZ8KkHsv554rJwVgcMSBZCbSEAztZZw7cdCMfsMHiGajYQQ3JgWdn1Gm4",
  "key25": "5HjcKEn41CjQ57mMXBnLb5U2cXag9rwQZbuVpBJd1jY4rgqZB53d3A8Jb2XXHWd6tTxDFuqgd7hB3hqDRE5boMBp"
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
