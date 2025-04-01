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
    "3UHyzRENeGdTGJkj5q4iP5UV7aLJxTW1bQauwq4iVdoJSjzTsV8rkjcpT9cv5x3DNSy1GhrdmeocqpsnryS1ejUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LM7rbAaCfJWUrx1atiJpURy6ear42bdGhZ8z9FPBYUmQ7CxmmZjfE9B4qatDzPcFuyJc8NEPYGKcVdeECYHpmH2",
  "key1": "qup2S5sa2Vk8TewVPUMpk4FoXofdR59RRVfbcCS9iQuGgcDHRby2YRoQeeLag7ojo1R45LA2RUByuZozn5HcH7o",
  "key2": "3hSGGVpTNaiVXMuuZcPxLvUSaiaJy1ouguPNjYH1E9cCGgUuFngs4B7QMBJ9tyXHAjEknTPpPf3cW4qJwA3jTFFr",
  "key3": "61UGxhU6vnfc2nYr8ZfzYVD4VxWGWaH93BfeGinZYhs1Zn5t28v2evdJGjZt4GsLisa8arqaMRaDN1FqMkmHV191",
  "key4": "5y2QYj4q3D954sygtWCBawem4avSy3fH5RZJxC2CBLyzWKSxAk9jXPbgSjzq9PHvCPR1aeL8L8AJ8251bRfkVysY",
  "key5": "4JLEJg6RFwRzP1LcMxgWKn4F7dhVFnTmUjknxYogr7QhwJifRygBfZ8kKdkohrikxTVzUpPin4P9NrkJBLBhnnf8",
  "key6": "Xm1UEhaHDLU6YYFqaJFWKhNxp8owuE87EUuwTCNxU6B217xMdxggAfqnDtPo1jTBLzp8mrWX7PZsNzQwiQEznQV",
  "key7": "2XTa8EUwPRhj5uzcsg7sXWL8G8cjzMRHZC2RKFUA1B7YozWASP5KaoirmsXrEEQiu6LV9RN1Sb4mBg9i5T7Qcj8k",
  "key8": "f68aTV4cmez8zw96CjyJj9eEpEhK4KPg7CpAPBAEDwpQWo2KdHhB9Z9eN6Xdjz2bPgLga21bJQDtDFm87k1i3Xz",
  "key9": "3syiKA9zgVyJiBVzXJAEWm5Y9hMkk2JaDWaCDJvnGjfKfbjpxMQNTJqxziBbn7RMu7rPshcXLfJbUg4ETDzGcgs7",
  "key10": "2dCrwojyVBpUJqoJToFxmvrLuAFujqC2EXD1QJTNn5S2kipvFyGvVmtEk3PxFcCNticMjD3QiihS5AcHArhJCGBq",
  "key11": "5YUeUsBQxV3UydxyTZkiZ7bV3fSvNkEMqURiqp4AXeRGUZzQ6L4ikHnP2co9dJMY9rUX9opcp92tXm8K8kxFTnVi",
  "key12": "33ju1LFvuUFtzw6XmFotSdypm7Z9wZpMim898CC89fmo33QvrqAHJNo2spPgypdb2TCnaGvtzNQSDR21TKgpHDSs",
  "key13": "2xs42KQSD7XpYkgupmmGY5BCsNq9qwvmaTaxPPBaP2557Y6gy55hMEmiDPggLwHxiDD5rPc5rG6HY1HjdDhyto35",
  "key14": "AW2d8hVP81uoY7ihPeqdbFioGtTgpLg2LnUZ8NDKkAW4uZwPDDbHArbS1nx6KNp4tiXa7V1JKnpY3PSSJ7AeoXy",
  "key15": "3GFmy4C2vcgrKN2bCvzqsLNsTw6FbZGyk16MS4JsfbbFE39jzsyYn3T7MA7xudjXvP94LG7m85HtggAK3UdWNtMf",
  "key16": "5zvicMMt1o2pYzFy5SDoF7KNXh9emiq71DXvrrcwFyHGT41AgpPYFhbKvQraueHp4AFCmHc67Ht1hjynHB7rN2oH",
  "key17": "sSJKeGfUL7ySJ4EDG5bQcMEkGXCmPgiLXHrPFTdYnuMwYqhPG8UmahbvszQagfMAHyBCrVTEev1neAwXCb9ynub",
  "key18": "hbHT8Q4ooP7tALE8DLAYthJjBjifBVPKkLrgn1Yr3rXj4BX4xfr2Hgb2rLDDigrNZzGfPvryrzaw8sse1wcBCec",
  "key19": "yAbRPRW7VZ7jVHK1ge5ppk3rcSD8TH8sZS5oFpCeu7fMoTFHHLsxC3qzrTrPUn2NHE1PT9m7ddiT93rFn93izAx",
  "key20": "4Fk3YY5r6roKMJhyMhSURLFbxMDWaYggXZH6SpwKJkRAdEfQuGxB3o99rtfmTgbQxsuuNxLKJ7cZUHs7wVuKrqek",
  "key21": "5FKeAPUVZNxZoxMfvH4mrzBpn9xmVM6fMgvEfbkF28N1LwKkJX6ZfSidYjBGyqkkpY1DiGcWdWxtmRntBNK7WUrQ",
  "key22": "4qh1n6rLEgtmBa9kmYCCZDjQPCtt8eqXToN8MxPfCGamdAgJeMBhRPWMgtdBUtoD6NzvYrJttu5guFs2dLifDLeD",
  "key23": "51RsTxoTgqvpyQPwkENe2GQfQMcsgHWcdedV5Vh4rrfqwLv2175Yo4iKdfs3k5QAwxVDLMitTcSznLacZuJQVcWF",
  "key24": "5jEd1E6KUjeqNPGFeceGKvDCewXn2zQCNs6zGEvAnYW69m8KCeyZmy2rYwyCSAsaGaFxYbJUwELTz2fr5tbzEXDH",
  "key25": "2Zd2B5WrRcApbFTp74ayUEsDFB6AF8tw1o41yPM4FBHapxdtPsAHJ38J7ap8rA1APudjEx1vGGW7VEZtjNsaFJ9F",
  "key26": "SQotvDqb1GhpKBQDxrLscVXp3Eun1HoE8Y7obzLbhB66awEEVFZYyc4iYWiS93GtEXXcUGzn2wt6va4vgLRbtwz"
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
