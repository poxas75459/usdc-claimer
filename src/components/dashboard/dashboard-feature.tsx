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
    "r65oNcTrM5gMS92fXEK6F58cQ9HHEAPc674c44zkMtT4z5tM7cTSqqLawd8KRVYxFTBCe4zQXLU5fTfZ16e6dHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cEoncAaWu7aCbxgXEtzJiPWbr554WLCCR3W5nAzvpWprVKXY7VVwLAAMYo5iR5nQNj4rguQiW5nuVN9AyAHcm9q",
  "key1": "29RY1Ra7uCtMrnzFnvn7BQfVo7TPhMMtGcDSWXvV4E2Xa6ZJ1wnD7S2GKJEpKRYJnr2tVh8ZEhNk85sSyanXaTvW",
  "key2": "4T1gkBw1bGJy8HMDr34U47s1gg2xpCQzLd7LV4jKnAsC1doNekwK31RxvePYmix8bcXZfE2N6eBDotKPZTeVtLgY",
  "key3": "2NL6x2rTgeAQnZ8d83hmP1Zs5ADccNHaBxrbKLmM3UREbx5n614dpsZ4sbMaHFh1h7aavLHygDRtyG5s6ZpLhtco",
  "key4": "5JmjX11wtsHnSwbpjtr2Wd2nKg39R7XRqpQsJHaYTUAHyXjj3EVi5bg9MNEwHmbNC1GRiHfAaibZuPdWED6UurEx",
  "key5": "5D2rsJEKcWfv2979X3TkxgQGF4HZZUKk6bkbtjp51BAJ6CfYbvuvYyciptprb3ZZ8Y4wr4vowm1o8Kmwb8mHtAJd",
  "key6": "66Dp2H9L2s8CuPkrokqUasnDwhxB9CVZ4dTuMCPLniATjJTntmSUxZhbLWfK3CfYnerWWJieZXQMjPcdRvbBCCB9",
  "key7": "5QfadDXdCmoCtncSiad9KbEPtFG16HTCYUeGXmnu6B6pXTsMV122ocvjRmMTFnM3yaNnYMCjL3m4RoobE2CJsq8r",
  "key8": "57KGpAHU3ADQcF6XmHCvhWaxhtRNzepRdiPRdy6DLxLwD87U3oGymyihwHy4WFZdpZLHwE57PHHXTRT6BGd7Mxwm",
  "key9": "3AqZqfGQnjhmRVMSNEonJf6jdrAjysRkSfyJtCNjXg4FpgdNsE2T4tjiVcr414qQqh2LXZMyq8E8VVUUxG64Bx6e",
  "key10": "5xZx42jTMiKoEZDFX9ucQBWT4b7qQqnByz1ot88KK48y98KU4gBneAKy58pW4LHbZHgDLUqksnzVFQa8J3DwEWd9",
  "key11": "4zNn3QhYjLesbAR7WmPQchSmpp496H33NNXqh2TjhMSgFRHZjJhmyJzmRb3vH2kc5MU2WDH4mgKFx24iJZnJh4qR",
  "key12": "4hDxiVHgZpeeoB39dgE3KbC1Z1RpSAccUia5CPZki1GJABdeQ3uAFnHptBtbRhv5y8TRFwXewUMVKDczzoptgSr8",
  "key13": "4GfQ7v3r5vd9HuWRHoBt2BuEEgo7uuf5i6xp58BS7EuU5uukVg46N6tX1exP8Eq1YhiDWNUxAiMZXbLguwicS8f8",
  "key14": "2c7MyKd3QrmVXPDheUCbRSXBmjUoANbstxJvLXzspw3mEsuUD8AZK8z6kYn4m5EDjCQqjGHotf4BsMSpK3odshoG",
  "key15": "3AsChEwSnbZRUscLVDbRpSVqVtaCjTn5Ns8WetbavJ6BX9uRdHXLRJzs7btAHWqV6dtLrv9z1bdeYLGrEV5Aq6yW",
  "key16": "FrTZpcDuDd5W17LkiD4utQTvtgMjGm4ZZSA5wGiPX1YrKLbXb8DYpMTyo6ydEDnh8eZ8imawZtQ5U9sCXSmqq1M",
  "key17": "zQ4ttgLi5mptAXH2LDY9A8qYiZh8CnK9ctQwoGm58Z77iPrft6MnR7BELUeWJ3RN65J4UdPPmhpfUf3yBwPinC9",
  "key18": "4YVBVbJNsfyrybw7MKFpGtBf3zQWocRuS468ojMqxvGp6cwEXxt31rWTQgVqGged2XqbTamT1NJgKjrF3S9e7V5j",
  "key19": "3eKhLiNURrgv4eewUknmNcB8TxvQx2RKroT7MSg9nGghCAzBMBhq9v7dpo1FCGqXhwTC4PVH2WB24dmsLzYBztWn",
  "key20": "5hKMZbLfbzDHVxvGWsrCeQfY6keq5eQJDac9KBXFXKzrXtMM1eJLBJwt9hNEFVbgiHcEuazg55ixBvNqxGUMjy7d",
  "key21": "Jmwo5TkQDv7cc5apSotVCufiArkiJfGgNLBGXswNXCGeU7oR4oskUdcGArxnj3ekUscodi4ToPrW8tE1VgHM6QY",
  "key22": "2sZNBNEH9r1ggricSrUF91jSo8brVgDA9FmyLe63Kuu38U22s2GRU7gMYA7k9tYKV3PJtFwbq67XgPiKt7fxz1Ki",
  "key23": "5b42WoZwX7acSbCyBGCjBWPJ7WQxBKTvCevfKpKkUw5e6eW4CMsX27VLECXc1bhDZXz4nyS3HkvTC9dMiqkzE6Tb",
  "key24": "35CV33TmP5cbgGbn1NcVDRSb3GkMMj5QwYrCxTmUzkMHDJowQKwTvgnJKo1ZrQUSAsWZsz8C9eD5siYSjGVQPTPV",
  "key25": "2LkVBJB17Grai7kumfgVNM4dUv2LSxtcd4Av6sP8vSiMsxf2iTdzhDUycHBXtHq3asJCkpwbksbBarcA1yqqiiKy",
  "key26": "uhjDYybSM1Q79JJww7m6KPY2VJa5n7X3CjrjZGL3ywHqmcm2vd4CkvAKbYQxM1Fje3wLXBU9rNqUoYqXy2j9TfR",
  "key27": "4ADFmbdGdddp4Qo3LvsWcy7sk9DdDjHfN1bhrwpgPrPECkQFQy1Y3Xn6srmj2pB6P5WS4hDsyUUu6othCXxSctg7",
  "key28": "3oGK1FdJQcNKje3zEuH2DKsr1GVXuWfE1yCUdkuCYBP4JcUHCTxBn7j5drCAzaLUSTJtRcR5LFrz8UHyc54PuVm2",
  "key29": "3SjZbQ4xckKHeiBfe19M6Mbd5eyhWAJj7GgXtuiCpeSWwoA5WYNSNrNccP5AsrLtzfhHjctf3tixh2Ddx9EBCwiG",
  "key30": "3m61M8xLwTKvd6WzvLm48XT3rNZJMLjVrhMZKVv2HoKXnmUmAQGLTnLehN1sFRS4BSsyFgKMSGDgLuA3jjbZqGQh",
  "key31": "w9aVxHma95YDs1UdcMgEtQcaQxqqmvM7mxys2Z8qGAiUSVoxcZfzf6YQy3AKzb6SAeJ7PUamNzwHFEH8hRxXrMZ",
  "key32": "3jX2gUxuNK24R5YGsHGzE9MWDG5qTwcgn416ouCUSfHUq48Afzzq52ac9itK8z76XqX6gt5B3iWj3zE1xDo6ySzP",
  "key33": "2wBGyZ1nmjaZsJ3GpTjMSdMenC5byGSKV6fHdVoAri9jLTbAsAR5FaLunP62QvJ5v8iG7qZjWd3P2syLzztCZFcA",
  "key34": "V1opQHJRcrGGi5zoEzNxpLk4mdfNjEDHYhWbyvyDVw4KCk6usqq5AjLnACQsK59N6d411D5FZNeQfTgYeVVP8xu",
  "key35": "5QEUKxSu2N5ou9WsbrSZR5h3rTdyFUnFZQwZmdtLYttdqAjmnipVQYhEGZLU4YPYe7MS6ouwPq3zQYLxqC5RYVzw",
  "key36": "4rqMABr8EeAmQ6RZEhuRXdnG4QLFPXCPKrGFRfVu4BX6mrngVRyGJD5u9icjHhjQLpoP2Wu9EGeXmCpwVvejBEH6",
  "key37": "3J1kazMmQNNgEzA3bgwLuxi5uXUDW5uKEKS3M5LVMWsfCzG496kmXqXnajaYLXsawMcBLDXTc9sBRD3RzfuuuNyW",
  "key38": "vrT1gn3cpc6LxkmbDpWdXwgvqjf5ChvT6YUMTgJ32VqVdKHJuX7Bv7JHJoLZXED5dqqDNNc8Rn85oD4YioXAymK",
  "key39": "NUGM9xugMSogt42MzdQCgFYr3rYkMYQH6Cjr4c55mPow4YLNSvKWqz8zPacgJcFBCynvGX9iABaGrBKLiubbAC1",
  "key40": "3cdujDUGYi4Raq7jqad2rmkYuZU8rbpS9L33yHnvWdLMe73teJ7LDLU6Wwmmpr4SSpQcRARvg9A64Sym8Nw5PXrF",
  "key41": "4cts2QFS51qmh3aung3BSA4M6BXuozckg1Z1KxfuQyErDbgYpLcfURy84Qreju7C61hknA8eJK84iLeTDs1nCEpg",
  "key42": "piMBwZH1HGTAxeTwwv1xpafxKpmbGDH8ByEGXUbp2RwgBMmNyAmJ1VuVVX6QQ4j5qpgDUN5nZ6YV3XrUZBeRcWC",
  "key43": "3YE9VWsZdUMqW7goD9BmtMfqvgYC5z7SySLFXf7AtDzUvNYujw9tgQfovDeBYzUba19wtxKn2aH5oNz4TrDzZEQB",
  "key44": "2Gg2vgx6EdnE14m8Ttop8KzWygmo3H9ysUTXz7ZPYQBpmDaP8tEGJn1E7qqLpbADgTTSxYy9XUuGwi7K8ARCVfGE",
  "key45": "4XSYsq1kMNAJ5G8ZCPHQmWozY8YHsDr5wy6hEtwFRDBAVZv68FNwubQFdjMHajLr3ZePvK2hrTK1PeGmfbYc1mS5",
  "key46": "4GJk77FWpfEDHpZNEU45bqGzcJ7jhQQVSSt1sD29wSBUFhDBFHnQVJ5Ae2JYES68ZXwQL4TCcibemh8wWmVYm8km",
  "key47": "5um1TdSc5YhkALPGHmScMV5KFsjoSuKmhnYR4Zie9phgfTpT4HRjCaksDXEEmrcASui97Cwzeq3vtVxfPngYYRrx"
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
