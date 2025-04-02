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
    "4Hq3VDe1L5uaSAeU1fYs7XAMxU337XTfDmCsHYxFt5WZX9D8rsC8ACmQZES63gBsKcfGaZcMWRehByA87FP9qV9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SKn1ZJcSREKxyWAzCLowzuJbuYwUXoXtdhYBngRtkNAtbFMPhmuSi5jogbKz9EtgVK8hm5DqcB7NDKVgU963khu",
  "key1": "2faLLdUHVQPioYs8R3jZ4PrikehEjm7jXCStpZDvWX7VpQMYZ7ZLUAnS7UuU7f6CarNAnrRt2bngAU7RCcgHLkTK",
  "key2": "3gEdnKQ2EijoJ4TFgENiiva6E7BiGsvNc5DLePvJmwpu2qtphykw379M6h5N8nzAgqzgtzFcRspg4TPHu7pdnU55",
  "key3": "E3ynk5xbCHjiuBPA4p9bGXtXuJRsHHLoDkhG5wVZXHbovaY7SLTw2BTsnK5MrGstWkX8yYdzFdYCboRjWS4AswW",
  "key4": "2uvCuB634aPciD6BwSkPzGjys89VEUNnxV6d7SkNhkwLRKMh1xeQ2qmPqu35izitxEGGgMSmN4TuvLd6SMudYH2g",
  "key5": "5o1njkZZdf4nemgv4fbKv5fe15rAx1nicBKakMZif8tY6SJSAcbxzQMRn12crqAJvPM422HBLc86n8neUHsGKSk8",
  "key6": "wHmhdwrVPPjHoRpEzntEVaWi8PBQUrC12GimxdKgbCLnGw9FHH472eMwakAsS7djLoHwA4nY1KWicbN8oE7N6s3",
  "key7": "22kYsC62up44FvjepKLuYzt1cu9hxni7VaFrQHM7Xcn8R3ExtU6sNvroiUz4HAQJqGCyk931zrfHvKkdybsi7UvZ",
  "key8": "5gwwvXF8mQBHGNnvuU1fJoR9NF8QfCF8yuPv4ZftqGdRZYqMgQ7Favtn1qtdAAXgxo1Lyc8f1jHWHQeFuCb3aRMt",
  "key9": "tYrazUeGzUnFEFDctgahpeTJPEYjbrzSgxK7f1PCg2biBKawuW6hTD2XcZgqy7f32uALMXexFyNwauwfctCaNBT",
  "key10": "4BJvgmmUSLoamYfXna4tVnRHtceP3BE9FqSCNJXmiMGrUraoZYMVB2Sju9EnRVULLiCL4RJrAvgxHHrYLZeNT4HU",
  "key11": "61TXbpkPF2a3tDvK1KREc3Q7MFEUksHHgqbRLhX6C7vDF7b21umCPHsY7n6rfA5HGXJ448ZHLwim3bzpwBMd5VRM",
  "key12": "bL65K9Y7HUhDMjbi6qDF5ECAGhpRzfd8uFt8TrzkitwjrR52KH456h6W35Qtkm5iUquydvsuJrY8taUnyNVe7zo",
  "key13": "NM3FoVHXqEFm8q31BDBe2GL88rPsvCv2ksCMSCeVpskmfsrHwh114NDetzh84fCD6UzH4nGqsdJaKUcQV9njm63",
  "key14": "4Yy6P2SuucDjtcoWdamzPuyTKaTDdSLAbGAS9zAzLBjXyCbhN1DShpxyeFsCJYUWss27QfLK4cPo4avZdZAKG26c",
  "key15": "2awF48weLAw9pp5yaqB3HneYmD44XjTXpERAAFdQh6WPZvCpKeAhps6CTnN7BbcBH8Ck2fcYeKyvAVW3QqtEottP",
  "key16": "3Cq7MNGDswk8f5BCpe3TQAiDtmrsdNnf9reDMxPCsW2frR2NrfKp89A3oLDdip4Uq5Z94v2q6XW7VUkCjEABr6WH",
  "key17": "3ZLeAaxYkVB66zQBDEDGNMbEehjuaq8Tq2SM8UJj3FSqbjWsqW4qNNVu4KLNfzKMTfD6amu7j5zfXemAMSHBrduN",
  "key18": "3RcooWsvgiQ4bYTfGP1DZhvY3B69oDbKzcmuczcNgatQrkoQhVJJxJoSZ2aWa8dNDwgRWxqMw9TCECXhPHvgymPc",
  "key19": "2JQWfwdKiejAo5KmZztNes8rzxQke1sXCkFqNnWZUKbhoBMPtRbiCFckhkoPXJMzYHQKPX6hFvmsbrnR4vGHvj4J",
  "key20": "4zTC7cFiXNbEGj5QRj2wkKuv9qerTTwGuXEHXM3Q3JHpSEb7ChU9VmpsFpqrdsdWstCycofAL5AjNW2ffCk6BjhW",
  "key21": "44dHE4KEyhS1YSkarVWi2EAJiixvRBXnw5gA5CpfjBb2fp7WEmaDUQQkpxK1af9yd9bKxog3gF4fUh9sgcHdFL73",
  "key22": "3r9JkFPX3Jr3mwfBimto8YgqFHXry4798vPfCNX2WAM4rF7NnQkKycwWJe68ch3u72CGxtA6zw9VwJs6RSHHcgrg",
  "key23": "4Hky4KhtxdG1n2M1P2AfiWK7s5eJDuoJLqgbCEqhoVUrLaAuzdAtUdLuk45RCn3KL18DAYXYfXLhrUWSB7yPjAq3",
  "key24": "5AUVD8cMhhqgmSnoKN8vTQhEurEG3rueq2ZvBhe9W5cz7sFx6SGTwc3J7yiGz5JEKLDaCoNPnhor3x5EFGXoAwPN",
  "key25": "3C4ie3ZcyHndAvbzF3Er8YSvRgPiXyvqXA1Xx1V3zknYD1FwyyU6coZQ5PmkZd9eHCNDLiavNut8prrXyFD6Amkv",
  "key26": "4UiY8SktrKYEiSYycK2WGgvm4w1SD8JAe4R6YCBcaaDWwLiyXRkAYxBLh7sssqzKbREufYuHyRAxekrgMtEbYmNj",
  "key27": "3ZXsnchHxzhuYyxnbuiEFB19afLkDDtjuTAUdGDvv9sdNCXaBaRknNWzpThgv5rySNxiJDVDrJjzBm9mNUn5ojXP",
  "key28": "n1PbpMfy6KcCm4sniG1UcViCMBtwBcCkQFXn4KZ3DZQVDi1PNjAxiexFhXZZ3D1KuehKnvjW7EbbtgYEzwgUkSQ",
  "key29": "4FfyNt38YS34fJCtv8B5rGRwZwz4fs6hBKxofdGBL4JSNeSfdPRBpBLJDiGYnc8otezZPBGaf7HVGpHCMGbKoQCg",
  "key30": "4ZxvGXq2NZ4YUjgAxqP7apujLNMvqr6zHMYffRrVRLWdckhFrctPT6p9J7Zww9o4NskQw1NhuCgFMkC3Pyc2yevH",
  "key31": "5UBBCevEG9i8YnV3sK1bJAPZ7PSvKCPQPaeWpTXzsjg17vprFf7HMbMDi37bzoGig1CvM15mdrwde6XXweoBbWTa",
  "key32": "3ZmfcAxYZzTXkRFVYdL5tagozQEtM6W7r39BJzo34VbywLhVn5PyiYHfvx9CtkNGpadgn2fL9JXG3bEzkaHQWMh4",
  "key33": "3LjGrHy2wk1Wvd4osUk8fHaayLGMDrxFXNpup9KyYdxHHTRqPdwPQoWVthsF5Xa2cJ4ub8e1fSadMNjhSeRnvEAW",
  "key34": "3TmxGz3SmMoyQ8n114wSeFeFvuTMZSdGDz9tchUT3Z5WogtZaDBwWyU7qKC87rrEAzRvKGD5Uf7FbM8YAxFUdA6m",
  "key35": "2zumHcE73H5fkBtkaRhYvqotMChUYE7yDonzTnkpKgtVRSJcPwD4pndo4WKbkYzfVQ8M5T5krFMuSCJJUL9FnHj2",
  "key36": "2EpmQ179BjbrS4n2MEHV8bH4De6FWdE1j1Cv1YZ6nApXqWjeHhLF4QYFzb8hJ58VhQLez63iYurnBuydUuxDwuL6",
  "key37": "28K6uWDgTSo7UUxu521ADGzHTwCzjzsEtM3pP7bWoRRGFCPc2JKHTPNyioTjk7aYzZPBC8AipZbFC5WrGb1r5byW",
  "key38": "ZcR3fQtJnSUTLSxqmHFRP3KsVU88LVJgwz6unn91F47dEdvJEBmb9Hm36zmyZi9EQZq4ubq5SnG2qP9rqtmjNWU",
  "key39": "Q1uvBudu7PFi6fybwrSyjJvv2Utnq278R5mtjt5a7bM4XocgyphSQ7q9dw64F1NerSDci7WS47jEc8wQebGhGit",
  "key40": "JxeAFPg3iSz1cdCuLyAvGnTzypxf2xazdGg4tWPXmPWuGXuxWf6oRDjFEnBb9jWYXtwee3CpBrLtQihsmKagEA1",
  "key41": "Ds1LXHFYfVJQM89yZbAXV4NTFmPoXhw5nxzTvHypMk9qhxikBQABvPDudFrCrH84E8cQm6KBzmcyAMJeWdD5X7n"
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
