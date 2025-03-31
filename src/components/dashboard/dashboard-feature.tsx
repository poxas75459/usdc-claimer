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
    "45YL7eg1oNNZguoft4AdPTFCUTkEafC2RvXjwDWHLKsYKdeFtoCrb8PhU97d6hHMMvUbM21XJa2D8LaSXk1TFoAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juCDk8qGM8CQVKw2a7isiSd47M6RkePs4ftr4P6D96qGBEMLUA8ogj6niSoRPwW7BXWZMgWgPpivzmugu9rMMuD",
  "key1": "2Uo1XVgMtzAmKyK8ZjsKKm53KK2qWbEA8ywp6YffSbP7TTn3GAsQXn99GGL5tMgVQA5Y4mazUj2VU5abguGFZ7TH",
  "key2": "qx6cMHMTSnuSpZuNH6Wh7SG6FPStJyMt8gvkwEFayDbHjgMQi9CAvuvR2ueUmvpmv5ybVkZUhdrvW6hRotJJyu8",
  "key3": "2gfqHbDcjWCBC3nS1i8ic6CjzbLd7e32mCGcZB6vb7VEL3uSGrnEFBSu7JCFAiCTU4aPWFSh9fBEva6SqgBkLhML",
  "key4": "46j2eEJF9PQV4K4729AhMuVWWC7HutTy42zzKD1v3NPJzexHtHzUJkeEWjdLQLrhSsSkvccdxKUo2DzutMF8rqfq",
  "key5": "2YjQHehzFHiFyiURRZQSTsgP4fJpJRoNad3C6A9aCyuGCESbjKVBKgmwWkwqYHByXrk31Ez5uzjGpvrHDsEmEyta",
  "key6": "2MEz9G4hGYyNHKkTd3miQnEboUBBLRoEBfQZVEWdQMFNyzTGwFRq2b1dkR7KamhfS8fPn6vDU4u2smofUYt3j5YJ",
  "key7": "3zpkrLFcPejeLag9fEX88L2A34RbijeG5n8kLFG2nYtJZos7Wyjggsj4aBBHHgNGTvXxeRm2CULPY2S1D3YcPGMZ",
  "key8": "48TiRpVNVR7fDXQ5y3gXLg5JMB5GYsbYrd8Cr3jXVqmJrup8KVbR6P2q4CWf82vff39M1jRFHevdKJWwbsuey1cg",
  "key9": "3br9WNLEY5LPqEQ3qTy5HYKLfmxw6eW2e8EnDqPu2E412JeTdn9RWExs55wnMAW7Nv4ao52sqpAFxq1o8edRg8L5",
  "key10": "2QEFbc21few8uhMwPNg7KhcehS4aHQpZBuVQr5dWWmzwfb1FruDxwnpwNQtctzRMs3bTNPqktLPdk8vh3zD7pxRx",
  "key11": "fzghttHKq5Dz2B1ifWQC9cC7X1UJajmf6y7dAMFutboypkGceRVU5yzxmXWvHFr5pL8B6zHp8FKCTid93buSJJB",
  "key12": "4GTN8A1vfC9EKzy8JLTSG6Jf8Cj3eq7P5DJe8ctoQyfnr6CMwKPExEEAVx8VNGPCqncfnUwm6oVSzyWUb7E4u3vD",
  "key13": "3pXErdG2T39PayEcAVTS46KxQv1bvyxFntZfhoh5GpmR4UC79rmFUuui6vuJcz8wH1SPeDcSiFbbCMLzMtsTLth7",
  "key14": "JfrPeEhMn7Ui7gbkAzzMLPxme4C1bt9B2FUCA8WizG5vEMo9CkkXw2cz4YhedwYRjBMMAjdMzyCFLB7iPevEhw3",
  "key15": "3HFXLznxCXYthRVQYRQMiNpsomWFajyvvTnXSsFpHZirmsqvNmEXB6NnkHmm47vELA7uEkukxanm1kg3vshdwyBe",
  "key16": "2GG1n9EYNZS5eqtiFL5mBmmwvrUZSF2Qmbcij1bkncjTcyp3tMKwtZqNpUAVUHWmKDVj5TniZRRqKgFENgxtA1hT",
  "key17": "5jkxYEfu6cK8KN1dVDhcyFG5F2mYyvuxcwugxA7FXL6jQ7EmFmyCFwUTTSGSrU7fBEp1hLM2USL41C34kg3KEfug",
  "key18": "3uRZkdcNiWBkGGhYKZz1t7L6G7EduSFREoGeV7L1zdQACDuLLDCLwYZTUEzYSwEeXNZWYFnRHvfxpRSiAycF5Txh",
  "key19": "NzoLtRqLYQqtgNHtiGqwvNLaosawZNExYpBoh8GEkXa45hbKyEsJR2mU9M3TQYKboLCaack5Y585pzwer8RcY6e",
  "key20": "3MvxYt3WyjihYJcVm6eEahBZTRuv3H8ywhnMSMRzJE9KeCm4677DFmCRzrSKSne117fcQE45rDeVAhQXywa2g8Dp",
  "key21": "4vegGbtQEdTSVH635s5uaspKADhjRfNURZhsrKcWy6AkVN91TEqSUQSdatd3UZUqKLueoFCxtWEefRunMmGjd9ZA",
  "key22": "64XqentSv2TSo7LsuoetSJTpWqVmizuPWQ6GHkB3HmQU5qu6CiuLHLTq6HRjxQc33PdJUokVcCYQ5jkVNnyvHZUi",
  "key23": "24wL1zQT9nJTgAZrmvCVm7jmmJFLPH8dMAA8VMt5oAfn6WZc9b1AsxjjZnSpBgARVBDUVXuxZJL3uWgNMh5XBVXW",
  "key24": "5AwF5X6KgWDNt2tf1oadc8BkALdga6aUftMQDQnb1cByYi1dPRHtEbgzmUm7RK47pEPA9qHVU6HgTSvh2zwtf2Ls",
  "key25": "4P9qNAZP3sZombVS1ZJ6bPmDyoptAdQjCcmwRtg7YXxQj8dUyQdDaZEBEfD4T9qfYivgyDtHBQZEnUx3hjceFL4s",
  "key26": "3LxhRr9KX5dxBXvvZri1mc7FUJCfrSAXCcUk7vU8on2w4GUQjaMwsZUMgiQ3x6ybmqLoDnNgeaKrrD1VGyqkQVfQ",
  "key27": "4TJaVTNTWA18ir6XJdKckup73qrWso5eFyT6eGxHyeuS1RSTw2JzSQ68z1dEQGbewVP1MjMUWnZ4EwULUKBx2rdj",
  "key28": "3c7bmssip9Hv1YDAcrXeyWwmDUtssPUs2GCyVH9Ty7Eo3RVLvjghnsRGy8EyPS32wpCKY8hsZiHyfq6JSA1cXfF2",
  "key29": "3WfeGFVZhXrQCoBVinz38yHuW6z5TCEjqLTNq9cuaKcwyVYz9TQi2GnfErXxJ8wUpwnsTQuTDfdTB7UFkrpzWfLg",
  "key30": "3nqtsZiDFtE4KKEYVexDNx9GAst4FU4PdsiXPPJgYxSGpM1XAMqrGpaZKCfnUht8Xp2y6C82ETjtJhTwP2SdZmoF",
  "key31": "r34svuS4gexi4qoSXtBWoMyzqoduQNQmwmhgkM7oJFGkP8AU1uyVCn9BH7Q88RPFmnnh4sBwQZugw5vpAbu1vtf",
  "key32": "5AWcBEkKcf487Ld1aauHq6B3vMV4NTqaV8yU6TkgmPi75hJ61A3nE13dUGYEXtnn2XLGwsEapc6v9QsaBvqhiw87",
  "key33": "32sb6XjhW3eVZLC1bhABuKW1zVHDj89uMkkhAPca6JtcPm3oMwjJnVb3KKC2kiiATwtptQD11YihDXivFJAJCejV",
  "key34": "4Hdje1GStfFpwW2bxB81nWyjNb3JWK3ZdFVTfVwEnEv22H3bXL5mPmjd6DVQFc9Nd6WDN4YdtVEAZKrZYZv2qKgN",
  "key35": "cgT2aqUs9QRZV3v3MyAtv63nRjYUQd7dHzk74zDCRsv9tnxgXPieo7j46pW1i9GiabivSTCRCMM2aMHds7vas2P",
  "key36": "5JfiufN6cesykCggNhSJ2vyTcHVanJLvRsTPichAXWEuZfadTuKiVjdvZpRuax2qivDoVtGcgsKvADERjmWGZ4xx",
  "key37": "jnPMDq9QgprUsfFENQVBtHJ7RxoS493rvGts6uhEYRTAUjXzTq34Zxgr1Cy8ESvLR5bRpYVDzYgpWwyNxfst5NA",
  "key38": "56aTFv9SK69MGNywFrVic1P54rcQVFKxYfTZjCMDfDL4cGTS9M3xyGmquz2pRf3zdPB7B5akuUjafYF6yiFLUH7k",
  "key39": "3XVP7BN4fsDxfq2ddDWHKH3wGey2mXenuXBa9BZ9EDXHQZKp3NKThJJGgQpFpWbZZLRuorizoX1teCETyctwFQ38",
  "key40": "4XaB98hX6ujcP8mhGSGH6vv6uyce6HN7wTyy1cqUL9DTWNK9foX2pHAV2zHgXBEg5KchxKW8kkSH3cSeG4yCHgix",
  "key41": "8X2AdwP7SVNLQzd9xb8Koct1tJpDbHzoWVYHsACnadSTfi7X5DoR91MbRX8sqrTc96oJZ4eyDn4pgsKGVoM61u2",
  "key42": "55eDyrUESa1LAHKY9Jm2VWFYFWMTLcdKnpGDK2RdicjYV1PguE4U2qRgYoKFVZBHMSpvN1JQ4w7xCJXhN9TKmuiQ",
  "key43": "3hzVse1KHsWdcRcqc4KN5nKK8M2Z5FTdtRdL6xwexnv9jkrh82XoPTUVXe4vzWdCtNMNRUtcT2xCdEeZDGsPzh6J",
  "key44": "4aC4utyZ82uKa1dx72Jga89nL858gJxSMx6mxtXHmRV5S1njd6fDk7kwdGbSksRqMW56xFumPPEv9qvfxGP99LnG",
  "key45": "3u5nMZvFverspK2ALRT62cS8BfsuXiCW6evDas9B6P1GE7sUoHik2EjYU3BZmF1KFELPmtKkYbpoRyxkTxpqb4yf",
  "key46": "48yQJkJEVmjQcwxvHdd52wSpiSSBhp8KFwmMgHuCkE3YPRkeaVLy734iEP8Kkt4kWwwGzQaQwgpZbq4CmmG56wR2",
  "key47": "4VH5DDPwYajSYJrQ3fiJcKtmUsLbYxKMceiK1x2QmuV3mMjccCthfwzk7BvY878h1hguKCEUSkCWDjcoqcrFoFNE",
  "key48": "W4bq9Ho37sa5pdNkwo8iUH87Q5yzDHQUkjaAJGQ2PfQeUi9EahxjQViEz2vcFrR1aiDQf8mgxeHg4VfdZSYvxM7"
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
