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
    "3umE9ukkthC7NGqnU9PURCxxun5qnGENxYqzSERoMwBYDJNRW4G6EZFL6nNgdvNHBAAP5iwQs8uQP9SEisjVS75s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLX242J3nmozahcNaSL4BEZJr4ZaicAbeEWAMEbCTXjzz9xwgMwj1PKUMmZx328opKJBbtXFWkXXU15Xpu79C3u",
  "key1": "4kuytxDubcT9n1Zxy3ojS1VNXXy4kQPfptffeUe53Pupd79H3incU9sMq2SEcHqT2tVPVehEkbbq25cw5K5YEFCw",
  "key2": "674Pq1aMBLGA3QQYzwE3xuvuwupmzKtwhkJc16PKYmhmbFVySdZKs8KYSuonspydoUkpJedgQaRfTKTrmh4yTp7Q",
  "key3": "4UVbNy81diMqhNBumu4NDW1otk4szfxFZ47MvrBjVu4dfgQRJp3uzyHigCWzKzFeakdotizWyotMxJhHjSm9WdAH",
  "key4": "Z5MPpMYksm4taFEjSboX35uS65btVMkUY7PsT6GV949zLxoXux3yAaM6bWaGvVq1LqtuDqEcY3TGyqxDUxUd3gp",
  "key5": "5XcKsSm9t3Ho2xNtL4Nke4Nuv9MThZKQuZUs4jfrrqfdEgGpF8V4CLGcBVrrGsdYWExsedxBgz5gUAsQJDygy8Tn",
  "key6": "5SQLeu5ycRS5jYjXFKMHRA7nNhmrxMmnQdmEqui5ytbYKHBv5PDXSbLe9S4dg7UNhhEny5dHiX7NU2w2RmFSBmp3",
  "key7": "47mW7qs13zVgNcYfiL33x8Q191UsA5tR43DqQ8Xc8AbHGzTT6XkmJaXrxDNUudM87hYuXfxM2QMp6R65WT1rnoFx",
  "key8": "33oVMVjqa18qnYnUWrpvqaSbCcbWFVgGJ5KZUmoL4qZDHTxDFgY9MtEb4LTz9Xvm99L9Dy5Q2AmxetniLam5ooR",
  "key9": "4YDr8oo2qtcKgxJjZM79Fee1Dv3LhzztTqACVi8xbYBoSHFJefbrZHCLf48Mzpe22xpgDbJC2gLzvzNtJCy4BdBh",
  "key10": "619fvRm8GRpzz5xuCpMqL2riHNaQajPZXJxtnoffWTrd7Zew2u5s58rDc5u94hMQuqhcQNu4dEVCxW9bdrNdkFc3",
  "key11": "2tFUa4th2NJHKpbHmTuFnP8pA2sLXvUq6mPiPHK1BFmzxEKdymwvhY7y723PWtSH55dSYHnsFeS6st9ZvWM5ZCno",
  "key12": "5r2YVZDQxsaae9P9KwxdvjZxVVCrzGg6cxqPhJyzvESxVzK1LcVddkCqEKE4h1eL8MJkaguUwSrwoDLDxJmUgrLm",
  "key13": "5JWQY7mzonSAiD7kwd8KQWxMFpnnfpABLsa5P418dHBPk4jj85f9FeCevRxvv7pKLjhj6jvQtBjy4YUxSRF87sHN",
  "key14": "5g1qZEdY5CseQymXuncpd34gfouNq3W7aec47S5SteXMshdq3FJsiPn4fje4UULEmyxEFBYKD82irongWbJsrAn4",
  "key15": "4JW7iUW6ooHpXEMgqsqkXtem8gitQ8fJ8ZYdFb2YaCu1eYHNTfo8MK6YMV96aGeBadyD7EXnzh1D5nHPLMggJcHX",
  "key16": "wTLVwkwBgYW2Ampd1Mciw7rNiMaQw1Wqir3DHqicgVCwRjRZRu5CDM1ex8bGRL4VJZedQo7qdBnvPcNR47DcVg2",
  "key17": "325RvknLagA7ShEAFRGqLm5BnMp6MtFXhyWKiswPLnE2mkxs6zY3HMiSpM2mELSaTJaEVqfnRXDPWCYPJMGGj5Yk",
  "key18": "31qMFrWr64HCmTzPLKxPfZjow1LJorfZJ9SgaeY4CykMCYjBPVpqkUkYEYsBJRC4AL6eg9EfVu8B68VGjYXN1m2T",
  "key19": "5AoPY8mxBzpPx6mytixPw9PebhZthfAcPMqE37iHXFH6treYqg4G5whyFmENJ5vFK9yfSMCgw8wko6dW9v9wCA4c",
  "key20": "5zhUVpXJb37oKgtUMjidnecbMUKczoz3dYDZziB9945ehkzBNmkioqNcakKetNuqdHofYefkLEmHdEkwALJQQDxU",
  "key21": "4FkPSTnc5tBH3DU9wRzqjWPQws2zdvxCrY7QkSH1YfuEKtov5MZ9sKtAT21C6NRaYnp4zMQGRYvWor1amoKH1hJs",
  "key22": "2BUNZ6gsgn17cp7c7B9ZheGRxUW9CtekghVdWEG6G97mJxxo6jAk41cHiNGU4hqgeE3FWGkwXULmcg2UpJsd9gjW",
  "key23": "2tkqBW3DVyGfDEbg9qUMvFd8bmFXGjVVqGJzrgc32AEePyzH2mszCWgrRLz5SgPDqmD26bbdsREf74hDhwGJSFwk",
  "key24": "2UMExbEQrnqX3k9JsfCmcZWZfqQtzWZhRvMu8WgkxzumqRiCDBTDApXe66wDdaAPZqzZHSCLYFePu1si3cRrF82d",
  "key25": "3NLJE8cfRHJYFKfsaMCRcqzkfvivA7Xi597yrcgpaG9zGXvLnPbRubjSy9mThbof7R4mbKhCQzdGu4hcSt32p5br",
  "key26": "3xejjFjSuvbjebrw5PDsvkumEtXh7jVbpYdWwEWdny5VYxwaKC4aaauJtRqiRVRhE3KCURYS81uSv7TdbKybNZCC",
  "key27": "4hu24sGNQQAT6nuqkixXUogq2wgW5zA77KGRuc2q5bJ7t9QupyzBuWieEoKYFpqXPTisGpdfWBtMCBaLGJevKwUz",
  "key28": "2HxwathLTPrke1wwCYagjenYhBvKqbnD6bZRJcq4LyCacJhnc4jTiY1KWKTfcGr4PHCfTUqn6dr5qfVS4Xq165Aq",
  "key29": "2opTBV7Vpt86NEjeiWSCcznAPj4LQLn9Bd3ry2ecfHbeBieAh8NTDGruFPYouH3deKm2etTKhfNUK25uGNGFf1od",
  "key30": "27Xmdx8UBcwPeUbVseudAjuETDueoWoXYZV2gdtkNJkP51Mqk1CM5bZNxHd81BBdbgg7bNKyVtSY3zEtqA1N6hHZ",
  "key31": "5rVXQ7d3hxzUHPvJUpYPt8Zrwh1gmTvxevuJQzJtcydKDkCpmfJiGdFCG4YY1F71mLVW6wMktcEiDWS5gPXpQk42",
  "key32": "5shAVcxf8eoUgHxMTmQ6DgSZVoms5nHSmfZzdUUayuF97fveRxCR9iqR5wvdSSL8x9M651Lc3JsQrZtUGMnPSEh"
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
