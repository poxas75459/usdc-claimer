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
    "4xtnBHQqUxssWhbQzkzvkH5oCau5UbegwuZYu9ftFe5Z5LUH8Nkx5MmxnUXZZv78wX9vRi1gyrJXqqt9DpuaM5Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSEhzK1q2wPX9t5y9JduqFJ5NFn8eRaCzdAb3UyJTfLrs3ivryxaCzMnax7TKvVjGXdyQMGuXRTyKJaTxRftVhH",
  "key1": "2aEsYdMDTkTCC81V3yex95rfL34qEv9Ph8etNzcSEssWu3GdfLZkqV6qqQKrPEcVEEmmiGFtvJS2gwJ4nm75gk1R",
  "key2": "4dFXEFyg899JTUJoc4VdABvavSQkjfXYsbHPKf5Hcm89WDD37uk4Vr5NQsN9CCVH8e5dkwy1DyEBXDFR4mEcfafp",
  "key3": "3d1ZrKCktSimagtyyV84GeEdPr2UyQX5UctYj49dqJm7VtYEuM1B76n5H93QS6FTZkwbUKJ95zdKJqzTQBtvSrtY",
  "key4": "5mcDAsUSybAoDy9u2NST1YBdtparMrGNja3LffAQVRtMXQs9fGcnGG8efa9PoiWnQ89yaYuFQkU6MJnbSFsnEawU",
  "key5": "5A1VJgSGbvLHtgdCUaPQoXzxWXFX6wNfCz3Y96DdkWYLtwfBYza9BbvgwHuWekXCtQRYw2teeLaXGgQNZmzK3qEy",
  "key6": "4PBxJWibnNW2ws27vSMkk6f5wVn2tciHXZYehQWkiJnxFZXvJWTHY3SsFjT8Md1YqTkHNiiLo8qvfeKaMf1CgiFT",
  "key7": "2z8VXrpwdMLhgvmx39K3QuEkUXt41RNsYUfrCG2ryzd1Q8YXJrEzcZTNFqv8PoFZ2Gc9ahX3MGuqEy5wF9KmZXEk",
  "key8": "37czdFMGXp6Q8CqsaKNpVzBmQEWpVtTc4y1a7bUmRwPCRPRbMcwuSet5xXv7WF3BJdCyjawMsLdzTMwspFLMqyM",
  "key9": "4J8e9nLNw9VvYvMWJAa57WRQSxExUYuELRZiUJ1ajYSsEKsQZMS3UnkAxYSHwwMoX3PWjdXV5wAfPhfm7F3gf4NP",
  "key10": "2NZ1HVpEfTbYXjhzKhT6PNvguxYFmLxCDHWzwwdfqM2BAYXV4Xoy2CdsMKsXjPF1z2AapQQvB9YmTevXoR6BRPrL",
  "key11": "sp388PJqXMJSfwv9ej8re4uy3f9xy5fi1u3vpz71gzu7aJtNB19nM9nz6EUQrfGE55aQupXeh1tKf1ghj1ghnsW",
  "key12": "3vxLQ1e7V4XJpf7ZFmgghVd9LJNp5zzS46NsicPDDYg9HrPNQMUcaiJNQVe4Ky9d9fZXnSm5F5qDGt5rQHcCdSqh",
  "key13": "3zSjoGv9G95LQZJ2DvuEbgPCGyze3Zn58jJMiDrd23zwXTGhjdCeSbEErwYHE4rh2hMiyuvA46nz98jnsKscYUhp",
  "key14": "3FuJSGC1owMha1D39a6caUVitCYNvLPjsGF6cGdMjcHkhtUcCnkikBE4dv3BcEcEDQfFbzEr8MXCQe3YKmKrqJXf",
  "key15": "4qx9C6JhEaat8d2xzhaxKo826foG7XC276KaeJM1inBR2QK7xC2jxaZXmdawZcHATgJcXEPpW9dTkC6rPrcNSmM8",
  "key16": "4fUqAfkfLxmeoR6bJcG5dJBtcLvH2Mv2AYYFcbFAz2PU93o9vyccidBchrSNRqEeBi1m14T3FdJ6XAxj9qTk8jU",
  "key17": "5vcLyax6LxkLJ5k4Pdk6KmT1CmdZ5SNgWePtCXi1Be9f8LFGwPpkfkuFVUAteQDidf5VTUZhAg5qRKgsffVu4aMg",
  "key18": "5a2AMA6weh1QmuMdboHfUbJW5NQ3F1qtTF2woP8okvwFYH9UhFPdWqajY1FnGNnCwjBbJLpcTkbgv92vSfsoVDw",
  "key19": "3ovnmaBnCYBZzJGeURj4u2KjN96F8LTcurNoHoMfn2PWqGaykfUKYA32FUUfiHpTGemEg9dQCYLfRtnf3CBtLP2r",
  "key20": "31A8j1hTrTPet1Wdj86yAYbGQTXCig1hr2LNM2TL1nMbfvnWTCaUfq8kvHEuvL1w56QdjXJggaM6QbhuTLwar2mD",
  "key21": "5yjHmHxUVyGKKsHW4JiCoNG1weWtQrFWKW9ekozVeotNh7wvcZfqWBvowJsRTnJ62bbxQad4TubgZte6Nscqznjz",
  "key22": "4CeQZg5bFVuyq6kddFbtUH2quRoAsvFHLvtJnL82cs6nXRbN5WnxkyeEGyBfhT3yQMGQ8j2P1auUVwPPKmBfvAAh",
  "key23": "3zFVvheqqVYV8bJDKYFRUtJG2C6pFYrRcQmgqGLxLzKQQFHWxqZgqTat6TYHsER72PGLaZsn42ja6smzRXuWk9Yn",
  "key24": "3dXDwbe4TCDJUQXdswvjEFj3q1xFfamRwaUfabESHW6GyPZU8ZvX5vcnPEPK49h3ysW6gAH1ddWkZHRpBokSeBcS",
  "key25": "3jt448wAsdjxZhmNzJaGzaqEMBNxBwrsjFuD4S1Ujn5WoZ1ALgj1nCrHta2QCNUG9DqoVHu7zUq3ivQqnHPFuDMS",
  "key26": "5q5ZcaGDtgZQuDix7kZoqXz4G8k8wZFi84fD1JDMPPqSY8xJg5YnNTaLzxhvQkYrAtNtuS7U322XVUNmLsh4Tx5h",
  "key27": "4yqU3AJr7KmTyVGTixDnS7ALhDpghScyvVTYisEYwErhvdDZsx8msyYvXtLz3jEHD7Q3XRTusiNcjaLTj3ZyvYV5",
  "key28": "osxiktrsQfvuB3i6nQ94q8nPkWij3Zf4hRxGSg2Asmgzc1x4VrMNQatDJ5A7QEyT5mS9DyiePLC3A3j95yKxNQq",
  "key29": "3jarzJTY9bn7KDjkXpXe94yHkJPRRbg2XiL5k6JCog2yf8y1vzJHuZ1QUexPfydU2Ep7Y5iY6UNrGvaV3ZhSyFQQ",
  "key30": "knVugcV2955Hi3id54jyH1xrnbSVtQoGGdnTvc2Xt5CfRLBAmt3tapLtMR6uF9xt1fyGWrNGnbxoQceW63DoMeD"
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
