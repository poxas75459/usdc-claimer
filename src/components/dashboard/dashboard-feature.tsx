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
    "43EzduoQgBnAgRXJKKAhYRT7DmD6R4x6DQebouy84L22Y6PcG8J59vQhekAuNARacVtzNcAu65NrZCNHZkKR8R8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9UYF1TGVEXPygVppCUmd3CNvpGQwK3q62A7N4GiYxAxK2aur9XCDM2oQDokKNGpKGuj2ezVDXEqqs3B7vXz2jih",
  "key1": "XKvkexsJi2LzP89CTEXiC3AXWDS1dQMG2ySe2EyDkGrujCKRnS9yMaahDgieVtvXptofqrbLHaMQUh9Roc3kHax",
  "key2": "36XVJ8qThhC7vrsvDWH2DqdytoMK1NpSAZTCAr4Yh2KXiRPHaV6sK1zfaWWNYdxKuQZZf4nnjoWtFFPo6Spkk56a",
  "key3": "3soJEURptFHCrVgNwAqiXhcdbc6zipwbcmvqizTPwoQzSXdEKyRVzpjPiek7DN7i13CKm2Nf8MDzqteV6hAFytZw",
  "key4": "36rgRTZ5G4vwPSrHCnpp4Bb7YbtqizUXY2ti3WhKuCtH8VXWQHqikrfMNJCYhEySPSoLyHA2ArQ1enFkc5SVsKWU",
  "key5": "5WegPqhxLzJshu8X1d1mPatPJwPpGWfEJKed9LQzzx32WYNMVmXw5CKEQXgD9nkWS94M3Gu4uHhU6KWbMswQdpgS",
  "key6": "51YLT9hiiHDLse9Fe6NmqBhUvoEm9Cjza97PQtF12cMiqizBe6RvH1jach2cBsVmfvTGSDjceYLfGiLcnEs4xtz1",
  "key7": "5p6TstPTzzhre1XVCLjroChYDdkmvq2iDTkgKrWYL6xhJQYg4qnqb5T6de63oFUREQDbGdTncBChb2WAzeh6ZvtX",
  "key8": "4jAGutgz9ydJRkFuAm4WKY6BBJV4FArK67Ys5mwdeXyJEMbdRm7L9p54q8eR3AcSc6ND4sRmDC3H54pZdfG9ZfiW",
  "key9": "3ghDFDwMhzKLP2vqadqxk9oZ5E33JUXscbibXbtPfjWD1f6Uyi5r8fMMsGTBB2TV1frmms7Jd4vWNBQhgnFMamzM",
  "key10": "pNZXCCSAh9rpr34m6osxieEz6jKg6cosQVhgtUpTCGdKAkuvZevuxMmDmEs5NQod6fUQxvxXYxexGQw7x6zSZwK",
  "key11": "4z2kT5W8xLXCnmmjxrL5LJUMaL9upqV9t5omPqgAUJux1Pav3EnEjRChmXE3wYoKrjLqis9zBWbspYwTGA47N2BR",
  "key12": "5orxWNFS7XkWAkBVXtUDsEQXH9pMQTk3m98vDB9PZjg6mSW1BcNUkSokW3idzdUgwbinqttP75B6euNz3JkoyPNW",
  "key13": "4Pa3nJF7bmrjkfoguoYTTyj6sdTTBM2vKKjQ3uQj2PoAzSmuro3RjtECZHSTKxzyicEaJ768SqsxQH4vtpMa2AZj",
  "key14": "5cFVCqaqwoKy5vWbAsvkWjSHAP6m9UKuPoeNv5YVXajCLGxHuuUNhg3PSAVVmFWVAbqJEb3mxJiuDsEBbLsiTdLK",
  "key15": "BNdxB5RanqGL9iw7TLjfrvptybcoQNeDHcDXTbCHtmhP1vHLTv2StDpSLQcufnV7TJnCeT7BwC2mYpYseLjc9zr",
  "key16": "5NtpVVrsE93JqDD4wnasjbvMvvzEVtW6xFTzqDr3azHQTHJqave75dWetQy3bxJKebiYK4ybWpkd1VSn7rLXTHP4",
  "key17": "3oyzgg2Y7PdurTT2JAbh3sVTPXTAJSZxMRJ3dJqnsTD8t7zVTxDMeK7p4E6HkLv5iA1X6joSybk9FkUmE7CGrToT",
  "key18": "2N6vpeHq1KVzkcXAVxYnLk8Ed4uM3W9ZCfSYxnaJu4Wa7kLu54ccRf7XJzYJA9injMQ26KcrT29binep5iRRHe3R",
  "key19": "TNFKTtLLcfm8nv6ncPbSEAokTqfxsjbK6msvVyaH9WtqBg9Zjn2pkW43syVQED8pXwGEympp8SZP7QrCaxsLTbZ",
  "key20": "2jgjZFacQE254DmEuD7o4AwXeCpk5KgNfoBtioNjdKu8PAdvjR9iyuug9n3KX9ZQYMECTXPWhERdyjG8VwapuVPR",
  "key21": "4KGvvLdcR1mCkfFyVzVmtK6yeY9doREmHJaN11cjDfNrX5KHnKQgqKcWPBAhx857GhzV2q3RUGhbriWTmXwRfqYs",
  "key22": "53kaZ1yga4vG3Hi7igVA1PJEdLXA8JGpXitbdgp4VBbExybjf3cJKhNRk7Lmei69gY74ecfg7ddXcH71WyJSGfeD",
  "key23": "33nTkVijvsQPmf3MunLjJZz5FMshkGL19JhCiXxcnKt1WqG9ceKYuVe38eUGHVwqkhfWNHZvBwGqUjTc89Z1SrHV",
  "key24": "5ZVBRCvvLGjLoxVWcNktJ81QZFtGq6N3xs5oYG3Y79QkaTVPEn3wrmFBgoPxRQTUDKqsufQh2sWboMiTVuM82rnQ",
  "key25": "35ZSXJtheYwGzvfsQegi23QkYBF5o9tYoTYDzSK3KCmFQFpaJFyxq9rbPkW8rqetZ8x88fezbNsBptGTe4wsNZat",
  "key26": "2gh3xMDMenk99GrsPQVMWrnMnqhNKEDEg6GGR4qGnTFFEUWavGZ3ZstKDkxDKLUno9N5UjjaPYaxb7YG35KErwuT",
  "key27": "kXHRBnTr7vnX2Kau1QyQBj9bYBWcAnySnEvJa7PCAVbZuf2SToG62njYsmehCgs7Y2KHqyqt3W4gLwL8csUuaem",
  "key28": "4RefaFLdpU7vjPQ59m9xBkPn2ucbzsq52u2DFdVxAZ9qQpxa6apaB1iq3ZMf2ULVXNuBvjCmS9Vr5zNgAc1eWwqc",
  "key29": "5ShJSU7yLnPBbYaPvue7EdTEoeCJvNp3byCu8DT3M9pif8Zp7GgtGXi32Psug7kyPUMyznf2RLPPfWKwFq7yZYm",
  "key30": "StCJHeMYXo6fjF5EZZHAr16jvXmmaiaGgYsz9SzTjTYSxcfb5t8d7MfnpJxquiwKRCkdKeem9UW6g9kZuMZmAqe",
  "key31": "2Bar5NJymSzdBScpK3HbFSW71wBEquqVkySMQh6VzQZeizQA12YdxB6ghigLdtDWjPGMXJ1W6PUxmKtj34549ot1",
  "key32": "2gEXduKjNEvu566Nqhn2omngqFGnsXbKBxJTuAtFEXx6RsNCQFdfzytitjMZUX7Da8GmK1X6zwYdWotAQe2SqdKL",
  "key33": "yhYvNKMb8XwKwPokDR4ysF9cn7T6m8PPbT7kscdNP2DRju3v9hKkeLegfQ2CwmKkBz7e9pFrcaM39xgfnvXZQnB",
  "key34": "2EjYSeAFvVMwnSbk8n442YAaRAVisbvpatVXc18NP3vjuvKK7ZUYFWTTHii7mVvoa3f8HbefrUn4BF6BHGKenkAH",
  "key35": "jg1k2kgRkPCLbCtsX3qwTUrhR6xGW4RgVassaGnCzvBap5UpuSEcS1yW5k7PmPENxK95z6irkQta5XHkqX5th7H",
  "key36": "4pLfnjzotUV1cMbYrGGbGwgyMJkh1n6nhZyao6i6V5ZPdfjim15wcUX7tyFo4wVUR19ddyizWbVGbVgwrP8KfJiv",
  "key37": "4Qhvd1QUn2FbSjCy1nLuRyrEEUkJxzLeBhw9wDnZ2onRDBsao9J9SENiM89WC6bjrwngkzTkc1mv2DsKeMadmEac",
  "key38": "2jKyzvX72xeRo7U2idhBB1A2KkVyMjWBXiBbq9UW1Lb7mAPaGYjD6XUbjmCiufxFRnuV5KUiGmt27eSYaSLQhmct",
  "key39": "4Lb8NR2cdd9FxWsnGU2QPVkM8yE4QS5bB4451CNP6RbD7pSAmjRwEf7faWsqqFK26XWk3NFxi3VGJELEhUP1JYZV",
  "key40": "35cwUMMW6TMyYGct6qnJvmWbUohxRUEquyq7QcfhED5qGmMYeSS9sn1rNmWmodatJY2eRi4q4iVR5UAx8oNu8fxN",
  "key41": "64p3Ugm2ZxcAJFqp16eNa2J4qxjhdUKKgAPiD576D532DpV4mhNZt3b8mXySQjS2ZUhkbBWLLpFKGQhPMw25Mvue",
  "key42": "655QsgN6pzoTU1UTQXUdQgzi5DfumQunTuDFHTZrjsqqswt2xijqBhybH456TsHYaEMG4GiQaojik7MciVqXy6Sq",
  "key43": "3RMDdPRzuNDsbTrvFhwGjoTsWGwNY5QmHtJsUMc1TWEQxHXSAmS1pKKMmDf2d6Ex3RphKmmz5esM2tPxeJ5bPLi6",
  "key44": "3V5KJmj9hfzdVjVHoDUqtBGa2qjHeLSjhzLvQ3CnxW4qiVbaNcj7iJ6pyj5QxAwRfysucrLuUfVFU4pUK6Pu17Pf",
  "key45": "4X7KYQQzcTUrBGvU8DABXmKqr8Sig3KD11Us996QovBt1A8GwyVpfEhjbEyZ61EVrVybHtt4NZCxPMYRKtLtMx3P",
  "key46": "zxjXobwbj5JwSXsNE6A8Vhaq3ctBcnABE7ceo7AGDzkMisWE5HVdEkLdn6p8Hvea56Jy5moYpMdi6Vyk9m9yy9U",
  "key47": "51iPvjNyEmz54ysCobxsVoUf2NX32WCH5fQUbRbKF85JCu4aGWiJkQRSC7kaNzjHmui3FUhSau96RAxe4JoS8GEt",
  "key48": "579LHeHN77iqj2D2mF1pdKmWGZQmUZAy4wVPAKRnyGg7hVdXWTyT8Btm5FT3dXWSrwNPzYaRBwjRxDP7FDNUcPhc"
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
