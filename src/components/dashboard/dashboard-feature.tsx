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
    "4iyDRAmSJ1jNyf6VFThKrFfNYV5UAWc6LeBSC7pzmXk8V8d2crUMv5tRN2xZtYLv58j84NQRB3ampCjmsB4uUsHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gEaEKhPM3EaTm3C7iETCPGzh3v1RCG85GecmySLofb3xWMGu12kT41XWKnXpttC5imvLnoWgLDZzyZTSzrG76Rm",
  "key1": "32eCbxKswg5hbXMvQyLXqTCzXeeRQZjQURMwYf5ci7gnBsfZ96zCwrXUGVjSJqeD9wzWkN6zuC5uGriq6CFqKhxa",
  "key2": "5BgnHY7hwYqtnippcThbTP9A1rfM7HyFRJgzfTHjE8Ub2MHTvwKac94vhdx3wnYPve9sWijuBqL6XuqMdWZWEnpZ",
  "key3": "5pVPdTF7AF24DsXYn9iNaaeDSptS83ULUxntU9Lyhh3fnr7YQB7WV8nJTR98Ai2F8KVEuzWPWKyqnEdFYyUQh6i4",
  "key4": "2HsACV2y3oW7oM2gywUPq66VZB7VtMDFd1zPV1ioQwy7rtP4feaPQwJa8FFuNPCauX56VyWeU9KnCWoMvScSEehe",
  "key5": "3KVfk9myQoZ8ThMqtv3NbuMs4vvQxsifLFBx7Z37uqDqM5jTvFJq9jMJEFnSZGhUJLA1kGq4Paxm1xdEh26BWBT2",
  "key6": "QQaWoXkda1BZEAKcJaPtqAaLX1qWZnD7M5oUjdAK8YPffsyWQ3QCmCUnVA2vz82zhVyrSSGpz1aYEGwtQBLTDzF",
  "key7": "2rjGshWBtJ19UTurLAtqSGz5K6iMBZL8Nwzsj9sU2caXmkpL3vkKHgfFzar9FfJ95chcXApagR3W8uxSnfFtu1sP",
  "key8": "2igzL7x6e5wnrwJ2ZfaP6EcFGczLoCGWfZfy9VeqxNPJTRjpVDMx3tyXwJo9KPrKkaAVytYJZPLJFtaosRSs9Ug1",
  "key9": "42XuvrpWgoYm3eFooVaTgCRbs6acxCAu7oxRubSf8vU72V1XqHzAGPZNxCXQWtL8YD2iM2WV53Nvr5FHoPcDmQNR",
  "key10": "5FagkDEpCyy8eFe4qkfXhiDXbvgjWghgjUK4yvei6HjtATTUjxbmHH9BjyNsRf3nQyF7UNmKDNwxnPS8DerwPa76",
  "key11": "3y99hucq59NDvvRspCnWWCR38VWt8Fa8KvdRvwZixGX7pdL455UjrUegdvqia8gd7H8s8qQkoN7PhxMzWUpKxWNV",
  "key12": "2fzKAWySnymo2xp3rhKNwzALrN3LG6i36UKTTokKkuq1UemxPSFCXp2bLMVqV6BTL9JxcDSuw3NfiBGwcYtpLYyh",
  "key13": "LwArreMZQXxwbfsVb4cyQZR7xHrbSzwpSykrB2rXihhFwJHQQMYWrAuB1urGN3KusNuwQScDguaVSCrvLc8gJZq",
  "key14": "25q8aNhXzfyeFRymg25w9JhbmMECuVpURCysDaGZLCC1oiW38BW4oWboMmvh5XLBg4Cw8FSCwFioweazDWnxhgZP",
  "key15": "4qcUgsZTT3EZmGndgX3tk5JsFE9ceBvDofSo161QDttYfcfB1nNj6FfNZKZxJjg31LaVSsYhjejSrCZwVQfxtfuS",
  "key16": "66rQSFbfZvV616XDL3XpJxsdrWrDH39WQ72exEL5stKyTREMWpPHpTHMor5rDLBm8zjCvViC51NFw7GuSoSpNhhV",
  "key17": "4aVE1JwvC3hAR3AY7zMN3aGxTmEs4mnUNDvh3u2wTn2iwaqqGjNWatGon8dnStA3nj6FiVJJ2aUMbMNjVnAmfj2p",
  "key18": "jE5r8q2xL6kLv6H3ZMny6Dpa5qkz4iwSLT3qXBEK9u8MASyrGPX9sRGN7C7r7PQFzTRU9UTmZTueYogAcb5nwGu",
  "key19": "23iFCeS3AWZtmg98uvEyFy9cLFZZwhpSFC8sgXdAfCfy9gzvzZFGiYZLtVXuZ3jW7BTCh8k469GdoV396zqn6z3M",
  "key20": "2gk8hBLnbfUWc9G5bPnHgsuPvJm7bPufgR1wsBX45uoJKfTG92uKUQJJ59xL5As24a1QYRzyVdS6FJDRBxZpSuda",
  "key21": "2aEXgWwWY5qZqFjtyVTdNDJjDfgN3QtNwLV4DuAnxNmpyC2QKdXvKtvFWgFWmP2DBCu81QouSj3wYvfn7B35cTwv",
  "key22": "4wyo9PQytkuJ2QAN5oN5iPwwG2xea3RG8kJ8nDWAT6LXHdUD9gnXtbiTu2uVABSHCrRhPFoLkjVhSrxdFE5NMLa4",
  "key23": "YaHr5aCdUiZV33kofx2ZTvN7s7sZSpiKabcqXmzPTK6k2fN6k3eMhyK7KsTisF9NLLdcACoJ2x7vm5qf6m6AXWM",
  "key24": "sVybbHjz7by8k9zsyR3yHz1Eg9YSpQpT6iMZkLRiMw6NX5WpXWcKkKMavXqqEjMvk4Kh5BBxKqshkVGqDfSVATm",
  "key25": "2oSjBUUZT3JhpbUPmqatKsdiFXjiuzgsQoEbnKUas2m6avpnUogbNrj4QLpMgF3kVT8EXGdZo6JgNx4rQMdCLizx",
  "key26": "5q5fkimT5n8ZpxUccBQ58HPFrpaMMpRjDNFH661ZiuwKhz22wBA2YmkfbeD9QUKTid2xUfFb2qT1M6HajMsFPSLV",
  "key27": "2CJK3ycSmWVbMoG6j9TzoFrw2AHtEbm7R1oastB3gxwdB7iBrdHWe3CzFPQWr8occJnSaKE15PBbkiiekpHGhp5V",
  "key28": "A6UKHRf2mQxoaPFhMvfiuMoft6YwEgqRMVMFLuVa4MY7MPXZMp3YR9aXDmKRZfqf5rRnGimFuZk54a4iwDtHd3M",
  "key29": "4469RMaokJ5iXmdwvQLCcYQQjc6h2ufshEM1Vncmw4D2T5pnwedWJUMuN3JoQex1YfXJtqp8nkeRtNs7etxfwwAU",
  "key30": "5Y1ST84H9zvR5dNJEUW3ZAwbe2ZxH3EMD1pAJCf4AUqnXhMsjZ9vCkPUgzM1ZHAnpo7dMvF8GjxnLpQ3NmcFpYPG",
  "key31": "2q1ySUf1kuxXnSL7uu6S6zuvxExm5zfBADnqTzFC9XDASdCCuWtsQA3cuapnfKSv6BZE68k5z9kd8Yjat5CqnLTg",
  "key32": "5tQ5mGZNS7SixH5hvDqbZ1j2oY82h8jYbTdXT75HKtwQ49vNasYb9oEUJ88G1yF5tGTpaobdDstZNU3pf8cfb1dH",
  "key33": "5YVRCZfheNG3TUKQTbimWzZZxw6fqU6QgcTdsDqt3hiG7M186JBQhwcotqP5197hsgYvQuTZt7D2QqA5EpM2i18o",
  "key34": "3Aos4JjgGnrqfmKjMM8DAwz1aLYMoSFtavGsUCsqg3Hzk5ELxJJNvRQ1ngTmHwXZGGfddNutsbcAJsmrRcjgnYk4",
  "key35": "2MoQLXAMK1hUrJKuzg4Lg7xZNkWfXudNA6VQpZCSkbeE1rEUJgYxnjG7XHYhigpAaC3ShWGKHHzRKiuqW6Qgk2Rs",
  "key36": "5VMs3CbbGzMD3XpNZmjwf3YBeZbC2xR54TTu8xL9MBRnEEUosBndsife4T9WtgS6wXeWdN1523zdTJ8hJed23H9J",
  "key37": "5Mj3zGwriRZHc4tktn6T7s7whsJV3eb7vUtzoiuQHRm6s4PmatCobgjKjVXhgcJc91koRrY8ssjMQcEGTF2qNt9n",
  "key38": "3LxQBgW5RdbkNP9bTyNMwW78QPZLNjenQndrzvpPiogYj4F5nKRCZGjT1zejxbgNGni4hjUHztDkz4qTECYeLPP",
  "key39": "3JKTUAgLSBUKsJ9dzNnwERrEXpHUcMqBRzwMejj5ZAcRo7bbcBrgGr9cRhUqvGmuwGJNwFJaHx9N2xb7GCuwnWws",
  "key40": "Lpj5oU3DpBfYuyh12iFHWdaeSdKAA7AZ4vhGPJB2Wrx69CakpPqjAKuMs4ehqrcZbWfrPSq2PXM1A3BEAzVdCtL",
  "key41": "4rQLbg72KehJ1V15MV7nSAMZmTeKDtM8ZEWVso6umZitA8MLetuXkaKBTx8N65X3gZV1jaooehJ1dP1DSgjZTuvX",
  "key42": "5FHq1A1mfpwKmX79Yhe1RPKUYmya2jZC886RNciJu3ATADztUWZEioXEk9HKgXUUrLLvh6xWwT3DazNddvaTHY2h",
  "key43": "5ZkAkcYvTx4SuCf1cCg7PG3UeeLJYguUyAhdHUy9B2Br5yzHaVjrUSxV9jvqY6euMwQBK5m7q8i65r1F5K5ja66R",
  "key44": "aVYNUs9RmeyoHZoYenxBrwWwZuQNurDZLtDMnBawmzugZAgZTsZtfuxQ2UFYKwHMUB1WAqbFY36f4FufJpP7n61"
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
