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
    "647rEXNL3kZ4uAkksu5B8ni3fjGCCKXpv2ht14bQXQLMhoJbucusGHHvKAFfbaazQANB3WG2vWTj1R4mrDTz5FFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAdV2puhReHvPitoA9mxXVGrWf5oXRGY6k2LRUb9ZS8xerUsQLsvTiog23Uyzsp6yEH1Pc3YbYzvj3gtcLt75g",
  "key1": "5z14wXigENd64oExHQLdFkyEyg7KynJzhcvNdnmfQWvk7Qu7tAbdvUQc5iALRNQUqUdaZuHfCU8JWbVEXo5H3se1",
  "key2": "2btEv4xyfXnd86Q9PxLBLDAkXsj4agCgNmarEftJDFoavRVokwSvHfaysAx1vC5cw3TNemso75FWWjb5riEuuXMV",
  "key3": "3PcjSvdSs387yyPGi5SyQudRqYXxpijjy7dd6MHaZ3MhxJxct6S96KEw7DeXVD2hBhjh9W2446Gqx6z9f8QECyYW",
  "key4": "pFEaEezQkayoJzD5jwLEaHY6va6vKguoZVgtRg6uaSoycF9tNenHX9HqS5CajdmAmXubLeBrxD4QD5yXRx5YZQr",
  "key5": "5Wg7E7YxX4vH3PXFjEwYwbzppv74oaoaHfRhY2iPy3ndi7q5qjb3cUnuAKc8FuSJPVXihLqe5oFJHUekrsCeV1of",
  "key6": "4cok8Cn94k2q4aTzUrTmCLHd1NwfR8QxGoshsiPCCaJgRSZUVSWT9Dbz5aWEf91xEcgqnSSgieMm8KiNWMWcD65W",
  "key7": "PtnjkUSLa8YGxMKvDTsJerLjTc1HSuHwWi4zgnMuUSgTx2BUH63wXLwJFrwvWiW9pgusZ5UJP1NadvdXSyf9XdG",
  "key8": "4bQ8dfLAaW8RcAdg3uZ23cvLX4c7jnGZy9Tx52EwhyEwQb5CUypVLN3EdeUxJHcv4dvwuzCqJug9RKih1ub5TifC",
  "key9": "2tr5bhQaPLWzJMcvWHPkBLmjeiMCZV852r1BB4tkHZH5tNpUbRtjkK9b6QFfDEzraMhwTAPAgvCia3y7Np3RZRc6",
  "key10": "2Uu7EqPkHudhVYCvXdJuPoEbJxM52BSBi2DrUePEgdmyFCuW7eLoFfHsxLQ3ecasLn2wMsqseFeMtWaNF497JJKN",
  "key11": "3rdKTMsGVy2nnBkLdKJcjry25ep5UvUjiuukvn9Gx293CCx5vbuPP8qSpsvyqzVZFgj4VJbEiEk9WQ9qEe8DeyTH",
  "key12": "3G2sku94rkWjAuaDbkZ5SsrYyvxrJ7UdQ1jT7bixTh7okcsbxZteK2dY5vgGT7FX3yPP68XbbEYJVfiwGaTnzP4c",
  "key13": "5Yk6sdDTT25iUesY1trJL8cUba2n1gakds2UFDuBqMT8qE9fJVq65jT66KD2Rf26aY5wyYJvsxvyT3d2uYzxTu5G",
  "key14": "5pS4iaezpMCwhBuN1cdezqL11Vi2LzAhMmsYqXgwvw7epBGjaHhE7KSCHJU1rjjiBehjVsH6iMLcvYx9wTDjrMS2",
  "key15": "2pkCodRixqEBSCRWuDeWMi7CHWtpNW1f1zjny29P12L5FKrhDi6HCKPLAL2x53TrmTvBb2BmAmqRMCMeebSJrFus",
  "key16": "3wrLwQ9JCVAtXPDUygcZBhE93bGSiswEn8wxWCuXWG4qzEVqWZMZTLbssrYx1HeVzvHvgvSZ7G2R6LLVYVXS8qcp",
  "key17": "2RYY82FaVLewG2uhBuuMfB1dmunDgnHv8KwGYcBvSqGrMbqDEc5uzEF2pQ2bzN5uRAKJTi6VDAeQc6CuVPoRCLwx",
  "key18": "HEwrLdGw5wQGiRDk6yPzJYiaJT6Pv9SJQ6G2o7n3rGVjZkwTznZzMQJq4QztPDnsSyQs2frjq8phHbyqVBxF3HF",
  "key19": "23K44uz6LhN7nwjxXXBGhAMJXoKMH36E1pRseMVFuvj6DmP9yWe4moWJByakvpTbuCnebVe3rz5XXEGhsVwQ3BmF",
  "key20": "4CrwW1tFC9drVh8jpEY81DFHs4899TvmnHi7h684FnaNGfK36gxac489tpDumuy18VvNEPumMomkEqR8E5UJWFG6",
  "key21": "2h9X488kypntKP1dpUeQVbLbRYFYhMrHdnsHecR8fkjcuDkWX7U7Wv8wzpCHgCUqhup36vK1LbGkezv6KsZ95FqQ",
  "key22": "52zGsm7mLZ4uqWqTyqVpGfL5AWxZvavkdjM27JJcp98SCx9Uig7x5HXWPcFqfPfJpz4vML35jKDSd8JyDwnJVoXz",
  "key23": "2mVHdYK8vYtytB9h7Wp7L7oXK1hwQBa6B53NmrnAzmCV8ziduQccQgZ2HoruD65eWdVLbq1dziGVi2eGtWwHQzkP",
  "key24": "57L22eP41FimRRaKtEMhcTkU7RRzsMDV3xs5wpsPPAwv1tCXdzHjMJUQa8SPWcZ93PH6TZXFNKit3odpscAMACEf",
  "key25": "3mZ96n1fphtnh5hiPzNdz8M8snRqWH2yYTN4UBLqx4qsbDEZhw1gZSiXsbBmSmP22WnFPkYhyJLWKc7aPqMtsqfq",
  "key26": "4JU3mTW33a3a1aZYa1L5UCFBkCyKDaDojbE9VHh3C83HcJYwXfboZGNTyfRPfUG8ZjbbCZYofufCE27Nwnyyfx6N",
  "key27": "5MjyeQexHWPUFApkP6oPnGCGKNevBrHCqfgiQkSdfPXnuvUUdAAsNjg4fbewyWYsmvwYjmRyRF3woRC3DCi9GG9v",
  "key28": "3n8Kqq7Fq8FDuErMNi8FTuH52QkKiQfkWz6AJL6aRQqNdbFZq29j8QUmtv6UXNwgd4oYt45nGRrYcePoqAZ829r1",
  "key29": "4gRTekQTm253xX4a1jqzcWsDERvyixhpMp3cPaKe6qgnxA1KZg8N7ne4QsDj5YnnJrCv6uKttGruoWuQbF4BUDQ4",
  "key30": "g7UfN9gVqPjdqeXd1TyYD49Y7LcgLqamdBRLkQtpiWBcaC5PsYsn1nx5gavSHRo7WbBUWNKHk5zoAtL94Wtknxh",
  "key31": "3PyiKxVm7nbsJQdrQd569judng2DELx4cwvGjKFvcZfv5BbV5d5LihBRbwnHG8CaKiGgED8L9wKrotk4sJYw5xmJ"
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
