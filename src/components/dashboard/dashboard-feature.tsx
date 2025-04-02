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
    "5sSHRnuThgsNW24ob52YKRQVzKoah3NVo7JNG5ra1PN3mwrW2P6y7y8ukZBcHrGfBZkLZfWpwAvJTLHQwoG8jMU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wqmfKeAaJW9UEJiMa3qqRYm1KyBVeL5q4ULeAC7yHGLrrfVBCahLu4jPo5U1wFqnWKY8tBhaCECnpQ7SjnnYexQ",
  "key1": "2JPQzk9kzDaYyZ62ghpdbS2NH6J32JYLuW9c24wnrGw1jJYg6x6Xtgns9svSgv9UcCF2qmX5sCopxtfvt2gUS4kq",
  "key2": "5LGqTcbxXWtEkSYatuguCyJdsv6ab6coEhE2fhBRDmLDb2ZTRwkGbfeB2knEDebu7UAeZxayGmBzp8pE9bZWxdzU",
  "key3": "5dSuzjWD2LWYzeimShqb6EJHqU4A1nR3rgaPiyPJGSoHRwARWwf35B5PzKBuRZC5YscdvkLL1CobnNzGWxFbCtCj",
  "key4": "4Yk9PQULZg5vU1XUggsoNZA2Lh5Z8ZpRM393xg4dmMEMCx8wrkMJLn6nS9pWHkKdvjgU84xvQwC2px6WghzCjpMB",
  "key5": "82KHkQNg2YoB6WGq4En5Md4X1KZj7exNQCh23xyFUHnsSpAy8HjbEvr5omg91vPpgRzqeN3PtqdhvE8qrfHNYtM",
  "key6": "57c8ogqN7MfHN28w4GERoN1MvmubhX6UeP8kuNtgL54ZCjf4Biph7fFiwLJHmiQn9dNGianDGxu8ffzLjhjem75R",
  "key7": "3faQMP8mbHME3U2zYrfHbM7ad8Zk6u62uzmeotBk2XkQUEeAY6pRcr4aVYMM6HqB6242XQ5aNQNEZ7ujJ82kp3BS",
  "key8": "3uoQZVu6T7EM5UNeNEJ91KRYtggXbpSa3yT2fHDrveh8TG9853SUSx7fK5pWx6bUKwVEdCVPTkCqBRTVDo1aUseR",
  "key9": "3yiw9LAFnsG2v7SZ1GsvLyBwYtMSmgYTBDDdDdkNyL6gQn37XFBMpyr74qKFQnTTcze7LMKTcMiKNZ1PVsHcQZTK",
  "key10": "5gFdTD1EXYRgHUd5d6WXTE7LXUHWgLY2oRCYEeQ7DcTqG5chjBanp5KqLTEsP5v8efyL46wBa3fUUgZQ64CQjGbC",
  "key11": "37XD5JimivEjbCQeupF8ADDmCaUAwXDhnGnjs1HQE8erHjGsCKYJHPFrPHG2X7hEHpu5VXV5wdaYRYYe8eepFEFw",
  "key12": "4jLdNEAXP7hj4uY1CpyjjnA7gpzgoU53fNeJGSMhu9sK6L1hKV33HEUs9J4P8hx7f7Z4xnyg8q5DChqgnX5odZ5p",
  "key13": "2kJinoupbutCidfzuDghq5ENYVkQX24E1iLzzEGc681YsLeGP9yz84zbDAjqVNUicPGrSiXnvVu1s9stuw12xVsf",
  "key14": "2rD9zRADZFLn4W6cQYt24n3Vhz1Eht3hXdvMhqYhktjHB6CPmH4jbKtjR6rR2AYYB7oaRKGJ7uAYSLHqarXGJn5g",
  "key15": "5gGgzm9ZCKrTZhDK3o5FZALkGfjTfwVtmDUJMTCnwsoDJZRNjBDSbRtbLQ4gboZUM5Uq8AU9kLz19HTTXEwFV64L",
  "key16": "3z38GkeZJLSX1kdkqg8wN2j1Rm6qveFe3GP12y7jw7Vs7UKQANCkhzZELi6vskZznhRYKWSKgghSdZnhuHBf8bax",
  "key17": "35GxxTmDwRpUuZxZnkrDdQjYE4P29fAVi4vWCuViQRG7kfLYhQQz5sAo2fcEXc5iqf8cRRko5XvF55HpzAYSHghD",
  "key18": "46L4ZbPPcBhFtSca4QZGRRiP8mR2Q8hrAz2gp29D34PpDjbw6na3Q2HG1yEXFXuSPAyALyiVYeMuTZkqvfDp8gkH",
  "key19": "5e4z6z1PBHtWi8LjYveVCP2MmPGRxthFJohfKhciCpokKvobPoiqYjF4WRHGSFBZBKZJFsEzwB6yavxTLmNm6KMm",
  "key20": "3mAUNKKweoMQFcLx2rRUkRHrHTT27bYNWKsXdGFdRYXRrz8ZeYcnp8HK6Z5AZwhQsec9P3ioZQHG5u9pJ4JZPJrr",
  "key21": "5wQ3oFzCyHTDzVJ44PNnEyEtuaHpGuknZF3XUoRy6dReX1HiwcNMpboRgHBCUTo3gCyhnqdYh1a7zghuZNpNop9Z",
  "key22": "2RrvzmFpW7favYTsSFpU4VRnS8dUjM77rRLrUdrDonwyGUnasFANgcP34mqH4iCdk361k48tmbJNPHVpgYBadqrM",
  "key23": "5ZpnDjuNhRd7XxTibdHvJCUysyz2oZF5XSpXBB6dgNrBZhbv3eW8D4RBBiYm8KzTJxiwdFL2w3kW2jgidrFg34bR",
  "key24": "5UQ4FezBy7JoXhPZMo91UV2qwRNW3mx8hyvLcK98nR7VEY6XSXf6dMVscLSgWefqqAbGjxd7eKnoyh4G5w33nrFW",
  "key25": "3vgm3yJwPcSwJskd8AgqdpyGyyVLJigJpNWntLknDuXXDif1hjGMTXeofJTZUCsNLPo3Q2c5u9Yh77CB6eXgV17K",
  "key26": "5oY9PHr4ifJxFSgUbHEZZFifQmZKtv2CQfw6vX25ZHHACFDXZpuvKTiQeTdFXjn4XhWDJeUNcF5rdETp1GKUgo96",
  "key27": "66MNF5CWe8DjJ8NaLZHxsNYunxiJWjPzF2B9FmcLCbRm6K4oCnXy5VAfDh4L5Krg5XV3wWjtCk1r9GBxYRkJxDz9",
  "key28": "tnXbh2ymh8mHfhRZeEcEjDv6CwNfjbb9KXLNAE8LVJYFZJaq4CGwG8KYJTXnxWPkv4HHCFrTjjUwkffjNyRPgZ9",
  "key29": "2kxwPHPFUKxyqqUGnKDz3vPm2Ec74u6jGyvi9qeKzfFmPQDSmzvkx2miujUQJrQaNstUYEGZfhESy3uz6qx5c1Fs",
  "key30": "rRDNTHCMuGhC1SVyCLR2gc3zqDhyHK29ba6vX9qDHB3jrNbwnjKAKbH4iDtuLe922VHiN75w5gg14wpE6t5LBpF",
  "key31": "5SzEpXWWgquVb3pF5MHF8V2kfmEmHn4an5mxQYnzBazEXMpqTKp2wuQC2ojpaAnqAE8SRHp52eo67vPVqPD9KiwJ",
  "key32": "2m7xB6dRHEfdbsh4ZgoFJfa5zYAcSim1j8hDsuZUgs7ghSUKLqtR6X2aZEfz4XKgcyDXtX81e7fjzsPuAUKPrHj6"
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
