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
    "5m4MuC3wADdFxPSebFz1YPAYd78KfA81JgHybq2FKem5CMmZknHFJ5zKsZMayqhxubVSoHuGUx4fRSnvPXb8H7Mk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xrNn4iDzCttyHjDKiywvereWhS3qUwnKLBtguoE3exN6qgeMT95BpYMA9ehDjL2DdTFPfEviAMFRKsdWrAjtsyB",
  "key1": "3udTmByJGtaPMPPYPXkA2kWpvG2edue1Josnpp2EMpAwrHn3d8RQVXDy9PmdmPFaFa9Yb9A7s3bazaakEunu6hYP",
  "key2": "4yYqo2JDvZi7mcahUrPx9iTQUtnnyjsPWZX4E1eKMphoMtQi4HafZGooHVnDmVi5aN41wzrfGDudZFZUXGom4HVs",
  "key3": "5iNU8J2jGDRq8axvGhqB8w6HqqSF2LHiSsb3uTKE48862KyFxgcqR6n94UnMdGpj15K1gdd7HSCXaBQsnmB7VLFW",
  "key4": "3dUVksYdXM3KCjJMDuPye2zSqdfZtBEu5Vjggy5DiidGiPFGjnGW8AgFg9mCP2L9TT16qXfYPRM6Mve99WvH36s7",
  "key5": "22b361jw6vbr8JRiY3deA1MCd8xc83bRzMMXN1YpnGZfakzuS77MKwJRPsvGW1a2ArCpFF661oSUAnGVeSxNTZAz",
  "key6": "3YJ9bhYwJfEmFJRKvGbKnNG5Jm95iN61nu2x68dfyy1d6hy29QAnq7xuumVymEkpX53Gh49kSvv1NtUj6QLBGy3e",
  "key7": "4NN7t4q8wwhM58czhLrXPu5AeQp9cKhZNAoFjGNPNoCUTkYH68PUQ17oay84gbmptL4sS4UGE1TdoiWMCgrkHvuT",
  "key8": "4rcpHMngreKET3mmtR6NPVs6CQn2AKVgHnLijGCvjVPX67FnYs8hC8CUYcjtcPj6d6PHv7QwBdJYUiqDF2Wc6ekk",
  "key9": "2BFSCN7QQSX2n5YG3UM6YjHFNCWu3qcnYNuN6M8bRbLMUq46jcxCYCgkB3gbtxVFRz8r3CfsNctN4MHJUUYvzWFv",
  "key10": "SzvViM8DpPuXFXh6Zfvjezcd9YSdxxNWCi5waqBRmWskdu9mAZDTQnVtGZt6K2nFo3VQuUuP1du7WkRg4q8e2RE",
  "key11": "36Z8RxdRTtsb2i2y4hHpmazEiAHsx4RM8tZjX4s4z83BpSmgKqWbbpWouwDkMjs41utYDdP5hrWvC86qtNY7cs3i",
  "key12": "5BaapmqvEgkJ4kFNU1oHqERHQY8EEQ3Hani1NJDYz146v9TgzJddn21oTfNHAbUCF3zqMCxrW6NfAZwXJZr47Rq1",
  "key13": "3URAYerDCS7VJcYdDRwncf7zqtbGB7Mb6EmGTyZu7629UwGahMhtjD2x2LHNXKgbGiapMd7pPMsqrekSqCh2dzW4",
  "key14": "4WEfufbHg2XXeaQo8b6fK2GTFbz2dtzWT4MpNYJvFx5RVs4QAxmvpKDZFaNh98pyt3PPijNsgPxJHY6SscNFTH2w",
  "key15": "65FjgG6vm9aLzrkh2YmYsvGD1D7L2nayiV1NSio5MuhovaqPJX4PdJKHHALTCiADDz4QE9cg3atV137W5sCCz97V",
  "key16": "vewAH6VcCUrCQHUPV7yPcu9dMsZUdJEK6YWbdnwKs4NcFJfZTJ58LddRvEPkDPqNL8EKbNfq5ohctiDuM91Ftvy",
  "key17": "4NwvDFi5XzxJAfjnQpHFnavv7eHf5oh1a1bij8sKe1LRrrGkZEC893oRa4ZqHKMW4tJfUM9C3CUfHdJMuf4CPKPP",
  "key18": "5mj5ngufJ8X7Gde9e7hjbu3dvEkAkoBYY1cZZXm6xn1JkoZLvYSzGmUN7TaPFR1VYiSKtHhM3cTKDYXb4o5S3ncP",
  "key19": "3t6AkjsJSdcEYjMvHQNp48KWeSe8SsBZp7Bex4S5rBHPpZ5krkRhDfqv55BTxnWRPLo8XnwrS5bgkXaHgMz8W87i",
  "key20": "5jtTpkHqLL91HjkSbmbDP3ioRswZgqAsH1AdPbSpgExEyuYcZY4Dp4vvkEaqThrrPTu2tLfRqi6GAhyyYAZ2LJ5j",
  "key21": "5nNy5tEAUsSiTeanKs2F1aBeAA6Y1XjByegyGHxEnhfqYFMt63e8LX2sMxYhVSELbcHP8bc8DVqWuuoW8iA4U2gy",
  "key22": "32Vg2m3zb3vcZbSxeGUEUgVztAziaMFq9QFdAUW6k5k8XL3GLNeuFwxXVejuXWrPsfZzjxVj8JfKijpbpCFbfkxd",
  "key23": "41dF4QcLWdXn3i4nKBQdvPzUTPdvfgu5igdQVbmfUFhKiMwjXP7Y3LuG2cug4Xw1MXr44u9hBqxYazF8ajj8iwuv",
  "key24": "4az2U2ysLm6U8gaP5fafvqDi7gWHWJejLf7Wr8qf1HeTnxN1JFP4DF7h3uZnXpR345SdHU5GsDvbFGj69ycajjoT",
  "key25": "jSiNUrmznC74nzvQXum2CdijYc1Bss8Bn4v7ggFZR89weT6vpKfAF2yPMo1q6f4dfJYHS5nMSZKcwTHdTzd7YAZ",
  "key26": "3CKpaBvkmnT6Sz8o6mfbxndCYrdEWAPCwAYXcp9Gx9mLmARzwDFUU2i2arXR6BHP2RSYUhosAa3UMEarnSBSS41k",
  "key27": "3CxFLV4UgxBuWZ8QCJ5nrZA8b3FyyoThgmJqmX6Leitjx5ZMh1sq6cPDn8a3qkEZjaZgyKvpLJ9CWYd43mYXVqnQ",
  "key28": "GqJGVw7QNtH4LoAeFNiZPuyMSupiwyB389fAsAss8qTv7UcbEtcCQL3C6gKaQjt7JThwYv9F9PVrdqqerPoQn9L",
  "key29": "2DKgm34WATePTAfSSenjbBdFtdgJ2RRQScsHiizMUuMf7RzE8o5esFhpMJZ92W2pShhJtcoxVp4tSWTp77tZhogM",
  "key30": "4pdXWjFo9uhBdALV2vjSh3SzqabSNoH2yQ1Sw6BMiTjdVCcqo6iqEHtn9qQtXacCG2TjG2Jsfr6R8AZ2eNRcp6LE",
  "key31": "5XeuCvBUHGrcnxXsAE9Pti72qWyYagtdoDg7Ma2sXC2jywde4sWs7CZXMnPy4ALCjCndwbxLcbHo9TpK3zSvmPwY",
  "key32": "3YD4FgkXXQ5BaaPcxuM7yUNATjriRQKqdKXiXu7waexPMhz8s1fLwgxu6cwxFAvv2mVL4LHpbpN9JTApokPYehZ1",
  "key33": "hUDHX29BgGTdED47fCXEonht3Bxts5XmzthYzt5WSzSaWZyYwQ1NN4VGKDCRL5pni7wiwJRmak2GckmhBcXPjvo",
  "key34": "XkkMDkMu8eF54qx2fB4kUkpdrLCJXFoAzWjni8a8vuWLDqQfpgVB6gGDgWyMjoPqQKtZSdoVLGdPokVsH8tdxyt",
  "key35": "dJzgJdJHUzqTpPWKKCrkuauEzgfBNhA1qEkCyLyLJeJxpF3Q9W2B68J6HxrWzBnQKP8YrGZRFAMqKwcf1smC9za",
  "key36": "MiFB3sNyLCTAabk3tzmWr3oD2pocndaoaZysTv3u2oHS2VEZTtQ3raDUH5KfdSKCiiM2GgYaP6qYZD7vpvndSWr",
  "key37": "dgRahANGUmptkcXh3fPckT7MPUVYsjMfgdepmuG7Mb4TYxa4V82cxRTtYVHEB9L7VbvwQGiCJBafRx31PbdzRsn",
  "key38": "2N3QC6xop4ZrMyKdLjUUm6NhKdAh6JnBPR9tW9TquRbiobmtcPTbfyrE8r96wVsYwDJAYGq7nzxNhUMDKt6E7r52",
  "key39": "4pRVQZfeJ4x2JuLr1fsvEgzPyvJZ3tuqxw9JZazDznh2Fs6R1NuAXeVZkkPtFQxjT286xUsH2NgwuSLCsJ8u4m7j",
  "key40": "ZNjwmDp3UWYdn7ZSvSKfQ7N1y8wjAEU18i8ijzQfrdaHbmHGvFCt1v6UdMtCG5xWj1LBgbrNfj1CjCje5kbbwam",
  "key41": "3YpaCQNeUvKQXfD2KDDYSRaUUfBE58zZTaX7ThD7bb5w6xLa1Wi5AandKqHcDeYkjMmub7VadspLxWsSSQM3Qdq1",
  "key42": "3UhGviMEB2Eyp66XzM8YyuJ7X4V2psfdaJiGAgjLAn4y96SXioBbkr4SAug2NxJKmECUbUHmrtJL522KbcvfQEMz"
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
