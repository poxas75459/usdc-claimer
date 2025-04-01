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
    "5z9tLarZ2KKfkPgVpb4KmkHaGj4igxS6CNSJRa19W6CUZxkrvrA2qjNh4e4BSmfFKdWmKnbJDt1i3BGDgiPHEaXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dUozxizy4tva4T5LQAWNEt9zK9Kvn9mNbc7ucHphmn9KAveCLzYCPLhusUniZ1ijhWjXZqtspBGrVEXwfQTajdH",
  "key1": "4Mk5KcBhir1xHtMfqcr15JhXvy4NQjFBWTSDhqfuqZb1Mx4pCjqbVmLAyFSDF6RhYS4iZUK23juqJ2ALXX184WTJ",
  "key2": "5urkP9m7mVCnNui8nPxTgQeQg5VMRZCdrnAD1AcMcGcuU5p2LjiLfp59NCaD9UPDsPo46e95B7sTC9ut9eLrUo1d",
  "key3": "5EV6RfjqTr1KhEzo6Mcds1x2T6RCy2fLHXLVeFTC7ZJBnG616BchwnNcBwizyNGtYRQYA6hk8qCyvVPMxBTsXe1R",
  "key4": "4GVQDJh1gdvi19eypVCT5s7q6vdDss5dBRycqPVeuVxMEF6TPfCZQZfHZi76cimYnfFN9D76MrvVzfJ9YJWNVA16",
  "key5": "3NFw2RyuCqg6MDuEezZFRmfaiNmDZCZYP1jFpGxJWqk1z6MxFLrGuxq6TUp9AV7bn11KTVVUotKi8qFKMSfY3zXn",
  "key6": "4KQQuZSERYP1qH9yFfNb1o1CTr5SuJdGhdx32bwGvwQU1KVzZdvErvmiVvCCc9mwkgcwMu8gz2BVqGzJxKS78n2t",
  "key7": "2nuN2uKViwVTXuWcJAXmnFfpX2M5rBE8x9x6ruuiDZg9qZZuSLJfhwXX4eM76bK84Ba91sgqvohueHSkumKfpC3Q",
  "key8": "3PsokKhEPgenoQhhFXk5CZE1bpsDt2RuJh1T46KynYm7EFZ1Cuk4V8v3jC83mTXLDgNff6x3mqkkpijQmjN1t7ud",
  "key9": "4xir9mX1Ko6jPv1WzGvGT2fDQLVGi3qc9BkeRdPeDCTPK2yGNuXs6ABsTKYSa58njJ12aePfztsn91PnXv4jPmH9",
  "key10": "2kKnfQPZwK9QAzLnLqwLdTMQeSG2oWrgJDQhXzpHutEAtGn1uA9jpMDHxsJ9CwqraSKrS4ztucnpDym81tF5fAy3",
  "key11": "4DevreYV2A3qAoqs2MQ1zQpq6f1vp6vNrioHXQZm8ftSESHtR1vVrtZxgdbxd7N6uNi1LZgcDZ9VFxgJ7wYU848B",
  "key12": "55d19bHdv4vWbDKJ3YahZCRT6jkK7gL39fuX8dKCzAbs3QUmGyZKjeRmoENTD3YNVKQnYfJW1bZjYfHv2eHFt3LF",
  "key13": "4nWV3jomLJkTesGcgLkWYCTnXp6oULJMQWH8uHtSRLugCmSoM5CVhadMYY17CNpH64Q47xhcFnNUNzWguRDPvTnV",
  "key14": "4ToSXFVUjBYQYJeyiSNFTRkbokBCZFBENFGKrzxqnFHZ7aUnsoBaSwd9TAz4Y7P1gGx6NTy4XArLWkxX5AcyDQue",
  "key15": "qxJTGjv4ycmQcTJoWuQbG2UsoQcTwCwU3AnggkzfoPKvaY7pGwxJyvtHoUJoZg95sEbswnkSfiAybNMCL1gvfg7",
  "key16": "5DEN5xxAskTAoGaKV5WfTKZhTMeEyKxJZyn8DPjGsu5b2BiwpqnQUT9uckQAgqsjhdWqtGZc4bsXEW1fYqFyznTc",
  "key17": "3CT7q3MiJUpY8nTocqjT1aF8raY5fdHotkTvWg9Cne75kAHtcwcucGGy4x6oH7iPt6891LUZ2SVj1B5x3okgf3GG",
  "key18": "4ZGjJSeudLPvKJCd6pQXT9LrVxQhHkHvp7gmAprTYcoVLgZpdTSV7EyEpuqeypguQaSyJDjs1zMd2mHznENZA1Yb",
  "key19": "5thzm2UNZRCLB2Fx1HEP3QVbK4rm59pCRd7D2dcfGTo5kf3ZVB5vAkDfnkMvjq77dtuqMGoVGMcNCuwTs4VZ2DUD",
  "key20": "5peHoobNE998PtsB3sk78oJBxByLPPTiiCLxbrgDUrfxhm5d9RZBJa3T21TKSZH93GH9yZhSY7MNGMgVTs3wfA6h",
  "key21": "57XQRCpN2CofNdVnHkcMARJS7ApiqbNXaiFtFQveaqyeeeavqwGSx2NvqqkpN5wy5iVWgZTSB676SpXt66CN1vSF",
  "key22": "4Q5R5aFxVVqeAP4kaETfVLqyUdqnrP8fCzG29KgH8yKu2pTX9KWF452HbUHhPH2Kp7t7Z5K5c7wASdJ3HZZUCkMV",
  "key23": "4yB8ZGrQyGdepEHgUFCWoGajUfhdErq8TF6SJL7ecDNGfvq6kWrMANyuVi7eyLkNM6fBy5kRtYCw2uWvr89pHKCi",
  "key24": "5L8dXbdoHUXQkLnbV3FRasaVoQGKqvbJh11HMzXXih3q1XWYa3uv4ERAfW6i7gXXPeiPY6mCmX5RiojZkQK5mJrK",
  "key25": "4ENpoCWFbKyp7tsYav8eVuhHByfpmsQXTgPuT46eky5TQmzwg3kNfzpbQ7ZaavNtaEM8CEqss8qdGJL5Hs2Vg9s1",
  "key26": "2sB9QXh9ah1Q2psj2RJQmPTuobymx9Xbm7xW2maZqhrzaTdBMXEZijzGyKdiTbAdfV7ZESfpLKjiVimD8RZ9s354",
  "key27": "2AnWTbJphiw4KYNJhrR5yXCWqXDVyApPNeSNdhYx4ZKGtDHUQe8Edsybqrog2sKpXGLDZgNZN1nvmkSWqpKFNyBy",
  "key28": "45M72j5diS4Jy92MMJtbwMTsmkftFgGwLxzbxbyuQLHJRAg8YLBVbyAGkwquSWA6edtMMx8urfphYFs3iwj42N8y",
  "key29": "5Emzn4mbdJgjw6SQM1ekzfZLmAmHkDSMMX1BTjMRk6c1LsPokPGyAaZEZN7nrVtrpUAUccEm72ZS89x1dymMkPpm",
  "key30": "8dU73D7BjWq9RadLmoshy9gATkY8UkY7oJgqLcqiZ7ZvaRypLwPp2mTrgroW7yHbFhL1GWXrYm83oExhNLhA922",
  "key31": "4QMpcBVu65R2Xh6TSQASaQVd5xEJYNKMGLk4EJy3Sq7TPoHSBj2Js6VH3yJPkY1jv3RxMxfGv3juMX7bj8sfZ9r6",
  "key32": "oNDAFQrT98LcNKinUCQYPkCPQMf61u3DN85K36LszXai7mXSNqKvrwS7nXyJsG1bjoZYQK67ugKAoTF2r8ka4pE",
  "key33": "pEAu3v93WwH9bRwicBpyWr15DK1J6usaMva3L8mjdbDbvrSxvazmWusHe6q8c1iCwWgMy1oj8EZsuA1Nsn3fDFd",
  "key34": "2nLuDefLJhKvi63kE1piEPGGdW4g19Dcr1fGxWRfRcgRDX3zfFnvxfoSXToJXfABe3i7At4ZbxepmSWAfqbSZS1J",
  "key35": "3HzQh7wMjzUE1YNxTGFwBkKH4ycgkGrUBgJXJQjhY8mKJWgog6YgGW36qwhencCv2Uq3XEc5ijSS5i2t2Fhqgy8Y",
  "key36": "5jWL1daHKsbzJpb3HH2uVxgYQ9j9msGN24yCqkmB6j5VzMFTKPDZ4ZGo2GWN7ZfTLMsGsd8tniXBwExNe9vyPJfg",
  "key37": "2dgQrHaYS9k2BuHMQoDmapxQjsVshiqyWVKeUh7C7FKwySQYCYsQK5PMqD1WRrsZYNYT4BKgxx8z3S9qyZyVCX5U",
  "key38": "5jeo3hwkxokzJXqb3UFdv3A6vBEaA8mzD2ZjrwEB6v2CpQjP3hm8UW9CEqW9U1165wrEUKSdxGjutDb7e2GhaN1J",
  "key39": "2fy1AZX9hTSNL7Tsom4Mrry3hmGXnCHbh1A8DEFeQqeiREosDpEDoZRd5MpNn3eecdW3W845ktiGaNpuUANkcLYa",
  "key40": "44SohLFRgazywFaXPyq8ERF27oT1kkRfBPK9rsATg2pXjkFeBkApg8EahpMDSy7WnQHmGCHoQ7zUGwuLc8Z2Safc",
  "key41": "21r2YV5rnZZZ7J4KqiZVUZQg9GH2pnZXdKnKPsqMrwwTiTm4ftq3sDoRr8v1x42PYREmwNgLPXQih8UkNDBXcUpn",
  "key42": "2R19GmFZ95NHrUvaYm2sKuJcGu7t3FehtcqhVC22xJwMk4t2i8HULJNiLVmXSpZv6aenAhoWPPdbQNE6seR7dFbC",
  "key43": "2ep7tWgrCyhn5pTjg1s3NawrpHJ5BEnVgT5gKNyYNjpuVNpCUwTmckTa6rWZ1TpeMgp9MRDFaJtdHuyworihwHoX"
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
