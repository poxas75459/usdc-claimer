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
    "5sNG4aQQCswb7QPamJEPBw3zt2yuaB3Js498PAnWMHWV8DfPNxst5ErG1sta1q8UokVBWT3DeysCt9DwB3merRBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jTThnRwh6haEUYdV9aQFiVdutTKyXR635htaa4kps63Px8zm9Edtj7xdc39fcxj3N6VXEtXXhg864RyRCsTeoRp",
  "key1": "VJ7ZZhhbVyPhiZw4azHegXTVPTnfMH1B4dQRGtjourwL16TPXMEb3ai3mxiJm6n3R8WZLyWVxWLfW3xoHpLJu67",
  "key2": "5rJikLbF5k93nymGkoXpuEdXCJHDeQ9Bun6vsuEsTcAP4UoR1PEXhpy77YaLwA3e2GwZmGibQSkZmoDSvquM73j6",
  "key3": "4JPYCBx5bkdjBzXT42RXHMFYHD3j8W1VM1KnLGRNTPufF3vRbdBvbQNcbDPoBYgn2cRhjFVCYQFfzfDKUJZC4si8",
  "key4": "3ensPMCCzgcZwzs47w6BQFwGFNXiBuGthdTCa59ChPaatXp3KTcJPmeZyTtdg7urU2Dned5EKs5TwejvbhZMb5fE",
  "key5": "4CD2289YWkmAxAEfHSz7dHvzH7fwQnmKvP9kcN8kz9WLpE4z4pt4WPSJ91jAFL6LagS6ugwCeDd8MWiWKjTwrWKu",
  "key6": "3JUSyVz4gTxcSKGUa2B4TYESCHRKEsNSbysJ7W9Lr3Tbx9gP1VVLQQHPHYMChCLKbjifoMMgb5wnAkfCvd5eJQxy",
  "key7": "4UxziyjWMTanQJCphLSnzTeFeX3zWmgEuUcSUndJxrmECPS7EYRsgmWfjNP11SsMCiXwqhwNvnDwSr7ARADfvVrB",
  "key8": "nwYjz8rUgCT7JGy5eQk6aju1oE1kdQmfZegYHFbQbjNCT4iEA4yR6bid9nvTzAzLBztE8ggddydMQZAdXRVS38A",
  "key9": "2SjqbikbLTuN9fHGVGviHWN5VT7KoP3z2XUcaYQdNincE6vDHFC7Dcq9G7usjoYhd94aazh9kLyXMWKjtBs3ynJn",
  "key10": "s2cH9weadVxtbrGzpw4FUMAeKWJVqfvz87DXBM9a9JWxTjCCMnhkYFxBzXnjaRdiUCkLmtXhDsYUgg7SE1Sqhfv",
  "key11": "tTkbrthPGxS2hUaBEAov4ToUGU2PCWeeeHeBdGndPFxx7tLT8Stf1AALSgk6h4YWtohru7TCP7QmAdwSVqcf8pe",
  "key12": "5XYydYgEs61HD9o4nS82rFyHQwmGjCd6JNga72ZbgM16Az1p4gvdmZqf5vY24Bd2SGDsXrWQHmEa63KxHG7Cvd2i",
  "key13": "4TP4BWpJX62rE11us4DUB2SxnoQkskDCKm4mkcbzXehWwENYePDx3GnuytiXigjqdVU4qPcvZ9wNswHWEoNDuDy4",
  "key14": "2v5cMJJYduTAdN3FTe59bpSXXBDJ6QprCowv7waVwrGvL9qahPdC28qGdeEKXsqFjAWDnLz5xNZg7aGtjPa6T4yp",
  "key15": "5SAgMaZ1mNeqUCY7vfrYtCXnevcBS1x7VdRS7ZUUUgxM8f8Qrzm3HFTQQBFjGtGqoKHyDbtHjyK3wA82VZ1USEuM",
  "key16": "43yE6Gvw21vDhbTnYbPS8Zu3WFFKPtDGeN1mHGhxABo3siQZkjLjH1aXpQqM9EmMJfXpfidmNLStHfQMjKCSfr3m",
  "key17": "4BGuHfJuSahA6GLRUf4aGrTa7c9FsDC5TnNVYsym31AiuigYotvmJpxjdmEDcYAz94jsaSfrmxe27BkJm4FCBiEG",
  "key18": "4t8i9aYUaXbspufH69TfpLutLZA9xMS1aVZU8bgkpYQ1hPB4dQqNLtuZroJhN26DE3nis332CyBRK68txRn2NK1W",
  "key19": "5DvRXEjrfmgYPJqZCKAnXF82NxXerntLjnrhsssHh6oh6iHqA8HkD6ZfuVLfeYtA95qHGokXxd2A5nNe3P9LeaN7",
  "key20": "TH7w2byuZW9bZdsaPJGBtnkMXQwwQSU1HwZ3vmyPai7EgHjqMM3RJoyq6iWwRHAXYSLGC19sX3dABzNniJm163h",
  "key21": "BNqoSm7LuA2r26s6pdMMFGehprjnvJKsuiRG2Svconj61NU4DkxKGLb1w2yBV6wkauVggDe4s3EyCpHJU9wU2tj",
  "key22": "thTxf8JKbnDUyQFQK4fxo9ucm88M8tRhKoLfT1hx5XjrttHG8zFUrpWsi6vAacqeuQd4oXu2XoTwGVUF9Wxj2xH",
  "key23": "3jgSAwJaxQTRtXDFWKhHErjBhsfJLfmuhpqLin1uDtEHTYgGjEj2NXnFvQxztqEZn6BFfHc51esHYuHm5B6Ux8Nw",
  "key24": "4tc6sKk4tvDn1eZQW1ip5Wbc1hncgMYNVjyEN7DoATjeH2x4kofr9knwrn6jFFsbv5UVVB7c6tjZzosDnMWvr1qW",
  "key25": "2PBSVhqKG7LBosVLAgf9rVBgTwCi2tDoQo9b5jvjBBt6e7qLak2kguY8RtN25XwbMCPLRHkYk8ADJ9zDDcpVRey1",
  "key26": "2xTMsrS31UpPzAQDKx3YJUaeLyWQYQYPpL37sSaPKWnTbLXNs3A8tDdLaGj8nwy2QPtxgr2fRQZerSWpxkAHfcLF",
  "key27": "K9MmyHUtXRtbhYuXpuFCvZc2Eyg8q6xRHwwSVxG7DmHJ7WFu8k2vE42ZKGjV13sb2ZeNvafaoXXFnuVb9QCuL39",
  "key28": "4qoXazbTsQgL27VeEb8p8AG8W2hRfzRrUfFEkJPKTpbKGZMcHhgUk7HZTPcALtuAEjZQGFh8PC7w4dvpHuyLNypJ",
  "key29": "2YJumVVt1WG3EfJbtPZjXGw9LfzXmy9H2Jsc8LP8o4aF4cNupZh2GEdkuuApjofg4GNQRJjYz5Ufg85RdRuq1U89",
  "key30": "26Heq9SSPrGj2xE7zCSd5MWmAhHbVfbu8ScAozdY6C3yN57t4amiDoY3PSDHVkWr6KZ1rhyoo5W2Q5ySqXwC4VWz",
  "key31": "yGtkzubwHoTExBeB9kdDJz4m6VQyegi4v88QRJWeLtXSMe6ynvJ6n5aHV9Dj2r7hWdZN2G6zW7PAGxc2gypLVUc",
  "key32": "5uq9Aec7cHKe8PMxBhwGhesMSJ2NW3PPDi3ztdm2PUcDm4a4kFqcFde91YawraJts2N2BaUd8cGW5Ys837qHDf8g",
  "key33": "5p1DKvrnVN8iCvFnoyYkDosBNMrbocxZ6RXm9jHCgTwsR6wNnvkdLJkbZGDL62Sj95YQDits6J7yAXNVy2ZKxzQz",
  "key34": "515H6UBQ6jxfp3QLnaTMRWPFkekNLM7MPxTAQXDznauRRRfKb6NwFjNbKtCJPsFZVvJxs7UQY8p5FfDKvkhUMjaj",
  "key35": "2u6zv9HVt1J2FreNUipFd47KyuwkaY2rZTzWVj5XfEYmXHgVyBzLGZ6yZpEtPuoWPWknh6RqCJEvGvCkiJYsp6it",
  "key36": "4n4LVwTt4pP7tgLj5KtYSuHGJkuresi7TCDnUfY9dVBGXL4Gkij3jRHrW7QV511MqdfdmANkqhSDhmxacvhiV18n",
  "key37": "5Bg2UQbrvKtmnNANjUaKDYXNPUreE3GUiitVxmr7dY1Ct9nTwmC5yB52CUa2wuZNkzMwjUynAqxeLnZpuCFrHRDf",
  "key38": "bMXMWkQxir7bTjjWWj3s9YgyKzXYDPzgxetqbU4V7wCHyrPVgj74q5M8hU3JdauAzT53g574SuL2rapGhJFZkfx",
  "key39": "4Bv24YZTZmPBeHBxZxSpmc1RUGPWcS8WQv8gFksRz8H78XF1LAgLCSqh8DFDEZsWuLbMemUxAd6URrkS6UZnHdMp",
  "key40": "2MqNLAp336wGtebf4BJYqt6DyeMR8ptqUPV8tK98wD3xvBrzUhjRWBKsaH5PcH7KPqpjjQpqiRbSpusPrnxKED3Y",
  "key41": "5xeCSx3StNjKrHkBRjMQk2tNs9V2sMYYEhqsRYdiy6M5sEYhMDcPPoFwnbudWMsunsTmVGGMUmRRQrmLMfb7T75F",
  "key42": "4nRFNwky2u4YxUg9DnvnNiJPiZAd7saNnjoBwaaFMBdGE1NrfcmH3MbHMtuufc7xPUy7qdw7LyQdtsYqro3WH8Ca",
  "key43": "3E5j264FdJioj18q8iJdGa7XsrzRGuN7rcmD2rQB7Xj2hHkSGb5Ft4EP9WvMRHq1XVvEzitATPXtu8sgkYVB1YhM",
  "key44": "3wJzqNNrWc6GKKGMszCzDqLv4BzzDvimqnb9rLLPpREcdH5YboMhr4eVnrKqZ7oaTcuQSPn72FX6h8Q8dcSkiXJH"
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
