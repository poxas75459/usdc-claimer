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
    "67cZYvTKcLne42ZgiNpfcVjvyGSuEn1fCV7VjGgQjt62xKYnqWEgpLSqSnMpCsWrfzBH2zxPrvVNUV6EEtb9MkRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N1WENn4dd8KEMguad4n8iZNoFJfuFg2Na2JyVnb7R2SN5g8vhmfQi6XyKmRewSYTVa7E8qeDCvYg8GioL8YjrUe",
  "key1": "2rpTk6xjUhETsMrFwrWZnQzw2HyjzFo3AJbyFfmkxv7uhm9jYNGiMfSwK1tLrLGwdocxoCsbTaQy9smLmKWraHh",
  "key2": "67o87fnRHtUmbu5YHX7hUvfXCGMpActXt6nrwv5an4PiVNZjy96pxreU2RqXzb4xPSHNR1zcgeYv1sQyLHodi3Zd",
  "key3": "4PQ28uwRP25h7tLnEhD2q514DaEhdUUDyyQEB13t8kc6CQooKTM3ncjh3NfXzzYW8swhSPPWaZLmZHQjirSc4jbB",
  "key4": "2VfNsXRduEqXVHSpfRCpghQv8FinEcngRUbGr1keNjL4Kx7XCjroKFNMMBL2xfNFSfsg8MGPsAgeZWvg4WukbBsB",
  "key5": "22u8GSxqo4oZeDWfuSj7n336rpwqvM7qNkGkSFjxJXn55UBzFty8Gg7R1uB9NV6bRk3v7TC4qUGXGvrvrgBBjDQg",
  "key6": "52Nzc1DAJoi262dDdtiUrMJqXu9SDHd9fHN8UFJzDuHEjj9QJLLn4mXDKNymjsm9wD43vWpbW1XihX4cAKCEZG46",
  "key7": "4zytCQMyHRpP4sokkb6UkDdJ7dJeUewJt8E1o9iB8NSaJLVHQndTCXSu5iMY3f3UacgYFnYJxhaok7zsdqKDuY7L",
  "key8": "tM5gBrbpVmpdwDCssZieiV5t3UgqDu2p6YAQNacE9MsBVnkdP4hKQBb4L47hHnaPoqyX7rC3WvrvPSA7cAtTcu8",
  "key9": "1259apXirSNcGBvhdtwzK1GtsuLKX4MZJwhf2a9PkyUKLQ6xTYt8CgPQJkpB4gyQzNph9moUaGV6xwpZ4JECDhBZ",
  "key10": "5H6eyodseuH3aDn9X96aYUBXyCsH92UcgnZsWTAckn2mwaA3ygHVCtUSA5XZMh5g74t2fc92E2phRrLub54SMfKs",
  "key11": "UXRYH5rEyMDTpNHAg3h67kyC9gjGDWYBBeThoY6NRdCKAjW4t3jdoWeN2wqi1KZCtrEMKHmFKyBTCTn64bwkbnS",
  "key12": "3jtBbtkJpVE4dThkkDExcCabnkSHDMaF8wMSEue24EoodWoBNdEj4BNVCMdCKPJiHKdJxdLG2tf9TfKg6chj8n2W",
  "key13": "5JztfJCj9yicj1pw45znD4Rx6JMGNXCVeMt8CSSE4Q7mUWJuDnd2ApUeT1sjX6BfZ78UHToFKc6osgQedAYdSRCV",
  "key14": "4HHqjNhMbvQWktRzd9TWbFkpDkBcD2oTyasJp4QgFQPR4eqSppoLvZaW2e17AsyBzz55E6zR1NgESb21TfJdjKb3",
  "key15": "6Y9k9qKx714FAe23aV3Pp4jWzU7V1t2mjCPFPvJRMBXhhSG1aWBJpM6pLbMxjZx8a8PuNKdrxRU5kjdfaSMGMSj",
  "key16": "PykRYaFSiFstu6uQC2NXAKoC7SmFxtSSGqFJRBnciSux9nVK6UEy6XpWi8bXMUjYooGVnnvgEpkKhVzs6WaVTqS",
  "key17": "42SWeTYrgW6QXHrzhio4jmrdWgaB5L8Q5znK9SL8jfAXFPhcj3k1VcBbu2x6mNyRVunDP6gu99yHs5HwcXfKvSwz",
  "key18": "rtujJwAZ5wviDBjciTn7LdjJGJ7FaAQEi1br3ESDfsTAgM2aQnJtD74hh97Dj9m7dLrVXGooaarwCrXScmG4Qjn",
  "key19": "2cbLjtCLi42MSH6Uox5wpux7RVM6eUpyR8B4FoBDB77JSHEBgbRPowcvH5TXpceFoGKDQVSoUgrcTnLBEkHYy7G5",
  "key20": "3XH4YEAmeevRyxvqym47g9PvGh8ZEids28tXd3FhdN4fPcDbh6Cq43kUD7qwqTuDN2QEJd49SpJSfDYsyS2MwYWh",
  "key21": "ivuqnpexGbrNhSHGtbhPC42Ab5Fr3XYugJMjnbnGM9mDV2f38F9tB13EoTE9iktG6cfFrF9P35m9ct9BKNpkAi6",
  "key22": "snFvfvB3B7yojYDVdE9mb1WKCMojEtj53gx6pu3FrkDFJikaUoAZRn2TyAyHB5G1LKhC2yF5wjZVq88ttRLigUo",
  "key23": "42TR3k7gAttVAgrDWP8hLJhiWJ8EzmUeVdmbqtLyqPDviFrHBgTovLwfAmDs8bZkUjeLR4wihhXCusFkdgR7AMKD",
  "key24": "5uxakBSU2RfkcwYiAFPY3nU2UuweLaH26otJsmU6XuMCB2KA8doQgeUdg6Ppn1ib6exqMKntcPBd8JzEiiGf7L8P",
  "key25": "5UvkczN1uLpo5nG3X1sE9p4JNhNGLA1AdgMtNa8faMiwwmhPbPtVxWgfszDZoAL57SHWNoi6jLx197BVYrt5mZuU",
  "key26": "55caRiczgC6aNAMNvnuB9ijMuxVFgDYbvfsr842aAkDEKCkzsQUNpSyxdGNW3Zc9HmJEuZUHjMYjiHkwp1JjpBDJ",
  "key27": "45QfKjPVbiEvkA94miK6wi2Xv8JJFuUHMRthK9u1eZeGLpqTNpRSGLqgUuh9KPQPRV7XHcMGZgoPHRB7Dy9XEBQ5",
  "key28": "7AyBM6guTEEuwF9SHKAbTcRgLjXai3TEKCuMvTy3zpBX4ZPY5mwN4dDRXu1K5MNJteTwT4Nr7LFjbq5JhS8kYbr",
  "key29": "3wcGSsSFwv2EFshspcQpdsKLh4edzHSxd6B13EA8pHAmTXB8DG2yPzMsc1WrcELuXK51hdHEVDhxrJE5Q7AYhMpb",
  "key30": "3pzuHwyHYgvms4yE6w3vstjDDQxvTSqZxkmhnxUathjhJhoeTjp5T2CWUVqqcUgFYzsBzyCo9iK1HL4jwqSobADT",
  "key31": "3fBSamC5sKemR3wzvUX25NFWkCWBLBYN78FgkYoqaX2xEgCWMFu4r88kLqsAxxVNc274M5sj1FaC7Q3jHodBUp7Z",
  "key32": "2jASZLqZ5z33bGYuYRaZ2TBkJageD8vB8HnpgtkVm1opWWkVpS1981GhH7nsCB8g1Ln8FevYVjRSECN1SfsYLpRt",
  "key33": "2BkRLRLyADuQEbDmKAb6rDMH91CFDDwBReBpiZeThGiVPPaSAz2iUPPKi975PytNqPSiFfwf55o9HYoxhsDVVqpM",
  "key34": "43MfqLVx7AYXm7Q8VBNxgpTLv2nCLEkTZbpp3w1dWCSsoTR2YuLmCWDmuL3AR7qaqbhDu7LMrKck7qHFG7jEWvyY",
  "key35": "2nnahQiRLyqU9vnR4dSDfDaHYJAmnw2TyySk47mo3o2uAFX5ffsRKp69Euj2UTMDvxE6vs9WJsZiVc2jT8g5oqxb",
  "key36": "5iQGmTvswxxy1mQ6VLXRcFbSbRiunJqZbQENiWqYHmSZiwqP35Ao1T5zmK1yUbCrphjQQgZKocPFK1fiGpCnTfgj",
  "key37": "4YtJqF5gzccVSdQ1HWwkmw53Luhs47y2LFKHkVvpGYZxptAM957iujvaPDYs7yfEf87mzD8aGTbTaVFjWpKHBzPd",
  "key38": "3XmpVXX6XGpzj4Ez7NW6WdYinxSGqpsQNWobSGb5RqXujz1NRjEL8yLTqDNbFZwAa9N9WRdQ39dRgNX7qHkRKi8h",
  "key39": "W5NGDYjp77F1jVFYrsFUSKRt3uguU6XDjeggdyfNbvc4ZV8E2yjDZ4MqaPVYfBGYjkML6kBi9uXTra1ewUmLKHJ",
  "key40": "5bdG1Vh8jj9VxCnup3999jVC1z9eBFX1Wi7ernVqeMRwWeQqqjLyepBThMM2hDmxQ7S2uTT7EdprByAwWebvVCje",
  "key41": "4JpEygvJqqXVBTTN9aYvqWKC1cmEuawU8rQGT7uCugZMoVyoDLQBZVKF4mRtHTmd1orZURF22K6fL53FdvV57fn7",
  "key42": "22Z8sR1mLgAu6EHnzHofHyVC2FrmowPV6RBwKEhDQEEEC1mvwbbGKVjQNzMeFe3DFx2G8tdMxC1xHB8aBKVJxAkg"
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
