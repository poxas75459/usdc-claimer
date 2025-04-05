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
    "4Bnxd1GQy7Fat5txA4sYfKgZFSwmHmg7psikyzbGygEW6VzJp9HMKcwqM9gJABHbmyUjhvSkd1yihgJVUwFZxUeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hh7YwnSjqk2cvGNHHYJ7DXcnCFo4mmngCjLmhnwjzxs6wDoVVXcr6DcASdvTcMK2NGooi8w9CufDENSxo8Ad6be",
  "key1": "3wDqqEn4uGtcZPxycArDoCs9yvMUCu88kGi1DFivCzTswHygQEKoNrM9HEpoHG9kETeo6u2q4sWbfErgiPhSVLHy",
  "key2": "2cJ8VZKWqBmt97invqZrcPkfzntwQKWPTbzjEzjee3BrguWpYCq2Md63Pb7bJzVDkY4y7aX9mdFgeW1qNJaFYZwT",
  "key3": "3vGubENqnq5aFejeVdG8WiH2TNMrKeRfsni8e5rdsMLtwNanvEswAe3dJZ8f3kJA1dJ7Mpe5f8kjRx3kojFgKQUi",
  "key4": "25bExyXeg7zS5GbKStGmbxpaCEi1AAE5GhnGhsborwdgg63su9vGGrCVuRHTt5RJEagEEjhh5tKXe9DtVdDQJhkQ",
  "key5": "4ZMucrDcsr25fUHx7FGC76zjbwHEjbD6GnCMA2LNTdUsiadAVPyZBfzvXsGJPVsYc2k6KhiuWtzSsG54DLYvBnzr",
  "key6": "5T7CwJ35tnjZ4W2fHrnbZpUiSRafwrXK3bcuKMrDnSi3nRKm9FmgcRkWkMJo36sabnGULsFtpNKLWZUMir9D25RK",
  "key7": "5DLuSZd6LkAd2agcHX2cVNnjrtdU78B8MHH88gaKc5BPkFCrYKyiE9GQBmQ577SF1g8cZt5GfDrvL9ryGS7nzzVe",
  "key8": "3VfNx1T1aXtX1TXV2HH3PVVSGuiyYDmPw4gczaYEGUeqfgCGyegvDzw1cZvVEkUu5a2XMJFLCj1x6UPJp91A2r5Z",
  "key9": "snhKuLcBA98jDuxst4HXeJFw5j3XV1Tfq1G2JXQwcGiV52wNNn4Qiiy64xQceeSLLi2nRDCvLcitYUyQUvVTmwM",
  "key10": "3Wd5xNNskMHsppWnYT1rzPMsuZtEaE3gFwUiMYDcTaKzmkxBgjDMKy2pvP9rgtjaU2nCqXtC4YRsPyF3m8VRyi9c",
  "key11": "22pVx6y9X25XQAn7gGEDqFxkJkdcCraurHA4hfLp5nhiU2n7c46rdU4CjW2WStoHNauSm96XJSuERrMQQJadHaX6",
  "key12": "2PrMBKrveo65YYCZwNLvfXfBZwuRfuWGQWYtfQt3Vi4H6jFabLjUNFGgea6yoaA5SgmJFCV6akG618xexKxacAFT",
  "key13": "56EvHrhbJqNotT4KJwh3TFbiMzMDxhdRCatuXmDGFp624PorR5eLB9w4bj3tXK6jiEv65WZ4CekdPHJ9Qguhj43m",
  "key14": "4sZwgCPHouW8Bbjm2hqZbcehQedepohowsBAqnge4H8Xg7yWReAiuSiKYErBypgKDRvcbyG59zJobCtqs6wpU5zE",
  "key15": "4M668xi8rqgokx4FzKWm1Wkb1AkmQM3JtkvbKNBZwzRkwpYUbcJFtjpsS2ysL7Zh7jGcJqL1Z5si7YmYReDfhdYp",
  "key16": "65xVixpoEu5NDPZ1c3Cm859rVJwvM8EDFF1UPNEXqmrnKt8hea5WK4ny9aee98GKuqL1kEHfxphqmEfbGcWRj5pP",
  "key17": "2Bc5ra1uKJ7XdKdid6ZjBidaVfvsJXDMzcM3ajsjpSEuCwSNkjGL5WF7Hh2fWCudwW4HPNRLCNXRoDZE7SKQoTAG",
  "key18": "zokZxog4n7F2LZacep8QRZz1Zt76WrLNoB3AXD5ShNtVXURLiT1shjpWgmYu1g13RBmaFkd6dqqZoAaqmTpxSm5",
  "key19": "3yMNXcNdyzmzUMSrEvMGu3rGug9oxcH3Lwh7CLnU5y4KWu9EXkpWXr1KsdjPAH93bY3f1skTxixcUkAK5WWXhWVR",
  "key20": "RYZ944u3x6e9Mn2Cjuoa184H3T5ug5R22MzcQXJMPbBytCw7pPckEfP5QUtLajKzQy4yLLR51DiXKQWnw9euD2f",
  "key21": "bBVZNtN7zBH8cLM7TzKMFVFBwVDmTm3g2mMndAdoXhkH3PJfxTgUw3E26AbJjNAHsnGQ4ffkWqrNxknwr9n4MCh",
  "key22": "3cJm9Xd4n6n6HH9QABGfhRHTAHLHGCRXKiqLvVaYsKQA3X9wwELeUYJVmfQ1maqqgbhTxJgS7NpqG8TiM58CbPag",
  "key23": "2HgZaAhkSdYa281vBoY2ss4fGeSAwUpbrUVc6riUd8va9gmuTsAfY831w1zgkquhntyN1nLshahc3AYVm38j4QcR",
  "key24": "21jff3nrAwmLHMnC63qAjgt9rh5xKb3NysAXgNvWKth9WQDRip4EfLNYvUMZe8bDiURXcZavhWPu4rd8sT6hYVab",
  "key25": "5eptQToi7a9tavX2CHyhUiWvq1iF63Uaba5w3WrJNrUkhmHnMwNaUsppqhR7Ki62jrNa5ng6w5kDxCbYLGzBC1QP"
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
