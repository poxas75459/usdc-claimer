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
    "7k6EDaUS8TUoRSdBEaxTbzcFPqMajY5gLhxestcAY9ochTnifL4zAHxWjHzV3bh6p9hnSnvKyk6qv7Cgn9zUqoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHryYgm1cmTPFuDofcbCg87WMZj7DSEFVZV8opK6th798YoEJhpbA4erDFciUXjEE57ipDNkR5mT9C5ZqyYUD6P",
  "key1": "4WXWE573cvuoG66Hp99PG6EriXX4EnnECojc7bcM4tJtV4ZhifDrnqUtQXNERVeHWBDjayegxCr85N9nsJcCXncY",
  "key2": "3YjedNpQaiCW9iP9e4iUYeQH83t1JEKw57JzJKGvZJTM2BTQgDVTBdtbXHyMZ7PD4CC1EdNDBXRw5kpN6ZDF6vPJ",
  "key3": "4U9kHXyDknrNLv5ksM8GAF7D4YxgPNoziiii7yQCRHESKv8WqZ9euLLDyjDB3B4Na5bWSN6dcT4uT3ihuov2kWtx",
  "key4": "3oMzD4qM5MRR8srhRNxDgKcDv3DTsdBnyqmRt5VwNFWDsCCPFvTx1dsHmQy9TNqxc3VnMavHA1tdD4bhPfV8sKBU",
  "key5": "397LNB3AuX8aaCqohzQcmDpVR4kaQSXr5ESYVAPP9iMniVYpWoeiKMSthEhZtwfbSr2dNwkP5mF6tdsY5KJ9DWVg",
  "key6": "3Exy9H9qtAzouYZCN84gnwvscsMAvrwDv46XEAVnRggKE6UnUoa3rSMrA5hgz7rq9kXrJpuTBS28HD11BniYiAv1",
  "key7": "2CczFszjtYn5Fkorow1HFM5njzowvAXUEs2azzfTMUgvFhSKxTmWrZnBEBL2qMfPtNmfNz2La6Mg3ZMn4Xm5qPuG",
  "key8": "3KZcQm29iphfuoNnpc5mLoQ8Ae3PoQ5THooQJSwFjHAncK8QYoWcvy7b56FdS47tZn7AWu8hPz3SDGJrNaKuZ5dd",
  "key9": "5VuJ6Swwrf8R8Kb4HN83G4FhRidK5XBKuGXd6LGNwEMEwCDs9TbgVZqvJjrjj2qBmToQjApFg3GkjsHfWAYAoUMH",
  "key10": "4gLMMA4hKNR6NKMgaAz3oDLDsUvxUqoyWniooZ2dtJaRzvufh5zcBZNpqTZmVsTybwQaqj4ubUkbevuPRG1qMqfH",
  "key11": "2AEpaZCGCs6YjZwvQwUnfyoECdzRnapxqeX714FDc3h1s6ZnGu7kW2hcGugQJzPwJfKULpJxMfFdKRL1Gqzd34WA",
  "key12": "5P7akWqzooNG8WSb4CyEFENz5LTpY4QjoLk7tGRZvU5KtyjUE7zmJgkYbh2XL42HUxoQdiAozdX6P7aBK3sgCycv",
  "key13": "3VNeAARv77QqJt7ogwNumFoEtzYnB7RAUwgn7JdR1uEAsrESffvin2zAXnVLsBwC4xnRg4dyj7qZgZeAbhGWC2D",
  "key14": "KbvSr99asGvxKcUaWL8St9Snid4wxy5EGeBwHNfs5rEetCMVktr8a5yhH8yRSegy8hCpUePuPbd2Bz2X3RXJaPH",
  "key15": "5xmNDjKzX2VrrGSkUiEcaMVMzDSgurJaUYqN88cRLEwMi7xpz24WmBxUR4EqoEsmSBw55eecqUjtYtfcP8aiF2zG",
  "key16": "2wAzmms86kLUG3BVXuiK5FjtY7jDoMpfwAmPjuWxVYSDgP55CqMS4gwkHHsnvchzM74K7z8ECvQo4K8Kw7cDDTMT",
  "key17": "r2BE4C4LQgRKbHrs3XEkTTRqtf4SU3HzndnNCYxVP51APcxyLfEwXdQSaMEGbbbuwwhihFUPBdxsHedoHvs21yS",
  "key18": "29b4jsxouGJgPCnknHjgjK7ZhN3synwUU5Pw1sh9DQ6TGXrqHQCyx8EFZX5wv9CREyX43gXXsDBtpKMaVCRyEUjf",
  "key19": "52F1etwAjNczP4AzaHSGE2ntsYXB3ADtSX5stKd5XUDuzf1H2qMuuGQ9LDE5VB1RPZTWbFXbxy3w8au38rNEg925",
  "key20": "3KTPwtFahTB6b7mGXxUFFr13PQh5DVDCu9yrZEEQVF9rZDYKe1fx4wnuKFm5Gv1YohDZbeSPAWFLAk1NVN6eEtRq",
  "key21": "4kkcXQwbRG2PirE5XkLmMJkSsX93mBR577xFFPX2F8N5FGysi9oZc6uhfB65zoLGhZRRL4Ajn7p62tJyc1UnHK8a",
  "key22": "63edkJyiTVqgqGMgBsXRGtgr8LuLQr8cC5bW35mUmqk14EevQpbarxwgqEcb8Xoy3G81fki4zCfjSMnsaGZoHESz",
  "key23": "3YnPENdBNhQ2J8drzLD61PEsZke8KUa1ZNtFC77h3LbnNFaLxi1Q5ks45wxxKMPjxsfyhH1tctmNTjwWDarim6PH",
  "key24": "2mt8KqcHNm82tqQghTVdFEmnodiQnKKz3ojt5K5WL1kddMcuQEaaMwQBY16B8xoDMA1wbfHVP2MTkySUdVVfbBhm",
  "key25": "4h1pmBtKu5D1G8V3vBeXwZ73TmGtFsJaHmuRKSirwK5verQ5TJX3j15JntSNuDDxqxAGkGHBdWF7sRPPmxhobwmC",
  "key26": "22UQws8NSahgHfHrBizz4gGHzmc6Le5EGdkLEUWcGjUwWANKJLbVyEzRVR79bEjzvCoG9K9wtovm4GqJvsVoJcys",
  "key27": "nQscPEhpTy5HQafX4n42UHyGdU7dvZCENBDe8d3K7jvDCtQLSQB9Vmp2xDjsezgT59bveFo7woSzaXhFhPGdm7o",
  "key28": "31mG4wu5qdN4FMnMXT8BwsFQKtzkRAP8jAfdaPbDyc93qT1bANmWqNZoxYNFcdHQjaP6RoJbtd2ZAxN6dQPLAyeT",
  "key29": "5bZysDu9jYdnJx3Zna7jRdQVqWX7nX6VB8mC55bavyyuSvJoXRffPC6BSuWSu8FBAUSs5xHwBKjzZNZXiqZdXywf",
  "key30": "45ZuxH7YxA86szPzhobmTXMen9k6PYQ3b3Lz9otepowxWki5z6SPvKuHzr1nGu1A5AtLKvGBk2zjhqefHxkTuZND",
  "key31": "3J9GSdhR1SDtB4UHNGDm2628QRG5thG6tAW5SkSEkXpBpikgGowqp1WG92dQEzqZ3h87dtJwtmLWFmdwGRAYpTQF",
  "key32": "oFVWQhjDeMEiSLzgpZ7uE71hEPRRvHvrK4Y6wYHyMvkJFMMYzoPL3izGFzuz6Uucv2WZJxyitXsTb4JWrdfchR6",
  "key33": "3b4RHPG4iZuzSGYAdgjrrfZ47d9aPN26ay4koFMDC63YA1dPJtAqWoyq4AvafLmQFApAprymKpwVzMgtxWXKrkD2",
  "key34": "bg9EbTEVbYU8n3JZSr1YjCH5vLRy65rjiTQGxGAYYd88x8TuvoMrPMtNfHUXdShZ3hp1qaNRYxMVw2X71z5hHvy",
  "key35": "iW6SDtGHM47E48A99vwvm2svkWywXCy1WvGBjDdV3RC7bSTi8zEm9G1A6z6PtoP8PJtMYVnXfcBAPPyiJxFTxuP",
  "key36": "4zxGXEQH3WAih6XS3dubnuYW5U4hJKAZLyynqXcVYVWxQ1knQgJ6JzdRJjpdxh23hGLTUqP6PCKXLj9f2j3UFhYW",
  "key37": "5hk4LPdNw2Kd2djwYdkXtLHe3Ebf1YFa3iBhtuUuwZ997YVwiLgX9CQA4sKGPnTq7u9htPLjfU5gcRRh8PJSjkN4",
  "key38": "2kDE3jA2didgU4s9crk8uLvgrSEKpkNiPqqJtqKqDQxU6FjCm6YXUSQ2QekSmwFm3SF4aaxMjrJ2gf2sTmPAghgE",
  "key39": "2vnaqHqZWKoBGxauadzjYRH5NKnsPvYLX2PxFbdk9GK59rM3ZAMzmWYyGnZwcczHy7F149vG5RwbEVhb2mKJF4GA"
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
