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
    "4JdnBLsp8mQEGDJaDQXNdXpyroREB4RD3s1jPbzndQfYLdxdkKcmSQygn5cq8USNLSRcHCbTTRFVYrDFsemfYaBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jP5nBc2C2kvDMmp2t3ZDfh2pyccwLqjixXokpZrqrz41oBUtvcQ6LaerkKgLdLv7SozFSkGdQZRA9o9xsuSbqFZ",
  "key1": "5XTHhrcYnWwQ8pgvzyTuYugvuP5CDCfJR5naEzjfsBdc65Ri5yV1VUNmhnA9wbgoBBKC2iwN8vRHJuEu8CDzaUyE",
  "key2": "k3Swk1yjfBJE37Qx5h5cvjnCiZmcaysd5GaAA3rvUxHuwTwgvhq4Pe2bmyHxHwvjtxx1FKbV5QiftrUUdAuL3Xn",
  "key3": "JT4QaqASiJvRqC23Zk9entaWmXqaRLqXJqQH28RZpL6FqnTnvbnwaws16u8TfUMfsnbKxNVz9h3Qp473KmZWrxU",
  "key4": "27zDiacj1GtKPRDUbEAHSZ4FChPN9SKRtwHzFqzquSQpzpexkRLnjJvS23YFEmnHMiLMuFxRu33fRAooxo6Xd1MC",
  "key5": "3cYYa3nzM4ioYr4VnLuMEdNmjNW2DaGWPXtSL66anC9MF8RA2Hw5vnUU1JLZ1EJMJ1ZeM6RcRNUJhYLcuCG2uZ1K",
  "key6": "4DxWbRaRs2wrn1u72mUDfGaqjwPdh7i9yh6AYQpgfUzCdtWM2u8NkMU33hoPPNobiBcx6dYnkcRsL7mMZjjdTVEn",
  "key7": "44MixCb2ihRLMhLpZRXyPzicxQByZE1QFq1ADXxbdHfuPHeovtpYFDCvBkH1TMfRRjNs7qt4ipriab8HqehBSzec",
  "key8": "2qxjCqmLiJ37PNggjcfc8jeU57SuNpuPmQM5vAj6TtBC4VTb7j1yf1HEpRUbR4FTtP6Hg6sadn9m7JRRGFtU31Ka",
  "key9": "YBas2QeVsJPY6cc4h4KrdeSZ5829dpeDugohmcBjJT8MKiRi5YWL9VsJG8a8E4ZUTgwxXXsgzc1o9mZCgPGX7kB",
  "key10": "32PwFtNy4Xd4JeASzYSptqoB8AjuhTpAqsMnPnogyVZRDjGSAYygHLPTRRqZ5KnRrd439snC9q21kQRbDQdNcEs9",
  "key11": "5UoTCPhU83YzZcFzaH4NTNVA556HTJbAhEfZ5h7CqmBb3jREvbKyb1H8fno18thuuXu32ctmUvioveJRRzJj7bBR",
  "key12": "2XjQVf6xJCtXc42j7LKPLaFRxh6qWd9ezBb68T1Enw8NjjLVpYUQf2K1ZbzcrbPqJoVbXnZCEB6fASrLzRSszr3B",
  "key13": "2JZWPbVvcjujMKKXj3N2Qy6JPmV6KfariaKcttUp7HGLxdh4FuPwTAoiKm1Wc5sQG2PhnZoFK2tMQkUvH8chFYpv",
  "key14": "4126LRWcYUe8m97kqKg6Wp12eXFzEYVnxemzxqxuuyPcEg1uEzubnrMrqwPVyaBXdybVybdFtFNPL5jqYkk32mX8",
  "key15": "5Tte9u6GUSwbmriMcuucTjgqKHWHPHuR8PbCQxn4FSfRxbsUQB875RJ8zM1NT67MRZq3MEaf3Ktt7jXUztU1UxFK",
  "key16": "exLCKxGPbr59bND8mpCwVzW1EneqzbH36EPFywpyiTeCWCmNujp6Kukf6pUvvENyCwbDu7JtBL5XzskBQaeMvfA",
  "key17": "31bL51nRmHUbPaSfN7EQMmfas2XSkgbeEQCGua6eJfJSyMQBbcx28P2mmKz6CVLd8DnejPiD6ZLor9n4TNiNzMxK",
  "key18": "5xdMjnf1ukSJSEwGVjgcGpb1GDtSyCNyGh9t1uzg8A6WvkpJtuvNxPhM4Ks1Ks9uYnFBysDNnw71K4YATgz59TUB",
  "key19": "5NDPCZRgtu7Pq1UYbdmaDgYkmVvqPBTgH1i2Ws4u5mYdypEiCSc2PsMVzkNqtziEDAuB6CMhgnm6E9ssDvnqdbcu",
  "key20": "2Jg1D54QxRRmmtsmJgLMEFs9rYeWpAvhCs4udyfbiJZtK35YxMRB3K4uVVB1tnGt4T2tCLQ27NyWaFrJUqugKyP7",
  "key21": "54d1q2FhC55Z9Dmmk2goQoPffpHxa7EFcbkdb6SfKLN2CTUxMeBj31PCPYXGoesQsFtp9LoDmHZHnHXin49MDXh",
  "key22": "3ZHW1WWTTw9VJFYE5sGG1vcEQCEzRAS5mujEH5BU1Z4joQ3e7NcUfE9s3ZJo5RXsKbrmcfqwwVfcaBJDmohvUFe9",
  "key23": "3YKKt1dpsxzWyGwWeiamvRo4A6zeJr3Gn7WA3DeASWwPpv85RmR99YD1sxdsN89r2YSnTsjwSsJT2Kbi6BmNtdog",
  "key24": "5sSKFmroF9dvPT9cfBPd3BUitCoDrbcsXLgRq2WQpPnazjL21qDRk7CHN4d8sFpz23qSFb5umhKigW6uLXjjAh5Q",
  "key25": "3RvYhes6PEQgZJf1KgASLth2sYFy3QedCngMv9cMkKwF1UNPSSTuApxp3r9E66AEeJuhost8Bv3QVLzc17sNXzpy",
  "key26": "4oW3YEf4rg6WsURb6MjQntUift5RbUTLbUQExhgiN67JWMVMkvkKP2fMbakxRNA9wWYQQb1x4BTHrQZrBzFQv5Q9",
  "key27": "N62L2ijeqwDm2m3iNUQMvhEefH5xuurM1jxfHXQUgG7Kj8W8uwFtTn33YhF7ZfqjXCpzxJhKJdHwM4myVSsFdrm",
  "key28": "2zwAHLogpAC6RUCpfetd4Jehqw2R448ymwiMXJEfnowALzE7qZit2eXPtHWx86uFLvJtZJzjEBShSxu66zsL7Cj3",
  "key29": "4iFMEVA61ffoJYjoyUCgp9o36Zc5pc8YLNzBdckirsJbiZjUcMTvUAkyWmJLWZ9wyQUTpXsJZ8rzVAjixekJR8d5",
  "key30": "3Yro3GXu4A6jKDaho2Sr4msiRwUxi1CKYhuBEoUh1FHH4JtHgtzy6m3p7M2iSAMTu9h1DvSkBK8gfk43SqYCskmM",
  "key31": "s4ifRAEzwwGn3WoCqodgBjndWiahmgh5VLTjyN7wU1xT2YMPUcJFNA2EeY7KCBsoaUiFXHt3ShZw4b7w5TXvstB",
  "key32": "QUtcM95nu2r3TAqWAvLbqEhAMgjniSt6uk229QJaNLRBUJbAPKKbNBtj8Ck1KE8rgLnZoqXAj8km6X7nbxYCN2K",
  "key33": "3QsoZApKcKBAeB9sCfpoQZedrzdn2MZMzDbjwotrTQ4a8uqsp12AaRLg2QnY5v1imD3NvFrgJ94XD1gAGeBJ2T8b",
  "key34": "3KK9e7ePyiqWDsfEFwfEVjLXd2TgGv67vgEEuduiPayTLbEUgq42Y4ekYgStSvwqBFTSs4LFCu7eDhzAkK4PEK97",
  "key35": "5ZAcJ28EAS9LRSU9MhMDrQFr7VN2y1NQxGp6jbjtFBYiXCQkhBRjvS9L3ZnToETjdqB35vA2FSmKUSy1mRwHTFN7",
  "key36": "4xjbspAezgmiYhgXnN2dWUVX9HG9VzD3GgRDeF52MtLEs1qmcVR8jTUVDKG5mWDKZdVMuQJCnu9rtYFZd6f4XaFg",
  "key37": "4Hmp1RTYCFXrpamYsbjZmszMkTsd1hxRNNiELf4ywFnhnpSNbgPodLayu8G7S88WaQd1LZqUb5qfBLFQ6CbXiuzS"
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
