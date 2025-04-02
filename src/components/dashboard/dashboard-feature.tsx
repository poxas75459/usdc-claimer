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
    "Cns7BTvXiR5zLchjKagonozhVT4SSU8WSmJfTfUhpqhmsZCkpsZpuxiXfaTzRGbrJFwL7cTvkyXwq7bDXNvYobz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36eTyzjuPuMShB6rj9jwFMG1MaDXPdnrZwi3u427korvQSA1rwow7LKJPEai9sBUfoC1L2fXzKb8FMvdF91b5K27",
  "key1": "5HdCZo7oecMmJkhJJoAcSrHkkvg3X7arKo6GQUvDiovHNNC7aGbpKHfbiydxek1oZP8WqR8tv2a62aWHVPrykiTi",
  "key2": "4g65Km4ByJcYfAsgqDwjEe6SKSUNht9EuQuTiS4EFDd7LUdGApDhw4jZhppApkUSjgSGRe2UfEr9SJLdKZPrMzTW",
  "key3": "3GuKsCLM2PceR7vkLQw5REJTUo3PZZutB6vjjPVPj5Ph8ppbFYURoVnm4nDdhsSFchc8ka3osBV9ifo6RpPDvn9d",
  "key4": "o5T6AkKpTvanqQSdeVAKFkfdjZgwrWsXeeSJ16BTHWsknZLJKovmCcN3WfAHSKTcdFL5NEP1wDmy28SKE3KDnSg",
  "key5": "2wmfe91cFkYNqa1LT9c8q8ChCgfC5ihYV4F926LAUVDYNTN8NmFHiRzVdsXm6xGfp1gzKXGpC9HHV8meyV7JxP9s",
  "key6": "5HRRkLTdLQMBr37QKSf3fu9rfyyEVH7dpweuhETkeyLJSr6ncbmBHJCo97djbw6qqUmD3fXcL2XTBf4jqTLP6cgz",
  "key7": "38uCNS9tKWB4r9Q9ebKZEYJ8nbhTe67p187FbGuDGgnDbzAzQgSJWkv19FTTUz1H2nFhQ1FDvc4MtviVFPnZFaiE",
  "key8": "3Yv3DRozdpqYiLwoKCCpzpQBq7rfS2dVXn2HxZC4fDNgNwijCSEyjcLLJ92UUGYW62VfxTEUnZ2hmzm1d2nFMNKY",
  "key9": "TajoHNXSe3793YRHYCAN9YFzb1RSgT4ddrdyDZonm1yRk86vB6GXva8XUny3AUr1EsnmyyYz8ffCdQHybbLdCjP",
  "key10": "n4NbgnFQJRyVUuWVm2zxUhoQwskbT43MnKVbE7v6jZcHBF74HcbuVA3Ty2kfb91BXQW8ydei2zvURbzNEGYEm1r",
  "key11": "42G77i2smXdSCZYywCYHYUXJkfkxQS51emv7Fn2cMLxpkkGiiKWXa4ZBtWDhQcmm4Pvp6tAQcsjifPcTbv4sKoa6",
  "key12": "3Ym9rjqGXm6kpSCh79HT2yzcNgv1BULFDSbQZk25L2amYNN3NmTAQjTivKFTyyuuN1Wsi1jKDLxK6tU1piRvFJK9",
  "key13": "67ESmwzFe8bNkK5VSUgwQrbHFHhoburG6ps9ZzFke7StmqCeQYStJqo6f8gg5i9pNHHVEy9gJQAPaLhsrVds1ww8",
  "key14": "3h6KTEtpMMQJEehyBS4ekU8tsyK9TZzeEVpVpQD7mLXkti32RNgFGpmsiT2TCpRWG78aXH66AQZxumxyoSUc4EZr",
  "key15": "3rS8HdPsqmyj2BBN2m8DAtCwT3tyzWYRqEJy6Cw64zraSxNpYgTtvZ8ouwtYvVpJghvpdPSysi9LMQddox5USHoN",
  "key16": "ESS2NrSeozFspNGH2PUF96VbEw8shmLu8SumxdtUNhwqJZzb5NrGc7RehBXD11aJ8TjkjAuiHAdfAjSF5VL8B7T",
  "key17": "2Jk3siVfRNgrG4KVExW5TdNru3QWpnr9dqvaXebaeL9ajcwJFUCR6kJjbVDVtKMs1rrHStJuusTeaXJq3ZFDykkL",
  "key18": "4xu8G5bRNhzkQ1ijhSzDt8AybjiJfumThvsfRwHmzHKW1xFw1h4XNs6UVvXmZFgxHN9wEmXkAPCsxEdztEeHgySL",
  "key19": "4ndvg7422VravAFvhcS1iS61cYZoJQVaPLi9GkmBopkEEosSqigjsVnhUZY3qcfUrneELvWdsJJFZo87wXvdMDuo",
  "key20": "23MFZDyjCzhNcBbEzfcfBeyJqqqerE3WZ581V7U14p43eMcHGg2kfw2PigBCx3g8bTN79w5u94qMUgFDAJPGMkGm",
  "key21": "3aYzYq8E13aEiqEAp1VhReFmiwdw19nyuHi1Znmm6o4cXN9ofSnWxhPsRUDbfKBbBa4rBZWifwUfzYec7pkg7Xd2",
  "key22": "2vapozzGdNzM4CzVo3od4Yz9s59zPd8g6WidS8FGiz8YfpQpQxbXf8WPd3pqfzJJnARcfpvoeS9eTywM1MucC1NT",
  "key23": "33m48zAEZhB9ak8nYLmeXg8DGcGS2WPydwqyArwkA5CeSWTvGRFudckiW8DogjEzu1PZmAZbYYF1d1oTiVyeRmHD",
  "key24": "YwJ2qWuCP53uDDvbggR26YTw6YqQiE4w5cdx9zJCei5LMPjb2T1KeB2QXSKA1xxf6WKVKa8ArHkKQYmztJkwv9A",
  "key25": "29iMuH17VqBc59Cz29jtkiEriFUKiTfu3T3V7Ur6vSmB3ckJgNBZDUy5Augkok62LrvMGgWc2Aiqb3AYbbtuaEye",
  "key26": "39D8kd2UpDf9QbiWDh3qTbeUdxSMDM3qJ7MaKf1r9zL8qjVtDFyuAnrnfBdUgSA19Q5BmVoHX3GEVfYusijV4TK3",
  "key27": "42A2riWqdHDd8p7eGitU7ZPCpGnm5osSp3mDgZLzZm1sBVj4r8KRAEqZyLzgQoReSL5qhazkPu9jtMe1MMhjYmcq",
  "key28": "QYSS72VwqoSUZTykprUFSpBJtP69j9WFYbYHb1k7NzohCcCzoZrFb8V8q4WEtNgaysU6fmN2k5pih8HjdbVyNVJ",
  "key29": "552ydgpFRpNd97kqaA7AmzGrn8pafnkk6XtHFY227H4p6TM1binm8SdGp9drH1cBUynpUza5XDFfxaavNpLDWo4n",
  "key30": "2gJndoQ41VFBRsNr9pCLonwS1ShViLiHKXitR37zu4dwcc4gtyqxG4FZmjYEe3jy4aZMzdm53nDGshSZY44AAzmp",
  "key31": "57uFsRkb78jCqUbVanmzUADwNC4fi7Hud7tmy6izyU8hJ7YBNkiahiyfNZxMwFWD8JUH73MzqX47WKzShue7JZWy",
  "key32": "3KgBRm268bbzpvmgz8x1Wh2qELPEUZ4R2Wf76MfQwrtRcmSEkfMPc7zvoBH66yPWehaQhNPiKSu4k8dDTSbgf3Dy",
  "key33": "5PVcehYPBEsCvgUHrdBrsTZgsMj6wJjEy8y3TyMPiFjZqNDH6zgXq8tjNJqDFARdFcH3TSesXLwDr4tUEDMdPXr7",
  "key34": "XHGJes82G9LfMesshV1d6f4Mi59PU3mpKpPF5tzBcLpARhkc62hgckNL254jGcwkHPhTiPHMXmLjdueTSVWq68y",
  "key35": "TZ9Nuw7GwQnaqvCYsZKWUJnZM2Dc8SoC9QQ5cXxjCYiD68fdDb5A3Zj6yHWLPKaz9waZjoh6gB1cbBUShTQBEnm",
  "key36": "3CLm7GdHAoUGyyA3comk5MJN5sQZNGZfNR7SDgfsbjhkwdYX1HmwAKzgfey8zMcxvR6ie3EXqc4nZs8YgZab61Vk",
  "key37": "3VanmuPRJcDovEUzUXSbLxoQ3LiWYLjSTBWsRBnjScQE4eh6W6XzJ3xpLfbYT9UU1AnZ9L1kjsM4u3CQA6GkyKmt",
  "key38": "4LvYe6dCYJybyoPtGhCBnfyp4N5LZXQm5jhy4UJD9Ce6f7Zg1Co1UdNRpN4PSBZfxdXTCgjQs1Xvnq7hLBLFWceD",
  "key39": "5nKCPaCLsreyfiT9P1VipzAQQ3FwL52PLz1umhdB1bwyttaSHEpV2PYCrsa9uoXEkweP81C22yphHk4ajHiRsZh7",
  "key40": "5GWzpPsopJjwQpfRavePe4ANUFf2j1zSWYJY7MQPPStcAeKDU7bYPqKCYbgb29KFx13VQzR6Ur1ULaGvqpCgvZCr",
  "key41": "5BmXVrpoLveRqteqmN1Et5DWAaeGeBnU5X1wNxdSXQvKEpTic74wquFbbDR7CFy2LyPJvQ8DMVv3wL1rRXHdbEFM",
  "key42": "2iGz3rND3TbegENzDRhwVTdoJHQFNEnb5dXeubDF8UEmL9bS2JT4BDcqkxYSY8m6fGSiDZJYwMovHSHSaCwUi5Qt",
  "key43": "2NizuckV5iDy7jRZQzytQJXz877HCZSPwn72bR8yUXoXqMFxjhNLAu6LwYh5MWsmA78J9vSjvKuKJ8tCB7eVm57k",
  "key44": "3GLbtFCYZgCTFnupRbmJC5MRHNT7Ceft2VrEbd31qP1PtHvbfZm8FJz7s2GGD7wGXvFiGSQ6kA52Y5UEfp7H6AoQ",
  "key45": "516BLAVdrb1eGT16jA8M2RAKnqAEHQ42GiwugZjDjomLL4FcqCC1Qx9PNAETBdX2FXgyj99TVMMknzRHqwNFmCkA",
  "key46": "58hovA3H68SUXeUHrMRYHEuyvTNEhvL38ZH1dYPwzvPj4QLzNzvFFL8yCx3vAceJ67TWqNBK1SFP5WLPUMrvFQSP",
  "key47": "5EPzGH5LrEJZYppQrWUxbe7N8H5T67uXGRXWD3bq3uvdVFPhbgEvPzKp7mrEGS1U29ztx8MReZxRdrpMXtELRqhc",
  "key48": "2g9PTfQN8BWSXm1SHkQ9nywT7pv5P3CD7BYDrCocp1HEpswB8gGymM97UYDbCwwpNPW5QAWZJGCj9C56hfkMrgkv",
  "key49": "67XzBDnSQ9khZAJH35eY4NVXXhf4HaHWy5VUvXUL9wLb8yMY5gincwaccuTwrbXrd6gPipbHqyecDjRTLHq65adE"
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
