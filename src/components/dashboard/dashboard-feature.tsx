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
    "62JjQBUPAHz7rij4vd5XVGm1NCT56VVM5qaiXQ7jjcQueoyVKXkG7hhVdrPDHA7BmoLBfB21NoW3LcrYcuGkHaB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bxb7VRsHa9rqLtobtNRje5Y1MhvX3dMpZNHirEv5Gx5wVXaDHfDGREByV3dtxhyBMbKh5iaxxy2Wp9WNo488ffq",
  "key1": "4wabWn9MJxwuPxU9XQeCwyXv1df47QGz55qZF7zjpfJrkjmJABmKe3hh6RFmemwNbAnz6QKJj51MTdP1fssCeSYT",
  "key2": "61XbeY3mdnVsmZsH5FfZfqjspoNAbYWzejF584bCCCHkDgaxR29YwaXo7LgU4NsfxCGmUh9naY4PX3ieNaW24iTn",
  "key3": "2UWqvaftt9DdgE9diDGoWczxH87Qc7xAxFDRW4MfWSNtMU5VZM18VobhXA72Qmgb3AoADvqBCTUATPsdqorux5ZL",
  "key4": "BzYrVyNmBh5aXsC6EvTwQK8Brwewo8kWyxsxfrwEKcTutXNkGLvFrnL1rnWhXWvWYgVx9dXHLAv3rT4vUoe5Ffp",
  "key5": "5mkZxXBZMyqXy1UJ4kFB37FSx2TWu87h17MnKr5TqZhhL28mFutiF1HpahunnZhvETXeMi7zyHKxHaVBHwDVvGKw",
  "key6": "4YypTQpCPtuEFeiH6bydvFWXLrzov84Gebm5xqBwTapgvnUNiMzVqq75Sskq9xevYTuPvbobJfBFShvDdtE86Au4",
  "key7": "3axMmomX2uF8CjUovLVbVQVp1rRNJP4RiZXw6khsiVcZiM2oY8LxtNdpqKDq5wJVQ4bNaji2EUbEdmY3Ns3FrAnp",
  "key8": "4NGqt7VDgEFaqT2YTgSV4ox24BEBnGzUP7SEw4c4sRwpRSVFJmxrgGEw6iqWuH5rFHxPq3vsjt635NdDqyHKok6e",
  "key9": "59fSheFRYnXmbvpJJZQGV5Swr9xDBGCajkz9iJrWztRZEk8jS9GtcwpkwWm5wBnW2423hREUPQrZYPFZ1Yt8uTT3",
  "key10": "2y4JNz1YZBUmsxY12DiryQH9VK2xNfxocaYtgw9am8iwjkvVCqoKDfqBDcWFZ4pMYJKA4WWn1dT1WqWFrPHot6NN",
  "key11": "3e6XLcZPq7QfajaFuHYeS73i4xah9zaCTD65qomTK2KfzyBykSnfMTaNmFTgvFpytyucGFnETzaad3fpMBJvX1AV",
  "key12": "q1aDZ6GK6WRTCP5T6zeJgTTXEf5MbKRrt2KGynTHV8Wzk91hSRMsastzdPazTGEdVumKQzsFdneV1M8b9yKEeEN",
  "key13": "3JAtAGDo4g7w6xRwuU227PSex5Qs2eckwqFjUbAU7q5jcLimnziPiJELP9zbrZkuPWeRkXHMQCfG2HK9aZfNUhaf",
  "key14": "5uY71Yad9unT5PFbJkLJJgPjjkBucD7e4f1a7iPYo2n784WYAZK6WBv6VW2yhGbKAvCj4LaGN9nTyiGyKneNboKW",
  "key15": "3Why7dzcHwbPn5g1VBQSEY3fRE6rz3zXm1WLt42k3huffhzCaaZK5wwajQxsnaCuz3BfaDpdKNbFt47otF5SyRn2",
  "key16": "x5pfqUBxrjrNCQVxexxDFTSPsbBnZSbx2rHcH4o7kx3qSqwNi8o6vEoCkWLytPjSu9ftMbBf4fdWG5CZckdgaBC",
  "key17": "2YjfFEHR7Gr1u3eFaPdgREx8GZs2bdrAPWyt5myPa7QLgUiBkWgAwguUL44vz6MXD5stTFfSexb5eJomBaEF47Sw",
  "key18": "4w3hoh7RgrjTpGbh35PzLiKAKTsNmiX8Z83eRqmAqU2TZzqxQjmN2MVYRKDrhTNxsWMe4RZVdzJokg6SyXffurgp",
  "key19": "4Vj4sJqUwwmNH8wkMzWEUJkwreoGqQa7BkG7feU5DsF93CUqCLFu9UBXvj7ZeJ6xHX7vfkFQ9iZG8294Qx1uZeZd",
  "key20": "2CPEBa89P6wau6wJPtoWPx46UXPYimzWvgsjMdotiicUaGXx8sgQbfoQNycNZBJaoMjx8ZPBPBCJPpRHzS4yDbKA",
  "key21": "4XNiLMZfFYKp6L5ZKK9a33U5KDHMk1QEwmRtigei5ehA1BNgb8Snr2CNU6WjAUZiGFumgCezCRH9jSiTJuuD7bUU",
  "key22": "3gjQJeCLfpN7UzM4oTcd9ru7A2rK3fWYgY67k9twNp8RdgYVJgw9pkpnFWD9LuY2SdgqqyFJDn9Ab6stkKHDev1Y",
  "key23": "2KPzt7Rmb1xk6P4SstszepG14xdZYT4oG7dke3ZHG8H3CCW1NKontrYanEKNQN2zEZ4xPMUoMUMHHrcJ488s3ai5",
  "key24": "4fJDhvi17dVLvxtf9xApFcJzMv6TxPFkgw67Aw5dtBeJYgCk1WzDs9xtfa4UViBP6ZnGsNM1HtfiUx9mW34UN5kW",
  "key25": "4qT7mTiNijnFCuXbEoLH1bNUz4f7cfonnCcK2wxbsok3o6AGf76gjEd6SWVScENtjwroxm5V29WXSZCWDisKpbxW",
  "key26": "4TPyT9sgLayMbZY3f1QfQK39xCxPCYTYucLGRL2pPk6pKSg637z7SPRpnPpt6ABdsn96jw9iSktG711hcdbThC6J"
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
