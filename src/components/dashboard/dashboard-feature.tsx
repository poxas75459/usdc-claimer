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
    "3DKNvunUs76cDEqKoFcvYygmQmU4JpX7jEpk8ZrhSvX48Y9ofhYG9kUfsMAvXtYXQmkyqUy8yCrpxzHvJ31D1wzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XQw1gfFwFamgdDKR1123G82rFaXmSW7faeFL6R3zRMRh92qdRMYyc7iMxBXztjBLzvt4UTwpa3akbA3pMcLTnJR",
  "key1": "5ew2CRf3RXf16TyJNCZ7nXdZ3ZquhobCeTqjoL2xAXVaJWrWyo92A9pEkZE3pA1uT2W1KC9Gj5P1uzaLm67aAwsT",
  "key2": "4Kv6FrFkdTGYZZ49gSfCG3FM8CziBDecx1bxXCZcofAbhaZH3CDMNGo99T92YGSstJnAsJnTbUcuFTTivvXHLpMc",
  "key3": "5cCkoZZ2qM3Fs7VBidcRkNmUAKeCHPv2BSps3pEogv75LBs7RdvovYGsL4MmToh3ujs41EajGkFEfocCefLBVcBg",
  "key4": "pNDG2X7mbE4FfdzpxWtpjtzStFzSPm7YBvCWcKTqBzXe64Kgr6fsqgNUk53TV84NSgznCay6hTETxL5Pzixu8zH",
  "key5": "tX7LDHtXhBU7cQfcqLsfVBjb8UCd3ZfSBhD5neWMRX4x9wFkG7Kq8q2PShStoYwwf3VTWCw3k6zqDNUKp1aUtGf",
  "key6": "8as4SKYwHktY5UBSGEwzUJTbYVHWtjPtZ9FtJGDnMVd2bCk6jSd59Phop4vRvamm34aWMGU2v7hUq6KfCKMiHCR",
  "key7": "LXinuCW1qmbShUr382H5G7em2vc98F17hTg3VmYgi5L8eV3i1aeVKjGPF6bAHX71MMz2VJhSSWd8e2WnXWWrypf",
  "key8": "5rLSKUjebDPNDWk2swzAscvUseSnF3qDSwB4AUjzEFVem7FugufAWwCR7kocfF3Z1BvpNSZbb1PdrVUYiRPkQKrd",
  "key9": "55HU9kURLh2Muy5hQEcYRr7NN7J1zYYiaWLpVBW59psFpJ46egPuf7W5gdpfYfDNsT6QQbNhxBPipm3sYnuY6bbj",
  "key10": "BgxiogwG7JnV9a5HhrikGTii1HoKSv42CETHEPq1gS3tD63eSf6h4WBBSJ4rsCKej7594Ydg928XkxCqDe7Bt2a",
  "key11": "EyDFs6wjjGQtUV3e8oxANb6wqRcyMxHq9VzrHPDxhNCqqKCNBvs7fJGLeHVQsEs8DPRMTAjjV9vXZM4VsoEegqC",
  "key12": "5ZgR8QPPvP9wWxhKo9J8AHqtwKCJrAeaFqdXcmpxeMe4brkNJZyC1metxFTs3f5wrT9NaggSLWr3coWM1DHrffg9",
  "key13": "2aMQ2hMMapd32Hir9vChojyJQVAcHVakCBxhWkXPpv6Li4s7AeTUSfrBpMkSjGVoi7WXtUYXQphJA6X92Gw6A7td",
  "key14": "5Smb893Rz9HRGLsJhP2HbQz6bk868JL8BPduUDkcEugCT72GWXTzYNDMx7A7hX8UYT2rSBi9V7UHy8z1KXcHEUH2",
  "key15": "4EdZEsspYH8Vf9JwZqJABgevTJ1xxhfbWA5d3BH6xMyQhLDPnDfVacbZEjTxonNDYPRe82VYKC7jZxGLWGvM7eb6",
  "key16": "KNk3uBB8QSBVgTRp9uoiJsm4WjGW1uYJ8vzdUVPdJ1WrysJEhBJR9ZSKXPhsYA4deKYL7tVmzY85MNJaAMFjY69",
  "key17": "2AtZfGRZoQBAaELC5KZtV3WwgTVeQ15CoZvJpoidWVf9CABcbZWphxu2LwDjjiPGBaMmeQCTiFCHk6Jbv9EcQipD",
  "key18": "5xeW3TuKSHCgEoamaxyWUsQwU1hNVQTGLBhJXSBmXHm56Eb2VCkzfH7XSnBnbXLgcAUgWQt8NRpDT7UHikyd8jJq",
  "key19": "wwa1ueGLL3mbQ8v4S4hCc9Zfk2KogUsoabUZE2DQpBV33b8YzsC3pXmYYddmpLVrapyrhaBxafmZEWmWmvCnZD1",
  "key20": "4PdQsykSkNZxLgaw7r6uzuR7oh5DMVPnVFXq627GGRxC2WQdzhmmM5fBGzK9P13Q9B37e9jZ3BHF4cSivKgnKRpc",
  "key21": "36NwBuwf2yf5WbLXKvj3yKN3MFRKGCF2G3AZ7QpxrDjXPBhiCtFRsZCRzHbnh4EfqQ8eCeqq3c9r494Um6W7Etvk",
  "key22": "3RCeBswcdvwvDJ1f3K9UAbTR4wwS3smtaHQtFsBvNxPHkmRK7SVrLCjHVjg9CJUs2VKtg54pZtDtYzcN8ST5ZXBU",
  "key23": "Ub1a9euHbMAwHMkd98v1x5aynLeXWbYGvkZhisAe37zYMYf8E5et1KD9XL73b1144MgRYHtSQRm1vzDQzMcuMeo",
  "key24": "CGiSYUxF8sFWL5BvERLf69VA17XHnua8ZPMXbbg1bPSfmcmVhGKX2HNEja9Nj1b19qQEfpQLadWXBZ3GZH1S2ZP",
  "key25": "5dBREKmQ1NsewFjZ1QxoCVg91zbr4ViacVtY31sPrsbxVM3nEP3Z5sieDpL8RiE6padpbFYCawYiAj2YyvY1WTV5",
  "key26": "2v92nc9REcaA7EDfsohEyFArtYuosE3Ebw3tZ935gzpGd7rq8SBJ5xsh8u9YE54yocmsv2BKLZrsRbh54w2yvoN7",
  "key27": "5uEPN77cq5rREp48aKUPwqxhH3XmWp9CN76xkDB4RWvW8Xga8iPNzeTRdELob9nobnGg7difzQeGTmgWCc5miSQD",
  "key28": "4UrwyKNeDot49sgpHm8QP5SkuxdKc2AWVtqFgsPztnhsw7gCZ4ezmTyBfSFxzNABYpJ7ZiWofkzSxfCEy6yHecg1",
  "key29": "27wpTyWjiqSpqLwj3vUZYwxuPZzdMwiHWmk9889RfSou52cZvoukYpE1bH1uvyyhPX3UTypo11aTYTtCdAEgQrUW",
  "key30": "26KZFTU2P7HTgWcz4y7dXaJwbgULcnxtAtZqPQ4VwwDD2FkL8J1WmReXFfAiAsgy3qB1gFF5rm753QMCBDyLixYA",
  "key31": "5BjDRVpQFPyRyPkknvwurdNcHvbxdQPkFmGXycj21PAbh8fFMCy9UBha26Qne1YJcDT1Y9A2DMd8PXktBRGZAMGo",
  "key32": "3XcyfZYxwtTY4bHxjAsCpP3yDTTe9dofpLiNwg85CfBqbW2y2hUJhkfreZSftuDNHzpPWaxvLggDwAJtHmEXS2dA",
  "key33": "2ApXKyjP2XKEYTNGLZbpDe5b7eniuyEP329dzk4dVhjBxvmpb4S8D25bHKDd1e2LrHs8eqAa3vqMpQxP5iAmhMH3",
  "key34": "2QUDikEfidvYHBNF2Vrud98RrbvQLoUddRdcaKopAGPrq39XwEezarBs67XQTWg6M5FsmwtRK8vJBC9PR3pTLtSS",
  "key35": "3xBhRLEGKqc37kmPYYQiXEBiYcFq2tPhLf6TfEbUPTcbyBKwkXcFooaeTXJwFDJELuTDEJPGDyrqRJniDU3zQFoH",
  "key36": "4HP9eeiHKZyQg9Uz8GAuVSrxRzrc7np6wgvseU6UoBTvt3peKEq3bByAD9e9VZMM6SXFqgMrT6HgZGUTS6ZFxkth",
  "key37": "3QnGKE78giSWLsJQjEbjMTA17tWxFJsmTEbzhhoBoHteiwvyxSNpJcQPvXC8E3pUSxvALKkuHhpnXPwTqsngWw67",
  "key38": "56Fa69St8Fik7Tc3HPtnJYdFLNv1h8hJHQFRYjLWo7o2rBc1Ess14wYtv6SZ4KRaVPbRNgMzexryGcb54824rE2r",
  "key39": "4CpMTYBJUt9ZDY7AtQobe3hqWB7xqxqGmSNeRe4eS4ZTaacS17yzt7PtGZqvaRmyLzzyPjpeJerkWJgFnrf58CEy",
  "key40": "3LAvm7jSy7qzWtf1tPpzMJt7pFyYBgjufJDKiEbdMiKtvPaFBTmCyXofKfAFGfuYy62xncEsy2e8GmPtEs1GZdz2",
  "key41": "5GiHMsZDKxuFPoodvYPJbv1LMr1dcnwgkzMmx3iELX7UYNBu9M1VS12ekQCzPh3TvoyzWiMvHM2cXaHJnw18gwHK",
  "key42": "2zdsATww5ZD6ca6QAMibsX1qodYmSDmyB82JfhSYrkLZrh5dUd2nvXKVcXnc3R6YPQjUi8TZyS6oCmknTzuGzDdZ",
  "key43": "57WLuFM8NhWB6RBq1iNma2ZYUaBpc5Rj7943APh65fWiag6LhW23r2bqZKcB28y8MxisSije4SAGQzd9222ktAP4"
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
