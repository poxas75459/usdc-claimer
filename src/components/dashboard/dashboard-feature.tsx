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
    "5uA83tCFUQran3i1SkAErWYgkb7xane7ZYVYTcjWn4HmrZrHgPZd8NG5qqWaWpJQHj4gFJyzBvUgLtrXoKNsm9sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nu1DYUcYEHjFxEFwHAoP5uUoYaLADhLvRymsomd3Pdf4oChi1wDWzERmMdaLsqEWgE7uFcaHyfVuayTL4XF8gr9",
  "key1": "xAdWmxYSXn4mHa3ep5m5icP73GdSavAtdMR9AaJtLh9CnJvDjQwChHgdcYoyM61as6Ysyies6QodHYV8ApXSUjS",
  "key2": "fDrvB7svLPUANwdjqJZCr5io7fZkEoFUkFY6eSQMXQ4dpJgB4DXye8XiUHAJtwfR5hsBfyUQypYG4oGqwqNkDi8",
  "key3": "5zC69w9WXtF6YvMC6s99MWRwXCa1P9C4tjShBySiZaZTnFqTCGpxt1kcBvA5xNsXsN5KA7RGbPLTKZG4YKBzEQrf",
  "key4": "2HtPdxETYUYXVK8CH2rsbho1rJ4jaXxENivcJiKcFka7mTUu8CwdyR5MggWi17rSdrCfDM5vxY4nQc9Ga2nycab9",
  "key5": "2a2ap82KcJbFHwKErB57jnQj31dvd2EWXRW1veR3QdWNC9WYuQCaM9CMamKFy6UneSbdT66ZC5yh9QrFRCr4qw4Y",
  "key6": "589Kt5X37xbi4fieA8YoLLmrSzqHsjTexjZbkoDvv8zzA57WkBvkRzRsqday1WS4QwcvSq9govoAuDs3dr6KEHNb",
  "key7": "2aLG1gfFcsVPKwa64zb45TznmfwmNqcPPF44fKiaKmYLwBUAGmPS1pkrRCXJALAUu3tEFyJRwKQN2ZufwLQmDjof",
  "key8": "95xsViJGcXMDTKgFWNqXFaJtFLU2kZexWhEiCPFWG7tjFanYbCpakz6vaRndwcMozvd3rZtzKz8MnxXHE8PD6mi",
  "key9": "53WiYASebSpuoeFZn4SYweuoaUW8PfFs8FnLrYkfYsSSqepbWx4QvTGP5WXuS79K57489TXVdJFGaHrvHbL3Y4C6",
  "key10": "58P5yfw94t6wKAUq8vsYhasmpFBzWvivUTmcgChKHeX7g2qfAEJefBpqb34ramUuAnkni6joGNYvJHMwfMF3qq6V",
  "key11": "MUK2rWabgbqMyU8HmT1rTCaMMgXvCq49To5TwGPH22d5DzjV393zdpckXvwgLDwEQUrY6NSUAAprXXTeqTgYxXw",
  "key12": "ETwko1jt6dLk35tXQtTfNZSokViCzWRmTzpWe37mcakP4Z5jiuJD9KzKHfzStPihFhGXnSNzoMaW4Q6KDG9AYCi",
  "key13": "sLTck9BTnENK86doYFTombiksryErgfpxonBzfWmbo3cAmCS6Vunc7byXzPs6neoK9gfQmbag3t8JikDV1tcjUg",
  "key14": "4SW84GSKEAFuMy6wPcKaqsrY633hBmeXcyRSgZbxJpBWAEuQRNTywH6gV6wEVmxson3YTzxb56htG8beSz3iEJXV",
  "key15": "5261WVrqnCMGVBtxkyPvDBYj1RU6ak97srAGiRUiQd1cduju36cRA1wbNgbt8BKEV3XvJRj4FP9m2NPm8nJT68cv",
  "key16": "3mqSc5Tik7xxdsRPsDnudCRaNTr7Zo2WTryKwtwwuZx2tiioXmyBZqFBBJ1Dts2hStbe6ocJDmWpSHx9NdhXdjv9",
  "key17": "2NRDUDiBTXMYop8QBArMwW84oQaZrtstJEXS95M63xBFVbSpyezq7WK4yT6vDqzz2BnP5Rt8uB1QSodZKPUE8neQ",
  "key18": "5MNG7ciPJfGXNPag4b647kkzm7WG7E6zTEFjYBKwMD6x5EmavxGWzNfvx5AyKFhVN8zEmNhKz7gdrbEvzZuqsH3C",
  "key19": "3nThx3C6JNsvwtRx7vWwH6tgGdYz1Sctu2V275hKtrDGAyuBduaFfVN7iBDFZ7ZLifTZdAeKRjyJaAqQ1x4EDrNx",
  "key20": "57TGiWpqbrr8KFj7fFJgeMcdxURocsNJsAED4BXqGYxKykZ62SVZ7Pvoygk3YfUCWWinmS6STVcLFqdx94esYs6H",
  "key21": "HaW9rhythe7ZuDaZTK3NX9Eq2bMtpUkRNZFMXokoYFsck67BBnDwcmtrsXfXViZkcntoXYbpRywC5ewt1XJhtXq",
  "key22": "4bYEepNE5mARH39YxPW3z4hYBRjZ3q89nFY4zurv8NnMBZfPSdLB6hFntfF3nXV6q1jypyMDqVRLVK19T9mJ2WLj",
  "key23": "58NrrKygKD5xYX9VYYSyhhgJ7qVLpT7ov6VCX1qtCeyUVVLvAimYcB71p5RY4PfDKge7tehaZxBkcDv7XTC345m5",
  "key24": "3az72mH8JgVCBhtkd7S3iVnTBaWjBEuJhBkuXz7cw3UHVSQ7q4fXdH63iqgfEpiaU77Yf6KA7qcMJtrBdHghm6yx",
  "key25": "3SGCvSykpv1VCUxt8EQ9491NdkMdxD1hDZiaja4TzyRayvzvQNoLdnxrbsqsRxGyCP4JfARbQGYHHxqAtFzpiS3K",
  "key26": "5KDHrXeLmYGDe5oXpceXAvfGDU5eqVBin1frFuSrqNTPxcHbB9XaU8PtdrVXBFaYZzychMsKtaECxrnes2HWwpFq",
  "key27": "56vY1siBjSXpLxUw1rECC87jXA7jRwUEAnHGC2iJT6kmN7GhtuFcp8oKY2CeJmhCjGvUMkLUAp9fBN5Y1UhBtbBh",
  "key28": "55TjEHcBWQCmFE4QT9LuNf9RShRyVpdoNznUdQAFPCQCmQ8fTtTJrHGZbMKcSKFaTT7HvEpdHuQsHib7UiLunmmp",
  "key29": "2AxtHgf1pDCb8PmVkv9MPtUun6kCmtt7dYjNYwAD19nramPkacWT9o9RGVBQ55MbfjTkDoDdvAuSTmYs1koFizmK",
  "key30": "2iiupcHmud7fCWU1TJteRE28JbdwxmTRHqRwrxbNtCRYcFy47vxBeTkrgFLeTadmun4DV2Rfuy5jBb9WRXPcqpue"
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
