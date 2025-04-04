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
    "5WngX1U9U8kzt8hfqXE1849ME6LTY7fxYmbRVmBfs9q8TsHca2xXVYi1Qa4LBGU8LvXeuSVQkg6cwdX5jtWWbzP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E9EE1LduAWdQUSeiYwLxGiCMH7YLY2e3TsuTG6GjTckT7UVAmmgGMPAokLJVkhjy5nU5je22NnPCs72EepF7MEv",
  "key1": "4m9Zi5nNMbWAhdu9NDKfZ1jvky5VHfCmNZojCe281EFS6uM1yZwbK6Dxo6gnE2aFPLQvSroqHGVRP72VikkdA5Rb",
  "key2": "2AW9dKTSfozA24drDm97C9YV15jTskFNKoBbTP1afgESr1asEpDMxbmPcJ9J6KwebDa5Vh4EoEPPKMBGWUtD7ytQ",
  "key3": "12Ve5TRWhhBXJXCYVy2YosrXdzfwBRKm1voM5P6sbaQHagHPcEA3UNDtAXepV9mNQcqnxK5TgS7SnNvV8u88uLE",
  "key4": "5Y9hWNHoEYaqAM1b9oYjmm5LYFbjEoLKYGafW9Ag64xhE3MdfcNx9xjqNQ4QCqX7WbJMrDx4r1uzi8CEhApVgrsN",
  "key5": "eQrG2r6sFzydYPyeDgsA26AVHuFkarfkocKT9TLpy9zSCnZVtNwxGDhN6gH6isCoR6HBr2cZGsFpesckzkMh529",
  "key6": "5zTQXYvkXcePaC6qQG7T667uvsY64PFufXyWahjiKLYfQt7p9mZdiXAGQcWHrj9yU1M9KeeQ6s7UsjS34Qv65zFd",
  "key7": "5DCi7yD5kVD8m4C4byZKLj2LjMJ1TX9J6vNnKGFGwgEab5Ccbe3ye3NBBKoDqT3iASiAwmk1Aq5V4emS5FoBmrPv",
  "key8": "3cLvw6iwk1M9isWSUgykBN6ajvNZcLFGhHutUHm4WGvGCu9t8VMkqgBJVghze7RGngwLdbw2qeK7PyuErvDkEZn9",
  "key9": "3wg9aTmVFrALyhu1sJmmth118g1TA8JYmZSiJUPe9anmSxasKyE5XWMcaM6xH6Nex8aeaDcecthLuHSLywoGM4cr",
  "key10": "5feB7PaFj16fyCLayXixvzDAA2PmL6sCBLRC3edG7Uzn2WLDU2ZuwoxuJrX7mnpdPF6u6nTzLGzLGpYXpiihjZWC",
  "key11": "555E5YSLdNPpQkd49y9gn7dAhKzHjwdAQFW6ZvedvbkyJDuWZRyQuFKEVxJL8KHghQknm85kVDbaPWUcY5CzR5uF",
  "key12": "Z31RiHQys6dCyDRArntMjMBXapP6BgR3UV7BDhPDTWjydWmApmQVhAJHi9eRwBv1Pc6CAGyURJkTHSmm24SyHGB",
  "key13": "4bh8tzUA4qPSj159iRLEBMGrP4YC85JFrgQ6z39iwHWsRg8FCV8kGMy6jrpzKGXWS6wm5XRrM126Ku3tfhP2ceZ4",
  "key14": "5Y5PCVNsLtbV728s2JeiSgNHreccu7PcNvp2JvYvSFfbfJpYy7mFNkZ4qwqUWnsiqRCrw2CpYF2EYwsHSjmgunY4",
  "key15": "2BjJe4rSNy8ezhsP22Vvowh12KT228FAVHPzoyxh5qqmiF9dV1twjhhY89pNNHigVKtfz141mRwgzWRYkGuB2J2T",
  "key16": "2k4K8qBpLUiebZWdeRA4WgdGsw7c8rN7ncpxgf5wkTkUfKr9o7vMRm3nmp98SpYepvcxbUpK7gqP6Ht1eVeHyZwp",
  "key17": "5Jiaxx8P3YjcL1SUGm7EyTikavUGRwCaKqj9Pj47NVgUpJJ3qnxZjGd9RnKEY8yXEwaK1HL5qoejMAnSjLVHCsKW",
  "key18": "28QdSj9i9pLhKS7ewpNaPiPczwDhy8jtmGtDtVP2Q4gsgMJ6UTK6vXKcJrAbNDv2cFDK2xdfBVvPNSxyHr1SNQ3R",
  "key19": "UUJDtpeaWNa3CAPu82bEHHWe8JDhwdTCJL5YdWtJP5qt2ECyN68RMjw2aZ6wenhJZQ4ZNXKv6VrpwHGmU5KV4yN",
  "key20": "LniioFQXo4mAKztvDDgGkryQqdJYUaca7pXTRv1WgQkYb8awUsHbZzxbVekaGKPW8n7zKUKevWYGR6BdAmRRdcd",
  "key21": "54dEdrrCLyMWxWP5UnHA5PTzuT6YaiVkRMDh2Gscx2D7VV6NmW1XjnH9qE573LpFDiExMndzWENr5v4GG5xYWnHL",
  "key22": "1mtJky59tNspGdh2QqtbTjrMbZ52GDJKB55tpn1rNJumnbWGZSgvRAoznipemWBFwzTcKoEUYJD3QcKTu9HSmwr",
  "key23": "k3JUQ4j84ZhkJtuG5N1y4LwwhXeLjBSxATNA2J22PBF9whBF2mYPSgd2tLnSxSjecQw79i5s3ZWfsf5GdJs1U5Q",
  "key24": "5oSTCQWLYbJUhMJGmRwFFK27WnsGtkHSBKG6cDV5aLeMkLuAcW9u3AZsuYDmdEFqgZNni6kgMMmvHx4oUcpNsbcf",
  "key25": "3dFFnuLatYyH5TNKMU1pUrmu4i9C6eRsEbfb7uVTiQPrZimdifEToXyW2sbCLUFeiKQP3pRgduFH87XenrB6LW73",
  "key26": "3LAYdVWzBf2na8yufUuBwctEsqxGnGEPGfy6cfCzrZU5UeZeeEbpPqpmdsVjDAbAT74tv69m5JxBNcHS7xZLXWKY",
  "key27": "2jABtrAtXrtFi9Cn6xcGebfh7eVV3kZHqsWGfjEpwNxeLs9YzR49joGpMat5QY5GkD5wAL3BbAysE2WGZkU8SR6W",
  "key28": "5yZfdAbre7DAL6umDGWFj7UM2Rvv5GPoUX9vdCgV66DUcAP11HFawx5CQHXikZ2TiLNDhvc47oumzhaU2jL8ihzD",
  "key29": "3A24pKakvmR9r1RcvuhmpFywpimEQsZs6iuiZmkhMpnkrrwDZiywWGNTHxGHPZBKW4AdcFBmgK2kM8Ue55dfiPwL",
  "key30": "44Ue5tEvxAXzzm3YBpN8yUDq9iBqBnBbxpPfMXgmVKAq6sLFApCuuYFf1JuXt1QVUg38mNM6fQz4G2Xt98FrWuJm",
  "key31": "36iA9hX5sT2QDRtd99p8pfEt3BAy62ibJdCVXzDAePQuteNbJtJbmxoG3guocaXKn1Lvhz6EpWBC5wBPsz9zQqu",
  "key32": "63nRpivP3TxBqQKWwvG55nGSDWwTLmhttzx2wAjtEQaMATP3eBQkVweFrtLfw3auiuzreSSt9bsFKb2uNA7NpRoF",
  "key33": "ukw5sZStVHxyUWtZZ65ac5zJ5T6zc89kdqVmJwLbeJfRGx41XYE2cEP6vRnAxh6prX2BwRTrpBwVfgA6SqwxD6w",
  "key34": "3EiHnJigdAMV9eqXNSASzzWGo4Q4FRU1S51fppo2LgMsW26RsRfucSYfXBstNzF3KL9isSe9E1865VpqceMETV2U",
  "key35": "4VjY5PCP9GuXWc9SRkc3YFoM1JdDvWVKRcwivzHCD9APeD34V6JNHHKCxqwSrb17UUo8vqAWYNxxEroMYpx3PExb",
  "key36": "5QXwsii3xGsUnUayDbktbNs4CqLr8qHBZvhmM27X27WPwoMwQ2mBJuReeFfQ7zX5iH1MMS6EYbj4TwYw5Msv6PHH",
  "key37": "5QitcJf6PudymNc8R7pDdJ1G3R2kt4k2FEWmVNV3sDKeTCQ3QUcDe7ysHjba2EBzXpHp585KvUUBT3BPuew8whpf",
  "key38": "2QbCps5xkTqTmwx12XVbYeqqiU63N2KVEmFacPQxU3JZvfB7QdwQagGveY6puXp3nV8Unrwp9j5iwaSHWXbLBoB8",
  "key39": "2zbA7PW6TKxmqrE9y5SdBjEZX1zsCAtUXfbeQD6R5MeT1WvebdjRtXWEVjCh1AzMASBEPQw3APwLrx314hYLLFLo",
  "key40": "ouBNGNbFG7wcsREXf7YykhnYeuxohPAWj7nHEEXJ9FzKjgvdYS3bx4kbk1sHQusm2PZEpPFhxTyA9NmeGpHM9wG",
  "key41": "4V8yKR7DqHcANvV8VMZCzf4afTfT237GUfdFSCiii2jQPPXZE9DNmrN78V11fAXz2CThko4d54fsCgDHQJJCvfgv",
  "key42": "52tTAnw7N1QZbW35RGZC7usiy7LMv3cbxXxPKW2ediKi9EqNeD4WBZg5TmJjXRvv6Nnst1fsMA5YN8FVfXjHwqin",
  "key43": "3bVwHrE81LzfUUgkjuvrx8UF8TumB9DeKRsvmdaFXiKrJSvzHrFqcfT6kZAHDBKW7V9EX3cYRr9HeKh8H4nEVWqr",
  "key44": "4x9RV9HDVz2hwFxbkkV6fFpr2peMLvmuVjrr4D5THk78QUU1yNE4guarUqXue1t1LGNVW6YCzihZZiBLhDiXeXkp",
  "key45": "3QhW6cjwCBfhJ1Bzp3vUfaZoSy5tkXjvqvQLP1c5a6NP2vcUVw1uGPp5Lzp9iffRpuScsmHUfJXbP8YdiiLyoJZJ",
  "key46": "fRHRKCviPQevztqdbNQ16WAAQbKnWWDWn6P4ZRzWg2eAzbHaxy5ScSt3S9wnc7hwFPmxPK2MagYyBSe97nPxVib"
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
