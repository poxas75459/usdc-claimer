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
    "3F6xFg9vafyTxBghFh1tZKYUQGDSfoFRmoRta9gE7MSLtYfADydTDWuDbCyiGLujtt95MTYENaLFekcxcorgBtxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e1Brpa944uc7tuc77JnqJu1wDNaGpLpN2PDHW2kGEpZi9My6F4L5udJcy5ohtTZLCEyNk9Gz42bApMSFCsdoTea",
  "key1": "2gFrW59u5fxBzkRMRwFMkqe535HefRuPbmMXoNH2ZDjhJbZZrXKbhAJvnQnixRTa8kxM1gHrg66jTNhEFXbs7NmW",
  "key2": "3JkKrn2q9CCEwAtduZAjSbq5cVhEo6qfxqHiS38h8KXt937kV77caKH1egV3ozMJ8kwQnWKXUYhLEV6oScGcghRW",
  "key3": "3ngLDz7tfZnvw7FhAzwwZWvqPNCtoXmadhjj3hTwdRE7LSY2SnVxHUqVraxDzgv3xr1qLMuKfyWSd2BiWMXyTWR4",
  "key4": "5ie51azeBM97f7VQion7WzadVn483VgQM93xLz62iixHuAFeugCdeWMETRHvVb5ehLt16iTD3cpyhWvfJqXxPq84",
  "key5": "2oMpKSvrx2qK83cpQqhgTBDHuisi5Lm37NBYBKHPqXhXFamyNzjGTkYAH4vydHpMPnqzr9pUCCkwc2hJKHSiUeY7",
  "key6": "3ECbKpHQSf552ZcyCC3NBbr6vu3rsLwHgQjiZMZjunJbF9ydBqhofnktPgGrrpe4BHnRStg18mNTgwUZUNca2FSw",
  "key7": "5hYN34enikDg6h22K6zCqemzuNDqwKNK1oieenMGtJS1iSEwXEjLgs9dbhNCqioyAGw11fofDeFwLWiYT4cM3yG6",
  "key8": "4voDznDeBsntQmUAiVAsPm1wpbtCt7qm9YAHnuSTu3WVvrRzwgA94Loh734YfT1EpLUCGp7tretbSog3dGhHkQC6",
  "key9": "46q1sfdXBsJZgNrAnu1cxW9WH2HyTSV4n2UMMTviTseL2uWUjbJha5UxdAot8U2nSWLDeNhibiELeJAkimfA4FGm",
  "key10": "5tnBqsbGR286rwMH2sW6cPB4aa114G6XxNy1PYHHwfsyzZgcKJp6Z1ABMxREopE8qTYv5xjFc68fE11DJXjkzhGP",
  "key11": "2EeV5P7SxmwgNLXo6CqJL6wKdgRvHf3rWrC4pBdQ2787rAFzhQmtHsHJUxv9Wy3JtKaAGskp1yuTzBvP639sfxXD",
  "key12": "4dtiSjGLXKuuiATeVz5Rv2Fk7CYyJp9xqtzzAmd3Nje2rEPkz6iMVCw8BDf9GQa2Mvd7XG3Ui4jFwXzem1CfWcDY",
  "key13": "5wCRT98r3seFRQrLYUxbiAwDF2YWJn9Zgo5Jhx7NBbkXHX1TwzZDpfH4adsZzgztnzJUpvHT2bgDBzcr1hWNkFo7",
  "key14": "3f55U6U5kKyGdWSfXRmrg84fbJb4rRfF5DanisupqKvVprQV1BU6e2HFR1YbeoWakAffaaxxnP4rYvoSiMXsGXGT",
  "key15": "2xDWkLDatVLNBQ63T1TM7uRL7bmxyocLTx3UJUNNaJduxV5VCx24tcEBjVaW53CdXfg5j8CnjnC3hwWhgptAXCLg",
  "key16": "4ZQLLLCiJrUUzcvSh9xTNQneRovBMmzRaGpdEaHor8KQSwNSfS6PQ6EQDcyxS69MewMjKfjgbpDKMFzo3CpSqacU",
  "key17": "qeRoGR19KQDkPK8UFPLoVTkmPvHXyVTCJEVdVf8WddZKch1mHJovQf9iQHRhBqTQteCey3WbrSsZbtkFukLZb2U",
  "key18": "VwVUtoiZiUaLNvjzGwEFuarBQBKTohrrgb65qunpEJSnEB31hezccGRaAnfLrYuKLAJMPPtRaYAHKHPpKc9z9ku",
  "key19": "4FWHQmZVkYaUimF5oPr27vZEdddf2LRWChXB4koSiE3XFw2cp6ZsMmMHrhqep3inVGNAiDs3U6fmTLH6WJPTVEEg",
  "key20": "5po9c1VA6an8MTXP2QWRKZWigNxNQ3hno6RAMmsXFeNCXyD9Y3dh4GWBuSwUE2ViAZ1YiL2p4Ghn2kzHgY6LortQ",
  "key21": "3CPawQgA4oUUBry4w5uF7VA2JsQkWxYbHsxzUnBhhvw8vc9p3ZFEPfNbjGwbsuJuu5R5pVKMLAeuukTzw7iD8A4z",
  "key22": "5SfNARCP3dg6xTxMbJEWB8uvV3Lx1TgqLvdLhqrEhDPvdZewsGNRsEcsXm55zH137MjZySYGkxwSTz8bb1UTm3XC",
  "key23": "LcZLup5YHEbTQp3dfwRg1b6YPAJ324s3ZfW7qdC7fjmUzAL2cpjkB1o6WgoT9MwTSLvnsRg7MxVFGw49edWdJCS",
  "key24": "3gxjigXP3RmeDaT5TNvvpbaA6WmR1PMdRHGquH7d3LK2mvSFRoy3NHxK3PFbV2AKxdt86LXuZdHjr7TQQYQ2zUNW",
  "key25": "41GzyYwNXmnLMv8UeZC9fJVFctHrV8kQSqaQJPGWF9ZpDENN9hnDR22kYj2VVimdbYvfaUgune4dMErJTD4H53cb",
  "key26": "4bqNhugkR677cYhNpjDSux9a8A92SzMQKmKmiT6gGEwkx924mkZ7hjcAt5MpM2UB6hwKabJvfgZFHnnJmefASRM",
  "key27": "PGCjoDLk5Sw2hSyMSzZt2BrE4cdao7BripdUnt3nUzFDrUDDfKPnScoDnrB6BMaZPZG7o5Q85czBGRo9MrAPDGQ",
  "key28": "2MVsouVDqFikYtqmFgHfz4kMqJcChWg5f44enCrVP92zb1xGVzsKDSekCXtUhzfuwZquUczjcKE4KDCqFi1RbQ1W",
  "key29": "4ZLWrHgRQdwwpmF2uSbLAYDDCT9k5nYLYDhhhTFMMcd7soJuCTHNk9a3oQnsWQgPLcCuVampsiP8kFmixrXBqXC6",
  "key30": "66WBrEitCytX51sdf3Hxu2pr9oZQHZN5SP6kWXjkQXPFm6Ws71424cM3dCyrutQLhQS8ScL8iBEgR3isALxRQTcT",
  "key31": "xLbVsv2pZaeqc5s6xnERsZ6hCoz4tV4rQxBpVtZHCGFgEQzt5aYLLhZwdwNdL38Cn9817s1TfbG2Kh4D2cyjEAL",
  "key32": "3uT49TF6qwwBAMkRTRp2GKJhjW4hRGtr5ac4n9A8xJRderH4SDPiV6bJffRgY2aMLh5kJGSnaih61XgGYweEF2S5",
  "key33": "5Wtim465TX4QcZQXuwHyRGfSZUhdTMVkn9XYBzXQDtNuvYhPnDdyJVp1iedu3tUVxSJrBmMs8TWHVPruSa2UV7UD",
  "key34": "5jNB8FoWJZjANGDtxvvHjgXXy9FH1pJRPrdMVA1NK1EFR7wAv7b275ezWqhCnzz9r3KryQxpTDqN1HPW5T3vSx6V",
  "key35": "Pe4846WCQ768qDFZx9TDnuXwS7TnwSQ4nY3isArA6LwSdcGxUn1PJKmC3sEJ3FyLAugt5ivwDwFs1v6rhYhgbDz",
  "key36": "SY8XHua8Zp5ywycoeuZDp27smetUMVdmiDtd1sMi6ZXh5H4yiJq51EHUzsWv4qvN6pZ2pyutNRpqVcLxGgpsRoS",
  "key37": "4obLsW9gUxppowZnCedx4L1Ujksv3KzFCBeNBQYBDiqFh6mgoD1baE33JpGQQD67Pr4qmi54ag5JS3NK4ZY7ZfDa",
  "key38": "1GEXY7MjLNG7cvEebCeFM7ZNdc2k4xzkjfiUfsJirwXCAMwSYbtRTMrbrCFJkp4k32zqF4UgPVqA4jmyPhLASqd",
  "key39": "2jN89rCpE8zRQSp21GDLwj818BDpNtqZpPjwhA5gwNuCgFXizPfA98GgLSMnfPF36N9VAoavMAA547Edbc96gpuh",
  "key40": "4khcRuwshaXRqaG75BFG4rAZhdv4ysxSU2c31j7sfiNx2vfEoFocw7A58QaESy5q95hzT1qiW8LKUr9V6tLZpRw",
  "key41": "4GUVYt3fWbRssmbGerURgKm1jCEeVH7jgo5e22a4CeXDsteGh9z6fzbJ2t9R9HZJ9BAZjb7G4awuGPdnAfiMtZuR",
  "key42": "USq8vkwV1RKBzkeyNGpG6LjQuzQVDXufBYKsjG1fRKfw4wCUtxGw49q5ZWDVhQEQ4WHcZN15CNNf945QAABbs6g",
  "key43": "4kocvg8CqxGJKmgBbiAX2Wsi47fNFdZ2ErUD2YsKLjdseDzi3J7amFg3nC3fC695ggrXr9k8AUCn8FP7GDRLEt2m",
  "key44": "55VWAEuyitAqT9AmC12rqD99yVYAveQf2vEYunAEvgtszHvjvmEkAnUehEEdR9YUbAaTRAiHe7PXopmhbj7pJYo"
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
