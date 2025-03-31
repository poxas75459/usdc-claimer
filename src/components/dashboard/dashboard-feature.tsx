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
    "5dC1Lu4gepNC6ETjo3uoAB2DWf9UNhSfb4rpukPRtSfAai7kGLr6dWxt2UR56cmi9yiv6vzPaPQv6DUBPv3S6eUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2juyH7EZiwUi4C6Yqdhmm42ibRoJm7D4QMQkWFC2apYomBnJHUfnA6nYnxqxJaukyukBbzBM5bSJtiAAFsQovVae",
  "key1": "rf9dRbvt36F5pk9pVnY6pS9jUJgtvnAwzco8T32BwWLRPgzUpwR7iC8akvczj8zSVKMEKZgELatFvtBtKqHgpEi",
  "key2": "3JEJP8tii8CVS1NeErKA55nGkLVQ88mbtpXSy2vWMAxYaQWmMp6s4UpWKycfjkare4bGs6kwNpgwH5hW8b3eEZoa",
  "key3": "41cHhmPehDGEcoKyFF276bXqJ4oDCQpsZtWQJLaNrScpmJMVQuieCkpLp8sU8tTf1xAYe4sACqefLznNuq5Ls8ZV",
  "key4": "67oEBZbfQK5veKdKMyo9gfqu21ju2yHyi6DR6iuYbzN2uhrR5cw9xzVH8WgHp1tP4YX4NhoZ8hHJKoB4MzAFNnAk",
  "key5": "3M6fFsd2dFaMwA1FbCQRXbjA3CUFHg3DCELX6bhfj97PYSLcJvqCPkML2ThE1MRD7xxgC4cAsRpkJGaMPtt445od",
  "key6": "4ZGM7DkdwgvAXnfHYktHcfemHFkmyYevZnDdSvEStgjpJuatskpbxzvBaN3Skq1iwHVreaVG94hemK2RPUXbe6DH",
  "key7": "3LJ9pcBLgidRfJC35E9vjrz7zCcHB5d8XgNgRpwSpbtzxznkFAS1vJrASL6y72offis7xUCoXJ6XW7prcSne5Rgs",
  "key8": "3fktUt2FWjZuYeb61b7xGqYJF2ZJvUPUFAhiXBt6hdXkK7esUYYsVFXXNTcFVYTi8RLAWHxmcvVW4MPeiKcSbFzu",
  "key9": "fomvo3taYXCDayHevTtCJDgVmricGGp4FLDy5rksAxJZzsGL7LPcvSA3WVr6Jri1oFhT6pi6hvk7us8SReYmSZ7",
  "key10": "41wdk1pDXZYT1nTQgsFdPfc2VSCsjCW3degd7QDeN32S75P49jNbXpcNmMEZT584JGvaqr6XWorsAYL963313H3q",
  "key11": "43oopxFyhkrUMXdL7pynDTZLNjSNxgY6xr2oxsAJuU7mh56GTA8zN599Z8UtgiiwspEDojoRNeyvftuALEGBCmY9",
  "key12": "3n6PF4hnLtjpCqamh7Mjyswktffob9YM4XdkBWZRFW5dYANCu23AacCUrJLQ19ZWxJGmrjcZLxJVdnhVXnf6eoXk",
  "key13": "G9BPSx2WTAr4AhY44ua4jGFA1Fz6FhPdags67pqFXUQnCdRHqXTJzKSZEkyC4osKzxGKN7yfCnNGcEezCHRQPx9",
  "key14": "3Cr9my3KakruB7MQNBGxDMTSGAfToff134Mj7RLHX95CJr9qaupoT8z2jADh6UfMLKFBcjDcpsT5xAeqretHMtgP",
  "key15": "43x89aAjRk1vdMzKH5vMz5xHkjwLgkL18Csrm8NgnmJ1ouUiWzJXPrYrBsRQRhQbSqkU81oVdpihdCzoiJFhQNCR",
  "key16": "66CEnPhC9EtCEyUFUFsbNY8qcYJNcUGn8zELdip5ig2khxfsXNuCDM3oHRhUHmWVfq7yZbNnBTsgm5ViNzxSxhpD",
  "key17": "RytLaWbvL6pPrpbK8SwXDfnp9CsPUFbwaDTpRsUWQiEUNxoXFfkDhGHhy6kJsTCCFCD4fm1uBJqUv5FMyKFmxqh",
  "key18": "2mFpGJcvxucDcaE3RfdmjmC816aWUhHeCBEpo1zyr4zxG5aZ6jamaihyUfWg4gZ7atSrepCP5ut9MbBMbkTNt8KK",
  "key19": "n8hGFwFVHXU45rhDma9Na5BvxE9fqvfrtkgwMykF78BJbHEyGynWtoQ8xhGpopjjkSdm2fsuh3KU6G8jCsyZAch",
  "key20": "48Z87rB1Pj8cKuswVDtWVLVeKr8CiKYzpdmhn97SPHJdMd7HK77PkbYM1ic5TgCo3X8eNoqCxVPAmj4PneaR7dUi",
  "key21": "3mueYPTz3HUbts3jKtMFwPLU1pNxvBmxJHaRphG9FRZruzGpRyhRTfdfPn4qt8N3fCvUN8piWErpJFfXCyV3U5dQ",
  "key22": "5g2fP2LMuU33sVqNk4uAf6y6VgBwr46b6YA6GumhTZDXQnKHneCrv6NuVhiPhgTStdorryihWNWcMwVdtE3WGEfM",
  "key23": "uWVPkeoMKMVjWWXzN3ydGzxvuHKPzgJvwbVbLmjsLFLtTV4GLYHZq8aYQeeaBqtZFYxwx9XCv8VXZk8jyg79eHt",
  "key24": "wG58HQPtPRf3dx1FymMbLmuGE9P8jNYmud6WPdzgn3JQJMykjbXQvYi44nbdwNHdJek1TcCZ2VGnfEFB4eCfYf6",
  "key25": "5GRDaDbv39Pqy1oxqYMszzg1wrjfrbHcBLxD4F6ZVsZcs1CfZYhbYwCsQ66axJhgQM7jafF848wmTEcTLnYaFGzi",
  "key26": "4s6ZaEbWCBFTpj7CDwTX2Nnsmy5bFMUw1NN88YpXyfraWoyouoart52cwfVTK72SMGWHgvvyKKL7vcnRN9zsHAjh"
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
