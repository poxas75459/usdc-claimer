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
    "4KmbBMnVdySZoySw2DXtUzESUef6axrYqotPuXvdAE3QyKUDQKQ754uTdShotbG4krgdJyQMTXMyDzgaQvhbWpkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4priEbNpQZoNMznL2pRfhoJb4FHXY2vL2bgmprED7e3oMxDQL2rf1tBtMtvrC9MVpzFdiiCQRwTm4U5KPVKaqomG",
  "key1": "3N2SZjhLbDNXD1tHdfvRH3Fi2vjYfLwiDsy3Vb4QCcgj1G1sm8VtC8NEJ5G1uXX4LbaeuHT1GjmamCMYcK991RvS",
  "key2": "2KdTCkzbZP6iy5GbGeYQCgXzJMFhvTWAsxJJ3VTcWVpJYFzxbEv7B3t9m2J938dZ7w7mfiR9YfFyVs3YfKWNXjYn",
  "key3": "rGaEuRmP2kJCP699Ui4Squ6fvaf1xw5oaNWvqLovoVE6aifokhgy7gq5RK5opwn62MncpNjSJicULQETwGydWyE",
  "key4": "44z9yFohkFRL4Y5uawsV7X6Tp7GVttpdBDDsiMeL1AQ2Ur2ZXbgxjn28SLBTpzqFxh1afaTsghzRUojoizpJbfVW",
  "key5": "a3G2AB2gdXmxVwbGYpAodVQBQqQuwc8xnEd4p1t1YbHNhZDKZMFxZw3rAhAc8QL1YNXN1u94mC6aoWSb7tmYCN1",
  "key6": "qBCes58pAcfB7iFerXyPsoragvVKi2xAB16JmTmpAeZYQUtCT2xeiMLZM6R49Rmu2F3fKJGh958X7f2biP3kJ5c",
  "key7": "3m8G3acDxRyEwTZYTf3PeTQ8QizzzTxM6x2R92VHpLi5XAxghPPKz7J7Bhz9p2fGBtPxiWbntXXCy3NTPAucsV6T",
  "key8": "4tt89hkiVwEiGB6rh4HRjAiemNUDaPpVGTQsG41Q1ARa7wzPqzMxdKQf37opD2wvaGWvsnYQJ39ThUbx994u314i",
  "key9": "2HVXZSRWT841Fh1av6djzGXbAYcwcQo9P5oCPnESPJ3RYFt5DhZzSyukHxu4dYAC5QhyW83ZFByk3q4HaGzdh8xj",
  "key10": "4Y3KSUtjBEuddHyvRTsinRHXD9LqTmHiUtcYu6UAEE2mi9xpFqJ9Xk8dQFKmCGwMuMdXqA6vxPFUVsEQBWD1r5uv",
  "key11": "3Nxyo4cgcVH1UBEKdKahpwCT8nnQetsjc4RSCCjQwnNZxVitgLbyXPPLPGCW5CNqETY1AmTT4tuGRygrXTnNAmtG",
  "key12": "cbmcWAWiw8BWQd7yzxZevLoYcv11NM8kXGTzqhkCzRMZyRLAf4yL2NB3w6M3riMFf49AQo9znnCeEX7hCi5xfSX",
  "key13": "5XcktCnRbo8Zr59nmcGpW8R2jJsmaudXMZjnvTbC49hPz5xBC4Zhg41ebTnHfNsg2FzekTWwUw6UC6ZLQ4kGfDsL",
  "key14": "2GuLGECqZaCdd4gvofwW9TnepLuy3gDwL8irS2snSPSH5uut4ge1YFk3BZ32bwiARNYdTGnjFzF1Z2qkn7RCbMuo",
  "key15": "syGpXXiXtjVhxeEACaieE2nVne3WX31fpu4Xz2fjQZVSFTzp5fcQE2C7vnCGacjLWnrcCDve6FHBY1ZDfPXY9JZ",
  "key16": "JEYsyukQjvR4VApYXKrA4zb5B914MpnELkVH2iAtotuHdLsGLW2qFkX6G68LYWCUtro9rt56SKb2LTzRmoCEhbD",
  "key17": "2UQ27K44DJKifwTsbyNQKTDNCdje3XeFFdHiBbwKrXZwxiUMEvRdhhG5MDbSxW8gawaxszx3hqaQHNqwhYnKGe8X",
  "key18": "2KVK5uohoA6UEVNA6awNeT47uc4xEAbXrW48JX4iJrhCRWGnewy2RpVCZwhLYejTzp53SUtyELjaCEvAJMHqcGvt",
  "key19": "64tzwvGHBCqECKygLizY4EpPCMHU42N7jojawURbBHW7fg7PyzkLEvSDva3w2h4oFYR2fSL6UBrEdxo5RRTbNMs8",
  "key20": "2XgyDkhbxhMXT81aqJjwCtwp1S93gRVWsekzzA27xAK1BZ2ykZfGGzTZfyLTkmA189t2oYnkUqnU1TbCSq381iE9",
  "key21": "4yEZCSQrwn9Cq8kSACFFCkaESGVYpZeQsVJ5gFzKYZ8AWoVajxiAoPpaUnGiSwxJXMC1BuKVVmGnJeN5y9Cgpu3U",
  "key22": "5BdFh9pRdpkXRmHAnxgoULjU9UwLhU22foYChXHTmqcDPj4uxCiJo14oF79sukXr7MK2RvMYFKZ7Zhq6P78pdmEL",
  "key23": "3sdDCDdyaQfjBoYddcYoqUhtcaCQ1BGTVmVSvmMJ1QVuJKewfTWKXDWn7CvW68o3JVHi3Q4hsUjUNFrdVJMcytbP",
  "key24": "2pX85uPLRVK1tGduR7a9iKyU74RouXSELrLU48zyTJPh6X7GCyV82j7jTjazVmpYvKnju8Dyt3HxHC59H1sQM9Kx",
  "key25": "SKjL7fS3BSG5DP1Ri1F53TP9dveJxXobSCdvdRgqEkcQjSVwejxoCkyc4iZnEbwWsYRhX4dJ7ULLHzc9hyzY9HV",
  "key26": "RsWbzM5nkXNVBUhThVzGUeLSCPiudCVAQ5aDJq2b4Z2SXFbGuRiMJtqQfQE58D9ZtMwdQM1X9HXcXMakNPH3aQh",
  "key27": "P6o6sRJpMMXkuUsgp3mgPykZtTBhCWB4HyDDmeVcghmwToDwymcd2fJnYC8EKZDtJSRzw3Qt5KaeVciWxjMHdcz",
  "key28": "4txsQ97j9qci1imEhBkTHUaA3GpFvBVq7k4H4YGs79APvpZAsT3JQQ5HW7UeEskySZXmpGHnLsVYzeeDsgsms3Eg",
  "key29": "2ZNHHsJk4aRaEh5tJHQ3CGE3iSUbcUTny5vFCf3f7NBKU6omQKf1j8tvK7fZ4f96keNS8DozPbgGKb3X8932VYPN",
  "key30": "63AWJfp1tAn7Z7edTwWf961RhKAZJ4zfGhTbwR4V7xbRUiNgoASLAtEhLvtVGq6T3KNcL9ST6WtC8397ZXJy4EuA",
  "key31": "5zdkffcYqfHWT6jxjPwvsoG2TdcmgeMZBZBdktnMN4R55sbir3wDecNKtDviEQRzLJitycuKi9FR753zg4YXcd2N",
  "key32": "45usqc4CNPrau2zFCVJDZqLpo5aB3vUNdNghGgphufwgZskWCAYXoLY3h6HC6ajzTmJeowu1nQJySP2vT1tJXGi",
  "key33": "2i6kmd37jr6Vgiuc52zTYQieaVWvNVPizE2wVh6MRskHMmptkZLh3hABaVJUf5TDXN77MnwLCfDzuA6SbAdARJ5v",
  "key34": "5KPFVsZ8ksKnEbQ26Tj3DXBVUzV5yF1MZ5RFMiRvdx73VYVfj8HCfLDo1mDwgQLfogVJ72BkowWHD4LSmEhAApqG",
  "key35": "32wLC5DNF1QzN1Nwb1jrmhDSX6M4hXi6kAbAq81rwbk7atTm7Mi1xMrXuPwEqnherHgkAu2p9RrNr3DsX1haDkNY",
  "key36": "3iFTTeq96g5zKsDn12g36Lx5se2dpQuwTBafbMeXisSwKtrFjyxxXjWSPDUgV5akRm1Bkthn9sp2ZM99NeLZvW8Y",
  "key37": "36rMsQBGEnMbk85qGYDB6DQJ4AvPk9mn1BzRHk7N5wL1XVE5iWVfNmuczkd1HMUnbeK8mi2e7csvq7UAD2bBqPZP",
  "key38": "55Gzek8YP1uqdj9vxZTgEKCWQ5H1tLgwvnischrDE4ZxZVQbBjKkMamgaqeqLs6SEdYyAB4tnRdZ1xqiDg9raHsp",
  "key39": "2j3oo1kzPbKvBg11rJQ5oqZejZ4pgeYYd2njZfSKBvTEA4quSAjkz1J7R3yFZSiRHChgAkKUGq8PaVwqD6mBHfhK",
  "key40": "U84G43pysp2JspCfdLh93vn76quNSA6jh8UZgY9yotqxBaNNjGjqQ6yi5XEkoq2HwM7c66ByhtrKCSMAxWi8kQj",
  "key41": "3nVHH6eR3j5RBQjCFjkWvCjujtvXKu6qn9d6w8G45qUwjtRc1uoz6e3RjieVvB9mo4534Go42YMZD7UuwNbjETTL",
  "key42": "5qTdWDsPhUb5FdN2mz5BzDYJvRgMTjZepJTyyY2G8Rw31GBMfb1AKEWfPb9WaKmW4ioE2svmDRWTkSwgxqyn8BW5",
  "key43": "2Ak6rb7rWFQRq2EYapNF9tcvWLQc2yLko9fj5rHaEK2kh4NXgKZ7uNZMY4n7VEi974Wxb5CwwQqaumMovg25y2HW"
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
