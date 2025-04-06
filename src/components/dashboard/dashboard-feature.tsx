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
    "txPXjaGSUZqujQGoRzqVYtHencDRSKQ8E4nNWBd5qY4aWwBrp66aUFpuQfS2bxHabEv7h8x2SEPc7CfeWcSFJjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tdh7EyPiLW6QMcWKK2CvuHg45Tf5mt179Vi9uPqTmYFosyh6J2mLEHGuYzVdCnqu3ce8GyySCD4R6Q22gohbK67",
  "key1": "2GDcvk9yXAcNzEUmeCE5a3GgX4Yh1BnQ11LQkRx96ih6xBeec1zBq5zhqbByf6k8N5qbum74yxCM3RpW4soRYcbb",
  "key2": "2xCvMFboQzfe59s3epbZifkqgNYRdngPh2jLtuL8fm5q4qxkRkyve4eyUDYK3reXZB7siMNtKq1vNU4RYJCrC3KA",
  "key3": "3fCoQp8TPRuJ86SdywweztjcizGFztgv4G1QKzdxe7pZArSBXtJiAMLBsoJQNLuAvFAexzmGkx7aNqk7dfaZbWRv",
  "key4": "2jeNE1EFbyTbsbBc17EWo8LgiVGWDMXy5vyEG2Y5wgfg3SNvtBokeW4eDTbxTaZQXsMnKoo9KgAgQFfHhMfmHgto",
  "key5": "3B4sL2J7s7pd86KN1J2Bs9uigo2tmg1aoEDzybdo6TKgW8Jsfkwrnb7w5yNZvmcTa7HA79yLtThxivwhgtbXQMKS",
  "key6": "kdjoGyNMfEsLjDJu1qamxkQ9hTwFyxsKyLpVcBSHyEmF62AsAnnVw4fBZmmihk7aP5DTmMXmsvtMdjqRpeMfidC",
  "key7": "4JF2iCvfewUBX1WjjqECgApRhzSLcKQ3pKaHUnAvqFiC2QW6z6u1knMTe9pVR3irh22DKCruJTpSYhcBAHdCMuYy",
  "key8": "4hKBtTNnqrnxRsSgRF8k5xu9VaLG973YbACTjpSw4ayENxFAwBDyWExBry4q4XsP3DuXRc4EYhQuNLgWWxvxWXKC",
  "key9": "4sEYDPzcnJQTg9xgfh3y3HQEBbDwDkSrdoBtRrVtUPiHfah73ZLYsmZDGTLqpTRfFdNJBLNqtrSkyxNpF9BmrbtW",
  "key10": "4MbbrEP4gEXq8ekHa9f9KMPSsrQJr3cihWeHjLp3KieQ5nmLp9d3K5ota7X7v1zLo9bHbRSLCg7VLq22uJLnmmkB",
  "key11": "4RxCgSCXu2x78RDTjM493CWRgt4DRHg9smmsGXupGnkjjaD6MC75jur4xebyrZQLCmLzhKDSGU9JknyeNnhpUbjJ",
  "key12": "Y65YtaHZ9zyppbZCc2sHczSBxK7HG6s2eM17Q7ZeFRAMWgWE4cYzhTNp6GcnjBZSDWZ3j1hwBFEMgb9tDFLK2u8",
  "key13": "DLQjNa6XYaNgGz8NJqkTySijPpFf7pmtqCFqPPDKXpjQCYyZftF6Th1wEPU8GNrTgA8FPxUCqpaqskZMnRdxrLc",
  "key14": "5K2Khw771eKDM5sZg54Ra7QWufjjSmzDcVZHBhENgzKRNvYFKBYZsSLaexQSjq8HGzSfH53sbowsvqBCKBq8sYNc",
  "key15": "4toFuZTvDvryHgcokisrs2A3ViQ9cv4aHA8aPNrcb8qHGuqUNhWF2TQSAAgpoBADhVR3ipZo27A1gUQqrUEaVXYT",
  "key16": "3dhgZkghi6TD97y2Zib3J9QPiTpSnsiRwxsWtd1htWgBz7Db1oBKgGDbLWuiQa51g1V3vUSf259s6vgD8QVfNmHK",
  "key17": "5Hj2kmieBbpFkZ61fiD94H3tYcwwiGLuieWMqzdpRGf8vn7eTd1oay1Hgdecn6ZxQqNhqDkYnFf5LkPVN8ryPvDN",
  "key18": "NpxXemqkiCAdLFxQnyfukcXcx4ZadqZmc5HFUcucAprE6fvbf5TGV2veo45E3G42vAibpu8Sej9m8HKMkoHkzZX",
  "key19": "3Di73XxBpURfYEce8bWuZhbK3ArGust9aurccJ4xnXfRhsr8FrHqL86o4rHmGSkzzowHMybQpCm2eHfZi1VWD54i",
  "key20": "5ZzYDovKnSdhEVye7pz1Nd1nPsdTTpizNTCvDV68ceHQghnoTxTpRCE2PjTdK25cxRqeUBvzVqmH5dHswP2B5yXC",
  "key21": "2tUxUZWDL6qwenyR2LTxqDwVFfzcgyq9No9hz7QcA65w11PWEMfYWQFe73ztwBPcPwzz1R7nTs159qHPTbFdoz91",
  "key22": "21vqFLH6FZEyTp7Z3phNJYnhUNCM3ScSHJKwSumqZk4MuRYHzAgp14hFHyFdcM79pJL8iVYVfLV1CgX1aTvYh7xb",
  "key23": "5XPHFN6opp8vjM4ea5CSuhiv2cGH5cdunt12FLB6iyLGjcEMwKGqoS2hYN13Rx9b193DQv2iQ8eTXHseDeFtqEpP",
  "key24": "2f5N2VRZm8V1iTefwBWagBSxQmJcGoNq1JWakiGNqeMUoz1nuhNDuAPBrhN1Ew1W8JUXMHgrjYHZdsMdehFPDivH",
  "key25": "3bifcZK9MNJx5SdyfiPG3FFuupeQRXMhurJB12aWzyk1nhfyCv91rEzfZHfGqf4Hkqg7GkiUbxJSAHUWxCdNuE1Q",
  "key26": "49m6hQYuzNUYCAUiSm6Yx3CNnB5xTB3AkCwXb6fEwT99G37g55nH1GRs91X3oe1DPU4BhuQA1pjoqUuApXHVdMiM",
  "key27": "5qndev7Wsh6yY8r3qPN6WGC1VGPFXJsiL7zNixRaaqHFQdaW123zLZY3GfduxsYkD2yv5EUGXkku7o5FuFGhB3eQ",
  "key28": "2SbDkB5qmnCTKZAEfNjL5bGnxCQokprDsNBYEsGGp3H9nipyoPM8UbnAEx2iVdLufYUrbx4MWQrKNE852VdgNKSZ",
  "key29": "5hezYbjyJApEDMFMCsCP7msK1K7t3yrxYHgM61DQMojKsxEKS2hPVUa4NdqHjMqTr8Zf4NbqgDsut8XEHQpAVbYb",
  "key30": "2hSntdCDFhiEPdp6LafRZzLvaK8pgYQCNuNi6RAeYLPDCZ5HPAEbAz3DhuL8dqhkdff41QEgdJ9A7uPVD3q4qmVh",
  "key31": "61cnR8KQboQbLzsNM24WuMpw8TueyzpCY7rdbcty3FRLcnnLMXDNxs4ugwprVZS9NwZC6k7DtrUjj6JeuRRGLzs6",
  "key32": "3281CLBFEzjuh8TLtexj5hZ6dm8zgmNu3AaF7zWJjXPXjcYpC9BT2jjKexPmUC8X2TqPKtK3uGwtA94wNb38t6JF",
  "key33": "vcLekgSvFLnP3SSEp9NUFVoLFC47CNEvRaXsRxBFz6scRSQ3aDnRB7qVhv5xaSMoyzKNEMJHWZDR51NfCuZXAsa",
  "key34": "2wgcivadXooqbfFmaECKwMbtJ73kVB4hLh58ZStZKWJraEWupNqDZQ1vm4bEp1K2U47MPMiFcLk8Ajkwcwy969Hi",
  "key35": "5inyFooPGnyjJ9F1WXCkZyaDCxrerX77ZRQhW2xVtdGiT6o6uYXjJzUo1uy9PdSH8Pgcdqnw91scpyxBR9fvuJxy",
  "key36": "3w3KufoNXAVyH7QHZ3KvbmPzznBHtX6t4VCNKchenDk5CcHqrzUYTfriFu3Y3eBizm8QFLtUUGHcscH5PKwZ7QUm",
  "key37": "2HAeLe8Bh58Cze5EFSjDM7ZHSzSDaKyz7Hvp8wCBkqw3LCb8pRBLh8AdenVWXTiqnBDdaDE1V4eZF6ZXipQqwC1F",
  "key38": "bs4aKkGG31GArBof89L3cYYTXLxBunC7PD9CFNhsjMGzQT5FQitUxfgR5JFHan8e48K2fE4C3hsJe762q5zz597",
  "key39": "2QybYo82dkabA5vaKjmaTcfi1ZUzLpsZvRvdrn6RsbhGJutfooad1myzjpV2eJuZESZCVBKbn82kAJAogfNwMJ7",
  "key40": "3RdzydjjBr731hnmG3LnbK6y6D6X5G4tBwVB9mLpzG3YfJYxUQxpw9ph4fmwCGux5M344pMdaPWGyk25YsK1kviA",
  "key41": "HKeSF2FWGgyFWiqjG6fvPU3ie3AoZUht1MoJZxJy5qJRT1PMYf3LwSx9u4NtmRYUv9ttWS4UQDHP7VbkNtLffaA",
  "key42": "2m8bAArQwzW2cSXkikd7dUqDnxbz7zw57idi1yauhd5w6w4q2DttHcCB7cbYFLkLdsrozWChzBy94ScN1QaFQBRh",
  "key43": "33iUFwSBnTd9kyxoAxtkyFWC3Zd9SzuPHFfTwTfYipGFq1AgYTnnafW7atDruExSJ2npDAUYNVH8DQqPqFicRH1h",
  "key44": "3UfxF3sD9M9WnENk8b3zhsG6nHM1d8bS8j19X6cotJNVz3753UQJuabVfsKUoLQiiEW2sWhMttD4o4emPaE4eJfu",
  "key45": "s12zp1Tf5vc9mVFEho3gZJFqDds1jTm2rM8Aafaf3YhxT9bgwK2NQAaCYCpyr9ZGw7iSP53qjzRG6tzkY8g1CQe"
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
