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
    "2N3wXTcMxq7UzE166vvEBDKKVRbQetbT1FDb1RbyBnB9pp5dUTyWvWKhiddntKMbYtNHcf94BvEErxEThHC4zyiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4BwyXAYFMteYj33XbJdtXpjdbKcNt15ZXVsfARCKtGmVVC3rqo7uBbzdpFR9QBzuvsvUPrKzYGN5CZd5MQUKBP",
  "key1": "5tLhkBn82WvnSfY3gkxtPn5zgEa7krC8JM62riKdAMFg8kUc8FjX3HUudpCVoRZbLrYixJamBJu7YPhuHDCsMRHT",
  "key2": "5X3QE5sr1QTsxRMJqKdKLLeyMpgvJbV64Qu83j9izSDXmbSXmT19DnzBB6sn1RNDXHSU3MAZwYrqm9JPv7QP58Db",
  "key3": "2QPBk77vrDQnsLZrD3NkiUDbiQ555F29z8NMxsj8BsMQ5u4j8Shz4Ai6LcKXShnLGT2TDMZe6XvXRTjygwtmjEKh",
  "key4": "31UFEnpaTbpTDPCBkMEQVKUMRHmPjeV7BZtibBsx4i8dYvtorgPiYiFqcshBhAVRjBcEyuoTDkJt3ka7s3t2Prnx",
  "key5": "3QTxKXu2EzSdTWgyiWs96WXRDAup3Xbwta2v24VWV6h4Mt7VPsFKmGP8PVzNpGNsHwKHtfUiByfEzxTNY6xym2RE",
  "key6": "4Ktuo2ctSPGTPSfXqtGVswdkPe3xz4QWMX9ZPsYNui5jVBYHQ89AHKnRHnQxDFM3NFirPR1VVsFKGPraR39zUUJ6",
  "key7": "JUeHRfYunHNvqxFmSBHVSW8DPiNr8DG9oANLoQLuGb7RyfNAER7e492GEqGS45VnnojYjQKfaSKKiMyBEJMhTjf",
  "key8": "21HV1Lpgw4qZ6G1LfP7rmS3kxfMjHmRQkkkjh6ogN71xmA3djDVNCVo6GQWhJe9PB7UuMf9NxeRxZmmiEwdcfyf6",
  "key9": "4eJjXSjC4diBYrdnWNnFFY6EtNermtP6SrR4wJ8rYaxYjwchv2Ah4pJnzpcpwcYGDjKVouXbhQTbxrr9LBa2fHYm",
  "key10": "5U95j3Jsk3d5M6kGjwJGLL2JkiDx84dysLrnvANMRcjZ6vb2mQXFiwXv8DZufAowGxEgnGFvxqZbQd4xbGihXaeX",
  "key11": "271KnErVYrzkMfrmZD7CvNNQb8WRewssvpf7mG7GdSUK4PJ9xUyLGeZMv3z8G2v7NBrcz78qZRjp5xaGdu6fEFHA",
  "key12": "4ekbiNAo84JRCrJGXTPoxJ4jviBKK66LMAgvVatRSaQRjnBDYPZ9Qz1MrqC3w6L8CJcGU6RnpAVh4Mymj3rKe5hS",
  "key13": "5uBaBvSyeRCzMVpbok6ozTXV3wgfTqeYgr85FhYMqBG7WdvKS5PEPRdU9g2YuVAWbhqgbedBewAmeJ4SvKVHJY4V",
  "key14": "488MpqKWd9SoVaDE2iXTpLCkjo4uqm6ikig75k8qQk2FajfifCfWqtzj8TRQpcEQjqY4NN3VRfB47Nw6bqBUDKG9",
  "key15": "4KfE2NJqYvoQNT3s2hsrPSDQ5EHEgnnUrk9TuMCuEe1fR9KyT8asXXgoJnjApvHjcAa2nTh5P1fVfjC76QyrJaBj",
  "key16": "2XZcr1AE9n9DKwvEA7iq8GMev5ESpKkswtL3d8vCtzeh5dAoDA75BZ3WmaqtELkzxiduW6jLmDnQHMNdJE8FHkeX",
  "key17": "5pt635qyKWrz8MoQDX6tMTy4jSxQ9vAToWNKbodLc136bkKwyBtedZfc7yKwHLhD3vVZQPbB5e1fo1LLfQfr8vCE",
  "key18": "2a37qe189mDQDdyLfiGcF35hCwiByw9gnZgg8x247QwSXYFnhNyFsvD83NYNJErQhGKdqihWYEFvXnKxeryT4qmx",
  "key19": "3joN9BUGLQwfA1RZ3gJrh1LEuXeBULhjTETexQXW8wCwYMhNKLxF1Scvmsq8DQ3WXSfFT4xtAGt5FfLEhBMRn5nX",
  "key20": "31DYtgoxKETkX3GVcAfXFT2LHwSVhytmhcDvn4ysVGLUg13msBC4UYthabSNddCC52drZvhbS7sovNyU59CVzocG",
  "key21": "5xaLVu9CeeJoTSnMt7DfgM1SDsLkGNZbLPdmNUSYgM3ykmYqr7wBUtLDor4dG3woEjuiZGgJhURPG9sicci5k3zz",
  "key22": "441UNuF9Hjq8dTXiiVa26eiPAi1aMXuxWQpj8DwFp9opfUBizkwZ43nMVs3Sp1LMjCXZmeqBh1PfEcMzBTN3qDht",
  "key23": "4JiwcNq9oPDoFxFYDbUuKUh77PXPwPVjQJUJ5XG57DVsuWHX9zMN79x1dnP8z5UYyMfVtUy5xxNLK3ETuNBUDbrY",
  "key24": "4DnBWc5Ndh5X84F2cKP22o2WHnkXVM4aAGTVxAxYtAWpRfZ1p2VQnXfi1HF4cyJ5Z9EuDc7BmeQs4zAr5JZ3kqwT",
  "key25": "5fwdHN9sZZNPianp1tJm6ES5UhHx7hS2NBQxfLwyZs6XhdyixU74UqVZTdB5kRZrkLMzSf51EgmbvJy1Md542Dce",
  "key26": "3j3funooDAVinyGCMRBgv9ByaFdnnDCA1Mzs5V9ePDApbnZw5Nqru8PaPHaHhUBci7BMY9CVYb1YyLyqoMKRH62u",
  "key27": "63NbiowRPWtRxo5MkDCtkZtdwvT9fT8ay1AbdA7KMC4XVCjaFUXu6Tu4upgZz4uwqrUYd9D9TWqfdCegU2sUjFkW",
  "key28": "YNKSwM39s4DMsJbskzDd76WCU5GevLxgZhG2MvnuaHWdCbazWes9FdXxdagWss1EyHM13uyXBTn9kpoowhw9oZZ",
  "key29": "6122frx431uKekMQxt9RRdPuEGjsoVFJXEHi2padPd2LVXst1jRHyxn8QGYob2H2NXSxNNKY6z2xP77EEVxtUb8a",
  "key30": "4mVScpYvwzughY5eXnop83ZvCHjt2FkuTtryDH82xbffCHXFmEkgBB5XFuPHP7EZzU1kyv8WWKA6qPeQMAXHrsE7",
  "key31": "3EZgDmy77uHQFvSJcZGAMEQHt9C7YTR6woCer44wYEvXFhk2dKrP6moNETm4gbhU3dZ8LBHRJZnn9QKAYq3HoeJZ",
  "key32": "5ixAS7w8xf5zDpbRkKeChwgJKN1aDE2XcmDLcFqBANsvkxTsTuWngLPYyEYKLYcsJNP2URs2dRdYNYJWLmtpeLs5",
  "key33": "2uyZDRFyu5oyMob5VhmC8aDSwenk6aHeHSwmSzKgBgwd7WCgKUF55pYLpiNrkC7KwfphuM4HQ9ckRiieZE4KSNLV",
  "key34": "4VmR3p1XaTDv8vWygu2SssxpomPT3uPS1RKcDSSXaTtxNFsYMvN36nocdRLBYtfxadonZ4Y6pcMhrY6CfBCwiPRV",
  "key35": "4dDk7cp5k5aeCoKGp4VsWSPNTjVmw99qmDK8KrHBemfEBJZHXWUt3ji78rhu5TbHToVrVZwGSooX6dtbdqefCGiV",
  "key36": "3vLGz2HUNxpMV6SK455ELJemtjzFgsQC3NeejRXPeDKTZr7vM6HdXUdS8hVYFupuDBvSroF7z3mix84srxbqL12Z"
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
