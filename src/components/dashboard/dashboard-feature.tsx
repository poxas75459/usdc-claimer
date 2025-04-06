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
    "5veibpxCh7fvZnRdkUZHjFshnp5yb6APXWNUXPSBdLoeANV1atPiMEbS6K5Ra4xvsqy1cSeSPKU1SCtZfWYGzJ2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iRWSsgXNftPdrdBrKjn8R6WBdJ7niFg9soQSM6WUqVp48bedHvXquKh2mCyJro6XuS1Z6ghhgh94PepioA2BwDf",
  "key1": "2nxVHQYet51BAsKMqGJTY1p3GzdZwKf2zgFbAJF34yb1syrcD7cDNywqPpsCQKUceBHsXbwmFbqhnsH74mUZAZ61",
  "key2": "5WXGV3T3SoYMzZEayDzeBrhJf2djrwKJMg8zhXCvaL8cmpC2mUK7GJzRtL8iXMwQmMXfyAeKGuk7nJquMZnLdU3u",
  "key3": "3B8XLzzXNqbTLXRNuZgTqkdbRuVjnUnraqYZdLz9PKednadMkdeeAXo3UdUyqjV6BKNzjoNbkeqYyHyF8VL18hF7",
  "key4": "4JFDDvpqAVUvTpxfLUsZqpvvEkmXL6PHRit77rTU3gDAmeM9Qp461CdmQQ7SncK5kApXvpeu3qxDnoJUA9rzHhHR",
  "key5": "4BC3FNVTVCeCMk2ewYZT3rrYjJtiQgZBxFLmACtC9gWVNFNaRf78a5Mm5wvwooaRryRxnHMKSeAW5d3Gk1A3JAq7",
  "key6": "41T8qKHn4FicC5yWSqWw475SNuyN9BAzuhEqxyvbJVKu2iird3QVDqcrdxzrwd6XxnyJXQHVTBSMyK5eHJwBzyoo",
  "key7": "3765CknkfP41hJeM9Lrwxfac5k5WNUCLUmnv3XfmwZSJbydKR7JGFoHeREgCnF5kRpxgarm7Wk7WZFh939FNMHtx",
  "key8": "4BeZijLP99P7tS9cvFZjdmJGLQmxsDsXprvm1fCzGMnnU2Dd5WTPGB8Yf4pji4Ecmz3Mf9ZEiKEzeDVcvUBnmRFB",
  "key9": "5BnXXtDqErTPUyfeftpzg19cys8A98KfcUf9xdeEaYvFPBdEwbrVfK9LdcdMKyDfWxgF7z9oEiqsYkMbN2JpGvST",
  "key10": "34dXoD6dmnhfcy1R6Tt6fDfvg2U2YGrSm4Cyb6ATcnbxy2TqZCVeVSSUGpHNRSuQpvxBGZVbf2dpkJX3Kq7NEDfc",
  "key11": "49mCXk647z2QsK7qG4ELNqVwknwsUK7sTH1vsfboP5rAL3FcwfKfkzZztveXkqfuA8UM8LZCM1s6fALtxY6dymy7",
  "key12": "5F91PeGKLrAP3uNmj1sLZHyqnHmxbkCShgfK9ww7iG7x5SFiJq6UGibPrpdKchyLoawvYvsb4caxXfHip1uB2PbH",
  "key13": "4EomWnZZBUqfqXRAG1SEQcaYvQN918g6fDFozTF3UwvgjdGwS4enYFAiejEm21n6haPTfYEsXUDUFjBzhZA1a4Cb",
  "key14": "GFV58BUNKmGapXx18dRcVrrNKKwDcbaQed435i3gY3s3fN4Fvx3UrFTUYw6pkq2amewuEZSya9sVeaUUqsRKS2J",
  "key15": "3bHJELVJJJZdRxQSrZUrrqvsVecm8GFwj1MhN9AqUmm72ugh3gWCddnaD2VttZGXHzRa7EDwfs8Yqf8VdWGEK1EA",
  "key16": "2PeFdTjh4WLUUopfQcee2KyMViTCePkkaHykopFrarTQFD4DWas2rKaX89CPhzLHpy5RmgPbBK8MR2HcDxQyRhYh",
  "key17": "5qyt7Kiax3bXg6kobZGEtdt283f7D1DUP4WcHGWqAsccP9SYKQH9mdp3hKZxX4uqZkRvCw8qQpZHwRs5fCC4mJB7",
  "key18": "4pUszp2jfgbYnyPzgQBFZrGmkD6pAoWFCGGYocrcRbtCTTKfovyTeNCP2V3LUmC7h9kswGH6TWfCAZRiv6cdmYJ1",
  "key19": "QCD1bGud7FoWsWz5Ss1TBfgeFVFZMFh8JqEchA1hKq8PYP1AE7GJHK4E3Qd7zK1Rraz7PWoeUHzBb9SbHyNrkZm",
  "key20": "2fvu6aEfEZXjubrSavAueESzppPgZ9AqmkUAND6KTzm8sx1RRqZS3Y3mWwzHax2yjzTfWNcGeAXKk6V3s9FCpjg5",
  "key21": "4wURWiFiVWRCaURKiohqHyzzjYwYwGAtkt76JzdmrshtQT2Zn8ic3HMwTBLs3SG5ubfFtVbbZ87ERHE2y3Mr9mZz",
  "key22": "2u12AgKVPx2pfVZFtPLjvMCR6xupfMLf1p4QKvzXsxzw3ewFmUhKWZW7bZcqPLgjef9s6aHRwXHgNSfPQpuwLZ6u",
  "key23": "4wHKJQpb33oh38U4JGdVK3WrgZxds8eCqrM4Hd5bwonfYLuwLJjU6KfaU7cesaFQNH2v6CAZFWq8yWy9o8Hi9MAV",
  "key24": "3YYQJRPky66V5eeXiuvEHpjHkNhbyzHFdpG8E19dmeiS2Wdo6SwvyZEQjV8VkikA6xbcuWuEnNxXKwpyibdKX5NK",
  "key25": "2rQkiCHgNrj6EUwiP8TAEksig3hXsjQGEneDSWCTvEcYtvcFQBvYE1PFfe6rmuU6fXaRhoiWdyRiHTCN34iXfQ9v",
  "key26": "2uzvT7MsYvdbJEncj6BESyfMA4yM8cff3sGshU75461mMrbLoYQipSePBXK6eiqVPSnryqadyH1LLqsMKqw8vepL",
  "key27": "4ayswkewrDsQ1t5NnYZ1d3C7RkFTaQ1vxMf2mvL4RZGPAKteXxAZrmo7HKsANFHc5zEWirVZB24drAY2djxGj2z7",
  "key28": "5DNAwhrsGAwz1Boh2EgGSAwpDi3ZoS7CqvDoVnKwGSwhudpah9L9ceDYqJ5AVN3Vz4ouHmhcyMRpfbzw77Du1Bhg",
  "key29": "5c2XBJ4RwoQ3VPDGCGozX3whML9yp4n2BaiLhEQ2jmHd743pcRdy9ChdVDnbv6hsQ4G6FVp55XAfntZfWLwryoUm",
  "key30": "2JWhEv99oByYQzP9oZGKr3CZFJBhGH8JMEeAy5mtEDpdsgiqRBUrNp2Vp8phgQPB31tqMgYYx9ZuCfaKFiC5vDRG",
  "key31": "4FyeQeAeszvDsBrBJZsqZ66E2t4mHhpYf8g6LqXsyKfY3hedqrtugujJV2M7KsbME7u5MM4qBtPyJN8ynXiuPHQV",
  "key32": "5Wp7TDEKrpz4CFEu8QRduqK95g2mvAkYrRvnnNMpWJwSAbvYAvzHozjtEj27e65wVo9z2eQPLsKNDNhM6zuS3XGy",
  "key33": "3f7mS7mJg5Bt5SyYk7p5v7WocVuZAM7QhxCjXvGsgx2tkEv3gp6u8mCXXXwPDASyZKdqNAWVENjaFq8YS2TM17Yu",
  "key34": "34FHEAnWj5i4uKcvdWgT6TUKxb9thLmvmZLzbtHkDobPmGxAULGLFaC7xF7pogY3DE6pbQeVtTU7vpfhhEi3R8d7",
  "key35": "4wGnvZKZz2PsE6VKVVi5ZuBeyuYgtsKcYYe449WteF1SfcHV4PH1FiZ9wCpLzdiiinvdHskxvYYhctXFK5AjzGV5",
  "key36": "5jacGsVqxoQQDjGULrBmYbYCSnGQmdPF6KUmPZb7ihs2eYHhFB3qHzEQ1V9mf3dDsVSQCuudUBb6Ueq3d6mVeTyG",
  "key37": "EAbHYpPHLaibzDu8peLDf5EQcnmovCcE4qybgbg4YTCseP3JgWNcnWxJXxjDfwQFid9Ss3ACAPjZBMVGAqgBPto",
  "key38": "66kyWomdQiTCTpCwu8uEXa7KaVYoeKf5WqNB6FHyLfDfUqRsCDS2CMvLZRUEYcmas56FE6s5cdbPjEx4SvUM4cZc"
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
