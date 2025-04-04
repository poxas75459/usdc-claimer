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
    "4h2qvXU4dDfpBPFXf8Nxs9x3YkgwjyDx46p3o43GYRtMjEP4ozmfAYDyk5Hj3V9YhFLnY8VV4bhicgUm7RVEcxpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KMTzVxEbaisNfAFPKGXebwVvwf2suk4FeDzFcnLDwwawToqQijP2zRPCc6EuwWzBCKwA29iz6ewc4yShrbPHDEu",
  "key1": "4NBs2sRcZebgAfrvAh8ZExR1ZrPP16PDbWfCPJ4SS4qEmVaKEFoCoLhGsYNzEkpU5rfLEzSSmDqdsnRMPqLF1N3i",
  "key2": "Pkx4kK81943Pnx6ViMyvQUb6oNRXxzLf8XBV9t2FyMx1KtyDYg417fh8U2zoXLSCfKteEMfvE2bSXvj5oV8B2GG",
  "key3": "4HBTKjALE3nPiKBfzFJC2WiPUqqfBrCQcMYPEa8qjui6WRnV3XdFfzX4j4Hfme8PKsbhMmGFetEfX9nWZH79MQqZ",
  "key4": "X7U4oaMh3TYK3CDEURcwWhRhHWFtrvmi4BKY28fwQKF1PZ74z5fZ9jHeW32wdUJfKFBMqvCo2qFEpkck5UoCqqq",
  "key5": "2NKZdMDrKBbj1UVB4mmjjd7v5ixcwihCAw7J1zk1KaLYcv24Z3kzCrUyPHvSY7kv5UXijJDGKywfWiVPgQhZmdhh",
  "key6": "5DUQKcZDQBfL7FTRCnseEc19SqRbZvSC54bVGCQY2NkFASYhoP8UUgBBx6fbgyKxcLBfJVjXzuY9qZN571W4xQGA",
  "key7": "5q2hcDZ8FJqW4sBW9d8ifD7iGkVm12XbLp1VD4ZVDtnKwoHPQWLGoZXucrfEMtgH9XZB6tf2CaXn3daji2M9e3BQ",
  "key8": "Ute9TWXVwNvhp4ujWgKywQGcbDqMUYnQNpMgiHWfMoMogGzQtmofyMZdiDszA2QVgAPpF8RpGZbhLzVVvrjV6JJ",
  "key9": "2qUxrBzcwLy68CZhZSDVs52yu9fLR6AoGYGK69DvWj79CkNqx4vL7v2VsZ78UWVV1jA95BrqPCdBnVjKtaYhXSSZ",
  "key10": "mGxCaDjii6TqDxCCpwJ2Mg52hxWK9mbPmi5eHbZaFPj5rYrL1ZQRued5k6d58jwmvnZfuhG5NovXp2ZSn9jXcaK",
  "key11": "3DbRbntM6QbsCUXgkUy4UdH8w2wKUtH6e1rLpw7eBu5kxCMRwd2kLvDQMwGhg3DsJTCo2BV7BinWAq29ruKSB2BH",
  "key12": "5LUsSnntLaNZa8fr5YCm6gLKiG6aqkdoznZKwjBGMK8rQ1dpGfWrLtjqPb4w13LT2JBeN1L9LoRcd4euRgHxtJwc",
  "key13": "5mcZmVxPG1m9RjJgyhfi9h4ioRdxxxFMcUvf5ZijWrY1EhcuRicYMYTs3bNorVcFuavWLEcLvtdaXgVBZLEmRdt5",
  "key14": "48pNKwxSvcN4M7gV4JEXEFqGx6pjxYVwCan3jruUXR28WuwCWrJMsXe8p7Xmk5mRnV2GATmeoqx9eHvAzajRnrS3",
  "key15": "629iZqk28Q5d6Ko6icCmbsoHg8VD1ZVfdmQ3AYoH1WpWbrgEDgf1N6abmx71nQyvFFmDA9MfrwocqY8b6d5rXDT6",
  "key16": "5Bden2wJLAjY1Zev4woP5MwvA1kuKCUf4FdLEzpjPgxNrBUhYPumTojSgmePvfxsteAxnBQw5dApjjZ5wbf9c6SS",
  "key17": "2zjLUWuZ9j3h7eyPgwhYHKTjYGT3XrxbFA1AYzLzPXVFUmbQF7FF85SQH9ybhb5QAc73Ycf2rjrpx61N8ikqQjyX",
  "key18": "2u3i5FKzJuuTeqw8qhNMLsJeuLoTLUdmoiATPjrMbZUKdh6P5fT938KJ3FziCqNmYL8qWCwm7HQb8eVoWkx3bYk2",
  "key19": "5EcpcXbkVcMSA4id8NpSaxZFySXjyPKiEZ2h5Z8EQdXFqYDj6JguGmWaXVrAduaZUicLhPX4szyfWopfHiQiiZE1",
  "key20": "2apbSJ5Cn3XLEWY97b2URj7AMDQaTA2Jt8eqY9Mhux2QFzJHPSP1Bcg8vbr3LKyTF7QMKSQLRfgRcdF7ifpSgAKY",
  "key21": "5HbxWyZtVZLWkoFvLeYso7zi663gMjferNdojqg6rErGzVuXeoK7DAbJ3gj9xfEpbaRjK5shfhUvDtFMcmzqHVGm",
  "key22": "4efPguFPFs4QPtcGC495Y6S941TCtiscutyj6PyQC3kyDswheaSLjf1ohbXiSLqRDWFfwCbJMHKjb4pdES3xUph1",
  "key23": "62AyF1ouhxxvzfSmUGF3hapgbMSTZatAvFDno3TmEvfo5n2H5bW1YHistvweGpgZFkujuRQGa7bbwa6QEtahZNUA",
  "key24": "2PmjvGDNzEJGhoMkk9XjyQBhBu75azejjPSBZVAPURVXFESQggoWnEzyyUmJ3FqMdXcBk6P26DZrmWfwQohf9sJX",
  "key25": "4MHYw9z4WJR798b4AvRdVxKKjPu8ppNY2dCoWcSSQ4XQkCwQ9ZQTV2w4LGA5fTvJ3guDGmDTZVBR6kqhdKCq5JMT",
  "key26": "5Auo3cjNNd56rKpnV1bccFATLUHXRJhNKyXs7wDMUBj3Z5xUpe3Fc5aHfB6QDSP8tNa53Xc3yyNNL8vdwr3ALuaK",
  "key27": "5BMFNSsJfPAdkPLUYshy6aXzJyQ1yS5aNeJpotB2fRNKbe85PnHEC6GMDYTupLEQUrJpbb5dGpyUvwud2wBrfgnF",
  "key28": "2Y8LC8JbqYseB7EDZx9Fq5YGDNLeoBbp1SLs4o1ZWjTYQaqWv1qRx1tnbySAVk4NaQEjHoiCmofFz7MtcRrk3tFP"
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
