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
    "dY4AtVLqUBnHZgSzJhiDvGAfXphPWLoqvidUUFFRT8WQGYDFcxfvyQiVfUfZoCeJn1V59iPyp9MjAAXR3xvyu3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R2r7cFxRAvnwue6zdzChHN96u9X9kqtzPZ7UkBQXtjKKNsy7EqvMpv4YtaYpRaDUmCH3pCGvs7oeJ1V4jfu6Pac",
  "key1": "5738vrPAhUVeLQfwvX42fmgLMB5KVysA9cH1R2VQbxTDWz3aZHo9S2TJbmvSX29Bje4MaCagjLrEpCENVk8zKD41",
  "key2": "2gyRxJ7UZujRAuEqKLL42tYfM3UMGYWjwCxtzqC4SXT7yicrkiq2DxECNWhXT6W6j2CBuzXawXZFidYcZhgrTmiL",
  "key3": "tGxDdbG7QHuVS32xz4Cfi2MhwMYmdckL5ukmM93uwwmAi2zFMzjFNpALg6xegxkavFdQFojK5xDaLVgJe56EaDH",
  "key4": "3SHt1ztZkLUB2mua2hnPZQhYxm8ttwCNh99VkiykETFGV9mQU6wGCSfdC6HZ1wokZFDv7Mfi5iCdiUomRxZskunf",
  "key5": "FHxBpwnhHEAy53DjHRxitY7GiLcQBoatf2YvrTDcbT8v5DYpZA3oadXygrU2UjqdUu31ipEr1wWX7mGW1fYrSoc",
  "key6": "2zqedtXT2ig8Tab6WQghyLxHWeAFnt9aVe33ecbjZ6W7LoeYY6MNaBqFQ2EecEXuYAyKCvRGC5zee2rZuDcAnZrP",
  "key7": "3viLvyvEUGHmbcAATYjgeVNhFZCnJD2MoBxCy8e9c3VzU4Zt6pFM12YmMMaME1pZXrDnU3DpMhnwTES6z9ujKNJG",
  "key8": "3vYWCWSx16qoQ7RqKcY5eibmH4UPrUqKomH1MrgbiTGTSvfkAiVdccw33LL9ENRJNkwVkX2fe8iCFbKs65giriaV",
  "key9": "3bCkqfHbtncyxXizb1N3djEEukie1EjTN2DWdXKm9iYZjjjfEDiQB2bXj7ch8YyZbp5H7hjL4AsLog1UXcWBRm5n",
  "key10": "5X2hs9aHWXCRut8FPTo1ivvGk35b9kEB2jERU256GM4WgYwJAzYJW4Fdqtwib6njTVvgrH9FGit5x5SYaXaXnJTR",
  "key11": "2tH7RzDysU1DUNCiKiiCKDqHGXgntY852JjHAXM2LiMQGQ9oo5eCgMjkwwRAU7CozHSePwwBnBaUdbjbnK2hCXSR",
  "key12": "27rHsztU5NfkaJ1FMLGZdma3Ccz6EvKEv2UeXDMX18LqyLGwS4cGjBSShDPUdxPrLmpFXMVhVnuwaUWcV49kUAZV",
  "key13": "3qXE51LgxHkWshoeePhqan97wfj1KnyCoBviWsDfRYy69ed9pTLGVJgSmA5cnUynH9J4aBrxc5jz7PsjzNasLojQ",
  "key14": "3oWCAhW9XR4FbBxS9bEEjCdpA1rsvLAu2rqJT594fG78v9RVoLFD5hCuc5MoQy12z9xKZp2WzJktRzoStBMxxPER",
  "key15": "BC44racj9jhFnymZhTrWXSk82Cy8dqZiGCaQ98iYpxL9gi2z7iAzBvzuH2c9S24XFEwQ87wjsZf7R7WsB5gaEEg",
  "key16": "5t8ppvsjnSWMQHGdt4Dtm6GVnzRdFxmP7n31AxkukKMhKjrnAjdR6gqnvHavCc9SQs2MjhEqdiL5X5pbEWRgmBwP",
  "key17": "5juMkctgSCEBWrLQW1RrteXWHsUrMmaDr4YnCKxBmtoJtShUF5WgZA1JTwfnDb8oCDjKx2Rd27mpZyJgjVsQ7GVE",
  "key18": "2f5NBgL7izpe49B3zpikT4dsqDS5TSrKghs5JKZXW7rAoWcUepX7TsWxWt6yPdN2LUwPAeyEmgt7e89qMxwqhQPW",
  "key19": "29jvAXM46GoNjb19w9YEyK2kzR9QTicgiCZwgRYZQLCau3Fy4D9CtSiYQ3V2g7yMsCU9uSzbUny4C5sokbHMdDSg",
  "key20": "3AySta6FbFYFch6YEwRRqVX8kiiVe64LDDjcQQNGmgfFDRcKDWpWaEjeXmb826FPjTwy6zrhrwEfWvbom9NaeoNC",
  "key21": "z3CJk8Rn7uQfTzSkCW7qVydzFcDAw2nEL5ohBXrB36mV1fmNLnVYXT4U62vgs7k3u9WbL3fS5ZK4wHkvqA39SKe",
  "key22": "5Shjx6t7jJ2BrFUoi9xqpKcfSjJ8zjQFvhdA4z4NufYAT1qH8vANrN9Kpwpzx9RVYvpEgCmRhacxC5DKknJ1M8cs",
  "key23": "2RFhcvCoerJLSp1gcjyVi4bAd6MVFxoiwQdVrDbD5xhKZggryMsQg8L72XBDUXNuo8JbTyBdnh32YeLjBTuwERDm",
  "key24": "4fMkEoK7a7p7Mt1a4E3Dpk1eSkjwC5xH2P5WrgewFy3svcwDXb8k8GZARq3KkQJbYBmYAgodkSPo49NechzxTbng",
  "key25": "5c1CoV3YubsGEaYx3d6QAqK4AaAVLBQPcxevsJnHbj5s1hRWUwwLX2JrXXFoPVaBAiJe3Vix4PSHCR6DbBfa4rcU",
  "key26": "2ZzXJcNfYup1tZA5ZbgYX9ng5TXk2HeVLVmDUud2H1KkcLsABYKQy2FemfJK9gjJp5wheTH8sdc8u4T2SSvr1fzj",
  "key27": "5cAjjq5f2pkx4RxMsEKYRnUGGyjCt6zujU4HPUo4PZaoA91t7SVUABMUngnbor64mjjKVHKKYJpZM6s7HdZyXJtQ"
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
