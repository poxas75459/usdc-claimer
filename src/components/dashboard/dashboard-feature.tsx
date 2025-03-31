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
    "A4kqreak9Ss4PABcposXr4bX3SqXifr2bp5ky42N7VjX9kQmpjp4dLs9ZunMKD1CHy6WTHwvFQC5ZJ6ckogk52C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAY7YqxdCQ9D6whuYtEQevjnErdPobJnH7osErWJZ6dnGBWszvwmL5m7dQ9ctTMHeHPDRKTErGL5NYv6vBRRWoX",
  "key1": "5gY9JWm4d79HkLMg6VeQoCP6S1BSDN7DM3UfQGfUxNVUjBtkFcvmfKi9ULRDtZpp9ekyYcEYigg1xGGLQo7CWxDa",
  "key2": "5wvCf8V3XjXGCrD6ut8UeNzrFZQSHyAALWeaq7JdzZSEaVpw9G8gnYZrdC16Z5jTHMGMXucP6fz4xPnsiXHicRzY",
  "key3": "495fEWrMT1vKiM5wuULGoD78uVEEmjhuZJXkjdq4qT3HKqjGocU817VDjFYorgD55eDXaZ7mix5AxuUZRhazXuB6",
  "key4": "4UiiKFnsgXPrMwiFh8hQX6yVadj7WJymKEzuf3tMvaaFnWDc14tSW8PfxU4GfNDyLjgayjER24vmvjAJKK5jd9WX",
  "key5": "3coGEDy6ZCTM2LpArvsfzzM8L6F9fmhLz8NW8X9w3S2ovPhxfyLd9EXufcHvHFKXniaDUqKsPqhz6jpZpbku7d45",
  "key6": "3BPN4BEbzLtyLoJFcjVw8g1oVHPRvP6tjuqqJG6WmuxeN8rw5Gkdj7v574BDnzwwwnfircHz62ZULyXzb3CF35oc",
  "key7": "3ctRbWkA2PKWCd3tBuTkw6yi31TjgWNrezeDjSt4zFKz7PAqQaMhHycTdc47P6qjS16yST8mrxqSqRdoUGJCifzo",
  "key8": "54cxicYyVxGxREprihSc6uiZqmMfM5ZrvGNjtJpKVKkyy4s6EYyUzVnQtHB8z8qS8DFg5G4KMQz78NmFgePpz1MC",
  "key9": "2kXC9Qcdf1QmtKL7N1Kgt3FhbVEYahVgL1hia7Af5Ma9jQLFZ1DFmUEoRWM6qjodAkoQVupyVRQhD5uxndeD9anX",
  "key10": "5KCKxgsoHa9BXz4jun2bxK85oRSoNjG63hw39hiqKrhGq2c3udCANFJvra7yT3ZTHyKN4MZRmbWoDKP2xJdgW4Y6",
  "key11": "5NEVE77tLdiLHFF5ej1F1UyHv6NXFzkn531gJDCVrwYpopdhi7wvyemzuQQFKNHfpvR2f33dKCxFDLNYZ4c93mjG",
  "key12": "5JahWgRwdu23Y9vrEaSB5GnUWUmNu6BtQXC39B2c62TPUoWkNdSM9qXZu9cj5AqtyewabcV8fqABgCCuVe3MqEw9",
  "key13": "L7Cyro5u7fTxQgeWMHUPyWztMjD9Apjw1yheuJdYspwBEszzh6wNf8P2TXFRbnAbQ6g3Lp2gYcq1x1AzEsHxcab",
  "key14": "5Nw5pG3bJz5nSnB7ovZyNzHEvsvboGabvwPFQd1ABZxV5kL7E9Z5ikgMStcGAunKmgwmuXiLpa1fAQHsYh4i1U5p",
  "key15": "3noGPU5GDGVjWpQiFmLAE3PETmXUTPsdrYiyjnqKxgZbjwQiYHmxA5835aUqVWhpDDHVqMFK88PU7hrP8rvpJYQv",
  "key16": "raps4PVjFR82LQJkMurD6jWEpLMfgfx9KLsJAEH3A6aEPCo3etBjuPLDe7y7WCRbtPeZapf4Er2QUKMTyWqxLyT",
  "key17": "Pdwah3F9Q4bnzPjrUUUThDcC5gw8aVUWbWYsmFv1eAFzWPw2YgewmC77XsMZkkMFPosLf7PphQjewRzeu5RgLgv",
  "key18": "52XsXyGadqsqgkcbDZPFicf6Z9pxdgKb7t6UGpuU5rPM4kx1YDekFc4QYhYdawLqVG1giRRFX2CKS3w6YQ9bEanV",
  "key19": "b6fVXiK1KTw5T1pbviJCWkFn8c5NRty7tfbx8g9T62fSrGiNh9nq1oDdGc5CuH9yi76FrEDvxDa5Wckas62HppN",
  "key20": "32KCKXwHD2xG45cHXjkYuyBXwnn14ZgtjMDXKCPLKzcw6RqKCawiFbtDyWfD2GLbnHxJeg6GUVwTbCjaAb8FDBqF",
  "key21": "4MXQxxU25fJkvHe4NEqV8DExwkXZxW584Zr1ToxJxkzNWYAHbfwHVB5jjw6Xg5RpfPaz1JE5Rb8kJViQFkBYTbAG",
  "key22": "58SSpbasYuQdtzfenmZNrrgwV3DJnYevWS2PiBSj8cYcUs1EmxXdSSrAc3HUTNxBxTtqop9WbcfTGXb2PCL3uepx",
  "key23": "2piaN9RfoDrwYsvLtZLFwrpdcPnbySTc9Mm3cVCXXjk4Ex7CdPQvLhCtMsQZwZoRUTEFyLA1Fqrm83A2oeH8pLgc",
  "key24": "88MwFtp53jZYuirzUATqWghyv5PN287bXyPRTj2SuTBMcJgSg5pP3RsiatW2UUDeB33ZycGJJLkgH17X26bAWPs",
  "key25": "5ZfBpkTz5nvkycajKFjZ3cvUpiKyHWfnDuRsfDjReMuNqc3gNWYpor3UChwE4dqUaxESDbXMbXJCYTkXChEis2d1",
  "key26": "2ey1LrmfWuWai6DaW9ZFSKYmp4Rj2heXoqiWy9qZpyfaZdL2vkVCTCXHED2EbRLRDgVLhdpcT5RBGfrcmxiFfkPo",
  "key27": "omKmvrPe1Qy3Gt9LghZZ4tXjn2yi4PYGG68K32HtUaE7nMgVPcoEMGWq2sCuAbeUvQoZHwiNuGNZf6xQHwngrUY",
  "key28": "DFv4aEJWGFjs7hPUtAig6uB8CwW6w5Mb7zXpkudPwYaJtihsioWrja679TgYVwK8uEs3ghcVFBBkpskxPzqTBfn",
  "key29": "5N7jEdfXHeBZprEw51SaJiEsQoGwDWeSseifEGcjDFEJts4qzZ1L3KrUdC2a6JyB3e1kWbbi8mxLnmbwVeLTMmS6",
  "key30": "3cs1jabXgWCzfuZRmRYDymoZxLF8nAozBArYwkaZ5pkbLkUe5uuTUPLq1uBTjc4SJQ6XtDSXYCUNLBS15LPjip5r",
  "key31": "5c4ohr1va1ukCLSWpEspbiySTEDbZ5TU6RnYhnki9fN8eDKNPmEHLPjGAGXfd9kcHAmsF7JJMgHXQebyQxbgEkbF",
  "key32": "3RPyE1JQQFcAVBZWf9pXxJCB7kohbdpykRR8xwHoHnBVtCLcwonefcrSMR3xGxndV9gfqGyHNywtfKk4oSwxzC4G",
  "key33": "2yqN4A6s2Kmq94uCqiyaSbGEHt9U7ExPt7L6AQt2xggGUMnAFrmnXaqVvEXLsjRG8s3YEkN9Rdt6puJHJDJYkv1",
  "key34": "4mqBq3V76oD1BU2ZG4XrJ7hDz1PUJ4eAbi4No2Gu9hNRNrTNL8RKJCe9R1fg7L5wKNAn9bcc2yZKcg1cZ8x1VaKT",
  "key35": "31Kgj69qdWQ9FTDz2C2HtGEgM5waiv9qrKN3PhUnUdLdwm6ngMV2TaWTfMND4BiUwzzQN3i2nen84JgLdMjZwF2g",
  "key36": "T8HkgnCfmezN3hXrsXUz9oPvx9mztuveszrzEnPyMrhgfaSMEMGRkX5ndGZQjwRJxT25UGMY1QfV3AatFtGnyUC",
  "key37": "7b5vHay9mBCpfviZiXdDwnTUCnUGWG5JhK3SuKpMM3d52Nu51eJXCiBt18gSb1FXukVJ3CwdhoA7bZfttzYbunc",
  "key38": "4zrSQYhWtAe7W7FEqup2BtUpWyfWzXPBfHPrxpn19zRrzw91mEcZrcB8iWrPWGppmoU28kBpKxsiBcQpMEp9f3FM",
  "key39": "4X3Ynt1bdBbpQkvv2xcGpmEfumt5kjmpCLLtoyKpujqiCCQxPgUyHwERLQo2XvDu4Kbu2XHqzSJdDxLgegKpZWSK",
  "key40": "47R14jzw6xHuXPcPV9MyP5NybD2YqcnCAap6EGvGMQ66pvtd6om4RBW5oV3if3Az4Up1sndyFDo7FNAQSewV2Cru",
  "key41": "5ixQss1qZ3cb2qK4g9zdUBfeX1Jj4A8ei151Jx6FncGF77ENo4jWbvQcUTy562wanT66ucZvVPbUJFzsNkSJdwWP",
  "key42": "2x4oQ637iHxUXT2668WwdVXGVVjZcqtXZkF9ss164juCcKmWTaMBLN8qt2jN5jnpBEBA5x2zKrNz5bP4HgRzCEhX",
  "key43": "5KghwTwMfU5JE6EsUBFVQEzSGinJ8e2KYnw7AxiLBmDGpX6E5EVCroGLDUFu2VEqEtcbXJDhHZRekuRvjgiSzHT6",
  "key44": "32E1QWwGwXQRCnCy9ejmSm5v9TGW2zXKhhc5zJ5tzZfvyAWeC6qwmr3hduqWtxQYGcswDfL5a6yaVC7AKdcvRb7z"
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
