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
    "5E8LKTJp8b8cJgejbwpS65iRKoDpHhzwxcnXezacsHqMdeJaGAkp225oMvDuR33UaU4mfzHxZSHUpMnWdLzYC689"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djq3vKwiRZacPTmPfmYQPbsTrLDCwmaSJQvUEJ562aHYELBqte57ngTo5Ff39LE7XUwbQmZfgau3NpQfyAKbnAM",
  "key1": "5pv6nB9ukeSF93j8wUxmuD692Fo2JvGz5GRANNzkkebB2NsZPHDQ9f7svg8oE3BS5kqWRf1T3r21QNX6qfGkaqMc",
  "key2": "3JcDPqnZofQgcAm4e6AnvDhoS6dto2yvZD4cxoedTq4WdiiNKT1jBb1zQCXkBugBQXbpVJfcLeVzE8SiRrvqay8X",
  "key3": "4qYsMHYVzTLyuBtr6P1Yv2ag3gqnkYJKaNDYS54gAjJHyo6cicbqnus4DpHQ8aPEwX8fSKhx2BDRvUY8ACmywXR5",
  "key4": "5RfDxE6XHAcrHZib6vzVtWedo7jPX7SUXQ7swZGoBG59cAPiZMsDNz7gJAYHDatuuz8b1VrPGMzjfPf7dbsNKC7x",
  "key5": "3JUwAEtXuq1SrEn23nL7j2c3xYMC2AmoDHmdZJqQtKmk3LzmzYTQ8TUK66thpcp5BAgWLR1JMQm5cmxLkjnM34zF",
  "key6": "33KMQDoFXC6h9dtgvCnoH2qvjuFf65sGEV93Bzb3cHqpd62uMRQgv3z1JeWBJqBZTpvP8vWva3z98YDe9k1uRDeC",
  "key7": "4o5SD3dErWXfnUdxqNTo8jjgAsZg8xBM7n6PRRBZvK9mwXFxXFGDXU7ksmpkmCFiL1d4B4ARf6dAuwko6ozVqsxQ",
  "key8": "3MS3FMYq2XDcx1i83Rzv8Ldw69QWPuphTDEEiwg4XxtG6WPSP9Vf4YJqgNiPTQXQSEvxAxFb829Pf1TNpvt5qLU8",
  "key9": "21dmL8Fzx2yHLoX988X2XLgSsykSAYVC2YxhTGm5KFnamGQ6Gdc5kJqSYqhc2n5bbNarnPr883hL8g6Tn25P8x15",
  "key10": "HeLz7Kp71YtMin8RaYvzDUnHQ83Jn8XMKRiacyncbSTuhvpXchKZPVST4vrv5UGKSwctEnnsJwurNtEzvYrDPox",
  "key11": "oA4atDTLMU8wyL4LuSJSBgsSXDSHPhJdp5wB1kRhFWFuho6HhTNNpfy5CuD9rM4jjsZTGVkEAXGMrT8sTzhUysa",
  "key12": "2cURz3FYxWazt2hER648CurqXq6rXok1DHLrvk1nH9NkQkhDg7xPzZjBcZmBQCXrsdWARdQspqxbmaxzXFjcDjhJ",
  "key13": "3bRv3Fa3WYWm7kB25LESuUsSsugyzTBMNNkB3cFzPoM1X3JfE3gQqSxmfCvnbS6DnAWDZvbQM48BAhegZryxGqWf",
  "key14": "23pcV3ZQcck5ZGiyrTmPePFP5NGoyTWqrh9jaDVrd8AyPCmm6MMeqjgHJFsDGWkac2QTkgMek8ansANAUajGV5cv",
  "key15": "4LMwj4uG69tqJLApwmSm3TYu7hKoXFv1CkBVQLn78oEMcUxqHqPAKMksCpmmPQdepV8yGvVNGVw1a4N9NZHkC1Vi",
  "key16": "2LauDGyD5PEEorDYH4eboeJgacUo9NpxqWxsZWR4DBtSpMS6nceysgEPRMWt1ZeRmgf8z3wwNBdysFerRv92kU5P",
  "key17": "5CWzYQ5vMeUD3uT32ARxJgWgwgnkCLZ75xB3fN4CkFAxd2bzbFLHufzfRiGZAsSvezzJE54A8JC6UK6eCGRKi4fe",
  "key18": "2zhEUoGQxJFKEdSMfRFZzsFmuuBSMafkVnP6beij7KoXYMn5oXKf2G86oWwqTR9vFmYjJ2Ri8WtpWP4YcyefEjBq",
  "key19": "4YymY1gwnQio1L3X1TKbsjGEdRmGpXimGWDYWt3nxJgTN7FdP5ARgcFHP59VgbDq8brTdiKpRWBzJ72zXP5VqD4J",
  "key20": "A8MwaCALgJSFh2Wr11Kh1fituBHyvDTae3B4BzVemEbYDX4xuqffLfoB8oJWwF6Xgi8bYEiWMgb84ocDrb42XMU",
  "key21": "m2uDHsw7yv1rWbASsuLRzBaaPW8xBQBSiKNXtBgdQHxKdZueaQfnhb8GfKcx41UaokARJZ8ug2eVa2B9TdyHgAn",
  "key22": "5D3SszBqYXRkteB8pqGAC7WAdrurw4EazFAWkUzhmqKiSPJhX6Pd44j7FV66GxQdSGyQvXvZbctPVcNEACxQGzK3",
  "key23": "2QvxokoBPtNLSK8PJdY7r4rs6iQ8nAvXnuFKf1nyRZ9iJDiA3zKazDRYt1d15NyVfi8FdLXts64smadWPiXS3MjK",
  "key24": "3EtKvFRyWQg9xBZrhpH8bupmENiH2eziaK14FWzj3dAYHmxhvmPxPqAcaXQwBE6xfqHVoZrB3fHAXibAXvLjZGVN",
  "key25": "iNgnzjxA6Ny21GD5MGPMcWDNJ9niakRb2W7HLZ4yobavNcnX1Dm7Duj2fqMjESgwQcDc3PFRyg6o9gHbgAFgK4F",
  "key26": "3BkTqUpqWYrCcg1X59y72D2C4uzaEGBzQeyf4zvfQeZzZaSv5axEi3FCsPZSAHdC69FjiQY6sGQ7zPrqJxRGPRPB",
  "key27": "4fbfZwctrk8UpF19yY2MQPHhaRuQtQ5BiaSNMYozKJiGoRMipbB4UowAyYXEskvLJ6EtQ7Qdz1Tth3HTUccjpFe9",
  "key28": "5aeG6FD7PncrAi1wjuEdBkftW6evGob9PJ7gZK17c5sN72vGqjeRNX5o6LhQia9ewon5ShnECEYBnQD7a4XUxd2A",
  "key29": "5cBY22Cc8PpTN2BJqGbWV6WG12Q5AR2niU3fzFHNGbvqTafs3paQisvRuxHJnXjQ3p9WLBo6XwaDyW4D1QJqzJrE",
  "key30": "3RpckziRteViMy6WFNfbWmujnUdEYouFMNrgb731eFrjvV2f3L9Z6g6pexyGvDmM3cxSNJqxVpZ1hMtE6vTh4zct",
  "key31": "4bev6Hvz2ChpXtmwzdaJNCX4jpqXpgorcvJ98Q2oF2ckTnut4JHbq6bUSJLKnRCHE89VzovduXse3zDJ751guqaL",
  "key32": "3VgVZRr3517bBufQQRizqfD8xggk77e14N1PM7DNHqD8qKrbXre6hFC3YkrgaxeNB4hwd7psgNbnLevXpadc45HD",
  "key33": "3qk1WPybppa8TKTPenk91F7xqMbdHxBffRU3Yhr3bQPBFfNveiHMZCk4hWzJ6JDKtMHQoyA4SSNDQVwbU66BF4fA",
  "key34": "bS8iKnrG4R3WRefcbYBG8zjsBtkPxLgAvVTR77RgXVTSMwy52NhJDnqGGMbCxrCKYm8bU7gVt1M3Zf2XNzFgezb",
  "key35": "4VJUKPFwKqw623MuESE4LAocei2nQfB5w44rsmeQGZ6arevq8pEzMnoq4BX353NV7T8SHp5SfyYuukwX4JeLALUC",
  "key36": "5yi8Po2t7Dfouj6Aj4QHTUgct9xLiXRgDyMxNrnYNmYyNi5AzvTtnF11gcwqUFsn3qihN7JNYoqWeg7JYz6uKLM3",
  "key37": "2jSx4873tjKwhHL5VUoUgZPTNKYVJNGJgpfChEDpbhsZhCmuxS7W38xDDq1n5XcF7S7PmuQ1thQiKSk98GZtH9Yo",
  "key38": "29haWkqwsjePrdYvVK8YWPvpLf1thEu8xoL3EFND9zjEh9vRvKdheYi27UXXq4YvbPREQfaLkLHMXJPzRcJAhYd2",
  "key39": "3y7udv77RRxYYzUqkpcbmptEETbtxeGJknTiyxKLxSRTtnNEgyCiGhLTGEZ2CmTS2qnxFLoCS87AbgBZ5YceLo4u",
  "key40": "sLf13QFLtsd8Vq9w1Ht3ZqwHyPxrwJaNVSxeA6T5wWED5P745iottDZmJwtd5q4KQAwMrVkTYvE4iN2CAyMxq7C",
  "key41": "3TdHZjCz6E4db2YYezzBy1JF59XLMq3BSo3gZ2uu6DF1ogdFB9SWBbmEyBjrgHErJBvZ3Joy4auvY4mN2RFvoZAc",
  "key42": "45syb63VAw5ZWTqc7CSzNu3pb768VEqLxBN3XHHXBEaGSU9qUbX1UmAVA38mgSTdrk2sZNAgU9ZAAbFaErsbyW2k",
  "key43": "3YgXPPbgrS92pCTAKXGfTyDXcEdfRdLNndJ7Rv3Tjwzo1hsh6duuTgLsobfq4vb8tJvSJmG6tPxHUUu2Zjxv4eSx",
  "key44": "3RHNtxDob42NVYVwHNn83SaJ9FX8F2PaR5ZYfiNEzUTeWKath1gevjFijzDVbdUF8X2DYzBLnJcHsPR6sqQXpNdJ",
  "key45": "R5no9iJcV7t6DatSWqxvZHV5sACJSwVLueiixMtsX4KucDhcJoshAGAFkLbyMnbGxgnfaTgUGeFQxsQZaCm7Ryp",
  "key46": "2NmjKRiGX7UgP911r54qdb3hFftKWCJvka6wA9SjZQoKAwK3WhfWVPiSu6pW5D4t2Psn3RRSKsEziGMUiioZMzev"
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
