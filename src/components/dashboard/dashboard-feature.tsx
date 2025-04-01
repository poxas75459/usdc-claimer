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
    "58j5U47bt392acKfgSDZi6ckfqTLwb1suQNQpbakbMsJVFery88MK7wQtWjTLyKGEeSNPgKCb5Ayf7CnHaa9JCyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aAKsxJg9jmAbzcEYzaFA7s9ghCTHXEdfcQ3H7MP4Vkn6boADdtuXBRMog5UckjM293fqiqZAtZcXVMHtNWnRkKB",
  "key1": "2t6WEWXvSZ2A3d99taq35iSr49rTPLLigWSj8kfZsP98DdX1PjLJqfDgrXLVhCYoyTW9MjK3ZKB3LWLyYEk24TxH",
  "key2": "dHoHC32ZDiQY7aeWHxDxiSjRJt1qu2dajZNSm9tQbVFsHeGZXXYyngBpicgzVuXTnuTdkx1Y9fofBQeGfKrkWVh",
  "key3": "2fbvDkjsY2R84fGSUaUG1RStcrUhUH8r5rcS3xPxu2AdcRD9wHVfaiun4bJ8foNn27CT1azriMnHpTr39wJhigXi",
  "key4": "FkPisZa3fKbt52EqxzpRbEhynihCFWWB4YDnpKYfLy15YjaGHzQBuFbHkcuiA9VWTfHbsjfaZyJR5qYWR2sS6WJ",
  "key5": "4thAX4BWRkBd3Mc8GnQhY64FPLea8VFu7j6sUdDMaZmnaHqY75nNow883kSe8328tVysQebhELRfC45jKMTUXBhY",
  "key6": "5b6qBJ4iz1BVTt676coyWe4oaaMWdPVy4trkmNwHDeRNc32rVRfYVSFq6cYpd3LXe9vwkEVCBjya4JjH3A1sKEnr",
  "key7": "3wNSYQJA9y9knc5jgSaoPpn5f8Kx8TCPGGFSSJdQXHpnmGG56577A81eGwFmggpR4CkPJHeczQCz4mzrvZy6hJH9",
  "key8": "422vtt66r3SPLo84RQAaopn4VCHeYLWy56QCcFWdgxrFH4XQbp8iKUtAgauZ8uQRvpM4vANmv32noDMc3dZ8gN8U",
  "key9": "3p8jQfqUncKnSnh8aa7AvEgjz5ujGhj2tgVxZquuTExoqe4unmbcXeTCx43R8trzce39S76zWEWomUoGzfKKxvo7",
  "key10": "2ncyKctNJUevczfZMtJ66jEaHuCkKvBD64jyeMoUots55qPZWdDB3QibJHUP8aS79hQ3dy9oEsvdnCScHWyqJEya",
  "key11": "spdtjX1KPYdcCau4XkoPfeuUpHm6h3ajb5EGQdtCXquy7wW8sEsCALKbT3zvuvoeMUdmYBCUiCVFGktqYm6A35T",
  "key12": "4UzbTTufMap2eAF3twmfEketKSaGytYdobiLE6k1eAABQs4Mz4bnKtVyCQFcfdWgBBwSzWRrNCSswow7fMxsimJp",
  "key13": "4sFS8tAFxJekc2UhWYKnWV5ujnhqVNJnuWtbaHP7VokRtY4hQxQscQqZYrrssgRtwHjRJPLGdiNegsSUcKEtLi58",
  "key14": "3fLKjaqaxwCq8uRtHbjQ38edoYTHgW8iCFY9MVwbMBk3Svy7D4qJpoYmgniC8QUVFbHJxTCsH7FVgdR6gHfFr36",
  "key15": "4ZgSecW2kbRoQDoAc8geGumMF8S5XNkYxgUxUapsKqvvqxgi91NEwFy3MsS5PAN2UwxDwqw8N6qayrrxG9Cdt25c",
  "key16": "f887p1LSEtPktGLYeynG5UTJd8di7qDgwqRHyhUZQLB6bm4LBwdyVq8tJHfpdJ9bciSsH6H26oNMvi7trEnG26z",
  "key17": "3TmjjYYGADLjnFmZN87czrDLdTPu3VZz7JYeAQVoVtrdixSYSUgXD98v9ypBbw9Ayye5EpeeSuHbqS1iBPgjhY2q",
  "key18": "4Pfw3dmzvJgAnNfT7ncCDrueZJmWTax1Tdfm1yoF7qo1ZT4kQggY1rk4zNScfnwXTEtySGig4RZpi3Y7m21V165X",
  "key19": "3EMFqfxkvoNjyyznsy1iXmpTzyn5etktxdSwC5dWpH2XemUdWQP8tmMok6cUR7rUdGoGBcHTKsfqeuyU6GjpEdUo",
  "key20": "4uLBfy4rwdfZWferhfJvRtjmh1m2N746HvrZcpLWUAWN8xSYmyGi2N7V6za89HMMWudLMrKfrEbnCxZUrxH9CSF6",
  "key21": "4cKdhxJyUdMhYKQAUYoKr7HBkpYad3jpUQFW5yyeEkVeJ8EubKKHk4bWKS7wTPhHFL6KocBX8CGswJtimEYHo4tJ",
  "key22": "yuwf1AxHGEFrcYD3g7KJi72GNF1MfCgZguvFA9nMUTuHAakmAwkBQ3rVr9C2vCYgGemfMss9jftTVinCFP25vZ4",
  "key23": "65CbSswmrbMCtVhvgDfJgZXGoz9fASXZH4iBzXoA9E7VRq9nesWz3ai8AUNtj78EDgtnAf64nxAwVdEroMYhUoyo",
  "key24": "2SjVpSwgSTkoSq1a6qMNWnTjkD5mZK3yjMftePZXg9b9KXNLodJg6cytLugeJbFHyZ4zqyaDMxLu2wJjJnQN5D5J",
  "key25": "5dfTW6rnd5N8jo7YhuMV8RCQLxDprg8CxjkaDGRhfe8W9tnFk11bpQh2cohmvYqfU69m9rYKihkgvVoNqssTYtHn",
  "key26": "7nfTgRvPpCfpDgAvbHXaup9FhJFc4C6XG5jfKnvJuzet9CESjbxC2iY6QVJYWKu6spEvuW9zyB5JSZ2YexTtNaQ",
  "key27": "4dYzLctGag65eqfJW7jtQWvpz2bFk5eU2iMnXQMzgRWQPHPABXReCRpGohMpajfXMMvyKu576wP7t9Nbk4TTbDpQ",
  "key28": "2GmRDyfqrbxrJXRYUrqVdBJxcpi3mURbjRJiEJSEH7P98X1XbaoYLgzJhwQsURxQm2Pra5Hm2LoSLtzfXu5h4Dic",
  "key29": "26PJBsKaBBU3kWath5aXJtBnK3n9GEc2xNdkm3LcnptcxdtzcyynBFwFWbq3yXzsE6STiUuj8kPGDLApaUXo5M77",
  "key30": "4GDUGFiyR82rFFYMkgiEnFDq4YSfeECnYDPaUfrZpSRKjwLvaTeNxnoM7wvcpthEvz2wh7eGDV57NdBfnQJRVKJ3",
  "key31": "KFACc1bB6jUMRfdY1dp7mzpeveT3yetETYQRYWuV4LP7XtMgykyf8312bPg7cp2hdnKraDdQvqVyrnFYtdaFRjY",
  "key32": "Rbfgr8jAkbbKjNLnhDSzJVq5hRxZacMooLCvgB96HnMbChtLhzXC22gpKT9QgxkwYWA3jhWj4sgwf4Uzvi6pQ7D",
  "key33": "2w5c1jGksNYDGpmUuA7yrtaZhx2BcZQYfCmyP3GJE5i6zzeNrV4RPhssG7pp44ytukg4rQp9xAyPfU1zVMok8n4P",
  "key34": "2WUqMgrQHtx5sdsAZ8NLFwUuJsX5svbtfTymqGQrJrqaZvK66RbAiZtgs6MxuRdtwvYs63j62HPb22axcmoWaJnx",
  "key35": "FHheE1uMzC5wrXriQy3ZKecBXWRuLFNbJtVamWBVmL1ZxVe5DbqytUnrfYhohzuHL1fe727J6rmyurWx7BvLf7A"
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
