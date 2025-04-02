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
    "3ZDaRM5waoWv5s16fXYreKtp2moW1r9Wb2S7V25DAC5gAFcvJVkp6Vf71nEtJRvyYkfWcD26eFEYJpC4KXx6Zz5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LqsvNfyKugAcE5q864hmibo6viwLfP8WoqcpnG3MuNwdvUY1KMaruL71ddjnQgvaoJntWXVAc215vekPyHY7wgG",
  "key1": "5YqgrucuKMmvDY3bVTKtKjdEKw3cQeJkyw8fc4oEFoiSxTNGMkL6TPBsG9C7G2vK7py5XwYCm29WpSAnfeZSuu1x",
  "key2": "2bR6Z5uq1N9YCnmvgwR8nGq1WN5AiwEWNQApSNbhKojCQeB3m4xjpKsKNsFUQ7gxK9MX3FZZpZ3XVm6BqBFwqc3U",
  "key3": "2h9ieyjqNW8NLEUkhtPKWK8pwSc8DCnUgqXtdrGFm3xo8JNTMqRjYrFK5x74HfzVNVRfJbvXKVZyochzNP8vQm1D",
  "key4": "3ASDcW2keNfRL7CzSJwG9qZ3p2h8wXywMY57SXhFmzzZPDp2jjDiTFurxzx6A2yMMDqkyZtanuFiAXEVjCQxfgyV",
  "key5": "312YxsqcDFS1S2rKykPFKJndGSaGamPXFutdKibhPc3S8s2ZdFb5B5wQ1XgjMqyxj3jrJGFVyT3M7aRUsfge4uqi",
  "key6": "phBYN7iSHivJRYnzxob2S1LVTfUVYAX6jZytxvzGkoEqbdtEqpKJckZt5zjKkaFASD3EjPEWafrjTU68jw8f7wp",
  "key7": "L7S1agmNaknPdx3Nrbm33B1YoEjfwC9VLQJfCDgzUyRSen8K3y6gTKDuKfEM6ssFJWDkiLfYeG4pfWcDcdo3BEm",
  "key8": "TmzqpTfymDQ2ydzf1VnYYLAwfRJ8nsnnXydbjgojLp3xUmadXxoLrK9JhHWEtup3Etpxwmb7rcMhzE1kypam6q2",
  "key9": "3HSEgpRsM6WmDHSM2vofVJD6TBiBUCVVwxFAHjdFMEDT7uK7gw7cp6nC9kBLzwcJQmaowcKeoWPL6KE5S74raLQ3",
  "key10": "36AN5CEMktd16KzTfcV8SyQu8kQLVTpmakpkM6XCEzr3firHR4bfL7TcxVKyWA9WY88YhSXMHPFMr1NfbBCcvFgU",
  "key11": "3o5ZEUPiQpuSSZEc63wKHq6gSdwuPb9f7nX59quS3niRy4TSoPgv4QmUF1rnUCf2NWgE1XSu6G8ia3mrVavj7tfc",
  "key12": "3ZJDmT3vTnMwWBxYtnHwJCtsUzeHv3aipXcwixQtdgTQ8JmieHhC6XcghdnazQP452CPQivHuRotyrXBbbvn55bo",
  "key13": "eT3KTjGPaCUPBhqQgmCU4eFxAJTf2UVx4qxbbMo9UPBuP4hrqFJqb1fpewpToUFii1NYP4DWrkWsM5uZQX1cJKx",
  "key14": "sik7xCxSSeveQpSeRR3tLSKfBuBz4qRs1wUUjwHGCB1nvxgonBreiTD1JjBGZqEvtytAWxLF5NRgKtaTHaPdke7",
  "key15": "4MKaBnsB2adwRDQmgv9PXXN4z4Xt81xFJXGU2K7NpJ4Hg78XJpUsVt9dsfUF3fEFrhKEyCu7pCqgAV3UZDivT1km",
  "key16": "36szU43EKYTXkkMVCanLMbACDRD4bekVEXkM7f35CZKLaKjRFV5b7J9ubZhCxr9BcANmmGvg9bgWZKgQZVMDiCik",
  "key17": "qb4MjcwJpHrXd5kVCgKoceikMZUU8egHDVqm5K1gpC7cquh1YKt5S9o73U9R3PfdkhKaqcPBz11pDUh2cLQKBuQ",
  "key18": "2doNo1QLfPTtAErZydNKxp7cs6qjQLRKiv7M4UpcYXdqv55iGQY3c7xYV8dMaDa9P4z7HLbGuWheMXYWyYRPNzQr",
  "key19": "4RkUduGHx8QXZiQZw83c9rvsM847YZHbYDCDTLDpTwGZhLHae4PLhUZTBWZyVNfWPDJhRdXyVb7N8PytUoRYDWEU",
  "key20": "62fZDp5hDGH5JD6Rsuy1hMfruh742gbzsofTUV2xFmZC89mSpeDuRHnM2QkVmtk15h8Y8fc3o8nbNU5uKpLLPzdP",
  "key21": "3MFSD2Gx4vskyhJmBa5ckjxVNiJvyHZMrxN3ksfJJCrps1MnMPQtnJB4PdL2adsnh9LVE6fScxARYxb9c6o4nXso",
  "key22": "3HNGQevZRXN38erWGffbdt5vs7Nhq7eSB2et2ZTL7QSedhmZWDiumnSN9wKbKffEuR6VkHzaTZShhWL7mVE1mXhT",
  "key23": "2U4FGiLjBbGoHLBtuRRgo9WUu6L8HzeQVVD6uwhyYhCSKdT7QydNeSt2eKJetQqqU1NPK56FqTqDtwpoWrEarVgP",
  "key24": "5N9nmAxBYkMaaXSEsX43KAWh9oqnUCvMZTM1esXqnbqHP37ZRQHFV3SMHmva2ABEF1Mn37ehB36wZYpMgFKXcjjw",
  "key25": "3r9hSnYYrWpt5xF7xXXHXZMtnYWYDd6E8HrHrPiycmmG2R9qzHSdg7z2E3Jms8Qd5Gp8hbyJfppo1ZEhyV6NKYrD",
  "key26": "3RexqLxsB3XmM4pbmvikx6FKHDaryFKw2jH7CckQHaiTLeS8hX6a5HMbw7FFVcEL6hefCgC61aEb7wHWAMvsHcMD",
  "key27": "tKSMjaTHUHo9vBaYFXdCJFRbRDEpc94renVMtZH1syKhQrLuKUSRnfM54Zdph7VzbxUgdZCnNVEKki7jw3vAuNu",
  "key28": "2A7MzKhos7N4em4ARKy7xasqfMgwo6wxbeXhR6R8NkjvmELFNYBHFDudPeNAE42R45TCHe7NNVDVSPevr3E1XJca",
  "key29": "WAR2vGerWjxvpMt4rYs9UPKYmLjCBi6bL5wqi2krRkRzdkcgCiLZFZeLWPviWXMtorjUR1gbXLtg4LnFrrsymRf",
  "key30": "3rVcbPHhWb2ixEfXK1ACYTWbBE2V5qXoSCWBvhQFhSLnLXnkKguag5qzJRk55ykxzotHdJDLSaPtfEEKhoamjHgX",
  "key31": "3qBNEkbesFwukgmtzL3iqrjKwBRAp1M2J7fZHSmh9AbjCeG1EVXQT6k3UYPhu1Whm5dAxjwsk9zUWnPSKFb38sL6",
  "key32": "58YTpkzChmoy85DvBTrkMUKG6EhA8zEF5JBuvec4HycsNvD7qjUX4seFmh3HsQyqCLHixyZVN1hE2SCh7XrE9Y74",
  "key33": "2weriMFSFh942sizyVjbzopGKrzXLRD3pFZHKV5JJ5yZUaAGdTVJUf7fq2sWQh8pbiTFaBTwMsTV333E3aiejRL9",
  "key34": "3Ffgza6yUd9J7Auy7JBtEWUMDE35SwedNdXZbyWQ4LgDsev4tt7Lc1Gry4sDYHm2DQh2t36Rrj3nkbKAk3A2Jbgx",
  "key35": "4uThVDiMkPYRX7WZe9PehYgDVCT1KtEefMizg58YCZ6kLwts4Rt2jge6gFff7pVe4Ju9s4QT9s5LtMCKR6PiTrvB",
  "key36": "5tmqaHNt2DzAcuhVnNeFT6vHQCHoVT5KimZu9XnMzgCxKUBAXuSuvpcMQT8CAXKjeLtBT44cwYpWnjbTa2nr9tcS",
  "key37": "537hgA9GFY4jpR3ZDGrfMd2UVna2FchituUxpd4EbV6XZFEwgWKU8eeLKTKanwK9Ez8zveAV2vHdajPG7wcjPyJJ",
  "key38": "2zZibSgQppiXXNvSusq3Vx5N9GRHsHYvFzMG7RFUQnikgSUGFoLLUmgTRzzo85AYLv4mELqMU7pAa13xxZcw7NDm",
  "key39": "5xjakVYEupdt7NYnTEEoF9QQUGshPztVDqs8C4BaRuRt4FWWFmHNUiWp1UuvsFduHxRkRYFR4odhXwK1ezQbVvkC",
  "key40": "589pciF2vD66LJmjMKyKuRTj56YpNHUTfVHmviEEtENYzqCrtpMrbtWm6m389jQc6hWkGWktACee2kmURDUjuuLg",
  "key41": "mwXQ3mNYVLvifrXoXLeoJeRd1gkfrUVyZWHEYJtrJuseHLYzB3NgeBuFjZBNWkMyHTCkuhFzF2dib4uDvAqvptg",
  "key42": "42v91VDtqJVXhL6RnmHgdaTQmrFVRzqHRRbTENsaJk35ZCmPx7ESuUKFvTxEQ66zVFgsP7krBoTU5K3aMj2D9zNq",
  "key43": "4KZXwF1Wxzni1been8pGhCeVqKT4m3UmNn7ktvt7CG8kSJzX4VSd7GSfVTX7Fz2CL35aYyrN8q5ZQLwtZuCXaBci",
  "key44": "3EsSYK3yVL2YoaRpzVgUZKWAaYLwKDCQpFoD6JUcsyox4nJd5XZkDXANvhnVSLxPukCfvyFqdyrEnKiWGgMLsnPj",
  "key45": "pDEYeP3Cs3UUWMAiiwmMm1gkAfMCmQhwbgkmgue7WcwaE4kE6HWCHzG68XtLbiPzCbAYUGVJZkWerGbwi6o2v9a",
  "key46": "oBaBm86T8DaJ1dixS9S1B6XN9c8Sm736cBUZpXAwZu5cRDBk9sEkHvWBnQox3jKkmXrSUpBkaNnST7usyChyWTE"
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
