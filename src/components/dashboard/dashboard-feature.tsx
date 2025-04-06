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
    "4uusK1Y2S7Lr2SEqykcPFARCJ36mRhem41YnzkPkCBvCjzAcSWHv6SGo3SYcuj2Vn7MFChdWnZexrgo3iQAV3Pck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9FTSEDSMb4uy5DXtkzn9jkARZ5Mg5NmkJj1YuVLbLpSyKjFdGjWxMFdZDJpJvPk4cZVDuqUA8XEY6FzBN5KEc7",
  "key1": "3U4d1cKEwjchy9PKVZfk6v17hXeVAUuVgRDqFWm8xE4KVhsjvrZW3F4BMA7bUbbQTqxLcNfZZThE5xCQnAPFKLct",
  "key2": "iKpNFVpzHcmj9zvUDy1CE5AZHvVEPjTA1Zz79432y49WiozukhBjsvkK7iRnameTgiyy1WzT5xx6Rvo6ij6GiSP",
  "key3": "65iz5SYDnq8k6ka3YfYcV9RPdc2rqLjUbtK4FoD3J6pgCQV6TqPZEU5SXGDFtiZAcxSyGTVkaFrWwjSVFKeMGxak",
  "key4": "4WjRF8EbSA1yhWKoeHMEwqwM2BNWNQBoKS5YfED5YxgFMPxwTE7edP69Ei2ZhZZjC1HRCBzfXYcsciv3eSJzd2EP",
  "key5": "58HpppRf5hk9r3PTmCNLvDLBW3yaz6nMdb7N8WtgA7QfSgTqnxNeymzRHmBBiYtMH29YBZd6zDWz5oEcS6irQ4B7",
  "key6": "3kdar6tvduZwMCTjupSozR6FFc4yuRyiiv2qa492ULp9fC3qUwgGDX96diY6vSvFDLe2gc9i5EEDKpf3dGd1Z5Yj",
  "key7": "3oRKgzwGcpF9TWTAgd1YNuYVAbBXv1SgWmMTPiB21GYWQo26m6UvDxF4eaFEisefBuVnytFuzHCr7dvmnr9vRdjH",
  "key8": "dYjSN7841aqdfuUscasF8VjS27tXNDUexzknb3kXbeZHep31JHvyr7a36zuCRw1zWaBkSrpPkEE91e9EMmBSzqK",
  "key9": "Uk3yAvfCbA6vGZuAGouPXt6Vm8Paq9nTkUHfw3PKWVQ9ech1xs8ANZGhP7GK8YVEch1DBuENwmXWz7GrcRgxViz",
  "key10": "4Q5ib2nF7m27mMLYGBqvhTRHv8nSvCzSLNLJZcYTDDGb1bEfedWgSJ9Mn4MjMpB4vggDmUbjhP8b2KxJH5DtTnpK",
  "key11": "3kdnRHfm2ugSmx6RYDKUtPYmqd47k4Mb16iqHphoBe4x6uh1qiHYw9s1WdJrqnrMD92TRBkkzsoLnkkQUzV8zxYJ",
  "key12": "5qUiRqbw92ak5XBtu3d93cc36r4UNJiChPZ4R6KAnfwra4Moc2hs1v8TE3L5JKFsDeaDgtRzMaf8nvG9CuDWHKhE",
  "key13": "5DgViPW9wqUhqHDDACnZ63RpqRTC6qk7AnkbYrPzkEziJH9aLhTdsBjwhB5tragk22sdFqSJxbE8vKZnJvMcg5sf",
  "key14": "4b3BnEidMv96d7bSLGfdXYVfQ1te6oPW7q2gF4v88GNskKmqs8f3rTmgfD6n8qvHPHc5sjMBazyJKEuebnb6dKRM",
  "key15": "2qutRKp3Y2t3dBwe3Jj1NhVRTy3epGbACoRxwEemGYQwR2eLw72UUkrt8uwhp54XFi8XeX1W3rBQo7g48KcWkc13",
  "key16": "2S1tPToNVjC3oMJNy65MLWZ9uDEPPGeGTigAv5i1gpHMxoQv7UTf6bp2oyn9XxGJZN7DvogdZi3GjMwwSnJA3m1o",
  "key17": "5Xg1W9FKcGvjGGffom6S8gqnDoNBeHrvyfx7fcZSHQ9UyknL6CskhRuhzFuDQ988A9PSNB8MuAMWPiwCwkcSArsq",
  "key18": "3vVrvyPmNG2XzJG86aeg3hnzGTQkXSKFMmPP7BJhKL5MFFxdTCNkRrpf8TnNS9rsbqAsyva3wejE1J67BqCX3X45",
  "key19": "2traoy3dw4uTLW9J7PbRD9bF6qH5vQcJypk7Djzef6VsvHx7VHBWXbovcyAvUi8xFzdW6WxZg2BJ4HXojkwjRUpk",
  "key20": "3fnx8xiFszcdQPqayGpbHHtw5Z1bcRvePFAiZQA5B42qTyTxFEtUeR3bPireGd7d6EG3GVTSCmZEKyCpieVLP3cD",
  "key21": "4BvUVjJQXXaMjLApBixkM1koScQ8HNSgnWvvdr9rY37aDnBWj2zqj1JcgBqYbJGGn6vNxxzoLYiLuonvDmz7u6vU",
  "key22": "236FqTLdiPHnp2vp7mrzfrxUH5LScCyRwW7rapZYnLuAb48Y4H6xjzPnpNMc3EdkgC6zUJK7zDhNwhGiY3zcDXwD",
  "key23": "iXPotBGV45hQKSGyXGXbNaJ5mS2ERYsTW8pbE9zR5F3tFqwM9qoEEHuWkvaGe6cm5a6iNZYL769dRVFx7HeZ74u",
  "key24": "2c1gjFiNHKCyNDG8zDeKVxpq4e6ijCUvmPJfa3uQG44jSUt3xz7tiw8gkQrpxurTsWrkofxWxq1SoYnzXancHsfp",
  "key25": "JdDxEr69wUdqp3wuYbEkEDwBWv7bosCgF7F6VG2ykrFPke4qfd8TZD4vyi2PukQPdtS7PjGAjtjyiX1MVDY85eW",
  "key26": "3UVcgH4NcefnSeLpyysSRQQkXTAkweaHgReYRvs3T2xrceDMFNkDk2zsKuMpKP3CLW29uBEt36qvcudiXwPnoV6N",
  "key27": "4qskj9Vtpqpq4RnhXoBMYaV217PH1M38WVLoLn7i6TM28c2sCxa536UK7JRw7B1Qb9o5GRnnFMxtR3hewmyvhwX4",
  "key28": "4jcHAnoBSEPseKhEC5KFUwrKRgGkUG8sejWdjGb1Lv4LJBAjXuB7ny8HtCG4Tot32YXUyU1KvK7CTJTa7agpa3m1",
  "key29": "qZ5mp99KUShwD8hQwg9xMmrNgetpG5YVbfBmwTRktzw5Mb5o5hHaqC6Ma31VpUX7cdSioGuboHEo2ufcqKztSuL",
  "key30": "3jT4twLx3c8QctrauEBoAL4DAPA5iNeFzbKmKJhrv7Kat33oyt6p1V4RWeVDF665YjPesr2gWDPmiwYqFKYfqD5v",
  "key31": "2a4drKWqfCjLv1JwkmdW2gupRF42YyzgVswdpMpCpMoZtc5WptR6JgZpJgwBDRYfZhkwKF3PVQFroBbZN9D1Tt7P",
  "key32": "3evQq5riwVrbR1Fo8rufvZAchTMsXS46RRxGwJQTafpbJwuZd8hxzP7nqgWe47JudB4ZHWT3eKJQMUwBaVm8HKFR",
  "key33": "5cM3LhnLey5SLz8Voxq4BXJ4osQ5nBKf5z9RSWJjAofpPs2Dzt7j7ZoRUqzB2bLUnuwPG3BJKJ5tku5HF1zTQ24u",
  "key34": "66LVJAczxS9Htsj9eEqLHiHwPyA4Cn49ovnvHGRbF1eNGRVU3RmVfje3FSe4WFF15eMk2RRvWbuRWYtgfuZmTRzY",
  "key35": "pGLQ7bMpAMK5QQ8y6qyGDgk1NVGX6hUpaw4p9Ut5Dzo7LGTvf94weKPQHGA2KfbUjPUq3zWuvgCoAbmSc7Rj7jR",
  "key36": "1gN5Fpaic3rvZFTQ2nwmknBErFKTUwgDUh682RfhyLwMMDDkTM3nn32bU1QrhiS7sA7WE4CN9Npt1M1SqJrncC7",
  "key37": "4uVURexbhiSv6AaK3boHx44ZstsXryyzRarK2XwCBFUNbU6wphsgBcj74Q3zBdtdwh5EY5ecD2SNhcPqdm7WVxMd",
  "key38": "3YQ31dBVxGrpYg9GUmR5iRZf9QhvTuYE7MPuFvU2hWsbf3dYFa8kMKVGCFC6LJ8DJoTxeDP5z2TEbL6dkMa2MBND",
  "key39": "5QJ4aXbeSH13KtYEZCdovBNeRur9qXKNzBSmSKSJhXQMFagsYv6FxFQkeJ7wWbsg6gfyEpUHbYkJzDVSpWgLQXm3",
  "key40": "3yAKAa7R6H7RsLWsiFcyZmP9BrrztRLNcSTmGgKufod2dtDSYd7kEN3qsFBAdngvgTqTcVjRnKRVya2fPhRkWJZP",
  "key41": "3wxn5n8JQv6A3x9NAqkTD9o54ehEfQdocapkSvRJCqXgijS6EEZ7Gfqa64QRkeKJi7oKyVJj2RdPCowC4p5TxfPf",
  "key42": "2KZGx6HAKMkpvw3k4RkVbtwhEEENeLjbks8eURy6ggMoQ3irq9iD4QctHt7fkbRtbrrhCMLUQpZc8LtLUFujyAXW",
  "key43": "3GiVMwtfyp6ASTia4YNToibFt1RbFm1EqyhcQAk7FGb2e4ajC971eB5h486hYk38suia2RAAAGobjqptYwV8ykHD",
  "key44": "4Xcvvzt2AEWe9A2M78ZAWNCd8ybrSTiM2i22Ut8enphoaJ8SERTvrpgP7HmFzkwk9WCcLKTXqcwNDqt2phkWgcN2",
  "key45": "4PQwLgEnfAcqPuDRR8viEMvsc9yCyWtRKB1BXtEP7aTUrpopgqyjHXpNtuLQ5Nxi4vSqiWvUeWxK7N4aZ3J5Fvz2",
  "key46": "5t5cu1vGuv5FiMXP6TBM3muGY4E2iqA6y2SMD7sw6Na8dkgS3pgddCPbGFULh5Ce7vthWKiMzWwWasFydzCPUFAM"
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
