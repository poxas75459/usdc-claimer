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
    "5ug7FZun8aiz9LGnRdFUT7RRrdcrzqbtKoX3RA6kGrt4BcQ8vs8e6Vfv7PUpSv4RQ3LrWqbftJLyuhASg5aURNqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9cFzRSmbbgV2aVNBo4Qph8GK3wrW96v4fcji33B1wd891nP1mtf46GvsqeJzuGuB9D7phZutDqu186EWXvV96wt",
  "key1": "2fSoRk8xC5D8Dz4Pz8r9hcFefyBDVL8cxAT8SyeZBzsmtQkJZZz4hoU2QYx8XMSaCgvonkSnFKRyXbBTN3DcLn3x",
  "key2": "HaLioHovSMcAdasUXZ9xuh7BJREeTtMv9LZcshyDsYw8S2mXKsZ134aazPTUpK3dpsfprLv5pkxWBVCyeF54Dqd",
  "key3": "2mwBrDPUMTDFXmqdjRzeUv5m5mR1XAJkXDWTGFLE8EqmnDqXXi3CxgzKsikgm2QSyjuyKhXpq4c1K79XdwjmcXYN",
  "key4": "5wLcEHv5a76XoomjYXUQQPzGpytvgWWAT3AHA5Upk3GWXybsymouq4FWV28hqVRVeqizWtXcaeM5hbxJDcx3bwgg",
  "key5": "2XUwsma6o8RSjYgtkp5i2UP2niaSG4U7jhTiqbeNuu8E6WyXvgEs4Pf56qxnqmWWUfydhXPDXcCVq3Svt5JNMHWS",
  "key6": "2vS3EeC2o9jj4fPPvSQzdutFaNgFPM5zxTX3CjtyiWyCYBo8AYB1Jv21QUAiJcD1NVd5QW9MLnUJt4pGS1fbxADn",
  "key7": "MqiQEdk5XKrPF2dz17Ph72RgmXcv9nVbJkBb1MpaFcm8J3BjyAeJY49g1SCbWoAAq5my9aJhVWN7S2MAE228PjA",
  "key8": "4JmKjAPY9iRZoU2Ehm2XZA543kBBQFATSDqxEdRVXzbkKKoa7ABGVFVp88DpDH7iF78kkcFrqCZ7Ydnp8ovre5WX",
  "key9": "33hiVmRLJpMCLB9SbHHsqsTviwqL2Zm9a5WPSJEQqXzUgiG7zuW4gfz155GkYNuQDeGjDZf2ogY2Uq6KJrSa2tEZ",
  "key10": "9THxkRnjaVfnuRuy2iGNAqCSMDJTqcU96G361eCR22A7BhQamYJHCnvxQUgod3gAj8R8LDbEaA8f5iRnug8Zmv5",
  "key11": "5bb6od7KVh9wN91NSWcq1cYzVQW3tTznDqtrD1zFXPaLGHXojviJfgVJS3R4QVQJNv6Js3tV8FEXnHfbjKL3UweS",
  "key12": "3M6WTSESNsFBKoubCnV5ydNsewapQkxGoqpK3ynTtNpq7zifLUu813rgopkmp9XtMfiaZHkqvwDTNxcX6qb8C8Ez",
  "key13": "2FPohNDfBpHaRemBf8ZjcgdKHZK71gD8fmue5P1EEs5XReV9kiNDyn46bhcaJftkKrdkgXEeTtFXq4jkczVdRWTV",
  "key14": "533xPtsM7PyZ7KzziVt6MBiacsdw5CpMvhMVWknThdaEnd1djgKBkjWMKfEhZz1sVqKDZVEfBdNqTEisv58b7UBC",
  "key15": "3GwnTCqQLdRjFgdBMf4sE3y3j7aMJvsiXgPThR7soRFFuNCc8wpqRjNXWoX7wBr12HSfmmhUhZ1EuHLKu7Fdxs8g",
  "key16": "3GnMbH7VW78wcnQ7omfW9D3dy7uGbny4VPKavmvpuTLefG2hJBE1srQmfHDuYgqSwRAA9PupJPU9zP4SwVYoVQuo",
  "key17": "3XvBvQVRGTH3C6cpLAGw73Z6SU2W74afVmMu4KpRUSrhkxptbc5C1s1R4B36vFKEXjzWufgaK4oKUpQLFTPKmejk",
  "key18": "42DZJ5jjANrtk4PFaobAztP3S2RKtb3cTCawJe2Hq4udWCob35EUQmWQS1bNMTAEHttxFpi9zxEDSrZn6xz6ZFG9",
  "key19": "zywHh5XhyeYEMTA2CEBwSaito6Tx1Jk75LnxUN5u18jdAQpys3scwJT4jGERsdEyJdYpHD7VuNBsHwxdrSdw9Na",
  "key20": "p1qtdrZppiwj6HsJJpS5JjWmrqaaHRnEN9mPTju7iX6Hr3XU4YEWyRNvPN23ziwryhYGTgeCe9p2mg751ekj2cH",
  "key21": "38ejmACYff9GPQphF61DsPuimnWPPSyMpu9FxLaB5rDSw2WA2rRfp3jt4A4hzTg9yoZkCouDWD2z11rvNSYWVGH3",
  "key22": "5MaDAhVkivQ9Yj87B8f2pMWaLMWmvTaCens9k2LUsvW31TFnzDXd9SR9nnYy5FncyRYsQqLyQDa8nNhzdC13iNyv",
  "key23": "2JtstHQKrAb2wPSg8kVcjCHxuzAXxZP3XRLgaLEfYtExb9WSjyBWEySZShGwTQwaf9t8wqH5RKxyFPrBLvM2UjUy",
  "key24": "2MTKVSKudvRD1sgj2M8ypR3iaQk8GZiBDXrfGd6V6H5or9tpBqPmBp6p5jQ9jB3hHWmzxHptPjGZZoeJhqnBugYH",
  "key25": "5ePeZ1taPDnKUnVFiKYF1r8iGboFX2oxMSrW8ecaDWBR5t6HcwPknVuFueJuHvGmagoDGXe5YsNiN3FpU3xETkBB",
  "key26": "3FJPMBoUdA6o3tDWUcCWAhyteXUrfc55VX9U2CAARGcLQ1fsyFVHBdzE6ABo6fHMyFh8FCRfJhTofKzKGs9nQYtR",
  "key27": "47uVcepYk9Q4ZNLsVAGE9jmtuyEnds4JPjKQiGEH28rEFTuRv3sXFZ2tMXfX7WP5y1HLBdBpNAvwbaut8hbiErqb",
  "key28": "5oiPR7MMEQS2e6Pzv6SGvZd7duLLQNpPeXAa4HqW7Cj8e7EzqvkmAqmusGow9NabH3gzxcD49hG3rZFycA7Yrw4J",
  "key29": "617bGpdu7XW7BmJ1yzn42AQ4PifiVgYsMd9AimZWa5TRqZYWm78u456X9CuvyHgWa4j7f3433AzmsNiyU25Mqagh",
  "key30": "3yY5pMv9ZmiAYzfoR1wJvht7ph7bLQs19o1cK1d838s1mVqGzAs7xM4nf2oFnAYQ5tiT9wPxfhLPk6YG94fjhCmc",
  "key31": "2SPPisjcPMSmJrM2RDw25Bp33DHSj6bJ8LzzqFuoqrbydXWay53ZkK621kba89v5Gz1thVcEqZVroF3hv7k8C3eQ",
  "key32": "KtKpzCfKRLSEEsVTkiQksEfgGNa1RMcakssdzyb3Gc23Ksb1jWqtGuJXFgL8ZogwsJZub55g9BLsg1KngTdqdk3",
  "key33": "3RrT7Jc8QV4JUrwexxbFzrVGKkBL5Nx3wFme5XaYeBsmk1TfZYWXBztbNpS755zJ1Er4autehUnCRCPrBarJ2joH",
  "key34": "4B8akMhaqU3WUuTJJQFdn4ukqGPCRRcQrwbhBarkJ637aXr6AB8jzAB6qgycEpRURiKCDLo17FmLupjUCJErRunW"
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
