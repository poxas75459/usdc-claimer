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
    "4vpCnYekSrTLNc1pebAG7vD2g46MeNGMTnBYDAJ9QBXxoTRRp4SkmWvC1jF3LaaufERpmLD4ybCZkBWirmhRL7bD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53vZ7Sk1sTUrsHLBYfxz58XeHkG93BFprAQagVcc3fuLikxv5Bi3zZqpu9QYhYG7kXFe7r5FmEz6tT3oJ6haduyj",
  "key1": "2uYJhiXE5kBudUKHEGwcfsYr3TZpaHGBXAD6TjeMu6kmgqktqDc6VfHW9xebrw6TQxEBpb4d5u9o7p2m9TjX71Cu",
  "key2": "KvsBWpuAz5CqvvWCECBvsRhfjnBVWczVCY3s5R65449ENFjcT8GG4qcw5nYrMt3fNUPkEJmFhCWE79Kgq6cdBDp",
  "key3": "cnBRt8HR8Vd56aMFrutvMsoEaGmWGTsEf2dgXEJqBLvY4ZGKazwiWuHs7Skv6pfuYtPyCKh1DRQJRt2hHvr85fw",
  "key4": "5Y2QWg3cq6u8TSLZXheN3PzEN539nk1xU5yjqTnXKeKNvJ8hGoZjjRvLA9yxZwN1fe8vy6n5bVFZ1cDHZ5WeNG6",
  "key5": "2XUMoMek9mdpp38yQCT1dgGaecdbFfvUCBrmszyPa2atrowyqtYjd15RZiiEH8RKdnFcs6bjpKkbP1M82uzRr4bt",
  "key6": "zNUns6pbyVsUfW5Kt5gdJ2ABt2krKknjCS6Xi5GPKQt7CmZkyH19UM4yGuY84MsnPwEonU2wesg9T22qszVhMs4",
  "key7": "5od4VmanfkVYSPqRPue7tt4DX9c6AMwmfzCM9JnuuLg76QyJWqSsZJ6zvmc6Gq5SgrxrvPq4nimSMjAhTVvtrcYV",
  "key8": "5tWYKDGvUvBYSPw6LRjMGEe7M6kLobHfGFo3CfMDG3p2gVBaN7BiaxWQHkc5bWD3kTuDTBMS2T6h3rSMNE5p9U6h",
  "key9": "QdKshLkyUCoYLWU5ErHVaqJbp8v5bq2SD5ZTJNchgrDDtr8sNkVEWQNQh2GLG61a7a9ZPa5mqw8VQfVrphSbdGs",
  "key10": "2XqNDfGA4QEXs7cW81eHVtoEsJKLhh8uMBsQaaj3VuYctUhk4kMgtZidpmKEMatkevBhCjgGTBgctd4yVAsE9Mi3",
  "key11": "n2JgNjR8GbB76ZSZP39i9CtPNCTWAE6ZrAKSQCb9NZiMX3Ak9X9GFGcmqPcGrQhcVPSwdPyNCfGFoi3kBTkrDnK",
  "key12": "wQV9iPY3uWkLXp4yRN1RawYthB3yt3B5AEqe8cBscgeJA5zwjTxehnTZy3hRdBA8FmMHxjKtYmtin8B9xY31eac",
  "key13": "33ujCbDbAU3knyCPeySULj8VcsK18MYkFz87FFqFkA7f9qhesrg2GCeVNohVgdHqTxtGJtpFHRph6azULNDBNVYb",
  "key14": "3jt23wTREBCGAfMdAfZH1w24B29XRsfhrCTzeZ3TeYysCzMfxGUZp3Z3RQHNeHVdXMXNLvi4YyGy9grWMe9Qr54f",
  "key15": "5kbdA2RgZj8snysWXNCDs67a897RzGkvGYvQpXSpbtSzj8nxXMVM1g1Nv2sbSEVXkuCcb1JHxYDVRkfSnJqZ4yq2",
  "key16": "63PjXWmP2f5wCvQC3mKZr3PWDxGVrh4TcefKdNifLbVUTXyqHmKeoSiiUVKVuLS5s8VWpgqaW5AVQKQwMYmzj1ei",
  "key17": "uftpSEWiySxv8sMnxrR9mWrXBbdSm67wx2YxwNG52KsoiJGH8LmB5mGUCgh9Ko2xtrbE9AWc4NpvRdu9qKwSoUm",
  "key18": "d1wBt5oupAH13afAaKD3ooKuMpat79AtyNNiMrpLUmBrFge2r1VtMgZCEi9ht2Zn5jMpk1C9qMeDp79xFV475ZH",
  "key19": "3yxZyYQznaYKxJtBEnHkpwJLGjFyhW6hvhp7LKRFgGY1K3CojM5koEfpPWUWuQyNUJ2QLCfJ8PB1j9HU1Unak5SC",
  "key20": "4GfyqEj6hLtyWPBfyBMFwUQhYtCeauU8nWDYv81izKCehM4JsKKMjQYdgvsfjmBLd6mxo42g2JSpXkynAm9X6RDW",
  "key21": "5t3zL9vqk1tYmmt7b1CTAReZMsKukPFhE32axTgkPFR6jBzCsk7Cv9jzRpJGwt45rh3dxSXZhHE7HAX79NrMrntL",
  "key22": "5y6wmj2jFAuaVmaJwVZV4kJDCi6W8DP7QohCWXYYK2agiTmSX4GLRju4ou1x297B4dBw1ursKCXRdr8ustLy1e6Q",
  "key23": "23QGov7wtigNyFHUja8s3QyLwyJSNg9YyMp4uqGXcE5US9Kj4DH356NxYK7rmxkJURQNYn16UbAVY1X7GKL2mZYR",
  "key24": "4NEqcre1gNMwXpPSZniJguaXdKQMTAeVEhxVwPArpMokHjeA9jqnKAxVS3UW5zCVqeb2qGQVGohUQcVTdQjNfSzY",
  "key25": "2o49xeRs7anqiXL8fQJihB5eJARg53yQkbBADW6Rqepz59fbJkgaKbB6urPV96VYaXnJ7fzw4DYiL5DoVfghoRbo",
  "key26": "5jeC4gjc3hdpSTKffykQcqDL2AWpyW6BsNnFwUhcLsdbrWQnQQ425v2zuyudd5NBzQMe1J8vsgV7sDFvrpwjdCq2",
  "key27": "46bPEScAHjGrDJAKmTK73qiSCxVtSrVr8fGknT3yQhHAqDNi6JA3358s3fMm5Qnh9hHkZLcfYBCRrgGpJdbPm1Rk",
  "key28": "RQSaZcgEqagjiossd91FZszibXVDHqr5tMyJS7FkexaQfHnvcdFhWA6TJBsWtR6WHZULNL6NXocV2y4S32HbYXs",
  "key29": "5NaSPf5pyi7YpbzFkRkich1HguFvCSCBHpda5EDouZbaVQZ2M9NP52eZmF9Kzg15VRDDXueQjx1Mp7dzL9m8oAUK",
  "key30": "43APLPWLmaCBPSpHFX3XKKSRzN5o2WePVZ1eseqm1VHxNTmTsphcDYq3axJszstqLuYxq8LXLiDpNz5cxigsELUL",
  "key31": "4rtgD2cyV73Lo4iMz6ciwyQaxrFECLoZQ7xPPy56P12yZMNcS4MbLLbLDMNQgmfhYLKbs3abhzMVE3RFFGhTmdvP",
  "key32": "2F7RC96JuQ4eDAeC9giGv8zN8cWNjEGJhK3X6RQkFuLPrDfDb5QSsTkWz1pTEzFXLbMucEj1BHqgXxu4reqKvcbh",
  "key33": "3aYQsXA1i2wSj9CWorxPnys3d1CccU4bPgzhmR5v6WvPyTqyndwZfL7N2wCngNHQsoP1yJVyRnjFZezRzuiwPM4D",
  "key34": "3GJtq26XH2t18RtHeKUSfEYUyfo2n62nLs6JDZmja52Xsk1Hgvj25kW4ihFs3tpwMeuX9hKNk6j7gAiwYykaeV1T",
  "key35": "65LTP7dMupVeLM9K3YYD7VDdChB9yGobqMRWuwQgbq8vyCjTKNeYBtVUokTtCz34HaWnpYMbpF5DVM9HjBoHWW7D",
  "key36": "3qjWQ4dkHjCvUc6WtL7NPgsogkRXCq7oYR5j1BTMyq5QjovAoF2a2WdaQf9zoU7QrCVV33vJGtcFj3NCvVnjBav6",
  "key37": "2nA6LNdMWvECwmyZgCrgppoyso3V81FEMgVyXqgegzBDyvH1BMtAst8eBjenzbF9mWc18DyJNfGF3tkagC1diQTX",
  "key38": "2bhUNjTJmzHb4i1a23XvFWX2om6Dfj53mQ5eAH21z3FjZYQhUxp3Kx1JvF5CpfXXckxqZsgudGAGcrNMmhYFn1DW",
  "key39": "3pUVZW5p8ugXwitYcRDCniqrT1eqARpJQFnJfjVXamjfRVtAmywfc2F6FgfJTYN4S91S6Mzc2uCRRd5cLwXtogTd",
  "key40": "4q7S1GgzQvEkgGv61oK7Cx4GDMcWKxwVmJ4hdRqpYt9msXVtGCHS6whs4TXB4JmV91fVpmuGN4TGwPNsedn1sy2K",
  "key41": "4ksCJdZYMtmaTr2hxFMzYjBivbVGMB9pFZhLd2KsRQEHoasxxZZBYxU3g9mKDcx4sJXcfxNLxKc9vwLLjeubKenr",
  "key42": "4USb5nx1j84NJhwQkmEiARqhb6qHLGAm73XBcRCcTh1rjsqRmrR1CsaPDL5MKRYx1DqLHu7Lw5FVmUxCXJsfpNTz",
  "key43": "568TadubETUMjSzYxy7afYLWNS2L6PNptvaFWmeLZ9tiFZKCC7Qvi1ktTU6pqpGDc66BJMRq1KKabe3P9BoNAjyw",
  "key44": "Yz9VvD45nSXQYKGmN2kd47weMBErBzyx5P85nhCkuHReEjTuopWLia72xBwws7JEKKFxEB4tvjPDvbKUrctnJyp",
  "key45": "4eJenazdEfZ6fuDr4u8PYcp2TgZ51bAsVVYfEqC3Fkto665d87W8utrP2hfJRaAdfUdH1XdVT2QGTnaTga4KqrNd"
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
