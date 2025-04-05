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
    "3XuSm8fof6VdpRyjA2nmw5UKmTagQNJz2C1xsuyrWWprGdsQLrJbWuGBPa4dkHLPWfyM3D2HkCh33ciNoVUK4L9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LpWcRiSnA2fkKmvBk3g1hihcFfdDTm2x1i7MS9MXSwDZqkwgQHAyEo68N9wywZR6YDaoqdkqFmbZwRKoY1xXNYs",
  "key1": "4hfdMDp5KgyqasSRYKSxxy8L2xZvCeZDRaWJnCTEiS7q9UuPomi7jRjhxDThKEfBQN6NKHb4ubMvuLHfYSoY2fck",
  "key2": "3BKn2TP5CggrbmkZumoYatmfhUtSEnidBhyKBj7mYugnptZgCxzvnGPsYTMiUt6FNhEzTY2dGUkSMqfURRr1z9Yi",
  "key3": "29DpFBCueRTmVdrDh2CuzDZp38JySu2XzZTQtyp4xnXRb4pX6FHvHUUunouBUwEW7RdQjKqYpsXLHsrkqEwar9kw",
  "key4": "3F7H3c7LgTpcR55DBrgnikPADHiF76M8uonCWTi28NH8vrg4hsEcokDi2PKqUtskhT1HvrNdG7RAjgQAeKPzHWn",
  "key5": "4Jv11y88XkcqB7wamrpCpyWvqJf744TiApz3NFFUL7xEgfKX7LhnPvKrR3nTtArR5L8J179zRyBg8GCfjuobbbMR",
  "key6": "3fVxHZyuGaZsU5aGHex9egPQC9kURNSucvKMVbx42suj8RsYZsE3162BF4xNq6Tjbk78Yst8KjK4DZ6NMLdzavMM",
  "key7": "2355mP6vH38zr78nWw4bLNjippCYyieCCdtcs7CgE8t3rgC6bMuU6iDNoZ7yEawJXoC8drHzx929vFnMTK8Q4mT8",
  "key8": "4VNK8hMPP9JLkd9G9qbaHdEugXa8i7wwGaMXHmEzBjRiQJAoShDKr32x5e4ChvywsDsAuUAafwNyQ3NPj9VVUSJh",
  "key9": "3B2DHwHiVRNyL5xsKSYx4L9impfn4RCxAin7joVVsyfmfofNQThiXKTAmzFCjLTNh1NDHkUzgYSxrFYLSoRXbdxo",
  "key10": "4jBjJYUbz5nSBm5U7DZN2dZisphYr6BKUvmABsSpk47rPT8suAeE8QE1WPZv8wDNYkhn7TkgTp8QxMLFysofPvvh",
  "key11": "3GzSHZH2wKjSVNYwDjo6hNADiJXxc2frNBhmGAQVcXk2jKUuAcG8fAYfu1NErtDNx3LCp1XhChTpBjdigBAXwNt3",
  "key12": "2XyJMN9wMqxFyNWxzsUFWruM691e8VYovE7nJnNwLsS47xy7F5KYRBVgNq4n48gYzhYsUjXV8bLxNTeMmf7q7BU1",
  "key13": "4xpWLTHFMNtyP881Fap8LdtdGk9wCY56mdSMjYkQfc8UV1z2oCpWJ13zvWv9mmHDiw6iDTG4Cy2osrj5msVdiLjA",
  "key14": "2TchSvQw86uBUaazX6otrRMpGrWKnMba9mQjJUbGaRs5tMx2ZCXXMLgGfhv5WnS7rfjdjC5reUr6jHfomHASn65m",
  "key15": "4dM3USCQpgBGqndtiWWh4b11H8fWtLHPqBK7pnkKh2LitDZW5FUfzEEAicR8B8jWG1A6zFFwc1bKizbJKqpJnq1M",
  "key16": "5W9U3kUGv8wW5q8eHvPunTEZaNhu1CqCAAzjUrUxNcvA8LfgQYZsHiQZt1tS9HU9bDFfczkP2jyRMKiPMYubc31e",
  "key17": "6155E86Gwrgd9u2AwaiYA5t7vB48P4ijERZ3FxoVAh3Njy3XtHPoHTq3HbK7SYS8QBYaXfPHSQjVwQ5Kt1Q99LoJ",
  "key18": "4jGpQEY5GSKm4Ki5XfF4Dyd8aaYbGcEk8J4DyAfNDAkiYzHAdPVAABm5WCpR5m6EXVKF9HbT7b8aaZSQhwNTvtD2",
  "key19": "4DCzuPDZuyiEjadixYPJuhkeGG1Xs9K19JgeqQCwm6CU5r8wh47JUZ9uZKqAUkrCLktEw5UT8xnicsd197N6oU36",
  "key20": "2UDeCREKDC6NiGyoYwYAjifvS2x5mazjzEX6cFoaoXra8H9TNLoQN57Vd5sjtdjLKw7QvuTXrH4yHhD9S51VkrBg",
  "key21": "3fxFCCVA4VSSytRMw5oqfQ6LDz4izEu9QYTDUUJhL4QpPhARpNk3wgFLcZy1vsVZrpZzcXuWvgmKTJjutHP3HsM4",
  "key22": "3x3rkKmhy3sX1RYbCyAcyhjZQx24XKPsUsdWAxkjazumfWG1EBWB8Nk4sobePxrg55FsdbUoqQGjqa9dBWzE2iBX",
  "key23": "g2UrdrHAnJfPor7MMmvMJsyFKh2uu14Ma81iiwowLe6RaxZC1MzxiPvaHDBnWy7kpZnXEZ4pAPyUfJbCnKPFcda",
  "key24": "61og4yudMd2AZmc3vvu5rtTQAWHc7mRuhhGbJ1nJAx6RAhW9aJcXdTTjKXTfcNquEi2MvkW8K5G9eDaeqCa387im",
  "key25": "31mALURV5euUunM2nXCkMaQgTCirYYNvq9WEpWw17DPUJmozDsdeAC3nhiTUCoDp5MB8gPg1TUbyyV79nTd2dQB3",
  "key26": "2vD2hTKB5GD69KRNRSdF7AiTRjdukN8tenrbMjQPBkbf4o2HYj5o8Abc2FxQ7mE4vRi9CaETJaj7dZ7mFW2XkgiU",
  "key27": "5qBotiE9KAuCq1nhkmD8WXLHykxMKJ2wVfe3gbq7MfqotEd5mxqfjcYHgqLTxmBp8TzEnvQGk6moiviPFEeCCKGo",
  "key28": "4jYRwxWsRZpQ8xFNTUxeYavGy8w8qVomfV7Ezsoerk7VC2TqKdqoVeLeaaZGTtuMKuFYaVR6EPdu66rmuWKXXnmm",
  "key29": "5x6tuMjywf7jALeyseuJXjwaB5XkbY3gFAayw4aPu6k8m2BLaTe5HM5RerWK36TiUQ17BWcXiGCF1N8mLzBogHtK",
  "key30": "aAno8gbVZsszLU3jS25ycDQgUHHViLxD684TPyTWXSf8tdSEVRyT9VkionTUEa7t5E9BrZmB9ey9BD2Qtu9gNHq",
  "key31": "5CJ8sWYQhpeJhDxMgEorUwdbiWUxk5fY1wSjtnLw9SBYn7sFMcsMai4YCoZF4utEZTaJ57pvpLmM6HDuBwJMFosT",
  "key32": "B9oTuaGyquavP3zJJ1WRn2ETZypk4u85seDFfUgWg2h4tt2m6axu7xRLVM3W1c2ZoAtTEV5rMueZeFbJU8Lw1ib",
  "key33": "3cBS7CT3yie6E7FQHYLZNxkxQTcJEznUD7mT9dCu82VdnjVzoEiu1Tyrexekzbd5amVb2Br8s4gVjCxAb4cKcQB1",
  "key34": "DfmcD8Fj84eEZgadUuLMW1nX7CYJwiZquwxNbBAZGtVTc7wF4CT2Rvx7rMYfM72HTwotAa89ufCVy2QtfS138uB",
  "key35": "2AScyDo7cqNjzgp6jCU3M4RLMUFUNhywKRvwwhbDd6xwiRrdu5tTvY4psntXU3xD7h4TsqwLxH2ZJizoR8e43XXr",
  "key36": "2whH5kLKaoQ8rVFJ1VBXq1TNha6WSqJM8vQrr928TNV1wtM8k19Jpbdk5Q1r8dYMtD1PrDTbJZQiX57NkxKp2Qs6",
  "key37": "3nRfNAc3TJoJ7p8L1paUZassdAMnY99Y4KUGPyU8uU28BUP8jXyAzdfBZvV8cz6XgdP823EhCfmwzrV7DgMf1L1K",
  "key38": "2jhrbfkRngtsDt3VQ31eMK5NqNVDYmcGcFR72PE61ZJM5QJEXgTrdrUfEr3VpsYrNB4zM88Y8ZcBRFmfF5HXbZJm",
  "key39": "4KAMTnD748N76h5Pu3LyauwdKHo65NkKrAuvs38LQPw4nWoVxvDdDfdTXJPiyPGcG1YWHsR6b9scUqMpjhy92gbn",
  "key40": "49ZLqygvoo2ioLk7nLXmLAV43Dft1nDAVRM6EBKkrKs1iPyjnWf95uAfdX2zH68pBaB7dSR5dCQykgTCbiR9UHA",
  "key41": "3CQeJoYLL1C8bARK75ziDy4cQRegLmvC7kzn6L9FhBBQzeVTAoL4vr51t37AKHzR8hdqDCZcCFYoSwvF2SpJS1EJ",
  "key42": "4k2kaoAWXtiXCiB5Kow4SJCDjEFWPnsdfYMRCe5RjwgUsQKkgNWVrsycTPPX56soxAjZT3hi86W2Gs9LqvaFDvML",
  "key43": "5kSzEGEMUXHTsgu5Wswhv7ECq4zWAAAsbkBAnp8uSbchCoiNHfqehwTvBHnbWbehjEiu3jsCX2ZFmAGNaRWSfLht",
  "key44": "5xfbxpuvVJUeaSuDidpo2LaYRojquXiUS5aF9e5zz2xWwHgnWt7PrkZAjEvSC6WqjAtyHCqJe7qBbwKq97PsurPi",
  "key45": "2ZDy4S588uBHf2fUBxCyEp98KR3Ykdjyv9Q6ZUufo57Dni5YCpFMpsvJtw7bdd8xR46DAyTt1F8W417gg8tmYxE9",
  "key46": "5zBScVds8VGRo8qqaXBGR8bnFgctGDWMQSbMBfnxZF5UpKjBdGVADHopjhpk9Q5iYar8CESM3FVgWQVmxHLdtYoV",
  "key47": "3vywr7f8Vaz23DkGBuoYmrhersdkm6vcgYCJqUi3kSaRcmLv6rarysA9thsFzCLrcNLD75dR6qztyTiMY7DYseev",
  "key48": "63E93hnfkWJVNEBW1JjQFJknYXhHqfK1zbftGUTVEih47FjdkvyKoLMUtpw3nNawvpgKZq3noXCWXwzm4mmR1iuH"
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
