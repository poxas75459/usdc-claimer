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
    "42Sxz6YD6e749sgCFtz8KwMbdqpkXD7S7N4KBAcbMEcnfo1Z7CvMcjhKsZQgDWVptseWCzXiYpbebVV6sv2CRkDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Lf7f7obDHaQqufSVKgncvo421G98h3gt9vSmmXE2DhgNPKZC2TQutSXgL9amJszN8sZhFKcPoBEq1kJfV7vWnQ",
  "key1": "4f84RCWxGAHa2tjJRMGC8XbsQWjv9ygpucQjVeqoAsC4TSz9JitUywzpPpMZCpyKN5Dmqb58wFdZceGicwFLsCtE",
  "key2": "5dijPWJM1bK7wxuggDZgSfEx6nAgeF3N296Vyp857HoXfEBzGpur3ytnv3aNh9Am5dgWNvwKtJtepwwJd1Co1vpU",
  "key3": "2YRURKNaKherBvfEdoZR7XLqd1JhVBGi1LAqJJfovtk7yA6Drv76gQV94ndko7mSEssqTzzDy7Ln56XjSTCqkGpN",
  "key4": "3zNXmBLo7RgWLTmfeXCtggMtovYji33yYnNr5uER6g6Zc5TG8ZX3xuDTWimpAkRnULdnagNVMohdunbsPniHZbHB",
  "key5": "XzNJqzbetqQiBoHaCWovwbmgYFi1RMomcXst27pzX8qV2EEYhcFCAghCpzooRgxrjgPM2ct1jzRiURR5d2gFKsp",
  "key6": "4oY7DJXXihhaZBVCUNmv49ZGgAYHkSPUdFwTiFqaHFCjXMDhBwmxoXieoimEJe4Aip3qDJvKvzv9DKNYGmWxNtEX",
  "key7": "UEpq9SpwHZVSqWz1Bp7CZ61cDXr5thsD3bov5arxNEg6k3vmXDxnUbsa9dzivPsxSYtdBgVeoNsLnSLbxb6Wm1r",
  "key8": "5REZ4SUFgv6gybwLatatUT3i5JbucBYUcEnbV6tbT7Ma2AruQTH9tPRt33EJeTzmmuZDgLtupAdCmTGqN4mKGVhV",
  "key9": "5jJHha7dhjRpaaGWfHLrmUrxvE9a8cydy6ZwdYrbH5BzNhvctGPiAZuz6QSHKE5uanC8shGfzCReQ3B3Fhr4xs1H",
  "key10": "94CtXzfp3GKptX1HyBmpL47hsSp4W9wMr6Wf515Qv6DyYMbtCAzjmE213ZeUVapQ5Y1sRgewJ1wKX2i4fjTsnJz",
  "key11": "4jpEu4PqQ1fCFPDVQjVsuJNZnFkmndvLh4GjYtNDJ3GAYe31JKav1W2ULc4Va6zZzuhhGXevK1anAYzKqPGBztUD",
  "key12": "4t3Wn9ZqEnLag3fETiRRazi6jn16kz7csUaawRKJQF1HtsQdiXGQcQAQ7RQGoUT6pYEH6n3PdPHCw6o5UjF6Kmx2",
  "key13": "4K49WnmAoavdJVmnBWRs2vW2TWeZ2UKDPCC2yckbRQW4dnd7LCkqgJ5zAmiE7tZcR1Pvpo4BKnpkuxmV3Gcsxcvc",
  "key14": "5u9VmUyzxUGY3ucW8nczfBeutPNh56k7qooF4qraRiA49qPkaDUqNgR6pkYCHpP2voQDXQERyPkemvggx5YBJJAL",
  "key15": "2LqdAUF6QgDiCYxbWQkj1g9382cSVFAWSMjUgw1xt98fSg5HerEM5X5zNFFe6ESA3b8B93PQuTMvAh1ykAvYBn8L",
  "key16": "5sMXhnSnxr7fjjJM6RyrQGL2JMLDfWg8aZn8XVsY4fpotcwVCc9oC2BjiwKSSNNjrBmrdgCce9a1MjuAdA2psK15",
  "key17": "4CpXGjuGjPUUbH8SWUSxKbsZXJnCX5joPXNtwQxbo7NcJ6WBdE4QaK8dsQixRX8onvdBnoiYhbGBD4UPoeXkSPdx",
  "key18": "XKUxVYExzNB2GCU34PJ3UGmiZEZha2HNY3XGV5TV7bS8f27CRpGChTCeLrJu7aKdHGaifk2WARr64HugoJEKqV6",
  "key19": "3eqDq5DdzKNULbJCfaRn9g4jNKYoyVF6LCcL1Z7pEKHrNzoN1U6i7vkFkVekHnmaUiRpaSwm8yjMdxuepFuNx6D9",
  "key20": "2mpw6vueoVjtuRtGgCcCTJ6kMfr1vzhtmkGF4thiFqTN1ESaVrKd8ynN6HjD452zDQXoGN1Uag6hpw1pLViKfnaG",
  "key21": "4Mtssvj1eoshS33GHhYc1ZMY8Quj34PLVcarUGxGknTbKynuqH6La8sqQqRiXaRmZEaLMbH2BtxEz23nYeEysqxX",
  "key22": "2h4uzAKgj1j6Buxf5mxKGBnU7XepD8ibeimuwVe5sbrGdnR3VAMJob8rJsZm1T7S3yjZeKXqyXQG34aAX9Qeo1Fh",
  "key23": "3b2gHyicRVzz92c5wc2CBzpwuYTCRJKEZ1vARRgynxAiAtae4T6CKY1JsY5PcWNgfBcyERGyqe74KRbeuqDgciN4",
  "key24": "4PAo3KFwH7sjtV8kpnGv9r3x3Ae9sobxxWs2WBsZchsL2i2vkUXnog4rQyJ3mXLFcUZqhKYwJrZFsaJzzDtjx1Ub",
  "key25": "4Qj2z5yQZAp9wpM2Wdee6ockCPTRnerkWWns3ZctHLbUbLFv246JfkoeZEqoDw842rBgh5U7zK1KgZG4fPJrtdQd",
  "key26": "4Z4HHqpoQuWPVqodqcrkcmxdqPHrwXyrjssxpqhtg9YshrNgj1EoGQLv8aLcDF7Jowd6wiNF5V9TXEqMpDJzvGCJ",
  "key27": "3hZkQ4eMYbjwHG9FNcCoe6QNo5KEnWJSYmHpJfDrpS3wYV4SAX28GAFJzVL59AjZ6NsZ4SkEHDu3PydreSzKPwHy",
  "key28": "5W1CmNpWqP8UaSBjfKNzpsGEN8tAyv2xr29v9HxhegPTRR1KABA6ycPacuJLbY9UbJZGVcpxHHfznpKVLHtTSSz4",
  "key29": "48GJwvjdxksEDGktZ1Q8Bb7dEAjQP3xSRYF8WYBDEBEqagEm6B9hS4NmX66A81K7cNLVAizHk4knoVfWCGcxDbSQ",
  "key30": "4HNbqW64m2qYoVK5XMYwV9WDhZK8jfF3Zq7PKLPbgpRZnCcNdKkpNJW1CyQxmVrfskuw9r7QGYvezt1dY2JVCjHW",
  "key31": "4eGQRWP1xa6kfZdgVZyFGVjd6vhoYPMoZFSwA6de8KAqXWeaTVUGuYD2iCSQy5iKopSj5pqPm6dUiDtodFoEBoYH",
  "key32": "4RDP6oKcjgRDHVFWLK5B84PFNVJGp2eQkQtvpwMNm5mgQ2RZrunSBKTs8QfgZPYESQDgeX2MWynBAyXQCMBFtrRf",
  "key33": "97NM5S9GFeD8fEARnpsEmKb83f3diqXMhkVMVFRFV2v6Jtk6rjAw2gHz5XCgv8wvC1R4DRgtCLD7KJH2u1fSuRK",
  "key34": "2eVKG2XM26q9jgvrxYRh8bUQ9Ka4m1q2TXPbAaGyHfks6D6y6YWu2KK5GMbiCUMskiniMP8fJ8hPJP7KwpYwzDWS",
  "key35": "2zyc9cFD483m5EK6zR7P4duTt3EbBeU6NsEcjYedhYwsNymcA5pRpcD95QKgUcpHBCkf18gKCEZpjnf6G3J2yLj",
  "key36": "5ujo6aSqG9SR5cVTcoyKoPjtGMFmXHBmsCJu6i8eTd6yAxkBcNiBSZZkavU9RMbGizpbot2Ptz7inHTfSegVJfid",
  "key37": "3DbS1QQkLi1anA9tEB1tG8ZtCEwRzgAYcyyM5pBRvvZo8Y9eD3nHGN2PvQyyUTe4VetiV9hTZeNLbHe8eYEUGeVB",
  "key38": "3ptWnsLKuMkviSuTKLBxBqmFwD7XsYUibppu3EfmUYf1XBgLZbuVwns81EQG5cRMy7idCbA33Jnoa6BKP6ZCVXXS",
  "key39": "2HqSVm4TaRf9msbdPp47cbyyBPKWwHbBW6TTtvfMTgE5gtnLPF1yAFeQHKtqMZ6qmrYpvz8pgPs4bq3gSxjwVn9P",
  "key40": "LwRf1JzK8AuRgNPDmuMBj5xo8dJ5Vt1kMhDZvhiaBCDqboxRNiwdXbK3yJJRYTRUpixQzpo2ZwiU7EuJcvikp35",
  "key41": "5ES6LhxgKcaHuso9oUfi6LVboG45yeZ5dqcU4CQdkLB5VBzdFivM8qaXiEDEC9WtQiEeZ8mS3sby7HckoEoVYFPd"
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
