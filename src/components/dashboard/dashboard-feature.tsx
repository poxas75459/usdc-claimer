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
    "5Fu8Jvttumn14sRSwp83BWY1tDf9WgxnNJjc9uZYYKRUdTQbfVce2GfCQgpiHvSfSvFYhJQpP1yaumnyWcD73KMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVr6WasKyfqdZzR6j2X6aZBYyjCRKfcLybqGq8GWhwkmtHwSnFDYUBV9p7qLytDbgqYiqpzG56d9QBjbUCD54ai",
  "key1": "48quWUPK5BJ8qw49uGV9iZF9UVopxFrcbPaEiMzrfkYBRcwy4S87q6uphwxJuGJZRyGyg7MjtdLEdb4KJPe4DUvu",
  "key2": "3gtTGbSbHVpabMchajrM9ofbRT1d7t5NmG3U5CsabP7xLu7gwajNLY4JewByFvte9sdNbZBdYhnxS825jRvhJuBv",
  "key3": "2hdECSm3o2sy6yiv2mxxTBUQeGNw3neLKKo8MeeV1oeNmK184wt8YvNvpmr5C434gurchNxptRETL6jqZphr3vtS",
  "key4": "28cQ4pToppwwvmn5nsiXKqkBSdw6Njw3B6Sh5nRkR4RJsUVrnV1odj7aTbik1GQBgXyjk7aFarNXNqewEBx3hogd",
  "key5": "3PYd4K3Erhfk3pPF3Ys6QfRTbsDXryed5iBXjATZganXsHx4HC8tp4sJst9xTb3NiDZU3Y2qb17JW7E9wEHNUGR2",
  "key6": "4tqTApk1m85DECNDcoj11NeLzs27yM5UFUVaEUvTHChFNHDFe6R8WdKjpe1otmumk54a8Fn8r99uMELGnNCFPYxh",
  "key7": "2HPsKMDM4bwxPuVu5M3W817nssE4MebWmiFYrLB3g4Cs6GLU7VQ16u8Meq5DH3QWWjRku1CvpK1iWiuMXbozVt7P",
  "key8": "LyHuZXPLdQRRFHtUCMDWBBowoKHr38q8ZJ8i6AhdfyadQCAwctE6TM2MJoG5P3H3PyAGG56ZhP3kYuN2PejretA",
  "key9": "5cpgncj82FenEmjZ1P3Qx76pKeaDMbUfYumHTRvPvXgMmbzsTLkXmphsfM4UBAWUzs7apw9JvX4CGH2UHm1rcvpd",
  "key10": "2qsYo5T5YcTtKGLgvE6kcciAgvaszE1Yjj12JL9hnKmFevvgUcvwWvYzfxspF8WHb97yhxqiWBXBNKyP2tmRWxrw",
  "key11": "4st7UVE1YbZa7otgTtyKTUsnw6xLcKPhCRu9osvAmy5NHv5wcrTzuS4G4NcDZ6Yuzn6hx3X2UXwMMFNypLtwRVZc",
  "key12": "67DQhVXZRHF84YDoJ3TjgbSr9tNUqEGQopmqZaYVQw29fWoMYZ6yKpt2Q3AqV6og9i7J4BFHkysD4JqTPHA7zzXa",
  "key13": "3pb5QF8m8UVmU8fDcyxnHFwygQAicHSw1eQh8PmdnY9HVZUxbKrykPB52A4ZKfC4EH4UFBxQhbpRw6LD4Rc6zv1u",
  "key14": "4QNSjSdgBPPthMD9aGifyynW9j3GPs4EbTAqkBwKSKN7izjR4YFESDKEqw3pVdEe5XPpmnPxTzTSj64dkktemkQQ",
  "key15": "4Dd1oQhEMeZTWuhfwVoLWQ3mTqnak6w7vFazZdCjLwJr1YcjXNChRtsrgzDkzsLzKFVQVRe8qLfbnx8QZmNMvFqM",
  "key16": "4DSQvcXtVB7GJyjm7nT1NY4hQa5XD1tYj8BvgaFDmwJ1qViSB14P6fKxrJGghi6hjaLs8SCFQ2mUqvUsZsLWUmMQ",
  "key17": "4UddX9ZMmVmB6GfhnHGfXDrNQzLuXUVgZvkTCgWsmuzBWWifB4KcgodJ2jqM5bxaWxNdbAm5yXv1gwJFoUBzmAom",
  "key18": "3i2LLzswNR1vJnynwSipJgPRdLhwtYrhgdjrFdEumkJm2M8nzv73YupReUQsTWPSmREKGNZJ4Ut3t7YxK2sQcpwp",
  "key19": "2kECHpLwCHtHY9th1hqifZ1vRPKhbCRv6QSYvFTheGSNvRFknQNYwKqoYtffCe87x5DfG2VyM7ytbP59tiPWEBxF",
  "key20": "QDjfT7n4sqms9MBskT9YiHkfzQvLTnNwYUbnzTMABRAX1CfaUeCS7kcAq6YZqjoY8aA1t7CEZ5WQLqeS2YEtrhz",
  "key21": "meby3uGfdP9TcUPSqzNAx8WDPpFoQEPFaEnEMTuehPK25sMCHodLUMionCL3kDsy5JXHfDRujis1n7x3WnxqU21",
  "key22": "UgCtAEkDjeoAPw8o8QXiT6yxo9DY9MwEQP8ajG8CAqwMjs97vty2XArcdtZJ6HDZqVGZku7ztRRMMm1gh1BEumV",
  "key23": "55NozBMnFbVBZuWugfKszB79Ykgx2te7tRQJRmhFd2rtPknkCzjuorDspgUYnL87Vvb7rV6TAWBL5YHaHs8857oe",
  "key24": "4UwgJYvvxCfM3h2iYSsuZzHf5PnHxRbvvSV4cEFeiP8M7AHLGZXWu6HBzjDz34jFAKKRZoqpbqkmsxG3W3vBmpZu",
  "key25": "24XteeYsU1VeCggrG6YQFq53qfLmDdiAGzWp231pGbiqy4a3QBt3fi5zRLtbNyewxqmcnY4iijfeEFi8i8gXkNUy",
  "key26": "4Hx5gxF1GPKv4EFJdgAHVRQkY7yk1U1m145JEuHc4h2phApDoVt4fPzpvXWuKvcPtUiGvGBfqbUeELvBRXGF84ng",
  "key27": "5XqWbHqKEMvQRQwv9PPVMNizy35ULh1LjAAzFqTQKS4jk9SWS1Ja9QZGX5eEpYtAygbPwA4xd4D3K2B2zshWbGk4",
  "key28": "xkq5xAoY5J9JS1h9HSWV5SjVh6bGztfhkDN7Zz5MS1tFWopvbPSRLMskR6eddqfTcyrKAA7xotNTxns5KP4kES3",
  "key29": "38CM2t9XuVsQyggzzifB47vnTCSfzahCHpEzxyBcmAa6eYua6bJ5VmAHBUDae5nf77jQFsryRkvSCG31kicJVW3f",
  "key30": "NxX4BPGrnRRbEKXad1bCv9ef28xvXfQS8toba6eBiy4WiJ1yr6wFupHKgeagoUAW9Tw7ggnrcGdFvRoHqGxzWk1",
  "key31": "U5gEEwbGdx6CxSuATf4MMaVHbs9z8tFKkK1WZohwgAMh1NV4QTDqwLr7dgPzytFHg3f114VrY9YzidUhFGe4ME3",
  "key32": "o2aeBumYP7YHEC7BXSQunH4yfE2MA3Ehb75Lep5DYgNQzryxvZwJ94EquN4eLhR23pAwrzK9z1Neerq8f6wDoZR",
  "key33": "4ecgdsFYdj7nuxU9wL6xwh2G1zX4qhtmwNarL8k7QQJP3qygRmPytHVXBdebgbiJnFrpbwoK6z9qqBAyszvrBDif",
  "key34": "3oec4npuU376gUrzFsaF7f39rVnoZYns2hMfx2YHEHRSVcMd6YWvs5nqAvokXbSqevaYT9otQgvkQRjcqPbmHW91",
  "key35": "2d1fFZeJ4L4QwMBGiTqY5wnvdEnFuiUSY2AVG61g7Fw7n6GNM26rSdMJyhCa2N9uXtsgXT19KJkj6Y2We3Q1XjwG",
  "key36": "2zVLB6fwWKsf9kJqCqnw8youppiU77HhrCg7Lmwj1k2c4nZQVv43cwLHb4ff8eWpKCJNPhBWeyQixXFzzGfSNNLU",
  "key37": "5twbX5UeHj54A6g5mEFN5SRiNFyy4vK6eK311Hfiasv6BAag1mj3q3CAbBfakg1Y6633AaevtU1W5aHFbLQP1HgT",
  "key38": "3yFqpnRcQSEkUY77ExTo4tdZAvP1crkR8RQ7umDyTi7ZfzTLvM3AmLHqm73kDm7bkPYNdS83vrhY4DDVfKoPtWrx",
  "key39": "3yXo4E6AHetB4qDyd8E7YgYWhCg3ddrbG5H5w29R4QobdTf37rq2pdf9DcVg11ToJAddraAWYYhgt7koGUdcVvEV",
  "key40": "5v3hbUuVT8QUaRYojaDjBmKhtrpXty3zHwLyCtzzCZoh7HLxk5xWXFLahWsrprrksPHsLotX3YF5Rq9ohgKd4FHx",
  "key41": "3nwJdwbiMwdGmNZBWYbMWiAdPLZrCDaizfpfmPx5vgQPCXGRFWwmeTU64qBNHMnZSWf46atpAGemkox7XMdX4bWg",
  "key42": "3oTVZ35NJ38vguoCh82hHF2jhNijwVB8qvcUmegNbVMcyK28Y4bdG5eiDmRugvcjoKLnpy6zJ5mqPfcwD16YFdPc",
  "key43": "5FykntEsjEhnPfubCAPo2d4R5PC4vQ4G3yFyeDP4UCRKjvWgJvPxSsRhH2p4hTB1S4xNhJ7q3VJLS1K4S3beRMiK",
  "key44": "3KR2PWrCuCDdx1D1UW9TLXv9H9aXRdPaw77PPyHRT3wxoGTSNA4oEeaYX3hqT6xHV6T5MBKFjQa1FynxrcPbcNE",
  "key45": "2d4oap26rogX7yb8DLD6HXaKwjN6EdfVqiLmjo7RP2pvhC39QRcYswbB1bJfP7hVijRc5xs8Qms9RcT21YyNKT9w",
  "key46": "3LPvYUyHnkTLqc5xZDfQbVgEm4GVCyQ71CNfKz9zNaq8wVB4B2LRRjTAuSUqGd6wama4cSUWAP7AE6HMeyjmNvTL"
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
