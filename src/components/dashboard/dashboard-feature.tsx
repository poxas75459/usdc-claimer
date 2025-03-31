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
    "2JESGmJN9Tym5qPKUWA6HGJ343UALx1kT2YdvsbYnszQtEt4khWQDuYaHcH4Bu7gVhZc9BePUFiVvYpt32jUkP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jXx5oAQD3mtj48cKMmYv73WRDSM2YNX621ugkE2zWr11p5waAfdpb1J2UhdxRqmLdrGVG5aHxiHsVnGnnWZaKgz",
  "key1": "2U9arcXp9mAnhg8FnggDEQf6nL7fHSLAWFApxGYyzPa2hXp3B7TMb1V4UJwGh8BCMqvaJFhHkJM659eqzfTZFW9D",
  "key2": "TvqCxnVETeB1dwrGWaoJpKcTSFtXDkCYk6uiVxcVRGUMcrdpGKKH7hu1BY1fPTUdXbMc7zjSmUB1YYdu8YdU9Us",
  "key3": "2GTiYSs2EYwFJLN6YPzUns5rAfzcLgSfM9H3gehX2BymabjJw7oKuCrRYcdfLap2VY22dWwuDhDAs6bd8UmqVHW9",
  "key4": "3LjyHLZm7uXyqpefQKwCTZCAXyfvR5Fp2gxvT2jBDUD38P7qRRgthnck6dvRAPkJ58gavULhGYTsqw1SKur4tpsb",
  "key5": "27LqynsN3rc5thvDZ1WpxpnxbA483egXVRkAggPyTFS7oeJ3ZXPTUdv1Nm9ft74osZowyyigHbNU8KNvrBcrYMUp",
  "key6": "5jnfFRTo8bZSzNMtKuqgQN6CwdnhBVD4GC7ojatjM1cWyjeWSckshv5LtrNsuRmT5H7kvjwThDcs8shTMcLwdBFJ",
  "key7": "35MPDJTAskPVrL5GKnFqBUT5x4uq6na4VRHsuuxKV1JNJwWen8WgMgsgTgLptUnE7TwsDjqtFh8KdArRdCPr1TQJ",
  "key8": "q9nLkggMmNrQohGKNVbtsfzXwngh2XdWvQrM3QS5XnsP4u9QdH2EMueFgdPDH8TtmMtSpiiftbQ4XZZmkGEAgpD",
  "key9": "2QKpaTeQDN1gFVJmb9Ezc1jDvhoG9nFdcSZgDdU1kmHtRxRphBr4zovLQJNWWNW1WuBSGdnJijXKPsxD1ZPZZSu8",
  "key10": "2Z6h3Sh7fBurXxmFWe3BaU537FCHhReXTVqVScWFRHGqt7U2jePGEaC7JeLFwSVJvdnHAb1xKAMZuZ67ahUPQ7RD",
  "key11": "5ZsdZuJ2yiX7aBQzcemzkJb9xpeNBSr1rzBZ8GJqtFs5f3XoeJ31Fs2A37V4uH7xZTfbjUPCaLtoVBGL3mdiqC9o",
  "key12": "4Htb5bL3Nr89KvJYRUp5KSgwfW5WsoCZba92KPGvhWAYtp39QU1yQmD1eqvxe9XtxKwqHsttqztsgJ4e6rGwU9fG",
  "key13": "4wW2a9zHPE1pmbrnLVbaTvzHsVJVAjrbvzQMqyAX1KKrzWG1YrHn8jidYHAzGzAdm24ad4VxCJvyt4CiTFATmohv",
  "key14": "19ijYeCVZTnXqFTAenRgTmZKDQ71EaS8tdanGdkevacBd6Li1xJnrMPuvzzQb52RUDtSfdsYCYiXSf9EHEgsMSm",
  "key15": "4omp1Z3AobENAWAhugHpbsZoRzEnNsxMJngVPUd1H3tZdKWfLzjckBxRnDUkkYkXMkvsr2swD5rB5M8PGh2r2tzk",
  "key16": "4nEBzDubkxRNQEGb82SZnB5pnJJgpmM4pcqYYtRGD28q7WMaKu5zP3AePb95DnBg5ANkiz6kVyVB5G4ARKHy3gLh",
  "key17": "2LfgCsr3NCkAqWonjM1ExqzfKmAj7VysMDvpNZgJhyPtgKvMZsoWrymKcMbsBZyUqhVWM7VVmvrGJE9C1m3iTPtK",
  "key18": "3cjFzFkHpiZDLM469yVFC4HMg8vH2MS97d8NfvyTBvPck9gYhxE1Dw8j2pzgmNavcrzHDDyS7AARkWtq3kP3SwnB",
  "key19": "2GoHwq1wX84nzavik82rKEjAQFmgi2AfsFKidoRTmVMJ5zmDRQm5hifxmtEGKnddL4fkvCDjRotNVHEZovuxQrET",
  "key20": "3A7eM3XUxSWB5vTcbDSPdv9FLrqvWmbCT5HiU99rrcWQU4f63YRwiKzaWVjaVGtBiRbYqhLyeQ86a7nvXyjAtpHP",
  "key21": "4A2ZkfM1u9E3NbZM1ayoqpuBk4PN9sBVpTe3bDkRLiWrg66YHhcWUjfcrD8mFXmdp5YMm3WuS3cMyA4dovUccCVH",
  "key22": "4nzM7rfowD6itmmfLwJpJbsSsoLSP7aBeUfCGWR9emggRjiH2nm8psapXGUQvEd4njBSCcfqHGffdnZ95BbzrU8L",
  "key23": "2hJrGKHsjv3Uxb1J8oEuhYZo5XzyQrQFcHeFSQT6MMvAVSuov1gjahY3dufWtGHD5w6CFJqFVxX2gCLK9psjeaHG",
  "key24": "2ojNspvAXC5uFa2bwbdE8qneLWpNuMZqVRxUD4CSWivAD6Feq2LCo3UuLLrcMZqrSbDnMowsbMa311a9kjE4Ycnw",
  "key25": "2wSQcrHEzGYM4jTb468fc8MmRnY1eFMTXiLoZSQbx3T2NTSzr9yWhnB6SZECuGLM8hM9soyoYuHbzEYUtuwTkovV",
  "key26": "2WihJ43NhNxeqj8F7usgckTntUjEjZPaaw9Fk2gBKz3RvF23QBDJUcKmNv8fFfDBrGGa1cpA2dkqWf7m6V7D9G5y",
  "key27": "64wR5rfPgQ1fvGD7uzRHRCAQyE7Mv96cpNPyXm75eoyvVEktxTzaANHWN2xhqaL7pg5pdSc6ZNuSHj8t51FBM6N7",
  "key28": "49KtXBeDNMAs6t9jAGL3Px96PzNRU9WRjQXxhRYwYqz4uHFTYx1uNu88kLe6vAbR6Ba1gwYa9rV9rw5irgnfJHLy",
  "key29": "AebTzNt182swxY8wgWsPWuF97RbK9RiAVWomvJY2qiEzHpa8rhvBoLVGXz7ZTRSuukSrsj4sAPriVktsCXpwg9A",
  "key30": "SN4ZjKk2WiNZHX1FA2oZUZxr3sEK49YrFjJfVB7piDLg9wxB7SuQZA56Vu9c4GmkKghsZoWzP6HBhXWCS2ahEzG",
  "key31": "2WMHYeopuMVWefpGmTYuTQEgLfoAGBcgSfR1Lkbw9NnVjgkiQqPUppKrsAYCPrRBSbEe8JLiwuSqQYANFVa1YD6Q",
  "key32": "5LHFPwQpk75ArdZZqWYD37Dd8PKa8LysFzEGqEoqn6EuZPQX7xuJFcvkZWGxQzieXgC5pGmejGss4ke4Wei5Sepf",
  "key33": "4z6Uc1trD7kU483SNfC7nTeQ6gkZqm577wuKMZJZviEcGwucqcKqjijNBCbNkLLR3aveFbTGdwYHx5hitUJ3iJy7",
  "key34": "5aDz5hERJVrL7UJSB6cnmMjmbGDLUm7Fnbqs7MmqdgVKtbiKwzGwHXZgG6yEQY31HWqut1N1V5WRbFPDexCsqYFp",
  "key35": "2E9vNGNzT34nM2WeoULWz2sYLwiKudv7fyWDojmW5Lt3jwNwHSjQCM3jGHccv3ojQPEDewX6QTqeyskmHetskhXT",
  "key36": "3gYnyKiJfJS5wn3ma1hUgmJ383QkDYMsL4cwnXkwRtpE3YWKFvKocVqKsNJMXgrDhMWD9zo7BDG1ew7U42RUJGEN",
  "key37": "4Vjt3zXCvHH2cmX9Lf7kbqJnEKhbjKnh6PQfHp96tmHWf7dr5Y9gyecdFGd9EPgGvKKnQtwwNbMpy3sZubwfWpjE"
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
