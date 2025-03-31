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
    "QcJoGDL7r8AyYvxcrcgAYpYfcAkyFeCDHvBw4xtHAAhaD8ZU9xat6gNCfR7xGvmXRTZTDGg1TBDp5WEcE5gtPAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eprnCh9WaaEExzh4jAMhsQNj2otpgneAYFqhhy7D6Qxr1WvpKqQAiN8Uu1wYVqwGDejbYVn69EaZSmVbeGaofm3",
  "key1": "3qH31q5Q8jyrjX3tbHABRJrCfwpkm49t5c3wT7mh27Y8SEsgVa77ynNBuyWY8EJqSLaqvqE3ezwGZB9UFDbxVXix",
  "key2": "2fDZjQ5euCQmWCPhBmzkcsLfZHB5jEWPNYwNpdFhpQ63M6zM5qucyrMUs4RHvQGqJq5XrbjwVkgrTNQYrsSZjrgW",
  "key3": "4bzjLyMHwbehaze29vUTkYVhuYr2XDZxyPTRRQcGMNophiLnCkD8ucAiWuwgqDxEjHTv4WAuKUQ2iNF5mYpXP9F8",
  "key4": "5yZ3qN4D94hjnzWYgtZtxramBaLHBLiyv3DtVbVs17dBw4pgVXqup288z7KxxjMuwQJ7MpXp9SBvD87r7B5xhTuZ",
  "key5": "21QT7JC6qqkcanL3b5WJz2U7CAVFb9S6PSXbQkqLjxo9NFtEYTLuujSMpLqJxDHCjESH6GKxsLQhpcrgCFnL1Tzd",
  "key6": "3Na826EgZragPQLxUH8atMZx8JymGRMT1khBDY9KMGWCa8D8VDUjiMvR7C8FtoKBPAmD9XKQ8VJqanp9sL9GHDTg",
  "key7": "2umkJE193nVEFnmJXEpLjbX4iAio1aaUMX9B6vajqPbEXEGPyVDFJ2hRiRDqfky5EJYJtBk4fmb58Am3vroFWWrJ",
  "key8": "5ucwesJciMWpaCFR3hiJTG4qAJxnNhTnbj1GEpZ34Cq1BNmFdm7Cx7VhcUMwXewEe68ozF9k2qLJkDV8jjm1Jax",
  "key9": "38RGiWE2eSm3FZtfsebEGpFmsbcQ8HESbVUcsFGEHSKRxtV3WSBTYQb64tDtykB9Kxb1tjDPZewEQa8FUGWVorRA",
  "key10": "2XEWE6M9Ux956PLhY3bqcZZGi21MTsToGoKBg89u5MtRchMZ5edVCDVeTcmSC2Rt46VmrKBZepfk1SFJxxgQavhS",
  "key11": "61QMJ4CJkxSj9G8fjfKChy3Y9N7YBcFEfJJWBgbof9NESDJqxp33URNuyGmcySYWYhVTn4SZ6QWzw5e42WMBbrUM",
  "key12": "3eCJeVnid65wVVe1Wzh5gbtiMHDHzZqekM4uPGnucgVRmmHQZMqpP5Zbi7jGcEYwMjejZ7SENT2AM6gwvtY1zSUx",
  "key13": "t1m4yDVD5C7NmVkbFmmZ9oW3c3AcrCodnRjJ3nJcfitWwEpKLh5B9rJXaxQnvCyQghG6q1juWt8gz869LiQSpvZ",
  "key14": "2EdDt2QFyLuKKh1ttoihxQuewrUVAd29r7WpUS5gB4REEKzSbnzSjKuwvHJCFezFQgsqXQ9qwomN761WtKhRaTEw",
  "key15": "49TjrHrKcRBGFujpHRG4318xjXiepmyTGvRJSreCBmRc1c4ZQuccq2gFuRavDxMcAfLAWcDW71k2bzFkpi3hAKgV",
  "key16": "SeAV5Q4fgSUJrEAjSGKLwHoGufQGBQB7FSHnu2ob5xDovyrKHhdj1a8344Mi9Mi5AttEFcAvL24TMaAxJkBj8Yi",
  "key17": "q1t67mTiDEbidLLndno9NffvcYrm7KToVE742wGJ82dc4oP63xu9zX5zMpf1HaYUK8LaFjcyttdqj7H1v3d8MHt",
  "key18": "4koUimuSx3RsNNd6y8ma3dbb4XtC39qUHNTG72hcNAkGTYoLMCBfrJyqu6eSdFnxpT52Aa2bCQnZDu6pgFSL1A7c",
  "key19": "4TNakZMeYgRHDRsSbdZqmntDAXMU1DK7k3kP5HdyiPWqhoeST32yTsj4uF3MSiHiYvS6W3eFdkKK774SnxQ6fr6G",
  "key20": "4hKupgkWA9NVndrVitGvog73YyqtE5u4PrQaTzmUGXY6PzN9Vxa8ywgEPcmKbmCeytpFwURvJt9M8McJRDTYZsQW",
  "key21": "3tCebvYp5qhCD3SCxJgGhebVarWFFHVmtLaCkdLLpPW3LBiU1SeNaVA8xmESh9sc6wLuQArics7ZzKJRZY5eswb",
  "key22": "4F1ZLmAC3fj1v9Fq4hqe9R2vdKv6QvbAnue6yVJV8QqKJNKoLCjjoJfnykYq8f6t2QVrPDLCn4qUpgaWPFQ5yqZ",
  "key23": "ahGLUV4wmZ1jMRd2u9BR27b8YEWzDWPca2teM1cmz7DxX79oEuMUKE5qFQASoQG7uw2LqsyV4h6qYH7KSpArMY7",
  "key24": "4HvSXcLHq9ZK3SuePMzWoZduP4AEgdnG5VEQGN2f2Gi6tLN6mS4swXEgQMpeeRujJCtVpM4dr6hwiH8NuvTPpQZF",
  "key25": "2RY4J9ML4E6fSwd2TWr1CyMkMhxzebxFVmKtrgMJ4TeXvySbPxrgoENextULDeUEqV3qmY4EZudzwuckWbPhWh6A",
  "key26": "3ZX4XtELxNQugzMwkgngHJe8nnKuNXC4Eiqy9jWN72LCzaMBau8iBuvSRCdocR3fKvAmgeeqeMYK8hPh2LT4ooQC",
  "key27": "4gYKqqWhwkSzMQZzFacsuq32NtXYRzDpAD5enVKfAwWoAdRJdLvS1sMGXLzDUGWV6dL4BCTasiLqUufS7gzuiz2t",
  "key28": "2CknpYEV9DP8kUvjzBMueV3kjmuHRXkMZ5oTzGf8EBacPgs7qANpeqQoFTGDvRHiuNZnreifduo8Bq9DKwcETDF3",
  "key29": "StQT14riEBMW7GEx4aETSLU6jnifC2p1QkyVjxzZbXasc2wT74GskDsTBTQJJgfXCjJEBaL6FDufQ4HSwfyZvQc",
  "key30": "CkvsMBLDW3AEheGPiDaC9EyVzq7FzoqNMuekusxKfpGL358enr46f58kEojpv9jyuBLTZfkNu9DFfJqgFeK6spn",
  "key31": "5A1naZPTf34J2QiNChfxtieMXGfNbNjUfqfuP2wuqb5Y62fu9Beigq3tPpe3hWtzvRxWpg6JvL5t7kmBbPu22AgE",
  "key32": "e8JSHrV2kNGnsHqmRUH645u7V9Y9YEFdWbxdEfTRdnhrJorFPuU2CMmA8G3EatG96YsriAy28g1hM3zmdhVZTgk",
  "key33": "3ttnsPsk5x9EjXisroVqdKLaMUTB7ErYZUy28i5NC2yztZnZC9QCA72FGZ89GT8JPrM1UpRvqTyDGJNP8P73dGxY",
  "key34": "3eHE9uJ8zZSTUE3YKj2muncfytT2moTGy9KX7An2eNNbXPNDvKahxX2aVu79Z8Qn2Kr4iCM1H2bSkshBrCVAnoST",
  "key35": "nA35crwyjNj354A9oNSAhJDDJeYcgtT6hrK9rE8bjHg2BpjYTa9qGNDqCaGZ7iEsnKY2wUfQUacnWYA8rK8dCgF",
  "key36": "2NK8okavwztthcKCHjn16fSTPfL9ibGG4WyVocKhn9GKc3GHphuJkZuEXLKueBFi3meU58dxMoRx3G8z4cfGMGdL",
  "key37": "x11HY4UCqir9TNfwvr9GCYgTyvyPZYjKHVikzc1Dsr7f2Rm5AEWmX3sXaMEFj1jG3rtnrVGCi3QTWyTYHMxJWa3",
  "key38": "3uZbAwyWX1gtEpBrgzsw3LFqD9dLi8H2ozGcFsMoKvKMmJd5dArMNbZUd8AQXMe2zdSMoZZrPEhh6iRyeyJEktNB",
  "key39": "5krog6Csg8fbLqbYQH3LfL1HEh4ST16fFNjoRWJez4izXu2Yqf2AgStQcTR8frcLKd519BvLNk4Meiqby2L49Ko1",
  "key40": "5bKDJP9w63UtLrmAdwhZWZEoEeDkGiodrH2eSbzGue35sN4oxgEVArsTB6tiXjgrUZHE1beHQXmFnApPsuK1yweA",
  "key41": "4YVyxXkvycY9fxKAmVqH7W2qYn2NReTu46r6ziQBtmSGKTCQwBP6Tko8V8F9GMw2wTD5DWJxzmLD9obdLVoZCcXL",
  "key42": "4bCysv5ETRtCdgwf8bUbZyyoNiWxUYK8T99s6tbG8MC4VieUrihUZ346Z6vF7t1R82cLBM9Xm1VJnhNdiDC4Byrv",
  "key43": "3S4MtVpu3r74cRyEbtPwWXgKeojyhjHGaRe5RfKTC93y4ow7GRaG2qRrzFrSLFy89WAE6azeCiCvzgPemyG6NRhD"
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
