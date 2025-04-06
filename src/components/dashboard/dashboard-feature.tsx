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
    "37quykjXRNwfVpKMDxCVT5iY66STgfrp3gUcUbWHNWjPPebk8b4UjKhDQPyzyjSeAx1L892eKEiDvRYPNXRdFJMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wcS1yt8YSTAZzeVxeL9GZYkcMs8tJ8ZxFsfPrYJvQ41ougnPAgn1Z8e93jpdJtrjj1mUxkmY1JAnU31kNYPHhTc",
  "key1": "3gQECQqzkUu1ZCPytxKWoHMGYhppnDAnUoy8ZjSdSe11XnMkNaPY51CddNTwZMnfzuCA6xr473WRfdYZhwkGWdNu",
  "key2": "5e1mTyn2M5ASVKr2F2QTvzKuwUQDhtwZh4CzGemCfupL8asq1d2ZqQCX2zYx6nBa6KfD8SezFy4iwKWaXirmSRpZ",
  "key3": "4aChz1LA2gxtGDmvBordgdLLu9eoLQLfsnfwTYN9HUrQhZ2DivmuWbZZEtzKvAf8fWxpyzz22Bv2pFVab8AsD7Kj",
  "key4": "63jhjAPSiLifYUNgHEjvZLe4udrm5qLAXUMT9DbSbfvSxqCEsScN2sBoVf2dNiNqsHLoFSKsBzxAdDseLWWvuwWj",
  "key5": "3zYR6xEydpGWFShu3bcWuAhaJgZM6BmHUH2DfCvBT3txzi2XEzbo4HHb54TZvFKWCDeD7UEBXsz3tdm1qJu16Pau",
  "key6": "2CvTH6vJ4mtwXKH3g5UnrQMs16H4KB4dNEmuSjGwxKc5nPmdgEg3gNZXQLfH4RpVcStJ2HuNGsaEXhtbf7ey7TbK",
  "key7": "2bo4gvqiNWbFk4MF17ZKUkQqVU5W3x6DMRzisJfdrzNc9CBWSrAdCfmAwnbrP2G5uziPYDVcRe27TotVcpSyd1Q4",
  "key8": "4guN4i9gNKt7fbSTD11C5z7FHZ3mihBbqXPzJxkmcWNy6X43KrUPJKsMq1UhJDTWVhMM8t4RE2MEZcp3P3QEXoKz",
  "key9": "63iPU1hGYNRBytpep2Bwa1sP3HprbkS9T8bzehPeHGhEh82d7935nENAqJ1g9Dpz4chLW8yRaruA8zoRguQMEny9",
  "key10": "25zjd7tziSeHYFP5BkAFDFQrLjc2ogeVQwhunoErWhpJSDLyrDMm8HRjUApJFvkGxCm7FqtuJ5K5D6z3VG1BfG99",
  "key11": "4BMmJ8aZ336ECWgPwUdCTpQ7AA9ip53w7EUP4i345xhpCaY2sN7pN2x4J8KqaMQ8bDMMHmgm2WKxgm6t21iUDt7V",
  "key12": "5ex3JCYMV68YUKXh6vR4Dfu6EEqdMhJppUgsjWcg3gV4JBHRYpVvWvh2jv56CFSKPW7oDEPEU8smqwCbathLtFCK",
  "key13": "29eYaeFCFauYznttjW7GjhK5nwnpyLNdvHwob46E6GwyRYMpjYzpTm14JDiFxoXTz6pvhBPk9YgMMwhN8ZXyhu97",
  "key14": "5cDPJoZtG4pc1y6TaosZ65ta4PDQuGcA7hoFjL8TjFdXBpPwbzrnFBb5UqF4wpsySgZA1QmNHafbDScRaYj9vZFV",
  "key15": "47GuUS8tduXXfLg51eDeZMMrUMEgQdyNRL2zwFzdJYHfjUWXXZY9Rg6pMSv1yVbHJFErhATPML3gbhSU9UpdjpQj",
  "key16": "2MJtmZ3oRebgyZrBaLv4BEH6gvEbA9DB76DWDkH1F99w7ACKSkVMYK6dfZf3UwBTCFYuizAcP9Pc6cYEttMY7T58",
  "key17": "5NMmbWrgGUFPtM8fut1JxeKc52ufq5S9vfBVUoZ1M8UDvrCBegoqhGm12ecJwcEawzWPhVtbuwBQ1Tfh5nFwL8qE",
  "key18": "5q3pvNnWK7FkjQ5DRBBrM7k91HDe59Q7SFku9PrYurY6ndREQ5JcGUd7WnAWoCTmf6HtjPpyP2QyNnA9BGUEoxei",
  "key19": "58MEfQpeVKmiDB2G27xj7HuU5QagbmUUyfhLfvhdqw2tgC4uXSRBsHNjiUg2AFG951Nmdr2NtYA1DjbSqSBF9aU",
  "key20": "w5DDn276Mc2it3FzBamrrvhye2qMTXxDFomcYBfaqVwMxT9onhvr1iUmDByG9tk8xL1fPf1uavJWoWqEm3KA11G",
  "key21": "4LcN2QdoKjp4w8HXkZNwnewDKUmJyZFVqbt9rVFEh3qXyozox8EWQqypfmj4ftf1G6gvHziQthcSpdoMkciRRbfK",
  "key22": "47owvFSzJ935kACTLFuz914FxTyBHd8UMGaFaTnhE7byJvZzaREeHV9QyYGUwJTMqrvjKiGhJEw2ZEq4jKPnmQt3",
  "key23": "2zaQNt7s52gyPWndfzUuw8vsRNmHid5P3y5gETfZe21TvrVFiueQGq1dQjPrBpQnYQfpyHHd7CMzaTmjpeB76yxw",
  "key24": "3FmcTHavseYwMH4SLDQNrHQFkSNqcD4TiiCbtPVASoBB1BSzoZvvAex5hccaDV4yHauMasdvhCwtgDLDnrnmKAF1",
  "key25": "nNoUq3J99jSv6g9uiXRiwLyCvK852qewEwp6jyj4FwRsp47aJtFNWEni5RYWy17Dax9zRPQvayVjPQrL2tP6mUj",
  "key26": "25RBUskYPGhp7LV74gdQSnc9Bi6fqGxbSMW9N4f3fWYpiRHggMQgYX2hDFiWQdG4RpzwdScJJsTbhMXjzqRNgQz5",
  "key27": "2QoiVVN2JnDnotxtPhwbU3yUtkpbpRb4fUs4ECEdUACsZzPiJRBND6nQgywftMJrEhW9YhHb1nbiPAuA21HBCfSk",
  "key28": "29DZQu2AEvLMQGvNYriQwQviqBDRPdRb4JLTqsfVihwc7rt3zqNyhBCYKuHUNkDLGaNQyidJMVADUPiiocLQ9Xk5",
  "key29": "5cuUBaRtKxJNuPMf8cpbzWtLH2EybE6m9ruHfE5RvvqzTueT69btu8LvSB4C5ZtZW5PGAQkeQ8zGMXsN9YZ5tkus",
  "key30": "2PrLBjXmyhhfco3DnF5FAUrmRH1o59xUqp1Tecyo1Faduuw82pmxCp6ASm1zn7ApSHLHV5g2M4HMV1YF45FZpNBx",
  "key31": "52oGLymyU6qwJcfLasF7YH568kaDUFncCJvnA3729dRcV1CsUcGmcM4s66j4PFDCijNU9EKsbvUcxnhzu15B2HHQ",
  "key32": "4CwzM2johUEzHhgh3KExS2K7poanDPsQXU6ppU7XMdwjUDCN42TyoqHs8HRLHbi1aXRqe1AF3f5MZqjQbNgQpeB7",
  "key33": "3cVsXFvd9vHyb3UXSvTCoNNXUzqW3jkKtTF4bXQZDwhhSNhQcr6MoN1q6ZyFxEV9STRxJP1KiHqidRczgf9hFCwc",
  "key34": "2jo3V98yCpp1qPUJxbCmQbU5gy1EZjsZnHWATBDZ8gdDrboYK8QsaJ6CBp8JQmQhEMfbLW7hcU1EeYTqMFyXrJmb",
  "key35": "4487seznWoXx8YSkEMc3zDspKa3sFbG56d8oV5ZtniL82mfJzNBJGWkw22LPXLY6UYcaWtYNU8dh77j4fScwLGam",
  "key36": "52hnJG1EVg71rHQFSHxGyxHfUbH1sVqnb5SZBC77QhF7WghtPWh2JFddULNAAcv3JxWD9yH8vQZ8FccNFGZ8uNLj",
  "key37": "4qWW8piiTqxpVt9CyQAyfmcGEvGvsyevDVSJPNquwaYmD38KYJwC5hJYcJgRmV4ToChH9k4bB3fCVJ5Ra6JxHjt8",
  "key38": "54dGMasSQBvMAWKP3TdaQVZcAEhKP2JKbE7EPd4MPDrZ6aE1TqsT46fgeuqgiiwKEhznEXo1espbMPJdy5h6tFpu",
  "key39": "aEy1rZhPPhhv4eG9oNrjkwVEyfCMe94f3PF8gjHVFrAdCHUDpNmHaUsBxbULrDS3Ta9gwEo65hnnugbJHigYrfb",
  "key40": "43CS7tmTpFmWXuqLeVYZ7uK4dYPNiefiwbQrrY1VquS1qRZ7nLmsm8hqLn1naFqr8SAqrpPELYuq2wTaN9feWN74",
  "key41": "YM2dUtp8TGn65PvwHZKDHiMfR5xVGBCgigDMZVcF3soqsUQhFo3GScguRDARBJz5xCPAsEYcfrmSDycBX8xVZHw",
  "key42": "2mThgRwrGXg5bX4YPT1goyBzeVhkGRpw36StDHa4Hzsec14bdXiuoVocCJeRJmsNtfCA5aY415VM2TbF14fT2i3R",
  "key43": "Ee31U8zexuYDmfKLZxjmGdWKdLq6jWcTx4E3Vut9UGk1uCW1Uuk2YAXqbZGdThC87nBHUkgMJ7yWodPSeu9v96y",
  "key44": "4XB6cxJpPe9EGDH8gifPc6jKA1SkSvHRatomKYzqZL3yBSCLcPvWSfsVJn6MFZWyaknfjKvLGeuB2EEmjVyntdDX",
  "key45": "2S2QSLXAJRXrweLjVvdtSbQnGNUYsief3FUCeffLxgyfZ9UycJKzcErwSTaWTETNicG7PP2HVZyGCnhab2ssdhL5",
  "key46": "4xAaVYpf4tLfpNuHzqzLcyHEePZEhcffYTFT1dU4hjT6AkW86o53Nd1RKuXgijWfQqHrCSN3KU1H9rNBTLnp6MFG",
  "key47": "2DfcecpHg5sD5GxTtYghB6vDzrJffjyJogw7afahzcxG5L2oYXjH3mmbxHaJNrfsXWkEBLFRYZpDxnjHAXN6CXwd",
  "key48": "2ScG6fhbMFVsQMaPzW5gp974JmjVfK1HvyZAGdE4BMXXhHvK6V1QaJWkTTgTsPKuP23di6BviAM2gq9AUuwUtfkG"
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
