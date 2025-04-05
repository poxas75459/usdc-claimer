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
    "3pxUDLYRVert4eRPukFXyLeEYENob1co4bD1emwWCYCSii25tba3knUJkX2Q7VXdbu3nAtEwCFgeou9MehuYhd9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6vQNhbiyZnLndx8vnxgsVfnweuLPm4VX9g4sgEhqXTQtVNDGyT111JepjwzHC4tsB35CKiUc11GabRQusaWhNp",
  "key1": "59NFydKN1baZgKdK1s4N4Tcy4j9MgP1dH65fBhX9YrRWAArmqbyTDYLXfDcw8d6YK2MY7LkxqEYMBVuxSYB4dtba",
  "key2": "5aHz6BKoAtp4zXR5Ki15voqfFX6VNeBbArXccweB43iVroK3WbHG2axs2cFoj76x6zVW7HrJwsALnzr9cnewpdGR",
  "key3": "2iMDwoFbmkhiFiMkS1a4P7kzR44h8JyiSzpRRuyxTuoVYAdSXZ1wm3qjwUoJYpoz4UmnLrTQRQ4zKbkm5fr83Rgo",
  "key4": "5h1CgK8ADbqjggjthu8QRZehR8i9A9LwgFgnKZSXED6eehxjkwr5dzNumvuMTqqdv9xeGYVmYEKmHnneQg4yDc9e",
  "key5": "2gWk4nErF23uTR2mVuJqrhgtuA6bGwERZ9CopLuPhRwDsj9n3cpGyr6X3xfVKAGnLBgDoNhxMzAwb1bsLqssZP1r",
  "key6": "4rJvmqp1Q6FPS1CgAZQu711Y7mdyffmNw9p3eEge3AbyUazrSHxvaj3Ez34QdVzapj8yPvm6jsvBaQYkpTG6q5k8",
  "key7": "3KMg9B2zTwy434RTDNNjjHHGWJtmoYPug2rymM1Lf6BJoVqo82bBZTwc3QnfGzqsrzHUddCysLhpy1Ah6MhybYqK",
  "key8": "65SeKir76D7BzFhXmLDbjurNoQ2LFoy5ncrfhYfQCwiWrtUXmEtUye4qdHv8nXDX9vJRpaHo5TXkWooEH8TW7Brz",
  "key9": "2r9EqCwdTkVfHcVjq1SG9Ud29GeihEwVbGKFVUDcpdGe6tbwE9szTMxYb6R2ErP9wHHqqcNgDqsoePaswa5Hpu1r",
  "key10": "2hZZufWn8WMkVZMnknMjyxYDzkNH46AAkp2rQVpJU1AxKUcHrDzh1CxxoF7SteSTmWhJPiwpbypW5T2JDpdQc4yK",
  "key11": "2wmMA3GzK9WsWTS9H12LxzekQ3ggNXfggwewssg18YRDBgJmGXg9s4PtoiCBmAGXzDAE5iHUVQanNCeRDKDL4kc5",
  "key12": "3oqKPPGn4yF3pdxd6Gn2Ahh4of5bTxqqddhiCGnpnkwrCjo7Qb2D4rMSmNN5m5jQUpswHspBr3Ze7oKLXxp54Hb9",
  "key13": "24EiTQCEcCtWEjDwv8xz4nJsctdirpYrFqeSP8rW7CzwEcaJ4eAhm331KMnfQmTh5sVhDYdLjJvJMTsfQGPoq5Po",
  "key14": "4k5rdoHQ1XBAwgLshTJDg1snVfSVrVJaEA9S8ihezka1ptmzzSkBbbp6263hH3GVzuG76Rgg4wQ4niaAB8cTrRwH",
  "key15": "5J38EwtWa74aeXQdWJTgcPmbRyqaMEzomj6gYc4uU5fDxVwWLD8eT8fz9s2KDKCwb5LjfQ698eAaiE1NAneeYcNB",
  "key16": "5eTb6brCQAcwGz42CtTEoMewAKj4ZUvnCYZUKM5y4AJM71FPVkt6mCiX2gvh3n4hQWxWySkN9DPJnf2pHoZonBk3",
  "key17": "JnGMvM3D63VV4x8ztAEQCrE4G9NWqDn7s7gjtZmEGAzLoR5V8PmAEyQbfGbdeiTdjmaUvipAH7n4cdKUMMFA7T8",
  "key18": "3WPS1FdGxTLU1f6FSFbXu3GJjoB35jvy9FzmEwVtcRFzXxq7HeXAMCy4JmJdFLSdecbPxMrgLmDf7frdNYj7MMgM",
  "key19": "368Vjmz5wD543WrjQtcNjM37EScAJ1sL7HhhXXyRpDkmaggd4Lib1QUWu8nBLDPrrTvZ9gFT1yJ2GYVsCDHbridg",
  "key20": "4R8rLcEYLhHvTfkS7eckgCBAmFpkwKZeZi3APFJVzfoEYUzuRpk96kiwjqW3TjcGvXyQAGCEjpo66jUeZhcMPJhH",
  "key21": "YPgyB7d4bwpaFnxyAegJtc4vG8NiLKQvqw5etgEr49Vvr6QaBPZbyrFT4mcQJNh8tciF72tVvqt2HiTaspq4EAW",
  "key22": "2vyvWZX4ooVRxurxQCgfwtobnWGk4vCFeFc9riWdFJakp6gYdcpg77c2NntZ2r4QDaSMc1XArytCsdzYwpH2phFg",
  "key23": "VeDDBaabNoB2DNTLeSJDXWBTrfJEaHcth3xnR85cRFwWtyTjQYBqRtsMwQcAn4FU49vycEr1Mrdp12Cd1dr7N78",
  "key24": "23qFqbJu5FKhZQZ5h6KmHUoUJ9p9RU7JznPYpU1sH33ACJCchqUN4AHJQ2tyYuCsq9Hv3EDh1szWKnc6kf8Fjd6r",
  "key25": "5dyK28fbKHfZbTpPdKSDjqRYzmoeSuj7VaronyooVt1E1BfzrQ3X8QAnq6Su3LddvFohjowjUvg8BvnzkP6M7WqR",
  "key26": "3Nu6t4PHXbxo7AgFzHidAqJF44n1f8d1q2RoAsTuHJpXPutxRVVk8hRU1n96miiS8UELPV8oE8XvfL6G5CxU5dcV",
  "key27": "4DBbWFryR3VBggNYxbDGSKgE3BQ1t5cxgDrU5UXmHp8bJHVMT85kge8D9so1r227N2wFqQZXX4WV599CoxoWXf3V",
  "key28": "5xjMuEQTyyn4vdkcvji47QoimqiUMhqUHSrFqLf91Rdsr3zAZeRpPhNQyomz8azpv1wWDdGeE9mB4B9XviEDnc97",
  "key29": "3Ujm8kVuG6K3zCYiqDT5m7Z7eH3MsRVDWWdpNDoxCFAf2DvqiFrBaYgcHMcDKyTAGXGharuJ6hdnbXkwdfKvx9gY",
  "key30": "kbCCCDu4a9aHcjQKWZfh2Tshwfg56dFbRQgxYg8ecQKjLPQfHcE98ggRHXa71NtpM7gnDKmtMJ7QNvx9rbTdmji",
  "key31": "a7ri8EzFHcYEbtjtpTwRVVcE6KQ51UtkNJGScguod3GQxqBD8DjXJRFr1Zm9EDe5B4BMsRJhivsWNwoLUPaeTXA",
  "key32": "39HY4jpVwEF8WinLGQ2Rny9VvyoyuoDzgdEaJB8CNCPtvPtS1rtBXjsiXwCukMSQr4XeHY1yZHv9cXeAwsqQdiyV",
  "key33": "5DrRRF6qwLBAZALZuK2whrqzWLXWGhL2fN5UsZLjhSBg9MH2HyWcAu3KrwkhFTHZtPnZhnNbDBc5hesocFFvG6YE",
  "key34": "5NGUsVSiujdRnWTkxJ19g9btXtNJZVJQ2BBUm9P4hGD9SomiHxiWq9Km9EzWztViUg4toQxJWv2Co24RLzXccfC4",
  "key35": "5egxDC94XuRGSaVuLzwapcK9fsNNh1fHRs6FWRA5cVswBk5nKr98V1Z4MjqRR8Lxf74PENZ9iYn2NHKP2bWXWSa6",
  "key36": "2U8kGvkZHkasUYM8xhpm5ZfsmvpUAMDmt4HbRSevbRoMnSydJrsHfCEuh1hUAU7x6MpK8NihcRSmXbLHidZEVmZS"
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
