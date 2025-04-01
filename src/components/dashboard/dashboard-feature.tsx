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
    "i8x7UhkGTaQPixoBCgiVkqjPbasqLYAXjQfotFpPiyXu4mjkS8f8i1jUQVdVEr9G35JAdP8rcERs2xzjbpJ53TP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RE3H7wtty4mJxMSHEbaNNX3nx4rw96FXLdMN3qfGdC5FtpAjNBUmems7d6qysBuYmzArpr8W7xfWHJ18Vk7ReBR",
  "key1": "5EoTg672ZxBvqCXd9XmSkBCGCU7GuGVRbwstF7hMUAaLLgTmvDryjR4LopUv9zZkS4b5ojf9qPKiDb8Fx57ECXK5",
  "key2": "iz4qCNXCnBBY1XUyPtMmUCHk7JAPcDRZW8oghTUKb7AG8rVxamLEAmDzxyQC2zDfGWwVWwjfjj58i7oQVpzKEhv",
  "key3": "3FrZr34fpYWkAhPK8RQYMekeCAomKXKtWmST5Kgdr9Aba8bscuiUtAxy7mtZSYwtXuCDHnoZFvaGWXFX6tMYWb4u",
  "key4": "5WnpK9BjBzU6UcCKRzkEt9wv6c6YvSyV1q96dutDe3m3rRfmmjMoq9py8VMZW332Xp2Fc8X1PPDhvRnsnZ5Tq8Kh",
  "key5": "2aqUj4QG3LMp9skbpbTeiv4Rynpx8xoT9YQ5WKtPMmRRdFRvXWPHWYC2U79Zk6mB8fNd7q4cbXPUJeahzT2iM65w",
  "key6": "5Fja8buXKtnLvyrjNkc6j2u6mZSgUgBvw3zVfCvHuf25Pw6ofvHUGhDb3NNW34BkLcu2gYtgxXdAFcm8uqb8tuHU",
  "key7": "9BmmpjG2KQ6Zf22noHmm9dBV8pjAWsSg98WhyhefNJh3wN7hGPcXrHPy7gd1yezANJoaWAiTLn9UuU4APNznRB4",
  "key8": "4vLya82g6Qp8zADA8HU4GERaKtAJxc6zhJBxzbKourgpwuWj4wto5bKfg75dCkeJWNA4mXfQD6wHZ9s8WYTr4YXF",
  "key9": "gdYKPf5RR77kFwK3YSCzJmj3qz1sCy7aVS7xqzt91buuuLYvE5u2QR3EoZ3fPmNWFk9JFUNc2PWVMnC3xCAeWcp",
  "key10": "5Bvryv8yqvJULPdQSPtzg6AiHLSKu2ucjrF831VQvikg6LzY7K46sVjGnaVdnPtV9hFnxCbYbKmYvPMV52C8QHh2",
  "key11": "5ZUAsYA6g5fFtcQE1Ewqf86154HzaVyYi8rQ7cxRn7w3NrVWwLLbFc3LMbLCdPQfFFg7Sm6dumyhWh6ahFrayhRW",
  "key12": "4MVk2PhistE7NKAJRShztR3LjxEuuMD4DyvFmcbVad6ZdHvqk5S8uZpa9V8UgVEb7aAvUhRfA6UavAaUtsFu57nQ",
  "key13": "4bKyuKTLGjEQH1b63E9hmVi3ETLZ34GpGmGeZBZ3Ex9kyR1rg6sgZy5nSCdyJ1s1h1wqqiVxf8VtDqC3oo8oX8HG",
  "key14": "GZYWuhymHRiPw9wBncof3d3KbmyDczHDtej4cfkHjinENAWGwC5tqqMfxEAn3rahYbn5w6Pi84KkiyX8XeFSTXF",
  "key15": "4w25aHQwyt9R5j2AjW1QHcWXeyudrXiTEyycLXuty9N8XpmnCZQNYUGi7NquMJr6pYfayUmWkHrWN3CGWXTbnt7S",
  "key16": "5EBvQpyhQRPmeSGxGB8S9ZUWqY1d2Znfo1Q48B9uSZ7oj7f98ZmiqFG2NA3F6AVurirQGhF6NnSQhGT6mUVLrc14",
  "key17": "3uR3tahq6tHReVaxtzmLmrGnb2jEYhBrzPsN2xmSvhLAQ2XyyPAD8aLcuPQW7ZoPB9ZYB7QTd8J5xoBvXESTMqqS",
  "key18": "4CgK7bnT2djqeC5roPujGXXdnGZyMtJFxs2d64Tj1bDwLRKum1FdM4WUn37Ndj8ZbrLMVgR8rBryhcWY66X68qdw",
  "key19": "2HPQzXQ3qPx3tQXsKjttBjDQUDSfCCbwV7Ypr1ucRZnRCyL1rPtdqxNPcQWNGLFfaModijvLMAvdg8id9kAkvr7X",
  "key20": "2KoQiKzME95atiD2STo24URgkuRnumUTAvjQ6pp1K1BFFaA6drpLtwAZgJnfFyfmaFabDDJiY5D5gZwUc4k47nn",
  "key21": "4MadPQKid384CQaRWPe3Fp1SFNRFDRE4fBASFtxYSjQcAFnGbNrqkNTSqSY2Z2Uo51jo3X31yhira9Kd4DVrNY6p",
  "key22": "5WcpixHnqfEq4daVJX8RCv7GMgZ2c6qWBHh8n2ZwnVsfJZgVpSbshdF3xT1TEU9TsxQGgzoRozpD74vWuW5tZCJq",
  "key23": "4LL9TZnfh3XsMoERp23fqhE8Sq8ZL7NtGy393enN3HiShXeiZre9QF8CE2V9f4NmJz76mKhxRqPhy13xYQwdsXmm",
  "key24": "1mqmKCvbe3EXMQmMfxJwiReMLSDr5tnJ1ZXJDmMd6KnUm3TMoSA8vnXz3Z5Y49Yyxn1VxorJkXvCq4agkdFicKT",
  "key25": "7nnQENL8YKpfeFyNNCPx24rW7pj2uxxgrY4oGWVhjtvgqjXToGWsKCsNN1etxzJaLo7Ya1WAgSPPYn8824MMmRP",
  "key26": "4sWRyo7mYArUjgSba3UnZm3erHsVpPZZLv5xHxhnb1cphpAixH1pi6GrbYfs18zS6tbuAFbt8js5nYFR51aa4fHi",
  "key27": "2gMLtZ1SgDe5fVBpgtW5PPfwCb8NgJcfxEi2MJtusyJp7Tqc6RHnah4d5aGufMmrCRxNk3mcyBonb9Lj2rUJ2uR2",
  "key28": "DSkf2mwdm2fni68quzy4cX9PD4CCvW8BK4FcY5a4B6BRkKT8SzDQtUrPzS8EyNCmX1J3ELiyHpdqQ2cpMisYTfk",
  "key29": "2LFGw88z3xkdtnETgtLcw9Qcz2LSnNRte3j6V9hiZuzMoirr2MXLr92KANaKJBEfdHmYrmpXz1XHpaziZsrcvYT4",
  "key30": "34pML1YQAGchEadg4gDCK9t1bsdfCz3gFykmBfLS4Dade5FWPrnmjDCHvciKKKnMQApm37tUcmpaAMXT5ySehYCi",
  "key31": "vSgHjy5gjwKXCJHpCypfVBP8vcXy8Mtkw95kWVmQkCL672jsiQa3TVKdxQLDknMXgHXysRUofsJdDkm9RetZ9Fi",
  "key32": "NvmPcRNhz6JtTnoxANpo7X3VZbUP1UoVeYr9zZP5hFga2zj4sM9Wk5VZ6pHyQhSwCHB5ziEqX5QkwS3PUamU7Nu",
  "key33": "4diXkgPEzVWspRdoexrELeTpnoaHCyB3DqrLxNnrwkm4BZiR45ohR7L9uWMF1hN38FYEwCufwCrQQQkiFKwdq2Wa",
  "key34": "316oFvDMHdnNAKueyCM73UrSPGujEpABx7uJh3SoERBMBGHdsNE5aNAP2y1R4QoaHULYPZNCqsnCuG9wP4U8pcmL",
  "key35": "47pq36mBAc3Xu7biyKLJLueQmDfqeEAyyF5vduRdLRrPMA2U4CkgBUsGFWLZX33tSsvhMEM6urso6DoxFdNjncuh",
  "key36": "52Cpe9S82uJskuH7e1QYAV4JxNfBxWJ8aSa3XfZPgQcGuGfmkBk2wj9MgGkLGsXprqSxiYe3aq118qLpgY31ExP5",
  "key37": "5uLaQEek3p8a1ttxMTQJFiq2f6kz7GzfkGRZUXkKTnmkE41yu5zgtqoSKJvux4ys4m9SSjShiB3qpcNNhSBXtE74",
  "key38": "5Ys8sHpxu6KXxMHj8eLy8qjk8nerwzotj8buRHkZP3KgPgkCSgsemkwx2eEcuXw4iqaoq78saSpUD275E6UHfNxn",
  "key39": "5eCTnZJNs3HTahfzDxMLMnj9epVsZSam7p6mNmTeNdk1VbBi8n1PkPXtntwZfZNmT2uRBNZNTwQu4nDxs3aJpKHL",
  "key40": "3cMCT3ujyPvdPUy36VnWMHwuBmMSE4K1xtCgumvhuAz2zncAjTPtAEnfae2BaDbHPC43szDFjgGHKsPfJQsX6Nka",
  "key41": "4J9vGYWu58uvVtPvW3DTMes5BmURC5KZ4n7hMzgaDbGUScPBD36xTop2sTngww7Tyi768VCwBL8ygY1o2BXEJoFp",
  "key42": "nnLWwyK2ToBMHvmTGghanECimMHAB7c8ReDUagYJe2AHca8xp7BL2VpbtXDqMknq3knz7NzE6skxkDgEEGBzSEA",
  "key43": "5VzBcKxjn5Djewrr8AXKSP1FyUJzRrBE7Ny8JGsdAwAJ5KZHFW5k48uwBkurC6D2rQqHWoxt8PjfGePUuk6mBcTf",
  "key44": "5pRr2FzuDUTmGswr1Ni98RBc9jSEfKGBbMMdotGU2Cwhunnr5gcjcWhaVxsXuJkXtDGEDs7Gi5qJY9nBMfS3NqG4",
  "key45": "RvGd4cyMtvAs1vTGTZ49w5aYo8os1JEzLZN9HWDLxgSLPug6gB43uGU9fyHe3aYojFMHcNceZFbo6EskGZZMYuR",
  "key46": "5esBhg1QQYCdkfFAJkNjX7uY8D1FE25Py2BvW1LAyskWv97GntpM3H2rKMKYHs75JBSJPRUjJpAXSkGEvLFEMYd9",
  "key47": "5r9EPuvzFnS7o2qzT65L3NsjoZXettLtDL7SmGBrYhCoTRBGN8q2AaKVt7RSt6eKt7sfE5GfbbXbpUt3ctoygc8k",
  "key48": "Mak1H346yEXR5W8cdAh7ijCJFB7yNfF5UEvXukeYzKsfVcXisFUU9hqsBwtF2XXy6ibnQM6k4MrwrEA4VVNyKbC"
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
