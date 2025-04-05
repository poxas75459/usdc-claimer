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
    "5oQKYg54yJvKmeKPkdbfopquAWsqnzikKvprnjjZT1pgdjtgQ7RSKppGA3SBnK91RNBpStqmomE2qbn6eTBkZWAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vojCtq92zSpphYF4sVaScrTTR3wWqhFnoBw5KBCGywJ2ScpEjdzpu7W2PdsL4gtuPUPSucwcyMCBFNbrmuq7dZx",
  "key1": "4eHBgxdoLSujhDkkv9asp4fQd76iJ1EVUQcyMizwuSCxe8SiUREwmwwGwGKygCVoV2gkj4KSQ8u7MLsyfc8qY2Qy",
  "key2": "5UKHf9NuHDFPwY5uUyeKAMmb1djcddDW61313wjkpGQSSok6WZWmnwBP1yCUeuEZsbGHENU3We2YTcThyjAmwZ28",
  "key3": "2XfJGL5r3WimkFYkbLbMF8Nu1WRFgFxGUvoFJz56DD4fxohS8Ap5MEMEGV2La8b54oFsY34bsUnKsb4zBCY1iCrL",
  "key4": "2nGtVM1xuuU6cWUVoc9BcRgBgKzW6aJscqT3C9Nzf2TVR3BqMxSVX8Mx7XUMHarRhDo9uudF552N1SRZCA1PYJ8K",
  "key5": "4u94dVs2RUUSPWYfALx3UGoFpsnKxmmNhH59XeyfwE1QarQY3KBXQAYZwmdnQRr1iP1q97mnA3wUvJTEXz1Pmqbp",
  "key6": "avhhFD3PdoEyWExVBpmFxUVgugFpybfqWvFSd2hNRkVvGSEVV9q38uKvZ5FLKqxho92Hjp6GTWmvqjdXGmFG6AV",
  "key7": "5NqMDthS6uW8gC9hkWqUtn9YridHTmK6KcfGyeYsv11FmeVwi1EVBggB8bLT1SNsuSNid8Y1yTkkXdRDTiPaaRoS",
  "key8": "3KrPybRQWHyqHjYTdnCqY5odhrSxAEyFxQGJXyqTT6Q4cs84X5kwTSyfz8kcgkHfSpdLbWRiBjVTByGMhMrf9GCK",
  "key9": "2AwJ43ZaBinJvJ4mnbFkEi4b4EJfSvxPyP1vqrpvUZhvUeW8DL8qFrg5FB5ZsCYxeihuTrUnbH1QYKWBEJ6gtJGA",
  "key10": "2eANGsV2N4cYj5RSatyvTFeYJWpEMeVgMTSkX1XtWEPzDwzKAwLcRezwiFJMXXBRzx8pjGFgntXPxShjbruvL2w3",
  "key11": "45Wmdkzu7YdgYRsKy4nzbuP64scCpLNoWNojAjNqLqbXDcxwMMJKZfDMPgjxwW95ooVtfTLnBSssoTMhHu7o96Cj",
  "key12": "5SSaenS44mDNRpncH9xGtKE4UD3TPJzpM8ym1574kBiwjr3Y79u32GZtNxCAvcixpQKbz4djieCVgHPDSmBsAqcC",
  "key13": "4KtrdAmRDXNQgushYmvHJqXSEmjRTtfm9r8r544UVtUTdg3KhmTZmJ7prV3RqzjNSRnj7XPCjxYWQZDXCVR9etZe",
  "key14": "5NTkDFmuQoDYfWuwLHzthVvDHc2sBKqJ6jrUWFe8ySutxAWm5To3yXiGv8P1nhxHsAAsZzDQKan33H29GuoAd9eY",
  "key15": "SddY1rZ2ygM2HD37C5sDKME82JYseu2SLABew5eqUHrEN39a28UDSMsW8aSHD8ALCoBKyD4baTxvQFaHGhNFYBa",
  "key16": "3qBNQQaC2GfTYbaqTDPp4S2hyM6utJRyjEfANF4zP8CtSGvFd7JLoqY2SXfoL9udSxsPRrtj55ZQtyU27Gi1Uyn5",
  "key17": "33RnhexBTq5mKtkCyxose4pDCyKNwdZHzENpuFcLcJVzJE6YfsMkvXgeNpHTuEe4yZdcRsdtt1voyZPqdA1sMt13",
  "key18": "dZ2RPecmgx6B12yqEJk1zagVPGi9NFFGbLgzzhufYZHgTemjirrCxEquNAx14oRUi9A3nS7G6hHW2ifTfuoukff",
  "key19": "64UDmwK5AqQ821mamEa5Le1MZbPwwMt5Zsd48sS1TMTPqKZnCpaMBiFLRK2oT5FXrbWLB1DxuQkHhSBC4Gbi6gJY",
  "key20": "34fMGyDZAK1xy3io4mY4w5mgaisXMpERddan36wzbZeZbtwrS6d5aYVrgVXyj9ybQ6G9s6nDw2YbUpAqb76PHWW7",
  "key21": "3JyTbiyA964B9wtEsPBZb6wTfEMCLmj268MXHj1C3sMa3wrpjPqwD4wM5KDj1wwuF8p9rJ2JehkpJsEYgf2gpvmG",
  "key22": "ivytuPewKQWpmiFjeYV49pfGi1uWXeLT3VLXj9rFQcVASWbztEWpDia8icdJ3trd5GssUdyGMVT52M9xCBEMXgX",
  "key23": "56iDCN5Rtz5UWWvasPqPGtAsTh3o2NaK2TdPEStDSek6CWTgDeUeCD5Md3JQJJXy5LJA5nxvsy9mruB1ngpJ5hXT",
  "key24": "5HDU61JpZCDNWAovr8ysTdo67nVBrQftJXeGNAKkapjG9jSUx2hjXV3yiLtDNieMcvuECSJaik3mNqx6BvjbdDWd",
  "key25": "2SiKukxfwJ5bXidwbVVQA7vCmrMLA88ryvh77BetGKAyU3E7waQDkWGDzcanyX5jqCSNJa3GU6kz1eBU8TJqp5ng",
  "key26": "3ER6vtNd79GBwMDb18niiwFHPBg7B7YuKL6bejfFmApf6LjFN8LFqtmUSSPDLjS3u13s7LHDnuwVfM1w6iKxLr48",
  "key27": "5vHQSro3C9eiCfogoQZw5fbFmz1ZkZTpjMaiA56Cb7RKJrotxNmpMcNwjb4SfvsMPvmrzVnLLxxSk66CFYSaHbHp",
  "key28": "61Vj6QCzBESo8QV9TFHXMR2nVBSS541mvUEGGvj49ipqms6TiqxFCGFZzQwqijhTeGGrQm5EPELxJiNZEzBXjuMS",
  "key29": "26UCJf7htRUimdsFJ6inDvKiHoaKFfYavbkJu5Pm2XnkAdpgH8i4m3ZFFE9NMcr1kEk5u1QAev2Mx8apydCgLwxf",
  "key30": "5XzuH5GTH2Wid2HSAh58qPN6qccu6mxSVejcBQXVuDtzMoXZWuVCbcgGYxfaowYzLZQDRhRvvFY7FyGxW6MyDFfv",
  "key31": "2ErTEshSk7CSitGKfyAHa8XR9qDWvnqSm68ztq4oL5UhojatMinJdtnydRQyPpZPWmsgCPfeHnrLstgmKtrVx4kd",
  "key32": "eZ3jpNjC4yiaNuNoJwQVFAoW3doot8vNFD5ek3QDShZ74VNRTb6fawjQXwz3GoGBPLiGKS4S43HDRPYobGj7Lso",
  "key33": "BGRYsBYzYShNhpquGST8Ha3G3pV9gScnb9GYNRvYXeFkDMLyH87giGphv2Zg1EpVrWtaTus5zp5uYQwvRbJHDjB",
  "key34": "37eKEtFByCgPyijNA4Tp8gPnKfJuFfQCxPJ4LFiUUmq34xEUuXoRyWrztKfFeB3kX7SSPVD4SuPStgJ3HLA8UT6W",
  "key35": "4K8z4CLDMC68vcStUQ6VHjn7D3LdP9Yow2tREjYn8q8zTBp5rgB7NVxkw8CdEkx3Z1XmFBFnXh8uJy2Fr3ZNF2d7",
  "key36": "5ohyq4xXJZz3eY5K8VH4TWvMEvvatp4g1mBWtkTpjZbSpWy9ZQEEK9w8LrBa8PB4E66m6Gk3WzqaKVR864XrZM2b",
  "key37": "5MdGCC4dkPERidpmNVFDVZiZoVQ4afDmpnkphS7SkfpkQQUVeEbHPBiiTZnG2E31NF9sLXD83DPUtz8hR1w7oSZ9",
  "key38": "5VfqrwQ9BSAfyg57fzArzRfiA91nvZdbHrkRGE1URz86oYuy7i5Y8TtpG9JCg7qQsZEyqRvTyhWYcyyjcHUNrqbE",
  "key39": "356D1VBfa8TmzGQqTYndDdSsLk4FHYX2WRLiJZQq6StpaSYjQBFgnLyFNySCd68FdMwhmmVxQo2saxDW2kgaq9G1",
  "key40": "43GAjXBphTrepwQtJq3SSBYv3p8uADSfMJVcv9ErngG953NLiJNyXStDnFF4EnTFS47otLKknLmZ3YNE6Xi74XUs",
  "key41": "66MVZAuPc2A6RURffohcPwMfCK7wpYW4SkxqdDDQjbVFusrjkvbHfZQAsJk79sGJrGzhMtK9x5mMhJoQLRwRhbWL",
  "key42": "3fqdEFWSkR4h2kM2bosYEAjMqwRqgQs4kUr6eCsUj7UWahNHsf9KCjnhJm16rvez4SkbAYNYkaGt395srq4a9j3T",
  "key43": "5A2D1p5tjzcRn7cfRGU1TRNBdya4pBqpz7MACJvkD2Pg77Gx4RdxLVfhY9Nnun9oUFTbE8KPeH8pUj8roykdYoo3",
  "key44": "3kuBvkvnXDayz1zWEjPoZjr19XJfxjUNGVmaNg3FUQvkDMLR4hiR4dPeNUgf9LApUxJtYeyQtHsPLnGxNmLZu614"
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
