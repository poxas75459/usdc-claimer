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
    "5LPZ99HeTBjyegLvX71vf2eMv6x2MX2nyJxB95us31LLmXsoX6Copn5QEWN34gHNY77UpHdxVvu6UC9RSxeiJ53V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V5Pp1z4VExW1huuseUD4DBYvrCZ2hkPbdF5WMXvnSt3iYdifNPy7uE4XZyfc8T1mk8M7oann2Q1WbpWCjmbZciG",
  "key1": "5HytVcjAcTLHooPSQpBYT9D9YpLwR9yz1HUW6YWGFGk2DCSWRyhnuTLGzfHDHSbacL5d2pdQE6H8T7jWXJco4mUk",
  "key2": "nBvTdWd6txZ6KTSbHVadcjD9tMLKRjH5b63WRdQfVZSZHhCXqgbTsxQBWymDedxAf1HUj3P9NWmi6nmujjttx8G",
  "key3": "2dYk2huLAZHW5Njnfwkc2Y46Q6cGZwYkDZq93KiP4XbYjLvCiGLRujck6rdjVZRoM8Mg32ZEtkCUSWF5tNE42VDX",
  "key4": "4GptkXqDF5HpDQAeHm5gAeB2fqQ5hDSbuYHZ3j7YhRBcHQDQwkCh2dvwdpZm8hKe5f7QLPNDEXcz9ZaxnX9k2YeN",
  "key5": "kuvMuXz7ZRzvymMNGGQFcwAoMonTBptk7Em9qEK7jAk5TEfnbTbZDWrB79wTZBferUQzQKY5kpmScZNtCj2jMcM",
  "key6": "3mLyJTZF5krZhni6tQN8hRd5hbk2sUaRg7Fmrry9Vy7quRmb9aJUDB2rMZuLjuNbFcbULaUpnGE686RAANGdz12n",
  "key7": "444nJqMFC9EKKXav1iRpcTrPDRR7rXDFyc4XFbsis9YcWdFLweAstoxc1eyqMnppovme4MgbTw328rvAzVeKQxHn",
  "key8": "5g5XFbhfa7F7uFpmUsBj65z77zbAwGKUeBhz2qgRmdZtCjm2Yg38MFuaaz4yH62G29fBZZu31mFxEWNiPp8UUYs",
  "key9": "5YhKDF1DkMSPiJHGMW4gg51U4bKiMN9oHERX6YYtLjxJFAH5cyfnrwbhcd2T5zayKLZmYcYFm2EpQDF4QHe8dy2W",
  "key10": "2Bhwy8kxw4DmHcDNz8SjM5opSkZH5SAurJ1Sa3RUnGgVgHxhmkJMatz8oqMDFFMFm6d57kgskGc4WsWqNVtREM4M",
  "key11": "37XrcK74LcZQnd1247fJnMUg12W7hiPVtQgGDLKq61qRVtPt3dsRPR3FjTEHm1crC5m2uTxLX1KRtcU8PqfC9Lfw",
  "key12": "2pVC43LiuSXby8v6uoCaThVtg7HcbvFZTyAQQLJMXBdoRy1ERhNwnX5sFPySzEgSPHhtWw8rDxEQZiD52dQz231j",
  "key13": "4AG1QPWPFqahx6qszyp8ECoRocHwVHNa7Y7qA5oXa435ppfXvJpBbg4mXV3ehYDc4YYG3zJQSjWPXbtDAcizcAvo",
  "key14": "2AMnEXJ7dR5TpdUgLZzK29XhGuZiATq3stHFsUq4T7KwM4qUUmmh8AjqiLr7RWmnksT6TZ32N8xVthmPeqb4qNUV",
  "key15": "4WW12tnLow6yhMvaAeKHG5Q3ifTgZzmqCpRAtH3QFYcxL3KAYrgvJ4tc6CFZarkixLGEz2DKe3STUjZPhxovfaa7",
  "key16": "33oUxFFy4BLTWPRZoM62RS8QQJwhGQRwesU3jbCCmSQ3uYJJXmSJKogndZcCB3K9o6DisvJVnyZst6caE3PjrFWA",
  "key17": "5PWCfKkkYfHmAttAb5zApbRGtt9TRVT33gN3u7fBLkJeRADLQiA4P5twRvtyki2eSdxr8FfED3k6Wk8z1XPnN1gb",
  "key18": "3tkf1hkzgT7JibZe8BHCFNCfNsdz75kM1pYNwMTqXEDY3tcLVVCaZF8uy1wa5T3XaozGPGMFRp3Bo9CauzjEv2tc",
  "key19": "4hRRCPToiNXFBo2Aoonrq4P3Y1PpJz4qTFdTRrqAkgGiH1TEFFCvwWgoxgHjuVWYH2tMzjFjksXNLE2tPTpnm4sC",
  "key20": "4NPunNyom2vJ5hST1D121Vdk2nKPkh2YihmYbJmLtSM1GY7bUrkiqoPfoBzP8qdXhQ1vfyNVKCUAScfdmZqJuAKb",
  "key21": "4E2BYheEUv8EEa7Ck52m9gQnAUEEeXakADeGxtV6rzzuRZ2ta9AvvCxZpma5FjQgqE64xM1m1GFjaunWeeM7uPN9",
  "key22": "3NgHiwpd8ghHcJu1dQRmi9gfnEcQwPHFEvh5QzRfLpcSv4fSq8rrwi5UpNa6VtrnrKas31R2eD66a9VAku5kuNmQ",
  "key23": "4uYjr8AJ7tKbPY9efQeAbQRJYRaFjW6ozh1yL3NGPEDTTfV7w1qBeDqvoBfj5Q58P79jTejEVqApnHSqhNXGbfTD",
  "key24": "2WyiAkqUKzD8KZpvmHKApDzjHxANX79jcnADyMpaVhjUSPKZU5LMiJm5u7R6moYwtyxSw7uw4uZ74K17uUi7o114",
  "key25": "4sRpNSs1FX8WhLTA6NEyzwkKVLaLWDYVehQ1vUg72fX8gVSmPQmRbuar98Fsena5Aj5q1AbDVxBmim2Vcgf78KfP",
  "key26": "toWEqjahpjRey3Gdvo1MMpuYUYYdfdvBNJYbur3Vqi5GJhvERFUj8ciiACVQPnN3zczubkZLvMjqYULp7JN44Ui",
  "key27": "2wBRTbHDfvKoge3RbneYZt4auFgrrbCkgYEeyiTy2U7vSh1Hr7p6oexEcMaUg9A7kAWXQoTEm6r3PGfGGZSgBF7s",
  "key28": "53CMvxZEKg2jvm8bcRiNT7qiicooRVPxKUASLoerE7LXg9ZAvrb2NDXPcJtUQj7CXfaB9y4GEUtnVdDGmt5M6EtV",
  "key29": "xgCZbg8E4ETBaD6Y4KjXcBsnWqAGLZu4dsjFcJShmH4gPBXWKnd7E419rYUwNXuAwBHcpMMcMRmZP99Pj9iGTwr",
  "key30": "4VumCD4kUjMX3nML6kW42Y2GS1V2vnSrNHn4hN2LNsaUEEmLZciHoTL7JfWEPPNPKk4KXq1qDyWwvwHp6BHFJ6Uq",
  "key31": "JWYPqgCvzx3tP8mCMxUbDdXAE238w3RztNLgSMd8p2BX7bocHA2E9WxGiUyq8csQU7iiagsov3khkzmBZYkMBx4",
  "key32": "vTaKRTpJi8C7oicNEzUPPLyxtBc113QC3Lcv96P177eUiPMg4HCHNyYuadRrKSWres7JoMxKUYjMYyHTySjuxCU",
  "key33": "5ghLqwqvZtpFzZmgkrovmGkvvANJscCocESa3JwudjjCNmCZhwp4Sptf3dURtU8HskCaVJ2gzNghPYGkwfRibuP2",
  "key34": "37kxWCej1DRxUtG15g3aEGs1pUKBuoYhMtD29z7HYDFenbdTGmLuqUJdUHvDZVRfPPaKKc9F4x1V73tGkXpuq7YT",
  "key35": "3TCnJ8DnVhXEHbEKbH1YK3MzL71sgWTf39z3NcTNNdfHKfyNmyKMBxLb8Q6PydkqeFtivWg3y1k835nAgxLT6PEh",
  "key36": "4sn45MvJQNwLtsaWcKforJXy6iYeCsHwBAkc9cuibLD5BWfE4cBGWchytX4L2798R9mhNr6aY1FX4Q7hbrcibyL9",
  "key37": "3vBSsj1BTtaWJnDarSeinMTNkkcXmRRrdacWPBFWNmMZtJudBv9oCVi3PdgNhHodQH5N4KmDQ7TTjC2qgAikuECP",
  "key38": "35oxm1xa17antWRDXmUyjpUPomyefuEQqcdhWWPoLVurzJT3rW6D8k4qp5bJm7R5RuEZGcU2jCqqrqB6NB9ntxrg",
  "key39": "4HMyLSAZ2ejZQ5kjnv6sFRtHMVNKXHAk3MCa5RS2nc2mWTfsT3194uFRfnNznL6MZk9EhQw6BwUe9Tee9uTDeaTR",
  "key40": "3DXFWHXAu4mWdGFuZuehYXHSRGHcNcYtQmNM38Fn2Uui8he31HE6b2qPp7neqzrosFPuv6NkdhQFddc5qQH2hv41",
  "key41": "5G2kmYNFYhEXHjFzAW1KeX6s2R9UAUoUrppEaTJtw91EEjh8PWpqqsLKQ6sV6oZiWyYTPcjd2R1nVo3bgzcUZsuV",
  "key42": "oC9bX2YmX57Gd6ZPxAfLcERJLrLv3nUjYJUzzGg4zDam5XLhbwyw4HMXfptiLZUvPGM14ARJv3TFwoxAsfmj4Aq",
  "key43": "5u1QAonW9jeFVTUwwCDKhFmAZ6RhzEciGLXnfpDenKQ31devTo6dNW1R3iaiic8kLEtmAnvFVCc2PaGFs3y13gHR"
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
