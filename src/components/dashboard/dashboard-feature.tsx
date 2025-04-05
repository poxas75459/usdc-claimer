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
    "355wGQehvz1RPYTv5g8P8sWxb7oxM6mv5jVFsaVTHvTKGCxh4kMBeJTNEkJDxLd8UbHdoi1akB6kkULWhgjEVvoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YBcyRPiGR4F6LfUUMt45mMsiGygrA7BvKkC2qxG2EiqeeFrY13ojDW6wdKEUrEre6raQkC2aLSD7ptH6gfdjuXs",
  "key1": "4J75sJUQyz1tVxJE98EcgHyCytDSHjv1X6tYzM6jdH2nD248Nj4pCkDFmgX1vLYAp1XaBKHmFf3jTu8Q3auaCiaM",
  "key2": "44X42cMX1z4sbHM4J8XZ6VTUdwDc7Z5SuiVbpVndCNz4H7ML99SWqLiz2gGQiwbrja6yaAXpgkZtR7aJ5yN1SbAT",
  "key3": "56ynUa4ankof8vom7hJHWXabyDEjfgUBs1TcAC2X92bwmKCZGYEWvSbk5YPFkzA295UYud6sn5qumuSShvmzUTYD",
  "key4": "4xBME8bNCeKkKnL312U1Xb2SMRGYpazgAykqWv1aSJyYmbsFQHt6wyUtkbK6bnbGYoTYRw1zeSLjj7fHb6oETnGB",
  "key5": "4HT4aGti9r3M9fgB5TvumEmSHKEc1bvBuiFU8xTT3QxrF8UJLbiLZRkhajZTeD6fjA62iLghTjSSJMPJLHKft7FN",
  "key6": "5K3JnNNn5TqsntFGQdyqfBTsAzjf4tBPTUDX8DTVo8iHFcW6yWuu318kVzop6UU8byiTVXkWq27uHpp6wR7vfHv",
  "key7": "2K5cKPtmTQ8ghP5HLdrZSvuahgqRiusDxeYmgHU6ZxWQWznHd7576JinmSQvfsQgbrkTyxTF9wUg1dhS9GZm1Jv7",
  "key8": "4ZFrPv8tLQtBroYrCTeM3p5g6qFrzpcErBbobpVqLzEv2BpUbXW2vhhtWpg89yHUiNyVFZ4XK8VyjeL2L7gNNpPS",
  "key9": "28ZSaiztvGBD6vfGd3svC7LFZLCsZgrqQ7bJPHmTkmgkv5tFwTHhhC5sYbTtUSB2f6Xdoe24QxqSMK7o9DmMAHtM",
  "key10": "3GQXghU6v5hzDeJBHdonMasrkomn3vJsxN73piktrx8GMM6QLFMjixn7AUDhS1SmswT2qkqHTgDH2ywNWHMh9H8A",
  "key11": "3m8K1htDU7UKhZHf8mDD2dp21uMNRYTHDRzGJS9igoD6siHPV6sXxBwkPkS2WSPSWZP7hsDZigmK9gVtNeQcYcNF",
  "key12": "XTWB74wdzff7qXpaWRwnpXFJ2hnFvtXc9TCSRo1L3tog7qwvY1sgndDJ2qHzHqffYuLZiJSLzq3cDHjeuA9Kxpf",
  "key13": "24gbq6hi9GRoTphgxSAkhVedbqgbpSKR87F6YiWPYCtMcEw3otS2WcKe6T9iNM4CzrzjPX2bEBH5WFftg169cFUh",
  "key14": "3Q9cZJHKxhogZsz7c4JWtKjfUUtoXo8hve9XYVAgPVUvdgijHfqgN61TM81iEzkDcxswcYuC2ipE4AsYpCvJdFMC",
  "key15": "2sjxDQmKYsMQViirmQy9mxHDaJccqem9ypZke4UAD6d1zVEtQQtaymY8TECFevuaLuEdZXmZEapsjWrPgz2troHB",
  "key16": "2F7PzmKUKPfB9qBpsHoWnfRJSn6QkRZFoB72f4WHiH1NLHP5gigWAkAcVFKCh4rMKDN7FbsKe9WDZGd3gdWTLe59",
  "key17": "4wcExwDjmEk7UqvPDYuAewC5V8CXbDogiaMqAJDVD3en734utGsLJoDyGMY3D2fishyFE8nikzqW4237UmjMCmEc",
  "key18": "3xfJt5jeHmSyp5rqZfPhdWUrybJd9XSgPToVTVpaiFzexkcvpRiChSVhA3qTaVoNkyAddPR4D73hGHyTvvpfzRhX",
  "key19": "5zx1XECefSqm2WS4pLYvNEP2X5AGYivmzwjtkVqnjKKi5JNep3Q2xKcqmNEgpeYyiodFAoA9AG8Xo4rqL8kfGbqz",
  "key20": "zVUfjWYNu1vP3GMXaN8FMMfNXdgjXvhDFgvPBwkPA7He55Fa7uj8JvwScbpQbtCFQD2eNrHYvqfSi9rxtx1hSaJ",
  "key21": "2JRSRDRa1tbNJRgq8E2JATBwWEnkxHsTN3wRFHBm6sqsHmZkYPNsTRWYrFnS4m5bRXGsAkESUHUZ1upZ38Huvd3i",
  "key22": "1nnJ9DV3a4MziNUgZHcWwhM4HbyvSbDdAApkqPpuqdeYPCCDYFV3B433vsXTrXBsdDuQwkwiLUXb1cgGhz74pW3",
  "key23": "464VHp1AcrXsGMeBFaC1SsXuEkhNZJaUri7erxiafhtQ59hsJVuzqLWgaeL9v3PViSUorzMh4qR2kqSSE5xyoSxX",
  "key24": "xELzwaw9EQvib8WxEKXRtsPokPTWoGDo69SVyWSGA39bTD3yofNnVUdyjvbE6DFBnL5dXHzoD8M54QPFCL72CqK",
  "key25": "3GbnrraEVEQqn79CowAk8Btd5wSnTabU7mc1pnL5uogsiyoUhDji8T7AVawKk83UXmHU7qk8YTrVQZwsd5wJReRd",
  "key26": "3g6Th3KG3R3nfUiTqgvsik9mMxnVim5jeXr5VEFqpnjdbwWxYqJwVY3UdnF2PGeDL8SoCgVWEoHMHpNnU3WB5V2r",
  "key27": "32u67UFCTBNSaLsok3fHWmveTFq7t4MAzPU6rrYgxxTLT1LBqqSjFoYX3BCyqucLS5SGXaaV8kvSFdLFFrK63MWk",
  "key28": "5hLjT8BQZB1BxVbkpbPrjDUTpc7ofKhi4XrQHSY7mZEmeduXM6VA6MpnGsTcCH2LijPNX4z9TLwcTETrhaQxi52m",
  "key29": "LMyGjJcunoMfsuiimJszD72pDgy17yKrC3cKx9k4max2JZ15c2orfrh5WUW2eYw3kR2ZiJn2LvYwf5xDyksprq8",
  "key30": "2LMiSd4c7kNMH5XXi7WkDFUnKQKBXBVhaS1CYiQ2XY6Nb6E3k5Ps8CSrgsUrLPAkuvZagiSxhBSVbB5wKLGrmD9N",
  "key31": "3xzxCfjMbZkT4mtH1A6wP9qwDTgEyab21HHqCrLXLrRhxMMzj8uVb3CPUvHAxJpu6S5SydjB5K75iPSFBUe96WD9",
  "key32": "2HDSF4xmHAV9F2hTZqfvVwDw6jLqajDHYYJex4YrqDp67oBEreiTjewkcfrWmBJAnEQtYE7WSE4dToT2SXHBc3am",
  "key33": "gj7SdvWhPDQRKCYfBVkubeUmJ3zmMS7CBqL3AiPnLcuJaK2afoEYJdxjKT1Xfiay3457vr2AKmxr5ofzKWbU8k2",
  "key34": "wvr2rSZEjcSEEmqrX1emcK7Faim4mhFhE9D45uZygL1Z8uWHxr1F3vrobD1ByELbeRDGDPbiVzhyU9tR9ftHhmi",
  "key35": "5ynJSd7iVR61cni7moBNLVGnqnsYhSYm4S2gXJ3YEj5dP1LtzxL5vtajGZQB5ua1c14SPjcA6XnHy3sxy9ETt2xz",
  "key36": "zxFBA5rkf5JG87qzoQJ3ubtTHrSJhGpKFpSK9ft36ijVWkdC6puVRR8SnHjqGNG6Q51wTzbjEdzDBNir1drKy1H",
  "key37": "4tYDy9YQVNc7XYNvjwxaZn5Nu94UmEiLeB4ri2FQN1fGWximE579YvsrSJETMyTMHeGAHGpZBso3rEvc16Y3N1ZH",
  "key38": "2czUvFgjPZtH1zey4sBiWL47AUJsxw3dv4rg5h7aEdRhoCXHdZefNoSYMRHmvZb4ZUmwUaJ5SYiMkBBdaHz6P5RS",
  "key39": "2Q7VSrTFPCsTVo2CYjs2i7a5E1buTeP9HugtvV4rD54qp5jTd3ZAwV2u1cHdGZRMWuTT44ipYDGChukNNiJiY1j6",
  "key40": "5iX8X8TejSeFMxHoLH91Kk8k33zrjcUyRc2Reo9DhrAg3MGRkDhHbc8FDwJzqPgvdWhrznouWqgXcF8piG1fw1gm",
  "key41": "4LcbkBe3LWaiC8Bm3rzQZPJw9BswxdwetDnBNiK8ASi2NYaWAotj5woitpwPwdjxBFiWF95TGZFLFUDEB2evkHLp",
  "key42": "3yrf4f5dSrcT6SRnxJ8KnAiR4KUkPdcZxfLDxyCh17xTSrBW1BQzJWHCc5h3hJqzJWffEmeX7ZDk1RtEYXpTzKbd"
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
