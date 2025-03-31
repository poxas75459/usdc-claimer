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
    "5Ae6sXAGqgaQB1QhnYXkz1iLM1kqjfKjyPh4Ch1fZvgEC4WS6YwP9J9JAJLoTd3wy1o8BFxb4LsvxNeyKsayRAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WEnpSzMz3REKsQFXfJY1rskCDaUCLQpmabbZaqt2gRzk27NMEWrFSeuZ1LY9nQokRCKZkw24wHMmqg5QogziNnA",
  "key1": "22xf7B72yY2tNoqpGemoTGvRL1qad3M9dBpevqLGtehUVjfs9qzEJT3doeEP37MRU28yvKb5r6foufV5Ck13hV3e",
  "key2": "2iytxH5ThtJRpYfNUqs6xLnasCuW1bShPoKgPF7bP1Pufy5ahWGcRTUYLt9bMnZL1vjDQ4jnmeGDcoMkZqnW8aCb",
  "key3": "pnPBTvDEbMKiHM5PeT2G2pwK24vzgbvPDsNVrNfz3Q483ZB63LSA1TdCrwwDnUeDceDLGJjG93n7C1Lmu7m7yCC",
  "key4": "5ATL2cPmWvv7TixrskXjX81H62yHzZqQTRUMQM1zBQGTq797fKBMi8ZAvrCMa75Ee9nuee1m1RY2FU5iV2gohpj2",
  "key5": "SuzAiVLuBpTAwSrtUQoGmSgNHLz2P5mC3Np88KmmpiZCrpP94krun4jNZZudiquh5dSt4i1jdzNtqdDCMKH1zWb",
  "key6": "62thHhJnVizqiJ5jH8ujfPFYXAn1Fb18NTN6aS8XuHqAv7dbj3U5p6783zYt9aWXbEPPDv3WKoECYunDTWVpy8vN",
  "key7": "gmNrVPjbqWz8weUPTbSgcPJJPTJPmKLudHJjh5n1YRTrQaPuSGBoACU4nAmQHKZYu4JBKDm4fZmdZrXBBCNazit",
  "key8": "4Zd5FKkfnYy4XsfDp5sa7QT3NmjXv8BTJUB4SAa1nj62j1rVkxN9tMVhLwPuGZaeTdja8BEnhS9y66MCxE7DnnA1",
  "key9": "H2YPkNkmc5nxNtkBJSCmbyt7fdzQA7jgYXh51W91hbrLvwPXZeb4ByqJq23iMTUUGHF96BzNuZWSj9S4SdmA1Yv",
  "key10": "61nRWQTjDZoMv32cwZ2p75cgjyk3U5uE4frTNSeZtEKkszf45142Xntd8sqnPpZ7SQh3D3Tbv9NEVt4z1jHaGBwf",
  "key11": "4NTYvkJcfjXvJJA1giLxnTm4FmDWn7cQaCPuAiA2K13QkwE9ffVu98kPwzXVBSPSbLAGJjt4U4dqRbTArxgRvk8a",
  "key12": "3WjuU5TTre52M7a2G19bLUANsHv8D4dzBPHxFxsRW4EkFbpp7nsQXbkBLEciNVyyKfwuUoLtXrvfFzR4hkGhVCuy",
  "key13": "4PhfNsGNxbfbGcARcLB3QLRMCuEooQKM5cdkXBCXuiWzevsFuoBgkBqzjT9czUwk5D9ajRGGJPFkKqft5e3kwRZH",
  "key14": "2EkirXwARtSZLmbKCfLC4G7p3dEav2W2rxXiP8o71prYq4KWyg6qe454xj4D5hy2cp138ErKmG3DrV2huxMXRYno",
  "key15": "2H9NdXnJRYbNwbXwajMizyYPWwe5f7YgTimG2qAad91bEi46E9QRGFAqFxx8aPZwAfw18yTKHynhoZhVyNEHSMEC",
  "key16": "59hP68ZdR1dQBSJk3DEpbLJDt96EY96MMfLkYwNsqSBQuRppwvoPRsy2JJPa9pM8JzRUkQVV9yjmXUTTzJ8omsad",
  "key17": "4PMr7JQBiw9PqHajTwssLfnahHKNw7EF7u6kzDYzEZZQzQW8D8SVDj47xZjMNmE8UFtNFmX9bC7gNjrjZvdP8Qdo",
  "key18": "2X7Z9xpAzc7wee2tD47VDa7ZCf9TR4SHzHdDeGLjKafrfxX13KiYPUFMnX8PoMoACoFAd5g4X8VQHnbUrzffosyC",
  "key19": "5zE7wYAZboWKgX8UGEMxhZJNfFA9EWfhTGmYpfvdRWtDAVZSxmgXpk2Vj13GgBxKrKJWSzeFLAoxVxM5vHUuzhYx",
  "key20": "34ZCKBQZikPNdVEJSU69woe6jdqHYxJ5pfYNbdCG63zmnMmdzcZqTGKiNziFpVZLisjyCReoRULBQXXR8oyFLz1F",
  "key21": "4nuSB7nuddbGi6bimEubNHKGmYaKLibiWQTZrEQBznGSisPRJbUqrnirT93Jo9oBAkZX7ErD65BQM6VNe9bhciyx",
  "key22": "2ntJZVGcGqk6u1eDdiYyyxKQv3eCAAneLBCe7FkQ6wA2Di7a6uAKrG13BNFGuufN4W3mWRS27qXpJ3ZCsNX428pi",
  "key23": "4mRM9n3P2JeBLqXyjH7iEU8ns7Frtctnc3EXnqEbNAoiyihM24Kdk9LZe4pkWdVQev5HL5qvmzhTkaPjghQmuKrY",
  "key24": "2jSxPZKgtdUtpN4N32MSCAM3zR8DgbMWP4xNa2tGWi7Wx3GuaakuCpM38uPYRuwWNTKSEozU3a8MySSp4KapbRni",
  "key25": "5EYQvsqaaNrkdB6Mp3J1kVZkX1pNuL4Cuuo4RhgvT4VhgRXxyksX6xTRSWYndq12CxXaEC9HjFsgQhKWK9miNm9J",
  "key26": "3Sm7ciPGJSUWTXjpuRVJPP77PHMrxBX81Q51Gejp5zNCtDLWzjN8B3N4H6jQ3zF1Ud4LXg6C6oRDF6aM69sbndnd",
  "key27": "3n2NpEwPMB114AnqtSnFSu4TkXsxc819fiPH4FoSQFf9SKdCZ8sv6nJqdBAUNeryXFj7VoefeJdizviyp4c2dmEq",
  "key28": "4QWapoc2cJA8yFVf9cEma5K8GXpGJzzE8MMMxZChWSABZZbbY9bt29fYi5MquvbnCsTMyYoMum7JvkJpvVunv8ko",
  "key29": "4WjxFydTgLTbHRArPiS6wRwieNSrrW7b9Q5FTmtXQvpgg5ASLpWqmiATd5iYWnCyTWbuGaVxpHZ6oXeGRmdxLeKE",
  "key30": "3YQpDKCgVDVoDegsY5X4CUWv1yXKmCtU78PdEUY3e2UfYp4PewY2Szuwrrgd5nNTc4dgp6U8jXxaD5VoBuuKHytr",
  "key31": "2Pb4gcNt5cSAzJu7wJArtbbiBaWoTsp7eXdPysxajcyvUDEgt9CdQC8QPXxaJeits4wkdpD4HKXhMXBqNRn51KZo",
  "key32": "4YjnzR8FQXL1w1z5oeSLq2y4D1d3fckNrhjT1yj6Y6LRSMZjvPPXYWLdnf6fB5N2NucGkSwo49gmVx77Yw4UkQcH",
  "key33": "DQEZqhN9cNscQNaxtWFbEeR1Fis51HheYF6exxKATFUrSTMcoQZbVXzc6tacfoufuKHevoprMFHmpbY5xBpKJyU",
  "key34": "9LYeX8YZxMn745YjtcG1DozZmfooyFNQps9assS4RZksy2KSeHgDVyUtYLhjRMcv4GRShfDBeiaFurcXWYGa1Aa",
  "key35": "hpzb7AXqeRoKF5p92DtJh7ad2eQSvYJFPMgjFjL3BDi3js1vML5coEGagNmnqWEvj7RRefjccW6veTjrHHap5gc",
  "key36": "2pnxaxqRxEqaxydgLX28mUUnsCfXHjahRdtQ4ThG8RgJJ9CyfprnwaV9LEtrLcpJYq8eU57AqCZj1iCykxLcCe8X",
  "key37": "5MG8HnqfC5LCRDFu6v64fXrKoZENvS6LdidJJMN2fdtXLQaHoqqUmCSzn1JjfZTEMgJmNJ48B6jymEPouXPvxrmF",
  "key38": "Gc9VN9Rum3tEr9dDbZddd3VbH7kFdudu56qLsEm9zKpFdyiqZ7ib1oCMJXLatUerRd31ktfY9PeqZWirSE8itpx",
  "key39": "4nmoqq8xdd1STgr4aHsrDyJEBoPiSKzYiCE4JA2VQ7phEAbyEwtfTSK2maLY4jBzqdeTRkjMsP7UW6FBHRyWDHHU",
  "key40": "3QC7FRu17HEpERno4T4MJbXFZLmnXfkUW6dXkJaa5cszb2MV444tzTcWFhorGMfRSn17gHxSWDBTuZMzqHayuJgT",
  "key41": "62HzH5zmfzgkrYdhCq3JLDdHXSQo5q9JFDLwghU44PNABGhVA2dPKGjcDMCPhCrYXkLPieyGa3QENEjc4V9BrRa5",
  "key42": "bfFZABfpCf58KHoG14iYELb8E5n7Byg7AhsVwkJ6sRZapBKAZ28YHLVhc1hup5roJKeQMT2ZXkoEwnFpZkVFcSi",
  "key43": "fh5GfWcePKDWTj5xwDiYbPAcCCLFo9cNH8Zp33NeYBNmPQnSJVvc9rSuo7jYHmQtAbwhvn5EGqxarFWsUzwzzR6",
  "key44": "3DzfYPCk2yeyV7zqpUrzYiUPvT62SV3aK2EhkP6mt2eQ7R4BfKnVkCgQwNzu1v81NLfapyjpkAAKfJ7LPG3G1qDW",
  "key45": "5JpaLwCRuLoymGF5QvFskBXRm3PL2XQd9MYKtykdmdym1N9d4GgzmESZXEs4k5UWnXt5XyvnjHbegVBMarPtpJ9K",
  "key46": "23KFZbhL2FGtkYVR2ZNH8DPXv9sX8W9LZPXUkDwkKmvMQLTRzFqAX4fwX18jCfCRHWEWtxcz8Lpyc9nz3SME2hPM",
  "key47": "9yztZK6SkduGsVPQxcayvzTAj9DxMyhk1fvzcFHoLvWqh8J8jbxB6A2yvTyBDzvaLmoEDqkoW7cFfGNBzBcihSB",
  "key48": "66TPW1DCVTGn8qBKuuXu9rFfRmCKFYGidPTwAbSMiqB5Lx9xxx2CyKNAQ1gBkL4xTwNNjfBVXe2o9QXqjKCTJ7jU"
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
