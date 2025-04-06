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
    "5YzT49CHcDQH3AkW5cEqeTyk1QMq1S26HLYYMwswksLPSB4V53mqMi8JUoybVRvd5xJ2HTmYQjCinwSCrcZTbUis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U3GDJeR2S3TNmPVaWhk23jKR5kMvhYbCZrsSBxXpW17KFapHNnZUA93nkY4zRQsXFgchyE7kHR2G8qt1NJRxs7F",
  "key1": "3LA8VNVn48jTkqciveUCJQFJ2s2uZUMJ5uCiDxRjktFDFcd1G7YaSf2sDQ9XEFUuUhS4kNq6rqpzj4Dn4LmhU6Ce",
  "key2": "2wTnrGDhkQCkbEjLUzKKHw3iV6hnRXtD4gwSYJPpsgAfzMMVGNXbPTSXyPPaNQyVFR6Ysp85TharXa9ujNmMgBoV",
  "key3": "4ZxG4ytfqZMNrrxrxYt8poZooy54KSgNUViawhRTdqp8Rex6fK33NF1AiPoJdHHTtk5KbUHXFVVoYCPXiuGZSjYW",
  "key4": "4WACc9z9uC44bDoaoSqd5g5xTrwdrbJxMsndhKnDBavGKMwJHMaXj8EhzkT1qFQnihjRQJNWQRecxZCsb3iy5Ud1",
  "key5": "HFhCgnHX4b5DQ9wdRcoNuFFmmBvsWonH1UWHp66TetiKmr5Np7KZKqE1EmXSUeKCk1ox96FGvuJ3wvysV5jJzNq",
  "key6": "36RF6fWEvUH1t12DHaBNg84HDbhhx8ZJhqC3No8fEvCuVgd2vEXTtoHWbpDTLvj2K2D5yDQYQuj2hpwGbTWpeJ6L",
  "key7": "5v4untL7PKX3gPDyr5oCZASM5BbdvwRxL4UFeVKDTLNAmFg3L7NWAYgY4c8WDb5Tuoa3fhveveouEn6sTq1gdVBQ",
  "key8": "2VKjj8oodYgc9vQiKbA49SMrMYNMRVASNVq32mj9aAqStAG8HnXbFGzRQwrx6uaCgJ2QRVMdnRuyRj393GRuzEvb",
  "key9": "4tQiLQ1Mj5YRGbn5Ki9sbSLdJp3ZbkwgJ4avzSh7VPVNnfANyJZMyE4v27TbDq2MpDGm89k3PZxqLZDHxrzNm19c",
  "key10": "4q9V78PkRrbaPgWSnmczuhTxxHV59qZoDZMnm7svv8edSkfob1FntHhKgoteQDLP8hFubJKLxCLmVr5ZuncmuWtn",
  "key11": "tAZEaKvejLEaPaqxp2WWtFXQGNnjhvH3nSHwmecQ3UmG5oWLiNQGuKuNJ7DVFAVkX7MLinAbMTsXLSSoEiNmGcm",
  "key12": "4z65i6BnoFY7V9U8tpskF3f5DuLiRfzMiV53mhHsV88eBT144KdsHB3iQY5rGLVadUjhySu2iU91K3fYgAszVtma",
  "key13": "5jbdLGDKxtavTXPBVDH52M6vNpE9W85bkC6SXqYuNZ7DQsrJMSDDevTNRrTMvEn5HrsPLNgZViQb3AGWhRooYvVG",
  "key14": "35ZmCYvRSiLGX26mnxVvATCvYFCNsqfZPQccaQnTiMxGBj8ytKmPazH1sEhqRJ5WFhXx6bxs3kDZ8DNK3gSrAyG",
  "key15": "4hZtTtakEKq2cZsREWXhG89hZxtHy9JgYGAjZg9h12fyFw9Rn8i2vZ5QusQZYXehaDhpzjcq8ub2F9w1M6yEFude",
  "key16": "4hyHicEMi4da56jwfLkMNSTv1Jp6X3n3P3aF7vTFH5pijqWGcfuRLqF1P3hRBVuMk8tRaRuzyUJBjLTaAkTFz8TW",
  "key17": "23TeY3gTW35LUWD2UMmayDKkzJrqZMz17tiiV3d1fQs5rd8tn5CjLgRhCNrXo5HvmhY68zkbiWSZwuiuEGm9Lzdq",
  "key18": "4ARMDdUZKcEPpwzRjPRD9cvMEQa4CNMjHP7JUzYDQy58AXPf4VyX1KFWhikC6TKd1mouVADftSSq4N7Vek3p2nmq",
  "key19": "eXWuud8JyDihg2pdTo6KUu92nwhYxD8Esw3v1dWpzoviRzFCb5LRKQ5UJsHHRmvH3yvsWmeC1AGPeqTKRC68Eou",
  "key20": "4SKTB9yrSMNcoDmTifA9bcXC9aLiHoz7hf5UDyHZxM8XKoJ6AriuQTFAnZAoj4bxw5nu9LCPR4Vqs3doNPe88YNB",
  "key21": "4kwtSqJbYyfHzJuGYtUv2nahCaPgk1Dp7zGBNraEbCfg4crz2myGgsX6ggcEbEYZmRQoEkMcxntSqyzswMDS9Upb",
  "key22": "4BmUD84WRh8yjnwZUkcMuRG1aQ6ZUfaeyDtTmRZUNdy8VQxz8VzGeWRo8NvkXPeFo6i9e2dQxmaqwUskGXRt2Ljz",
  "key23": "4ntQsJozL3mAp7WabrAgvpthRtFcAUiac8RAmngyKo5tAy7JAToxJJJijj5NHdtUk581woyukuNYcU3wywLuyVek",
  "key24": "4P3uVbQyxWe7W1GJ6tSivVtuPUEAHMUeWfk69GujFhNuR9WmDjHBgMTcn6XXftRQxDcVTLqk7n654f7TkocXkWVc",
  "key25": "5Vya4pLDznrZUDCuY1batyh4VrrX4wnTxWuoBEpJ2nMMHgDnnCk8g5m1c29cgPPQ7GRkJHjkgGCEhVPGd6XRwbHv",
  "key26": "3dDwGzJ1Ro1hUEnfPa7HfHNbDNu1oGmjgnZzsf82w43mB2cujfoD2spifqXu1LRJpmYN3pb3b8buLcqzW5HWu8np",
  "key27": "4mB5qHCB8xnNBmXJSdP7dQomnfivAmT3bydHSyF1dLwoGLfJcgoCpCqQ8GN8i5aYd2VVz5GAhG4wwxuhiKGw7UyL",
  "key28": "34hCgvUjNsWVMxpLqXcGYzsq1rLYAKDNrnCUyGu5bHrHkgDtdW4tb7LjgR9joMKdkxb2JZVum58e5ufWDgZNghb8",
  "key29": "2CyGj73tdA1KdqgzWJr5pNUctQTRohoiXYdXAuwWwrvWgWEyad3f9hDWjiLbUnjpScBLZMRdAZ9BLp1xq1mM4NLs",
  "key30": "5dvcMRFeY6ogRU2Ni5fk87V6xnM6qmmHFFXz9SZrqbzVnWe5qqNA5Gccf16qz8VhoKwRcu3iEmHpo2HKDPuLdHYe",
  "key31": "xeS9Doc6hzPcmbZvuXf1EQr4Xra42HXekNYQoCfhkJ9vzjfmznNi1iRSieiAvdJUkMHQfq8uRMXRUnzdUcpnuwS",
  "key32": "4XgY2mdkwJpkJ53aq3AWZsZ5e1e3MmVFZabitbEHnZauGWSoRyD9zcvqkC78YXyxQgUEcZV2N1SfPL1CmF5tVmkE",
  "key33": "3Ydn9DmsZLdFqBuuarnohh7UQXuTDBGoHfeL5KHTWeX9UhtjJhzUbPSbE54zokfLSyKWUVGS43K4grsWygfh2gco",
  "key34": "4AqjXbj76mS6T3V7yoG996c7ULUbWWgGrwV1qENHJd4eKQb7CnvMQVhtqvyx8NjtZxZ34ZS6VoMRymBVNhDarfca"
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
