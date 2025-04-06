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
    "57iQ95vYaMaSWczUY38Drvi2kWDjKrrgn3kvGvxVgZB3qaAGoXDFB8LQTTYyoav9FFf1JyDVE1SX4YpAjUJa8cob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WqGgcbuQAMcNEv8DLZ4dPEeqhY5qT3YKc2gWEamjscTvwzzASLN6vrZPBRj8V25dxJPSqxwWnaVZrY46oWYdLvw",
  "key1": "A1oi3J4uz8w4sDwoegg91RKGXVbtSZJ2KaZZvsbTiYfLtESFrpPBtav4FkpxKV4DzRLys7ms3G9NQvwAyqA2pnC",
  "key2": "2w1H18pWyAJjVuXn5E3xZ3bznY5TTVWwQiiNdPdZXUBbj5Ud4YQeKfYq3eukoMNk5mMRTHx3EsLnmWfJbjTo6Vd7",
  "key3": "4qz28V3KVMAx6Diqgs4xZU5yXR8pjP6JtGv3gCV1tekwM9jrTmzctDLyFySfSc72o9QRch2Avz7xwcqBBDihhjNZ",
  "key4": "2aYVNE56noReXmHxzzGW5q3VB9yyExe6C9nNhDSWTr173qbpbLdKbjpW9LEr3oxibbY8j2LsfpW3uNYi5vot3xd9",
  "key5": "2PpTFDPcWp3BStLy7wmTeLiCg3mV97vfRKfYDjn2Q46hDsPHqD2ot1CbKWpoebA8ACjXuNzh3MEnqfS83SoHm36A",
  "key6": "zHQdNqMNxBMpL3n9M6yaWDxjutoheAjpqNDGCd8xzxiGK1kEi8ec7iH56TkzGSKfQLXDnrQvAQNTS5cdM93CLeL",
  "key7": "5Nfvjiw78UVFLBT9MzyonDY4xm71nia8KuDwx6J21mwFQSG8a357TWuMarGcohyYiVkqHNFkf42N4s3QawAfkyXU",
  "key8": "2DjxVPKBQBu9EQMoiub4uS3purdAMuwR2HaQtkCbTPG4L92247ePwAY78UhKdPE8t2Qc76uz5Af19z8vgPm4xHng",
  "key9": "2G7V2nS69G62vdRByeZFdBCfpCSKWbTwUjdJJMYBA1ybNdhiAPTZfeMdzrsesbv3Pc4gV4qRBJfe97MCAin7dqqG",
  "key10": "b6aMs2isjh8FaYetWpVTxSqRXRmZwwwi9Pgp8Exoxp6L3ayp6UDofXvnMAfDSzzrDyZtug5mbNoaBTwVPMDxu15",
  "key11": "4aR1QE7AiifKdn9wjiWRg5XatxFNY52WaYL8k9xUHRZp8nX3jEfwo2es1T54CX88YoN3gXcp7xptQSF9bJoXgej3",
  "key12": "5YGuJhAULnXv7jMFSvq4WeSrQQWxPPyqVaWC4QiVAC4PtdmLGwKcvWLVU5eNWFuyT6AdnxSXkZ4S6M2kx7Mf7JZZ",
  "key13": "3QCnxTL58Yn6CWLrMFXWjQSqQ1ZrYHgW9GMvJwS58H88BbKsJvR7VNNRTvCKeLfxhqF81Ca5ypuajdK6QcCK845d",
  "key14": "58ts7bugZgMZGjNDGDSujnkEgRoywz5nwsX7hZ5wW5UQoL5sPEwrt7aqpra8jFaXxY6WLBtWwA2ZvytnXH3YXVbc",
  "key15": "RWVSvFg4LfwaeCrtgWZF8dCBpf3BLB7gqLoi36cpRYdvpowLX9yrQM7pz7iwVDYLXDY94TGhJ3fCCgccyfp8kGa",
  "key16": "2mY8uqiS7UD4uEoH8vQFzrnjRBkV9qxyKefHgJMesXT9a6N3arXYUW8T2U4xAJWpMb2zYZrvTCMPU4BAv91ndWYR",
  "key17": "31TuPxwyH9iBTG6ovmzEQQLCNvxT7s3UQFU7tiCZPoRBCywpMEcZjDkirctsgZ2V5ptCe8P5S2bzoiR3KpQTotH9",
  "key18": "3NNvuc4YQmnApJdUFsrAABwHyBNhEhus1Y5B8Ew53oEUu1M1SJcAnRUav3THcKrpqNYPCX3WUhiM7ZJpDELSx96c",
  "key19": "4NgtDwQCpbCKP9zt3PgCg7i6CXqx62un6EtxKVUbZf5jeaLavL7apt2SAbPWQXnpUNtcBQYudn5s9ba6YTUzATBT",
  "key20": "3EhCHujvuvzXCTB8RnqASCX28SUdQ7vYJRnuHgUs3VGeQzRbeogtkSTybqhhQRu6vVe6kUxAy4psC2QXKZi9yABm",
  "key21": "221Kc1wWSyFHXzvyg9qKKd4hCGguTVrCNR1pxc6FYE4nUh9eUcnh1wWD7HnhzMXMxzGHQ32rxAh25zTcjYqX5DCh",
  "key22": "5H4nLVtEYaK6cM66x8kPdrq15bt15Z1yt34JMhiZQdwoCXLfMMV4eHDyexdynkijP9HD1XmctXwPPiUoockpo7JS",
  "key23": "5No3FiZb6CRv8bGLUXehk8KPQV2Wg3QvoVVssGA4sRisQWyK6PLimVozgKLQw68mrGHJBNVXT2E747UrkWamHQUb",
  "key24": "3S27a1GcPtS7fM12wsBnJXzCe7evzUwbbcguLJTyRSgPvBw3feMRx1EjJ9xSY9eqBHvp34RMT8YdwDbuYEg36XcF",
  "key25": "2RdcNqVAuyxyWTaJaqDL2sae4dnZDh9JoB3ZuMrPJLWkZNgzFzXNUj5YMj2xJ2i6LTgP68GP5ENvfvyPqjxpxR7p",
  "key26": "DYwKYBih9TtVpwbsT7y5DQ4cv85tbUpGF7siHgpGNScJUJGda47K8WFky8hn2DtjHJ1n6Z13UToNev5yhGMzjcS",
  "key27": "GqQ8mwxtZ6Vy8nVhK4TFbH2CaLEiED9GKVqE4WgokfWJuTXwpwy8nUVmXZBX4v2CUBC8Er7DD3SGkjEhcEv1WQW",
  "key28": "2gmC54upnse8dAYAmrUds7youXsWaL5rSJi2mCtYEjtWPimiTxtDNBe75QhaXtsNigDhW21jdauSbtZ7BVM25SbH",
  "key29": "4W9wpCHw5nZ3LVARuLuGcU8miaHj9EbcLCcUuxSRQFXCmCRejyhXcYKspMZtxEsJbttKfG45dopSC56TZTbCBGi2",
  "key30": "2FBgHRw5shzaJPqD9KaMXGUkuNax6YCUM4EKLim9Gb6oFAGxzhtthFeR2FVR59hoHJhUVcmUhTiqbWrKowGVbZN",
  "key31": "3isEkfzVsRfncTr9NTYomFPTv8rUeK6NtroRrUErLpBSM2pwL7MnGQYHYmYLAMLTefa3zTBzNYqrdkYySqZsm3pA",
  "key32": "3ytbEj11UvKGdMu1PG1di8MiT8AQnqYC91wtuHEU85KviGXAgeGW3c1z5JnQQdpxzCFTeUR6SLQdjpnLjxTL4Ncx",
  "key33": "5oNZc9ktkuizoMFsBkWFYXyEvvbcL9TwUgb7YvRcUrVxjrvScx7DJCR433ztyRdzKjtWh4DbDiB1S3iERs59hZ3N",
  "key34": "SXWQjuBYjwfwG6m3Tzhiph6jmqueAqkpfiZyuQu4idmdC5RyGhZrEByTcdMj3rpQQybamsDEfmBHNy6dekM28qy",
  "key35": "2FzEBvow7czLu4V2eNGWNWrxiWhZdgNoHjAjtbufojfE1w5smD62oUVjg75zVitAdeiJLuHhrN1SfMa23qY3fswJ",
  "key36": "2ubq53nJnhQeQfHsLbZDPmfd8m4F265HJ7cKKxpRG34zSmkt4JshhCoiJSPptKvx7GJqZcfBgSDbv4Z35LBD2v2o",
  "key37": "3e9g48XjTVF7aPquMELH8GKvyzqMGdjfUj6ANRGtXLd53ovawK7p2SYUt2Yx7H9TJYakfkEpsfi8xhKoE3LArVj6",
  "key38": "4LmVz5x71d8m2azs245BFKQoAMZM6L2p4g71zR97EWQuzzm5ezdkdB1odLwDtoE7Tsr4WCaNbM9dU5PMhRhEUEU8",
  "key39": "39stDozqGH7P86xxne2v6LKZfKhcZGJQc2W13MfXvZ2ou9Mhop18qbeaTPzYhegLYiU16B5Lq7WkPaPzfShssK97",
  "key40": "rk9zTfH8wpL6aorJeUgiybhznN5tYcsEo6L17KMF6VeRWh5UCvimSYwp4vYXTb3CYoYdUptzS8xHtXFKZjTxhNB",
  "key41": "5ptLC3F7gyqVdTi6xq71b3DBL9LbfSGYM5Dd6T1JBvevLBdcRxvN5dbuRhoJf3uaXEvGyfiAPf4tHB61yRPWrwcU",
  "key42": "6vsiRYrZPQ1VcrsMumFuxEvyQHqtYFtimPUsd4cbPxu6ipfpF7a168zvPdttiDGGCnK3dbLxWMkL4h4SN2MhdUz",
  "key43": "4vvaapFqvqZ2P38TNGvkQTNgKnZX1jWR8fTdhhup6HNdHpHrNrBmQJ5Vq1NGY6eHjWUUEa1inGRpzXNnuKRuJ339",
  "key44": "gNPb1GisqEqvPv6eP3k1TmcvwASxRRGfUnHLFKu1KXaBtYJx6x9bqAPJ571S9BckmCxjr6LMwqaxgGiuVFDxUXt"
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
