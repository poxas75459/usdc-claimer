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
    "43uAyAeTm2zFqjCFJhGpkpZivfLBTPe5jM7HDFM517AF5GJQebE2Stf9T8hXHRxpz464U2LfB1ZKLqdY615eLfEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39KYeNgom8e5EtKgYt79YVym3nVALhQ63vhhKgqRH5toH45gr33ayH3XAFqbbmtJTZCJUNCcqU1sXbJgzqai5Kby",
  "key1": "VAXv6TqfGoFhEPt2C9b7gxg5H95eZoFZ4SrWfqutb9J6LaVBrmNJeWC6N87Je1i7qzVUNefzJmiDi9yhxRmMN2D",
  "key2": "4CWkFTShXfxKpzFX7YrRzVHeaAphMWvCUmAxjjfDkdRG4HNDiGUSryPMicEeNELedu7xEjD19UJQXHB6xsqJFow6",
  "key3": "4GodEfA59Agu43inELpnYQNUQGGTMCTT2tJjVt4JzCq2zHpJdFzabzEcaMPZjFQiKYvPPHMmKZjAX5FYs3ZgXe6T",
  "key4": "ZGiBQKTLzK9R5d1dAQDCQfwLZcBUwJZukS1ZZ29LJtZd4g7ePp5chFuEm6ZRXVgoftkNHy5zaCxhb7ECLo9suKi",
  "key5": "rfKfpMTaFishuu8MH2J1Tq2vXgwc7ZH9b1p7YR1X5cVG5dPWSsS7Xp1JYc5HmLHhGyzsV77kEF2s59AB4UBn8tF",
  "key6": "28z5j43txgBfyRHKVE6pTzPyEyty42jviti9EPFJZJaRhw5Ymzn8SBxkHuSc1jn7nM9ijuJLCDHH9V185nmkyZzf",
  "key7": "4c5UkMYWVU6S4Bxi16se9iLVjrKsVjzze58f4vKjw3gfGGhWkxgu9ou8djkgdKRvmqDHEzJm7WWn723iW8FvqEMN",
  "key8": "3uJXUXBgnLnQAQGsbsccWStQe6XQnYvBcTksrdW3bBUmprZ34bwjNW2aCp5VsCn8oNjMCvrcU1sCbiz6yTDRaCvm",
  "key9": "3nk7Jj3TCPJqZmQ1fuFo5mqCfyt2cpjboc6bNZt6pwcpCpz6FbD3HSQedk4PavaMuqKAVkDqZMrSxcwx3QMEQpxb",
  "key10": "4QKFSZaEn8dk3yCPMLKUoMyNfp3PXRDmZPVMpwwhimRmEiqfJcwNC8AQ7eM2mPFbdG6n6GDPyMWXbYzJMomLW4qw",
  "key11": "5mfZDfUFm3S4hWpLASWDz3MWKstUjpMSqFJ89Hb748TT21SiqxsViTbRZwrMcePhDh5eQv6yBGcuXdG86sEd1c1i",
  "key12": "3KdbrVS2bmQ2YzyrQnn4cNyt6zpFcC67yEevDr5KxhHuxRe3RWWxCRFm25mFjDwzxW16NeQfGt3zdobt51VVV8n9",
  "key13": "2xpmWf9immChxsZjqNbWfcZ1LzQ7yTCcuLbHA5vw8m5Df21xL8go2QLzMn5w6fatRvzd9Cc7gogxGqaXyj16rV4i",
  "key14": "abx8BgfJkcd8bpW8KzLPpSQQt32NJAwaQzPG4Sh7bzV2FeqB7DKJgqvCPFV3Uw43vMWA7JBSKHdnMQ1VtKm41E4",
  "key15": "21PTHBZD6GNVCw6F4TPovNCiw8TmYjottqAsPoZwLfyYXTn5c6PC8JUHkwvYvyTr5WpDxGrsbQak5dKRdEboW987",
  "key16": "KjLHkgheCAkuHkG4ikUHrJjp21vAjpSHF1jDGa68U5PXvASBhABJwqcSDtru1qRV21LohrYaTock8PLdwGNZKtt",
  "key17": "2acBMPgiCJqzJtcsrGp6VMC4SjKYeHbtUXS6MPrvLweH4TyngnT9facEJH1o15bGkFjqV4T2VFc5tGCeswZprJNv",
  "key18": "39kgbSQTiZekyAhoDYvaWMRqJtUYm4nggZNwE7EzmPrZigPtwRuUG55u277W39Vi9brMw4SVbGBMqAVCvyhv9Nn6",
  "key19": "51eBx1NHuvSvmfeaP4nNf1F7srXeQjAMau3bELgvb2AYo9UTfiFSjjNzMqcWidpj7NWQVfArgZmaGK4prLpFGsZt",
  "key20": "rEyNMbQVKuWw8ooxQD8uHnmHTZLX49yaGnMGLxWHQPMj9W8rdgpfqtpguKPCXLpszgF6RBNWCfqoG1ZC5kYfXLs",
  "key21": "2xgXGy5vbA1X4p2zrhDt9nCYBkwJE6RhZ6dfpNK4QpT3PsKqG7zmXZssmLxCmkdNQiBj7Y34siR9nzj1h7YD6ZXf",
  "key22": "4433UYtGZpKFjbxKPS9o1kEKiU5mz2MiJdcm6YZgcTdUXkvHhZNtaVWSjgPVF3YZU9q5TziNrcHgWkikZHHJrx6b",
  "key23": "3KyiCWHHrwABCeSXJvfSFDKxF1pe2Zysjt7oUDwQYiv9B7YVRbsEDjgana3i5mS5JQ1U5j28LsiBHzbDkFCs8YYN",
  "key24": "5jEwRKT2cNx2t7ZisqdRyKN5AfAiPH2Mu6gX6GA7D1QgHq9utXwVAsrCg1REiGLxFoBDPPPCeMkaSwCsoGeAiRKH",
  "key25": "U71p1v9j8ZZqCFiYgc7HMFwDzZpbjxCyK6MDgQwLSNH9wh95bdP9k4uS8qUaQBmcx6pT2fQGKMVpyyAazR6PLXX",
  "key26": "5DLdm8bhKKS5ASucUKqbSc3sXyP2PXGWMDeNkH7HWGpNqM9fDEP3finnyy9gcPk7LJ32Av73687KWdLkCQ8XAkyF",
  "key27": "2AcudnNSPTtxGaM66gRqAnva9YKi5ShAt69EqKUt52kYVN8oPoEDtiWidApTFfkBnjSQUoCSh8uboHShPHabqH6D",
  "key28": "2UAV6QP1afgKZwTbxA8zysC9PzKMhJwwymHKKeRBk9SachjKnGUETtyXukPDaiVQ78BhT74LYoNHBkbaL4xj7Uqb",
  "key29": "3GtHUMzgr4BvVpyDcNP5oSbrk3t8qBHx6cDyFz9z3zp6RsxToptxStYRXR53EnvQyvgeahVR3s9c5tey3wAH27fW",
  "key30": "65biTrWoAASeRyEQAWoVrZFJobMZFdm6qUAAwN24WsTS34C1HMV8kzvVTASGK1q6hVh3LKq6n6zvUNr9PooDRACH",
  "key31": "8To4AzfJ6zAAD6swyZ6TZk83yztEg1SsB5PUoLYnz8sehkoEvShu8BMjiFQkPfuiSLQEnFdxcRje1UNNgc2UBmi",
  "key32": "5pxCy6AzeBUTdckHTkxdPWTqNzHc8A8Rq8wWpucpTHbt599hkwbKmhDQHwhRyYMgrVMXUhToVMG8UngzDm5HE8Ab",
  "key33": "32uAPHwx6truyK5TcJVDo7FLuh1feKFZ8zN44FHq9C2x1YND1LYfNy9h6hHRTHLSouckoHVUavhktmEjavvWU2NC",
  "key34": "2AQLcANkN7K3AYZoGa1ys4hUW1aFUd1yYb22iFMXTcozvq95TKYcrGiPJ65pYCfj7TDAmKRoof7H9rFGbvqw39oM",
  "key35": "3wByFoT9oFuWKRVDV14NcQQzxfSa1TGZWSMniUJFRbmuydLVLJ3GvRpuVrNzGxnaMJAD2AvFpyLsLjFgNv9SaDtT"
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
