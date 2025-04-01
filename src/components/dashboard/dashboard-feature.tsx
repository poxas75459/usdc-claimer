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
    "5BA1moKpWeTqBBc5gwJtHGfuEFb8Rt6Ki6buRxy8MbFXHvbzF3N6fvBXFLgaa6rQhfiaDUnh8Wzt1jjCSLUrQi8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UkDNsvHwAgEyHwLJiw1EUrAC4Qw2oTgzhDfcMPYD2A4bjJ6kQdDEtSVKCNePy6ZyYwY7LxSziX48L1nZTi1qauG",
  "key1": "2jcjYrDWHagp4icMvj5hT3KSgDcREHatct2qLMytjArSHuSGVunvHuAkkGdGGbNeQGuLUGTc4wseG98WeoxDNVSf",
  "key2": "5zXeeattgMsafFkpFDpWmkUucgRiZ5XEhhJuWeSQi4FdbtMS2nYbosj1rwTKKrrqRvHYCGkxQmzDepn96r5KhfqY",
  "key3": "2td7z58HQ3g4WTHJJpLjgjzAYwv2dqXiN2i9pZ5iHxqofkDiyoFVzuyjmvbDPkqHZyo2o7aP9zYiReNPF1TueCd7",
  "key4": "4a3Cz83LwbAG5j6nCmWJ6RPbutfSVHEoSZfTX8ATV46EmZcxVCAz3X1e7MBHR13TGaXhuWKdwFDArKf7v1Ggp2Nt",
  "key5": "2gNuB27dwRK3UTXuh1wA24nG3AMC8AbY9g8KReVaJD5qfDeJKj1Rv71rGBWz6bFNy5fYmV71EryGocTR5yR2qnXb",
  "key6": "43SSVonLLkc3a5iEKAsFpsJ8ZP9CsTNmptxZyrN1AcwBA229DhHtmoifC6hodtpJQb4JfoZDRSnWFsFtdjxTuecV",
  "key7": "5oCKieMZmwUjXkCyqBemrAWcJ3qyaZK6V5VoF5QTVyEREQKskhAEhTYHhJWS3z9kq85JZKZzWzbmD9p5Kwhz368k",
  "key8": "2cATp26sGatcCHLoK48XtmtVwdrPLHu4XXeWn51hWnx7tDF8fKn2jwKh9XRzVC4soT3inBoXuwxqVNtjJRWS1GqD",
  "key9": "3KAAwwfDAbhASmwNT3JcTtGsEEK2oHE1jSJjykEg7kXNXMpVZiN6A6zoagT9XjuULKkQPfJD2K7E3FRyv7viq7E3",
  "key10": "2meWvXNXMHKQZxBr8iYmQ8aFXr5hZK5MXfyG2JRhhALzoFHBcELicfgLHrjFKfFXP78vcc5iBeuCNG4fSr9DvEkU",
  "key11": "4kMTvEWk8pK4KyW8XKBiW4Zr6hW2gYqJBH8Rs7xZuWL6M6GR3HrqLjiVjvtz3fAWQ4TaVhEy9MgRUFcVHtJEnZy3",
  "key12": "4gAauaHsaaq4etVY7vzDaAN9GPYjXY52JeeiqciQnKgAqcU95qwHq3m9zhKfWba242PSGWLKjrXqD1bNVzvWMAM2",
  "key13": "TbU2Qr6q3MpdxMMcCAqjqWrK5UN4vpCxNWkBdVXNKXsTqW4HgpZXtM3WPHLmTEYy1nRK6pdERhaKK9WdzWPHGan",
  "key14": "41mJc4dsQjxdpC4ov3jtNc5Ji4JZ7NoaN6U9Pn35XK8jcoGkvQfSq7ug6T91uh9gKPMBHZUuzEVqRLvDJDb8dNQv",
  "key15": "53uSfWxAucwVC2zCkLVvEgBtsoubAq3Ve6e9qJEzojwC5PCzxvrhBNRra9ngJKcxWiS1tsRmAZPCj9Rwz5edykGj",
  "key16": "4xikxNXj3RsbCHZmKp9R7gmyJhENqmQ7xwSdpQR26PHewTzpNUmUTegR9cgWsySDsznjyophxKfz1K9PDFQCBwgK",
  "key17": "2rzUkDKDnAq7F2V4zyyFFPr9Fp5B5GApwT9MjX3v3Ggg7nfAM41yjJYF6ASMGj1KnpvpCFL6UmESyXimo6aSmAKn",
  "key18": "5ATvhyvNDPiRopjmQ4wEVuZxkr7Jvmtwz1Gr1SCGmEEgdyGKV47WiMGobSW5MQbBNqM9FuZxAzrnhZhq7sM1bQ53",
  "key19": "4ed9icLVpF7d67wMXBTy1tqdUiVq2dCXk7i3ZfYLhMLsuWW5kw91xTGzgwvBLm124BF7qutM5pfmDUdraizpbuNL",
  "key20": "ngYLMHaJGHbYY5h2mVM97pMthrSvNtwWPtgsmfdYA9X5YwHD2DfZtHgBHypN6PgLZqLwi2QXayJZ7oLLiHi8cxg",
  "key21": "oKKXCuSiwLCbTjCXdPWj784cLE2v1cCuNcT4d4BuYtd8vYDdy4CpCM2QpHe4vefjm3Gdr66NEarhZfvo8wkUjbZ",
  "key22": "5NoxGKRFa3EwV7QPnJuarPobxN3fSYPY38daXCqikTcCqksUwSkrWdiVXBdeFotW4jGgApQqHdyeoXFxjPZU8ZhL",
  "key23": "sBk2B9cTmtTQUGABX2BeZsRLdLE4gzVn7RfDbwCR3aVjgU6eAf24nVsoErGe2KwCHoVBR6AFw4W5QyLsGUHdAnr",
  "key24": "5BrpMSgQHarF2t985PVs89KVPu5unoCN2BQbBeQdiHd2hSyyyQmAEgT4U4Ti3W8im52yewHJhBaEL7LdhQqRfr2f",
  "key25": "3mdPiGnpcpb53EBCXtAnPwQ4r5jGJBcbsVukeoSKr1dF5LApzNBWj6FVcosRrFB7cgF149yCoqfRtzLNisoRSXeZ",
  "key26": "5FCohBEaQF9T8YX5A6izqB48sukPiMwpwwmWdMQ6NBREHg3o6vDRSSDPBS3Ar9sHBFoSyE4uMV7rLkCumaDwLzP8",
  "key27": "26HpKz1iRC7rfNcvda5DnmpMBUYWBKHpJAAVzAiZRvB4HAtsdPBziZHeiWappcBPKptT2yaWNZYSVk1wrVp4DQJo",
  "key28": "269VEcSAudBrjUbu7JZ1wQwhdMXRY3fcxjmqCBCovAdnnjZE6XRKaPdhms1Cs8QBvttQMEjay3PjKUNmBX5rRCax",
  "key29": "5Uk9ov2hPCo1JYuHCLq8oW7q2vcMyRn9VfjiAh55rre3XLNNvaCVSRkWfJMVxRGVLeGkPwR6USBtMSfU4nGJ2bza",
  "key30": "4tBpV9DmVtMwoTQTBi7USzvXcuzSCA7KdBVNCZHg9P5Qdkk4HzukuYAXvev1XL2eE45FzgmYMCPqZFbtguEfeaZ6",
  "key31": "5T5zW2KLZY2iNJxr1AfAFW7ehexSa8otXzCpRUb5T3PHsfrrFgWRkPDXiD15skwtvhU4unjqeKWUBbvK7ytAbn8t",
  "key32": "3Vq5iwinyF4zccv9bGrgwSDX4nC1fdo3JWS24xJHD1giuxXdUa4CTfWouXcdZATNYDU4oZcS1Nx47EVCNo3CNarY",
  "key33": "NVP9mV6FEAcBK6TjC5u1XLYT4eFbmTQaSkH51JEQRWEAhM4Fw8wSNuKaTZ6dao4ecu4Df45aeCG7sgaAqLWbSyq",
  "key34": "3zkaBQ6zSVUeoHNR6uqCWH1a2wRQ6EyCextTLvLXGuh2kKe4TiYKUvPbqaTCGP2bvj66iZriJELALQtzwAERfz8n"
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
