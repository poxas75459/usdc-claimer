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
    "4K8jq8FVNvUPb6GbHq1F7tV9Hu8GpNgWi48NT3c4cLQ1MtbjCUqWxTuAoJoGKcTutRrWgHmUdZyR52rkPmeUkBgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M5MmZAvSGqibaNqKo6DuArobSwQGKffWzYjATSXVAerSWm71dtAMs5dc5RRUvh8AtJWKJDUGgibYxpMbAEbkUYk",
  "key1": "55ojN1a1vHVXjm2cLKnJ8wh8M3mTk679Q9SNeRU29fGbu8JWMSRpqTGEtMzzzY4DxDWNSTyAuMZ323vo3mcSdCiC",
  "key2": "28VyZTTJzNJvnRSGenUf1UT8cbUbLS24eJoF48DsA8wTdmJEEiX79T71Y27dtAxs5SCRbi5gtEPUnFRa9VG66xDC",
  "key3": "3DmcixjMzay4eSJKsWDmyyo7RvSufaaXTDphwcRMPH9zkUguGUJczoK7AZxE2A4Lry5XFLnwLjjqKQBpkuc3tu4a",
  "key4": "43cWRVMvyF1bZwLxXE1MFr4SjUDLxNn3usPu4kNvifUEDmdVmndRPZGFGW5jffGtZYYqpfmhy7NcosVknwD2cJ44",
  "key5": "2SK24odKGKcm6FroZUDwGcr3H1CH7UEfTX94qphWVpF6w5czYziyrrvqKQAjHRHZyyHrW1cXqbzp9cY4Jm7LhPhF",
  "key6": "VKFwuWdcUpn9zjoobaCS8fDyV2GS8FX9uJjgMUMz1SqYMxxTtL7CU7RqEuF9myzs4FTYHghHJanc5uLKJofGDqT",
  "key7": "rdWMs9L3HkrSU9SzQk3kiSPjdHQRs7hLdmshxYhVRt4KAtMyXh4yRg7EbC8kACTx44aP7KtVYQ9pqCx7JVD8cb6",
  "key8": "syfwCLXpwBczDxk1HhTz5yJhAdN7XrhE3Pka1EdKXkfRfD6s9VdSaMxAmsGGu1ns5QH1jnaZuuL3wTbfoL5b7kV",
  "key9": "5tAARFcGBXCwWFGxSYqebqEPzwtC6pBN3P7qYKVZgt36P3fZjwdX6J7gf1ps4u4KfEe8G2xiTzMb2LdE4mdMXkph",
  "key10": "3DMRV5S4zzxSM4KiFtKBTrBLLP1KjbFKtftRr46rpYCBteGLNAeztLg5VBxs8oaxDtVm9zL11V2vXPKKnrT2xmpn",
  "key11": "43F4pVcTQYcPecx1LiFE3frchpEq6XF29JUo5wrgBKg25qkGjjBY8pwawCpt4r9duWG8EPnKRQf7prtq54h6WL89",
  "key12": "5ZNfmKvpcPyi7WXvTC3YXS3ZJsKRNiSxaAZFu9xSxVoKaz2dzPKwmEkhSoKeAf7SkrwwTB3mizWN4Scarc4PPso9",
  "key13": "2ek79HscKFRawmVv5heiXKgutVwAgudtNgy8AkyU2BvpsqYV8i8E754P9V4MnSaVzkvuhKbTnZP4mjxaizbYw5He",
  "key14": "4dGP4oN635foPUWKrxJuiL24SHwBUKD8auj5o9HE7NZ4E9YbyYFq5RcSobFarAiWSvMLyetgwY3Ug6eypSe6tazf",
  "key15": "4mwKximYe7mGYCvVrG5PyRKJfYJz6G7DNV6D4WTf8uSCs8E7EhPDqNrsxKjRB2rre2UryK64igs6Hs8GQmoiXPKu",
  "key16": "3weByJmuJ1B5knUan6VzBfYVz3YJhZ2pbMDF4fNwe13NEXk8GmLuz6aVvJVAJNBThZwytfoEiqCm8YaXrQyaNXEe",
  "key17": "5Jcv8pzreWjDPDZ8D6j5o7kRusbzKG42wBpvExxEoCHAHC22QWtxtvW8uxb2LYEX5RdPiN3ooDb526VTSBVL7uxS",
  "key18": "ffJhvZ94M8VjZ8DDRuJJW4dLNVPm72WBpYbGe4176n2ZEsJJxKVA6xjjH4ww7wvduypipGPrwwo3Thp8cR6Qth3",
  "key19": "561YSVbKguwPnM9Z42JVS51o1QsSsPPvR3LhKK31wJP476aymGeJK4xK3RYeVMrEJvqgbepJJDaF9n7f9yBdStk5",
  "key20": "4pbz3Vb5ANu9BZcp3VnP7twNHVwRzxj27oBLdcrPLxu2K2yEMBVLVv78sNFS8HtpgMrhvCRs3iDgGjXJfLWvS7FX",
  "key21": "3oBY5M9UR6ZyaSkcN3QuA6zFHXrb2CisC5d9M7zxftcBgQXFkYaTHSwxYmrVA4JTDZK7mmnfKCQdxcsAWgFyv68g",
  "key22": "4rEcuM3XTM3ioL6NaCYY6qXvwbGWfmTvMLxcqHW2NXsGCGMq8egWbySnC7Esumguzk7BPqUm5tcaoBgkSKBYNxKf",
  "key23": "3EyVT8x7ki7tQNufV1FLAVdmRGQ5n5mRrTZKa5EsrdY63HLr7aXHpHdGQd61KgymcL1jNEqqCF2vi9yZDETguzER",
  "key24": "354zqwhoN1rhTKaTzKc7SxxqSe3hLNRmrmDVsaHjSwPv6NzvGJKjdMcX37g7AKhW87iBHkSx63YvmhfQ7LuHk1RK",
  "key25": "uZsbmkgHwrJTvKuBeoFskpNojeGPfu897DkYe8FEy7LD4dyuHvy2iXGujXiz44hSmEy7aKGzxwV4L29i5P6uSDe",
  "key26": "3oDxz3JbfKteofmYGQYEfuV3fFx9pLrhuU82NVpL5vFMHMgLJ7ZDhvixPP5RKftPbCosZJxagXA5SqVcXq7ShadG",
  "key27": "5jSG9gZkQSWz9tPei2Ga1epwVuYuv9guGcYAUXBDJY3Q8RV8xAXuDumfCxJZzKUQ4UHCBq4ncMjyPrS4vybhdbnw",
  "key28": "3jpKDVb6NjrEcmzc6ApfpYgCffkCht9dGH1bpc17JtCdf3LtE7hnwFdsBwZUjctHuJMzA1CY4VCH7NtnuRLgG5XJ",
  "key29": "3G1QXnnG8g9UdSU1ghoH56mL8zSeAJHJEmshzWGyRU8iHsRGhoP9fcb1XT7X2Vj6jf3Ki8HcBkrFbEGPPNesyHcS",
  "key30": "3Z5ETw95Fqyh6iAe7AMDVued53RWj5PSaffH5NeCtThYYRL4Qjt6nCe2K896nDVdYnFXm6n3ZxaiiJF6WW4XpzZg",
  "key31": "3sBpuNqfDK7JAqeJnzPXzvJEiQvza2aCYLADgdymApBNTTdsm8bnK4sEbTTbU4hkcS4GseFEKbbfEgxErySPvZka",
  "key32": "2YTdzq9uFcBaaEnPdGaQetc4av3qPmrVT4FwoEuEy4Tqx8zpSeMUMfy239bucyq5oWmiwa8jr3a9mETByFyEvnEk",
  "key33": "GdrVViKMZQo8wGJPmbjbcCQy1mgcN5wcGySAMgkznxo1Dbnp776PLczz3hQcyNxJujZHBsnztjEQdT61GeB6rQy",
  "key34": "NnNVtjUuwu31xWfpfqcrrzic7n8gKd2v4Wc86PfuisvHdRzKwg5ZEk6FiGSKsB6gBwTiAFPFX3BZjrPyDfuix93",
  "key35": "3JaPHD8EnPVMP6P6BAPpw3X2Nwf1CnSSXx81SGa4oh7c6Uh7eR9hZnTm2tgMyRBBbYPLWRho7kmF5yG6oYxBJYB",
  "key36": "3NWcWLmuRq19r5q9kdEE9hBS4AeQMtG1gFn9s3K6m13bduoTF6By1J5YLpKjWiuj3xDKWsrJnkCRFRb1kZ4Qtpph",
  "key37": "UaKjojxBrEFjEhVyndRi8qHthniAdkVxj6pVmTZRi5LB8owprbJtNwv6khMeTuDGcFurCoJtZH1pSg7ZJPaXM8t",
  "key38": "65PVrg5ecKHg1gcGi62Tu8nEEsZ8YQbhywTdiAUZtYsnqzzUFkNCC5sYMF4PWn31a4tQwz4pKs6pbTr1v4BX4QT2",
  "key39": "3xJ9wUbCZms4fTFszBd5y1WwSjZ6MuuS4LATH8pMrtJU2tewLFbb89Y2nDgYAcDa1dBdkWy8jhJBYXTvoJLirecY",
  "key40": "3VHMWt8QRWmMo2Ej1VbCWSibWbkTFZJGMVxiuLk8R7Cyag6gymPXH9WhpSmEoezFLMmG4TmvBfJbbNTpdgiDSwv7",
  "key41": "4Trp916sr2kSmjykmCXrim7fhyrzrCdG6RKa2z558KqP6kwRqpZJcCwtxDHaUus4VSA3uP6ZjwxPEf4u3dpXHBVV",
  "key42": "4M25ZSfgpk1bQYK4cALSyA8dzzj31R1j67dPS5osoMtsTxeRghrY1sQ3ukZrM3sK8DgSoL2a7wypxypLqrvQxaNC",
  "key43": "456un6LtdivTbTuCDb5Fz8zNGRU8bPpLB5uc2ACTcBWz8CM77rF7NUK7NTnp7Bvn3StLBA2jdCtd3z7kRiomGRQr",
  "key44": "4rehVH7zYkp6QKC6QnDXsvBvSjQGQFuXkc8FziECEbzHcxXg3orAjcN8E1jUSmM7C2wJWrsx4chN6NPp1BeSUoq8",
  "key45": "4MeX8DU6xxL5pKYrbWRvSsy2Fv62U91JYESkZwRCCmEqDscWPmwigSpcc5sb2UHqQKCss87SR1FVGKDZW9sx2j3A",
  "key46": "43owf3hPrmU8vw9Yd68KNVTTZfWGrJ4Q1Grz2oQEFFGv6ka7vjMnkxJKhZ3RqiK2aH6Cfxpuo5xEdJtYBemQB1EM",
  "key47": "5XnYcToxvS9TDAdrpgemdGAaNrXAEytiVDjNLLu7bpqetKwAb4ps6tsucpz5NPv6G4mmZUBhL2W8y2pGJWcHr7gE"
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
