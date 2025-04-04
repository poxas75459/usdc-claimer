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
    "TsJ5b6u5ZpunDEonSvRpQTxbEXPHnFAmmAPgM8HFavzPiR1dtdiXNaNFKppH5Tm5B7imDYopr8LK6NPbBomirrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TcwWev5cn4E57n3EgLj3yEUMm7PiGExNFwv1Go8egr3RM2UrjPc8tQWSzHWwuivCa7Ann6NxeVmKiodVueqiRy4",
  "key1": "4diCQpR2zLmTAyKcLp2PFeH3RruQKtrNgS1YqmWuCHbpbtbpVKf1rZemqW4JixXhNsCpgjq7wwkTwjFwgZj6ESCn",
  "key2": "4ZB2nUB5taw5SPKz9JX8SNwQakpCSu3wmXpe9UZe9U5SjUtv9zkynX8RKn63Cgc3bLw73oH7GvqWpT3CLafQNLUy",
  "key3": "2Ec6V9ybTraR8e4pCGs8n6RRtEwZ4QjRyRRmK7duPrfaUw2P9WPRyfXjv916wzSgEit8KorhZVbrEkcCFsX2y4P7",
  "key4": "3uJAMAwgUpVsET7LDDijYk1qhWko3sZAuQ5AJPBGqME9hU2n6BvoeprtoT1gW1JHh3FkxYz9db6QnfsktgzfaDT3",
  "key5": "3mAdKMoYMeEZnjhVu6DWda4W6WSTXp3w1ffGjvCsN95KLQxQVAKDtUj8cJjU5Un8oLq7BZYFaBDHMCH5eB8ABVi",
  "key6": "2U1N9kRZfaQRpF6zo884aCqQB39nqm8HLWneX7VJTN4wUH2TiN6QTDuEwRqTiBxweTBbtJtY9XETNQmUMoFdRZb8",
  "key7": "6Co9o6aPTxh6n8fsrBGdbDemEBTFb6dPsBhcQqAgNCPW45z1Gn5DsE7zSE8SrJSmBUjfJEYREQDEBje7iEJkPDi",
  "key8": "63wFMLtGByz6EG43exdjAix9KzCLrqvdmScK5ViqnF5kzTWn6vseTbURhMYCpW7xmEEV6ViAJMNmx6axVCHefx1X",
  "key9": "3TgVykkop4Z5HrUv8kZymVsjVYY14FX9mrpXM8XRR4SUHCcyNNq52Ug8Xje3UQHAdWNaWXemA4w3rNkTWcYi9Dqw",
  "key10": "3ZFU61E29MKTaW1SJ3BEWvQ6qKtNU1ymwumiNdfqdf1Mguwb77xx9SzgaV2bXHS9V8FvRgaBvpHoqPfJMgvtJx2J",
  "key11": "5XPa5ZgvksCVg5kchRmCaAUcZiNcUPi55Xa5nXMCDfyXy8ffm5mqTTVDydzYmzjXUXzth7EZR7v6GbdwuUNdML8n",
  "key12": "Lu5hrAWpBg8gpwKyvAc3sfmX2hUqE7vnXXNArinzndNUjQkju9HCrCrw3WRoEBqMY8DCm9jGWjuL9b1EVJenXqT",
  "key13": "4o544P7tUMpHuzs7QSD86oyqjudAxi89DBe53SyLQR9ynxLMeyaipEV9Txcc1juSE3t4MQk2Ux2rvrMubkhu3a6n",
  "key14": "5hqheTpvFLZ45wKsp8LV4rREMMW3mfn9NTbxSM2xmUDe5aBKVqCYcw7oy2RYcCHA2X9Rg7zJmrGKYDbjaCJ4rwNW",
  "key15": "u8nWbFiwzS9DgxkoyxK7cA2vn2Fd7zTWcGoYQAGHwxStQxgPMept3a14x8amR2S9vXfY2p6KL8hAmMB8erhdNuX",
  "key16": "2YhBYSMEapJcB3wGwMPxyu1dMpHkWpDhTCpEP1jQTu3N8x9wXCynvmwCiVPNZMvXEUWNetySeFNKtJLAEBED8Ppv",
  "key17": "5zkiQvJN2SQiQE9J8ckEYfaw2ajaFGFCmtW55JuZcf8KSXkHiogf9Bee3yueYeH5wiCGyuvmfvjD1VaATqi8EWQr",
  "key18": "2ZzrxuERje6Ku1rtDJzMD7vGQGe79Fh1NzKi2FGzR6i7arg2QHSyaDFMm3FACm3nCpGHSKfoTnrzEYgtbQz8RgZq",
  "key19": "5yXTCsX6NcPfAZ7LbT5RQ5ywmoSXHn7UvzMfwmcfvQAFpZ1KjEkgyBkKKDg1jL9nVpRj3zrCWszb7vimNXZEvyTt",
  "key20": "2xz5Cs3nAmLDFMQ6U78z4SQJWLYQRP5hLq3Hc6bvViarDVfiv154YWmBB62ic1JDcLaFk7J9JkGmFFpouS5EWhLe",
  "key21": "5SozK1zRsCweH9bHDk3G8NkbUKoLKEAsUj4rnrKStEzaJVHJoUwVyDUvsFYWPdqUmtw1YRXNfRuDyUUQjCktyfhL",
  "key22": "4QHb8bwRLnoqmAb6FQMHzWjxXtucwuj8Z6nf2a1yNToKK1gDsFDBZQY9h9tSSdzvMTZU8MmtXKDecqgaJdPLDZA",
  "key23": "2xLxBHYxD18pcH2azADCuczgxdtRVBq2ZjqcBH6AtdB7qjtngLFkvsL3UR79wsQWmY1gYCqSV1ZeK2WimAeNx3w8",
  "key24": "ZZEeuMd6z6vseU8UC5itd4gSFBVqHNxa6FjhAb1ehTQapQbQe7e6m3AnNWDPybK7SuYo1xBgYM8iir7KMJxQobx",
  "key25": "fuLmh2X7hZ716n7QcwjRZdFtS9ytXgsnfU4NunN1SdPPdjnyvDaWEttcSiRzU62YkcrL9PhKnJvfYtdykxnxrbo",
  "key26": "PnQEJY9zwbQmJ2JPY7ndXw1cvSUsTTN7DAtm5f9wHZcw9VhQ4xL99zUizPmKkhN8CM7BBL4Me3S7v9wxx1uL6Y7",
  "key27": "2yLS7ssnB4VvH5VgvgUGqpV93RTCtBaoXZCgXeo828hLZ17qeuMo5Ad8PxjkxGFBVSZj1gF4NHzvrmRvpkakADJw",
  "key28": "44XTkxfsUqGUKtZxiiZ7E32EzKSa4oUP8RLN4p3hZY9tJVz355nYHyfTA5xtXZ7KqvBkTmN6YUMWqZoheNjdw2ze",
  "key29": "242HPaUR8uVuKuCcByEDKyBu4u83zAUZRAsVRMQE4w1R25Tdu2MfiWp3t5tu2xfB2PJcCMcgaXm2jWaXuvwbq1RW",
  "key30": "42hDfMN2s9UKoHNuunAVm3bpVrL1BDf5befwufTYXz5XgiEps8D5WNwA73F1MJhQH7jnrCgjE9FbyHoM2cghuYrz",
  "key31": "2vGdjExG5zeCFQd2eJLToJJmsrKz9xBnrEzoL2Un8Q2YXjaiymFZKQ12gv4excsgZqHwHccinFUC9w6kiYYtZxW3",
  "key32": "4Xj8VBLHt3zbG3dbCbeqjyW1PvLiKQ5gFdfsUjMzvqzazjJSp2BZ1GR5QJcsHtkdCka7XKJqoFhjXhkAshp4CVPt",
  "key33": "2ZndhrBwoqaUtbD6bAV7i4BUnHngYCbxR9qNcEBwPYiEd6LDANiGmf8TmE1EM9UQpNhgSNpkwr85JeRYpfRtwcpH",
  "key34": "5jamz2hLBw5Sw9GWMUA6D3b4L2rBJ5eQBEoSz48BCKq6MXHG431sQgJmYDFaZHUrrA4ATW6jXTMusG5LqyyYEKUt",
  "key35": "4Q5ziSCywKWcuZtiesDd9dd2ZhdBK8YEhKQWwf5cwcYPeC5MExs8P2zZbYrMC1NWHHpAZKHap8638fJmHCGuRN2H"
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
