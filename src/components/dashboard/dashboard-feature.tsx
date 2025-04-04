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
    "2sr5UQpcagaEK4Uz2L1GLq9PnPUXwRgSWWaUnyFY4rQq6zw3t9YBTxa9D9am8JgVeYLCye5bWfMwDkpTnbucjr2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dXbXmKNgkkGjkyDmdAXHmfhoBnEsKzMLQh5k5iGPH2ffmCtCCFb1n1q2uK5prys3FSjaRvef7733qzf59GuTw8i",
  "key1": "2QD5DwdfMwjWB3UDrZEEs5dHQqZgLZf2tyFCqWhyaKbrvbcjtCkqZbTJheEauonMwtxMEW2fBjwDrMop4ER6v55V",
  "key2": "jdBZPvuPZ7UWgg66pEVt4mzjuRRUEh6HnbadHwYG2eq74A1dkEUEUe4i1KXFXDDWEBNZowU8qsrqDpJjcuEKX4p",
  "key3": "2ENyRQn3sjFrZxshyrnKrMsJ5nHajsR4W28jM5eiV8qHWPtx7WS5z3YCmYydCim3rDdrNQp6D2p7RqLjr6HzeLwk",
  "key4": "Y1CGZoqmQ3yr2hHggfPohxdkWP1YJNhWknwrmHDZx7MLs4Bh2EZfcTXpRs4wrQ3BjCuAcTtjxKpK4FawA8C8usT",
  "key5": "63cpU5Pu2pk2wyrAUY3wc8ePrVvDW1jPwL2EHjmYTBT85VAidnpjHQukRVFWmmyCHzbwKJNQTc1Fc4f2jF8HFDSh",
  "key6": "uvnwXcMq5uhy9hjmWyHVhoqhbgREUwwccDZNQJXh65B9QdaT8prieGeGzruT4wL3HrHad6YhjhznoDxe5sAVQXB",
  "key7": "2KsMaaaQ1CVTD3D8pLTtYvzyS4eVqGoohEL79P3eNFmTmVdKcePAvnX7QgQeKSu4TFdEuwuS5dTSMkH84ga9WbEj",
  "key8": "5y8iZSsYNJU9AL1Au4V1zaFrsyEpaQhhz6PMHamf2jGcwC9GPfQ3q1Yo6zx24Shjm7xrysYPHzppq43PCrxuAhGr",
  "key9": "3PBeUaHcKCEUHbtAnkWFJYA7M6oAC8LKwGmERYYegbMfrkVXeX1G1SFC921KQgiZzULuHWsJhdHGHZgt2dQWkA4h",
  "key10": "3vdgjMDWfLoMNgqQ6vCXM2ftSqrzW7RgrR4mBYUuTgxCLAv4TmsyVTqZUmjs1xkHgDMqRS2gB1B7F3ymahWftAwd",
  "key11": "48n2CJJ8rbY4pgPhkWm6nbP8p7WVecVxLToe6ubwAo8GN1cb4YH8Y3zh1kEg4jdiJfMd2gBdWTDw4YBMvgjnfANR",
  "key12": "3dcxz3y7ADTr25cfmuTZYQWj6TuaRxjqxbNTdYqRsKgohMDgjWKmnpLTZQeUyywq5P2UDrDyEf6EauTxpceJqSjs",
  "key13": "3NCN1dgWP1y9KZShv6FU6Q9U1J1pa2C8crjC6BdKWn1XPJgKUZAV7ZAk9hF3p1hdfShYhspFR4v5Q4BFxg85dp6G",
  "key14": "2S2PwhJFLGtdSfozKaJPHg9hENT1STiX7irc9Gf43WtQjP2e9ycDb3tpdfAj64DGR6n4CUkm4VbajFvFy6AQh16E",
  "key15": "2KTPtqdGNUeNsiaoGxoCu37GbkXg2E7uGAKhzzVy4GW6nGNfw91PsVYvRs5ktymVPuVhL7uWtKWvJaCMZW4u312H",
  "key16": "QK5KiHvRHzoYyoutAL4aPAGXmRLBrQHoifxh5HfpEFKsV5QPtSLduqCgbQmybetsEVtDVKg8mFQttfVQznJdDdn",
  "key17": "2g2aC8GpT4dA5i79yjjWUQinC5ue6CotMagDDGsn2rjGjV6BD7aA5e4zf8W3ZcCFspNs3Dj1p3J5jwJCWh85aCek",
  "key18": "46wGdo5QAWTFx3zPmRcABr7SkVQgXbBQxeeKqtYvQ4bgGor9m918YTqEJ2r1jmAZGmavTgoq7997aaB57Tn7GZ46",
  "key19": "3wC3Z33gNXk61sCopRD7YuLqUxFzqxHD8qrYvvtjhxW5EpXiYrs3JfSiKVePin2nZwuvm1k44btk8kbcQNyt7CUm",
  "key20": "2888x4hiEsgkgYrVxUWMttktR2ksGS1oHfptWxvrS81NmgMpha9uR6n813AeuYqgFjXikSheeekskpDk23bmGXYG",
  "key21": "3v5FJPqjZLWMquSDheRqUeE2XKUsg36ucQ3BwA3uWXvHEuZPzAQS1aZEnhBiSD2auzh38qkYqyfkJDdAEhc5faUk",
  "key22": "3LboGN4GjQcASD8dZaVffwCTsU1QrrUMLusfPQKN6VuyG81nmwWkXeDYS69bfFicawxfbu7APsWCZjj6b384U9ac",
  "key23": "49fWw5T7HHeQ9Rufkv1UcXhd5sz41CBw1QRdZJ3fWCz3MKifBWuda6UsBR8SbSXVJve2mS195CyhsQZiuZaYo8FG",
  "key24": "4iFSPNmiitM6NtcnbTiXEnVHqCwwWVB12UD2msm3SPDBcDtnwMCQbme8YMGoVgLd9WdyfJwgjixgNsPHLB3ejyVq",
  "key25": "5XWLjcTzqgmUcJSSExDYLnE8Ym5ERNZdbMEHyaTWrv8HMXFW5sKrbkCmxWds38kW4FDGLNXEDddeSUbPM8hg82j5",
  "key26": "61WAwhTnF7fvCx7kYbgXLMWCodW4JxWfVNPCuQgkB9N3Xeob7BwbzfQ8MJ2pBVccLEbJNFLMehhTjnyBBqLtDLkt",
  "key27": "5sGAfFukY8KSGJ5yYNhar1HAzi9zcS4kcDy8vhjsAcpuXmvnnjYqLoTj8ErU6taYixzVTWt4sPdprVGJZmVKe5yd",
  "key28": "2BWMtD2ZYNJMLLwwLGoZkBmff2Y6SoRh91XcLxp2i3vaAovv6sKxrXSaFvDawbCw1aNXB2rc5WCUCFYAs1rUxPwm",
  "key29": "2wnWfKxsWmcxkzxmKQqeA9BuupZwzyuJzB5VMacsN791yhZS7SnG5xq7ajZZ4D5mjnpsKFdvxUaNRH1KrNaC8YZ1",
  "key30": "B5Ezcvi3j9v6XRcdx7AGMtovgwXPkYuoxg3SGTJF4TRUBnzxptfSJEY8sLGic4fLp1B6NoVsQMu4iZkYLnr3h5B",
  "key31": "66GgbCaxUpwNNjpNoafCg21ecB2fMgbwLvhE9ZaaXx6F5wABKr35FAfqL22nBrB3EKha5k35Kuf6vKFhrmEj8Lsz",
  "key32": "Mgm5v9CwTj94TpAcLvLVEVwobSWjEmfAjoFzHF2U9h88RycyhdKErE57dBz8nADWPaBiQ76mijsJXd2nt1CdomW",
  "key33": "4fF7vw3MxmQGEqXUhrzfKaKTW2q5FtFUFs8PPBwMKhbMckwFSBGFAmUoTKU52EnAstjXMwcz9M7nvZZJmm2KSpkp",
  "key34": "46zRVcFjBw3UVaQQc15bxbepBrPaSmELGs5ucsWAotkSPZJsn9YNAcDm2HKo8GqFLBBAURmrBkYFaAY3LGX2fAfw",
  "key35": "2N5CrcvbNu5ZsTZakaeoXyMT1YYNr7oyEBKG6Etr7Fr73S7LBsVCHj1GGEP6ThZ9Wvn7zm6sTwBaKrq5uVJJbozE",
  "key36": "2uxiVLicCpnSBSG152Luk367PWo9pqSGebfEy5HQqYxfMaJkFgFJgjDSSsM7TYpEC3YPKwMCSPGTrJJu6w8rBaEd",
  "key37": "3C8bPBifHgjxvH5ob6RgEgVZPgUnneDQjKAoJQqDVyqKKy8w3BKiXK8Uxq4M6XUPyYjJSLfY3ko4kW8sCHMeD53Y",
  "key38": "RLTxy673UpuzMAfB8Twq4bCZPRqsRuFU5gFmNqsAwyhcoy6RUTnkHyuPrs5pKtcADe7aLCLXEgJXQZsMouznYX8",
  "key39": "2RzxqjaYaP14CbbyMY41dJpxdq5rcWTq56wCJBK2yU59iSXo76u6bvcVnhb62FXTiMWevUUnawyz2GKjkstwPARv",
  "key40": "4Aq5CZWoviQowiEHDtpK7ECk53nZeG77nETywhcLgXLSChxB7pWxSZeQmMCeiANJGLVnr1b78ThZUbKDDZmo6ihx",
  "key41": "5dC2toxX7K6YiQ2AJ8ydQZzp9XAFxiy6kpioVVpwVpeJ2rW4GU7xzAgvw4aJYgAmmZSc5HRuL2SL249Kb7AebScn",
  "key42": "4xzyitLjquMXmqTYVkL9Tco5urCQKALShjdV9rswKUkasmFvycoEtqQgGkNvQZvteAK6W6wNvB98tmmAJD2h97NG",
  "key43": "4DqfCVXr9caVMfegcMoh4WYb7WT9PeNAVdoP6Zh1z1r8uCSQmgxn1AjzNVunjj6hwVe4DqyqrcJGWouQx2Wi22bT",
  "key44": "4GTHrHqtAwXAxCuNtYfSiPpVZz99MmwNrAaYJtFsSwUWcQor7LbG3hzcMHsgBquTfenHEB5LuDW2bi2ivD9c8vEY",
  "key45": "Atrszi4Nia7RanZjkqtRsxaUyzxPjDu7BtGxPnuBkxh5G3214uAu3wo5f6cKuoQoq9UTRtjSSokENX7i3DYy9RG",
  "key46": "5MZXa2MW7BUdV4RfAsidPjDEjHghH3JyaqaEcxHSaJrhxTZTxkNhBUAfqiNAXzSfLZ93gDp1nAuDanRGTekDRAcf"
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
