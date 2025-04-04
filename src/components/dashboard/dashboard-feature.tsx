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
    "4hfMLWV1yBn6ZEziMHrQLRmoGdr2P3YQ4Z8K2yCYy1Q1Pd1UWJAxyzorJD65yu4rV5r2GrbjS93JbW7Kh4os5h73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dvM1iKHVHja619ziopve5ssLtCtZstYC1HqZWzzxC1xq29ARVrPcPu2cggGn2vWttySB6TF5MJAcPDywWP4Ar6",
  "key1": "2MPmHcR58VWfAsv5fkcXgN2xCHPPzKFKt6EF9ms5Y8XyTDodrZyiLi4AuV4Qx5wbjJCYYCem1eHYgUbUNUchYcbr",
  "key2": "7kEuzGGC6ZPx1FLkbwhKLrwNmpbS49rTmd6h7JvJHhCYdw8LLwpxoTDtmn8FPVW8o925ctmwjHX5sBYrYKo8wkT",
  "key3": "3fNvdFVRnrK1TAHKGKup2obFEF8jSwrbtJnySgHEbNtEuPLVyVXUNBugVZoJrQtFbW5DDeesuUzjPcnSJuf6SwST",
  "key4": "wtiC5hSdXPi9eNbQhtTayNrj28zKreFxkqfVTrHmd9K4i4LhAEm3jjW9iCAHPMhvMBcYZhoMDAM5yYxYvikuNhT",
  "key5": "2MQfBdN2Wnf2MMVk3iiPvTPm1V4fsBUsbNRvfq7hTUoLrgBex34j1G6gir7tYq7Xv4h49zvpCU7c9Z3roEXoDKu7",
  "key6": "5sLtjwjBGayzrkwkqfWnB19HiECfrhyZVGVNT4zuvetTJgmvmpiRudSUz9Q11zEm1ygexp2eMvsSxCSq7kSERZxZ",
  "key7": "2e3ZQFtstEKMEC5TEQWLeHFNejANuQ6UR4YX9aSz7jw5qkJsTHr6wF5A9j6Edpfv9k2AEbxG15tHhiAkoKEYbQfs",
  "key8": "2emrsgMBRPNJmXxr74H5LeoXUXQ7fXyyBZtfRgzzoLV2Cp6dF5xEAmXkDUdaVLgGLuEpFdrTDVKLhQtWBBwPPSn7",
  "key9": "5JicQUJ8vR8JQUnMgq5mMggfGSJmBnzkpGCDf7ZBojgk1trKdnBo4mt3UadjgaFxw9AnrdkWSe5XbtwUWUPESzzw",
  "key10": "3RnLNpkVb5GcVoMxjQMyUP2VJhufbmm6r7edSn46TNSmVRj2qJcqVnsp9jLFSsxwrUFVtjqt2YSZZSGVsKnXdnW8",
  "key11": "3PCnfQxpTeSy9EiDNRUy8jknLZzznGP3hQJqupJykYHcZZrxseLy4gMgFr2r1oMwCNTNE14m6rD32WuEUMC5ozoz",
  "key12": "3h7RMJRuTM1CvW2sFjRbNTC4dnfUrLq3UCcka5S6igH1cdMXKapKjwqF7nzKNmD5A4ADBsdZs9MeXW1ULJdFBn1K",
  "key13": "2kZsySZmmqMmr3AhVFyVmZna2fB5KVkqBNqjhQ3xRLqufw1C9Nmjr98FVUYXdPz3WWfobwqFJh56f8T1mHb4vVzA",
  "key14": "4GRkLL8a3p9NBqm3LyjXz3b3ysZLyRAXnw9UR1C1XNT32uAKHpES6FsW2Uv3WPHxT2tVXAXnPvX13KDLBREBWKAR",
  "key15": "4gSuJKKPBUcGRWwHyvpme3cArkDkYhiYX24E91vAVvuxcQ5uhhx3TEsMUtuPCmatusqpMR2dYGrsSsCSuiGoK6Rj",
  "key16": "5nWQFqRt4om5Bc6LbjWpzkZrefmeeFSXcoAqPkCXg5aXE87MQqNbLGKVMk7gJ6EDpxjMjrUstoegTq9Kudya2JPv",
  "key17": "xqkCFnyJcgVfzAbxhGvWobNiAPiwvcGbhKeaJMHKTSmsddW7VRDryyHuHx6EY16MkuPogZSE9tAUWu8gPn2VUvY",
  "key18": "2fsA8nAd2C2KnaeFgcvfgvYFjBrR65spG2FEE74NKEyxQMKmtKbyJvLJtDHohaynw7CmosNMNZY6MjuGuSudNu9k",
  "key19": "4Sk61y9grvWed99A98KAG8Ph3PL58sf4p1zm9iPHEiMK4jkc7VMnNHU54cKDH37hL49htvRagjaYNK1DgYfwwY3r",
  "key20": "2ZZePUF5KNDWRE3MQsQZjeaLwL4zRCK1QBHyt1oVAH7G2dbhoWby8GKjoKPjY3x3d8tSmSb5j8wTvpC9uvaAMWgj",
  "key21": "sChGq2JU6VTs5KbvXF4GucuU7tYNSABQ38bm5Prs7LdrdyDxvPGr2oE6nN4PFPh8Uvk99kewWvDPspFmm4jytJh",
  "key22": "2793gFWCmhHHynyHoNJgjZxQMHfC32SUsFh3b93C3wgLRDoyF7FeXFg9Rz9XaKjkpJLGRamRSF8o4SiVVrZyRKPs",
  "key23": "4M2dnrvVUyNtjY6MbJk7htqVWa94XKJqFFdRnr6w4ZVNXWs7UWvA5qup2YyKD5cPj4d3cvtV5KmS6mknLqiL4f1F",
  "key24": "4Vb1zh8sWobTRxqcTK3tV1GEQRrKgsGCHo4vNjdNgh148zRtSq2ZeQYchmoDWFgdifhrwhchdvNwe68WUMsrk9XS",
  "key25": "qEudA5Mkecx8GbP6w5CJcd5tLMLqCUefZc3qekBFeMzQiy8ELjtfTPmTpjjpU3nr5qHm2Jsn7zCjegey9py9oBC",
  "key26": "33Ci9LkWhUTKqPdsRdiWT7GvhPokGnTuEQss3KAF7dsSj443LUfpbiUCwvrfRrPDhxy3sZyERqstLFKcLyvEDZoN",
  "key27": "9yMAeUG2XM7rhHTMFbMqAyfRq8eVwTUKfHeGJdhoXsU28mbvPuvUJAuzcuFtCJG6HYrMmzo4yXPdVsdfetBAg51",
  "key28": "VNUiyARxxLLQhSuSb73tPrk3JQiTDy87ZZmekdakv1dAXGg2EY8jGTnPdqDMTZGpQ66YzS8raUgKikkCDWXSkeo",
  "key29": "44PV13b81CxPCctnzMdP4NTFkosK2V6Y8PhmjUoRw9Zyu7Z8wyMYqKE8qDkXbBDY3hKYXmHWCqYftRtq9k83kp9d",
  "key30": "3TWEVMYqPMaNGuse3VN5jMvvPMbqmEdrYHUcaapcYz9YaVgUEtr5oKYqE2fvr2nv8t67Fk168Brw51isXXNve1MB",
  "key31": "3R6iyRbxjPmYFKX2zeZRj4csDjRU2bmg2sMVeTFGbFGLpaVEBnnhheiD9dNncNgqTGLhxYkDShNLGoYSRD4s666s",
  "key32": "62baz6qGNymqusVvBAhJaZF99vQsGfY1zujeB59so2mYnCJYogWbd7dwhRR4z9wh8TuZPWWxHqbgh5qy7srYsosv",
  "key33": "A4AfqwJGVktGmWVrATCdqwCzvZw7S8hscqK29m4nmtqbeMApC3PrxqvsBjhm58kRJj4yRJdVEpk8sBtzDPurc9J",
  "key34": "pxmvcKLjpAYuR4dTvQ1ktmHUqVfUE5fZAPoM9VF2HfPT14nwEVt4RWpRdjLyYpgyZSm8wbbFjHhTLbry68eh39q",
  "key35": "2V2sALGEyUFNYH9TbPMPVncBvdmhQgp2BGARmx8n65f28rSaJkR6UDAUyCnVcrkZPWE4Ts2qxxCSpXr5L8aabdAR",
  "key36": "4jC3ufHQ82N4NDUJZpQp1vE3Ki1jVFLxPsTZMzn876mGospqZxXQxAXb8LtrihUZsMuP3pSrDgakABYorHugwKJQ",
  "key37": "286rrmBcegHS4peMKA9QQBcZUcTxWfQK4RfpYvFs5fZhxrVpF7cb6wACrqXx9B9U9q6xYeJC8Hy1dyVriGhYiFKA",
  "key38": "5yZJk2WPwTZNCnWb7y3kpdDysSQxEG2CRJdpNzEEh1nqEoXHGbK3X8HcHZBaUV3TgUnwcbXsjG5GAr9ciTKxJpWp",
  "key39": "4WCCqrtF7wzvY7Z3VGCFJhHarZ1k3krrykiVgkWZ6tnwCfqoZjAC9ATgpQrm4u7VKMF9aTqCPiKaZczk8uJbttRE",
  "key40": "2onBEcRZG2yqSpg84r4ywsTZUhv9hrmAb5pYk32V9DF58pJqmwewyW8YRmL99KEQZ2s7EThgTZABJKxfuDVBb4vy",
  "key41": "3xNjVbZDBdWQ9sueUFGuFzyd8xsaLjcrVWgUpTSmanUXMQ2bwazgRLHWwRo1kWrHy2ZjKDW1yFcUHS8yqW2gRPvk"
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
