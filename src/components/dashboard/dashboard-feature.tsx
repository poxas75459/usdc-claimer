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
    "4zTmbyu3wq9HF1CGTV1TPnMj2qRHUTK2xwjjkDFxsJ2mJjqSr5Ecw3MxCV1hsToXfKHq8SAmQeqotAVz5GTVxArK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cSPjPFXVuGr2HxdaLMJ3daancRKWVn41nsUYjaB3zJJCwXthQvW99TpGwHci1j6CzQCFK1GEAGZseCf8G8xe2FW",
  "key1": "24ifDsWUY4pNSrma3TmZ43zPrCDnFQyUKG21hRKL6ws46YbESHURoGU7NF35NN3XzLRXh5k5KQyWmcMpnCy7osp8",
  "key2": "2omoyysTQPdUWFMLtpBYeZtsMJoRZYNfhs2ar8pfY8yUQz7f3Tndfu6pgGNynRjUB53eYpbj7jJ7kYZpusX4udYH",
  "key3": "5ptuPfTVWnJvZ5L5pH5RAF84afkmreeLo2r54TkbuP1goF1rPmGC2g8UWBP5AtdumcSVrpazuwu5hUesRNbT4PFg",
  "key4": "4Xc8QZU4FLnAYQbfYtuUjH6JMu8YZy34TFbnfW3NTYiyLcR2WvpEgj5GDH44zHiU7cyDJDR43hG6qURzKnjQ5WJR",
  "key5": "2fevZAVunQdRDugeUootENDjTHsFFLpK3Ck6Mq8ZMzcJFWxtdUZ418retSvMKz79UaUPUJpF3kuLxptrmg3oeK2M",
  "key6": "5uyeUtUMMEnphw5dHN16UY4612gDUZ8V5eLLh2zERKyJyzYccRS92E7qwkp3E38hU7R4jbPnwMCGXgkUPTVsoqcc",
  "key7": "21oVj6Vz13iChmSbwdFv93K524BzrANvs9QoDxKVD8iVzUMjhhPNfwuUttf5BKbB8YciFVivaQkVeRk2woJwJ2Ra",
  "key8": "2ytiVsQUTGfYJ9q2EgRdDLb13encrqMFWGVzgf7E1Rsrv6TemRij34RvJMohSB2vUEvACGzfsAcYCUPuK1ioWPAr",
  "key9": "5WSGmYgU2WqGWp2jUQknEqh14cfVXCo7qynaKFE4anSzS59VQrpkBZk3SRs5zkDEDCYV9UtLKNzk5F5QZMKpJpzB",
  "key10": "DD4E1vfHP7AN47ZCXhvJmizyBn1e3RTsq9dPxUsuhhi45YrbzWgYyWwY5XcX8VAvYuQCihmS3AFWe63GPVouuea",
  "key11": "5fufGYAJ8wikyGapGkjn3A4jXRQnrz1DNtT5fpUcTcNWDr4fR7K9uXPJRtCenrpBRrBfswq9GFeYj6FiWc6SoKRf",
  "key12": "2mxLokY1y81CRRz8qSB24yp66611iWCuDx9ft3WidmpyxNu3A3bvsSgqbB6mDQr358hcNjhXnqTrHvupShUind5B",
  "key13": "4BQphBxFwNYU8ZddKScN27o7posnUkQKq1oExMvTkCGKsq4h1VgucSFNUr8hE4tW4j54uzFZy1kaAnmcgHj6wXKi",
  "key14": "Q1c3uWKeiFD4SY1hzch1rFTBzW5gfZG4cdgf8hf6pf1ooTHvVB3jpFyW6QVxA4g6VcaSp9BRPVQipksSEEuPpBA",
  "key15": "3iYLavdZV18adPFz9RaDjkT8vJerj8whGSvw25Ma8QKKd2ZFbphDzZ5GAHS5qLgcKkrQR13YYQ313E5PVBSRwUnj",
  "key16": "ppjPrCFuw7ZUSkygy6N8kYF3FQiFp4eEXskyVwMyQ8m4wNYwz5b5eVRGKuRJHtRtxe3jjavxmJnpbKCyPUCmkoG",
  "key17": "4sFPruN4wMByRYvH4gPWFigc4njuS2MPKvRpRDmoYtg7W9CiWbRskjsnXvbvvBSG9Kn8qsCxBTTJD9Sk3gNnLvEq",
  "key18": "24WuHvo8m6KZX386budJLAr4MrNfg7ntbV6yTwNZa5XcfTa7DckoHFcB6Xbo2CSLLEYkpjVVVDn61cgbaDUjR4fL",
  "key19": "rPi8tJcraefWuqMAhD7PQqqf3LjQL8kuRrS8AxMUxcRM1rjS9mX6VY3cC2Q93VynJW9XCU2sMJ5ZtNFwHt9xSWZ",
  "key20": "2V5w5bDjZCM9LegtsXSom4BnkZMRxrrY2ZB2yDsC5rzsGJMzwxzJqs6nX82V6Jw4DXb1UQtGQJjYweLrT9gFRoKG",
  "key21": "22Qgr6GDbSyXDG3sMi3Sp5LJszwkJtRKLGHk1xN51PWxQ7sdE3jhqjjMscdBNdTayqCirUpLTmVATy5qng7TWYCN",
  "key22": "4YPKFRjc8mCLoCEWmsHNmSRVkgqASw5qoJ2988yhLECdPYSCbh3vSpXouEu2tGzbmS5Bnm113GoRSfT6CxxdSCfc",
  "key23": "3m6G4iY6vgVUdCi6aEnnaTnTkBfEKQV16kuUJG8cNqEjQU4EbJYSxJkpyJYCA1D4k9PMBiAdpeM8PMi9uG3xcVfQ",
  "key24": "4VKVoY5cPfunBpAvDQQFxfb5X7e8MC3DRRy4md7uWQABpBLuocDLpHFwTAdhe36QCxAxcHLDDxcNZ9otM9HNmxkS",
  "key25": "4QqvoXVgKDfLw9rkFfHs4yhnWoNKJDkX2aHWFJ8gwut3GKDeUwW8V9EsyEqsjvgRiWu1fPbKGgyfk21k9xZnQjDs",
  "key26": "y5nCJvyxPUeWCBPzsT5Sj3Fach8KBVcAaUeMTSnf1ewKvh3srdLgmUNkUpR97EKjeDAyxr6wBRfigQKbmZ6CjyW",
  "key27": "61Q5yfLZytC6PJb4BzV1zXPka3CHqd7rLM9SuKvL3uyq1WjMfjEMfpSrW2oL87P2pqpgxTghaMYec6CLGzfLAZ23",
  "key28": "28gr48BT7uqP7mZfN9YcPr76LPuqp2LuSNnuJZLkUkfG2RsWXpUxWN1ZQM59LSP1eUS7a7p9spaoquiw4Fap6QHM",
  "key29": "qLnucCeMCdAfK2froFoqQAd1sq1D6VwtF9XiP21MKNGHXeb5uqJ8vDzvzuC77S5TwyxUoqGTDY8BJ6qcgjWXpFD",
  "key30": "4VwnxBVtPk2s9zYPKrZeHt6SwnG6wysK84GyoJiip4tpgwthxGsXqymY94nyK7uP1deENZmpHn5iAxLKsHDeQDHz",
  "key31": "MBcRghjX3LdAkueDGfvDsqawSxuz7EEaDCLDdG6J88haLTYkTuMbz6jk92bxfohLkAfnDd7uVkunVmCiDeETJxr",
  "key32": "5z38tYU6NC2nWvghctHLHqnwicuX5ZhAKoSZWyEv4ABQxa8TM8ESioZPRwVxWSsu7NWeTbBbNyjsfbS1FEbHVUyB",
  "key33": "2dk7myRhAwd61g1vyqv6yYjn2cQnNKeibJuGkWSs5ct1wZAQTpuTopssvvaCwahL7hz7KTezednKJ93nhKNRk8Hu",
  "key34": "5zcYy48SS39ASuxJtgsoJVdVBTAFGxAFHs4iKRFf1r9Gj5WgRHv2zvjCJiqRWTWDyxVtNNvj1a6T7QTvAFbYn4r8"
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
