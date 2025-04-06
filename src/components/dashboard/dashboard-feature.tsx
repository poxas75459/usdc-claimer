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
    "3HX77gHXNzsd7JnXB4sd3YZNBzjkFsbcywVRQvV7w3JNHP8S9wsvjBMkMhVpZsGvGHP4X9vid4nE8JbnUp9hTEfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfKqEChHN4QzKfosXqN2mfhvrCNRRKowin4DSssAhhwmybGqPN9hb8z2sG1bKKRXqoXAjsmymPFcqshws1kpyzo",
  "key1": "2nv1o9M4xYyL5k4Q6LhpiseMhozVveBYifMjafKYFMA2nTEsJuiW9jg4Kzjnq3BxxGHVmZ4nPT24inpufr5RpTj5",
  "key2": "3XJt7RMosp8Y4ho1pSZJZTUwWiF3GtaXek4KtbqWrhEqs8qAmXhmktgjS1Tzi6EU5AnYfDB4sQgWaBPmy6dDgDcm",
  "key3": "3dqA7MFCte9q1RJVN8zXuCQ7EJXuxzy8vbVmn59i3WDnAaj3rBwFRAsMFF7nXE2rnissfSJvhbB2vTRu11PsH241",
  "key4": "3eC6GUKG46ZRUPVQs3XChgu2T3cJN6SrsERDMfH8x1pZgdM99W7uoNAXDUJRLVdPacXQ6T7DTbNEoWqJW72cm9mu",
  "key5": "3ECUEDke6Byk4kFeUAuVBnnhyGbLmTGyztvXMXRcPRJxhFoqRzMQpZJEKCzuwiUtZg5MEGdbrDjYbS5pzDjN7E7i",
  "key6": "2HJUMD75Cvpm3pR8QaqrJTfbtAkB5ZiQLmULLnA5yXt7TBBCMxa7pDqFeGeL7Wbjdkou2BScFFEHkTDkvh6J3yJH",
  "key7": "4iBTwgtQfLwBjsyegpD3rvJsPUSQBV8KszRXRM7L3oJn7hBP9EKs8mhbNE3LREaEtYwN6Q8M1nju5h4ZkDKwL21x",
  "key8": "355KvaW7cAozfQxJWkqXS4QiGK1E3zm6kWE5D7LCGAcKDrRB4Qgwuak9nDwH2eiy5acnth1ZkQrrQfHAiMdFM1FT",
  "key9": "27bJTLPruYSAnVLR9JvH67Fcpto3ySLv5NHafdKFS6QstkVNNehJg876qSpPJBQTtyfpfnu7Mnk7ZqjHpXZuXy8U",
  "key10": "2YsY9Tn6y3wz1C6hvukKtzBbXcS5r5bWhcxrggCebmbHEzkjW2ZTk3Npf8NryGHZfS9Ss6CsUT17nd5MT1EtgAHA",
  "key11": "3c45a9j4FcrgDBD9AteQTxApVuVjksYxXFpqa8TRQDNHATQvQKHEeQEAhWFRprAFR2C2Ue9C2GiYTB8erzMqvmPG",
  "key12": "48SGNwFrMG5n3JdNmpQoBRyLhG6JkLoZziAv5EZ7BsPm9U59NBqP2vbCedh5URhoCj8QvrKGNQGwkTjdizWzhuwt",
  "key13": "5yCP2B43AbYoUxE2hyeLEsvRzBK1UdBTfEeF71Aeb3Zy83bzBzXoZJ6V8pM5j2mx5sxZ3Sn2t25MA4V2oqrbD98Z",
  "key14": "5SACxRFpF82cP52QDk9BaChJfBTVj6DjWXjAqiokfRy4DMDiAPcPosB8jm3y47ZzqY9TcPBSuHH1vf78XSS2sg45",
  "key15": "4QxheqzAs9h1BjiH4u8XfoeRxt6bRyXDYyRtrjnF57FUvaNRLVyhbPzttvgWuFMaR8JxN6Dn5Me9LUT8Q5YUpK4v",
  "key16": "54gYn7FxWfnqFCjKYEphfo7pEpsGjwPDABnir4j2UQpQx1rEjUtUTuT6kGR46FDwUbA9v9e8wBBH6jYsPUiKKvi3",
  "key17": "CW8oN8aLTGc7J6fffdmsGqLs5HgQWq8dK4MMht58outidJLqYWy5AKs5zWYwhnyPEUfJE5KEnHYziJGANNjwFx4",
  "key18": "3jvMBctFE4KeUDsWLvqLxVrxLniG2YGgN7p7ciNx9drSNEFhfikdLSM2xQLLx5BUnsBmbC99hsiMTC5NHk21WBqu",
  "key19": "3eNVCfzHEammjAkJdm5rRBHKV2SX2ZpoKKUGoAiKZjxH1uynSs3Ji1FF2YrjtgJREqPm8Ey1fUMNQy8ZosH6YaoX",
  "key20": "42e4ovkEHdREHmGNZFDHrs7depfNDVX7aHUzTix2gRLrrrpmtxjaAMwz3j2t6PDEToXyYDqgD3xks2ZBwKd5TFsH",
  "key21": "4L9Db78ms3KwaRD3i7QHh764h8MKJEgv9AhGx28qRFsYb5i8qMv8RicZcSMd8s4mHdfG9inf7JDePa9XjgRTe8kV",
  "key22": "nbjLBHN6nufQYZuzebxfCyN6rSrTRHakWNKni5d7HiD2sn9TyeoLcYXqd3JSWCZ2oE9bcnuafrNu2LebL8JFYNs",
  "key23": "3KAqKmtT6ZBHSFiNSvZ59TGDnM8WqmAjDvB84XjemrvsW3rT1fkb7QAdmzaACbhD18oyc3VSDwds1a4hYQAL3pts",
  "key24": "5zVW4CEYgJ7Gn1Y47jhEF7MQWEWdQ6MRwZgUkr3jKoT4kzhfH9vxduX6PhqkM4dqsYmFLYcdUrwGSCRtbY74Yoc5",
  "key25": "5sZTuPgG1BvUxFpYGwA4F2FJZYFKgoiaeCro3C6fDqP7jKeuMoCk2fLTrJuEpjRyur9aF31PzdPLA3um19sKFdq2",
  "key26": "5VRNDz6bYYCBkcvNqgY2tPUdk4xw5HKJMknFiSbu7Yhbr1JJJUrh2TdAbEWnxfe23muLRvJHLG5hr5ENkdFJkPvQ",
  "key27": "23yASjFUCSrxhPjKZXXPTBSH5vSHmHe2xDDh8hPosptgshXJ5BTewbY6CrzRB6PgwZbGxBSRmsdbgEw3akf3NVnE",
  "key28": "2Vmkrmo4hDhLRMnARj4ycis9gcWiKT5Xw822LbECbpKXCHnQw4Zjv9aLyuK5XfRa31JWZGJ2CdWwpebMK8Z8BcYz",
  "key29": "5st1vSTCMUsEdpaWDHF8QKFQSaq4sQKkNFBPdQesKiGDVgLWzLhsN6v2YPsHP9jX5kfesBS4f6pfsjKE1QBWFpPC",
  "key30": "5gHWJdoPqUueKkQgyLjCs7tSJdrGnW8m5f19EK4NLecbKnk1gRWC6JWzMjd2Q3MgrQRPYptpPKa6s4ErymDxbdLq",
  "key31": "6fSLiziymQusjXgxVydb3hZRLhcYDvhxJRSLQtBXroKrwNqzUxjw8f5HhcoVMVnMC1CdcniNpR5TXKuBnto5uwm",
  "key32": "4o5wLWbrTRRBZX7y1BDGTCnLYa1j6muWkPhV1FQbTGqx5Xi6SHJeqLaoW3X4M6VgwkD2ihFPp6Jkcvx6oph3mqoG",
  "key33": "2zFQ44d1SKJBdTPhKcZet59NVWBRVYxST4RV4A3k3RyKZckwZBo8NtNXZo8p1oL8V3u2vJ13QD5eyZ2bzuoFwkYf",
  "key34": "3zW4WeCbi45v4LrFySFN9eEGZh3mosBWWR99a6s6wb64UkYj3Tx5537ddhFbXHBY4g32T5nGuvMkxrLVs8hGdbCB",
  "key35": "3vjaEampKsbm18JtM25a9TuV4e9NH5YfeSkWYjZb2TtttMMW61pQBHZJDJsHwodp6jJUpJDSoApVMj6ZbppJRYjy",
  "key36": "3VcVcv6mvbE2GWksuQDwUtqoh6traW9SGbyPTSwPh93hiZBEcTP1dtsqJDWnZkLNH2ASUy52qSUZptnsfDSaZ5k",
  "key37": "5srBDC3Y6mFhKEGZJ3s4q5ngNp5KvokZ5y63sHnwdvrv1Mno8BS2nQERotv1xPsGqktvWu1Ad9RGmwCRR53fi2QS",
  "key38": "2trHLfkPdeU2EznnKjU9qmdMnbBBxMNq73JsuA5sRnv9JYz7PYEMzGwpxK2ACWZUpGxzSDZChEc1nUAYmT9UdnRr",
  "key39": "2iLW1nqxCjnm4UPCB4PSR7drDKFQyoFZinFnjPuTTRW35oH2Qmqv3bDccNqZ77r8NpGiJynUQceJqQ9hCvcJtKod",
  "key40": "3mFtAPFqXdPb3qjpt5ykozqLD3UoFhnq2vbjyaNCrxEiR2sPJoAaUCrF8MWLRjZGLbhxxfRGun4FJjJCsLx1Wj3f",
  "key41": "5HnHWVttzdAyo1iwdpftDabLMkc6ErdycEud2Un1f7N8wNhypwyxDvcok4nT1h7JpmSybuSGRCofqvFf8E19fPwK"
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
