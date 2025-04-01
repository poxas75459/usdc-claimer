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
    "4fFLNSWMwKKXfcViDHVJgvVYgmuveXHo8NvsJeUyAQdVqsyw42Rfis5hyGiqsmHmzULXCA5WUGAHKpRbLGwkGoAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GdsWWxzLHXaCPHtakjC4cR6jTxm2aJKFRAdKEJUaVtF57RtRU2iRMyDdAswCHpPNrYyfySLg7NDT6udH8zBcDW",
  "key1": "DDwFh9f4igkUb2Jg1ZhHEXwJAFX5MGb6tprtJGYFqvKgddG2uCcD9RVK2LL4qXzHdEwEbwoG2ux6cjf5UxNuKpu",
  "key2": "u71EvDiwxkEg1ENyEJg62GJVShRKhHhr9QpxMc7GvmXaUHh7GiryDBZzBv2uQwcRzKjcz8BonNMV9KHFXPjN3Ty",
  "key3": "2vJHNQd2KdsEQqkwdZLCdkZD2ZKeSpfY3WRadaScGDpoWhvX7dtQ28KUwiDDejnLuQj9ZDsTngjt16NDoD8cdH86",
  "key4": "4pCXpw5avFraqiBf1eodcUuCDJQsr4r1XGGhgEFHuSHqrD1W3WSLuAH4WoR9o1MWTTdWVk7XZfF56TqW2wZVFuXR",
  "key5": "9bh5QH1zyVT898YxRDiBt7phZSZ8HsJQSbqXfGBP5NtZY4CQG6X2Gs4NCDjS6uuYDhUHqDMaKbdxu6y92m9t2ta",
  "key6": "57KbcsPqP36zptzFouvKX8k9MY2fqGepLCoLPoDvHvLw6JvKe1p8iBoSmSyZKxaD9zpnfzVDh2PQ44p1CgqCmRRe",
  "key7": "2JPzCLUktGh3LGwp8mEoHdmmZeNkcchJcuSyi9ScWS8bpVnFBVfagd8Bzc2xsp9kbUgvPAixLeQP9568WzYpfTEk",
  "key8": "4cW1mZghYCyMFvJBcpszB7sUYB6fFRybxWkGyv81sxpuBsi4S3mPYgzGyHAb2HLUBcvxUg8voUbpNgUDh8HB4gTP",
  "key9": "2eB8yQEaUvJ4yHMaR7S6b2WvM9CPS9nxFRUaZ2LbtFFvxkBp6fxji7zri3ptZ56CWiwijf4dvJ4J7PLJmaJvPV5Q",
  "key10": "5AeuoBxwhLBSDSZaAS98nHJprfx2K4iBugfvv5r9AMjhXeovRr9zRoz2WaDQJUvaTWpGJGGBgQAjEwWwVHXeitpA",
  "key11": "CecXZAM2pMqGbKgwdfjWCJQ8qQVeL12pYX2jzStJbxJFi4YwmiHYi7PFEsYtFLuyNfqUQW149suRQYmyrA4CCZf",
  "key12": "4mUW4s1ebRQZfgC7D5Dv8DRZ2GbEPgoCwm2iMVvTc7mLgFYuDcXaR3GFR3ss2RPZNtFdF84FYYTMTgafuxETgNHg",
  "key13": "3XMhcbbtkXDeeUgR7SCbL9pYo1fdUAjW8LRqvqXa8YW9VLfrmXN4JTopuKKV7Vmic2bVEJ3dtGgMwn5EM3jqR356",
  "key14": "3BzwYkD6fhKLygHYUNWV8BMABk1Q4UAiLZcbbMY93uy7N9s75Md6tvPUCt2wwEBRHeysAtZv4xdwzdxMxbmCjwCf",
  "key15": "64EaSnRs2tKn3oZuQxJwfa5aY1KSyviwmvY3zqPACWG58rGf5xQxXz9WHUPoDuCDNA8n4rb5v5VdCC7foaVJvMpX",
  "key16": "5L543NtN9HptrkanRs1DbUvaFNgq3x2P9JFpQu8hEYvSSRSuu7naDAe7v8A2LgCT2acrMUt5viPvBzSRUws9emVY",
  "key17": "5h4FQ21Xb86DGhAZXTRbnohcXz61BYgr9AUTKa6wtvLfqQp5KpqosnZ5jXDPVADqrXGbFUPWz8huz5nERAPWErdT",
  "key18": "2m9iEtCsj7NfZUocmwoC13WckcPwZypMAfNbaf59AnH4HtPJETqQQBbKFzcuW6ccvBjNf5G8GoXT2NLo2qURaQEE",
  "key19": "3WKBHute7fY11DXiPMT5H7CaVZyt3fV5FXZvwq1GZ7WUmDtszAcXUpmdJB2awaL4nFAeiMGK9N46FKzYH8DhkDZS",
  "key20": "UgD2HvA9vVkbKZez1uSi1TLJ4txZrx6caC2B8cXpSefJGegDAAL1J8BhNtcKRM6f7go2HiDzb1eyT2KNyeEZ26p",
  "key21": "3WcAv5dfSpm2nUQhopMg41uWxathFAgC4T2xcXxww2jSvYNqDXCiLGK15DSa3d4rp93ryDguxwQtYMMVwUvpr3wb",
  "key22": "4yL96EsMhKY9P82pnoZionGPqRwwSumrLjXcKHzSxMNqzsuggYqPupeyhpVsgrXasnndVzL6UfFvq6EwkhdAYmgv",
  "key23": "3KWaeGhquyDgTCK3yXbF15bfZCFoNQmd5AwKmycfr3H9RbcNuZHDBUAb8GFeMPPm63N6VGTVU4re13BwunuPnR8",
  "key24": "4vhB2mJvNs1XfQdsboEhSEdffe87zv9JcmMeNSHfURodCi1DtpZtPTTsyzcWrffBWLGitZGhEivNTc3hj3tDZTFh",
  "key25": "4XAaCfNS7q3oXHm54cQPK7xtQb8tyZSZ19MhAUjuSeYihgTNULY9bcyagpqR7QSGjqngV9xqvAtmKXkQycSQk1hF",
  "key26": "25VAqKd8wGGLdskYCURdLWcvD3YU29PcqyiiPzPbrp5iYkHfC96vcSuEqcsaxYx4y9jVPfKZ4UjKctzMo2pSvaJN",
  "key27": "541K2zKyQX9zHacT1qEFS7VsnJL4xsZkG4jMK7U9rifLSeADTSD289MbBcBkQ9YjmUmYGpETJD6dvtSCyWo9L4ii",
  "key28": "3cvT7GndpYaumEfsb1aViqUBQLkq1Y5jy4CehXjJs1Q5DZAZXaMZ36F5ua2FXVoGsCZnjysha3pg55BfFHUWiHYk",
  "key29": "NjPmubCX7mviFZ8KyqGJEsPittP6mGocCJHmmXbAgnTezSTKdudWzf26F4nHuDnRWoSxK4Pz7ABNrhHPL23rCdv",
  "key30": "5Mgqw5GpD7rzxME2Z84yqBab7oMUBZAMPD8K6LPi9Pkh5ckf15L3U9gHGRc1HQnhjS4dLLUUPQxDavQ2THcGm7Dt",
  "key31": "4qMdTNJ8L7afnC5wYa9egSnvWxg6FRvyMYi8TDTqGhfaXGWzm3V5T7vnMTG6LPKhp6Gg88wuTKPZjpfrf5LuMPgg",
  "key32": "2pR9VYounVAN6tLzNAVKEGag1tcSUYVo5q8yt9vDccDjJwXaG11NziXCpwVuYT17qNbzLS6e3mo4t94zQ4kKqMZE",
  "key33": "3yR4hsRwCRMP7i3hJqegUpP81bXwdrYsNc41N7QAcG353k8F5AQoKnUMY2no5rPunwiN7thhoQayMEZyt1ujjb4y",
  "key34": "5XBEziThSqExZ7KhA5CK6uhMYZ9sAYU1Uzn3T3vubmhV9XSpBZYUxcmop26cWbah3YM1J5su6byVgpei2vV6H45X",
  "key35": "5cH6PHpS9Jsc9MkdYXRHh4udeyFsvgnr64vVLrGzgPbvGSrJ7V595nu73hDKqddMdNUQc4FSY4Pdu9jmTuAzQ8eU",
  "key36": "5YzZ1VAgQopR86St6noDnkpYjaRFh3em7UKKc3uZRm4YkUjQqDzfoEawj7Y3TtYZnokfjQMz48vNLoLNbmwxyr1m"
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
