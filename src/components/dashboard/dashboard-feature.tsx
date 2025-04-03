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
    "4UdJRSf8wxmyT9x3s3dC6Y3WhoZxBdMEqYXPMJh8AWBhZzwrjmVMqx4gsGZuxPowjEs7arFpw78kr2XMqw2uYu92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QWZ6ufwK6upcbQHP6z95Kix21wKDwsisHH5kykm97pwZXayDa9rpEenAQEDKggsXKfHo2QZMToCks3eLshejMY6",
  "key1": "4tr4tbn1tJyJBVoNYcmrnCf9aFpZuPAUEo7ih5BUZpDQEUfTFyZnDVFqGmd5sJFe3VR9kKoB8swTpAmMBQSjYTP9",
  "key2": "5zfUheZC12DAuHzEepFMsxYwLTnLz8Xr3HKssLWFFbJiFQAt9fM8eZokD9V394QkZz1T26fVCfYMtKM8L85Nj3AX",
  "key3": "5MvoibMaJYWWpMkW1mRpizPEr9hmcRJ3qpdBG6ns2xNqMtSxosjJwYheEE3Wem38AYmiKPeBKhz7pVjAypqB386P",
  "key4": "5pNkuqSWeoMwWZeoAiRwaR7KxEiL8SVA5gUzY6znmSGJG6bSywQ8hf6nea1qSNpCEjqmvhGfn2itMfkwTzpgSLk8",
  "key5": "47tJtnARaYBLpZPP9V5sWtGM9zNuoGf4Yj7kgwZAWifoRvzBWLGorK2Psd8Pm8XLhJHxgpDfHHFzsBUhx9p1TeYZ",
  "key6": "4rePLbDyd1z3oZynsfBQ25UkFpCyYpz39FQSH7Th8y5SiHpUdWZRHQTYFjkATC7trqM1pwFMr9jLFM4pw7ehQSRv",
  "key7": "47uK8gDWYMQnv3YxVvc1srKvM3vtcnLqcqrHPmsiDimCTaeSfs4wPyP4VKgrifQyXKgR13mWdm8eRFZMk6w3b3cr",
  "key8": "5cvttZ5MynYtZ6fxXT9kF6jUNYUX6rHHBNcz9Eph3bi93BBVog4gFwMFGGPq6o7TBnJ7Kzwj1eC19pMqNQnNC6D2",
  "key9": "4yXDsYU7BMVFevYY4KwqApSHDju6cQaR2BE2ER4VBfFnFuTMEwdb87fzRKpBt5Az9DQJ2FfXiaH8x1tzbd9K3e7i",
  "key10": "5zKoxgSpKruc3wz8SPRgrUFvsQHDUk3BRVRghT9M1G3j7ePXj3qQHn8hnvCyyoAJCeznqqDRdXT5QLiZStF2inw6",
  "key11": "55HrEEDLhwTzndZxDEMw1f4MC7NVdnFCUNPWJH47gy9Z7K3oeHtmHERPt3Y9jRXPHhhX4ZhZkZjLvJJ6QuKKSMJr",
  "key12": "4UBZJ7DD1BVe7RuvMTGxKzA567C12BVhDAR4VyRmTwk3KZWB7tb5rqKeKFGVuAaP4vvrD71s4NUPj4hLgEqhaw1V",
  "key13": "5wyY1AoBkxyBK51sNjBh64PPztjgKvVunnVQRaXf29bXpgxgdvxC4MzcyfUrzB48DutmdHMTCDhcCfZUNEh9DFet",
  "key14": "65wdiZAF6XLGUu9kWU4KNwmzNkbj5kPuBTWGYxabHN4Hk6YkhgRLTjaULynPwDn15TWAeF2vqh8ETCCXgBASYzkt",
  "key15": "3fqm7q3AytXzgjchHsU8C18S19RtWQsRnaJuZfmiD9kRXQvwsDjFVkaev4NzHQTtYoNhMqwygk98dPvqL2wpkQFp",
  "key16": "3LHCBa86h7BriKZjxqCy65uExpXDURLRjF9oijoenjpp81KPVrh94KgqtdJMeRwuka94j48HzmcaBcdATBiEzwo8",
  "key17": "nkqxjCrtffioRmFCmCkmN9r4m4kbNtpRWeFFUNPMhxGTU8wGSvs7r9WHTXT2CNtFeMuvfpxqxKvQNCJyUaYsvRH",
  "key18": "3xeKWayS8PTsF8XgL8hcrAX5rmmEvS5Jj69Z6esXRbRoU43Fe7JbXBfantjivjxmUZsNCCYLXW1WAZvczNWE4miE",
  "key19": "2gAJZRA1FwxB7aEqmoSSdjgzX7y1QzN8EqCfydkD6tz4AT4ah3Wvg9gYQwaSf51mdYHwX46DEqeQvoeZFPxthQYj",
  "key20": "ksdqvzLZhwXuRYfkQLLJMxz4jjotjDiEYbBJHAmXezebAWr2ShE44CaHTripeSJf3CTGE3Cvdb2R5XjvunoHvPF",
  "key21": "26ddc5w5mdVWSGgEm2P4MQz1pPqJyQ1T2CAJdQTsE2rdwcTWCiAFGpBjcrRUoMFDamxEQG3bh7FiihgLmCHaVWV2",
  "key22": "5tkpVjCRFhA7Cc3FBXT3NEuWR1SFkD8SPViwxtcAAUn2paZCtm4H2uGPQgYN8qD45uzQt38Agj3x8xbDTkt99cMe",
  "key23": "2uuAPkeBdbZfZLWtDMcNsrziDFG9RM53vfeo8UA3gsDJuiQ38qoYsJEQkaP73TLWd2EncoCMMoUuWiXBFcnAq3Y7",
  "key24": "2MqxYpJMag3ifNUTy4BettrmynpXESmQ36BQMPFouefHKpPrmXDLuDPSU25yBpv8PtuxVKk4A8Ks3fnNqeaVRKx3",
  "key25": "76uN9ibK6B8eVqbGMu4TYoUihA4BMULqBNo7qD4KrS3EkGZ63J1dPJdxE4tdPaDPPH6CWsWcQhdZaK9uR4TCiFU",
  "key26": "p141y9hL247HMnFdERJrbLKax5yHxUTBd2Da4uk7oSiwwoVmVFnz4ELtdVQyTeKWBrPqfqUuBKmH5t5jRbWgYVb",
  "key27": "CWb61ngh7c98GyeRtE35P6Yd6HZxRDXe1Z4oAiuxqm2WrYUk62siEThtYkHGjvCaXJp2VDWLepjXwr5E9izHfVo",
  "key28": "4pSJcXsSrWgqxAw2Vnizw7f1ns91gKwyTev7oaAQLtAW83H3ADjFNBGf6jbVaxgURHSm2wTnqzMicvYmavMX5dwk",
  "key29": "66Qk7mXfd3CRKpm9tkP7fJPhuvogvBEoo7GUVTeMJn1SDAaMUjfppSqPRnyWqjhTojA6735pfipDFErVvCcy8cXE",
  "key30": "58wDd2Z1XhDGkfzFerQrqJoHzKTqGStNz8biZAJ5AvueW5dq8HSxrKdW4w2c1a8hbkHoXtNgteToXbLiBPdUBrsy",
  "key31": "HtBMVoFYkySMs895K6JMM9eLBmHYVRxrB6HXZQqXz2RUPrQ9P6MbwaGWnt6EEfZ6YmEfNHVJsh4rbmarrRqn7Ve",
  "key32": "3JPtvpvEEY7tpA7enFMH3Adu7xPcJE8p9NfRwy5ErLGaE6PfqTttvkHoSfFpv7GLpRZ2UeXXKEj5DrrCQc5CCmyF",
  "key33": "3ZJCih4PGaf3rTBQjADVP3kuAvz9bALKPnVP1pJwS8cRA4wnwRZKN4jKEpXDJL9jW81RLKuXxK7Zrt6i8HbxQFKH",
  "key34": "4w62cJKLz899aRgVm4GJMfx8WBCDQfqsrinmYq3XZ9qSD6s7ULBUDsPxe9pTC3hv2BkjivZDcpS3NJJ8ax8oXNM",
  "key35": "3pZXQMa8fV8VB2AaBqAtMfP5PqDEUkLX3LHNkRVqmYHW737K2o1QnvVPqeeJBESzPBQm9dg6pWaLybiedo65w5xV",
  "key36": "5JkFwXqd8UqdbYLP5jYEP4ekhcPjiPgCNp8qhUGWwxxh9DsahTJhpTPmGVNZYepsZ91AHzxJVtGevnds8rcAZKrz",
  "key37": "3xhUtzKUeZ8KCjBMX3iiexakYyRHhshUgN9UheNSGbP8EUtjRydyRppzLn9GAGXvgRfN9vD44JAbcdePP89ABcwD",
  "key38": "LcDetppVDR7zm4yoHE6oyF3m4Uqhzj2uHG2Z5ud5nVh7fX9iQLJvKH4HuJ31HtfAiS6oZqbu9YRL5CRsjC4hpQh",
  "key39": "5XSpvUvyyicMJ47Ssz8QroPS8YCaPUd4PvLXDgHzDKkphoxi6puEXU7GXdPDgkpLMvoms3DatsniEs9aTTjAAg6Z",
  "key40": "2tz4AzXei5kkqj37MH3YJvz1hNUZhSx6rx3wzPkJ4evu5hhP6MBdLyqYSXNRrsUR7HYxgcTtSW2vYdLGzqcdHjhE",
  "key41": "626Rk9GvmuQhaAyGhoRAPvo93yskCw27Qn18ytUUNYpD7M1MyYd2zM2y6Fzuof7neYDV2GwHtgmKjenijsx3ZJr2",
  "key42": "32qH9EwCieCQ1g8qvEvopohRSbP4ULRPQmB5o1GwQmBfH8CcUVaUfUUF38L6LCVdXRDGGeQMAEVY5NSZbfjZ7o1r",
  "key43": "AwembtbYTcNfK3zXJEmt9bUKYiSgxXMJBvEXFCav6Utohn1GqQf8RDBpuBKUE9Snr1J1ukXWhicYUZSb4Qwrgyz",
  "key44": "4ajrfGVzCVbqD9iQfdn2fYyUm7DvneycRu6M62svZ8aiDjx4gWumGzZag6ZNV77mvQGv7gSfUrhorMa1M9Lg6vNQ",
  "key45": "uRd4BbdGiko3DJdvthMh5fdrQ7emD3uccEqaigGHMsE7RxDjtcJkagu4fUSZteg5vA2WgGcV7415DEAfgwr2Ntx"
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
