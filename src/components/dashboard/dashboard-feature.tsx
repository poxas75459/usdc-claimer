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
    "5a4xd9jhsV1u8ngtpJMUQ8pt3MGeVDASece17WMu5TFQSmobug3rQ6L9pm9TKAqd4qzNMaHfTUpqcQjSX44iFnRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38D3v8uw8KKSgm3oTBtWXhU8hn763rHNWLTFkyxGJtzC4ftmuFpLG36reHXjyZb1wrjVidVG6XmcPUZFg4owudRq",
  "key1": "3tUiHCTB8Mz7azoAUM7DyXqJ9mN2HTr811mVTnFtvDDRConZjjf8r1PHpWwCwaJK98WBpKqNM5RH6Wq1EGkVPdZc",
  "key2": "3Vm2nPyBWigr4dZe8wThAkzNrh3DBRH9zikxwUCqS5Qm4GNKnWrXvVTKtDfMzj3UrMQKN3QCVqt92pR6fKpM5dEk",
  "key3": "4TBoS9BxoWub9YqffArxDb5XDWwu4GbsUUgndKpi2zKRUTnZePLmdKqExbXe6noDdFZ64FNuN6h2sCcS9VLs24oL",
  "key4": "dEwVGT56tAZm9KKUSHQaBHytdfQTPaMEcio2uXmUvGajgepcst93WgRGhWC17f6SSTHG6KLYxXCSProHAgzuTdf",
  "key5": "5cTjPvZzCMVbWjv9Xwmhd2wCTuRf3Upaj3pkTe3eK9LrHSmpnAYB1SwCVVC4jB2vHCjZsnZEfUzW9rfAysSY8jaV",
  "key6": "3o4D1zBcrEhrhczQwPsptbH6Zf5yUZbD4dJ9xrnn4x3XR16EZbAdpJRsHJteFdgkBA7hY5m8GZgroVqHyECspXND",
  "key7": "2HoMmfXcQmsroBeSZK9GGiLk3oxFEcaFbHzHibbHL8WBSz8MeoJbAPfhSvSeWU716jeVgg95ebARB8hEJ4fMVMdW",
  "key8": "oShH8Gx8cxSjxzEtKrNyHNw4DLDwVrw2Ywncn1sYd5HtHAfCPfEaioDwqtmr1FU7Fwdk6PqdGnxUdmEiaB1gutX",
  "key9": "5e8zWw7nq2N4VHgBux1vkoQgikYe15LdHqesEQ13zbm9N5RiayVm8L5bKrrHMr7fFNPT4Ly6VEKYxSBmfLkaoSp2",
  "key10": "2et7zthPpqXHJX252Ao9Hk7xdu3X4NLuYHDmMAS3wZvaMGChTi5mJ1dti1LWaJjG7mL7B7zFTDnXUkPU4dcPVSYH",
  "key11": "3CThYFb7ecGYUjgXzHiGkDgLYhfktLmJAbpQPyyUKBFbVgU9rtegYYKDV9vQV4vDcdPSytSg3ED29nLDekRXbmwk",
  "key12": "Cqddn1BqSBnosnFhbcZCoKTiv14Vv1Hz2VtpSeWgq2L11t7x4Ck6SNKegY7LDro1LTXgXkk1XTYLEh9SHT1JSm1",
  "key13": "3DzbnbtjeUzPAjVhWzsP9guSjzmgGCpcm3qredGMKbfimV9YXNFvqUsRVVTG31kcQNWHBke4vQmLbXD3RAzd7GEx",
  "key14": "37cXHQfKxXj74QKh1WDhBpbP2A1d9tgfXcCFTqUVthHPhK6DE6vEydmtCVfztHQdWvRNHLQmDtHwvWChMu4YEYBN",
  "key15": "216HjqwFrmEG6wfzbWf6xGsJVxFFWFRY4zBdrvhqhvKkEoAKRzQrE8JRUN7ebSGCKmqLGvHmcQ3bxsK3jSB9ynr9",
  "key16": "fEYFAU1QF1rt2yfh8rut6oDnMFKh51PVf3TCmsx2AEre9APHCtiZYgL88hTs9JkibBVNtqBXJQ9bRRBUiZKWJjz",
  "key17": "5XR7U7AkuusJraUbdVfeVojTwztuRiJXaJFS3DnDjcjsgXQWdMFP42hVYfGqsg1H5rPvQd8gtR7eVfromVgR9ua7",
  "key18": "2opMG3tjeW55YmUa41WNkSYvFFkSzWE9D8st5CZYVqNdTTu2bd1x2UW3KFr9CA5HayGsQhATknXMV2cetgAzCGJp",
  "key19": "5Y78Pfo2jG6BrTaw95nxmHQDEDgF61mq7B75LbMq19YWBePoRHmkwSqHhUVWdbTdntiZM9YBS4qT5jZHCXv5mWhV",
  "key20": "5xAFKs9KGYWcwMo6xcVu7wbpG6nrDoS3uh57QUHhpZPZYB5vvXgnNPzvDXeL242nhiNGXmGC3NXaitFurEWzsZiF",
  "key21": "3hJVrSugYQ8kvVCb6YSG8NUBB3jU9ahGqy5nEZ9neUWhjQWqVTEaZGBLWihnfsbPixGPxGbKLfN9qk6xbWKYYMcZ",
  "key22": "4YuaBax7CNipxnnwE7EchuBhyqcP3uTJXNFYsrMQcqEDhMi9czdabLgrLDH5cLJZ6H9FCJ9vziCWqUAKtTWFraD3",
  "key23": "vzNLpNWUhcA7v7hpNp6JvgyKCxV6hfvFkZUitb6UhbkdZdMppYBAsHxDMk6eq7uaUM91nuzriSd2T8nXFDbjxDP",
  "key24": "5yjptusiXtuNk2RFE3Ub3eGJ2YCH9i4PMCrwnVmpBeRY9S7HmW4tkKfXy1MDPHdbB5MZhwPaa69tL55K51MeXatd",
  "key25": "3zW3RkEZTU5hfHeTx6cejUxP2TkQjjoqSUVhGB17gxdHS6qgye8jhWk4Nk3GZZCN31vXemTtRbHMmjCz88mou4MU",
  "key26": "42CgMgQfS5oqacjpbWKJUmu7Ku55gR1YnaWtLzHJW744FyRHBaHsuLLfXbZ1mqZTBd4k93dFVoQwZidVYCTfmeMs",
  "key27": "55VZ2z69trs7Fhhrm64yfCqz8nkF6AKDJBNXBNJywPGy3mhRdshxaBFoc4pK55oxgtYD5QUQ9usj3ReWfzUNoXK9",
  "key28": "5ez1o8yRa4Y8Ldkm4sxsPmmHcAgvtLsvEwVeqaJ6GBAncGmr7CwbEcs2PeM6Y7bFGUHVZWjE2ca757By58jY4zR9",
  "key29": "2RFqQWtE2mhvPdpDUMuwNhJyoEShcQLDBXyf6pNDDYrG4aF9N1fiZYBDoZndsfhS9BxCbhchVghBYxJPkKEZKhVN",
  "key30": "d84yhgGsFv4pHEPAaDekmegBqk2MCmoUfPz2P82UtdWfgreiat4HDios1cL1knC61TmUibUP3bDb7YyUeDeJ9Zu",
  "key31": "4XRHiuRUPq95V4HfumiEpkXRyLc68CRypPMwru7XerVLsRpNZXgdGDJ7S1ksyGyzPNDoyjggBVTSayyq7KyRGN9S",
  "key32": "2GJYJVqr8UddkBFJVfZYqBwU5CYpQuzhatHYZTGB1kmcS6tTywZ9KhAUjn21FUuMDQtsARueoEaVRu5CbQeXje5",
  "key33": "2DPdQRcWCtrxgGDqyXFnAXNoRLbtKYed2twShYKDxen1scWxQ9tdpuET1HzwB34X2CJX6zUr4xfp8UpuQqXcWCjf",
  "key34": "3Xs3wPibHGMrHqFZHxhqe1VJYPGAqWYPKCvqn5bxgTYPixx3YMGMjp7yeEnHCW8Vee8ywmLRLXV9C9LauGpYdt8o",
  "key35": "3CGi5YGuGumgNFduob3h8zn6FUxnfcGJwxmx7hDktteGhTYJXDXh22DErbrbAwp4pawJWr6ffH5cxPndc7CgR8Dq",
  "key36": "5kDPMqT8PxrQrLs9kGpP4sdt8WzfSV19vDRe6YZXTKvGj1HnRLuGRVFaz3xhV27eKrcdQBHMYvyiHv8GwbgMJjhA",
  "key37": "2qr28SPM62FLuQxffQA7KeeFCzNPoHh2MwshKRB2QYbeqxyQL5L6Y5TVEj2G82RrF1GM1yb6QWXEb72gMqvDm45m",
  "key38": "3W5tfFtuqHdRMj8c2fLvM8F8BsbnVzJeWZrPRzbnA7623sZKsKvaL9UjRju33z3GTWNTkSexNGfA9orn2ZRb5zXc",
  "key39": "62BXjJaUfeoRM4zvAPwtK7HqZRH2d6RgRW29bpsS5VjL5CKrasizaNUita7nbzPJmycRUT1VXxDBL1qQQ4ba8Uxw",
  "key40": "43TSQwCNoEJ5XWFvW5SB3KwbMrif2WnKBWw9giP9nd6bhDDU7eQttKD4Ae2NBsQAmngB8uPvyBXUQhmA6r1fUfYD",
  "key41": "3NqgugXyry5rjceUhrcpjj1ojizTyEVor4ujdcnhPG94uRP4peq8inqoxZfPZ8t11crgSozLmrcDs1JLoPt1LQ1B",
  "key42": "4pDhoyb8x2aeLGSe2Pp8cQsaoSnFPucbxi9pWdvMeZMtPdPwqx1kUmKvDQui4D6eC3EaZoi6JPAtH3xUp9dsyfjC",
  "key43": "4vJSumxFUHTATfgbSzGoenwpfshJmWKDh4JaQn2i24WBjZxyKHQXid9eefiNNKMPoCT6kLdARMdWEiKuEGPaPjag",
  "key44": "2tdYKjHxQ12hjoTscffHyKR3jufHxfxEJ95Z9U3WmMWbovbxg2BvJewN9x9C21sMPNfQefAT21Qpc7fTLjCasKnp",
  "key45": "67kUcJ3HniXMYD8HnLrQTGvU4gkekDbnJtBvpHrVcue85j2sREp4zJ2NswMHkUVUhX9V1cLpxAGusdd9K46GNCKh",
  "key46": "jtpRZQf147urXz2jFrx42R7PZxscqLYhJNiweHHXQk7KrA5GLb11CuF5B6hif8w5NUzjUyyDBzTuGhGP3c4mCpZ",
  "key47": "5pZWWfuKg62f6scXaqmFc9kLCEtibRVqSx692RMWaQHCFLW4riYgAPN8pQ5mti6FkojLnK6QVoVZV5RLko6rXKf5",
  "key48": "5dWFyA2QBbRQp1BRNHCSpSaZBPaS4zCeMqHqup6s1EfCvTHPpBzfjTmGu9x89NKyEUt71uMrXVXNT421H4Yzt22r"
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
