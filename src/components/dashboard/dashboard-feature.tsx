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
    "5QTDwPLs84ToHZg9uuf5Ue8xpZL6dTNzDJP86oJrWJ181VZFSCBW7DNkzmadQZYMr7FukGKGgkVteGxeEjHkVhHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BDnt6zU2ZjMiuz9CK7i6AVUa71UCbAzyfZPCiWtdeX9fGTtqGwKYv9FzPjhnUdACb3G7UNeRb1VgqGupAB98wNC",
  "key1": "5No7vEwPdVQusf1Bwo7WB8qJMmJYUcVFutbAUHGHMobEqUNUb8qe1faKLvucPJrPzYLparTpvtGnbWzYcF1az8Ru",
  "key2": "jwpsNX1sJyWwPPcKspW6bfREjL3x3DL4knYToUmJw45RHav6UsoeT3Bfq1EX5e8yVT2mdppv2SU1y4yv5pz8U2e",
  "key3": "66rpfxtsbB9rzBncNPbqqY9ZAZmgJYp4nZi6BchWkUbqCcrREdoMtoWodKGZH8ZBisqzMw94iSuLi6pkJb7tdNHZ",
  "key4": "5SUmdW5339t9wyV6KU54ax1wmLwwHRi3h5sEHzWGMKpptDRh9gnKB6wJBrXrgZuBMokynV6UaxHpNtkBcha4vvvC",
  "key5": "2EkyDb99K6trdQY3eMTuQ3RF9xrmazoBMygB9zMz5SFjL7B8AwP2ZkDASzhjjo4eYB54ovso4QNBa5DwYAQAojPq",
  "key6": "Lwcac3Ht6tJdCCbGye35eF3hw45A3fKuPzvnMU5nNPCgQDNwNnGkxUrDioeRMyFwJPnYvP3YYZSqCfuQJY5ZRty",
  "key7": "4cP99vdu7n8nzc3eqnG6VUvQyb9489sy5A39fJW4kmvCS4QyfDkWa8K3LDDDWJ4o8jNHKbJdohq2LtTVLwRRxexc",
  "key8": "2xmEU2TWfE4bouvQgSZ4AGdQetijPqkzPYpi7aoJLgrmYNtVUC6HXS8ETmEKqpmN673qLHy8u9RmNgGq8VgtBLj",
  "key9": "SAPeAorS5Xn1PhWZvAN5kAAvFbJ7x3aAAKn4UdhjvYHDUovGuYF2xRCY6HDhr3NpZDZe8BpaugWipCxgkbSRwKh",
  "key10": "r4eJtuUbB2xiUTexVjL62WTx5Bw9a27FNgmBrKcS6dCrZR7muhhtzxapXezVKu8477XCHXharB2hcjFoCxeqKWB",
  "key11": "xoXLxL5nNfc5KfKNyLbrahiSSQoLZ9i6KxNLJSE9GDLL5z5m7nQPoSsdyEDQp878H4h4GtwMuG6i2fRtxfgn5QE",
  "key12": "4QJA3tGekRrXYahYzVuGiVJXWMhDbHcZTNahzWf4GXQNP6s3JrQ9ZMCCft9NRCqt8hzQDNV3x66ytyoiu3V71bVf",
  "key13": "4FJDrec1kNr5N66ATxCyDGSMULcupMXwGvMD4RdUQrSrK6nx2Lb1epszE9j1ik6b49PDiwwt97BdodSBuLo4QhXE",
  "key14": "2arfUHHx2djDsiynJCZDJcsRRwkksP9jx6djTFhgkaCxkdkTncES4VGwNMRDCFCtgUfGD4h4dT7zpNQfyeiTcgE3",
  "key15": "3hzaxPBouWs4XkUR6riX8sWzScuU5W6fchMivg5PFCUJcGMzzwhqNaxVjUU35oVZebf3vdUoad1pMtfgnuFtUpdZ",
  "key16": "5wYVwR5dFa16qUNxnT7DdSv9h2nw2A9eFhM2wV1mduVi8UUGE27W4QK7fAgyyGrpY4P23xdRTTebehKr5ktmBCUk",
  "key17": "3qaMRFgKXY6iAzCNFDmZ1gCCHvu4bUbY16dy2Kj1vk8Wm9XmjuvTvPbPqMNn9duAmfVPgjqDbW5Vp3AzG6uReGsu",
  "key18": "4TZ5aeJgtv6aYQ4i7uBTNPcvy3kbau5g31ZfAhVodTmpqGNQb7SgrrZXasx7JoMpRNBLjPH1Sp9ytnUyZWbXHSbd",
  "key19": "HdoV8T5NPj4snJaGi81ZSrsJ17vt2dnCJ84BkVFfXR72DU3ssEta7Bm3XzSdHcu2kowjq29T3ii24XcBWdvJZFo",
  "key20": "5PZLpeNkGATjU9CgGQeey6NBwktq4aCcfsifeMbP8MdQYAyZ6QDUyA9ZD5fLhDGry54tagrxgW8qfzEg5URnXqiR",
  "key21": "kHAV1b62eyycLdWJERnRYj3P9pLbXrJMm2nuDPsuGnkQFwVe6XtPFEsBmrepqjgwGKJAuSEECJsvzgotM7vYbXb",
  "key22": "SrSaJrmS3bSD8w6xXwZFFdK63BC7sqpP2JTUvGGSapQy2RwayfME9hgVuy3uN9Zg35fJ7yFee69UAp6cDKWs6MK",
  "key23": "i6hHDxDAfS6s461ad1SShPTFdou3zKdTY9XveMRRhiifhXZzqGjC4TyGhr6Sc79yD7qsyNp1gXipwyE6j6mrkC3",
  "key24": "65RQSufxY85JYvtZrWMGBrK5raUazxjYTHr1eCwMAB6GAaxMxSd5EUQZRT41PuKPVoRDUC8coWaNLffNiGS2EkW4",
  "key25": "2hrVw6qMESzd3WhYtXbSJLuoHuPL4DiZ5QPJnbaHUgFtFdkiyogU7XV2xUg6PuKc2CoWC8UyyjaCAJFxeCvUGxpH",
  "key26": "3wiqe3749cVZ32rn6sFAoAHeoPeoqf1gmMnjH9wVRfF7P8nuj5vovaSimbXDTDNsnFbVUbDWfrVAdkgSYaqBTP5W",
  "key27": "5LeRrZuCPRj7HZYHacYzkfJaSFtdwsPP113GzmbFAT4RwQqgBqbHSCCibXSihdB1k854TAJDmZ8euFRgMhrUEjK6",
  "key28": "4L1JAWnziBbd1dmwdhA64uLU2BrhoZ5aoPXnfifkPpGgGmJGrmuqYximCBa2qZcRyWRnGWLrafvM4iJHsjVrwq4M",
  "key29": "51S3LBMMRg5xHtNev8jsVoGp3RfWppTfcfeqRWytLRPQLBKxjUpdmoGSi76byYjhirWTtAsWqVm1bEGkiHazRdR3",
  "key30": "5syF592Sph6zSoTzt3QRkr8rY71pwoQEy54261HBrxpxp9EwXjuvMCW3SEKAbe34JsBFCLT4Ag9obvVgTqbirVzB",
  "key31": "5MqRQABesXnAPMStie2ciGmdUiaWrGCKKNxyi9asXqixG8ht6dNbRRcPg6UAgqarEVKs6bAPdHH3JM6a4i6J4mqJ",
  "key32": "35t9m7eGqMnzKj47EutFzqKMTtPTnFMgLyuhEphw6wN14nu75tbZBhQLAhyHkAGFukWHhMvhM26uF9DA46QwPSVq",
  "key33": "2xJZm9BRac6i24GQhoQREnkXLRXG5sQZ8MpMhizAuZh4r4foMwonVfnuX46KQx46ighxKxBRKFU5PqcVuVQYAWWc",
  "key34": "5yGeBs6Wo2mq1MZwuENZtKZnCBSu8KfrZWnw4mDXAtdTkZYwrNJd39aPW9bX2WofWf7u2a34n7HDomiZngp2s2o3",
  "key35": "3h2ocDNj6K9p1HpJgajz941dgbqxppx6fdsj1y3nQLRTiZvwdkWiT2RsHJ9qTJdAfXnxsqPEWKpSs7BvhKxDDeTm",
  "key36": "47vcVKFi2rSjM5j8tqF23c6bEFtvS16URxKrwQHLnbxXmRyHxCur6f7hkXCLnpjKm69yLnRQmi9ZPxka5CvuSYoL",
  "key37": "4RrWGj7MLq9QToTbQgAbumWVc8KWuEf6da8hDR2Qky19R85st6yBjP7sagaj6m1cbE34BUJyXz3i5Qka3GhRrSN6",
  "key38": "42npbk9r9YQPSj69hp88iPXvvBH26kA8Xifh6dw4YDqu15A6Ymi1RTABk9HPC4QZiQK5yJrEy2n2n6cBYtAJ6bor",
  "key39": "bvqUhaBpfMS2YuvaTTcP5Cf2SZf4b77Cj3TC4KLQvGiuBpiXnViKjC97mQXp4pVcMvNtiwCnks4BTez1Q79yTxq",
  "key40": "4FM4gV2RGzUx519KyeGmD8DCBxxdd41zwfxRgswn5j7ukKwbnXtmLRq9xABwfuqL7kP5aCUzBBbccSHVJStfukYv",
  "key41": "5cSg5CfCGyvwo7HZxUZ6cPG9YgGaqEFJKG4LWDM6iacfDavaoR5xuoGg9np6n27RvUAYFMrm9zgMccgwGdRb8mDv",
  "key42": "5fA9JcThCgUWSgoNfUNtMxe8h2Eizy2oTYzDCwAndwgZJVq28WSe6qwYcs7CTM5p7Jikkeu8zpdmqmSiz3n2gtr3",
  "key43": "5tmqi5aAVKm3aLS8ejJA6PU6AFwCVDiNsCkCWCdjugyhLvzrg7MHTwA2H41tzbPxq5xHLrfJSHnnmaRdvva2vD2H",
  "key44": "49dmnpYnjsJDu8DwABEDDctyweCfPc4r4DhkM4G3hEJQxpjSrVdwe7BSyEE1YsHHYmzc4F6t5pKV5AwpGZZ192tX",
  "key45": "4Df3boYLPcTFiDY9DdR2vARrSeTAkzSdqRbqUKU4LyFxDuH69xZKUpL2CeE8omqbA1ubDQTyQCftSzXLY5Efyk4P",
  "key46": "2sxdtJGp5TZmTXTnaaVAHtNTj6M7aE9gfBEhPnyXH8GiRpdupwRkXbvTmR1gp4cwEcgZSiF1cwKT94Pj16qGTNE7",
  "key47": "3Nneeg6qYQ2fXYNWjDhtHxLEfMZuLomM6M1WVeywJRJ3mEWKDWWvAQitWtsiXdkUm831SkAzQ9kHuyhvsj2pqnps",
  "key48": "5vSwCAjf2Nn9FRjs3GbsvRcDFH13QHvHUW5QQqRKTNZE4TKqCPE8EwiLgVxoG4DfrLuH6SKtCPi5yQbZCYBago4u"
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
