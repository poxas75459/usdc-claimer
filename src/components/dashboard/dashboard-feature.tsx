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
    "FP6ceCE9mZndyW6AP24Q1nEMMCZFaFPqdHDoGUHVC4vzaT5FaX98R7YAZAnmEgpRg8SFUVuXPvkDvMg6XTFKySB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zfFX8P2dGALSj3c9sgwQM819aoSVUhjRaV3EkskPctSXHdz6He3eQmri3JHZAwba3qhDcMhRTWrvB9nob7ok8Bh",
  "key1": "5BLcyU4ZmqshTdZ9DsWWpibXzQrxqLWe1syszD1vTWjhqonaj1QF9dTvoF68noAy1DkaJGVgUw1Jzsy84eNWwXep",
  "key2": "4uwXuQHvpS1edSFnRqCUhdKz5rZxpRt3pGCQfR2Crk93Hn8c8M25oX7c2nGKbGChYa2mynV7mfYdThwMi7tm6b6K",
  "key3": "3LvWkDrc742Eawxs1xKfgNzU6t5AbjH37KGqU8NGxYEous9XRUWy4HPJdTs3zHRGzAzuHX1v1aYryG6g87uGWxyS",
  "key4": "2N4H3FcthSiYJ9f25iQ3L1ANUnVGqfRidy7pvHMR4pvw7dZtCMdf7X9TpWzSXPJVjvmKpDJFhkddF13HnFzfJs89",
  "key5": "62RKzSFcBmHJMRWeWddQouQthaKTWJ63JgwKSF9CUxM1Ritx6LqDTbM7TsM9E6qfJ1WzFU4RYdSyZUY7SLn5tRz5",
  "key6": "2gAs9kcmmELeR1dfSLVLeR38RK7jnikmpMpKhjxKu824tMzAqfcjtwHx5xnSofCsCd9LqyheNcRXTigaCs4soGTt",
  "key7": "3xxerEx7NLJy4dqzUiCzchZKYRDFr9DX8GEve4hiHdN2WuCzfjWbKwSH1bi7Tg3Rt32TWSuyzutT1miTUD1kGKtr",
  "key8": "5nQecf3jGdRea5ZwwauRaoJxwUyK6HWoyveDYLBZKuGTGtgc8hzvY7954NSUE8FdKRQc2XABc61jkeWkewhH2jkB",
  "key9": "23zm82GTKbifZgevMUiCpE8cJWW41aCA5GabdDskHjcPcR6So58LEGSRJDnt6fYQs4DoMDV6zncEMVH2cWic91Jr",
  "key10": "2Lt7WTBWSkPuU1a3jMiUGn2bL57a7354ncrMzp7ZtTdNyocfiMM44PiMEdajkm4JbLxf6zFvKemZG6w8tpZ4jLdC",
  "key11": "3BB2BPYHWVH6qCgFFnqyzxHsibLceHr1XQPM59RScLXWAVFnuqvSx32qUs8vKjmmyHSWFEQTvr9Wwhhk3f5owToW",
  "key12": "55dPbX6SxiF4F72TEw5qUVDdcU9jGQ3i1Kdf5HGuH1VLAoMgbELwmvAMbuN8EGKTtQPnQXoWicEJyJo5c2b61JCq",
  "key13": "44WQxp4TZJ34D6PhbffJqFzDj43oFZqVbkuyMTwNa6ExCArU2oz9nd8rey6NK7Mjd1MVcdaxykWdLMDNiZLfqceF",
  "key14": "4dk8PdQ82VJiq7xnyBWGpRs1YQF98SYCSPiXcSX52whG9cRMrfjEAmVTwraR3GbH7jV6TwMYXXKyn7KdQVJxEXbi",
  "key15": "3xhJD7jqBwsxYXZJyMa7gWKaP9Dyp4fmAv4rUGFshAJvu9XNGX9DfqL5DqGN1YDCjZihcNYZTPz5wGaFytpGPc23",
  "key16": "2q94gjB2ahgz8sCcxk77uWfejHZHF5YsoShsV3EgrfqMtYrbYnSyRWXCufJ6FDqYtvYQbUaDU2nfAnMjgAuL2DPW",
  "key17": "2aARUsPTn9kn5UYMndw2ND4YJDtZc1hEwopGWEvyd4aSrAxvosypcgVtanXKG7D5uiJW77eWj6RiQALskR4U6mvP",
  "key18": "4yL7suZXMLJhyYwFTkFa8yohmrXa2bfCdER3MtssrfVfHrc7ibEeDBTwW2GzWtQzpJtti8mNbu4F4jkTaAuhLTfr",
  "key19": "5N5KYk7tL1avW2RKwMS33roAbJnaigPLCH6AVPKiCcBHWAov2JyaeDHbk4EzbZTta9T8S44CsqajEmTBB4rEasPo",
  "key20": "3pWc8XeKVvafiQuRYDvyNCcrrpm5eXFfA47hNZ9kc2qRePeFZ4QkAVeaUbbmZqf1JvmfYPUj7VDVGKdwH4N98Z42",
  "key21": "3AR25nvWQjuC3AX63qvo1bfZUfztQY2qgxWsHTZEYBUZQuXkjPoy4hHuJV1fMCqjBxRrnWyZA5FFHDLZQ2SGKW2U",
  "key22": "2i1WjvjrYsBQtaGt4BiBLcsTEcrzUHubA2g5d3NSfomxD9JkvjyqH1MyuHe6iNcNrdsKfKwgcE4Kc7CS4MhUsw9A",
  "key23": "4vbFhMgGf6gjevDAjQnCvXoTcfNL26mv8X7ZMGiqhGLq7D4H5euqY71bPMq8FKEcprUVqYXhCJ1ZXPbNDfwgz1Rv",
  "key24": "dPkbcn86pgLS6XoFfqT5Zx4etg3gfTaEiTWo68cJZcfQonq4NrubcQ16AfjSSPoRxh1wBXbwQDj5skZZKhTjy4G",
  "key25": "3tkdKMvbENgdg9wvaX91Xiy3J6G38tG4UT9qSUdECjmir18QEZzHSEo7EQhmFHX6EH6nn69vX5NS82AJrDfyu5nb",
  "key26": "3XirDyz14WbS5zTAxuv6ZekbZtCHW2W93TK1uRAYoyDbdjJechFzYrcJZbJKwdFNFM6CDCfJ915d79cqMf41f1cs",
  "key27": "2VrF3XP95P5UYEWMbVUJxvVNDNqNGeJgLq4RaCCUV4BSTsZmhjsRjpEeqzxq65cNr4NKMmsTLbPqDfMBc2VM1uFw",
  "key28": "WLfAhHQKjp9LhDzQeXwD9M6HUbhw3jfyqSMXMBcFUjJmcDMeaqGVbrPsGd4ZChLkZWZJ7ka39xJXJreZPWuZGb7",
  "key29": "35tTXeE6hRi1gajA4YyKJWTCnSRNMZRuPx9ZxEPFsGxovmq8bxM14DLgt8vVfPpNWdjPmJjpFJVPYga4H82PvCL7",
  "key30": "3ZyFnxDU9ud6JRe3K2Fq6P5oypmx6fJSHT1tmL1Gd374DvPtB6cXV8Ko3DLvBSfo8koiDCrE3GR9YZgqEN5xmF89",
  "key31": "2xhPFTcsucSwXDvVatoZpBCc8RWHjviH4PShbMBZzQ4sCu8YSQxJfErXaWst1Fh7NbbNmGRnxyZ6Y1ugNNB3A6jH",
  "key32": "5QmAhW6Lv8GMJxpx2WDnM3K3hoxVDivxsKUPBVXWSfN2ET37MDDj5kKd5sVypFuKp5vgfrU565uYYagFSFnyeuBc",
  "key33": "47Jo8Rjq5FGi5vZHA4T1nQb5szPePvQ6TWzBVztHcbu2xCz3FVf21uSaAdbpM7p6y2Wrh69itSZNGgHR414tgwnU",
  "key34": "55rPacD53hrrFgZiet5GnRpNGd7LSPuBp2Pov6fQ5YyGAK45KafWAhJPDHdxfi7BgSxr5TyPxiJxinDAhnAfWc3d",
  "key35": "4aKRhgNnPZyN1MjX7V5REtkCWH2qU5JwHzAHSLX7hQGngzud76iPVwcVJywCUviHFym4ZrFHqd7F7LpKpqHi4DaT",
  "key36": "43GvvzY2YLT1UW9fMUfBM4mx9R7gUUkQoNxXXp4y28aZmRz1bPGmkauSX2EqrNBXbcNaeZRh8E61URXS88mu85LM",
  "key37": "639wcp54EXXwrxhUhRguXnUe19c3LcC6VsBQhH5HPg3Uf2GGhBgGheNW3tSUZyzrJahvADnea1bUhemYCACXL8BX",
  "key38": "MMvAsVKGEHkTWNLpM5UwEGBcTZaoakcHNum9NFKKeaveNTgWMLrLTBjMaBvtEEGvDahnXnCtFXHkeFQMXszspSe",
  "key39": "21uqnpjm9yULesNC68C66LYsPAcucc1pX3F3EWkg5BP2F8yX3yNYtEhLiGCDehVXmGNce4EWjfD28uJM1TiGdfPC",
  "key40": "32wM2G6GrS2KcHdjmpreHwpncqp7GhSWZCQfSmL9SJ2WGRdmTi9F2F6scqSPkAv3UsMM3MWgQGxz6iBFdw3DoDh1",
  "key41": "2cZBEtS6bJJ1kQ96TekUj5DEZctWpbnnhWno552RWKM5PiVFgShYr8VXeJXxdXUv2dPCBKwkQn3CV3pPubMVG27B",
  "key42": "2YrQK37eTevXqfPEKdD2pYDCbRZBAMegZaAhbeMWeV2eaeCUQTdxB5kDZxm2eWRidkza9j9CjfDKcMkZ2rgNKLFa",
  "key43": "4RvABh3spxyR1r6owRP6SHr2vxNZfhGvJGXYLFRiVdbigxiyrnWPvsC4zmjGKUvHYAXTnCAn2FVUwng1NeWmiXvg"
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
