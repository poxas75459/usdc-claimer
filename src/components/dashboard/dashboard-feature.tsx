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
    "4sPEVLDJQFYB6jQxX8Ybcv4NnUuYNhZhV3UQMMsYcB8AZHzyP7pgD5m4BtGc3iM7f39LuBfZQZqG137KsL94SqxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VqBuuujs7KvxybCP5rzJnXeikGViVeJSHqJiGZ7pG5N6A3FjEsV7snNqCrvP2vxRWs7g2AryE5UeiwguMDdK72M",
  "key1": "4XTZrH5mSx9WGtvhcRq5r8Sjc1NKnDeiia1c8xwWg7E6X7E31dGftKLPsDuuVYjAzAkDYgXheU49oyNehy5iBnB3",
  "key2": "523sMvFqvhoYk9Agr4TCxnpG5QTdWtK2WDmFpmBWtVGPt7njfKuhMsNwcG7QecD43j8nP5SaERXpyh3w4of8eBYB",
  "key3": "4mSGrzeM9ALGZ9gTDzE3DVV1wm4Hu8p2pLtd2JPozfKN9BGrBisYba2WcJy4h5EWd5QuC7ZFUsyHgDXZoFWK1h6g",
  "key4": "EtgTQsFUg2h9k9DtUSeXpZ9kDqZHmU81cJg3KwsSTjMgTrqT8YkFeCjWAMxMjgkeRrHEo9iXWpmfZgzXvCw3rP7",
  "key5": "3FhyqpMxxfbTCsgYtRbhFHjvT6ESvyzrbaRTMmJgxf8faVYfn1wCExgb3SCyQAtnXgyPwbgQ8FLqRunVE84rn1qq",
  "key6": "2Adw9JQYNSw85CYjpXHeivK7v8uDuTM4wNTGPTJuRUHVybdbB3xX51X653fzKzNpDAKFgUWpGXViAZgmrL2rppC1",
  "key7": "4G5ZoRpYB14yQsnXkiW9sw4vq45nraRwyhbT1XAuEDR4fPFnNuBcoum1Q7AJCDv4bZY8RR6HpH98uXbQGMrV16fR",
  "key8": "2pWFNJ9QHrHEcjoEGTPbq8BmBWqTScg5555A5gAk23XGD5zLBNqUMqF34V44C8oa8eWaDCBSn43RmcCXTPJCdXWA",
  "key9": "EyYxai1DhR5eLzAXiq9SbuDkkDyvaDgX77RgoRJpcDoXdrE9phLKRHquPoMW3f6skmnJa8XoJRNujQ9mr4RTz3Q",
  "key10": "4yYpHUrr22jngc3YS2ZX9dS2wHW6mvygzvMv5XCfyMdcPKgxKKzZ1REsWqXrVPejvfZgNdDDW4ugMfU7EUtsFAjB",
  "key11": "3ib81xeffN7Hf817GHQHRhuK6Rm5ZM64q7R98ZKtfdnMtSv6q8qJcQ2RBLV1qXQGWykhretqauNf9tkMe4r3M3WV",
  "key12": "5qx8u4TKz38GyPqe3MzE4GyzNNC2tVmtUvhbH1WvnjfqkZESHXGe6UL3kuF4s98amQKRujM3zPkEQ2oqmSuxkB5Z",
  "key13": "2NH72VDFqRh9CRCLzjKqrfrxTUSArZNLLx6tFGuPXeX6Lam8AjMM39EqhqPcEZgjrsuMoG24CULocBegFf85LcYX",
  "key14": "3DfC2riMLivcEJ6ur5NtSxBXx2zCWzNjbgaNLFEpto5z35umZLTeobVfV9E1ka6DesH6j83yr4r4qcMuSyBrvYYZ",
  "key15": "4L1De2ZmqiF7ahXrQhEFJ7ty3ydFcQKAVbppv5dMHAHfexKigkHoLF694BW9PerQrUdia6h9Js9VYqWpuo7ijL2K",
  "key16": "4f7HawVqgZi5AE53qkYFEwGZD8UhrtqXQt8SxPz96eSVfWebQqmsdGyC8gQDY1U9M53p55VyM5pTb1CzFU2Kiaej",
  "key17": "5XZgc4sw52XRU9yjw6p8ErFb23RKYD5E6Co5MavBRPR5GFNwvZzribAACjZUcEV6PM4JfNYiQ5MEED1Rk5TcFMC",
  "key18": "tL5MM6Xy2nHheeRLRzQMb3ePVTWHjNMxszLHQwMHR9vWpH7ui6Jmd6mM91rtGBo33A2VcbhfuaYDyoCnGTz6vch",
  "key19": "5DmrPLvSN7a6WSNxJy8uFZP99wLLgwDBW5i9k3iAB1dcXjB8EicgLXr6dfwgU4UD6mwpaZoPRxkVCjo4xmkMcVp2",
  "key20": "2KVBBb2zM7yV4H2WF9zdFYWfHAuNCCXy6gMqMfUnAJaqmt8cwCYu4LVyQsikF9Mb75sSfRd9EmNo2uFxJBK7BCa5",
  "key21": "3ga31XMzsrRouJz8NEoizsYd8FWyGrtjbpZoXZuAEjuNc2mq7ZS8AczoCSYRkTnR2FvxyGjoGGZazwMgk814MPPS",
  "key22": "2BZuWiA4aAqqyRnYKo7n5eZxntKcmGyWHojVWfBVhQ9AhwTdjSfVLjs35HGHAKknj5HbB76P1FhfTgPCVeYi5UfY",
  "key23": "4nxTkhBEvq9T9uHgpLWSRycQUVXpZeBQBr927MhmvKoccx3pMJit6b3zPGLp6gMdJLGQ6iKXrgUz7R36hSm3VVk1",
  "key24": "28cEX51k3sY1Vv3FrwFU7VuynnJgexRBs3KRoiEV9GLzq9isDGFD2gk3SgiYE4MapqCBrz9Coe7NCxaXCighFs1t",
  "key25": "5n5CEQMgA6bn9XtUBF3kpn7dfkcopCzJCrgFg7qbotDmvZH957GKvYvu9EKAYewVeJhU6GeUGxyXN6KpsKicUrTa",
  "key26": "5nLMa6Auh1YLL2Y8pNTm5qUs77RMKL6PPkV5yA9CJTaRPE4giiQ3Jg62qcwPWWkn3NBz4CKBkX4En31BrGsqdjr7",
  "key27": "2a1BMN87fv639ar2Mu7qXosf9Yhjh2YzssQxTZ4ovf1vhG47dv6fKY5aev2tMkrnLfs2gAJntSmcPcbrBHvheKVv",
  "key28": "GU8BKzpZfQgbK8XcynAaQUjks1r2uoU5mcPv898kb3HpGZBHuiM4m2BydF8dXwgspgxsNf9SioxmCNggS27ABXC",
  "key29": "5nL553ZnZ6dsbwpnyVhw8Srja72SE11uGGekUfbUti5XfpnzhVrTEQUjBDt27oM391d37jhsYTQfXfraEVRZsFLd",
  "key30": "MtcdpfBdRK46eprgLL81nmCUb65gxB9FQuvsnf4YNiTBeoywiQsio8Rt6q4moG48kDyTLfG2txeHDhCxLFJxa7X",
  "key31": "5ejmkW8UogM4MU18JPZn996xDW6BTsk3LL2QivSsQ2ajGuLoULeYq1Kh9v1sGgv1kc64NK7xcKgia9HtFNu5cruG",
  "key32": "2dyPD8Kpf8xycn7LcbQ4pUbnj7SWbKW6wQRYNo5Shae72ZeisLiUDPc8kushCZ5DDW7J3BNkmNDKSimNx8fxWwL8",
  "key33": "4t8y65v9qc5GLyyUFWZXCuu28K61ysxcE5k1HU1yHsSAF4xBRato5b3DqFQgRzt1NrKKWWhLsvqAZq7ZtQBCFauC",
  "key34": "2RAJrAFtKsxGQMer3mDyrrutMTPJcwYZhpkppfxDuUM5K9yhvKbaijph9XWhrvrpkTZEZYpEYqdG85BceDw6R6DR",
  "key35": "5BqNx4d6N6ExTwMEXuVAy8NpMWwTnVu41yv3UNBFhfwQcF7QJgSxatDDkjg7dr5GkQ57KbnJz9LV4q25zabeTv8k",
  "key36": "jUygek89i2pVBe7hBsqUBCa2e6UhzyyhhBQg7pjq19dL1NfE44oxZ4RoqivCpCKwpnByaJo3MutNDQVqP8X92KV",
  "key37": "2CyffbbcMfiMMgQZqKw8nHaf2A9JZ8CWw9WizDApjTHuTj87vYf1vPkmZFQrUCmr8cFcVvyHYeCtp23oGRvCzSrq",
  "key38": "2tEoHo92zZit3NFP8ap2qf82c2voM3yHfeFPKt6hZgdkKMA31fo6wMMY4F9s8fTM6LGo1kC9En2FKwGnsBrsP4vW",
  "key39": "4jVgktUz4jmr9bN9mbwUXkkbvkah7Fo2BgxsKpZngn6qoTRaTUyXCX2yTJCkofh6CMavHEuwZhrfmpc9f4xTi8FT",
  "key40": "5eNvqcB2XdPm3p9KD5tCAsPJ4r4VArKb1SFKhYa3JnGgUyf8rJiuYAcQUzZ2CVEwSXsou98oJUk2vZSCv9Lorg2D",
  "key41": "KmhPRasFP7fLAKrYSw2kUxAKWGCTfjZyHHiiDscTsvMC92YQoaW23kMp5eFair4QNE4GgAKkQdmbAirACQMjtU8",
  "key42": "2ADWvCnLbn3MivBKZMVdHJ3HkkoQLDiBNaAWDGv7QoHx5YLZCPZixT3f741TdWJTDxzVS9PQ9sA3M5cgGc66Z2XG",
  "key43": "1epK1DiT5tHpaEDTGKE2hEBhWDFwbDQ2SBSwexYn3zG2YPZQJzfGKpfodWcWarCQAwxbTx9CxacejyKUqUeuhxf",
  "key44": "3tvowGUAm9P4DNAY4rwkqW76faKaEFkyh8Sp3MSi4VUDaEfDPLoEdeohGaiceJ1qmQpivy2YDB6rLcTtHSg5gNAP"
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
