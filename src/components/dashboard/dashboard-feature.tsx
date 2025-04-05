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
    "3N7gbmyyDmLNfWyU6Pjwb8wFb85yzUdAHcCNwjQHCLdR6azPeiHbVsuA5UDNF7mEeS2s25HGM1GSriLGz44S7yFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51NDYT4jwSahbYeKFdH5ecSENJwD8o8jmxLRkfZ51g7Fp5SbV7UdJe5WcuQkgzQNn5yAW7JDvasgTy6SJ3ezVnku",
  "key1": "2ewR2Hf6jfTfNCSqu1s8uvaSQePr3PdWsT9njsKRUvvTdhbKoQxtJc6Qx9D253eYUDQEn1TzPNAZaBStJmJt3M3G",
  "key2": "QtXVcp8ieKdcZbsqV9E29cDiM1i92oL75qCMBabhh8t3KLg1x2te3CFUquLQ2fQmaZoJae7NGB2fUCum6d8bBFe",
  "key3": "5rX964GoqgbyJZUcY1rJ4XtLzLpt6mVvR34YC331213Ate7adrdL8Pn5q81mfDJN3zVxrG6b5CXtaEkBz7Fks1Pa",
  "key4": "24JJeREmqa19fJZRDnkmMJQSarBmpfsQuv4y1MCEuT9D4dCR4ag9KJaB7p3Zvy5mqbSiRqnAMStXPHek2R6NzbRF",
  "key5": "5Ci1j1qwdxevSJMivsiaM2jRqgcCZeHUNTwYsbjVbihVWG5rWTX52C32kZcKaeVYtiCDfnN4XRafbHPucpxVfZTv",
  "key6": "2ekzHZL66WADvQWa1aSnqx1FZRn86Gx2Q9Y6YWhsp9WjQDhpdxjQ1upNvZkiTdSsv9wWTvX5F8vfDqPyybbWyouj",
  "key7": "2yhWso7v7FGcxbUmUeiL7NTT8Mkc3FyxDjzsSymsNcK7t5Ma7AJgX61cW78Eu2K96WEAyxaeSKPUaY9siFLfFPui",
  "key8": "4gGabz1QMRdrA5g8E9Z8WWn51wLweeEAbsg3E9KepkUQmmFHvTq4eZH594YYDef7AgRJAzN5Myp52e4fvXcQ7a8w",
  "key9": "5DAUHjiZB97benuEDfuEvw5F5pzvx4rUhHuu58NAMSHbxKDYq9sSnqrB5HirhfE9LSWEMPHeCYYNac36cFQWU1Xf",
  "key10": "3z11JZbdadHSMX9QZ9G4dYcpLiSj7kskzYzATqXzdeYmBw8uPNfyb4arjDyJw87XhXzwBvyChAktV2qMxT6z6XND",
  "key11": "2PbRYJv5an1AbmE6JnPKjmKGzAiQkcbNrDV3grSKMJFmg9XimkXq8HTMicDD9H2USmbDQT6iAqEFYBAWCRX32xFb",
  "key12": "2SoPoGpzuaAA2bk89FbAgcrDcdE67xpPH1sG3bhQykLFZepS8J31xG29yLHzozfsqhrWmoAEQ3zZh8S7Eag39bcf",
  "key13": "2QPt3rrCMw3qA9jbwAg9TDmMiF8eb6aFvY79cnG8TTvzRPLk68haTv31gfbk2fLKMociixLXmn4cNLp21VB6TXJQ",
  "key14": "3B5mTd7MeFKKBz4zUUcLcupzYJSbgQ7hYicQbGpzY19q7xL7hQJApgD7BGCAfXnLeiBQdULFwkspr7YXe4dFx2D5",
  "key15": "2GJcFuXXLe54Yj3dd19GJQMoGcgP2RmCbi7LqFC4wdupeKgFpWpPezrTqeE8Z2wpkk1DyZ4TdSgEPVsFPTqgUeJo",
  "key16": "394eTMeN1wE3mmbVX7GcMceKCmWA92gaNrSpyKL1VqL2cZtMBfVa2yvTYoStePFZeBJLvHw8h82j4uUazXd4nTCZ",
  "key17": "5QQ2nJbs7SyzjJtVKjxzZ8TjXGmwu2sBc5KWycXokEdQW6mkyNooLqit1Bk6qatw3dnYMzAYrGhVLYYypK1HvQKL",
  "key18": "67CnheUmFNy7sNoPJbF7FLUiAr52eC3dzkCANrJGmMUrK3Tc59Hp5WVnWcV8HHa6DAojtz5NmHtHMFxEVfwd35iZ",
  "key19": "3DRcX4CV5VtMWR946LeDwffG4KMUYKturgkexaiY2bV2YHQYAz7MqQdjkkxDviopQChfezgC4rYr8PnhdXfTtRrK",
  "key20": "JSyGeVrn1MexAGm5SzRyRLtS1iFbuzVCUGnsZa4VYjkc8DLFqtwRDWCyxsezE8wHiLXRfYRuiNSwwRBCfnqn37b",
  "key21": "2qiam4wJCt9J2bZSGJPVwLYxB1hnEFoEfkxqkf6S2Xdc7A2JnnkrXAXHcjPH7DXrg3Duq11pQGCwasXjbfdRNRxU",
  "key22": "3pz9Kduy6takxKa7Lkuqf3a1TkZyPRxm7fhRKmouuodKKNGbnkqxSshEqSF2wYcctFjtL4Cp3BXyLqQvzuMb9Q2a",
  "key23": "3oXZzyzEF7W1EyPqnq8LTs2akHMm5ueAihRc85iU4iY4a24dXZm54wsN1HVNNRTRboLK9AKKAYk6jzQ7zNS4Uffu",
  "key24": "3cACGX7cyhfVN766w61sFiGJNvUeZHZZ9Ga93LftUvw2Y3NCYzhKLSNFTVWh8TzFRaXfUKTWdVgQC7eygs2iQcrS",
  "key25": "5UWZaqDvr2kxoWqDmeQmkCgvySoWkN7T72XvP5D45jcQfAFiYq9TwbD5xTX9ExHaN8uG5ywoKAeSnkkXXhH5cHDH",
  "key26": "yfHTUJQaUu3U1Au5EVPf3aPpmBEFrnG5ThQ5V7h6qHiAJENY2A8WDx8t2Sj75MG41jKTsPk7nGTxE2VX51ynDR7",
  "key27": "24oKh2G2ct3VeujZdeiwcQS9d2aaZGHgQ7dZvwsy6aM7a9oT72pDaHvxnNAspWhfEC8UTfFjAVhrJZT3g3beV6go",
  "key28": "o5VWHcExvWRgbcv2So37RVsysuhgjQ6ssmsU7M6SGPJwUxEEtWFWhWjpTf2RZ2MRSPUeKpRGtwju2aYZPymGeQb",
  "key29": "38QvCR3iCRSbpMrPVRzLh9YA79BSD1R36n1geehrTh1G8VzJDswe83FfxiSNSPacMMcJm8n5vLgLyiKWfYswvrYQ",
  "key30": "2UyD9A2onMkbKC53dXPybkfp8bkFRXHAkvCHLoNCD5eNMesV6TxtHqqgkVbD5Br6KktTURvmXzE94XqZ56gNKoVL",
  "key31": "3puUvaZcK1ZQ6JdyZkugLEyUyD4zusZXoytCpc324xWE7s9pfFRRLd8nznw4YftKBYiKGG5vfPfFPihN9KcfbaAm",
  "key32": "2aewtn22xJDBEYQHr2u2iVnaG66G5XruVg2ihRnyPkoeQjbZ3L5bAfovHD1wMTXK8CLKtPb7TWG5jKTJCNwuMmTa",
  "key33": "2wMVn3mii3quuLhjSBN4xShCnykASDKzpTaonz4bNPNmXm1xJzeEJYnEc5W9wV4Fv3A87EH3nhUJ3SWYM4XQX65a",
  "key34": "5EVXjQgRUTNajcGKursTRxeWVHxasrDc9pmwEegekb75abUKsW24wDrDAC2TS1gWWKjXEQ6MkoV7orsrCFnLs5fy",
  "key35": "2fNFbeiCg2Xppo2Q8cBAufpRSKjLJr1LwiMLgy3SVgfEpbnUvv45MCSgn9VW8s9HKDXkXJWZxYRZq4Xu6i21zxQB",
  "key36": "4vLZsGgVbbYbBpBNPK746HqLAXb4BRzFsRtVX4r9rVAEr3jt8nJMioMajRqHYHZFqqtZ7cyBGE7EkK4beRUaVEbq",
  "key37": "2CuJggHJdaUBpTDrZ7NRjs6XqavMwEn4DVxWNzysHhRNRh2EWfmBQ9s8U83UHADU7XpYKMRi5ehJpvQKhLSjHNo8",
  "key38": "5q4m3oafCzMPxbhuc4aA9MC7WiUz2uB4hwgTDNmEGrApLPBbHjKA56h7JW78MqjRRvh2PY9hyVkSXfeVP4dFuAVx",
  "key39": "59EsBgBAPSNZD197X7WMmVnRkZ1nAJ8Tna7AngwiFSWPbPg2WLHPPoAZzaRycZePiSe5rym7cXpsB7vfqshn1boc",
  "key40": "4rh1B1EPfjuYtrdL7J4f3QbNY4RD741dQBDx1byxDjKr7mtJX6pvLRa8u3F6b3JxkvUuy3DC4K62f6apCkv27oi7",
  "key41": "2kCtu9cjopBWCXbNySVKGBQpELMomLRK3kuubf1EYpEpV5QadT2uqubiyqTZxQQcvLgfgiuYqre3TcN76tmmqADe",
  "key42": "5n4rYBCf2Pv4DKjsBQzeBEb29vXtKVjsio9Ra4YohPYprnC39WBUg4mp42Hert7BNyMWNUszwhF1quFgdiKsf63b",
  "key43": "4XYaZCygVJ9DeA7PikRs71htyL5kVTNv5a7KcVfKFUuBw4njM39GAbiUhJsuhLLNPbYUSrLiLXV6HabRMhiZemG",
  "key44": "5r87Zg5UpSn4ja6uNccXyLxFagNfEHp1mDxGXqfJPdCqteDQFGMdW3VofetXUpwrSNehTWg54ENhNN6D8u9sUrMo",
  "key45": "5VWVH5YBR7PWVqPET8NLz2cWkemB4RvgYx1hn4w6YxKHGVCkQYSoKW9y4Boo5CgHm5QLkj2uakWUgYzDu6jc18FJ",
  "key46": "2LFL4zLWTnVzkESNGeeAQpXB4471s2WVLTHT48Y1KyBynoixEgJUfzqaQxkiJKLkvF6q7ji9voZA5GG4i7R1iB2S",
  "key47": "4T8nVRsmFiwVksRDFK7pbvjXE8nAjxZJL1iPyvD3zESsoTU7z5iFRSY8a3dtbHbetfENcouHHLfhye9Mk1nkid6h",
  "key48": "4be8JSQa2AaQQ7VJMwvtdcbYSM4Mjdrf8VFBU8Han2tHN9Sc3Ap7tDyMyZKK7BEDDJgnrKGhbnBjw1PGfJksrafy"
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
