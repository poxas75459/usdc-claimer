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
    "65PQkh52KNnWDv25NB6SqS6W9mmGrbdAwBpDbwAAcTtgvukdKgfBGwwugd5S1aK28wDzRfsJgPyTvJcV9aafchMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3grsYHfLcVC2CRT4kwMXCytJABMvL6UoXHSJWBt6Sb2jTNYheasMs7m6etepRgwjy1qX6v5CKjCfT4FtfSYKGBCS",
  "key1": "37ntF3eoVqvY8EqcSfyTmZgWXpDtrYhzV8N3j9iXxp8RZqvUrxgrsKvsaFJmuS2gaC5Dhmuy23X4fdjgpqZXtYxq",
  "key2": "4ui2LnhdkgqXcgJYYXDWmWBi5QWYvqQhN2KbXrxs9kH4pCVqZpJPzNpZ94nEwLuJqWivTCKDPEEuEDZ7K1UFJ6js",
  "key3": "5o3JhTMVaFQbtEGWnzkcA4cK4zafjH9vyqoQGR15iEHNtjQNaWMpLg9oQYiW1dyuLCxkL8HennkbCud3EYb1qCfX",
  "key4": "owTsTnSveW2Lu3BVq42J1kaMKr9tVKdwgfXYKqpyYuYpiHaJacKokzJVPj3cpRs83tbjfcmyGgWXdycFAHzeDX8",
  "key5": "3dFcN7Yj4jaidaTmCCXMAUMyNzVFvA6ZLXcBcfaW5Wk8j7hHf7ewWRn6Xiqfrj4g4mjpHusNzkwYeZQewdb4L3UZ",
  "key6": "5gM7B11gdrqSCfQi3usmQNe3NzMwAnmTEc2iasY4mH76BwyxAk85xuUwzQY81T3DTAJFWz7evnuk7UhpRBMxP9eW",
  "key7": "5ZyoYqaC86aj5ciG4gEGjUbnfjoZDM4b3nmz2UKeRYUxZDeX6FF63X4tZmiFHRJ2nrvT7CVnfYgnqH2XkJ7Q6Kq6",
  "key8": "2yE6bPnaVD7Rq1RXtQcziFv3W2NLWRwPpj3focNuR3m1mQZHeUBeXaXSZStoRkMqzzZiabxcawpzomx7LHghMGvu",
  "key9": "4Qr7kTC32kGn69uR9hEVEgqgQsftERUQ5MF2GYHHbFJQNgCv5q7vKtn2KTckFyN7gMeVWV6gkBWwivuLroDJmsNM",
  "key10": "4nYd1aThkECEsEJvdHvu5GQ4ZmqMJJtSAZHCiZJwKTSVAPjtnLyVmih3zA9HJSsm45skf6jXJJDckJ4DeFrJ7MaX",
  "key11": "41Um92iw7BmQZjbWrbMucafcNGEmy2rgNceEsyJozQ33QUq58o4ofVnpETP6EMJUshM4LPSFTDxZ9C7LBsEh5cZM",
  "key12": "vDTdZbwmNWoqmFQX3dHu8BAvFy5Q2jG4JRuq5FYA83jGRuzbdfZ4ZbHKVW9rfognqmcR5hPMSL1pCcUfKQRyHiK",
  "key13": "2DjJeZ5gGdbbo3HJGmPncDc731z5YoKSHYJ6f36hH5tMAY6onxEn3v1xqyUKi2cnfaStiBsb2vR3qL5S8nAP8R4M",
  "key14": "MGRqcLP7huKTCSR864aKSCV2bFDS8amCW4wkvXokwtgoY4YvSTyuEr4E1CZAvR8sxnjsLnouv4RtC1Zb3jwwNVh",
  "key15": "2NvsehFGUsYW67bYiyWCzdLun9Wv2uaAXWrvkdvWxzSggPSw7VGsaRVRnxmhUazxeVP3ngE7zbt4dr7DaWfibEMH",
  "key16": "2QQwWFijWyHndKjE3wkqRnrtgVX63fqN3hVnZ9JwCQP8wgb4j9boyYWT6kNPiqUMb1xVJL99ieDSg2AUwAgwL8VM",
  "key17": "54o22thJ2xhGR55xkMqheMktwKxbVPQYE2d1oqfGeyprmo9XNmNqBnYmpejJuXu2DQc4636oSSpRsCgzdmTzzWXN",
  "key18": "kHkTHxyw64vQ7b7oPRw4vzXbHkv7SNBmNCXVTyfTaA14GoaJzU6bECXu7nwHMnhFuTWmPuPzU9asFQVAVCTxP8T",
  "key19": "2GsbpmZAhfSF1CmfiDhN37JHnt62y6Sk2PUdjttPnpDFtygLfPJnr7enfNwRx61J7fpDhYX9qb92ftZajbz4txWF",
  "key20": "2yZUxHta11f9XirxHQViK7j4Eu3JYUbTm9MWvy7ueNDjzTdsbdeH1dRn8AFcnHFcGxBx7F9y1xknuPL78jTje5a1",
  "key21": "5TyXU6RSLD8xGWvvKNXUfU2ViZpBbp6XEFcKoPE2GpiRsH6PQs4VRzsCNTkPfrSEhzPVCz3WSjHaPVp6VpK1RbK8",
  "key22": "4RUnmX9263iJN8Jb1jHPRUbPkaQqj85ZhZ2DhHJqz9qC7NoCJQcM6PaFiZ21SP6qFtCDu3ukh89qvwYL2RCxDoV6",
  "key23": "LwtRi9Bf8QHLDMrBWfQAXGMA6SxM6PAa5E1kQiHFhhDgWJYP5Cwt2hpUsg7Xe4rgzDpEpoLUmfq39iX8igEPaCq",
  "key24": "5ujfGPPhDeDqm8dBwZmNiBzN1hYhYQyowwMvzEkHyZNqWiqsKWfd1v7G4V5ewAkQYSqJjAjzbKfmnA77ynXCB3hx",
  "key25": "UnNos2uLFqwFNB5652TtFZBGNyaFRzWuLQBWDTbGikxyWW4tm647vTZCkk7ofR6cSiALCbFM5itnuoaTJXH21ut"
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
