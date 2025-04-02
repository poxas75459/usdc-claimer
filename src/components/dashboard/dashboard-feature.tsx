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
    "2nyQnVBvLEBhZ1JbrDzuXbCrsatDLCQcyM2F3JfwA6SJjNWiKXqKr1YRhZoEc9W7zQpcEeYPeZkTi4r8F6mCcNVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T5c5tXNUek5wP6f393KWaBU9KyDgdVEd3Ddkg36KHw7HU5hSTyNfWkT5zf3h8cWemm5t2iBtQyVsfUUXeGav9h6",
  "key1": "5jwthuth2HGChqthjEoH2f4HGgpCi565b3iXh7GbYcV9975WwEJ87E1PH43TpXj7hDT9Q1ephnpaSH39N3QiUDti",
  "key2": "2v8FzowusSfmbUXd9KurCJGS18Pnv6H1pFJhzMbo94Cw5E5f3GyY5uuj8LCucoAAGZtJjWcyjGZNuRT95T7KgRMc",
  "key3": "2JTh9tBy6QnaEMTTaYpX6N1Ew6wDYvXHjKLmswqT7cZkWroQMR2w6rxPh5pFytYLzEPg8fZGMPJnmo46Z4Y8CNpC",
  "key4": "5DUM8LXtcqvXPCLGKnXiPF2vC2er72WNWz6M4q5irtFE789H8HuKZ3Wv7hdVC6SFt128D7rsQk7zh8qPW8eX4Uoe",
  "key5": "2Bzh3ssxhYPaMYfRjQMnviCrNZMnbrKKUFiKukAgCUZEeeHJk7xCYUMAWga86TxgDfbNpFg1hbDawESY1MfADhNj",
  "key6": "5FP1i1P6WqsHqcReQY7yH5McQpVKBVrRU2uoQHvzZp7r4nQ7sNNmbLYSnxkE4kZMtKKxBoJHiinbCs54itXWDAE8",
  "key7": "5cyJ5UXjaonRk2vvDmyhpVQKz3PAS48pHts25CcXHcbANbHHQpNhoSSQZ3PsDNFXvTt2JKJz9FLGvtSVUhVuUssg",
  "key8": "4HHHN5cusQtm3XSez1P8aN5LrfNrtzgHHwksnUt3kiax6PrTJ6d77bsT25wBtSHHf6TRUHTdkXom3fweoZ8E6CKz",
  "key9": "4QtHMQUj4PG66JLdUTeZoFdEVMvHvmXArccYNrS9g6RccbtLkveDpP3HvAQv2JiHAViJkr4rxbvgXMPFNHPpvwXG",
  "key10": "oTFDdL8VB7dznz5NiHVQMvCodAyWyeRpvfjC7A6o856Rf41R8fY9KUQBKLp7wAo84paSo5gzGovQym54DVHsS2T",
  "key11": "5RyyVwyhjZ1KFSBwv6Jho3ggfaHP71hVoMdcZaKPXatL98CehvAwf2S6ZG6WqaUNn7Po4NJTetwDFnatDFRwF4Pr",
  "key12": "3nGF7wds5MjV5UxH2NTZAGdqgqkQx7i7vnabQzyHam4jj2U8JUvqRWksNnLH6jpRJnD67gaazPDsr7kTCE8dwUVi",
  "key13": "65MXJJ2rUAkZ1yquBd1VHMBMqD8V7M6qFEHb7kGaNB9qGHrYEX8Bx3xox3s8cx7nryuYXomX1goV6KXjsqkhgHtk",
  "key14": "2PVU16z9V7AjKBsZ55myZBAjYBywkyMjkBpJiAijA2F6co9pbsBgH2gWXSdUpxzgA8Y7Ug7kL8NhwqKDumioRj5r",
  "key15": "4dYwyQUWneRSHexrAWeJETtWSjDRTCtibdRNmJX9ZASTvfpFm57UkotdqMz7rzdcAk4xzFdRiUevFTfbTHj2WrrY",
  "key16": "44r2Cecv4YW9PHxy3hrybDGh9Vq4DubBiuZyQobdGiqFLBgCDdzNC9voPELoA2puMegWSYKZD3wBoTVd4kiF5VLj",
  "key17": "5D4vdgmdJBhcpND6nNwktu8HqYVaK2D93MX4ktdaX86k9tPvgBKRe34uF2gWdBR9PXAvNksn1LYHEHrnnavC2XPQ",
  "key18": "Gp3nRZyTGkNBVhVxXi2rpcBMP3e9WmMjDDP7KztVBEHPA7y4c5baH643sP53sHH4AsmfDL6kBvb3KAJp6h1ccML",
  "key19": "5Jct5JCJHwbg8tBBLJaxchXmrmpV3poKs4izCQa6C9PWva1ogZ2iLKri5DFcMYyNAYDiMi744aMZuk89bCxJQEYM",
  "key20": "5feVjmYWPXVy2ZLbFkRFG5XhcK8ME7KgpfC1xmKYArj8fG1vD5qHx1ZZcD2b9r3q3YuNAiMfqmaFutsURXzryAZc",
  "key21": "2rXmd1HzCLwDj6au2VBus1ZoqDUyWsfRGtngPBpmQAewMpSMe3dPhb7RPfeJzzyiJAWoxdps8LyVkSxXxnpoUHvV",
  "key22": "4Zic1D2exRUNEx1BKCcyFVXG5NQcp98PzRnqwG5r4jpDpZZ5w5FjPuvBp3ZTpRnEbkSrsRrjy9fZqL9viLn5VF3r",
  "key23": "3kYCshHEnCtSGmfmmyeG3fUdZ6T1XxoCrDreA8L1hu8aZEqjPwM4LzxwfZXaHmvUfA7UQuCKYrRtmUB7nESGAqXN",
  "key24": "nrUgUqN48pgwcvSWzgCQsv5fdixuKddL9tbbQLVxrK2gyxG45EmSpzNUdRmt6xkcVz259dC8ACV1awsUN5Q18nk",
  "key25": "3XaTYFNSKdbsHfF41jtV3uurSxWoHiLweq2PqTaLaF7WhXKJK79ZQWRiKugRLmi2xPxeTZndgqY6VtYkGzWEdFJe"
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
