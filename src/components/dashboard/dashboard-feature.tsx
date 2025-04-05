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
    "3sUz6bjv1JC17ehzfDrSreSHHocBYyUivACcbtB82ceBawQp7TSqCYYJ9cXvD7c4ToGR21c8JYi8fRyNLiQneVh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SiTUtpikfKxTcscv5iF54jZwyZtiCZtoGkg6W1WE5WkoUSNE4uNwKNApbueAUeLENzyUWS5XHimqdatoDUnSTjc",
  "key1": "2Ltiv4vc6GqJs6iYPQ72BANwTDjmF65ewTXnzYVmd8rmNJybSifAoyFDyAicPjg94pX7Qsv6m1DEwVXX7F6Sgs4r",
  "key2": "5Z6bGyEckU4PKFGrDgZKAHbqLARphSGUSpYv9tWJzw523jTwHim4ea8KZdMTZWKYyXzejKYKjzYSDyULLoX9Te2f",
  "key3": "5J1R4pGBKPWjgfCqaD5eD5qdRGbtwYkAHoAyDvDJgmtAZ5c9R4mMxTJkzkAWxSWPg5dtteLkGBhRqwVVTLQrzqBW",
  "key4": "63zWaPvBLJr7oamzYY8bV41hDUPKZ9CHnd7DebDdJwtmzzY2qSHBoJQ3X9bmLvQGUF9BF2F2xGRqME7AjkRmBAG2",
  "key5": "4aE47fh7gHH3LLGKRyrWKmXGxoSWFvys78Hsuny1DuuXa7DnFmsDT8zSyWF9Aq2DkrMQbmfPJSUWpkcoFfNC5Jmi",
  "key6": "4rAwsqnHFW4w4G2bn6vENbHVo1VVARUApqE1wRaYgpSZnTLakbFhN1pninV9PjbyYi6NJhJ22iFrHG2Z6uw9jV4D",
  "key7": "2mkcBzFMqjppQFhaEzLpPY9uh6Ufy2riB6mDLLTEE4pKGE9eNEuDofCid7oxQBdX14NTjMMy5yZ7TPQFCZot22kR",
  "key8": "31sbzBqTqDPhXWFMZskBoSw4SHkgWRdYWWmTJFNZmEZkFmKvXujP7JKKvhCgdd97fKgPmXNBpLuzi5yaTZVfv6zQ",
  "key9": "RxSwDF2NLnGegNfnuQZX9cdufcg4RcazVDBxgEtNin4LsY3UzXKVCH1ko4T7YTHdgAwiVZJpuFsxP9yQ65a9pMs",
  "key10": "3RqU2aWCiyjtyCZxX7PU2GZYXSZVUHs8coxe3KFrXyDtvpgmFiKQUa7M9Hb17uFcuQWbffRrC3W8ydrZVHEiZ642",
  "key11": "5ZQEgYAaZ12Gazh4kwBEUkpJPQcuae8numNbrKBc5KiqiHzpgncKcAbjd7EHmzd179BCaXDwTaDLp4w9T7B6Nj5K",
  "key12": "2attaaoqojb3AGA9E7iwkQ8X8TgXTzTAwMEjX1rcnUAPmG3isii4m4Y7DBKwJdFTx8UvLZ2HqEQvLioCviMpsPJ5",
  "key13": "25oF9hMGZb9eCmwmphTsPNBLK34to162L3Lonk8GMsur9RGGJm9VmNoNYpoCDoLnwkR5kkV8aNDLoCzmmy7FbC2T",
  "key14": "JnU8gEvwZ1BddGJVhBXmHuyCWnojiKXXnyraQudrx17Ua94yw8pABxqsDwtYQSv5hoCCNHkYJ9Kt9ayjDib3K1F",
  "key15": "2Ew7AosZhbKSpaCmdfkvBRQcsdPaBuP7nj3dLMysJNTkrHiWozvSqnYY2REZxvBJq5wvrLACmu25itZYeVctubtL",
  "key16": "65uX8twcbGQ9XnZE9esGfLu3Z8onu9VTDdvYae27LeMXpiqka2vXx3GSRvWwsmuyAJh1v3miCayH5wFFAF5Hpnad",
  "key17": "2x5sn8RZwiMNvSEpkb5CZKLkfhR5ZATgqU68rMDjUPHcPdnJEgAdnGr2Aww8hS2G7Z4DnoKW6pZBvWHqtN44xNvw",
  "key18": "4ADUFy7xG3yYmxNwGvkXfZkrKQj8qvzaUNjkGJPWaCGfwGNBtjRfYrH7kQvDi6bGENo7JJWwyGzy5SQ2M7Vatars",
  "key19": "45rSJHmxBSpQk1PMurehu9MH9hPzaHBVFFPgW3c57F8LSsgL52SW3ACCWQWCr9ReWk9gdG9puTKgSK2uj5xPKYh1",
  "key20": "4CphCHppWhozgBkpyeC1tcvNKmsK2mAu4uYovyb6yziwPzVh3sAEKqEZpfi3fbrC32gGd6zkKVvxmiqFwZmsb8S3",
  "key21": "5HWXPvraXa1J71MVpdEz4ZoyDAyLpsy4vWFZNeEiN63BFBsXmeAc3LSbxkF9CMh6nLnPF7pSwKc1CyVxrscZtB2g",
  "key22": "52U6Jt6EpUs6iLAi6EQUse9qLPAUPizUfU3io9xNH5xGK72uK85SVopWu14cgtcFTB67vbvn1nq61NALH7wKMsd8",
  "key23": "3DzkcVmGsbt26xyhfGPhfvMETK5GxgHUTRpXSLzdJwfXAV8p6VESFnNx6adqrC3udHDtyAdmo5hai5MJs2ATFX7A",
  "key24": "5u8fYweqGjDYUBXQmhUW5N2XGpWk5mUwGQtGZnF5qr7j3p44UJnEKFhV3SMbTK689FgtmKfYeq4YoVF8ZUr2VpUB",
  "key25": "4AvJABfcNwNf1MDCCZrAYxxSDuhcELptcy2WSQJXgAgTRdzPUW2HU6RwhMFVxC49LKPtw3SgFsXhUDLg76UWJncE",
  "key26": "5NuMickREYhnYVW2YGpPDqAPfdXLqgqo9Pgcwm3bLXC4PeQBp3H85RgXyybyXjhCkUXqJGzjQnYGzuRjjAEUydrm",
  "key27": "SoajhbrtRsQCkMbvRnaEsAyMLUVrpbn8Ae8Wg4Cjidcu6shnMqX381mkxaafWuCwdPX9K9Mv6RS6c2TG2SKhhNw",
  "key28": "4xWgcSf8ZpKwwGZjZBYryCTnUJdGxnFdUfbWaPnQTa5jEr6MGSQpE6UfugRB7axAD7MJ9EtMPZPJv3xeZ2bmECf7",
  "key29": "UNhU3uQbu7omSYAS5ZCEWdJ26QUz9dMSpeLqUi5ApUQrTPcXur7LceSaHtPK4A6GB1SDMk2sNdxvWVA4kbybusx",
  "key30": "4kUBUFxWMaeSMnLZHDbAcdwJSCfrkHGxChVoYSAuBxdRPfTJPPZVDCQoDbyNATDw1b8ZbNamvFqZFq2pC1DPTVgJ"
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
