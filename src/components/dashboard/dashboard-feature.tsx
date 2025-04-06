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
    "2qqozT64fzgeSG9miGzEpRBNXs5AE15aU2u16MZ6RhhR8DeSYx1tNw7siAxLJMJcMzkKDMjB2nsBfvKHZAiTU64s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BAEjasac8Q8oPTfMHadZ73SSAqzjB1M2LRJQjzPy3zNtB5YZB9XDQ28H3Ytv6bR5bwDgo3NCCqh1HQ6NkTieVSa",
  "key1": "645erigGCQZwAPQoiJmPEFhzExciYAAAiEoS5jr8FtP8bZLXsKwTMxsEMQYeoBSHToMWk6jkDByL1AkeLRpp393G",
  "key2": "5id7Xy4eupd8Ahce1oF2Te6sRuXedidHWVkn6JTKHJfjyuMyYr7Ub34wbdS9i18kg7TrMSY82ixvy562UCoAJdgw",
  "key3": "65yt6CBedbWfkFRAVH6dGJkpCxCu5zR4XqNaGu5m7tvXu2QLrpKnELfgkrmauM49U7VWawrmunGdXohu88dqk2wJ",
  "key4": "PkhYDrcgXQqByGoehMv1HavJkQ6vk9s183tUWMsgWz8G6MKbUUNaxpUc79E1g3XtDczutYDi3eChn6zvZxGynhH",
  "key5": "fdMjudP5axVmDrduERunHiUHRjmNxGTLAsRuCptaTiRUr1J6z4iT8u7hFBSFiC6N5mcFsfBmN3RydzYgzroq24s",
  "key6": "36CivdfeRwXfa14URXGR1GSE6X1jY7Zsp4GtwDAxcAcon86gF9v5RqJaQWGZz8mt5tg6zQpUNfdcUBzLA7hHZJXV",
  "key7": "3bPsijLQ9gqAkHK4HAcEsEwhqagGQKVhFZjpzKvVENqRFN9LYWKbjK58eTT1jLLgkPS3K7nfVpqrcTbMiEhwSjDm",
  "key8": "49cMR7rGeeQeB2jJzau817ATUKPpYerkitzFKfa1EBZL4qN8ZJotrLX6qAEP6zLFSbhHPTTR455CYh1pcMrwWFhq",
  "key9": "5ZeZ4eDEVUMY7GZ5M1Jb95cWD6dhbup5ZWNErkJCiHDzr2cRFbw4u5Vbru3zyPHXWW528Ect5fHefKiLf15TiYjR",
  "key10": "3jJt3c2T9qRwNzVmTXkJ5ViSLiXUq9mkxuBNAEevqVUzevUScerbrcQZmRg2zoYnqZK6x74PXyAwochts6AXGEXj",
  "key11": "2FQ4Fd1kgUhcnHC5asFJXc8mnMF5FDfqNEsARYh8m6EDbiJXxH6PZmXv39KQuojiMzJzyDALmSMe6S8uqg3VRBN",
  "key12": "48FCcvmY71SDnvV3s7mdJdNiVEpAg3iZRMFB4xV6BFH1DnUaTrNoAwyPBzJ7n7aCf61B3M6xycMJy8X3VYXongDJ",
  "key13": "3MYbv7scQjjZysF2dUAYXxoRCJdTJGnebcyxpLTgqFSgZGuNhRn5dLLbH7nLpitQanjsvizwYttruhndzcNV1r2a",
  "key14": "4ACNziLFHFr97hLFDotDNbRR1Wn9cMZrLtEcqSfTBTh2hRFC6a1GzztRppEeQkoDiHMt8w7qKJoVKPMzMM68mczY",
  "key15": "5qthfgczRJMtt14WNvMRfrfoJhhRnmpu3FHh5haorYot2ALMmPqGVii66p7hRAmEmurnJGPs2mZJSsKYLDEttvFf",
  "key16": "fSP3md2VpikP6E3gFV4vTX7xUYR9ziy11ZWGeHFVmUvwM7Ck5qpRYEzLZ3ajHC7BwbbMP5kSyx22YyQ1435Vudg",
  "key17": "5bp2jRU2jMAzRHh9nBniegQssTnDoKsfNap1QaX4ibP8sq4CgKr9XZj5nEdxHtjD8wU6gNbgeFC8f6j9jXVo2wtv",
  "key18": "48LrNycQY58B7tJysqw6vBxSVU6Es7bzwZbsjWKHpV4SAtYddgVDWLKKPmKp6yrvnNpjErGY7D1g83FYfW6pKag1",
  "key19": "2PzUbztGqSDsUZmPHzjQ2a4ujYA2EAd283dF1EnfSLuwvUCkEaZnBCqrQ3CnDKRwHSZkTH5fAbNy25ME4W4VyoCA",
  "key20": "2Uk6587NBdwNEPanXMosdzCq6oBkNKyUmwMaxm2x9ew7pypf7axJnxUtdE5Ws8tuQkvgTePwouQMaVM2adke1yvX",
  "key21": "4KcBpMiaWJwF1ZMSggjm453PunPHFUAs9NXjrXXHhzuP6CHi1D111yj8YBoGtf4kTKX7uXKW4KgqCEMiTHXUSgfT",
  "key22": "4kqtSXZaB2Wr4iD2oePRJ3jEbPpjnxBskLNYqdd8h8oHh4wvuhjtpdc8VT5LcLWdMZ6buTGvpj2HVFtdZ83vBSeB",
  "key23": "4Nzo8cg9rvx51xzuJH6AujBKit4WMrhbC9goKsXFjZbFzWc3DmvZ1xf4UvnkJGkb3rdTw9sZLX3gmEFnFxMJMyQb",
  "key24": "3CMuuadFdCMncKtpBGFcitAqmFpC444AUspQHXSmmagFc1NAZXhstqrhzU3gQM1mAanKtpRK9zKGbP8Dgh8ZkoV8",
  "key25": "2uepxtTTvjNbFrSwnA6cm3g8hYheiqNzktUVZu73imR7F6CUutuvsc5dzUdJ8Puuzd4JSa8EFT29GYFbC5qZ5PQE",
  "key26": "2bfy1yJ3Lb2yi8KT83HnyUFZGRGyVGsA1K9JLAEcNJvwu7xg7vdbdyvYtxNmsLcBMGc212inZsp6mtUjb8DutcX6",
  "key27": "5PkfiLYH45rk6FVo5vbYZyH6sXbqNhVPKSvqAjvYdq7BZvmHgciDXXCXvsupoTJ38vsEn97YtGoq5GgvqnikFvt8",
  "key28": "2f8dsezu9ZCv8Q4BraqwTKWj3F4odtZEfpewj2EvAC72rUigvLUxGbw73kaeB1Pdn7s7bGaPWPsSkfmjVo9pD14C",
  "key29": "33iDRA5VvFkGbvhyN6g1Thk6SpUS4KBKnxrWEwtWvyvPsKaWK5hyEJJNpx6Gt7qW1M5D72WTed3PtMZH7GMHwFeM",
  "key30": "3ai9SWjpQxqK9fUsqvs2ceTjYRZDvc2getqoDdCnPC2zswDiPqMNi3ekikSbgBet65g7iygeD5orWoJZAEPgU7iJ",
  "key31": "5fgq4tUy3np9AjVV5jNGChjxgxT1kKVpsknspzURVKnkYGa92P4HnygfkCbvSnHy2ZTqSEZRXoFZxkpy7AvzhJoq",
  "key32": "2ducWfDEtXokfmQQzjkyxDAn3NxvHCDaA64wwEZH56hLqwyrBVqhe1o6facTVLuesxCPRRHx8DZNoctADLHecthc",
  "key33": "53UXFEduTAoEh8S6uofib9zfH17orZZUjz1xZpZtCW34qTSBGpjUfmZV5fmoBNsP9ig23A8SQAxhFjCzPmpxjLSr",
  "key34": "4AYYxpq9CEMdBgJt86HwmgtLinBZLYPf3LiUJMj4B42FTXsaisrtj3LtTRpmNfUoQ5ZDjJvnMUSgBJapE8nQqvG5",
  "key35": "59A5XMQ8Ar3v8qLJfjoozs8dRYbR6D1zahoUXRef7K564RdSd96mMFu86xgLkDEgK7hfCTiNbC9952MpDs8KDuqq",
  "key36": "XfqsBNHxPrhFrVabz1JkhbmpskgKVUjkjuuiuqCEb6fiwzJnvZhx2fSkkoFr92AWs2SbAmy1uimFKEZom7atcXk",
  "key37": "2mRa5WJyWiWQPFRdaeyrrBZj1kVXW2wbtFi6hvYymwVDEVNKtYvVQgyZFTujabLgXa4ihyPqW2pPDhhTLtNx1Tuw",
  "key38": "58jQK2Hj5ERdGyKmApeUaYnqb2mLn9bk2NgTAAA62vbPUEszf8x5NYwh7X5QAF8z65ADtJPvtdbYPgga8osuzNxH",
  "key39": "5UqnQA2oVCdXKVn9K9qLpqR4CGLC3pJu4Gcwc4xR8NcvdwGgrkiQf6kyUYifwXETYDa3mALSnFr6mXP9XZwgQGEy",
  "key40": "37AwuED2PsZAHAAwp6jGCXmyCnKBNZTNBuLbtj93x6racfCR1ffRPcCLiTAMWTWDnWQWC9ZNheQFjuRpeWXnYfBR",
  "key41": "ZUK8rjKPhkgaG16KLj62y8QbNmpCi4dcRQYa4BiJtngks21thiVBNuCHe6hjyBJq7EMu7xjpvJaqBrAW5ogqwyi",
  "key42": "4w4JTcmGUTZNfw8BY7PauAL3NU4c2CfnVYN9PS8xxoevN7CifqtY174mZTNUYuMvVXzgGyzxpkbX9p2Fk3QMM5j8",
  "key43": "2QczfrXmiZNAniXG972828qz7zyhPMzuu9v3yRZH2iGuR4StHQvshykjFVzmSedrtmKGJQWNp8gp27eeKpwtpKBQ",
  "key44": "3KZL7sZaqkkSf5NMWn65TxLjyGQ8ZHsbyzimE1B3DJRVZkxhXh553iRD12WL1VNEskFzVSFtkwEYAa9pVPF8WiNA"
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
