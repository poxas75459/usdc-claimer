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
    "5CfZSxMJZX6vWVdKuLrTdzowZxsc7jNaLS7GHfynsWB5sLyxEEJu5fLqUg5Gg8uCTMgJUAPcGsrG5CKJUX12X2Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CqNbsuAkyaAWL7JBYGhCEwxAKC2zecfD6QXXcaENGzikuCn7yuWuuY4YtBQNUQx7ShNm8rwymxfpeauYgxFxgJC",
  "key1": "58mifUjjn2P7FoHC5pmGn92yUAqoPZZgo2wTPvGCrUUaLpYx4j8S3QNXTai1dU3p6B8t42WQhKU6ZMibs2hqKQeF",
  "key2": "KxbnxMZG3ooS8vjcrzi2M2nAK7CkkfeeAgs8w9YwwJRiRRZMkMZwudA4djbLfKfBk89H163fNKjq4VLQL1GGuvv",
  "key3": "4yGiUH3ZAkyrjMPq74j8ZFSd8jYdbBpFzUScj8hzYMMKLvLrTm8vbsQUjAXNwKpsE4GfVh39ATaLFmUUfTgxxSHQ",
  "key4": "2tD4G1VoRDpa6hVTtZGgMcbF2NEaMiR39v8FFKWbyvpiBWHLqJCpqvq5BQLutqny1UgTHkSuoaKT7RjqJpMGXHDR",
  "key5": "3m9pNFiFzWY8qJRfDS9rjmNnys21DZ46K9t69wd5G9yoEUqje141PasTznWZgEnQpqcPvrE8u5MoeX6vsuGRjwBg",
  "key6": "4F8EV6KyTMQwewXRoPrMGMuhWpZfiY9R2cXkLaBdYyv6wfa7omaJfQZFMLvSpmveund2M1K6PprGy5bpPZbLZmtL",
  "key7": "ZZeDCQ9s75Ve6rc8RKNjdUNsEk8wkC8a4dysQTkNwwsVEXG7LYrEgbcjjYd2UEaKuijjZ3PT8RipdZp2yjCaPgY",
  "key8": "4596FL2bHxKMeDfCjrKvmUyofETo5LhnKc1g8evm2DfdcdiNfu4dwzhKvXvrhuf3pvhiP83mXokRPqFe6vkhFkUS",
  "key9": "2egKZ9hz5VoTbiANPconkqtzyvYL3NRZYZVHXZsrivo6yDxkp9QtmNJRaP3rfuJKN9PsYy6ZEbiUSviooEfDDy9u",
  "key10": "5sYCdfXZfW54Wfrz9jGbzzwbCfMyb9TVJe4ApccSNzYVCA4q3E4RfHc5AR9phyECfBSnn3jC1o7AKxoV52RbPJjs",
  "key11": "3hrhC5CSmTayH4enwPBfG24zvCqpm139UNRKqkprmZxpXm49sGsXoCSgQViVePvjkwEyP1PTpv6osC2xnzkHmi5f",
  "key12": "XqjJTkh3wYTHprxbhmy36avMYdkhMSGK685bumSQp7q8d8Qhm5tWYqK7GJors1tnx92BUFQaEYhzxdUJdrtyZ1W",
  "key13": "zGC8SgtRJY81kZNbNcKJ1xad1Ua1JRqEEYtqipV3umdAPypGgBz3dUvvhNraxr5PhEcQqHrYPuSAXUtpgeDZL8d",
  "key14": "4KmWsxfdpySvhLYPo2hNLNHvhXdcMh3MRmPma1dazxupwfiBhUBYjK7jJcD2hEWYixVtgXfBn32zbpj5KXVPbeYy",
  "key15": "5t4BC73aNzdYQ1LaKLFUspybdQLdQWtWBh2FmWAdNtnForwAVp8p9Qz3wNjmDmPvGxJGzSk8cGrgKvCAmZX3Ymf8",
  "key16": "3ycKjQT2fV8v2ak8L2JcpTpoqNVwMXcb4vnVN8Qkh3dBWoF8iW4eB5cZYF7m4j3WdSqvLboM48NjJrpsov7sZXDS",
  "key17": "6MNtptLt1Q4tbTNysZa5NBKMZzt35PZEiu33bDUfWd6Gh6VbimdMXifT7q19a9B8NGVt7SHVcT9P7hGJA98cNR4",
  "key18": "37pETemnGJV2ctHWJCEntJYcNjHLZDXtRj3YVndBGZNKPZHQNzhPo3zd6vzrX3SWHHWmH6srDU2WitzxsqCysXGa",
  "key19": "4LjfPD1NSFN4VmaFw2ASdeiV1YpisbYdV7dT6b1SLz7me5gh9nH2tbThMhKms41dCCis4K1Lb6KT5oRpt2dwYCvC",
  "key20": "5o4gnm22NY3LvY2FHbeHBVz15mqgmuQvQQ2W2Ft9aDvti1B3j3YBVw6RsHENFUS3mNXQabfoSe7GKqDd3ut9TU3c",
  "key21": "2YkLwnkVp2GjuHpnLf87anaZpGvT3qjVjayk6b5fv5oNcHyavTwZRzvBtM6NzuJaRNbLMHH1wGv6zPPw1KLA4AwW",
  "key22": "2fSzByedj8JuEfyMJSLMVcGEmch1xWm69dsz5G2dwznPrmuD3se5RSWPpYQRWz9fwyXYdMNr2EV7dKvhGZsJWHHF",
  "key23": "5yYEqconMbDeLCNqfmt2jxJf3q8QYMzUrbwGxkwKf2NwUMHKxSrbDRd2RbEhi1Y1f9fGmZgdURim6GFHTcCci6L2",
  "key24": "5xVSX8rYs5s3mNEdvuhfJNfbuz596rPrG5aVnL1zG3CCEdDpzmYXg6CMZEo83z1K29p8zjgiQmRRa8asehKazc2d",
  "key25": "wEH5ACsLRaahYm3zH5SAytxmpAv1yYEpWQMyJ6qAVBRfA7dB8SudsEcmcFUHS7LmWtAwPaU42452wanccvU9233",
  "key26": "3CmUYyXEHjakAaSra4v53FPMJesC1tJXrVMstciDQjWb6baJvb9epAeU14EH1xJS3XHeyVBkaSSf4t2uYnsa6LZH",
  "key27": "4DMVfbcBjrxENSk8uNavQyPqt72rt1AZnBeB3aHYaUYPqvyepCUTLrgUbqx3oJmsQcuXS7txFptqkTFPDzeBmtG6",
  "key28": "3yQDicesJPeparujZqxFABEW3oWEYEF5Q1BfR5KeVztMLpKdcG9KX6QFTtLduz2SQBoANKxjpAQ2VSwfZMPPLxFW",
  "key29": "EbrDc3kGkMJwMF3xS4vFp2PJv3mb3rBpWPtjxKVW9ceYoKutg1GU1BzGr98tJP8SkcvnNV7U9gcBQvViGAKXfuc",
  "key30": "5exZg4PrijAeeB64GvSNDRsGMN6jcUBaayvysJnSoUFuEk9KQywDHf9etCg2EF6DKy8djJ71hBmDQ2Q2uAcv7Z5N",
  "key31": "5H5GTU2DiucmWQt9pKFD6ChiSK3y2uDF7HEPgzZmabKY3mdx4Wmzy8MoxyUfZtFTRVJGTSyV9BhoQy6u9mj4t6an",
  "key32": "4PK3sPMA3RgdTfnnxGc8mQJRaAph8YD59LcDTkbW17sGySe1jGyKbqEDmrdPUSsWM7H95jRJdjWiLc59B1Dyuca8",
  "key33": "6gjzhrR6uc5Wo3dFSm7ptnessZRYJk6v4Tmpc5MWaP42WL8CE27a8b2YFpocFRj1M6VBuwainNu1b7bEL4gdYE4",
  "key34": "2r2L86bDBNyhLfbGNU7gw22iN6HA7hpuHycaVexMjb9hGKqxtswuKaz3adYodXrbqHRhF5rSKBePyJdupKM8SHRo",
  "key35": "4C6qsyH59w5sTh8zWeqNAgdVN4d9SKcqRqMYqoo6zvbtPqA1VSTSXgVV5VusAxJvuBMoZwBfWDoThppZi5o22cnK",
  "key36": "2sVqnMTeP2RwMWNc8UNWsBkFEFNaT8pbE8nK22uahcRndDoHxUGztQodJLXgejerYbWEpyfTo4hh73Wh3KWJDXZA",
  "key37": "8z4oMxsWxa1M7iTPtGtd3cmK9RwHXoRU9TSgaFoSHAoUxesG9onEbfZDdociTgfpkJumBWuVumRKPMtJZnupKyE",
  "key38": "awUGgakr2rrGyKANe6TpvCzKi6J3PAiCSiU6XVRjszoazdTuwLWU5VXKhiWgCBchyfcacUHJ4Et824G5y1aBKeK",
  "key39": "2KKENbQmik3fDsMtCx14BqK4BfMAZCMdqJk4S7YECvMXRDEBys7oy2D73xzZe3EuqoY4w62L4PxeC26BroFVF9un",
  "key40": "3SxrC8uNVtq4GXticY3oCiGQTQxyXQqDKrrWRJeCbSPYUnGHgsucXRuqMRk4agDKYmEJkVMXmzBmDXTdub2LhuxP",
  "key41": "4tZfvnCsjzASvXmYzRT94uJipUTWGHzfGsauCZ9g2LKGpY7PeRU23mEauLA4GvPNDBzeQa6spXsH2jHRM4PhMCq4",
  "key42": "5bteH5zhLp62rDD3xoXxw5auPykqaRHxNEMhy4XchUJANPNgP2My4TkbmgkN2qeUw4nUbtsK32aYzectsqVvHyV8",
  "key43": "5RijDYdQAezcVFTvC2UuCoKNhnAukeAM2jLtaZTB1CZ6cqbnj2YB9pyKRhuef7HiYtEXY7pW3DTC9BdY7YtoFEf8",
  "key44": "2wcNy9YzGyzyGinZvQ6GasMkJt1LpjvJkAUMzqDgrgU6oVe6jLq8n3f9vhZrXmpUt12G9V9ofj2n2XTgp3GtsU7z",
  "key45": "2RNpBix7Xj2RiJjuVa5JwNGZPo79jS3D1hRknBsfcqMvCAHEHDu1xfdEbtFaEgwWTypQefCZrixVX2vPuyK9oVNM"
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
