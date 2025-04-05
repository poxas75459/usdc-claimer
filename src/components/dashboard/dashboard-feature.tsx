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
    "5ctwPMS6Y15yXv6DszmVtyuY8WD3Zzxu7DBsbdgcBvxbc6JbBHmoov6r3NVF5uRxVCEapSak6oCtbdQuueFRkiAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ULMwEpLrQw9C6L4GKRqgzGkLrhvwofkC12EGB2XuRMsdz8s9H747XRZsnzP5DWazSG1X61yv798gWDwky7GVbNN",
  "key1": "5JNjwjDcGjZAzuXNw3KjQCuUa6YUSmMWeWtTbKMcGNiKK2FvJHLiWMM32hsZyBQXJnc21T9m2G3S7GwoA7V2Beav",
  "key2": "36m1Y4PYGBe3DZyWNQCj8JYJtsEBs4Xph1oJxmuxY1R2sty7qpkYX1bG33oTdYxQQYMhpXR2xWQKjuzMnxkjTwnq",
  "key3": "Z6meMGMmuAg1dmM84wyhSkDKxPUCn92vVMr7eyKiS59eHABvncekGGGc3trssXp3WTEs9E2RaBZ2MzM3qihjwQT",
  "key4": "3b6A7CrTd54oapoXGzPF4EbYQ2FYfNfLHt5ntttAcp3TGbTyXe5dL1JxVhJ9zecK9eALDuwGKfEfK35JwBJBJykc",
  "key5": "3ibxmcbzAqdPLoaoifLN5i2PuPujbepH1hxRYEF3xK2G6e5fea5Ce85wPYqap1JvqRBoSXLkuRjbtfhNexNomb2z",
  "key6": "2QpP1XsLfjQWPvRCGwwrNzfHbV2d1yphjj9FJYcK7BxPAnvyBnPxxUtNuqrnr98nXcoNf7HVV4QMF5xzebQe5ab3",
  "key7": "2DdUaTwnitdEt2ARufZQCcPbrAodDSiHoUcG1M2cL5N63N4K1zus1zAefmnFcpbMmJWvtBZEK4JurFgUTEAWFFZD",
  "key8": "BFoPk1MDrAU81E8XNiuzan4bEsvQRssyUzfH2VwDh7xLE7RUHeuYuxfZuHBn4VuLh7dGrcLTrEGmdGPJycyLqFX",
  "key9": "57cQhGq5uNcWh2o6GdYtBU5weDWXzqwYUVLhqPk3kGf9Uap1SKQuXvMCoT2ZrjfSBVj6Dbe9MAKAVuUb4ktea3qG",
  "key10": "2PZ55XZhsfzvmhK3V1napogkUh1N4o1JraQCPwB4tAvdBNofPWf9YGcEC4n1FhwbeUeWf6RSDwAH8yRbdRBMRdEu",
  "key11": "21jEU39WaJupQnTNAEYzaJkok9UDL8qWSuNeqhB5E2WzK8mjnf59EquykykmvHMHPCYt5Y74m3KJcqb6H8pM48s8",
  "key12": "PCL8oxJBm4n2hzvMfB4nMFnLf7BZxgyEaYmRXnRRADifyXqS2zyRvfi488LuCrdiaCFmXJDf6KzJgvn63uJAZHi",
  "key13": "3m3myaciLZppmbp2nxM5w7dbbxZci47z3U7EyjtoDQ2zAJbwyBWh7aYcn14N4chdvLZ4X55WTSvrqEZUHzrHYwwo",
  "key14": "7V2sfw7offP8eXDBeQCAs7BiYRUYetny572HqQJkSQZnmTvkNpGawBeUcESSFhFxTZPNMEaC1q9BEyqq8zkfBsP",
  "key15": "JWvefPr97DGWKacFbKAku6Urkzi4rBRBzz1zk6CiNnQ99DWBbApNoev3vWWLcUpkHyEUi6buHFGzc3zfeYDEAFs",
  "key16": "3Q6cahM3jWakg7LwsGre5z1TvALaFGTaukQ8JT7szHjPsHcPTbMWxVPKXbnRAtH1k1iJs5dSHTZGXwAfRFVmu3qy",
  "key17": "4En4k2SzunDnyFSFZ1a3gLfuS3ryjp3FGQHPVb48pjr6typ79rHxatZasaBZHmFgRmkqvJwUku3cxtnhPm2PuN3T",
  "key18": "37v9wVfjqc5q7VoqTXYtAS4herxRC3poTiAo48gXfQB1mGMnpQxCHFGsZVorXu9Sgm4QYuDNJA1nULwxryU3v2Nh",
  "key19": "43FFdyH5aLYHE4LYedEUu2mpvPQdY8BLFfn98VqjphU4TUA2JsPGTcwtyTNruJDHQGYnh3nBnki8ZLjJ9AjbV2Cn",
  "key20": "2DCbtG9orKDLjZRHdpJ97rWgCwt3ZjqCCk25C2dNAFhhVq3To954FjNcKPdpnXUkEqoXxaJZGjzRLzYjtar6QVYj",
  "key21": "4h1DrmcxKSrdMs2hQzeoxjcQa9uZBN899gJMpLGqjZADZmncxkGx7RzobeybkD8xfifs29Sc33tshRk7JBHbpHWF",
  "key22": "4Wro4itxGd5YpBMt1esrvE68MCkLhePUrmuNRcRgegmrDfyLQmmZYohtck27W86JAp526LN8fFsX6MDP4WMyVccc",
  "key23": "UAPAUT6w7R1467KhCc5As4PB3fdiyQ25BTJ93DrSBaPpoDnj1RCPh2dBnt98KLZuC5W9G26VoxGEGaXfwLem4vQ",
  "key24": "2vsfE4JW8hcPcq5a8JTFNTycaCtzcBzADwLqUewfVdfZah7Vd1H2vhxunt7vG44ojXc2tt6djHvKfkX9hpPQvcXw",
  "key25": "4QxjX5sC9itRu9FN4PQ8X6CY4uw27UAh3JFork3D18Nyt8gy7fcx3NyjYaUPCKh9wpW67xP1ds9dM9qBVGez1Srd",
  "key26": "2FfWNuDCnZjDMj9hradutM5asCpHyuyLpVA19rmR9ktmfnvFZTCt7v4rNGiQbHYxuKgbe1G5y6d2qS5bMJuk1ZG7",
  "key27": "4Nc8QB4Gw9F3kxa72yPt29Ue7CHS6EQRonndwjFCv9ELYYg9ZnjcH2xnZPd1FAbfrMu65Rg7HsuXv53vPxXphgsX",
  "key28": "3x44xZdQCuidr69KpnsYWszvEGDqALCQQyyL2LEETiVGZxThE4vJnn4e2DcvvGaWzv7E5QL55GeVMcSDWRApYhiB",
  "key29": "2tQY5HMpYh5YcQZ4w7BLbH9QgC76BdLugnYZhb5heyvC98kppg1G17xiTNXY8FdBpKj84ZJXiRK6moahysz218Xc",
  "key30": "2mzR98pJygDcGkaiZQ24y8d15jbZhARrcXURQqH8MxiK59XMvU3R3crZd3nn4ta6pgVcsm1i3Xx5nMVZj3Jjt2g8",
  "key31": "2hNqGPs98M9zzzRqre27tWA6r2H1TvfsrMxHeSfPHwXJLr9NEzcEczX7pg4Bi8az8Hg4wV8sJeJ7qe4UgMnMGofQ",
  "key32": "4AEE6WabTSFnqWDNGmuKghW9DcQwCiZdk2tGQZVXkYxrS2k3B2JcjUDjQgsgGUKqygVJ72j5Gv2osZ1LAx3Zat7o",
  "key33": "4rvsGMqrfT9Mo9aEtExdgngktbdHJAzq8AbuvP5roZm2PEyqt4bS1X4Edqh4Yfi8P7rKt6ELvUqsW2AWTZ2SCme",
  "key34": "3aJd3ZxDDs1YEQoGNdXtfqTy8MqdPaxFwVC33BjLJdRcgPHvSjXUD3nPT2QjsTPwKrZUoXgkFFHebFFH7mXVSStx",
  "key35": "2Z3rKzJQdnCfBUK3ShZUUvkg347udgt6PmgzBLHmMpvCCZXwSCca7fsgWKCeW4BYvSJA7cMh8iKW9ZVguuJvjMHr",
  "key36": "5Me6Ur9T7CTx8qiRhtku6v8uKx2dFV6A8x6aMACqn2xb9b5wPTRDuRMuLqyNmB1fqfBBm8NavwPM4gomoC4HoPcF",
  "key37": "TtBJYKStAKDhfNE1cAaVYKoiKBHbfTq8VVe61utYe83CQCA52W1PQ2JnQ52UABLumBCzu8Bauq6gwXJXPqYKrck",
  "key38": "2Hps88zHMzfXt7okZJbsSi8pteXSpdzEcScPAqMx9QKt4EDz5mABA8wyoLicZNKXnZXt43X23v8e3nKtHBkSHdA6",
  "key39": "2scbvmfTyDF2B46c8yFHTNJvxABFyRAbJmoHe8ybvJy4SYPvjUdKXtN1RFpdyaZ9Duy4aDwDKfpcd4sqqFKY5c3N",
  "key40": "4o9enntg7k26WEyYgpQ2qCjdqaEJcVP7G3DQS5Pic374MMPwoqYkgNENHBw293HN5vGq2FbzuH79FHmpxRir3bb3",
  "key41": "HCaX6dz6WBKphjvJaS594QNLBYXHg7hQZ1DtFoT8M7KUsJxp1xWXMyUWoCMQMoLhB178HYjkn2VW313qZ6tTaVr",
  "key42": "2E9Q9nx17X5ntLuKFRhuJkLn11HY4z6SaHgK9xuUaRs3UJ6PejYfqeGJjKaxXmr7jQNEvBBNF4891NwKCNtNpncr",
  "key43": "5gZW9gkKUmj6xbUrD5ZCQMm9Qahp1t3Z6NHNBYXhkNBM3uBCaVsnn2gqUj3RsqZqgLrM1FhVeGiW3gPkgZiYrqfK",
  "key44": "F3b3US9K9XSxBxA23R3Q28CooXzVrYPPj6pTsQ8E8vFZZ5fq6tJ6ExzPVFsAZVVaURMHWbwCLQedhuWS5Fueg7o"
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
