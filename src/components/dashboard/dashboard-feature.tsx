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
    "5cwhQtySC2CsLgviTWJYeit7WusA935jJpxovYiJPG9RFDFkLTPDcj5ykfaFoneJHSBkEy8rsK4MaK6wPQAqUAr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pEnoU47xieZEsXZW1B1o9nh9Gxz79capidQFmgLZmGERTvu2GpSGS4SkUcAWCSwnyy4AybaVTvdkgW2HR9bc933",
  "key1": "aLeVXUv8DMK6M6Fj9FxbzGwzUdCeZ55owYeuWdE6AoWB1zvGaQWfxERfPghsQ2w7ZPEWGpNvEwvTDP2kjmvWaZ2",
  "key2": "51eVZprFcZrfnStXVwgzwfMeN2WfetkQfpHqxGNLaBcgkytgZSbugWtjAhLWLx6rHURryHaiMbXdZSp7ocBHeBuD",
  "key3": "36ANXQmDahXn9uyejjiiyvEFRedLknnLNPmDB35FnYXkqDbwSPsRGnYcQvtoSdAKYGrZeHH8kPjVk6k9Bz6taHwy",
  "key4": "3b29mXcdsJNxVDBTtp1HH9fCp8khLTB8EbiXTvgBb6QutQYDRkHzsukg7vMY5EiNS5apomvyb7mPZKe7PWV223HZ",
  "key5": "4M7tVEFoqsLxkuYMkKA4kYe9Xy9F8GXGV3iQZakQY7jkibWe9mwzSt9EEuEFJAqRdBkgrDdqEuUcLz4HfCw4U7q7",
  "key6": "qNRbtHhdeV4ASt78ZfbAbFqwqsQk8Ysm9MCAPeU5demRSBNpFbD9RSPwvSVcF9fRqkTwG9aJ9kwyUSDG5Q81GCy",
  "key7": "5ontrrWK1Aii7vKYhd1gboh37kp7qMCHWLnsvj2meiNvZcF9e8MP2dj1fkBeWaiSdn6RiDc7gazmTam1x9zYRQ1J",
  "key8": "R1ELUSLgaDZaUwguFXgLKbBy29o7ixqGMvqhB3nH4hcfA6daByM1Ku2JCfjGc2g2FkXWpaxXv55wn1E9J4hgSB1",
  "key9": "4AHBLSeRftWha9LHWzBuPh9Yv71q7KWFcqSutMPmgByxB9zXREQ7ezqcQHx5REQAr643H2cvmhEWhMicch5wmzZP",
  "key10": "4gEE1iYMvBdjsAjJmtJAh2mV4HX6sADC4WF5vad8qKeUh7LrmSzLmyKuhQ4UpQRpgHCLLiVf5Zew88R1g5MPeLgX",
  "key11": "3WeA8ZKgHfRVqXFiUqqAkarHhHxa44aFtbSsqmHgtQT45aNWS1ziQ6VvM3qazzneUft3Prtf96RKeKdCmUHtJAH4",
  "key12": "4dz1dnCtJGvQkswooQy8Tbj9wyfHDaTzXxhc5NjuQV6yAMTGsPQiCbVjxJub3CdrtrVVEj5sytMvfwdxRSap2GXX",
  "key13": "5X5e3u1DHWRKrZ4VYSdwN7hbvGGq84f4TVAz7KnHgrbTcNBqHVxjAL7sU6AQ5xYFvH9Sb9QVjne97HFVbjhPopDQ",
  "key14": "hk1aSHWSc7z6LdjusHrJcBmzHaEAC7fLp8vN8dwZPvnzKWteqCkhwDd3MhjJ3PauXppDifedujLz4nTXZ6iTqye",
  "key15": "4Zh5u9PeKAeFtgp4vHQu25shqLNL7kcZJJ6BFyPU7hHttC6eP9z416RjSxWeRe2x2snUApjsZreutSMUY3EZA1k2",
  "key16": "4h6vJZpBzWiD3FZdKuzsZXyCWXsxz8ib8Us3VwdZS7Tp4mk3P7NEGAyQeorvoCpPS9JcDghDwA6uLxkQEbCq7Kp9",
  "key17": "5Kz71zGeWsKni8wtmAZUGGPx2FurnJZ4oJGkEhdMSnPGfGfnRhTp4ufBdMnWcucwDTC2dJDU9a8cLwkroNk1q44j",
  "key18": "3sxSiUvbNFpsHFVsMUjmNGB1JKtyRrpQwJ4MzbqMqBxMhsib3WTvv3KGRWAcDGbN3Ut6PkQ4NKUo2vhzuaDy8wE4",
  "key19": "5YabcDbBM11SwHVyn2z7PPRvjRLA1hMpaCJKxAVtjJMLfJKgAcgm2uNC7rqkP1PPaZoWHCZa7dR7J7zpzi3Ba2Y5",
  "key20": "49QYaByuDxPAFKXCrUQnxxHL2CGngorSiMapCYWEWT7w3GZVUd5zmyqpc6b61awsGEFdUufLPqfSsseEDfJSiB2o",
  "key21": "2pohMKt1A5xQnoEfXKa9HPMTjzHrQrW31BXvZykjWmGPT2Zr8iQHkA9Jxv16QNoYxbMrV3KvEctTs8bEcjf9gcQo",
  "key22": "2BN3TJNGFwoQojkAeqoRyZ3y4SXbscSokCZac7vrCFBewHhfGUtYAeJxbJ8PkXCnHmsxCpxNxmrPzs33tm94zNuF",
  "key23": "5QwZmDqb3pjkAr3R4zcNWDzt7mD6shnjWyR9hf1ftG8NDdG2pS6XCxVEiusZpVNNzLjAobL7W7RTB9eQPd6TJJTY",
  "key24": "2yGWrP4yxUs2RnYY2CoX3VCacmSmgEhJg2Kne72XCUSqifQX5rsGKYASyW3EuEV2oHP5tKdeL2Bxct7cbvptoQ3m",
  "key25": "qDB12GV5VQjKGB2damtCYYYKZztjxJEXXfyCy1VaqMs5RY3Q3dJHFk2RPX5e84ZsB9xutsQQS5PXW2kNf2CEA93",
  "key26": "4TgKjohK3FoECiboJrgBcfMFuf5Vanx7UifuKhLJsvMJ3CxdPYGuyvuZoNBcjK8av5DpQ6vzNAXnYRf56ubHYif3",
  "key27": "3a98ymXJNABoWiVvj3bFHwSVzYDPJeJoCDYNQ7kmUSvvCNP9utqs3ZKf8uJ88fErSSwoafo39x1ZQPkbPAbKNSqp",
  "key28": "64h9jmtn1KvRyHyKr88HkHJg7nmRDh3Mf9Q3DfQetLjejCV6W1Ggiyx7HdrSyiH6EnJCdqG9Rxcd12jQJkHpQNNX"
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
