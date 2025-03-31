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
    "52dgBypKGws3QcRrJpsT94aVZz9KyWqnwrSytniS4GbhgYBwSqUryBc9qw6jTEASRiw5hB6zyX7MVkvkXc7riYLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uY5MtriJYHaiKCTMFFtUEprawYhA5oaTJTBS4HUyqBrm6sodEzjScCNrZR9xhRPo4oe2x7pLgyNgJzXm79RAsdY",
  "key1": "37tvUtriQHvNLnwUN5qvYaKvHWcgLZtCqT1NTdSRR8vucmgjGcAfj5YzoK9uVr9uRpRVoypDyjwr33CGaXvgpvo7",
  "key2": "3kAHbLTkGdFWqCqBkLmfG8mkWFtBxj9PtMq5dfAas8xxMNyhgyKavLDqwKT81wvFTbjm88WgKUowNhGZSSzKrtzY",
  "key3": "fXqWMea8NJhEqi518sGJ1bcsP9Ehv4ATCK6UXCseuJcqSAcH3Cg8xqsjcsGUAAyPYAfPT931mNHzaUJfr1Q18Tg",
  "key4": "4GRThHQraisi7ztQxAE3o5sM2efAsGiBuwjq28c2DP15ypRjmCmHHzacWwy3ovQQfG87MGGoLHmv26gKc9S8JmfR",
  "key5": "2xvvkbmJCwnwm1XhrPb7ugsPzxW7h4tEmE6RMG3yV7w73xNkmxt2RFM8ATfcqnMk2dpYUyFrmvHHpkCHxFTxbPaU",
  "key6": "5EijPwvFCMdEorF47rHTsv76bEEZsdmMtRGRt8mSk7jejAQAgARsh3CcepV41eWNfd3z8DP6Jt3FA89TuLdoqPSc",
  "key7": "65Pufr4VhLakkG88hBYNqVrbJrrzqFn1qAybiLk8oBUCKqW2QAjrNsRNVjngWTc1WUgieWiAFuunrr1BAcmYDTdB",
  "key8": "57mTpJc2aSVzf1ursjDhz44WCruKiitEND7hYTzzHohF84qYuRNWQtvpc2WgRWoc6fDHDAfafPg3Jy2SVPBDV1PX",
  "key9": "2xkz7fubtS9f2pdMGaXTH9sJ9zUCA7SabkTHNQy6fwUNHu2Nm8ZJ1fzKvpjRdK1m5MhSujroDoSHzdRVyNakmHMf",
  "key10": "2GwpYM7CvVXZHB3JLTn1pxb6T9eCmSS3zVbxbGQhG6frk8SGmd6Cohi6VwrGjpQSbUoPK7GQsXFJwvij9P5Bd9Ps",
  "key11": "HDfTDPvco7x6o3oYNg9Tu2iak6YRsdy6HnKJfsgcHX5vcKZ8zymr74hHJYEqrN6i8nK6JoYG9tUbhn96w5g4aQJ",
  "key12": "46Nw5hM9SEkcKd2BfeAhpsguVMxc5VYzJK5TgkU7fFNS2yfFkbY2KKenVPakpey6yvnkG4JHzGWDrZU3YqVfTMgr",
  "key13": "3uA7ThMASm8YogvHnjekh9U6NbciCFQatZc8G8rz73ePhQn6tnWRMS6D4fRjcLezjfzcvnLNVn89xkvboSRrMwAQ",
  "key14": "4Fjq3BGxKpA41ZokvPQGgvPTyDAihZe44ogeQzqjkNcqJt6UBPKZYSK7LwsD5AontQVnpwGiWzu1Tx2N5ZrzFgCx",
  "key15": "5o31chfjZpy9jp6Eqsf9bG7FiH51V5mZHD3hvPGcY9fri7Gid6KuTMzMrk82RvQhqTzxCwoxiAUqtkdSTgQtZV2h",
  "key16": "5GfnENKfWSEYNaivNiWwWGA2vFMqM2inYY5wZpnN4b5pDHcNPSuhQzCnLbk45MMUKDWtJYYAD6DyQtJ8iRKmZWyL",
  "key17": "3DzxpfqznrnDAgry7GFu46LmcGJPtnWmBaZyz2EfswXMDyGjuXnmXNFDr56G9Q4zk91NWmLy8P2xnxvYJfd2ZDJn",
  "key18": "2WDTss3g6VUAkzpztDaxjVhtjYjYo4HTBxZAKvZczinqAWBMu6aDrdWFAKVNozRjmR3u8fgzXvfa9d4ZRrjBVGHL",
  "key19": "5sXuoWsXEpRrLnonSUH4TVUypToBe38PhE6fLk6PctgVDP4j8XenTYXfC3g4Q8Ra49bTcbjFLkXjY6YMLHyC5icJ",
  "key20": "3ogDjkUragtRSwczZPRohfWsaeXRd3RP6n91K6sH5ksxZwCXhfjuUYz4oStrggCADoSUSxP3f9Es5m1fBqNo29ah",
  "key21": "XusnEKeiby4SDHDLuDpwn8YQm5a1hNmxbuuTEF6yKniPuYjfT5N8FnH6usMGA89bLkrhA7z51QGVrY13Vt9Cwur",
  "key22": "2CBJTVHDsvv9SNEzYexDo4mwqjysgnXRVzgNKar1f6Wa9Yqx1hSJ7RWNXGKj91hTg61VTQufbouam79qoRu2TneM",
  "key23": "5Zf5XN81tWzHF9CiAa5YcsoM2JrUHsRD2KJke9rvFWA6VDAZTxKFvcsjcuYXYfbreQLWzhFcpVqnBxDuEbCTpZ3e",
  "key24": "2z2SsvsX92fZXkftWaZUDgwigm63gX8v9PMqVLRYGSqFutAJ6o7quFpG8fyw2wfAQ4jddTbfheoqPGZQ76s9mno2",
  "key25": "3Li5bBkJfLKWHhVgz3CxFAYhpzbfmazr6gVuMmoAVDkXKJUbGSXbVF6uvyFf3Yjf1HfTCcZYwt5ZZVjPbYmhTLKn",
  "key26": "58orNvG2rGjiZh7H1a1dscUvptN1dARqLofkvN8RzSiUM35hPLpxTAsrJApnSLZ79vvtf1HFuVsbtnLHRd6BfJTy",
  "key27": "23eD7aJBCz7Sg8c1qYM1WwTf3ZDsfgDqabmhmoMx8sKGstNTwT2ooqm1tJoXzjKxd5QvnEJCyrbNwJQP58BH1ZKf",
  "key28": "3waFLNjkGgmU4LFJzz91tutENhiH4BSRrtY1eHAJrborBLrTwTu6vcLqgN4eLD5YuL818MRPh9EReiUK6QaWG6CJ",
  "key29": "BHBFCQB761NayPk28B1BUec6zoD7uWvxXvAEYQ8nxrxxU6w44KTUauw9gKB6LVimmKE9m4aX3pFTegARc3pnVs3",
  "key30": "KtjpVN65QdZjp2VShbJX5ziu8pXfZ6gsBS7jsFAHH8RApZJ1NiigJwhPALkouGgysT7pUJs2o8ztq5E5XRyV2S6",
  "key31": "3tx9BZ9Pg1nbKeHaGYvxTPdtRaRDRs93FbnmTXzh59oe28fK261EfHAeBnwpkPH7o6zcvSuD5By6aQ1ToNspNbRX",
  "key32": "ar6QdgPmSz67TMSURY8Xh3nnk6f9LBp7hhNQBx5EqPixdUkMAqS8qu6eiwsMgtYycuqUZjJwPEMgL9GSPnxZtqw",
  "key33": "5uuQ8hHKiuiG1bxbXn2dPE1HZ6XeCLxGsYdZYnDiufxwTTJZctv7zbBsk63j3CuxKoHvyF1gH8zTWBTRLFtpWaAK",
  "key34": "3duV49aCj1YDeobaNf2D82vjTJbq4gKuiAewrFja9gU7n8BeR8qCbqKJq3sBRV1LTFx9No4VBSU2yd49yw3wZTT2",
  "key35": "3rS6asaK9Md9jM3R3wMeDEfxbwLoUBjj3Atp7MJpzSD48dRSpi65Tg3cHKnsdGm63h5ctGANgJYJDeuVirPyG7mJ",
  "key36": "3dJk4Kd8YzxcA1nB31s9VqzgTmbgR8ytaVjTktVMxTeGeax1KFL9aWZXBhBhFMegy4xtgWx2bZ1G1gGFo4HeaaW6",
  "key37": "2db6QTm6cefePz1W4Q562hXQGaEdKfgd1ydDQyUPNnyPPBNNLAZAxdS3v8k4Y26RGQ8hcnT4xC3u1dSPqn9FA97T",
  "key38": "LNGki98Zevdnay12ceht67NuUChKVAjq4Y8fUqGLBfnzCoC6U2iVMfqL5W3KG5Brk6nmrTzdXJRtEKRtpmRuYgo",
  "key39": "5wcF3FcvBUP6cA9b9McMBKfYckhNeDQSpBpfTh3thFC1icJsk1GuXqPo7a2zu7Y8YiDLmSNaoLPJYzTFSXLKGrQD",
  "key40": "iG2Z8W9zFisZ5KyBxN8xZwBLduSP5bsyzSZp4Td8yFe8MULuhVVJtFsRo6Kxm1wFAoHwAXssnqEENvNNuP839RZ",
  "key41": "2H4r9oLe6tfGtKWHhQ8rqSj19shjfax6QzzSrgzVRTHuuZiQByU4cNH3T17u7wRKwkyHB8RpEWzBu1Y3gBW43kmD",
  "key42": "5ZgH4RuPbqwYwkjAHT85zycDJ3JBYsLVuonKFczcdbK2D9evbBfvR4i2qvAmbaUXmVq1FQ6VT5SfxAm9ess65YSZ",
  "key43": "2ufsn9sRatwFGiNvdguUBTEdKHAP5B75KsAULW7sNGY8LpjxbMSqyQKv3N472FDpJjhVJ199fcLLLZvMdMVbbmBi",
  "key44": "mDrbApPhrbkAHbVSbQYDVQbSuTyhpfynx4cRLFwtAj2ENaHipKshihgKobnTadXHpAbuxooRxPK586nUMHsFhto",
  "key45": "2hTGrqZN1ppNzCj6SD5WBPyDaJz2ZdNF3ZEcTR8GFNVJRahQ6ztoFdhePHgK7KCPyJjFc1RKfiB1kCuwtmq9EL1C",
  "key46": "62qJMJdfRkamktYCNDp7Mrmc1MfKA1xCUAgxE44FUUvZMAdeG18CpDfnou23L8163mWyvBtfAAqXJss36ectwKa5",
  "key47": "2bj9yfYoBFyxxPMHByFZQZr4ayEexivwFuNRdaJ145HT9iuB8MU4NgeccRxfNbhZnVsyZ97JAQrRrQdGLbRtN6Zt",
  "key48": "3yLBCKWmroENT4huksz5p86RYdHEfYmX7f5rsgPTbQuVCuPENgtLRCCYh3pbpHWon5hPcaRreik3FU1nBJsAU42U"
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
