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
    "3919A2FJycCN1im8f1FsoUWMuPssRgsC3rk8sA6cG4hdXgLaDGckkFvaoNhQ11o6mX3hKLAH6krHf8rodMGFVEfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TCMd66x32hp4M2gUUXVZGiDiPcPqV9bdtxyLvaoPYRJzFdVNDegqmnEECJqK82yf8SfhnM1CEBRPYz3yxzmFQ9i",
  "key1": "PmBeyuLzqgE2WxErq7QpMEqf6jqpiZMfXzfV11X5VftxWZn5R3Uj7UxGGpQEx5d2152maQ1d2BnX5kqSJa18RwA",
  "key2": "cPdeHSbLSsEr6dYe2kPj8KC7AkPxRQVLhUJtgxWVmeHqYQcNq5w4R7nLmZooNC8BajJdMD9aw6zFQwZtGYkyGc4",
  "key3": "339stW7bbYfyh43QrYYTbZ7vX2LoQfKu1UxMToxmX2LCEZG9S2v7VKLTYneErAwsL1QXRBbFyTcYxH8cA82oktmH",
  "key4": "3fwb1JRAdMXjZk26GBevoxtDUAooiy8gknrG11hmL7PDFmJkY2VicU7FLtaerKzLPJTXiMC6yzc8nUUnDRLtqKBX",
  "key5": "4nfsAGMpkviGPibbRiKNTaosMCfEwpdVodRoUqVkKNLAK6MYJCCkciupx9ioLpbQmeUbPUBPv8ZVMaSTxDcGwHLa",
  "key6": "2NvAgGd9hVRvBYvYxiW281N4Kv4PMCt6eH2fJSHR471arMkiGvX5uH6dRRQRhXYiWgA5UUjJg5zj82gpXrwM3pXo",
  "key7": "3bQkzLhGUzp1eGiVTmHRhgSGDrmVAHLhQtUivQh6gcGaVTCeGSgxZJTtZDYDPNNq6vdrpaEsQec9rfLmYj6wegtA",
  "key8": "4HKmdGGRwkSPHpmzEov8hRkPLEYiQoEcD3rUDSftR12aZs9VxYaCXygMtbNkJwh4rSg8N5MEYQnfFQTLaFJPTHKt",
  "key9": "5tckPxRW5dzvyENNARJEVzMigtd41Q76Q8bmkehsacV9eixQv74HXUJLsa1H53NLHJ4zZfgvYvQzQdkVk7YvsZMP",
  "key10": "4xLMv3JwKsAWgdSFV7C7j3S2KzvGPKSUHNAAciMCz2MH52yqE37KWfpf4cq8XjDvRcbpmQwZhQvqUE6t8Y7bhzph",
  "key11": "3FGUi8bA4hqHjgx8Z2v8xjbTVKhRF9vNyh6a6iaB4WNpVMZHntzDcoLBoM6tE4T87ZYKMKNxvP8rau2DZ1rBtuki",
  "key12": "4ZxJJBQyCX2g2CrsMKT4AeJ3pqvSQKZmprd7EKSA9brRwSeegRSXtoEdRapncgL7cErQKFaMFqRnGdge9RF9rrMo",
  "key13": "31Trx1aQmDeh99piwK8woyuMGtJax2BS9zAMAwL6j8fzXSeAJhWq28sSR3Nu1vB2oTQiz2cr4nvvVJBbhmKLL7ix",
  "key14": "ZJLsRdwKWuRXZS3t2mAYngvk3tPyQvUVnxsnWwEjyUcb3gVFj9ftXgDD49wkCz8Ycss8TLVqh6xH3aDqaZ3p8BJ",
  "key15": "36Lqvgk6MCdnZg8KBtX9Ymggh87wcgSWF8en1iSnG53m8ZU4mBLxgyWFopQHEpN23YkCn2e6btaXs4USUbcfQVoV",
  "key16": "4NpT9CTVCK6NNY6oHXGujsrh9Kw1qZTh324d12hqvgnt7UoyHrRBnDMjRSDghPYL4VXbCW4KEoUukXWJ8QSTJqSw",
  "key17": "4MkEnWUhAuAkbyWXAqT4tsJM6UWerzTn318bCvDv1Nr2gMy841a9n8xwBek6puJNzZmBVKRr3S1pJNF7woF7qB4X",
  "key18": "2ZaEiz1yD4qunw2e4fKPkbNvWHjTarChrFfwavMeSxcD427LAedg191AkkVan5ykRFk195qwuAQ7rLGCREJcu4mZ",
  "key19": "4yM9PpLQQQgY6X8qKwHkPhKX2d6GRqiE1g3JuV36gTFmeiJiZjZHQ2ajjsmLzgU91kSbTgMWmPfbKmPfQq8Datet",
  "key20": "2L9ufyZTNBfbVbARaAJ8fdqgW7tiAvewwok9LzyKyzEhvo3hVoapaRNCTiQJ1aTJihTcMuKKtuTQyrSjqyensbmx",
  "key21": "2U7yxrJ24F4WSa7hBFua35BZFRetcXfGYiC2i1HKyGAtGoMSrFsiHiJWUCSCKcjuBx1LsbHM8rVYmCZBeubGaNwX",
  "key22": "Ne5oJ7pTEBKb6UwJvh2N2qZ66wo2Azc9EfmcPJrBidPxeD8twB1fnujqwgdBrxNMaUaQxoTAL9EfqWCjJtTgBTp",
  "key23": "5e6R4qTYSEybDGUU9bzitTTnpvMmCpSEN12j3ttx58h7ccFcbTh22NvB2KwbpErnZyRT23pNGmiprdrwE6pZ5bBL",
  "key24": "22XdjXPrvgqZ6cKosrp8D2TPu4dZ3Rg4ZwFRjFsxw4zLyvpWm5PPbHtXng6u49pDg47pmwiCUUJw3CJbAVJyt1q8",
  "key25": "5EcEBwpzf83c7gdUL61a3hWczCt7in5YRzeoSQ3dkAXXsS8NhDNG5jFA8Wg7ioQLyFCRAJ9ohbv28fkLJMd6dKhN",
  "key26": "4KsWP5tsde29ctv7TS1odN9vtZqXZ94EcEtfxwKGm2tA8cUG1j1ZS8W5tcoALSPXGLS7ENLTobNmcnWJn2QsqFMK",
  "key27": "4RxyeYS4dPmG6qLvuypaJ3gggG1xtNioae4hWzt7QAJLY9p2ZMMnvLucVh1MGd4eRcECg5G5nNKoheaQLJeevRea",
  "key28": "2pVeHANuZ7m9FEQ4zBWdgC5hSAPNdE9syj8JmqE28RSsY4SYZwe7bstg8eg1Z2v7xfUb6igRZXqNrEWmjSXomx71",
  "key29": "3SWzvtyRkDupbntoeey5EGKYf6AJEFdRAfjUpPL4mQPMfZ5BMGNGMgJaS2BvXfpGiXV1z14QjDsh9WCeMxMkoHno",
  "key30": "2K5PBA5LvbdnwiwpFqyj5ZXL9MozwAFLXqQ554cbPgkfwRBMkBvagf62Pd3zMHErquxDhWCYdtJ5gHJLfhCVFEff",
  "key31": "55oXVu9owAh8GigG5Mr9RFXpm9RWvha5ZRWo2bcie42R1PZExorNupvg6Dvj5btmtrX2oqDuFBKuiFAF5Fa3mAaL",
  "key32": "3a5QFqDUZjPeeCo5YZ5aTW17eVXGXfdBzD969YFkYafvMZgsSDNTDprKBECWng4zYcChoR9PNP7rpEQeHZFnkkM2",
  "key33": "558mMbFwtc7k9v6o2iQM3FD2smvAY9YtXxsw6tXqT1sCBoSuZsTjpfK4CVc6qjUsLQCgE6k2h4Tqh42se1v9BK3p",
  "key34": "4rsryL3xZwMaWWvL6Hj1tP7PetRadxzSdNEXbaCM2D48eTinfDFQas9wUT2JdJYkNDLvvANw1QMTLpKdP3THvycQ",
  "key35": "4icpJdj6nsAswafLKznJJoEX4qbTCjrvAn8ziSJDupanb6Lg6BP59vxhsCMfhQkSfWkV4LwKWx72CUCgHKqSvCpd",
  "key36": "kzqGQBQDoWHv758tuuW6HGqnTpG5TpReinFbpF6BFriS8rYAwGhLtCHVbKfjtdsfK5ckUi8LY2R4KtexJvoiRfw",
  "key37": "3S3Hy8BVRTKVKXQiArai7k6MUSAVTz3qCbtPiCpsAdQHMJd6LqU38po5ARucXPt9xLbe3mwVtPrPpohtcG39xwgY",
  "key38": "FnJBmc2PYEk3M5TqWR7rG77BB1BkX46eWyUDPdB4UpqMKcEY4kDQHGfwRjMZQnrsuouK8W6HjPfi1RoUmoXhbF1",
  "key39": "5ziM6w1pUJh7QGoPt4ksXkiSTBuqyUv1TCcx26nbMoZrNX8KMZYzMwjV3xz2ZfJ7EVNTfUHj94o8rVX51W4eeYCF",
  "key40": "3akVtXaSpGRq6buj5dDo7ZHz3gb2mR8PFMxc7a9544phLCjSe9hic5iE6JBUgcXe9iHLcfHHbrWwRGEDfsUASkPa",
  "key41": "3ixBCStrQHisQuNWQgUwcqHm8Uuf8BNpVSAAnLzV4b9bwZN67FiFiABcm1pnxnKj6QjVT7oVvKCMy8oBns6Qizei",
  "key42": "3dVeUP8jAQr6P7HX6uWdEdqWejH3j8WuAXXPTLDt8ZHA6QyvUC1g3Exj4wXhi65XTa49yytPukJNXpe8q9EEUSko",
  "key43": "3UeG4LJwXJxqXDWcmscQcm8XbzXt567qFTvizjWi4MtHanrq14ymPnNQ9YmaSv7HVUFsCtqWjQEHabEc4pdDsuvn",
  "key44": "4YdSn76mSMQWTjcshT2m8yZAf8YfYaJQcXDH13CHfs1NzFQqfufqzXnMfPNK1FHXeZQNaGFoWU9tnb5ByPoWb1G3",
  "key45": "55cJ74fbZfWzVX19qimhbykRBvte61h62Wu8N1GRYReuCPmpTB3GPQzK2fhQFw3WVhRgT9dHQjtBgKa6k6rrr6Rf",
  "key46": "6A6sP3wra32xdS9BNdbh4quXQScgmpNTxCxJjNBatBAYqry67zJGbeRNTVMz4M1GoFC25TURE7ecLbQ33z49Sft",
  "key47": "3EGrwenop2AKgWx4uXjJQrrhJkzfgVDxDUCvWrF2YHDBSu1Eb4p6juBGu7ompdDFe1UMkS8P2pGGUytrwYN8VERA"
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
