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
    "4RQYR44XT9cVWFMNMMgbkiaGXTT5VENLR6mEPmAymSF6VHMPnJxqnvS4N4G82sBfh52zNqrnD1zuQNNdEjqy8ig3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jaFyBKkvaPu4Q7Umv3rQxGMoqUB3KGHG28k2PukrYjdukn4NtyqNm3PEZ4EYjEvGegTKAZeBEZ7gnJnnN9QxztA",
  "key1": "4mQAenPcJjksukdHRB9aqvauJVTVPExa3abRcswQYX74BcTxSx5oadaVaweBx4i5CvbdiBeaY7g5Luts2kZtQQiL",
  "key2": "3i6Ns5wi5sThrt39QrG717Zv277WJFAjTAgueKBF1sZDhvJByXcrcJzWLVVp9khcSm6KK5TJRGrRNDJHt2SkmGUZ",
  "key3": "3MpzSdSjyrAwKXQWgo43k6QjS5JG5K1eE1bwfnX4bQixJ61UvjuDWhhaScosYgTRRUkfqijviQrpS4CYoptt4693",
  "key4": "2HzS1nMDbZSbW9vXp6mSSr5aF7yF9D9BQtEyEAJGfVgito5A6h9uSVVS2kQKf2mn48Xoitos1443eEKfUPDGvRT3",
  "key5": "2mMwQRVuJwdCvveHpMgjNxbtQuiV1aEHaYjTjiH8crQVhcJhrP1VpUJvMdDzFPU9WBM3JV31AfkSaDp4ykqa6ahm",
  "key6": "ANLTZypgkE8An1ZmhKMPoXT325oXzmhfgyhNZXHxa727AyktBDZLxbym9xKvEXJfbDJh3fbLjZ9KjGWLfzuhciN",
  "key7": "uTpP7FewgQ3vv5pJs5KLCG5qkVcTqsGgvXgqFPGYUqtSUrKaRXJyY9pic673tNuNmuNFrDJwv9JDgSPruaxCMr1",
  "key8": "5QUykzDeU5TsgyKx1SsLNaBBhqiiodJ7wZpnbfX7QmGfNWJWbK5m2SZWyfUuAt3FAqBzMNEH15b7ACLjv5hq4BXn",
  "key9": "34At5LtmtUbaYumXmLU6sDZVTPp4vv6vYtC3KqZhpneXXF7SM3ahZ1iFTW9Tr5ozujgUK2N5MkTcEGcuExpy3fqp",
  "key10": "5aZLsQ4JXJb14iy7fjM8tLjgxTfkSJMbwEWrZMSWHM6gAyCkEEGcsDNMvTcCvcbP7JsVjvJweLbbKV6D5EG2NxS1",
  "key11": "2T47PP88YBjgJcYsmQSEtoC4eRsHuNskVDXwNqYg1LVK9Y6vmt3EAXkTCeSZwK3AkPTKdUjfiiGAUFgAattXnDFi",
  "key12": "5oGhLojtoH7a7Wzecbc5p2sFDBiL6cnVtEtcGRfuTJY6nH6yBvbW8KiKH4U6EAm634dAYjguLNe3Q8hdz8Jm7ihC",
  "key13": "3g8La48oLBFWUXm8esbD8M7tAwBr4WpWsk52HSSuXkDyYNaWsCCw6EMjiSB9aB71BxBWLCX3QxxR9PTenwjMQe3n",
  "key14": "3gby2n5Y5af3QxpFVvds4EsjCYDzhBcPM2qAfWhfeq9RG93zSuC6Gd6P1bFuNgFAydSgKU8fdUgR85uNLDmXpVxi",
  "key15": "4GLrrd6Jix4tQsqUFw81VRG3CnXPNnsQLZZCGLYGXMk6QHLQHcdBizgDYMu7tpYTg32fkpwyCECbbJmhpu7kBn62",
  "key16": "UjnX2TfvGpwsM4nshsdLTMWg6UKU9ks6i46MNHAoF6eDTz5b5nXoe21EatfxvbS8jyVniTGujVkGDaGSKiFvccw",
  "key17": "eLCG9X2DdXs1swXLdoeSwEwQG7ACDx2oTn6CHUXdWtj3RTZxcZazJXiMoqExL8VkiLo3h46BP21P6HoZo5vwiqW",
  "key18": "4diHksDCAM9bhyTUt8tcQCJ8EueMuDqMajkanCG4qAfAKRBJVdUGFwBbw4m7bf7yGhdMtfYb3ahh49gYhMfmcsmp",
  "key19": "4sGRKMGw5WT5yw36A5DVvEXruPrEMAhzvhbGLtor5PKYnHqcu64jYCtsAvs37An3EzuAHFHiY91U59tPnhhJF1rg",
  "key20": "2dxhYFVQg6aYvAWdpNEK5MWrGsLeETYKv9Bqui2ifXyuTPBgXEFyzUnFm8JfMEavX9BoAo2uutX6gwg57SshPXt",
  "key21": "2zRr8NDercubYAdbfqBkeEsf35FrJKy8jaqi4kzqn1dbRAPj8xWu2P4AQh6LbffQsbkMPDtbhaxocrtHQrNRwEvm",
  "key22": "3W9LenE9i3EnXoqHHUJ9thSBByvET2LEXaTBc8EAJVTxySaJMkJES3bpFsrF1f5gWPumAZKdDJGz2BHZXdWPFYgL",
  "key23": "5RtpfKSU2GgMEg5ZxQfHNNnM7ZChpWeG2g448HuESLVCiUx5mAjJ3MwdpCV3xwyaGmXRwkrdUcccFFhLZJM56fA9",
  "key24": "4kkfy3EJtMMP3VfuD7djuRuNi675huxoRkwt6vr5TZybjcSM6FbEJUtqcC4rTKibEVTgNWfPJLEKEtKw1Xf994vE"
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
