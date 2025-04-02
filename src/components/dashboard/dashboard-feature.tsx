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
    "KFD7zPQggDjE3WU3cz3WcfLZ2ttTxUgxd39CQXRv3Kxh8CjXR8iF9KGseGDbFMULAnXyv94iLKe3RJYGkN79Kd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tF7aDbPsPbByczHCWdYafHoGPsbTFPay5KcWPwhLo3BvptMcmD3RNRPKbLPPu6NLF5dDUBkW1sZwy6dQrCA4ywu",
  "key1": "AD51BwimKKH1uNSBFARGgxCicbH1HeL27sCN3KycXJTbuFDPvix4rwnw1sSmZq8DtkMTnM1PUwq9htPgxVck48E",
  "key2": "48B74qYk5uBfu69hDtxQAvwbFbNgfMe7XWwx4vDwcxWaj3x4FL5s36QExcrt5jtDFY5yG3jE9kx2BvAFbmokvdKP",
  "key3": "mds1QPo951r69h79trL4bPfJKe4LFtaiJYZNSYZmcABffnYJpSF6kVs4F2e46ZAa8YxrbZ72fdbAVuWr7WEyqtt",
  "key4": "4Z97KdgZ8n4cvjTH5qAzS2GcyXQtNwoJTgvTJ1TphYwJ2m1ya6icrQBJHU7QJVRCAuodaXrrKXD8czZS98k4UsNE",
  "key5": "4SGsbr7YXPWnY67kHugAjRSNQ7tjRFSyZjR5CHYfn2WrQVLrmDLXwpCSQr5WVjP1T2CSW7etdoRymgCbzmCXm2AR",
  "key6": "ieD8wPdXrxxgV4foBJn5jFaPFrLHMwFWXeQuUHKr6subzozLE81oitKUYJLMkoSJoxEEhrdTwP6VhBktUhY9DVQ",
  "key7": "2NkRPEy4aPEdVe3XiUpqPLn7kfG29C7CcfhR4d8x7S1YrJjhMd9P3kkMKjSbGREr1HMVUNAWPffJNfwzNFQP7iMD",
  "key8": "3B9xE4UgbXvewG1sZYRPhdfW6PYNZ2vXjowws7vay3mu74zM5S3vYxzhHJdo16pzoafYgasNJqFVjf5yCu1napJ2",
  "key9": "44qG1F5zYAj4eXs8u9SEqTz2zjygY8xxaGiSTpqkCSJ1xKLjSBTchu6YNcvSrr61o2A5GC4R6G1tWPa9gFwxTH32",
  "key10": "5pk1wpxcnKFWv4eNKGhUjThmdj5j17SbJ135RR91wdCZSbmy3f6i7GMLEc6YD3byvQUDySN7qXbsb5w2DHFVxkA6",
  "key11": "386tFtkvXtoqXuXoCEZRE7U3iXZCxpkrjgymadnsmiYdHc9uog8LoRaWTZZN9wJPr8GXx3SsRkNDWxihnrXSqcx",
  "key12": "2DJyLQL36rphJBH2qAcbX2VRBK1MJXVpG5KGcnJ5jrD9DyKY8LxbSU3fm51AU1FL9j6mKKrGinPADLS5tQ1kcXxD",
  "key13": "4LKzteLnWyYoNCGPiBceoGnXdZmTH9JQ1s83hsRS5jAWxCG85YpVPPAU5tfNaQ1z1WMRvxq3TnPKV7Qbm2YmmqT9",
  "key14": "49ZpXvpGHKHJsB7DeJSBiBMv14eFWnKLCo52X1fbXL7HQPYXCKQArNq164CSH8hqZTgeQRozE7k8sFMFtK3fgEbb",
  "key15": "4bW2j8k5cD1wzer2iM7NRHd24VBbisGYHNpE7mFhMfcPR6G2MYBoxQ77fuQTzinCCahXEv4KEooRdKWznWAizvu7",
  "key16": "4ME7SPBKmjjgQjVwBeJ5wgnu3jANNRvdurtHfySS34xqBuLkGNNpnVrHACNdqHkYx1fgHCep4NHTfPsz291MH6ic",
  "key17": "4D2th9YA7o8Ka2y6RGpTN8LyppMY5KaABHEiM28xVZRsrgZ6WurvTm9XfArYVtdX72KWj1w4kdUivRANSjFbfhT8",
  "key18": "2tAkN6PnG1vjd7To6QmFVRrrMJUJheBnpVhfQpQMdGzGymrxGHtGwjtGJYnVyk8RoXMPdtwDf6Xo52Anxa1r6D5u",
  "key19": "4DjaDo6VK4iguLWaQWi8YBBxzqB8DiYdPwoUvCoxcFJ8dhwwug5ddNrMWa7mGj5QR4C6uW1nMDTFawqxMJTjoKkG",
  "key20": "3JdE4YdELJ4LvjYiMWi3Cj6daUEKAHZMFqXSbYrJAMnoZPzYgdBT8wRHyJFoNtPs2U4fhJTBUPTo4BZrCUd5udxi",
  "key21": "4ovJRoNnYzbf56RM8xoMXjUYGp4ThkmSY3Md9YF2rnYLJTtDf4G8ZPyj4S6cX81DDjesqzGrV2BJvGb7PWECrDfd",
  "key22": "3btHw4ZmFYYZa1qDxCKYcJLcf76aFKPKKxUhTKdXtWmd726cCHZVtLhrBoFJQoHRYkAHJagZKaceRjHiVfDiDs5v",
  "key23": "5Hf9JDQc1eyaCXe5XUxbR5MTuPQLfJTURC2du5eMQQJh8XdYP9wtszwuosH8aubb3o1NZWDHvojFYAgNWyvCqcyx",
  "key24": "5z6ajejpPMvFkSDV9fFXn2A6kYKfeuW2MgLMHU4pwmePsgPvPRZ5NcQpzo1SnGKR9931vAqYQayBjZa3EeK3wg62",
  "key25": "4ALGJpgRdJ1JjsV95nTjjURnJyJkXMzY1my5Gs1CqZH2pf4p7p1wLTUP5B3srUyeZQDCbfcWnMtfUGTiMcdC2kLV",
  "key26": "5j8TnSoCGW6qVYoN9VmrZAU8bQfefVMPq7hVGjacJL2T6KWkhxS1FFNHxPNFKxhVWmfgoUrZ64gJonBfUQHGfSg1",
  "key27": "4CvJeAiJfxhWAHb7Brea37cizJRk2TZG1gQQsHw2PYQb5hRhPFvrVnZNGFqarA17HMPAQKTmcmFWATZsFPdAKTe9",
  "key28": "2v4Gmq4nB2PvGDsvQF6PctiHMmsMqHMKrUBMLReUxzDGBDJEWGU5c7c3PDLgEakywXZKHLXazm8QTXF9pr1BQuc5",
  "key29": "uGJrro25BXa74rcELe1rRA2p3Sz2wpNY1zuE5ghCoDwNRfJMqcHEpnyevTQ9166pCb7BHj3aRWSurS8pFfBSBnD",
  "key30": "4Xw8T5k2AvCxKBYou7Z38pxKP1e9nXh5TdzZRXay4teWPDx6aTDdXmrp3Lq8trjvKNUNUhMiUwLrM9QVHdMKoQCJ",
  "key31": "5XXJLeXpCKe5ipRAwvTTz22NBNNnVTQGUzzFLee6smFCHR282MCrqEYTXkWs3isnw91a7G5PqomanKaKsmVBdz3e",
  "key32": "2fQEzbro4hXK7xypAN1t1SJnub8eWrviPRQdeBoR5qAyQbgAUK9T3y1FEXPKAN8kCjbLdS57BWuTZXTwyKYH2vV1",
  "key33": "5pM1zYkkCq25PiMruq7uwoimwfdD4szN9t3i2UH8wG6etu69o4Z6Zohi2nkav4PsnAnRskVYeZ5nFBoDkqNq5FTd",
  "key34": "2NVwiYZs4LyaipufNQ2jSppc9Bwje8vGPYG71SiemZy9PdPimVAyVfTtXVBBTR7JyKPyXoRxMsxQpoK67WvzZNEv",
  "key35": "5wkaLTJeane4ZKJkGA6aCh1S8AyaG7mFDPqckRPhfLQfq6GvvwGmapaa2mAh7cv5uJ7HvDjtz9RFPnDqwwABeMhE",
  "key36": "3tf98UdrwXbQzVyyoxu7EQ1B17XqKcEHn1tckSLgbxKvdhDp2wCGTQBWhAcYdB5K8V8oHDUMcqEUc3YDYafoxQd3",
  "key37": "2Kn6NbVyyjmK7Y66qFnWWfUx4y8eBWnE6Ntm74EPKZobn899VMv8nvf33jYGCB74LiiyYFSxWrcRGFKdPM28xreq",
  "key38": "5NhCGGEpJ9jjq2QEZT1N7oPA72xx4YUWfnzz6MTc23KTvd98RsqfF8edxFHL2qgrM6x76K3Kh2oBVRVqBvJW4pGd",
  "key39": "2wrJYCbYhTtEVC4pEEnkjTwM4ZLFE5pQduLV6XmBXeE6fLgno2FokV4W59Q5rUrb2XVFb47xgJTCCMN6kCkijzLJ",
  "key40": "319nVGpZ4icdiyhVVmbH4r7vML18sspr3VmCy7Xacao1XkbUdFxvmQT5gWd8zfvfVyxc6ycHKa83u75rAp3wxtCA",
  "key41": "4jAeM5uDKfiegvzRUPNpmj6YiQDXCdDh3Tnzc8sAWGegEsY93C3KTpKdjhYFF71JWwKV5cfruGy5TDN5W7Tpdr2Y",
  "key42": "2ESNeLhKiWyGWg3B8NkVBgKujGXuo4nBXwQFjqkiBJ99d5UiMBLmAc6vsDtv8MYLjZdHW3NDNAY5jpMH44ZrLzbQ",
  "key43": "3ZwzLdLby6yw3SHtFexNytTrbGG1UiM9yZTRzBHfdqEvUQSbhoBAvH2g6MS68srwufQGE3dRUmefaH8NwrkWes9t",
  "key44": "4wTcM6xFistErFQGT9zhS6Qd3JCwwi68a2cjChaF9rzZck7WH3H9QMZ6YtdRwyYqNe6SfqfknidoNyBJh6rMKt6N"
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
