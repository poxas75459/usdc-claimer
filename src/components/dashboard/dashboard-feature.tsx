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
    "3CwsXRS7GXA3fACSpnTdPrAhPzYN4M71MkmPModv4BW3h5HjqN4SUtsH9tqcutbyovE1W2PDs3a9qYinKQaXsnyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k6VbERxqmwoq2aKQBXaJQuS3A45q3Dj1BBR5VRm5cWRKJEec8tbUqZPEuVvuGmYevaEMypeFNH2Q3b7gQhk1nq5",
  "key1": "5SWS8fxmpnotUXa9GFutc8zhpPPfsvcJZnAKrFqL49DJrgpmKdi7X9G6qLhGLe6SVrcniRnU2ASo48Pjn84b2h8p",
  "key2": "3E8qb9ok5K96wBMjmyM72qd3QuoW1K2CYCdihhYyhggSfAK6tNqNjrYgfL8xNmdbtKERfUDMqpHm9W99KxQBU4nZ",
  "key3": "2ccfwLJJDBvcfvDXT9zkP8Bnr1Kttuy6B66bQ4aX6fDTPzoipkNFrb7muLCeXXC4txqNscyppfpCF3HnhBcVauRY",
  "key4": "4UquVeBPP8zDzJEo63bqm7FUyS5hhbv54e1kvwFjSLVg4aJGGN7CPGHtpbu9HHJ9ECEP1zJPfjhJyh92yXHZNQgz",
  "key5": "2pkM4MFBAiTR2mcrYUztn34pyv2PopkQ1VAVSW5m6ABkY1oYMGa3gSLHPVbHEdYDahSgMqreoB4fhVgCMP2rgpmZ",
  "key6": "2tFRq48u3pgatLjyshrWP5NesuMbfTJk3oCoPzanLtdyXgqcFRj87kQbHVtvNJ3ohPc7mWjgqTWS7Lf6EemyrdL8",
  "key7": "3PC9en7fT6KQgzxfyzYsBZ4w9r3Hi2XhZMkX5ujFhVBv8i8JG3bL6a5aadnZDFNEjEb8BRa9iATLYQ6KRPvW7e7t",
  "key8": "bDfBn5fAfs7MHC9FRpaJEskqRMkQepPpjq2oEFgZVyZUGFvcVyZBCAwFX9ot52qpavR9Ww1jFcpQetaLPQb5Zsz",
  "key9": "3wdhoazfScq8HxRRbjpkwo2sDBy4v5yC6KziaYeq3MrndShBLpqPoxfgaUS3GBNZeqvXWKFNnohwdAJSG3AmUyWa",
  "key10": "3cT6B1GJA5FYQK71mmtsjZzZ9TAZ3EwQELGkixiUES12M2EdLf43TMk5moqUyaqHkbtWtZrCvjQqzEGXrrps6y4e",
  "key11": "Lgo6qgvD1SPUmfcaPWJCUZULALqRrhtzffv5YtCuZeqPFhRTmSprkZSWW6cewNUFvrdyGM4aeFGuMVpoMkYFe3N",
  "key12": "4nfJ2tTN3tFhphpHXdadjmh1iv76eLD4GBXS8ADKFTKoZoG8jG8qgtqzi5hZDRKPZWwK1cFFgz7UctP6xYLyEPFC",
  "key13": "4tkr56vM4TepM5ZeLxqahggRXDPTTvyseSrBU68yfZ3PpdKKTnaYUJdfbcBynuapXr1qURumhuNcwrinMNNFbphu",
  "key14": "4kfmJvr8tmHXDya7mJWW6un1eY6eMFuKH4eSzCnLZQKH4wG2RETS6sVNmXLUqdipe3vmDNdWS6NBuuwJzHK2CtvY",
  "key15": "2jWY8tG2i9S1obJHqA65TAs38oJwFnBroXvCn2hTiUFVyJvT3esmxFugVSEnwmVCVji8ECDRHLEvYXPoLCqEUzJj",
  "key16": "5txMPftJYhNe8n2zvXtoqY9cd1wP29jiRSSKRXfm2hTN7MVkhporREWnphfmWXHkD134ARr9dqXnjg5Lj7dA1rVZ",
  "key17": "2iZLEymRrNdkfK6MpiLscRDbid4hGmd96n2uZn2ocAgHGsreHPv4AMpoaMN8W2JRafgXoj8nppYLiSu3qyUxYJ8D",
  "key18": "wboJf3Jusgwy3Z5Ee4FPZQi14HH6EjiJFQECpbK7exnVDqHG22CkuS5HjTq4kWab8Y3JWKz2xfGjhHDyVt7Q4Ka",
  "key19": "5fmVEsdVDUgZa55dJGjn4nk3NTPabiSVTetWyyWqmSqqDm98ncqyvf58CttcjUzcZJeGWLwgV3DjdYAkjSLYE8Ew",
  "key20": "2keqcr9ausPSr8xnNRoe4RvdYs5qjdvJi4obUnr48Ezt2RmAxWdrVNEUwvvZN2FiweornKqja6srVaGy5wMQm9XV",
  "key21": "5wm8VuoNqrrWdusa3Be2hJoRWMDfoMU6YAh6guaTLqbsQX6qjiwotYHZCQGwSbGwhcrx42z4F2nBtKkZg6bzTyG7",
  "key22": "DsNJTZCdWQY7DNcFSWMkA8Cz3MPzqD8QBuTVkQhBeBJhzhiYzzf3n8Kq5MygamAm5rq7b1paeUQ7eUcY3kgmsAb",
  "key23": "355Fjx5ABvmMuWpM5QHQXn5BkVSWcpCD5SpjY5bffANfVLg4RbuGxTku4gdo3XAWmdXAwfTZae9PJ7RHsZqbY1oU",
  "key24": "3W3GLGWD5YSURN595An3fShE3pjejCeK461Ly88CG5Yux1SM7rMxXhMYdpbaPwn4SSfmoE2UTGvyduyHRqzVnWb7",
  "key25": "pSYgAB6iSbES9Ng5TQwqVCnEaXL9D7Wa2xAijebMZhMvZ9nE8cye8cPRtkSGCwAdaJNvnNPN5A4s52Gs13NvogJ",
  "key26": "5kdFpni88bLdDja9XTVPzCuxVzQkynMqr9yB2FkhzAYtj6kpeMTZmARy9uWUmmdrkseo9DJNrbuGjjSYcbcBUUkm",
  "key27": "356y8zuhyijSRTeXU2tEQYWU1QJYx2ZnudEyhqoJgCas9rVyNwxfhHc6r1SHLxCwsYSnZaUr92sz7MUvMXc5QcVB",
  "key28": "3NBXmdWDN1hdF8DSWNYmtRsqMgQXnb3TqQckFw38mdxtGFDc15yR7ffcgnBHuSDbdkm1nniDYLmechYutoUCgJb6",
  "key29": "5u27bofsZKCX5Yn3VMZRXG8AdgVrx2rRFWWkNDsGrntUn6nmeZfn5tvNpe439hTrhcrTZNZqoeJnvKyoBDfccG8H",
  "key30": "613TDPARvQBNJpUw5GKZpLa2PArpjw8jXDBXec8up4vpM21YvYEjsSYAqDMzAsUP6sCUuMop6e67PwdpteXiPigu",
  "key31": "3dpLzrxc7ZS8mYFksRuCGEgcxxbdVZQF6ia1jyEeceB7tgcDeb5D2DNCNBR6yjpzp18kQzU4qsQtEg31Z4yfHYB1",
  "key32": "u5chJz78dBrKtsR2DisiBC52kMP3utxjQTe5nLR7wPrf7tiGCG9gTPKUFtPFqieGr4FtDVmYKeEyQrgSZC5hUG2",
  "key33": "EaQ8A7bCYYdUnkyUVfHt8hhDUBPqngd9ZyEQsQjvErGTLpZF8ihvCak9urSXfE44jRWSG877PtXQ6ppybFtCSNC"
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
