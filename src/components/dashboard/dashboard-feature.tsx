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
    "4AFN9NP51mzEnJ563nBLabfBpY3CbxYt6CqW6sebL7eDjaDHoEYG7QXkVP8Nub7FsDVwLe24bifBAhehHVEm7H4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AMZzbfX6VpdKk5c1yUttSWVCxSfsph24HHRTp9Vdkex825MF2eAnX7BQ5ReYLinv6QqJss1PXxK4ZYtXb7BmRBi",
  "key1": "49fJr6jVrJTns2CcpSdSN9svAsYkp2fwrfDcgK6BaccU7cDnnpJxPiyP7sqJfHnwTH4wMPd6Wn7UmrZpWHWEAsvf",
  "key2": "2XytA9JhBG9krwYTy5WaW3qGrJG6dTwSMxzdhkxRATrU2KvLDhgSnixaKS7CXE3dSdfk1ZLSqovJ83rHMW8AekLL",
  "key3": "5EvPQB41yqk9tnw6NAf89gK2dF1Hn7CrcnihbJt6ogsnYAaJP3MXjJBwAKoScHJ6ykxtszPMVyRfVRyh1L5goe7t",
  "key4": "3xwJA17GVQEsEL43VfexKrJkjHZHNWPE2hCTEKGUAdSjYhLCyu1CzZWs2G8o645RQhHb1ptbEVP3Nr3c7aoNev5m",
  "key5": "2KZpfW1QRQWgKYPsLsRA34vUHQ7RhfbuWZQLHvBcQXK1TCLT2nG9SUgBSnBtwP88gJXRaGxzSzRsWY55sYFYhyiN",
  "key6": "43dCSiogL26oWjLYaGTh3W7amn6bqgS8bv4ZpC7qdpmiboTwsxAfQX8GANrSY2eWAMwDgMVzmoRgxUyvKbPBChQ4",
  "key7": "4K9AVJ8NkER8hafe5S9bqyPu6nvEMv4Po4NT1ZEAzMREDKoHmnW2Dg9bf7NMM4jzDa7d6A9viDWV7Ra5iBzXiVy5",
  "key8": "3fSa6syQPGFTbjbqqiJSCNAahvG7tYfnJejhwUEQVooaFJt1XC8gtJDstQLAfWKf5jKAY6khsQgexCZg6MCJHZVX",
  "key9": "QEr2qwuY7wkFn8eqsVjE2BGZhFCJ9goqAjJKzVYG1kpTysxHfM9WPNa9ykRxr6ctpU44hz9aQ636LY5Kj8g8KKK",
  "key10": "nyRiZtkUxb7SUEJWALFPhkDh3gweKKSdddxpMHMZARA8fHPUKCfmy9VMxjXWbiEoeZ8MXEPui23k1t5UiAz8NH4",
  "key11": "5GCTJeFpMFo9jRU7iJYbzAHgurdUEC6TzvZrgj9UZmeM3hLXtWQnmCtwFGMejMkei7yytBtKhEuk3AJAA1BrHUJN",
  "key12": "5QJyq8jwo8xSYpWSZjhTyxyxtT6eZjKfwey1C5xXqGQRjLFPqXhmZLdYxRfoRyP2oWqyWZxDuiubLm5E3HUfv6PM",
  "key13": "5Ha3w1xX12ps15ibtqHhrMSHB7odNrh6skymk6yN48FnCvSHR4iFBG7Ne2DLNMoApwBUH69cnABfe9htKrrSERfx",
  "key14": "3r3sgCH6HQnFcw2XzzWN5JTSfJkR6nRUvHvyXxZY95Pn58N5rTn1E1waDyiz1xfncq5yxqA6b1TEwRsBWz9t5DgK",
  "key15": "636vX1UVZQHzWFQbjo59yBY4k3sv3qxJDgcnoHfH7gFZFGsvFCsNadDy7NrdFRUftbv2auihhKf7f1B51gE9F7Sx",
  "key16": "HzZr1x56HLHoL9up9WQCyqGPtVa8oi1wxqj1kJYeCvTdsEPtksJiePbq42Vvfyt7KkDDZCvmzQEhsw47xBkCpku",
  "key17": "5caAtecL2hWiH4crvPWH4gaEPc3udnaus8GJHPkggvqBMpDEwD5gcsnWiKvAYuB4eNmYDTwrHyZtiV9HHZP7Gh8t",
  "key18": "2Kuq4r2WnDpaqfYyVQ8TFGHDwGEnQ8KfjTwQnar39woD9WzUkdbGtqTDM9Bf2pJP7niGX5EjTzXNKy1XrgBLvoKR",
  "key19": "26yPv3894Xq9bLuhhhNq8AD4a37KEnf3HGmzqpnAEQML5rJ66BsuEiACLo9mfi8ymjw94wqjgD4uCTJ9LvtGKdPq",
  "key20": "5Tc98Rn4TFDK369caf8oEuzUgyaB6yDGA9SLHiTWA6wfKp5YPJhMKDj9SNki346416zXc29gMD5ZgcuwbuTqTGMJ",
  "key21": "2reEPw64phQGXrKmw6uxpfJ8yaUSs7r5Y6cvQrw5tcqhVHC7Q6xfZjGXhiaXoH4tVLLgKpQxvtC3vRuGRY4EBdNE",
  "key22": "2AB3xTXBZKF9nQ7BbbDYTeWTA8NpqfaYfgpqfbVpKmJCew34WohNoUEGzEYboMYaVbajgzyDx1tCr88BtQTozMDG",
  "key23": "5MKXf2AYZ5VrXokLZqXYFztUqdY1A17LKGgmCX8LwrozoEcwas42xEsjDyx1Nx7ixHrBgGkDTGTh4JZoTqhCxBVX",
  "key24": "31sG8dAacK8hG76Ft1284oHcSjH28xNhrebybLRHY4YdwYbJRiRRh8bkGGA6NYWg5fsqzi4QyYx8DJVNLR28ytsT",
  "key25": "5kRTocMmZHuKEZoZjuQJ24ZZib4giEc25Xdp8fBpJAbDJV4pJLB5rFSHGBu13qf4TfdehQa2EvMpYBsiUQFzo73p",
  "key26": "4q5t2Bwv711FxyRpV4KjZb4Ejqy2ri7jE3MRQucbnX11PKdGJvQzMaxazb9BPtMXfD1xXR9wWryJjiFaaVnFfkvY",
  "key27": "4xmCNG1fqzEp9kUPe1o4BXoYniwUWy2w2afFuNAGTK4rsTKUffecQw9LmpRHoQkBdrEUwMs7tFCPTigFUPWMTrNx",
  "key28": "4TL5yFn2N9fHy6XKrRdvkP5CjgnvUJRaFrjiVuCi1DzXu7fgGqXcXkNemnEdMQGXoabyJhoDiddGT2jDMCLN9Zn4",
  "key29": "4NoF7zAsHC6oYjcDiA24Unn3nWBxjyHg81YkFzBa9tKY9Zt4B1XDKQMmgauHe1NjCy9Lad1KsUECUATh58qFXpSc",
  "key30": "3YEEur8MuAee2ZZhBmz2GEHXMgKZZM4TEKFKn6g8YAnixkNUgjzb2yPjMr4eEJaRriuyyJt2YNqciy7heDuvKkJe",
  "key31": "3Cw3CzbfNBHxjEgtVAcoNBf9eWnBWhm4HjFa9j9Djb9VaoFvcfqztfdMZugjnz2Hg8ppZfkieUUtZJjnY33zdGKE",
  "key32": "2yY6F1LDMAweLsjzFxE6pEvijDi7kuPwYoceSxTr83KNwU9VQa323AQVS64V92JkfgwokcCb3wgqwcyNMSVAhFvT",
  "key33": "4Zj4M5z3rYkxb6Wyy3y69rndKiAAUTDbdYeububCgqfzYvS9j5CJZKhECaiU6tbKt4bZ77wHH4qtw15KdRhdUcR6",
  "key34": "68nRosFhHCd7ENizUyzeAY1EACK41xbRXFpEwzMCtZsmuZHCnQtx9Sa9eVguv4fAjqzQcjMLrHV1oLi9Top3wcL",
  "key35": "RGwUUAQTuaS9RAza81LzHhWZa18u632mTRGYLGf9k58ximdbAxpc7wV4yneKSDRpYDy2xkh3TNFcUwEKp9mGdNq",
  "key36": "5wd2qG7gXbAdZRErDVf3azwknHLYfeABe71HBwhMKSpBqB61Q9EgtYqBqLuwpQ28rDxw9MNtPmxDHiKUeVNDhvj",
  "key37": "36sMMsZSw33Gsnvvs9wQb51FuVyJLi3jphxD78uR96ih9jsWfUZTKvccw8D4VCVUjftxqmBLMx74hqghJCoKJmDv",
  "key38": "zVKcZq36S6cpU7k4V8ojjLLXpZzLwbycRfbq52n6noXjJctJGSu4higCmZG26PKjV8kpJnZqpbx6Gz93oXuTTJT",
  "key39": "5H5gzS2EfkaHHpTma3mPS3Q5zpXDsQaatm6EP6uZhB7cgwPk8MwfpVqbHTZm11gAe71oiJW3HvBa8Q2u1khwY2q4",
  "key40": "45vJ6jrAzXDXRXmLYM4Z7YLvAghtNUk5GE6C37hsbyL75SsgxU3oe2oDzgCyyVGQmSCbuybfFXaH61nzHjkoEZwv",
  "key41": "64cqzLn4MtQbnVqwpLGnxKNByg4MChVyRWMXhMjTXwmU4eyLmVh3Dj6hW1pbDJkGtmAUYk4WmyV6pJ4nwFJiCfdN",
  "key42": "peUdoZFVfLFXt6RMHtKRjjXJDTPgeo4uLFB6aJrUwnsbuknm8neLjADQBYYnieNwJ6HVrqXkQBk2eiXfEY7bmGY",
  "key43": "2shCxRRJ4Fmwg4gRbY8mdaz457ZLSWwRNFeMLEChWmZqLLrNUdBe3A6q4Y4zPzDTNXreiFJ1o3Kz9XDx1swMAsv6",
  "key44": "5eg8tJJkTL4fkV2jptvtcWaKTMcELA4EsznDwSkeNU4jdJMX8H5ArcLPC9N7Zjuk4szahohpJJn5YsPSvoukaGBk",
  "key45": "5YeJQ82DQVrCQbt14sjAhqoixJVk3Z3L7rjuRg7NAvSNBSQnUPGZgyJ44Umxz39iU792mLeU2riZLnTpLLNpg3wh",
  "key46": "3ZLtj8M4veyaodCTaUfwMa1pWhzy4PfkEHGLG2guAxd3EcssjdKKfgL2XDRmDWZEKk7a1DpYRDpp1Jn8548amUX"
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
