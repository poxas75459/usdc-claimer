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
    "2tZVuBca4Hv6tFcEh646DxVJPHkbDZybvJcfXEPkg6VmT1Cy31QGYt4bEzhkuXeZcrTqRDD4axHUG5e3LLA8oCmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B8vrVnu1RTjW42h9cptdaTjWcvwfB7bpxzbygUBU8cMrvL4KDCMrxzWPbCUonxFvcgKtWVQEYa6v7eqZqZ8jYxj",
  "key1": "2oyRTWwawMTfQvZDcRDE31q5s3xLqUTQKxZ6PPWdVnJb3dpfj3tsyZvpAeo5RnuHaf3ueNuFqeqpkD7a1z54Zg62",
  "key2": "3soo5t4F9j8HWirNQYtMamrfBiqbqj7o8q38gZYnNaZHZyE8vNLEFRcfWp8zF1zK2eSaaqx5LRdAPAutZZhuchQY",
  "key3": "5Q7LtpTfDCYJSMNEtKRRpsJfQVYaSkUvFP6971Lxwu6nXtkXENKyirUnjCsrHCT7dxFetrDDZSmUp2B7ZRayW7dU",
  "key4": "LeHw5HpzvzbJf7pQUSEiyAXcp8pV3FJgBGWfi9NDW1ancYaqjaNzSAJADsggceEXXC3o1aYiVt6gQeJBydv9gqW",
  "key5": "3EWq68qTfcocEobwuWEvHvbfPhc9iRz4wguuDowbBdSTGpaqcYwTvC1LWP8UAtLncaZYhBwQVUuUavd1JLApFr5z",
  "key6": "4xpTwPhhYsA9sCL9NY96Q9Do7LGeDAFK1xdznqihX7CS5yXWPJ9TjyaEfFDj5gG9PrWQFUmEYzeKmpHk5FdfRW9q",
  "key7": "52DfCsVJ7rXGSw3rM2RfnFt141JS1jXSuuGTzvzuCv6YASLNgtNALBsWtne1qKQdp5nBZwPbMhRzPRojFNrgzfxd",
  "key8": "4GqxY9VorKZmRFxdM86KK4AtaaDXAtpxhsgKNBoKoTZuwmM2jcWzLc7DMATC2AjXrCeTAtyrN7LucAuwy2NUqQqf",
  "key9": "4nQoSuzQbkMJMYRhTBTaTpqZKSmJck4W6GDmVt142N8m61hdu65RK9Qi56ktnzK7BBNLZL15hH5zN4piQBxNWP7X",
  "key10": "3i2vRuuCrv9v7g9yP82jV5q5fXuhNrkGE97gnnd9Y9CvXWKTaVoz9c1Yjm6mSpgdfL8m6aL8p7qzh2DoHzK4Ai52",
  "key11": "3aaibL3NP4C817nWjeKd2UGdpzABj5k4xw7oHGFEhFCNTB6g7vVek7nWCgkX9914DLphybszWkTa8mmCWU9sKhfp",
  "key12": "3fgzAnrgLMe4z48gDsNFbqkecqFZAHEi249YB2Fv1vxLVdun66f7UFLgHkPfrHyuPpozZ2jD4EkCusqqmLh1McT4",
  "key13": "atB6wzsG73XRGVTdrWVcguksB7dTNwUzagW9oQH1LG9nKcEDQhsf33t5dDiVm7cShFVwsm8pXw26Hd8HHxYLUoM",
  "key14": "5PSwU55DQidC6eDa2TpRTgJqe6dQ5nAcBbWPJpdKE8a9CxcA9GbQHYoZxjXprf6ovkBwLHWdYid1TpvgoRa9XymR",
  "key15": "41ZrqJXjW3jNA9UrYJZirwvWKG1YS6KxXZQz13MNH6e6kcfz11zSZBLSABDnTxFqA8cm3Grubfp8of7YuHVrMakw",
  "key16": "4sr761dpHsospZymzrdiYQ63LJzUNw5r7bE1acwLyvdpLmJVJ2pu32zNTyaa7EpjbXDoVYyEqiptZmyYAraApLM4",
  "key17": "ygpEeYbP6STY4RtD7oy1pM1uTrkKxHmyAX3RKL9YyVH5LDQcQU8w7GC4KH1SLMQB7hGvFp8L21hfk9p7KkseTxg",
  "key18": "6ucjaDAH1BRBjQfAcDVFgX8kTHmCwXs96nK4C4qaVo4aC8JNCZdkpSsP3vGNsAH93FNES2e2c2EmNhRouiGF573",
  "key19": "5hm8W8ZQv84EVC7JktA8oi2SrNXaXB2w8sUjF3CG9ZUezo6cFia5BNaKAyqjoWyLjMCqrWqymseeKKSTHPZxkzSe",
  "key20": "5UZBkXqkZ4vAXP5u8FYEktnjcPnjQuvmyZeMwJC6YsZk9sUKsmptQVfVRd8SvTLW1PtyuG5DbfJGrWToTeTBs8Ew",
  "key21": "55r4aJVus2E9uwF61ckBJk7UefpCTRy6prRfAznzyEkP592vRFoPnJVpGmqncoSE4aCcz2fTcoWmkymG3KMBorHM",
  "key22": "4cGxmUG7VdbcvN6G1iLZi8Zx33CmLn2RWigWEtcRyZkisHgHVC7mkcKcKFWC28q6xWZNtWg3m2H2yjdvjmJfFTaP",
  "key23": "2uL9ADnKePuqnyk7aVhJJFuRctiUkU1MCGztQd3nhHds1jeR397KjDtNMsv8r8ptEEDhXtzy38HNDpBDVhK3tNri",
  "key24": "3WiAEZUTzu9kEKwVLwmkgjY2CbW9tui1EDFWuHZxb48yXDPvppB88JF4bpYwktKbrVSxFoC9duXiG16b3XUBnD7T",
  "key25": "54ufp68yWefx9QE1uAECgj8Y1cCWHzQWWGdpHo4iNXnxD5S7zX8B7GZfwKdD6mz6G7ZT7kneF7V3Dr79nL73NZk3",
  "key26": "2SPAxGxJ6ZUxRwXDKtr1vohCwPqtoG6BT36rDT3XaeAiJUMJV6AWQY2hFxD7VB5J2yxZkMytigga1Q24eerE2tSj",
  "key27": "2ZBVkGwXBBAaZgfC9YiSrG4StRWm8C8R6knEH2BvLaXFP6LTA39ARkZhMSVxvmRKMqq74nbzS1gZvBf6iVNPDj7J",
  "key28": "3Qe1kTju3bZWg4AWWehuvpxe7tHLzGkDukYzFGj6tg9pHzFEkBWsnyFphgY4EotUxTWMMt6NS1qqBV1CDgNgZUG",
  "key29": "3R9u28A7t88MmTv1WmPH2T1QiJ2gREyyzoVmREwweJ1cB9eTEzVeeC2zdfdSag3CD7AvRiZhjuCKErRVBYjzS8PW",
  "key30": "4rMKbJ6CV938SDuZzVL3WTkWGuVi1x5xGy26ixdW1gZgWCTzkcCDg4BXdFrEUzzYmS7k7hzm1fmRsEsWqzNfMU55",
  "key31": "647k2qk3QKcdXtZ4X71ZYm6oh6eKhSzudkS3AM6hhMrpw1EtfNmKK1Te53YNGtEzwXCLwwNFf9qgHJfWdNek1ZGC",
  "key32": "4VfdqD4AMeMmUNwLw6KWJV9zXPiyLh3hnSfKPPktNvAHWaQX6Xp5QaktLrSDu7GTa83VcoLPy6tUQ5N9h4QFzSMS",
  "key33": "sbTNiWRCvhrz5F1UHKtUHibzsFDctCJi7tSP5aL4Dv8prYo2GTGaHJeSb5PUqTfAX4XQmh6YsStyPamU5idVp21",
  "key34": "4a29BMPM6YMLtDDV2gqYBMeHnLxsXzsdRmcC1tru1ckXTQUj3sjV8r5FSaPHTbP8UZe5GUk6nq1YoTvi84geSj3Q",
  "key35": "41Js4gwEwn9xn8mWVp7BcL83ur4kc1f4mtz8VE6iZdf7SqCmc8yJvyWqeuc3LH8nTWcZG6SGrmyLjzE1mt95L1o2",
  "key36": "42HPxXU7DvW8DAKoqsxKALtwpNbQKq7B8wApTjEaLuyLkNnGDSsohfU6nMEJiTEvoj8upQB2zpUspcrZ9xKDzaqz",
  "key37": "3ZDWbcto8yVKhr2Aq8kW9DKojSKzGdhf2tAzx8BCVYuEaTgdzrW1PeY9gpn5DmWTTijb4dFqP7yN4ehUV2fn1zpW",
  "key38": "24GjW8awYnV2wcGxvTMASETNu4AcNMEHTkdcqrofU5Sm5uTKsqfXn5qQidcarFgVCKTp9TMN3j2YjkHg7JNuw5pX",
  "key39": "4jPyLju5B3ifFGArRxQE5zach9gRUxT5kTddrimtpEoExWZPyp7ToHZ8GWyHD6Kfi8ZzA2pAMnN7YsKcyvq9xha6",
  "key40": "3HSbo5djgWSSXYn99RB9B4jdFZ5ATXUquYwVysbbx2Ha4hQip2R2qUzU2tf2YhCmyKLMtJ8n2GMHvkTFk6mqKAcz",
  "key41": "4AGB63BzsjYzHNAadRUusShj97w5JzTjKF2J91qj4jM5sKsqvVaJLe6GGZvQ6thKzaByh289cxj5tY6AWttubtrw",
  "key42": "33jqDkhYxqrrYLe2wFBU3NNuxaSXBie2kGwsyTXFNkFgj39zGEaufwkrAUjzo4Ud35wYHr3BKaoxtyzMHmdVXEZt",
  "key43": "4PvzwT3o6LYeLy53aiS7xKmCwp87Gnahgs2TxEyjPA53WjiAWv8ksJBn9MeDu4TERcegYZZCeM6fuJpTcknc5LRX",
  "key44": "5pzGomp3FoPEvhwYq7oNr6LVgD9x8c5UThpEtDpAVP9NrjMqrDfvNNbPeqqynA9aDWJoEcS58mcqzixTrWXMcLFu",
  "key45": "3UpSs5cVa7UnJP6iYBFaHgfpjBZMhtkFgjVs6nHiJaoPWNRygY9o8MiyRJRYrRWFfzGEDJZxRhPBgBTq84PXcFbQ",
  "key46": "4JAQkjokW3KLrFHDcv3A7XNKmwX4nVVayzyepZ82ZyNmDJCybo4JZpmy2S7obUTSokdhyzcyn7bsit3hqJ2f9mWj",
  "key47": "4n3f1omb4aAyzEWiwphk48zWeqsGFNYQk5Q867evLNjmLw9qLXP3ePp22f46qiPEXcovhdfT5LWUX5b2ZL2SrPAK",
  "key48": "2LMdQ8CADzFLVXUAciKidTrzX3yCH3TFYbymD6USniUABnpuQYozmNqBCE67U6AB1PHUVufX43sKFqy9BkhTfaHV",
  "key49": "4T9aXX9oK8Dcd5A1Jnmp5XDETgw5Vv2eAgMns7nFLS3PrjjUUq4XUDUBCpFu3RxQqo64sdqmnhujVBxR1cjN4kfq"
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
