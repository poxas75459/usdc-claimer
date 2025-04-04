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
    "Aoy52aWHaVBo8tHedk1Bz3Ad6UwRMS7CbZGhwdnaCkevso7triVmiKLkwq7NAnve2YdVBNvKrKL6LTN4SZACckh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3hrD38zLKtSSL5TAxPzEfpKtsauGvuQbYXncMRkHvzSSajfV9L4JqbNVVi3ZTQy6XZEnAveCsdbS5hhTiosRqH",
  "key1": "27c2STAoGjfJUbUAtEDqKhZCQsa6Bbp484yfYcfQTdteeDWQgJUH8jeYKu2eEMQq8nxSFM9YmYzBJ1ZLMuCFoK3U",
  "key2": "4cvxEHTkMW81vxau8ce5VHuJE63Lu674GTjpV1v1JGgkc9w1nmpsq1k8FeMBUMCSj1U1tjoBPRPfcJmgDEZPK1jE",
  "key3": "8vxcseuA4MdcRn38iHXFWPDwEdsLoAiY3vebr8paKSRY9nbcKQuwX937DL69bY2JRGEQo9E514RicwW8caSrMVE",
  "key4": "4fZrKiwKPRFatEajAcvBULSrjxmkQkUaCLqzZx9LKArZc5VKF5TytKR6F3d6Ah1guQd5wwRQ7iWiigZ5g3pdaxW9",
  "key5": "2dj13PLKaVJxLJgCXgV7PzpXomYtoex9a6MTADnYYUoSz49y42XjMN1Rsvppvx1zZqcVDkB4niE1hrhhFVWnCoVF",
  "key6": "5JbmeeE52v7Nia2ZW8t973oD2GUTB5p3njxvxb3feGvbuDcy7QYrATQUT9tBpKHziE2zdVsB6ZoqSU7xzFc14wDp",
  "key7": "32byN9b73K5hD4hyZRcsEpYH6Fz1vRvoKgZMt7g8BKvoWThJf9njwWCw5ia9fouyXwHtGSuwzmEmMLrdZqdAjqqR",
  "key8": "4Nqdz1MKj75YxczpgjydLDv67RY5s2Qs1hjXVTYhSd1Hy38j1Qwi7dMKXvA9GJG4LXEzQLWZmBuhz8tBHC3cqbgw",
  "key9": "4iEVsse9M1PSoRmEwch4WHh1JXQsnMjAvSD7PmqBu2N3rvgPBLSWepYMK4VE6pMtFdtdTPnqrMNPf9kBS5tbBWg9",
  "key10": "3kQCQLysDiqMgZEyMQxqiUKsB8ou6D7BrB4pQuNaQosGrZoRMAkTvDvFkLSNnqk13tg6HoXe9VWYjDZtC8cAKXhD",
  "key11": "46ntaek1BSJpWR7Am7esewxQ7A32eMc8cbua7594FGAyQUwFASH8Ym5goBYatwmLzMLMmmt2fsRszejhJNnBRCnR",
  "key12": "5UPMTama9i3B9WpevTcqBw53TA1GiGCPRwz5RXz4PHzsjhu38gk3QkA2yqdkB1BUR7nvfdSS6hVU9fDqwVSGf2ym",
  "key13": "YeWwGhwvuSHUTBaQwnMxvhwCx4Hh9dcgWWgjicfKKYhPegvEMzfQZLBzNTgZvjNfzyhxx2ofu8UR9GFm26gdby4",
  "key14": "36xEXMwLXMYndFBCeFepxtgk9A5snyFsDzTZtYtoWGCdwkjHqQwgFaWbt6Ky8GAQJmWaLuQ9A5jT6yREevorzkfr",
  "key15": "4w1qXtPS8QzWgtqJwyeBFPcHU9pKk4mDe6Q3exA3cKc5Km2kPXxbEUVdJBp6ZbE5JNprcWJccEDyGmghm3JQQL5y",
  "key16": "5R8o8s3cuJFiHAdPpSy3jiew4UcySod1vGrTydq4wSM9Ndd3J9g4SPS5sKjVxFCrrjAauCde3e2y3Cgx7e6Lurny",
  "key17": "48BDgrEsQ67KrLctBBqzhQAq1Qs4wSEeetLiGz9WEVcthkv82PvnYxcwLqKFfKe1CihhQJwUj8m1LSwRGBh8aC5D",
  "key18": "2nuTFgc6Ft6EfpZpiQq1ehdESU9n9TjSonujtn7XaXw8GQ19DTyjmzDnzGmyu7E65wx1fuuNDBJj65yuBoHwgvQS",
  "key19": "2KCBir21h7QnZcpXiySmhrCbBAny8V2JgxDPeLFpdMFLqcXXQ2pFZQALAraZjvmVDkaKYmtazerEcnsT6nU8riAL",
  "key20": "5ErLxW8ke6Ju47bKiPBda2nbYCKV1SvDu8cnAFV5Mqd6yMeucwkZYN4x6Q696TXuYWp2wXioF3G6Mw6Ah7DUyKGi",
  "key21": "65HV1UrBppak17bzFYE6zPRNo59hafgWNEdr4xHzqySKrTk3G9NcrF4wfvWYouvzYqQy1ErsF5cxFk2ypUFF5eAg",
  "key22": "4Dym7PeGGErkftNXuPN2q7XCAhh56iy7o1kCXqSvdygimVA6A4yZ3HMEAbwqbYCLF8vFBqHvDt1Q9ZAERDZnSjDY",
  "key23": "5biW9F1B79TBdeksGgAAuPX2oWgbtNFfbCF2biSvsFCeCxJ2oYBPadaxUf297gJXnXxt8yexwcjYhuhL1iDFwpGA",
  "key24": "5b8YL1b25b57B54Wp38r9mJXZwJGVrT8KTrWyyR6DnnApGnYsbUXhsB8rbuWiKVJEr2YtWT8GhNET1gBGd95PbGd",
  "key25": "3jmfgLmDCTCdFNTXcUNAsmJFLbWwnvTpZ3gHuxWaF1Q8Y6E2bsJpL4LJz3DUhJGf6qye6xriCec6bYjqYPLGBKCZ",
  "key26": "WPikW1iqovw27Gp7CJuwGZzzghh6KNSLisT91cPgPbDqBmDSRNVZxz7YCu7BKuemjpPZEDQhuUz3kxyYVxteKVU",
  "key27": "3Cv1UVUWXc1TAP6dJtbsCZ1v31W1UyvaGsFuBsaKvWZCXSGaQRmKM1E4UtBVtpMGYaZcgNrwunSj3H83BDvHWfS9",
  "key28": "3nu8Ph8EMXLUDg24arLdQLi3Kgm6ePN1qq1vYzdogNUi6TWMhSoRBcDox9EnwRMtbnQcCCQrZSuvXJZ5AMKLTNhT",
  "key29": "4Fj6JfZMUfZkgPjthVsz8LskkppcqYC4ZRhGu4i5zPVHY1sjgLYhdxCTEbA31RQoY3YDBRuQfa153aFjSMu8rg4G",
  "key30": "2hi8SEZJJuSg3btEsoz3Lf2PbU5YPDnox3UZbCMS9kbYnimPQpGg63vwh8A4642q8t9YV5cSWymbwRYc3ATfiFDh",
  "key31": "2mTVShoLRxV78qhzNezwBzv6JVyJb4mMPGa5ibRYaj3chSrqKaq71LHqucKwKgCCzFtDAdXorLDPAZiKiiTArkxb",
  "key32": "2hM2tpwiaW1bFfADrFgV9UUAN9v6TgZmemctc6Y9ZBZvJMbBsZ5ist9cNSpvhY5R1czUHjS3uW645Mk3zZNvZVdg",
  "key33": "PX1CyKCDnDcbHBq6wezwK3BWutmVYUAfB5PYPjVCSjsADrina36pMDFn9f5qDUf7xWre6hVqjtooBwJV7w17JyG",
  "key34": "52dWX2cTp55S5RmvXYzCGpQSsNwg9tN16e4dGmUhNp8ycwoPokAFG5jif4d87qV58KK1j3u14CWn9e9aT4eQz5Z6",
  "key35": "4wVHWhGExpbpwjWEaspMmx4Kzc2SF6YQ8aqQdWNkLJw8vmeVQVsXGBenfmJX1x3C6geGxsYQfFZGNwXwWWbU7S66",
  "key36": "cdYmJF5Z9EUX6iLkBAfDi1STR1Fa4n5tQNGZ6iriGxoWamTd31CnoiKJpaainMwBM2oKBXwnJhipWJqfYKNnW1F",
  "key37": "5cpNQo6f5CC1JmZ2zjdhCgFtqxrP5dHSQjyCu85Wt1dFJviaXCspnLy8fMNCh67gnp3euVTWY4mZpSXVzwftuHDe",
  "key38": "5AzXcswfMCbvNWgDTWAmPCeA5vxiga2v8jMFDgAGenfBFcdrkD6jtt1LHNK8AXFveoRUA8UBQsBiuP5pVva1u4eo",
  "key39": "6CGmhn7TKEEPdaALNeJvxtPbiio7zurJmVFBLrqHYt2AtEKQtH92qKrFkuEUZxBWYn7eG12o5xWacwNqyNNE9RM",
  "key40": "463q1oufmDrfp9y68dTKafM6cssoAwfMpYaJsQE9MU6xM7FLQZvtswZz9i2F5zDHL7p9nnSKPPka9ZiLtBovN23Q",
  "key41": "4UAWU2TewBeYYiVbokf8q5Mj3fbMVHTfVkbzTwTN4dwUWcfviSQc4aBVzJd5gSsjMfB13Vqgcq5voCmzqrPiSUvK",
  "key42": "66TEosVamvQbK4uF4G3isWjFEsxGqDEdUagURYU3PpzKAZqWVvQBXcWQV5kRBUpYj14YWFv2SpJVEVKzbsHdAG62",
  "key43": "4GqtUrKnNtbXQFJhv3d53E7LqLnWqF8qip4YmsaVRDLH7tuPcSurAo6pLMQDsh7TcdaLmao2bkf5mQeJACRJjcJS"
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
