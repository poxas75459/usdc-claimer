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
    "3ft4NEPocsPRdbLu2AQD7cmGomDaStWxsAuGL4RYxdhMJgQtfm4AjGpt7BpRyUZ4VVubcuWo8nQL8ghCojhZBLbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9kmbUuqmYzoUia7KCdP3YWoFKcYzbBzZvYwDGW1wk2iywjF7z78WHEiGLhsKU5gWDwaoYNxMCgNRzHsbmbTCSn",
  "key1": "Li8HEUw7NiCVn4qQUDVJuVGxDJcZ62jadHk3516uVD4Jud8LmASNHbK6QnCfiutcn4mzu73M7Qq3LAEHiCZBzXx",
  "key2": "cgACcGHoRFN5MfVpPmS4D7fWrFe1nA86qUzyFRn6EWT2EeSBguAYXcBvLE96i8Tb2mTCPzMh4KsfvToR5UTq5ka",
  "key3": "ti29Yk97XgLVZKQmXZEoRrjyCYPN9nniYeYTSU4NJ8CP95Livj7N11JTBxZ5VnqnEVgxaDVUVa48TH4WDxAesvc",
  "key4": "4DS3nkThgP99BmfiTxXTzutm2VCmwKMPFHWb4z65oDpgnoKVzWy8F23xcpB8k54b4UgNe98pStj91RsmLap7S6m6",
  "key5": "3iqauPbaZEVdiZDnzaBC9TpbXgnuGreC5XT1vXD7J6G2qCrFwKQwPCwAgrSrNUifBi9yJyMnRqqHifwyrUP1Lx4w",
  "key6": "eM4wftRcheRQo1N2r6q7o9o6MJUgwtzLHkNCLGCiLpnGmxn6eHQAxy3hoL74eVSGLJXd7gqAoWraBgwEWL5vnYV",
  "key7": "393KuMitz1k2VA8EmRY9T7TsC7LavTmqzBsjg2AdzZA2yUxntXSDqz9TU1Xk4qykz3NWYmi2mG77xxHqzmC9Jzix",
  "key8": "fiPNdVRPvXcTPHoUrrJ9Z4PMjv3Sz7Cx6jWqWgVNtXwZQxVwUmB8ceWt2ZyCpyouYk8eV3KEde1XZQNKa3eB5mC",
  "key9": "64mJnu2NqJxBuFQmPPz7BnsGWFhckxmKAuBb2Dy4qB9Xjt1Zs1QKy8MujMabzR5SrNAhbvkkSix652GjzSwE1d53",
  "key10": "2Czh2cvKrN2ykZWMgroorz8Fia6n2avPdHW1GpKREAWQ4UavFSCctrCPfoA6eSM4vQAVFZb5gkdKp8T2bSwLHk8K",
  "key11": "23cRdZexnVk7wveFRf4yhoxtBmvbXv5d1xk9mVYJTSuMKGP5AfpfS72ztdatS6bYhc5NYTVKBSYba2FErrkKd8cx",
  "key12": "29cRcrYB8dBy65CmgBdQQtYdQjQUDfdjuE4L2Vpik9rJcwjbJBSNZkETFqj9JLK8w8uGsFDmCUkdR1SMdwRMFxEh",
  "key13": "4afd4MFCJacMpw6SKBX45fJLcE2ncdjaoyaGHzQSuJvrNrjGAtbp8WUpVSLKD6rgrsxcbLf7FTPKxE7Rkxz1RQUS",
  "key14": "4JjncywHWKjrrtHkLnhhJ7iiKF79JVcuEH4vF6R17x1prVmuvRQG2zeUv9jrurcMVUZKryuFQiR9pZ28wd68TpFk",
  "key15": "3xm9AzKLBXQmvuzEHwevR16rbVnFVCPBG7vm8Lt2PVhDPGp3SbWqJU1wSxfbr2MwiwLXWqRYENCwUv9qTzMKLwNV",
  "key16": "5y6sL2AHk1bQuFkHbhkSY2VEV7EKZdF546LHVMEJw6spjPGxXYj876PtQk7V5SfXASjwiPJ1BtdKCLadrprVd27M",
  "key17": "2HbpCtEFvMfjsJQyEms5h5ETxjBUHgK3Fwm5iCXKUgJKegneWzZaKDFoWZqEdC712iH4u1AcEEhD4E3U2VNjPgJX",
  "key18": "5FZ8xtHAccjNQK7MxqEMsFT3y64yCLD8S3gn2BRFQUzgxaJBfkbxtrBGP4VGuiR2X1XZTpuAfrzHQxuSazpLYzj1",
  "key19": "57P7vJ1V2rfqj66c6pkzN9JQh9UYYy3eMBvthLK49xvjEwAmbB3zSoUiQzVSuDyaPSPnUTXQig63n9i8QUg1YAH5",
  "key20": "2DBPYvgn58C347496iH6WoiGsGjzvmE1NH7dUHzgTyWjuUKhTj1t5w53hBALifAreGXgCupjav5hsxfdDBSCcp8U",
  "key21": "5SqUAZ4cQ7C2QenQS4nsQPfneWTm8U6dNmkkaZNH8obaWSh9MycMphfSsNCxefetqR4upiocHPxewzZ8RSYsuXnG",
  "key22": "62tnVVcAELhpx1XgCaEun5CT3KsYt6SPUfgtSnvSFY4CkLf5mm7SHXN4tdYnTZruFaUmxvtfehoc4BbSbLypGoiW",
  "key23": "2vTxSJBvVso3pCPjWFaE1dKUNvL2R4UfBgyoyBNmP3N2b1nGFB7U65DuVdBHW4uQRy6oGjrnYFYJnyqzxgzWNeQZ",
  "key24": "2w3hf3r2uFA8Myq54ermqdqoU9YyXpUkvmAbjhrP2cvAokPZi9fW5VjxveVEpTf5PvXuKxD2fUTawyU9SNSx3Nuh",
  "key25": "3nYYghygg5taLmoWk7cYEpacJoQzQsomtSVFkJanuvN58CuB3zxFS4dXMfzm6wcjcWcdj26Nt6rTPUPLDkvDD4pK",
  "key26": "4tfY5x8LvXPxeAAp2srKhhrKP5gtCq3EnFT6uFGVK32Z1MGNxcEVtjVaWaSjfCaDCu98HJagQuwc9tZxnZaG96w7",
  "key27": "L9vPgLTF3nTusLq5BMGu8d5Hd1Lp6mvn51Vfcbya4TVVSSwdX5Hz9xKbdCrcmd2ZZKMd9P1EDsqtn9vbSEzCK88",
  "key28": "4vSnpMfeu8DaHfXdeLRX5szFzNzmXUYahZS4uet8MwagRmtGj4Ja7kCDhrZo9kcqGxRQpn7thywkQaJpb1ueR7Tx",
  "key29": "2tKTX1oqtGoXfqn4rHt6nqKT4eBJriL6ueJVRsKnAQ487LHufqhZMpi51ZAQJrLgoHuxxzARz9WmvnU3M6b8Gux6",
  "key30": "3QVzjbn7UgsDRkysjjFLtiZdsAvJrzC3iYpicMnR2ynHTeiVJTMGL55iU9y7XdPfRYpi6t58pM7obyUKB7Gzz5Ni",
  "key31": "37YAvs1QYZwdv7uzYGsUKuCe6SkvGw7C4UNRE1fcGBiGGWq75pJrZhXdYP6puzMr6XFSyo3q4qZYoMkfaewMQ8rV",
  "key32": "ekwNedAHbCqpj4rm55295mbV8kM3YRncgyE5RnD2C7ZNDdszsRQQ7D2MEHsEHrYnbKgaPCB5kvuTWEig61BitXo",
  "key33": "2KDFE3VB1CRonhR1HZCZLrPrYKDcvmV4sZpEmurqmgzAstemCFrq44i9Pef5rZ4v1yDrhyXApcajfT3QjmCiXZvS",
  "key34": "5bREH2ALj4fy29gZTGqYUfd3swT5iXatREDX41iekmcE3RCSCuc1FG2AYtDEenAU3AkTrzCwtXxEmLtxvFZB1d9G",
  "key35": "4513WtRbKr17tKmSaXcuqTfFaKeqX6m1qKRH94fKUGriuDQgveeALN9HCPhvJm7DaYVAtW7CfDYCcmuK3g4Efbp2",
  "key36": "2U8SCVqfojHxRUeCmM9MjpLu1hqSPbeszSnV3rXeCG4ueSgPqC8Zs6RvaoUB76sUSmwZ1zm9UYm9Ruz5YJX7uMov",
  "key37": "jEQznjvShtT1KzgUod6gupNvpB2SpUiFP9hhieKriehXC4LbR1MqyefmKSDXYqSUV63f1jCgue937jLPvTcPtgk",
  "key38": "refmo9FjsesN6ZeaXRLE3Wy3wwUPFNKjbQRTqQeTzUdNSzoop3H6cyjLthXu45PnqUAoqcX7MBvRAzrHAHn9axN",
  "key39": "36M4gy7Gn7GitEevTL3gfUgFTpXKMtmi5VnNhmq3XMWehw2pbsYRuTuez9ksKHfHEfcPscqNyf4PEWXo3DnWFPxy",
  "key40": "2Ku5YYtyaK8SGJDge4dU7PS7uJEQA5xY4BQ3WjCFJwr5onSbyk5PbQGV17CFpQGdqr84mv3rr3UYZKcMQTYoNoW4",
  "key41": "4woVcGGT7ok8oXZ5nn7USLCaiVTLLef5HezgYNpezRUesrp1Jxpt1ukXS5tYwLk65XmMQs8q9wChtVoFi7ehNM3u",
  "key42": "5nAzwszNdcDQo1CZdTUkBJcEWqYL2FCfLA4FFKXtdvg3QmyHyw9Wm2MhySZmZsDtZcgEEsXLzYqBeXU7SNdzj5bh",
  "key43": "2uDpgJWGuF69E3cf1H5cEEsfrBCfbCUgZgdr5nAKWk9KGfAkFbBtRrsCTA1S9agPXS1o5MoXQYuDA6tdwvHSb1B2",
  "key44": "62pYjvyWWCYEo4mXisq4P22vcXFiRUJQdNBB1aomT8QZ8JGadrcmtJBrRydG8SyhRWYpL3EEMFXtZ88yLSu9HAp5",
  "key45": "24uqETVwEUUon1xuNBfzm6YAhKAPLg2Gb6VyhtraMaJyQ7AU9GY4R9ejkZ4BWJNSYcAWbSKTeL1C6ND5g7w5vwJz",
  "key46": "4tZWimKqopRCc6DJ1evzv5tsNL7eTSqvVJeQoro19CUY2TtsxoEXeSyzThDXBjXyCjtZr1vQjCQmQXn4fgLWp5jq",
  "key47": "3JgzgAWF3QXCYXdNfSdXkXmhUsNDv634uUhW8yFwyutmD5x4KsogAT7Xdaww4y3xP7LECdFiUFvrf6WLQZY8e7xr",
  "key48": "2r7kSENMEhspUKrWDLoPxYNGEmcccqyX7sT9AGyvJTvjxpoVLYc7qcY5xddKsGpHV6G521XFScnYv8zRLveRUZMH"
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
