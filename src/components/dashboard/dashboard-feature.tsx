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
    "D1LXvxqx3EQJtvSJ7aoS88Yak26sRGTFs8dUmVMWx9c1J875bhjnxLZoo6s8QZtS5g2iptRdhMDTCAuMKtRSRyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48VYxCZ6C1CHestdmr85X4kbmw83HG8L7zMs6dMcjcwcirRLqbspAPPpdqCZqZijtUBzce4BdemWmUQBKaj3uhz8",
  "key1": "2W8vuRzysjKPCsF5aUBuYeGAcsz5v33u6DS1sctMf4WxgJopfiGyJhhNmYTgT8ZdqCadVV5nftVVjKgVSoJdKDjv",
  "key2": "5SHoHBMqgF1J7kwh9QuokzruPje13kGXeL6Kmqw5W4hc9nE7phauHbuPgxrQNDouXmhSSYDznbXbqkxLzvyyqAik",
  "key3": "57pVLutWYYDyGCAeLEJLD1njBCDFfZvjR8u5aWx1FiJEDTPNtoBLyELecqsnBuzsbLuqmuEeE2KVYh69B3MiP4qJ",
  "key4": "3v7VaSGqa5VW6He9cKmomJdotuSDRvfAxX91jb4bfN9hWbfdhh7sR7ujbqna5jnbFpuf7vtbiSk2Kq4JvmhpFyqn",
  "key5": "64pThu6k9hiLvKZ9tEH8cmhJKXX48r93q9zpsgceVoSCyzNUMWtsNgZtQAQxDQqqpcwWZVZf83HbFg8MRTTedKCK",
  "key6": "5LJyEAaA2CXjYnoV9uHrQSj832gQkwQYbRQStksv6yAyi6T5ziZfoq6UVyMHgJdnHjuPYjGZQWradFPuRzJJ9ESH",
  "key7": "3mrj9w1XLdg29Lj45Z56nsm4aVgSvsSPgxZcuSXGN5zF6n2VPphCZQ2BY7e7yPitS4tHY9FzN4Kr6HhsYeXHr5vK",
  "key8": "5WMbFji52iHR6PtnsVr9cTAsaFeiLm12XrxHc3NdE4GmgZfFE2L3k18fQ57LtzbbnKxU6XyMHAafQUd65qMjnjHf",
  "key9": "4HRoHRTLSwSEghKc5wMhCLyTvAmZ7HYHbpuyY8FQgawCrG5jXNZm5D3kj3yFumqGgqNgvMe5LcHTCs2AB2beDvva",
  "key10": "5UBtA9gzPcfkhh1DkBmzVUevNo8Esa9uZKu7c5F1iAYeoNDouxvphvsZ544XLFnZD7TXo7WcknCfSok4YRGR23py",
  "key11": "4ikJrvc8CscHRtJh3MenG2EPRhpTtHvM8YZMHvZ4qAD5C9MKx81Tmv6ZejxcLf7k3ot86mWwvud98nKsZBjgNdVA",
  "key12": "3XwdjthnKE9Qj2yEt24fQZLxdAukKgjbWgZp2dmZ4LDdSmqtFyzYfLvXBBwiJ1yLSoWJEeoc3YiphX9LKbSm2jEr",
  "key13": "5UBgqSCPnhod6jmgcz7ARgikbab9P8YyNRUKN9SnZyswRc1Hd9xKjaKG43J4Ka7FS4Eb42zQ3qTzJHKiCQj14eiG",
  "key14": "4T69brqNpFqedRh6bxoCQtx1jFuxBRFsGantayK9U5ettFHEC4ALX3JNLbhfU4kpTXFbrG9sC93GoDxc1VRkc4tZ",
  "key15": "4tWakv3aVB3mHrVTKteSuurAFFvT3pULHEc97V46Gzs441HYfg9ASBLgaFfnGcT1dDtvzdc1J6CifZnn6KYC878L",
  "key16": "fGZTqmFFuF7Rq22QXio7f6gfeoVsS2HdFshHpzFFmawBoUvVoR6ojK3ahsoNcY7qLg417HdmSeJm5VVgVsD8LsF",
  "key17": "2ZsrTKkD13RYXViAqT3SSUdiX5Zon3sSLJy79Ngr4i553SdYmnW7XEiR5FbcqQuw8a8p9ws4ewAhXmTidSDSkTpy",
  "key18": "2j93b5oyXtFRybNNsj2nncdYnssC6Wkzii1F2nXNQkBwH7CeYTVPLazkRzrQFuzYCtNgRxTsSneohhh2decXqZrf",
  "key19": "cVjH8UkpVn5vXy8BhHya8oGmvbYBNKeGYd1z8A3ooVNJrt5VrwWGL8jsT2peBbtSUq334tNKYxAnS1SoGBh6Zcq",
  "key20": "5hRm4mEnpVhAKH9PTAHraoUzxA6b8GnaACQhxa4npWWspzM7xjw87PyXYmyxk8imatLq6qSWRbHovpwJyVMYu7uu",
  "key21": "64Z8ZRXFse4349s9U2BDFL39gzeABxp65Ff4yv2nfKxDo4muZr71LpGXN27KN28gynHaQSQxK2HHitbfNZgRqvoz",
  "key22": "3ERd46tbs1cuzKx4Ke77CVVQbeVxyr6W7Q4jowfT6X3ZbeDKdehEEnauZk5frqkHzAzLU6Mhqsd4cr6sgbmgaZBM",
  "key23": "28G3BCg6xAvBdAsub4Mt1sEEqcxfUfcE5xjjEEyrQjPpEa3SsWPojVnLkMYqoxNXvwv4U8EzPBZzLVk2L8ZGfbR9",
  "key24": "4a9bSEwfXqKmE2e8yqpJ6wdQKjE8g61xD3rmv2grdJQDi9Kv4pWvDsg5NCGtJQ7uMJMX2DRD5gUwFFFrgZPqNjTC",
  "key25": "5hWvQg9t6g6kT8zgJJL1446whH8snVRxreWA75VDHY7ekyawqpAELRJtWG9FySaAEZaJPx15kk61nSD37QKbvHQw",
  "key26": "4Auvk3cnGcC9BnpF3dRzDyuPgxzbtqVdEcZTjmmwQnuVFfEQWWkB9vfU7sP9SyqhfpHqvKPVSGGYLCTZJ4UxBgTN",
  "key27": "Lqi8KTiDYuzeA7EW4w6d8DjAML3kMq4Q2ix3fJGRE2sXA8SJ8CHiwLuB4iYWqNTzGpQKEZtfAv6HfwkVXWNFqAy",
  "key28": "5wHTpzsYhfGTdTo2QH3uVwt4Pw7mM46nr6NQpf2yTbngpJHMvT85Y5piSnHC6xG7u5tDY1Hg8EKLyjV1BDJqyL5U",
  "key29": "evGGo95hwHjf6AnzTGxWbpnXMh3nPdEq78S6pcxMdWe5mSjcPgAi6S5wSuQnbD4U4UavvYAtZ7DuRKeiavFtvMp",
  "key30": "fUHGqhRRTJcDo4W3k2WK68ijwJR7JfWPYoi5zxF4jNwaz24CvQ5GvLqaUNVbXKkzRT1xF6GCbJRcQJYaPgpXidA",
  "key31": "KSxVHjQFuckzAsWNUunCG74pGd6EAQwq4aSmwxxNaSHtsHEBxnZ98mf6tbWJQSJCfxvb1M9m6zK4Yf9QG9eff1Z",
  "key32": "5LmHm9DeciWKRsY5AaAQYPKP2A9dJFjzCUZGF2shFHGftUNjBj8bMDZ9WJTCH8nFnvMJJXtms5tPocZEVGZLJDnk"
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
