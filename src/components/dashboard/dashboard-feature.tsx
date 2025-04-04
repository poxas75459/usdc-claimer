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
    "3ibji83RYSujLjmJZMd2BrMnAcqQqZqTYEB6eyTGkFCuBusx7ixHyPtz9C24Y1owccv1oEKFpNbepKBeHWR7k5hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Tsw1uqBoQA4KETJSSJVDjWsdHXfurBtpDVBdX3CNMyHzjf5zKHyBPzjhGHiYvV4pRbcUBq4zwzffa9ent8jQAR",
  "key1": "3aJ7RoKDVrJ9vQHsQrtuoMy2Msz1ZEg3SvThWpiVQ33YPgkq4w9xmbfThh9kJVjqHXEFGT4jiCjqGrwJYo8AFA7a",
  "key2": "4Q8D77qqFpjx9QHEXvzsA4xnAvakQZ7wKQAVkLwYKmKVNS7VQqqwW1AheFBRxrsFhau145XQp9jafryTgCn6UYzD",
  "key3": "2YfdLKtysMvfLN4V4nzFgrK4iETQSRxayVvBnz5BbY1kWt9ZcNEcaPXmFwsMJ1z5QLZmgyRBSymvmUADfry4MRCU",
  "key4": "4vuoFz5xgEYsVD1kzZn4DvzGZJD9s9goaZ8zU7nXSr3fWVk4AcV8gzuZXz9KzzYFg2b3yy44R4BiLdXxqqBVy6U3",
  "key5": "5eiUQsm3dP4f9U33jziGa2rwsDWoHgGtZhibvLDP3tbMi7fudirV5JPpryoCiwi8niuyjtzW9BefH1RnqU3UybLC",
  "key6": "4vyycfv1Edse4SKZojWx2VVU2Bnn253yPivPLKzSssaJgz6cUdjCqCndMQEeKGs82QN4pPQmxx4nqeodtnhgLcD7",
  "key7": "5RwxWXsLyFoicUEq1iLNT241rnQFFWdA2TSHDvGvTWZEub44LXpV3N5QauABjDCj2DJL2UdnfqXM2vACHo4oKqpb",
  "key8": "4BpBh56aRFZ2ubFTeQaRwso1LCpqEoHVDW4vy8yfvY8ginYwThqziJN6MRq6QiszGzdct63DZv5XKugMwgPMkDXK",
  "key9": "5WiUmqTtcBUtUnHZEaV4sXJnEdMt2WSZUdHH2ZAVWiNdCWvWiJY7mYFNZG1JHKcuB2HPPhJtmtqNtQXXJfZdjijB",
  "key10": "29poAMydWPVoC3okmw3icjNCSxyyRZ9pmi6bDA4Px1RXSwarcKAu5d6dyfoKhrXqaFwf7ir3uKJmckJPvovutPjT",
  "key11": "4m2TeXBcLFR6hAMPKfEHGJt2WREYHSgepzFYY6FFbhL7ymf8pu1bU7ibnVK74dmTZPBKq4sHMXPuWCjhyKu93Wd5",
  "key12": "3pe8b7S27KCAjk88hbUnfHy2wwG6FLVBSXDVszFg1n7J2FTU1127amVkumrMJYa8b1FVwYDsCVQjvDxZKBdW9bVL",
  "key13": "3dcfUDUMqaKknzweip5uGGMKzjvFqgCQtza1fq5YCRRsZrjLmWWaPAnc4JtbNjoudmqbFRceiPVYxTTxKYTDfeWc",
  "key14": "qFcmbeYPCpmxQfBKtTxwPFZFCuPjHcX5t5YJwFSqvA5rBDdzLcte4CLBttLd1ZbTijPgJos5GrqgadLS2dVdu6L",
  "key15": "ioVNWoatUp5VxKhEUfBwfu5UUHRFeCkj9uR2xkdVmkhrJckzCnHgi2dAzHjdqY7f5tGFKPH9d72QYD4zEKEmwn2",
  "key16": "VKxxb49NGB6ocpuJhmESZUfqdkVbrALmKbf4KvK9C81j7sf5gTVs3GoetjqkqqPvQLXRTj9wFobZeykiiRaBTag",
  "key17": "3AmRKuPN93LqUXDSeTgb2CYwUFMWHwet7K98TBKvkETLh4DnHYMcYcpzZpJK1zDLF7R3DiG1VwGYdYXnGJD5kZTY",
  "key18": "4ToRvbnAHjLe4Ykwrk2Q3gaKhegyfSLQdGi7ygXHMmxtucCVRPmXLj8V8VTqsBeiv8zn3z8tSjbk2GKpoGv1UhUL",
  "key19": "4PqroaJFvZmBvycLjGpvqk5WAxzdjoWDdAFYJemqD7MPbDXQ298gaWQVkFGaX2xTSkvG8pX3mhmxQ7zTFanBzPWN",
  "key20": "2umfKjsSVx6hQXVAJMWNeXPZfTmZav6TgTTJsGUaf9Z6yA1MvvKnc5JSteNMN4vib14ecVyjxmCFAy3ZMySv2FQh",
  "key21": "2cGhnU4rWaLmERwfHKqVbBmiRm3M8sE2k2b17dUg9o2vmFoXwUhio3V4WWRGfzF8byLa6AaXgdgGgQHxHMNCFNBv",
  "key22": "5UNX3FFyZXUjoFwWHUHfiv82i2GzexDWCKQ8A9pW66ZYrXAXYvCTaLZeyvc7q3EfGtEBdWL38N3o5mq94hsfP2n",
  "key23": "5SU6gAsPhKfyGdS4aa1VFUvpyGLQjnej2QCsCE4RY4bkpyoTxpTfsP9TSajUL4UFqnJhXx8t1pnDyoC1VdP53YkW",
  "key24": "28FHstgEWKXXAFBvqHPm8StzqXubchWUJLCto4p4wGkEdz5GZD9W7hrv3WfyLFR5HqdByozr4mHi15Z1Jo63qn2j",
  "key25": "2pkoPtyBx3TLUiy4ZTPnCjzJ2jQt8thaZj3AYwFtqK7GTDxDjJQB7GZxsNSwYpsgxkcAftLo6wE1sAEvbYefvGWi",
  "key26": "2dVgtETCDKNDmwm2t2S8yfchoYJKDzvM2TyNizwhXZW3e2UeKMYGyQgXN468UAUBqitj9BgXmXtyJs1kWjMBpPnp",
  "key27": "ArpfnAzyrPpdFjbDHLUxTKnpWceUQ9NaaAzAywjQQojFmpAj22UzYGKCfZvc3agXAkcewE7t6woaAXBofeXxzz8",
  "key28": "2emmBUn2qCBcgqPE1Y8bH2VeFNRDVyC49Dawdqdt8whztkFZaru4YLRyiHNWhgi9o55inUhyZDcGzEusGyqdBrUK",
  "key29": "5XWnyJo4A2BsFZKGM5YEL15pNj5QsWJsbfrEerrnCbLirrYFrnGYQrHEgYnzAA87ohe4T5tgxyvvmU33yfitrnjR",
  "key30": "ktpbhBtgU3FebzYugEpocxqFPtrFKA6BsDsdMkNLuy6Yen38oEGDFj739Jy5USuXCEouifuTLwES2MSjYFWQ8wp",
  "key31": "4TxVmLLN5Xwi2PSL2TXUBJ9yr9wHLEAxxxFb5hpgZVD1VvhxJDCz2avJvdUSqHhY8VdaLWB6VGFqWdJLPt4G2oKj",
  "key32": "4R3z1hBNvJjPFAcGf3HrQwoSpWHZezzgg5qe7g5yffNMxcYxCRwayStHqHzZwvYXVpQs8ZFduiPMifC9E3zR6Nr1",
  "key33": "4vShuk9Q2aMBu4iEeQ6eaZinc6ML1kqnRMd3mk19Hw6ta13HSdoumDyUoqBe98Vw1Td6A8eQ8uBYWBHuJ1Swezxw",
  "key34": "XLxzhVrVCC3cKQe3FKC63KBejJZWnWTSJYMu5o68boNHQusaevcUbnhwDxbVCmapXNmXTNy7WKmUtNL6Z26Qq9Y",
  "key35": "37RPTeaYd1edaQYbvrBtM1oDquvuMKJYiWeNLg9gNSRtkw8bdbcHiqzEtMRnxehqdczMBv8DCjg49uGX6zaAMNof",
  "key36": "2dc3AsmhtM5ipK9t3kXR7u5f3EDp7t4WAhkX4RPYJmVBJ968WKCYJFbSSz7yu8BEhxy8NqoSiY7ph73vmnd1uTyy",
  "key37": "55py9xd952C4wXbxsumntaVKMMSuojdYnZskvDPUcqVFnDPC2fDVgnGM6pkUVvQ1sT4829TTBSGv4JWkHK2fbvyq",
  "key38": "4wrbXq98CG5a7zsFSm5j7gJCNVcA8Pt4J6LnTbT66uiHX643oEhBFWuE2q5M7yjqf9sM4MPRK7gNsZxYNMdK9gaF",
  "key39": "54aJbpxp8cviabEekA3GPtaoCGjhksfwiC57LMjz9LfUu15g3nbG7x2wePnMTyyXYG17eoAy6o4fXmZobXHCB78c"
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
