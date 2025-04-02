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
    "4b3re11J4f3e7xvCkctrwEXsN1GG3YNsgiGTu831Ab8WPkwzGVnvpfNgvFvxvyc5d5jBVm8hZmbd2b4MveXUTSzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aYmaaTsxC5CB1XoM92yeHe2H7LhzFWh89cqtptXXRVhsrN881Dmvp9esvz9Q6Jebdi8yqrxSu9JnjSSpf5wV1T8",
  "key1": "2LqJGdE28GEDD69ozVukCLbyFbWZfxV6dZrG1HTDtppgzHokPaDYbhiSghx5pS1VG64uDkS4YDL3eAtBwrgGJQg2",
  "key2": "56JXTe1PX4RmUzz3Boh93zyVFHE4mJvLhSyJJJcmLWXrUHBAjh1C9igLEy45W5JuPFmwcj6Etbf9g2fZNDPGEYWM",
  "key3": "3X4sCEHAgJSWTESRqng23Em3joAAQgmhn9J5Ry3jLw7i7CUeYUn4s4Q9YrwCfFRJrKT7XWdd3GunNBUT57rrrJ2y",
  "key4": "4cSthH3END8U5zvCdWsXWLLrYjjY22pvxJiVKdpNWCDsVzLDUKPGt41qQ5CL1URrAPEyASwsDY5eE6ewkQRJBLJn",
  "key5": "44ENXTyRhc4CSZHfzMX5QapVP7dg4zFonFoxUHbkFPLMRDEgbYN8HpvNzo3sw8B2J6JSHPxwbPW2CdGoJ4z18XK5",
  "key6": "5m8iAr2SCxtwQhLqrkvAUSmY1DQJgVaLexdx9sM2yXPcSiQLEqucE8dW2FLzQBzRHNMvVxSSxV7a5n2bC2XY8wPE",
  "key7": "5ykFovLkcGGoTHnWnLHTT8b1wM73dfteg9sepoHFfGK5qP8ovvA9GeNUSED726f4yy3iJ765NQpCKwy4s6BKQk3r",
  "key8": "4nM418yjg443fh99AqvgnwyySXo9EzesBM7teHc7VVTYXaC79yiJfKn49kumvJj1nndxNs4XYXGd8R6QJ8WTJYLA",
  "key9": "5NRNQHqZNGpmu9v8ZDe5r53CH9Lf5vRow9CmYxQyuMHaCKitmka1JHEyrNaZ4cFFSR11fAKhUQi3GGS4DM4CCN1f",
  "key10": "Qi5qNwdiVKP5oXgfCkiW7zd4GfyHaM7FpxK9SkUmYbnxpXEK6Yiaf3ewwjFDYX5K9B862LpN5a5owAC6Y4Q3vba",
  "key11": "3ezHdnv1iQ1XtRQpMwq1XLa5zMzVypPvZXpwFwZzHSYTwTB8w8pyFVoDswA7qqaJXivHgEx4bkyjHvYsAiSZEVkj",
  "key12": "4L498wh6eRt64EUYqZCuK7y3SAzfj93xL1NNQe1fiAsVF7eW25Y8A5oP5uw3PJJqcwRkq28aMNZg7656NPDsx8Kh",
  "key13": "5zeY6B2LTxsedExjKDj9M5QXSaeUPx4KLSWenmLQjB7y6DG3Cdjs2w6cz5pBuEZG5BLB6DzrcNuPyEyUdvRyLsRM",
  "key14": "4B7wAWPFkxpgiAj2Yb529oeQ4He69BEA1WJJZkY7eBCuCBTUFo57atTGqwanv4QoHy2HYJfU52Qd7hGTydriUetd",
  "key15": "5mj5PDfuzy1pBt1nS5mJYhLfUSmwg6L5QcRCYQwLa3VidMMDzD2rrqwCS5dqVGru6FDMJYzeHRRchzE6tUJJUYfE",
  "key16": "4nJDnh6DEQCnLNkbSyiTwb31fmDWqhrLfq33EoGYTZPNNJx37TZwTZoCRN1GP9f8EpoRXRf31oV1Hu5svLT12enE",
  "key17": "2GYLnjt45eYJNeQmhANYdaERhgFyXfVr3Roh35sMBhteS4RmJp7czF9hbkKAdWy4m6EePxubXJjAU2LLzJZP3Pr1",
  "key18": "5w3YCoBxhMvCmwqVW2dMP6YfjoDkRXoXoL9KzdWeZpiQK6K84pQDkYjMUUEPdM659YF2TzZdTJRL5pD35GDspNM4",
  "key19": "4eCkXAxGEEKHLL3UPyH4qzteY6kWErXDDFtwfcrHWpxWQCXqA6W9piSBmkaCTedvuVbD5rBojnoSMfYzTMy2fntr",
  "key20": "RLgxB4meDDn6nGCiKYbDdb6zk19edNypsWwiKRo6m8RazhSg32tDc2veWXa1Fj8X1o6SzchPCFVkNkScC31c2Cn",
  "key21": "4ff76mdNcDEoF857RLBR6212BTrDDP4zJyug5Z6j2g2aV2QTq1MeHAg52YDiRP6EtNnnkVnQTWSMCtvADLWPvJHG",
  "key22": "5zMNscGxbkViAWnCsaAShJuf1j8AaxyYbE7oCkyYzgPgZ9vim2hMYba1EGD71zvwje1FGziz9BgAbe6imZtNvHYf",
  "key23": "33bcqvkm6JudS8wQBzDzMxndnxrEnJUxcCuqg62v2qoegJVJDRc1m3Lxxbx7zNkrXthhWfn8mequed4UxqBz1rEK",
  "key24": "49oFsDM5amCQ37usb8wg59WyY3Mffzx53PGsuLchYvL8wCz1jerPnpKqgcG78BxuveLVCANX6Cb9v2rB5p1V4VNd",
  "key25": "4t3w2qPeYKccH3ARqrEzVCfmzpLdz5atMKJFQUFNehSehh4maJQo4hSsEwG9fN3cE769aSVwTjF447UeraGwQVwr",
  "key26": "2Ki4DzEdVZBLXAnUBWGTuYbeUSZ8xp6uXPWcHWSaNNsrHMabD8qZwAmhwHJoByBhxdtrRvu3AFc738kVuwmsV9bn",
  "key27": "4G4SzAH6Lix12skCuCBxtd3nSyjgxZxK4qgPqRSXRHXgZTdtXQocXQdrpXhWWE3quCTBmmd8mAAa7mwzxjjT4EQj",
  "key28": "uR7Hxpkac5PhBLfCPZEo2L6oHX672dx1xYmJXuksYyB8oQN62PtgSWjTFoEsLdwVoShhpS3BSQ3xCsJPZxYcbkB",
  "key29": "vLAgu7fvgcuY6RNNnTrm9ktdo77tuZ1aBizQXPe9dFQ6JpnN2vjzgnutv682goUQicPZEq1XDqR4kTJbCbxaq7u",
  "key30": "4rGhbpPupU8gikaUV1BeRYtYxDzzEXbvGKMpwLhySqDcrvebLTwiBfZHP6e7MMU658BdjNLnTxNeFcMwLt6Kebrv",
  "key31": "2bBTnEzydA7GRZS2HjerVR4THBt9Fh2DonfRgRWxEC3KFSZZqomCR1yVmSvot1GSxrWyoxZ89GcHSq3vEMt2J7Ni",
  "key32": "3WiVuJD42D1x2sb5GbWwt3JdZyKYuSdjTNaRPnEwmhCnVDL77vpBCxwaeXrbRV5ecNEL52gpf76ATR4jDE8HKoF3",
  "key33": "3oUSRTAWkE9t3egAoyFi3gbrWjNwWpgXh5qFZrqhiRna4nZg7AW3wGkvYxsSFWPui5BXdQNW1J2dY78CVGU38bbu",
  "key34": "Y2BPpDXSBq15uPfvqmVCQZnroAuGiYNHz1J2zV1mGTSkRxCt9ahRA1uvjWqGhtgsfW2j5uppvSep8nZpDZGkQaa",
  "key35": "3w9Ykg6w8w9nLBrAV6dmetXTDvtpDJVEtjY4rVV5i4QG42sCQuMymyb1gzjYpqwjbquBxZGuGbhizJjpofz5Nwm",
  "key36": "5EAag7MvmwzxJ6WbeQQqdJiuka2ZB8A119HkZmDjYVjWV42ZjwDkwh55Qxhz9JeeBn6FoHNX7sQDQMmDWprLSWkp",
  "key37": "Y9YGpxkABRGWXhE2caKshJBFveojj72TYYPfKYFaJ5rXqY1mgZ8Sd9XNFCUYtRAAMbgLW2vkyqdZc62XueUBqzz",
  "key38": "2BKWgkSCjZHEmTzJPEMpeb6CZx7EJbax6fVMtwsMeCZHtEJo7WyRDmEyw8WkxvxgeJRoaNebQmngrJzeaStUzcV6",
  "key39": "2yMWHxS9HetvsvgdgDZfZtZMabpnKHjnr2TB7BZbNnjrLTS7ZU3SxzQ3hzataDg7aWFuCThvnM8qTMujK6J1xV2x"
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
