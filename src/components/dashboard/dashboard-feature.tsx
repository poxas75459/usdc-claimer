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
    "SdARpoygvoVoZGtP4uumMWXNuBEEGGK6kNuD62vPgvzgwraStwx3EjnuKavyykDAFoSDTykjuVk6vrWQE3LHaiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2usu6anJ2iG8LgoEdkZPG4PCjBYb2sa25e6VAQsg18Y5QMSHS78RoACyTsVzKkHs3q1aFtMoxxmuTZCU8s9JEASw",
  "key1": "ToVZpb5fRY5Bo9kC49p9CFGwHMH8NNbbWqho2M5jmtj5jPrsg8uem12kEvv3fCSHvG8K6GgHARX1JYcSxg4d3Mv",
  "key2": "FVpi3MMnHD7ssBxMPxJmi6UY3AKgkJwAVR2ebKkpEfR68ve1Gw79mBMHTBhWv1NbaPVEe6i4NztEvmJQxKFjVEb",
  "key3": "4bBSdocSCcTjpA8YtsmFDgPBCsrA6Z5TMmPHCiSa4kgXsNu1Hvavy9FqcsdPpLfyPH3ErsJ549bzJ5HtTHmg5RHB",
  "key4": "aLPvy1cgrzpHimwatKABU1LGMehfwusMCy5fyUkbvUx8TghbBSxVDbPGiB59Wqg5pW9UcF6EZ7PS7L8rdi5q6LV",
  "key5": "e1MqRCBn3XuqhqeSxvZBc9YVyvWqHTi9t8u5hgYqpwo5YHtosfbjWAW8vLuQijgeSdReMTsZzPLE6JxnhhRex2G",
  "key6": "5qzx4ac4aLvhzuejTQYonomVo9BwAcnLLezmaiHqyYhLaCiw1HLTkh6PmB8kp6L9vA5QqL58Vx66G7YMJKmPZfAE",
  "key7": "3dq6UQ9BJD79xdy4voqfqy5WVMdnb6thFqbGEN3GLLMupYoHKoEom2ddzuSYF1iqKXKPejpVv26FnmkqJ4RRP8yZ",
  "key8": "LV56E77JQBqZDutF1hBhDK9nCoqjK3J2fWRVq4wqfZ8iE3Uf5i6g9kKRCZV8bekoHNFPoGTevWCtqyop8iKfqyF",
  "key9": "3ZgEG5dR2F2Q18DuTwK6Dy7R3JdfE3CbsHrQy5mfDWQm8Qspobccw5crnUd5JVwSQnvNViQuPjVrwHfYmTuLh4TM",
  "key10": "58RiUS4wfDAcRuKoK7AZUm48hZWhCxSc3aqERRjT26JRNqsik65tfv7oognyzYvQ7NmUdtHHez3kHrprd2MjWjbh",
  "key11": "2Kqu3viXn5m7uMuPP3foAzTovBQuxHbcGTD2G4AwbE7fHcbMjpscgKnZce6htjcSnywUWQAqFKn1VjM5imMpX2Rs",
  "key12": "36autKpYZV8m5HsGHEarSV54Sw3dBWaDcjwKBX1EAYohhtErHxpnL84zWCgx6AF5xuLmCg2kLL9JS7bq6xvB9Jc",
  "key13": "Rgyg5AkNMc8FbkDHn1zHQtqKZ8a4QqQG7mGKLopsSFL6FMQc1keHvjLAbwiR6z694Nh8WcZ2xcmiBCEREojgTVg",
  "key14": "5qkPiePUJnJnTnyoEYB7UziqrMeGgW7DszPBrgTGWZy2vd1BkQLB888DFx8D7dpgXkgM44YsM3ba5d7YzwrLCKAF",
  "key15": "65Z384oFBAFW3Kto4i5YRrosemo8y3N7G5KW9wnhxpmGGJrWEVEjkpVzko3euPBQTVesq5BDFRitJUjX3ochAqwV",
  "key16": "37rRcsKKcKNGHrUvbbfGvEWTDpFVXuAar9Z5kdewSpSTL4WiCkNffVMM9hGv9GwuX7Kvy8azbnJmUYGTi9tuL5BN",
  "key17": "44FypSotoDGMDLyujkoYh74vd1gEL5Gr8AKVuk7ZVPNcp5eihMs1BxoMFjBJB97UAMLb8GQevpUrox5MiBUE21hN",
  "key18": "3kwPhvwnfX4zeapTXDD1mwX7zNC5gPKPoFUEZfC3iBRpAWes6DKfUS69MGkmGqC2Bax1sxwmtJJdz2a7M4MMNzk6",
  "key19": "3h43bFCnQVhDgaYMbMtJiwt6Tqw2QGu8qLrA7ca6HsdCsAbN8K6ZzEK13H4xj4gNuN5JQbQKVYtNmMo3XKps6RZz",
  "key20": "UEqrfhUzuT8AKctiN4FzBf2JGCw1fCMGLJPGvJjuwHH8K8DZ7AkWNQs4Q9kk8mW8ZnNbn358h8Wz4XyK3aPo45M",
  "key21": "21Xzk3hLgP9fcq9WxwgeiYVSWiaWvPTEutLNJAuAzFHBtLb5D2qfrMuJSUGH9kLcQbYcSFEAxoQb37xTRFFsiXV9",
  "key22": "32EgfHJTMf3RQWtpfFkZELBq3tebnDCyvNavMWamqpMUqq8P9wFB3EJKWf6f33NNBe9pbwb45uKs7mfKsNNxRiLd",
  "key23": "39fKdErdMJVvsJHGm2FKCeEMEqRiRkkzGcMAKzT4T1CeNx6afKrK8Qn5QXQVNNPSLMvJSWVX6LmYtmpUvjVkySDF",
  "key24": "cmHJmXcNw6ub1x4tMyxa7PA1LNbvQdLHthhi6ExQKK8bRp37QJeRjAka7GSnURsdV3XWcYtp5tAJpDdw2S9ggzG",
  "key25": "4uWN39nRgRRQ7MX64RjzaDiQ78s6UyoKTDjNu3Fd3v5pgRLZ1XEdyaWXVeKXu215uBqhbGJgoafZ3bTSax6UakXX",
  "key26": "qsbR4QNYPZeH3xVShBXFk66cofBVo4PyB9USk69ctbLzfc1J8L9ErxBLo2KK1RxcseuFLuVX3LfZkeU9LGeGQWs",
  "key27": "2RuNqzaRLcwMHhvwfJeidKE2FKkro1BzDarPMwSmgEVJ8Ggbw6YoXRwwUrYcpjSsWSr4VFZzaRvfW8Bocw86NHLC",
  "key28": "3sy5kzgPZCSnbsXzwnPLvJBgphP2JpMuKt7MtHYUidaH9u1ge44yCbxqBPus9dwG7MFKx8V5aGot83nUApK7TeWN",
  "key29": "4ory2BBvT7nXoGoNo1ayEBheAam4Apc8Fs1vRZVr82wf2XiQG2F9VJ4WVz4hJmESNfEGuwuCQk5ZBtkqTqDHtMRq",
  "key30": "3rCfSW2TyxqXKKu4i5M49QCxXufrYsYZtzkmtZ8tPPQePrK3syfoJfgLNfaLRNAaQSEmgp5oR4DuFzu7wrkmME98",
  "key31": "23329T8KGn7k65eWEonMMDLAV76QkvdH4Pn8LkPWCU6EdVJ5mToMrAzrqQmTzJpMXXj94sXq24FzKz93HtCDZDCs",
  "key32": "2c64X7PDiJw42xsdhtnMzEizuagyuJ2bKNKC1AMVyrMZupMQs4KTfz4RuyoJPdMkEtNVd9QjpNzViMKCMeSdiAST",
  "key33": "2ZpsrLyu1acNC4WTB3Hb8VDrnBEgJKdsW6H8siKbno5qvHgxo5K9hXsKDq6AJYbUsGKbhE18fYL35YyT728rG9yg",
  "key34": "5oTmnYoCYav9dzjwFi3j6Yz4JFJDputLTx2xp6YsdUoui7mxHNMwTMPctWTBaWX3jEM17LPCVa9nswomV9ia7uzE",
  "key35": "4dyHAS4W7s13b5erewuwLBfHj2JhEM1EKeuyTUwxf74Q9KoVj6jDiCW7HxRkQS8457VuxG5ofU3LHL11fGp1kBLX"
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
