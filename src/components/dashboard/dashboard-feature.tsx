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
    "313roEwEhB7WGtgw2Zz4Za3oeb3W9FNQsJG7N7NDTRJQEuNUZefS4radH5Dp57zZww9SYntszX6fdfC1BF1yiExg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2itXnFPz1mcfjDonsoeRKKG7uRaP2fUq9pbPyoNg9RBMUJ3mADPgprMTEdNf4z8R97mum8Qp7Ze3g7fhttMFyrJo",
  "key1": "MBbDFjKevpVfBVKLKZJW1SbCB5DdLnmNyAtoYtVnARzrkUhQuqeDc5Eq44qo6ej5ySHE89dBGxJ6UTvZM6jDrYn",
  "key2": "4Nz57xAfguW5x8dKJzbKRHTnbbqPJgLZ2AT8N6Uf8H9MsJtbmtqVuS6mwtkcJcwfQmvbKwCaMrHChAVmymexLNFC",
  "key3": "4k5C7Gj5hFYfDNotzyTXwxc7VkRT8DX6fewDJWTE64zjWUMT6WUC8gjaysibPvn9engH4fGQzwh993NoTC9kRNHr",
  "key4": "3V4bv7gFLUqZw6aKVxAdTaDB1iEx4h1ijzTTdPKhsAM9QUkwLhBzr5aeSn3WSWvvjZMMvXeomsd9acq8wk3ujiE5",
  "key5": "4i1pTooGY5G9NsgwyMCsV6DNf5ogwPyrTuEnjgRxjj6SyqPwSE8NMpqv8nGdZWQhwuUYet3hGLGUbWhcegyN97b2",
  "key6": "R5nmRERcHDv25BxHX89bJwivP55SPtJ7VLU7WSg4PGHjQJByWLGhBsLsfJhRBVzusArfDFyTpyy4CXmVxoYbGSj",
  "key7": "pKMeHfs4NKbdr5WV2Xa7MKmoB5xZeNuzD8VP5wt593j582DJ1rt4YA7KuRT4NnkWEFvRoG675FhMUZWHPqe6JmF",
  "key8": "ipDqu2a6onrFtwdNBaeVRvwA2XQSsggghNh1jQVwpfj3HE6jv3XQh7Mx8cxHZk1y5HM9ufjpVJPF3JnEi6dhNzu",
  "key9": "4X11ufw7XVeFjqp2zrHLSfHBPZLFw813iHcTfgZdPAp6KMh98pTxv7KiyL7zg8ipjAkzMkz5A8SDogqiNCKGV8iB",
  "key10": "43SmFKA681GsfWqs2kHGb5eqdFV4PNtFY9wQFu1VpF4zocb66U4fStFdRx1BSTwyL173L5EPYgtXSrufJhQB8oPZ",
  "key11": "vhYT3GDyPHiR3zdJ6PWGdcGg8HhEjQ5nT516znnCaJ5jmNm1DUi8ZGomrgzyDkVDmuY3YRwR89ebWutoMwcZZBu",
  "key12": "55huB6jfov3KuSf74U6RVVk4zEVoMxh937qZMrESpuFhFDTLe1fuGu68XmgCFgdLhvea7t2uszqwFNxB9rp6qNTr",
  "key13": "3jLoV17EqmPr78RUTpZroJg4pJYXJzVegtiMzUhgmrAQJD1yxoLcWabpUtZ231nuqT7x5HhaMyPrbNkwkqPHyuKB",
  "key14": "e1DArr55rYjitRUs3AsA9m69hYonFLGsaQpdWUCmDA7nUa9CoKeL82A2azDRGqCkrt1wWS51Qn8epxqNzxk8vDm",
  "key15": "595NmwobGW1xFuVPYugodniG3gjBRdWtZ9qmyzxiNfMZ5TxwVn2HBtMiJfJhsYGmFu4TxDX78x6czfUof7aA5ZeH",
  "key16": "5gfiMQDR1yskTE3ScdFKdrd8Q387GUugj4rDevNipLGogqVHaWcJJbfz3dnBqY9AwKM5YmXneJayosRUaWrsqERF",
  "key17": "5W6BivNeVs5sq3vGDyAgc5LYUQn4rHXFGQx6wGAdfUgGFp3RHhXBrtLZcCSv1CDrCT1kwRhV23365vHdXDCiURky",
  "key18": "55zvB19cYtbHvH3BCiYt76tMEiEfgQ7MvyjDby1TgENQe1zWY3b7NYQxvPNSgha8gWuta9kzG3cAf6eUsCyVRVU2",
  "key19": "4Hqw6nEnRJGJEyJPUwJjk9Lf3L1ShyVZ1NNo3A6rS78vK3dgBkxgqJmB9gxmoJJexDXC1mSor92aEhVAH1cNDPCW",
  "key20": "K85foDVuPQZ5dzKhx3hKJVyn2fQzzNqwpDcZNbi6yNSavwAUCncZK2SjDCs4SdF2d5KpR5M6mgPeHkVdqVXa1b1",
  "key21": "63TkjhzSTRvF5wr3K5w6aTvUDSiQQvCPnezgzzUNuqB1fVD9pvhToZ4JvJTCzmih7F8USJdqmXNXxNAVqL7EEHEc",
  "key22": "zWExGdAGQE8JTuJMCvnNrLknrTgprA8NcspEw8GRcswhVAwPrjYN66bFNEquQvSWTHeJnLwhJu7zPsabwmqUhCf",
  "key23": "5mWLjdGXiSqkmQctLdaQVbcjQkJWCKL6G6UXHqkgQHeUPmnktuHadjH7CNTeCyDPNQtY6E5S5mFmPfWbRTEk4KY6",
  "key24": "5ncFJZCit8iLbP6TWZVUpguH8pNxiHN1dA8HbKGZt5SZVemqkdZvyDzgKKNucm4eAUPqzKcaXp5dNQCiMjChsVYX",
  "key25": "UuBcxZa4gotd1a4oECqHLXNboLJReYy48bWVGvLgnTjNjhpdc3DXo6dQhikKCZXAcyU5HEbsFLP1dJddHdQpH1B",
  "key26": "4A3N85Doc7XXQBbiJzq3RJnSADUdasXSZQw9EUaitY2PpunQ66nPwk5evTQmdbkyfcATRUUPziJbutKBFpT3fkKu",
  "key27": "3fRUCdMzgbf83VNM5YHi51EcPVAKMtfX4uAtyqv6jxf7gNP9sNoDayy75CQAWEvHxxx8hyhU2ZKGjbyHHzwnkWzz",
  "key28": "3hMxPovVvqFjQKdVCyXYddqHuS9REwQHdD1GBbqeCxwKPoixJv7D9Y5PGgbkx9LrmqBQ4hUpSYeYWMb8aTXennsX",
  "key29": "Gg1oSQnXg17r5JXKbczcu5dWP4oUZnepUbANGCosJhW1CYAVMsEoxGSitRPwTN2qbhpKcYNNcjuQVhnK9NhMEEk",
  "key30": "N7oEZ5A6aZTfjKB4NQgo82QCqfYatF65q4U5ihg8AuKGDKpgq5WfaaQYNm8yfWSrzTzoFDhny3qLAef7TbFhp28",
  "key31": "3QMZMUhs6gQ9yNLgK4XrdMqWQQeXzN5RzpwB9aSnP3RMUnamXkkZm7vs32qriHa999XwgbjqbGdPZjAPw6qnmo3J",
  "key32": "2GS1qFZDXf5evnaB3ZiszgEyturTsfoVTr9ZYJhAdS5LUWzJomYDRkLXEKkDWkv19SBLbqY82otCs8srXi6hgUFb",
  "key33": "5pBR7LgesY4KrNoCuSmhEJfPvAD7soKuimXtucvyyZQacUTwUxfP7gnEqLzBcLoJA9nEcBGnxZDcSXuVZAyMhyEZ",
  "key34": "2tFxNGXoEMLp9aR6JzwEK3MGiypbH5qxXWkAN65UYb3GquCjNcesgqnHBQ8VePHcMTx5FpVMshtkHxG9krmpqXBX",
  "key35": "5idW1jYmhppwvspsm5eXhoWKPUGp5erv6fvKskxWRXnAzyRmKACgMaZmwtAjP3edpDfzGAG1mdDWtyLqoTRyjFAD",
  "key36": "5YoXRawpquNM3VyUSwa6ZQGJENWoYXw9R2X2XXppSV3smemZo5fxQdrDK7jp5kCHFV1JX85F4ddnJM62rajJ7UAz",
  "key37": "5zz1jecwj4gcdc5jAD7TkGANyKfPWzR7MJwvfEv6zewXsWedh3sJT9XdMLwdqMz57S2dhHYBgPkPomPg3SEyikUd",
  "key38": "3DY382ihXPedXwLHNfDxFYsjZQPDSQxNxoPfcJ5sB8af5gM95Fhh733jRN6nyM2rHFbvJdz3SzxTPQkcJbUANp1w",
  "key39": "2wj6mHLCrQkbhKvQ2qoqdtjvZD75mXgDwZvNAq2XBvd6uKPbak9Y2WCUMrh44gLL45gG7HHLNaMCfTJiPCccdNDZ",
  "key40": "3FGrNwnfCD3k7z1en2LvU54jSFTsZLLew9iubZC8kvRPUTK5ZexEoY4au19yrMXPwjVCmsdvVwdYLRyNVuky3oLH",
  "key41": "4fGXeuMQNcBuGcXjQz9SwALH8zQwmTiknZRSD1vs3s5uxbnhGQzy5HjrZgG4E8CtWgvpZunmS8Fr7gkie8zJAdD2",
  "key42": "4CSYA8Sd1eQagKYk2Ewyx51xLHeBwAeBBRqY6kwcjHPgvT73Cu9Q94pCKpn3ULYriszR3jiDoAtDEDtGPihJaxst",
  "key43": "2KnhfD8nGh8tra2CRqTvJdCPCmkYXrhLQwg7WRf1yKeehRvz5yu6CPNhJWowBPgG1AiBKqPvDBTxq1CMF9YKey2y",
  "key44": "3CkvCGoA28TjXb7TFzoJeM4rvPW9wsM9TVgMy2QZqaC79TkR7XnwPB5gL21rn442FF6vBjSzPPnB8AYuowQrUGKj",
  "key45": "3MSR29S8YQtpbJ7NhYfjKgvWuawJ9yMYS8bnkhV6P8wsajjtiXTsdyTrnP8NM1pZ5dyig1xy6SnzaarmjVeWjkmm"
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
