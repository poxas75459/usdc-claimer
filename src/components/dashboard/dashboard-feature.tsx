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
    "FLiKbBuYKwuniR1SPr6Cy5Na5FqBLqhdUMwnxLy7UUmHLx1hcpdermDe8N7PjqY8Wjf5aGa95hWU1W3yAb5BGF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DEmuC724Fs2ak4bt21pZuKdkXXytUWU9tsffX74vmuaJafhKm6Z6VBexkB5HFQacpwvvJo6wHrYNJWxwRxYoYCK",
  "key1": "56j56HcgjWtxUMYcfo5BNEHp86QZdQJQAkKRmKXCKmHDUtzSVd1XXq8TwW8ojBrq4acLypRTzU6M6SDbz2YYWJu",
  "key2": "4NkiUHTSGDeyMYdtwxg5ET2mHqdDMQZLfwwzch4hyAWH4cB1BvvyE4GbZjvAvsE3hwfGwCCjQmksmeyXDctCJgDg",
  "key3": "2Yw2APUnCGJ6cwyPKajeeEfeDrAiyDTokAFpeNgFj36gBs3bB4YFmDGLZ5k79kZFcsZ8qLex8yt5hdxSrJzTUFrj",
  "key4": "2E6YgashW1nWAJyLBwVK11Gw2b5TFV66wxWCDytsnnRk9XUH3EhkfhyEsijV9ypbziQ2cddfzHkFaNvXvqZNr5WD",
  "key5": "n1ubhTaXbc7jYndk5DUk2yDik1qnx9tmw8WHDxgL7oVeXbkak6TKRBh2M98akq8B1B8tnjQSx956bz8P2UwwNji",
  "key6": "2RagG17jNsQkX3KYSJuQX2mM9CBsxPiasSH2afeuZfkL9WRkYB53XCF59ApCFbukRoiLL1bWXLX8XmEnkxwTdSWD",
  "key7": "4XVq7avhfBjwbVL3jjgodztardTQSQM3SbwRwowBybvGL8JNkaruea5XCUmHnP3nhgMgkvZvvNaCEqyZ8J9rsJmu",
  "key8": "5DNKZXzzJATW51eCaZutTV3EtRJBRmGcmFXUocfBjgnfwPfQfeDx4koMU8mz4Gf3MdfH4x8HC2JRMDcb7zcp5dsw",
  "key9": "47MKTVVvWW4T9ESH3BdJPsy29AFRBMzvwWNovu7WeU7dxEiaz1t3Fj7wXvgP9fFx8jM9QoyyBLRoSjZdCeQpeUwr",
  "key10": "5P2F3Y49jrYhFURQ9zNtf8WqfEzU1WasuCTaTR98K7gL4fhm8qpR5TobPqN2BPC9rVbuzes8NJtmWELWbELGhfZ4",
  "key11": "66Zp2cdEvBWF4Xa3QNvVS1n7xf1R1Jkj6uC5pshgN4LQnYywW8gC3CnuqWh3x9bALJ8N1fGP4ki93exTmQoK93PA",
  "key12": "449ebvShedk8K4JKnnABuVH4gUp1pdMsYgiD4nYP2HNpyq4BUfjoeeiWPu7s2Aab5E2QrXffh5NNEuyy221owqtw",
  "key13": "3CNLGAGQDWUoovoSctZve1EPC3ssE4dZtnWpDUpLTtegDJn3KTq3PYhU4XCXjEcjvSSP3sMaamEP3C84DRXsnyCb",
  "key14": "4w8nyK4WXFexqDt2xHUZmjir895fg5XYpMp6cPiAG2Ke3tf9y9rwDPxcxS6uEAk7FePCMcS1Xjtbp5vcTR73Gpg1",
  "key15": "4ujdNnAo1qN3bYJhMkAjXk1aP9DaZAjy3sKS88rSWTDp3Hig5D527YWygKZXAYGZ26boNhte4WPG8FsJFykVee5E",
  "key16": "671MaXpqtveMVYZ7JkdvTMgSqFLoRASYXk21dbJMcmD544pQ7VzHVvb4tWmKLPZguqUhTPQHoPTu38817CussAcY",
  "key17": "2z43CdF5STQC1NV7XbHXZ8msQHqcNNmLLjAtsupAK3fNsqLXdkrrmsHKqp6caemsKibqMP9qqMbXji5r7DdqKRK6",
  "key18": "5H7U1P2XpDEi9dK8GCPephsgV4iFQDzvAjzJCrPrqK9YBKLKoGr4zCp169nJCPNqJHsqh34fCXq1Vyitfyac3BrH",
  "key19": "cUAnyXxGdJFpusVy11ZHjK6rE3uSvuyjVwj71zk6sdyo1vT4WFYjwvv4VwMbPKNZUBNiXaJQQrvBcKPx4s34mti",
  "key20": "2KUVDRCRmjJ3bqnNFMXoMGVyDPrVVn4KWTH6bcyZHuZ8heJLcJefEpU8cJ787K5XEgpihE1kZRAfES9pVWRcZzMj",
  "key21": "3fcSLazffDghXyjnyZ3hzvxCfZaENGXVedHU8RmJAkKXoGpov7BsyJXvFkkh2fhhD8HSwgDx7dhApaXoKZXv7uAm",
  "key22": "4CNmTSp2FKmeZF64CyYWz6Um3Qbai58zh4NWKZ2LNAYTamxejCvyH3AvEuxiZzEsc6a8XkFJhmAhyi7iWDDuMxLi",
  "key23": "AZ8JTH4vz1fwgWJiagdMDAGhWB3dKebzXTsBi9F5mdHgaiVJcXQ52ATXbVFMAyupmuTbiXwUsY7wzeVSpMBHjKD",
  "key24": "4waUSxUA4PRm3NiMjzorPr6UZoor4Fvaoyj8oUTah9VKaMV8KinPP5LzB9xoKvJemDd8AdVrTUJqdcumFdhDYh9T",
  "key25": "3e45Drz4iqDvGgoQJ1i5aJgbnAbz1JEX6nduuv1yZMLEEfgnLiVhVouWxuNSX1L3M1QmoM1NZyuSNNSDso6wD32C",
  "key26": "67Ba6JgtvASQGbVtNitd1MA2Dnw1JUXJkgGWPvc6eecvA2FLfzZuPei1Eew5vvPYKfY6q5FH1myh93UkGZ89nwU9",
  "key27": "5n62WoUJJSX673QG68gekMoANH46fCbCc96GMWdtDZSamS9ji1FFnAZjCGhs7BbKaWKLSVQJ1dCxdC3GBdVET485",
  "key28": "4fayzLf3BLwEEQ3miW8dL1fMig8FS4nb168mkkk4cRgXbQW8cUZvUqVvEiuroE4BQdhaEYmppjMTzT2hfEr7kPs4",
  "key29": "5znvecE5obJ7ZcwmqHL9ToiwPKEW8ciZYLP6CAroSqDKVEdXXmW2wN2nwUwNND8wWYGd5BQMP8s3eik51qa8Mb2o",
  "key30": "2Z4Th5mhoDDrXQjnGXXZrc1FdsfR35UB4cyXuR626biAcaXf9SbABkYXNt9YTLaazHGyEEfsBycDhcGxSz1hR9hw",
  "key31": "4JwUnLyezeRWXASG54QAom3EdH6ZReAPfWWJsDqwN3eoMueU5PNVZKYLVC3V1K6LbFCrXN7L8q7GpzJPz17UpjMt",
  "key32": "2W6n83Phuaj73xUpt4s7mAiV8gC14XW7auBCnwWvW43AGe6tw3ktcVNvNEQq6Vr4CJiqxhFQDJZbGSeQcunzdoJ",
  "key33": "2YjiAKdNFf1VsWjTdwMJQ81KEvnbJ7kcw3NghhsJLqX7v8neFQ7xGEwSMD5KVWJYcoeUBCEdpWGHnDggbjt1eAqc",
  "key34": "3mNK4QWA2EicyAQ86gyC2KbwA9ggJrDehz6NmTmPPWCUe9JFJZg4WHtrwxG763iVF3WGJ9ADLMFiPzVLDvZ1aDsB",
  "key35": "5nMJpoSRFjzsLcWVE5epYR2bj1aDptRX4VxqTq7NYV43xGss5pcpUzYD7BqRYG1FDAr8nev9DLZqjsfwMGNdggdS",
  "key36": "2sNyu2gy77M1Afgx8VyhrRQvNPQikSpgbYGT2ADnCLBxj4CijWwidjeVSRi5waJTiNmkwq5b4viyLTBJ31gcBR4z",
  "key37": "3usiouCMsc5ASEUqEZ3dNiJmAC33j7N4woAX4aPwX28JzZWstuYz8jnmHnvjDvYKQGH8RcM7wR5Rfxx2j7GJRMEr",
  "key38": "5vLiJLF1hjmhLuZQ6xXPoDNz5o55TwbxHCYoWQKJAjzxwJebRYyHWrGSehPLSfqaJDadscJ5vwsXxPNRgnVTfcVs",
  "key39": "2sro6mDDofQajS1CRKGQ9tpexuRxks5TdHvPprLvugQzDWaDc2Q4kdJTHdzkZCyQcKEue4Sb1ajgHv2UvqFtfCKs",
  "key40": "3AQLtmxVi3GxbteDyiX7rTqqjtsoiwfymGuVAbzjK6nUjKbpW7dYXE5b3j2cu83SeGX72JN3RBVhX355qwsTrR5H",
  "key41": "4kbuzkh7o7Bho3Kpi5QAtREdcppABHvWSchRWvGjyNLZ1iSA3ZVkb2C1FgxoeeCtcdKL4irkuw3aAViXVLWx472M",
  "key42": "3V9kQTf4wugXdK5P89ND4knnG47xzniP1jk2ejV8SnVXBvd4NMXrXHxTUrzKToZW4QeSmY2Sc8mU4wvZVkpjZjEN",
  "key43": "Ax6DQ3Ye5MZFFJAik9LnmjaLwxEW7qoETYxWk4PYfhzSdm8nZ9XtZBkxwEVKACXVppX4C2TCPSewvXxiqvHHYFy",
  "key44": "5KET2mSLWpdEJ7rdDT7gWzjqSc9F92h4rbbeEzXdQZWz1PCiSxGf7c7XbpMF3d3rLEWjwM7pDPDDx3LEmCo5Sc1Y",
  "key45": "3keaCcSJTkJ1BDYH4KyGi71tz8Psn5cT4gBkMN6JuAe1hGWGkDYhAawTP6yTRF8qhZnAeyit5MF4GpBy5LMW1zJg"
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
