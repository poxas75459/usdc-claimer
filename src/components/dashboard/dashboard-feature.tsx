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
    "67dyvTaRnYEK6zVgidrt4319A6yoRnn3DHWRs5kAnKNtQ8DADKiZ4rEddaq8s3zf9quGCUcWsRHWN6tx1dmavP1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3b41uSgbyeez8FVRKARxCd8kAku2PtsMpFJRrwoNgfCwRzdVbiF7Eixnzq9ukCy8a5CMgoGazAZVDuso4Q1MCm",
  "key1": "4GvPqwqq9h51Rd15EC4w2nXJ4eWg4bTLD7pXstM2SSond6nmR3frv759NxBSvxRGytaMBfrAW4Nv4DZ92XT7Zgqr",
  "key2": "3h5o4Xsc1Uzz8u9jMi3E4hhG222Pf6rjBJ9PxViLhgXEqZwW7G9vKQQ6VHnDaYpPmwYTzXR3bqzmVNPTSkY9D4Rj",
  "key3": "3btJxWiwHdXFioWKcPcTFUA4YZ2iL3De3yYiVZBZWF3ooYs3DRrSAgCcg3q2dLX9RXSC1Ziwy6ZYskRBw6C4ZnYU",
  "key4": "5MAjM5YkBcyCuNtyTAL6cNjc6CkdLdRWzbnmGPuUTME5rzcdgYehhJszzRfnKzvNr1nRwx4j42xuyLqsrtBGPC1J",
  "key5": "5AadekjuAeLCyFffJFEZcYUGtJU39LGgSjKUfueQsiqCjSXYiw2RF7hNThXGcpNxbTqRbz2czfyqpDavf92X9Kdb",
  "key6": "4R4ywHeGPCLJvJycQc7bGBymssF5zz1HGN9WCjH6V34WTLZLkXWUmr8ARdmY37sma21NjvccuSXkpsRWzGSWjGij",
  "key7": "MszexY5Yu5U28sqXNHb8uZpp7x8vtwUvdnWzFMkhH8h4uM37RqucfEk1qbfgvDdPsfw9Por2G7ubdPLzWDppH53",
  "key8": "onXuaj77yUwKYgohwLUaSNzWV3gPEU2iyYuMYJ3ioiFncWNu1KSVwBNfQ5yXbGnN6e9CCbJsheEJDXHxP3aM69F",
  "key9": "2ob73haLPr5bn21SyRvCvrCdvJVsSPdtwM2iVspfPv3wBLHvPeEP9WLQVuNVtWJuAPAUTFcSJXuc4rxWsvTLQSsY",
  "key10": "9BNWAcG5GZMuZxMRrVQWZMvKciXSzVk1Epb79ta5hCotz3ZUWQS5uqG6CpH4rLqHscaaKoNR9Cji9KC8whZCwY2",
  "key11": "3qcsXioMxkPZqaHLJUGKtDvEiZRbSLz2D1pTZhgmm6Yj8TMkMriQPiUx837L6RPPkFfipZic5hjnWQTAZjJKCx1v",
  "key12": "4ACbwfpN2wRoFJYSDWrAoDJ4VgzSNxsay8hUyo4f1pPaDArw6CSU1CssAXVFaja4qS72fMACTjXmLiXd8fKxDVAi",
  "key13": "4YuL3oGbxeRWd9Jxvu43S1oh6UdvY7WmnAr2deGnpNvEc4QQyQmLHdcyuTbJHwkS1b3sGW8MizGVA2oeeV9UU2wp",
  "key14": "4hb1886kpPbnGYXjLYxpNMCUWwv9KGr9E3ER8xJ49VtnQTBVQk7ZRri8BhFsqTk8saSrUp2LCEnHQdUbZwHJvcx1",
  "key15": "uHXmchN9ZvHJ5oLZRUJRWkyjDXR3QgFHctEuUH6roTHre7cAtTcp1RBFWGFBhHTw6fUkh2Vu9zTHB4iRBTpnTSy",
  "key16": "CDJqkW1JmqZrQ8oNLd7iWM9XycSuRkQuqBMdkhSrUMzPpjHTUpXJotjyGMstSpgrm1k1QndEbgrzxWsncSzfsGm",
  "key17": "4oxjFkQ5q2YRrchgS9RmhEBVSXMqdMEdiYr7GHPHhuaJKQcxrZVRRVwL3Dj4DbJDNKUDfsLLmG9mDJRv9tK8UMsv",
  "key18": "2tSQzjHKErqGxNjdWq1eRdF9DpDfcDoKXjpmpn3SjcFRsHw3yEtQXYHtaDm2SuB22xwUVLY2xQbjpdZNCZt3Kcg2",
  "key19": "2SVVFLW9AK91XqzFaa6QxdNKMZ2c9cJDJxog4yHonZsunWbHsEy8SySpCHw4UxYWtExCRmgTYTvcJSGWVobq1Vqs",
  "key20": "21jca9vPgqxzFtS8uYw5XPCF2VZTLgCbWBUtr4FNmmu7uRMZMqksK5uh3JDieCJFbcqD9QzBU5Dum1PEjggtdmMd",
  "key21": "3dbkgSrroGpCtdivwXMafFViiCPjaf7DeruRMCLj8RKpPCx3RGsxFy73qLA4yDx3Yc1cJdTd1Hp6D4HLx4MSu5Bg",
  "key22": "4yiJGo2P9SAFYjRjSGKR74NRaGwAFd6JY84zD5BKsQPVMP1Z6nNf7noBmafpbTa9gych55uEjKf5D3VczxPCQBGt",
  "key23": "2Z5bdsKpGrRfY2U94W6mKNKnL1CeXNn9FR8SvQfd91Sah6NLMWiN7Wwj66VXi7t34khMncad4k2cpK3Zpbf8VTuZ",
  "key24": "5X5bVJ7HgaNeK7tqDUvj5RFkRpe4ourba1EDyAczXqBXay3EJwAt4krrLn2qPGt8DCvn8AVZ7NiYgtawtc5VaQtF",
  "key25": "67SYFg4foUE5TBfqHUA3cjyWSjAMcFTag2mr4vo1HN5spbnVzfxkd5ZanazGw9J3GgYq2NPvuhkEAUbGzrUUCN9Z",
  "key26": "51dt1guZFfYndFsdAEjJSHAcQmSE55E7dySyD8TmatbmesNMqAiFffxe5rbyD7C72EZr66Zng2RDXEf98PB5dacM",
  "key27": "39r5F5tMFo9ZULiGvw289mwBBxFLKKMvufURSK5wseddL2dpNKJ91tYssRBuT1aznbBRQg4nHrrrJvqxq9ZuouDM",
  "key28": "DpbktzrUnUnBTtDzUVH8a5J924CN5ZAVj4t61Megj3VFjozmXxzmqrVtotDG8QTnghZxxJYJ7QVvnDm9hKszDfw",
  "key29": "2qkNeT3edkQC2Gfoav4PRkUtFmcntB365XDn3zesxdSbUA5CyZgh69ADPGeU7EDd2MZc8mLLd6fJF2T77sGP4o64",
  "key30": "4LQhZdr1gJbdoyPHbj4XrxnyZGihnUCwWJf6QawMVM2NZRwwyCeYMZRtfXwZW5fHPb6NGGntyyoMGA1exoYQMbeG",
  "key31": "8JaP2QwVk6d2VLvDkMvGXsy6yjKFcodwfxhMpji6yDXq8GDqXbxRarUFEWdeS1qGnvVgL5D2iWuV895rBaN5MPv",
  "key32": "2JsksCdacnC7usHHhomT8Mr8kDAHWbRR5jqkCDVhD14DmbZDCHXFoUmQisRExzTB2KZEDzUhnvBWctjJxAKSvPY2",
  "key33": "36sQpJaWr88S6kzAVVzByckthrvCczLePtHUAFsNmVFPrd7rZJmhG1FLzeYCZDShbohg43rNwwSygqLUcYGu18L9",
  "key34": "2No2Se3q7HTPiASZp8tX94fzahnE6gXRNTjHEiwK5dmJ6YfKUQLjke3RdMLn2VaRcoYaGaL29V8WRXLjkjsEXvt3",
  "key35": "4KDxpDLY1VvJTnNfanEmxF3Y8UyR9gPG7A1N7CquANzMKnesab7wvm3m9WY25JAT1SQvBuDeFLBaEoGC1U7Zg9eV",
  "key36": "3BQWVfB9vp6bZvLCULTDnxZke5pdHBXoKVs5AEE8GLhJ4k89c2xpasJ7xjTW8vZxdPGmi8kf8cbaWr3EaKnzqSyV",
  "key37": "3aHXuMqJpxFsHikNJDB14TyVJ2WtKs4sHL76C6w2eTWi9FGEq12qGWFxEMxb7qF4coJ3efHkiU3mKoHZFrUrVrii",
  "key38": "215c9VawtKLPJgqzaeBhWrap7soUNLbSLkLeZtNhDAvUN5XhzmwEBMT3xViWMDJPADs6YctPT6RR8hXUqs5PZ4kT",
  "key39": "NyqTSdizcigAem3paEJ6dSgBtifb5mrMKbTHQjFm2heMkzy7hDhVrXg9EaqcqTyRKPdqd8LSBYRiCwALsnLF7UN",
  "key40": "3PpVbFixtVqCucN8h6BLiRcRqVMWXyVf1gfAp8nXhHTJbLGL82PxEMD9v9VDx4qhxDraEas87UJB83DghRW6M7ZY",
  "key41": "H4vu2xPu372PHQ5kpjitGNwom2yr4YC1FocXT4bGXMVPkKwApovSrdFmNFpqBkgjE9kf3eoB1Ywm31HZZP1QxX9",
  "key42": "63iUWDdvuwpZniYaaWivtjxBn4ZqEuHy79Ms4temzGH7YQvQs3bbZ2wxRNUvTH4cy1jM3ut9vo8GqX6k9YZqqybp",
  "key43": "oWVK9Q3hvgog3K69f6NN1j48F2xsosKMSxTjFHQrshKV9TuhYNQRZoUa3twGcBqsz9xYr1NyAHeCGgq2Mn1svxC",
  "key44": "2QvAWrsAVB6uGZkZs8QA5yib7Ceg2ThcwSRXk8eXyq3ugATLDnpny7qnwmyUznd3jrP9aYRyns6qii4hBANwjKe4",
  "key45": "4ghQDPZjFCBKJdgQKhA8VbKyYSESb8LZGVumrNbqj2KFrvkjStWQRxf8zWD5Jvf1xDjCcNUn44wwAjf4YRdjw3nC",
  "key46": "3BmFtycQBKtvP9DkPQwQEMCquAyxPV3Y5j15gwQegBWbCzWHj4DVi19uRwe21PwECCDD3mMuHpas2W6gWDKiBR4x",
  "key47": "4gJTVNNaNU2o7GDesh9BtrxXkXXKqRcwinQyx52nhWwKbadWbgVxe3vgLeFVfqtvfo5hSwZ1XDonJ6USxVtCzNqe",
  "key48": "5U3rBXrdKFW5YsnVGbtQy6zsEnVDiLsrocdZqpj3Ke8fSBA3YZtHe8CAWWoqJLCo3MfjfrFP88cdZQSqUTFxyj5y"
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
