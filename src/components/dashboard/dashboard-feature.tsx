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
    "3TpBT7ELVdLV9Z44fWYs9mWSMbcGZLvJ4RVUQrarvj5TnRNhnRfMN5gjfdrsvrY9qeEw94u5C6Hbg5NzD3pCphGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NNBhgqGLKQEUvW9vg8jtijoXDZRVvJQZpb5QzP3KVhfcGJd3fkBEMYwXRCRNEsk3t6j7v8HSvCz2CEGpeaf6uEg",
  "key1": "BQxCh2NA3DDL4YPqvmf7VpzGpqfeR8xDSG1AsnHfXvDB51n5GEtoVj6iE72KydDLNi3Zbut55faC32muPrjwWVM",
  "key2": "3daTcBUA8NdeBh3BQnAMWdvEztJWTZtWrgyHzgRajgEtEiD5a7J4AxPopWef1Q8ngXHnEoQLZNaTP2iXL5pDg5pP",
  "key3": "3LDGPiW9c1EqgFWFMjRARdVePLbttjsTQHCsFRGqKdsnfkbyyLjzQCPqa9YMKMLXJTowWMD697axoeq1VN78Ww98",
  "key4": "2sjJZprSM3AbSR7ptZswco111kAWUVgQE213hv9dzeupG1gcWF2bXj41YpLZQtTYNDm37Q4nayD7XpWVi9HkqwAJ",
  "key5": "4FmjMNjh8ZQcejTPdndR4x5ZBGEuHwPww5dEK8dz9d4Pg7cD1v24WoXDGfhCQfqpwFLVQMV7cpsSjHbLUzQiZjag",
  "key6": "33ycovfQs63G4pMZbdpXyFg4TQF4fQas3X4GMuCrYhNAkvMJfGwm4KZ2cmMoyTstNeN3ttEESc7UQTReYxLbRgDj",
  "key7": "3GeqpucJsDtpKiasThr2dn6nWs6svRFDEEzazUXyFyP4PHKWoTmCSYJT8BDc3jfqanN6pGQUsmMGemVJHPP3wnCe",
  "key8": "2YfaMVzB3oXcV6ax4TCd1EP3FbnL2TmgMBrkXGPJC53WhEif3Zom1zbetE68MdbgXHDfafD1dtTfdaKJCgePLkJz",
  "key9": "qzUh4BZjjvvezPHSJtJunZT1nQSCBi3XDPQeUHA1gHZCctS1CXDFnF9m6DSMKsja1Nw82tKFGSA4HSEFFoqHC8y",
  "key10": "67U2c1rENt21GmJB6FjKNTwPHpqBhGfWN7ytdqK1yTNQu133F8gNq6W9kofHYtV1sTH5VPMTEgWTbLrTYGyCYyKT",
  "key11": "2nrSYxt7ZmNxTSnzL8B8hAp1FQ7DNNDd2xPMjMRTYw87NzqrrTwfk82GMyhDTh4CQjAgEdW4bPvGaQQk4Bd7htWP",
  "key12": "3xAfqoWZ1Uzv7QddTwVUcS6K5ygz9DFNF5VQLC7pxqp25Y5RAvyLeJ1UTJ16f68h5Ct7LaJoJpjQZS8ng5paFnwD",
  "key13": "2ReBvsdZLmJqfqHjAyFQAM2THUZkK5PmRCowjcYqszXDsBAZZmL9uGtC7dfPiNSa7xzn7N2nrojFt9GyseYzy5VW",
  "key14": "4VVrJfUgYv6kj7eCaTXuXiEL9SEqYaqfdDXUm25yTLbYRqAE1JFbPkSabjY2TM6AJ73hq16ygEgDy3bjw13Y3ZSY",
  "key15": "4pGXrpX3CAi9pvRDNkgibcApkHXSkpHVDsp5drbpC4CJRKpiJ7fAxdcG4ojx5NQB5ZG4SLQCTJJi8NaPvraWHx4N",
  "key16": "iwmHqkDY2Sma78yXPxy1FAUkVe1sZZ9XF9q72ujqw1q41df2NqTBoyp3Sj65bqfdcBtynnSUsRjahwe7yeeBA57",
  "key17": "3nRTJxtz3LotC6Bih8gTcvYrTRCH9cDVuZFri2oJ3UXM5oChLQoEkuLoPHNTVMfyMA753risu9dcaHxN9scgpZys",
  "key18": "2MTM8Vi85iakiqvdUgtjhoAkZv4Eyxz2Ea49ZV9WmVqkxwLem48QudFCDzhL6G72gqYdG2sd6YiRJBJea1PSFBaM",
  "key19": "4wRHFeNhQiXroRdFdguPLK3ewKFtKE3DYyspLgUCQt58LEEoZcjWP8fao9r27dmmXrfrWyB7gG8cU9r7g3gmT8CU",
  "key20": "5mGgHQS18xfeGqiAew2SFmMw9zVr25MbCBfZoJbeE36TiRwWXatkHwM6TiAcqwaysmZWWFr5Av27FxB71wb9xKon",
  "key21": "RahB6NfEjvkzMqSyZSHob6HtvUto3phQiSt41ZSUvTSzTwim9zD9ENFG3JNV3yAQi1vj71xscGLCbvyRvFJ49ku",
  "key22": "5TZk9daSYcTkrb1ejUNRhKHAypuiJqpXvdi3rm1VahPFcHk9UyX8s7KVfNdVM38J4x2HefapqTra8WXw3v7Q84kT",
  "key23": "2yS2gSmKvt3UgTd8n7RQpbTJCxTpQsLT24ufjxzE6PfsGTQKfnXDv7tPbDS864qFXgXqqqdu5WET2xFtyLpbUwYs",
  "key24": "5MF36g73d22spEEyZeKLKcG8mM3nDDRgEQGQ6GMfZDPJFrvkHzAQEKMtWbJdPEEbS27gavjrVeXM6QT6xkyn6pw3",
  "key25": "3UYVWf9cNtwQYD6LsAkCLFWZifyoGxJXhb8PLZiQQCeC3ERMKTL1mXf6YzReJAVK88GCR1hV7qax492fy1w5uEUt",
  "key26": "3AcP8RySERzNsQ44Eh596eHkVSjSmNEbja5iEgMbY42kWZu2v8SEgc2eyJxBgSYkWDeH7pyiCSGyG22nQPLjXG2J",
  "key27": "4v4bvDRM4frnTzupTrW5PyS2hcnvVHs3uiZkT8MUaRqKQPg9TuAqe87sV72kviovmPyBSeiz9XiiCAv1xPr72zzc",
  "key28": "4DjuNhBi2ShvKT18AktLc7Ah8GSYo9HdXUDVKxYh7jGj3K5nkbr3XZm78XaDAA93je7FraNAjzcU9U5xLBBixeoh",
  "key29": "33j15Z7dJTyVu3szpm7SCVBK4UzsUCkiKPfMw21XZ16Qcck7Yy1Fp4MybLYfvYLWD6TwCSJJhRZctMVHK81St1vf",
  "key30": "3tgxeSyNtEYhW7cr3qKxFdwzZY97nUXmNLhKEv2ocEQHvnbyiiTfYAsjfFP415gBwbwBUPLGDgszJYftkbbvLSP6",
  "key31": "4NT2jueD8Kf9XfnTh5uifgDYUS41KwL173BTsogEq23nMJacE9HVdWjJXLAYKH7ut9pHfXEGTdVXtqhdjTNHjWkU",
  "key32": "4UqK7btSnC4uV95EVpnjsnADjy6ThYZGCSwRLzmT3ZPCa7xuoBJq96JwF7hYAVybtVy4migskrM2EXpxwJtGZDer",
  "key33": "5TM2wrDaUr5KWsmuWgTPqkXNVUJUFHfKj2y7TfQt1yF4c3Rq2Hwd3CxRyh8x9xcYdmp6yDrYWin3dRxYXz86NRDX",
  "key34": "5p3UFvPtEmgvgichvubEzymcUT69jKtFgBu866Fwo1RhveZYHoyFEhvfJF1uDJyUbxnCigvzmRpnjev4VyQJRsNG",
  "key35": "4gxrFTstg3g6kSJLrHGY15joRKeiQiLUC2Xefgo1Aozk4uQ77jergiWACSnwCMqxkxdEfak4V5Aaiupuwjcwg27o",
  "key36": "5cwvMxVPhc67NB23T6S7vpK5J82ZhfFnjjPHXZUFj9B3HT7dSd29LB4MfwSNXTHHM7Bi8bkJjHAw7ZrcyDfwLuQ5",
  "key37": "2JHuWuKwsLGay4zyTa9EpA8FQXiV8tb2K8K6dSYynCLjzpCd9SSQajKwpk3D5c7AgXJHQgNgGirWHAKwNrp8zvMt",
  "key38": "E6KAEhFyGFLXRxCKhJSAp7wJMBGHwdB2KGc93PaV69ZTSBxkNtbF6UNSSs5NJKpqFBb8oRFFKwc1BXDLXJtUrCT",
  "key39": "4zY7Hdu8p7zM71vFfo2hzX1xAb7eVUQEgB6PnKw4vL3ApUyjDVt6gcMkBg7CT8bJx6MEsiFAxbnusuYhDLmHp7o6",
  "key40": "2ms2Yw8ExZQfJXSnwV6oH3C9gr1HGZKwqncUDXdsVh5csBF5EVWuX6RP9347XgZdi7eomV2FFmPLH7birXWccSEz"
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
