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
    "XNgjCjyZEYrvhdJfY87vrH1DWZnUWdLW25oYfd3NbBEP3JEpYkTmyk2rpRer1jNUu7py63PE6z65y2azit7F5xJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sWCwFwm5kGNTUuRVFP9sZN7vf2puckHn9Y58Zv8PbQN3ziZ87Y8XUnHQJ5kxJmriNxHcMQLiiwLt8VBtXVQSspa",
  "key1": "2fm119w9XfedSZ6cpMVxyoPYLH1pweTn8PfHcytPSV4pAoQn4GBPkoP7iBcYR2bPQPu5TeGeNrqxUS6VHP95Qctr",
  "key2": "5KFk5zAiPfAxJVcYBcSEuWtvxT8UzxffK4ytXSnFSasa3vsUumnWefUc24mSkRbRdoHJdmEx1mcJCbCW7zDCzuDF",
  "key3": "2WHsJyHoKP778wAnZm2kJhsExz4Wp7HMxyxHYboEmZkCq1hQS4JLPE4Q6Uuw7GUE2NJ2hHc7ZGbQcHTBv3n4PoJD",
  "key4": "y77DrcpNEgynmxAZseEAQmetuev8VpmmA8LNYfTTkRPXqiu2eg1BDVpN5k88NUAdR67APqtMwsoQmoNQR9v9Sjh",
  "key5": "MWJKJJRJ2Ggu7s52tbUaHvejTaSbvcWzGcaDwVs7RnJ7Popj29TcceFjuQ6PtxrHFdY67JAfPEzTgQr6GATJZ8R",
  "key6": "fXH6UrPhUuiUZyFPoF1pF9je2ZVCzRePnUCC33gm9jNQdybFFSso5zZkM9GDj1ZzX9kbkFJQsSCyrxMFWXaNW9y",
  "key7": "QsfzVhVaNsPA6wqgDubP2MkyQLkNkJWmYkeWDX3pPEQ1dmbSd5gxPzpXrnntEZf7yaZWUWKXc3gLQFKSEPns28Z",
  "key8": "3MCdcKGMppaBPQ4iD9HqDjyecExrhBwiJJ9foWzYs9bc4f2fsr3k6j6vQQfPLNzV8RQKB9e52QUuqkPyNy8YTqCN",
  "key9": "ymTPpcrs6b24gTeAsaMdp3V1GRTyZGS4fQDjQeFP1QnQSEUNzXkc8xYzoSTtPm1LMMtZpWfxXstepCQoQpnCQC9",
  "key10": "MKbzrEwykBwhVgbcNDAfpt8A1jnAnpiVyGUGLrj1FET8u1fatukFBAnugeoDC8dEpPg6TCG9NVhJ82DYmT5YfTF",
  "key11": "3SQ8ApdsQGMcgAixLmZFtcyALK5kWzVELbkZvZ9uKTUgNWFkNAJodbzJX8PmmMPUELNywy9QE3y1HFa8wC7yXd89",
  "key12": "CQyscZf7C8zaaE77Dn5akPkDDYGh5dyNJVkGo5f1PaHNyJFcTc7NLmawH5b8KUpYq4w3ihFX9Av6Vzii8x4ehfd",
  "key13": "39Snt6xguh3VHryTNzb9zD3vztanELgqpjK5cgWxE6SmvLZybFo2hKGC2gr7QTuTxkJPJaouhVC7dBLCGcsRhM3d",
  "key14": "2ou9mSdzU7Q9Q7BSiqyXKDrBuJgZdo1NZMGyJG1hKxvx8TySUGr1JKaGwCrzbmDfvCX6H8yENcHHPCEu7TcSuYzs",
  "key15": "5Krw9HCBAryM9irdg1mh8oW7aAHMFrjXL9kkUbQttAjRGDAJ99btXhkVmtu1rahMhxk9UX8VYjcbgpQqZxe9tS9x",
  "key16": "5PckS6581xjnxnAim3WtQKyY4kT5LpVD41WEVrAyJtE4cpVK7aeSX7zoW6kbkT5kv1cSnB2EXvetdJsrp4piPugJ",
  "key17": "4RsjHwa6XtSzQP1ifduvedXUpgAyXUGrCSgk7xDio6vA3sLddUiq3ogaS9tjJhP74HiTPmLXV46Rh2hfMoKUqK27",
  "key18": "48GnnUbFfV84hYcWEUzQ7FXXTqanZegsNBQCxg4wXaHzXuT2WyMZFQPqb7eTNunyAXwrK3prBkQ5NxHjwBTi5SGm",
  "key19": "3mAdcSW9vnAHXNwEKt9xzrpXwNMAZkmxknv2796rUeEm1FkR9zAxK2sZzFLt7NA2H6AYZi9M8LX5PMmgnohiJ95e",
  "key20": "5ZAQ4A85wVH1vxm1eQPuoRgv3SN2FRTgPCjdosVpCB2WGskHNP6AxWf8HXJ6iwddDsxctSRLsWAZg63JRWnSzUgH",
  "key21": "5BSFd9KZzUAddzGeSt3c54cbafubxwf1B36VjiXwuyPuzK39N3caSvMM6WyfeXj44QnXF3gttZSmFGZ59fyZ3pfv",
  "key22": "3MbRUoXPRr2wgZnhHjdHwpo7wXakWekuAG4AByTyLaQxKhsjKwDGdZTT1jtXZnti5W7tVWuqWF1iMDrppys55a7m",
  "key23": "5wfTCLfRKasqfiqteSpqZddKGrHRYmjenJsYQeC5XPFKpbaX5JQGCyZAZoP8wa72xyGY8LHVkELZwvz3aih7LYX5",
  "key24": "3raGjoWyrTgNuTDFftg6vWV4uspTe8QAjhc87awbknmwCshfQi6dw3tGu1NZnx2zsJNY4PHtXeLpe8mt7MmEyNBK",
  "key25": "41WwyXiNHuZPSWWkUbEJmKM9xU3ziiyX1cGKSV2fFdehLsTKi83NTMokwpNVP6rJoG6oXt7zVvumBMyvnZjCw6Rr",
  "key26": "3daVCRMk6Bpw2dTP4Qvhp4ckzHC1euUuiGACnZwf6AQGksGnVpow5hKXPH3s39daXKajKkJm67tVHmCyvfzPqYTL",
  "key27": "YgPZ5HeAUDFueJeMQrDErM1a2KfpVyd98rhzVEhuGAFyMabLVBzp7Em5rivjTQRsz6yxbQh4pUWQyKBtW42rKHf",
  "key28": "5oNGj8iVEp8kUbsnev8guDwGtyDKd3KaApLcnu1v7GRPpztR518XKCqsoFCeU8LRofSDiqA9Wy2e39jMooRtG8vA",
  "key29": "66qsV1wwYqFC5rCLJDsDHiEyzzmNpot85BN4UYCR8LRL8H4HepwLiriNFGv96KrAbARqPvmuRkMdwarqVcStP8J8",
  "key30": "3odiSGBeDmfZeh5ZKk1Puqs7Lgj6auNarsB2idW4Lt1F4ycqEsN5bFWTEvpcNaxkbB9xKVqnMm3PjXEh5kzJGKrt",
  "key31": "2baq2T49QRtL5t8CZbrjQSYUqGJSERMkoPy7WpNnTYvdYHLBDwTtwZSBmcRuiWC2vF8RkUAcofJxeQwygdHoxTHv",
  "key32": "4zK7ADXtQixaGEUbRo7WtDuzpf8bHemn1vx1PgXWLrM3sBpuCqSrjqfw7xFxtsLMQnNGynWccm5zjPKYoELMceHJ",
  "key33": "2kgLCHVKWUgKxKSqHP74VGw2kYfKHgREtxLnSeUjXweAq8U1MtPemTn5WxAW6MTMeEgsgRXgWYwuqrMXr5UqhWff",
  "key34": "38fk7FxdwhECdhZ42f5pMbcVUS8iMBXCMfYS8KPiu3CuF32g4xS8woXGog57TR7weCbxQz1Q2BpY75x7t1481u7q",
  "key35": "4XAjsGUYRegZexXeHkMSb3X1ssUmstC6dHTspaFPhQjRhCnDgYRBAPbQhhMc6bgXVF4VLustBat19Ui55B9XCBiQ",
  "key36": "3gJertRwjHb63WZ3LvFeMgkvRuXQzWik3RGq4S65MspW7mKpyFjrektHjUeJiwj4rdCoTbW8jXGX4fVLS8FPTBH4",
  "key37": "44ixUv9x2JdNVFea2Tmw5LqVWFac2Eeub5zvKmYW8pG7DmpLYZVkjQgdLkhCYqze4wbDnMSU6MiveWAmp2bnBK3e"
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
