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
    "2D2EdyKU1nGAohdWeRfrzdAxd9HieraQimU4m89rfipogb3LEKekpxBZGedsnhUTDrLZNdJQ7ub3HTjdP3w4X7ST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dSRsKz32FRraSGoZKGRgkDy17FEtuxhiVUp2o5URPg1n1xHffCkm4v3GxoUA5S4yEmZyRzjzfsBxL62DNqndcid",
  "key1": "4v7SSHjdepEYdoT9BQ3PppxAzSpnBoHtqvF4wg1e1M3emWZX6ftenA8NZX4x246dT2PJsN4dFkr6LSRRmPKXHmxW",
  "key2": "25YhLckYyRm5ewQQq1or8nB6AY2Rgg4Cbzq5unzFLyUAzfn7CJgUKUPCh4fxzohFRHUX8Fkdc7v7KvdK6qoWSqMr",
  "key3": "4wFfqjfAuHnC7H9JnN2eprNqG5kHab1EHwveve85HUv3vq28AGgfSJLuzEuz1noMam99DmMQEUrundCrZUNbpiAG",
  "key4": "58J6FbHVGymTXaGjJTkNiETofzYQpgVV5CK8hcPfXKW1Khzob5bT1kYGma4zc8WqpSehxJhPNXkE2DvGUmHdEekS",
  "key5": "5PUVicRpeBt25GrfNG9zhYE81JTYYqvdTTYoAfjqZV9FqjW7u8CEuFsTroTbQTG8aGZh35CJmGFGPSQgJiMAUJMt",
  "key6": "4eJhyqCAyNyBPX9kEEWx4kTWZrvGQdPQdmzu4ouBC7RJ6wR2RMa7RsXyG81ohgibE8W9R67eN7kv7Y4QVMo9A4gU",
  "key7": "4tHk7uzyMZSFbNEio8SCwLCeqqtDpzVKPGgo4YjV9mZ66jQjaaYEjg3WjpCAjavSCmLMx2bvmfRv4ykMtnN6HLom",
  "key8": "2y96Jyv9Tg8hXNhkiNDnMQRUx1A1EbP5J9t9rc6BjT2ptdvrXxcP3DSGnYBqnKATVvNYhvfjjXbSAuN99cYGyr3M",
  "key9": "3GFobRR4iKevMsRQT7XgubyDK5JGQUoRwuVbXgxiHKjnqbsL8bcpPqKosTFTVq2WZULc1PgfF4hzR5JHmxccqwhi",
  "key10": "2FLwhicNGnMsEwALPHg3FKCUn5R6EZ6nsY4yAw35QsvS5wSFLZeZjuCjguruXcdWP4dEXHJUhSu6ktHPSUGmU8di",
  "key11": "2bWHCyHJ7ADevMCKbd8XS7VmWTs9VuEcbDeHVKMnf4gG2XRUw9XRJJviAaVyz5QkY4uonn7F7Y1WsD9n57F2BzyU",
  "key12": "3Ah6Tu9TrtsBk8yd4Jjg4GKTdhi9tvjP5PwhPYYjECRw9GASDQeqAV93gfoo2SrLooFxfHWAt5imvHc6eWnWnGrp",
  "key13": "4MWgx7cx24oK8294eGR692p58aYgeuDxnV9czEg9eziE5t759U3L9z5nYNdNUyJqz5RrZYGWxoBKPh8AtYnuiCeM",
  "key14": "5niqjKqFFpvZiE2vqchiHLibTT9azjaGPFkTeVk2nVJAetgkFFkPZsPTuq8Fcepzbn96eVoVwgbS2QgZ4PKDUjVu",
  "key15": "4a4rV4JqAnpqUENQpbQESntDzC7QsEiYPt7NVPgNghMCzqBGqh6UNLq86FqYDxHVbYBH6jsejm3xk1qqgAk5Xbv6",
  "key16": "2PNRf148Zxftfx4XyYYWnJNXXhfhENnymeETBkxALmTPxoRdYhFzTkxMXKnfBaVkRwnYzCaYTzMj4x2KRC6TMvjK",
  "key17": "3FF63UH6jzE6XYcWGukJ346yDvTum9RKQG78oiqLTU3Ut2ktXR7g18DiqeX5XS3dVvhN8X2iTrSchADrmpG7Uztj",
  "key18": "2xkzQTcQ2HkcVEZCBAFjzdfJWpd4Q3AhQmmWHpFjYZuHzLygzsehdqKvhEWy5rVfVEZTHAPzgDMfYnhg2ipw6Qvn",
  "key19": "1vPwnxxJCLNwZa8c8bbevFbZs7owSrZNCiZb5EVWtZcxa3r24PpzKTtZ9oYe4zSPgCBpAC1em6DWbZdDbWAnmTp",
  "key20": "5zX2ohk5gjpyf6ceygYTd6Lab6bXN7mpxEeWj93cZYs3s5NSxVWj5LzgHirYWd4V9gAQXsgLjJiCgQUrh6qzNqTN",
  "key21": "5u6LcHnZcwBnj9UpqyMBMangKrosvkpnvPAwGgRRKuGHtM5AqWtMGxue1p54Vg4EMy6TcEAuCxJZNFcq2vFTiCSc",
  "key22": "5FS2sLgkngyUzdqqwDLUnTwtcUWwbxMpcweH9AHPFqBdkP3Mh2EhMh1URrCavEe5K98SZGVHwyaHbXPypJGJq6Hq",
  "key23": "65TrZsBokbYsZcd2Js8zbr1bXVxaUDgXjK9y65KRcd94bMWcTRu1uEMZp6umR3gMDHq7rfP6egMqXKfkUan9bGKg",
  "key24": "3KfnPPuNRXAfe5hreYJvBwYtfGY8iwxyVnzSPahiRu4vT8ZDyq9FmS1uP8FiS6jtexvNTVSkCsReeUZEv53ZRqPu",
  "key25": "vWwe59HpAn1xWNiGfYj781jMwrCn3rhuusLmxXiU4FQaGzo3V92GAJfpAVtBBPM1JVKMiEqXjB3GCYktN7z4zPS",
  "key26": "5x6VJ9RWQagfvZ1utifX4T5xQ1aUDXoJmzRLrZk3wiRiYtNUV6sqjAZgi3Wgy5ipqRGGaQZARU8ZkvVrxKm59MMG",
  "key27": "5aRz5s9LrFpnWVwXht56uWmmgnzPz3sge5ZvgzHPEs2i2rDvuBkZ9u436PtPEEkMzCNg1SjZ2hZJFfD1Wp9r5ZMh",
  "key28": "28AYv9ydeMvSQ4fySUcvgkY3yjAUSHffJjTLonvB7jPbbo9XLr5gVgq85emfaVXvnUJrHoVQgv6y8wSwApMsdxGA",
  "key29": "3VGc4tJY7GoRH76fx7fmTWbei7AQ9wCcfetf5ZjqVBaGvbbf6bJrwdp2LtQssKSfph8MGMq9DhjfRN82SCmtQFMj",
  "key30": "2m4cwCjMcxK1pdu6tcC2sqdgt2aFhx3iiPLc2Snmi4itpXeeabRciSscrFHks9N7CcSCyrtnhRMsfomKw7eXdaLn",
  "key31": "26DT51hkLChvLbUXujzPoNe97PYknWz5zzYNsYCDxmEHvYq1SxH6C2eCMCoALwCSwvRYXLCGB47PN2fVWiKy6AV5",
  "key32": "3RoApX3F7dMMBSxSSQutvqmDUczmfXmHn8rvDHPUZkNv3Jpfr6Zr9RtQZyfg3sp2DQ9XngZqMVnSeNTEKiuob8Vh",
  "key33": "E8Lk26eyVETw3ZeYEiSnnEPna6appxUyxdcXRSpYwshMaQzMxcc1k2XQ5xBnkuozJXjiznPLwLRsH8QMuL2ufks",
  "key34": "4peZ9cDNQvUV5CifCgvWzMwMncTYytubyfKqgoHwiXRNteWXGHF8dFkNNDppLyM2VNkSv5NyGvC8LUbdJK9QpGbn",
  "key35": "29DYZboa8WNRPjLi5ERCcCFVN6SWqtSdpVrbX7bTD3D6FcfMyEtUsrNMa6Dz1NYh4jf7NKNgQGcLmvH4d6s8VRQ9",
  "key36": "4jZbUKJAtvE5sV2f4EW2XG9tDQtb5qYqUYMW17pt9V2UcSaHRSGfmfL1s6ML3qDNSLuWB2K72o1bmrF1qnpfLbUo",
  "key37": "377Aqi1txG7ry2hYDHgYK2Q9FnipeJJjy9hi8eTVebHicBkbfREZDhjL6X1Ytm9q9itxz7qxgqaX2DhnR8tAZ91",
  "key38": "vKCeDHAFy9J5M3KBrQv4XmfjFNff6mj5rH7LB3fpiCqu76haabPPbKK2rSdn537NYbDQmywvmrayVh9Nw6YC3VF",
  "key39": "5vzxSx2XVruEmReD8K4vp3jLseNnjgj94Gf9RatsZzv2dce3x9HQKz8ctDz8Qm6ozKnC4wLDvzC4RZVuQAfY9RH1",
  "key40": "62t2VLvY5rGzhwVFx7UCjqSNyfqQwFwkncq64jsRvk4a4L448E7fRdFJtzv2soQXowEtZTzYTWem5s9iQNcTTAM9",
  "key41": "CKSvbTbv39bbfqK9xjZ4w3atbbPizpJXvXi3JaM7f68bC7tiiqRA5Babs7xvLGrhcQa6Z2dwh2VpoxmAo6PPxBW",
  "key42": "3EmsgNu3VfYkK6u98DKWUZhoJELZXCBVxGVKyAgwcU942UcYwDKs1iagh382bpZJbAX9xKJFxDNGuPrjuE53k9nh",
  "key43": "4MdhbVoFiamGpLjPwg1DC6CASohHQ6nvWvQXBiH4pRXGUAaFPziNtSm6QZ2EZNXPppNo7GYWh6xFrVsPimenrL2S",
  "key44": "z2g9WMAtrPcy3gwM7DZE4G4nbVXLBUgYghX8ueQMWWv2msLgNQ7qdg3p4vLtCtax9yE9DJ99FED31iYi4rbCByZ",
  "key45": "Yra8Ad5GeoPFF3kcQBkFdTAPFNFr2GRGvSFGoNcuVCHyBxsAvSNAFehcmB2eCU9jJZ2GAd2e3SJpE7agf3Njgt1",
  "key46": "4zXFiX1AFnYVCQFnunvgJiMvFvSAoE7P41ni3HGw1fJj1SY5ri8inkFUxm3dDCgV8GBryhnxdNJL3jtwtwbsC6Sz",
  "key47": "Nusf9EP883Wp13AFRXY65eHbx96WvuxsbVGytSRKixfig3H5eExMeriQwGDwDhhw7BxbFtPafbR7n5e9aZABsPT",
  "key48": "4nSSQot7AW7iMRxxEBQAJWpRp1mmb9HhYvhTPU9cXpw3EDT72zeCSrGUtHNu1n4nWS24Y8nUihUPVehyen4JNNPv"
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
