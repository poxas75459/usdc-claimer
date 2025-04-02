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
    "4QuknGZXu3dgyNABzwf7s5Bi6PxiycFifVzaLC4vEWVM7btJmNE6FV8gAE1ZMsdr9in82xQt8j2BrG4TV3nZqtz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9qRV1WeroWo1ycxfXDykGbtqfRYgLqFji4vrngro1BiDqY1Cr5gQKv7wVHtQriBd4u4xU3W9M8gg6j6otaWPT3",
  "key1": "5Wk3zFSNX6Xne3vCvNA6sr8t7cVgqm1jHhE8PFR92vTkBWrteifcKofZUbSRuwQgWDTgN8GeNyZJDa9chaMHsXJA",
  "key2": "2Cu7AMVeitFWYq1wn8TmQY8vD84PeKVjBQjYRK4aU7MSUhRTzqprhaLHxJJjwdCFQ6huYC5WzfJr4BBHBxZ9UJKX",
  "key3": "5bFQ33ADncHunkxgSfvupFLGJtwXzLsnqnjYr9fB7s8X3bs7H6KKUD5Pp9mKuQBMQji4aLktwVALvDfKj8M6dj78",
  "key4": "5AyfK9rtthv4s8d4yBXpJnvjxfJ3S5RWvFTSZ6A17XCy1munBys87YzFZvXEuuZCq2cdqwQD2vH6CxcPVU1bTjBC",
  "key5": "AiLikwFFuKwRcQyBCrsY7uy4h2xTBdmv4EZAgJq3nP3o26DJyDtjcGw7GAVFF8gWQvvyeVdXHumkR9othYVbUBr",
  "key6": "4fjHcAcsgYFMrxPnygBrKnDamQKWkaArbGpuZEJ9L3jXGyKn6wDuWMwzdNXsarF3tYcLmLEbq3mEA9LDvUHifzCj",
  "key7": "36nVH5jtrTkbzNF9p6hs54y56SoVgSdLdnmWZtVrt139S4JuAoUBtMexXvRoJTJ4XEGEtvUZgZsfYzmguytrYcP9",
  "key8": "56FdWsSbhGdoVXe69LgDh7ExMxnp695EYqWRMizzp42jG7ywrbJ6QtMjgouvpmYPGKPdmtWSTQmiDwtn9RWRbvBT",
  "key9": "35mYqaaTb5MnEqDDWYqJ81mQKbUAXnnueN4eB4G5dkgdmXS3ND7Mq7Xuthkks27jo6W3Pn6KC6R2o6YXFjzffWVb",
  "key10": "vK9dZAtFRHTV81JNWUivTR43XhcXHjRwRw924Y5P51vKEqFyWgGocaNMRneNX9QGp4bS1ZThJSpnHVwFvMAzMFj",
  "key11": "DxAyALWHnniyAS8z7azh5nW9GLpbcRq3FsTdJ3ZujDf8o5knPY1k5KQU9tfheNt3dRoUPcbPHpaYMX7pJAGB9uP",
  "key12": "475pngJs5WgUS4DfrM9cn7xQnKxZ5Yj9QLZ3qPKJpeEn3pkaYYqjSujHFKm6hHtcYo2wuv67rmnDdtgqztHdJdVe",
  "key13": "361fi8K7FBydheikLNKchjbX7xMAifVhHxq9EJbyTGscJBmEYEDEjzHZPzotJq8Wwa9kLvyAv18tiyEk4c1U2WHR",
  "key14": "4KwNNLy2XeW1gtW3SVZ2v1RaX76to9n75LvC1wDuZUgWRk2JCCQnSfg9xv7xGN8ZeFziMRE4Rhi7phhXx7tDP2BM",
  "key15": "5Wn2R293HSheTTuwgBE2JkGQTKBMmN8kMzDtKP9ojT7CZeug958Vr3JRBKrr1PCMGKiv3Fpxa3k8EnSJtgpr2dtC",
  "key16": "53Y2eNXCnN777EXnSbeycukTHn8s1esiyBWW9f3mA2Tkae3QhNEs29MSqpa7CW1YzNewX2j78kWAMXTi84qdY9Dj",
  "key17": "4SJnBSeThku3WuP61vMeVJ1L7rgo1Q4X69E53g8H57XGU5hZ7VKsSC5rdNVemPaMZVsyt3Mu8Pai5TJo2BHPNMLH",
  "key18": "i4wEhqbXiyeuN4PFp4sJ57o6WCLQaQfpNBuU1To5HE8vYLihTuAkfguZFXPzUjcakCqxAnDArNMNc8QQQRh3pzf",
  "key19": "5ryADNhwRXYtCeLW94bMo6jDKq4KK7J5Y3MaGy9prKHXjYBtDHB91CwCQmqiuK6EmFF9jM1jSujtdZG4xoKh6ws8",
  "key20": "2pExpzeCUgLiJeiSJB7BwxS1BzjhcYxV1LcNLHHHk5nuih1W6fEkcjZSpYK9JVADrELmixf1mwzjRAEPQVQWd8gj",
  "key21": "5iPV4XcXZoNz8D6mEzjcY6e8ugr3kQsaLYfSvnLH526HFKVsjRCFR1kW1hKjBeUJdN6TeKy9p6S7CuXbnrFKBjxv",
  "key22": "2v26y9fc7GAavcN14gFMRbWSLEfifX1RkFNQ6oNSzqPgGQZcHxFdsZ8xaoZx66aRus1iKWXn7GcP1rWycfFUDXTn",
  "key23": "zFFsg5Kb9KwPc4UN2tiFRdP3ctYgZNztH19Aopy72NLtfoZmE24wgKU7oVZp8rwcJiKRQjhsJhPCVNQpe1TjQux",
  "key24": "4FNLdRArrhZukTZLE42DqDsa8kz83stUCgANRMfW1KEHmJvmtp1ggpsHGfpAE6b4x1GuCXr4pP9WSu8d6cGSx4eD",
  "key25": "5r8q6QPiJUDJEZXPwuMnzAANfwA2ScgVmK8yEGdGjbi5nvgYidmHeczBMcheqnjVe69VGZVvkFsu4Wz6Hog5TSXE",
  "key26": "rwsrgkRmVfnKGn48BWJBpuiwQpMsZd7sXq77r3mnzCoKvDbbCbJ6qZh6wLFWeGKhmbkT4ATkowe63Aq96zczXeY",
  "key27": "4ykS1jNs9nMuYHvPw9vN9CjhSQ2d7NXYsDonSRbc9EAxhu8qTpb2KagomRLFdaW7xSU5Z8ABaYmeBKwESNaBen6b",
  "key28": "2V8Q45GgbTzDnuFfpdL8TrEJxcRB7f9cznVKQfSoDHV7H54fPUPDgxHPNDCo93m3xhGQy9fZ3ptnjVtz82pXzTYt",
  "key29": "4Sv9YoAtBSZmJw2MygsMRj24qMPGo3si4QDN7kAcCVhuMpYw7RzNViff5RKyVRfrG5kX6XxrCNuzoq8ERuwhVz4e",
  "key30": "9gSL4ie9MihbPb2Eo3fUUTLrHNbfUNbDvxEDeb9yt55tgcWA3EeuM19VAx1cWT1R9UmNLFGfWGgZ7GuvhxXn4jc",
  "key31": "45KQgQzvQpdc8viCt4mZSfF7j9wxH5yLZxqC5FZL2dgpo96o2BjmcNs4AUDEwenvTDnW6dDosxoBwDN3iBR4Y3FN",
  "key32": "VHbXfY5KYD8sCNoKUvPCtW4ZxkcnCobFd4JANfemYCPz2NhpyDaFBTsGXwrn5YH611HRMuuDoH3ezHc54S3j1YZ",
  "key33": "5iSfbzUScDExaMb5qsGKkedLXfvsZhgNDnKKDciu5ubeWQ4ZYiC4dQzFF7yxkcD2XzvuYAC2pdGaXpYDCfVqoab7",
  "key34": "4FfFLkeNFfmkPyFhs2ZXNd6YVmXdmNrGaRFMxoZqf9u5e3tsEwJi7gLnVP3DnAAW757PTZUbLVPUVmsVMTkeCVd8",
  "key35": "5cN35JEeM1q6eQwfGDjMvqoQbswAWQJNkSGcJEAtsnh5kxz1Dbpgq2W1ysPprFtvVBMMbxbcF2EzEnBHTMqkfRin",
  "key36": "3Gyk5ppAZwQujS3EuwNSZcT7WYDQs41Fbn1yHY7XULME8GAnsK4nwW63RumEABQzhHTRmD6QwsDYd2ETgicXyZRn",
  "key37": "XVtL59GcppSwonbyJUPm9qEWZmkLAW9k3kkiPTS2LU1YPorL6wR2P4VosdaRTsxyWqQ1Wk6xrHcy25qo4w8mKUB"
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
