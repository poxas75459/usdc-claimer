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
    "qVThR9JGBKEXk5xrokE961j3xoDKXNMbyT4DVvAoJn2f6c7mtvD326aVJExNFKK5TcEdUFukhWSNsQm7ZRGNKyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62T8LC4yGGKjcvbmEDNuqMYXoTs1ZHyEGcS2gqVkchse21sFDVMcKQUS7g4ZzhRKjYv9KK1qF2Wsst5z3JKXb9wS",
  "key1": "3BQ7KuJe4WDxJo5DBpknGRvvBKHfHucdWVHRXXPrvrsnkgPrZuSTzg5B1Hc9Z5SNV2ids7LR77PqBKibaZqSrvQU",
  "key2": "5RnJEAkutm6iXm5Ni5LfZEZfBKCvT5NDz3WDefAkrDSddUgsEkt9DEGW247abnPWQ3gwLopQJvdLKfunXPLwvEkj",
  "key3": "WS3ko86jfHg34LJcB9TnYb3A2jsz6YMd4hRGVFqSK77WpAPkw9sbaYZ5LnUkqDnV1v3TWB94povezQ5BVfSnwiJ",
  "key4": "4mrYMEgVWEKSjpUWtMgGJqYWak37Ds2Fb1XguusdCb5jxG9yQdmQE7jw39Qr3FXwe5cCnNNn49EyJVRgMpLymznp",
  "key5": "4gC97j5QV16uJsXcXvMJ6vNjUJ2kDZbFG1naC1gAiqneR4wZZccQxQCMyn53muihBPnndcj7CuuvkqvWjzXtdGet",
  "key6": "5UQpAdppzaPkoGYCSsoBcnr2sF7EYKgGBKuRnnHJFNL5a1DWUu81fr8gMtgybf1Tipf9WC4XcDk2qCzzUZMDCYrw",
  "key7": "47AGtnnn2qcKwHYUShYLfu6pAwhUC17e42tggCTAyCTt1fKiJ97jLWfGPWJU4696gpsAaTb6RF7J4TNv7VHhzzYA",
  "key8": "3pYY6oyYACzhm4xW9PY6MPNasVn1fUrRWqiShyyRAtU9gn99V74ocNEfBTuDM3U8eRbj7jB8UW8rwQRm4FKpPbgS",
  "key9": "k5KCqxTF2rkx1RayJf93AFJCZEeQxypT3FGwiRTqvfrKCdvyp1Ds2Zvcfh1AGpxTQ39vEQLjqA1K3sHckcpXBo1",
  "key10": "iJK2FbMnKkamfSXZt9AVRXJxhAXD13dq4ynRxKqKsYCZFfQbR8kvtzGiQ729mw2x5jCLdQtQpr2L9AhdwMywvPN",
  "key11": "4mi9XyYCxLUvvhNeknXFguc4yJFH5KjHRJWpbmFVFhKb7JghgQmeYRN5ts3xm4n9UyaDBaxGHcVs662P7rUTA7EA",
  "key12": "2zusN1sw81H2ErmAmRYPJ4ejyCcZ12JdiAvWv328zjVb5iJLxLtpz8b8NVFTEATaafXKtCMTWzLcx9HKGhUwTxxA",
  "key13": "4rSjDZmAJsQ7kUehA8NWqokryVFgF9ttRdr2LW9u8C4szCXnxG48UpSboitKZASZNAgmEg5uaEBgL8nKGQS4izzr",
  "key14": "3SUDhsdVah1epNJu9uPqZL77QFvLZXJm9KiQEnnW8Pz7orZz6ieBzRqEmW1BZu6s9q1N13hnPiotSYSeaXPz5s3X",
  "key15": "3UvvtPbQHayAP8XoVHiy1wszvBoF5JGZTcVq9q5eD5CdzP92bD4PUvmMnXmh7enXGueCBWqoGYPdh6BGhfTuudhB",
  "key16": "4zvLeWKiG4n9xYQQXQeLY3SgPKSygEVr3KpbaxCELMa6Gfd7xugntthhNrpKNeo4Tj2B256eeurgArdpKeUWNSRC",
  "key17": "2T1K2RpPjrhjqKKACpEYf5AfKZxJTBZycWqEZcgizdTc9o1BdSEXgBG7agzeLFaTMFkrNMrvdKkahVdejNJv46gR",
  "key18": "3MYT8seQxq4gsrMH4TpuZ8g2kvJdRWCg9eWADVLEYRnyEmNxBNciTdQzJTZbZCuQysxfNu4wSgfkeJbyKTcJuUqh",
  "key19": "5aWECHJ9BRcdtU9GfJEEj8m1ZhE7dszx5enfsjjQqzdaxggXCMNRkXkg7Tm9XppDmpRHNNNzjRRLLPCn482qGi1t",
  "key20": "nnb3UCQZfTe2qMFDzuPsWRCFbRoQ43NFuvYXanuCQKwwDQvqum89bFdiYz6w7tftDxZa3dFZenr9YcLXsBTcupy",
  "key21": "B5an9utHqnqK5DGBiNzDWuYdQ1qEXt8woLFZtgCN8qL8tY13nFoD1BfTYqJE1aXmxpZCJ9mNRAwxxUiUkwYoDKU",
  "key22": "3nP5fyLdo8Sb3wy57ezpYCmqfw8fmNoBTn3gxot9wdRPemRXDbpKeyV49aXt6NAhioQt9FQgvBmYX8ixeXnvAptB",
  "key23": "AyDnjXvr6gy8DtpJHg5JWeTTkK7CUzQjs8vufguvDg5KqNecEeSHd1GCNC51kJJjfUYn3GfTrfKceBaDaE8hms5",
  "key24": "2nTPDp1GkWBiBPtc1NTrRRpLA2ddJgVMenwdybZvTDGA3LzDv9dwmEXjtb7BZZ2ypWBCcwgtXRR3jc8VtQFvkuLx"
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
