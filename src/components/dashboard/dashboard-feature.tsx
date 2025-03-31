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
    "26XGeonfnBaypQ8ekk6RfsY2P4CFn2RsQd4bgZo7wiAduWav1t87Yc8z4fcf21oqhVLBgfeEpyZp6hYaf7wUb4GY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AkopUwBRGPyXaoHUXP63Wu1EFQNDcZQQV6d9ThxyucZX1uDN4WBjaomad6sdsi5CGyEmHc5XSWFPVVA1RjyP653",
  "key1": "2JzRt78BXDh7naPc3wBQWUZfUo8e6FgNJTGE85tgfEf3asj6WPidgdd5VD96YQntJFjMDsoMVtFi3jgZJBFGeysA",
  "key2": "mKzUSUKQUyiNuqaKSACqsH5BbY7CQ1TkWWDTVBbfWLVTnJin7kBzciAL8MMEhyG2C5RtQ9MfEgqSo68rT1Kjeh5",
  "key3": "66SsRPEezQGEEwcYaHFKZ8KTUg6wPWodeWbD8Po9QdaQxLhsHeebR8eQbbxSogohPZ9SxfZWk8sGHKrG2R9MuM1A",
  "key4": "2ZJzrN9cehujeY7D8F8e1jJVvp9rPJNPW84BndkExbYdr1gTZLQxmjR9T7XFFEebCEvZXNwXcbHBcCpnLxMVfcak",
  "key5": "5u4fWc759cqa2Hf1HFBSRvEWXPQMF3D77xgc6o3EwzXuDnUV5UkGZpvi9i5E9R8sU5gHgktv86T1tgx12svxGZge",
  "key6": "377cihCsaXHHmijyy1nrK1hoxbegzUaxpJf56FSRcNwU4XojcRyqsR1KwkVnkSV5tBu9JhX5QpDbXFrPFyZH5Kt2",
  "key7": "55QXiKAsBmS9AkkLWWCid5U1ZWChyqGzqcNkisSUsbGxGAhmzYknYq1AYckPdRqmDrmUH4e52ojXDPw6aqKCAynw",
  "key8": "NJsDn2kEXJ1uSa5yGzq2CEQv484t1YkYv4yrRmL7s3yPPECMp4hGkrYjML8Hak2ozVtmC7X4S5t9p5uoW6Umom7",
  "key9": "3Q5PTo9TuWqStg6PKgWHNw7ArECeiDjReHgxC6k8Qg3zjhWQRZ9b9jU7Qx5YaFa4eLbHF5pz9ANzyfTCrVwGAaVV",
  "key10": "3Mnnbopmnu5Skn1aD24j6wSp5wiBWJnoQ8QvME8u2Z2iSTGSaG4ZFyRthbRzB4Aa9MpVQyWovVbAXyWEp4tszchu",
  "key11": "2mjAj4ehsPJKvGd8NvwcC8bRSaGGyvnhVKt3AzpfxZvnjNEWhNYE5MLHFN3SuGNHu2Kmwhd64NjCufbpkmRKM9Kt",
  "key12": "5U8N4J87QrbWFAkv464nBBgwxhx1WRcGFjJZZ58VkW8suSEz8o7zYYqyKP9KW44V6Y4wYphjcgEhu4EyhsxF1Jtn",
  "key13": "zXDiKhnGASMcS4tSnAdzLkkKUBDNZPMXsDo8Pa1ftk8KrthXk5nXcyVEx5FzegUoYQbpSfZ1SS16siBeHNru98Z",
  "key14": "6669Uw8jVUsm9QZJz9YDD414nd7FeTevt5m2fVpsxFxRoAG5VAeL7srPey7Ugwhm77qHUZSvdhYd3P1Kht8K8WLH",
  "key15": "bnT5eVSnBX7xKmfPiwU87Rf92ws4DiUz27UMSDtnR4jZVZdbhBTnP4wXWQdUdjS6ywqDYomHJjMZoy6LKGzjcWP",
  "key16": "TMcmixSNKy6jqrpERaRZy3nxBcgLcXkNoGwbmcDfGXRc6NqkekjUX2P5pSdk7PWceF3nYv9C9sSBcrgTpVtwaVf",
  "key17": "367cWYixcucni8Ts8iYQHjcUZkbURsRtAzGAyVwMHSGqX3DdstqCXPc1e1E1mr87Fgapva2WVJT14YbEttP6Pn2t",
  "key18": "3Lvw9UcPcZ3xPYsPgouwU7fBRhFQQ7CkU8gZA4iGwbpqSacFSYXjeLMsZR6nzNgz91tRQ2kvCnN1EFS58WvbpjJn",
  "key19": "5DVn12eNYp5wHuJGwoqnmwQrPy8fvUqJ9PCqtkDHaf28KiQp5qhVZtx55JRDNFS35whrqbTXsbs8UBeFYwJhwvRv",
  "key20": "4rM8nVz2BzA7Vw5UzmaSN1ucmLVXeXCzU9xv6P3xmMg61e6ToQkgVeTy5GUBqo1jwyU4D9AHi68ZqTnNXGHUXg2x",
  "key21": "64FVG4STJDRZafp3v4NLsrs7aXm2tVW2xBycJ5RwByf5Gw7ABM46zTM13DnqHY5CrBzdHHH1cwSWAvSZGLfZoLNQ",
  "key22": "VxHh6V3RJAD6XEF84QhhcaHcMvUpxktUuVDWy3NRU9bTDFoGxJzSCbfy8soXmbDsZi5rEgNQbziZyTZkT4VcGYm",
  "key23": "5kq4h3HXguXXMMsHkLYnL7bqd8byj5hc6HNv1ADWRcm87XAJQgLoN8PyEbD6m8dHMLALTNL78RPfaM5CnNCVhr6U",
  "key24": "3EWJeii8LK7Kapsp7V3KfW2p59TkWmD5L3SGBqxKWznRPgGCjG7mkLMwJoCMfitp9tYgTdNGPnHavpMEdL51YpGV",
  "key25": "61krqPy6w4jhnKegpUgex8BMTFCRYbwndgnks7hnTyPF6QEiQbn8GeqGRCAp1D6h7Z8YdEa3KCdazHWkA3TSuSYC",
  "key26": "65eWtmEgxGp7JbcbEpQHzCY9axm5tYZootDxQdae5QWe8kvzbS93kCiqexaGHzZvXNTwWD7uRuqsdENNJJf2Jbmz",
  "key27": "2wrvBsJghU5Wf1KtsL7YQoErveAAbZzxfZFNvfJ58DxhMvrtaVP3Yj1LD3mAJNZd6mYDKoW3EWZZ7U5p5GHpNELW",
  "key28": "44K8L8omWQUX4LwkgoYgCu2792FtfsByJxjhxLbKe46ddwSieqKnRuybBSrtXQ7sXxrwN9Zb7gzGH75Q7won1uWW",
  "key29": "2b8JH5V3cKL4AL43PJEGFhVLRzZW3wP2WzzHdk1CXYUoNGmxA8n7AZVqHyFJEiofsfVkprqJSstU9s7GJCLFrV49",
  "key30": "3ah1ohZkEU7a21dFL7GfJ2BPYL4dhfc2L1r1poArsLuC1XXgnnDSUNFKc9CsWojKU42Uo41B4x7ry8eHntkgfjRz",
  "key31": "3N27hkwUk2bjmXVJPU2uUhjFSqyRUh4oeXMqhM3RqXKxNKDsaCoSJWNbRj6FAeFQGGkd6ANTx9P79WpTutdoo1Ef",
  "key32": "3kCwTrEWuqzcRe785tyrNk4QbiNSW4xekJTQqwpK9zCiGyrqR62K2g3hoNnD68ikZqAW7oRXt13u97HAguYnMz8G",
  "key33": "5EfHxfqG6fGqiBqXmEYtZT1C3GYq799pg3CpH8poK57wU7cB8GVYHz2ZMEJrzAYc5UgQXFk8Rvbi6v9dc6uDvDpN",
  "key34": "2WuzNyv4sZ3r3pd4nbr3rzqpu5KNvLV7s3rEB4vfdc8j4shcWmfwqtbipq3GBdTphsnxnc8MqQH3EGNcMuWU36WS",
  "key35": "NDbznNDgkfCLiFwcMmh5gNaKYuL7M9RqgNUx2vpbr9kTSeH4TEPPMcQvMJCQNE7oE59mmGgcqBwy3TEdm11Dsgw",
  "key36": "29m1K6ZgbBubLbgPx4vTb2kfrQBF62sMoMpFLc8uFtiytb174mmAftQfGfaFf9EiHLPiwL8ERkZkoKyfjaWQSc41",
  "key37": "2BFh1ReHYbPEpeThvBL6Ljb5FUshTfz57gKMenYtip4sfd4zWXf6z6LkeY6v5TzBQGbcYPStFnsDKES5fYdL9rHT",
  "key38": "W5Cx6xsyDQ8ggqhf2NhftqMv6X6m4LavVMn19LyFb1sQHFQEA6dAXh6MChKZKRihsucrsixPwepAj9bKS8UnYYY",
  "key39": "3XyfEgBzmViXGuS9xQU7bUYx3tHP72iA6yUtew68Kmt1dLjQNy9jSFWCHsH9UFX1ZsbjJLAktdshMmWdCbwh6V8D",
  "key40": "5H7Z98fteNzKGHX31t9qR9yU4a9zxpYSTKGzXzHhZ2WoQFp8bLDzfqdbVHWEXcDvF8H8k9iCUEZnHaA7wgyJLJoC",
  "key41": "9Z6g3mVC8W3EPcJpVVYzSAcHksoEBy8jr265TLjnXZEhBZoShRCqwwymMHYVMF9UEcGNakaA5YPCoLiy5eqWvJf",
  "key42": "56tyXUMtPKxqY9mEBa8AxMBWqomn8MYJ8D6LfgnMrcTfG5t6yU2Rz2UeF8itaLKtsRMwryKjch4FCbQHXtZ6rrAC",
  "key43": "395M8B64XQAo257DUab2sYxEkAA8wtAuU31yBTsRd7GiyEeFoJkW3uco8pVVJRpU1UnJpEJnHioo29eugXrJz5UV",
  "key44": "3RNkvajeZY955bYtSZFUB3NjWdm5fsSyVGZu7VS5sCTgRoeW6LxNd5HUo4dLMatiAjb9Nd4J7qtrC1tpWUpbTfa9"
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
