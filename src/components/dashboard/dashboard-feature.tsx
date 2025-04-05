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
    "31A4DwwXnVVR3oyk2BZDC32pvTR8o7tRwJVts2CnoJ4YodnqULxMtyQpziUBUAs3DScaddVyj6Rk8vnGi5eVcWbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UvJatt2SCwbZdRASAJ1zAe7eyGubBkoGLkX8FhK2CceqWEMgEnpMAAnQkWn8dccCfCFCVb7hCKBiBbumjPr2X5H",
  "key1": "3u8ye6FmUvSw1AorsNLASSPpm2AdGCYuq2JpAD3YA7efKdUTNabGGnxszL2nkfz3raqMj6BYcTMfTh1KYT3tBhZc",
  "key2": "oGUGnDTWNscMhDfoxHR56tmDYQ5q4inK8UMXhtNLC8UCkxJASTFJREnmCWLFQqWLmmDqtGwmLBaqQr5a77CB75V",
  "key3": "2gYhaRz4ZBMEz4iA84setxuWa33DSvxd3ocaZiDvA8pAi7i7s8AuW1YWBUZ63VDtaaMWzdtZjzeVb28DZhWBH9yo",
  "key4": "4GnEsdJXTv4ySVsmdgrnUsu52geoKGemhU3ymqsYr4qvfuvt3F2y2auUL8jvj4gNhCxaBmvUGGyGxeA9ZpJHHKmD",
  "key5": "3o1L7YN3tGzNheHz4jVKNzx2x8PrVSwb8jDgDpkdrhJoA7zfeJbfdcugUtGdf9f28AV2qGzXrudYfFQ8y2jt5qg5",
  "key6": "2ZBL14mf1nynUWivDVD9SE2RAUVQ5ycGc4KiSoUXTbHr8Py3xgp6E3YzNFpCaD7q2pHcPytfvmZZC8P4TiHNSjqT",
  "key7": "5pooZbD6AKB7vYvekgmQUoYdc1dJt129SJHK6yDCP27vVH1QW43ZTG5QrQTiVPB7EryKL1kYrAnAj2XpFyNMKN99",
  "key8": "bqs9Wp1iw8F9g1bXJpFKspsZZoEhqfSWP7KUWh7uZNnsZnYn5TiYqgbK9qQyYapw14newq55AiKZFZjWQeNricP",
  "key9": "4WKnxBHj5VneLgVJSK71gMQUDEjWMyTyB9wQ4t9CZKxkEHjuQ3bptm997nt954BhmV9G5dUvrb4tHjGedUdAwuig",
  "key10": "3KxFGDj4SJoChTEGZ9p2fW5gLKk8nZZmjibMtVZWHjAzJHPTkUHDKyYuWZnQANfh4xkWVQ56jNBdeUVLTKdVmPo8",
  "key11": "2cwbCA6am6EorCse6YH1sxGm4ykhJS5z6HeMdDFX7MUUjsnmkfqu5cfqe6UFmc5gx1UdVq3ktus3axeNXPYH4Hax",
  "key12": "5P2iCyYtdaQ7nVmTYTB4hcLvFu8GzyLNcpSDCJJAy7iV5mBVrxKKFuLkykJa7ndJnvTQyefodwHFxr4wbUT8hfeJ",
  "key13": "5VZvJMnsT8HK8YL6vCjqHNKjJCP6ufRdExmN3sXi6NrXsqh8rxycnWTBv5mpEL487dvndRdWcHoeZ4tN8mDZF6jE",
  "key14": "YPQ7D5H8RoP4k4ZkhzW1bVrXejRpTKNmbx4hjZQdhCqFzW9iqBzCR6S6fvNJoTxX2FZPtUZshXDcDYWiBpswu29",
  "key15": "4eR2SAcngY428Cu24KmXjqLsgPHrvbj4e4H7pffEduwAhJnvP6R2gRmKdFWXD1kqiA526u2dusJoNTph1qh9xkHp",
  "key16": "5rrSaRBhZ2EFGCSz2xgX7qr1tMBPQsHk1TRZJSM92duXehShvPncgxn6y6rxjikxcftSkiPMxAwHG88q1y89Nhxh",
  "key17": "2RzB3wDnv8q7LPKD3oCDGVmL9mo5WYe5GAsnsdvJu9CiiN1QQfmxEMUMeJPVNCJua76aLEdKGh6vMLx9o1NeUV6x",
  "key18": "2CqQPjDo4snv7MAwTgKiQKre43SS3UaLVgBMUMake9Xhi4M8TCz5oi9sGaNmxLycFJckYBgnTi81CTwN9go23db",
  "key19": "4D1w3AS6GEGU4nRBD9LLHHS6ZwQDpC5qXawfpPpmW7DoxbRxgX9QWgk7TqkQYdh5RoVVnw1f3Q7srM2oZ5tFtZAK",
  "key20": "8RGZe8i66KKzR9kPun8rrgKKW2eFmwkFnLmr1pgjZEtySt2SHEtiAFmP53es7p9WeESbqSBN4AGaw69uiWtwSsK",
  "key21": "2ZeHRJRFFUGm9KbBJSYo6Ns9LvkeEyhhMGjtKxLzZWRMvz1kGym9pJusRSxLf9ywrv4MrDj2pG5unnf2RFSDBhxC",
  "key22": "5Z5c9rkyQfadCmg5nrZZnnKkDEQcSp2ZabiVnHXw4ovWvroxm7FajaqVb6ktwsNC2riAVU9emFgqPCJrt5QhtjWA",
  "key23": "2wyeBjKGHKbiAjCU85tftX4XHNfsWRSwgBWv9hzCd7ifgYL1Coa7xT9TUAWdViQzwqdjKuXLVijpPpVM52LnUxex",
  "key24": "4LU6cykFFYBHTGrwUXHizsJGYZBUMjiNaHmvcGJUZJPAZzCGCW794WnXmYaFgTDZL8qVQdgJ1c8VqgasjudkqN6V",
  "key25": "4tMgoHyhVEKHbVJPyChnJziKoC6CMgBDn4dZ2iGBR5vfKFUwjcUU7bwxs4PirVGShDPBupv7TM6GXkR7KJbNKkUk",
  "key26": "2aQp5H6aX6F2635CYCUkbigv2NrFgApFaXegbjU2ow55WJPUgoi6sCZefo4S2pHP5iUt8r7RT2UJEvNFV98ZKr1G",
  "key27": "4MvMTBRceNvJChiBYEinbD6DAcywTDZiQZa7ry5nn4thFA8HH1zDqVVMaQcRFXXgY8wFxpC4CpGHDtdv3PspoAzB",
  "key28": "4ASReYxUcKYPTHPmFoVMMTeYsoHs2n7LD6Vin9ezTCronF4Ep48jkJG3YREnrSvR4bAN1f1xQUDyKbmc6xX63TKp",
  "key29": "3VBuicDeWjZBgaHQ1xNayge9Busaomb7zRDXzbnDsNpKmZMqs9agBLKJnnr5tEDg2M9Dnuku6hveQ1CuP4aqRnm3",
  "key30": "7zyoJJu9zyQd9KeG99FP9srfnTZTmH8KRXuoJGGJ2ozQJ3rYbj7oJ7vqVkfLyXSRex6X31h9ntfehaYT1aAHedQ",
  "key31": "35Wsf2YDmzJkDts16qoFTFyVbpjUEcm7s1dQ67qJdLe4yeUvbhNydzs67S6gHCvcXfLRWV8bVNAM2bJPohT3G1Ww",
  "key32": "4whV16LQWEURdzJRwhdGgHSukppXQasMXeGHGSfh5E3L8pFZJjTn2JpKgKCefVJ3GU7WfjEjsjFWmVDzAnxs1yqY",
  "key33": "4nUAPMeUFPXYTsxUHJdo5j9nHxUErQRFjKjfyyYEVtrqthDZo4JdduPFG5LP6zJB7RpG5dGWaK4KyGCBGoUJE9Xu",
  "key34": "3wHiq9JVRpvjp9fzFV1HNk6F6AMdXik7f9G6xzhhMpsJFUdGKP3jzvwWty3AApMjtXSarDJSwz5mKdYf51Em38go",
  "key35": "rh7mwKLkaQhwPyDwpKEVthSEQGvmjq6vYCALa4QG1zzkFu5BDZKJEkPjuj2WC6Hr2iNXL84KeX3WMap4kiLJ3jF",
  "key36": "4WSAyZqLxYfN8FWfX75CDhE1Xo2CYXZSPJP7VM6irkcK78Pf7yFTGcJgjBkXhjJT71tgR2zL6spokmRMrwVBBUDV",
  "key37": "64WHKMf8tcZ2Kgp6EBwFacLHv8tVmba5L3S7GeCi73bPPjxKzgmRZmebkVMmC1cj755XqnaF8fRziUZaE8ksiN6L",
  "key38": "62fzxP4AYMncosznmNjEdQu2NUW2XKthpeq3KcjzRTqGHoavL5Mnw1kAhHbf6ij7U7XMAb7uCso46nRmJWRm6tn5",
  "key39": "42GyAamCJtzVmaDiq6aixARxWUaLx4jRT72ZLyQZfCPUo2HhiMznSSUgUhiWp6rWnyLdYMVmwfBYYcLeZQ7bF1Dx",
  "key40": "2FUJkfr83wLYA5Y5jLdLU1sbuwP3DRC61nZwQvxX5qPRnAGqnxqE21YJbGutWWAgju4UDBZtizUQtkjDWF6ET7PW",
  "key41": "5UA7Ug3Lrk8zSenaxnKj6qJqonhU1h4SmovTctnBk7b9Hz3rEb1cVeaMih78gg4x6ibgQjJ8ZfRrmEqiJajL41UB"
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
