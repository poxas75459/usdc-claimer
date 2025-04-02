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
    "5dPBT71Z85xcUh87o4PQyTD5p8RPx72pTqSL2WDK8kvPq3Scm5o6fvajCaHpRcWjxGwor2bobpZ7dqdkn6YykQrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xot1KNbf7dV6JeXRYJWEBzKDJbavr6PCCNGNjk15rfHxSJyvnLrhLVQ8s77DTBGud6ZFoobPRjZmxZ3PrqdX8dz",
  "key1": "4GhNoxtakX1or5tEUsfG6EZXHhzvYDD6AX82ebMgT5F9ggpKt6qPybaazRZZa2MpUbY1EbwMMWgkQTLDjyPtBUpr",
  "key2": "2GFHae2xRMwTr9zMFtffDYzw32TJEavdtSMN1ubJYu3RByZG8P67esCL1dyqLLpxEC2vjBcY65iFYqDGtiSrsUes",
  "key3": "24EZrBCUfUY34M7WegGhcTnu2HCGLMvAKzoxeJ9opSU4mLT8trSPkGRsGqwWAVqLnyWxrB6dPMSNoai4Ejtcb9Gi",
  "key4": "4ZXt9CLjt39oWqdGDGiXb3yLeN34dFyAuEAdCg9voVj7LJNT4cn6Mr1avtBDRZUFdq28Hr5xX2qfyFLFcEiBkRhn",
  "key5": "2AuSzHe8kY1aho7JG262krSC6K5REZv8qjrhrE8K5TX2RLNSquxDaZKKWCBnevj9hep6nq79br334EKZELob38sz",
  "key6": "2cRgEFspvBvCPgzEXPC4ZU99JWQqGyhzhpmsMgerBigvWza8C9FX4zQohWjx66AEzBJfpgXBDQJ8uKGL5nCHpQ2Z",
  "key7": "5LZXsqgBCV7ztJYwbUFssdtTuCg8Lsp8S4zdfbp2XgKt1GgFgwWZ3pAmEgL3oHoYvfoMWUMmHZWX9qByDVxABVMs",
  "key8": "2Hq1CBciKwALBbmXVJUqngBQUfnjPwhSJNWHtrjE9akZLfGcDhsRHuD8ubHPPCykW3AUSCVcu6kqiaAtoiyvBc4Q",
  "key9": "3C1LkuML6wKpap4mAp92w7jmtAmBX2TmbeZqdwosPR17KWsZCjEZPs1njvkLg1RvDd2S1CzaRgTHGujqB6D6DqNv",
  "key10": "3MaAU7t1yiiLeHoevnk7wNjB9gkiDb1vpXP9X1fJroVfzaE2qziZCzexikCbKDD7uJfretQiNi6hNRfA7C4JpYqu",
  "key11": "mqJTLDhN5GRWpzkEPmCYfS8KALPn4hgwy73XTYvdqtzfguwFTJH4GQP97U3SJv2XdokdNgiyG7ATPnAQttz24BX",
  "key12": "3watSD1KFpe4V3vKvh1iEzawdPNgJ2jSfbF9XyQyaX16T12t445MyeYb74ZueBABN7C9QkdsLYZcnnFF6gm1WGzm",
  "key13": "UmXHgn3oX7oZD2GJLnQn1MJQer7RZL5NowARMjx4Uqv8oLAMsVP6bxMT7VLFC3fMCYTVXEL6G8LQHxuvDAaWbvz",
  "key14": "5557CQEZSCHYJbq7YhwGWuDAjq9xLngF9EnSLqR7AwHea7UfuYkQPZ2RGpLcKHc3Xp4EFSHwsEscVvNqaTYT6me9",
  "key15": "5vkfmKKUFyz2E4UiGMB3njtV62mzZqhpZ22dv6FgLpxC5oqtTxkKgXfkkMNJBEGfJ9VU1fgBM2c6rDKoxkP9XfkN",
  "key16": "2i9GfgC7iAtSKsvC2pSyZgP5iL9JxFLEtUQhonQdENsTqDZNn8nDG6EqXHg8HuLSL6moE8m1xd5C6EvHLJFjQWwc",
  "key17": "5c2DXQ26K5VpeDUVo4LNUWQdYsHpizZWii8PeZkCa6cGNf9tArc9AEsaeWYTMNLMnjPRkzmu5fUVwBhDMj5fiv9A",
  "key18": "BC1mb2ErTsRaJh4Nxjs5BSLkpKq9ogDmbKhXpk6ZqBQdHL3hGbQ4nRuYQpgYWp4j4LCQ9iNRiFDJZL8E8wEJbSC",
  "key19": "4FkkJ4ysM1Wj5CCANwYxYdhdJghZUWSqVGYgKagtvpAMYPchBm6FYua1Hwn2fh3MyL2gfYmpFPm3HiRzJf4GQNpm",
  "key20": "4cs9ueSG6o8eayNGtY4ntiRSayUXsQoGFC8hT3kfAXZb1sBRXV3E7mzX2GZFtA1BMivVCa6fw7eMzzDw7DY3aJks",
  "key21": "4mKqGPxRT6fVrgkRiLGTG6pwwGm3XrGTaHDqHn3As3R34JC9BWVLP5v1DQBKojixEbn3VreBaGrv9u8Pe81gkCB7",
  "key22": "3fC3WfpKP8U5A6mSxJWojMmrRqiPoN5fXpJLvEBjyVfJrVhTourMKoPP3gqP1xrhMicPwwZCbgFME8hFmDtykUvD",
  "key23": "3j44ohXduDNkkMXtvxcJZ5Cwbbm7Q61v3mUsZvEgMa2adHcXvji2XPebkKBedVf3VHzuD8z2JuAiKte9tzUZpufp",
  "key24": "2PXWbyhu67JBgzLyD6JptanT7Lg51sC3F2B4B5qvhbnsfPfGHJ9VH4PMjjQsyM8JVAywZo5eqZngG696ErwePSD1",
  "key25": "2i7CxrTL5HN9fxKdp6xGbAAbtV4woiimA5AzA5Btqtep61eJwVbhEvzubAoxyJ9WdXPsorzXnoiCix9A1gh7cn1n",
  "key26": "oH64jeqKro4gHbtRijgZjgttqoatNCwLd18nX4zpSg6aw39KHMUkp23kc5xm1xPDYPGoDskeWdQpvaao9Xj9Zb6",
  "key27": "k5QYaTJ6X9Et8y2CMa5J8Lq71xxUzUHwtLJYvQ3m5Xfg3tocdvKcht1UAvSDtqB6BrW7cNwP7Dz4FRxnRRMbTm6",
  "key28": "5Hi4tiSFAzXD69haXHbcQYi6p1twvZC8KzdMKxbT5CnFZMpxVEgBamrMUWYvWJi3r7G54BFFFVa55b3AHsHVr5MG",
  "key29": "32jaBtkmRAy4HbANaLgcFVR5b98WWgghTBazwMFMQNCW9h2NwDZ9NjdXPZTBdFhRiaJpedgv9xpVXWJHS8vfSPMm",
  "key30": "4dZyiT3tbgXcGa9ZhwjYweB9dbZZbaGSgEBPVCWYDTmWAqVCRXkWbr7yCQZL8koPT3bukuiYhLYuWj3vsihoTFt2",
  "key31": "5S4oQTsBQR4VQddn1a6nNikzn4Nmr9LUSpwaoPDtbetcpmoNRmU5pMqFTKPSh8JENaqcMQPaJGk4CQqXcj3XNgYM",
  "key32": "sSFRezbAxW4yn3Fbd54JGnU7ab8LZh4AHbg4hUUVfTEgXfi37C6cEzEiF97F2gMdZ9tDdydF4vaRAmYyR5LSasM",
  "key33": "44EPGEEooTW2y79DRBmqnxA4ed6kUroAeuC1BGy2akFiF6RD8T1uTN71sJnr4gP1z6CpYXswZEFtDmJM8FVssUQo",
  "key34": "2LnUSc86M8L55Dswu9ffiE95NddUScTjQQUa79wS9Enx7HWAGTAUSg9kmvj1j8EfsZUj8eY51RprnKr4Jjca31NW",
  "key35": "5awDr42rsZmriM5xggVwNL6MZ4juotLHkt79a9XpNdGVHovTioDsz9HjT96J8yneSGY4ukC4jhMr2wXPdcrnTm3k",
  "key36": "3g4NExVkjrQtvPsvdac9NNMYUHjoHpi6t862gxRgSkPYD15R4r92kUgLQutyH8TUbJWZhVN1Pab7w6yYRrSt9SNP",
  "key37": "5ijTm8chedKN4DnejpmKfDVpL9BeuQhdE9bwybefrF7p3cVPsEQuNGSuwCzFij7SfJiegaVE6GzRJ9NtCewYr6nX",
  "key38": "3LZV6JyAwhK5Auk3koeULoLc88hjkdjZt6AMTXU97riHzeqFJsPZGxzRMwwbMykogXiK6bpqUa7qdQkUHp2z2M8y",
  "key39": "2mETBqo56YD6JmQZJqEaDbNRPB1UnQ6GoUasPixvVjfSt7VoxzLXRu3FgHpKmDSUjT7jgCQXpE1cj8Dh7hfu6m16",
  "key40": "656nrNp2ejoZMU6VjG6xRGcJTkKA3yHeHzRWwp6miH2hrVysrmWvZhWBjVBscUbe3XZEdFGbYErHTunThhadwwU3",
  "key41": "4mdpo6JtTzxU8dfyhRv2R3VWt5zwdzpiASUJ7tbrUXgb5kgPPpoa9H6cpDVj8uR8BEfedip3S54QmbEFUXm1wc6c",
  "key42": "3yhhMqonjRRP81Tu1sr6qa3AgLAXixg4BT4x63wCxyaiypRj1erisvyyXDhw5quMmQL5japno8ippcRTcCHpsnCc",
  "key43": "2NZ3nG5QJJZbYqbRwGTgqDSutbUgNfnPuuLb7jMTZCSoz8qWubDdjAhtjLMX1GCk4L13c68BKXDjiWZFr8owGqMm",
  "key44": "3T9DRiHrDRmw2cCvReKbj4qTniVq1sDE6ajKHytDDwrM6Rs3BBiHd9YpuK5KpNjM69fPn8xuJTVj8ScHdK1K16A3",
  "key45": "4ghMXsWAf3LxKt8jBodLitHDMqLGHB25dTkK8841fRkXt2dVvevhkVntvZXG2HX71pgKFU3QjGYaD7f9WnD5JcZQ",
  "key46": "5pik9KxWSuua5SZyxDdLuAKDgxazF75Gui3RNe2vNrRcVzt4CSdkHSaXDefKTXfMg6fjvAn76LSJnnjtzPVh18HA",
  "key47": "5yaBAAHxnE3GBLa4UqR7abXudMbtixgzojVWNiJA5SazUZ5K8XTiwfDpadfvWs8LGeGxNYRBjsh5cV8tveMjCkgP",
  "key48": "2bvJwTAEACsh6ACfwPNqosd6RViihf2GYnRSq19AdiN1HbTvdDMwrTDKWncp2UerHzVFPKUAvZBjya5sVWvUsyC3",
  "key49": "2mfkSGbq6fhMECRYKFhnaNVTdbqiVttwy5ugrW2x8WnPgYuDRnUQWNL9aukvUVgnh3zZXSrknuB7nXfG7aWsmZPq"
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
