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
    "3R8pNWYwwgu1Tp2HY8z3NMQTwtvGN6uVXEH94EhbvYeA5vcjHJimuxi1cn9jnwvGyoUE3b2MwGd2PLeQiUr8PWh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FkFK9hNtHFoBYh57n6NBeTe2esQyDERyC9iWfkwrrK8jW2W7jh8JXGDAubYwFmokzmDYAp9g9aPFBfTT6bdtsE3",
  "key1": "648yVEwZZiwEeamPWP6NVPFatDN8Qj7ivYoxLV6ohvoxooPnX41SJYGKm8xa83ug91Yp3erxuckATNmTKkJvxLY1",
  "key2": "4CPvatuRSP8bv1wjrFP6jdxuHdzoNmofMqMvXLufnS3Kz8htN8Svnp9BEpJu2eH8Cq9dLksAXkuxao9ZHCVP7WGT",
  "key3": "4JAK8iet53pG67RrVismA5atpY6nxodii3XcB5NgnGzfGQ19Zw2jgtWHrCk4qpUzhdMGqca9fbNgwDKA53aYJhnE",
  "key4": "3H6Ya768wdFUsFjxbowhzUZd5CiqdPL4bnoSNQdmpEdZHBKj6AHWv9RjLkdNeZfGL7Yuqk6ovxXnfQbekQke28mL",
  "key5": "4Lm3vky6rkq8ANTaykvhWb8csLSQixD2LX2idtR3YGNdKtyTrWwapDjiEf4zrerTa3VHnfh2vyPfHCQfK6zcC4Ht",
  "key6": "2MpXddZEThzR4Ea4xavZhjGwTc3GTAy1YfJV5ANRc5qds1F8JKaK4VH4ttevm8vysUdAP87hm5Dqnn1P5ZMsc69F",
  "key7": "3uHRCgLctMtaLMRCTJzXMbEumzzqy3iYDjWz8wAJsS6uZ8Ta7LFKV5Urbut6bDNPRgkMsAS79HvKkvmQvkJpzmCs",
  "key8": "2tv6Mph623ihomiHoRr3M7qsszRNpCNXYhyFC5cbdX1cM2sjL5Mxz4mdW84DD1A6tdx1GWKhRmvvNoMqY5VFP97q",
  "key9": "9CTWkXzXjaUpn6aona9DXuk7orpmWNeDeqi4bFajToybCPBGMP7qdW794faM3CWD2fsDMchaBuuQ3VPBUHJbUPH",
  "key10": "2rU2z2eYVLGR79ukoZLQ2K3KtnGvdDVeL25FnPhrHZAe91DarKzM2kNqFiWzMGGBrLMzoU3VZt81JcdB1tnE58Ja",
  "key11": "5mY3aduAHJ7L4pEpsfF3cgcY1oK5NAYTGWtMeKxGNRtALrEg3Bs8XWAyxyMuSDdvbwbwvgXyVoiEeihhaJKqHzrt",
  "key12": "vCGaAM19Rjsjp4FEwZRi9xp5CYvCeToTNzR3WvMi5spNdtGs3HPwFdfX12cPTuKyEXQq5yvQ7SkhWMoMw28cexJ",
  "key13": "5cYnqbtUt7iNGsvMmAKPRJMoAfkpCUJxJ7Y6zfxqBBdtej26YwQKPCHoS7iTV8c3u7PwifmSdcxPHb4nsRGCZD8w",
  "key14": "5rMq35azuXd2b3fytZb2QxGSGUPpwNNiwpvHD9cfArXdA1XyqZVpNiGyaayBHndGzkEJC5Ekeofdsz7G7Z96C7gv",
  "key15": "52R7qjgaM77xhqqrrBMfiiW1DiCExYCAwcBjaiPE2u1tg5TkKxYV62BzK1Ksi7JmVV5jgxwfefh9vBMi54orBYVN",
  "key16": "qju5VGCSDmaDp6zkYPGGnEmf8pcj4kDVkwuzmKfJQSBR3VJmCiVhrx5cEGBR7pmyctnpENGtSgAg2eBv3UGJQxc",
  "key17": "2j3yzwYRfpdab74ZxQ2qdY4ddJNGbr8PVqcDtJLgu99Qwv1nRCTC3epvgp1jE3HxAMarFPCW9f7jj2FCFaebYNbM",
  "key18": "betL7G6yMRjMR6AJT3g9mSqTGmvVGwKhnH9eGad8oWfegcuXczg7mQ4uZg2cQY57Lkwgv8N6rUgDXC21Zj1vvGZ",
  "key19": "2wCyWwPDRcEreZaRWNCANnApTw3qU1FuCj8N7sWpJ3cRoRBoZ77uGpt7YAz14XGnHV94rwioMtqQYScXWqctESGT",
  "key20": "5esM78PRdbHNtzocXgZM2H1krnRwPXiuoSjkb39fWrn1TpuUJbu1bp1mTL88qrpHLtMLHnfGzJ55gJEBs4VuAZzC",
  "key21": "diJxLmM5gzsEHffUbNWHFGAPn8Lgs6NbMeJZD6GDt2Dge9hswawYHEhAQCSGu66QeeSzag7yxrauSqAJkzSGi7L",
  "key22": "E9HhB7qGky7EchbcAFLuRM1gYYUoDTgB2j8cvCHbqohVC77WxBBeoPAip78Jgkw1orpG6AXm1DrHR1rvnqRoTxK",
  "key23": "4YMw1DS1aDbGtsPMsgxUmz6bSgbBz395GW58THBve6ZRCAKCoArF3Ds6CfyX1zsH66XcSaZn2u84d5hDVCN2w5Vx",
  "key24": "4NXdwA4vTVe7CjwBYWCtMtPBFcCs4ji9WYKzTuXZNrtkwLoiAyLzGFPxspuZoAy9Bn4Lr5J4BjZWZ3ExCQDkA7gc",
  "key25": "33rBNd8ed7LNkZGK7sfx58Bh2kAj4GW8iKmrqjNmEBPooYknkDBMao2hCgWwtDtH6qyvtQ334dXQ867K1uDKCGxw",
  "key26": "poNyhB72PmbkV4UoJmL9EAMTFEZqCUccn52WR9XuygeWVx4SR4W3UBTP56byQwGhzTxCHUAi9MMtEu2cpLDPWca",
  "key27": "3UUrsvkuN7oVrxEzJyKZFq8QnD68okxAbJpsxohS8rSEHTbrtiWBcG1ayfg5tT7xCR1tcZdzzHuS3Jm6LBE5ktLL",
  "key28": "EJbHwyq99yKV4BejDxmk5pb6QdnRgpofaw9DFtFM3mc3tp8vjscPJYJkQUoMHsmpzyeuXzCWraz8g7smoPpny9o",
  "key29": "5j31K2PHzcyyEDCdC45PeNenydYm8jutcgs5sUj77hHFPx1nD6DykV3hvPmqi5yCLYNTNaFoFsbAcbj9gWbYuDgc",
  "key30": "5dfArNLu8WdeSLcdXkdu3CAkRYHHZ7jYqwPzDKGXrMvKpv4iCXWBrcAe7pRw2MuijPu1KSEYKEkL1gQyuoCyMX9y",
  "key31": "2TgKURbsQJ5YCQnUBYy2rzHiVKc9ZvRY4xxCY5MPgBZ5weQiN5L8AE7mAkpzHXW6ZQMs7zyRB4xBuZYkX943NJ5m",
  "key32": "4SPAsfTcpDmc6awq1NAnza2CU1s3E9hpVkHQpqqctnnVPBpbFyzPhWc6mf3F3GKf62pJocvCNJ28Z4P66VfLkEqG",
  "key33": "47DCVucnRLkRhK7B9f2duy4Yj38xsVa3Nqua73TE88T63G75zDNZvVNHHyHs4Gn1NFM2nUhv7mhHrhsbvEd6fbYD",
  "key34": "53o6cUQLwYwKTcx6CY96QrrgVBgNk1zyU99Gpi7NKzcVujbc3RqA9qnnhotDTQjPYuDQvwXz4nBGwDkXSaXm2UHw",
  "key35": "5oWbxS2gqQdYS6Vj8w1BenkCQ1nAnkcyECTAdh2H2gxxFimB2WmoK8faMoKC3L4RPZEfFiRdAQXPV2NXheEg26c6",
  "key36": "33MJrBXTXqpDYVcMx1MdyLchCkEhu6HcMQLg2twrMLXsFgM1825rkCp344Ma2xYrFCuXeGEJAzRNjootfizYgNm6",
  "key37": "3vYd5KC4Ddcim9AXo3Pkaq2ZgeLjtcLjx2NbGLGsKEkvgnwgK6UjbQucVNXr4yYvupCDturp7Ta8Wvxoas5vstdV",
  "key38": "2SUuUh3DHauGC77erZmUeWfYJwQf58TMrRakQyEEtA7Jq34jRsMoY2ghpoZ81PTddntWHagVustcM8yMSaRevk2m",
  "key39": "47znG2UgQMGzi17EAtnS6CBM4yAcNqUHXpPue5mLYgY23U2mfU22UXXPoB4hZRqq4SQFUPVsJjAc41DBtryfPN6o",
  "key40": "3SkxBHe2i8A9sVh4cWfy8dz4VpN3Df4zS8fa5VqwMJt5esdQ3MBYvsNYNk43a1GpyUeB61VdXjRt1oARzr7zfs4p",
  "key41": "6qeGLABSapdSxbhbeq8QSzhJUkunMR3ggX8qcmLP1tFQSH5KrD2Sv8Hy7P1rSyRLPGyqu9mkbDxiXrjkHb4Fw2a",
  "key42": "3GVwWZvEcDi9hP7mao9Doy4tUukqHYJgwv7jsPKehdYcgPZQC6JUZZwMQoHbQNTAF2vWhE8o6UAZmvFQcVWs8s3c",
  "key43": "4gxaYNZgqtdpMaiN9f9kuXgPL2jdHtqpf3xfnDguEeEPtnVmy4vyqjUZ4xfU9PYGCFX6uukSv8Gyo2VX3tdnbrcf"
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
