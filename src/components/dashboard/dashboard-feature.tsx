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
    "9UfMkbk775ebL5KJSbQPgtK9vmQmBKEzQYwAKb25rYK9v3tkWn1HGBeiJvrzNLSEJEBKH68oU4uFhv3y7KrMF5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tao8J7AkAme9cBHegJ8mJ7JdN49etrgX1Diq8nw7YdfMUE4woGBg2cRiGEc5aV8JhfnV7R5ZS7b8rn87KfPpBkT",
  "key1": "4xQhnj3Ssnjbutr6qVU5ZDV5eFNbaqzknCmEd1CQ3o4HBYdvNuZv7YptdJYz29vHbJtrT8LgZLh7hdP19j4WEAf8",
  "key2": "22pm774tA4P9MidRCXoxnPaArDoz3S6f8rqxhqENm7DXUvRaGZBdvozYKcSQDm7AeDNqdggqGa3epNo3B7y55KYx",
  "key3": "6bbjDwTBs37YNKPS2VGgNmQrsicurQ9htkt8wr6611bmkNQwb9vYt4hHokQb829dxhr8J4ZJwP1L27d7FSh22Uq",
  "key4": "nsSt7w7u3zdMUwBtiMTuF6mPTz9iq3X7u2fGmkasR5bjXJdSxXqMrAU7UhnsHQHhq25dKukgijC4h41ituft24C",
  "key5": "4iLJXBYChwXUXFrw1H9Hb1o5akaPRyon8yFDMzFU3iKVDEG3JtQpBaQienjAHUebthRxNso7pydW9oPExG4fgt16",
  "key6": "ToCX5L8Yz9Z1i6FdGBYWujtRuv7Pn5Ux68SLdzboiQneJvJRzLYdpRRQxKnr3N65mezbGUYccc8iGgyUyj82vJa",
  "key7": "4gUktto69oEVRCfbDbeCAshbedNEcTQ33JCvmhDSy8c481xqnkKWSQJgjMXuRJDSeQR7AzH3oYBBxPsUdmHBxEQh",
  "key8": "gAtmvXQeKahrWVTRtuvEiN5KYq5nPjJTADTpnEh2B9FkFVKcnc6jct6KfyHzcArcXSr6YT59CVc527NMKdL7d7V",
  "key9": "4vtuuvbvVo6QwqD6qs62pGcsSwnyvVPdfPVixeWDKzJEjvEt5nePc7ucGfPUfNDqicZ3auR2buUVDq6kG34MAVJx",
  "key10": "2e1jwQdWUGjhwPP5K2ScCQ2mxjnRWJ2E8Xd8E1ErbK58NkaZEUUDfNd6wnBEuMmTXFgJ46x4ENhR66GmJ3Lyia1m",
  "key11": "2g9v4Knf2ds8X7n8WT38fFYguFuggfXDzR1bwGK7iwvjittZodLLJGDLfLZhM63PJ3scLvNzAMmYs1LpWsMGjBEi",
  "key12": "vC8DWhWoPjcx485QVJUSvnKv3yTELJdkewPBGhfrnGMTjAzPc7iZ5rqg3RFn9QEgQDdWQ67LsLUohKoWkdYpdUf",
  "key13": "4o3LM5i2Jjv1ohS1tx2qVQRa73k4G6QbjeYA1GiT8S1rnXwApM3mZZ6sAp7fFgvLkCCLahcQkwg7DAdm6jHnMNbM",
  "key14": "6794EMiH1ZD78Ksp4b7BxFd5pviM8anvGvsKjE6vHwMkTPipeeuddrm3q6nDuBwo5mVUt84oPELcL96SoZkd1MeD",
  "key15": "qyWbYWLUvcA252sad2nPkUjN6jj2iqWktqLwDMgMiLDCEa8vJFPQfJ8cucCK3CwpGSv1LErWh2W6obMpcwcFZtx",
  "key16": "5byzbP1rN4zaauciBYBYdozvwPoZcuYXw8TLeQipiYVNVFYrnkc3UN3MdG6bD8ZbuaYpcyHGCboRNC19HRMK49kc",
  "key17": "3a66bb7iM22e5H97ugFjRLP4EKHTBb5Z3ArHexg6nhSCh9GkBaWyYaMeuYC3HMLWQL48tFnLNVYuKUNWqo5vutPL",
  "key18": "DTifiwxsHUTGokhuxUkTKbqQyJoRt6knpekZWvsCxeN2w9V2hS4dNCeFuVX5KCxRTHkhkjHtR7LfKEvMwxbZp7F",
  "key19": "tbyPEqHh2LtNhVk7mAUZA9k7RdcenMqZ4sN76gvfUiqLaQiWJdJtVb9YeifuBcFThL5YFUBwYaSLfvrFPAZwwEZ",
  "key20": "EySviE3x24rrxe8edhKgXVzxEKx1fryUyzBjsybVdGMF1M6g2ax1PjBeKkNT2r52UmXF98zQA6MLcDJshREieeX",
  "key21": "5ThAQfSb258T12gUW572uS3sStd5W4FtnNjVxYEBbTXajL3oxBDnuaNxhB9Vw373UA553x36Bjf5WZqcfz1gQHSz",
  "key22": "4kPAE3qM5LQkq2UfWEEdo4xEvyNXiPwbpiVo7bZaEyAX8EsfE285EWb4FBGzDRPihSJtAf4ctEFQVJmiktEA24Uc",
  "key23": "2Eh87o6qMLdtpxYpJRiPojphbxjE3hyTT44pNWqDQZjXdoUr6Rth1ohKN6dpx4QiKnZi916eiaFdCv1P69c8ocEj",
  "key24": "CLoMfKgEfKJCMvC85kLB7GFCc1WyjRreHuFMaZxUZaeoGkPAEmDC6mdoaWTFS5BjQmFUu3kdMmatbjBoxtoBJy1",
  "key25": "p6itUrqfUbHW9EvgWcwGiuMquUtzGMi6eCX7RiPm23djBCnGE4wA169A8iBmSyAMUoLRp2UZp5XB5ojG4NHcPux",
  "key26": "3ZcFqHxsMZVc7fRPJfkPxVoj2qKoD9WWfEjxHMQzyTTN4uc9bEfeLszFq6V8UpYeps63LkTcbUraqAbm9XJ4Y2xq",
  "key27": "3oZ29tRhYhWT2soFftvhaD78N3JbtXftSy7BgthKJbRV1TmEsRRN8Bzak6eW3UFC7DZ25pMhmMyLE6mvCp7uGgPR",
  "key28": "5HaPX8NgGKWoB15zqKYmkqDq8ReyGVSozm6M5jTQdcGR89fyrLBJF5NHArSqv2yjpamuB6JECMUEKxrS85MeX1zR",
  "key29": "3C6AyfYnE8PuhudsxFHhFKiJKxNtd9drEQMCZKRkXEYHcsjd79dCwmaAr7933cPV1HATDwLSPLgysBB8EswXCwqC",
  "key30": "52SaXLCiWviCPoVLfPkyQWjBNnF3rLZFYubyQmbDMAUcZxJjy2fH4LyKhBDjyUduQX8fvLqiiZjYgR5P8GQCJnwP",
  "key31": "DybDyVj9PXs7QGK6kCYV7Xq6VptTh4C54xv5wMre1osRi9k6Ev5CLtmLxU8CdHseLLPpwk3NvbtFkjeV393fHNs",
  "key32": "79sgjjyGTBYUS7rnFzHrif6vcE1zadB76gEhYSv7svdeoKp67z5ug4eLJUcYes6spB6RgDfSKnQaFsb5Vy4MHtk",
  "key33": "5aWFHbrefoWwERFBnEfAU9dtXREtxYuYeMtUZxfzNs6vqWTW9omFJE6zsqVZsBxqfTwd6DioZuVtJ6wzHQ2Kb4BV",
  "key34": "4TrL2K1EDnfLfePJ2vPVhMaV9JXhKbKqsNa2ELjmgj1uYesQ2izrL1BRWLFTVniyHD55rU2rgmYWknebxvsf7c6U",
  "key35": "2KezAfmUZ8qW6LCbVbcFvtqZAw95pcG51oZyZTYvK3wEkudUvjzFKpzqdpqFmP9Jt5dgZviQXxpecFtQYunLy6uz",
  "key36": "3BdvQ4caVBMawoVXFSx4deKGoTJwzZKpNA7CCv4ex1znhV9rLV39zHfk5JNJEJcVMv6YnFUArXABwsx8s9FiLecB",
  "key37": "4NzZDzEMoAkZRBUn1UM4prcmWsxLYdMU7s7Dexkf4M4Y962PcNcVgsesGka6ruyZqsVZ3L6wRbdL4ti7sykNHu1P",
  "key38": "3CPGe76z371AkSX4c21cvNYZLKxb38iPxVzD1Ps8wokp7PUFsGPHNJTNHyCudyS1AdbYXrsz8uZ5rys6h3hy1KWk",
  "key39": "cf7paTrvyiAGHXsAFQ6eon3EUccPJgbtpWthui3mSx2PE9wVNkU3VZFhPhpij3Jt6RacU8GUjvWJoHrSsqzDRrD",
  "key40": "cxTFFA8eJjk6FKRrMfuTgAE3PteNZwGY8vVqFjdKUhT4AfkWWXnDh5NACzAJDb1sHKbPMntBSteka24xeMKU269",
  "key41": "4YAxqy5wHLKGfyiiLiiie8v3HmV6fKSGuhJm3UnKq4qY5YExLz7QYNo6gTtavJB5rd8JK5M4Mqv1GWXnHtmM7vX4"
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
