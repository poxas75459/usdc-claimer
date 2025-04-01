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
    "4nkXj7FZPsAr9H6nv53MTL9x2kkgotNSMdEmJKpLUnGaqwT4HPvtRuZU2vyA7rxBcQg9qWefGGJosaY4iErVSpvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DUNx9q4xeAHPZRnFu6nLsxvgfoW1RwDf4zGBswnn6wamHgwM6qpVeb5s4UfZP57yifYd23hhhmByb2VWEdnQxAk",
  "key1": "2p8zYNpezeGnNTsvN2NaZPEcukNxFa1kqnAaRfbxMVE1u99ejzxbbQvxgSisr2YPuYzRZ8TKmfTHgwFoLb4hHc7c",
  "key2": "5rGrLcWUoNDo4aQr6DASS8SvUmdRDhBoCw2EjffHUsQBhGSdutVhdYtGdyZAz1DfbBviJXTHX2ThaoV8RvUc9Uwp",
  "key3": "3KQ34PTXvsZL3EEBzeqTWXRArZYczCqGjVGjhtAkgHLeUuiiSCi3iH9Xx2k6hw6xLYohyiC7HRcEk727V3TCrEnX",
  "key4": "2M7gW3wExuR9QB9RazWbKFgfK19Vzk2MBLhY8x96XZAVPZ6meKHCGJssV3fvR1wmYtsaxziK8XHy36AExq5PAi14",
  "key5": "5THK65SCktuyPA8iYT7xhiig7bptGXzr1nWU27NrtuW6CDNtvydCdyTSDfyo9EZZ6XHRFogWdjYJWr98MJRpGZYu",
  "key6": "2uSQLBV24i1aAtQ37mxNozbq821xGoSrj8nftvMz2ZGxaK28jdJQ4FD27pWHGFQHwHdiJtQH2bkfEwRhMyvoXXsE",
  "key7": "4fDtF7rvCVprZ6AzYG4JtoJMdCtJhFTYCYhPmQNfPLQRqMKWYidfkcFKwFTp216ymNhVTLj6KVpu2cD7t28VYckx",
  "key8": "4b5bSKYaKt24oRB9jsZDeK4XUoSbFQzEwWnrZjys6diz4c2MkRKUsj6eNDFPRD6AtUNdD1U9hGPKi5Q712icSzcd",
  "key9": "G8nEQN5wPyZ4S12qASAEjFtLSJPDbdxiKropTR6GKeJFH7v8cggxgsnT3zUL4y6DSJb9mqSXucoaX5Vjtpr4ZCP",
  "key10": "3R5aFnDESmdkJUXugYsEG41Czxxci1ktm3rEGGFLryBT4BbtVErqNqdfBmQ9kYfYM8jmo5ZESm7CD5Aza8EcSzoc",
  "key11": "LsZARryoJnfqDrGHHwB3yucEXmiPsD7YgT1HgAhNv8QqJziyBxA9eVfjXtGZjtzBzqQBRdfsKefKzTNVmcp8B1P",
  "key12": "3kQTWbdGicpjEuBr8LEFGAFhhzubYVVkwKFaVbjbpED4GYDzJjbVGLwMWxBrspmofC8SRivpJhjnREKwrQcceoXM",
  "key13": "5izHdhKTjgCWgYS5ark6TH7qoFXBpbDCRbMmv5nC4DzKmM9yFmoYb5cTgr8u5vNuXV4GZ7GdfaU8M9zQa5DdDEbg",
  "key14": "3NTutGyHkQUV3NgwAbZ6jcMhci3937LaSpjPaHoNuSikvy6ZbKQRnDpStQ5yin7h4t8yfmuVQ6BiQfisdrp8Mn3q",
  "key15": "2JpTVzv7H7JaxBn9ejbvx99ite5U1nbuCKUJPLeh3NaBcq2RuRRcekyUk9kToLDXdeaZ51azNmNF6jbGeuuZaEw5",
  "key16": "54QsKdejJDqjiEfVc8b72AJ4TobCDfNVx14Sh5Pw6BptVRw6dpoMj65Lm5QsHmDKxqcWwwhYkMcUKpVyXjieZLm",
  "key17": "3naVCZeTtF4HFFsu64e6FPmj1hUuRx3PDz4v6ep1pSCJcoNZ2d7RF28ytsNokC9chVthNb9qxEGZ9uzthU645Hhz",
  "key18": "5cwFtjuknGT5DrKbb4nox8m58ovg9MnwhbaGbv3kGj8outuU4Bnp3fQYzUcz2sy4Jy4bD2iJCNwvVron8X7VNosd",
  "key19": "5eSZV7bDRnJZxLRkhGeyQWbGGTxM2xyJpLME2V8WDDMigkeS6Y8b2FbHT75NzQCY9maCphdaqKQAHstJaoTsZ1M8",
  "key20": "51gVhmBSwDX9ByV15BDKmVBXckKBZPT4hKywGWrZsRXgMJhbsqSBH32vrzSbmMi1PsWjhKLYqCMwnFPETnncndnT",
  "key21": "Svo1o2NzgHKF88am8XEPSWptbhCrVMeuLkCq9pcLmmBRfwQkHT1sPrdoAUzuh9nZBdj3JPq8p2AN8V4xySBEngw",
  "key22": "4dpFrN4dZD2Qdw2CnzLwVKuw8ZtL5CPrB7vcGvL1scGcpgCWWwCPQNs34rDcbtoTakeTU5WNe6vKVmXNX6SeA4LD",
  "key23": "5GK2icB1ayxsrL9yqC96ASSWpoZn9rD8fxF679okEVFfTmREGEdPB5xReVBnJuDZg8TnQeFxGGVeVFcAcSwLnubT",
  "key24": "2oKpiubb8AUrL6kh2wxNXPtBFnFtZ1rCyZ9SyiYXtd3uoVBoUJYCSg6swsbP9zbJGFpTCkzFb3Lc7cZH4pP56u2o",
  "key25": "k6rLsZ2jK7UtMq9Ghs4C19axGmyuDE6cnweRmXtrL6FNLFy5d2GHbi9F6s4eH1YBx9m7juqRZmwKtjLSCQETQSZ",
  "key26": "4ZweiguquvmB75rM6eqAdFWARLrgE1uTEnNg4J8MbdM9ToaYXPRp7Tbvr4wg1aMXR875P6rcGH4EWAPL8FdAsApb",
  "key27": "5PEPmVFNYpQkyRp5w7eiTj537YuvV95pGhcoG1JdYZiJx4hZ5yvKZMWBx7rg3PAtq5oikXVPq1JiUVizUPoTPDrL",
  "key28": "2kXKbbvFQVC9jDr99QtumGW5GrsKUM8M5RDyMJyhtdUimEyevQHRdBLEdAGvkMWFF6t8MW8NQd6jS3VKKs87Tu2S",
  "key29": "2xYovqu536TtHtQJjvgfsghg4T9NJAwZuhYQTHKS26Xw9yi8NBRzbVBA99BJowCmVMb1JzfiDrFYu8Tz46gPB9aS",
  "key30": "4urN7cELLoHNfEJyK5Rsif7LiR8a3nDLc2YAHZC5XDZUKpxBXY8dEAtcjrY6oa7tWc2Wi6fzxhuwSdUVD41U94GU",
  "key31": "2Vn2sBWw2TCA2TppdQpRMVXXhEWgJDHTp3aqhq75RkQRYkhK1SKtNm9QwNNugd7Wu84ymmY66SZcRJ49Db49iDuC",
  "key32": "5Q289rTXQijARCkN2scA9y6cskmU5QRy2ReVGhbPR3imzUcabe5Pn1jnEPaJwePn6TNbLN9i2Up5iMjAc8hYfYhZ",
  "key33": "517YiDkFcoAMmAYMy87nGcbBKdpvabajXsEcoQSv6Nr2UpAwecUqJjiiL3oV7N5RC61R3aUExrnRZZa4NnL4mcQA",
  "key34": "47DUonqbyHGDW4cg35LamZhUq8rbYpvFsRghVxxNLw9Z4MBmzZBm5HZ595s73E7MXUiCZZ2u9hnReGwy7tumDXgL",
  "key35": "4khp5huwbhD1FY3airUtxmbgSfocY2SUVsPj5RDEvbzuDCQu3gMzq3Eua79VqjnaEVr4WT4GTMeSKPcXTwADEHo5",
  "key36": "39Egj6bPLYayhKc8E1My3aU9c8SwfRbEnXgSYw3Wa8uLDSskQQbBz5169LJjKF92wPhQ7LkT97JxRQAs4BhBR6jP",
  "key37": "3hQaai9vqLbiPzejJVH8uvQtvMxxr4zCGAsnF4iTRmmGR64XMKLEmheQiZwaj7BAFaMda3sXAfG4mrtyUpdgXyAT",
  "key38": "3LE5LihJW5BS6rW9gwuhsMUf9iwsm6P85g8eZdNYMdvnugvTN5HqkPUiwCMaDM3AkhZ5AncPKeUpsoKKnE1mgvAB",
  "key39": "8edSm5Y2A1LXusH1gYwurJ2qiazX9wknj8zq14QkU1vv4e6MQeMsetjk9gdU9w9vdZp6tFp6XJuouGwgKpTJt6S",
  "key40": "53LY656PwmJFM1Zw1todpJ3fgcKjhaiLFpzFeN3otwxueRsCzykaoLUQwPGASARTd6Bioyz8yuANWHBJgE6QYrVG",
  "key41": "46jEwFaLhoAQ7nP7sUZ5iuSn7FB2WspJ4up5uwjRdpfHPMwuvDRB7CDiXGrgw8W84r9wRC7Xp4n4roDdfk9qTd4v",
  "key42": "hrzSAiH3Jk66udY5PS8RnTKGgWgkue9xW1RaH6r3sC1ZY3pb9tGdUKyXHmZBWZ2m4TxLH4skJyhLDQQ7ZQogVv7",
  "key43": "5aaDgDjLfUHeGZTEpzA5ga6MA1gaeNbCwHd55wzT8X4Bz1M7AjXHNCSJbGw1Jm2NEozZ1RXWDkKLsKs8rZ2XNpoK",
  "key44": "4SvMWAahdjohZE5JkrKWeENBjzM5VTjqQnacWKYWHKPMxNwK1oDkqsveM5Pnfo6xtfZFSAJHdzncg7qoYyNVK3V5"
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
