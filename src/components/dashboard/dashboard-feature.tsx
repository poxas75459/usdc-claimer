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
    "2Hxu5TmReSWrMXZ2b5VYY6sAShn5dyWRoLg4Mj6ReB2JrQq6Jrij4d6cRcDoF2zj2q89Ay1fyTGNNXGxHMWR7oH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qPaoB153xR7pNweSLdyv6T2bnFxHtQvopB56mnYC1Ef7EY1GfTDPgjX8dATjxRCgkkNDFp2K13yNtZURMeHhTwf",
  "key1": "5fMJfuKirxi72GgvX65zSZdvkNk38R7eUi1XPdAZxAS7FuaN4m78k49rvym826miJYDSVEeozMNu656fFmx6AXuT",
  "key2": "3vuqDCAbgpLdPu72wigZt5ef28PurVmLrGedBcreUAZqQYchyi3Pqh3mxXCnBYkEwWWq9fxFpszFqSLCzjxJd87N",
  "key3": "5GxynT5HFZDY1x3o19WWaxoPgQM8yHhwweMTBh5ep8qPoXtuGK7EVbVuDqX3ziKft5ZNpN7bVJR4w5bUWQZv1WKz",
  "key4": "4cbKg6uo2spC2VkcUuuCVdnvhWUDJ2pYoy1eUyQMgNdvPMKPwRCe5fxn4uP2T9e9yHfLycFEicR9ALYkwg7AFCp",
  "key5": "QQ3MgBxxLd72n578CbyLTweFBcdRP5PRNZgqQFpcMMFsrvqihFTS6iQuctjPqEvapQTWhhGnVReVxjJ1CNXcQ1e",
  "key6": "5GUZdjPYW8edNsooiskCzRYARTpKaDJnRtJs9F1MykWuS54xrryyA9uA4ffhmXRocsMvtKSDFeBVwsXMXxqsj7FW",
  "key7": "4h283H97MXvbeMz66Bp68Hc4NFZFoyaSmvRca2RdzCcZyaNcNALgVP6eoq2w67paGbikvPDxGqPy6kwz6df2TVRe",
  "key8": "4UgzH9BGMCG7WVViYYducwtSSLBrQSVB2rkiNS9oPFJnAvoxtXztUP1Mm9fdV3ukK5voH3CXiVBzL2AZ4vB5mgoK",
  "key9": "5mh46FS68diiPKDohYNUwJbwjpZnXzJvac3e5PuZ1hRr64FaaKfJHWhyw17LrPHxbEtoydPEybX1RNAeoa3SwmLq",
  "key10": "5Lk119iUuVtiM4pcGMG42YTDtCBPhqME1hxBcoLLsiGPwAqRdLLBQZmm4esM9b4mbMQ9VzXPZxq6gGhNXk6sEu9B",
  "key11": "5C8e76XS4iAB6PeT2MureSVvXzSpaDuwBgGBmanxj9frnRWdirHXcQEBzqpLMcNRcPWZNTSrkP7aAQ4WKGmqwFyP",
  "key12": "2GDEH83ffZZzRzGh96wiGWH8pkM9RwjZW1PEZ7xvWgcXudx9bNnxK3gRmim9jFbbPVKxkRSjcDrM78ekf5HwwNGq",
  "key13": "1orsUZzkooRT9byZ8V3PKsFFoGr1s821ycrPoVeg38wuYBrav9ALxaJJ1tynyv6P7sJ2o75u2uiBLJaVATMHg3c",
  "key14": "4ZFxwzKEMF9WewJZhx3GQvhEn7yj6TiGAAJWeXK314sauKFKDV7Yir5UacKBkXhPt82LCwwr5daXb58e9MRHUcyK",
  "key15": "3Fch9Lhyo8Hc4d1MbDoZ5se33PEzSpRjahUz2WYs9VTPox81C6A5XL6fCD9nzVwhZL29c8UFkTEuV28Y7kr5R1H4",
  "key16": "4ryLY6Ff2DfX8BAtsDuthesBxafz1emfFh56iAYp9N1toDALcAwLQYTuHpNPjob4PVf1ynJN1x8DkNLVvKLBgLrn",
  "key17": "5JXN1X45LJdYLFMZB1x3H42Y62qPD4n8pU6cEGrHHJY29a3g6156Y94kuCHwhr5jk16xwt2hm1CVEK9f3LtaNndH",
  "key18": "4FgJbjNSTwA95W8Ydj3rHUg9fpfmrUgZ1Paq31haFP23pPKqKD77dXG5T9zYQ3EcaPoLJUYTuw751uZsqpFgdT9g",
  "key19": "LdyeQR1LTGbQauAfvfh8qZBf3q6Bt8UtKu5ZQXogpyPp2nossYEwgB4ti7MxDpUPfxgggiE7uDmqkRzdCHvG7dS",
  "key20": "52p4a6t5XweLE1biPfFuX6Qcf6hUY3WMN2SyhV5bRP8bkt9QHT3mSZkxqbX1e1DXFqb3R2HVm9B8711eDoYUeS6W",
  "key21": "3rDjCP3sAwsBeWu8pSAGWRY44LhKUNDVaFcvqE5XuUBQHUeTVyKGHp9irh9vP3Gy5xK2drLKJsbVMEU4zHBVvfDm",
  "key22": "4sKVZ1NhkBKbdysHCnfPyWYBSDP5drTdVRNGvM6hRMLiA4ienSHqn1DPAfadefjQMDQQqBvLBoWWY13SWmB1jxQ6",
  "key23": "3ct5yUjHpGUf75gSY2dk5kUkkm6ejSwVSVoXH5poDzbGrx46mmbuT3Poa7QsnYnLXdFb7dPRHZyJ5zhVmg7jJzDA",
  "key24": "PhWtpM8VRFi3wtnUZi6javvgLjQEYwZkTUkRWb4LgsDxjJk175RDXwMY4XzHoMoP2tL2fucUrsQ7mNwhSzpZ8Ur",
  "key25": "3XNqgzNafT6jX2zvR9jhy9RxaB4zLytHgxzzuBDVZTLKQfvWzBUyTppZJ8x8JebeYj7ZkEg4vi2464FJwCgdEAcX",
  "key26": "2XkbXv6xipG9ciojdufWV5438owb9UrC4cGwbvEA6Jd8KVLc9uF1mU6KNqNunMpBbnrbgmYbdwRjEMeAMxFwnrDF",
  "key27": "2wNWW1f3JZkmqjY3gCTjavXhMvueUuzM47Zs5kwpm9gyKz8NSifeRJRLHrB7BCN7fAczswUqnpQW5UYcmJgWocS8",
  "key28": "64Z8enzfg46ZotDqYNXQuxufoYs8b9EawgJ33TtwZmQiGLx54f5iA2HBkrbpPKVztDhUnS22TuQsufGg5sehtLLZ",
  "key29": "3gqz6YZ3xvgrTGAgR4o1CaiQKiydbjGuJfqXUjCEyHixLFDQy2AtEkKZuVYWN8a69wX1jXnnhc4eHS6b7Dw5vBcY",
  "key30": "3Z9PABzoLXLDqmtA8zkHp6jg4X8Di1DpkWkv9vNctxD8bNUrW9FJQk71ABbk4zgs8zMSAQV8rGhKZpLsxs9Tt6Zf",
  "key31": "3kh31ak1reYTcAnMRik7Sk5LT29nNvjqpXHu4eP77VjqYTtaPJ7rB4Bp8pAoqR7Pib29ypAwrMxLxN9KAnMkkNt8",
  "key32": "5FcMiBrtaRhiULZ7yvB4nPj9xn8am2TsZi57faUr7NDzfatzWCquXcPTQ6o1JstTjm82mbcpfBCbChUvqVAhDYda",
  "key33": "67i4PJFhMfhTLpq57f9jo1F9duUGrd1FC3Nq44thfbQSesbqrwn1tYKdB1PMwcRKiBj81MWKkhenSmNMR6Hx22rj",
  "key34": "s3aR2A5CEroXXPzL9FGSw7sA5es98NT1j9UQsKeWde48wCp3XfRKK9nN2jEeAjjpufnKzRAqzb6G1sxybVzyAP3",
  "key35": "5RWyGV7ZBweWP5ji7AAc49La6Csmxbhko743vdQabM6a1P3EYvDtPqeztvxaHoEwRRhgeB53PYKGxy3PaY2ZAdH3",
  "key36": "4HBUkVMm8wBMcT1CtJGWruo8zYzST3hruxgYCkHzFdgfUpbPE6xzhSiT8bqRg7uJSQZjsVPK2sSFvSxtgTkURsg1",
  "key37": "G6D958jjRYrKrRR1KcVg4UyCD4NisSpf649DiLLKSFcdssz7xTSJfMzkuKse4164gZiWiRHwJJkDTeuwz913qNv",
  "key38": "66xisxrScETbSmemYAEYZZ7ZcjwiRPfw1bhfnMWJVbAkLHrwdjtYY5epjcqjq1eq1nqDZmfje3PzYpp26V9m57Bm",
  "key39": "2q1nrUYcFKUMZcZZ6RNVeSpei16mDTdBADS99S23oGFp7CZ3UXTLbJvnbRpJ9SSNo1husGFeMxKScCxcNvSYRRjG",
  "key40": "5uC467iSgHiYeyXrDW4zn2nyaN28PckzpfivtCDFHJr9dWk54pfhtJannTAthNvLgyec6MKQKUM3NXDT4kFSEs1i",
  "key41": "25UjW2BqM2exX8ha8KLxdbCx1DC9RvrdX8F71saYmje6wLUEHA5euCvQNTJS2u43MgMVdMKbWLF771639jfLDMqY"
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
