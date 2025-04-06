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
    "2q3VgbV5GPKpD2Z5k6yKMZ3UFvQjCxsGCakNcK2mYxLwnPtDwH5eRDe1xSu741cGtk1ZTKZx7bhnJjytUoMBCMHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KotqsEW9itVwbQKz176yqGW6mRuKBRw9rFzoPpyi82UHAjR8Bf7TetAv83gNyGqt9Wge3AxoJbDZ2WfXwt2ZuAM",
  "key1": "3Dq6mgrzxWXVY9FDTHfStKaCy7wvrtjHN16FRZf5jj5gSkbbhRZuy8YrzvdrbLGLooZqx2h7ZUziSMnxdavSxYSf",
  "key2": "3RVyQjPNn3Q4Tp3g9nq41kNViDt8a3yUKJQDu4jqXQhmdYhZuBtZQuAsDeH1zJMViGD376fPa1P6GYLB7Jif9hH8",
  "key3": "4dcuuP2uwRSpsitCK9iLrT1jVx6VAdHAMo8kbLEmx8Ghc2Pq2Z35vLt8HwWpktAvfch9Kozsz9eaRkcUUuRNi3oq",
  "key4": "D7aNTsh9XEo8jo26vqFqmFQaKYspvTdpMNLUqczQCqLMs7xBtwXdzNKmHQtnRPdU34Jc3X2imt592Xuy7qsxdVt",
  "key5": "4n44yV5AeVBhzZbMD9X71DDuZtXT2V4MxZP6ZcJKzG4NJkKRyfrbEzeiEDEMssCAnfHriAJGWPdTVPfxPHESgUtp",
  "key6": "2pwtNo2pYDCf2yQEELHSaQ2yfKSGyTb4smwS8zX17X26okTLvwxPfKYkHA6uHtAA3ucGH9eLWHFE2ZkrKLebhGDA",
  "key7": "5hPbwwY1FBRj8yC3A15q3SUYzdQEAEyLg55skeiLFiDsKdvufMR6nk2k16YY3SG2C82Bc9Pue3MpDoqkDCeLR82y",
  "key8": "4b7Gfaqjxkvxv6jvZNQaLo6kWkeadWzXajw46dB8Vxb4QrwF2YXzjoQxekQ2z1QWpr61aq5mwun6S4gLcJaVkFjt",
  "key9": "4ExgTkh7U4TUZ8SWHmEAUaTNcMpaPLYTsTarqgyr1YGhqzPTc8NFKCBPSUH3eQpzgLCT1R2XEvbz7uXicFxX4XbJ",
  "key10": "3U4zmCnrdtxwMb5HyqL5Fk1PPWDJnQt7o4xiZS49Lu8p8BZgoaAiFutiDiZNXkhqLQ8uLsAikudx45FZKJd7sUWQ",
  "key11": "4U2DCX3x6PeBaUdrxw62deVCrxomdt1LBrJjL9sYPYJpHAy6KK4td8J8NbxDvmsqoX5y7NQ9bhB8mQxMui4kKADb",
  "key12": "65deWrwLxvpgTqrjwgCAtE2TsSFB7KT1KzkXrgoBpDNtQohsAmzqizbYmrqyzYQHSS2k1bLKajGF9coTTBpwrGuF",
  "key13": "57VnsaZpkQoi5oUxMmWJNbk9MJmQHhJLN1ZoRdDnKm7DZYwkUCu3B31j3Qsfph5jQZqLenEUmAeNTAymmoqS4pgQ",
  "key14": "2bMLVWcvRzrZAaShjeZR8S1obmhPGbrQsxG9NiBQumpni5ESq13Qj1EuNBBiaV3QRHVVANfpW5hjJVLdyRBTqMBj",
  "key15": "4gDdRGsrPbpRnGjfsPZ81LTdQ2y9hE8JDp9vUDvuRm2w87WjAmb6AhfV1QSuyxaQWR9B2JZZzE8Laq2k9K8xQZye",
  "key16": "4LMbjpFsiGHfEhXZxhVhhxJdybdFskMTsgj5XNejT742sRRLfDscaoHoTFN6gGrB4hHQLdo24Xx5EWtMUocJcZrq",
  "key17": "4M22sdYL83vVaEZPkhMtRV5mTPueUwBy6yJu1XWSkm9LBi18gGt1m5qhZjZCjKCp5B714sFeM4aBSLfZvQR3k5cu",
  "key18": "4wZQYL2vBbfJU2xoxyC1Jh1c5EUYQ5beh4zczUp7ymF1M67UwnnxcCAtVTi7kc4pAKF26pqyN3vDazyv7u89Ewpp",
  "key19": "3HM3ruvGhnzwaer9yjJmkQnpbHFCwL4jCASPaGt8XHeoSvpRDJwCr1WXPJ1WeeeL8CHrqEytXvotaDzQyKVQamVq",
  "key20": "3Fs2Nw1VL6wDtMoG7wdLiNhZChYP9mYmnthGNnftHH3rMzp8mm86AFReT9tqvaJjqQudBFxM8MJiHQu4K7tebSfU",
  "key21": "Ndj9yoHtiM9vwJat1nJur4jY3bUWifEQAX6BZUvJzBgxt1114jj7UpSMGUbUKdKqnbPr9Xg7m3snfgxbhMUivKR",
  "key22": "5xSaMwavXepZpHtH2bziufHRTo7mZMTjEjoMyxgbywfLEt77D4YUJtSt287TbCeDEdotEoRW7eXPWXMeJsjo86bR",
  "key23": "4BPuDDaRrG6YThah6dqf2PZDszwRva2mtAx1j5epY53s5MuBS3qEqfVv1w4deJ641vLHbsnSQrePEtDeVPZHYpFM",
  "key24": "4hvgaa5byVKfT2PKTmChsudNPQYyJkFNHAF811J3MTbWFUBPEg7sV5NzJT2okR3o3jxpmB5Mf6oSAWiy7Q1K9H9V",
  "key25": "22DgpkWx9GesAHgLn7BnU5uCSf8wSLSf4nRHCV1qyCinnMvCK27KmaYoPgEfPxRGrSBaFBAjA3LTMawBq8Ya5bd4",
  "key26": "5R7S4A9D9V61N9uLX7LsTRpkCMj21x9vVdEx4To827rLT7Vk2duqqNovEMyUHDDoyrxRdur6HVUsx9sA1iboAj1i",
  "key27": "4z6KnXPQJcSkYMQS499R2wQv6gC17Su7oufPNCwqsjdLXvFZs6T8MmAbrqKZhF8tdU9F1G3qYR4Jq5S3mX413vgb",
  "key28": "2CMDLSF7s87yzunScgvAcHdMp52AYNwtnPacNSrBf9gZdayDQJv7CxzH6Q2Tuj2jrivep2PYGNzEZLdpboN5wdEK",
  "key29": "3pcE8r18aq5TVAH3haQMVJzjNZFXB2T6MjPL4azGdoCkw2BTbgKsQWyMTLcCZHWDRPJQrdaonffeNfbez7r4bt5",
  "key30": "4R8CWvbF5KjPwk8RCBH9LCKjPtJonNqxwPiPkjTKPR7mUzcMPaiPrTpuNfrmgFvpaGmBqFeRryGWhP2iZvJhx9VV",
  "key31": "ideLievgV4itNzAtvaE4RSPjzk13WgWooYpyXB6Nkcy1K4hDEbiEsCqiYpBK89pwFXnZhZSHWaPT8SesVavGhzu",
  "key32": "3LkoHYfupD4A5brdLExZCxPLRpKyUb6m4Dk58QU1EtWLMRvmJpFzYKwXoLzHTiyGHaTxYkYnBU4ge7XawaB1cLbA",
  "key33": "5c3XhXFi4ECjeJWF6CbydTw6fWVRM1DxhfMXt9giBwsw9eiQV3KwdtmwMJ3wRhxUidLfyLyikSbtndX6SqxpyaRR",
  "key34": "4wXPbEz69iZSGJ2eAXJkVKuRKb2aotgpYFng8xncmP4SzYEcEm27rjpcH1Gg1LjFyGZN9DEKzaJY2fXYTdrNriPj",
  "key35": "41zX8CuMYtir8jfxgKVJdHai1V8qeFkbTPnG5MGyMk4ALVCEuzwxeNHpEVticED5mDF1QawT5w95t3fBTbVfXojq",
  "key36": "3QqjbUwmGxZtyFAksbjyo3qJU7qxNWsUVGknJ8KVFHvq8UZtbgnAdxDTKHuEwm35N4xrW6vnfHrVFpjFRS1d6grx",
  "key37": "BzaimHHBaNxobbvqW9WwT4sVXV9zZZ9KK8HsCBdj67JdWyvZH9pMRqR5i7aJft8s4WBBPfNA4R8E11Gm7i5SRBD",
  "key38": "4JGxnw6op6CzLU1325DNB2GPncKA79P9V3jG2fzreKCwK8Yn31SfbRF69PhLEvgXCF56B2obp17jBDiZd62K6HLB",
  "key39": "EqcKNJkxLY5WFB3rjFB5ToV7NschstrLHhKMbCygNN7Ej8yNhaRV7LzmWFbzLwmaPReX5LigqmKxs2bSBx8SfCJ",
  "key40": "2Ykbm8YSjB2wykKBGWBYd6itUTWesSKQQZyBpnySKaxcLqcpekHv1xe9Wx54Wp3XsQ7ajS2Cd9w6orZUz9hhPRZN",
  "key41": "5ZDT6msgk9fDVUp8Hqep6A7DAoi5LoAPoGVzYYw72H6k48JEkuWSiLoPztBJTaTpJML5EipXYRRFvEtDTt6UJr6Z",
  "key42": "LRtBV1WwfaK5feZLQY9WCqFxj1d8yZWF9bVuwFCNAExgmGePD6SzqsarQg6z3Z5AyFTbb8JzK6nVpB5uLbcTjj5",
  "key43": "5KyAuDbsEtuxGHnE1HABEi7DKvRMaCqAYviZXMdmvi537NyVVypMWTVCyad3p3QEVdE1i6z8SEhb3LCVUDXNCFSM"
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
