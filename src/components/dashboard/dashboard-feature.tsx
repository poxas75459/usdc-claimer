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
    "qtDmxDBUo9kym155vhKJsZBcvVo9qdGDJsC48qGCMCN2wQpnU9LXnNRqDgosE8KJFUaXYGC44QE9TUh28q7A7wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U65nBNDHuoobFVpX8dFU1Bv4YVoKBCpyh922wQxMreBfRZgh9TdLP3Pku34W7opKsxQEJGaj5FAc2CMDVdzXFD3",
  "key1": "3pCkhKcFAaMkU3cwt71dHHggejKDXvbkrr8NqpJN2zDL11ZHNWjhvM1wiNrE91VXaFn4CQ2XzJjacNTfCDGdPFKL",
  "key2": "2hryVYogwPSePEta28yEnQfq9f4D6qBsjLFNiLtRDduDdAexXQuAo3zqFbX94hDQSUCStv89nFEZAc5v73p8CDhh",
  "key3": "49JLvUw4FvCASFwLTmCts5ofxT9HHCN9WuprvwsscyCsL4y59DZwCgxdiSQRQv7NUKF69BhC6a97aXFaQztQRTES",
  "key4": "n92GWcwjnD9SHeuTYiDcg2ZpSVwyWnMT5DZYJJrTqMtR54tXJEaKLk7r9mr2GqnThXUrwUVSWjJJmoRbArrtyzh",
  "key5": "UxtwApm1qN8LJ4rKcS3Sn7qUpSpHb5AgDuAPWwJw8j7zPmPiP3TjPdenKgGNqj9p5Dnu5wM1mHNknPJqucexXFe",
  "key6": "33bw9USwT2YntjshYk4YL9d4SLuWfbB7ivBEkeFnd1KvZHPLfbA6Y6Qn3h9KKGkShDZHXnfJK7e2L1LMv8Q6eBu2",
  "key7": "211U7FmZAqJ1thsbV4KuUbAbHzrCJokysZoSwaxHk36A7F5SFdMPKy728wf2WwSGeX9SaJtkhEFS9UeDDwpUaN71",
  "key8": "4ABMpBGne4NHSbhtXF2VTwabBPLzDnGUAsStPEt4BV1uNXqfT9Y6zuksHoR9aRCDLDmJipVAtQ8iVa3UtEgdfYus",
  "key9": "1sBz2FURSShKQZCf4q3dzUY8S8L8P5g5PPeumhgTr9neLCaXq28hLgatE7R7GsfAzBoqU4uHxfeWLGhGS4rvG1j",
  "key10": "3rEd8ir6ShhpvH8SEhcLgn5Y4sNSyh6SnygBNpQFBkiDMRMBy1otK9eVYehrLmH5ytEnPUFrZdC8BHtxgLSxC1f7",
  "key11": "XRPMhj4EzWp3Gy6z2NrfcJbhLea1JyfUde2Sv3zzZ4Roh6X7hyoqPds4mx3xWGVp1xJ4p1w7WHsp5YdCczkzgUw",
  "key12": "2ZLyGpM521PGKsAMZSKRge36ca78ZKhiCWAr9yVZdyFViZsQYeZi9ggN1FT4JA5GXjYBGXQiLhAuZFLACregLjSw",
  "key13": "3tXg3CKGJdZNSJCSiSeUzEBb2sEKfAyvD9AGBHRgrwamiV785VV7cKf8wXWTbg5U5jjyQaWL3oKeR1UFUDduRJRW",
  "key14": "4YGysExuvrDmCHyS41X6tMyQj3QWgZ9uNd3EkJBvqhZQU9DvgJ27JDyJe5VU2fhP7RCKPSeMWNt8cEfx9zGFKYE8",
  "key15": "5r4Jy1basbqjHcm2JvYD8QPMM1bdTmPHkXJ8Wv4rJpTqcHaM25Sz4pFRuX8iTa9o1ay6bwnXdZQpHUrVZcasqqLf",
  "key16": "3SXhBSJHZP3VgywSeq1SxstCJQToyktj9zZpWXi2Y4n6vDUuAVELGebtGDABFoyoP2Fry7DbzqkYz2t3HUmztRsw",
  "key17": "2qJnyU14gX84xf8x1qqM2fhWrEqRZ8uqAAugMHMCRWHmytzrWbXQnhft6rUTWDWYweEg7mJQt5qTpQh5V6tn4uvL",
  "key18": "GBYVbF93wwgLmHssmFe4zYVDncgpPAtUZZFErBGwBsEwWHL9Sdf4EWNk5RCCxhuJ55eR3AS2qhRpo59oj5k9h5H",
  "key19": "4wJ4UJ63gfw8U2SjLdYKN1QcnwronTzysLMaYMV1EuNn1aq4TbucPmJXqUMjpK5od8c558EZk9aGfnMZYobm18fd",
  "key20": "CJTeGw2Y59hJbvErCwUeTiskVUrvukYeChDj7LmhWKZeGweXy2HCqMah644nH8KHcjJ6qGNW3SKMakkjDjt7ic3",
  "key21": "2Vpzy3eTjhxC1sqSN3f1T1PoYAJrE2UP9hESBDkie7NRqcREaujYtYKp4e4vvCzND8HsaHDUPTSPNsSahG7y7uhz",
  "key22": "49nggpUZ87GsTji5sW111PJ1ENcp9SsiRSWphKjNACYy3FSSPYZaDyBoNuBJ28uwJ3HggzywRc4fnTTwjBmq6gHY",
  "key23": "2XW9LSxAvjXuBL1w4wyFwzEsNTCEa448pLUdbMprWYDg25gNR92LJcSWpGDdnbuJhYH2jLSCVLbKazAHRnPkJxTP",
  "key24": "4zc4D3j3uuvipnuPTKXBz3HuTA9BqUYnzgdjNatb3GfBh2Ko7UJ4HPWZQ1C8QSBbuHN4py4iEtfaCU6daBhXjH3x",
  "key25": "3tQ4bs2ebNhg5uGMY4U9hdubNpMP3hh1QZPAPrbLFPA3WqTmE7HE5wjpSa1cbxfwhfcuapfikCinvScmR942FBKk",
  "key26": "YBJc8X7vyEaR9eehJ8iHbNZFkcCXxXUS35CPTPf3YLmLzaezaEHpWTXehDeVRjwTr5xst8b3FvQdY4etB16mYPU",
  "key27": "4ci7G3AgfmZ5yTCwM1qnSCDfxs9jDrSZPwf63vZuEuPT7ifgoECWdmm8P55TxRf14hEAQiByQ9LxLq7yo1PMuoNn",
  "key28": "Q7UySZGs6tTyJr5yLUPzZLQPq8Mrm3XLnJDfKp2bPhDZ9Vk1z8HByCdHmaoDdBmd6Vkfdvj7kqxZxyEtTBVELu8",
  "key29": "2y91FfDUvWjJovNmc42VfLubzCec1GxkbvRgqmvHJs7EDqo6W5wrUyH5KnJrFGJz2ZA7xdQ4ePuP7rX4MZzDcCTJ",
  "key30": "4EukfWVBaWj8pxSedy7GpKimh34JwSSBqLNgre8TceSUHpUjKydUCeXog3Wc87BH71opdVy9C1Bf27b9VJNSVeXC",
  "key31": "5NuwhbbbwEFkCDLeThH1cn2edfS8GLXqWg5JrhyLdQt7JTqTaxG86qKkweYEwVeWoSYX8bT165Mo6yPFyQ4hyazW",
  "key32": "5gkW8hixo7CCYEZ7acgtdMUk7n5Siarsea8giHPnvfk4nMRmMDcCCgnhodvUbqQQ8jXHZUgT9U6zzgCvdCBFFp2M",
  "key33": "2hbuD1fzeXkH91v3Fv3bHTgS8pUzJ7xZhe4rb8A1Xcmee27V5kGNay3eg3Y7ruCCw9hdvKE564sbaMC6JFawvMoz",
  "key34": "5Q3i58FEZNEychD6VAYpgwaWca6JnsYCQNq9SHfaZqM6S4auSLeqMfYDwZd7JL7rbR5XbKGjfyFdxRBRANJpkMyc",
  "key35": "3XZ9Zg6NSrWSbDecDUz4jvHxZbr1WhnysdAUYdtZv3MFm3jcxLVkfQp4XGbbNvEf4NN4bRGy9jAPJ55sne42dLpe",
  "key36": "5vQ2mzfEUfYREuGvfxgD6KMXEG1wX1P9nCmVa3hHcUGz79PAkf5iTmg1aiU4XE2dNWk21Zguu7E2kgDxwj5E6sxV",
  "key37": "5DQYfnoqyWP39EFSEPYCkuCiNCvVkBNSWX6GAyF8eupzgE37pyQCtdmpY7xQSNaQRq717MfP95CU8PvuL6bbWy8G",
  "key38": "3epz5RvGskDXqSyvmco3MQF9LZSkymhESuZc6zxgnMQ9S1QwQ6U2oFavJ5J7ifwJjWe21efJ4sgGDkD2YJE4q1p6",
  "key39": "2E6CyahN5Xf8wqf3UdzQQv98f3q2pexYJoMQ4yv63v9pYqirWiD593AjdByuMxyBi2XnMDJAaxD53shn1ovbnPm5",
  "key40": "3FStKpJrfYvnUoz7Y5Wcca2nLaWxyNmXPTR416LKbf6NnHMMUZmLqjLVSUadXXxYwog8VVBVCQRjRe6m5CD5tSSa"
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
