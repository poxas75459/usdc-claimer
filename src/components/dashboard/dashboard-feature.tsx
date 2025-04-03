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
    "uyFZEGE2VS9p6F5LUvLzuLrQUcqcULuS31sXsarVK9Q7FPEWT3XpYcEdEus26papC6U3HQgKLwpiUpQq2GK95iZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dTNFXmBRNBpmwRsCgpU6a1b8btqaCW2K574NrtcPM7j47hG2cs1beyxMb7FvFf5WVxUZi63BEw1wnUgRu286vvW",
  "key1": "237tW9bnkwC7Wh34JpSDDMsAJyGKZEfn18xTaw39dMSy37JcfjycmYW1zEpPbCDehVbmM6MFeB5Yc71csscdM3A8",
  "key2": "5yKGMVmK3LepTHfadRNJz5iqFkRURTnQ62tJWBHK7SUWfKhgvKqZhG3jCPGbqzqa7cpc77n1xtG63v9awrQ8GRzS",
  "key3": "2cS2kfUrXnGfduMWrMpWZDjXVhivP7JSTF6iKXp7nPsmKcUi5S7DYBJhNdK4KwKQui4gwTzmeCKGwvzsSpKewRK5",
  "key4": "399BvBdjqEVxzfvZ9VVgwq3hQvxSNRWCKrSQpizwm1wmwbQ9eSpJza3cj4NwJB1YjLZEzDHoh359JNDBFFU8zBsH",
  "key5": "4tKG2pg7fkjWM8a1FRWvnKzJfp7qNu8zE5CVikbBpjn3t3iJhLYrz6H5QFk9msczGozq7DoGchmePiPxWSjCFmeK",
  "key6": "3MdraACGQFympr3X51we113SZMDKvyFDbCjtevd6kS1JHREAQt67UF1K8v4rSQjpuqKjAykYjpDi2QY3g7vH2b14",
  "key7": "5u2aynRzShmpaEg4cAKKMAmt4aaW6xEqMPXgU7ig4Ye9j1NWqngDvAv7BnHdr8WZf4B5EhdBBuzgcnZ8WMZTPHbv",
  "key8": "3xRom1bPsK6To1R4UjKFFTG67Ak5LYijc5QgfCQKSMaTDfn2nfXE9PcQBFXy9QgHh4fSdxgpZFBZPvBykCE8iug6",
  "key9": "41s6ST4gyDK3BmyMKfnLMDqVGnKK4vicD3yJNbPze2nyVq24PTVjaVArkfa2UgawgwA7aJTYygyy1PxebhKYQ1Wx",
  "key10": "3feWRCDBeK23nkHCkEcBMiCkjzfeFzxMpx4PX48JTBCuUesbFvhS1v5P3evtPMWCcH7RvHfBTGvhZqT5RkmXhbb1",
  "key11": "5bGhB4FegqtbvuB2UDY6QfPLK3xp36qMGJUhM83b9GMrZBKdifGj5LXWV7ECK8E4bBf8rSsCZUGKNi91737gAwLx",
  "key12": "3tyADYHdGCirtMiCKtYQ8fgmYCXdXqGGabVm3DQHGbJcJWt1ZVQ3hJiWUNLKf1fT1MdsSoyt5zd2qrmKYGyP9fkr",
  "key13": "sanoGPKE8h7NpyTm3k9TozmsSsvumEV9QK1WdRMvbQyDT5DvVxvgM8coKg5pfZFvscMK9pBJVCYxknVwnGJ17cw",
  "key14": "5g4qJfC2M4LWEmcfQgbk6tH9CZHwjnk9iQ55LZeh6jQ8hiw16GQgXMrSaW2BxKYYADU4zbWbmcUA2FmBEGNH2AvF",
  "key15": "5P4tnZQx2FtJ5NhGGeMmAzThuv8VSWTSe1349tuST4zWgjKhpVJbN1N4dTTyTLqmf1yKfznUwJyiaRnYM6c5APL2",
  "key16": "5DS8VWNDNY1ELV14yaZH2KaANwku5T8Kkjpx7p737nrtYGLwFTpEVTy4cg3d4P63yyG1U9iky1wUfzgWyWeHja6c",
  "key17": "so5t3nEhuTxjWoM2zKyv3g8GrQRBD1ffiBSsdqucbrCiQDzNXeDQ22LVJ1TtYTCVqviQGByWicvMLTu7WckRgdx",
  "key18": "ToV9MPQorxDdzWEezS9iEdVJPAK49Uj7uznSBT9sQTaGEYVSqCbUurshrtV6RWjuquATNY66TZ3n2LGaeCnxusp",
  "key19": "37fviqoBjkLt7wb4HhY2q91nNiJ5QGsq3Bw6eYqZQUmzSUpfVG4AoTBBYSqzcbRp2n8kMMnEW7UpYV7uzTfD4paG",
  "key20": "Svm2E33e4QF6UEicxUzhsPtGixgFLApoyDxUaknN68xiTGoHFKDf4d5QP4DpyE62DqV1zkCFCNz5R3huaw3wN44",
  "key21": "3W4BDRbmgQpMM92Y5VE4YjXzSFTUZmFmY9jo25Add66SJmnUYoWJEBXXyVGYjT4PN3gmn4q41QAKRzFpaArF71Mb",
  "key22": "5oobVZfxEmyMUfA7hDodMWH5Ki59xwyTsiRaLhZjA5pt3eDS5QL19p66oF5Q6wTQKapKsnM2zrLBwjYXvbM31kTY",
  "key23": "5HvJpfSVvUYj5mmzsiMaS3RXjrBLxkFG8rsZCNyM17XPw2QTYDVUDfwh2QdiKYyRNrSCNXUPcUAbvHkiRTZ4q1Y3",
  "key24": "2yjAjLC9mZniPcncDYndgD6ZsZ4afJ96E4EFpxzScGc2SK6Z8EXhfSqRgS75zvFJzPpR6QbDqHp2JSdBgkFQd3C1",
  "key25": "22UqhVVD5JDzJUwbwtfhgpcJ8V73jEhYZ3WMnvioKoYbfg5t4cGSnJ8Ps5VGzuRDxNLpAbf9nbk7zvy6psyfRA1E",
  "key26": "2MmTmHccprPzDTDD6uKw1YNABgQDk8cEAr9uUshGVtuDb6s5UnzN6Dnnu8MuVcyBBmL9Fr5mKq7oBohTwRt2Wunv",
  "key27": "5E7qQeCK7JszSJZZNFFjZYGzYWpjUPWqBr1aPNzoRLVu6VHoC4MHqe4EB3me68G8X8rhHf57DyCoqaL1xBjtahpk",
  "key28": "5SzWdRjtZNiwR8PB44wq8LwSjYY4ykuZAcw4M7MGNjLabSydq3qzD5q6iS7Z8USbxxuT4Sg4TFxRwuh66UD3WyjF",
  "key29": "663jsPKABk5EbvVk8p6ELNzzsYbdZiPor13rA5aEdrZAGd5m6GHB5PRbVTXaMriYqM3ehMD6XhSVZZF82N6gx13Y",
  "key30": "5vLFZYGLmxpxF7mSR4dmrpLYa9HFcq7pmfuWJoQEph9P6NaV4aDoYqv6VsmUFk6GmvSKKj6pCxduDnBqcEvrpTT3",
  "key31": "2257UwdKiUfqUyC5QocgBwYfgSdYgUkqaykwbGWsgoSKNTSXdu6aSAVXavPpackdnu5niab5k2sZVhBmPnsXZJZg",
  "key32": "5dzRauEwvX7LapUQ29GrfBfhLNif4GS3dhcCMwvGj9TiLt3KD3cJiZANuySs2NkVLaAedmZjtauVbHeqza4XUB1W",
  "key33": "5JFStxTGCucUBUhDNVFoR6U1hH1UyY7deJxk3fWQhmAxu18yAVLJhHWFCc5m1WMrVJQVP7bMzzM3YyXG9hsPPtFF",
  "key34": "5ujPkJsohzVztCPSAhPDXh722pww4nCjmsGUUjzHz13BCkSsaPHw3de51ufsaAuh9qSZv69EDd7XEh4cvzqoXsvH",
  "key35": "3nxUUcKkWDzJsRSvqcQpSpP9xzY7qLVKToNVutjF9nrf5MR37rJGZgQeY19csNhYd9dJL9qJ4sc3QschJ7ioNYs2",
  "key36": "2N2kvGYVgwKvR4gRsH6hmCcDYTjHds5r8jwpPecuK3eW52mcgXY5bbUJgX6qmuyzFgU7pPnbMKUSh3xy125FwcEG",
  "key37": "MQJ3wree7tUd2RzkKCentqBDDfRatEZnv4uqCd9oDjCwHtrn4ZmHxubGY32bQCwkoKRMLXoAdx67kMg27Any5gb"
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
