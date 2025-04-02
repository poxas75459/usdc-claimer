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
    "2VzZm9BEE4XX2cJRD94sQgx3cJaQEW8kmHUi5qUbKnTNmu8wotwTLEKF32xU99ZvbReLV4F52GfPyifMeCRksj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9fM4tESCbipnQAbNWChAC39yznaD32qvtozCs2QnpXcaxN3QJd6vsXtD8w3d6xnRCneGQHEDZacsfUdh5FDJprm",
  "key1": "u4whBHLXcguWxRWw891ajEyfhgHNaEUPegmvojye7Fqc2GdNarKutFbvBYC21PqZYC6QMeyuPmSmPGDrAKZhKGr",
  "key2": "2PSFxM1u9he5TaaRNks4C6TeGFc6Y5DmuqG8ymXGLBqarqD8Wiqhtjg68LuUuY9a2oM427KnVMSGNwGsewd6y8Mx",
  "key3": "4iYpA2SKeyy1M7JoG1kZ79ci7CKwb75zTJFRp6C9JDyLNbJdoFSYmRZm6G52BWQma3F3rb5twvhbkvXsxEc6oCrq",
  "key4": "5PjLzkBquCbW6RjwY1DKdJFc7Jsc1Gt8vUUiQXmyNThWvGgQeFc9udgRVWfAWcetcBwu9cUJypZ9FFm2dd3PAqvE",
  "key5": "2kBRH53tmKRg7HJS34xzip1kisTMj2KDNvEkQgdjaPSrXfTd8h8H3Svf5Kit5R9gtCrwbWzFRpuS8FKL2vq3aJuP",
  "key6": "41Z94SJx4p7CJvcWVLm4f6taVrakYbWjpFTc4bsSrXBrGfetU8EviDVduicmNNA18UPB4sEdJByYs2mqBpGaDvgW",
  "key7": "7fxedNPPQbQ3hNHFmgq2TVY11PCGRPpUZqjXVT4HcV3T8o8UMUvvS1xdBYpHb7YsnVGe2LxgtL571VhSYLPsECU",
  "key8": "CAhvu1Ap4E4JNNQv74r5nXZ8Xtn2Tb9iVUd3AxhEzwEkFZ9W1FuqfHh51UBwukPNqE2tMQWXXh89EZS8AiUUZzM",
  "key9": "2U6WydZLKWKtGLsE27pL4Ay7nz1WVP2fu8yHLoGXFNeggNoo3Sgx1z239uXoE3cAEK7ETJi9vN8AMCegCQjKr6A6",
  "key10": "3Wa6Rz7tfmnfAehSWfvUg4Pv5563X8HR9XPkAgeuZbYjbwYW2r5Y9L7yvrAgu5QgaJE6728WPM9kYQwvEmTwfewT",
  "key11": "3ZqckxUpF3hqKGNm1bGcSCWQMuRiGt46wJBaoWq1vRG5VZiBAJkA2PvSyuipJ1RoWJau2vGS82E62KQGG9vVRaHP",
  "key12": "3kuxiZQZprUUXRSDTrdKH1WnE9pmCxsuh3SQM72NLZNZS547wBUVTbt8QUAjH6KQ63f1in1eu15og482TGGJBxt3",
  "key13": "2QLV4emEAPpe9gptkKf65EgY3mKyUUBHy243ZZyWqcmVC738GvU8NJS9iGhUtLzyfKGovioRHLysL6NNpGsUo2ot",
  "key14": "2mKhEnhTGoVk3smkZ736KiukFuLS7Vnay9wfR3dtPj8T4o8MHq3rFisAn8F3faf3QzRfm4RG4y3j9jmZLBKMxami",
  "key15": "m3HuCmniD2omCYK1Kw9z31cYWigKY5LtqGeSFQLVEH6mMg9LLvPfkKrzf4ycNZAWdJvbmuXeNZ7BBu6eaisxDgi",
  "key16": "27VSCfCL8GWsMnbgzcbBDgzZg7hAQmJjBAdMhg1ZTa3gGVntksxyXKyoFyd82r8ksUXT9EjujvRADvrHVRnRUVk5",
  "key17": "5J1WWWBVpSp5cNGsyMuXn8sDGJsZV99vU3xdF7ifWzRgDVsFrsJBj3iNxZTA4NY9kxN3yuZFLdasHKZk2Ub6QBam",
  "key18": "2JvvzjR7zsRYS2ofBy51eZLxLnNa46j3mSvwx26uSAGNaMXHdsDryV9LEwniFjT5Nd6ffpp1NEGHrmiou64zCLYe",
  "key19": "5CahcbXEakzGdRs4pmrnbgaPvkgjDjNWvNPu7mc5A4EEk645ZTzTqLNX57Vc8ToJVchsfxZvZ7ycS6CJE27wxXNK",
  "key20": "38izNpzHLvVzSZyqxrPKQg8VeV51y6WGiDRSAR85SawNthGKHmBYVT5pa7vF5HzC3Ko5JXABQq2JtsozzwcpbqDN",
  "key21": "2g6yFBP3hZNEroKcAxeyGM63AVosrkR7UCeV6Ndkf99jjy9iN6Hcqc7y2yzwPZTG41xK7f64CyYkFWZfytianFkd",
  "key22": "Z9A5Z2eoXFgz2FWoG9gLHbazuSniyE2Y56VmRheGUP9B1uadmA5YLGLMZMSRCkEihy8CoPvkF2j25kaAmpBLA2V",
  "key23": "PcKUyEMaKxnvztfSUeMzKo3bCZXe4CwqDTRCR7RDT9tzCmZbzrG7AMKxqqqjSHwfY2pW1qjm6cBG18qwR3Abu9N",
  "key24": "3XFeNaXUoCccFKrR4Bu8sVE2DSd2yJ14c25hJhLVEicatDJoR2tDrNM2QNcqFM2AGPaV6M6YmZdK48sRe3jb3yrX",
  "key25": "64HtAN5A2zLhdjhzM4akk74R4PMHPwNEk8pw79YnXytALfd9e9tQdUx2ThxKkQxhbo5HM7faqewgPFCpvrBqPuV1",
  "key26": "2p2MvwpEVr5RJFSdtujUuL5wGjX5mig7s7DDrGpXvEWabzRd4Da6cD9X8EXMzn1qURtDkUHbyHwQTXzWeQRdA1uh",
  "key27": "2RqRKLgpsPSpYa3z8nXYc43xKJ7iwJMnQPt1nun2nF6N59aqKRVC5dXsyj2wTrTsYiyXyCM3S3sn5Tw2pBQ9LYeN",
  "key28": "UFoztMGCuVrEc1xz8AULm8it5jad2Kyoge1LcyK4aP652WYc74Z6ZX41G8BJEt52wFjisvWqMcSXTgvuyWD55Do",
  "key29": "iJv9KVAfKHewZPky6NHXMGW6kk7i39VgthjyZ1ubFcAGtP73UJtuiqVbtpYWq6DXAV8FE46YjDZyQwvDiibsnUW",
  "key30": "ajyosAGysHJreWAECNQt4EfK3gTdXXyjNraLMGcYRmFEqMyWXesX3ZgVs66zAEzdaxHdpLvNso3G25r6EgiEiQg",
  "key31": "oMcW91njEcyDz7stkCG5rN675etx6pFHJ5kKGXCQr9jKRrnUVWs1gSUNbNBjymVonrBLPJ9y53LeShF3ihrXedr",
  "key32": "4vmXLnbwYkCiq9n5GeJDuGmT5gR1ymo8apPAxxF7CdCc8oy6oSWrxizTTrk9PmKa32yDCv1eHE6tQEbAoMGjGwaf",
  "key33": "331VAWVWGV1ZhiRcVEdZALjnygoHCPyvupwJP2qEfWabcLiNuh9gDh3nBjXniMDvSMiZCEJ853QYRiu4f3g2QG6T",
  "key34": "2ySA52KmNdMNzsMznos94QKdNCBuwX1MfMDVme3ZxX9Y1bUbvS6iNQubRU1i5HsY7E5ttxmWJNQmHeJNqyWR17cu",
  "key35": "JujM7BaGxgV1bQWU5ixm2aYjEU75Gid8mags5p9owuZoT8F7DFPEL7owXcXhw7chfBVKpxVhpXsiDZki43nR2Bo",
  "key36": "2J6VPTrUKajXArGHqh98ThCH5JaDuDCAHEa3BXMdfSipzsNnD4FtgvLHXEPff4KgLprvbTX8A1KjczeKTfjR6UQ2",
  "key37": "3kD1gnMKDFQ7N65yq4sVxc1nDpy2VSV8RApRN8194aHvsTu8sH4hBH1VN33PvZaUc1dRBwA6qGTD8PUYtLZH3Bni",
  "key38": "53osYH4qQr5DgmuofqDoBLNY7SQZKP9r5z9Xz7GSaK2Pw1PSMyft8H6Xo88LBH5L2kiYjhhFCbi2sQ7nxmPWiYP",
  "key39": "5EhHWQrUYXV7maRU7tjdZCiUCAJdBaFajbEtVKTPsFXDvRR15Jmp1br1vcw4qgWqP8ynvcwwcvvk6eDiHbg6Pp1g",
  "key40": "2DiXrNdGtP9iG8AAMwRU3ucRMoVNHZmR1RRPfiNb1gbMG4kTHCSrqcpTQW5RovFKNheCkdQWSZQ9DnfQcJLhvMea"
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
