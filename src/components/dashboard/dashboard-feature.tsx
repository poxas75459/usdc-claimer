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
    "3HioG2Ke9sWHNqCGWxXxVsHkbxpf4yH1xxTddjyB4j2DEtexByA2C1NNgVQssNnoZfUTCub7mQ5XdKJ3QDiPWESH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKjw5GivpYX27Jxv3hifpFxHUptTzadBZr6kmDcHcaUx799TRtAtwmgd3vnkharhjsHgNQ1TSwCovHgJiRp7fPR",
  "key1": "2V5VjggnmkG6AmKpCSzNX8fS2bJoWGFcGmikGSDUSP98Xr3upbSdoc5SvvuP8UwEWBCE4aFKqAvcPDLvGGU25kGx",
  "key2": "3vqi8XX4K5YiKWsL6bGTLv4285WbRqr83rqoGFxx8j47vjiHhQDDgBZWDqi6LG8Xi9RkuE4xh21VViyvJhsh4dT5",
  "key3": "CkMu6qgirVxX9vsAaRULmWShbh3sppLd8yoD7tJnf5aGN4hhFQcgppkwzZoqP7duyVYBeA717d8t7BhECgneXyf",
  "key4": "38F1tJpHx5aU7vL7k2V71598c7sgNYmVyaKpM3zn2GTJx95MTHAfcS4SBubnRBfXdWHAvRzYzGFSHebY9uz2iTFm",
  "key5": "b4rNvqUQDqk3RoCGJVZc2W8r4fz4rVDeGKeBLNfFJdpDTnVwoWXgkV8DUM27z9zxsNacXm1im19YymLWeRKpkFy",
  "key6": "2mz2j7xoeJQ9K3fhLafvueLuZUagFWhggrdfiED3oXu1SYqxi1x6huwwynfJK2LruocSr79eW744ACKEijgsDduh",
  "key7": "24JAX6RuagHNN1GGzijw8XNH8GUmiFy23WWv9Fm5pyjcEbttjeZqEep4m4QMsTV39FpzRw14dhffRhZRJ4vsN7pB",
  "key8": "2gh5VtT4vGSLRy75ykXQqkxbRYpT4CZemjRsL7SJMAjfUDoBBZrkCLWazSvMJgRiDxm8DUsZLcnXKkWXp3131s9C",
  "key9": "4pAd3Ku8egMi1gk3CxnxnYzyEaV21Cdx7ZJrGw5T28q959dB1S9b8wYoX6xyvV2c3aA1EbVLrE3pDC9voWHfuTEW",
  "key10": "5bMXT32H3BxH5sXnQrazMCyzyUzpQTGuVDJkdHdBHhTNqK5bsSMuJ8t34W1xGo4SEaRdzrGEwVTGaeXhdkH247cV",
  "key11": "493SEWVxyPZ57ZzPwdnF6rFPwBZXj9uhtAwKDbunzYUVxc2u8xo4g4vyfgeJyFLcY19qgK9ueV3dcT6kEHAo4zFx",
  "key12": "3bnhu5nzxZMLzB9YJAWCjhB3ZZwNbd6H5uyJKH82Lome1jBnMuemXm7AMQp6bvbkELFDQz3V4EnQbMsp37bG9WcP",
  "key13": "FtBsTykk4svzjLwtXeXRMUQ4UwZ6ug5ve6KtcEDj42qxww4EJsXpwokuXGhCYW216hrzzFZp3MzSjAG874qRxL3",
  "key14": "DdEU1xNmwFVSd9YAPn8SFni9m7ksBGxfP4kDoGpVia1zZTJJFTJo1BwW8nW7orJCXizWDJMkmtB9P53CHriBhiR",
  "key15": "2EWFroPwqp8DzbpaT89cgpW8t1CqG5GCKh2oXzUQHgz2U3ojjyQQqX1HE1uzKA4sMwa841qMYfAsNEGrBHBx7Kpg",
  "key16": "3EqzehpMrYa5gGCSoHt5njBMnSwXT51o7yTYRYYKR7e3jkKGFDcEbntQq6dhSGkQ1MGQP5pftUnQ7Dqg6hisXy8j",
  "key17": "5ZonK8NvQ2NwVv6J1ds8sJSj8urXLThKTiBhu9zsRVyMr4zrVxseDBUuV5BaqPZucT7NaaSEP8casVtTPt9FtTV5",
  "key18": "3QnbNymRNczGAterBSEm5mLtQXjs3uH5vh33BRb8cPEJNZvrYHTQy2upSTbmhjyHzrNH25bAJGoP6g1tXkWK7y2z",
  "key19": "4MZbDYVx7UwnMQLH7zHNJcyQy9prR4zrMgviNczF7jPX9nDGvXCmsJY2P3iHsSiAifrp6PgoFr7XE9VMGmspGrHh",
  "key20": "2vkE1oijxWrh69RHd9xJNnaJB83vkMvcxBEPvAf6aLeaJWQuE3pFBkwrdGk7svQ6PK9xVVN68HjQpp3tHLts38hh",
  "key21": "445uxGvTULPbmjDyMzDAVm6bpqxGBfBSxeKgDhx4qsm8JpqahgrW2Vj2zdFybCVMVjbGb9xWZ9DXnv6uzJVLgpDe",
  "key22": "6XuCdLCJxtfrA9tYQQXT8nzLYANaqZoXgi8wCHEiCqfJrCfrwWcKzBSekb5kCEQX6sSUgdh4jHkfxQPyMLTFxji",
  "key23": "4r82dSsnXHJFypGS1z67MMibPaCJN2zF34FXZPriqh5vfctmv9fK11zdpKK3GV35CWosesuhrSeJAPEsyQpGMuSz",
  "key24": "TUHLHxodriNqwzZ4yL6XTDQrvZ4MX7V4jgfASQex7AobYJPySwrhUtucmHByGee3mWA8dtAqNUcqDf4DnBBowVT"
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
