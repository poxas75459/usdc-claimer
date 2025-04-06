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
    "4vXJk3W9d2vmSujF94okwpZm4pBqcw1seWp2Unm1e6Z4kRM88ui6VaoCfGxB33N4uhkyvHEUHm1GxfoTLLhRzyN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xdH25BBbesoJr1vksuvnrUZ8Zvz3GRPXiU5iSrBFypqCLQpXURYXZrTotbZv22Dku7K6GyYcH7YNNJMP8Tb79qA",
  "key1": "5myaRgc8n1Jm7Uhmc9JgZLR5ZAsdK9GJDpAvymLKHDbYqBDsjBcHa3LaLP3JyMFDxbDkTrqY2U3ZJ6rUZfpGnWTc",
  "key2": "2TNcbgNJbjc4CV9hGiRXEEz1LBe8nmM6Vbjh18BX3MSveZnSvR6Qz4rVXC6Vh1BaqRU9zdi5ECguPBFfuct8bfcb",
  "key3": "5sFhez7eobR2CPyYTNrRoXCN7TyHCYomGvDzutRDD23V7rcA9K6t7dX6Hsq4BR8WA2wG2N4NyRCheWo5kGzr37e8",
  "key4": "4uhEyXe5g4TeS9CMZfv6iScH6VfYFDgJ1EyCWP2EwSpsh7xPALuWDGht9z6TfPGrX9kHdvDqqCqQH3ZGWa5zDK5C",
  "key5": "3keGBoTR5iqdSh8qKYFSPX3j5tjHHq3J9YSdGHVU2pYD2hcCHjQ6qRtufKQCjMon33nkpv4DkVYvynzShSx7nDAP",
  "key6": "d2yoftbHRk3gnScVXsAzjaJSh1XBMuY9h1BPLetG7BHWup2FJVpjB6mspbPzfoCPx7rajDiHvoPy4xF1FNGAdYd",
  "key7": "4qYGQm766kfRWU4CnsAHsVYazFcitxiSHAddTXbxB7drFvE5xTyAkaiZTFDQWas7rg9JTU8cTPDmHLQQfFLow4Gb",
  "key8": "5viC6wYS9FUNLi5zt9iWXFmDTEGDQFfKbiEEnv5ijoPgZXQVrEgoywmvheJ8vBqFbDAg54FHq7JGpyU2sbLmeBFW",
  "key9": "3URoY8vrobR1JQPEr9DKKQD6zRnBKouKqgQT7niYAwMKPJphXjxz3PafJTy3NFNctBM6PMRAeo41YraTHeUi2HRQ",
  "key10": "4vBA6ib5myVrBoKRkEfLwz3HTann9GbTSULYVhapaV9TNePZ1ZupS7SL9bVJPcCkFiFfj7Q1qsyHULoMxArpReHa",
  "key11": "53P4BNM1mGFshs7iRS7nw47TafJGCiy6n8DbcXE9Ws3tLCiYu2Ha6YnQ6RS3g7hK25Cr5faKWYzFpgZHtzBw4Voa",
  "key12": "2SFE4MLkn4aFBKJbc2CYK2i2drC1C4Gb7wrgdfcSP9DUjx7igYLqioKQt3knZBENFfAtAA4ffxDLQbtCz1xo2Esv",
  "key13": "5t21QGmhEtkg1ybf9rSJb3BUZPiGLfFcBY9wFBBPbnpfgGJ5rbaottLS4UvQyVzj1FVdBwwFYRcE5h8fm4nPWuTH",
  "key14": "4sQLwNEk4J9HR2PqQiR3aZJAXTEuYXESZkeTb8BkWJDivLLVrP1qBX33v4nRmfZkUX64KfM6C57LW1qKw9M8WD6Y",
  "key15": "2QDwUJmjuxGDRYifiKRht1sayrJP27TfbtoJM4Pnn52Y29P6SPdGPL7uGapjAxWTicnb2oEnwprBHA43756EbuVc",
  "key16": "42ckTa8LcdxsFEcqYNkUnD6rvcCp7R8MnjT6bjjpiwubp3EfEZwovRzX8QW2VHA38oXpK4Vc7jxL5aKY7E5Vqdhr",
  "key17": "22WaFTvwEFnhcdRwHwCZKo8hUyPJrbuuY5EXcPed61kWGrxeoX4sc9VVbMJFeGp4Pe118E15AQhH5xu6wzGEQiMp",
  "key18": "XUmbo5kHLWViSFDxnhQHtArHbXBXxvbdCYauGyiYTupfUpRmzaCyoGiHuo6QyiabcVy3KPQ2MhRavX64kKWkiMb",
  "key19": "2m6EdgFJiU9LxnXUDAHJ65GfuDvkUKpLW82Aa3bo3HtZxDW9BJrahSajMRrtGLLoHx2ZHCETGWoJQmSMVus4THZc",
  "key20": "qbg7ewy9rRmE6BXxWAimu9JvH6p2xQHKsH44cwbHprCYjPfbjNsLxr8npxqL6HeTwQmPpDLVkoBSuy2f6YL9Gvy",
  "key21": "3TQ3SKfQTvVJuGqvzcBv5VGi9SpjEU5oyYPcew7Sc6ix4ZWi5wRKFVyGUyvVjhm7LReANmvuKs1k7ZiNz8qAvdpy",
  "key22": "NUzWjchbX3R4mYWXqGaxAVSyNwJ8LcwjddQydoamac1kNSLUvnioAx7Q7JYpVxRVKtLmwzcSh9CrDyDeyawh3g4",
  "key23": "2DKfrEhjL1q4J1r2J5PSoeyQCrVsFVE8P34dK3gszKNMDgCkPLJL16a4YL7WNcjbmh1GuypCWyahgdPd5GhDyJqS",
  "key24": "33S7UddyHMK5H1jDThmY5f4cX7etxtryzg5XXWEZ3k4STSrMRM495ddHeYYmHuQCGiE9XkFEoHMGwHpTXy2kqBGz",
  "key25": "331rwsZWHiXAeySMJg9Bk7Napz8etGjGtPFsP9UDNN7QptcNbKLzfxccmdCVUNFiPaVGvvsjMLcDEM1vAY1NoMma",
  "key26": "5PKAHM6vPVqAFtuTVLkmpMPVvxC2HA2NARU6PPuFJvoGhezhLxYJ2ZhU2WWqTVvoDht6h2ziTXLwAYobh2QnSGgh",
  "key27": "5yu1xt7MbeDnQsHAHoV4SxFwAU4qkUo7ngTUHAAVSeJWmfbFpfGC6Mxbvh3cMJvKBBa6bPdhowcajvLtNB8Yd6kX",
  "key28": "zs2xLE2uHHer2yYpUCJLLJVF5fJiznfLxXWNkKUxr4qZ4dCeR3uRVJqav3XNitUHHZdikdRha2Rwk1U232FfkyT",
  "key29": "4qKQcgyWbcTdcMraQTs8MZVy6qsz6US377fFVLWmaxSBQfWWJ4G3Y5rxg5z333j18tUpPzEcmC5ZFWCuiQc2xt3P",
  "key30": "59UVzA6JSuNRARMDTi6dyvDMK3Ki5Uvsgw6ntyXWoztgGCXWTR9SRBTEBgBtj98AFptLRbJVSc7qFmrQRrmhPyQ3",
  "key31": "3Y8eLYBcQRig2Mt7cXNMsoxjULjpdwaeyU1CLT9rKa2MKQ2SioarohvnpxfFXmgiWrstvJF1LFxgzRgWyA9T5cmC",
  "key32": "5CYoHCVF6iAtj1Lst6LF5zwSEKf4KRyWDj3cjm6Nw6Y6yHqsUDCsXAV4zdgo7gmGyskPrwXrktGLWWVxPbgoYEgX",
  "key33": "5HwFKNiyH4AGXT8YTwsFxSSVsoZc6A5THbEqGYxfA5NFZBhNVUDr8ruAJbeweoJ6RQqjpY4FTTfmekDruzWke1c6",
  "key34": "5HAhMEUDhQPS9e6YV2AyVcfXKNfSvoJ3wzTFRUhio2RJ2cZtx2QvAQDYp5pPMvE7hQa3S71zEtDXpAmFbbjpgAk4",
  "key35": "3KkHJoTYTCW9eeuRED7Nkb85JB6pdFuLbPYMMMaUo616umnWR5b8jXBgMMT61BfidMJZsBE9XxPbNa9z6K7xAdAN",
  "key36": "equT8bePyDZTYwqR9S6hj7Vzzkm792WNSZ8uwKEMk1w6LvpGar9XojBS1NMP1J5KVsEoXU8Mk5apmomxy4RhGAz",
  "key37": "6488WVDd9rEPkB887WqX5yhTNN9zARcGHPq1BFpdiisJmCAmDhCCYA9n3RiyRLYz8WNhLAQDHuodx1ee8wWRvxvZ",
  "key38": "3VfY2w7FrWBQTCRqt8wEc3yYSaUHPQ7gw3v5Vmr2ukjPySRj1DdHLZ18fEWhBjfKN6xhLWzY8EaFrECuLUuBv6Yr",
  "key39": "3ofEXoZs8iKG7e3Qt4kJuWYP4CHByy9sEJ23SRwvc4ptEvnbJWBnXaE9QDeUE6MeD7Eopwa6V89wUnndCKGea5FX",
  "key40": "crg8oo5vGM5aaYEUHaCEETZKb8ZdS8ouVX476hF36wQhNVu3kt5F3qsfivpSvRFdj2F9vUvbswWfTnD1RKy1XZv",
  "key41": "3cdhFstdXTbVRE9kq2s13RD32bUCpTVZvvzVW7vencCGT1jKUGbgFmxhVJZtAcwXwFgUh2pzXfNBHpjm2Ac53dqd",
  "key42": "3PJCs3YQzGN92LT5nrhCkrbdJPFt1iUiTx6u344rBqfdiQu2vV385n3YdhAs5JfzZRSrQiPbFE71UKvfpHhxzZGE",
  "key43": "9Enw4CPB4dSpi94zWJM55JCdmwpPF7qkJyu3wBKyTBq2hjBewNbLNUNL5oFg4zTtpV54AreHhNYUbDdsPqZ6dTP",
  "key44": "UjhEvLZ5pJ2Ex5Fe1XYeQmvL18nMfFPNT3QdAX9CK3AibGL36GYqUrzbec52Qg4psY9P2N8ULcsxtdtdLaUj4as",
  "key45": "3CUdLxw5jqWxpNqpgiWpWGpwtcnpd2fhaGnriVduuvD62f66PaamBWLf2s8RavcaoCfWiwuaHn11hmh5AQR814S7",
  "key46": "3kQgBUNtbdmE73ffzRRLZ1hyUqtbQxrjgLPFySPWaQo9GoeTX6kESX1i4Z6vgRnCuzFMzic3fUkg4RPH39mJgdsp",
  "key47": "3J28HuWzoEir5c2jS6ftZFHByNLntTN25XCTN9huZGM3S9RWwWsvVmod6ZVXeSP6k2b8LTbsv47GF8dpu4G1gLHg",
  "key48": "26MzwnPugQj4wVTmC5Q41qZwtA2QpTEBhWQNZaed9BWKSWktTbrb7Jt1peS5oHvXCYx5f1xV6iA5dW8wrpUD1yKc",
  "key49": "4oTwoHndVeUkNZj6uCsqisVXZix1w2ELiJ8YCAKxCpAhiTuHGVDc89uYFsaPi7KSJqbvnzhDPyqEoZfG7J9sYG8i"
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
