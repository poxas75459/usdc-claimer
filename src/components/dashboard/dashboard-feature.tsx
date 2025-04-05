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
    "3z2ryc6PUXDzu1vEUiSrW1HDtC2TRCPPUKt3Zo3dQHAjF5VxuMCvkd48o6Hn8MTQZ9DPpKBaXBqTj3GJqe1nyg9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gnorwFE5h6U8yY8kKYo4Taiu89i2ASBR8V7k5rKBtpQ9sWkJ2VBSnwC9Q2afdxKiYPTTJdFU5cyAZpRZnyjb6Q1",
  "key1": "2KXCVs1QJhihfTFj4xWWZEJh9iVGUm7SKjEy3sD5qQ6pjvdRMwKQ1XPFeJenqTGG4mThrmEFYMWQxYcQTQh63xx7",
  "key2": "2TsxdiQ5SRBtyRY91hD8pbwWgMrRQ3eVvqSWdrvxWNL5S3hsw8YqwcjXTgtem71eEZrqUs4QpR2rixtkkNajLcHY",
  "key3": "4uBY3oB16G8hCyD19Phzyo5NKTavoRg6HhnczGvjHQ5ihMA8Q8vya2BQEEhYJnaUXsobiTj4rEYZGzuVMCpfrU9d",
  "key4": "5fgAyV3Fe5co3p2XKropQ4wTmjWU5jkpkLCX78d5ig7UY7VGXL4SmCf8p2ZmLb9QBzXRBuRjFMpXzGQsre5kk5Xd",
  "key5": "3JWkC4m4yDYBZchHYxHvKhuZFf7vJ17axoyUuE66crFSGapQmvR5DmndBdB1HQBvtvtDYmRsdKC8YVpB3ZuXVoCE",
  "key6": "5U4jkZu4krXpiFwDeqJkPZagszj3VQgSdbNYpSYeFfAEoNrjyBmbnVNoLiEoGZd5dbVod6cmPRzmrta4WoVS3Bmh",
  "key7": "LVZCv9t5MbMHpEz2UuzcuVJ6oQL4e3hGfCcvkVkpDAAnfrLF6UQH9eSKDAxCvLDUV4pEzT3aRsZTjmXsbKdwACT",
  "key8": "ebFFcwKZN2ZT66skFWZdzey8sPzFLwb3QyM8Lqy6mNy3AZbr9Y4CibsrCWcpx8DnFaTMakLuGbTc4NgdYxoLSJd",
  "key9": "m56N39shzGk1PJQJiJEmSTqMtGwRScS9LVAEFarv2cXmJQENLsEnSL5dmb9DmCxE33zrtqYhSN7PEA6xWgum6fH",
  "key10": "3UmLuWmPjX1t5Eb1wce84VAn5Ydc7tHBDrv5TSfejSgxZyDFzyGDsYfAqpuRLKbAZd8fVSdtcWCYTFbS6QE7G1Xv",
  "key11": "5sy6Xy7yY6LrTZ9Ggruc2yneqrkng56CaW3CvqDYhXjqC5SPFgRpHeHcZAdCyG19QjqsX3ohRV1kZi8gMSTKjLsN",
  "key12": "2HiPKRchvEAQ5YTs4SassvPgv4LCJdt6tHpmfkaSeGjHq6aba6Hi6JiZuwEd9HbQzc9i4c9ML76LhBDXkeCggF4K",
  "key13": "2nBjzDHpKh4QM1vUdN6AiogF56kYNwfs852MNhLtFrjD7KpuMX9BhCsPWuCMPytPAkDUEwWHRhjDzoomUGzReoNm",
  "key14": "5j4tsH9dgbhbf8LBXiRL953r1YnTYyoDWZ8SsjoebvK7aDtKuGY6GHEG1Jz7hESzebg43ECdQsGi2yNS3Mbp95c6",
  "key15": "3AuABSJbfd7GJyBV1QCyUAHCgXpJqZCCEXbeDTWguc63rss8bVGtHUSJggbu5C44Pw9LvNBjK1urmEF71hhYWzrn",
  "key16": "4WhtWhSRLPxDu2FJh4RmrJr8TYE2vjVmRPzHzmvpa5awow2dBUAov34y4XWH3WnqG5KUXLjxNfEGwpLLFjHXYXoZ",
  "key17": "2i23wkXxKRfNnoDi6ThPR28MX4WQS2Yqxd1rp1te5hdjeXQRE1ajUCpDZS8HtbGtKQVB5gxyDF9fGiMsQowFysfX",
  "key18": "51qFfmkgde5aPW1puQt19zMuhsvEcspvqiwTD5VmPnKEY1vvTRPYpCEx8USCtqMnyasL9GiJVCe37KkXay7qo7oz",
  "key19": "Jd3ZvP4PW8KsCVKsXsXiFxmxVKE9B6gdZbZbzqHyd73pAZdcv8WdNRYecYtfAPsqKx3ec7YWacTfHLQHKkPw5kF",
  "key20": "WsBXvkwZYqsto8wKtAvC2qKuWRcg5ajCvEicEy9B4NWFcE1bbdtbbWy4da5FdqKmH39yZJmzTF4fkPZpVVf1auK",
  "key21": "3eGqnPYkcLvZBHDFYr4N81uSMqzAuNj9HjuFVQUXexv27GHvBaQeWMPPsPpuP2zXL24wLCZh2Xw7fFcTpTFAUAta",
  "key22": "6YybXAGZJ7wfzgygpM2ST88jia5EP8cTPAcBgwNbCW5nU8uFg7wBXnrRxYTCfaN75Ye4Wmnuju3A3PUBN3tAQnB",
  "key23": "3xUgtprk5r1ZsCiSMrZWM97fEpr888h7je2egHEFRKQYe74AGmSUxUkni6f5gdhyZsYv9dPwVFX1v2mFevSbGuYh",
  "key24": "5DazCYJViNRcYBJ3JUVikg1mtaWrNxer7MBN6MwT4YLMinUwkWmkYwnntdV7ujTy2Z5bq3NfP8zaKAsxp89DiMAg",
  "key25": "3UkBRD7QHQpaQhSB1Xgq9iDEWnpt2rAdqVrkukxGUgoELD2mSKhHrvX1EuJtYoj8eWY5F6UCevjqmAV68rZ5rrDU",
  "key26": "4T4Lqh94FEo8nvmBi8MdP5YhU4AAYHLJMCk16gfbCVTHXcFg4SwcDQqRDwi5RHh9JJpq3dHQ2Dc5gH7rTBdVbaC3",
  "key27": "4QqL1DfjH2sgBCw9hTjKy1ow3tPPViCEEZEVLWfNEChQN5d7SmaEutKFea4gJG88fBfonfUcghyzcv6UFFYVZsoG",
  "key28": "3z4ukwfvGQcPoShe7eAkJxqTK1Q6Atovzon9DC89gfiJfJJqDJH5bHfzuLZLFz1aWdx2fEqV4PtkED5QQFhhgCVS",
  "key29": "37Ny1Sv9G8qbzJp1G5C4uChVau4AcjtGpseH1V1N7yi6ACgcumfjjp688TD7D5zdxzkqq3aRxEmkkayPeXPaJ9x7",
  "key30": "4hfHy1TG6CtweuNmpG5HzZZwQvyvigZ1aw1jxxb252rdF17KXwqnmEJcsCiEEbbTTpbtzGfqHmgx41DVxd3RrBKr",
  "key31": "5TrmwmBhcFSh7xJYVez7ve47AgRvq4PfJF8FnShiiNEZFtuEQ2rXKaPtuRPdvmjUQBnRex6bZGnEVncDw9PGtF5w",
  "key32": "2ZSRWkTspdrWkqGhE71NF44pz5Jqpv6wpdxw4ou4Adcj4SQ7fFkgSLWdLMDrdnDry5mnA5Ef6oTuEi8wfBWMGGat",
  "key33": "X1s9o7qJ2HPMdP1iZ2MgyJMBa3gzfhhSbbxdDzzgY88NKwT6xvZgdaqoNoLqSRodhqvWHw9bK7fhcrt9V8ceJoT",
  "key34": "3hCnoRo5XKggmf6ySw8eW8skWp9ijjcKj8zM2rkxsZzF9EK8yE2a7cbnHTcNpmxrmYyiiPAgD7F29RGQS8u3NK94",
  "key35": "5JynkkgiKFvgHAStHSSE9t1YBGMKBKBf4SRhk9dRnsfWjjoko9U4efodUNHQ66rPiaoVQUxAynu3VTz8HumveQns",
  "key36": "2gxr8fuqRMTXnHNnij94rr75ySdZmCAJUE2Q8ELFrQNxt3Dk7BANGwvR5FZUxjP6EvAsHk56Xpez7t4FcnzsLvbd",
  "key37": "42pTWgy4QkyqNvuyoqBHXFp5szSoaSwvQ17KYDMZQeEn8V15j9wYLm5Tv6xFqBwpbWfCUSTQhCUqE1Lj8Rst774V",
  "key38": "2x9njdMFH7RRW7gW9xFHVkxskospRT1eQ7xbULLzjzziVfEMvAVdBz41GZJXvwzEQJmNQRNddbvfi5bx4Ly9gvNS",
  "key39": "3XMjQxVvpBqkdDhGQoMDpkRUkRuQMK6yfmwYCPMvFeGiaLu9D3gvSrh3ouuzThm2Zb9bmW9P9xu1RrL6eejNXfPj",
  "key40": "2B2eCFEx2iXdczDckGxoT7AtwDzQw7q1JvqdLcjPajfS7gZH98xSbpx4hhnz3sLDoSUDfNiN7sEPRkmoas73c8rY",
  "key41": "27RRL8TjkpLtdSDcZ2ysvqfxvttBSd81kdPb1xttCiFH7Puic1BBGcySqUuNEssqbPwi8E1wqQwJL86u66XB7dzt",
  "key42": "z8LL14fnhruRM4pXiJgv2Yat5oo3EQjaj5yAZ7ybViJGDTU4J9d4ZWXv2QMr18tKoaTWgoQQjJXVtmqYeqT2kSX",
  "key43": "2Cgx442HstudAipP4YqkG77RWWUhVvXvnG7fWFHMkxfRTNVEv3mhY829CwLu6qveC94cUgJRbV1MCGmYe1iGqRAp",
  "key44": "25LBaxUcazfcjEHFq7ELEC3KJhzcRwEdhwPE89fpFcbXTBo57YE9ahQgaFCnXqWJ36nRRCpLxwpAYpBYkTTkzkyW",
  "key45": "4U7APJDBSe16KFkP59GBpEsDBUupy9fqqTGSBzwQaNm3mohSxf8N4ryJHmn6zvnqJHvqrDjyRKYHMuo4GQznR8ib",
  "key46": "zobmWZ5r8xRjXjrrsp6CzZ7SL3Y9qfVsYNhtNDKuy3DtAzCBo6jf1EEr2n4A1fAQDEfLpHHQxocNWQ9c8TR6hQn",
  "key47": "3rsXF67d6VtScTEg7TAMxQWx47PQUnwUtbyLpRJAZnqw7RWqQQnSEQFU9xfy8G9nJo1CseNw6VHyfMt4aiN2avsr",
  "key48": "4JtYXNABmipc7RbuueYSf158KYy2HbMrKMmnCrR7sZu7gSA9L8XdZup9Nt8sDcDFJGoA4oekRjKxkdF48TfEYHn2"
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
