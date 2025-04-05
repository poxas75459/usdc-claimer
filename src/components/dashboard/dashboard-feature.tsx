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
    "5ox6xFHZaJqowchJpxP2C3epVFtsbhAhV1VNENzWHFFRgR1mfvwSJ3QUM7FYEfkDAy2sthrATQQgRkW2F3iR8mgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KbU1tZDywJLQADue2Km83iWyS2sU4kud5d3SJtzBbeWGYpWSh9rpDYM9ND4wzsnDs9XviQr3opZRj1nUSFVpgr3",
  "key1": "ZyKzroegE88g472BsBtM8PykFTLZeojS5KafanBKHtFjcimWxpSeSwHiCZ468oqyY8GUNVv7cTPeYfLS6jcHshV",
  "key2": "2BM1bJ4iWa9FyriCN6HmsKxnx1YcAjYTX8HZaDj7mXL3RjjtacWC1jTgEr58QnkVf61hscvCBWsC1VuZpAGC2iiU",
  "key3": "3BNLMZzA7vzrKdH13BZsMTWPr2sDeEyMBvpNLMqpuTpHmMBsQDXSJWkAtL2E8Vtpz4139SDsh2dmfpCZ71nUUoXs",
  "key4": "4dQqmKDKGrFG3zvurC3avmgkP9Fqn4dycjCDosFEgSPU4pJb39YzmgPk3rU7T3bhxmvgj7vJNwtT8Vj85NXiytF7",
  "key5": "3NmyHB4JGWxX6fnwnjnEtF5wKtoFpgKW1mhKokVdBuoUbmyLxKQyoGHsXE9ZmP8mPZxKeUh3WZPvaus5QcZY5WiM",
  "key6": "4LRPcKWqzTEEdBJnkjvCHVetmpWmeodgJpzfPSCzT4hpBYSrCPSbzj57TPmKHaauWF4fBYxv7VrsptyZSCpGMv22",
  "key7": "5EYHzwjEXimMz12onFwUkaCFstBoXkaQZjbp7jt6ND1udEzxQ5F2GEEJgDjb2y9nB18ABFNdWqGekhhvyX42NoGV",
  "key8": "2mmV7PAAHVCxTbbTKk3aN1rUjsUF8yad4kYkGbM1Z7ktyURzvqPpQUjafU9G1W6vas8Q5douneMCuAsggfcAh74F",
  "key9": "4t6WsZHRPk9dEaA96WJeaiCLMcJnQquBzVN68ANATaW1ajgoE4R9WCwVH948TwQfmN537QbxBPYjtSHVqHMEXM1k",
  "key10": "4r3J17iXu9XggpXrsgRoKN6FA73bEec4NDms5uEUr6RxE2oLMjUK4XwefoVRYExvgwrBoGzVnRTq1W67Wb5fUXfR",
  "key11": "58H2rCYSbT4EvWw33VVc37Vuo29PfcGkZkA6SejCggvLJvieFReLfyRzVEt3qePV54hKDmemm2KMtXmty6SefsoV",
  "key12": "5i2yTLbsPD4Wg9zcYnfAi9yxeNBQ8bZU9K5V5eGtADojTrSSye5ybjWVUSf65dEUowvMrvXp7GqQdsb9GixjrocJ",
  "key13": "4TF4nrz34fxSBVz3Vfjh6oGRj49gWdJ2WNZUWzCwJF2ji9TFjXgQcYYHWkumeyihGDzFDhw7TdDkujaREamB716n",
  "key14": "3ZykKjkMPyUq9DpDNoQLJt1JYAZ2G6jSQi9d7ppqdBbUswMoyAH4FpQFV94KFuakM7aXbocTaYLA5tyPaJ8LUUoT",
  "key15": "2QNHFHVhB9c4RDprdYgpF64FCCDwuNTVzcoA93AgYBrJUmTjbMvpJwbrYr6tgAwB9Vk4bzfve2Li9y1XW1ajxTDu",
  "key16": "j5gzmHmPMNPitbscFMo4xsqHhGKbe7bdxCFrUZuaNKP5DjUbNuEZaDrgePemseheqKF4huwc7ZZyHcGrzfA5SGw",
  "key17": "3z8NDThWeNUoABYM4tcia9k9Awwhh9da8QMFhX1DeVFBiyK3JHy539cPN8h7yG5CvhgdivboJGZvABFGcPruoGkH",
  "key18": "2mR5MzfaKpn56qEBT9dBbkhyMZF2odXwYGA5w14nCKJYTZ8wZhS2DJL2SKkdoY2Hux5irtqQuJFUdGzTXq8uCN9j",
  "key19": "sHQuyo1uebEEnWsAXRcff1MU7ZvCDXyoCy7ZKUr44zaUEywXmYde33kiAoxf3HdYrbHi2K3huV2Z89HjQVPJMZr",
  "key20": "5ywg8TKT3eut4dRpvoMKxRFAe58BrtDV5Rcw7v9y4SgWsWQB359bMa6akjGeSuSYEWtx1JR6iWodEGdF4KnT95ir",
  "key21": "63do2k1XzGsgrrq1JH5QpKdmSvL7rfPSgPzovqqXbX3b1NQxByATYgtgFXjWm7uC2m2QzyVQTntX8ApRC6brM8V4",
  "key22": "3gtEGpSbvU54mpSBn1aQVQEjeKoXiSyPT5h9WQZpzfqRARYq8GVe4HeCW7g2BL6vrEagF6dYLn5HpX8XgjdCCFnr",
  "key23": "598D8QRPqaXmuiMy1F9bSEUcdyUGCy4UyrB8GUzbgaWPxaf5QYGTouLf2EC5nVRtQSHrt1srGrdoM15t5X4bMJhn",
  "key24": "2w2wRj6SZS1yxc5Ddt6Jkbfs4mWyk3GLmCi9sefeexRjm6vnpn2FtRx6cMafgVB1hrkxFkE6neL2DWFnEPES449k",
  "key25": "MfDpmYk1EXBVQgrinLn8HU5u8qsbkihb1FPaTu8gZf4wYEbDAyvMBpj1MiuXQgTVfxEFvBv6r8Bxv5DSzsErmst",
  "key26": "3Co8ya69vSu7ix3xtDat3cerCp2y5zSBrVdXUfhib7GGka3Qfy5Xm2hay455wK5V7HZFEExVyupvaogiJPykJpDu",
  "key27": "4d1aXaHz3WSnAAgSquxMK7aKM9eYo3xJkXX7hbCD2RqTUQoszqzrv7AWYztb4b515EiEskPRSUpiH75eaK4Q4hP6",
  "key28": "3er3abSBpxi68AAjjw25pHgPmEDqGrPv2ioJ6rSQr3Ep4RtXwfuJMfaWZXLDtuESChoQXcLdhskHTgP4i3kUkCzH",
  "key29": "3BEyFrf8GCF7sotvcRozfvpuaxceQSmacAPPebbw4j3Qhz5hy5gccEPcTGB8rjLPRZfYr8ZavLZgrXeJxrvdNcsZ",
  "key30": "fmWGg8SbvKm5VppfMU5GDuN9K92heK2A6CxRvPv5M8gcVda5xyidnKDK1VwWAY3XsjAKDvGkYH59KGX4FMCwtrV",
  "key31": "2sLHbQubmkScHvovdrocfmuXhz5aWTAKcThBueEXCPDv57yBcw7pghbm3jCbdiBmKhNuKeLmbwzepix55PoT4vTy",
  "key32": "49jxBT7EE8LGhPkGu4EwnC2M21cWMyxcdCgBPuaZBnputoudcnjcxS7AGVXauG9EGp9xBXpLiiRkkQxBkXqMdWEK",
  "key33": "3gxzEPRr8WVZgWCzPa9NVv2BbhwPLcCGuG7HC82rCTjT8C9XnCWPaj4EKypLGT9W3aUifjfFkCEzHuYTz46rtWUv",
  "key34": "KNnn2FgsvJrUsSepbM8QkmQftAHzBtNa75JzEr2trpE8ZuF4GpMRpFyrSqBUaKrYhv3JA5h896C1QWfxKudGzjF",
  "key35": "5eSZus5snugaNrzP32ohoW3ChdkGU4WKvNBBwbG51PQ8vwyCZ3oyXsjS67CcsiUpERy622Xmnw8uv5zNVK62FhWC",
  "key36": "2Fh5oL654ary5cmVKojpSqELxSBCNQA6pCDJArCRFuj7ksUK1JfgFYXyp7ZB8VLztMvD8VFqGYbv48kohDUEoMzr",
  "key37": "MgpHAHBK4NMkiER2WVm5WmF8dWk9aYUaNofxLcuaAQxYb9X1StGQzpWzr2KBKRF44FRWANUGfcrpsNJLhZks5kZ",
  "key38": "9zRudi1BJuksQwTZYBNfheFsdU6m7j5aV1KmfAUTJ5ss2YezppmumFzUd42dYpdqUC1JY9gB8v3KkWXCUAX21fo",
  "key39": "2kYAWtTugyGSmy4HiJXd3LhgcsLCBCjV1ARfX8wFHF2ZY8ugjbeDzqefsVVSFF6e4bSm4oNryBCRk9vLmnW935XZ"
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
