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
    "5zpxbgD255MDsvMETe8oDgsxM1oX1QC3pcPuBHhZAg4vYB7hJ7EVeGwS7oBTbfJatPx8qkQhk7xpPVUQ9kWTP6Yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wG39G4sA81fbEES4qbpHuDYpSMzrRYR7E1QxyvNHec9Vig9gm6D7qZFvuGSgzgkDoigah5oWGw7q7TfzjHPBfNd",
  "key1": "5ogs2qekGCFsr9CgCVaUXKQExR3Xi7gcoWpwSQQgXCt3qpsVEezbeVi91mASPHhyCDGVfpknU1tWnrMt4w5CgHfd",
  "key2": "KMzmbKtS9GNLARrvFPeuKCsWsFQyaUrKbXzedLuus3GeTpJZdsDyw8BNA81Qq4F8HAeabPKL8G4DSWcq1J9KQcE",
  "key3": "36eE9Abh3t41nX8ZjFQAcYTPGWNCzbiEiLbHTiQCKsfQ3QvD19EuyZ6s7DSCD9MxFPXFEPZvhquyWxjmM4U6hgNe",
  "key4": "4iDnnJBvV2VtHx4V8YLaW61GHgqp3DwAuaaLWwiCtweYUcjQj8q4MGb9HUR4WxkAHe57ougCcqUR82ReUzL43jz8",
  "key5": "3HHBijZis6LM1XQwcZJQgN7k9rTdeNV2NEbQcsc1XfcxnNqbktsjq3dVHSAZCgrfbxcD8jK11BkxcG5ieTW2DN2z",
  "key6": "589K9DwsGe9YoHdzxfK8zCURmzobk2FMwc7TJkmcnGAjY4h5G4VD1D9y9b8ny9EtzukFktEvbTbTzwedBeFz47nX",
  "key7": "4jGaru1ftCCwbGyGJpnxSayFhsCzUNBpHdyv5Xgcetqmgv7sikk5aJ2xU41XJR4i2d4rF93HuqHUwa7v3WAFuBhF",
  "key8": "2zwoRuszU23o2gaosYj6pX1BgjA4nVJWDGox7paV14R5s6FHYf2r3rNmd5eeisdQBJRXwSppKzMmmiogBNLRX7GW",
  "key9": "2xcGPmm4i3ntu1AH4bghNtUnMywd3ZFoKj5ZNDf1hryz7xWsBj6dYTZddZpKhZk4iMEaPS3JUsJSKyEc7ZedBasY",
  "key10": "2rcsMAdvp74fKUkgTa9fmMcXSTACXmCtwuCq7MexZ3S2T2JdRgrnEAtzsuRQSQiM1zbNBpspoETN8FEwZro73Hjz",
  "key11": "28ty9ZofGQWcNTCEFD6qJgaJo3LpH1dxMwx8cxRbcLKXBxKf2Av9MKPhrKjqGigT3qsxTd9J6NC44m3gDsort5jC",
  "key12": "64QtXEEHfe9QLyTXQd2pSTttGgZU3nzXqvYFgWvy3xTkCLVWZNU2CjYqD9DkpvUbddmXd5p4o6xG1T6N2Mm4ygyh",
  "key13": "2NjgJvSRos6hVQLww8LAX36HAUpTAqK4NRyXB4yHDJAySBTSi4AJSPpf1GMe7q3eb4iYgi7QBtVSypkAi9DVLVSy",
  "key14": "3gNQimdE3bC94rskpfmRFnqfY8P7NZ2jpBuPdJL3xTMbjdFg9kpE89BCsajmXtj11GbJdU5JuPsqxrTVhcTYhrXB",
  "key15": "4ryoDHUEt3nXZn23ffZK2qHbiMv5on5fBuL5NtMReLnYhK91Gy6nF68Ty7tsfwrXUjzxXTCoPuLsFcbjdNr9xFCN",
  "key16": "4Pn92pYBHpQQ4uNoQTsv44trAwWidwQdKn352sNSvxTDVd2GxGpijgL2dmBrvBmRi7z4oALqRkk8xJ616RXPpAt",
  "key17": "5jk2j33py7BQMj4kvcNf6SZ6vWe28ctaEgshwxyqUqEBcJhDPfS2pJbU2fKFR1r9G59G7YZw6maLSCeBfbqueFWp",
  "key18": "2KmsWB5vsTxE8ofECv7nunyMPnmaH4Nant3eUJzK1qxx3JzqETzUwpXuMtVEALSynuURDpsX6QkDB2eDc9zKZhxq",
  "key19": "VgdK5BZapvFy8C28UEZyYK1gMPdYHD9iJsAfcf4FYai6YyT1K4qFsGk1X1aakwfZFZN2zntGoJisaiJcJBW5Ms3",
  "key20": "fT45F1yGpxqkiTSfnJz4GjKsa3eRfVyhR9NqV38gY4tShKuqaSw5cPfumptzV72hHQDm5VWuaTxnDjnvyLCrTv8",
  "key21": "5FDwg6uVSWQNTkwqTCXAL7LfxMz5Y3AX5VzAMCXAkL5nVuHfXHRCuGhLejuqKF1trYn9vTaT6ezioLABkeWbi5HL",
  "key22": "3qJVE8rDXqVsSAKnPv4q4GhAK2DpCSu4ayTEsyNnkA9NRV5bm1W4EDHas6NRZeK5iQWt3hEhjkuTUadfRGyDRv2R",
  "key23": "4so5upYEa7VyxypfdRvzyQFenWRzgq9szJ85sYV8km8H6Bhq4X6F49MDyZ5e6iRQe4av42YhyoaSQQR5m62SdCBS",
  "key24": "2bHvgJPue28U2u5F2AbwXnpANNacdTqtHFKaQhkBYnCqBQzPZcjLdqbvqY44VxBBTgTjjMYB4AJbfTNLFK7FqaxT",
  "key25": "34ipu6iTRi4DL7pGr3akCSxxca2R6kyUMXqrfdEzBFBiYgkyKoiuNPVnrwpQf49pmA2yg1kv5cEsDKCRQNVXFwiD",
  "key26": "3Ar1wEoL5nRxq9mbzJR7hMmkUzZQm5rfppxRuphhAa5Gy1xAw6SfC5U7qVsEz5wpUAxSL6Dcm4tkfVmxUGHB9HkC",
  "key27": "iFfNJ61gg3dLnCHGsx1MzVqrSqDDc9SjnxwPiK9zQ5N7iHVjBRFkX9WrbTMauD7NY6Ygi3KqmM1K6fiHZCr4Szv"
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
