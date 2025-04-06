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
    "5Lgzna9CEDTFuLAuxSNTUvYFu4jTeN6uWYkxusDJ7A5w8x5wKzGDuCG9MQWZXufuYNm12qTQJMGiCSuFp9q7jmVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s3pGHP9BqPesT4ZgUS4YGPAKDCsc7v2jtva3YUErYDhAuZnzPGuCLwZxpTexyVMTBD4aHbwUs2LbK8zNXz5xGRt",
  "key1": "3z7becHkPte7NEPCNgKVFuuVvpaHzp3mFmediaPDDkJBsMYnTfYTE5qybdi5eUE33TTLHjZBStreWukq7w6gpeVd",
  "key2": "3bNoBp9nKa1tNC1cZBqCPJyUD9Udpfdr8V2ANCuMM472KHayuectPxTW6uhUaFxYcrRGPBwSFxPToF7S6hzzMR7V",
  "key3": "59L7MfNGocTcgoJ6RKcFJxKqhiUFB2PR7fXUw8c97tfheZ264mYw7hfpeC6uzKBYmRL6bjD71YNMgSQkALdywd2q",
  "key4": "39pdr4aCiHTit3DnDZ7MACbXzK3Ks4KLo94PvuH4tQDYDfTUyvmRbWUuNokwGrRe6euR286j3MN9VMR43W7EACuV",
  "key5": "5FvG9nQAJkrhfwj5oDnDChyTK8b6nnQt2G3Wo3pNtzzTrVhqH5xQQ14M2MSoMVurTMybe35Pk2Ys4ZnVei5VJ873",
  "key6": "4oqM53QcvYRFFEcu81WzWBP9YiqJJDPKfNaohKFJ4ULjNvwyRDvjycSLJYuxtbdqyZWC1eX1dQPWjYPF8veJoNJe",
  "key7": "3c89j77GFwgWNjXHMXYorfydisoPoYSppLZMyy7qK6jEmjACCQZkWmHkxD84T4VNX7bm5MepfTMuugb7skxX7y6g",
  "key8": "2aW6DkYmHW5ue4YueUeM5nqZLGCgQ2aLd4rdoJfhqK49nCw9u8fWEdWiVEo5EnV6tx4Bk2A5HMtE69bEcxvhKZHN",
  "key9": "4iyuJ4o5ULa8S7xgwBeiRkbyzuTbiS8vmASmsMghGXdY9DhnXkzEwgT63sMG19giWGcw3Jd9RcWyx7S53D7hSAQk",
  "key10": "3aGNsruKXPP1fxRU4CQeEpcpykC9UZvzwtiNNG9ZjaMVBCRqcDB5tSMZ1mD4yvhgHa86bs8se8YaJwhe5gmkp7eV",
  "key11": "3reMriPYbG5e5TSQsF4QsWp3ktr9ViLymqeyiWUhtMZ6ZpdKhmrK4WfitSopxupgkX6EV8fc97S9yVtUDyHv35B5",
  "key12": "4L3WoJ1RdasnrxzAcHQEbXtpG7SFfa3M16JrXoxpuDkscwz8qcFCJ9xc7yV6ppiauWbWwaAMqWpq5ojpL6nEz6GR",
  "key13": "655Ljm9WV2xxUHb93J4F6Sj41DKxhEQCvFTPRFmus7ZkRAHUvYUL3KU7Bcb3LYbTiuRMsNHUVZA8FnUAqJXvuv17",
  "key14": "Rf45cuQaBnp67v1hH5hmkcJPcVHo1SeMaXxgCjiDe2J1K3dVcSum84aaeqeU8obnjjyJmoKxJ6Dpg7iGAQNxPYk",
  "key15": "AabTdmEhB2oQLyHNpbzvm1VUPxPBNFu5hKrxi5KZcpXECwqaTrmrp3pk5XnHJRBG5m4x7rRxX6U25iFo1NEsgkm",
  "key16": "39Ge81JgfgQxR3ztEHSxiaDyP1yNsmGmkULsV9nTDjJwRP7dJESUAfYRDH8eTzhHADQZBqXa9NMarXakkjHvuFZo",
  "key17": "4Hb97fY27meRN6m4uGGdkBrrvbpDUMHvQ6E6he56mMYiPAmaz1ky2MK5TzjtDaHmncdNKhqtT7F74qcTRvDfyVZZ",
  "key18": "293SKzsmyee3S1pTDE9dm3WxWuuJurauYgXS8J8kXCQvpUdQvHCsSVxDw6qtBdwhzpk2oGJEWVsSKVEKjKza8YFq",
  "key19": "oNqFRHqTkV8qmNF489SQbjNd4hz1h1JxLjcxeCfNQDJo23Ts2a11LajnrPWfu4NcuvUwFXSKHoiZ8RzNEjoqmj6",
  "key20": "3DL8zbZ4kBKjQYcfjdYVUq1BLzgNKxRcfcbepxr46vbc9J8EqAmHfw6VS1Qm546HgLy5eA78Tpr9ka5KBnJ2CaaY",
  "key21": "2UWT9fZDHQvuBPUwhqH97sbUitVNJU4jC8RKnz3vS4PobG5SCDixrmGjkdsxUzkJFmxwe6uUrrwkKmd5f4GHAEAD",
  "key22": "4n67YkXFdFbRuryYDD75iv58Ziodm71cCKraAcg7zTKWH4D4ZN4AxPcqMD8onCTcokBX9qhVPdZmE2RR4RZpWoHj",
  "key23": "57eGn7KseZBj3ugtVmD6Vk73Xcx7EoKxVWkwAPcYx9XiPat7HwTbuuBBdZE5fb4r9Q4P4GDqGZtmeFPzgswgV6D1",
  "key24": "5L9z674ebxrdhNA6aeXaixLzKP2ejYAJHdGbvbDdzdFCS7FsbsmdtrHHmvPmVb4ABDYBwSA5wd2sR9Y5cmBSbe9v",
  "key25": "6vjzmEfHanxJ7m5yenQJfdyPmvjE572FeMVzLm4SQydbophHseid28oPShEaY9s4LbkquNRzQ8LASg1NFUJNfdb",
  "key26": "3kzLUGx8R3Y1gq7DK7WLqHVGgeG1MARTE8asXubDdBHjwPwwkkF8YM2fbi6FrJcRGPBBQvKKDPVwmJL2M9ozKqCS",
  "key27": "qKB9AwsHyK4S1SkgAbEZt1njpkndHffoiySDhvDVe6ykjx47xXHeoxAUCeiZVFLJhvEfo4LNZNiLDeXGL5ephZ8",
  "key28": "47jECszJnwxcHipTHCoTmfwpbLBNbXVQnV1kDkQexyEwUvzqV9HzEzZdJ3PXhsrYGfnv6bu6NEXLGSKNAqYbGzS5",
  "key29": "CRfVcgmJMew5T7ZCFFDYShaP6zzkGPYNqCvkdAP69nakqA4Hv1gcKgY3vrEDXTYmkXZ83xJxGZossEPTy43DmVm",
  "key30": "3eih7jKa7jZwyEVqHXQ4ZR9JgBqo6KPU9VFXiYWQ9z8CtbNyQij9FMjwzBkmMNxQTMfann3X9AYH1kdACsAeQXfk",
  "key31": "3Cqwon6Zg6NBMDr8Xzh9JzLRcWdaokP4BYDQBSYHcfDm8NVF8N8e6pbxNk4EtWrmXUe2dtmFqE3iWmkg8RJAkaxy",
  "key32": "25Euy8Q6QsBkhGuvi7oQwaSGTv8dPiMLKSiDEwgMTobDKwVNyeZFXA5TFCKgu5Ls3xQCZTjWZAmoYbiQmyKTVvxE",
  "key33": "3ukRy6RAytdZLVMfKARG3ZNnX2bvUP22KkukEBuUR8Qb32H2ry8eordaj9Gf7U61X74VkPTkEcUTRmxxY4KFq7ov",
  "key34": "3q358dF5RN6gBKYsJMmmjyFNedVzcLqYDEjMbojRq3nxwZnUXMYD1B51sqWmFH2LtCz4bisg9yzUuqTasw2pJ3kg",
  "key35": "23znjG8Bbegxdf32ohUd4f5VaYNxMmJWrHwPJZHRvmzvyWQ73Lowz83jG7Yqhpkycm69RbGRpBAtBYTrUpN8c794",
  "key36": "Xa5RSiWcsLHz6EoNDNqXSF5s2WnGjxfYHpcaNKGdUvc7k7FD9pUnahN6sGd5Fas9MCemoyXVt8R9sYznV6Bf2rh",
  "key37": "2neBHkyYkfQatii4zTxwCmQZkZQEQNcF5QgYv4pvHKdsCMRUNwZyEMCCoxvoNFGLXqBKEHZUYxH1wgbbm3KTbaJs"
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
