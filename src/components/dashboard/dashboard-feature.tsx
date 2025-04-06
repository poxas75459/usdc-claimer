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
    "2rsQdCbo4ScYfRveunE5stz1jxnt9nZ3P4QUFkAGdktQEobad7L4XCv23snhgsMDkzriP3dvBV4Hfd2ppMZWmYQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bpz59Xua4DdLd4c7dtUcyEEkFDJSb8vBayHYJiKrrXAPTf8BY8NCFDRqUTSYFAF4hpL15S8NNCBkirnWQkFEsf",
  "key1": "3VGZmsGGHyCa1SnueRBtCuB92CtkCrwBDNor2vLUm8rU3GXYjDfrCP4Y9ebXhFyKBsXr7ANsDietP8AnMLWyZ5J4",
  "key2": "2DodW4a5HisakSW9LSZ1CXufmP9ot32gqG5VBVTemoM7JaoPDtTYGKWKa1HKQNbsxV13o95WP3rpW4JaJz7xSiBC",
  "key3": "F8zDF8sB3n7EVGUB1czDMJUsKiJJf9uH4Fw1FkFqhu6jbk7PZTtjrMTjpWSQzjedj7r5hopkhrtTuL9KYyMYN2d",
  "key4": "5SqbcLd59n8oyKSbxaL5xZ3eLzNXLcpe731L91SMzeU5PFvvh7s3dzm1yXodbLEyn9mVKCVetqHaLuMTwYCRtvEd",
  "key5": "5Gr2DG4yHqDWv9SKTjzJ6LNqg8Ly95pYB44VKeMAef4oawxMN5K7sKNFeUuf5zfLNffr4nv18m6McnRK5mjrRNtT",
  "key6": "aCjT3ni889Z41PEfXbpUF9GWPEsaujUqfSh4qdkPJoSrBsNy7Zyq5xgJcitRpMKoc6yDnvMowaNCz2vbcv89tKd",
  "key7": "3sR5zDfaS1gYNnBHJgPCiWCjqLADpmJxvi5hxPnBuo6Dta3kzYPqtMLMai7yo2CCHBPRUDQSWeNLJtMAdjBaQ7zw",
  "key8": "43MqDaUkfg8QLiE3SNxtm8k3x4pQmLo5mjq7UQPunF1uDBb14q6jWCHgwdws1zAvmyDQ6UFAw5As8aLAjHak6RT",
  "key9": "55J8KYsE7qcs6g3QJC8jZrdj11MoTPYZmucmSSKMCd2AsjKVhDMaVyE5ZakzWdaAfNX2GmWQS3Beff2vTS97YPip",
  "key10": "2ySntKMem19JGGTphApSmw3og8ac8K4dRSSdSWGmwGHeKTLqoAsMTvAKSyzjgqKPGgP3ZX4qFfrrLkGVo6hWZZWn",
  "key11": "2c3tKmEWBZygf4vatH4P6KjiVfWKS5nRxGFr1tyoBwH4HoLPc1LoQQcthVDtxRYpGu6hMzqXz4RoXPqjdGH3gUQh",
  "key12": "4RwPtDX2o61sFajSpLgX11YceCnXQatuMyxixYSMkh9pSBKV5yffqo2Aqtb9L45srtSYe8w3gvHZmrNr4qXpjZ1a",
  "key13": "2G9LjCSFkfKoP8TRnWtgE8CPsGyLDRGYdoFzAXmHC2mgG8yDXvQGjZ75fzGDsw5FL9YrJEkMVQo3ukwgTUHzrQGo",
  "key14": "2Gj6gCdmqSEqmV8YVk5QMzBonZdET3NxPcLH4ACiK12oKphEiWHmgq3LBhoA8sLYMWjk3shYRLzitcqHdv3mYHya",
  "key15": "J4t9vTewSjYYFKeqFjB15wp5VX8nzbPBJWGSsFsVSLgcxesRP2yQT7N3y2RDCM9Ba5hKH3arPUbd5UvXS9wt7Ri",
  "key16": "34HaqsQFwrAZjqnnDoPyRD7E4P8zAssUv73hno8D5D3fvTZZmsNqEj7Z7DEn5RbHv4a7hpf1wKaJCowroY3Dgd2e",
  "key17": "4zjCARhFGAZyvEQ1Z3ThDoc6Wz2VVPnwMkkxL2mnBx7BgUURQPpoJa8JmUh793VK6gVBHDoYtWnAJRbosEqnZw74",
  "key18": "VDseAyEjJFS68jue2DDa2vEM8qtHjt4fkHbSrRjgqYngMzdAUhNtghNwKNMuboW8qv3xST3zTqmjiAgd85eSdx1",
  "key19": "2ZTvPDS3Ptmov5LwfFmEAXUBafuow4c72fCsKP4nhXHsDsQnNLBeVmAmKyXNdCziuFxFcvRvtc2NWFqXPE2QWn19",
  "key20": "4MiEWASfZVR68i9AeDp36W8cBNcSx2zwqrYMbYHz1BAECJBrhkt2f8PC6RYTp5JxmdyMUXv2gzqqAr6PkT4XCFLm",
  "key21": "5yp6ZCJtBZqFzMhWkHpdjS8kBKhBFGsCcF8fBDZc866QeuN3zkQM2ft9DGak4wVhtqZrjV9ErEqkmYWAfqW3bnrz",
  "key22": "5PCxtCiU7eN8HYjsHaTCY3cVuMfkjzsYUYXb9h8pD95Nmwaf8SvBjdnADiAYmKnrKanZkJ4mL3zLSzCQg9tNgF3L",
  "key23": "wfK67Qs4maSnyyNbFnDFUj5iQQQVupgHxxn38asdTWZfNAgfHLJADmTfKfXYfjLv8GiRtGNcT3AS3HbjQSXFuXv",
  "key24": "3CJF6xrAuccSE9dqzDycECVmvnQTE74MnUtptGcHexWyQPZpEbtdmTLnQmtCu3ziHK2DncCdxrSpBUGCzP6F1iyY",
  "key25": "33CythMFDeEsK471K9tpCuadK9dMyjn4aQcwbqoxQ9ADJhHJ9jeT13HoubHfA8yEPEVbvpRSo8TRhkLhGCitreQg"
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
