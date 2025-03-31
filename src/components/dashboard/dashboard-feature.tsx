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
    "5gg8fQruZTZgNnXR8KSwoZ4ncd6wJQTqYjCdkmfMyCcxgzbEAM8iym4xZsnRPpeVxHx73NRTTPNyMunNbXz5EnuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J2BoVmDmhHn2uVgGvPBrZHvzzEf2TPWpDuUapJGFM7yHGqGr7hEkZZ42Mfuqaxqcu6ft2HVpWvVgdrdQ1HE4nfJ",
  "key1": "oCNCQFBodX7gDK3DW547JS8y59qhXwL9Gf2bWnd5gsErASN9NPTtonkFPcarwmY2jW8WWeSWwzNkJQdTdkLZXSJ",
  "key2": "4RQDPHLd9Ke5VPJ8DCD274MMkzM8YcjhtpuPAcC6Bhcd7PJcfSPND5bJCbc9bAU4Xcra2Ws4eSk1upkRcB2Zs2zP",
  "key3": "17TqcM7MFyh76AC44wV78TfgZKbMyNzFcvednPs35bESwTcVVEDp1o6Zxm4u1CVeTAqQey1JZ6zfPx3sqfucScf",
  "key4": "4aDTNfFxSGMMWCYWmyMco8o5jUFTK2cYYhGZvqiZUGXnTSqZadJQegoeenEeNzpujKoNoAQ7ChFvs5DyXA73fK4L",
  "key5": "tZDasBTpMxvadUfNazWmAiC42kyxkR3ajMoeun5j76jQ1ntEXVPQw9YA8uvVns4SJCmF7yBPMzPQUU6PeYxMsNi",
  "key6": "2zrq7nnmPbzHfmCryhKmRuhhJD6Eezsswy7J1LbJStqRZh8oZ6AKz5WKUZsr27hYnZjtJ6fL47ZLmDx9MaSG3eDX",
  "key7": "5L2FyWFCSTrZFL1pgm41LuBDnWCU84CpKKvQe7J5mkqcgq4hpjVvSwb97js1U38ditVzmubWmKj43373e2DbyiH2",
  "key8": "4EFYJtWUkfQxkXisdGA4znwNwmq3Z1PUkc9AZxzQfdRYHSaTMxrXiWVkqe5Ncd41F8MYaRcARWx6FBJk16qfj7YE",
  "key9": "ALtXf8HSzwq7S5x9nALdzEFzGCWKexDNdXFTapCDsrMqdw7MCVoAUA947CjHQdyD6UBBBigixFSzsWVc86ATTmN",
  "key10": "2hBhJGFiTXVgTmqvXEjWAcnWxhL7DhYEVpWtbsDVaQ1mrfy7AoJ9kWHnEJywkNXFdHTdEGkzHr4rkuj333sD2uMU",
  "key11": "2YGNqjFoqmvKek5TXcySPnRQwDaEXR4SXUnXwbLf6znsZ473VWdovCDyovVZEbUfdqD9F8N7BNVDDfX4Pu1J1ShU",
  "key12": "4UTBm5wJSZ9Pq56yRDpSXump9DdQwGQmgP3tqkuWWuFNyGE3HRJmwuz89wX1JkyPzdfWRpSYMM4iMu2w3mTgS5Xx",
  "key13": "5KXXfWEfnfDdQbpwzvFvkNAbZSjdTNGnJjYqbK1HekU4pwWeUN2tr6g4ShgBBvdWDUBbkcURMx1vSeyRXVge55w8",
  "key14": "X2roBaJyoyEJa4M4odGjQ9Ebkq5uEo1Kuu8uKfeDt2uUSRezuY5tNWxtVTHRUqwc3MvE3LNG8fw2FwifivWJfRR",
  "key15": "4KdaWhCYXNx4KUFg7BKy3AQk3irAd8cYJHuBHKxSbJAPjmSGkvL92woM5meYkgctyV2emVFNdRuctGAZqdK2kKBi",
  "key16": "371otgam6Gu5iTAXqTf3mt7grL3SqYgdJdpf6bT3d2Y1S4pCt577iEFQfs414xKgYXBw1wEcu8waFxuCXnrsCLav",
  "key17": "2YapupmaH48T8TGUxKFUfuUE1dMddgMoL2zqzcRkXPpwPDfWCgUJe4BAQpwfGBVZgzwh4s1dPo5rqCVdicDrec3S",
  "key18": "4kFPRNV4iiX4cuimcm5qd9VVvW4QanymwzTFkPdN6dq2qfMjTQrKgU7wz2dgoUBbtVYcNy66czBY5c3VQbX6DhZX",
  "key19": "3d48C8uqtXb6eqBiuMzTf5qEUoCCbp2KKxvPjXR5HFRoPCvmcdG3oAPKhJDHuESEkr2pjYciupxTe6xcypE83Ee4",
  "key20": "2mVxFdm3kG2oSqURBuxiMSufapajxuAmETXtJuAD4oo8n2R7BAfvpKtYxL1otdLKVBzDoAPa1gd1Z8keT9EZfxiU",
  "key21": "4jWrR7A1HRVPGjqtvCeTRYfxuVXuhgwoRuJ3jfns2o2N1W5ks6T4whmdJFEgQcDRseMWbFatXo3tAU1J72Li4b44",
  "key22": "3H9tXwvQZ2KtYxcDNyizVuZxBLG2j95UXvM7iSyrLM7EfLvy1GVeejuSCXagXiWFJZPt1FcB9qYhwVatMJ1y9hwG",
  "key23": "Xk1jeQL6jMPPS1xA3pCZeuw4E787phZTa4qX8GMU2TBVhzKPA1LKcfkHh7hwQzr2yK1tqL4Lg6cwWHLjZBcpzVm",
  "key24": "XzRq6WaJpA7ZjCg9s2BSbkwyhWnUxqmXkoZKebdX3LJ2LXNFwzdGHbKfrS2U9eooSNrhmjLWfnAuYpWDRAY7bR7",
  "key25": "3BG43AiqoZzVo2WFXBaN9RukicmyfJyXK1rFVqQs2z7K3buzgwycwGfEB3FUA6mrGXEjGkEnJYTaJjqnDodNjEDm",
  "key26": "5GH3xEoVndGjCDTr82WZ142xZVapGUob5zAwgQhmx2fz2chHenNPmV2qEdb6pdhd341Miom6iJuWAnwmEVis3WiE",
  "key27": "4E8eV7nwxnXLhkuUpgQDQHzJb3QaJ6xES89nwhsvDhHGnkw9iNzs22QaYYvBDujFfvqgwneERVBHfGcF8mE4p8Qa",
  "key28": "XPDypJZCh8SVExvzxjDydrisPXBZyMmGRTZJ5DEFUmgSsS795W9bg9qein4cymnYb55bKBHLDHARAUqCy1KqHmN",
  "key29": "5AGTBVSxGGAeYt3AsTe5CHmQKpZDyhY2L1kSHRzK9Vx35hbbwwTMsXjk7SWUR7ycsNx4gyqUbNgJ5hm58btgfaV5",
  "key30": "4KgHWpNUanMR98GNUomnVa6YQUXzX1f6Yv3Ng5xekZsNE7tSzzXKWfKum9yFkb22U95kSrtN9JkjgJGddvK3Bz1Y",
  "key31": "2vXZreFBYujKmjUuSha5SqBdSn6jynnyUFTq2T5M4oL1ZzGqKaVdhFPiWEQ8NBw3MHdu3vKY8xkwKR7veekTdSFb",
  "key32": "5RLkMqt9tzxFntUeHo48Y49i3TT6SRs3DPV15juTyDs5a75QK29j8qi57EfbHM2i8b2wK1QwGuHXdvzzhjJFWmD3",
  "key33": "QDpNhSxo2UaCJqnubqUP27CJU6kQFkNQ4ZxwkjSrLqwmz5edpWeVYCu5vHj9dbipp6vRTNCR9rv6rdtCjhGUZPE",
  "key34": "5QYNV5UdTMXXx452KXjv347KrUiCsrdoGkhjpL7naqd9N9b5H1HD3NYrKmngPPDAMz2viz6jWgWnS6itm6VW2ovk",
  "key35": "iAGApQmvKc6ubujpFdeAavatKZuYfFjkZxowH4Zvdvd6KLZiC95Yyf9Uki91LQahr8n85paC9r9VurMq75Uftfa",
  "key36": "5kuY17gceVZDvb7MrNawuBPNuktoMpsXiy5FZNaPJFgMxhN3K5GtimxRSwa6ptR7CMQJaZiQUzkiF5t1Fp8m4eCf",
  "key37": "3X2DYEx49KHqr4xuXNgXFaBcmTXmP5Dhqfhr8ANa2Fd6eLAFqwQAGAXYCqZmfn4RZJeM1fsh7WyuadTSha5gHtAF",
  "key38": "5ZDN1gWy7TGZFYTxu6Bbe4p5NcPSkUtdZugpKrBr1LwJZTwcVM8WbBgczd8z1hGTKxu5hU9wxLFTdW4oGfvtrTuS",
  "key39": "2BwiuWYuDg9QFAjqcVypwWKqTBX55re6cRisbuSfZBBnveHRXcD5EgZh6zGDwH7RcKsvXN5faUo5EfyipEXBbawQ",
  "key40": "5Mtkw2yALsKLX9SF4G4cPzn2N6tD1XYTEtSbyNwezsDVQr5LE1kpkMAGvPuMv4GbEtwkX5nXXJvxXiABtmexTu1C",
  "key41": "3zCpW8afsUkwccbXXAQfrCHZNpB56w4AJZc3xJrwBBJLiPi5Bi7rB4hVbo1XEtihWMLGky2DQLRbg6EuzXEqwjKg"
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
