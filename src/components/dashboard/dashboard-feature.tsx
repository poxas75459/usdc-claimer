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
    "ub2z71d47qA3TpQ71JmkZt99JMJGFKFB8SCzSKYvS1ta3CmrsF1MXg3BU9FJrCQwKtUhe5ueWAXFJXmz9mTP2S5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ecsaVm8UyTht6yXmsfSVqcdib9yHhZDxEBrsB2winai6Xo8UXWgf612uyBQHzN174cx3Y7cuSAApJbZb7Aq4m9d",
  "key1": "3FT6J9rgFCG3sSHkm2pShVjm3PxmWvYWPpHgiEAGUgH65R24mfaVr4Akqdv2BEUE3bixaVcf6bdmxsQCADzTkU1i",
  "key2": "4TNa3NrHXA7PBpzFWjotq2o9aoF3eYrPm7EeVSEyzPaLvSScFP1fwPiAUXyo8txtd6SP15svAw9hh47qfNe6VKVv",
  "key3": "t7b7rhHZTeUPepqfBQADfvLbawksbUDzy2kxgr1cxR2i4WzaNk6WXZUZ9J2pDbSg42mrALPiG1LsNdmpN8yMVmM",
  "key4": "5hVLyy8xv25dLfEsRJNe86x1N86iKNsWE4fASV7FAj12k2coppMGobJj5Ccu99P6xohCf1eShZ1MtwaANVTk4t1B",
  "key5": "41HC8aMZfh5UCzwpeeGEupUuoL9Ka4dtpuzM4AYuzLWRZ3q7TWS3Zdn6bjezuag9WM9vnGAt9d2i2MS4UiGtYY4M",
  "key6": "3BuUAYEit4z5URACoAvoim6CErNqrKS5BYyPB6cJ7nkAq8ZGCJqJFC7u4d2H4fHQE3Mh5xtNgkgYyzjdMuY4Zvo8",
  "key7": "246MJSnJHQDNhKFP8qZg9SyUT8qepTpm4NdVepJGUSq3np8v1HJYHLAbgiwwPBTwcZoK4aLGmceuo33apHqcQ576",
  "key8": "2oH1FbGBvJMZmC7WiX3Af4tBFmBrngoAmFvN8LRGo8ottRpxEjJeXSnLrtWJrdwAoT34PCxibu2t6AmUU19BsuCP",
  "key9": "5DDpKyyNkL83H3mbZQ6QbL7sWHzjSZ5goq3p687opx4nVZxcUwMT9Q6ZnHxazsXcWe4yLkSG3K8e1EALjQormQgk",
  "key10": "5UPSBCmLfzaujiLXgUmxEF49LKcDPeXM3voQDoGW2mMYCG3i9jHGBjKK9mvyCfXpm4ivcuhXibk2kXkL7FXcKnQm",
  "key11": "4NBYpiCk7nwJMbko9gAuXgqmEHuksuySbUDp9fpPJfbZFftsGEV1SazH8beKgi7xKDq1wQFnZCud4pFfhVG2mF2Q",
  "key12": "2rDHVbC9P6MqSbXdz8TdQ2hBZv8QaqMmHfoWwxpqhLQfYE6F2k937xa1G35FzGHQw2DtufJAGQV2HinnCDaSgzEr",
  "key13": "3gbBwe61jNZ2AKRcAN6cvcH69eE4RHhpX24x8yGqo58VcoomQ6sEJYgL8BVqyKv4S1b8fiYi1xYzNKTvAyELyWj9",
  "key14": "hxc81f1HHcMzLZEhpvpZQ6e4kbAzKVrjuEvwAyXz58RbGVXaiRTbRiVvxxhTyEi9Y9a5tVfmGP54XqbL1Xsf5S1",
  "key15": "4WZdnUTgUk9eLrAbxChDXdKwCmTsbadPdBkPwxCj3MhUxPovz4BtMGQa9g6Df8hdGWg1pCT5BdDQQWND8RLjZ3gi",
  "key16": "3y9nWSpGpfseEp21dyVbLse8akoubGDZhvWqDJHfWxsPCuDAZxb28tZ7BKEwDPqu7ARUiGPcGY41q4ixYZcy76eq",
  "key17": "3X1caKAb2djhDLh9icZoTvCm6yavci9H9dnXNASKimANPAec5zyb8o4rb4cCHe2sLAiB5jqnVJqgjq5rMjzihzb2",
  "key18": "3BdRfb4ywz1SuwBdkVH2qWh3hPAzdNxzVa9Xh4C7dS5qiGq1qvRK9YVqaEzLwzbye5kep3kQxxsqX55waqEBsvUr",
  "key19": "5qpGvzXQ7RRNnUaDtzEB1PRgdWkThagmFbW4g5fnVeN9ZQPq1THihStRpTQPPzqs9hmzttqDzE5ePiujaRTT941P",
  "key20": "4FyLvRHbRy5Rxn1zB39XstaQc4tsTZBhLoJLLVXWLxyyaCszEe9CaWqLRnPtZW5ijTZDRmJ9sqihE1S6jqBXCedQ",
  "key21": "4jST4sY6qaq7A2bMtuEWTvHifSnGkoNpqWqv3Po1L45kiHu3oudU76v39SkjDy5efQZUv4eiEbgXJKtLhduojygC",
  "key22": "1ShQ5e42kjc1YNWJ2ecuxg5bWzmQbZUQD1v9hj4u2UAiorhbZjAuNABUXU9AxZzaeuMvabF9g7kZCh4msPCXBtc",
  "key23": "2GjEDuz2WdgrbPrWHxAuFXJMsYKJ4Q5L3ZyfhgDuZ2oBEFBALg4wKnHB47A83tBB2kExkBRxhxaWxb2oBx1We6SB",
  "key24": "5rFgvEzRGJ99aGMCnnxdZZMKR6gjVR9FZAUZKk2knic47v74R4HJojp5c6XVunQzjxzY1fHUN2FJ5RUGQ4U7HxkR",
  "key25": "3g1D2B1jJz4Bb3xxM7KSrJQqqcywKVwddsmMwKnSrNnC9wJRdsWKoCRJ9fSXQRop52iys8bwqXmSM3WJCDFx4GP",
  "key26": "4KE8Q6X42ZitwA62zWTqiNNj5RNteon278AbxkNz3qpvXVCTMHhW2okXiqSehzUti2tfBnY2yRvnjxeV78Amkayt",
  "key27": "55gBdnvAMxVLbFv8WXrwe9fMgsCoHV4d9T169VNbfL8FjfSmQ4zjoDxfv6ykJzrYLLNpPqQRK9VD9wKGKRHaRszc",
  "key28": "4w9TU71kjJWgtKmBkToyNxbiJj3tFAH4jt28L1HEkbcW9XnvgkdqKGQ7FYnpawr7gSNs8nMR6yLHoZ4ruJDKZfcY",
  "key29": "3simQ9CBY2dhAdNWQCBFkQsbj9ARsya3d4FPxgRmk6VUVCvznyEBvySm2LtyELKntAHQJGVUJTTToN7JryuJ2qhX",
  "key30": "46HhVMNVUDVAXAKNg6aH1MjnNuKoa6K52fMs4ao57YRVNphujewJawex1sNUuVFR7KZ9Yw6AwxsUoWdSvJyxHEjL",
  "key31": "4n4y9CuNvjapC49iKc4Td8RqXaWoguHGcFX9SpxCbM9UgZLnDYJio7DMmYpFdzVhL5WRGm9EFXoR6oXAs52Y4pjV",
  "key32": "5fwd7r6YahiUC9vwwH7x3qeAUSr7Smcm4YwoCWQxsErnimX1SSqpdK3oa6p864dM6oBpLCnZCRKVdUXkf56YjB6Q",
  "key33": "4PKQp5WcZfwNYRFFHB98sdvZPXNQX6HBUWTabFUMW7UwLN4JSmw2xsUpaMgpcipM4N3NFfjEA4Sga5SvFHgu5RKH",
  "key34": "4AhvwArMRwMj24G8WutGKGfApAqkcEqrfLrvvrhgf2BmfwDjoX4HK65rUuGrG95rGcnwbB2y59yDUqMtqJaMPtGL",
  "key35": "2mHF7bYM1tgRBwGyg78bLe5xvvFke1kFvCxkWdDQ1weHwN4Zjbn8SywatwiUXXh2y3HcoS8DUtm1GpkmgHSvmL8p"
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
