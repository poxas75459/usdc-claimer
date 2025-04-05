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
    "2JgTDzb659xxbKFm7madxPLPnndDHo9uMkCNY2kMvvefsyvv7WvuWhHX32mRAz8yF3cfcMGN9gQFp2TXnL6fmm1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r8RupHgJDS65BCjMDGSUF2s8zH95scaKrtTbuv4dQgzqRvHcoVrdQjv5XGtWUSVa5x4mM4dcNdipaSYrUGp1DbE",
  "key1": "5JrP9z7BVPdsA6LTggvBULn44o3oqRq7nKXJbKNMy4Bzg3LZmPsgZeHdCLrDtNYbDB1Tsdxo4SubWvnEtBrW6ZK6",
  "key2": "3Kuug2JSYRad4Q4AWqaXfc5aVUAzuYdirXyzdRVbuik6aNrpYZT9BdjJWj1g15Pt1QgYY6KAuzK4s2RoL7V1eVuM",
  "key3": "3HjXaHFvFi5MB7YyuDGSrGaT4PfYSJ7DgYeAqoEc4aC6SC8RuZCsc3L4WeDErfZBm13sN29pyD7YaQ9EwE2rugGM",
  "key4": "BBtoCBuyzPDYTicvf9d4A2EKR5c5a8QcXqvcEkeEffUTC4eZaUeRq3QvQg762JfH3dKDpXWhzzvjvfNxGFFqCv3",
  "key5": "539UT8BK8uNPrafv5QVdQs791WwzqgN6xBR3q2bphXgrPdKskMsWjFuQje5GNMaH5opR3HzTqZN7MhMXi3KSvqM3",
  "key6": "4kiNcdaaZtprybdsTqt4swe4t5dCSn5UgU7KGq5NsN3XNp5CNCojJnMkLEG53bCK98E45hdC4EbHMBtgjPmQQxGf",
  "key7": "49gdbVHZSN31suvo9dPiK9J8R2GvpKtZN5SvAQUfU7r56LQufnqF7MATN3FF3Z9vSq8JHrLBaDETcCzSMaLqK4gF",
  "key8": "2D2faNKezrJdoDcWyxmt4TaWbiUWHNPhYhL11JgvfS7Nm7fCyqXkZH4Lgtny7gPUBJAE9q75jC25zgqC656pcAJ2",
  "key9": "66DguuvRa3ZiVsjaXWGLdF8VsrticPoMtGAzEFdKWGXuuYY44sDMJZxx2jYqsDADwdYLEih9of5tXE9kYw45vp21",
  "key10": "4mhcQodQeLkLofMtSwckqe1gD2oeciKJ9YMSZG3CZvsmPz3d2eXhGXVDR9jWLpQDbdXzMXu8miUCMfqV7KhtWWDi",
  "key11": "2iFoDHVutjtJ9a7SX54uUv5DWafWNjaCj7k53UU765cvhNWJu1SAoTh8CyXQv1pQ9vTM4AQ9zgRtPFMA7HDnSKmC",
  "key12": "514fRDowcQMZ8zE5fARVwAVZGH59bV7SzLWwHZtqGyoV27R7B9Kftq6AmVY2Sh5vXXMf3i6BFUSJ11CGbVnm58pc",
  "key13": "54Kk7kqVSprFeYjjNtcH1sjjG4WEfUVaE9Wr1GbAuqso6AwbLQAUk66q1wyDDjNMyjFSaLn2hb7D9voX2iTavYd2",
  "key14": "cZhQg8Zy6zcnpyRRDD4pmT6WUrreP349a2G1RtBXL47TNT9y16hK9WZhrGW2QUMicbF339Uxa1XkqsiCDrTkbzq",
  "key15": "55ju5CMaQXzcjUfUFfnnGXVanFt9QXHyvMPDN31J11fGcMEL3ayrgq7u4qYzrimsqG97sVAF3aSpNWkbVuDKmH7P",
  "key16": "63gRuCjw1HSzKR6NLrab5uxg68moyAMLugn98bgwXpfq9jBuVZmfaqtJxpKExgdbLRrGkXT7zWaB3UeBAiVceRF2",
  "key17": "A6hK2fXW8k4uEPLyPJqexHPAr6z6tTyDtpz3FhWndr9T2z5pmmMbD78r6cVnq9mfZe8DySFs4pKSYvpwzd5GZYX",
  "key18": "2i9va247AgyagdgvohGuiRXXucPYLpdAASwfCrAPuFMTDRZnUqLP7W5XR2PJaatRyk73mmKLT74Xk8RjvBgu24sW",
  "key19": "5MZB8kFHrGcrcLgptnhZ9DTBEYjrwjVYbEbDvpf8Pg34J7xwskiqW46jme2vW8x5EekQiwPuwk3Hcq9XgYsxeGA4",
  "key20": "3avSspeevwKUcGo6s17sSwTRbA7UTuSA45VBhixxek5hzzrMLc69zKATugXiLL9EwLAsXDmwvGLMjjLXUmuREnif",
  "key21": "4UesjSLwpVcHTfFj5LSBTjpYrJ6wUTMkc4rR1FESyXLSV7KqGqQCgyFTJeapGV5owKUBnXohWL5yetVrshGZQ1J1",
  "key22": "4TKhUXdJ58dD8pjXEzfKrWyF186MSciGDZr5Uq1fP9ijnijf8oAMLVHHHV7QKa4JVnvMsnKaQqc5x2W7D265za1Z",
  "key23": "4bBifgxaXX2T7jM77PLFNov4g93hr4LdyafRyjpHrug8FysvC6ifBaqahanDk8AfLDJzFVtUe95Bqo9tNEQYmGpa",
  "key24": "3mPyQVRwujex5qZszajGgWGZJRHDWrcRrcz49T5XzMAzUeC12N2944LsJNdmFrCYKgcggUEoafE9n2q3cf8Z3z4v",
  "key25": "3prPvYtDLHqayWTLEwzBZRqjXiJ11buNfyh2XPFEbTipqJPoVMv96SkkXxrxnrSAkqLVSgfxmpa5SH8yjmQPc13j",
  "key26": "289s7Q1V5ZDhiPDB3nEf75DvJDNqaMLFH7JtX73gTmghEzDAmabebV44Pauz6zbCR2pjNv9PYgua2kKgRtpQQ1wT",
  "key27": "5MX8YLJFXpPRCHdAFKaghMgHh81nbrqK9HbmD5wUnPD9g6KuUWge39Hiu82Fou9Wv7Whm2g7XAcs3GA6uKzmR6uW",
  "key28": "2gfUDSf6hg47THgVthd752k5NbxhwKVeWX1c9fhgwRePdy5J7yd8Knw36L4cRb1Vxc1rnpGKTU8PgfmkuVPMS8eG"
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
