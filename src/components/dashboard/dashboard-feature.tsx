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
    "3wV3qskoMe9V6A7Zr465BSgdHdNnF5YRxR7bNCuzun7z5NQ5zwMEei51LXZALamuw2dqVjdRL8jiXQd7jU3Fyt6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HPsywBHkjiYApdxfVxRbRupGr5NehGjPDAryanNAt1bNYqkpQ63qRM8maQPMUDxZtbxbrT2PBR84pW7TMBBGZKm",
  "key1": "36zp6ZpTqpsRiWPXYyB4E7bXmuYLq6xttsLXszgZTHKswsEytrW1wFtmYbvdUaWgwrB8anceaaFMUFd7vR8Y1RQ",
  "key2": "5PQjwjbNUXnVJkgzQAnwK98w4JvnHg9TUrwPrYgahLeec3m6NQjtzLyH4X5nYDCeeNo9xELfEycrc3Kquc5F8rAS",
  "key3": "4QZh5b61aMzybhhHmPFXs6y8zyRjiw2iNgq5zBNgNrgMVCbDEVwg9i74XHfaTa1oRZdDXC2ZHEJxH9kA3PBrYdQS",
  "key4": "XWZRntoSiW5pBdDTy3DrXAG6wFQXzBMC9qt4NjDAZeEVHSStzBAHx6YE7EKP7bfZXnVoNGn9KSCKrG73AFTpGuN",
  "key5": "LqjTFDy8XK9Fnuk1u3cGewCcoqw7zhPjTN71zU3WPnfnErNwzSRecysdBMQnch9DoLwzfBsD3HZLrLAM8amRpd9",
  "key6": "rD7ydmdrHn1pauH55AmYD7jibqbDch7sQzqFFvjRgXQLZaHe9fcXkamrYp6EMAKPTuqDiB7prmEMmEBeGi5qtMA",
  "key7": "9MiqH9Q6PTR2P3SeYyFa6LGT2CxLZLegonqzdBaLPR65vLwyGXTTeR3RGqi3aB7eb9SeVPfCRbUSgzoTnVm7Yd6",
  "key8": "3y3tn6AjCoGSVuDCsVYt4hwjB56c3mzMmtf9q2yjcihJDhDF4dS9XjLoH4ZEZ6k9Qxq8bR9krSnsZBXtz712Fbrs",
  "key9": "4Zgt32pTL7n2ce1HSjqj6XZMUoFugB27NgefW1osT3fFAG8idFnTn2vKBJQpaies4tXSTQc2Zs5vhxM33Gh2CcSw",
  "key10": "xQpNdC7FsUeRfocYmt7Pw2FMxCYGxrKs7w6La97LrTAgpexUQkEB7wRJnSygeWnPiBCiP9AJqJgd7fDE1zyrjaY",
  "key11": "3mWKpep6vntSMmvDFmuXTJ9U9V6gKAvkiBKmFbxEpg7wRcw1EyxohZFVp9TFwJHPvxe88gPGwRL1wPVVHSsXWKiM",
  "key12": "5KPMaJYWMuCrMYLtdxQSexcovyv6VvxbZB3uJpSscqwjPyU3M2TYJvkMKFV5hn8zfRCWQJBTsuy1XCVn2CHFoiJo",
  "key13": "2htviMAZMYTqzJyEU7wiRdSRPZYJdVqWcT47yof4Cj72iZCx2MttVFcydcXEjajPNPURWWKFvgzshLU692XvMvXB",
  "key14": "dyVGdXoUx5Bzewd6AxCUUW8KCk7iXQL2u4vMQJMrmc4y9oQPgbN8spyAGQM3aBkTSB1DuduwdWNbX3z5k6e4QrV",
  "key15": "5v2fB4CzjpMD88eePyUBPrXP6wP7wPeV5EhYMWi5FJo65sC3C9jz5NQahsTkveRY5oJqaQLAYTsR4oALZFASs8nB",
  "key16": "4egFbBqJcA2nfyF3wZLoQMdWN8C4KmSmwE21FzRDNfz7Z5eYy1xEr5fsqMwDVE283WnK3CupeD3SY93LDEwhbAHv",
  "key17": "5MgytjPqqezYHDMD8ogHhWBP9Fdv9MBbNZbxBiyT1Rrtbg9a4StWjYBYPsgtaEGPUFsubAga4z6j52RZU7XxTZjj",
  "key18": "2zUk91i17ysb1qExbPyEMhc96kopRn7AhUhxeDDNMFiRYL9sAJUdWpy6oDGGQc7MKeExQkipGTVuyvQgEWMveVtY",
  "key19": "2ydCHqX8kkZ11ivvUebj21DtY5f1r8mApr8MzDbBjKJpX7mSkPsNh1fR6to9GBRjctoR18tuiY3f5QYUUQYJmQee",
  "key20": "33u6RPtLfCYg7fBo4RhdHqZcwinTQKgZJsygMeygQsJnHVW9yPTyiL2UXX8PiQ4hdnZM56SPgg3wHfbJLk8nWczC",
  "key21": "2zUuxTitMinhc4U2JCHjm2r1usfAmd37tbJ53pYXUaj74AfxcnXUdhs8BHdV5DMnf41JNA4ZT1KcM6iJ3NKmcmVp",
  "key22": "5ekQqgoqxV3AYdRnBz9KREvx8Z7bYFNZUp5P6xHSPBoCn7qC8Whc2gusRDX6eNTNdkgqVu8q6y4cjFS5wF4oqgGV",
  "key23": "3vBgPbTbCzZCinMm9vyCDHL176Qt7NPmLuAKdgUFPUGsE41cmGpjxrGZKMvwUKePrQrWooXGqSCm1JWtLQYWiLKP",
  "key24": "4TJMhw7aisKArHjFUfBKFPzjN4t8Xr3yCstMzLJangdKzLVjVx1b97z7xtGoBs6GsPHcviMguXjp7Zt7RJRMkdXz",
  "key25": "3n5N2kGH1UDeSyeWx89PbMGMuVzWpWU36T1uVaB7j3n7vQkGqvfmrPX9jeJkAcmNoU8dBMoAP1dXT298seP7mgKp",
  "key26": "2QXQTvPJx4SJNMLgibB2ag4dVR9hoUFobegDhuo7uudatqfv8Bz3yz4xBt2TXvEVz2SNwunCRwYME2vrssK4EKmp",
  "key27": "4ZQtVcChM2MJPUrZCqpMKS1z83hh3d3qAore6xwxZFyWxBvVMUGpuJVKBbo8k7SFd3MTdfrXBoqEM8CtnFiaA3EP",
  "key28": "9BUWpTbTtJ88ydSBffoHGn92wVSSYFPSMNMGiC9uwfEdZCwDwxLpDwY5c1pbNXnq5Wfw6kTGcBYJ6YU2VnUg2fT",
  "key29": "4TfGUK1QMGM3EaSkUegdxT5TBG9tsp9UUYs8FFUpxn68o7h5nHg5tDxoRE3QZBxVqHx5tMp58hmAkCTjnXK3d3rs",
  "key30": "4jzEwS57cYbBA8cffFzDqueVzrfW5abS7w27Nj4nikBLqneustMyAvrQSkNd3vxNm1Jf9rJs5YB5EgsMewUQkHSE",
  "key31": "K9R6b7B81oRyPdFun5nhVHvq1pHEiE5CveLRCPQLB74Ww31NF8TTXJxTB2k8mritS2wvH9wcbPBrwmzkMxcuQCC",
  "key32": "37SQRb9jgthgnGtLX5sfjMkwAQQdouNtv8TBSvvx14BgRAs9ZZirggJj8ZiTTrSja5zJitHYFsQSTwskae5XEkd",
  "key33": "5vzq1G2YYPFZMaiuZzWCwqD4DvUkZQoKVrrzMfomfGj27CY3zs6WdooJZdNGqLy1yL47Nm58aiQ2u1PdnU4aub6F",
  "key34": "2pTiXEYujaGt6yHAb7UnrWkN1Zist4CHvVAkiytZXAqeCgbvZA9e6Rda2r5FfK3MDhLmy5ZasD6pFUDm58fZwZNt",
  "key35": "52miVR1KP82kUKEKa4sRah8yuaKFhcyu2S1YWZszqdsXmLxE61f398FRppvbCdnec6yvouXDJrT7GeiTVSF7gyfK",
  "key36": "4D8XkEN3XTohkz2Qmw8CeBfLZLstcc6tLsbjaJRDXH9zrNBCnXnHpQuyPiwpRUam3Y64dZsxKecdtpBrsUPjHT6h",
  "key37": "3hQpFDSmLBau8ERhENUeskuPmwGCuB9vyC5RwHF4BQAWAU1XYpiY8Rvii7nzUJcJJkW7Vkx6LB7ESrpRoXmSf815",
  "key38": "21PrwSVSWJPQKQWyp4fLu6byTv8BRRAk4phypR41aMkU6jtFYHx426PTwwChND76nKWiiFj9W4UjJ3p11vkvdUEW",
  "key39": "4KugbNmh17WH8fWd5sU8V88rBREPA6RADhX2QLmdfeSSv85keM6K9pxbwUMsWceBoHbsZUefrvvqm2xPQzDYuW2q",
  "key40": "bS4EXDg493StS3a3xAVx5WPLhDgxtAG89bGAc49wb4nPqezmKaNGgsWYQ7PsKP1GYn4kMhKUFYKmyyQfSVS8Wgt",
  "key41": "67LNhjBQpMceEgxtw7UJhBMTDvG62R6SKdS6PLKdy9EQBzzhmLXX9AkPwyBLB3P8mts6v4x3fTC9bYCJr2PHsgri",
  "key42": "3CoA64D9nKfbV9CLBmvpHSP1NzcJeNagikUp7hmMNsdHcQVJs3XwqCJ6PYJddVGer2AVx2Zbo5XYMhMnfDmbKmPB",
  "key43": "5WfJdtH5MwVV7Pwt1YKMWmwY2MCfHQKLzGRnt8yJ1441z41TCPp7JCaKervHJzeum6HvXhF8hUz7sEBNFJ1T2vgS",
  "key44": "46UN2nwWmNKWyPmdYFZuoj5zbWu67yU7Diu8Ju8wWbBb8ZSJF8LSbRpNeWtTuhqmcFxcHx4cv99fMdhNCiyyeZW4",
  "key45": "5L3koenVcJEZoHyiQtv88RuKEuDg4SD928pAGvfcCrZkT1FDCkGdwZCp5sur4roxX5feHaS6fzBaCd8fgoYQotrg",
  "key46": "4TN29CmJ2QtnH1wDbJP3n2YrCAGav3Qdzo6rV39Um4QUVFZ8AmyhMZvwq38jsGTJEQWRBxso4V5kpRBAi8gWkEDD"
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
