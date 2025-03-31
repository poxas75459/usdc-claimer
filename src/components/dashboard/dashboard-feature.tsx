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
    "Xautswf7dd4SAkupo2eRJKd4He4gcB31JAhKE6hX3ysMo6FocfBmkdNvZdoPMd7rSKpJKjAqoyzUdyTT96Coz7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58WZ6ZE5LS4YA4agKFsEMzfNrUVAp7RNkQL8D8GAZiuUSYbhQfw9HJ6F1MN94AxD95BeBt5CpAsXbRdWEMhqWrpN",
  "key1": "5zSdGdsnuN4kfsePTJn6YtmZj7MiFfU35jiHe24URz2B8Wnyt2Pc2bd3rqFSHWLaXcKCUf3Vux3EJkgHdomK6kfh",
  "key2": "2AaprphytV2zmJ1QGACXe659pTbQSZytCocw9ZuhRFwKETQzftiAiTqAXGfVnbcLRxaGBjov8HnN9aPyAqcimGE9",
  "key3": "5CDjqSCQ5qp48ahtNCWFEPkH1kxXpx87rEGATcPGPV9RSJPGPLZcW3QhUYHubaiLhcr4bG7iw53y7xC9hY87L8ks",
  "key4": "2MMAyfvwrKpMR4mC8wjfxJ7yVRtNf8YPNpYRTR57yZkpnN9xutyPeFRGyFktSJZs5JcLAz4ab9q1p4MgeNRGHuBp",
  "key5": "5kMfj37NH4MAxu9KyoRqHpCFmyEWbdv7gxk3bDDXPPsGGAH2uBjK7uf8EsUrEAWc338zLX4xrbVtwPcE7E6FYYee",
  "key6": "4V3SqaCykBbbiwWKdWMTR8xa916cykKkiBMULxUq85x4mQgkfo5ArDVfd9XM4wvvmodQSyZyaTVVqgpYi9bnsv1Z",
  "key7": "ZLioCVFGsuKL9tqZKQ1qEtUD7p5PX63MDbURr6EAdymj9EiyjEivNrXmGCx4vkFusCL5e3gXNN9pBj7HsNLqFbJ",
  "key8": "jdAHRnKeaPV1vMzJreBkePZMLjsJsRSuTz8jMLY8Kirenqz5A7cDnX8vGMMDmkJQBiouzVC8wTuKHX86Uks2m4r",
  "key9": "4bKXF1CVGeTyUHkb5cWhcStDJuhE8uvNJaevEdgTQFXp6JEpcpkL7vMAj6bSRaxDqqv69KDHxGgWvptQa7qG7BZK",
  "key10": "3CVpmbXMEzcSorYKtn9JqciHFfcSSKQtv5Wou9nZgp38w6mYQqK2JQeMakxSwjoXwGX5nMYpmbZv4AWJrZfgDdwy",
  "key11": "2zKPUtropm9hG5XoneGNFoezX8xg4em95T1yT7b4SH4bnf6WGMPiHuidS2bzhBmsKyELzySrz5xGM2x2w34ZsV1u",
  "key12": "3PN4J4K6mra1Bd1BCR6Kc1K6S9UHx6m3FwpNbJRCod4RhGPZGgajYUnCuQsqXygSPjvJzRxZJqRkQDi3ygptVFP1",
  "key13": "5x8inuRwwx2XskjZQEDQweGkmEi67KjumtJPZANkTEjvLZCKNXqBiDPfwLKajxHevbuYx18ea31iV87zamqHHbBB",
  "key14": "4TxVN6LS2tjS4rPMxQjkyitmrWZzW6Lv8vkjALdt55ie7yvyArB6HTqMqPTaJ7c9T8Hdm2GR2UJHFuhRs4T7e5x9",
  "key15": "4dSCcUpnKb74eD2uHA1EdQx26EArx9BhGFqrz7ncaPofd3FkdpXJxhkPwrNoJnC4aLc1SBazbHJMa6GcHPSWkYPD",
  "key16": "2iXi6DzygSvsF58bmtoMmvzftqYefs2dUDk3CqYTv42akgofvtCuzcP2Dt2w4BvVTcFwDvPUKvQHvCGCDxEav2Fg",
  "key17": "3Un3XqRj5FGTDSTgjfXFNMRVxKuBEADCkF8heE5QrbdjgnjRhD3NwiRhCiH5xWwu4ZR7Lkmg9Fbq5yoH4oYvyu1a",
  "key18": "6qDAchZGaqbyaKwvPG8PY9EPmy4ycNbusvJMujAEjZnJhQ4JXRFPhLKGiSQAwLJVnbNuprCBgrVbubperuhimWK",
  "key19": "k6uP6dQoMAen3YbqtYsuVxhYwW4rPJQX2tVPAbG5WzU6ywHaJXVhNEp49fu4xKKBBDKFLJhps5ggtWaJFR7E2bp",
  "key20": "5uTyeV36seHhsrmDGt7AN5LNAXj7a63QNmDrmLwVqMSJNsLZexR6y1HKuN7uBMuy2WWtkA3WhmfovQW7AsPGPN31",
  "key21": "3mN9oAdrDeVNGb1SKHtKC2wBwn7wbcS7pi9YBLbwb9UWUamztTX5AUm9At3LdtdzqDKCjJYbZbYvMQQVteBWLM6X",
  "key22": "43jehqiQNy2NgMX6BAGGodHdgER6CyX8ZjvTWbATFvK7ZQCqvT2Q6ex7cdXp5LtWMXsSdsR3mhaPFM53FRiRvWYV",
  "key23": "3aoArCYJKmsEnf5dbvioonQTDsF8JuSRqsLUj6imYa3NMoiDGmiZ6boEV82nFg9c9DAYCACpXSxZkTjDc2Mue59V",
  "key24": "5yAUPuitb26t2JKtQRmyBqeJUqKutDfkD1oKNKo368UY8P3A5tNkBsH3pb8a3Sg4gu572japwS1rWhbUrCjKXheU",
  "key25": "59LxpeqVCvNtTNiVGtdiMfAuk6C47oUiQJKZj8Ur3FyDrwgoar5E7fvgdjXnFEf4zmf2QG7qDMLk9UWSfjWDXEtP",
  "key26": "eRK6aB6RZKXiHU9bqtEnXbbZpaLP6Mi6daX1KrdjtZWHKUhH9TEjHapmLq9USnnWPZyf5NLMc73ziG2y4HKAVdw",
  "key27": "3Ma9GdD1JWYoiBHX6bGBWYUFesNawdcR3p5PJEAjTD622BGxkceBHDd4K6ycTgN84HEQLBrJq5ZCmp8Dx6V9LZ7s",
  "key28": "39vBkN97WJgsiG7ap8v8wkRyWBEhzMou8Y8SjMKg56yudkADBz2cSE37HrmcXjMxuPYZZtYymUebs7H5A4TnkWT7",
  "key29": "cWaF7iWikGYroUaNDtPRngAbyvW2ueXUicXahF6Fmn4k7xPPERqpn8YE81toXK8CqXG7bJTkWM6UYGNMgdwwPmo",
  "key30": "47Gd9ScqSzTvQK5nVanjt2RbhtxQHVn5QKrpcJ2sRVVUhrBCXedPA61CnHexM8245Gu5NzCfhYvLxV1ah51etVuN",
  "key31": "2DRbcHSSnJzaQhCJoDC7cqf8YHkNcrMKffek5QPiVVBykK8oXQxKaKTFQvzd6A9hkWeaWtxcrcnnNNbA2s3KzeGn",
  "key32": "5tcC2ULLGH7uymXuFTd2hnXgYVSAL7RVVkbZ6ZwBjJM4ffcK5d3wupjr34Cyc8mJTvczUyEh567WtbTGm2fv54ho",
  "key33": "5bkzZbiS8BegZKeXewKTaoqjRA4TaZfFJgURUCrSGeFFB1JvMQmcF5Nrrjhki2EVT6YfWEJhLtHV69SxFh6mScjY",
  "key34": "gWaLPLKe2aH2r61UMPvLJpKEzgtdFSac1xEiEHXzrNnFHHV9PBLXABZ3WHUK7nfEG3CTxEqoQTqsJXQLPwXrqwG",
  "key35": "2xhcrcsZfd5gCUTBTfmDzrqrvVoCViZbv9364UeQEMF29fQ8d2TaiRf1nB3x9ij5WDZZfiHund1kRgoL5ttvbuBx",
  "key36": "63Gsz7d2NgPSHCXkmP2NJg76bkHgoLe7FZ294tADxjQL8tu8PSpZNDdVoWpfZaJMsEqEDWHaDX4F8DnKUAypwbsR",
  "key37": "ySXv1jakErNxjgMTVKJNMK6wyqVRMVxXd6ghQ6EuP7re9z24xBMoqxNrKQNinF3SwapFSrnxX1SFoSWVyCXdEuB",
  "key38": "dc9HMkvdocyjgQecgkE2221oNB96S9JjgjHcXYEPeuXACyingDVXXN5DPnSpMCWHUo76LfxnB26CPRdPy6XXcMr",
  "key39": "52NXT19g4QGaUrGX2fWhxoiRHZoYmgbZB9q6sNuRFyoGYkP8s9oDMak643UAuSnrerZdQCvGujQy5sy7UZwhrNph",
  "key40": "5jeVaWLecy4MvekM3wef7pMpYk8XZQ3JC1ZxtFRDnddT3gvHnhZJKATTMNzKoe5imR47scQXwUdmADiyh8iUabrW",
  "key41": "3Ezun3LZSViZjmm3RjqpHR2XWqQcij1EAqccrQ74xGT7GxGjN4e726ziM3j2G6RnsS5WV5ZUfX5QNFiDP6cQtXRf",
  "key42": "3z5uRffigtg9PvLRLqrerDjFJtvgKzWBhW4EtTH7RDWFRS8BBFm5tBLGDrhzAU28GAmenNMZu4AGM56zcBkmc6P6",
  "key43": "2ZB4Zo2QiWYJmuXbpfLXWDm6Y3qC5F1SwzZgisbWqxNXpKd4mtJTXy1Bg5PKcA8m6KqSqSFzo3w2hXXSLHcwwwtT",
  "key44": "31gXHi688gk9G7Wgp6tH4LGd2m56EfyZqkv4PgeQgRv3vxkhVaYzzmukZ1gZNNNBZqx6qVUwPnPFpn2m7DtNvvuR",
  "key45": "5powAeNv8PVwdiwVit8RVU9KfNjnuLDGSgtoAngHHPzUkqyHyWSjAYaX8WtzE6tvkqs9kfpRvF7sGv4RHqvS5wUV",
  "key46": "2M2UULPqNWEMtMP5yRUDwi9jtYH6DJwZCQDz4gXNNtuB2mWR5Ekz4gG6PT9vxaMmCmgxbVqjeLqiReqLCL3G5Yoa",
  "key47": "fZH7w7zxtNydBqET1GV9VTMXHDAoW3UKaJaHsKNJ2WpKZPeK9SSA3nZsvGLcEdRobPoa8Mt41jwF5UXLDf9cRTB",
  "key48": "2NHBzmQuAwiFS4eAgDh2A5pL1oF9p91vVNBnkdSciJFXnnfmMHnv3kW9JemTLAf36KBhbzDuXLpZ2UzZLP3z9Z6m"
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
