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
    "4X7pz4aT2tBzvi4fv48uPwfvQMRPhJjsSvyPJSKmhxDUfpSwEqgRVNWDzUYayRZhJ1DbDF6PmVyRFgRgVAndQww5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xcb4LTXFJbkcXC7Kr9r8hu9Ba1SC19X2TDc7t77W6C9SE2BZnNB9MR1AFjVgcu4Trpr62oMwbLKDZHR5yDyQ6P",
  "key1": "3HrBhe1jX5FToBm4MW3cm5mHjSzBoxyDiKeqJX5e9awBiNqcq5ukotD55niHKm79GE2AchYC2gMJt3PKKhpbxyWm",
  "key2": "2sauBzja6afdAJMrHSsTisAkJaqLEnzRcUkd9fWjtnZx28bZ3Q4WWnCFGW4BJtqjWeL1CANX7cKgNPFVMsZ8eM7w",
  "key3": "D6wGuYgTJQKUebGm7hgTMYZtmSmqzQ8yhF346x9peKXNg8yGK4aRxb3FmjGztoGb2XpxioYyTo6upXq7xKHPYrN",
  "key4": "mzo65MjJ694pUTgRuhF2mg6g2T34fncA94dwdf6iVGkdPUbN8KHh6XcDa635b7jrEisEgwDRfci33zKhk7ENUr1",
  "key5": "2yMMHiqJ1SJiNbcD1S3iSKamatDJrJB594boQ3oocKxn2if8fJHWnWnxRjZyncuAJCRhnDfuNbPaSQqGZD6FtbCR",
  "key6": "5UTa2ZTN6bSSWLk4aiR5Hr5xuaxnkfGagTm6vo6X5RLm8PRoTbuRGj1fBn8e6f6vCZQYKJCEMoVK3asEpqLQEYjR",
  "key7": "4k2AX4EB6x9NZE8RVLGau9eVcbEw6DWA6aNo7jg93RmDNTDun38x2yk8bCZnvGXd2vyTeNenTGWTcKdaEyhBGWY2",
  "key8": "2DktHo5BgbFtSYdiyUhQx27RVj355e2hLpsJE24DBZ7JykYi1KKrnsrmC56VFjpLcJEdBGkSUuLnSaGanipbwTa2",
  "key9": "iPDp7qzV6JGnPmLvaHJ9YyZWZoAvFvMmMx7piMsezKXw4RET1CzG2YhVgDjdeL9q7HMGsJBarjADV5EmEEttSWk",
  "key10": "4jbfMi1E7n4wCFE9v2XC8RNgRmFGwNLs3zVGxdxB1ESPYDxGkjFg6MLsQnpMZcMPuTDjzjdSA5pUF9vEo69vqyjB",
  "key11": "3ZHF6B6PLFuPpKGjccsu7kZ8BDFKbX6GBiuqmfu6ZJG845kR75xSvSavDqLFPJ5zgXozVwKJ7f7ZnTGT51tCpRVD",
  "key12": "24vvsZhsad9Hd2rhXmxgdcBWg1vAzyzAyE4pmdRcf7xiWLL96HkxuKN3SMzWmukVwTZ7vQN878swZoXHysGoMDbk",
  "key13": "3f5vAyT2V6Yiut5uLWN7SaYsK1uyyUyah34YFi21ep3y2BxtLgGWzGP9f6hSCuLM7eDddd3vZj3aMXiT9CyBpHCV",
  "key14": "5xFXqurqtUKySERdek5DynWB7EPv72UPWADb92WAfytbY7CnZLfqTAbkRPUmMvssRt1NcD4Xyh4hnT1yZGAKUqoR",
  "key15": "2vhv3fmbxwErJ85W9dZvofjtQP54qiqq5z8fqu6vYVKywuCv5rzAjymG619KoMAzHF1x1GGhSeqVigu3urHjoWA7",
  "key16": "w4S8qHngmeJtn45hh8n1SojwdvKg7phLxZyuRBNarfUqudwq9fsaQzDDjr2KxgrSZNKNibU8Hs6dDxJL5yuBLbv",
  "key17": "4i2bGpWjsWXFkmNvrcxC6fTvHwjUBfdkPuChnL6fXYfmnZr4kQPNxCMMnmY86yLPJiQu3jgDuwqSPgGtxbKJ4Ty2",
  "key18": "3NFkuok3gaFhCXimZwmqJM4RQiaHPHhoBnURoRp3XACFToMvNjHppPm7ohV7LYPckmUEwyLJJuAQH4VBJ54A4aLL",
  "key19": "y76DLLhjjTVmD9KyaSLKLuVEjfEd1S4e9BEe9jF9UKav237nc1HcHoCbNnZVLXE2zc1x88vMxHvDxLdfSzKi77T",
  "key20": "489mYMvo2zNnHuwg6seL7QKd4jPTBd4sihTF8rRHPRGxbb65E53AJeYswm1m2FxvCHcMEQAgomhFht9YPBCsf1z4",
  "key21": "5skjhHn19iL2FMvRKwW4f3sTCWZvucJcVLPutEoP22xNKNtf6SKXfNkE1BDGvA6czjdVcyTsaAUGA2UwbrBWcozH",
  "key22": "2kxHtZqwAaEWYuNV3Ubk5o51vdeQY6sAVY4kXgEq9aH8xzRFRU89zFEhSA5DZkDmQKcaaVDoVjFGBfnkAswYN3W3",
  "key23": "5dXds2xKHmeUQVbgrEHQg4U5ZmXdsX5qaUYX6TPMQSnqFcPectjeHDVeBAzV1dYxWoBGzGWaHeJ21WDhftq773kN",
  "key24": "3su9wW3uCu48y9vhFWxS3SbUBarKgrY8TvaqF1K7mzDFAaqmH6cb3cGYu3QiS9DwQ8hUMMiJAhke2DwLrzcyyfbK",
  "key25": "2yMEiq8PbhYGU6oH4RhBq9CMkAKqbfUX1XL1QHYoAzykdamT6GCduygVsLruV9JSBzzgGxJpd566ez4L9jMveKu9",
  "key26": "2g64PVXR5rfnAKckXVb7drXRoZRbP8sqbjFCuUkLX8BjCs5UHgvYJt8T9fZ86w7xHwdz2ZHg4yHKRdn13RrPihqd",
  "key27": "5Yc43tPwnNiAjuKVx3h8P1y6Fm9VvmV7oVtM3obu1WrokJLpQj9RsYo1m64sDk1dYSyLFoMco9VcLSKF34fb6w3K",
  "key28": "3m9zQuZui79sTKp6Hg2gEVMxTEpLQbgbHsjb7QpGoj2mv2as8divRwsMzNoEvvjNhW4Tieo4jLgsxLuU1dGnRCwe",
  "key29": "2niBF97q9AHsjxUnTg8Jtk4kWnDX64p26nnuXBgdD1jpH92YVCZf3HkrScj3z8C5kvufB8knHiMmuASYy45arv8c",
  "key30": "5uNdxafzj5jiMbRw9DgFieEzSsTaUDN6E4M19raXn37MQgmhFRVeTZCQ2VyrCWue3mpE1EtktLrZULX1N2pTRZ6t",
  "key31": "2e7DDdqju2gTRKV2nivQTswLgpc238C6qxFVdYRPJWkmYeAWshgqfAuqH2PcYZYzw5rwhKSU92Z3YnyzrYJuMEtW",
  "key32": "4yEeydXNESRrCaqTw2s5HnfwrJRpdKy8YyBvzHT36qu8yyUSdV3E4cw6JTRppzE48X42mK769ig5TYAerf1kwXCu",
  "key33": "63Si1zhU6QtdxNEDCP14JWip2sn6uNi2L1FtHtamwmZVeSYWPwgPoASpzWBBtX9A4RiDe4zhsRtYYDkgnvYp5687",
  "key34": "5gyeGPNuufoc3KUEDJqNHbZ63ayRNQ5yzs67hDCG8YZoGAyZk7V57zwnQZ4CLiujf9d5x8ZkkDkJRw6UhoQCGE6o",
  "key35": "4Ja49gdukLMHYcXKsnQCQhog3WpRAha3VULBNbYQQKaz1LXTQ3hm6dqk9H2jjb4GWmtwgE6Ae9A6DcNcu8sVDNbp",
  "key36": "bnbjhZ7BsTg5PkDsLYoeRDQArUX54EgpJx3VGzqHdJURBhKZ3uW2pVzY1TNfkAfUeu5QNejoRCn2aVHgBtgCpPh",
  "key37": "5tEz251jBR8Le4PPFp2sYK24cnrsGd1dqsiCg1EWdVLcTZpNejJ1qBKAxYSXpv4aopqyYTAT2tKZwM9wfQUMyjps",
  "key38": "3mHLd2SStjAeXXHgDi914dNqBW7QXyekpcLSo2RzcD6zYGE2xFs7spBbYf5vjAqLTGyF7b1momshkmFA5oR5A6wQ",
  "key39": "b5vBc7XW3wBMPYRSY2aigpB6fN7nmN1xFz1qZpu2E3dqqsdTzHmQACZ1osLwdewk4XsnhAW8sgEbo5UNJgx8i4G",
  "key40": "3EPoNsqPMbt2K5dnVpE2uXMY4Rkf9jt3ycVqB4bzrFsS4cwDuzDW36ufp7CYnFGnewpMsMjMJ4wSNucKqwb5qkLe",
  "key41": "3oLo8prCkmtKx9ECQnvgXNWE6SuChJzaW6up2JLERf5EF55uoYxFkFuwKVdQ4mLitqUzfd8fZisjC4NQNfubWHHK",
  "key42": "5uJtnuxHhiSCXjnhfavqzgrD1iFgdGGGPASjdAPJLpmBpJkuNRaKGmDKXofMTArmcf3at9eiYe72MtJNbccBdUuN",
  "key43": "2xvzYA2zsGTvDQAYVMcYuoUno6jgaNGmzBwtxygBE3jZjzRQYdStuhb4ASmNgNSU9QPQhTQXHKgF8c4fSe17QByL",
  "key44": "3z9XkBq5y2LDrWfrZnjWJMrbH1az6MoTXALK9RhT5KuFwfe9CBLtnchMD2NBvc2zmbAgq63WeCU9bsDJgkt5KW9H",
  "key45": "kVfcfkhMEfv9ptjhZYPxHQVZn8WPSmwZitEjQrps3gfPAFeASdsGW6e7eEsV1iguwzVWp1YcXLKWGzcnEhsRBz8",
  "key46": "3qkn5uonMNt2r4AEPcYdsKwBrUmA5ipgPHSYUuUmEskQKh1gso4bF7sQZu6of9R4NW4a2tCUNfqadyayTpdCqNAn",
  "key47": "1236YqsQLsyDPoLJsLqhngn4kohW4j8j7dkht3uWGtPpc91oteXffiKVkD6UACztmoTThnkwd1JnGEhS7PHXZ7wp",
  "key48": "2onQhVmizaDQ9P2ytrmxKEJW27HnngWwZeiDZQNqWsf7vNdyVp9Sxbze9ud24q4cAd5mMdfFeHvDGjWtAbd9eeHQ"
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
