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
    "M2yzauXAJLPpJuU72Ubo47rLz3VN3nXLZp2gb5Y4UuoUnUHreBo99kCybte6aRm7aaBq1vrWAkWcdzFaNuCAatx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279WXrLVyR37jVuqRgsggd49RLHMoE9vn2J4tpvWteg9o6HkuRkmivsBqk6pK855MTfiPApbcW2BEZkyL3g4Pv83",
  "key1": "5b6n7Q8HaXMsE3v8ZNeNWfemMf4xQJWdfX6gnR95tzepRd2BLKt92Mw1xxZoUFtSESyxxCs8RK5kVeSyAaopmdHm",
  "key2": "3zVm91xDYHhA4gPemBNNf15SRgWAUekAw9xmGKFbyMWFpPAWmw56JnKYPnnU3wx1WwAsS24TBj4Jj3BDiuRoCaMJ",
  "key3": "4fX4C1dGpLWvrka6NoMdfGxwmg9qAoyzUGTKxktwwnxfZFkN8FPAhExN2Ss1HA27K7TXEw7Xbg5bCa7LpZSBFEJ8",
  "key4": "31qRaZHvaLbuBUHjenyUztgtXH9vDj7DAeYAqkt9VC5BkttXX1hKqfQbPdH2JmS2Bzd4X1H9no9M7nbAS7c2Ji3P",
  "key5": "3VJsod7Z8XdxQkKAPVCPmBxYxERpXk4n6nx6wunEPe9nkD8S4KqJkTnJdCvFDfkoQhKjCobz7kZaegR9rQfcZWBX",
  "key6": "3bzbKMJx7AdcbpuUcyxAUvz315g72QSQN4zJS53D7LjMr1KPUsLtghtRVDbRZwjUP1nV6EzKXmKavYa8zEkAB5AW",
  "key7": "5kLmxVJnA7RPYBW1YrGVbySnYTBSvYcwkdGbaWzHtZ1YMj3Wd8f9oQV4qL3LKcTk72NgZTrKxpCqyUs7wGw6QT6S",
  "key8": "p7vq5wKC8iUdDB6NLFRZj3NL2Nbi8A4KyNmp21gbTTREnxteuameHtZNjqM1nXZgKoxFKBTZs3kDBKBq45uTPSg",
  "key9": "3XhZGRfg7Uri6qF1k7x2fPEoBwjVc4AxKzSiMVTbymGPft6pQWEPYwebFWNaKKpb36B77KqSbEuLXnR2JgjRm6em",
  "key10": "5NCdmQ4NF9WMdQCL1SX6YSp5Ded6wkfKpb5b65Asye6pbE6zQywTAUGUVWTvr46irHcik2zHC6cJiPq3x3ed1e6h",
  "key11": "5ZmATK8gLN6dHLG4jj8XrxMVT5wbkZ77PMD58MQmH8f4gRqGupRpMLXwSc8qchmFFZeXDcnS7AQExMrEwSsrtHck",
  "key12": "3fW6e5hvGHpKXJiMz1ygyWU3k8aBEQDpghxiDFLeBybGAtNhhp5w8JYgo2gVNtSPCPm7ZQD8tv5xSUVTFULVrtYw",
  "key13": "2axnQy5Z3hmQK1M9RSyLmws9eUwDnzFBJ1Vpd6ckavas15GQEoGi7R64kfrefFH5XSnu6JqBs1kHoXYiVMR93WgZ",
  "key14": "5m7Aun5fUXynt6taZHM3kJzX2C2Fyv2nfWhw6asDZTsMyU9pHCShE5nNt8Y1bwxpKE7PhLfqVJbjusPLNof8HWpb",
  "key15": "2NdiYLi8VaPrjvnjVRJBdt1GQfJeuUWewALvWG49KMhLq1GoFyPnUmgQcyRoYS4cP8W8tMqWNHSXBUEbpE57ZFxg",
  "key16": "5phH3UxQT5v48qm2xhuDSVC22KawsNZEVz2sthW2iqZBnn8SYN8GMTHHJjMTPE1owCzBrVp6ozzCuv9C1eHDE6Na",
  "key17": "5rfvqqXUu4GGqxZ9d3NCfnZQrnMPXnLNcHR1SJmQHuN6YeHuHv2YhRWFdqdZTqWoRVguznEidiNstGeH6ZXAd7F8",
  "key18": "2AWCpNDkgEBYNmTbVF64EZaM6itnXXxgjAdwrTGUwZ4feRbB85n7qJnJEmA4bcY9ZefxqMuJYcnnaET53PwkYy2Z",
  "key19": "5AtZrmejXYn3ZHm2XgWzAYc45nSb6N3o9dzn8EwA1EykLyt5LSSCdGniZnqPf6rVWZEAtknsACAYnAg8CKEDzBku",
  "key20": "2CH14SGjSSQUKQbBahAy94VFwpTDbu4Se1LMSHBS6G5pXuiYHBd1KXYD9D5kPizVoCsH6v4PpzVyJRZ9SiMAbWcg",
  "key21": "v58Bv1NYikYFHAuvdxzoBqPKNSSb6xtymR3yU2EdRYHvok34zRs5b1Lz3WR2VHhDmqzXfF4uodYgyPM81oyvxoP",
  "key22": "45pMU2SnUUZJUiR6AKnQuw385PuuuUs4JvA7PuJVmtM2TzkqBiKECqFjpFsK6zcpWTterkr1xZEvXVUvcEcHTRKC",
  "key23": "ocZWk5eGPb9wyerr8rKfCigcaNSApJxEigFmHCf1NhDjYw8bdWmvGZuodRaPTLaCfLJQcmypRCu81XR7MSqDz5T",
  "key24": "25HmMgGiU7bCpscB7GyVGdUmtqqQVSgkCSRboJTsLJ7aZkPQBdQYB4Sq8S6uhS8Mp9eereLWc3dXBJLqf61J9tTf",
  "key25": "3N1tLgHZsSXJFvek7SDAdjc5xPQtfXcyVpUPK7Tq1Z4oRCBSSdyuSEhuTsCSg6YtA3w6KGfp4wucpFQVMMAsptyX",
  "key26": "5hAtf96CdvPSgPaSxzaXr2fMzYPD8AW6VNCCio5HUACfDBVDktrExtr6Pm1TA7HWqykYxDmCfsJth23gK39mTfdT",
  "key27": "48CnwhuZsVWzjmJ3o59WhVCGrTkj6ZLRK1ZkymH9t5cgHC5GJxU7foFnaNLYSv4Zbiwqwdov4ywEJ9QFu3GSSB21",
  "key28": "5U6ZuB8J7Q7pyAYWigwJkdt9S1nuHjsAGFwycYttk1opi9EiaCbXewsJRksmAXzHPxp8dCugd6uDq3P192bg9LV2",
  "key29": "2yEz1eF5XVUFY4ABAGs84BaxAWTk2CgQNJkS7b5HhSNcMiQtqBP2jHNp2Koe2oBfSibtMuC7KYThRPtveA6iFd5X",
  "key30": "16H53vrKdiC72sAmwRf8t2sQcpkfNKVFKEbUjLAJWZunR2VsStdkUKRtmn6fAAs69wiKaasodRKZ65NpB2nQTwt",
  "key31": "3bmt8hHjn3EteqaRLSouGLxyemGKA1cpacQj2bDjydgTrJrddPV1tPgL29u8t1Now2hXVUs2G76gyPmxv3rvV2Bj",
  "key32": "567W4WqsJASf6LhbK77ujirFctAQbHN3gpgK2JuYHmqnfDhv6dKwBsYM8ceUQtmzHK4T8KxkeMxqyuhkmTayhWxw",
  "key33": "5trzCsKk4eqAACt2MDpzRRvc9CG7Hi7PvXmxWeHvt7vBtbwFDMJCf5zLvijYiq2G3G5GLrEuGHnAiRmNnHdkHyEn",
  "key34": "3Ly2UmNYLn4qoTX2pnGYPrCcXNu8Lr9FDNJHAZ8DfWdxyWah2SPKegPsvJgHRNBE7C19QoQx9t5vBTV5nor3mYi9",
  "key35": "2M34wKcMnEDsPicUN8GXgLKUwedXPYyf5vyogwTrd7wmznMff1W9M1yW1NgeStF7SaLEtFjTT7nrnvyR9NgPuJi5",
  "key36": "4JmB8UvhU5FZwSfzZukgP5XYXh5XncmVMJzy3iJn1t3sHz3Wjqi4beRRGvkL416LsLS5ZSymDqrtDPZFaowb6xD9",
  "key37": "2pHTwMo4L9fx4LLy6q3L6baMGsZ3yY6CNs6xWAjNzqodc72wv6J92F9RttTjwvnvoy45orDbcjdfwvPQcm5sLhbY",
  "key38": "3EMQdo9K4sLe4F2o1MAar1WP3NtMobydnRZLG92yghRsF69EaFR7ez1oB1konX5h3eYNXS589ev3DMRwjGtNcdLe",
  "key39": "2sAzsRkSHJtGeRHb7AMruRnVufdcKWePVMj9YLL9P7wTFfSWsmUAA3iuXLectyfsR1BJ88g3PjBuWkAZqDHL8ojC",
  "key40": "3e7PWhmrRCL6f9yMb9odESejhhYuCGyWZZBwXEfLxEhhtUZRDCRb4vYmNXvQEtc723GpfcXJ1VEaeXE9dqcnDxTX",
  "key41": "35UHngjbffZuAkzboVoLuNoaJzgBpRx2MjvPE99VaQYDcfaQMi7pRm7ZgUcUG8xJxqxRijvTRdQhfypQEe2ATFJD",
  "key42": "2nbWaLKhhUnDw9PZirAnJkpNFS4GmeeNoDJQkFeRiXBngMcgXw5pbZYeBtAWzH2csWYAkjHqXmNPd86upUG3Xn7L",
  "key43": "2RpKrkDpbEwN6wyjj8P1PNoniVZnADHAzZcAaeXXSHwNMtR1GA9gUch5DUEchz1HcvBDWKs3njp3CKCY1d7UnHRo"
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
