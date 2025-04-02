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
    "4mJJXgwk5M3Lfb9r4Ct1cJx3yB5W3ybkmELyqUu24TfAvoafCgeBM5s7jvepThUdLxpLv9GRLACQMy2fYLQKLJDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H26YZj2t7YrR5F3PMbs3zaYYfehbtYvUWUSD1B5fgC25DSXNesoBpGo62EY2WekmZ43rdyiExWG9oxj8Z3VShhU",
  "key1": "5BjiBpCSg4KMCsX9Cm7fodPmgBJLAhBTS44wnvs88DkBmJpmMwQKkMhiUijNkQVZsECwECXWkcPxQBPQ86mM5C4Q",
  "key2": "5qo8z4QcbTdCpL5XAiEfbvSWozz2FD57Yd14cgjnh4AsWFXwY65wfVuJRKZNVzwSmmLaNmEvBE4U2q9ijP9ezYHq",
  "key3": "2chc29HWeCvxbNd3xxYRkW6tQMM3Dv6U2kXkvEPhuNnMku8ie1LBTrac4eC62WoNyteNRpugYWa5yvSoRkK48i3W",
  "key4": "5N889LzQR8EvpSZ5TfzYvcpHiayWcHmar3jndxpi47SE6Vy37bMifM5fiuVksokCU1zx6m7jXsTwWYwHbdYxFhsZ",
  "key5": "4zinQVMFK6yb5aPFfJzCc6HYTWpCxdZPjscNboH4kqo6LT8gnLx99S6biEt7XPFeUACj3aeJQHWta5o5obo6tGnY",
  "key6": "48hDZMj8bMWQbgwEApihyoakB9SXgmxPP7dCEti4zTF81MLrszDFQLYDGn7GNNePHuZfnrmP1bn7trpPskBrqat",
  "key7": "HuiLtLVNXzHaA34Q8zkxc84haiP7GwYJpir2pSWNmBYUWDVtgCKmmqKsvkEJHBXEGGBdTtUWV48V7yxYBbZ7Mhp",
  "key8": "b7HQrterdgqbE99vBfa4CP8QeWW7oFeCnXf2vYdQUVGDv9UqvUK2hCQBhs5JRDeNVcMcWnof2hbLrQY9sVkT93d",
  "key9": "3Bgzdt6y6jGaTqfhgEDgMvi7eQNCwuSuYcadUferhF96nN56hC6rA4qeiMYrTJMsS6m81KCzvAU5mEmfzL4SpMnc",
  "key10": "3JArxat59vVqYBnUpp9tj1twsRp1xx3pSimGEjHxEA2B4L9mATkcUk9breTFM49ZQ5NABoQUUHz4qor4o4Mz8LYx",
  "key11": "3aHqsSacMaeNRnoiNY9dvk4YR9UHzhndEmfLxbzhBGFu3z9UL92pCfxziXNtoSpEajV7Kt4hHR76NRhkqVguTR3t",
  "key12": "CsdiHN6Y5F8oVnUU3oE6WvGiGK7qnNQ3N5R8d4FnQn6cyNrRd1RAqeKAWFwU4DsjhV1ZefcXpv6i1BNBJdEBh6a",
  "key13": "2a8SEnTQ7cGtL1ggE9tQqHbt33nYZbcsAEciPMhB8Jea3M2ToJjWeuY5XD2TzFoiVp9Q7vm7a4ZA7xqs6nf9K7Z9",
  "key14": "61EvUXpxf7DbfGwbpTVBYrTdzY5ZbnVQKZufF2KxSzGpGoVNQ4cvk3bJuqzdk71Fvxxfnn2RC2cesvSRUHzvU8ub",
  "key15": "3kXJoRcB4SrB8BY2kG247MP9sSsMGhnQeLfok7sm5HoNm2ThEtP9LWWjMMrwrBKmJ7kE1dSRAv3mgj2Jrk6FXmkJ",
  "key16": "3FRFKTTLoaTEPe6ru26DJgLQbJFMgejDktVaoPTbk3SDfwoqr59K4RrfmWGhrCXwvbzuYf46LpVXuNsunvJdU8Qi",
  "key17": "57YJkuKZKGSGapxaPQknWThzjdwGEKuUq48i6ES7bBpWxYAWhdDYVgVZ88p4MBN97WfNzTRgDpdJMvWBsqdrS7TN",
  "key18": "28UZH9Zy8u2zProR42JSGVkeVmrd7B6WYjk2m1b7sop8Eu7B9HpNuVQHyZPHGZYDdueydjNuLssCjhdY1bP77i6g",
  "key19": "48xux5jphBH8izMZ4nFZX2U8DhT5MXrwngARqAT57TQAEpvSeqTyCvRsLh7X2aiJWh9JC8jkrBLubDacyPFLgrS5",
  "key20": "5T2rkFqUeAb5QH3xRQHsAnALGQLFKkSDT1Du9vmik8opv2W48KGkCqGhT2HU1j5bhfeaNee91CmJTMjERAhqNg6J",
  "key21": "3gsPSNVF1rQCWD1nVJqnM7e7yPwcHMuMygTqipFoD8i2XExj173cjsriPvvADdVrVtqTLqfqCbZpkuPKfjQbMobY",
  "key22": "5v6h2YFQEtfYepNiUtCoL6JzXwTWkWc41AV2jMSwv9FFrrj97cbFHU9kkL8arU3h3FFYwVNBHJQij4ymrVpCoWTt",
  "key23": "5GWCw9hh8tVsqmbp1R6ZusRxW9hEc8u2vUGsE17DHMiz9ShBReEpp6a17roLKdyTena3f5MTZjMJhhyT9JFe3PeK",
  "key24": "4KVGsfP6Jsy2v2cQsUUryNW1vbEuaR7Md95bTq5bh81FJLF2T1pTa5Z6jTaVvRtXhGsXCcpC7kHS5qRJWHXzX7dE",
  "key25": "WnfEWWXHTjx8NsEcBmTAKZTSys5ySraUSNVTkb376WAJDRkzJLGjDibNFgdfEa2WVECauXPYE8y6cvGSHiH4Uvi",
  "key26": "2gAT3PDFCJNxajyJxXFPxe7aAYfHZkAPycR5eB1a1tKzvoEUU7hjfUUrXnTn9PLPuBfqf9HAbEvM9njkCt6W8P37",
  "key27": "2SAofHSvBKcaCF5mPB76gPbu41iHbuiRhPrtdnx4yyuwTtAx9KtkzARgVPaA5492h6Qy1PkGwyTFvwPqtBGuoQuZ",
  "key28": "DbVf7CcmNMePCoR1QRJ8NRiWA6prAg2RBEELWhLhb94VEjbznrHX8xX8jZAPvuDfQFZqe76bkin7ptioZQS8uPT",
  "key29": "XVcSTwzMXKoRLTFkrpxnygHdVNx1UuZC4ZfiRnyoovuAxNiesfazK4ghYV5VTq6MxBY9B1b9k3tKi1FvVhYoS7p",
  "key30": "3GWH9XRzGMKC965i1BAqj1MS8KQi3AdtkarztVzxoVKAxab5p478TzFVfUUmKenGBJoB61gdydzK8YpkbStdvCty",
  "key31": "3xfNHCkTAeeu6aAGvWUZ9YEGfohjwMvmc8oR8quaFUtnsF8NthSTSMC5tELVBFcDDWAzSnPRX9CMKoA3DTTfBHUz",
  "key32": "3jW4BmU9UVeWwtjp84eJqYRWNaW32WPa4AsHx7EQxQeWrttnhV6kxekj7hfdWYr6eFZDaEB8pAwJSuRPAJm6Ltwi",
  "key33": "QBhFGvYud44FeDoeKUA392qGENGq1XpxMFMHVfR79ZjcH5det54L9AxuJsFvLMgjQ3ouX9oJSM38VeTSgAgtkAd",
  "key34": "679TPzvsvTTMgqs3nmTxJ1rEfFuKNdYjinxBw7S3WzoEn4Fft6ddAYV8MmzfUqPvmdYCp3YJDKpaAnh5NabMiNAC",
  "key35": "5mjVYdPv5ea7AsiAAtiD8CJA1raPogLHgEifkRPBwus46DHHp964DTFtLQnpX2ocCFxWQtZf4YtzjbDmwmSkvNNS"
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
