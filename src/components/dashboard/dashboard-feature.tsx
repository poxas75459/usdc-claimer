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
    "4GaWHVjh629gYsQUKpakJM56vevK5TzdLfqXTH11v65a7xgavNUDDbuc3nkws3kfQDRfgbEcQ9fHATBzUiCG563e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jBbKYAgotup9e9bBCnUduHC1cRMVxTBsFgNA39bHpDZEZFTSDuoqz1YMxBufu2oW5uUP5UqmCdUL4gMeGbmCde6",
  "key1": "5CBAX9FoQHaeMMSXykbvCRFiHy7qmA69iPnLgHdUAqqB7wXuRfihfGhghcDCrY7tvPxMGzy18rE343nH52Y4soPf",
  "key2": "25842dJogwLbH4jYZEfZJYjc9cB4s3VCMYb8TLA6GZS4w39AyjZodmN3SqrTihERT2LiSAno9fCWeYWEcXjsEuMU",
  "key3": "3zWoxAWPLpmtN14EAqECCzPU5fEgWGo7C4oWQi8eSsor87VjUPZtKiCucHgxRXBVJTigaHmh2ZYMREmwreUCEdM7",
  "key4": "2v26iWRpfQjPFbpi41idZef1JeCgfhEPq3tq8vvPhYPT4dwp2R1tiGSG4GHJUWfBD2n9WT71x99oACcjoGpvH6Fo",
  "key5": "4ZZ6rUnmGmYBfXD8TikQwCDgqu5dn8xKLAf4uqwrWFRrTmeR6urHNJP1Kt9ztfZBiQSsPNsXXW222QsW9CNwkr3u",
  "key6": "3pVooe7QcSbVsm44GSYpv2U4LFznZPjPQViuQM94MyeH4ZnECxqVSskEL7rAYQGXE4bBzT9KxBVQics6zW7JZvCo",
  "key7": "4KLe3yG3tT69JrpV4EnDQ56WRGP6L1CGRTV4zWNeZfYb4Pqi1smbo1qq5EdCWv1nNiudFgNDM79AXTPtBviSs6Rp",
  "key8": "42FNYBt6Q7aswKXyZpsoDD7zC9R6fuW54S633nk4mrWVCYeLMhr1KdCAyAuM8CwLba4o3s8g8FrWDmqaj9wT1xCu",
  "key9": "3YLDdhoAtErGKj9PqVTuJZqYuATEyk2w6nBrsby8Lu5sDNVKPAthtrhzwhThoNhjYZAj9snA1qo3hvQ4PwWvhswH",
  "key10": "5qXyuyvEMudWP19BXU5CsW2jMNqe3ezBN1wk2Atga9WKNjTz3BmoinuAk2R79eBL4y5bDMm3J54iHJ4jY2C714VN",
  "key11": "5sobGU8KJZXhgxmoGVrifUybPJENEdzJFECBdC9sUXhA8UbVRvi2SzeHZUeSLndaQ9ZXYPZMTtEhDLGW1qiMusua",
  "key12": "4vcfe8JPZSvbo2f3pePW79L6B1eqZQybMrijfq2g7GoCme86Vg1TYYzTasmpDwvJagVQAGNwgSRf5gQzN8V6L7i5",
  "key13": "5CeKFAfjFYwjU8wHv8sg4QoGZgy5YWp5HAn5gA1vAfCzB8aYvUtRwB3CDaXTK9VaFHZao49jsu7vgkmw376c7Gis",
  "key14": "3cN7Yc2szutGcjWV42QrYYXuckxPhcSR6grUzrFGu3dy1ZtMyuCB51DtM9bpb4civUQmBt7hjnM3rb4gxPsYUKfq",
  "key15": "3MZYX6aWTpRYqEoZ4D9eEjTisSVWVo8G9yS1fr3B8fpDRRoK7PxexZPM4Nr3SomaZTd9tjf4KmXDw49FpLBaQGSf",
  "key16": "5UX6yPXvBPfYC5mkorzdjcntWpAUhGFoiJyUNT6giBs23EoSiVfb62NAvmnNXdSJcQ2eo14xmNSG5Vd9wanFQxoP",
  "key17": "44qEdu1uHcFUouNcpL2eLZVrnMpu6oafzqKAwYUrQCDiZKoNmd1xoTDEbv2mUssL8ZzDHBfz9CkYobkpjWiWgTEr",
  "key18": "3mk7TeY8mSnHb4UxFdA9ASjd6Yf1eXa9UMKvzhsN9DrCWxbn7YMBN8W25vAuzZntgrYYKXMgHudGNx8XwEW56SoV",
  "key19": "5XumqsSffQZk7CZYoWG7J2FJ7d1wwoorkLmbJw4STWpLyvyKhj2zBfitekKZ9vagchp8anEYQBuKG8XqZgidryDL",
  "key20": "2WaV4t82GRxT18z6K1MpaNHxGspk8CtMqB8XcoLvADAGNYEqUn8BVjSFFFQFeK4TRCY1rs5czay6K4cHe2R77WKE",
  "key21": "5s6ZRXEzU5AfrExPxKGsGzgSWySBnMxX8TwxVfR4qk36gKwxnDz35mZvdjFkzSvUCMVCSCbYbgyAQ8bFcad3Rb4E",
  "key22": "2V1qkKDokmphetHWCxKWgJV3AjiNRWUCgFaxLGUtJB3oqmT4Gpv1hNS3t1rY5bg387pno7tt3ceZSj5sC16AD1QF",
  "key23": "3MobGRRbVacvsGZ4KYVjrLYjDE3wMD2dNwiJWg4gkrqCRxVXYDeHeZt3WagewisRgPeELW5ZRtyAunxqYf6EBEFw",
  "key24": "67L5NG4WjBFCNVhZHAXzqw6NVsfN377eFiSRoydjCbVoJHviq69vH1tk6Hef5kDdwy8emRC8AQxUPBgb1vwSCKtq",
  "key25": "ryWsdCSUji6hJVdo6DaASaXwa8KWqbWwFbtXFXhQPsowp4cGEW9v7J2V582kUnwrQyvnT8RFbcgMU39SLwcHNqp",
  "key26": "24QEBmDPkfG3k7kBNkqCM1UBCswUesw72qK34QymTBVJht3St4fuR9qvVe46XkLEYowfcmTekuVrTDkKtjTUQGAj",
  "key27": "3Zw7GgxxJUfsYJUGghTPC2gtG61NcRg2F5wT6g2fLSJiriRsyuCqfs6RmDXL8UJEYLQ9kY25NYP8ZxcmhsivJsCk",
  "key28": "4Bjy7HLfHD2FTDKG1jsLtmg5fkcSEXqiCAK73jBPok2tmQeTtavZzHPFFFZetLVv8JobAwaoby5ZE4fu649yesm1",
  "key29": "5oYoxcpeaE9BEyLkgXZitrtsu1eZF65t3fTaUzFn9x2Y4U3thUUHxAwiKzHNxe9y9eeiJNgynM9J3xnbmevqUyMP",
  "key30": "63FezyE94D5hnY359PECtDdhysBMi2VN11ExMYojvYhPtuSikhJjJhBdc1BUoqrquMm3wCdBMnxHSmDcbvUuViF4",
  "key31": "4oKz2hrW8VwjM7pmJWUQ6KadriCfJpv63Yc6XuDTFZUvZFBFrp53ZQCFNS3TKHrueU7VzghVYwHzZ22ND7Zn44N8",
  "key32": "rJdYeMZJVDDPkgkPpNMuL78AttWAznhwp7R9JzfAYsQCwaEyV7MfbBNdRg4ebDRGZvBverCzgvqejZg2oJNR8JQ",
  "key33": "53Xb8NZE67nfiurjRoQUJvdqj21C7m8jwNmYbavbQjkpqa3XvFMm4KbTAkXkCi2e4xPPoYVaem5B1yExyVnNDzRp",
  "key34": "24LXwSAvF7Qah6V8qgtbjYvNaTKT6rgY4QDgWxjBV7YzRgPYKGswjRnV9o9ZK2ZfFGAuNnTVzCan2WhsBv8LGfCo",
  "key35": "2fDRomsdt1sVqCMR5MWdY8shhzZCAisxrVPFJweW4eTf5MLZwCQuyYpEY6b5fqyCG7C4y7JpWadYswRzEJiS4d9K",
  "key36": "4XnMJZqGnwowf9p65W2HGujHKopGBHUJ73rRQAUUSdwTTULgE3ZbXVdxPgEfWWPoUgcdwX2ni9fV6znk9AwSsAWs",
  "key37": "3eo4ik29DHQZcG43ds6SRnmhNkRTGVzrn5hoxY81wu9wbqC6VhEudihFgP5Hvif7EHsa1rPdf9sax8vRHk7tS23e",
  "key38": "zTBB98ycPEQWet4cKDPL9s3yQTduyAGiwxfSz3HdstqSW7V5C6fb3N431bgb2NSFsSXUdVRnLT3aTjKXWAKQks5",
  "key39": "4ZFjLAh9HvTGPymMdbcy8eRar48zq1kN1GVHNeUVfEoUShJd2JWFtss8XeyFP3JZc7HCW4A1NBcZj7B6fn4gx2Lz",
  "key40": "66BWbSAtgHRSKT9CSQiRApGi9nYu46W3zWnBirkQ2vTCRoU3ug7PeQUYpdfVfNA7MKrJJ4RE76Gd2HqRkxVLPqsd",
  "key41": "5apQmxbhYhGmWpPjZcW8aWeSxWPdTA3rVRKBzBoVkxupUiQefKUYzaG8muQ3Ch8zqgFNa3FeJrhPDfdj741KVpQZ",
  "key42": "3mPoLpX5o9imPm2dsGBoomUgdo1QafavR1PVsrf6x1uGicd4qy6KY7ayDZR3MZpxp9CBj1TAAmMdnwF6DBMwYho6",
  "key43": "4W2ENYgupUBnVwRUd9M1EqVFfurTYgcefCLEsqBBcrTaJctNL9mGhgusETrioRuxycZE95BXuLBhb2Ahkze45C8r",
  "key44": "65cWwBhpcF53uGoWuNYeQuaXWznk2J6VuKQturf9PmmYTR2dZXvvwec87cnLModPNTC8oib1FcS4aiK28Tn4BsE9",
  "key45": "4qU3XMtxBgfePqwZa7A3Ln7vTnr3eamZKJYd35cdng1UVLHmijaAfKvmxyJxrDEKyuB4xcjMBKSiGxNY8kRW8WNc",
  "key46": "4Rm9xswF6Ef6nqPBtdUjHfdb1VyaKcfwkPy1QXwr7CjPSMc1vtuS4hZWgLb4vo5aiMNuNbt9jF3xNdvswEGj7Mtv",
  "key47": "5vGYn8XKUN2qCwxs7t2sWsoq6NDGFCQsG6i87r3Fh7Ff4zZG7xqEax57dyfG2qKEFMeKKAMdCs8P53FLTQKMuJMQ",
  "key48": "4rmyfymv8bELPv2Q2deQrz64X8k5xncDkWQ3WY1tqBvku6HMTz3GEwsve8LPKShwvv9qbU8F1aRej71PZe9rWtSv"
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
