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
    "4LpGXs4LvM4sCUcZFVnUKTvG3ms4tVV47RJxzxQA1UezEQbQVT2JBCeCZ5Hzo3kwNANPQfDpzYHhvxthZtyDKMPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hm3fFjvwA5ZQte4BB9bRbef16ue3oDG3JLmysUW5nfvsfmZZtXuQH55mGoyQowZ3nYwMLGr72AifDwKyLNEiEyj",
  "key1": "jQejoXrsHVS9coxVbsDisgmcJFKrXHYnrUgLk63GVBg9GefPKY44wu2s9gKPyMpoHqgLCy9WHubGscog9FEPiHh",
  "key2": "PArWzAdo5wrQt1jGEAj9s6fRNxw8dKUd8UUHT21G9S5vvuXeCKCLHqReauiweNPRiZk5zXHcgV77auydMTQAtcv",
  "key3": "2kDq3ScN697PMPfdvBxMk76svBfyk9Z42rAgSHWDohx8ye6i4uAuYwSmYxRg6X5pbhiqPcNPLdhL5TogetCSyUbc",
  "key4": "Nervh1MHC8EawPAXH6zc9moGahS5Cit77pWfinTVc8sSbKCKnzcG8g8AYc6P5yrpPb8MW3hWMkdWn9BVawpGUfn",
  "key5": "3byVjqVxDEPvjnccLtcJ6WVp6KnR3t5iFHQorBQrGVd5NoNEQHgtfbWx5ypyU2Qid9WKyAySSd3GRcgZNqrQBM8u",
  "key6": "5dewcjRKYEbd3ifd7yR8jd9t3hSU5rbHiYiGUiWhAFbqD8q3ThB8aXwEzgXRdBsgYgjmgro5ozTcaSyWUb3jDJNK",
  "key7": "taGUw5UCzR7TVjqaKn78ZJ9WCFJNmJPpaBTr4WSH7ygqEQMPo3iJ3zj57yxaDNsiPN9jXLr5aQJeTGWiKQHqWmg",
  "key8": "5rVY8SvwwjeD4GZT2jpRRdLQvHvV2v9HhchqLEQJnQ9oUziSz11a13oPdEuYE3VefNo7FCNUA6qA7Z5HVFiTzq2Y",
  "key9": "5DmtWPgFgaeK6k7VLfV8yjPwNs2CqNz9rqQSfVW2ymJcXh9djmeoP8Zc53iHLrzRpDzAcpcGBUie7EY5LedVAyin",
  "key10": "mFimzBVTws46WHiTxWg5iHSa6LMBmnaBJYooAbcL44sAGeXz1pR6wTf4WY8B3LShZS3bK7QywCnxiWZDTPgxkm5",
  "key11": "5uYHDxpWUiuwe5sb9bxwJbZesEiYCneEPJqJsHZxqZAupkz4bw9tH1rG7jNJmLU24R8uJvdcbAvjXjnHtygkogLg",
  "key12": "5asCYsG3ULcn6TCxSjZNtPeqk1vF51pb5mtrb7sM5VxDQhdJmgo5cAEhNJqwfUDQgU5qxPSdu8gyjw5E5THPDBWi",
  "key13": "38AcKABUGkaafVEgegMhhNgrGFY5ZEhaajzCEoaetKcpQyxsbN8KmtRHxqc2HjuNLd7QB1rnqUbd9GXBTkQqGe1m",
  "key14": "4C3PbpHZTunybvGAVmeQynoE88ajQ9YeEmveXPbLuymujhzRzYSjmCDMYgqrDTAhc486Sra4Ty4qv9b45BRJ27oT",
  "key15": "2PBgeFNaS2m1nF4qVGkm7VMKiUQRpaL9ipCE8rCSAdZ1dS8p3yiAoXmsKZGDgPPGHonaHShuaAaR2CyFcjvjta8d",
  "key16": "5yiKNbYvoLayBigAfktUkCEbD9gqK5D2VRK3ENfVD4BmZm7S9Ys77p4Hy42hjVHTZbHprXSyoUnu2ugSD8FfeZut",
  "key17": "5GkDMvJ8C7AVUjmrG2HJ6GV9Gn475qpYT1h55So3zkC8RnC4uaumiubWzq5EWKS4PZvVpHgHSbm7Lvsqxv1ynJ5t",
  "key18": "5k6YCdejuvZ9UkLehzoxpMpdFRzb5Wu8kkUCUzsyffCtczPDvwCgHS7P631HjRsqnsfgPaUoXUGdq8b3SRma9pt6",
  "key19": "5YEX83h4jPgjGYvB4U1G1omjUisjgw2YvW5ctDjCY2ZY1nKFZkaQZYGhHgMFasL8f9NLMfNP9Bu2b5Mouetu8c5Z",
  "key20": "4H97rEQ2792AVNsEthgPCaAsZEJCQVWtc4fmLThcuvJbLZi1GEtufCeQ7374PcGhrbfhMsE9jMWnPKKqpfJMt7Ae",
  "key21": "2FGowMFh4j5Be6CgSsPX6DEe9HWoiBsz2mgL3Ucm4T2cAQbzMLMpuw4BVpdmiJg7WgiF9tLiGvLxjyXV2i3m2kB7",
  "key22": "emGXBEfgZqarUNnuq2xbkcsWtQs3ZoWHtPsckSNRWMPpYxqE5JggAvsJs9SiY1jkaRmRQRmjW6NUiHE5uZybpme",
  "key23": "3SbRSn3TpcpXp6Y2Ww32DBjqZw2S9gzkDnPYtQ9Vv9J42Xu4M1NQyAXt79Va1JwqAhvWv7xcV5bkngAFdHUde1dd",
  "key24": "ZPdFcP2z5EAjcfpwnDqAswYwN2FAaRSMUpiFQPhurSHDgAHNyCWPzEQXue9dEZM4g3oQiw5WAc48Y9foPY3fQJh",
  "key25": "3FWjiUucdgJDfY2KScdgZ3Yp2aRFd8Rh2VtLJfFVd7pcCfsDcFcQoHKMLf2KonhyRQDUQRSNwUh8PoS9xkLm3pmY",
  "key26": "Vvvgf2voUHRWWFGKfebS59tZU1S5J6muciAmHrDhJ9hazJPZEGt7Zf16FdWmKgXkvnQ7hWZoDYnwF1R5REKjiNQ"
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
