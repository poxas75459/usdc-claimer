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
    "3fLhEaryfeNHMNriaA8NQEvdYs5Gatdy15bmWcVU9ip6Jdn3ia7bPwjopyGGNMFWP5dDDU4N7M5mmYRELYnasTew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54GRJvQvhVGFA3R4i87kHhL7XSoHRTZP2wUmP3fKwuNwqnessi93xNr8CLKmJAdznFX4vYYxuEjCbfjMYHhAvjvp",
  "key1": "2iWJLVtukX69z1AMVpTkbsjbF6jLmmARArjGmH8uph5uKQ95cL9JEazFm6diTYwpQGGbEZrTo8fiqVmuwmuqQsq7",
  "key2": "sPi5X3oHwR2FjvkmnaMF5Bzs1y3oz9Km7Pr93wsDZqktwqYGvMrJSjPMmZVhLtGH3dn9KN6kNuKNdXsA4TuKwKK",
  "key3": "QXLNb4DQG2XK9AepXBoFGsUSCCcaQHCMdAo1r8Bugi9CJH1mxUDpfpSieVnL6UsCj46yFp7HRwPUxB2YovDCKTY",
  "key4": "5jUgnG39KF9SSGnC9SyetcwdGKLqspo5NvsQUr3hhkXKN48EiQfBikskbeP9rQQ2JybAmaMXLPezhk6GgkGGhAQT",
  "key5": "ZNrJGmZWBxNQcUsiFyXqtQjoMUiYveKvXhj2eVwmdxTmUrW1dp43Nha8n5npyLENrspDxqmH1tf5P7eUfPFX2wC",
  "key6": "fG58S7kGgU6zsQpWtgyt7LXkaCjByeJD1GAJNGniyVdXNBK7sXEAUZNXqthnfXkwUmWDzvBUJ7TNRMP6JirBSCP",
  "key7": "3ohMXpVbv4zZRGvRqqwTsWNw1tQcLwd2qfgc5Ro2HfdzCKdRG5Cef2DqBRcjk8iXWm13qGgwW9a8grCocA5DeemH",
  "key8": "3NnHxm9rzjQWEWrrKWPbQ8ZAMSpGbnHVdAfiXRdo88dcj5yJvnNwd2MCtG5PPsASvKYfo3R4D5GHxj6vcw9JmgPb",
  "key9": "Rf3hKcSe1NYPjrUBSBRvhu66JFbs9s7YFwyZjyYZTRrno5uh4NSNC1W357Fe7tHoSE3rZkN5ATpvcW5iCdk6xn9",
  "key10": "5dT56LzWM9RDKeNk25oSkBDMSiNN5Q1gffN1xQ2Hdif5umZpvTBhrwZVAktXKCAuw8oEnae1Fy1EyF7ehU8BPrDT",
  "key11": "QjRrPrau2RoRgHHe2gfdH9cEbfgx6Pkk7VkK7XouiRQcsd4zQV1QMQpmE9KEZvzSqGxnedSSb5aEWX39fracMj9",
  "key12": "4EMp1GEHbCEL9CmqNgmKMjKpnrhRGo5VUDtLCKgLoMKFRoi5EoiaLqhQJQpdY8BDZRMPsEHh35NzrY5XfGQqFDvN",
  "key13": "jd7RV1yVEc3WH4Kj2g9eoB6Tu7zXgDXz38Ujhnu87EkAJ64FdM7WNmxbKQNmWDcQB4SF94vNemKGs19Wc5Y1efB",
  "key14": "45VNPiEq9ZAW1EuPv2E95rFsLY3eKSAZffmpV6Nq8duDQmE2mmRLxKURUKCpYmeovkeGL3Q4yevcKxv5wxdxmrbL",
  "key15": "37TnaKEF4kZhCnReHsntUZWcrJo3YTz4hMfVtYZpcThh8JdPW3BD6KZgsbvMrq3zq5REDUd5iHuHc7PmMXkNpLB",
  "key16": "4TQ7BF72W5SXXrNeNWJGvYahwLHWEXpupE7SD89F2VuCnQDuQm6vE6TweRU71x31NWeYPtaaihQVTHUGf19K91ny",
  "key17": "43htsp6q3AZ89Kd5gnWfGXw18ozxY9WXvcyP1qgYNtNgmz4X5QkAZcNdkgeLYsL5fhmUByTvUbfZYbz2kkCfSuSg",
  "key18": "2fZrxFxZGLvbQA1ibwYjDSC6PSRpp9NqXhdCUFEAJzKseuqJ1X7EF84H4d9KCq6URNdBpACuXdFHWgvV6nKM81rv",
  "key19": "275TNgsErQLu7PEUKhfDRF5UUrUekYDMJwmfaiHUyQ23p3LXCZhsNKf3kbigU2nSjArWVqyqBJYcJxWf5FWx4n4j",
  "key20": "jE1X5ZMPgfhhWe6EpSzVi7fsjAh6mYG8ihCRrVkJiWfTakjHdSwzZ1nR2ioKLeX4bRDj9KCbG1SexFcF6xmgqa9",
  "key21": "3AyoVX3PQC8GPGZSVFa2YiVQnJUb7syvu7FkAGTHpABuPCAEaVd12FgK186Fh4QYbm3z8GWAyDZapd7vX6WdMZ3A",
  "key22": "4UMTRS2PFhLijuoptmSEa5NSpqMMgGPYVrzxfw8mnjEUfiDPQqSD3p11dDdhzDGKnvBEezvKhRWE3zfBREid43Ls",
  "key23": "5mFpicn4cuavnZh1xbHUHmsG52mmQpAnqYq6LySmFu2Ci8AVD5jNAPpbfkca3FFZAZTqntMSKULMxwFS7nq5PAWj",
  "key24": "56497gboXvFDh1fP45LxS1EATDmg8rm6tJARjxRVC7cM7Fti4FxFEaKGpGiMVEv2r6PQAdur3wCX1b2khffT1rvU",
  "key25": "2zsN8zUw9ZaaskHB597VLigq7RWuhscYqL9eeYTiSUmVoNBzowdJMTK3Si4HnnReXitbxBERqwqyVTZmyVtYm3Gi",
  "key26": "4Frr5giSe74EGrm4TVRKU5hkkBVDK4YC6ZRFznqLwXZcrwv56PfS3C2a5h9ciemaHjVoHPGUfEWK2pujSrcHpntd",
  "key27": "3kUqguxtfWS79qVQE5Q5n7nQoyjj5eebSo7zneHvMKyWxZdz2nTSXfpsoP8s7YERabUL7qK325cKvT7XRRssmpAS",
  "key28": "4STUDYwdu9nyJitZLVr5VqLU9v4wLBb6oqxre97nkKJZJLrri2v8ovwfR7fiz4rpTK1AQDaniwbRWP3wkzM7xEhm",
  "key29": "jsPt4Z4bhHK5PtTByNjYJtU5DoDgnfQrYwhEUwt47YdpKuU9bfNdnbk9e9Sx1UaHiX9MxAjYWPvaySTF1WwE5mB",
  "key30": "4peDMsT613etZSksPUHpeR4yK6otXxjFRLZ16zsNe1X9rzRCZEYH9SFB4NA7abMZLxnkmWV3NJBHKyavHY8vNPBu",
  "key31": "3AMPjwx5ypzFET8Xwhv4c6xbr9KeJpbsU99ZB7XfeDgro31XrVQxzfaN5LafVDBNToNj4tgHgs3TQxvewUekzuDo",
  "key32": "5wxorJQcNRe5EqFFmWJ3Sje9aXPnZZ4tUJiCKpj21V6ahmxoqaykREz12CZgMSx44HUWT4RrEi1YkdNT19UUhmfJ",
  "key33": "5fnAFeWCsXp9Eze8nHZUE5DQKoRbjwRUnkn3F57f1iYWf6x7mWiP6hGwNt7mGuPfyNkmJTnht2ZY43BxQpXcLBQo",
  "key34": "4AtatXf4krQX5XyZRokaxHzzobJedBcXkZdhX2AT3DPBGfpHi9n8z2PF9ifAq7hahXEU3uRqWizYTHM7vHtuJdNY",
  "key35": "MKfTjJXSmyHVZGy8TsaKwa7JjsSv8t5gT858nanHWZLC77usWgQwY3RZpj5xFFNdCVGKTU7cs7x8ZuY3rP8xCRU",
  "key36": "5zo3qJWy5a5wKyDU3kiUjGQ5ukX2LM7WuD26wpPC95HLsPvNmXVSAc2mNYp3yjdZnHZbEHKMSDuoJCBUckvs1xeb",
  "key37": "PBForsfZ7MuJ3PaSL1jgCRpCeUhN7kSNdtCx7ECp1uQFaxcUJnm4yFdwfKgs1s12sA9rzLP497qfB35ToxZyuki",
  "key38": "M7hVbCXuaCCCCs6LwFyD6B8jd5jDh4F1USk95kFWnZLb7gFU3LpLErNcUHe1HQX1tHDaYZztCtoRUwCJKeERi4s",
  "key39": "5XkKpguMajiC1DDxuFdHwRFHs3MxfPPhP6tsVKaQyx1iXS9qEP4NFuKMdar46t9WH6XRjKRuBeTGVMXkrmpVeSqJ",
  "key40": "2K1rRVaZ662cpXM4jUmyg3HrXxD2uFnSK1FsPoafdKG7YAF3Eowwjfdh4vVMkb8MCEKUjAL5SnfE6P2yUb1JCBp4",
  "key41": "47LiRACiHMdYD67TC7Bw1HwkmKXGakHJK4TfiRUpvrpN4rDxR2f6KwoqXzEvRT5kssNtmjGK2DcwyhnS1eUbLCC7",
  "key42": "oNihGw7qbcamE3APdxzUUmDByhgDhUgssUDoedEPYx4wPvBAUwEaJuccFrCjjAT37EYJ17prDpfDe5dG2s1fPsU",
  "key43": "5AZJcpoR3nTE91pWQBj2Di87d6wRHSAZSr48z9sy57vEGqEcqfc4C136wNSS9T3bHqTFdVUHA1uTcZW1cyf2XQ69",
  "key44": "225FqMHQSUjtfo9Et7apNeWCbMKsL63LaypynZfRe1dqDnnbNeap2PbRSEuygC6Go5r8STcT2QY8UnkS8w7j18qk",
  "key45": "4Md4LuWXpp5sn9wdwCB7kGfT1ZG82U4wn9YrkVhRK1fe4Jx7xUZwT7ZxhurWhUUjPShGrvhZqbaYQEMo6DAfAUbC",
  "key46": "tZaGbDLVY9or616u5AHR5JLm5aE82q9Mq6d3GeyU63ikBaeJ48nzkc9c2rXSAC9auLV5jujknEHNPLTqbsWcMCW",
  "key47": "4At72vCJdeAkY4mxKnXZKt37J2yTS2egWTegPTBuuND41K9ajRBNektYerBhuxUwdELgKepavTzMvVHcGSfTDezb",
  "key48": "2DJmz3gktLgxF1DzzmiTePhBLz7hjdje2YkbW8iimzuaqdksc6PCjEv7qQn3WA4UfSZaAWH2SWJGPuRGWTd9GqcL"
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
