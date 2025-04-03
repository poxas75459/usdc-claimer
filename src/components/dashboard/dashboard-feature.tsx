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
    "5ff8jrgpqkzdeZFaahhjM8h9dFMfKDdt2KpKhoVXgdFFrNDnxjHKL7FyCxrZGUaNeEs9NmpKVjgC3jh1vZrHmMRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5invQShvaTgkJPUfo8UyH83sRvoRYSJf48j2mVPagYXWcbMPnyucDbpJpRDQEoff7nva4aRNu1go5Nh1emiZVydr",
  "key1": "3NfaKCbKfsGwosVWPdSYfDUawBZ7cL3iqgpZZHyvtqSy9473yrAzhGxe3roQyjgwwuf4L5ihdP9nYVPNJeWHvxz7",
  "key2": "3tirrHUcc74ZcbcSgNZbvKk3TxWGoifCrNUURmFHpG6zQ1yJeTReuuwRU5qxFjVpY3FknAuGVmXxY8PaCeaWy95E",
  "key3": "556Ev5LssqLerdgonTLTQoFKBT9xdVsuZTXrmmVfCwz8Qgd5JWLaTX3czMcFssUhjh2WKtmxEDmFB8Xgc1XUbMV4",
  "key4": "48vetAwFyfvuVumB2G7GfXrwbUtfn55x7fQjVBGP6AxYysphXiVoCQc6mQ446kCwNRLjvhQzwnr6aVx7Y6xzYMjv",
  "key5": "5P3hWiQjjnYxYzYTHqW7s8cttco5YUMjtGT29NsYdGUniLTPukpy5XxCxs2FZdkfphKZNvMKLeR7TJQadNMRwN2V",
  "key6": "51a6dejiSN8yr9MyL36PeTSAcEyQ2p99pueM61MhUkCUe8n5xpcy429E5NSceRTEWcQRztCNBSiQvZ768UUzjdQj",
  "key7": "P8e85erfEiXk7NuRdRTfXhEMFdieuD5stCS1G4UtH6ZDSqRcDa1nQtarMGs2DPkuUpqUMh57vC66Je94c3G2QLF",
  "key8": "5GoaaKWbNWNjHBShQJGJbCrCZCkozS9pRhgisrDC5wdeTXjX9JCs8tJtc871f1wRi1yn8x6u69cKvPZNHah7XHt1",
  "key9": "3FJT3Lme6jZ8ezaGrYGn5wQ7N1d7j3XfPKJnwoCAzzf8tV3hYBMEcAF7c1FawF5sHwGP7mttgmRbzUEXJfBqWgco",
  "key10": "5SFVrSkgFdVRCtb6ZLRYhVjKzvaEQpSbRprjNzqEciz7zFpMS33xMSWUDsKL9YdJzoEwHjsbi7fi35dpEjnLLp8A",
  "key11": "5TyZPCF9PkuXTJVDParfVtgaZ1ZdzyLZAihFux71p5EjrtNFpC17xDjDv6YE8XYQ66iguTcxSbzCmCWAXh2xD3at",
  "key12": "2MU16JhEP5pigBoK2ogYh2gy9pQvd8ZqaBEDPe7iv9MzfPrvVSKPiMjUKrwbqV7HMkSQxQWzVFAgqUFz9K6WsvEL",
  "key13": "4ea3abCjdpdQHDhGHCnAF6ERcjj83VxKRZ7WGFrBbUzpnPczGsLcfaykf2u2kNjXLboJNRYyaWJ6BvD2Qokj7fRA",
  "key14": "52w7gPfxPnQZQgM94PpfHw1oJiGEHcTyLPmemxzv6E67taqcyNhigeecN3tCPerXbYaXAeYUVLq59WChza8y96bi",
  "key15": "5mVy7vd4JWNYAiFud8kVHjLsshM7hWayNygsekWu46kmsnTreBMRarRTPAHyAfuAv5Us589ZXMvhX16A2xFotu69",
  "key16": "4iEhf6ukeGXwxxBfvcXwx23f2ZCXEmMV5dx64mrJCE5RMNibPaR72fSNhGNysMLkW3mAjggzoGj67Fi3s4bNzGga",
  "key17": "3tYxygpDuBJJjveYFZuzCh5sZgzHr1Nnn8FuoMvPEwMrBo9fUwxrFWLeN6mfGL48HAVKhFv8YYJA1Swv6n94M5aY",
  "key18": "3FfNmGNkD8d4su5H5dBSPejQwYoGoN62v8qMg3bCDqc2nAfUYophxHqnCaT2Fij4bB48ycxbX3yU2K5JQvxmMvGK",
  "key19": "2AQVa6zB8ZwKhSo6A1PitToYELdTJDxTGrwE8zZZkYzp1NKm3Rb9AnLDoasAKkp6SgVbC17v9YrGQ7MfxSGvQUKc",
  "key20": "4vhL9xGveSP9eK115RGTC8gSEXSXNzyPjME4bieFyUjwdKWy2NnbNgWMXaSwfQBLrmp52hZGnoNY3Q3siscEg75h",
  "key21": "2fXHvahgA9acZznntNaEaRijJjkX7TY6HPVchjW63GeySWztvc56gbD9xcn8NKSn1a8v8AKYD1U8kz8R7znxLg31",
  "key22": "57G7ZVsfq5sxvtTG33h1mffxwCuKqTBUZb6K39AcAAAAMsYLh187egtwmyHBUPtfYTdgJtD2DCLnKh3tYjjv3Wus",
  "key23": "2zX1eZc4weieKbJuRHvc1Jf5n3VkgfcVFXgbzX8HK1e2mSC5QbCW8CtdP3y7zuGH3rEpGeKoB3sp2n1eJZAfSpW9",
  "key24": "2ARKsXHwLEcNh7DGj4BMGreMZhBiDNuH3mWa5KYNzvZWFunbfTKpbqxX6tWrBUF1Ny19HcXzKDV4nshADmPF68Y5",
  "key25": "5nS1UG84hk57gWceCPviCeo66MEzBhmQR3qPHiYxzvV7Aav6zejwPHbbbj58ekc2WeFKXSGsD9hSsr3CvesoDPki",
  "key26": "5eb1GuM2uf9Lw8gu8wreohsZVt7DmdFGvuJSoYk4Hyo5Eaj6bPtX4NvJjg5YZVfVAP5k4a4GSGWDkZHbp9knGaVb",
  "key27": "jcckYSF4RQxxQbyDrcVtS8av6nHkvGrw6vfhukFd9UVmePZUxguZfUL7QLCqfHWQGXzvEUv8tRg6qodJkKHqzKT",
  "key28": "4gxpo8dqCN2U6BckhxA7bpbk9G1suHNW7UjVoc9K3isQoM13XF4WsBFxb4TpNUJEEDL9YgVeRo7sgUcaetxDeVFM",
  "key29": "5LUFWhwGRfJa1Zkk2sV8ZXckt4qGNCn3HmmKpXLnxWaym4RDgVLDZeKNpDmBKHs3ZTWczUxLDgLvMcZfpmJiNrTc",
  "key30": "4K4QZr3KWsRxYu3TSVb1WdvFhyec5QwHcw7qCkd2T4bNtWsyLev8yZBHxTrWSG2bttWud5Pf7mCchMEzssQoVXu1",
  "key31": "5QoPLGAqVoQ4mHWqvSjC1SSuKFcQtB9QDy3cJ5DVevJM2d2JvQXqxAMuDBaRkEGTGTrmFSt2mPY8ayi4RadYK1AH",
  "key32": "5kUWYQs2o9w9aMESKzfUUQ468cwvQA7MZLKg2cJvsB1cmvaeBRqykswEksnHBze1BnuZQ6o9hJTxS7BbX4jm9FDB",
  "key33": "3dKarB25sgKeeSFnd8HEtVWBimNn279bFtZU3JQpMJKejn8n5UMVsxYog4qqt5GVG8xhfbXv2T6FZP6ssS5C5Z7S",
  "key34": "2SmPsU6wtA7NBERs43nyeEZ24ZoVgguVDtX1eF34i9XxGqj7JLyuDxHd3UNeW3d2eUmEF5TCq16VdjPqRbRyPama",
  "key35": "UTBiJFkas9DbTb6RmtKTQPkjdzqFwNmRCfWq5xvKBid6u5hokMzegzG8kmGe5K8xPHmM8HrTN2JHri4U1UvNjxG",
  "key36": "3Sysj7QFqrXEVrKwEkEycuhgeVYRH51x522YhTqJtxRgzwzn7FYDCrwAWob7EbMNoZMNQePT9anii3sR5v8x1aAF",
  "key37": "NNfPaLzueZawns4VM2nXiHtiRgw9ZvSLAp3kpcERkAdATX4MzxkqgpnnGJqJABFwQzBpFcb9iszmjyqsen1WhRa",
  "key38": "5UgTEVmkg7xewSbvBmA4E5kLj3xz7JiU4o6dRXyq5conXs4QCAVQ9nRPBejEivhj9HmuPti5RKj5ZqTzSyVNZ7x1",
  "key39": "4yppPSZVavVZtWoCUvSV3VqUnkjFeY8EPyfzfqwVkrphC358VNK93EFB5vKCq7nEqSKgt6z5aavGgiMkT4aEyoVd",
  "key40": "4NW2ehHqW4kPKnh4CwaFUdjpiPTqCRtnvdxsWhR6eiu7s6nxEBWdRfz3K4qcYSysSDSmJcKpZGTFbYQA7rDc1wsA",
  "key41": "48Vowhd5bUm13tZvkddV7jQsXod3tY5NaiBoU77d1JGLxiyYLrSV4jCLW1rmyhm2owEDQpSDGQqWFUHWDgcsvqQt",
  "key42": "28EniSW96qKgfrHCFfKruNiKQD6qTco9eqZWcS8rajkws2w7bSFvs628qrxwt246wk8JHYsMpBUJXscczP3q9FaW",
  "key43": "4aZRGqGju49joZspPcZcmNe7Z8tEWC9tridKFASJoV3AEihx9p1LWBuNgKPdTYhscfM9Y7d8DD2EPdTs3T1VR9Xf",
  "key44": "4HZLFjbn84jB72hwiKsqEDypUjgQ4XwgnD83FYfwN9paWAKTaReXT7GFFP7C16oCzkz7nHRJQGEheYA6zyNT6Mjq",
  "key45": "3mcu8aiAVf7njPkoTRXjrzfJjZgQ3o6JmbhGhemgk4PcN2xdJQKvefFAfDPDbWFDo68GGNfD6fDy3ZUHVNRRXsde",
  "key46": "48DbCDxbQet1DrzC9jBMp7qFjSYQ8f1Uh8giChzGGZ9KEJkEcTNm9tuJz8azdVJd9SMJPojcWZTw9wP8gSP7Anhi"
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
