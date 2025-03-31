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
    "4dJPf7fpKdPnky8aqPzFRqkXKWvkoVF1LQa2QcAa7rZqkMU9BegoZPNRtcbjzyXtd8qKPEgG33XHtzAKFFaQCzVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "434FBVM27eu7uvemjByU7CaDjG5gH8hzskUoXJP5wvG5QSYyWgUfPYtxFAZVQ8EU3jX8ga7LSbmtapbGBCVMGBPP",
  "key1": "36N9UgVFw3PNRgvz7uqEuBqLNE48TmvzW7z3KWJbNbnMB7bgh8caZTm57gSHHhxQVo3DcWHAWcTVa9PCTCAZbAHY",
  "key2": "WaUsHnVa3P5jkt6LMCFYmP5M6qP2H7eHPZMpvvjPCv2ZcYm8CFpE2g3XuMqH4HYBZfFxq2DWLK4wLum3r8nr9eg",
  "key3": "4MysNcFBZ8m5LH7jWq5G1vf1TV5kHhNVqNYBRf9q27emCzeMgQJ2BCSQLJD1KnhfR1wHMFBoqpfzhHBYm6kQJHqa",
  "key4": "5pxf81oKnX6i7ztNxKiSzrjBfvuykGyhvzTP9bvCpuDXoGTaVk7vcBXf2cDQ4vAfpExxgyJSJYmDW29KK5Vsiwcw",
  "key5": "4e3mXgGBHPaUiWBnLRMjTrH1wM1qL2cUHLej3AaANyyBxRfmYCsFB5pXwGebudB2MRB6Pqnz2JPG7jzwUtYmWGGY",
  "key6": "NHS4hbixJCxvCh3ctXbTNYMZHSaTwSge4zJZdfUTtvHLbZoVWvnWcQmiRDk5XcHzG9KHQfG1RpvPGnBaj5VGqcz",
  "key7": "q58QjmvPuSKHvSuHp9aAznns9oB4zajSyAYjxb4cV9826CYHoKCnyYV8rpbpEJzLUbNoTuBTy9VxgMJ2fU45UgJ",
  "key8": "2g3pA1qsgSzwj7zfu5nCfTNyz3DkwRGvmLERkmMBWbp65ZEiZkgWZxY7zXTSb7ocxydDPrKYMEfPCd4GmsVHeKUS",
  "key9": "3CUGwuf7CGpfeMFbxkXAFmeeUbmLw1R6keDiU9ptW24SzJ7VKKT6XNi8guHwDKAU8X6EApBtegf5DGdPizC7YDcq",
  "key10": "4VBinznitx4v8bGopE9G7pRf26a5SEohrL1sBE9SRLY9JQ7aU9oTxVBVjzs3LLF3H2Y45idJ5WWZoo43GZABH5HL",
  "key11": "5nhicLVSKxirGD9VTSgKFkQpuNdjcPNcdwtq4jbM9W4JkJAfySLRecoMrPQmf7gryXwrQvvvAEHXARGCxBNQyHvt",
  "key12": "5vAjnGiLNfyvvyTxXA2fsvdr1j8TZGZMAyo5chDiUk3yeW9V5aiF2gH4JwXmEqwqe2rC8ohq3inYBMW1QKPcjAdC",
  "key13": "4MJUCVy26MZJ95c2fcYSXRTmDuXNLU5c6DJ5nu6YqMgnUgh4yb3gQdZ4k3dkRWmdtynWNNkBVB1wHVKt4sicdjsy",
  "key14": "2gXKNpWEGTdwdnzJBDv2AohVqPABhogAogvxUHPvzDqHqEz7a9cGijajztr2WT5F2mspX2wPS3YRV1EnnrF8z75V",
  "key15": "5rmJ5zh469yMuMyz4kyDEAe7eojEAnoEgnPUkpocWcJpzgJiuX4pJCEsWcb4bYbCRCvrvFphVZYzwKcJinfdQZ86",
  "key16": "a8ZdpGW9bVzQUisQD3BKD9jL6NUx2PQArRPs1p4uZhYbxW8XWsBTpLJ1FFycGcvSwTVJLw67CvUFdXctM5243tw",
  "key17": "2a8gAEBsopbQVCkFst4eQA4QD9VeTNA6ugJFy9fyHniyA2dfkgr5wd5ASi3qLrKp3Akckuc2aTAAatUmMKk1xJ7k",
  "key18": "4SRRPiDSNfAnWdKRvNTMyqqMdbV8ktWiTEAR5eK8Vnq3zKs68oiGMCV4vfaKKd2pHRRDKuHJ7mH97PFHR1JsC3ec",
  "key19": "5RRP6jEhmaRwtgcW2iWLPB7Y23dJdm7tMV7ybPWg6HJyTnSjox17JXehRaq6msYXVx2z9VddgzfC6J34CJHVZpNT",
  "key20": "3jQW3sTn85YFWuiuuKZ2LkDUYkeT4XwDUPHw1yAZHrH1ZvpSZiAuTD1brKSF8npptSi4j5HrEH6iVYqV81WPEojF",
  "key21": "5r9vpZh4Dg7fCTxZbNNGEyUC7NNgkvwh7SsXeB7VU5dmtjsmTfpAzfk7WHbswTH63CtexjC2eAVDfhihMUbhNA9m",
  "key22": "5NZqaXQsu7oBR9Bj2kDqh3vuq6YknQCpiqBijhcSYVUEuaTbQC6UXzrqgHurHC8Gha9LpY5xAxximMsABcnyScW7",
  "key23": "2ENFkfytGFK5csbeMB4vvJ3DBmyfugosSyP7tthyF4omP86JjD1JxhjUonp1mzHtMxesJsBGS4UJSrHQueAU5QrU",
  "key24": "3HQFKXgJPbdoEZiNzk2AuJ4oaftZiFDSRD3EXbhZ2wXNpt9mF9DUfHVaPZ4wSt3j5gATR3M8DoKzb3v1swBvvqgi",
  "key25": "4U8t3HcjekTz4Sk9CTrH9NUgDHimFobpL7NFyWyYL3z5MCMfEdQVRpQapJzsMPVCCxJnzWGftaP2bLpeYykibVUb",
  "key26": "4y8BX1zCFAZRtAdtj8dGS8R9t9aHWpRdJpcLPNuF3SaAjm3exgYsg9oQEKo9oNfp5f5kJS6QGHDPMK2P4soXHhno",
  "key27": "2aDEEs2cyvzWt2V4iyEWg9jfzJCUmkKt7XwJEErUZBJ4PWWMKD6cWY3D8gjNxA3y16bX4nZe3WvkUdr1am81kq7w",
  "key28": "4LH4g9vi4cyXLC2hBPrea1aZadeCzsntx7C2fQEboBoNvs7MqskFzpzPL8uv9kCmfbWEyM3wETQgY2EWcgfYwbnE",
  "key29": "33oUoMCf1bJke8MK89JnMEos74pwH1pMe3fTNj69vgFfua2TsHDEPPgfuzzYrNYfaBEeYdE7S5vPeBE6wZS5gK7B",
  "key30": "4NV9PZyeQSnrtZvy4BdfWoUtomBc61eF41j7xojibL61RXWT2DtrcCNHMCYQCav4LbCfUFaiEUYREDcii6fFxWR9",
  "key31": "2mN7gKbhWD8Zp1BWauoGqpx7SSHFHB2WLUwyJvE9cFhhi7z9tKQnss1P2Ho2M6f82BswrzoetdfdKSWroY2cJxiE",
  "key32": "mCgGzvLbF8qHtp3eJw2859j7zwP3WsL54w8nft5QgRTSuScKgy9nJfkn28CuqrrfMq5LSYWvTiZJBADJgw5pRYo",
  "key33": "2979Rrjcc54nTpNH3bm3t85eBhun6kiMgJpP8sg16ySPhZx47dAZhTKB1syqRTrY99pEH19cdqwMSuwG8sZtLkU8",
  "key34": "3duTAVGaUxXNZYe8afqeH6tFyrYeDaQ25cytfEXX8TFGjLY5WTgPRcrbHaMh5WkMUex7f5FXdtFx2wMdYAxHS7VW",
  "key35": "2ATRCmVyiAtQjBKcFSGtdnHem7WZNqwfZySRoRiYKDBCkB9BCC7Pn7MuZy1rPSKkWTDWFQkhTqeMLFbT8hgr4ouD",
  "key36": "5jTXD2gBgvSgJ3yqQB9Zm7RK5prDHxFAchtdTegKPgTVr3t7FafJou7cdTmokCkdvyZd23hfTCyJ3RVRBuZUtYva",
  "key37": "64L6feqqtfsCDoFtDNCrXmqFCJqRL8RpBQbGEHA4K2d5DdoCwdvt4rwh9vBMFgkPRTXV5BxFCVKjS1ZGXUj6Lqps",
  "key38": "Z7NhbMuYMVAvDyou14T1mM3imM6oGKkDUPxtNc98NTqp9qFXyJBfjeq52kLTqLR5LoHhpYyDXopPYZhgGBjJQ2z",
  "key39": "62VXeTVHQGHuJdXcbcQE3VqGArip2QHYQUwSxzdDEZn9pko1Rk1iRRYkKdnQZ8T425zaEv8Fszb1fjdunVC5iqoU",
  "key40": "5PeACX6qBBzydCXbc2FNdgWxm5KLdigJPQijbFh62ThFsyNtTQ8uPDu1Bi8NpXkVJkLdFPLMygpPP2LhAXUCW5TL",
  "key41": "4XxGEyeDiRLdJ9M2DfE8Zk3Sh11CJtWD8NgjuTZR33kvYCvZPKRH9Sz2BT8KMTYJmhjMHfKAJ32U8FLSM5sxGPgu",
  "key42": "3hbjVL4goWFNpEGuVQw5D3o9z6qbCEEPXMd8Evk5TtUmXYWdmKxwqTAb41PvRvFp4EZkm9WA7YAdpdEQydHzg8XX",
  "key43": "2RqHcPAgknggzgy7DNE5qdFhJET75ahCYdzQjvw6sMBkN1EsAWpXF8vE85p4tNyY9gWz6fZLNq3dKbX8QR23Ry7o",
  "key44": "qUXQreosKi3wTdgbKwnm4VJjM6gNEGo1P6k92ChLLDUM4h8zqMJm7p8YgUBY31TkUAhLD5LidzNznF6hpvgU3UC"
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
