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
    "4kpW3kFBeVePJppyLk1315jpk6pM97STazBFxprg5D7rtz8QYdU7XGS1qgQaYah2MuXeHM9WYYL67ckpyCMGQ43C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVmBQzyma8vmAbZReduMGnyHxH4Gm4zhhWUCQ2c7z6LcsdJgdhajhW3MnVHNRmvwe13dj3j6rYQPsue2m8bBfki",
  "key1": "278tHHLyGYER4K8RqEbMhmJSb6Uq1Kgi7pCBcD9Mc7PdWSZapCLpsD1BPJVhEzANXPvohH8mSVPMib5ktNYxFnd8",
  "key2": "3GjQE7CzbdHBv86iCMbtewSZfamgeLCi5REWMrGYq6gpheK2CjjpY4tRMj9jCjMpWvoASrsoXt3GxWHNJqYqdSYJ",
  "key3": "4u4rJ6CrsEZ7psnvVva6FgsomnN9i8wZi5ydTs4HrrCiZwiVT5xZiRTpPeH7dhpfmWg41r2ghuvX4w5Lx76tpdHk",
  "key4": "88BpXsRB54q1pcgAo8ZRmgtZnVmXHAtRhZxUuCvjybsdvsBgG6qDoW4jzL45z4FrHc1okZWZBw7gUAwbBLDpcWC",
  "key5": "4vtb9W617XmPiyZmTX993z2ybUfs1BJn3SpJmnDdXsNHHP3enLsxCG6MCj1CfNJTAdyx7xizqmWNdthyaq3aKP9o",
  "key6": "3RNnjQNnBenaQ3vr2L3fRL4GJfKeq2mpxDUBpGfzcnpoB4Uba7rfCtugWv7khov4HtN9mv16TAze8XCNKwNq2nAE",
  "key7": "3Nc4sSkWhJ91Q1dE1aThNtuBXv3CH3Tx53cukbHSjz95df5kDKBakayZbKgAAt3vfXecqmkdwSRMWkMPq5wDeCAg",
  "key8": "2EhTTbbDBAv8Ab2rGREsLtszfvf68uDoqZKU165dnFG6GfqGDHuDYXhpJimvyKRpyGh4VkkpT3bBGTdaiMmvjs82",
  "key9": "2YdQYexmnC9RDAUK7X7sHeZaJwbVG8JejXurLenusKdoAUn3UWZ5GjYycbDDGLfncot6ByKGDM4J5BpCAa8yi8tu",
  "key10": "5LfpnaxQaFDQuAyaKiiZtGPZTxryvrrCzzujUYeGNT4CXJptHVWKy5u5RVMW2Kn4mAaHAKdCufT6FCetSUAVMvuU",
  "key11": "5DyyajFF5hKop8jDquA9C7xfBNR7SQ35xWatFVLDoL5temCRvbPPmrxUzpdi5cbfD21Ygxgysv8rYuT6La3ohgZ4",
  "key12": "3VMCdh1MLwoHb4iiBo7m8V3faLB23h7bxAFxfgKziHWaTabY3mnKn9yALVDRh5VgMCuHy8vx7D6QgWNvSfWDesep",
  "key13": "2rmV2maNezJdDbvSwGfjMqPg4PWstH4MbYEsfhyTuLJEdGRE9XSvGufhs4cTEyvCRZHprPqewkbAmp4QhGyknUr3",
  "key14": "RefTstqqa2dVwkoBdHP6wSfPC23g8Mg2RddGXaN3v2W1YaqhpyVwYw7oybVqL1uU2zUAw2wGy6p3c13kiQDpbB2",
  "key15": "mtXqWvw3jBX47i7bnoRJ67tcFCeMzngRuJP6UsUYhZTBdkbniaJEs4VE7n31SMP27VE51b8RvV6hyTtmHJALDR7",
  "key16": "tn3493W74A9fd39WZ8rXHeih1C6Fv1XAsBnrK3isVGgnTqVGC2PxDvLfc9muhehCrryvoCTbEmM8q2cmfWwYKak",
  "key17": "2BBPc9k62pqKow3932SSqbBVxxt6vPCigp6NeT1CGxo7NLThxiQzjozJyBRMRnrDHfcgJnfdyLKmWLvrr1URnGSD",
  "key18": "57cPoUTLGdwCUWpd9bckfR66cSMTMMqifs346kT8dV28BwgsZSDhAyMvEuMxDEj243mVGJv27MLX7dGsFvVd9kmr",
  "key19": "2PTQ4iisHSci4kXkUGjGabUd6hW47NnbzwDgA8qn13JXrZq2caPyMNY7cvqjHAs2iHTjfhhYUgKUFRBPk8Kq11P5",
  "key20": "3auxyuBAjykEVnacAsjRaBudCYherqZRMz9kQ5J9kBcmShvFqtBbpKqWpZLdFRTqbv5BWpnf77Yj8XzfkZQY1DKv",
  "key21": "4r7qLhqhiacMemRVk7bj72y9Y4CAnLKNCUomMBey1Md8QK92u1zpPWZoTz4TnM3NKYBvxgCVnSY6nEWBkJ5Stoft",
  "key22": "5wmfZtawANx3Xjk4RGW4aMGgKPp7K7RWo1WENHXE3yVJbJf4mFs7HkmaoTpynbMeX6Wx2Hv7NJexjMWFwRGJ8Ako",
  "key23": "bNRijRqb3nrBDBwkqHn8P53FVqZQ9E914b4XqYkFmvifkwHmGRdGq1B2fPxbLTsqg4f3tN33rzhYAhotKpfwRSo",
  "key24": "3dVyLJSFCjkPsj7MjExoXeoxAftoe4hjwir9ED5Lep33dng8eKJ1SoNbjVG3mi7BUcMnStUMa5PX6iS3WDW14G9F",
  "key25": "pRKFHhAhJxhTfXTAvJQXTGzU37LZKiUJRCDnG4fZbBRnfm2gKfzfQLezbjh6dpH9P76NXKE8nnzHpZaKCegUFwG",
  "key26": "2fXsrkL3VGu2ywcfETgLo2UxFrVaCtDTWRGBfb4zf2u3nE3PmadhNSFpWBV5DyeYYb826N17UtX5EZWWtKXqtFgM",
  "key27": "2S1maxBaGfTU3h5UURaReA8PFMTD2HrRH7XxtkTzzXj75AxkmHi8XP5h8JZQk3ZYWVfWU3fGjm5TFQvbyMmtfVr",
  "key28": "aTRwYdMquuBY5zS1Ky5vk6NJU77yGTCFP1EXHnWLA6JU5459zxWTqjnKZwLct5qwvrBPuXoB44sDPAhc7ki7JTe",
  "key29": "YN1AsATDPEAMWkuarHEkp9y18qti5FxiT16xFQGtuBTVNFVftCeJZBdN752rjStp8yVympZtsf3TLKHReoDhAEa",
  "key30": "3UiC2uh3xVxaXHocAFEudZahDHyCf7mgYJ61feYFoLXtPSqLLDWMGUR6k8LTTJzkSHrryWf9ZhrB6QryUer2FqJF",
  "key31": "5EUhTE6NCxucYfbdCjTSzFdhAo6ZXwQAPc4Fp5Z7PwSdDDtz8XiXiCr4CcmmS6EB6fuuaQeKxuXZ14UsfFX8tjUm",
  "key32": "wZhmRHhbC2wav5fsNGfJVmztJZBDZCb6W9n8awspCggGDuR7TNzmR27gxiBBj64NfyoY3reZBaeBStugm3d221V",
  "key33": "2VXgX7rLoR7jFREuR1Yo1XPjSeL8aaGDZMNU3Umz9AcKJkxjrzPnay7VxaNGXCX7AonTgQSurJSoh2Kbyz1UvGGa",
  "key34": "4arKqiWXFyVYc5N6LD6Vvhe2bzTv18pgCyoz2og2HW89K6S8bPVN8mdLVEEvk7F5Qvfm38KwgoFbrzC8KV8w3tCU",
  "key35": "48ZGKQNQ5aVZGtzqyPw9Mhho2bqSGQnUam34zguk4i5joX9chwYTJxdcHcaaABW94176MBXdj1KGo38xxtBL5qFu",
  "key36": "3C6FGbij2wS8TYTxANyC5JhHSaYYS3BzkicH5wSAgyEcBSDvJcttFwTCKnQ3Fxb9TofaXAn4Afbrm4XobXM3qAYQ",
  "key37": "5gka6FpANG5fh17rYE85FAPFEamRAJVyrLcDdHyDmfiySDET2YJ41464YRF1sXiUXqra6j6vsdqGUeyK3372f51T",
  "key38": "53zo7yP1PzCTEmhj48besGkt2TPP1H76aKcWmLZoQHDa8X91tMCL7gbMz5ghcMfXiBi6Kj7RxnSErk2A65yHfFy2",
  "key39": "FkFngwxc8PZnVsd9iZGacD1SHiQkkLo1MA93FbkaRSbRxcz67e6PbNLnj85xcJbUynUtpbV3BPSjTmMtkwVsBxE",
  "key40": "3bPaGqSQJXztqh7qouK3BxQbqwrpu1qhyQJRjwu6czhAX6Dh6MLjZbcehh5FqzyBztMy4nmP3MqzVWUJBjKtL9b1",
  "key41": "2ah8aT7YtarshFJqCVBvZGoXPhjKDnZU5rh8LYeuExsoxeRK8L5Bm9uEJjBw1MuRoN8XGqTdu32cg15yWxc7NmTb",
  "key42": "4mP8XyxWBsHqEqqjhRoCB2z91c4zLjWs5GMRXqyVmFKpAoCkV9BdvBJ2W951dAa9X8dRmbGBSooDNKKxiCQwRrKo"
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
