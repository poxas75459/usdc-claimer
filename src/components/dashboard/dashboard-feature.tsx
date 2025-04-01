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
    "5EE5UhUNYRSwSLH669fRd3RmSWdyfZd7hnTTvyL8kFvvvpWmL2W7tpPzR5VenCoRbdgDwFzGAbtCFTxBBaHsagaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "riZegT2kobYdWx4UEmA7AFMVRyUoiMoHehf4jCXncAUTsGhsVom1g9L3REBZL3zGnBgKacVaehMigLvi3wGuv3n",
  "key1": "V76jGK64VoYePCFvQyNzN4yuJ6vZtgz23coc8xzCJjukanxY7BpeSBCmHWnLrZkUziEcYJaFFaNef6jeZN3hdWN",
  "key2": "474PWZKNEWYBgN9huq8NmLt4JTdf6bJbVo5TtFfKFjqqvZYjuTLSSvkDyLM6nnGtBoF1uG5M2gdkJFVeJEQdT7qt",
  "key3": "2qxqvxD4ocZ9JegdznzHnAP1ymvQ79PfEp5mFKLpxbU9h2MW5LDpCDXpc1UDF3CpKR7sB3NyyDpQbHT9Kkun3FQu",
  "key4": "4uCHkMWAeMqsQ98XH9tvSXsiatH7ASLPgCyYDsu977QQnNYsfhJSzJ1HmdtoH5h2eed1fxEhwPRg54TaEGj8R1Fc",
  "key5": "52fvbkPLiY27yNJxXUzzDaMNbxTBgDeaJiaL9kDpb1dhodmmSUWgpREXytrFDvctYYHAJt7eyYY9aK3U83UDfNZQ",
  "key6": "4YRwYvpats3TJ4HcvjXcUpaWYiJDgDe9x8irVnwkHJyrp6uBGUividP37EExU7abUtF1NPfnt1MnxxNv63jDGsNk",
  "key7": "e3uQ1fWoCsdVr4emLUSFZUVwyKdHgcM2mQ8V4qP8PW5qJW2QZFdUTpaCag9ma64dC8WcyQgBvotq1inw69whD8K",
  "key8": "uoBwe15vevsgwvmh3aqa6NMonKUF5CWa3BRdX8bFMw3iGzrTddm3oqiX31jphrDJNZm6nhdPuN37d46RnbuAoMd",
  "key9": "4Jk5NZ7cf6wJfGd7XL3jtzXFauBtZPWPQe2Ppvd2sGEzPn4Jm59922XLWUevoYE1Vzyb79FuyDSYCEDR13VVZDEE",
  "key10": "3dMubviTf93fYA1nzoc6ej5FiXdNR9odvHGUEJEwTWqz4t5uLvSXtGpwyBAfR7DB96BGzcs6Ud2NLpeSQ3BPoyhc",
  "key11": "32R4VbZmHC6hbVLVKaBsZRt6tHdeZX9fQPnjfP2ECRmP4yNffSYgWm2e3GZyQ8SxdRXia29BF6ubFCQMLrVDJhUv",
  "key12": "bJwsvFkZdc8NSyUXsR6RnjPv5yyEuPAJEMuXL1jUhtRpNyZ9KFSNCtaWKxUWVGLkpCrHzKEmYrMRDUo4o83aTNh",
  "key13": "5Hsv2j89WS4sKHfd1g456GUC4xSMu3YfMykkW1e8NY11BqUw4smyq5ekjHDUd8nNEY9ahAzcZyNtWYyhyojGKzRD",
  "key14": "RFiHsrU6146Dv8MwpeV6iph9niAxATToi7GZJQBHbHiwrPEZeoeibvLjMvH8E2hdFpuX5MEFBLauySLH86Pdwjh",
  "key15": "5Z1wtCvqf89ogUMyKF6A6kRgE91RTcEN8eXHr8QwPvqBM7yBq43vzCKHmDpgK2qJRQFtXBPc4n1t9nG1prsJDauJ",
  "key16": "2yVHJVtXmRPmhuuLn7QwG65WKWweAygk54LrfBDXTaMZbDNFNop2JWKAmpcG32qXe2RcfDMmTaxa1rpCUrqaGy3s",
  "key17": "kuavBw7zt7n57Xjc1m5A2sNVdZDxVjd2xti8fV25S8wUXGwaYcoMVd1SHcLTBeA4ekyQDPmxy4CTqxpEsTBgS78",
  "key18": "3PVytChsyjo6QLqy8ZYctYv5xkZcFByQHw9WfYgaxHvhgFToQyCrAjRB1NxQEXT8MrvsNwJnegjcMEGhi5r7jXof",
  "key19": "3Uvg8ddGUTbYqP4PVvLmnx9YzLUMUCrMkYcJG5iZggkognzGrAoPQUxowLpSma65r8gDx7jcZgW23gAaA7AwLnKV",
  "key20": "3wdbP3VvQhty8pn4bea3X4ndmiwNYQZb7Q2VUSWUwVcCUtkf4ewL7mZH21VcZMGKEiTEvmF6RqXHUJ7BFQr8uRNV",
  "key21": "4QE959Tdsn9h54dcxAD4ATZr1HmBav3Dfymok8XYQbo7RVxFizYnXGVpb9HwZJ83fqeAh3NZ33DWiMucqiByQ5D9",
  "key22": "c6HZhMFHinnnofoo9GrTfKEz1rH8X5KcaHdSi2rkMP4HVzadHGmd41FMRCuERRmkTfKKH4tNLgYEyrxPc9FSFtR",
  "key23": "3KhFLumJWKJkpfBizGqXui9EoJcWz1wYBbRe4T97fXPbMP8iAR592VMpg8kzfwF4FCoAfXDnQ3KVYpeyhSt7x9ph",
  "key24": "5976gGEymkgYLKRBCQcpAmERcBBGwu6UxZo7BiZwmEsWDMRxoYaW8JijVm9BEF9GYXuZEbA3p4PuAWMvzRo5MgqZ",
  "key25": "52Bzivoki7WN2agPggYyUXK6jRAxabZuTHc4zodUNZYJEGE9NQh2zLojnMFxYAx2DY2bqdjekwhSmrLbLJ9kEzmr",
  "key26": "4ydh2s3j4Z2CnYUApKaJ86K2QA2gXVhj2ZhcRDDbJ2jmX5LPJzFBKYgUr2rqeBA1HN4AT5xSiQuaPaEs8Bqc5WAV",
  "key27": "5nj8W8kyEGiVC22sZJvmHdJVDGvkeDK5hfMGcKiQjt3VHqvR4LDkjVVgfmb7U9U8vRRXdk3hHFmc7dm3Xzi579zj",
  "key28": "67qbnfVyYngGNTwJYabJZZLmzASTZ2J8nK7yc8rcGj295XRmYAYH2JQjJ6P1zikcYeFpp5TxgLEqFUSfAFCtvpWf",
  "key29": "5HKei1x3Sx5guPEKQKZNjHAuUT8sbbbrFovq5mxqx359jfaeRZu4NqxixzY5CYrL5Mb592Men1kvtMrDffWStKcM"
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
