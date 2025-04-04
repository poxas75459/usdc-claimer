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
    "4qEDVDxBGQKYtZpJLjUK5WdoCrFQwUMZqPmqcfQpfXXZfAtLXZ5MWypnH6Z7Pzuj7zCDJGkFSYSwUoz8DdQiazhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nCxH2hcDyZ9uQ3mW1Dh4BzBUVhb5UmtVnuEsXavT7Ef8HBcpYgENx7CWn8gDggNSDa3oZ9GQ5zUiRjLKKoTJvTA",
  "key1": "23mk9xcLV5jUCotiVaPwbaVHVPXdUrvuLQXpfKoK1voTGpGHyuaRpvVGizgnP9NQ5mGrcaxE9gT7BEpfnfsoC3jB",
  "key2": "qcRrQhKxKteaYy7YyWRVxKJKJGCHDBsBYo8QVthEm1xGTjThsL4CxyonLKMLAtvNY2SGMxNujeD7bCGBJpkXUgN",
  "key3": "2S8aaJmRZLEojiKL5nAJbWaPcerWtbmmwziiNwy7FP1NNNLLU9P5e7LT6cmYwTQCvhc2c7sETXWRt4kaWAWKA5wf",
  "key4": "318xbvWQ9PsqmRB4BjXPZF3hVJy1unVP7ijWMWzc9v9nmqPfghTogw1gQCzAFwqWFg4ZjVhka8JTU9JocncBdKcz",
  "key5": "34eHLFatfLj6H7iAoRHH7MZHXgmcX9j9jroXY3P48rr13D7THv7oChdgmdzdQANQBBiYTBEY1tm9gEaXsris3jDW",
  "key6": "38K8TFthAtQayvTCQa3EpesnwEpkB6Den3CTrskyz2fh43vXUA5ox35iFkm78BnT1nwbz67FMkEg99VDAHyv7ZPj",
  "key7": "3f144qaVTTfammi2g35nG5toguoZHks2XgotdvBYniPo1xkkZFHW5KH2BnYcj8ZVPeLFgbSP7Eo6V94WfKwwP9ev",
  "key8": "5cRWaKkCjkAqwRJRbjt5cMmycKGECVHBUfZa37MDFLk2M49UJhyMs4WDrA3ufubeVPXfJc2ZTYwPPD8Nqbe1H4n",
  "key9": "4RnyHy2qciuWGjd8vhTvRfjRck5rfawTejPR1h4DbHTd7gxXpCybnSj5dVvs9KVz6cznxfHvy3hqFJUzudxB4NWA",
  "key10": "5roNcaPEDkqEzgkrgg9eEgu8VxruSde8x1xrHgJxAvPhL4LAYNxzU1KH9EUBatsTKZE2LWFaquXMrtDNfSfFgnaS",
  "key11": "2KgofFeSii7B4qyu5S5r5VuatwCJhtEWNhDPGNZeFEZY1ohTAZridBwuoGXXdPuByYVvQUeLa7uGDiMa6rJg5WTa",
  "key12": "4uzk5Y34KCaVh5xidVBUBWBZ7rhygvcwM5qoKhnu61MiLThX6L5e7p3KPEwww9hU8txWrVwhQzxS6UGHPfTjakCJ",
  "key13": "4FB1dBFhKuVujpN92vhcQjPntyuLdwmPHQYr7cZDz5wde8v47ee6VKwXCfskCn2WSaD8z6DDM9cucsJ4dKRMV1Z",
  "key14": "4krc82cndAJybd9iaSFPNMvbMmXrz7W2enG3c9hbCv93Bam2Qp7pRhtWC6ikdAUZ5jGiWhbtH63UMahQ39X4A7b",
  "key15": "46kuiMN19cXTbhDHdv1VRtKkgjFeMxLK54hSzrwoD1cN7NjBu1THKZVHseEE6cyzmZk5d35j7bxqwSGJKQQyRXPi",
  "key16": "5TUPsjFhqXM3irr6T9umQqZKPZVCrxa75wZyBPZsDgBvuVyaCQ3Hs7z2P3KyvZ2fVKJTdrjnQxJLMNBJyqoFF3cJ",
  "key17": "5TrA6YFC6CYv72KLQmNpW95ZizYQf2Y1wio9NYYr4fXMEuPzo6LW4dZKzGKqzYovyYQH1SQdwXxfRYLsFcCdAKG6",
  "key18": "4mTFZn2Usg7EigtwjRuwKMb97WCaEH3weXnxcMyuH9VjDDTcr3ghWEPPFMmSWWMDACP9h3bmiZTaqtC6Kv4NsL9",
  "key19": "5sqwwNewqZ5MxzP1THfPmfPeCKM8mV4q3usmouDyRduZUYBSRjnZhspbvRMNohdLbosWE85LY6jSAKTrmGgxFFTK",
  "key20": "54EM7ScwXTpTNZJw736mDpzqG1dyG8vWcrqetchEJDU2H742FE7doXz8p9E7NgStjj4TsbjQPKTZ5RBmeMRyTAJH",
  "key21": "4qzHVenfNg3Q2Fd1kJiFqDhturinnYY7vQ9r68exEnUvrRYkQZWJrFz8kTanTheA4uXMM4E3Epni3pa1hfnxwTo9",
  "key22": "5R61bTReB7eRFihevFDWNd3DWQKYtFEdiUGUUhHgRHXAvhG8c6igBdBQwSHL5UtytCdyUTKM2KhGMbWL6ctnRkRH",
  "key23": "5UpVEWaqhD5KCAoThtp3hvq2Ey4ZCEFn2fybPci8CiuKFwb3GsBqfNDVz3uYuVrdgj6MmTJvuj2GGmotQ71hVXKF",
  "key24": "2tFzf94pzu9MQwanudT2kNPypFo5wqgiPrtPhLqAKK9N7aTgUvw8V1BegaR8zr1RzpshAhivwrTTDQVHWgkjhTaS",
  "key25": "4Liv39EFdngWWggy9hEZ5EG9jeupmKUB4mkegzxtokHs181qsx5hca39NE1qydbRxh79HM6KFw2ehNkA3BsGXp7X",
  "key26": "BuaDd1oWtNnZPbtDvcD2qpgVYh6gssKGDmZH5z6GUjgZ74UXXGQeJ5MDZDSGHDrwz9CvesorAbLnZ5YHa8ztEdu",
  "key27": "4v3fXe7hrZ64EFXSQosCkYYCFH4auJkQo1emBjATPL7zRx44QrbvxGsuLF8JHnraL6dvhagsnmkTr3wV9tRppCTV",
  "key28": "3Hz8MA757sk1grS5CTETLGuohTEyLLGNzoUjwaTXPyF4oumq4w2f1Ra9DDsEXicSPNaake6EuDmRx46zzqL92Rz",
  "key29": "37vmcRwBGYj1y8NeT1SQKmqK3dgxh4r7rgypUGGJThukvjBHDqUtohcCVbFEuXeMZu1GJkyRRCb1NBWbKyN6iQ9c",
  "key30": "CxZZqoxfLaQNHPEn8DZZCgK1zKmcJggDLMB9JurtWqu4FNLP5sJdKUPtyrsvKje7Hi7vosqM4VzNBLqB5Qx4qdt",
  "key31": "5Y1y8dqorEZFnFFSUYqK6VfN3hapMmPGfzCyg6tTXr1cPB3b8NYX7zmoEZ6KYgebEMS2ijFRzLSANtygkk9oDeWH",
  "key32": "4TkFZLU9v45Bui7iLNYqNRAvTh4MDeuZhPJuWr3pzFjc2MsNiKB3VtRg37gg8tSwmkYqQxuDQaPgSM1WQMeSV8fo",
  "key33": "4epF1vM4FdVbA9u9D6RgD7kjUTSYJuU87W1Gh9kFRTQJEgENtK4M3DUSWrF6XpsCmbsXKwRKNG9hVRHKRCks7W8F",
  "key34": "2MAXKLy2j7fTtBjEaML87QuV53udASarzWspiHmKUcoiNHhCJTLGYtGCzUzWpiXszJqtWoAxyS84T2ExL2QK4Kvj",
  "key35": "2b5UNidV27XfzVB3Jb2yZJHTM8w6uMx2i79edVSe9kWZkbw66oMRSRtz1kZLj8pSUpzTDwrvGLHc7ngz6kYH1H3j",
  "key36": "3TDK6k7qFKEp5p3jVmUnoYcBjamXahGaKgays953S1kgK8XPme1rk32zTdEwinh1aZjrdmcNAR8o8UXJUx56JP1L",
  "key37": "5MwZU2aPaEe5mqTbXMyXZUPX8nhhH8eCzDL7jskQQkzzXJ89REj62WurVdXp2Rpv345dfXrx5cfPu3BGidWnU4cc",
  "key38": "4BXz1qy4n8TWDmY13aS35txEisPJcs9EJcSW3ZDar2kW87DqGJRCca6gKLE1LRhxXWWZEW6W6TZSJnzYJeFtxiAZ",
  "key39": "2awu7rWYyssucM48dmUKU3m4PDSn7x544eKDzEPcLhzkHfK9KiVrRJ4SMUzZvDLPWV9Mhd4MkN8UhzVCVajDGU2m",
  "key40": "5uLBzr2ekZBS3yAWSxjeg4xMkcdC2CMXeg9JNx828DswtWVrCbPzSUg8as7xCgdyspPxwHn32FqD8sYadHYqRFJX"
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
