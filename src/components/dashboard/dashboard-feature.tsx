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
    "3S3FZ4d1PerKNgqbncJW5XMJ4ow3cJYUiDtTpci8BHDWjrEBTZJi9pNTxQhdT8jDttYvJyaLrNMjMQ3jJXVcQTY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mx1g4Yo6xLiZDKFaRqKhhzVjH42bGfv13Q3tmKr6Uh2cuR6YjmHUXntycfx5ZT386v4cddCULcCHzS47qp7tUEj",
  "key1": "3wQ2a8xfCmvgRHBDT8wegVw9fDC59Y3AVqcUbcaZd5CRcSycAEE3PXyYR8WW1QyWqH2tTawHTYbZgwG7xf7URvm6",
  "key2": "4LGiRsLuLeWgwoswDWqXNS27GUUHAqYKXgE1JqPastfQPWcUcnG55nVNuU8ucfSPhUuB8BB3fN5FVGKPVPqihFCj",
  "key3": "22VUdAJgktD6csHtQNjgJojKgyWDhXN37MDFeNNvtcCJu1i9Yj47uBm3Rv5pwSnPdnYEeNX3MUnMVQV4xZRhQeu8",
  "key4": "4VR1u5Up3WNidfpsqpVd1Y8HHbqcMBMGGWNYJfRB4oLQhMcakp87ftMcif2nKE1quas59BMAEkmhz6ktLsHkWGT6",
  "key5": "uS5wQGSUTdKsWd6dvVqube2Wa6RVqd7LHcvvsT7pzz6pjUtxWhM4oniJGcqAezJ9EpfwNhG3jLtweQByWqa2HNJ",
  "key6": "4vXMNoxjKYui5ASnG7DHXbkjyXbyBeYAsyTijCidjoRPAsYKsxitW1MYNz9i5Ffop2n3ZFSkk98iL5f14jkNLzGr",
  "key7": "36giXqsPcuEbj4PJoaARirV77YfkMDDkMoXDdsGqJBTga1UNd8TZsUgJreQr5sGtb6PhiMJHFBtVHDCFJ9fcwpfK",
  "key8": "2hyqpn1j3whikm28P9Z7FH1enYaY4L5peWmbXu3nnwjwMz5CkxjBbPMCjyf46Dev69GLtuF6hHrdebnSF7BDoLrv",
  "key9": "4nhEsCdmmyfmEzCT1vfNiLzKFGrqSn75ojd4vqW4nfETr3BxDpNyVkn1ZJjDuFBy2nU3u8DiqSBioJfgCspDZ8q6",
  "key10": "2y85t4ujA7bBE5gJWUfzdVfhYK5QkrVDYkiyE7vkP2JfFFuU2g9qGgy1siCDqpEDQaAsa5d4wRXBa8zA2HGza7m8",
  "key11": "5QG9Ep78iybTCL6JeLgjBDQTGyVgcywhDcXuG76ANKdgjHF7eqq9KdTzJYyXWWzvCJ9CUKeHiqMjLMZbQiet54mC",
  "key12": "P76S27iKZzNT15Cu4gJAi9rtAutQ1eKpN6P6gDPFKXPjqtMwpSqHSDDzyN1bBkoLjAUDo3T9wyxuvQsm8pL7ja7",
  "key13": "tZP5hhg3Vg3QdYhcKCcvt8aWKw1igf9ogP2D6mNHenPXtgTvFRtyeKF8mtitfBS7En4nuDz2EkEHeZFBv6radz3",
  "key14": "971ByLMFjUxLEUYdQfh2k4kTE8E4WiCUwpkoErYU9viPUWiu5QBQdqXAdmD76PFkt6KiDfcBpGff791opWjQwyd",
  "key15": "5nTDuNwgza98p8EXYfvoJ4e4G2HdLS4PC9uPjU9zAyPbL9zfZquMMVpfTXAhZRJXe3dPjNCoVpwvLpSDJPAZq3Qa",
  "key16": "4PjptRXrSqJJ4W3Ex2RnhSqmw5EsEFGxitcfxZe67WCnxJTw8TyHVayJJWf5p86GBD26y977EGWvVHJDozgktvzw",
  "key17": "2pTJqN4ot4nFNAsDEMTVn9EWfGYwmR8FPLYEgwBLxVXrYXiBLiJH4j6qjWvyQCZcsFJuDMpeLfDqvs5zcXfY9yY3",
  "key18": "2USg9VM2H2EeZzaPmex2mRxSrztJia1UgYrPLRRdEAtopRwZ83xZ7wwy2BDHDPJfoYNAu2Luxy76x68Ro2KEpiyg",
  "key19": "gJdKCC3knerCbYzpWCsbwux6oPpTd3Rrz2HgydxgN2YqB58RuqUffvx1xXV6tut21Fsq6Xy7RKpDEvHrKSYcvJR",
  "key20": "qFuYGfM5GgAPS4tx37TrryiqFiVXK8x7qPqJcMABi8gc11D7HUh6zEbBisz6RiYRq4d3mAyBP3CPEVFj4nNies6",
  "key21": "4KT3MTq4oJheZE9xHrsu1bfwCZDrcG2DHh7x3sQiJjLYcRMcRKiqP2c8hjsSSA9P2CRdnFGF6ruRhop4u8MDfVSS",
  "key22": "4sHvaxGAToqQ9TdxpKqPoCmMAzAd788tac434zXprcDV1b2p9v3DRuCLHAEMokz2kpxtvbuymrYN4oWRbwVHKVkp",
  "key23": "2aA8DGp6ac3pBEGToSa1vJrtDueuFCbsAvqqgFDSdrdjuEvdhYBWtkhC4aNu3DkgjJDmxRV22igeZmgz9dRbqFB",
  "key24": "4ArdyaYhDs7vXr1RqboyJJN29rSNjCiMP4ZKThUdkYtDxbCcAH3sMjEDXW8S9pjFoHm9A9H3BdCu5amNEBG1McXu",
  "key25": "BnCWiRvjARWnCdt6tJp4dLXLg7b9hVauAdA52YoHLYECKsZo18QEKJNPxXz6bDJ6z7kkdhfYwquxKTHLoZ5yD8x",
  "key26": "61dU7QGqhKnTNKhU6Wxph1w17Va1g2PtWcWre9gmNYE5Y9TZY7fPkAw3csPamb2hq8ALnxKQ18sbsn1kLH7ppMVP",
  "key27": "5TgEK2PavUTsr8oFvszwemaRed7zDVgiih4k47mFzXWjYv2nDPhH5PSEaf7U5Lm2NkhQVGjADtiEWdGWbxT6oHSg",
  "key28": "EHrgA3LsB8hi6NzeGkqXawDAMifmHcjeoxbH4TrKXR5GxsiGeZrZma4QjH6AwGxCd2gkP9qxCLXmzq7FiUmPXia",
  "key29": "4TRLNGWyZLDehKBDNj1cmngFjTybDc9PKt3LBXFM48aFmsxAC95YLeHq3JXgTzguK4TPapw7aWeE9heeEDz2uix8",
  "key30": "36hB5Dkm8bp1w326p8fBFLN78pPgZZ4TUTsXJDQq4Rz6ishtuYqoZE6U5URmiodM1qs9Ts9ge3jfuQGnRP1xNm7y",
  "key31": "5gWWsnaT8DTe7hhWKXkTdsqRgRvs6aT1iiKHPXnSzSyePsq79UTmRF2qtwcBi94zSNE3Rw39asBcmeCdcLF4rTno",
  "key32": "4bcFhSwjCpkkMNWDQ1YbPYxFwwNWYXCsbfdbhNZYrB38qok7My3ap3TwMZSZvhJMEWQQ9fPgtmJb1JnZb33SeAE3",
  "key33": "3Lr3xwgfUio1b4Y7hTpAntoA2UJSXoGCG2o8DuqpjdCm215WyASFLF2inAKMLi92oEaNcuMY4J91ChXsxfv3XTVF",
  "key34": "4kjCjGKaxWesaFS7BjD1TkEyQ8xbscJNghb49C1CFceSNSHfhYcHJB8HJTEGH6E7m4qRFCXmELgA5GyNeeqK8oKu",
  "key35": "3rpinatLkrZoJ17j7R8TpB9LCE5pEwpKWX9tZSh2ysPRk89i6vvMD3Fr7z5pNNkpYQ3X5rDtBZnXU1ybxKeZoopM",
  "key36": "4doKr21KfCGcwtVYmVEv6czgEx5E7VXnEPsxzAkKagJqZUasqTGSPKii4oQrKom5RdsBGtuUNLhE1RH1s2AryjrM",
  "key37": "5KcBCS61faS31ZhVWeUkEwMrvSbVhk7vg3r2XeVWsktQSDmbixmnnkAn6WgqiSCvE3GLWtZGSmubi4oY9dWcHh4h",
  "key38": "4rC58itEdQZ5CGAs9i4Ym417WYQxLyiKJaprHuGaeAVdFKWBZp828ik6YBYScwMs5L6zH9DzgrzB6cP8zpr7Rmvd"
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
