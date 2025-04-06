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
    "5b3ohm4kiTngxYTjmgKDLer2MPyT2x3XYztYRgC6hAGmDxCsh2DvBqecNwEyEudAtVamLos3V4i1rtByXueHT9oe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XXEke8h4VTza9Hkh8ewdQC89YYeA5WuPTUGq6PGvhktodLVAU9iqo2X3v9ymgfAGGKee824hx53dk4GZMzkZBHv",
  "key1": "3ieqSY3TMjaZUxYGzDt5ijyXXrr715A3wonHbRnURkZvTw4cwwW8nDWpxxoJSwwtnUk1TsTev5UVyAXrqcqvz3Si",
  "key2": "42QXjrrUPjSLNNeL7Twry8CPgr2xFhZ6vM9MHmPnBZcuYGuSamwT4DSDTFw9t3jSR7rr3ZzUbmzz7wEsFp2kuqup",
  "key3": "2wg19S9YfuaYZ9GUVJ5Yza63q9MziW43XYU5iwzL3MQ4bZ3vekjwpuY5iCGBFMhk6f5BieS4pcBm7LFDSi8BfoB3",
  "key4": "2KvP7uZ7XFpdjuwMEcwXZpK1DDH1cjLkbQsfWyPUkh4oPTfU59L8G6DTCuLiPKBFLto27BS3u1RmRA9jckoKtCXC",
  "key5": "4mMKbD36yGKS62EMHnjRuvvazdxFuKozqeoW5f5VzQcofzv5w8mTqy17PVsottZ9Rhw4onYc3EzqfegjtciTjTd2",
  "key6": "E4JmGYYBjznn2MR5PnCyRr5PWCFUk4At4JgULVuHYSuB9oKjfNLdwrkuVUoaiszADGKUN5NAWmpmVKF1Hv5Cc35",
  "key7": "5aGdw6GgucUbCCuZbkt5RNDfGqye4KdEzhDkbmuizL3LNJXDpVFWTz3wApk11ojbUkkzxEVpb2j8NkctuEmzLt3v",
  "key8": "473koF7zqv2ceLP5BYDQbb6RQPJ6UihZUEnXM86czq84dJFasr91DwKijuJKJBBPAVWkyqyQyTPpdDMqE4qLQdJd",
  "key9": "2nBxHokmv3ZjYDHj6wCyfGtDpcvgQwzc9KvpVjP4RyZBFpEPCkH7crnxhweyirkTa7mST7DvJoNB5b5W8zNpkscn",
  "key10": "ZmK8yAEaQVnYgo5Joo1dHeVh1dWMvsCbG37wXPVtHj78HU2xt9wY6uCM389ypNmqiAVFynE65c6bbC3UBGBNBNv",
  "key11": "4XHUcYUw1SA5ES2PMfj1nDWW5BcXPMkianksACnztzdbQtpwH5b6zy7RowmCXzz3sxYaEAGXgghP8rTDjFNYEvRA",
  "key12": "4i2xaM7H1x6ayrpzGXJvRHuHtL9CDEDHBc6gvPNuAeaDY6xDbg8pZFNAjmtJyjRkXAk6AQYjYnp7TXuUahkZNrB5",
  "key13": "3jQsCdBeEiFwsw72rFJUZJyuC15AKNmP6r2ahxRVs1wQi71nmSaQWM7hC2pDMrtW6KxXpzZtZ9dhCAUkUfXnrUzU",
  "key14": "3z7DUTyu4hFmatNTojxmQkhkR1Xz1SbxRtYB8fMQwb51S34h57iincNAZAJhTnNrzoFtZ8VvuzDFJV1XLNAQPdSw",
  "key15": "3uGcwksLqCuXeGYEbD32JTZHZ2mqpB6gCWGnLD1cG9jGeumaXEbGvvzDrFKxnKumcV2ngytyZpVqGK2bRs13k7or",
  "key16": "5PmHg3miafkxJj4UPKE8ztKTYWCjUVNCkFc1stTJZ7ex7iSDkQk54DFwV55LPiqhGnSv9dDTyo4yRz2t335UdaoC",
  "key17": "3XV2vy5dJ48Jui8Antanzx15yXLPMYK55EbeQdKWmS2y94xP315HPSRoniEMhFHDFHuD5GDK361i4jXVsBQE7A83",
  "key18": "5hh1xhZB8mmcdjZ6aMUMTT9qxVroyfRXLBocXL3G6u8q7STBwv2Zvt3GYcQYKhZVDLZ8MRqZfmwEtYLjPhYiNcaX",
  "key19": "59QzvS1roFNRr6LboKf9dEmTTGxANyFH4FfKE1PkY1ERPKRLFRyQE4LsDkbuSrgeHpEsg1JnAsMSefNeBeL99SGz",
  "key20": "5JfcnchwxmBmyWHPC3ztWc8Ub8AkARe5kXHbypBbUT8MXrFEYBEtRrtnxfZH8wc9jQmWSmstoh6Xne8WnRm5csBB",
  "key21": "493A34cJdfbdUDs6i3YhRgp3rn4qrQn8fk5Pv6GeFAkEHZr4a2aNYDiTvQmXBRXCkWyTGDCTWWcWhr3vmHcYrtoE",
  "key22": "4EHsiGS9vZNnGP7keqPF6iKgkQG9fKoPsNSbwgHHSMadYw9irwf4y2vgREpebwtJUCNge2V1kwQUzdagtDPugmvc",
  "key23": "3q66ixegfkgdworeFh3N2cjTFfidBXSqFFxBKF3kDMrijCkpNVg4Z5H2QJX2MzE1bcTyGGKRrXSfcWUGEHmyCg59",
  "key24": "5k39iKKzT7ALctrEppwup8MyKyHHzTTSdMQGZB4hBSU6xtULtSNtmqCU3fKzPncnivaevHvxZaM5KGSwmLHh4QbT",
  "key25": "4hpTcgsrn3aH1bHqzNrcLQDWGbLqWKRET2hN5cnzvkwW8YYRzpnRCmLUejB9kwrPKiHKPCy8AsbkBSvuj1B5RjkJ",
  "key26": "3GDZm7AaV4zUMS2qycSgYTYh9JHFLFBzd4pThNF1dqJfqWPXarh1C67tjJNpdGJtdKSGNp12DJ2dhj8ecwyvCYy3",
  "key27": "29Ws1b4GuRTrQMTjCkJsknL3kY7eQmsRtzZWxA9JaCNzXFobxcoFK85uhGWsnpgGFfEbLZL5uAbvXDR1JnKxCspR",
  "key28": "3F3o43fvTbj8MARRoiBkUj1iMSGk5kN2q4DzZomTxdXMhPuuG86crEzUCqXhDJ9Cg2gwMTeuiDJbPVFg5MvufmA8",
  "key29": "4ZMGaF43ovbFdu5Fv5cL4DPh8ZvQDHiMv6Ki1vRFkBsMZki2WcaQgtVXf2DY9Cxdoy3nRwPnGitjzEJzHYmZG4HV",
  "key30": "2UAu4AqGzuY3szBmzvUURwiPwV4iYCfX65f8WkankrpFsFGi2QSs89xpvGbwwrgVNXD27pcJ7ZsocQHovvAJ8KGW"
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
