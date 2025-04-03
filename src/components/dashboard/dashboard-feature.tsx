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
    "2t44fNwFaYUrzgexhnua6Rg5zPijw482n7zZngL2zJ68ftc89BQywRMP8DD9GYBAZ5xM8PpbKapeTA6AVT52aHMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M31twvaJ87PdVcw4EERn5rafYz9YaWX5h7Yzc8hffEBnTcv4tEepRv2y813KZYApc2cPzDUgeQ9yAvsBE519hue",
  "key1": "3rkRRZ96czkiEekonYRgSffyGYApxmmJVDs7GqxaR7Je5vPQ2qdH5zoi7vBckyapq6kzieJyVE5SJzHU25DNGrFf",
  "key2": "QxXnCXwXUgVYuAk9xA2W9Q2wUZTx1M1eCK4qKiJ9owkfs9u2EiWyEw9SApSD8c2LzugTw5wKuFCckjgzxHXLzKi",
  "key3": "2ZUdQ5XUtf5xqcNGW8d27knFWEPAy3jBeohKbPLFyoisCWLTLNXZBLpizzZDGxSbH2yqpQRTJ52F3rkmwQTKVARW",
  "key4": "4WGnMjxV4dbjkpB1kruLoqC6EFFcX2hYgyRUUae1saS2APZ7bvwzQNHd2uckVg7SoxPvR3sbU54BdMEQbaXNwRYT",
  "key5": "5UH6Di4vimpyWZYVUPVYfkdumacczFDMrBfVusagVbotNCznXRyf9QAFZFUqFGXGU4Zy9R7qFjuPQcmgDFHT7q4S",
  "key6": "4XNQrJKqMF85eWToiQwHGeiuEaGQXL53ifu6jNVWeHx4ovTZFz2rQvmP4Ub1PJ1GkNtptfioorLfDE37F1ucmPkx",
  "key7": "5Y8gQpoAPqBp6Yii3b9ooE7oMLHRcoB92ZAwdo27Up3SHeJZMaTV8wy9Qs4oYQCxEDLn1wwJeqRwBCWcFs3eQBae",
  "key8": "31yhemW2x3gLdM3P1SxEXsanS4qqTYFPFUtMEsskUMTC12fyYRNaouwqXbiaNZKX78asrB9qNpM7gka9Kh5p99DC",
  "key9": "2ed8bJDduyrSq5e2Amo1jes7Mdf1NPLV5YZEWnGMfjmK3dfPyFM1xV6f3Qh8Fjir8z9Kby4x72XP5cw3zTmYgGoe",
  "key10": "NcoGVaWqGh7tVaN6PFHyYpZy8jBYUTgr6XEDxuKzQCW1GrnkBDxG21ttvGPA1wkp5rXZcv4mWP2gGXxA9hUNKW3",
  "key11": "29zTPjh8GJnyeFyqLvJrcw4pXZSwbw4tAg6WByRNxKsDZkGNS6SvqJfDuKn1ak2ranrxT1kjo89xkUodjJVt3UPi",
  "key12": "4psdAPPrsWCnRjTCQTkmmiY8Dn8nnoQLfMqvddjbeDaduSPizGvupHAccVxZVr9LjNUJj2HSh1ZjZm7fuWYV2WcX",
  "key13": "4dkLHRE7bTcaNp4huV32mgdV7Kxo9CbjLquaM6phqwHiJbZU7UMEUsUnwj4tngzT4k8DtBmvBjzLdy5pfC3s6udg",
  "key14": "5AcvfWCv88LBGrV7vn5grVqd88Hxc29UzBvodXE3DET8JJMjhxWN8xKu1cABYYPfAJPyL7p9oKaqtZ1jymGK3k3x",
  "key15": "4qCXdWfxgXqp7MZfjfAh1Lt5RCRBXUj8PUiJYfipsjC1mA8gzjRN7E3XEeqNdjRXTeKq72hoZzyXSzUfrsGS48kC",
  "key16": "CeBTyTkk3XHi2VrCcaDDKKzfLVurFGeCU6sTYM9aLFDTiuNuvogX36KT5S12fdNMMKcYL5PSxqchJgj1a5MFwAV",
  "key17": "2CcHmj6ybnE8SL8MaWmW6kPxkXvKhnCvioshseffBhkYAPYwkQwCM6fBcbrf2hhp8ZdDXHMEuwEC7ix4n29pYSUC",
  "key18": "2ogGjuLheNzyk2eedVZZ5NuJE2w9u4e5fp3oZULDbWyWPDJsqPzNskaqr35feRb3K6zHQiouUMidnBkZhMHUV2hX",
  "key19": "4VLLcxHcejy9TCmkwdgfnqwCNDSSbH993maLv5b6rRdnHKaChnbEN4L2Yh8SgU3aDb8Y8EZbUJsUnvAEsiMHaMDt",
  "key20": "BEi7C6hMTQxscGqjWmGsyVWb5NvmUhs8Zg7ahEj47sMYi182JPhpewwb1xreHBnCbA9YZAq9KubQTYzXe7br7vY",
  "key21": "5x2WJjL2osYcH5becBXzuewL9QgtmTqaktkppEJEsJayuGukp5pF5MA1qPcoYrj8UYpZTvUdSJjNuE4btdLSAYqe",
  "key22": "5ZV2Mj5o9r1kEUZ2BoF5yygvPr8Fyi1oL8eFWqR1jB5hnuTCiPtbXRw8XeL84iBD1Nso9H1saLopaszbLk8hPDvy",
  "key23": "25DTuryF7ViCWBjoEGvPv6fqZNxxWuhz5Py8siXYuhuLLGu6N3ozXWfk22z7PDqyZ5i79TNKs4d4PxYDtDJNmpf4",
  "key24": "5G7sNLZ5oYM3PrBfC72euU96LJ1AJr1LuFoQ7du7C4tPvcXFnTnT7LL9icxRNdSrGhQ83JU9nuWc9q9tgr6ScFWG",
  "key25": "63ZDKuAM5sCut4y3WxEH8EWptGuA9RBqe8tAGgNEA537venMxTg7tc9qivohMQpVw5SXSpLEtRCh6VKBpNakj2dE",
  "key26": "43bkorSLhRkRdrBMP3TZPkKKSU3V82bvfCqj9xjHvhpsrcwYD1YYy4CKsadH9DHHzDURckMF3KU9a1yVMCwnCDNL",
  "key27": "4yTU1yn4MXvji1FPbh6RhyTKfwhJntdjRBrWtboU6tETKCtvX3iEnGaxUHsCpzbTyQNS1tjYJzDmiMC7mgJoF5iD",
  "key28": "2XQ2poYV3P8HMyLqwcncgy5vvJWW4XB4mi2ZQi39mfNPVNDNvCKYXnhqx6kkn1V4RX6kho7wSN63fNt5qKPD26Rt",
  "key29": "JCtCj6xx7SEAjNDEgYgtsid3qVMGD7imXAfCfpBnjSZ5s2iXCZw5kSdMJiuPkCjKaRwLogirHo9AqY9nrmWjW86",
  "key30": "2tVzEKBe8e6C6EHAnXJurX88VkdhCD7ZeqDET9JzSucdrxo6piGL4KzUEkNaKEM9tMPxEcCvej9pKAGgo9RpNi12",
  "key31": "2M2VqTgkT6MPRtKyEfTwT33tYYZvGJWSEsAdBN32yFknb8hk3gYZ48XfBiAEwGEizCyo4MjhyRYR5WMidX9e4q1A",
  "key32": "5wiRDwo6XgEAB1sAPGn8ZYEvaF7PJePYa84HuHeBSqkoiM7fXnzTKRfUf6ocjh6kBAH892rZQ9BQstWYWUZ8rTWm",
  "key33": "U9AMftxxsag8GnxdVcv47MbxoYUfHEqKLJfQB7eGY7Xtw6Wkm7owQe6ApJSwTKwBT29WueP42y94dLNA8D4NDLG",
  "key34": "3tSet6akoDaJXqG23SAyV18Lo3MauvXPDMHMitpgM6cG2n117LhHnLi4FawDNfboc65u4qx7CzUMr8mx5GYYKBgU",
  "key35": "5aD1z2Qgkwr2upiJigj8p1uJeYwBzjuKq5NkPxicHyuXeCVfQWK5dkGzrddUVKaYtzYg3wPxfP7qA1WspKjr1Pwm",
  "key36": "4ijrBnyBY5vEmeY2Bn3zLWf5EhK2F9eZqifioJrNEa3vPhpNEWAsz6aT925E4mgFknRQsP6BcQDzYmgAFdC9kJvb",
  "key37": "5mqQxJiX7WyLbVXCkpNndRL3JJU88PM4GmJd78BtNqPpPY46qr5nf5xzgEodQGaLgmaq21EyaB8nBoABseCCc7hS",
  "key38": "4Wio6QZ6CBRBXNyc6kvauuDh3kFdHsRTUQFqWaSqCAZWoZCoQRrQ7LpcoULTNsLqbEpgPxbjGSsrXJh8NwNKXzWF",
  "key39": "4QpxEPocKYyLc6CB79CDcrhfsNnMwMVPHnazhcXiD7UeXktmqDscxVFBFchVVf2qH9Uu38WNmEY4bu33jWmKhomv",
  "key40": "2sQXRZLnceeP4XCYHDi65Smcp1xYmDAzfm7fWiLt2gV6T9xxFJhY41uKeKciScXxXMa2AmMmRnKXy46ZMYTupxpC",
  "key41": "DoUi9bWNsCZGnJyb2Zza8d2KUFJUkt4hJjy6J1awHRpTWzoXkuGMGzkyYfVB69K6VEH1KDKDGviBusmJpFo5mrj",
  "key42": "4jY1sa97g4kCAiQaY8RCggzRZGG7JauWMkLg1dJXD197mfgCCp1wRb1jQNAhuV4khUqyeUx3rDWFRpd5YCnER44o",
  "key43": "5fEcfi6vs5mC3HRhdTsNwuXsh791Ph2RQHnxYDymZrY4K7cCxyGSF2ih9M8rq2e3zpggpfWQpgYCdwDTxrXq8UTr",
  "key44": "5Lqj9ioQqgDWkG92UUogqHVhLMSpK419CE5oEfxDEThDkc7m7PMsAV7JRpScHigEHRTJ3q7WV9tXy9rTMMAKNsR2",
  "key45": "54jf2JRpoRaeC4uB8dAA15wfiuahCq2wPGZ9GhHNvHh2jikXhx58uovC8qrnPwo6x3S7AWouRKVz2XzMdjF5wVCA",
  "key46": "26bTxX4PqfbGY5SvfwrostuYmMAZJu3iBwH3PLSminAtnpbnTP5Q8FtizSrmZWbcWjxUdr3mbnkT329ofX9UGy7Q",
  "key47": "38sVgXd5if7RohwbEa9BEuvH6eCQfvDPt7a2qyPj2w84ycgY3Vrh6geG1osivdJYzXLbi32U6g67CmfYwhYPVkkU",
  "key48": "4Puium5U8ppQoKNSi7PJN4oHqzRddrx4jZL5m65bzYc9xmCYixrJpNMPtqpbu2Rfynzn3M1QPG68sYbpK5ae7xrL",
  "key49": "xEWaNsVNQZumb2g4XXs7u9fDFLi6uUzC7hJY9LMGHuFrU1MUoZUBBnv3LvGZtCRaQAgEkt34Pn4uj5Fhn9AgYc2"
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
