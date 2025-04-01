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
    "5DT1whuNFQh85XFV9PtMsGs9GMB8S6BfcZc6DtJwqrCqPVQvDccL68nsruEujpwYpfA8CAnFDwQdk1sdfgxxQr37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4xkoxDYM3DZGLhoSDK7YhQR4fEuafJF1WnMECLyWAWUu1BsQdK69kUtvav5uscGa9Q3DXFpzrhNbMYf5o7FABq",
  "key1": "wNzRU5aeraUq9L8g4jsW34bNeZo6RrNzsXkUF96b8RVTVMY5ahx6joGfQj5GD5DZdpWi6b2dsTAEV9Ypj3eFgJ6",
  "key2": "3MHewncx8BwMGrgSxbKPvVxcpMEZyskcpZX7eHqG7tFtPswmHojVXnxAsjBz6YQmTTTPQ2pWtJFWfhKFz5zvHCxx",
  "key3": "5C6u5pZzkZBUhRZ27huo3TpUgSjaRSr3d4nWM2T1BHRDoQLF3jhZRUqAUWJpNd4Z95SYywQJE2R4zPkhkERW1N88",
  "key4": "4XNZNzM43J2Nwah6jmSjSohz6gc3d676W7zHR24fEHzYodwUsCCe3aLA6TUmfpGWcoWYoXZShcp81PCWGrfF9ggP",
  "key5": "3ED3axPtcNNbeNeHN49tKyEpq5HZgfJvsmCuM8AyXLw4KgFRQoShT3T4Z96xDkyL4VzkYJzmcTfYR8VjAeCY5R8h",
  "key6": "4ugZ2ACscj4Map4bRsHJMvpP21cm3diFsJMsSTamBi3vqfAx3DdRtNZq9R4pJ3v6DUHM6ta126T5pQNd9eqR7QjS",
  "key7": "4jbLS9twiQ33UAk5ojDj4BSiQzkANW4MukWFNY9fjNH49iSeKRkiBMmLsxYgEt57XjdQy6FygkwYAATMjTMSTShj",
  "key8": "23rAeh5xDjGvSkwLshhrHvUW7eUZzRm3n6b3Nykho8pu1aZNDbENMEQ8ZSZLJTUHSdvEs2dbZ6MgM169SEZXreV4",
  "key9": "5TYN1pz53kJwVa1Fz8v8DVJKLf6AdJfXcoxDXhN8deurDa37xopRrxyDgS9rGgsqo4xHRZ8xbcoVCcteiAr16Usf",
  "key10": "3dW4ZUX1JGE5xZLteoVVe6HEYtja7btw4tfr8nhHMFWmUyiVNUzTu5mzNQoviotEYQ31zYBiMkrZdyQREJYXNw6N",
  "key11": "2fWss7HdL2uN4zTdHWXf6NsFXQC23hKhHoLqFADwrWb7kTeyGSo1hThEtpKVhurEsQHo6UaugfiQcRV9pCFYMm3o",
  "key12": "4LUj2Dvhy1BUpWnNfeq6YZN84yEfc6NAJ3c1maCPpH17hJhwpJ7VaaAByQT6uphUaFVUSK23WZT1xwFxxD7cMz1A",
  "key13": "ysvwyEjqF4X95RMESNDZifUUTGcegz7kdDSwjxcqJ6PqWZb2z6duJXmuYWuqoq9zmijd26igYE21URYCszHVjnh",
  "key14": "5BCP355chUmRYZ6zHTWfHKMUjCxbp97Q59pvJSZzPVkhss5WY4pcgnWi4vevrhg9WC6d5qGbgHJgBvn71dYGL2nY",
  "key15": "3m3EtzLJHHMVSggbrAq1VGVAATQopfYHJXmVAqQ9hXz4nSuRisK4Wi96vrBiBRuck837Ca5dkoEkguCGWSqzh2yt",
  "key16": "5WHHz2TnbPctJTZbAZsZ32uTucuT4vfdzEuySWqjLfizzJxin4QPiG1QZehngzEauV6oyUswN6M7ZCv6REN73nUw",
  "key17": "Aj1nhbtUHy8hpwgJUeFZM13bN88hBkrBo2L6PqqbgpWmbPcW7haExttAoTdF3G1zc34G8FztyFUDVnqKXzbtGe4",
  "key18": "4gEQUtSg5kHnPTePM4Rm7KUBy4HhhRhhZ2YnFZKxB6P9eFuLtFPmY1SbrmA7oYjbjiE9LARUcydESirBgD3CnkB5",
  "key19": "CdZyV7veqvFA5JAxYciDQWEgNDW3CS5HUDZNPmpnRRk2JyWwREv2Rne6GbiLcV9xzp8A56LLWVUz7gEUVvMsQoD",
  "key20": "2kT2fKMtJgKqYYtsv4g7Cb15QLMFXks1xnQw57oVGwD6wxY7Uuqw9mg4ns4w2QALVfokHMrcb58sN8zzA6Bp5Hpq",
  "key21": "3nj48mFHmqMq9QcNqWriMPM4HGACMNzRrYbkyxJKBqKacpZYPjmq7S4gPUMtFMvobZZLnGmjAnT9TKB66bHCKDYQ",
  "key22": "2PMndvbrTmkjL4MEkFSkuSDQuMks9HWo2dgvDtw7sDFfKA3qEEjRbiRv2ctoCN7iWwYk2qtkghgqADvQ8NvLVhxV",
  "key23": "2zFankjAFiw9D9fd43hcweSALYFVWYqFg598QCDrHGJFZaJCVNUPEFetYQ57eEQejzUn3nooTQ1BKg3NdryKt935",
  "key24": "4D32aArtRqeSbpEvKyZME4d35zMepCWit5F44iUFQJL61NHi7b62f3ZGSdDdGJHfK5thJqQYCb2rhFsgQ6wk6TNT",
  "key25": "5A9CT7uJ9EpV5zbtj1ohj3Q2vnmPwa3N1U1bGxssro5qC1rsq75T5Y1FpHFhxzJJVzcmdYfGMgWpsbqAwDj1Tba",
  "key26": "5mY9hhcXKHE1AKJGdMPHNPTF22QA5CQdNcb95tXgWbrXS5Qk1eToikvuHkwLqc3M5JNC4tr5ZEBFHuoANtjXjvZP",
  "key27": "2UJjNAbfteTSyxMGk2Y3hMdAB3H7isa338AvMVuquTMY3DwpZ96wLRU1v2s4aBVfegMmXhscqn1Ykd9zFERJZNua",
  "key28": "2YDHXqQ2uACxDwRcsLoqHQgTWqgJjfbpKPKC4ZXFNsWVfYXN3oLP9LtoD9tk2X4LBHJh8SL5DM9XbHN4AVavhp7v",
  "key29": "57Kqwau2igZzA7oMDNHpvTLuD4quRsQByc2oEjWYSqaDqh32kxBFTtCiDWLDnY8sG9dJiZM2XRnTg9aoAG6tEQRT",
  "key30": "34pE9WAihfqqZ4cntofXoPhBiiFfvbDMApcpvwaZ3MbG7qDsrxVT9x1gREpEGnLz2TcuBJ4B9x2GRWuYRFDV1ATM",
  "key31": "5nip4AiqjzGqykELKsb7dS3FwKiESsP6qfqYmMoEmipQduPQk6eRaW9YFrWQd5DBY9C1EUwhBxBvLbrNepe9PoFD",
  "key32": "3Xu3E38Pci7sqjC2Ymp33FheRv39n2K4nuwxRG9eUN8NkXuXvNUhbJPcuySeNX2vWe8zauzm4pZw8jULgmGXRnDk",
  "key33": "6nYjWDRQ7Zxo5kbqnvBhx4P6btUCUAnMJ5p3Eco3SwtN1QRF1sdnTRidB2bR1k3pBk8p36VK6wpAmAcyaLADdNe",
  "key34": "4Dt7q7sR4anbxvMPqzfJgot2YvGQDjHZKDJnuncfrYaRJnuFDgMBmccXCgrV9uDdSZ5m6FvFpVLrZR76pvCrDY7b",
  "key35": "5YRL7a2FWtRLez2nszeG9Ee4m7WTw2hF453jCvDywRVjvJ76sMEGtKZTja33BmQyq8X5mrkN7LxyJszStDTQ2u81",
  "key36": "GvvhkrsaQdkUbmSWYGvuCN6X7N31W65bA9wyeUrdnJ1mygHb2dgE845U4T6S9SNhjcDmLECX5Hn8VJj76XYSoYv",
  "key37": "5qXoQgFxG2n4Th7wtP3GzPC2iyxLFJkKD5Suf6wHFrLg71QYtD5y2HzcDz6t9iPyZEXq8aZg2Vmw5pNsMgnHZoMe",
  "key38": "34unQ74w3E2w6enZydmVCKBV3dqfj8Y8bhf9xRPVdHkmzxSVqB3Vb51afdri1fqFWvyPLHfVJ3PAW3viM5Jybvmc",
  "key39": "5vFPNUMxDx98w8LWUqr1juxMrXbawdZRG1xC1NZ1pkMePSU9s3FXLHEi9Syb1zuWc625piRKZDrWHVVjURb82aV1",
  "key40": "26MxnGuZxcTTTApL5cah1B7qBkddEhSjYK6xNBHXrkLfAkh55u41iPybb3dJEUAXDkuHiGSNdiaJgBznkLvUjup8",
  "key41": "s4YQ8SfSA3GHPoJ4afpeRGKqFGSSx5QEtag5p4gdqYLRPyAmioAgsRQKEPccphctHSEEy9noPvsDU6qMtJmarMG",
  "key42": "5hSta35hscWbhLQBqE5mcPoy6Z5UJSzNUPyxDJXKVgGufYoFEixYz6cuFWgGDu4H5bfBNwU72vq66W18xbnGMSxb",
  "key43": "2sL8FDy8hST4kTRy8gZRQCDfm9msAXrgyo9aK8iMhkUC4F3xdoi68Zz2Q6fmtduUVNMDrpMF9rQQGeZtDikuTJVg",
  "key44": "5KHdgCGaGKCLhF1rYwtApEq6gDDzpTYMSSYXbvSAznoboTLiiQn2muon68UxT96mmgJRF18aqhGWNFhvfAiZ1yLy",
  "key45": "4G8oddNaLcK1w4BTaC8fkVHUi4N9KcX1A1cwvJK2g8eBFps6dLGpKETjhPCpRzzk3qcM5jPtSmyJ5fdKswQMTYLt",
  "key46": "3LJMDHi37qXyj3k5hvMpZf2bfWRM4y6ToubZ5djJSgVccVunhHi9BkmidQiRoDm7zrFHEfPbvmVUcsPhvbRg5Byu",
  "key47": "633mLPFsnn7pbueh2V9qL9j6XXuw11n2r8bTmHXubekyJyCV7AoqoAG5p17DhYp3LFwYXmHg3ve2FxFhYKvBZSrJ"
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
