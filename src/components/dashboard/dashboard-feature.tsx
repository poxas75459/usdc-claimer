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
    "262YraNHBaGYTD8W3oRhxgB4vKWeGJ7RgQ5rqJde7dnWnkL3BqUBw138PiWX7TEGzWuCAZLa4eJy91LLwKGjgsUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wvGWg98ygGy2HpjKEPb6AbUyN7KiRq8W4x13FCLgQDP2Vkf7vZ8gVVWxdhx396Y4nL8jzaWs754kj1NHKxsjCBQ",
  "key1": "4heoRmzuxrN6g4kwMnLjwkyTwhHSXHQzhyJWSVdiNBvT9kRai8gndKh3HyPpQ25Eq3CeJkngcMVLdoeZzkHbCRGr",
  "key2": "25vw8b7rYZ4pZAsEEZBc4Six6TuqMH4xpiqBascVYQCsuW6sZqjj2f4KDBsrDjxq8gYq25Nfw6JU2zYwmYX2bbqj",
  "key3": "5h9RQcHum4LpLhC6ZeC2wVMuVzQ82QduDe3W2vJbo2vYhSzhkmrSGbgba8pDmy49yWjvXK8Qk8v8NXopqFAxppA7",
  "key4": "4MtpgkSMNqWCGEP52iVuLmZKJWzinGJaqrKq6SXfDknXQ7XxmGywDBXZLPp46EU1eYdCDVNp7jEYhkVDHmqGVMAG",
  "key5": "5iqUr25YcgGsWCTaesrxCzFTcAkWhSXJKEhqYdCM6fQRVK4QYcjp1amikFWyPEu4EGm1sdn2EQErsJS2Lm1vExHF",
  "key6": "3cCMgCbbVfHEcqBphBUC97dmbbdbctqfLSYvFwQJ4bgNMxGDGwQdqfZyCV9arp4irWYQ1B19xRnu1DTVZFekzFT8",
  "key7": "5b7vCfDybUbADKqoRP8vjrYoqZDpmMiTZCW577VB4ynqwU17CzQDNpgKfRrzuFx92BiEZsiGcA27hzjrPCGBWFFz",
  "key8": "4DxZeJzwH2M8UdvxH9XD5c3Q78w9KXRTQ1QNYsdug4DSvfkE57dGCM2wbxwJDEvU9sbT8F3m8ivZpRTQSFkVafrf",
  "key9": "3JFfMZUr8kxqpzJn1JUE94WwbuJ72c9tcNMVSTNLcxwqEg742ED2bmhQnkdh75G1a4qHUwqNAmcPq8G6GZrQnrR",
  "key10": "5wbqJg3j7CZuhGCKDwmDcnaMuxhBUdgd8Ag4CcQRfGqeBaNGmqbduqQCBbhfa8cv3QvD3CgD9YvZ562u7tVZzX7W",
  "key11": "aCbUMyYGaG5wmmLoCdioEMGVhWTM1E6xLa5uhfzPQLfEkVQAxCtLgYGPh11uqirXN5ARzGo6nqTVmwT7oxRoahr",
  "key12": "2J8EffJFBVeSHdqywWvd625rHaGojvpFJL3TAMvGHcf9MFUJFJpQmsPYpxpLXk3PaUvwFe3B1oqoDTR7fz3LJrZ3",
  "key13": "4sVkCLLbqaYXzwgudZzVCnXrSomBAEAssYu1p2DcQHYryj24Pr155xkHJscSpXWfs4E4vqYFFCyR1N7dvEcovLDw",
  "key14": "5A3FiePJci8iKd2isishBTcsCaJ58v1jLQsESZNqN4avNeo1yPDeTeeg9M1Amqq5gGCbuFDsNSDVsavMmdGzrt5G",
  "key15": "Xv35TYajHbBPpwHHLFN9wKppN29rAG6XDPsxcZs9Htd2pD38gk1nHTeiU1MMAMCukdZYYtdn5pirYSr7nnkG8RN",
  "key16": "3AHuVXDQ5kouZRVExRBGphnsRLPoR6o3tFCJZhXP8sCmVxt6Go5haHs3wt6dPV3QdZjR65rNy1ieHn7maasDCGu2",
  "key17": "4WyLM8EmbFfi6TpLfTtmzvdw2x5gQKLwEsComzqwzr3FgcLjvRrdZrYbz3D8j67EJWYWrAFqugBJQhNBvLrJWShn",
  "key18": "51R5a89QgiHGiEgZdD1iaJHqDv7jYhT3D81juqW19g7oh7DCxnNYtTLFic1QhaF31BY6RGqsmMMEScHH4SgyoFio",
  "key19": "Z6VqKcUuA8txdjNcM3m7TE9v9iRYKibHjdQfW6CMotDa6tmUhaTjMtcLZcNi6vRPERKp9vtJ95fufMp53DiipFG",
  "key20": "3Mt16C27uLHgACryR7Xn7azxkAVwEW4FdoXYsyH14qL8j3DRjAJC79Jqyc6vpf2pGbryEGBsWhcb9CAvrN8LSkyT",
  "key21": "3AAwCRwaGmpzv1jKsMatibeyjpy5SzVLhfSKdSK7dE9m2nUimFUtsUkpwWh8q8MrMv6BggDg6ZrqAu5Y93aiYrQV",
  "key22": "42LYzzXWDyidfg9g4iUEzAaUo5m1Y5voQyPgj3rjtBrekQXVtckSubLP2ozDNxPrY2f6VoP7gSsSchUjhmVC91MN",
  "key23": "u6KFkQApNhbZwi28EoHWMTJ94WyhoYT7A1ctyrAe4XgjmPnC8BGPT5ufXnbJuTDGd85MVMoQJEeRJ2jwpr8Ficd",
  "key24": "4YWcG48kxYqERFAkPTJPxKhHDPwceegiUEVYxC2qXxtd1vHMGVuQ17qeBzkEgFunsAs64P6td7cvZn9PmN5vFWXV",
  "key25": "w5FMPtnPTts9EGuSkJVuUcyQ6cPZJQ3jX84LjH7RXcZoYbs1KVWHxF9op25A4UrPocPsHVcV6VHsoiKkAiG9NRQ",
  "key26": "5FoJQoAFxrYXwgCqj1vMx42nZCntkTt5JQLgoKLtr1RKyzMxjjn3WciLYBsSHrB9aTsJ5ZTp9J6jQsucfTCqj3Ue",
  "key27": "51o4TCmm7aJPriH8zQERRTGCLjkgMRethXQsnV8mSG2nQLgqv1N94GyLAdCTzNmNZxPPMVsQTxwtaSqnJEb6ft4z",
  "key28": "294iNYywGESr91UgX6t5fZBB7VTiYTEuzjH4KJZKgo3kzPD6s5Gwv36kUrXUXYt9Ut6dyx4ZBUoUXkvpr7WLsjNA",
  "key29": "2cdCdt8xKXGBCP5pRAndaNwATCa34metLxF4zPpHejBcyH4QLGadrGHxdNB3jidji1sPgHy9iFSY52Mm9QWWU7Rk",
  "key30": "63aX6mbUpCVWmhn5qqPEis3BF1UMWHKjqNj8XmzaMhdATru8b7c8oE77ftDH8doFcxCCecp9zeKq5K4vGRanuTtv",
  "key31": "5ctZGYpRXNmFkxoJCKe8WgTukmXuQ1bwiP9B9xCTEBUp94ecX9mjXXzY7e9hTbPkN3LTVnkXafkvejHhk2hHhtTQ",
  "key32": "5uvYFdoPriGJyMv1h7nmjDajdsN4MijccdPv9j4UsNxAdnSS7i32Wsgyf7xstjKZLkh6gJ58R1rZocztSih1nPiv",
  "key33": "3snq6ZHSKPkuPAU1i6oQWPAiumDA5FjhfEYRJv2CQnF3Tz2jr8bcodyYEspc5rxETqrYNXxpxJ9mXnBFzkiZhKG5",
  "key34": "5SfJ9nTe84BNCGWc3p6cdWQsgTszQ41hWTeEDYHcaSpbsYLcuoejRGX4wGgcp4XjS6XeaCWtiU61KpQ2XBaESVtx",
  "key35": "4rigDMYk1Ej3iU842StSA2XSWpRZqPpRDMYUcjR4QVYHJmJPFYPp7DM6DKszyZ3EwHyzsurmNabxDpTHn7z1XNbp",
  "key36": "66yWbhRihJKvJJ7CrxTDLXDek4hvx7SYvE3eYx2ihzHmPYQo6Qa6v4rrCkeVrnXoTSRuV2jKFP4aq76iHi13xmk5",
  "key37": "2T1mRPF1ibNFyJMj3iv3K2kpq6LZyLKoxnhRxNYZ4KL36HFXmb6uRfiYgMCizHdKP3FPnVyDZe5KEFUCvBStNiZD",
  "key38": "3f39JBdWUiCn4FTvShB7SRizf9QRjHxpVg9LryL1ubk3dgZn7ysDo2po9FxkoTnGjhGNKURk38vrv1XLPsSCzwMT",
  "key39": "282FqGFr5YxW2YXzq8dycZUuSyyqYPFGjbBgaJCXnc12iUxUv7GQ2m6GkyKg5vjKSbqDadHfJUK97HSu8ce1YPFN",
  "key40": "F5cugC2b8XtjzSAz6iZHE8iiDVEMQE9UqU3JXe4poe66x1nD4SNXs9JGsbzRiUEjRnw8dYwwq8FPN2sRhZ9pBd2",
  "key41": "3K11p47bzhHLUoJP8387bSyH7PE1Rz4mPSD5e1oZUQXkoxuESCXAUw2EgkCe8xg5CBA7RMNwXBqZTxxGF2gwdVqb",
  "key42": "aHgG9LAUyqi2DDdmpXfkQLPWoQmC5Wb5KD87Sh1trKECVnB4rt1RGfTAgz2gJagWLUQjtpBa3c1tonUXCNFXcVx",
  "key43": "2WdHujJzYhWrjAHPeEgXso5iKayS1ApjdZkw6SwQrezsceSEuremwH53QwAiAFsM5tZZU5zsnvcnkFrCpRy2fFpA",
  "key44": "28DFVCkEKqC142uwFFBa4ZSj8t7JTBoz8AvjFcPiqJgQwBwHxmA8pFcVm5G7k8q4uRqK4PpmoSPYjpuf4GLWHskg",
  "key45": "5om8wB2Px678Km2jebVANXCaPGFWczvCD1t55MgwVVyPFHJrMPDMqfN8TAKgbbbiXzdeP3ccCTU7e1dqxYnYCPYE",
  "key46": "2We2PdZdZRrxbSJBFuS7oer2fThGoqAcR5ydoE1CYgQP4M9fYhYkJXsc6RtCZNB9Yny2Ki1LVjA6ZW6ioHQW6Rat"
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
