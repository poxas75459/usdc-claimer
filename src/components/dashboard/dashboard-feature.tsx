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
    "4DdXA5PZL5fDUfeypiB2X8557cgcu3q7Cs2R3SXRkuasiNJTtVdHZsQNJntgR3StQq8QLj6p8fAUjLMyG8XEQ53L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7f5MeuDR8Lc2Va5VTTaJUbkX656xFyuz8sZsk79YCMp5Qws5zYhNMu1aFziCjciBqc1qvcNnY9fizkoHygKE8u",
  "key1": "3EfnFBLD9tvKw82mrWKMHkLZ8SbbJk5LXo5HkHxvrA4LFZerXgEknP456AVqb9372qh7jZVr3uwQkWoCyY5cenUB",
  "key2": "5JDhjhsrF7kvRPuQHmfXPHtDb9BVTyGLBT9WBZD51t9b1AF7nDqVcMjoCmGkcaBioNaTcqCNvAnRWpgZVgPLebmE",
  "key3": "5qhM9juYKmLcfzGnNyjCMZ8mwLfhjE6f3NFQVPWnu3Xcir38KTaxLiYKHA83KvhmRTKuYECQA45SyHpvDNfYnkVj",
  "key4": "4Y2DtqH2r45hJsD4BTpi1KTkEVtZ9km2TH2dW2Ku3CEQU3fdqszhy683wgKRRjRTUr2ihyc2QPGyrRLBjHwvCv72",
  "key5": "GEMQEyh1s9gKt4qspPd8VCmWKeu2gWZ2xvjz8TBsADrcfBXRcHGBAmpMqa6693HJTyvKz2w3crNBwutS94FhtEM",
  "key6": "4RytagRakX6yJRftQupe9suf5xd19madCmG9ttacrr3nNwa6UnWRaWiXFzkbgjYeH7y9RCAp666Gmj3XH7oV5bbr",
  "key7": "HG9w7H1DRku3CPhG564emeMbr8Z6nQqgBEfN4RE4wZxn2PtaxHXkXE6JBhboWCVVSU9HaZgh35L9AFWyjdRzVh6",
  "key8": "5DUj1ifcYWFyacsfv6ggEChCNdpiEaGfCnBGDkhfaVS3DzwNVh8JzXwXqNBts89AgSXnSfVLgVsLcvj3hLWkLYBe",
  "key9": "5K14EDJh6XYkkSpjiuJQffwvZBubpFb5Ew7HA4fqfK8QGPqXNqcFaLZtJeZ5HScuhMBPkXM9s2wEqPeS4ud6yJbw",
  "key10": "21k9Yysbjp7BS7unKxWnQhpFDkDPsU2KaWmkY7j57JQTkrrZhnFAdnH3gyXFPstVm9LyPnhgAihARVoadMyqAbTJ",
  "key11": "3ieSd3AW73Tsh7vrCGJ4MQ6vG6mcTvM1SRJWTV4PF8HBBm5qVh5hQF9Qi6ikNYYfZBaLrK2V9xFGbySYqquJ3aUh",
  "key12": "4T7R189Fgd5TPMj6tfrCcZKDk7YKFS3s3akJQtWPBvF4QWBWUm5WPWz4XXV2YKfNGQTavccLCvHXWSkufekCA49K",
  "key13": "5Ck6UM5rMUjvWLbguDaaEfcGDoj2QMfpGM4qFsHdtJNpd6DdMaj23eTh6sKjKVqeEjmyn5fyEVEB9ZrUih7ZTaV3",
  "key14": "3HN6d6fxNww3XA5hWSqPMyNK889LKJjVPsvvkBCvEM48WGe8uECWVS9RPxByRmDenGpLRvaTA6fDinMdkocFTj6q",
  "key15": "24pyAkgK4nMxTnSFvFL6q6YHq4BJru2Empb8YLp6osebX4ztAEXQL2ug142tV2PX4gC2AM8CPGkCuJNy3auSStjh",
  "key16": "3jecuPqqFgvxZZLh5suR5MEXqWg3SD6SP48nzaEbEdvh3bsW3u7SqQ5REP3fpk8MDsCSmv6ZtviJNKfQ463BaBDN",
  "key17": "2sNfPLjs8ncJXSdZ2v2mZjfUHo5TN7NkNZe6iUAVczHVx5UjJ9DZXHZkda8SSK1W1RjM9wsx2xDQdpUTuiGPQi9z",
  "key18": "36nCpHPMEYvTtwFmfzo3GVs7LrJkVjnohzzXuKgc1nBZ4bDEm3FTHPrEiZjvDdTFfMAvoYD4AAcbePC3EZSbqM3W",
  "key19": "4vr7E6J4z23NFBnexgD2AvdVg8qrMM1egaYNDCS6a4zF8R4demQEPgBJ7SHiYp1JUEsZU8mxEzZ8c5tvuzs13gdp",
  "key20": "5tWE53Px92aLzcpnKzRyedEKTP1nQTv8xQpTxDgkEzhEbr4euGwFJNZ4wXKtkHUWGxSxJunXkWi46vTKiF5xB1XQ",
  "key21": "3eWTpCbXCsyHebswAdipZVtaTPKhqEoGX5igaMPpC9S1RyvRFazFwFBRMdyWjQ2WXUCDoVZxUrEKpdfiN526mzPX",
  "key22": "47KD6UCrYFg7sbkXwcLjFR3E8hXt4Pfbh1pjf9bpEFgUggo3owmFiAnmXTy2oixvZgtJX43Cjgd423iGAcbEV9SW",
  "key23": "3hSGGfhQgxEiNjtURnhQdNMrb89D9sGfgg85pzRNtxGAdBGJP9cSaMm9q9YJmJyDPngEZH5PAq3JEziGrzSsmCoL",
  "key24": "46BZcyJTjm2qEeYRWZN1psiG9TqptNHCtETMyDP36rf6USn6GvQy5FuG7S9Bh9B6TdT3ei9A9BTjsAYtBYuye7HM",
  "key25": "5Lj6DGqJ2RUDkqMkkHZQjHYjo2sBTJywy2Ke5bYvWUec6FCrNXv4WWhbJHY9dZUGz9rjqDqXRWi5ryYdF8NP9h5x",
  "key26": "4wDrJPLy2RnuLdx6pa34cq7L6LpY8JA8tnsh52E9JrqaU8T2ZrAtZnKZeU2xGpFVigFg8zraTHzcv46932r4CaLP",
  "key27": "53FMZcCex7fFhKVGDXzpnbJZNBmkJBiN7EM66soYChgPowx6DkRtMeDTBDw8tp4rwNPvM8fw9dQoro54R2FXPuCd",
  "key28": "3iJZDjsE3txdtfVv2S4rSpwiKeHVx1nfoTwh2fYAb6M1EjfGrRpgvW1fj8GsmLaDb9t9Q392uYV2jdmstnAPjrms"
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
