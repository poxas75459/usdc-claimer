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
    "EPcfPJcBHsetSt23hSNY3vNVrsJFDiC6wBy7F3DqMsphDYtiUmXcz3T3Kz5mWVc23crWxiYXeFtcE3KrpbuV7wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZaoNJjAeYn3aVHvhQx94iaWYJnWGNiagR9maf7FMGQEJ6iDDzqyyAKVWw4HYbbE6fywaPLs34LqputwHXF5YwPw",
  "key1": "3ejNxLrT13L9va2BeRrfEtEtxEh1tkpXnGerG4UepVoBqmsWmNpsFiKg8C47Uug65kFfhc5uc3EwszpP5otoewHo",
  "key2": "3sJuQ2226AXhKHpNdhQw1oiCy6sYAKWivxj9Lhj6oggHW1gZ44jKbuVTHVJub1cD4aTF2jYzpA2jiSnPsjiyM8dz",
  "key3": "5J9oNkjzb8HCcB1HEvguS2mFhY2E3K6y8NGCoHT4t188hTNZYMBwefYy8v2UC2a6J8fjN4fA4FbvS9VNjtzTcmoV",
  "key4": "2sfghhB6LryGhitEvTW7gXGbvSdYpWVZajb8kswymiiPB293BBr9DWHZFQYFmCUNKfYCo34Ww8UWVJGqLj4jYXqw",
  "key5": "411U5rzB77WewWLGWy8G6bW5EWyLr3cVAdGnYnJW9eeRyzbJKYwtdDxxAyViwnthtumoHgtD85vXGg9Z7LeDayfp",
  "key6": "4jGwfmrCTYNiNhpPHLeFda6TadgALseYEJfhBnCFc1913HyiVrrDYsPBSn8efB3xSpB4ukyv9nbFcz8ee7rQ4TeU",
  "key7": "3W8XWC2gBZWi6oN3GoPVwWvx2uPDoyYb56qLYs7ejiAzABkq1ZBagAhyveqHrPhMgxUJQqfQ1yR2DYMZQnRtJpth",
  "key8": "AJwQKAprfC3i8T6xKknyTJTMPFFobaNL4rCCXTd86o6npXmFeBJam54fBSCkAqrrp1EwhyFmAFUCFvimT8wVAkd",
  "key9": "4SRd72bTr6XDJWRtKi9LCPwVvBTuRQoscKr31rCAj7whWUobdhyT1gx7B2YrMiwEhNMMG1G57hoEntLGNsUH9t2H",
  "key10": "pJn2tKTSm1eejKJZZeeq7ZhqB2bi5zFhPwmAWsggLGE9Cy5Rche5rfthNe4afd4VyLc1jzL9rMuZoSmjsVYd1E7",
  "key11": "3txsf4SkzM6o9Dwad8LV1ZKGwaB9TKhUGeHyFga6atg4MZtr8PNjMdjVdnQqx43HCEtCNNcN4QPWzbtVqQCyMXk4",
  "key12": "4px5gkPt9WMCgyaKd9cYzpuqrgSKq9V7uB6nBZmCxF92UWgEvhBZoyMxiXZvmaPGiTMMKSoSBhBmqLdQamyjbhqL",
  "key13": "5h3JYbR1K1MAhC1ozftZ3yFCJf2ZnkvNTCXaVhihBJBWRkrFHrnUs2iwzefv1f9ohnm49z6C3YXmWreEWvtrbB86",
  "key14": "3CV2q5tn8UuadCeL43jxwxgBve68pf7DPddxvURNAsgfH21YJ4smpwCp3FGfuAj8JfCnJarpeJr9TJq9VSwbNsti",
  "key15": "23cSTZpNkd7fYLeQNwnhF7JuQoNbuc8HtwHZ5ZWJhs3LGerJmLNw3kvVHPHTzWWMV8ib4EGNsXc7ZDZitX3EGK9J",
  "key16": "5H4nJMxGyBBX26YNSCLuTHD94C1c8JsgLQkww1b9FmRdmr4vNZMmfy3bFiM45zEQDT7u7VDdD4Q4tm9F3sScRyTG",
  "key17": "22P9w6xqE2vR8huKRYhdSEyb3QyJn9z37kaBWnUoRM2TxW2t93dR73G5mf9iBgMdGALFJLBQ4fWqsbm1nqq64rjJ",
  "key18": "XASFwSoNJVvXAozVGP1XTJzwcwYJJNFHeNcgQQr9Y8WSRp884cvNpNdhxMDnWctcWdywaJidjTFYt9vzTKWz9dG",
  "key19": "3xib9TMjrqFXnZ7ahNejoUfihcXBYRpoTWxrJE6YpLvM7tiCNmeSMgQKZooxqkJ9KLVNdBMEunKEudfatVmgVdLS",
  "key20": "25B6r8QGbdqvDSpxwQj5eG78Eit2UmAaToJZ5YSBCPdJMAf6qbvzDp9Z5xfczHdbsSro8GYVVP49tfxJQr1dqjAq",
  "key21": "2AMEQosBu2x3xCgUJNc4esgMf7uqnRrFLCPzQ4L9SF5m1hvvP4Na847TwKHzSkDa4n8WjyYtkVhMrgTdTxuVBsbg",
  "key22": "xxYLuMEiphcgm1uHZDQPhtZMTCreKwfFZwZfye84Y7cpUXQ7b23vhtwRFuuLoWtWEzNXG1njcy2DWLQLhmueSvt",
  "key23": "4nu7FEGr743LB4BgH6yg5Zjhy3rXecoGXY6QUyTBpFqsxcgrZ33oCuKABLnY7yvoMvw73piJxrZvZJH8wSZR7hP5",
  "key24": "4y6UqeorXRHduSvC3pjY9dQdMesEc5EZFDn4N6V9qGk9iQ3d5v1QseMvziXURSV3qnxRbr7HyvVSEpUWH9HTVuiy",
  "key25": "4JHbtSkRmYZoHVP7F8ohfCHD6rz3GMUFij9s7cseGyGaUX6zhHYDuq2Z86fLVzYBhYy6dWtQhP9DU4o49hddPBXD",
  "key26": "2s1j8Dq9YYpj3sWTb8GDG38woJWKfGrRcrtu7NXM3WGZR5uKpjCDwhF4grM7oWN9g9RjiN2Wp1n17Fq4oK3BZAAw",
  "key27": "2BW4s94AkxZhE9zu7qHjDYi5iJFxC7dDWmZTw1pnXJied1tdHsFzaPjg83MH1shzah3Lo9dekRcw6nipNe4YTYPk",
  "key28": "5RY3WMoFdVSE4H6RQhAXvR1zrsK64GgspP4Jr4FZLp58AfZpDUXfrub21WkamK5tFWdJufM6NsnVsQxL4S3jDiSV",
  "key29": "NG52Wy7DELtz93DCvKzvxkzmBez1ukLhubqDe1VNK9NVsPscj51amZM5YqeDbJfPgVfytX5ByqXjvoh9sbgphfS"
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
