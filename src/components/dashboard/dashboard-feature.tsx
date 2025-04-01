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
    "3dsSXNaQJYvxH7qJctrneeeq9LxeAWJk2Bz6ozCwGUSiBieMssEXpBWidYuatBKGz7ddKzuiNFAZA2j9bpVvJmCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B8BSZX5kWM7LezcQxR1NLFXcRWZqxGVMRFky8UcUjg3LwKTHDcQXBgnr7CzM7TLkzgP7KasdCruNh1wHf1PTFvm",
  "key1": "4HVsgmCNQWJptGMvbTtUmW11Tpe5qpmmeKpBe3vKKto78XhAKyokQ63derPdrGGf4PgNMJDbpLF9bsS94KYguq5S",
  "key2": "3BzgLAm9B2aQsTka3g7n3ASM7nLZRiALg6nRgWe3GmNMN8xaGdkubEszyJZxFiXaiebo9T5YoKpwYZnCRmM9YfyU",
  "key3": "usTNpCfbC3TPmCB11SEDxWvoZtZFPg3dyayrtXFy5ZUTDGyFJnPf9XVUc3zT1vwvssWx5PAiG4pZPTWaXNEFKJW",
  "key4": "4tgmNmSFDuD7WoqCCR6XW8baaCuhWYxxajgDWcZoyjHuad2Md2mHkRWK1NUDXVJLksgec3VAxdiapD8b3cbvU2ny",
  "key5": "yN4jToiKR9xVU3z5E7mqeizJhVUhcejt4wALjmxYqt6GJasLAiNNJ99u6po8yRG44hVuiBDsvCGwb4FSvig17YJ",
  "key6": "52L4RojhU51xqBf9xWMrFDCHiPrXebdHTPYY4dwG1yymDbrvkhLnG8ci96NPadpAVmdXPn3QQA22zDWzqCmhsJ2p",
  "key7": "3A76bTFNJmTAAhJbt4ojtDpayLzBzJG82PHuwkvih99Ac1Y7iKpD7fobVuVgSqjkwVNCMAK8QprMwgNBNYbXr48w",
  "key8": "4s9ri19pnjUhHvynco1eEsNNmTZyWwQTJS1gTEt7dY3Y3NmJcQwWEfGTt9njt6ZNXe2vWL7UfXpqweY69DaFB6bf",
  "key9": "4VSHrRqCr1bLqecr1VFFV6W5JVfSuaJKWUNKZ6BXEQtnGoQkCJidzg7PAeS7ugG5kEeUBZejM1Ud2C2UEvgubbU2",
  "key10": "5N4Tj4UocPX46pQ2MrYmYNPZHL2akt1bk53qmfJ5WQHbGE19Qd9XPyp1kppm2jm5fEDyfprLbghXehKviyNJ6XB2",
  "key11": "27UCBYWh5WueXv3vc6HAtUboVDPLXzEZs3LZ7hTiSEGg3vYS8x1ZSQANXYbZQMF6KzmCZ9kWCmo86nAEVqcSvzgQ",
  "key12": "5irGpJZbwVMP3rNL4H2fXzaACpQibnsRcSNmQxsbXXLUvLZnkxupdRZVmGrJUsWnXCis7AqG1cDwA1dQfEL3JsGt",
  "key13": "4TKsYnvA4Fms9ZVRFMm5KTJ4RJFVHkMLELym3Lf8DVKzkfMzcA8fr2iaFRuVWXh7D33F5b27HtZe3Beqhir6au54",
  "key14": "56hhHbuLudhpfQ43hTJJ6RtoNkRB7FcZRcLp1utfoWXz9ZP6Qy16j13a79pqnjPsNXwjN6a7kRo4XpJKVszXGDJb",
  "key15": "584mhkVtduFYV9Xw5W3Sxo4CSHfG7KyVkwFEkbmN4XqvV9ummhPVVD5wpBwPqNM13dugLgVgqG6oawz8GJxxmyqF",
  "key16": "q2gMrquRQgrDBFzdgoaTcHDr27oUCQCL9zGrgoVNb5PWE4YDY49ZNVDiXuS4WmwCZRJL43fxtWFcBNzYj5JkCfb",
  "key17": "MgnQ5T3emFXGdm8KhWKBsmRup3EJ3UckJ1TX5wpRSvr3d5parFF69PTo8LCQnXyJw2z2aqwCVhvUBxRhaQyb4Yn",
  "key18": "4fqu6tnDAHgi9WMtgUXgqcGD1kpQ8PE5mmsU4fu57SXuoxMpYMbnB5NfpCtTK28xhCnvoa7bBuNhQVWci5kDTRP6",
  "key19": "4ysQgVoh4f9EB8Sh4LjEv2kZ8offVa3AQVByogn9bcy7tAhajR2V2guaBb7sLaFoT5gJNWir5ekNCvBc6fcAEEpr",
  "key20": "4mDLikoxRS3ZAmam8vCeTURDhE4NTYdzc4GjYiH4dcmNpG9XN7Zz4Sbu2Q1G3pKy2FpARez6fSxqeSxnmYgCVoqG",
  "key21": "mWVBT7DEyTYEpw7ejvezqtRg7fPrHZ62Tggq2D3J8Lbf39G6AxKrtGAzCcRAB2j9MjDHptJ8XTCr34K8gvfH63V",
  "key22": "5UUJXdG7i9LpAjPG9jV5QrNiTqKTTNKPfVMQHpbVpN1WjAXi6UZ8qbQQjKFMnzKm7tqNy2s75p4M2jdQk1ZW88Ep",
  "key23": "5p3qV179B2FrV6YCsLYyp24JESB6mp4cF5HHXWHKskXfh25Qrt3UR3SXxxf1c2tEGQtd9apXT7VqkFZV5rcMKuPE",
  "key24": "2QHKvMcep9ievQuPwcV92oxbXh2uLDauSFf6wdLkepyYS9gYWS1XDMaqvEKTQyfYdXWRTaVsJ5kdLRWyikYcsTVa",
  "key25": "5BTtQ7VE9ZsUPjc94MA3PUjgZaog36koYGZrQmw8yT7rXvUEmhE5oHDH8oy6r43hkdmyddUmRN3NxLbT3uG4GM83",
  "key26": "3gCqN5gHtrmuRp2C4KYmD4HrbRQprR6eZA6S8M1H77t5e7HTtPtv1gDCg46eHPAn5ybvpmoye2j4X93DjThfgrnF",
  "key27": "3iM5NK1DdVzbiNUWzm2HtyGVmuCfAgPRmF1FQytowKDtEeX7oMhyvaiMmq5Z4Y21YLntqYXiAiHsLg7taHAu2UzV",
  "key28": "4SX4Sahb2oCcNVAJQz456vqvSmeLwB1CAoNwfZ6U1FE9VoBf5p3cSGMRNGQpzHxKcReFjc5LzafVQskW3f58Tvr8",
  "key29": "4YjSUi9JmJ8KUHxihXMr2GgGNzpvKSwVGvsJNc1uSyA2SzBRkBUYHnEkwpYD6wh63CfCHfCA3x1g2RKgJ4i4PuPs",
  "key30": "51q2XQX98wBLvapUEgjdpr9ZCxvtwT6JJ9RMFAL8vGGgisvN12JF6ZuhhW4ZmR7bPjfrJEUgWDg1xeqRFVohwHbK",
  "key31": "hs14hcFzegGquS5cj8BDSgoHedp66CsgywQvKP2R2zWXumM6GiXSBYkHCwm2yQr8Lk8ZZnA1jQ29SoPmn9tTHCg",
  "key32": "5LGNyZPdjkpAN7PHLaaBgWo2DfgjpRFB82KrNEocq8VXx7fJuwTCKSwCc79AhGN5oLwaNfpZkSCFkMrr9eWT16x6",
  "key33": "4CsQLFwPdbHa99ZZQ2f5kKmqEJida65G2Hmfn2xjN8CFEa8tfL5P5YMXxgKfKQqdMmGYESmoDEdF9uaRXd7qtP1k",
  "key34": "3QNknNMAqhFUXdG5rHcnfxAAdvxhXX1X3KE6B3Hhwe7Hj6f8kJrvqhrxwKdkXzuWz7YF8cHNL6V849SoZafiEUbt",
  "key35": "2HdGZXHbzagJXvJwK4ZWybcAhTQMdjSi7XxatvEbkQGjKRo6VAz5DE8UJLbXF6ePX2fyXFAoELx8BU7qm7Gi2Rdf",
  "key36": "4ZZQKVRJCzCy9bZr9GaXLUHBWx3hvwDsK6wDSVLUciyQBr21c6sJBup6kZJpFECjbcewwKQwctBWG1hPqkqh1b5Y",
  "key37": "4GoKLVCnDq19uqEPADguzCB8TNPgAwEea6bFfUR9umZeUHRMPCo3GrQQcswHerESDT4d94xhvatHyHpJYeJ8EHEz",
  "key38": "dyj8AiRYHWRkjDXVKfo3oMC43S6VcrnQwdVkd4rRqUNgPcVqPGyPvoGh3WHJDbjjDat9TbFAGQ1B8CYhwaqr3Un",
  "key39": "3jhAvZNrt1jeTcsUWEmhvEx2hqXJ67W4vCqoKbbhmh7u4ugtjqVCT8Au8KCTJVyXcSSSHbwTdUBkzRa74MATTMWK",
  "key40": "5jV8k26FsYmyqy1inNWDwWH26qDciAodp7gRyrjGMmLLuZQh1UasSvksb5NLBeSwmKczrNyoNBcA64qCJmZyjqRL",
  "key41": "2bXeFc6Nc1zQrJMGCwwehPChNDjUknnb3iYade5UftDJCBack2MHcqZbFuGKeQuJpV4oqaqCUKum1vEPk3TZNWff",
  "key42": "4nWqY6zbfcHxTNFLn3StFLpkEDLChfiPr9XU4Vh6ph7A3RF42ampCmv2kfchds2AaBd8F7UFBXwfcqeM8vCuB6oj"
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
