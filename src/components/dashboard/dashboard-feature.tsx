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
    "4MR4wCVc2xg3BqfehYCEMV7UaDh2pECQ3F138WdYTpzh1Fdp7aGvqGYNr4Us8rdt3uPhvFbCtk9CQi14m51wpgun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NkpkLLvxMCcBfCdUhtRteQ7dFrVcu9hyGVCYPnqD9X7U6oyUECiETDkqQypWmFavKieVc3PyNqNewphpNfQ7E3Y",
  "key1": "3u2SKrDW1aGnsHkeKzupp96zcAYfA3f2r7SEray54HcTkJH3ty7xjQwcEAaadD9aksybAg3NUK2hRLBrv9Zi6RGc",
  "key2": "5ZGxfKw35uzXcabCPb93SAKnvfDBx4bz3rG1aaWAu9T9rp2NcGFrn5BqNwwQCFwy4YjPEq5cQve6n8PJeVV8bpAm",
  "key3": "2L7NTxeMfMg1epebbdzikPt1j7kYrjRWFBEbJ2aZ46YdCaKuR6d2nFRcZZLQGs65yspjCpr6buqPJpgxmqiycwPL",
  "key4": "7AMZp4fepPE1xpJHQd9VDDASoZoPiynjpoNt923ZWjtapBcnEuat4YRkZXF4t1SbJEW4eHzMY7A4NELHLABnJur",
  "key5": "2TfTQsdzTx2LDW5LVHHuwhngSiDeXGj6Ze1DkQXVKsj36uRTJHoMQ2ovNsc3JWaLz2X3XwwZ6hhyk2j2XVNAfunh",
  "key6": "dXFkdvHAi6dKdTodKezqtFNRgGGPBvvyaLreeTMbtDvMM9dWdjCBfj6deq2RQiivfCB5jqTG1JTNiQLyxXEwGyV",
  "key7": "5ksUpmDMpTzAtqZrFbseVkTjLnCe9vPi7ALkL93nruVyfSD1MTjxoL15e66UU7M6TycTAxLJF31GUZKGWDtkvfoN",
  "key8": "hQKgSy4Fro41kApNxJFnMi6U2bvkKAaiPU1RhWjaZMyGdgogipq4PAEJNRj6Nixkf8Hsqc2G6Jsk1DSLQUcn3bW",
  "key9": "ycRhBvyMP1xgyJHYgdscm7JRm3cZzyW5tkUez1LB4uXcuVzFonHdtDgVySb5VkwcMTwEPK9MPp5pWt3hBnt9cWm",
  "key10": "62KUcZUjBKCGLshFwLbReCcGaPzrm29wFWayGMZdwvxHqJFmvfx6q47nFEq5UffnZ3gVnkQHBGbzpaSz2JmR5Yrp",
  "key11": "4oxbTqVuEnBu8VAzM2B7WUZQqggiPzqgwdVHxQsScwi6gfs36uajnKG7mgpLxoA69Cz5AwYk553LQRGwZfrsibAN",
  "key12": "buftmLbpJj2ZcD6DQD6n48tWpsm4rJHybrZ7HR2NBkr3PJiSaZp3yYMh2ekiL9EWFAEjgaah1Dt5jGaEofFhJV4",
  "key13": "4BWuckyFjVc3oS5bNrPCSbafeS79N8HxtZh1a1h8HhLRgw5fXioXmjuJ9EHoPMopTSTfLq3HFWNBCsR1tRHHxk6y",
  "key14": "5kx9Nc1rMyqDeDqLxctvj31JdUmduZ2RpSMA5fsKBrGeNgw4rUhCeq6fM2EhBAuprYevt7RHa3yoC8v7mG4fpsBT",
  "key15": "AFCKyF95S9qxbkBgPVeERyZ7ZLdXqhPGYfq82dCzNRcqmSFZbEj5meQ4JtzRsQaBA7foeEtW33x6WMLkeZ9roh2",
  "key16": "67bkmEn67DSvuqoFhsmfvebpdKSR3N2AbJf1HD5b24ZDrtK3Rtfe1MT9WLwwX3JBFw1kDXPW83ufaqVXiQPdSziF",
  "key17": "2eJ4A92kbX3WtZV2WU4ZZUWFd3RVwwLGydyJPkVE3ySaKqt2Y1b7eJmDJyX5GZ4FYLfDL2jFMdTY2h3TxHLNNExc",
  "key18": "2zYaV38B7qjysaN3ryq7CvC1onqQRCyskMGPYRPtVi69oejunYqrMzBcuqQtjZpS1r4KTGfXG3QAMZXFSZYFMcdr",
  "key19": "eztBC9q84JpFnyCnpLniqe7zvVAtbzYDgRHbypfB4BSHEMGj18CaqHWYCTXn5ufKwbH5bLCUT9xeCeyVmNRLjkn",
  "key20": "rc3CbvH7YeoeNsiSoBjP6LHjriq4kztB6je44VdNPo67iBtbud8aaogJ28UrKHiFHAx99fcg4b95vM19w1uePa7",
  "key21": "5nWZ3KWcFXx1i25xKuuFwyk97cjv7TxG58HypALpJTvuoN3jC12UtkZAYJ11FxXnAzsPjtabBC1m7L1KYCkTSXZA",
  "key22": "abg42xKcCws2gC2iAM3CSvNhwrLQBDgFRnxzbJz4Bf8iKwEHbKLknh8aEtuaF45KYkhSa3UqoJwAa9fXWtpnT9u",
  "key23": "T5TSCu2NRijrmVwo9STUhcowXwC5wdRtMLY3DfoLLph3Nf9gEq8ymZ6BMcUNH2jSpM7hTWgwaJdaRF1vBsseUh3",
  "key24": "3tU6Kgv4YULMT5V3TWgXRjdW8LLFf81eofX62XyroApdhANtD7gxgHNetaeBaW1sWUBFKXHfzMumP9S792YuX3qz",
  "key25": "4DzuCMuT4x6ieoitbqCVT6W73mzmhFeCT4KZg2JQ6mxjoV64HX9mxRHY6KkB7BpRJ8sqdLrQfStNDTWa7trNEu35",
  "key26": "67U4rwnrwGNLKByA8mYGeLc5mCh9WwFXJJKhhtF2EsGJDiaUHbuMiUCRcjn2VLgmt1vKK2uDWpJdrEbaQ3GUpxyn",
  "key27": "4phGoSqLbYPEQ45aHRDNYZcFD9rXL35Ac1zVSPgEfxqaLDvyTWd7uxKSofesBwCueQZAkTUsaxYE411zFXprZSCm",
  "key28": "38HesxpHtpfHhntugtXznn3YmozmJ8nkXcPwUKwgvgb71W1NhtoHRWcmA24khVjKRVJLFgB1q2eTRnNDGhQ2AhVT",
  "key29": "34Zq98dwJCqjPtpe52z7JmEorSfgGCihHiruZsnLApQe6vCbx5Tm588NkqwnPCQePWug7C4KpUdQmH8D4sKvu9je",
  "key30": "3f5iQf7WxSJno6w8yHUBtC1Lvohdwpq5SmHD4wWM6EdkMzZbm6k6n9rnah1CcXhCc73V2LPYbAQqtLJV9NPLGDDe",
  "key31": "3CdkyX5p42XmFjcZ6DQuhovuRu64EL5YPVen7kRBCUmfdD3vJFG4z6d795pg36Q5PGkPkHTEBoopqayhn76tGGwe",
  "key32": "ZgVTECAtsfeipwgrUfTW9kUfB88R8gqwfhPVUCm72LHrHoo7D9W2V4u41eGbAFAzqgFuyqDaffvxdq1F91rZhwf",
  "key33": "4NbFp5FSkgKdskmf56swuNNmG9hmWMmNNb9dtUK6dAAWJBQKeRPgnW29NJvMzGYskR5XFuNgm12SHRJgQj8kkymE",
  "key34": "5JyDYweUYdGC4upQssJuAZDc1sBeoW3PyCMfN1ZRkRQSyCRRSGrUo7WrWVAi7stZ2f3qDN49U57bqTT5AQVSjNu9",
  "key35": "34CoWxPn2zoErXBesc3T74rHLYq6nTmbL6jtP6dH5H4rLGzVH7eGGVr8HSNaoTLAo16Qd9PQMRdu2mXmBinejSm6",
  "key36": "3ZEwcN8VuyB2oM21jMhCt5bYDNnT2scmuJoTjbdsKGtTD4kV87itzGmVz6sYMwP1jZgTiHA6xax5u57B1ZewyHse",
  "key37": "4aEXaq5aL4ZkYMLeQDB6Cx4gdFkZcqyC96FVWRCyyPxKVnotv4BVNqpBaqpq38sWKZFz3g6aDqVLCnYTa3VC9QHk",
  "key38": "46AJXHmYXCN8N58551cs7SftEAHXGiePh18KCeqqWdhu7pCTFbryFLPJd698aZujRrJGPExG2WNjSjjbbHpj8PMw"
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
