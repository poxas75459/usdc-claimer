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
    "567ddV1z9g6y7PhQ3qyoUXUXvGxBnpQAJ52iiGSyqHF6sBmdfipVLJbNzP7XgrgmfC2LYJgJB3EWnstg4cMScyZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYtJfFaWanBYmyrU9zQ5xRxgKyxfkXFjZd2VM4BXQaaGZPhUtch2HSC5cnNtiixApMwu1kSiXWTbvKa98tp5hCk",
  "key1": "431TevvHqjqcRm8A6SgQdAr9mCo4dQS3vmKmydWwksw9Vadbe4wQNj25UnDtmtYD2oqCtC1jAmQurcSLCTXy8WS1",
  "key2": "zGq17EjRAhqC5BNMMVdhXiU4X3EHv1BpLnYpqeqMyrvQrAD1MjZGaWcU2AiXczQZ8AH2Ymbv3Bfs48snhNNTefc",
  "key3": "54pG6wJ6sVAzMRq18A7SEZq4N9he4ZRFDfHsdevwqgRr4iNngoAEw7uzaHHHZbb5jhz67kRTHDepCKyEWu7cfVXF",
  "key4": "4gMxXgaEGv4fXTvsSx5BzhyLZVvjUmTB4s7npSh7C7n71aVTEjYT5hUToWDp14ajwmtAScowvBhpuNgPg3NgYrSo",
  "key5": "5731n4hEJVjNNYbiNbZAsqTNdZWa2PY3pHtUMzhz7WZp7TaF3RkmbKsu28qbyvvpasBQJhGSToWXDDHJtp4VbnET",
  "key6": "3Dd56njihieVE1uG3jsACxGmU8bATXC4UtwqZUL3R5ehoDNEzgmzGJ3ApyFBinpVQq4FXQ8M3YozMo7QTkLyfY2C",
  "key7": "rAmPVr53hEq1FvEFzSGz8MEP6becPhBYkZhPoZhy1mfWZ55sin8UHxzRBuBVbWpGASuRyG6BFHNz2KZajidqhM1",
  "key8": "3CYo4N1HvyFWKJyo7p2WyrTXnPfarT64jC2vrn7fetS8R4FwYwcdfedALGwNEku8zDmkRnZyrRFpRidT6XiHDxBJ",
  "key9": "67b7AHUgNUMqQPRxueb45eSZPr4tSgjqneFYZyBCK6JeqDnSCzkdWJt3iisxTNL6bSSZZfQrpaVQLzur8bKDr429",
  "key10": "9WDmntNE3Zs7syyn8wkoPwi7zyjwyyDamegdYGREmktbbmv7959z7fUDaqqar7jmK1LA69Vyz3vpTWFxUXHzK8V",
  "key11": "426e1ycMpwSQYMx68MncYep4K9g4J7g4amthUXDsgqx3c6MinWP2CqqqFe9KpLX3CxUJsvZ1kWZP9a2tA2oPA1D1",
  "key12": "46fNtPBZR94iP2t6E71Qk5qXmPoHFWwbEWa3eMNyCWtnxsTXoPPGwSjN6zYyVZbbfFLd5gaKKSrDi39mPqSCbera",
  "key13": "fA2e9MquyPWt1d4LoeYNH4vRMngFY7syVJPjZgNUsYBBRRtJW2qQc2LPeQEsybpXTw9jotCy9tp3kwqsVDzp1gH",
  "key14": "Jj9EmD43st5yHa4Uh7PZzSWA6tvLnEaiMqhagNDceMvimqdj4zBP9GPLA2H9Xjk6sheoGs9zfsRDp9YcruHbwpj",
  "key15": "5qjdvScwqNbRftDnv5iywHZpjKWzwL52m1tdR6dAKTPTRLKCG1xkhgFasmLmc1oVP6T9xyyadJVZjdGZY16HiQ1N",
  "key16": "5MWK8YAMSziHA1CUnzbbBCrmAGNhNx3oqHzzP3wHQWxFYeJotwUiqUi18rhfSoHfV5WHJdjd14qsjdt2m8z5UHBm",
  "key17": "A91p1qWPgBmXh2uyDUCKZG3wEFusFmC24gr8yfmsD6QEbBGboSJyz8zw4Uz3TtqwttyJaW31JSzh5fquvQy4NK6",
  "key18": "4zjmTed3vF1vvgzbmpmfFAizRZM99p7HiTAxuTGyPcEby6ds1XkpurdGg5xBsQBWejtRRpkaK8GnsQvp4ZdC1mii",
  "key19": "nKBQsFR1nznauYpkvKCdZjNuAPi21K1rHa8hVjzX99PXzCEXf6NcmFh51dmwm7yrgcEMZTGy4k49ehHQtBkoDeh",
  "key20": "2W2XUVaD2VHQNm6T5et75rJSU2akMvZRW6bkYRQK6XACEiv4oRhVrWUxP7W4rVfmZTn3VmDjvKQK3ecUm8RyhWST",
  "key21": "2zfQaHkHUQT91Vga1phirixRf1LBejfgEtq3JWZ3pCfLUVg4mXpDkXW1SubZG8jU5ajPFiqkSjbmfC1FjihcWeJE",
  "key22": "23tChWBGLguW96phCxeMXzTF1Szkq4SSep5gTQhXhJMJgaKahLtaffBQSpDJekhn7tLvm4n84ULn6xb7UNcuwdD2",
  "key23": "4g2CVFt48pr3sTkJK3KXicNTv4dYoxcd2TYGaTjUrCQKQDWtC3etMoTVmv8H3WuW7LzFn46mhX3MGpEmpvEnyUuX",
  "key24": "4ZmANzZqwfR1asRQEtJt3YiwQRnVLAAhUo7QmS7BD7sZ9JAHn76bC6kyzX57jaoP2hjaByzrgconADKBUfNoD8t7",
  "key25": "SGfbxkqd6e5fg9kx9cXHRUT8RDHg4mmQAxLDmdggnkGUkcPNK39hyuMadvAsDA5riB5incHsa5UfbJaNYbNULHn",
  "key26": "LdqWmsFC3h2VSuwFigUghgFF5PXuavwa5KFxDZoYcABYC8SJ8BaH4qfE9J1br7vBvq2JBdYr6PZESpmAjSuAyPi",
  "key27": "NtYoKboj1bjDyZFkL11ej1HvJnAMCkykaPb2qySsZ7nrvnELoD3Q5rSMJk7unvNA34BZkP1Vu57wSVC2NsB2NmH",
  "key28": "Pqcb6WRs645pMv1Tarhronqf4iXqtjQ4Hkp4xqQ6khzU2nZdrRqfr9TaERtwQ3M1mothcaZhrSKCJfTCsNdXGct",
  "key29": "2oN71eqHZmwPzrynTn5EV1ZJurWys9DE4rahQ4rfHNTk4H14MWuKRXmCGc9uQC61VL7D1yTf6kKM8onZ89NyPTkK",
  "key30": "Z3BUshKWXtaEnCtMATRr9kPhzSgKRJ8wWSUDdHh7HA2JMUbrvuvDnLhxHBaeuDd7MhktpNAMVMD5QHFoPfYup9J",
  "key31": "66X2kAoxbUCUEYfF56pgbGVkaRoz9mvsD2NHVFG2gK9HFK7TrqtjKkjJSjnU6HvRVm7dvfKkjjjwYKTBUsNGSjZw",
  "key32": "2y3RSawoXMCZcMmpPpWySZGXmUaSseF3B4K1TeGa9Gi55aq3A1AUvD6cwALoagWhfe9mKZ7QMYwC3h1RuD1FaKai",
  "key33": "Zjj6dLpogSZfWxcv2RxMjNKfy5tynFkaSPpvQQckB9AkfYAKswTaZL2i1CiDQuqEfZK8Pide3Fj3Jg9zu8cm68U",
  "key34": "592a5Eqr2ZnJD68nf62uReSYkXDsL4ijJL1Jz8r1kzxyhZHBBAeh1hm4RQcW3ehNMsQ47u5pNmDgyiVHzXja8jhZ",
  "key35": "xijaVssm7R9r57cF951HFXqrhTs5jBiEXJuE48SbhDLfbavjkntDqn8ve6S9FSTvtC3wVoLkoweiauLGsnNNLbT",
  "key36": "54ECCFoYHpAgyf6NZ4tTvxXrFhyXEzNvWmh3MoV9G1FCDmNteVCMM3GG6yh8XPrFHzfngbmJBq9nxVkpoa7i9Xn8",
  "key37": "5ypcxiLHKDBRstKBuHWhicMA8z7T1rhVBUu7eMMwLjaBYhzoJtEdsHKDy1D2dMcVYQcebcXLPkP1DKJcxodZwZq",
  "key38": "3SJsxUriAqFEt9cCPhsNxn1mPcgmWw63BW4WnDrz5Z4qKqcrV7YZfURCPjHXsYpsVTFzHfJD1UoNjFB8sbrDrndx",
  "key39": "4vt16JPZU3qp8CnVjMP5Nhg8HuaDvznkdyLJByxcXizV1m222z9sSu2X55jFgX2XrkXX36qL2GPwZgc7NcW2uLfF",
  "key40": "45BMBagfynLCbyV41LgABZdNiTJZyhHZn6wmvrXaBCZbGCSUhANkc1P7dzSiV5kt1A4JfQPgAk5QuRGoSNjG8pGY",
  "key41": "4vDc4t6whhsLT6z7GfMJb3nrfK3KQUFB9YPaAfmLm5sCvu4CfZ5xaaeZ1pSDFvJJiLbdhPAijAa8NgGYaWuuMzkd"
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
