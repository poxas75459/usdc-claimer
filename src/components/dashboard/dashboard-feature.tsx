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
    "5NwB6zsmbAjjVykTKhS6uk1Q9oAFRfoqftpE4hTvG4uzYSrcHyfHwy14ETy8a47RtVyL1eoFWu2UCmL12yDYER1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GmVsSaXknpt3v7CAAtRkyohqGfBjyFpShynsk3c9gcySwK4tmdo9RhFWGj2cniBUnGh2HWXa2yX3Br1A7P7z2Z",
  "key1": "3em4sETH5myP1YJNppcYS2TLZbjirKKvyhRy2zYPw5ULmTa7AzwcBEk5hPsCJFAJmgqrrGf29neCF1M6xhx9aKdD",
  "key2": "4KqFWnE9X8Nxy9HXKYAB5oRH6hrZhs9GGRg8foz7wtYnVYtLKTEfidwCFJJj6i8FU99u4MbQ57BDBcfDVC4PHQtz",
  "key3": "TZcsALcoD2mAQziYeQvVQ92X8o9gk5WUWA1fniTSRe3xNvh8dW2tHxQr68qzEu2gjXDrD477L8TP3RoXbR6mYtE",
  "key4": "5tXrrYwqH4YTkzVrH5myk7achDfdPpSgRH4rityhtcmKaBBJJeJZYQGVcQX52LhLyGTJiTLyhr97ufiBEPnvs2ES",
  "key5": "5vFbKeAzcm56KHa2mJ4SFfSKpBzmQ2iL2V7j5RZCkwzgW7t81rRtfV8LNexTfAA4ecJxr7GpcMqKXK6PQZeuPYbF",
  "key6": "zu5CwD5XktriW2D11Jf2KSTCbAdEF2S6jAVZruxTfoJJ9iYafFqofxm4uZAkpuA2sLcewVNBWGjwwRFvL81tpSw",
  "key7": "4DCwy6RHDHyYBLHVTK1eTZzDTHWUSf1uC8VmWixuHNeKW3YU5dENwNi6zM6DH8ExhufbkXkPx9hwYtHtLAoN27RS",
  "key8": "38zeysgNmnTzroFNmiWpVPFnd1Z9xSpAW5jfojVbuSQjAZLiCsDY1WhwASmY8WWEt5wPQushb3UEYHQykuFExjAW",
  "key9": "267Lmp4zW7u288QM6BEaw8oEBK7BJRLimAYpCU6PtShLzBLwDTwNdWy1fLKeMnttYgDGbgxCy8QUNmFJp3uactaA",
  "key10": "QJHgjDVi77FhYZkoem1Ym8ctHih66gHG4hfjMs7BdsEo37gnJfoR4hnLUDDS8SkVVFFke3VMTAtVu2j3aAEh1BR",
  "key11": "2LeTBd2dp7LXX5jgRUccjA8n61AeDWs56QfYxEWX36AfgvmeNUBY8M6GwkCUo473cJyBdt4eDKATytxR31UQsWvP",
  "key12": "X4dkxstq7VNCfafWHUvkFKxp6kN7MSfsh5r82qoHq7TteRodEWcFYNtuS3MQqDPwSzgzpVZRcPp5giKFimRe6Qe",
  "key13": "3xq5n8yvgGFkoW7XK9b2CxCFYsCDfQ2Tj8B98sNwRVhXW9hCBaKnWXVtmpL4WvgQ2ZMcGoEGTKWdFR1niQ9tAfE",
  "key14": "4y3zg73maiwwetyqVPhTEoy2vBUeV9aqvLGw1fQsBT3rFQHMXjfHGYoRWv84RUGfJfZ1aXUBfZzznB4maseEGpnv",
  "key15": "3zfjfDUWEAcn6uoRtmrJearSraMLH2V2gaM3ZhY5gCtAcDxRa9JfhZahQpDhbj39XkDrCznSEQi4trx2GJiYR3dM",
  "key16": "23sezaYHEwbHz3ciBy6EwEQGntcYKsRAvwZvknhm4B8deHHC5MmDjpQSzCZ4nqkRRRECXYMKn4p2frE9DuqYhVNa",
  "key17": "WH3kwzh7HnD2PXfXdop8qtAbc3h7xAML8MrVAcAv6sJy6GEyxi1pNgHGoQERxm6Y7d1efjXWhGFLfdjCtyyVEpA",
  "key18": "2hEfpdUnWgP8HwVjnGXgP9Kc6LakESV6HEpcSf7c5rQPpncGnrihNBw4Wi51m1bRx3hSYdPRyy5hnW1JPvVKeHvg",
  "key19": "599kXvxr63jGxJ4P8zxiLUERvYgmAXi4kinMpDuxhkS4qmKFqP6o5gNMyo7B1gBJ2cFdsNScLAKNsP42QQBWmxFs",
  "key20": "5gPg345TR3WpSLbvkFQUHkNpCJHvusUczavsjZquSVMWeN999SYUMoM1EtYehxTVGwSf63XThfQwVxQfmDxjKTSn",
  "key21": "6rBpqiMe23WSoa1cnv69B1nGgigRNr7Zomgi3x8mmdaQhYUsazsqYTuDJ2Dd4HChPiWyxGpegEeXSDorSvrmoRA",
  "key22": "2kFDoXbHfT5o8wd5uR84nYxAaKrLRoWtPEGwGwkkGd7NMDS1972Pu3Pq97K17vLHFyDEj54toFgxa4dMLApf16rQ",
  "key23": "AwAdfpD2JkAXPFwX3y2xJ3ZyvWXicoJWDPUUkfimif6yGokn7MY2je7Q9cMRPE7svJnxoVUSG4Zq9R8aej4ecrz",
  "key24": "26gv1RXWgRb1DhvDnAwn8djJmN8FDmcXQhWT62cvXky3gQM5XKWP8NG3JYyfaLrArZ6oyULN7LrWWTuvCGFgZv4a",
  "key25": "9jmRkLNbSXpPKqw8HQBE3cJguaFgCdcEUxG4cEZtNg9zZx21KKL8NECxwiMMg4evEhky1Ei2uySdSk5ddmHA7mx",
  "key26": "457FSqLHBcctRvnVDpNG9Nad8xSbtsU8zwBV7dK5PcP2QnWx68HRZ9uaZpHeRGTPWrExmYH649amJgkRntNwZkiW",
  "key27": "42DzKWNeCfs3Bo7o5WnTjuDAk2xjUyD7VL6ZxGMeXmJciHz8khgdJEaecq79Uca9hJeUWk7UvQ3cg4z372kZ2kUC",
  "key28": "58qRejMtYF2VFV1UxBxcL4yStm7UuhDbkVLRsiC5rSxheE9ghNngDGsoAkYDeH8PcEKgotujzU6K4jDDt6XVVUx8",
  "key29": "TBHBXuK7WYodejeSQa58wP5RPhMCcxpzJrkmFon5i1h5hCqHAiBhpGiUNX5SeopDhVWiNiUbMcuEVZN7akQRc32"
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
