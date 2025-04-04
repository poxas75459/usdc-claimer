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
    "3EAE9FWuXoegzjk51gGMErfqU7soq3YAhaGFPavYmhC84EjkSTaPXEw5zei29AAVYM8KoTFkKtzhmaFqZqh8M7u2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SUUxbamydnWyNvwq5zPgEeNZFK4Lisd8KxWM3pdXGVH35HNey7HzA3utpdXv7pL8m88Z1kd6YTxy7my7YBcd579",
  "key1": "jrcGpS4TJrdgTXFztmTLudxjp9deD9WAeQkyyGsH79CM2e59vQ9jYXLu4MCzSP69MwJsBf2mCnmLDB8kxYm2Vs5",
  "key2": "4FWdDdRiSKNTF451A6J4SVQsoEGqCd3bqhJ8EUjd7zV4z85WjiAPYv1kx6JMSS96yx5eJL7GpM8FiHNTEvFpFace",
  "key3": "4eBwpLuSH49uwMF8ZsqLrNdLfQXHMCApdUDRHVbxg8aUzoLsMvWyEaf9ZJqd1KtpUsNhU2K2ipg9YjarTDHJQuix",
  "key4": "aDrr8XR7TxaeDzhSzyA516DW6cukeH5pfwYTVfJ978UN1FbwcR3zekQk75MztiXVPXxxtWmD5XtBJvNPfVikku6",
  "key5": "3aYQZLtRZDQQmQJfpLr2L3SdZXbzH6ykB2JMPtDrGJQXCouVUZH6i7KDB5Essdk58imnWt63HHYtFBUomjYbg2cD",
  "key6": "2tHQUNwRZVv13eCXLPtZXiQEJCr7CmcFigEx8V32ZASP2CsY4UH5BGm3fgEB9RDAhqUELSBF8ag8PthXAYHAXrFy",
  "key7": "2rY1dWobTiSQ8KfPici3B1fcq6uums1tSLk1de62S6RrBFyXDpSU4UWQxBg8PSPzRWRGGfqkBxGV2ng8UDsw4hFq",
  "key8": "9YFxmYZQPYDeMjRsNQcXdRzQZcUQ6jpghjQSssVZfvytWPLNXUUZHk6edg4o6qRsiWvUifid3ciZ71HbHifL8Lo",
  "key9": "3fa4TZPfp1UL2miQ9Cw5PotgFXRedF9HjjgfQUnLssJd94YwCcx4meThHCe3dPKQcW3XUvSGUPZcVBpqreMRG7Zk",
  "key10": "5b55knWPLoJFhZffdLCJ94qYvHS8WfmG4f8XZHSzgh2s1sCg1gUoFEJP74ehmndJAmfLQ5HqjdETSiGEBiLgQrDc",
  "key11": "3VNWcZDEXnKaoGpSBEM5SssMP1NzKtx9pyapbG8f4VmgMBKbY9ZLVjgMqHe3dztiejKohvhirpC3zEyBpLk5kbXy",
  "key12": "2SjaaiLUFboDTdyrfQ3uEnD9SUyG3iPu7pG7o4qDyb8jsNyGZs1uGs8EsiRcJYA4JTK5pfJyUdfgyrbqEP6iQHk3",
  "key13": "2jspatwyn62MSSgmE1XgAuNuv5pwigFjusiVYv59F34xDnZ8ymnrNMdnZZ21WwNnBJHngNGDruPeba7TDDSCW6Yx",
  "key14": "4HcuDe4eymyGyNRWd8bjWK2dPxfdc2DszupvMdKRuukVRz3bQjz28A6R5XG49dH8kZxKDxDZ5Z3vEWVUvJYZJ1nF",
  "key15": "4sJnTcS7Npywxs3qN1nHTG4V6Av14Cmm6myWYp9ANyA24FHVj6sfcVx7PzefPBneyVgTR45KkmE3Dn3ZQiENM3Fz",
  "key16": "585NaDayNHqyMjMz4WgQUHcHiqAHWx4po6RTrjjhYfu9Sh5NkNTzNH3ricrdmLAZVq9FX6M78Nf7iC4uneetQCSA",
  "key17": "26DkMfYCZ9RFJKfWLmdHfiPj4DMu1WMNCQaVx8vS1EhdPrqm9LiyQEpjMjfzRyN6dR8jcSU2Gg3DSgS65iLCxf1d",
  "key18": "5WrUaKQ5TnndeiWuwqNDUkpfDoPi56n9gnzs1xdoZjKynbP8mFzjXzQoicX72mtZdM8oraxPsQgUnswKAwP6dffe",
  "key19": "kAeLkA2TRbtGTgKyvZikVCY36xQLKquh2EYgJJqt9HfPtKrzG41SoCUsVKuNTitSsdsK5EWRwa5r3UjbQA949tx",
  "key20": "473XA1bHn1LkHNyysyJSC8R4R5qpzPWZWwfmZuP7HF4hc7gDhwoX7Vu1GuYSDUjWp94gB2zFtcHXfS6B1EnT6pjm",
  "key21": "5BphqTvDStr7BG8HceZf8EziYnJb8M6Tni3ZmopQoDDeofppPXZDKSAs6SgwfvHKryrM2wLw8njk4bXwjMVus42a",
  "key22": "4uWBP8vgsnU458JXK19xhhgCc8dbfo3RdGk6JR8S3yv1Tjbkbnfdbb9w6WL29prc8q382cBgEybiP1Th7Ha5jfvq",
  "key23": "4JWR2kWELGpwfRfW3qzZy8rm19WyfVuCnJpFHR5BUAKKc5UXTSv1oRjtAB1JEJEHJcwhnCZxnEjW29JWbeCiSWXq",
  "key24": "YRr6TKperDV2nLSuKC4RFC6ao3pfgRLrL3YTrTdVES1uoTLsrCfbhnB1W4gdmNhvcSVQxjc6Ub4tW31LuAckpwZ",
  "key25": "32wB9syTaQzLKTi8Yy2LiwquqzeUV2nrE6Uu5w7ef4qa63rBWxfVFWynhCmidB8d7sCh5xGW7SoJThyM8ZcEwBc4",
  "key26": "5NCYwK2Pbdd4cnMxQuwewQdCyAi4agd8mo3VJ2MAfxuo4gcetdzWaChZAaXRwSgJwoMAfP1oCoo7iy4JX7ddFh5M",
  "key27": "29wE1YYSnRGy31H3Qgj9SyEDpiw93SrCrUAtdjU5ghmVMbtVkFuTkQY2WiUTBNSTvpFDJzmHyHT4nK8ktCZqD6pZ",
  "key28": "rgHJdyDaDFLjqpSpAXKRDqN1V5KHc9zVvxDtAseZHDFdTGgzwGgqpbutRekyMqSw1wwQuJHSDkwRN2h9DL8MsQg",
  "key29": "4pQ6uuLP5BPbvhVry9u6xV4oqZ64aHgGDdS1JuT6guYkFgqoMjqFbH4wUFFJtnKdAeAatkvz4pkAi16WEKhSb8DJ",
  "key30": "3q78ykACb4VVoepg2tE4kmQbi1pXGc2DtGAzJugn8rRWr7nLWDpmLQRBh9EbMZKANPSextEeAxFMarYh9uM3WePn",
  "key31": "2Saa6f7P88gpLUu2v3e43KBeVWZCWL1FhhU7AX31RH4Urr3GCXthUQLav4MAfVZ7edGFBqpGMaFWvvC5S1EWyGjc",
  "key32": "B9DoaKnkU396YjnGcL2zRM2EGc88wULL7VwYzeV4LjwPoQqeeuWHdA9rgAxvguEAGAEtJAqhjKR7zwun16BhSa3",
  "key33": "5N7qkMwoqjaynSsxhe5A6zszNUcZXLrQcPUT2ReprnRt3PRtxwYwYeMgvqsrzrZGaChfXzHxxoCdhUMykSmR7jFC",
  "key34": "5Fy6iGxcKDWQcvGAep1iKcA3UM433hWbTnAbKGVZyUxLLMudFW9jFt5hru8yBjqEgxDhK4YDgrkKwHaqJS9qAkhd",
  "key35": "2o5QY6bX2zC7evMKW7ieKVa4KRatshRxqo6kVTbibeGkaym8Gi9tCKzjhffyAmSMLhYSZKXvFSRzGkekixwF6GwP",
  "key36": "4nL4M9ogoWQsqdzWusKGxtARbcbrjrMrg7q9iodKuhiGvGJW9jcs6U3Xiv4w9NAxfpxX4jAdwuxV9HFQmmCdh48J",
  "key37": "3AqYtzYEbWc3cqpNZqgZfkvH4uXK6FE6FAs1ahwwwzu6V4MqwDVdVbM26rYhYwHY3Za1CrHgAmQ8Z8YXqgUPh499",
  "key38": "N9pxHs76DBQCrjE3XDwYefg4TSktDxGPvJ14qNQ5UpDTFE6rXd2FTGfrEuoPzwnRFwjnvBZgCosmHHBKvBSPHUx",
  "key39": "2UGPPraBRUK23GSj1ABCR1sEMdvAtBBwkWbxVxWxS1K3DZxBDJAP6jrM9cca8qjfvC6vJYuxQupqYiAgtcAaADRw"
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
