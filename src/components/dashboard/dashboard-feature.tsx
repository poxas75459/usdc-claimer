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
    "5yDuP1C6Vt7rcaoqrLFqcp7veGW8hrTiqzCvaZQXw4kwPfD6t9fM1TWBQ2JZ5H1Xi9EshD9WgBFB1Bh5xgR1SJrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KN7C7BTGfnmx6yDgj3SbFwefgHe4bCb9LXszw1Lj6L3bgtMCn2JTKDxmeshkJcLkKvjUs2sKQtoiPyme6e8rf55",
  "key1": "U2PU2nYuKaqsj3FAPphQmq7t35DjPrD5cFW358WgktwBtpqAoDL7K2SPYsgnX4eWghM9AeoVPyCwFTnrHGKqob6",
  "key2": "2dBD5Ph1ZAYFW3YW79mP9u7KCaRs3shPmSA45uRM2beEHZADxoc9FcCPcvuywBk1Zdy7WXnNCU2f5HaC8pM5sxrZ",
  "key3": "XUffYuiaPNf2jqS9SLNMdrY8MDtK5rb6zLVpcgPfhCWsiJKzjXoJhAr92GGWaNLmep9g7bVeP7CeqeZr84zNMc4",
  "key4": "4XYrHy6BPL9TenrGLeNewNreJRpJkxTpKao9RBCtFtLrAU13yZNq1RZXgexFnUExKUGroLUYkeuKQwZkUDRg799h",
  "key5": "4Gbp5Wm65xq6tFsTXXPZAc4CqZTGpU6ggUzGcaBRYCPA85sVNG2UebL3BhZibHWfCkyS8cZ75dWJAjhhp2jEyV36",
  "key6": "27YP5Pvt42Nj6jjvRKaLjLsBU52oBhuNq77E8BgMqNDLWTXHe1E98j7hDsTZkRhZ7DHzgDnhj1b5EzNvB6GTWb6b",
  "key7": "MKCJed9v6m2XGzpnoPcLdt8FTLFq1SoF9rGJQeubGP68vzrPunPVk2tU9nETzGt5Dpu8qMok6vNTa1uaC8zBL3Z",
  "key8": "5z4DDgDwupTw4joXn1vFw8u5y2AYnaPGHS6f9kVxapuJdtFgTsFfdqpH9LHs3F4fr1Cf5pYmQFukUF42cFLpiL4b",
  "key9": "5m8iJS2h8GjX1wfP9QdDENqwWWmhm29EzEpDtGkuf18vgEhTVsznY7xyMWhnbBakNkUeZznRuiyogW6hZD5KTxfP",
  "key10": "3ULacrh7WKtRyJiJYeLAyciRdjhzZiwbXUBZ57sNhTsbqfoQc2KGNWP53tJ9WyErGbauqjooWcEbs9ryaSVgX8Au",
  "key11": "RtETCTjvpo3bFmZZb2tSbsMqkWXb5YWCS2hTY47sFkpjMBSYXSMh3ujv2jUXVQxZKzwywwasSosZQK2cEAG1Zf3",
  "key12": "2TVSPCUuzSQS6vUBwFtw5uHwmNUS7H2nApKwpQ7yMoA4HnEApByxKU1AiX7HMYK2x1JDzUSE6caDD26X8TsJjy2u",
  "key13": "2ukDucx91ZTCCeYE7TFnkFDzSgG31A6ChDN3BGniXayYkBsAdCn79pkvKVhJDrHDMEcsKNXBMCeP6RZ3amvBR6RF",
  "key14": "AhRhht3QB5Lqn65JDYRvqYrKK1tkBvQ7rZaqhhToaYowzr9JcfDoqLVLHRBZYvjmHFZoVPNKmpjQGY8T4aiCu6y",
  "key15": "5QBkt8YsGhj27yuqfpfBm1Dp2zL8j3m5mGbPsYkNhpvkqDeCY5Ce8qqBa38XraY18LPBXKJHVMVygkD1riHerZdh",
  "key16": "41FXGyatKWrth5JHpjjJmf2skjoFadkBv3igMaCh8H8yJzjnYfTtGKLUqxEo5zdru2dj4waqD5ZYDKa5N9FiA8cJ",
  "key17": "3w3ig7usgYTnuL4c8id2h2qy6ukKmix7ay4BXzVmw7esMnQPci3jyFtkZNSBcL5cdHWrhBQ1WvxwByWDH5i1EwBW",
  "key18": "4TGqJeyyn8925h1JR2aztXvbMoJTBRZmeMJZdb41LUVzA1fAy7dZu6M8WuE8qR4grQSWRj4A2KKhNqtuf8f2NsjM",
  "key19": "5Dza7doYrp6Jbxiss1t3G1mm11tEUHQjnS6GxFYFGAzDkEcohDcAGhbDoWaDLjCy4EyHCCPrRpmCG32Ev4dyHENp",
  "key20": "2pzkCwTQXLDB3VJ1tKhmcsRjehq8KuEqNyeEA83Bsv1aDdtpYruTDbzjVmQAcDpNGVXm5KCz4xjFWnqMkzF4fz88",
  "key21": "5oR4edMU3aBnjXZev4KvitRNHNSSkdaJapoZqnEt2csYhk4h7qwa7TP6q2n72ZTquakgNNxHzqrxeXbUEPMUca6E",
  "key22": "4goLbrGwxMzeTjvk92Wd5rP8TqEaAHEheP775aqD44BeZUkYCFMpGPjtSCywPZRyP3U3CuijWQ4kgYmjDUAMW6gk",
  "key23": "ECEJfEUrKXUdKwaHoLPHw6SN2iK4hQ5oe8mwZyeiptH5Y1oEQ1Jm2W8vs7w7EnNf59ikUvbpabjGQC2H8v4beNd",
  "key24": "3RdVhS7WNjrBafkSahhWtXhmTgGtQ3ff56z1iM3ZcW6hQaBGq3JjMT4NXg51ei8c5gzXcrTiYV7qTw81GrkUBXxR",
  "key25": "4UdnpiLwxt7qTjcYdW2mK6z36SzMuPanLUBh2KRABRa22JrnE6X33D2BpPJdRboH5jXtPk3nrQNc9HhpB7nGES2g",
  "key26": "5gyfHoWV1qNTCmYfDcYe58XxvNDkFjXBV3jegL5Cc8Fd19jqhQbLF9RPkfYqA9iiKSphwroX4naPuU8J2vBAQyah",
  "key27": "424maF9mJ9gqqwEDHHhCqSWAefD51oSKGqqw5WtWG6KSMgaffNVybauP4qUpJVqzpQFwhkPqF8aE3yNtU3Zm5bKD",
  "key28": "5fxFYp3PYaYCt6ZcnL7j5RWsrgYoHDNx6buvkLWhsnNayNPG7BTMFYeskQiGu9Wo4Do4f3HYfGmf4amm6aMtxe32",
  "key29": "2j7DJaqkHK9aVn66uWnRKyZ2EmFLeaJMGUwW3hLVtYr4Ls2kgZ9s58cakztzzDFNoNHr2pZihL3dxpw2TjqsZXks",
  "key30": "3iJanCdK7AuYA3Ehfjd5UKahpervEhVcMDvwFJXL7v4RFMzCQTo3r7CyYi48aoXozk7xkCejDq2EBsDJdCgiN6Az",
  "key31": "57scogofoc9QYbwH1sRXMdVD6yHyBdoffUmjV4sqUyURikrkJ98FzXFZLdCo6DoXr9RWatcgCWgi9fFu7LZEZYQP"
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
