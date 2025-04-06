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
    "AA4wN9WjLvXFfG5f6U3mUyZqo6QhUqeTw1bjLkSKK1t676ZZ4cHYLiQgvKhJfi1dsj2SWNapvtCkRNX6qAo4WJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZRPbpu5AsPSsYX7szkMz2h6oacuF3f67eux1aEoXbSdAh34KDvkdYn6NofCBJiwTFWzj25Fkwkrp4f37w5DipMK",
  "key1": "3cK26JG6GuQzsFPyAeFhtXuaT4QxiJYd5t9T9teX8DdY7X3cCkui3LfZQape15eL1PSHUtqdQ4v8hgaSgQaiUQmW",
  "key2": "Cx9eNq8EHHpgTmxqQvghGY7zRUPe9EVvaHK4D2PKeCcED8wJPMLr1673dupse9Dn9nTsugNKk7UMVAHdsNva7TC",
  "key3": "5RfkZfYX3Cdriwu6UuyfNZ8YtDQWEqLnZp8DVSFLU2uGBE9ayxYwrKaV49UvMoftaFjc8DMdBRqXDsTiZFfGKbgW",
  "key4": "4bGqFTvnXuaXsnmN8TcFR9HbS7595eCiFnAs2keDYZ8BcYA1xcNRjrJS7nwnkop9BTztJRjCgpwSLdk6LP3BVpLg",
  "key5": "5yBW8u6TjLHoQBWrc4thZ6AuGaMez69YreYDcsqaj2AxVAFuA5MdDdevPQqeRmsX3RFWABuH9XMuDXgHf7aGgW4f",
  "key6": "5EMLjuuuigMDY2cwQRh1uhkw7QZGmBQYAAZRWnB7PHaHdD5NYyQkn1C47pVTF4EfzwhVrxJcotaUr1DjMLd9LjzT",
  "key7": "2DjoLvdSBM3HrFs78goRkjaVWoEpadyac964XgxNUJGHPGkn6KHCet8w98C6g6L1D3RBdnXLE86CFQMahPTToxu9",
  "key8": "34VNu7WxGQTNHxJq948Wu6a61gAxaBAGK8SLts7cWDG3CuSwMwasLKFkaZpNNqiEDTjq9UofcCabZ5rgm4gsthjA",
  "key9": "4vbnZPi1LN2XtpuvDgE9iNdVkwqajdb4GwLU9HJJgssjCNqAcDCS1BKY4h8NY3XHkEbCHosVEPJrv1GaT4FXYwrk",
  "key10": "5Pa9Krxt3Tmd8h6y1bCZJy4JCE6L9HdhKKZmcWzzgJWHxVaLPGF73kmPag4quyGBaPScQcfqFcHXr5ze6eRvL6hS",
  "key11": "TmN5JNVqnpKSb1NHhKdpz5DTMCyded2GwMPQBqp8crVLx7g9JuN1rhy5VXYFqf3oPUMJEHe6SHroAAXH6wYtQjq",
  "key12": "4YTZZhUcT9UexxHQhc6LBM6bYBFRc2DBrtsW8En7bgWWHAjSLxSM2Xv8oScUNmUVkE2wHLJgPsy3rRLgNK98sot2",
  "key13": "56VyE6hNWHSP8aZwG9PdZxvqgYpwqUw2WVEpL4A9iVpyFndR8MowUbHMqmAV3KAhLqbrfdYgnDoVj9zD27MqhGyf",
  "key14": "3LvQKBEEP5dmyyYm4TGYFemkoSazB87rQdwpAhPYXqHwuATLfTW7S13CvmYkqwZFvDccqN1iKY2c8k7hcbCZGwWD",
  "key15": "3DY5WqoWWDxPC1NUxWDe446ntSzPox3NL2hRjjZ28rwFqp2Yq4p5NhLha19WoN2X9CN3MXZnGCg2AHRnAigg7NJs",
  "key16": "5MFGNHjpRV1Qmuexzw5LUxekhNrjsmsC9wTfMcmHxZcGnQC7iEQPbxLnB3kfA1jbETCLDZNVGAWUFC7oJBBVmEo",
  "key17": "ussqafepJnpyqTJ6d38jyuSHoUw7TtVpiB8qkqEht46oRk3pwSpRSVTQzxtiuMFPXcKxrY3DQzKDsoPTriD1TE3",
  "key18": "4PgxFqX6KEKxGG8c2hS5sJGtP2qduZPrZ7maB29UMt2enmk44bAJC17qUQdDRfiUiSGjMAJmTnRwGSF3623aYkef",
  "key19": "3bWCvMbmWw2aCmpmWo8ZLwJYwrwTs4euke5K6LbNuAZh2XvqTqW7JxvrhhJkoe4oypqVvUXrPQUvXYsYii1UnBEm",
  "key20": "591rZMJGUtBCEnf4eYSKgyPDwaQaX1dQJkmfm6DyccAZe85DhNw62BSnXhQQ8dvE6pLT4XWErpeDVpwTTPREA2EQ",
  "key21": "2qP72bpNGeNe3xk7S81BBxyr9XHr3ZmnbhxHRQRCfxtyuSaEDBWZ8X9ZWbE8F8LNcXZgkeUDMiwYocPFbuT9qh9y",
  "key22": "Yq2mjHRwtRPSyKGYkWQDe4Vvf587eMa1xoZ5NyysspvcUyniUJHnhbXAQUwCiFdPTGcG1wkHZXihKcWRvRDoczn",
  "key23": "JfKMoqdmiqMzWjs1dB6ebokoUoV2crPNMsGPwjxzE92G9vPLFd3PkSvgcZCHiqoKoJoNcdWJmQgagEjXKv7DjFZ",
  "key24": "WwxdCiq6JMjZ9JSswKaYn9c7fHEPzupYXk2tFZo5xuQ317nasNdYNX2dXf9wXjPqzG2hrSFy4vEvYco2sv1bchL",
  "key25": "5Wn71NT7kh33m6qKKgYtnRALXS9GMV12XFFv8VEkHK3e3SKjsMU97h8bSNntqrNGczjVPaQieeaN259BKVWyW5xJ",
  "key26": "52Jza6zhHF1EHMxUyNrxR6XFDp3B1PRECwPCpXKubfGLZ2M1SRVGx3dr2AgUnPuqeq8xuUqZccdutiUjhfnpUgyT",
  "key27": "41YQdRWsa1u7AyZLHrYd3qeeWsRMf269ifnyM8STgeErj2PMN6fqP1uXTgJy2kb39vF3yEyvAefLsLM1quAvUGi4",
  "key28": "xm245oqjtPtArgcxoyWyd2oSPmY9wELVjDG53A4FCho4czcYxEjvi3dLjcAHcL8kcCCAzAshz2yhAgvp5RezeQs",
  "key29": "3yvFtZRsX1TUxrtnZqBWSRtoyjvLE8VPs65fNYANPtLWYUUKBcfAQWMfbSeUTWW5YkCDjzyUtX5sW2cvchbLxSaR",
  "key30": "5zD77hLFT6F8v1xXeNdUT4HyeZMJwqNVH5itFsy7qoRUQ2yh8VZamGU8NUA1EZe58xt5Py1mJbwDbju54vgu52pL",
  "key31": "JptZjp9caHspinz9pVKvRVqaSFvttTvBRXZSL32jZcw5bHYrRCWYWxCmYo4eUmYb8fEVt23kwFJ4GaUtKybZMCB",
  "key32": "4hNLBcfKK59zDiemFS4YrpPb58A8r3Q3xucXntMHZKJggpxNJDihBx4v6yt3Nnbcgxhs45M1yzzyuoaEgx16Scgp",
  "key33": "5i55Bnyux3VEzXwaY2kaHZKaRSkNZqNLmsCTtaEne25S4fe4oTnn6nRrJYXzmSebQvRq1i4LZL2KKr6EZ8ugbU9J",
  "key34": "4LLMPnUCXepHjcrFVftyUbr7w8ptDtTf2b5gu5Pp5qrGRHb2j2FnKLBAuMtjksrY6JjDDXjRsRiiPKQYq6qzGBpr",
  "key35": "4fyvBxam5XqSnyMVcdGqyWovF9UQRa1AjAhRs4dscknbJM1vcKHj2dVur2d27dqJNGJKQZiMBfwce1wMjpg22KtM",
  "key36": "5NkmcSHuShwQEeScp4ngZcwyKkGXVyML2HMGCectm9ucSpiePVYGFrBB6hRQpbFBm93HSbTmfLtSZEWDu33G4jbW",
  "key37": "3qzKaiZDzJyYc6jVDvP7viWPU75j7jAdTDQk34VT834rLxKhTkeVFg5EwMC15z1Les5mi4sXrYKeCNcqsBxoWmJ2",
  "key38": "5rMrDziWFPgYY6MFrShsqpycnsdbL6kKdfjofP1RDD9AiVihaRXTdGauDR5Rprr5XZbv8goUHcmAa4dTckdRZrcU",
  "key39": "5hyVCtTpBgT8CeHRpfXKjfZULkwE1aAagTutHXkADKFSDuRUc5kAXZD5je9Ug54qHUbDKJLYHjeot7a6drgHT5cD",
  "key40": "3HByiA3vQmgK4Rh6j7Gxz4Lgue6tAKBBumiDpqwVFxqCG6Tm6TSCJv52jnutEDgeNPMHXHz2BBZddc15TuUJpRhK",
  "key41": "4T4RGbidhzH2ytDi5k3cXzGvA7cUB771dmuUVkY8P9Ly6YUY6jj2gkMReCyK3RyEiKjw9Y9q67MuAiowpPgCfNzY",
  "key42": "2zYCdRLRVBTM6sMCgXCYzogRncvfuRk3BpX1hLWbZUK3rNEUDWcJotgAkXpvNzi9L9LNxiHqsPDLw5Qu8SEEBjzc",
  "key43": "5ZnuvrKZfBaYyArfxCdYb7j8RUgvc2Yhv1gjakJ1PoLgDCKMTuEw6hYH5XJdpS4Cfdxi1Q6SPwtGfJrcpenKmjqD",
  "key44": "32qAKGfHwtGQXFQKkYVMq3bMNRDjUjdXFGi9RCeBPdE9zC5w4H3kcogeRw3Cx2GVkZDJhauVxu8Psp7YKwuj112X",
  "key45": "2M1ykH1wD19ffrmuZwPCQKLTWS7QPXS8Bb2fwPkd2GA7QGJ7hPicjZn2HwTyHUg3ZurTFRekwsqApEfYty1R4ALo"
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
