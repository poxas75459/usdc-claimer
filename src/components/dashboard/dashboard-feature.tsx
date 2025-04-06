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
    "3AFeEzKzDoshz9HxUdRqCg5X7t4oGbSz5Shf3XhKUs8uNY2UH8FzBrXpvUra2TsuoRqiRa4Hx6A5KHr4MQutoFum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31HUm312785NaAy9j9tYfGeUgHeavExGhMfXzMTc4HC8DA9i2wUVknXKHUXNevS3km6sW68NLmCcBFGczSf2Bvh6",
  "key1": "5MMq5E9buHTC4evNnEBXAQhUs52Eau28Yk7jhmuXoz6cy2iYYANCBWujXC9GukPL66vL3JcCmM5J7xJSbyMnUEU3",
  "key2": "4up9fjxXHBFWjTPkZdNGTn1TJTv4LCajs339t2tizKBxcpWqYirn4qr3TBq7zoZwMtLxLDyTHpg3P6bqtV7AGjdN",
  "key3": "3kc2VnEs1MydP8otLdzftEpdZPfANr6GWUMCe4wXwcWDT5JSvXSnek67aRvPUj5VSwv7m7bTE1RHoEKAjkCWV12J",
  "key4": "3N6XNrBiWuB4aBgnTozZe5XEcoZaBEiacob7Y65hRGUEKinKR1e5VwDPArZPXf99JSYgB4UNasnBmECG5XVLe8C3",
  "key5": "5ZZFVzue8eEiFbBXXUpGzzVXnnFTwZmnSrxhuW8aj5CtRcVb1D26MRVBVnSi5Z8gnKBFGGb4mcRjJ1rgdLdmVafV",
  "key6": "2aPGsZy8hPdczDNvntYz24b6dUbztndYJfLARhtm6P3GLhjUBQodqP6dx1JtEVKRJCPPuLU9yggyDij5f5yPyV3y",
  "key7": "48hPZMgEGyNCY8Z2M3vmVCvCpVWnwxPnF3dpcqJT1jKGq2DUsxf1Y8nCcCQm87rWELw3i2jsfMF5X5HUdEpBgijo",
  "key8": "2odvvnEaRu3U4d4nPStkTXTvm8pt99AtTJuKhwJyhxTevs8EvyW2qHG6RroNWCGw3WU2LeMdHjMwXS5GRwhk1P4M",
  "key9": "5rS9Ei7FoJmjYhNtBC9dnnjxQx6g4cCduvPfQkQfYro8RaGL7mjxM7RydLcRFwupmAJgX3SaLAadK62JTqJ8gBCp",
  "key10": "5Qthq6kw4Shi17MAx99fHSgA1cWdRF8xrbSSiVjS4NnDdS9DHcx3pGje9jWjq5frCbp9nY75V1QnqAngAotjPVfX",
  "key11": "4jsNrBfgjZwRc4DDvvuwnPkseB9U8FnJbwdJoa2acCjqh4eXYqaeHCUVk7XSsLNz4VJQtoENiaLfwfsfRJp8Fo1",
  "key12": "68qv9yc7QERtdbVUmXVmhVAiHihZEmddLfd1aT5EFQnretuRmmfYmG3psPJfydyuTBVaTwrn3fLNVEY66WoSyYs",
  "key13": "5H5iSKD5NNZoJBjqTwePKqjxo8WFw1tFvSJnPbzMFTfWTXTMftGUNwHLBM1essBWG5u1zq6nPyeJUwTgYjRUADrF",
  "key14": "4Nr6XM4B698Vsg7JXR7dLLGHyyYQdEZpQYuwHso3BCvVEKzoFVdRDMdyhwwGAWskjLPmdPc74gNapT4bUzWE2o38",
  "key15": "5qKJFfjA6BkA8vfJvmmwyYQ2ZBJf7ihkFVHQ4k728gqkTRDecA4DPfxF6nL3rwg4gps6mjoLkTAaNgXwN6KtiQ8T",
  "key16": "fsnyDXG5K66A7vPrfPQd6RrWoE5aC3MPXpC7QJV48FpmYbUygdKCgfa8FFU8drQgVnJ9p5dRycFMemEjKkKeM3Y",
  "key17": "3ocxzJW2aFupmWEZemeZFsbzZ6CgceAnR4TypYKbx9Vvo7XVNRpRNBvtVmaTZgthzHdUp6U4AbJqakbHj9YCh6ML",
  "key18": "3Kr9UfjP33GjmkJFSbwfzV2bH8iwzYJQbiPRnbSxxg6tTbmawZKZynG9C2iAtDyKxVZUrWGY6ZoFf7Vzdpd2j1UU",
  "key19": "355c5r8tQwEZsYhYuQJtDiBVP3ZANcdgchsdW836LW5V1TFuJBSsFvFvnmVH8vd3xGJvhcCeMU32Q53CN2wS1h19",
  "key20": "bGYkrTNanBtZq8A8Agj8V8rXgz6kFodgEVYaVNQdFumCuGvUg8TJffQdo1KLrn5Huu1ZSf2WczZ8Sujemm3NfpM",
  "key21": "2dMpPy5aiEzKVjYYyU4aT9ESwvbYNK46ks9q8abaQrFEiZkntUr2CbHyNQkjPEiGjYugwVvjERpwNk9fBV4GDcr2",
  "key22": "4E8qM3h1YcUJARztBu467ZEv8TVX9rLq8RSDurtG4t9fnydCbyM3b6z27oFwTVu7bQDKpLjMjveKTTaU5zwSfi7q",
  "key23": "49qQS3nhHUPa81mXC9sUB6QVVZgSDohmHCfN5bhztynk8ELcSY4yqzzcmTj9VvghSh2Ced5gZ6AWtdt1jc6XfacL",
  "key24": "4WJMLceJsZAPeTFiyj4xQLmnDj8AsXWvjD6kpn5wasyGTAG8jzfboWHetnDxGLJpeGNpuULnT8d7qcMHhCYqTREW",
  "key25": "5dv1drnRwQ3JLpjsrPBVnn6ZrSsSxLKYmiqCba5JhwFWyJYgi8pAtxYR81u7Y3eJggcQKydC4XewZVjf9CEDFAar",
  "key26": "n396eWhhiFdTts6ZeFuP11TadsjLc4YEYtUDMNyZNvLK7GJ4XjNARqwGKrKDQjpeWNDzdM6mqmDdEyzvSRnQpfY",
  "key27": "4i8JoYFrVgL6wR9yKimnrrCZnrrfBfURr9zNfzkmw7Dfwyff26SX7dox2RwPLpCmuguQvTkcr9JiUX1V4Cj6TXJ3",
  "key28": "3LbmPzWJAAFtUHTyzHmBd7s3hDd5B9NUPLgHiBvBHeL9Cqpym7Rc5F21puWheCFJ282bVv4wc24y2TuSec51mhz1",
  "key29": "4GHRqGUraFDuAAkRXYd4ighHamrXghE6CbLvBUKnfZyk6RukbRtRWM8nTjtX5tnmWwRAmFXzmbimsKXGhkX3HfZ5",
  "key30": "5VtqX3zEwmcavR886S9EvpK3DUfkFEvMVJt32JDvEE9t2ZFAAmrn7n2nNQBBrEDnW96ModP7Y1ArZKfKyXA6SpVZ",
  "key31": "sWPKbz2FQzU5s6Z3ezJcFbUZamine2dMHr3kC5p2Et3msPV93kKaT7Ybv7RF6B4RPAjDYyGEtxKpsgBuXqTuEhe",
  "key32": "2jsDw1yiiExgN47nEaksJRdFaik9Mkh6r39tA56gkJkShxc6GSqUTTTKNjWLZ8BAK6mmeNNxXZzpEmGrCqedknfp",
  "key33": "4PH4sjTQGhhS2QRNZzPHNhEbvsYBSxzjzJaZtZqhXVTWnAnHnsgPyuFp6uzqjYmntYsuizRESGWdztNKSW66DMJU",
  "key34": "hJn2EXYa4SaMpUs3j1TumnFMjghsqAcnkTLAuVU58vuaiB1HxbfUhfQeikSJhUZJs8pwfFH327by9gQMtfAVvfE",
  "key35": "4bBYMxKzJBf9mopcLU3qKfJthwKhtriLJ1JbMEeyjCx9QmkZStGrGsTZDBpojoEsPUBDMt4UgGPS1S8S3oYeRGYT",
  "key36": "2znT2VsqPwBDU72xme74WnAh2XrDZxMLfaPEXxHEfczwJP5Wv8qSUVW3agx7ztVkrTrz8r4aURTPNDnY1rbi9HbZ",
  "key37": "3hQcQPc397QTpmW9pFGQvQTdP4DhxfBLtLJ2jomjaMThrqzAf5GfFATmum8yJ1D4Go8CsyVfgAPf6vAJiUQYNGq5",
  "key38": "3TrDAa4TuWGiDKkZBuaEHrYYkJwxwB9wsNnUJQa7JAFJ9GZ2f8dMHsDsogtswKWeRppjVaTQQReLSMhhajvpMRPF",
  "key39": "4MEkg1yhT1g7jYfC6d1Qe6fxzoLuXJTYdG79ZzPDDo4WtYKBJwWmum6NnwEun4CHYR6hZEbWpc2C3CZ17U2tuU1t",
  "key40": "4UPMdiE2viFPMKEgnr5XgYw4RhyVK7jijCNawt6RoY86h7jjm6sNaT5wsF1QfHMkkLL6MqkSbJxmwmamFdfVoHVn",
  "key41": "6uQzuHUCYd81w4AySmeYKJLCoF9RPZvtsrd2dvmQ9uasiQmMSQX3dwGaM3ApBCfsLZiYA5epb1c8UTGKaPm5PKt",
  "key42": "5jk4xck7R9VZGMZSpNgSdhNKs1sGKhbMrttdtEc4NEoi9HSjtgsmGvXmFuom7obVBnT55fc61CghKu57zXCBvbE6",
  "key43": "3C325Wiqczo2f9KNcUNaBfjjFuzmysH5gMJQCrnVbmwPJqGW2Cpi5LJpsev9YJuX6Q24PvJqnDCDHP36kNdqEscP",
  "key44": "5Bg8K1zaabYWJuuR7aLpeENfSTfxDYQ6fDMZ4oP2cdsyjC2c2bcVH542mNRYZvXqRVkTUgrjyAGj7suFm4ZMgFA6",
  "key45": "579Z3GhyBD1Sg8oSvEgDevPDmzk8F2JRnrAw6AtHR7DHCdxBEYnjdbZjH9uCVaWc1M66e9iXC1vYnRvWh1dAfYYW",
  "key46": "48iVrAYNLiXwMSNScNzjNNJnAis1jh9RF7TjjAH2ebs9t9H8ctL8CdLwc8fzmxRR73xi8tZMYd6LoEpX7aSDcz2z",
  "key47": "4w2VX8qmmbdwLapPJ8fS5NMbcvikAFRhFrjF8XyJedbWD8tjwA9eEFFoWmQuTxERecQpXM3scSXWwz3cYAsvdeis",
  "key48": "2vQZzPpePGKKoHQZNuesTWoXWMHRMnLZf4sXyHWFFdvZC16DzraG7GquAEEhxgDwANwpMN3f6PJtntL5h16WJZPa"
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
