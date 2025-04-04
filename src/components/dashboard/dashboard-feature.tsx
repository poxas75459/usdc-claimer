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
    "AeGNsCFSHuoPDbnw2NwarFSxUk9k6nQcwiJDJgypb8F6AXVspgHStHbEpqZk2ogrnnKJpPU9M1cxVujGdTtxhjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LuDg7XZD1jfXDWZNtUzDsgcuHZEmqffsdH3NomYfZhZyZT5DBfutYse1grZ1ABNPhLDU73EsmBWfQoVVetYNqp3",
  "key1": "3KdXrz9gJUdWwkuEJUsDDxEmJR7QPB6EJoNek9f1zF3gVcHik5fKu1e4yXeQzpZZ2XWstGHRXb8DEvKbEFr3qecD",
  "key2": "2VSbqsBCzcL24CdxhcRaAm8rV2mWXnNgcLiZUZwCo4qbvZQHRrSwkHaTe2NSEjY5NSAstTXJc8Resg9RTSzZ6Tgk",
  "key3": "4DSgVUpCdfvKeSwu1jCAxvtBsC4oqer3DKoRAyquqkTCRqBjyJQH62xCq9e4BgXDHDe6KZupWiprLYfzhkEKnmfX",
  "key4": "dbCShVxJzSeJUwZn67EsHKVHU5W9PPQCDe5Z1WAXvRYCvBXcfcx9idbkkwxidaX3LYHfPbjssYzKkTCeBcF1HBQ",
  "key5": "cfiXtBz8xuv8S93SQMgN6hm8xZnqeh4yuJ48AxWbNruWpqFWDfXBmQD6xV5DVCevAzHWdqTdjkemayiTUYDsfin",
  "key6": "4QLiwoAribbCwRkr3NQx2y1sm9JHjYKnCUVVdCN2ZJ58g2W5743KjbnuFuB38zYSDJnxdiUXiiRFxocRUg5sssLm",
  "key7": "5kvF8qYa9ogbaJMN3ondmWLZbP9CSzwNzeCxwieAsemNE96F7ipWoPFH3Ef6k1Ytuf4pm3tKocf82ATiSNewfqAJ",
  "key8": "4CnBWeDmDYyWmNr5RStyoye5qZ7BguPM8aC1GmB65Rt8kvJEzVA59BztiF64TRn6JVB1p2xWSsjzcLqDFEZoJgeh",
  "key9": "4XyjvrQz55AZCAWD2ZoeHcBkHiUGjEeXNw4FXsCm6qZLLDt9HLPozUMZvXCxYzfRK4uCaLqdHKXwWpHHmf5fCbxK",
  "key10": "3foYBAqjkfiQ33n75puxMzTowdqdZziivrjAvUTpjQVrprR3Q9iMsUfHmvosXaDws9a1immGdzxVc5KGEUt9GqEj",
  "key11": "49KQmEcarkTftCjGNFckmf76kkFJnM7vdKF8aYfv26kBauBVgMJhDbb39REAGKfR1BMKf3H9PCvHXLZ3v5EJA3qh",
  "key12": "Yd9YUvM2ZvHvqpcGDvphFprkGpXaERAPifrhYp6miRckyFNvLC2Bx8aTTddJ9BqnszUuJbcfxq31UQ82sdsPmdW",
  "key13": "3wBtxpKt3RMpgfBVMDm8C3Cdr1PmYXkqMaFpqoxseiY2PmHcaskxyLqNhy14rGhwEVeJxwkuBymERGL45KScmpv3",
  "key14": "2ex8y4T1WhjPpwqsxBwwrrmFpWzojZTLSh6aG8TXG2TDpusxUScjdWY643q6WAE8aqLLqgMQHkFh7Pspe98avnGT",
  "key15": "56TDHb6W9YSWKFiwi8XavicBbb7dXmJjed5Qq5KGKgU1iu37NJKD99FKP1NiQeM9YnjCiCXY6yKe3fRHXzFCAYEk",
  "key16": "TE6GZrQg8DzctBzJhiNPvexGDFKXBbNfigEjE7Vo9VKcdpaENBHHtxWCHfbjfuxc2iWWF76MpE77MRgRaWsAV8B",
  "key17": "3ohKxtuHcgoyh93NkNuAQuXJFVX5JQ3HDAUNV2TxPoBRqBkqcsQrCiv8NvKour5nzRq9tRg8NxqRGD2gwCTrV558",
  "key18": "5nqhKMVygs1YBenZpfdwAic9yJKWZ4YnJWFEpo2fbvEMLzFauAD7mFu1aVdVEw475mJhcdtUe8s4aTqUzcsBpEvX",
  "key19": "5q7xF9X9EUwDHPs3pqpsTaC35vft9m7FrJGYgTP158JFMQsmbc1Y9bukdALP4GyphzFRFYDmcuMo48Sg2VfB8Gcf",
  "key20": "4KAkD5K1QHqzgn2JC31aSVRdFfLQscAeQrnDM2ubK4TsvJYuEs1u3sADsGBXbsWv5QyFKEy6xpuM7P5cDs4wfsAt",
  "key21": "4cxCYNFDqfQbAdQ58hBBysbbUCUE9breWiLdK3uwyZhpEEdBvRGv1JV1agsCsvtkCQR3GQUwpYAWScxcePSQ3qDU",
  "key22": "RLBzxfMYDsVdyTP8ueTpRwwhAvaQoiC6KwoyEdWMdYsVfWy3PtG39ZuEiKVwUD1VJyiidJ3hp14C9oFfQPz6uke",
  "key23": "4UDxAhsD3vJn3FWjAMBWzcgBRQxTHTG61sqfvnWMFSdAPHisZkcEQmXeNuxxSCqbR7cLKCZdpSHvMvyzrTHC9DaA",
  "key24": "3BL7eJPPbb7LT3sBPjvarXoFF4dofp1Ju3ThxyLGjyJztieU1xoFrZ3EDQENpeTv9JbvFuxT3KG9K1RRRmB7Mroy",
  "key25": "2Z6xb1G1ZnNx4GbEo1yJLQUdRQLXbCVTevdzQGjYkq1NSuTQzhcvEUWwuFFHWb4xAva3HHVVhBLhXAbwyssdBwmK",
  "key26": "4CVgKVu6b1qt2KSBEQgdezyD3SEpRh4tSWARGSsCCWCgfvaxE73nwR5p6wTkogHy8vkVHju69ASEJ6qLNei3UL2k",
  "key27": "5G8BVw1znEMxEnitpKzQv5W6D3gSPGSLJHXw5zT1yeAixwR79wpoKzVDBhuZg8mp1NVvwzXvkpUxygV33iTzhJTx",
  "key28": "eDDXyoYZWrpB2vxjU3RhCx6kbeNPkwNouMYwK2gX1hD2RtD2UHSeiba7sL3AKtzxEpawVmn9pTs8MbKz2UKsiQ6",
  "key29": "HNCLZGurcazdZUkmYyNSZkHWosNq9ZPw93zMNoNJJKJJR43YoVybbrcTYu9nHswTKUT2WC7nna7WjuBWgJQLbG5",
  "key30": "573UxcBRbfqGnyR51SLDPD4jNmGQJGr7wDmRTGe2AH3weSpVM5nbh7n8D7xMJqg6ZvK2nvyrygJxAVnSGn7AgHPk",
  "key31": "Wnx6QsDNQZmb76C3KwmpPXA86fjbAkkg1S1pRDJd79LMHDtEzMpRS2wYVBPFcDHBNWmmrgrBvXHDNpTDX9vwbvB",
  "key32": "2NhpUzZAm3P2FofyqsjJwWZZWL4HLjWd6wx3iC1xrZzVVMYGxdysaKrv6VUmFBmStAwqnjq6pHptgFhw5UXGGK1u",
  "key33": "4GdYVTshJG4vmhvQPEWGRrxhZX5VnJePPD2iLiSmqH5q6X5ysFZpYLV94eKJFEk1mP4m8DHtWGmF5HQAujuqNjE6",
  "key34": "45MN1iuhKtKWoKn4QyyBmKLTM7okw6JMi2Ux91i9hdGWTQG5eHzjGW4dqoAohzTAqkqBUtLTLjLrrzpmqfo7X9Fw",
  "key35": "22HspQF6tJ7SFAkk2aqiVrdyH4Md5dLE8TqWZtzXqGvSBEo7udaZVqtLW24AiRfRukBLCC8gWdDDdWDbJnYGcPdA",
  "key36": "3Dni9nGg4fi24mdok1anHaDfxABrDR58UriDg6RwruUjKD3xCNT3GmT39W8v5rxpfrCofRwkT4bGrspLso1a5at6",
  "key37": "5BCnx5iBb2T4skkmrh4oDFaK6JpMW16m5KGkzbsem1gD6L18cDLeiPJzjdKGK96KcQkCQ4ztNYAokvdSJcmMbJ1z",
  "key38": "4gERkruGRKyxPQ4ECALfe6piS6r9afh5gDQRxXjac7xcBU2XcL8zdx21AbzXqtLX1RKUmZ5TtcQ6oQXMTuXzZmDo",
  "key39": "2HibXN1fYthV2PqsPQh2uJk3vZRxpTcwmU25WRXvcP3sB2R1TqvP6WPxz4rSTGJKKh9WVvZbp3hmk9jg4B7hRBbD",
  "key40": "2jCJ7Gxoy1XvaU6aaTMwdPKB88TkqxgZvEgqnEZEQiqeT7kQs651L9TX46ErZWdqbK33UhWGD2BqMNKtmPsnadQw"
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
