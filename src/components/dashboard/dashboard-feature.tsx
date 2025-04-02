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
    "36wYfLE6hBMzdKkv4sQpDH2NN4GSX6GaWHj7Gz8g6ax6mtbh45aY6uKQSfNQsQcKoJ4dA7J5ttr2DY1qm1baEVWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35fSrxV8rS3iPcNdB1TZLsnnyTLJRvpp5eRS7csiDNdbSm4MUdju9tvkaamNGrE5xPig61cqQQ3DucAUdga8TBj5",
  "key1": "4URHwFVZdkWtDEPq2ecPM7Yivu1AvD4RAkBSfefXSA9o33D7kQNeNKTGVMJn5fVVtsJiYnNu9LLVyd2Ab1XLAogy",
  "key2": "2mHtpAnrSrogVMbjx3brSm9n2KvuiCTGzLkiMyUwFSEpiCt4UYirk7bZ85DvQD8ATxXwHx7GYAtfiLAnPJYKaCWN",
  "key3": "2r8XcKqoJs9tF3soFH8qXTf16Qmzh8nAKSjF9q5toufNsgxaN37qrXxSRoeaxip3nXeNoM7rnVo15C5L5RVh4hAx",
  "key4": "2CZRUYV6XMxsumpHzHrohS3z13PebxCn9fm5k7pYwLvj9MpHtvCELb9bn49XTK9Eza7e4eiyN9uSDqEZ32L3wUew",
  "key5": "3LtGuv5hbHUL5eqw9DMdDS6t4L5vCyWsfvhfzP9qLr3LJrqTtoeQW2GJDg6Qc3qbCJEqje4ndyRrcRfjCLyehzm1",
  "key6": "3WTDQvX9Hr1vN9mN3nLV5xEb1YVK9a5LyoNPyqigarsjdaPUyatKBWsJLKt2DEPCXN3SLeXaTdZYU2J9ktcfaPfb",
  "key7": "sxGMZgsofShPdXxnxxo9Ng7YfBgm9dzHh3xAv5cDAQPQwPvTRxiyfZ3zjy3m5zsEW3fkHBJfbmRaVHhmyWHGLH7",
  "key8": "5Rf3KHThG81tzs8NnfSFBZmEiL6aFEG6pfNJ58snGg5SuM3XjxkEZJmT52DSztsMYE3H1yoqaxzC2gFRSzgkno3b",
  "key9": "53KMNXWoGyzKz4LGFaGu1dGsgc6x4RwyvphsjQSi7Jg7DJZUzxNTR1WhsQtm8dUvaL88Dnco45z2TzUHCpgH9YzM",
  "key10": "2ixfmTvoLCwEq4Xq2JEdU8Enr9tQ8fQHA5iAf8ycn7M13N8zbN7hijTkAmad1u3Sd48tQ2C7McR6LSMGXr62VTRn",
  "key11": "c6KNmJhXfRPrrJDsAJ4NphBmCDve4M4EPb2K96nF38y35eKQuEPr6dmdUkEkwqUZVvsFpaNHg9UzH7AVmnNc7ud",
  "key12": "44wLrhXpkAYrBa5AN6hVXMN524wc3rNFX9QH29VrDzam8jyCDfc6Qj3K8gdfxquyq6R5ykNtzQ3LRjEnu36qbqFX",
  "key13": "5UBD2CJeG6yhXiM4gfeePs41pFgty3nZUgbSiYNE6F5BhVHPEGsrsEbDP3zpN9m6bhRWtiZZBjdvFBTTSUwW1Nh9",
  "key14": "5YVCNjk5t5RSTGvkegGftkNfbHUtypXRr3NqTtzFV1QBYt5wLvXH8J33APMZDNK3TepKA1da9sSHXWMqHYy7MniX",
  "key15": "onUZfG12PJKLr3ZeMCJUVAoAYEhC2tkcZfBwieuTYquiW4ph37wqdtCjNEo7Sj4rjNAr4bRkmwcjDUacwSeS4yB",
  "key16": "aNkC6Z3rMUyWemsVuFG49w59sre33U9F8ynqLAGj65ajXnHu17XRJtP12SUdqKzmSa43ZLLbAfQHdm6rcrxPcne",
  "key17": "5YhMFVuCgT9ZZCPVNURSDMyHQzjPaps9yo7nV7WQRXv2hmqqAx7UF4f4iYyJoYMEcAmJH4oy2L1GoxRvU6c3RvC1",
  "key18": "3ZHckfxaNG8ReHQLzDu8SRUpowtsiQENrU788am9WtSqGxvBxNmNAGBn1PCRvhhzE34pksEEUTPs2Txfz9KUsfJF",
  "key19": "5Zqi9gLCgcqM5kbPUi9D6cFuTmBw6RkudEWDN2wpsGUCUQe7c5NHxPLiLidkjhJb2fdskLvR7BgwNpuG3NhbDPFj",
  "key20": "2XyJy647jUc5csajnNdbqhqHw2cgNmEdoHdeb29pwmqkU2s7px9XiKAZeQoERGfQXiuhVofbX9ZZeFf732Bu3JbG",
  "key21": "57ewwwgcZyrBXjeMv9MEdvELAFUVhShBFoDdJBxMQ3fKi14mDcrY14byAagPzYG85voamijNEvUEJqDUibU7M1cE",
  "key22": "26TXDx46iXbQbqEVEL9AnTzUmnhmJckg26L3FtMYavfeH9TRc5QvMCS4nBrtSq7PsYqcS3Xd5y4UF39CUnfw2LiV",
  "key23": "4cRdKmKB7dXFVJYCYFxcyznttQuGY9c9koVvPa1HyguTuLEa9GXwenETjpvkBoBSy1sixTrFrw7dTjnzuRffdNfj",
  "key24": "38u3Ac8kJdcSsZj6bCupLsMd3LxCBd9dzdZUMh4L16vjk7kk9upB18yJjBJP2Wrn85pB3JnYAakVj2PoJNVz3cLM",
  "key25": "2tTmqaNYbmAw52mkp7Bb2CazhkkxFeGqxUrtzA8VuWMn3zSTFFT2FCJiT78NJHbWbKKHW1pj4uK7rfE2yfYqAT8y",
  "key26": "5SpFXj7sWABwMFqcQ17B7LD2SNbMaCHTWPJz5PQ1vVCrQ6nFf47JieymxNa2u8oLcERTRA5u75a82vLjFDv8qYE9",
  "key27": "5tjdsuWtG2ApK6hEH2Vof5hmrFFz3EvCEKf6ii6DuBNRFE1w3YtLpmbgogN9VKC3PpTNmbtDbRUBhaVoMJuu6z4m",
  "key28": "64eQsxSyub6TZbYwWxCsg7UudpaCDDSFT2rzzFUSZhkxTK5uZi3LY7inFrkLRyR7R13hjaHBbhnj8W54tYTftbuX",
  "key29": "4rSUUVzi2WtUBcoFXvhRqUFiMQb827QbcZ64HdnLd7ay2W1CRf9kAPDSTG8VBFWkni9u38W4D19uFpyhoSWXh2oM",
  "key30": "4TrxkdFXToB11bviFzLHWyMdcYEecxSrK62iu9rCbP8pz1BuyHvLhUAM79jZdDSParvDodSvXyGUuDuANbdJnTgi",
  "key31": "y7ky28oAGYvNEceA2JU9dDBvdhDC8mGnvUJURELdqNkbRWmj9x8oz8w3mG4xs35of5YttohT3YKo87UGU6bh5vN",
  "key32": "49z5BC84GYGxupMBrWmdgX468tpimdRfYNcQK2CX2dKdAHxMhuPYNWhETP4pTskRYHCT1SLRxzMRmd9G5dQBNwt1",
  "key33": "5cuZJrM7LPY8rLQ73YdrEzX1fm4g8vNdP29P15encdJNXjArdo1Tp1iKu8pEXMoiQRdSeKP9wde8XpQBFteqEkXA",
  "key34": "3hgWGCmSWZvnCgr4Z2oyxXR8yiuvvPh2rLfMhLfUQJnb1RYioABFmLvTckP54BZSVccjWgUfqDdy3FRbVeNGgC5T",
  "key35": "KQ2HmhAoqe9Pq1MY4yNP3PYA1zQeB7B5hjYm3SuybQA8vDUu9je1jnSMdFXLvi7dT3iFywpMBhrg2po6wx9qGcE",
  "key36": "2yujg1LZQzD5ZKoko4RXzuzidbteVeRKwgtnMUEnbmqkogMcXMZhXmKyqCMYhvxS2QViQ1ebNdDMqZGv4Kamy2Lt",
  "key37": "5VLjgAF5xq1wYNHGf51BZPyoUF5beLcjzD2gMJZyoxpG8zby3PsfW9Fe4AS2YYjwWEUcuRSBiViuGtvFCV5YD4p6",
  "key38": "5jDYpZpaP1e3zbyTKTwNqV95t44G15aNyQWmDon9xBTcV8NDd3BBcWNxj4XopvJaPMLWmTsMukKiaqAN7zqvC9TV",
  "key39": "4FfZPo8mwETCsGrdbB25rVoQiZTiNi9uJukrpBB6VZgSe6GEHfpyCVnYhiouZP1pejKYNTUPPvXHgra85ExuegGq",
  "key40": "5KABibr9r9Pqhzeuasgo9cAEhNJzwnJjuLUNsJiW3Had6N2ijb3ZgT72kPJ5A5xJSqEZapLDPXoi6zB1nESUyaEb",
  "key41": "37nJyBQfkZaMhA6pM27u6tPYuAz7cH6tYxwQ4Ummfdo3qjpVWTsY8qCdqk1nDyCuJJk1Aegc8DpQS5XNatCNQPDV",
  "key42": "4oDyyfTnugtv8Gi1RHmUZ58g878rXcsiYxC61cXMfUeKXBB9jrP43QKDvgK36wtui8M2W1k7d3KjjK6zkdW5tCGG",
  "key43": "5FWFWXsDFvAcCANU2f2r78b4mzGg8dStwpGNCRFfyS5ioGbJ7iCyAvGoTzmuAcFeTj4ubrWJvFMrvadRzsuQDsqC",
  "key44": "2TQxZ8se59Amfuq57zGg4eY9QBYd7abfxj1JEKRPG7jtZfRh9AyyCpMMJjtnnCMQgi1HbFsHBoL4Z3pueHpDJjYk",
  "key45": "3yjProgd6DrxhPitRh4tFjMuHmNfgtShTgkySZrJvDV32oYMvcNstN2nuiyNhZRmmfuZyp71J8DpKDgaPQtYYrRZ",
  "key46": "D9qQq7didEU2oXQz32483F8dvjQ31tC4Sp73yAFDmsVbHc6FuCNv8Xhg7irQAs8e2fA1PAy8A1FKn1sXusH6UFa"
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
