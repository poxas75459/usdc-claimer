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
    "ZjLz8u1C1Pr1A4dju3QKR4bH2uAo7iAPGBpoJfM35Zh8awHdrrMsLJBkJ3dDKq3FiEGCoS4SU42QCmJp8HjmXy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AoVKixVqLSGNFaBfAiWXMfjzuLsNwCKhH8nocutCUVSkdLTA6aUGugKPoirdrVa3YkAx14Pjw2Z5EX9ovNnjdYV",
  "key1": "4QSuDQF86VnoE6NdcsJvxE7qNR9jSDrhofeNQu5K6xKkECWaD7L96dimqCcRUs51cCooSiGmPTDyDVWUQM3tfRtQ",
  "key2": "5LuFQCkpXkHYQzPMPwQKEkH4dbXESiKJTfsYFQPFuxU6UY5gmz4P7nTZWzWLuaWRjnSe1PAVEYSedReiy6CUWEii",
  "key3": "5KXhDWRNx9MGHu6pEcBGzxGfTZBSL943Biboto4faP3kCeJXz3qkRKnikjrvsCn9aSFruqjEs6q5rwgJjTDK48g5",
  "key4": "32ATDXnrgigxX8krTKMAmzBepQr9TWXfkkNFUEpcgvHwKVcMm5w98dKsHwJzxmizYvrDufViqFekz8w3Nhv23Jto",
  "key5": "ADHcKXMBrngQNgSXMdpJwEHpn6EkEuEzqg7MczAHAZGRAswMjhnGRMUPT9HZ9yUiU8aCsJeY3Mn6SD3Lb2A1gLh",
  "key6": "5Cb4uCp1dqvtMhJH1eR4QaDkANRQPsT7tNc7yRZ1VSHGDEbG9uET7bhwCigrkdJd6Vdm8LHvazgkarcPZ1D7je8F",
  "key7": "g3W2UjoXAa4HfmG1L7EFWs9D9ettZdsK9JpP8gwGMB73ToE6YQquez41q537TrHXRGryHsf72XDgCaSYth3SF2H",
  "key8": "22ihggjFEqZM3MsEGbZD3Ymb6ePsqGQHsvSqFELKAWy4YwwxF44B7e1EN3vj4rucV3dANH9ivb4gqzuNPFrR5DJr",
  "key9": "5sgkFYAWfySVYyfyQDkZt1X3ZHt1h213MRLbGeeWzdzp9i4C57Sq6TFHUbjwFnEEXxAiwUaRy2XuJQbNCacscSx6",
  "key10": "5LLGwyR6Gzhe4eTPe3a1trq87Yzu9dmyt35tmPEhqfHyf3Y9pgLH4S4y6F8hyMJXRaFxUhGvYxMDqrHoUFnk88hL",
  "key11": "4VKsDj1GJw5vPJWf21d1R2k8ZBPmfEHufi2h75hpWAoYquoZNvjpfZeuKViK4GzBWNH9duKRVXn7BoQTpeFWurHF",
  "key12": "5a4xD6pYQjVGAthygLpbpduu89bWAsTtuwWh5qCzmVb3Bw8r4jhx9LUEeauijDXCbQkBXCbExzUkTUf9egK2DXpX",
  "key13": "4FP5X3mgrhm1odLySmRgnySrzqmtra7HYZJ9T4skExQcRbPKCnNmbo8wct3Ugs24LqpiBwadq3yZqnULxrXB1m1F",
  "key14": "3YK2hAzEZzhwF8b4S6jyC1EARnQ5a7pq4WkZUTawSb8J1kdNEZmviMqC9TB9wbGHJpH3ojzqxQwd5QsdT937wRtm",
  "key15": "RB594y76g217y3APqc8u2MjFYfeXCZynjP8WPZzMdev76oapz6QVUUFTYTGUQqF2Z97pVCZusY9czZeF4x193Qx",
  "key16": "wr7w5PaHdk9hpG3LcG8itL1NJ79sHZggfUyMnvB2uqnaGE1VUAyiYJx9pevnVgoTyLQNhxN2LCFo6bDXKH6KhL6",
  "key17": "HJb2aS98eoRj1w4BLSMd4FXb9HeSvthTW238w1q5tGUUwURaEzWFaXjhVXBiZ5bpyqjr4J79YFLvbbPmuzFaXoL",
  "key18": "2cAkedKngsuLCYdYpbw155nTEj2Ukece2cgNUV3X13NhwViY2EV1D4PBTYC15BGH5qXMy5BL5VhEUviEYyPKN9rN",
  "key19": "29Lj9sWQPXkBinnSPTvLemQQuAPwMoWVnW4AqoFBkMTjuq9dCcHjQE8trEcLW2gUYJ1GR3yezJjDCmozjcAo2xSo",
  "key20": "3NfajJXWZzeVvJdmn8F7dwHmqyHNyDLjTKwC5ZQGLqYLLivhTrvXa53tj6VuvcW9QQFMLuv1ndt3nJ92YX4Nog4R",
  "key21": "mki3hM6o4BjSmvhVG5iJrVqcjH6hVPtzPmSogyDMMVbjiEje6Nv6zUbu7vuJx9eZWVHCYqM3V75fbFVApZLELUW",
  "key22": "2VjjMVU86NoKvGQN8u66Fa9wJL8NPh7uygUHprTGWxu2FrPqmF7ZZLjDKkMYMesF5NZf2TwfyioCCiM1ikG3hpQg",
  "key23": "SBxne2X223MYCkvEU3nm3oACEup82hisgFKk9CyTqTdW4SkxZqv95wsGV6AHz6LMRBNm3a2oLjDoLnaUoG8vPkP",
  "key24": "fbr9mPacA1AMMraFmbd66FnFf7mNqkUBhoxTmYwmshfovCNUEEyL4DTNnznnm1vRuaZpUBmqcp1taKsFxZXcKWQ",
  "key25": "39vLKkQ4V4DTDWkBdZcdXuUhTshHmkJL8qfeZ3wNiob6bdVDT4BJ1xV81pCFmfwTFHqg8BHSYGby1tt6qrGsTPRS",
  "key26": "2Zkr3d8RrMzXUK8CT7rkkoVTPqJN2MgW32K5nmgyUT9faRpd8F6GVdDBUzzPBYakZCzPteP8AWEYHRPFHkZopVn6",
  "key27": "59MuK4CRPni9CCc6SVYZKxQkLuzAM8yH3Bc792xz2X6o2G94NYYKjmtqyZdR8wpRZpW6JBk1bbaBnBB7T7JJTMxa",
  "key28": "4BjeFuBythdaVLpHrATvZ5a4G7pLFdRB3eU4UJz67bHYV8BegKcLtUhqejTHL2FfebtskJoZiCtWXwCTDkRhvbG4",
  "key29": "2uKpgbVTRTa97sQX7cDnwvBuhHTT6y2oNWhrZ6FbEMJDARcDNWYvC5kjMbbmsjRr4LbZtNBwr6p2UV5WX68vfbZS",
  "key30": "5u4ucK8dLrpE26aNVf1P56R9TQK9QFSfoj59iiaZosP7E125RimxH1tFPK3w7S5kvBNoBydEH7CMJz5Viv62uJAq",
  "key31": "2osa7fFx9Am22dHVYXhn17dDm8dhXDWct2wX676z62P3QskBLJccb2MtiEXRLWn1dTGGq3q6tn7d9FMMFnF9HnXU",
  "key32": "5RRPUVgUqsXfCU2j3iJvKxDZE6r1shkZPB8R2J4YmY9a7ztyPBaz7BuYhDTqLCgUCewhZJQSxU5YoLjU2TwVWZe3",
  "key33": "2Lm2otyv55dwcF4mneB6aX8SkQfYxf8CPimS5dV7rLVxaHcb57Y72eKc1VpRsC8drRwbJYSe95B2DibR8zGmRjn8",
  "key34": "5nEWjTrsYRcQB4YXgjbjbzC4UdbpSRPkP7KbvqzZa2ntgE4BEFAYhWZqD3XmZ1n1xKHQCxecVEmY5mnRv7b3ZYSC",
  "key35": "AjHRduuPK5ZbZXZbTZ7oxKu5vppST4yY2MP1AY2NvfFCLxUovnBpWGTQSBZogyYiQk3626xTUMarCdNMcrRTuCG",
  "key36": "23bFTHgEzMA3VKbk2sBw5JtdTMcmtTY5eQizr6q52F7NNUfuwZXaitTKjAr8gXzGSuZ5G14exBkfzgRgYh579YVq"
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
