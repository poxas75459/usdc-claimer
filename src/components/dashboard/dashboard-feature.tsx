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
    "3cZ7p7Nf1LBGt5JAzNTGTgLkKgZqooyvvVuxGYX6H4gjq9QXqx4rXRXQA6raQ7GNYoKXj7iLDZVffHDjd67kaSHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xMDQzaSxovz2sC4XDDAmBDtWaiggjx8RbGwuXQSACK4qjkZbi7MoJYNoBsQz4LKWg63wf4xHMLZDJ1gFq2rfD9",
  "key1": "3AGM533hQEbQqrjCqymPeyiD5FDUDD352ecr8ZXbES8JZx5iSyU2ymnJaY8XztfduyVbQbCka9jbvx5tpDcmTKtS",
  "key2": "s1mPjY1AcvQBEx37K7SBBe3btps8fG38TmAqi1mTMK5kawf7D2NQktrcGPPjNEfgGjnS16z6o8vFJce26LCVbvt",
  "key3": "4BQjMR9CGRybB7VEsV2D5vKhZ8XQtUAvASnYD35VFcaaxzzxjnhZvUroSQtSM2Z9UQy4zQPKnd49GsRsTNvqVRRt",
  "key4": "G9Vci7cJ3DYiiz6Xgc41CsqmHvcSeeNKPGk7UXTT7SFoc4fe4Qtp2z89yf2E5agLcMYNjaw41WUAvEnWyzmC4N3",
  "key5": "3HFoBFuPmvj5foDcQh7oTjduSkHZGfWiFVAjsL77Luq7qeh26kgx96kequVBSQFGwT8aqgfGoRkzCJ1sPZA41EQW",
  "key6": "46AcHmi3CMfjKXog1L4xFfJavKHsa4a9ottQYKbK3Zmrg8wZic6cfMB2C5zst11Y782WH7Qk4c9mCAXzqcrkg4LH",
  "key7": "cVu22jP763FZVhneRmtESEXjbhzZW59o4nBbJqRbCNEST9ntzXUkKnYxN6ZZwsoyuXT4su6aVtw954KbWPhipti",
  "key8": "4vgPaNk9NTGKdbNZKCqSFWzivXeeyTceWP9MDkZCX8BM8HbW9ZQrJnxkkBVk64HNKz92Sr9rviUPH3sKzjfR66bV",
  "key9": "5bjDePkoPL92gT5iaCfrc1cLMN5UaCTNyYbaTvUKtzyPHTxMidBBYtt1xhh7cCHnEtxPmqHhwNnAcmmoKLiBsYXK",
  "key10": "WBU9jqjSNrodAaUQZCDh253G45xSfJzHCNMrrp7z5ckszbJQUdUxrryeB1LemPzXenGdqAUoTzk3nAFoJq5by6B",
  "key11": "5DUccFZzicp9TbY62KodAg8xnxB8eA7EhrtRDxVZKbwBF4kWCV6TtxPEPVu6kC7LmA51YsYVdZBMxo9KkSdgU7Fy",
  "key12": "fz74z9WWDsSzUBUrZ6aMxmwWB4quVaUKqp2VxgtNTvK8qy3H8gAdxfL8r6EsVFG5NDcGjmLjwNcJB97VubTRpA2",
  "key13": "2Q31q28mNK5AVh4GpV1Vta3eifnzSqyNBbRT39MGvuhEmS4uygwnuwrT94nEA5xwzeiFwA8mNyLDbJqgGS1AMKZ8",
  "key14": "4QV5DvpU1Zq1GFmniUELDF4F8Vh8c6PpTLn3x9DzcPqRMqiYk1QaoPhTW6sqDV6ZMiPBRRuQmQGuNDN6GY5TmBMe",
  "key15": "7fqskaJxxCiCLMKwzigh3hzYsWrEXvdAGNeszbgQtaZXnCZnibCyRPxhiv4HCusHj2R3XWyTuMuCMYkgSj5XQ55",
  "key16": "Lx1wKTz2mrtQSQRVAH7yQCZ4T7Dja4zjNzaX288JNhffUa6jvYAjtcrJr1koxXnQm4LRi8tmKNrRkq41sQDYXoV",
  "key17": "SLUSocLt1U3uJNvXft5JRk2nqPNwua9FvsvoiE7EYWGhrk7e7wrp6NjZL8ubeHb917eXzH867YJFmUxCaH6PQL5",
  "key18": "3jgy6NUKXtBhLvobicC5Knp3YYtJkKJHfCenmwFAn3tNSTEdQaKR5HbcELN3QkpHUs2wPVM55QKjagvpj2JSAQvx",
  "key19": "2cSrW1EoafTfRcZfrE6NsywdbbdRApBaUZgP6LzgotQ8isgdpSZ29EBpVE9zFR84iGRtvkicU54kH5hJnXTqUxC6",
  "key20": "2LUdYDvkgNwwpspJANPvxuxZFMypdRKpQ4sUqTRH1S7xL7J4GRfZWznYXtjyV9pETJbeEv6jW9NtFQfuXJB5Kz82",
  "key21": "2qrdggRHTr88hVmtACLUnKL8Y9nRi9cjZ51PNks9gUc17oKr4qr5gziAWsmaAs8g1QFMjzrEcKphZvRikRLJbuX8",
  "key22": "4AMLGEJcgSin7qXMUKudnzL6xNwsiTcLiiJj6RnuGW2MBz2ugbv8MvcfAJ1JjGC5Xn9hiJFjKfKeYWbd9ChnGuHH",
  "key23": "3hEWiLL89dhRQecFQ6EWC1hvjXSupP3DkXXZAU16Koz4riGWgyPdiLY3WTicp7KvYZ5jHmMV96hEj9QKtnoWsvte",
  "key24": "3EnEVP5rH5eYyhFRnpQdgzdMqp2VgJFRx5DdBGLgp3sGt1YDtQj2tvN21jsdfgUEUuQi5Xxw47mbNrLajkgq9o6y",
  "key25": "Av5PP8KeVPB4sBbc5WsC6WjBYUxCor5YypUqHpEMDNwU2qPiZtMJaQMvE7LLqhR7i39hnp3ekR41CYvAsTuUW2B",
  "key26": "5SfdZLLvsJcrrCfX9sAMYBCSjjVor5UZvpneTMLRwFLwNJTjMHazBeeRqSoY4HsxKAmxMF6fvqaRBcS9xxn5xwAZ",
  "key27": "MMZnSC3Uu5PSvLYmA6MXGZ9YeRdfkUN4RvxCuwJj27cpNmvFwJQDmhaakbqENvewvpKJJwCTvMoaMv44NJbr5X8",
  "key28": "3rexoRAWoDtb4t4uGaKrghzBcevhH1LtqBrGeNbVqK2GUahDseVxYUTyAYb2UXc6VtZqT6PZPPF8U5iGGHuzATdp",
  "key29": "btWVCpuuXkW3gyrPoQPwL8nNZ7oYKXnxXp4ewnmx69A44FFNsAjCkPLR3TzsyfS1859VgwRhFfghRUB9RCnH5Cq",
  "key30": "5DsERFFatiArL65dkPUMVgXExHD2arJRK9hutjf6djkDyn8Sp2q8fgeud3AnAAYSxzzxyUxuibeGuXZUTteUQy25",
  "key31": "2m8Zo3uKRyL75Bt6cxv82HwK493eT7SqgHgBJCk7RMmWawMJmR2s5xXPN88PuUuqWtebPnmWhJThboHCz7oVe85q",
  "key32": "477hs19jc18kV7AxfoJiAmKum2nBrGucXRPekBmu8bhMyRHrG6TCK7QioSW1EDW85cgMb6WxB8LBheBcUTbrGHfX",
  "key33": "454tfNGpYm2oSYrpdX2z1TJrgVJaHfjsYvq2VXhLGgWd3SFupZ5rWbdU1GWne9BejkqSCyGU2BLYBnWUhrQgt9xw",
  "key34": "BQwQ4MhneUrPcufUi84ndQos4iX5Bxsaip32Dz3iCgdZpoJaXzEKn28mqg4K6yuNbcGbTBbfgy8e6XS9qp1f4Fn",
  "key35": "3qR3evzBitSvrzugW8aw1ubN5STZrpVGnXzTBCLsenME7xUHMw2dE6yPUrFVhXBZBjTPobX2DD4Shd4RxvozGN9",
  "key36": "3pSXc8bW1avAu6wtYdgRLF73YLxNoWGtxaY6wxXQFRMaaG3RmJrfXcHbemoWKgBqD8VWmG4HqzP6c2AJxFjso1GQ",
  "key37": "4qkrKjLtuFKDnZAyp9skjDR8KtcPFqeLFnnfgVZoCWj4C2ukLAYkn9wruDFoBKGVp9u2NWZSGit8tgGDQ6hNEZaR",
  "key38": "44P223HsYGxT9R39W8cRXXX3ysHheEH6M4voXoZaFqQCCvEyrjU6rB4jBoAAJwGzxrMrajWb15Mb7LButbjq58ME"
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
