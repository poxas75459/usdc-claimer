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
    "3imjBNPND9Ao5EVPhXTBWsgEvh3xV51RNWniLPYNgkhgp41okakNXMLShXxvtBJE7cKCBYtt9bxaMVqNqkhkbk69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UMyfVk4ECBE61E7gr9YjvMhj4s17MVxGRrfXbfxRkJMQnYDsHXJWrse6KDReUbeKWK4yiYoH47Uigm8DFuxKBQK",
  "key1": "5icKg7zbqj1fbpB7vddm8BDx2KjcrKzLZb7MsVzGuqKugxY35aeZjKo8RsjdFAxUrr1LbWLxSZC72ErsT55dEnKS",
  "key2": "361t6oiD9E4hX6NczxT17qcLmwtWLmjdN2CSwqaJScNFmFG1rQP2ersAH68BHjD2wRfH1LFmKmtaEf2zhbCiX3fn",
  "key3": "eFTnJdVzs9G2vvQBUzjhspdAEekb6exsxzJufHFxEAJqt9NqgAgkzhetgertJtNgqg19MGHqXSZE4tzyGewpSzT",
  "key4": "4F7xcCwuSx1RFb5gFzT5tdq5XJ2mMFRpGmTtmWeRrWZmU9xEifwjt9Vu1d54aCCqrrFAPQcvC7yU6GA7o5gwfCFm",
  "key5": "5Ws17VJw9Qrgx6fArWJSwZKChhhLA729CRvAnaZ92r9BE5FqTLxa93A7RGDYVFNbK9E4f2Rc5JRxckxDwWT6tpeF",
  "key6": "2V9Sw8dt1QU4ZavJcxMAvQyLAFxis4tAnUwiKnVWnALQoD8MHG6JXBVrY3ZKjFNZRgPWJd3sdEsegx2bc8SsT7BC",
  "key7": "AYabLTLQkbi4qoMzVWK3tbPjHpUUA6ToBDtVJTRrWY1ZSPJJd2ecH1EuAQQrF8MpvUWTStTszpNjTT71rJ24AXz",
  "key8": "ifVWnyLa46iRCrMZPfABVMWYicyLyshoxCh6vStkTSB7xhnhRanwxGKCyL3LUyk1JZBjnWcH44W4rFSqJodiMct",
  "key9": "5XWGmweFXed56QRSCBkaMD4ngNywPmD1DvCTTkQM3v2xvzEcPPiefFcUq5dpNsTkL7ePqi9vRCQ1d7Q3mT8QdVax",
  "key10": "47adYvdVLJ9Z7uHVNrbQc5iXogUK7TmLJeE1AwS1EcU5WWxH2Q9qeTY6psFFk4rGN41fMib9qZr3Dywh8NuiQTDu",
  "key11": "9Rms6KQxSoK2uQoiERW39vRzt1uDNrQkwyXnzbhxwgQirk7g4osNEDnTnS3J2vVtyiPZWJRgEHnPpueeuPSXj4T",
  "key12": "3T8chd2vPkkak5uEo6vQThDQweKJNnNPAQG54tS1s5MUbrbSuEWLeebYZoqH8B1uxCzPNYxN4RSGK4dN6kzFcbsN",
  "key13": "4ZBMLA8jvcrpgV9FUzqEoECpxnQSk91aBcgEFcd1pEZecRQQr4y6gzfCtDGcq4nZEcf54njhtByL3McdPHHNgwi5",
  "key14": "33Fncms6mxokof9WxqEzY21iMeHQZinjaM3LsZJZYQGctnCjWh7UATPuUSVS8hECfYpER7d7dRUq1cMAWKLXcHyt",
  "key15": "4qbRep9diQnRWSxExyLCaq5icKp9QbWNgVZ4inKpk8u3oxoLMtVRbBgC5raDpCsajyEMMeByBsiPryrUESvwepkz",
  "key16": "5Q6keVQ1D1kHDLb5Zw1AJvViS4guPWbmzWBU5M1ZnRQcdh3CF7Ktdm1H23J1zM6Km1xvwFo9cwEuYNHfSLDgBtva",
  "key17": "5cdzX4ZfvfD5dgNo9R65nhFGekeDPFDqzD737XZW5CA5hFR3byBrU4osV2o4YqCcVz2K5FYLCdM5HVpGncZDZxve",
  "key18": "3q5WuEDDHpJq4oBBgoGYXQw6RWiCHpzcW228T7QXbH5NNgN8DYBFhiyQxBAyXYuS79cvHuwjmRosV49RTWmSGWrW",
  "key19": "v6t42Lyx9DhAHLLEU77qZgxVbS6ewMTNAy9kQoffu2h7pwXr424qRNgYp5CrJfKUTtm7cP8DaLCx7wLpUjXY6yS",
  "key20": "3PmVC66r6o1cKXYa4LM4BobmhWY8tsmeT7ZGCPooDwKXYjFuHoMfoHRi4aQnQMNrk7yaeAT9HEVKzeWw6YVXjkLK",
  "key21": "5E1rxyhtjkYuwSDXpBRoxcysxaMqJkwbXLE2dgLxLfHtfUm2dptF2B4RJbZw9gWHMfqyjBDjANAE5aJpH6WxKFba",
  "key22": "3LrT9MZpwcM7gGFxtrW4jAfiTGtUeRZdAuABgUuqmNCDdA684uK8qRuRe3Rhe5U2y7GESwnGirZTcKJAgzja1FbE",
  "key23": "3goNqXHUDB2koNzvD1KyPYg67YcR52oGYoJysLS8ecSK9dskKkSb4jvQ76zfAVJVGVqy6faiqh2PaKgdSmsNHuVW",
  "key24": "3vbgKMrWXk5X9NdGJ9Q9ZNByvQHLgmUqDZgvHGRFMCbNxE8upHYRHHDm2fujM76UMgaf5oAa2VauHi9rB9eGB6g3",
  "key25": "3pnvyggzok8KJMgqrGSamQfnMuoh98XGgPC9CLEEJZLvNGUVQoGaXhY9vuDjuHEXc8ioqVXgm8CyzmsWg6ttP89T",
  "key26": "2EDxh1NT695ayUkgFH8BBdMcJVw4rx9GkKM7zJyZhzeqPB9n1pejGL5M4frb9LgS8fGqezEiY9dx8e3QtDsoj8vL",
  "key27": "3Rw6eYJ5kKv9fAj3Qt49JSSifSUZqzX8SCodkivPUoiEb1qdVoy2pJ7sYAgFJAB5xdVqYa4dVUFYYXhWDLhGt1Zk",
  "key28": "4zDAAroamm2ZpnyMQkagetarq2m8vtdYjxfBUUKdjrK3mdDRZR66igq9Uy8uj3BeWdaKqY6A6g3uKNdpeaqxANFy",
  "key29": "5EwkKeznz7MmCT3xdYPJ39wbtmh3hnTfTAXbg6ytw9s1MwR8j73bQ7DPv1EKwk4Y1UdANqrQ9oCC9hDUsiSGoSin",
  "key30": "37dwf5WbRWfrzxTRwo8naCiniydJqeAyRCjgQJ7UemzrunQBMAjwhGjNUP8sqKJUiRyZ4UHbs12Rma8KY2JHvXYA",
  "key31": "5oMSCo9ogfpXYvAM1nJXrQN6Z17SV6YtQNh5HNdCLwoqqXSc6diujKqrRdYvLyqh52iXNMTPEqGmrqqM9ytm1zDu",
  "key32": "3iGVovURT7bkaBV9RwQ48RvinkAt3NkzmvNokzE4LSWnNNt8KwrgddJysFESg5dxguQjA7ixNckxciKSZsZfqzE7"
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
