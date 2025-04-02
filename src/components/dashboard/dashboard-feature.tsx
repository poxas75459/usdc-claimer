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
    "2Smd2V1pz5kHx8ZBsH271nNfkXbVwt3U6r3ZSAXLZzoxCqDkpy8MEg9nBv4og72oYh8ksf2Xdu9MEAKnzTzoyQ2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BxXFYFbxhibPVLucsXE8qoymJcNcF72bsbzS8ogopKAiFJHgqe5mmnAndvCosGwRceXMe7XuSdUuQo6oXfxGvz3",
  "key1": "25H3FgEQYu1K7WYgGXz2tuDtXN7Z7k79Ljrev1qbDMZ1D3bgMZ4sFV6HqbS7p7Z19hoJQwiL1HVrEyQgEP8SttJe",
  "key2": "36nYLTVjXgbKvESmLrLda8jPXMwAMXtrquzKHJYWMtXinkw1rjL1VGSdVpmQN544jYKvwDrdRCHumAvZwfJhPK5p",
  "key3": "55X11aCoauc2enN4ccWJ1EaHN9x88jkNAmupwHopSsfdcpV9RjaFJzwExa2h44wsB6ArMsYVuYYfCMmcGuAAVA55",
  "key4": "3KFWbKaXQE3sCUFGkyTLS8xyNvd2QQiDGBcF31F5aLZE4ZoNN2ZrPToyqUyJXjPnmcZ9FycjaYzYGP2NKXwkUYfo",
  "key5": "3xbJA15BqcRxbnTEKoWdy4h8sPD4DUyPgUqaz5LPVPf2cYAR7ZMiQsrVy7dMY9ByDpBYDo1fk3rmeo2CtqeX4Fof",
  "key6": "2GnFHUx7VWzMYJLGACpFuZSZyyW42S7ahifNgMyjy7sqnxAnmB2Y1eRwhqLy9jiRQQToBrGiyswMJkpaAzyogM7E",
  "key7": "5rGyRPibgjLKYArHYMtsJGdEJGpRWfZTaiKDPxXTvjZybrhsC3GcoPv4TkwAJLFyGQaVdmN3b5X1faHJMJqJRVfP",
  "key8": "346w2ajWhmEpVU9aWxEsEKkeMJ3TMLMJPB81K1xr5X72DfXwRTgtSQpt8sH8b8oiU5gwCuznsetVoPAHor9kp6cv",
  "key9": "2ZEujTG4cMfnwtZGPBRoqWpY5uprPQPJBL5Zbb1ghbmQ2DE9HsX9bEKbtbbfDVwUX8g8u517DBTDqDCiPAAvCbt2",
  "key10": "2VGtqzPJprnjuKMjyfC9bq2rXLRtaU2txYtNaVNhuizQTJpM9W9AUFWEX42BX9bdbPweN9yrnU4eZLP4MpiM6rSN",
  "key11": "4Fk3pGrMand6eRB5V7k7zX2YgNNGa6miDcRjQQXWKi4gxsSU9MAb5ZqqkbBs7pUorQgiqJm9YZDWdudYgpMZ4hbQ",
  "key12": "4mGsbppB6WNMkbtsahyTf25XbCzor2g7vuafCWw5d3vpBR4fPBZ4oVHLgwVfacV4a6kvMpt9R6KrWiPiZaLVpsnJ",
  "key13": "3SggGjaBhKrWgEwcJDJscq9LLf9gNPm1FN6wV5sutfo38CLR2a5TQfrUJp88MxUQ13cv7ZesViae83e6J3waypec",
  "key14": "o28FWpsBmCR9FHHUXpJxXiPMPirjpuewFc4rbz9f8wJ4CwvDMbAqk18PEcMhQUabqtBnmHGbs2ijGWb7mSw3aCD",
  "key15": "3JHGP5FWJJFHHL6NABDJpBEfvGt9aHWoKRCdZcrxMn6C58Ar9hkgZ2GWufpRSBo3HsQ7uMfvEugpfiEEQgcpbU65",
  "key16": "29AmsspHGwa44ZzeA2m3jzdd5zopnCtSV141JSMb57h3Jioa3ZDRN5qEcd19n82KtQPW1uYcKNtJbifqRFH8mBxa",
  "key17": "5VzDZ6WJL59hewbJgVjNGuw6TUV7FD6FjWJSShFiRBzmhLpdvgQVqi6XUA7o724VqCAGPexDwmzxCgQMC1ydbBoe",
  "key18": "2e75KZrRYoT4L9QbxUMnEumQ1UVDYpKCfEb174akogUbG2yRzT2kFFEF2PuaXd6AiriTmzAJmjF2NsEUQvHoLvac",
  "key19": "49Utz3V3yVvkki8DGqN4tV6yX6XXsTbo7EbucgNAyJZyaRGx1GiTH73zN8yVVCeu2yVtFTXcutuPw3iCHW4CFWn4",
  "key20": "XSe6yVg9bafCSbWAqJFvEEVEfkH8FPp6KdwJRNVrs2bfW1gDMT1V4ynikEaBSsaLZsaNfXgsexj9iS8zZGotfak",
  "key21": "Ws5bczKezeHTfgqLqk64Kbf9BPJD1hPM7A8eheh7ERdZj1QRVMVJqLo9q7qJgWJN94T1WWf1rJYnwPMK9BiWJUF",
  "key22": "2tUGdEarjPFUQSuUaDdGbHGbLma8xFkKcsA81zNLyKGepzgNUtPfdgG129iUTWphhUv9VDjooukzwxcPcgcZ5ZEG",
  "key23": "4GazP76uat5L8UDnjRar2E6hGjQFVkZhHw583CZdUzCixG7fuvBUxsseGp6qSJ6amuGv6HgghVwYwvys6aTnQMsB",
  "key24": "oizo21dDhZyC1uZ9WRWAmtQ1LbVYEL3puWXb4sBLy1jCADRFoV3fhxoNUEHmURDiDng9E9exoZxoZdGmznyDuEF",
  "key25": "3DTFZsvwcezex19mmNz3oPafEWySbDGyCzs6EbB5Tt5tav7y8qTMJPvDyDn4koadhtuHVnk5kpV6dUMDqtgyLP1x",
  "key26": "D99JtkDzo1cgpBdMWVCRh6CHQSWvBxBmky2VVRm5BKg3VYsRfjH5eZtnqt1uaBMBvmWSHoRjFwvGyiFirmehitj",
  "key27": "5PZrrWRz1GG7Yy89ATTELQATL3zKfpkHwK42HcJWUYXULGxW5tjaT8srJCWoKXxb4hWNNJ2ZLu1hfABWd4DEPHfR",
  "key28": "5ns4mp8Ko1n2xm6m93QqR5USSgCn4kdnPZmnY5xEBAur7YwggLVRtdiVEeVV5d1dZVvzEbGBm6gx2r95cQ8tTTRB",
  "key29": "3fykCd5eEVvwAwTbkehMASr1JQJGs4RvArqhZTsuBnQEaTtRaAKZvkqausYjasEY866To25WA6je2W9dV9HhfZqA",
  "key30": "5QCW5t4ERJbsetxTe7r7nA4JLvckVHn2Pa3zDkumvWHrdzsbSdurmZwuHD38L5fDtNv7mbHNNaSSPdEgpxyvLPtR",
  "key31": "4qARdi2XUp28zzwDRynycs5oedjZXafyKADDorgQt84CRwHKXUrpDnb5W8yGeV7FuCgYXK66h5Vu8uhVSHgcbjR1",
  "key32": "225JDHpJ6np8Y3JtYgYwqyuZqXGnvFJosnNWdSi4ZjXHjQGJUzJMfW4nHG4bgHQGv4pEGFMTDe4uweVUpHwjvuHv",
  "key33": "3wUQZHU2cJaLmitMnvfjM3YXxN6kPpkYpK6iVNTQh4MJCSgozE9Z9MBNwJhJgvH3W2QBmxZMUfggM5mYURYQMBG8",
  "key34": "rEmL48ibd47iJZ6upb9w7rwTH1y1PpQcEmxQJr815kHe7Qj4jmQ1oNG27CPC8Gc9ZBRLazFPHCCEgjsxgQ6HRSv",
  "key35": "5MDSVooiT17mjCeuY5u63xcnUYK219tF9ovW1HuraiKtz9rR9BJ6kz5xaUaMoiAGUUSz1VoD5C7zMmCn6zXRH6Ly",
  "key36": "5HhoQ1fp4ENXvJMUCQGfhorvYupRbrssAK1jp1ShCtp9t2Z8BsK3qzKSqCYW9k13XC69T2Ld4Fr1rM2DiYKMg8L1",
  "key37": "4vSa74UxQvztpadrmiovJeRa873NL573kbTFQuvXvf7DgzEBWbLXESBrkmCsPJeFWLaPRmHpWULF5E5sVU7W8Rac",
  "key38": "3ypCw7nSgk4z8zy8EJNbSTWQy7Xt23PPWhdmWojW6oLAdknrnzRUDXgKqTBJedGF2XMKvemiWxaR9YhScJvt8NDB",
  "key39": "5YoHC93rcD9q6fsLvH1GzH9QhrJThHyyUvz1sM19gsDuwSCRXBsRUYtCMhZCB8LMVkgxSUTqVEqnMhMah4vYiLud",
  "key40": "4QuXiCddpH829PAiHtRzs2sYCcQbTVEqbMzmRLFpmb1eP35T3h1h2a8mxjKG2Xzp3WnBdb4JByzbhS3oizAa3XVJ",
  "key41": "5eQUPaEPcF9zytY5KobbnfJFJqzY99vxGetkUDBsV8XRowSLHU7UNtk8KAacjktH1qNCm7cbua7w3rw4XE9WwaJQ",
  "key42": "5FdkHZ2ZjjzEdvnrUCEvUDgrFb9apF7HrG5HrYuw5wr8yq4gzqfD2AG7JWNqjFK4oc6KmUspPyjATMAwb2zvazUn",
  "key43": "2ceVwoqFwCqTTe1dw6H4jBv9afnCifNJRS6fCRza2XjNfYa1vBuyjkRwsynAeQTdm2KaCNVVFb5L4UQL5f3rLjW3",
  "key44": "5reW6yrB712RVdWGLrfuXW4BUmM24GfrCWiNw7TesKPxMdCknoHSGogDkHXZPGWMwEk3YNSDX751u2q8927nmgdD",
  "key45": "2QV6PXvzdieqh8EjyVGaABaTJoFed2ApZnAyiMC7WGsWs73N4XnxdFfgRC3EuhXp6x9VVns3ftT2vvFjiLXsZWJg",
  "key46": "3APRfDJJYkdBRcmKtz8N9CpjjRPXgLpn3syQFHc5JWgX8qzzL8KTicvKBJGLVo2CrKcYpZN6jzrZyhCzNptKBe54"
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
