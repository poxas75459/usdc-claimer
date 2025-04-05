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
    "64ZmCEi4wFuEa7p2UrrNPv2F3RkBBm1CQesaGNnyHLEede19VnBHkokUske2s723J3wYfE9zjPCNnMYuQWeTxMKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49X3DsgYmWhU1wb7nUBewJYT8ioaoX5R5ZnSNd14HjJhkt7AJCN9jaDc4gGYLmACTrBoomEHbF9PmvMMJxrohNbA",
  "key1": "2JbKDh9S7Zk3cQn7gTQQV6KxB8ouk8N9gG9Wa2oWnnyaCH1nEwRXfLThsDhq6FsZs8XbdmHLWT19garcfY24z1mx",
  "key2": "5ijEUtZ3yL13RotkYfx2X8UepPFC6x4Q4GxWUvquGp3zFeUKa4CXVXDJi7nKzpeK55ByVtR9egKRutuhQ3ac5KxW",
  "key3": "VT1XzfJLeo2gg8foBzAPNvQy7eB4WSuVgY3TqGBifVCXVDWNWwSYrBPi3cZqE1cCVrJnQSPNBEhMt4ESoR5FiKH",
  "key4": "3BK2GK6Pq3EHUtJgtxAifWXGaWFU2FYn78Zu9RXG5AyZKgMCcuyLCzo3hovA8vjVWDYRw3SpwJbSQ5Q5pKEDLZG5",
  "key5": "675RhgFWrPJAz66YRJow3B46Qo3G8cR3GqS1uzHw97Gev4jijRPEJ6eeGwe9XohuvM7z3bhUT9uyvyqVrTBTh7sG",
  "key6": "5fPTbsy7Mi9Qt8W3wWHihKWpfZuceJBwbt764jymUbN5zLLyMhSNWUtQzxPkWoUvuGufjoSeEKH8JHFrSDuGsq5Z",
  "key7": "2wxw6gAq4VTjpxEfeH6rKqAz6nYbso5UoDJLN8RJZRn4joRA6591DkGJ61DjrxiWE6nyv1Z8hX89q5oCGPbyfkqW",
  "key8": "5xyCsykA4XfB29XGRQPvfynWZjg4MqEtLXb7VTrKXkuHT7tnHuzqsyfFJpab4Js6tNJp6mNqc7ZJeXicVt4YhKEZ",
  "key9": "FXyPWbJagfgKycf5ABmZcSoHMqdkqeeXdGqeK5Eu3Td1v1VFTpH1S3HiUdW5UdQrExjzPfiHf3TxfgPdPa6Z7kT",
  "key10": "5AwGPTb7ggc8JXFtBgM4tLq3VLSEXJvT24jkZsBWkvjvJX4EJ29RnzU2yJFmfC6AGfm9JYMXwaQ78UTuU9r2e3u4",
  "key11": "3GNyFgRomhAfGGG2quCQ3KHVp3isHARi76jigTqvVowv3KtrASvXvnTZHy9LrtZr4XAxSErJTuyhiqc8c514nuDy",
  "key12": "2WYMXRxHCNPbEJJg9mtu2ZTt296t4Uc4EFoZw7Ln4gU7sd8XKPoUicUHHVF6W8fjSYqAE3FqHNqvHjhKruXXj8Hq",
  "key13": "3tXcMDxrParjT8X9bJrvThbcDWxeADgnPPaXVhxr1aeeHUmhagd9sXwXvKvxbc8prYRWZVPvZwWrZhqStv7zwFke",
  "key14": "5hyFhfwfCzDUk2EdYYvFnATW7cqqNWgXaa1U2fMJrgkpz52M544ssjhaThraHEjLBGgWyXEw3BEmxa2xw1WzGhwD",
  "key15": "5YP8nFLLZvCiJUWVp5WinMToJ3mB4FwdzMb7RtxJenFfXo1463ynBdSVs7bPFdtP5MZp31PLYaybLVejdWjbtdDe",
  "key16": "4AiupBjr9CABAcHiNTzBe4D4ap3U9yz1JHBEiakXZubBoPeHNTJrKaWwhfPQufPJxNBBnfaDzDbU5P9jriJUAmgg",
  "key17": "tcUJbtxMnVQsTvmUCR4EQ7G8ooRWe6s6P2aSN3yTqTdyCA87bb6sf9bfFMSsNhA94s4GkiaAiE6YHbTZUre76Tb",
  "key18": "4tvSzbFy4aWeH6U6E3vPDi8kwEdex4mF4fe7FhN3P13q18uHxmiRadmf6uuWLPz1UfwpniHoFDT8M783Q9kfbuf2",
  "key19": "J7d4RcEEEXrh4ucQLPXAwY8ogLxz4ifgA3uEhFZvPLxoPbkpPVRnaoVVDzoGjNjd1Wyw6z2DnsvMQXN4cMFLoTC",
  "key20": "2z9tAbNNdg5qmXmXrhouDxYCUmCTgj34PDKV4KRQ5SKVcTvhB7rokyKghtV6ka46CUSEPccmK3bTqTty7YrGBWAy",
  "key21": "2fB5x9bBqiWRoTMMjmVkqjoxa3wwyCZ2guBfM8WQf3N2ZEMcjdDWinVCT6QkmvrVj5rFiT1fua2sNxRnCauWH23K",
  "key22": "3HncHsg5dXUWtWbMN4vuw4CVTdjidKgfcefK2xs7rnVZ2PAnXJdpqCRpY6J8Fw4qLXqqfbakyPvc2xMbVEbFa756",
  "key23": "5GoKvQXD1qCFqBHzSYHSQGtMB5ZpELSmfrJexomHG6bvoHdNzJYXD5e6648jRruyAb1zQE9tRY6sTYFgLhAr9KMF",
  "key24": "58iegT2U5CDQ725wDyAayf4GsbAXxAS4avEgfNCNC63zNjpK2YBGzqvkHqugJA39gwXUKFZfG5rvJHfQ25u5Mdrx",
  "key25": "3s4ERyPmBdSoWWjojeisQreEf6ytujmUbHaV2aaRRzxG4ZsA7pMbgUjB4oL9j16TyS2Rdubj3oZ63fyL954LA5q3",
  "key26": "2XB7dJtY64dEeTJviHS8eAN2YVbacXiHwRrHEX4MD224unTNdYNEWZ2iJCz1mBfyEMx3qQVZEodzTEkDxDpFFQjM",
  "key27": "3uWBpLwG2QUVJGjTodppJUfnoLXYLykEAkDiMVA7BuGjTa7gaWFCbK4wfw8RbMRPH58KcgCvy66a55ci9AvJTNdU",
  "key28": "wPqYSEFvZ3NV2SKo6odS3A78G2xRfySGzddr7o3wkaLQv5NsJ3GYrfSYKMJfEMYzShkXraNGJkbxPGZwn9VTG1n",
  "key29": "4UgnWS2ZoUBS9riSWxKrSMHwiVGRD5upZX2zNi9w6obNtW2goDvpLFhwEdFxi7RCBo5vM1iTCDfVjiZn6p6LJ6jq",
  "key30": "6HFFrJfyC3MRn8Q43zzJVTbbgEnWJWR2gXHrHiYHQaHJk9p1Dw9W1riBavcnvr4V64VMAJ57XQVZXeWDeykNDFc",
  "key31": "93ekAqQcrTiACn1SH5Pz4QgKuD7qafSerc3w7DitnRnyGmoVt5kuEWFtvXS16neVn1t71KcQ3rWKAW3QxonVPb4",
  "key32": "5ncWUM4CNvBAQsXfiQQh3RBxCK7TJ5syfJPiFe9uZXL7qRrR51iGVQ9AtQfj6HYeugDKDBN7ZQwLwnmE6Y2Jo3w6",
  "key33": "2x65ftmmi9EnWfNLXEPw8Nh5BpkL7ZNtCxDvvMzT7c7xAd1WvzPeK6BfrZA6AmvGwp8WHbeHHHYZDu8Ue35ccadu",
  "key34": "5ydGxV12k28RtEYzbiBEoFNppMhqnEi6XKN8HddsHbhHF4Tmiv8EefkThJ2xrTbkbkg8yJVMeBkfZpdfS8wFvRmg",
  "key35": "2FcKhYUjM1wgtz4eHd1unQwgXpvk3kafhF2SLXRhSa5QS11XmoBiuyzM7oY6eU8LCsqZTf4rdU5uq1Hw121UffYd",
  "key36": "4xceRBKQWEfN2Ly4R4jztD2K3qsknwHqNq1QyF8sXVi7Ge2sJ89n3QHSZqnsb3vuUPS4RMdUAfUPs92YxzmcMgws",
  "key37": "4RULnL82FaqZrh6PBQHv3VcVQ4p3qrZzpJc9BAiN3YVai5DUW2qSexnRKcBNmQDRYBx4ZB3HkiLGa2CZW8KyZTnY",
  "key38": "2APe4S1JKYtkSgnwGFQQWant3ip6MpoxfywZBXPc2js2xBAq5wqv2F5L67Btd7ZfpNciq6XnLn5i1ZDd6ZyACebC",
  "key39": "4AnXd3KG8gpRe1YuRP8HxPP27FW3zZXJCXxKCCkE22qP75SX8fG3qfp8yjqW4Mvx2xop1D8ocTPVXnrPACCJj2Dt",
  "key40": "4JLuughwdTdjWNiVzPErSq5bMrDJT7JHAsXpzbrMJ5dU1g1MzkaNDKZtGK9njA9qYVLDeLha5ebrGUHtnoTwYDp7",
  "key41": "4HZHsE6FxdK8R2DBecygBs13QSc4m4AJWVdVwikaEXb435zDMPRnRss9P5dtyEEdztJXh14RzQtqsPxAe5jNTno2",
  "key42": "4MQmJ77Kmct2A65c2i2hQqrgK8h9aSZXufwXwLMfYUJK1fWBSj9KbzFztPjaSYBPX3Gb67xvzdGGYFBjDb2ua1uR",
  "key43": "2PHKP5wNyrwCTxGJ4c94t9brCERfuuvAFnHSZjpo744sgFW8eFheRs3FjPjMFvACqk7ePoHu6Vx8yBsXrnF2voaD",
  "key44": "2ryTB1aYCpyP4gv5ogGLVfZfmxXt3CmrdkzQDASwwdJLwJDz8oSnvNk5sJN7sFVY6JgjJH2gEi534i5NARJejFzv",
  "key45": "5dQB4xLvAC9nNnVdkxLYBxzn92W8J2d182TKTdgQWA2omyhwrhCL8oWMLNuSa5QSqhdMc4owsVUgCtf7wSBHX8n",
  "key46": "gvEsVLQgsCX8XAZ5Y1eGfgduQux4YyPaB37JfTxDiWr93g8WtSMtNDrX6cxiuiBJuLzHqAqEAR2FPHRERGKLmq5",
  "key47": "42ERe6onxuGSLEKwvGouty9MMcJuEvtwbXJbXUNWwVUHKzY35ScRDVEGFeV4tg2Ds1N9Ba1GrVKmqT61caTAD5zE",
  "key48": "4ghzQjBWfbuBet35Nckr67PFc6ehrERZKJmVrYWpbGoHUWr2kdr4ZoFgqSvRNY2ixWo6fHjhZ3hz7xTsxKuz3vnK"
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
