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
    "4sauM9ekJsBKwf76qa2GMELG2SrbtnjbdCVsHTa4Lcgfdvkra2wmDHxXW8wo8gMCKBTbHxe9bMhHC3dVTShQGGwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qwddot1AVnr1S3YUEZGiTetf7844WtEXBS1pTRStqoVQ4Tp35cvkxsxypJo9ebC25KzLJpMuidwuKXetDEoVEQz",
  "key1": "UYA1fNAW5Z9GWTpSv84p61PYS6qJaDZdwik6XqJ1BLLJG45vgkqmgfCAXw5jWdjLkMNbKBJJPGnNjaRWTzKmLpZ",
  "key2": "Kq3aNEaNCNAdLwtHqshB1ZRiko9kFTS1Gmh4bpaMNSLXVARY9iFhJmz1ysTzTMxMcJgKTKvd4Q5e6anzQQANNhZ",
  "key3": "3MQbHjMV4BD9qBMeDRZ1jLsMjSehDYp43cVFv9eNNZ8JHxeYAMVsDq6fMTb1yPVxpzUUpXjNdcsYQxSPc1P5qYeA",
  "key4": "4ZYGGDTEVBMJgyGita5SjbTrhb7esT66qTiWryzsvQTmLbza5jgEaxTpeKNWVzyLswZMJiMmXWMTFLRpGU77R7Ft",
  "key5": "5rDQqFcRnpM6zfhcp7Jq6nuzTimU9T4xiogaHqVVVi1FVZ7JCNZydU8HpBjFQp91UQT5NCCH8neypcsAeKa4yS3W",
  "key6": "5DDPma6W1qEdZo54E4xj8ArKteposPA646TrE6ndoexj13LUAL83z1J99wVBdmNFPPy8V1qV8sSuHvWW5t2RjqtX",
  "key7": "3K6Rq1KebQzH3vCtYkxnGrJWVXq9kfKckdb1YshrtiLZZNvSUFxJgrReJmwxAAxujo4jgqQiY7tb6AEQP4i6Bvbi",
  "key8": "5VF13xseoB5d3H7mGTxQG4CHY7pWhTijc1JeSRENaTRc1SfbV5zmdP2abYAcfiU6ZpttEJ7kXNUkvTvbRb3Ttf9z",
  "key9": "5bisqMf8ygQS4xhcm37rW6cvLqQ79G9MQq69772wRgcMXsEjtpzBagkhYGfuAjBkvL7DHnKA3kWjBXx1X4YMQjQz",
  "key10": "4dK6fY6BNhTuC27Wz3B3htqEYGP5wrRSDTgY8fqTkp6kmyQcb3LtGB1rQ6k59zBpGo5oU4z9HPaA8eMUy9eMUgvX",
  "key11": "3JpPctiSQRMYi54C5P7j1vDgkG7cPKtd3CYZemKZ26rUNcQdN1JYikzF7uMoZhGEppiEjkxhXpJcurpukXE77Ujf",
  "key12": "2oXDxoZ1XKHzbRSADfLckDRZGmx77V3M2ec3PaHLi42m72jB4qgEtQXugSYpBZ3J2NbSdegKKfoM4yc9Vcr7kszo",
  "key13": "4rYas7bRx4LxbcaEnpLtyqseuAkvWogEdTQ4DyrKshXmhzzFvAztBExjKtEtDDZJfCFS9ev8hWkcnCfaKrcrcKiM",
  "key14": "2N3LCRT8HNFGHarPWLcSfpW7dy7DzJ9SzWmiVNmbFfvT8E1Q8y73FB98gD7zF34sBsJkkBCBRyPwh8FqM1twwuVa",
  "key15": "3F1FqZZURPJT8Yp95GfZoivGZ2LnZp29wsjYeTA3uy3qt88DrWiiEAkkJqJ2tNivqu2wcsP66MYxZjNXJA6x67gf",
  "key16": "2tvP47ZwQA5LNkSGV526M3xs8zPaXErmaL1PvTiT77WHKupwwzbA7DPLxf9J58CE51rv9YMgP8woz58anZ3N7gFv",
  "key17": "4abDbwdZYRvoiQADtWhfkHdydd3XRiTBwwztTJBWGs4pnjJC5dXZRe1d9itEfg6VkqyRpc8eaTVePYKE3H4uxLaX",
  "key18": "3hWiF27Jy44mz4ZAghcAWyMAmxxCesd3fy2KxQDWskhsZ2fcxXePJUenxi1aKZTF2HD7MfmB98qYffECd1purKph",
  "key19": "5NWNexa9s8BQvwWStE9vhJcjdERbRrfkCa7Z9SGxjvugWCHvy7KJQfqdam8uJgtUznuA9NFNmKr93x93naXBGCwc",
  "key20": "2ZocanqBgdmBET2UUeGkoD6hyNqMX5nMxamyuCBJcVzLXnBPkY7X2vWHYGLxCTNZsf4p29GGi39uuKuDQJKa5VZE",
  "key21": "ytysDzx6p77ExTEDK2siWjLBQUbhnb5HtZRxFKLeX4KpieebNhfqwSgTBdA9iwBWSQyy5ZdU4foJccdUez5DyqT",
  "key22": "9Z3KZATpTegPSF1hENmeBH4BpsiA2qUmikcxyB6kc2nY4VxHG2jbodygdntDVb2U8SoauWPwxuV9VktgmRSYwrW",
  "key23": "5chdBdRZwqPN526CAxsewNuMj6uAuDgoj3iuDtzyDakmDNVswxhJXsJJHc1334gUZsBR8T2k2UrW1r2rkio6sRNw",
  "key24": "3ofPuP7CSQmtoe8zZyxwQLdYLaePi7ENsuxtLmvgw7azkcS7eqyPoZ59DWEtQsdaksWPV4PYQZkLjNgQFVkWEobv",
  "key25": "5p8L9ZnsSzBn451GJMubWrPLTfHAEbFwgqjinWyr4E1Q5VMY444wV9FCduKSU1oVxyHoq7aXHiz7h56mbUUZMoFN",
  "key26": "62GB4MaHjZGoUW5v5zwBD9cFevK1z523ZNcVwZtmSgZ1FG16buJWqC17dpjJdcfFJiR4y9U9WzWVXMyh1VfQf9fZ",
  "key27": "5LJE8zcGTikVVU5LKeX161T74py4JeaNjBknZuMWXr8ypGJH19Gq1iMMhmMzegSeWJkXq3vMjNBiJNWL1PQuLjck",
  "key28": "3PY5EM9qRuL6FNBp67fSHhWj7KhYp4FC8oKL8oVGRdxvp5Q9TR9B3vQ2P8xnY1PL1KpkjAn2aGG5GP7We5XW89Cw",
  "key29": "CFNTZ6pQpqLuNwg3cUbUPesh47vuUC7BujYLtAyNKmpJ6uVNPnQuXLSRptwGWqfQhWY4WujFFLJJufNcJ3CwihR",
  "key30": "4uKB3JrAH74K7YZbtriukPPMzcJMkitXcDbG5kcQFoXuLLzxZF3J2ZqNnRWoxDSXkjkSDgykVcwzsP9FACoyn4uZ",
  "key31": "24zrjCe6tJ1PMtPCsDL9Wih6yGeeeBVjaKxBs6QWxgz2qr2p2zbxeq39ZP2d71NVsKLUNskSEWEG2ETNGVus5f4P",
  "key32": "cC8j1DbfVgmABAFwQDFfbDiJeTk3RLyT8Xa1bR6xFmSyjiLMbb6RL7z5NgkWi7k1xBukRn4sVgn94HjFcpsGo6J",
  "key33": "5HSFE6qBu7sNq8DCXhhnYdC6oVu7s84NbzJpZAyBBbhabbqYusSJwEAuKzwvpbkbTz6kSXzaexf8gXA1KJxRouPn",
  "key34": "4eyme751XtAyPTVoivGdSGuM4KJksznqvzJTiwSMZCc5jUHDnGFJaGgqxw2zh8HirbbLs7nLnLfzG24PzYajfW1s",
  "key35": "3upvcUHB9ab5rwmhJck194L44VYxi89BVYbW9p7VJ6Ufgb6SRi9Z85n2hQhCx11mE9M6yyb1aVgzaCUCk9bcFAVD",
  "key36": "43wSb16VepXXjPMgjxWX16jXsqrLQTDDTFYsVbQQLH1RkQ3iXYn9LPnRVS2vavxRgDtaJh4ESZBFPfuymrrCT24W",
  "key37": "5uQqrq42X2x2foLbid1M1t3EBoLvdV6S7FasTdu9wmqaiiS6ozdjyG3AnSyCZiAnUGvj8Nehha1ZktvV1rBuUzWJ",
  "key38": "3GjgijoQG99y1AHKHdGSGxi7yCvjM1jDkF81jxsCbnUDENUek21dUd6tya3rvSYdFsrgGeUR2qhGAjs379grqdF6",
  "key39": "47VjN9yQU9gN7RRjkuWLLdosqX3QUBNTdbpnj4gqTpVfjo8FrxXbbvce3LAqbosSXu3asyzYuZasVGmpASBfPM9u",
  "key40": "Mg98ffNtDodPp6YwNNeuCRTPA7LJcfyH2rvb3vp2851VoEZFNXoqUDrWx62wa5BcYkzEDCueKTaiwkFVLFYsSAU",
  "key41": "3mAh8HfdY1Gxy9QY4JDHWfmjYG94PmB8fNspAGsB1w2YM2KUVmqXzP4hugBYksXKJ1oLpZCUweqTE8crpwrcjf3G",
  "key42": "58tv7kLdDf7NC7AjNJv1nekQjhCahaS7H8LLYCypLYAPyqGZsdeU3q7BGrX9X1MiDEaATtss5T3Xgz4Bk6va3pnJ",
  "key43": "46SbNUUwLZvHJ9X33DLjGicVmo4CzrTQbWrS6v2dzTqRs1GjZyzVFyBfvLYGwYbMni453QiaGMk7K2iLFwyPmibt",
  "key44": "wH7fbdZVzZ5TyqxzME3wfBt7ErYwKvj2b8gyQAetcwENgshCsTBYFwnuciR9Ay8FEkxwgsAXpS7c8658Z7bB8Ri"
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
