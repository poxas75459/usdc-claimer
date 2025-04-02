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
    "4axaJa8rRxoPUBFde1YPmnU3qx6MCX1giRd2YgqxnyG6EitQxfbeUcEu6P8TCRLvYDnaboEUpUPA7g1pUG7gahnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MQ2uH6e7pggPBJts5qXqqD29iwgFqXAMaN8XiEuTPgAS5XxVqgCiaQXoFwDp8UFDkr1C6XEPaGyqWz8VtbHig7V",
  "key1": "2aszBVDivgttm1y8LJikt3AeuPP29rj92tbvXVjbzeFvrds7Wn2TPrgJ6j3WQJXKDuH9j5jGSBRcumW84AVig4yc",
  "key2": "2YVUtEkvKagAmB4JQF8V98d2mCXkbWjWS5yBBChTKMJ319PYUq2oWSQVHc3jbhNkY4vu6o3ZfoszjmZNoYwPTDbh",
  "key3": "dnRqWBeuj1HbiaLoVqWBuu19FYeZgmnfpKcfgC9sEaMPNLNVXowERXm6nEHnPEXeGLCrKzdAfyYxtiuSN9WqzyE",
  "key4": "2igYtmcj98LoT1tkgELYcKtQn1wiwa5zMbdq9gUpWSjujDxG48jeGEqSTw2ammdwwieEanQWaDQAK9zLgWytAE4Y",
  "key5": "2zMSXt9WTft4iJyPfjFrh6QRBRjky57RB8ixiaTBB5hSoqmt4TbCjUHE3nxJR75HgZkW67nqpGYxtA9f7zHfKYzw",
  "key6": "2fU3wsPekMFQsxgLm6C9hnN2RsMJRPgsD98GtprhcVgz38X696xo8mpgm954waAnrSqFn4HyksNGk5U6FggNP4ed",
  "key7": "cGzKDa9czpGJVuRSPRpbSL98xNa7T2S6x9fcJnDjW9eHy39tLZQm45i1rf2wZUztYLSXQTjYNw5URpetUacugHd",
  "key8": "5ECpKWvXvRSrxKaeW2Ub9KYCMNj3jE4z5fXmpefBoSdAMXMhqkfmnEoacA1L8E6XUewiw4rasN3uFLQhX81ZY3b3",
  "key9": "Syx5r2X3YF16RWPs6wY6EpLD7oswfFtWsahzZDGZkLZgzAcLWhxSjUAkuQ4dP45ctX13ah4AqbHciwt8jeLnmLC",
  "key10": "2YaWx9AEehoWjNQKF39PMv525tGM2sBnaS6p6rSz9fCNUq5yvMJzY2s2bHkjNYFPg41GsjZ7Fq5nd6ecRmKRX9AQ",
  "key11": "2P6zzZFuUcPamcRszJezUKzTaDEdZJ8oEoqesKS8qfZDKD6R63VrC1xJ7baapwCKKMaSHJoEC8te9DhNv7yZbzUy",
  "key12": "5xi7jzCESTAs7hYpHPCrejNVz7pbR1M7T8srJGHdNv5bWGFFk6yLgGbawC63sJtT3ywMWijTiFv6KGkJtMpaGBdM",
  "key13": "sTBfPXVTGrKeNqnStjNcPHrxNu5ShyFS6LQZqLu3SZ1tgToYZAd7VqrCAGEpwGeq5rRDQUNFomq8FpVba5cPtch",
  "key14": "pLjV8VCAEzXiWWwhfi7r64SjGuv7gJdKWr8GyMARNdBmnWxGUipGqYEaWxST7c9GsRRGYkuzuFfGnmnH9EKE49K",
  "key15": "5VJ6taiQgdNfcQ6eMVhyERYkgvZ9oyfNa1SRvcQqPoZH4Ka1fgZ3eQQhQuvK3s6hxntg1ye2ZU9V9kSwysWVRZqL",
  "key16": "2PG7Nju7zGR7CzsbktYjLGVDhw4dxnTFjr1NPAGbtMwY6F7egLFwA3eAuVis9xk1DVPPvRtLYNHKXrAnMrj2NoGg",
  "key17": "3PCoCWiEb211qxwLBBFJLeJde2kZJVuYWKSh8XuSqjGGaHPtDKfeWMAuFx33uzJLaMyydeMRPbtHp97fQELWERyJ",
  "key18": "2GxUTCNybhCCzz3fyAFMDgSuVppnkmxmiXTZo3fq2XioL1iyQixLD8YUKcqrX4iHiRDAJ6YYX4wSeFdoeRex1vY",
  "key19": "4By2Ho5ArWAfF1nRMfKdGFQRZBkN6bwEz8sHykQGKybg2HjC3AHLi9xhvf4PqdJdZ18SqmXzg1NomBxZcAKwh8i5",
  "key20": "2RJ8BAYnuaToasyBB9JUnS1y5WVNNr2V4PudV8LXcMikq27sSreU31TJkFK7HW5nrveYDZaH3kTjdUQ2EiNqwvrM",
  "key21": "5WtEriihzNpBGPGNXVbbMuHbC4SCQRhUwxrghE2EiGMaVTwva2vTcxgzudUptfzaSum6mT4x29q8jNhMpJaQUNmx",
  "key22": "3frnRrxjQLJJAxZ99G2kTRc2dycxJ9wB9rCVMWZFxt4MophECPXZf7efkkZu2KmyvhayvBG7VCfktYiH7YawgTby",
  "key23": "F3kFDHQnDGtxqzQh16qwb8ou99tx77dvtqLCRNu7aRk7VVS1i4bnq3Nv3xcsYZanUiKYxm4MzqhpeaXLsYtYUa6",
  "key24": "5pRJsMUtW3gmH13hUS2GmjXXXsZD3tzs5t46RFtfMSr9AX7xPNVtorgwzURkdXVjJB2fnBFSzpT7bGFk9cLpwE9E",
  "key25": "5ggR8vndBNcAM7WkDQ5HpYfFFvmzYrCdjAeYdTn7uXurZx5R1KnyqvAckgvG6Jvb5s31TVDTnNL463UEFLSWyoWR",
  "key26": "2FpmwEJUDdpCJC6DD9WqLGG3p17TKm8NBDDEHbn1tc9PJ4wikhaZJZCPDwzJpCZRuVJuNW4NbKsTWGdwFf8hbiUp",
  "key27": "RnoxHsJXptbswH73dQvSoapgNpd8WHURx1K4G5cFPxZh5A2upQGmrjS2rTUbADQ22LCUAH3W9PPnPVg2CfAtZby",
  "key28": "3s1zfz67VScNVopWm2JD55oHRxCt8mx4aVPoe9hQmAmKMmQ31aMySfUJkmCu3P8rhszLAkh1xGzeKLR3Sy5tuV4x",
  "key29": "2nWrsajroGwVsau3Aju4oqCMSvSPTEwa1fyNFhDGYz5qUyu1fGwz1P5ofLdfxTRABrzmvythYMUUcZi9Ugs8b7bz",
  "key30": "64XVTAnv6ZGEynmyFVbWCtfbBbuZwsJK6aDXV28FjpJLCfAjwk42fCeSRwhTuN2sgWxXjZGznE3k6KLUa8UR27hk",
  "key31": "4t8kMUMfMxYb4jxZcMbVwbkm8g8a57PUAnziLc5qFbrT8fm6WNEggdry2eqgR82MVEoCeB6QL41JcMZC4PrE3ERV",
  "key32": "4xD5Ps4eXSbRQ1or6Stg4KgxcPMJiP8rNPhNsqUuyGvJNnKvr9NDwmeQEw9xsDU8BUzdm33mEBHM87ogrYU4zySb",
  "key33": "wuZ7VT2VdmYDY8vJjS1YfBeJz6wXJq4UobLcykHjPF9o6SLLBYuPc3svdCjHqkTnDPZ2Gd6Bdjjw3ByjVJLny8f",
  "key34": "4au4Zc5VusX1q1eWtqrKW4wRKWA2yvHNv97eqT5Y8vVv5WYsQCZ2dXSA58fr6HrMyKfmdxmNxjifgBxgo29WNuGg",
  "key35": "55mfH2QV5gjcFHqhbQVwGYFpyMnGE7cBDti6o2PQ3HzhYXZ1A7vBZcLG6tWFCfrgaLKqGb5ijmHQQT1inWwtqBMK",
  "key36": "4NUWNvY2N86g9meNrDY6prRtmeZ6yctrbwWVChk8U9xXFMBDsjn6yEbRKVpc9j85Dog1W5br9rtU2dDMAZLuZJEi",
  "key37": "62yZcSKbFBXWMnhxMDp8tVbWp9ruxyDgar9yrCDuXL6dRpqD1hJ4egjsPdmkyAfPgFC5seTqiLsK2V7RQ3qJmmjC",
  "key38": "3Uv3GRaWLiHXiY3HJ25ShFRCsuiTqgcMVMjwEfpE8ycvF3C5dZaN23drtTkggcYTqGckBqNuS1g5YgC2gss6tGd6",
  "key39": "5j1tpmNyyZ6R9trxZfcAUthXG5CsQ1YpFrLniQghYwhwNPWn1RD2w2vmaAMCB3q4cYQMAzmFjmZDXwDr6UJ6aMRQ"
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
