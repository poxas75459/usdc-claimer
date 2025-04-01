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
    "e6GStDzdFhjMJ23nYmR2dp9TtxwQ1AZo7XNCSAJFNBiZHBJ2R3Au5GuELdyg7AvuscCGNS1VZEJZhdB1xymZZ1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ZmwEzakR4aKpCUAq1QFienDLKMrSHYnTk1T6dvTGS4Kgn3rbkXqvKZFzCHRoXpQDGzFGWzsWaFLdmDn2N7oDrx",
  "key1": "2v8zUz1Jez1G3W6BaVXMfsNaeBVhLviWHdtoEFp5kmKmSTWx4fy2P5nAwrfWoZUhjW7j7GLNbRoUhNrv6SRGqzuz",
  "key2": "2fyMFCvKiPSTiCiNGPX33mhYSNKG2fd4EzmCeZHAyMx7Jr3pfuwAoNQ5GhHq86p1oEt9E5zt9KvdXM1dZWRWtVE2",
  "key3": "4VTHJh8ZRVQc8anbDW9ze19SyYq86NwdU2y4k3vZdaL1X6wyA6keYFs81ThW5jm8fJQZRA2irFupvYnZL3n7EFRQ",
  "key4": "3C8mY1MaDHusomdTHmhe564LW9Bnpvu4xeskiGgm3rUfrVpULTHNBBqN5xEutdhz4CDKtVJHHgyH1qBiM8QukpwR",
  "key5": "2BiDzEXksNYKgGJc84KUBRNfAU9ysYBvu5DcNjeZv8sCtaKyHyAuz5NCAVQ2r25v9BT24j1iXbTc9oV441cpBLh6",
  "key6": "29teANU4usH29duJVkZsdsYMQs2x7D5krajJgghHS95iWZzNp4Rp6rV4uLDCHVmQF8bBRJdQJCWWiD9LSgJhmbLn",
  "key7": "21favZdchwn61dSL1acC1t6vZu4ftGMiM3oygJQw5cnmdABBwXurm5BUba8fkgvnTziukyjvswKBGFNJg4o1EjdS",
  "key8": "5uvmNgeF3xTUru1C8XGrgtuMaCSmXZvShJd2XTLQP6PjQ2XUGLRhyY5Gy8h1WiUhoobEVTkhzfHKJheswhP3HpE",
  "key9": "27zrHUyNBL24KrozdP3sZxkNhtPoUgU9uPeK3uoRQ9Yuoun5tz5RFUUXEe8Y2GACdpiRznbkgg9sFiA5dQHLX3Co",
  "key10": "5Ytqsbq7VUwdUXzwthRbszdaBVSaRnpujmhnu1j9JSxdE4UZZ3D8YKPs7JfMzERnhNKkP5XZpU8Zg2wRfZyqfziz",
  "key11": "2LBQyThhFX3AHQVZbpuZ81gVPtCEJT7vvPZMAPFTzqpHPrRTXoNHWz9enCJPJ4xJmAzoZbSvRAEBdHiCTxJJq1oF",
  "key12": "3QYg55r3n3FtbxxVmVZoQusx3effM5a1aMJ9pYGvSJbgk7fXhFWTnVA5UeyW5atZxrJXjc8KBkMvkV5SUuQ4r9QP",
  "key13": "4eoPz3CBuV8j46WNTVoj7YotPhqVubEa6qZ8hvKkAQWkWStaQtGtyG3XoyoUgTtu6THUPCJfQqrvfmTn9QwUKjda",
  "key14": "2dKnz2QG7jnakjYP9JhTowRE7Z1yAZmZwXYY7q52LypN8cVK6zNMwQVbGnNiU6sXuNz91v3skinevVc5iYGHhcwi",
  "key15": "3Rw5ByextnnXAzKMtTP4J1AeAv1BWvFG7ktnE1jTWQyporPYNueSoL3wr2H1stDyTEXvMNi1pDHiFccQc7mPy3nr",
  "key16": "5xfBuZ8TYamZwokfKvCHSYFg5fYAnNFzPfWRiMEDsYamVMSvS7CQ2mBqmtVfra37SXEQxJYLNzUw2hDU8VypAUCF",
  "key17": "3nUxf3sk4UHA9E4gmDweDYHDNQ8SWzwn4VmCGqDknaDRQpFSwFwtAmwwVkU4ag3yKZZYXKerMbiBmW7pVAekgLRd",
  "key18": "2GFhbEZQqj9bXHS7fBTquKvypX6PkgdUXBh22cACLEFxDKAuoauBSe7a2fKvb4vGqntyyrciFqbdcDJtdsrYELQA",
  "key19": "56FxzU4pSoHnXF8G49KsTksuZ57ZHYSjEEs9DeCnGvEAdJbLutrKYD9zrMR67HYVacpmYmmhasaN4NBG6LyE82nQ",
  "key20": "41LFLMZQQTYAXFJwPCncXoCLbTX4VtpinEk786s66YD3PRAUB4gGaYZPRjACBQDXB5d3nd4qX8mePRxfpLhFHqiX",
  "key21": "2mvfBU4GTMfLYpi8Cadzm82BbnWRPkY8eMkTDFLfhU4bGNkwkoChewhmVnA1Zxi8EKe9Z4BH89bYREsLmW6aNwMr",
  "key22": "5udKnFxV9LHMN9J96jWC8iWnBcpUkhQEFKvrzjK5frVSo5Nt8ZyVw2Q6f1HbRDiLEVThV7qtVXEW9a12jeP9Dwia",
  "key23": "251234cWm4TwWFnum8fA9yCReei7MrrLkY6DCaScXjp6o2shVbPiUBNHj253kQrsBaEmXeNuS2ev13zxC2RZFXG4",
  "key24": "43iaTXLVewCGXThC6q3uBMVB4eft3PZAv3qKyBEepftrBfFP44ytWD7qaSHWRcSauSJvYtzxqjeWuNkT5j8CBbT7",
  "key25": "53w6D7nrmbJEiRv5gruantjS6rvWPLoV5GzcsAZRW2Zpd6tokriT74jUhR5XrSbqS2DvFnR8dgUdQisZx1yh4MyE",
  "key26": "2RbNE6HDY3GhCTZ6dkHWCyxpiWb9uRCMyLL7imQqibzZjsNWQChHNMxyaKQQbdb5bnnagc3Dksr29e7bcDZ2KzUd",
  "key27": "5KJchNfD7DeWzMgvDy8LrB921rgfqyAoXWMqXz5tjn6jwwHb53kkJdrR1hZT4diZagDKE3ud6Lc9eAjAfiLTGsPK",
  "key28": "3inCvpje88DTXfuYoPqAU7AoC4iVoGvpSo4XTYRcCSZSXQAffNHecDRy4d6F7Tsyvo2JacrzhzDSUg5fcB8dVtvk",
  "key29": "3ANfLMVE5qDDM8XW1JXZrwrY6gjPG3EsgBN7DJHzkupvv6GoqmDUtbkK9GZMZcXTQJfJ9LN9Dyi1Y1UYP3zcArGR",
  "key30": "56aSsMchovJpBbe8pVrNPtfrqgMMhJXbECgTg2JtCcNSxa9ERJqggqR6eR2rBMnpA7KWMJGGygziGHoY5mntsk99",
  "key31": "4Ny8BosYYXmF947uK6pUtww343S9GMUHqmv7oDMr3jxPTPyHEm3GsG2nCKRnazdycxLgVu5iiuNZ81Vi5RW6tY4x",
  "key32": "2A8vNodnWgHPodGL3vK4kxGPBMV3ThyRnyMH3N2SwMLcjab6Z4JkhNsjPQ3GorEdayAa4MAMkTrw5uWYwKAvimh8",
  "key33": "4NMAmYvZRaJ2maCb9dJQZG3JNmp1FDFCkD3sKJS3VT9k232paG4Vny6YuK8CQ4eW1WVr7LYWdgSPKaCkJY1xU9Q1",
  "key34": "38TY15PEUWnEyZiBtAEh3yMDtrHdQaLPGq5fz7Nqp6LfAM3CK3sw5dUvQhYWayd4QnELjmxuGz5naVTfNnSDEE1j",
  "key35": "5guLC7w3w1ZvehL9SBN3QCQirE8ErqBAfKHSN9AaD3JmmPWcV9vT6U73z4z9WmvxzHwayQ2tfZbUR73dsoZFWtAF",
  "key36": "5pW6vdaRaJ6GiAd15eMVxF2s9RrEJ9ueNCf33t5btdbJVZajEEpUDEJHBtqTBKTfCZ72genHVZTRfDWhbqSAKtZW",
  "key37": "CZVrNPhwLiMduyfuduzQekn8WztTZNf6edep5JDy7CKa6JDbmMU1dvyzPeHSkcbx2KaXnVgT6TRLwxvEuF9uQJx",
  "key38": "48ViaMm4b3RaTwQW5igzL4HbArx1x6J9NWSxXM4nSG23FCT6qukKXWH3F1CsW1WGDMD373oYdSw84rTw3tV1rnvL",
  "key39": "2TEmLBGWrRTBtExV13D9mPmDneGHVzpfyWN9AGkbH6BBi979EtJra7CDey4vMa1dpZeCWig9xXLvUWtHoEkUn21T",
  "key40": "b52N2pCUJfeDAqGtkbgey2fJw7XSw44fs4DM9uNRarH9kVM5mvNNawynwLTUhRq94SnVBNnjV5JuyknwbxJ9sQ3",
  "key41": "5QHADUXQ8tjZMmBc17XYu5eHKNrs1KjGhcLeJMKCkXQkLaNneAKKzof8WvsW1SepV4x7M8pvWK2VLWdfC9LuT1Fz",
  "key42": "258XMrD88aKUHnUjYbwBKByxcUAyrjw3fDnL4VVE2ctCFZBQJeAaFzBub4WiDFtRbixf2wKouA1RyASeU2FAQ4zM",
  "key43": "4YqC4sU8TcESZwQMj7bjBpCTFbKxNoHpzrWjoKMx6fjzSULUhBhUkv8JQkvtmagEuq8eQMgdrA1Pa5jwBzrskNhA",
  "key44": "2LEq1TS7SbfPfeW3YhBMmZYL5cMQf6wSXCh35zChGPAtyBRdqDHtWJLra4wfAMFfpLBF7976cMnyw5VV7zsbfz84"
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
