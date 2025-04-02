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
    "5PWLTE5KauGTURz85oZ7mfnay5DMMPCAfAhW7XW3swnSpLkPmNRdJb5yasqWoM9hyLy9YXuLvQWM8Dt9u75Gu54c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rNcWqFhCHuaruePn8DRsYgHNop44ZimE2rDVZQ1iX12uradfCe4JXKtLTRnuRMTbpSvaFmwHtYBnef8jaCB32Pa",
  "key1": "4H7brQJmQGxapjjzpA68YD28LKwuQaYCpPyJTU8Yho3QUoC1C28yad4sqwuSy2jNLcNHGFP68n8X6DKo1WcfUPZ1",
  "key2": "2hvEnf1hNzGKTMw5MJQRjdwYq4tWxSgcZRmJQAxhVP3UEAhtcxnQ1cJBYvSrD56kPHDbLcJxtbGwtVNem6hvuw3R",
  "key3": "2bKucgWFEkNuVkHf3UJxupnrDJxqb6DsNdE1p9KFyqePtuMtPWC5d2bbrBQTcV1Rjg99cUYmLqf3r7YLGDuM5FDr",
  "key4": "2ZPM2mbA32rVPgEU9z3YRiyyGt9P4gwghX7RZS8ceFGeMnEmk2zysemggEDKrvuUqzhR5Najijq9H7r933fUEu5L",
  "key5": "5EQpW83nBktrBGbdFD3mSneqEhXhyB8XXLRX76krtTwUcgCjJqnZWiUFEcRkw74FS4uXXA8mPXdbdtNjeszNZtki",
  "key6": "goMqJhemHGRHrHYCWWEM1iQ1Pk51gETn4hCqjMGw9GXApE9u3xZEecHkNHaGYSM1zTK54zuGbucp8HHXBtpVjDh",
  "key7": "4HSEzFAL4vxS7vcWU5MbZpb2fNiKTgjmBtwZty8CDkg5wC7Y23xazcwou89JcZYAi5h57teuv8n4ikZxP5rSZ4KC",
  "key8": "2WNqGmjLpMoi6FP6JRocTraevU5kksk4sc4ADfQvKvokqUCrMfckcopjCPzJCZfJ1EmChQVwzbesd3FVs5qyCrfw",
  "key9": "AwuRQFjFoUZBGYreu2sDWN6XzvroX9ExWmC3KGumnzb4C5rEN94n324EmtY5H2jsqX7jw1ia8gsouG12dzdt3k9",
  "key10": "2G471RGxa4kW6FqXTADifVmjEU9KeQhzwR33QDo65ryccdmTBSKdsD4BiMXC5QQzvcLHj5t6SmxoyFwL7q1BND59",
  "key11": "heVMx4e6oLgLf7DpCGmmhHidaX9fACeadYHSqHLPZRkM49CAYEzYfL3zTSabks8aheU834cRSdWmW1mMsfE7nr3",
  "key12": "2VyKLHZVrciHm7W9uQFjF5pU1hH8iPHkW3mq9hLJsWH6i3WDtoASfQwv32McfTNaNgPpw1hhZYYgao8E5wE4qNp9",
  "key13": "5Jhw5SmhevGiyKgssrtoBfFh8Ko2RufpW9bBpkqBn8GiDFggFbmex2y2oX2zzchA1P8PhJ7o3RTmMiF38JMmFJwY",
  "key14": "2HVr4pKbmjNBDm5ipqK9tZPxUiLtHCVgMEnBcBZ4TUcK4gQwTEcF6FvLhnRNtEyW9GwBye8Kwua1jGRgD5DaBHqL",
  "key15": "2rbzqNVWGQ6N8s6c9FrxBU6s2fVXmHsPPCx9FEJHcxgaNpX4qXdaWkw7Qsqd9foaZPv4aA4QLzwgD3hcGiH4YtKe",
  "key16": "xqCdB4LuaCnMk8DXGx1pbj6uD7ELzwRqyviA1g4SHuZUt1ZpyTLpNvDhaNvHS7Dx886dtaNy2jiaafEpH2DZ9FK",
  "key17": "5rkkHqnfzRDpURKZdzZUeB6iEJtETWER5vbQejLiwD83wgHfdjVaW5rNtozNTM8usnpv69X83ph6QNRHokGyYWVS",
  "key18": "z5b95GTaVrCWypW1yDob4GBhtY7wrB77MfHs9X5hzV42grgCn63v7nnqp7EoZrJVXgqHvQP2QqnUth2HCiq3tPB",
  "key19": "4aqTJwoVNr61ubvde2V4WvNe2MVbAUo7Qq5XZAZnhioDKcvDFSTT7Vz1txJoGnuC1P2o34weWzQZAG78iEPZzfoi",
  "key20": "2KSP6sWCe5dV4XqcG2m7xrUvFoyNb8wGY2XuA6EiSg8f8gTseo6fEUigSTCUnpYZkJ15BL94NnGgX36KBoQD9jQC",
  "key21": "tTofhaBnSE9VGfieEpKr3HtbNJfPCRzn2EHNRdSKLd4xk3sVfXoxEXS3aKN2Uw9G5TAsTk8YXjRWiAvG4RLehdT",
  "key22": "45pGPLzpeZ9sbDhuJg7Z3r4sgLJoufysYwntdGtxwBiGigfHCAja3u8J6xkZ7D3pRTTM5c2RkY5WtbZChaH4mdWn",
  "key23": "4kkcQ9HkD9fVcKFyLtrPJYALAChw6L8CgQ5aU4L3Hnn2pANcfF2sG1QTktBfSaFhBkhhpg7Git3qBHiHXw8sTsW6",
  "key24": "5P8wr4u8iPCnj4HU4pVkBRZm4yKPCxNMpybYmM4pf3pZ5Mvo9tqa81RPPb9sEHqE4trnUZGCteniW57SYQ2Sf78t",
  "key25": "4VqtzKZ1pXNVqbb5PE2fpimxDRQHF1rSLQu4Haemj3ep6ZeZAbNNGpoq9drEjpsCmcheEUjxQ61rbkW5EzfcKdAh",
  "key26": "2fRfvphr1ELsgYwEAoouLpbm4gLZKR3u8bJd2jVPsNpVpMG3SecR4aQ7SPpaZouLvduPyFujuctokUZ7npDFs3N7",
  "key27": "2y5gqGWBYMbEckNELZWiPBDRowx6geM2iXtPhPahGZaPvoqRffsdtoxvzUzMqbYs5benCMCBSvyTQZntnFaRFmi3",
  "key28": "5RiLoq2GyznN1nbDMJbgWogkd7wDcs5edTbPMPmYUb6Xhv9XqxXGg9jsyJRYj5EG2SehtP3nzifAHBFfaBz2NoD4",
  "key29": "2qmcZEKaj6y4PZ8NiMg163ErYUvUcxJjAgJWbya9fSgiBBC1UzB1uCsDhYZaWUGvXJqa3zTmQXkiPLxBEReX9CZf",
  "key30": "59bVE2pJJYiL7LVM8QkzquWkQKXKkVN3odmLoN5qWGsjLvY4wk68NEmgmE9fygfM13v4G4BzTFU3LaVnNLCFFYJo",
  "key31": "3YcbtyfkjdmiByuxTAaNsoqZmXuGFESccnrTizYZ1A3uq7FXpzgv4DLkXTjTdF56f4ZKACEWyyk52iJsxa5zQKLZ"
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
