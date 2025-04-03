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
    "ZCeFKsSxhfCEjn8DnMEDVfFdkMEBhn6QhSnHibMParZ3CtnnsKnrVGGqyPGtfDuj1x3r82mGC2rpuKpM3ChUbVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39kMJ9BS5skJHzbaJJJ3bEEtVUF1KHgUF5NbKjB2psyVe6k35a3JxjKnmZtnteZvYxkbaG5m6LqCnPELyrkPJJED",
  "key1": "5AF4MmfKJe9xqvHmLstaSTwJicbQwmzLe7nZ7o3gauqu7cixdcXKFK2QcE869xHzidAX9L9JviTuPxPFTMdG6mNv",
  "key2": "5tRrKVC79oRhtA9tih9FhAvSaX4aZ1JxwNZtHkQbkxKBWMfsXEdiQW2CooHvunwYsRBEcPWEEkdz5vic8h6GitaE",
  "key3": "Qb51JsH6LqNqkPSdaFvbAL7VtUfecc4amjf1GnLECgasFCRfMBrJ7ZUght1rqg4VMYZVDJi1ijZwxgLELqaLdZ8",
  "key4": "47hptrgk212rouFP9wKfQRUHAAZ9XjHKFT3chbRWcwiuoasnrnyfCRs6WW8kPT4pj5JC7NBXdaCYbbCqrqaciLb2",
  "key5": "4VJHxyVgffrU3AJ9SHJWGkFfBqDY7HtCZFnRy7eto9fA6LtbSCEaVznJ1izzKgBj8goh1wFJ6BioFMDdgVwoacZK",
  "key6": "42hq5mg4V1r6CxH3fWfpQVixTveq7vxriYB9mWNcNMV277wQsfM4Vxs7t1CzjPKaKpmLgorWBHX26SCAw9kVzqie",
  "key7": "5RtEa2UFurKpQ2bneh5AgDv8HDwpRYYKxPtU48ubpZdJ51exbjQifqAg74BGyvSjRUgYSUu7qM1gWXDqYmQHmya4",
  "key8": "Limhqzaf213yMwEMMh27GDjzd5vTn9rpYdZZhgRKT9d8UBEfaVBAjw2Q9FyoGmEbgbkYe8uXpZCs2tkhYv8tam7",
  "key9": "4fVqyTQBcnELSq6NAcNESs1W15Nu5g4dqYGK47z89XHZMcyr1p1JMyZMng25ybAjCMJte22peQWwAp7EtnA9YdF1",
  "key10": "6ezYjkG4JGa2h3ebHmLm9kqZMqBGe4w4RkCjQMrtfeWkB1oj1C1KDnGKdryfhqEZTYKisTXV3Lf2NsMLmVmtdDp",
  "key11": "5k6vHYtMN9VtjJLSnbMyTaRPMBhGPQtkXPC2Hcc1SR4BKaEHrkPt8Z46krTHUmKANC8k9oNnUJS7QK6h12aKeozk",
  "key12": "2Pk6x9tJ3XbJyDFRDjuy3JirMC8vtF4rfStFVXtqKPuCrdfzAJP6i6xupPHHC66PcZ5MfGzTqRnrCTAt17WXjMfo",
  "key13": "3nX6ruVupDGAJY4SQzQNw6wWYXMvi1ZfeKZDc9h5xAyizfWRvYjyAhuTiLa7Yd2d6KgBE5MMgCAY81iFfp8omuHE",
  "key14": "3gM6bDXLY2xT846Z3Z6hRNwt9Hi6zxomtdW77kBUFBkuW5szHzp2f2eZ84wY9ApbkrsboX7K9vRwSyZukELmT9im",
  "key15": "26FbsjLWUb6b64HQAwDdsv9ppm6VuJxQih29TTUga96atodRNTrYkMkeaW34aoUu1PxEnBL2xJzTkwfgLAFJEAz8",
  "key16": "gA7Ww7gy4gKaQ3hWvRTQRsveSfP3b1a1iRVjFMuFSML154A94DZ6MsTnFd1cEUiZLzw1prG4FsgZveG6uXLADxq",
  "key17": "5VMQuBw97k1ryvgTLa2YCgo74qFmyrNhxYqxuxTWnHfg4mCsawP81B9SV4MXwuy5qKY68GmUyCjFyZNY2Vm5YFR6",
  "key18": "98NQZ1p2RJdUXMHyh9cUv6wa9NavNjNT4nqjKANBT6mytE3VRAEVue9bDB9xYbbqWk5JxyrNcvMDtjEVGF5Zv21",
  "key19": "5zzRydfyphkSk4CebNNT3stMaDYcPhPbuJSZxeiYLFt2V4Usf846eRdUA8XUoJKhShKba9fYzg1LkkNtecX1Jhqb",
  "key20": "47wsTY3KL6WaFCTtc19W5rhuMhPZPxXhNZJemxmky9ebQ1Nb5JrNbJkPQUQGUzFsyg8b6CXdLatkdbHfMyjatHye",
  "key21": "pbV9sPXj2Vi5p6y4wRF7M5svWjfcUZRcLLPB2r4jhxhobd786E25G1Qazp5sW2tFFPN7z6NQfugDELbNb1GQFiC",
  "key22": "ybV3vTz9b9w1NXXaL4x39i8P6p5V1tojmz9eKFpt2qUi1JibPMUZHRRaCUUP88Hp5aMLLtSmaz6NPnTi6VreMf9",
  "key23": "32UhXaZNWpKGGsJzJJpMEnkZXmeQpCsqY4b8wYXKtmqarvUAc5EVbv4qF961sobre4rruZQtTUXKTTgtn4HCHbZG",
  "key24": "4FmnToiEqSqk1BmCRvUb1QCmvxsV8SFJuVZSmFYKMH8JpTr2RaK7WoeSrnrMmsNvjrYhzKgSvHikUKnxayJVWD1J",
  "key25": "ErKNyFq3LSW6fhE3ZQYFVXAtwfckEkjdK8o1DffugWBo87ZsXeMxs1dK6Qducc5WseYx4bFDXvWcyZ7wFemutJb",
  "key26": "3y1KG2Py58pEB3EF4UhteEnCHTiTUMtXj5kNxvNVNusLr7EM4VRJNjxaciD7QHuSo76BE4bm5LYyiKY9eFTJRLz6",
  "key27": "3G4ik5w3h2AyW8uWQmqLeNoU9gnPoQwQ61AFVEKhRdXWHiA6iSQanXvFrBLHZGRdpAxgxLVGjTnuYeDfLo9jHYnH",
  "key28": "5bUG7cGpihf2nzQs7LLYD8isEfjKprnb44GQANYj1Di4CKpLAgZgrRtehTEip38U2tP2pKgFTTfLAytSfMU3w14F"
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
