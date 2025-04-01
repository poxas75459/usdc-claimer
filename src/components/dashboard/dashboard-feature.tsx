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
    "5bYomV5VSmWjRqpEKP8KXNWLAevbRAbSzHvzzw1BVrQuFbTsh9xiAPa7wRYZv8HTVMo8ebZyesYX5FxhEkc1qdAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42QFvo4uFZCGGNNwHEXKBU83g3ZSfAxfV7UtRZojtp5ZTWptLVwBXB11jaa5y32DvHghoG448ZP1ckiF4HW2dkaf",
  "key1": "4doD1jvSa4V37VNHTzhs92snpbGK4vAnGkD3oLC4Ch6sQEULGhnyhPNeJVTRyUE9H4hMPuac9J6TgTEXNjdPGJA9",
  "key2": "5sn4yPML5cXcg7n7HSNghwV8KvqnS3McUvg2JPNrL9aah1gXL5NgeXAuMB81thngpYFydergpZ9oKi9U6whmpVBB",
  "key3": "2GW9pkMTHeZXvAemaZfbyvuZGBc77qVUq67Jsch1rfdzNAmKnXNYiYv8VXsTbSzY6BZJ4BYWs4thuoDhVrm7dggT",
  "key4": "4wXZozJXP833gCNbjviW2ghpERYeh4U6R5iYrkhwGhDLyuSEqynuc9pG52vX1QpVRtwcDTBH77SPiR89oJJ9uSzy",
  "key5": "4TUYZi91DRug6z1shWVeLL43JusjaKRuGpTgQXQ69rCgktdzD9PsRdVQ9ruZcKX7SUnFM8RwEDSSnDHYGotwckVx",
  "key6": "4r2UZuzuozuC992nNdaH1iyDbPBXyac2cY8mfZG9Zq1sddcWsxxe5JqYiMNdvY6dt9849inuXjU7Qrq9VtVddcAE",
  "key7": "jTAVY5UuMLtBy5xdjPYRewrQywBnz9ArBEqdFbXeXVwqwJK5MN6K9kzsvojhGuKezGt7ZNwo9krgeDuvx1MFaY5",
  "key8": "3rQuJVqwpTjeKGMRfJzrAJa78Uq8uXeo5RM4LzyZ3NxdrsHvQGpnvDENKPSHqQf94vpLD6qmZDNJzXHqKEwPHYcu",
  "key9": "2oY9W8xsYFtwXEMJ3qu6NoqmXzqwE3nqquXg74wTz4Ar9opSFzFPvRKZzxBBhGh4yvksWx4qJLMjTvyueXDTaBE6",
  "key10": "341ncV6Vtz1sSX6hW3GYcQ4UQK2JLYNmgadZ9Uvbk7NV5hT1crvZ5u77Kfr7jkS3sHGfo3Xu7TMmgr2JFstWGiA2",
  "key11": "5Bs52J8hp8iS3tyFmz9DcuNd9DvB3BZx5ynUGcShyRjTusxxRp2PL4N1ZbskQCuFbShf4D1RoRRNLKAyDgNhmzjx",
  "key12": "5N7iGxtsitQiBSkrXx6BwuYz81aNFCzBrtYn3rDykf5qgNf7dqwyqKAGRVpKLvBswZ3pjY4Jas5h4RfQ8YnQs5dx",
  "key13": "3wX8AeLKJTEaF69xPJSGxVogg753LbwrTmns2GdkGbWkwrUqSSHs8rtnibJxp9YZrL3RNhH6yTP1SPuHn5ba4hCV",
  "key14": "2rseKS4xwVWuosjq6QMnEJunv7r9LXcEj7s4jCgqjQUmjVEgaraoAyBgKS5GUDU2AYoHG4QMMJ3Fh4RHVB7k1uom",
  "key15": "4J13aWzWu1V7pFJxbMkwowH7eTAKGcVBRNc7dqGH8ojxnoshdmYsysCUpexT8uZoXPzY5MNUZdRNajYnvipKY9Ue",
  "key16": "T9X4ZZtwQL9b4QGxJ9KJcWr8zvnRKQWLrbZiPUx9WyQ6iv5eLPxj3SKc3k5aoQhvC6eWdfTBnt5mKR2ZSjnzxn9",
  "key17": "2RpogUZm3iMwsLPS4ZSd8A4HA7v7Fb3sGSNomerEMuR97vh52v1hyzV4atvbuHD29LxubXCm9rE5BtkpXuUCoMk9",
  "key18": "2tDYpnvhwpVupcZqL6kxvHWwnWCyNJAFixD9zntx6uMKykcirVg5mCWVQiXJ7kaeHWLYd4vUBYCpD3XDVheP178T",
  "key19": "5uET8oiwXoZM5SoMAEJy5L1UdX6oyozVyCHahjPajowUNwxwt4WMdD3ZnUvt213EYNrcL98cAGL9gD74mUbvEGdc",
  "key20": "42bTZ4jhihoiizDtCTnw3Cg7DZTLu9zXM2VCang8JuDmhdN7Cw6V9CFH4eumGph8V4adk2HuKDHBZs6WDLNuKGnp",
  "key21": "aTAwfdDiU8Aq1iN2SRDUYdngzCzCqe7WPeMTLh2TiLtKM2waErmor9CQeT9z2Mau3Pktsaia9cPERwsSeW31M4P",
  "key22": "2WvGUGAiwa6BGXkh4Hyea984n9AK1WthWcr3jT132x3mHfBkNzWUh7bmPdVDRorXi6PebGzi2QyJd6wZc5xjZkid",
  "key23": "35hzNeNJitPS9HkxZ2W3rm9B9KQKHHdcqFk24hKKY56hS5YTm7DfFS2FE2QMAUVVXqmYYPeZLej5ahWsSEnTZysL",
  "key24": "2TBZwMXvtwpkHBLfpKH1gCBK9TtDNkTzUutnVSVTiYcYtceRSDwNR5fDFXKDQNjPopjdfizjXXxpDLbT9ZHdCYdZ",
  "key25": "4z1QD7VNb2kTsWqJMvGVVgqwJ4C4fL8WYeVNFM6Zt9c9BRmV5futoxh34Ct65Wni4hggdQktJS2JWV2g4YzoDMQ4",
  "key26": "a3SjpyNhsRPinR5B1upY84m1zpaJjUiB7LdEKpCx4PNNFUyo7cez86FfZoYyTCKVt9y1mRYwWF7qJTeSSiQi3rk",
  "key27": "5kvkkhC6pjWfBzX6gRDAX63g7X8pDvqQBfdx62csjvAUohqRiSPyJPnSaE7bmmmYJLFv8F53xCHu5XaMQA3X9AxG",
  "key28": "kuo4LY7YxjHURDzoRWRThxqgDY3zA16u4hX9bdVdPq6x84q79kiVeqcNXAdYuqW3neQLMawEyF4aLpZ75KCq3pM",
  "key29": "3aYCYtYp7PbwN3i1CcAbstpAymPx4oBVWKjLM6t5F6mcJgBXVPofHyG6PLw23p5bCKmKuyeqZtccBaB4DU6MkJw1",
  "key30": "3yCSmXyAXTvVVXgyv9QGWQ6URmEsDumrnJ93ckvN5roPyp4wtdie85r9ucmrYripUAfdxVgCNoLHb8QWzhBJWtTT",
  "key31": "5kDyxcjWeyHTqenP7yiUvgWBQaaaUQjKcfqF6UaoLxSiNzJAoqB6CDxNV7EaqTS8bLfPRfs2p2BEGvWbCLsxyawe",
  "key32": "5MaSjzmGWWzSs68QAswwWbzhU5WjtXPWHnMyJgjgjWJz2rCZFasKQyqiMn5JR1uNPGtXJLGeZL19fHfPkv9ydfqu",
  "key33": "5gwRpjFAhr1xhFFdvmjwKCWp6wfFsvfdPZaqtP5qPxNvJSqBi5EwSiYd3cyw2XtaH3BoVsvSHQnt38nC9W4QzCgM",
  "key34": "5ghN17syaNuuBzf3xFnmPnoTXJtkk38NY9mExm8T9Nv5ZQdkF6LEJW2qx7JWHVJhzR9jhcbJHctgcXBYfJbexYm6",
  "key35": "3rHXgAtqzqdd4RPD1LvaQRjc4cDJH8b8sj8wRiDqtq7Nbp3xH6tkUm5u1DbWHw9srrQnUyPSZpjr3u4UZzcvpHMr",
  "key36": "4DST1wAf5iVt3KYaHnngaws7Ni3w6k7NND15rUQKzm67RkR1GcxRWZwVJkNADo86QKrAkupRWMaGLYuvGtCSTL7T",
  "key37": "3K9zoehEYXVGczJzDJCnqSWmuhe1NAqA9DfgEWJ7V88wFdMKca2MhjJwJurcYqUMYgoft19iEF9JRQhFeRNAKUCi",
  "key38": "3zuWWfcTEqGiFJPwxNXKqJ8efcq6KdGFtKV2mufhHdUPS9USxNRPbd6L512TYPM9SUHd8wofUV3UQmRtz6GHqkiv",
  "key39": "2uPprsxuvnhMuWhDJtGw6eCgfcpVZqNfGN65ar638DBbYR7zDkhgaeme57EvQQ2wK5n7pgnteRBmKwwThjcVH2er",
  "key40": "3B2QR46aDKToGDvFRDhVKehRMcWWNPGiKjwW5ms22TqAmusstNzSzaTsW3qhP51H6NQpv2JM1AwnHkFDGrYHXnWL",
  "key41": "4DgMZ9n2PHNmEwCtdCmdoLM3mqERYt4F8XSHT6wgyH63V4zsRhp6q1EHpw8HFdvoJvf8pMA9q9YBkha7BnpuLxMj",
  "key42": "3ZFpifriqTAFHCavm7sMUC2ioS1LwQBbnxUsbQ5yszH4KjLoMfFUPV79vPrpTaTc6gvdLqajsDgeGAFK4pfQf5pH"
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
