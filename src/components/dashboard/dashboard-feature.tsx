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
    "5BzgUhEot27ryPdUXb2knSZBKKswB9ekSPzPw8jLv3KDMbReC7oQwt2cu8cZP2V7GCo16TRexeRkx2WdNES7vvkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3DNRiaFdEPMrYt4QxoJzgzx7TCNihfhD62F1q7GTSScLkMikbQoqnavCfKWxfU1maL8YUhNG3vQnVmiWez3Q9c",
  "key1": "2DAi5spAdFDFyViQz2sCmH2zKYuMsQHcwJ5t91tW4CBLCviBoLaW8R2aqiLV4g4x5ZdD1rKaocoWrhPB9qxhBbzP",
  "key2": "bkFjtSo7Q6Wc9JBArykHsLdWDXBJ4BPJQfp2C5SgNmYX245h9qaymxe1QahoLPiuMLm9ZzpaBVissF3joFyen3n",
  "key3": "3jiSMHFGFzuzxrCkjj2nh2AVagTqJY3hJTD9LLnrHBmtKArACjMvVdPEUm8JTgtomVySu7q8pWazwbg6x7s59Vdt",
  "key4": "3o6DFNM6Xg5m6DvqPpgx9H4GZKZuDAuy3nZZ4tUFdU6oE79o6AP7WhpUAwG4N5vRXH5iYQrUrmFhHDkzxokJC4tm",
  "key5": "5HExupmWR7cp8TGimcxq9ANfe7LwWNeHuXtDDZHfvtfxtXPbYu4oCGXtoD6bGVKpiZMmeVUY45C2AErMCKCYzn7U",
  "key6": "q2PvSJvuzJh3RgoTUyxLsnJzsEppwQQxEQuFUMHXYFkzd9kj1L1peUWCHWZWKqCgJgMXx2RD9A1Uz5aNFCJQuZd",
  "key7": "Y5aHaQfrArTDuVtbZpqehPxHjk1sGhJVw9ouShHLNgSnwS8C21ACGAWU2rgdJ36e6ye6fQdmZLJEVn98gK8GJyS",
  "key8": "3zysmGyWexXjh4cy3NmQNdvYSHHvpxtN8P4bGvfuqCo5uf7r3aQQ3AVfnhtNSPdHMJQESJ4WR2YaC3hpDeW28Eu9",
  "key9": "2EkeJPvdFDAbNvr6xMutX1RYrX39UPQZow2QEd6NsH9RvdNi7XdNJ1dxyTSC8R9tyKXmgXG73cfwfyTra7oob69C",
  "key10": "44VBqJ5FE74iXcaeNh2a7e2VKikNbmP97GCYiogsCcKCMXf2RsMCydH4CtGfZHMqTFJGT57KMEKDXLeiHUpDDZFg",
  "key11": "3RGsWxejfLyZ1THwPVskNkLKHozEEQJVf4UqeA3arKQL2kFSziEJhx8K1T554N9mgEV7SCwt8h1iEw885N9JACMx",
  "key12": "WdxWdpPn3122ECdHRSjrmUncDsL2VNu6o7k7R3T7NWkVY8x4aWjTLHW8XPUNcRQ8xKDK2gkN7bgVDN3csjda2Lx",
  "key13": "2tFCZWqACtqoNCWrPc4trf21YAE51LekL19XwmtHWmfM5ur6nPQtMhnU3CxPDSE2BnLrEPqZZcwRWBm7xKgRMgVT",
  "key14": "57hvcYDvBH5r2kwdKtzYSoEyPXk4brM3zp1xk5QHWphsQWn9ovzJMogVron2jwmxPX2ifK1r4J8Cs9SdXchYqNtJ",
  "key15": "5s4RrbCBbRrtSpA6xzNgpVkAXSVjnRfrSbsQXLK5jX9oCdJ1t6qEFsn7tb8EfA29eicnnB4YbcyJzk2Uug6kUU2P",
  "key16": "2YZKdRd17j1MBHB3pcXU8Bmzwtm1WzL1xFCe7afArSpFRzcnngB7ANY2HUo5zc2rpc2xWmPvZM2AeGjymzhNZjtA",
  "key17": "4PaCtpSUQaoqHarsQ7WPRqTiT9nt6ytGsQaKhAKpY6rrd8nfW8GdbapXiPz5aoGDxwn3cPGTc8P8Qf6wPkDBdG6C",
  "key18": "4TgHNJdBqBMchzUEJPz2nJjxZuiGNRqNSH1kJzgVP78P43zF7sFz4ehJCfsWGQ8bPtS2wVdbcs7ZhhWJwcrzusL8",
  "key19": "JgL1TwYv78jhSKR9SpjZMVjo6VtEBtGa7eZ4WvuUc1UutoZYrFNfyjfJwQiAkLTfUsGXJPLbcqdc6k81KxzfDru",
  "key20": "ojpSbEMpMHaCrNw3KTSzp4JWb8JMc8yw3LPyDYkRx1MN75ZA7uW1wPJnvWNokpJzunpCrRiHF7je8gebCTNdGJV",
  "key21": "BVSH7zCv4xXceuPYXLdxYgf1CWyV4aaR8RMdUv6s6cgLZKMGeKdfboPcvFuHBDdjm2eRTpHj3YpeGCAomn3CMCf",
  "key22": "46MDyhQpxgowSo2YthT6EG9wkf8kwqVTfmjyZYQbMchNndjnnbX5nsYdYLDEnezCvAGq1di4eMt5twkCBtATgQ4R",
  "key23": "35Pdq2ML8QoNw2vpV7DWPEVd6TSTK4gxTEbjTzipos95PMgp13TDvjUAV91LHBx4rXKowgzRZUKqqSH5c8rLJ2XP",
  "key24": "38naf9aV5ouPu32c7Q8Go5icpW7EHKMsGfYN5DpKgxgSL4igu5JeUDf3vBDrDYUaUzWEmH1LqHyyMaAc3THb2k2R",
  "key25": "3yaQKcCdVPubyQapgVgVhAziAQPFeApv78d1xFu9Syg3LJKybdEoo37k8WBydSj1BjKdWzsVY4JWSqoTzrWzxTDq",
  "key26": "2GijkKnkjGSEwUJrBvrhC6E3cpsJuNVigha81KMMn7mHfg961J2XBhXZMC2zPYQcsveJSudCUGamehaSTtB3L2Vu",
  "key27": "3nRiAY25xhkShUXFwNNcStdG5XfUnGt1dVnRaH6HvBiQqpFJXfzyf7XP1p9KiZr7GqLbTqEFiCkk4zRkuoiox3cU",
  "key28": "52sT7MKhWLNuky7A8zj2D6ZVh3dexqSjzfoJYKvt2i82Gq7RcZHP33FS36JxLMsi6exQJ9a59uwhXyVuE5RkFgYY",
  "key29": "2VsSCrRLaKMbhdjmuC994FQGiUx9AbMrPZwknc97DWZ6hrmcpwhhGao4jc8EvuGe4QFwXcXwBKuATtBszF7wDhme",
  "key30": "5a3UaCvKmGH41xxrusJv27fzJdLSrv8PzpKJXcEvrTrTofjUfTa9taoQZh2WFuvsBSEWGjoxoUmfT1LQtW6CNxTa",
  "key31": "2XZzGhxMhBHWThELqzpuJoCeqiLPPLjbVhWNXUkeoXCdsFzFjyUjwWKaVm3CAtrt1neARYiiTHc9sQzhDofd32PD",
  "key32": "5CMiLnFWY2jfyn49gsWeeP7S7rkRWZgZwX3z4YzjwCHst1GKCXwgSSnkxLb72dZSsNhjc3atH5LUBTymK67gzvrY",
  "key33": "4hMud4iMaK6odjB9HsVamQsaemgkEMYmC73PXtueAsFzUP8cEkk7Ccq6ETREoJ7BFSJCjon4kgAHJxpXXNndQgvL",
  "key34": "4osEeRMgCb1vMLDg9V1aYWevLxaFZJipm8p5Pw4fvsbW7wQit4rAYjiUcAneFDX6GukiGurTFWmmWV5WD9KJmeRU",
  "key35": "JkhqPGMNhJ4eD9a8XLUVRMheWKUVkm42BUJCc3yabGDWiRZWS2FafSDanREPwrsUGy1qVvuGGr1UbEkquPYbzov",
  "key36": "2bnXebF8SniotATUmaiEU1z6GgrPk6Gs2Muis6cgd1A9D5F6N4p1ATTgZnoWRMuNZgCBQjSF6X32W5rrDa6fr5ok",
  "key37": "3DvRy8YM1rueH4XNALUgwgnPNMA9zYuUXNSRUhD9Qd6wV3ESYe5iCaNwJmRJ7nTSKDSMmSRjjeWwYfcNbFtFJWN3",
  "key38": "3sYuWDo78nUepDYbJW7sGMMoAFmjrv9Z2wwAiNX9ZJEUhmY5awFUQnm9SPeFMNHQGNhk6nbCXQtQMxdBuM17h23F",
  "key39": "3mEnpWAo4kx6a32KdTrJnGMJ8PwrzuRo5u1EaEDxQL4Gz94cFJ6Zmfe6aTKLGLDAd7HNqpcFsigW5rf6i5QhecEM",
  "key40": "4uFM9PNpN239rwtHwua5GawSVE2EcChUP9ozXwYRmRXyxeESbs2VnRNiRg3eoAupKCkZSYWs5HsyHJPhKiPBMwUN",
  "key41": "2rwYPV9M4jcVnxKGfJCcHpgg4Vgu6bySbWMaTb6yvQ8usoJ7kiHoEgdC1YwSCtaNV91tTHwPozKuevQcRpB4D9oR",
  "key42": "3uhbmgRGXsCYnipm6cWYbPFYRXQhoLMs7eLa3R3MciKQ2aogMhRZjf1wN8NgDvFmxD3e55B9MNmexwgU9nAe7Nif",
  "key43": "41WsjCHox9CcYqM6M4GtSz4n4q18VGCP4Cw5CcBZvCvGL5dmLJCf87Y914stbJxWPjPCwMtHabAih2ehNrw7nxoG",
  "key44": "5VrkBK8nyvQP4pPiBW63Efk3ipbLZJvFWjHDUoZi7ekywH4ACyJbk7EuTNdKNo9RnVJqLp2GBKyrGasQJKotwJA9",
  "key45": "ADwsBZDMF7hTynX8GaTqKR5ug7GfgD6uJXbCJwJsNCc8VT6cL3bRvbdaeNKhonXXg4pNQo4tEsEhNbFjmBWiSUy",
  "key46": "61CQJKsU9BGEhwGhYFJhM2dArF4QAJ75UJuDzX7NfzAuEf4EuTidHQ88VV8zgDZ81cn5xyPKQXGu5wrjZWq2rMVT",
  "key47": "5pDNdztMGKYhrU2HE4zErij3SSrPBoroJ836KxHRkdc3Xsn9Afmsejm9GrRiRgx8XMeG8EJGcqiHqVrhDMyK7jC7"
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
