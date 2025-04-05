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
    "3ZQMJodMzfkmwP6cNiKteiswNd3jfHuSWbdpqGDF7ZgVbdDAHnBtvJRbbm1jtmLyuv3VE3Z4DLDTn7Hz8aj9xRNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o6EUY3zJiDsmWVfw3DwmiPwgPutsvYH8kuhjkNysLoyZCWxsNp1R4sDjL1FhrQkXSq5PydY8n8WqCTjygoWHXnJ",
  "key1": "5FG8znupJE7sWXY8GfzeH2rRugTDDim4YqfUmUUXNEP6F6vCyRdnRWSzGbXtKezMqmwtmvj2wAomQw7Y7rmsAYgp",
  "key2": "zP3JFKhKDvHjiR5EG9DGUutbTX2f9bbyeLfBvzDc5CQqkTSVAfFRaZ6PD5DekFNY4nnCHhyuaBYVEV3iqjWzrmX",
  "key3": "5noqd29PfLdEwTPxT1gDznsvinPb2Pt1zmiLv7d6isASmj5baTF664ckbgmEEbiuwCiz5KtoThMrU67ypRsyXZfm",
  "key4": "2r1Xh9tWkSDpp3gqks2WQ5k6gJdGtS9DALsxSeXVTsVMGxYh5oeXirQSu2swcVV59zrA73seDvn1ZYD8AvAZKFEe",
  "key5": "41cYWJvnGt6JwEmkZ51tU4p8ZwM8tQxVBD9NwVdomKpZ3DSpj29iq1sxfNYg4ERKKxViqPsSuyf5vHSRKh2KZrdE",
  "key6": "4SQtnKjB52RdvpfstCK1uj4DB8QrQnYHMKAK7yAvZybPKdeuGqaRuqd6JKQAhFSS8gzBEo7jedn5hZJfktrRHqr5",
  "key7": "1xd66Cr1Z6Q573ETseUuP9epcCDULgxgA78LrdiY7q4mdLGh595hRAw5piLQxUFd9mDDzz6hvfKcUWVEhBHuFCc",
  "key8": "3sqm1pdSD4o6oPfgKxaGaMpUFvsPwovBuxVQTpatn7mQ9E4b9DpwTVit92BghFtQfM3dkaGFpWZgDkVLVYZSApKg",
  "key9": "4CJtDJTq3gUzKSopGdYPiQZSPVBH1eWMFnsnWxr3BihaM7tdTc87Tg61TRdMtra7ffn8fSSfhw9t8U1RiyR9KXU3",
  "key10": "2oNC8HwCH84rgmSLLRPFHGaYitjazyjKXyPEaYD5xaEaUhebFGJnRJCbQWS7Bzckjekn8pDgwU8YsHb2X7qJQXXp",
  "key11": "5h8skkHxQE7keyQ7vSo9itSwz4FHTcJUbbVLHaRtJCBdEFMkD5bWLUjbc2wn83qtgeXgEXGADsSntZbfKPFUMYBq",
  "key12": "59fA93j3fJbSXWi3spc1uYRo1XVHWixpydNmqBWvBqAPzPQ8y75xFMtygWSimoVq4BL3XbqFZtpipE2oWVkznJR7",
  "key13": "2Ag19UWeStT3Cqe8qz8uJAL1TiSgA95CQZfwWe5vG1AzAYRPsNeRqwEZ5NGzsyAnPSup1F6sVxt9TkQN6wsqZ5nG",
  "key14": "5mfadi1GCYTHX19YjnbaeMurnr2cD2ENPHJXzKqqJ3kb9ReivyvwXxoFiYNLLyainzsEdwqRmKBgQWJwvXXXMWeQ",
  "key15": "2kNkQ1Mz2UvHXcDB8D7ua8zihZJTmQo8Nxu1KJvqeUBpN3kF9FmkkZTJwFJkZyvK2kfBpsUW7xqUYxYk8EhvSN2c",
  "key16": "23PWsW96rJ7ZNhChTykLMEz9JhrKcm4xCGLBuBhr9QVwHgBUxcHdBitEG7NeWaj27nWKMQCeBHyWFqUjYuuUMsia",
  "key17": "3JJt6vXaZFYHJAbXzKdHjeDRDnhBUsrY6YbcAh26RmTAV4CUcyFi6zqNxsHq1KAdrxeNgbVbT5tkPJSaUkyGZAEJ",
  "key18": "24jhtTcHJFkF7efyFT1Rn8A1vDy2M1C6gReuGYXpYzXenhpN3Tk88yAcVmWpmuVUJXMZBEYcaLVTqfErQWihtafz",
  "key19": "5QKoNQSu2nmdFiWriDfJrs3rE1kvJQYcCrWXRSMkJtvyDVhSk2cpxZQysY9U5XRsnbPS1LoApfG36SDh4Hzcuwv3",
  "key20": "2psGskRtVm9xyvdzJh1Dvi3rpkYF7nQjr1nr9xGKwwLshbkiEyLiJUCHMvZ9aCeSeDE3weD4wH1Bd7CQqQe5a6px",
  "key21": "5zjiYJha6hGWdxDRD9EXvFtVUUi1CPLCBaVN8mQgWgVfjKJJYfGBHkKwqL7xaUPSvNmZV7yfC6w4j87MKFezc6Lb",
  "key22": "2dHFrExxBHfKAPetnm5nfz5LwPprxdqdEUQnDbTDWRRRKVFxFzjyRWocQApuy1ppRFAhf5hFLANrCZvAP4AFj8zo",
  "key23": "mMVfhnzn3FSqqWVXQxLkaNZhvx1FKPBvpFLKKGLKWyKHbVsvfCSoYyQ2oyJhLH4Kfi4rn3kGdnVbteuPfDizvt4",
  "key24": "5Jb829ZfFT9pwzbLimZJxpE8HGTrAhSsXaPLDpckjucZDe7k9mWpFxJi5jsCuzNn3yuSieNMUq2kaYaMkz8BHMio",
  "key25": "5puhxKz8442EYUTs9VgMYQWY6QPpdWuAzTbrJZthio3hoWWoWgWnu6u2YvgrtUHFkv1KvSFPR7Q7q7J48aP87Bg3",
  "key26": "2Vds5YkfcEgvkQ58hX8Ecj9V1H7HjhRQBdwTfWNZwoUHhjjiJemyPBXWaeqiuEeDgKHWXhmZ79PQhWvJSL1B62Hn",
  "key27": "T9v3CAbvURMoKrKU6v2eaAEWa6f5dqZfFPeeceQh7FPt8WvY3NJqmR8hRR4rhXWwE8EhzmGrWeToiv8q5qVRms1",
  "key28": "vQXx44xSkb3fRp8Dr7BSZuJzF9tybiHkPxs6MDGHpZxCDYzzjWkjsRRG11JptibShNYJb4rihErdCTpjVhSVxZE",
  "key29": "2MhbE5e17PpiF4JofW8ndnPwZXJdccJM5V6kr9PvL3x9QnoedqweQxcyB1KkYp4wHXV5Yj9J4KmNNvmgAFDBmJ8V",
  "key30": "mgzecwG8uHYNfexrnAuqfyYng9qstSthBdnrQDdUZmKH4HoMWpQtC2RuymAMqBkVRVAB1J2QeJWZf9n6xsMryQu",
  "key31": "4yKc2UThNXX1DhqtSkFurqYNr95xNtQbM1ehBWND7srEuP18YDj2jdpaSq4jU1mWmHMHYJ77nQY1oC4oK84A67Cp",
  "key32": "tUazDmgR377idBRzXU6D5qD1NcppfRCzzuu9ecDaj8XDxrAcGSUtTMXqyUPJSPvuSBAa4Mh7JA7enYEUwzMm8Vz",
  "key33": "2hWY3tSD85EWszXgUW4w2xh7qvvpicHd1xUdJc8ESVjoktRkaEBnNpe8KTPEm7tLWEn8qvqs2riLaG3Pi6a3HyXs"
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
