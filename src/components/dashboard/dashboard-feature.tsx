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
    "4AMYXyaUSHifvwJRtNy1gqL45PvTdJYHAExHr1DQTNB6xa436Er3qb778BmS5Ypj1eAXeo2tcupSTsncgXmAMMqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sV64KtGkhif2PM3EwouBH1B59bGkkwuE63GdHkUMhaH4Z4aCtNv2fhE5zCgLigmQ1TUL3hoUYmBQAPHugNahhb1",
  "key1": "4ZtC1QzMe2fGD9L3kijgzwvP2bzUZVrebrXue2gT5ZVasqsiHgqahAynvSQXMp2tbeiTEps5QMcw2yajvHg2LS3w",
  "key2": "ZQJuFz8wSQzEmxNnNgVdRjcrYbDa6LSwBKr8Zuu4ciJHpHGiakzS4JCv3rk7BqdHcq86cm9g9H6hwnK5mqGpaYw",
  "key3": "2KGWtzK5PJumGeFQVSj5iBRcrMwboCjU9vQhcSZtLDiLDXRiqXPmcXoY3dbdH3XVQgTUiGH7Ead7t9qrhzcapPcb",
  "key4": "4Rg2qWMUGrBX4PQNV5kJf2tAX15BMCdg2mkF9yCJT7jWr56ZrTD8ARzdBaDEgrGpcnaTM8Redqomjaim9RVHJ7AT",
  "key5": "2ryHBr9EFTCRm9ZWn3CR3AR9FsbCSnJjG25Ebgh5bbWcRzSBZdXmVnvThsZo5QtbX7MUcJDNstZ6nmU4Y8nnWKiv",
  "key6": "2fNDN2sxLnnHJqaLphA5y7JQ1tZg9jfdBamPMYbviwERBYuK3AuaAcjDi9gAvJnkkGvRTwf1AVVZ5YV1WDAyZK2c",
  "key7": "5bZSp6VvGHXUSt3YES2HL1Ctt5M2D1HCnByMvpr5UpaCHi2SmZss9qeVZiBSMoG36expZ6HTQueTU1d3EYbn16oe",
  "key8": "5UbCPzqBSkxCMo2cjKv7cL26UNo7BRaJQW4K9bdsWT8Xnac21Pck7CxpCWxnCoyy86QTAdeMeiyfgQMzyY5grwdG",
  "key9": "a9Xn5L8Nbk3o8FuAqCM2ZZnmFrArroG2qjPCHNqqHzcSUSs6EJH8ipLVh8dQQ85Vc5bdAUeKxV89yLpFQSaCQKA",
  "key10": "3sm4Zc2sPa3AF7UsND3uE5zoCjxS2hk7L8qu2KUVFV9J2ecTq6wBw2McZpZyo1f7cQSeDFoTr5bSgsXe3bhqkqwn",
  "key11": "3vGnspP8M5tZ96ZMvfWevStmYHoxd7noMzc4yEpFdDdRwCBcq5tUDhWv2zxQoP6Aj4AMjVVjibhvLcenX71XJbX7",
  "key12": "SGQ7tP9w7NAGbAU6qCj7FemL1Lu2MZP9AyvGvZ3ikDj8Y2eYCT5CUP4F8dt4hE7DHg4LJTMdBU5bZjuM1iMov2F",
  "key13": "2cerk89mRVYwnM9FtZPWvcwdQrjnjcpy2fKa8aCkJxbbvRKNaP1zzZzKGZGDdZgqhvCodG9Cj5szeS7L4GN7M6zh",
  "key14": "aa6BaFctjLsYzDJYkS19Y5dFk3HkcDGDE6zbqoRvQriuZXYp3KgLp7roq8dAJN2Wt3MuUcxCB2aZJHzAo76w7kV",
  "key15": "4iWkCb3RzUDB7ren5swrw1vPBeaCcG3t3AEz14GEywB4dU9tkrQdk8CYgm6E3feBJ233u6f9o7gob7NG3tA9hHf1",
  "key16": "4Tni3GiSwKnvbGQarAkdW3bMEvdB4Nfjtsu1VEYacD26A4Qe6CTGKZA2cfXox9ZhvjNfyKPrb6c4TPwzUhTW4bBy",
  "key17": "nz11c36w5aEcmQRwBKmBCEVi6zqNCjbBrSS3qSBCrto3yyCX24AKZhkkonM9ykhMaqktrZrZwckCYVW8UEqz7mf",
  "key18": "2bCGCYwCh68J7sG75E7bmnL968oHe9TpkR5Aj3PL4pEMAQMJyF1stu8qkxDrx2378dEpGBi5Muv6aXTDQCorN7kS",
  "key19": "3oRubTPaZYXB5L9krvekGMZm5guLuWFU7uECaLR4fVR68pXFncKRfL9AAcD1kZNN3yjMteNufD7EUE5PX9V6iM6",
  "key20": "nG8Esz2q4RrpJGPUjCm8NAuaeQFV5f19WLPLMQV4GgRNwKQA8VBKSQQTCRR5n61uHx16cXipcxnxbbHrddswfQH",
  "key21": "3tsi7XmBVAJk7fHYcXUqav8DcQ6nkGCXLEKjz6dNEcNK6jDs6Jfxriw4Yqs9DKFiYkoxkjk2niCxcnLhsaZo63vC",
  "key22": "4hK55DbbZfsCJDhwrXDC6iY9YgPGAh3p6JV6WqhYxPwgLHWukJKw2yoHY3KHF91GUfDtd9H4rFFpcfzgvdsQdmM5",
  "key23": "bbcWFcAzzmsL75xb3SrrQ5yRzoAAjVXALR34ctYwFy6jfA7z5RAJigBY42SA2UXu8swXcdHU28sZC7qY6NdTMt4",
  "key24": "3WyHjqWHttZRkEcwtbhyJ6A3kyQzTfdjjjhoxz5uQQhsvHEDxCvb6wE5vm5YYstQzxUum2QkW32uj8kY7bsHHPcj",
  "key25": "g8CvkvCs8jDy7h6g3kCgeiprmh3dZtpK36BNLm9pmHkYmPPApr9Q8KYntoqhfRmMDENTEe6DWP57KahxaWD7yfB",
  "key26": "hN9RMviUA56vVy2biwHah5GMwLL5wrXfhf1mUfthbEE9ohZWoBo7XWnaJf8o8hug4Gzw3wXBnTPjAPWesda2bhQ",
  "key27": "TMRQh3cj3oonjX5eyWy4pS1LGv6k4iMXcdB5CjjuuSbtbye2T4iLwd4JgN4nBgq39Q27at4nrQ9FRuCrJGEayXj",
  "key28": "3PuAa5T1DGTyswidKCYbPU3Uom4LBzzGAHPmSMKtcE855rbNGm47jGeDhgDTEtVUTM2eEfwkyAXN9nG19xwUWyGm",
  "key29": "YRL9AdF21w5g1zkGrdexFii6z3UnVeJvmfU38Q9wEzZUqYLL1WETn7Ascaco8f51nppJsXAdqN7KSkj26NwCbAb",
  "key30": "33dj73JcTF73wuiNvjuzqvx2UVfsryJWu6n2yo4q3wShz7fvTiEFMg9WgFqt5Lp77Y8WTkoAMPqpYrPmrXVqHubi",
  "key31": "4U3D8fmMww4BXSUPVfLUmEUMkVMJi43a6DrfupzUVegnTLx2CZiPvWTftJSxukX9URbqUJdej2EJ9spFxEg2QraQ",
  "key32": "55XaPgNWyYKtK7HegncDpfzhgFUqBKpu7fJtHxMGboBPB9j9zR6Nn77tAuy84ppBBeM5usKi8ExGen79c1CvkUps",
  "key33": "3KyY6RBi1QqkvAkca3VqNptCHK1Nyyvee6CDcfWwtSawFHp64Zx4vkDeke8Zvr4HZ2Usaizw6hv9NAusEgxCDTf1",
  "key34": "3N9Qxo1VN93K55aLCWLGusH5YngMXHuwRz36nbYeYEXPxv1PT9Gwuq2AcLE6oejsixSpcFMuqLLmGBzi79P7SUYJ",
  "key35": "2NWnk5SCESCMfCGhSsRXAbtx75kQeuhvNREJvc6PxUthyEXmiv9dzFBxMiWeTkhYbcnKDCSNEtR4G4cS5YSS2WoK",
  "key36": "58MX3byTynu5zxzPtqgg5DFGFa7zZ1s2irXqxwH9KgSErdS2ETG17H8LFuzGeycvvN3FZPQMyCgZSBk8Rbwd7B4F",
  "key37": "2PjwAxWgWYcozxVPWgkZ56LMUgwx4NLHV8PpdtQ3SXajU3HiGuykpweURirmUUc3EDbKbMuNCvV6sJUAR3qfDH47",
  "key38": "3Mh4vSzNVwwm3RG1xYS79uqfqVmiXxJsCH6K9dDmqiQ2qNzbe4zEZBL11RT5YKLy27F6GRwm5dGaXPKQzSosQBe3",
  "key39": "P5QhS4UJBmHKC7inu9D3TB3HaARLi3xyWP9gP8RKEpWy4ctSFGv4KxXi8vTCg2ccn6n1Ews8CPohxgWrfmUjYwe"
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
