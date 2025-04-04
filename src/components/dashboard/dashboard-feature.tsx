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
    "5MuRtVySscLmzWVrJyRFn97R4iCwBvnmV5t5SPSZWnJb1bKcioLVtGEzgRKj4u3VhEbf8BapJ96r16CoxMXn7sv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rd1Qf33RpUnQ38c7nCLUq6NpCkHQgcFH1UBsqVuzjG84usXiAeJsv4i46b1spTCM8ddNT25rqSWASNi7m53EQwg",
  "key1": "2DDCWhY4aXd6uziDsWrqYozNT9jPd2do4ZNJ1JEYg8d13qsty4yRviTVUDkM5TPZ2pW8NCjsqx2p2LZVnzWLhV9h",
  "key2": "2QdEEaXEpdxzCU3RGaRFcKnpEcb9VQAam9iNpwZhF2vQ8n7aEBfgJS7yvKEjZHoSBGDPtBTVxEwHauEEk8iQSYt9",
  "key3": "29jUh6shLGmM9PZTKzi5JSxQU4fUAkawkwvHtJbr7wyrKv58qYLWxgXEVJzKbWr9nDiS5TTEd7jNFPvqcbDwgegS",
  "key4": "5YFzoHXByqCNHWU4ExPovd4EbNveN7VtxN1ajZeEBgaaMHhLGYnZRX1FTbJu96RoazETKnKNaCf4RPjYhiUSrKBR",
  "key5": "27FtsPr8wWcGt6vRADUQt4SE593MsPQgFz8NPEXLxRcahaGRP9fDbNc6xpaKJ68idpmfjZD4Wjet6TGqTMsQQN8m",
  "key6": "5mEYRtk2yM8faBZZcJbauABcN6NHdc95sLoZV459MTkmXFG1C2DafnyHxAiT2pNZqKPMtfb6MZbixj5eFPbmh5rm",
  "key7": "5aztUH6y4jh6EBHmDcVvVo8VrUhY5y7sPtya4TYzy3CicWGjtDuenm7FnAq4WAWPDoX5AT9a8jyYTuzZAG3C51U5",
  "key8": "58FchKaaraHykg88TQ33LgU7ZMerBtUdQg7SFQLUWfUPNb8DMDL7Kxmw3BP8KAMcVRTsaUfxfKKDMHdCHKZ79coa",
  "key9": "5tjbvEzBhjtFQjuL8QUbyqh3e7Nu4CPnhYotBkCYYyXeLsmPNsAjC8tL8TLFafgXPCu6tYGTBF5tRN8FApEBSMkH",
  "key10": "64ce8riq7KpBqVf3aYT9Ty4SLnEjoGmLz8Yor46f91HSrw82sCg7ianhViwM5gzFgLcnmrcqkTBsQBpXbjAVH1xq",
  "key11": "2yVWTGu9aatiLYmphGUAUaczkuaBgsrUMycHJgeMMjgKVE7W4aAnb1v1aE5LUkSLSp4zqvj7kibKidTGTLXsDDzr",
  "key12": "4gEjMR7Bv1QLSnh6osWCXGKK3W1zNS7QrH2W1BWyDtMNys5ZdejrtDsuu4JMk9uPpYJeFESJvfEWQtK6qGZuGG6m",
  "key13": "59jae6R9Bpi5WihbfetJSZS1VrhF3TJQxiFaUSHW9DVZc7VMeJZLRwXboEg5ULSYY7pNjniD8rZQck6HbzbtWbNx",
  "key14": "9KCKtTRU8AWVWc2JvEnhjN18fRLV6ZD5236UqdfQHjPygfuJj8tHPM57o2CSkAVemtnKXZh5q974uJkBJ7yZ3p3",
  "key15": "29Wd2jexAXEzvZ6MWeyievfDKhJfggELRo5FbnpZZTAogGfrKz75iygWKZjc3r3t8XrPoqEgiLtgJC9aosxmhAK4",
  "key16": "DiQxkejj8U4EGuZAahWRqCcArYv8pcxrWF5LMCucHfmFiUFa1EzRiEZ54Scu8w1Y3HuVmTr9A9MkdgcSiYEwwhE",
  "key17": "4YwzPgu7kAYNzCwwM58rN33SkaNe5epYfCrh9nJqRfx4ttYWCeqWayQEysKg7DQtsbx3G53JbuNsvY2aDRYrU3qG",
  "key18": "5Cf7TAqrR4BLFia1BVUD4QhizUPYy2CAQZRbNBCLNvycVHZGFxqe1GCi88h81MQe3Wk4ypqBTL2pPQ8oiCLvaVRh",
  "key19": "4jzkAx7cQq2kX6yngkS5iZNdqsuDcpHZbZZ3rwcko7uBo3KSFCygkPAxgugsaPtjx3MjdjnCjHTZx3gRZFHz3827",
  "key20": "3J89Y1ZzBcVeLmUoRpoQfdgCa5uPEofHhm5g4stGfuNJWcTft57uQDkgATh1ycZLBv3FkYrTb7jDcfxnZbJ1YuB",
  "key21": "5fG5PZjuHsCWmCkfnUu5UdMWSP5wDPRAQVY5dSVN9B9KTsgogcNA2eazG3AkDyt5GsC9FxaKdhfRuHcSrjYeQKUT",
  "key22": "8ASNJZ55pA7Zfx8XoavEMuUJx3LoJ9oMVwAD4w2xhu41n5XH2NwkheDo6ms1ufeStYpnc84nVNeLwaYd8LTUFiP",
  "key23": "spnssNQoVmStBxQ8ss2YxEKZ3bjKvsyDsxTkpG8TxuyTSNaZrQNi3YUv3cCjiChw3kmdS9fF99UrV5Q2NPBA86M",
  "key24": "47Vc4WJ9YiHcyKdqLP1BREep87vXBjpykkm6b2qr8Rx2TAwR1ddYqtouS1UDb9MZoSSTojRFshHKvS4fNPsao49Q",
  "key25": "dMMo1Ej51WPZJpL2dGxkvt6hLRtP31N21oopz4QS2cjHhKt2miZF9dbGD4R4DwNxJVr4aermY1YzXLBDB6MvTVT",
  "key26": "2NYU5heKyyKnuag7ykvqCc9nYmZHD4zE87N6aZchemcPYBmtFYEVxG8wBSARmufhfyAmjDRVs5yUzR7qrKV124MR",
  "key27": "2MLmQgtBPVPS6t5rJSuxZrwRSdiojMhs2PijABY27GCxjp81H51DEoV3YDEpFZsYEFtzh28ggPyzZyjSrboKZb4X",
  "key28": "4L7ddDa95gxuVWWBiEXvhMuMdffnXXJebhYF7wDKn8QGHNxjwg6uAHt9SSWYjuProNUcMR2Zz8nfnU3K2ugLmPZY",
  "key29": "q3qhwLmprrNSW8wxFxRCQrVTwnUPnGrBubiQrmFZZNkZT31iCx6W3a9MqKU2uEgqir2Drcpb47swBDiwgWBBBta",
  "key30": "4NjyM9va4cG4fp7bHtftfxVMHzkaHyGmumtHb4pTC4EvaJFSvjko3ypETiF9HDb3XGzgQNxkG79WBpMqMKfxFDMy",
  "key31": "ZRTptxo3oLZy9d7ecZFYjsF3ADnCbQ9Sm5JE8mBHfn5yw6kM8uPdGSuHc4HikX2u13XG9CCjqpBtPhPHVHBo8FF",
  "key32": "2GwiuNr73JG2LydCmApiiMUnNUdE9HBuvmiodASiXC5uZMqX76CGvhBYG9jtTF49eeNHRMf6Qm5mq5nWNazkay4o",
  "key33": "3F9rvRDvf4hf4RbJeskdaMNTeqHkKKRv22JZ9KGG352i9Lwt768d2kmGvyrvtnzQv8kxedCjhpvBkPGYPbhoRY7V",
  "key34": "4jwkzXybNvyFCaTNRKRofKUt5MYVDtYyRM5NBoypq4BtKLVBibVoxezFgQGX93X5DWSzKYmgUdGHDe5YmTTry53A",
  "key35": "3rVAUeuKdSSipiLWMajipXSHX6KQAn4g8aWVe2BE8aRJziRVWSFi76u5tL8Ht1WvZ7e9Rmyhyo1MXUT3qCUtNj2Y",
  "key36": "4AbmFJi9W8Lc4NPCFbCmUKRZnqbLVjB1cbyd31q3DCWAgeC7CjkEu8bEuB8ur8CY4tjYZE5ti9a3n3oUt6cdTi3k",
  "key37": "2HNNWCuVVcjX4PV4UWafddCyhfQgVb2ZrUdhLcKyMRM6EVs346zQdahgawRqXbdbubteCjp9yzsDt65Y7ewFusjw",
  "key38": "2X6NhNccsm5VYeWBJSgnMdBBFXXGYaymKYihTDDzGVWrL5jRpw8tsQPhaYRtiRJLQwyhrvXYcoQogvdoCjmQTJWH",
  "key39": "5b629uY53z5mFmYZ8ud7ZWpxCTkMQrX8KZVZBLRoPpm1phDvLQchTVTmVasmFZZzsB6L3QNebXwFcjjxB5mE4Yrv",
  "key40": "4T17XAKSt21jb8315HrfiWwSFzf7eiZnosxzYLsAeuYryBsFg7F17bb4i6PWkvgfULzhCSJGbix6XLAL9rM9yLtJ",
  "key41": "5yDBFuW8FWLJCX68y9vjXavyL2zaX71NBBEmkqzBxmfhQkg8P9oFPgo3AudRFvgn7LBsFQAeNvm2x37zkSXatG7U",
  "key42": "2m2nL9NpFvGExdGnUqaNjsVWcBPvhGPaBMUCW45jnPgPxi1MeZWY5h6ASoupgaLncRC1MZubPg55e4QHZPLzsDMN"
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
