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
    "3hKF3a4PRpat1FTGnRbutnNshh6xoNkYnHk6B4UnrGfJZn9JwFFhikVKYak4DTNFTSNzGvAPT5y4cyL8XXuCymLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hBJBzdR7nGCQS3siEtuAngiZTtuo363ASb2M7A8ELuZEmjmWe37NCi7BoYqNRQHXUXVHoogaYARvBTB7PQxeyqc",
  "key1": "2MErna4ckpkpWY4vtxUifzN6mhijutmgpGBcg6EnCfm7AAqQNNKk8Ro28UY3SoCMAPkYAN5FzjrV3B3sDRgRCMKx",
  "key2": "565pQJcjCzX4HiGSdQWR3AP2AV5brRjK9dkBRK3o8TzwrNxhaRua1DXd3azcdmsXRRYoJKGGhdzXp8APPjHXW1UN",
  "key3": "5ekzpXCejpcg7vqYRpdYQk3nqdDnzbeDwdJRjPQ4Mff9NC2cJqubNsP9dA8nb5MRYp5VBq1PAzCtbLLoAVq8A8iZ",
  "key4": "24sh4m9TRnQZTVDGHvwxsLdNSbS2s1zLse2b6BchX6PLECTZMKAMc81AyDKFYs7MA2D8tViQRqCjUMnDRYUMvcbb",
  "key5": "5ds37Wc3U3MnKcZFNrG5QXA3m1qEw1pZToLzhXYpbiERFqzWgRtL5nSSR6kSuUfBbqwfazVArHZymEHTpB4iqPvm",
  "key6": "DTNPENctaaUHnf98CFaezysBZewsx3dHJMHaeSQ8JmfWvPT55vja9JevgXEmBKrCHxoQfiaJWa1FrjdoPVeDK7J",
  "key7": "48fpoQwedNiiKQVKqAMM8jfYtP97AwfGCSrJbcVqom2qHtKDPnXjT8KSrhwYK7PAVEMNXLVBnu8JxtXRoJmtA8BD",
  "key8": "XvYyxZwdbubXvJ8MCqmj6chXSnMP6gmkq68i5Z8PxFaFXXbf5m5Z8eHWarYRFx7QpJghrVih3EyLzbRryrwY34Z",
  "key9": "38Dzpsejogb5bahHtLzNtrbyUpunQPBaFXWHbqjfcsTELQTuBTRCQE54iD2BXqfrtz599oCmTgu9gh2Rn15bRwuE",
  "key10": "5DbY7QPps5hQTpausR5WeVmdePZZ9yXergtqVgeGmQB7vA64USmT41ZiLWEoAkcBqbUUBQbE1F937d2eTN6FTvxe",
  "key11": "5pxJ4xBRMuhrheFQPK1WQXZEjCvNdPDpjzULmkbmgF9vkiVTyPBnpuYmuk3Hp7kQcBeX8NR4997uDnp1SqDHetAc",
  "key12": "5yiWPAmtdkq7aSC4mvsUZN4XRtv9e6MoqntjPG1jBGZ2St1FNuQqCb5XbFaE18jbgUkj5TovkcZpzfbX4bLzFc4S",
  "key13": "5ibyjrti2PMNsXqUtpeaB1eNwkDt3kdcBNXgVGFFmpo5yUiNwRM6EVPUMH9mBXrU95j1DCReeXrrU7tyRtuLGUbJ",
  "key14": "5W65k3vpmtN45EuG4u3Vyq3iJv8sza2LR5chqzx1NMp7SCTbXXw2PKZygJckEn16ZwkPpzjTH9ei3TRNJFCM39th",
  "key15": "97yhsWY4hadJBb9ahL1v5Dex6CVgXdEuS4Mu9EiUmv3rr9jX3BmgLaMc3E8ZV4PZBqjvRP9URfwE4dV27zfMuBp",
  "key16": "4VvwQ4zwSPZPtAujqpLaYgkqKsiYodUZuhQxzTFQQQok2YHpqX4Y7pTL1fpuwCmdVsxr2xZWJymMuqYvxxJMDQ5S",
  "key17": "3vH2redcnaPxoGgMMYVmTxiEq63DkqXPzbEcMpZALFco56g9JwQaw159VSpUQGvw4WEm5SH9PRVuom84y8cyGwy8",
  "key18": "4yigDr6twEhd277jJ8yE6NL2rUizQ8JqB3wpUyLVQajRe3euKeQxf4L283HPAsttkH4A7XTgxxrHbVVke28X2qi3",
  "key19": "5FbAtPeEog7xK2tGNMjsdRgSHNX5QSnsNYVJwP34hai5BRnv7mJmH1pdHcSBKQQS8EYVESMd78Cp3u43RZ7qYt5G",
  "key20": "3Lbjyv9o15xVHGRyfcWbd7uTUpwvAwG2JJ5JQf1ghuFuaqtsSfh9kdYTm4vZQSAheSaiqnbWUdiTWxbYGkjiskvq",
  "key21": "a7BnG23eDJ9RwiST22u96x3bFB87o8ZVpTQwJU6ocjrSzteXozffHQMnDhVe5h1ZSqVHmtv57zPTyRdfHDUVJdh",
  "key22": "5jmE9U2FUEcchUrgw9LDueWQd1msk5ycHz7kMxbXVVxPwEgArwaVDsuEy6Uq4t7NcaAW3UVSoRivy9KyGmMJc1Lc",
  "key23": "22MEAtbYBeqPFEVYxa3TJCDekfERvvkTBS1zDdBtGDcxsFqiidFTkzPTJbQ6THEzsCvfDfPfLVBUWBAbYE4naEeu",
  "key24": "4Qn4MSwfwG2492oCVNKxohPYCct54w6Ek78uDpqtNfizHBh585sEUvd6vAnJQ7tioykqLNnVv828Qwf34uCtcxXN",
  "key25": "WhuiE2Zw6Swa2sTUep1vTdyvjXdcuh71EdMvpQN8qMqbfe11efu99WzXxeTz4kfq8iVuz2nU3sKAdxwiqJeqD2V",
  "key26": "3zXR2tFFBxTDhkWRQNT2ePL5NXM2Gs9gJxBxejxijHULTAhYdG9cJqdtUA1B178GnSKNaX3hR7YHWE7ua44zjq5f",
  "key27": "2FuVpKgqe23SkaXvmgPkYm9pq52w3YuRH7Ac6kjyeE7uSuKtYn1N74gjJjPAeEhFfuCf31xF1Vy9Zfo1Yrm8HLyi",
  "key28": "2C775nCYHXA8zzWfuBnUEQfbmhcBY3dwAd2UjvCJa1aGCW26HuNP8CAT7CE3rEd7s4PuFDVMgvfNdh73k7QuK6FR",
  "key29": "5vCjxGo2ySXpnm1eaCJ5U5EahxGAJMnwcSd2YAyh9ddGCuVDshbHiZnSTaXSadcxHu57wJXH6WZeKwnQCcMRtpUb",
  "key30": "eJ1dbUsSmzdUcDfNK9Xo3fJU6zs8N1SQPc6ngf2YyZYZH7DPDCFTp7PB1vqWtSq8wqPKYGFx5YY7sAq486sZvMw",
  "key31": "4teysaDdmxZXrDtxuRb3VkPdNxq9RUUBmAQMBGtNLmrZL1yUyP6B67t8VCZ7qWrqMGsuvRNsngPR73qns6CwcHzS",
  "key32": "3JHhFd2kBnJBvDNLywxg7hbjAzWGXMuRbqcXsWwQTgd9UenUwrc8KBkjpny4DyiN9WGgwqJttJcQizYTSyz9LRWA",
  "key33": "2dKgcrR9e9WgU3Fdf3kE56rk3S8tZoEdfQV5ss5fVhb4W9eH7nCAu2CmA6qZXhqApJxwjFQ1qR2ztxRPofEg4TaQ",
  "key34": "48Toctt5mstbxsqjejmBGhfWW9SmRe5TXUyF1SNtKtV7Cki869bAMqwxEQsZzJerFF14fKUE1Rj7B8kiPXVPGtLe",
  "key35": "5cVMVDTgBF8UeBny1bu4UBVX3G7UtexHnB7eVbjpMsfuvQPdmVe1AvYLM1G9SwyGLrAX33FGPYh79iyVAwyyJXsN",
  "key36": "2szZehrBmGwWLkMBowacwL6MmMujyZ1jicRyhRVKxxDamcgQ78G2HFmZyus7i5qjbwiiLE5FcSmHZ55kEJW6UDz8",
  "key37": "4ReYe1JmSHxquzPq5sQpMB7pyjs6gJLuniraF6MyWgDnfSsyvrMkiqDXn8G3Rbimhjc7ZSvjbht3Mwbxueqr9dQw",
  "key38": "5KXxafoUZ4esbEaGNb6S5EpMf6Uk7hvuzky5VGW6SBL9CKmJzoqE7SWxCZtDpJmFpmp7YR1vGLihtC2F7NEXPfzQ",
  "key39": "4Lym1iqxwwq87pjNiJKr7eXnJoyCnpdkQdpk9WYMB3LnNf3kb1ma6HJT16zKTn5PteTvfJJmBsRhYDtMufHZtf9R",
  "key40": "27PVhXAz5hDuEL45Ww7noVs3qpd72Guebix3x2zCpFcBGP71vxCjmJnP5G5hNgnoHMkGswmdgYsypvcy5uCawAVV",
  "key41": "2aJDXE7HKGAeci2p6srJdEDj7DaY4qFEeMSbMFQBNd4Tt4kz8EaHUdt2Xc8VE7F5mKDYcQChCkb7pBD2diC4CSHZ",
  "key42": "dLdEbrgB5RfRCdHasipjH5mntTkt6zQT9pEMMhoCuoqKwMAHf94hMxqWEUHpmMnQwnUGSNAnGp6JfNHuu7KvKPd",
  "key43": "2Rq5vnqLjBzovSQyUzPdLMZrBSQXgPFayVwwfo53bVvQYiide3gdQRbHv16oNV8fyfBorGdY8kLrtqc3sEuPmonT"
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
