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
    "2ctNDq6K637pX53J69CCfLLtrPDnZZWYwF4mfG7kXxbdN1TJnQxdovivsLRHPuxmM4wo1ZdbGGSM3AXsnHiwiQ79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qMVdaDPPKwSuuFyE4vLwe6MLwN2p5UGcQswJxJmPf46VYYBjd7FuzTdNSQWKcBLnHeNFU2PjeRwqAodf1u58SGR",
  "key1": "9HxEwhgHGjmdaL6bBcWkm5Zhip3B9maHkAV5MFt8tY4sYeruceDi83AyHuidkNk2skm964NNN4TyVVwp5Dn7tym",
  "key2": "2Miwo9tjS4Z29xf94gfE3kPyWgVnoTUJ8H7DwXfi5yLx4WAETVCbwtGBF3zNdTcMoYYND1e8hXaNqPi2iPp14Tpr",
  "key3": "hwPdHpNjEMUUiGyvFXFodeuN7Pxy4kKVDuijKaFYypUxDckkkzh5TPeRYuvGWxBRR5ABcEQy3jD69CWdcEC2JJL",
  "key4": "61UozDxhxZsuCJnxzSri4K2pv7kFb6cQVjjZmPharXmmmxDsXVcz7oDT48THbg7jbfX9CQFRv2KSEmPK5y68RESE",
  "key5": "4yJrugSuWHGzBXB1c81ZkS559pwtcAfccPFxPkfcuPKHQrMLYSCE7wxqaxNw1LJrERV1SkBufMSPmrWqLV1i3AJ",
  "key6": "4DkWEXSNnVfbNUvp43DkQLutfFGaD9Lu18xQEXVQwDUT1x2Qv3kXEPnwbfqAjBqwNBiW61mcXrTR2KfTLXuYMecT",
  "key7": "5XbXsMidJ6DNztSLjTTmJfgBG745MAmpe6db3g7H2h9wbg7ZDLyFcSMk28Wu18xx8R1kCfNHCXbVR1o5P1RfF53K",
  "key8": "3eW65NNkzdAxrYiSShcQK5dwVs3s5t87SrvJyL6p2tGefsC3Vmhx5mQjiq2nnxsXGaadPQj71i7vn4eBMjE6dMKD",
  "key9": "vRAnJVGAw4XUzhjbt2n6sVNFLaSFuwa96VbWCCaGt1zrrSP1giyrUwg13AuGB1CyACYKSAwLQGiW6jZUD5WX3pe",
  "key10": "4R4YfNRSfnqaikHseLCr2xgWEzLvJnHzLdAWBwP3uDmZBFZCkVzGW3bD1dw8Aa9GDAtTfsFkNntvezLf9RuMPRLP",
  "key11": "jBPMYqtTtcV8RtBiVPmDR2LLfdLfbCBz2rBHBwP63aSSa1J5mSKii1qEyg2krk84v9WUGhtRWspiBMwEEYvPBSE",
  "key12": "PYdafN6JzQB5W7S4ZPHJ5p5tKpi8rYC9ZJNcD6uzcwu3QWmBkMtbNqQkGDyiL4tggFxZ8FeaFKHesV2CrRiRZhg",
  "key13": "66mhp13E8Uh4AAUQv5qEm4zNGymZvB3E1YVNWU9yX64dWQGb7A36QeBi4ZtaSyCkvAoEvdpV1SXxzZWGV8bjcQqg",
  "key14": "zk1CBAu6RW5bGvzbg8wzTUAnxKJc8FvyCMCCCcFWkxfdLM7NLxe1Fk4u3H53Ybh67P2qFMS3arNdjPsXqjEF9bA",
  "key15": "4tzZY9btKH8SFkVBEMr4mohEi2VLowFFN1fa2yLYYDW87YrLJLwEEXgszzKboABGeuppPsL4141UB3R2krHaL57u",
  "key16": "5ALf3eJKdkvyZufy1QDPQMEHX5xbuaZhDTFFNXqA3vQiUq2GX3VGynbS5DCzEqyxr5FL6cCoGjxYBjk6RxbAxhMc",
  "key17": "2QDUSTqk8bM9hMesddJ1whquXh6RAPnoFNhSANKB1ocaCExWa8GfP5n9r3iK2WhjPJySGDLmTCBFYiVfzFxcMdW9",
  "key18": "2ntA1yJXyV3AMXUNjSSgMcr99qGNj2id9d4UR2YLpoR8uP9KYk73fTb4UXu8wjTLhnMj5AZRUeVgkhdSwRmLR4rm",
  "key19": "27kkM2Ptr4bGxEdrjsTrZLYFjkeFC46TY5pXTfNuhiiDD1djM7FZevhv1AXQRbL6Fj2xpR9TzFhCHyXciYUN3Qrg",
  "key20": "52KcBdAqtvuQtXSTCT1QNrqkx6y57Q5BZEKwqciDT5YhXVGKjpxwu7zdtEYhkbKAFBgw1N2Z4viz5irMzxXDGwTJ",
  "key21": "25Xh2dtRErfSu41c6UQoP8FsjcmeUjnPwGHRnbFY1oD4bxdiU94skWoQM5d2mmAqnmno27uRKjstBCThPW72gfVF",
  "key22": "4h8iP2bEbTom491Ub7HufQrnrq3jPAS9BXZHTYsYNUNvp6g2w5wTioDEBmS98Eu5wFtWz68N4hmbY5Rcyqjiv7JG",
  "key23": "GiTRCWRR7wAvQG4CWdYHoqzXVf5gcHyK64pyEGR4s9mXfk4GeFYXp8PvfmQbTmLYyVcc3mJNeNc9hwAWAMY5JKf",
  "key24": "NTdFPbVjH8UXYRypCB5KTUbhiaUBv2buC8X8yEvQz1BW65zSbXHqnTqFyyadWAqYxKVp7dQSHcSkuVhP3g9RR4k",
  "key25": "5TAaZPPdvwdaoP58oeotKpBDdwQLTGHDwdy5Ko4XHmBzt1DCvUAKHDAtc5spXrkji7dZnZxQ9S89pX4Pxd7hsoxF",
  "key26": "4mavS4ERrQ4TzX1LkR1DT3LAj17TqK5b22BtthHKqQH6BcHov7UyRPyrDvMXTrGj7VrzNGEhotpN9W2K6c7t6QLz",
  "key27": "4JRfJRRRhqvuamRjkzod1xryvxV5tLVou2istYaQvTb2T2dKu9QdJLHVbSxGMffkDtLK6SqVSa39MWcUuq9M8bV2",
  "key28": "3ymkEFCQZUxf1ioUucGCK5jLrPDEiQM5UAJNPYPrt5SfrcQp9S4JvXGLiYscfdTqsWdTgL5vyTHZeuv4Jizjun1y",
  "key29": "4QEVJgBqTcmFUEm8naJP6Bim5hVFp1dMWCKggEGT4BdQZ16gWoYdNHEPWFATKkNcnbiQGqSxMC6PJWcXwA2oeydF",
  "key30": "3DD8Mr7nrNRyyjAhUXp2qKowHPJLSphgyr85D3JjbP7WCbFAs9LMnAZmiffdAM2bqmYiixvGmSCNEYvSPphBTr77",
  "key31": "41VYKNMi8nPoVVaf3VyLqwDonFjJ651jzG958ipiLVFSArsUTBab5oF5PqcmH8tYdYamJgZLArWzpwk4syPSFx3K",
  "key32": "4WeDXgFncHPyvsqDqBEyN9sc2rLrPWgEP6tTbsNtaKiDaPfkhUhcNzE4d76dhixwsUzshEehQaZFRE8y869NrArB",
  "key33": "fyn95jbMu829Hg7T1VJ5ppEK39GDV739a44YwzNcAaSHi1YBo9Ne6LsT36oBdPwzzz5aWCQi3QeQohXPpb76ur3",
  "key34": "2QSoQZSxP51t3byCxNUH1qiTbZSgmu732udqUREMHyshEiFVYCTF12wpYAydB3uc54eow6mVitsKVtDitXY3NJwH",
  "key35": "5Buua8bNug1q642BM9whyEnq8sHgsxhaQtVz28qD3TTUNu9xoqjXV3XBRePfxrvnT9VzVdDg6o4mdG17c2rBtU65",
  "key36": "2rs81rEtjtZdNfSJ3W7ArkZB8biRC5KvM3osrXjoiJBcwXxdzFkKBtTgtUNgupZjNGcvUj69Ec7mpViajahcaiqp",
  "key37": "2vGeA39weJSm9G2kv15w36gSQiuXRbcV5tkgaRf8C13hBXw5v417m2rq2R9xhPA4N5MEq85WJGzG2Kn43i6QiBj4",
  "key38": "3KonFgvj8uWdwSZXp1GiuuiDX9vHoz3Z5yuHA64Wg4aZLg7HY7UMVERsNTKMBazvhxcDpBLvkPxXF7ZrMDtxXXJN",
  "key39": "k3TJmuya3XQ4X2eunJwvaBEVG2172Pn6ch1QiuzpEoRuEJfxGrgCyxz4gPJmiyA4qZxkQcxmp3feef2q5NZzk8B",
  "key40": "39EcX59pPT29QvMvoHDGr82PFhg43c2YWuCGdQCXfrcdLojSDkLkEF4GLHhyVMv8Mscf7LNe1KfosiibRjYA1K3z",
  "key41": "2MPfyLc8h5qEVqm1TGJ11Uf89WMY4mWVfqWzXjniEBkze92ZEnRqKkzYx8CanLSDWMV748cTdPCCMqLLpFsVJjNq",
  "key42": "pMofk9U4nrt3QY8M3qoiLLcDiLJHXRJEctr1fySWUpdyFV4HpLPD4bBPMcpPbxoZxiecPzMBYhKYygkrAhc9xW5",
  "key43": "2MBxrvZTDS8bxUqUXJzFz87cwDr34T9wD4LGDNZm2wSgK6rZuuSUJP5eQoYXCWbkYvYKGiWp3qAWZKDmw5FStoGp",
  "key44": "LsCgpGVpqbnZPgWLoibPBo1dc8t1Lgp18suT53Ay8qDdEHYZTw1m7ZqXtfqe4oAxMtQkWEedF2HvGYhRT2R7vtD",
  "key45": "3Ji6smhJkyNpE1EypyA6hEdnMMqt4snpd2Eer911JeM8YymQ1dVm1aRWDvSjU2Jipx23sb7zX6nRhNPRk7kGNafT",
  "key46": "4Dw52mSHUN3zrovMaQnvo6HoGGTLTbTmZvQp4Rt5t8awEyPeVYrK4Xm1nnP6kcEWSJMhS86zxhqJwsTHtn1RAGFC",
  "key47": "WEHxgZoSCfZjUVmFNkyw3tGgFXphDNaZVBZnkG6dykrmXBt4mNrt5qpog8rasRBN9ySYSHXjKHsjFB7iLxaMFEZ",
  "key48": "3qUTPUZ7F5RGyLmDRbvZ5CnpiAZMicGFjiyRnu8SYroDN8aTP2FwohBTnnr5UjQ2EsGhXrYKEFvBmHETeEnKuq4w"
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
