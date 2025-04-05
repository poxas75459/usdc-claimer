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
    "4RgjpJtnMnYoRYDZ5Rrgvrj23Y3eJR4YKN45VrZN5voqmmDD5dMN39t3DsECgafZzBn4BiAKNywJZCpYtdiSkLcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aVi1QuCJTRRpDKQWphfjNchSkv5ttzNcMMNhHeuYM6SScDEqKWPxfyinNGbsVjb3UeCc1nKoqhJ3JfNaTrYLP3V",
  "key1": "3XwfkndsyBca7mwoN3zwT3ai7ZVg3MBZnZfsP7Q4LsBBenCy9uUUxPsxxcsxi5pKWGrDD9RbWSeuzsQBtGVmvCHE",
  "key2": "fi9gKL9NEBR1M55vFfRa9zeA2rNYRykVquhgDEts5iXAEj7cSztJH7Hm1u47wdqziBpRVBLBZMWiw1x16EQsKRD",
  "key3": "2fS5tFZ4dK9dn8DzW7S84ykEJaJwvTuGPuoGNBQE7MionJPAEVFkNFYXuptyhYvZF5RDUx5DCZaP6Kor4noueoB8",
  "key4": "5BLBMLL11Y8nKixpFmKr4prhFHTDPoMEgonnyiZUxfhrsTWLjYVnTz9FLZHrJ5XvET9DQApGVtaBbrd1HNing3rh",
  "key5": "TkJYQ3Kk7dQz9TZteoR5vNLFPx438ndcG4frBcR45ptpYjC55XrYeVdkNWdTxGai58fe15nuTCiyB5BifWFMFXb",
  "key6": "uJ7HJ2AyCogxngpWPTj7BNpEJRixvED1YMkNhQbsgJefTTo9BozWZjQVbENfAPqdLo3PkKtQyyktWKHCo2fHRgt",
  "key7": "hPXGSFoCtxJBLaq46u2aQw6v67bynKnSf9RQRZhsCn8jsc3u2ymqVQB8uY63jCz3KNUUeTvBDAcyYbzmxWY3UFM",
  "key8": "ULkyoaWsaZCeFyZGDHqMjzEi9ujc7o81j5bjrgJR9ZkEy5NWpAAfcrcywYrj3h3NWQjhAea3Hiqe4tDiTqPioUF",
  "key9": "2oLWgNrLW4pHuJWkRoDsu1KX8C67eJdTAEfZDVGDFUnzRSBVjP65T5BXUELgcbDzXh6bEBfftYDM1sfW6tMMPnnu",
  "key10": "63FKjz6La4nce9JPvVtm7brmvAHqkQ5p9c8p8sB6nW6rfBnu76ta2BErHw6GL3topsDhuXbKs1iW1UuseTXJpHg6",
  "key11": "2Le15RseSAY658zmQhkcX875AneJpG83jZH4FdLim1JLJghmUdwEcQZMPy1FbwY96nbewTPGCW3c7k5WrNFx3psX",
  "key12": "2H2zx9699gVsdvvjRFA4oXtTcKPXEof1cfQGesPVd4pEYfpRuMxJjccFWVJVUQssSsmUEYN4vBfstmg2syP8keAx",
  "key13": "4fsP26fDiZXeuAzzffYQnTYdav2i3n93UzjMiuiHcvvUr4Z5rvZwfxQjjJgd43P3wcX5RQG5cWr46Xcbxye4wJ4e",
  "key14": "27xfZfEmpzFvVNyH7TByreYtzx2idqQSVNwxtsPpteGayTnZsQGnxC2nyrgZJpyaXcM4tN854nAYbiwsGzoGk7Gd",
  "key15": "3pyJ5vCLbhCRpvCiSjwNDiM9qNr1i5QKu6fzDLprBn9guFeJCiZwgABfFaz7RarTi6q1nGPvcEbQJ8rUF44vqLZJ",
  "key16": "3NGZBctWzsBZQS9C5VnWYwp2yjXqjWvAx8jc7DWijJc93ymyNAAVz4Jv3qFpgY1P5zKCZSxmox9gcghPiPN94gqE",
  "key17": "3oU4JPFcx4BxYkSu7GxAzwDme58hVUsnbetVePxSSTkUWSCzW3xhRi1yrARxHkPogNYfzq73Sd3A2mX5xsQjaFw3",
  "key18": "2VJ8yaQXeUKADi9CMXAc5JtSSw4LMhMk85vWrRYAijkk59tsUn2cNzxxAQBjHZZxr5RTcVcZ3MmHSJ3JJB7ZJCVS",
  "key19": "414emkdFrdfqrzhkHBQNJReNJ5dvmnmmX426iZ8hNWJxkQAnvWDnyqGKfZ4tf5cFYE782jbeoCNR1aLwRwUX4P2c",
  "key20": "24YHERfu7WwnxG2znYw4fd1W6ChPz7cns5ccjkqeXKVzpt669pmf9ySuNLzCTZKoRShD45b98qAJE2tcBZJmYcnY",
  "key21": "dQGjXk3c1fyDVWRKZrP9zSUj5Rn6brJm6vw4rhKwEu2bVJCpJTrRBcbsNqeCcJRtjE6gV9vWYorC24DAJ7EcLpu",
  "key22": "54FR6p4Dx9SEeWJmmJ1FR8g6A8YG1gU7nNit4vbFfqgU2EN3VYiX1QedDWJEc1mgyKoahMjpYS7o1e4TQK4x5r8J",
  "key23": "2hgTWs66ZN3sTjT2Aw4VY6gNmLVBLdQ5GjedhwwpDvrD4Mbrkjco34zbTU99FiP5ThKTtyEynUGZUUaUzbt8T8P1",
  "key24": "5nNK795y4mAgHjtrZJa3qGKVpkXd3VuY7wwKx9DaVvJW2hkMXfycoER2WLg1g3RgGrCTkUC9vsH6uZYBgBzogxLy",
  "key25": "3JsGxtt4k91ewSvufYKXUhzWVA6Mdi7ztxf1WtBX9GSqj55RRaTYz2q2ja9JAbciNWhyE2BC5BaoPK4W3vFhb4KU",
  "key26": "4MmBfBDScYfo72gS7kjNmLDgkBcumYaKXQwABVpcrV161tDMkyYQaxMj4TRJxdmVaLj5Y7gYbuNybfQ2r5XxdvjU",
  "key27": "5TTWUh2MXTUv2f6VznNrThH1jRsSQJgAjpWKrMzpG1DpYM2gQp8gM38jkdTDwBqNsmABNhx6NCFfwnbrGwyp33wJ",
  "key28": "2cZrVFrPW5UkKwYpHTjd3i99bjZZNSdiFN7waJHJ5yrRushQLMv6wCWfFt6Zo3H5UvPi5usXwzo4a7vRbNGGLdfg",
  "key29": "3Sv2KmxRhwkye5PV8QHfds8FGzG8owwDPrPJNapdPvKwjZogMqJV9xM9njoN8QQk6WpzauRzavCF7XGqqNAFNuyn",
  "key30": "5G5BkF5SEbqnNZbhbe7NX4btXfup3VrdF7zSSS2oLhb6BVuNenxFowdje8vtC9hrWRd3uhB4zrr7UVVqJKN1khDH",
  "key31": "2cb8kMDFj29b3hdkZmQXMCNy6updmkJWT7Q2bjemijfsNtBguKeYQtve1WWh5aNTn4up8zoHaqeBEdYQU5mWqvTE",
  "key32": "5BhuvTvr3pLDyEsSfPYdvBzgKCx76bpzV1FgMvdydgBFaWa4AEGT44TErXAKDhUMxEGBYoYrytu3ZdkmnTeBfXuJ",
  "key33": "4qJrb7ytwTpL2iVGi5Mg183gnQ4wY8ovo8ForM4h6C2xaes8vJKXVUbbZKqqkHJxq3hzJD3CaUhamPX22G8TQCJF",
  "key34": "4Bo8gmt2ApTncHbkHPh4J6aANEWxqK5ZfRn767L3vqJAC3ezbEHdX5HfMVxSNd6J4e8e93D7mqfoqUngJaX2bMtS",
  "key35": "AjkBRHFndacxa4HDF74LDzntXDrfyJ4ZPccQBTM5VspFiXR4pRx3CAc66eQVGSis2DkiUchXCLeXeeB8XJAL4N9",
  "key36": "4JYvskBZxWXA6Kp9pnTg9QFa2uwg3XQt3k5wdgymgxT8nWhKmERQ3SVfRNCVF27wCN4k4N4auR38SPGdM7YUcCcn",
  "key37": "3r7jSqQZwNkMwW4Dbc7SEVRXQEv7YLhP5HmBxXxwMZNz6vDrYvonUSaJQ6xR3da2pCy3fDHYurbrWncggAAUQVCH",
  "key38": "66e7qPyWLYtHT37LPmUQYSshfabLTtGVcP2jxBmS6tS4U98KEvL3cB7RMHaE3QpAhkVAwYsuNEFzCyYf6G8J7oQw",
  "key39": "2AN28K74ibAvCnrnYS3gzK9jgazcubarZYLTgKPgzv6BnZUhveTjPxRcNy5Puc6ks9y4TkLdsEp5BVZg9qBmaN4A",
  "key40": "5sT6RPpFpFHG4c17yGVSD8BNGvqjXYUinASYdPfXNq463j5MVPkyNtP4fixyMFGVLjfDTwGBxjqpor2wRs6jnahS",
  "key41": "3W7ks159d2hwP6Uj3TAb5PT3Teqa5ZH6meDXSG8pHWDEUEyDxKSvaszpLMHn5fTA2g66bxncoJizr7CdCsvyZdQ5",
  "key42": "XWEjAkjExj7Sw6HHAm8xxMo1ynCM6TkE8dVAPES3Sz8BpH5mLvkNPxZKF3wTWmKKb2Cvz89WuseZs4GwtjAA19V",
  "key43": "2wbArCFPVS2gtDbtiHUVSwoSRU7cAaM6nmXtoUftXr8oxDCsxpPKoFJPwaEaUsYCbht1nZTFG6eEGYBXoxmYsUuY",
  "key44": "2ZHcNWzWduWre6UPBQo4r9hsNcggKJwgms1S4WpDwyLiwu6wt23yWHyhGpMpKAdTcXEnrZTxrC7bLAFySjvdmkFJ",
  "key45": "4eAN4ZZXx9bzxEYzP8SQDm4sBN5KcKABS8tDYx9Sr9RnESiyobaQWMNNG9gvtoFqXMVm1Ff9bZ1sak1JifzejPKG"
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
