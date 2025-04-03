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
    "5uY4Dx79TyMfhF8938zLnjPM3Ke19hzs72kW7EM4NpFgBgViw61VCGXnoNVev8abkkzV8RbNLwCR9h3S25f2kULw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V4jAnGanikHsA1gpcxZKkGGvMLrcv4QPhMD7yymLfP1BxiDsx5z4BmKcquNRT33KMqdUrGvxxjkJPmsSAPApnww",
  "key1": "4dXSQiSw6WQsPaUCcMGrBg7zMq72F3ZfmUF6SF8HVapxQNptZRP4EjGG1wMJPKoFQhnVdsf3p1AjbWY5nLnigwhB",
  "key2": "5fDkkzqER1C75tCCJtAkEw4DNwz898uHbMZRsZ2daGN943e9VA4nJw5EnrhTMaeQHFsieEDwxUDqgLHSJe45yrEE",
  "key3": "4ru66VWFtvphUz5pRHwh1yqKkpbnfLVyV2Koi76PF8KXzjk8vhFP9GGYF4LsrqR7D6zLJvRNUVivSpwfkuLaYdz5",
  "key4": "3Q8aQoPo5nEmqV65nto8W5npk3WchtD5TV5iSBvQhDjHnBGcdXTVWQaAHXP1wr5HUFBo4eVvBfFK2nvF6JcSARMd",
  "key5": "4tc8PUuD71kX85ry49oEKngywwYVY5faX6b8vhq6iSV6kDskibjnRmFxuwQAJkp7B9gVxALY3NccQAXe5gkLNvsz",
  "key6": "3nQU2bCpBvKLVZScy6Y69pphvZACuKrhaR4QhN5Q7xzdEgVjWXYcTMmFdhsLWDM9XEfaZEeP4wYsFZMo1T1GV5Ad",
  "key7": "4p1MDfakK6XWBfgEeUt7PGS6CVJgqhFDKMi5D84AzZBmZvVXZnMmzxfmTsTx4cKX5s4r8nWbA86tmSKDH5HCPRfg",
  "key8": "3QoT4dK4zStaZf5k6Fx66d16DKXEn7HE8yVUYUr5VxnFd5rczG8e7WpkAZ7bAc8GzYiw7fa5GrM16bQFFGuFJgM7",
  "key9": "47Kz8f3WPhYUoGWb5zJfjp2AEs3NbY4eSJVbZKBj98YsDmv7CvqTBM3hVorY8WRqm2Sm8gnLeYMZGwGGFj6SSxu5",
  "key10": "4iYbU47XbXmfKwcHUXdFuinLqL7e24FgUroC5FNUZFNmqr6KMiFMHEhn6kPz6yz3Wf2EpyTQyZtmwUL8QTo3LTW1",
  "key11": "3hzaACuMgeXJrajs1tRt79GvLu4xEoLwR6vMHHaYhgtNN4RoBgHLti5Tty4aMiFb9JsDuV9YYd7Ke1vvMtgPrdPJ",
  "key12": "16TU4eN2W9U1XscfFdEBhMQ2arUfQEgxDaWzqTATLHEWzum3tZAfSRsPYrBM5BCpK5Zq3y3thJeoSsmQx4CTZ3U",
  "key13": "47vhkGS2LhVmjSKW1Cai6VonFC51VQsqnucxNK6XBpCowYDR7aZ9fiR2w7auKwFeL59Kdfj1NCxVWKv5zvcGwedL",
  "key14": "4LKkvwMenegAm4wrWxt8CC1EKyfcERoodFBEVDbxismKRbnR4xqV1otky5Cib8gBavafg32dUk3djoMxShbNkCGx",
  "key15": "43E8CWRVLbc4D9eQVXVVkLubALMNkj6bTuiQ4Rg1tAeoGtcX6eemMEsZdHqrs2qXqo1oXoKEv7JLRMF6xViAYrGX",
  "key16": "BGDDpn8V8PrYxNJT6rdcCj8Ccc1s6UXDVJCwE6mr9rmiCzohjRNu2eTDGULNKXz573crLsYkfJ9mPVR6RCEYCjg",
  "key17": "E1hDY1dgGkrZfyAeDL72UTnR999Pd8z8w4P8BhD3MJbzjR5PmJSCFdRi816aG9FZ9EJWnNMP89q3gBJmQks3BrC",
  "key18": "5WDqpb8CcZpRstiMA1jrdJXvTxMQn4rfs8knWSJA2qGaKQ8u6m89M5YXDHBD7HunLh4hrYPWfRGb6rYQ2TGZqH4D",
  "key19": "np1PtSFCjeeAjipwSDXHxUBZFtvyLBK7Vseb4gcSor4r7G43ozZx3VeLUy5KvDShrpVxW4Jt7rtHqHjvkynoejm",
  "key20": "4DSPWLykdVFKCXzC6LSjtyFucjkaujyBLydaCMqNbSGEWN3Amste2WCzQx7hngJtNiTdztRiw12vB8WedKNXNQiY",
  "key21": "2QfX6XrYPBYKhMUdDQkmoqkD99UUkFv4SgHdG8fueeUHtjUyJWCJ86Raok9LSntBZeBHzwncNKsAHr4rw7ZQ82vA",
  "key22": "4wWQE632J6gg697SPgRf5U6hNSqGiGNybzcxwfaZLjqUXA99daFZAC4SDWv5uwg8cqjwHnHAvA8uvUVJMCdsoeSn",
  "key23": "4uDi5REuvUkR2qYVnxi1pvKRbJzLYDyTRHWpur8bk8fQr7iTcfX1wSRGGAv2JQu7vu4E6cUtTRNM2AfrnUvziXoF",
  "key24": "5thgLzMGN7zuy4a2vdB618d4Z7AeQhJmtLdxLms9jsqg7dyT2C57MAVSdNdKHy6yM9VyBSWiHyCW1Vra8V9aWyw1",
  "key25": "2CkLBApWqrTHnXTf5M3ueeG7gfShK5JghMnEMjjbsiPWq2osZDFd3fKvafqsEUDWkBb9rw5fWeVrTL2r8J2ds6P5",
  "key26": "5HgsUerGfyVUuzXRXS5orKo6r7EHT3Y1YWDW4Zed9SCKUyyEkAqNgBRVRanY3gQWGBoCJhVjMSe2HPcbWPkdjKS4",
  "key27": "3Rycu7KLUyLC2TUYZ8QC1QcjN4xc578Uo4fVXAwqdZViYD5tc3Xu7zFCdvwMaBFYmd5Mpc7PdmuT4zDF9yRTcHMs",
  "key28": "3Yv851BagzZJZAZvCDmHvFa6mprwJiXW9nmhpnS5URQPguTqKsoqk9XDTKwPWpnFmDjMVcZJWPEZvYA7SWVmNMoX",
  "key29": "3uY4RuTaUrRpjc2ofUKJvwBEQEDUGahz3dhbmT1kkmaAUYUm8W5YS8EeM83roYR98hjg6LKvuBjag9ggkWPvhuN9",
  "key30": "4m5UtwXxVNDXjFFSJ4W2b4Cwjz87rm4eqyWret3Awmpf5vmhccpUdPvrn7Mt23ScJdRk9qEn8XUT9R2wU6ayVQkQ",
  "key31": "2zeUeRMA8ATyPD5bvk2GJSNPRN2ifuePyQ7jTCgCMbNQiPyfGy9ovknUCLSHMiUbCfp7vTzMM9W4ACTm2LHknyYK",
  "key32": "4FXv337xakCZM6upRNK2NqKiT2ZRdZmZBgsUFct5v78nYzxPPc3gvKzLXt8PpoNPBQGRwMG8tb4H6ZH8wgPekZA3",
  "key33": "4MygJ6Py47exT39pWWaNHZUScgcjH6NQ1WSsg5KVeBmWBMk6Suv9f2d9oWim95oJ1hJaKA6fgUdrTMtfjLnJQnpM",
  "key34": "5wHHUV1JEV5sGiK6tAQxhE8vri9eEASJs3bNUeCvQj81ErXxGhdVbNsShtF1Tj2ZDCDF6hMkXrsQL1x2nRJ3bzdG",
  "key35": "4oVyvnhF5HKMQwvsyAXKYXWfb7CPdUyo2ner6zwcTAF4nQS8nbmjH4PgF6azvt957sJ1psys126FQvU6mDxmx7B5",
  "key36": "3VrAeTg1dCwoznEJySeb6rDoaNseucz6D9euAoVYAX9U1SjoTReR2thaU9PiKmFDTzHQaUXEHXYR1xEMkpw6AKWG",
  "key37": "siiFDorXE7jQcNhMy9VVSWGuojgPtXSGyvB2GYcq7Lav4DwwyfgxVnEL6obaUS1YaLkGWKJiFtN56HwpQDUp6tc",
  "key38": "514JUp76nw7ZgZb7WuYA1Uxm8Ue4BogH3gbxERXNt8rA17eMCg86ToW6xeRR9KaNaHuSYBLzPhtsJ7UpZb8mCxHC",
  "key39": "5VFb5Ac3UQsWenhLX7qYvZv3DqWxYN411fZyjMWAFDXmBrf7vifbVC8akf28gGFQ3M2aQ3CNgzW9kpnBghKjBVBY",
  "key40": "4YdJRQpFsTLSqawYdykrworCiEWhoygiPhaybU4efBEkBKUvLeuQN5muwDutFUovAoJLcyr8Pojmm95buZPCZYAf",
  "key41": "2MDo1epx8ZiF1B1rCRoXiUvPdo8vjqKrwcc6Fas73ti8CZRrJDuNiUBJjN1oiVEactaUXkMaS4yzh2eSs4YtaHaR",
  "key42": "e8DzA6QnApfLhJQXvxy6QSEuUmtnKbUSHKBwpSuaM437SZZZTLvpDXfYYFKeYmXDgifVx1HtqwRAkutSMZFQw13",
  "key43": "yxpRxhTneUZHDLafG8ZXkE4KGj37Hj6gCRn43yLBiycV1WqCrG2NW2VjXcwAXZqLL5qpBjUnoLtFcsbav197YKq",
  "key44": "nVhTBipQhPDYyBHWdaaDAPRiuyqyHRZrgJtUdmC6Fcp8jqgd2w2tGGVQWfYC5h6BNERForBXzpJbX8wrMEVExSm"
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
