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
    "sNtqNdxSgv6FXdUnoErWeT6JT3Ny47HRY8SVweBz6RD68zz9oLygRXBvdBBrgLXDJHpZygB9WaqyHUe5gk6rozj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gLKegTRarRiHXVZBTfXUyrxkc1HVfrZeQH43QfQvWf6vgfDRnUdrkAjKL4xLFJJeSmbZzzmGj7q1TwTSWhEjPL8",
  "key1": "456SzdG9hVKs1BpHr8MHMuRDshGwC1fHRGJxqoeXGrmUZ997JSqTAWJeuS4CXXikjV5P51onR4D5TniN8iiV8ceb",
  "key2": "5kyxfYxnXc6pdxRY3kT1vCs64Qcd4ayK9vZDTiMyMkod3q6sWG3Jp6W7K2WJH1P85j9YHD6KGMHxPjkcVWTy83wP",
  "key3": "3QWJfS31Xp3K8wQ1mMo72SomyEkuotdkP7mP2XT8vLQtaLKE9vUDk6WcfqHV9AySF8Jo3sUXijNbSij1JoTKzrNJ",
  "key4": "2rpovSoFhAebDgPm6XSgSgYrAXJ1zCZSoDSNKJsRExbqb7b4z5g7QjMu3hebHB9X42cFojApF2RLbKs4hWkqVWm",
  "key5": "5ifRhTC8NdntEWnCALykpppBXTKsLPoiD8ojqzAXR3zkqh6eXKyA75cx6zgadiVkf7LjbAbjbGQJrJmM51fy1TZZ",
  "key6": "3JtdjRnrBCCce63EkVXEgTyw8WPF3qgos6XfMChGBEq9ZHGZVkqeuHKWg7Q1HjMmKYtcSXhNUuivpsxbSagHbp7S",
  "key7": "5i124CiBBhnJH3M2mpFyWoqVZaBqskeFoxUYnmBz3N3TMsMnN8s9KTD9uHvBEwNCN1URtDvddmQWVUohRAfpjMio",
  "key8": "8DDkd1cQMhBmmx4Y2LZVS3vRtjNugBCDy8Jq6DhXECHyNmfU7QKd1YXimPmz9B9RghRr6gCDsBH3Tt2j2YVWEKR",
  "key9": "2aEs2Uv8iNzgTi77erhy5RC6p48QmHXp3MCNfHJrhV3r63VvUdeJbWKn79Tj2Hi8SRdtdCDSfGA1mfNJzBHLJjqh",
  "key10": "3rssnsuH2SPgknsRFxwG4Av8JDRZx5CvSkX1yE6LSky3kdnLm87gcohDDF4379wg3YphN2vpLdizTyfNc8QQHgLC",
  "key11": "Kd3VCiZ7MtoCA4GyxxPGHAdFo9j56BSVXxkQtBq9dRRvGKMfNhke7cbDBm9gdtaSbEHCNoz5f6yPiCKk8CAjuKU",
  "key12": "4HfXnC7rBxnFBP1cgCVL2vjb22kpJ9yeySqiH7gXWUrmwZDLXQkDnSWf9dohRoXSEHvzzJ4nTyKnk3s4chFufiaG",
  "key13": "4m5XfBSHb7GSApknFdg8tbn6qwUK5hUoztJito8buenT9QoR9yMGH8YSEqAUV2zDfr4jyHTvchH6EZ9e6MToqqDb",
  "key14": "6512EmhDTZ6TJ4KvJin21kqcGRurb1Kn8y7HxzM5EUNDWcgKLHh8n3CMrBEiBvKPkw1QvWboc1D8aLyG4KADWSCV",
  "key15": "2kCSa8bh7NcmTHdZVEUZN7Eamrd6sAuBQ81Z6DFomSejisTdNWEpAhnWz32UqW2nLz2RCThd1Pgve4Qrzu3jNpoS",
  "key16": "3mGXYPVLAR7ruTKXRg9zeN4kcSoQM36Q2oi7KM8AWieX8E3jryEgRduksKaof91zbkSqwmC4z9HndDz2mp9DyUz8",
  "key17": "3S3qTEMauTTH2SicE3HLVu6P3VqXwwfncYtyfdvjaccg3fW5aSLBXiuRtmEi8Hx2jBcZHA1Uo7JK4WBLyFW5F87U",
  "key18": "3EBeMUho4AG7ZqUw5ZjeFw4gh2vHALANdjyPwnq2sWkLgkHGn6ov9X8QNdYiLNax4pWDyesxrqbtmjsAVQnRPh6z",
  "key19": "3T6H8aScW5Wrh2kpKboMpR729Sz3MVvXUW8gpQvehkvaqAocWA9pZ849Y17GyiFHEZRiYzJBMbV9gbJQboqGv9mD",
  "key20": "QdqWoExcmWfuKJT1CyF6bWwMRxEJVt1uxi1CnFAZoJir7d4M58aEjPKGdFTo96bXueoXMafpoubUxqTcn2ZtEnD",
  "key21": "2dmJ3UYHdQ4qL2zHmUH9XpzXXAbwNYjrC2pM79PHvto8qcGDNXvnxUWRwrnDZEGNkX6MC5nUTFBtXJesgvRVvEjT",
  "key22": "oSsnfmUjfj3JUiXiNuJJNz2j5GLoPDVeamx4BiH4SHQR3qPWhGWKcoZ8JCqPfyjMEXeakMgVXRASZmgcngyr2Df",
  "key23": "2UArVRkm8zGso3v6uSALTShWsTCXxYFzow96Xeet6dLXivjwHqkvK6M7DEiESwUMawBii8est64Q2VnYP7d6RWYK",
  "key24": "5acyC7x5Yv5uXJvHwiNqVvx2E4f6xtxYMKJWcUekZCf253Rrvcu9KU1x3p5JqiQDVubyxWj8XVKz5XbF6bF3Hdx",
  "key25": "3Cx6wDG6xDMaoUDVpKiYJJRTQDVhNRVZwsT8jf8niFLAMMGqVosi4oVYUcZQVe6nRNeUVQXtpHkKkc7vXbz8p2Dw",
  "key26": "5ZGyfmfoAq32771XKGeMvJmiDrRSZ1cPPEUd6t4DCCxcdb5hhdJdeF7HtKxrGZfvZddMDCZCfVmBrKyWZ3hi4R1m",
  "key27": "4RLReEEVfBHpPhFUxyaXFQ1Ai7JPinpQKBWJD3bQm1H55df6azPbLLvfvXVPUk4dXhCRrPnLFc2Gg87cZxD6DKuy",
  "key28": "4fFGeTsQCQr3tKCWJbJ4362gUTb7qyhTCWz3ccVePfTUSwmvdqowkiJvhxLB5pm8jfB9faqkFwU1zS5x8LhDCBs",
  "key29": "JsMazzj18yaR7W7ccpuUMyMvFWJuy1MsKTcmfJuYoT6t2kr9xeYos2a9kZSo79AsG1V6hKwFCaUsbjpbR2uyyUv",
  "key30": "4fPErH2Tdo9SHwZD9Gbto4K3XZA3egaVxSJRKw4p3N7BrWKVzXv5b3P54nngDGT3oXSXbBmoLsNefBQci6jx6qrb",
  "key31": "5oRkwUACeaAjjdocaBpVTWicA7sJqwxfxkRyeMSHcE36BB7X4UgxaqEVoZgKRC728kcufybXh1Me5m4i2jBaicH5",
  "key32": "4ZZhh1GNP3yc8T2r4ByjdpepGW9fEdnCLEJnfTBP37xRJso2At9mV8tihQQ6VFptA8f1gWdjVzc93bi1df2augYB",
  "key33": "46shkkFGLgSq4p6i32nyX9nWxjcoG7tq5vYF48Byqwx8JuvygUuXZxmRs6j5wF2om37uVMTrCnErirScPggLxFVE",
  "key34": "5pFU48oPt2cwE7aUh7DkWJWd5FTe5Fw8DoPGnKpmBjJ1H49gRDkb778fhpQqCUsmaQPdu5adopXcvwDRXX1cxxK2",
  "key35": "3vasgAC4AGayzcR1CT7NUzHuTp8DV1V7xmnCSPa8beUSPF4pau4KBKt3EiA1P5pTjryu3yoNJYRGUJqPcgLAQd5G",
  "key36": "3cXZRySMphRW5ZWtocS5GBzJS2hCwGgcKqhZcWS8SonpkJYXWaJTwsZQ2UZbRHMaiZjn6DohFTwunvohSYEfsC4X",
  "key37": "3GJrE35NfuB4A8gBLLN88RcJorxpH1kSuY6sS4XytJ3M54TpndWEtr65svzenX29ZX9dvNBMgbEE5Ufa63Mb3mjV",
  "key38": "5QwuREDvcUXwPQGTUMDLastMTfoQpD15ELo2iLmV4BQ7svza61C9uNaqWLRL34Wg8dFKsQrLDYNsV3jki4suTyVJ",
  "key39": "5YyaK6fC1dRBgN7NSeAxikQ1QSq2ZHWrB6QVj4yPUwcQ49RLNXeWWXGH79GnN5otdX7i17ZbqxdARQLoHg7nTGj8",
  "key40": "2pT9fqMmqGweGUuLK6AjFrEWu6XtbcGjCqExTc1iccXNzrYch97HtY6LSZwiA94sQeoY6FhrfskX9vw1crbgbaq9",
  "key41": "42QNK9umKh9fcEJnTvCjAh6JXGQ9y2N7ZFC9T2pFuVcjH4QbiVQLQuyf5FJfzVBXi4CH6e7DL53jSj8FwNrLm4Xw",
  "key42": "5oUgDC3emuKGjSRvRTAPejZtNzGnrRJp4tkUSha6Tg4yzTRroAtVi9aE8Ee6mGcNg3RXfwJzpNnrKBJdiXdh8kHm",
  "key43": "4gr9tbHuYChAMjSbodbcwfMWB3EW4f2GaMFDiQ2VYyTmg4ykBeJh5MovCGspsiWvUUrgrSajB1qwDHoZqfWUSJ1T",
  "key44": "65hCbsfPFbD1MrHRdew9uzM3oDh7eiYJWUPjfsRGizEPfw48X9WLq5AKWNTzs6z2hEwcsnqowTtkGpJKDYTHyZPZ",
  "key45": "GaFcLS1rcJn6qrERnVZ3uCP5Pk3mmMWUCEsRHC5T3U97ka4mYs8ZgHGakyfnED6HUrjyxA7ba431HbcdW5wXEHW",
  "key46": "2PZg2bWPTpLNSPCmSqVWMwy4Bsxsw6apb4c4bvGkwW2nMMNtCcxqeAcJB6HJneY43dN6RdFGr4QFh5wVqcUysyv8",
  "key47": "2eSucRZnP1RjEVsi6sKwAQ1amvepWMznP2w7T7at3WPBAqxCzBZPe6RBtV7McBmzUCVs6mTMWNUJ7Ja4Jva1c61y"
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
