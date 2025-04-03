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
    "566zCkEjX6S6drEmLpbWJ98PcQFVAwxurFB7rjrRYtAZ82h3s7SxciXfURPRXLdJ9r53hWozHBD1HBW3cc4HF3tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsXAYXoXyybmFeEoKxEUgtk9LZtoViTQNmBV5egBv9CovJ9y7tmwTkDuQFoh8iGvvrxAyf5PJ4dHuUFPyz2joJG",
  "key1": "zm7zwPRUxaihdh33maGfeBmJHBmd1QeQdYwgsEadWC81BPNF6KKNYe2biuKyNh8sVYY2KyuprzuKeNhN1yHpJYH",
  "key2": "LUHaPaF1ioBVx7iLQbFgziSD9CX7tP5YNYAeMpz5hL9sA9d6yyoXS6wpaNM12WNEjbyJeXyLxFCEb8pzxEMW9mK",
  "key3": "4V7euiEyUn4kSzhcrQ8TMCezRo4F3THptc23jPUeAPtzzVcvZh2W6tqBYLfSccmxhHij5Ae4tw1RFphCwkZoKcHm",
  "key4": "3rMCgbGzgrmGYUk8331wdUtNWv6qg7QqbfR98kiLKKpSBZcUBFt2pWsePPubmYZPzX1DCkXkFn4DQCJygPj51mPY",
  "key5": "4gBCueB3T5ZJRh6EA6YKtNEzjN87vdwFpzjvV5bw29wNXcLprMamcmJGBa2wkKMFtVAEidsC1thX3MGS7x2qvVo9",
  "key6": "5WHejyeA9iwiQwrnbV2xqvHuhixsMfpZwkW73diBXh2TQwvJPk1hdeSBetZ9F374dXgkrLfrS8F2DpQYL9WaRXNi",
  "key7": "2DyBrrWLiDRRnEvUqsDPi2R7QvE5Umt9GcdPbenCApg3EispZUoEbeJmoFsf4eauaNNxCZKreFKZNmCErUPmN7Q",
  "key8": "2Gu3JvDns5XgaeYV9CwWy49WNWERKjM99xrTMMWZ2ec4vzfYFR1oLh11q2gKqHUHdfKzafASe4E1HDX1kvxDw5Q5",
  "key9": "3PnXNN7Kf3ioL81KCWhktSuXmxdyGptUSNazuTJftv1yhputmTUuAX91pDEnu2GkrQt6sMrRgbXVWoADpwsED3tr",
  "key10": "2nKehgnSEV93mp65egswCfdnzAfsrbW5uDUu9zd7NXgyHipra9W1toNRf2dJu4oSzY23bxMDjJfPFqTKrHbStBCc",
  "key11": "4WBcDSicSYTrMxQQuVcSCpFmCLENhpc1XGaAddKa5ioigBAy35m2ArcrnTawwbexz39M9ZYC99SFZPRjnVDXmMvK",
  "key12": "5sWac5SMAHNmxoVW86B4zAUwtCrmfGYRXstjxgK6yGoiJKudwuVaG5LQQ9P5MXamvfn3qx18qaFwH4ak9bpzwezo",
  "key13": "3ZYb1vTrFr6tJddB4o7B4Xhg8bW71sKAaSzxxFngtwTn9ChhYDd34gpbW3sihCLV2svoKGQPPzTqpi2SFZG4ZB7N",
  "key14": "tbYmH9yuZxVYDJUzLc4DLkBzujt4AN8WARF4QQrBYht2he89PfsX8F9br2myzMw8YwpZmd3dasmtkvHfBgfujv9",
  "key15": "3o2eM1gNVXHGDBNRW286117CGYzE9ijGWyTcaQtokih1wYLKSkn5QqqEg462MrMVyfZCuRU66koJWfkigHKGTogt",
  "key16": "4B4ZDrK3qmNMLFCRYFLJ4oPLiX6EPCA1r6CwfQkvq2USuSUaSuBNQr3r6YDcGtUFoX35BzQtLNi6rtVhtmZBB4xc",
  "key17": "ux7vMmH1jCKrp29Ag3i8RahDNYU4p8YM7WpPBa6dWTMs7DySJryoP4FPHAPoMfyrr4eCC9gnAAfgaAR6jNsNKxF",
  "key18": "5zBwERShMrvzm9Yju337FYMTor9TtXhATAGp4tmnQuLzGLBdMSWBwhEy9RLqeArJN4QpvubRjCx7EmmnXdCo89in",
  "key19": "4MiyjTqNgkoz19KzTpnNr7CYY9bXqumPx6DXFWU2Q5yLFjP2YpsF6uL9wDZVwKH8vaPK2RNMKpJ2fE824VBWrgnR",
  "key20": "52uC53YhWGF6CTkVYxpPjvvMnec6eaygjdb4tNCUfnmCGcaFoNdZzHsUhzh5ddZr6aMoDrGmP8ahgdjCv4StD2Cr",
  "key21": "2JhKKJsX8EALZM8hrjkmP2pNYPR9x1aqeyfS7Ut7KfJGurCstQAn6dEcD56e87im1gE6UkyzGyw7xJRvX1NfQBJA",
  "key22": "4KsnqSUuGGmfbK3HYgSA45vE7pGddYrJhFs1ZBHbG4VEdgbqcLAyjB1JoMgcX5sp79XvAg79nemgRRj64YQHLtWo",
  "key23": "3r9cPjAdTz3snixMZikcwyaiTFxCzWQMZifCGLPrhGiBNUFQp1g5eg2hrZU77uTzGcyLz8TujcQKzmGS9XgqmGeP",
  "key24": "5NyohHJe7VtFGQjua5AT3HanWEXvrXbKdapGtyCuVE4SaByYsQT9Cef7HLP7bMA52kWTxBwJ7bUK8JMvZU9ffyHR",
  "key25": "5xzdog5YKj14bYuiY1zHWRvDPfkNKNEpcZah6tv6np1fbYjZdBrXDdc1QEsk5y54zhivMKjq9GEYK8JKjjWmW92T",
  "key26": "2tLTiT8RR54ivanMf4uxfj5SYftPDspT8uxpcw48XV2Y9JAQfbBfEN4CjeMaPj6jf436RwKEH7QaA3nUSXP1gdmY",
  "key27": "5cynPdSQRg5hdsuN6sfr31ExtAK9BHEHqWUa7GYxzZpx33i1oqSM5RczNkkRHu7DdbstVoAzZpfqA32QscUdsrNR",
  "key28": "37q4Gu9UKbDGNDSnXbqjmCSuBZbAA8fdqbivzC71w4Kn3tNA7vRUnoJdhx5uW4vDNc9m9R2G5NDnxEYtMepsR4mh",
  "key29": "UFkUECF5rshGntSH1s5Gtedew2vTTiWwS7mD1wEcFasFZdZmffWCpg9nujLmX5Gjc9t6kHHCCLDdMyG8DWptxNp",
  "key30": "5YwyfcMCy1vgeMrGSHyzkzsQcqL4d8e8H682EctaqMj7EvXTdANDhhwPyX4YRijEtZJML4UD143mF91Mu32y2mwR",
  "key31": "3s2q4MP9xvsy1qVbzKM33voRjrrrLxH2DCd7Jko7gFHWfQe4vv1u2KvduPDbMtALcRCiSdF3M8UHvqmWatHyrG5Y",
  "key32": "2n2ymup3b6QWRtLrKdqJMBPb4D1svoA1noFjRr859rLxwA4C77D7BFkTpgQBE1BDk15DAiVXLf5pevXjAPmcoNfo",
  "key33": "RjtHu8oW1vgwfrEsW6p4FvC9WkwurGpUaxMHnEJsqwBzx47vD83cfkAEFJcwbRd3bY1D2LNKuDMUkheAGz6dU1U",
  "key34": "3ZZRUJnwVW4Pa5n23NSUzuwzFM5Gz6gNpkvxjfJBTC8kJphQZFhxkaSa2SucHWH2AWqQD5qDvG2H8HHVDCWFBU5T",
  "key35": "5EveTPcAFhR3tLB7UzQS1PKNTFVo6bmfj1g51HiVr1bXtvZGQfYMDH2Aq5KNADkom3on85qyvg1w1qx3ZgSDvW4N",
  "key36": "281LGcc7CgXm915kuhxQAbrHTtNGFd5YBNpukkpcykMVf8wBM5bBZDdWFrGuBQHansCv13JEK5WMomCZ4hZrqxFZ",
  "key37": "4zrqMS8awLyJKT5EKhUkyN4i1HtNCdzUrDaRG5buHw2Azqx5emHsnm3QEBWV6CdTHxFg2LG6F2fpqYF4hQ5DiDmM",
  "key38": "VV4RYEi6qAkM2ZLQHX6BDpvAeztWanieHGxtYNjPtYkNpYDiekGvRC9Bb2bF1UxhPsvfyudDHxy4XWfHpHLEHUT",
  "key39": "2zDPWfdQbzPxq7WBJrXfi4Y4tMB6QXaST4AQNQP3SzvUHPS7dZhR8gSXVYhjbqBvMyBQBcGZkrfFQTrpobH9EkF5",
  "key40": "5y3wQdRhwa85z31uyZehYyp2CyJdXs583UM35UCgMfFjs5a3T6bvTXF7qiLesjmkCHugXB9oy5aTFJKnSYJw3dth",
  "key41": "4bpQPsrmwWFirF8xMxA6yeaGEdtrwSTHXSEQ88kXyutuVLPFHN5Cb3epGzCTbb1RoYiNu8Hpo5k3kL1Rn1VqG5rc"
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
