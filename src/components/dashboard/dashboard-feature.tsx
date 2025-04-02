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
    "4sfcKVBVVPLLovS3k1N4FNtgoYRM8ATKU4uyWVgbta8josN2Gsr9f4osEUPutFVSC5scrsLogVPTtfJ9TpkSJMpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uEBF4B17jFF5oZatiuszVNVoFJq2rApVTih4yNKq9KTHMJ4xYGzYKbSgQXM87sByedcBLncVuLDauMy6ktgkncL",
  "key1": "ZAU8m43zd28fu2fqHsFpSCXLuy5Dxm4NR9ozPA5AFMXesBnXuFFwpCpNXirgA7iSceuTQ5bYAHmCVNvMTkK4RzG",
  "key2": "EVhZoKk1j5Gt7ZkFnASbLK1TKy4EotHU92mJktxf7w4wh5PGsy78XbSuRsitJ16LPuYCyy9ozMFuPNUj3f5QFFN",
  "key3": "dmk7UMHCjei2ePcmxZaH5hpy9g7t2muvRH8RSghWgvyh7bAHTQehqC4Cxhs4KtsTDLvzNBg8WD8ea3peC53q2zL",
  "key4": "5R2uZrWgkwBwdvoFTPETRUr63TVVShqasDMv5v4UeVdkJH4z78DwFG6iH9dNTM97wYtqhBXgs4F8CLTcSeEEMgWV",
  "key5": "3HpyZPRnEb3fgeESE9ShaReJaz9LcXdMhYJwRgxhYhwe3KkSg5WPrSsrnrCRruBZR7ZYLqLeFhJtfen1syADE27T",
  "key6": "2G5JBMhd7fs4NLXpdK6TV6j2zXWJ46j9YbbBp3pE4qbXGDTquSZPMi88sj3e3iFPPTQKy5JYpgRo7oMLMEGXsCKz",
  "key7": "HugGt5mzhcz8sU9ovDDftztHL3c4ZkkiYZUwbkGZUKB7DF3qU9Rb9YxtpmKwvvdGWmWKHsLbqdEzkJAHQagTe7Q",
  "key8": "zVBrMZUsrKofbWg1uz57N6KvyTWZvvnM52hL4HTENjyhx1YYd1Emiy9yXWyGGtJiNQp9xrNE8Q5ppXPgHoqBBVt",
  "key9": "4rmJYgVjmCp65SBWcC1c9Pp7krFGvus8ZcE4N9G2ZLjG4pFqSC17upTEU4greULwkFSPVL7NoBpRKTMWkqCAq2jN",
  "key10": "5w26mcBdqW5QfKx379GhrNybcoXroQ29mznNrCL5L7Htx8VA4msqEnfzJaDph5P7MMN9w5akHsoFn6pCbG45gSSs",
  "key11": "4gS7naL7JL2QecbKopdbPw5cgUAoKJW11WPXNaJMbJR6fMHwPNNUBbge1nEC3ZppFSghuQGnJHnpzoQWuXL3uPzt",
  "key12": "5m4gYePWFFLpWV8J4Sn3XMuyLMfyf9U5fL7fPDZRCNWwbuTByw4hUCckTwwRiQe5pWpnvxcmcKafXV9iuS7CZVgX",
  "key13": "kLcxEP8uirS7viG4iUWZmK35qUMzzJkdEDwj57BYfHuJq24P3sqW1BiE4svCnh3SCYcBiPQtCj6UZqTpryVvpiR",
  "key14": "64aGwj91j2atkPSEbF7RWu62pAwPhaXfJY9bRLrAybsDeEKYsyaCnf2VdXxP2PjxgUWsTaSnSGzoypiYsGDj24yG",
  "key15": "2DKgex7jH8mMqNoWfoGLhbpJKvr5PxFHSerCpUix5hnZ4ZSNja1jGp7fp9jktwyqs4cCduKw6H6sVsK5VrDAJuWa",
  "key16": "nsxcvqm9tdXwQ9xm6Ube4F3vvAGApwi3RiWcC3bi4kkWJyf8rR3jPB32dg5SzVC2EQ1YhMepGPisNNfWDTQpZKB",
  "key17": "2fMCJD5SDu54d9M4tAU92BgdLY54dbBXR32HswJ64kVPmD1v58vMsfsKFNNYRy84WWFercAfZNr4hqg36mdiKyna",
  "key18": "5nLGTZyDpr3m8SNBKstRuwLTkfu2SF3mZ6KeMB9P6qe4VeoP7UVM1wKkH2j5D14dYfC9yQGn5W2Ej6R1DfyitNfd",
  "key19": "4Y2sWxPthEbKLUuxBmfiX7PE2XDEkC7wb5X3SdXbEFEKCnVMaw262aUGjiWYhaiT2SWSzhByB2n2WhpUBpsYshYA",
  "key20": "5sj3R3q5JSVDxujWoYjqo3jN2YaWkEEaBYSf8V5vCYBopNFSzh2ZhQq2D1q7e5QTs8Xu7txAhKh1VuvLwpFGaRHv",
  "key21": "5XHbLxLk6cKe3vtLcwKAPoQBNuFHeckLb7bAsaHqoUzjKv7GjKHTJanAPZJNhAMaVJP8M5LYd6TuMtJJRihxfeud",
  "key22": "5BLWHcdDVyLr486RpCZdcNVK5n9x4EdNZJUHZQtTrxjsMYpCMNtYd5C4Mmwkt615LU8k9aJVjaYMsagfCP4qCYK9",
  "key23": "vjaVk4xgRLk1iQdhmoJbAVgwwzYkmyEKuXgzDTZSMBahaDJH66bbQonPLNT1AKdY6vZukrAbjM43x6U4bd8N9PG",
  "key24": "DDqQxtnLTLqn3hP6AnEDirua9aXeCu7FbxWXrJotGtQdvBWznPqLxfZqSrVWkst8DY7j6U12PeYZBRF22VzMSJy",
  "key25": "4hrVgZDQh5RZ2uBavTXR3H6vd18W7ubTEu1vMR1hParDXXpxZCcVrrZJ2XwjQZSXPzCCREFAD82ytVNCzVTb9pyK",
  "key26": "2TkbdWuNPbQfq3KDhg5b8CPob77Qzak4WmynjdLqfBPyj6GrBPXWL6GeKSP8Z8Kvr7DYuc87BjZhh74aQP4TnYoE",
  "key27": "MW8Cu5kopxaExd14TZUH1CZaiHRaATjaH4gp8Vh1auu9pq7kdrsB6y3c9Wh2XxWgqXiCpkr3UfRa5nkknyJT9oK",
  "key28": "3zGjbJCXtqdJ4EvgjajEM6Q1iHhaXJPKz9GMya4GCQkoWrychjzRuskCNajg8jejDtwDoj7ekucQXkX9msW3rHhe",
  "key29": "mwSpYpZK3fGHhM6VHGXGejXdzwF3j7NL6XBxnmUNFPtgZuvZbXVi4iRaYm5Dk5YhrA9d159yGborUCJw91YYdrm",
  "key30": "4thbCTjV6GgKqRJQagt2fGVTTeup7EAU6TuX3BitBKyFFY1yGij4x2uHM8wWy2Fc9kjGrFMVuUN9cfc9EAEBq17k",
  "key31": "3SpoLHpSk2AjT2QJ1GQEb7P2D8L9M3z9WGb2eu2X1hPCCFLwZTp541dDQK5UFARxY2s5jKER1bSS4L7kVqf1MFmo",
  "key32": "2PpPFyaafCyGDxsdRfh6NzFthzZTftYZF9Tc2L4isFQrwVqcxG7NNC9vUmviuHZAY7pkqaCvm33SEYj6Kd6QZJQJ",
  "key33": "5Nce4qbUEALkayBWZq3wsawLLjud7Ri3e3fydJfpavDRpTncVPjutjVSGHH3ZaVtt6WprZfGTqhu1Ao1GLETfwMt",
  "key34": "4KsDw1L4ycJeoxt5zsHwQ435oPMZvASZJ76hnzXF5C5nvkLQFdKjHPGuEiaCrrEHXwmMEUEyCkPE69hQ6WPw6gQP",
  "key35": "4yxokzANdBw3oFPVNoxxVQYtoCh6z7htQTXKTM8PY15chuspA5fGwt1VmoTrqiLjNHF6Lvma8CmCH5qx7NWFJ3mg",
  "key36": "5DZ3jcyLM4sorH6B6cHh6frcDHRtJc3ZHmYLUJwV9DqL8NfpnZfJQ3MkazHMaRv1F2FMREyLN8TEAFCVtoK2Hqki",
  "key37": "2UAXq5fTQfoLLCkxgw6N2qRbKjV5BzcZuRZU89ttuyt7X5Nm2zoAMtNhk711wiox35TV57MMBpHVauLaZc4g2yVM",
  "key38": "4VyNBWw51S7M7fDvqvu8KZdmLV55f3TY8SULiaDZw2P1WfpZkoo13Pw52q9GmbcRHHzhykC4u8SUYszxxM4NpUe4",
  "key39": "3QEm9qSTztP5Pj3yFnSe465WArb6PGKE1v1dGCBnxDLgwofzeqG71NUAidW3vsak97boZEfRHwMRGXNVChdcDweW",
  "key40": "26WcGaFMDSFeZSkh6oZg15rnktzQXWt4qfhaCNp3xyAkm5ER7vniMJberk4Pr4oWcwjKn8PKUGjDE4477Jxj2Nn1",
  "key41": "3XTaeCbVbaVHJcYAydDZkr4vewjC5PG6iUrHfF2EMm3HtCRn9fnCKzAuj1k44HgEEwBS3bGgvVpx1iygFAVTcGP1",
  "key42": "4xXKAowmvXTBCA911jCRbNX8aXa8caZxgM12ikrRuYAY4bgevjcwyW8w4nUHmYjKFdmuJQSszp32FVGX4sJiaU9n"
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
