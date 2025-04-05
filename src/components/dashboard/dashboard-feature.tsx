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
    "2Mwet6bpZr82fWhv9zzK7ewNzwctDMGVF2hBHf9T3PCxzHZXjNW9h79UT5M8k7crFb7Nn95LvxyHfYE7d9j8eaqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ghFjtfJSfK86NuSHRPYbv7DDrbkAvcd7M5wcFvTorJoyY5fAVrdtcgN8MotvLkHrHtT9qPRSSF2pDWP1dQmbLBk",
  "key1": "kLLHHPkcTetSUM3wU4YmSKs981EreYnzfQKQqJGXdaeeV2doD2PYpRXPREqEUmxQ2riiDY73pR6X3iHERP4DaMj",
  "key2": "3TyQo7HUS82sCneEjEMePAEpPSfuyxs4VvvPUW49b482xxYwWupyXjbNCJBNRxqNzuEUQ8nHBsFnURzaKx7U714w",
  "key3": "54KNLyg2oEV2p9TDkBVgPCEJz18H9vdrJX2RhjzL3vKipYBP1TESdL7FXCi6v5xTYbck9gqrr1ewTxo3TU9BCbgk",
  "key4": "2TNHTZ5z34h8Y2A1ATsbCAZPxRDdt4MtRssufQg2yCRoj8PsfRvgbepqPbgisUbsa3yaLAJn5gVST2697hddQfnd",
  "key5": "7PQDuapbVjEqMuG5u8CUF8yFWAD3XAavFo4q4CBN6Kx7xG8e7M9UaNQ4CAeoyPA6aDzC8zPeQTgyzdY3iacKktS",
  "key6": "Px5DUv6Zsdk5mhgZ9BMxSFiR2xrvF7j6yYSTbrwVXYuBuCfV69yAN9TCqdjfctrtHPsFNyZ3bGrTGiwJ4hZUoUB",
  "key7": "3XCMqTJVu3qVXCHM126gCZoTk94Gw3EkUaqnWhUd7cdEABY892FapP9WWea2nAgsBteGE1RrSv96XNFxmmuix1RK",
  "key8": "2LRzviy8wKrscBFkpuat9yrsqAcFdSqYh7dBHufzvBKUcnTmAAupDh735fKZqfMkBTL5MRPwuMrf9BAN7DZ3fJgi",
  "key9": "5YaQK2cvgcirJCtKqSuxMjFaG4jeWvUtahEfgGrnP8wHYCRt2DzUpiSkPBszVPH94gZnrJS7ngATeqawg9Uk1YnN",
  "key10": "3TR4axNmUpg7GN8J1wtR4hnwsx2XeMuZQqLaP3wdiawkYQCjBfUKCjaAizR9JH7mEqjxLbmQPyEd5oxczft3moHE",
  "key11": "3AuvBzY4aWSLADpdmJuA15tZR4hKrzyEGhHE6FmgkXeWqH5LRys7C9Qc7b8oiyTKufxfDH6CzUQtcy596ZThG5vQ",
  "key12": "5KgraYKiKgKLPni2UUiiiUPKByMMb31Ykm7pCguDikfTa4tqnfNB66sj7rhUAA9sgUZz2ao5nWARvbD9kwvvAe63",
  "key13": "4BirqrktJ5pcrvQs7WbmbXDWPZtNh1nwMQsE1HETCaweR5JHcHAGUsxoc7YqbcfhkMRuhdjqvcTAH6iNd3UJ2E86",
  "key14": "5NqRVXhVDU9GznrYQ2NB5F7ewEkg4Tc54nmoX6Wp4XFGG4Jb1BHB856rp5XVbiSBUaqjSGqr6oUrDKcg6heR714d",
  "key15": "3VDpHq9WViwT26utiUC8oU7dASmTiTXHkuGVsLwiZoBMpm4q4StokF9XoVq6DQCrDqCY7tcxCraefsj8MPTiCK8Z",
  "key16": "3Avj6LBrnphMErHy8eZ99BwhGdEUXaSRyb4MnUgmV2gUcn42guGtRB8NwWJkXKW8w3FeWLaZGVRfZLHJwdt6rPTq",
  "key17": "3JzdSkC7mVj3QYjCvCm9vMSHQQLW5B4MtEodW85awSGkUrA3Rk4xrPbPxApmuKAHc2FWHh1BQjjbLweP58NfBD53",
  "key18": "2NjfTcS9i84QgnDpnqAaC2iEqLC56FQa1vyfEZnMLC3yTbEshPHYsAguWoJpq7CbrCY6bPbH3bzwD3nMNyrHnYMx",
  "key19": "2kLq74QmnY4ytsTqiyqKQapTiq2KNtuJ65Q6GQWpwBJworLc5mZdoZp5nksAFMsWwvBaWQeKe3KgWdyV1cuBezBw",
  "key20": "2cP9jEPTr4LPtw1ipXZitqpH1HMt9EDDqUuFajtTyrCdXdRz8vZFNreq6bvTh2zthwWEY8Aoy1vpRXhcqoeiwUJH",
  "key21": "qdMkGtSbZs7tkDUeqMaNUtfmXChJf46Skcvo2EzczG6tZGURqe8Bjk5iHR233pLaLpwgcSwpUDTnPjKoHmnaut7",
  "key22": "4xdTVbB7AyWT8LhALSmuiiCvDAcUtvaL9CkLy2CTn5RSNsVpMfdyqBtaiGNQf8i8bEM1Q2jFSSnpahKWT6u9Sgjm",
  "key23": "45vd74cWKNqeBLpW9Fera3zii358yjgpRtBrRa2swFyqeAg1XVDAk1wa8XTder2orA21Fa5mJxjKjkA62Cbc7yPR",
  "key24": "2Mb6bFaPKAnrA8c4mwi7nKpzbNpdpxFfY8jTKvnPY4xCPpKxC3psu7WXjkUkRVmQVRuXbEiu56gMA8iWhtNXLLBT",
  "key25": "663vvHJYWejboEBWc2bZjBUz9cVuZE43BtRV9zxZN9TC9YGXnei8KTWi6ZqyxFskFFsXedPeKmVHY4DEUyGnF21J",
  "key26": "3eBtMD2SrLTqhongvXvagL1rgZ6d67TfcUY2LnXxkx4e3XcNwNuvmtsCnLKtS2QeXKSNWtQP6fHf8g6B4qYrYjqR",
  "key27": "67XQLjmL9He6cFqh2QUkDSVbXW2bTwDVnx2zpJZP4fVsdssznsrXz2eW475dAC9foHcPQRLfmuxQ1rhx8xM9Hyqy",
  "key28": "MKnUvy167xrsn1F3z8GCZZXUyNkTFemUC6zmDsX1w3jhd5resCWBbtjoQsLkrmiCcAfJqcBSsxnGjmEQy4wMW1J",
  "key29": "3XigBTYWb3aA37CxetZ98VAHRSHu1jX1FQeoC9YQMA6LQNXoykAitibb7x58TfWFiUa4t6iSA4BDYWkGrMRwRB4a"
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
