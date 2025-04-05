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
    "2yLiXyJCVifpcMqGnL8WfAKwj5dPx6vua1Lq77SZyRZzfGgDUzCKjPPqaHkBDBh917wNSPcAiTmjjUUMBUQdArAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MoK7J2Y3GxggbyR755UCA55wB961t5EcrQawpAU4YrszMpgttb6Z8Z6aDXtJ2L9v9ac3J7w58wmbUQrg66NC4eF",
  "key1": "4MJp1SVEXq1ZwrY5pMwYSJKhWqCranyWBez8tWAf2mhoJYp1Q7fWUvYLqKuJTtGQm3KPnrMjYF7TfytWeE7x5gP3",
  "key2": "4nrLHdgKh9HQWNtAKHvSXNMbWgXY1qk24qrBb37X3Qv4o4YvdZocoxhpFdizcKJn9GwfNQHwSDdm1ZBGqVWybFJf",
  "key3": "4s4fVbqzG8xSQuCQkUh6iGfqC5QDZRdRucY8MaJ4hyfXGXonJjkT8HFFu6veK1tQRiVofnigg66kP4RaXRFT3YoH",
  "key4": "64ga5ZebWeqfVTCEFYLHcZtBwSN6KUAadjK1rkKAvQLxLzQUK8nvgrKEp6BmhMYyzaWyNhpfkjRQCgbKNdfJwZb2",
  "key5": "3G1gXnWfnjectomwhqEUHt78fvHtAGMwE2w8vFxwRUF4qynBRNF1MUgrQXEXQanmwqHtm62d3GnhnMXiwpiKmCY4",
  "key6": "3yeZB18YwPW7JpxPp2vpm8QRcffuktgXVVd4xPR12z2nwbirbaGdSjrPaFVfFZwnNnze3Dx932E1eBDh9EWA1rMc",
  "key7": "SkBroiRpifjzXjzRX8DnKq5K8Ut1wi29c3U5FV7GEuBp18qbc2xi3Ezn68RGNU321YiE3FS3XUiRXRDxqTmtzt1",
  "key8": "pMVdYRrFecTzaozJ2SF6twF4p7K8bJdd92QdQGiTnnUennPZ55jQeX7ZTMAhU5CmteWjehHrGLFX4hAncqLf4kE",
  "key9": "2BgykpjXvBizKFmWWiwJHUbpAfgyxLaVxHrHjvnjNUmw11hMRUG1aQuoVbaA7FL41ie8JAz48dTvBbh4HwPVeFhW",
  "key10": "XWA5KsTzmXRLtVmvREUYWAKe786vJBuJ5o2wqdrqNKaQ5RWzkEqgfF5fNgukZewyZwcX7JX6gA6jJKDUDQASmAb",
  "key11": "2yocsVy9zppGzcHZP5oiykzEATCpJD7ZDcr2w9o1cdNqT5b77pV9evQsqQhY5J3D8b7j2FfDJfnQeMvKcD6kAkiS",
  "key12": "t6mkzS5Dz5UUQX1jMNgrrfXMbF6zKBNpwp5UzeCimg17izNwxL3fNi3W4Ax6J7mXJgY4AMvXQLVmb9426i2X1z3",
  "key13": "5RZA9HWeZWX5vEftUnSw4PfZzbJ8onPsP7gmKpbB1RuPkoSkDngzM2ShstrmcRL299Y8CC7r3XVsTSei9DLDXee1",
  "key14": "HL6yvCzPn44g74oXRGXhVp24N8eNHoXZBNw3SszTy6CeRsPcmGcNFvHJdMGFx9TVu1ZpKsn4qn2UvJxXwPLCuDz",
  "key15": "3ct3PFqcErCELRgTHGu2aHRkUoyBVneA3szQHJsSmZJFnmj3XxqCra7KtDjH9sdNpQX19qHUS67uaTh1t5SptsR7",
  "key16": "3EWq2hE8eSK37odYhXZ9b2wRnx1vyovSVQJoxvatqa1Ndz1E3ay15kL3uSVrzCFF3tm2ELfc1tFG3LaeeoVr46A3",
  "key17": "4mHZ4Taaz6KYJa1iuGmEj6VqjB1SCoi9RaBDw1PuEzyJhe1jKgVRb8wcat9A4KqFBg5HcYayqrQkF2pUJRcCFBDB",
  "key18": "5gtv4hZqeCgyanT6i1ZYgauKpPjRTFJyDthBF5PozvNtSU1bEKWmwq3nvw6XJ14Nx1dtztSSqdon6bGXUpHXAn6",
  "key19": "4CjHAAAfnduXMJvddLTZVSY58ntsjNseabWSsLXCGxJi75q2LbXoyNoERBHGiG5bcQBNvR9YSjQD5Jvn76moTZnd",
  "key20": "fn6RXqMopBXDqNJvDTTgezuaGhaYoJquVVZrrXPBKkE6NdCkaoDeiGN1yL7MuZDe1Gy4N3yrjUw1JbTjYt9DemA",
  "key21": "4Jm5nDwB82EoVf2dsY3K9EdzatyJ3VRZv5EmVMF32CfKrEq2akaLew8VfdwsvBwK58D1ABccKLfNntrgm1FPw72h",
  "key22": "5ve4ngzFmw28ZbmeaFN1mSL2vac71LPKwv7ABx6p22WJHzDfFvNv4Us75qCB1zNME5oTZrr8WM6QmGfg64o65hiJ",
  "key23": "2f2iX9sAWk1xVXrGt4F9Aw1kFyDH3jv5QVM2EQ32eKM3qHDejbsKbLfscuN1T6MRdxWuWTFMYr21H2hZKGYzQHkB",
  "key24": "5EZCSrbkcC29XzmBoVTpWAFRTN7Sa9rNqeTTMgo13SXkU8aH2FthVGCoEcAMTCNLUpT8oJtsc9UtThmtpDmaqrec",
  "key25": "i6BwqwnhaUBtCgKBDajmWr8MhwEgBjai3HDr4yS2CTfmctEUkecnCuJs8JE6JH2xt6voVoeL97NCCRCb8kUkU4J",
  "key26": "5hny3CJzijtC654tBPqJoj7N4wa2pg22nnfnoTmPicWNRVTrb4vmQ3RNtKQ2LgqMX4Q9KAtAGPuW6SbowdQXQQ25",
  "key27": "8q5kanNSUmVBmxjv82GmvJHmLHeBUZ1FDS8admPcSwND29ZRkRu1gsdyjn56hqHxWFk4ntCtNATo2bJ7ffqw4eE",
  "key28": "3cgAsoVgWd71Q2qfi2LzktzU1m6pQTuWgPbuJkravEyEaW8UqsJc89hMQDqCZ9NPhwLdpB4Nzo1Nfd1U9ZCDLg8D",
  "key29": "3PB2TWYBrJjvCnLPztM7EdFqQaYV3V5UfYLigahwAxB24bwerNTjDzyKFNTV8RfE7gW7sn4K2utBxWk2ofaQD75D",
  "key30": "mVQbpXbCpWPEEckCtkBrbydZspFmhQHVSMYkKFxL3iZZJH3zhFNdvfnBPxJ7GEe9CGsRxKWrT24aQLwBVZYR4hJ",
  "key31": "2TCPZtv8EC3DnbFy1TG8LbFJZ9ZHaBduiXWHZ4yMVmv4Ktb4w53innMSrY1ZSycCp7dTztr8C5vNoQmbDoakkv15",
  "key32": "4S29rTg7AR3EKLLWXNeCbZ65BS5B1AmJrq5htahHgT2Fb8dQPjrhcCmHfj25wuSmh2GRs7fytbba6PmnNNkL5Ta",
  "key33": "2q9RozCVULkhgnGTdHSzRt8Qw32xcWS4Psn2YqHWed42vjz5Wr4u9UJqwE8Waiaof34DrojeZP5Dr3uezTSGeo8p",
  "key34": "5mU3xfBq1xMgZka9CJMnSrTddacDadiupZRynC3HzJjuMrzGVdC7K5oFh9F6simzF8t24XgMQdsLsBeTns3GqySJ",
  "key35": "2Q2C9u27RWtSkdPfSs7qayckFQVFgTrb4RxckLmveqtzY1uHHurs4zJqxJ6fAD8FaytHVvgGVcWnq4nWCPdt6nZR",
  "key36": "451d7L4cxDmtE46C89XWJUckm4B5g9rexqUSysJnAVMUa8VwmfRP6jKY1DaNwcB1jyuSRLmawRbV7pDDyiBPCFA8",
  "key37": "2sVYvu2iSZGQWfRKAcSFSygEF6HG58pZSWJxSNWUCoWCEe8SeapxGeweeAhrkfMpdyHVooDemct298DNuepYNrfK",
  "key38": "5TTjsDAQgmWLUqP76riaYPdBWJCCcdoVmmydaUtN3XDTaN1vbwWh1pCpbg6CnonQsjcocKdcYHVK1VTJjkMjx9so"
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
