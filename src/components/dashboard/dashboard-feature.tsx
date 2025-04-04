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
    "iwR8F2xQCC8JqRKaDNY6GSn6zYdiuDHUvsWgARjyf1Ueq8eQpRoDWz6XsrtVQ6BaETR3t6MENMgQ1N4eGG33KLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znETdQ6WriFWS17gUy9FT4DkLEVYM85ZSvxEqtZxu4W2GZXheqZHBcpxvV1UZTXExrDkXv6vqwUGs9V8gtDmhiQ",
  "key1": "33FVTFRfFwXKKtyNQr9Eu7HsRHpRcb1ZFEaxJQNXrdn3sniYf7sfBGi35ygojGiRGAtfkoMxy4kR5gkykoKccQW1",
  "key2": "2LtgiBEXh4ccW8q6fSuDgwd3bfm3wofd3SnaeBFw3Da393bCARNC7hg8uNFGzFBEADuQX7gKCxc27efxfHMttCb9",
  "key3": "2RtL3PMpYepiaCQL2v7GomJtySzDhNcQsiDERX1KBnVCMbyu7NBXoyJbH5g58ZeoH8wUMEqSAAT4pVkyKAJDNLaE",
  "key4": "LnCZQjEBV2GPKNqTgUYC6ffZHdqrjyXsZJgAyC2pNa2dNQhCTAJTtLFWLwAyWRSVKN2v2iTYtGb4c4Qvz7ESAjn",
  "key5": "3XYVAN4A6rK6LD6Y3AYZnctnL2GS1ynTdrjcJsSpFr8EJHVQz7ym2ry4sF7NukDuH7QYnB1LGUoDgiXxWWntoQ1i",
  "key6": "3tDG4WLjzfmxt9RqSibdDRTFAQndYhDpt8gGkBWs8PN2XQTMoRproD87PkG9r2gPX6aULtaimGqgZdt3BPXZXiP4",
  "key7": "57zQ1J8f2JiWZtBdJMh4SCpGMgDHQct3jYFEigEpMJ1ChnWiLLiJreoyLa6LhKLwFgAttC1Xt9mfMoiFNUwTMEZt",
  "key8": "5B9Qdw2XwNpUtfBwwW3X44SpRbGhDvrmrkvxhw78VcYN97GJueAfVxJmEsSPkSuBQzbXWjE3DZktx3Eew2CfPWTx",
  "key9": "5UN2dz2E3wYddKmUoWw5SqagY5EXQ1mLbz9BB6ZkBm4CSPAUXyc9cqDvJ2JD6gcHTmjKgaVMnCW175cXFdiuhAfs",
  "key10": "5VqSoTA9mziKYstgPqnunjAMsdU2Hfjhj4TUNUA6fEJpw2DwSp5g5RWws7JjwZ5WCswYQPhqHHMfXKCjvzQi2URA",
  "key11": "5TDJAeTBEJJS5sX9ord15vGVcfst47JKVWUQL6MaDLRtHjhi74BtQjpnCv6you9TTVU9idFg9Zax1ZFe3Cu8p94V",
  "key12": "3Rq5j8PGMChjWMwEFsq7ARgH6LepWt5pNXG42u7dYofjWnG2zUMe4CH4AUzi2SnkvqgDLZTBkyWL4yb7j2PeVwAG",
  "key13": "2WpYnKxZiYHaUKYkxbbkzLYk7pLrJnY2PMx2sxUU6Cf2ERjJrugKATx4aRcynM7ew2nadQHMeWkdkfddzpvQhvJr",
  "key14": "5r9U4PRkKxKXDEwa7fLNz835RJZDkPN1BvnXzEvW7ZMS4FbECCfrE9JJ6UGf9TMoCHbxAZcubf8x7qi27aP7AhkP",
  "key15": "646DGiyd9oU5FQKPNoU64vmyNBi9fFCytWQ6wdd443WEmv6BVE7dMPTXtVz5vHWdcTwpZmpTsf57qViYkNX79PiB",
  "key16": "4qeMaB3yDWhfJYTkguQM1bC5C1vDZdkt9GYvpbovtLPSAmmAWg9Vt92PafEvB6C1CLdhrvbQaWPvkzEYDgFiswFT",
  "key17": "3Jyxad17S3X6eWK6YjprvVTHzpeDUaKqTpDyGu3U39VwXfkx9rTHGJMsjJQffiT8odiKYg2MJ7F3f4oc3kSpXLS8",
  "key18": "4XqRRTaS1CEV4jJcC5jGAPRVJGcbiBreoFfxtSj1fdgQtDt4Gp4uUJ5MMQfk6WqLXAj1hSTndC6FFCwpf8agucsb",
  "key19": "2d69RkgMCkWt36AiGdXFNE8dgvuXLBaxtxWUBkMDwqQfPWpA3gojKQFbYrVrqc516hsesHawG5mrqU9hb9oa5Pww",
  "key20": "3iQNr266xBSNmj34DLMMPEz2xAnE6dYkfKzGCQbbppHNoHcXwPixe17JNQQtLZQ5ofgnRcU1Scb8xnBM8KxYmxUL",
  "key21": "HtnjTKzpVbXo2E13bkMjDcMcXq1Cwi8xzdESiG26RbtXqwcq3eS7k84vjossiVrYhwJb765yqWZfWN9HdoKEzgU",
  "key22": "JS9L8jEe3oeGq34JPZfxHB1VspWY65GJ5WA85AkHPBaEG176NCJXttFaHPoFZj4jPfEjf9t6bKqn3N1gsLhxrAZ",
  "key23": "nx1PHE474XmVWHB6hspEhV45XzssaVFNXso7meUqQXhBHWoVmqAmF6cgmbgvWpqEsbERoCGGXMMnKymwaKcqoVd",
  "key24": "4SzMvcHhUuD9oBBhqv3qkdWttWPb2jL8WD1cMeSYQ4hDuvoMHRgci7tHS7sQoSsFpVA9EeXRViPFzYPgjPtXDpzV",
  "key25": "ReTG8FUcoJsxyNjpu3cAXjezMmcXqgszeJPAg2h2Lu2vq9mBgUKSuGPNxFoFnr1ZmXX5F8iVHyHvxZkXTnqZrhL",
  "key26": "493oKHfgJAF9JCpo7JiesvoQdFH5RASU3Mc7ZgQfmGNetJtskdaFioZ14sPxEj5Sbgjz2npTUdvvRyMqJuKjYTg1",
  "key27": "5skoaMcGnQLJDeNP6EL9kmFCo7KpBByZu2GWZx2evwLUBsgbfuv8F7TitQoVhumotNuTAmMsTHvxcwb864V8FkvH",
  "key28": "5p8RrJCr6k5JtrFPYwJyqoNeFjnsuuYYbSTSdLwzAqz8YBZFt8JRVH6oRVVNP7p42E2WeiwpgmuYGSWurZZgmF4h",
  "key29": "2BKVX5AaSLR58LBw49gh7SVUFemEo1oCP2pfcX8go8ZYWX9hvXaDSDFmbT3FFKHDjw4gMUFmPUsbbtJnjhPNdC8D",
  "key30": "63hPmvQQQEWmbBGqwsJhKbS9d7Hu3JnoZfwaUwUfw61fNgtWrJ6PhKabFGnKRre9L99BAgcueiFYzKG4xk4vUxHR",
  "key31": "5EvUU9MhoB3gQ322Jxg4NfQCoU6mPJf9fF6yAh9Vt3Sv2ycgThAHawiUFQhLpQ1a9ZnnafRwHnmYwyNG4gC73YB5",
  "key32": "2jLJPFGRgftnpLiT77ieijXR3znXkU4k9DncM6NGWvj8N6pGBJM1dmi9qXqpabMpt6KAEoGZUBUz4ZKn3XDhRqok",
  "key33": "3G4Bm8FrUuxdo6U2LTDcPnogJ479nb5UfuU9yCLpb4c8EXUq5jhjq4yCXusXgsaCPZ7atL1ENK7UbE91eCzcTSN2",
  "key34": "4T3tjT4sceqKJvm66Xo7nUde2mUSivoREBqhYKpX1jSVrHFxSfX2AbAg5ubLFZx3c4hJb9BeyL7dUL7fpjjcraMH",
  "key35": "3rr68Skt1zz3gm8iWFAuqoQ2gR29xKz4TCs2yqV1TYHEW9viZiGMAboH6xJ5rTfzCNxcKU2Son9AvFR5dhHDWi2b",
  "key36": "2FouEWfaWuPg9MdRuxcygPziwMxdrfy55bTDfUGX1CNwfu4wfyR7mr9dYZDN9J6ZrTzuwGkqSxbpNCpSLDTyjTAV",
  "key37": "xLcUS2hiChSVfRcyAHmQsmThf1BZMfPDw2eRb2deKJYgcx1RxpfmLNh5rrTjcnwJY912888r6nrQSicw8QjZJLC",
  "key38": "GsNYuYpXUG3y3vEVkk3EUXokUFAfpsWwtn6TL3hA3iDWUyMN1SGh9snMoxdKFWQFtS5r1iDrYUEVwk8XgVdC2vP",
  "key39": "4CxMH6YxxfydhpgL8SzpdKzD7CZ5XuvijRCY3Gj6Rwcswh7rfveqLsCy6tpHmNh1NUiokrddPYEaRPjsBiiWuxG7",
  "key40": "25vGUjUTU2KVrQ4QrFoXoTVoyrmXzmuM7tJAyrzZbnTyrYfwVkw3KENLwju5SxZCFd1xukrix8AZ97WjCffPC6ws",
  "key41": "4QLNMt9jBcLY3KTxKpbQ44LCXZ5aPZ4agYQ1vpfVNVFARQFfTEPfJZWK7zduQdTD3Yr7o5st6YQtRhsoEctH3XRX",
  "key42": "52sAWTtuJzaLG95DHSedfYfQ5MHvAjkimMkmZ96zaYnom65eRk8zFtgS8rQrjazxeTM3ezsEetZkdjMyiwtFLCxh",
  "key43": "5Xi6b7AbcS3mEFannAT3AqF5E883rwvWHT891UcamVcext7AcWdEoMfUegGWMkppHjBz1b94VdhKzNnwMwdg5tEe",
  "key44": "4B3EGc4QuDfMBxenPCqk6p6u97kcJvyQqSLowrLSYNxFbNMdS9CzymZLQco6G2qWmAaLzF4SmBwmxscdYX2T2vTA",
  "key45": "62KV1dWfMo4HZzMtpCLd2FEneQfJ6kuvJH4xSs6Lg9DT63RWegyxA5DCqWF41rurGD1BYkA6Wx967JzA64apZmeb",
  "key46": "4PwihHuBmpJFegiwsMY5SwGtRx3UkpgHi3D5287aDuA1R8xha5MGLLg5mN6gXY8b9yxYEGBxkgrQPkmnzmwPTHj1",
  "key47": "AFYqAKq5Pu3TwftFvnfLxzD2UoXJzAY8xvmbqd3MXkJQZP99Z34Qo3oj9oJxKiXvRDoh8sKj2nxoojhaJKXeSuH"
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
