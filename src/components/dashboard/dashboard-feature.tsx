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
    "p8Va6RKdZBqbgaRDHcrKdwQJ24AwyJcAvXfkCt74kQ9tdPtBuhzENFxTPdF1DMZW9rWJGCcoU9NSAhGq3NTkWwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43KEZheFixvMjBcCt85UqdUiiPGeHr5cFdgTrk32vci7GLxHytxA15ERDiDmVgjKDdhdJ3yLSZAxDRq5eLjPUNoh",
  "key1": "4iUaszAWYP37JUY2UBx9rkdMYhTSNDFmaSkE5QdbnLtj1TK18cznwfRpv5tMZP9tYL6RFzn4HXSZTMLc3aCkahBC",
  "key2": "58YiFPFjTgtfBEsJGjb1KhyE9CxdqyN7dptkdA44V4LkfnmSEZCMDqW7JzGJnyKKTz87sjyws7YEuCdJt2UDxRRC",
  "key3": "HByVijHqu41qHGHS8Z94NyW1kjSwEN5ockx7A4FbrZ8FNym3D5MuwejFvB3AFahtvhL1KSArNKnpt5Sx4EoXDWd",
  "key4": "3dB12LKteVRx48vH4RdYiVSCnmSd8FHtMcsF1ejfnReFVYropj18ANFYNeTBrfuyuFpQpntYd75PmhcqM44xujf4",
  "key5": "335bsQng3T8E8LokTQs8UwV29nCCYEMpEWxztvPeLtsPxJwiiCU9YXtiNy1Lh7j8FTYVo2xLLARqWypR7LqMxTqS",
  "key6": "3g9XNv8dzRa9marjSoHD5rGguBBAezgNH9hPGnU52qPxYdHYB8Q3dqKwPXKvESwjUuCZ2uhqnNUf2W8otuQ3Jabv",
  "key7": "2NMpa5LBcM5Kg8ujkEdz91K649Xz9TNDPswETsPbufP4gr92yjp4jHAuQ639BgsRVguXbKVVRnKrY3yi6RuJ8gnb",
  "key8": "486Z6K6PcT7NpWaTr6u5p3zc5UD1ZwFVen885EsFS6i4gbwYYnxMCqKmH5RL5yDGnHNoRp6r3BtMV2aU9Bgn4BVK",
  "key9": "3V4Wx2eGFGNoavb43Jm2YZVfay33qFYrX16JENgfVnU1de4r8MeSNxCAxzr965CY74tpzZc1X2ZP8R9AU2PrVv9y",
  "key10": "5XqF7uuacWVp7h5EtVx2zWnyCTnLmH5zHmhuJij47tor8akiEDMv13EtfFs6A9chsG4H2rxzxRkn2KutwNo2ZFgg",
  "key11": "KNPr6CaRQh2Z2xH7Twtjk2fDXwzbg1U2SK5rKsAJkpW4ZvsfuGaMTHZjgTRvL44drkrndgMSvPpxKA3d4SqBR2S",
  "key12": "4Y5Daq81dHysHZwZANvmiGKH65bkPbsXy6zMMFhwD4bSueSFXYaQh3uGJ6K6YUmsEGHsxHb7WiH3rpwcMtb1DrSD",
  "key13": "2ryFNwoS3dLoidy65dshuGwDmyZzzRZMw3XMA7AcLmQDLxXvd14L1nLs6z8732y1d384Md22ATV61WqvyMzX1s1z",
  "key14": "3sC5SEq2ZXaChX41EGMSV4g4VXbD6myPzgTxkHpptsTFiHVWJQGEendYh15xviYrW3BBXNvP7GN3gWzSBnGHo7fe",
  "key15": "2nby9F91hW3W39xaSDKJKRrkv5PbJrHYWWUvZEwFRQuwFK4f8BRqxF9FnqypVRvDeMe159phBvYBrxNB9Jbq5oFK",
  "key16": "47WwbVSnVopMF76TbLsYg13Y6JEMazQ4hkPFsfejJUXVivuF5b4DtCFNzxo414ttQpp6K2f3Epqc3RfaLQhTVfD4",
  "key17": "4cEXaTtXgdsKobLN9W7szVaGTczxx4sj96HvbX6NtTCL9xQRAAQ6ejFmbGKEy658DFLgFzEFToFW3UZVJ6dZmsqg",
  "key18": "ZkFyJcmF4ctgEQ16Frb2EaXoiGrssSK4a1BcyWP9g2D3XpZ9iCTEoqz9byUK4GB6d466cseXW8HebyFxqXWfHhh",
  "key19": "3sCMf65UfAH6MmjQNPv8ywXtNieNFMeb31xRLtUYpLhDFEgEvAcvpFwxBQ4b5dsqwwjTqMsGkHi9omiAgTk2o8tJ",
  "key20": "5oyDYY47Cg5JJpK41kQ3LzGEWh1QWnGsmJmYLArtWHxr4KnJhcmpR3Daq9MbAuLU5j8wQmUQ7EVePq5bBRCWL9QQ",
  "key21": "3X7TK5zRYR9cotDVw8R7fQwBQosWJKFvKDyPdFTtFr7UJ39epd5WjgJzXCwd78jDo2pyZeSCHAFyW6dakqDbDJFC",
  "key22": "2ggyThqLcJLZr2UNxenupFyu2rwMkXWMU7WMhiZBg4C91KUanCfViK6aho7qpP3BZWoitjfYBx9tdyPac2Bryryq",
  "key23": "5uUEjHxrYiAKx8tTnXABBT6ydBURBDW5gsicA29StYPFvsDKPGRok99caQyf7vLW2EowZo3YbhmS6fuEbawZrS8M",
  "key24": "3bZm9Nogf95ERMo63QzwnMUMvuAtx9cK1LL9EyFNzDPbg1488dpDFf45sn6dU9ubJXNa3wtiMHMktUpLBYztGFH2",
  "key25": "2QzSAkwCZLb4At1ptTktZcDRaBMSGQ3oR4t1eona1GqEF3Fp4krvDUqCEeAPMLTAZ8p1tDvrNHbndEsCqgJyyz4J",
  "key26": "MCNn9doP7tHKsubYyNDueGYAVX8e9dbhPC62BcFaZAQ2Mkkuux9xtUcApmUVUVsm3in8jS1s494GKzSM1D9wdGH",
  "key27": "4xbu4qTvZ7ue6Hb79v62ttmU9eGh4EcpBtJHrDHSSLMQdVWpWCPGHgNDbpUUyuGaD7B9MVabpxnEbagWhmMbQHWD",
  "key28": "2ESqEVtvSJisvRU88v9Qzkb7MQ9ehqrLJhbETR4dAkRE4M8gQQMSMwpHwNXY3Srq4nYNyf6oV3Bn6MN2oaxm2RZH",
  "key29": "ur1UHxHUiZnZ2FzikPxTaBYhtp4Zh5acJ8AoSJQDVuWmCgpvCgNBxvRS51jwgpxkPase6CoMnSFuNvaBWWzgzBv",
  "key30": "vq37sXBQzD89X9k6VHKLX6KW8UgSgSuV7A2UETZ6kuboD8JPv6UWAw45Xf2LpCTymjSdXagLYYMr3mXeN6mzUdT",
  "key31": "3fdTxfaJeVaMiAbrpxcpAiS2hfVpyJfzhRaiynh5iM4spVTq9B49uWZ99Q4cizipPn6qR5Z6U5FT8kCjeUe6UHps",
  "key32": "XfvM6kZBijusLt9hAp53wztbKwKQbRiAP6BKxzprtf2bSk22vmaDzeqYkeJJ3Jintu54rsxuHJsWx2GM4N3zbxP",
  "key33": "4BzesJGMK6X7ABjTL9zBJYaCfyEdBQ27pymJRrwiJcK5KcVWWRzZH3qDpExizXDDypscK5qJU55eSURKjrSd6vBY",
  "key34": "3HB3J8FDC9cATRbnVcc1fTEpRn9hNCw5xj3NTfXb2rnTZ3E7zURtSkhY1r8JUC7By4BYEP9s45RXHPDkQSkC6hvd",
  "key35": "3DbKm2AYLYvc2nf9dLn2Umr4VCkUYBJBvZJXxna1njExYsgUk5DcyfzvGuXHQ9cvdNMkqDMQpJUpvaBEpi4eFgzr",
  "key36": "4fEAQqiMoy6nbJ9Wxk3ejtDWeqmGpcnZwfFtkTbTDwpEdQqLM4WSkmv5mkA2Skm3HShgH42mUeS3y8XhC9zP8owt",
  "key37": "LfX59EJFm7vTxgrdEteMd8f1FiopuLj7Z4SgnFnMJgDMb3ungcZkAUoeFNdj62QgVRsde86BZQ9a6KWoYCj4eXz",
  "key38": "3pMx9LurtRuSJJQ1m7zbJWRfuWBK5ifLwJhDGrNqWJP3uwiWNz5fuebcQrAPYpxFN2dEiEbZYgncemAza4WTHib6",
  "key39": "129iP1TJGo6LqL8F1qMjKRDCgdwDdU4LhppYfLaaRS4jstsyimXydv9jqHsnfZEC2bqyTgZVYQv3jKMnaYXr1Ht5",
  "key40": "593yrRzmuS6DEjGBwmJVR69hncFeczFeMB136Ysh6bmdmfD5hSJNdZYVyLo9yH2XDD99P4fhg2bjs4PJT8MDyS68",
  "key41": "XpcBXov8AvBSjJKbss3HGMN5woPsRbWMkHYLFAoGgicNAnHxrkX7u9hFEPwubdZPTP7dArq8F9DqURjCX6d2huZ",
  "key42": "4fbLLjtRjxyzfUCGa3M7xjKS6GEZoVqZ7ypXo4z2YZY3eWn5yuM4pddsZK61oEEWrWhW5Dzax8cXbToQrqZmwjHa",
  "key43": "GDjwkQ6BFUmzeEC4W3d9xoVsg2rk2xDSeJm4w31ZXzrdaC783QLgwY4mR5mmXd41nvVs6QTeXukvr6WCropa443",
  "key44": "5gW1ZfPrELdSxYPd9inmZZsC6D8vnRdiAqvZRY8uxux6FrHbYyKXNEGPb5txfFxCKc5biL2FtnVWyvstdyQFXzEv",
  "key45": "5uubSEjChQ7yuH622xMq2zoKYSgK37Jp3851F3tcW8GQNKUUnZrrj3kWWbvSzEavBpJNPMCUpytP3EkeStA1dNMf"
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
