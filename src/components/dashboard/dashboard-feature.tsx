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
    "3JhmD9X3mryZRGooR4nqvmVp6ErFxDa2MD5X2msjY5oxjUenjJBSZuwYrR8AeJFzuehVJ6EJd5WzfBSHhdc3JNhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24d2cxHxrCF3V71NQXLar8ZiMEWND6fajdxHEjFvzRBXYxn5wV5MDBvtwDWTqAUrRJuYLFELBSo5rfi13inpCQdm",
  "key1": "4TkjZoSbCQYpt5exr2zt9TZEzMHTcoKA8Urfr3K7bQzCKdw1NejZ99c9g5aBBpYc3tVcXVXpGvG6bT1KEZ9sJ6c1",
  "key2": "4XgtZp9zp35BrdUgqmvsHHV1io8hctzc8C2QqSzap4cswbLeY3E1NaZ62dw2YEZ2Y9VFJ2JrRi9ZPs2UPD52Ymmf",
  "key3": "4dhRS2AYFMEoTpEGrS8wSc9BV9AWtieDw4Lbtuf325aXGU1XpJCsqLCsApYTn3rAwkxYcxv41oD1eehpYb8NuGJY",
  "key4": "48Ds3Wv4HV1Kv3o8BQ5ezQWjLCMuuZosvrzMM84T1mvJDCxaYjJAwb1zZ9CwLSrfUfX66HrVzLaQC1KdpJSfG9sw",
  "key5": "5JU242J2AcxRGDwaBenZ7KTEaAVj9nsRaNbrRp6PY1P6FYJav43KkYbNaSfEUGCy5E5JpwqyeW4xEovcgDxeYYCX",
  "key6": "ZwfG7vmDHF5jZaND6AapXn9j11x9augGeBperRMQh8diomtJwM2Ee5ey9SH6BycsJ7ozjEv7Y31pFmu9Tpg63R9",
  "key7": "5XNhHGi6DSmwPvy5mkWgaJNdyYhtsrG5fSPM7sCZSh4WwwmcgmeV8FVLw3ipkZWatjLW5HmBiEFW4DWkxEcgdGQx",
  "key8": "5Uo1EJq5tJNUsCAzWuXtmtpaPBBA8uTNyEb9XWX2a1XQ1aY4EHQz6broTNeMYFdWnpdNcf6r4z5Dpo4ivJPhHHgc",
  "key9": "2kVFd3w9rgSwKqHfXDk8wFMtwMb4E4xpbB8t4xK8K93NQRRWbkwmugRGngdnVoANHuxaqd3kQK4qgtcAVCsrDbDS",
  "key10": "25RyeMdrNMqnDP3fvo3mVYUjAAYXCiHrqgFopNP5xU7QoxpPHGiZXhf8PtiYh3Vsrg77XdxEi1nuiqBbpA4oJL2d",
  "key11": "4cyzK5JFd1FgHKEpHz4jmcSrNJfiGSRGwW8BQW7S9pmeS8EeWz9kdFTtWiY7dx1dq4BmqsJCRuxNVpgbrWw6oxqX",
  "key12": "4QLBLha92fxftDnsrp5i3ArG8dvFVbbunTdRKqMr1RFFEaBWtWhpPy8YyuHJAVXKB5Fdm12d3fJDrzUGkACzLPNf",
  "key13": "3YJ4K53Bn5bAGrLoySibCCb9QYmyzUHCeMGad8JrUEhadTRH4Msz5kDnJqBPinWiP7TxVq7ihCPHBeKTZAdxw7Aa",
  "key14": "T3CfG7tTthKoQd8uxE4LBMUw8gMZSxn2Vyj5bi8dA3k7sj55YcYwVT5qL4qRgb1wBsr5ukHajSg7WuEeBMn45p8",
  "key15": "DfXG3eZqp6uvowXWvAMgoCgx6RdXuEuUGzzvQTuSbmCJ1CxBAPkZbEqBRU8NkkWwqKEkxHWaZrAQwVz2DErcDst",
  "key16": "3qrCPGMtELvMcrHy67q7bAPdWwNXriRSXi65dMEYzug4bBw22tiXQEtSDBQ6KhQY9R3uscoSHZGypPXKAHLbVkJ6",
  "key17": "zP23cMbqY3RM3Ho4itEmjjmZDPFUj6DnXzaustngoep1XwMyaRfyfM4cY5RyQTNyodpVyKy8cpjFR3WioqFEqNe",
  "key18": "5bgTi7EC2E4aAB1aKRKZMqeaqDUZQs3H9Q4KDF56VwqVYYzwYCFi9ivNWGLhuBqHDNi7LhpzNTLnQiRszXZ2pKU1",
  "key19": "4aSFzhhnpNHDQTtGV5BPEvAR5q6b5SMkSJkcmjgYGcg4VbjPpSx5JLTbmgGzNLa8V3pMc2QzJfPKaiMUsXjxjrkR",
  "key20": "2BCXbFTcuK2LuDHLyiYqGmyi2qJZsZhXHU9MQ1TYVytFRFmtgLpPz1yzRDNg6FQYdnXJThuSHDSSX3u6T6yckxac",
  "key21": "xS7dH9epfm3uQtrcygs9GKhdyb2LkJDZRuUR5Dr7qBR1fHrPKggAw5TQ1WtYs9HA7NHeZg9f5erezwre9j4LUXm",
  "key22": "4bYxjqRV5v4rVPJkrRG3rERyvQZMYdER78NJk9EcpbL4HfifJQidPkTgnaujyydxd5EmLPYXdzAzVoykiaW9FzBu",
  "key23": "uThZFTE1nmSeXCQ6bT46GABTwU4DqBuGSW3rQESi3fkqyiXWcmLRcnfAhZ2UGYfwLjckJxJJq4itePm6R1eUA8c",
  "key24": "4UbPsmd9JH4Pzw44g8ASi5jRWc45hxDMgRdpf2mr81dvsSxywBHdSncMzBGx8GVrRUrGJ5rmkoSS1v7WKJiB4CfV",
  "key25": "2BvrEuFBAk1XeJc4iKhcS5XYRjBAxXQFP4MghSLpXknHEdRsL1gVfVdVYFyaaJJPZk242Vn9F56mQZsgqQY1LLKb",
  "key26": "3u8YsVHM8QRXtRDXQQEuqYHKK8fCnVfnXJQM7MgQ5jzdLjRxoGtQFWgXv4TjN2pATCWNUUfTHZb6girNmnMkyxq2",
  "key27": "awftGF4r2Um1y8g8T4UtDdm7GMJisRV4qTWmW1QFHPtCd3UBym9c67nd1MGRqm8JHSKXUCp1yWAhN64RSwGWPQV",
  "key28": "4wAjEDGaH7g8uJDPR7ko5Mgrc6SXadvttDJCPToXzqUkSpyTZ8uXvRXiu3ixgF9WhnKd264vtUTDS7A3UYuWcFS6",
  "key29": "4GbJHVT9TyGbrDN4auVdXNKG9L5hMBJuhAghj8AFU7M6Ad2RZUGxHF9icKbmSJCZfUo2NSC2XHQMMXyJkQy5bf98",
  "key30": "4cRNodnkwBQDfe5drWifvVaTXJCa2NzWAoDLnBoYko932amrpKC6YmiUZaMrh7zCfjoAhpoKnsfbYcNgWtWW4tL3",
  "key31": "FoKQHJpzB3DuTKbjLqD2BRQjbJMvVVboakJCv1bXVRPZRrCgXY52gNok9PU2NGyBxEWB8Pbpa6bAvQDJAHiyk8i",
  "key32": "4VdYWcBb4ZMEPzKuwXQyc66TLfNR7beLxLRviYU8qTfbEQ1F8bkJPQMCwdLccbEPEvUheAosFShQB6tR8VAMLxs7",
  "key33": "49BbQFcGA6o74wHsLycPvE4oJv3G4GvSFZ6ihN27PB7et9ZqZgbB7k4hWX46fw3H4SJAp2Nux1W51yDRW2RALVdi",
  "key34": "4NYfJGvM256cmDeD4atpYKdwBUaKqFCyqdwbQHumpqKeaEVdXGte4Gq7fxsQ5anoGki7JAiTNfHf46JpCqskoukr",
  "key35": "KEZNMnKGEj5sdpAAvzzENFcdY2D3v6Xcaw6Fug19ZvU79y88vffZHvgU8yTzqphHXqQQL8xNtRUaMLZukwxRJsV",
  "key36": "4bno3zKPNpftYzcZyJC5LphFNPkCAoSnmiBJP6UTRLQEd8HQvG54SDummnfXzRmoRVCfVx2nAkSdt8cAVYEqgzPK",
  "key37": "Y3E4wXAadccnvt69vC8BjWPwUTsLyERrbfbZrsDsTe7FsccG1NggQfM8EMQMJD23CouYeUekChBVuWNZk4L1CiJ",
  "key38": "4bEvVeqY37EwPjkrKMP2Z5EAbtxhTyQ4Z2ux2Hqd5oo6B3p5iy6RLvaLZ1KsB6xskgcGU3v86qmTNjz29iwZS5eP",
  "key39": "vhgYFfgcEvgp3wF3NPURFiNu2GLGLdyRxGuvDboYk7znd79iUgu137h8FmoGwasNNQHHvcSQqYXzmB2WVZRQMMd",
  "key40": "9jkFFD2ZsLAEARWMK1ePNYjW5bMfC9wdy5ywmRXcJBeYFm9oGWeahTwCKfB7KDqniPF4Z35saySeuQGFx6dPSXg",
  "key41": "4gskbsWapjxKvNyeWB4pysqsXu4qZZUDQuvVe1F3vzmqqS8n6n5c8RXJFDEXs5A3udK3rmweZv6ehNkeHRLoBJh9",
  "key42": "2kMHdKouyhm1NacXd419XN8smY2Xz56wnAwXQNYBBgpZEn8uqjgLim5ghTBW6gokTXgqPngjm3G5T5PcwNKcNai9"
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
