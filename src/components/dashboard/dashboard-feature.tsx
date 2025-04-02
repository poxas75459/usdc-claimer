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
    "3VTJcTXB5meFTjuzxJ5Yq5MMRi5Z1WjiHc8n8Yek3ck3boY3ejKvsDYHpDDajpjJML5L2K3cCH2rk9qR4Q13wz9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cE6WxWRLA6q75xLC2fXZ7fYFmiaUmpLZ4Zx8iamGvUuPKUjXeFgJkKpUpCBr3WWp8FiKyW7R2SE7GBXgfkoEsfR",
  "key1": "JWuRLo2jFT422AsZKXokj7QT9D1bWNK6EhYxXXXZjiDNrPB718K2aENRDzLRtSvcFVVTtg1mnBSRvnT8EoyFTdN",
  "key2": "cRJsntZjnnmoAqkvLH5v3BxCEwHahHgmfwKMuzcKo5TWg3zLRufj91xaA8yWbzXr6XEjFeHMpCtqWprGznUraoN",
  "key3": "4gvtshB6A2UekMTVcKbYpr5Kaqpkv717ZYgW6HzcHyBcPmfN8Y9jmBZ3YH1Np7zBDcg3KDa6Uhea33cfoCoZLkoR",
  "key4": "WmCzeiczYYBuwSWusqAEpWCqxdqrP2NuD6jN2NUz5b8R7XYSiAVfRupeayAxWSxeVnXbWP54EBAJoFCkTH6Fpni",
  "key5": "5MT6BxaKPMjEcb32A8so212Zmotqa2krCMc568uSbceHceNDfKjqEHrnbzLmGbRbzAqw4k4VZGvuM5Tkm2qYhDCU",
  "key6": "3SwvtvDybCeNKAkgn1kYuosXN4GL8c8YfkMV4gX5oxfqSLzvJy5LbnpoW3wp36JDFbzd3aPHsZBMQisqZxuJ3Q6a",
  "key7": "KKhiwzWedfWSop4VnfEm2ZPruDuq5dReAVXzjYH7Lpxj5aVaSEdJ9vVgVAiDoAvXgiLt1XrDbfDM6CKc4qN2yh5",
  "key8": "kBRiGm2V629Rcqt54mvEsUinNrHYiJtqd5ksRrKEQ81yGTFphdYWtS3StUndVFVyJDtazhUx8F5zPYZLJWuvHME",
  "key9": "owd7hp84ZACYgwZGqqo27iPfSBZEG6pK1H29gTGsToDskaqK2tqqqY3uiTvCFsKa1yU14CuKcXbTAuWUvvFqeo2",
  "key10": "2HBs6eW5ikdzppHmqww8RDjddvEsJ4S16ZHLptXbostDt2UAVV7qr7yGt6rKmqYycTR31GcrWHv1S6qWuVoE94Tg",
  "key11": "jTbGBRPxsx8Cus5eEtLqNkWSCryrabvanvZV4o37VHFtWABbjc78aZj8NNnXqYh6vGMi164KXip86oip2mXmLDB",
  "key12": "kiaaVF1g5HWiRQpWNgSHNR4RnynoR294oSGxuCmvT4tPAt2fSqewpSv82gVp75gnQKHkj7qq3m3fMb1GAqj95oV",
  "key13": "54HBB4Kp1fbg6prJDLQzKFxw7EYnQ4ZJBKLffiyjBC494uoTQ1CR6Q5GBMSZ5cyv49y2rDuPWvitSV5sPBbZzCRn",
  "key14": "2UdAFm7JmRQ2VACGLSKRB1zwThMkxAR9MAowNy4aKS7ykgA64n7sTztKi3F6ewHnVy93p5Qq6xCjSxHNMWVXrF2J",
  "key15": "K91qgxzTHJeMqDjB8zHHqKCLG8APv6RHcuCPSfbEzwgyrWfDc4KCjDoaNm4jtnJgYMVKSh3q3kcNMdnHJ71MwSN",
  "key16": "3HBRgMw1J67H284tsAfuJqGeZ53x8GvHSUb635o1ayZ2m2EVSWeLKH1i14i89r6mbdaz9Dy6hHvDGDdGQ2kffq48",
  "key17": "66y18KXFvNzToWwL6kioTm87h7vgYgdn517BNTmQCnKh4o7hSo84Zrow5B5hXV5CBTTUNbL2zfkyjaAreiXuUpyP",
  "key18": "5p2jQj5qTfeZ81P885XxnypNuyDx6e4h6Hnccsh7detemqUEFemiX2PMXxEZ6aWYxE4pCxfNsgrKqbRZQQS4FfJm",
  "key19": "5KSXNseMZryzHSkwURvaqfh1JkqghVoXC1vy2HzukPc4qSkwRtZBANdpgL4Vg7pvat5WvkRWP5ygEwogMvkXtXuX",
  "key20": "5Wh64jjMrQmS64ZcStqtSZZC9gydUAetTFkRNZqzs2Y6wEBRammwzrWgcuVRQK1pTVMpvDbfj32rKbCP5arhRMJg",
  "key21": "5mbnhP2F7afo4mDzYYTfiFQrbqEwMYv47tutxqs3J7QJPhe1UTFgsRTMQaYHtv83YkRh4BvqeJveMW4cAzfbH1Si",
  "key22": "4NXt4yjiiEnCCdFKqjj9ywy2vDDh4NFimtYTZ1FLGLxkcKrmHNuFJM2Et8Sfkbo4PuhBp47kypB4VHBcAmkpC9n9",
  "key23": "5GMvj6yVBH3JAdimB3zSmLQenX5oAG9nSHNM2zMFbEUjKyfPb6Co3bndv2EtwoFV7bPsBmRaDaTskeAZyirFVQCB",
  "key24": "sBQZL5QSWu57yBfPmSYVJsNWzuUuNQ8JQ93ThqhZ7dpQDKiixkkderr2bcNanH2AR5nepXuZFHjkWvdjDXSwFYM",
  "key25": "3FNtPiGjTMUsSZ8NcrZSrkqpWE188CmBZZNy8hbrNxgieiBhiimr1q342FNHdWWFYX21KUc6Uagh7afcF6RhFBT6",
  "key26": "3B4cyaL6WisHnfyYyLhpsee3yZYGH1LYXc4MRqw6b6PdT5G3e9t1FUuoPUqxZo3jCY5WVWVoXh5eeZGXHnouU9aV",
  "key27": "2piiNguHHsqSsSym3nGgcr3UqjRbdPtScJZK7sQfn8a29snDLeAzDsj8rk2eYPKifXnr8pA8jaz7nxvcCDwgn5tx",
  "key28": "2bDmMBEPAiYmLjsMxfjLzU6tq1ezYL3MtvALupNqACHTjD8mogApTXHygDC3uki7M44g7RF35NqHpzdcxvrBz2jE",
  "key29": "4QPMdX9SVvf9bynkDpH5abQBRzgQffHYw9hrKtozs26DEv4x43ssaL6n31aT1vRHpTov2kYFfoZ98PG8T4A1WySs"
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
