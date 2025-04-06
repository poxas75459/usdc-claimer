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
    "549nXyJgJr6PfQNBXwaU8y4oYTVZ5ySL8V8R3LSHJQ65DRe4fiCH9ARrVsjFdY1DknE2xBoSqnGcY7RU4m2x9veR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61v7q3fqXxQDfwUeUN8NpG3knmqfMgEMZ5QeSXVir76uaRVHb5MtsdFFhVFA8JR4sRiXeBScPhvpG95fLAvBhQev",
  "key1": "3FXDtKcJ5B1wnU2wycZokGhsvd49i8UiQAjWBaLq4PHfH4VPiZYh8UDRM32HSSxJDcWV4CKBhW2Yro9ASgJ1kWoi",
  "key2": "4GwHKMEyNfRFMtf7daFhFGjX2Xj17VXB23K6xRPHTfmySLoVa8ZvLRXnxNhrirrsARBduvwAsyTiwT5PYbkfBuxe",
  "key3": "oy7Xp4dhN3owf3TU7V98JNYnWzgkgNdxu4mdH9J26FAWBdDHimmzYQ2ZigWuWd7nZAPnN12WvySKKC2sPA3KJnZ",
  "key4": "3acaqYzxDrxz16prsFy31KCKWgBivEXneMDvG8SWTKdDuKLf5wZZzuFo1CVvXeVcodBohBzY1GsVWvJ4P83UsF9b",
  "key5": "3iLprdCPZX2L9DH7rkDQdLo3pWxfKNsSyEsR47DpPXzYjnvkDj6ZzZaTxyVH9QXx4bVtnjqb1FcoKzuAXGw9y3m1",
  "key6": "33sLrLVdYwvKXyR74RoGsu31XZvH2t6TK41XGJmeXbG6WjfsBSKFxQQwM1vAXFf8BiBhS3d2W8jNiB5hwd7yDSjr",
  "key7": "jZLFvNYhz968mg8r6APDwdt9dGBW4CHpFZu2ayP1oxutY11ZRKaMdU3mrQPWs8CxDcyGD4DNRAKPvHBUvLYXXVw",
  "key8": "3UAT3yS3eiWoQrzZhLk4NzXV255yTHkpkqDLN7y56faX628fvMYMcYVRfxRknFtPnfts7r5uqxjBXJKRHAQfHiUd",
  "key9": "2sv1TjLKPmead8Qjr28edRNVkfuxFrsAVzHtvBtL21vKngRSVnZJZ4wbiGhim5gFk9RZTurxs9dKLrTTSYdTHrNY",
  "key10": "3LRtMrwEKgFaaeCmMfDLzaT8wkh6ncfFeduraSr69qQVYxxp42sLGUhZ7pksHoWBFwQ3KGpqgz6bzvZYxGXundBf",
  "key11": "3qTb7m3QYe6W7iYWqZ1EUN6UEedEAq64KRzg1x5uFZA1osGKjoVizS9CoaqXAoGVWrFgSDXEFyhuKemPiBz9kh1Z",
  "key12": "5WMs5ya2DUMwBooLtbnL1gfib79mKtFbzgeqGQhC8kHv5dBeQeaUXwpamCfVdp8X2p1ALTjAZWaaoaxdj1o8rRCs",
  "key13": "ZDiJV8csYnBgALMQZAAnR5ieNqFrHmikCWTHFoJGNW7MLmkky9Af1WwV6G3hgJmfCbMp68HHTNvk8fMkoGrfKLU",
  "key14": "f1t9TYnCREVv71A6dM1WGT7M1GCrf3V1mcS3y9byic133diGZ9r9iyBcMB3EB8tiamW2Vg8Wf7aGj7efWCN1bfN",
  "key15": "41UyMsXBdva7En8sJcyqeXAWpWTV2rCrzeaBbPArSuFkNfXJAXKmCxrYYXyBByLD42Bv2Ai1wwQEvLSS4hsWydvi",
  "key16": "cs4TPSRvALM6W21e17Xpzn361FPTsWaeYEdFe5uVAC9XVRmwgGWRwZBhtv7osoZiP6kQJh6rtzGEaw5a2XeVs9U",
  "key17": "2tpSqmyVh3Ace5T9vovuYgVWFjz4wWmsJuJBWmwGM4Wt2VyU9UfvxTrcjLaaVaramzLxz18mraHj7WPK4RS3WgHb",
  "key18": "43VB1hCPDYWTM1rbDPR4mLknDrntX8ZCCcVjyZhrTQTmhv9cPVq83Ky9tR3z62vTCp4wb3gYCE6FUxeLVwaa1BAu",
  "key19": "2biTmcMc9vjsfjZQjckAewKg7oJJ5zDbqvpaMQNjKji1uSEezZ3ef2y6WjPijKSCnWC1rJPniDV97jgpDcWyNtu6",
  "key20": "2oxLuGhA5scpCgLRecmrST8aiG15kbsk6TjSGdBoSzxxsdBWySrGwcDwJgz4AdtsVL5rkAgd7UUSHH2jeYxo4QBQ",
  "key21": "LokoEL72opRwByPMsfzbXMviRvjkrdu47pxz9iMUH6RvCnmHqD15B9hUxf951FrB2o2Yf3CTrSpmH54oacxbUFM",
  "key22": "3UYLkTMLzWAcFNzRJTwex93tQFhTxuTWNCh3CcSiCZZJEvWGLowpyjScoijC8qt9dtJJu8LyBHJivhkdmVXTXKam",
  "key23": "pL59gZwfA3cKMuqQ5WaLxp742DmoaKkHsopYCkwQdpy8G2jVVcL5nW78VondrZU8Xe1grGV7R99xyRpgwMWVZuA",
  "key24": "3rbSEQdpoo49TTUMdmx9ncrEykBiJL7ai6fyHXAtPqpCaNzjwm3DUdLziawnjCbb1gYuwB1fFYPxPKEDzgHrfbgf"
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
