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
    "5UmuYP3A5zAbDv3hu9nMUPXUMSVq7yChefimteuuDdF2qvtLVcNAqzZRPfr2YnuBJT7zJSqVFNTACsXAx4d3nKRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KcFneiBX5JqMYdYCQKaFKiPeRNQnWVf5cmNFojzjtMHWdyJcVqhSi9B4rWR4Y3aX1tP2q99zDd3QZS8kbWDbAuf",
  "key1": "SdYe7ryYC8gdBmuxWcPPuNPBF9UKZLDpG39qtijZrryvV9hJgrBNwbchanCrv6QQnVtisAnqyo8XSVJ8jwtTkUk",
  "key2": "5bmSoFpiXaZKzG8rSAuMAYf1H2hg1KRh9TLH8bBXcstYkvJnXXEZFTf5y7B3g1A18J7g4i5qkB3VguGPuGn8Kc7L",
  "key3": "5HmcAR9Z7zCu2s4Bw21dGSyHMfTYDF9BQH42hdQHsnGxVF3MoMvkvHiri36FM1iMAKGBmDHLSLvgS5gDSdiAcZta",
  "key4": "44DYZ5FA5RVqwd1fUcJ4b5CFbENXaCVEB3Zh6Lo5XoJ6XLEyNAxsg1UvN9mKpybecRRy69rg4bx7tTNdzzqKXLyi",
  "key5": "3EsA9J3BdtEdQbNCgoYHPyvfRtjLPyQyv2Pb8q33Mn8kwbtkPTR9L4hg4QCXPmDFEvqmQYt9pPvSSz7tPhNFcGka",
  "key6": "2NxobMYNmGPYVhtSbMpt7XNsH4aVWkSjUEtfcrFwVj2QHGGVjKpL8Ak9xfZ2TNJfEQkJnt9qC6nEc3n6yU3E8yAi",
  "key7": "4udwAXRDn1XmrPt5eh6boUmuztRGY2Gw8MYKn8Xq5sUZigGRRkPQwPfM2jY1Wux2goegk3oaVWwrMD22aYgbtbbb",
  "key8": "4uBsTjAbX2MeyXUv8cDLUwKHrCf9vTzrA34X78rAXNuJy6yuLxswFhzrApw1iKU6wWLcCkcexZzpKcDy1eMxynzL",
  "key9": "5oBFjGP7inbg44fgETS5k7xoBi2mNrErJdyDKF48WUfDkerGpAAGHux4ToiS8RjGgKdzrZvFrNveqx6HDhxnCdD2",
  "key10": "3iSfiXYkAnLPZJdD7phG4Nyp57jvXy2ECRc932698rtnNDNsMP3iakntpyWWKh68bDNVfEeFzp21KGi6UYohhtDq",
  "key11": "5j4ajFQcDchcfwD4NCGpztE2tBbcKfWwAd72ZyygARqqsectiP19Ck8Vv8SL6C7fYnuP1ToYWv8pFJstSJozbdUc",
  "key12": "65gGisGReMhu1QUNudaZhqXf9JDLPZ6XyWH47ENZM1tpjfcug1brKubxiiw3uS2BdDHiZ8casi3pRnU7jaCHGsd3",
  "key13": "5BvYq1PBmNo6J9HUBjDaStgcae9dTSyX5t8q5F2Jn1vjuqXzx1kdA6nQ74gKG1hbPnHQ7ECoMZV9SoiaBa3ULT1o",
  "key14": "NFfgXc7JvFgrvKUcm6F5mFE5FNadgJ1wewNRbz45Tm6DKh44VjY6CvRmLUBM6e3xGppv8dq3ZYvYTgsmZELxzpK",
  "key15": "3SUY3jEXePYCWZt74D5mC1WQof2RhHJqdJFrH2CzLWX6bjvEzVJe8xGNyHPoXzJzySRZBYwcFZMctZeNpVqDvkY7",
  "key16": "39ZfJh3pePXhytNCr5cfKoYrzSLcxcZp4oXtEXwC1sP8bRZNfvjfvcehT95pu1czq6uvpsZiQZsvywh8WmnwSUag",
  "key17": "2KmqAmLmMED8cqL866vrZQfWBG1Pgtjq64wZqUaNTrwCLrvGH9HPhshcXjBvFhnNEspKx9wyR2kVzapKP43m9Hhe",
  "key18": "5L3UYsbfFeLUvnFsf6bHtFnGkjAFGzNwi93At6ZwJJ72SfRVBiGK8fUYgZ9f3Hj3XYWivjBeXH7pJScZoYxuup92",
  "key19": "BMUQY6G4xmfoKhjkW5JAPJQghvdhk3FHSmncc4ZnSCsbDQThCxPbwmAjaCXFcH61Lw8cr1fAPQ6TQvMedruqneV",
  "key20": "fBrmRGBwjziy4FtzPVWgvpoepy8i8ceL1x6T2Yo2MdLaphBpk6qUVuD9aQSFhJLKdChifVPei3CXvcUuzcWpfnW",
  "key21": "4xNWKnkAJxvqtutSeA2Lbo4mj7kDqhsvnV6px5MqP7piwc5G258PeP8vH5Ls91rL1SzZEjyfsau3C8ocyE2AcuZk",
  "key22": "37DR6HYcWCZJ4Kf53RZqWttM4QdxtVVT79TCveZUh5t6FRvN1bj1MiLPKBqcv5bC8XuWLww4shsgGXruiAPQ2hVG",
  "key23": "35uEXd8r4NsUKRyosVQnwT31vp9kyUQ8bX8jDTd1wnUTVLXTbngDA2YHe9zHwpjVpi6uzhFFTMxPwnwjSeAaZYVW",
  "key24": "54ABLQrudpJZPKzirEvZa8kKSmheDxx95BEdCtAMB3jxJP6r871uhXfqBRHazGJMcSJHDkkR2AGh36xVmdAZkF9s",
  "key25": "4tyuX7vRB8X15uM9Gc2jBQwHWUerc6B6t7ED9DLUJx19Yogz1TuuST8VaPD4GdD7msrkMNSw6ew76sBSZEMa8ATx",
  "key26": "2H2dJJmaqrscBcZLKWwCsnbG2fX5fXQa3S6ovZPfi5HNp9UEf77ffeoW9JUUH2TAq9FCrdtjAxRetReqrUYX8kJ5",
  "key27": "R4TLGCzZYbyo3CGgcLkUy6YacepntZtKz38uxoAh8gZnKB4gNBNfmXnCBpkXMLgb33TCBXWrwgBydKEKXPsW8yd",
  "key28": "46roffKBiNc7G5socDyeAaaehrfTaveVTsNWy2PV6F9KvZtmAVicD7QykV5un5U5rBKyALANrFTHqNCwUBrTgmtM",
  "key29": "4dTGU2fxrkCFt9dZkoGKk75AKTf86QJDcWTqKYUPzT3P1GvuezhEwSqaPfqGN2Cywrr7FBnCe7hQ2ToShKC215UM",
  "key30": "5JVqq8fmCkRhEzn1WoqNWosHvEB7rcZJ97tJAb1MJo5c2A4PBrDLCpnkQwzpkxabr1q6Cko8Kek8WiT7EqjSFrzd",
  "key31": "GrYLooj5kW7y6Ms3jqoNDPAvxzGgyWUaQsRv7NG1Tfq2c6w2zuxHTCKzHmwNKw55btsmtLbT2QgkH7oxzr4Xiht",
  "key32": "4EsVscj1MGHsAKnRJjqWTGmLHHcMEQf9zMPEB57mmsQwsBWcqdoVGe4VoMF5vwrwZvedCQiEyYQCk1grtQt4N788",
  "key33": "DvxbZocp8474Sym3v7yv5GQHdLedFVUDc2SoLTyMxozwuyBhviWhhhbkbj1dkZyVxyczfiv5thjCdYmAmUjmDJd"
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
