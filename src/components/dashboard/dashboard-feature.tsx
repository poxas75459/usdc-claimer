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
    "4xbSUweFC9vhDx7TSAGTB2rEdguvUGTCL3wMZ1Nuoo8z3XNst2Z1fgbTeb2JXEgXnJfD1o6mncRwSKn9h8XTa9G2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzaF4pFX6CsWDRBRttbAoaETMcbhjK9orjt7NKrNpAgMczGs9uDdgBEehdJQucMccTvCoH8v2ZpXhfENNqyvS9y",
  "key1": "2fsKQdryyanFvDp9jJ31FcVTVHnsJAdhDhyJyeYwz1HvAeNAs9aFuu69D9wWRzEYFhvwPCcrWMz4NZ8ULkHgdok6",
  "key2": "4wPFsyFFMtqo6sRB85HKHgVDchm3Zv3UEH4HoA41oFtSKcZKG54mDiZGFdwtT8RKCFcHQUoVdVb8KtJm4FpnMnEX",
  "key3": "ooAmGbt2WpQihtFvbgF6Bc5x8ZhpkUi7KfCu1AkUgkfar5nA7cXkbXM1AqELgyE2nUxDczkMgH3a3fSNy2ESisA",
  "key4": "4GVsd1cRrisN7kea8XZ477KEGV1ieP4GCHdM1pMQQ5NsK1LyWTaBpYkeFErH2uFUaMAU2B3FqrqUXUK6zhcZ8XVM",
  "key5": "3ezEdLJAzfpjjwCbKbaixaNX1vLbdbJGo4UVKHqXVraKz8UeMKjTDgkazDQh4ZgNRdZdbtmHEbsc59bJAAoYvrWv",
  "key6": "4vvdcPDDjDBiWp58sMhgxwKzdMoFXByYyXq3qdAtWDFeqp1EtUnRAtqAcKZTMRoRx78txKnYSHHa8VrFTiwvuWrh",
  "key7": "2e6sy8EEb32V85pjijRDMUGpKPXYard187aJttqJhsa7dXe72vRCbiyNRiCZ6coPaniJYXtHyMWKNr8GAAjLPZG5",
  "key8": "5wymrPPkQ1HGjtnqmsP4uEtrjvGFJ65uxNLBURUFCC4ENMjYwMekqAqoEmaNw5JnuSJUUwwtWnp2GkG6ae7RMbch",
  "key9": "CKsjt2F34q9DC27HNqS7LS1fxjM7WGHbNbMX5TTo7CSQm2UgWKHMjPF6UVcSjRjLKEGHyMHPuz4VgEDSYkUBmuP",
  "key10": "66mfPD3c8RjGsYTTs7oqRTjkoVSzCMFSctKy7zEm1ukYMmpcZYRovW4Nr1TBVs2FmUZhtbSxmFWPgwBS14eJo9tX",
  "key11": "54SJyA9FUeHpezWmBC6TPYPSaAhCxFK9ycX9pjeMF7eM99bDMP9xqgCcThpwTD1fKVXTTL5TbsDJfhTRTC2YKeYT",
  "key12": "5T7PUWACmA8VcL2bkMtdpapsZ43KfyDXe8pgn5bFhpKwrDiQvUt9oNiAVj5kfUCLkuyvgreSk6meHwftz75NHuGH",
  "key13": "2kBqV1WtQzbGbjtHUQN9zKEtsjqY7wsXaTmUgcSnpbWdHtHjWajEbCmDKogF5odBa8spuoWieQnq63YpGZguFJWm",
  "key14": "2Ai28ZZoPjxpnEq4kRWJwpZSptewPj8mnhdqavEaG7pFAcaYZQt7RmLMdet3C8pXRnPKcktQCjAiRQwKYEfZTvVM",
  "key15": "4e6DXwdp6MJVjDLzEjKhCFiERfCcHVpxdeBsvkoJsUWQL9QH8NYb4k5HgXMur2BfC62CHcxLLb4iezaFfA9d6wSN",
  "key16": "2Q5sTdoHBC3RqAyCcH8AJ1UCKQTTrCKHMSe7m1gm4mW16UdDqnpKN11obNTbMo2sxW4FEfPAencZohiVeFN6Dosf",
  "key17": "2oiTwgY5mFnRv8325fm2YHH6XsVd35mKzo8SN4pnSpqvS48kD5U8zDDM4vEA66j2g3FxK3d6jbcFJa7viH9oBQ9x",
  "key18": "3vTTnunPG9ERhwyCi1bKb2FkuwALoWT7JxB4tHKXtAXvbXmxMTbAGypJEAGbseYdmeTAkPbo4Ct5MFvvAp3qVLJ1",
  "key19": "zyEiaQ4KCzTmR1xTQSwXHAU2XF3kY3duPv6gf5MSduvsbkgwpXf2vxguUQtEfnj7ss3oY5XxaubHyZPnVkhwnVt",
  "key20": "4cWH6yz9njsr2eKbEiCUpfrZf96PQUqN8dwJ7RX64matFgwZX2AqraywCfVwF8mNeGBKfFb9LUheVvYZdF1Bb2Wc",
  "key21": "3uYgVCNmTvc4UhfzB2cSzE7XV8m4XFuGpdYyjP4NPP7mvp1PA6EHSfk9Wt1sv7akS4yT9vivLZAEBpkNZEhv7BHh",
  "key22": "5VzXEN7piuX1qXCnerLYzypZTUQJ4jv9ZDQ7nurBgHnbLyZ2avAEJya1b9fLuz75YmAG6sccevuWxR8bm2NgFYvq",
  "key23": "YYu24LKJCFnT7A4jcDnX6D1otLP7A6BmMVHz8F3LrrxCZj1bBQvbavSDDqix9sVxgkzcgcYSntcy5WRwXz7Twjb",
  "key24": "3K68tMcwCJi9nUPPFoZScSji65aVVY1VFz6qTQ6FbFAuRXsm9LLReLzsxZNinCqAAphqaDKoPePWBmbgEMEnPBUb",
  "key25": "2L2p2HrmhjgEfeJ2yjrA4rd2xMg2FeRWkjdnm7pKFUNJXsHR7E7jhoSzXKuy2jpPQwzvHK2u4eE7SqKRzLUqWdpC",
  "key26": "2zR5y7WyEL3iNBB4rNmbzS9J4xEfJaibaxUmFmEuApBNXFkjRDtV7j8pkEtgNYir9LRh64xc5Zp5LoiPeSvMxR6o",
  "key27": "2A25bu3q5JDmMcp3ghf3gYnYtDenc9dZpnMjTzJ4TDEoATui7q6iopgDi86iEDiL8rNoYtGKseFuWXTekVnnFB9Y",
  "key28": "2KzkccBQAFKFohbGvF7JdCRwKyCkTzK2EkMoy9RNAm5HGPxD27ZBAtj2BZ6ULVhRB8tALw2X8UKLEZ8G8wzaRVZF",
  "key29": "4SasQ78Vzs1yVmobVCA9Mr5kxGLiDx6NWqymMgwFB1GXoEEog1vpXLDHCvAdnXJj4bhzdg4LTjwgqNKE7GPD9zGC",
  "key30": "Df4BTwYZqCkEBsyfo4zi5ct9G51s4qyQZHn22Lm39rtfcpVax6KoizPvQdfyQqsfGnMjKRbUzUFmq3QbDzUuyYv",
  "key31": "4JM5oNPjQMTp31JAmmQf2Vt212VKKfcShZxDisk31cSSokjDMyB7Xk71zruPe3jRqr7H4UT7eBDoxyEhc7fmWJAP",
  "key32": "3fyLpx4J4pG4E5rBy7PVP3buBB74i7w9TvDSmMLpupwAmiRVT7fZF4fzNtSoMGVotHZAHAuSUE32ds5nanfaHX1C",
  "key33": "2Pzx9SM2mCbP5QvyDKYwu1krjbdMy8T7eSJaXPc8idcUWeDMYEyUsxqh8zMcXpKJXciMPNWMZT1uo7nwz7dUnZ7V",
  "key34": "YLpDiFjWXwDHwcJDjEXzqLirWHMwmKk1y3xuKFWxyeRhSvLFuyjQn3gXoEgpSopwniwMugtNpdbLsPX4eCscADC",
  "key35": "5vb4qgcYdffLFtknvcmtx3N2w6UzNMUXFR1H18MiDiApTUvteQJg99tVgmyMbkdEcPy7snjWd59uy6MyLaBdAPDt",
  "key36": "Vjcb4bWWTQYFTpq6L46ihoLCm3yTeDU8vYApgKv3bcnSVLzHJVdgbhAoDEQp35S2J4ksMpk4gGi1GA5cMBqHxuy",
  "key37": "2SZ92cg3fgX3SufztAskinwCECctLBGao3yvpMdwUdxyvVGhmn6yXxKHoUMkpJVmrBySZySX73zg3zXpFrWaYUo4",
  "key38": "3SPCmXsXnGuWisDSUctcVekoPH2nvQgrEopxWZdfNsu9t4RyoR9y6ZPBetEZ8hw58rLhb8QMhbmkaHJnujVAKbcv",
  "key39": "4Mu39hL9JDFGxb97LCecBVGpeKEMKECJNg2eP5AQ4fqZBL4JQwcCo7rfrKPkAuUSTvTSC6EHUpJkuUnFfvaafchQ"
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
