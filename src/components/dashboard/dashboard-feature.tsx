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
    "2cRHf3XECYa1Gtvg41ut2FqPLvoBcUqTvf9cXx5qtDoAnXmraakxTZsZRNJKGz532zj54FR8BFw418Q25NuJ5HFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xvvTJfpEeXG88Q7UYDw8yFk17i73gYc4cdRu9osiHXt7Ba3uGJoap7pkpKAUW1xaKKeaV8DKNzUL5xS7BQFcbXB",
  "key1": "3H5EA9X3ACaYKNtjAt7pzw7ifN8xm8TQ5CqXopJFLeM9xaGNzTRPG8yqJYc1LGhCU2xwkUkaJDdc96k1PpSNsC6H",
  "key2": "2ywpZa55BJQw6HLMrDDzt7omFhfgf9ZBVAxphUysjTBeK32ZFWyd213L4SEDnjsu8bZGKgBJs9WiESdKs3siSBou",
  "key3": "HPubbme48g1GLJoyXNWWjgZGmKSoeU9RTaQ5dXuD5T4NZCYfp6SiegocDrWDKZzRttXVZWhSWMoSK3uEVuY6Vxk",
  "key4": "5TtR9cNy9ZJBQGrq3epQPuqbGqqtauEEUQovQp8C4sxYNACkTetPFMhunRjX4BtxcjHoFAFiz9XeGaZ8BNZpXiBb",
  "key5": "2JFzNSezw9YV1MYrLc2MetfgRQc6GfQzDLxu24jUDjx17njDMSis2ZYDJAUppQj53C7bSQFvmrtNvmWF3LvT12Dk",
  "key6": "2ef2Tdkc22fSNW82Qdska5eccaoUCXR6Y9YLjyTezqJ13Y6oHuaMSUiSuHDn5F6MWsqGxpwMWXrQnwwvziku1uwS",
  "key7": "66X5nL5DKgCW7HsYS3zoDst5xuRCMTHFTHs9oikUKykxhnoD7oAQq1RKmfhiA5VrRHd9Fm6v2REpqvwqU2eDgZFg",
  "key8": "36U88azaqvBMKff1yaw2ECZh5hfhg9RMKNMsZLruZDNfzAwy61ws58MsUMjE2ur32Z773Q2wiCrHZ58iUojBLukK",
  "key9": "2gwXQZCsaRTEGPQuvRKnXUaBdFRNrM5hejrhDzXP6HLwdFKRKcfPzFTva8cUJQtA2zhxGM6D13VSk6VfvdAYRbqE",
  "key10": "59JFB7hpGRLAi7DMcKKqtW7gg6dJm1Lx5K8xHvgLGzebSamkHGrxAvAb4wK2eLVJ6mn7U1UhkBTGittqEnYAgdqw",
  "key11": "4fnm7G1BydPYG6cCvwAN6wQq6scj2LLgmyRyAw4Hotdtgn7TeDr2Vz3wrGiFunSZi5hVSHvjFo6bAHs3bJzCPZHG",
  "key12": "2KGn5YEJJSEXbwHXsgBUwJkJcYtxr7KUjjCEUAMiijekuxot1FodyzhSuC7gcbjLvhT6uyyv5Q2pUGRVKQwmg55f",
  "key13": "5dWSaRguFTtrX3q7HEzsmczVeEnE652yNWv3QAiS3DHunSuivju7PAgBSsJaZY5pPhd7xG58nFmdwZgD2XvQVkds",
  "key14": "5mx3q5jPyCivNCA5oRDhA4iCy9cw8uUvcdRK2PNCxsognMUctenLu9HmQDNVWa6hTPKPAxmw5aoMY1f1bEUaUvYf",
  "key15": "5x6eYiekufN2wsDTrcnt2WtSVSsEjGEZxbLRvkwvRaH93YQ1oHzmmVK6XKDQJkiT7LfxAbzi9VkaYA9ezpa9PugJ",
  "key16": "2h9un3JC1CNJUsDbKMgirVdBy5gLpT1eb8GzAD2RLoRxR6wWNtGT2kfjqAvxpYGcMnuZsuPxCeqHfKhVmz6sZn7o",
  "key17": "3qRdJ95njZKdE8Y8tvi95ZiJuXnA13aVxfBX6CQWAJigwofCu7RoWJzZJ2N5knaoUxycmnri7NrxSDY35FWsSFgZ",
  "key18": "2mA3GHKYjbAmCYptLE6M8fF4gMywv1R6QzFKP9mdY86G1FCxGNSwYqxrLFqWrJ2tPQsGvNVWtVnrvyd6Pedr7te8",
  "key19": "2xYZ7UgDGq8KLQidNdvP9rF6fQKHwXkFwE8Hiq83EBwuJiHHEoeKx2EG47zXpSmTBxcpuAxSaaUjPJP4dehDXAS1",
  "key20": "5w7i7PKCLGhQEf1mGu9PtzXu9K5xyeS3gJxKgkMJ34THTFrhubQHwMQ3Dgvm8J722T9tuBwSw36kJ3C7pyfPYK89",
  "key21": "4vERXeBRqp2oKBEb5HwSYKnJt74YeB7Vc4r8wa2oJf9FtN2XUb1gSM6UAmYF1zmzAiHaaz9zAP4LsWD6AqnaHgPZ",
  "key22": "3WFhmJPhDD2Y17EEPh7SVKUcQiE4fzHUAj4z9uZvC3Xh2RQuyezm3CtU861EVyD24t24tAJ3ycsb2rGAavpomvr6",
  "key23": "2sTGfBMd8sfR4YXzSaSs2o3cTwXt7i9pJ4G5vmpgsndCv8EY6r8KhKzaqCCewJaRefRuBVJzQ1XoFE7gvkyBxLF8",
  "key24": "4b4FN1237t5ogYRNaw1MhUZk3ZuLsXDJrcMRKTJ2PwZDVPVaqftxTsm9Dxu2sJGinvauNmgRchMw9KgFgGAM7qXa",
  "key25": "vHv5y1vffKf1CjX36en5sxWzWDUWVkYRbrsArA16JSEXfHUey3YTY1DyQQwrWuTNjiGjVmXBxq2LpXPpdHvPJ9X",
  "key26": "4vubmR9HUcadSCcPAt8L7Ljk1HwRWHBkWHEKs8nWpBRGM2k95qtaKwmsrxtr9YpnCaG6kLysQwMG9m8pjc9Jh5iV",
  "key27": "AJUCaNuJGvVbaFecnWWf8yMGthufdpGhDNmqXHGi2KsXftJ6nDbtW5TmpWU5bJbt5tyHqVQTFjCjRDpXmWBkZBq",
  "key28": "3WSE8ENioSJowvSzdV4FasZs7i2Xud339SxQRvEFbdNcdagAB1xu7tfnbxJrwnJsdiSfhuZCjEK32z8iZgcYYxct",
  "key29": "2UwSZuxnocxF6epRdUNQSHVCTJvedvzGEWZwWqKzX23f2dE6KRCRJRR67NQG9HaryZ2GubmgGuzqQYrftJiNCDtw",
  "key30": "2atywBxRtZLk1MUZ3xnUVGgKa3cuuHUJXQa752wNj22RvmhDMaTfsMoKtdkQHNdkBKkxhhW6uhXEeQokZRkBPP5W",
  "key31": "55pBmCWpvJaY8CwSy2C64Jie4vusmVzPdDpAKHAiMYykKrESrE6gycqzRgLWhkcm5z6rkyiKJzU78g2oie81Uu8P",
  "key32": "21JrU9zkdge1GLbv9BiQDcKTTQwqgz9N4fQV2FfuwWhgD3boJcivNxcP74F6Qz1JtixpUXbXUsz4LY5sXtKtFFsX",
  "key33": "2SDn2HABfeu3vTXR8FHTomTfDE7jPPKHPA66J6rLQBJK7DKBxHKnEmiWdDwieVByd2ZMkD47ir8VFzceVGFU8X6T",
  "key34": "ZDFgatxEVNCfV35sxvvo2rt544DXQ55FHszvDJ8zRUnhgRghEVr4WKCjUY7rafZghMGqJdRs4wVjZLeMAspyZsS",
  "key35": "2wNGYpbfvwFN83sZaenjRiFC4oPqofYLxok2sPNReFaQcnc5yBJ7qX82wT7q35mdfrGMJfNwLis6abdBpUw5fuW",
  "key36": "3EGStDMB4inpRZ2X7yJzEAX5CJc4gHXfxFXH9XkLFhXzLhL8itnLh8w59uVFVpJS6QnNjRN255AqV8HMoQrgoJMm",
  "key37": "5CaTRvSWYJoz31kjgfqwVsNakeA88ZDgiWkhqrKry1DiBQkPMt8ZwTb9SiXPiRSHgCLMNUGH6sit3QS5wnjVqwW9",
  "key38": "615nPkXcLM24rkVv2e2MYzofv3o1QBTKQEGLbWzC7TPymfaYPUSp4AsrkHJM2VJ8nBG5rLPAdHqY1KJNx8fwAXAS",
  "key39": "5dnu6ZcnwdhW6guee77tQAeyST3zPPyfaFsoMAUnhqpRAyXbzr8okbguLyuo5Z1A2oho4HQzwU2iemnUArgRBn9v",
  "key40": "BeaSbcdFgufzGmbJgfmphb4RBpRnewfxMwomauSzkvhdrSGJA4dk82xhwgU5SJcfkws2U44P81nkPKU7BcFzUev",
  "key41": "eZy7fdpb6TyJvU6MeE9ESx6btuJ3Z6AHRMQ258VMJhxamTTiV1MWppLTYodrp2GZV8NfwmxEJeY9qxpQtco1x6M",
  "key42": "4SXSuGiAtviZU6C5DN67sPkTrZcZ399Jnj2PkuAdLGnQi5zrf61voZ5f8h9LTF2F91Wv6w9kenZi7ZUD88KhH83",
  "key43": "afaNnbSCtGN3FATJME7o799XPJrFrGzzUc7c34R7UtE3QX3Y8qgwjwe9ZgbXmLHaJ4z6RLEv7P5RvKdbxYxKFjk",
  "key44": "4oTo7Xa1Cez7LctaEhtHZ9Cuuy15HjPxFK6BsZRueEKmb6zYTufP49UgmcyJ5Yh2AEcvzBQYxmsXtYh487XEiAoj",
  "key45": "2sWFzRXBEBJPXX8HTxWqaFgtBfRQ6yykr75mH5YKTK9faEGN7X7ijRPDd15GNcTzAhPzASwSVK5gtR3rEzLhFn8A",
  "key46": "615684oVGKj6yqV9gbFir99EytB8HX2e1rNpr14KwtGYkxddbxUY4kJ6EEmnmcfEoqLZnSSVmH3uagyvGn328h8X",
  "key47": "4L6ZZ5toGYizzj94DhZxET2xrAyWvXVKiXfb2sdTvPjXUYbLsQSrWtNbg9TxiY3tGxcatNn5EwHfdhiSE6AYGkQk",
  "key48": "2TrVpz29L9rTQNFiHTc5aUaAyFCQAENmQpzBnSxNxpWi7ZT9mRWVsLYopi8pP3eDPChgeusAh9i3ADZRBFZjgMN6",
  "key49": "reCnwenzk4J4LEPd4uKME81MiEt1DxwtJcbQ1hnwjmEKXPNDYFD6rh1cCY91tMF85Ls5hU9sfBtkcXpaRxCwRQA"
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
