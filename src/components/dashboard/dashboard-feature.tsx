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
    "5NPE21YHqveiw9Xy3QEQqbyBe1DtPmM4QFdAJuiTdcDcs2jdQWugEQJsFj8BF4Bz7T5ihymnp6Sqvbzq5nCCpQHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SXGMbqqxs8MckZaYm5F3Qt5Nmuqcjqo39aBGM1yTBv44LnVU4LGGoP7e1sDxW2LpGK6966bGCTB6KP4CRfo42Ka",
  "key1": "4JqJGm7ZYEK5uVykQCwHZM4dibWzQThuHe1BmDdiWqVK94Pog4HtrysNKckMfa3mTAGHaGGyHSqV75q2AvXFTgnt",
  "key2": "3a5eL1dyZb1HjaQV9dF3YvBvr1s3KcVxJdBkB3nTeHThR2eWvheAHhPHXuVZNnnrgw3jDJNPDPTogcHLtwN2u21J",
  "key3": "E29w6XJ168mRmDRhXZs9C94wFPxCtNXhHgk5Tc2m4wn2jvFB34hjWAD6wXNFVqAGkwYdwgVqvebkY9rVx777xNW",
  "key4": "4JnHVtxwXRdXuyavcU5qDAqTTWGSJUeGtUiDajSct4bFQUoTSD98HRJtXciLmjcpqmZ8tHfxE9vUnJJ124PcqLbv",
  "key5": "4wdaHU2NxNYkJY5BbZGU58pH6jtUWHJtqbPCy6iwkUpdmpyJ1PU2GxAiPGA2MaVtoMi4VxxLPBD4TZ6tsXhR76Tv",
  "key6": "21kruHBZayL7GnZXJRxvQsWsDMVMQRAbzT2h39jwDZFzotsVNWj96YA4rXYofKhZacpSQkSFDPgygtgrRKGavJEx",
  "key7": "PitWY3gkZ5cv5jhU2BEN8TcS9jXHbiE2K5AAtYw9Tpe5DKN6jhgqCxNgwNTxu71wK1ushPWCnZ6BaZc9okTS4c3",
  "key8": "5zB1qXmEd5aZwfb1kSyBFzU49Pag9knTF7tMHuzjC9mkCJJZAnohGdcaNmkaJeWT459Gfemx5bbFidBvhbnr8rho",
  "key9": "3kSWmniyr6PdhRSWPDdAvcdrYhcsLyMzvPScsupw7y5BWrrt7SYd7tRVgQjLPTBNUDCRtfs1aRzBvDD6wHSXe8X2",
  "key10": "2AQL7LjGiMXdx8RmBkA3LdrPSJ45VdZ8taMnNodczgFkvSjcDHHcZTVQizxytw7mhRvXvr4gdYj7S599DJzphLPW",
  "key11": "4xKkudG3hJ1tM47MYtYJWMjCwRi3CMfZMCFwbh5nA9LWfnfyXPoLfTvU9EZRpJE3EJdsh7aVtpPqzM2AvJdVXvGz",
  "key12": "4B4Mcp4tnNgk5WMcuagjgSqeE5MxKhKecvX58aP6bzxifQ6ps65DjKHpM4TD8y6zopp4As2npS9Q6w2ZBYYRugLA",
  "key13": "u3gt1kJLi1NJyTRq83TM3F3uSuBJWuLq3AzHSELP1GX26Z3AbjoLdtNPfLHihJ7QV8L11NMizhC6HkiXXAzns1E",
  "key14": "25NQM9XDf8U4K9xSX6KxDXzWc2LvPaKAycHqXEoGNwJqCw9Vs1ENj2ejSPZp44WEhRgWNgcZ9a2CTModoTM1NV1z",
  "key15": "4Xj6ujayuc8DeiP22Tmz7sJ7n33Eee1nNt1w2ZiZUYSivawzFb4f1Pa1jpYWRCUgkFGgh5LExCPk3NdYLFj6cSc3",
  "key16": "5CTtJmXijuu1SkWMBWGpDiFYduTNoN8QCFgYMf6nkTfwcg3KQiYnFxis3qatVwrwc8vZJV3KpsgzrAsxcvLRueaL",
  "key17": "5XJKDeLaGfoSJwoxUU58iNaS7aFbDFyxwzirqogqoMWae3gWqeKTpLQriZ1mw1zzhmutzBVvuQbtLytNsQ4FHdna",
  "key18": "WV8MeifyZgesmfYXnH5kjUanFiFsWYL9hV42iBb8m1CkmJhQaPtkq1R2QxerLc8Migpd761QiuUh6D1tL8Hz777",
  "key19": "26DhA4kDUgMPjt4AqWguG2Syr6Fn6WSSMpzLCMKzuqtBfmc8VEQEHH7S46o8pVapzXvrR1Y2HudVJ5Y7pw63Zxsw",
  "key20": "3VTmnQ5uCW9U8nJAeusXr45WZUCKfKN9s4MTXx4yGtP8Qe84tGajwfKeg7XHEvDsbnD2UF4GuxNeVYeYXYrazZ2R",
  "key21": "2WiiCnr7rLHKMv9W2cJRLJCHqcJgGLUgYU6y8UQCUeJt6vYhbJcbMoej2kX6UggGdvHVtv4NN8gajfGzbhWQWZL",
  "key22": "rGvswTu5bkDgrrYffMNZbqiqBAQaB7DWYGurNtqgszrTWb5Pi6DFgMzuCvQMwjSTE4wHhAifs71zjWD3JUxEvQM",
  "key23": "48w1UkifXWvPTcR444tTQgoqzFPK1zNJXVZC25S6GgCTYgpdZwjckXxHcQwPYQXmCUCmGNy4usfxUTs7jz7BXNe",
  "key24": "3YGHCP47pZCi1juf7KZ9eyeN8BT6nFvHLAd7C4PWauT6fMR7M2TLo4evbvjZCGrJtw5LAxz7eDbDmavz8CR8WYFU",
  "key25": "5sciJ3sZ54TBaEV6UNhFoaKv3bAYHKvZ16wkiJ4BJno5px4RxRkKXjK9xCL9eVuDZZGBY8jAqCarQ5Mx9wJZLKf3",
  "key26": "Lwnfkag4sg37pMFFcfXqdPQ5rYUHW9gXEkWSnkaf8ZwnU4uBZaNUbxrv9G33ngTzdxBVev796QEhikpcWAcz4nF",
  "key27": "5LdkMaypGYTeX9Gz3CvbawydU2s8fCskvUg7VK3EkFusC6u3UeqpHbnWo9zpCEiryWADEWBXXrkAQoWUDUe9XwJn",
  "key28": "pzTizxkgCbWYHCPU7Q7WSHhm5icteRVFH5xxmNJcgJc12oB36oqfH2xoTZnxjp58Fwcuqv2dYrgDxTdke8Cr43W",
  "key29": "4dA7T7SW71JXrkKjGDm2ycBYvzRwqKkQwUctH9fHjT7CCwa6ZViPjK5DdzcpoY1qHcKSjaZEf56nn6ZDbD1urcBA",
  "key30": "5SKNBuYg2rYGCbFvL3QnPkvio4rBNjswykMe1VcXfwd5wpG117WhoA8WbQK6XSjJJfjVVDnCoGFkgKZb8uDKESZc",
  "key31": "56CUQKoyRrVz85mxghdM2TB6ZoPkkbEiYJPoRwRgiowdrxFCeTVnHUXNseW8Jwg2en1EfpWfiqLB3pwUtUpcJoSS",
  "key32": "25TRKRXDZeQ5thx2S6QKjQLvpekVhB4aCHjk6FAFiqL5py5YLuS3m44RrmbprWd1GSoni6UiKjEN4vhLnuFmSG7d",
  "key33": "wW1Lwet6E2zr2vufF55apU8xL1uDXPhPwcAjew2SvkGY97Ar36ngiHGUtnH3HakuWRSrcobrpZvbBivErYPWmYj",
  "key34": "21Jm84MYnYn9fcfcGMBkbYCLfHuQCy8Gv7W53gEMMgAZ2qchwphdAJ2L7R1oFZ7NvYSK4MJVcFe9KXH9idqRWxwp",
  "key35": "2vaC2En4ZXbxGaLGrqukxQiues2Z8T5XBapGViYcZ754nmS7voLmUHUZL24TuVzL6mBSACCpM1mBqqiLguY7zS1L",
  "key36": "4VkAeBcjbWVgFvZdYrPWUSXN7ggTfGdqw1VouLf19L8W98jCqX8hgPRrxtVw2yKFkVuML2EzVbvoKRnEYKw3BFY1",
  "key37": "2vnSrWNohzbdawK6psectZe9AQAs2LXxM8VdeqyzvBAxFy5QtNbWs7p7yNgjJdoC2g1rD5M9hcvsZwTEGhJWYn4t",
  "key38": "2xd75VQQoZbRzKG9EVs8Aswn4HSyDyGNuvdgsPtsNwWKgWCNpvuiYUKaTsitiyzwCWJr4cDvJ9CCdUuApqrfMXdh",
  "key39": "cJiBNmVWCPgZwEDrxxY9L6LjpqimR3aeneSdH2mMqfKJFsW3r5JuAHjzJmuhoSGzCvBpfmKu2Sx8hQwZJPFTrW7",
  "key40": "2k3JJRaASM3y1yedktp65Ud4ZKpM72rs32QgJFWNQ3giRbDLFgBUju3DgNoChDxDiaDvVgwz7wHttRxi6ALXhRhY",
  "key41": "5w9Ruw4VnBXXZWaA48zwSk5XmgEm5yQHS4kJEJoUeepao25fREF3MYSi9Z8rEptxZfTeATx9PRT8Su4Ad7jCMuQs",
  "key42": "5fWV2ULLbaBgkxitMmJB86RK8Tyud2KTxrHwzkZkz8SwZWAE4ox1LgHX3iQ1st6JCa61rx22Vvk32gW4NSS83djq",
  "key43": "ez1HGMqepcuZA3j3nMrcjg2Zonk1iwpm65WVpNTTw36rUQ3aaH65VpxCqWkmghrsWhAqgB6xzMxtiPfQQJkGZGE",
  "key44": "56r3y1GW3dCGBc4nXdoeNcaPWMjh827qM3NUDw5Xwz51bkvZoYvioXTALZnjHhQzDEmMB8R7FVDADqS1qEyRUC54",
  "key45": "2tVHbFoDMdbNcsm7nq3ibQg32SnasfcsgQ6mioV9ivsS9NfSx1YnR4TSP752bxsVR1arZZdQSbHwnmXnJnj8d8sV",
  "key46": "42CgWk9F3ZMctcPjAyvBVUwMZyggssUC9CQBtGhYUAtCZinnoUHBfmvz1XcA5oPKM5r55cNH5QyJfs8owaGrVqR2"
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
