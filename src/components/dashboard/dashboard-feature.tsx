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
    "4BkHKxMJQLefMRE7ryWcBUbJcRwnfw4QyWRfJjJSCfCdNtWpDJWZTaPPnUSDDDBq3XU964sQ11Fwrrn9p1yo3EwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WeZ19w3WA7AiG2nKRBH5kuDpyXWBDTprV4FcVeBxBYrCtAw51kY5WvRGxJkQjhwoPTt4MyrcujmfRQqpEyvyHC8",
  "key1": "2TXkDKgi8AroUpJEutbHQf8inuFTmcNB1kq6tPCeh4z26aLDDW6PNVnopKLY5DS8ZJLFzZVNm3sUi84dZMPUp4ps",
  "key2": "3Hy5rLRD22QBCxZ8sZwPbDo4SGL4LTLCS9bUHuAcfWfLSwBFpVSzHhnwYcMjSH6NVPuYmYrQ1eRPDa5ogAkYsCo7",
  "key3": "MWQSLpRhi63FN1Y9GU9QVGmHpjNPWD5MRGW676gYb9r5jZtvFN6Ypo2Nnb7aTwjLngQvSaJTogvk1Gtgbaksk6V",
  "key4": "4vwLKW22dVznCnupsiLusvi8tuKoPUNkzty8BKMWiLHRXkorxZQKkehGzGW6qGCmvMgnf3EDissF5Jt8VjRydcF3",
  "key5": "3x5RsMVqAGWtTbznEJzUipuntXptEWVNyYpNUUrxugbxpQcQCu2P5CSFetf3NMmU2mkuGu22jwDi6RQy2wrdMqAE",
  "key6": "fWLmPqUVsZ4gEhT8Bm34r7ZLUu8JYvvFHtXFyRCCf8MYTaq8AmybzbTip3HiTQMCQwmhPXYf2zKWK3JAaQ1zF4J",
  "key7": "4DtXgY5toRxNNypHWdhtftC7cNWSBVSVRLQi1jMhkWwn5o7p5p8XH5irktpTRBLoUNiQNPqBxok3PDmZTd5B3EJg",
  "key8": "48zEqQThrNMs1E3TaPhoTK8c7Tw2CTctzKpsDaQkBG7Kky2HXy3bg3kASndrfyC9ZvPN2fA2hAebQntaefoEh8TA",
  "key9": "qkWzEV3GqfTfSj3VrqqM2oKkTGttgheS7t7FAtcViyyNuwyv1NkKBpLgNEFrGwafgWRKQtYmtioSYgT9bnNiAmC",
  "key10": "41UdtPoWkFGvFyxH71Tq2eg7DDbmXpedgHXH33BLJ3XvqibtrxbFDGEgNZSxU3JfN2w7gPM2zTaFfMd6KKhL3W1Y",
  "key11": "5dPfHECEwM9FL5G2k8JN3jTE8KXWPjUVdwmmUyePESyrBSrKPYHib3sSwFLJAVT1AqGPf4x6gKEqNUdggJie7Lh8",
  "key12": "4tnFzArFuQYWjCQfa89hQsUFJ3WUZi3XXaebVE8uL9osWAHRdQCezNbr9r58rVsSkyxHRLFE8a8yF4M3xqT1LEyU",
  "key13": "3wKY6ciNSrzurkSCDMEt5A7qkWqp23i9PLXaoQqPbfecr4PZov1j4MLBozsmzABT7CJxsV9SajS2sgTHcWeTQZz4",
  "key14": "44VnRw5sheQi4KFQFdnM4uZG6R69Hju5vPT882fddDgZxtuaozuSefckd9Jb3GZT2u1oF2YUxtR2njbpy9uHneaP",
  "key15": "3ppTAZYTaAjr5obHNu1KnwsjdPwsfzjUAZkiQZR5USkPRC9DHjdzJjNBjcK4yAsQvXepeLeqJidGQwvbuotZsLVm",
  "key16": "z4zY2TqBmwxFNwriWQ6Ry5PDnnVHPrj9NeNME2YwbCZDqHpejkhkvDwDAEvv3pupAfAURpZkzj6K9DF1mnDFPKz",
  "key17": "5wbZvyRTN5X65qpV9EzjA3aFZGMo6YQFz7TGeSHg7nnKyPugA5NyMotTid5YiLy91RLEuUYn6Tpmrn1vUdBNGWs6",
  "key18": "43LaJSy3Jw9G4mSs2nAVRPERu7TMkj5HwdAUqjJDKz58W8TovzcrnvGA3VCSbcxSsQTq1VerSXwQXcx3VEmMEsyp",
  "key19": "5nf6YHXSfQwyBmjELcrwytbHPXH9agv5vecYPGrWhbG5KAWApZtuQdUvagz5nn2dy6tzKQgphjC3EMC3HsMmRLCK",
  "key20": "5uRLBi5kH1ikpTEjBqF9KTLq7s45iXzDzp9oAkFJ83zvqyogt4xJfwPn9XhhD3wrNLfpB62iw492BdjKZjogzwpe",
  "key21": "2pGZcVASjd4jY6H9ySbrNq75rYk8jXgEESAXAfZMdCGLTXMs6AnGQyP5CkC6ihYeLS9z3va9dDBX6nd6Cgm4YBcD",
  "key22": "5amQuFsaP1dtjVzz7WEMxs4MGKhihXz6p3mzqwdSYytTfKBc4aA2p9NDFHtXPPyj2VyGJh7ui4esJ84kXdt9NzUD",
  "key23": "4yqL5ZkQfeuR5bGVRGEuRqNuC224EngeFzJk6tgwBK5wfepGr2apsCeMUpzAAEYivL5Mgah8LTKarmthiB7pLb1w",
  "key24": "yu1h7W5U1ZyufHpwJ6bAedJg3A835SEs8QRpThwNZ1gASYieVV2aeUze6XTe7AUpLLoYUhUcqGbqN3vDjhcxjRq",
  "key25": "5bT5L4p1kYyXzrRMujTvbSuoNn4QZk8ahTXGxF7sixNipZ9BLDKMAvP26V3DQarvhyb9UriPbLLpqebC4mJujcGH",
  "key26": "36XcuuafGKAKXMPstxwk9NTJWqtQL5wadNmUdzSnE156oEtJ8NyH41g7kKTrasMJ2nBUpzLE7PHwq1UCyRiMvq7n",
  "key27": "jfQ78d3gQkCYyxcxUzyL54QDGMvg6VpT2YbuQcfK2SWGgQSrtSf9tMZnj7bFyjAEbvSkfbt5tz999jvUrQT14xX",
  "key28": "uddSpRd1dHApMzthQrEPJiyZGwx2penkchwxqc8Zm2tcLWaraj7Qqmrq6S4tJCvkKwqwoaeTVXuy9JRsH9F4Wht",
  "key29": "3ofgH9kKP1dHG8HRTZGUwuQq2AP7cX6rmFzfjLCvtP4NJEECtDs6ZRPoopPUTYJMKtu2q3fM526Z5yH8PJJLCn4S",
  "key30": "3tbJ32uheYrh24i1vpuB9nSbadXdjNykfqC55oByzozLU8iijUhPZvqfFjE6oMKmYbGMmRHDsNcHGqbHEVpmwPr1",
  "key31": "5TNyD2A6LfKZEWwZ9DWDBzAJcD39hVdDjTGA3iGpWZ6kQusAznC4aZ87dPzWn8nFg3cqPjFuZyZYfpFh8hUkA6SD",
  "key32": "3Q9dQwgE9KvmyEXQcza7WgVBNyLCXrncDi3phytniNGWGgScJBrq5N3mmkpi7nB3DkpuE3QGf8yqXiWn7BqEsaWT",
  "key33": "3ukiReXcbAan19xT7bFqmEoM8YrVt4HiQ38RvDdJqrL4S1gGPMwZo3Ga6BNmzTYpgmG6WLJjq7Rt8SRBJX9DK3qe",
  "key34": "2fShsLQwJTrt68JfBZLXWs8gXyH4UZqaFVBPkAko4e4trQBab9R3iKuyxhYmHf2uqs5Ep5ExcDXcMufhg5VYppaP",
  "key35": "W5Mh3VBjwxCVxk2aVYn8ZxLXjQ4v7RcPt859Jf2gnbsBdqb4wdTfQ8UNYTZBaatEVqWErmQubyiHMcm6eYNRKpQ",
  "key36": "3o6T9FEw64oe8r8fhzqxopXDpYyVr3s9ijK9sjvNUJuQ6X3Z96j5YL7PhzcJa3aQ1RHvre2LCuT8mqYfLD64k754",
  "key37": "2dC9W1Hpc1FX1PXstTXDd5UHHh4bWTyaTwzdmUciCSLYvmFu9DsNSQYZumrFMqSFYr5HezBBZqzwkhuQRg1pttDh",
  "key38": "5mea9rQdMvP3SFAzwLKNzxRY9vqLY3XUoGBsRPkYMKCdNPSNmr4jMLK2Yg6vH1qjWY5kfxBapJFzdpaWgKPPWEbo",
  "key39": "7EnWN1mqJGeowAeHDAgufwT357EDh6fdgX8U431LC4oRYmL7vPjkuqFgYECxeNpYzW2HfSNe63W69aEEfRkaRgX",
  "key40": "1JVGgmVE4dmbS3PVFEaqhSUrkAuKKy2i2b882gNYp1fXmt2JtHJiTWc9V4VWEEsYVx7HNVgZS2njidAZhK6LCZQ",
  "key41": "2mwP1rW6nNNXhYqngLM7RvJrqpzqWkVmWGwxERtA3SvpLEwhdWYohcKRBq5XvsTgzUswRxd69shiVrecabk27jt3"
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
