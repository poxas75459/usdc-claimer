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
    "47VLC6SZ9rXe6ntYn8nKSVz4xu6JpBAcvCg6ZPFwZRGxQySjUADBRKsf5XdKqnc6QEeP6JFVEatiwzfoqbZWP3pJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z9st9ZBeeQSWEJobrpqK1eCztAaZCfcuHeoUPg1xgYhkZXJphkvMEsryUxCy4bKRrQ1p39h5JLbdutMWYSMaMRW",
  "key1": "384LCedLkZ1G1GuPMuiHpvv2nipawMKZnRei9akyHhAgtWfghCXxN45zJJVdZkeMCrsBRa9Rbm1v2j6dUEasNfcG",
  "key2": "k84WFL6FtDjVVycePQFVLYbVxjfzXRx3vKuP5SJsgTS2viSVXPPDhQk7dyQSJNcWjfPMBd847Kf8nz4EHQw17b3",
  "key3": "5s6NKjZkLhbtBd3NMaYEi97YdR2TZmP7NSgWgDqszd3sKL5gifc6FctPtUbqjf2V5gYuRZxSreWPVoDPXHbx1jNs",
  "key4": "XBFat3PryFfGriNhfRW6daxkszsEfWdUBQMiygneM2kFZ2QqEqmmmsgZFiZ1AxsYdGK43F1FmJSrPjd52pUwhQ3",
  "key5": "49EDwBS75tLd3DATWVNEnNxGJ75BLpUCdGxGXtWPaLJv89ZeksFdtQfDymS83YSW18jEz3aX93BPFqc5kBLFVxqG",
  "key6": "2aFPHLeWNXmfGkCYSu4i3gQA8Wk5ZDS4kfsQ3aS5dFM9ZPpLi37pcpAnMyCDQnyp7rgcww2f27xRkZqE1nKayYTG",
  "key7": "4Rg6pPBrQ34RD8aUyohAVE2xGqfF4FFeoN3zE1hDWFkXjWvhM7j38dq7CkLKJTY7aoAYCYSvfBDFtvJAR9XDCNHP",
  "key8": "5newLKf8awgK5WWTk8PWrkLKuDNY5ZYgpjVJZ5wU7gQypE5ZFVzXbQVmN81VgSB8UJJCmN2eoYJL98EDARZpEB64",
  "key9": "2cfWz8pY6N5KJwn1Fu96Qbb5jyWKMztZehoJEj6pw791aCRExFiQtqh2rv5nmesTLPSELxj8TofMRK89yWveeYaZ",
  "key10": "6A4Nak4gZJk3aKR6kEXUpG3Lw7GJSA4F5VRXHxeEYi7Wd1R1ijE1dRCN2tva5kZ9zaadFAUDRqqiNDgqssbjLa3",
  "key11": "5gAw9gnPr2Q33JgEZzkVm7Cy6GyMn4v1uAdeFyAqKPnsXDE283w8sSsKdsEjyDc2F24EF1LSNsroTs2UD6okM8e9",
  "key12": "311dPuUNRruvH4mvVQRmx8vA4Ei3Xi6TBH2FRbwsNCuqWJ9BrtJcUaxU4S6qthPnsZfjextBWUQamQfurg8Exe2M",
  "key13": "4XNLpPzPKmwNDPic6FU5SsqXsPrzGgedrjFfNdk4a81KmNuvpjSCiDfNjg2xaeYmLAvMBQMRrm36zXwrdTYftrZy",
  "key14": "4Pmvp4pZZifyCEhn9STdSwmNnVMygWrn46Mk9qUmozWAnXYuNfPBoAyAirxJjEqtVYPwPzhzFrHJ3U3UYLobifHE",
  "key15": "34sQEpB6gr4355hhrsFRPRp8e4gkSAHazfVLoq8HE3odGb8KxtFiKbnBgcsDgfnB3XkeSwYkFU9af75deQHJragU",
  "key16": "vkUMe4yBsfXceQnuLEEoUVTn1dderPjvcfJvvXRECqysMyk3NtBgP2jv4vprsEM25E89NHtvfY36FxBupAV8kM9",
  "key17": "4j3RsB59PB2myybY6d89csbm1AutChE43rwJCHsMwqqWyK9MPXDgwMKvT6Lk5R4nzVeizntdXEnqBuRGBzNE4EgS",
  "key18": "5K8FkCA1b5yW1GNjVYep2PJytGkoHBGQRdqQdS8ShGTZB5YD7bUUx8U3GJvzUot8znBw78GPoabaMM8rYw5rSpnb",
  "key19": "4rjER6WWG8qPvMNyGuU52y7ntRqzGBwbYMtKn3bx7aqdDZMAuuqyuJTB8cZBLRTc2W84BRfvGZ7L9V61sT1suX7c",
  "key20": "5pJNXLyvDCUse5nsgDvMNmnm9bYfRFJRPHiQyJDcGxnCP7eUEhgSRwryaiMBfcn1L1Yx1ZkPWWz5M79h3hjLx4yh",
  "key21": "4Wj22JQjWeByXAcSLfCXu6TYC7kULL1c2H3TGoDbThTY3qspPSTtHwRetFzMmejZRFm75iMA9b1sHSxz6fxesjYu",
  "key22": "TYJkg8A2GXfV5dhQJ2uYUeL1RBHHHq4BaSrxfczkk1rbZ6peAmy3bgJRLayfDG7wC7DZv2434EuVdYLJQxuk8ys",
  "key23": "4YBe3VkJH3nrn6Nzjn8Hiamzo74ctYmxfLo3Kzvh7KTc4azrWUc2NiRaikGnRf9W4QGnwknSrG23Z2sJiS6QRgMC",
  "key24": "h7KHSNE82ptdwEBZ9mELSQL986WsQPer2nEizM3je1uZSsTGTQd4dDUcWkVN2BXqkLUjJj4Ukt1WPyrJfSW1AEA",
  "key25": "3FjGcvYE9GsEUXcn8CpNnwLTydQjddmQLyi2BddJ9oEjZy64qeFi8Y63k6MNCrxUct87GJG1LShJXVmb66BvuiGy",
  "key26": "SqSYZBM4WGRg5SVLvLPegVW3cg7quz5GCGcBt2x6aFc13Ho6CALwHHfWGxQusnRZmdSEZna2Z8y3CWMByChW2y3",
  "key27": "51M4SXsr4JeDJhFmvypvatoRgDUgC8oq2AuyT2qzdJvXVeF7mcE7Rb1toLG5X6Uc1wY4N4raGgjip2Kqc2mgMray",
  "key28": "5cJAp4ewU4W5NfYmqn841XL8wqxq9kURdPJRrz8FmTsfN2jqJyarAcEujJQcr6ghCxzqgPhgYA9QHUWzvT5xsRXA",
  "key29": "NdKzTMhdE9nM85GRUYMWWtuYZ5YtdkMDQdzsr8W8vG1CBFs1uDUEe4pjXWKSUi17nKWiY2Nb8Zc6mzj2fbY1sGC",
  "key30": "3pG54MchDPxtdES6wzMwR7hg1T6Mi7TeENsWVZc5NPXJPPwLmKENtLRyJnANrhTRWDNRmhZ53dtV1RBnBA8VsHxT",
  "key31": "riLLMe9SywLm5mHYfMebD2SpKwUSmbEKAgBEfByPNPhxe9ZbvSgQEpHoPWe2zvoaFC1SLcQvw57gxEnjxUpvhdC",
  "key32": "5iH8BPQ8Ast7n9HBWjZPJGA4QU9Jpm61NMVDpCDWrTB8XbeKiLgL8HgmFyaCzkBnCwu1Kmr5tiNbfaEm3Y55xyMm"
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
