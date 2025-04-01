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
    "55escDk3o45r24gRmraVKJTCvbRawCXMV1Ki7mQCw7RPsNx1ze29Z5Z23eZYrJdqxU4qcRhbQPh6uEmZzU7sJp33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kAjRVDKuCssN3muc2ERqQg7m3wVGkRxprSj6U8KKfZhSYToiLuHc5Crh3xe3A939h9sNLfzp3yMB9H8uoKAdGL",
  "key1": "t6J5wLCrdkDPyefZ4TUdkcNGusT3Xc7uzMGaLBgigSFoeyMFajjpzL6cB7EeZ6wgCo3su8Y8i5YK5gf468nwuJS",
  "key2": "5YQvpJLRhmYkGHSoNyJX4wLozBfZdr8xmuT6XAVqCoxY4YSTBdLFWY72esis7MW4WsuwXWcDfnQa5ndqF5HR7bMq",
  "key3": "4QzWtkozCmoGoFUTGuQeW3t6bvcfbGp9EKJBwZPXjs7cbZANkouv1sMWGLBgoav7nPWJYsdLrDrf349oE5AaLYjs",
  "key4": "4STj7rfX2Qx17naNtaFWZjZYr6gvChJ3yieoHayJTXEiFCoPqR5JkotCvuuyT3P8sYy7ydDyXicbyEeAUHQsBQSj",
  "key5": "8bnjZNLteR6uNKMGxvwW29k3ZKWE9VqXxQyeKzKTieKQcnMTJoiRkdGFnHa2inSuKytCDdjvqrLsp52rB4JErxc",
  "key6": "2xBB7GwzLTM8duZQDzfNgJcrr9ufYeu5zmEGcusVBSvottDe1feCzaPkqLGLbHGJtisJ7D8AguoJkcdvRapGXUTF",
  "key7": "U3nQUBJgq7aiWj7udVMjh2DbNuW234H74uw4mvQcYrUc2ZVtHZfY49KNznaCNA1oUdHChgHLxuNUre1gcLLAjod",
  "key8": "47QVmdU1JRUwr4T1vtCxCehwHp4WGrwTYU6mMo6CmbHRzR6zEPLbmmruo48efdXvzu2T6UHm9wQrmwKvTfEyvP8G",
  "key9": "5hPhqK9LmRb7qWgDEhNqHCAQt1LNQ2V9xE58rxVAgk1mWiQ8QNU6WTzwYq5Xd9Wq2GyFy4JTX4Ngxb9iRpFDgGt8",
  "key10": "3HDxNb42BXQt8jYXmfDZW3Qw64fTyDmsimb5z5S7C5rsHVUkqnEABQCrXQZgBetw3nxEKNrKk4SuVSZHNfxw4j71",
  "key11": "27hZ5Egv5iG5i3SghsCmsCX6RUeDWahDieqTAr5eqxdzRogRnhDrEwEbpqFjKrW9kKbZFUHKeNsKKCQoSpQ7CdYF",
  "key12": "57psHW1Pi6eJvenetkK6PyZsgZe4fM575vAPx4yU1axY7pAh3tT9R3NZ3bUH6KGHu9RCnRWf8TWdr8oZYxhkLdRX",
  "key13": "23ri7zrhGsYVMiSSUsojG2FtxywnUgj4r2rKWZD9CF8LrtiYwXiejpvoHoz4vYxBxXLoWa6qz3PJZ4GyFWcofuZN",
  "key14": "X7i9AJdHuDzTLdQmp1rHU9jXVTN9fB3FCNjbayW14T1T5vdy1zzJA4SoP9k9GAR1vyY1GhrWdmpQbNgUiBDCiSk",
  "key15": "228jB3GANMjisKBMfFKjCHkYFxsjmEXHrZQVtUs4n73go1TMvYJFS3XMAWq5PUdu6ARoSiYKFK8rm2M7PG7EEDQX",
  "key16": "2f4mCrv4y4vePcPENngRo8mVKtAGiuRGXGWEkM91nrST6WEiT5uqnRmQfVSfmEsKBRQ44L1ZuUJJ9mV5rttK1BAp",
  "key17": "2Pm2kQAnmEZYXiAb7BSCNCCjYG8Xzeyb66iABqVXYrzdzYmbHNNpegJ6CfG4DuR1R6yARt78ZtpL6o5zh7cpqB1G",
  "key18": "21j1DHwc59Jvhihe1VjskN6zy8YWhcp1xhXYBGXoSY5kTgt6kiDMS94ggsVyKhsZu2JSmyyBYj6mrncWz2sEwXgq",
  "key19": "3esFfHG9ZuEhqa8Y53NAtrg7bicu7a4GkQhW1jucp7rbRRqQwLjTa6F1GM3kVPpqG6fTKjt51hnVAq6j3wZCey1k",
  "key20": "2p3PEjPy1D9sGjeYmVDgFWLyJjjccmAaqyvY7S6RVRWGZxn96ssya6rd5qFqkaVNAVn2H77v9bZpYD1Y2G7aa8Ri",
  "key21": "2AhPjsQ1Up8nFV6m3uV4fYhr3eq49Hi8rpCtvCDXpVobxv763hqGEhbeoEy7odM5iJSK9GA11LFHRYs99c5dQRMV",
  "key22": "2vk2ig3uKL2NMosqnxoASLohvyz7MEvsHJBXEkVjg75QjBVvHekwGpXSotLWRwFmJcrWfYDwFYaf1C6h2DdRH4b6",
  "key23": "5NsgvW85Rybwqmn4dx961xkmrN5oKymmGtjxb78o5SE7Ps8VXJWPGWKSsZNoqMXCRLq1UbjwjYrbCDLUXjSP6YFj",
  "key24": "5tRf4tSnnKA4RpUnKdDZqZKCie6syk2YE5DUqWzHPgM6c8SFn1j5YPFC6XHZ6zqe5v5JmaBh1PKYeahm6m9AbejD",
  "key25": "5YesVzKeC37SJDmJpULZoQWpbRpLnSj5CwiHrSzHuP4HpdD4XWNp1WnnS4sGVQHx3fh3A3gnY2o3mV6FafUHn4xe",
  "key26": "5xeAtY1gvdDawvvdBGpvFWDUvVvGH5QEgb6E6zZHRE31Ubb5UeNEMgyoYkUPGhrj5DpXKLenzFwBmzrsYby1MQ1Y",
  "key27": "225cVheMy5EBd8ip24N6VQeG7pJqZ8fdHEwbfTKnRwxfy6nTVzyk5frjAtmkqPqjdyW5TxWx6z2kEGuxouNtF5So",
  "key28": "4NPzxoj8fbZF72VetGNsR2m3nw8sNxdCLsWmkL5LESyKfERoJezsaQPBHy8gJUygLT2eN4dVC3taHZ6NSFACCiwJ",
  "key29": "PZ1Uf111v4iEd7GP4W87MSUhRRYHH2UsSkSArUfixaQyuoctBhB11fv8DPsBwVeCMREWBeuKnzDLcj8US1VPChv",
  "key30": "5pqAd5jrbNJ181iBhXzbbaMLasnNadGKwyvSjAmGZJm2eJwEv9bP3gY9SXBioLjBCvspTm8cJzhWwWjpqbs3H2et",
  "key31": "37LTKDsberCumNXK4bhUUzngTx2sg6sQq1CgnJdfKMFcrL1zP44NhxQoWeRdXmxTnNGeiYAQjzXWHcUu7uNJqYvD",
  "key32": "326KhWvpncon2mpMRSU7UamPe9pu9fUTFWwkyZCnxaPXoFTQ8keKwMNRPiQHsPxE4vFh2eFPfeJa476pQEtsyFw9",
  "key33": "3sowemYrXQJqsBhDKqdZK3fEkAxr6CMjUBiGGHW2xkgtvZ7Gj4Jpy3ECdN2QuRurd9kv2SGou1CYihRPBX6b8Skt",
  "key34": "64VZX2twtudCqpPY2SHwJLrdFADQHauHKKcqMRYvJNUfMnMj3zc1M2aN4TERvmAurWb7xBW4iuktppE3iSD4VWja",
  "key35": "PTNE2UQCiTw32NkVedkFVR8JroyFp16pAKxRNBo1N4KnDmdLHAUSp1xaetFPNynvRLzFMnSuPBEPY17PcKFi1sY",
  "key36": "5XLtnAVP3rcjukKTHgpPgwDMac114pMmhF1PJXQ389SEbcgH96U1LiaoRVtAeDw8XuoNH1E5cGLtZtE6XPFswCF6",
  "key37": "4PpG7mEpXahuzogjTeY18CcADskxeQvTDLRS2DYz2b7DbFUh4a4vGg7g6qaiSCnmDwN5XeYSwu2xtdBcfSSrV59J",
  "key38": "2tCYx2cKXqHmqbzdyoNhRHeQ4FtwP2nqnLGuNXSZyfVkmw2r8ZpGEgAzcy8VBtRqBsMmeJE33NybCxKFNwAk5qjG",
  "key39": "53DkBbhHVUduXUxz5edrfzosaVEF9nPteejQqzXvsj6HuFvsHEBEDhs2UMjSjWr8yevRt8aB7FbEwJ9gUKojVBao",
  "key40": "5uYSLXvU2Yc3P7z1VaC3qBjvop4ekLMwX9LBHmX7B1XF8jonLcQHTUw1RYccmeBjHV86bJfo1wLPkrwbRhe8AcXc",
  "key41": "uMAkjyfvUWPj1489x7YWuU3W6yScaTbFiRCEf8bmvVu3DkGZffgBz8Q6woEL9obja7bACLqUJSfd7rTTiaYNpPV",
  "key42": "2Nyy1hwNCJde7MRkxe9k9DjySUmEPvStdvLQhbmPPK56185fc9Vq3d4cFpCDxTJTYaqKUtruJsg5NaKpYqYsNXpU"
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
