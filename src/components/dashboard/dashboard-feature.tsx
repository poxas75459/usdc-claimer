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
    "4NAhUDngc1Hj6VoBkURYNy5gdN31Gxbq94thRYacyhbSzSYB86aqZVVeBUDSpPuPzMU81yZR32jRHh6Ew48T7ihS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jeN2eyi6iBHuPS4Uwah1TAXFpQRZQbMp3gYPsmpQp74U6suK3jducum6z8MJvzXVuGVspAaVwhfG8ct7jfvjimX",
  "key1": "nywhLh2vihvGAncRg2TsdXqyo8gPTowAJsomNyfumFHmNRW3P2RNELq2YNeWyN2AkBrUndgo8F9XhQsHGviwtmx",
  "key2": "3Cmt5gSoapCy1XJ5sCSgNYsrbz2fasxTPhMCgpL8BtQjVMnH3he1CN5wgPQSz82wg4bMcJqikkJzHWWytmc6B7RG",
  "key3": "Z7EydswshwA2eQ4fm5cm78r9ESGwgBAU54vNwW1tMXm9o4d5HNuwmw5wkZvg2kT4s5PvqmAeNg8aTTgnKxQM1y3",
  "key4": "2UgBaD4dKj5zGqme8HjFNQT6GfDrixKQwN3QcDshM54r5H3uTSdNHK7HEDPd1fyGQQ4jov4jMVXdEJ6DNLFaZgiW",
  "key5": "AY3oZ6xRH5jAbTds1siqAz89W6iLz7kjj6V1h6y4ecDdRL94MGqw92kiGb8hnHs2Pdj3NCLdA6UyFKKqWyrkCQG",
  "key6": "2fKsySTBy1g3NrjbqBUmYREsCdnXcJCbC2TDBFGnWadnnuavdqqNZAKAH5PVvZogb27ZSdxerqfTtJmik6VyBQg2",
  "key7": "yiv6UBRB1R5SqDewrnkoUeJVWSduWV69nGAsU9wva1VBwLANKGLw78x711ipEVx8TPi4oijrJd8Tq7NhgWkdsLV",
  "key8": "2Z8FXNnoiSqEthLQDBjuLzrJj9EhqusRQ6aokmgp6AmJThVcJVdBBmyg9LBoET3kqhsh2KeVtSKwnCPGuUFvnehH",
  "key9": "46vYWgrhH53BtWBxbE43qnP4B6xX8Y9DGqdS3HQuZN7h7fpDuPuNKztLyix9voChMUWcVSJsAHKoqjbzqLoWCV4v",
  "key10": "2nPNXpXZ4XMikvbYAGByzKSj8QbExamFuhEhdsESaa9Tfz17fsTGuanzzFcq3YNQgfQP6AeRuTctbpbRj5HL3eim",
  "key11": "46WTaTaXEEThdaZbyfXRD1gZjsXAKqAysyJFwR8yqj7pUsVrrComsWWoT6jGZ5omdJa3KA8F9TCWEeuDBrUwDYCm",
  "key12": "5SJ59P81YDg7Kn9EA8hg4KR6xmJEx5wnvR7o1d2x7qqW8eL5dXWLVLWdatyNDiJnngZ2m1wAGPehaeyrEp6d1gJM",
  "key13": "3pAxtNwaam3KpL5NcorenYWiWsArdV4ELc5FcHGpgN8Nq4B9aAENyn1hqpYwwVXYKfUcewMb3caLF3wPtH1hUTaM",
  "key14": "4scPDdS92fvWYj3GPNnjRk8BtTvQ1wrNWN5iRsENf4RZneWJjhUPBkfmSHeLmUke2WagYnmkHLjxQtQHoiT3dfRL",
  "key15": "67buoC7M2YULmcTEaCxphZt6P54niYV2GUyiCXYUgShbAABH5h7o9bkYPqcjJ5k38fwgjsR2xnNBUNhjrCuiyaWb",
  "key16": "3SjTwEZhByZJAuVv2GaMJXAFwo9wZ7by6Qj2HE8EfDxn7kjB21zAtcJWZTNdvL8sEcRcb4zjxttyDyD9uTyfpDG1",
  "key17": "mkyWULycK5hzk9Xg5GgM2jkDV7Ymt71EqJB1sCN4AvmKZQzgMrn1KvppAZ5ydQbErjF7tMsef5bAZVvV49gHKNb",
  "key18": "3hNjVU4za5SThTBvNoRJFbLv1ueU1DWRmyYHuNCgpvuCamhw8SE9EM2gEFJQBgbk2cDcarcWBiEJusZiNagXynDX",
  "key19": "47FN8a5GxSD9TiEx8rppEujCMDtquDhhyHtzPdZjpgRWqx51QSpLq4RrPVJ4chw5FPACL9DFYjiiFbRjs9J4GogS",
  "key20": "53PfMA2qxk4n9j7YZbTDmADheJ5i1fpEofAC2UgtvcnsnYjBkaXkyReNP4EP44ESSAZHoBLhBg1HED7oZCnnojGh",
  "key21": "2DxXqTXcYpS8uNkhuGiXmGTdvnM1Lxhb7whrUapSi7wgLSBE97X9HnxZcTcDJDq21mNJxbn6h52nsEm4KnpEPrWx",
  "key22": "5TyM6mCC9wHCUqAfo8ChkmBgkeqCfQU1VLDCQAoFcbfGSThw2CwA4KgAJdQ29XLdmMd1xL1agYK7Zsus8bHbHbqf",
  "key23": "64owTFwve6XSV5BSFaFG4saFgEWMuuVKqdL6N2zbKfmy2o7uGZEYtNPJBRxUanyNFdHJ292BLrUG6TL4WxV3UtQD",
  "key24": "m9yagZiKWCNwkDkewcuqMgxwPkpdA4AyZVntYTm2kPe1hUfbtyiEVbuStijRVnqoRDfHQ68ZgVpvvuvrDNFicvS",
  "key25": "n4UgNEv2UbpQaYgmQnS9xJXM8Rij3ubRBYGacfoXb5Du9CSMZJMyiL6tdXWotTVVC6Bj8FVUaYrQEKJSXQgtTVG",
  "key26": "4q4RGvS2MyqqKhXEF2wGhDgHadCBHxJAXGicCMrk5HTZJ668tTXm9CySdwpAcfHeqJnsPcZVu7dCQpiPm6hQF3Gj",
  "key27": "5hWGrgKcxMovLXaQY9zZuHXqy7xprVwrcFTDvHpPVmxFf9ZSuUG2fNH7vhFS5V1VqCYV3GQRsHS1CsBhfYRN65FG",
  "key28": "6ZQWGzEFX8nFLN1YWbTkfVzpqB4LHdaNBPrbEJr3BhRQdjZxFAjAfyYR1G5E5NRUUmVuVxWCtg2SFNKNPJK7e3S",
  "key29": "5LioPw4x93pGgWUDYpk3HwWGkWGN5Mo4gq2Nb1VtwEpVU1H91yoVH7mEqZE8sSf7RMZg81WDa1TMf3r1FnEZgQEj",
  "key30": "4pXQrRHZwLknUipU4fjp914oFCt32KF4qK8UDb6rMSVUDRWwJJAdcFSK7WWdnJkrCfp4Me14pLEHNV3bbBVnVPuX"
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
