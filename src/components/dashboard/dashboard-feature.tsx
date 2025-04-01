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
    "K1gFrVohAafZbzsFAgm2hgtvY2pQ6nrX6PNuHfG8yiYALb6tojdZRmNxHXqCwxU99DkcexAyAbi3Xkg6CmsEdyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "odSiRELbygN29E4RrCi4CWUy2aZquKCnoveF6LuZDTgQMDDkJqhmgdN2K969LWQd1zhPNDzmdA2xp8hTU9kEAnQ",
  "key1": "5E9W8C5tX2Uk8EMW7mirFDnc4yLFQpjb4MWaZvuqvGPJG8FdJuzAa982HoMXpffAferfAVQdwtZZcYjmzbhDMz9T",
  "key2": "5HQ5RC26XEGyanmB7z5pxQywKbMtWXsCGmQVhu5ApKUYPg2hg4mcdbCa4VjGE3CcBdDjip2xRZxVbK1rRJrNN4Bn",
  "key3": "3q2wf8uZ6Rf1qm2zsbahc9pAWowySLUAAHwY2oLtYo43RXN2E6mXAjtW9p5j13RqxrJF8NJ1fkCoUjbPKfxHeGBF",
  "key4": "J1oqGEYAL6GiDTr7548cQhqmMSm84A2KpzV9DYx8U39e8nVU1BqkFqtEX7WK21i1adUM7KjgLc94wWShaV7GBaR",
  "key5": "23ehjmxMqqGaSXAaytKNkbQPp1rCGb7K6ZFmrnHGaH74t1r72pkmGZVUrq8EmxbavpC9cuBUUgopJCf3VZMvNphN",
  "key6": "5zDvKniAameBiprCxh9CDR2eZruG31dJfbXFv8QrcQdJv7rp4GwG12Jc9YrtEpKyofGL78un5ifXTraNXoQGpGqp",
  "key7": "3N84paDXBBvggwMwkNvd2X3EZ51pzGyiRJRFYq4KgAKNaZEouAdKF6zEz91GY3nKncqx7JFVJq41Qwz2EtJm7b7D",
  "key8": "2A2SvdnR8WBNToAq1V5o1n5UoCHDajYKJpCLRcXWiFxdfv7KyUS9ZotBFM1ZiJzQwaW8r9LRj636TvHYQaMkfiMk",
  "key9": "2vcy3g3p5zseqBz1CjRCVxnxsh7uE5tX3uxFU1WB4pcqfwaJQCt6kxaQDRmySyAdUor2WMHkhMXCjZ5AFcDs3QCN",
  "key10": "4bdCHtk9hCZ2eZ4FiRydUVZty5xPs8wYbVZtLy7W3CCydyVYeYZ395YC7Le88p6kZcj6rsMb7QXrNX3caHtZegBy",
  "key11": "5tTjkjrVBS3abLLbMA5VDEPjBNN77Ts7AGxTUzs8919PtJvfEZKVBoUH5b5PJbiY6EzMnjujWojf5m7xZEocaqH5",
  "key12": "5SfaXMGiVFiMbQURk56nWkvE5oxrpUQUg448qUmACyYfMHYkEzW8jSBeKtFaQczPkm99iDm1YGFqP2sxcej8Hpax",
  "key13": "3P6ZGZeGgRRbZ93reAKYnSySVM7P2gvpNsKsi6XRDVLwqiaTXNeYBLMGqrWv3S2ch27EcdQ5KWG77Q3c3bUMT4wC",
  "key14": "5v4biiU4RgSrCCS3UBWyof4UaAPWUfGcLphGFgBaGJAKMw9BA6LZau7cCG8dmCLMxQHTTR5bsxbdaT64tSVdsHHd",
  "key15": "4tQNNtUMDEvLYvGVYQepE74zfv9dLc6NwMxfmTKg6LFJEavbV7PvijcNWQtPvkc5tfrziT8WXSa8incno2vgWDc4",
  "key16": "2VQWXKYRG9q4hdvUD5WbMr9DUPGLg79NgzMczdgdgyJg2SzEH5j6P2tRQxMHb8hFLf1y8SqGurRFiw9LPCsEwuvU",
  "key17": "3wyBW5KkGMywDnw4DokFcwDwwAb5ECd98bJmcK6WHsB9VjpuDP9B3XER6XGQQWUu6yNpDpb4ahgMR6x5TpSxUTkV",
  "key18": "493FVwMLWAo7Js4ScRMCSBYM69Waixa75duypGAvzkjx2qGr1wbQhM8mNgM4cR5VJC49PhSxWC6XAp6x25AGuWGP",
  "key19": "8Zt2yue6qetdSGmrFfo3oveyGAokuFiLbo6kQUB3rceJLEQ8LkZPUdzxCSoGoxMtF15jEnozzku81hBMBVhNiNu",
  "key20": "2X6HZSe3mP6CqnK63Um7sdVSxdBzTpXxevbQw9sg6yDpS6tM3An7wShxnzwRr5onjuJ4Xg66TuuXYgZX21kP8zU",
  "key21": "24HfyBiZif3Xj7yqwZTpzH7HU5A9LSkCvQvFJ9GADs2pJY8TQ8FcyjamtMhQqUKXJcqmGaHxDAumt8i15wdt2J5Q",
  "key22": "3X74Yi9rEFH8uM4zEQGmTpzNUpQPRSjUA4MPrNMjh4Ribp7a54VDcXxFukssaAUk4MQ4eehrDJGHosRX7BSrP884",
  "key23": "3y2rv7zwcSuEfAEPAa34TS12BxzgWit1zdosGiBWhuMHPCpadWE5TAMCDqUYfVcMC8nUAERQmchkUSLMVnkUX1MW",
  "key24": "5cMhytenCmkPARo6PYhY17EX3u1YYCPxw8VD2tj3R45tLPKNbj7XFQELq7dxsvAFSpDTcoYUeAat8bcXJEFzBzqy",
  "key25": "49eHQk86KvfCjNrUbmx4uwB9WxNac5GEBaNSGQHMF6SnsPfuDDLAS9XG3Rk6ERxAgVJS8gx7ZWvjyNp3khAqHQtZ",
  "key26": "3WKN2c6uk5DuuxRhDNxnKvHGKcBpWMdKA2Yha2CY5Jew8TwXcDMUW1wWxXcWbmDR3rxGZ91hZ5cMms4p1o4RgRV9",
  "key27": "3cvMzi2F2sfUfeob63qbvmEbmv5xrCdgi5uCbMo4WSPXwKEcTxXtm8qwF7WDj16hK9p55XXB6Ao3F3kAVJFUTZ7Q",
  "key28": "4SpmJ2PcoNXoHrmA6sg9FvbqyoKxevf4SZQ2Fb1pEWWj4DFw2HLqMgGszNbqGRc1no7iB8BFkt4nTcqnYyc3PAXt",
  "key29": "zX7n4Ht6iCfUDPyajBpDVSxF31pqGYXAcgGAqm6VTReECXk85j3cSsxSYyUjdzUnrAUHp1Q1S3ktRZnxGJZ7han",
  "key30": "65MXMXh1nXZHzidHym5scDN1R3rVCBVi9S46pHePYfR63uKiNCCZJJ4gXL1EmnupYJT1yiUzTJkhdk7dbdpnibw",
  "key31": "2Mi2qut5vW1KRFBy3iSZw2xavfWXTxHSRFsy4fWYPtha9xqdq4tmf3psv3zp3xP1jaZAoM2cH9NXPNwt3t1TvZe6",
  "key32": "2K4tFUehuSWqnrf3qmB8frySTs1S9CMd96mv1Zn7hgEJkd5y93BsY2GKRMXz9Jb8PnPnL222Yoay3hMecbMVyBbB",
  "key33": "5xuXH2LmQaL3kNYECJ1YGHSFrGjFCqLDFqAJtEmsfB126hH9nqCK5uTaUmgq8vUymAEWp3WbKq6Gau3TCjvTquAS",
  "key34": "52yc96YFN7aEyBsyBBuBMBNPV7KSUHU5E78FRTNeVqsta8tF1NGNum5vxVeoi49S3QdiGf7e7HUPMfv7enMteiKF",
  "key35": "27Q1hddQvZ3Dvwi81GQ8JRG9MS1ijNgKUr64vG5AigKB612AgEMCKoykQKm5JCqdVfJBSMDB8o2mTWJtDZxD3aTb",
  "key36": "4ekH8ionfprzuBEPQZdAmpoWYr6M4GVb1HCj1S19WZ8DU1sv42a5grb5yBGUdMM8Ks2XyZj213sUK5Ds7kETfhaw",
  "key37": "dQhThZ5bdjqqk1m1RD78r4z1icQY2TvLUXEQYGsQJkQoEFC6MVRD1NtSekEp6wXytBQCCRuxhSkYk7LXps7v6FV",
  "key38": "3G7PFc1zUUg7H7S4Fr7CKRkJQ7C3FLPDsxcaFCt4FB5mwbK6LsnWkGChA8LaMi9LU6rsJy8obA8im188VfwkBZu8",
  "key39": "4zV9GADUuj2rH7NSYmQeWgxeaxptqJ5FkCUqBVmejM5Nq8NsfVHhPEHrMZvZdSNnwqR3yTTj5wWfhU1hkWAJn4sG",
  "key40": "q9qPwXQ4YEbNPZWDaQ15tPV28MBQBDZ99JptM829afqURA15pWFgseUAo9CUiKc6iTZXebyq1UvKitGegmzGN4S",
  "key41": "5LT6P1HT22dQUQXvdtTcXDjG8GCwjjDHV8pJmYNSpZFpZ3xKcZUvvqhtjzMXq9oQYGsEdJWWVRR6fJws3PFbjjeE"
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
