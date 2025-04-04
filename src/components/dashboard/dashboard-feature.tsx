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
    "t5wuzNcYHzpXYCMt1RwET9kAThC58oa5kCohZafnUK6LqtDZ3ivQeMF3rQvWLHHEpRTpEy3vHBEV15jnyqjuQbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wzCtx4TfAYmpBuGdxiUT23jwCJe3eKttfSJY9puogsU5nYZJ3bSZpnJW634xJQ4nGMCa2tVxc1cxdVni7yT6R2N",
  "key1": "2JuXomXH7ZR9HLRCtTAm9qKaEjYFn3c963yteZyrLuDde75cVedHuqaQwQykKGQE2VkUq7M8DLmdwhF7cTN6mVjZ",
  "key2": "3QuuuGwbT3k8Rd23K98gvvuZRGQBgGmXiMfi1bfXXRAXSpve8ockwqUXrvvSnE8EkrdvVdUGuPSKKZqt9pBnqMMz",
  "key3": "RQwAEsmGSbCMULjd9M2VcvE67ZViA31Tk7a3DuxYENthmbGFBY3E7rLXD61zfULFfwqk5dXNiDxDtcWTDenzazt",
  "key4": "4U9T9ysDmJN2EcsX8SYyqTyLoMdRHFVcVPSaNoVx4Y2MeZTMoE9bqr9xybbRQdfDKnDQNcRcvoDTwAMQLoH7q7FU",
  "key5": "S1M4uknZkH784xCUzDt7MVQ2wnqiXy2iwiwZc6ZJ1KRc4Cx1A2hkaeBSDLorCaDTVscWAy4PLyP5ubReXAZLnbc",
  "key6": "5YbQMpzFBcH2qdaP16BmGreC4TDkfjStFxzZNXwMsEFJbjJ5szYguauuYNnfjXgnuf8ouFkUD59Ev58ENG4jLj8g",
  "key7": "5e8qD8kZFe5EzQnYbcWEBLazcMUzfdDLxFmwWzdWzxrik3zef4jJmEaSCWYMVbqj4k8aPaoJfa9VSh7w3ZU2Sbrx",
  "key8": "GqCnSRr1Nkbfa1YUS4qa5qKenLu8evBqkoy45MtH3N4ZcPf4kG9Kf2DWW5XbUu3AUoeqj5pZRRbLibUB4VoAqa3",
  "key9": "zrVNrYL4PtFbbLWFpcJZJWCjq1sLXnUjqnJ4J7AQx2Sdni43HBEzZFcFhrfAHTBwxz2RcYSpxuvAg3uTd6cVPrt",
  "key10": "5h1aTf2Wz2u311mF19NF1ACVhfxoEu1mPasdFptNV8UPotyg32EyZXfY2ejvALqCyARWKPx9srM4fsxgyLjhECSN",
  "key11": "2sZ9yxScZYaV9waS4MxphjGdQBEbmRvfBHjmFLs33sANq3cXRB3crS9sqY5T9mN7ZfZFBWLcwXSuBELEnC4NhJY6",
  "key12": "2Ge2gYeQRhUPgPkM7dUcpXSVPdEbYakhNbnpbwQvkijsYaGYNf9oJHZZmrKi3PB7GjmEAX7WEYZF1Bhqbo68aBWg",
  "key13": "YW4wJzGNnB6SCn3WmW1j9NzXX7e2wtdFi9Hj2qH9HX9UrMjGNiyrP2PFGUYWpUN1N4btptgNVdVGW8xMxH2cGuD",
  "key14": "3HvVxZNdVaFxUBZF8G3qdr3BnN3xr5wuJoJAvTeX6oW2Tz9KdDP8uwS9VVngpsJGhfkdentjGJjLP7y8heZc5Gyi",
  "key15": "4CPnC5y4MxjT1YKKsDHPAY1caKjMT155hC14ewTbd7CSPq3VRHnPBp6df9E1wjCA618pURvTUmxREiNBEsUTimNP",
  "key16": "d6hxzG3Vopz6i8D4u4yHpN8xG8mMiERXPnpeMCDJRXVzVmS4CeXYt6oJCWybvUTXAF11WRBiZj62JyFeTxwyLwX",
  "key17": "5NexdfNbTaf4p23wj8DK9Z8fsLTt98Yh3p1McWoMDdQ9txTuEGnbGhhMbnvWECdPvthx3unaWagsCWBp1yRwgmxR",
  "key18": "5pGEoXhX8UDMj5h6P2GbVQE3SuruBB8DqqWn4PYq92ed4kNJbcJCJaTaZ3owvr1swEjSn9iyNUte75q8xhDtDzDx",
  "key19": "nkQaujKPSZkhmtAhnQU1rXeqFpMUYNEKxDTgLqfRYW44659uYLrP2W8xvnSHAAHHjENkjN9sgpHkV1UgyVNnsC4",
  "key20": "5uEcMx7E7AGNY3FMmUEkj6rVtPtkuTuKvewthAxy9yN47c9po54gU8emjmPG5K8anASY2oLKCBSfCW27PLGJYLsn",
  "key21": "4Wcrq5n39TSdXEykj2b1Pzk84wWym6mwSyw48GZejB9RnazE9nZGBK3psk24nFmWoQRB25En9uPATPxi8yDrR4Vu",
  "key22": "P7y3Z8usYKwvnZwBWaWyxACNk3HGTdig99uSSauM6JqCEJ9Y9PVVPMVN8v1h3umrF9o7vcUY2ancVK9YgTzWBkL",
  "key23": "3VM4MbF1jm6pRcU22zSkKQTcCYW7GhkaXAasyyJif9tRrUsNtAtQnFyTWX24vrjQj1Mw4nXZvW9LBUS5mQJtJXAD",
  "key24": "dvvaY3uLeydVToouVvYvhjNYWXCraFmKXXGFTULNRgrcES231GCBZFxYTXCMWwEqXJ5J17MLoTsfemRZFZgKaPv",
  "key25": "njdTt72avieSjYyPE5FtPENR6MUnby2La8qopHs749QDWwG3BUJPH7oe9xfeeA4LJxob9hz7qe2W2YyXdUQHGkn",
  "key26": "3jkAtNfFuH66ciLK18KqvCnP2B7j8Ny7PWU8oS5PGoH16VVmtswmet9XrZdBdn2fZFCtrCPLhCfWUAYZ5SzJJhfH",
  "key27": "2nCsGaB9irvJmn8UYjf7tdVPnYqeNHNFwvRCpyT9MFxSLLqffxPDGTR6yt53mvZVKSkH22PfcQD3T1h8jbVfaokk",
  "key28": "gWNMaSB3oPbUHoAUMju3yJsy5xyhKa6Nvm9TDwtezBvZQ1zb9Ha31pToGeSsXHivJKu3HMJDJE86kjKPf1DcVfp",
  "key29": "2Y9xgghtYySRQDcQimWt9DXzy1xD9q95wBoEzF5vo8URkwcH4cTnT5MWLkepirDwZB3PYtFAo5J4u7CCWjgQ5vQc",
  "key30": "2sM7jBz7Lgst6HyCxXRg2WvdkAUai5NTXHig4y9vTAsaZHexeg2Fq9HC9N1XmXgeReqX8pbzoaTQ128P7p31EdsX",
  "key31": "53H5mizYb5B1dQDkS8TWA8A2grzmyLpp7rcwWVqFdtWNpRNkUPaoGYeA2GaAWAB4aemA7F5fs8h1ZqVgGxmvNZod",
  "key32": "3yDCSRdcoPA3pPxUSmCf3162rDZP1qaso2My8a7V5ag8qRbyjg64PhxiyrULEEjkwLahwDPHNciz9WCN8zEZoJf5",
  "key33": "4YA5z9NjChy6LFq78s7yRGqafCsDgwefeXX6JrDrDdnz6w6rMvdbR7UKG24zoCesdGh66F5uSpBEZZzo6uuomqM1",
  "key34": "5MFXPyyK9fx9QpCk9Ztqrt9Z6WrrB3iKRrDGKAFA67yu8KpYAg7vmFqoagGNScYLwNoJBPupbJZFcTPJH6JuFsvk",
  "key35": "66zbdu9WCNth797qNXJs4xpvg5D7PJHBjT2P2Gpy3XqPBpGpYn8JqUxcT3dXUqfa4e9KUcnP8urqXurv26HvaGuV",
  "key36": "YJueKPAtNLYXeFkFcpvWCwyky72xs9BHzCPby3yxoio1A2faMDUUSTwSC5HEX5fd5oJwuGLrCjZGaS9v2R39yjC",
  "key37": "5zMjFkPRNSQ6KKo6Xe7zTyDuWGzHmd16DBStZV7gW2Ui8ZmnvHVf3PW3et6QFg4jrgVvTTAWrMtkFAu7gcog2Erg",
  "key38": "rvqcjKrEgAn4ipAGqrXrcdjqyJ2SDas8rJtQZSmcUQnWoH4wCq9CZ2yDWXJSksx4d16apDfWXqtRNnx5aW2LA76",
  "key39": "62jouRf1c85wJwnBuRvernzNTjBEDwrjab7hFywxTENGx9n8xa4UtAtKQp3ynsCbnEtmrEbcJedU1ESbq5Fdg6zf",
  "key40": "51DGktbwMkWDB5W4jmcHyLtqZ7ruQNBbrGS6U2CqyMj38pWS2ak56Fk2tQhyVjApoNcWzmCXTA3bTdem8CUiBXPA",
  "key41": "48P6YwvmAUrL83NWRbtDeUVqGRHpuchvFCB71MQpXkmUfqR5XivL1o7oXx5VnYQiV42J7XQ4cGzTwbzg9CURHMVw",
  "key42": "PVRpLUoz1fKkxnevc6rPHYribFdb2sqKmybwv2uDjNRU6i1H7DYXsRvyEcYjbQXw86V5vzx7tZCi1zeSvAz5AvN",
  "key43": "4KUoLTu7LZv9mjWRgufpnztczhUpc5mTr9wiUbWGezZUBVqtNV4trk5NEDuGEMefRU3hgyYF7XX6xAZNBLxEUK5m",
  "key44": "513gzarnN3UZxsw2hxWgwpueszTk4261pCmDg5kMs68NN1rDPH6atnufeEaFRheQWRAmK1gaYcmisytMmCF3LtiJ",
  "key45": "2DSjVW2qpWzvCbHyYEHafGXQr6ASc3PQV29BoU4nw9kSh2saRVt2PXsESrYogGBnVcrJWtgp4SVmFeQ3zLwMEZm7",
  "key46": "2cdDTAZxBXytL9zefwe9JY9o7CLdhUCCwpEJ8GSXENRT99uvHaKYj3Nf3bX1w2Z91hufvXds17PFWQWHzmMvU91d"
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
