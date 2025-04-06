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
    "2RDi96azRpjmXZRjMThNbWKJoWW1GD3z9FBYmxi538awBx2LAZDdXLU18qsrwFUc7e3JfstoQPvgYT4bvZm3Vccv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nSqKKLjifoC689aGgo65N5ch5mD5HQB3F7YiRaTANBYus2A8w96acm7kDTUKeux2cNhPSRqEWzSvTN9R8Tw9oyi",
  "key1": "4fV6hZ6t3wEsFXGk6E8kk2U3sxpNYHdwF22w1CZxTD4v3Avesxr6mkDid2UmnEe1JXr2wkJhqMHJobjvv85PmuC1",
  "key2": "5x6LhHDfJ4c9n9nos4oreZgZxuhxCkqXqzBbmamV3bDJyedN9aAgGrp6Atz7UC26hRoWFq2eimfWxnQrjQEYgSDQ",
  "key3": "2zn56XCzx8SFpNYT3xkVfRuLThjc9oADBzE6xeDVWCLNhXfbC7QpVZcrgbLhaewZF8jnjh7unazKbGsPmodvaaWM",
  "key4": "64znxeHGkfMoL28fGVWUp5GzLYRbySCdsJZifqe57USFTXeoU8L3FPKhTqB2gAt1DkF9dGysgfB17WKMS7XepuFs",
  "key5": "tXiZt1Y65doqTbHMBNRqJsu7LirjeV1XSeY6jyMykzeT7RkB6F9mCfY7A7QSqQQnWJwkRytFJSN1dqJD6xc8oU3",
  "key6": "3Up1ZypKTZxE74Y6kv2K3nd6C82F1trcQDpb1KhEBFqWcqLToJ2mcz939dUHoQUsUnYFkVeKuJ1nooyrZ621RLAx",
  "key7": "27CH53saDLr39zqHZXdJ7Lbe9Tc1qqmRVpKNBxdKeKYVX82TvvgDhouEcw7ETMcYGWtm3H3LqXL34zM3btxEeAKM",
  "key8": "5Q4GggRRs7TNT2bJPb9aHDP5ETSuEKbswjmdEiH1bBnDPfNQBtjCHJtDXFznwE2SFcMAR9TYV4XYi65HrBTyKyFo",
  "key9": "2D5zK1d2Y14NvU9rToZwRxtaK2UTpn7R16114ToanmAJ3eJ5p7jg7WxpGXAeWycHkAYztUYjZMDXEJ8gHsZ47mqa",
  "key10": "5Kkb4htoHiRydCeqYWBp1FteCkFkNqTf1DuMBSs5d3VxtFVo4J1Ubt4FX3bCQSHxdLF3AgxWrZNwLbgVCn6gdofE",
  "key11": "5UaegdxgjwS2jBduT4yNRt6D3EJxo1TayXQspdz9R7iRP7iD3BfNF8XdCxnniX1hCbeamaT6dFY3DBBJpXPpShY3",
  "key12": "3znDxNkRg5mEBRCXE63sTn7mGxbskqkigZRuFCLQ6bgV3yzDbbLLd4LLJoBnYQbag1B2NhRZsNQekjNzpaQCXGEv",
  "key13": "4K6oprm6ZjPa7Cb7KEXJGMPRywZGVrDX2zEL5RpVcPLwjqWLx2eXanJbM5HBDEwS3v7FtdWTWRrdCdQFAAyi6AVx",
  "key14": "3FupLeNXUEzVPB3k5PvKMYshLZVNKCwDzwaMmBxZ9z39UBQsmeTnpBBYnCBTNvzyas2Art9VQJN5Hshg8DZzwqSh",
  "key15": "3GBacnfHqNWNCX8wMYH7wQ8cCymMkxpMx3bxLCh739NVmX3LZz6VqueN6GtU4RCLZG3i2MgtHPHpC9RTHpaJbWkh",
  "key16": "Sjmbkim46w4xteSkLKoedNppQTcNKTWC1W6T6YVFiJD5zavGJpFHSyBRcYinRbrnvP9cjYsMMDRfT9eLjbKvh4w",
  "key17": "myY9dNwwMbvV5tUVxoxpFeVQerVHbi69YWyjvnjinfAvhGdxyLYi5mDgsXVuWHJxFzSd2UMXvwz6AGea7c5kMxJ",
  "key18": "3KVyZxALtYHFvpvUmHhbVZT7eQwW8q1ZFWu2SPGTkYYMTWGBM1fWPjs21Ca5T5HWAYPpPrLygCpgyXHndqvHfUJJ",
  "key19": "3Zbzk1rQ37L9cjvnjJGSYxBfhnSiJnHsQ8hFKAb4j2jptAL4t83gX7Lpni7d3WzTPLfBvHjg3HB1geKGCfmDKdhS",
  "key20": "5mxDJVsA59TwLEM8asTpW1wF81xHedLbHfq8pjFMFoL3JL4j1prKMZQqJu2ArbX3dkGJpMNwYJYZQN9mkdtxWX5t",
  "key21": "44jX4zqN1c8ZxeJLHrCFYRBX4USMLjzCH6dXBKFBxDdNdF4eP8yhaCQVLhrnd6hFBHrZYkwCM9aYm1BmYKhwMWim",
  "key22": "2Batg7hVKBzvSG4a8Mm1RxDTEozVqgqZngWJZsJXPxQjVPwPkj9iNJzRSnt91uDRLVfwiHRQiMa9DeziUtmmsoco",
  "key23": "Y5WxtQpLh3Ht9VDvGvCxt3EJpw67NWNHUoWtxtDsdA5vofavgVNXziai6jF1MJMwxJF5x1mF4wpoWnSExoznfUA",
  "key24": "5NrHzCErK1ZPyUXP6dPWFTN337t4qvGxYnGJF33BKkxaqaZjmSKqX6rdVhUaD9eS9LgGTuFDMUaeTrS5pizWv7Et",
  "key25": "2dcGXhBsB8ouDWm9KwkdC8LpmZs2maocLdc7V7Yp3rMLVZe2URriWznms9N5Zk98MLqA2X7jqZB881h6HuCfNxw1",
  "key26": "5JZH3xuMQNw9aCP2TuZZBd4pjAvhNZHHDTw4tokms4aNjQi1TsevEmp1K3mMQTv2ZkPK3pp9SKfJwXCX9PdeTQR2",
  "key27": "5nko2ViXfQ7Gfd9pYt6Cyye2SfdWqPrzkRHnDp8AWaRXSYKZZs2npiTwVsJjs3ddPEyKyeqcwdXCkqXrLp8v9QHg",
  "key28": "2Cm7JUQ4bErk8uxv3xge9oYMq54XV9bysqxG5YMN6T5cPKji2BaHx8YTRsquY7PLD7zoM5JyN9gxukqsi5A5HWnk",
  "key29": "QuSiEiY9AbSL8XZ445ULzYqvdghHGFxDeCe6UjxQCYK6Xg4N8iTU29wdDNMJ2NaVjzuExihcK8kLYFhU19Srr3s",
  "key30": "mxX8BNJxf1bAZ78sRzA4Pp8r8e9FjKsEqEwXkr1QzfcsSzDwLQcELF1nh2Qdb9b8fvE2JGHKxJ8cw5FaJvyTtEg",
  "key31": "3nPsRGxSrEtFLEWDbGykiPbiZSmDbebZ3oouozxubttnyDakN6mTqiMFnQMcfyfVuMCN7sFtp6ndJkwmgicp1BUq",
  "key32": "3UedvqnjTpHAm2jdUdThZbd8HyoZp8QzWz8pDpdExuMJsurqU4smZ768YxgYrdXaw3S8iZPgHRe79XJ26GYWiiqn",
  "key33": "gSKELU2JjABkaAs9oGwYqryDHegLgidx9YC2qronpkMjvKDYCxPV8xwuZ3d8JC7SkduSwYbjBYWoqCPWMrV8Dky",
  "key34": "5EEomAJjo9pi68SEUM4HN55ej34CEQgPC6EEKQwPp4zJLjeLdijyGU8vpACM78rPYMrUrQ67pY27mCDj3FiKq19b",
  "key35": "ofNhrX1BvSz6KdjXgrcHKtLPjydt3h6xCzFkXb3PosymKkmuSR6KuBPuK2wHNWoCCB7LyKkiYCDnwRv5EnGaSJ1",
  "key36": "Xom67zGSskJ2zkUWBRdQt1rb2cCbXT3rGsvPvYchkkYZvzxcdA2Zp2YJvtVzMqmvJk8fKTJBxnkRpBdR38mHEEm",
  "key37": "gs8btY4y1gUKApePs8PTWF3cxG2BGFqS3WgrgRMUbrtyLTCc1NKshZaKkheGqKF3yoXoy6aiorpuBRS2btzFvL3",
  "key38": "4ptv1Yj5ECqia31Kh8FcSM5AKZ9toFPX5kQG33dpRPSTpHQRwQQ4r2AFDZCtZU9B7snt2pW4Q6dQfkwSQCMdJQa5",
  "key39": "4kkmQy5Cani5Rx6TyA3nCRgYcBsQrY9Q7XZP8pEvFm7E8tAEJPsHZuHSwpUUt2RhFC4WoxQi4AxV8TvRkrCz1bQH",
  "key40": "3KpV6LXKKK1bBxL2bai4yGuTx51WW9cKFe1eHgKRaN543yzDCGeVSMjcAUApYE6GiSRWkRmvmFn5gqYFQcCWZ9Ng",
  "key41": "3WdQtLCcJH92zwoGoWzoTuqoTMk6EGxvyqdURs4HwaXu9Xjqy4s46ZpbZ1LPnaFkANva3q8mhNX8BchmYHLbC5VR"
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
