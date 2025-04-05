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
    "4dn93YAkiVKdfGha2NKzg4hyogG2JRv22ywtN8Sz7vwhmv3ST77zTn5eUq3cVyp2S2RaHaosXTz1xtigxvGcmWok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TuNNvtWkNSzazB8sbf1SNeRp8eMRAKHG8A7oiA6Rh424ANthcwhCL1sLXzWrTCk6S722Nw5h4UgBuovLup7hGux",
  "key1": "BijFv8MaVFsU83bMEamuDERbxH3wbbHoR8fdRbMZVH6H9LDgf18Ej8rVagUHK2KQocNbGG84StUWtmLzFUxWvkc",
  "key2": "4ugty8p1vY2zESSLmKFc82da3YE5LEC7tCNYv3wPerjzjr2XV8QVNs92V43xC35arn3AmRm8fgt7aKYaPqkehiL1",
  "key3": "5qrF778VUJj57j1jKxBiZMscRgUzaQRaehcgdiKnEtLjk2K9gRMZHdcGBXBo3fMBRyVADsakRG98aVUwriUuuo1N",
  "key4": "4JZdYtTQ3MCrnWGoSrBQctPYE3s19ZcV9m5CF47Fo9mkK1dBiputumR6eGL3tGCzzmCpYnyAhcRP34pc4QdZxYuc",
  "key5": "2hHdVebAWoMH8NV73bcL5c6qGCjb3CueeZZr8r8pdQ8Lhgs9GYXWpNMvFBFC7yPmYzuiMugXsFaCpKsa4zCAmbu6",
  "key6": "5irAhCFKnmuRVV6aT2H8VTzWh3YAc7xVeiWNbzmcBw27HK4566kJrDZVdqhLM45aRvzpvqKHjtvV5CfRJuQ4MwZi",
  "key7": "49vtGXjnpRTbcQiyiQJTGFMp8AZS6o953V5rP3YJRfNgvrouB1YJRVT2aAmwJTM9bEAyW9wqTBpaCJYE1HW6Bh5o",
  "key8": "4DYZBv7XzKZBDfF8gm357mvJ4VuqR4LJ3X71AGWxERyZXCiFVkCrRme976gCMxPXdiqurFNfzKxERoTt4HiJEMKM",
  "key9": "5SK7vcCkiuHLLAiAVQFz55dCihUBDAqhVyYXTU5cW8caK2GuTSTHChjfVXmGSsVbhDga7bz4VRaKR72EUgUDZrfE",
  "key10": "4cdziPbvrjPKt8csqRUGPfbDAAAoYU3V29BiubBpNK9oUge832uhZnMHzWfBmY9RMQedeWGZtZKPJKP4CPAHGuWw",
  "key11": "39n8Lo69PKpr3L55Ax2wBsKeo6c4QUV1fT6UnpX6nwkuK72w9koEZLRkNutadHdwuGCbNp75APUQknUgEZrbJMsU",
  "key12": "5pq7fdMnLFQ368FjLZbvQRZuGpBtUpfEBv7YuKgcg8RjxJcPgFcR6BHE47RmeomdxwjeQjLt7YeZ4jTYa4Fg4fu6",
  "key13": "4RHYC2F51ySBtfXSfjvUD26ACGtxm73LCisVVqtzUCTCKzrXUt67vJoeMk8tMs7fD2CDwqV7DBShXWf6jdE2XLJr",
  "key14": "41uZaSd9jX1cm8PzFX6PUXoHjWfHQWYUKGnW6Y4foUdYWzk6wVwaNUyfNmYKQcXRr71MVSwK7uVryfakd8cdB2j1",
  "key15": "SVJskhCyWeTc8KV8ZmbFb3BGRR4Sj4hKbsGT2ow1N1GNHBY4pVFUCN25A7f3yQs9n1ct3xz85qF3yoNS3s5ZjEt",
  "key16": "2A96utyKeq7DzxKMMkwNfp2TBwG9iKBgjBQ69jgHVQrryDKhrY93bJuZsVYmSjB1Bek6dVpLbCM1tg3G7AGopUbS",
  "key17": "2beKyrHYG75eifphtaPQRctsS9Yn2XumjMaMoPrXnufxAZnfHJav5TL6rSTaNuPLEf22pFC58Szao5LCvJUATeWa",
  "key18": "4NogGaGJkCLAHgatiRJEYLhF1vopsJQohoFUd7DHcz2163MhqHmsMbaL5BcCq9Pyy7cT1NmzSh34JCNtqtkHHzAz",
  "key19": "dcgkKtCKEvmsmL58WTybABzUm9XNsBxdFkBgPkCFRmdkEaotRHaAdgE6kDueEq9nGmUGUX87egVMRnqahTc7Gwk",
  "key20": "4KjQ5ZxgRk4hX5dDtaCumCTriuEwuD8noE8D6Yja1tnX4ri2euzwkfb2FHwjt4FVnUeH8Y242gcVKLMeMU95r4xq",
  "key21": "4rjVZYMVrwcGVsZr7BpFh5nJp3KkMg7D5zjTjrwbcuW4sqgP5F1sGsTM5jMSCx738CQWELGSe12bLpL2DH5J4uNM",
  "key22": "25A2cucgchpztZfmymj1UMytjiy1FcEho4Ds3mwfcV5mcqBsFhJb6zyUNTSERx8isduRJBPrbtFkAKp5Qcp3vxdX",
  "key23": "5ziU9LXADS8hA5YrbsMX9K3W28hf87cUpaUCCDyTCmtTjx2hzCFB8SqCprepvLhGBbKoWRJShuGdoDFqQMy6ARNp",
  "key24": "5QkcmBxH5L5xmgGfDaCeJdqh29FhYWeQQu4JBgdn83hmWRB2fqdjC6WRq3z3jvY1fhPJNDneWvgEks2kveebTwfz",
  "key25": "3M2n7aG2MHzuqN5G57ck8yBKCzRhK97myq1buUdDT3WWzrRpswc7v2BbYkoYLm16N5283wZNypYHtFnuzSTZNUUT",
  "key26": "3CF491SGj26TBokYjn8MwAe9Qyf2WyjQXibzFYBFns8UHfaeLGw9AJhLTAy5BTQzj5TqmWfhtaot7Hdz9tgYJWtU",
  "key27": "5oMK9daruxwDb6r7freHP9656sBaA6KZ45XDDYJQwdZWXypvMHxfMobV1e62pGSx7rBazwNztHu9ujQn15w9CGdH",
  "key28": "444GHGaCFMVDLzy4vEdhqeWbyv9NYoDrMFkNcZeMnM6SVSt9nA3k1FA6XjfsVUZiuDK68Rts3bB9Affcnfp6oFaS",
  "key29": "243Zj1QvCrCuY7ugBt9namPrzeRvWbuxpbiRsY6ZEaNStVoeP5c8rZx3o1msnUnTmx29dT3KoJU9HUUAR88rXr4i",
  "key30": "4QVHSTZENXwphHGpdzNkndwXUaoxz6nzZFD2dQXNanMuuXrFKk2XbLKkNHquLRDzqu1kaM2xwaUCTDqpbkH3wR4R",
  "key31": "3ZzggBHZuEWpGMKZFtrQBWsP3SLs314XLvrR5LAJMfCoAWkFt56etSL4QQxQwCCALAqXrLukhnmsvW3K5nSTv7Aq"
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
