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
    "2cpyvuoUED3WT24qCTrGHcSP1sxWQtzZYWL842sYyzwsDmdJnBhFx5Qz3HaMJWStc8hbdWDqyK4D6vKHegsEfJJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8NrQ5HYeh6yggWcJGQ5H5wvSK6r6K2p1xrFCQ6FGH6RtsXverHno6P33g2buggp9F3uQ5k3Rd73LXEXAzbbM8zY",
  "key1": "3viasSrPU2G9QxxjoeaEwJdYvmYnKVBVmvsFsFHzVap7o4JsPCV5b2TtX9nh1VFop1YXJ8DMqFC9Rim5fe8BZXYu",
  "key2": "3Yiu5qt6PJCUU2MRTWLegjmWGBiL8sF8iAPo67nnvV4za636PVCN6z4wp74wQNE1Fkkh5sfD6eiNMBd6eDo89ovL",
  "key3": "5TPxMFCF8RC5Lan3dQtFDXzZdLC7VNo1ZwobWg8RTBra77pdz3oBqthNHPLh9pAPPoaeZKcend1Udi7Uuy4vJFkf",
  "key4": "MdeeMh2wpxJhsGxMYaytJPSM5FntrL4hvAT9pBYD3PUiSzvEoGtt5GR1GGxThRAQm97KQqBT43WLvh5TjNvEYrw",
  "key5": "35p4swneQPxWS3sXroQ1npQnVb3fuQ8fKdRr4JjDAvzVgSJbwb7JtrUfD3RKoxy3awAsycf5xQGQKQKYEQX3MUNK",
  "key6": "4CRedrMoT2iKYWKk9qxUocwwzFU6pY7nLhU2YuGwsnc8bhr5bKx5F8y1pzxbRzvk5RiBWhw2tZpu844YyfVps8Kj",
  "key7": "58qx5MNTtf3EmJzvsvVRk33VvW15CxCcWFxmvAtTLPSn5uqjFE1BiRWXwdNCNu5izAS7dW8F3Q8pkJ8aiRRVsLms",
  "key8": "3PjhpmeLAmTDNzTSdoSMkLfX2ciRoBbzrncPxX4rir5pMxQKYiw6vJEe7rM7rygnLYrH4aXuJFfgZ65sBPym4uYw",
  "key9": "5vHQi9RMCwxWyigYhuXseaXxdRvsviKYtSKA674skYC6knjbyAsYm34Jcj3wHTAmCkZQ3vZdE9vBdJA71SvY2eTQ",
  "key10": "2bWADJ2MiJfnM4qhdd7kRLh7H5wSkSdRhEvugjsyGwGXdjifYfEHmBgCU1zYkrhQSGGtdLiPS3GQmKuPtoXwxyrC",
  "key11": "3YJTyfVjuJMdCSYNH7nBEUcvhgZpSVjtWs6eanpYWaPCALQfkREMnXd4gVbr9mPM4zF1KkDJPj4Bw6AZ1d38udow",
  "key12": "2HjmprWqqVToQHHYYakBKjUYhJ5HqCjfYW3we8tfpspVHuT45khfPrCkoNpmmSZwM1ZTcRZJuFWHJT6Lfg98FPup",
  "key13": "3W4FBxcTrwtb7HcLhYYZScJ2brFNM1qSmTY41bGrPfLmZUQhXYBDL6XFd2fzCNUJNicHCiicqM6NkLjMcPrdkpSF",
  "key14": "2EdvZSHQQ65fZJVFbt9AQgRUJGKFRBVHxwNYqwdquaEoWbPSMWwvtpAcjL3dM2GPU2azUAiLu3ggSi4CqfLpbS9E",
  "key15": "AFV3RmMniE9VARZ81rvg1vTjCASbrseNhXYv6xGuKQE3ZV8ffoK5zBUH7QXhkEZMs3L7eucR6TBmhEWWGzobUtN",
  "key16": "55NoLwyNskRnCcrUSWpnZJ7U9XcEad3HJY5HHX8qZ36zQiK8bHZ9A82q7c4NFpNAtTNci8PF96CRTtM35bgUu7tG",
  "key17": "2i7XZ5mbZWbjLciQ2bTbyt4nBDd1VEMira1W9F5Mjrb2VdSWfsAuoe1TKfhjzHHYb2juzHeU2kY6Hij32A7y5tAG",
  "key18": "4XAA8fYkDfBK5WKYbLNpibjLWVvPd2gXyn96hikvQPQZgBBG35zS85aRK7pm8tkc7LDtzyqfLSZ6opDxqSyZ5sV2",
  "key19": "5Aoo1JTHKYyip9Rpsvp1rxdAFFNFtP5DS1zorSUxG6BCrFnXc4GQcNRok8dkjX76dNnpB9iXwQ6rcpnL8k9fsJse",
  "key20": "4wn7pYHHB2ZWAn1e5qDTuUjj1EsKAZSNsunjwwQ1sD5452de1pRztR2UaZmYNxzU3Wbx4EW2Tv4eWRvFoSTfS1mn",
  "key21": "4ZELivvxEqHThWPJnjQhj38LgC2Hv6QNno73EkGHrrwTZqAfXpqPvMSxhvF9sSEt37rmBZ7Ac7xU1YE335a2TYe1",
  "key22": "2NXJH6dJdc67CzsDzc39AzLAjNb3jFiadhM82HYUtovpzYaEhpZtwJeFnF2LRZikqELBYjWSBqJb9rHwiXwQEUqW",
  "key23": "2xQuDPz6VLeJxLMVz3xMzXim1WNcnQjza3ntiPCwu4usFKpgDZGB5qeQfzRXDv9fQwxVo4b5NyGAKv94jSpuwqSG",
  "key24": "45vXncTPoQyjSnuLHJwhVpBQZGwH1XfekR5ErKqmfgsfYDSj5EH7NPYU7m7CmTdkv9VuXs35czC8FvSf5vgCx8wn",
  "key25": "3rUMrTSnd8zGLSWKyxPXJ1rB9fC9g5sqqCZAQErkssWodtWKBGifAfsfJo5f6yehvs2ChSs4kz3KTP2jAxRbxKDV",
  "key26": "ugSyoFtoyX3nnQAaspExSaPTvYBQqq2oinxiJr1Ubnued3oNXo34LSKRowLfycXWwe5uauuk85tctqDhxUFv9Ba",
  "key27": "4z9Y9hHC2AaaZWqNQ5QMRiF9N8tbSmVj3xemvv8HrK9jYPNzuhMvbqgBehQKKthtUYDG7F46LeC4W3pMxNvZS95r",
  "key28": "4NcEPTFuGwuMX5aBMSzsnDb6HbiCgHDBrBpYhvBxMyNx9zTpReYkx8Ye5LxXAjne9RecaEw6nAga2M6XtMVoHSnV"
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
