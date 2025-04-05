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
    "4S2FL3WGyebu9VyxtckPfCUGhseo2rpT7EuKuJNi8jJWmXwARFTwuE6HcL5RjSxaXtzVVRqWeCiPwxvoMUtuSFQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m2wuFULyUG3stUFA7BW1rRhbpVjmfU1rFQqzEFFjzkA7PoZnaqP8WLuNb7qa59T6F4PWdms63VAsXnNABfjjqq",
  "key1": "MzrnJRnFX1tkuAzC6znjLSH1x3HbRUkWQ9w7X3Mv3kTqKfq5MKfyuaNNK4YmVoyAWeEigri1VJkWmz2epTX5hEn",
  "key2": "4RNypoV5m9AbGc5K6M2eu6EDNreM8jqQSynzrjwYT2bDLL7GnNxmhEhgxV2GjqCdMRVuefZMfz81fYeeCYTzpAgL",
  "key3": "2a2ZcX2892aRzkZMT7GCihAa85UHByUF8q9vjsJj5bzJFk3qpaKBSM7kMij91P5xsRuKskxYuiUengkaCxWLu6FJ",
  "key4": "296vNsWcEsBpKrCN13nrxArJAxVaf9NHwF743uxBHMKPcEFVbDu8TsjRNMvGuQpKgKvoPDnfvoEBW6eqWs4Bjjbv",
  "key5": "5g64e1htBSsTFBXhycEYRSnfo3u6UuuMuTyqrsfVnye7CVCH7stt1mVnSBzagfG3XxNABAxByPjHisM2KqEVxkVU",
  "key6": "3AYf7pL4e6HpffgfsCLd1Nbf98Nm8xxmyx6whLedejHgqGsM6vAwiUZZfczP1kLHVePUHpiChCAXFgrYW8ASoBdC",
  "key7": "4TJtQaTMwTMBMdnNLuWnXo1LV3Qcqd2N4USp3fbsGQYSPbjvYFp2LQho2kve3F7aorCuxZ9nnsVk1GS1WvRKDxR6",
  "key8": "52Nub53LtRA8qWNgoD3W5arwYNjQ4xH5zbGBFNzcD5KYT14ijSQn74uniA9eeA6Q52rRNmuss1T24tRdQ7CzGLRU",
  "key9": "24zdevCSC2h6AzqYx1jACm2UxY4DpFVE78H7WkQ3sNQqjVBZDsZxRwo3fzUQaP6Y9FSBXwKEckTEH4amaQszUHVb",
  "key10": "4eNLQyTBQvWWYg93M6uKJC7tzkG3L3sPXbvfqDXokEiWcqyvJG1qAP7ow9jf7CYPKT5Gg7Lw5et6AZZ159pvx2MF",
  "key11": "4GGPr8QbFrMYdtkNf3pUpguyYQtWk5yWnA14DXUTFxgQpQ2DeVCRd4Gta4gX8A37TmtbDandcyioY4BSWy64vWNK",
  "key12": "F1fEjAGnYwSyQxgH3qship9RZYtpRMeuTeGnABurNBEDPBy4tSsxMnL9iw5KYp9U5HLLnCvqnakTvLWUgkPfhMq",
  "key13": "2xEdnsmdKjctWPWiv6M2YUoA5D1UWCZZjtJho8m8kQgFs1QxgEHgqx9LZswLUArTq7tceftc39dgXNU77CtBkm6J",
  "key14": "BBYSB6YiThNyjpvPZc8RfKH2barCN5KNbjLnVTRvMkgr8DkVvT9G16iq8PMvs55NATkyGN3p7bckL3NXePxH6X9",
  "key15": "5EjZA42Qp8g9bwwxeo8fwLKPr5oBXrF2G9tatAcCLjKg8gYS4QdmjnTsiK9GcbqqMRT1rLEJJHs4uaTiN99PFdh6",
  "key16": "5Lh67KR59jdBCXtd5xnadXxe2V88LR6zpXwmDdBmPPaFiA4YuSrGonskGTtRq96nQdHtv7psfNJNGHEQEur9xLHa",
  "key17": "Yzg3a8vN7y1D2CvBHCv1ezPqYgi3zPdBiUYpLjbQvhpdxB196NtzQ6XaaP4QqJVsXJMdLaU158BKQwNieaDv4tw",
  "key18": "4WrYbnqp26pC4YGG1H6zED75ULpkXXUWrkZp8RzL433F8mZ92igWHBA4bJ4ttNMY6V34Y8fNLBzr8UKq7n3ZtSjC",
  "key19": "3MwC7xdmYYYSUStjkkwwNJzWUJa1dAri7fpaUQjB8ZC7d1MSQhjh5zgSVbjHZKs7ACj689WheD1ZzBvYhAntR5px",
  "key20": "3io2zcqWLpG5uqRhDUu7gZj3qZmxZTWJBWR8coo3v3PYEctG97etRXjX4Z78NdBURM5z4fsJxJDqCvJBFTiH7nCe",
  "key21": "5q6dNC5vqXrU7kBpffUrX76wJg8o2ecjCVS4wo7JHcB3N9yMLbXwhqyoorV4zj7hq7kf36vVrrcwVU7rjtSVovJx",
  "key22": "5xqwJWWwHcgmYG7VZ7R23czdbXcwGWi8xrNX7fAkkj4aVVdEcXVQmVSWPxCc2DHWL6dxoVDTFcpjRKTXghabvyd1",
  "key23": "5J9bLqExvRQZQusqhbofqKLFiwc8Js56YHF1impHYBe4auJwfr6feWv4zjXRWU21ZXTuKMV91fLMeKkBnUPGKcoZ",
  "key24": "4nicAyV8C2SnGSzrx5pb8DU67BebovUEohcvuGG2KzYrNuPoW7w3XGCsg6zx7k8bQoCtCdr1yjjXAT9vDSoRwMRF",
  "key25": "2FRSWfoazAgEWps31Bm9rMUMSbmffEXPE8satTuNfrcUCPnmr4x5g5noekLrD26fKJrazk4D84itdG3o1mhAZZ3P",
  "key26": "5CqDQUXomN328zsX7PEaUAzoHsg333m2cCd2h9hfne6h5uwwGJyhcEVRcWAam95CrGe9jEsHw6DTWR6ChsyeoYbS",
  "key27": "3byUNfvWrWC2yn3Zk6szcCUQahA7RVmScdyzBKzMW9dARgKKKBeAsYESuZa4sxKRCn9wt9XV1vL5BRvMGmWnSMQH",
  "key28": "3LCM4PZNRE2mjfiELvie6Acar2orgVKM9F3CUz99HZhru7StqgZe7gvnRFRFC1V64QnwCPkYD9x2pJdCwsgd8DcS",
  "key29": "2i4wovJtRLG35mUBux2rvvJsQ8Fb2YXeL1fCH1nX31xN53eaSV3oi9EPGimQiUikzqXqjXawHpassdvh5SKW5QGY",
  "key30": "o96cxY17nhk35VSRJHuXFXKC4LyFG6UerrHh3riEiDfVskbPKooA8uE3hHJgYj7q9h8HhHUJuNwxHjFnf8evSQr",
  "key31": "2xVd6gh3PDU41zQtMpkTMLJeUD7a2qgmpXSJsGvoDSYctiG91dKqKHUb5nKcTEuQ7VA7HtswMu7Yfpvbevm8bYgG",
  "key32": "3VDxatCLw3Scardk5yf9EgEmCJwuj8pGcojseDfVMLpudAjWgQX5hVS8L3K3WnBDaP8DDQb9eRVVCF6io2znnE3M",
  "key33": "5oQvBQTZG472XYxrCcCQ1Ah4eMR8br6fRKiQmPpubhf8d6Qf72PKJ1M2NcDjJFpnKbfGRnBXYZEmyd9Qs3rgrg53",
  "key34": "3kLNCDB91GYcEnJUh8bma5Vu4EFpCWxLym79mSLzomsF5DVXgLVesK54CUe5Wz7HvpoEkC3pZD67cZ4N7XxYuAam",
  "key35": "2Sqipr4h2seLtiuVLUGutiY56nftangur95usuMGzy5EgajNmDokytsnA52iKnVPaJZzxJcA2DBBwaFHBBprnUsu",
  "key36": "3hqjzmCjRLrKqz239Yz39GEcKb9yGKAzdan5wd4WJUbuXCTrsmYE2wVKQp9PYqQL1CfpUELDuSzTiCe7vFxwYFu1",
  "key37": "3bkm1KAJaCMZzGqCgxrWHtm3ohsU4qm9bzxEQL1dBsaSRSxt7mnK9KDivLhtzvkvKy7hdcgAYBVmGFXoE6ks8fq8",
  "key38": "61GH3MhnLoTdVSURqBUV7yk9xchmCGXGTo4BUQETrBTSKWaX73BaXuLNicxJmKK2LG1CSifqeBxXddFeCDefZSMA",
  "key39": "4M4kziBJq6EMDcFLPDufyomvw7Brz8qpHZwzN4oNFczxGpFSxnYWJmpbhNvSHMtCoeUYzvAVWykd3UGsFvb3CDoV",
  "key40": "4gTeoqFSYawmFnoKtM4JEnFRas1X2ZPqfNKoZvX5DXFZeBg51TEW1rrimbrtkz6sya5pS9SDNrA1Qb9wGMJNzToh",
  "key41": "uUUaTg39KJzmapsqVxtbujoGHj4zD1idcA2WaSPwhkSMKqBfvmWZUU3kyYQYd6oEoh2AfTHsJxuuiBZLAJBujYY"
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
