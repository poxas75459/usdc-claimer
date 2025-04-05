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
    "2s3mWwR8Y3QCgGmmn9CUs9UbUGXKfEMtR7ocwH1c22hZY8QogxargBG7KqNQYx1LY4JwmmEHrAgqQBLEafWLG45L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tPmC1DFWdwTzx52hoSwGT51GE4sYk5FjfPtZAMUTLnUWEqdqJGqTZt1cqX2NM7HbhjztBhQaBxyh74z68ajHUc6",
  "key1": "214SVYgTUx8bipuodA8Zc3m5FZ5PiJaHnE55XvPj1f3haPqhEE2kaQL8WVrP4meGAtQg4qeW5b1YuakAWUmk4RSK",
  "key2": "3epGNDtzFz3a6hspZJkKJ3vjGurzhC6NSWpHSTnuv3rjSeREqXXmMVSTocy89Gcu6prwQ1qWhDGjwM5tWdzvJqMe",
  "key3": "275Fau9SZ7Te83Cyo3QpMWvWajZNV62qEA9U2crtsdSxNyEZn5pBpSJUPetjKM45FE4Ra87UegEnAzBu7cc6xnCz",
  "key4": "4jS8wJjrz9owg5sVqNoThSBPrSHqQfBFpGkyqFeSjPZZsJLKx45pBZj6qVws2c6aCa5XSqX3okXUd4mcXbMmPo98",
  "key5": "2WMNeQpfTjRMMjzC3w2PYuyUH3qC6rd8xSL7XvmZPp7YqXDcUrF66bmqXzpFQSR3bJCbTfaDdto679RXtBpUqax1",
  "key6": "GhRFTDBh1RTHnQg7Ymy1qeLPTM7XodwTsoiGVy3qt6HuVSSdjzJTsjAwkWpgXqYvWyf5PjxZY6PxHY5y1zjexj1",
  "key7": "DvbQh1ikNEBCLTbGFQxMgkvKnFQrURcNzTdK5f7tCGAvoqhE8WQaAzYm97a3ratfo4hShV8EKFJWaLqfKWE95Ss",
  "key8": "4QzbQx9j4eCdgvVRRcm9SZH2CPXDRe7gPD6EGvqrqESee5rBL8qdpvCE2GycmCrUk2DxNKDADp3Etf5JRpipedL",
  "key9": "2iT5FhgMPhzG6Ge1Dhx6DXBnYb4VgWiNddw6egguDCyNbiXFKS1kcmisDWhyb1eTMfte7RLL1cKqav4KkiXs87bv",
  "key10": "Snfo6svzMPzingghCaMUa9TycqiARsF4SHjV8azZm8yDvGeUFR4eZy679XdzRzui4LXbYmxv6MSxPPpMYPtYrwN",
  "key11": "stiPwzhiyz6gDDiGDzdjAEUjuRYLBWkQaRVhBBzz45ULjcfgCpJKfp3XwdCXrCBnbY1Mj1gTUwVBQxsoYFtxMXj",
  "key12": "5sM6yzvNPeguWYxRib9LProQsmQ8vTX3hdibjK5te1KXasf4MMtAz4DnZYELKSJjREn94HZCAsKKn9awTEQkQbSf",
  "key13": "31XtxHxRYkjuU4dK8p8aGWA2Eb5uTi3ZBmWvAPrxh5cYQKCewubrFML41ZJ5U4FjChYqh4hGHDUHCPwaYF3aFhmA",
  "key14": "3mkcCd9LsDrFARLigYvLcrWjPnhz8G1UmNm9KPhzGcEfZUmaQutKAYgkJxx9rJtBySv3y7V7DaAj4CQ8VF6ZueyC",
  "key15": "3NWVihJL8HeEbDZJJoQE3qf5Wyf8qGX9dwfs6sgZZLyB6ib5FXBDZ7yT626Nj1odF93X2BNvdv3C9jivtdqQkWcT",
  "key16": "Z5rCwtnydZK7i1PkarogejBVHdF6YWikWGrpeZ8MbTa9koWRD9AcBKkWZBLgUkt62R1YwG6NM5rYZixCB3sgSiW",
  "key17": "4CLcW8WCEuNfMqbdWRzvyeWg2g5D4wd2RzakffQtTGb41RaPZUWjUEMSgdL59SZYhduZgVNyY7yyWGBPTpM6tLH",
  "key18": "MzqEAcvKsTV91iVCwwRZf8fybi3FJipkEqEdzMUVPsBUiuABF7Sxh6tH5k8irceZvS1bR7dtqXV9xywzLvnAx6Q",
  "key19": "TEbU16W2pZmmJ8zjeJRdjhcsmyJHqM2aN6jhGwXX9H3MbKWpRtbYD1LxQ339Jr11GvVyLQ3yM9qdiukAU6uPasR",
  "key20": "2ewJTLjor84PrQx5b9Z2viz7hhqNA4EGmiVq3szp565kXF18d51tbjYCWGJDyWEJsJxJDKNHvwvAFsofwN3qf4fh",
  "key21": "5kNNRB1DSsAaCCUCFEbqwfdKr8gZ68gmz3RGpP8CKbGhbDBN9RfhPuB7bcWpRFUsMzM1BFtK4TLTh1Sb68yCFg2i",
  "key22": "2ZSRGo5GJcv84JLTcykFvUt5K8VvUgaUfZEkSwpbbb4KRBFohAs3zidzXPHsMrzfYiK6JCAc6nc4mgkXCaWVFNhc",
  "key23": "3CHMJnijzW2guQX6VoZ9MrqEQLoTy5Fv9sTVACugWpeQrc1irgmdTvT652ES58ZwoCNYhd8mQhhv8EMA9hwfixX2",
  "key24": "4qL84QJkFVVprTUkNam8CKoi4An1D6pRTD5PF7SBhkKyN2q3wr5xiUx3Gq4KNragcLMV56q1tYiphvA8mHapfLXR",
  "key25": "2Sp2hedAALd5Jf8DYNoDVGMTp4JjSrKZoKamtbMpyPXBrnBwKumMnpJqXTh5obZf3jVxv9fpCRcZTTLydiHFCokE",
  "key26": "5Vo5xTBPL5pFqnvWVNRY429Sz9CFEBkCeqZRRGaysTxCdqMVt3Ucn4dLBiDcysnrqdcnAE34BA7gLCau7MMnmXAq",
  "key27": "26FdJmNW9H7VdkNHSgLaitANehTPoGbvCkzturFXcPDkDc8ipLdbjxrGvm9yBfFiR1NuNwfvo2Dr3dFMKNfNxT8f",
  "key28": "34fdqW2X8eyMCrTJVcWcaXF7n7ThyQUk999pvv7jnaRLfS8J7mn3fKYeuGABE3XSqcx4tyyGyNVZmLhFeJpL825g",
  "key29": "4kH7dW1yuhvA7JayBfvmAnK1fMtrf662tfVCSZpzN9EEEZYR2NxyVh9n6VTr4PGyQwEPP9as6E8gzJeELdetw1Lh",
  "key30": "2qt8GkXNNuHqvUFg9ggFWzPUouxbviY1Dgzeb1CZ9xXtcftMyCnwBtevywbwcgpW5VRP1inUFi9BwE5ZaDQuQ879",
  "key31": "4gVuQ9dAHGH5zxMNuPGj5rHdSDV2d822PMWrXCqB9bJYidLSVbza9Ka36Ggtpg6Bh46ZXwJcBdbH2VCfp6uVhZYB",
  "key32": "4B6FC7WBPbi3ktZzrfFZVWdywj9dpExayw2AgwXGeHXWxr4r3c6CY1VHeZuCXkkiPQpEUQUdSyFUogN1PgsYxMkh"
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
