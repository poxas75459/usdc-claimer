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
    "42KMPKW3phmZgC11gcQewo7GAMJWAdxQvEjdBRKL5rabe7mpExthn4gUwjGU4a1yAEM8FquRK4LsaRSwdi6xKA3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ndRwD1VUJY8GDeXr91djyj7tW2uywbWsawuHnFJ9ayRJZy4Rsbr8byBBS9r6BpnL3Pf1VVf1KeZZHFYmgBeS4GP",
  "key1": "4EbN8NMaD81jNVqGVGb86SoTCbXrqdnz9YbS33svc1XQQosWh28nmVJu5VkepJXiMBC4B97EDvuXxkMYezRjX5be",
  "key2": "JFdmzDMHgRyRgcWmg6rUSaktbm6FE2jYeGBaQJ8e3kbxSMaWLcK7rVn22fCRC5WGpXrB1xtTWNTA444j62ipLMZ",
  "key3": "UE25K4vhXzmQzqpRbsg2drRxoLtcREiLYW6og4peAe6EfC2onCNrnrfykPTaR8LRqQBerDSrHrt1M1mq7q3j6Yd",
  "key4": "4NsJZK9iRmqJdRdZyBg3iMyzZm4vVUEBt44tunMBqZgWpb6vqWE8gQ5bSj7P9abnVJbA5inE3Xr1YtwsxPBqD14D",
  "key5": "4Ar34QBfDnj7CoKg7f9P1JUZw5Ecxa6k2SSPkDCShEge1vQh8XiBev7iyAjbq1rhQkUfHNmmiesePAzYY8Nv7ayH",
  "key6": "8RFzwDLwJiTh7MGNWixRYn9gTxgqtqB9Q8F3pemTxH1hUirWwP6oJtM5ZrpkcDxzpji8iopYtYzbg1yE92jDiEJ",
  "key7": "2ANoh4kkc7ABqJkXZSmgcLMwEuErMyy74zgAVPSwwX5S4MxxSwsevaoE95Y67tmkM6ARdGW5zsCxXAmtik3T9vgu",
  "key8": "67qz8QzUH2561Hn8JvYK1AtJ5iLFSfY8UQfmNmyqoc3xThVawfj4vYv6YnvCtEHwm2Ye5mX3JcHKfQ5xj8zEyDDL",
  "key9": "52BupdSC5wCDu3wEDHYxTxF1GSVLD8bR8nUAU79L3MjqWfMfNanYoyEMAcMfsVqchjVsD8niTBT3HHRfRnUctw6U",
  "key10": "RHuKV9QWFCw9aWpeF9eCaCJZHGNdRma6VsiXuQtgYCnaQKHHULatT6Q7ofWv9utwwHYokG2BtPjz9UH5RQPuGW1",
  "key11": "5qup6hJmeawGdrtkybdJTmGMTwD3CpYF6CSUShB4kfh488LvoyeCxhBvJcYdm6QTcFzhhxtWjfYQjtgvpaswgKhJ",
  "key12": "RheMuJbycP2efTH4dPMriediBPCjzuVxEKruqAQEZvbzbA9YWsWh4cF1zXwxS25gLPjt2NiR2Aem43YtHmwX1n2",
  "key13": "5FxJx6SUEXyAu7pi9U7uUziW8HmZfpTpC3hU3vsFE6bhedMHmhM34cw2swiDob8A1vfiYvWMdrZm9moGS7EChD5n",
  "key14": "3xcwaihuwkmBiq25sVGxaMMCX2CnEjdME5yvtXMqzMCBZCnDV823V9HNB1YrwtwE487pjHJGj53Q4VLwnvYbga6J",
  "key15": "4hELhSXa7ZrFazRYauKngykjzKBrxfbj4upXpUhVwVe1yvXHW7dSdDax5m8z8eYf4Xys1mYJuXceywdUBdGpe5SY",
  "key16": "2GrbfTo5tsN838mHFiHyaqDNqHjLeRYmmokmksVTeB8EfcsjNpBF1whTGJEW6u3EfVbR6rdARqjm86221ST4SjQS",
  "key17": "eKC2vUDD76oJT2koD2eJKUCsJcsDZwjwDc6UZpNT9yKsxLXcbiW84N7rLaFWrZdTrRA7YzjZpmRnAu39CLNymaq",
  "key18": "5Ji8NJTNtdYPXKX4rwxWVATqLFo69rbhUte2vN5t7Ff9B512bBejfAR9nGEARne7kpJ83VE9HJWYvMaJMtkYtFzQ",
  "key19": "2x3A7YqnxJvVq9BVZgdbBqcKPAp1En3aeba1SS66ZC7zxVuTLaiVAPDXuRG77fWiTJXLRU4fE2JScxLPCkEsCLxc",
  "key20": "5WgCqhMtFKWdGy1dJKYPspjCJAGiTBqhaLNhQKx4ai4ETDRCMipojax34DipNZMpcMX9zy9f7zhZqAQwW6htjPvT",
  "key21": "4S1y19M4Hk53gStcf8FTrL6EtJVdS89YJfMfXi8vsu6x2bBMJ5pUQptDiQnw82NHQhxC1VWZ2vHotjYsUuDa4F6q",
  "key22": "5YqcE8EzTHwV6MNDUeZoXD6fBn4ymrifn9dZ8Q7bBBrzWMcPduAVuRtwgVafbQjJxpK3qATQ3QYoP4ffkXCM6u4a",
  "key23": "5vuUKCA6524N6xTL5VosgVa372EqxQRQv1YhDPYVLYgXQWv4nJ6ShEjFsh6S6aoZWdDP9cEQgrDaBt8MJo6k3smW",
  "key24": "45W4wvxX1ApaXTVWSitECxrLrr1474SXLaqh485HB2N6Tf8JFvLPbZqfDJwVwPZtQUDjGY6edKwJt3tDdSgBN7zu",
  "key25": "4Jj6MzHTDBTwCfR73Zjwdjq3Ub29WqfV9pk5PZmMQMzJR4ZPeyPgLthM1GMRAkZeP1brXcT7EptdrbFFocQjPEN6",
  "key26": "6MogeqU1QFsUYQAUDkMXkhbtvYL8qsczMwAkySKtPzJ5s5jcPUvEzrVkJ3nApZNxvdfm3QQ4fDrTdQtjk8nRZzT",
  "key27": "3arhrhEvoNnohpnjD78MVRdrYUHUukAR3L5apmnE9xrtL4m64fGSMn5WGFgEEYgQ4e3fL9yhiQ2JGzG8JjSedtnd",
  "key28": "3xvZ9S5AxZrNtPQbtRmbgwxkuwtSjdgd3c2SKUw735dWPDJVrG1gDhAwiWg3PaUBk3tS3Wq5EFqPXd7MEjU7Pk8b",
  "key29": "pLrohYCB8JMarQRCuz8S9Kb3ppNbVBDH6cLE2q4SeVPcnLfCrAiUrJpjwcKKYvsRjjUaKhaU3wzmgHi1ofGpi9T",
  "key30": "5Q7d7F461PFUUFwoH6FeXL8pnPJHG3RVJcXngKwiQ5EkwdfFLL48fmVeWpx7wo9bZ8s5VWokdu6F7WmVULmUqvS8",
  "key31": "3XNKun65dPppNoAsH7khoHfTM3XBWgLPzfEmtXeJM5RfpUNdrZWW2M81irEPkDFxW9mizGVJEvpvNvYbYz3kXj9y",
  "key32": "5GNDpBhGEAtQ1vnYrSmACfmiESxYwMTEfcVrobgRed2mxB1UivWHHFcLzsjx7iYzpfTS7smV4J2jwGEmFw1X5xA3",
  "key33": "2C4vR33CKyEavmLivRjPonNL915psJSUHN2g6DE4DAk1wmMJFibmB7vUpTpFkJncG6eqb4b5aU7MuEg7y2FCDzxq",
  "key34": "AHpNzqYjuDQDV5ixfK9AeCuxTdhTypnoNMkJcVwmkPE6oGuYRx5LbJb2xYwC81pxGANKd27y6qsufVMWAidz9rW",
  "key35": "fkB9cT65XtPeJR7L1HfP7c67UgA34ZyQPzpH5XjXWU4NfZim7wP3RWaaSWJB5HBXBWMdNLBaEgM2tn88vdDqwn2",
  "key36": "4QDPwkEfXouXryj41b9gyYMYLsze9EEuwwmQQYg78vJA4w13NrXxQb12ys5FzYGbPoh1f6e9UciJ81vDcuUE3m3z",
  "key37": "r1rMvY5cwttbBNLYnj2qxdaVeXUkoZkVYYq9HrT13dCLLaErGmc1CaWh1bocbqTANLDLApu6zdZFkvvTg9u5Wzz",
  "key38": "PoUVhCNaXA3GBmnnUSop4fYpSvJgQg4EzjirdH7KE65ejQZaQBACK2b4nAyrCJ5fmt8NmPWjWDRxGS5CiG5Seh7",
  "key39": "55Z8vNibXwhr1jyioWRGz3AVQAVQXg11rhnn7Pba9t1Ua8GidL77x7UJcRvhmUSDkf5gSH28ARrKde2zdtWEydRE",
  "key40": "5Cn1PzQve1UQeaC2WuCzh4W5cNTVBx1AkoMfQ3FAvhxJPemTYgvGgthHYFDecepHc9VnNdz4PdeLUore8LxAqkxG",
  "key41": "n4YL7ptaM2vhfL5NNP9BS5LHGnqV2yTSaztkBaB6e1PToenzM86FpqewZmK4NtqrSMYc9nhryDETDxTspBG1Ah3",
  "key42": "3UZnoui6cjLwm13VJUcXiag6xscWthjsWdXXChyHfz8vaukC54HJC6LLnohGgvzethmCcsp7rLWDrMgT8kMA9dPo",
  "key43": "YcCoyGqQVa3p7bWHPWX7FVbUo47LGCZwBqT7xqR19mPYs7rRMDkXS36unE5aAhfrfwTrTvD7usG1gUgMKeMh9Y7",
  "key44": "WS4p1MvhPpieehRZZtz7W7KKTEx5weDvrCpZTJp7qKFvrJEgxyNJ4EbRPPfoRyoozPxLofXVaq63kany4FTDJ6r",
  "key45": "2TkDZvtBLsKxyLh5rnsFnSLrJVpF1mmu99iTbs5apayg3VvZxCgoXs5f4vXQWQ7vjwseiHAMcfKk3NfZz7usv6fn",
  "key46": "3ghe8Dkjc5fQXD4z8NFmjFGAR7uaGFBDvnangyBFbGMzHA7PBfrtQ6mXrfBXouaAhpzVxuD1QyyKzkjHdgqBbdiF",
  "key47": "4dX4P813hqunGch7NMjPkupcwK61g4HRsBQQGaf6XqA36NSrY75dboG9cuE1dQiLHCdpxyPJcupvqQKvfEquhH9F",
  "key48": "dzdAWUdV3V2PeTV4tAr25ZUBPXGbqSvPJw2zbr8jBWeai4APDojYisNfUWywhGs4ZzVsXdE94hx7APpezL2mNb9",
  "key49": "5TcW5indAHeLUHMUZiZitpLg6auDN4Ppku1aNED5oAZgUg2dfrm6KJXdHu5rEARFEq2KcCwjdNyUrSUeFrHGUaaz"
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
