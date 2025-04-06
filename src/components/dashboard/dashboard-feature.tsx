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
    "2Ry7sCuwVhPQvaPJzhY84cbx8CNVHVSk9KxE9Tc7zkAo4MM7HQybv41JpdNbkyFkiQxDeFEwvqfXC7uA763pe2m6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "75D9VGWBy9w4bVKbq77BMXVMAqAqnufsGeD3C43fn23frnhXRk4YtwKCuJRVRf5Kg2qUDMxJpWVPc4QygWbDtye",
  "key1": "5GRG4BPP5EhZ6TSzw8hVE47PydJsfPShrx2rxiyYMtcPWrANETLzLguX2uPXsFUPwFoW93ERtLwNhmqjmhHzKEQw",
  "key2": "5WRxbTsYAnZrduu9aU8QCnKsqUR58wsWW94JUTb1yMZeoCRspmQLMCFh5UZfWeBqFDYuZzJUBFnwF1MRurDZFufi",
  "key3": "4AMZkm3P3oxrQ4epVKVgMk9NtNvyj3z1SqW7SWWpojD3wHQJDTe1h3cCNWP7AdPeJLCrUfX22U1jiixJxb9HJumy",
  "key4": "3tbMPoY59YuCTxR2zUK5Cp61ds6HcfLxyCMD1bh7YaTNcvrnAZ735kiitMFd7j8wVk1SpjR9G9C5QtzKDHoZ5hQS",
  "key5": "Vy9jQK8SV8MiEqpMzG7rcaXGXBDgfjyraFKwtsKEZdB38nVa3fUmQe79qGn5uBUSV3NKGFUd2aLct9VmDDzmPSt",
  "key6": "5PwdvZueJHacTUKnkVV2i3nTxGVkkF5955ymEfSCm9gKTb7porH1cFrMiBkAMvJrYnVN8vr5BpHzCmjexDcTdDBJ",
  "key7": "4Z51nWJcpsyf5FeHDssjESDuYgNNmSxHEweA5KQ2iXTpaxeGeourZo1n5Vx7DBwptq8DtnVMGJEewRCwbNuMtWMD",
  "key8": "43L4BpwscQxmPmuxQ5zTK4fyehKnjuVToY54fFdJUPJJwCfuxNGvxJdfLxEHeprTCCN3DTkGaD5umMypmu4bMZNn",
  "key9": "2anKrDLje9nHoPh6hTies2CMRA13EPHUxt5t1XrzGfJH3XCjPhTJb4GmHPQJijdY2LuJ2dKwt8iW4ixV36Ms9WE3",
  "key10": "2JjCYJDnJuJBdJ6z4JZKoa1fRYXLwDBus22cHVqrskV6REM9Vr3n2YvwNKkUM3EUC6LjYFQV27p37zgDNJBSoh9R",
  "key11": "28kjdPGw8YiizGby7SMD4ja7vAQauXBS4YhxH1xeXLF93F8jZahQ2XWmFjE6snEfG98HgXNBc4joFQnBBKd3zEuJ",
  "key12": "4s2PLYm6KyMiN1AsZiBZkcjPZTuUpRnypNRymykMpYrbhVEKr9YSyYPkQVB5QAdt9rMcrJLMUMEUNBv3N3D3UuGF",
  "key13": "2ZtTmZnoifsSfD8RjBiaxWte4YxACuqHok3C9X63pX6f6EYAHsd57bkSgo4tZZqwuAwAMgT71iVk4bEWaptieXiu",
  "key14": "VbPJ1Sf6FXXxiMgTi5Vcx8DGLdmue6Ese8LQ1o3v2NXPXRsHQvYpRNm2tS7s6GCkrXgTp9KFa5RzxcNy2ftJ18T",
  "key15": "5BQWgpC6SjBNV73tC4PJKpvJJbVyxmH7hBx9VHXr3XCB55Qo5K2LauSVjNFagEVVB4ZDReK6LjcjssU24pcbrxVe",
  "key16": "4Ko15AcXt2oy5o6FyXLpDwJRy3RhNREJtrb9mXwKaqCrWFdcfbps7fkVSLf1Vuf2SUwLsecpXCcyApDEeFry1A7o",
  "key17": "5XiNZ8XRZ41mPT1VYQUHvRYFfB9RkiwWDDvs5UzBnp8kdT27iCx3bLmsHGRViGnSMt8N4NU2iNProng5RMBvJyGM",
  "key18": "b5kRny6WufBH7SZqEB1DP9PM4d5G4fCbgFte97K8ijStfnPZzMPxsLdC4Ktkm784njuxGEA2oCqXmo2ddpMMi5S",
  "key19": "4yYhKs5a4X1NmDWdLWq5Tmk5L28NzCjNdrcB8ze2yLUHWdqSPdRmahHz1pJ43fbbPNkfv3CjmXv4CEq758AiG4u7",
  "key20": "48JkopU1jQYjzvbZf38qkM5crBdbWFTfGRqkHD4VpvAsxDwXGCZ5UEUce4bj77KBXm3oJvUANrTK3udk8Y56pkL5",
  "key21": "65UHp9HaWEdU8cCtekvib8CEKtMjXu6jraCPKJuk7JYTepbLGkn4C7hrpqr9LTUdUYnxXVvPimpi5i5jAsPsPDfh",
  "key22": "5dqWXwW1UdCv6TajuRpb9XZ9rokgw365e9Yktwus7Woju6q3kJzPG6imGQqR55frUFNtzDR1cJF14huQoUwejm6e",
  "key23": "4oApAqmbVUvEwTfUMM8B1mP1TdWt6b1Pf1J7dJchazDXwuGEcjK7a6ecgU6fRyPBZMig7Hzo7aUYQruqhGKAevLc",
  "key24": "56cADLoG5Rr541upDun6FMQ5kGMUKLoBbvcAwWgoe5XTFDpiNH8BoPeuApawy2Zkz2DUCXJnetwVu53ULdWmDyVj",
  "key25": "4hxQpHQ8cH6GNQoQBhY5pDVqFhtbE9qk1Gh9WtB2G6WknqpGbt6qPsu5ABY6rnRwpKZ5DCcxaYQXMnmzsieuggub",
  "key26": "5fWh3zS2F1kS5GuLr26YXqj89iQX3KkfCxEGAChbm5uR6Dc9SGr55zDwnRw9kVqo6rH6Sfsm3tcVmE7dqps4a6oE",
  "key27": "5JDWkPgNdgHNzrmag9X6DD4Y1fHkuVNbDUsSduZg5W5gJgCsci71PoRQPQwQkqwa3WmWXAFEKSmaEhEc3RpUKsMZ",
  "key28": "4zRcWBsyci4vEi3p4tJVp5thVvdec9krdi9YWB5KEDRLAYACJAuUC5wwHfTXGsrUQDjUX9RpjxKSsSB1WgTauDd8",
  "key29": "4vKRAndYB9kxCFEVaeSsoMgzenp3V3RpmGhoCnjCn7f6uAHCtqC8m2nvhvoAYmVj7WRC3UR6Jm9r1D4TVuA1ypjP",
  "key30": "67GNt9irU75bbXmrgArQjFFaL6muX56iY9pNkjf8NKDbK1ZW1SGFNx3v5ridhsWiPa8rMXgJmwbh6hNuYFeMBYbj",
  "key31": "LWboBEmswwjK4jAS9NKoqsW6KZaCWTYVuENztZ2c5yXPge8q6BT4kxtDRZE7R1oft2kxUk4i1KQNj5J6EYovPEU",
  "key32": "5B7VrxW1bbrJ9oUajGSvk7nwH75ZquQSSuueKCgsofeQoqGuaVtrBXbbgxR2usXQz9fnXnxr7hp4zrs6AtfpwpGH",
  "key33": "4bVf7TgkAMHpSU7vSKimtkvxSvEMjobB288har71KDhvMj7pihX1sggrkGhFuzKtaZwTkhrFpiCyv4n6NSHcFnY1",
  "key34": "5LoGNynWeni82pmLeRoZeXrrMDW5snVCA6H4Xhtz2TMUCN6AGtnzkeqoqAWAM5E7zGHTF4MhsvtTD9hka3UXSaYZ",
  "key35": "5WGPwLj7VAfPWuV8Sw54fAbiSdPcJ9imSnBGZvTAfq1HHMY38zBsmtYmF5cNzXjNviqdbWJEybFpsTdBjtkov4oV",
  "key36": "5ysyUyofnacu9oiXr6KD2NvWA9KrTXaLdjyACaUq2SGVVneGS2UcJDUxTXHiMnmMMUnKRX248rBf1wR9PJiG7tLx",
  "key37": "5rCwbmCJMNTsc7A6y9E9XzBMuwBCtkZMAXqG2y5N6wbusBMsC6UsiV9fEhDBtFrr4TVzBoRf4abiGww5LdJxrB9a",
  "key38": "4vVZyvxnihqLSf9nMiZjq2oo6UZHmgVpHtXFA1Mkc4gANqRCWg2CsJyRaK7GqqyLQbVRwyzgmT7BAdS732WLkDdu",
  "key39": "xupGdn3xdTGBRqAtiNkc8s8VKec1JEVFS4wSyzq4KQkXkv2MSBjZ1CgiZ3zt8ULKRmVwgqVZNCDkdjJ8SHe89Yu",
  "key40": "o24c8gk5BcC1njJWXXjbxYpch9ws4tryG1dyrB79j7c5Xz8NpYXStrgT4mqSvswJvWcrqAkL4eVH32SLjbBQEzj",
  "key41": "3L4LXktczurD3R4H8rwXo9GJiDkmUwPAPev1iKYxgmr6m5zcmcz2yEkUP8YovLD9fyTzpLeaKM14SCKr5g8qVg69",
  "key42": "5HBr8LBKpGqCeMmegC8ard6PVjivorMUF9L6NNM3SqiW5G3nX6qPfZvCqA5JmPYUcTbornZruqqLNRTRAjAYQqPu",
  "key43": "5kL1tjuVBSZASAxG8yggtV8pREs1bDT8etZukjcAAqY3HM54m2MP8VJiz6DePYecVxU2kr2qVHPkgBtFjr58fsA3",
  "key44": "EbBDJgt4gTtEJDHi2y3RQY9ueY3XDkHguoGrzx3LPu7JUvX6TBLpxE9DRANgYNTc7LEdiqZ65sELtWhTE8nUeTH",
  "key45": "593XpVxRpYTN1XsBQYM17KK2edu3DbT78wRgm5xrC7FBfyMVe44ct1Dpeqz3G5kkSZ5KtVhqkRLK1Ew3sHcxtKWX",
  "key46": "3Hjf8YBLLeVoKsru3YZ1NdhCsEHQfja4pN3EVrzfPoEKMaKJn5zmntT9rBj538yfiiPSZktSGZohc8YxhT99FVsU",
  "key47": "2TNnUXdLZUmhrmuYVMMnMXz4bgHqkAqRZp2PdKmoHQFWrnLJHD8dwVdiGhwsEdMGGx33RYVf1doJf2VAvtM2VT6f",
  "key48": "GAiih6MRd1NCQFKkKdSAqCKafhPMdJGmpHf5Kk6vTUSNgrk1rmRQWKmQVmqcyh4NfHjK1d7MDnvCUYT2XeH8FUh"
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
