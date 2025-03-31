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
    "2ppH3pNmf1AeZCPHgH2QncYtfu6vfLkS3bXNvTjYJ8wTGMXqtWUk6vfbLGArmEwwKBfZ8D8ycr52e8i8rxjEPsnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZuvwiqWj5qtb1SMJJojPER1bqYNmUwmtV4pzaFV8DaQ3AYiRog4CzPYH9qFz3rnn7rv6fxDDb8aKomWEyecnMkZ",
  "key1": "iPAhta62AvqvwkBkoXJ4xGxKXBXCL6DRkWKb1pKR2VXxaqrvw7RgRvAtDmZHStpJmVDXUgeLBGRb6KQTwZhQ8Wm",
  "key2": "2RdY29cFzzXyk8Cq1okkXnxbcMcrmS2vUt3gWBENwKFmGuKcukbDnDpaXQ5d7eCdPGwDQU6QmFB4ygqV2Xggj2D1",
  "key3": "3J3L6sfrWSCNaJVqusXwG5cn2UKBpsWRHiN1PnB5uxfhg7aGgv7rLaRsrTPGYxyQpD7oM4TDQnqKVJMZXLaYg9T1",
  "key4": "5wpi1in3FoRj2qoSJ46sKAct7jpKVbJGEyg5QDFroEZvVoWg5QvFE7PQGsMPrWNa4N9uM77SragKuLFSgQig4Xw1",
  "key5": "2KZegaFGkx7cLKafL8kSByPZPJBVdcZTRHDhugi8skexcyR1caH5EBHY3fAh6SxGypRTehcuueSfPBB2r5FfZmNX",
  "key6": "2Jq1S2ajSBCA4LLbrCGCXaRSGJKTQ8kbNteiC9W4VRUy1xz48mxXnseTY4t1FTu2bwv8NUYXWVd1kLTCHFpqzAE8",
  "key7": "faoLX14PN3gG9eRhQHGBcx7SWSfZ5YRnN4Sb9kqAicjBEzRt2Aaqtj2ceSH628PBDfKRb2cAdmH3WN9nWuAztGw",
  "key8": "5iUQnwo4B7XyUAJLNnEmY5nsF2562vZBQComAe57S34TjT96r929t3m5ofqdeN6qTY2RCZC4MMe3GfRBuQxKfFQP",
  "key9": "4pVb9CLWLCFf3pL53faoim3pmQMjDdXHsUNhK3yzJz9rMWh1yL5sAyhoAsrFeRui7C1TXSZCTYoQh2tcrXciJS5d",
  "key10": "4f7B31EpEm6zAh3WT5WWydEStFNZcfYfZRdiA286UELzww3V9MjKTcHhtzCN5juQmBDDqhjAPMSYNVjwra8q33rF",
  "key11": "4TsvFrkAcSv9vkT38bjsNYDhospX9uNch3b9ew8cUQTcxrHLDEiP5bBK6qjNCLnjHwppXNR8jypA1jKszqhFTbjC",
  "key12": "2UVEtan16W3A9UyUpjcCj2V1LP4YoqvQFLntAmwqZxj3t3SqRuiM7TMUcLdyHk77M9EkCYngB26Rof3encjwHeSV",
  "key13": "5HexcwrSbVoETGYj4Ki4VmHMgNKBu1PLHQ2Z3yQnRsDesFTEDgfKUBXqj1rxmDtKPfAsZo8m7NLp3otz72jojuTj",
  "key14": "d2EDzAkzmJjxeYF7CW8CVJWyELUSFHiunbMX6k5vrqa7wfrrfqsAcgdNaNQYP8KNUHiL5wZThw7AR4nLd8ma5QP",
  "key15": "cF4wK5n6vJPHV4scDWFcBVFANdLo9EkkkCRs4hubi99TFz4wLnXfo8DqHCPA7vYUX2biVuZMP5Rb9gRZ61rWZLp",
  "key16": "3SVJpX4wPD5XMkpETHCmP9iTdpm4AwxoAWyqV54vFfRCYddLBvDc5adqeuzKW2yMejAtwBjMisnLpQHKLVXchtyN",
  "key17": "5sqFACg3x7cnAiZyu8G7iVyTE8F85DTLQ25pPSieMqYHoRbFkSbR9jBr9fY88gRsX5XFFnf8tSiT8pf7yRdPaH84",
  "key18": "2ZR2WhjTbXETt5aU8ecrxS558SNNLuwHZUf4QUiMLZ8dQd5EcsB9W53weAj26R9bxmJ5E31YSANCFFz31kQbJbxz",
  "key19": "2m2rraQeBFdSsKojhJaEzKR1Su9L7VB2jonooRBzxBUKzEbTxLnzxHWBjNTCkBWz2iR7ESVednULgRNovRbrUWNW",
  "key20": "2kgUrqwTmeAGDNEJP3NiEWjGjN2zB8RfCLb1Q6kcnbp91KxqKSRv1gXWyybg8DjcXtgYg3M2HqEZ7T2qJSytmfAY",
  "key21": "3M7W1kSU6HgnpAfJbHGG592qxpbDXo4UP23X9fCiiBFcaQiAWuHi6XFVVhqkz3tSKeC5ArmgyWxaBuiivLTCYaqK",
  "key22": "2LLhNfg25euQUBPszRUhKgQyEZjreZ3k4bwNRYJYMatufWinwShoN4j48cwCEz3RTa4Da3fRpRSPVdN2WEmngscw",
  "key23": "4SvHriETEGEoyhnMbcZsoBtckyXc66KtYk9LDXuBV1kiBgBPJTLE2EYubZFS96c77GWDwQwbywCWoMaP9513QRMJ",
  "key24": "o3NyWxgta1cZXd1AyKzYaV1yLw1bRc2eMWpkwmTYGwMEGoUeJmSWtM6PkR6RJhja8ty4E4RjvZxUJf537RjdVKM",
  "key25": "4L5428k1XXQmXwPSysrCU8RnP3aEqSgUoDRNv4Xiuco53jEztahahykLSyRheL8sirc8oh6SNuEdcED1r74EJDE6",
  "key26": "43U1EJJG18faw7DpQrHQCKKMZwLdDzBf3Jpbv3aTvS94GyR1kmbgcgowjfeo8hkLvcQ55q8bH1VJy2271azoWJcz"
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
