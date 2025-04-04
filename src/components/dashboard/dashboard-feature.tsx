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
    "v5mcwVJtUMJvEb4PJt3PoZrSoijFEP1tvsSRkc5Wx9bMjxDUXrSLjJzSzQH1fG7fTdJTp4ZNhiUBoRQRNCHG312"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2NHkSsMawTgR2WZXY2G2VvhHhvTP1AANUQwJD9MHwNZYRdpGikDfXKSVV6V8CcmgVe2P4p1AF1osvWcGf3ZQB9",
  "key1": "41suomimxMmdYphLxVaRCHua8iahfRfVeEHz1WvskPizdP6jVMmevx2QW6iDd1WXkVeEsDRauo4pBX81wUhFyoRZ",
  "key2": "2qdvZQsk51FBAASEeUP5ViyELvdvkCiWE7iLmKqt7RiUASwAwT7xoi7TYdxsWKnggrh6nQD5spTWZykhhyMcCxGQ",
  "key3": "XaRNWBELoaf5QeJu4cUAMitdpVRKX29ZKmX9Ti2NsK43XkRUrXhVKgNTPQk3HNoCmRKMxqZjn9VaUBxk9mi2X9H",
  "key4": "25vpP1w71c5K3FqNRvn61m5VvpGY2M9ZsePuQ7Bn3tm6nRrgxtDHDA67KHEkPsUGqyskAp3S3cciE8KQpEb3tANB",
  "key5": "52rPSWLg6jXPEMLYzNpwawfywYaAQPSWKU9Mjpgfwjcx8QJWVn9kVuNLHnqCtAuFVisx3bTANwQNd2jtAFs1g4if",
  "key6": "41nP6fLR8NQJ1zgyGjdkL3nDngNqZw7R1N1G6yPJ1ZqTNN9jLPjSBmz43De6AiiaNaWmX3HVW2GKAA2erDpoC7Q5",
  "key7": "3X1FXakUGL3Ff6iG44kHLBHnGLXWmzsyNREKUf5SfhfnyF4ysMXhAG4uQVrjkpvHApBatxgK2tyC72mjP9YZfKxp",
  "key8": "65ms2cnDTEn32bM99fkFX1ptJfAivV21jy4sPXrrLiZvUXRTfskih5RtvEoGMSDGojofiLYt9DgHfUWAqMyJB36A",
  "key9": "25Vin1bQaUUBcdDBNtDfNLMpcwUZ3cZHqqhcyKDEXjMYTMJzPxrqJi1ixQbhgiMqMq9aAaykhp8Wks6JfjZg1u8A",
  "key10": "52GGxRK5wmWhFvH7D83Rg1newh9rHaRgUbQTTU5pAvetKyzk87BKDircKDEeUiPQhtugQyW1moGQ1D34HvfTNgw7",
  "key11": "2SWYAm466oJdE5dDvxTKo5Ua11pfjviVx144CHiUVnENm2UPjV8dWNvuRZcFDV9Jua4VZLvQMwCJK7wqd6EmD1ey",
  "key12": "H64JFSLtsNYKrefn3eoTW2Ao3QZwEhfvg6W9e1JgzYPg8S1FN9ezr9JUq2g1eBgAmGxaVKB4AT7o6GeJV3kvDu2",
  "key13": "329F6YGrA7TYyrUUp6THEkQBecHorfNr62y3VpSRdDzTZd4MsALSP6b9NebSdQ64g52R8TZUtmHG5Wz4FRjd7Ys7",
  "key14": "4Gs58s21RukP6iobSHuSNC3cUc4wAhwJXP3b8ZqcTeVk9rf6dKHr9zb9uKD6Hw4RwaaRzF1avT231bbBx6fKzSyT",
  "key15": "3TjouDq31Xh4UhSSBGHQLBuPwjNgQdMQg6TcjKLD1Zq9JfQseM7RsTLhsX9ffATSh9KLnCPigHMaqMwmcxELvMoD",
  "key16": "4Fnutz6zgEKoSkdBrcUV9PV8M7h7r2gDMU9FuiVeyxxN5NpS1TCFVPgXbjHYm7KoL3qZ5RRW8KWEB6Ch9VPZ4aFs",
  "key17": "RNs7L1QYnSYkmdqG4fywkRKBdGbF8mCdaNssnpHreUhbZN38M3kcGkjo4AbfEr146Yedy7cJqvpDv1X3WzqzpyZ",
  "key18": "4qVZtPCecxJ1KyazdTTjSqubRBQgHL1DCRLHxgqSNGzoFaSREXgLtDhHP4nuXzonUMwnqLVEkzGjxAxBxh6GJan4",
  "key19": "1qZw7Ykz9y25vthdwvsahbPLarmVXcBiNmJhRv2USV8wxSUPFbYuhQbwigK1shhpcdauaTE6FgBGCSmEUZuKJGp",
  "key20": "211v8QtFYa48275KmTZ3JvGmDDbarj1SzVNggrqaNCExW6iC1KP8FXQALx8WJN7E58WZYkiPTJ5TBgC4sZHaUb1j",
  "key21": "PQL1QcZhEwCN8rZ4h8BuYey6Hp9M9JMpQSepKjBk6EXAYH7Awpa1t2C1zAyeVwxvbwEZVrq8fkok64xvnxrGBJ9",
  "key22": "4zQDx2QvgvcUzoACQxCzV5RKcf7bEve1VeN7qqGcg2sxLbuRpxcokLGyC37YbbnFesTajxQ3YAo4o1eEynw6X1n7",
  "key23": "PpeoUukH9wkC67YFxmi5Tcm57S3yupvGaghZDs7cM6sFJx5iXkwUp59N4SprFvNCaQ5y3UFpMrVzsappXEKcR21",
  "key24": "57Q2Y4HyL4sDRzVWy8aNaAYhmJ7wMHqXQ4YpYeADaTapKiUFAnrhEjKKy66g21cHbks1uqjC5AwmZJjYq2WyC5zG",
  "key25": "3Yqr799yrFKWzopKALWWBM9FwY8J1cjE4H2UbH9Ndv9icnCvyX6p196vcdJydrLCDwtcYgzE3BWeDFdSZUaA8pYa",
  "key26": "5C9r4iQa8FKwPCywPWtmHBPre77zdrugujLN31KmTLjHor5RUDTEj6n4PZC1pNyLptLR5AqSg7oLNNf8XBdJDJmD",
  "key27": "61Pm2zjDxuf4jNdny8mikfQ2s5JFNPpENfzkKUiD4U1zCSuXc5TnPtw3LWAw9fSAYkBFrTVGU472cUDk62gxVodi",
  "key28": "3HVCkWMmR1xF8HJEoPgYoEgcEEzHB53iqAb23LiUd1grrb3tzTrWqsi7Z3xTa4ugu66wk5MiTK1LvZE5Ux3dzVW3",
  "key29": "36n8cAoQBn4A1hKZPmniVe2VzmZaPTxkr8TZcH13MKUYdaAaNiM1Rh1tS9rgQ7oaCCQGnXXUHSU3caDijVot77TC",
  "key30": "26RWs4ybWXbFwbhCioGZriBAi4RdMiQeHgjefHgXdgsw8P4fRaY5o1iW8Ld7ZXQP9yQLrRZJhRjwPLHcjMryBfCk",
  "key31": "5cySRMg9PDPxbsRdEMBqFAsoVvKJHR6E1V8TH78mAs4KVv1wZYyWhBFTzLWevkhRompr6eFTDs9ptkWfBwBdKcMx",
  "key32": "121kem4YEvPRyadXVdyGm4ABKFu15tmWzxe1PA9P328sq12eHcdV47Gona6P1iKft8uRbtg4kXNSrz5CWNJdu23u",
  "key33": "3hYnN4nXNXeswsYmpcDfW7VJSqcz11c6ng2nuT5xpjvD6L1zHRmdQCsf6Q6QgeiG1CXt5kqJG2Cqe4t518DqtYgd",
  "key34": "2tCsJEziVsSVSw9ajreTHMAgFMQW2VJnyVSMBdC38F5r4nN4SjkopM1rB5SeMfBFAPQNxgJbpjgY7orbBDdyZev1",
  "key35": "2qauRvxGL141Usg7p2VaH5RVU6nznGEaEvMT1rxwX851wrwRHF3HvXcjNVhBRbpCXxd1H9ZAVHFBJ2VnebdVoBCG",
  "key36": "DdDg4R2EPHddAWF4z7mhKBtyituxjbJ3QEvWkmghfUp1eSuUBZkBBz2WFPnnVkVjwbE4U1WhWUYtmsCVn8AK9eH",
  "key37": "2dTJHAbJPCP3Grw3r9oY9vufy6bVGTZCmC92qXZdzLxxtfDN6qJ8Qdp8E9KQaUmvByD8Wru1gE6tMA3dR3bEbaZb",
  "key38": "29E5E2mDSA9oXDx5QSUZjVjwSLWTsCTrvc7BTbtkah587wS8B2hK4xqVe9CWYGWMydiVVwuyBPkKxXjo9gugHjVJ",
  "key39": "xRtvCU8q7bZ85pm9Jv24yq4rR3Htvhjuffg6FEMbF9s1T69PspwfmgCe9nS2eMoc9XkGSzR2gynFZS8oVxyty4n",
  "key40": "2izoyo4kqsCKBQamw69ewMjnTGmuUeqchKpQBoiQDWQxpHs5zuv1ejdFAvxV165SsbnjCuarJxzK6fmcemAA5kHt",
  "key41": "4HcVumVbJo4jjguGsM3VcPvmzoLKzJKdH8sMYsaPjh4VaL9RnkHeaXbDhrdMSkECZ8gEDAhEhvY1U2LGcm8Q8p3g",
  "key42": "2urwWkQ11Tis99HDvk8SfzxDM2t3rbjKbWXHB2BLbk5DMSaEZUuktYht5jojXkoVGdLaq1DguXMDXsH4QPoydZNb",
  "key43": "5aYeSKkj3HJr1eDFzgMg8zaed4iZsgCbb1FPGd4hVawGMS8bXgnyfuxTWQ8i6nxLK3yp9mJ4m3wa6eBpLRCRdVXe",
  "key44": "2rqy6t7s553gxS7fgh9jLr5fR7Jo8VF4C2mvt77LsggXKsrEudFicjuDEnWyrL1GgxVzUL4w2PzNgvq5NY9e7Afu",
  "key45": "5UGfxLtQsonYKgveJDg6MdZTyKnfMwkzVkaykzm1JdJZiiBFVhvVjPK25TcRFidKdmdXsJATonSbwGuiecbB4FJB",
  "key46": "3pRc2wsHHWQkyc33MwFdDFdRTiCgZUR8Co9UoAdEA6Nsq68bojC7gTbzqytxViQ6GCp4R8emJXd1Ae32YtiVdUM3",
  "key47": "2VmmCgbqyCHoPnDS2APh8LKLKg9fLzPH3Ed91D2NqHgo3QzscjXsMpTTk1TH6MUfDaCLen2TgJjzh1X2qU3xmqSG",
  "key48": "3fpuy1gGgBArSE8CsMXowyfBPCR1jDQPuZVUitksRVXZcPn8DmmE67w26cYG3QUz6V4whUgAHiA8Wpzq8HCCM93S"
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
