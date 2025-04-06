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
    "3jTrMyDnNBWGQEuaTsXZ2DsvXC9kvq6E9HJE3XSWQGtqTMRwer1da6Ki5pzctaMZNNh1tnfarDLgn8p7y3nwxWdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1BKWJTGn1RNYTi7oDb118ZhCZJYA1WPRbNkkgtpKqm7NNutGf9JexYMkxZk9LZAUdL9gyLqfuvmBpRpHzmrfUa",
  "key1": "51N56RNpcWE7UFxJpXGw71XMkk48stWNnhfGaLSTzE7X67jeS9TE86gSBwqUiWLjj8UvBkob3BKWQNucTqW2eB3y",
  "key2": "T87if7zLEewCvZwr7nuVPKBdAW1VtzQW1njxo7XNzSBQC2EdpAVseqKHGpFqni9JuKMVPDg3Fo7bnF6Hg4HyooP",
  "key3": "2sg446rTBXgQg75hce6LnRooMgjWwtwkuPugaQDEpb3w4SeppH6YHBwCeFT64QRkZiuZbChZsW5N87wMXTStqdZ",
  "key4": "2zTqtvHGrejWBDkrEJ6UJicptnVmGsBavmEr4djH9hqbq29Nftz26UjsvehuPzZeSiyymsuijuXN4pL41JxS6R2C",
  "key5": "5kKXap4uve6bwup2KYHf5Je7jXrfTorysYYj2Jwhirj8QAaDfzwCXZNuWTrnSPCEovsiQHAaBbUqvBcFEDa5En4W",
  "key6": "42Fqb3yqToDWUNxEHLQ1fQ9BSwtLyKtb6PneGMQB3ZKgxvCXujjsjNB8fVLSEetunbozNwk7cgKFSTaJ3Tpp5wit",
  "key7": "461sp3kUcjujUzhFpPCXXCbu4t4uPy3RZovR8T2p6ujfBeLZVaYVqdF2giCHmTyRqbTvZZnYhmsveed9Cxh2L838",
  "key8": "4g6CF4Ncue9wRYU5HVuGspJnPHzST19ETyS2NEL6FVbMqziSG7tDMyRNZQMqkf6QupvEQRPvzDMkC3SvLB9M4o1c",
  "key9": "auXpCcHHbb3AbTJYLzYrSzmFDJVGZCGDaaA6yJfe2QuJ5jPxQV4eA9zg7RrAaWAobzwmGeVXCcCnv7877KFqeRD",
  "key10": "3A4hyhup52Xnw1RXQpQqDn37GRK5vxN6inEJhRCWLa8FTWLNDNvuFGTgZUN2V2mebSsQo1Se2VEyQugyFaFMfqGJ",
  "key11": "3aunWsozRpt9Nx5DMkRTm7VL8hpcpjjeHeP6XowZy9RF4UJidcA4a8Au933EZPf7LqSsN7EWvXCAAhN7pJf3bemU",
  "key12": "4DGnR4KBgB5W9fa5Ahfy7ieTufPvK28ps8CdE92JnLWZpoTcbw4ZKSaQz84Y6U8GPhgn1m7CdJYt2EFamsRt5RnH",
  "key13": "3DuBKS63CLyVZB2nwh5KJ9vstwKvVyPJfwbSovvMevJPqNUK6aGBgssa8NN7tYTrvxc2wQDisZ5bWsmmDnVqdtmH",
  "key14": "2D77SDvhUZpJGXYxvX9VgNf9VUzXhAAYPd5CbYghrdEnETG8e5GLsv4HHd65mrtcqoCgcKn7tJhfCRAaCyn6v7g3",
  "key15": "5mZKW9DkTi5AH1svhaYN6oDADA4t7YYcro2QxvqxorjMgPYaXKK4n8uiQwksAUfZHccXDePs7cjRhfBtTHKfXQJ3",
  "key16": "3A8m6e5hXdwzEgBKgCM3cTCQW1rv58FVV4ikYXrdCHhyPTNweBspaj5btoZQ9N6rTPuW9x6cm6GcD4W3CYN9FLaK",
  "key17": "2edHVrsawz4bkeNEx3yq5eMjvdEPkmwddNrHcPrnvmGyayHYWxiZwWX5EjBv3dFMFcv4EMxWGrWQJ2VJS2LmiAch",
  "key18": "5oMs9S7e2YrtzPuzZYsJsg2bDMENBHUVxCfqbFMbW7VwdCpq1eswXuup7yqB1ufh33BGrBB7KW4EftWAb5QAeqFS",
  "key19": "5xFutDeb4Z54qfi6bu5z9V3CtUVRm6uNjgd1RKd2x58HVFLxi3Dhvsg7AvXVs5UZoJwJYMg248VMmMbpPsR8PPqp",
  "key20": "2jUPzGzgzuXUGjpLRaUf4Mc3g73HQkx1Fdps6Mjiy7gzPnNCFPttruvMjbro1oN6pcMCApsMPXMYMHvfHari12VV",
  "key21": "5kYwqzospHhgq38ZNAg8Tp88p7YXmintgV4DcK5hNFm2YNsaHcQUaW89Ropr5a5UnkeDdynQwueMBYybaBtsNhbX",
  "key22": "2H7iCBRNvU7bXi2Xem83ryiHpDJjfzzwEspvxecybtU3YNZA2Abq29ySzW67zKHNeWnPEp7kY8JrQxvMTAk1XzaJ",
  "key23": "36rc87ypxg6wK3V7huE9YWWFifcG1DmB1rFS1LF9JhU1GWd2DkigkhBXKT3Pef1xadFJNXJHKtWxL4wcwuB8d1kW",
  "key24": "2G5ektmmtKtrdrXMYs5nxJQumHZjEBDf4JU2ctxgTCbkACnYiMCuC9anm858WA6hUmCn4ZVKPNRNyHdkEzPmtPH3",
  "key25": "2YGC2MtgTMLdtvZbQxyB66WqrwYo3KmcsdzjE2GeJkKqYEkWouXE8pH3mTsH4WugB6voybt9hhcpquM1uXehMCMb",
  "key26": "Tk31Hv643bQziHwJQQzeVy2ZHAdHj2WnQoyVyiPdPBUxEkmSA8brtdS17L82NroXrWu9EfvUUmxX9MUmUaoSuWx",
  "key27": "b93xsCMKMvB4awgByKf8LqTunsY35iYpXWzY2QdZc1q5rF6M48tqtm6w7GyLKhWiELLp44oVHmt87LZR5f776R8",
  "key28": "HN7mMKUivjWWZCVDUGSwVdRMDA5A7yo639tNzHyWGz6V3gabw1nPhpuWGab549TJwFbnFThyvL8wK2hjdtsomFg",
  "key29": "ricwA3PJAkiEUZ9YpWACLcSFyRd1XGWL1gsrNGz1w7tGWKa1TvVYwfh7YdN1DQb2b5trrc76nN5zDjxhoT3nz4q",
  "key30": "4BLsuaBagPgFd2HYX5YeoHivXB18oPiVMwotiqpBBkvzcduBLJGHmSDL2JmJfCS1fy68yZ6iK39sSMgtwLMKnnwU",
  "key31": "AMrCbcfQjb4npido8ErYFAQQDYDuWt9Z8avgitaJP9z5PiGSD7cW7zu4ec5C5aVzSAoC2nDpXECLZF7H95THnuS",
  "key32": "5XjLJgA64brUztr699FXxVPX7qMuGULyRSLkuhV6NtsQHqFkiVKgTibK4S93uXeHejeTU8SiaaHDR9jfJHXjyG9D",
  "key33": "5ZZZSwKCiZnZinxmfqrtyxC4FJPjEKNYtqrsYLXyaiSAqQ65wEeTthPFRmkaoZDvU7xkuzLzr2Ro4kpJpfcUeTGy",
  "key34": "2mgPsDZt7pYCzRQiQUCSu4TjBbvbjhiP4v3nM75A3NvjWWXEjeBiX4DTj8n6mL8BqGw2UReFThENFApEBLGEzsqS",
  "key35": "35q7ibJJURrhL9uhkdtXDbHGqpjQZyf4GWb1v1MwgEcHq3r5KsDp9BHyEZS1qqRf77KTMvvSUEHkkNrQagKaGkbx"
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
