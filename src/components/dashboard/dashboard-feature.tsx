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
    "g5aFB128WsKMXdVxBrUpgjTDiaHvYBrN7JhEoNoa9ELAT6vFA4hhxCavptkATPmJ84EgLuZmssddJMtiHVbon6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnZPyjK4TRRUAXrDvvZfymaLm8W7VPSj4RV5V9D6sAMjyj6jUKD2EXEo7X3FFFyKhV5wVhaUHmdpW5M8kkgYQh5",
  "key1": "32wgZCsBwpxYkw6BUrhcDxq2y1C9T6DAn4FQ3dGqPDUc6f7rGjHNFG27yUKPyRZEh9UHXsguijZVZ5xfTXkeZuei",
  "key2": "goiP41vi8YtKx81a6vXJwz25YJVEVZaxuoDz5XsnGzqhffLUZ2WWvSvzkkiPJsnmabjEAtsSpKocJyDgMxFuvhw",
  "key3": "3TyVVX3VkwkAmhgrM3AaNrYBkRjeL6DSnanEX5k9z4uCEjKrobRu8ph8kE8NHZBpY2mj5E6JThC2dooPf4NY9Vye",
  "key4": "5XYUgCBK1yekz48GC5TjgM6iVgqvqjYcZj2qetzjGjKQu2bSWfbuCi9ShwW64mV8EaEbQ8scTvPk2djQoY7azakY",
  "key5": "41sWnJMk2yJj34FTVvyw6HjecV6Q9D8makxe8WGkzrnDHVTZRwE4yCzhW3UP2SgKscXEijpcybChW8XZhaTRwpjE",
  "key6": "2xxccnjAJB1fzGFWC4T2u5mEbUJZM8RMTDrYknnzfDy4ogPa9TgojGMfAwPM29Hq7iERggv8v9Vb8FujahrDxFRn",
  "key7": "4ueCz2vtWmZetBNnnuUMCN6kzeY2tfckHvcbTJH9GUQCSYm7MGduXceeCLSf4wo7wbLkJUiVj8BQH8eD2EF2vMFK",
  "key8": "5hobS6BeMhSo4qvSPmEGsRAS7WPECtVxAriSHXfCZiPvp988w3WXF5NtyRQLLkbrmNiaeZfBzYhJcj3KyNcbfSZs",
  "key9": "3UdzAywTv7TovWjBnxCzvJWy4RaqtkdkmBXyzCySzgWD8dEQKDfiVP4eM7XYmPX6QUBeJKD1XyFfUYDZqPX48meY",
  "key10": "2Mdw46mFcDw6r8Qiwfp4XKDDQnZNUEoB6og6XCWz7Kbft9sBDHXnrE4Uq6T3W6XqCeDapUcMY6azKrwHWjSHKfRi",
  "key11": "3K8HAYjXT1zVkznT1ca1z3rCbELvNgtoVEnRNTQMQC1XH4BhKch77zF4arxr5twsHhREgbbsYc4C6N2MHsCKbN1s",
  "key12": "3CSFehmau4eKiX3TaU3o47zn37zfkps1KLQ7F4DF4xihS1RYQ2cHNJrX2jycocpUePrEa532S6TGnm1aSN2qKedE",
  "key13": "3QwLRstfBvbAEFw7Dm4UJDWY3sZg7VV8Ud6FUo1ziCmbiEohaAznfcZ5rvS3d5TJcuX4yrALszJJJvZcFgfxuEkC",
  "key14": "3NMc27GAbSiBGuYgEC6rgFBwig4CdxT2T78j7ZRG4k9MvsuQTEucZ3Rh4agGyF86B1tG1tPJDoH9uFM3FjESB1de",
  "key15": "5ijbf5jQdpsXorC36ACKip2oX8Y3F3HpaetjJoTjaf4zBG8TSHJuRGYoqqwzjk1BTx6qRMfquMy24GPk5nM2cCEJ",
  "key16": "347YUSDjFvAjUip8wnv186GrBU9zCntDh7K5BkBbDLFsKDeTGgUAexWvtqQWju6zEiktNqSZTRLaHkmyXRQc1zQ9",
  "key17": "4WwDHHQb5tSS27iMWgKMj5ib5utmo4m2aBvzaTN3Gb7Cfs1cLT4h8jEWrmRH64EVdoJFuy64gZFvQnJtiY17zn9z",
  "key18": "5yD8VZCbE2js2MmiVFn7LL38VxX1vusdR7uu652uf2sGSxmdbKpAdjbGqxfwyjBLfs6f2D5Tm9yCkpy9HKbqLKyQ",
  "key19": "4LL7kMDE1w1trEc4EXgwZgP2GfBkNu5GhFimxxJbKofkQHCVS3JKbwzj4572En9Q3gPiVTXccviSJwy3tYG9EUoJ",
  "key20": "3Vz3igjHoLg6Wh2JWcCZuwUGDuLZqZ6xDzzj1egxYRWy85cGEzC6ftan4sF5R8RK5A3WkyDDtxPv9apKcmnY3dcK",
  "key21": "4PSr7u3kPSXFQheuMaXWkmTLHFJzcfm83y2PEbgHsccXBYJrfhHY8yEz9CPXvw54xEv47cm3nje3vTm9YBS6EnGa",
  "key22": "ahojiVrQQij4UqgBBVXgoK8R43yra2WKhWVaindg1ogeoXRndQJJBtUL4SFFJjBdgjYLUBYs42wcZaPvwWSLBCL",
  "key23": "4iE67Kyr4KnayY61Hic682XVXUTNqsY8MAAnxPiadCYoP7AYDoujjjMEp4gcEesBBJrNwXASvUifYwmTdFCS6R1S",
  "key24": "4aUqCdFbByJkX6ne4qtrpzZNJUzaNYetEhRiYHbFxiXF1NBSR86e1kHLFgd1T1Tor6cDEhuhUXKB8F5SXZJJ946K",
  "key25": "4hmqw6zt29yXD4gbusDeJ7uvmJiDj8XgZaPeHfEMqm2SDbr3DfFFVajXs96eiXnc9fGighZrVyUcAyQZ3bcgk66r",
  "key26": "tKEZC1gKxUWF9WccdbrFnuVKsQtGvcKXmcFcu4Fe6Wiwn8exnai6n56oJAFGEqP2ZwJPsvT5qG8AhpZnk6gqsh6",
  "key27": "2nwiL4fBj9iSDqnnXZZJwg3H2k2rnCVbqt8mU1is3gHYXV9A2aTikrKRL9irpH1hmjW3fnktdrf2xwFh2rvTzz2g",
  "key28": "2gZFKfanKE6w9Uzg3eoRfJ1GS1coeKtpr4KfJyHPPDT9e8m5o5LhSKiUJH7ZCQsAm6e4fKvrVKMfqa6V7xGy9P5k",
  "key29": "3rPG4VXNQNrRnfbnC8VdtrNMeeKTawN4qF29fHHag8BE25TVzryUgs7v5U93dCfp3hUeE5yxz1d2WY7LXhgDdTtk",
  "key30": "3UrBrQQXDK22MkSHWFfAcFGcBs57MLevH4jk4Jh4BDzNHne6UkJshaMx8HGEdcpD8BKciC7McJQneVQ588EbuLiP",
  "key31": "em9kFTWuKSkYiKmvuxKLn96SEir41YuysiukbmgHnNRWmRtmvWaR8yTEV2MsJNzbomX82yRp7iaVz4W1gJhjykn",
  "key32": "464TJkNLdvVJvWDSBxCkK5ixf3w6TmxqAEqKDU76cFDofUiJ5GSZgF9ndqjTp4Guzq7CARd7U1DtXf4bx7shssoY",
  "key33": "4bhJ8VdtE8BfuTkSrSMDcXuuUrtcGQByv8jDh4R62ERJz7aVse2YChLzKeLyhVo2ELNZswy5qCJkfr5VfpbCwHBa",
  "key34": "29eUN3URmwJYUrjkBTtfWrkSY5VGWcog7d4VmGqPiQiRFe817owUg2KAoCrbQN8ntQLyTHEbXEkFZpgzhGYqaCkw",
  "key35": "4TadvD5Ke6wLHitWNcUnoUiYj1VHmTBfJuFAjTfMAsXKdH3KNH8vPtqni9YFYeicm9toP1nT3mEwDzcHUjjixw3C",
  "key36": "5AKWJzia9ETBjP6SdaYDwLQ7NhqPtg4CvendHYdhMRAPgBKEWe26sGL5oKhCCk9vmBPBghYiYSzJEqik5Fs1B2g7",
  "key37": "3t1hRxxJ6GwUw4CMCaqtwopqY1kC5D7zi1PGRRYsfTrwEoknVWfoYg7VgUWgTdGxtLi9tj1ogjYw8iNmsHzUiJkP",
  "key38": "2kbPQQZwNCxU1YmaMauqGrrmTRob9cTbLRh15MRpwjxNgL3WyTYMq7WfJmAUiRExeLFKnGzLTRkbV1inJB8AGdcr"
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
