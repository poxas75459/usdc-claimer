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
    "gvsdLAByk3BvRgYmwcD5yX5osipfWna8oYnJekro9bJzcpESt7JURTMb1ruY2hFQrRehcGPonu2snKL3V1GqAhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VrdwyMnbL4KXsufyzFGcc3BCEP66GWRkYXQFWwi3yTt9w8L5qK3B1NYZk9ztGp78tDYgqsc9yzzTgkG6AnMYw4Y",
  "key1": "51ZAHbEAPzMyc3kAAGFJggtjnvtEjNYVReDRpb7hckhz8XVhscjRcchQU4BWZGaz81prch1GKhBAyD8k18pCGFeU",
  "key2": "3yyPC1FJJShWFweDhpM3h4HQydq2apyKhtzBNBnbyxGaviLbZYw4zvhfPJWoGmTE1xabjebfwk5BXcvvEaUYYCK",
  "key3": "AKksx9rUveWv9vCXNLoVKrkrL7vysex2Kk6FhhUcQSJSueWSUUooxbprnp18AuEt5RtCwn7A5FeFncXMQes3E3a",
  "key4": "5mjof5xzr9xJWwMkjgQcY8mzj2uWEiLHZaBz1JMki4TangwMgwT5W6MDFnkxYjd3pZfKC1QVcPUTYeLWbtMgESFG",
  "key5": "5WwdxyVC9swisc3FUS97NbnEj7AtfKXWCZBNtyXh6Uy24xSyoGhwFtn37Gcp7enuA12v7gt9NhtGMeHgS4CRJQZz",
  "key6": "5btuMjHARwTR6h98YQpQum66DS1L4Mnky1ASPgGR6ijAuKPvhuL6dJFJBcZTyMMs3u3jkG4qrDMvxU8ApBPVmpUq",
  "key7": "2ZFshykASMnNhcDqruo1bRUVEbBN2QknWckeAGKkjEU6DCbii9jpc9hb3K2Pg8jVPCnigzGuZD1eVUXG3Vmmfxug",
  "key8": "2a6VrdJTxa6ypcAq6r8gva84mTC5MJV6GwxydY3xQwvbm9aQRGtEknnyu28CRgAoPCmmakc5xhAcc9w7kuJncAZP",
  "key9": "43qeVjZJ47VaTyKXxon9RYxzz7uUrwr6VcuWJufA8HYoQgBccJoZo2UnBpckzWbap14cYUNihvsJvpQ8HSoC5vuP",
  "key10": "2Kb7JwNWmfpL7m65A2xXG23JyjtNdUWusAdAHvc98SxaUc5SvAG3xwSNPrHy2HZTZAKrd4TupZk2F8arN5hCQWf3",
  "key11": "24nQEqpwKe2oHRrQTqsXWqdaxdRkuhtGC6TNVWdkW6zRFEhxfu9PRcra7EgUpSzYkwpE8QXwPDuPhmAz15PxxyBq",
  "key12": "5bXipB6HDPUWJwtJDcBwkrZ7w6Bo7e1AgACqBMPcrhzjk3rPLXqPafmozPoTJoijufY53SeL7VjUFkgVJgTcoQeR",
  "key13": "3jbioianjfHu8k7WfCU44AZG2b59tPj1XvYYammGGFXDucxLr7UyZt6haq22ohvGcW1p83LUE4x324rkuX7uqRfR",
  "key14": "5VosPwPyVBZ7YaGWVBqZKvFHd57xNc7LuFVoizYwr7158SU1BE2SJTYsmxModFDeWwe7FzrCzngQuk94C3YRvs6W",
  "key15": "4PWq8Ekp4idWLpMkHQZ7fi52YeyvMH1zGLAEB1gpW45WncuUXXV61ENHGEn2t2Wg25MdRaqnXmZPAQqbTXopzpiZ",
  "key16": "5yXQxaaFNV55Nu8qPzzAkr7HgpcwdmYv8qkhYMQCisBQq8LBzsmzXfHQBQr4P8EEXVZFqWvhTFam91kchHKPQu8Z",
  "key17": "4vPa6guYgmnDsQiispmE4GpQi4gFLdpy1pELYpoJE3m9Wsjqbn7VpRwWpdwpZgyZLbGLyuhtggMwvGVqCt39J5cN",
  "key18": "4SHz5QtPpyJorQuR2Z1WMCYXeTmnH2GrbKe45Rd539QqG9oWHjPH2NYNBBmwa7PPGHdfZWGttx2wXSQRn3e71qJK",
  "key19": "3pHoQW9mHxsoWhqm8crgi5GFDwhcJodkN6oGuryMUJxjFYw9512dWYboDS14LiU9HsJXHH7TuZte5sVunzZL1FqY",
  "key20": "2xgh8fXkofdwLW9mEiGyVdMufhbx63vzNYnyPzzaHjYB2mFSbfGQmDCuTtQeLMdTkneqXgP2sY7xEEetYqS3sNP5",
  "key21": "5nSGEPLq6DSTZ4kD5e1pq4tGMo9ETUjPcLF8Ha429D5mY5LytCxzx9ShRNLFae9ctBt1tF8fg6VpnhadMBJU8u5w",
  "key22": "ngoGLdzvZ26ZtKnKxzKAXL6VnvLqFXmBzDhYrphBWHKruhDt9gxibqPnnn5m1XxZ94SZ3s9RUZSG8tvHXzUAD8H",
  "key23": "3DUMcJFBGNKvQPcYvzkRSUhQcePwTTukFBTaZPXeEXby2kXyuRoezqhe8bcSjN91ZtQqGwXXjbaxYVngeXhnRr1U",
  "key24": "LyG8STWVcWqP86kGhf9fUprbWEH5HMqyZvRJTtYzvS83V8ZjLzCK3Eh7HZpa6bPvafnj9in7MD4QHEdziuqhCZo",
  "key25": "FR2BRWmjuMZDugWnyc5hPjq8mEZwJLxozjkf9EKnbfDUKPpWYsiFL1oQRoVPQ4DJqH5NznTK1ZD5NmisFJJQ8WC",
  "key26": "4nQCsJ4f4w7ktLTR768m3fVbUqSr3yUFYoaGidrozvDsKb6Up5YogLwRWvWzJBA5VQ9KrYtKqaX1u1srChp7kh65",
  "key27": "5YQnC6LQs5VgCY77ptUYBkhwScv5QHYocwXx8yYNamGtEG8zLBVznczd1hqgGdNa86DdPA2pn48mFNWEigmyHGsw",
  "key28": "2g3PSGd6CvYBg2LvSMkYX2o7yR2iYEz52uguRxAjDf34H8LjpP3FcxJuyp6TgBCq8C9XbQmY49Ktm7ELb6b5WY6u",
  "key29": "4MEFbLZD6TzxUx1VYTX9tDM3kKZKAbWU9FhJds1B4XA5aqaD2Fu5LoyaTnBP2ddNL5SsxoN7DgofyEuLZ8DMadMr",
  "key30": "26ux3oeXMmkLHQ8ANvrfcZ5XCYG2fvtAvuzzSz4i5AYZcdriBnyeRoN7Kn3F84H5yis3oq7hFDXJC39MhGdfaW7t",
  "key31": "N3bQk5UTtRY6rmguTjMnZWS9A7GEpdmHG1Q97gAHw8j6N4z2MjoSVpfCk38qJMFPcXU5YTLEeJhAuem2Ci4GRYo",
  "key32": "4pC6ukvycuQSbKd4aHDpb45sfC4vv8TFgWxN84GbHwLCN3gQAD19GsheL8phHwFKghUKiBXNRvUcNm2vewtdXzY4",
  "key33": "5EdJeHb3J3VHTNek45cNs5XPGRTGKz8JWCmiaLGzLBdkieJ674adWPg3gA3s8rMV46uWG21wELR44aqzkp6mQCp5",
  "key34": "4MfqBJ9oJxmQe84btFXz54v2ja6aVAvL6ZfdCs9fvkPZmJThDrM1DtL2ZUfnQiWReiXsG9DnsQhnsw5EHRDCF3W8",
  "key35": "2yB72oFMuf2thuczrs73Qn1FJXFydgNXv8k1vZaoJy2VAsVF5iCqpkmsQMg56PmMEM2gE4fwExPTNxMNfFook4AR",
  "key36": "45ddGvyzrXHNvZuy6vfmSoU5EqYRkiJ7Ban89fz6nfEnGNfkPukCo3FvHcAVsD1t3vv45QAyZvYGeZrzMppz4KBg",
  "key37": "3RGBQWmgVqPojqNtAxQy3ev6ova5YS8Sbu6pvAw61vdpirpyQQn66EL6Va8bawV3jbaf7vAn3nVTp9PfkwMFK91x",
  "key38": "2hEpf2c3X9eKuueX37wfNTMpnid6LR5fcZTmA6Gqs5ydSP4bQrAvGSNHswji3PR9mXT9WHYLjFykLQNzaF4ys835"
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
