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
    "2GCCtJzg7rGV856H2ENdnnhykprZbwNhrRTDNBxNAWTKUyrahHQTbH1FhpkNX7fCMHGTye2pEw17KkpVdup69XZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cV5F7wfocWBVcyE5ZyDjyzfcoX7y5GmBwvgJvZow8QHGxtBdi47x4F6EWJMfca323mKYAA6tHCGu5aFai5dZ1p7",
  "key1": "4KPYCY48tu4yMDceFFrNa7sVVJEMANTsJsh5t1RiQT8xgdrA83hVz5cKQTFHwj6BSMAkU9EaKvj4uwPdvr7h3Sp9",
  "key2": "3aopuvgk6Vq1gdAjo15MhZzBHs2Z2prRQLSNgYHZmKoXqGJvgE6xKUVefdAN2yzHF8TTcBFvEr3oCBAR4zTfHnab",
  "key3": "TDHpyKX6tXPFVcJAcz2NWtBMChCDLrXPy5tKprGbe58yHv6JPHvHnCsNzZtMZzWbXwsXzD8EtxcF2J8rgStwJAf",
  "key4": "3TBumAwW1vXTJBG4jthvSTFbyp3rz9ZJU9rXeFQRoGFEwCW9SZvnLG4JhZvpMPa49TTsv99qD66UPeo7cmX5ygcv",
  "key5": "5K2zYDXzxqLN7ob3Exzp9bJE7Zh3qYZNwNYre5N1N7tdKrazomrjSVoHJio7N1Fhm8hJQVctGAuYMQtfuSTM2Aqh",
  "key6": "3sB7iC2YC6V1CGhtGYEsMrV4i4SSq9QopFU1XXYDXrTzXQ9HLF8E2aZHvsJzD4enBEKyLepBJgPk34nCLFruFCdC",
  "key7": "483zrGd78JH7ACA7DsxmdTHYdXsMdHagFwbsnvsebop8UiF4ZZRzQWTuacXdP28eMuHB5eCUVYWbqDnNeLjdsUeu",
  "key8": "2NJNW6VGwpRvAhmc7qe4RnFG3uZpBZwJUtrysfvUJ1KGA2wovjD6CkJRPmPFUVvtS78q5RGnAmZqSCC7cHRytimK",
  "key9": "2YgbYAeFZShbxfre1qw5QiAZGnUHSHidVs6t8SH31RYKVbUG5xeqdxaYgg8HWQfjYzAPZELLHpMVZgFnATApQNtn",
  "key10": "2Tdu5YLRwTr2XbJkPTFXy9covPu9S8BkDjYgj6FvXm9ASfJzvu66t3RSbKrxm9kpyyM1S1ftZsoUuD21p7Gtkdym",
  "key11": "Dsk8mHEqdXv9A12LktDZhXvf4f8EhWRZTvWQR4EcFGoyAnKMHyVeTHgGQBJZoGZMUvYTpm9itAxibZ36ENmKJkj",
  "key12": "4UQ6k3fo7NAmMAnXzVsDY9yzQytN6PNf5vWW2K2HnAkbCahnHGPeji7cP8ZBwR6kWt1j2wJav6br7gMRadU2HGr8",
  "key13": "4wrPVFzCoEDpjTTsjtoDNmjFAmkFiFYqNBUYeKaqQM9AEUymVLY8VaXJwsdd3hsqjH8x9EZbbMhZQcmoG9azTpbd",
  "key14": "3Ce9BTN3zany4M9Cdy3RLzNJCfk1ngTn2FQXyiXHdwfridz3gkFh2b3rEtC49K6ab6aEqxaXajmFJ8ubZZVaD5yd",
  "key15": "4PpnRpCoW7djtdxhc3WieXDwtP3RzJzxh83owCuJELNu6y8Ago4Q7jeTJWwHrKxn3Wee4RyvcpbyqBUWEu58GXf6",
  "key16": "3qKY8txWuEr1jh4fAYZsHzGTzVDLQpyKEnLAaZD6ynbVDLAAyyLaJf4MQ9srm4kw9mfonBMzp9GfQiNbgGBu7pp4",
  "key17": "hmjFjuZVbUV6rddBStgodrmG5LJcznUUcxnSTaMP3E8HudU8HK8hzSz4JyQWtaS4eA1koyNmQcJHZKfsjQumdN2",
  "key18": "5z6RrxiFoFPWgGzeczbK6JqaVX1ejyTTMm6B3qEYyjWzSeCpZwWXVH2DS3719EjhEgxGww64aZ9p1z6TUMKMrLM4",
  "key19": "49vdb1tEc15UVo2pWkP5YGWkfKAXzX9iHSGpcfBdSBfdwpppErpLQa76kz4q2zxArcbq1d73zLZ2gitYeTfu9Mgm",
  "key20": "2yyQeXAqD8eQyq9Sku5HRBW2NaooR6EKMxKufdvM2fcNv6ESFc1N8jNB7awHUsUx8yWbrismFC6VYz4hn4dRWvNq",
  "key21": "2V71gU4YUowmu9aFyxxe4YLQC3gRWRPfDEo73Hz2hExVH3PGCYnhx1zqvmWULsNCMswv3XgdCqQogXkpnVMsv2Yd",
  "key22": "5gQze1GGuCHgTodVBgoVMmoKCTeQTbVDktHYmufSyyH3UdF4wwperQCjdHu1FkCFLGVC6gdjhemPBFwaw72XRYKL",
  "key23": "2t9DcKPpzM6KuUNMLYhPoBuTHGJuaAXUq2FMQ8R1YW37Bkqcv1R6SqC5e8YMUeWyV3tvr6ha8KGGsdvvsNjMmCbc",
  "key24": "3MHdxkENmVuKKx62hHUjgy35XFS46Vrc9uDUeF3qF2FhG5PfJy4e1eEQyZmRiLnRygWqnHuYk6VQ2pHWuLMN7N5C",
  "key25": "4zWESSsP3rkWShtSYACBAaZAD7GCRspkCZcvUcsiBFQ8U96h18A2uvQQvh3i68dwvef8is5Dai2FTbaWNTBBWxT2",
  "key26": "3f6rp7gSFBKgniibAdPJit9MQH6FeRXTNJpwrHknRY2SCKZ7ayUA91xUwQhAaeH13wZzMWvHQxrFy1v9fF8iWHJ6",
  "key27": "61PbC1GbJT9ZU9jfGksYFhjJ9btPrwFrFaFwCdAtVW9Nb38L9i76513MkXxuRguHqVGeP17mL5jjvWr8GLnJVe2y",
  "key28": "DdZntNT6KUbfkPRnrRyeHjtBeQdbQztWEMxjUTPUNtYCv9zPdPguHSKMoQ8ZGT4ZztVVLz6wuzABQ9yHSn6DRzv",
  "key29": "2QxN57kGBVt4MWppSY1kv3S88CY9YHVBJPkwBSchpM2XsX7a3F4PYQeEKwqEefQnJy7dxFQcngfpqeVoyEt5q1y6",
  "key30": "3DfgXECcXrtDX5n1yH1utCRz4vhgo14UgYWgk7rem75R6PoJKb11pxSFjBU5Q89NPof6nREupkAHBqGLJrqJfvBb",
  "key31": "SNnSFJ1SzbRmcZ6bGZYTndRbCTYXh1Av8QUcMZWRxb9CGmhu4qSoeqv8qZbMELS9NPjNZLpsv9XWBqNLUXbUiYQ",
  "key32": "2hAo5V1rTJURfWj3VPtu8QBgZYQN5FsfShK1TqAgApyfJTYPo82uwERT6tnEP9VY648bZN8vWLjw7nV1nBWMRWtL",
  "key33": "3HmM9FhccMbJgxGQ1uEjytWzTWk2rJzoHhFntEyRWrXas6gUwvyj1upxJjsSjDxfD1T4WyqbdpmVANmV8fWftJbE",
  "key34": "Y1HKqxnvnSJxmZiwhGVTEvswKs1PpTrWmqKPPJ3auXciyCcrpvPztEC9Z1x1tvXiwXi4roc7ihUw5x5rJATaB6R",
  "key35": "2MbFLhbc5ebysVY9RYS39bmGGdgcFTdA1Vn4HCnh2BdnAt2AUpc5CAyMCJfd5ZHBwuapyv92xVD3iE9ahAJAA29z",
  "key36": "U6SSA1jen9BSATg4xTyX1vHHqhFmT8xtB3RgpxZgHW6TDagHET1G7FP3tzgcsvSfNhYELW7fNNWgqVhwucU45xG",
  "key37": "21pSy6ZTm5EjcRq1KfBPpVmZwotMTvDo78QegiUii84qP5VrLXDxQaohS9RpaUyhpad1QSaTbtat6THT8Y2sGX5n",
  "key38": "3MaFC3zmUkR54h8k4AQ645BmamPCyzYd4zK8txE1epyHccP4kr5TYQvwcGyHg93UqNtfurBq4PYNwF1daXC61qSN",
  "key39": "kWHZ7yLHXV3qghJbPqBRiN2FFJp6TV9y35MrbtBY2hgoqU8ZQXc6QzP4ifsPjZ91KBRsXPPhsGP8rS3E2ekDUnA"
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
