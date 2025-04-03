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
    "MRLy4iMpLWJxbZE6Eb74J9sPEG3RunXVzYbHCachLBhHGizafieaSXE39Q1h3kNzVpjcS47eQi2XNnG3X7fGKR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nHsQ2VDd6yosz4A9oRJvWj3GjLddVNV7QEF83XJuTALx23yaVH18w75nkXyYMAcU8ekneiCh1DhfQ2mAQ2t2Nkt",
  "key1": "mSxirBedccKwsbDBkakReKNqCQjB5cFBHnFDesXr8qJCWNi85sJAv7SewtaVpQeKgFZhLFwKVXFDfxbBtWrFuLT",
  "key2": "4jcnZBPi55fEMosTN6N6kkr7QWLWGzdt2z8xHpXidmLHNUc3rmmXNkpqBEjNxQaU5PWUbTPMZG49Gd4nSJEXC4zw",
  "key3": "3gA51tLrd7LgmkBBohYQBe2Mti7Xq1TVFfNx1bTW49HKxnAfFEv3YN5CWtYVxd3oi1r1S5R9X8oi9TRA8TktoTYg",
  "key4": "5pMLXcohHymmgrwg8WUCbzm28Z2ijbRKBnD32J7yVdzac9NX7RHmBJnmwNLMPgc1ifzsqWLi81YpNZxxsHu6kek5",
  "key5": "fByQzgncWmDQPkUNhDP88e6JaNAwG1CPYmkW26tJeHTZrTdBTz5SjBbmE1WQodcFsdeXLqHfpBJZSTbnRaTVN73",
  "key6": "3D71CnzDYeHuQCnPsHngVC47y3kqmQwmafK23HiBkuuEJRT3AHWtUPRFATXKdWiaUWiW59PfEADSGHjFY16r9F3L",
  "key7": "57AmeBbnuC8csTEFKhdjY1piTB9BVJHPAfPJcxnRpE9UadihGgqU27fibbbWLDXxz321v7T9A129jBsqz3S1V899",
  "key8": "2uib4duZcYZJDUctxhZ6Lv163zfq3jTg3YCkRK9jmhw1ybyGv8G8gFMYeof4wmpLsKR2wwVnhKbAhEJ9DNXAPZxN",
  "key9": "2PCXUaC77g1RMSGpPPAb81tbyh9NMxJwCGiYKqA7w8GC9y4W4G5ByF2oiShZvWsJ8u5CxWaPhT29K8gR2rRrRKkW",
  "key10": "mzkv6urQL6TLGUTbaMkRx7wxyyAfaC8VQ3oNL8A9jQjHXd11paJLVUVVc78js3Hemsx2kW5bw76tS18npd7aDfr",
  "key11": "5TiuKZpEM2JLjToCdV867uork8erdkuKngvw12t6iQpsSy3imzyb9Mrho43odc8g7zVTwSJn2iHpdmcsFn5pxGAh",
  "key12": "rA9rg5ATD7guZTUPwxizZU56ZxSNriMQAZFyqqWR2v9PCZ89cAfNLqCRH95pVZfbfGELRJK53p8zK8UVgbwbBC5",
  "key13": "24pLwfaDmcKaCyVhbg5P1TCKD23YNJSYu5QFVXUAaThG8jZv2umUjiTrmTfi8LhcH957nMk4jyvsYsndZvoUH3bT",
  "key14": "49GJ2kAZ1XQGYq3LqEz92mEwghmhQrFaeaVd2MDUXxUvviSKTb7PZqo1pHyHUFWa2AL7XkE2WyorfLezXHDFZVUV",
  "key15": "3tHzFcWKGi3bSWTda6zzXzAaNdMQUjX5m5jAe4oAMScUcJmz2BWK5vAzfwDXqPyC4u1qfrk6c8DK1MfnqoUP4w8Y",
  "key16": "5sWDtFZ1P3x77zijcpHNZeX1Ut6YuTUPmsosc16ZHqfYNzySx75nycCZz6HQRUAf5NV9Cf3BWF5PAjrYqYw63PkZ",
  "key17": "3hhuLCVTd7qnKbiRHnXqirytQ5ZDrj5jpXybH41f3eKnLj8AAvst47giQjWRPhbQGhRHciBHgjZa34kAoHCDtcus",
  "key18": "4k9P4vs8ZRKfAip5MJbZTQUvehXoiCWeortbE886vnnszdZRRSmuZs5LQrBi9YGaYNXZUd3hSCKYTc949JvxTN2R",
  "key19": "5e1gFkJeBocNVkj8tyczZfSSjYZWcyopLAZH3j43QWtvR4rx5kCZyMn6YNp8pbMEmLoacbz2nMV7gWFU1mBorP35",
  "key20": "3y6xP9gJT7VHGNzuE6T3qoHbBbDZfQCrdTB4CErWxCkMwV64GHdKmSFjG5kAUXk1zxURMgm63Rzg1Qi6nwrN1t1D",
  "key21": "4vcqq7mm3ssCwGAmVSVwnmu9AViq8bgxejT3cy7kyrbHEBQB3gR35fHDNgUduiTxKyke77wbU6ogdQhcwYBhXUSk",
  "key22": "51GmTFDFd4e6ke571C6eoD13m5eMKQ7xMWjFZsBU78Ev3QMrfWHpqPnhEQ5qtopdJoik7X7V5CvUKQhTJHCVZha5",
  "key23": "2qu4aKdR2Z9mHKERCJQVMY3LyAnBS1wTq92NtbH8G2XxNx5uFEfBtCikmZiHM76B5sB6WTrUSfQJz2119o25wjby",
  "key24": "Yp923UNxZp2DLGUrLZF6VE47fyLgtbwS68WAoHgxE5zJ2PmcvJdNFPC2hJd1UK4cPHhVEPc4GF4vzkLEjna2hp6",
  "key25": "23g45cyTbknbVrfKTq8azYcJpT4mzwSfmDJeSSUW8vaccn5jNMTguEeveks1eRyhTWTJ7mhCY9kCsxDRc8vBMZo4",
  "key26": "5YhHoPiwvKCjKvKYdd4wGUcvfjjJjeC8Zp3XovoedESbSvYnVNTQZr3z2kTepWJAEtD6DZBX34Q3Y76QbfTpdLis",
  "key27": "RcmrzveMswM4vojustUBNFeaWJces3PbADJ37WK1uewaxJeRH2D5GDzLAcrdVYfoUj1zMgyfyHgUdxNPYbVxKEM",
  "key28": "5taU5qqxDQRA9Biuhiyq3uLxz2i9cbpZnsqm2FPPJok18WgqZZ4yyQdK45pPYN7EF5UPQMnQwVxQQrBPJckRXqKC",
  "key29": "2xnaPWTCZwRP1MPD9TxyDCT5nCz3UY6pyzWBhX47v4PtG8QvExcZaMxRDfzFQ368STq1LELrmLLu7454gXJnFCDV",
  "key30": "41ygYRVATp3VcNZ1BEabPWcVGir4QZaSz1f8c9MYZ3sxwxoZcm4aqZjswQ8NwypZRSiyikqsKq4wXmxeJHSxbk3U",
  "key31": "2AvVD3afbbajabgWytxXCdn22UtmZe5XNu3zpFGmyjmdmB8G14z3BKZwEKN4CrwxSbSPehBaaALWkJgw5huJkV4e",
  "key32": "2PFyGLjUvcUAZhhjbu7wjmQdY37Tj18ydQNn7LnHr87XLB3g6SJs8SAnYUbVixXZS6xbshHy5r5RSHqBQZEEjkn8",
  "key33": "5Yq6jQuBnopHjAq6579qoEpBr6CNUvQanqzqaJ3QwqoPYG4Wh6NRk6P3cdC1SYC2FM7voCeUhFaY1fpqbvojBi4x",
  "key34": "4Lknge2xbK7gQmdUz7PaJQ6iGKnZPfVNY8a92zFGMoP2uq9CBVULzd62VVz4HpGHxVtABrokgPobNA8k8VcpnKUH",
  "key35": "jAoYZuu3n8KXAf4Seovk9o1nhLutALinj6tB1ct1bAti3U75Dj32Jbq9TGQuMYEixxdWdv4jr8CWPGeEatuTk5G",
  "key36": "2cXnM8ZB8DMweoS4CjJu6foX1mnaAbohaze4hKpYkaTKr8bcnSg3hgXAp3ymZj8Sn4vAkcoV6L2G8zdcan5bWXuJ",
  "key37": "acUFm3JhGKfeyAkgqiHgeeiVZT3gKwYg7xuCJk6E74mhpfm6CspZTgkBZXU6h83vd4Co2DWu35BjDYnPwSrZx1g",
  "key38": "3VSwsNBidbew5xTx3q1GWUd31HYjxigM7Rp6eFxMyGHeAMviw36oJnXeir2Bzff2DRsaZNYg5aSRmsp1anzToiLA",
  "key39": "5CFuaoo3Uo2J3J3bbaDeuD9dVa5sk5qXeEYrEjxVAJgds9m1nex8WJQBhx4fyLnRyFTqABXjLZeMLbDtASyJEuoe",
  "key40": "2hNAD9YYhydtgNdwAxcXQqau7fi5PhP65JeHWNJuuJJG1QRayNS6Q22X8kT7zmbDRDtUQ5mbvawahbvX34xTvYe2",
  "key41": "2J85zxorK9zEJxVvY2dViyvEoqNTqgoACX8Xq155fP2nZjgLDc1CmYRLKjgBmMR2SQeYxLjjcV2REWcU8i3oaybH",
  "key42": "323ttdjqNscaAgqVM3emPQ4fiPiZJtN3q29GY3hMyamdTabFUDHSH9tuPf1UnWHQfuPrF4PLofvqMWDvJVEfa1qd",
  "key43": "2gLUNacr5NTpkn7fa9PC57nUUXkCJMSKEGry7ihWm7wxKisrXcfGsoWQmYtcyzUu34YDKjmfhrxeyyFLsk169a6Y",
  "key44": "3sinEqwAzRYBUhzru2X8RV15EcWuXRveYt6i6rT6EVxMgem6Y3dD65qS3PXhN7hDKRf3HHdsJYWeFnT6ei6b3WZN",
  "key45": "4VvWkTwMHf8UStovaA5Yg368cS1qyLH9UygAUaG44JKbY3xPYgdmiSPPGcezAXuYvArdqVZEypstZJXmJBPD5MWo",
  "key46": "2CRdxya8FTBhUanXHWiBUE1kub1NwF5m8V2ouqDp7RpS2gQzsZZnwkC1PMt2DqWBn8wq3VKHsCcki1gNRUQp99Ug",
  "key47": "EZbRtNjVsHgSw4zxqWhCUiXfqw8bBiMKsPt45jjnDGTN4cw4kxot9avDQn6nFcR84KjhXpnoCKeJCWEVxbQqEGD"
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
