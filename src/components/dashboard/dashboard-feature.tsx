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
    "3jvEHDKNJYLTUhSxntW3AxB1YT9DNmjR2RNLLMuLUYKfKTFY6TvGkMtYMHY675NrEqLW9LvjUdXfX5fu5QyMJHwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f1E1Yaq7YKdRPdRnZfftQXDgNep3nRKei551REMFphrh9Ph8SkzmBrtbR4sJhL2yw77qJ8BEWFnAvTsHAYjR9jA",
  "key1": "3MiXdMBf7vDm7oyENfqF92XCB9Y1Zd3ezzV3K64wfFSz1XACxFEfS3vdLm1g1fWkN3767xeBWDP2yxrXwATGKTdJ",
  "key2": "49zdHjBw6UjMKhFpdhGvb7LEwqHSDdsgtMkbNUhS41vpz2bdjYJcuqB5NnjinMxqoLsdFFMLHjvv1tdih3sfMq5D",
  "key3": "2FyLvamNYodvZWaxQVCoJJQh9beCLwsJP7KZvU5xhonyVd9wNsEWFHeSzWA9xKrvcKZo82UGKxbegSsjxKWz2GQP",
  "key4": "2eidPoRxK4jBhXdhhe586q4KUotw56ccT4YQpbwtDpu53bNPcm5K4Mc5ogzAbetcCHmmh525xYKk4KKtFefdXY4D",
  "key5": "qyqUZ41B98S4AMvmaDiLDoX4jYjm5DLcspcfb2rFbQo4qjLzFxAYSaJHfh4NwtA2c2fbQ9TEmcgHpqxaDo8SSkH",
  "key6": "4ewVDYYR4fZrg3EAUNMX4DdTPGQPSPWWfL6niDVB8BAZQeCoyS1mYVr3RJ6BsKFRJsmviFHszgu7bJT61Vy1BvX1",
  "key7": "4MZnoqAx95h22meaQX2hrYtcRdkm559RdRRbognfRRQQzCfTV77emFSAuJXCujzx9R2AA1sx1WMV8DZTfqRf978M",
  "key8": "47xyKQZho7PT2hZ75nVueDzjDzseXotiNSiuvMuNGLiaTuhrtwJkbgxT1ZJaKJmR8iN7tFVRN9xiQUTet5xXVNKD",
  "key9": "5KQXDg6vfhhtVAaEyQk5EUfjweck7HPE5E3Yig4mz6ksUJYptz1f3Hg94PV14ubJy8fciS68EyBBN7ng4VNix5R1",
  "key10": "5EDuemqGmtSS6hdjiEZmjUwUNNKS3Y4nDrmqWNukDAvoGck7YiURuTCFTCPuYVQG5chXagfrR5V6LVzUrkxb3pG8",
  "key11": "2AKLx8quZmQau8NTUAvED1cnW5j6pUmhDDTaS5iLz2Mi1rzUVDMR372dfm3LVQQxgHv1gDVdTqBuPXiE3rQeqxFx",
  "key12": "2StxE2JA1N4q5MVUgp731HrYgp12WMVv6FvepToXDmDhkqLTbcvJruPTpyijRMDpAG6YwRwvuXwF4f5sMGKKyPFf",
  "key13": "3hkiCH5Tp3N7VHRtdRmFuM5PUSL3FDWEApMZZhAeTsGud32jDU92D25aLuBDveBFtGW4NJq2uutg9DchGhdZPrLi",
  "key14": "3pmDp6aZmqf3tmAwcJkCNXcdgRz3731H7MhKkcJo8T3Ao6HPTgyeX8udML9Are4FpGYQjvq1xqK59SxkKWcmKifQ",
  "key15": "2cTTrEWr2GFbGKVvq4wnt6vhHY95tp6mk84ftSV5K6JfQgtMHpMyZDXnFDxQy8bqGkNkZ8GP7hGfTHLTyFtApuX1",
  "key16": "3GCCyYmLmmMPCKhAYWdQmRyLTcAp4rRoyxeGnA4D8yqWkbADA3apTANMUz5fGduRtMaYVhWiohEL4Kk8sXB4KeNw",
  "key17": "4sio6zkF8bw4WuJx4uMTih8d2v6dNAphrHyShhZaySho2jQ7kTY6SqdGVqxUEPKaxnm5Tt8gDYjYjnmE69BKAuhi",
  "key18": "2MFnH11LG2YDzquFxtbhy3b6QmYZsCna7U1rE4ek8fkjkmeBQkjha2nCzqrRFnH538eQPoV9vy6xYNWjEWHWv6jc",
  "key19": "2x2YFFQMJ5NxZGajRh2uAS5DpTyanCYddVJbjEa1eUhqxLUEpNjnTTgDy25kW2ddYK8dFi3Dhegoa6NrtrqL7FBH",
  "key20": "2wQKde5QcnpwE3uAfGp6PVFUXixunXpuaYo3SStePxh72K3NxakpS2TwCnJzFuHYiTSDXASbKf2eiLBRP3yuV7Sa",
  "key21": "2BrLsRqcFaemWFGPeaAPRNyxysgRd9H1m9YWiP8dtFySaePEbANpXJEe14A5765MwfuVPCNGLQHzq2t3RNfkrjxo",
  "key22": "RF48Pc1KaQ2sKeZR9PKThahFy29QdtsDvCrnJvSgw1KJwi87qP5j532J5PjY6WX6JCcpjbgKyotwzUNPoV2vRmf",
  "key23": "4AemBr25oASEM9aLxpqNcuA3KCzjho2WZGYWFF9WWjhhCiKj6Hu2hMsbtHFNg54WBfLXBHKRtPJVxFrYAzPFF7fE",
  "key24": "4b3GMydo59oaNux5BZNjZtNpWw1dYK4kW3eNDxmYNeouyysEjo5DC3aLLMuRyDhsFHPqhtWCkLBCaEQdBKqXa6fC",
  "key25": "5C7KD8audNsxP7df8QNHvwofTGbesmNceCiEZrgNfHujZ43qVpBW3RqtdnuLbyEhr4u2ERwtJueTVJDP9QZBW2tX",
  "key26": "49euHjMQ2cyHWkWZUyjtf3kGziyG5jEHrLx3B2Rc99jJfph4nw4pAzUo2wQLyGqwtcK6C5C2a6RPxi3i5DdLQZWW",
  "key27": "3XZQp9xptqYo9cfpTTqkKBsM5cXr8oynAYRRKeukFyx3dPLdeNw6wfpMxdVnJvPAtuTMpU2G7WRXV7TmWFCQiZuP",
  "key28": "5rnpcgtp1WfAwAJ7ibGx3DJFTTRFkuxy6QAMc6SBZU2vSJdyZi3ce4XVuD2f3wwjiaTYrVMwKRpZ44n3n64skZip",
  "key29": "3YWeEiSYCvt4UhELCxqWgitqAZFNGcieVFKbo1nT1zgFhv7zw9zYKwHxYkkczR3DXWKUAj2P3z2vrfwRtibds5Zc",
  "key30": "6679R5Ywjd6739z7ALMm8ft61YfyCqK4yrS1nv9j3UUi8c4EHdL2bkUF526xV7ZMEpM9fYqJsbSQt8CEkiAHzeKH",
  "key31": "hEaLb5RnRxLvPQksWJPWq98RoAbAXCokvErCqz2PHjbxhtWMApBQmYeHsGLmEgGNGpTagcTfA4UwRCa8jP9XmVH",
  "key32": "66mScjELMdNBqszJdDC5njvqvd9CSrCG17vpwkvR91Vc6vyytxsVR55Br2eRjpTEbrb5Ei5w5H9kwkgdipniRmQZ",
  "key33": "hhdZwhJBuNu4nqfJqtcBwsGFiHaWvE9xR8bYextxBv4S3umkwYa1Hacg35eZjgWJhTczBKmFBbbaneQ6m9sHAbZ",
  "key34": "3oxVj4ZTDX6x2aX6GLceT1sH93SYbTZQPxLMdcgmMPXWdfdgU6ZtSs2zxJdDvKFYrZ8mHWb39LQebEpNnsq7htM",
  "key35": "3UNfgcd6oezG86hpygGUMMeMCZVm1Pkr8sJvbyPJpXRscQEka1FUcaoSo9LtEAVtYxE2LqZT42yfu1Mz5pozndbW",
  "key36": "4Eox64szy7oyLtF6F3Ppb53cRtBoJxgvnGZr9Wdqqk7g4ymkZkjpSjE8DmGHkH4B5h3H1tSyaChBE97KDSL4aQ8",
  "key37": "4pCsnAMc1drCFTj9x75Ps8ZnN9a7jXhrQZVXALvzvDsRjE7yaDkK1ZUvFmeykAFVUheSV8hJpuc6MAxfBcj2k8Rj",
  "key38": "A7oMPVSTmuHTuPD87dwH1SjEZmqiPShY4YgihevHbqgZFd5SZGUrDS4aKmj5Lw25ij1Y7kxNZBpfHRztXWUhGzb",
  "key39": "26iWisVHZNWY6XJBJDf9cQ4dwZ1SSaxEcUY6LxWHyLfuupq6vJ6LdQwqTCKRdE8U3iPSTQZ5npm6GytB5BPYGWKz",
  "key40": "5tYUtMy5G2LmeczmL4rXJVsPkFSowCSF1v7euUYqKVG8uYYvfvQsyQZWk5zpMJ1GnVjbzbbH1cosestjiqtk5W1D",
  "key41": "5JKmSC9DAoDjskzSWYVsX9mjaRfAeWGRP6Z4PUXGuPBtVQ2SFAF7Wx2yJdrbmKAWVpFDq83x86F7sGkgy7VKAPfc",
  "key42": "5Wg3mHM679D1efEkDv26voaBE1vR4VkSQr2HmuLUp9Sorsc3wQv6i6BR2SLMD7RyQH5k2iHXL1mUchDxd1cHdhX2",
  "key43": "3xcWfbCSm4SMExb4ZFcz4N5w4KgnKwPewfWSDjHKaZcdaBySy1USSRCwkkrprz4to8jD13McF8671kpx7VHRmD84",
  "key44": "4fKJ6FajdfLKszQ2SvZ19Y3BdhtDkawFnN6zB71nsjKG1jEV9oRn3M9c7TU2mVyyTHd1qY7kZjFJx8YBJxgkirvq",
  "key45": "27kD9nGveqp1gRq4GAATXYmKH2CtbeXQVEkgzSdVNw2DseUp6THcAFg5HHzGEDxSm6cqY8QEhhEwRm3rXbdHc1AT",
  "key46": "5hzBQ8k62B1h7dUC4tNo4TGzoM8nNsNzmxQoTm9P4PEWRAZ5qcRu6BzSNx6454K85VPmyMXTKFWJNHkRzqq6X1qL",
  "key47": "5R3EG7xZjS68n3GTz9gTGop5aNTwcg6uyiyEmDMUuoRSvgAh6Xxb8tACF5QtEfCjbT8h9g7WZQmNmaMofA8yVwWR"
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
