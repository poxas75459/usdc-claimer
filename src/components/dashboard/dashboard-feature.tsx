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
    "3Lf8Cv5RiuaLCHFXdsBNwkEdx2KeZdAKYwNTj9JfAhnRL87hrJRLpcYvUmU7xwZLWKNeG8ujJD4yL6UW8oT1rZvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XczZxAZz7G1zEacdMUes8m2ygC7z8o6F3Tzhwmt6t62dYrmFQDaVCWbi2jhQTgtnvBdJ88mXofJYyChf3qpT5jV",
  "key1": "2D8Y49YM1t5UNrf1FK4vNAmtWWZvtmsSqSifzGbwtXa6Y7STUA1GJm4E8JrvrZrTN1DxVjbUnGhywdTGeJShLw6f",
  "key2": "2CFkftMfgvPvxhYuzqgh6VCRNkvtnqdFKWAKBKZj9wN5y1WC4ncxzSTBNBWs2qbrb9B5xzciGtM6mEwjemV6sALm",
  "key3": "dGPFAHSLSdDcBxAkfh6YEaoVFRBHVonvx21XM9k57kyMznuCJdBbsciL2eKJxTmviXYuaDF44fSwZXKbxyMU2CJ",
  "key4": "4hrxSiervSJ9SZYtvFuzebYUPMnSNVtNK2fFTmPpgmmVHrtiXEyv56MDuTD3Uprcqknqzh1XdNpo7aPR5qmEXx4w",
  "key5": "3tppoiJYUXBdqN8ay6i5GquS4BHUYGeEP4rb1FGLGEkC3TNKgvLkoMmfuEKAeJniXv3fUTGLDMgBXF4BUoCoWEjN",
  "key6": "ghvTCNiv3kri7NE6braxdHkKfnYGDRgrQV4ofdtRxYdTNzpL831rrEiUgtgyXw88M2Cf9b3uEbgKfS8NMi4CwYF",
  "key7": "5aUgcerYVxPoheWK4XHcvDXuTccijswbnVXVpvbn6Dzmn3W8juWGHyrzv775ooADiNswqMEYrQ25mA1mMvkhuUUP",
  "key8": "2oiDgjaHbKW5d6C3bcH2ANrGrXD6ZGf6okw9EgyyTBFeE6uBSFD3AsuqkqVDSrfkXQgg9vrZPqt5RW4ZdpEDw9z6",
  "key9": "647BCKWNkmz4edURCtut1Yasf4Zioo5TMZhVvfxdMhcW5ifFv4hLMv5unUTh2Vs9j4VvCTtrMWmv9bNRobDbKyPy",
  "key10": "3zq6nx4RzRGTyh12fYGhKWSM531zPDZeXndcdxQaLhZHoFfx1EvGFw1ZRvPVDgsKbhF2KJ5uHa6VwwU4oGy4JAoX",
  "key11": "47S6DE3zvg8jXEpUTxsY5zPcMp7C4rwivyqRT7v7NDsZPbqiFK4rShui4vvaWJaYJkWNvmtWqiHhajv7b147oHZA",
  "key12": "38qTRfnGduSzE2Pypb8Po9pwtT5bTw2c1sEVb38KiUDxBvynPFcgNRe2uJJD4Gah27gS1n4x17BLoNC4RCPQnZA2",
  "key13": "EVW9usSJRu8Ey1ATTtR28kzPAr1QMyuLAuoRjyWaCYf51QRiN7Ty12DEBDBydnr8DPUYsqSNRMXAwy3hGDi9yZq",
  "key14": "2AZa3hoFtc3afmBw7GLqm4AGD3wToYPd4y8gJ97A7dQnhKgRDv8DGETbk719Nyda5tRvT2LzyuqKRV9i6Ch9fRYD",
  "key15": "5zvd9aUyzvbgFuDCAvGTv4US65u5tjiLeRFSSd52NSd2bUxC2EWbwJZtPbpbN1GKQmkpV4Hh5kvbLvuQEwnJ4Cyj",
  "key16": "WWY91h1FYUzmab2uJeX71dTUpYRVSeuC9czwN5Sj9k1oSz6CtCWUXYjoceZbDcWQEYMA5Z68bdrHjRpQXec8bX2",
  "key17": "2JdZnYECgGVgAuRS1hGkVxbWb6fgK3Hh35VJGyUDHTP8aWDH1ECabaw47kXfnY8xf2acZQThH65RWSrcr8x7ru2J",
  "key18": "5c45MdYuPN8NXixJyshGFiM6wyydfw9ZrbdUCfLPCkRSNFS25JQkn7Wo25cc6NAgyb1p3MSaHUt6MFHrUyjpdEjC",
  "key19": "2a8ayJ2SRJmjhh6k4kj4MZ5x1Q1DYcTS9V8t6LY21WVerYs3ykR4kKthB2arkvN13LxZ1urrh5Ngh3yt2tdLEh2q",
  "key20": "4c3C6449JhqHj3x7dNcP1JJeiZt2HVbCffeyta1gJyDnBj91ioM16EZAvcnLigCx8cGZYJLV4SdArYfjmFw5Dkcx",
  "key21": "aUuWV3aLmQNhbrixDMCUMMnaBoYHcSiaCRa9GhdbhxpQHHrMJygfoafPq3cEqgUD4Fc6YPvAS99zc5iH1C5pPxx",
  "key22": "5NAfTqWmZvDRKKYKd4WqnJeGGhnguC7mDZ4ywbtAxX2KoYQzKWE8YQ1Cm8C5nxZ2qEoC9tTQzM8waboEza4GQr7o",
  "key23": "2LTXeVKZh2bJzkJoKFMPyCqzXok1NKn2iMGUy1wX8axCX2XX8HqyevMT6tMJcktuGscUyRAReHqdp4ZvNvTTvNHn",
  "key24": "4P58w2aVNSejUjhRQoN759hcC8z9pKDJBRdcDidMkRJefEH9U9rQYcKDcepweCXqmssnHQ9QTnqKMjmJKKAerKS6",
  "key25": "9jWZJ3DLDND2oBXimQy3CekXVbSuygEzGt4M1w7ZBn4xArSzbTMRFJYBC6tXPUXzhAqAYyor1G5UmDiXcggaqCC",
  "key26": "45C3x8t33Lig9SvUuMEVbpjnfHNdBQL9nHSJvRjqfDZX2Ctgm3GKK6EhN8FQ4qjBN8Np1YLQkxN7XnhF9yyDfE1i",
  "key27": "XVVZvLvCDwwJqW2CfhykVg5TaTSzTp5iidEb1uueCrvRkGiLeUDGLst8SGgdMsNJGD9wPLs4bqFGjigrueJYfzc"
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
