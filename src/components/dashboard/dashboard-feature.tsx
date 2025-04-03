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
    "4vSQJ4Pq1hUYcs37sPe9gWerioLsPFjfSrUnmBocTXtHt5q7mHjac9ri3o582YEVD25EFm67tBXWAcKk8PZ63NLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ey9pP6nQ45afbcHzSb77hxZSWPB9dcVxmQPQDK32asNjv2vx5nnis5tuBCQhFSBr9xz9yxqQNMAintEXL7yhyVy",
  "key1": "gZVvHXTBEryHkVysJeWdvSzXjNpUNwyAPmZxVpXwLA9njMjzjQ2s8X3wpQc5xRHdwos6wVLPyoMRsXudWaPmh79",
  "key2": "4E4Lze8jxrWxb3Bgiu9MrmMdA9YtRwU9vhc5UugjfNTSQvje8HgHT2NEQd54G47N1HsTrSmXB8Hx1pPRvT4oqW5T",
  "key3": "4JH71vykjKYkZq2yTSMRdtQ7rm2NSdu3SS11fVssiMPscWKkHKN9GEUw9zNAriJriVw7YzWiZigkzrPVc4xrBSVm",
  "key4": "3WqsudcoiWn2o81QJfN87M5UTDrj6TcM18eYEocdkJ9SxuhRjKzreSwA23GxFPeF3u22rW5qQmh6WaWUHuPJdSKR",
  "key5": "kF2bVP381GFx6bxM9ktKqPVpNMRp9DsmgSSQi18wEhqhyVMXphuu1TowqCHMpoo3aK6dBtATLucQhsBCir6mZWm",
  "key6": "28oDod6WZW8csYR96yN1Q51EVH2tDYhQAFVA5vp9SyPiudTXw8wSEgCX17FSS4WdpjY92DqRFxZ75MdrNrn5MhU6",
  "key7": "4brg3zeY6zmP1tPfVWS56CxU3RaGN8LM28XyCn5ycv5F79kpEdekm9gbnmkUwEqzt1dmbucE7Ex42t7TCz4pyXxx",
  "key8": "24wQiT6Qx4K6Urrj5x37apTfXUvJzx53P82kfJnQ1Fccz4th5Zu1SDS479a5fJ1M9HSVck32acxchoX3bGzScBic",
  "key9": "34jrG9EuegBb5kvM8qP4ze47BwrESTmx7PmrU6SksLQPF7cZoLa6uxXCPfAtA8CYkEURYv44egxD6eGEsVc8rZsc",
  "key10": "3PFKHaUyqDRTBKwHsg3bxcU4YtbxpZT4dqrxjarXLcVASsTSUNUT6WmjpTieqjoZEfrbnGT5YpW3StrbPv3daFRj",
  "key11": "5SiMHrkt4fBTRb1CNdVMUU2gXag7gDdYeYp93DFWA8hUsSw3cuhfMTMA3gCobJDCFZWzhSRzYWLPQLRECeLeQGiW",
  "key12": "33QwUNxPLUzgifckYAG18K7pr4bCNHQFiutsGu516T4HBMWFn7xcnJ3Yaa871V8rSN1prCviB1gefN36grax5k6r",
  "key13": "3zMKo77DemFMo1M3rT8TLvZxNf1h63LoG2XCfwSozkYf6M3xkm6xriJ97Az46LsuyAakGRFstyNe1KERXuHe8czL",
  "key14": "4aG94tK3acytejDjyou6XRZy2LWooDYvMBv97XHouH3zK5FX4847UhBcu3XngMFqu2uaaDjMFd6Lia4w8fNpTvoG",
  "key15": "5BnbgKSzXZteT4tWJajJvuY6ZskahjyZFXpFf2eYq9ZGLEjZ2kJBNVExDcKcvbz42N1erfzBMVJMVv7fJWL4i7Eb",
  "key16": "42yRSv8r5rAJJCwM9D8mBQTmdt2iJWk9zeLkoE6MpFYJEHbkED9PAHnZ13jBfrGN5AA8ZcMR3mFwWQK8G3aA5Hda",
  "key17": "3kxD9144jYoRCZNfEGDV97VSHyjqh3DkGG8ho71QwTHcHoWkmU3smW21y1CoPsBtbLJZ97eqvvQqca8zcKdmUoAX",
  "key18": "2LAPKfFTvAX7NirGW2Z26XedVrkeX8YmG8yP4xsYV2DSKjfgfRnrPbAd63jxr9qTM8zLU7AEbwVfQTTvicMu9B3u",
  "key19": "5e2yKUCRAgpd1XsyRbHJTLf4coSakade2H42Rk9XnMVBrLKvPdMpRrksSB6vR8DSsthXrNB6jW1BzR8dVphz5fi5",
  "key20": "3BSzK9kUWKwiPWDWFk82F7h2aW7RHRdehejJdpTMtCMYC2WgofaWgmEr1WWpnXkfs5uYxaHhfi8gjX3XAaWktRWy",
  "key21": "3gqaC5gu63RbhTfJGNL1ueT5BVEN8zojiWQpSkPq36bhuopycWcqQb2J2t99CuAsw6cbudcf6Y9furJnnpN56x42",
  "key22": "4etjpcu58ru3dkQSGuY19TkZ5mn9bsNqKNjRCBBuqHmcEqhftn15XbDhNbwzho12qEU43Syk7C9DY5iCKwfVjfA2",
  "key23": "5PKgSiXrgeTNgbgNVDmTHSXYFhojBQMfNFF9Coj1SY5wxoxTRhUJphp9qfzFgdvme4JbniCdhpaaXqgLuZprE2RF",
  "key24": "3d1rzmGDNBArQJuditaPvS9Wyu7nt2haDAAA6ByRDecy3pougnpUTnU3Vg6zFapXPaxM7TUqTytyjy6GTYTt1HQ4",
  "key25": "pFmRjwyodjm3Nr1Py1c5HVUCSExg4dHRyBje3EUhx8zBSZLurYAuUvex72j64Lc6YEQdvCUQNGihDXe6KJibBkM",
  "key26": "3FiASGi5vaqRJwbNjMW26dvQXAjKqzzBtS5b9cVxrsjdU6ekFbGozGLsNdz4miSgxqjwjRy2w9cvUKjJEwLRqBeh",
  "key27": "iLLx7izsv6WXsxLZMoK4mauX2U1nyBgpHSFYZfYqnzfUGYae84174nTYr3ZF1X8ugp3wuh5RnhGHBu8ymZoKmUa",
  "key28": "3yPeZ6tKbhQ2a9XNmyN5jmJFE6ftzEJaLouQjqFpVUxVvQc2BwRq4xZtxBFz33EF7iAtKVARrVZMReC5rX1Mgu8w",
  "key29": "5JWD7dC9ESxUDmBqHmEkV7aQqiMsKxY3wHsbk1xWDivwmkRMJdoK7pTTcat3rzhRPkPgJME3foiCvb4AWk9b8Mxi",
  "key30": "5dCGRGUurmoWrKLiDa1pPqcwgUg66uQw3YfvrmZ9jGbx7vxjrseLddK8Et9RBAhHBoAa3Cf8aEhgx3jnpSVpeXxZ",
  "key31": "5apW9UZ3MHE6RU31PViPvs4ks7K72N6oqme39Ls7iu2eDnUoDptAmTwNBdGhS9eRuDwxwmRDdwrz5eZMCpATpq9P",
  "key32": "4dMGPxFxf7M75SHc2RRDu7bEX1X7v6DRzQfNvMCn6W7Fm5wehjax6Ei8PoQrtboZ3FUwKVzXszCxm2zVVRdvsFkP",
  "key33": "4MqP8BNfFT3PbeoeR2h587Wvmgd1akSNkpi4dFrxKFwVALA5Keq6U5KxeGABLEuX2wvoz3DHGM4pxDQaBLy8ijB8"
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
