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
    "2xfhSvhYMfrz4jYSLg2DUDmNkzDPPwg8XAwXHzj1jewTU3ZPE9p3YqUzBhtMNnemJHPa4dqfdrAWhKmWfGjyomUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N82QunTjZwGx6ciD4G8VATx6K3RE194DwnUCWqG1qWcAW2yneemWUMpWtVzkeSTrkxZmxa1PdKJmgK4KKMxQrxb",
  "key1": "4bDU5ubTSybLaN3Xc3CNDuorg8RMoa1nFhhcSfvfUVzRLLFf42up5CGSjzZX8ifzvWJ3iGEAGZ1tF5ftu3QWbHHT",
  "key2": "3Xiq43zrz18nXTvjgMfKmF55Ro7oYAbdjbXdMmrLifc5cXw3BzkkE7DPVd2s6X4WSBcLSqbs8iRz47UHKHcmL9ch",
  "key3": "49gZyfBs9KGQHGE892dF5DwZgkPygJWYLfgVpEScRkFLaK4uVVCUJrTiQTXsebGMuJVCwzL2K5PAvhX2BXsgmEyp",
  "key4": "4yL9njHSbxjVxDtguBYtSUXLekHhrbeVGBfAuLAoLUZj4aQmzycNiRwxqohzStpHju5qAAF233AC6qumPwvyoVwU",
  "key5": "fHcbiUM22mdm9U9idKzDQUJU1kcqC2fyqvEYbHnM9mTGxVPzcjDgMjnttXo2BvYM6LW8iKQQYdwxBQHw7Tmsen4",
  "key6": "4hWaP3hXU5xXStB4DEyzY8Ekz8ucdzj6g1wFSdURxWADFSeYL6s1kEU2ciMHmYRdXbtztdqiZKyKeshnx5h2XhR7",
  "key7": "2hCFQFkAoRimdCx3kKA5deaed4JK7N763qiMTbjfCdszFdaN3qw8RrihmZgE8Rnd5Vc2cdxZmL8ZKT1nDavbP8FG",
  "key8": "4a1PNAa2MreQ8tDnLPXqLpyyNrHHQT1VGc8asyqM5yWrGTrTi2TLyhiy2ds8yyGsQwio1d282EfLuUeyKMR3TbUy",
  "key9": "5xxY7PPVGfbBr1W1snMmGfLDJb6oWFAnJysZRYSr4emXXhHnHofQ2N33CCzWfdzgF5ykFBggk8V5skbQiBJZUD2d",
  "key10": "5oNymLGPZjayp8wPvnrrWNcoGyUecYuo6jWLpt7WfjrnqoDVFB7U9BDN554qy3ZxRDhC46VTBYJgTFBkiG3Nmc49",
  "key11": "3gn6hsmXEN6csC8E4u7uZPUtxJfdWksrw1k1Y6jpMTE7w4NzHMA1zs5T54PrL4PVNme3n8rxmBpZHDKhu34GFAot",
  "key12": "2aGZVdhtCaG3e8m1n1c92Zpc9AZhYeiS7cnuM9rAdKG9SvDbH2jeTKZwQ8oqyKSu3FyHk9Ba7n1hRChBLdRJi8B2",
  "key13": "2QZaDQkwNf5fqxAK6fydgQ2nMf4mJXXGHSaoYSBC5JMUAUJvhNAEY1r1HsmFLMwWvRFFgSZ597SLFjH486RGwmvx",
  "key14": "61B4FHLia2YpBSW7YuvG6t4D2kpCAnM71wtCZ3XB1bmpS5KAA2iYhG2RZvtkRqaCQxhNpV9zu2QsLP6KreoMRaMQ",
  "key15": "5Y8pc27nNxVCZGdexB6gC6LFuy6TV9CUHzdwZ39R7bANZRzCV8Yd92dcTMq3o7qhCvtgqHMkDDrJpK6n9W5RvBJT",
  "key16": "WdYsmrbWJpdUGGGfcDwqJ7G2VpsVvBFt1jpWYFkCXC6SL5ZbHayxhYsbAWvDLkxxe2jh6ZYcjW4u8JYLeJEm7Ux",
  "key17": "2Do9MMSWq6pQMb4VKAegcHZAk5me5a5ZNYc3sE4z3PfsQ35dMqQRwSN55ULTZqnxxkag1QztJqhqKT4pCTRKSjVT",
  "key18": "61vAbQTd4Hh9eDDt3yyjQXE4tDoeohtEH44QzADevC5JsZLyacDSjXskztk11HLj92jENQFWfR3vRAVzNFjpDtSe",
  "key19": "3oqHSLAMncarVZh5YZVpkdfQ2oC8aHz6Zvh2T8U3rtHGX66cSebb7gnxE21n4PRLFc96ov7w9pLPhoPs9xM9ipcT",
  "key20": "3podWNfn1nSg33Lvsjjm6Y2zMEHqptvJNP6yfcnWG2H5v6hAQgRstaU1Pvayzr7qxoM6v95sTUpTmdFpr54GCfwy",
  "key21": "3ZHpz63K1MnDaQqdSRLpmRp1d4TM57XB2jUupNCME4aJU81HMfzAqbvZuvsrRKoHuDYougPAVFb68CT9VtyhWFeg",
  "key22": "3k191Y2h8AXYGHDSzyHvtznVojbuNfGmfDaSK5TUmPVopkvXPFqXcLZRnaH7tezMjUF5NY8WbwtMfWSSdTehdy4g",
  "key23": "4hRcHEbKhXShwpv3VjePVSZjbd3jdsDxJaAMybuydTB3BGnU1CnjHS4HE4jA97P6MbxHnC85q5mxTGXZsJ2jzqgD",
  "key24": "5qRkh8QK367YVTQK9KAWGjAgPRQhyTU4U1bMpZ9i9qcfq7kmsHAq39rActojqcUzXojhNqGer3kXnDHb64f3jHJH",
  "key25": "22iy5TEEkov4tSnwa629GC525T9RJ21WohXWEWn5y12NLvrzDjqn4piz3YDE8mUjiY5KBWRCE9Q7J6bLHkmZUXRX",
  "key26": "3s9dUKieAbCJiawXHXASE2FifdHxhreT4ZbAjwGsE1HUczDP7QX2qFfUJEoaAjkKeFAiB7MhNoq3ce33PYexe86V",
  "key27": "2LEvTH5CyPoKPQEPxP4WvhDcCMxTwuvUMysyao6nruptR3w9WAoTixa5gAjoj3fSvh63Pknyb3wYAiRDDKL8hkVz",
  "key28": "51fijhnG9G2nep16QG69tXz16DwadcD36cyDfqKhBMF6TEPVirx7y1zri2mb8ijReCHJAppDVhEbydQYXLSqLNDo",
  "key29": "jyjvkUdp89ZG6N1zK42FjviYSpcvE6GZ66vzsyjNCdLctwm6ADnB9FfbxeEsK5QG1BUBwhawAUNeEN1AwC9qowF",
  "key30": "5eEkWcE7DJ81sktDQKZPr3EtBheWMiGobK6yFQs8Ts36iUdaZbfDR2JZeL9X2kKfp17t4v6e4ovbe7ucfiqkwgyG",
  "key31": "3DihPZCS37J9AfXVG4ocK757u1hxbbNDgY7Ac2w4e1jdijZ9dvjADGHxfAUtYzK5M9vVETpAdzgqbugAby45iXke",
  "key32": "2UE5J33qXGvFXfrh47axjZu7KSYS4h8i1oJPaHaNXFjwuNC6iEUhiJh1oW4UZJoK2iDsiosX5U1QkxkmMzJRDLWj",
  "key33": "5GbXypP4NyphV3YKniDK6tFUPfjs8LrCbfBjEkiewHiNXmDXQMzBkoL6nDspjxTGtKVpjjuwhVdbLDcUxqbYyypY",
  "key34": "2sHvmrnt27ALZGTcVVzpidSLehojWpYUXiadxUDFHpcPC6LygUatF4nZM5UH5qi2ZbnQQpmUbNjRQ2oCqTaczbEg",
  "key35": "3mDxNQbgfeAx6U9FFHSdVjEoFv6AAHDMFS8qWQiNzQiTgrqLDU5NjyehLoArURSNx8M7RZR9HYJJXBMJ6ruUQJNr",
  "key36": "64s531kxk926D9hj5Kh4ZCeHF9TeRbNGwmsqyucL4FBKccSHbBfo8HcVdcVRCHBiQJG8jy855LqujRohvfjyTR1e",
  "key37": "64PDuSfqtE2TYKHRuQcSgcpmV2yZB26zfTjFBajhvN7jriGa1ESkhUYeXpTvY5wfYQxeV3kyQP9bSNuec4FT3pZq",
  "key38": "3SV4wNy5vUqDHkhE8Y1hQHQ2Mjkx7kUjkJvfF8x2qapz7RHowmDyLXr5rZdMCiVd2SkPsRUaps8y2tPdRb3g1h3v",
  "key39": "4sdtjQAVHRTuEm8NsXcEh8d7L1eVQjU9RsRvxy6K3cMx2FjLEaKsm7RTTA2JQkYDUN5CmAGYYD4zyvGHU5YSBcbW",
  "key40": "4B9apUhJwVEC6h34evRTjhF2YjhzFPeknhiKGx83dixPTX3xSoVcA6QEULf3aFX1ewvWi84qGpaQhM44qqE68n7Q",
  "key41": "3MrwKhjTonxbLEMMj6EGDYfUQXM8CXVy9xzqWogGxNM8BwVcjChmLcZ9HCKS6A5N8P42roA5QYBqX9TNzpUsZsFr",
  "key42": "34LfFVVnKiWXhCKzT5twdBhEW4TFqBqxYXN8gr4rXe7zsLzVrQZ7ps9azLnEnTd3dbYFELMqw8EyH7harFyQxqVa",
  "key43": "5EPLVwt1LSPSd9xs3eQwpoh7TbB1ejxHJrSywLkbRCXM2YyiQksvWv1DrH9EEGXhTey2aYK629GsCzX4ZgafP4k2",
  "key44": "5xHkm8ZyRVJETqegR17RZLCJjPKkbS913ChyXAgaxifSQe12eJBE5LRuK1G25dsnAXMUZffyzdmvvEhJcC9x17Uw",
  "key45": "3ochB81fjKvRgfkMTHr8N269TRN42Pj86trNerSk81B6aK81VTk2spBxQJEsXvNVwCakkAKUZxpCRGXAThBDdwxc",
  "key46": "5sQQhR53miZ4jeZdG4Ad1xck3yrGatiChxNt2qjztrRxWCyVZMn8z6Gtv4DQgfP2sJ8mHf1F61Z6QS7XL8DA44yg"
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
