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
    "41W4yRc5xPRNg15CBtVQZgxsQXMutZnYGU5CD5hqGCtX7tsQx3jinxipyRVchJkRJfmB23nz69MvChkF29b6hZwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXff73DPCXkSkJvBSpqu7iVKTz46ZKFGsz8ptpQnnJoG76nVcQV1NUk6kPDEwdLjvxkddk8xypSqhtYT2fvdruX",
  "key1": "4QKt9uPwPp3UmcUSToHUnGP2eanpxyB1q7ZntCf6ncZvPTd5CQUM6jXEeWsu5z2h2mnQMY2NuBWKEFiZwKbc8354",
  "key2": "61bFPUZEU2gRtLkBPRcx8PesJYJtgRWEAt5s6NX6cmgM5rcXkntjPjR21mGgXiAPsQea8ngFPN8Z5RZSK7Pf1n2b",
  "key3": "4pBJRfxxWACAHmKTtiaXsVwhTyBT5yrEaNjGfGFgdoPb6yTfmtztzKQMjLhn2kxAnnPUWAsfcGYuDjmNgbjq9CR7",
  "key4": "m6CreW1U7f8fuKG5N51eFnd5syiFbczmP9aRYyZnEuv1sQxgJ5n6bSw14z5JFgeRwo97DL1X2fVRud6BFZkuyZQ",
  "key5": "5mKNq1Xzxmrwh8aNzu57y8DvLibBs5PX93QLJEP2pbGLf4Lv7LGAyhn3LqnDuifQvGa7b1n7Kb61DwgWSWeSixj",
  "key6": "3y4uzEKyqr5FmdUghS6dUorxa8gdnENxNbaSjv6E4CK3x2zyxNmxw7znj2wzCkVSmWsqtxBAtJVQrmjSFGxyrDwq",
  "key7": "CqXN1mLJWmJRp9EEhQL6UJ3KnvDUXguN1ecUx7iDdgFjcu3xEyKuMnxuo9aVc8UWYmGPRfsh57Y1bGqvF8sJCJm",
  "key8": "7Rz4B4HNxYUgfpiUk9dKHBK8cDpzecTV971mrVphCDLHYePTHfLqDUTcQhRdWsVvQXDzedy7uHKyoprTzwvHjsU",
  "key9": "BEi2pwfiqGeZ23AJSReLrWz9YrMAuWcsVeZcoZMtLGAtayLc5V6dGxGXmcsA9yvjsKEBRgULN1hHMWF3D65UoPn",
  "key10": "3cTij5TcsqQCbcwKGk1SSH6VAdV6WgnzRaqCu4ta9LL83uT4ARYrcR55H9drg1tgiVJkaFnQN8mYxdSQGnykr8Bh",
  "key11": "5h6y6BEHee7EVPQZNLxNLQma74ybbAUCivJNdMTofRBGJswvyxBUdB2ogRojCHqGgPmo8fFCuyv4Kguvn5nvFXqD",
  "key12": "5GBAywkQHcXKUqAHaf2itakT416XWKsECrqPrZ9k8Wj6s293jWtYoZnwzXFmfQ2Sy26XiyBpfjDcjfNrPGYNqodh",
  "key13": "3zALM3gZGVWC8irL27kepwvyHUaTiirJvUJB3Uk3SgeJ3KTKmXt7Gz13b9yCEcySSEFrKrHZV8tube67wb1nxKwT",
  "key14": "39sb96sqBxqVQHt4QK4KfsSF8D8JooNvuWgeibYJaQDFZumSenGgbUSJY1ar3euHFNcoNPBu9hkk2DUUaHrVgxfn",
  "key15": "385xXJkJ4umTAskdjLKCgF3Z9Ata6vFxyLmi9evbFaQ7jGTSv7tFNmRbferzeNgCe2d8xyQ9VK3nYvUMFse7wXwm",
  "key16": "B1i9Ykw7BoijhcwHqu9WCNNxRP4qsnkQYkm4ZVEqDopMSphZ6FPb44DE4d5A24TsMZQSfHs4QKu2p8gUEca8smk",
  "key17": "2DqDUQtx6qh4kBb6581QcVfecsVbX2fDgeJmvwv1JrL9YgaiKJuEVscKVs2ayMto5nj7MCgWQAxrr9ENAQTJ9zkX",
  "key18": "3zXKYgZbPn1KMzoZxbvA5pVN8c2Ms6FP2J2QPfPAcsj8VhdaeK7TuEDbdcmCETfg2MgMCUUEEE4J24sh4gh6pZHh",
  "key19": "4YgC1cjTiGvMXK6Eqe31xZVP5gxt5BBovYio1QM97mAkwZpzzVew3GPqft4mTXmK72va1KLvwrgac4HgLXGnFU1Y",
  "key20": "98F5yKKxgdK1Lc2ZHcG7kZpUqX33uwTiYAqERhzdBdyt4cz1bnG5nd94969gxk3bZ9fLnirEoPAzKMLzZAS27Mr",
  "key21": "2ebzhccSjV5MTUE2W8UXVpdm62SSBftB3ux2tPNGUr98jJr8cNYAgWXmUvCf1VvpsdxQH4oSp2Urn2aLxnyB1hCz",
  "key22": "pbxt5ojrXJLcf131TpaTP1AcKMZF1SK6kA9VFU6cRKkAWM5dePTcVaR5RhaNWXsXeU7dNUXHr2Tx9P7DPYTybVZ",
  "key23": "ezzwB5eNB5X5JVNw9mH2LFrLZvopCbvD7VasvYp4tqgzR7Bc8DCMEJ3bP6rdtuCGAe9f3SEXcXdE9a1pdBpAbuD",
  "key24": "5YLrjqdsyZEAZNHy5CsneZ6VgCHmvhieoMfhygehMX7JFa6pJMokYxGaxDxdK6mYwnNtGuzEsiTsDxDjMscRUjW5",
  "key25": "2ea7aVQJf5RnzsQwBzMRYHmDiwFB1heDm22AN9frfaXMWiWEhhaTuVhjHW5PYqUfG5KkbTEeRbXquW2RdSf2E1qP",
  "key26": "3NPXXzc1oj2ivJBFu8NngmrSkY1Y94Na667L7RQTrA1h4QcxtZ5JCjM74M7uqkTokFb7HH2BXhJkP6NGhrFRcS5m",
  "key27": "2Lc415NT3VPVahvjCyy2XJJCPsXuzik2eE85A5DnBndzL3kcoinhD7f15tq4tbfSA1JCG7uoR8P3TrfgEXaSYkTk",
  "key28": "5JB1NtgqCRWwDdF42yTodANgPGSgqfTEJ2P8WihmtG5NGaPV7cCyyPyvTCU73qyJSeLR6CSGQGZ6bFWQjjCQKAbg",
  "key29": "4NTMi1duCZ9ix61DE1vjX6zeBwZuiVdZdNBKzAPX9uP7yBaPHA33uiArJRii4VjWLajuoCDfAXTfUzFT3bd4uU7Q",
  "key30": "4GtDeC1F48tGJoWyF5tKfxfkJKW3Rw5bB1p93DisUr7JMrocHvofLyKAWeytfEyDGxiiwcWvLHvAhXUGW5aEw1Fg",
  "key31": "5rkS4sQzGT4qsW3B7yGXs1qvNxne4CPBYRkaAgP3fd4tDzvm3EngVRJ7TWY9WW8EUinrXjq1J1kBFQMWQFmmdFGh",
  "key32": "311B9ExEnekgQRmKQZjyUCZdyXvjW13Ei2prHu81z2V5FBzBrmSKVBq1JhuYeZjsxstuQRzBNwb5TmXsmJVDrUFZ",
  "key33": "63y4p4SiWjphZY38aGmW4so8w62WSstDiekqjuUtWSU71FGt9y7t6u6uSFWdi6Dw7KhdueQBvYsPamB8BRATADE7",
  "key34": "24JgNnvn2uTYch9eA8hw25reEdHpN1WTBtMynorssyQz4nohQ1edwhXhSVgbjnv5suvGhBoSuQzw92DYgdHaieKV",
  "key35": "2yMmRfQTGtPagJJoGwR9vkAGnfD2HtV9M8DheUM7aJ496UvyNs6uRjK1f8bkY5aei72YyS31arH7YQkhbygM2GtS",
  "key36": "5aqrRToxkNjNXt1SmcUt6yAGxjqWF4bxbF8Lyq2Rir7CwQxxzo6etMppYnjStQsCCvYEDf7iiohBXhqhYGEmFyEJ",
  "key37": "2sn2Vv65vdxyxEpkcf8BgNV41TF2umvYbNg5CWVq1ycobpAmjdqArdfXkoz2KtUqpGkbYnDNDToGiwVFQmcgBvkj",
  "key38": "4W38z47dAeBguMYmVhbAJHqpS5LiugQWFbdKD1PqmKk2KK7s2RSfhSQRCmGAopXGtPrFmFs6i5xTqFjABmPxbKRX"
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
