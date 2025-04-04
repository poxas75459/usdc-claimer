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
    "2ja99tjEtkwt3brXfczbU3jdCtkZoWLg4wnptzeGyqfoSero2ehzZZih92Xt6JcSG3otT36uzyEJssQG4UPmWxda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gMEjpY3zp2EvYHVc9zoUHNj1auTaHcMvMzQY2GoLqxbJNdGbAcwN3zLkoQHr5HQVrGESAsrWDV6sfxc2LmFCp6T",
  "key1": "42eK5ii6s3ixm5hC8nQxo5cnp23m1bT5e4DfWKdradZbmKTwf5nMBEmJ6UW1MbLkt4pGTCeYAowAhEBNindewkhA",
  "key2": "dV5MZv2d931eMnwumuvStFm6kB1FioCzK5cL7UBBPBEAjtTwuXZicDug6xjRJG7T1FMQLVybV4FrLDKomPHdo8Z",
  "key3": "4NQGuF1ro5g8Jb4V121KdxEtvoHRLvERa5NKX2zmuooVxBeMuAeDTm7UCXtSBAw5GEqxzxRUiFkJPMfYvcf39stc",
  "key4": "4P6Wj4ZYBfidRqeajGHH6toc2ifL8qFA4yvWBCe1Y4cnemkAC5JKTbzAxAwWKgnRu44gTXi6XEo3FLroYGt6d488",
  "key5": "fJRfoyR8i2XqA1qfuk5dA5pkbFT5YriPyg1wXXJsBxy4ambAh9m8s1ebktzio7dZcdvBxcqVsaHdHT82ZqxkMmG",
  "key6": "3MqEEdtTGG5n5dqo5kyLjLYTchLjh8qhGx4N31U1ns1zeyQh6hZ5omreayffhFWPfgakX3rtJSDdVJCyCGHeAdpt",
  "key7": "4w1FN6XwkTZx8GHejnxezdjX59q3bSKtYP2NDfEXCazxUCoVZgGVXLkEbuVBuUSqNoCroubTiyyG3xvpm4sruUoG",
  "key8": "2nqe8BNNy6rPFXAVrCXaHycX6ZqyLvV88fiBVuBosa67LzNNFSUhUxF2moErJ832Pc8RHNHbHgZABa81wyqWRV34",
  "key9": "35zMA9NHoutpS32rAdFS5tyTxS71hLERZbvBmu2rRM94m4yHGcjSyRBXEBpVwTQLdAoYfMDkdmsd3D186mQFnKmJ",
  "key10": "FNhSvHbzSZZh7BAQLqqTZ9V737HjaVsQafdsn7KqqskDgQa5v2iRavmkmD3pwU21Z9u4iXxUc7Gc3TjdwRFUEM8",
  "key11": "5K6wtbcNsCt24zzcaPtN83fVb33gma3XWdH2q3PfYwwvSEv4oSR2Vert4S7jMc9SeKLL9prWyMcuCepSX4VBSvft",
  "key12": "2n3aRJ6uF8tcPv3qK6W2FsPnpKz5hX2Z9khE8nmr1UYuRHmhziRZzL1bksSjKqzpfmtzbpUQMvpM7J9tMW6771Zm",
  "key13": "4bBjtxwCKCFcXQDYetGGncsPdfMSnZjNzeLhFzKyJ5EujSwzvp3LmD1hCGdLXn8nVTiK2sFBDXLj2Ur5u99Bbb6d",
  "key14": "ffBnGfEMVhAVXY62BdxpDDUbshjSAJnwFTMRGKJoofnJR7NdhJMP2YNp5YaWtU6KVcukgMzgXRsHRK1jufm7Run",
  "key15": "4ofPSxg323ZthKZdyo1iCtkU5Pk7vFpLVskmFfXc1LRdorqvEKS8qDnWewyiZuHVM7biv7kpGsmbyMyrh4ApxNxF",
  "key16": "HddkoUPuhSWuGadyHESmrcEogwYU5o4VMNQYJUC5cFyY61AqVHiwBuBQDhwHyYUmj4WwUoEVNCbDvU35qm123mx",
  "key17": "4daXcXfChT3nopjY8agPiEMp4HsFpEMTFDWH3cFKsdUTv4QT9EKyUqnQvRKLmYuWb4f9xT2G6HrTVYWM4exsDqzK",
  "key18": "572yRwfEVLxJyeCQ1XGUVKSpXiHzM5EjRaybQBHcMM4M5o1SmK4QTxLH7V2gRSUWknga324osr8D3s5t5UQCgCmz",
  "key19": "BnTuBMRfd68ohRMU5j4cguVp4NU4hPE17K1NxwVwoevMpLuN1K5CRRQb3gSLqTk17xFwop9B7oYPrnXaKhBvbLj",
  "key20": "4LQZW9JJ4abqZzMErM3jwMY3jhNoRYzxUrGw5ffSVpth3QtNCaPpM6PmKKUEijaRtfKoJaDdnj6YNqtWSJJGtaFe",
  "key21": "3Gx2KhM8QRKjyYXVGqenfREyWwVfcX94qPJiQ1AQ7HqQnLVDSadAnEYgCjWCyJnUbZM3EW433Hvt7nguYAjkC7wQ",
  "key22": "53ki9iumWxWTgeivbAmSHVG9e7tQ7mEgwyswxF75MdMiUXiaMo5mBifxhQa5BfYSwAY3fryoNRzgKyd12J94WeRn",
  "key23": "5Hvv1TRGKHDBVSGtTiKRbKctvVGiGy2PcdQWw7qhne7v2aupFBowVV1eWdP6pqXnGoDkD39vmSSLyKA5W6ztx7kp",
  "key24": "2vJaUdCLfSdzduVXvXsuEzf34ZPzpRE6AyjyokvvgGjKXrzfh4QE9ZESV4cc2akAy9xY2BuWf8Aa7RLvsHEf2mw2",
  "key25": "2UbMTMxuovM66xdQB8x2CGoKmzNrGjmiufdB3tsX6sQYnJxjgTRSrho8cEikkbYRCUyn8u3ErrZw93GBbqDPexZY",
  "key26": "s8GbivcjmANLvEkVLZhbJxtpCkfdFTQxqPH32nrXNUfa5CpkgbMT4FuWXeyESJVtr7VhazV3DRFSZMJHSFw8Y5L",
  "key27": "4DZFgRJ1RWBuFKEWjikfJ9sNgTEKtCPsskLZBBVXcRroxHEw5WJRrhGSa2C47sjRNfWmNVRiwBrVuvgvV7x8mH4y"
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
