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
    "5ykhvLhpsUS2wpuDdeES9HcAAzAaHh9eLuQNuops9G8TonLg8fJAas3XKxkpXoUC9xsbFBgHNTFqVGnjXY9dBLAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n1sVPQso35wnxACJzmcYbB2ZeV4ejCJbngfLkuDVo4iKsvx5YtEGynKqKDjH9q9g75KMTvgZNJ6ujekQczMQAJM",
  "key1": "2MWeNcx3N4CG6V82tY6CjTyiAzR6zv6ioVEFdPsM1kJ8XAwNRWa8JitiG9QD1ogME6v3WPcT5fEyyrKpFMYmn7xT",
  "key2": "5PbPp6MxTRzJ5bpFszGPhmMvNmbJmaurNy3nUCHNRpcbdg9JZBD1fpy8PmJ8xbszC2uyNWgGY9qSvyfoXXJbu1rm",
  "key3": "dpjSYyQRP5NsBMsmiScZBUzn8spC73a2ApjK55RK3mdwxZSZT11Fp1YcwNXddu17GG5gCAuXjbwsjtz5t8L51T9",
  "key4": "fw5Pr8oEMDeRcJm2rdALquPzdR8J5rYtkCwg3Zd3uKXAZ4FhghSbAWvEGR18tE9jtwvGiMU5djFZ1hMnqC3vAKD",
  "key5": "3BnmLMHE4kxvnJNkxAjfuJ4VMsCZ3CrJEaBvDLCfJLN6rjjzbiwuEf5UjvyWzkQ1Rg1ZeCUHCNLis34jaggwQTrB",
  "key6": "46Qwn5qPcfSYKuq4fgxV9gxDMwCEc1KmtfxjQ15W7gM1JU6y1nrHfGpFYHUVUvtpgp7gkJ1buGuBUi8mgmft5zgM",
  "key7": "4ncw17jYEiJNzUpso5jTpk4RGu7US4nxqz8hA4y72VP4YADon3zZdWAfeRQNECeFTe5SdWcjeciFw2dLpWkDiKD9",
  "key8": "3DabE1LPKT92C5iyfm2U9rHhy6voj6W61gR8abdnbAR2QAfS2CkcTfP3iiquU35zbRobiLTJ7jXeChcEY8vp5UDK",
  "key9": "5iQzcMMDoLEWMmpWrhawBtWjhRpP8Z5E7X9gYM3AcpbpoCMiDNkCPG6npUetnkXt6tA4G8M1FiMr8oEGgdJkqbbf",
  "key10": "3HHRWp2yzDBZnYs8eGHyvzmBzMEqiDrCp7KsTvppXuDN1orUhafQ9Z97PUSWDD8DnxRG79qwwbLoZgVWStTXgnNL",
  "key11": "2fdQCt37y75wBhY4tLbwGpExzHAMQKCk7TkQ5wjZ32DWgWCd4oCK1bHYHHzovN8KNvbfF27Vg5qW6ui2qhGaZRzW",
  "key12": "5y9ZKwHvHq3VEhzvBZzed8KCKrf7A8jaQooGnaoDh9rTzyLftAc78vbsSyqUbNtD7G4rYL27MLzDeJ2Tbmcabjex",
  "key13": "37tgeRvPyojjj8MJfKpmBsQvR2H5gQWBp1HV4SEQyppuNVnSmfEp5RoohftGn2rJT4zng88KHUJT2FxmNMGaEG5s",
  "key14": "uY4Z5EcDWoGiZGy4x1DNpmVEHHtQs5GPW3ijwmgCXbJSzde82Q9tCV9FYQAwXiPsSx6CbjdkJhGswswpYB57unT",
  "key15": "4HZpPnntHSVLGFQPNwsG3VV8DS8LWWYfRNkLYN9JS3VVM9fiqq355SRoqhQP9o1HyvozKxPCJTnybBiFJCt2ShBs",
  "key16": "4bMtWmdSUELmFdU5XzV8J9VqkyH7GgApMX5SrRT34QEtiMjaT1Q6ivorFdpsDX12RxPiGXcCfkWNvRNpLZ6e2j2",
  "key17": "3sr6w2u2XbuauSkPbNdn3wb998WYoMJKufbb7n8c34NCwNEBh4z6cfyXT6oFArRuv7Xoo4eoPwFmxnQ5f1QVfP9w",
  "key18": "3SJWkLxQ5QDN2WqLwryuXpqbJUQqYtuYQnmb8ve8dLg1CQkvfWgr9QVjxrC2xaZ1MfCzeC65A112GwD9wF5UFDRi",
  "key19": "2zHB9VBEGQh2qQYEZaBR8m7QE5rb5pFPJ5gWU5PPhcFstwFyHDr2JQuHsAA6AXY5Qq9f6DZ1Tc79KQp7uSfNiAtm",
  "key20": "42XoEKDJmwhFjUZZNeBHKWcwzhFUqGgEJ6ShPqywP6b2qqDQzRJqGUNBPttkfdARyuKHpP6qsfnZAv56LEvLfXuU",
  "key21": "4KFpPDfka4WWQGZgR4zCq2Fid4TXS9ho7zcsReMe8izZgC5oLK2ezKkThZMUXX2f7onDxmc6yViXqkHbM8dqfRMX",
  "key22": "47csX3jEueUUsENqNPVDSDARLDhDWQ9FadsiXubtfDmg8jEPSYX1qWhAWhUPzvfT7YhVhHeC5qzdvKTfHxeF3LN9",
  "key23": "4xBoCNc2A7yXq1cGp1GZhSQE85fpgBAfrp1Yu2oAcARJ6QaMZUgbzU4UvJP8NFsr1f9ru8DRNAcaWFwCBUvtMUh",
  "key24": "2GinkH7gpzNirWjeDuNjAHws5GZKagWLNLcofeixUkUHRnZ3vCsRDsKpdpUoQsuNyWSSyqgM9TJj7E7y5DaCZ16p",
  "key25": "29nu4YEqcBLZ4EcKWw8pPncdtfHUb83pejSuNLz4ah2S6WmsfSgEGAHuos1DmguRhkHMkgGxbddbV534h1ucanXt",
  "key26": "3RewJ5Rx7r9dY6iHfGn2JzwrXmgpt7obRiiNeaveY5SUnCFbRYhhwERFUwES8g3DTBiaGWpMaDvLt8LbxSxJV8N3",
  "key27": "5XdjwVLxK1zd8ttvnYQn81hWgVEZfew5toQ2eNza526AYqu9YaXLmNkqZAEdEDsQHBNqQ6zXmTc7Z3jU5LsGp99",
  "key28": "2RF8ikYftVryjg8hKp26j31CQAHLVrHPQRX6XhwJ323o8UfvBvehvaR7719Y3iYD2FhHWDTYFWSmKQfMjMo4Wz5n",
  "key29": "5Zg8hhHAZJwxLbiQ3aLrn9HiqCH1BM8yjKCfqFWo8beAEvMZZmWLqDMNxbE5pcPZjZhbiB14YazNYXsxhWvfiiL5",
  "key30": "7fB5aPmftbzDgXLvX5ziwetCydvrS8fmmBNAmV2JcDxhNmtbAsvk2dnPUY3eYc8misAR1t41sVDAKUVGZnbKrbF",
  "key31": "5ohH3LoUSbvKXPusgi4cxfXTNrVKGkLAHWQbQYow5PyEREevg2SoQr4mSY1GkywzsVzQne4mh2oiHrgvB3prBoA3",
  "key32": "29tKgBMYUP8WLggtN34zChZWMrxxJU1KgdMbtoWc5s45qXtkzceaQv2vSsFM8ZW9yLYLmwn6tZaapsQ2VUwYyy3h"
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
