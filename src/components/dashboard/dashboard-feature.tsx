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
    "3t1AXiYf2wy4kECDhTgwGi8CbAXMoYXRa8FnMfzjD1TWcTbnuhh3N2gnD8ZVw76fDy3PStgg9VRhzgyCM4d5yuGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TXhAHCqZgSM2EBrhNxMFz1pdyVh9Jw5r1QzrGZWeYNNrV4LiXaEUCK7hjmUpxwTVWvTWKZDBmscvR2GAXNbnTTb",
  "key1": "4HrT5n8bLyPa6pcdtAxcaiRqsyR4fe6CPEWxzRnLH3jKWR2J6ATpN2uWpB7JVhuPYmu2VqqrBkQPtG5k28tS7pm7",
  "key2": "3uJWeLUTuTAXBujQYNuUWPv9Ah1ynsX2kjFKnfrovUP6atwVYqH68fjvZrDe8fQYrjCehBXqnZw1RjcbzVwEovUr",
  "key3": "5VhrikTPtQ4qEQRTFntQm4Rxarqr5zyNxizuxXhqPfKPUequmYp4VSxwthQKGop3Aw3oRWNAvmP2RGeEjHK2vb4a",
  "key4": "Aps4pAV2XmC6p8kFAzAUgNTP4XS2rRk3WSjaggmAa29yw5edN15LvFzGiznh38NMP7nWe6QeaZEZdhWAUBTLTh6",
  "key5": "4K8YvUWo5nUYEBnt2XfQWmmKDnbrWnqjBWTaxkEEcvxPC7yeKsHhhpBzi11NDckCN4qBwzeB9Uuj8ogdww23ZKSE",
  "key6": "3g3z3rtoeaTt1HcxDzpqhfAfyAso8MNN2tWRZPU4WLGXLwq6efJ73CbG8W5bT4roChweaanyhrFA3S62w62QY6zR",
  "key7": "2ewNeS5hWdEWbVBASZ6UuZNYUfL9Ne2S1TzPxsCCiQLhfJrwWx5cyibHZYefFAZE8sHmHdDk9aEopgjYJCTw3ad6",
  "key8": "2fVcjFGKEyhnU4aYgaz3ELeQvGhDHU7uwDYYkB6CoiXLnmr8kYc2RbN649nHusbQq8kwGeFdKvDKFuugCc8ojw38",
  "key9": "5tyQZ5qLcCiTHWXDsmg43bopUBLx4etfNoSpFyhjBQLP5a8aDQktxw5N8KrkRP5EPU1PCVFrn8g3SqwGigtvVze3",
  "key10": "2UAzkSQ2LMSVbuTDisS7vDjAJUpYaRP5Rx9xEhCqSkdt73SNrQKjzJ5EzPb74G1ZfcrvfLfg92X6NkNhAbUvKimm",
  "key11": "5Jcqs4pVMBMnqEetjjNxuBcn53uH1e3D1mWQ7TRaHAy4GWptdjBNpuftxMrU5uTP5zwqVMjs7iSpGP11XDMdw5TC",
  "key12": "65QCJ6qp4oadZ3bfDio5NedoEbN6sKznvHha6jb7du3YpHP9kpDWHDcYRpMjPUdHauksiRZDFc2XvfLqNWasFVoU",
  "key13": "46tRg9V3bYsi4sCPY1Ww2QPFN2s2Erz9bNaLg6ZLRqDmoWJFBGRvwjuDJXdPmzeowu5RxTWn4cMBWBUPSgNA7SGH",
  "key14": "5mBVEL2Fs2QwheSFvuJ9VsFkrfphCyV7JRG1q37QSgzHF3W8vod5iJo7eJrryYaRRRtfKABzvb7zEutVyJDFqdjc",
  "key15": "gZ9ivH2HqoNtekSLwZZN9YkBnRmGYZRRXLXZR2DajVvv5Kqvp7Gysv8wgXpPvCtrQ5tgSQPJe2SsbNtm85Cvqz6",
  "key16": "3hFNrjKDYgMQ2xK34juJFcpH5gdUQw8fcyphtz3sC2bzqXTrGNGbKBbUELsv3K4WxMhvPw7DjAtkhaxA9ABDRKpW",
  "key17": "3X48Nyjyp13ogMQ8JSKdLzn82y99gpSiJfwN3FkZif6zC7WBBjCPbFcWfgTshvtZtJ7GYpFfkjQwh5zboQNj73do",
  "key18": "56E2MXKzuxX8C6onvJgomNhTt56iVP4FCyNvyCW3BZcz7GBmYJ5EHbLcSxW7AbXFuPjNbAAoNpTbXz5HnTKE2EVP",
  "key19": "5NYeydggatYaq7CTHsBz3W8RyCZG4Sw1mKxCBxvUnR2DvYnuh3E3kFEvWwvRXSAssAHTUhpt2HJAG6L9xeq8YjdA",
  "key20": "3SZXANexeeyCLk2ypbDNtAyZT1PvW7FMi17BPtvus7FBGhP24Gt3tiSoGXoDYWAAYGodsYMXSsBLU27vnA3dhq8y",
  "key21": "Lw4ndNRkF2LETDesJyTgMwo9o65KXRFW9g8reWdZzzSdbBghJaw5w3i4m2kWpmTFWMXvFM3qbJwMPvYEuf7v95N",
  "key22": "AcmnksNuRWfK2we2MncbUPVw8mDrmekztLsiFGpbgLnw6651knhHH26HFTi8HGtMzGUtMXQZ7vKWce3RSwAESgz",
  "key23": "2Srj33e5qRDwHFypujDbxLDQ36Uw2LbbbSAbowQM9WJnNAmZ8mEDWTSQHbqBNnUGJk7BAa53DgJyYAazxRhjQrwC",
  "key24": "3YaELb4p5ST7VK22psjH9fFQLPfFWK8gBJS4NcthUEAYKN1iEzzexsS3UfKmXJNupEEeAH5NfGh2FMhbFS8tgEFc",
  "key25": "4XesYKsbstJWiLwwc7yQcUe9JEJRAseE7v6g3CpcmL4yqV8TPeo9rUwHxnfAaVaMHQrtp8ygKVSwQYYAU8YTz8Lr",
  "key26": "3WS3mZ3UGd3bg13L6NrV9yTzaQyvjzHHvr3mH2P8JBd7BPR6qzhiMNHj3Y9yH3QTGXpYEcRgdcJ61E4MgZUogPae",
  "key27": "2k4hL8TPEonFaxJ39hEqUqedapRKgbEVLMYusv873pKaMDZxLYnu8im8GxDnoCuYfeXga9PNoN4dTtjBJcFRqTZc",
  "key28": "4Q5PfnqBgawFAbUuvSDoSK2EAv8EBNK2gnCNr22P6hf6PvbvX6DKW5bUfyoiSNnRhRXW6RNUho8M5rJdb7LMuZGT"
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
