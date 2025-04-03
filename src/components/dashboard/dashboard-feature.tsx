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
    "3d5ZfmQPU7YbRrKuHjmAoTvs9GMVQPrGNamQfdRwi4VX6fdqR9CGyUQwwEx8Yf73L1cYPYUAskv2JtSffE5SYRt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hYFncDu3qyxVHwVfUsaEzVJ5wmDmZjEhrpypKKvYSDaEJW9sSLec1anuW4iqw6Pd99tymstjRBrPgJRwkR7fpu5",
  "key1": "2PQop8n5HVFPUHhF6MDmRGzUJ6Xitcn3ibZjQWdygvcA4d8UMew3LwWijyF9GADUjVuuQWeoMdCBXZ1e4US3GNoV",
  "key2": "XkBDtF6RyEBnrANUTUjTdXWKR2VtVrzViNmCAKMqreA5ACekBqt2QVyR4A6atXUga61ktpreS5hoV15821SayR9",
  "key3": "45TT3twT7tXYAHoUGaKTT8mDbfuB3umyFsYUPYBkzT6hXaowmqpetKYaGw5AdroSCVCeA739Z1ZDmcryWUsc2bkq",
  "key4": "3dnjuhsJ3uQVb4QQJyHZzQCU8qJsMvxP5Gn1krJkpD7GBN8f38RvGHNNW9QsSV9tAEi2y6iRDhrdaHYcHzNHZBxh",
  "key5": "2thdUdjmEknUppv94tDSPZm7dEEfJDAVutfttQyckeAZQeFpvpQe2z3BWVVat4BXQkkqGMznLL1NLePRnjssHRfG",
  "key6": "4V8o85cw8mtUKcq3oKZCYivTu3ioktZYCofTjEv1ot3e7h9Z4hr7WQqtzzgTLQsNRKuZYFNqaz5GfrSy7af9y5YN",
  "key7": "Ecd49ZspoTcwbf3LSR2AUKUVgspuMAE9ReMmNTsWPSqVirYdrFwQUEuY2tjK2MjHvZCAayf8t4GB4AhfPWPhLhK",
  "key8": "5wjXMdVwYYDgnkUzs1dVGeyQj4JA3ZPNUBA4xiQJFjWCwuyD4DvyNrkmJLvgeFQue3p8n28dUFuBxcHaQVQWnp5s",
  "key9": "3VRz49EhSXkLwDgwceXMmUbYtAKurzCjJkN6Y3gdMjQCRQcgMBCp8WgHBj14czmaVW63SpcbsJ75eG7m244fdGe2",
  "key10": "3JJg8Jngs8ptNAwLDKJNxr4Tp3SwDGsM2Fic1yFWn5Dp3rMsyYTaB9y1KUS4gZeK1HJY5HSAbWZ8ApY54ihhA7nS",
  "key11": "4RCbjHVVYqggBSfKxU9Df6bgCwUVwDgspZ1MN4SapZdbu1Agcwn5HLS6XP9QGfkRomT3tBxJszQNJyDGEtQSJ6im",
  "key12": "5TsCK4s6K5TH1nekXGqvfMETwQ35TJRru73DpBk3HxWBrnsjYFeYSQRgTCkdyRJyu9RakK4D66YW46pGJ8P7XSb",
  "key13": "5cLt7rW9khKaNsgcyP3cyXfnG2BiD5HFnki8tMmcwicG7vUmpn2F5tA5ev4CjA9TjCsqYz6PYsXwco45j2i2DKZa",
  "key14": "AF4eJnzkFuY6L9BhT5cootnnPuDNYE9fAByMKjhwvnPz6N82F8cPbqiTMSsEofkCupLV5xJa8eyHKXeverKaX6M",
  "key15": "33aHfNv6NWh9ueLeNKEdpK3jC2VVxZJ23QXPsLCo6SD57htTxuV9zvaRWW3KoJrpw24SqDxZYqnAMtomqMwU5iHv",
  "key16": "25Vr4igJdYvGNiddP8sciNbqZwVwwUKcsthssMUweAHVgnumSTt3whJuF4X2EoUHqxqds7epmDkB64xEiPRuyL3c",
  "key17": "2wxEWEvBCV3NVNumk51iUXrXhYD6aMGumAe8E4iw7tno6xFfnyG2aLMqeBofQVc8pNqNGjbjBmejmYp32HZuzxop",
  "key18": "5Ai6dVdhDAfjw1Ys7D5FGat8KkmyAeX6djaUhhfZkzoKHEq1ieuVMwt3x8ybDBbacBF5QEiCpPDCi5fAMikvuvcV",
  "key19": "4DUDg9D39HCUqNzQKUVvtNkv4eK9xA74nse3xGaNzat9AYjvpHVpSpUyNy2nLi8ZxCjF3MY23XnkcuHjDGdoM7UJ",
  "key20": "25KmeeCcZRjCV9uWim8kWHzgCR6gzzVQeA7nhYyknGL99Msgj3sVtWR65BEw25SQPG9LGruDDkWiXJ7sDNcmEauJ",
  "key21": "6dsT2gT31pjDKaZkJUjWNRcbKc1ipzWtPoVMkpceicczEjun2ZaMc34fXkE77g3c19LuyAajSRaKwY8fqcCTpnf",
  "key22": "37nSVQFQ2TmqxyuaEZcPWY9yBsEgypy1YK3zwVbNUMMQrrqpmtnzmux1fSrCr2CJXRgu7PQZ5HyYeQiHrcm9hq23",
  "key23": "vKR4NpGRC4NYWBH9dmGsTK1DhJuibo84azp8iaQjdGXKvgJK8HUtBsvNYXNw3imyJvxebrsh9Jj3hK6i2aXibgf",
  "key24": "3mzaZzTEeDmB6X6p1rYbeY1AwuJHZf1V7V4wrwqRnHe67qPdxfrRba7oDHgdTA4KiDAznVm5CL7tD7kkXyiLVAUG",
  "key25": "43snGD2e75UNciKjtb8e7q1jyuBkeqFRBHpXvmXaBkJjkQJYLHotGdwMeHUnoYC9iFojLEBeswLeBL3cBwEs27hb",
  "key26": "xr8294xAT2wJh3BBaoSujEbsEwgcmfzyP4rPNYhJujQxeNLyuh9htkjSQFJydz6uhbcwmM4YCBriZpFpjyQo2RX",
  "key27": "5jZPRJaS3q5HqVHyAnyABUySfcgB6ybSHNyVw8Ef6cixN1g9rghPwkagVQ9SQqHMWeT6JdyjxPtQUeY4pd2f2AHt",
  "key28": "4Rh3xQ9phxiuCMU1x82do2ZNwPRwYm1aimFGiZQihtNkDjL2EfHEcBFtzAGvzmgSTYQzB4pBzc2PNFB6TkNBH2r9",
  "key29": "3NWXUK7KAoWP35SVfQ5jnJRCWmiB9VMuU9GLShchkQqr36zDUvqso5SiR7T5SdguGWgky65QfCeHK28JsbShRYLn",
  "key30": "4fpumE7Rp79ZenepchZ4Rgh4Bj7QPKAaXQWmiWbQtb81dGihQpNErXSLJHbm2Sy2YsBzRixbmUhwoxRNKqnjRntd",
  "key31": "ko3sQ8tUBuVmGA1Z1bsfM81UjSz6HfUaARy7dY5CtkaBrZmZRY4hghECA4dJv95d1Wc4AfxfZXbdmbeomXu8jP7",
  "key32": "3WiZsgwkpKuH79mH2rWCoiXNh8DXkgpH4T6edZvnfTiLnLZg9JqXz7qtnXLgqrs9DG8DgdmcP7beXQpkx1ecoZ2B",
  "key33": "32FQmZfXz3e6nJtBA5Fo7pJz7MQsy7YSCx1U5iMPc6hwcr6anDySbj7TmAB4UDZUKfx26mfhKUEDsUd57moXm99k",
  "key34": "64GpFH91RcaSfv8zcXjGegaRehygEHau1YZxNYan6sQAYHrv61F7zUqyrYzNHpgL4ak26jG3NiSyMf1QgKuSRww5",
  "key35": "59VjFBw7BjFjetnfF1fgyo3bpcrptJjwWPFMN1kWwwytNsPJgC4hpiQqkg2PyghUG3CD2o2hxpQh7WFVueURUA9Z",
  "key36": "4qzS6Xe4fF7QFShrCbzLhTJzEpkJF5wCvo2QtdPmp7JqucL5EZgTVkNyZChKWpnunqL4NfrPGam58oEv1HVAfs6C",
  "key37": "5tmcfELYenJ9aaTwQbN1ekxdQZAqz4GieoxiSNREFCYjU4S99mWNuWRnmyVb7jVFQskbP3ZpxB4FLzkh4xRQkfuh",
  "key38": "yHn95fPewuXb3m2rwVXQ9uMniQ38ZQZNkb515BYv3bmXABtAMaYPTXuVQSnsBV6oUzhtdJV4AoXVVWL9JJDQrAh",
  "key39": "2aELooc2K9D3TMRLVo3dvL9SrE8hZfbFcN348uMa1NRYGSHtA1kCTg2yNNNA4u5ASL2AGz5BxnBMXwDZo1UD7z5X",
  "key40": "42FFwW6BGCAxZbsPCxVuTJWYAHhVLRduVqYv1gCsWQ4t5Fdt4Ch2FYMdoqqvW5rN14UMSxbuB5VA9xxLRcjQFR9L",
  "key41": "5ddkUredzLQi7unitKqHm4MHQQJhqnA58bGYTe8rxzA2cBNiqn625Cz2ZFKttGWWdm5Rh1LZ99AUyyKY14gGdkAW",
  "key42": "2bKYZRfZSNhXoZbfoueGEDMRqbJhuRchCmKkG5mAPdtvBr8uX9Hv3aMdQLU8P76RakKuxMZTrkm6jx4SHPjtbXnV",
  "key43": "fQSEBkkYmdUmE94Z1RLL4gbmKZEWjEUmrc8BybpfzWUZoJSmWBJBjtAqLxMubvJh32gWVsgzRM3fRWY67vCus5S",
  "key44": "2TCDLGnX6sV2UDgtDXyM2CakgMWwAAEFPWkre3JHVCxrAYJzhjwTSmoDfVa5kP3wxVgcm67aQffZnuFcLKEnad9e",
  "key45": "3a6ahs6TLMse8ZxNLjaCZNrMzLLPQKGvkLyz7n9nXeaxUEagQL1to8CGy1VjcGq55cgwBkit1bkxmBvz1Y4eftXL"
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
