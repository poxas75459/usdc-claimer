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
    "4n4iCt1Nsf5MoGkhBDfq3FMg4KTyjR1t5SJWG3GJABCD1bcXQ79pBCtnhh7psdEdosDj6DF39jdSzvmh8EnWxh2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ln1kKwauobUbf2c9AcGaWt6671Whza7AmHH95FQfGPqX3AAA3wdzvG5oY7EWckJUZoSZfDWtQK2o72H3hj1ay7W",
  "key1": "4a4BFzfh8FRbmyEwWFzX135HcYhhcVPSBYowijCr5f3JwCQ1Daden3VPn6qnEjmZAro3ZSsCSfautbXHXHw9L7ZP",
  "key2": "3VGjJgdpDLnry1Lqb14jHosa1nE1ARNJj6zingV8EimHYbLZuKAVGxQZTnYCkozYZ8z9oAkNvC34p5yQnD6z7HAq",
  "key3": "2Sppf3U1SvZZ1vUFL16V5usAkpD1TMN2yXLcdhnvwGvfVqNvM8cWAFmfV7UtFRVekHrsLQhxGjEEmWFtH7YramyR",
  "key4": "5wkoD4BP59rgCPY4ypnE6ihZS22dUQFrcjVw7v6E9Eibg6oWjssYCqHtvkgL16i3sxes9ZdFkMaXXzdqM7qdU9kD",
  "key5": "4e1Nt6QPJiccEzvdtTYemU1PH9toWkvddUud1bbSom2nZ9XmAKFpx5GMTwUp8wvT3YQe89ZbgCdvX46SjjAEEvzr",
  "key6": "5AspLHF3SUwYAAVb3PzE7NgsGts1zvACZHxpxnuJXsRLuKRHs6TcGU4SQE75jQMfwqRKanuupQWTzdKFEiqoRJ1q",
  "key7": "ndnUdQWzr92a78g7eBHkuz1yhUoXREGQGxWrL1uHkQ2HEVjrbMT1DsKADE13W84XQTTyqQgBA74h35i4nQU1V8M",
  "key8": "m8H35TbfSj57XFm4wtF5xTLoXAYirtW4yBz3Xb3Jjp5Gjj74q1LcbsXouXjff5FcyystGLJ3npufWv387HJ39Mr",
  "key9": "3atv4EQQmM6BwhUSaked4C7C6Qr4xQinXZiTJ3GWfCJv6f6kAnze2nTg31xfdxCNkSyxig8BJnb8D38XxRMQFQNB",
  "key10": "ytLDuzTDY9S6aVamrP9T4PNzgxGxWfpLtS5DY4YFVxsKqHY14kZvUpdUvaABQqAZPZUvaXDeNGVJjsR7amdJrZt",
  "key11": "3Fbzfp4ubUxEe5u7NcDavFDLdAXeTyKkPjZG1xAdXNGFWyjDCgJnfxzpQ5U3ZpWfMo8soganjoGzzDgrsQwti7AC",
  "key12": "5kfkoGMpM5gQf8UbufjEBH1TzJEZLFchrBjDHN8xPSmPYutBDAeTPL4ikJdhHLPoKzPzVtki62ttNcFogMM2BEvg",
  "key13": "5G2k9w2sd8neWafar4K6MjoZWsE5aViEAejx2pfZe5NEM9hHERLXP9VWnTkhbBN2w4fdiPyZfeeVF7vFMVeoRvLN",
  "key14": "kJ4Rtd8aWuCogNVgSjqhKKW4UX6DZayUJTBtjdYazcazfSN1J5fpTXUE86vdwmRyuw5khFqbiUWbmkaoLxze8UF",
  "key15": "u9fnTscGU7sic1kghr76vEiqien8NsRZUwsZi6uPrvohiCnSCkH1ftq9nRCNrKLYzLxhCbeB5LX5Kw4eQa2PudL",
  "key16": "sveX6tpsfwHJWcfz1PoXAqUZyHjs9qNgSThUg2frDMwKM4tkdSuzW1YUWh3ZAr3mrBdXdnSsY44uxJyTmMrkKZv",
  "key17": "4L7Hz6aJHG4KyCa1xDWZYKGUc26XNizhn4ZUQ8WPfz4pLbAzz3nAABcxTeRbQgTrK7kbW4UtBxLzdNTEwxwpReCy",
  "key18": "5VaG9rXRcqiUBCaqckqCeuCaoVopMbiPN4r7bKAeAE9KdQ3Ez3AYGx6Dfc4XSpWkcHqi8bmkK9y2XsGHKqh4cHoe",
  "key19": "tApQxckvTfHaRv9oCDzqXZiEgDXMW73vEoLadEGYPQ2AottjEabaxsDsDHCnnzdApLLuRkXgDmvft8zKqo5k7RE",
  "key20": "GiiPFda3u9tGakyjYKX4dTb1YYp26WYZLV6y2kyon3M1rjXEX6yzo5bd6UkweYogigFzrLzyzXy2zsvd5TGyiJT",
  "key21": "2deYfpRvp1oQp2RjzWtWhKzTFYpqxFRyXvmRjTvMcYnxHgyZzJ6J7EyZN6Lurr5ehEp6XRbGymVaY5XLY7ADjpzx",
  "key22": "5qnqvCWQpsuWUwf9R9kRFPYY6jHLBQsNz4fbo8zyqYDdGDNRUURsEzu5ZyhmpWUwGwZqWCgr3486HEUHAX1wcaih",
  "key23": "3HhauJyMDvopLoTTvPLBxrfkphDCS4yizHWzJ8uobBa5LkH9TLHaBr7oPvr1FQHmbzphV93WVQGoy2iiib8YbpQQ",
  "key24": "2oiy1qZ4jawMVWzfTtrWydKKjUhS4MoQcz2X7XL6voMUV5XFvobpg4PdDSbHvUmnPRukcUhomNDGdxmT67HBQN65",
  "key25": "2MnkwrrH6uivLyLEKRbtVtZ9dL18HNSWyAfXb2XdZD2FdLRe29wXF9tHJMK7ErVJQDKXCZ9A7KdNbjZXf2bkm7ZU",
  "key26": "5oFg222A7iXUdxKjTb1zLdjNZ641kcSNrHYcBkvpRKvd1AfUMsHXUbzPUAK6DzepsgNHvcVrKxBCUJeHa6a2YmBo",
  "key27": "3VcmDiMzTED3CgeMEitg67eivhydVkexxtqRjXxzCsqiBauD7E99nMMhB2tM3qjLCWRFb8g21Z2gn6yfU6C9cjRe",
  "key28": "5GoEupxf7ir4BigpnPJE9pCCGw6heoYbXe3M8pbRMPwDA9B3FM8KgWymyis9b7VGSAbHrmXGaCvkFAUTZimRfjih",
  "key29": "qkvoqCzQx1Uo3HJFx6V83Z4beXm21r44LsMZWePYGXtJcLcHeH52DfYn6jAVpcnJHyQf8hfZ21cV2Ts8oNBB76F",
  "key30": "QbXRdrokPUWHEDdJ56mQmVSAMcWEHcgEdqjvrdYt9jJRKdhMDzcG5SjkkTTJFAzMssoHfDMJ6hfZjoWWdsvLKdP",
  "key31": "4KkTLEmzN7wNhcd6c5ptyVkLSASeRZaQ9QX86aVyEL6e6t3ZPb8p8a6gwHW2pCsANM6ivGJibPfHa2KQmooPNC3A",
  "key32": "5LPV6PpWEc5Yx9ASmFwaKzag5bTzdnM1caaQuY1n6ykDbZP9TAfECQrkiy87ZaZTj14YH1GifwTU2aGzendCxyCR",
  "key33": "2odtMqfvjAT2FBPbtVaN9BmYbqeK6EGUuQHY2oAK45BWZFcgPgVA8tPKoCA6nBuiJMDPWEBtQsTVvHXLdyZ8cT3P",
  "key34": "4fLKSmP69MoEH9XZEWr2sTYYUurWD61Yq5F5LS3tMvznzGArjJvRj4BdMwSRTpYEks3DvSFobhC3qroBSUKwKmjC",
  "key35": "3EtgP9YEFfGKHFXFdurmBhhq5B5vE55ZXTVGrtBkjMULqQSfe7BKN8s3kuFbZD3NSPtRmqNMkrbMM2tx1kWpvRbz",
  "key36": "jk2rQp2cKMPrPXGRXwWRAFQkEWZkVdaP3mqp9FrnjWTvHNDQFRCyQ9cZUTmvt831Bwgk7qHuut46xwqeGT6vLPB",
  "key37": "2MpcqUccpuQ2vCwHFJLisy7tGcTdWWyMEsjDP5pPu5QJ7eU5CkGmw8XKQbdXgmspnAsj2gop9scFLdDS1nECz25T",
  "key38": "vKx5h1zZ2dV6TqGu7TJSmdWRXwt5uyhmdnreauRUCSusTt9fkmMZCpzB2Q5zj2fDHyyfpPbL9ESmX7RnUZjXquV",
  "key39": "HQGvsLyievBDp1sffdDFaV5Zhp9RJaCuAiUH79qdrxLr4k3P35EKS9MU4EXktgjY856VdmUCtN16KfWNDQTc1Am",
  "key40": "33h7C8GVZLQKDfLCBmRZMDYXucNrpHZvWEa4SRrmX1tdFkbkAaKSM3XiAWF94CsoQ1L9kJfPjAaimphJoGY97FV5",
  "key41": "3zH6L8cmq3iuGtjbEpne7komjXXqrWvZkAwCCCDwFAahZCiMx8AF6vBcKhzcvGNNwUGSZzSx8cbZ1Ax833YguV4V",
  "key42": "3iQs7ixasdpVMpMfDnrucg8B8rPAaqFhDh4xgANtsCgLBgAsyuoGpake8yDhinBeihjYakf9tYG9hgs9aaXWpq8U",
  "key43": "4DvDURj3NMS2vrM3zK699P85J2Qs7iG47W2bmXzYhGkJGwoqxzrx2dnUyDBCzoA7LyagF5HbEvrSd7VvYeMQcrCN",
  "key44": "4dvHAxC4bA56X6K39w4TkA7GYgwbsjqCNw5sk6aVWJ9AMF7iVnooec87Cb7xQmKvzWcQCjCVpp1F4upxo1FRE3hH",
  "key45": "3jHfDv3T4dSjFZ19iE78unfkR4VeHYts9T2ehhCU6c238bbEamBxpaphCv4ZxeAzwkn8H6uknKnLotHVXui9cm6S"
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
