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
    "537xAcrVeHNt4ZpUn9xNvUCZr6Ps98WG5jaqMs29wsxVsgvHM1kuERAp643gqtbjt1Lx9Yseo57CAKSh8oKEfK8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qr5Ky1Wv4ScA89wMQqgcqTjzJJm44Gt4MH9ofQFreQm8FyepcAzSRfxEzGVhxTFgFuWzesr1YFKdh7Akbxu1Be9",
  "key1": "3o3Pcs84qqt6unLzWuZiKAfpVKVtwfrhNG6EFNTBD5esGuSQgRFLkLfbd51SgoUFTqUPMdVAX6DGVsqrebKbM9i9",
  "key2": "5ymQDDdvAiJRvVvjU88jcZsGdU3UGC4shRegoGbhqRGGufSauX8pZuyNC4kyC7TxZ3CWzVCMxeo6gShz3JjmBZbw",
  "key3": "GweBP1UKZ1fgbrfJk5Rwgh5DD1Pvao9CA3oqRkXw5eSvBwiTu343NCTimCcRNNhyk2joXwVDZR1o15vMRBEK6fL",
  "key4": "5bZr3FXfL7x3Y5j6zdFGwQ6HBreQKHTGmhyMPRs9jfjNFxRsCmG7buG2u8naegzhHNU8xhQJs7F3h4fLhcJLmzbr",
  "key5": "27yD9Mw7n8xbJSq9iP6azHc8ekYoSEtxBcoVN8J8E9NKPT6K5KmooKL1isGqM5eGFQTjhzFgKkp5ee5usPz5h554",
  "key6": "3cVkPnUBbx6Zu6CVvZSdAoVL1rurrRpbxrC73GyTXUhAuyWB13XZF9T8yfVRVkiProAhGvtwfgEc3RubVHk2CZ3n",
  "key7": "35mjAZm6KJoxKvwqc7TLwPreGce6Uh5pG9xgEqntc8KWHxQa3hoMwU7JHAseqvenohvd6hiAUkJkqM2eJs76QrmC",
  "key8": "3Ne1DTQUoArMEyNgxoK7pg1jC91GoFw32TX4teEwpdp4RnGSmQhXswEH1nHLRmyuQJXN9VWUqRXjKjjjL8nfxNao",
  "key9": "4aEu5i6QgQMb5gyiK4NCrzD94BwMwpjhuqND78cLQgcK3pyuCoRbRLykCsDT8HkLRnqxgKjwVTZWztux9nYrYkj",
  "key10": "2pbWkQG86qGmUugSHyhHGbXMZ43shPCUfcokN1SFjHrT8H7VeR3FJ68qJ6ojUdHbqc4s8qNkJkuHZPyHmbqWY9Hh",
  "key11": "2wfyUmgTPX3ganG2hgDSTe5QUCyqZg4aWag3J1fPHXqFyLzV6fHiUjuZwB5A8MM5JQUMhPrQ9N9kGnaJywM3p1YY",
  "key12": "2ZnDoVWBG7GpDNkS9qpWknAJ7xUzxVqwT8pZhPpiVVfWBAzuhSd42d4xMXAuTjycWGzMW7fHKctzqx6gmjb1NV6S",
  "key13": "4TWEfuXLBiaYoZt2MSNZQeLB8guRPFc5nMfcBti2SeMAtKN6sTuYgcmY83rsRuTAofpgmA3scgYYSF8edMunTMkF",
  "key14": "5uRG1P1duzzFHaQGpxYUoy7cEzKcsnBeGKKtQh9LkCM35GYRgyjx7sKyXMUXvFTA7JUgxmgxhL4J4HugkD4tsL9F",
  "key15": "2vy1XyV5Ro9n8FhZZU46VqPbSdZpDsNK3LhhsWPLmyAEvgxp2sgyb6PVtB3yj6PCc1eWrqshppYStc1rC6Vv9eDg",
  "key16": "4JqY2koo5Qa7fBD7WwRsw2uX92Fr4yocmEF5uxiRu3n3yCNwJgHiQj8yAU6cvP2ecmiuaCakQHBi9YDTfkc4b4PY",
  "key17": "jej8n6Wxw6WkTggQEqknHkyzjPYXq5ikF4AbnmXGFhswwtqieaGVJdPpZE7c25XSL6UV1tsvbpj1ir8d5WkU4ji",
  "key18": "5QPTFyqaNpf8YrFJmePpxFn5VkQW44hkAFmrHaePeNS67v149Z5ohP1tbe8Jebq5CryxwE9z41GjLfjCCtMHKGw7",
  "key19": "FehbaWCweBjDMfiyLV2KY4zyoYz1YzqyEUhKCRP26fTr31rcMek6osUZBSRiaxi3dqgVj3T3rghQyhXupqdmXqq",
  "key20": "2ibYBQUU2c4QrVUnGpUt2d3dXoPej5tpfUgNt7zKvQycZfbQsrmZfi2ouQoCh4iQfN5gt54Z3fwLqNd99gQ3HFAg",
  "key21": "3P8eMAAuxGNjLG4JRcgPTkByNNsaFgCPvP2ZBSB54CK9ErQEKvZf2BDaj9wn8LCfEEkVQmU3g5PHyjbPKsUFP5dF",
  "key22": "5BB27m61je6dQFz8Rsvsxc6EVYc1s3tvgqBp4t7yy5WyKhKjayFop6E9tB9qEJYs8QEEGLZfd7cedVrHxMqPuj8B",
  "key23": "NscZAEoapAicSju8oeQoGWzs4Ct4MizvoN68EmH4sB3SS4h7EQUADectyUTGwSUKXHApkjcVVideirHHSPA3zsf",
  "key24": "4fSrNC39SLkdc4hTvFBUZmga8E1rRj2wMZowgGVYpxhZjBhHVgxSrrjjHhoFGduuEGNtLAuBKcZSxbgUSwswRamW",
  "key25": "3Lg5DJRvkeQVndMaoMgnaPrdwwkz88Yr99ttgj9d2s2UYxAYSyyQKzVMs1KnR788BqpxHUxAW3obGXZbmBA268ug",
  "key26": "3sXaBeFwp9GKR5pT6UcpDHeJbfs9SQBpdMUj6ihzEqmnoHnmqEFHSv8F4M2pRhHsoUCzpgJhk1LBbVsFC8afxATq",
  "key27": "53Bh1CRXGo6gjrTDmKnCUrHG3SfKrmwfBcmgyDnE1Hgw81oLXCDAxizEH6QH9DyxXBv52kjUrVYXNQWVXjXMZwt7",
  "key28": "2jziFu5n31SunHVsVgg2Ka1j6at84W1xoMqPUe3Ge7xxcKrJESAWjKoGHQitMugkAC1oTK6vygkkzvofdxgBPR76",
  "key29": "5qkcvp23Htj6q8AXRhkUjREyfpq3ecJWuAts3eb2yyPmSPxGFeBk8SNg6kTiRXwQ54hry3XrztLdMJiBVgspX72Q",
  "key30": "rX9mCtpgu4gJLo2eUVcY2uHt4YC938qbwEPVDi8Z2Lxp7RGoQbiMRqpDSSU2QwnUWt6haDCBr65XaY7kWc8rpAn",
  "key31": "ACZVr8pzNtUZA1wKDSrKAVUoN51upNzsC3rofXoDgDhJkPVjxzVfHhi9rcSLRTSgDdTZUvZmv6w8vuitZmhDF3K",
  "key32": "4voasLP6qyQsZpg8R4mXqJyT7j4mrrrrqTNcVkP5EFSbCoEeTsgD6FfkqAiiHKhejedLGoNkM1vVias9dizioAvB",
  "key33": "4CnpL5D1pjrvzqYYm4HnpwUv3swRrM8kDdxH2awU1xXPPrQkBRW5EifXHVAkeH3sjxm1DBTxsfuxqkSAVgNRGyuP",
  "key34": "4qzCeQyNnZRTJrVhd3F9wxR7XH8kqJHhJDdNNG3H1hoCtoAYgWd5nreyo3UusHJUzkkQRsHj9WP8qMo9shkm22Wk",
  "key35": "5vajdxHQ6zBuVU6eUhpKqjLZXscHoiTMFpdqpEuVQn8qsLbNXUaq2bfp7jYcRLYzsMZCrtbXxzrWaaaW1ZuUxTC2",
  "key36": "2FNkPd3ch5hUFE89ppesaX9cWPhnJhhEDr8kGpgqeqbctzXrL1SPDsW1ih8BRxNcLZvdQtTaLYCoTvRwRVtLGMDz",
  "key37": "5QDXDEahBXBeYqKvsGb1xtuQ2azPRLkut2zaDmesjTogujjCbKL7cxc2sHmLBmjWfZqrp1ADeEeR5L73rrv4i8gU",
  "key38": "xHBKuuXi7xtSQYJuS9UHT7jZUQ9MHNL2DSyon4qmTnQ46ka12Mf7XMdXgH8HfF9KHvoCqJGtrKQhzuM5SnE8pac",
  "key39": "3uBzSFADUHXuMgPzmR3ScjhN4Fi8HRYoLMpjAkyYr6e75unePGpEsUatkm12HHem95guq3KEjqPEhdpct55oVwka",
  "key40": "2ugGf9VrDovpkWCTik1Cxa24Pcni1JsrNjBTPBXNAhFDsNhq9qRnxBFi7sgBd9XnsPArwXTfCwjPiskYoct9ZEyw",
  "key41": "5P3K4xJFwy8V1ujTYjXHAzkfJGpGfEfFoqahLtTkqBB1KzgHBY9HVWNseaMGymwauDM3uGWSVUDWs7PN5cb2gp4",
  "key42": "5QRGgTW4aX1cvc3ghTn4ZkcJhmezvCt51XmNpBphb1rwReZEzaCQYnMf7wQQJJ82HDde37VT76L8DcDz1RnTmxng",
  "key43": "HZQuftWJhHpjupGgsYPA2UMZ1bLwBQo4EjC7VSC22kUceC7cEZEdSEqMoAHMyskCEJiTau1tSLox5CuN3LBkF2r",
  "key44": "3UH8A75M18NfMqzAQXQ51n8cW6Qi2Z39FMLGxoZHCgBDagbmF5DGhA3CjbHKB1QvTndjgt29njyB4DL1CrjeiPnJ",
  "key45": "5o6R26i1eynekXSseVFUCrFrW8gR68vC61tcYAHN67QLUS6kf8XXM7VZCXgTdaMu7pwaeFdtrfK7hM5yyASYKbVv",
  "key46": "4ZVsyExarLdmKaphifDX1Wd4qe2qVJQMXiFtVXvfajAxqvFEszPDwtiqt3ej2XacYjSYeQqgLccSzQibrQWZVqRB",
  "key47": "HnSkGfAD89WH9ocAR1MFyCnsjrJ1bziNoiBK71E3KQwrdYcJbkEtuCXn8rMKbhQs2XPGhbKoAyVYSJe9yTBuqf8",
  "key48": "4XCP118sj9KShw5Qi4CM6Vk5Xr8mwuiyGt2uTZCpS7kR7oZEJ6v7HGGHtpPuSL3YXYuiYCWpxQSsrzRFSCH5pBUD",
  "key49": "5Qg9Ko14RUTytgKtkygvnWL4huXz3Ms75jCTg8zbCP1U9ZuGLcyCGtZWCnkg6NT2cJYjEoXc21HDLGhQshWFQ7GP"
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
