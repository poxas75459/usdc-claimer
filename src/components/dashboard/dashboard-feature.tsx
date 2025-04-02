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
    "51jGCJKeLNwAKjfjk8VEgc5kwNvc51w7HKayBxxAvTyaukuiESRmwEfNCzw7wZAxN1vkfGcAdDPy7mPpzTtZhAwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9SH3sEwWE11qgXhQx3eKsstRGCmUxVQLFVe8TqkBzbgXaTf8HE4XMZ2uiWkyveyuQBio1HoymS4MwUAQrzJKHbq",
  "key1": "5UF3iZVZauYGxHeT2CJErG7pWWXgkcvT6FrEVjnmnCu9GxQKopoa2Y1ECNMKKsA1nDgjsoLHST2PyNCxvmB1NBqG",
  "key2": "3sqp4V4dGLuX57V6QEG7geC2nwNBPmBtSemJWNqbGWJZUzXNjT8MtDWp6VSr1FL5vHRJXLmpkWWrerHot6aQZq3k",
  "key3": "xZbWqfVurErjgfW8xCCxq22Tnn3baay1KBC6QwrgSdAsttuZ9UmNuWHpZLLp1tmp3ZfszsDCz8tFsLQs4z826zy",
  "key4": "4pnK55QHRiatqPFGwdoueSREMLN8J12McwfB5eYTay8eEyeUduRJmvvpTxGnNE5Z3MA3ZnaqrfoS7vo4K4Z7jhHK",
  "key5": "44Hwf7rQm6LEUcjLSdmEqcwXHMov1ThkpqewnjpfyEnkTp7AZdoyBfkY6LwG4MK3NfjZ9NWprMTLsUCyWWEMcBzd",
  "key6": "9hTZLvDu4vgvoWY3KCoRsN3G7KVX7JyNCbQXfSUhL4XXrfev3eqjh3HuGZe1GsENiua4uatPbgJEWvKEvXSV8oQ",
  "key7": "4uU1CRdW9FGTDJe1UXhLmfFn5r641tveABvGhaz88xP61qZCsw75Nqkex4e31TiqM1eqC5npHN7trEqi5Tdh3bQA",
  "key8": "2Q3XyxB9X7Rq8SSAvRp8948gCu1DHthx7w9Xj23FSoSCWoZKo9VXCyWhDZowun2kXwnGw3iaVdnG5FVmfN8GKTHg",
  "key9": "3RfqZNkxLW6RA6thQWmAVWdG3g5AueogxH4vHjgqC8CsVC9ah7VHVhp5rH6pxkaYkFS4YSA75m5vuHmRQ3mcbqKe",
  "key10": "5dqEAWiMXEyLfrNKN3fB59baJBtinQQiAvS77TR4nWiQPKi67BFhM2NTZXWPo9pnjMKiTaw7C9KjHMf6XVrdjDCZ",
  "key11": "28hdJ7dTYfvuqe3rhdHFcrmxhiCaCfvCDsQmTsiQNAkNJz5tu8iQHEmLU9saRQr37fAehhFaMwmfNfhU3qXp81Rj",
  "key12": "3qtjdVJtVmyfG7dDCS1a3ai1mLhwZtFUCdeo8N2rJhcX2MNKWQBxLi3cZ5ZFYcENmhbSMwqrjq3o4fvvV4gMcB79",
  "key13": "47wZTQJLa1AKUWN7ikZXHn2HS1RKS4f4ppMF2VhDSUfmU39KSwoeJUg6aPLesizri7sxaB3wiLoeoahbNKf4CKgh",
  "key14": "36DMFckHej21ytGZdErdeUpHXYaLVd4CPga9XXACoLdAJuGo8PVEL8wJNB1cWR35DpxaQNjb3VCxCduZeySa2toi",
  "key15": "3WuUhrtWjYzfFwD8z4VF2nodzym6NcByzyYYGzuSATxbmAmtVa6Px15GC2GY2EoBJFcdrNdHhJG8CcERGE91ydeR",
  "key16": "2NkURrv6vbjFhANKK8L66QqDkKULKokjwTdngqwjuFCcYTsHYQnyasx6YCEg7qcRvyQMchpHtsD17Q2SgUkHy7wF",
  "key17": "5YdmTavZLqdH9eF4omsUrohACpeNLtdJCSSZ9fYkJDT4MWipXW5SNDza9T5UcKcfgfnzfGsTpDGWXFErrA8E9rEA",
  "key18": "2jBbKMHui64pkXJ1ANgn4cs3G2TkZkT21d8VTP2nB4RPunLCxpNoh1uk5KzGbD6xqJrHg6PQtW46nhuDRSyRfrDi",
  "key19": "28QRnhU2ma8nSDAT7gKV9GYYCxt9eRCV3ZWHxBX8e9gxgiUctAQuJ6FHx73zth12jtFqqBqn26Rzf6wvZoASC27P",
  "key20": "4MdCWGyPPUPiNiPk4v2CnG9dhpXWM8tfgDKTBWGGECCcNuCqdSv741gCSUTsZyDz96Z9dRHRpjqTxgTcm6TGaWQm",
  "key21": "4x6ox7hsKzke4FAE7v2fqkvWCYZxBohpgH7RDNqRm6uGn2KqkkhKBdYoj7nGPHAJb5htm8TojKW58RWvEtY5498Q",
  "key22": "2PeL7NGGcSeEQc5mJmLmyYBDZTwpzCKjiDBVRZo73QaC5F6GZCm4a6HhqgfBvAEJVLZRWcpKTYzNt81yEa32rJdD",
  "key23": "3tQPVazfm2TV6D76fFdBm1p7rHY4p7chzru3PtXFe2YLiMtKvYd7rCydWTiecSqsmNpdvMbckSSiKTaQiem9WtD",
  "key24": "428cNunVK8HchovJhoBfU7oXcs8ueEC8MjiY5KAk644fV4B4mdfgzaUqnmnY93bd8Rn28JhncBtJn9Ae45eTX4cB",
  "key25": "xUA8YezLCFQhH9hfaD1k1pGeUtHkhAtGdBiswQxLRTz1y5enzXPNa4zLF6k1nFEtNdLLY6VCprN1QBxn3bx2aUr",
  "key26": "3UAphzTbjvuisWatNYf9KXwXZNLHhzTTZKZfpcPDk8yM7uvCUfs1aFTJg86LENZJbWe8QqnwLKE3XPnvq3b9mtWQ",
  "key27": "5zxbTVb1Jdd35z9oyTrh627ukdMn1hAZVtii8EzNC7YYoWiMQWmYRfkhtcULHGtNnxZ8cNvn4nPgkHK5DGU4p5Lb",
  "key28": "5pDoZQaBWK8qCeqr5zXaszzpaEXvECKecHKDmFcqJvvRRvUryGxPkRCvLJHJULLMXiK45Gpxn6mtj9hvure9EiMK",
  "key29": "5DHtuVfBfVQFa2BZQaY9tgcU75bZ1293GkYvkYyB7giYw8pQXqhnpxixBaBXwaY7D7x84iQU3Ao7VBcR8GKXvY3K",
  "key30": "2ENp8E6pEsCmC1yhMh4nFsyCoALCXFC1CMjJBunahoaWzLAtUgH9A1WmNM4SMHH1AWvDuS9G7NwY2UYNANmzXDpr",
  "key31": "31XqbcnxoS4vFFnKjU2rw1AVyjdAsxK578x38XWVra5KbPewT8wJc7XX5KaR7CAsvzgqmfzgfSxs9BgPsypJ4gvo",
  "key32": "565yKxfbVMgNzqBo3sMYWWvp2DCDcjvFZ4JAhDRq9WxXiMjdHwTeNrQ2ozqHar1LHAt2f7TBMF2Chad5YdHB35Jm",
  "key33": "XC3PuomVv6DwiadosgYeAFthebaNZNQmSEhr3FLxKcbzgBZmBXgJQjKHaSqSMr46gzdyy2fMjZ9BHGMHdrGjR4D",
  "key34": "2LeoZ3SLs2XvjuxwnyURV9RqrG7PAUQP8pz7hotXxaYaUQi3b2fptiDAvosFd864cNsaVL1RX5mXS53B2noEGiaD",
  "key35": "57A3S8mDbznMM2xNXwq78yrNF9Scs9wp1bzJX9ALGgFJ91isWFW9sfw47XPgwXiLAyxdYL7LHv4PdZMNtCGCs2dc",
  "key36": "3onQGCW7uoNqvL7PJMQH4Va7LkrY4KNB4umutrS5fkCMnDf6ajYJKWBBv6hu9VGkTnQSQFqizLXCpmdXE5jiDdfW",
  "key37": "2csKMBFkgMRq63G4YQA4rrz3uWJo739uUCw4TBFxLdstuMwsX3X8q7Rqq2hC31CK8UGS586yjoi4DMNQxMXNN7S4",
  "key38": "5e6HTYvFLVJaZRCpsP8khe6Vk1eAWn6dB9P8WmwShxqbgd7YgacNbWAee49K8jh2A8GXuPeukm6SYTLk4x4Fzaej",
  "key39": "6oTjMq5zC651ENhNrnn7r9twg58aJtGhy1pvxd5oeZbQoRFgpCexV2EwAvymhsL8m9jD3b3Z1EuBs5nZXbFpDDV",
  "key40": "5bGAG9JJoEeznexeWGxKnFiNpZ2jJvDJRHQtKFKUHrCyUi895GEqSPGmxRMgcM2Kvd7U8xxYZsjs7KdXfFj4TYMz"
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
