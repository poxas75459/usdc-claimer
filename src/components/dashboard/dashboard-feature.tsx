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
    "476qhCfb6hn59xSuQHhMetYNrkMx3SURyxbNgy7og6eMNeTQjfwCfjGjfz3dvV6khaYjvXN4RJNcTCNwyvjYsNr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kB3QNkt1QLRaXKJ6A37jXsZPTEQB6HFKv5F7tyMhCAnEHE3uyu7CmkdWQwKx9QNP5oPNkEzUXGNG2R3jWujBWgu",
  "key1": "LCP6hvATKkX4AUVszs3t5wYnMxojtzQtTk5jeZZEy55FURn5j4tSKMyynZQwGiwGeetysRYm1RgksTMHttGzodv",
  "key2": "5bugVLwhXPne7puf1xeYu5sSXFi8JbJyUSfYGeZ4yvDBSFSvx3d53zxcNrx6s6fEc7Uecu4HiA4Psotn5fjU72H8",
  "key3": "X8gGKRmRNzbKNYea1ModBLFLq9Q6XPxAAm1d4Gz9enV16g1AJzcLScdruopMpLJioa3zm1iuVCUpStMrAPzAD1t",
  "key4": "ZUJFZCwZcewjAJyRhkwN7wxpvexAqR7BBz5qkbt7QX1yCjFZtofXqozrH3Kt7YxjraR9NxxaMraxXmVEmpaCRkq",
  "key5": "ZnUnYTfVJWggNYF37Thhv8c2mn83RZ7xTifCpfDyrAGHfWWGWAYhfnfA3XSMTkCLQJanHtdB5q4o4tnZExnxpX9",
  "key6": "4DemUKsbfUrnS732tapjfzxaTmNx1TeCeHFaCfdZ6CY96Msa43oJC8SVhdEgybAGavHXCDVZaAs2Bq8gma6PQb3x",
  "key7": "LzkES8cBWj7vveEeA3MRbPym7VyechBaAA2aJe3bCDddP5LYoVJ1ZF8iPFTeYXz7BrqrPK2H18xJXmbxaEYQLJv",
  "key8": "buec1fhopSnZuA2dnbCxNBnp8oomKLvQdXADinVvHE1gJ49jYGvFRyy26ohkLuNcMjR1LmKoyd9LiEAaoV9FMV3",
  "key9": "5yV5uDUoo39GNEg4ZqKjZShff77Ng3n8BbUkC1cRFtTqVKvW71MQcxS5ER2K1bbyYBuDEB9noNW8mKYRFzm11tb5",
  "key10": "2KrfD1oTKeWLjTSVdDhfWV3RcvpbfFSEpjnoanK7J37tqjoVZBcjyHmYGX64mqhxtLyb1tbG8bp4fHeR5U97jqpP",
  "key11": "dZqgEox3jM3BmJuXCvEsXrQYMQMhgdvWrJixcHksZFDZ5CuGzoQGZi7dR7kZL9mPtxyvQ33VvhMELUx7qdEj18v",
  "key12": "3PJNnvS5yTNtrStYgt9mvF1QRd4tAaATyFkymvW8npLQFvn76NKdJLLTTKSH4CpZUqYB38x6M1D2kh3tVUnCGUcW",
  "key13": "3Y2CXSrQ8JvfKfnEesKRb1QW2HmyJxWqQvFbKsN7nnZowCwEkURE4K448SxRmG5sGVAo4rPZNTabs5USRD1uDdXg",
  "key14": "4tPEVU7knX2jC31D8tcvNjfUsWUBP6Q9zqLmSmjoQmdw94v9JwGifdpwiA8kPUFYoXYtR5dvJNemv2pquvqRasES",
  "key15": "282LTnmiSo5Sdn3HhQ1ffpyMJEXEPaMH1j6vEagTKbcg4TVFKueqtZLQRVTApwWqNc22a71m3ZHza4wsPcWTzrPL",
  "key16": "3CKyn2KZvoCgsn9yYPrFgMNnpCoeZjTHbbmsv58aKfJ3EYRGRLEvkCXVXPrz49sY5JE1dijwG7T1F2j6jxsA5Lg3",
  "key17": "MTZk219Hz8ynuvgGU35gsxBoUd3CjKBPUoW37vZ55goqG69niRGTkTi8jyVmLXq8nGVAJPwcV6ZbjPQhuMVPJyf",
  "key18": "5TuWNPGBU7BWZSVMJg4GbazRpYrCRT1F6vuGCQr49HybHnh2cwrXHzaGMESWiPuDr7EZqJvASAmoQyyVPWUhUQLN",
  "key19": "5qgmakkQo32oYg73Tgxo3CSc6tFAfdJpiSmQxMHGJB4J3newnFvDsN34B6vLdCH6YNRYM6BP2ZeZ7vbV5mzyCpc1",
  "key20": "5BKDkfX2Y6SdPnbve9YV8UgJLCnNgicHZ46v1oo9Efk6ndWDqsm1e3YbX3tMowjAoDte9g1J24Y2FPnXJjWUkkLY",
  "key21": "xuxHKkQbtiXeHfU8br2ZHp56LnaPTwpZWmCHdP7jBgyUCHvq5Kf94PtEHkx5zVmDW5Wn5cPTsQG1v6WiGX4DNk6",
  "key22": "5MY1YTiMHeiGQkwWicy7menTNQu6pD2PwkuCSzFdwwhSYstVzdiCCA1tvB79Ss8W5n3wien2MsnJFCiDLRt3KpbF",
  "key23": "3rjR5kqP9Fi2TLMXxVUf5EQWmCAknSTYy7bjgbJvJ5y6qWTxLyRMxrBHMU3htGU8m8XXyReddaj9ZD7mk3AtvHaw",
  "key24": "JTAMvFpDkN9GsyuY6LvT8wsy4VNM8reM7dm41YkYMQQFEhQmSkVhuSynFPtmAUx35sRXnLT12tikDnWSQNxeEud",
  "key25": "3uES2vJ2yxzxWd7xSpyXtRYPjA2HuVFXq6tyVpuiZid3fLkzkB1qrGTrATXJDJatnvVRgbQuy2LN76uYJExnJoN5",
  "key26": "2PbgJyGGdMDpGfqGw3CZotXEQQV31VnkJHw11GBvZqynHj7fkNRUpFg7CvnxXbf8refApkGgMYVoT9sCUrTyArTf",
  "key27": "2Jx8EyiZ1b3xs5pSiiBACgBuYawMyo3YwrCbXhsjgqwMrEFshRbwX5yoMo7qds9uPsbXQoZTBT3o2D7yjqo5xeyZ",
  "key28": "uTJVfESHHKT3ARYBvDFt5pymtJfFu4cJk1m52ggRxGx4mkERQQs4NuUUATK1ctdNf7xLycpS5MdVZdernstsWdR",
  "key29": "328Nc6h7Y1JbTQeXzzx27bnbhA2tnUu3Mi81n4rEkzzTXPZaannnehhkwJ5V2HFZmhvokCBPFs11gpTctBPYCEBK",
  "key30": "3AzCjJENLWa3XW9yHmqUGxpvriXyRKXCauDYNRtxhQHWn5dbfwjU5Xmxcr9Fz4vLR4MoEAcRsEX9fYQGXe4KNgGg",
  "key31": "3sSd8LwgX1TDnncLgaQFXbEJL6EB1pvr3d6963v2fDJQtvof6oFBfqjZSCKrnvnXdRYQV9caxYYv6hi9P9tcL6et",
  "key32": "2FtacASeRrSWXUuG7MJW9xgZpK9d6BpfTs9V8MS6dFRNWQFKWver3TKR65694uJ7c4tGFp2Euo5RbCgZSzYBcLEB",
  "key33": "35tECCgGh1NgdrmqkfU4qR4Ban8iDVcGSiPunFkPVFc4dgvUjPC9QvaHzYSBwTyBZwPseBqSGKm7EK83g9Lstjd2",
  "key34": "UQLmeP1JqxEZrMXSCUBJnz1YLxHs9P1hDRN7kiuZfcTB6EBrYDPcAanLpwrZX1RV79yUwUaSv7EJ7PkGBV5HPue",
  "key35": "VNEW5Ri6dzejJ8658qjRrfEi1hPUeHX84vafhM9fgvoPsKck88YG3CirivbD1siH43XURTrugoCdRawTZEtFoUh",
  "key36": "5jY2tT592Rc9CbRDV2j4cCBEjWiuTyBeGWhYkE8qkksf7QKhK2hvze3fpnsXT3bFcJhTdp7W5rJVxj3DGPHsLQHC",
  "key37": "3diEJGqevYQd3NL1Ah6WBPRzKCJT8HVABB8tNATEX7kyf4rn4VEmTgjRdi6dpUBqQ7zeir9BEBT1S1y95TvZ2Kv3",
  "key38": "46hQqDfw3KvWRvtBoPMWZPbi79beqLidRMf1f55ZcRWQQCvmv4bjAuvq6btcYiCi9gguNncHpTtD2hVc76FkijvD"
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
