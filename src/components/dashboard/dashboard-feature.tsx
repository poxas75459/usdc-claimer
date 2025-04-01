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
    "5BHKa2wd55339QuUDBA6LgkH2T7XVs16pr8wgHYTC2r11K4JGfUuaNWmiMbbnc2iNtCULaxUneJNsRK8dghXcVZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UJEpsnYgf6zgqCvYBkMvHmNaSo41LKmv7YAGLU3r4tdZgNTAWJV8KPPsqKoJ3G4QxGFZHai8VBr6TLVyrUgfonr",
  "key1": "3kQ7hdGswmsGcsU3iAM2WoY1KDaoMqDCyij5K7FRMfGv1Y1zjuVRC58VRBWmXyHsYAmLKgCSRu9HwR7DsfwrDeev",
  "key2": "29U5MM7UKJKb3RTtAi2nrGdEu5uwbAzpkBvaY2cchuJ3Bu5hg5DvP5abLC8FsRcZXYCRWhoRUwTMtVSJEXffq8ay",
  "key3": "2ktX7QLV3F7ujoHbUm2MQ1D1DkQwN35mmJe4p9qYb63MrKKxF3wPVk5v9AnSLAYXewMPZx3pMG56ZnMB3Y8xsWyq",
  "key4": "4b99o82rtTUo8EhdQHg1NdCbCnVmJoUQgSg9QwSNqEzgALKMMRL1ZuKqq5TcvActcziQB428LogdXj4yLjLXVB7T",
  "key5": "3NvGHGRRuzDfZ1HjJsbbdvQFdEtY3XR7AZRjC3VSwa5TJsCUJsUqv7U3vGos511QdkXEBRFpkadkkWk1N9myga8s",
  "key6": "45dyfYDa3gCdFWHk8WB3NmXz9YgZGzy9Z3kYFv79amV5s2vdZbY5EwiJuW7BHmJkzwpfsprBmBSdFxiUFCi8r5At",
  "key7": "4LCbq9N5zdwd2BBGxZZ2BTdKfg8MMYdbNPnw83MJnTBXwFU5rgNcRfXdQYeS4vqDxwDw7CBqGvjNoMA88NgkSSDr",
  "key8": "4Bcngp2PqxZFohAMEfywGkwvC9sEffokNCnKU21RwX1XxTgVpwJAKw3HSpGNGDiHvhPbixcDBfM7Zd1wAZubXXE5",
  "key9": "uCHamKFPv9qJY8gaY3bEdJbcwJAobJCCDo4ju87Jc5bzsZ5J3ZkqotYRvh3qSKcLtEYQk8p3n6ndXvkiCyUTwbE",
  "key10": "2CBYeFt1XswWY75o4wWHiykBxGeTt8Xw2kxf3LoYwsE6Tii18SVCQ8bKUDwB8iDDNxz8rzfQvoqNeZWe8BFsTJq",
  "key11": "55D1QyY8HbtB3Ue7RGZ31W198Y5hZhfNxKWbWaux6uX6mE846iPZMNpcWQfiVN1d1YGKtGra627cRDnpTYw3ZEsd",
  "key12": "4bwpL1fdYJxvJ8PUFh79KWrZRWJZQxVrFuXonK2nL5KhJQHvPbxpPVxuU5AoxPtc1JyxjNBWWzXmZG5vnLNDtJKS",
  "key13": "4sCnuLngJEQPSfrkh6YhUYj9VE7wAR68tBUxQKQ26bCwqNdGLViisjYBbYTUSJdyeo1J2MCr6cjCkFYWvBdxqbzQ",
  "key14": "2FUc3xkgVu6xBvxhcxWTHAiYum7zcNUdmfEqALfeQz4HcbgsE3ym4uwiEsa8kqsVAj8fBWahxnkHWCAbpq5jvByH",
  "key15": "4icexc3sEpwnM8xWnYhrLdbE4tWHwDrqXyebBL2YBY7Sc4VG2P8wPDKPeb9C7sVeGPqUuYpeFRA4cpQapYzR7EZk",
  "key16": "5amEZvZNCxjUEJHCnwcKF2zgCNyLBF8GUvVCwsLn2KmipyXaSJs9zfXmgBo1SXFRSYK4LyHQgmMYA6ewPqEnmKyk",
  "key17": "3QjFa6B4ViT7DrQEYioec2doWnAwUAGCpgGjGtSGetiQh4V2zgEanR4StwBG1CX19cJagCCP8yiccvc3LxC9mYqX",
  "key18": "4thwH4p3rgqACmEY81fnAFCv3LtoDoWZBvKVqM6VLKbbrz6r8MKoBazAboEDLgWNiWGK3Mi8UhF4dEdJR3xCeKaH",
  "key19": "4iKpEr4szzFVJjocCU3DkZfwVoBtjES3BtZdfoFRRhQ8ZXjLAWxJyRJDjueq8QLp7oXj8rnTPWNQ6g8uTpsxMv98",
  "key20": "2U8dQbgeF7eQFiN8mAW39q6woEy5LujJLsXfV8GsidV8kfk1uRri9iF33jMzXsPkWnRdmUjKEpt4SgMjBPUqq4Bt",
  "key21": "5ioyVH3jvSThWdCJL7gL8btupSPC6bxypgK28yWpVFYXChQkFxqEvzCacEygie2BG5hJA1fwdqR3xDbR14mBsLD5",
  "key22": "38thKQ3MBpnda45U26A9Y2hjeHxQxnewSAPpi7CumGJDvR9s1SqSLpk7NYDngp3PaJJ5Acjd34c5ECJsUHNRUKoS",
  "key23": "2sQESzxqWgZg2f4zwYePRiYvapryprdwJwVwFd2m18BpjrAKEnyhRKykESSGjag5oHE7tom7wkoYerNezszBSSaF",
  "key24": "2QtgX3jFuZopbPTHdDZmqXLnyJAjvQ6dx3Rau24B6rJEHusBtmFXvLibSVzfhgnTWaQb8uWe5vBc3dNABjztM8mR",
  "key25": "5vbQ2Z4HawHB3PRv7MJRNAnn5wJn3Sb2UUWW4cQxBvC6bW1745CTbg6juEJh5krqQb1TNMJ9tx47M6JAuGawychW",
  "key26": "grzB4fRAZ5NpC9mG8SXwKXgKniRkDRsME68zn9VfurzcB6XxeRycCa2ZAowtW6E4CEbMuCQK91tAgGq8dUDJkxD",
  "key27": "5R92qU8dUGwf5t2x9gAyDypycdKpytLc2ChnaSuQjnp36RXWFFrsarDQywsHjJ7rBS9KF4VERBSwX6DdozAvcv55",
  "key28": "MPPCSmVjG75RbqENCVWMCu2gga4ZB2qkHXK79JseJ1N5ghNpYwTBMFeoqWKhYn3jdf9XJJbhzVTUk5sSJJcvwy3",
  "key29": "3Lg8sHNQuA468i1DJggaCvYDx16rzg2NkBWvR96hnpnMx3VHN9ZtgigbZ3wnFwcEjbCGFjwxDuTE5zAgQuG1duRm",
  "key30": "3WwkaMCF51Zn7xarou8bNcUMt4kBzr4TX3pytCShXMmtD21MbNZ8niztKU4jNtyKqo35FLgVDravwMRi7BfWG1Ax",
  "key31": "2F2wctEPzVnG2Vcz7swXhWHLTf39S9VuSt5NMpTd9dqqDXXCfcZj8s2dK6bDrPLurGBmfXwM1SLVH3oRwgLENBa",
  "key32": "23e8DkMfqoboKmskYcSghF7jZURsGcNedG4a5nxHSWVtpmq7K3FLdT3nA7C3Kz2Ybtp9xbxpM6APMFQfDjsC3GzH",
  "key33": "5MCKvwTyWPMqkWtjTeFA54EgzHVYJFydqvtNibwe91FRB8eDqofPqohNzKujKCSPWNZTQMyx16CP9SdGghGm2r71",
  "key34": "4nD8j3Na391ZDjtsGPV89Z1R12RAAsgUnc8hkVJ2wz4M8uYqByWRHzyjT9hfZcwvJgZo5VmjoTKunfRAdcxnDNBy",
  "key35": "3eLHV6V5RZKuYbArnYRCVLHWAdcwv3WJcuJG7xjcLAiijwMN52cUbFQL3hkBKLuqZafuk45PCmjCxkfNqqT3tbWb",
  "key36": "2BoFauM7FGGW83ad2wYvV7djcnvPQAVB3y31EW28BgsUzCkccbysmU8NdsBvyKNeKvnBAFwbznj5yqieX3znmQ9a",
  "key37": "62VaDpnGKFv569L3s6mj2vdcJRa5X5Uv9VTQj7o12UoyydAPnVZVcwgJuf7Lf9tJYTPZo5c5BkpF5nDJApJ3LRTF",
  "key38": "2NNvkTGQmMuVFzoQHtLK2RhySkhg6Kj4P6TQSjEbsqSZWL1KXkR8eo9n1oom6cz9WgkJZ7d15tDEohmnoW4a9nrK",
  "key39": "5Asyo5Hh6fmmfFWABbsRjsPfYqoaSYgpP1EgGWzTHMaPMMgmDorr9xbULuuDzYmDHUYvQeSadNfK7WTpy1QdbBa4",
  "key40": "52hAzD2nP8ZcsWsuK69jiNBuuCD9Qyx4qPnTXuvS9AwiyBEKud4n6qmdK1yLPJWzkJGyZ9wgZXgu459aVTR7Cri4",
  "key41": "2JAcuQRRLiq3YRUm5RyLxFur6CNcrdq8HkBhqyP4UnR7v43t7dWhuXHBYTR5ae6nTK15ScywK2orP8cbH74DFHs5",
  "key42": "4GGHW1FeMWZ7EHy1QvVSDkmFqMbVDYVMtEG32wteKiuPkhHJrpKLyj5KyBijVfbtUk54gumjtAoSqa2tAbBEobDY",
  "key43": "2dFHBWCU9aoGic34RaBpqvgRmQmmuevoRkJaVYxijkwqCngEUtU84eNKqch48VS3GyHfBvC6v2uZZxsBC4giRTUU",
  "key44": "4h2wG9oD8WmwZF8HCt2uvh1fc7pL3DSbkS5PAzVny5ieBu1bLLPucc9roRS7EbsYkc4o5pP7B6XnHvcNK4nFaCgm",
  "key45": "4YZfdJMcCez59Rvt6wdzqB8JsEQB5s23rBF7EsRaaRAB91hpiyNZkjeZM3AtKfy2AiGA87ouJut78RNL4NRydd7q"
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
