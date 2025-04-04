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
    "5cMhi8Tgde7LzxPHUHVwJ8Au1gTHRsSQhFdEYqTLXo7UR1njJt2dgNMD8zq6Deq1UsqWXoGgETnxGNeuA2CTzYuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XqRM7Vdw19fAJ3nDtnpuvEBSuY1sxrRJdHyCk2ccR3RNCMYwMkJeq1JVd8FQEL4Q6HFQwKiDcNPxAKBMjP8ueNg",
  "key1": "2pQFKp5X8PXEvzCv43q9yXtizq3y15Yoz3tv3ro1uNxS2tE2F4GRCiEtDJwRSkbFZmWtttom2bZBZdRk5aNrb6ob",
  "key2": "2KXxv6kGJkzHhnBahsnpSFVyce8DmFMPy4ffDkLri6DuQyfK59iGkxaakPM2AGwCczDEQciW16oocWsD41RjVEoL",
  "key3": "atwNKvPjcy51qL2FKAT9CCkLpAufcj5LtCTDB9zjAZMyVPj9LEuekcYA6GRX2b4iXpkQEiK16kbTyaqw1MS1QTF",
  "key4": "3bhDPabgnHj8swdpfqXHhYS67JX1DdbFjkGgBGxBmZzNra6Qn2h4dayVyNqg8GfNb5vKNxW76nqtuawrQP24upCu",
  "key5": "NnjZrjqXF6VZoGepyKQ1thupg2EUoMS7FAbVGqYuoEqVmTZKWoJ2LzrLCJrUAqgNGhEBinp6UjWjFT8dk7nqUp8",
  "key6": "4pi4pzqfCFwASMeKDo5ouyCGoN7xPbtPJ6MPKuiqpf6ciQypDykJcHu1UAT6H1seeciWToCKVHbhVCQ3oYWgGeoa",
  "key7": "5TqscjgGJtqCkThBnAzyt9gBvNkLD6HT2GwaYTh3Uyee5hAYjEy92xNCyFPLcyx8oFk1U4Fu7j1UCXeGnL5KJDY2",
  "key8": "2i1y8fi4dCtifKXAhhyUjxK8GMRgUxZwku56Mn65hj8c6bH4it9zgMVmaJ9nMurZvj3fH5Fo2QNZbvz5bnqv7Unb",
  "key9": "3Y2Zz1Zv3UUL3yb2zVuFaJfLhWQSjWKUrEpzndw5ze4B1EJhqqH46aojJv59Shfejwjvh2UyNjKL5xxk8Pfkr6kb",
  "key10": "5DGfD1UdoZUWZgSMQfKSLzUWWhHm1yGy4qUbwZV8JueRCVaD8Z6Hp7qsdwCP7LRSWXA4bt9paTqTFkrWHFxycvrs",
  "key11": "3r6Xg5LhaxGbEsVRe74z9NQ4uTW5C8uMA5w278q8P1jST7FafmS3etCRswENHTS3R7vX432MFvDtJJXVEMNsg7ZX",
  "key12": "Qni9mt8jQRXNacqWLM3dvcXY3QgEFN963K4yonqa2MDZurkF2uq7HT3fpzbmZj9y32VHqR7rCqKVYfS4z5F5m7u",
  "key13": "3KezKzzz8R5Npoi7iQuoHmsEX2ExMz1HKXXjvuSgFaHDTJZ8UpPbJKGWxTapiBKREijrggWTtxug71Hj1u6MxCVH",
  "key14": "5aMrygQgtMP5cY3DHuuUzCiaBKYkeBvwbUMsrE7LUscJxJFVeKU2cEShE2Au1itfDoFz2fntH3fXxZkMiCC3YjJH",
  "key15": "5dpTZQgFdHjMjNeGj1Ku4kZpP283brkULVjdgWqCGoqpa5dZ1imUen61HKL9D1pqqeJeV8HYVESjxdpBShCZqgYH",
  "key16": "kTAgpD2Jw8icHe1qVmMY44k8k9jicwREm4Tde2EpZB5QxP3Hru5qvo7MjWvCSQfXwDm9VT6bKF9A1FeYwYL9CoK",
  "key17": "3g9rTvRv1oDRGRDg8UnousJr1diE9ckDsLTHzKNAFiYbyyiLo5eE4paLEsBCRX9ZzoQkqaUF1C7q9ftvicS1pU3",
  "key18": "53A2DmovXGNERCdsFZuDPLK36fcRuGY8BhnvgU6aq5o4UgsCP5h8Q92xT7CWjPR425XqxFRpzYkuYXLhUQ7GkRtL",
  "key19": "Z2hSBhhFFBRmwaKHgAVCM3NqmSGnK9TGk13AtrDS255BG2dJLGE4JoP35CNuHBnTwzL6WkJhEyHcT9yZ3zQkdoL",
  "key20": "LcxYZPdcAYeFPCyU51YCYpFEjNrgXVuG9kDGjt3UutFgLFe2CxU4sUe18CfEuQ1Qtvw1iBuAmCRrxiJ666qCGM1",
  "key21": "22YwMURKw6w7GtZ7syky8uNk4zCJvAPspUjSkP69Pc4KyQD21H7wvKP1jxUraj3mT3oHfAUpAaWGQp9YGuUbNzXY",
  "key22": "3GqRRhsTtsbnbMBag92wcPjitq6iLrikAgvohAX4fEDjhD2ViaQRUSzCM36tJWxT8LQbHKbSGV8suyBQMX6jBc1R",
  "key23": "3kHGCn8eX2Yc89Q5s7L9M49RYyQ6huCiF6HW2QYh6tPvravH6qt6Ersqggw97U3U5KtSRbqLmgRadkMeDg73u8UC",
  "key24": "2WAc6fLup8dpyTGbX7cWHuz8inH413aEZ5K3r6mMF3nUJnKbdcsKe9PjAUxZoZvUC73GzSYRgCor1fJHwFzszBq7",
  "key25": "4nERAwLApSgUth5z5QAzEGzGgYsPpNFMTHWAw1i8uzhp4G5sRkTEh1CN8vtvbYyzYNNiFma95X3w58SgxfqFrPgJ",
  "key26": "2kR6rcChgZaNH3rBvGE2k4mbKSfwTL3mrpU6p96RB9svXVHxgGepnCCzdAzFb6P3CCfuBkvexjmUHJ5hCyht3qgC",
  "key27": "5obMpxkhTmjGPwRJMgNTB8eYQQQKx7XMLnh69opY9SLDpJ9eXJDpy57HtDsNneLE4V1n6Nmt51ZVAw9r5Df71pnw",
  "key28": "mBmy3bcCpiGBsoiPGZgeYcwPLPAMD2uf64EN73UwwZJE5Wdhax6gZA4M62rEq24KLy3gKUrhEFZrgqakucqcv3f",
  "key29": "xknYoF6geDHX2JgWZ21CZVuSXKyy1Q9u9e2G9ZLUfK4v1jvLRmPsikwYGxW71GErDCLama6Sq2mudoN98U8dDRt",
  "key30": "4DfvdEXoaYW1L9xzyurpgkGVApzuKXnTNsyNtSsrfHVBSiB4Muoghj5y7PijJPbkWcFPqYjgjfX18Y8NP6Eiagek",
  "key31": "4mSECiKQkfzRUBzpmRoNKkVTpoyqxj3c7yCR9D64Q2nDNTxEUgbRSoU8P2TwGLMh8ovgRRWRYcAYzhLGkryDTmQV",
  "key32": "YL5ceqf5A1tQfxC8DXDh4WfJEgZHL9tFTucfdZcXZt7yFkyhvd7fXTbtuqZdng6NyCgrJxswyVSueubs8MkN8TU",
  "key33": "j3ExyxDpJTYgGmsFgDQTJHqoqsaDf7hwVPFNrTWrGrQHRNREKukeniHF8XNuwdoETCqmExofEpUkEYPe3uWXcxp",
  "key34": "d1jgakkc2KVj3RRoVcv1iAhVQ5yWcLwbFikXtMACjdctni2ezJFg216a5AbsyyK2cLs8EuGb7qmNZNNJvqWfGjA",
  "key35": "3tcRykXwzoLs8bPKtzSvp5xg7yQV7zweyonM7ST3abDBLG5jpB152CWh6ijr5X5QPxWB9azjQW5rTT3HYwm3ntsp",
  "key36": "31hMsvrpTju2zCfq4cAoaZF6PuL2xixVJDRQnR7DNoYrQTYrTcp7P6yR9tcgVsvfk27qGAibk3jGW42c7niKD1wB",
  "key37": "3ZqwDB6fJe3UFq26R6jNcoj6h4z9hv29KWwggSQJUZHMvQJcb26FB5SCsbM3W6GyRkQMaowWNMMSj8xaEtixsRUk",
  "key38": "2JYGKjEPBizcerTVRKVnowqzjW1KVmDuNWDF7dHU3cvsJ4Nciu3eKwwLTBmc4xT6zgaR1rnXu6yh7a9Z4c6W49wH",
  "key39": "3VPrSZxQ53bsnwp6RW9RpznBcFvYwUgR9YnSJuJFcuiEeDr4jXcSDhriRbc3JQQP7qDvUem68TcX5GWXUPa4bcvP",
  "key40": "2WLpZPaKn4xkG2pQp4EyL4Z1MiTovzQ2oDEmnNmwkLjrvkfYJrUGKd8o8c3ETa8Dhf12wPgSEoXYFrVJu1SWgjDH",
  "key41": "3Xuuz1rDa1sEMjiJUvbSHPR45w7VjJtVsorj7oAd9FCXTcpoyxNi3PB8pcu8Av9RoGjzDqK1cPWGQHv7qBoYD9hh",
  "key42": "4GVngrUUf8zfBBzm71Wvs4cZ6nu1mQBp4jNPVRy3ZsF4PpdFXbpTXuFxwKUjAboB8WE13oSY4NcviC9pSmbcqThB",
  "key43": "pMcopcHJtscCPBZ9bHRGHbzQJcWkGK9L4ZSU8zx7hihjF5x3kkEM5BUMv9jZHFWicZgVyqwRnvq5vvUHJfojP3Q",
  "key44": "5goy6EDR8576Kbz5YZidZaqkcKHpeBmg3kyu9crqUCyyjRUAEaHo7Bsv2KUN5vZCKABViSBqMAPYRTb9XTZrrdyZ",
  "key45": "KNikJXwSo32p1yAeM5dAutUgj87DEMXehpGLJqHUS78pbELTU6SLAC8joQ46Z64pnAZ2SWF7cuBpM8tAzwZp23C"
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
