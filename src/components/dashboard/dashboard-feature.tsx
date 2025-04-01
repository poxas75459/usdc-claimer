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
    "47JgQQUpNsrsJ9fy7ejAqD9jr7qpESDKQGJnGWsNEeCvaWRkWbfjGxfw8hD4w2C6kUzo2HCDCmtwMjSeggZdzDwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GWWREdXnm3G9xjQYT7Z9gHCgNQ2XWVKnhe3dFvgRCvNgLGBvSiVdJMQ1Wx41oQnBSUCbrupwPtHWXvQveehYguP",
  "key1": "4TNorkkBWcAr4rAisXthWDgbS8GdkTkHeE5LPc517Ztw2cdBtSttMYd8oq4egDsNxwaacC6qiwmSDth7MtvToGh3",
  "key2": "2XPxBkcpvGLra2uXrviC7KTe4nv7DXo9xAyUAXXtJrkwQKT7yJxvEGSmjA79JVPESKNmoYvdyktRXfa7h1VAtG1V",
  "key3": "36LmtGTVSMDn2c8V1GrNQSKLYrLjJkX7KDyoT7cvnsweyCd9Xwe9gbDcqppbFLtiEjwieK6cSp62yYQ9mavnYhzj",
  "key4": "3YzgZMNQHguGu6mytBaE3DCW4Bxs2f9wPGedeRCcNU7uM15o6VcNQCtA2pNdkoDvzMJgcrH6CsoEztFCcBoneEU5",
  "key5": "4UYRFEv6iYfsqjUfxWaiiwAehWNNFjWh3xeR1qa8Vupy78usorvQRP5iuvmZwyCXLg3TtE9GLQwj7LnHNnsuUsSe",
  "key6": "3Jqm37mS9SpNW8sFb6TWxjFbKcKFjREVbDcKiuqERMKnp6as4tDRww6oCcCg5vmwHYzo5ooMFxACnKwS9d3XoGRq",
  "key7": "ar5qaAumiMU1aA4oEmKPKJNLP4Bcns3aRsuCP6HixMcbwFDyTgspMeSyxHUsJdz8z1f45opskf3bfBL6MHXXqDi",
  "key8": "4XVoHtysLBF6FoS96mtQ1vG9N9riaQR4gFri6bk6ChKkPGziC69CKhd4DaXMJeCcUQhdpnUVQNsFHxHcam8TfcRf",
  "key9": "58xTPNCe6LNhsgFBsgBmy9QiGYPXaJgNLU1B5SLG7RyXdDdnETwPkbMaiL963UHZLoL8vLwcepDwehycFUPL1inR",
  "key10": "5g5txP9dvtsMVuYncGPfUx95WXHrsqXz6Hp9gFdGsK7ezSukuiwqPLzf8yTmNonnu5zisnjWv8QnaABbZEDXMvez",
  "key11": "3UhWmYPpnfUmgkVgSCYmSPibP7cfhxHJmtgGBoBCnf5uNhLmiwU5Y9Ge8ZBDpkpiNEtsbik24uDf8vosN1qU4t4P",
  "key12": "66PAnr6mZdsgEsjgSaEwu39JJSvPQp2LAyC8BWFjPDjRvomhys113ZrW9fNY9UMN2z2Q9H2T3sNzGxCR6wFC6qmP",
  "key13": "xhfWYJVYckqeGDwAXF5TUGvtA5jQM83CYNMtpeykuuKFicFY9xK9wc8irzJ9VDKkw8Z3PCPKdtzGdYcNevQraqS",
  "key14": "Rg8X4azhfZi7QxDqhUxeV4QqoFtqmkEtNz7o6EJQKzduawxEx283niTnu24NCnzyT2ARfBf7QMFe3pBNb5d3wm8",
  "key15": "ZgTXnWn2oAsagAzoCWaPRg26bwPatRVbQVFgnzMb3Nd961BwBNpyG6s7pj4nTojdPxuf55ZSnm9xge4ZxBLUQs6",
  "key16": "4CXLw6Bhepos3XtAL3PHsdpKRZA1dE7JBdWN6nmxczhp86HYoQ7tjFcSqbZFhnZnBr35VRnFgT7SXY247pGpB2UU",
  "key17": "3gCbYfocv6qVYEYw7TuYd8yztLLcQtgZSKDG8YVn7w6zU4Ykc77XJPTqiUX9wiw23Xa3maTF1soyuD2iQHnmes58",
  "key18": "2bkR8NpbADAeSL8QVmnXwAtCZXJ8c3VgjajMxhuGxVxhCG5aWLj2QYjFqik3xK431J4UvC7sN1dBijDiFfS4DQNG",
  "key19": "2B196B2zjnopkoJAd6n3M5gdjNWUJ456JWdgc8tf7qjvgYCAsAtStKcuw5sb1bgfGSCa95Mbr9C9ydcBJw5Eew2j",
  "key20": "47ZKj3GUMBYSKouaLAKmmkBM3f39viQpbE3R9H7rBZTaz4LU8DbuTEaE5k6rBeqGPnBvnmmKQyQb76EiYde15bkm",
  "key21": "414o8vHo2ohA8hPRjoz8jeY1Mcqe9EyunDHPTEuCy3ntc9kiTKeKpKZDQvZh3zJxTHxutTLwrcnwTRH9fmWhywHq",
  "key22": "3FtcrJ33T8fuocr1kFoPDCkQMEXGg9EtVcfW9WxaW9bDsjrVP9dduphf7G65BS6A4GwJxcbDtejqKzasjMDcstqa",
  "key23": "4Q7WqEVEzNP1PYkMnemiGXHUJ6pNga9UrDWHSj3Cr7R4BqgQuvLBRbPLCw1PKGCkXtXGXkPkfS5QDq2Da1nQD6NM",
  "key24": "bLoBY7SCMZXfgtDSoS8Xfusqa9rXt8JHXW3NFtmbaHKJYGBNaoTkL3MCK8QFYk26Bv2xXgCZtMZ4erracWPN43C",
  "key25": "8JaqssEiuhT9e6i8DB2MvnyaxY4j5peC76ebt3FWEghAAyx7dEM1uMaa1dHX8kNozveuUt1erDRETPsg2DNgHjQ",
  "key26": "4kQGseKnXxxDZ8uimGbSwZRk5Le4Za4EfL2yuDU6GBMphcsD3CEb1w8PwwMaoGhfzEHsifhhFHrMuZsP24q6zP9f",
  "key27": "47eHPXCn8SZST3xsq353peWVRQDZjdBVBpqiG9crdvF1stuPWCJQmj7hWzMNe4ukY32VUje8YJJJnPg9TEuSGLK5",
  "key28": "3cb7VKDE7HwHKcFaEjrNKjM9cb4jh2fJgfZApKAb6h8uZkfYz6EJsfBJAUKv5jUtoWsn1xsKpWajoWL3q1EKq7yT",
  "key29": "MsXKMPZhALr2s7j8cU2ioC2CafQ9FJsjAgWrYjJBCDACrfCz9i19pmLeAJSNw6KQKfJmx9SbU1M5PqiqPaeCquJ",
  "key30": "4zeyZqmXKEwqEjcXaJQtAgKCaWLryw4Ar42Cnz9vMPaHK1cxAGwv6TZUjwemi448NRkSjE7zCjRsRegvoCpsWtzu",
  "key31": "Z3XEvqmRZqFA1shQsnbukC7ULXiTC97pggbUC2LMmkzRVze6chM88CJgfVu2MjJRCM1SYrcbHWCa1bvXfCt1ZAS",
  "key32": "5fz5aWMAnjznmHbZec1fXNCGTkHAEDrFxKmsVQm48Vzunt4fFNN19GCkk5or9iApn4C96x5QyHPRmhmSGUKdGqkS",
  "key33": "49KcJZpRpD9MmUEjG81KVowiGDSdvT9uuS5iamHUUfzAsqyegDBm2oWL7uYcfTStBFPy74MzCsaii1urXffua3m8",
  "key34": "2JiCksx7ooZKgHNHx3FEssDCMAbovfmqE9cABRgRUeSGRAryPhMYapkkAB3zsy9GAwRzbE6aTkEmcQj4tXEifEMa",
  "key35": "5TBs2RN7a1PKDXkUbvMGARjAK2tQW3fyzvg8pFu3di4YHLN8DUFTv4SgDAM1abNLL7VtPi89dL15dgUnZTd47AcF",
  "key36": "PKEkvPfs8QL17MezBTUhnx2yJc9dMPkKxzzaSHeopBrQA8zQuMQ4UtWaQsJGEh8febE9Knqzbj6R9Mm4qGMk2Y6"
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
