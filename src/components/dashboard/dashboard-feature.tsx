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
    "4XkWu4oYUBZnJSC2aa5h1xZqUw4mPf5oLKweDfVbfrbr4uaVkJ8XeEmsXPYfZrJdT2fnfAon5JPLkvGwHzGxWAUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35gsymmaSaU6SpY7Dgq5pj9gcw69X3TQ6arTq3GtHoe2BQgBD7zeKDyL83kb3dv1engtabfFDbA1fa9puDozyKv3",
  "key1": "36EG8JtdxV98hXuvsJgdCkwPuUDfRxfS4SBMsLstJoa2VWwNJbsFkEC6ww2aaxpDsXHcbnxvGRuwtZuRNeButf94",
  "key2": "4KssRGNMgrNcf7XKkH4sDVf2RJnKyXHfPfXNU2szC6CR93db8o9nJd3Xn9t1cPsobTHzm9qFzPsW4MstLjoFwRPc",
  "key3": "284v6VHdMPuzvQN2dp56Tn8RrHbog89fVoajhoZRniJomfZjp94PxN4M2j8tmgRNpPFxfnooZxSWssqx45JRpdTB",
  "key4": "54EERfxJXR8vpMD6jSVzbonMyrX3uMngW1kXxDnZC24PAbqTEFvpuYK8Q5z2WRQzUiFebU7u5Z8c6Puh976nZuUn",
  "key5": "zC2Jc4864rwiDeaLnr4tQvyVDPYB73vu6tfHHSQ5SnJcrTrHbmRRWNnv4ErJpky5DG7w1G6aLbJik99o7UTB9PG",
  "key6": "vqhxHAA4yxDsj2hpL31rFKWGhw2289AsEdsrMJGeibeC24CGLQ54QBkeYk3yd8hbHrUpQEX48Pec71FPUaUABum",
  "key7": "3NrguM6xa6tw7897w5a2p3UofXex3q4vH47YQWMVCfCjLxTG152MqwAdmjmHVdyGCSELMts35neV4QvjvyDtQRRA",
  "key8": "A7S5dGqvPgDw9jWHwd3vbCSLYvNXkQGBWTV9dfXdkk8w5yG3DVwv2Msx3HHvFN9HgY1p6WUvQAKedUuCzKzeujL",
  "key9": "3e8wEgKEmEfSejs4DF2b6ZP9VZtFwRuS7EZ3KAJVTasgrJ7KL68K4UW1NxAi8sGU2fRkf6vdDaZUDK4STeXwsJ2G",
  "key10": "4esHqMMGv8nQhmKCxxzLXAM1ShdEv7QTztvcFjidAf97s146efcB2EWWB8yjEneVBb8KkmyyAZSJdtZSZMKtyrHV",
  "key11": "5G43QfmW1icZ1QnnqepqakprYhBfcFTvnxZsMNb9SCS5yd81RrpTprSWYZepZzX9DJ33MqxxdeajEDE3fVXHdCan",
  "key12": "3o147uPuif2MCqBQsWU25w9SBtExPLFMoQktkFEFaSyDXutaNaiMkpKmgCYA5DTcw5GCeroNHYS3szM9ULxPjNcK",
  "key13": "5K5iMPAeWDAqN697cQpLwPTJZb2un9uSZd1i6s7p9Sa4TaGZJmVgo29UyNrrPVWvcQTkf985FFKcdVR8vwxxgS1V",
  "key14": "ZeHPNAToAhBgZykLFrHUvnqZjYXjMfjL58MqeXAx3AwYg7tB5sM3m39QTQArzHhAjhEV8DaeXVUCjvhEGDWprrw",
  "key15": "46uNsGjjLU4qiTuY7QrfsoxMQsXDx5HTCVosihQGqFiyAGw2vYJX9T9bFemM29q7iXYXRrdT4oUArymVJyQLJv84",
  "key16": "2FTTEESrfGoEUaBVAyonwcquCvo2xuBKNCCVfsYs2GgXDGU1yAAvtzMEHpQp97bym6VwnsSrXUMNBeUrEBqM1Qvp",
  "key17": "hnwgtopiEmStR4H9bn1mHEFphPsBNUveVNveNXEmQGS47SsCCG6oZjbCumBJXqdaDnTgj2zM1WNnTW8gtuXtRNo",
  "key18": "3Nkat3qDb5gKugRsnJnLZeMv6e1CsVt9KDx5BbjyWrBvT3Pia8Qx5r9nxoe9XozdYF17wg4zzneQk8Mjab5og942",
  "key19": "R9XbzTXxSxPksxD895TRsR5moJ46b9bC3ccKEjAcriHeyEvM6hvkpHdSKZy5tcUpgAX2HYCgUZ1j3NX4QodjQHv",
  "key20": "X1FPZwDLnVEvpc5tJbt6mPGLVyag1VRSUGKb2YQRuNs1LykThytywFGfEg195mzXwJduqiPprpggPMb13q1sELi",
  "key21": "24jdZ914bZwbZaFEWzDFFCSVq4aUbfKMHRjdKbEJHmw8pdhCfSQz3GH5G9SVcJyCqjyzeFjCZ43S11YBTnbQPtyy",
  "key22": "58DwstWm9QwouMHCH5CCYeBQbSX5oPjiCyzWnLXNgFTP9ZdDXy5KdqPmdpCdGAszanJ68BynzboejegbChEB8HR",
  "key23": "3dFqmKz4FjziD8TJsgUCoFbWQtb2WN15Z3xj399KjL5Pngns3K7azE7gNCNRD8X9fKeib6XtPyQQ4u8YuPy8D3UC",
  "key24": "2oLHAR7KkP9zFRByfr7H7aygGct2t417JbCMNnTwvWtGTvkexMUVywTT6KrL6qpQF7hUeqpPDMrVUSYhSu2DXyxb",
  "key25": "2eiiELC3uQhR42UAVg9zywFWo9HgFWYSN4e8ve8ZAogkhewxc8sLFG39GpZppLbgC5NEfrUkuSpNaQigHNKtfRsD",
  "key26": "rs1tNTxUT4B7oM5oaxJuMe2bEyzmZqKNCpe8mHUBQ1P48LXWySbtxNEWPSoxGunP6JDX9UPTQZcsDYGyaikDeCS",
  "key27": "2XGwnEhaqQDhKfygPeXYK18MYyJRebCaGJhH2vQHW59tZ1JxJPgnq93xcBPn6Ka2GxCpgUF8Ch5cfqe265Engc4n",
  "key28": "4mxXuAjuWge6q3c61H6n9oiyUgHCeLxUzE8WexcWfNJfCj8M5MyyuPZDtbRaeeU3VxHQQAw918KYUs6kEUmMHcx9",
  "key29": "2C1poWg6nkrt4XedN3M4X6XvhD5Bx4dA1Wf1Wzu4FZctkzdHWMFY26gk4zTsmHuY8WQnLzY5o9UDgMUW7c2d1Fx2",
  "key30": "88uqDMruHSTTf4SoPVej8KawW8bgsykWoSkbu3VMtoPz4cNfJ7YFzFwL48vtLzz6Ni5q3fxbcm2Amiahcs8n638",
  "key31": "2cTUHhQRj2KDbs3LAo9TQVG5Fw7cLCMoJh4uiiysUkWiqS5Himq7T74T8yTKjkyZfRNRyhedWYHiVLfJLF2R8sxQ",
  "key32": "5VkvKzfK2EGZufCigJDuRgMhssAgerkxjbifeMVtYiNcSbGhT3FSLkM9awV5zWsyYQnfTytb8paTqLQUPtLKQwgk",
  "key33": "5AHQS425xQpdQoAmQva8YnbpfP6KkJ5zaisfpNfnuvkDeuXE31j29P3rUSYU2Jfb9J93iTgtWSju7WRNXPo2uhEp",
  "key34": "26EnL4qcHap3qdSKUb8EabeAu9oerHWke42vXSxvgpsN1nYH8WhSpHdKLZX2Cu3og8sQrKz42oDyV3syPMmZ8g6n",
  "key35": "2yrsdtpaNp9kBdKqTLuCSEqDdZntVzDg7DETr6V1v9JDhxr9a9gLAw5zni9iitmQ7PxNYwPjFiToik1f1R75xRCR",
  "key36": "4LHjg8eLtMdPpt8gedkNosFEz4efJK38Eznnqegx1Ejs9xHFeuLUx9jyJWghYa7Zj9gUDofMywUWMzPYoYYcG6sJ",
  "key37": "3AFRZGdTsuAQsUd52BczC2HrLkC535BvCAA2cfJPBFmmQ5GoBwiKfGX5No8TZAXSKTboZjsS3FNt6xc5hh6JzNu2",
  "key38": "5oWdFFTVqCzLg4DnNNi1qnn4Qb2PosRJrqiLJXhPh63gJQBtL9BQsEJZBs1Gp7H4GZ3eWmJSq49PmYsbGjRAeWhV",
  "key39": "3U2EMtPjMC9oV2buc14Gz4nNt69vCP415w73N2K7LrP9zaXeG13p2fPM7ketznUpVptyY1eXv4ti3UBNnSsu9NCz",
  "key40": "8K63NeYkjG7EEBi3TKvNe2anCYmetzHuyhkMwEF67WnjqCPxZRXFgGSniCTbNR8mpawkMocmwjFKpJqtSELNsSz",
  "key41": "4BUmBqdPDuYsCUiDqE6euzDW3ebkPiWwwHivW64XYqa19uGPY5kNyfYiSifFyt7eYZZGh8DMmRL2sSLiYM9ZpGn9"
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
