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
    "62yTTYM6XgfYhU3a3iUT1dgCMcxaGi2UdxdvGf4wCRjacQwwtjrVKvh18fBSs4UsiEvFnbvdCNUEeEySZdsm6xjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvGMRG2wseXe8iPiqnm4XKU8gXRNHTAa8UdU86WeBMZYaGHw87UZMMPEbUKjEMuBYAP4hndXUdrZBEBjRpQu2vm",
  "key1": "2xx7K1SFDSaAvWjbCo14geyvK3dagsjBCspYFEWto49XsxkHgo2AC8EMGyqR67P6aWR3pLL9JptMKoeecs9YBBVw",
  "key2": "5A2gMsUrqCuWDAPYYyG1YFuEggA1KkSbRSifPyfoN2fGGfXy9KXw2wKjJN7FgFjbFuCHnQFbBwpfwX4aMftpzAPG",
  "key3": "2ucrCDW6mBMFXKJjK7bRV7GgcxTcqMp19SuF71VrgPQHjEdHe4BUVQyFkkwixu3UhctoGKzZ1je71sC5T2mtDH7y",
  "key4": "3TggPgatrQsj2EUGH69hyFQHpFCHRCScv2asGvey6aVCqm7CJ431fGAL6pE7A5YsarwYddgz6sRsto9qZBmNVDqV",
  "key5": "3o63GuUc3T2bH6fb4QHMFdQ1S2vtxSq9D7yPhfk91XZxGkQBGqW1hB3mgCXXt4KL3aw68eJUAcjDAAzca4faHPLy",
  "key6": "61HQN7YEu5SKhZUnAqyrPrmrRVsvtcQPAv4Qj1csGGM6VU8aPUAtbZPCXMzVvrhd7849HGgvDumDyYXcp4pHZ5Hm",
  "key7": "4VuebaYeLkCGhhchT9WQSL99ZS3gGeyDGbVVq17PsAHzeG21T7U2CXTm1iNgAbejfp6us1rY3uu7Y6Zsf2D4Sf5g",
  "key8": "4MtBfEr5bQXUc4k926RjaUixB81srL2WEqdhWcGduMvGzT1fbAxLjbBLBS5CksXsx55hpg5VF8p6AGVYFRtJevxU",
  "key9": "4uSNjxp9pZLayve6gNCaaKpaKGTZpNTjyFF9UTqhnHxh6QikawAGyn8wJg3No2kDEkjQXW5S9VNBGDzZnmtuAMVn",
  "key10": "584cmRpdVHSKegGzbcyXx7mLQyM61McuWF8AqmtASWePEM6vTQ2Z2ikC1i2qA5t7htzU7DR8FJ26eArJCLApqW6f",
  "key11": "3Pwjr626u5siFcbyrBsQNFR6AhYKMu3HCpU6ud7JuSc8sUFdJSSsne42Xkq7dsRWJGqApBks7C2qn9uYjqBFShJv",
  "key12": "3AtnDCwipDh2acpx4cdeKTnjsYZb8RCHNg9gzgc3XPuKaucQt5tb9kS21YT5wjTQQ6Q2cLiV8in8vfm4hhucjeRF",
  "key13": "5LZHeJc94XTKAxcZiFBckyFCwwAqoovsN7w3mcMJXvwohW6pRCsZT2NugPdBqSuQp3r6DQr8vR17B4QMM98nvKhE",
  "key14": "2EMqFtoPeoDcnDp4ims3nd4FEwoR4MjBjgkSXCeu4S1npDTMbZTrPteU2ooYu9LHJ5d7Bg71cbPakHipQce7SThA",
  "key15": "2BSyYMBKEVBudG4fnuSqnuQ3oJubF7fjvWT5fpKu7NkfEWRmDJ9AxLCvfppJi6kWEPYL98qaYCcY6MePa7mhd1KA",
  "key16": "3KTvtwuA69cyR9kAXmYqM571RG67Qe3YBNiVZeEptTKHbsghVHZ7Va8s5KVfPMxfLH2SHNKKYhWHFnXG9PaX5HQK",
  "key17": "3QVBsEBzht9ZSyRvPyLmrLWdN55sRv8zcZwG2giyWBqkck5rkvBbRwSmM4j4nR5SnqiBrPyYMYXemXW1XebvX5CM",
  "key18": "381G6yX3frKh3rXG3oCfatAccJaEUXnGiLkJgdSpWZd9xwcfRPCbaJCJYZAG2a8mi26Lk6gFrqHtsT5NmtsarjGq",
  "key19": "5BiM8t6QX4MQg5uqawmkrfZ8gpKfzKDAV3VgguL9nRpcNsHJefPUhebJzijX5ivZ2dh5XhMF44KKaaUmH76rYKMm",
  "key20": "3GitFqwNq56GxSpAGgz6RyxXCMBLB5Gn3wiS6aUoXxwSvuQtjeq9PsVt4k2cRxvdsLcunt5tcYmRje39boSAd4nB",
  "key21": "3sLBsBSc8ckRG3MyRDc14N97CGhWhLN1xk9DMPv6BTqxzZA43mTrqHaFn4S7WDhhfsqGWvKRwAJkSoRKmSWsdGw1",
  "key22": "55ekEWVRH9ggHYz7LuuRtuw72tk7RMP4Y8jpZBdjckMyRMMdq4A9MCd2vtPZuep8b6Dxj8G2NR393GmkuUmVcbtE",
  "key23": "3N4kCvCX4Tsn2KY5Mb6EKamgENtxUKg1Fvz8tQZpYDaBZc5rgLqBhLF53h1uHzW9KPWNfiAQPzGat8dZaZPiTHoD",
  "key24": "4E8etz1pQQ6UHNf1GUZXmnUvQn4LptHbE6tqGqiU9R3kLqWCxPrT5MFqnAfMviPjmN7hXtqiaBhRBkBt8Ved8JMb",
  "key25": "3AqY8aJrod8JeAxHz1YidpMNEHEDEfQoAFnisxnGdd87cVzCEVA4UFs1RJRwrSF1BBGDoUUvnH9iwfHcXVRABJGy",
  "key26": "5QHoLQP8fUo53tZ9M4KfixEXazozRV6QhzGaP7PtX26QQVZXTb6nTy6qhKX2jnMAN2aihAsqqmryQDfAmc3DYtWq",
  "key27": "47RxrizZvwkCzQtWfBP5ZtWdsEFBQjAnbAbwiCgK4QYgUNaHYTZhuNhNoEg3yiAQVUAe3z4q1rL91X894LBqkjo5",
  "key28": "3aoB64pXAjGbTsFwHecAf7sdNw6YYVGmQ4oNHL4NR49NKA3qKboTfFPyQi8vKq1cpWkW3UBEmc9qmmZaL2Kfu6rx",
  "key29": "5iaTeaDCF4oU63SR57cefjJA9H3StQjStkqqHjdK8h3LebN4VMayM13XiUrYTggEBuvYgJdvCkEQxnSzqSniDwc7",
  "key30": "2qo9afrYVhzxFBQGQKy2KEf665UZyaY5nV2iDFbeGzCAHAerwnG7UUzZsLJezKExo1auREGjvib53CyJ3yNJM3L4",
  "key31": "5ZLm8HZbczZVUu5ed6pZNS4yU1ywMcUfGkThQZeitxVstSTohCicVhTsHTAtcqEwY4yxhHpGYp6bRDLu8GczJCPp",
  "key32": "228F6Xr6hjMiHhVYn5T6VRCSdkcQfcFhmFhd1CbgqY547opkKUGgs6on4rFHzNnn27rAbmMgpNnx4n8hgtMMYure",
  "key33": "4x64VdiUBRKZp8WctRRrSFeoL4EuzzWjz9ZfUTmEK3nCEpSNFN2UmkCLBAVCkL4bPoLBj5TBTyo1g5ncNiZE2vYJ",
  "key34": "4jvS7NV4suqrd9zTMNBfQS7VGDTivH4rsbkUDM8yC1dN8hnRXQqP5kMPhCizvYd715XJbUpAqfkrjWkjxVCpMJMu"
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
