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
    "5Qz5buMabPL926GecCLZhJkVn7TNfJZdEHwaQxXWdS3ejUksgo7Tix28tGMMXLZqqZwdCMiXMmfbzoQ2dBD4rHoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z1C8AVw2JCGYR6iEa9deJtWETZZPnnz5BSnWMJ8cjgSqNic9vjsveuZySJgyjW6pi2Zj8SXAAtkDvHhpfUCiPqu",
  "key1": "FhFMACjJhnGGi3BjJsjDr3HLkom244eurBrBUMREbHbb7ggV4g46R7MicZ1xkmuEizeQh3ud32VKPygDYWRMex9",
  "key2": "Ebc69aMRdqubsKgTtHhguMLTPmFMuAmca82xGvnWbNfzYRvCUhWp65cY77k7ea4CJqdcEVUczqTY2Qbqr1LDC2A",
  "key3": "5dfG1Qzxs29qV4bz1MNoJCciPMpW9q6hj787pMyqqFnmXsqcAnsuXdituybNW18HyUc3K4nZ12B1XCNzgHdKcQM7",
  "key4": "rMPJZGM25JDJjbfspdvK5MLuoCvBeRwRR2Qc7gwxJayo9HxivSa5ZmqP8rChAuXPEAhy2cni8yU9zM8EeUcb5gL",
  "key5": "53oycdmbpsPB4bc8Kr1ux18hoDw57aWrsLbwK9V8Bogvja8xyCbiZCbFoedezvTVWBh3MQFGGnV5qwMaYAQqmdTi",
  "key6": "4UJPk4KnqYxfVphmQvQaKd6Yk4dNKBjbw13b11w8J8MfCFYqr3sqxN3AaNWdhKqCv2o4fvAWRfgQVek3zY55XdH7",
  "key7": "5XHCNemHYowNgbk9nxeHzsP1nbWMUt1a3a5TBzVP6Ni1QxC6GzmTNWRdWcP7o36B4oj5fVj322vc5m5mEvY64V8i",
  "key8": "2sRpQtrMuPzBxuHbpvrSWMnsY69iQjK8ekDeLozMpZxRH4bVrSh2xiqyGuejixSvT416rKjkuVR7FvBV3wzHDnDH",
  "key9": "2afQkHCoVvVaGVtDAbkmXzfXot7RZ9KPA9rfDpTwDiRwijFgwqPcNgHRVDb85Gh9wfPwLryzrxGb4HH9M81pBtVY",
  "key10": "4DVmet38d9dSBTaeVodbPUUVdeD6ai62iUAJ1UEf97jy8odLB1p2dPDvTjkfgLQGmNGUeHtCqw62zdne6NWrQncd",
  "key11": "4gZ7u4R86zHnWgGiaP6ht931zxEAzpanWNHHvt3WgXHne6QWjbPFSK3eCqkFr2kYpmGKZhW9TXJhYKqzPDKEonFh",
  "key12": "4SSxva1XhtzfTY4eDmRBhgWpqFCeUAAiG83mTgFcy5xFK88mtLXPdps7VMQ4rvjko5T6qr1i2giJJr9rnC9ehtUR",
  "key13": "3CswFyG99g1Az4GHfidz8SygVmyX6npUm4BiEWVSNsGeKXAZTk1z7MbnxEonDEdWBJNRiQVpgg5UdjzWgs7i9oAd",
  "key14": "5hKi8bQphMr2yS5xcW7Ryr9rGFhu2fSccKu8svaxxXnfStQXwnqAWJHzbM5tFux3AkmtnwKrwYP3VoWzSyDg81Ne",
  "key15": "ghmoefraiuPpQt53PLX8LQhdDNNsnt1P9fyxtrymibsWgTjKyjXvZr6gzPH5GV1y6act934Uzmx1297gmMoahtj",
  "key16": "5rdMperBizgjbEzN6Z8X6pPfZ3jwBjdwH2DwF3yPvmcfjHAjMgyWvWh676314cucfRDwNm6oUAJULKS1aJVZngAD",
  "key17": "5gsjMErLfFaLwRW2PJswL4UEZviLrTM7wfHAobEW5UbNYrkKGhYbbZ4zwCBZVFT24QJ3bbobLbHg6vUx8KR6FLh6",
  "key18": "2QsQghSzNVXbDcLwBJNDGR4iLM5oV57711TMJgWHAtXhqX9tV2MeCmHTd5zmBSb3D8RPVU8iqhWte6y6izQu1rTA",
  "key19": "4K7Q9VVaN9Ut3o3qvuP74zxYS8LgrVqt2BFY1zMio7u1sADf1j2M5RasASxM28eYxEQ22M4CrYdJkqGHv6PZaS3U",
  "key20": "4ERa9BFpYoL7q3BswrtUaY7YfiXL3BMWnBpztcbUJ76hdZBe9LQYS4Bg9sjAqGKcbXmgXLtXRJRjmcsCAfHngJK1",
  "key21": "5WdE3GFsa1VRaHgnFCzU74s2Qerhy7bDGYkXP17iEeapoWxoqxwSryj5RRBVyjcGNRc3gf2VWBfsu12iKxkGYjWR",
  "key22": "3ghX5hPYyp4p2q9EaUu1feTpuU41Ti8iJ7EuKcjFjcCXwW4tKe33xnLQhFHBtXd1c1FNXMcTJHcohh8GyLC6KZgj",
  "key23": "2YrbBnynexF4BA4RCTtL3csT5V6JjWwSJcsfYvxH43u5VJWqyXV5Lti3UZWRXc6wVY7omRkQZgVfFDAGPRo6ENsq",
  "key24": "2ocb4rb2F3AsVGd28uC6Kisby599GctvCxwUyeCy4Lvq4J2oYgSyiVg2emjAYhgJqafzyUCshiAjdwzhNKZj6Zq4",
  "key25": "2MxSF5wQVkEj1wLNtX8oxMdzuAmeu5QRpDxiyr35BZZtxFt2NdhaAWhhUuy1X5SSVACaDRWnpPcinBKYSjBhXawx",
  "key26": "5A7Ur2ey2xYF9PUd9Rj6tevtvcsVCoX3Gp21ViyJp5kXhYhvQXrYmD34zdWCnN7cZS92BczQhvCDPEF2UXPK7tjR",
  "key27": "3dJRimzVFda8u9W2ajZyo9nWgsytoi1VZC6zZ1F94z6u2cfdvGBMTChYGEABZ4Po3NCWKszaP8BRFLZjmNPapJpu",
  "key28": "4SnXysXBEPWm2t1hPLdeVdemzJxbAE3DW6MXo3coT9r7gkiyqDZHkSizYHbeE3W2ovM26KNtB9NGcN7Vy7WJ4nmJ",
  "key29": "63BL1NnDecqzfyrmSz2e7e3eXeLFitnLnqvU7csoJ71vE5mowH4QsTHKjJoakVM9QknZBqwRZjchAthDnRhFrMwf",
  "key30": "46bttJMd1uB4iR31yxCq1Ra9J9eb1jZXKYZDULsGL3VCdDfpnuwFe6DCMKTEJRia5jfuoF5Y8sVv2T7XrBwEftdD",
  "key31": "4AhNf3FCnmH33yTvpH2qpPA6YN4xf1xZxMMQWtnk8eMXnsq6vir5xdoVe5ciD8MSdPREHdQ2EqQwBWDSQKCHPA5U",
  "key32": "BDSg8NX2f4TQ8JZn7C61zXBLANKcLXaLtJQZT9xc6tmjjUndwFXgtvMVNL4EiuqyMWZ8krbb1w3QtmGLu3bU3Wh",
  "key33": "635fLbzqhDftXd1LVpWaM1JQco9jayrnipBQr6foFjLGBMnPyNu36kCeXwNifX6toutHp4uRurMvQTG7ezCVNb2m"
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
