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
    "2BFWACXt7oMaYe7MfPLTUeoD2UC2kg1MoQEaC9wGPDjMEipuRsMYVdGncS1b5HiNV6y6Fq9zAX7apuT6ZhxzqjdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JA5J6DicafhyNN4LMqhLoDiKPPdarwaeBvA9yrV72v7J34ZhaecGrjpdUzxYCLkUJh77qjEGkojmWGh4XU5jLdb",
  "key1": "8fF4RkSWFpWiuEiHs8TZZd5p9TtgjR7fV8CifHJZqoysPV336zo1CBE9c1kAuJ1DhNHATjcHMndcfaWuyB9nsKM",
  "key2": "32i1QNmXPwPdZbmrCpXyX3SYkND2gkYrzDmEDRk47yLWa7unfQQif7NrNHXMTVAAUFbRqGPaMjcR5Jkf4dXLsQKN",
  "key3": "5roatUMR9kunds7b4VzZR1nXJqAsWPp1RiwVMz38T576hzPQ5rpn3LkdBxgg2HEvhNWFQB42KzUYGqGuKyvjN1Kd",
  "key4": "1EmjTH2c6kMRMbnZp77L4fRZg8aSr6ZFoqa41AwMofg2uxaHzPcxJzXsVuAL9aLbgdaT3Kx7ELvMuEERnQoHniZ",
  "key5": "4fJqJUPcy6XSAdudwQCdkQq6ncAjsayrssBbNW7nSiBPyzDrueB5h9WtVi4chV5UFupnPWspCuMMcVBtBAxtEE5n",
  "key6": "1g9vimqHbrw5vsm659ZCiGYkdRgvYRUh6jsb1z457oFYxbWfN9TPtuYY1VE5SGnJWALtcAAinJeD413LrDQhUis",
  "key7": "5dcNyMdrjhupg5QEfZqgZazeZTLnd6Qi8sLGVEw4iGGcxvcnTNHsNNrwmiBVTRQnuu7aKY8MzRX5cXjiatpwxm9i",
  "key8": "3pXExvG5N1Q1yQD5qHnN6vtwnRY2DYbZbP786X4PcWMmr4BDf1HfUbEMDhmtiMW8pRWiQ6P61FvwCuVjXGg5MJMa",
  "key9": "2VKwY12EwHBpa4MqgXg3HZE9tzTWdk8FzmJL2YLjzk2dYvwRGmdTz43RJr6u5PhXowR1BDWmVZLsBBpkYB5K5ohm",
  "key10": "3Ujw1MqffQpTJ337JkXdEpnYfHNFfugeqYufn8zdS1qdbrzx4U5kiTcSFZ8ge3D571gKcLktPRy8aUxKAf4qp8xk",
  "key11": "59scsArz9gmPZ1a1PNeE1tDZHTfvKSXjKsBPhpxEfr3d8U1UQGbZ4rwp4Y1VitgVUEfY5XTEB2H1zPd4ztJf5bYq",
  "key12": "3XDEaLtZeG5eaxMvfKPposK97wrH9fK2v8s9LtELdgS7U49YFKYJcmRWdn8G2JvZ5zh4RPyFFRoSgwzRiU4rrnwF",
  "key13": "LY4eKczhMR37gN4GuWmXMAWWRoojMinafShRFqMmgtk5uDfFL2XxiJiMwGzJeVPUyorbSpRKRMSfdwDx9NLwfuP",
  "key14": "BxqVEvXnzcbsYZRHn5How2aKRTrFLjFNYDPXhDHVkNBAKoaHxAfrAZnDMhLtwMvEof77ipFwmMYhNzsgBGqGeqL",
  "key15": "2uYUjFxmecUY5iCBNFstRMyXGiqx9X2a32PqFrgHYuNNcYnse2darkGSogZEUNkAkoAzmQ11A1rHdVrZD6ivJNVn",
  "key16": "2T27aEUJzXbEVSvtaaC5kgwmntke9dytEUais8HtdEyzbWdf2kFW9ax2VXr5Lhyu7DsUNL4SSdBSGwrRbrFdXtge",
  "key17": "44eWdPScd58SXvhoAr8MnFaz2MB5KCLhsCVE7orhDip7zNUYF96fijfvrRsQZ1vRkFC9CkmXXTMhdLYLM29QL8Ci",
  "key18": "44hoh3PzsCNqZktwvTMV6mFcBvhBUtG2HTSUTL7dnxDVLs6DG7wRKrYs7Wc3YRYVKE93p2sHNTbu4SinKTu1TcBX",
  "key19": "44feYk8WVQZMwjFfeQV7bBHVRpK7Apc9wTrVwFeSKUHgSazbwXS46kZ7nEZyhZpXwXUcwCpxRu4i6aPYBjzVhrsS",
  "key20": "pXBin6DtVYocfPwa6Keqg6xsbWmG4UEzUw4h5QGXKLaAj8WExdCfUxQTtEhVjEy43gPGe6VQZQM8ChTJbEY1SAU",
  "key21": "dwfifxeCwoaDjhKUZxAJxCnsD9xgfR8oWdAKL7JZNSGKpZvo6X6CoJG8nhcuaZPs6wSA2TGBbjRjzwwCxnaGEeD",
  "key22": "4DopjasdBeFabkLUmWkrSeAn3bUtvG6FUq5E2aTDVqyABq36x8Vjq7ALhgfjMtE3PD6RgAT1VwdmMHkqPiU6ffJr",
  "key23": "xHELeqGszC5qyiZzUjzvYE9uqTGJ6jsbqDKm84G4TQr8aTx15YP4bvCK9rSUTGyhLCdQNoaRcfXcwGSQtzY8iys",
  "key24": "3aHQpZSphw9tL5s5Ecc6cM7qcpSMajmzh7nF23wVzQAgg9oEV4X3eQwo3DhfjkLTdrLWa8tMJYJZxLhtXMtaVuzU",
  "key25": "4vBqDHf8zRJ711Dcsc898KHKthDj9JMyGxrnhur5dT6S69vsE9wKySzJswJAoKYe9Le7M537pDSioFsFf1qQLwZM",
  "key26": "4sWEJj78sfzFo5oXkWiAXUaWY6FoqA7uK2jEaUhgqLRkFoDmeyAtgb8wiD8sUXEpBGXTNiHX7zg1WZNerDyK9NvU",
  "key27": "5sQaLXETquqtu3PaAAhifVoPDkhu1WPMrB6LjBrsygNUmMSkzWDFDcPUBSrWkcHVnAj9CmKG4k8gAZb5b6U8DCDF",
  "key28": "3m69BsVDyGFsvp7SzHg8YFNfwYNPZLWgkmWiApmLyUdBjT8krZvU8bVkHrMbXrC8kLsn5a5gB8W6Vq8Y57hdh18N",
  "key29": "7NV6UMKv6zSJwL23nmjExpEfv1NrQKezNcWtCahS1EQdBNMEq56XtvMV3Q5biUZq46vuAR68V73yhwtDc6zWcUt",
  "key30": "BrLtAnphAsTwoCjPwtKoCu2vGW6v35KLyjxVCdA6V2Fho47Q24pGpNRLGtmCxmY98TCXcKRnLGTSjoHhqXKpdPx",
  "key31": "65MM3Yfx45N4duYjpm2mgCiQvYXNdtdSepx7n65ekkqQtRxAAcKty2U53WLBB8611Rp9pgycXpLnWL57PeLTvQAV",
  "key32": "2A4bzgw7gbiekRQg3umkX1z5TNAjMgFmYgwG1c4au14UV38k8MG4uU9o1PDfsLsbt7v1g15gCMr1pNva3wtVoso4",
  "key33": "PjxQbQQnP5c6eTw4j7a7fk5AjMb3n6fqZRX7N6njEjctksFqF52i9voX1M2cgfN7EVwRt2eK6wNJaGNJp8Z7dXW",
  "key34": "3dF7gVNEmzeKmK5dZC9bNKytfKQecMoiuPRoUXiuheAmYru3d1EN33LRC7LWduZhDWckj3duG9KB5vTQnuzZQ9rB",
  "key35": "iVEeGLfu1n3EByfSXAFuYahTJxRwrHtsbXfqq5BXM53p28WEcECSbrK8ehKuetfCMiQGAggFAtbBWtHtabWUvE5",
  "key36": "9ioroH3oyXUF11uqE6fnmebMbHHNRP1Zwhkrj6NMb9Hx4kq294cP7qUjVPkjMu85Htmbr1nFFCPQWyhawUnB9kP",
  "key37": "hbfS9UPM8SVZcApmzwYtTGTnERhmdZoQTQAL51KMinZKJgThKvwaSiChZ7yhYx7WLv3hMznkrEPMTggk1r7hNYv",
  "key38": "2iPmQiFdq3fZjyN3qK6xjRxUMSUZhmCJep5Lc559d6UJN4wEW92zvCMzA5fGbvTDbotU8ZAFcY32bkq8vWnyknqL",
  "key39": "AgxNvX245yjBBsSAiF49tSiiMejigB7XK2wPrRUV9CNETVhurWyZVCsvP1xJrfcE4Wa7Fv3KoAH3qHsizKdebzg",
  "key40": "a1Eeo4it7BGbojZdEqc14W1D4fVHTx1S1QbKwEW79jkmoB52CF1ie5fHAWSfebUBHfcJrHjpQz33TbGBKzVveVr",
  "key41": "5pMg1k5e4HUvQ7q1a2XE5gZkVVTWjGchEVm4XpJn7rhNyN67aKhyMDgxNF9XyiYXkurAzhWS1Vpv6LT9VxR9HvkY",
  "key42": "7athqqAajnJ5BoAgYcQZYXK8DcW5zTbHAqWSZ7h3Fs54fysDTCoZLvwTbpENiBxmcMR8yJ7hrQAPDGfzADJMY28",
  "key43": "MPwoW8PoLWWoMXFc9E8CQVMFmj9bqe58YQCTr1wfVWk8dK2E1ZKt9MRmASSpT4kaB2MkdG24gsEtT9NYsSsrcL9",
  "key44": "evVtn7xMDnbn8osjNVe2DrkBKEtuN6WVfHe1AXPR4iQu6Qd73yij549wQnCuvEkkSTLektZH7BaAKhdBJRf7b6w",
  "key45": "5VaVRy8XMHZXoemF3gEMW62JhAMYLdzH3fkxQj8MrCGRpsvV3Kiriejy9HpV38iXaEd8JFe3J8iMdEUWf5rP5PvF"
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
