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
    "5Guk7GtJB78yH4XCjPCvvcCyiGsbuiGtAU6p4f9HqqrzvP1SYoCChCgXUsU1GeSyiuj7dCW5vxQLRa5z4UMy46qM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RYfzWk1TVrGr4JQeH6cZcjL3bVfKVJwsVwddiKk8MiEJmUMgbCwLyNPNDfmgDRhPURJUfrEVR48gvEMxWPFuLK",
  "key1": "4QdidosjEceZEt1D3PTLCQPYeTvdaMG3uV862rULWT6xN2sx668qXPVCThwVohx7Byc76PWN5dP2MmDYeyLk8gjd",
  "key2": "2d3y8VRYEfHCvPMJPkv27iZ43gGCsEdDqixT3juK3PUFrGtPUBrsVGEuiNP6e6wfAfkRu1avVp4rQd62KCoZY85d",
  "key3": "3Eo6dawnqLuiDYVHQ9dg6grFVVTZpbQQSV3QAFkE2mBqwK95BHc3z7zQqcHimtXjGpF5rLdKGw7FzmKn6w6AytqW",
  "key4": "49mSVp4g61uLWTh2HFTJ8kLDT3naMzsbp3NJaKgFNdYjtTYjLJep2jQYsoJSV3y3pbNqcJK2ZETJ9q1EKuH1s4TZ",
  "key5": "2XTZyfkp9UaW5mC1vqwTVuRTVhGBFMjDZbmC3yNWZKaomyDyif7uPYgebKs1q22TCDwv7Q7UaYf7hvPKf4NXEzYB",
  "key6": "5PakRSgvRPy2SXdybpCTuJaXd3sHSp4Lzc6vo8dGDnbPkVtHN7zzxp3xfrnn4is8TSE5efiT5wATYVsaGKjCEFhM",
  "key7": "3gJtXWkNiP9Fi9uoW8fM9H1paPRrf2bW9za95d8Ep2r8gDLjcerzmovzUYwq4sFdD49YrgM2MVdeY1SxhgWkQLjs",
  "key8": "MKcAa8ntb4mV7uto2hJ1wqCxPz7pUuYmiCo8iRG9Z94mnGXAY5NNy6XXNNfbwMopPRBD44zp6nVoQh6PnRgHKak",
  "key9": "YtqzNcRrckiDzbiewnZaWdSEtoGVRKfi3YmTZZdyzt1KemmVjJesCMg76SPC1kGPzZkqCgBU1qjEnVY3Lwh4AUY",
  "key10": "1rhEnAjptksL1xL94PeLMZi76MKwztVf5KT5SQ8BPsy45YRHuasTgkm6DaNiMn9ULrD7WSUXF2duQEAH6NaiCHf",
  "key11": "66HHs5sTZB6VFbajoPBfFra7Y6h72gCfAnK5oDU5VpM5mr3A5tjr7jTwZZmTqogqR9GqtRkprJL7hp6tTXW45soh",
  "key12": "5mkMqp9kLTUymgtxaADvwjvPuRhZipegC9LfNjJv9UXh3xanurJUWoNcpzAkYN1B9WGfwJXtsrF7QCcVjtuoBe2Z",
  "key13": "5qr5XfN4skjDAGarkjCmM6GcTWcgJuqWbUMvj8ErR2QYA661mRJoFpDcQy1YVr7dnJgCnqZ5VPkRr23HF6eYesuo",
  "key14": "2cK1Fan88ugk72spuSKGhnUEP9mXxYosCK3Yk9VvHesXr9WRmM7aRXnKAEd388U4vb3aM5tqnjXusmRb5pMN1Zt6",
  "key15": "q1fmGBmm7WiRAZnkhqNVR4jRFwvWWbsg9ugBXcdwqSTFZgkGdXnK96N7rGvK5hMPwumF8WopzobmUkUNGTxJXEy",
  "key16": "3tRkBY8dLAJpvujT9UT6T1gtapvW5iD828Qvsc4BQsT6FdFLSsFMvQDiaRjgoStf75QyiD8zz8ToX5gLU8Q1mPwz",
  "key17": "5fRjXYSwdQLxJE4iwZCnZmm24u2AvjWazH1gxsKcBiCff2uRjiuPxWrZfEvup4yY9fpiB5uGbFzbyjxDcY3iJqQm",
  "key18": "2n8wpwURtGngwXA14ayEfRNiaubvFiqzTd6JNvvfEES276MCgpW9wsuMZf4FCfxJWe2Bcmb22HMUEaDPD3fYV4gf",
  "key19": "26ojrsxjpLgYByrRiFE6wg9NU2r91zTiTNUmmTXLTZnPWpPPYGubskpcauhaJ1peSSRmtt7inyBnVzqVdw1yMNPm",
  "key20": "2AeZyscwP3BKBxmyQDSah4oVjJz9x2LXbxHihN49qa7VX3aDCQ9z1JRHxJ9X2Lj63PMXe1fPtx6YWfFLaWVCdvHM",
  "key21": "dLva6cCFG5yVF26TouVhGchxsTwoKJC9d5gPv97qDczVe8ykXAgoLSsssLFYtF2UkvFTk2y3C9rTaQxHvSrEbie",
  "key22": "22xE1othSJ3cfSipapCQhgky1WCdU2MhWiZ85hRCoFcn5JSriKNHcwwxw21KfRPMCuFZKfXfnTWAUetVKnvUcDZq",
  "key23": "3qqNLEdYzXwHaNMffVJvtF5QHoWs1vryLU7qwBiBfBZf4L58bGAdaMrtHaPbtXVgu3AyzUxaC3xvgRXP5swShS8j",
  "key24": "3WyH1toffoWYkhFR19vtp347LQdojiiWTpvf7qHaJFCahJ11rRdJT2cAb8oZGHcvuXqBhag4NMhxXqiPYsvos7iu",
  "key25": "391DbmP8aBd5sC3E1bAirKMQWMJUvKCue8xdieXxHPdLWz9vVpNszs76QWQdWggjxmAjjdazgZ7qgK69j38Gsz1C",
  "key26": "5jGRKgvF1zDaU7SvEWG1pp1SmNpuaERAv8CbqK3wHy1QGAFCLG7NoL9PaxRqz91xd1zSVoTZZUJnQ8QJn9ATgHs6",
  "key27": "5ymkPvTMkTSNHCWAbcbfppSMXwvbR8hWEAqQn6JRe8hQYDsvCgP13q1nv724cZDQmzYrRW8joAmZUc54YxM6YkKy",
  "key28": "2MYPjvPMTBTyyUFCFcsvFvKWs2bbQbHxJ5FeiD8hcAhJ78jPwPfpiDfcJvxfjNm34YWyLKocT46i7vGiRFooE289",
  "key29": "4xkPXGzXY6mpGsrQMmrF3SQQFAUyQkcywBwj7HusvGL934HqAxkeyM6UdfQo61dXA9FbDiTmRGsBzgoYxUn67Rep",
  "key30": "vkvB9DDHjvZceicPwzoDoEHC432Teb9h2zkWdycYeBu3RDYX624Ch9Xftw6XUN4adbejj17VyNPEHewZtZsNuF3",
  "key31": "65aGV9VKqDf5UonzdLzfpdxP6KwjDxFeg2LWxEAzb1LyhkaQ6rxHoFA3rNJGNbsXoY4uWEi6qrZaWYbFnAYrVESh",
  "key32": "4TEYjz9Jfk1aWQwssT9r6CUtjfijt5MEwpHSi3Nzazpw6nWwb7BFDQGfA75WNfLkMZAAZ7aYBdR263gM7ULBbAVj",
  "key33": "bSkRqXAmckrQZV4r45nDyAdDUD9wT4ANouwexJKReEDPbazSBWrDbTbQ5J8e9HZrbAPz3afUc6wQC6pnSTvvGRu",
  "key34": "65L4Dx21AU2oAfmzLgzeGnkVtt2JbYppeopyLnmsb1GTKGKFgNQLUcRKqyx7nGmAGGjEDFj5Xw3C8hgFPZzmuGNv",
  "key35": "3WrcEKMur9GQAmSqdjnd6McKtPovLcLwGVuHQW1pqwWMqGNG9unZ8xFLwm5z4jXTZr6PVwetYAt3vpEZ47RvK4oC",
  "key36": "2BwDeCSyRKggneZWNuNFnC3z1taMtgEVNBNtSXQTtgh5ZCJbaA5sgDtkgd3M8HsvSxEodC5ZMVrXq1KakDC2u6x",
  "key37": "4hRPVAtrsmMpVccdWgY7KhBF61YtjiJxDbEBq1P3bbLBWtExjqRqEoWKCpquTayN3ZFAUxohHTXs18piduL6wbQg",
  "key38": "3FyUYvgqT1qTYFZ7sbwa2YpHLwS29tfu1ToGuJMvH3xo4UJF46hSLLMGpVTDTVH2QBu7wTRQkaenusMN1FEyFDcA",
  "key39": "67TRGLxMKtKREUqKLy6bXSLCRBNyNtMYSLk5xJTgqf8m87oKh4HkQj8v72sf9x9zvkWRjVnuZSa7gSDBqrAKDkmm",
  "key40": "2xNCwwLvtHmNiss3QVDQX4bdBe6g6ymhLVCA6HzFd7SZ27zWphe4yqWPzFFXA6L8LGEpFZLpjU3VjTpvHMgtEmjc",
  "key41": "4uavVjGDWnuiQ4R3iSCTtFZAA1gTgxr9wK5zk6guPJeXp5mFQ8NEneng6gP2uXErPhesvUKVCAgv1zuYCJ3B1ChE",
  "key42": "3AhVExc3cM4J6u166Ns13XFGiEGbJT2wdnrDrRgsSxRwXkXTSnpeKbSPTikQn6gCr1edNMtiohMrF9bJnCYBDQbA",
  "key43": "5LmVZQqz2S9534QJhaLCGmcshzDzTjPhMZeQjccaw1yUg8EVX6bXddKrXGvRLKo63AiXh8pw5sP9bAzLEyjJnRQV",
  "key44": "631BJjdkzHU85oYNabRM54XdzYZzff4X9hmG71FLiRfZWnXJc8dz6C8EyQHRpt9csnFPEYCHRBpSwYtjNFWACkkz",
  "key45": "23cCVsDEDsLQF2kpxHd7RER7Bu1EnatWjHBDqcD8NvkALeTFUf315Ma4qa6bshevHj7eBZnitnurQ1Z9cZvXhEJv",
  "key46": "2rWXsfDcCWiv8GYm6NahyHxUQj1q9adiB53Yt28XvW5Q4bJV5qFEc4Pq5zUA7vRdFjjddUbzK9re6phUn2DsGozx",
  "key47": "4RQBF7HchFFhsSAvAGcQEaBxjAabwM7ri4ordSkC4kjHyDxA4XzQqQaMMZXK4FbLxmtbMKuNuDcazm3SaF3dBcqH",
  "key48": "yQkGxjuk8kmdQMge2Z5FSivgQZorYcCQ3JjSWwxRTBfCyL94oQn6RNegRkEg5xH6fy8eqGmMhovJ6yceNvx19Qj"
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
