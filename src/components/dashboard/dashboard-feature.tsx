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
    "Y6CjqTYNeZVWQ5eHc8eDTBwBe7iE4BuLHb4bPe56cUG4ByTBgpFB7Vxtux8d4US5aZgdroAq6jSVkzns4RfuqcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RHBv22UR36ejE6NoWwXLCDW3ywgHS5KZ7FP1AV7hiZZhjY5BgjuSxqqvjNYgh4DgXZdmtrCd3R3JiUjKqyLd6TM",
  "key1": "4LKDDLS9TRyUFvzwxadhEy8EvKjZMAaos3LRmVGJmDkoSyYY57svtoZXb8fY3HsYLzyJDTbRwES6QMnd1autGJMu",
  "key2": "25vwxtzbLSbKYbVhBNMWrBysVC2U1TddvLxcEz3HkUWHs5GujP133S8EzWcisrsbgFLtCfjArk2oZDiGk8BsRKc4",
  "key3": "2vjnnVHVt5wW422zefZwbomwBRsKkhEvBrotWtZz32cw6Tr4BP5pi8Rsh2FL7farvh5ASYUFjyMBVF4RCi1dksTi",
  "key4": "4fWrZg85jmEqSjGKiPs3QYKSeJP4kisW1mz3bULvWMAprix54uiSS8hqjDtVzsKUcRwmFmkTNREhsF7eHipdGQyb",
  "key5": "2zkWfRBZ8BT5Zg2jTHXSickhvEUnPNdhg4VsL7RYhdSKo2mqMUzw63CjsBoFoH1LypKqQSmK4oQ8aVXG4U3wXa4r",
  "key6": "cvm3qXdDbW6PS3UiYMFVMabiXMshAY4GLfB254qSCR5MXZG7XRb8SBoC53MpsGEQbfZzZ4Juxo5ygdgotvJuxKu",
  "key7": "5svVvf9PPovmdb568v32CiNFALkisioraBsDsDbm1cySBaEjPNg3U4wtJVBCoeBLcdjxJ77pSowt3TJxwP7UuBkt",
  "key8": "5CEuX5S8KquSB1zJhraR1PLQ3fP1QmTnH3QYaLxckAxNje29mrYTxxBLsHes3SeCoCxVfgTHJkNMu2WkdKiqbuwm",
  "key9": "5aphrYfNgiD5fmjj3k8Gx4DGmWK1nmm8EcZuhvqs6Ft5xTXyq9WhEikVcim8WwmKKBqabuXYKkZ2jebeuAaog9Ut",
  "key10": "67UJnRwEmmdwk5gCqQJTwvdqfKJgSKCT85YnpJq1sAKkRkPrftPFDBueGFvkSPqEvzD28KCvGvTwFnMWFFgGR2iq",
  "key11": "3vWY9e7TVFwqxDznLujf2FXeGtYyQM2jDFCBBSmWb5sbUjv2QvwPvWPPL1Xefujh5xM6hVYQnjegQLV8GoCKQkmU",
  "key12": "pmxxRmr6jvVQMpYpKzELNdh9RhmhBxusRDr4ubhUPW8x5JDzRZWnXSZb7pKheeNDiqqnA6mm5qubadeSVXFtA9f",
  "key13": "54FWfF2rSMCyHhdDe3nQ65nTqMsA3yu9ENLp1oGgYRrygSjCGWYmVfCQ8Pc69u59nnuUJDWefevVraZj5sPRscUq",
  "key14": "4QBZwRXPRktFG1tkopSmNAb21sfkvGNYyTB9D4cdNadSXzfBe9opZkaDbScLBuETKdwZ639cy5pMVjZnv9oyETMs",
  "key15": "4MuJUKFTRPQzZx3c4VSoHiYcCidH8DxQ7uiTHTuyKhfN6FAZ8thi4CK1DfXiP3YjUkTSuaHbcpXcsSoQ9vX72YFy",
  "key16": "2pe9urURcbAPgWB2bWo65k4stAEEezvzzzX18D2u2UnpDe2MVoMuA55Tg6p2i25sBw5JkFYq66cs4Bi1bvyk8FPZ",
  "key17": "5cyyQhcYdsR5rarNByTfrTVMYLBg8hg4yWPfpeH4BYfYWmGUxWAvHWqkbZW3xLgR8wmQ5nXGeukbncCgnfM8WTiV",
  "key18": "5puK6m4mEgqR3R3KrUvTmANJxfmCu1X931XeNoV7Thugmba9p5WZZ9TXBrLH4eDUxeVFfkzooQxwp6Rmc4zRgMCr",
  "key19": "VhFqM7D46bDTK48hDVnLZzRApx3TpPb3m9MMYs6scTH6RLRMviSVV9uFoTzY78JR1iEw612gvXZ9fKcrD9dCH7V",
  "key20": "59LnUDb5L4e7g9ffXya7hcqctMBoAaSVkbqCMSbkLLdjwbesPwLWvKbUT6co5U9cD2Q55vYCKwJmQ6gHT4VAb1eZ",
  "key21": "28LmbepmjAoQsN8K7s9GFJJUSvjhJkQ9XYHc3cGB94KKnLCCukjceY7iiHh291Uv1qkpmWa88Gf9ZH6ZHn2FWhrC",
  "key22": "34NFsbmk56wiDnFgghXneut7Xh2dwhXGwKr9NEWq98urDioSvo8Sq6ZECe2ZuhWWo2QJU8RUKiVnR3CkkpZcTXkv",
  "key23": "3H8sWNDTHxAvwAfAhccNy2VARJeGbkvubDpaP1VUMHZjRVhbqSrmmsuf59nmqXvqsoUsSNDes8xCRdWsgkzwHiab",
  "key24": "3eMhXEdhbriomRJPtVAWUUrDXSjeVGGsVygwc839q2S2HRFDXqPrc1GLbfAfxji24ruUYnG39STNJLterPjPGdCk",
  "key25": "3s7CBRVdLMXxttC9WwXAPth999JFmg15fYqzFhrG8XwkYafv8m3KXv6CNoF7Mo7b4kWtYoFKAWGb9NpmAhQGfNCm",
  "key26": "oZTXNFejMro3befB3b3GsseSRZ3ECNC6Pn6ZXMpNPHrSaVbTC7YeJZw1reCqXTgzfSYbR4jwHALryW8hkytPfZ3",
  "key27": "9kH12btkK6UxpCsyoWaA3jfMSw4FAvq84rPGiUyJ9WQpbxfCnqtrJz4ViSFjnSDGKGFxAva43NNNghusj17YTa9",
  "key28": "5PioZVTZVfbhqNwGxFHL2BjZtoKhtNNTcsGWzCbsStY6t6mTpJRvapNFoWveoLjJaiCFwgX797Xtu4kj3qnfQ1ak",
  "key29": "5uw35jpsTQRhkf9Uv9a5H2ueL11ABCZ7MgjZ4RYD7SiCUo8gA6mJ9Pu9FYHazNoiLmJr5y2iLGEZ7rCgc8R2hsZB",
  "key30": "2oHfJdRg8ASdKjdqpK4LqxZaRtMqDhBqBCTSBRxR8KnqNgZWsFtT9VLXVPn38Mg9UV1RuZHN45Ks5BnpCUMCEHw5",
  "key31": "4cdAknwXUk3nkCxXL7YPPyc35n5UxbXv1xvdnvNpuQicK4EPLp3LxaQu64LruKwE5BCTvRUU4GCjVg8zu9KYv4ZX",
  "key32": "54U21XjdCSekBQXZvegZn6wdWFuVmpdJKDaqEWZcT5HssiSQcJfjiWe4SJBzjYR8pduHNX79rqrFyoiit1tzNcrS",
  "key33": "2Q8rWmKabuUMQZrMMBPHGXDeriupWbLZ61meJLJQxvpYuTXHQ6rbMBQ6HGQ2BRpskGPxnk6ZJc4t7n6vXZz1y8XX",
  "key34": "3UNUX8eRRobu5e4QJPLA3uH4429A4dM18gt5Hnw6CuzziNTfjS9inV36HtFJ1rnvqaXXwQmLMYP89Lt3eyuECgM1",
  "key35": "5skAeNqUjneF6Z7qpQMJJppWqBjZVj7kPsC1AssFaMt2qY5gZSW1MrPos1hhJbkB7h3KEUJt9TZzZHWssdu7sfJH",
  "key36": "xQwJjFu7UuDU9qULr2THyNHxmbLthhuoNfjMfDRtz6QQKpBHTV8n6pZbeVGkQ5VXB5pUwfKwGhRi3yTafaRGeAF",
  "key37": "3fneq69EzQE1gnc6PZmyS3BNxP3koyrgMgdW85mJodBZTVwVV4ZwfDeB8nyiNfCZrtjLUNJ5yXqABgSKnfY9r9Kh",
  "key38": "5RoNfCU93GXFea8U1w5wPx6Lr8NiaJoFnRUhtKZo1FPPqZRkQAepww5ziGSREf3k9JiGzbaSH8JY1hDsZnjGeyku",
  "key39": "4ajm8KoVaSXvr9YHG9TRQLrmEyFkhBDndpURmj9cUM9p7GH9vRq8AVStGnv4fcQLncj2Zzha1pniV7XKnz2EFFhs",
  "key40": "5kLpW6Lqxfk5A54FUjtfp1wPNxdhpEJss4USUnAWKyjfnauGm7Sbay79NprXCBRFiunFtTyNL2Mys6GLcGbVgjRf",
  "key41": "Bmz5EUhbTLTa7LVUBc5gsAsKk7XjBfhAuFwsDS3k3zegYX92PHVnwcJxrVLGNAB6HgmLbPVedb7k2jrTFhbtP7J",
  "key42": "59yDoiHf9kveVMGxUvxkvtcVvk4XpS2EgzZ15t3EZxHnTiuFRgH9atwbYWCVqeCrB7rUfkRKGrH3D7LzY18ApWqj"
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
