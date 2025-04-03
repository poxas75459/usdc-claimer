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
    "2jrYEV95LGLpfCjRn86k6ayfvVbmPr3rtY74UiJdCs4Vw85tUgpXQG8n9xECrcYmoRpRJW3BxneSzNBjSDs7mSWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SfCJwFV39ZcEqkYx69QHD77ajWLUJcoKy3Z5Q8t8nFzCbyvppEQHHZxj5VkoS4n8pPhfXyAMvi2wbRFMp8XKFJ1",
  "key1": "4xfoLsCfLiCPiLPocgcaYCzWnuKp7AyRsAeqW4zK1qoAEPvnpdyYDFHtfMhaJ3yj7jYmbRh7ixTL16udvuTDrkTY",
  "key2": "2Rgz7KS8D1ytiLdux8UgJjZd3oMsZ6MDVWNBKzdMU1ro14KTnhMgr1zE6zutPVrKoMYsYaUx73CUPmPyJqNSs1uo",
  "key3": "4KBS8Q9crEiQGmeJvBi7r9ZmaEwKNP6yrWgwgFQEc7TDPbnSdiir6iPhaBCk7KtuwbqUxiLcrWPfTyzjppRawSTY",
  "key4": "4BxjL3j8LBhRFF9zD4tuW2wwqffrn2FY1ML3ju1wSJ5hi269HckWio75nL9EtqVjSfZhWCwfphnhkVUqe5Mdntcz",
  "key5": "67ELcRnBZoLJ1dRhR6naZorLExZgJU6ncZQJ9fgdJ29FXiCysQ83RUVA2zKjo4p3XEX9GR5w4H9ZTjtTzB6ntUfu",
  "key6": "2uz7eu5xRWR3hVB7f6yrspFbfBDKmT1ZHBAchoz3DqM3gB2E8e6N8qKYxwMmc2u958XZrTV4t8rj2FmPE2MS2ZyZ",
  "key7": "2LAicWHQzzMgViraLFRHMS6R66uRZ62Rx5hVGi37uPesGsKVDuGY7QWp52BqGz7JQrCW8kjTeKNjFK1vjBHb324T",
  "key8": "5xDH8KPqbZsu1sRNNyZh4jo5FohWojFAGEVcQpLLcvNWnXh2UbbvnLe4pnV2Mc1JBcToSaVAT5T8tVPcY9D6E3rz",
  "key9": "2pcY2yiwKMe9tikJAeaHmzjgSH82uTumDN9YKiTEhHG9G5GfYmWwv9S6QjyZsp843vj4JwfpfkHEBcva6Z6EJViE",
  "key10": "2ggT12byj6cNpcdBYb3yEtLJSWCaPqrpdrTeQdeCxgzv3qfiWtdjetCoWbZZGaVAjhssmDseRX9zqB1KWyUcnUaf",
  "key11": "655Sp11m4NL6RjHqcZQnRGENBnfxnHdffonjnFpsBVcp1yXgzfBufH1S1HjQ6C5o3ioGG2sbCr6TysrZKcsz7YRJ",
  "key12": "36quVN9qL8uDBvUGfSkJSd9ELDWa8u7kDKqzSExKR23yLDBrKPkJequ4qf1QRF49N3rW3Hifo86qejQuaoBijhML",
  "key13": "3DaNnkuHenZ7dbf9DcJzCkfhdQ1Dx62P649WH5retx1WZsfwLBmFYMbZMdz73faRXmR53tC9xkE5WRstWwWWX9sm",
  "key14": "MCJvYA3iqLvUSLyDoiCYYMynUiELoaFPxsBreUTR19HAhyiGJPSt87Min7WdGp9rEfSPBiX6dYVeC9RKcXJxdNh",
  "key15": "4VVehCxBHTzkYSPoMx4WSJymepF6AZj8YPkctKj77BGei5NXD8eHXLG4x4FLujAya271m5jewRcTS5x1UKqZWcuP",
  "key16": "X4ZeD28QKdvDDvxkABEg7yUXeh11qyWKL5monaM4F23XgJuPtDYD3htNcqQ6Xy4FKgJtXXKzXPtzJzgmMFUM8tq",
  "key17": "5u8PfLvGxCThbDFj17CikmwtF8dK12zMAJ9G2mnQzNCxxniiC3Jyux6GnN76cqogjwovAtYVxb9bp96o1pKVEAMG",
  "key18": "3AHVexHH2oRjFbWzwwidpcSvaqXt3JTnZQwuZKNzWDXbNgiByVpXhuXW7dE5X6oYE4A6ep59ysp6uZCYTUDecQvd",
  "key19": "bJD5LuH1pjjhzQBv7YbakkJT8Hifcfr2SK5Ne14y7Vt2H4rsjCrW38gfM4VwSD72okLnQTYAdPjad8CWwkAh3zZ",
  "key20": "4rqy4tqG4qExNvF9i55pd3yTdvq1twFqoa2Dg2PKwketP8LMqq2Fzxj9vzHyQSC8uESLgdWZBi7njdw6mVkzKaje",
  "key21": "52gqPccYRwzccxhvyQJoRnRSKzUr48fWVYCUwM3U8xVjYJQJh6s2ab1DPLbNXoEy79KDiR5p5u9f6nnj2qBqK52K",
  "key22": "3WV4L3GSWhHxEfjooVo4FR86R5keLmP9haMGm64sMRoYV3SfvYvMp44F2G9RrfBb5rThL8iuiZbdu5hkzYCqcLkn",
  "key23": "qHzxWjWyYfEwPHAM8dNwUSfHngHL6y3yzmRCTScwvJhkLUW8vGznCk5nc4ZdQjj4BvivxGPfBmwViGeVLuncpRs",
  "key24": "545vCXpsWS9jbo1sjCNSyqVuTD6zX7ZTE2tnwS2s1f1PVPE62PMMNdXCQV9iyXcMaLuyvi2L4g8NJHPDhJWjFDhm",
  "key25": "2KoUqd9qbdxGU61aiy6qdunRfpoQ1rUNzvbsTBSCVLKJcrzmmbfhQhc5pZ1mH7d9TSq5fo2PzRBNqCik1qkJMBhJ",
  "key26": "5UBsyC723JEmfBc6hcfvKc8FEHKnE8WpSfwTQdp1s7hQKhDoE48LCsmJ8ZncczoV2Y8QVoNy7usVEByqPXYWuDhJ",
  "key27": "3AnJ7jXjwkAG5BSAFS9Kcm9bfhyhXprRsLCX3PMEYcJG5KvFD5APqccQmCgkgxDzVqVKevmu4XUq9bo5QgkTp4p5",
  "key28": "3YFXY38mFjz6TEygMoABYdZUrELFea6dGVd4KGSzNNPhQ5HsUxmtqAEqRxPGQJV5fArAKbjF7oDSPLgkoqt3kjHf",
  "key29": "2bYAFcEU2qqWUHyof8VcamvyN1UjRoqudLwc1pctgnH17dVS79k76K8Dw8rcq7qDf5cunGnRX2NYuLfKNyuLvj9y",
  "key30": "4xG5N6CHwhPcg7ySwUo48rogfQksbphQK2MMttrXvE2YocnNmtQvp2kZUyY7PLyiMwTR9w4BNNaEtjuxkb4M9FEr",
  "key31": "oN7X4SqLbR3AMJ2mNQMFd6asmBpu7a8yPQCz14jJoSm9fQPkak4Cg6wKqpanvrbjCv362e5R9UR2bssXPhUARh8",
  "key32": "5SK5LacgSCMVr8h8d4XUDdPyxrpSHhRxSudhXtMqGKTm9Rqg3NWGNMVcGPQSBtTuwFD4WHsrYQnF4inWnseUvev3",
  "key33": "5BYudkm1rsxx7Hs8TwA5VyCek4PKci564hen7MGMVdnpCfKb7cgmu5aS7nMssQxwptPiQFBMeHyDCqBYQ7Qmh967",
  "key34": "Vj8NySKq6otGEnHkFRG4V2kLjxEY78pHAzZjUExD7CzjbfXrPR1SPF8gETn8MoLEnsTmLvrCHsSny7bRreqyLJR",
  "key35": "427MqqYgg8FdxjdRqe2T4Ric9icED833z4c5AjEVAA6LtwexdNfYWJJPiBueA5yhEQwRgMErvUSQvp7KyBdrbbG5"
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
