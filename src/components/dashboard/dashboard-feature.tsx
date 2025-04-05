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
    "5jH6V7XBVTpYcVZP8TDs7WbegrfdRtAS9fQnCrcwGDH6B84E1TKaDgex7smH8y91icJKTAJBKXLEi5WxohtM8wDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XPmTZfYa6CaZkyvKVALFp2LuKsDTATQn17xQw5QfptTNdSL6jx7HeTAcnU9cCJkAVQ7aiuxau1Zv1m19XvSpyMd",
  "key1": "5ssPCUxKWy4wGa8JEKS48sAFxqZgegTqnNSFjXjRpbSn5FFyDrB5azMvLLSy4T7jT5RVhkmR85JgMj5awVckoX2j",
  "key2": "2tizHKPK2kpjo2vFeNcygC85V1bhE9aK7G7wiToTAiy8bhBNGTYzu3vcht1o7nw9ciA5JNCLrYY1Jxtp1pxm5doM",
  "key3": "EJ2NZMzcSQCmRyKLsqdfNmFYipNHYMA97AUYCP8uKtZbry6jdLKBYNYaU7Qvma3aNcZCjPJHyXv6j9n3yULWDfF",
  "key4": "3LMpDKF1Z46rxUxADcSCwx9EwGkCHA18GoLW2EnvBZWtA4yCGCwpMwY3W7Sqq5bvBAKmhaLJtLTwJxAmSB7Ry2c8",
  "key5": "G3ASJm9wAxfy1HzdFGwJbKp9cbAPvgy7u38h9JoHSDRMZgic6SZnLkiiHaf8kHgeKF9FQUs28GLbW4R4qtTeYAV",
  "key6": "3pSU5aiZytGiVr7MJNomkKpFJhCUnStL3HBtAHi2gMof1aqczhEgfqEUZg6bxZxVW6S9pqPkd4trt6bd9HzAVxsy",
  "key7": "55sew5fjZTXbFME7LUNxtrJMEKpJiomE9231S91HcgLUfaGhuW5UDZwsfuLmEtf2wLWtw3SPHr7ftdoyEzucwUEF",
  "key8": "2jL8jbzexMTP96LqiaTszBCQb118rBk7DFXrqczgGNWG2fG7m43fHQMde7L7KxZU1c8EVzSHGkcGmM3soKw3cyp9",
  "key9": "63x25b9xXaU5H3meqtpAf5jCSRFtCRNCSyEpRkkQt23TnyQK4p1y8pz19oxeK2eVeLJrWQBaWrwQ7Mmj8bGEvJdY",
  "key10": "2Sx7T99YjPLzo2eL6zpZMqm9uoE9iscfJ7iJjGuWuANbZiyWzhXu3XzHEH4q1EapnGay8j7P8MK9hVqufi6zG4YE",
  "key11": "38Swn9w1REV2MWQk1hoTqDDd57KLRsZofZkTu57u2Z6mhJZQZVYnaMx6LsVhPkP7Fon8LYp495aDEYcgqXUEFnsf",
  "key12": "fTZL3zJZV63hVKaALU3iePS9UmMXy1FKuBsQ8MjVMoJ9HjNzU3Pc9jZWXftZrV7jHiuFUfZfLgab17tKHggoFaV",
  "key13": "39m5evpVUpc4DiEt6D9y6zUXP3ckGNJoRqf4Wq3K3KGPutDaLLvgQZBKNcoEudyYprWCxTYdU53yvb79XbHJ1FpQ",
  "key14": "4Hy1yDjbjESi4s3LLRCaYMbQMHRbNM6RjtQFGd57VcRnrPjjJha7nxXo8MntoLFBWR6nrBrhXSS8N75wrdkUG8ZC",
  "key15": "5ZC9ZacNTbPa9pcT8CANL2G6vSs1G4KVnGEPjk4qYQZ3RdcmXaK7gomz1rzu1cGXxbUtDBpMtJ9YCSExraVqytEL",
  "key16": "4uEzToyUYrazC64JM9rmDFAzoKvpPMx6W18bzJiDooHu5zGezaVFWB1DoJAPeFgGm2gmgwQ6XA6HhBBhLj4Z6k1e",
  "key17": "23C76VpJQTdKLuRQvLfnUJNgWnBSVF53kwLkkfxqvBvCvpQ9v97FERLfEUyYdBrEiZNDhkvEhF5VUw5W3iK5C8gA",
  "key18": "22YA5S9CWp7a17hcDmk8ReL8vNUcQCYJvdyy86xhxHQgW3tGWoxL3BmcS9gnqUxWAvAZK8cZhVeLnf2WR4XsEujv",
  "key19": "548hp4GevygJosmixifgbL7DkDZvYv6ABevSZB1xTUy4btkZXegFc5Bov1bdXyAVkU2GQHJqeLjTLHpYnbc6C1F4",
  "key20": "2CucmdixQFWYWYYNKN3wpKY5EA11FeFRBfrW8Qm7i5NVVxxAJ5KRggmb2YhXADjHnZUZZyw7HAGJQj2ikDLSrVTf",
  "key21": "yW9xZi4F1SwzgG36mXLrCBxsSuZLtFJnT5qeRpqcFNDLLrJUGD7VNQuHEoD6DAAHoi5HmsmQV1EX6m3mgsjrW67",
  "key22": "JSe7PNNmGhFxFqutoCRqacGQ1UsKUKwhXyD561raSt2t5ziEShmnbUmk5sYjmx2SnWFdzmLFsZZHZAmWiGyEk9a",
  "key23": "owwuCtyT22Me7zt1ijQ1L4HwmT97YcyuHXiafx4orAusXmtTgfCzbYgdopdjKGtREw4aJXcF4p4K6wge1qGmuQQ",
  "key24": "2FKrmxg2vT1KCTyLEDZZDcvbmarWKbsh2MdbsXL27GoxtVPUJXp9B6sCu5LEmTWMZWVexitnc6qZACn4mZrRjXoV",
  "key25": "5dz6nLjmvMh7v7gYYbCmwPqP5CNve7gNeC1fM9CoyYKf2mJmKcBcrubYpuaEGerykNUPGmKvs6bnaa5Ph9aZXLsH",
  "key26": "3TxHyUtm6rQTdHj8xbaZ8pKzGKFjVXdQrVUQ5uN6i3xeHrrCHW8VyHRCxFZBZBjTw5gMbduYoZEkeVBbTzWCSCz4",
  "key27": "nT4DUZD6tmKjQUTN1wX6apgBLBK6tb7DRtbTDYrgZPVYHSCq4z817bYPktciE5uVKV5z9E2vUFSrxtXtnhdTSMc",
  "key28": "2RC2ocjifBNovWT72oMmVjKZw75CbC69E4Kt3byZfdGFr1iACxMbPqAmace5DkTVnYK81kUQ7jp5r3YND6M75zuh",
  "key29": "2G6wVrTcR4QG3LVXEgXFjGkqA8utCrt8v2JKcHLikU8qWuNoydj7e6eGmn5svyjTAXCWCXCtP5Cbvm2ymzU75oMd",
  "key30": "BDFQuEfPe8CkZBuUzQYHjTetMFqASNRqaeeGSZ5E5S1exPBoWCEQqsU4mH38ghnNNnhdzj23htqLY8oiMRpN9CC",
  "key31": "27hBD3AgjujdNBtTCcZ493vvZ2i8ZVETrLdHCH2a7s41egxBe5NaEbjyg9UL1BmsGMJL2zYuMFZeskTN8m8pSJdG",
  "key32": "4FipU7E5P1dnZizRsBzzFJTtnvjVCSdjDeKRxr4aKnPJug6sW7VNsnTdqpKjRAyeUecvKjzsDBqT3hJnu28HYsR5",
  "key33": "37vNTuyWTE5HTNGEzE9hemKdCFFe4AJNiuuZnymMhvQWGDzmyJx77z1RGh6Dvjgt4iJdhz1u9MBvqdjyu6iHKCt8",
  "key34": "3Dm7D7bRWWn9FDb5m57Yo3dvK9h3Wd34S5GGJxFGHLCjFD7kKGmJWndrfvG2xPcRBUbK2pJPf54h6DMLTWwUoXzX",
  "key35": "5CuD4jH3S63fXURHP6Wbmjv1uUaEp9tKfrSZt1rW4vJtxxJCu8gShdZxGeLWBtFzk5iBLyeMrgjaAX2HPPhcfbj5",
  "key36": "5QB9ZKMzoLsMQw2iBL7Bb9tvFMucdd6QXNVvAbywwFs29FERavyA6nYn2Fy5JTPxXv4NQGhcKZoQGA272rktpfgX",
  "key37": "4sweJ6FRGBm8p3EqmDw4Et5fLb6WGyYTWj57TrE8UKUBToD1ZN5xTd9Ld3d3JSWq2Q15gv4QQ9c13f77UbLb5QjU",
  "key38": "4iscyx57J14j6ApR6oZbokTT8VdwY14K4CQuS9zMep3FEC3JJrPwMLJMwqytG4S6sYf9VS4xYHrb4vD3RnpHrgkE",
  "key39": "3zi4sRGsc6xofJC14nPgb6aNYLJBcy7EbwghCKrge43ppitbztHgTQo1qcifzWJhkaLQxXR7XoCQnHEidyv5jWp2",
  "key40": "3a8RQhfRN3wJmX5JZMpbofhDteaxA2wE3Rzcqia5B8D9Hcx7Lgjocr74WVJt5QzzCRESuMcWBVoHyeBShKrX8B9J",
  "key41": "5MCqKDh6F6znixnP6TfHtABw32rB53Adqe3hDa1w8FQYgLABEdk3nSc6MWfCuKsaHivzfC8VXyVYupgcPzkk5UvC",
  "key42": "HpWy56h6hcdgi1yCNKXxWeWqmUrXH9qqrAriHFkzmXe9tcjcePArDBxTHAqzxApVkjnjTUSoZqrG64CXtym6gqB",
  "key43": "22kZwNLB34YC2TNBEaRqMutoVTRmW9DWcKvnAGBGk7LT7MEY6YB3n5zHPNEoiXeczYSvqSFkBTzjGTh9rHB6tV2X",
  "key44": "3qBxkyjEbD4qfaZW1CNbeMm9qX6jKJYPwNxFjtwtRFpunHZnsCEHNMLgjTFchunZ1bj4Nmr9pSTzNaUr6H3BQcRw",
  "key45": "5xUiBQkfDmiySx5gQhVRuW5hrk6m5mHocqurLTFvmS4zdcNzT4yb9PGQb7h51MCMmhbAU2itR7GGgBqbsuaLsVmY",
  "key46": "DChk8Tnqd2HSCJJD1PqkszbQbwNbHzsXMgnLA12xTsv3L4dCznRoXX2G3LsDoYCcYRLPAV8kpRzpHpepdkLrFkR",
  "key47": "71uhbN4rXMfKHFgtMnnYRWq7oyBUb3F9sxmJYUx6XdjDwJwth2eanLU4wno3edhkov1P87FPbeJ775JJjzogSJe"
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
