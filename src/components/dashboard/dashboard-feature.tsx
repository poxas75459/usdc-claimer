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
    "5hnL8mgjH5bgHy4KRrv74UrcMm8pRJ8BhFUc3CKZ3ngQMRW1pvhiHgGuADYDrBduNiGSktBamVPNXSv8RSEu9ztH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kwUzhsaEVu27auyaravPnVb5jKZUooqAm9XxRMyNyxbvuGNQ3FCbdYqc8oggdbJUufspy7kfH2zf4N68EZHmxZs",
  "key1": "qLshzVxv2Xi9RHBMRFJKv2ZxQUKC75ocE85WhCiV3wqhqKwqookwGJ3RQngryx5wDdWWhwVa8oZzUXZtm1fUp9F",
  "key2": "4LNCo83yTWCA4dj6jxXkXTyhV2YMBWSo3bJCE2udYRwUmZQZFggwLZgwRV1ZDAgTFdFwnv4bMeVUUGXPBvYJcoRc",
  "key3": "29DcTsUEibtXp2FfEM16P55dsvGGP9vV2xLcbLAGZaQicwMFMyRnsKdYJoa12xVnfVcZbM5c2hTcBsCvW3wZymmZ",
  "key4": "XR8GgTitdg5ahwLJvqGbCBdKT1ANGaX4poHnG6NBUVPapk3QosmyS3VUmgvr1A85SkmPaGvZG7wjEK9deTaDmDz",
  "key5": "3wLyZUMVZRfA9T8RkJBoJjLz8yFtNbHt7TBQi2iQBARPahimkCGDEBCV42tn7zUQy7JFKZMNMHoTg1YsPvpeCQ6g",
  "key6": "3PPGxKtYF3nc8hrdB5M6G5dZkQqR4FBqnQQzctVq5UKfHCFSXT9Gz2VnRXy9yL889eo6VoH3KXDFwvBPGYtC4dh",
  "key7": "4r3NeM9Np5Q5UD35iuZLc7bfF5W6Y9cfUBesgcXBHM1Kc4AjeKnriSr7y25pKVcAcAhEnvaBpKe9Vj3iJsh67Sen",
  "key8": "4gM2xFzpndAkYZoyyxzQPjQNCSPqcrBL9363EKfn6cStjZsUf7GJjVktGxEJXhhGWmkzzHa1PxgGak6xNrcm4h5b",
  "key9": "5MyYwAi18PNVRJnkT3oexH3KmdRvDYguGMtZpFSoRavb3V7kUnViWZ9cH8jS9jtubqh37YbVwZxaEnJHNXTJCFVC",
  "key10": "4f5Jhx32ex3qRTJykvJGGL218Ky7oAZe1pY73ZM8m2pHET3nJCMZLcxHxQ67Fxi1VPKxYBhiLvrvtVoUhDQcWjBn",
  "key11": "67RCVYNc4jhHSmtrzGv2JMLPwTRsMBvkcvpZRLEbawXjx5rWRAsfLsqdptoUZ2Wh8qYMEeKZQUB6jrapwG2XJ8j8",
  "key12": "4iLAGq3rLxH5aSuXD47K23zjDQ1kctPDH5ggaBLWb2XNzpmZfmE7n8oVfbKb1uRCGSJcDuQGXLGAbhkRpL4g3c9",
  "key13": "3fC5MxniQL9NEDvXQEM87ryzFDo7rb5e8rkQ7EqMMQ63h9xYByMaDmicgugj5WViRuf2n3V6Y21zcU8shXn3zG84",
  "key14": "2W64iZrER5STxmmMqFoeFnpCd6MYRQ9M8iuffwBhqrSi9EmZDK7m3f9NTB55uhKx2wpxnEtSusRSVH7Y98LhPQPe",
  "key15": "2Wi1NcenDkrrRcUXgUP1AD46AuVCjERcfnQ8fKuNMrRbyiCtXYhzSpTiy5QARjKCsk2iEqHHWxWQFuFuL3aswCot",
  "key16": "5hXR7hNGLyWPJSjc5i3DCpo8UCHUk4dVx6TteDtfFd1jAHDVveVLFwjTxenT426spUwVAXPfsN5Uw1D4fBVwxqMX",
  "key17": "5GwWCsn98G2mr4UL4c4ReDYRkdE5FmHWuiGN14Frq6gLZ7cNN2pq4WbTNj3t1g9NbixAuCmk8ehcPRnn26fe7Nyw",
  "key18": "2fEZqQr55tGgqr5WYhJrz9P4FMLd9sKvWseJSXYuTJF3FykwTn4bpoFUYczmigcCXoBjqukFJLk4THV2d2jdLpyD",
  "key19": "sCZgTgTRihLKwtFGJ97ghbm3jD4MzYfYqSEUAEiPqiiRcY9evC1ApaCfqfYWUTbux9jfh4USp9fERXSFjy7xBV2",
  "key20": "4AyTQ8phjq456aqAjabKDZro9PVZwrB68P9caSaLViGBeDpMVY4giL9ojvG8bDMVHXEuz6Eh4fw4ajcG3AAPhkZ1",
  "key21": "2a7sbjkncF8izHsom25G82zjzG1QRDmbSEx8yQaYEJKbep1XjgEZd3c3CqVsuUwNefJSKbS2H7zie7NJDNzfQAmF",
  "key22": "gtKrQfmkx8gt6vCV9joimuewuTjuqxMmLcWDxPbVr4we2Wo8UeAspCr8fiAk6EC3WQv76SsuqXTRocVtN2g8WKL",
  "key23": "5e6Ytj3wHmZ16L5v5rYVwwFib9RLjwzrC5a2WkyykobYuYLE6x2CnoEABV9pBm7g3DLgX9w33QCDvKFqcsq5Y97X",
  "key24": "29gHmzJs1h7XBF2r4mzNtD7MQZVSBxqoct9FVLNHiegZRzdf8rxCAueesnFGA1pqpSdwUxgJwTaKc9tXVDRqC9Lb",
  "key25": "67r3xfci891SuuC1LsN5j7HWW3YoVx2JHqFpSdvndgejfcFxGvyHBNgmoZe5ZqBkEmAyPpnD2sbDFM38XEfSzxJy",
  "key26": "34f4jxUkgyKa4EMJzLr8GKVF8DrL9dcJzReaZysxCtNHtXSTsJwCPWgcSh5pKMgrdwP3XTjecDYMcUK899QXJMPt",
  "key27": "4JpZ1mtdjSeHuhuuPA1GKcUExvqQfmcDjAfj3GSKs8y9oAFLC2SQA8PExtZvWf5si9V7mwy9fLDCfDGEqfjuzEwz",
  "key28": "YvzKnfCS4VinXgbpRK2tVpRnbdEZHL7FCrqHXCERg1VTPvyMsq8sGWrd1aEwT5mdpj2mwUxcB9GtUWrhpSCPCun",
  "key29": "3xrs4ffN9ajmzNmf8M5mUqLs6NqKBL95C7ADKP12qEeoKnR23JSqaBBJsUnpL8GXazDGSwLS3hRHsfkiH3TSLVAs",
  "key30": "5v8xvs47CinU821DDDCf68uVtSe36UTRLBLYfxQPUqTmH1BKfekHnxBkw45zYxwfi5UuSePTabZCDFoB6VLAatdz",
  "key31": "4Hwdj6rgkqyiuC6PYQaviVRvnoSK5vY21YAc7oRiZTNkdaoVScUwhXxtqW3pww6pEJ7CBLufZtAmbQCFfDcmdY4P",
  "key32": "2kC4yANyJvDEqjKA21sEcFVdKZQrtaNbLDBcA34n4sDLe5mPbKdm7ErmxFBTmD7TMj9b3HqWyJ895EHgw4B3paz3",
  "key33": "5uRCgg3pv5EprgpUEuBcqC1eCMetCV3Ey9vjsUjLQjvvJupPb98itpod2fsNhLhXVknL8KV6rv6ZU8kxKUrHCvsz",
  "key34": "JseNz6ZonHdPFJrP8ikDj83U4vYyjsFfjbxpA6FwARiCRspXzzahQvC1o5sNBDoHLYG29voKzvEXQohahHUTaPQ",
  "key35": "3jyimABiwhi4PfgTADAzvB1SWwdc4xEE2BoN4ULHGbbShYVRt3fAbH5skdYuyDCnNw9HW1HMYCEUjtF63vyVhXQh",
  "key36": "4CK6EAzDjpApVGqRUbfmMi4V5vwutZ12oh8A3si4vqnsFiJzFmzwjWC5az8rv74WMshn9Qzaj9xCGj3Y3xFDYqf6",
  "key37": "2KuohUR5abmBby8PVZTRfSV5FT7xc5hgoxnZSnwxnd1WkZsMesea425A6Jsp6xcNF173EnvCcpHBxBCXGU1E5KsG",
  "key38": "HxbBSvuhTD1mMPhyLBo5GA6pBAN2mLhuqNq5Ys6JNYVUPDxbZGLKuUnGF2xAwhSmLkwXuuFaKxvuo99RJ4M2Lsh",
  "key39": "5sx7BaCoRtmxGWdg8bKFkZADuYH6ALrC8nVSaVVx64nuQXkjkhmmjpme7hhaYQ9dpEtAgL9TYvs7VgZ1y3MtqffC"
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
