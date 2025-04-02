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
    "5HW4fLeX1VVR4KGZRVpcK9rM69Manm8QPkCRcJadFCSk75fVTarce963y9TQV7qgAYke8dJ4izNVdw7kR7qFxCvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mrb6TUcRF7oUD6nWYzE4ivv1KPa9hYbd2aGQrPy322JwgnW9rqKhxCfcFYaWaTTvPy3x9LxSxkodGrAd1uS1FE",
  "key1": "3m77dDKUS6hDSZzXfh3grqVvkcKnGGYs6u935N1eMbeEm76NNvLUpXhaJriLWykuj7NQ5d9fx8zRVR2j2G4bvM8c",
  "key2": "3h7VNzGtd6a7ftQNqbDqjvnHgtuaNcmNtuwmbTvfSeEancuYrDdxvtSDjRrQ1xvoDuGdMkeP6RkgDqSa7bj41d7p",
  "key3": "2sBPJ9GnwUV3i81NytBxC8e2crdMVJdGy2PLn2UzvuNircmJ2dGb24rtt1gKTN7Wq57NFxT2siZnZGCqCWbH1aM1",
  "key4": "65dKv6VNZAror3u6As5bPB2N1fg8L477c6Z1w7Wk98bWUYBa66Tdy4shr2Pkr35YgCSLeCcBKrd15XQiicKUHJP8",
  "key5": "3988Xitt5try6yeYppu2hEfuZ4iwYe2jjvdwqTwS1WxxMkrJk8FihjpRSedP3nBrPYSGnXR5EsLbzxDLP1Y9oeHa",
  "key6": "Es4oBe1m7eKMjJu2aNXC8YyoPi93s3rz3Hazt7TFG5bqccwrZA8ismEijEBuJKdYLxEbiAfM8U6vLXArQLj1sTG",
  "key7": "4L6ZifpcwVum2zwaHAakYJyK22EfhSac7F2v4ghLD5wFCGqrm39vV21tGxSBMkEtFmRucg19awQxBcg3L1FL4iNF",
  "key8": "rn5GGoodjY5qcnsrqXCeX3PMvhU64HhT7S8pP2nXH3UcrrzC6MAqbV5xwKjfMcRuYPNtkRecYGMSeBKhWJxfr8k",
  "key9": "Z7qmPuCkimx5MUnDcP5YVsmANxsg13XAZMkLsFuwVCbVH4xLrGJZJJUmHfUuZVdfBKqYcd8w5pa9Pow63Q7chSu",
  "key10": "5njk8gsTv2Le5hdFvm2V21pcFMpCgbAgHwTVUS93H66MfhmD7mWkvBuFJi3jjX7MJ2J1ErKtvk7dr9pDkTGH4EUh",
  "key11": "4bRtJfrkCWw2PcJ3CzcQoy4fNvyriRan8mp6Lu4uzyqvUNKQLD48ct8H42GEDWgd6cq931RqzdwfWNftA5Hk6zct",
  "key12": "3bFu1UURyN5kqsrdh8SUAfTiM7zdxwoiQV8gWuMHtZdjhbcMZW1rWQmhALXzrJBEGPdUrgtV2yFdxipYafCU99vp",
  "key13": "5gdRQzUmsEjDatmXdBkK9qdFvj7T2ZHwqP4az8SXENFaxDs4t6XRP1V7X4Kho4GnCiQt5vNEsAAWoNA3ynJNwhLP",
  "key14": "akEVi6LJfDdceLVNybJebVVS5zC7duMUBRpK7WCZpRpNeeL37PZXy19QQ5ztbZjnUGzKBTfiYKb6U7fWV3z1ZHW",
  "key15": "4AV9nQBi3FRVBJvPvYBQgWp1nrRwJcMmn5Y8fT2CAZfVSuP8PZevJTXFSJZxoAzA4TQZrABtMEx78kAh4AvrstFb",
  "key16": "5LZQ8t3m4HHpgBxSXZrt7DFFJFFGCtBr4BJ7UDxBysatyX2Hsgmr1cLrgq6Cgxj9ZzeirXLrM9aNQ9VzmEwBUU28",
  "key17": "2XVPV3drsKDBLryMLFSDsHn4WuqfDmURgw2yacAJnKdCtYT4uFSKZrF5GQHkLx17SWotprUPGZyuSsfofrHy34U8",
  "key18": "QAEv7wf3cX67jjsNozNmqGWa9THvuT6hmTSnzp3tDKJX69TLFiH8g9nUQQV38UMbZhoSrg285grppkKoaB15w8X",
  "key19": "4x5CGfHnQUCbzacVFDPztAyYvzXsk6P62ER9CVRgYGjj1usL2A4pVumqpuocToVDeEfhDTcPmwZCaKbzPTMZbvxA",
  "key20": "ucanJuGvHrybnLPZjWySNjKWhs3xq2GAhmypPyKQtbJFh4wfzjHpg1wEv6AiYRCfjXAdnLJeTrJpFc1R1PbwhjX",
  "key21": "2Cv576GskTLCThNZuWuRxbndZdNBoBMhrQFzpy34x5myBcaWS6hLxaXRZUkv4iYeBQUQ8WSLm681z8zifmPx1eMU",
  "key22": "3jAdbtiWnWhLapDhMxNSW2icogp6NkQTrWGGtEteCsNBkedtq2i9cYmaXNf3HkVu5nuopDX38BfifH7xCip9hApe",
  "key23": "4CHUophvKYmMtQ6FQBSiteyDe5D9GxtKwJ6VfdhJPzL13n3ZeYBgKVqxWAuFD11cJVoqnMtH8BywTdjaLNBydDCp",
  "key24": "4gfZgX9B9Q1PD9iXh2hiWgxDQ31kFhoU2kPtWLNhjt3ibraRQMqufxnjvWgQ1wVg4sEGqh4GGE8xMievJuZ56Awu"
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
