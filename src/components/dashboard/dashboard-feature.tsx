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
    "2Sfv5c6RRyCKNL7Mj5aMVGeVNkWU2uMithNxyBzaGomgH763SQUZ5wB2wzToDXSdiS5q1snbwhT5FEBQPaPDG6Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o6UrXxZ5tgiqZvNWhiUh9abQT1TGSM2KBQyj5mtxjHmsAb8tvzstn8xjWyhXk2XkWRmHchuR3yXVRqWFFgWumd1",
  "key1": "438vi2ZMHnwpBQ1j8a7A6M7rF49U1cjF7ia4x9CX4Ku9pEJd8xQr99X8RxVsBUFbSSpVvxD2gAepkepFGnbXdS6K",
  "key2": "2h68YdNpkxyjGyVNXJMy3LYxBgsjQZ2goLMXKsxexyWFqyiSUGB6jd67TARvCrASSJPaMTcMTTQxwdoxU31YvVyQ",
  "key3": "JSR28i8hXXJzqmwjnNbdrHjDEMFxZuKUsDo5EhkH4qcAUCHw9skmAv9wEx4kzeH3aPGp59dGabpwudHc3iGwL6Q",
  "key4": "YfQb89YxiVpFPvyQ1kFgv99KNcjgJfG37PS79AUSNi2SFjyGmJh1cYgBtReVHMfTVS3zb1hgPcUajUDCeyiotoF",
  "key5": "5oPC46frHjkD9qgZdSJvmJmGgAN7inbmmp1jmWXxEvoR74nupQaga7omxYM7Z63WdGh5oSFT9s7raFmNHmQVhkYa",
  "key6": "3CjrMMfJivPA7k6jPQof9EzQj2Tgq8F6eiVuBLbJEDhaS9r2gw6pSSYjX7d2Shjh7GHngvWbCcnWy9ua74ZMgvS8",
  "key7": "611nfEQTFpxvpvu9RwarB1bGetZ3ZiEJavbvYLMuJwfhXs1Sndc54VrHHQHQhAUQBZRgvzYgy8dHtRjbngQ11Vi5",
  "key8": "5mGBaMAACkhgGrPJjCo7HbvoandsyjDdSTgw3SvnALHijFSdmPVWFZv7P4yDL2wErTKkh84jFnYnqUTrBSpqgWkL",
  "key9": "3nFxsKKonk4oG6Wd5HrsPfUbBCjzoJhBjbse1WsmNmxfTdcADLiJPz8D1Tg8TcJffzdgqCBabsh2fsWNYiqXMjnj",
  "key10": "2QZbE15Nih6HaMT4zTUaBCacJ8fTkjZeNNB7U2B1ejLX2BizEK5Soig8LyKXNKqZEZnq4VbLTVP1HYyUeFfVyVwn",
  "key11": "5uj465bjQYtAsEBFeD5DiGpdGhpPEE6eg5sTxJCLUCkVUioymh3mmiyAng99D3kCcGswBH976yKBayDsGGVhWU5o",
  "key12": "2jBjV9SEca36RPPrGA6CYVYJwNB5QLQkRJ9y4U9a18EYJzFQxRvcVFGm38LZ4wbv9sfKWWeMx9NzhVkqGqGLRyH",
  "key13": "2APxvqMoxDsrbUJheFtxL2vE4tuJ3twL77saeJ9FsYjo8LpLt7aDex3j1NmBys1wwSiwtKkW6hH3XRgKCB1QLKu5",
  "key14": "5kY1Enr1fCKP6aCynpRE7LJ7CKiRjvist5qoygbKaXxsbH7Y9ffJyxpqehzgF6nBN4FxyoSDqKHuzh93hLcnJJzq",
  "key15": "5pVLUfANk48sHLKQgroNVicFmmzCLAZFUQZ4xf239uuBZnkNtcykA3Pjd6LSjPLnL7Bv9DMo3R23GEK2tgx77Z76",
  "key16": "3JEyCT34EGrAojU4KS5pKyDPTVBLdvycFMseixv6HX7MXZJQsjoSxuBUJragybAVXXJzePEmuqx6F5k2sVUBxgjY",
  "key17": "xTB97C6yDasx9ee1Wgf2XUKM4tTfkdXWbAZ66srnshdU8XRR6SgpwBkhPtmTLKW998JuzhCyNb6LXRMmUpgGZk8",
  "key18": "wPPZZRdUv5F3hofZVRivxUPczADyzutHg7v7pT9v6BHtH4rYYHjrfU28uG93hGATQfeTCF6BKN4aoKs2SFMmFyY",
  "key19": "fa8hc9DVSqcV57ZR13yRQPxGzTz6iCD5X339cPB2K61P3dTdWXDbgLcdXPgkfn3GSBP2LbMCfzSpwghFm2eEUBr",
  "key20": "5F2Q9GWm9hoF4bp8bisYvacyXERPpw6wc36cgc21Ry8jP1Ap52BwPP5hPtrNP4NAVtvgCfvCxqjBBDurEMq7hmyh",
  "key21": "UgLVkkqZc2yaB1Q4QsQvmfgfAyLF2b4ECBoEK9pQd33hZ6hugA6Pa9UgJ3H62Tj8DFm3m2GGd2iQt8kP7hzYx6y",
  "key22": "5FGjDeYzuTc3UJjPsfA9MjFCqyaBQVtXYCVRDVSeiu3f8ZcpjKG2UVVtu1kLzi8Ega6qXTBgujr7EsP5A5YLmWfr",
  "key23": "5XLcCNjGvwdnrLuBRaSDuyfSh6arXDipAeXjSB1sqA6Z28aZWkFADfcXtgNUiCjJ2s9aMRLh4imEgPZd9g54JVEU",
  "key24": "5rSrBz2xPiUxRYeYCcDDUArQ1VJMFwkp97pugfZ3TKaXZa42WckKYdUhDzgYUesxZTM8gQyVVbPFWYkfTvVVvgeB",
  "key25": "52fG84W3pP7nxw8i6yzbuT4o6J12QPKQgapPNpeCBgFokw8fur3YbavNw9pQZ6ztM1BKNMqLqYe6EwkHNaGrc3Ej",
  "key26": "3GgWRzucX4nRZ6nYZ2TXykEkiCXcWEjWh3tgHTFWRFpxVi7fWn9aF29AsN8CR5LfGUE8tjL5LmTJzis959PGDqGf",
  "key27": "2wC4PrgtXvb8uhBQov5XRFVi8YFC6PUn49hpu5UbVJDx3oogkrqvqeUYNpvHX96EyhxpJw43BgqoFAkQXn5yhi2t",
  "key28": "3pHAQBj4zKGsmhBUVVC5F4TL9qXATSAHrP49Jk5mSnYF5eyL8QEMcrpHUw7Zus79LrsY2qyyLvCmj1EPfpP6xQ7E",
  "key29": "4e6VYh1kBDbgapQKhWJ4hTGTCeW7Dz7DrXeT2u1vpW65eT8AKmmMfyYunf3BE1TjccJeCwqN2dUkKiyGaZTtdhSr",
  "key30": "5ggQCVE54rEKqVbrhSLysnK4qMBfrABJKN82aJeD9Cd7ty1XMgj1WD17cdTaRYokZ4wx5bYwdyXQao6LkG6ChyTs",
  "key31": "5SDviKnBWEyWoGyA8GAB1badKu9sju2Gqx4uhYtUAvbSnqLdVA6C5BHzZYhj9V8xk4Ke7oaa6cqaXrwSneNGnDev",
  "key32": "5rpGqjtSgCqgtsMyLWoyPR2YMPwMHj4SpSvXTH5xHxfSx8EZuUFN3DpTkPnJ6Co6a2KwkizhRXtbYbA6s1p84EfM",
  "key33": "2WH5iQif871eFXtv9YtoZR53o3HFGqqT7oqUNUHTsxQLZfdVxhABbB5ZwREDbMnSM9ZJCurnmhP1VvCdAmorwdW3"
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
