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
    "2FEQoWdxYHpHwJXtYjAfk2X1o7qPuEgoLqxRffZLCbvVNRq4y4GXGR17KYhYdNNtYxasgBKRAXpiJeTyMvgxnPif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJ2opGAKDz1kZAuLftEX4bxedkxHKUw2M7Wje22f3Y5ZTJYZyiWJPLVaHCteRAHbBStWYHGWNTn9A5ewHJF72dn",
  "key1": "2CgpjYeCwhh2Q3QDfqveFTCGRySqgxoKSYCWR3Wesv3jASMZzybiGkVaBzoShkS7jRSfMU8hgaxMXovofXBvaVK8",
  "key2": "41NpK9We9nK4jnPtDemiFQVynHPL6B2dsjfo5RqeuoRmqjNdMZGoR3BQxV2DfhFALdC1dzmEgSbpSAv6ytvxkpTg",
  "key3": "65JS8ccdtWsk83LF39H1GohntZHVwDAHUeKLgmbsK81hKaF5Gem4rSQmj5An2CA2hfqCnvFBwPeqA5zVEFhJ5kU9",
  "key4": "5ptmcw5vkof8BiaUHn6ziYfhxsYj3CHqMWmaQi27w5UoPjpJUrAj6G7B58ukNeUwnSahJbfjnE4aANMoXpvCFXDf",
  "key5": "4qCPFg9aWhpB86DRzuh5FzsExkqubaijHgwzpq4f8YUHHzZrpJDETGUkLsy5bX3bYjGzB1gqTEC6iNaX7xi41n6g",
  "key6": "563smtN4ZLw2qfcXMzvutuGVTFkVKmbcrywBWo5VCSMfwVDghQCccTkfPgDFyq67Qo5tdeCk72N1sU5HxMEUsKwH",
  "key7": "5XbpjDP5MuGYE8Fw4LuZNNjejkYdv1bzzdpqoxCprmFktvZ8jtnE5PjeocM8QSVRxqaNDqMU4dxRcur8wdq1MMoP",
  "key8": "2qSAihuq9mvFLi29evTq2LeyYe5fzuwCp1m14aPJCDs3JzUW2hCgpwySH2LKrGKEZp5Er9Gf1zyXuyXYqmqxJxks",
  "key9": "5DMXnmy6Cc75KAiavSbBaVsBwCe8LqNkonF7dDdxeQ8fSZ8oFDhPc8bNQVzmzfQMJLqbmLMNdgMvFrxa2DLUsrfd",
  "key10": "5EuPUE4CXtFxHkpc9HMy2ka7EyN4JP6xPSc7X4bAVDQWqN97pEXxMviP2bWEk4Q29UHRoyBrCR8aY9pqzFvbGHnS",
  "key11": "3AQuyZS5mVkC8YUcLE8X8EEosQY4f9WqEzjPojc9SVm4aswpChs3MHr1b1hJsute4iEV9Z6GrMJTfgaXx8fKtKME",
  "key12": "2RtBFsSyd34BEyNiPVjfRRitPg3XV5aGHfgQnEVgN64GwQ2WxC7Z1GaTYM2WihdF5Aiqf7pV8muauyM6Yt1avm8S",
  "key13": "2L5SgA7RhEWyLSxkpfWLJQpZpM6XNLi2fJzSjfP4NkDQsvyXsFcwACqkKTY3nLRzMK5HbgoxDvUMQB25CyZcE3Qn",
  "key14": "2qw9eeeyovwkWX2mkHZoF57AYr5EXjzhankQGk1CoUNHKqs8h9jfpPM9tzBFcbs3g4rsB4u3uKEKZrfuSvscmJGP",
  "key15": "grcji5d54YEUEv3TeMaXMX4HhJ3Nxrv3PMxa5yVeqqWtbghTNkWfkQfn2M81fvcuPZtkXB3BvzP3oyqmATdXRTK",
  "key16": "4zsPY4L9vsyQnqfAuk8ANCCqgBUbSzM1scc6cjA9YcjUgUEEYKXLvCoGisug5pvhJxaGZxwhbwqrDVxGTCBSjcGb",
  "key17": "4bHvFvpTNCRcNxahsoR4bEUPbhK7XC5uc5uswT5Vipqh52zfW7hLk3C5yt4Sw4SoSXWGMmgKAqF6UyRi9gb5Enz9",
  "key18": "Y5823grWCst36mwBJBYNGzcuH3Aj9KA1KZKUTqUgy5tXKfcmQXSbCzN7WYmdosp8zVUQL1yUDW82WPeMjtPfRzz",
  "key19": "5E8fVpVYrySu2ve4wFTtK33tU7a9bbUFSfx2JTwZQ76D8uUNhCqFTpiyXTCzACsEb3z9fxgJMFKs7yf6m6bEB9kh",
  "key20": "255XDnoicjkTCVmKLwDiWoSWA7CqqtnP46KHz9PVjJM5HpaVEuGjwGsdhJSXbGRcGSd7kfho2buJG7PoRcHRmDYg",
  "key21": "5AzdY1P8NgDSYMCPMxQtpDPgWNarvVJHKtgqJ9cKaipFYVyadUfafKZn7z99peLjbU8a6JDEB5ZXsiNpvmqoP53k",
  "key22": "3sr61AS8zPntKH6aHkwhPu1KdFe5DB51G7FSHbbvydgy2MdAoEjcUyE1f3ByUwpBLonSnU3TF8nt7N8zxW7BYj39",
  "key23": "YxwiyVjtdzxt2d1rosD9UWz1EQ9mZzVz5ynr3Q9ScBtU1tJbHd8aGYLBjUzpSE6seo9nespyEPGNmHUesFjwZKe",
  "key24": "36yFDVLYB99oQ96RwJbPQMJP2GdHDKJKELh7oPzUtTKiM8gwyq9Twd9ahBrW4eBBCGAfXGoXgvpRpjBg1D18tv8N",
  "key25": "3gA2SZAdBvWd8kgGY9PUztJqpfNr1j6dQeQefAZB6xvha5FKbpLfd3Cbhu6UrwbBrLM3cr4vkLPnaGK4CZxEe4Zs",
  "key26": "28ANpyGFY7311KzJR69ZhXD9gux1nJjBy3SnMgx8c6iDaoTfMfjUWnUTtSS5cTp3WGKtKDvgDTQfHbqZCVSi8vmr",
  "key27": "3gwNNYJzR52X3rNhz7kq4gntSSr5DzuidQ71fJH6sBSpYH3NSJ5osTdvFV1GrXT5gK7Nytdqefiq54tFmCoH2uNF",
  "key28": "2VrsY2n1BPN515YntfnQDtpjSPfEfZPGi9HsSdzCJ6fm7v5RyT4uJgzaLSNABwhxFcJRBsjsousceB2q8VzuNhoq",
  "key29": "4bY1JLx8ncXA6NYALHkvhkLYAYBJrcrynCkDPBs3a1GL96rTHUvbiqtjFZMCV42jVViZyEty6hQ3D3PgH7Q5TDQt",
  "key30": "4hZXCcFD6aGSWdGVR5zpr2EHavgdWGv1Lj6jS3VE3NXTvTH3WDEAR3HwXVFsq69SVuntUHdvMLt5t1z3cXZ4qkKd",
  "key31": "5gfN4bYJH2fUkwE7YwZ2pAnGCwbfgeYsiyze5yF27YcwQwmXsobxqcpRnT13rDUEikkz3RxbetUKXk3oqcpqwW6U",
  "key32": "4wgtZiWDaLbMSxehcLj9G9FypSx6qe5gxysENRgTLtMjFPo7MJKBvzRgSWySzEVUpChbjPB8kKWrFdNFJCoEDd8J",
  "key33": "2zPAqCtiknn2QDaQLDs4jBo3SwRR25UXKz44mA5pbBWALKmVtzsGQhfAGM5bue26r4qVhY26hP5K3DMscLiWDMfC",
  "key34": "9sFM2oHAXnzwZz6s2fXGx5vwmZhdWFyz9Ykdxa6KK2RgYrWBfR7CyKEDxsYYf43zFT8mh5EvEVrNuoGwyLnLyrC",
  "key35": "5SyKJh8vKLR77U5gNsEBuQs6xFGGUP762WYjYz2mg3tUeXD1MRKrRkCH2QvP1xTDmigee35zK3dszeSUzex7JsPF",
  "key36": "3XJwYj9jVJw8duSFtUscerCpWvYjKzLuX3ZcxVPe735EznPnJ2wqJnbUQqNocC4RGDFHmsziyYEWZRgWVh5gp8HR",
  "key37": "2r2xKwAKGyBJt2bjtCzt9DdSwcFmVLbeQ7p1Bb7NPkfwu1aGhWeWQDYJrXTkdJRGvHh9XXgDSpmB7HDEdDPEbH6",
  "key38": "3LzRfDshv2aYL9wZpiZSghwPVGjjSS7VmZnGAto7ykBjFGuG2XVn5Bb84AdzLZTPCm2qkN99DgQQ5Hovw5zAUQ2Q",
  "key39": "rgsNrSHdXBxvatjmUK4RkjD1yg4ZYiAMkSbein3aWfj9b8AjAKcag9AwTEnBnqGxYq77srWdNfDTzyAFB7EUuKE",
  "key40": "waxrmuDDQc1jsgJYMsA9YsZfQRS8ZE3sp8Z8DJ3KUqoDrV7PmjTLxkXsxQT4ea24cfhDKJaSPhif71rUvQWSeQE",
  "key41": "S5VmSVx6nxZZotDPoBbRNw9pu82ofzs288ZFNKuCJh5UxPjCyPTpZXq2e7LebJgT4urXKmcQGqsKBe8nYkJHiiE",
  "key42": "4S5YiK7E7mTQC6onJK5M1TSdK232UrX8psFApCE8hN9NWz4DLQSzHUu9pqVmwGMpsrLBSXcxy2KMNgQGPt7n7MGS",
  "key43": "3JRoJDoYZR1KVw6fisaGktyE7VKHQEVcNhqR2VTdz173LgDFXstz6i2kKd5o1m8pEsrCWWzzVWJN1sNH1B9jD4oJ",
  "key44": "382yB84rgUC7TcEU7DDPSnbjzzxhRsM5dakHGzpcXZ8ZFVzdS2hKnojr54hBoSMtgCj6xoDxSaL4BxYeKBMkUoxG",
  "key45": "5BzbcoKSpGJxqYG2W7dipj1QLJww2qBXvGSAgC8jfHqEh9BchhndS5n6ZYQSDEFBkqEtRRTQWbCPtTrcQQmzH8sz",
  "key46": "5W4crtG9Caw8rPwRTNYfGvf9LRiPpYninq3oBQ5p81K1RiBgNgJZYqqBx4rhk6BjhB8uD8gH9Ar9J6dvQ3Tfkruu",
  "key47": "34tWwzK1AEiR7nWjtAXgXMkwjTvYDLFxujdeBPr3GSvL7mf7QNUbfyziBiJS5MkRpR4p2PMJVfwFijK5ieo66AHy"
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
