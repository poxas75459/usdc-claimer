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
    "2NtiXafPjqnd8cBBWzoSctxFiiJfCEbRAqCpeX4GmXWx8TaMEFdRtdE1MkcrZtjm8YCDBXFjbR4WedapLtesVBc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59gTQ9CoQx8W2BmjSVf5PcSRTNvUHgiyKKqyhcFkutnLcNEQxUSPpdmHS6VQbxSwkzTE4QPmjUoWUFjuaMirqxSJ",
  "key1": "3q9R2g8Pc8q3MrGm5WjQNqHBnS3nt6aUUQ81d4bdaRuJvRrZrLByuTDuHeiWvWQA95uUEq1fEGi4itVuAeTeaR71",
  "key2": "59sGiVec2FuKXnTifBjaA77DUSaqWThRDDNZ8jHtMeiD3VfVFbs7RL6PuuHzD937THwfZkoqhnDJqwWPaHoU5XL2",
  "key3": "2gyWbmG9vTWmhj5fPdpHGgzr1Nxvg9H2bz8wkaW7ANLpheHKkbCYWnnf3YfWaPf2V7VBroqDHumpG4XnXuQskm9w",
  "key4": "2d4564yTrc4UgL4sBUDBj9JxMESpK9JAj1usZBHwtZn1Bt9CaYQPW7ov3trGxdYLhjHMeoye8sAnyPcpkpPcMq7r",
  "key5": "2mG3PLeNcPhhuizTZuPtv2mnh4A1HwkPszoJRQiU5W22zSN9ViZwSsvKYtUToR1tcL7o2mGNx6F6Pdrt7NXTddEG",
  "key6": "3pf6MTo3cCagK3bHjvcoznLdHCdbzwSRpv7nWSPquNJ8C6o6yDCTMK6koE72vikupy3Gs7W7i9oAJCsDkH1VkJVm",
  "key7": "5uhqxQgXa21KTvkwpoLgS4r2idfWhKR4oH2CjcbZonocdVLv3TCz4gWh7GrmR1Fx5p8ceTKqvipQ5fqrz2YN4yPZ",
  "key8": "3km2hH9cjQjH7FWVDBX1CHLXVc3i5Tq2Ae9YLt2q1zN65tyPBxF8esakMX2hZdfGmkLeozwuymUe3AL6uVD2Ev8c",
  "key9": "5pPjVf8qnEmjDiGwnmfR39s7XAj5SqR9VMFZZZ5nvNX3qqY8Rjk8EFS7N7AXwhY5Ah4iqtnBXcCe6KVjpraBGMrX",
  "key10": "4WczyWq5QhxyejE78J1T7vFtEkRtPNwDerdmwX3H7QuKBRyJRdZzSBsrLQgDPwV3ED3bcjLPo5RQuRDHNrWFHTWf",
  "key11": "2QuFPEPRCP1xPTbTN9yvyBQmjTi3LLsCBo2B1Wk7vBgjx4YGZ7Wxn8JPVBJnC4Wr2taz7ga6CCnNPWdzA4GqXHvd",
  "key12": "4nX7QB3Q2pU3nJTYE16qReEjQu4jGQnujXfj7W3HfZij29WBcvo69nQFdryPzL4kjUctCYfhsUNLKJZPVgMXsMzN",
  "key13": "3m6GySypbDYL9wpfB9JNMEc448ZTUDyY6xnTYxAvMrxQTmLyzVULbcD33KWzUtubME9xnf7LXzg9EgMQxptH4mhp",
  "key14": "46WB5CUbr7NmZwHguhaZUYPPT1T6v29GTzS5hEtYQCptNsp3C5CGAMJ2kGuHhjrRrqyhbEkBiKCexTVpPLH5ELQg",
  "key15": "5zzLDHgqudxUSfxgFgCA4df9XP8bhtaxiSjnJJQU8WYXfpKSJnFCmqzCD3D979vPc1VKUSozZLdL3EavVrWTaFFx",
  "key16": "SpvoZjLDsjVstsTMh8jHnytKN8zg6JmgFCVT9fR7mJJL1xiXtko9gWp5XxFCYQiU2FrkRPgCtFHxiWHB1Dmhoio",
  "key17": "4ieUvykJPxEarbb7fCr8F2VPYWo1FhHzQJX9jxkcvpzeVtDe6zevmT6rBqigfpUV6gCcdcmE8T6LGWXjfF1s1vJS",
  "key18": "4Q2QVm7qBHHt299CFTt29VXJ4cUP2KRTL7YgzjnoNdRWivLk2EigTDwbFK9c8xxWiH3BJhd9kFecaGDYc7MUbPJF",
  "key19": "MRVTjKGWRYFidAEZqfQfp2Nkzen8DkMQS2Q4vk7R5ewLhhcNuWAQ9xT1M7UgYGEHSjuvUVjYKR1pfwrepjZCKM5",
  "key20": "2WcRnLKikazNhZmiVZTb8SYUMoQANfiUzJDqVYT83ck5oPZu6zJ2AMzdXMYh6nbFkwr2C3c6wENHxs3K8rwnmBKj",
  "key21": "2csNToBUYv1BndpVef4kbZD2FUbpVMNy55QMLSHzvjA5XyQW9a3DEhsxbZBkK7BAft2bJaaEvzvxeAgQgjdryeDC",
  "key22": "23opWWkwXCHqvaXH4t55gSwfVsVe3dQ23Th4n13DpBGTmeyCarMgmckKAg8B7Q7jTC7f6tr8hsqtmYLMaxT6dqZA",
  "key23": "4Srx5tpvUeucZ8jS8S7Mya3WmNW66E9MzvTZQUPsvKYnoCTWio77s3BkALjPP9H9xygD5bMfymwmLkMJ1ZeUjHc5",
  "key24": "4fDwsCHf4wfbj4A9ANXj4v5shKMTNgbDhYfZewQb32veJZMpcUBcKKEUA4KNgXCoZhqdeoukE6hGyayfZiU7ATdB",
  "key25": "35gqM3ZQvGCpYBfBFapjcwqxqXvbtJVewo4hSzFvK2AX6ydu7UhY1jYFqmSmzGuEU3NYNopM4cVjfFEYYsrA9eSb",
  "key26": "2DHmqYny28rsYUqN8AWJ2wiqLeRZjWqeuziEKzjCZqhCbE6uSdESSxyAyBkkVoZDHhiPCZugmNhc56cpZaMXEgvF",
  "key27": "37BQnykE2bdQf1KKVn4gRxso9ifpzS3KKHZquyVK2eLX76oHzAWdTiEF1Ldyqun7kBvwMneVF1JZR67WeE11bT62",
  "key28": "3oLmB7UFieRn3WxRrLPuKdiGguScBW4cMWobRdh8KqH6m29EoVe3CZ98v3oX6wEy12vjhpnpGQVQeWicEhTAJtxT",
  "key29": "2nR9TLi4t8kzPVB7Mk8QS77LKuXk4nEiKC7KKprZEb4xaMjGJtqrUrHLz5S3ataZ9NVW5c8DV9XH8tcBf6WKjb3c",
  "key30": "yhmTLL9iRwwoWj1DDAWmxqe93Nak7BkMvbJockrKkfhfxnvZZk11FDvq5dV8DKnckBur5FngiAXmPzyCgpM5vN3",
  "key31": "2dp86u4w25cPmNAqjkYhLxNJz1WUBaZcEnpzKKHL6Nn6zNxvwDSLddQqVTD8hsNCdEfnLNBvAtXyTKFGHXYXpTqK",
  "key32": "2gahpUSmVfCen6rVzNYNvG4fSdywLchZQJUrpHXbMHpstXV26VMmqpUAWvaMbjCf74f8yEZSizxjWM7o5ducTTgz",
  "key33": "5nCbYKhxrokgzZp99EDBgywVzzwUu5NYtWwh2i3V6UVaVEckSUCBvBhdasaaoF3FqcmkfRSp7MpxPD4NS2jbrCok",
  "key34": "47XjPDRWgEGx4pHL6vnmSLr77oEhcRfPzmLETBDPEWLzwPRk1HpgGQSMuUTCqaCCuU8FpzdBpci6K6bZ7SjyckKL",
  "key35": "2N3F14XaH4FG7TmYvXKLK9QSJ4CjGGBCeZw9orj9K9NdUgtaQKcuT7fMfV6NKWa4vGbteYh3VVNoHYHthikAi1tq",
  "key36": "Voqo9HFDwdNKUn9tZHnaeUFS4xwSgysc6xpGoC8omaCpmSYb5h3hJA43c911eTUYZzis1xEThxqkUMcZUBtwwWf",
  "key37": "441cry1UQ8u7brkxapScA6ymUevoeCwazjrstHLcbuEQDXAaP1KbxGYQR7RUCFuWATdvz7f9M7mXaqARgbeXL1pz",
  "key38": "4nzN9815o7LMz9pVc26rW42cWqtEXBeiE4k9Tv6HJakzWtwv9PsDwtD9S5AWVrGWLcWbRADnh2zVYA2xcVxWUyqx",
  "key39": "5kQyyUknv5hkCcJ7M35YnrzmANiwSaTBcsngA2PJKkrsznwgoEo4Kq9uHov9hNstWrfdGY48NTWTPjRdzTUmbqw5",
  "key40": "3DWk7N2yLvs6tkYEqhw5fAr1pCx5CvRfNA7mHPiqhAFX7MLyGn4YvMRcDdNbWzTYkBDN6oxDge7ztfjXbLRZovCv",
  "key41": "2QuqoSqX7vdjQcB7YtXoKhaopMyKKijNCYF8ux9zeNivd4pED7sN3ws4CF4KCQgtpCLiKi1XTD5uwMxRRANyJyjY",
  "key42": "3ZuzBjRb1xgDVENdhuMuDoPZoFLtqyEHMh6i6jMQ1jcMt1gquaEccApMbX1NL6CD2gVK1aK3jQVaQakZ7XDGcxUY",
  "key43": "2maZb6Uh3L5hoerCH47eeQ2bZHnAou1piKkwT5zJft2RAALfivr6oPyNMbC27mUzmGtjycCk5ht3zoCv3GXzFEu2",
  "key44": "2yQqU7ifdkjLxsGbr56VgyotVXo1cSZJ4MJBjSYueHyUeDgKHchW2WNkMxGtxK9DRGkZQtM8hevNzyVpGYXcQEQX",
  "key45": "2G51ZcvnwdBvrg2vUUSTctmucm7L8ANTMw6HWu5oYrtaMLk23pdpTcnudsj9XDjmDJL4k9y1TGQZa3jk5nF9QnN8",
  "key46": "39VbytqkR8i4L8WPdSXoHDdqevSL7zUGjdAARmaLhG9YD134bxNZmPyUdw29WJsXebHcf5CK5YdVHQXKSQjVWEWe",
  "key47": "2ExuA6hMA4qBeRvD7ARo97BCCPknj2iUywRmjE2ip6Wnu9MjjBZTmWbKyDy3nqDzghf3DJ68E7TiNwRYQ51TetRV"
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
