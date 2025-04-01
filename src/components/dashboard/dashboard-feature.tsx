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
    "3kUhtVxG4cagEzGmm32vaSyoAheGcK2RtgocdyiAZUoKzAwDYyh8DhMUatRgS9AkbmgXvqtLTnBUDVp1KRT7sPJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qyRGxb622eK76MhDgxLMw1LVXJL21fMu3RTNcgHVwSwSwVKToGLnJicgAUK1RoPzHda7PkBW5BCpbx3aoQv4YrL",
  "key1": "4ArD2kzBAMcfbDs7tL7P1vUUm1TaTEGddCbkikmpGLW3jFfyNwJzJvjtTd8g7YUc4kHrwEHttfonXgzaYqLXrR5s",
  "key2": "kF2BgBFpTRpg2QBfjwdGk4atiLMXQwsH9m8V7FdAGJstCStGyQgmmC1oaoMywWuWovBLmK5xj35fLbtPTwxhJQX",
  "key3": "gYK2tb7tGR7JiBA926bYGguyZoaz3pt14jHKPrkg1epoLBBVKdQMbo48Q5nvJXEyJYG5BqdZb6YiQq29r3YCF72",
  "key4": "3UUvLK9b8Epmg39wZVDKKrGgY9KNBpmqHc6ztth8tkijrrxM964N6sCPUV1Pdo2qrYboaDMvHUvvSHsBfCmTbWom",
  "key5": "2ZT9zKfkiz4dQzz5EW6DNirhYKZ86LinM1rJhcD8RvxCtVRvUvJ9oCK1U4pW7rob8aYMmYiUGpgCbQn2JXDfKHm",
  "key6": "2btNfQbVFQVpkGR6GFtzfPUC3HQNZzvFGCg8HFCckBdRAPfPtd8wbs1mSPosfRLXknfaBKoAgG1HRTvCP3pfnD4b",
  "key7": "5Xf232h1WQDEkDxpYUc8MEi2SRDTBuXN227NeYnJmtf32hPKxQ8WDeFuVsKLMJSrfnyEuXvZPJ8972KXk2iEBwx9",
  "key8": "fNbWh9DUDGwf2zQgeDTr2pg6u6Wzur358saiPLtKQEt2Tes1KJjqEmPSY7JyfV7Kc4pAjbZi6inKFf8Pq52cjbh",
  "key9": "5aHET7mMzSW5DD8aQ2DgiEVn81rRK5Pgkog1CS18F6AJSTWVhFoVL8wBP2BMYK3cRsP1yhcX4W5wjoyAWfoZ76n9",
  "key10": "5Hgwqp7ypgZ7Bshr1Rq82u2tzxKQvjWPDaCR6ZG5G43aisNGKW9TWxPV1CKCVthRQ7u5kc4JVE29aph14AvqfYvB",
  "key11": "3W5jfVcEs7LjfBoZWBGX8EpfUgox9Trfh6xj3s6Y3Nrd43pHxSZnN3TiEZfX6KXqwXeRde79sssTw4xDL37NwGfx",
  "key12": "WwhmjL6SsaCUDJz5VsXUmAU6Tguphsg4TH8Ccpu2p5QLLKLam5pzL38uTvqsAnd8uqmk1s6cuCiKTXqURqnaoyN",
  "key13": "4wZ5VhGnidpFfxHEHQMozimbG81vBkorSktcQndSkrWpoYm8cPmogUQkHiaZ7sH7wU15WcarvaT5BSRF2YiCZC9q",
  "key14": "2wgpiTFtgN6cgurrWFCnPxMLdsBtYGuiqmycPvyp713q3apwL8Rz9oRVaEZgJr8AjvvxuujwGtfuXZktGPdyvtWw",
  "key15": "2ZnBrctn6mJKFUE4ECNVrR5Smrei3AqbnzBkfd3wCy7KXcmrmgdWai2dHfubarRJ2t8sTaKVNjuTQkM1axfahdzz",
  "key16": "5s9d7qZiCSJarQsL4zSej4ZCvXMpyAfsZLUFAFaV78LWbDkzfo5VKamBFHNeyRbAyPzq7HmScuGscNc4zmfzTkhP",
  "key17": "751aNqu2GMZo1P1DX1dR6Dv4sRQ8MTKHEsRGHhQuUaisQQu5ijMU29ZsqFwgJzU9kZBLzc9GFwdrK78r2V8S4Bb",
  "key18": "B8uTDssK8vhZu2Ee8SDz1kdHNhpYpnukVDwFys1qq6jK3VYxbMGSd8S9yMDgYb1FwXyrqGHLvUYpyj5aNW1obQd",
  "key19": "3MfgXNuTVd8LJbCYwhDVgXiDxKFnT7LFfNeN6bt6BK5HjvkFPYk83Duat5yM6yPWBpeUwU9kQhkAAeAMDwX7AJcD",
  "key20": "4nDSksfM8f7vLd44ue6gRkcjheFvG3E9jydbWBfYgQ8jo9F9UoYGLhh4aHUEFucSXaNprAKctsxAKXx56cCTo8VP",
  "key21": "5xxZmRoZA2VdJEy9pCDZuTcUvP56DpAMCZg5Ej1uKBgFPoGZfEVAEgJ62BsvqJN8ENamuxNTRtc3MHfDPcNJGGft",
  "key22": "foAwJuACzEbN6uj95QHRd1e3uAWwNbNgVHGRXBQhGrZKMQyzP9aABm4GaSwYP429fE4ZszHEXV2QwbUp7HNWfh4",
  "key23": "4bFRvKZooo4y365pcuM1gHH8a5u8BCBJHeQDGNNeY4fugYUgufuk2NfRX9qCVcC3H8yRbtytnFSZsEAjjqkUQWN7",
  "key24": "5mwx2ZCLHiNf5ndKkKGDBq7CrCFykrzWg4eDYn6NYZCSsEkzKoTnJaBb795cbbh2RGbtYtxSho3GHW886eg1ZAcJ",
  "key25": "2jKkNUtu5XkZxNHNPMWWsytdyon3RkjnMA41q4HrpMG9HHszdybnB6fft6QYPjzpUyB5bVdiuksk3sW7LYPWNWxU",
  "key26": "3kqPz5L9zUpZEwpA6iPDohPwhWHxqpyvdzTaaauLgxiEskAVMpQ1pSKFAHaJBvo8HT2Mfs64kZP8xUsg83Ym4m6K",
  "key27": "5yucTPyPjYQK4EbfAb3nsWwYSNPaMQnndVN2z1ycjWNRQdoLnppm4krqVCsQPEWVYFAQUzzQmnLa3X1UhZiNBten",
  "key28": "39bXAczMqVarNDHNXy6wiZuBF1AqdEusP7GssgbiaSiL2Mr87UoQRpDmSkLCvkGq68PM3y1ATYFH2qkaUSeG8zpA",
  "key29": "hT3i9BZ4prndQQG1E5c65r5PdpCESUC7GufYxePQRFGJGSVtgQTh6C91pyj2MihCj4UnJ8gU7SjM7gEymRz3zsR",
  "key30": "7TQshPBXN8aY2cTVX9qeQUBe5JBCFy7wTjhNhwKZjikTdvJLMByB56gKm7oEYJkt4a2aopcFnB5ShYAWCtCGfna",
  "key31": "3goVQWBhvGEeWaU2TtW1FZzKxmwUL89J5ipMabmgriE4ey3VUrLeFBgXei7Bvi2qkTudoSomHGf94LEejCEUW3ua",
  "key32": "YdLbFCR9ezxWHxG8iPxa4UCmqb6UqmdayHGhG91PofhwmRSXGbAs4qaYeP8qzYGQ4DVJmqg5JE9PCDKWaR87fdU",
  "key33": "67KxjDYQbZdJj1SwguYStvTpXYdnc6K9Qrg7EcNaHHZ1mrHLJTsgBTDfZcJWhnvpb53D4MFQNtj7F79EgkVxUyML",
  "key34": "25UGVDGQos6F7JjK1NB1xZWp7YqTdkTFXeBQ6emiGLHvJiymSVNe4v7G77vL2sP9bvaUawu1711mh6L5yWrDMbJR",
  "key35": "66LWbV2a1tUBYtxmSwBYZW77jydWdrDXfBwQT8XVjg8VwWQ7c1MqQn4HoenHQhWG7KKy23ZWe5fjvjmfCkuA6NRz",
  "key36": "467EuQiboaLyoQuLn7rYwbDCtCwC5FDpX7df8TqxEHrXidyKJNckUe6DfGKA3GVUsJJfZLWgvGY12vK2Z34Y8VvN",
  "key37": "Sboq7wo7jYEKdmQ14PgrP5kSmwj3ATa6WLoK3CxEiBMJGqtjpEcquMR2EQpR2NXnazMzhhsLD3vo7cDmHLfF7we",
  "key38": "3UWFvx5i43BNQqBaeZkedgTaogzAMZwS9YYbipEYbbFDY6gbG3jyYd5ANgwyqqN44nyCs5BTyZHdTgFN9yRDUoCk",
  "key39": "2mZW4kfQPFDPHh3jDqwjNCWJ9L3Pd6z8mG3xpiprjRD6iFKoUJUhQBVAZgsvm84Haykdx5721zERxgDAJomhrPTK",
  "key40": "4CjWxKYVyhuo8GnjgvYunewwhLJwuWhALjFRTfSix8NbSAEfERvH9eFZg1EX2DJtqSJdErGzTkQuv9v4HBhLyGcp",
  "key41": "4nvkHMFEjzocUT9oByLvZqKGZBUVGB5XzViAWeP1257M9skSDUwdB57Egpox2TdbWXUo5v2NATnSCgYNozLc3dZH",
  "key42": "51rys9iXrWMA7JtF4YBsm8Wto71psiVCGRj2Hm9FgJ12Z8d7dR716A1Bi8f3EpQ6J1G17iB2ncQGLS6GuPHHUaev",
  "key43": "5Yfuo5fpAfbRUHjooBktRr2K5cXJ2L98Q3C42j3vBBvtQhfpaoyByJTnHWKdvW8H1YisSxbdSgwmZfodCa4A833H"
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
