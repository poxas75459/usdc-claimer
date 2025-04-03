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
    "2MaB1VG7jywHGmSG49DrtDZx35QasBSs8JQbdEowSpti7SPEm2Hc4DsJfUXgG7F2aoLrx4PV29F2jwYQsNkicMHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jJXDqmZoDGwimswErF9gqrfHXvYjMSG91agBWzKN8WHkhxEp8E9wcvpb5a6WqMjxQA3uVYkJYVtD55vuQdAKUg",
  "key1": "WwcfbqfvsPVM69qq9FvBvgjsnatumuwzFbZNrDg59j4hJi6d448nPkKVsYZ3SHy1Lcb6AgDUsWRvyQpdL8XRSB4",
  "key2": "5VEXVaMUgWHjux6MEZSG6aUDc4x3c9JkYLRhmmcbbJCwZo66vzCdH8h5octrf1fjJLyuPHaa9arkwZ4JucADRZo2",
  "key3": "43TJ3JHBDeXqqkLPkd4L6an3gnGWYCfrUaUdimx1MfPP9Lf2Af8H6XkuXWVuosCraS9JmWm9i4dGrLKxUN6PpQBu",
  "key4": "5mQjycbSUJCuQCSY49iYHqvAEt3g8P7Zo4PgTxC5qog9ZJnFNmVsu2WVqbzDpbRz2BwARjwJYAZSB6DAQL3EbGzE",
  "key5": "2FP1C89egZFUyqtQv4wFvcoS8QvNGTQdBK7FFpDQ5ULvm9A851CWhtgipdPQbH683xFgXJZJCnLFUR6izXCwFN8c",
  "key6": "5TozbUHKCxmxdQaJMpjUnaumvFUz9NCY8dRHLvbS31US1FqqMabdZWk5HYrqzS3GBqyQRXyPGJ79yvu4nq8wif23",
  "key7": "4tC5g8vRzfusf8nQfgKNLvEq5Ghyn1XNfRTFwYYKBKfR9FRMM4jEEuWGnFWHjrL58x1oFzgaSf7jXMshjfkSnuh3",
  "key8": "5UY4Nya8T4A7nJRcH5LaoP6D15QiHiG7s2Q8WC5XkNySEKaaEM1uc8T89EH7ETsEb95y8kDENSDGo72WK9zTxaLE",
  "key9": "2Vx57fVfRNWmLHCWcjKCvudHD3PhwBpAk3NLzHoWFUvtZU3C9QYSMHXKyZK4CoQMahnzK2q3y77RV2FUY4GfeRxJ",
  "key10": "eP6FswEMkUVhcMgG2ueD63GwSFyqcVdEsCeR8LkVSDWXk2Cx2RzGzb9hDeLkHBHKfinwGn6xxMLsb8W8tAgGVfJ",
  "key11": "4VphG4ZX6KSri8rbXwyv25ESwm1n7NoRt8kAodCK9nK3zVtZgP9FT33D25reySr5gEroSFwSqxiDDrfLijdDypqS",
  "key12": "5uMuejUts2Aju7wamyc1ySFqsA8KGxRwzzmYVRZuyd1TU8XigQnLPo6seT7w36Ry8cypLC83LHxhxzDgTR5fLYYm",
  "key13": "xGeHrjbcqRDRaFkyJugmHG3GKAQVEtXrtHz2GhTWwt8ktGbZsCWruRJVHjo4F1BAD1vzewHDEGgGVYFrjWzAobg",
  "key14": "2iP8aBFwA4M6BSgTZzcZNUyoYqEyy1xh9m3xtYEu5veFa2JQ4DBRUdrjagrNjGhbKrHrZCYWYhjPEqaCw9ysSEsb",
  "key15": "2Qsx3eyJ8KwiAUQoLLzha1oGdftE9Y5Yi5tfzBMUce13m7ytmKX54NiGAdJNjawgg2PC3gihbzdgF8zJMSTndYvo",
  "key16": "2Rqb4fvFvjPPNVvkEVGksaBhuPzsVtcu8XMKuygkGbth9PeKXQUkgZPE3oQ8dzCEcQfmRaso1MemBb3tySYT84Eb",
  "key17": "5BeYKwheVqy2yrwKHYyyVpQA7apkAJyqwjm1SQ1E6HH5RfUFrcEr7uJfyvgacqLwmvGYYL52GRE3Hkhbz8RL48pv",
  "key18": "3MdqAV4heSEYRzMcZKWAwcMt9yomzBWpDVaVzbNrdMwxRh8kqYw9aQNh4W88fvq2eZAWmLZRx96Z3gtrBJZyEeaJ",
  "key19": "2QK4sBtfCJN17SWUPV7QjYN3Bu77Dem8KuQfHwDmMFLRaQmteLkFFbq5PyLVGWBXm2STkuA7LytTN4oxj4DpAnsn",
  "key20": "3qKLfVuqTgR2VKNwdycxMg6PSta2JxjcxjwxFVZkTNZ7dgGEskM6YW45RhJUin9HJfrdjFHJmt7hoFQZV5KM66XM",
  "key21": "352PYS9fyHzKhSna7JDLfiiJ9nRXdbn4YjEboG4yx4f4QanLHacmi1q66FL2Cb2naPy4qhXDorL6Br7afxvqg7GT",
  "key22": "K1CqbVUx5K2KhbnHjzbvcCukyWsB76Ht1YQ9kYjFPdZCRp4rUDWCpFEruJcQ5Ebt7fH67uANxC59rJS9ZhLT7rp",
  "key23": "2xN36GmaKpqYTUUy8HnYxRSZeTDdw2ErCDA6akUGh19D7FerQt8cZsHPcthbumeQLv2EDNM4KbWi28hKZWuuMe65",
  "key24": "EUCZux9obEvNuZAYLqpWKQidn4moCYtg5ZqbTBYpaoL7oyTZxrJ1afxZ1FYyFHR9HgM6F4yrz3RcSERCVMZ5NZY",
  "key25": "4qHDRdShmfSTS4CZBknYqjcuu8vt68bgW8oG8UQraFcnZoMcWXJcwZJn5kYEYAUCaL1rgzYzjxroLSeL8k4cSDu2",
  "key26": "5xLxK6pxiRSdrXLaaFRqNSiRgJERiA7MqVJLd7XD276r3W6mrP83v9MjS29WmuAoi66RKi9eEVtU1aKvhYmGTVTw",
  "key27": "2x8Wks9XdWd3La3vbxAwM5rbyCW7ZCNXsx1gW6KQayVPEpf4nwmWGPARtCRirxvDpuTZxFBT7nSCm83jFzdgju9T",
  "key28": "4p4kkKmH8W6afN77jmZVSr9TNDEZ1V64wFXN7sv85rLDYiaqzZGLLygsq4GkuEaZdJQJZ2cqKPSgtgo3aTEngohx",
  "key29": "3HiTKtZXsMDjVHvhyHTVmi1wQRpbEuMV3xw78Dp9hbXn57ca88bvaBThHs1sZG5uY2yoVPaYYHFApiaVCbrSKR4i",
  "key30": "tX7x8tn3GtPrwM1zhtgcbPoezRTe4LnAphGiPVkeM8ZgvFwvnSaWNRDsheyAKYxx5eJw86p21Qzr4NavmuoPFJt",
  "key31": "5fX9fCjcusnPnVV6UxPkaQ2kCXLQ5Fg4Yd7BNQqjUHkj9u1QonRkkafVZnR8Y5A9Jwsy71wwrLiN5RvsHPXBUo5v",
  "key32": "2hpWAX2aYb2W5ZncwfirJkHggyjF5NhycsJdpkKeLsEyYW9opJAYeWRaKouXfPurcYzMbNbyEEJmfp3PHVT8nsQJ",
  "key33": "5MASPQv9SRfpjjku8S8GvZuo8RzzPwT83bSGGDEsx7zXtpg9cKXzjpjFRP4YbtD8UNKquBmq9vS5WL4Tm3iKB4Ko",
  "key34": "23bvLWvePr4D6j1WCAPZxaGEFNFbudZJ8LP7B7o9bQhWdisqhGXMAgm5Mujmz5tsPwAZ4RNBpwn4mT9NQKh9aJ2P",
  "key35": "GU4WjX266nkcojEDaekcsesDVcPvp8FkG6rvPT6WtYT1S1HcNEwEWUdoJG3qaLBQevd7Nt9uCVeu2bM7ScE498x",
  "key36": "4tjZvntFyBv65yzVCywAqCCfuKtuCtrsUniHAF3QKuXMCHacTcipdmkjgoDNjxwxyFBauCbktA6VwhPZLhJyfme2",
  "key37": "3gUfEfARquHtEFjFUWYzevd2PYdiutnJMBRASzPtB7kUxC2yTnfKpdaHjxN62X7Q8LHp7AhLCrT7UjfBtEYX7h1R",
  "key38": "5KXi9Ke61t8MVrGcM1ZLe5bzqv5JTAurYvaXdVmQx6vKKCy7afNJAVrynrrgU8tKRqpJM12a8DvTtUP8PmH18uyC",
  "key39": "3RgvRYqjHDG1hvtcs5Km97cGTzJKrPTCe4mQLe4tqE12UggQ9WZn7fYrERpLpbqZxnWZKuy6SeFJEZeEoHGv7ReM",
  "key40": "2wLBzudxEcrefzGtYgejzRximEjeXDxSpZ7a7FRjUjwf6GYepM6bsMLrxW3nsWgEk9XrccURRUN3wPcNap4WpiqW",
  "key41": "2LkYVED9XnKer32Epg8gRjNUUw54Fu6ghxUKWDjkDmWt71QBeoVKSqeo7SU6uQgTXswDgsbuHcnhvuvDTR2CwLWF",
  "key42": "2x3T4veRBgq1TeZiRuRDp6MbTTai6ARNJ5VZGt1VTZiZqffmcnWfSfYaCr45j1XCxghC6y42GH7QASvMzTt1ndQH"
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
