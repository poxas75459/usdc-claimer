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
    "Y78qFmnWXYzpEK976ZNVi1vfghoAXGvrYDFwBdU9Rri39yf5f1j54oTfkuZdfKaniydksVHfxEXgNJJ1VWJbK4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iX7gxWNM64BkYMq9Fk1dcx2kqygCHmoRTA2DmoffYUS7xkswaxUHT9dr8nf9L1zd2GKqG2CDbDTUmXiyyqLQeEe",
  "key1": "wThPvTqm83qQ8LSqEx59EMECeTvVBwje9LNPwGrmmesZ9cjksBF4cZKveyugSvqh3CzjmArXsdffr85mHAmqgNQ",
  "key2": "4LmXDxb4FphfKZ3Uyxnyf7qUoc11ATQW5RpyAqpNiwSJQ6Y7iDvxfGpEuEQixn72Sid2WBCnRMZvPfYBk89izaqi",
  "key3": "5NMD5cU3ev1qH9EYZvsHEJTj2QBMsPQb3TnvLPaVwhwvX3K6uvqRUg4QruiQGEwZD3iufeGhz9fdhU5WDXtQAiwn",
  "key4": "4C8zm56D1HeRPnXWqQwSiVNXiAxz8e7y3mpjR1cqvfPdYYirgmViJFwhRXLvK64s3CWuMUXdNS9Rm6e2xi6hT9eP",
  "key5": "Y5EexBJ1J9rFTTYEGQxg47hoLAfmm7xmQADz6FHf9wiWo8BdrQn5Jcdes8tyDdaWcqCPYP66CDV9W8t8JA1SQak",
  "key6": "4UZnjbCYrGpqJP8fp6i8vHwBJge1co7T7UjigYgbLueycTR2A9GU2TEUyDL6xu4rgNEyXinjVEcKT4ubrwnJHYmW",
  "key7": "2vVyDq6db1JTczJnFhQnBWSymMBW8wWbsGyW6qVRgkjuPzZcmoR2RiSSXw56XeamjTrhJLCpytjbtuRoVEoyDpoB",
  "key8": "53GSvasfa7HSL8L1WSaeaCqzPM4TbzokmXpxAJPpLB9HG5S7BRCBZEmwdBE6ULGT454MUXDMSrXfHB6yCtYCYtyS",
  "key9": "DgMWSGczsJtbppPpgqSdu7AmeeeXLYMzDvTCvAGpJM3j4MBhd93p7EAgjcagDX22MnNo1n8Zb5tUng7Ygnjct5A",
  "key10": "2GGCJmUUCmpT2z4VHbpGTQRm4TJfrf2r17nqDZSACZ6HHj16muWS22Jb7ow7vohDUWbNmEpUQ3ZWcFjYXou76vdY",
  "key11": "4PfBPD3Kb8xr7EhXnx2euRYARxx2dohJAjD8iNJ7uaK89RhvjzPsMHuec5nxsDFQECz5DaAANvpkhbbmGw79y7CM",
  "key12": "5AH9Vqra37WXqFwpfFSUzB6AtPfSbrP8JDUhjmSHBJXQmMKbHxZ322Tff9h61d6GThqwjYj816BbwB9bVfvzY3To",
  "key13": "58oMi1s2Et8Tf1SSv84ANdLByTSQy4gj6g7KxQ82BaVGQosY1YPYFY6QcYB8CwYLvzw1H9JbgfCg3RwZVjb5PGV1",
  "key14": "4PrbG2LSGHfha51ZhsWRaN6x9vbQYHb28BARKUPcfCMPVsPK8hMRnmhcgzTYk7zBpZah8CNPRWzzDoQz3xjK58PZ",
  "key15": "g7bhY9LnnBULcKWsv8N9C9rKABWLitvX5EJbM1uhxmprAJsDovkt3avX6Spig2iusWR9bftseAYpQM5qyyouTm4",
  "key16": "5GTjbBUXepPtgMy6P4EbF3cs9wmyWHcibpMax9BwTJQ3yQe1NYV87w32KVvdJgQyvjpuSdC9TnTAtXSnZYNAEHjb",
  "key17": "49c8GXKhrmspXGxpDa63sQ3bGyA7S5g86krzvFpSm82sdTmQEQvtbniRte3PmBVo25Bth5V2fUWqi6MNRLhL4ZLF",
  "key18": "JSGodB8YmEmBe57457dRD4QjhVPTven8unPJxfhCK8vY6SsANqrd1Np34xWNpzTqiUWLFyDYKRS3FTzZBpKmAAo",
  "key19": "4Sxwe56GSBrdHYNgHLtwtx3N8KpJFJBDRY5oPy9zSrb8uLx8EqSWkJ1DTAScs9Xrcx16RQYhyu2RGvWyk7wXAW1d",
  "key20": "Dc7cDmRhxPhudxCiVGf2gq7Uye9Gsp69V6qCBSiFbJdBmrJMCvmLsTyz5QEWmrkGpdDysfm45ynv7dYx9NQekF3",
  "key21": "4tnMRhBxrH3VVSdXNmWbPE1nTytf4ra3dvafzM8LbAApJc1hPcdXNQacZPBftijnQMF86Whss2EUJqmQYxGSWmxC",
  "key22": "5a4eVPY4tvTQBG8QJaodpcGJRjZPSrhErAq5GLy6gTMR3LRgL9J4tGTsha4481CfKKA9oAhv5XrR8md35LZ2QCno",
  "key23": "4W3W3xfD4Cn66KTg6zGnFpJN79tJLBKxm7ihi1yCfGRqCSsxvJCwxr9oAByrPXBrvVApXCyFVFkwL5VJfJjSTRkz",
  "key24": "3gaeTjZ6KMN6hNFzgJYWv2YZZ7Nji3qbwmYc4nPnNbvnM9LsKvYAARmtELYZytgCetzq8FoPhcEuGej9emNUBZQb",
  "key25": "47Hkz4kPLhCisfSpGq7TizG674u8bDkvomCZcPK9ng2cJ4WGZ2H3e5Ax4tsa5s8gnVVKKkm5HTHzfeGz9UnRaRzA",
  "key26": "4RRK2MK5RxM1cef3UyzboAfAjG5jJfbrM41ARzYT1k7uVvzUWJ6i95o7chaHBB8dgFSgxQx1Qu1awoE2yXzKTmFH",
  "key27": "5KyJqx14p6vaPbXGbjGqYVMn9hFiSM98hkAUUtEbagvExZ9xNtV8UjeuRP2DTY3SUVPkR9tFAYHaRFYP2bK2jAnt",
  "key28": "4gbbaKZ2APxQFTAogKjR68KueDwQXXhZWNtzjuH7Q969FgzfLXWQkss6o6NvyWer8mPyR7d4n6TpqLapJsgYRHAz",
  "key29": "31LFgvMqBneCGumAiU7ZB33tiThoZVFdXXckVp6mK3rGWb1yPSVCgLg7f64hsbjHd2giTdZMhTCGJ2JY7nbPPJDE",
  "key30": "3P8qKfoEtENYC31uME6Da2C3Hz1KSzF2pV9p6tvbmkXGpTJN4fctojLN1tXAfqE6469mU9ABrPRYaTirZApjD5sm",
  "key31": "4zX4699qkv3GBaNZnfUks2zyEpp2LDEXMDd1HkC4YP73nBKEjke5PindKviBm5PsYPG9EV5WpYDDUj1RC3GjYQ1c",
  "key32": "357rRVLyEtwRAknHzQ9AuSj4N35LFkyJmVxLUkVASJRTuCghAb6NEMXhkZugSu1BJNo8fDiALECPM14aftFJAo14",
  "key33": "5igxKjS1FB1Yzo7kgrTrg9i3QTZ4xJwU4pZGFRyNM8XV75GAjA7RRmDLweoS57oGimgyifGnfMmZNso1P1WxfjSL",
  "key34": "5mMxjFxq772wnY1SjBkEPZ5Dox9M9iAFbuxYTibWNv5xQsKB5ZCiSn3dqR2UQz2uep7DENJu9E1ZEHCCKohXKkAr",
  "key35": "4RNgHsZm6HAfrkmRxHZ1LJ8Vuzwc9rAqtxAojh2Ddt9mBuazCGVut4iHauANW4iiErLDwcAUTtJz7nVrUwoU3dGt",
  "key36": "3Tg7Xks53RyyMHRDTW3gak6CRo7ex3SWf4pvJN3cbMX8QTcKEsmhdbyEohMeHdsP6GoUwrCqbApPRbXC9E69KHRE",
  "key37": "Da4Q6u2LyTNFgACL94ns6DxYV79gLZcqo3Vq6duk7JctoJEbm6bb1xuzfD6htsAL4k5kn8s3SzdQKiHE6gDARcR",
  "key38": "4UQp6kuDGqA89vohGJHP4oCZ2aAB84jM5fjgkyGEfjTENiCdviQkGXNcxhsdXKAbAgfHApnwNwoBq78AdH5GCojr",
  "key39": "3uLeAkfUWRppRpypR9WPSYZjUeCVzRzVoixnDTdWDME1TtSaUmQhG7qp6SMTmoS6KR98nuEdGk9Z4tSzmaCWRc4V",
  "key40": "55AiaRbMSvUoyPPCqB2emtd38M5UHy9fHPG9azY1GpzvC3bD1rg1DEvGPPQ8YtdfuCEkTr3KXGr3tTFZgcKyU7Mr",
  "key41": "xu6hfSf4SdgvEXSNPmWeo7rfhfVQ4Ro2KWLL5uMyzUeu9czKTCvYBzHkEsgVJoexigpB3P69e3ur96azCf4vkqi",
  "key42": "2uwuupHurppgohMH51UyCQe6b5zC9UDf9WdtPjSzeA6TjqZ64HDgjj5eAv8yBhweVbYzcW6e4p7ucMBYrJcfNa5B",
  "key43": "2PFscxUTPWNVn6jpGxBYM11ceQ9agYQJ6XJbimXDdh7oPr2gQASu4iovJMaiyZx5tkeYsqxCjeNyX99mQeN2WSoK",
  "key44": "3sZk4iCoiwp5CqzehHKbE5tam3XFyZLQEVJ9y1nk5iTX4xxSC7vxPyx48hffhMscpGma4FVBrzZCXX9HSP6MUzCa",
  "key45": "zhtpavPn4aEJB72a1uUvGBq9NpjZmB3Hutz2jePNL69oBA7S9M4fyjX7L8y11mq4ghAzqq7b8syPBXcv7Lsx2zG",
  "key46": "4rhM5UYFPuDMHbe2t2HGrgA64MDnVXjbVGXNJFVsQyGPjLCoRwjdHXsi1DVBJGdKYuMvgtmxfVCYxNpn848PZf4h",
  "key47": "2NsRjbsHUEndDup6fnezKDA5M19ZK8eB7o8wFQtWe7HnTDs3oYT7r7eTnRJ6eZcNeCNMWFfiRqMG8i31Jq7exoTd",
  "key48": "53FsXAkdSzkkPSypd4G9ZekXgU18AYfcKPy91EF2JpQT96ULruB4HSbbU1zQp2BJzCopMGt2AdFnGwY2J8qAQseW",
  "key49": "4rn3sE4dhfB4hpeZm1nD1uQo8gxJFzLqHduvFDT2QdDSgTSqfmqZ6dcjV6PJ1K6creN36vC5FjybJVp2FoZHuhBs"
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
