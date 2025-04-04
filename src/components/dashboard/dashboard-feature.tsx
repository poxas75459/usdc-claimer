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
    "44qvpj4owJgTToGUyFYyAnFdnxgnLrSmTpaAmHp4JrbeM1uRaLdKcQz3rSsLYMG5diKf4PhLL8q3mUJbxmReJoWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MtENuWYYBR3tsZZPqQyqZwoJSgiwe6FWuzAd2wtBEgaifYCUuEcboZBg1FLomYBHLn8NtPAhjXor9BjwXSLdPcA",
  "key1": "5tREytyC34BHjbmqNhpH1VqGgQA8auwSRJKgQnHvHLbSZvQUwKEhLiBrPKeo8Mc9rpPYP556t91jPhz5R6Z9usMH",
  "key2": "RJUCzrrBz4cpVk9ctdfhYbP3jp1dQojyrxJCCXyaGPwTDeHxkQzMnSko7wMidbHdmdJThqSyBGafJdBj61boipv",
  "key3": "4FMsNF2bbQED46dnoDQ5EN7fH1ty1ko1Bvz1NsfXfcinhkUjiQRQjEES58FBPgh8emdD4fMxt8CnvSvtKJRLzd9Y",
  "key4": "2Xhm1WbqtxbsAV9PVBQbMiXr2NdNwsmCHDFKLt52K91vmat8FAigdLwAqTW1nL54RqfLprUU46KJLghUFedyeBiQ",
  "key5": "5yQiesdLxHXXNeZ86ioLasMobL9yqL74Lq8wah4fnYtPPsuXkhrCZmHsk9m8PnyhRttC8asHnWYuh3k8HYnskJrj",
  "key6": "49cM41hvvkrmVjwncU2JurqMAcrri1nL7xj9EZFuziV29i38x8mfLAQSQdrXudraPrDUCVAsd426GWQCA7FgfqQD",
  "key7": "6mhtUvg3nVLGsqL1VKUKAzgwqdYyEMMkGp6MF23nm6ch9KLkthnLr1KFZGFw5SF1qQ2Q2dMCuYxc2sJiF5zdoyr",
  "key8": "Y6ZKnd8kivYo2TYFuySXoXyPSG7uYjt6LVTAqcLDkg1tPyr2mkrMjCwCxMxV2U7kYiEcEG4frscwiT5MLvuib2n",
  "key9": "4irRTLRwyeXsCSM5yEa6mTJhfDx7dXCQAwJG9YShzQWMwdC5b3aAMKfo6BpaF42QCbEYJHLAsCkMHDogMyaSA1TS",
  "key10": "3nQQPemPh6Xw3CoQoFxz4ZnqPYwWzpKriteRFJWHRa4TpYMueB2WLS5pbToipV8ADW2WSq1vmjLEJ8HdSsz1Dywz",
  "key11": "3GDce6wMriV8TrjLNmp1r11ZPwCGkmi37QC6o3uvLwFRytJLGTgKUb92HvaTRp7YqsFgiq6nXQW8CzDFgq1KTKAr",
  "key12": "4XDbguJSG7FTLUP8Vex9hZUWMUFC4txa8upAYiDiVwJaqqMoikwyGM1zWU3RSaL7pyDVSyPfFBkXT5oXtUhVAnMG",
  "key13": "4LGqeDyUa8EseysFUM4URNzBru2UB1xkBHM3tNvbwiRThoBmwaNszQNQuc8swYGijmdGbrumwnG83MBG5FaUQWbp",
  "key14": "5aywa44U6EXQXUR5foDjn1vE7mcE7UPFbvJtpUjvvavMXoBPbPBX5NDBbXGFALwaKPSpgJsxMSscT2WBe9m7ShcA",
  "key15": "5VRGjhD2T9GjMg6HaGhMC1LprbGYp1ZvoAWLKG5VifjpHqeXqrqys7hrbhdT35dnhy5ht7gApPNGkuAVN84ZZLHp",
  "key16": "22oknheNnTwT41RgckhR69M4RDs5d2D5cgwdiMPHLPXsKmeq5VZrUQkDoxv12k66QwiPZFYyNT547YRkYhok7qnw",
  "key17": "PBr2PyPpJEDPCoBKHtdsYEfAXFBZJqJhBaEHDELw5SFXUuGT7dCxejskQVRwUL8S47kCgE4nCjvt4zjFyDyCnaK",
  "key18": "3LxjNP4QmQ5hVZWQfPYS2VbpqiqVn2RmefLyVusdoKXH8tFm6poqbkxokw8iBgZ1XvfyZQUWwMPmF5pgdRt4Z6xd",
  "key19": "34ahoKSFrDRLGAWe8nNXatPCPGksu3bzbytwrdQ4XXPxKKgFjJQcf4jEUE7dMnBLL9rXi2HaKfGHcQbsPoPBsfZz",
  "key20": "5BMnuXpYzjPZJWL5S4vgtQpiTwc9yCgi4CDSCDk4pHamHzavY6C1TgFbuBcHJsqqyQVEXMXYqtANgA277R2KSFFJ",
  "key21": "2NA7Lnd6EYbajxT4C26hA2SZvgtRWmF6zerEaydM4ys3CZv5k2YUbgEjuHjJJtvoSWsPzSKYUFqGMjwtysJTKQ3f",
  "key22": "2X4QVoWkPo5Y4EaxhbcYZ7ypsNfQfDRQUdjXoffaj8LuNKfZmTefeTXdpdXi4wMet6xj7GjaPsP8gNA15VFput1d",
  "key23": "2RfKxqHHKUdQEaDX923N6eYfdNX8YiVLsUNutitLebR5TviLJk3utXfTaGGkw4zztgNvgQu1kFXYuzLdGRLKfVBw",
  "key24": "3dZEvuY9wVEzq8DJs2HWykz67PY28DRZbz8Ks7zY2wD9HDYqrVtsN3ArN6LSpXbGrLEDwLaL8p9XRyVcXS7P43qL",
  "key25": "2WQHYiLiqZcLoDrYE9X4y2YP4P98DmdZix7iEc71EzpiL1BZmQC1VhgRgdPHzu1mfGwSb3AAUa7JEVZhRnZkB7kM",
  "key26": "3cmtQ4hP7YoGjTMvi7mebuUdjMr87ZHMLcj1ZUuYGyPNXVC4HVWCJRbbNCAETJL58XfgkZgU6gQyGemqiKvD6h2J",
  "key27": "3JNoYrsxaz6EjSQXAy2b5WVAmjJsnSawHyCP1qjd9EDVeMBH2XX18Trk7FUBdCLgT9U2E83RN3RHS8UQ4cjjSDWX",
  "key28": "3dWX6b5MMoXtmsux8fUSxWykuEje1XTyhcgKW8HDC2geG8MWs3Gc9k2V2vgQHGsnNwWLPekVtJ7tkys53D85uTar",
  "key29": "4XLhDNYrLdyG7vavfVDtdKd4GtHyFqkTV64RG2c9BFzXD98abtxZkH6zL1eBFUUQ57UVQeJ9gWPVGYouVDz5QPrU",
  "key30": "42rvWKL6oXWUCqtHpTRr2EJENMeq2aDxqfbrH34hyPEiMm4kaKEQKcLA1pRUjSiknLsuNDTH9XNpw5WmJSMTxnz5",
  "key31": "L9yDKHstjUz47789c6EzwTEpg5URuhyvofcZP7FphhqVbhm2ofv1EdN3S6vY3nRmZkxRmVSK4bSKqbCa9FQ282X",
  "key32": "2swgJDhEngshPbyJL8cZvG7qvzZoK8CqWMkDxtA98HTWjnQ1Np7CUVFzqDrfuLP1uBH1TVXZAsnn5zyP7fbTkogZ",
  "key33": "FM76MCiQ5RfGXzQWoRbshKLMHoS6cW784kU1hVVH72EMmsb3XCnFLtg5rhtpvCMpaHzgCYEBV1da6SHJnjz3UEv",
  "key34": "MGJPPgHtymdxfwsP8xfoxueeZfRnBHBZFEVRusAaeFP82tnXtNHndcrMkCNMD1VR3ytw39wZABVU1JQ9B3oJXT2",
  "key35": "5QGCmdXQykfpnYruEcAmaxj75MVo5Zy9bUPKP1yCmHQYgRHhDN4JosHSVUWv6h1hkAhEe7ntregUJN6MtSXos51k",
  "key36": "3upqPFeBYTV9aPvLt7YsEA57nLcK9tvnWPjHdZuYRT8ViwKJXi35q8GPM8gfRpicAciiwNG9MqJtKNW7damYk7Zs",
  "key37": "5MVvLGiCd6qEQ19FFgQXDqaGVqdJzJWM1ALU7CDkfpZhVVttRBR4Vg9re2rpjccQut1Poxm3wBaiuXq4y2Q8A7V3",
  "key38": "4cHMfRnyKeRdDCjsXrw7Pi9YydwXtWGJdGwRQkLQPKKV4gZQjUbD5UQCrcJn8Cu2bKuQ1hTeyiQtznFnA5y55d5K",
  "key39": "35TfwUEZrHUC5XLnhUEu6wawYtKaB7YwFwYmXVQSwaEZy1aGfuzxL2YTVCuDSxoh3VexPKQsFG8Ji48jJa7x8Gw2",
  "key40": "3uBFVZ2NUdTKTZPzYKiaWeyK7ESWVwFr2teMKWzXTAtyq2sUyqn8sELYjBzfdsjNCJdqSSDUgwTvZRjVNRiMNZTW",
  "key41": "39fZoVMFZCbsR59wXEkj5yZjzZpF4VVpiXA6bPginwHxKem4UpgFHBPn3EtvieBVMR8tMzqbH4mUJqhiJQXtajQa",
  "key42": "5LkSeCmh7etmK1ajg7fqrNszJ1FDNCxnHKJfVfd6BohqRbwb1nqSscZDgT7RnM618jyBin2R9iGqtyrdzbJgjLGs",
  "key43": "5iffeug2cnthwucN2Eh458jm3diN3Namwx4hCdgrNAwtpcJgcV3oKELPxgnfKZqHNns9qGjqfxrhucsTh4zAXsLp",
  "key44": "LPwApGNrvWzanfH2PhUKuZF1DRdr2xRz5a5Ri28986dou5hWiWeugqwa8tiHfweQWJLK9m81GZKehAXKnwXpRhX",
  "key45": "3cbWHbwGY7E9cLTYvss61ommhCSwFiVdorwpmkApTVMs4VPYgQHHuCCtysUkprmW1PL1hAdYMezxUWMS5FgeorQG",
  "key46": "39Asy2ojPUxedwMjmbCq3hbrbdTm5sr9XyGoa9fsdSh3nogzy3QjGECCdwqmAzqTpAoKyaL7mBuxz4NbrjQx7Vgi",
  "key47": "5GHmLxXBKXn1Jiz1mHuHtU77YzK6bFSdDxqSbLMCkpsufMqBqyb4RQMduJJRb396PUbedu2do9s7Mv4yUfT9Ywjw"
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
