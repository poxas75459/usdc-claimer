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
    "2FAugm3exKWh4C1BS6SxRVZZa37UodXBvpbHuF14ZJwnnggBUsdx7Xn5dnBb9u8Dn92sCc4c4xBszAtgU6sUiPpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZqihfuFnyKqexncGURiPrKJkR3mta65CJ5BBsr1E6ejrQLzJua48KTsfVGkHYSEgmJwfnXMw6kT1tt4LbXoiyzf",
  "key1": "2UtSW5FjA7pEFcV1c8TUrjdbhLtL5XFXigHYjfQtQhxhE1QMX9v5AGzp3rAQLanXRcfGFLKXiTsvNTyBRLvNR3AG",
  "key2": "3rNrRVVgpMJLdUiRsvTwXNhStYt3NNXgFpwb6wtA4q4h3KbJmyDTPtrBQvJdZseZRy9dQzQdQ6RRTEVSGEfbNCRD",
  "key3": "BpGcC1cSWMUsLtvnmbBZqU8Hj9nVBA16hbzT4xmAoPgbKpyfFstj6WZAMYYS4pJZ4M5z5mu6LpkZJ46PayMAVm8",
  "key4": "3UcbC3KukV3Hk8Zym7rK1TfHdA9gPvjYGLn7fxDuMRUub1wtW4aY6p2eFnmGVAq5Tx1kzn2bA1viiQbAWYXZ5AoQ",
  "key5": "TWvqiXjpsWaUYVehjbfyMoGDR4LgNZ6yEvnksftG8PeQsfjoSomsvTJbqo5vgBhMa4W3PYfD8r9Mw3p6vR83otn",
  "key6": "3noPCbBwuxpP63phwctePL7RvwXTP5VWfZYiPSRXHYyoRXH2YpATUs536LJAX3LNzmd5G77J4eq81tRBbcCgrNGL",
  "key7": "2LZ64BUybp7fVqFR9hXteQNthkGuR3yuQgtCmP1jLFHp4QGBkjvJmo3g9TL2Z5pDg7YQsciWDFEB3uAGt9nH6TGT",
  "key8": "5Q276FikdDFhpSLRxtDAjeTbhMcLWtCkkakmomjsJyh7cs5JDo6xi1SKqNKFUkH7dKhvknBUftKeTtXqPPEDjp2Z",
  "key9": "3bQQcRfYBanEWCXy6FEjdvg13KtzYR4a36eCAZ2tTm6z5n2mCvTAhJ8FeUX8up258asoAmrGxxQ1VcTkjwcrDcWB",
  "key10": "3R9Y3rPoqEWG7JomhAhHcdWnpaXRrwuapZRLjsJfjieCgZ2ae6rB8L24KpkHQKvYaSTbVwvcXqnoFEyY8NYcCpR2",
  "key11": "2HWmsVsEGzS44k4zQYtRpFvjj251RH3i4bm2iKAptqzHNBHVvzVuoSDEMN9AZAMXmByie3Wxfaw8zYuzb6tqxN5a",
  "key12": "2a5FrsbcqAgrYv6KbJeGnA1wwLiPSziSrtb9QBdcVC2VYGgQryBgsffi9qPg31xVRyqqRDbtah3uUsmsZhnkB26a",
  "key13": "4mm1qSGhUWKN88VLtBxGBqP6nLVzz5ZRrJPxZy8GCHNjbedwpnmvX4j1ByjZebvDsyAS3Sfvxu5jmUzCeh3WAsrC",
  "key14": "N6PUjwYedNPJucXn8A2Bw3g4UKbha9wuYdCbuupf57g2q5Wp8bufvE6oyGmJsE44DRfqD4Ssi9Z43qo1YnM2o2u",
  "key15": "5b9yrAVYQzqKLL13kWvFRYEWP4k74UKMPCFFyWKu8BFkRjJBaRjp8DhZEmqM8u5nEt8YRzktLdGQ8eYxeXFb6Mvp",
  "key16": "3zNnczw1mSUJRwkKGyMkJCfnxsbrEDLh7RaTRCfmVvhT91uPDPNnsSGrwy6nQo1fzKA45tiEqwoFKAguUXVCdacM",
  "key17": "5y5qb3tXDpL1AMJgKZs8ko4aXXpgbVqsyW6eY4PZAzE4Xvuhm5QzUiENgXsuBcgFeTXCSEnJcVHaCZikJR8FSXMd",
  "key18": "3jbbMdXuasYFNvoV4zUeeqdQbMCDztrPsQQeNxh4T72EgwrFQnSB1wvKnRM9kKZnRhbRn8F2Wa7ABCFYgL9jzZoy",
  "key19": "4261fPeyfLHqqoB8xdPKSiqu2mES5qEbB6eBVuvoJLdaxpuZqaE5SBW3g133xcJGBdq19y2a3WohyD7WGtBwn92c",
  "key20": "5xoh86MaN2thKn4RUeE4DxiMykwsKRoR4kt94yiW8fY2zeJ32Bx373TjyaowwbFaj7tqZQtYHGd1DRDavAgnPZwJ",
  "key21": "2hVJMtAiNh1XEhRFryzkrZT3vqrd67ZhVUybgMZj2hRuvB4MFKBCbG7eGX5zMUGRCQS6AZmktFqNyRCUmdwPRsh6",
  "key22": "2VzAL3Nq9q4EiV3dj7PMSeaAZBp4RFCriePWVRcZD9rLcmTU7ytyLqkKcv1YHsuzgiZqPvPQo5VrRXkJ3ZtaB5fd",
  "key23": "285Cw7UpmFLD4jq4SeNRGoCih1EmGPo5QzzpgErkj5SPmiue17E77qHmh4aTBNPDJL8qHXeoE4MwxZWsSgEU3DTW",
  "key24": "2p5kUtywUNGNPnYsn3frLK5sRYwNGdKTnCLmEMQ55d4vQbeNrbZnk7UdtNYWA4fZL4e9tBLZ3fXq7Z8Z6X8cBTBj",
  "key25": "5jbXKqBB1oBNYS3ErNcevMRCiMNVDteyhksM3dxfn3yVfXfPhoTBwceLhPZaNAsm3LAHAG1BukmvvBqDwPsqDqix",
  "key26": "4spNFfqnNRX9TQDrSweweRdfQmwhTJDeUkxdY8YFEUTiyy1jdeJzZhQNVjQKeAxqLv3sMuByYsz1PMb3aza679HU",
  "key27": "zKLv51eaunRR8bTG9CYZXg4mdAqiG6PDchMG42isaMTVQ78ZMaxzVTtkxtKUP8bnN6oU5JQAFCQmKxwGMsCkgxG",
  "key28": "67bjsANboKKW1hSrCe2SBG3dY88AHrZFdB5Yg8mAasFigzFF6LRBQ3iJupTPMLeD4uCofB33kN3BTRw8RvhfsZdm",
  "key29": "YjivWqfXiizaMbpzGMVBYn9pcTzQQ51VSEXtfXCdokgRSyoWQP7vE7iZwvexhavpRBEn3wmvtQcAwFUnYSiNXSm",
  "key30": "vc7Q9r8jT4Z2xfCPgS6mRfh2QidpK7WkcHwLYqhzcFVzMpaHj3NgWwweLLypWJ1aT9TMC2dANGibCTmbq5wa6jW",
  "key31": "3mD5PR5TmJQNyQnyhzS7nV8yqd8b9GoQHBbTnFqHEvH6F5TsPURsA3FjwQEsBy3YJfCGzs21m9pJw9wEpabGhUBk",
  "key32": "442m9t5B1VHWUKwBV2WTbjAJ44NzyZazVojFHFZgRUMvZMyEyiMMNA4gCrqnr4PBKx4KigehWTizfzLjimmFevc7",
  "key33": "5rG3SswmX66NGx4xzUrUv3i85pKFan6A2QVnAB4dMfV4b8xzTGf9BeQa1pgid7C4j8pBArXTgrmmHRRJMDTDB6H6",
  "key34": "4AWKxixetWKf9Zxki7yAmH1ZGjwDXsfNTDGoKAab5rVgs2HqZHBfwuh6txcdQyVf7wx8UZwSd34kbHpXXqMYeGxr",
  "key35": "BgHM6wL1gq2XHEN3mTLautDtvbcJA2H73AykdRFKWpATKL8vYCX1mk9oR4KUGhUuwUD4WgjPkSaCzSFesN7HDc7",
  "key36": "5HbkYaCkPSvrU7xeGFfybvtpd1p58ExRaEamYzYMGbwRddSdM7K4drbruAZcQDSLUiYSXfEkj12eLB64XuGgbKvA",
  "key37": "2Bc8R1GYjMT21uKZAm5RrKQNjVim1X8QghBWQLrBXx1Yn8XyoCP5j2PTbnQSW6rRzWqkm8XhHRe11A2ekZBqfQJg",
  "key38": "3p7Fg4ENc1u7rCJScinGKGmEGncyR59y74uDDi4GjEeKX6ciP6BiGVLTzcTqEgDrZ8mhR7qpKd6B7xB7BgLrDH5p",
  "key39": "3KWDonFf1juLtAG9UNhpEZ2jMbRm1K1ZXhL4g2CRLpM81JsYEg6SotiQZfypNSxKbWm6LCr9rb3Exa4F6udVk8CE",
  "key40": "3GSx7cgqxYC3CQ5r4pvzark3ogA7Q8nrXbSanLU6YS3n6hAzsKUgmhbBuvdoWqVH2BBYnVRxWad3GtEZP15tLWyj",
  "key41": "sE59FATL9GEwTZj6nQeFiLq6mfMp9Di5n1FvaHrvnKdroqRGvo4jhniYEsuRkQuMufkbKMz5fQC3GM5aHCFZzSb",
  "key42": "bnHYrS6CXnkaEBpU5BATrHC4uYiEPfPMVvSnwLpDe1NukttGKEQEywNoNYY8e8qUYjgskfAg1Eb4btWr2AfrSwW",
  "key43": "5FDnuubsmzYqG3tiuVJTUJc8GPz1jQe1qjarrHTsihuDiyfpfbNpRt8MwesArBQddqxGsrhszNVGkpdVsv84KXz7",
  "key44": "57RNRqFdoLDTdmi3BAbiajqSGjd9k6CyE3gipsvFTDDYbkzufsGGSaucZ5jZDfVqYtako5GAMCKVwoLS5HAdNktA",
  "key45": "4Pgk6T15rxFATfMJ32UwSoQM6Ad9yekn63pqgcyACuoGyuwQeNzM1armes2MTA6NbAbgtjgdhPGZEcEodJ53HJz9",
  "key46": "CFzR74Km2rBCANFmsPWqJM6kY7PV8UiDMjKPMrUCzi2HDnuYG5Zx41M4BpSZDstVUTyDe35ZP3aE7uaummR5Fxy",
  "key47": "4V8GY15RmFh54SDoTXN8MvfTPGFL5xmfmeTQ3da6JUgzjKJrxtzBxsBLvfrAiNXkw9o82Par8t1jKYg8Bh1Gx4mY",
  "key48": "3WKD97UvCfs6N28KmbRoTrVz9p974B5c3C2ucfTxKVx42Fyvcw8adQTxrZHxd1993XnxcWv4txnkN86kV4HaQq4x",
  "key49": "2wYn2oYwk8423yURBVhumr2hYnkTEw7pvBCNbzUhn8J4w4dGXHgoxRnWKCpC4y7YNskyH14Jrw5mfMeZpRR1tTj2"
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
