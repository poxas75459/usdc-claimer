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
    "4EjcmTZSHuemTx7TE1t4ZTSfxo4CgQRrYThdzoyQsKQc4GeMJSFpGsdCKt5RbdgRX3g3tG13B8AVP52TNsgVSkgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vTDw1KuQcT9j1WKt3oVHtNbThq7zruyocVFRQRksaHeQyL336dcNFYVoJfGQueJHCqwHsMWG7NuMpGJQXuDbg8K",
  "key1": "21PuDJCjaHGxyfrPADtdoYtStfx6WB9jWyhVaX3A7btVHbHgYPB83Whmwrws5Aj4kr75zcCCwkZJ7bD1EGcxAq6c",
  "key2": "3qGuknhtdTBHLFShroMxcH7vYyw6qppyhzfic7vucRdx88LVNzbQZ4ZK6DKbpUs73AWd3ictdyxEWiw1bECztGNA",
  "key3": "3Lha8mcJUDiGW8NHrtSrX5HAs82EgU3TJx1SY4Xqg9krkStdPh2AskmfMmii5Fhv9cVX7YVki99ihzvqQh2o3St2",
  "key4": "7GnGMp7RrFDTAfbAYVTjaQw3VsUx8WdjAxXrgcwn5G5kHg7EM2u8bgtbyfPNYgd9NMWBbVunv7QwApsPAAqQrZo",
  "key5": "5DTRv6wgopJapAottz4sR3j6VS4J7ACpHSZm1NnzfaaskGz5bcCJ51gyr3v3K2KdH3qXt7zRDgYo7kknq4SGYPVv",
  "key6": "36zMxFtebw7YEwVvNQdGZtYhN8CrfU3417P9HqCk943mSKTwfraJkC4p63kqL9XQw66jgFdVD7e5dfxzKC69YMsP",
  "key7": "3w5yV8gaPVNFgB3F2FejDuwH4p9fBugXZ4g5ToggrVEMDEhkFyt4md4NqhyWj6BRV9JfDFVuSUYDv7objKFQjERA",
  "key8": "4F8vznNxGVFLfN6kdKjTUd9UCDmz8NRqspzyV7xbyzQicvaV4SnkGt2vRUTgNWSGLTnRUPEeCd1ZWBxAT5dF6TkE",
  "key9": "MzQ3kYAYqbzenfEd6MJGSQ2u8nBD7hd2LwAM49L48jWoVUEnieLdLdMWgUFp37LNETA1Wecj2czscvMBP9kfGFt",
  "key10": "2tup7ELXXpAqnnqy2bjgSnMem2F7ZgGqvGJS9PoUhuNB4tdoGHfTCu64JgCXv89PLkCJfen5kvKu66bFC6dvrMeT",
  "key11": "3mhNJuoGXDH1Ky4v46shiwbyAa2PTpGd7N4ykoGo6mXjkF8ewGF7YiVkoxhWpKZyVAZLwLL1LZsRGJ8jqyXGnhMd",
  "key12": "24os4JHjuUbQJw4Fevjer4MJMvGuKciF3QbPGB6Fx5aTmBJ92brn14UrWvDMhJKdtPxCNm9Pf8qxNoDizEirbTT7",
  "key13": "5Edup9669HbHFLyBth6NRhaUbWS2Khw9s39pPbX1XY4AC24oKvfvvndfW6ntVecz2t2TizG94U3Dbhu8D4u9qSYW",
  "key14": "fu3tUWCS718Hs6HKRXrpnWrJDD3D2j16fGeGCyKQH4UFNjMz1bV5LZdpFtmbV6atbZpVJjPPHPsdhhxhE3HbGZU",
  "key15": "5T8c4Eut96CbTKXUd8aUBsGkK3RT7A44FU3yb7CaHg6BgQAbfmuTtSA2FjyxBNDtpUDuvXg6Wo4jcVJoy63DXTUF",
  "key16": "359kDu7F1E2NzsRtDAf1KpZ5Ufr5dbr44Pa6LkeTEaqnKG64HMS9Tobg2NH7S7TcU96gLY7TZw7RQtg6xaiQWXPn",
  "key17": "46ZSCEc7p8bpd7YYkgjaxfvEFU7VbpJnoDad6fAyzBPc5CdHtnHZUxHZfrUbHJ9eM4bD367AJryg2zPYUZSmCoSq",
  "key18": "2KbMjx8tJPBvwitPyhz4365sr1VU5M46Ny4GKQpuT1m6ysg6oMZBiEAWZdZksvimtGTbA6ALNmFmmTH6xfkQjXRC",
  "key19": "2jiNTnh1uapD3Yiaus12zmfB4U1xmUanE5oGraedyvnPfFgS9ns1ewVC7i7abrLmGSSibx6V8NTErF5UQmbGUHhB",
  "key20": "4nLwUg6nowAyEpFiJCFeS85xwwaQcYqUG8WxDx2CNCRhgYospm5kxrUUyo8tC9gmkaigQYwgpcnwWf5kLxjS77bT",
  "key21": "3Rgd1tXQaa3b4vgcGEPZx2WRNiapMcfCemSgPnWepu5jkQ4517grDcF85iy3Gra4LksMKWPQQGcFs7gD3DrXZ5qA",
  "key22": "4HwRTN1fB9TvG8mRv1b1wM3j4913XbHt8S7X12mpsGw2Gcx2UJYCo4Ag9E83CALQDubf4DGmSgtNjBqKMTCUSWfo",
  "key23": "3UqDbaTRFGVkVavrmk9uX3p3jHJxhYGJfZAbWPgVPHfhKbmEaRJhRP2dftTEnWBBJfXT5Co41WmZarWnqytRR1K1",
  "key24": "3v3o2aUpJQbRSU95hxEijAKxEabW1JbfD6xAZPTUfAcYKRPs7g1jKUq866GGeN1UWaMg3kELQGxAxZnu3k53AZ7R",
  "key25": "4RoiJNpA9hPFMYhPqNNtoPPP5NWwUCDKK3UUNUa2WxpUUPefHcrRvYFEMcEN88xc1PqZ3RherPYMZp3CRvGmDVFY",
  "key26": "5232a5jmDGc4Se4K2Aa2LkTQ8w6JDiNtoXMddQpZCJHfjBvL1jXoMDKfLVSEmEdmyXPgi9azqyuzFSsa9G83qhmy",
  "key27": "4HAmSsLPg4anyFtnSUncpEumDwZRxonBDH1d6jQ6u8qBN3FxTYERV7TBWtY1H7RtBZwnYBxSqJC4yiGXJwYzfgHy",
  "key28": "3QJHKd2iHSeQo4RTye4iUPmSQkSiqvPxNqxTw6WGDPWAhhgTGq3Msnf4Dzsqfzc6C52m59KuE5iBK8ALfz3Lg6KZ",
  "key29": "5Z77iH7JK7QtZ76okrBG1anZ8jUrmuSrbgYcHDBzoxRaopiPoV7aUZyB621nz6DP2FSHagNfSrt7bLWuzVtFEvGm",
  "key30": "3SQLEfLy6maMd1Gt1VUR32j1gdU6iYQs3DhetDvm6horMqgkPi8qCjDdqnfNJ1pDsGyNtNgn8NqYy8UbRM1WuKr4",
  "key31": "59XjVvPDymTC4okVHDruP4vkAEQEawntET85q16tGRqFaQPiTWb3dR7EV84giy8RRXT2BLLWnF2chyo6yHqRDixQ",
  "key32": "48trRNCRicGrGcT3s7sRQLYsj1i35zPSk5Ho9hqrr6vd8dBFRLUiQKMhE3QJ2wDccjB6JvdxKDgEkLXq7Tk3PvRG",
  "key33": "fJoXhk3ZWV89vaaw6LZBHPUDPHJApkKH8xeWcj5iWic4GMgYxnFMrcjNFxXr5iBRRGYgGKM1X63Rkx6mSKxbLef",
  "key34": "26W7nmDnMfWc1bJT7DoojfiuupM2s2imSYjSSD4VE83qz6YrsaWFjEv4mBBDUbZxsA9KpQ9ZSbyJiibBJd8vKoBn",
  "key35": "5Ymaz1UfVjsviz1Rnd63xAjKBACwRU8vWAZC9kjaG4Hh5zMjqszLxTxtCxRBfiT2mDnMNicbKAmwsrSpbjHC57fD"
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
