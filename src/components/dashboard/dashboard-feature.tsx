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
    "3AjxUuLMcXuwJGAxvZ589p4fhXaVbN64ywzm4RWuj7ZigLRxhUVg9GqrywbHKvs996xuHoDH4TaJiBfM9ZTYrg98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fwew5dp8gdb6dvkwtVyqVSi3zNHwG9cFTG1GXSdfpfvp4hnLkFwHZHccgPQouTQo3L7kCYukZumGpHYLJaMjMjH",
  "key1": "5vjXL8bK1FQvgvBCtLCfyLJtrVABqQiycpkdpdi41wR9EuBtURSokwuMzhiS2FMuStAh9Laikm3H4JJ3xQ2XJjEJ",
  "key2": "5AEHErwLbSMqYo1hR3VQwbpKu2TttgD4oz4ctJLrYdrmsUJP8bsLgQGS2ZfEbpQprfLLy3RGmQ8RNVkPLVB9pTSz",
  "key3": "ahpYTzDXgsa5C5Nqpw4foGkFeucoPDeUpnSWcSjHEsCAaE7DRp223h6Rj1kmgMBzbbnve2HRCfmUuLaKEEWBu7k",
  "key4": "28dXd2tLvpb6KaQDrhUd45zcrHZaeSy4oTJ5STLGsgh818WbPRQmZbsJfryNGH7MpFEnDt3kcVZed8JhGMZ63X6q",
  "key5": "4gNLXRvtry1XkoZHVRNEEsTYE1CW8w1fiFv4fTvXvuXBeQQCZ7byaLYGtX6Rr8Gf2uEDsB1S8Zomg95VCWZM1cbP",
  "key6": "3UTyoiqqtChia87qQG9b3YaBBKmNYfD6LqLfM7uKyA2Q1SiSZ7VTRrBDDJzjjDQ1TggZG3WivgiWmqSXSCYSy6NG",
  "key7": "nzpPJWLxH6YNDYAy2duCq5YUwW7wyhH1nFksyEaNUgtsuJ85iSYj3GkFpTKBTg14FvozG3swSQitJUMaaqbM9Q4",
  "key8": "5bsUXQuEpARqnLJDRG4Wpu1UQsRj33HCajAmwCUQ5EwResGJXAQBewLTuFU92dWcUp5VWAXGCprYose6HuQztt6J",
  "key9": "5SkibjHaYSs7KuVKurxSJ2BP66WKhXkVMjCBMEGv2Ga67tZomWfTDv9gZBB4g84yQWxe6fTcAn8y16F1ehP9kb1b",
  "key10": "2WiyzHKapWFLKZE4BELDY6N7ozzE5v1nGwssxCJdqNhRFEMt9xYaj3sNb1LRXqzauqhEpX8En2UngtTCAwo6Z5Pb",
  "key11": "57oxzXrHdCWYa6fyqmj6BpYxuG9HqrFkf4z2vEtCqfqV6GJgX2cctJmNDk73zj83xGanaFDnWxDG4KfRi7ncdJUr",
  "key12": "5iHfy6TwMBGPjexm9wuUWKuLTrVVY5sf6hcECh25yckRt8fFwZhxcBM78VY2P6BWnqDrs5wVeehycGHhS6FTSrBa",
  "key13": "LPPxCDaoWfZheM3coGRx8R6bd2bQWZeagjqdictQZbBaRGr8NcGUhuXVBwbjAG36iuz8G3c1KwLarp599jBpfd2",
  "key14": "b2mNzaTWtzEB3Rsu6WgSNihonLbvQkmjbZcgopfmssfDFBEjizBPXuXHw9YbuChD9m9zQ7QfDzyhWcfymRP2bxy",
  "key15": "49v7Az3qsrBoikLRauH87o65ysFRK723d3hxiVgxWgbFi7iuuwE9CQTtPP3LuLxP8W4S46CPcN6FjYidjxHqK55V",
  "key16": "4D1or44BJSwoq5b78M61FnFMHAGhV83nucG8M8BzG9PqbLJkotT4xBbDpMmLZRK6XpziVjcZjXAgC35NTMtysft5",
  "key17": "3XwQfXtYP9j7ij1krpajje5e1pXwZwZNkjsyZVoZAv5GQJPALB5v4kxVKoD8HJLHQg7ucy92bYZVXkVViAJP2RGH",
  "key18": "2pGUhthsb14ScUCA8ZXWD9e8652VcKY7xMEiqT6oCFxigikv4CVC4egHXzYpHqxVb6HkfvJagyATXVfh1MCCbD3U",
  "key19": "2NEvquhi9ahTZpWpC5Hy7kHbRAbDpbD8tcXAMS6wWpxHRZDGzNCDckcSjndR6QP17xkKrMPiEaquATeEb8nF4ACU",
  "key20": "2RW3RUBEVm5TJsVhDMeiGzYN4FsrFk87U4SnmGbPYafBwrE2zzUi98x4o688g2AdycK2suedc213x13zQzLbmRKd",
  "key21": "4iZJ7KqhNxjuPAQo351TVLov67L6Aw4fhoqxUyDDmBMtTJpyBbskJvufGWwptEUd3rpGD7AJmgKS5HEJVjSxMphF",
  "key22": "3HEeFE9yu5FNZN6F4ruZrgAc1vzfEeakWVcyZfRy2iyZNXa43F4hjtHd7zuA2N9p9w2DVJ5g8Mpm9qT3uaftzafj",
  "key23": "3mYaD3NvmP2zHLdHAsZCxFJbuEkhf1zoFUpKkP5BSQb8o3WXuRJq2YacdndtpCPhj4iW5BBksVaW1dM9FkAEDQ9P",
  "key24": "3SwguK2MCPvbeTthBxRjZkBfX4hyEzzRW3oZRgEHpjGXyULrnWfattY5XnRuRVtgaeia9v65hoDBNhuWSxMrwgXJ",
  "key25": "MJbUHTkpqe2dpqcbbhYW2ghuP5VXGwTwaX12PPF3s6Q2UZMZJxUwEQrHjxuQYnZFmcQhgQRbHds734e3JBuRyWj",
  "key26": "285pAH4zXqy7z7ZgquTPrfLVTanqbfHVdQcpHi8DjhsmWcjgzdP146HkwHTaFETV8kguasdKugax1XBvLnfoTWCY",
  "key27": "2qgmKoR41C4fYXmGL2VnhPgRAwFx2BCQQreqcd6WgJv9jS7aWeqn11js1MGUjAK915hB6ZYiMBfAEgzpBu8vwVkE",
  "key28": "5R8UDjn7GRcwdg1eDmAgqenKC63GmjmFiBAKdyoJur6BavBp6oZ8td27MiKQD3w2bvN5dfQD5XCa2mFTnSxEcnvH",
  "key29": "3xMc4fBLAPPcfjGLHhA7nDsq9mVTcwbP6BtinnPdc5AWhigC4QeHzG46Xd5P1wTJ1YHsoPNfFYAdpFWcANRuW6e6",
  "key30": "2jT2ovPD9RpWFzSpVFaJPCu9n9QZr6r35fHxAZVK81y8zz3KVNtM8cPxfqFkHa4nAshBYWZcHQC4GcMTzfmgsb2K",
  "key31": "4TJ5WgZ1cNbkP6ztd28ypucRfv4haYjqA9idt5rWRQpsBbyjzxuAghuE9iosaQmm1pvsKFDSZrc4UVWxtjg2Hnce",
  "key32": "43dptWxJhZNWQ2d3jVui61waQvPPUCG8XU3yPJbbVsqBCzBVxxvZWpn8JCxxPRYPiPD5dsovc4qTQ7cCM4fYVNik",
  "key33": "3nTT4ZLh6hm8LsJMVvPFCCxHLtdCq7bLPrn6axGJx7jF5sKHfLTL9nwPdXhMb85BpDpg8EnxguXX1cgNxQNDta1Z",
  "key34": "38jn7e38srp1tZ4nfRyRP6TujVYAn3AeALSmPY2DfYGh46Vjq6j5zfMDu1pacJ4AjKNSosVcCFGmUsgGHRr3uKcZ",
  "key35": "4W61vftxwq9thiU7mCMYcRsLk7L1TUj4UJQ6kqfU4GR9gLMcq98b4oZtXrqCY578dnHii9FHZv17y7fx9SQ9rGZD",
  "key36": "3iEPLWnPJM2pVmiZvd1A8Vdi58awAxeQkte63QzgAetxR5KjszV1EYQUZ21cWnTs5YgGUQ7vAWTJTViRSTnqR7fU",
  "key37": "62UiKLgu8t45QamageroBSkKZEjAH9q9vt1K7yGdCiRQyRZwowUb3FZ1aDBraDLoxY9ZNqCf1D1ujuDbx8qVEMqt",
  "key38": "2UTY15gTWxqVsH2hc3tpEtgpqmEE9JgF7AjvGowwDXDGyBTHtDCT43R6hobCjk5EBByBjWnc8LXWBWcgJ1ZqCNVL",
  "key39": "57B6k5Xi2b6wnF7ZUfSaGxD5ZfTp91ySvxsTvUrg89s88oXxktfSTri5SGJ5Jy2bGU7WzukzCQijP9iBfNHiD6Lc",
  "key40": "W8RpKEtbTJFdivKJuCS5gPQ4eYzrBveUot1dQR5JmfwP5JiWxH23VAToxi6SEozGedSZYqurDAPEghVEF9rWMET",
  "key41": "2XczgEzE1vqv5MEpGXV47tE68YpBFwdtuEV1MjENWLssVmjJ5kUDM9wvhjDduDx2zEjUsSEJUq8ioHLyyPRGnVEi",
  "key42": "35AQJgf1t2Pfqsvmf8KptoNukKJzrS9ozVRCsLz4Dx3h9sUN7dtiyhvPMAwrkC6BjdWriNLSjG8jQUWtNvjYacbH"
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
