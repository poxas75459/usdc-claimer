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
    "498yFEU5dYpq1b7xAg4mnMZXakjwkFF7kSR2ouHRct1JHKSZ298MkKZFczM8s9bJQFCp8DXZZAFTddg2aUeobsBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n8j5exrhCEYLDkuqNyMGKpK8YoEcEG4PVxePi3mrfqLxURiE8MYX4W12mMeBfg5W6XgJX5QDXtcTcPcyR6oL8B2",
  "key1": "2aVPB1ZZT18JmjYYP5WeGuvc3GpRZ3NsKd2VMMFNTrUq9qozrPk7mV7DifdCpaDoBE64RUYxhjHFvVd2R35eWVBN",
  "key2": "2VQUARFiE7uEEgztM4Lo4ZFHmRmuT9VttTdyxvCZqnx9AXATCJwSuSnEiAADKj6FPCnrrTRybcpVrYs4ybyGdeze",
  "key3": "5Lc2kr83o7LKvcrM4aHq5AavPaEVBCWfHPExqn6BjjkH7KVke31cmRai8zr1bRmBkqBBegA1uVLizCr6uhd8ohXx",
  "key4": "yp6FrisMvoGDDciXaPQBepp4gArtNfPr8639RgZZjNxwCwJ7j45yiTBF1y39mwD26PkhjSwHb4kP7g59Z32w6zQ",
  "key5": "3xn6MQDX6ZpdNrFf6TcwqiQErrtTPBtmQzt6hCFxYPNLUvmqyuop4HU2Txn1fbdsXuGGiaoeBWeLva7zQuwWmSM2",
  "key6": "5Bwc737fXNRiAg3THF2t1o2ZJXb2hc9b6ssCFjdxE46PspPKJn6ABGpnv6utT97vbXGyqqwhEnDXZ2TwzdSH8pkN",
  "key7": "fLWL2dKVHe3LNzYjGRP2qhe3AJRgTQrpH3jA7o9EViH5pzichFLbcigtXzc1ELxv1xwZno8rdw6JS5H76HyAL1W",
  "key8": "58NPpR14FwAuM39vf1wwDFqBAXki9tvNXV7bXuuZy4DjHjS9so2nMu4ARGHY7QNMHX5r9R1LFNCmY5fbbFSbCwuZ",
  "key9": "oijaFCYnGXs1Kr83YZoiHUNLTnvCVaxUFbsyXGH1YdYD8SAXPuSKf1G7QpdwURT4zL3PgFR6qoRsBYrneLqzk6A",
  "key10": "5PuSjU4zL8YpLidXX1MQfar4zajBRymAZRWNbDQFXa4ZAGBFTNous22R6X1wK6naGVShZqfFqpWSHWuZDRu4bXz7",
  "key11": "65uaMhFXs4Ap9E43q91prBozJJPRsjk9ZkwqqUu9vAebbvowZ4b8NDJpbigzo6DztFA67PmzK3N3y5bZSkuMV9Xq",
  "key12": "2pSTM2FJo7HC99MEajiovHiu2rsyXrGr2yXziws4t2kEZd9XSD4e5yas7nA6onD25dYR2X27YBGmRae2p3V86j6K",
  "key13": "jaUAU4YXJWhEK2zPzqmXNsWXH9jbCTWnnWKMpkHAirwaw4icvdYJgF1fTZ4mA1sQdhFxyXt4cyVfb9kuTvAs87g",
  "key14": "2tiR6CCU6RY5bSxa6P7Zg6Vry1im2tLM78i3M9V6cDiVJaVHMAxQXBLppCQ2Kp2LpT8v5EAAKkPygSooEaBExkQv",
  "key15": "3xi857A8bzXPEGL8LgZsFGbEsi8ozqzbP6Lwf3dzP6wYTLj5dGZRXr6X8ELCzdU24QRfcZeLp1dgjwPvw2mDtDPQ",
  "key16": "4wedyBy9bEquweSzevWcYdPmfaq8sSNwKSKNR6QztcpKBqCZMgq25kdByFEr1HeqMsBqW7RSptXjwyCVMaTkUefp",
  "key17": "5mrwwg6AZHJXa23DEWKoKDUpk4ZkX438GRf1axLML1WKf5hmLd9jcLuGgxZyuHYD3d9mDZBKvmouwG859vCkH91V",
  "key18": "pjBnV39yntTTS2QEcmu3kJVcWtggwHJaaPdpxaLEDenWiVLqbferchu2aczKf8muR4goCyfB422YfhP5zq1cbgg",
  "key19": "B23dq58emx5TVnYT4wvaqnTrwc7YdrD7bmsyoWdXwfauDu2MkgLVU5fFdGuzcQZamCuotg8YTQjseJFR5kpADeN",
  "key20": "4wFv8VLnitCYF5gkXcsgUCA2hhaSKPJGYJCKSy1neRkLE9k4ADacNtVijLzuZ2hqMn1UK8sZhg4Y4C1gQpy7HG6i",
  "key21": "4p1J6sPau7x91gVKR2nBEMJC9gy9YSJebdyAAaLjbqbbox1WnG8QHC7BM2HJvkguwwwY26nKGtcud1k7iJSqpsR5",
  "key22": "3CAYhias2Qj2Lu8VSGPwbwGCGW9ThzKbWehhRwLTENC5uCRKcANdjjxqfMQfiXDjZSZWuZLgLEYv5mEHfavgTTYU",
  "key23": "rUs3LxbBkxJwSus5hBT3UDoX6yKoad4oSneiECfdnXbg7fPvUqiQHZedNg99rxSYgwzpj8wCeiCb5XNz3Ge9GFm",
  "key24": "3E6wB1itvjNPmP9xMtjGLnw26KSS1xusg2taRx5PpWyPBTTBDQXwpFkSbkh7np4HHtpKTpRWwHobxMLwe1nfsL12",
  "key25": "CVyjuRYMAU7mTpk4NUm413JpDc5TAPzXyiNrQmZzfAaQdKQWMBsspzV3oNuNcbtXCcLYVz5s2nTrgukhNsGkzhP",
  "key26": "4hq11qyTwzDyXKWSWM555k4pRYKpjdw4be3cFq5S1wefAR346NJiTuXMPaG5Zcx8ADqgB95Q8fFomVdvWq7w3TSb",
  "key27": "59u4tzyf8N8VnqARfH4DNLEEgC9QYyyZgj5aLqwwWWJnHgy4dzoNcFgGs6dguahEHoAe8C1mn1jx8yzawLf2FjCX",
  "key28": "4MDq4pHEiXHdEcwtSNEbpPrn47nr2o7UE4YUC6b9br2w8mPeHgrTEKKbwDEnekXReUFe32xJXXUgCvVY7HET5rRP",
  "key29": "3ffGTMj8pMwz5MWAfT6Xwdz3KWojLMGEq5uGVWcNoX8xVPEjxb38V4UJT9TiPHDB398VTvr2Sgfk4hc25vs8Wi9X",
  "key30": "KjZFekKsbTvatDo25bXXVZJjeLJTyY6qyJUccRtr48dh5mwSrFn2irqhHBB72jaA5m2ajhgvA7S1kvfVYBjtcdL",
  "key31": "2x2GqAgGaZJ3uEiCSqBEj45noYY8ETbqqiusmQuxazACDjLqWRbi62PTLGZrr5MruzyfbchHzJe7J2G8V8RNZ5uh",
  "key32": "5NCfqgvQCEqnmmi9QA9UA5r46vmtYAhdfZWzUgEKTSDrxEzeyyyA5VXCdP3eDCu6fKK8k5Li3xF63hYuxN3wx7yi",
  "key33": "3MNAoCgXSMXzwxPsUxffLyjbJhbapijSadQ7mJFonL6CQcXnEFHFSfjq9w2vQ1yJjJKCcHMFJuYY7T2Vb4ZGxAYb",
  "key34": "2ZY1ujjw2nRirDjHUBR35Xm2hjbt2Ds86j6nuY7HejpeasWgtajVd7WCixLubLLvmAjhJg9TwEXwSvjww6wPLT8Z",
  "key35": "CVUUnyKvsPh8Y5spgvZwpDKGW3d8G1MooQsHPY6A6BjfL787kVFA2MHJzZ9pCq1oKsjfkjdNEj7noNcc77hJHpN",
  "key36": "3j4gD9aGAGRKBkQFnUcnb9EASysAa9uc1ExaM29bo58anC9tyuVbeAGtHVAGzHA84UTPzusBy4eiAucrTVwKXTHR",
  "key37": "3afF5P2Vdx1rySz3m5i9Epw31qveA3ufKUNqbtvjtzvA3WWwJNYoAShrKZWRKzvttVUMqH2jGAYnn93bcwBytZBK",
  "key38": "5h4dKdK7Z5ggtkze9CPXdV7NZ5q8xKn5EkAMNAyRNuZiPxuC1WcEnKL7m6dVKQPJwXymGMvYzT7ZjpEHbMiDDSJ4",
  "key39": "4KBWdQVNsQoQNtjYmUFgSAN3W3usDEGMoFo46foqM7McPnkvxtAP2DQ8XuqC39smq4frSQ77ahs2EvBC4edxFaga",
  "key40": "3hdBCmuvGm3CnjDSegrF2tRoZ4RA1XbC17fDrwxteS1GdzH71F7ohvkhBWW1YiHc8v1Vwe7vcibQau6SPybBcnFo",
  "key41": "3Y8awWqdYoEvCDRkAxjTDKRoNKv7BMyPMb19WVEk97mvsQFMSgzp3tjzMdvGvedLJHJQv5jEe2hY3V3RCz2oa7kK",
  "key42": "zdcCZ4Pwm368pAVAFLCntrYiZ75TmRGS63x87aa6SYQFCjSUsw7FGKvGgKKmCeY3d9v61PR3grvyLLPKHCfRp2b",
  "key43": "CDrwKHVS3DPwsVzuGeLcdpvBA9ZTSkTmu7dBXjtxCAMtow1Tr6jN5j9is9XpSfbeoGBFoz6PuavZyyA3nLpA9nJ"
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
