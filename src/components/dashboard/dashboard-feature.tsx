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
    "JXCxiNwSGFT1SpRxUyz1VwYWmTfZiJHKixSczosAAW8FFsrw2bVMhr9WmUELpu2Zm43zy8fxuenXNokxj43s1N2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LzUkkDr8jJzENrdQWme9WBSpExH12gkEGKj9612mZmoTMvt3ndzoFRxZ2WBgogTs5kkd4YbvrazioyKcFPEYWsu",
  "key1": "61qC6QGZx4J9mc1xeVUiArbsuRNZgHzddFwGsvjZanAChG3HXr4SfoVL1PbrfzgHAKorQXh4FCcnxAiYw8PHDvoN",
  "key2": "3v5wQDPgw1xC2TUdo5yPvMfwf9iAxqRT4tcJ8VJAtRMJ1CsqBhTD7hs8Lvatfja819DCJxUE5QdsKnVCtQF76t7B",
  "key3": "5jx4GvqgwzehQLDD49CqxLc2bZMgK23kDFLk29Q7kgK7KkKrzy4cPFTuXrtiavyxWToTeRqvGuQUi8qqQXow2dpX",
  "key4": "3RvZhJLU5DFzutEQKP12MLDmxUeZBLRQCyNQx8vCk6J7ePLauJzR3wKwzzZHcdYdzjUmfb3fiXSkh8mG3SPhKS3e",
  "key5": "SGLQxcLzouMM8WB9L3YcE55ifVdMSjZX15JEB2EfoPW2PBdT4d2QPu1VMcVGvbNYVPTrgCQogiySJrgezStSwGn",
  "key6": "4qfPGxffANfc1oVqFuL8HFnwFwgbLwHZC6sWoXoCKHoBpA2PHsN4cfjEtc5iXuLhoaLUZC37ttswQjAqpYdoybuK",
  "key7": "5dPkusZ42RtyqRxNCfJ1o98wEtymWojM2B8j52yrTxskTb6qye28jU5QhWXv25bmi6CQPVQGQjhNjB3PK3uF55Dt",
  "key8": "35HfurG5adJwa9hS7dowSGduH9Wk6MDy2Bw18ien4CnUhMoizAWFdmR8Vx6pAM9ANv6zUnFmjz941y7pZfj4GMHx",
  "key9": "3hS64vSKPN98Wz1iXTiYcskGiTo5rWnFk8m2fhW3kqNrux7jC1sGW7XzwpHnMAzYF6ZQWuW6C4NeJdQdVn7vpN6a",
  "key10": "4mEez7AVZkLUCanzhp87uXBGwWbbQceiwSfsz2PBhcxv3vSo99SJ5vPDNp2rFGEAFVQihjNmvUyyHjdyUXi8My5n",
  "key11": "2oJTeGe1W8obqBP9u3rXNqQWtxrC1KrS5odJH9tLqZ8Ar6YxmQMQd2wvoHJqnjVNXK7za1yHkNtXeyn3Gc8G3mB9",
  "key12": "UBNZ2qu39ovZHkTXsF6EjN93r88vaXLe6RvB2aPTggXWnaYTqz797wxM2UoyWfKzG8nrDX7E9uvPMRrRF5XPQha",
  "key13": "GXbGKdbTTNt841D3aYXgYsWrGoehSqYeY2Zn5Hwwb3V9EPDsZwm2BdfxF5rSiHCJdMkUWvpo7L2HV1xmxjcEDhs",
  "key14": "5pnTSbgQTdDbwYyAZXzP1ZuciWfJN4tQM2pJ7Kyp1Jiin7B1VdSN52jx9Q8mqNbUxtNyniUqxXTDf7PhGuimb653",
  "key15": "5aFzaYydGFZ7PgPY2gQhKNP5YEqAzAAhe6uU1E2GcxGQj5Ge6B1GzkctE1VhkioAgnCw586ewdXrLRhrVjtdw8yN",
  "key16": "3iSpB4WeyQ79NXqr6PJempEAn7xPNJkUUYzdgmrxaSRNaySDtbZWUm1BZCeYQKFYCER8ibHJnvuAfdZMubT3E1sF",
  "key17": "2MReZxxaB7Jmc7XAXjQn4mHaRvR57XRZrgJZaeWimB7PRkEABWQHpovaKQHm4VVy742nrW8dPKrDpJTMfzqrg2bs",
  "key18": "4XhzgufkXUWQpc5mhGuDDW6Y1Dci1BEfYidxKj3EFVn9UnLgpYa78RFaeBRFKqdREuqRHowzpFR1nUkkQ82TkwEQ",
  "key19": "66gyu11uSnpFRViSRhBEsiDfxVUrLU5ifGBp1tam8oHLiQ61GLnsuWwzQWNEJnbf3x8tnRT5He6hFfgHL1c4TptG",
  "key20": "2vFeMhNvD38SfETRVUAn8EHDTj5v6A8ActN7342Gd5tmEokdXJPX77smZGdgt2PT5ottybUv89XPyR5LneE4w1rv",
  "key21": "55gYiLJTySmnUYRdiX1HyoF3Eni5bLnY3oejCm5o1jv4h7gonohDqaCn6BaP4FLfSoJxJg6bH4rnF8CDnAFvAPrq",
  "key22": "j7pJr2C2Y8VkyPret94PYuCNpuLJKuBwVVYAt6z2zSqMEEvGs3Uyru7T8Vuaz1oiuQvEb2WLFVmVdMmALwA25XL",
  "key23": "4GM2sbe4DCLQMpGuXak6okqvXdZaDcgLWocwkCcdsy6kNHQcmPWoeKUukatMpNJrverjHnnBuR2Y9y84oPkYTsBq",
  "key24": "3undCorPhU2LrSXdAHQbuwAyrPwm6UHTimuzz2a99S91e8VP99swMax1moxH2nehWyK2PLYUKCJuqJ8zy7nqdMaw",
  "key25": "45vv9N6kzpnPuZPDQcyHCgujAEb14jQ3MELhQE9Wch7Y7QsiCRUfW9fmrvAg4hY8uLhGVpEH8PPCHur9JAKquPo3",
  "key26": "5UyPnA6w5tRoRowCq1NnaHD1VyKYefaY6UHgS322bWPTGZzXLW6wmBoN5uMKN7awq72mR2D1oLJD6CWGfjzm59q5",
  "key27": "5bXNaXPYQgahfh4Dnn5QDp1v6yJpQyXKkkwDdt3UCwv5rUpCnTQvvd6SGLWj1CPXav3c5jeLEA5Ld5d5TXdFfavz",
  "key28": "5mQBjxHP9kcpHFrgKZ8tiTfDtybUc5guCYfGcAL8kL3QDt9GCEpeXNakX8YYLxWBx2Z96jMfryFp2536KGcg2Gsy",
  "key29": "iirYLawgrkcmVwBRW3YPhiraYK2RFbcUX8GJa1yHM4LnGGbQGioViyhbajfe1S8r9Q5NVvrj3xgnQn57pw7Kjbz",
  "key30": "3Z21LQafEv6r9hBWo4shNTDaq1sZnPm78neRgWcKCkF9yuTBRJzeKt7PG7VGcP7yBXMc73bop5gqu8ckUnVhV1WN",
  "key31": "4Ho599kxR6yM8MtvXPkFjEd2d5gUJW28CRRtAvhnD3MasVissSzw1iDhbLyWzEUQm9dxiUpbbgxzBifvJx8vJ4Ch",
  "key32": "66C1ttUwq8h6LEdqRhGiqvyKA5vrtgVAYSZaNSKSU8mgCo4Quuu961ygdmA3GAaQSpWECUFDzLQx3SwjjhaBWbCz",
  "key33": "4EzKWEHxcmNWYGDfvtr7SqfaBdSjNmAWqkocer1t3LZFUvU2ZQ2jniHfbXTHtGsR4hxa1tasrtxWEncLbR2uAcnK",
  "key34": "5tCg67dpF6oVhb11y7BSj4aYrEL5byxDGCigF9b6Tv9eQbhjjvEziW7gnynBGvyr58zrT22H9vk3fAa6u9C4SEF4",
  "key35": "5Kp7DGNAj5rb1DkCEHKKmJiG3nrTseP3obfcRY9YvoL6KH9qMREUtuppxoMHw7hhmHktdgyTWCqSPwuMZAoEC1zy",
  "key36": "ZKQw3xJRXMrHpU53y3kY39qh6fXQN1ykfvHqYuxGWL4yfJcMxy52ZXcRiixdZj5N7PtSYhy4c3FvjUDiEsAwsSZ",
  "key37": "3bUd18zVXSNzj5vSVh6U7ded5w7qEPq6qQFBRG6GZcoEvhZYTg6LTUKeup5eyD6rPQJpRza1RKXonWCAJDS4vSgP",
  "key38": "pgZtFRm7wh5pkxcP7zdP6utt8W8rmmSfXv2YrCkxy3qaXgNfZcaewn7V4rDPpVUWdo8rfri1cYAxsgTP9zkxSrM",
  "key39": "3qVAcB8JrJhymz1hiFRTcfN8rkHfUsSAZ1xF2RwcDVVYr4zx7duDFRdRnUNbbogrhEiKU8MxL4mA154ME5sJAY8N",
  "key40": "5qutimS7CbYQTbqjtGuqgcwJBzi7cqRi1gk5aUcv8vUD4hTHy2dnfW2CHF4M5QuYUaP7epVix1eCvD6oy9YERXwp",
  "key41": "4HWYC4Usxw2WL7EQaa5GV8ahKD7ksMQbV2Gs8jfS4EcdtdQ26kVhDSs8Z2jEQ1FcUHNKPcozSs65ZZHFsjdiCKgB",
  "key42": "5JJ5jG6sjL8ww2rLzHYfBKdHCE6koysqNfz7Th5fTSVo7WKPbBiTLAEde71sNAFudZZ93onbYstkGUSjFpWyFdwT",
  "key43": "3GKrfB18oMYYuCZLM7139P9Fg3HNgET6vVgooEKBLA6cqyNrWTdvtqBAvWXpAnDYdECr7rPd2r7ywnxin4LESYpA",
  "key44": "3HSv15horbNQKVrfCrtmybJJWZ4X7qRVMoFX3EVDW7F1G7sTiNUFAuUzFMgt7wFuqCzZmntSfyKPb7JQTyrg6MLH",
  "key45": "3gPgZBUdtEMyjoPqJ1HrLLUEq2BajoYJfSQKsK1MBG7aGxd8Gq1dixqbou41ckH2hVhbdVvByy4YsUF7dvkQfULb",
  "key46": "4Wbcw2uutUKzkuWCZWKsssbQjSSDEst3qudaay7FE9ujLi8MxWMNkK4Z9C39pGCd5VTpvsGXLJttygwo6Xzhb95v",
  "key47": "3EoSbGuMRRJWucEhXSQrXkBGmGCf8J2Qsdm8TUtoAUbuesRL4cD3xENyEwFkurtBcZHEPs6zCmWmAkoACQDyCUd6",
  "key48": "4WXXyCVnhheZU7EzzrpZU5DmZUmKNXUFXdYdv6UiWhuAL22GrLt4YZ2wFhj2SUsjBdzkzRR9GxgK971VZ15qe98h",
  "key49": "2KfMr3YHehx4SvQptdN51LMzhXpjSLxzcsDRvXkBS1wxBWXeHwztBqqWG73E1q9u688vkKKDEXQEkjjaUrgYe5cm"
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
