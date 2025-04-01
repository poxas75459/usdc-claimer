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
    "UpGcgKPTy37TWvxcTBQsMoZzdo3KmXnGpmnfuGGgS2BWo3x72WrJEtCSckc9fwX2qjUtaZiLUXCrf9ouxuPU91w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GTGBtjdammQdmUBkznZfbiQ7q32k5XMVavQJLgzdF4AbRCbcTrRG1NC71uCPfzsP8zosLTgqMuiUZpKizPuwAmR",
  "key1": "3q2MRcwsFRJaiw66AdSEEQaENAnMQvVD1haj3i2WUV4gM4XpArPyjZ5BkDPfFZzzMD342fdufjbYqGPQW8yHk7qi",
  "key2": "2zStUv4RmfgCe7E2hf1BNLw6mz7AVEcMUDFd3xAo5Zm9e4fzPJgmtXR9TMeTHFNBfY5kyK4dGUsVyKGZ7G4eN6hX",
  "key3": "4RXgSuEw1yz4GGSspYSFM1r2iWtuqQZYVr1j5izHxNH993XWJttoudpuHmR1JmuHoWHD2tL7UvJDRqeRbLpBiVBt",
  "key4": "5vMtxc6Z3w7HALCgPcU4mp9VJ7yNdjtVwjZWH4K8mw58TXJUN1MZybzLGfMGAfPg4gJKZ1GEtixLym5XSQHeHw1Z",
  "key5": "5Sxct94oXy7VU5nSNzKUn3e9DqbAk6zGBT7yW62jL1kLRPrBEQhGgK14fPfKAy9r9qSMnvKPew1e4VAQKBSG9N7c",
  "key6": "4rWXJY6wDoAqz3zVAqGLwJmqJWFqHvKMwnBuA4khbokDtF2pY6xo9oXxh2pBhsxkdu8sica5G7iHH2KA9pEQsT8k",
  "key7": "2rFNTjqpLfgmtmpDi7o8iLxNVJ2a8H3UKatEHpFQX3PcNgoSLbd2TYYCzq6r1PCESjvCVujH7ozvonN9NfAmraja",
  "key8": "3yjQAUWQzNrPEoJTL2PoMitrgRGZz1Qo9TyBUgUzBjjnhKEqHK197FieXk3KQngtjRmgUEYCcDejLwajqBKFf56p",
  "key9": "5L5mMgWc72ED9vDTdGKwCb3RzxhbERGXfQ3oLuUrgEZHEBo766hbkv1aiXDXhAmrE3DXaK3X3zJYh9gmXvxALPRK",
  "key10": "zTrfq6yfWDhErcptPhneum3KGXrdeSFen4yqYPXs52nDZPNKQxmyGrtr8bL5r2jHsEpJmDTFh8qeCFn52CixZRX",
  "key11": "3s5vwpozf513G8ZaYf4qDwSGaQRELntPvFnLpZCHrnWVvTmpJiKipvjqUxcbcKkNtYMSDnEGD285rXGP3nUCPftw",
  "key12": "3ZwU2qpr6TWo85bKDwAbAjDDRm1Ssx4APcckqUfJ7hoKjyySuK1GXDxTtN3NGeQoG5zZVwi242jFYi7TMHx7F8fn",
  "key13": "3TbZcfwgwsJD1sY7D8TyNtoZFKuAPjiJJnpTFDscHxbPru1bs4SUBSBZtD5ncdkGZiR3j58bM4jmwRbFYw3YoSub",
  "key14": "2gzG9NqW9FwXF1KWJD7VzHMtzX1WdF6Dq78RGk1k21mDwywuNRbVxhhcxCULgTMbuh1x9n55h3pFE6phnATyCN38",
  "key15": "23dDF7sQbq3XjF6udLi2uxJbnJRnEExhynqs1HMty58FSmfgtMyoEAHqK7of7yfU75Dg4K6DEuGcWPK3rQaiXZdq",
  "key16": "2kbJFiLEvcjtqwTnx1xaTxBFZN7kkXLUDTzsLhMgJ3uGVjocP9Lq4wJAqkwAcwQFwxPpSexSXhdTz4vrsojo1jz6",
  "key17": "Qf47UhTni9814KwHhqkUn4tadRE7rKYMTLpEs3JFjHcPyqQMYMxwkUXhr9PhYjfQ8HqBywEpFdeHdBG71cwFtus",
  "key18": "4ZcRW3f5LqqmkLMHqQ7QVfN7LUtsvTFvA3hVzqqeGktyaVUj3tDNmwFzzvaekzLAeNVXedEfgPddby5aZmSmxtJN",
  "key19": "KH8cq3mFjnWzTffntgUmX2fw2bkfLZUPfFuifKPYuYRCASAN3Fi1Ctc5deu538KX3TKDg9FnZK6DAri8kAnLx5Z",
  "key20": "3tNzGAjA4RnTyyvkM3pGmccemRVX456r543po37fRZMN8V1zMEtvgHnPzwWUyqibGRdAL6VHCssXcx9pz1UjMMHf",
  "key21": "eAhEveuHURwTrerLzUwUsCm5D53MwoKqg2oAGcJnwK3Uqq52AZL5ZVyTpLNExndppbc3cSod1X7cahgB2jLXN39",
  "key22": "5rcctzXdzBp9fPrEkfjXB9VqmCYReicZeR1VK5qWaFvApaD1BLoLNbzPNNyTsHKeCVqHZ2xVzyZftUyjcarSBfrV",
  "key23": "2v3mGhFUEByzR7fsiJ7GDXHQ3D4CZsSMyqVxgn5fXoH8meRuKys9neQ9HzRLTqdaNUM2pueyYZGDyxwr93FzFWKU",
  "key24": "3aKMRSL9q23PtjosusamN74ep72coP2kjisA6ukMPXhS8Ym3PqKycTVckfqCkuoNz3wU5MtkBBpfhborhV2MADYc",
  "key25": "42Hs3Hv7ikAJypuoAu4fPoRJHKNGVPp25XLJqh6zpheiVHDcrUhxj426d7HexEX3rKTE9KFRyiCMFk7et9sHf6i3",
  "key26": "3iFcYXBMorw1NS1WDPgJmnzXTpsEMKjPpmVfhV7kc32iQYnWHuFwTdqkuQ68iEKoQkFrEK54ceDFRzwerrN5fYG8",
  "key27": "5Bmfg863KvTQz36d9e6hWqzXCwgYC7CoAzWMgFGzMicoAR9zLLe2oAwYmjVkrUto5WKpfAkwEDmYW4W8VjBNKDpU",
  "key28": "5Qsyv1r3P7qkqsAYz5pGksFEky5Pix4ocQe2wsyv5YY3mdhoXED7VwrCQ2PjPTPcw2U3xbkN98q4ejAmv8QtGx3V",
  "key29": "1239MmDwAQqXBZDNxA2iikr98G21Wj4cN9bKnHgKA82Va9jnpuoHTgX6kB41S9HDfCD6H4eWGTbgiXisnhS68Zi8",
  "key30": "2VYorDZEgqieS4Rds5Ab13Kw9K4TM9i6ojXeWeAanCtGJeqntgP7TtqnEAQzcxeXmxKAgJ1ELbrGHxLzgczktSmh",
  "key31": "27boKcJZW6uWoqZKh22vsVgFy4Cba7sWULikoz4SPtWzTx2GJb4yrru5TgqBuSkG38kLhoKaVHLYwJ5aYpm1LwLH",
  "key32": "4MTrjUNnALx79RQtWDAY3m6tDj1rxxvviam7vUz7s5L9dNf2f3Z7GrL8WiA8G2PQGbRMhERnTDao8umL9TCLj3NG",
  "key33": "WzkwyZSxEYCJKmwZf9hfwU3B4ru2xATYRL68oVQHCoAwJQV3eSYWJNDUgqe3JPqRac8NUDQ7J6winD8m4uVWgMd",
  "key34": "4VejhMEBptP3Yeb7FqoAqVaRziK62EHSiHpuoex5ALNs8HVcoWcwvqKJzYJPpJm1mVTWQRW4J5HPSHhV9GoTVzbG",
  "key35": "iRzZk6UecKLdPDnyGinAb2FhbugnXjqAXD4wTEMvJ9EJDF8srmBbHkBR3cCRPwtz54guahYFTB6c18t3VNxQq1V",
  "key36": "5jbja8ATRdevuLArZzWoBbh8kVHfgt3agyx294zGDuDMATatD15iwN6hc7TbPrqq41Wq9Uhut8nFNxywdz4YzNuL",
  "key37": "xNAPMXt3L6fDCB8ANQbnUWbsCNRPhseGLPeGF3xEA3kSDtYqRxaFiR8xrDsBS5iHH5iCUXnSa7uPwKQaczWdPCW",
  "key38": "RfPEFehf7YV72D4oSojyTDMcctfsmR9V58NZdXEV4XKrtRpKxtQAuQE78SZaxjbapBHXBj6WD2U4cPeMBjJhxpa",
  "key39": "4Us5Cg38qysBLhc3tudNEnrb69qBaND1JapZY6jVCmaLK1H3c94jrx144HfdqcJ1HjQhF8rjGTreG1sb8YHtRqpt",
  "key40": "DMBZpkxUHCdCFbFG1f8gZxchUuFGkEzndvRafSwU9s44QQpypfQQpksCVxY2saNG9eqMCURr9WbV1vYUktHd17u",
  "key41": "57mJPCdbHTjQcF91hZLVWx9EFbPpEJWMbd6aCkqkM9pzvLVrKrwFBNXJtMKRnZfnvTpc5uqMAFBtd9gF5QaMtWrx",
  "key42": "2XqR4cWaZE5v1ZS1LtGgKbVqQRinJmfQRjkf8y4NgFDoRu6ZM6nh4agA8zhLdnTGhbBcdy3TSmmaHzA6wrTeYXnV",
  "key43": "45hP2KyejAqqd8YXdkthFvM7KkTqGrt7fGE9LLzXbKcPWyJjAYDksZtstKy2a8VpLhG9Ngg2gEThkwjqKeRtR4Hw",
  "key44": "5B6qTSSJX3yQwGokMv6N3hm1VapCF2nZcQKT2GCELxTPk9j6hiWxkYT9JJmHDBsoBohh9LJFofYjqVdDCx2W7Jnp",
  "key45": "5hMrSYSovPmsCgNRipMAfdTjEcew13drw7vcRusY15dw69amTum22KpEhxYzN23cUVHNKferj2kWSVEtwBCbq7bt",
  "key46": "UVesZY348bRfjw3JPQfFGMjc8ionhiSp9xW4isMk2GWGBUKz9SqPH9Q81Vy37yi7pxo98dFXtLLKaguEH1St5Fa",
  "key47": "38QAgGHdJtAvw3k1ArMbHVi1vsVoJVQiLwhuuqCWAhdq8UFvLnskTP44YKzT4KfuPw3ZbhM1z2eXYbxd63AjJ71t",
  "key48": "2VAc5JRfPTKecbSBKQUJFra3vLe2df95c2bWDfjaeyEfWwk4LL21dMT6JbupysC7Ae4fAV35YTBivJqCHvphkAa",
  "key49": "2yBxMbKrfW87EEqjK8i8dCycZQSoSegP5a8UwJJM6NjjqNUZGau9dRwQ26rWc3TWfRHLoHfiJZfCuFS5LbNGGoub"
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
