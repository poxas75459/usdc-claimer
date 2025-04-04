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
    "2dogRYefW48PsB8XKHv5JyfSSn3UMuwgo3mYF2CZa3hyWm1sd8YHsBQaD1Q2L7f6UCqKkcqPU8yQeEzAdo7BRd9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v1Ji6agBGQeaFiYxJM4Zmz9cRjBmHxPp8pK5tP7MXMWYpiTHa8r7iLNVf1TyDuDVidUbsuBbpDrk4UK5cGwEs4X",
  "key1": "59KCSrzN137Kvg9nZa1VUQ6kyhJdhsPbzB8XaHG7ZJbgoNyGkbDjgGPhovR7UxQ8dNsDeFhpLAtVrbyCFcqn6N3g",
  "key2": "3KBKTbZRD9og9RZZtXu359ZQ2iaxaQvUeE4EvZrik6ezEW3qi9UfotGKea4BAKMTzG2oywvQNrqBoyhwLsXXVzux",
  "key3": "433ETwmX4dymUkdd6KDE2887nnT5CQjRfNwD5tDQyrxeveiUEqPxisfAfcPCAFYWWZXD3dEPCRhdhMEC6ULEpzJ2",
  "key4": "378w2gmikDrhqoX6xWrDD78iME3y6CjWXMbLiBvnBW9w1r7hzxMhM7FxqMteyycLnd7EHLTQ3hyvcxUM2fhpiJpG",
  "key5": "46EDHLFHjMVHe5Ui1XNZHJ7u6ypBXmgp2sxx92MZTuZ6bLY1zohFey2Pkb7n9K2SHVtnKF7UTRaWa4UjoDxFP6uH",
  "key6": "2EXmeWtqQkxqE5kBTAsD2AArMxJmJRvxpBttWTjVGY4HGSSp7iAFFkzaVYWNLZTHUQxzvd42kQK6Re32ezfDGNxr",
  "key7": "4o1h4dpuPX74mpUpJiaLE4Ws5YYZvSrTS5b2iE8y7vB9ig8YXi9EJEdd7KU2UMPUXYasHX4xyJegk1bz5mAYK1g5",
  "key8": "3MPrQQwBgNwWW3awmezdBkKT5MhM9M9Va86CQsg9bePeTpAo3MBuwNzJ2iaRL24vupDpYcXmYg9pmuj94xKycmgB",
  "key9": "2uS91eQpwTKiu1xivB778DTYzqzQaai11p9Wp7UYWQms2DTVXYAgia1mcmfAVei69JC6hS8VJ7Mz4y8gnHQYgm3C",
  "key10": "HqR5Sn5ccW3DXPqEHUAfFC8NvvtVdbT8aTpup59yie8nypfsUkYXL6P7MwFDRhCHisNN3Hr9QHF3bVYVgGXuMFZ",
  "key11": "ZSFBJvuCjNpKhfrti2g9X6YNnXdqxhsSXEeYDWMdYoqrfWjBePD4gBqSfuEoTUQG9KC4W6L9hupJz1fe42wdAve",
  "key12": "5V4EBE6MoGyQTFNVqrFG5JsWTZvmXYV19sxT9gfAvjs4ccwKDH5YdWQ3CryZcCfDoqpKoZtmzsVbcopDXbwrvV9A",
  "key13": "2DWfst5RBnPQCkf7Jc5sicq6JRgkwaEkvL2Xm7ipmHsXnUa1o4ewEygMYjJzfig5jgwwz14AvKvKvnLU6Z81PEG7",
  "key14": "ZX9r4bfDm7r824mfNjnb5or6aUhiadeJB2ysoaCX6xKbWdUz7EFkbT8Z6P5b2y6AW3U4JcMkQSyYzVcFBWWAgNc",
  "key15": "5SeUQYYKTqMUC68g5BR9RjxmQLMs91CzNRjNHt5pYMYMg78166Rvj6tBDgj8gjJPznyk9kFB3RHggjsWbDUJgQ5i",
  "key16": "4FajtqFbBx8VJkJnczRKG4EhoGAaKBNUdcD4rMBwAfkyLRALQrySLWggngNCqhn9cAjEpFRRJGsp7EL8UvdECFAb",
  "key17": "au8fJJyXiVEikA3ronPfCxkBsgtTDmC7Zc3CqDDhQfotaHJvckXiBRsNHVpVYHv5jkHye7rGkHceFg3ZsAM4oEm",
  "key18": "3mh2SPFfovj96ydgB7MuSDNNXsJbFXN9rLoRuFwHjC9Exw6wa2M7g3iosft9hZbUJ9MDHRArn6v339NgvQnk5xp6",
  "key19": "5xftb47PQ65A37WPGxDW8HPemrm9x6yvaE3FfyRRTMsJVM9WgccAFNNFgTZV11kZ7voTZQn5PWoiYfBbcWhvZv6k",
  "key20": "3dQBRM8Mo7be4yKjD3LdaqedQuRd677W9jgtR7F4cDmXrBMXsjSKTikwgTe5wN9RQWWKLYn5biPXYsVt6z42Tdb",
  "key21": "4YDfyfnwM43iFXvJajMKcPW51B6cBQDi3F8PEXLGQr3yMnNuU9tmLmGgPrmZJQBWS7D2hE1u1RZF9PM1zuBNXg6s",
  "key22": "5GN4YVcDMMVmtYaUU1PRgt3How7ngiG46a3btqodmLqKgH4KRjoSqUfi4hKDCWMVGJD34cBvGr8atrZxTpJJYYNq",
  "key23": "4TKu7AXxvp4QbPaNor57ku6QjU52nLJiuZw9S15KcWR19rse2YfyGeee8uYkSmLWWgserPnNpstjujqW2SaUW5pQ",
  "key24": "5B6TvHBQPoyCTn4ZkEoLQTGsv4HMy9XHzjggGpc9qshjBwfbpYzJa28qqGqv7zH8MaT4uYuEELuzYQgkyLpWAn5W",
  "key25": "dnbaGtXcfx9dx4NAns1EqZ1quUvP1FUcCg64Dzi64Ae99PsBEY6pP7cqxbwwWkzY7DWPbq5syjt7NGr865DZrSa",
  "key26": "54YVjKrz8HqUtwCyCETidFXMrCPttNbZqcMPU3SW3JrwjvtHbKPaqpaF2zJ4Fho4xevAgPgBEv4RdHQvSKyULKdr",
  "key27": "2nc9YbiPMiY77XbUwfbPzuwrQnr9jwxtn4yDvZyqokGSGpuW8rvdRe8ZNvoo3QdCcQeekiST6RRAhaXZdsyrW1Dd",
  "key28": "4y2f2NEG3a9C1e8oXYeCehiS2kDwnk5QYWbYm324Ajpp5azUFpmYbLzF7YRH8dTpzTaRjoAvqVsnT3keXMPhA28L",
  "key29": "4APCwNJ2nPfo6uniWXNrKy8D5yrUh8s79dhdJxmVJ3siKCf1n77kmSkW4bKUVn2zf5eaBQF5AjGS1V7DaVKMQPgd",
  "key30": "qJaTrmr5FmjF7U5QmZsBh6uoWNRUwybgh7Ggt5z8hXWMxs89BrjYRKXu721Y7jZsUYhr8w1An4pwXUqw5tusk5X",
  "key31": "61wMGPJJBnyQbJCMomTLfA86ZaYkoS2jfTNA2GG8Tany7v1h611695TQTNfNbNQ6TkDNRG83Cw2pAHfbfbzPKwbh",
  "key32": "3onwDjZTCkYgWCEkavdcV1XQUiuXLQvfLbrvv9NUGMNvLf75pCbaBvWGiSKSXUTStffKME5QCQgP3V4pqwFwNThi",
  "key33": "3GgUMDLfC91DNPKXogvHjkJW5LJnscpbY8ghkE2aqfoW6w5vgVySuAEVJWZTmWda2xwujdfvbeTAkou2ttTfjrdD",
  "key34": "aqhSe55M9ESRoHhGfjdeqvrdtf9xUHihc3thWT7JdcghSJdSTGTitG5qzWZUXSzTHCAbX7XgrAShFpCdgVR3wiJ",
  "key35": "35iMJJoSKKGwqHUQQAMpeQ1EWAaiCvti1jnkUtTRtZSrFApQGJW17aScdFBNAWyqPQ8f1LuP5q4AUwew8VsPBwRY",
  "key36": "3VwnMjU95F9VSzMGwwe4ZpopgJvUVULZAgiC4Tz1e8JBoUsshTVZYoBgKV2woTBiG41RNYeBzDoVUSdTg4iMp2wu",
  "key37": "5ALeWXi61nGNH8tZC7tDGNtUSzU4BWFoKXBxTZ7jP9it9hzpc656wTGy79EXzi9AdVdViWXqMrvv6gLXNgHTiyHh",
  "key38": "NuYr3pvpGE4wvKZAnSLYqvinSCQB1eixsCR2FcXwZsJVrs2QEgqSR36brkbdVkAvdW2gX9JXA5Sv8nqtf1ARqeU",
  "key39": "ngVYWQhRNxzZx9pj1MED8Q7C2TNd6X9Dia5XKmMjioNCWEyTeM3mSU7qZAHtfUgWbsjFzTAJqotbwhWxUw1TF4q",
  "key40": "614fvrZx9LhDQUmL1A1y1nEpocFejs3nW7jkGKpVLsWXV2T8ZcpM3nUcsutUwdaiaSMerL7RtfYhKAggiXi3uyYP",
  "key41": "SGhdoqtN2EHGaTM2Rd8ykfUXvpyRPnQkDeEQ7J6s7WmgbNXdKsjvuQ3C6kz3WXtAef6h1yDYQyTAF8Squuguqwn"
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
