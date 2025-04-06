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
    "5MM69FLEn81MDCsVnWmgNToLc9mfzU8E568rTJiejGzcMBpvpxbtNxzReeUvw6HEayUZfUAm8Qr3pmjL8C6DuYm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QnNpR36BCrs7f4EoRGuK4AZmpqvQL8eVoz2Esob8aouM9ijXP9FYXKSgri5ecLNtvqtPc9QizUim4mqgjH8Ca3i",
  "key1": "2Gqh8fvnqQuH3qy8Xi8jw5DLsWUb6mmTpiNbr4GFZdq2azENx58gVj397qxgyzKjZixP51qrMkCq6vK5AMNSZ65k",
  "key2": "4MWk1axALCmh4Aq34kn5MiwPWm5BmgkJUc9YceZvj9rpThhe25kQzTDwnMPWv4xNQkg2dX3C83wBzWWbGE6XmqCk",
  "key3": "4B28P3eQYR1z9aBkYR2AG7LmaLzPRSN8ScvH8XrcnhPXcNj4FTRiDMu9PcppSc3eWHmgC5jX4U9oDsdPNdi9M3Uh",
  "key4": "4M5kSp9B6DyZ76vFfZ4JEghfhKfV89VfDwoBa6mZPR4YgEGD7ksbZqQJgTWvuFicr5px45HihDapdZCaoECjobF9",
  "key5": "wEph7pxuHN8rizDyLZZtWXMjmiuLRq36pTGn1HjZbhXa7d8B1YP7B9Ny7MzwqY97VEMrms6npWtw7yhcTJkTikV",
  "key6": "2JMy7oeo6euaFnmaxztZnU4rr2ceFJ3Cxc1YiaohDKav3rJ2ozEgJSbfCiPSV9RCQ6jSXYzCcSFHQGY52B3HU71U",
  "key7": "zbwUSEN3fkkdpDiPsfHFt7mh2Hn61THLGZ6FywKP7kBsTDzA6UtEXn87NwJYz1h7ZDi35qSEb7RXNy5Qtx2EksH",
  "key8": "4btoV4XST4UzR6kJ9LDgCkdQyzMPpgkaC4dmDwhbwS85d5aA5cRvLE9NjiJwUU8FCMmqXVgVSiH1D2dgKAxKL6Rx",
  "key9": "3hQhkDdXP9uyXw9u6SpVBzJrwwMpq69dHH8ryfNiv5YRWVBegKAi5dj3DcmzjwMupUvkUezgt2kYtYTxhTx3ygqE",
  "key10": "31Uev9iSrSdtnPBrUukP3XfS4BxsnZvznJ1dr23yB61h9qQU1yjRoXtFs6GgMjFEjgAQ6XeceV2Q4yNKeBBpYG3H",
  "key11": "4rtf8Lqis4hCN3CnxvQPHhxhWw7xeFpSioEa8PqU2MBJLRra3zkdpbs427J9z96vJVPyXCCffEfcG5ZDVbT3BJyg",
  "key12": "6368NjZaFHkDZevWvVpu86dNY84MXU3MTynh2Az4V13CA7AkN5TRgdycm11geLW8qehddWPqwgcUvmh9GUAgw9gx",
  "key13": "4gnhUrC6XB23AtMpBKuM26Eich1De2owf6Hp3eg1AVxSo6UkXHy9hLNJGuN5gG9LCTsYmbz4HR9PpnptN34haFXx",
  "key14": "5KAHnfHgg2CTi5ZYFnwMxzCGpQHe3jo1DTWvaYwmUhYpRJ5Ca2UwD1EyX5Ucp89uadR5DDi8QurKfdrXHQLyKiR6",
  "key15": "3YRaVeKZjvy4bsDvqJLCbXBt5cdY129pmXpqEJqB5qHbpEZ266M4baZ1XJJPUbpGRH5F54q3STMaJ4deCT3HKqcZ",
  "key16": "3HG9Di1gjH4ncNgt2GRAY2CTAoVwJrDNTB515sPKWMC7hooZkMWeiyHc6NHfdJZ5dSGPtUEKxhSGJCazSGNWieaf",
  "key17": "ZYS1VdwWXcgyS7XGjs2kTRkrVsLrt7RwZukCBZLzRuUZrUkhPUJMTsofEz9E6NAS8WubNBXy797bC3a1DUb5CdF",
  "key18": "38S29Yjno7n6tLQSH5UKKvMJLfagc71ffZGjYKdow77LU9o83FHjJv7Eg1YxobLyXwC4KBf2xkWQCLReZSnquAH2",
  "key19": "2UBnc3xFn7zmXmDco5wSh6YnKqi11ZQbFHyzTHnj4W3XtMes4VsF3KnomiFsQaqN6yAJWxTxEqfkwwPmF3KaCGSK",
  "key20": "5FswQ3dgjrWamKMyAVeVdWJyAY2hMCvppoEhsX2YGPkKaqDjZco6XyCeB7LK8vBRTeDBqP2LokAV3FqxbJaDsD4z",
  "key21": "4KV4kWXV4Uda5hteM6tCXhcSHMg1xAurLr43iNZ8JykrZhXYfgJ8s9EDpdkhUdxq6GjhwwkqB63G4TiwmYerf5N1",
  "key22": "4CradxUJrA6WHHSKftFFfaYPtGhe8b6m4qjMMVNkAokP7mVDkJV171AkTrbZkT7PfVyR4iZwQ8rdwuxp9CXd588S",
  "key23": "4bgYvQi4nWikvyXLYNS3J43SENFiL23DG94kxct79Rw6t1xUQUkgLTwtBomD9qZNKWwh38jsWwpuyWNe2q8nbztP",
  "key24": "3nN3rP7ABqDWbjXNSBnqEUb2KcvH5c5XJ4Vdss7wuQPYNN9rXJxkbYroAdM2G1P6FgJ48hVdNZL3sGUE6Z1eGkEb",
  "key25": "Bg7Q1Jt3WNi7qa17dadAiVwd65dUoFontwoCqNRCR5PswLoYahNUK2dWiJL61Q934EG9ryyvsKvcHF9bHHKMEin",
  "key26": "3x89spQnUCKPRp9Tu4NdoTF63MP1h18ZmJnCihaMEmJbspYPPUtvfBwmpAhWDWBVnKCZej2LcGPCx1JRduAmw8KH",
  "key27": "2YDz6piF3weTA6eygryyiZyWUbDDudkSW3HySm4ZX2RJ5H5zqYwpw1GRJqNF6ADQUNPxVpQTyB4WB1j4cLNXHtEv",
  "key28": "4AxR2v55y6HQBY6q7mw8cdDeAVC36QPB6mSwftUaV33583qPmcUx1jDXLvMFY2Zem4SqYqwfz5wqjUAKvEnK3ZhE",
  "key29": "4ry8w5HbNZvw1VShSi8Ef9bbbQwrHHqj3FGfmPU5Gwr8UpRPCHhbs9wupqXekP4VbwyjE3rHymoCjEBbUboQCgxN",
  "key30": "4drFtz2TioybGreCerZDHbq19kjAK7EiwLk6a3RwuvjKL2Rku48SNy4Pu8s85vstJuWsacbQR4vfWZA95DuBitqT",
  "key31": "4MSjzS6G5jRV5CVyhsin4tLV13ououU6DGpZtFc3HRdozHV1Fqtcbpg5mCdj1TC7JNppQPGzhcngk5oxdBCrCkSJ",
  "key32": "67n9WENq5VHM8kp7FEEYdtWMDjwGU2PTwP1dY2Dg881yaekDDwGYRLa1a9UXsgSWB22VEXauxdh2qpGv6AC2yuxR",
  "key33": "4xwURxee3CsYMbnMhKFAyBbnWf4geC5DfiG33yWqEdH1XDmy4nogNz8uGmEVCFWWReWEF7dsgvVxD4m3c1cprGkU",
  "key34": "4wMis4BQeXatsKV9RBsX4RD2mJL3jckH54pj2sTjnjkdvvuqxsTGf2uNDHRUVL6zisij2UTyDaFmfBvrBYq2JCV6",
  "key35": "34dULHsTebjggNmQuGK7LZLgNhzfhzjKf6j1b79SLAzBwrPsdjrkS8tVtWKNqEGon1yjshDfyDb7Z6KQc2TUfue5",
  "key36": "46EN7MXzHMgE526S5U6Wr519btTUv3wk2y7fom1iEWZUKfb1yv3CkVA7autsKTzPdCvDnC6qwUSiS1jAhmCHsax2",
  "key37": "4KYZfkR3Lhryn9ep4CEmYDYH4vbN8BapAtioEoLPgMQSSFyGUf3aEevWgcnZPnXcaP1L27Z4XpEzd2esM7yCxqAB",
  "key38": "2SAF9V96arF98K3VBwzBtQRFUsJcSKkFjaGFNCftdCRepQy85KVA3wUuqW2DR9aZ5oT6aTfPd2DeMHZC9eJvK7ud",
  "key39": "2UdGgAjRkkwGJro8YBeVjGzkiDCzZRPyNN2WHGRErKJu1PZWJQWLngTgfukrJWqmAeuMxYcnuWqVHhg6D57S2txG",
  "key40": "QBySA7vvT7W8c36bhX1obGx8kmEvCntkRodBkcrPisqKpUZFcw6b5syiCNkJ2gsxuAkns2hAJgvL5nqt2P7PJo2",
  "key41": "4BHU9PrT4frx4TBJMeuD9xpTKWVWmg2qd2wsXHgpLLkjMiUXMAvoBYCrxV9RTc4zAnMCdAXUZHTAzd2arr1sEp3A",
  "key42": "2hFgJ9f4iDot3prDH8XjCRirfu8iTC9XNfUoK3rCnVERtJzoTuwAj5XAcspF4Fgs22nzfVpQRdicewzPhNAF5myS",
  "key43": "4b3C2PyiQcHjzfSniuuZQm414Jj2wumtFcLpcrx9qYDcrnaT1eCXjRDtVaKziyJCG3cQVaSh3PqcEBrXs6ReDuMq",
  "key44": "59c8GwLcLdPGrSeydcBqfTdcfKAGQEmFgeiHchuX79veZL62UuNHkkALGsybSMbCWp3FKoSQ4aGqriTxZnNwntEz",
  "key45": "2VYo7tCxN3VhniP4U7afgAXALuLPp2Vm9HwekuQAJYgmgi917WaVru48xGzPZNkaReLSi1nRAD2NAxMumunQjGTh",
  "key46": "5FE5NaZEntf5VnDm2gxQYy2Leo1ssooC7ALSeZgHnEFgvSWmCWMBsggcgG8oYiMiBX1QSa7knHMg5e2uvF75gQJQ",
  "key47": "3ebuL3iTs9vcL8qrQ2mpK2suP1gQ5nY8rebpAeffuAmn3DGvG9f9NeQzuGxHHF6uwME7y8Xk91wv5RrtJQGnWvZ9",
  "key48": "PoFBjg8bboH1HZ6NBqj4reUAtSimLQYwAUH5SzhruNT8PKYBErU68bbXJpoUAQPpbkdpWwtgXWC2ycurGZhdDJN"
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
