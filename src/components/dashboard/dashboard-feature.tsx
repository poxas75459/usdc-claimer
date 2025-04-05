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
    "2TeBVL18mftRpn4JNy46z7RPAtABCGUJfzAHTwcTD582d4jQ4Gx1u54ooakhVkD3GpByjfSs9pc7Nh91ThB62LV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NsvH5243yQma1PH1cB1oo5jErqj1Db8cHkyiha3FETF82FG8Yb8GUNiEuFUZrt7zSTfetCCsuXpLGqX8gttyGCg",
  "key1": "5G31Ut7fzPuZthjWdF9GWCdQzFANhyz9EzTsZHva92t6CdsRxQwsEXth6gbTK7XS4xeN73CUxjbGdyDYy8F2pPmv",
  "key2": "GuinJ1Ltay4ArJNSvqHWfBSt2bKrAkiE2urcXaqSrCR5kYn79MqxMxWeBC5e5geHgyhELLSnBqYVeCUV8zB94hW",
  "key3": "yMhEsy2EC4JQ3UupNzokNpChaNGBkMTnhNZs3dCEdNLxYnJ7b3JDg7Z7HWvKy9VppbjXbtKaFpD84HvYU38Q2Nw",
  "key4": "3uWiemb7s28rvwPetxX6Sa2b2EvZvmR1uZTLRSxQkSXEjm5ecx1ysmfYMnt4sdMH49R2D2rNZ5GvJCRxTcqcC7Ve",
  "key5": "5vFucbQvDrsRZPx3Y7ci4CsceuYaPAyk8bbvads9JqZJLjHcpZ2qjQiUocX8HvgXRGksCSmnNhaKtD4KwfSUMp2t",
  "key6": "3MF7e718XSdRbTTQhVS6wYeUSUrLrP4nxAvBmBuVfLTyHo15E3uwmikHSizD3kDXF9eyxnd13Vq4DzDn9vQpkb3r",
  "key7": "4v9qQ3bNm568ZpSytTPQgsBzaFLJBoyWHCZms8GLvtuxYjPRhwUfCz3ySNG647A8a6UoGuTvkAJXa4kiEwjixprR",
  "key8": "41ax5uHipHwx2FgSi9au1xRpuJa15z2V1QcXts5cRGDG2YfYbHEPBzzGQdzjUh7YUu2qpL243rvUEsMZqRF7MCcN",
  "key9": "5rdLfUGsaSWvbTryMZpAoS1E3rd6Ly7D6Ca5xihfHyDFBvmTjozkhsaZf6qwX9cSCzXV6cPBXwVqA5sTVQVjvaMJ",
  "key10": "4Ma1GamLg7P1qSTMRsVRDB7fC3S8sjgHr7RTgJvuxT5wTh6CyGmb1M8qf8uugLRZDca5yDhPYb7fnfxSX1jboC58",
  "key11": "3y3YyRDgpApnGoK61Vdro2RqLCs2QPYcbagBYVkrJUCwqRebBi3PUmFgdw2ider3aA3ryDrXyaTzmDQhvMszhuZZ",
  "key12": "3kyVnN6hrWrQq6wxbqBsQKAnR8Fo8ZNoFiL2YtjKJjEs5BzYyCxXzdPtqHvQqK8Mdp3xsPWo4pwtMy8fddv1tgif",
  "key13": "5tr9Mwijp8h5U1rZWJm6JbVhZF24Q559gKBjkeUtBM4uFH1Sennqn1mtNRUKJ1928VbkRiK7YmoB1AHUdz8W56eD",
  "key14": "A9trf1xMfhkRUEkmhz5BWwpna1sSCPDhzSCZ7XdDantGxTGjSie2aeP9NktyysnMQYYz2kwUBU9u5tp4wYjCE78",
  "key15": "36hoFS5tkMWGHnBaVmu4b7FcLm2MTM2tsgKm9gPeMnHfJNtaVDPvNWoKJXqm1JUzDPcECtR7D6v1eXwsTVDSh8ip",
  "key16": "QqjCd3MTGxQvLXkqnmsKVjbmrZC9jZZkPdMcu5J2UrhXCQyjApRKAyKrpEGATATs2WXH52C5N2fpiqQKH5DCuUB",
  "key17": "5teUL7u5AcdfqPcgYvNo2i6n4nJnWnVbx34dv5Z3kov4ngN8nvwbM5Vwbt7rgLwtcon1mLYHqDmrgeEeTtZMS4en",
  "key18": "5pUA4iBxuCZzqvVgikriZqfLu5NXpiNtGnnRqSPWA86kPKV6KhVdm8GpYtoNFvBoDiCdo5YvkXUSHUke7pGSBFiL",
  "key19": "SiyVZVLmGRoM6S8Ze7Ma3hGCE4sGznuVkXCamZBdSwg3istwkmq9DXs3YEqD61WymfVH4zGxZdvVTH7AsrUgf4J",
  "key20": "3n4GACXFqGvHB9VV7KJKw3pAMXE71A2NCN1bUovsP472dnmdnyxEWiyeRt6VksJLZ22bxwER6BmWe7h2MSmiCewA",
  "key21": "64WxuQhAUwn3t4pxSJmDXedBwRCX5CduseFsES8foY5LKD3R85jeAurHSD69ihwKNADotUUqTy2UunyzqVgFAaoy",
  "key22": "4ztKxPFDHE84dGusZh1zS5yn63MLH9wTtHkQNRmP5mLxSDKNQzew8rrk3wKXMFpyB9WKqJsvoUfYLUjKYq9WAU8V",
  "key23": "63qqHdHZHyUSQMz2f8qfMj83qjAHSq3DEMa1heMQRtt3pRriA6FNEbq9mb2vSGNpLwMy7BHHPjtv5JgrK5QXpuUn",
  "key24": "TdgAAo64PvyKzKfyyWrMyhm1QTPab5SLnHHVDYwJhBWKnoDuSHB14vw5V8ftx3hxCfEKZToQJQgqn5eZH6HB4kg",
  "key25": "mWsosKs7YXAMcckp7viRQZEZc9da7E7ocHhyiNab5sDc2ZvFn29qL7mDm5ZtzQoXsyHFAGAz7r6DikC95bh217b",
  "key26": "3CqHrEBW9ciqGNJ3hwZCXFawPYtrCyYvJ3hW6mvvwHjLmRW5vNr7nEBPjwAAiihDo9xuB3sC1JVCYp8uHDd68QAP",
  "key27": "25gXDnKVKhJ3TiYeYYBaWi22Z8P1TN26zrUszPV4kipS3Tb9RoHGZSHAwQK6V3LStHPrHMUPumXMhXoPFVswsJpX",
  "key28": "3nXCt9LrcxF3uKu7QiC9qmDT8Ku3Y1KHAaaBXY2gYFedRavU6Zebsneakgs71WAepK4yr3MQ8A12LQU3AU7Dqz2k",
  "key29": "YsgEZCGzUL6NH4Rf7hSzd7zEby8jvqSjXu2DA6jjLYW5HC3vxxjyYhccTG63kQyWJ8iijzsHo9LDLNrb9FtKq2m",
  "key30": "3Tj2yhjF6P2r58SvbjHssoioCVcBoGyGyNAnAApn2MfsbJMEttUbgdhcKV8Ybkq6sUm1Ay8Ve4GhZCxYos3NwCXT",
  "key31": "3Avxg4Sey8k67wwf2pXrmoQTVfuxfoGGPAZctLQfVmAwmyb9r7tTqe9AzwpdrSgrDSWE1xzkPnfotSaosrFSAEaR",
  "key32": "4EJrt9tphnMKMDJ7jdXW2Kyp9pnqw7VZPc2tB4LTeyzQ8bL7w8nhtetVoix2EE3eit5D1bsvJpYGzPCJGn2vnXKx",
  "key33": "3FjWc8Vo7ZDkjp3evVQeShhjYrnjaKaCrr7ZfMS8mucYp4DVbK8viAefW1biF171hwWvkQT5SaaD8NTX6jsCWJQC",
  "key34": "sxoV2k8Dg46bWy4DV2CBuQLpcRqVqkumFQbvnx833918FokhC3X1M2MPah3XgyVPgCLVAzJyzfyiVWChMces3B7",
  "key35": "ceDdXEPCM6FTUiPuWxoQjDNNEt1N8dVC29W4w862SpChAw54F1c7UbZdoU85QSi3vMzg7zTP15ga1xRRXocZm3E",
  "key36": "4FEwXuDmru2w4mNcPr4tP8qrVqMyLmuqRqvgQSLuQmBXsT2WfcNBQk3v3eQjQKMhViiFy5yFMD5CeUHwLnWn9zEb",
  "key37": "4bhbKo2Kuewq7zQZhgToQ9KMuuUrPr6k4goZg7dT43g7x9st4RjiYNgd5qt2gAgyQNordSuSAZ5mNCkAD58JcWZE",
  "key38": "xKtugZWpRyxvL3wSCHj69aZG6q1EnvSufi12dyge3nH9GXv6HQZu3k8EUPnEFxmHNwGC5FowjB8R5FEUXBy3Nn6",
  "key39": "2xLVzFvrJwK2douTKA8NDvYd7rcw7vJrsPWnskiBA77MLsZUuThnt6WsepbNhgg7LdJuu6iSVhJMSP2JAJdY3fMo",
  "key40": "pMDwGEPZd1BTAmdWHtfuYaQxcNuLNMVVnNUyftaE9Lj1Nr23qSCsfQz9aN1QramWjME4XCA448zt3G2WzVbrAds",
  "key41": "5hqcoYW8Wq7tMCLACuUy6XwViBei1h5tdRxo3Rg2o6x3Xs1ZrHzq8h3CzrnkopFMfXQQ8sTXSN4ayNSMNArG11Kj",
  "key42": "25DzqLaxNLwbs1ADCzqxcNKmS7cVaS4D3zcbhC4yENNpMnm8VfqfWySqrpMBKqAHMTS1dhiHJfogd9ds6Piy5V4i",
  "key43": "MvXZmLMSVrfPjN1xtesNtqzXHgZHAmS1fjsWfCUW8KpriJqbnoPc27Ys9zyWADabT7xaVTZQ5YUKjokN1cT1X1F",
  "key44": "3PfgU9MKArFxRw4yY3bLKzoP3fQx7Zezx5aDJLR1NbNpdBLiTQSy3Zu9Xmaf5gs8WVfKMCg2TGYnwrxcEvRWtuBJ",
  "key45": "hfjaKjcd7PqVhNBs3LBG8sDY9GRFJFdHLxMxA68dfqu2kXNpJSqjpScgyVMPbyCvMZFeZtYHErF2RC2ibo7fcfu",
  "key46": "3C4brpk8KxXKXxzXHYV6bTDJYudaYazqAeFShCFroxvqaxypwpLnJUf7a7AQwAdPHn8FidYE8JonNstjZ1CTG61X"
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
