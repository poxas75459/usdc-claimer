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
    "54Y1cteSrUbo85ooVaBcj3YFMtQLNeh42pTYyAoSb2Ha8DLmaLVTMjKVo2tpsQUh4FQKLSvmqpEPgy4LKfmL2An7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Casqru8BgCi2mWv3MkiooPcq5DmruUDt1JFmaqvWZrhAbcodpyDZGwbfQBKNm5xn7QDgNG7mQTdsBC5g8E9sgRw",
  "key1": "xRqwexYfWRNwrLh14bmajTJaEdubucqSrmZHbU55TPZUV7cexUMtQ5SmyMA6LioJWsDUPx7S5QLDdHiEJwDD6XY",
  "key2": "4ZYu3gsWgE3tEEa33zJcX2wN8xzM6d4njNiSCqew6wrcDAydABnGpstYnQa8p6LkxQYNUUesfomanKru2V3wYaxF",
  "key3": "2icHQD4vieZ9FoD2vuuzzp4wP46b85JBwVHqBY1nuCwFkHemcAFncq86rtsKjMckjn8D7zVmgtSy5rvomFVo2uzF",
  "key4": "W3CaxXJxEDEDL1d8cwAco28jTSZzPYzQPCqXkqrHDuACkMm9rZ1toKvvGmAokwTov5roJUhZSCcPeUEfsh8pQbx",
  "key5": "BWccURdaMqkN7Et3nSffmush7ZKdfAMteGaeuHLb7pHSt3iqXP1Nhzgx1rE8gXhK1KVjb39VCep7ag622z5KwBP",
  "key6": "5SCP9Lc8ZKb9KEeW9NzvbEkhGUoY2EJG1Rjyq5PPAWw1mCQJT7aFVb6BktQEiqNBLthkYDbRNMjVtvjZ6uNuaD8D",
  "key7": "65P9eWS3wATjwnuXC69Cyctgk9AwSyaHZoQJQ1R8isZmW65RG3YZ6uXbcDXkvCFUsKaHFxTVRTZjLSqszLW4oVxW",
  "key8": "2xVBTYrCc7XQDkPqksZLgjZ9B2iV8pim5bTHWre7wmCpxBRaBD4F7w7RmW8kRvoZcCpoUNek2AkX5fPcQu74qdg6",
  "key9": "25jXVxzefffUM4g9cVtuCFEuADBCD6pv6urv5JxcBKtJPdAJJVzZQc6wZEnx63hxuvonKoN2q8nH6mh9tRyihrt7",
  "key10": "2KxnMDg5ZjUeLDJauAuKu5H15N4yyBPqpMLKutk65fkx8jaBTqmPDG2bwidGjcju1whpovXvpoHRWp8Xm8dwgo2i",
  "key11": "4F9vzaTjwUHSTRVkpK3QkLWQeuUEjsrBndZ5UXsajiju9BU4rJ9ctACazCiDaEpmsDxqh2r1oYjRgs7HTJZMLaKY",
  "key12": "5CNnWqMppWWQvkwYK1kA8QsVxec7LSawQyduXnEZe6bw8vzh4YKpCn1WeU1v3ysYMQZYhiYtq2tJ6zK49bBFA6Fc",
  "key13": "5TGB6y3owxsqfMxTP74EbXhn8mkdX6BdFb5JWBqCsvYmmzZ3AoJaxMxW7MDSwkEEFG3xq5k9kVCV54kMCspHvGAh",
  "key14": "5Mx6jJsJs6UCYa6B5n7duVgphVbmgqB8nKyw1f1pJL5jbPTzQSsXQJ2qhqPuTA7mDHmUeLjJW7F6E9YxPfvRvXho",
  "key15": "2jutPTu1FBCShjg9eDLvUaS2T3VSaGvNgEyeXc8p2awMUas27MNyAVSLisaUQSLzXTStFJL1XDasPc8ZdmB6S6mj",
  "key16": "4VoSc81j9259mNjLmSDmZMFY8F5yy3sPAuonGhYEBRiiFSFFm5PJfFNKjyTS8mMA7rPCnmUWviPFEiEU1sA849jD",
  "key17": "5TcBtfx3JhNjWxGxDYokvcGzF4mp36azHAszweL6c6dTE9VfozVFdvgcqdLpL75ovB4LtPLTTsaHphMZYxAYv6RX",
  "key18": "2wsp8sJotrbF53VaLL5dNLd9Cqro2Af23TjAt6Zwz3wokZ8s1rZEqYZbXzemmLpPHPo2qBQsZHVKrMD1qAviGQnn",
  "key19": "4ibc6QJSbm7D72sSTMvLx6vqEQV3taJLw1rqkgTB3MXdb6DbG8GxyAc6h14DPFLxPMfTB9c4kmh2oX2tahU6KicV",
  "key20": "25jsvxm9bV1bDN7mV2cE2oNwvqN2kVzux2Cz21VsLMb4h6wj5rTUZiGEAyPm1nnojqyvN5Y5QjKjXLCjqhhq8s8m",
  "key21": "3KPEyobGmrLNW3Z8uB3tX4deNhkH2GbAVDzDxtxLJdmcRiN7kQR6r2DoSt6dzNixDtC9R8jjcrtWRMmGa33WHoC9",
  "key22": "4HzzQkfqu2p5MnAxjX52aLxH8MiCDKURqBads3HbFBEbNwsvGk4SNWXZmqjQQDdnjFGRLTJ6H4W8SpndJFfaMpWi",
  "key23": "4MCJ9nAsqH2pV5UE8i93F5jYRFLfbWqKjSK1M619VJTF9sJozn9UBJBy1GQNGTxbR66KWwtfaCAAmfSVbX7tSmct",
  "key24": "5WDf4Up4tidcubrw8qofuw46xNrM58T5TtjDfmk6W7JGk1QewDDtQZuV4zkqoCWmvZbnZU9MuQQGBP6J9un7weZ",
  "key25": "3jGPUm13VagPFp3t4KR6Hx4ZDeyYM3ut23u2hwCdmQCFkr7EjouWH6Bw3AUeXyvyUCxsyTToE4dhFfeeEZkDCbTt",
  "key26": "2ed5TCg33MhKfFUfZWS1K74prg6voUGtxAXDC6zFcY8TyLEmzzq9EUUpPHfx3TvDrdNUb14862BVVNKcaYVUdUCn",
  "key27": "xX5VwUnHxSnGoCFZQeVrUcXDf4huYG1gHLZrowWdWZdq4fWA7hMYDFRp7HePs4EFQQDpAbdT5ZSvAWgQCMVT1TX",
  "key28": "37Gk9ZmGfLKfQGKSzohT8JgSFzDEgEN7U95CcE6mutizMwe23Zjdctr3sZ51uzSXmjkdf2tjfeSd8NeMuxwg2Bqo",
  "key29": "5gHUMptaXZTuyWLsH9LVp8r9jLi3htYqVTats9q9nJ31MAdz93W1FNc7v12s5bEByvnyEwzP77LTdrFt4dNK5tP8",
  "key30": "hK99C411L8Nvk1Ck6VvLQHdiBYSrBTW3Lkj48Da4DKwi59gPo4XchhfzWTt2oYBF7Vy64Tp9M1frDUQnBqanZPz",
  "key31": "5JcoGuG4yjuTW25uBEVyCW9ghicba4ufrWyShzczgQVqCkZ1aCn9gVuxhRVZmfZvyGp76dJruykvRCHhN4eY6wSk",
  "key32": "HwbMFSB9VSCjNAV6LDkRg3X6PEMqwx9B9FYbpXTvSrj4k1bUtNahR7QNvE2fGkfwSypHkVi5PydCNDNidj68t7H",
  "key33": "3yxhEuBbHkKJyAnWypmf5onE3wqPqRdoPiKcfbRGp9s4mosnscFSrXXqt9fDUJjzdJLr4D1QkmpcPo7GGmqhq8fa",
  "key34": "2baeaUedHGe7hZpyQwgZXJE82fQK2owoGZqNZf26PkeURfNh5kW6u28gwNT3esjSP88N73f67gootwPTXDFZsTd7",
  "key35": "4x5wNGpgT6U31JuQExpx6MvfzAtB4zUXnm3ZhXLZmv2LmieFfoK7ZUvr1Lg73PtSTxbz8VfWBzk7rt9jxWNsomKs",
  "key36": "oeGsSxm6iRao5QNy8GoSXRzT6Bs17Nf646WLZ68PXx8QKQBJXmQ8R5BRYvg5eDiDzJJLphH5vFaNVNpW18tN6Ra",
  "key37": "4JdiUUMxP7qJfpz5h4dgDhizoatKW8Yb6YuihbvoxtrnQNjiNyEeR5CzhSrzfgfWQQ7KpgGRCnL2uFLgAGNeA6An",
  "key38": "JNL324Y8zAojos8GYfnspTyUbbmjpGW9H91jQRBHeUR23pTc7bbuLF5dnymtC6jPeGtkquHJCiiwnHpAAksPsjX",
  "key39": "33hA13Q4xpSbzvVYDNqttjoAaa4YAhGdLZhMfu7PJYhqCo4NMxVdCkN9wGnd72SP9kzTYeTwHRB8jxMGnaLCnq1B",
  "key40": "44b67Ln7xyA3D7Hane2vhh7LuDM4Zb2qMws7mec1YPo6gkbbNztQ4nzB6uu6bhVCfmUedspSVmmCDBAP3CADYDdQ",
  "key41": "4R8SdVQ48gppabX1VGbvwQChaJN3gEHgoWW5Za7NA6cgAeu9xt8gZGAmx8K9L4R3HuGWpJjuSMbUfJ1azTBohjaT",
  "key42": "3vHZhbj3C6zm6W5zPN4CWPiXbCDz4PWjUKH5j5zdJGE17LpTM73NZfDVe6cqTXY4snVUhVCiNZEdtx9YwSgTqmGU",
  "key43": "6aA9CDtxUvAff1VvDQqUGZVh1JuafQKV73PZrWaLrYuHWzsmEaXgW8ioMdu4gHwyHHd2nCxgmqA2LhYzrGwQmEg",
  "key44": "3jGbq14QFmMt8WzX7YqsA34tqQKanj3APiH96k7eHDmXLCpHnTPse31gSqLkcdSJcZ8qj3gVTgbpcHdXVUb2aRUo",
  "key45": "3iSgsjPaVWkCBuSpCAw2gsX35X1rPi9fD2EkmAZZNWAvALmTUeTVZiyrSXnhoHs5QspkEf2FdKDZRdURdMJ9dsVz"
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
