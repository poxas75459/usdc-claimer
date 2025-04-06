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
    "egZc6zxRxSnGVP8cyyLRo912Kz2DpeWKwCbZ17NQ4EYBb2sUBzSma4rLJ2CBrq6TAH9ggzxxYFiKwfss4kmf4J3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQ4YTzAi34UnerQRjXCPwyHSvw4Nyyvy39iWzd7Dbiomzvo9MQroGymZ2yUTyUAFVbnTMc4qUrb4GjzSRH4n9Ug",
  "key1": "41Zv9Yex4vBTGjUVDKX8ckk5Rc683xRiXL8tnNYUaNXvHFiS574qjj5WwogcXApoZVKvDgjFAWWupN6wuUYN3qrf",
  "key2": "5FgNcvAJEqKZC8Xf7XBT6V9KkjoTpXahaVVqK64PVAExzT7NwkJ5twKXdtkSAhMRSnj4rbVfpjZNtoa61GZ1TLiX",
  "key3": "2pvyG5BbdxhWpjCUY9Mo4w6WcDkmzUDDeUhSJJRpJ3ifd3E3uYYNFtywW1qc2GGGqjWq7zooWwFfnfoZGVJ6qXJK",
  "key4": "4XiiNzMnkyG2cRMi9VtFkYx5QXVx7Jj3NMD3SThT8NtYtLM1k7EPNMG2EZkJRcJwXwdHNrqywDMbHbyY4MNMk3iD",
  "key5": "5g4q6zSC5qaWk3eznnEe98gKRSCw5ersceZcuyojynvevKpz1q7S6LSZVrQ3vLPb5gfSY3EaUNWMTSyNZAniUMBa",
  "key6": "4RsZfMbdwkm8oZPoLhzJp8XRs5aAMPGq4jHGBqHaN5TUkZSBvxCLurygaR8U6Yhwru9n8UtELYtoh2vpxvyjSLSd",
  "key7": "3esqbCyJ3ZTA2pV76BE6u2KHNStX47DNb8R7X9izNhJWoZeWJGCk1GMvrx31CZRZgXkevGA7Hqw3CsoTM42szS2F",
  "key8": "xbJrdsuHWEb7snLFzmuuZMTivffEsaDEpkLV2sMQSPQRDd8d34osVVrMX11VFNswHdfm32ggSARmkWZVLam7JRc",
  "key9": "2NyWUtGPnUqb9HELBmUJX6BRQtNhrYs8VU1DMKJQJVudJnPWyNAM6c5ik8zx2CuqoVnxaxUMV2s5tXqzSPU1mhxW",
  "key10": "5D4cybWDqGtN86cTSRe9hKnXqBfSi1GZMFWHtZjetuBFautd5FD7oavB83oH1cRZYDAkgvmNnf8g1iUEnSvmHv66",
  "key11": "4b6dxbNSByHTSiDJsNT6hpAATZnUzUUt7j3XU2LBy6ax6qgjUc69sWYFe61GUwNSg5LsBsdePeb4cj48My7zaajs",
  "key12": "Ut7RJcKbDKAgksK4KvY4EPUL2RDP4JEqiPvzxB5V1cD88sjonTmpWu3vD1r9RzwrHzX9SXXdqzcL1CQ8HoApQGM",
  "key13": "2ruMi9jMfq7CensGQEcvjQ2emCv8a2hKBt2QHuTAbgivysiU6JMEQjPK8jdWqdhRvmvP2LqDRSZcA6YGMBHXmCpS",
  "key14": "4v2W4JEbxPZ7qYVLKxuTUHrfwmJgPzkSUBhCFihVKbVpiGawAVXTjSnVVK3Kz5vnvnTi2yGuiQEFiBnKdEGCZkMR",
  "key15": "VuUYMiou5WdwDCengFD3wnd5TBh2X1ZBpDYpAqkxtCpyLCMUDijWWfe2hQtTYWGqPgRwnjFoSpo7ZEnmkReNJkz",
  "key16": "2chJuANtzmaNeGXFsu54kmA2FUB9fH3BheRYUbGZuJnNb7wdxN4NxRLEU1mjLYYXD99HT3PkJnQeJ6mFvi44sgU6",
  "key17": "4n6EsZ565BgN88Q4zspAnX6mG5EcbHTiSpnuxPNqWtTdFDfurfUgNXhyi73SkpVgGwMfTEkhhVvHRjRWaQQSHPCz",
  "key18": "4Drgm6u3EjJmQZFcsxWomFHNLXCDpjLV42eVmrRsnCet8L5UXKuUt5ceCNWgNKijkAh9b5SfE2u9h7NzuRYifVYZ",
  "key19": "2svLn4aL4qthBZX9MhrHsMKvpoJrgjyZrjtZ5zGk78RnPdNzwPNttr7aNuJqZgMSEijswCAcBv126Cude9kGruhC",
  "key20": "3qjQmre1iu3kMyvw8CN9YxsSHnLri3j21gzCwULc1jSLEQUN4zTxaZEem6ExJkf8Rpe4G1E22JQZGFJZ74TZnAPZ",
  "key21": "2E23iq1r6WNeGVJLeVJejiwFUai1KgC7VxjH427aJ6d7cjY6T2YbU88rgURtDcfduvEVLCzfWEE7c2VRrGEQTU6S",
  "key22": "2S19ThspsDG6pm47setBA5dqVwPGSs5hdajjotBhUFWDwWNGeLWR645WaxLwiMtYWRtTUhrGEkPeeYPY8Eg9CQrt",
  "key23": "5s32CFhiD2DUYHsdN5GJktZtnDrGnYiYGt4myzKT3BaqGUDHVHeFGqnc3EvrGYbmrxafSdf6Gd8bRUA6V2vygDQ2",
  "key24": "2hS4zqm4yRkKcsYrqZW5mmiAkonAkSa1j1LduYzy6ezQAJdCq7DY5Ub8ctFTFePGmQQ4bxKyZQ3z33Gb4VXtB79k",
  "key25": "422GiPMoyQrxbemcWSPNq1tvkZ1TV811kS1XF9g5Wwmven1eW14Kmrgk2Nre126MDAAdqdQoRQAacZiDjDp8wHa3",
  "key26": "A9iyxnBq3TYFjLmRJY2bm1FNZdERBGSQzGYM6V9Tw4PYeoLp5HWAc6yVuBfa9BCwoYgyf44UpnbcZk83M4NyHFU",
  "key27": "54jp5uEiPfjamDdhHLQxbQXUgt9vgRFWd8ZYtbQeKcY5NLKYW3E1qLLchUEXsvfzpcS1CuWWVDVsWE2RrSS2zDVe",
  "key28": "2hRsdyfEYicGm6Xfw3nWDtodNVzWgFM2W2QQgyiW86AD7H7okEhAr2HuDBzGSg4YHxRHfYRyt1gwwtMEQQnPKWYi",
  "key29": "5WD4dsGc2GAvKQa9mPypDfoddH94SDi1NFjnKDHsUE4eLngNz2MkuZaHiR9myErU9unDWPZSZcpvp4BjSdiEVk89",
  "key30": "smXjwazkRw9UyoVi7oExHr3NrNyAMqQ4do4EdXfxB1XaDQb8fJcT15fW7vWzq7tMRHHtdGZvNVAvZQWQWgbgL4H",
  "key31": "ADq83A7Eu6sQwPLjcHtyybRCSYJeBME9wcZBpEtFNjpvKJtdXjrLrv5xz7fxrjbuotYHnTUkNVbXtbKHhcDZc9J",
  "key32": "36NCzHKxjiVPhkqndGnSH176MgdQ8ayCRiRVE8pdw5CBdiHScWqqu2PQQqBsZvmR757oNQkf7ZdDdegu2nDAA5N7",
  "key33": "5UnDQjquL2Xcb47pEnjTY4ZmDdhZoA5h1Wh74q7gL7ajo2kzfZxnpW6jVH3X699Nk6NyLgB6CBk7ZXAfK7RvfrEs",
  "key34": "3VqA2AfpbqhgbETGncGvEtYtoQ4UpyheKB8wsWoM3QUsBg18gdjvXuoeXnxor1a9jdXRyCWsdPv4SibdsdPgCsqJ"
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
