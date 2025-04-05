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
    "2MvSQGEieDXTk1tY5cGZcTGMqH3NcRu9A68VCZQFmtwaPAz9fvgzwjYifgs9vx8mA8EmTm74J2yrCqTAcXGM72hD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bHe3LfhKTrMJWK5QVoPSPQoq2fyKDfFbKoMxQEkozxepDbTN7Pn3TXtH3px6J3BT4BvExZEeF7bGbVGZsQhyRKR",
  "key1": "5NVdCk7ZjdmJaxzpLLtQJfBdYQJ7Yt2LHRrJDnHwEgN3kpbAoxTmpRBLPR5XaJW5dUzgLfR6ciSWwLZZNJEaA2TZ",
  "key2": "3oUtyTgtS7kMQ11pNErGywkYKT1xDLeKFyhjvhzttTcLvEFiDshzeyQqmYncXrvcZHBG8ZMrCDzr7HHhekdr9ovw",
  "key3": "4aPK3yR1DCqSLkixFbjW4Q3cWXyjwnthNv4TR2gsiSee5atwYr1zURLVxSjuqh7dLVe6C3vDzVjxfwgP7h3mkk7d",
  "key4": "3HHhgFYcCZkNcYuEqLNm1Wmn5SFePV38oXXmXSTYKCep2gidncdPnasve27qxHZBZU7gtyEi6pEed91P36Zjo375",
  "key5": "4kmcSzaKYyUZzHJsgeyxgGtynZu6LCYaQpYQV4V5DiUtzJhZjzUioS5aTuwRJFGTEWSaYkPcURzqd8UVsaDFWPqw",
  "key6": "3kQ26hXxjNR9kQyvLZR12SGSVzGcs1irLKqmSrbhK7rnrJh8b6zEAmBi1PXTmEkb212PUqkNS5NLe8x1sGb3kEP1",
  "key7": "3oruwjJDkYMTyyg1sy9b4SeVfJ7o3pbTK6K1geojzWm1YkphKSx9J3Bwb17ts1NEHx1EnJ2vGRHAcxQ4cJkNCCAi",
  "key8": "2crXAvhW5esUy5T8ip2FeuZdseNdWE6x5N5vyT6mGKuDqPD9v1KRTsBvEesaxy11ijHXZj7LRWRA7UemvvKHeAh",
  "key9": "SqjCC61rtY1FVa5DPWBho7EcPAp9ox32P5firQHSLtWuqfkGh7pMw4DVpCmsdZ2N3XHAWyUmwkjVB51eHyNskDm",
  "key10": "5ui1EhuYkhUmLRzdCgg6LwntpVVDLDMEGnYamLaRPAgohtQPs5fhZwAN2TPg8s3GZK3oiJpiS1QC4Z6mSZV2Ekb8",
  "key11": "5HbjSftCF21D7Nfj8E4EzLZJrUYuXQ8bGRtdpqnJg3pY1h7R2RpEVxoyV4Q2DYZVWkSKjfTz1hc8qHcZ6vMXWfnh",
  "key12": "RS9yEqJTddT2WBQVmFtKRKXnE1KdpZJQrJBVYzHrwXmrChQaUEuHyvzUvWcVVYhH4f1SbL5m2CG4Na3nMDAwGgS",
  "key13": "45g5UA8Ngn8UkB6afvvCDFpWr4f7HUsy5vAao6MSRuTgEoo3MJqqM9cVLHeyNVShWjPWwbBPRuxELvgDGRRzwJX5",
  "key14": "Qk85Mk3RmMTp6CGZ4V4kyAr2bEPZw66nhB9sYGLoHKZdsYA1rESPP989QdEbzp4PpbDxhiqrunJ1QHSWyEDoRQT",
  "key15": "2QypAGX6QLDYDeJwAvw31MGfUYLj9cmDVa6iepp8h36riD32NAx4HC3KeWYAGKHgQNFDGoypkNkHuSfuG1QJ8QDN",
  "key16": "5ZWW6mrfuouwVs6H59fgtHEJq4xwPa9AZ7ct6HQ329ygV9N6Kwt6pPFYFgqLaHaZmefa3BmzXYaNPuCQU9jGnps7",
  "key17": "2AqLUz76QeWSis1iF8GoLReXwtEhmLFi7yPfFSgZ7PirJ58efPNXXSjCMBJB75fVgfMgwkV6inQGjFa9mEcPBEmY",
  "key18": "4MFmP7teMNtbtz8ABebibWUPrCGuha6A9bdAahZwHgpx7TU5LZHJLhqE2WNXYsEoePee9f6WRXepRzTzGA2kAhSF",
  "key19": "3dY8bUHcTctAG8mY5ydsp24xzi93AV6LuBsnw2rjoYAqjcSSs3KktrRrs44r1qireKXcWHBYJn2YR9fvv2nQh6w8",
  "key20": "5LuttMDMh94WdBiaKdH5s8srZbpE7AFWKXAYHEu2ZQMtCQaqE8q94t78E3t844sKAha38Sz17vN4NEXDXmNav21G",
  "key21": "pzU3jkAHBvchWAWP4z44EbWGUgs5qCUaTmXpyZpZDqFvwxDCerq5zoVaRqZ2BvJAfdUk367iitBKkmU7oGwn978",
  "key22": "31kwQEvNApD2EnAvRF6fAmWeEZKgPP4APa87Yw7Bv3FcRokyGCHvEoZj2TqeM5U2AsijuwaX2VUmTwdxnzx9Xrhn",
  "key23": "4vg6DNWZQz8xxLgVm2qXgj5hKCYoDfRPJShins3n3yBP9GX5dwUPaL7y4QqoHjfRJuEKzFqSkJQngp3GCBMnA4Fs",
  "key24": "RiAhp2rgbZsrJXyUGPhQKfgjPkEoE2iVk2g8f4uG2wgU2WxFtnX5LBLyBiFnmoxYtmVKwLEqSsUCCmBSNycV7HR",
  "key25": "3KJvCsGsGg2p4U65MEHm89vGiLo7KJGHgwna53wRdLFxkyQGMLHJjvacRaLtcWMNwpyFChuRmACNJED3EmsAo73u",
  "key26": "3ozMM84P2NVwKdhe1LjKyvegEVzuf62egPxn8LGpLDK1A2ieH5NGG1JCCzVma84HeqJPT4HEP5YvjiJAtUYqkm3a",
  "key27": "3C2bacG1Z8V6jQx4xNyDPFnGfpzDVjvTSS29cdhZNTxN5Yc2ocKWRMD3YLrugBoy1BBieHiiKTMWhFURjQYyjvE2",
  "key28": "2g63M1FqeTjHhm3JujvkGkeKGW9EfBZppKbzSyfzRFttmMaNvnWSLMYPypu3GevsQZ7MaxgAmnpYiDHD4gcP7kyf",
  "key29": "4zw5Ro1c1thFJDBuBvcxE7h8geUoPteHJ2Jq6wUfwa5XZNQtVatenW4C6iQBuFv7yhqJUGGZ4cwxnNrJZmaZSVrU",
  "key30": "2qZyFTtm3qUhEQubmEcqaQP4kiPyZ2nG1gjsgKrfBEakfQLQxQBPjzi7FTaEhiNVBwPx2v6RpqjhkqJY6byu9KE6",
  "key31": "PXPmJ47Ud1L5eHHWXKsp3htHjQhgyJSy3vFqwArTnXiuYRKGahmETP76tXix9G6mpyan3VGrcYx4JRp5EWdDtzw",
  "key32": "5U6P9JfRpsTDAS2Pvxwqr8VCJCYK9PeeGLdShzYV44MvMCVLpmtMWeo6dAThLmV1aadjUeNYVEhSqYSjTmvwVCWL",
  "key33": "2F58FDFdnRfeKUhmHXpbVuxzmFJEBV7ofYHoSAf4gCKzJCuS4Bo2F4EAyZaD84Zng4gwUgHiSr3eEbDKTsNwByS6",
  "key34": "2FEXH7Y6BpoSw8HFjQ4UkuoqctLw4XMKECJcpSTpeMo7uuF8aXb19BdMG3A2sGwzdAbyLp9LSdEShWhg2fJYn7SZ",
  "key35": "aFdJ6NQA438UuW4vyVF8D7nH4mpA3JJb2BBwNYz17dXSdtsm4naoGceCBpXp9rVp3FxpR3LEchMDBEn2fvwKGQ7",
  "key36": "271dEgiYyHdgQfK8fFmrR4rrXPDQJsJfoCJZGLE2WM8kvLEZYjffMiJxqkZeWgEDiA4t5BLKnregiyy1SYq9dHCS",
  "key37": "2x76fG4QPRDFyxE6f8nM6M92cgqAYZ52YsqaHy8rbBq6ncMZ6GvsZ5yfVSCmZqyGS6Msxpazbx2HUWuhQgdP2wvP",
  "key38": "4vy4NDZ1TA2CbCwJ2brPtb12fX8FkvCUs7UgQnLQhYP3WSvzpR22PVT4jJRNdoM41E3GHmfMnt8WKXymSpntwJzW",
  "key39": "3s4aPA1ecZf3hAH5829z2gkaiH7ep9Jy4qiPZdqk1peJ7TmBPeKJNMDox88mmhPZzQRyNX4bd3RXHhvjh1xDxuVx",
  "key40": "5zCEaisVKKmciFK2ZLFrbfX1xXtdUpLphVryYYgDVFK4euTxBmw5XnBLtHgob9LcnB1YXby4DxLQkCoxaQPfTJ3x",
  "key41": "4mLWeMzDnjhBnQaURa5avUcb6QGESSzPB88uv5fjAX83UbxAaXswbKjRFCAj9Ncs2jp1Ne9Q4KKU4x6XSd8gZZMe",
  "key42": "2ks7NmgFbU52wzpLz4zHGa81536sZbgeFW4RwTEMmJEymxSwdQDkzi6DGozTGDENtH3TPXPBQS1scagUDQUYBeLp"
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
