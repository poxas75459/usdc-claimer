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
    "5b7q5GvKNSqyFVHVt7yLLbyBpqK68H6hVLvXdiurvZ87B6DA1LS3QH2yDvVpZH2sMWmLtyxfpyZvVVxiwdsi6Zp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RaKu62PE43UysiciFXs7u3kvj18cg7ESZgLENz3SuG3haig5GLdkyWHggMJ8M8pUTLoNWq5P3pZnvEk91RXhij5",
  "key1": "RqPFVehdA1eF8z6ZEB9YkbbJJB2sz1VLigWgNARMN1aY5BZtxuPrfJMgNG1oDKPFByAUe1qX8sjxMqr442Ghuu3",
  "key2": "4FjjxHeAP28j9aoT7wZ4moRTpqf4oP1M3KyWYqeRNLcuve87rf2E1Yh2gtjFD9vaTD4zwgyo2ZRWHJ7kASgQf34E",
  "key3": "3p7VhfdGzmgauqZR9H7hxAmEKUHkc9jv9We13PQz31Rrzzo1MeU2DyNnZfdUVChbmMw1mzbbJGyXwTHEyDq7rha",
  "key4": "3ZC6TZm49ZwSkKzfKg4G4eNZCU19rFqRhsQDSMjMkjQors9QPNk1J6J5odctJpbkWSzvWTuyfPA2vLLaJ48bf81v",
  "key5": "t85qT84zi82xywgwVviCZd881JiwzPsg7VLJaAcuFFLD6C4r6s1R3WMXEL2Ljk6KKnUnPEadA8z5TFDdVqpx13H",
  "key6": "3MHYZe9wb6mArKcAFwwwdCFHQNHxA6UAUaVUfKgkHMXYdSajhtCT4wddfUzGJRQb91WSwowrS7sA9vU1LLjHZCip",
  "key7": "5nesmrsqwsTbSj7bbLWQLWGZTZxrDYztZ4DvVo3BwTN4r8T8iXmFedZM3Ce4Ugv9QeHSVqxjLPUf5j4CUBsM6ZEu",
  "key8": "3o7J6FwhNH3jfA4YxMRDApX1McKcqr89MiFTmyFWB895tSTNwwevrZEnQWQ41JJ2Zk8EjqyXnSkSUUmsj77gA1wx",
  "key9": "PsuHxYDCtrGfxEFnn8gRn8nzyBc21CjaXKaHpnbrp5AAS14EmxphSx42FVDbRGCBHZiLygkGbPa1vXoVcsuKeDk",
  "key10": "47xjfJGvTJ8XYqwkSFe9AahQrfW1E4KhNhPapSz5shg1ySpLXdMFQBVTXtexSpX4qJsGJUksyimTyNuF4EQBwZeC",
  "key11": "5AcvNsGvej2oohT9oMYV3SUZafAcDkfYbRCVjsXs4KUzDm4Uyu5GS5vTE4d2moQjJy5GDGAF67GkXCjdA1bPnxE4",
  "key12": "4gN4XkvapfxsLSbfbvDDFChcRH55zt7nWvY2xWWQNRN1rjTQ8nzu1QLeZ8yvHnJPH568xiEgH2XLTQzqrCepkNFP",
  "key13": "2v7o8RkHE3nz7tPH3tubzpFTtCdNoAvooBhKPPnxknzKcDfYjLTRdE8GpjNFHwTnArNB1SxNihoySfLdKedPEMNb",
  "key14": "2GuecuffqSUQtQQMuKSGLbZNkGFjpip4XyR6XWQi2j8wzGeeMGKs4nhrRfmvAoSX8vQ4unZ5phZ9zEoDuzWSRbkT",
  "key15": "42HSC4EbohrjXjKX456czC4tzbZwfuVTPZDpFjSm6er79Ku5XKnBjmaKVX4Q3WFZJ4grpanbxDprHZ6FBMxzH5qP",
  "key16": "63Wrh5GLqRMwHcuhoT9qYikwP35gRte6xJteTgrDnJ3BFdQaK5mmUd9spqEQ42hSpDNx2bXHErS62UoUSFV7rjbA",
  "key17": "3DPpkaQPYxAb3QQhbgFBWc8Doj17x7yTQ6X3dzBZWCkYu3Cua3oAY4xfUGzsMLFL88CDiQeMnQuLYEEx1esV5fEi",
  "key18": "55XteRStiJtJrK6jNsZUybeSTCTkQdS5mCVUDKUdNVVM8bPSuQCGsjxfpC78BXDeZs71AMFHBvEfwe3RKitqAx1M",
  "key19": "5jfbuWuUYosh5GYqgNdmTYy4U6hRsW8W4opwMjomsB3SFUBcA8ygfHiABX2XSPfvhDNVqDwDriDZqn2Wpbsd8pCM",
  "key20": "27rYb456q1SXEMDvKNcbJHhiRYRS6yGQNPEuuwmDLfeV6vnKt24ALe7FeE8r6Yn6tSJLMmbHJio3b4CLxSvLdhpn",
  "key21": "2L3ZRXkDaRhz6N5AXCQsy6ZAqCGK8qmPCCp1XSVoP6CzPeQ3YG7vncBD3AGAHan8RKZSDZRu2FTJ6zv7Vmb9Ngxn",
  "key22": "2j3NFtMvGmaasjNejrDZ4oo9BdR3M8jCienzURgoysZvLHWNTa9hRq3aKtFnuhbN12wZxqr47BSemMoywY4Xsdba",
  "key23": "4xzAbXxVc8emeir3SpoKohMYsnTQ6gX8mjo59jS7yvsqoywU3iNzPWCN8zMyjFk4SHjbwCrqp1tS7pcnBLG9Fsps",
  "key24": "3RiHVEdLsjnoZEvX4peLb8Js6d75tZo9kj8JeweqQXAR69j8MF9Q8ZWSGVmaH24GiDEj2yaDW7fcpCYgzSDHK22t",
  "key25": "qZU22AyEnh12KoTnZescjRQurx57MFYH56x1SQHixRsg77W5c44DmLhKvCxwgvg31YVk6gHNFwNRZSE1eB2X9XH",
  "key26": "4FQhLoAD6Wj5Xu3ZQ8hQJvGtz3jgryDZ9oFM3yXkDjAkc2dXmdSZU9SKQLTqxHD4g33JRu1RSrCNFuWHWg8vEcfn",
  "key27": "97PrD4EmgoudD8yoWZ7JxrM544wQHDjdLh4MQsJSn13BxqfdF4ffHFqhmCZ31FbQC7KczPkP4rMkKgYUDe8Vnkq",
  "key28": "AndhkM2ByZbjEguxbKuZxakbFSy9D2GecZakimcVK2huKCALcN7W8TwUVti46xNwbpW5fPoGjBcpUav5mkemoL2",
  "key29": "3EFa5HGynGq8RAccM87hPspPtMEdjfM1uKifKAUsWqPnbzmPZr2EPCSFKkCLaerUWNhYVG334D3KjTJBvArkophQ",
  "key30": "4Lich5cuLYPGqV3Lm2LxHzHZL1RtU4CzGeeZui5MdF5j7bRARaptne8tQ939kiYHpQSV1NLe8wvFsg8K6mTbYdsA",
  "key31": "2agvC4rFgwf6gbGYeyT7oGVYsrhuGsusu3hSHhF5mUtdae4wsaovtjLDeMxM8Utw55aUpMpfF1cVh81Juoy1HRaN",
  "key32": "3PbEsnCPryQxqg3sA7oqgimVSNZdWq3TzPVQPj8k2LTTvmNHHxWvAsAmh1unCWK9cnzMWiFBKixMSo2QGnuN1Tkr",
  "key33": "4nXrAFytoqySZ9NeZtwZbezpcD5bcYf8f3f3oFsYtbRJo8GmL9h6kZsZNFJtCYeMzvyvMcaneG1LA5uUfQRLA1V3",
  "key34": "YbrLj5YehXKVpizcDyvUXWKX7sSFb5xXPyWjmX52mQT7LLR4HrfQRsG3HThJN9yc9vU2HKhQ6EKeBsczpJwC9Gp",
  "key35": "PZ7GmQGc59vTWcrZbbpn7Aidh8uH1rc2hNJefwBQKhcmSCoUkusf8G4jKCX7iJTAHaFDJWj7Jtop2HtMMkSrZqP",
  "key36": "5RZnwEoM9uQZxgnH8MpJDrUFeyxW4ywngd6Nxmxv3Eb3MmvGUybqd1j3Z8rxncfdHqzWd4DKoEzrjXdvJVvtdprS"
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
