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
    "4pVKwL2jCDKnSi3RHfkSBSbjteqFemktHnig8qwZ7E19YSTTQVd4QCBHY54KhGdvWJpTpS69jo7meVjqFFzrxPs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XqMo363KKkWPJmWdF4AVU9pg5xvfdEj9Au8j5FdAqucSyJ45rCx29h66pj9RuD3YhUjR2P4x97UkB1S7vgYwrPH",
  "key1": "45QQtfjcCfWR7TheBh9LGbsPmMG2VfVBdLqYMWzCTXCVTcKWDZgm1FLwjkZwaApkRmMKSokdKih8a9sDLAVcWoyy",
  "key2": "NyCGmmLGMKL4114akhw6QduNdG4gB6SiXAqWPna7cdHkn2Qya6WCuaYALttnnRD55eiKsJTBQ6qp9V2UmoGzvnq",
  "key3": "5Qg9ATwcd4iYd9DPDPKKJfKf3KxGLGo9m2yzNnNVpXvaj1UdswfcTjBCqh5tXkz92u6Natd9p3hFYcE8N4z3Tdct",
  "key4": "4M5rMv6u96eZ5h8tvYpxPmRB7W6wtEgcKyypNKnuECEFm83eysnTL7wDVSLp4hXGVnuGwrdzg68fuDFAV11bPZQk",
  "key5": "45TegS2VCfmSr8gN9ynpJYoFsymfu6ZzffFobtDw1CKXXgDoeFjd9FvHg5TUKYGKm34EmUmrz7KPmLbncFMeJTkB",
  "key6": "2WaeJtpCtR9JA53iTqcP6YKL9kwvS4NP1faWTdscCbW22GwSPPBCLk8XavnhhswxXb8GKgMjyxgcuNRC4Cwmxv8R",
  "key7": "5sYKCPT5gP396EBesNK8PoufeFLtZonDJZMEnSzbGwHtLsCBnh8bQTkgzrAcKL6sS8LUk69VmhhGspEXm94euDVi",
  "key8": "D5s3yq6RL1uL793TEpyxkg6HHUeqGX4YJnDopEiyY81NF3DW2gBbwXAnKG5nkufsoLrvUUC4hgj53jzeCibVCbo",
  "key9": "5uaa28zQRAmEMZ62aVACvB6VkaykfHs1QqHdgtMt3A2KnYsuc9sqrJReyjagSa5pZMXSNn827peXQZPou3X6nNas",
  "key10": "4X8ErKVFMncnR6kZ4u85RMJsx8mhhiPCeakS5UTT7pnKcgtQN3k6FgbMRtZGsYYyNX8YuQ12vNvqu6YcDPkzNPfw",
  "key11": "2EDMdcrBpjYZxHBQEkqxAKAFu8TXCU2XGxhp5rbz5fdwbMszaFe8rPT98SVa5FAotJ6YpuxDfTnXg2ZzFu68iNMC",
  "key12": "2D64CRSSn9Zg8XT77UHirSsXsGKseZD7GdYPiPWKH2SHbkVMfeub9S2qyt7PGnSAeKaMdqWQqX64gwwghndvqNLG",
  "key13": "Jp5m3cwsP7pEydDvXLGkiKY73L5dkTWWErReUBoGU4k9vVr5hDfCceDzQJ8kvDj4c2YcApeGQPthptWQZhnD587",
  "key14": "5gtBdPEGq7JKpPj1KvumaVjpeeWZv4tcjagrYZaFmZiW9NdrhchTtRzqgvqGZHcpvASCQeJBnffqyTtQe5s6Y3NH",
  "key15": "3244RZ75QS1rA2LW7AhWAwSJMMJZ77fwu5AKySu13eQcSd6t7jujJGxqi6ePnWTY193ZwNwyfDBe6r8NnspeACJM",
  "key16": "33KE6FvVqhvJ3jG2u9J3QoAMaN8KLmYfiU57MLPThrZ6dtTzu1BwgwczLTGGtoLGDYth88oChgF4MYWtGh9RxYB1",
  "key17": "UpY21QhRzHUGWG4tni7Cr1rMszsugnyxwX55epVv4z1CFoQ9xTNG34Vg2RGnyigjjEKcCWxqmiYTkqKuj6KwGw6",
  "key18": "5VEdSkNvz3yq1MqfGLykeVAnwH1fuZLQEXfnnsyvbixdZkmj1b1BfXQSrvUsxxV7qAc2cWi8R5ubHdiwhFussyQz",
  "key19": "3DZF2gJdx9NedAPA4EKxSLjFSfyc5dCj8JjrsiXnN4qxpHrmcgCAuPW2rQ86P1AwkjHKK8sLGrQFURPpUknXqnmS",
  "key20": "NCCFAdAYwvAjMxSZ2PuTJntKAvh9LQsFsxV5dNPZcSaoDv7cRPtN6p6iVhhLPf4pvmUHnhfBHFCgoK5Y2wqK8RP",
  "key21": "3TsWxsq1LbBJZh9GRTuFw7XShhKjKB3K6A6UAmi7EdfyaBsXM7wTpkszBKuzsJSVpM9ufeyY95LC3GWUSoZe956G",
  "key22": "5AWym4hXVzX7DVjmf1rrQwxR4qjhZLBtMKTuf8bHcFaDuAH6iiiswCtX1DVLTL9R35TqhzzWRpJQzp8vvbj7jBvy",
  "key23": "2gZ3LqAZTu6sbAKShx8y2MRdPJgi2syjLnYiwakxxm17Lb5Cxx6Um35P5EnZs6rTJ911p8MwCtTyqx4jLj2dsp7t",
  "key24": "3BeoX2CfvddqekaNroQrE5c6d51Kc96Hw9rfsCaJmv2yrbrpA4TkzQvjbtUXnp58zThZyhUWY6b1s8aiVVG2GZTM",
  "key25": "2yF9AHq9RJb9dgC7Mz7XPH7x3YKTqwPNX7jLkt6cV4qhXNSCSLoPM5TbXtyGJhwou1ebbPWuMAREZvRKEDjwHcFJ",
  "key26": "5yuj8K6SfmAJWbFnPEeCMv2EHWsLorTs4CiHs2uXYgR67CXoSErSdpmW2EUyNU9RitZakKBjPs6ojTFToUApkSAS",
  "key27": "3vVRfAqFa4xm7Mb3dbm9i6oLYLJXN3Zv7XEj1CWFdEUmomh2F8rm5T9VcPDLL1y9oXmJS1M4rez2x34Nh2HeDpTe",
  "key28": "82fNVwkbASc6ihuywEf3MHP9o5RVSFyFwsUcd1SzxfTxzE91rB4LgkMPTtv6s4Vf7gRAKavegwxq7DnWTcaeSWt",
  "key29": "3Q3xSgup83nbhQT2Dbhrk6S8C8q4Cufzt54K5FR63XzJiL1oYZGdq81K7quNw8eaiE4JZ62k7NN8oJ62ob1GpNkV",
  "key30": "5JEFqdWtixe8EYmxnqqfJnMMuyFwxqMUkZZusJVL4AE7s3WsZh4fre9xNpyTzYwRhyBNVH7UMk8grhiSWpp2minB",
  "key31": "2DwivkwVmioVuEv7PT4YBh1EBdpyh16xM4eg9w9NbCYP4YwUH3qNr3AbPjayHYy6NVki9gefdiZY73D816htmeFJ",
  "key32": "dLEQbN7EavxfpidY2iajsKsUzgDWXZHNMKiFCByGKFbsvYaZJKDRbJg444wzxA9esG3CvvAJCvAhdHVPzhGgKDT",
  "key33": "4eDfXAPL6M7XdHsRmUv2V9W9QKcrTGHu34zq38zVLgewvf61MjZWanoW3XpMqwyRSb9fePz9NvxtHWaTuRAZy37p",
  "key34": "2v5FoqtC4vX2SXYahQWiz2Q4BREYocJ2VtcijeyhzTzdpozLYKHWywi2hzuvuTBMQucxSFG7eTwg8f6M5cRDNvLA",
  "key35": "2djG5PtXhmeKc9LmirwukYq7J6q59L6ynt5eaZ3sDSrjVwLnQsGwXQxtydBuLjZzqbxX2ot6GbDZ9WMKygeaz9Gz"
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
