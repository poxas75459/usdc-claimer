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
    "5c3BMndfvPRp2bsfJkLkbFtikGuaUXTCXpUPbbjoPFGs2PUm3zxnKKHusJvhf46L23FVtMwnyYXF5pdJtfzzcGy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wy4geua3LvToB9UFEAGG9w4nZyNMfqXfmX2Q83emc65fRAhajPDUKnrz8aXYZzn6M4CUEYcuAopAgfwzpcdtni",
  "key1": "uNWhDPsX4RQXrCbkk3vLZr7SoSdiSpoMPQ6V2XjQ3uW96zGY4Emvwgw3Jm4qmYMLS8CUunpm8BKAAMWK4GuVmFn",
  "key2": "4LPQ9GwtiU1zkvuYFcVhXNZwt2XWPX3tbPULashTeXv38x449XEra5r93kwQaKBMsoRLaGjSFQKxxDf13k3cUzKN",
  "key3": "48NMXyfMcdHbqMgHtEhVYfp2m6wf4X5DTgqjsBQUBeyqbVx7CvsxCLbqSHB2hRbipCwBdzH8QfFaAvPhVvtVRqYq",
  "key4": "4oHHtmr8n5W9AJqmTmNjyZojo1eLmjxuum1fU9MAYsrchPy2jzJBAEtndJB3x7gKMjniAbRN8dit3rEYYw12U2Ur",
  "key5": "4Qr9BnXYg62zRme9Qzw8F535FMf5mF5CqVzNsds1Du9uVv8X4hY23hpmttSXkrKMemxEyCfgZngi5pw2UFmQ6gR",
  "key6": "23yqENyUhHWWmgbk9ai6WBsY7GJGumHSkH3gSq9eGqFpEXvmVuMRNBvJFU3VUuN3fYoULYMnVXY13QrbzP7MysSq",
  "key7": "E6SMe7XJipo5vfEPgDtxRdik4ZJKfX6t18FNPcL9KkqfUpz6jLVPN61f1jkT2yPkvHTTQpoddMwDGXzyhXAz7EW",
  "key8": "5cEUUeK7i1orQ7eigxij9AjeafaUGTmbz8eJS8Z8Y2Xnj9JagFoUfvtuo1swgimTAXFdFTKff1hhUZJkk3tpegXA",
  "key9": "TBLTNLHrh1Cbqbp9A6seJoVRp3gnkChLPZEfEtyLSpNdXX2PbN8Gq9epLj86EgohQSHRqDvJpimKWfvXWProEZU",
  "key10": "9j7ZJkW2AWYh6ZWKa2o94RkiwT9ApzNS52RnqDStLK2rLTeQde1L6n7ntjm4Wm1Ec71U5TaUApYSgaY726uXmc8",
  "key11": "QgeKjDKeVcwAnxSvNmw6zAUYk37G3fhDpfgpQfvyoWTMfMkiEv2kRkjCU9bNvCw4wzvKoApjVw2fy8KNe7jj5ST",
  "key12": "4pxfVAXoCRemtziRL32MdL31oQimN94ySajeci28tDkis7opXX9dNnEiiomFNUJDA2RzNocmD85KyhwcZCWGVFrb",
  "key13": "3vwzpFkoPdXHJhFiCYaK4Qn3w4yCsaebA31hGUDuz8xu3AqScTS8sdvFsJvdk3LNBXb7gD9GSWiK86Svp424iUf7",
  "key14": "3E8PKDUete6JtZ8UssForWtyGKcjy14YcbZqeiuja7mdBU2w67Hz5nqXA3wJhRNeT4MnuqmYm3GbzDHfhxApP31W",
  "key15": "4qNi9LCg64LykidEwoGC5hoGGs1SEjtagN44rqUpyW8AxxZqJEtk8WVQ2f2qj9FBb8NQifeP54v1j6CB7Hv6eRmt",
  "key16": "4TgtxFjLUQ2vpcR1VXKwYKF1RU5rMtwnFk53o1qeWALxhEcczVSd2rZqS3dBP4Wcno2mjg8Geev9idaYza3nX1Ph",
  "key17": "3PXLVAtGJ3uTccc9nUKtTVAj2JxLoZdx2xPkuHRVCVAqxVw51HmD422k1XcX3Gn7WvHz6ew4huYigHDqHV2prxfo",
  "key18": "3GZsEhehWocxBc1rb8AuYNT8S4noj4UhfzgzQ2L1nH4fHxY9HK3ffQ3QmFDiRh3jVcn9AY9kLyoFiwQysM4PJnGY",
  "key19": "4pnRMRQ2Snu7YpvDwmtHHYxPYBTweg9fCnN5ZXc5aibHr6qBAkUHWkUNLKGKzw54J8h6jmGyVzdAppT7p9gJyQsF",
  "key20": "3UGfjZCcR6pwNCSFZVsYZtu9RhLmS6m21fvgXzQGupbb6wEcfyasKJdYS9Yzk8eKNugwQ3Fvqkor4PSk4dH82WPA",
  "key21": "3dscUffpA4HDHDmrjhtjGgM67v8RkPzPHZJHhPJsK9REMYaxRQSza2LntL37ziyPB15kRJMvV5Fiz9NuKXjhxVA2",
  "key22": "3HKw6EK2BjtH6SSTG4o4GDpFfCqsk3iP5FyTz6yjXvZickE1MTLxzA2kpfa9ChnEoiNjMu8bYGCPAW86uzFgDfTd",
  "key23": "n1ng9iRhAbxAzwhtBbTx4FgUjXeJRrFGrCzwWfNWXZ8kJykm3jXBgj2eqEyDjrbBv5ZmpduyDY42fRBdvz1aNVS",
  "key24": "UbUnTyjQ72LtaUgM9DqSZscP8UFArxAjxTe857MjNbsvj3gyxtFxpj7UjTFXXpzKe7p91ujca21MqKoP7XM7efZ",
  "key25": "e3PNHS31od96wJsG94AnCfQ8utnB69yUFfKTcYnfJbFp9UZ3aLcY25eZxfve2VH5LdccDwqcaiBLV3uwnCRA8pK",
  "key26": "4dLC69NTZx3R45APSh5SbfkLgv7NT4HbuKWQJuXNGPa6VtJKoGtgJjkofdXYHZUTwWMMYobe7djKMBwNyeGCsdwT",
  "key27": "4pvhKEGxU5R3kPGbKemu1kd2Pandn6ciKPHc3tHR9He771XCusHAoiQfCMJhWEdGsPCHRXyckXKSKXm87yU1WaS6",
  "key28": "423mhwCqtiday5L3xqy7WpNx2gnywQcwb7UFzNRNpKD5Rvf88ZcYboTnPDEDNvfBkXY5f5KikALRTRXdrNXsvBEd",
  "key29": "3GZhB5arLxQrSfModixaLe4eFDDh4o5X2kwH2sY2fBsd9JKdwv5BhYQsj6cLy8FgMvZAepcEyoriGBRswm2PHfR8",
  "key30": "vdnhEF13oqCvjEu5oZKdVRtBPE5uSfrivKjuKUe679DgZqym6ozjHg3p9QWjCmW6JUzCWDyTQgJjEByp4nPwib3",
  "key31": "5BAdD9a5Efim4rP5ai4qUvovD9U7XbFPjFgvgfn6gywTRrt3VaXnj8PGYu2cjVbE4XbCUeHunkMwPQmPoV7xojvY",
  "key32": "2V8xC9DRrt5abha7w4sEsWLNeAvtVBHHjJ6XYPcZ7Yy55AewpZpSaPZ5WVeuszhB1uWA8YNxRdeqtaKvEsM3GHcE"
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
