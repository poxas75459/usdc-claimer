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
    "puMHVknzYq9AjZNwkqN2d2vsF148aCh2uCp2xfs13Dtdn3DU9t1Lg2AFuwsmpXGeYMeigWSUiigJtohu9aLEN7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ksE3nT3F7zEAn7PaoJPEHtgEYjFuaVymJP14wiWa4193CzuCiDJN2ozuf1BGoZ6qT7eSstJDXJ7yPToJMcfBBeg",
  "key1": "66HjMeRDLX8kHU1wwk13wDgzYzWhKusPJCvic2fRMgU3FnsT5JwEXn6c8ZCvz53WKGHBrvavkzpDCHyYB6nAK3V6",
  "key2": "37zSSWxrL8ForeyXsYPJHaBTptXoshwWVf7T7kJEFLBvrMxuxFS7gNrAw3fy7HwWbc9wMBNjCQZMxhsS9JzqqsVF",
  "key3": "6xRfjpsXtfabmDRvjvJSKeTDinBAjmAyyfTgVYZ3GUsajumC9AGzDE6drszDuTieBgt3AgDPsW7mLRfDQH2dm2p",
  "key4": "3BRXZTqRXsRBYx2QMoXTMytfokzz3SehngndS3N2rrPvpUP9eeGdfP2YNyVwLL8r1kcCCjyE6HEcz8E3tq2gUPuK",
  "key5": "4GGoTgygfRAnQkAud4kmdQzexg5FCvfPXnmZatgyr5YMGEusSfLR6XX5Fo72NhEkEED3mLVmQBkt8GVNL4nU1f1y",
  "key6": "3PrDFjigMRDQ9cHrTfw54YnMqKN2qcXUFLB8ssLr7bYbqvRiPesN24G2CBH4Ts9bwpag3NfW9XfHwNeorL5H7CNi",
  "key7": "VUs2MchynhV8ZjvZbWF9YVXMRWdPUH2xQX5rerLSgQUucCM6inGYomwtxJirQy5c86uuxv8pHm2444X9jzNTYE6",
  "key8": "5wqMoSqa87QJueQcDfpowRLAtchsibXdXbWoUufjuLvrhrcdu3GZNVS6vAV8PkEiVxppeJPfpHrP3AtDKxnxg4vg",
  "key9": "36TBoytFDGhTVx73nPo68YtiJ4u3nnd7B5qd6QDnbWvWHmJRfjyxhM7hf3YDMdzWjfmMjXkN5yh7boCX1RreAjCv",
  "key10": "5o3SBwQCinYqt4PpffqV7szTuRHPEZ2JW4KNFeEDPk6SxvzDgbrZ8uiXtHmmmaJsT4madaeizLwoXvSZnGFMx9Ei",
  "key11": "2gjfvAKAyNr1rx3Co2wr4nYfRaeFDCGnSoqCs6h1YuchS4Ux4ZwfG3zQmKT7uHp1RcAjFwj76DwbEM3my9hBCPxX",
  "key12": "5iMqf2V8FkhmXUXpmHzRJKqiSPfv86NYpugfFpEfCCSSS4BL5DVavgB2aWAar6YuPeLALMszmTCizL7mEEai1kx",
  "key13": "228Yp5dndygyHPNg3Y7h2R1pgtvVo4XMJ3w7p1V3GY8gH6vEfaFD1356hzrVuqqNYRSkYrwaj8RY82S4jgy5z2Ay",
  "key14": "26A8mwkavgq4oTA5o3NNer46tFTQdt1dPs3qJ1y1tbb9ehQYkKMJELjfF2iWohDY2yRM2Qu9fQqw9UGJFi6cV5VY",
  "key15": "3p6kyE3ZvPYUohygFJeCTq8imUsnvhzZYwDaFgWxKKtHqQbFm6vkqhMRTjXXP4D1Qi5fSoYgG2BK42CADxEXVDfk",
  "key16": "14CQaozYffcqxypUPsmaXewxa3KJNayj4RQaePgWSQy9HQcq5S5UGjxRgJziaUu6EMHDmTXYN5YGCyBhvrizXRM",
  "key17": "psWXtCtzKRczgWEjMPEqvLajzzQpJGteE5n326eyvo34sF7zKMPr5DrZji3oXMvgnuCYPPvWQcL9CS52qa4w1N2",
  "key18": "3v4DHENKhdU9WaKzz8tEr3SbioVa7Fpn89uWeWKe1mjJpcEqDpMe4eiycZYNUGkxsk1gBpeciYVcgFsoATqTLzdr",
  "key19": "5PCrSbBXUL6u15TqajQNkduqXmrasXj3cBAkCagYQGRd4h921WrFXAwwHwhyjp5iKmbQMdUCEusxYTcRE3Aah7Q1",
  "key20": "4CgJpVtJqhcHu3rnaR8LcTDWMtwDn5Nqy1wc4uLFeUwJA8gxpoR1kS4Hctbg48bCRqLM6ioh9syMjr5DPPMPwvJR",
  "key21": "2qzJgdBozSyZQWsmtjRC4oWbyyb9yaMKMTLy3W4rn2VTXgCLif1aZokzZ1LKsxfaEEfehjgNbAPtfrrvRE23QqEo",
  "key22": "4Pz6QMR7VSrYK5ZDoiP77U5XNva7ekiWGvscj7daYi2c4ppRtS3jzNCDBxTYnaPVzfpmYgjx6zN55JD9UFYemXyU",
  "key23": "5zj19jsGBMkQ6CU5Jpt1y1QbtmBvJNNLFVCgYuGJNDHTpPzs78yYjd3t5N3iPsnocXbp1Sqy4FBmF66cpjs8J5ic",
  "key24": "4aB1maQr9c5HcHNM2pLFDH73AgWtPYuzxZSuWurCEmi1LBiRNF8MtdhWEuhaHepJHXNkiGGRxjstJEr4TNU9yWFd",
  "key25": "3Kz23b6RZ6d2oHyMmswe1GLUkrQjMSTL3sPf2VgqtKbgR2ZU4g6YjvUMVj4Gxx6dbNYKs6ci1PazqZQmb8K3WrCs",
  "key26": "2UutzMcXr1HZyyJTygU9nT3FN7yaXMBfheDQhNE6SD5nQk31Q8w7j7ZSqz5WELzqVznvesg1F86GJERVQRZc55uF",
  "key27": "2ayF6pJyKtp49xdak8kY54WcPSJp1dXD3qktVUmGJQBGuEwpdTQUZzHbSB8ULXRJ3VUnCk3g6QGL2X5ibC2rybGR",
  "key28": "3YGwFhU7Yeam426Ng2XEc3gdr7drewFAAZgX8jSku2weJBnpBDAvNjrVz3NH5Kq42cURodo3u3uXRRydwQ3TuRKz",
  "key29": "5cgGUNZNE2HJaYxTp5jARY1RZa1T7pjud2TP9KwHu7qV6XtendHDCwt39PTKNfqN8DTVFjzUmgJnL2ESJmf6sve2",
  "key30": "5UW9qJgCVzHsV4LuzvRKDFxjARjMitxihVE73uZh8fbzPLisaVhkf178qRFAJMw3DYKnsPEhKKt9EEC95ExovqjM",
  "key31": "43uWpWicHUmXFXfEtNudEgntbCtFBcGN1EmWEuGHsmUQCzZhTARa2b5oZGMuzbyUZGFpsvgWGtugVCNRgYyTAbGQ",
  "key32": "5pdoRpGzY4ENGkgtcDg5DWrXjUfLsW9j6JFbAxdBYgsP1oqK1gUXgrgFzaBgzMCSpAR7aVoZ2D9ozuJRrAxrVoan",
  "key33": "62zxoFzJ3ByhvZneh2ZLnGtmwDui66bC7u4sHWB8XL5EWVG3qmJcWwk36EqE9VXwKf3EkwGyj1ECezBaeQMCwe4x",
  "key34": "5BnXExruz1NYD4pabwkEQEpp63tfLeRFyYfNiQ6dKG5SaMe2x2T6TkWYoC1vdPd377gqDDxm64S16qpDchq6mXz2",
  "key35": "5qnp9GTdScBPrKCUDQncmZUcHzgYvHwLGuj9DVfoyg95zVKaSdox5HirD87KYKDErArQZWgLBRMtfoMYRNNgZ67y",
  "key36": "zKgCWGsBKRiN3nRzeFEJ2t9UCP5hoabhwvAUFrwy6sVaJtyDrNzamAKFAhZhoo87zaqrjbFQWWKXFvYXybqe9ty",
  "key37": "62MmfDYXzJBLFepZn7EqmFt1ZVQ75VbmTst5PtoVQV3XnBwUsv2DMPhJNYSWhtsmk53YdM2rG2UaXzTSbpEYJuRr",
  "key38": "5efzLbHUMiAHoSvKKaUyGyvsv59QX9RnzDYQzHi8PAed4Eenmduc3S16o4KywXLaM9NhDHNEKxYsGQv2nmZryKp3",
  "key39": "hwqy9zdQAdi2Ky3YGzuELs4z8djC4jKMsSvkkNbbmMZyutAw3qm8Ygc8AJy7NnP4qFrNF4AEs4oHAAgQBAJQK2Y",
  "key40": "5NRzWgk4vVbBcU1tLderdRPmSo3LmfLZZCNUj85vMegEurPaUiNgJsceHLhE5JzHeseFVZxdkQoEe53VsatQxDyG",
  "key41": "ycEFqZMcbJnxstJNtedkGaAe62YWT21v8s5W6E2aZiRxHkBZvKLXY8mqXUHwNbG6aqbs7MsPgKhuh1xWaBJhoQb",
  "key42": "3aAXYaDPA935rhqQ7LQsrcSggTPhHXxxYyaSmiwj5gexHa1r2DKSnM3Reid9fyocNX2Aur4fwjsH5hqQzYmpaXyk",
  "key43": "2QByHdKn8rKfESgwkkwWQrnMhKJhEQdp9YEFea9RNCjyDFR5fp5BMmYXYhG1AUKBDoye65duD3CD75Mx3XcWw5tM"
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
