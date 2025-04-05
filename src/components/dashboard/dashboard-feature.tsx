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
    "5FRPFqZRbEfqr82uYhwpvvfBtLmaHxYy4f9jpo1Vy7eRfUz2Bz3xWZXbtEBoKvbWKjVoARSaHVLpUJ6CBgsBDNVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t1VqiuY6AnjyfTyPEV1YNQsvkZa8HjVnXmngQ9ad9WRJbiPSMqSAH8jFSN3TUHzP2F9v2xjLRe5WipG3fubXtfi",
  "key1": "2hLNLcB3h7mfKCyGRj9uJDPx9DmNTqGYHsbLykRm9NRhoGs69pFa83T4hWZuYii87QD9B3F2BEbZZNiCPjZYRCkE",
  "key2": "2DQQkxwrS9J2HUgLjNpRnRPPNHf7sEnetcmCdmQhxRSV3s6Eb6rKiqbtgPxm7U9LDmuq9jDNYVDLAXaCzzdEqhFv",
  "key3": "2jLQv84S2cdSmX1df6kkY1F6oEQJbjtQQxidTufU8gn8JHWek8d3os2jL5WZuJym6j6X5kUap8sf9iDDfUaBn4CP",
  "key4": "33JdWtFfDVRNJFuKCGoAfiBjXConknemVqpvZcqih2bb1ypJyqECSu19v4ZhzHd58sfUvbfecK3FRi8Tq4FbJeMu",
  "key5": "4bA5xt6rCoqusnLkAtWVm9NL6tqg5uzbJSo2kJ2JVNpVPe9HDuZGXzpw2mecRenUDH3hrUtNCaAAqBoifxjTNt8S",
  "key6": "eBYPZ5VeCbvVNKFk8c46CEYaq4S2GeUbT4qcwSEcNAup7rS7BBQjgfS7X2wBQ5neVytkvpGoQt3Cbc1NpkN5Ly7",
  "key7": "3dTvGiTzRxqctoqtsiN2iNDq3X8fzsN1jWKXuBuk7Rex7pkQ1fmmZGBUtc27R9VAZ75uUN564DxGEcECTt2sENNV",
  "key8": "2eM7pYEjUvGGoEnDAeQtJLQUkbkTzDzwHUM4x5eQwKUAp8id5bPt22qYStikZHCu9vgQdbLw9cxNCXCUkGiNLkfd",
  "key9": "3Tqf8JLa7EEehtbwmr8GsXMH33MKSgJ18JtQ3zwCCHb8SgoA4vzMyQ36LKafNkxP1NaaX27dCqi5DBcWuGecGXdo",
  "key10": "65ZkrD3MUULqiEYeWoEdku7yTSsTZLpek47cG9a9kdWsu5B4yFArSEMW33jYfZUq3MDkhcrdCYmhpiFJFmYSucSc",
  "key11": "63nQe31gYsg6ZRW5eh2j4bZSB2cbbU6KvuipNo4pWoSSGD6uZT4ed95yNBCyfPyhZZTpzaj7EFQSCrGYHWriTbWc",
  "key12": "3oYYWssUPa6baMj1bB1rDMssZzXdK1TAm6Hvo2dCNZ59Tj8J7u9Ct2APAcJkNdoeVPeLaUGwQFxkJoxcvLK9m3Gi",
  "key13": "5KNKq5YvJnM4iCmkMRcAfmpKE3zuXsQnHJruBQQo4D1R3y1Dfu2HnKcnpAJojhqTd1aLFKuMpUR1a25UmKEmXLrU",
  "key14": "5CLAbozQ6jTRnezihRtw93nT2puJw8pp6f3GE74BmDi8gGsRSLdNUWVvQsF63wgUQHpXM7ufXTEADP8ag2BLFt9c",
  "key15": "2GS8nQozbdJ8T5yMHN4YeU9DDYiTQgDiSMopJmnxGmLtMfpHFpVmZDxPMnezWzPoVyBNM5AFewujuWjdzf6Sbd2Y",
  "key16": "26c4rXi5mysKU8wd3NbRDmhCSEY7Ti45ARJfP42PogfsisLnM2bJ2cLqFbSGdbLqw3Y3vFoRfZcAQqK1XEPZEDEJ",
  "key17": "3eq55yUCetDvVPJrDdv3XPrWKHrvmjvrkCqUVaTqJyoBykw6mEsfwnv9P9xnMg96vAPnFUWY93yxAD2L3xuoXjFc",
  "key18": "4NuYvoA5yxK2RzqsbJq8QRpMdbF7kJiqwKg3aUV5FMgwyZeUATPj2xaF85xbRT2RKdUdjV2kVb6ExnKAhC4GCN3R",
  "key19": "3Ro51FsEqDW3SrmwXP9hCn9UyC6ZJBR4EbCxHMFBqVREBaKxFDz5uYsjFkgt7Uqgv8Uaba3jBFtkxPs3A1p8PB3K",
  "key20": "5WkdmA2ksVZbbZQvdAAMWFf8bU997DaVhqxaBkmfNzqsnXvfUbzRzr3N2itmGXtp6FkDpir3RXTQsMTssqCRAtMj",
  "key21": "4XvMKtyv2jsr7PBePfUPhJLcfPtB8r2gFbpTZNFitnWgCwSk8sxA2CDiGBFSusG4bfbxgU3WXn1Eijb6P2rQM4uB",
  "key22": "5V5iSTris1zZrqJwK6YQicffGFFeKxxgXK3nCbBhY1JRTw3NxgG8zYCPVxj8TLoySGAF7cAAMaczeGG93FPhgJkK",
  "key23": "26RfG42fGsnYBccCqJdq7UX4orcsJ7Sk8vKVUVm792yDqzBQRMjFnZApXq5Qy4TaukANTAofcRPuJ51CsJ1Ae8Jd",
  "key24": "3z1T3dUQ2wzSqn4qQxPe6JJL4xRgUKmekGMRahUpNjUaXz2qctSeLQwjS4f9hrPLLYgwJmSuake4LgTtqT9cWBwp",
  "key25": "4WqiP1f3iCydxGkgMnr4GHXSeraSeVCCSqZLS88URRVWripZKUw79Ubui67syvxk4ZNSq9U4iKPKkPkbUzEHmS3b",
  "key26": "2qPsdZxu31G3kHd7rGm8xhkTepFJdysNYFZmZnrFhdSWsehu1bhvzUyhDEHJtxiZWx6qshnFLfYYyZsjHcPs9XbJ",
  "key27": "4HmHMA3uT55g9J5mJJk3wUBNFtEFbEiYGHk7Mv3Hh6PVZfy9omb3XQnpPtw8HJ2k3g7W8yDJXNmYLjeoby2vm1pv",
  "key28": "2fW8YeceuazFBFHK2ow2zsVm9ssG8rzUwUobhdmFwc5uF1PfYypdYTYFWixprx7SgBkHrm1ps4L77DqFVsYSnPDw",
  "key29": "5GTJykU63mfvX7CmCkX4BWwDU9vtZPoLtdZa5MUzkahdYfZQYQiwgg3BQiZYEcw78sbPka8z6TDndAxEunwVoR9s",
  "key30": "2djqmfa7kAXGdgGoX6aZhwh1wwUXhscrPLJM9eYooGyjaui65dNEG2UtGZMfogLecxDx573yhBVjCuc73vEhFkQG",
  "key31": "hvUQURkkiN7ZyW5kK7PFchUMFecwNfMp97eaX3QFC57VjqbD5676BQZKjob4WBzxowuqwvv8t8BveHzn3fxz8Ax",
  "key32": "3ScFExxhqneUiaBoYkPvGXu1M9yU1sBKGD1ZXU4JBe3S8hsYoHjjdnHoAjuG3z8ACmr5WXk1qiHEAwiPrq6oUEtB",
  "key33": "3W9JD1z5GmKreSyUiAFtajMsaTiqpa2XCizocBUwm7jQSRZuQCGso8hAEArccyjZTrKAr5D5qStjiiTDsPhXGwrQ",
  "key34": "2snUv1pRthVmfxd3J46wAHZQRm6SgZS7Y2S9xobHupMuSWeXVWdAHpaFvLt7MfW4mBqwL6LQTXcxbBjYEtgp1KiQ",
  "key35": "5JLLAyJLry385uHMTMTnQqfo439PidZhMEXAcdzLevyxbb1nJpU8tG2JV6NaBmTaTNJ2Wgwvsuvtyd1zuaYUSmQv",
  "key36": "4ZW3KLf9hYVAeVvyomUztZkJwD57scGTRUXQgJkajp3z5VsJQarv6Hjc3pRaGj4mXp5heQijfbTzkDMZDrFMgTSd",
  "key37": "4zDZQ16toSDgzEw7duzi48B49UU1sLZVvQMXUDWRN3tazHzn9NuvpMu3BaVoaAFZX5o4wszMpxpjh8MAqHiW5PjX",
  "key38": "5wipBMbDwnvjJPWTpsjsS1tp8e3AfPrp2atb3snEwPUCZQBURwYqXuDAMtTe3Z92nLLvJVQw3W93eHKARru9h38j",
  "key39": "4M2y3WDzLrJha16GRviL46sjUAm5r8kTKxf56KAizzUKMrSaDa5AxDZiZhL2FLjGN71Qaw4C8MaeuPFsWBkdnWy8",
  "key40": "2hsSmMbRR49ME7vytbimVb4Fxqzy7PCmSjgWcnakJNmRvhyidgjDTzeQxDdjdjoA56GMFEKqoPXL7DYHUgraVf98",
  "key41": "2WU3njBmvE42qgwY6i6NsSD4ci7i1nDGrUa7NAhnPmEK71UGWS2ysDX7djNbw36zrSadmce9ZNjR2GDSz8vXL8KJ",
  "key42": "4A33utuWpryXuxVbQzWFifuuuBPHA71hQ324NzWETKso3ydGZfNxoMBXaQFdHPfNRLBZokPuUJHX1KXjen5XaqaV"
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
