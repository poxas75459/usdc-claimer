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
    "4W7zzV5ojmiweLbUc8MDfy8X3wVHqeXSYv1bkacRS2yEPoGDDb2kPFABaNeoXncWG3Q7xXynXamGRB1djN7p18w9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ELKxFpUY6TTH9Fszxg8CEHRB2P3ZELvNsWvmN2rkpuztVBnoB2gmHoALuyNzqM5NmqkmhjStcXHZsfjXT1FXjxL",
  "key1": "2hSxbjMzqHFQJdDhruqjNmh9EkDR3BMb6fN42quW1daKKzhQ3oyS3UxhHRy49k5K13JmA5cFjUAevgYkNYDw6iMZ",
  "key2": "A5PewxmYBXGzH83QnCBZoqYa5oPZ1Vy8gAaBMRksroQ45SNrBo6ZKiN8ETJqCsCpFYdpTawSqPgA3PuQLSN5nXk",
  "key3": "2tGPjMFds15DQ7NPY6ySzXqwWRydhBKyR5nEVuiG17KqhYLfxPU8Dp22hYQ9guXDp1mcbuHBZrLq67A3FQrdPc4E",
  "key4": "3afSqKKB2cXLzSHiyAhG7YWxMFDZx3uJjVZvbry7jLCGf9WKmhgfov3LMzzSaHD1vZEv1XHedkuNk3EhzHX6X8xK",
  "key5": "64eoZBg7CvPESejnWUPMMwnJXZRPq58Ye51qmBQKsuA5uT7LymrhJz8bP5EK7NtbroBm7Rb6hMrU866eftUzQKX2",
  "key6": "5aEL7CKLBddAcXNS6qL6tZGANYY5wxTR2DUD7yCMigeYekYSvHff9j316P8oxPSa9B43vkjQ2NaKRdETBAQnUJ8S",
  "key7": "46gt6ufeG23uCvj4vy3hzi4oaTRk1p1jfLzY1YRhbjCkkoktL29KoS5FSdQio7wWyykkKkStwiQqu5YWK7WvRHof",
  "key8": "XAxrW9C6wrNQrBqeANh9DEfTmpg7iF9eRYnMEfbsrNFtDRVCPhbXt7Wsuqif2sUTqQb9rUVHtENDFjyp5fLrvdi",
  "key9": "vzDFsvYCie6qji9pQrVH38qfkQXTZNR5fZ79KbyNWq5DyKJMhVi8dDzTaEqEFKS7WkGqyhQJ1vvzj6GP3BKYJQG",
  "key10": "5ug3xKRpuoM266GjxYHGiHdSDJQw3pWpb3CMBe6S5EohHayfmczEbJ24jao7avYk1h7gPEGp59VcTbQyRodyBhHP",
  "key11": "4nzB4u6fsqRdXv61rTyeB2WxyUxLxVdYwgkLGHfJrJJd9YdACtdwjxDa57UoPfb1pE5CQdVAAdNjfvcwFYeyHkc6",
  "key12": "2wkHuVFNnEsmbSEVx2zAwb56H4WCUVEqrwWRY8XAYjmRNPSQJ5gnnAPTJgJfn6yxfr4oUL9MqbYHSPS1Cop7Xd91",
  "key13": "49o5WjQbgYD16Vz95q1yhci3xWVLSHVXsGQeCbbegSMy45Q3Zw4GfmfzCDaCcqdwtT83VbqqDrmkBAmRmiVBuTG9",
  "key14": "KB9DZ3WGKuc9sSbGVJbWNWJvy68Djv7EibNCfQkkZB6JRxfBqELhXg61YqSjSVrDg7MCNqwqAKwYojqnoyyVdih",
  "key15": "z4fWeG456kT2NoYRHBjuPVpjmqsX3RGbJGfo8fkjtt4fVM4us35THbqM8NjdsAxfthLpKARnUj3MzTBMWxrG4xH",
  "key16": "3yAwccuBDjLw5Jq13K1DfFSj4STBDtThRY1EAVC5vi7JT6vh8Vnd6HWht7WgjAvX39WQFchMpfwws3PSE3JUuUhD",
  "key17": "2UqmpdiuYhRqMN9WdrqPdCQENy15ku38wPQ2CygVnJ4vSbVKSozMYLY5t8jTqJahSy37sKRDcWgjheJFQeA8eKwn",
  "key18": "eBMd37vWHoeMvMVH5e5GThpUb7pbV1jLRKArEd6NjLinmuiecBMpnZshVecZUvCMdzB2fSozzS1GtfySAiHvnAD",
  "key19": "MTDNqLRbRWWGXhbsjKHL4Gf463z15Zh6WSMe9qQQrZqgPTQKiF3xi86wJnQdt5kWidLCwMCrq6rk9mbnaX8GifY",
  "key20": "3UQq4d8yTZX2pLexAcXitdqFCffPuPZsFUycs9q9AQQyv219e5VfYHqG2Pvmc4EEhDzoN2WNj3vyrrYZTqLE9jdG",
  "key21": "2J2Ya3zoerEwKEZFDoGK2Hr2p51xDh2icQNjXrUL4hXWufwHjpZKrqeg6ZyZFVjDRdTVjjbX1TGoLQFJTyDuumhz",
  "key22": "3HMr7whvejUpXRHkB6oDsoVmcg9q7WYfVG6zCyHar1uvc3SsaboejdLwXPJc4Tg3JTKDmHgLx7fzbCfPHXcvmZJR",
  "key23": "2hUBzdpL7zkzNW35MFsJcptA5asFKLmq9UDQe7d5VbPS8FtQqbweWuTGzdvzKcrpesCWhFP6Mf7QW2kiJ4BsbLvV",
  "key24": "4kBaaJjEmvfbSfnJZ3MJZLEtZ29nAiyZNKM44QCfHZipZypwwQ4DAkRpUf99GFqzQw2NcpcJyz4ThZcuiZfZiTZo",
  "key25": "4PbqbSxRYtv3mLbzRnjEpRJiRw3XeZxjBN3PdVAtqoMKCYnhMDMnnkE9w64AUtU2AoEygNG3V9hGP64XRvM8JQ2o",
  "key26": "44Q9bKKHQcy7SyXtveErQcY8ysauGCwCrvbvvJL9a9vBwpMYZvWNzHt2nWkHqiaEmwWjvhbPhgDd3cXweTvSUVok",
  "key27": "Cu9RXdMHhWaGpuLF6WMu9LkjKXLyb1wMBmopKjHGMSkd2mD8BD8MDc5iejyEy9woAHx22VG2PkEpFhUScmF2KV1",
  "key28": "a8xEDhRybSByVtupm8q4debJpCQzedjrwEngmqTAgRJWLDPakF8kNu3ohjYYFB8bs1Z6u8JiqnSfz35EeY7UAhd",
  "key29": "2mKjhh69RtxmViK2y2cse198ULdoBkiaKg6dHgU2jaEdqzSKjJDZXVLNGrcoWH6WFb3oPyRCNGEg3RQ7S8mvn2mS",
  "key30": "5pB1nX7mbgw6xknbi9hAG4Pf1sto8rrEW4EkVa7XtfWRjqaD3JwBEyyCwqTi5pBMP3fdd331fPjtHKfpwLmdNbZg",
  "key31": "4qAoJCiop96aVXDiFNLmMjq2rpuj1hefLL2YrRhB5WrcMEbQwFD2fUaTvRkp7Exewah29cUtjj4tTvEuJJoxxoP7",
  "key32": "4eWiTVhFCibHseaxvfbNT8LSAa17p6DzhgKkHrZParcjmznz2QYLcu4xASxSHtoA1RXuEZraYXAg3adKjMexLGBd",
  "key33": "5ZcGFfmLXixtQPPf5tH3x14cTm8jDP4Gvk4D6XpM7ZHS7YbMLAaaC3YFQLcakEL8LXKYhvgKTUfiQRW6jBr7N5Av",
  "key34": "3sxDPex6BFXGaMikenaKVbnyv8quXFSwQq4DXWmpbFUf2QG88i1KovLw1B2jqTw2NjbRkejPzvyF3xaPRDT6NDRm",
  "key35": "2NfYsj46TCtW3fvK4L8m9cPCBs2SxFN6bqtaCbjkA1dVfEwmtMvLH5pLSvjr46V9LgEeuXu19J2FudtMnkQETDaG",
  "key36": "5aFcQ9kPn9GuJPEZ2F1fB2Do14CKAcVYx4ZgL6oeFL2wmvB2655F74U8NRTFefMgqpfchM5HC7obhffM6wUDsGEc",
  "key37": "3yvhNB9v5DaEcRSM6jA91zgc1KJhuGe66xXZpi5qtWRDrpVkcqDRbpooLoX2tF8Yc5C44CvWBbtN9ZHM6HuUiBBX",
  "key38": "5Rzq9Nr1mp6H43a1GEP9GEV9ucMREFChS8ydSj2Yt2pWQT67pFq4cyNBE9cBPZkNpCqJid9Mt1Q25f3NQWtYxEfw",
  "key39": "8i14Us3xFNV9xFpy35wcV2pyrZgMXtrYb6YUMy9pe9rgxAs4HJWteq4iy3fRVjzPKE7ruVrri4c91iV9XV3ZSpn",
  "key40": "4AfWZYBGo43ceQxL1jCDXi96iWyq688jN4WUysHx9zdzMSFkyxDRDgNuMnN89rKBW1Wgo1XjhahV9bqpG3cYjrDr",
  "key41": "V5WpVAFpKTQnCPasrdQwgLvfbG7pdRYT3Ki9nhhHJKzEFKvC1SChobGpDN3SuiEPi8ZYKsLyqFZJoWVvbt4bD22"
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
