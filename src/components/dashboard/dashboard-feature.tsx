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
    "3s6XVDbNWPGBX5ctEzZ6mtbqn9LqEEPdVyVS2TLHAMsytPdTRvfCB3wha4G9EP4MDVHjU5MjYZqpHx9Y4tMhP5wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39NbYpKQ946f2UcWPVcZHEjy5uWbcernWiDby8RX9gy5vN8xy4BiYgUvofXvZYS6cR8PaDnPig9MR7FKqx56t4BM",
  "key1": "2sT2ctxTd6wBHrckWGsbHKQq86dnrSGDDwiBfyYVDezvK9nhDpSP7UXDPRVgnQ6e9RnHprvqZqSG7GGL1xKexght",
  "key2": "Vxp35FhdXFF3FziXNvnqWpUAz2AcGmYpRJroQNnUVjZ1bZ2Zv1bAxPamNQA1spPg2xFgL5n1VsZWyf9MsHqmqB1",
  "key3": "fZABfT9e4vwLJEWEq5WDnovcBE2TGEp37PRvZxmtYDXztzjJf35zuHzKy1gK6mAYh9qrqsKkKNT8ruE8JDohLXY",
  "key4": "4BuRHNbb2hQKcimJUe9EcKaUxF4A6n5W5KKvmEJPCUswN6LHyMHpEAUX5mr51xHEmGSLvpiFm5bc7X1APoNFgfYt",
  "key5": "tPasXdAA9nXsNFJZ9fPQM3vynHnUFDVcQXviXhfHbH8P7ZQ3VkdLyhtupiFPK6JFvXc25aTJLjVMw7ihZxSj2Pb",
  "key6": "2ouDX3nvXec2VCN8TnV3gkQU6ZXi2yyCvK8WmWmKwBx3W3xnixyhs5qMAnn5xLjQQmejySdKD3LEzNNsqvd8BUpY",
  "key7": "4e6Td3yb27GadLREgrSGKA4WZ6ztZus1GRtXu3ByAUjrs1idTbrAs2qrkEMqCAvm3E6iPyTk23NM4ioX7UgJZR7Y",
  "key8": "4MLreMnahYQEwSTiUhewGt2TQvmf2CZVMPPQcJQFe7tyYa3XyCqW346Nfbvj8NEeJKXj3sGuqBpz2ZuqJTYuhCsS",
  "key9": "3HuirFpLGEk4AZ9QjcVbhLWfUjDoZbPGEMYmg6M2ZT2ZeyKqd49q7ffsXfZTJZGFxaRxZF8bt4TjX4DKuxh9txtA",
  "key10": "2GYW2hwcxVwnBao6KACTZGTpPq9mfg77fPPyWdvJdadDYjzXeCDEUdcQwE5BQRosBv8jt67xbm6fUz5LnA41EiDk",
  "key11": "5NZC36yhqYZEMRpkf4oeJJiAWLUphjDPjv6oN33YidmqGCQYvBU4my16js81ZJvHxeJ6LVwX44x2CDctRf2Wcnbd",
  "key12": "4eCVN1k9FWhveje8tothFneqgDBM9sf5r5rcv7fnNvjMaWSqUbuHxy2cKN7st12yMqavQBy9DQ7Um7bJsVcNSgvg",
  "key13": "2ZyHh363bcwzM2PQJhSbtBQLaP8mfCY1SrQQsh8o4JnPJT8QjSNCmwKALbBYuecRFdCag3zfyZBFhcPbdDuxGxgH",
  "key14": "3DVpZxeG6CAqejY5EaFFjpoYPNVXDTXwEoiUGkX138Ar5W6usqGu1DoA6Kz7XxL4TA7NdujaucEa13Px4jUprRFn",
  "key15": "5oCZ2Ar9txgYMhLaVpXiy6bn6VKELaK9raKwJCEHKducyM72zwJpPLb3YCFVKMWisRdBz1d548UcUC2snNVd38Fn",
  "key16": "3j5qN7mH37ibE4v7w4zLk9JUy8hq6sGwdCu5hwRsrizrk3Acwndmyzk1b9YZURQMUMJP9yCCFSfTasZDdaCG3zo6",
  "key17": "ERa58MELisbrVTVgpqR9G2LL6ouRtR96CJ3PCwYfDqwTLKYGRUidVpVXC9Jt3gVbhBpBcVTyzXe3hDfMFxf877V",
  "key18": "5K1pizQXr34jzC1hoWNUSrS81JhG2swTRS6zf2u2xWwjvi5sVDnzvFgk7i7Ww7nn8GyFppxXtgRDH3vj1rrb2xuP",
  "key19": "5gk1UU8Ens7bLsLfxSJ6QfbTuBqxzttirnRSimrzr6L4j27L8WTQGcCenRCsiZXUHHfPHm7t1dpSpc9XKrvYkfCE",
  "key20": "4atCC2kWWFEGUyYXo9V1RQX1CEuwSXmuy1jrdAvtwXSn8ywvPACPWoc2soTmUb8634yE24qSr5vMc8rcdtqF3PPb",
  "key21": "DP6uiy7BptFW6u8GhGXs2cGjYBWgTJniyPjNgemUtnqosEUfxi4ra8DRj41NUQk3sbZwjq4TFBJPWzg3G7jiksz",
  "key22": "4eEEH1gmKop1phin8LBqhS8Z79hrj16E16xuzr6wangftfhUXxTFCB3on6dkDe7N3ZDKe6DEx7qSAA76tGxCnLnj",
  "key23": "5oUoGYkziAxoYe6So3uGo8J8hSGSkGFGCGc7rJp2JgBkhMcPccnzgwVfQwwh7sxU45K2UvXMrC47oiT555SAja4u",
  "key24": "1mKPuKCWsp9nVFpNyVo4Rz1sucx61EHuowN9bLDNPhuZzEBJ5VWG9Hv84w8WYXbWwgLKWuYPnWmgT3mACKi8ijC",
  "key25": "5egWvZzytCctCZgQMeZBCjAgFYNqGRvBHmkjviwUQNTmgNTDuHVH17Hsa5fFx1HhvA2sWnP1u7dDTpHPCJiMpeHS",
  "key26": "63c5EWoVaBYxjhZsesvgCic6eUTUFeWEdBP4aGXgLTajxm9Bvd6kN28CzDpaBtSRHVNT49DapFvvMKR9YVccBqrb",
  "key27": "ZuVCutA5VCFyB3nsXQJiSWbRrB4mZmcXqptmQtKyfuhiVkPEZswHVs1Frpx8Ti62h2zSTtKQQNAUj6dgQHi9kTb",
  "key28": "B9Xu4k26bjk1JUm5RPL5Lv6haRLDTA4hmmNPpvyB4t38ZNApJZczNosMYAt7tQKVaTWjw2Nyq8aXtAJxQVc44Jm",
  "key29": "r2D3rHXMmfYf1nUudRSJ8HNRwCKxY32WCzj22qHEqcbyA6CKWtbLHimCGPz6n7msCW7BsupYUnYYVHqfpRjnSy8",
  "key30": "jnRm8NoCaP2ogEzteBWzkeQbVD3aiB3Ac4c3jPMtbUQxAUCq1PTnUDaNyaKsBVnbPwhHoJZKydr2WFrGEWj9irt",
  "key31": "55YmthbzwhqL162hnKsaXYBj6ceKiSZTdyhzS8HcA9TCoc5HR7cks3S3fqioqbFL1G3dMw1Fi2M4GMerG6y1a96R",
  "key32": "3NUAk7LyY2y5sEXb7Aep94pgi3ZxdLeeeNn2DSgQRuyCbGePgJYURyWuwgNZzmt3LKQauHA52HVAvLfPfpwyk4cj",
  "key33": "3EAyFeaMPfExNrstTVidGriq3YKTLVzXwofn9JdWgRxesDGXdFr3XCfV6kaVqDQ5V7KFPMzTkixNbyCoXC3JXYVL",
  "key34": "4HFJNyCyJxh9contWLb9JrNd93YPQXcJRV91aVC5Z3wFdRD2a4tRcc1d7FazYMA4cKUTfJGGyKnDy1qS53RXGzB5",
  "key35": "28CTSuUJ5Yx6HsstCf89JE7zwpWoU12dvER6ztFtGxnN8bmSpfWFaLHgGEuLSsdUidScR3HzqxdjJ2dEmAhjmKMc",
  "key36": "5M5qh57cDm6SjdMZytTDjHBocSibS99VAkE4HiTKcbsnpQrjSnirr1WZoC6m5atudjN7MHa3EWGECBmyJbRUbi6k",
  "key37": "MWTBdp8rvX5g6gFrr5pmNpypfsBp7R6HY7XkaMw2ReCJ76NYPAukppgtp6pDxiAW2dWVfg49PJ259VWFqDw13ge",
  "key38": "2t1aaiHFHgA5YuP1eATdTfdfykVo2gcKx2cPdwv4VDhDYcH1YGmJmSRVbhsHQvbLT6bp85ndyRiTF3VTDR4dvpuK",
  "key39": "3No1wvzqeMXEHL2qKyw1FF5yzKmCSBLmtCs4tgePVaTUWZAwgs6ziun53TpVwYZfBxdtGGuxKKRoYvSk6mQFhfoj",
  "key40": "59uSND2gZi8ZK7GvcePDR8awuD5MdVpuAAnXCpJa53sznQc9D9tuJe2dWBBk8bawXFNcYprY6poR9T7YMBbeE1Mq",
  "key41": "n7MWue5jSN71Sr5uhp12v1roNHUcAzeTsGRMDsUUsgrfpqA8udgviijkhWzSoLXowwQmkyDBnbQY1wL7UDwMLT4",
  "key42": "4zwhxyGZu8WkrufXeA1ihQWnTTUJqCUAEsZA2k2bHN4BiytNeLhZhC1ft81ZXewSvraENBjjTzBPY1BcbAC9wnqP",
  "key43": "3Gq1s95jgZWmcyU98G5w39cY1RTgNwnLRrWci2nG8tj4wvFE8kTLfjS1DUAzkPKy9BydzyTtwWBJyFZxJCrfAWig",
  "key44": "3St4iGiBNGJg3NmKRLAU3HFUzWLR3PrXpUKVXbiTJT96DqLrpF2Stt7cosK4tUv4FF71iJ1EHHByY6bsCRZknmRW"
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
