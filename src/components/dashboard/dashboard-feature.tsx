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
    "3UUeXxqLbQPRsd9JMrxyLYjhruQPSSMPwSxqWtJqnRvQFcSZq6ZsYLqKiD7AHxqDvHeJ1S2jghjBukD2QbVmdNNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XJSbZwBb7jaJZsadAZJRdD85ZuHvBrsWRfh8N8TGRP6FXbTM4LKcBGe9JwPxGBy7FA2HF6gQk38sLz21g8yTBRq",
  "key1": "jEXhx61kkzLtC3Df2YG2UP7Q4Hy1NQS81zCjKdqYNWGrpDACT2Yuaf2RSR9kKaqZH8SQA2hFjwADn2WMw4oVQhW",
  "key2": "3xYEUmswpS257QAFadz1BiH4a2DCSMVhq6aZwRVTG4yDRy735XeGd7TnLSJfxsQTdzWQQ7b9efDSxsrTiN8d7jhr",
  "key3": "2Xi7tTQhESQXfA6vH84tBPeLcmSfQp9fVSjCky1Y8YW1zRBdB8HavT1edneahwv5MEU6j4Y2z1fbrGxWLjNVGXr1",
  "key4": "2oM124CUMAz1PnrbeQg4tXmBYeNH49vwVFycgbE1MnUWuJbSzCjb4nzJpt6qNZD9d55AALviXcoNELbuV2696NE6",
  "key5": "4SZcGkuMqMnLPHgRBQ8LrwKir33GeoPPKtuxY6Bo3fRmncA5Fi5MjYtDsvduNAnA1efb6v2yic2waHg36V8rEXbn",
  "key6": "2XFhS229Av1XVccLRaou13yYR3AX56Wx6d5NTQ6ZM3DnSGVyPzUUr2H3wv7Z8TaPMWTM5p2nkXM6L2wX3QdH4n6F",
  "key7": "WuPAQKcuGW4nufZQAf2QdtmkXCJqsvZWbtFQ4XA8jRJDygBBkB9oJcxgzZ2TMCiUZhgDEJRjYauU7vzYnYu549H",
  "key8": "4o4cbRyKgsUift3MvhHHMhkMVosKdT1yAWxrZpVxe9AR8BRYWdydsx67BEoKp6JhGwrPjeuiRepa5pvH579b1knx",
  "key9": "5HmvZ8BsMaDBoXoLMTVDQkQEiqTZxTowDyRrkudSeffo3NqwnDmK4jzG3AUj2LAjj45KsngVHRQYJBoeS1DeWUTY",
  "key10": "aP2UAR9vLp5gAgPxEk1t8udwntVBw1oH7AYXf14x7uPTrDmrMHsw3QrxfrYnsokCQgVJiptw8bpeRnPVQ3aNzAY",
  "key11": "3y9U7XkPQznbDmHiEKJQrpvmgccHzwbCQ3tRQ6anwSkz1b467wYri2bzUMYUtajMHuhG2AZDGfptU9kpFg6255m3",
  "key12": "5qRxcCKkiiZkvsDG4C9fPa56vqpprozcGeLTQQ1uiRf9zYTw6ZWxe8RxZMStTmpB51x5LJFtqRwY4bcjDu7tWgpu",
  "key13": "3D1aSjRCDxcthZ38G9DBrg7mz5f4RLLvmPj4fDLtXQjD4oARyT4RiSuNgzuDNPvq6WWAaDsBY6BKeFWmmebArkno",
  "key14": "4uredViXx43hqDKCUB91eYgwzzs5tyBWdHFN2f1o77BnKujCriCmH8BYafaZFE9hwAG8P1a8BvnpnoVAqudFM6kb",
  "key15": "vxpaEeArUC6aHB6wHTG8o6UvioXBzFcEJH5wWX5SF3bBBrfUuP1vxVKMrEqxCDJPW8VE2wC4zY6yWZB2YDXYXff",
  "key16": "TenEm8n4mk26jmAGgVJ5FSWgPcHtTUEJoT5bLArNnn16NkuS3ofCq9yzjHCHcrPQu4JFTAqpjUcnysmAF8M6Gv2",
  "key17": "5CB1hW7e3Cyg5V6i1kvxWiiFZ4SgcYJY7MkiqXnbc1eYjzxF9gRZb8LqMZf7heRg6ZzKunPgA72gBhK2mf7Rp932",
  "key18": "Y6CSJdk9zi4m7SprQXMWkoVk2T7zjimKZEsnijeY4L2jEsLwR2ETRNocU1Pfp6C8r1TXnb8S7b3rxTuk8M2VMBP",
  "key19": "4aP7K65E6XCZ9hNuh6ngTxmoSbLRBbBTDbupTfN1cT1m7yrAVNcDBXQP9CWsTFCKVDPdtTmDgrzzA7aPgLPpa8tZ",
  "key20": "4WxdyrgJDkwcPbJgfkJPjovFhTKm8v8Lwqoejcvfqhkuap1xxsDqqZd3ztFiX1eFxActLnL1bfBbF6dqc9K3sW1n",
  "key21": "HxbyQHnmHaUiJ3zvHFdtNy6vKE3rmXvytsKYgyv34CUB9VstAta1FsnGfQ24PfjBvxcguaVGqMSdp17dJT6aVoQ",
  "key22": "4fZuP8ZSEoyRmsH6riY8CJaJew9zJgiPD6bSb6bJKJUR67kNNfRRmMjFQBwAG1MLCKJgUBJ9h1BpSs7AV68fhNNG",
  "key23": "58UkmfBfS4BJpVrNKYitVKvHorbeML2FJkUm8PpBV18xJRBHBJBQQgqaWaM8P7Xh4CgzXUPbxXiupFjsqv2hzzgd",
  "key24": "mrFyh1YeQWDZBS4vPbs6mzFxTc2XdCbBEQSUDz7b8zSFsianNRx3ArBqXkmBmY5EKg3xwhhLFAuzmYcaotPBpUg",
  "key25": "4EbB1XnQD48DnmHZRfi6jzEJrzqBg4zjeN4P1ReE16toH8DDMBHUnWT2PYuuGN655jj42brN6dnCyhUpDpoMaU42"
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
