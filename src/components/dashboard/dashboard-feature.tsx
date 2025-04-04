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
    "5GTJtzJ7NeNHf54UHt7HnQfZhoV61Zu7rzbCjAm5dniENTWUjtbRXzAccYHBUTTfwXa7aRfGgmvzWrvuP77tDFhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QaKZANmuW6XKWxHaH3BmSaHbdCA6R4rYesKWaEJQssTHi46hQmz5KySSNUPi3dj9oWabcJqRxVX4YwxQgXUW1iZ",
  "key1": "3tt7boEX2UGvzFxTsuVdGZUrmB5ZEKtUrkDoR7fnogk8L2hcEJwfJhRHakdQiYg69kW8XCaNVLWdY7Gh3yKznG9a",
  "key2": "2dZvx5imPzV6NW361E1GDrKgQgKzaCYnYdMuiG9Z3RS68rMojH9GgSkhEyqXeYjYZE3wiM7xJz1BYt1p2XZsMswy",
  "key3": "BvRZv2ABRCci6UeGPr1SoBmY2CV2q4H7SNA3HTpawHRHncoWXHGGsPdPK7vmad6xjeNA9RFRaZGRDs4oVsQEX3U",
  "key4": "4NGKrhHb1nDaMfVugAQ8kgPyC8LYUQVNqt6NUc23MHyWXsAaHeD9wCYG6uiefQKrNr6BAmAExnMHXpt9kAWrxa5A",
  "key5": "Nmh2VAidTaMQJky9HEAWJFUR9zV69CshHRmSfrfFB2Z76mMWcmkKyKgDRYjjJsh3BrWRizN2BVggUv8L4rnt4KK",
  "key6": "59snFL8vYAAC7LXYfxvbFib53fRNfbs7FGdDiNUi6tjSat3WgHFCxrSKzqwQct1y2y7uDXJCDrkRakoo3Z2HHo4i",
  "key7": "2LgAtsudY2BUq37gB9jicCVRhjmG88j6e7Ev51VotdkmYmwSZ58KvDbiaEexipR7CtwbsWYhXoUpyoL6i6f23NTa",
  "key8": "1VmGR1c5snQk2AyZMR3BLhBB3tefgq25eTFymWcr39iJEgBw4XmFFsdu7DJVypphC9UnRmDrCZ5qmmVaufimLEB",
  "key9": "QNy5Yj6Z1saStv8r5Snb7VSXCw4jQbvbct5UFPRWNbana82qSFXrS7FwR2bAQuaez5Vy9shwBpxgYFW1syx8vx2",
  "key10": "5qX2k6SiaATWzwDBcMu37aBPsx7UyJoxGHr2ipceYRRRgJibFScWwHRmQEbNkFpfJrA26ePVdH7KSTAGsFFFcPvJ",
  "key11": "4dbMG5Daa2pt9uzWMbMWYe9t4oedoP7GwtSp5WCiA4SXJwd9Pi5zWoR2uxABXTyqiq8p5DthS8RqTn86gbgswiZE",
  "key12": "UGUitJtPNUvyvHBSP1Qeb4ofs9cKeQWzCuzgbzfj63VzQmfCDzyJ4VCbJhnExox7Hifgn5YjVjgmwsK9rLD3hRw",
  "key13": "3annGr5fwvbY28PvwFcNXJU6K3FCPs8sLXT3nJeYyUCVwNArUFukFbLYDzbAPPdDn1LG3Pkbki4fGA4LvSjiEEZ2",
  "key14": "6rsLAYVh1kCwcUZdBGsgjaHhiYdPrn7rU9iCYTpuDaKq6Hcf1Ug6razGRqWvfMmiDM3qPyqj6CMgQ8Fsa75AkyB",
  "key15": "4TAfdKZ2Z42AmK5x5yQcFwNDffxzQLiqZVWJQnq6yArzyqkSzKTz6kE9go4hyRy9Fvm676JUoh4rmWzfYvDq6pNA",
  "key16": "3fnpg7NWEmTtvGWAFdAyw2URzFrqUDepcKHq7jL93AL1vMFVvYPD2kopokhYS8JSnnhAeqFJq84ynVERU2CKVH9q",
  "key17": "sq7QuaMjczZEx6wFM7SzgDDrsXLJp8CgRZq3oC6gD92oWq2T5bTCjRZf2mmdK1YppkTxvaZ6rJcWYrytBzBLd2w",
  "key18": "439TewHeSPHR3qk7t41WvJJMWnthBiRrayXV6GcN3wyYixiDfh6TFMmiokvuqk4LAx7j1RYY5QphgHnCPYLASerG",
  "key19": "48WGmgZLqUVDmF9NaYqjrM7cJTbjXNmrkZZ67hEwRYi2grysjm2J5sV2iiXn36C16Ax68uhY3JyXpzDG1RvVX6ch",
  "key20": "5ijAkRe4Fu2pWzk7i1VbgWhicDhX2bEWxAeJN6ZQ7KKH3PJ6vg8ivdjV7cdponqGCsxBFRFYGhsZ7GofwBKRQfsL",
  "key21": "2vqvYKEfNRQk75acRhwTogrn1r9y8bnQ6LjdpF48Yr7eRSodSW5xuj5RDSVnN7dS3TfZipEfPR5ts5di39hcMNsQ",
  "key22": "bUYqyHmShUcc1kkc8soAqTJA3eSb3oqyeDNWw5u7aXysGf8CUW8oQmhYALicvUo9NX16cP17qszhPM6QqNE7JqK",
  "key23": "yV6vTHJ9ZwkdBsAyUDJVGqxXjxy7zmLmsasQpDuxohXrDg44BSVsd3GPmEUY3FbD9oriGrsk27CgFzxUtEtBf4c",
  "key24": "5gn4ocmxh5AUr7B1WG5nLSikbsGBUuzCSP5Qt5Gqb1uNWubKDe3isLaB7epT26bdkAdimk2SY5kXRVT9FPTZePt6",
  "key25": "2J6dYjGw3QzRZgHPa8obumDsakJk6f4GGKhypF9qdzmxKNj4aiJtLHurv9USpRkAVx84vG4jSxVPQoPxJyYEiofK",
  "key26": "i7hJPFUHqDsBsY6samiQhuKD3k3SaGX5kLGBdhKVmy3YGw96pnhgAPdNPzh6qdMMURqtoB7T2UHemDG9dn8RCgi",
  "key27": "4TDXcub1Zpva75sjdCrbkPSuLgFp1bYHePgsVNgmqEs1PqBBsQH3e7boqzr8sA7gegAyYeMcBoYqZM4cmVy1THou",
  "key28": "5zuhTb6geNwtctKTqBUjzuBDzwE7EKKSzHnEp47o5BWHq8gmpVh2wk19u87tn2MMR5QUUHFiQ3mt8U76H9Q6kGBV",
  "key29": "3qhCKpxuTxpo7ME7bCWSByqDCX6UxARTEdLLY3TPfiqxC8PLGTkaFHhePjc9UpC9oSVvvQG2XNwhHWTWsAR9ox3b",
  "key30": "5boumyF8w7qLAnTFgrPMUUWTt2XTtbDLMT9dXXWA7bRxn8X8cVUSpQMq3UKUHSMm8RjAadDbTdTyUzMNMd1AkCZL",
  "key31": "2thDaTKiot3pJbYUmQM6EtDhrZyxijm1KrxAsEuRwZLsi5uRkBh8xHy2AtaNda8DKR7fvtGs6cWcZ3tFQoFtnJzJ",
  "key32": "4YVRpbKxT8EqM2wZpxyFiq1hJgKm6jCWpWpHxchJP8Mgyo6GaptcX7XAaH9EMGfHxoPexTyGwLXduFsVYb6c81v6",
  "key33": "29F9f8uFxtNF2kBgcqLwTNn9irFTUh5jaVikP84j4NU1ej1TE1mEkXJgubsRXM4bnGhs4AXP3CLc9J66KaTFWCX5",
  "key34": "2FU6R6jk3ADZJ3W5DS4Wb4HFPFovuXcgLYukbFXH7Hvk4cWc9tKnss29hXsPYqUZ4uZd1ZX4LTVFX67ha5QqbCC1",
  "key35": "28uSHAPFExXp83ck3nqzaVphbWKrxFCjdis5FJYYRS4LzkV67f1HjmJEC2NmXPYYLPp7wVY87LvwQQMEDHWHAqxk",
  "key36": "Pa1jf1ZdXvB9b8wrKBUuC9VgrYB9BhZrDny5jrTKCJnM3nZ51waTGhZcCamYtZ3UvbF8EopdjtfMQ5QjyV5eo4q",
  "key37": "3tRKiisb5QMf7BJANSysSabnLkuiZMd4s5CU4PLPv65pDDDWFHQpDG2XpZnSrpGDJdPidZ5QDXSEXyB3AD6ojQ5H",
  "key38": "2cGzC1MVp2hsJwpZwJAAFfUJEvii4vgjqAyR8kGPn4sQ8vvTfqEkJSDFNocJ9T9eQbj8MGBgDtVJ9kVkL34T5Mkx",
  "key39": "2GkmGcSSmUEGLCCMe9S43gnr61QMYqVjYtUU1mFvrFaPeWDXS5Dm9fUCkwZwLmtPQUUe3VoM8CzQcMxpDKh8YKCb",
  "key40": "edkYcLVJowodaTau5XtbsbbGqmwmKinxkzVHhLZarrGyWkRnYZs2yWQtP8TDtgS5ryPLe7iXaKDRuUmwMHSThS8",
  "key41": "2yVDzd8Vx3jBEHmsA8Bo6uEh7u7B5KirsKuU6LSHnradH2LRsvDKKTeCS4LX3YKxGXFcpCDDErzUrUZbPN2zz2ew",
  "key42": "4nDtn1tdxSqMi3VZZbejh7LjRopif5mKqaoduY5nUeEooe5ijhF6jToFPdwnu5CzZ4iEg57QHFupKRLsELiahNeT"
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
