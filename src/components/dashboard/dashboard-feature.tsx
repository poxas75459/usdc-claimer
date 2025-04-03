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
    "3mdiLvgGZr2LrWVdrNJ1DTQbr4MZQVooRrNVUtUokzn5DSUCzT18FGnT8WQT623i2ciPKXWXVQAzpD5ZKcjS6Ks4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hdCfrVqtKwPabVnrbHFFLA1iAoiF5Rn1adArZAbX8qXoGwn8dTted7UV5EvThLnHEBtGJsLy7nEySA6S4D4nHZj",
  "key1": "aLFaiWbtaGpeV2XUnFJi7X5RJsQvoosLZf5YoiWvq6eJdH1npdgNXWFTadwmUyiuUqFYa14gSWcYCee4Z4Rz4nT",
  "key2": "56CrvnrdcMrSPx9UVqiYZQrXdcuUsU27dGhbqFSejSpW7qzyeRSmM9B1cRDuhckkRobGAcZv4syA8TUePaDpXh4q",
  "key3": "34KDVWKYjMoEfDFBn5MEwcTZo7iJxbKMrFTZk29pAPaBECrYvcVz8z4YxjE4w1Q7kfQb9ywFryAWrmJVSziUdoYG",
  "key4": "3fG5qV86cF7Aok1U3Z2bwpQozHxoHJMc8kaAXrAXVgpNkLeBwvd6HidH9oacJYjgerVvzs8mHTuEyq9EA1vVCn8w",
  "key5": "46yFw9HKhJb7K3ws6vcWvVXxciBcz5x3y1Vjdx2jcvGbSm6A9PFdpzbdegLcB5dkTfAjs8DwX2jpHbr15wtP1Fiz",
  "key6": "e1jaBEgjgNnFWf3atnqCSUxLpV6WWsujfU5uSuRyCxGFgVd18Zi8hQLMxUZYuHxxGiruG6eAcbTH3WKJJkHRq8M",
  "key7": "2KvcEkgiUEy2AzzViFz9mvLoKdZrf9d7726MwDt5Bwbo6r78WzPQ8TYhPkJQYeSjVrKrXExbmgXAJ8i6Zpd9m4nv",
  "key8": "5Hyd8i2WkNGu1EegWg79pWtR41ueL35FvJFhVTqmFquozoA5B9LWyVSqqftduKDxjSRddeWZwUwLgs7oKe2ydDfe",
  "key9": "4zHLKrMv6izJUgLSZaWimiXtEeJ4YFuuLSKyGttRwqgAgbpPfgLcCaUuhfjMRBznQpQBTxVPPnqyWUu7nd9bzuRN",
  "key10": "3DwR3dUMbzRcjQJ3JsHKst55WycPKeBvacKvfCNMn5fyM5WosvHsDA4di9ns3by99V9NVM7shDjhuFjkXYswKA7j",
  "key11": "67cjU2C6BbwwN4BCq9oZN9Fg1R2jLdmmHAYfy5VPtCijvnDLfYYQ9vvvpYofnS3C6uYLo2ZzmwtiVAcXCDWnQ7GV",
  "key12": "dvTdm1QYQVe8K2KdfGDga6zzwpZTuvR6GEExBDfbjmxYx3P8FXRCvQKeqiwcJm3Dup29DJkBhjXn2LzzuYchxoB",
  "key13": "24T7qDUuRwT8Qw61j3ffx8fU8NxMQgErwbVNQF4iVUtq36SoJ2yHYzKyZW3GFsoPdZc5bcyfp9EJAVhRArWX9jBG",
  "key14": "3fHbPcrWzCjvjPSRBgyYxHFbYDPK3oJUs2h7oGFhjXwfDCdbKrSh68tuz6EJRN4ccSBJYbfEa184o5RGMxG3Ma2r",
  "key15": "3rjwwoLz2oCL1s1XvajJpnYkhQSZyBfJCzqZyfucjyt5ZvDsC1jbvj2ARFrdHrVvseATfGdj2bXuzPfm5NDWTzkn",
  "key16": "2T75x2VkD6CvESsyLdxq3E6UUcw6byQFFVUJJqqjJHtVoitzsUtst1TM4CfEPwuzWwJxDNg9j8rghtCwHAcf7dqw",
  "key17": "5Bm7McT4fFLzbaw4aWExdtJzupL3xZ9k1gghe3L7eH5x8ePCmrEdXm2owKT9MHdV83jB5bJrkQ5hPkP6bYGWFfbz",
  "key18": "2ZyB17tmijvkwZCy5JVLH7JxaFULTdMxrHfRHyT97Z17Uh7iAZpm6VuFfhh9mNQAKgtC5HaJAzueDUPeXfXh8ccj",
  "key19": "aTbRkXnr13U37ZArQmG5Ev92rdDhqv7dCypv4MGvMvD9jBAt8CcpPxuRL7AuQaSNHLN4HqbDTUzeQLwHQy6CMQ5",
  "key20": "5ZhmGhrv73j28YEukiAQ9Pjm16sNeZPrUyeYNryH3qRnro15FxGj6mQksbHkenWUmzmBzZgtye9D2BVQbJj1Rtpz",
  "key21": "5w7U1JKyMbmsNsBb1s79zyP6BM1YArFuLK66pUYReYZo9xX3cwAwPzAb89wf3guiHEKX7Hmioiir12XDPepTuWve",
  "key22": "VqFVbDd75Ph8MQ2eGw7SRsfVFDFsmtxmuJMwNiLmWbn7Jwme3y6iDsCdqTN6x1ZfddV7cz4g3vs56oSiXZ4nptE",
  "key23": "3Q2UXEQJUminPbtHyCo6k1P897Y2khzUDqhH7bFPKiZCv2gZpJReyka6c7N9oKLNY4NFJ9qGZaMLrMsBoyFcSy5Q",
  "key24": "3yENTs9dcaE4M2vQpGfVSbosuUhJL496WXST3uEH5NBdtVrP8TtXCBKFk1j6rKNv3neT6PLf55U5yv18qYeH8zRC",
  "key25": "5dGGS9i8GtVKWAJiYP6GXkzHHojaBpPmd9uNkg1LiE3m1kepo2XAWH5vbujcyjUdH3C3rFX19cyPZyuUcXTX1BsG",
  "key26": "2L2ZWvQqufxysr42cnopXMXJmQvtjGzKeDNQeqGmSt9yH1pXQh5LydnTWKa5RhU4Mc7TBgeTX5KFyeoDL865VvDQ",
  "key27": "3nMyMM9maabanx6nsxNA1qkGvhqC1B9D9UNRMBgLdohVhUrVoD3WJYujd7YkM76fH9QNYDSjG7cHppLcmqFe22WB",
  "key28": "2weiN8UHsTDBzh7ZZvrifkYTXpdeDC17inzrXH65rwM97C5SCyPdemLxkGcH5p9RgQMPW66oKDpMVQeLE9nehG5k",
  "key29": "5NAxhtBjt1t5iieSSTw1da9ktCGse2keVcpt9hQKw2pr9abHfzN8BJ8GcLtGq1jEqaPReNu7aENgwH4at9VKjDnS",
  "key30": "4py8VAK2h8G31sAXPmtWtdyAADuJy9r9BJW56BN4Z6AVar1aRHSeUwDLGJFATSsBWEj5JzSGsm8RDYtvnyc1YSZh",
  "key31": "4zXEajvzGfTg9RJqaAiRHLJR7ag7yJGEn2dJLUhpxwNHMJvP2FH2fm32FEU4i2RPtwRQ26T3jzo6XYox5pZ43Zxc",
  "key32": "5oQgR6FXXdqqxh7vZc62wtfrjRzHHvLjLJJrmyYRZiU8rvsY9eS5QmQ72eyEcQ4Zd9QQ6JSz4XKqBBLfLuWf7bDT",
  "key33": "5kNrfaFTWEtDpqv4yoJCSNtjzRa9KTfHfQFtKdFN6kdfjo6UTU2s8RiJCySEfK1XMuDWjRSi7X7sLkeqw4pSpwR6",
  "key34": "21jXGWSm2v1vWdfpvsuC64UVdRvW61TXuhsFno3HcL5m8vtfG9Zu3K4ixiFnXWCgntpbitKtZiBFdZg7sGxu1HBm",
  "key35": "44M7CKYpej3cWJ577KJzpxwh5H5nVkbCrTuszctc2xDGjd91SqD6rhq2NU7xTi7w25bTwFzcwVgU6Pqxx5Mmgs3C",
  "key36": "28jaScRXVWBfveze7ZmpUa95eygwMsf4NNYMhSuaZghFSjdzsFarJb6k8XsDg2CvnNKCg9Gndc9Pfc94CiC7Q1KL",
  "key37": "3UotHrb9t51BVEB1xGG2ieeVPscQWxJVKY1rYKFHDZQcziJ3xPdd1tkuCmoZpscrD7ciUUYPg3hJBSyCWjJtMLyb",
  "key38": "vWjW2iRoRfpqeHyjwVQFpLL6MXwAiNM8EtA1WpbRd99mgKvHnQcvJtgwsxhG8QWNd4TDy5UBUqBUUXTuL5otJom",
  "key39": "3BUMXqxMA2ywi8PWnBfkVuPVkS8apgAAMV9eiQ6qC22D4G21sgkExz2Nfrbosadjj59yWZGKWqdMpKmg3YLCEvWF",
  "key40": "2Gae8GPgjXmYF6hx9yMu163ym7n7skhVZtD446pTXmMrGe4cCZpeXiZGgcKdNAjY1DgkB8NL9NL5jxPbew2APNCV",
  "key41": "5Pu2LdSxELjxvbpRmNKAMDVEcKhmQgZJnehYWBduKemK4jr3Wscag7tV9Y1gtQYfrACfLiG1JRamZVJvEe6Swyze",
  "key42": "3S2eBmNxCENT3af7hYTwi7hDWEGKXcn8Cvr9fncKi6BjX6UbHp9d21QYfvEaZJJXFiWy98RDgmaJu1V5R5USsGLS",
  "key43": "5wHzNwu19CUSDnnwCYxVFCi4uZMcsSdFsUsN3XJHzp87a6KykvmaAgVrg2fqwUXKfbnfqjT5ENK92UjGtrQm69rJ",
  "key44": "CPCBTtJwpuKjMzP7dCd5BLPQJmzxEqxpbiHFnd2k8xA6S6RuWfjTbPRbR3uKSe1kHEKrt9z4J83h6LKjo34Ey2T",
  "key45": "5BCtvjMY43UXPAb2W7wwBBp7peZ8T1zQLcHwYPtgzLfxfMrEWUve7GmbcFVSYSzUu4nJZopFpeJNdefh2jAyMS2L",
  "key46": "dTj5J2uwQsRRdcrpY1WA3VQhSmhvQ46ao5xsZDidEn7hDJA7aBbdgoxepWxBjPHWdVj3Zmy4TTc6ZCp3CjuyXap",
  "key47": "5jYL6ENq3W46V391fnNDqrLJEZXSMkM5ahb9XgGsuCkZMegDywNLQLStj2mMMuVRag5cFU2h9iGv7jHMCA4ya5KT",
  "key48": "2B5iNmUh9bv14uG2nXgXv9p499xjrCPf7gcnNjYWCVNHXXntHJAuMWeHDpsQYt643iZcm7WUWrrEsdu26iWzXQd1",
  "key49": "MfXZBjk5cP5oyFRb3U25iRBc3Fz3mvZxxrzjKVU8cnXja4N7oy7Ag1BGSBuPvXZ69oktAW612PtmSDzumKfUTMo"
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
