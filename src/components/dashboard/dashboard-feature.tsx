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
    "4pEtVxv14rELkLBbyY5xUh3hJsxKxYryfuxcLw4a2CcHShCBCxV2DcK8w2RLyBERdbfW87zUUGwCmd73C62tR5am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GgxtuwVb8pLPYWuR2rFpmCRiEBVve5z5NxCmPMGfYDHArrwrXs656M6RMXWmaFnuc2vsroRB3EhE1MWWgt5dY6R",
  "key1": "65NCkFcz445e7ghmxu1QpqrkW4HhyCfQwuoQdBBcikaPnVeH7CrncCtx65aYrYjzTcXe3cjd1XoQJKQTVVbnX2Lf",
  "key2": "5Eia5PLrBspXwxofCxyNpz1gJpSGAGcmA7gBn8FWqdBZeC5GPTDZJvzbgG4f27LRwLAVHDnaAjvHsjbg16btEVsf",
  "key3": "o3uqR5pDogs4B7z5kRJ3vEXC6Dpp2k9o6PX8Q1k1pEKoTJhc4xNAJdbkZnLxE4wJQSgFBaHvQqUgPKCmWYpuuUs",
  "key4": "4qZzGYSUkJAcVTWEPWPhwMBYAJsM1uNEgxe3m7HKmr8expJ6ScMxjJ6U6761AqWJQsXKyeJZiwEfHpFwzgqieN8b",
  "key5": "3xA7vtkBZPRR581WkjoQZeatPZaKasASkT4dfqnPkYrpz8agZSaxupmjriPbAzoayyNZ8VsCTpKyya4eGYLSFkVx",
  "key6": "2T3eAm45nMS6s9ZNS3SnDFyEku7xTX8vsbsp16m1qL682YsX85FbQKt3BVjsoHzUtmhiVN5GEVdMnRC36KMXyGaQ",
  "key7": "5gM1sePNMtg9xTVpBBjUZN6M3nyx1vr17Vp2697V8Vi7LK3P9MMbpQHMB2J4hKRqd9RjkP3iUeh6JxEbQXCkrWaX",
  "key8": "3fYmtQfFDr4CqfQtfrxy2rcGt5WVr1Z4a1zaf3WSdCAhYvNamTFaqm26HGBCQoWcpv2Xnpfa3XzZbKChreL7C1qe",
  "key9": "4c9kWhyN4uyAFnbcbHSTahZFUi7JJCnestSMDrJMFMUd71LF397rPqfHuvM4H4Yfa9GHoSPZyY7vzy5yt78qhJf3",
  "key10": "5PaCNfLTbMEvoytnrYGE7PCynihStVzyKbrBjPMN3a1rxwCm82mTqosvicZ2vzWTXhLrFbh9fBAo5rr4CKJaVK5c",
  "key11": "22burjGbpnuZ7tYX7pBCSHvpb2WLLWYVGcea8U1zKnKEFvMudhb4fLx7RxkKtP5LRHZATCM8tGfWemLUVtpfTxuG",
  "key12": "5vv7npPhaTeP4EfBrJKymdBtoLRgz19wW3jVq9arvB8oqZoBCuCNy6B5ybAtfWr8nwPnAkufNcHeT3RDXf7oGhsw",
  "key13": "3UtsDeunBbtKvakcPyFaWS94a5K9EeRLzxe96b4LpTXkao2Pw23gsgTn8EMTXCgMT5xHSkmma8YExXqpG6DxuRPd",
  "key14": "4Q3YLxUoJpwmkBtK8miAhViMn3TcGtzfGGPAdD4sEv6QpA1pZB9HMdZXZc1pdKvhF3c9erKcQraRw3SdKNa5hcPK",
  "key15": "HFQpnvJSvs1NXkhgYvcw4oHJozTyX5cFGWTUBoBdEajoFfheQrBCqr3KoWPBUjbkBhjeRmBqVrReaVHjnMUu8Vm",
  "key16": "2znXY4bVJn1Y5qaef4uCsM76vCPymWs9u8JGkNdzXBemks45W9M54TY2HEWpei5E2VjveL1wP5US8t4sCcam4ZYE",
  "key17": "3o2jp8g8VmmVR98DPbx8JHurEUa5nEjUHYeG2b5GPxR7bBsYZGPkjKtQVfqkYet73HaCVZyzu6MZTKfUWdFQ16MQ",
  "key18": "4RzQN7ndf1rnQ6mCi4Rq9Sk6rsUKFSeryQ7nQLFZVoErpW2iLmX1fKswdDZcRrP9vzteTvMKpKS2ZUdBi34dMstv",
  "key19": "2i6ocZxDXxUfD3JGxvdpyYRpz7hdRMFkecYxjxfjX31EhXCVtcmRoW1a2iYW5VwjspyLvFjpJd32RW8jAAw6EV74",
  "key20": "skT7Rem2o7g5f3TYsjeVBPo8RpUaRgZ645YZbCTA25uAWKvwXzZ3nAz6ExrLBRCw5oDaHzUbQ1JhcwBHAv9znPb",
  "key21": "2rhi1riTWM2M7aViPKLkhgSuGzE85tSUcoRMgRtyfzmJypT1oDGECAJcSj9F4arKRJeYDjwjuV7iNytbqfNhLKYc",
  "key22": "3NmR7rxF7ahVmego68S5meo1UEwyBuoRiF4qSHmo2rLWcGT2pKYHkTqZeCj7V4K7xn2Tq2VEhJMeQdqTAJ8YqvyN",
  "key23": "THTme6sa3mgx66N3oL6iK2A5FwGtnQqisj3K7huS38iSEJtk4cv1EwZNQ1t8xayJk53bwftugXG61WMGWk9GXLn",
  "key24": "43fThf8s2aCQUmM27LUQujYxoEo2UgVPokyD87EzEurnVzDTYZpNRG4r9tfVuuyjJ2ytVcPfZ69eF6g8DpmHC1Ag",
  "key25": "3GZ5dafas8jBwCkRQahguvngCP26RN98Zhs1aNBnWTi3LXgDnynjHAXjYwYMVnS4ZznitVauQhQfvxakxoBJPuJp",
  "key26": "4iPmtABAXdLcsDWayPVh353V2sn2nJt3R11eEajBSCLmh2uAPaDg3iWk5uLWayVstWyZPTnRzJ1gnoc8MmDQjA1V",
  "key27": "5fBeLof9JP2RWxKYRudRR1hJFi5hhNTAnhTNLeawGfVHdXpXZpFQHECuu7EooW1TCxkYEGMSLusE2MWirL7G7utS",
  "key28": "54GtjCEDNycpZjtU2W9XksCFa93NTkbyN6sEXhMeDdBmR2qb2cW3HfovvjqhvpqajfjMcVHatj1F5hnTYLqZfcnw",
  "key29": "3kwMSB2BYVqLsKq3RqVN31erm5r9tauEsD9YDxTX9VMjWJYbokcXwjCra7Dc5zd7XkeqVCzrVuQ6Shxqgkgg9mo7",
  "key30": "RnJ4LSks645r9jatooecGn9N1uqubxRCyzYa9G3pTgXBAot3EQP5YHRfsMiiwAbwA6EfJFNrhEpqsJyd1y7HxGx",
  "key31": "2fYyQXuAuvirfSmmujruvFHuBf9zYcL4K4tZbkz5j1LcD5Ea1ccFQgLwk9k597G3dszLtNtZzHZa2P8EfsJzbX9p",
  "key32": "5v4c8JbopRTKqQ5eiWdE6L76pgvoKPozSZvsRHkF51cXjpywLKSpQoG6Y3dSZyafgr7PALFjWtqToUAJ4VMP6mjE",
  "key33": "3BVZn2X2jicHMa6jbLX4rUdxvRNXainLNa4Ux12b5eY5TmYX8Yf5ZSb3HWNAAX5xz4pQ8UkJP9g3Whgw1rVEKk4h",
  "key34": "5n7YCpMRaXYSKUVzhqiTxqNnwGbnMakcrzqgnr6Wt8U4yfnBnLw4GezkAQvnA6GTg9ojJq3u7Q5mmMzwXajvdUtp",
  "key35": "5mUKc6apaBDFgVxpDCx9wjrG34R2baDhfm8Zdb2Jz1DJmTWQ1gr2Y39zqMDRFYGQxV4j3mJBidoPq99NryVZdTge",
  "key36": "w5U95mBoosUvJBXrA1fmnykRu6RNCW1htYj88R4tk9nAfyJV43HKBuwkZDa5R8jz1UDKwzczhfAD9Fs4BFeX3sZ",
  "key37": "Bgiarx1jftRxhg6HP9mZGsesHcLK3sbGgyGuEb5XZyTwsu2AihWg1HsfA9TEGEJqjZWwxdBNSoshbQXDMS2jpfC",
  "key38": "5dUkEpqNdsiCDCA2VggxA87CrR6QZJHjnF7Kx3HJQrDE89hYQagKVoh1aD3tsmPR1MFxn9jwtczxyaCqXnE6DHG7"
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
