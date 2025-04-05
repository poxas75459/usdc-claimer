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
    "EvorPbmBQnP7kbK3mCSVb8W6HuYHkVEcEhR51QNigikUvCoMBq6eaX2JF93VMRooeqGYSGpU9eeAkujijZXHD3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rK4cKREt9nXNqDgVsJsFfMfcaU8qXJAg7yiKd45yepShHxvUGhKHWtgQoWwiXnnhZTZ1SNFfrx9LdyDebVYVYaF",
  "key1": "4GZW6qs9sXkh7EyZqJfFRFKmuDUX1W7EQzkRJJYj2irSPq4XZtYgX9J9b6AHuR6AEzawKCtD5aVisC75ctCwxhk1",
  "key2": "YZSJH1HxvuUhxi9HsuZFWxpFFUC8nR31e2dpZXa6eSwCuTdmB7otKFYpjgjJgmFc9RXB1rxN5sowQs6qhL36ABk",
  "key3": "RVet8ELBErbVvRtuMPb88vntYkX2bcWTtaTDJv4KoKva9ay2ehR4Ldz47Z4TuBxDHUwpEUWFkjNobERnAPKwbeS",
  "key4": "2aMb4Tf7MTaW5yvF4DzK7Xah7kU3WV1GNkzjk4XFFnXdNkbamnN1EYS8S6s6uYF2fYJcWhAgQESw6Rqe3ANYhKYe",
  "key5": "5CqkhsAZcoobA3VpPpVxwcYBXtpZMiktJNspNM9rMSeEuUuXmHBXVg9GSqYWg1WMnJRCC5sQKCpWogBJNnSWEELV",
  "key6": "4CvyHHuEFWJG9gD9iYWMhWwkFVvbV16r92RKDzC6VJReKQfBKiwTiWyfUkkuZZrSUFNDjcHWgBzb8t9t4vkzrgS7",
  "key7": "64cTUwoHyG7fZGNrqpgsT3NShUa7Y6phV48eBab3TeEzp4jgTnEGpPC5o7HzUzbq99xohxDq3fqBgVNobrPnfUpK",
  "key8": "veQjcjbJQyFxTJDYJ4L13K2HbGvgEneiuFTMaEjHHGTNzpHL9iTpMmRxEUGZS9YCwiMJRcJeZDdXYZRE59Q2vsZ",
  "key9": "4tiG96rruLwJ7sHi7R4kgQHffyXaEvr7mkoWFdPm3mZoDnB1D4miiKF5Rt5aw78x5qyTwoAf1GoFSNieQ9cTSvzs",
  "key10": "4Z2UNKBEzzntjq5EDWjfnmUn3Pqtss6iHFZtwuXcyki2RUfs6dkPSuECeYMLUMgDqz2QJhr3ckMt1T3pkLgHgKFz",
  "key11": "EtKBGgZZaRB5d89kpM2sQcyaWkV66VXMyRQS7HM35J9KCQRXAV4coyMkKSb5L2oTWJFRsEJ5jWGbUKgcfKprpYz",
  "key12": "dUuKuJCpzoWASDjr5SW7PrcUmAEzzEfMvczKS9Nq7MoY5cFN6RXQQPA4n5x5n9tVxKj2rPhPFbJaAnf5ArQw7Ab",
  "key13": "4e1Abri7PH3AHjRzk6T5VHHkNd5xJ7PMdfMef2ucSkEkBy5udBvuuaKm6SbQ5jjA3uqf3hyp4g2jgfAGfQzE6xh8",
  "key14": "5BrBAr1CasWjdusYVeDe1iE4mSiaGzKFgVDWfEp9ftqRsKYzadPTCjdqkQQn6sNLk46Wf5p6vg6MCU3Ht2MDkt3B",
  "key15": "3BPLLmWoAaFBjSt6XvVgYhY4hwyrpqSPHkHmkcBdqhntQQBinsP7d2YUKxwYEH7oZ9CycgFW479SmpjRsmnUGJff",
  "key16": "4HqgZWScWm4MCFoZaX2C655S6bN91qLzynCmdQNkGEiS4PwmmCu8PkzLgenPhT8vUVJemtVofmpGftRGMwFc3FNi",
  "key17": "2FxJVvnVpWXt1hizx6Yf1PcYVMk6k8LvtMwBEbDeCoYrd5a2P26M4GxfxhggtbLcXXUpBobWZhkHw1kRTWbuVccR",
  "key18": "2zFyXigibwmfL9ESXMUS6mnsEaAmqS2kqyizJKUdPtXUGQRUeqKvYxdiys3XhQVYQFg9R6HzLN7FdYZskUdDN13Y",
  "key19": "2YGDpCMn38EipLPd2ZX9GLprVmpgvGZvbAKMWrk55oXdYCBQddSyE7k4ztHjSjL5bVY5z7NJ3J7w5b1aGegZQuaj",
  "key20": "2n4jbicyi22XoRt5X7cmiQy5K3VenVByLWa7NYqSTQBYm7MGqmMNqRRaJWFzQahbcok6VEvWWk4VCWkn2uUnCDCj",
  "key21": "3zZ5iE6aHFJwHGY17SzqxE5soJMsVSZaqyAM9j68gRLMLTqp9W9tB87KXF5eMNWt9guoFrmJUyxfWUwieucuB7Jm",
  "key22": "bvNjXtetjGWnnWCnbsXihoQYKYBTGfhd2S2mH2mHi4vPQyyF5DydeXqTVPf1ghS9oqShRM8jNvKFnpDiEvKe5r5",
  "key23": "3L57CzfuGRwumSs78p3oZxymXYTsgKwqkXwbcbNzdTYLQaHJDM2BUZwEKPZ73k6iYsA1u5WpNzit2SHfpcbSXD2J",
  "key24": "5F1aGcNUpdNaa8iruVy5dg48L7iYXQiVT5Mw7gY4RiCLeh4J9JvUkYcD79vKU4QKc7JjY6j5Ax11qyN4AHi8Tu1S",
  "key25": "3FW9YFS2dutS68BGHTsi855jLZb5XxoNemBw6Qic98m4rwqDtcAuNom3AAZzxDqFKvkdjJne6Bc6QHwzR45nu7Ek",
  "key26": "4DkVj99vbfp9B6KiTP3csRqu7djHNiWkTRaWJG3uHTRjUhojzRrR3ozkZHF1rN1f2T3JcVuaGrHyvoT1dAeMzxBK",
  "key27": "4fnme8Gposcapec9MYf2ULpvKiPJwXHZHZztRMYUSfmgLAzoZh6PhYE6pjuRmHfCTnQkCVM6ykG3j8AXg7EVtHQ3",
  "key28": "2MCpyUjPwjrBeyUVkcxDJCRi9Y7op9gZ6eumSDS2RGUSmLZMoK1smFHYN3N2s4vSRzQtvmD26SkRrNti5MbigpuT",
  "key29": "Goth1TcEakrgKs6FZHzB53CsuoWvYsDHFzCX42vEuBM4JF6d7sHD6r2VgvSR49ZQKw9eHhpP5huPNs5V4ipjRPK",
  "key30": "5kaXyysHEAvACYzdq7GrLSrw52HjR422T2aTNnbheE1WYjBGSeJa3LoiGC17nNHLBbsGf2ysYCLLPY1X4mCuGodm",
  "key31": "NQaPwCzm9ii6osJesQrEfJaP1aW8QqRjsTcWsGFG9L3pJdsBCxkbUc1DiRyKkpwHLxrw7U1DGkUkWzcUeFXCqrN",
  "key32": "5jQ35TAjjsPVK9gBLfe467ct7MXiaQ6xMuoNhDsrxjKz1fFqKfdCApyRGSnDLJbZoW5iWtTpAYXt3dTvZ5oUqyv1",
  "key33": "349npzddBPCdoMigmzjMcv3Mb8NN5HgEqYVt9pX69NtzY4dn9kVjHezx3cdWRwuVKDN7yD77SyrptBLBzMkY3JDR",
  "key34": "3WgDFfGmiNPJ6zYqreGYWUFL8KKhaEjCGAJyi6d4cSBtxxT1jFp84EVDTfJUXdGytocrVm8Hw1E7p6GgjmEK6mNp",
  "key35": "5gxWqcegd8FTPS8fXUhXMWx1QmXvZ2UEdsqHekieuvAjq1LQdtkiyifUfBKJKrguMKd1QMfL59FLfh9WiriRt3QQ",
  "key36": "CwM9J6gL7Fvebp4xLrJVNqCe2ziKaiMR1NTDpNYoSCXGwsgesgKk1vFEfVnXgRmBevnN5xJkwsKX7xduc7rbisq",
  "key37": "5dfxpKWZMr1G4qPtaZYSDkzx6XepBfhLTpcauQ1gGDAceep5qZxGA3bvRVQmhnHy1N1bGD2rZamwKMe4LL8odjzb",
  "key38": "5UsfRJw9XTz3to47GHmQHrqGSF2iZsT7FxqKZdGekiBgUEMXtrjEq6TzWrGQJAHigpZCQqNKK4RBwtyMGcLKH32n",
  "key39": "4x5aYsgsqiQyYFWspVfN5pEn7GxcZ6yqDkMUkcdQEHiHteMAwK6xRH8XSkXeHSAz63Yqn4T98is1Y246Ry2dzPmW",
  "key40": "3MXHbi2xw5U1S4qQVQ2wXmAPmSYNs7NpsvkhK5dbtpGkSfwFkD15vTSj8BReJhS6HKXHpsfMEiwLsLtuauMKEfrJ",
  "key41": "2KNpwZFoRN5Q6hbftiPMa3qBswndJZi4pcZUbqrg34LmWgycqgjW9mhuQmVKx5BTqvT2GjjExhYEmZt2aMbR3Tz1",
  "key42": "3s7C6Jhk9GnapzXwSmFr5YpGvQpjc1knQF5w8gRPcMjt7H9B3nsYPN38CQMJTjzDVtZ1pRsAcpUmL4XJWkL89ixs",
  "key43": "62eAbvTH7of828ZDomXH8T7sNmzw3KBbZDyeoncQPMDHx5icxsVXZz1jLdxjooVnfr5iCpcLf2XZmvebdDG8jwWg"
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
