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
    "4brbgb5M5rMfPesogZhMxecVtRePN4ARnoteHnensRCnWwF6FRZLBA2TZUyoZt5HQeCaQF1oYnsyk7BcfHLyGQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ypqb6EiQK7SX3uFwJNuEspWvppQ9YVP8DkP82riekg1yieu6LLnF2x1tngc4uGbFJAXUa665UdU6QYYnoyGqpTv",
  "key1": "2VLpAhQNLzy89bSzfyhFDLdUjdTAHmYptKaQsyzysuMVvDQi3yMvGykpwzB1RKwsoo9QbK9NKTaSe4jNgymVY1YX",
  "key2": "5S5sxQJeU8LThQYDUq9K8b2GQmGEyKvQq8mkpqDCukkonhWmfsmPgaC2d66w4VojM6kqjVtULnvW7tgFi5SW7usc",
  "key3": "41cGcBJqFWVjm9Gq88uEUy2HPvusWVKw8E1PT7Kr8zFgEbtgqXsoGHX1t77nZ7xNutJxKZr732rYd6QtFVfPzgz1",
  "key4": "jBT1eLr3zoLZSx7EUnPjEEJXRZMEjstAbhCaUte1SXziRG7yRBnhKQZekpV87tRwSivqFFN4tca9z726kVaPcFC",
  "key5": "fP8JQL8E1eyFZjBtCTBnVuhNLtRikgWXfBj8CJjhmEBLFjqHc9prbCiYjetWsAtnU2n3ytMR8zcguYwFA7aqEd4",
  "key6": "24hnWPuggvvKE3C9CwiUvzWaUrCQMKp8nh4JWvwj26szMcBcbRweQbCW9JrSffB5QRT1F3jTmY5Ux6bq3kLqA7H5",
  "key7": "4vtfiJSRq1FhhHh4RCMp29oWpNpTzWt6wnpQW9XZmw58aNHXsgrfWDcL4WJL6ntmLH98LZzsKy9N9DQ86amqA7sR",
  "key8": "25Mb5SLfQmGtRrTvKsvoZ3sj62xe2WRUu3aKkoy7Uys89ju9FdaGNJiL45LGQj7iyBh51347EmsBeUkUB8JyeP6K",
  "key9": "pQ5Z1Ybvvxtm8jv4HwWujchhvkwVb5jEXEaWv7aYqQTHL7YbFY7XGJybD8CJBfGJiWNdPYUvkybEyc7fTsboJw4",
  "key10": "35ycF1VxrJnDZPtmAskUBtiyfnhCT2rvpGNcCAsZSBhSMGCRExBTtcfUmpgQXhGLkGZ2UrP9aTioH98xqNmWS8bj",
  "key11": "5W3t98pym2tNG39Qd5uFbnaXWGGzqAwptkn1ZP9JNFFVoGkxoHCeMHEpdzg8oU46SRQKgXSNiHiKJhskJx9tqcWc",
  "key12": "DTW3AUjVvzYuP8mBrKh1nP49bFU7TKmD7npJpTNxayynBiGxv2QrzEJ8LsWoSTm5wT2XkqejGfzNHZppKrhYMy6",
  "key13": "3DMXbFHRpef5PeYkLXJjrPhaFwDHxDMXKvEn5WCgu2KPHU4z8yPexKt5zT37HsQD22wtPXL4BVmTnF35819pKbQP",
  "key14": "5SFLu5VwF5oEErzrnVFvzUwUZLR2BWv5CBoBfxEyBsaFwsVQNpqUhMkajc9JrZbtHXFMV9cD6q6vnnkEyUem7KJX",
  "key15": "2kE3PbPASD12RsMWqa8UnbxQbDVa9L2xLfKWaVWsn8hTLgdedqbM1jyZi6ra4fhJufj9XRHPykfRF6VUE4aVBRtM",
  "key16": "2jBn6xEWdVRDuZNrqSbFi9AaSD4FHSvaqvaGSnKhszW252pSPEZ13sAC67BbWNVttzHunuBNMJYtH9tkRMPjYRrU",
  "key17": "5UjsPkHniNNeaohge2K53cbKUXJLjoTQrDigwdgpzuSkd9CnE3yZKowLLhnUGwMUgsgYNTcJT5ppgWRPCfy53L9o",
  "key18": "57eHpvoVFNrC1eZPrCsKmU9KnUHFUnmBYzSrd4S9wc32Uv1UJApB1riyH46KhMranuuGMJC2gH7JAdH5z7FwKixu",
  "key19": "3ANMqzKio1PbDpwEX9PiDDU7fhQeBBUcqziEhCkKNihKusE7py8yMj657P7hC2zU4C1Lj6nLBx2ogsgTTpGFD55T",
  "key20": "2t74j9iKXSghxYjEhfFhL2hbNdRvgWwn56DfKzghMBPaxocEJR4mLQTGhe9cYk9mDvEYpywyM8tw7iqXYrGNNVQE",
  "key21": "4Kp1bbdUa3394d9kbxVEScaL815GWZfcu4KbSMuixshmhKcXVwP29hy9Hjg44ue8aHTogFacat6TwcLwCPE2pW5B",
  "key22": "5SXZaeAotmHA2mJVmKeVssg8ECzx5W7UG1jVrfmFQnjv1n8Pm8Jh1Z9Tq2esGfbk2MDdTTQPbW1TuJDRWpD89ifp",
  "key23": "633itcGyJ9RhgSmmJs9G5dyfuGubpFuPG1X1779seEdrD4jpepnrViCEp6513sokKidGQzcqEbxLRG5C9zsj2iWs",
  "key24": "4LDd34PxauGNSE6Fq8JGfVCC6kDTWAKbm8gpj6BL5hFos3y4ysF4bJnDD3UCWamDbC5iWTwGy8WGukxorXcNBfZu",
  "key25": "2FVYdxeaUfWBun9EXizFkawzzceBfjkcjSQ8zCHqnctX8KVQNcCbx1ERnv23ZurfZmsXAnP76gK6qjmanzGcZqf",
  "key26": "43wixbifnGCHjJfNSgoGa92UjTH3WHkeLeuoUYxmXeZv1ciL27V5MLYWTDq6VQ365t7qpZoLB6mwwAHNLYXuGgVY",
  "key27": "5DFDPxBAUx9DLDg4P8GoyogDarBwjGCyyxr2BWDt2a4oyHbKF51QcdbN2kMaNtJb6gJxHYorWsw82dgPMGJj95Fm",
  "key28": "3EJR7uhNXC5qLBi9s7bWdxQEnu2izSUmS9HFpLcGnSem4pC7RMK7Cy6dSaFrrh2pWqJjWnzdSrX87Wn5V1fMei3s",
  "key29": "ABk4KCwmmhvEiq4jhkuHsPu9mPDi5EYZNdQHuYje9Q9UHMvcYMB6bC87UAjgEip5wvRq5cDC3z9tWvUwkmFVamG",
  "key30": "2XMzx9kdiXEx5JV4rgazuhbycGjgWM42tQ5BxVwvicAimkvMBfUYF1R1Sq4mesGc9f64UW1cNVX37TmzuNHrutD1",
  "key31": "4z2VK3Ky5PZXiv5kgVHVbWmxhxs7Mr5626A7LVgvyAqQZPZcZfXGJ4D5WqSJJfZABdSo6Z7u1NTbxDEyrvXRuhpt",
  "key32": "3qUm3fsdWXaeZEfAPno2zvadfgWzDk2zzfFrP24BCWXhSMEPmuMZgpWMPYS6L5vomKutzt8Sp71yY9ATKXbSMhbH",
  "key33": "4u3ydtX7vTSGroSbvuuh33MR8vsZ1vMzRCSXubHyCGFnR3z8auzw7CSotA2WdV2CMLE4x1n2mWjpgdjdnGxVanAm",
  "key34": "5B3Gzf6s8sHBNjgfZEkMqJimGLNQaEXVU5rCbRfSkMYSgTPgQWR1BuMHLPEXz77uTpG2gLsojwY1SxFXGEYUncoc",
  "key35": "5FvZZt67sBTgwWdNF3QS7hvddMK8X1AsHk19sFDJx7PXHEbCXtiKnETiA5TXM3159vV4zcd1JKZG9w2poFya74Pe",
  "key36": "2ikB1kcDqUWVHk4Me8rGBkT3pY2Q3x8RA2PU11AvqiWnM5BpsPAdVkSi8HHro4wGssyPBPL2yQqAiuPru3PotKQq",
  "key37": "4x8FoVeyXJ8JeoBnUub72A2LRwnvtvJV5YSYsfsuHAcbYrbg4GikotyJKZz7SJASX9Q9Pofdi9QkwtpvPk2bXJhq",
  "key38": "9dUaPpK47yqF7hhkUdq94xaHRGzpTbya84DKJjmoX7N9WTXLjzDyz8ccdSTpFTU9mYwmFx6ALU9jVVAK5QKR9Qu",
  "key39": "2YCrmn8EcEQh1WTgG7LexsZRjR7L3jiqUgKCojYRmp9YRvmTehesqJR3eMzDgHt1KAWEozZBz15m6WzEbAR1jDr2",
  "key40": "2u5hSTM812T6f3smrxPMWGHBWvFwq5GNubspKEuJpbbHaW5Ktxx9YxBHrMvNT2pLJ5Gqm6nBDzH5UkEb5FHeinR1",
  "key41": "5FedTcGPfnCRF9K775tR9HouiiGyC7nLh21sdoWSz2aT6LpQLfUcEmFzJL7ma5BaHpDinBADmDo9JTyc2YLEVQRg",
  "key42": "94o5zCDoht8zGSRYwsyVnBcCowGWmi8dmVZLk2jePXvXc9N9q32ATN1CndF5hNuQKiMRdrqaeDh2u3kkbMHCDys",
  "key43": "5DUyV62CWr6zoG9vqq46tnfEW28CpxUv8RByW5yhCgnaoZGLo7tew8ZgNQJpak6aabEots8g6MP4jNrjeFtB2rdm",
  "key44": "4RhBwbj7kAA9tgKh3HRfqbaGKEAN915w7uvm2rt9pgxewh4DfuQDLQMS5Q4hiMUkBMDoytucxJHd8j9rcx2UEGRu",
  "key45": "5idty1jsdLGpiDUwfpiYwBEmrTCkW2PYjn8MaVbRBZarTcrbBsfqMM9wtJ854KdMEySXRLZuLpQDkKxCVQUHFyf2",
  "key46": "3RZJJeBB7HJMbSt75xEZe8abEUcMQuTRnUpNjKdUT2dF96ahhCfhfoUcjHP4sCBQZ6GFPEK9iyQ4BuU9jHuFrVo7",
  "key47": "5522nv7kttRvDjsdaG5yLTmjkfVj5ApPpHiEdaw52ZP16eV28hirMpHkBvcGTtPdrYBg6GWMuDms5SLtW2z1uing"
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
