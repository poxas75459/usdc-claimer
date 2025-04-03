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
    "31zGoKjiiTizhZe83NCF3GzYwSMoby5pHu82kbEbFwhryJykSQns1MnkTdw5prkzLgUL8fEY1XKVCFyeL7vKaXoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRG1YFnpxgksjVZRiuW7zfZXWue6dziYj2f81JRQCeFfohrMKXTM3dSxscMbo3JXbsUNKhvMkq7SnRCNwMY3Kkv",
  "key1": "3mLa5QGSVUPvDVyvTzaALypoYG8DtevZ7AAqw3TSZ1tcz8EkeTeGJJ9RJJ8VEvUnsdBCKZSKLwymBC7xcKSRGL6p",
  "key2": "33LTV7RAxHUx1EPdMTTyxqopYT4gbBjnXQmmHRAhaHMtA1inkC5m51sHjowWizbdz2VxdnfyCU9FK9UnkM3cpfN4",
  "key3": "2suogBaA4ExFuu7tZYzjL7rqzHcf66BqDz4ors1r8mg6GGyP9agHUtELuVjLtfYHw9ZwN6MeEHUZu8ahXzPguVhJ",
  "key4": "wsfAiAaBFxriHbH9jfKu5NLM9ZD74gfpuEAz9hYvbtpu2FDAE1BkCeQAhKfEDDQ378LUkd7n8zDN6YVomcau2Jd",
  "key5": "3WhWGsGXKnCUqbpZ4QQn5E4sDirSd74SjatVsW83y2EbGSzJYjikbVgmuQngykdzZUCSWSLepapVVrYwDrUyoXop",
  "key6": "3PBHAeCVX9hDbvmn3a5bPVPq8B4ETrQ82SDFTvnCGAA14dZmBJjmZ9gX295FSus2hh2ou1u3k8YFjzx9sNQjynma",
  "key7": "2oMe9uxBtcm2fyRNz6XGgegXqiKGWrmjeKcAXwbbDjtdff855ShK1RWangTw6GypYz8kAUsCNA3eyg2SbD6gVkAi",
  "key8": "2YxJ5q6RYdzV7zaozNNgVbkrPws3VYqzgCWdXERuzdKUitSnPBqLSLt5DA6WvwDpVud82Zinomo3Qu2HTTP4mQSd",
  "key9": "2AERNBNRDevqgukqiaGFimPf9yuh5KoYwcd5e4ywAtaJoDsLYXuFmAseZBWpddK226gB4KdSrbiWwnTxFM8kttiq",
  "key10": "3ofBZTUj2RKeKadFNnevXnJWbt6owAupR1SA7Vq7yY22b2FJbgts2r7qxcMFAa6JbXBQ8NpXX5T1A8NWGjnu6tTM",
  "key11": "3wFFrWUcLoUAvhTNTpTxhjfANRLDA6tCEfLnUAZ3KbDxmKRbff4oCY4sCGofEWVMnSQFyFT8tNZ7LqtnLzpXwtsA",
  "key12": "VLBm19LYyPNocHzQzT2UvtMhKqtDo2MhrX1TpbW4oYEKmMuB7jmAodzWmrcw2y92SRQGkcN2TaakU4GSpPRZFfq",
  "key13": "5msA8pvn79MSfH2oak3iDBSL2Ztduo3LRuoNK7Bm9ry7Ys1RbPT7DqhmAXqC8isu2HRx9ZkeB87qGmPh6u46pkQv",
  "key14": "oqBmcEq84V9JCnaHKB26pdaPenmjGxUhsswk2CzWCsCita56tvqCLRxsYFwsTe5j8D74wTRAgGxCf5kDt1qERv7",
  "key15": "4DjUUZBFysSzv8ay1fAPp3R9oRq5nsEngd1zqbhuiHn47Bq6LhQWBNVLQ3hrFpPj77pKVRCUkxzp3iKb2Qij6QwU",
  "key16": "xgBagc3EctdDTSzCVCEHQYKEGvvfvcPNuYPrQG3nsWziLi2qCHjvD6oP7fYNv3YabtzFVtauP6pUftiSkfrD3QH",
  "key17": "hgmKbSCbhLg2Tg4XJFDkX4715g6HXiZsaaCrWk1xjq6W32U7jLtY4K3dTNp6XaHC74r87P73hyjf9neUdfZGvKw",
  "key18": "4vbv8N3aKYfQMR1cNF6bQPGSRcsz7DtC2iMv9NBd14NtreMBEj32nUf3PsUKmqad2pv4zW7p2gFxtLQ6GkJaex9N",
  "key19": "4J4Ejro9A5N46GDBtepoTPHq4zYSM4hTymqek7HV1QGyJeCZTeUohB5D5g7FXWez3NkU2RautBD8o5F44dT4nB7G",
  "key20": "2foE4JcW8x3XCDWKMmVqs3dx5aC2GaksaEeJ6bAwvoAPTtguBJeKkhy985wXhEDBUjeVwoPapsKAD6tjYEsVx8X8",
  "key21": "3eGfz4LxKfLz39NZRPTXkMuvUS3WV8cqn4rQ2jwmp9ud7N9NZdK8ZQe9eLPA51kbGAcRNgiFUZoD6cKRukuonibR",
  "key22": "3RCAjXaKAUuPtcXUHBQHptZrVe3QB7pxAX26wpL9LPHwUR4UtmaBSmmk4bm6A6MNzDeU9nqLWhsGZ5yFjS1ykvDr",
  "key23": "55RYKXgPFQjTjiRejHCN7tqynbqF6VjS2dLmfKsjEjFC9jFYNGcDB3HYTxEj2PHM2HWdHd97hkbAmVqq1jACjyb6",
  "key24": "33RDjrQuVJciLNRxXi6rsyLSEbCA42dDwWJQV93NmM1aXdc4FBnQE1pQB7NhcSgm94kqHGAUWExNd9Ufds7o6sjk",
  "key25": "4szwHXDMgxUUH9FJdSN8Du5RNzYzNjBuc14NLdSsUo4mPe2v2bRiwbX7sjxdWzSJzYtarfBiH1ZaLPoyGJbN3Abs",
  "key26": "5QJPJ5qxeCSyPUN7VBTaSk3H9EzV2wKxUvZbXYHtqfkZ1nkftC1uK3ekvZ5bPMdAzKewbCxKbGBmB5jpefYh3j9Z",
  "key27": "45tzDdVTGXPuMMCCiu8KyVC46REJXMwNW7QsnCkJt4ESDxq5b4HSAG6KiobAiiy2acTTbZAKLGCXJzUUnZvYHtiA",
  "key28": "2UdPJLhyxcspEEDayo2oxAw8jSsqDpF7QspjrqEu3zZSwoLGhULTcCavKw3DiN5yhzKSdJAVu8zvwBn5kAxh5hEL",
  "key29": "43sXgXnVJ58dP2PoUQT9oairKU1iZpHpW5wWUQabEhruxCFYVYNGbExZ5HfQf9tjuktNGSvCynGGvsSVryAGn8rJ",
  "key30": "4spQu5rpnCxzQm6biSf2VNQTJcT8kuN67qscNPEiyySTCuuRxiveJytUDxjh7aVSPCUL7wALFTtzRTYbF3nXpLsG",
  "key31": "35947y2jPeXwkcpxogBfCtvH5TsoE5TFUHFRhfeeYn8AWfuMacgjXrSQBzjJD4qs4AX9K51pTNQFqvhQgxPax68S",
  "key32": "2jQWzaNDWvhQtpfur9SefjMUAHqXZWTEGBbTKYAVmF8FMm2uXPjpZXjvx1g95ZxLv4P1QVXodtkfhQHhdPC2WZyS",
  "key33": "5enzuTeWz6CzM8UhDKsfiUhFq32UuAmxCu7fYU9dAg2uTUnLMNJnsDGKjM9HnfbbMKHvEFURpukNtiWqdeu2bag1",
  "key34": "51qgY9vF5sCtdgdCkZXczCdG8fWwTuRhEcB6HwZMg6mHgEX2CDZMkE6e51saTrT7LpavRcCBNC5mwhTSDhGE37St",
  "key35": "3Svvde55Hr4Mjsefu4kXiPFPERYkKUqBp6RfKUsvLrmxSk1ET6v6JJLYCRPoT2U3GPbBwQUeyZJHQHb4DTdFBpEE",
  "key36": "459iBa3UpDGDMMP13R551VbpmdTyJoArp1tWb6u6w1TX8B6ETycQADtYny2cn4P7BTTEsK8GrYiQoDnucRtC4P1p",
  "key37": "4wjrK7F1MiCsv1PwMT3R5J47FbTjEGVBi5eQ7s1pdfH5KHz9gSL7uKzKzDjVMTNbLLHnyAGqSeVHGwZoicLknzPk",
  "key38": "3eqg9vYEiCta6UWvYupdjoNQW3bPCE8ovrzTqFjHgMH5V4gfkmfatvAB5sC9CEtBG5LA1SQBQqbb37ed2S46a5Cc",
  "key39": "5jrCGPC5otjZM3ULvaEJCsZ48uVNYLLqET8HGdqetpSeCDJSsheKerxVAA1FGVq48cPJMC8Q7evy7ZRcUhif4dHq",
  "key40": "2juTJa52chvjG5k95TURBC25UjWQUqVnST4Lo6Pz7VzudPynUkBhQ5pdEqRzKogAoaWzA52gcTQ6Ba8zmWxxWVkH",
  "key41": "XHtyAVezW42CWVQQSa8nKpSnuK7cM67cm22z13AAjeADb6iARErBECKT7dRF7K8XCcvBg7UsSTfmfvX8FM4upCC",
  "key42": "42MPrvW8GExWtTENDdMgjCJw7FH23wXCFYAiLpdLcwP5H61VsxJPdr5j8JxNyD3g5fA8GWRqs7ws6aeNfbAjXHhT"
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
