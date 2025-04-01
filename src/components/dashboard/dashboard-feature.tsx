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
    "bFi1HEJapKW4tvtqXKE5t3MXemgaFQqjdTxdHyhJMDE2FQN391v3PJsCiBsApR7YPhv2tkpQXrXqQX5RqcFbpUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pUR7TvPKCQ7nS1nK499txpk7LfZ5ZtahPrvsSXLiKsza8eDrdMU6nDGBdN4KKAUtbzFMpaMEgoynqMomenaWmaz",
  "key1": "yv1XPGGMFaCGQE4bjMo8Az2RYguEVsbFje9np2VULNwm8tfMymhxhJ6FuEkH4LqmXTMa89W27xfffLKJ1wfZQqy",
  "key2": "38pafRwCjN9UD4YGjS7U17P3TCpAq54rojYWc7zH1b7bPVaU8xwFnakmg5eLTJjppsTa4V8iLnBbmGdNZrKEnmby",
  "key3": "4nnRdoLdTZBbh3VSU5vJFCWPYeNbKif7E2GKVMHMMZk3fvKcANbAXQktgMwZVn8VaDpXsQem9HTYjtBegYyjDj3S",
  "key4": "5PUCTP2HRy8AEdRz4UDgJNKzjcwjxPUc5ReVQnmds6MezYfjPaingvtPRzmUwVVS8VaEUG8PC7ar5zfmW4VvqwTr",
  "key5": "3pY8ykFQ7ggNFWQP2cMz9QrozHYZG39oN6pLSF27sGqwJrSzFC7oq2RY7wqsZ32RCfbYf4bx7KVogyojXEP78kcX",
  "key6": "5Veck1KmgvgpkdGEU6RRh2NioXjCkEMfauH8cHTdjLF81A6cpBgcBQKHgKC3XDw88Xbvc75tnzf3hR8rCgRQ7iQd",
  "key7": "4ALmFgkVQpoc7zXByd69GKBoDgGbGRrFx4MRdPSB58sdNBGvy8pLvcZgWBiiU38NZwJC6JCu2yv3m4QQgeVBq7t8",
  "key8": "5auXgMZY2Y15PHgmbH4inHwrRk8LG3tCK1eDqVYZFza9FKpAAV5MyqHPqVoKWSyPS4xhrwwUoRYNHnyshL8DdJ6X",
  "key9": "62tV1CCPvJpcjLR9ZJ4fU7HWrtMTt7MrAzEVzT4hiqnhsghvvqXSMnsiovpR2q2eUVeVsndQ2rGkpe8wT8Rk6jts",
  "key10": "ojsaW5CSmR5yTRkA8rFYrftcWvkVFZ2JXt7hCrQ2sRsbL8MByBkgae3aZt7eqWA8VF87V9vhrjMnoV4dKTzxjdZ",
  "key11": "2J3tbFxbniCqKb9mG7zRK2RjuesxH58vnTPbq85vvuS1ApDFxpDpAiE7VUFd1YFbGkEG9X8cxk5Z8ibt2nrnW7Tg",
  "key12": "5kk8zW3Qp28WhYV8mh4yYbZATwJMJSnTAeByC24zQv5M8H6MmnCo4Q7EkwdJfS4DeG1e8n8oa6AuwhHR4BebhiCB",
  "key13": "ngNmBmszBWnSD9CF3yhUKbgmXAV37orRxtfSAfRLH8azTfrXTmhTNRKPg2pu3v87fzd35sAhqbJhWiT72HxzSfj",
  "key14": "5TVgAcjCrniDdhPqDz7BE5YiGHPPRXgJ5kTbqgi4K78cjGe7BvoCV64ZReBrnAEWoiyPUBTN8AfgmaZaa875dgtN",
  "key15": "2CUgTgRe77kekXrz5pT7ejqCnEGEfmCZKMExUkSDDiAk7pY6q5xGi7kb9aPw6vzapyEbx7Zd43SbqHiFcmx5xANK",
  "key16": "3U96a5q7GVR2nRvNJEF88GQAApJNq4BpyBQz9tnpc3Log3jvaWPxS6YA1jDNeikmgoUZ2iySrhSfRGW9zZsUniN",
  "key17": "3uhMGAfEFx2fR6nBV1sZzyrHrX3BPEYy4UveLjHbycmncPrZnS6XWzRT8g1WeD397MDcFrYGyuZDjdzLkYskjUGq",
  "key18": "2G2HYFEwQXykbDXGGBfQ5BNGn7GAkpfQ5wsovoYEU8TrgaiZAeAowo2XEuvjiE22Hk8WUwdqGqqc9ndUKbQV196c",
  "key19": "eCoL1EdGGWTd1KpLbW5AMHo7jeuBgXRiTZ1nrMFA9EYtruE1K63ZbKa3P3zm4LJJ3t8VkvF6spunMd79WrWNSf8",
  "key20": "3wspBW7gAmheiVDrZH35crhSgpe4BXeNN9QGoU5G6RexinXSjcScn1qMaMZsZN4HZKwDxzPtnCVeeiR1cEUvQLhz",
  "key21": "3Ax3QfFTmKmHLQxcxW4L31Z4ajWuXUgV851iVS7YPrK6CJ8V4GBzBhPFg4saymscC4Hr6u3L9bQCDa71VhEjXeAp",
  "key22": "4CBHg6CdetHVYAW7VSohbiCmxPZhDhqAPBKbuqjMg8ozMS13UchoVGoTfDnW7BkmYPsb3Cgx4dHm8pY76KCoZHnn",
  "key23": "43xTiCNNeptU2xUqQR1v1N6QGa9PdBppGArphCKASo174i7pu1NnDbZPZvDFdX2VBA5DprteidxTraKL8wrmvAaj",
  "key24": "3HhoZmwnuG92jYCQC1WJ1ucjNzH2mpMqYWXSZZShFeKtv9wkRskciBSpYNwMywZVEkuTZ6fpy9wqYPoG7FSyYGVT",
  "key25": "r5ogADrVdtf8bA7fJLm4vUHjpwzQ45PZS3ayPcvX7MsNHqQNp4A1UrYeXajGG45weqQHNaWDJwekp1v3WWmXQFn",
  "key26": "3zysYm264ZLncooRb4gwxNjssVGMgyAybugQK6NsDfFcdqzpNawd2zB9Nb8AbRAdTAAAi6WBeHunvLha9AQ4siFC",
  "key27": "45abEzfu8dK3NZmjFre84DaX74E6GAMjvma3pa8yiN8DhXNy7HWsm6KQQC6W658vXp8LMnh7kTnx8YY9JB7BNxW5",
  "key28": "8afhXtv4Bm4wa2NwHTos7tKzYGEqsaLzwWUgniKh3VYwrASHriLfnf4jbRTUv7xuetCELRok5KcceK5KAQRQKn2",
  "key29": "2FfpfiqWPWbvQ6aRZ5hhrGMwyChTkgaoVw3Ay2YRXDk9N16cgpzZzvT44m8XHziZoUpucWFP9qQ9cp4XxBHpHtMW",
  "key30": "3LenaSPEaDUvEwtiutExeb2go2U8eRqNP1NaT6sNgntjcqoLoaXQYo5caNxingj35Sy1tawo23wuYRLAPrrx8sfT",
  "key31": "346tNev7yGeiQUJHDJexsaJpPv7mbDmfX4zZtKVtCYr9c15jYJ1ssPf64o7h5tjUyELd3L5g5taj5M8aBnEYmjsA"
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
