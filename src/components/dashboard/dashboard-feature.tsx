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
    "56pkYWVsfM4YVn9UREaiyd4ELSvD1GQ3ervNGa4yseBxD4NX6jFYBiRcPSbNP4vHQMmycUyXaF67j6PDhVS5VCPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WMsPnfx4zmstqeVEt3zR9KPoar8DZw4SgRxx2VpLUeo6YD21Zw3hRtV5Pazz5Hx7Rapjd7g3zNJhZgy8MMMuvdd",
  "key1": "3zA1nwGw8NWCtz9DU1m48N67n1LpTFnS5jxUaPQkGAUm5pPPxpHT9nBsBPiKVBehYshP3pax9pzU72752p5fMZKf",
  "key2": "3qXhtW81Qi3KjzCzYc9y7JVvHsNR8NAabGpQPGTYAZu1uCWmXUvmrpguNQcvCjRS1LUTWjLauirJAs6PtA798XHW",
  "key3": "3zkrZEBYVLy48wsRHdvvqCKUMoHQydqYgSXUQ9ELEr4PCbYhD7EaGS7ayEsX7tTb4mcRbKyg6f76T6Jfs61b3wnL",
  "key4": "3yDPo5cLDGwVuyADHuVDfVruPPVjBLcYxT4Jiz9eCg6c9ESu6CAGVQfyzrkzTWZNRQd4JxBNmbZou5ESX2nJnvSZ",
  "key5": "4B6JZUAGSPSDZN3aBGAUQK6ghsMvYQUZhAgQuoBWaNnt1wH9xF51EouwopH51yJDq1khsbXZPDjafmiczXCHDmX7",
  "key6": "21o6CjSC45DxTKcsmycPZGwfPGVD1QWC1rgFZtgNsyEfeySCKbL2yUaqR2CgqJAjHWEvVWYNxugR3H8vs4TMHWX8",
  "key7": "2QX6p5r3L2ijGejYcYwEy1pjKjQgwcGpusrVLv4pCp6ryJ5uXXvqBBvCBVGPgHWgAFmNWQZnEhYS85DbhJrndS5B",
  "key8": "27BXFu3kdEJDFASMirbbRMbnN4n9qM4hFzZVJHovrDKuoZDBaA5YtXw1xv5YQFuhLNkhVj3upfFBgRxg1MEGAdJJ",
  "key9": "5Z3mmw3qKtuM2PqMtYRWJwkAsF2Ux6Wnna9y1haHVjZCFK6oKQcHmeyxbnYP2xhJXDAJh1cZqFZ4LNPR6KNuu9PC",
  "key10": "5mReaLk2AMQZi4PJk18PBdkTnsEieug6EgmBYpdNLKbiJm1qxnVCd2NA2UUTGuvy9HNA8n1kEqswYJXn4iFyPhii",
  "key11": "5sT8MZAXzo9iVhFT7cqU7fmefJfguLVvBrzdAz2SumG8eiYjv529wjqkNn9XbGeUAHeBN92BJgvY69wuiWYUR57f",
  "key12": "3tN323ScZLgJe9Fd7ko6RWVqEXRVGFSsSD2hWt48wfFxwkh39MbPjDMjx3DUYKSJZVfNRrSp9kZMxu1H4T1iJ19d",
  "key13": "2NvkYfvipszo7Zgvk5JZE8YfVrk65uf2t9ydbLPcNPtqYJpgzVU2LXs1wvs7e4fcoUdHbduuku3bmMJUjgpfF5Gy",
  "key14": "3LfWxom7PuguGY6A6vHbN7LfRSV89YLoh6qvvkvb5fqey12NVhgSFdEvvh76njwTBciodbMpkn46XBaZzWe9X9oq",
  "key15": "3YPyH3pZ6rNnVbs6g2qCqizcpCbWatf3LAKH5sTEZZkitzkYLVgpjmwVaT9XYDwH4j3ukfqBEAKFAeFSZ9KxMrGG",
  "key16": "5VgdVS7fcqfpDJnAwYhaXEiivU9dFYcjcYfEaTVETSBjpSjiHfE5UDzeSw3g3VFhrurM4wCXeFJvFagxQrSAuNfr",
  "key17": "4iRbP95UYptqxZk1Cu2WrvZsf3m9kM83yuFwRkfRu7FXY5SYh5cRc6fJZr7Td3p2kdRxUdfiC9TjBqGLhCwg3WV7",
  "key18": "3NeEwLrZ6WYUTcJQggFXbDkE2RJpX4qq7SB6QokLmZQr7WXha6tqKiHHkCydAzPahQgzSUnApZ59986mfEAHie6c",
  "key19": "3ZRkqV9KVrWAUr3aXpDZRaChEqWT7M4H8jBQpRqx8Wd53FqivthSoJLhmsCDzFV4keAtYtNut58m8cedVMrDN7aM",
  "key20": "xNkR2LqiH6GtFbiwKnrceRxyVnJhvZsQo6VWPkMiKwagEb5oPbDWDE7CprJv6PK7ShVnVMyNgRPc31GZhAnwKqT",
  "key21": "5yykn5qoPySW9ym8bFxt7xUUCSKq7LgyP2LuzW5FwJhi73rU3wZH4JZCXaLYWbFApEytp9UDYjNVujfRLKtjBNBV",
  "key22": "5yVMDVCu4nYPD1PJao1smDY8o5dcEs2c9cnEoqcNNCCv818cBnUyvD1HavUQniZkA1rnUmYtzNJ4zAtFr8fZxECv",
  "key23": "woyamk4BjGz9j39VBjMPZCdAPevjFxJ7xLXMVg6yNVC7TfeMKcFtph6KxjokYvLRwJj6a6kQSPybtvtPpkZTEzH",
  "key24": "2LiDCARonE5LjqWaumLuPi7PNyFJ43XuQEjjuJvsiJ5kRX1jizmPCbm71zwXdJLie1hq8rC5Xsh6gn6edMQF7cJL",
  "key25": "4M7VZJJeQgq2kfZU8jqE4n88db5oju3Ph4gTA8qXnFGh5g8CjgZQwZsnJwHyTZTFz8tRHFyLCYuJwo9w5hRYJA7B",
  "key26": "2sAnLC4f5K2HGpJSXAPLnv9cFEjHWNXFDboCnkaYVCpNBq8kWkwZw6DdAYnHJC1CM1uzj9ei9CV5A6NDkHUqwART",
  "key27": "5d7iyztpwsUPb711QhVnEqTeVJTmXgriLYvio2XjP5gD38VhpQLrjLsQkhfTGJeQ7GpQdVNUVJvMLQenhsrLEqw5",
  "key28": "3JyMDtXTqNaAXXmNAj1iGCbWYPfx2mWuUbu8NfTcES5Y8nAyu8diXPYR7ThXQmgCr8f1cDeaZUxdQoTopBtrem41",
  "key29": "WiEb8GFFkTnxMWT7RRAGvwWgjD5JUNEoujGu11oAaAGG8JQ7Ck3V1QAAJdnwe2Fo6KvmuxhQWYAX6ks68QyxofF",
  "key30": "3Tm4L7VnxWzRDLXQ1NJLrBWrySotXw1aXHGzLfAqGEjAarYYvY18v47oMd4Rr1PcPvv7hJigZodpxTikZky3GC76",
  "key31": "3z8tKpfKZYiX2YAuDWnFzV26tG5siWhf7baNGRzBukFdAJcpbNpKWk85d9wBPWfnC8UmgHAWSoqSdXnMX6GYQo6a",
  "key32": "3bgCpKuATK8LCQpmGihj2dxgyf1TpTihCMVPMsVwSv6oaqj4YGTffg9upJRvumiRnS6ScF89ATHeSYCfNHpLMLm5",
  "key33": "e74YhbdmEW4L3B83DvaMXAWE4KBx56mc2rtC5h8PyTrjNXK6LMg1SNg9EJt8ihBjwMqDYKgKkXnhTNDKDcUuF7S",
  "key34": "4dmpHLbPuKkpik4yJTygQxMZxXtW5b3HqywbYEphv63Q9m5tF1n5egNge36gkoS8bu1WVG7UG7sFh9eEPvZGqF5T",
  "key35": "nSdFjLsQz2VzXWZH2EDqRHVgToearrtHuCnG6GpsxiGb3Ksr4H79TJPy9KxdGcVdvN5NYkgC5oUDongwv8BvJyq",
  "key36": "3wdJTQFpBF8GxZSG9QJ3Ma7deDfewiDnhrtRh9awM8K7vMStLZm47TaMY7ayeKvyARVdCsXxXLpe5gVx8ujVLLsh",
  "key37": "2fhrbGMpqk1D4EXJN87iw4UE7c6XGZVvCLC8WFTYQqu5UybuZbNqGBsCR175T79mH6spzWmHHGoRpN2cUjkRBMr",
  "key38": "4GXajK299vUVyXBiTNfKpZyzHpCnYLRmpvEeK7NuzmiocVinvRZzN4NTH2HoNzkd4S2n4MgujD9ucmtpWw4wFYmT",
  "key39": "2VWSqhAZXhEVCe4MQKH7zN1tKcsJVTok9AkHrxArvjpo5cJ7sWCC3xYQontxoWNrkcybeeCF2ngBPfZ2B7DEBkrg",
  "key40": "5Syc2zFNshNQ2bTdKyi1zqqAn6ExXMM5LJHw1Uyi9tSmDkBc3oVVmPnRT8676kJeZ7YpaLRtwF7VjhEgerrzusUf",
  "key41": "rwKuP7XJfXott8t9EaovXGn3rcjWyrp3R5YPYPXeH5Vhfi9odJVBWs95rUyTESg961Ei88P51Q6F9JS8PH7zh6Y",
  "key42": "55a1S3zrTwLRyYqv7tLk2c99PU6tCcDChv96jbxs6auDScvMrb1pqsrjqEnmqu2xrjhTJMYke9C8Va9y7k7ep6hz",
  "key43": "66La2Z7YnarLjAYVqGwq4wQyLYHo6nKsQaS2zvGVnJQke9C7vHDnvUtwrThN86S5KH2Fdx3siLZUQ8CfiNhpbdiR",
  "key44": "3xznof38vHrG61RNoBkvfss9VCDqs14m2MHuDVT3EuCXAaXsoHJd4S3tss4cywyypuriwvVBiCgmviD4GDGYykv4",
  "key45": "5W98LJCt3LkTke2VwsCtudEQrvSoEoS62eHqHgnJ9jydmuGSS7hknudGPngURo3XvGTrMeCgqfzDAqA2ZTFfCkKF",
  "key46": "QNzQvKisrhcsaQGcXmrqpMbjbBewcy13XpHAoXoTu5MBcYqwesXq2vCLtVUDWsDzou3eLCGsAinpESCcWQH3F1Y",
  "key47": "3E6cpN29utnB2AaR8U6TrGpGK8jfT3WiECHDMX8SP49toa4SLnHE9KaUno4yuMxfGSeBErcbH7UadEryR8Lxris6"
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
