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
    "5EWDNHV843691JinJM1dYE3pWjoB8rscPLEmYe2nNWLAwoCoxqU7te58vtdvJSbjWjG6MgZdB1y5xVEqYkCqrrje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dr2m3Crt714TEH8DtZ7q7ewW3ZBJ7nBZbuU2iQ669UKAayFMFmuHgBuGm3VuNWZpU6ivJHETTTAoH7hjy5u4PoV",
  "key1": "25Ne3DTncqKxiANLFapQVZiQ6mqQmFjTiExgd2gFQzghXVJqJNB4fn2QunDANt3d8PWmLVAHExwoSWLSN3oaySQj",
  "key2": "BS156hZNVMgaMsYY23Y1fjA5UEpDdUoUmx73fpQW83eMnZYM6vJDKH8KbpmcRX3VLARgYZa8qyxVohoJwFp1iSh",
  "key3": "4RmLUoARf9o6EsWEqLgMMTuaTXQ3oZX8rZT8trNrVAc1cbKZeeV3b3z39dYC7f5W64n4AqAEhdowxabL7moYwfeE",
  "key4": "3UMZeHsSBcfSUNLCJoZD8wm7mrjeSWmBv14xFmeJZ3X9Z1MwEga8xCVDgHcmtwXrrTYRgmrK6gtCVAMqAijywVjo",
  "key5": "46xN2VT9h6ygpD5K1FfBT2Gi6EjVKry4v8DbKbJW83MMH7AMDdwyEmsX724z23RVbpnf7RgJ5qng59wDC2AkDDuq",
  "key6": "2QDaZ5Yy8btRJCSZnSDYi7TrnNJWDz3dUwiJyUVDVNyhUG8jSqCyvP5HBVv9zpArzJXwsQGG39MHEeHPVhun2P86",
  "key7": "2jWHWS83T1QacukgRWNW8uKhKno7zk7DdGCAuZ3jhkcsa6ueFiLwKwiRCZNMnyMAe9miCX1EykAdz1qUDi3CRX9x",
  "key8": "2tYWAUDi9xGwiaQoLzBExjV8C4VZxLeY13ysX1xcnLRKjApub85Jhv3cKzGuSzomNfn3XddTUVemw1EyoRFMytS5",
  "key9": "ZwPoGy9uBNhneVxpfXYtvtCGgpBn3eJyefAvfjTRtWpKf37yw5ynt6FLV7vbQBQHZ9DPvd3YKQFwhoBjz8Anwix",
  "key10": "3NHb4LYLWvhXfK6rg6FdGU7MKwnRPtpqg116QENHtqyNdMU624hct4S6TxsZfcZ3coxhJJ2Zp7zag3Zv1AAczmjb",
  "key11": "52mHtasWN7F5DVdy4nHakzRQSUg24tDop48NVkeYdnCKRu6dFPkNCM2KfFHUyQrVk3jUDXR6noz6PH3STFnbMVyj",
  "key12": "3F93jkyRdH3SQiJeBEhWfieyr8esYngv7cEx67PYk1GcyyxMF8ktnUVcTXDYuAp84ZXb8DWx5s35QBdpNDMAUuCe",
  "key13": "BSvgR5ojTE7k4d3Nh5rxkWcHTvusSxYj2v37j4Hthxqgvh8o9mHNFv5nbboUJKLorBNsBLr36NMCb1qQnE7oN5x",
  "key14": "2JpMzEQcvCaSHg4KNnyct9dzA88vfbYqmzgn2xXHDx6NdA6CN9fYWhW4stFPWbXKSfXQ3RzaRqsRRtHBn6ahH1wL",
  "key15": "xshcXBYbGTicxfYDnDbkZg9A1pDEbp5VjADXhMXc6MkXt8FiZXyQFMTXK83FpXnZQk41bmJn4MGr6ka2JBTC839",
  "key16": "4k6jvcebe3yuJKvgJTbPgmeAMPjnQHJz2Uqj5en7Wve9YsGQUTRaV5XRJae726sFoeerP1bQGcJjCZrvbL9xkP68",
  "key17": "647qLAqBMnLXJ6u8SV4WTvZoNNBwXrjWZDtqagkVPAB2UVi9cdGTRkoWJuD6ShBpESPVEoJpDMHTaXBZV9L9dKAG",
  "key18": "4ayykpRBGMspq9X1FfSSTNuF61hcqm9LtGSxJ2XfXwao6qse9SyJcnQPqN7Ru4JbfRgJGrBC5MZ9M2tELdwumnRP",
  "key19": "5ukJo4eq8LTpcffgk4Z57b2ML8XqnL4QzuaEktvbj9tXpX3LxKNR7nh4RGRmePkeV8YJs588W3PEnEzhjHe2VLjy",
  "key20": "aEYYLMvpHsXRiw8atRBgL1fAKj62vy3BvYFszbHAaXixUr9kmxXKW2jJ2jPoT7K4iexGofG5LM2VNpS4apX8XiS",
  "key21": "TyRmoZRhFFHLCRUKFuTATZ4SYfwFbfTvTQYF7WfK3FwoKwFP6hFRadENn26XByvuEBiD3saUgDQwmxUfPu3krhq",
  "key22": "vtneqAM4W8KpeDg7U9R1v1Knjuwd2QLfXQUSN43bUDPNSgYioh9yARbDrFji6xwaNEp5p2sC1E6XL3U5zGAP7mW",
  "key23": "5rEJpAkqXKSEegMffEt48Lv4wjurnL6ssbV3BSR5AzzagPxrmCoRLRL7CKsuXvCkHRnRGeHSF1UqabmoCgf9nooJ",
  "key24": "2DMQUWAYY2qYqHcexawAWwfnaYk1NSdQHzbBNs9r5gezjmksCLaaDBXCewmEJDan6onRhdP3RiosMY4LgxTySkDY",
  "key25": "mKCznLcRaQkGbmXofT4WqbxqeRB5m2Kj2MbsXzaSeDrpeHNnZPaHKyWvmeh3uCcbRRM5T7KsZ2C2FwuLKXKrXQX",
  "key26": "5jr54E2FGxnmn5JQjTzFohwTuV9E6vuF93usBao9g2miuoVGK5PT63kB2umJjaCXXCQsMzjgJMgpdzKLYV1EocPt",
  "key27": "s7fcSttm35DdeSDjnzAjKgxH1L85SScmCDqsPZZrSHoBHrhnaTujJrsVMJUVgnY9XraiFGRar8PfsVuWBHwXghf",
  "key28": "3aQqsuipw2mK9o9zrP7dMhP5oeCRFayoSpxTQi7sqbJbJFVKBue1pLwPUxmQr6Wu6t9tapJgB1P9VHbRBwofqZko",
  "key29": "2K8izfAFrBVN4LQhceTD8J11YS3Cjhv3CygKo5WBmPPLvDp7SBAPwL3UCPJBwUF8N7QDRgf52tVYGJaGVL9N3WG",
  "key30": "5ZNMNTE6NFv1QxZBuKxcFGkhmL1tvhMdZKAkofKPktzLYy4TKt4JW3f44zgK7B1rtE1X6cbazFLAboj2JEX4RLX9",
  "key31": "5XCytkL1YwPWpWoNqim7USG8i71MiJHoFT8DfSRVMG6DH2kTa7KmhdCtMi9yHMpFCyh1jeTDC44eLS76uHnjkxG6",
  "key32": "3bdCtbJetmjP2XDZtJnTBVEdBHEfD1j7ogJsugK6mTD6d1w3GDWFWgMQd9QUapzGCKYUeZzPhAA6YCFNDUMS4L7i",
  "key33": "2SwisXnAAPMDJmmq3wdmkdvRRwH37t49gCcVyunm4vz28QvHMV9JfafAqs1SvTBFiYtMydwdbXoyCdoFjD46wwhQ",
  "key34": "2PYgvpZCZesMjsoDbnjeJDxboJMQY6PboXFKMRRM6hHaskQy3pY9uf3cKwVgM3JoQYFeuzeNzqPdABDzH2kgnuVr",
  "key35": "4VGGfDiSYrZ79AoU8gko8poWsN4Jdi6qvmS5pC2p8VEn5CcKja8XdUEjT26y4vZiNVEWiMt5s3ymzVrW9bYXtQge",
  "key36": "4s1rweNu2KEy6H784vJnV3qwFn7bPrpG9KMxfJXuTqVQbgRRr3FkDomjc4vM7E3yFR1yfN75GkcoMWh6iU6uV3kp",
  "key37": "aj4accvZj7SDduNwN6Bcar3vsb48JfkjYYhQScZGdm8ymx518JUyBB6M8kaspFzVfcnd96Rf4LceBEtLKMTr12s",
  "key38": "2Ea6xZg1qV64rn9J2Se4kXbj8w5rHvbitqozzgM5Sk4PdgieAv8FqAuZGbi77r6SR5vzSu9DV2vp1TZJcomCvt6U"
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
