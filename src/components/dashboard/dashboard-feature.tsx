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
    "ULjwAKqjwmR1y76fbpjyQWiwwDnLoYaoru1Dzs6JZ8teYYWj6zxv9rPfQMQL62yJeojUApdRsbN27BPGQeXhq4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rbXjzqRuTHfNcGLXwqF1RvU1X6TQzZMwq5iMKjkCMTFCmPavxueqQ1GkGT1TLpPyQfG96aAV1LkLYNh5omnTQB3",
  "key1": "3A41g4F52qEgevjr2MuvZdcxusoAG8DE8wEXG8vL1H6xpS34bSrxBWo7znoBRZCmH9e4rtgpoZqzMGHSHcC1a3F1",
  "key2": "2DkGLzb5sFT2bxcCgJ5db2kCRFvHyiCxua5GbgrHb1d9ZYepXiaNWjipunG2sdZsHq7PPaYXyoj1Ru6jzAkQ7mwr",
  "key3": "4mV1vncSiCBpSzMwPwiT95Zm4qXSdzi1YvzzZfvPPxVkJrDaeU6hAifsj1f1Y2po6NSiUGYfMNcnKExkYuXpgEbY",
  "key4": "5PLsn7TQuHfBrks6qXV8L6rXbuR8ssBj73in6QAEweecMajVHTdB6nRCDw59spCRYFnjNW6EdL4hXG511TiHoiu",
  "key5": "QKzyM9tKZSZ6Mz48TeF5j7DWWcsntdgjXAETs5FVPzqZqLXErGcpHQSbEqgVDwoSwFTnhCs8FDcacYqqeXSW5NV",
  "key6": "Gp2Xqk4RiDnkhXKzvStMrcvfaLEwh1rGwpBitQeX3MSuTYCeGKhyzQzKY1Xio6ud3skRWN3ZaPY7CutFF7RyjMp",
  "key7": "3VpAUfKK7Xx9NDJdGip8J3Q9ZaJV9KJxqGB1DsZjWRz4toAt9k6Xgo78MXvW5RbKqrDj7VF8KHjxDmJ4KqqaNnug",
  "key8": "3vcJdexs8W5MNYTSMyLN8ezh4kbZ4Fk5iL1hV4MjNjKBRbt5nCHp8JkChHxZnw8qurcgQhZRELtJhg8PqrtYZVwd",
  "key9": "3TxVRZ3YVJzTmx2Aau1ACXyGGXkoztaQHMG7LidBSVC1fL6dTubsUtNaCd72Lh3SFYYwWBkPjMM2eebpCXBLV2xd",
  "key10": "5zYg1iv15e1EEgYxqU8DSiBcPi2Wz6g8SHkTsMBTo79YsdapKNASNkhCTQ996K9pwFtcmuFDk7mZ9qiqfEq2oduA",
  "key11": "4pPhK6wTwh6X2Qk1VPbEu8HFoxp3q2E21LMVmF921B6RMPXk8mzeGATAHKaK3Q7Bwad29t4sVJHkPNq6qvGSZB8D",
  "key12": "29zQbq44odzqiuQJyWxa4kTYuoaag6QQZbktYaHT45VbJ7XJtU77jm4dZ42doUcUbjK6JpqAFCc8uowKehNPhiWw",
  "key13": "34n6JbMrVJaZn75rvK1BmYh2LubhXdBPcVHK7xsvSzdtAFNHmv9MB21vJz5jt1wMeA4Vn5UHg5s1SVukJaZSzu8m",
  "key14": "3e34ACoc9hhEWNM8xLY9JqgNeB7gBGzpc3wmSz1DxQaSoifkdQFbJNTACHG3gpTn5Qoyn3Yq9z1oM5KGU8MXu1dL",
  "key15": "2wmzpyAMxkjv38viZp3VgmsxyECKbWw27YRJCeVLiuJXHfujBaoAHeZtxXzYf672gRn3cXu6yi8y3JsPRi4PBKfM",
  "key16": "4cArx2o8K6V26zX5J7FXV8qeopKyoiHwyrpWm9noPyfsLBWoRPXvzBzB11hqfEjDzXp5BaT6VzkDY3zJ4mVcHj9K",
  "key17": "4gzJEup8VAWJDmw3rfwzFrtoaj2qWw6FfDoej9Wn3TDmSqnvdWcDPKj4XP5gryXbwQS3mWWeTqXXMdoetz1Sp1we",
  "key18": "4NhVSyUB1BGhf4bPiKyqE6YXU35Ezu3b2vtxhpBGPsRXRftXYZQu2vuvPZFcycFBDUAFH8CRqgiRADV8Xj4QH3nZ",
  "key19": "5pzRhoysJP6QmVyYdz4MHFrs1UzF2MyEf13n8gdHbfHS4hhxVm9iea9CgEieSsZrf4ENqQbi4iF6GPVHEqy6rqDN",
  "key20": "2fjGdH4oB9aWcnNYaEbqzZ9KnQiQ9AXjrjhGoEfHmQHBfAmcg54bpEaTCeRtfwsvHFPxpiBVN4zBzSSZJtgLB8x",
  "key21": "3TZ3WgxkQ5gZWts4xJKNtQ3TgpVKJZ4H14i23ZucRTeG9Yk9Mk83c51NjSGAijdtfRgyn2fv7cT3SdVPN1uzFUQP",
  "key22": "5KNTXicVDk9BYGNmP4zGo3inRXUuZevfX9kxAJXvsTBrpvwigFwHqcBn3RVX3Urh5mxVmPsJRyrTs6zzLrjsS7ok",
  "key23": "5UGMYcAeNp8pJNjyvnoiBPgCWLcDNYMmb6N3tjfaRauQ2AcmmDiYYhmsGKco3AGKSRziy5LxyXUF61GJ52hiotyk",
  "key24": "4QEVrSeBwJpvfJGQd6tpBv5VLxJt2BsCP2fvCKVCWdsgHgDyVhCcnzzvGaaeeDBj6oDwMnZWcnPdfzK6xzRW3LsK",
  "key25": "3W8c9HPrjdK4n3q7voJkLj9rjTD8nh3AbeCkK6kt6VfKT7TgkbFurCPdT3UJEbmbnonkHjWVMKjVLec92s87W2tR",
  "key26": "5AihQZ5N2WPgAYsPx7CVn7RqorFEPnP4qemJo7srBvGoZfeSqg8aWRVo79UtqFpXWzj8NsebafRf8NhbTCx1nzrg",
  "key27": "3fGnFGU69xhM3tFr3n9J1RVGuY8AHTrvEfsYHNXCqnCXs7wjvBsm4fyb9Vq4qREuwbix7GNmxFBeekXTMnJayA2B",
  "key28": "2FmTrFWK6VSHccfZdhSjteGwbwGGkyEfDawW4HaXgbcQMuk7NnJv5CjiLgPBJqF573QVVVrpmDPCcpdZv7zL8wEn",
  "key29": "5pAThfCejoE1odYYwXPkZVwVvUBoZgNVXcW1mCaRh6LqmZ7V6Cspbf6LBBoCh6EtpfWpAecp9Uci4ZYpALsvFxTa",
  "key30": "5HVEdF1Shocvwr9W7VniZhi29YMzuQ2SzgT4hBe3zDH6QwnMXcunW7gdLm53qetQzpvnA1PKqCov4TU4e4rUh7wJ",
  "key31": "NBkG6oeZkesirMT8ooi7vDAAPPHJi7XgHETUNUYisbdAcdCqWCDJFXEopE28GsZXn36uwP9qxVgTGVe8KaD8DEb",
  "key32": "5PpsY2Dnz1XUedu8gUUiNguUbhFpCpGDukvVbMSmmnHtDa55aYJnjaEpnBEpUsBwk47sKVikYNuVNPZr3SoWm9hz",
  "key33": "22jsGTqNpUetLxHfmNVNRUuvhTnAUMiF192h81zsDK3KN8tCuQf12SJuJ9XqGwAw9WJBaMEgMHp5tUKuvpaNXcPk",
  "key34": "5R1MPN2mLBdyFjnVah7G5aMGX7EU6PAacVLCtDjhKYvynz8WSdg9CxUYXXRimL318xf3obLaK5yxaYVbxyoi7tUZ",
  "key35": "Sfv4zVRxUVJncrWz6TPqgwmasJ4dUa5uGJW1yKxfw3jogcY8WWoVdCWFeL7gUiy2haaaUsxTWFeQ5EeTfh67qky",
  "key36": "4noySwzaYqCy9T4Pjgc1MWRoAV3sZSfjm1h1NyUNg77N4uansB56AqE3AZtfyfiP25oiNtsYqjF1FLJC6EP3n73L",
  "key37": "4Z1wTSfqoTdkaJzyWsF4FkHUCCJYo2k8twp2BrZ4toCfYGM7bUFvDmACqodtovKocvi1bs7qoPetzcmZMhDvyz3Z",
  "key38": "5jkmfWycgnmcL46wvJiKjAnS3j5kyogXd3UC3Uf37LPNvdzNRzRKTej5uVsMGgZXaUuBuvr3e22sFZbtnpDEye34",
  "key39": "4jqhiRZ7Kf7a91TFgsUfVazt3An6nHSGAKVj1Ju9gmNt9AGzz8eX9RJB7123eMcyRQzTP1Wi8s8du7p95cRpKV2u",
  "key40": "2U2TT17q4t8ZGgqCAZKaXYokSNtiAMkjSfqkv7uKeudFYR9iB3ntYFcRsK2rA8tEQgkd2RUuKsCik2oLQnNdZ6Rp",
  "key41": "BW852CmS5HhSd83i9purnE9BwQAFrN2vRGhk9ihPmV9Zay5cEhzGudyimB18sMXZewRMeqKAsJD838SsbaNSDQt",
  "key42": "4nFupQiNpWQrY11iP7zzKorUGsMxiKrDDeXaYLWcpghUUa8pcmQ97zLPyCNULNrG89D8BgiHtaw3wsuTqvzFQ9RB",
  "key43": "61XdaXsXgjKPhjhMBkK7YFxGHCtzbyauQZYwzyS8j6LCmyWYfgN6UXZHUwtM1ihJQU3BsH8XYcYFMCmLwptvrGh",
  "key44": "5kLVJxcThgdbYp3F6jYbWwiqqHGbXHVQjQwNXQANNR4fzafmFerYP6uDsLbMimxamtyC9TQ3LdD3tTNgb1Lo13Y2",
  "key45": "4F7idxq59C8dFfnceKg2w6ym2yAgfgUks63RP6RpqRFGtdJhAZJFqt74KsmjkHqXmfb8kwFiuzbnMC4dew7zUreL",
  "key46": "2sBLouvkfgpyXzmVXwdyG4HAobvPJyvTsFxrGBX6rqXj8VvaBRUzyG5QWGQNFtNKwDXmYm7dvoGtkSbn2zkPKUti",
  "key47": "zkNLa4MZK1tV3h8n5cqHyCsedey1pU4VEmQeaEV2YwiTsk8VruVHWoXzNXJqbQn3vNQvpPanM2CsCabLQpZGjc2",
  "key48": "3d91QpCbMNCCY67j8YcbquSNSZfMzsjR8dVsc9WLZks4riRmWKGfY5otZLbM87XVicLY9rXk6BByDYXbNHgMaQSL",
  "key49": "3m6FMeAM7pwhn6ohsckmNQiHkLkbF5KVxMwTBBbi4KzG7nJ7u5pRsXmJx49b4nNJLvjVVfP6gj96jkxUa4AKVpuF"
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
