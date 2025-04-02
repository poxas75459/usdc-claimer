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
    "4bNzAJT9vq9N4JnjPxMW359hzZUd6nrKoMbgyfbYfmv4w6HevqbmSDYoTRbjABm6KX7DokTfypmRz2nLbhGHJZXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zn2mQzcD93gDSYG4vpxUSYiTxGVgXbLDz7UtBd7M8zUtz2jQKH1kmkEU3ohyCZRtUBk2iMb1dstEiXJk9n3m6AF",
  "key1": "2awdsHvCjBByMEkeRosswJVSZRgpG2DhPwm4DumKtCg5rrtpgTsKsVH3Bii82n4GMfkJAWFqaK65s2NSMfAq89rF",
  "key2": "JyHnHhCSVaswZHktyU5j45jSi5SGLiSx6EB8kHWYwDdFCVZbzZTdjDqa1Jz3V63SV51M8GuZ5YWCeNuUpzR791M",
  "key3": "jD34DnxFo984N4X1pTCskeCRdrQEhCChyDmEpAH52SGiopjSoRuDfj4SDZXQ4HqbeEnZMQumkjgL8ACQQt7XWzR",
  "key4": "4YKzymtPv1ex3hVwcxxuK98mgnPrAm34JYUspiZyFTb3ZuLTRgCSUjUbcSwSeAruwAK4ruq8KSAEEKRY3mokn266",
  "key5": "2VqvnWCcWDyktnUWp5Z1cCSXbRgttQqYWYUr7UNy4NFaLDTRRhxFq1Bi8sEbwffTGEj8WaWA9xjzCupJQgVGxqY4",
  "key6": "27QKqbe9G76ECpK2qCPBCof3fGJuJFEy2Q8bdtuQ7tTYfK9KtWtVyDPYhvptaCqef4fFriKe5saBkNvARsamwjDH",
  "key7": "2XiLyBwcbT1hCBo2yGBQpxsfwyfrkdtFsE9dcUBUfhbPEXqqLbN311CHB9rtW6TxQbsSeGj9qyWgFnyNZHeyfFy2",
  "key8": "uaNw6cguQQUAZWWBHGBpYnCV5HSxB7t9qv1BJu5HpatbTBMakBCgRQMTcyWRrbwiqk2abnPpYBgSNeLrFuwzHpr",
  "key9": "5c6rZUFKcNi8VJ4MbkXBTNSzsY7VMx6WmMX9g7DCZYY4dL5xKAgUj1jTbmeU6ayKbvyV4GacU6YAAZLDWWXPnfxR",
  "key10": "3Duvi8Vv2ThseRvsFyz6tEpDbcMrXycEtp5QJGBQ2zAE2J12vU8PX8Le17p91ySYdC3XfWGoDMEHEbjzDiHZGBV6",
  "key11": "vprab1EH1eabJ6MMZqcMZqrvKFvTJeutKBd6X3Wu2g2dEJvQXh6Sjz5XY4MzSNjkeVzYMoQybbuKH9X2S1ykrMN",
  "key12": "ErCrT1Rs8LjZgzrqPYmcjvYNbJQynfoVCYzugXuiChRDt4gqUtqxdmgmDaQMjsHLW6ey8G2nFv7AsgSs7C17Evs",
  "key13": "M1seebAUWjDkQu15gRP9QNvNyWsAGDjUdwyANfVPRFRm9y1kN5TkqD6fB3iibjv1txM3JThq7HbPWsgtNSPb6Q5",
  "key14": "2nJPVny9rxAx8sLg1PzZ8712ShqbdYmv3pK7Af1NoDCct7ktMe519VTYWRVuCUchkgmaJSNuxiiC7dSy7oQsBHK4",
  "key15": "2F8dETMjK6JgpFJdK7zxtkSgohU5oPRcGpMQpL93gjKjuYHfpsRHVqAHbuJ6LRcf3gtxv5ykPX7QaKQJyMBn28aC",
  "key16": "52gTz5ZvNF2wGjSjQdECgc6QHsqb9tso8k92zNJrtLRQWEo1AWKiXYhjbTxe7WKCjYX55XaPfp2r1k314CV8cmso",
  "key17": "3dDVBiCYP88YxcHbGXcDkDnNiquUPixpAGGXz8xSh8EbmHUPGsogA2X3YncA44DUdZd7PxBAtebNphka8TBUR7kv",
  "key18": "3KU2t7ABZ9A15RDjhXJ9hQAYH8GkzNhAydtyPnCZTE3rFnDuRgUVSuxdJRZ6zmuk47nVabECbmxCuTyxjVRNE5xA",
  "key19": "4T8fEJzj1yLHe4yTJhKR5gFkPn2S7p4fDis8MB5CBHQEZCvdw3kKkpHzXVMGsH62H97XiLs74sv2U39okqAshUcm",
  "key20": "5aL7xA9JjmV9L44CSs9NsoztYk2NAHM5UgFWt3rotU6petwuouVJ6KAf9BfgAHAx9fq7medk8dnC21uYvNcTfKt1",
  "key21": "387M7DDpWLMttWHFF2VLWzYPo1o7cg8FQV4u8mbu79p17XoHCtstCxFrahYL4hJJRnepghpNjbetFE4ydtnFAzea",
  "key22": "3kknz5qYpHd9TRU8nV15VBUtSpBjQucUB87tcL8JS2tupRGuvQPZWbpBGyfaJmenp86KXNzMS158MaU7rWED47dC",
  "key23": "5wrirHYcfnr3djmqZuWHQv6M3GTqJPUWjdfWscAJ1VYeKRaq9mc2bG4MTSuJjhYyZT5wjxYpeuYG13K2ypcd6DUw",
  "key24": "QRZDdijPqqJm2BHaUXyYTWdxLUodfmK7ciM3A8Gr297yz6VDXLEwVNMpWdcqvsRnFTEvtYFyZF5LKbQ4HHJCvrm",
  "key25": "3JeebSYz5DUwrK9zM4WDNXPfzfDZJKzgDY8CoZx3V9XT5h8j9WwPLw1QkZsMxUcJm3sLQszpLveYruPrpyjQg5YN",
  "key26": "3VRQ8JdYTeMokNLCToagM76HjbtJUoAnaM1GkNjG2ghwchUPAURTFrdjxu9Qybm2pyNkXgiduHcwRgwr3BeiNfgJ",
  "key27": "2oNBzfhMn3XSLPuxHJ2FE5hqFX4yjvkvb4exfEyuMB8kcdtaGjQquMczz4QhktHrrroZ5Js5BiCVJEja4KK481XF",
  "key28": "5qaiTv5mcowhwuagTj8Nek5y7WkMy1HpCawM3uobCx953QXppXBVFEYEdXq9TTHYrZXoTKefx8r5pnwZQGy9FLun",
  "key29": "LfS5dECpwkmg9i6VzqX1rGsBwSgpWzaLq1Z6gG2529KsaD4gGNGRf7kFAe6CMFovGNu92VraDBvppyer4n1P67c",
  "key30": "gMZjXiKiMuM8SeoQudTAAE5hVvwsTVS6WHZW6AchpkMnF9Fx74wFMzcjFvp6eWFs82dZ43gqePAg4H2i9ugUwRf",
  "key31": "2awPgcz8vjtqi4nmZgpMmwak5mQAiUZ1xDdCFALwAXngWk4LeWUEu7iDXH6T1NXKEJjpW5mC38fwY2dWWDvUYi9Z",
  "key32": "46XuA9gqUCmQodwUd2PpEiy9aRVS1BRxHT6hGTm6ivDGFPu1ERGNaabiWKedUUj5UUEhwqHRWuYFpM8WNzc2U3mw",
  "key33": "8Loxw26n2C3BNEu9DASdBXdj5ZCQWnY2FdxfLgmhedu2DvJx51Sr2ZZBtbxrCPfxSfNp8PQ9XCYuJdRKGXx4VcN",
  "key34": "riHETTnvgWs55znL89K4WZYqvjNaHRPDXDXzr7SqPFquWdMYb5nJ73wjtrrgDp74wQtqWujVfybYrQfqcoaJVgj",
  "key35": "2AH3FGrrtEXqFmFb8X172zFDex9jy6DfQotLXQsHdqhkbPjDY9fkponfnzifBXneo15joJbw272ZpKJWhRx7L2rv",
  "key36": "2bswMfqHmGepjqZ6Zuy9FLGWmzHkBtvXsmR7kmdPEWjWgjYnCu9AX9cWXhxyHXFAY9mhULfsjnEAGStxVsMLfbTg",
  "key37": "3hJmKc215M4T9HReQG2MVX7ofB1sTgimFia8m3xZdkYNk9YBXuc5jUJvQB5J9i7UkHv1GyoQ9enjup9PKnpwjzQc",
  "key38": "3bn9us7C59RcHfcZNBFRPWa5a5XMwx9dbnvZjwG3x5YM67wVHBnZhpfvHHAMTYZMufVxntUzhjszf7JGcj7QU7mf",
  "key39": "5UwU1KLFicvAMKro29g5pnKh9iPj9z2VZ6fyBqxXBJSj8MVMb5gwoBe9rRf8MWXFea4eQWymESJL3y6AbgZBAX4z",
  "key40": "S6iusJGGE9C7xjjqUaWsuTMkuXG7r9gbuWmUJWuZuNvjq3fkJBsEyxLGdinZACNiEw1EapjAcQeCVgtfypUDKyz",
  "key41": "2NSuo6oX2T1HwfYoYWkN9xJTD3CbmSPpmHSkbWSgijyj381Mau3rFkE8FrEgzn4wKP574Aw5eCW98RZqzhAyUqUF",
  "key42": "2gmyHKk924imnCFzwgK89nmzopuNJgKeTu7NiyEQSzvDAuSU8Y17ofGQzHqbvDmFzuom9ac5EEbAw3wHAcsgbG61",
  "key43": "B8gVqGG5nESF8jJQtcEugL1Qrt9av7erJ45SevLdnTYDTDfu1PorDMJQa8wQVXQwWJ2o52BR5s9hszAXPQoZRP1",
  "key44": "26QxxT5oWNF9Yhpd1o4NRboffrKUjEGxV28T8me7G4GMS9nrreCTjGDEUr6N1bNjfGkQKhEh8X8WZGFMqnVvbDu4",
  "key45": "45AgV7JtfwFs1TwLqYEgKQ3Gf5Y9mFxs9z66bUMcrMzeUQYTGzZYTDtskk75vWB55QQcGpVcCsCptA9BNtAMcWag",
  "key46": "F9RLxwfGf93GVEADoZvPEJjtGqBNfvCJfRueLUKuXRJQ6drkfeFNJQscffegskB4JxnsdZxjLEaiLfjudhpPMBi",
  "key47": "2uPv3S2zXD2BptcP5Ca4JqpDXStRfHMZmzBN2zgZmhJgoXKDeGxc3waBFYCHbKsHojwAhniPR8b312dTUvJQPRh6"
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
