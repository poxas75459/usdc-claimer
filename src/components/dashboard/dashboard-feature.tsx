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
    "48Wpaaa97vr9dFyh1oMQCj3o9hm1nywdaSgYRrhSMRK1jjo9JzLTaEs9H5QxjCEyV7UNZjoaEFJyZt4p6THus63o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nmfKm8PZcCUrHVPZTvCb9uxQcToCEWhYWE9cveeZN9cGzJ5rZYGfEf8Pf32ekizHxSJkQyjubWRqiRVrxtCej1R",
  "key1": "2mfEvMuWEX8qZ5QgGwHKADHCXue3nyeYcM6xe8fj8EQdTobXD5vPqgo9B1hSj6cjzzZsf6KgtNQkuYC6wf6rrtyi",
  "key2": "2HXfB3d3mTEcbg7v9tdoeoqKFe9NaPSWGjzgGo225YB7SyBUvezGWUJJUbzN4S3WQDqcA6dY8KUFe8QQQVy73Mu7",
  "key3": "5iPXdMfYyVfWz8oiHhrsfCLRXfCS7o7geBhWErQQYhud4ta2cgBPkLR9fRN2VvyASqNTLNS1JiSRfQrayuFXaiKH",
  "key4": "RS9h92PCJZQ7Ac3MZd2RdZKp44tXFpve6n5dLyJGDf64teXFWgKsHP5QJUdiGMZ3isgQm2AsTWYGTQ6jXswnLyv",
  "key5": "TVecGTmZBUUxXicNG17wRqh6yC5YtuqosN3HGfQBSN3o7XQFyiW5ReCRAu8Ws1rk1SkgyJi4jdZaPE4mS8KiEHE",
  "key6": "hNrbqS1CzFxaiyTv6nqyNQao9oEpjVG9VuRChEWeTq7rX3cfWzKoENEA1XAPk8ZuL4ELqMekGX6Fvu3t7GpYFew",
  "key7": "r6yjZp16asb5cogi5zGbsuzUFdMKFfADjYPXuCnaGhu82WeNabYLLTx8qMKYditP7msBvX4Gmy5NvkWCJDc5BsW",
  "key8": "64TVi114om5a35DFEbsQpKzRmon8fjcm2H9UZc3MBcC23cJTD3HR6dpaxDpBpGWkRCMgSXPtF2c8nb8bb1SwgqnR",
  "key9": "5vpcjyqqLQkqDkvah59e2tRVqT6293m1YDDAXTXJUfc93LoxwmNu8fMBCmkboLGwWDSNwK8Q8x5ggajMF1sQYhge",
  "key10": "3KNDYNP63rRPvNKGKipSLqhXqzJW3P2jgAMxR788BETLneYHdGYbSe3V2L1nVE6vX5VsDCT1R7aJWMGt35eVB86s",
  "key11": "3crxp7qbsTGF6hc8fZvMEEttr18rYvoHFXg2qNv6GdmobZL7PLLKDXpjL9nXTsMtGx38KFtiQZsoYyNKaCkRreYJ",
  "key12": "61dgATGwm2tpa9BA6fUN8iFPKNvhnXzNxDShCMnszeheWaXtBvw7v466TUivrGnmR2qDwWqiWV5rZivJ3fxM2Gxd",
  "key13": "3wDy61T1baJf6jFUec3hiXaM8NDYe1gi11nm9o7acQ9qYwayseJHCnKZwb4hRchxaJpJZ4VD8zhSWNCZ2iV3y772",
  "key14": "2YMoGjWgi4YvRB7cWzkAttWntWPdQkPeqkX7BThpjvDtfm2CaFRX4XPvdWtWm2NxV1BihtH365kmLjjiiXemrkRF",
  "key15": "2FJWm4E3uJp4jnH5FXCoxUM5X6L4c4tnJWMShZxB8LcafLiBppqweb5NBTnD2x5ZubeeiJZq9xUHfGFiVWAhrfE2",
  "key16": "B7uzfweBzPwKPZu82ty7FtnrLJKYKrXquZKEdfcu78Ma9Fhf5H6AHVxUM84WZsHGJMLB1zXrDPgmkxCyDFJVDoE",
  "key17": "5djgDGGiPktaoiKRgEDsphsQSMosSZ2tH4V9ForiNrrc2PqMRwk96Eyk8p8HodxyeZskC1pnfbyy4GmZrXttMcnT",
  "key18": "jg8a9Y5Sjky7f1jCpDj6GpCBhCSEkEZN8XGgZAT267VE77t9BJ4C67qi5SH4tfGg5ae1pegfuc5qRgbU4fZRuXb",
  "key19": "2xrwv46pAwYLUSkXBe9q49HnFbbP9VRxAsATwiD5UNnE5mWPQew7TSFeWMVtvjedBdzk33eqN2pUc4VcPE6L6ZoB",
  "key20": "514RAniJhRashCbXYKbgpjMFXRgyMo4iXCSqw4cok2nXMZgWakN2b5NJms26j8WYekkmy6iDZ67T1nQZB8KvzGHq",
  "key21": "4N3wLewo73UbVukNnc5j9zqZ4Qee3he4YTkm8meoP1E7hyw3JiRqzFM8jpKsGZnq92m51TzTBorBuTPVZxtSGGD5",
  "key22": "tRHuzWmS7oRx8KpyB48VrjMXXaCT4X9GzrRtidqG3bGqDe1tQKMcwMRk4QV8Zg3EQRLyyR3hdPvkMcGsFQHS7b5",
  "key23": "4R4X1xNiTyBuKF5Zzqeuz85K9984SudZfjkT2yPBrHEMcW7FAo9HqwCVA7FrtoH9qASBQWXXgd4bghT8ZeePDWHm",
  "key24": "5mgGK4kNQjunpowEHHbo1JsZZs1E9oXk7bVFsuJEW5ss5LAUHdZFYDTN14ocfgosGuoupLLH3ngEFRJeK71wpAqi"
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
