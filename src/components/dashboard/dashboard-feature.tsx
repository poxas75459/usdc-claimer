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
    "VSzS8wCtMKWz2HNyxexfkw6QRzSiWZJppci42HDKMavMuMnmhecLMTtCCVB75R1iF6HsgAfRkG77ff3zzjR14hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PLiFZQQgJEAZrixJS5BqKSECUCf6pMmfoVwfyBMKYobKJ6JmqJep4dx5J8AkUFseU1ckAXMcRdxbp9iEHGDVT9V",
  "key1": "2kSVUzRZNwvBKLPN1ydavk72KnW7LiTtqTvKRFCZpc81qj1jseChsuJZKq8VgFVFvg3chei24nPZYt15aWLvf5TT",
  "key2": "uf35MotGYdzsbzxjxa5WSY3Z2k1sae4BxFPqP3G9tPihcxy3G5FCfw4dd7miu3sUBVapW7XNAetjbHoQNtVgTg2",
  "key3": "tirR7jc4hSgKF6GTrfJCPzzpCQP2YNMPfNrPQRh3L7eokhiXbbsomZzS3hyFyco2kTBisnBvq6G4pgmPnC9ntSv",
  "key4": "2fJjAERu5Ppxqw317igVrzFu6TKuiv6YZbPjakXvVTazb8LDye1JcFmf3QCFtNWPkgkMi2ygz2rWZUR6iCXTjV9F",
  "key5": "52i4GhNySgEHiy51qwa3pPJykFmfrwc8rMp9v74bp7coa6xabLAqWSZhWghnBnLhbQjBxpJDdRH2uRvDWyjP7gJz",
  "key6": "45onMtKUyBB5EcAdUCP6sTEpRExuZZ1BoegA8X7mvAsZW8CPVtCR9o2MASwiN1L416D8LRy5thdTFCJC2rdWzb4g",
  "key7": "46hbmhQPdZRXuX6oEXGjNmFHAieyX3ufKdiWrymzjKwKKE7NQKny2wwp7FiN6o3rbYZ7yKGsTAAvQyqiKGGkeurT",
  "key8": "qWvSx85prWyTeBD3MoP64NksJtMuhdnuAeevs9XmDUmAo2SaxAjU32yvPR5rEQfLsM13Dswhd75H71PNniioA3K",
  "key9": "3QMeM7PB5wYENBTos7XFiirkLbd5o8E8GQ6e5VeH3ieUFXvmyjm8o7FuxswHkmNcSZunCNm4JTXtcnwJvoNCdZiX",
  "key10": "3tC7wpc7moR2B1KubsungEPbZUZKFNghdiMLX72vc7ayAb6244DdsHCrWkgzesTkSKD9LtjLWyF4n31yNL7uqDYC",
  "key11": "2xtUXZDGxwA7SLSkFYiFWTGS1sZd69GgFPchpmVsTo9NiAupZ2EqxeNoFDjrPKjbcEyLymG8P8HaFyyAz4EBpWvC",
  "key12": "4A24aF8j75m6Vc2NnBBDauaCj8vpHR1fdsZEy6zvxCgeztyAQQyRq2r5886gjvBreX8J1gkK9yjBJEeULNFy2u1C",
  "key13": "3gZAiUsJTf44WRjq2fuQCnpAJfAArfE3TX61qTsTexiwj9WB5Pz1BZ41JcoJ65CqDhaWrFiX21CaRTRSWHnHi9nR",
  "key14": "4sQrJ6DyMUoP6PK8R7tsgkkH8MqBxX4TkrXSLocki4bJXRGbH3CroijAU3cXTYrgbCkUT7sHkKTXojANYcp5Z1cV",
  "key15": "2YEcY2n3eBVTWw1eSgF3BAdL1jpPLezgg7SBShjEpfCBcxg71reUzQG5aG6HqstFX9YQKE8p4HfEjXaxRw8hxtsP",
  "key16": "4u5yXQTrfMDC9vTsWDZyBUDoZHmR5uCEppg9uu4HkEjWNnKboSzqMM5EUBsz3iefdhi7qDR9MYaQdBZ3jfzCVKcn",
  "key17": "55Rh2zRQJF4QWvg5mKenV51PSAMPFeH4vXrVXE1vJqDEJNxyxDyrLsfXdCRfrKxVKwP8w47hRp6v6km9mwshc8K7",
  "key18": "gPrDMBLVZpyg6DzXEtPhiHN3ns9QiPH7ksoff1TVwBuPeQS1fy4xfLaCaajJk2siBgnstxM3CskjXm8TmweyemN",
  "key19": "2jvAAYFddSvMDLsJYjLQPJgagABLieSTcY6nz1i98dWcRXxpSjhnRXtmC9HBPFvELLfxNj9GEcBVHrhi6YZvMpSm",
  "key20": "4A9qDWtRdHEbzdvkTPTEtW7VLwNTjSUxvTUjJpF9JdYdMTwvahPkzE73jM4VGC3LgqhSxbtYHmWwwmxZbFFL2Em",
  "key21": "5SWiMoJ15BRxddpKHoTQeCoVgekw3iLr31v2k5zy8GVZeFRMvGZEe5MgwoCepxtcMeqZPa97osGArFbVimVZMgnz",
  "key22": "4Ck4kLgXPASQHx3EVRyHdJEABXikoqJyJomS4BnPAyhi4zquxc9EkbTJzhGbrEdZuP7rwcZLcM3fpZaoxcDfiVs9",
  "key23": "4CyJcKLRzXVuiJSm3kVLkRRmkSAsuBJfmsjaUw4aNPKwXxoS1MRHoXK5LiD6KyX44WocvDk6cxjvmQrrbi14tNcu",
  "key24": "nJggKM2s5x66dXbsgqDQG9ujcHiQwMoD1LJzPcGwGAkmDKDNrximzVpGzWKWADzfYBVoWbDkVGkQTyvqSLv3Lwb",
  "key25": "5tdiQ4h5knPLnoBYuRqrJJtNDfKKHpp8Ywxvhp4eMGGps8okzHTwFaxDBG7NRS2ePJ2B9TaH8NAqKPtoqyZVBmNt",
  "key26": "38LmhdiYqk7Zr43jgbg5J9HV8jBxrKBU7LyY3iTWaP5KeknZsffvUYVuo4GSKbukNDenkGgEmKPWkkBNRRjUQ84m",
  "key27": "4mGZGkUdLziA5fqN3K8Qzs9kRApbrdTYNhEwHGrmDMptzUKkERt8RPdsqq2DTDwqx1WsdUKzqaoXnAAvrfGm3DNw",
  "key28": "r9gQL7FDa7KpoFGuDTLYMhXa29MQ9NRxM5jcZVuR3Y3c6ibP8RrfEippTtAGA2rUwtaLszwTYWrFULkGvRP3egH",
  "key29": "1Ej1rxAQuRH9EBBiHGn1UTeigbNE3kusfugtkaT5Jpj2Z6umt6vq93JRMgHGHxiiCBi4t8X3ESB9Q7hRTySYys8",
  "key30": "4p7PGdPCNbmpnzLcewQWPaE6rLRAD7fRC6AUk8VfZRKXcLNvRjbj9XA89N2NbbuqMQCAeyoHkzQ25Bj45AjdWFUS",
  "key31": "33nWaxPPxdD3LXtGyngWdL58ECyHQ24KxMGbU1n7u6SKMqfVMXS3gj8zHwN2oGJQutr8v9BTjzA3XSCMmwEcCyKB",
  "key32": "4qVgHRfkXSVUCBbmpgQhLY1LADvjPn1RP28hR537vh6pWtjq3t8bFUno8vhsuj8ADm1VWDJx1w9iijS5nFu57AzR",
  "key33": "4Vntx9yFwmYastu2Q86zaLmitiXCNscisiF1qdppRunCneejyP2dYaYzoMqsXeG4WQjU5K5ghRdDVHKxHiLxfFAg",
  "key34": "5AA9q4eojQLnEmVR3sMZNmHwAvqzXk2MTsCiCdSa5ukz5daarT58S8Wk6LoRVqD338LL3VgcBep5epjWtW1nJb88",
  "key35": "4jF2CcPope113v43RutNHfpRUdnKg8frgUjKaKVsF7mRZCMas6DN6kUjHWV4cCPkzC5pMhFS2HUXrfEyyUozN5Ft",
  "key36": "2Yz1xzYFEnNAu4LkM8yDfG1pZNyVbJAr4Mo9DspHDSNELVnW8ECNWr4SKfvGqN5uvsABSCecY6mHmFKrocKscino",
  "key37": "4wMuUc1VD8d9RsrXmggGLmjPms4JK7bGz21waGcKuZ7eMUJWv51jzeDQHrMWJyVaxVCeNBrgJrZ46736XoX8K683",
  "key38": "5LYbepnG8zFqB6ncSWPbaDGivD89TUoAMXKjNW1ma4snz1wNQ5MQgLxS8UkVJtNw4qxJAYxjBjZp547Qu3CR7fk1"
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
