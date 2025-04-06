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
    "5T993eza6yeVzGdm217SE3iFy9RHMZSfcGCirLtVh4FFJocN7Cso5hNuaSZ58NruWH6oz1LLC72Gnj1P35A8N68G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t1rggYqPPyrdoh8ujxJ96rN3W3MMUf3C1C791W73BoRXwCQDJGm3CxMgE1uP5Rfm89KcncPDTC6dWmfQxatRbso",
  "key1": "5rdavGkCpztGRHVgLVVLaFZEwi1ndL84p9VPtAUhGVU9v9s5qZPc8QGi3FbeXFps3ko3pAJG5K1vJ3gMwxhwt7zw",
  "key2": "4JAScJ2TjetFXmSeCpRPntav6i43DYWoYrVN8NsfmjnYCFUXEvSuNtKfWe2ED7RkvN8zh3BKGo39DWQsTA13tZLg",
  "key3": "591rroC4nrNX5o1o87CeuTmovonVeeZC9W6JtFToF6ynPwSCq5Pq6rR3zTmVy1kUSUUkHzqSRiAVVGV54Hso2hd2",
  "key4": "2g2VU9SwNBNs8a7EWyTu4kxq3pc1e28NMV6Ji7J2MJwigjqLS8YYUfw5WQ39nnsptwCbQQ81Gp2Lo7WBTDHcXdfN",
  "key5": "4x9QALg72GnGqhcPiFpgkfnMFXmKSj1MWMkVfNo1X67bGpQ9ukTW3g2V1UxAE1AXRcAfUU1dZqqSN1wQvr6MWWAs",
  "key6": "AkN4iBaoX2vBu8s57PSDCZhfpC1NbHHo6CwKRQBy2AaWRyK9528UW3C6rHBCSzwiMKrXGiDgMMbmUZrkJX1J5uD",
  "key7": "5bSCSsTrepJYDpkD3VFFhSHg5FJa5ADVTH65tUQFfjvM4mdxAu2Bt2bjY1o8NDtPaoghHGJuEEgvhkRGZgqh7ate",
  "key8": "5o5c4QgYA7sahc3wDPuoHpabzH7xBbp499a5LEUgMP2SDTLkQnHSftZ6JWnbYdobWX4bhV5eBF5tae3HSFAhSxRN",
  "key9": "47XhzphaviZB7xZ7czvLLUpM98m61jHTSTvzqYHxRNzHhRi4dXDvFoda5jHUvSebQ4jm2SvMNKKLjrj7VLKeBUWA",
  "key10": "5214CcEBCjUyJMSKUD7SC65ZVMo5FMSNSRSVjeYjwy3TDkN63B4v2ic6xhJ4KGQypnevuXk9L9LQraKNakwJumSb",
  "key11": "4J5xEhzSVzCQzTRMM7qKREh6ieGXWjwZP6u9jnsxZoJeHi8bAdkym3zh3Act4EPCkhnQVdNRRUTMD2r1eNXYWXkC",
  "key12": "4rbHrFUfQDhKBiFkBRSuP753oe8bBtmZnrWAM5egrBGi6KHXNTj6k5UuFdAQHav5zqAGQ7hFWJRqLZxy7VYRd1Aa",
  "key13": "ZkKM2vX8vdyMRB1ZkSdDVya9N6LrcZnuu8guest7nm26hLCYZDUphz7UaGTkTxH2Uu68JAh6NhLFfpfRBHYhRmt",
  "key14": "4jrJDS6Mn2XYBYvmWPbWegcECqLWz9irwgBKFCM8f6CYBYF26aKBpyU1NvkKi7Zt7tm97GBSQYQS2BEAFj5azk7o",
  "key15": "2GBf4BcUnzEcvsFGQtSk7aXwXW31pop54fL183cPHoTCCKXuBiV4sGa3TPwsuZ7uqinPxdADdTyAXBaQZqtPbpm3",
  "key16": "kNXMKysttH7ZPxwTRoCkbhcDu962Bu65T7RY6uNxaNDjfY1orEWDGsgP9cfi7XJTQFWzZ5oA9uiBV36kNgCATWb",
  "key17": "R5dKmoaKjeTrBw3kuENprTT9McbR4NdQcMBAyYrqm5kzuuAiVisZML87JgfTWEcoFruUMvRXdj3jB4D5q18jHuz",
  "key18": "4SnvSbrWuhUaNv6uQgLF4D21z2tCXubVyFdu7uvmpiPAj9ePM2jQksSM4j54XnEYJdLhWReBYrbLYGNxGSXbC5FF",
  "key19": "51maWY5zxtcnvSmhVqmFPRGiA9G7VQMWDg4ZcaTuMRSLHhStgSiSYV6Ss6k25Wu5fbiwxime1UNiWMhtU91r4NYP",
  "key20": "3b23MkCJ6NdZw5wPWK99qLzABxM56oNWw3ezRbTUbxRUJdea9hwpRC8aJMZFdGdiF49gyPZVKMTWGdiQeiY7UJBb",
  "key21": "yF7iptUGg6kt9pnxNE11cqmvm7RNyKq6QrP7PWH1yNsUmFRj8xqRfhrX3rcuaJH5B12xvf4iireLAC2nNC9CYgT",
  "key22": "5nB3zssWDCWPor6vnSsVpGSRELZzHEhM7KLEVQRDQAxJ9jBQnscX1pGAUFavfzNJV3L9thTWeqxjDio1mEqjHcsW",
  "key23": "yqiBDu47ExrZaVyVasLS9R1mhzziQL3WUVRCPPv4xg5cBsbGJYB6VR4fShGJLGS78tMNCwAvDmspdA2JhX2huhQ",
  "key24": "3HN5QC6FVKbr3WXsurnqiuvMMzwApL9XBtWjzQEMGf8VAZAVRd47Ct5sdtmCjuymoCYNNWxpf4p9A2w8GJiqZcMX",
  "key25": "3YnD1NpV33uiJUYdnwFjAoSdWT2Yy2qRfKoJ9VKtzMjZGxYq44UGBEWeFMSnazjvWc3ziVifJ6Gpdz3DhzoSbFgh",
  "key26": "4ot7f7PfRHvAdzp77YK5apfVZn5Lf59X7QjGA4utZ8ahoFCdNxJKhA3585weghcLaapKdswU2QUhbacjwdEWaqq4",
  "key27": "2y966zQnz2XVrHmfWZerMoK3CH7saY9628AcNY65bMki1DXT8DFiHw9X8xW4MNJC6KJdyMZ3L3i72QVMsgyh2pLr",
  "key28": "2UhjEMgNRjtVDMnrSSkFUJAWLofpeFvgVWJbisL15zw3phWorxnY83NFVhr451Mny2enAjQEGxHWR8ABogb7kbiq",
  "key29": "3svQ4TQ9T7Vs7KqojqozeeurULyiMwuNEKsK4Z8tJTii6AQMZTq7bhuUGNioZTJiiGxUeTSg8bxgrXG6UxozmtJD",
  "key30": "4AAGTLNW1ekdpZ9f78u4Z1MDFDDH4sYqp9pHvd6yv7WZq7mLdVaCntzen22mFDY4yV6ZwpU2AWxDHR5T5qJWHof2",
  "key31": "5VMpkGnDnXPHXx4bjsRNfstTGM7Rjrmrt3nWGCFDCnfGVfKt4i4FAdGpanFd7qrEYYzQwspWbRDqPzsbqqTJRdun",
  "key32": "3PRz19nnCvb8ozS2c9TmRktNjLUTAp8eTvCZNfmZKhLmVeEAwbAwE3R9jYk2wYCwMXP8Z3X56UXWC6FpdgkTEJo6",
  "key33": "4Yrg8xHRtsg97A6aL9Atkobd2kh9r75XikbEPWF6KvxmNCNg3W1o7AQZiJsTxh5o6GLg744JSnGdpZCyDt4rvJLA",
  "key34": "33qGWBiQmGVQZ658jK4w6oBpBQWQH8a9sfJycqvMeVf284XHnsMREVwqjmoNSBrhqCao9qUhncSv3rVdRxdi4xf4",
  "key35": "4sym6NWZb6BBFar2fvEnNRgjNmoQYuEczGK9sZLiH2dVa2TdjQ3YirPrhLnxxYubFW6L7butbusb7QxTwngm13DV"
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
