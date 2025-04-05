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
    "24oj5d1BRVyRjNmSn7tERoMmQusTdyRigKQbHKoSLRiFRfoJYXfc4opR5ENXWwAXy7CFimRNLxwoPupZmtpoiaqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uEE9DRc8c1UV9zg5MZUyv1BNhpYcdBydJDXpUqxMUQ6RKDYVTTztt5oGrTD7hEorfh4m7gnzEB2YiuRcujku8tG",
  "key1": "2KvgunxMZCJN33cpH92uCkqpfQb4n61pLYtNjpkHTi2DCmNTAWAhhq6vxXrU4MRdmcAdDAkSP1eminPb5PFqmctG",
  "key2": "4e6UjjwNv6PpRTmdcwgJH3qoNjnYDcJKgNcDFqSUsknrHKd23qMNXzt7Ly4ivTT8UsRGeWEet61cszWnUU97JAJb",
  "key3": "5jF9tqy84EipSJaSxFrVbpYVBkbGWRJrx4ryeLBZwYkppPNMK6Ue4TGFRBmMx7w1yxH7RGcZSGXL7aidWsP2ZW9Q",
  "key4": "4BCaDrvTbVdMy8PyeWFAkbWVng5e1hTnVccsVNf9qVpfkgHTFnz3H8p1Ww4dmfrqaxaeqxSps7rkqWu6WjBFXntw",
  "key5": "4CYpwbdH4B4GA5a9QZEzMUwWvm4i3xKJj1TKAZadZX4pbd2DKnPiNrBhzgrDEdYBCjpbNLJ1ufUaFxQRtZv1f3LZ",
  "key6": "5T4wAWsA72ESYfahFiW9tCf2dCAYymQYEVL3C4b8fQQAWWYSuCSH45jieM6QzmR8E5PvmQP7WvykDbqnZ4AQebYJ",
  "key7": "3jE3xiQzJNe5p6Lmr4ddA7yHgkpdhTR8LQpQ395QpCnNK2WSvwGb4TLzmSjNfn2rBZwmEQhHtygmTrCiHryTxfnj",
  "key8": "2v6V3BR2BTEhpLK2JykzeisteBCYAnQtJujis2aerjw2jvpHvqEeh2DRQPfoYD8PFdoZb9rLRgZrUA3khfwF19aZ",
  "key9": "51FShGeDdQ7wpwd75z48MkVhMqLxsC5E9mTU6rx9uZCdE3bNQEwbbH855qb4yhTuNspYqGwmrgDLsTpw2VrXEqNs",
  "key10": "5vrLcPaQ8N6ckkVo7DXxPHbQcUwZTrqB3krD1fhenm8qHthQsTn4ix3eT7w7KEwyrjPfjTgME3AqCvgjLrLAyhT8",
  "key11": "4WmLtDaQNBC8f24JbGNoDpUPqhuKVxAtPhqvLq7ofDRo5qxdA9rsvR6gyZMsgUW3qxrsgSvHcyA2BNu6qGXyr75v",
  "key12": "4rcJQgk34ScTWC6SSWrBQJJtYDtkpF6sboXKxBF6Tf8agaLPZ6BU1S3xj2gn9X5HkLAxFYLsU5J3uygsiRsDxtUD",
  "key13": "mmJdR2mpH2c76kPoL7YB4jvGMLWoZHmNzZXd2PXzV2UPhDgFheF3RDzmEgLPF2UoZ8pXp54xtHXbzu1UeKxCLUy",
  "key14": "3ENRGricZq7dzqJt6PKKtf7n2Pce5YUd4RcpSkMdKwUZMUTLybpLjdZ6v5QB4fjzSkB7D6fEeGqGrpR35FX8nRZP",
  "key15": "3XkL9ymkM6SHfeG9vFsYUn1XTv4Nn64z3rGWZUH9C997AznqN9nfMB446DiQ1ypAaqYSXK8J8uBESnZvPonSG5Nr",
  "key16": "qok3Xcpz89kAK9hEfeftAb1C1vsgEqJrRaBHHYrzCzn6h2HPr5Rb6af3UPuTVPfm6HsohC5wvCRMmUL2KoacwUJ",
  "key17": "69yGxKmc54c2Ts5vaADQnGR8RP87kbWKd7iZMEuKgazCgckPuhpKTPn2G7DcEhd75ag7E4N6ApZ4rj1mXqRqFe2",
  "key18": "38KreFXpQTdmZNg4eXviCPmzTxmynbcwKnBQTXqVNNxKYsteQMbaySafdEGgJpbvwkHXkpsp6Hhqu3ubRbHaukd2",
  "key19": "3KYjT2kfixyeSS3Qyv1p95aCDSNxD6M63Y5xJNXXaT8qdTLcMWrq45ofNPwHDSoZCBQK1hiuNHzrnwmpcNbVuVa9",
  "key20": "4fqbhH6exVwJU6aBSZLe3U8B9vcrqCB93gVBkBk3QCCK6bQW2tbJwPrrGGg8trdGFNvAuTo7sedqhs3kZ5yaZBQ2",
  "key21": "21FGMAoaGk6RG5XTJwaFr1MMeqEQfEMN6noYtZfTVwYDMAPBa9T7Av9URYW6PevaDmPnJFftjiQvMy1dxpqxLwUF",
  "key22": "5WQ557ysg4hc5q8E7XzEvXUoUCS6o37CMw2dwJcwiYKatFn7xJJr67qFTfvN1jXjHoRh5RREtM5Pha4DXWiyqE5W",
  "key23": "2Lj8DKKTzgG29ta318aVVjRzAuiKEiAqxM2v4uuETzRpZiZ8tQx3LDbfcs9mo9oWeXiTaxY2d32me7aQgx4od8Lv",
  "key24": "2UaYRCN4FzqovwvL4fneQQXpfoNHUsnSxiHzQ9DDSdb34kqQ8xERNBpdDEqE8FfeaGpFAfwysnc7HcXHSmxR7W4Z",
  "key25": "5kDAtWtqKCmFeVS7mvTP65JuefL91cJybyvfi7N8SEKrFy8hoqhu5s3oi12bCQQ1rkrmKvnBKC3qMj7ESJaBbWe6",
  "key26": "8NEgBqWDZpSaanFSgS6PPBSjnZSa4gsasPxsBmnqAUwUQ4wr7sn4jKBbAsGEbDjH3sJJrAw3Qt6gv6yMg7B3EM8",
  "key27": "2D8rR8GvTVK9TP7zkPqqhkQaUdAQTgW5oboWzD5DbpyT1F1sMft837UDdjH13SPfSALZhQp21uVMgiuCuvyFA5A5",
  "key28": "38g1CGNoMYjCYaCWSTGRcQMK7m1WsLPVDLML62uR2fDSkdJz13sedzWkUmJitU812XFxNGEKh46K5FKccBaJfmDm"
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
