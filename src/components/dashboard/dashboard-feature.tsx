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
    "3ZCy9ticSA1aWCoZzy7XDPWZqqmJLyXXnASs8otsrXegGSFU4bhes7ZxtwRFe3QKPg64wdJiZXexouqHKUwvy9qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZL1wENnjXp73BYcvq4UTUj14cTbcHvCmbob42gSrDrA36GmmFSQn64xqBay8LzMF4VJQH8PRuJAAST3sdY5Atcc",
  "key1": "3hRnndDtU9kJjm8nrvs9WeT3f7MwjsZMiZZJsCHr24h2vukecNsbEmLGRCPC2pdYXoN9DebVc7AGyfQs6EViiGFa",
  "key2": "2SUdNQGRBvgixX5iwBFDdbxJTDQDfZXphe2PudwZL7tV6EdiUzg2fgXFmbXwYtWHUuHHWhGfoDSz1Reifg3kcbP",
  "key3": "4PswgHYXsRsehTTq1rnza9TyCBuyE8ZbaVxsbdyiN9K9zHoKxVCxWztX83f7narASMrNH3JfUMkPP8pUVWZgLdw9",
  "key4": "57uWFQRaRcu76sfic7bv4JB6B5ipU2zSb6hQ34AyvfujQxrFxVX3BH9LLjCsMgkCkzP7qt2NYSWw4ydeD4FXWeYR",
  "key5": "iN7BqrnZQRNrkpMRtmd6viHzcuN3UvcQTs8gb85GwaZr4W8y87f3zo7MwbWFiKnNhgLjqjTNrvCUp7oqRo2tkz9",
  "key6": "5B3p6gQ863ZG7rEYV8KywabLLLXEeeTAm8hNQo62gWYhVFsjPm1uWa4nCcs45G6GPS2bXFekG3nx4wQ31s4u7Pdc",
  "key7": "Bpq3bhhWTUXuGfQoQqNvSJZ2C4KvebtAeGi1wg6DzmYAiMrsTB5mtw8DyyuocKJsoeWqN4PW6j59uek3ap2KEny",
  "key8": "3ksagoepqbyU1JAtqsyC29h4wGE4ntdp8FXBgcjZYPwEjPBETMVneTRBozAF3m1NmNkzSNgGdkjuFmuWqMFepjhw",
  "key9": "2AtT1mBEZuZ4bshrcBh51izvLk9qvquQh4MpxsQ3TGiGjvqpdF1yPXR9J3NjWJdynFHqLdJMPFVpE6ahrRwNeJGk",
  "key10": "3F7UAbtuq7hNGaCK4dx7uLUiNRpYStQBoZE6YjFX46Py9QHoFszNjMaRvXKYPwwXtLhJ3ptuYNsZFWNbFZKwYRhR",
  "key11": "28CwKLaoMsN4mBJfy4RXcCX6zbeLFY6KxYZZRVWaV3JjVk4DMRjs27G9QSqigKgomxEhewJpCtBRXfkxjxsL5A9W",
  "key12": "E5FbdKfhxmVLJotbmZYRat7STncrECv34TwUdnFCBQrgbJis896kd7qbjAE4bKNWJT3Lwb28EDBk9aLNVD1y5QZ",
  "key13": "3GBUaJBm4NKnYKbvzQ6np4kpx9N1o4F8CGTENh3DUiWB6H3Wp22f3PiQMJuqVt7voQaEwtbeFRfYjasEacCmeqAk",
  "key14": "4ABqqUfFgAqY9hcidViKRv9TE6RCYvo4Y4V6bGxd7swDLEQGww89zJdB4McxyAYdENZLdsWKNuuju5bDgo7StQoi",
  "key15": "2KaipnNzyqjMd8xGtEeRTCBJsYXwdbz678Zhj2yGvhgMD6nMZRfkFhcGLqTRHGmNZc7HGC1FRy8xjnSCeWxdoHfq",
  "key16": "4vwQ9BdZofn918Jdc1nyFXr8eLqahGveFsPnW79ubLDf56zkSS2Pvsunc8ggyxipzEvSXwJQwos8aiMgp9DfKQBz",
  "key17": "5pvGFr6tV3gpRjc6zTGJn8tv3S9iNPNFMEyaxG4fGQ9JjzupQDTYdiz78u4ofH8kzUqRe7wa8EXz3zy9hREDArcY",
  "key18": "3aLiLyfKUN2v8ZvcDcW8uLqxzUi6t5nZddMkSFCSA6SCQsss4BCbJf47ZASruZGkY11WdKuCTo9LAvaLEELiNfgj",
  "key19": "3jYPcgmjNs5k7Eot2ZG3FPbbUCd2MWA2zCKQXgYv9XDEkBBktogQtNgQTMjoJprHMZD8ktfTrAhPN7SxTcDW6tQB",
  "key20": "4ajtMt7wu7xrGWhEMMsf3tQPT5XasxcMcbJ5Pt9JN5XcRVypE7TxDwQ4STCh2Qr9CFrRK7A68tznVEos1fv6itkW",
  "key21": "3fYyFEjxCtY12MNEGcMLk8sUUwbq5CqeuW8hdubkYsdJ9Kns5DsyhadyaTDAKZAuEqLrKVqcNDHFuDo43uoMGpfA",
  "key22": "3KpPtGyV1DfBigjcA21tqkJHPdkveDNqg4RB21myM6upEm4fCNU7hkWhhd4RsY2uEg8bDDGBGZrZQh5DkQ8jjg3R",
  "key23": "2DgXCGZDk9n1YztorJX25DWB1SSg1fMpjNBMr4qDQQVAcTv1rTsvyfWcUFHH7mLotoWmg193GuWayiEsy99gK7y",
  "key24": "51HCWVRPdiNGh2a6MCntYhz8mvKMUsqH879kvFu2dEbBw4K1v88QrNnkaaws1DSJb6wPDFcj5FxxGnFuehNwoDVN",
  "key25": "Z4D6bgpgZYcurS7tXTTJpaqXB9KmVxBSJ9LQp3tPcSCTK71sxeDfP6ejeRDS7mWQnNJSoJJPymwTDYYaxdTvpbd",
  "key26": "2rPpnvkHoTpf8sBY7FnSXqUmighLucsUo9PmciLizunjDpj8fTHTsPRHskhETqR98PAFBVBAmDoVHMNmJxDHaRoE",
  "key27": "DuVxZFzVUEVzAg5ciXYZZaKaXWfVWU66uYoDpcnbzx67JWsTEcPZuQ63zendao7CfaScudyekETrfn9ScnbS3Uq",
  "key28": "2U2JZxPA2F5A2Zkoh8xuDjMH2x3yBPvVEcmmwpFyaTxq4rUeRFfrJx7AX7X34vprX9bi7U53Hey17mo5me4in9yS",
  "key29": "3awzZyQnTit78WsY47sJ4jg5D9VKMewvQrh3P2nsWyuxWhdqzo5ZYp9zaYj8rx5keLsD16xBrVEwzKdZZa5hYCxm",
  "key30": "4BrT7s7DvdRGH1w94tq6y9WYVfKL9LM7FgJjJuDt4fpPs4HQgvRQv4qBa4HoEnDP7DGXDXyQesymaYUZHhNwkMny",
  "key31": "4aQsWw4ycWj7jGDyJbHESCos65bybHMRkAd3GpqxvLRb6SToFRY9XHHgWN8diqLoofBymequ1oUTnV1jKPfKNwrz",
  "key32": "CLhkRAKGnA2A2uU3jxnJ8zdPD1SKum2DRDXxBYTAsNCFeTnhAeUumjMid49DYyxdeJXQoVdxAX4tiCSuJkZWJGf",
  "key33": "3UTpbNFqDbqaudU6THwAiM52WXxkkJ1iE1qnAh66qUWEk1ooUJTFiKS4E4HAF9MhZaj7VQB5qH9mgAZzUAQfKiiv",
  "key34": "3FpiZzWmW9NXEnvmCyG1EiBkSsLUMX3rrtBxSoLXz35WuBupXKtnDyRKNqpD9nuYpiCyfYEYzwyob2tzPgSgda2r",
  "key35": "3PtQrg1GUpfRwv1F177aAZpRGaAWBXg73grZPRNSyqT9RKbL761NoKR2WP9CcxSo33E9hW4ix8pneA748icYA8Ec",
  "key36": "4WP5MpiicRgFEaTK2FsMxvKdL7VQnu3q3LyTAHEkjrGQZE1DTcyLAJJcp8919o6oe1JHFuzXqvi5VCsCshttSjNG",
  "key37": "bqVnipZ1eBnHF843qZ3ZpnaYXiUGzMnbSDiixVBhoPr596KofjfwvGqWEUENRHGcQhvt5rTxNEcJXswnwJWnvXm",
  "key38": "5Ur1JMfEuer2VatsUk9mcSvWLmntQ1hYDGfvNqDYtjgLw8a5G1b81PxorTL6X6Tq6WsncGM9igK1eyAYv2bCMhAw",
  "key39": "wR9AggkVgPtb6LX1JG8vPyBV7iHyiRVGSofzJdWFHtbcHSAKKtHKxfdngaFJZxWL73zBRTVEGC8nnX5oXPauve8",
  "key40": "3Zf5bqDCWLCjgNDdU42m2dJhEsHvjdwecANfXMQEVzJFUNgYVj3z5xbQa73Hy4jc2BaE7kLr2oDUSxQNGDrDXzPg"
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
