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
    "hVEQPibLdY224oRREm8ZGntvqRcs61GgPqsw3G7Lriz71CbiPULS2HQ7vSjqWiP5ur4kNKaFhyHjv7szLUe9c68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pfzgHzo7bzbWpvUW8djk4WS733R9KgGpTne6v6LtMRDXmcU3msK3Tz42oxUPUPJea9bvy1ARW1WK5rixsmFmfY3",
  "key1": "4ZkzWZ9D4WQsjjHPoPCVX2nG27GXnxbsY19ArQPyPWpVumgwpzaxG5anbftCdGHvfGTeu8P7Q3Am15h85rCCJzJ5",
  "key2": "4sRSjLpZj7HnzzfGgyk4D2ddunYTeko7nzaWXUJXV2p7nm3Umtruq3q1Tm7jABnzXwiT2pshieM2fQJ12HkunJeV",
  "key3": "CLqMG8ag24GoXLhQYjzNMKetSxCbbopDq4p6W9Ua1Nx3yJRGi262CPPZbGpat4T4fmchHmoAotws4F1qreNkpUA",
  "key4": "4TFGyPggo5JV2FZ1scS2LkCX1kmY4g3tyXW8eK6GNJkKms1oERtLWzw4zMLUmTZD4fEHsePuasPnBsW756KnoBcx",
  "key5": "37WemJp9TkMHgKSQdFTqLyFqzreG4np8SujYJAcXmxVEKV7d8zKGnTbHhHmdUShx3CDUjNp1UktDBpSA8hyHBQL8",
  "key6": "cZqs7fx7m7m3RbyjsTmchBTKTMPvrqcxwK7Gt5tm9AzY9QCBMNoJCQYCEv362oevwr37TSvPtAfq8qxV7rGYTrj",
  "key7": "tFMb3XRK3F9Fp1Ru2NShmyYxdzfAEQRhbQ26Npwh1K2yrjpQ5RRhxyMoQqd9nstF2K1FbhdcbYwFQUNSBd1P9Wp",
  "key8": "3zefrwnjkK9iFtEGdwMnKCv4Nbb3ptswajYTMauBDuwQWkeFoBV86G7xAnYBQ1B9vLZ1gaH3hKS96XxyPJvfTdQV",
  "key9": "2sDAMTfhCdjHhpfNT2PLQD44729qphUcezWhnLGoMKhzwx7PAf1jgg2x7YvDFsM9jeNRQqGA7Nwnx3quVWmrCbYf",
  "key10": "48YNhPyAfBAb6xo7FSeRdRRnQ56ey4Su8EEDGGRMypfbz4YE46SPdpMZcrsmmxMHbLzkmQVesyLeLe6oTFgPsZ37",
  "key11": "2TUXJ6TQjjRtZg9eTzZvPngvD6rGwGzuQYcp37hdKbiQtchkPUgY8Pa2RLD8z5UdWeyxujgnecJhZ6s72bVwyMhr",
  "key12": "4Hxm3VBmK7iaFvMYhd5VYixzLQDM3VvRRiZCG3R9S2tgvnnhbMVAzUicfedGAJe2vwEoaPe1KLL3rsTVTsZJjrYd",
  "key13": "22iMVQBo9GRDwDgcVn9pbhs7UnP2GCHQJXovYmRtSkYp7qJuhiRPViTvWFFgp3cUv17kNro6RJ67U6xcbLvTkWjT",
  "key14": "2Yk5YWSsy2rFa7MpaYSeKEjk9WjvrXKHwM9zXXnusUFMDHAvGv4SiNVz819jGuz7pxm7Xdb4pBrdjKYqaHsL4hmQ",
  "key15": "2dyECGBvqG9Q2a4iLvbepcqh3qoRr9ZM6SoRTVHffdj78vMwN3YjddYPSJj4rQZmeXj199BnFq2vJmG3ygye5TE4",
  "key16": "4Lp4zi4geU2SjcfzUR7RptnEDPrEpvVGBLjr5a6JLkdgRgUBQT7E8az4iWCVhxVENEjWVHi6hCKD2DcQYHhaTqjg",
  "key17": "SH7Cyf4AyHoiq3WbMLT1pyd42D27YxNs7DuzFPM6gkMA7jzLn9BohuL4mnCudpfqqsDKfVUrhhvzvFVp8wDPTsi",
  "key18": "4eyCT25TVyuhHDaZMdd7Deca2w3zX5DDjWk3p3uyr2nK6NENHEYnwdbp55oU9omYWZT79CALhchuZ96gVD22Ny3A",
  "key19": "2cXDeRuseJipwDXKXq1X15oTDuAqs2GwS3a27Tio8bMSwqr6NKkpjruJjRmrSyyGv71vPTPwYiibtzjkHhCF3Xyb",
  "key20": "5HNtRQXSk4GmxNAnfgTmaCJT75ijpk8ECV4qUp6XznCMgwEhxeynMuhjsbZiqo6NneCCqaRRDt7VDQ6A7MD4Wa5C",
  "key21": "crz6SXaChCXN8Bq2HpDV2nsM4pPPFNfuC31MBhKX7vhWpaabduSN7XqT8yzU1gCyHu2goHxHjRQCMiJ4wngYett",
  "key22": "4xdmWTWqi5KJmCEGx5fhgSprvDvBmTaYN3fJV4q3jdtQF1unfX8hW4ruRXJw3JfnK3QLjdjqquqTLHWcLeZs96Ua",
  "key23": "4dCng3JfZ35PjFyacC6Nq3788WxrW5GgiteyDbBidaEdFQ9z3vnHr12nqxRwYH4a9C1qXcKPjDnPQyZ8oe7PUcDu",
  "key24": "YkbgdsYJnnRKwsQTugfmYdajueYLcX14QRLBEqRZsN8CxJycyq7AQdaoVepPLMcpkjZNao4MUgHkvm3nW1mH8Db",
  "key25": "2tVx4UBWUeZRy9Drf913cTFizxo1rqsRHVfGntTnYregKBHbv9nMkFBJg1nhDq19rn2t3Bby2MvxT2i1u5QKcxu",
  "key26": "9Ew7GaSptuS3ygHdSCQo6q7EaJaeSUX6YyZRAzVbyBGbWEzcSKdgELJ9MKRbiPoqP5LKMJ3mTxPPyUopHbPcVsg",
  "key27": "3bKkJojNGJ2kwTJH9WXGFfgJcsh1WRYcWRxZQtYApQySXkpneR3mMrUygUPcQxzN9H99tMxUk8yFo6bDojCjz8b3",
  "key28": "4467e5t8NwcB8nKTs4chQtYoJBmjpbR5SNNZAXgXFq3kCcU53WpsAKsdQiYz1zdHQ7WV6pnUgvttvFUgBWiioqq8",
  "key29": "2DZbyjV36a5Qav264R9Hwyhb11oZ7FSbeRsqAr8PkdgmHG9JWeVpyqsNxDqbnN4bWqB9GTJrEb4tH3s4RnG8qM7w",
  "key30": "4RR6L16io3Fg8oMJzovknMHXrxmV3mDUVdLKM7atiynszaJ8Q5fb4h77d2UWf5samQctF1xURNgX7EHKRYR6T54N",
  "key31": "5FxUSRzx2WGfGWSQxY3KNiMDsoUrT7vpca1TuHviUdz8JkkdDC9ViyeLjs3itcM6YotmSsHcXC4w8wCxtSYtySCE",
  "key32": "3aFumdLmbEbWUuJNfP2FMaSis2mpLHQbTFXxruMq9gDQbBkLS76PLFKku2MHdpzAsL8YpYyW4ecomNiqd1pFnJj",
  "key33": "4qkJdQjZVYQvNfHTV1MuSsPQYanzgXTXde2JdjCkV5Jq69Ap1CuDocd9YN8r1gCXhrq25HQSbv1fCVHomnZcjvPU",
  "key34": "3Ma3PUbhsLSZc62h2vHT71JfSrRbgW5awqyvVxcD4PDcndueCbBcVq2VM8jBofsrCf5ozAtnehdpHySrdCbqQvUG",
  "key35": "4r9pTUtK44rWNw9esipDYHESuRWE35V98izAZWSH2fTa8kMceYirxpYHWsGqtho57c5gS1iiNkTZwTsc1T72zC8E",
  "key36": "37UsVfYFKE6uTrMXGXTkeu56bsKkFvQTgbMuR5kG3ucNXZzuGb9kQhUkronUq7V28aDZAjeD9Yo3kgivYDqVGnky",
  "key37": "5J9i1kryFsguweBu3oupCYT8R42mJbdhtEtFcJoxcc9RTgwMRFh538YCx3C2QB7qXaqxHH3vTpA5n3tS5ime4oNZ",
  "key38": "5rVJWW9Sb4DP4MkkqSfB6MWTji2GfwHng8UQ574gSVSA6M6mWdLHdE4muVvSdZVP4BAUecdwwVkTQBZXjkxer6St",
  "key39": "4EVLEqp45vU3cSiHJKLXjAUySKhJstyXu1o1aJ3241e7VcSDcd3CpHZn27Vxhi2AoSeuvbcs3rwU3TdnoxvPFLqU",
  "key40": "5neTVKWoDEzfWAfqTUEVE5ZvezWLFRFKZin2yNRKpeJn1Joc3sfxg1fFjfcjzs9Hi3RFkrCd5RqoReCzJFriouSY",
  "key41": "53VHQQWzsyaihDVtHcBhbhGhkpAahxhMAqUmibsv9wYx2xczpezGLz3LbiWHciZBZugS9EPwBoVm5AGYEAnb82ac",
  "key42": "4xPtJaSdr4MiNv9dSt5NDfkBy8VTHQqJbVHzpSbJYbsCw6wiYz3r18veAAjuyVu8cxsPbG3rUPx2TCrTLzqtvyJs",
  "key43": "5i8vKD37wjPCp3pkV4khCmhNzh28HD5yXWb2Cb7nWi3C4TTRSeMoqQqzeEp64Gh54EKDLAtHUuiCutDvncWaM9sH",
  "key44": "4QAGGqtgdorjuT85X3xZEfJzkxshgQGMnnX1coe12Gnm6k2JREkeWN3y9EyTcFR7sHvbqk735a5Y1sqs15RFZsM4",
  "key45": "3vtJjZ39b8mptW22yvGAwC2gc5YwqH5Jhg5XPihAYZhpK1jCVzkrbujKXSWgXtkBg28RA1RZtD8GKs5BwEsEa4Rv",
  "key46": "SqnFzkvmRK9xBtvK9VKJmcFckwttgUTdwT9nw9dzcDLRL7jgcGNDcbHbj9gN8NXbPfZ8wcBwPQBPvYQMf9o74uN",
  "key47": "61pq4xaQs4fFXXi2mXMqJBfSGA6ifctFiCqY6ezVyVivcZtpFtfVQgNmRvT2ZGR5H54P598thX7LHgg4UsGuJhJ6"
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
