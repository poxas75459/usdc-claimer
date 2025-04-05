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
    "4vkeFgsKMxVmPJxY7ap9JeQbz8z7iirUz7ia6WW4v38PhujvHJKxZa51QHCXcEg9zPH6EFH5grJrA29kkA8zcXWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vAgKrp17U2T2GR9c9NwHEb3FP1n3QjAJeunDUFMjJZnJ9r7CsW6hSNNxHSt4xMHSdnevgEWgzaf8FWNyj6e67y",
  "key1": "21YM2Wu6eefzJVLezHgrXRQv9dxTtdfXG1LvejjRngBaN9vFHtk1w3rqCy42tcbu4LNBdQ4s1BLU9DYudpUdhUHX",
  "key2": "2hu1Rr6kFAnBDTS219WEJaD8hjeHotczLUL9KaZ8jybkrV5YPi8eCzuzjo8uhHxYUeoTt9TgXzgoRtgHUDpRtXg",
  "key3": "65afiLWkBVAxRtHRZfLa1i9UR8JVPgGhctW5LEKsytJc1aEfgYRn89kD26s5i9dkRZteUsLg5nWUfcCnne7hu8ea",
  "key4": "651qD6RPuwWHyH7QWzuHkpvEEsQfMWefReUNfUme57KrPfuoHKN8bpdUcrckD9xsa9Rx92irLnDDTmgnErEwY6U4",
  "key5": "4p6Yrso8WbHnFpJKmeMrLFgx54LrPcJ23sNcsr58b5Gr2vUQJrP3TX7w1QffPGvqFHc6GWYQyAuEqnMRazs9dCB6",
  "key6": "4FMvqxHqiQDnown6Byn2T47yj4pMGcCEhdiUWjFGrUvYCZv8kCZNykwSPvP55BFbXXa7Zbizh5fGKG5Fb5GG9uqy",
  "key7": "3ZVPn8RoT6FP6PpkdbSt8WFFpLGQiTJbGyYFbd4tZ6sf1DHKcCJef94t1weaL7WcYLw84HxmsoP9au2hCiHtFNek",
  "key8": "6StzHkHSuWkfHJ6nKJ6Xi84rwm8BBV4FTAn7GZKFp9NoCvVtxMk1JfNcpfEcK6BMzzKA5xhrkB5J3Tw6bgVVH4g",
  "key9": "3rYniUP8DrW3rJBfZh2kdDoPrL3MkoHiByDtspFLZQYwjCXKzJZdFCzDY6uwHF4sq8U7HrGF4qtZXXjTwgG7uUBB",
  "key10": "eaXJuVWQZEER6KxKPRzsGscTdjd1NwtSq1nLxRngNNJjDAensMqCe4odBEpExx6dDNuA57QF1Gbh8YgjqDmRpuD",
  "key11": "2fNL85hywNtpEzBKPZFRTZgxpLsqxrDa91XH7UatCikiCFFix5Ly5kEVPoFx7bFFtMXkdubzHnZMwyCYweYNGwpY",
  "key12": "3sFubq7Y7MoosG3xih2V94iU2haNEbt4EpZqMpmu8VRwQ8tP91xnC3Ltsd7ak4r9HR5kfqDSSnbrPAHxSyjGT5fa",
  "key13": "4EGEfaKUGCwpzscRqkfUgxPiWLbEi3yMJ45C7DGMoYrRa6r4gwfBVEveypn7X9RwtZE6BoLNYfV3xehRK4MqkUxN",
  "key14": "3sBAqGtUJn65HXrmDs49TAvYTWhnTq24jnQSgnthBjkUhanTFfvAGUtNGychRDs8EXw8a3efGW1J8NxhSprn8uCy",
  "key15": "2LCYFQ4nmQoAvmfxopPD66QR1qEC84o6F8Nvxdfb2Jmecvci8Y1aG1ESHrEL5EmkutWSCV4ovGAPiSM35xQ6GjBU",
  "key16": "2ag2mNxmKGTfMWtnVjTwJJuEB9k2WvGR7A5r4DqLhDUbmtgTicC3Rb1fAfUzhGLpfpaVRMGEtdDBVuQ4JhTzWQfj",
  "key17": "55quta3NWhS8SbjXCR2Jd2KV9ALEi272gLazQ1u1Lmobo6nD4vmQMd8kdpMmjjh6mJthD1oPiX1U9TsxnXR3Djxe",
  "key18": "43eCZ1ohNFYHobHYuebEYYZAMZwzEQEjueHdUA6jz9AqCffKNab2BysdtMSQ1vijgGruqD9GujAi9UZNPd9wKXEP",
  "key19": "3LKMFBNegAWjJP6qjLb5or8GA1L2RknHN6ocU5mvnae82JTf8Mxn9jAM4g72HeXELyHx1Wn4YJZisRBkm1Mgx7eV",
  "key20": "2rzvWLREGbg65N1LoKtPMmS4upyW83ChvFEPy61R7azpDDE9KfUA8eWiXJRQjGnseR3bfFd9tcMFgDHiQCr4WrXr",
  "key21": "3Z2m9GvgXHSiztENJpD1QyPcuViXpUuCGZamNBcq8iWNtm2WZiWuJYK69iVM2UPysBvPgkjpix3coHiaJbri2WLK",
  "key22": "3k9GRApxzgEcdrmZT1Y1GKE29Th2xjFbBrBEdA6uEbH2SSBcDdEns8LhWf7fjkYBchLCsKpKcp4C4qjrQu6xiMfJ",
  "key23": "4HoEjpnxuPqaAe7CtfdLekDZvNqQoZHb4mHmRX17GjEPjqXjqrSfbm8XM3ikEceFXCJLtQbK3mwd86iA8ntztUWa",
  "key24": "5PjEhWNkYCu3LWWfNxYLbkmox9DpvPdP8aPAiMwHm1D5gn6Ka6Z2oUey9ujZg7C121Zuce4tn4RhM9Fn1e98jdHQ",
  "key25": "HdT8qp5qYb8ue8u9CiAkrLLCvctGvECfyfiCVdreYjTePQZi9pMvTKpW8gxj8465sExPr1BCwC67PCB42CG4cPf",
  "key26": "55TGeQesZLpacskyWHhXxBzPwH2tEUEmUbdHrPyre84vbLLwTTKf6q1tpFBrbz2AgPDywSHEaprM8s5tQwqrHG8v",
  "key27": "43kp8tQc5N7U98svSLuyon6iVqRGZMEpyUkahXAc17eT5NRkxCuxJqJ9EcFpNLXq9BcQmUQaf2suVjb1e6vVBFki",
  "key28": "3iwigPECCyp6vvE8Q2gQAitxcXbjdrUbPZW7FCuTBCTxXSoEy12CBpqQbuhKB7Xz2dVEzpVYrAdDGfWTq9UHKAr3",
  "key29": "6Zj5UnGStJa4niLJRozNFCUWABAVoq1E6mC66TWEyzvArGWGqho9fy8WdQSWY3AL3XLpMbvwSwncPe1iR673vFQ",
  "key30": "kHbRu1YRkoVW4pdLBHuFDHQBgT9mVTvxcWuGzxdjCmUArM3ScUvBVz2uF4rw5auk4KTAmasUs1hjoTAJrh7taE9",
  "key31": "mwRnPEWGMAR9nWs61biUqoTppSLF1pdhd29UZYRbo5NJFe7xeuTCvFu12iLU9Ah85AvEbu3xbdW3sv9GdTPevZt",
  "key32": "4nhuokXSxuZoA4yJAJEv5mVZTooXchFBMUWKW25RjLjs47UkfPmTiUDYo7tE3ZokTNtJC9t3QHWdCsCYrT7L5Qji",
  "key33": "b559oQddszApFaLwXgj9wm5mk6KFrchJP7gL65BKR39saL2HUx6sy7ahiyWxi9Uqrb4Ghbz8Ps459cPWdLkjkj8",
  "key34": "pSZzYT4o7B1LHWKRnbWEhkWa1SfRLJYZnEkNJczpv2CSafzAHBYuP6tzSLJ9PT19GneEaNJZ7CMGpeQ4E3Yb6SW",
  "key35": "4kNbAJa7EZFKyL4GExjSrgDcVSAoeRWKL4zDwvvg5iLXUgxspg8xsB4riEst4NDoAyghk7Ki6y1uz42eBJoqMsXb",
  "key36": "3qbg88znBra84ZLxxvsDNEfBBxz4DB8DhoUmH5wtd1ZcUcjYteYmif6H9CnjwAxEoKaZHqEpmnhBfsT4fuGwpoLT",
  "key37": "3c2c1u2reUX4S1FncrYa2s6RkC1J8chFPbdnxZr3K3GozCPYAG7NhPjz71Fj5JbNr19qSduYhCL375qzrwCaaf7g",
  "key38": "2MsdqgSyMP77MympXsbry2Uhmc6eEAAg1pGYPpDTukZGQtssoE3KEHSuta2YS7iAfJaHp3nJCLxKJepLsrreuGrw"
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
