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
    "4g3EsKvSdg7Q3zPcDBhmMQcVzhbeyF5rt9gdmpjBRepiTv3chWzKejLCdkgnGLDLsPr4vwFfrxwRUHpfwg17hMh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZUZAiydmdjmNJ3bPtJJC88hUyg6zSrjBF5vgk5NdWre7NXH7zujbVupA27unWPmALEEXwX3WxSvCv6XaVH3X78",
  "key1": "M7RHwpp3nnumyAt5yYQYFzAUqadU4egAyyQ8hDydGZq8BvgMENDNZHgm6wt2jyK1jYqP3Rq9nmQ6D1wL6PvJxPR",
  "key2": "57KBJjq7QQBqarLCoDs8Ah78gdGY6aGF5oChDustqoHpZCKSFuxMHcgSdh9a8jGEuGgwkAME3L9suVzEkFq43d29",
  "key3": "B3vGMmj8HANRbR6FBy6xNPJksYa3AFeTCqJ6apJFiAFhTyTiXziibE3fsU2XShH36Ph7RkCYv2zSB9CZGxEXbYi",
  "key4": "2vwSyS72WsgtZWcqKy46QFDqSHiMK7UyFacbv9VY6bvGcq7WmdfKqHUmpp2fJtwjQoVjQ2zEFavX8rpCDqqzdyyk",
  "key5": "siQX2nn2cZqTDGuhxJ4VgjECdcrkqe5St8zBVCdcmtbwK7Hk5DLYGtkta8Lz1QqHokGvSAL1TKLGStfAHhuwqts",
  "key6": "3zMTkWSGRJ4unkqFTXjLj4ug2F8dChamg87CC79u13m5wVcthJNSrdJW7m5xD1im1RCwSskY6CKy6snAAiEHKS6B",
  "key7": "4PtntMYmXRKNweRS2ryaxVaptubsgk2GKe1RxWwZRucSqSeZzeiKyx7jVqTN8ppKh6q5t9LfTr75uBQFFvVy3BQ9",
  "key8": "5eXRNYuyeLgno8j2ddG7i3f8PPa2Cb7tq1fG2LWKqYKu3cec9mzDmMSS9VCLsp5mCbapUZuAgFebfiJLkqcej4NF",
  "key9": "4dngXS7RnQGqhae893Kh6Ey93Tp9mcu8tmksZiqjM5hvPWR7WKiB4gtEQGcJ7me6EmWPcfLCAXHxCKR2LxDFtUxK",
  "key10": "5ZyiE4XvVDHEA6DDDEceEcg9dz2Fz5vGt85HLWSuFEM1kmjcfxDZ73ZYJUt8actAeSoKZfLQMdRRGDgJBFqqvEYR",
  "key11": "3NdHJGCmUFGCHd8HwXE2gJqSU8E1EyD7CjL6s1xL446BXHjPWhQ8wuUSRYhJ4289kBCEZwBGnpTupZ3xNs8QTgoP",
  "key12": "5HNsZ3HXeCSS42KBpobiFz2SYFH3LLefdVxHKHtux1b9V6La1zUdhzDQeb4bZPuV6chVBZpeRhGEjvV64RZHv28f",
  "key13": "3gvUPybqvr83pgXxRWjunFwsnH79Z34PbQrYzvbKGCRqJSYGTvCJMfjWbip3Bwy5z9799P8w9d1ZE7QVUtpPXFuW",
  "key14": "2y6EnAXBqHQY5zGzSzJJbgp5qpgRqPGMKdVsz2KbJ4y6ABs4PNatxUw13Lp5pHVq3ZPdBawRXXpJKp1guLEYd4Gs",
  "key15": "4LVikRLzAfYGYtx7NBx6JX13rKjAH6hNFWU4vwWnRe5sGC7siW3FAHD1kdh5kgXcNNToQWzLMEhfqdnBrfZ5YCnU",
  "key16": "qqHo1yX85qwEAi91zqQWXsB7uKhH7iPQbSCi7QRmtrLn6tYvuj4NDKmZW2bvbcZNNuBbyey54P1AriNmy7ja5DL",
  "key17": "31h67S8j3ir3SJrvDbGvbxenNqUfkyD6j8JUwCbtrvpVirUNkAWzd2zBrKrQ2dop1gE9wExP3NSAbjA7BSZZGmaj",
  "key18": "2vYqt4X1DsLwqjYNuPrawpW5pozc4S65GRvXz5B9pPjvRuHHiuQa9ZsGC9GZMAqb6vTbnUGcaTA6vHS9LPKtGutd",
  "key19": "2Gav9xCxxaaJ2UaBX1wk4HXShDBF5jC3zJ4BMqvryeAVdVZRTg3qZ6WfqatjBbFBHrNPM8W7zY31uciBzDvudQe5",
  "key20": "4TcxoJbwHZh57ZzviYTi9ijBz3pkSq6btpxvsbGQWxQogGUtfCxip38pdoeKkgSx1jj9nGvYZxxWtoFFDsB1saJT",
  "key21": "2iTuavzW5Egrv5ksu59T9j8BjNrEP3WpFTh3yrJmdRW2XHN34isMGArMbxBGEBQbEnubo8uxjCnfohUh8da28aVB",
  "key22": "4y9MM5HSJYyoAojbGb9TN6sUVL3BbWZqidAqNmY19EznZhhF3U8gyFsLrsC2bx7AcqmEa1mSH59kAoSDWv1pP2vt",
  "key23": "KeWASrGiYUcDFGjKTiPdPsX94hrmEqtDQaNeJcANREoYUCq4UWivKCi4Kn5Y6ZYow6T2oWcjqGQ2TTXXDv2kea4",
  "key24": "4uTTQbsJZzgwdQBJMUaGMk2s7qRmXZ6tpGKvcCkWW4YtAaem2n1qawudm8AXtHCKEXt7Qh4SSXg6LtxhiBcQFc5A",
  "key25": "3yffrsjyZhTsuWofqGywegePw4JeDmrsuku3rxuh16JRRYAogVKFVG8BusWEHNScKbyvryjdsW98oPE2DHUZF2F3",
  "key26": "4xKKmcuNhCbVipRJGFsoSfNUZ1NYptF18J3CAzU8ge43uLkTmrjM6nruLBLbzynUUJPkiSQgCF5n3mBAuddSLku4",
  "key27": "57wxzVn7naZZspsUugKQEh3sgFzPefSAtx5Kdkp4DBsMGL83hqAZjy3onUPvanp1onENBRkaPjuiqWDXPYc3wHSu",
  "key28": "34zzAJt2SsR6YXhSsYWCwcTKxQJP1tCwbbhC9CdrCPXVChgCUKp7CRMU9i2NUNEhBxrr6ohk2uRNdvrCuEU5GeaS",
  "key29": "4iRcSoYKe93W7mv8par9JcoYuoZVVhnF7zFTmgrR66nrk8gF7cJqqtsW7rwwCQPuPcMC9fEDKx88KwrL39MYoRpi",
  "key30": "2sKfNLtKsK3BvWpX7t5ihsd4NwMQEFKov7oJ7qkGMt3qvETFoTz82PoKXheYCsQG9vwQcHZZScpxmUP2LxNUcjfc",
  "key31": "2qTQnm7BpPPH24TybWtpHuUg2WGRuSg8dZCjjoshdbv53RRFmLaDheaqfNLdi5SHPAUxThDtA3bDoHz5UHz2uDCz",
  "key32": "5g4bomU5bDPUGrfjortadYxtX97tvLtS4VrZbpivzkmu6FDjawnadbUtTNjscRCSArRVNaohXhNN5HXvE87n8MyJ",
  "key33": "3Bad2a7oJ56Ca92BPGqsSibVFGvoj2SccSJYbjQBncy7Ka6J7KMZKwmPSzyPFvH2yny3MaYZ31zmgP2px78XJpJc",
  "key34": "EizvtnmoFyrDd12yDscLKvzWuE7ZgvbtUnwsKNA6MzkdMk5gxqd2DCkGK52nqEFavKFfZ2irrYf9Lch1Mho9Bv7",
  "key35": "4AzXjTcfZ2yFY7ANVbLyyEhUH9fx3C9DvkeFmXvp3d1gJtKABPT2qJUbhifA697exmU4GLNDFScZZ2bBCToXmvud",
  "key36": "4eeg8YSG4SxFocFeWppt99pbi9VK4aSR8152pcxT5oqiZGz6Exd25CXHkEK43ZjGWChZ41ZhmZTJrqHkB3Kkdwpn",
  "key37": "2wtR4YM3PRX7kmTDKboMd4inTzad3mbQbWtrBA2LDjqUf3dbxhaZtmgBv9kk4PyRFM2kyTqCLEApz9iMnMshtTUF",
  "key38": "4HL79Ywg4BURQ2Ry4v5dNoZf88v3RoeDujdSU2F3Xt4VANzKtyYV7ydkMwHR9zo2RnL8EAWTopQF7KDwjtyMTGkE",
  "key39": "5LGjKPHrXiNcYjV3dLCTcHctVi9c93uMgps2a3sDP5Rx52kLuXY99rFoqN8q3PomrncHfGQh27jnnrr89K8Apwox",
  "key40": "5Rk3sgRkJVAbEBhFRmqAbdK8grfT4NQxUPUShLKaQ7fdadRJ4QHz3E3D4qVEZ9hWJdtifYdCsWE211SZvLGuUEGv",
  "key41": "LL5d3Ra3xwppdSUH2xzRv5bxN3XTWhnUPfgv57Kk9pBeUgSvAqbZB71VBFhi1zeJrgwHmW3NZT5Md6y2AhiRKY2"
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
