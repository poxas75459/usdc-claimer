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
    "3yrcua4ggUqEkyYh6aaWPG6fZoVWTYsuCf7afyR6Tdvcg8RoEpnsWjaKMiQuRteD71WB4soGqiJuEv71cXjmeKcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35efaHkRbqUrWC527Cf1MvJ9QCCtVyW8F2kvMofpeiYMoGLK2wgENVDf9Yhb5FXgcEifR6HoU4pH5hXgqq2SGXfG",
  "key1": "C4F7fnwz6r6Y9H3JpU4Vmqzxnieti9VJ6zYEfCo2QuCCMX3BR6NswEc6LJStmGPFAyX7HWrobc2wMMycE6N4wnh",
  "key2": "2RkER33nKNQ5Mp2hHJGW1voE5XsChQfM8HEjgYXojMSUAhU98hwfci53wqGE3HsewkSGMY7SG5fGHUeckAFi1qyn",
  "key3": "2hozcKvBPRyn6VQnC6upRm8fGUZcVaJSv8oZXnz3C3ZckhT9nyed14tWnT9rxUpMRAWgLQTBrbj8SYYPYt2kodRE",
  "key4": "5ariStYvetzb12LPhJvHjo9mxufmqNqtKb4rXWEHwLZ5UfucmCySt4BUyykt1pk34NBcM5gygb4VBFvHUtxwexBR",
  "key5": "31jr8o3cfSezf1geyhGinbMxoRcJbitXQCMM7vi69i9UNatRxqGZtbGZ5GoGWAfJDgP85WaFhJp2DEPjWeaqBzyW",
  "key6": "SkfnrE7JdUJKmEpKb6DWAGo21Jyw3T4QMbQXj1ZU4FqP5igsCenc3BHpQ4Xbqeh8pMcdc6JNewkJ8UZpM1dVdF4",
  "key7": "3QrTRXKUNPoH6z1sFQqZgXqQ5FQ2rcCKWGDczU1wM1LJTB6x9CUhLhbVyWq7wJgPKSHAEscYYkvtExNkrVr2bJ7f",
  "key8": "3W2SGYs8MCbDVZJVjePWk5rujA6tJP4d8UKbGPTyfEzLtj25qURv3yvuPt6qoVnjP2XNsGGfLrStgQtHGLoZh7gb",
  "key9": "4GL3JMoyKo3vkTioETq4CoZNtr2ykW4nzJoBfWDAsCycgCJHYTmt68XYjMNmVVmiwAezSp2YmyEWwHZLuhGEHscH",
  "key10": "2VKRwzNHNdP26dmZk9ZredsVZpjo95oKxr1buuJzktBFNAYWyszD43UMmLKScxCab3TRXQPMpbggz1A5MJU3wtmf",
  "key11": "3Noah4kDZNf54bzy2uGvDFYfgVKi57jVX6pCftXooF9h1f3YH61XqerQ9ifT5rBy2EtZ3KPBVmMGr4CkGyn5W75v",
  "key12": "GgjCRAVhLLTWEH6HpavLXM8p2Mjih5eRrJevoewokR1ZWM2nG42fBwbbiDbfXhWzb2CxHQa2TP8zKdBcP4xrELF",
  "key13": "2YoSj1EXRemJp2uWdHpyDrHzPA2qUY2ryzGhoTwdv1aasm3mBrSHDHNohxUiKUqr71eNnFtiXxYeZCrDUNyqgn7j",
  "key14": "4VairFQ3PiuQMTPF5sECGvvQ5F8GFbUHU7whzUjLxcXD6FZYPRCD2jhQWBxaWb4DVx6eBUEcKQ2LJsV3T8soHkxf",
  "key15": "5Xt5Kd2BdQN54aejzF9P3oALJky5iQPAxMr7ZPX1hnkbkXbXjybFnpcFr2uQrumBkEQZUoBMpSdAL4SiKjXaaLVb",
  "key16": "64dn3seBh2KbHYqCwzMkPNuk2gUtUo6y3yrC3umecEvv9XBeAgjEuu4rMYXPXpQxj2hgFNE1ckKi3SuAevkAYdEL",
  "key17": "5i4t6MBzujjSfQ1zbxwFQTnB24UmGHeQ2ShJc3uTh3ioNbStfnDwfPmvjrEd9BWjPYQVRsdFgjuZzn3MbxqNeBo3",
  "key18": "3RZJpmNKouQfuoNSYxjmGFXzGhs9RS1uzRPm7HnSiGWDEo7hjkeDQPBLccT5ngvwqGDhGjnmk38iCJ7GK1g9wNru",
  "key19": "YqsghFdhqu3H3JyGumtYtMS3PavhAcEqQ3ztW6WjgyUHB2NnmzG4kn1ojPPX163wfgUWdcwrRgc1f75mRBH8h2M",
  "key20": "2jKYEbqx3ipG4UwGkGejvUSvfsNtzWTVoQdSrC31otAPvATRL6MU8u61oLtTRwiWebCQ2gJexwN1WcsBsTcQHPz8",
  "key21": "6n5E68oPoGRvj73i6BDotoxjZ9b81BbhBXs9BBt1Ydw7f4whhp7GoYzxs9G8ndeqQVmJWjgMVqoY7u1e2f2Fx5G",
  "key22": "3BTNEeZYfPgfF43aLHXMQ6v2NLSLQHWvuxX1Q3wEruNTSBo4oVirmGpoTa4LFz6huED3CsvY1AHk6Pip6oVbaCkg",
  "key23": "2djpTJRyUfg4rWRwVtnfSE8UPqPQUdZXVU2Bfzkd36G48UhcueR9DufpxdS4SH3cfYfyPSQ1AM7j3uTFgisXWXgZ",
  "key24": "5E1CdbnXcQW8MKDdqYugPmEctTX54SvHefwug2xr5Mbya9PSTruUXNHvfCPiizffCtr3DZdoFkoU46XgrR1pGYBf",
  "key25": "5oGJqgVekcSbiCYJF61tq4u9FsWdTedLGXDC6gURiqbLKPcngLCLTkMszw4JQ9n3gVUFjWJVMKE7np7k79WYww6u",
  "key26": "2rCYHep9LBg4i3Ty1AKSk4s8N5fBpEmiKaKAdhy4tKQEwxGroEe8QBz5YoyucdLLCGSWFH86qSyN6BLmQm9bdCHX"
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
