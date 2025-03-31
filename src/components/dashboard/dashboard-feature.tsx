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
    "4S9U8yKmmjjveRU6SczKJCFqSQxvwRM66kXCiPHUsyyKjCfSgQagf8dw4V8FBsRMK1Wfitgo4HziuQ6egRHTisXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6LnaFx2pVaUF5nb9GDEitmyygm2KAitas4E4S5A9CgQnbo3hVu24bDXZcgKgtcXL9HySJxLhxaXZjoGjBXuSVa9",
  "key1": "3K1LLKWyrthtM59m1fVhRV4YRzeNJsg1szc97ceoR41cwpZvJqcPNwGMgrA8vfTB85jKHDKUcviLRXE4LBATy1WJ",
  "key2": "5YXmRLh5VdaBUydMrk5a5EiyWUJuYCMQ5zZ85JEJP59HY1bHqkMauDNJ132YZ2AesbgfrXNcWxUvdvjVb1UjMcin",
  "key3": "5Rnts5TK3oBvQLGqfBP8JveCpCvKaM4oyeKZdJFpWa6RwzE1qHjAchSHsvYMSAS3f5XJxX3XggzXZByT9KqtbJDr",
  "key4": "4FZGaA34jofyHnuWExzyiTt2mBYAiCT9ZCgc28YoXHxBacc2zPuWxNbmodUvUX1D6b2e2gCXCPUN5FkMVBzAX4ic",
  "key5": "5ZYJG4Ums2k4ACZsjD7sxbzJjDypchzEaFKTFpPmEcq2u2C8JSz618NH7TZkBvL7SSPN68p9ZmhKFRcUFzNF55Si",
  "key6": "2wTRYhsBVxdEgmJfG2QCnVBw5wmKhBVwZqSYixSANqpj7gWMoSA1RVXjq7oqExXT6tHLuqo95SJTmdiL2qicXHrw",
  "key7": "2bbd9j2fmWL7pYBjfoYZsHMdcELxN7cfB8gQG7HAybbPN5vcWbPHi66BZEyiNipXL4C95jJ3k4jUT9RSSJr3QQHb",
  "key8": "5HvFeX57PQLM2CxjEmbKkJjfP7Bh3UwL29KURSHMvnB9hXuNSwfqnBe68Qxadkyi9grsPQRhSYdtrwxtiMRuEBSq",
  "key9": "5ZJNaUBYSh46qeKKvRf98W4MM49RGsAaVzyaJsvV7zSenfpi5Lx8r9sfhzNpUQoeHLySikbvFnTVLssnCiLKpxQx",
  "key10": "zddowGwgqBu33eiV4BQ8MrbsNKSrR3UsDDExCeojup44EySRhQGTMebVTFCyAGw2779Nw1vzaTEQadC1UzPfVP2",
  "key11": "66wZKck3sdhjsZRt6UciVQoYkXH7nfV1XucZsBfMpSJt67iUBCQCNFS84rJy3nKFtn8oREhEggVJMSa4uqxA76Xp",
  "key12": "4AVUja9fkPoPtvQTYV273pPicKoBvdi4kZfojf47GavE85urhCW3M3ZRLuiaTsNVRquHCYRmx68Xjt44CePT9DkD",
  "key13": "3mxGP6zhHUFDJ64c8fERhvmdXKmKwCfkNEVen5qLd8keRZXRMsKETgAtQmgVSRoktHf3ALf4Wt8Z15zZxHnYegYQ",
  "key14": "4X6yCbhnvMVFXfUQkpbQWpUKVX5kCqYKufCrccSbkHx1nm9PsdvrHgSzsrQuR5K8joN2MWMFkJwtmW5pyXi8LbRF",
  "key15": "53Aq3nfnu9q9XY3G8mqmA4JXuZr3yfMLtqAVdX2aAmPN6qpH3aBgrqsrKbtZmaqMXH3uYNrX9GoLK4ZPeFJHiVoa",
  "key16": "3GWDzL8PSdLfQGXqn9T2RdTuSK8aUtdKn97uNN7mTU4LM6pbawUwEvmNcBMsD1Em1C4CBGfyLh25DcPVdQ956ncB",
  "key17": "2wAeddQVBM9RSNj9KGUvVC96CYEZV81YggQxccfuMVbS3LqgjoQb4JoEXiwhQ5DJiCkaW3LpWFFdrFSz1VQwNqmK",
  "key18": "5MMnfD91tfekE9UbztzsVawfoeFtcPUzy69RNNKPVHvRm8DvTJLU5J4KPb7hGmMSJFDmRv3Rc96KBYRBKTJSZnyL",
  "key19": "21mEPSRcZJhVrGW1HnmFmsHVs4nrqsQFn4DoLTCh5SrKRQ56fmGngakWpHYPb4TUg2jEaxj8v3QnSeXfgeUXVDsM",
  "key20": "5mb1hiL4FMBYrKHo9CaaFY9ymrSfxYyYBeSjPmSr18UGVLVvznyEEdyCW73Cwh5v2yeRx7snaqsycSVzCmyhgkU7",
  "key21": "5dmTCaMxb9D2wy5oXgcxe1y9vJz417wzMcT46Djt9UR94kFfWrBayyxLNZW5w1j7Qk7Lfy2KjdjF4FQ8pQ2YXwUa",
  "key22": "BnzC2Hkwp8AUAhDoR2m4CsVMGCAkQWoeBUasa2eHzwq6bFkeQAQk2P3eKQKTiP4mNiWXesXSMyRgyEm7Jwoht97",
  "key23": "diSJ4RkJQuwHgGGneVGNm1mzHAt3HSuBz5imhZvjnUT56Ye9smvQEK1UZbWT1Lu16CA8TZc3BgAMhiY5w2FGJVx",
  "key24": "2BNW7jAfqWqX2nP7qopcvExiQVy7LhnUujnbXiwAu3fNQijdBxiwf6WnhZuRMLQyxYphr2GCFCSVSi19G4p6VAfH",
  "key25": "8kF2tJrAfYnMhE4UBM6FJ56bEgxUErNGyPdD5YLv2rxe4g8u74jQEPUqcdhKjwSbQKJZtpAa4a4JA8dUmem8b86",
  "key26": "4SNXdnLoF7w5d4QHLxvUVzKuyM8i6gxinkh6jB5DZnsDwrEwA7sp17LJKd7mwnsxBW4R9uE1LW24XrQ1boseYViM",
  "key27": "ofDt1D9BEBeNvbeFwti6TVEruC7F9PJc138PjyavzB82jQQnZNhXBvWzejnM4PdVAoxFJE1sNwwNGS5yRGbGNFt",
  "key28": "3rNszbQkDn9iEB2FwLSQnL4iYdE2XVzoGK2ndA7LXSKvjBR19iotPVxzPMAaZkFeo2myHSB2iwZJugGUfGgXKDhP",
  "key29": "43NFity6Uo445GmZyy3Sb8hiMxE4eQt4tnyQnVjQqqMnNYQhddNvgjJoFiLdbkT2GLgfnHE7BKDL8sC3oDhu3jpn",
  "key30": "2661J4uomL4dZhXHgNnXPhRvGg3sL8x8tvtCceN9iAepyuRTd7wFiDJeFT68dHkM4m1RYC7F79WUXSwYjko3xbX7",
  "key31": "4mAG66mZ2fySUZjj9YwBcX9AZnNpMyMK248QZsTQiXQ1HFyhdY4yaW4ej24Lybo4McFtRywXpEVHGbCtBrHmZHPa",
  "key32": "2BDK9K7jpK7NDG9q1aVYe9sNTVs5CRt7DtSSF2s7fps6cw7NYpmPunVAcpU5okfRof5eezgEgfo78pFCj9PJNtL9",
  "key33": "4C2N6Bjg6zxBvCLTJgyArJJg8HpuY5ed7PdzcA1nn9Z6pvQdr2dpSsCfKgUeWyQtwfuU8XpDu2t43UhPsAZfGs6i",
  "key34": "3GuAVPHyXVQnU5wQghF6HVukq1Huk79WKBCNV4XTDn8GK5KcfawikzgrUscBCk77CAZ7DUMecnNyT1niDVceGpLf",
  "key35": "vqXuNDEth5Pvk47daD2L6Yf3ErEEgezQMCbDzoBKPP2r89NKNccXAb2grWdmdbq9wv9LsKfmxvXmfTbwFfJquse",
  "key36": "LMwgUWCYX5s4zoaMTyye9aZHPvPfqC8i8Ex3UXUKzznvPQmgpo8peTka6z4pg5JwjVn4DffNgpDa6PxTjtp36ZX",
  "key37": "5zvNJCLarAikJFivBw9PtHgeFBaVz4SGYB2vNAM9BhGCXn2M539qWngocK8xLwbj4TUh9xvZdkSD9RKceEb97fCh",
  "key38": "55PsnLsAWMNg1HKkuQNF6j3KmHY4j46hMDvEvqnRiyTCnkXWFHgTCjuxbvbgaxTAYhJdgGLYA7cfPdX9RMAvQXyt",
  "key39": "28BmHUu1vgunqaDKZoUMZNwTv3okmJyambwc7EpMJ2VBvj9qddJBQqfriyAsyhTKa6s2Q5tpxFvDr1C7ZaaAfxPi",
  "key40": "43yFk5zcUWSJxJeXjnU4XkkJJpMr34NNqLMMK8bdQctm7rS3jD4g313tSR6EUkx46jssz5HcxqBxXdAyez4BDhNg",
  "key41": "43wYc3GnfHchn4DSvMqhzjRHXJH82zaePuKdyQHuTAVvH2imtHyoZfdAUb6jJaHr1VeJQn667ppxHkbHMBuS1cWP",
  "key42": "31v9VytFk9pEYYFqmCT7eCiRj2Vnyp9AKWSRqqCsMV6Luir5AD8d4dBGQTqpvwYPN8ro45kx8eosYT5iAAkWDDdr",
  "key43": "5cdavq6SgkZ435fgpnaj2Tkxbmf8CG2hDCw4WLnBSmj85K9S4e9SXSMYJm4h5UQnsJv2cA9rwnHQ2tU3TDdQHvvV",
  "key44": "52PFfzVfBGucv2u2A1Cbx4Cr4vkA9CmRWsbfMoa1X2fTf4JW2c6fbKmovJU4KCa7dZCqN1ymxXtfbw1M2GWuCEfG"
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
