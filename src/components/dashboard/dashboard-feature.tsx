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
    "pd1MEdF1GRsTTd5M3m9SdQcvtaTp3ZPcXnbzBppUUeaDnhUw87StFzegxSwgqrFZScqr6iq1KRqNehQJJjzdzL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kDbf6qD5MFbkVb8pKRRPnjsDqfoiDgy99fzZvhsAksjvNLyqfiPR56YFeq7n3mawrxcwYuG3gsXoXmpzYDrc2u6",
  "key1": "3xA6ZhzyKSGoqWtac7Y5DzGLSskTkTkYGjn7jMmNyETMKMhcr5eTQMi3gEJ7Ksr4JyNYcQS3oDcmZguPzPDJ6Vbq",
  "key2": "5FYUsdeeFkf183fZRcPaPd5zECxQ2UcSbuVY9hvam8hFRvcNTaTvDqC5nNAPEf9tzJT7yHiZ71fpjCArL3Pei6jk",
  "key3": "2vJExC6zqqWX7nD7tSr7XCw5f3pTvPAhHUVYMpuAfryqWZmTcKjq2Z6tzoeCT8d9Z5d9KUP779yYz3cdvEJNqDCw",
  "key4": "3kd9maAuPQkoG1pgZyv6mXvVbM4dn83r7pTzyb8bZwy6CzfHgnddMxAvEE9mRCWR5aGV3FZ2F7U4ySipUNWJWg7r",
  "key5": "4Vm6jNUrec4zDN8fSAxdaL8XD5BuFtaR1utR8cekCHKjVe4DKnoeeLJn5VUAEBjJJ3JgrSKrquvNeD8zzMiN3oFg",
  "key6": "5Xc6KK6xAyrceos3YvHAin4xVaMybBnHwdC771jif1ZCCLPvhTf9NH2pEiExdEeUbYkoVhsQZQhmBHoUThpmhebX",
  "key7": "535xwK8p66PzkHVMoWyqB8RXP8A8aDLgfcxx9PX9DoSwe66TYej2CtRpVQxxavJVPEcZR3BwN9q3raRwXdhjHDDG",
  "key8": "2K1c36jZDWL2ymURf1BamhwrG2o5Y4W4BitviLFnLjqY4wG41RXNE6JhuMXZ9hc3ntMVaSUdW6ZXfoweQWMRmHyG",
  "key9": "5P6LWS6mQoj1Ljj4tJy5XfMMTzuv91eSJoqdrBuSbpqECeKoXbHTVKUpJkqzK2i3vt862ApRnSBm5Z3nMb1Dibbk",
  "key10": "TdCE8aDKmWs9cGGqQca8yRGbjrCc9emvdNYHRfpFtLYHhT2fdE6ugU3cS6TaWUPa7WNuWn8jf93WXGJsRtfnQBW",
  "key11": "5iU6wdV1MEx2P1NZ8cMLqfsTxyng8YZiVE5DdM6GShQzGXcEbMjuHSoTaQVFZkATjhSRZvr4kmkiAzKnt6ap2n3A",
  "key12": "3Thaqyvpv24ZNjymmr2Hu51vrJGRP9smZ7vvSnxXDwRQFCyFmbbFUpuvCZNu49UG8BcX67ZDbuB2bjLEc2CGuqQX",
  "key13": "25SqPaSv72ac4vrBm8q3H6XoPas7zko7AEvVAn3uzhgQ3JnTJGbyhLYv29YWMfdy7MksonoeFgLeAwAg7JjksGx8",
  "key14": "9nqwU7qi8MUmJyLuHqMvi53c2ihqcpxwusMZYQt2gj1A5YUGMQXqm5Rk6cbTPBzcHxF8zhtPVEo8GnaviWM2RMK",
  "key15": "2YS5kcfCMZTrmAWkP9HbBvmUcueje2czhujC2xNSqD63VfqAPFhsvqzFFRg6jfxBgfFtvNg5f12qSzvZN2QaHMtv",
  "key16": "5eTSNAHc4wuzJEGUz4J77QCruPEeep4VXC363UcTnZzouVT7FvjxoHitSFtiY2ULyjyyC2J1iG6sKEnDxjns7XtY",
  "key17": "22m1cws7gEQbsvuaLiRP9aL31kzxNb3jxeZ5zuzTy5WafoSrkcDX2v1zztZ8Y62StXsXaJBmeYjp4SEcGc4i8u6c",
  "key18": "3cmnxqC91rkttX1kY89w4ar7cf7Y5q1JBjAWh43ghBoimasXunhizvLpYHmPxKoCCCtXGFFCDwuWRkgHTzbc9FZC",
  "key19": "5Zh8NbA281Um6aGaFkeg2ahKJkmdzEfYu1W1o8Q3Pp5kR1eAUX8bx3ZpJCB7PVsBcoTDaKMZwBm3oZ79usnqdhwi",
  "key20": "3wejkczCUsKftMK6ooZ1fzyN3ZRqGrGRPrceDfb3xtwhyRQ9UB1v9SjD7PnuQphjuH5rw2gqtcDNPD8hBjAK4yQG",
  "key21": "4HbdsrPdefHTguP28bMzhixYxdd6L8p4pEvPvzRKDk4y7w2QqgN3LGsTzry5GSWxN6ZAvMffh8ywzfA5ygZW4FuA",
  "key22": "3zmiods5Q1vMqkgr8mziJb39UxhQxJjbwaETXKZktajVmmdNGEVZTa7nTjn75CAP2qrEgQLMTWcHciQVbGrotDiw",
  "key23": "3QVzuZ6kczNwnWf3byf44oGyCj44b9MLgKoRCLdS1cNUbJohm44egWJRsMb6hefvXzb3ShBdtHYsgzSTWqBiB2mC",
  "key24": "3nZJMQeY8NYFUVJBVMLhcV2CgogqhcnMWAfy6ffzVq97t1odGj8GGx6odSFnyFNgrq5vAcwc5Am3Z3rjHMQNtV1f",
  "key25": "5T2eFqQBd2We5RuC8B1JhE7roAtNtdRHXp7XC3K6tnWUeehXN7qqYaoUDscaih8Be88GkRFdxceyUkjJuYxoG4Xm",
  "key26": "3GndLDQWVLzMpUJX6rNRuV1nXD6732oiwox6UcmNofYQLTd5CJzt2iZ6ZNCPKCVF7rjHaCZntJAyrWcSno47T3js",
  "key27": "45si3s5dzssZMTfTpF4chiy2THmdaC4rLV1ek7PWRe56mB1Yiui8zqox2Ty5WKMhzMR8D5k3yHXSShvmnobTsA2D",
  "key28": "5NcEwPGUfYHZ6SKSGnuCoDcyFV8LRvrguocxYKUFxKUNZuAt5xM1X8qp1RrdQEtssdL79eGLZFgLuMd6axptJW2v",
  "key29": "5k3KFmGuui87Afbw5W1Lsu2BJMEjksvTU4t8Civ7JfceBCYnh2dAWYDGpnYBPfyPQ7TSujJf7XiV9GqPMvqeVrBb",
  "key30": "4tVpZvmc9cvkeVqpqVPZwmQyLDnUtxA4nqgRLKdzPGSFrNmSAEW1CAuL7ubAg7xc4sbvW9AY28g5HGX3TMkme4i4",
  "key31": "vW7kpdxapZY7Cic1fXo1iqH4qTX5EP8dRbDtADZf56NtBDZc3dsUdxiT2D7SD9WL7M5s3robFaENbXdhiaSCaaX",
  "key32": "5frVDdpb7GfZvg6Lx56ZQkrHdKv92takHkbDfDvEjEPhzN62F5kGMFesR5fzbWPBWitKvJRPtSKB53rf6Acx2YRR",
  "key33": "4cm45oWzjiGnKzKamLgdcLvWXMWfmdzaB9p7ZmCsysFUev7MHt2oEEbnwAv4p63NLYRZFzH3xqFGsNREjjVfhf12",
  "key34": "2WjJw1UVJMsfVwaWUeJpDCLme4dgfLYm9w3zjdbLXSBNHAVNP7bGcpF4Abmd5TPwJDTjjCZTzJPX4LAHnqgt8Eug",
  "key35": "2VfFuTEsxHWFvLbhMGsvUM6kMzN6BACQWKt1R9oG4FgJytYdkRzSDBNQyW7BcuKGCiqN4x3EMSe15Yg52ZRtaypS",
  "key36": "5svZNKgryWXtC9nvpQ8XohDp1hXzwaYCYyMkvDoKaZz2yqRjLN9uvrUgFtCtie7R2p1YmzoYbzvREbWf84rQY41U",
  "key37": "5uUqGWMnf7ETGsFsRv9Pi3rmLhNuRArAmpwNyFC8wS4MhU3TBncbbX167GQZX4KmxHJGjtUhSc1kHDBBRuuafpGY",
  "key38": "2zTdNwYEfkbreeCEdX89cH8i1FskWzqEtxqCcc7heN8aDFFzvgNFD1XEppCLK1tZtDBfxT8KQLDEBpswL6YSzuYR",
  "key39": "2pkSR8VRgKBfb28d7Qf7jcHmEcdJM53Xb3pEyKdyt5hfmbhQkaxzzkRExQqAoCkqUaQa4AzYVekRuarPMD3adGgV",
  "key40": "2fcae9Jpuo8MWkTv4sLJrZQeDdvYTxCHhyVtZ472XHBNLzVSBuwicKc9TZLm7Tiqd8LpNL9xZDWMN9J8nnAuuYLS",
  "key41": "5LrMK5RE8xAweMhG5FqcSLYNvHj8rsbWDDRShRyMeeBoggJSX9zthPDaD4SDWMV42LyWcygGwYDDqXZLCixBGvvM",
  "key42": "39b7uC2WJW8VVCNRhAqcVxKyvdrZvpVjUsTPV3PojgFw5Ej9QeGnFwT12iS7b4Vaqvhoe7Yv2a3HQgFmrhtkuVyi"
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
