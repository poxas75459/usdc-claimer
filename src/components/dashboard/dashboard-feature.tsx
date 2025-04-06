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
    "rhhFFFxVh6kDXfxjKHiS1KU3LDnQLZgSczY1QW328jTS9XKmyxy8VThQBbknhAkAsn3uceCzKnP1gm26u2jqfaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e25cLzia7NgRTcwLxNpx2mFCC1jbZYQscFzgLp7EEuTKTo8aP1BS2QkqnGi5ynrFQDqbWaeP987QQ4HoVwwz8ox",
  "key1": "2BTzWMw6kSAEWay5M6Y2VXTp8NqrixXNW1w1nw8KXLWRKiWpDxtCxNWnam5M4Fob8hqXvcDfj5SB7QgQEhpW1wPh",
  "key2": "4xPmT3b71EFB6XgGBwHuhHTsvTTXpy5mrjQniX648vuHaxCog2qzKXTCmvEWGLkQ8SP6uqJZL5mrhczUbj7P4kwA",
  "key3": "3zqMMWogMKK53fTbaf6cn8RcvFE3YHSdATFsM2JdhHDjJ1bM7fFgqpKKR8pvPUBA911JfX93iREYiYGYZwsYJ58W",
  "key4": "3NJQDyXwb5WGMc428eDsCdRdsUiv5BGhq48WkDE8yuiEVUosUnGVq6BpcHVrCys7rkHGziMvVgAGKi5Rmr4D4ANq",
  "key5": "2Kcv8fk7HhM6kfLPUTuSLH3b6UAQSoWSuXD2Qdyyct1rG2rfk9Jhvzo4kQtbvNL4hEEFgTdRvMjRKMDnxjRNu3GT",
  "key6": "egYaB3QbqXYKdwyyqqEhgTHTmHSTiD3pKqVuycP1Yw2YCCFkMgJQBHx8iLxUrpELWLHAnvhA7fNTkXHykmuSBnj",
  "key7": "kMT5d2pY1zBMckxE2MaSFonGfpy1tbAg4cGaZM9fjuj2D3zj1w5TF3iwURtw1GkbbjtBY4qjDJcXC4hpZ6uqv98",
  "key8": "5aPzFcPUfUnYADSKLzrhAGDM7Fh7cG2TxQFNiRbcZE8j8vP5enispfRFmfQwoFhj2xDRq8AsLeWMZgKvCbQEuRMy",
  "key9": "u2Ek56VWPS1tKtvcKjGc6hJYEV6XXsEbZSoPzy5Db9AYmdhFmDtJrdjCdXJsVt3K7orbSvizG94qPYqgpLVHEbW",
  "key10": "2yQPo5cFJSnTwVX8RKrPA99gdZzxA5Q418ZykjjKt3EGGpupExJKGx9fGFusM7duhXnaMjumDfpiSTVTDpArncY8",
  "key11": "8yPz98dTQr3Sz8JSRJimrLK2xSxffimHLZBB2UGx8h2koBPexwCZDcRZWBnbi1BoDZfav5NHderuC6QMCkrKxN6",
  "key12": "NfFfDAroLB7rDYdbKDuJ3zdGNujrv2JaGxiqLZVc1SAfTJqvWvUNwgtfc8qD8iUt7PJUuZaAXtnE7Wgai2iomcq",
  "key13": "3f8nHZUxiPa1f7TbGnAExbH5xtwXzuJKgWSpxZLG8Vx6MGmT2uMa7TGCjs1DgYYmvtW9dAEXPV9GvroJyasCineN",
  "key14": "2Y79g3XWQM73PEVX9pofwro7pm7DwkhFmyWgHLGP1tY6cheSk5FZie45RK4RtSJzQdsyx2R1qLwrku3TtcD2jUc8",
  "key15": "cCG6njHDNqnpuTxUTvstyyTiR1kMVKdxMc2mNphFERJRhukTewtJhf17ZYkmsGKHCNwUmvGf5DGoon8zvRt746W",
  "key16": "5dnxoR1SMTjyjjpGwYH1ywc9MXPG2DE7QrLXjf41AMqxdyUCe35EuLZ78phuD1W82vDenSQ2Kuw6Bb1ZB1wmjT23",
  "key17": "2GRBYKf7ziXsDYB843VzruzZHQ65Jhfmi7e9j8apanoGCqVWuzXaewHtbrgwzgNUTELrMjHximQKyVZ5ouRjkVSM",
  "key18": "2kvsEFkYV4eEMYDeJZeHBS5T3gZ64Awhbc3WLHx7j6krDRZZWdbDrDytN4qpNz4apmmdBGsidBbjMqR2gRqCGkKh",
  "key19": "4ed9Cr9on8oBBvHFgScYpxNpGPgNn95P7r7fepTT1azJVSw3GtqTbrrMeqR1MC6nJE6pRUv4C6TyRJHNSz3yjQ65",
  "key20": "2KSbyG7TYPHoLMMno6vvu18HEfmtEHYa5QijKHQkuYSZxY21RwTzfWLExkCwh17syveBdmvQWN3SkaHGdHT4VTJk",
  "key21": "4QfqMhMtXHyV8yuxbSA2aGguszivCEPZZjFFGeTCwWshQ85dFvF7Uedv4gHe4NhumKJXd8hdJaSQ5T5XYjLRvxQe",
  "key22": "2gUhS31dCSEkMxkDZU9QCGtJW98ZbrvvtSa6KkAHB9bFMWZ5DyXhvXoye7adj4xyqz75ooLB1AGdzPw3CWoqA7cy",
  "key23": "VqtmC96iEf3g7NC4wYVpUWUhtQ2CmifEmqUq9GwCUZnXW2S6qFNksd8S3pCBaSd6rJnbbhWqNJi1YY8WPpGDU7Z",
  "key24": "4B84TVUr6mtNMb7KsYsFwCUR6z4PpCsBcQZKKybtVjrgNr9Kw4FFzR6gjncU6pDHyt6KTCoNKBXfi8FGsExNrDSy",
  "key25": "tQEW1ewAvhKBxQ5wZTBruysV4akdZFx1zCPirQ7SxBek4J4HpeoEEironugSbULnE8ahhRiCUHeaqR1FmiQLxpc",
  "key26": "FEsWoSJv7kLRzfphK4BYpJf8sajszCmp1KWhpSJbBRXDt4jEP8LX1tGtC9PEnfiwZwS9hTFurt4YzVgMUbQE9RA",
  "key27": "2rEitXmLreufucc4Qpnm7txcfu8MqLfr2dLpJ7wtVjygwcgCRX1uikYebRh7YKf7Uv46DMBzhxGQx3UE6BuonFmm",
  "key28": "3GqfxiaPbiNeKQYtecdcChJA54QndDci4u9HjA9UL3sawSVaNVRXHKCmrBd3kYJ3j4sM3ixX4WUrgRBmHX9szWrK",
  "key29": "EyaDhJKvAgrUytVMuLJgQZrXL9VfnVo9cCLHDqnehShxdDPR913Y88xzhUNvCiSps8duWrUL8sVVwQaaLFpPgYL",
  "key30": "4DZ9DiQTnWhUX4zdywTms564dViM1u6cSzqKeJsQ7NRBz2zcJhQ7zrswaboLuvRdiMgx8CmFNv6hMrcgiGNHpGub",
  "key31": "3HfK9yoE1Br5k3DRHg4mrT4EMAitx6ZrNwvUvzgasPPfRWkZKo5Fr9ozkxdBU4hWNbLNXrJCty6rFPKQRWZ4oXEq",
  "key32": "3ASRjkJV4g71uncQPVwaGMXGU4gm7qFUJthANsGAQ1aBbEU5kjC9eEjRrW3XC78jyniBytVtRLNKSeLcDyVS97kd",
  "key33": "FBNj87K1Cbpw7CNHzHDc9rNLuJGBj2J1C3ymD2M2Ppw2QYq4ayR5U2PRzrpEZERdAW16HhacCnCqMY6L233Msq3",
  "key34": "4fEeqeG54bSqMhc3NnNfsEabC94iUu5LsvEshNZdF9miibAoS2TTYZHJh2ie6xpknVKo41XhstYeLScyW1YuYCft",
  "key35": "3JoJ5cwpBRsSe8mH33a7GxnqQgsLvBs9RnaxXEC6PJcFe3hf6Czjw6WbuJkvke5EVoYBroUS4qXweXo1fiDY6RiZ",
  "key36": "4xZ7sDArU95kEeGgPAFYXbsfNNW2LhL9Hit9EQue5FAVZqhdS5R2HStVVfU6Yjm7qN6Nn69NxCJEz31bJ4VafER8",
  "key37": "oz2Eb8i1WoYCXRKM6ttx6bkSG9ABhnpBXKgARAQTeXRxW2zA7D5D6Ce1LdKrNeMP2i2YzFhNNmFs6mQguLkrQaq",
  "key38": "56SvahhimzYmYkQVzoXs8x2Apd8zxeAiqdtQyPpVGGcyE1F7FGdgXD7Gx8dQGsMLDHqkW7i9xqhjQ9chAc8ngvDD",
  "key39": "4Z3Xpq9s5rWHVTzfSYGBKsonaNKQhDaqqTM1G5tAFGNKx5nKMRJZuzdp1wnvSRoTZCcXLDJWhM9c3XePmvm9BDzK",
  "key40": "2twTmanP5nha8mvLocFNS5fNo4FGfkuEhdCgq5HwWWWpp435LWc4TXmeKgY4v5i1dghMLPpiC3wKzQoPdTUVm1Hq",
  "key41": "4S5aD6pBxDpHsweRHAqWThikjcJbZXPFwmLsBpFDC1DTHmN27VNqQfyGdJQv7fzGoWXRpA9WhDjZtkAZBxyXmGRD",
  "key42": "4859BXUG1BTbtHn6a855LG2GjQqHpRWWWtsdvaDRMhHzZnxmnTvgBQ96hk1Duz2DKfwH6UMoo8VR2Wz8oabiTX59",
  "key43": "2GvSr6nFigeEATo66pxTyvfJ7gTY13kQRjEYdTwQS561LtLhUvyyKGyeta6Z7FPe1NJD3LSRvC3wDdFAZpbcghFY",
  "key44": "3wFVfJJ7PD5uiA9ChTDE3zLYa3bVhG2XiAtXM7W13cn7B72r4CJNQMQScwTNJfAjmmdPwR3AQp1wsSLeqb8ge689",
  "key45": "4RCdtknRkbrMM94r9fdCE3jMKLNvNnuSrf4A55bf2EkN5gvgiSPdoeTM4YwU1CYVpEkUCyyeQL2qBid6K4X6wJ6",
  "key46": "4jWueD12hUTYE5qAzQpXJjFhiptjADm3vgdaXJu2agUm71dhbVQAiAKRiZDtXM9QbMqP15jUCKSv4249zbzJ5VYm",
  "key47": "3EMbYrP7g1QixcX6kbqffyyEb4U2tKBJT4K9ZLyJGJozoN5mGaGVK4GnJ7r118tm8Wk4XucBfRA3RRTHmEDvTM1A",
  "key48": "4BKM4HhYJMq6WDPBDt4rEGTpjvG42BueNiFooi1fMF51p5VqtYMhv1CNnXRMSw6sX8ASjy9w8ncAzaWQoPW7qUtC",
  "key49": "2NYJWfWBqdEgyxV2D7s2yZuzjaTK2odqSQhMqR2nBvJNB8oChttWoz8ohpe8RKfNTpdBmTNZa5E24BWJFZMfCU54"
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
