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
    "5kF4JVpTHdTBxkSUv1bbg7JoChqFuNW4xWzNE88jB5sxiv6D4ruL4SoGbhP4rbb9LtKho3jThrex1uJmF6v2XV6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FL4joMq32nanb1QFnS8rckdGMLwmGjLAYnquqD58mXBjJ93j2EQfN9c8TJvQQRmpnXU7any2nyXpVbLGeMevMCY",
  "key1": "2Wg5PDSqa21ZHQgT5UMKeHefWFVtFSM13f6rMa7Y5cVrg652NHtkugQQTre3Qj14tP7qP9AYMuuvPyUtrGJRnzcn",
  "key2": "2drrsfJMCVx4DtZXXWY3xwoVkDzeCQGPuUQ5WxSQpjpACazsWjY41mKvyD2jjHZhtc6QCgVrLzvDyr1AvZv2uY6x",
  "key3": "EWQDfkBirqg1w6yNgPAiDw7v1Z1xfGfRKDbW5J2fYZQ6cVdkN9PPMvFNYLKpAtbJgXV2AtPWtNyDPdH7oc4ZWn2",
  "key4": "4uWEcjB2kc2gBHzgkLnjDF4ioxcGWaRrMWhLy2vpow8AaLa7gsK5QdWSU8cxTgCr7tVzJGPAXGSxKessvTDgWxzJ",
  "key5": "3U5uLaw24FHQnFfiqumok2nse46xNKkFwkop1Xtp3zCuPE3MmoJLsMTk6LtCB1DeBeZqtZ2wN9PpFGcU8zbjkRTa",
  "key6": "2R4G53wiujYCgMeawsnjKtHPhKmo8yMkyCUn2ZTHCUeMbA6sFBdxzdbx8FLwnmz1SftCt4rohrtuTWXTRiYS1NA7",
  "key7": "2aB5JNRZYTuciPvFAawCKmYvhxcGnXeUR52bG26daG5nNWcjEHoPeHJ8eFbJwLfMjFztF6KThVN6qKqgTgZUJS1p",
  "key8": "2KqyrGXDjRqqceHeXzRy9b1wh22wisCW6F4aLFxyP8ATE21L9iy7dzvHcix4SN8v2oWdiNmjB5XEz1AWFH9zJ6yY",
  "key9": "3SQetFdWvV1WsvhsDfdj3Jty4BuLkx28V3TcFcUdfhoNPTPa3Xg9S13F5PEa8kqKVxRmzDAG8WYcdnUgKR5Ns7MC",
  "key10": "EcY6Nyx74M9uCXC5zqYhxs4TJVgrBqVhxvVbMY8Ma48VGir18SyT8HeEgafyAzoUM3ZVrZr9zV7cH7Le3NhTign",
  "key11": "2T6wvouoP8ErHdBUbuMuBSEiPSUMigi7AyR4rW9kYm3mgFPQW9BkGK9qeUXz3iYWXsCFGgJi5vtM3H1w7Zm9yBMY",
  "key12": "2rrCrddGjeAQwwaHizVcXTVFETtw61QGkhaGj4NGeCsqAMx7UmtdZUEadFs65QA9VzMdyHsqJAusb3ForcDnUNnB",
  "key13": "2vjPw8r9dduNYUWwSecqn2a7hw6PRmaPzt18grYH98nYUkhRnaThH6JVmDG6u9zLKvrn1m3iYeimHdYfjKT6RnYs",
  "key14": "ufWVBWx6W7sn265igiKPfpUGhcA1kcqCc3j2X2doML8Fju9fjxKHdBU7i9qAKYRdGBcr1fM8X7Q6YX3qTTXXBuM",
  "key15": "ZZvicuHbUkK9AC8AkFFbc5NNu2asfWj85nhcBfitA9kTGMmYHHnCtLFxoSCfVdrfY4TabXHGjtGVXZGas1h96fR",
  "key16": "2vWChTnENzrmMPDw4NRwcMxodKxgTrFEEsyUXLa85VJDHdFGCnAzRDCtUXy9QkyeZ1trVeQV9FFySUi5KkLHsYb",
  "key17": "3yD1fZaH4huLEzV3btdSGdzGajdhbc6qY3znDdGq4BXi3PA3G4E8uBbxVRTW4v7wEbanxeGmbdjdyxv9kQJen8EL",
  "key18": "2pSN4azUFnShGDZX9pH5uH4eQeudTexNjcGtp9TjyW22P9krYg4outpZnLEHmPHa4uATa5FhRZcYouB1Vw4BC4BY",
  "key19": "2VTAukpLi3mQBCFtaVVQKrUbtLxvGKPhBTepDYoSNdhYoXD7SyJkj3kyp959ggfgzQccneEVAimWQEs3TRrHr1M1",
  "key20": "4QkRzW1Y6mDXfF4vufvya8v9HHMBSKDEaKQPEmfdnnCW54TMHDQCNgSZz3TuU89bTtAyKg9dRpoMW7tUMBcuqm9U",
  "key21": "3nf2Afyq33gPmzcHtvweFUAqgP8tVr3ArDaJenUBArg8jRqSm1DSRYFKPSA3uMLEM1ffaXoetcJCiJBqkX1LPJsp",
  "key22": "31fhFPrUUh3gERoh2X4R8WBbyuyju1Rbc5t6Np5KV5ANe6ribAaWgAvxJmb1Gvs6QhvEUw9fY1SbWTvHWJUNXNHx",
  "key23": "XcvdtHvdGpnCKhva3qFcpjsJ8fjnKdv4UCHdwgu3uifvwHgMRnygWdgXBgywUwo64fGTAgmPbh4TN21cZ5b2W8m",
  "key24": "4RCcETLyVXvURkSpwL4jjbsMwpE86PZecVf2B1F4tK7mRCQ4u1Tf1R4w2vVXHMXUrcCb8mQGnVWHLp2JhcnvGvhh",
  "key25": "2tmefFfzDyLiVexiN3euKpsEdusYvEv8jwjjREaYZE7zWb7YEknRNjYee1HzpdoEB2TWPfYi1CpziibmNJTzxABG",
  "key26": "53Jqe3TcCUxE537bDRym6SusVeTfxnzgaKyeyAD1VaHc56a3e5hJbJj6GFqcYfj3ddonVPp4MiYnTc4MrArfgQnV",
  "key27": "3yR4inkhtYVua72MYtq3HPqD4fJudpSVg4qAd2sGvrWi9YgTtrbtVLstauZS6PD9qikiXFdEvpPrfKQPwkRAcwXA",
  "key28": "5imjpyDiMax2bU8P99ykjPji8FWdJTuUHNdxRLy6s79gEayVkQ65NFtbgACxXND3jnSDGd3RKUazMNm6b98BCKSB",
  "key29": "5dQeGJXWZgaeYSc9Jh23PdQUiGZY1oL8Pb9qUkc9xKGyZ5K8qMDLiWpANMMXsFrBcTDHyTgbNGN66NGjjZp42GWS",
  "key30": "4rLqGTukAkzrxT2P6HTB1vH2tMLkhaZG4bBwZgbmhrRHZBVgrSyDQr8V8SDzWuN1vkBX63cA1sFs77Vf2exdEv7H",
  "key31": "5EgYuWzPXd1PX3otjCr9CMPTBBge58TzypGxpnqrSfee5NQX2DRHURqM9T2kdMHjiRMZKX49ZDv4kbs5UJNcwUeR",
  "key32": "3sVoEUmywz9561SFaNBpkjhtrQqFUZjxpYByEbzeW6eSF1iWZDxxVuhgXR2hmbMFLR4EooTDk4GG3rdqd71F5rcm",
  "key33": "5mnp7DfrrCDWjPPr2tj1Goe8iGiFreDFG83QopebEwy7Sgto3FaHRhwpr131qKrGwdEkZVYVHYoMpVnoMsSr7Jk2",
  "key34": "2B8G6JZijtLiJqrdziEkbj9KcqfLcCmznzwjtDFgh9mPTLesVhawjxdUAwm2F96hiDYWvSceQdiuMoxXzNs23ffo",
  "key35": "2xBJYMvv2zkoAXZkcbjoXcmhxhpeBJSdK7znBEsN52Co37QcxPtYaW2E672MFjxV76FFgr47wWCUdmibRMjWRGj8",
  "key36": "3BNepYmQYZ1pRpaqjANYZuj4kvWfVAFm4EtXDE3NtvRgMKqweUCngLdY13i2zpwnUbLsVWXcDx82th5tXNyCpzia",
  "key37": "5vAno8JqDW14zJYrY8PRcVh7gFumkF19R36jR7dURgENmbKTH5aeYbHCgyPCk5nVg9bQ1aPqstBBdZZWXGpsqPsu",
  "key38": "4hszLkUYce5CgkzPTq9TnZ53T1Wiq8skzkiFCnX2Kif75E65b1nbVDnmUNao1HikDX6cugYJU4uWz8hAJFBJgcYX",
  "key39": "2JunSWzoyGXxdCEm8TTaYRhrrRoE96NkNA2yx4k2jhUsF5CknCn3nU9NgxgxWLWfTTFoguXP3iCnX7FYV9ukviK7",
  "key40": "3VEVXXoMJFG4X4235TBd5AZzTWZYzbdNQvjGVkPQqdkMzi9ckxiFfmxDnJd2sD1fzJ99hanPeqEF99EcimqdMsq1",
  "key41": "xbYKSYtH91nPQEf8BiFXVyFuF2QP8GSJBvCk2bLx5tPKSB2ykJXnTBueYmh9JBGhCVKMhMbk8FkZhEYE7YFwNBf",
  "key42": "2w4WPYkaiXsWtNuXcmAMesWKj1raymMB1mzYZW2WHRdgFXYsCnFK8VuLAdGrpqJJuLcuEukNeJAbN6ejvLoW46Zj",
  "key43": "46gyyjvba3Qbzwe1syadjLBoAxAvDyg1H1PiRxyxzecXSajAL3rvgMR8kUE9QfMMaVaaVLjpk9MmWYnAra2V9oFv",
  "key44": "3eveadBgYNmGoj7mo4kaEg3m2ZjSGuyhQuKfmBYX3rag7Yj6aMtEJUoK44T6sdkH6qzGMBrehrFTqHumwiYm7AGH",
  "key45": "4ts7WHoDMT1Nytq9HNkgcRPM2qZPT8R8d1xQV4wGPs4GM4DhN4NYP4BLwfdsT4KiKRZKy3BD3WWhVnT55jLh2HHV",
  "key46": "2m1ZmcwhcLJuMoJTua1TMnh5Z7zTrNFokXoM7aDUCRd4Hf1CytpJhciersK8tW23s7eaEsApPHie3EThV68LJX54",
  "key47": "2fntYP1PejM2WRKzwPCHdXLhNJgpCisNLv1vz74ZqDJPeHtp4aXKrSM6iCNeLpoQuhepuqLp9XtcWunbdbsy9Uxo",
  "key48": "5Cf2q3t6TfN64f6yNkBHeWbmi7vo4NDz5jr754wB3v5PEdzscoVBufp7n86pL4VV9uBdxHi61A2VXiup4otawFMK"
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
