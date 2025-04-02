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
    "5Md2yCnzUnrjVz4Z3KY1LVfAihJ8iwyJkj2L1mpE7ybUgCPBSeffEms7jRC1KYRhTTGMq5jEaXSUejB8Dj5xyHQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61bc2SN78s36EVqDCjmm3aphpX1UE4Wbi2cSpGgDDmbEGTT2DYZcZovzefna3cxKvQHddnus6P8tr2d37roZ3qqi",
  "key1": "46vGeByhcUZMN6JbWWWEEK2MN9dRayT4KFtReJkVQ6yThbh1V5Zq1t96sikQYEiRW9VyAbRDASuQutgNLCk58REo",
  "key2": "3uxCvJQqyzfYDS1ULDg9aRLjAz1HAwxhjn8nmGbc5JWZyj8hCZsXxeDjprEf7tKGsPFQ2AF3y2Gs6ihXvFR5PxQE",
  "key3": "3sCs3MMo8Vb2nHNkQ5GwsuFiB3bBpxMYqCVPGn2pg3ovWnDqMahE8x2yVTaajFJgscBeV2LDuKvhZbHXXf4iUJ8y",
  "key4": "47F2mGKchJ1DguWYEtYx94VUp6QgJLcUhbuWfxqgypV3C43U4XJarVVrWDZDF31A4gqYafxeMb2iXHAaQfTQ87RZ",
  "key5": "ymjqjcDWYCuJCbq9BHTwmEMLFYmkKUf5zhj6LHaLqHhAmVYz4XVbsxpLcmFDxtcBhnta6Rw4ngJkGUGmK5oomkq",
  "key6": "65wFDnbwS9aDSF49RtUkd2XstTb3rjhFeEpkWZnEHrXcwCJz3rWZRshzizRiMEnRnNsWPwzW1jqZqRUYWMBFpWQp",
  "key7": "3NcWQ8qExrBfiqCcj2mtG1fAGqcrDx9v7NwX2cz9WB1buRF31C6JNnHZBqz23NwhACTvhi3WKVSKC1LePSbAqCE2",
  "key8": "2pft14FxW4CuGurRaPGRysja5ZTyHLRaKdP3dLQSc6CAAXmMZncqJLRogNmYveoBYhzw94KJQZBT6vdm91kmeh3b",
  "key9": "pCTKsyHoJUwqJ4qkcCUacmd33ZV3cUkcVdcb2YK4retRhS1Xk5vEB8J4ApvkCqVSh8CtMKYgrM4MfWBCFMHQyje",
  "key10": "2NpwT6UwR7TWVUUn9ynjvxv57qQG5rNj2FPLQFr3qG8JtRerS7wbxVWnxBgCNCnHD9HR9TSs8xtSRQgVkgLywJTE",
  "key11": "5FWEaGJM3kLJzMmMsj9S6i1khUieAavch3WpT6VXvNkDfNL5egHaMqhe1Lt7qeEij9AGDJ8SKU4oDamyPFcppv7c",
  "key12": "5QUg3XsVYyk3HzxWcw6J4ZYZaAXTv3zGDJ3HqEH3eaBmNbzMTposU7AqLMbvr2Hae6JS4CHbySGg3RMvuptbrBAn",
  "key13": "34oS3mTVT7FpeMkp6WohM8oNtHAaQaksVcANJYFFhdn7SNmi7eEccSEFGumoxoAoHU3T7daC9VP7S1LuZz9RQtVh",
  "key14": "4AoZUKQ3FjiyubMf2WZLdGu8ph6uWdqgk7deZ9YxAbV2bXHUcut9is9Lwnb9CVQ9VknBX6Z1NGmooRo2rJoaRBCN",
  "key15": "PJvLCMjhVEbWyrwYczpAEEnEj4S8V3CABEprXaTgpq2aFWRADgH54aGJ4L1PqfEgtoPt8iG7caUNSv5aUC8LKNr",
  "key16": "F2Fa48BDemxiQJV5vB2B8cF34YEmr47CjnsrkUM4FcmUqYLizg1mDPQnHTTm1WrQcR85yB6PH43cdDtY3k3kctH",
  "key17": "LgayoseXAYPRWEytXBRRmBKuZHLBGtume1TJT2okAqNj9JTgHN2Cc2dJeVsftMA5XTdEzDYxheTr6qhWdLaVKPv",
  "key18": "2izpqDMkyfJ4EHC1mHXNDXNjCtzD2zVtZhM7JJxByEax1gRKh4HZCPWFqGdiyR7zhyKaaZyKvvCpB6XBs2HiKSN7",
  "key19": "4EbkAsGvF8xCVVwk5skgC15YqoakVMAjaQQrAm1dgqXRgC8zBTuMyAvbPVn1zBD6UgvJ554KxUFEYnKDc8cuU8iL",
  "key20": "2zhHXEkurbSkzst7wkAqUQwv6pxGNagWccbAVUTNVSuNEN3UnsEc15Uj7C3Xve73w59XSH6KRg2qphmwf3iYvkQT",
  "key21": "5f7q4tgmrne8C4uS3iYcC1Ts7rn6CqDsiNaWaXL4bFkx8xtooYTqGY1JxHyMMkKH2Gfy8BymPP3dfJF3dvwu4DDG",
  "key22": "4y2SFEWQnPZ9SaScGTueVBEEboPM3qLqNcGdLoZgWwLe8VV6JPwu5kbtZ8NEFnDiESSQbn1BEKDV3EEeJXik3ivL",
  "key23": "4U8hetHzbh2UnBiaQdzNuPp2FHx84yygUBwa6N1LSigrCu6ve7U8FwEgJL9v2iEPcFnri2DDwMWPB6U3vtFtAmyW",
  "key24": "4xFtXVowF8g1RGEmXf8Lx9YjfMAJXhQjcFE218b9pTtMsm9FKwGm1RLHvhaDAcCVDjYgajf2i835rpDptauMCgVD",
  "key25": "22qSWVCZLncibBs36cWR3dTF63TqGW99gWewaX3zcRgwVNFZCm3NvzgSTxLaPcffPksJ67MYhdkht32TpsvcTSjg",
  "key26": "54sPe5v7njbjh191fPGCgRc3VyPY7GWVgE5prQGQnyWewvPHnnkhabgQqBDancDrPki86vrWDnhLBTVHJvV759Si",
  "key27": "22FqjBqhDWuorw8m3qddj6o1j798KV1sybwUGwbYt8jc13PzSQA7YvnudfhaNPqJpiD6Qe5e6gwazgS1URAQWmsJ",
  "key28": "2MwQNmHkJLctoo7RaxniN7G99VpP1n7nG34WNjWa1zcUcE4PxkZDH2r7Nd6haajDWcpxkg7zsEbiPY6FDuQnijRE",
  "key29": "4gd2F5QswqK8snekptdVvD9pGcieshtTtdnkuk9T5YJARaZjSMcAVNRoWdHh2c4DDsA4BUfATGF4Mah1tSWzhYzn",
  "key30": "EFminqQu2UGU23UAs7UZzmrqxRZK4WT9fED4hdoBkbn8Hs3LfdVGfi3RY27Bix1sVo78LaE7Hd4jj7EnAUT9BfC",
  "key31": "5EXuNvZX9tf6WFnWuBh2gCpzfL1NpBgPhMftXVXqj4kLtzkHA9DiKz5HNMpMKnrFpDuCyKooZbg17enhjcXw3qAA",
  "key32": "5qaifUUa9YhxYTSYEbGbdEeTgeB3kmg5m2oqAsfh3Ft7KdXWWWjrzDEQcX9dQdkTpF58G3pZGU6RJzkshASKCoWk",
  "key33": "T3MF5vV1CPi1idxEQgaYyhpiZXiLtZ3JnCTbpMNNgSce5mSJPQvz1LN24SM7HYZwjUsxDTWhSgYUsr545pSx4dX",
  "key34": "2oevx1FPrV4Lw1C6DcbDWP6f3YmgKK5ULTQtHt7sA8EJ7j3vLJfTbawP2Bsjq7N6hVFJYqUvoKEqah67bdFnJpem"
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
