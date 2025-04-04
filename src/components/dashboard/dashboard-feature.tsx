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
    "4TcYrCLENmDM92fhdm12zaGsjqiq1hi9HNs3P3LcUcufd49SpuxVnLx4UKr6MMqJeMbvyRdkUPbNywM9aGXpoXRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FhLSsGCXdfTsmT693jDBMT1twjE3K72Wed4ESzBt7H6KvgqwSaJ3wKxHF7T3zx5qLupw454W8KTJA8BwTee1HKU",
  "key1": "5C29D5fBVK9sLWVJ6jv8UoeBKVkXrBfo1vryCHjdeJTs9Let3CKnaYia9ByJMapdVXQN12ugRWTJD1Cehg9Kypjj",
  "key2": "35xrutWrv8ppMkfP82wGZswAHw776uc1UaEPCHip6eu1txetmSspmwgwVN9m7tkzjZVYH5sjVfiuAssYPUZE4p77",
  "key3": "2i3fY53GQJXhzRHKBsvXXEgxmoVyLM45hTJy1TmoxJM9zi9ZUN5WdNcfVsi3RBWWgm3LFfVwjADXrxXFkMitc1XN",
  "key4": "4Mcx4qBYYUFm2c759jS2eHUwLQpXyD4QmduYUybn3APyuvQAmpVyxtt1DPyNdwHUTbK6vQD6B1FByGE5j8iLAEPn",
  "key5": "4D7Ki4Qi6o1MfKbFYeG9AWVcarog3Mgmifoe9uwKJQbzXFqmA5Eik4chqNLHbKVK18qcnNVEeNt6wWntGaNsUPuv",
  "key6": "h6iG8p637SJ8Lvfx7ZkTv8WDUw2pTcdKBWi8Q4n2XMQYtU5knuDBCgvTDcwnxQGJWYCnezU2oekHcEEN83xQkdF",
  "key7": "3YaiJ2KqzB1Qk7J43DVgai6Ky5mPLEE2JhSYdPV918LqwUtf1nzM8YuxKSN5y2bKvYkfykusFjXFq6zff6hfBe4p",
  "key8": "3cdB98DESsz3FzyD6p37ADGPnkpCtkEM3vmmEwkqsMsJxjXsWbgc6QJ1obR9oEMKTjwdH6L23yMneJ4MbShS5RD5",
  "key9": "2oMELnj2Tex8q7cUhXB5RKpk9RSz2iUbvMjQzD219GiaqbXTbUHQmpVL1tRTJ1FYd6wQkw19J7d5ZLNJHkZa1ktu",
  "key10": "4rJ8vy4CworkD69g1Evw6SNZM2dU4nkHUXiYr2knJ4oWjMV3oiN7a67c4vLeRCPWeeAJbMQ3wSfnEjEB3RMn8hmU",
  "key11": "4jbLHFEHWunwy2wbZmzH6R9zqjNKHtnGfp6WXzyaYGGsAyQU1XDBd4G7qoqaMBas5UqT3GRLiHgRB2bs1Sa5vqHd",
  "key12": "2LKNxD2Vanas5oSutodV2kgQ8MQCTTfAy8mZ6fpDxiQdJTFkSFZSs6ZkQhzLie7pNTxoioymi7DgqFMVfRpkjeT",
  "key13": "34vDth6H4yreQXz7hojSxGxpcvLqNhCMe23Xcht75PtzQny6EmJGBQQMW4XFBLZS8EpstZKV2nbsdEDfewZ5rdGu",
  "key14": "3QuRsJCPRCSmsBYVL4jzpDxpT4Mtwx3GNUEcvRyM6xamihGW9cJsyjXuLEsGTRK4DmuP1PZAx49oMxi1pe7hYoia",
  "key15": "RQPS8RhmvMLJmfdnjd8L8uGaSmggFNpWtxpYN9J6RKYbySLKdyUjStnhWkUoGaQLUvZZkfWr87t4kKcXMa7UBEb",
  "key16": "eKGbDzenuuDbYfciMo62PTh3ui5ss3SZp8PKbNA77Q3KmDC5VacEsW5Pya8yGG53x961F8WJFx43T8b9FKxYsJp",
  "key17": "R8cJrU1eyWSHPt8FtJAQrsaVtYieJwCzLAdwtMtukePHHVE8Nyt2vaPCQ2Hnus32M1eZkn74smqzM3FqmodWjit",
  "key18": "4hiGHUBmMfHPzRWZBW7MmCoM4Yb2qynbDYdvwYnfzPcSX36seRLDJtgEoyJVW9cdrisVCjqcU7vXYDB2azNSq6AM",
  "key19": "4wbgES8dsuHDab9YDHocuRTL5iZyF9xdYm4XnTKUonvDaJ8D1jTY5NDUhidXwmFJr5cnEta9MxRmq9pRtDc1asgh",
  "key20": "3SzA6JnUxyvcp95bFXX4mrczWb5G6za36ZuqWShiAL5iRsWw9xyQzQuRor1EjUHXHpfTSqAyvEWw7TfKNcT3T7RM",
  "key21": "2spMtJdidSjB8z8bKXCAsh4yVBBTHeZBiSGcduZ3PcuQn2tnTLVSkPLyJP8m7i6zyfRvev3ai3QCAhujvCGuc751",
  "key22": "2mHTveSa9NokFzkM5TF5t9xWojtF5aZGzq2GVaNnRLpUBowm7mMSE2zpiZoXPLmkKH7zsbd43XSwYW3DjR49rzbP",
  "key23": "4CPJQ1nQeCQG2niMXbxk5Ty2vKfHXrYCio4Ds2foMgBzq5cWzc7HMagHAm1dNLM7XqVCiMPbJcn6415NtQxy4dxy",
  "key24": "5iGjs3xiDMS2rWBDdQoERwhnb8tZmiwwkoPVe6tYsnCoCxunoRAhKMtbwfMVH6CbNXmc1mLcJFimLKMMqMEcNrWH",
  "key25": "3FpweVHE8WPUsiaf6RaA1zpuBmkn6NoLUK7Eq3adSHV7kTvMbeBTd7QKUJcSMNgigeckYqQbMru8QrmXCfM2CCj1",
  "key26": "2VoEcR2sBUtWd89aryWejgttTfcW3i76fbe9sFrPzfUDvXyQG4Nn45PYKsyacc1F6nwnWc3t8dgfkMC8eWLNmJxF",
  "key27": "FP9KPKX8BCpCLDr1uzH775j5ZtZPFF9HdkW97zT2R8sQygasd32XbXju9YtzT9zM7Dvkn5MhPmofQzaHdaUsBSn",
  "key28": "4XJVwYgpMn538yX3n7X1kkdRkBfX4YCX83UhEFjRw6LZWC27Cf3bVWThTaji5DChLDGGU1oyx6Xix2YmmvCzov5t"
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
