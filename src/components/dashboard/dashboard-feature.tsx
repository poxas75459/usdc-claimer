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
    "5rAMGZuVjkrEhQxvU6xvzVYpoY7w3mMo2EJnFHBuqfi2ovqdfS6YTB5g8N24SKJGH5g9iaF2vJ48jdQxRY2nzNXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yva5XmGEfVbZmN5BfJzCrqikgxFPS6hCvNXJUwwVE73ZeSmPEBveJj9yxPQAUF7GMQBVKsb7qZKZpPzoho8tEyP",
  "key1": "4qQyzA5xCExTNQnzNa9KLvjpauUQAJ1F76vfm5yn9wrG7osfX4Ax3ztyPqxfr6CiKdStvHn3n4drTrbmtv1CNvbj",
  "key2": "U8aPmajHcanFkgXwMstJ7DBUNLTivHQm3rJNFLeUtpY8pSC2qFkX63WcCRfMHdBSrUo4kJCrGBf3x2rfmHRZton",
  "key3": "4wpfJg4PdJbVtgjfcJajdLDtddu5F2cQEShAeJG7mf73wB8Qf7eAmWvPh52zABng9z3M8zWXqd8MgNo23t6By5wu",
  "key4": "54sj6bYUt9Yb2F5UeLoZPVxGumd7BaRNWw3nARDR48gycrftCgLjg3KbKjgdjzpCf8kiEKDs9hxoB98A8J897rWK",
  "key5": "4wCSNrxpbNHAsJifX6SJKq1SZBx7b2p2XJxD1geuFhNPXHjMXmqJojYPk9YYpFS5BH1m93XzZti5VP4nWJ9RV13j",
  "key6": "HMuzNJwF64ZYJRSWXSJF7Q6g3oWvsvvNfuH1KrYjZqG8cRN1uiB6osRboPi7ETF3xqKhqqP53GZk1LvcuNSQXYX",
  "key7": "3wzT82m1bEeFE1h2XxtnGZUdRoCnEkySPVjj1hz2z7SJ3ReUTG2RJ8FqqLxU96gxGsVNd91eLADGGjZ3BhLuvAZm",
  "key8": "Rg7mypra8fZZhn3zrddCEYPrZ2CbfUYERnZMwjnCEvi4QbjzqZcyttg5Jz7WBy1sZGr4sjSmtyQvHPnV75ehDQp",
  "key9": "2TXhvRQpjaraMJsKyb3zTSxGrt4Lv7UgWPs67pVjTsZQTQhWohjCAwD8nduXBxf8j3AwYnGEFfNLvjAcnrbd9QoK",
  "key10": "48kzLwoYmB1gRcqCR5DZKeyJHcxcLrLdj6vie6yypmDgKHHbh2J1CEpTrjNrYteveQAYUNKeWWXAcdKaAcnJq6j6",
  "key11": "Kha37uVxFCt8MB8dxZqovBpKxFDK2kpVvwdxVdETidowQGUx8BmwBuwci9ARnwCNYY2pYfBMsirsmpdKZfo6eSs",
  "key12": "8SP4nkGGk3cg3G9pPZDbov3JWGdfNrUAYEpM4k44syoZ8ZAdgAvVzSE7D4LQmyss3D3dBKGt5a3StJAVLAGBzVZ",
  "key13": "4D1CPEWpZ7fEWUvGyweR6yPCp9gqYbBveprV5EUDktnMN18Nu2Zwv4JRzsCDd8zoaA4rdrs9fFpZfwYvpqwhFU6q",
  "key14": "3NLiL35E62GQJe6ML46QSLVqEs7jmYgBeqtdgYLMyUNdBdVQ3KhTFKspz3wdSpbiMr3gi7qNzu9L5eiKJAqDE9Hr",
  "key15": "5fgCpgahWQpCZihghnirtt8ZtY7Fd9zkkxXSuTeLXB7CCY63AqAxrHtQhwMbF4fecBYKB19SexQ4jF2fUF1P3gNd",
  "key16": "2fcD7brGGff3xXq7vw385YpWczwsMQbPib8151fcXPhze8UdmA1jPpcQtLACPZ7u1chjvLnqzqGxVuQPbtsRfmKB",
  "key17": "4DYaa75J6kPGGDt3E62VjYinfKHiE8dK68NrJSAJMzLQm6ZRwRfqyarP4LcVsC7kpWZ2vHQpRTPpZNqJYdmp7F2P",
  "key18": "4GAezZ1ZfAU7eFQs1Zjy8hCWx17Gn8P4NZETdYPuUS8eSnZu2N8yBhM3vvZ9E2GAGhy6fxQFBSnPnjSV2wz1kQkS",
  "key19": "4J3mPZ5CTErRUd6DUgmQ3EuSjdaBvVtEP5C8eFqEPX3n1csv175P9wfFLeJ1wMWBH6V6PNFymQVP3LjMiyPNjkZ3",
  "key20": "42Hq3up7h9gB7217v6fpJszwsUSZyace6QpaoEoqeiTMafqfsNBcL5vrVX7mpmnYQ8xuKLecog9X8viTgHH9Mpns",
  "key21": "2Gy9sVAAtY8fV5vNy8PCG5MnitYoDGdUszVXBB6VL9JpChZgdjFxovNNoMb7KC5onCRYXGoyfhPMukgU2UQfQsec",
  "key22": "2AVwZgBQqF9WZ6Scgn1m4BAjj78b35axCLXtN3o1zbjYKJi9D5rwNRdNYztEPfmBsseMh9S6SQqVAqbtikH9w16T",
  "key23": "4dhr5DNRMxHv2y4VQrMsVKeRs5Qz3CrZWrDCzGuskktAtgWKWEfGXBnrcjHoYbzeCdLKFus1vUrLtPyTYovUH33h",
  "key24": "2HX5PTWRU4j2mKs5jmgtfdGJKbAR4vvv56nxXsK3j6L3sHCZNYmpikksfsWcqTLHFVuYRB7nxDSLpwCHzstHYYN4",
  "key25": "24sicY5oXBz4hvMNmVtjYCAh38WdMqCWG5igmXes9jFhuXeK9UPGsWVDJyL6rDaq2t3AwNdXX8vYa6mCrartrg8X",
  "key26": "3BBPTnN6iH1LXMdGEm9evwwDhY88heNzxrv968NAshZ3zoeVmvNc2Qc2SU56DWUKpRwmo5n1K6xCjGr3ZpKrycp8",
  "key27": "67ThVqomrsmTVLcrDksiM3iQDqtSCGviukAYqEQsZF83dCesw1ytijMdKYigeok9uYHLeNeCX9qD8FNP5R5ZhTn1",
  "key28": "3AAyrLAYVQsvrU9DZPTQ4tX2TUEEtdifdGGrQUejhxdpM3U81vYLU9BQcv9DPNuSyF7BXf87QVGKZtM8eaPE2yPz"
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
