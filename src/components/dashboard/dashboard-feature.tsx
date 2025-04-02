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
    "3bci4vrLXgqPif43pcHADxMATimcnM57RHyeoraCYBcZiscPZvG92Ve4UQAMgC6qgoLdxVeQ4VbtHhFJua62aeCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mCPmo6NDXPCpACffwFw9fa5gWkEq8rUpVvZeBZrgybVMoZigo393zcFApMuTbrjBxNUijKtdZXp9KhDE9p87nBh",
  "key1": "58vGtzoiZ3gMtEaAuDUX3V4V6pAUDpMmW2dTJxTnZuELcg9cnDwAKjDUrjxeNQmCYb5RgCfXwYMQaXnWY5gRr5Zh",
  "key2": "27j8o1JRF8px3ABUoHNi7Ej13oS6GbDvSHzjo5RE9YzGWWYWAm6ZWVTnNc413evdY4GdaLc9bEC2kAobAaj7fg2h",
  "key3": "31MbznQarS3w9vgyCpRZoVms1vuYkrXacqkj7fvNxUns3YVjvFY9gnckBzJK6EjcBSdmS7JW58Sf5qxPi9KNYnMC",
  "key4": "D7kbCfKcG6dcDnBZX8NNSwmFxmkmWDjRrYAahjcy2PLbNSF7KSoq46cNoFf97uexogAHeq1iQR9EvAwfYhtMWm4",
  "key5": "4TaveLYGf7NsNA5xHMDW3nAbWhZqxNH6XXyZqwMNvVxzZ7Ln4EQrC7C11AMi2Hxwqfuzvwj5xb8qMrSHuSqot2Ra",
  "key6": "3uRPuQeANAp3VxN2qbqTr8EmZgMTf9GtPmjceqaUEYgxDcDdbEAZrvQwhC5fhDkzN8uXxF2DxgCQjQBRtWkky9or",
  "key7": "VTsWjfF7CBEwGHz9xXLFPSSYYkPcWn8xKUH7CUoVXfuYMWiXttAj4o99MV91ExBc88rpRp9gLpCykdcUe3HL2nj",
  "key8": "3FzZJoVU3kgHuL6upn6kutKdW99iMh4Adeps8PG98zNxLBFPzoovRA3s696EsTXbQ7mdjoVbdXE6q5Tyi5HLkNVN",
  "key9": "3sX4sQMBV5R68ABxjRGvF96TwBnstxFbLR5DuzeQPrJgZqAJmYFD3mToeqrGNTFGoyfhMoDu9aKdUNyxvAG55zpE",
  "key10": "tzJ3NKJ7zdwgmkcnxKjbBjLp7GyzTHGm1NikBxUKgx96JkJRRm5YFLPV4Mgr9Mqt3bXJ2xQ2yMRjKniMBDhXDEF",
  "key11": "2AG5itfngsjHbZQeaopRDV4ZJUbue486Px5zZUZTHY3PoVBViX9oWyYShPaQyy83mFzgbpyNdTGDQiF3UhpER5DF",
  "key12": "66FT9ed8FiQUqEQYgKP6oxKQyfhoTohwMoWKrssmfddjH2j7TkJMPeyH2vgoaxf3kTAgYgfkGHuJ47gM8vEf99cd",
  "key13": "EWZoVWLWnckSqvhj9nRc7Lz2YbhWh71ptJvS6BKGJAn3VSQhDpZiRJLtqfgZkXiz3cBNrxZ7JnASLTN88Ht6aKD",
  "key14": "4jeGtGM155J6qEqwC6bY4t4QDH91uRfiZWRsWPj5vdgfnLaAWwZxhg3Xnj5jr5gJ4QxHBc62VJMUW9MQS9GCErbw",
  "key15": "4rf4zK32a9RtMdE9rVs6RSgqE8ahSnmtFKwf4z1iPN7YTCEMC1vv1yQTKaTkAen86uah3zHpiRGq12weUkL7jfTU",
  "key16": "2fmu4mGm5ZzZrqv1Ubnpsf5zeTSZfs8rxLyERv9CzapDq1v9p7DqV49bMYkKRFaEKdUGb1JjZfwhEGtFeW9aau4f",
  "key17": "66Dp75Aqi46L8zn82iLiMnM3jbEP847mGXjkw6HeWMdtq7xH96dnLdCudRiveAdbPuPdLHDLWUdYqXN8HgoyxUwJ",
  "key18": "2465rysKLBEDcVfWjbjgaVzoF3xuuVwttciymsgHAiB5dh8yM42A1zRrfZ9XLacpaLUpLz2ybAUgnJLZgg5YGDPB",
  "key19": "3eYK2cPfoExV7sKwBeJ4cBFeArkVzRLBVxuzn53FFTqiGecHe8chWc1RAbtDKt9KTPDumdGRiUaaaNyDB3S4KvuP",
  "key20": "62LsiYEQ4XTHFajNDB4HdmqvH8mUiUqakRpPsbvmKbTfmDF4hcfkF5d9hfSg9t1CvqEkuVvGGFMFou88PFNXV4rp",
  "key21": "3bZ8cdcFfKs2epxvis3C6YUP56AX8cxV1HseDd8pJAKdQUP2WiEDihttef5TLyA2rHvto1cKXSjmTYRBhoXbF2hU",
  "key22": "4Ebn4va2SzYbsWqFRmXLRywqN6oMB5mGUY82BZhimpofWz1nCKy6Vtzxo4WWFdbP1zTCWTSymkhZxjB57C6pZYTt",
  "key23": "37uQQ38NcYfdZbx72c9D9tUuRQDWcsw1jhDuKxx4ySjYB2zqtivSJrgDREpL9WBGUTPgq9kdk7ckF9NBN4YEXgHa",
  "key24": "39mJfv2reYhf2FKX6GsD6R7tzT4SG1epyTX8xHJpF7vkAhWLogr3Rd8TvbRKSAoksfrEcQCKYUgWgyRCmBMohDfj",
  "key25": "3SwN2X66NJyfVJikKUu35BdxyU4t4QEfVkB2romx3XVQD2nHHp4euVDXRs1rQECdrgFZsaGmeNM5jr9gUEgvCcbB",
  "key26": "3ogwTDQ185teqS21qoKw7zLiv89gyHmKjpXMyamChfs7VjrAaPYTvLVTuxoYpePBa2u2Le7hZcPd7ruY5FY5fxry",
  "key27": "Am5UJTHXm3Cd32FuB4EKSGvrTmGjWSHHkuwa18uJboUWXw6vdvMupaXPd1g2EZBxffHm6Vsjr3fBTwvwkqJ9NoH",
  "key28": "4aeYTRKRQggWZtzYWiKcPqVYtpn4ibuWWYWTAJkPr81HwjENWWmbhCLmGfNCNvWmA461v4sbh3gk8bQ8Eok5THf1",
  "key29": "5Feoi4S8GAnndypQd75AA1xkEhwTLF4wba1qbR6gAmfa6qQS6sGPvdoCHqkhUnPjLevJnWmXvGqgXR9v3bJvQRkG",
  "key30": "2p56YKnE22EC1CeCEsuR6R3S69ju8kvyuHSquRaKiDFivErTiJFpZ6Wfa72RJgSRCbqUTV2tNPxLwjNJtGbk9nyh",
  "key31": "NSL7vy1Wi6RRw1yaLTFBkGs2BJrSxcNbrbrqJiAqRLSRTuAPhKJNXuQtHsY8DmRz8HMg3wX7wjv85ApuHMhQSLv",
  "key32": "2kTVC7VSrwFNcXLzMRBDmzA6AnmAJrh3TWEGxqRXRjYkVzWrvW8GzXJvQsycojCS6sCW7PX4Q86mq6em3v3Eb3xk",
  "key33": "2hEviZzxBR3nAdGu7oh1Te9Uo5U8K2VnNCSBJtFwXzsSyj34PgoW82hv41nyiQuR2qcAL1u6U7AW13H5hq5x3WmF",
  "key34": "5A1LepLf2djhmMCgP9mJ6d2kKkH3k59AG7QabHf6wjhkbJnqVjNFCKRahbyXieLSJTc8dFRSFRcVMZvZTMz9khhE",
  "key35": "3DE7SRLQ3NNvUUwad8ZGBy46eaimaAozS7YdyiVWETdME9xiS9rvKAmb75X5j3YhD3BWcktMTfV3yRjMozdtpSZH",
  "key36": "eRVUHaRpKZVxVqbSuqA8XffRzP7Pr1RF1wYrAwzUBvKg2b5znES9n6SehM45Ad49e9sH69o27eFzFSA3Kti6pLP",
  "key37": "3MY7kQLj2Gw1gSJwtnG8bGRrgBpXwZPKtQZKv9rB8NwMdKKQDkiXQNKdnTKPfD1HjV4D8rEqSktHbPqqos874UGp"
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
