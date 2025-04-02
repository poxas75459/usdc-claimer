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
    "3v4krHhf1A7SMLNgWjE7PjULvZ4nrbzRsuXAXzMERasQSRK27paeo2bCbeqiVGS77a83Mdbbfvmhe7CJ2vtRQEnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46FA55EbJmAxPmytJofz5qeMHAb4w3eFg8HgLhxvPQSJQsmfH482Ri9FTfeko4TJH5Ska7bZZTknpVpdNKbZYnwk",
  "key1": "56jG3tzLHtL8NYLB6NCsjTZR7Ps9d4F78Ya2b7q7cFGq1cFeMgqxUuPd5dUjr8DdEbgJ8uRq7Fu8igeVs2YkPF7S",
  "key2": "qpJ1DQHrVhc7XdXZykvRgxPc9XTU7L9vBeu4L9caFyd2sSGcHXu29qdbFkhiqcp3sMkVHp5yG1h44jxSEaPawhV",
  "key3": "29U6hNxfGQ1GZv67hh8njS7QYc8rDo6vU6VtZGbkbEeQfNuJjvSAKTxaYBgtm2UWekrP5sKX4hRvkA7HQi54iP86",
  "key4": "28MTREdvACXC8gYN2CwxLG3PcTP24VioNSEsRGWMmzAZE43tX6cPiU2cy7U5jUMFvcDjCRKstp7Ykw8yHLW75uLk",
  "key5": "zDmSiK7BvCJNish1fPmp4SxtcXvHkwTza2bGidmK6wC6BXfeAdrAVVWwJmd5FwZxjwoTbRxEi1HmpDENqbewEpN",
  "key6": "5o4eYMQWcMeemFgMMbV8ccuhguBcjaA1qKfKgQKVcGGybYg6fnAiuBJjfHodvMB9Bw9joFgwaDLZDJSLvv2h4FFK",
  "key7": "RazN28ujkJsh7mDJtkhYVfEGacS8sJsgMsRcNGKaX59X6c9n8rt21pJJcw8WZSGewHA7amXJWZEXZqqW51CpWX3",
  "key8": "4PDAt7WGh7oHjHGu5Joy1BJ9wCsdZFAuVGdvNGzNUk9uoYanisgZx9WMTKkFjDTStfeCdhR4UWSEfJUDrVdrSzgt",
  "key9": "2DfAs6pZES5ftUGpVanoTf7u4Dqe2RwUVD1cBAX5KW1oT322VBqJHdhVjb6Q3oyk64j54LeXsU9LToGbxdPYx9ha",
  "key10": "NzD6tvYiizh5jTkA34rJSUfk54GR72pVsEVQ53ATdKpydCKiz4aeQVbscAL2ArPR7QmG5DsEsJ1Dy3QBcGPjNWX",
  "key11": "5mvCQyz9TMkpoTTu47BGaeUXTjMWFFmQF8SJVGYHboRmDhu1aaFfjf8VNXBFwDeuwxyFzCkysy6BZUiLoxe1tbNr",
  "key12": "4wpyZq99LLLs1qSt6XiDmTvEm9ugqh5iNm8KNqVp7jkbWnQzq6bSSom8eexGFnpp9NXvF9kXHong8d5dTLUKFD7i",
  "key13": "ecPi1nuSZUNE7MMoNBHPfexScH4NkSzkQWX3RdxDJ2Ur3H48UYZceRUJYrUBvJc9xxkHqhMcHiE7XLKRkuiZ2Hc",
  "key14": "3a98w3tJRzZAAPKseCkDd3GjufrUf4apkHdDi7udwMw4TKiQC8MMfMm4Tw7b9yoeFpKbHHMxfr4G9qk49cDWKVGn",
  "key15": "5HSRBXpW5LX529G23P1mrvjJ5Lfi8vnn5FSP8Cmjzz9VMNR8QR9q8qTxE788JpeWbZb7GW9xhL2TNsfSDq3ZbU6s",
  "key16": "5QANkXRp33Z9iTsaufzqNgaYJsBHLxEPUbGsm44K7e2TRhcSP6jJ4Vrvn1oFSHSe63MaFiNGsmaNtE4PzKhE752d",
  "key17": "4wKSNPo9BVPodR2SvpAKCD7zL3TNNnhYkDtbax6C279YjTiLV79UuXMjvHyN9RTYvr46XT7dxKaXri7mNTu4nAT9",
  "key18": "4inYWF4tjV4pr3BFtbShZ1PW7NrCjH5VriqGzxcDvHTohVD1i37ixbCCAT2BWgYSoGgXaBsVGfVoSG9MUg9q7ZY2",
  "key19": "4CGP4Zxs7ajtX2c79RnXvrKWM3xR9xUQj8jxicFm6yfEqx9b68xXxoNnt2HZx9YN7VTDzW8c5bRQWzXxFrMfHMzo",
  "key20": "5Dut3ZUPdEke9VGtF2RBZ1KqyhTQH7xmPgVfSawKKuLLQRXdEzeBRc3eBMUE1Nsujq39FRDcy2R1qJr3N7gcYY8j",
  "key21": "5jXcTWx8wQvRfmRXmG7KsoKmdg4bXrEhxSpgHC1YmaJXqK7aKy9EmGZL9w583FH7JTG5DgrDZHEsZaBVsvKjhjuA",
  "key22": "41SJitChEz7ysatM8y6zPMzKwtWjPr2kavvWauqonWC2qSGx28497Kv5m82je9MAtpUwEK2D9A5VRTLRmZBukpFw",
  "key23": "3ZPXqKTenc5YmLKXRst5nazN99JjeVSq8CchLwne1JHt4Bm6G6X7fx9QWN2SCPVpUx2H9WiRXoeNnG8LUB29e7hb",
  "key24": "5qA7TeVaVXQuLfDSzfPmoP7USKiP912MnvhjPH2H11JBetdebbhCE2LgnVw75Q9cE2mFTXzWcKe4LHw2Ay7EMkj4",
  "key25": "4MszJHEBEpdxPBK6yDMZ9iiNJccoLx163FUctdbHWjKKTYbhbtE1qgRdzSv6w2j3Q2eTJhhy7oVnRRTQ2X6vaH5x",
  "key26": "45DZVJkeBKUXNmo1DFwFacz4bAxzbWDU1qPoYcVDdY8tj4uMBPnHiQkawLTupNJaaLgZde2MZK45R9TUf4wJmF29",
  "key27": "3tAdThHR55EroQyD9jC4DZgSuhSu3WivmqXCnc4DYW6WmqDW9mhmREN6sfyFXTmQN9M3s3j948tBUirb2TqCSGhS",
  "key28": "5rHPMbtzht2hRWSt2f3obmApGvwUwt3Y64YKfp8YKc9D6xTmha73h9q1hpQRYzBQTABz4pRKoBzVN2Nhye2ztxv5",
  "key29": "3pwBMuomikw2cejQv257kMi7xf78u2xR12HqtN9cRXGdQxfRzjrbiY1mV531r7Zra1Dc7ozcAXR3vEaVeUeK3DBW",
  "key30": "325icyhNUfEgqTbgHcFhPJgUHjrWGHLpst4AwiN6JmZqptTrfMpPtW9s3eWo5CDqDjSMX4Aqb38aMfPnYFA3FWW9",
  "key31": "4SCiJHFuFTbZbwpvVh3oANRzSNQqhaBnqixcZCN6LQQjrnmEH65sJBDcSBK7VGcFYHQjqLJmkw6BKNYKppUFQXaM",
  "key32": "2CvS522p4zaEo3X27JasBtoJJtw4EgSLria14isrkTBbkZygothvHqz8AkRS9GXBpwVAJUTzcwwLDfFbuW3ZKNYo",
  "key33": "413sfcLX2LBSGVXYc1wSxY8gRcC2Aq5NYQn1xWgHNLoCgf7bnZqbmyt1hpoQTC2AsJBu1BsA8hA4dipaXu8ujKvQ",
  "key34": "zsZmu3SgZvxSvQcaW7m6g3Xs6EjLCpxiYpbxDMUZN4pCFQAGprSxWs15r1Z3WwHfWJx9sAf3jzts1HxCeCkzR66",
  "key35": "3S1LF1H32ySCJf5uJuCFMuWLeXzzrkN7smg1ZS1K3mLAUSKMjyPA3NYeGGe2i17gnVdKgsGoDEKyDCcTziRA91sQ",
  "key36": "3Jur3WcYxL4awHotP35WW1MxY38qJkp6y9TuhuiHaip19ew7735XeJVeG5BJwnaZoF17VEBbL9ebsmM4VtHrbQE9",
  "key37": "24yrpqpJg3ArSdjarL8zvwGvxntN8yLboWfThBq8jvkjQ3AcVY9ehhuZmEfG8mPoPLHadKKTKaKpq35FcyaNWzBa",
  "key38": "5Yyhq3B7hHL5bQ8gPKH3wmBB5ucpBf6GEYwLv8HG3N9e75wJF2oorLERqG8to8LBhXqnjRYox2tCq21jVwoCPzQv",
  "key39": "iBDTHCHQ8mma2ge5HMV7PVKomHg8oMTAoX4BuBWNfMKQeh8aZCiPULnznDeUPpGgmqukqXJepMjqGkUrY2qYUcx",
  "key40": "234HMsighBpQcSk4kmU5qg1zoGrnh1xDudt6f4vY4KZjHsQm1KfFpFup5B1eXBpbsB1kvzCt9EyZAtyk9jK13cDu",
  "key41": "5WJiWGKe3LKFwXr1VpPvgN6N2zrTYWUuM6GE5skunZNaTrV8FyDPbNkCK78KXrYD8xUswsMd3LNk8jP8mgbxFpmt",
  "key42": "2zPTfMwZHsKqzCt4E313cUGJXjXN4hx9NAZCivzLcUJ9Pb3jExx1Q5BYUTjfoSTVoPAf4YJ86NuPx9ASkJyDx66d",
  "key43": "2pwNN38tsFYrBW2Lr4ztovorvwbRVosR2bHgM6QgZuZmwJed3vL4tcGG7VRK75DR1rEzkLZNz1Sbp4sNK8kqDgU6"
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
