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
    "5mfXFs1vp3RDExY6UfDocJEyZHhZxDfHtzStW1mVPFVw5DjU4cXHxsAnyx2G6yTxDataenQckCHi4uscmQ8Y2NvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bYgMC3oBctAgqX9frjHBSodomSy2wEm9PZcduwFEzYFhjSwcupyDW2qD7RRWauYTapyh7xLzuQvSgugHDCqvtJi",
  "key1": "5SoCV3mevqoGvUn1hwkG2pkauEpi1ecYA2nN3rpKMuEge7xxGMwJfaEyz5YsrHksZo8Z5QnfagxeLETyQCLAFvnf",
  "key2": "E3rjYWQtyjUx9puw76bxkPuYkV2ne55XvxkkSLoebJFdo8Xuc7zttAZwHvHQja9SwpLNQZECVQqJxXQs7V7hWEe",
  "key3": "4bziEQ4zanrpzDjUqRuA62iZH83yZCmX16PaZEiv8UY5PvEpWDw7SRYU23xZdDEBNkUmpGe4apHuTD5DrxiQeBMS",
  "key4": "3s1vbk5NuCS6HgBrCXN2yySwEbsKM8AwkjbKWZvjeUjUYRSEX1SJRRP4KV3YXLDcLvfi9x6mL9LsiB5wPQeaN52D",
  "key5": "5A7fiz4QLdrSagQDkuKvodkPaRtGqebXh7181yrLia1w9KaQdNBQJb6gzgqgHvHrL62DTu6h8qdRhFhJCdRRsBBx",
  "key6": "4bi9FpKq9cG7roLbE7iT6NNSZaktNkUuGamtJ1F1XYzH3fKwDaLQUPoCgRxyouoqE9U6PvMEesmVhz7Fu3mk2CGh",
  "key7": "4YhQ2Bw2d5ZVBsfcufpi6HkEytEXFoaJsV5TUNVuVD17v8uarr9158bGfhmcrvt9P7wAgbiupNrd1nwUczuSRCf3",
  "key8": "5nTvG2zoxtvWu7MRTECDLLzZNq6bKV98eeahgMpQYxhSwJiAHrrLStY7BgMxjv3Xbcvdtg6Av81qVULFhUg3c7pQ",
  "key9": "5GtYkvA1TycJs67BQjMPRMyykzRPH2JuLG3mwobiM8fBuwwprYRj2nXetJPi3aYTGZxqwk5dkZaKEBWCrrdcDXyA",
  "key10": "3UsZDffUSxgcsyje3Dq1J9YWy5Ng8cu3Haoe7KuG9Hec9uLB8An3DaAbnHKayVMDTcBxNyAc1A9F9fNGVcYVRn4N",
  "key11": "2b7sW3TDpAsqhBrKKjkYmqDJpbqrSebxMDaLg5esogYnoE9S3Yi5TEUtsX41TjFHYnsQhZWsjNCxN8sCv6yqjdFC",
  "key12": "2TyFAsCfLAyYwoEVAGQZn49mM9biA7oGcfeJZ93uebfEwq6YGkETd3F1JnGLWRDcCJ6H14UBhE31DhdM3anZfEsi",
  "key13": "4obQQLnUmWvuCs5DoA7V3Uuxd4xa2hzsexT2tQh1M9wcniNEjpR8WK4iUMVEifDbANW5M6UHEEAQD6JU8UGmR8uq",
  "key14": "4cFY9unqJaYfqBJ4q6ogahJfFAtdWxVfmuNSiHyQr2rZGQvKBZMYka1bDJn4u6MN6aEQGBgiMbsZaSZbigiajY4J",
  "key15": "2PNYMxPZ6X91TgYHgkK9YU12h9SrfujVw5QJBU8ExLmGmPqDHud6KJY16NLiudkmPoDy71gyfFbeaX9ChWvYHrUG",
  "key16": "81AXE3QibE8kpMjP8P8FJ6h78ctz7HtFWRKAUVL4gsVrVsSnJArSRo3pv5LNzEMw3tKSSWdhRq8cKWMcGGmTgiq",
  "key17": "5nHfyCCz1qxgHpT4fiMgnyE45VucHhSHs9SSC8RmkvYmQh3LTVCgoe5dc6pEg5WsZuFS5xW6ZLqxLXQig5F8sWn5",
  "key18": "4FUFSoY8jdWfiSGDMrQwqhDTNqNGmP2mpjZzpK7Cuvt582EZ6G7maxJCXZeMoiJd3ddUB815WjVLRcQNS2qoDZji",
  "key19": "5UsDcYo8dp1kvC4U2EwugcS1rZ9e9z1EREny9JE59ypa2hEa2aG1iiZL8rghLrZPScr21iD7YnxyHRgQVFNk8MJE",
  "key20": "3UJayhT7kWhz1Vs8pqA3FQMY5XsNaWkajwGcPAYjVXLV9sMZ54iAgRGRgCBxTvCYUk3eNQT2DKTji6SprnEAoEPW",
  "key21": "42x7T12RgrKFE66mxN26D7o15PwEoU59jQcP5vwXjhjdnPFSCATr8hu3CSVC2XG6L3WemitDyA18GG1QeTLpjecC",
  "key22": "pcKbKApz5wWsVpeSGNNGsSdeNybxuvG9akcmU4f1MoSWJtqpPhMEQ3ebKoHjZaXYXifj946yrWy853RCp6bGLjK",
  "key23": "JuYDGuiwnwEd5ahR18Eijh9QxU7fdH4qDMVgG7Kb2HGxDBt8USK5p4uZZWFsUgyfqa71Gm86BiVvstgqzHsbnA1",
  "key24": "gCg5pBFf3zofj2WCkYKjhFTKJAJQd2ZwqFGuPv7muYZ2BwuzW18LSRZUV1a6KmRqbor1brrmRWxNxHfDa75U5Vk",
  "key25": "3vJ9x5knisLHs3W37HUYibCuw7ZpF7c36qZShgewUEszBCLnwYLsJJxSey5yZCbLgwPj5MKuvsjWBTs4tThN4XD5",
  "key26": "3dp3ygS13ACP67L8bZrrFeofyok19hbYadNkqhes9sjd64gDf6zz3UnSfxDsYQKf9uW5EcABPVCE5Q6o7Hxa7KZK",
  "key27": "2T41G9FqPLfP2rLFKRQXRZVGZLy9MP3mynk2qHagjz6xpjyzV2AdUZjrjdx1WrXfH75iBMk6LS8gFxbXGxjBEkUJ",
  "key28": "3saATkfTjzN3K6TwJumCL83MThFphtLbNuVdQbnfUj1AE861pgPVK4S5fNe3Et8CKKJVMLxrhSCuDMQkSZsELq1b",
  "key29": "5h9FRp6MHppxMGMpHeHg97aJDtKyDNhLgHpWeyeR2u49Be8rScPzH2VcW7twx4mKuQQFc5iGE9jMSBRewGJHJ99i",
  "key30": "5uAbHBfjpMwp983bkZLRRYTcvXaFhyiXe89Le6aNE7ZSiFfWhKbGqFpyCRvrKEDm8LDiHCvaGW6C3UtFKDg5eNwr",
  "key31": "4fqj6mcZkAkqLhK3mUHDk4pVfnyi5HUgXNZSdga7TSUEKv8a2ATy19Z6U7XRFgNWL4ymeRRFC1duSxz2txowWQzR",
  "key32": "5ZwJZvhnXzCXmW5wPvrb9S6fLh9dsnE7VsvqFuVgURJNJwskUgQjvH2yBwqfjXrCqSBHavETxQruEmqc65jyeSpW",
  "key33": "Ubu8jBTRreyA8QhVgmZcy1c8gazCZ92FeDp7Byp1NFFsR9SgGz6omBwivB2oBhAoQu9T1jZwZRwYqtuv77tsVU6",
  "key34": "Aw1QYPW4rZTPioyLYijqYsGktXaxJHMTS3udU7AYv7u2tNV4giePBNRityMGKkfYLfnYpHNNPsCdYHgh1YLufWQ",
  "key35": "2HyWDX6okhZx5d77TuLC446e8rC74KB4iWy5YwXTNEksB5yGrRquap1R6UqHviXMbyXEAtzRQ7BR656YXQhmrwFK",
  "key36": "zaHuaPmKgdDEeZnNUkF5fyVLfpESPW7AmJAUDJNp8KWQgKi8bYW7YZXrYh9zafJ2Apgxcgom8DTkPXTvjEfNsMM",
  "key37": "23LTc9cDsqoHZr5ZLcsyKjnKEMkrnBNK68vK4YHaP4NmaFfyhUBe1R4YYo1cVe8qAtA52KHp6dUa5t3TBj7h6M4g",
  "key38": "GcpaUMNq3WXuj6QwNZftDzYANkRVZTwkC9bvHbnzJuTUhSX9iPKpagRj5RrDwVN39BsLCCvUvRepFnZ64BCfc16",
  "key39": "4U8ycMj8FyGfA4iSCHvGLBRPTLdVj45qMXXGzkWsJ1shQa649YByvERpFpB6yroACJ927fnKEjNC6e52RX7w4epE",
  "key40": "3Kq31WpB9Z4NRHC64oXxmeVNbUx1CrAQ2Vkhq9QMLE46TChBUcRvEQpEb33y3LT95FzyKQKPTE9GZUqpTpq1SFJD",
  "key41": "2Kw5vLuNtUsnCRdDnzhbTSDMKkCcKDJZ7RrB24RpiwLGgBQ5V5cBEKkz1YpV963Pz7oe3igb3Y1rSmxTLzVjCQxF",
  "key42": "3evvxg1zXfKgVs6DQAwcKbsrdH4jWmnUaapLQZCGuE9m95zAxD2puKDNkxH3FGJwhNpVDp5iszkFbJ7rNGy5NqnB",
  "key43": "313Z84KueqouNcubeYykFaXW5eQG2Do3VYthcXjRu4FLVuiv8B5snNVt81ttAyg4kmJpAEfg1SJ7Fs86LMDuDqkG",
  "key44": "28jMy2zEBN9RuNZKSzeoRVPBe8resTb8g8hGJjYXdvSjYUgvxbjKicNDb65zbfKDcRy1uixURsBqHBQ8X3DJsPvY",
  "key45": "2eZtUznFodDRxcNuh8EuEdYyWZBH9CpcvtTFmyQpUdKCkfw84Hmbk9mMrc3jATmnAydE9c6S7dQAymhRmyuhQdFK",
  "key46": "3jD2asdHWqvgFnR8rybtGwqE7SMJRLWXZmXLUZdGbvA5sLVmk72DSLbFEtQbp3XpS22A9WQ4TCq5eXyAU5aUSnry"
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
