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
    "62evqFzYWgYcUtPuBrkncbRb9LnSstDfaE3kcV8m9WGBpDtpT2vgR3Df3T4xVePUYcdSJCYS2cqTJBSSdHP2jF2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XvcPdbgEMRdjVfHRzs5rj5qZKC8nhJDmEnhe6NCiH8smfwodSxdMVj1d7q4Ln2fuacdBtsx7SpWnztx1zwmnYN8",
  "key1": "2SntWRFzesyUfnSERvA89DiZ2RUJVJKMMgv5Yd1a3TqzoTM2HYJbQK4xDwQqVErf72Q8JcNp5xi9wKojuvoR49Ny",
  "key2": "3bfUx1ztbX4Gnj2dkZ5z5f5ExG5M3XcBodAtmXXcRsNAhzrpLdiNNqGUta6mcum9mH1xBPSTdXvRBdu2uoQadg3u",
  "key3": "4SMf96Gx5XgoUa9Sz8wiSfNgTKGsPvYD3pJJaDZmJJQRs8NFjVLu27bkYrGdtfBoVrvTkTD9wAAPmUxwGtsQdXFw",
  "key4": "fN1SgRd4JgoAGbPJZN3fVCj7JVBtzbjFUHcnJgQnCtgtpY6tZwB8tY5WSKHCpYyKsi66isHffkhvbqgtrsZCb9o",
  "key5": "58DoauGbWCgs5tSWn75qhF1ybQjvGmyWVK2Xppw8syTBKPbnM3xSu2agzt3CMdqn5bEfVBNXFTkHDT2bnx6Q84bz",
  "key6": "62mti73aedVANXC6Ay4srzj195XnybtzQjZVbspCbhn6HPGzuLGxBjCimoVd9UYUdMNR3eQRruc7WkwojnEtKfGS",
  "key7": "6AckLVzZC4fiChkk47c5MvME8WrQNdYcWqan7EBCuvdSUoNpPd5DnHSNZJZRnufgzhwZuT937spVUjQEgh8Ygsw",
  "key8": "3RMppJYicUd9bxpss1tup73APH8YfkVoaeChF8hakSMB2JgkiXqndKKVx14fYxdaDPfy4Kw2q8FCc4Y7s4YAL26V",
  "key9": "iK7yiVBNWwRDuFRKvRQEAVp6K7ZyQe8bz3bep8QUyGtQ8nrmVhb5UZ471TBq8gehpnHafNGga8Fc6FLK2RSqCJS",
  "key10": "3oZSS6xjBJv7y2P5DxWhD8RznPLcShJK7kqzQHVjtmuQiDsfcdiqYNLkerYzwKwkQannZryQ7yyGkCjUpv99bw3o",
  "key11": "4oa4knjuJXAGPmSnDhvwKRzPdAr1wKGK5YYhdcLijA7tKJkXJLeFtRFMkuyz5B2pEv8Re4QEFYhxnyNZkmpZwETZ",
  "key12": "4R9RzQQ81ZxgFwWM3CArDRyLC4RNT39dc172ScosFoyCfdPcbdoHEaBaHhKukBqJgnyEJZE4VJeJUEbfzogkQzQ1",
  "key13": "4RMfw991hC2Bh5HM95LQU3YAQGR6DXQcoF6p6QbfyTyuz1Fk2NtU5NL4R8S5gQNzqqbcmgtuqVyqeoK4WJMis35X",
  "key14": "5JTQzbznvRxkMtejFLShrk58gzRkYqa5vY2bQrqm8xEg3hQAxxgQRs5jYcKtgH2kXXb2c82pi2F2VdwP1mSbnavR",
  "key15": "3Xgp3N31TS1VZsw2JhtpR53dMWb8zy773nXj9dgBzSrKcvvtwBTQcEpfbSXGkwgDpbU8GeM2HzPhzKUimC8eNGdt",
  "key16": "4ut5nXqnNZU3ijY38B9KXR4ixEiuTRpFVa2hEhFU2FKdyD5B6NYCCfSSBHkwwnD5MjYCBhRwAJn3rRXv47Niimic",
  "key17": "55dHXAdq65PWXSZQARA3tuSSY4DqvJ8jW9aHRmjanexxfjKMhVdGhD4EQNwtWxLHmUkbe9zQ7LyiQkgNgtPZ9Vrd",
  "key18": "3TAQDqrBib87bvd7itZsC484ghH5xdMXTjiZ9r9xZ8pYrtPWyf25w7oorHpjtPzbg3EqWZFJSq8Aq3ShNve7yLpS",
  "key19": "2LVGPBWCDkv4BhFNKaBZeKyV15TFLDukasynFaYWCQ5L4J1pCZodop6nMLkziKiniGWhPpmZyQtdCtBUJDxjzhHq",
  "key20": "GbLYrgx6ehtDvZ6CTjHDZ8X2wSPXpqrsRSVsGseBQNTCWj28dUSpdK9HVFhYrohkKnz7BUvdxZgbjnkAXA38eoi",
  "key21": "4ziZ15j6epEDnWGm7zTpN3WcyNFW6WZZGHUbXHDsaGiKYZrzwjmpgbLmbM5QoV1GoMxT7RbKmgDgYHdcH4snmAKr",
  "key22": "59pWvAuNtsvjcVxuhPxiAvmHMki4XLB8j6dd9GJFxLjnMC5jfGF3TQbn6E4a8jorRQGvsFsdzDyPwLzt9ZLhwzfm",
  "key23": "4EtiMcdfZNiumAymzjUmKze9zLxVmYSrKhRYr5xLVNUsytuhTGKHgSpy7WC2KRTtQmg5mc6CaRQ8aAbvn7Gtshog",
  "key24": "48ztBfG6rzLWnfHacZnYrCWU2mjs3pgCAb4XFsjwFhBY5ZeUEAF9yMjUQ8dyQgqx3UJpAmuVVfDFyyFY11RLeqHC",
  "key25": "4xfEz9xYEXYKxVWQLjt8EU9gvBxqUH1dmkGYTgHwG1zvEJCGYuR14ZzqE51gC3vhizMbkzA7WaXZXVUeTh8XLHYB",
  "key26": "473ysNFyVJmxfFNAFegMdqNPZNoHK16TwKgxjEvw1LDJWav6BCifTQbDKrHKDX5GmocdQhNJosehH9dZotGkmEFF",
  "key27": "5X57GNYeU8vf2EutshUsFVWn55gYwXuX5Ddy1cFRAJdgYqW1vD6WEB4qRzxHW3LBUtCXPHSs4iKvNEJpuSt3LAmu",
  "key28": "617yw2kBdUknVL38nERZvPk1wvVh1xyDCSUbeCtQjwGNnErXUAjUMoYvEvJRHfCjkrx1uMc8kV4vzEPn144t6qxq",
  "key29": "4FBGzf9Yjf5xdsLuj2ikyymiedaEaoXbGDTVfi8KTa2pqJVcRGsHopsgBmDbNJ27R3wbmGzd33pVrQgx35Q52fcd",
  "key30": "4Rrddi71YxN15VbTzeqe6mZWy6JiGSnSwEG4ea2cUWFdy6adQDVEEmsCove4rcFxgEyhyXCp8iCtyHfY4BScrNZ1",
  "key31": "5QPDYiZJJUGZTTJTT1T4GiYwbaG9qBAVSNycyAt2hx2U1kQ5XH6ott9bB8e2xSahmZ7iRk2uJe76BZrYPHhcLbPi",
  "key32": "woh8GFviuYHM4RhxfkdSfRghqTxns7Xhk3z42FiRi1oascgwkeYBeUFPSBjD5z182L2fadX27hNBQPbYLFQRaUS",
  "key33": "474HFg6QaHDN2xSbvTDZVz2PwJXVH95cJ6M91QR86H5iRzgBPQ8toVbwt1MYH9Es56tbLrp8SBj13CudZstMo8Kq",
  "key34": "5BCoJSsURHVFDKYmqJNjwTcboSE5hNRXutVhanzhfpYVchs9zdKWECeF4t53zyP8JdnFSiQA2e141edjABMTavFQ",
  "key35": "5YT4yn9nz55shUV4MAT8kS9GqQejufCNbxQbDNVdjydFstjMz5agqHfGCsE1UMAErVCvrm3mSavuUbsCLme12qEa"
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
