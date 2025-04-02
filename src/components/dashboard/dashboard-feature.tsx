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
    "2duRvWHGQsPcrtcnMSdUisyv6AGW4ymLew8q4opM7HzRDEPK3BUDadYfDrkkxyr42pvjkyxiYmBiHJfCvu1xG1Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fMNKjcAi3a2b9MqcXHRmzk9KKYShXsvVqHbMdQUQSukdaNNSxVVBQTpJXiCmtCRUbHJfkPk3PteRprWYMmHuSCM",
  "key1": "3UN6nWsRk5apfsA1gq7pd3tLAwSSR9H5Ay8AGP8ah9zbgZyTEorrxvGEa14FziNfEs261cPhahFYC87NhKyRYrzt",
  "key2": "51wPBLg7CrmVe1iZcon1wmy6vL1c3ekYpxKSeRU6GbaW33JuxwAokX2KmDwXnfNCuGMNEKx9HdcaZSg5858tyHnc",
  "key3": "5wyoankQPUwQYC8XKxZ9g5fFSvTGzrZn49WCTyEpg3FX42t6eTin4x7aFTGUNHossQ4T6RD1uGQWvh5uxN7s4p7h",
  "key4": "nVTAdBkjXRC8vf8uPfL27bEYwjdX8xDjMita8Z3xkrXFKTwuGX9JZx4zuFDBQoR1G6iH7Us2AzRMtbSq6wAgzeZ",
  "key5": "23FXuqbf5VmktrchGT14xPvvUmvmCx8jmTPbKNeXpzppw5TFWVacfUoutXt6RFzZFMV51PnferzSsFLRKBqKRjYo",
  "key6": "41u6gyppnkpwHuEigZX1pGn978LhdYnsky9M2PGFbqjgq81ow2PmHc7FSZzWXxZTjqNrHfzPmVBwA31uAqoZ8wAK",
  "key7": "5yov861M7y31d5JvZ6HzRgDKS2UqvyzrvcWvjSKgVA8gGJP6utDKWt65QmJSvbBU64AqBSX3gPEL2DqY4FaHjpCL",
  "key8": "pE1bpmWBdiDTj68BeEQaVX2vvVjLUaSCAYqc2x5UyWyVc6XdhcxbiwGfTxQmvQQLnLcf9J7yEznoKDoPeGXLSEY",
  "key9": "2QuA2LewStKqHfPu7y1CJZnA1F8h9mpHTfSjjQyAWn2LPhV1oxGVPhK7adTRZf3wtQ2CjYZwwTSgXJ8U7srMy5wE",
  "key10": "23RqCCoDWDaX9uZmKLwkcNcaKbLpZPm4yvXkeKAcKSgb5FiyocBrFPEseBq1fC9ckgVyfvZJVBGJhcz5MjEFxiLG",
  "key11": "3nkHZLMwVFLYBpc4jfCapGuzpbCf7ybchYxbJ5mcQvuf3xG5Dtbaen3YH9FM4FHgsWpxWQrjtgrzGNFgdDJbsLFX",
  "key12": "jUDW7RGY9KULzPvmuEdqBCnzuh12T7uRVNmfRaowq3akCUKKSaozAyYgKMWGM2hhLbCSDcvj8dEYNfLXK4TaTp6",
  "key13": "5UVAW5h8YG7CR17eRsGS9RFMSkwqgtjAv47m8mK6qRtfYM2eqmXvCfjxeUY2QJM3LHFaUgVeF4vL2FqCZVraXKX9",
  "key14": "3xEPX29VukizqAWQvMhyUK63auBdYVG3xHCuAUHP8dzAP99fX9AVLSR59cE8cohA9ZLwqW58JHvn122PRMWnQTA9",
  "key15": "5iLmbCgXnm1DmBFJysLkbM1ZM8vDhTGPtsUmBUaq2MdeohWCL6vP1tpi9mRJp4uL9p1Fx9mAULsje89E2BHXikPT",
  "key16": "3Tb9ZJs6Yp2BqJf6iod3o7nUYRznCdk5bjzPmNUgUPQf9uQc4KUxqBt5anA44b9P9X65HP3geJZWxe6RpxCdDUrm",
  "key17": "BmtJLnkWWRmvGMyX2nboZZ5swDXBzNx7V2R8BsKLijaGGcMwaQGWNfFLQ5myxFpLbHsmKqTY2yMvom9PfBnBCLo",
  "key18": "37XrHPrbMTGCGA2EKrWWXDMNhbrGJ6uGpKjU6DqUCfvYFsXZChbo5bKNcrUdmRdWpdFzmhaTN2TaLpYA4c2Lz1V5",
  "key19": "mGFQupsXgtrg46pkNA1m5s1AJWrsJCaNPfQSpQY5ZsgkzuZeyjQYLLsAz5sYkPrEdk2vWmgLRYbUMWKUxj4ggnJ",
  "key20": "1er14McMRZdHMevmaPuUmSvFLHZiTSWuhxC8KxJ88YeuVV5VRLagHCezSWzz78FJ6VxRtQwym9cd9w7nf619dxE",
  "key21": "5X6xmCvxL2zEz56JDrtqiECNChXS1jGQyTkXgWieUgxphk5j4iGAyGwYYtNkt367JvUQQsWMAn4guaHLtqt8j6ce",
  "key22": "5bQuahszmmGNrLkgizpfy7sbvxrjAYE16Tkj8ZfGeu3rdNV62eTFB2Y7Vq1tcRdDSyPdW7VGHfvgEv7wZVY75r6N",
  "key23": "4wZzdxFEeM7hAnTvaFEHVF1gZXdz1jTzR9oAzazj79uSamXBFy8ezzKJtnkHMTRsKMKtcERCyNdSYruW2Enq5EJk",
  "key24": "5EFcBqm2N3zQUAmNhRWqo6Po1wU7MEdJ7J56JKCUNYvvrYspndqkMBCmzC6Wc9UPYC8aUp5Nih4ifqxEyhqvDkJ5",
  "key25": "UYdiu45UV89Z9g2633T8Fw6PAxMuukYAQzEssUJzmCaMtQ8NZpExTfjn2GGAP9VcT4B7gW8ysGJher928pupHiK",
  "key26": "3fS9BSMXCecSbvtJBB9LbCSyGo7LgJ8jJmbLgafMytHaLQzb3i4VVtaCk8UMpqxpUc7gN2wBTvegufSMbZwSBhVo",
  "key27": "5u9wBvFohsz6KNM2RZoYcaA1JKX6nxsTfqjvBfYAZWBJmMCnCiZ3mGkeymTN3oBo945sDjmH5nRSEzysgzMnFyky",
  "key28": "5VFqjn1ZienvSoLyyXfdw29xpRD5QiZ8qHcraZrGradAYXKpnioGAaVCwgZMaH9frwroRcr8TXLq3qbfZMPAQjPY",
  "key29": "3NEkcyPvmWZNFHh9XTf9kZEptq9uepqMcALxSgbRtWN2E57rPcDrvESu82fQzsWLa4KPBQt1WuxVEEeV8imGyKCT",
  "key30": "4qyxkVLtPotm1MFiKddR33GX3puhEvDPbDS5QjSNexXivaZM3NGNYc4CXLoVUg7AQYxPtiKTZgVsfAshQLgch6Mh",
  "key31": "3RsN1sKpzQM8X7bQTfVfud96TbptA4cuRHiyz5htpBuGTpKT2kT6oXySbwZonMjotNBQjEJyyTnou19asS9svCqP",
  "key32": "38j139PjzQUKjVBtU7WqrPdhe5FsWrpVENEYLGXvEfnETQtCX37GtKgrRqHAfBxeRykJwdgycoy8QKZL4Jx8xpRA",
  "key33": "67oqnHpZ3XCsJBN4DpNJwMFpqyXdjS5bkzU5G79Z3J5ZV3LvJjCXZvsTrHGZUh5WaiJUuawfqM2Shpp3FPFpBJZn",
  "key34": "APe4HBmELWZq3x3dZmqQ1X1BrcEu95Qpdu1GhmhHSYAL3DGv6dXComgdoMZJ1MgrK3FSsJ1ApcXqpaRynyKqpEG",
  "key35": "3vBM5L4YhGm8GNux1FUQB4zdZcrBY4pbEXn5XsyQX1wCjWV2nUF8by5HEU6bDkDhSvMzKq8pPMbCLAmC8GjAeAMr",
  "key36": "3ocQo3NRkLXYnA9kKZgteXSLhdfNydFpyvdyvXn8B5q1eDRby9xcEy42xBH4vPmUMoMaMPMUYYYTaZr8hwYgoKqX",
  "key37": "3FmF4FWUFZ3RmxRHJpbtHXp7fpD7SwqEfxe4XiXrtMgSB19AGQwViU89bxB862JjemGZWnzworymWfEUkHEykyHL"
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
