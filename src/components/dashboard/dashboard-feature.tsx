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
    "5Xi4q4AkrNoM8Y9h7cPd6DKPCNaztfLSZwJPQ62xGaSdoWjXEbVXzxLh16U2Xe3LzbFzK2NtbZEhGEeapeUGuoVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39rZgdGYT97K8qXCfoBtrj21XaSn5D2yH349ju3oE1mwqFt3MsH5TDXQS2h8e9hpuXTRRTvSJgM7cpjwN8E9QW1x",
  "key1": "E1qoHpXN7anB6xLaEz8aJtujTVVGa7b5jxXAtvKmjtTThAZDoXodQWwJQpGLa3qQRzpzNBozpKSs2Jid2rVw6WS",
  "key2": "2fNqVACGsvmFHxac9p6XsLun7VQDoxXmVRqApoKmUruhehZ36rrRZijpX2GSRzRXBdkzhujtZfK14gdneUV7ZreA",
  "key3": "41AEyNrVwvDt1Y9WWvGNxeChMHjGw8G9Kb8UdBjh1UbJEuu5EPhZwYrGSFezQeTmu6vQRYEb99UKJ5XidMzzxJDW",
  "key4": "2iJ29j9GGVcuttEFCVq8Fz8euuzhiPZStXRD5AoC3GHz1NEqER7kcxVm2uPLb8rCk38ZxETG65GnX3qF4qFpgBDh",
  "key5": "RzG9P1z9VhssYWf2r3KRfwPRLExpYipypGYwaBEe2hjAKek1Xc2VQqshsTL29Wm8yWkAGRXGvhxNtXeGiQewVZ3",
  "key6": "3FK7YgoF6y723995dDGWaREPcXb7kP6qkZKYUh9jcxRhZzUygXW5i9MKaDYSUzcqZpabbF2EXkNjTrhzgANw7tqS",
  "key7": "3pEdr4wpHztGQBe2RYJWdosfAFXRUhz2pVn1DmFxdJ5JwxmL9YYsM5PttLAjaP14wo5MuQppa9rXqyh3rHYkgbM7",
  "key8": "rqHVSK1s71CTzpPziQSXBc9XvgAJYghQ7GMS7uh6wkKPCBc69jHRnbL8Hi8LrzjSsAskurvPU8A8Ve6gSEzQ9BH",
  "key9": "gXLu43z5M1U9vLKoMDQrtrJZfGoYGrM7VTv65JqRx1E4AUcNcNCSfi3xUFBDSrYq6uw7T3qVjBY5DQVHMwTGkDY",
  "key10": "51E49SdvByAEaDRKpZmHL17rkbH1NpGYmCsUaMYTgDvVPFkDQhDmchN9Dx224KxRe9BiRQSG8VXBKtAFimpNosQN",
  "key11": "5tQw1JYHnC4h8VxKik18Aj2QavpACAX5MxUHQMHJdKR88TZrpN8uTSUxPbZvhdQUfgorPFCkBszWobxm5ktDG1rV",
  "key12": "4asb9QS3sUpuvzSRt9LaoTHDhwLgGPNqDwujuZEZpSE87ZZp8wfXb2BGNCy5H1dVtbqyynbM5iFVBkW53amX1bNR",
  "key13": "2JTmS8LbKp5bbfkART9rWuLnCUDiM4kTDYP8tz7uip8RSyC2F4DoY3dqg8ohrVuCV6wJjhNTEwjZ3W5csQJhhSpc",
  "key14": "HhWnA2DHPZJsCz8CwhPxdVxsydaauuU1ke5GFMmb75HyTZc98zrWaNuFE9wrcX4k33udNJXYMycfFuKz78WytEc",
  "key15": "SrSn1ubiU6YBXNThnyYkpTbtmY2GFRYyurnoq6XLggmQ5HM2KD7HnPXR438t7ovMhwNKQz6DHsbwscgKrdhrYgr",
  "key16": "3f3QXJtkjdtHqDi782G1Y7uYmHrcZs2toSWappRDqnyPn9jK3TyF1o1uy3rMbCPTUK4gwtJMk2ut2jtgUSsD4MJt",
  "key17": "3k8enXSHB3cZzMLMUaopsCeynEJhka3i2nvv54FeXv7GMfmFYVScRH5izqUyejP9yLdz6eMKGcHtEDcQ8Q9NQEf6",
  "key18": "59yAfxhSBX3jy57rGHASECSTBCxRUHtJRFxE1MJp6Z6FJZFekGyVWkk2uK8oYo23Hmqh5r1pCcLKFUQTULSbTiwX",
  "key19": "5h2u56CjfyMNptC3BgRgAYTMGaRj1Fyq6nKJqF6Z46zsvSyaSs1KzMPAGJHCKDzc1m2SW1FzKceH2yzygZL2FtJu",
  "key20": "3etHBHMCkH2GeLYK4zArHEzDp49MDQseYWynxkGYeYK6vFkLYUSpyiQWD9DvB9xUTQn81eRWPZ3akx8LRv5cKRHy",
  "key21": "2c8Anag8V1zGzJroTxjVoDXw6ygk8oVokRuYRRC3TM1ZuFggGdiw6BqioTroNZGYCrr3rmc6Np1CuLQeMaJJg1wK",
  "key22": "Q4tatZ99U7kHbnGgKWRY4qRTAG9oGgVeFNhQ3cCPzmykC3Yw1pYP1Xxum9vWJdhksqKntg5zHbwezn8oVQFXbh6",
  "key23": "5AfaxMusmpiLs35ZG1Zz9QE3eV5B2nGnnXVDPs9r4DcGyRgQsnDUSDM5yDzaqVze9twDso3QDwQvWoFTd4aeH2Vd",
  "key24": "MyHBYCdvs8T9jtwwBq8mPEdevSSpvUDvFMeHG4C1yQDgMMxf8tRi4fD8V9yy92Fs2y9X3u2sJuLkYuzzQh1oRPe",
  "key25": "3m3stmx7s94Xr8DUCbMvftZ3hsSf9SXyXf4aWWBSUcKytjX1v8qFDcF8zFaE6BoopEii1fFJMkNzi9Mund8sRA1U",
  "key26": "NM1B3rUbYMzHe6gxD5hu4vBNwcKdUuBEFGduKcpKotwLqJ5EtRbu9ZEuacWVkxeyvzzYgyzJ59XbSTSPSY9JXhV",
  "key27": "q9dCd5ab1oyyWAfyXRSyiXZE67t9AS79cQEdmaRyFMyeqB2s7P9Ji51Jb84xffZasADZj6f45UPH69NYVunvomr",
  "key28": "q3hW1DLvcZmDAmxfUPRxwruiJMy3H4EtRNidC24vM4YhSzXuqkQxQ2Fbo5tHAQMfwdJ5MyNX2MjGobRnGPoU3a8",
  "key29": "xa4woMsafXVAzLu9msSsWJ6x8L8zxo1rPtJDZ4zUX7RUXGmW2YWgmwzqZ93eP1awGBneJpvjwkbKwziHUoG5acR",
  "key30": "4Usj78jXNGHW1gcBGweuwLka4KTBAWTPQ4EbnpSNX5kfaKQsu5en1nPB2hdALNowMQ9Z3ciF53sEDzGnu3V7vWcC",
  "key31": "4GtZEqAHqxobH3aphRQV1Z3kDF3dAj9Xb5oTNM8uv1ALyRxWzG8ZWcwzbQGaNMmthFyhqgmv4uKENKyNusxcba8q",
  "key32": "4JWU9aCP4APFRbzCo9j4GgdeG5Lrk9krstWuRwGNmksrxvoAfYcYXevA78pbE4Lzx5WMZBmvF1HT3Fy2BX8G5rxP",
  "key33": "gM7km37M5kzoCXKSfwWGw7P2bTwio5NBXhoXysN2iVi6zjb95iu34DwFP2eXxc6KAAcydj2RCMxq3RKF1TUjHct",
  "key34": "5Zd1vF8kTx5BPMRssJsKP5nPu9UUS8VapmrwxjVy3Kx5RnMohtnWdu2srgQstkcroTVPvtAZJ6W4e5acURTWvDDw",
  "key35": "486ZZmcirKDcKgTAweZRfjWTp2osPpjp1cnFiXFTerGkURDS47VvtX8ir8LL6sTGh6oaRWx6yhnshvSSwhEve2XX",
  "key36": "2Qys5tGKugYBZ3yXPRwTbioofmAzc9idQWfLz8TmW4xBAw8CVF2yKspdPPxXp5BDTzXyTP7NkC3ex1NmNGXWqPa5",
  "key37": "4E3x17wJdqdsudpF8pgbx1NuAExJKrcseVUQZRtEAhKEHayg7QFPhyHSaJAGvPzchJqwRcejDJALcSCWY41zVEez"
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
