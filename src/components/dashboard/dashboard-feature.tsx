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
    "5uoDoY7ZW78peNnJvwNFeDmkZPzstJSVFk6fZs1mpN4r6H6cuwvRD43sydpqKbYFra2nbBoAdLVfzaBBiozhtUzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xFtcWMwBJGqakAyNsHy9vQyJzac9bF41gqdBgni8Gcq9ReK3JrDPzxKYtrXgd66pLLTFtLT1SRrXNHk689TYtbM",
  "key1": "XAgHrdxZTcagU1NDyPgiEurjXp16vcBZAZC9CCm4nY6dbJPnfsSUB6HisCCZ3wpWGJNRxY582QdmzvDzCJuvtkd",
  "key2": "5ZCDBqfR2P71txe6ariDayAiMtZgFkrbmF9EGpUqJSYAG7AwUDMsh848cJCTGJAEqC1Ha8dBhfjMjiDuk9MsQxQU",
  "key3": "2g71muSfmsDur9WXMSYUzs1LkVTYRy2toEqCwECXA2Q8yG4hwY1JeyacT4qrKrarmWUwefvW7iQQ7YusFyRthXw2",
  "key4": "5DGJrMSoxhjbbctxoYV11yZ7VSsrbsUf1GxZTDLQrqnDLMtz7RrxxAhMwcNZvRsw2VsY8PwieB7fnF4AJRk1NRsa",
  "key5": "2nptAzR99ZdLhpp6KPSgm9xBEraJWVcimYYwtgTFnnh678iRzM9wES1eiCYUYqv6iXUGMF2Vm9HCgiopZxGuFT3L",
  "key6": "1pDtpfpF13nFyoCjpGrSFDZzy9bvv1rvGzqxojAVbp354T2f7TP1BmhvwtVo24heWNCty2EpJkVivu4AivHEwnD",
  "key7": "2fYsV1K7E5B5czoJW6E8P2MhHNUN7X3VZw71BFtsFxmrRRm4H8ULY4LRxXx1UFpRHYa4D7QNjufdNQUwPG72qQxx",
  "key8": "5UcQmRutv29dsptgKvKk37vgY7rfdJSCFmFtKrmXz46eVRQhyE62RzfA9SbfDZDfLv5wvNf2ux7TY5bBC8nJGR9j",
  "key9": "2CgHFKXxBudE1UbtLHsEi3xGMDi1CuoDRA8ceBuSvDtnPLZqvhycUSfvrqHBqP5NPbrVkseZjD92QT1s1yEsWp7V",
  "key10": "2556d4LZFXaLGVBW6s2xNUJa8zgvmSkuGaohMrZudsE9UVF9wLcq4tJfGbkXAt5tmsQmVM1Vo4DQpNens1Cr4NiX",
  "key11": "g6CQ1x59RGjZEy3zXMPZF1asZuB7XXGYdxwgedBQsdbQ4VbfkNb1VqS5Skbv7sr2KkNioQP2DVGKhdNjoFQMFeG",
  "key12": "5APxpKyGVqnNJNEja9DzJYHEZXb1BnXAdtfEG2NGHbiHSsVDeXvjsf13RUYp4nzBxstdnERUbsNVt7fqZfagjoLP",
  "key13": "3ebf63t4PatFyxvFCvT83cHjEdwD1c4puK2f8vzicxvw8ibfQF4GYGPFrbkfbGWEpkf4sxNHB8NKaZaw8Ndq3v7e",
  "key14": "3gtgfpKeyDyjS2hpJMC6A7VwZ8EXXJnWGdXRT9Z6P6rBpV6FWcYuMmV2Mqm2qH5QHUAqY9jAScCsoERgsS1P7kKL",
  "key15": "2oqCp9L1NBeQZf1DPS8ASHDeuicpRaeiFyr9iATjVGqow41h2YtDh6BTzPVzY5QnxkvrBkhAeGMTDxjd5LUt41y",
  "key16": "2C6ZqMygukjkd1QZvsUedPpzvMTbztoqXNGnu7jFz11kFn3vGa9wz5mQbS6BjxATxyca6wkfKy4qid7ApLncvKeU",
  "key17": "5UT1zuQKpjWQkdjgNZ1VBMiJSPkgFEqMeqnDiuCySD8w6wJnKDQqQwrqTNfigXWXFLbP17QPNQpSRJWB2yjKdQDG",
  "key18": "EeVjnrAsJ4tPAQHXNApWeRNc8oqaAeqJyTL8WixvNEGfMZKYf5BkxDmDBj9PBc43yncuAmFvLkaXCztufZX5niJ",
  "key19": "4SDPfEJnzWAkuQ1LF8sNK3UaMfw22ZeibJ5oJVFx7EX8s3Reza2BASKVcDtmJv3YPw6pfBWqYemC4rV4Y1SChLmq",
  "key20": "4sD6ox5a2bVqJZz5PtnkXi7wEcGHtUDdCQeDs8TsGaMouSGyzvsjLBbAuro8Ad2n5wfmtK1TsGVbbnmYhpdK55cf",
  "key21": "3S5t2akSY5VGX7P1CAPuNf6AY9zFi28JevZwU6n8qnCuTtrF6wsvCUCaws82thfEY8dKpoxeFEJ6vmw2CyBk7wLh",
  "key22": "4bUEZ3jzFehPnjL7oJerfmoZCrkz9b48xXhjQbDAsLM7MZUjPeowmFuDE3cq4BhWR5e3kDt16hVrtJJSfjDz4fXS",
  "key23": "5LjoyZipx4r8Z1xs6v7APaTS8K7tg933MSZhNBzFWzcvDFkiusxgWvrVXQdLN3rzpSHhvAoszQrhhgLzzkVRqmSg",
  "key24": "438c72aisYsotEfdGsDDe7DvWvTngFxxnqfUTXmMHGZ7oZn2HvGkTR4HKgffeVSznBNJbamPybBhDFHdMmE4SZmq",
  "key25": "2RDnY9CKVd1mQtvvyranhF9fiiaRT8gVVP3ikTnNEuawyzAV4ocAHk7NvESk9YQnj8ViSCBAR4r4Uf7vnpSgbQpu",
  "key26": "pSE42hGvmAdbbUzPX5U1jrStDfYddHiEPpqpyKxnRCYC6XdCapovR7S7Lnb8TouthxctvGH3DLqZU7NMSLkzq8Y",
  "key27": "2RRJxz5M92Fyn89SvzJKo8pvpTx7sx5gD6LVeUk46UHpFSSBNHbMP55trNjUPuLqHvZGoykcnfGdg8YdSfDQfku1",
  "key28": "5JPXyQgwCnqZVnWzuHgCXKNtr4kCq1To2rxcqRfyqEbsQm3LArSGEsJgdcH72e2qd4ex3GAs6kTFc9BUCDQeSeta",
  "key29": "4gczZ7NojsghDfnX4Kh9EGrBvvmyofMF3vZPEDmwviqKNW7krZd8WrtNdRJA6gf1LNRoHLGwN2gET1QVNDjuHDKG",
  "key30": "3Sys8E5RDApw1MaNUJq5vHGju6ZeZAcMgk3fWPzdoPTKntKjWvZD1Yv1qWfsw7fYjd6dVABtp1WK1r2bPDjGXMUv",
  "key31": "yFDtTLAuwndG53NuSDA2vMCzEsvkTLcUuwFDU134zM4g6pyJYgYJEMV5v79W2gh57wmi48Ds4b37gqLLS81GXRc",
  "key32": "3Wu74gKynVuSvHGx5e14SEaKTCyzMoG7ne6scSRY8H5yUK9aiQXWSizs7YSEHJHsiMSfYfmo9HrCRw2YtHQvc4JP",
  "key33": "4DptJaGhLSKfmj7iKAKXQzH9ukEX7dAEDPrxEW2UH78c2VtKBRRoSeFvUAiKvkeCXV4Ait4VyFy4gYBiWHAdJAxn",
  "key34": "38HaiDds4W3wFH934Tw9ECS43KVQQbyzCfqMR9KYT5M3JcGVLd6MSyBT4wJi5b3bw9xwMydNXEpXcKkwEkUuqkCW",
  "key35": "4Q4cvPGpvxAWXUmKUKDfYng4MNqMX7VBaSHysryuhgEyL933L4FcTXEqH88SUxPtuZ9fr4Zc7i9aGxn4fCZFKtaz",
  "key36": "2tBJhE6ZB5rymEEprgc48asTsFa7sDL5JiwB3pjskEm1XGiLNVjmw9zvvVFYacs76HXfGYePFG9wgaKn5D555aRh",
  "key37": "rovjTqtLy6b6A6FWbA6EHP2Tebjvz4zfa3c4DGgzQq1Xj785W2GX5YTqEYDocfQVRNpGknbN679RVJsg9HCFS3J",
  "key38": "2BSRjnQ1FHw25kWVHCF8A2uxYAJwLNHBu4JsStuuL8CAPvVCU6q2A9N3FhMbveL6qvAdib1DcLVzn4XagKiAxFCg",
  "key39": "5AzTKr7V6wAke3Y5WTpyaSzStLmCLf1PCGb8rWyFcDGCMyFVcFKPPb8Sho12yGijBzYvPQrpktwNRnuPv6f1Dj3g",
  "key40": "WkAdYf2M8nZYgTTjDWdpoDEsqUt6CqfNNyPsp997oXY73XhWMiYDMvyF173AWNyYhirg6tsP619i24pBEzA1YFg",
  "key41": "5JJHAU75m5aUciF4uW3VksCcNvFEJu24BgZZK96KSUjD8QhMAs3x4ghiMRfPv2oU2sCuXbgWwk6mHEM5BUsjcnGq",
  "key42": "4SPGouN6V5cU2wsk95kJt3hAmb47sk8muvZJZzwhMASfGj4xNkAJSUN68WpnA46eCaQeqGPsqNrLuv6VWHy26MG5",
  "key43": "5GnWxAmwLcyyZdsQjXnsfaxNZCGVQDA1KMjKyiJEvLiHQ8cYf6BpAcwmsyvd1xf3qQe9PyasNy7oZoaT8Sci7TNP",
  "key44": "2ALY5KSFYwK819Pv7uiqZpCPJKDUEVhjnDSibD22pejxb7oB8pwwUR7ggLkaE1FVG4dmZFAR4eux35rKkykBDMyU",
  "key45": "K9xAzXAtaMZ3EFS1dTf49yDeasrs1rYGVEbCv93t618EUDCMqYYQuoV5ESWTxjoC7rbu1JC92W7MmuiaW1udPqo",
  "key46": "55g12LNKnYqsSX3rNW8JiXde4DBWz5mvayLYxpXkoFatqPsAQjcsoRYruNuud4ijd62RvgowimgQbjvx7crkaRu3",
  "key47": "mo8mubJVqAJ2cZaqNcQSjPtqYcR68qGEaHbBETDezuwW2xT9m1FdoQu9mhBzLy5fXju8jcig7WVNJRnR6rbaNNn",
  "key48": "4iL6J1rFE45oNXAu4Y3oNtjh2bKTyALzMEzi7Dd68rYWQu8RvUK4pbV8A7dVB697od4CqiEjenDXZwVTuP6qwcc1",
  "key49": "3n1Zpnyc9hWx4yfURvX4J5NEMnBQCbxsMBQiMJBuRCgJPgmChiwWaYL5tgzciHcVpaU314wwAPgj7ymhEJYEXT95"
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
