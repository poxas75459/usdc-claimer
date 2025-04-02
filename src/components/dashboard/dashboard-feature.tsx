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
    "4GJCxPua8n7tPTgyZTMnyfboPFAZWhFyYJdxDNBsiXru1oJ2jufqPHg24CvqswsVm9GvtmXK8o8zh2zaxobTTgN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4yZqgLHzaAWtmBruzKsSpwxtcSHQGB8aTzYcPSPKRyvaLHmC3jU6Awb6idabNfHA5GP3N22ymvsR5EWEpWmfVk",
  "key1": "3ttQx6WiDJu4V8FmAD33HM8uTRH8d3Kyih1oyUtrbRDL4V9nYTfj5F1FnZ2YG3REenYedgFhWvcWCu5Xc6judgAT",
  "key2": "2LMT9A2F2gqbFZvMuW7GEZUibodzBawPpjhaFH1LzLaNgDEyEcLbCY4TFKKpq3ah9ntT4V9djcfaHzrNmcGJk9QZ",
  "key3": "3vAZtzNDdUrT27BgtBtCwXQbmJcD8UDzFQvuDzd3fpAE1kpWA5bNe6NpGjY1TbkjrMXDYXuazua9vmNEeQhih6Ph",
  "key4": "5phHf1YzAwL6AJR7kYYCTxGXdiXejPG6vYcFuMsRwM7Vnv5EVSz1yjmefuBfjyCWgdHSGwLn3bJFwjp4aUVknFCf",
  "key5": "5oLjeWgCWLP3KS2L9RpTDMrYNfyu9Y6QxKgJ38DA58Hsitg7DvKQ9owj2JxgmHyuL1nGvFY5GhvLdfJdLh8wSLvA",
  "key6": "4TyMAkzGP79PycdCrudWa44W6LPA1gTyKiDFA7iAzd9aVbHvjCkMbKpC6n1taobmSmJ9RszBRoqGZHx9HQxAbj9o",
  "key7": "ZeV5zZZHgfe2CjwzFJb7SnrTYr6KP985YwLYyGApDPe445gVbMtAVi6WdUgh2KFdtiR9oCrsukaiafoYXHRQgwM",
  "key8": "45Ad38pLw9aUw2BzujGnq9uhLRQxaThqJ4jsV3qjV7kzxBTMJVbDV9tMbNtELCKebdNcPRVYCKVYQ3iwePFPeAMQ",
  "key9": "3BvVFSnv4RyjgUWfamGb6k7xTrYFZkRMWACGUe9HoEXrsNsviHnoePewLTDf21aJidPwSGdJSnG7Vj6haxYHqnGw",
  "key10": "4VcEM12CphvQXaRifGdmRA1CPeuqiVZATSgovn2HkAdidou8Y4ikg4LoUSkaQF2Pj333pFAEZGWdtC2nj5CqpmAH",
  "key11": "373jKL4ojvBg4krkoqZuZwEK9jB5uPWZYvKwD8sUHDmK5Qpq3NdVLWzLjnFd9ze4SeLm7WVyNTpst46vxRaAFvsz",
  "key12": "zyxBHpBipr8wkjC6BzQhLbsri6LzeoQW9oS21XS2vsXTpmzgwpCBtwZGXkXv4p3Kc8oa4FeJS9gLuRJCKEdnxYL",
  "key13": "2qaGMC9R24uyzZH561JUAGGEX8jbjYEED3XvPPAo4zEV6eMA2bk8YfB4jtY8SjE15W2JyVwyB7Ya7htgGCnoCZsp",
  "key14": "QmZa4PnFb1QMvfjDhbeFef3Mr3a2qyue18o59QoMFLXLxzDpQnNrZ7n7xhY3LDEQguHAnzzBc4YTb9GFP1EF7kK",
  "key15": "4webmrxTCx4cHLkFeY5EW2VvamneNH7WXv671W9jxvK5gFqJf1yfFHj9Qo4Y83oMZjyESJ57dL4sA5FZbZXJwtY6",
  "key16": "45Dd1pQ2Hnh9tGejuGWDM93V5Y15agnkcyinm7cBKUGMK4Ae7YXTYmJvziTQn3XWjS1LwZuxu3JLKTWebog8FedB",
  "key17": "6gp5yDL561JVbnH6QiEzByDHq2QoRsz2wjkc3HFG91yXd2HpzH9xkCGtzazZuv1uva2DwXURbMHKZLNGFwU9BST",
  "key18": "2QNnDcnCyGe23UQ2xHU8tc3zXdvwYXrxhgpHV6WxVD5wdVXaEnqB2QecMcBF6bTtzt73JbYdHAzLmCVMXurNdbB8",
  "key19": "5qtUSScTQtSHFdxfygnwckbe8gX18n82r3PUvrM6yxWcuopC19P9jeR7e5GTTTShGfv4mE4EyX5EVmaVMV1Kttk7",
  "key20": "3qa2g6AVq64RniTgJtuMVKjJPoCHd1pMN3rLABvW7cGhSmw5di1SA6GtGmdNEGNfbQp349WjaSMLyroWT5qjvs5g",
  "key21": "4Dv21WSYRWv73iKXZTF25NyPtsNct59RyLqndJxXuErFDRbu4svxAKfQgk6haizQ5DxZAxRPicbe2B2jWB1A4JhX",
  "key22": "3pKymR1dN6TsRhstZvZwZW9nukqUXREL4XTXvk4t2dGcUX2yYHP1UKMwaw2xQAw2g8bwcTkDcQAG1ra3iVgbPfGR",
  "key23": "3z2KB3Jno4GV1mN7r4ETBfnigMYmhFPN8Wn9bkvxogs35qUDH48kKpkR9rMdDsodecHnLrMSj7peRh4ymF4uJxYD",
  "key24": "3Wzw1UkZ9dgDPJjddB7jR29sZz1zoiUBXnMpyqHooTSedVPsPKdrrA9qShLVTRjjNmxSmtZ4CAG1SYG3MA7wjteX",
  "key25": "2pYLxXJyq5fYhVNHfQHmne1GsyDVdKK2zcC3Y6bxYu1mn8P4gTUibBrmzABjZsPkHZzSAcG57YtT4rnfivWziVXz",
  "key26": "4mpQsda8S4R5mW15zLVdooxzfyduWzRgfXMd2yuJHQaFALqYP9gpc42isRkqsRLqZVdPLX2wvUpGoRS6ezjY5X6E",
  "key27": "3xriTnVnFmL3xTG7ezsrQPSSXrHCaGqo8ocZp3csmEzAZFbX461op7ycPQNcmLM5brPNE6GVT5YX7J5EKhsUi4wM",
  "key28": "4qDmTiUFXQCJYoyanLPTPGp34TatAj29UKNzgxcy1GHpA8Ctc7kq3YZJbzTwaYuQAuDcS1jqubYKdAq1W4rT1UW3",
  "key29": "4U18N2PbGEt3Q8QrAxzaDvd7YAjwZMN5XuaXR8QGZ7K1G1BfFsn4HtW115SzcCq1WMz8d86B8kcdsfFnfWxLzk9C",
  "key30": "384pry1aTQtTRgDLX5nfw4YL72uG9FhSsya6rAAiJc1x7Hoc38yFcSdPK3cWhySo5f7HR18W4F8Z5QfiaZ7hPN4X",
  "key31": "LUUS4oiHpmytCsJtpXqnDQgsdreMZih46RmN6MSQan7jZZH9GiSTK2hpLiJsiq6zWo3XWeBKQqZykpLjfK9Rd5e",
  "key32": "3QjK2X7ANzm9eZUwNjp8rCwF6LC1kBMg2zJByioN8yuSmruUQ45ie5gi29hn5N4rQP2rJEwKFL2Vi9FrxMUuHhYg",
  "key33": "2nWvJNAi9p1hazpY6kwJtjuq5xZbsHLd11VCenuxFXxdrxxPttWRmgvY84Dd21M8my4FobGfk73g78onCUyDZpdZ",
  "key34": "3uUsadh6MC85R88AF5dVFnQZ8EDPwk2HQExSn8h8BbhLUseUWjE5rNxP5FgiwmERTQp9aqjwboxszZBW5nFECk2x",
  "key35": "JxMGngTaN9c5LZMdYhPYmV35ruE2kdGqyaxXSvnUzWp4c5oFfMafEuNn8UWVzd7SFJKGMpMJSgicbYgqCP2Q3ZA",
  "key36": "52PZ5zbQ8SUkHSTMkzKcu9tEauNSb6retfi2gx4bswJx4i5MJUy9Dj9tfa7AsioRRecScDFyP4KgGTvkAoSX4KKS"
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
