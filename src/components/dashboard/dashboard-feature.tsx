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
    "5W8EysGzJRhA7LpKssyAGJ8YX4oMNmQXx7Vj57Lcs9YLqxoQVkKRkJrdHSsqYqJWHJXFA5GhLsg8YV8AarQ7Sq46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Su7v3u1gZzqsZcbYgdo3a85tqaiofuo1noDjygBgmb7UXX1GACSuCWAqyzNwuPhSW3FMoAaXQZReWhM1uigDKqh",
  "key1": "GvQa9KbQgNE658g8G2GdEF1rqmovMJ9beTHAge1uZZAtGGHzUW92gEgbDG7Prqp25GL52KmcWRwBiZgXmxsyzhD",
  "key2": "5aBarPGVHDxETatBkeeXEYHrSV4oMde55Hip9rLPSw9o1LKn8dhfHVoCSmVk7sJu9htCQrHWRvG9hMw7nDaUXwwB",
  "key3": "42VX3UERFM6cEf3e6bYDDiPxE3FYWKDsyuZDQPBieLNCzZfsHR7MLYFpBQJRDgzfPHrudCzRa7LV1wuQmZ9JLyh",
  "key4": "5XrnnpCPawAhrjXCC83GsrzSeNFsnb2Cs5YBipKH6LHHDG15nZkdnDb2iLUt6dV9v9wsgbN4oD34Fdb22bufXJ5u",
  "key5": "oCdrpE72dYzkoSJtePMv6onFiiUXcpC4qp7cJkxwp3HjAaLT6hjuYmEnaXmMpB6J2wyL1AQWhoAxYaxE4y3VHGu",
  "key6": "vCTv37JAjiGPakQBUPYiR48Wkudxzph7tNZ62pdxtsDW4wjeNprdzqZYbgetrvghQmvwKsjM3pinhVdMiBRKWRm",
  "key7": "2jNkhWzUG2synxEdhJPuioJPCJS4uAzbFbAw39Q3WZWqDFeCWbopN8mFxwkmDMArhztAn8egyCq6nBAd8V4fXtBu",
  "key8": "2jaH3sbtb6oNGys8thNVhJkho3CfhMBEngafHNpSCh3qqfK5axbbo2y5GkXo1tAxFBXzoDGav3rUab2dtxMCuqMj",
  "key9": "4eJJp2irB4XCFLpvKz6vFPZapif9sovbJuKKfvt1aP4XqgnRJjE2vEmJjsEhzdKkprTs4T6V5U2JTEzUFfRhibNb",
  "key10": "5bwa8o3FoDrKDjbv3BWnBe8NRJch2bBU9nLp3ZX4h4PmbrEk4m5z5nVygQmVcKDdmr7rDZsLSVSwhtYDCoh6iuGE",
  "key11": "24n9ukGj3ExF9VzNpNC9fzD3CNWhEgZERVKXSzC5pAB6v5Ux9DCkpmT4yBbNi6z5N4NCK96YCiyZaF85SW4PGWjR",
  "key12": "3hoWg2G2QtksPPxKMhitWMvocxwsZ1YdFQrLG5vh3rgcYnCSFKdHfNVGbS6uSpawY14huown5hLV7HT9nFqivb2m",
  "key13": "4nJzX4VPVM5DPEHrrBx5ozpknL98Ay57RsPjZVus6ugBK7ecpGbWccoTowAjyb4KWjJKuWBS8yZhDcwuVr5Cgrx3",
  "key14": "46Kqph6GAQYWdXG4nPfxqQw7PBT3WVCbnYdXQptmPB5VYbedK6TGJChvgrUvcxMbokK5Tb1s2tYTx2imqaikMB5J",
  "key15": "4Y1WLxiAGQHBg5aCNuVbnE1HEWZ6am4DrX5zFcobUoGoMUSQ2qXei2PwT6TXFBqXrhTeFNNUJa47WfnBsbhGL3XW",
  "key16": "3shL33HWDKPu6ddSubptt9p7Wy8aaRSHgQYiQKok8p9B9acx6cpQfBTeCyg6Bz9FX1B4zwRwmhjVMXjDyWhvaBQ4",
  "key17": "tPeWFhz9upJcFuHou4sN2BCDAbQuJ3nj9Lk74avDwHe7SnKakiCi9W4E1GnyUskTwJbLJWyLgWYHZVWQYDvek6i",
  "key18": "5FQKy4wXuppt5TjFdgL2EMH7gkhp7UEqBSPCg5br3d1CaiBG78p2oVDQHDnUZgQSE7S2xkq3ykZEcBaCKBtmGQYU",
  "key19": "22adctomdv9cQabELmuUwrjDbChdCXPGryetjBeYmM1kJ96DXiMCMGhUxEZoit7FzqWJA41aAqvF1G2UcM1SvfDt",
  "key20": "3XYbzDjAVSvwQiFQyiqAH6hekbaB6g1zcmuBxzTHjKBw19znU1w2vpzMomWrRwcpumhPk1UCGJeG3ELEEmopP25d",
  "key21": "59VdyEUKVo3soGit1DfuDcEGRdooy58RBf8PrP6fMyaYJ3bGQv3cHQDvi4QfSMPyyiy62HM5JjDTuzjG77rDyMCB",
  "key22": "FWJ7V55wjFrm1VwYwqu4JwuUjZeiqqtQ8b2NVgcvCWjqpT9Vry3qE5x7fcYvwwDfFUmtQV1QTp8BLFKtpn5dRZt",
  "key23": "5PSUxU1RgMmSQDSGZZFxJW7iQctzYzwuYwpgWM7We7AgXPa8whWAUyg2iD4hMXXBGb4ZpRvcZZFrafAh5ojM2vBq",
  "key24": "4AaQsn43pRarSQCVn1ugnMNRrD3UiVhna2p3iweZAcBiFs7NcWuMHEsLuVpbCGBSYYwiZYERP55XdpTskUHPCeCk",
  "key25": "2tgs6VVXvot6QFygLsDFaJ2mHua6WoDefP6qMNJfPaWe6Pg6h2DXdaFXLgKdqxQ38EEiVSZEzgVSD78DqZQ27q41",
  "key26": "3WLvXc3sEhoAWcA3t8EAXWRQKB5FKuNBHtG9QTvfsZg6LPXExVon78Ec5aYPmjzV7bkERgtgk2NNgTrYZcHYaAiR",
  "key27": "2pJUnb78bkaDYmm36hDJmJzvEH2uMWwGSLRYJeASFq5H7Z5AyFFiJbNXtaCEt1Qchgq4QW55Z2iUrwTVtdfar3Us",
  "key28": "34J1daXqnhP16WmwqVSUoVd64Y8hFArfWcNz4nyXaLvS2GKtkTYVSYfZsC2ZTwvPX6qLuTq9HUs15ExuBbqotogN",
  "key29": "KugvDmfQS418E4qsxpX3PKLmEKNqWjabnkWAGFpvNuiL3qWSSzt6CPrDy8wXhfdfHfBUoB9H5HUcGpT6E4VMPkK"
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
