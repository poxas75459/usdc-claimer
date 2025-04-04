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
    "5YENw1zYZ64yXdXq4jaVdtwpUME5rPnHUt8ye33qB4FWD4u4SrSkyHT2HsmGJZSDf1cfSZ6fbMQS3uissoRXaGZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sghiD2PVSyPDFx6jVHy2AGAW8gdfXiyAiSa6n8yKiJMMcbvbzKHoSXUMuuxdfYJex3qhW97EoGozodJFYhBTpzd",
  "key1": "4j9V4j7o8gwv1dpvy8zYzF58MGUQHfsdyYvmt1pCDm61zZxMp6REshcAHU9i1iV6tB11c1z7zQjJyGLRrbJ1Uiim",
  "key2": "5tEmYAzpBrZyxRtukFLBVvd881vck6CM1GyiaKKfMAeKuWQqiPX9ySNTtKAFJTGH3Y58eLLtfZRdBf9jgat7Syse",
  "key3": "4o3T9R1Cztn4jo58onCA3rgYkhzZSf4effjKL5F4kRdKpHxLjKgVvjeyTwXPvDa3jdUCmrrq6mEn8h4HgtSjL1de",
  "key4": "2FjXGVqJSkdXhkRxTQANzSuHBEgiaH1kzg4fiscgTqoHfrEJoTEYGSSgKpBa893jq59uvcSPGkKr1KevN1jAxehv",
  "key5": "4a3TqVYNsF7YobRx1geLwfjTC4WoWWHUBCpgNrrH8HDMe1crgS9SJQ1KKQQiGiusPTX3MpzMr2T97c9Y8NbNsHvi",
  "key6": "2cKb6WT7d8R1Mh1nc5gkzxV8yMb9oXGuuhJixGPypcWBJQFMQG9NWx87mWS3wZayuFr3A14jPsMA4WR4yo5CxPXA",
  "key7": "47263NjyggSmsM66c1b7LBdZr7sEG351RX1DymAzRZeYY8uEApraKja3dw7wj81hf9MvPJrW5npF4hPfbyWPUZGC",
  "key8": "5m3LJMVwF16SmjhoSioqqCDBAcLt17QMb9yN99nY2VuPPLCHcE2vpcm5jmgBdj8U2j3mXMY3t6Z5nH9FJc3V4Vb3",
  "key9": "3VNuch9NuSC1B4VZb4YYRifQmtF99ZzQzFrEkQg82R4NUK7MsbXvE7yS7HHrdEFKYkPSLUCFqaghbTFhWAieeYQ1",
  "key10": "3FMYiA86BobrXz2HscicKC2wwTqhmCNqCgFQPrBBER6YCJuGfnat9Pzu1CBQhqBSgoFQoxN7VwinUdMrGU8V9Sq",
  "key11": "BsgmHqvQcRTyodsnCm2LdYxcjypzysM2ATvNDzYz4TdeUXf1Gj8hKLLw3ARZCw8Kurvp7sSjZwhwg5wWbrFkRka",
  "key12": "XAMCSVHeVXPWrr98qVzJsFXRGUVKfBG6PevBz7VjcLgQs6BZNmSKvRj8J4hZvMNPurJfHKMcdUoKGNNW1ZfbiJQ",
  "key13": "5Pevzy8tZHPozWuBrNgWEde4AswYKhfUBzsqfeQQk7uWfoBv6K5PqDCvyCHjyHMi5cb3Vow216mtGnhMXUK3Q57s",
  "key14": "4vsY7BfiwMWq1KRTFBshfBqthtkksY3oXgaZsguc9JNiLxhsEPnwrCcxd8VRQZj6vSfEUCHbZ4YBxAHPyYWskAAG",
  "key15": "4i6gtsC2NSKEZDwX2r747v3tXwDgyviHFxbHMenUmoBjnQjMDbQVTNmitDjvhxdRkPSYaJRvfnceoFgD89ytXU2w",
  "key16": "4aEKPTZoZY3afMYYgjju4gpaHrc6HHWfBG21cKJNPrZppk4KLx2s9wwx4XSgGT4bboPJMthta5JDzqV8a39FjWy8",
  "key17": "4uCFN99ZEPoZWh5TjNZV6fCf3bkjZ5vXVGppcqs69iXvbNvTGpcjazRVWKKij11aVYxMHadXHjWXuX3iRkEDy7VV",
  "key18": "5tjDkc7p1dRHS47Pgixy2uYZkyDV4QQ8huxJsaXhjFV6H9AEY6hsXHs2hSvd5i3A7EfBUoWR5HeYUjLDDEhBPzh2",
  "key19": "4zyucUWSn14MJJt7KuNKNLhshvfffs7VwpbjbG8YJaiB3hKHLayzvnJpoxMFfwrFz93U9ovFrwsP2YAL48HjHc5N",
  "key20": "6479VzZtVDUhWmZx1SeUuaq4xuyh19d5Kr3juk6YYWDSMar8oGhSRVogv4srqNapz7Z9dJ38mMqcBjJPYZWj2vJP",
  "key21": "5ePc2GAAQ86qpe5pHVPj28Pz6z9XEBkHJFX5Dv2haQknLe2voWGWcjw6vhGP9paxcKezqg6GLw8oScmNZWknbWDx",
  "key22": "33GPx29jdU7UiSHYXE7mvnYX5ukNjhoMhodEL19cNuSRTgzDxt4bNwVUV9dBBgi1i9jKKm1cnKhxJo5hmorvFhoX",
  "key23": "RFt5eSbiqEVmfp9nqmmoDW4f8gkr2iP4PUM3yPxcxHxiPBfcHXd3qqTxxJskNVwBhKsV773rLzgnU7Gi6m8Vmiy",
  "key24": "5SBzXfWd8E4cXYTeiSDssvc6ggEDwWFimrHiTANE6F5CQuhNsBYBUPzyseULRk84vG2R1T1qMtkFuxCWkPx5XSH4",
  "key25": "3cYa5LEw2F8oTq7h1WaddmkXjasXQ41Ec9wyP96dTcTk1dXnVpJvf4wQsZNf5hwsgLhcbh54YdhwHTXS9s4p8NXY",
  "key26": "5Atw1icHnxqD2VnibyNhHJPJvmAh1gA2AYdNS9s8cM9LcVkWV1CWhpBUVzHvsnUMCYrXjRpdPPdNEtbtBqnC4hgJ",
  "key27": "42Vd7TByhxXS6wfArX67iHoK3AM74jGqpZedLfn1hspGKtGP6ubL4dV4gMCUdKHvtTy5vm3SkV2u5chJQh8iTT8y",
  "key28": "2BT2UJs6FDuj4opwY5hCHXxUsS4MXXRiyLwh4oAcREXEb18LzG6Nk33hADu4FixYg3LeNABsV5tUYeNcdxTZuVr6",
  "key29": "4nfAqDzq8hLNbWuQEbqDExLe6UyY4XnmCQUJu5tjkaW2RXY5oe3MHmRHyS8zeMmpYGhn7NjvvpTCRhjXxtkxPx9g",
  "key30": "Xos45Rv9vGAMAuYWNQkJdn21xotGKtauQZiimdWHJnuGWDr3AYzCuj3ojCEuUgJmXCeYwpreKwznPBcWeJyANjq",
  "key31": "4ZVk4LDocaU1LKBrH4y7MUHUx3V3yxV9uoNW8WNtqbCRCpdFd8edHzR7PRECpUn76wuaCD7ErqyLHAQuuEzg2fSV",
  "key32": "4iFWYcaMFiqf2AAsD9xLEo9Q1EA8GBHg2mwPjC3qFPzGQ83jF4qrVuiRwisFQkvWNAD9wscSJe9Y7gc4HGjXjX2Z",
  "key33": "9C3uZe7so28GF3QvZvHVEi3DzapjoY4iNNMB4FdVt91bCqGfPVEMufxudJDiXDjtxEgtiTTdPV3YwdjJhPJ58C3",
  "key34": "5E6UJQBjXmYPMecnprhTLhsQAweySDPCNtiJ5t82nFUpifYBHiqqHhTDoSuUCEU43DK8F9W2jxL8zZq7XYFwJRdM",
  "key35": "4NjPTCoXPLAa4WSXq1Lya3ThY5bxqv7oXCZ5DRGxfHDb41zsERHA3MYNCJc8ng1PBHQdsMRYz67Q5bgtLrD5y5YB",
  "key36": "4JpNGQuzaww7Vvt3VhcK8uAckJqJRoLUo1PkygK51avkL5qzCg1f7YA4vs6jsQSwipzAXTfb31CEgLDBkyomKENg",
  "key37": "4UHZmEAzwXLekcb3tuc2ga51vJSZnohRiLWDBjhrizP5NXbCdQ58Qejm9LdNCmwsHzS7af2FMYjfaPYYn8DJ9Cd3",
  "key38": "217KgEfsqacXp3Fqbi4DQPjpCti6G8xc925mF2P43j8AqUAaD6Aawapvrf94JM2XjeEXLLLcNM4uKpQdLrGtDxyG",
  "key39": "5JvErcSZNve2XaWrQDnD9pKtJMy5rixLSrD5Fb8Q7sT9fvSYHDioAcBibcAi72YGHPDMhYgyD3AvhrRPyh94UcRQ",
  "key40": "3qqVYgNTFbU1QRh1peJqZfGdASHxesV3fkFykBiBE2bR56WfVoezPphf6KBsaYfXGiLRbukfntWZshZitEKA199U",
  "key41": "2HC6dyAVQRBC9gVaDVxQ3CsxzUAs2iPwKT6teXAjzVWLSh5KF9DfhJB9LEarQYFx1muysuH3e8BcTmumqdiMzvng",
  "key42": "5pRgrSB9L3KrXx3HtKRNJ1zZfSfCpyTzxS3CCDGXZvJtxewVajCGA5WLrBwy2im3pYwozFNci568wgwabXd9o2PG",
  "key43": "4igJcJUE4R6HqVjmW1NgwJzVL42szyti6zvT8PNChVRPmMyzjjk67XS7BqYNxX7dggoBmZ5JxPEXbugQhV6HeziN",
  "key44": "RiqPnjUAHWYf9TNdh6niTnzAkhqNLxPcxKbShkPWsCr42ko1UGtUa3GYfpZxkudRi3xT645rk6RQgCtbar8DAiA",
  "key45": "37hMz7JcHxMov7stRigx2tyqW43uerrhPh65xHtJ9xtYDoJdvSDbBut3Z1JnDiCfYwombQfQJWGnzk85EvU9siiz"
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
