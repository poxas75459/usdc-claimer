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
    "4GAZs3P6pQAa2jZngPRU2uTDPwNnTkHkJpSW8JPry2T2Nb72GeX68gdh2g9gjpkQcHtQyoE6HfQ3NaP8crB1ctpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fAyZ2Y9PMtNPvyxP1cXNNg2YEMqcD113DqrJ4cPzFpsUEpTPYyMvKdziWzJPsJV9SdzQPhdLrhqKiViXFqmPYzn",
  "key1": "f7BD49mKSUDr1NKKmCyMi6NEMuu3J4bL1sYy2uPGgUExYK9x59eiNtwqfuB5aFH8T3vMuzCoqeFQKG9VjTDePC7",
  "key2": "2ehuKv8BYdmfyjjHV6biCriX4J69nE3xUno5xyF5Yick5xRXkY2LJmRWJQPyjXt4vh96VWjwm7nxjurRRpyQr6xP",
  "key3": "2xrzUq3QBhagDLabZ1gwWJPV1tzB6ko9Dsw13shFb5wtRCkuG8psSrDDbnUNtvqcR7pYKmtwdCmgvfg8XUweAJJh",
  "key4": "qVfkqqsKAJk51rvdhzNnMZv6K3ief7xVEGSy9ptndtWRPUM4ZAHnruSYQhXZSQe3jY2QZyCzGWTPMbUpLKYdt73",
  "key5": "2j6usobyMWF4LCjyAT1FaDwg2DGK6gUQ5Dyah8rh7uRpCyq6FkdACWkWjUb2ohRkXAH9DCrSD2CTQgLEMk8mf6tj",
  "key6": "54EAW4g1V3BCFc4w7V8VvArVpaj5EamvbasxUumd4XXNF5ZdfYVk6p8b22F8WYoHpyHe5bWLyqC7M49LwxgvQQXR",
  "key7": "2Ji1pdMDQ712GvrCmecrSCFtmaDJMYwN99iAuKJazpXTSqxqUzmaHmKUAeY2HrT2vWEh5d8QFhV2KaRP8F7ZQTuV",
  "key8": "4hqAZdFAU6kAszMX6jZ5H83dSt77ZHj5c9VzPWXWEkvVmdLa8cdU3uGiUJ6WydCjD771hq5PGt2Dxvk6p61py2wg",
  "key9": "41eD7SveqhrEwGb3jpaQTzayPNkVMtH8HjPQ2GVBPNBuVtw5xPK4sJpHuSjtMhaiQmzTPZqjcUDcuhh2STWh7ijT",
  "key10": "34wD4ibvhUJ3d5A39ksZ9g8pJeDXL6omjcg349rPsDzvXzh6eWsnyV7NqtdsPYo7b2yapqfJatNM62KTHkBcxzWc",
  "key11": "U9ixbA9g64Jx6ocyLMvgkFMeVJ2doQiwpWvMbx2wrSuSYzRuGDyAopr4CWkDYvk3KknnUqkfhsKFhZcCCrge8ex",
  "key12": "3K12EjF8qY8iB2to1fBnHKD6LbMu1Nzbq7eSaTNBCeeNB2bS1saQK7XG7drGdYUXud7aR6wbxh5asC42DeBcLX3Z",
  "key13": "2Gw38xFvSwL5Zc79fX4qVkNSte4cMYEg2JFRU1Ke5ShVXHpWZgnRB43CYV29nXU4sfc345L6i3Lntj6dZQCUkQ2i",
  "key14": "4wXVmGTnQofzD3RbUvc1Szk9TRAfe5TgfQqJSS2DrRbnNSHvE5FcPrHMDNpAEQULf5dY5KBxs6c5A179vUzQAEa7",
  "key15": "5t1t3WvajiWPsR5EyfhDEKEqCch3dxX73GNp38uGCjQUuihmjBY242hr2uJCyYeZoXkF6hDDCp3dPtEEGxzj7RG2",
  "key16": "2H1P1yg7wc5vBZfPmaCShA4YbL2NxKXhzzBXPbne4vPnwzukVHkYGjY3FYxQbD5t5tVm8xAmnqjgYubF58Z8Rm61",
  "key17": "5hNKgUzLKyBMaYNur3Wx7ESTsSs1F4pbGftHxHiBupWjUMMzkD88c9et4sVfX8vAcFMRau7keGGDc2eupzetjYpU",
  "key18": "49KujbRVaRFepUuWG5UWjp6tdhB7EH3Q5NFBeyhAM5hbwGdTc63UjD2GcBQKZDfNKAezdN9bHFaAoJC1kUYzsY86",
  "key19": "246xzrdSXLmDAZjQnuoXhEUozSXnWecYzvh84SaCiH5CMG8CxczUCydhu5M7ktR2crYyqtvu9cNCnmYSJRUyLRpU",
  "key20": "HskyhJhw9S8g9HPZguAFR1FuG547nbFR3q1Vu8RAQafGssABKx8bjtWpDdCvMKDMDmvDMm4YCm4iiZ3w6zB9mje",
  "key21": "4poraVWz6PttMtS34fGQZxXZcLfqkSy9g5yy8dzT8dV8rDCkou2jP6zvdmvtNM4THDZXkAKDR36LNfEAetcVttik",
  "key22": "4rSkycoxzt9YLdweszQmc8fS4GvjPtdR1YUGrcSLqYs5e7LvDxdWrfG7FrmRseyDqBmw6Qm24czJkVskYEJPw39V",
  "key23": "2P1QrvpuYmxx65qALo6DLqfkoFLRm5jn4iHXnbyrHV8NLUZdu1JqrvEVbozMxwrB3KGAkvJfuFGkumsXVcPLGQ9S",
  "key24": "2Tj5ap4g3vBzxwBxEXjeZB75Cc4eeidDx9AjaVYivbw5Z2ra1tdYTajbj9WVSLMweiytZM2ChFSGcUL9oAAva1Rz",
  "key25": "24JHnpipyq1myakgAidAjx5ZAUAD8X2QQkB8LNXAj2WXtZLNekiYsaCrU7J96395zcfcTcF2bhhCHyT3Y82akiKa",
  "key26": "3AZXTmDxZcBh2eMNcH6Hunbw47S9BqP4vrTEBXHy3AooEfvNoEZRwadwCFVCHKxC9pa1jGeaHpEdtD2MFsiBdJsf",
  "key27": "3uWWMVfPVz31YU7mSGzDkPweaVGKk4NVEKGs9Q2QutbTmxMBxLUERCe6KXZXB2mw3tcv4DkBjSMRTEZCDKYgaWxZ",
  "key28": "4W7PwTwFuzbvjtWs76YvuyNS3Mwz13j1PEEvLtbKoyR9PLj3AQXu6Asduhbaj4rZ2WhYjwbEx45MLQWJUvANGQ2t",
  "key29": "4ToZoX9SnbvN7ZtsENdAKZyoVgNc4wfEshCdAz9nWoPzTXtwYCfigyJG34Jrzwqi8y4e3HxUmuiaUYQxFC2p13KG",
  "key30": "5AezMcZFsx8tCz92wJ1TEKyCZpEWyFjKmq48YymZQm1kRkqHAiXedgW2xqEaBrt36CFJeB7bX6AMx2UT6Ggd1r3u",
  "key31": "4AGhFhzuK3BuM2JXWPiTWN3qxWTj4RXrL9Y5x5EJmSX7amhuB8wEYGGrNdUnDJf6DUm2brkEow2BU5ThB6bYKmnb",
  "key32": "XZQrCKt2HTcrTUmMMRp2RV3Q5BC1HmWbTMKCHuLchbDSJgQcG8wVTgkgq8mu8gEPhMxFZBqRd3ffQSuA18fRynh",
  "key33": "5qK74tDcCmTsFJRi6nSK9sqzP6yVXivZmSnZ2nJDGVhojfhmQV9871pNaS8mofY9ERRHmy4zAC9iNi1skY7ffcL3",
  "key34": "3Jvrr6UePhXmQZhqpi7XBrcDg7HeHSpwJcazdFJJUu8Z5CQ4FNbT22sbM97JmdZDg1poYysyWoiLHrTAm842wEBd",
  "key35": "3cpvdBpNeXmihBL4zyB8t2Emiy1g6PgEHWtwUnLZm2c1F8QaRUtmsYiSDrmNJjWG5BCxX7jwCtRgQbUNzhAJrCBs",
  "key36": "3B2GwXp925J2ZcM6qSy4zkQ8gUHDZbruEJj4xN6YoWfdQaLTxfc3rraBqjEWY2V2Hhccq9Baok4Vb4ajBhKHVNFu"
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
