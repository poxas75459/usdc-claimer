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
    "59wpB1xLpwvoSTTAsWWKSeXHLpYPo3bX6J2ouzq7J7dqwV9tP1avbMSSRXxJQ8jofpSZWgpeF52AehT6tABhnR69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7jnxjZibwH35Ri5D7Nkt3g9ttg9hx4R1Vm4vBGatHewxWiGs2CviHo82NQUawQysYvpxz2ignzfrpHZhCMtTnH",
  "key1": "2eS2JDSEbnC5GNTWee6bJDUCmyS3RoY12aCVP7L7Vd45v5ka9eR1cPUScxncixhRVNvYd3eVjNegpLTnEMLkgt5N",
  "key2": "4oJpffzcFASe8bH7jhK5ppq6812uC8RuZABJ3n1FGKFGMZMxVbLfza64hn32hrcCrGEppB3fwaJH4eMu2GA7MAT4",
  "key3": "5z1tKxdkfcjtCvp3JiBLYFiR2LKFSEC9G8EHaRs7dEH4zh9s2xbGE8rDMrqTDSkY1qsvQXrYXKEPybg7y3G8W5oC",
  "key4": "3ZFNhosXU3VvcD3Zz2amARUa3gnDvYxFQWTxcARqCy15KYNcVEfKbN9Ryipbzz4nTuGDYoGN8TqBAa7GGUWSeSC2",
  "key5": "3WWLFs1NmcnUdAB8D7fbW7kpashSouG2To5nh3oQU6g9xWmPccATtjmhN954tieppbKuZchMVjckSmKmSCwWdVPR",
  "key6": "4tpcAshUvVVVWLZwyFfzXjs6zQmDrSQ1JNFJpE1NKSMaSDiVs4BjxtvJR3DEvBHapdo5HV3ecVAkP7noscSKNq7S",
  "key7": "47mrucpZvNCTDaibDN7YZk1QxD5U3oJWmw9CMNwLpXVhXebx4FEPoaM1kZpsmnn8W4VZoFqbthbdRRr4TsFdunxU",
  "key8": "5QRnEQRfKif98xtretMWkCXMD7z1ymHJBa7ZHshWrsSiMuHeLBAjTuETMeUcoq9GV2hFXgNaUR3VcqEn9zCumMnX",
  "key9": "5m3deBeuQ1mb2A28jFZVPcdPiyt6hJxzHhf5Fn9sibxGgRVmgSkvp8otktyMLfAzmrV852LVh3ewaUcGZc7Vjujz",
  "key10": "5EecsgDG75AefH2L5y7ff5sF1kf17UVVcCvm2jtv3uQ2XbVXukE9RR1ibJfiVso6eBhAs5qmrB5KWP5AyuRn3mTz",
  "key11": "2KkoJTbMgVK7UYT5QMfPgGC9gngvYFShaKvZYU7vNno4a2vA39KK54eJabNFGKBidDUskPVy4VqbGtWXoUbPYFfJ",
  "key12": "2bWxSdvoX7qxp4j5HRxf9tHZf8KVWmjson2PVGbE33mmb4beHdVLYwF8JM372Xz3URojKk3ka19t7eikiZvkBfKD",
  "key13": "2ewbi1GgFPuz3QofVZA3zRbVSvCtrkDYHsoFWn9LXVkxb7ZHe8wV2U6vNQarnUYWhRT94fvegFvYvEdqy7euq2Vx",
  "key14": "4MyXGhNAuLvqztDXJEPmKL5Xvy8zBQ4aYBb7hu67QetsoghLTo86QMTcjpPahjD37E1rGja7Gg8Led1qYk8aTSKE",
  "key15": "5DcjdweRDX3NF5tigNGQkJFUpCiVTUmMQMNtNHcywaD7GjTNUanpvUbY1CcwzpCrmXmVDpcY3pAswt3KY99btC6G",
  "key16": "66iNsLSun1f2vMLDKcyX5uYa76XbttHUxnHLrKhg4ZXwc8hVGWD3nHKVH7WgzXRssG64ctwDuSrqMShrFq2qBurV",
  "key17": "5DGuqdr6sqvyTrGF6ichcP7H94Eib4U86CRFcpWnAk7CHdT6RPqEBvA9ybozfirwo3x2erfu1SdSoabLnn649VR5",
  "key18": "4YPtWENL1jpRfHV9jVd2KDdT4w5g1tTfF1useBLJFJA298n6qX3x4by26bn7UFv2VEi7VbbVffbNa37JiUHNPVRU",
  "key19": "2QCupmmr3bSASoXq2rWJS9Lkd6CHZgBRWaK74p9HXnZZSgETDbZ2YradzRs9TRbm3EThfBp7nXxDRzP1krAat9SZ",
  "key20": "225YJTTHxAEWwgjStpSM93MBfRxF8DnUJic4vELtkkJU9RjAH4cSbm5VnTg81PCt2My2ZciXynzdusCYQQUdvQSa",
  "key21": "4bX9KHirQvAtBPzprLmv1ie5NQqBidzaVe4DSGnMqzxXxr2VXEkEEPX8wrv8GbPnQUu7nve9vW2UFrdrUqTtnW5t",
  "key22": "3Lc4VdnKW4DP1J1NoT1D3bR6gvDTZQoztWSpQXz57ViHewxgyv1JLsgo4vck8mjhri8z59dMeqCUGqCwirkNGhZp",
  "key23": "3W5hzhVYmzHiqbWAvET5n86vbve7QbcDtJy946VtmnrBqYeLvSkySiLcrjoqudTWSvbRa5pV2L7ww8KtuCjepkEu",
  "key24": "vDnpd32bqVt3VkGBpuNHNg97JUUcr5XfRP1aFnrZXrW8BhhSDAzo3UmiZ5jSotWuvsCFJWsuVetULvSYfjoBPMj",
  "key25": "aJQGmr3Gzy9ahNeEuwiEJK3P8spHwGKuBsuzWb4zJZeGm3Yo8DvG9uqjHt4k7ffYwLbVpehX79LrnSgYmcTABhJ",
  "key26": "4PjYzgapqJtfHtJa8Es3ijJ9TqWgvsNK4pwm5WvNsquCu9MbM5meRH9WMBJ5D2GTkGTa65zQXeft1UTLkmoRf3FB",
  "key27": "3vDAENnUBSRKG7dCBawYSvVNzuJ8QFv2rRvk1BRfAWqJ8HJeJRCWuFmfuqB3doX7f2mqMSdFyqfddxoTwErUijR4",
  "key28": "CvNxkqSUho8UsU1B1k5EMTtzskFuBnjh8dbqDSAD7fCRkkVSUvtrZR6iZ7ZGXovDPRvnFPgFgh3HHYtfqhPC6RE",
  "key29": "3R7Heh6cUcVEAsmwdnUoaoiSt1uY3ZhtqFmNaC3MkD78kbz9MF4qG7dup4JPrXVzzJt7ab1HtZFCUu2VJ84aiGxW",
  "key30": "4uJCA6qewfhjmcWWiXi7WmGfzUtXE1UKSijAMPB2bqcoRhuSKE79t3hHEisRtuoTabbzsmNgmmSTViQagi1g959x",
  "key31": "AZQUEJbKWxsFnvNR5LdLDetEKz4rTRnLbeh97SnNPJbEZkfyCqStCvt7FXidDXEci6Sm19fgWs6JmPmQfpga7wu",
  "key32": "5vkyCdHrqe3WSVJzDisJE6svPahbZDRgqWiiheuPsQheNbUay2pmoE9GFLP7Lh151yzmC9QYGC9nH8KUaQySsvcG",
  "key33": "4xywgRV6rGr2qdgaFLAdKS2wEw8xJ54kcEz3Czcmef945NJTXo11USfzKiouTreBo1cVoMNozxoJn3yWwH7gmm7D",
  "key34": "3tzYe3fWzxPY6tsCw8W1ZCdjeoEYeE7VVBqEc3PaJ38dtmMHkk1bWJXiwESb6Mfu1KcgDmfcVzNNyxjrm33cXEV6",
  "key35": "2hCEqNqUQB4dw8HMzyj4Gy9A6FsSyoDKQAf8jC3iWY2Qae5RSiQ5G6Gn8u6k3TbaNQcoNiHkvViu5imqXVTnT2kG",
  "key36": "Mkqan1Bz5drhMHJ4ce1oFgqmSFqYQsF3bJFX9NYfyC6xGdXo9PBAwi9oVrWUAS9tGBDy2CUoUDueefgNuHGmZAT",
  "key37": "67PUWC3Dhu4M8uVUu7HxJXbKz5JpiGsNYjagXjf5AsN3BnkRziGDJxuXgiNhYwbByDgP5KjnHNXzwU1xzERZJX9s",
  "key38": "5MNMGPPy7LNnM13TULRZmSar89E8JuWiVuKWBy6iKQYFjr9LVHfCcREbQJpShsugKRqakBRKYhpU19wXGKyvDdeT",
  "key39": "2JvAL7FsyhihGaYTtECQW3HjgvBktWRJq8EguQaxvbrZKNJKYnH49xz83GJrRoYh59bhLWVjqEEpYq5ga6hYp4Tu",
  "key40": "2qhbPdBomt9LdCzR5FJrMXE5jWCUCNcgFsxsdhGhUUU1KkbUUGNhDEHYA8uZETzszabprGQsaYWxrzsUyTR7WrqD",
  "key41": "5Lb518mGGy9CqhpgoLECnEvr3WwgiTa1qQTjiLCy926zz9HPaXgzMaGTc47y6B9fHrAVVPcLuCULMgZSvwSyxLjK",
  "key42": "q3X12zfKgRwpCnBAqzcZK3En7RcTd34RoWhihDUcbL1gdnSdvBdSof38UFsiygr3TMQWQzajoC9W2ZBZsTbfFcs",
  "key43": "apaAbMMj8vHHNVpnLok92NVaD4zHtaoBHZPP127SHuJnFs7LypEwYUU3uHdTHsPU7tgp58roPW25KwmLGk3vSCn",
  "key44": "4i55LkLEXKisnZj4ZN377ZPuUaQgMUKHwSrM7tU24MWzNoueryEHgnDfU9hTVvTv47H4wNHazqFEQsjh9VBdPzwP"
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
