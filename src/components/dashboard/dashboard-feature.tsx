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
    "5wCrSPuQpK8e44sm9JYxU7iWHL6452n4UgNWH9PQyL8aYAmL2EzfjnaDC2mnQ3Nxvoa7kfiXHuYyq8VvMMq3YSaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1aMXYXjMa5coHwMJrx7SsPNeLJSr2xkRAHa1cfc7jt9hd5uHpAEE88nPQYg6uf6cWggc6UNEWZUtZvnS3N6XuS",
  "key1": "266QHvYqEMvjkJdDJuiLEqgx38VQ8XeoQMi2yWgPw6RmFv75pqEwpYcc3FJk125JKRwhtem2ZPCSunwoqCEEzARi",
  "key2": "3SZ7wfdBkALoK8NVrAPSyNN2q65Nq6XkVo4tFF2LNpiSjhBhD6hDioTaAfSfotfmRXM5czVH42kvbcanf5qZTFZi",
  "key3": "5fhVUTQogKHbPMfZtGLsLqYt7Un7WcvwK6EW9DAKkEr6zTqfhRbZGk3vUnuM4RoDHeRLjhN6ELCDhVZHr3vDguwn",
  "key4": "JsrMKtYekH4EWi75fpx4qDGCH5DoPwpWnpv1ReDEmfRYbfPsFjho9PRp8Dt4GagCTZyJa8g2C3W1E434E7Kuzo4",
  "key5": "2h2Ns8WW9Wzrt4zmLbEA2kp8nNEbJ86izDQZPk4nyKGqKraP2j6nCn1KKqp8GzcVzh88oAjFMHTatkquCsnY8LLv",
  "key6": "NSaA7oCGEzLyjQb5gPxYt1YHvD73WQKMbiiuKDZ8R6HKZhPmThvNbHRFaPQKXQWPtaJAZgaAN564ryfSj19rs6S",
  "key7": "VwtMzPc3598GU4m9QD8HdzQzAgNbgeBnKehnsWGo3553Zmv9GT7vtk72jYZvJeYHcT222gUDmANRVrmcZLWc71x",
  "key8": "4GMNgHuPxbyzK6ieVeCDmkFi8A5t4vvfz5UtugkLhirnz7Tix3thvAwBDVEnwbb7D6dMM2g63SPQ6Y4KWkbN6KJn",
  "key9": "4kyEGsvq77HDxNfP64dN44vNgbzjjGRcLm5hUzMfAwiwfj4wyUaYwNHNRvqA5ng6h5hoiUMoBGhmQnox96NqgCLv",
  "key10": "4JCvnU1AX1E3fcSbqNQkERpMTUd7aeVhLyX5GgB2iYUYZfzJKaSXw3k4gR5jq3DhuMgR8RwCU62trPmzcQk5Frmv",
  "key11": "4gofGmTFypG3iHbgUeez2uuA2Hp4FtakTgu9vJ8y7qt7eZAAa8YQhXnB4KziNMM498ahEAWZYnrdSKKbhhobU8TA",
  "key12": "ZAWxTrHErpAStFFWiFKNqpG9qsehANZVqHHxFN6EP8YLZjhsizh2ayys1LgH5e7zVJFQsPDYVH1GTYqsbqEut94",
  "key13": "3wRqPMHbQBsRxM7XGEQqpUL7ggvJ2LEhzPBmXDCjtgvpEvrhjgBg2QEoyzAh162pYot7HGTdVfsog4t4GqfvNu1P",
  "key14": "5NF2eUrTgntjgRBE8u9dXfLvjEgSQQYxcnYRv2uubGY4mnBteQVKdcB2Fgtyhtd1rZYb43TBXR5YsNuBTfkeTrz5",
  "key15": "GbZe3nyvCx9mLmcBvGND9RTkyGagSyYTkuLJNREURmZkygCZ15JnTzqw79EQvL8g8puDFfJQgqDJn3RnSteeAR8",
  "key16": "4U5MrVmyng5BKR5WvPb2ue5rCmsFtpTu6urM2og4Q86xEarwpB69kSARrSn6uiSCSiZUzAZe4cK4JR7KEz1n2qm5",
  "key17": "GJH26hZeaY7yKP9NzzNrosW3yZtqhRoJg7ieQJj1wxH3BvZ9spwJxKy15R1hbAXKfpYzU9AxcNgqPQiJByLs8Qb",
  "key18": "4zCxLUKgLxQhZ1xVYnfrLnPWx8KuqDRXanetGSKyf5L3wvVxrpP5Gqw15hTjpsCUknedWto5ShH8pDiNyc9F2yb4",
  "key19": "4p2PsS62Nc3ykDftFbycdkwvPZEcM8BCQULFXNu66j8brp6S33TzgjCiUA1qJYv5U3FPZmSghFhGjdwX8rvCn7AK",
  "key20": "5tuNNUV8UP5B7wAyQaVH31YAPArWMj5wYM5yH8eAwiH4sCgGeToD8Bz4tbXTxFwu7P34dBBkTURNk47bTb4b6FR2",
  "key21": "WGUMHDV3tdD4ft5d5rQr3bboKQWqhgxAa2YHT4jKEyhM6YmcKGwmpRmRDUn5ZasHoLDxzJBZHZ9s9hCKUMqpf7S",
  "key22": "2inqCMNat47AMW6i4QkzKQAaDrqxpkrN1DcVWZc9cuvPqmE83bMVwQsCvy2FrGLovLrshxW3Wz7quqAcihArzuaX",
  "key23": "oRQ7ekE3L996WtWes1LSmyzU4HdUXzXXq4qoZBJiGGipkYM8rysWqeUQfsFTosKrWubJGgXBQ1S1CVgYtBAURRn",
  "key24": "pyL7wV49MHrxHGNJ7GRKQ3qpQiY2zYmThy2SXz8fCbuXVKj5JKYjES3G2vqGJnZAkinGVrMqMZts9VKEA8X5Ndd",
  "key25": "2pHpiQH3YGgYviWwC2EW6uksUrRb6S26DfvUsibUR4C6fEr8ftypWAigMqXCqBBHTLkDqnJW9FNFnuWTbTRosAHQ",
  "key26": "5DR17Sz4rGs5B1tCPJmaidgjT7LBNrTk59GgMDpq7h26XiaN28QgtR4ZLbX9H7qL7Jg73TNYCiJpCjfm4U7FStq4",
  "key27": "tqtTvzZH25hgxioGLQhNi3RtXpqQh5na7H8EE5TWcv14jsNcXp1JY85t1nWLyobDizVzDx7znRMNDo9u5kthsd4",
  "key28": "oKzPtpL91Ufp17zAcprKFZSZT8NuPyVKz17fG3cSa1nhXTH6UzT5UuKWWGr6p7jAWcjMP8LAiH2AwvjRN8mSK4N",
  "key29": "4Tj9Xk4cz4LxrtfjsxrEB3TvkJXpr3LsvrokBaa43mQmzEBsdGAkuxnijmu87g4JsK6KCNiKfrCDXhuFfvtUz3TE",
  "key30": "5iq711q5jzDfhrkfEkbbeH1CtV6AvydWxwpU7zbigu2LXHscwqm3TRUz1uiF3r3QCPaMvtesACHcu3uCTfoTB6VT",
  "key31": "2Y95QivFkNMXYagei2zRgFnoyw2hoET615pSVetM21DL1T79YVCTjcpkRYMHzvm1ukVb7HKnLAihgqoyfwue4nhn",
  "key32": "3Lgf1BX89xzHDdz6ZTMd5PojqgZfZhg2JfsrZP2fhkBeFftyJhiT9VewaWbsccBae9P2TpSm7RvhMBuZEs5wgvUC"
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
