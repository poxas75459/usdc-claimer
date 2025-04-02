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
    "4BKdvZkQ5C1V11ZtTtenV19vb6F6oKr2esUjHMm9nCD4czYboWdMAXnsyywdzC5gpcNcR6StYyULugVbjYixHoVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vRLCUzvetYFJbDRQj9vzNpLo6KJqHiK4gjDDrQbP97AR7MnEhcsSxmR1qZH9mZ2HYHrVSSoX1KA93enW8iSMk99",
  "key1": "5rn54JhQqU5QwEbYhjxUYJFLZSQbRBPRcGTTidQpd7EykcahC76GJJLF6TBpXRLfU6tvzZXBtCLNNh2pjVgFRHUZ",
  "key2": "5FC5msPiwY9W1dR8u71iHjL5RK3M87HXXLMTbkX3kJK1212ZNpMoVmx4i8dBPcBVY8WRLBhh77AcyDmVBCg9FHjb",
  "key3": "fBbqsRntXoEaoem8rwz1hotr1MWSra4tUzGtwQ1r3yf25Y3J24LvPrQnRqy32Fo2afGys5YdJuduXnoNY1kLEKj",
  "key4": "5sFvJESMsLY4jrqANPxGezCCSFseYbFN357tfKEXGnyPmuEfK3Co2JpS3m4CEX28FvX7oEvHUQBTwkMMFA71KP17",
  "key5": "22RJW3JhkxLpcZ32E2kafSFJJoVaHrEXXxZBcSZMnyXLa6bmsCoEKWsUuQWL42Bjk3B4ZhWpVNtQ6w26sPwT1hG1",
  "key6": "3KHFwGMAuwf2SAF8WJAkt1n8Gj4RBJ6y73U49o5n93Q2c5NjGLSaP8JfHcLZsEACiZSuB9KVvNcNvxGxJYoQAGWY",
  "key7": "64xMh122YsEbA8KhFfHu1eqZ8jEQHSbdbprCTeZpA5wGC7M42BhTnDLCbfn9pAog3xsYX1TmXN9tx9SDdNfwWyBu",
  "key8": "3c7sB5dj5uWZh2oaG6yVaN5az8S17W8tEFYEYREJpHe1Xub9KcqSzEwGY7mTbtrYx441232H5fbaNUDsPPDrEvpx",
  "key9": "EwgxEV7VaQ2FofmJmRBpCP7UdTuSEs87gSeXRXidVPTFWoHFsBt8oPMmpQASi63YRqfxYf6TamxwKHMswNhAiAo",
  "key10": "3bkaZHEQRwBzH1ymHfuR7wdkMxLNQtDT7Xmm2TMFfgwhu4UQXtWEWksp3TPofJJnv4JzFZchaXzG1hRGVs97NK8c",
  "key11": "3vSe7JPmFfDubMzhUDUwYihmcxYQVvXCC1si9V7noqxyxT91tNUSn76AVxoHPy7nHmBDXX1jpjMUyUcYLWLCP18Z",
  "key12": "2tGrttvxaptpNLZXB7Pzv6f9iYNDpuuioSFQUtPMx4JiAruzyJr9pQNSgWcKV2svKHZTg7kRJYdqTg5to68en7GE",
  "key13": "GJaHT1tCuHqNji28Fpf4GoqqErTPBkRtTNYv5Fyn6gASBBM9YbeaKVoYDYoDQSHpnTnnGcLkPvTTA32fyv4heDo",
  "key14": "5GD8k9uNnetHGyCZwaqFrBaG4EAuc7r8uJpqd9amWBtYbeQJJhLT6YEiSHXrhjch2426usPUsJGdiKmNox32UNQB",
  "key15": "5A66os7PxQN2eT4JA91WcJwir3jqJMeZ7j76QjngWKhPeRr9VHUf798C5ia5NCuhr3aM5mghAfJgLAJShYidDHXq",
  "key16": "dE6MZUMLYvXEJM1WocVvZ8p7sbvXvZc8NPGXrKTxnX8ZF7frXejvFfrwjiYhAsdWMGsuWAHwRrNnvfsc1HxWo3r",
  "key17": "5Ur5vPSPuHk3iWJKvgVZ3EoaSc36UL13LWVCqFgogUieeSeupTSNj2Ka1JjDwdDCckmhgy9CL3b37hoVcbCQdKGy",
  "key18": "5vbQiEUVvUzoqFJLkRLUw49ihSAn1HJALwj29Z3FCGjeGQdFGm8mtAwVDgPBktpwF1NRXiHWkmeGxVnEZ8f7gUUr",
  "key19": "3QpdHYeuAHiYeXbvRdiQuALGTMETGLQiKUf8jUKDU3sugrxvZJcNpUyjaDWkWFE9rVWFMYN3BioTRHk7dVwX3ZPU",
  "key20": "4PBqooAmK3kXTGN6rEEy9idRtCcL1aH1L2u57m5Cjx3EFViPVJ46AisAv4jpMrot7s9zpSs68vKHaHPTL5JfFy1X",
  "key21": "3bXwGcnufPfxm3Gb4iX1tJ8uR8ZyqeRQ59VZuqcRmF56VekEvDtNtJHWsMDzXbSxjzBAH9ALgDNNqNhTaHaqW2Rw",
  "key22": "38JnM9tSxMLt6U77bgpSLc3eKjkYSm7opby3isiZhNtgkjkJKKshq3yyFaERVSw1nCS5dGySGU87B2xpLMFpy69s",
  "key23": "4hbYB1fUytpF7u999VCdqbkE52f4h4dXoJAgrxXxduk7U8Bi8acUQ8cwi5ALYSHnmmBEAXGKMFvfo6ge75nuR2Vk",
  "key24": "3qJCZup5bD7QDk77aUb8mFE2fKzTnP2rivyazwopsLyxPDUi13Kq4VyaYVkpN9JFNzWFS2aDF9m9F3Tnt15S7mbt",
  "key25": "DxD7iTY7RRCEY2jJ9oNVtfUCyNqZoyrPhh8FxNG1KRW7h5xmhV8KV71yKsEvt2FBDuncoxw48YBZL2AnYjzp2W4",
  "key26": "3ZZQBqs9UgQp9WHkoNsuw7bvSR6S6zNo5WGVMxfpJdChsXQ8Aritc158gUFPUanNg961N1txtv1BAJyDD7LjM5TL",
  "key27": "5LTqRVcKnfMVf9HYBxJHmzg9EV3yJP4zHsgR94eXT6ATAf5hPecHUB9hjT8xfrqCnfEsLHZZac2BzrAxX3osvWFb",
  "key28": "4JvvEt3sr42HmWZnmnYoLriWpTxBm9L2w1cGUdzQtGSnaHw1SSkbGN9mcA79DWsctLEVYukJZDiDiXTxHmj2tLq",
  "key29": "58UwvNxVp8aJBb6M7RSs2yy3MzNBybZNVPiYN5cw3SqHd3cNsGcWTku8LsYk4BgEtZKXdQZ6dEYGqAUEXRcvNfYc",
  "key30": "45vBScJaracyxZgx4LUhZHL6AtzGS74PXpdLxJ9VcteaA281MNDEkrhgMmNsptLFXnvkHT9o8mwLY9yW17jE3LcB",
  "key31": "2p4yh3GLyD3VZPozPwCG9vAmVJNV1S7JkU1YyHhetsMhHA2e9FVCnjoxiyGrJNX2dcH1ry8sZmiWtrWpCxoyGZ6v",
  "key32": "4wUu7PT5i56BKjqZKb8S8ohfRjEKh1y8MTXP5DKVAam3wBPk9fzpzGCwYxN6qL41DLTxzv5XHDwgLHtGx8DF5naD",
  "key33": "2rDyJCC7xvjptsUsx9JFTz2QnUcigYs1AQ32V1foQuMCSGUn3qHtxCn4xfaDpPbYUxfMdFM6JHmAsJssW5UT58ku",
  "key34": "3mnw4JxPaHyaFjj6q5nzT8MWuRamBRw8XJkJhDkyrxndaHxi7VUwcMWyRAGX5rdv4tzgK2rBobo2gMuJuZTjCzuo",
  "key35": "2BkxXf5QVun7qX4iBCscy5M5PorwH93B8YtqdExnyp6d2ZJTrhhHSbcd5JYiq6EqTYc43CiKpCAXiTc9y21t3zJV",
  "key36": "54vorD9JkFqFHLRkEtU5PLmaMqsgRFVH6JtMZWS1qvHveutz9yRNhLFdXDtp2rFjqSqJbVSksAybfNtobEeCcbpU",
  "key37": "2A9qtjvta9vq3ApNJaigYR9FHfw31wvKN1ZQxzar3gsTHKbvnx6TKwUem7joKJc5XNctN9VfnWMi5XsigwweBisF",
  "key38": "3NwA38C7NzPsjQmLX9uv5AwwoZjYo2hJZiD2uKYxHWBfZWEqKNDkCKVGoTe6HXv781UctXjyx8boecH4tNUbLvCx",
  "key39": "58zeBCL6a1YpR8dANLXrhqF8SsLpRyz1ZeND3dD5ufG9g85v8DKHH3EyrLxLM3ZWAszoVVgqnPenGpAvCGcDk5Ym"
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
