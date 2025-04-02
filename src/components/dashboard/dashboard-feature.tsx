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
    "49oru51oG6uKWYrQDfQUanxNCjCP1qN7xmabz5jm75TLRuGbazibUtN52a5fQ98BGYGSuJuQ5hehg4wYcmAgM5AS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QGxZmsudy2BmHVfR236oNsPuC7arcqnMwzdTqqSrG5ZgCA3Ch9oRDwVjeT2QGoDk2mqTMqQcDk6y5Xyhdjv8b9n",
  "key1": "2vJYVAvcNWgB9vSCjBDy8ZcmFjmARNfEKJibUJ4nYMLWAh7HTh5YxrKWB8koX2ArtigAMNGgBCGLceXYnxuecJ2D",
  "key2": "5SmU3jnP5ujZzrKqgj68nTVPRgQhTY5re6ueWbzYUZdPsw5Wcx3q8T6NUXTfLNKppqyPhq5cADV4pKhzaeFjN18f",
  "key3": "39ezVHcHurtamjp8Yni1di3kzQMHWYbXvQZ4SVwkvgXLxgfBM5VS3qce4B9AhHC68EGYFPcge5JaSz74bWS5bjDm",
  "key4": "5ydUe8NK9QsWZ2ntnxJC8yPxeEzFFg7arFH6ebtvUUqTfPvw42NwttvrUnmaaFUCJw2kv8KK7BSfC8r8h9GLHpAX",
  "key5": "4MNJRQBLYths1KHFBF6wCh54v729zwAeXUcic27thTU3dbacMrxRpDCUwKZZ6aCey78RheHEr8TXiQCAMMtctDHJ",
  "key6": "5yEgYiQdEGNuVk9VbB4mXWTsSUh2htyYXkpETvmFkieQKugfCsXxHMhkXejvvEXoRwb9BNBuUqsWiK4gBDaJqPNJ",
  "key7": "4pcENY1J8mtB5YxAJwV94HD7Xo2tpWiGWTyokbnCe2fDJetCi2BJgzNHEu8uRnZbMFGCvJbBPf976jNKkvFFCV4p",
  "key8": "AthgxfAEM62UTLbhJawjbKQCEc1Ykod2MfquVXeZcBZd5KPyuwYC59MfTQTDQ54uPSFvEYnkroNLg8DUj7cvHL9",
  "key9": "2PEFuxnZaEAcXesAEQh1iLDgJqK4cQcjUyUsRnzRiAyTxAitrKmRN5Xt4gztutyoMtvGbfoZbpcbnPETcPchtqFo",
  "key10": "3Fiye1utGrenfae5RvR1hoDonwPdFAAaUDZonreCCDGTzJjLrq2ugCzyPA3Dbqdiacx6SdBzs1uwCC1hCGTW1U6T",
  "key11": "2iuNxYjboKRF4nZPFonjPpfpu1VJ1HwdL9GT2XqZ4wSxWyRbL8CWkXzh81duBF8zcaBvbCjbHL4zb1SCStyxFpS5",
  "key12": "417eXKYr9fC53HJ9zxqV5eaErv4bSf3csLWvDwuLJiJqkiQKtaYuGCsW6monut1rjmEzx9Lmp19Y1fLwg4UeNbCG",
  "key13": "5S1Wx5M4DadyWrq3zTDD9JHFZZm7fAC6o1ksfR4EgrWidFpysSRw3hUqWbyHbHdpPGbLXvP1pQqhKgfThMUWZNri",
  "key14": "4ZQzJEXB386hSSPt1DbevJefXGAixNfXh3j26VN91m18vgoBcjviZC7JmrcYcSiKusBixag69oKatfMpceEVU6rk",
  "key15": "3WTMTT8yF6uRrBgUXntX4pSnMs17aKk9Nk1aj7KJVMTcDBW8WBxKoCz8tPEEXh8UzbFj5JLgZUkWA45WtstFDJsG",
  "key16": "2b36xvYDkfhzRHLCrwKGD5CRQfiVuiRg6tRwx4yGVCcUmC8xQ5TVbNhBJtGR8cfsoRm9Xywd7oVHhGt4fWUjqGnL",
  "key17": "9VX5aGGC15hbvPYcDinGZJzbh8GxEuC8VX1oFwNTskL8Y9wtKd8GNnWeWccMMKuBHQPzfE6WMhvqxMVfcZWxktW",
  "key18": "32QYLgjBhoVaQDt7yPaD4adgDqGRUZPSXM1rAqj335AihREK6sbHWKUVLNchQTc2c3RbQNApYcqWeSWBJHxgefpB",
  "key19": "3429Q4ikJfKRQyAzNzFWxk5Sw17pUqT7MHC1H2yMMXx2Aim77XLjk42x2tbqZEChWZdkAD1QS2MNBTWjddbQDMfQ",
  "key20": "5vGeUjNsZ4dCgTNt1PTB5ZCYg7rPAGzQXruETT6fUd4cVB51U8RgeXkuq859sFdzK6nbpiuXvHt9Y1CvY4S1yYsB",
  "key21": "5ABpt2GLDNt8QJL7vY7YZmngLEXbLAdNXwhnTuz4rCgMdUWL1KiFuLQgfRJ1EBQSa77LphrXpCbqtwEg1KW2bQM4",
  "key22": "4JaRVWTuoLLnFVgC19ihmWwWvP49sRShcTwJ65NGYT6TtdVjXMvQzcvqRVXLYmydL1rYocpg1yQZcCdqz7udQ4v5",
  "key23": "4LZBqXkXZgY5m61XTwY7NNYFA13bL67SaYjotS1Tc7FPwFUd1SFQSocfhd3ay4NHEeiLXjiwinjE1XiZdbdtab6h",
  "key24": "4MCPKkb9jRgPqy5sYaGgRFLpL8m9mxZjcchd21rR2DuBm1WWeAZdDYUJHZVFXJd4BJ747peV384a1Dx4f8t2uJmp",
  "key25": "UBMDCr6QeTtydr7dgdi7Ez5ZcXhBRz3Nf6y8nU1CsKkupaVaJ4CqU6pitxfBx44TktHhrgHvNvCybra4vx84Fht",
  "key26": "4Je292iaFQUcWCvC48rV9XJqiMs7xxVnr6wW8EAVX2on3AGF7MUmn2WbgLP5mqmWQsN8YSDhbHNTB7NLqRmo1f51",
  "key27": "4VYPph7vcyHQv9zx3CNo6k9UyndgAbbQXNHjvawqiZqAd2tGvA9fiKhTMzhNWBKJsQFEtLLLJACA88upD5pyvj9C",
  "key28": "5Fi7Kc9ZP6AZmMAGjL7JGHu6TjaHGePjSq8cAkqmdVLFugiD8rNJZoVpirdNXiuqZVMBkeFLBCvwfB24i2qPNbVS",
  "key29": "3sKEmo74KzQqML7ud5dP8rL2w2QRKUxcPDoauacqpSzJdNMGXMkgR5g3QPT6cvWdJkvBYjxJeaqo73yTUAAdrZXY",
  "key30": "5i4EqjHNBYKFmK4wYCjc2EXyxxf2Yj1MYRAXJvGS25STG8E72VN1N99GayBjyHEevzTAUwDTwDK9XmW1uPJpGHUg",
  "key31": "4EajURQWDhUyCgHPUdB2NE328oyCrwkeNJk69CkSr83ALLbqyybttXMrj5QzxFYhMgdUNZfHGhFzAMmbaSrtSxn7",
  "key32": "jP1PsZr7nXGp1oqX3kR9EpFfhtrczmu1ByvqRSwCKcX2HJqwnQTmrB8gWX1x7ARVq79SrgxiR7zDd5m8w8Qx9Jq",
  "key33": "3sbK3DkYLWfr2GjqazVaJqchypYnjRRkdm9tAYmHeqvgtVKp7TSPahmU45hpxJ5WD1jqSESJxGyrmgnrgQWLkgpa",
  "key34": "61oemFyyv4uwL7URkqWv9Po6W23Ta2TyF5SNWKy1rtUHowb5DFewJMx4sYTAhiA9o64484jCDaEqbWbZyKB1Zs3d",
  "key35": "2Zmw4R3yHFhFQCEYvUyMB2KX1EEVF6jSRHZbhiWacEYXGDSB6H8bppH2MyFAH8NJxpPepcLSnkJHiQfiDwk5qfV2",
  "key36": "2SMcfvjHJRTDFySmD8BNcFR5tdANf5BvZJ5rC2sFSmXggqJrVkBGdAHXP4fyLiof7HjAscMDv74TTwkKAVHEKae1",
  "key37": "5WXBLY9PGP7dmavyNeQwTUSWdnur1CSM3fdQsGeBxHXNCQ4aQVPodwzKDF3NX4XoGbHQApKNXwc2yC3PBovTcCVr"
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
