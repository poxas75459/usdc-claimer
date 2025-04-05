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
    "2hqDbgJyC8e58zZ9WbyMV4UgBw5asCFkj2zsPWbsKLKQYuU34PDhuHGFC5D4xmEUUnWiqvvUdzT32ERjtS8YgXqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZyrZT79wrUJk2ubUFnfy9nomnYAJHoTyMoQpTv9GRM8h7YrP2GgoY1x2nnb7TqDEprmdHGiypGpiLkCnDv9W33s",
  "key1": "WBk8Zn7SLT8JZ8ssRGDambzV3owC7J6pZrqsuZXEx1qYuRup6EAEpUMVSqFUd7bEQYNPRVvExteHRR22oBsx6Ty",
  "key2": "281CJcDFVVTQb7jC9x3LdCtE5GPPCMRkqQe5fbvymPrwk7L7hUwkg5c8wB6fvv5N9kz3donhC3u3gbZswJV2az4P",
  "key3": "2EVbe28s7y3XW2BZ2HU1WS4s1ekAFAEp3TtJN6UjTEcYEm9Z62YuHgGXX2qtzg84eGHJ2swa7iQGmQRFHxxRUEot",
  "key4": "424SMoDHFmFux1jS38BmeM47xGHqgFxhucKYMMFTLmw3uHd8syMGk8ggbstAkDPFxhKGtDPVGspLa6sNw9KKZyB",
  "key5": "2fM5wevVUd3Rp9cwEpYxRUyDVEzA7TiJUEP8yGebMW7oNsTid43h6kq3HRo44zEHvUavJ7MhHu1pVsceKCoJEYCB",
  "key6": "2PWfg4772rze4CFLXxVXN7Ebe8EyJBZbJtU34g3sE5Bb7RXhWDHXjWZoDFozEES54H8pb7w4J3BTZ1Yr85BD4gh",
  "key7": "4JVuMnDcMtxqfiaXHob4GgVwhkFSBiA4LHBtrrhKZDMQBRSrMJ4UzYeQnEjxDzfMcYvuA27WueuFipoDYEv3MrWJ",
  "key8": "43Pk5XSNEHgVkJJcdgnrcnj81YsboQepyyUpg6gxMnkFRmw12V5HVJwTZENhpCcS9sU1rsCrNREbmX62nwBShYh8",
  "key9": "4uBTFAwa4D9dM45GHtGoh2UjUFLfWWCqMDx6XTdjqCz1sb8kXGGv8Ge6N2oorksjvASFaqJqE8cGjhJGksR8LWWP",
  "key10": "43BF7wqd27tghR672y1VPySk2gYNknHLgdLBMr3DPkzjqdBBjpoHoPqG3XCLWjvpG2DTrn6vvEVze1ERyHa3PCYt",
  "key11": "2qtqjpWETDhXyEhTWsbzW1mcQfcc4YdJCHLQDAfs6iWU2ZpkLo6Wrg5mqz7SVGdFGWpkXdVgkSZKSaBxXRB3xrSz",
  "key12": "2HmJZFZsL66Y6MniHerLbEc3h5v1PYhiy3QmEUDrd8YHepUjy4pqXRJ6KmEf72VXXXJUQ426SEz2x3j78XdpC7GJ",
  "key13": "5NbuCNirArh3NySmjVcF9wcmyYojhp6PVGCkofmABHLRMSZXVqGokPWpPkCQhxeXsS6jfqE3QXXb1AAWLBQnd8yk",
  "key14": "2RwbsQAL3GoEczaGftkeRCEB2V5abZNdRkYJdAYxje6kTZmmiseDYda24j5FmFNjAoxsZ7SUvndU3osqBAiiuvX5",
  "key15": "rcda2MER645XPwB3iRiRx9jnYMSRaWVKfPCbVBK1HqVRNUogBRwDwHNC9nLNVGtNs4poXAngHoaDjLBtA4tMyRs",
  "key16": "t1JN7b48ce1ZAr2mCSw8Zc1iWYFfXYBuJ5WJ65NyQStrifiNEzchhYUhoTJ7ExQpqrbaxQxQNDUQLXam1h6igAu",
  "key17": "ZnQghsdMveAzVcqtV3RjGY3yYZxJDsuhhPYHXMqhUb1FdR91SWrkF4FQds46Ne53ksU55hAmV4SvHwSSSTvBkzf",
  "key18": "HpnXYDWqErzvYjVxGf34yoYCvqjvGomidm1UgCUVfZ4DUhFMPEAeanogUZ8C5Vniuyk3qABkHx4VKF45GiYhCAy",
  "key19": "2uje7zaJpSKvPPQVYw3tfhB2FmCbHGrMWucfMgih4FFeE9RxByzpnSBnKLKLfyFe98HPMzU7sPuAffDQkpbW5NSN",
  "key20": "5EtZFd4TJUdZ6SeVzReiUiNsSWmoPz2GpmgBPfEa7PdVeU8agcLQAMJyUfqoZmTdeH9TsdY4XXszs6YKS74ukaGr",
  "key21": "4nfvHH1RKK7LThVpkqsLgkmj3baVd3x5RSusWqySN6qQtbWZSPMpC8rus2aNiBXSWk3BLTxmxdmTmVqkFRxjDbwP",
  "key22": "5ccNoFKEjnQjWNQgsjYfUJAFYptQy9kSk9NiCnBpoBze6cJ586PkRtvgA196RCcRgHLv1jbA4rGAkk4xVNxGNqtZ",
  "key23": "bb9mUThAPhkFLswDz6NqTdWesdCTEtFWHZuqCGoJSceBSrPJt6VnShWERHMEKbTktuM71PzFex673hFh93gk5oD",
  "key24": "3dMLed4CRnXWC9iKq4ZwHnz5voWYNEKKfuE5toZXhhXpjQ9kj13YADXSDHfRDT3uVhaJsd93XNZXBwPgRrJ9fQ36",
  "key25": "3TK9B6BAZA8v4b6M7v6pF93BVb9BZeuKszcFULStDCRibHPjRbZK2Qcx3QwoviArVKMnkjVoCsDKGNvTAfqLAxLe",
  "key26": "3cpPpeMBqudkFkddMvDUfJZMJRbooMLcxgXrvEesgidx3wwTn8rpLoJ9nwKsGRkNrh9LF2CsZnAUaLETgY9Mrk32",
  "key27": "BuUqND8NWwMD58S7A27zg9JMpsgguMVGx9CSzTNjFpB3psgWdXPsqZXiMjPUjZWxrGJEyYFHM7FxNcA3HEzh7FH",
  "key28": "92R9gRTgAzKjqrrri8TU4aLw67CUDmcM9AQAZ6qmGuBVphhKhEChutZ8eWD3B5VTVmoS2V6MMFwmEdHPeR36YFV",
  "key29": "3Am65qBavnpd8wmZRN1evXG6tpuYbBvPJ19GnGMWpYv6WfnvD2GiKcoUVukzxAijQf2BrXkrq7tzvqWfQZ7pe7LX",
  "key30": "cUX42ht312rkM2zhAcZwmUvbbsd6ASi3keZbZmxFXLxxzv3nYZx7KV84WHBKAV6TkbkVBgaeBg8fGZ4fuUiCVbb",
  "key31": "2CHzNYYXeb9LRDqSbJ3tUa5jVPQ8NeCi3KnaMmvxepNir6h3wjnYNWm3yUV3msh5AMexg2PuoK9hhoLGrQhoVoow",
  "key32": "TP2f1TJppqQANr8MLS47iTKc2EB6zrV7AsnVegcDuQuWzxny8fLHCXi9g2jhCj7tzypV42m4GJoHM53gcwTN4bW",
  "key33": "Q47g7sygZfCYtoSBfZdUu12nvpfTruMgGbkoitTs6WNRRv4pJpEbtpAZux3KDWFk3w9eVKoigZDTYvaYCHFrV5T",
  "key34": "4ossr3wcn3MQUBFefb5GUARZ1dzYjdsuV27sYWdxnZaamrgCjNhT2JnmRYEBqAQTG1zJQGLukjkwBH14LPHTrvqG",
  "key35": "2p5gB8EYFCimeBmrrKb7JLvZTHyhUVZHz1vGT7C8DqvtuBffnj9q8ppoFHH2xx8YGMn48A2aze27jJEcvzeXrzzY",
  "key36": "251uwsHuXNpCh152BqPSQ78x3p8cwRV2cBxVyg4xpdriT6AMrqesEt9j7MKMkQW4KtCg3MDHmQeuJGko6nXERCRD",
  "key37": "4fVHNxGVrR4ErjY9kzn4fBbKvgm1zrd4ENnGtz9meXcjmD1zvAAV63ZhCRMFm62wUvhBskEcFNtV2mWUJ8pgpNhp",
  "key38": "2ctYJy72KSLd5SgUkA597n9pbFhiKeFSgeGJXTi22hFLCaG7jqp61PHjvHMfWpS9EMPEpsFPL1Jepp1YbLvhGoYn",
  "key39": "Q9G3UqCU67vPtQocgZbVGqgjLpwFBbbiGcjvhbiJ5YY5LYgLkGs83emmnxxVGb6DDdctzNLXBUA5A1WSKQF5JPL",
  "key40": "29wHVrvcHFVShXCpgxPWWqdJm5mCBffoNDDsBjem8qoNL5qdpkpDEzrL4mWqQZtDjQZk6gsbcj9DN4tZYME1tvYu",
  "key41": "z1wN8dTzfnzVYMJMe6kMs3iThqgcS5wa9j7hkpirhsUgZrDPaVcYZybMz9Q4DX1mTygH9iLpzqDAvhhxWV7PjFG",
  "key42": "34qoGkGnGUai525nwiNFETNDanvSqJkuJ57M5VAesFF1tkDvS4Zt8BTfzkgzjVZUrrUEJCkcu8JbenVvmre5gybr",
  "key43": "3GJpKzfPiJK4zrUyi5s1cS61bqx5ovMPeRd1ShpSScrwD2pcPSEzNKrTGRSMJPsy8VXogQJR2UJZSsTzzYTDS9FB",
  "key44": "2yvcarFVSAiVhdpQfKKPUyZGQaQvbWWDKpLF6ycZVWkMJkyzkkQqg5KAqqmdYzqLi79v4atKRov7zh51X1TwaCQQ",
  "key45": "5rsun5WxXZyzkfooRDH4KHoEHZWMJr1bjp2s8xN9g6c6ubstX38TFGckaxqXgjwsKfTSnTE8MGQH1NoWpR4KCucx",
  "key46": "4zLTFoPCLRK5sjz6wgaLkq2axdmtviSeNWVd7w6BDRB4wuK4NtX5c59BsupU9BRZCWyh7qEdezBfq6edsKPmoGCw",
  "key47": "3dcqXyNT4S5NXae9Yhw4b9o22BfqWrC5EfVLUfEyuydFBoVjKfaHFrWk6o9kXtdsscMR8FXKyBuFPi4TAxUBGjKA"
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
