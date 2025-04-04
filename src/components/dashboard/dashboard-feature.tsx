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
    "2eBuwJ9CFj3XpkCLnToyzAhgF5VnSWuASkXeq2Dv9oBHkxCFa7UD6KVqmVWSCe2oz9HCfGSaWnZhk7hM8tZ7nBX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fC6KWdcuFtoy9WE3hD4ChHiZRosrHrpidu7fwWYwbtRtXE5y6UZAHqx6uysa41oy7g3BdRfsRb5PNdQXVNiZ68y",
  "key1": "4MFAe4RQaVaFJCnTnYf93qeGooSnAiDFHmGa6DCd2Hfz4vnvfscru2TH4g3TPpBZw2mufJe8cYwc3S5Vike39azJ",
  "key2": "4cz97kfgQAGmYqDCajTDUA8NuBqfbLEZrGPMoMFpVuAprubtWgWdLNYoc7AhHgZMAaJUcNajyVWM9WxbbPk1vsCj",
  "key3": "gse5NqtNcxGCEtLMdtpWBTnEQCSsFLBKFrqJHt7sUFYUEcN8gbmHGgEU9eotKVxh8VjZqzprTZTQAqttrkcH5dE",
  "key4": "2piALuCJx96hUyFRW7yzVCwTk7aPePhHYc9wcCJaV1fSBPreat3ypo67AckhpucojBbCLxPqxMbAWNBYoFThoke2",
  "key5": "3gkokeGogGrRxGEt4B6wFYKdxrCimCeGG7rUreY5K6Q8NhQ7Bo4iQVA5Fz7cfy89tGNZSJiMwkgr8fuosfTWY337",
  "key6": "4MNbWe6j6VUaxKFwN6td1gqDyznHLw6dR3JFN4xAESqUgNETVub2F3UoMYmZyWVop5CkBsmW2Wv8JaNoVL1xrCU1",
  "key7": "5p6yFmZywQdfQ628zhNEzAg1XoZMJpXMoiL9otF7w38Yjpk1HGvJxL4XdsUZQZYoHB4CiBzgfA38sEv5ErJZLATo",
  "key8": "3NNxDkGqyNXA8EAnMHKKVVphKSptuskZaBxfev69t4xvE3tLcmJNG3StLd5WxkE3i4iuzYoL3TdGr7hrKLQUyUed",
  "key9": "ZeGi7tVKVmu4rPnX7M5RwGoiwx1s7YPfD28qNMWsvLaQvpmRn6aMVpZhAJubJopyF6Bgmu7sFimxzHSvxuPwVSL",
  "key10": "3yNQArzzWSFneV1M8cm3hXEBZ3hdS2tcctkJHKueQ5eCJ4Y8xhEkpHE6BUoS5dgqmuReq73FRcAAqTunq4aowe3x",
  "key11": "3Yv9tBdfZfvRuM5nw6EoXi2CokXjtnDq4Qbrdc85RefUn4yuv5nPy69v8QikSozdwSvLaRB83kDZ5vo1i5vDPw2K",
  "key12": "3HApTvtCKbeD4JnoP3mpyotA7YazM1pB6DMjDBrxKHW6je23F5k3ip1ZjE1dicQVaRRAzfpWFzfHYNUVFWA4PFZf",
  "key13": "3Sq534F3fcMqSUo3nAx8rBpXxXb5TTHMFV82RoDR9feafBrM6yPq4VX5VHgShv1FmcTGL8uXnFcWv6XRyZ4iLVdW",
  "key14": "64MLcuZxcAAdjn2zXs2GD43zdKm9C1T6LJbtEYRD91XZwjG6cPKt51auC9DQeFuuPHh4f79bzMn7VEKzqPCyPMN4",
  "key15": "5CnpwftQncaxbxvoGDVZyBnEcxrjDjbZ4S7jvtu2geVkgSSxZw7wVvLZWgg76nCpKdGHPjYpxedjkMXQb2rnMn58",
  "key16": "3dCiySPr1ggU7f71ggdW23hfB1ps3MjsqizVoY3GQPP2hESSHYcyhG6GNrcAiYARvtRTtRsnr8aHhCjz5kCUn9XY",
  "key17": "2As8pz9sszyGEkZZqhNmqrKhnredczivGsemrXdrHqhNjv5xj15PxVRRwSdcrVcPe7nMbRq8325EvMpJMRw4vZar",
  "key18": "4HsZigYGNN2HqMjixnWSSVrY6bQCc3K6ghQMhTf1QEaeZ5QvtHZsPN2WGbj9PryptjXHidG7vF5NNwiFPtgczWXY",
  "key19": "26Yq4fNk1qGUSoUZbRPqa364XqFi5E66WnKQ4TXwUgHXgcofbs5kLxuReFTVMJFzFMvSwGm7u9xcDRzKfV8xHm2R",
  "key20": "4NDQpt2ekigBVCr2VMpuvsPBTWgaVdDs7uSwQY8JoKz121mTi1pgLBoTurcNMNZZkmHZXC9BDWtkMcLFJ5axcY2F",
  "key21": "3XpfKJKvSGVXs5cjbAJDD5nSqWX1CoSAPxsLZPnDXgfdcrFb1JesJdvXvnv3aw2zHK88UpxngaJDAdHybhhV9vcu",
  "key22": "5MsXWn4WCk6T6HENQzsS9CC185UJSapMQfzapzySPg5BQQWSJzUd23x6nyfwCTwDukygvpy2gE1ST37znM9YauKY",
  "key23": "5TGHm66nh1pQeiNNXqfS7GH6vMGnNuGCvuKCse2T9z8U6vD2FECDUujTTxcZY67PXr8pqwsFohMnAjRoWiJNLZBC",
  "key24": "2MzVUv5sXU95U529x7XA4fv8P5wt4ai1C5JCSrkEsQ9DPTLn5iAmWAhoQ7wjKu1JTJrxozK8DDKLBx3vAsfeCaPy",
  "key25": "3DU4amyvxxtpQ8aKtMFyLBSriheS6U6caAHYiFVsjnL5Bhp2MMpHNSH3ejYnDbBbT47KS4aPa6Vc2LPPRev8YsLY",
  "key26": "hWTmBgQxh1EvPGGaUEynoNzhTJcoA5Wu1fP4JaC4qZftPLUWcDeHkfkThzqr9etXqS7hZ6mUBhKCEd3DzjYuRD4",
  "key27": "4bBxoYxakxsuBcxHGBUf6rYm1oxe6B1HhmgonfL4S2X8CdR9igiTXpuEtugjfb7phKYWCreG7SJ64MYSM8qd2eVC",
  "key28": "5iV1y3SWZRWxgsmEr31aDxV5GYW5Sd78YNrZ5DCJQeV98K9Pkv4vtUT3uoSoehWAeywMvMcjru1Stkd9ffr9TGjc",
  "key29": "59HnP9ocsBT9T5mh6ioGUw1N6oojy8KuH16eJ1BR5Zc1KtXe47iZcmf1meFKW9xxxKsf3SFTBsteS2AnRb9SRFSw",
  "key30": "yQzMyUUVqSpPjxnSbyF1nqy6NbcZGMh4wkwDfTdHfkcfQu9zbD9y1nZYvpRXVtXdB2NdD2oR8Erua9F857MKAg4",
  "key31": "2ghx9nFGZqjd12V1bvb6cyTztuhCbqLHavtMDmecrDEDzKAa8BHp6doLAKFQbXd6jFzbRoWVEY2qdCeZiNJR1TsZ",
  "key32": "26MWad8spRjdA1rHMrquvha8jkbii5v1hbbbt5u7bwdULjUHavEjWDSSJsn2NwCi8qdChM1w772p4LARJj1AjWfY",
  "key33": "3B6kqci5UHYJfBtZdt1rDZyQZi38gbygpvz9a4gJEC3NTxvKg5H7KzpvrJog4w9hhrqbQBwXpqusEk2WKVRhxGGr",
  "key34": "2Z7Lew2hft2cr5g7YhpPUioY1acmf13q9tnWFGzXSetu1BJfeEkBieN3hKbfouuHME31UsHbe2t8GYzh5bn37SnF",
  "key35": "5JJbh2r8nQ5TZRjGygQqgB1TnfstvzNf4ZrpHXA4xNNiELV9aYLbRTDaPEeAF8QWQRQSTk1nY6skDdjN9RarkoWV",
  "key36": "4NqQrBHZw7AhUjvazoN3p2hcGy4woyoB82YNSN1CCA1EyjRkMqQyyhVKSoZut3Ziwp749vNS7pb9KARnHb1nTcbn",
  "key37": "4C2geEMjn2ZX9rGP4yVtseWjxFThLnLRAz8jB9HAhvfFmTvRpBHQjHTKask5tMrCMCPcu7caXBwFVVytMoovgEpX",
  "key38": "4YVqypJ5t8UR7igeUa9LDpSvunz7js58D8Yoomtyo2ho2on6iTfE5XASFaG3PHhBDeGvYyfRgdZyHEgvxfUVpJTe",
  "key39": "3kBLL253yk2gftSZBoNa5fJUKrbvkNvmp7JPeycWHHQhNvHWbvNNfXHV1ru7BrmHQ5Ndk8VKo68JLMXx7187wVK8",
  "key40": "5RNh9raVdd1NSfAKbqWGFgT9NicrqpzgWxFrEByZYWr5bXtxe7hnZfws8QFM58DMskQBsJwzoBVNPdioUnLYBump"
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
