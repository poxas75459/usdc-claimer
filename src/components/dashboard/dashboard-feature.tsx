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
    "3BNwG576sb9pVQL7F7e2uZawytewhBwcNejazQ5TaNAvgSPXMArrn8ddwfMLDK23rFa9kKPaLzLQ67tF1LL3irJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHwyyUcEVQTaaWzq6XZRoHxAQL6w55z9tgM7GF2jr6GBkYB2SRycjCMdudG3FijbfGAD84GbEQ2UQ7dbkVw3pVD",
  "key1": "qfgXMqsr57uDwu5g9NDL3E7yCUwzrbcAA9xcPh9bJ99sS5Xxf2r3vHMVyjKFJ86a15MFgBRQPMzbF6fuAMtEM4q",
  "key2": "tVjmpSxma3yhPFnCoThw21aJ5fiXqmqeh6oBCGszxnpgv35pm4M9FdL8XLVgxCo6ZZDFUL7KtNk779Up5VU7H2d",
  "key3": "5UBKBM15BXCmDCHtuSyoCJDmmHc8VW1T4AcRmMHCpHU749tdesMZg3HEngTaD7EdNHjRVjaehtdsQvCEKFV567xu",
  "key4": "4JA6a4e7rwsPgacj11BUTpViWXt7QSgzBd1FTNBsFJVFBSMGpE6MWAEjxGiqHv4THMa75kkQHZkeC1sETbMbvL4U",
  "key5": "4anpepRhgk92H4oosSeWvR6E9rRF3auLxLz7Rgprx7faZA9kzKBT3ukrAmMfjrWrHwnX8ehch4CQ5TornHHDAiDR",
  "key6": "4ezZtKpKFoAF9V4FFZUktzY3yf1Qr2MxEYSrUKUgJ8sWwvcCCPw3Rgr9EKkMbyiixXtB15JXduq3GkrdnsHpYBBr",
  "key7": "2aacBzjZ2aWQXzNxdudmo5544wvKoSe88wh7efMj8sKTraVVGpvbWiRpyWAhZfvDqUg72BmCFQ1kMhkwFLQPDf1L",
  "key8": "3bNkSKG4Q8EPaSnhvvPJFefnFPFnb8qkd8untQjBnXCTwNo8ZCB6oPX8Htc2HPSoRjk89tdo8uEDwnnT6m36kCx",
  "key9": "4GYtC3fwWra4o2jmPPDmxTHhphjVGiLgdWxTeYJUdiNoDaNpLS7ZrXRSpQT1nS5Lxnsh11jVc33myTm3xWQbmnpC",
  "key10": "5cNKhFSTBAuixXcryPxvQP9LEF8U8T42fB3DKBRizoqV51wovKWtuKxsTLKFf87JotveTAH4P4W5NBa9uPKiBrbQ",
  "key11": "4mkT9kMuguxeh8BFtTQoNPo5FcJ3qnbE9PTthKNf61TVSxtKPLVw4QLNrDERAmMUMeGmn6uKEiz2rBCTYPFNq2PF",
  "key12": "642rSrsbZ7qvHCyTeBopWY4iLoCCYEEoABusk1Ur3zLXRSMnVPX6VVNVwspjdHiPdDRj91sTdih6CykYeucXXkfo",
  "key13": "3Cutkhs4J5oBeGDPAuRxapLX7MgwbTnMJ6Fbg26fDdJxuMeQYhfoZQjBaChC7KqWAMNBkfJ6cdjsLzTUhyCH3ShP",
  "key14": "2UDyF8Q9LoRho6PFJAPy5jE2LhsvNNev8GKxxeXjwZ2CLX1q74fkfgE5fFJXFVqaQAgh9iGbuAnhPub45htvmBpF",
  "key15": "5Soqx9FTpiMNSFFZPhWQTJnTATdwXiVrhQd1L6Jtv5Bz82bmNS8eoXAUbApLeGY2fnXBa2pU667k2RKfgWj1Nw8X",
  "key16": "5Ed2H1JwCbEorZ25zxZXFXG5hoLA6xLshN4QmfFGWmJs4vsPDFjfpsv7hhRSV6k3Fsk7eLfp5bmXVgASoZ4YSbqy",
  "key17": "3qzbCg88Q4gs59bWKJGKUKacUcs2Lfqi3tFoBLZNCWKoBePJGXJuDjDKFuHdZhWzdKAiQovcZRcoJEynhjNNhQCE",
  "key18": "4rKkEmcrFFxbuTbwWLpdqdFBztVYsd4hSGh2Ew5WGHo4nDoJe8ezGoAPFp1sLKdZwo7k3LPr6dLwJLcbHCug98Ke",
  "key19": "3RksGB6UjQVNWTLxhmSxsUw53bPVHpWQxwcJxzFGBNbJ2KB3ZxXpfXUzoGj9PAgmZgVt2pV1v3wXxnyvoBAR2RZ3",
  "key20": "sfnd6Z9wv8mP94HYYVQdqFjkEPdrqEPL5SA2sToENrwq3ELSecqwGC4zJuvzMaGk11n1XnJEMSPMR2NsB9xiGxj",
  "key21": "5nhcfKKhBs7KZDtSFmRvf8sUqwJLUYigqyA2EpfuUY3kzPAJkLs4Aj4XGid2Dr3rnUDbfvGutx2hFbFwtA45qVcD",
  "key22": "4vjP3eRMrAFqgayuX7eFg1v6SsQyZDdm7K2e27SCeqyxtnBZjPgorCQkKL2WP7bt7ywLE7aqCLFAA2EsSU97usRE",
  "key23": "45eLLMahCsjHfSVxb4qQbCTqov67N6ae1jJPiJBk7xqah1boWU4ZsRg8nXzbsyXGJoR1xXqP27V5NMaL1Br2cK6J",
  "key24": "5s3ZRTnq5JUwnSpSLpRKLJi4BETiiJ1ewjkrrFm1UfgWgur4sK399cq6pRcGXnnkovncmeJ1N2A7Wgs3XUkTkbgq",
  "key25": "4EfM5NHJEwtiTPTA9SE2vgC2NZ8pbcE88MhYW4sm91c3iTfqFqAKPP6ggSUzWiwM5FvBEXGvwaZ15gvhe4qJXeqv",
  "key26": "5Sx1p2uXLYoU24wmfrcw78gwNuo5pH4NDyBRFvzLXpmV817yDZ2neh3iNT8oC8uSfuGsBfNeMQ6BTzUiMtcK3xG7",
  "key27": "2bVkwEdqKFhs1hShvTJoLfmna4CLtyRcx3DYk7c8saUMhosQV8hjjamFSv5bf1pBcwUov79nhkekM92iL8HPGmgr",
  "key28": "7Wqa8fPF1dKUEtKDwWsGgNwmMFawyeihKZMj217R2VCDjqHRJgZeovijrrkYEC6xmATueGf2o6YMMCBJrZQT9Tu",
  "key29": "4wnyeDuvy2TyXAGZ6CM7JhBfuX5ashFuf8XVtS4NpQsxrxXR6UNYkaCm1w316rPHw6Dfg76tEEqmC1Jhe1NP481r",
  "key30": "4bytQ6AaiskXR8oM5MsX5Na5vV9RiJnDVaa21Wx2nUeDZd8EhBMj7g7JEu7PuLJr2fKSkgiMfp2Uoz5eH6bSQmUK",
  "key31": "NQ3bW3fDKXMoLCuUTKQSccrkGr7Sf3KyKi8Km2VPRA4sw3U5THiXwv7Cf8KB7eo8qbt791uaPo7N94KANXyiXhi",
  "key32": "4ZfZDPa9cuCz7cV6s9H2FuwPX9zZY5VPgD5jXirK82rhvT9N64SCzCuWJZeUtWges5mYUE58g6LmPe9exwmJGEsA",
  "key33": "4V8FaeYSEKdnKx9dzG9sdMan6kx1otoxxJmaogH1rmhjzUoBeqfwjEArpJmQ8zUxaTnkBWnJmnGQz5JyQAYUi3HL",
  "key34": "3HRgaBmNawfAmCtX5Ahb1V9xSG1oKHxGLBd9oJrj8AGdrSrYpkiqW6xVvgfnJj9Le9LzNNccS7Yw7nKE2TMNkGSs",
  "key35": "5mYmbnFDocs1dxFdhTWU5yk62SKjzD9qdybNt4Rt9DisMpRuiexnvLC7649NxuJVLzJtLd5vzLvzkyhTjDCjVMp8",
  "key36": "2ZtDshKAPnvnXbDyRZ88Q1B9FBxrLkcgyPEQvTNB8qnmH5gkddGcXb7nR9ZdQMe4wrrkw2vEtPJmuAzXm8uSrrz8",
  "key37": "3XeLkzBNQ9mPHY36xDKZX3xVfYVeFcAdvcK54msT9gr9t7YFWLtDDPU71uZk33Q9vRLDMxSwPgF2dEPDtRQFCq3W",
  "key38": "4UJZZhorcdU68qfgEtNMaQr9e8aFvuYim8v59BnbDu4DpXJqnfex9dKurUZHQf3zcwRWJfDtX4evSC2PUrWacRsM",
  "key39": "5oNnqjqsxaaKfyR8dkDv95GPtw6hQGgPsM8X1MaDiYHtHFDa9vNzUiuuKni2zdy5fLSFMu4BwCbBfGjrvNFyCLKQ",
  "key40": "4JXEWqQcebCY82jmAbVoNVVHuGnmv3mZj4Suxk6PhKzQojjkcyJ1LUbNQJQEJa4JBePPApWKJin4p1ph4X2HyHwR",
  "key41": "46m8CrvKQfbwD2TVYaKTGc8dDAXLg183kJJ2eykMDYNN6FijRj7bGnkAqo2Jk15geVCb5fLgUdmRN4J8EjmEVbDQ",
  "key42": "2tXaCJsNpoUWYSEf2KTvQL3dRYRhU5vUaf5tJAC9mbuhz7FpXqHS9YyZoV8ZEmMhKYTeqFMxkG2QPgSMxSRs2TbP"
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
