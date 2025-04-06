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
    "ksMX2gqt9qsG1V2Bz4B7xeWJMiqoiXKQkzdnbqFYunc6JVZ5PT3i7Tf9TFUkh7UmeTWnyukyGLBGYA8XmN7cN63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AMnmuvCG3qpNnMyq4uYGsHSksYodFWoE8kWk3pdYTgqG1k4S31Vwz3wa1KBhKNpagqHBSzFp1Y2N1rHGx6PkdHi",
  "key1": "4tjC8TsyDbXVwK3eGp46gAHB6BJ4fN56QPUZLPSJjKhG5TVgNEGCwo4TUgDcDXMk4dZhAMC1x86KK7ed8wxK2eEH",
  "key2": "2wTpPy2Xyx45xLepPJgrUT7gMZAnBsiEkqzDm1jSYV43qVkiUiieKgc2xeQk1NAL925aPRWY65rkkqR2b56wga5K",
  "key3": "5m1t2Cnt6Wn7xzpA8yXkCZgmnKUBzXarLTbzsqn1QgT23Z7tAyEB29dYdtB9vPaKVBpYVx1kTQcfZAiWH7f5yDRk",
  "key4": "4fbb7QV2QzGXyeFRiNjjhSKhdmJPtchxQqQGj6ufnx46aGo6jGa6ZYBm17t9QnxMMQq11NG437bjRF6TfiDU3XoU",
  "key5": "498SQEMZnnpnbYqvixZKFJEarsVWVaMrtmv4Gu43cjt4hFbAbFTc5WoFmQyuMAMhgCDDNdSwEixvxKwh5MvHnN65",
  "key6": "2bKfR9yiWuz3muqSGxXxyhMG2ShM8rRKSuMkTxydRJrNyRt6VUgaofFJbvX7nU7vn35AgT3VHk9B6h2n3wnxFDLk",
  "key7": "5Y9ScWmZXksksLtKKwM8hrFypjFGfFsaGD1eEDt7fW2MAfTcRGGMa9g65aECwiCdoXAkDAxFg5kne6oxpfYWTTty",
  "key8": "2Vx8e565GCF93samAfA25CAEARe4wazvKv35XqayASFgjzfLq3f4KWohqfF5uHQ265YJH7nEa8Hrt6JeZ7CSKywg",
  "key9": "tJ36DeSjS9LruKkHTxcJwNbhyMtwwDWE3avjcJZn117PwSLfjPEFbMtdfyR6pZpEND2mH9P4rtguKJN2BKjK5Sv",
  "key10": "4gKTqbPv2rTpPN42jHJ3WzthePsncn22HWGUCcmUFS3RhRbNPhRo7b1psBraCYFj34zN5ZpQA7S9Rirh1QinzGGX",
  "key11": "5T4MuWgjH9rvs855pWLmqEW3YLZvC6GeQDaVWWxBn3DEWJUKYC4DtFSgicH7ZeX8LBtWMpf5KRhLdHb6eEhfFktx",
  "key12": "28zKjQ1iaj782Ed5gkUqucMDqiSYGHjkUcuv6RSYUYYKhrMKo3vcguundwZMZeXsVYcXsQ2RkEXFFeVaEDvMPgNR",
  "key13": "5vBiNrabGk5mPFC1HV7vDDazn5FnvnfVR5x8pJKLRrWiuxUwXdFySXzBVfkAxxmh9LWeGxKuwjT8ea5stmbuyc9k",
  "key14": "47NVme8GFyt3Fx7bzKohZP7P3bHW3AYknEDRdypx7q1nVd9ybzj552RtD7ffNgugDC1c2UQMaZ4kxBPyarqm3PL3",
  "key15": "hfyN9quizh1R15nEsAJ1uwt3wwXABA6SjuL2H7QjLjRXRNQfFzDBHxVNWoiks4ySPsYrQkRVKLK6UryxYqgoe1u",
  "key16": "3dTHRQcMcvZpcgX9dLpxDFdWHtAaKm9eH1v3Y8KUn7rM3NR7HEv94cHh6NGyhZbyBYeoRgMC9zeqbexDaoCDcZ9h",
  "key17": "2SHz4MpzfaB8StBzjJYCEmuCAnqW52Q9j11yig4JSTHgCaDb1HyYTotj5JboNiP4dD5kTQfUemfrEZYvVuUzb18Z",
  "key18": "5Vievizv2zMpfHcvp6pyiL5UDsvFog328BhK9eEoziMv199eePGyfxhyMpJtkCQt6hbdecPMuXzuC8pqn8z2Zpx6",
  "key19": "3BZ13g6ZbmWHuESnGd7Y6YKmTit9k7tadVSe7PRuPuws8MQ8idYVA6i2zoKbpz2UXTqfNkrL9vMzXqJcwxPPzrVr",
  "key20": "5YWp5Epp3d5UQtRWCTZXMFPr95HSRmcEUYVjbHhZ31ZgfaHDqbkAgUdobz1kUKJhJdV6SHBP4uAuSdgXk2RYaUEF",
  "key21": "2vtdwkUW3CeL7amH5GcEqq4nmb9TJQLK93P3jYFEmPUfpxq8JRpSKSXibaF6DHrHo6yenYMqNgyDXdPVjj2ettC9",
  "key22": "57gSzebkyuMhHUUGGYoqV2Qwq6xv6fXngavp7RojV7yaVLq5K3j5WLDAZpU9GkcHLLVHvoaMQXGUZCQ8XfbCUN3G",
  "key23": "cgn5pSVvXBjr1UpZ9TgVj52xthYhJtEQEZ22WYgAWknp8jCECvsTcZRMQ8NgyZXjYHwG78d3mgbDVbdhdKH7u9t",
  "key24": "2k8tuztcmBPMmeKtVvj9gHimBf2UwjyJwe2a48Sr78fyw4A5xsJfqRS9LnUqpGi65to15Fv3CqaSBMSqCs9qyysJ",
  "key25": "5yi3AyzavMmT5rkuD6J9jP4QiAFYwk9oR6pXHTPeeXzHUcUkd2NZXif9CmtZAoqeX62Upq9mm28NiPxM3M39y4sW",
  "key26": "3jK6RnY5MDo4K8tzdfV95kM2botXjuRoy6ocwfqX2DE6xomLQXxrGBJwBNmM3tvdXiPo3L9wZdx1aC9FrPmAQ6wv",
  "key27": "3BdzCvAwwuoCQfiKBSuhvpHqMPbm2JRnQ28fZhKRQJ2s2GrX5RShZ8tz4nvjQB871DjYiMkL1nx79nex3qaQrJMc",
  "key28": "42VdehnDvGHqHz48W1LygEXvnWdMChAwGcrJ1iHq3U4XgShTnsysU5UPyHwWfNKbjMwdQr1xSA7oALeRJSEhj4Fy",
  "key29": "3tsrC4zkMagjfDpGsQQynYDGGBsvnzDiyWVRVsELzidRwG5jg6vbQHs5Sj2Tvk7Au3wRqUJPAQUZ6GT9sDhoHMNb",
  "key30": "5eUCKBJHyu9DAWDzkm5exNaLqy93ZfcneSKCreCkm6hdyPwA9rWserzTtiA5BcQn8K4KeHg8z8U1Mp3BtK2vkxk6"
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
