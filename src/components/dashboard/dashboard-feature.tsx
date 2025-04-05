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
    "31gZbYqqWierrd2sPiH8hsz1JuuuwByyuY7HHMPrFniymm7dRdDAseToQ8AdHDNB9Sf8fNLvnouFCGWw2RHrn9Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28n9Mys8MNqQZMKzLbjD21EYHcM6ZTd2emfgm3irw8M5DQDHRgmt2Cihp8D8Yy2oK5LmwLWbBVQzAtvitRZ4HC9B",
  "key1": "25kucEN8wXhc3y1t6TTFa1jZtu851XmXB6e5CpetbjtH5Um672aKKqLADizRKbWZpm2ZxLCmypTZ3uPu3J336Fky",
  "key2": "tUXHeyasE9zBJwmvE3j8giqzftrP6JBfqJTPp5RUoYPCsofL2tMSUYAnAMbPKc3SXBasheF2D4ZQMXvvNdygavR",
  "key3": "3jieXMejJT8hzA6vsMfQY4fixH3gzutVTgCsVerY7PJRzm9ovV75NcvE69W46Z4vSRsbLShMwuPCsCBsniFVFmpq",
  "key4": "4Mtc3sTtQahWQLm7ypQLYE2JZuWXzp8fPocA4iuo3GC4xkfRCQtDkdKSTr2LUArnqrqPaut2Xwa7adW1nxZh5dyC",
  "key5": "5WM2dN2h8734U1F9NtZQkhttV2wmUAFxKx9ecYcBw6a2dyaJMzPTiCPGQuhNkGRpX96CDkRHVK1Yaj1bASLyD29H",
  "key6": "2AQAuzSNXcNSzy2UQpSd6XnBXDGaKZ1fTSiw9jEQhYaitE6tVQjiZWwW7r5r8DswP5sWczKJmQUu67jjmx4Hqv4H",
  "key7": "3JRuApQz7nTDUz9yBa5NxPDXxbMEzDYwXQZJsJYat2Va6S7WomtT3tjkvGax6Q1sFaRF1dmx5d8U8MNc7r4iZC5c",
  "key8": "3M4a2MJNcRhjyszGu1VtFmv1LeFFoZmtLtxxW1YheNVXMbjtHzrAp5pmBsdwps7MbeXhQkapjxCbKGFR6ZEirxZ6",
  "key9": "5YgxBqwdYWWy2ZgX8ymntM6JW9oNNGzX6CvEytMaL4XJx2fWbimNJuHZfMSKxKgf3tHWuTTw8SNHni96W4zA6dWL",
  "key10": "3Rys9xoABY2MmksZ3xSk7bHZXD6ogiJrUAYd5dPKtEC56caqD7RAoDyuicsUfgreHgua9LAXgQ5ebZtWEh2zWWB2",
  "key11": "2F331h7bXmorsHFTuLCVZtyPc211ouHp9xDBdjSTEE94oYndQ7gUrcaqwvgUK9aFrVZPygTxfEszhNQG3KgwCTRF",
  "key12": "5LGHN7DuM7ZHsjR57AxgC9AaJrZHc5d7H4Y8TDnGpw8xNLTiwRdkoA3r9USXfqFF2NWuPNZNXLBScwdxdkzg1VZM",
  "key13": "5q1pXcyNekv61aN5dtrHj9Fhzd96AEFYnPJKp2cGZuV4HfTroBZqWbeyYSjkSLBzto9vbnYSM7qxjMEQ4Zr6GBVv",
  "key14": "5FUnMrqxpNy2jtPdJRdeJd78TVvAPLwihy63F8zcbQNMUKjeWfYoaYAUiUWUHCwTxE65rC1Hw9CA6C8rhyBbW3mc",
  "key15": "3Hq45wK1kwyhbws1RsQLKzMQNLGNNq4u11s6c9DvqSx6TNzfkmrTx6w9F2tgYvYvqELyfwSDVHZLWmWnhha4AcfP",
  "key16": "5kQ5SbhL4BzVQoVbgpnsT4UjgVYaYiPL11PCb6CoCPndUmrxpQwzd9Gikc7D95TRbyaFqQRTPGdxEsxRPwBoiuST",
  "key17": "dMiGmceY3JDmjUV2Nmk7VHa3MU2dvTum23b9x4W8ysov9EdCCA7yQbBvCoCo6qY7MU68UNnEbpwAPv3REYd6i1t",
  "key18": "weRoCe2ub9qQbKz4MTEq5CVzwSXudKxkpA35NLtvTEPp6cMoq89WsoPZ8F6JTKqAH4MD76ptyFyi13uuSoHVVLu",
  "key19": "4r43KvpcdroZWtFt8e6RbjTDTdMZHbmujtVJVouxzvGejUBkSB1kAbrvPEpr1btWGF8RNV5Pe8669iogKXYJfH3V",
  "key20": "3bSCZ8KcUjgRakESWZsJkdrDqiTsmPdSTQRVJsKcLuQ7AF57tkxfA6qdzk6p3Kmb41RzuL2dfFczxeBxwBBwGfD5",
  "key21": "5NsVQ7z5yWrt2gCPRhcWfpxx3BMooesTk9iqoP8REFhsSrKjGdJ7NQyjEB4dgQEHZcb8dkhRFhm2gTvgaShHr2xB",
  "key22": "2p85rQj8rfcLkMQKiBg2hy9EFwdMs9DgzRXh2eV7vybpCDWBAQwU7UTzRLpaAGToFfgJudko65MCuZ1Ax5htwwHA",
  "key23": "4xxB9d29x65bvLbgPPan999h3JWLvryAPqqapwSTeQVsXjG2bAJ73vPndWhxyRFmBJKUwKvyycBuFUGFpcvF1v3b",
  "key24": "3rSQZHVzJqMUCFjKEEViYAwfzoq1faawgBDP9CtnC4jw6a41iMdsdTe3YF42SEzUJzGNYoCpTkjfF64bok5NQH6Z",
  "key25": "3SpAdw6zCrnHdgxenXRnqgaJNAuzR4Gw9eitkC1nXLYY2jDZmku1x8NNWAY1vtpDT5g8NdyCLzKNYkwvL4oeJjHE",
  "key26": "XaLdC4sGtz9za7Dkef5p9tudCvuXNFe4o2WTT2cDaKmU3DAbLzWQ7bihyA5jdPkmmvT7ia5ZNKZfWhbhUKSvuBa",
  "key27": "nCKh9Dp2GrCNEYizews2R3tS6vzJCnQ8TFZ8NE5VRDwnKmfJbxDD3WtuD9sBxhBs5khMbnDob5dKCwbsgt2PFGC",
  "key28": "4SixWgEk7XGQ7Ez8VCrCzuuPq3e78tZzi6gKaF8PwiX9SyaaDotJzkuhwAQDDkFYGrJpBRx5ziDEMQhAng3eojA6",
  "key29": "kF8yYBLGe483FRPwzfNDJYbZ4KzWtThmxZdv5mEdtzZbeSYoJF5NAkyPZNjJA62ZUREMT6bF3fiMgYcgngkBoxS",
  "key30": "5151PziPXrdeGoWYWVo97vt2Fymkp68x1hTATPbHbPq925iqbgWuShDKgqyqnwfA1y6BkMAZo6Fs13xFpTRoJyky",
  "key31": "4AE3nJU3oNyjJ4bkLRSsCwD6bpgNEygjhVqouadAbpSav5mzeQt1e5mQr2fSizTBRj4A2jdj5NR5nSEMg1XFxCRn",
  "key32": "JZpkwMmG2qr5HoGG4PbdmRwHu3agA8pwdpzCVXaSLKzDhparmS2PWy3vuUGYmjmX89exLTmrvQD7YhWvSdJ9i6r",
  "key33": "3rxXPBahKvqrH1U3Pbr1TuUVdUT9ARgxUCZNJWRkqTn7keQTVhNUUD5k2MXDyUA26Jf7sAzrwMYGtMBRjnU1iEce",
  "key34": "4xZAzLDSJXanf8m27BipkoXbNEekucdpPgyW46ukjxSwW8RFC99uf9LW62FgxrTpdtKetzqCG2YRnMU3oKU5ct9G",
  "key35": "zebfEUbF68JkPPMHqwZ8NKWU8nkv9MQFsAjLZguQpC7ajH38ac4nzGGam6HMCyVAdvHGNrdqPUeMxUEeZ5nU8jd",
  "key36": "4xTJ31qXfHFTaeYifMWa4vY9Ps9mXjCTQT7gmoqyTsi7XXvT43Wk4W41jbuP7BSYVwfSxNZGrJwxVnBubtxnuqp4",
  "key37": "fATV4QCoiuu3QKkYT9ndmXhbncuizHN1HMA7eo7JGrm4Fh81WLMZatRLmZGDiDrqAWdMxiJb3cQ5sVjCupXv8NZ",
  "key38": "2F3YQeBzysEGt5KoCxL3auacvo3jW7Dv6bKH1kexz4eCYE8caU5r9XexD4hinkoAQaN1MPuJLYX8VwxwdFy4Uixq",
  "key39": "57XXjPjJgdTiki9RtjsA8xQgsnzMptZ2MCUm9ny9LVNBs7AHCMxhXdYfDhuSRqR2fLFH4j9jHLapKZZa3T7YtnUh",
  "key40": "KQGQTxNh1PmfW1ZiTGTPiZntk4EhCL6pg9XRJeKjcQ1xfpqmrrpkENriUsDCpcx7bjkHPNHMYNtom8XYGyh3DSK",
  "key41": "259ECEq72wLkBvGAw4EXeat2s9yWscR7Gjy766TbcBr5bMpYdZnizmiccgFMuKjefDyec2MRdu1T1iC5VBDadq4T",
  "key42": "3ptQxSAGdxW9AW5QU2X68KYmxR4df2v2UAphRBzvy9ikruQaQUjasQBxvbj5u39WjtqfNDtuuQ5iyRyA2VFF8zby",
  "key43": "5NyuCLQgdFQKVoaGKxvRZkym4JB8uyWRtLnRRFvjabW6EZseyQeCPXjhWqcCFm78ZSwRc4VeFHU8Gow29MfsajpU",
  "key44": "4aFiFEQRejCxmvPGUbhQeMsX8GAQDA4XAnoQh6nbKbPXAQaTDnSotDHiuCcDZEyeVit2zD6hv44BmPyXPEQkvqEt",
  "key45": "3922WwgVzTyhyZjhRs5R8MqaXzoTcXAz7cGn2J4SnkvCoAg86vQ4JQ2Xbj5mTWamoF6L84iKSxfu7aqHyrYoVy73"
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
