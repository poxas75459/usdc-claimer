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
    "jaR4d8pnD5gvyAkoHGen8JP4XKTnWosgyagosKvpc7tJGNxq7C3okcu1Mjzmz7mWWWoYx4HohmimHnjkKPJch6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LMHRSdRVEsr3W4C1JLeVyTGJpX1c2t8CtPmupWEJ8qhX2uWJLnNsktXGfsvpjeQkrimmiMPtUe1gbbWw3wrVry2",
  "key1": "3NbgMCBJEPtf19fcVs1RGzcT85rv3N8uPM7U4ogY3qA2iPMj7kgjrEWLfNQvzHVYruSSHByGR4V53ng3DQXuprhB",
  "key2": "4iwdhCUfmmonoZYEwbA3vR2AfHK8LoF5cqw5X5KkD7Xs6E9r8yMNKqDEHwX8QYSgwGZsJ45KziMUXsqjq1nzK3HA",
  "key3": "2FWgxSxsSy7HarT6dnf3kgjHFtQ47bvbZhNBPwGrEELr7THhoepHUgBSmTczZCaJ2GYtkebK23wbCYPVaVEAidLP",
  "key4": "36BpiQahQwiS4M7zRwuyXNmFU6oiaD149phMPGEQKjUS1KN71c128RZcnjxUaxBFqtSGvTU6Jnuc8ZYNmLsiyEaG",
  "key5": "4hzMTXVh95osQJtbDccUJ16uLUEypAHd58BJgzHcKsFQF3xi1D28366mj4uaEkDUtDVvX5KJa6f4huhur3Lh9CbQ",
  "key6": "L9T6YaRobVuZ7pF8sjrfYzCdZxC8HtzasdFWMtn2NoARcccAKz98Cj3wr15XUPVjrWZZumkm9F3g42BnJH8f643",
  "key7": "2ifGyoenrtuNb6Q3QsX8va6qzMtWvsxpaxJyDhW2vDG83ooP5R38kB3DcwGyMkGkZRRYSkrDjRNAwwfzgWxhCNXc",
  "key8": "2mvgbFynPVSV9yFCHDMe1AcjxkE9pgR9tto1B4gT3CFc2QdYybTmVydFQVzrMzJDYkJyneg5ifCMNSdWPUBp4ihg",
  "key9": "3ZpxA3yorT5rHLbdMjhNH4iqbPbH4fdUgL8S5EUmS79xiW1RJLSW39fzPvvP7kVrvJpGSWKovAQDWpp7GDGGejJE",
  "key10": "4gkBaxaHLWKetSDW9rYn4e4nnYCJuPTcDWm5PaFdDBLeoHy9q7NjhWJdC6HXtKAH7fPgU51TF1BBg78bFDqvq6L7",
  "key11": "2QE96TUk4JfqtyPisZc4pU9qNupgzoStf4YxUr2NQS8usEwqKn2YPHaA4v4fuPcQv9bUdpSeth1FdTXxQJEZFqYH",
  "key12": "5TVX6B68Hr15Tg9QkyXunYv76MEbNvYBkA6RffvTrw59GLC6ib3VAK1tQ9RzAkaLfgD2mfzhyLU56DBSaeciKeJx",
  "key13": "3TGngqaTnggdXhKpeUaPfhGXpCrse6qpjjJYfcVwSS1zGVkC78VXvpa6SPWdhdFuoTj5kArutr9gjA5ozNk7bR1",
  "key14": "grbNUPJ9Tm7dPpbozBrww3e7KzpDLWHD2DiaQ5ymxohHusrf5A2tMHt3Br8QnYPzMSGZq4tyNRjtPk2sGuBCT2X",
  "key15": "2vv23jDb1nF3RQaLxeinvhCFVxVQXwhroA1FpWujH8YJiqDQ1rvup3fYMvSU1e4R5y8Rr9sz1jp6hLEhXMQGCBzQ",
  "key16": "4QRD4G9ET6MWueSmgYv9ahTGSL8GJHNRYrhr37TgbPjKEYnnQrZth6rqYZ5XrywvHpMvbm9eYaVBrAHyaH4bQ3sh",
  "key17": "fKJdkvvhtDAaHLyJ9TAeSUJ1npZD2PhxtuRTVg7F8KkcbKkzcQvqGeg2ewY9Ao3NUV7fgoKZmGzMTTfLH7Wfvjk",
  "key18": "4YhWpJT5svogQAEiHyqrDtNhw5nY7oedqQrNMAL5V1cucGm1V7oLCd4TpwiKCP5sDrSBRWW14XLHT1YWWcMcVZir",
  "key19": "zkbEizZTQXC85bB3LEWThabm1HqMdsJmByoZ22Q4S7QRCbwkQhn6BS8AZQK8Von9TkZ4FegrBQe2xSQT6MXp3wT",
  "key20": "21beJEr8tkQdQXdkjd36TZojaEDBkEb6mKx1XTycVtW8q9kjFNXbNANdPeVpmgtD6Qk8sEbeazjsqs56A9DKUyep",
  "key21": "3orFmPP9wDXRj9uzCWc1vvM4L2R4mgi7DrWeP8L6dBmzmuWhXx77Cc8ZFwdY4hkt1t7cnroExP7VVvQTaNg3iFRv",
  "key22": "3dmsFD1D7pbKD8V8zjVgQEMnsZG2NSb9Ah7xZHx3nNpiUB44cjRW6GiWRYq2e2iv3GUGQFQasSmFKvKqQGZQxjB1",
  "key23": "22KDCzjyeNJ1ApzbYkjazF75tbm3uXyNo2CeeATXvqa6H43htqB6nseAFA2PWEuBG1NAysp8mgunT1spsBd926kr",
  "key24": "5TdGaMeNFGrZrJWpvmgELyY5fSPcG69X83Dib3YGxiqDxMnxqJqCdzDqJX71jfMKWCitfUQNcbVNVrA5FsmbgZNz",
  "key25": "2LPPeqnFUqvMxMRVoNYrQkvh5NJvn9FS5LGPjuXk6kyswG7gAC3ZdMw8WAePGqRFfacjoUzKbotxWmCNVe7y4hrv",
  "key26": "2VTrkiVM5qj3k4ZJGzJXBLgrJmNsrMiRWUhJtv64j84q8ChQngkir3CvrFMCWsmjyk3ucVAFAjxnXQ6NJ4EJBeQC",
  "key27": "2myLSbKuMDdqk9SVShz7SYBihrYeyPmaYPHPNeC8pPTU2K1rqjKHqaieHEMdyRxMLSETa2aFQ65QfZhWgbh73Rx9",
  "key28": "4Z4HFpkr27nXP59SrwynzDWnnHnJQFR7M8w7Lo3353L9E5xoU7b3m31r9fGbBNqqWQE2wGo1TSoq6bupWbAndvc8",
  "key29": "4putKKGN1NaAbesFZDLmf3rkArR1Gu62SFm3oynzokGJXjsvkm1C8qeMFpukiTMv7F8tkNZ1HsTnAobg9PJMaxUe",
  "key30": "3DPPJbyM51tCXSQvvvBs6rimfQQPmFEHgqgLnjJmh9MF89jbvRENDdCzhCBjtzkzxcGFWPg4Qq7nk4Zp3y4HFFW5",
  "key31": "5cbjckJTVebiKz39mBnWiM6PGkjyYab6iBADwNSJNaJBYjCzmbEqFX7qAndAgdq7hhXU9UhxZEX2AVP9Vy9cwwDb",
  "key32": "3JmfYogs7JfDetyVhjs9PwGPPP7pL4nUjQ55EbgDTk3iGrfweMwrPH9bdzHX2isYQpKDMheCe1nXPpSG5y9rb7AC",
  "key33": "4TnNJ9YxoiTXbLQ9ZQfGxZknXJeWdW7bDde75QCtQwYDms9iQeHGDScQ1sQ2D3HN3idCAhjJPPHor2ZwWv5Vnxp7",
  "key34": "4pfo6NGvpgKZ41AmQKSc3Bhe48Bmz2jDuuhQd7kN8itEasW9X1t4qiJ8QmnLYU6AtMvGuoqsC88XofbEnzJkRsrR",
  "key35": "3RstUdrKJMVLH8qxdFZnvTxne1EThM1cYsPmMxGjkx11H4c3G48i7uGn2T9z2kfRLp6u7ePJGc7xfT6biDwqnK74"
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
