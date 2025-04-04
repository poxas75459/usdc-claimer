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
    "5A7EPVJecVEPmtyDDJue3R8kbXjC5XLa3qekxnve4azgt6pDrNqsL1T8PHmwBYKBXkVFt1AWWuprxR2KwGH2dcy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UxhWxeqkLLjeZjhqGwZEoARvTurkgcABfPp9QmwcrdSJUqsXjnVamvdCuj7aWpPDWAMFviP8pQ8YYyQKoKHbRGc",
  "key1": "3FhwwRcFfjLhF7T7rUe3pT8HaYnGLifqujgSWtbaUyoBzhSxgQCEhNSib3vDBMic8Wg4NThSeGNkTKWNQ7oysqxE",
  "key2": "39Pmvbar8tM5FUQpZ3UR3EkuqKKC3Fp94VLMbjuhA3NgwYKZ3GpNSyskPVNtHauJcR4Ac2xaRV53rVsovzkMYWPB",
  "key3": "3W6ZaghzAqtvtfXUXMRiLvx3Ljhb9xq1zoevGFuxPPRV17z3RRvPGo1SHekzcrwKC7rspFs1SUegNtMXoEeTaJv3",
  "key4": "3jxUjYnHhSrP33N3BwKrGQzrpshBQU3gKCznM7fZGv4NCmdg79jeoi9DDr1DByawiMGrbcFYChCjEjCXrnnonvaD",
  "key5": "2bKN6TzNyFMrf7mnHetjGc9o6zYban788EiXkCYCwiM8aQij7H6b9twZ3MXpwLcNG2XDdF1DKzfFTmgguDrAfNGd",
  "key6": "5MJRaDgeL5KH2a5wzCeKYPuQFsPMQKPjmFjCVgvHPYU6HQT5eHrW6JFgApTFxWux8JTf7HV6SiyYJE1mmQBK2SyC",
  "key7": "3JEJsJgUurc3yyNv6p6nPLavxpLDPF1SV3JxhhgMwYUCQLPWrukUJWqzNsbSrABekXfvmKBYwcZw8iGf6J9CM94z",
  "key8": "2Y37SmVtCUSdy3agiR6utybDK9LD5QFRMALNzJ3GDSGjoUykAa8vkdnE89DQhkQLQ5WFe73Eiox1CnGuWQtjHGmb",
  "key9": "2jLFaG6rhfiedgeueZvL5ywWK3QeGuQ9QmUgKzR8pPfQDJQktisUG7rf3amqQhVqotBN5F5aEgexz2Jv31jHhMUY",
  "key10": "z8LQQGs6H5WedFmZoRm6fXPBvni1RR8GTK3QSSjhtUJ5YNKFA7GBSGekxe5PeE3u6nsJK118rcJu9tn2Ke4Xipt",
  "key11": "ENg2gb6gKExTZnrufgizAB3jUECziWdjkAGWqKnQ7X6o1xNbn74SPmRZQxixrxMq66zQGHag4UjYg7Cg8Mk5mKn",
  "key12": "6xqTMWFxnRxcyKmTdvYNZmMSGyF8JJ6eP1B5zesV6JqS8Cwqy72obtabxneWANUjwAEPZVfX3CYvdJNU4pUecxW",
  "key13": "42C5UHv18xZ3rDENHVRh1kEN7izXZGBbWD4cGPZJ5gA5SuHeEW7h6kfaFFhLf4G5yABZ8Z79jt2Xcue4iHznKqCW",
  "key14": "9xX3PDsAejkU7oj2AeshpV21E9XyyJjKRHq4QiMtSdjsVJStGSwVBM7VSNmn3HYjRgTvsy5oMYFMrWJHDbPDj7U",
  "key15": "5BP69RN8mtAHrN9ezcz8DL8osGUuEBbKpoTLBYuu2ZG2z5hBZf52Fji3oNsX2HgCcaPy8caxWnsrkhhN5GZfE3Ds",
  "key16": "5DWKq3RGm9Ty88MZYxWEdghZ2RRDF4FKpepTypiu6MtN8QGGappkd99eWyWahoYyuBEFV1TMuiBKfvNnDqqKshRz",
  "key17": "5aWKzb7mkEDseT5tj6LFX1RTc6UNg6iVkbNrxzrpyv6pi59B4RQMnun45P7dWaCvoS5paR9nnx9C9DKgVJXsKLqL",
  "key18": "3LdasZcE9WJ1a5LsweM877dsYWhY4vLRscfg5kaMiqrZzS7T2CnLmuwTGuVPTHSYxNUxh6HF9uqGDJSqFZp889ov",
  "key19": "41LRYBEeeEnvfHmz7sALbt3BzkFjGY7fhriTs4MHyuET1XDktqypmvuWFkFK6D2sM7QzWLYCbMmHWTMACpdgbAGb",
  "key20": "3epWC2pKs4wYi2eNrjxBh8GbuMK7wYEzzRevD64bjiGtH9gMbnyGorneADU3d2YQ5tDc9JseDFU5PmSyxYiTTZRN",
  "key21": "2GWgBME4nbssseDiqLD9CMRYvxmvDzVV4kvtYABQ3xg6MNTDAWcTEa6hqNT377XBanv7w9doHRW3cLjXGRGJ2nm5",
  "key22": "4UEeotD2sHMPDVceJQD2GxrfRCnFvxvgH5UoRJR5ngnYRs6sbhNmzPHVEFFevFaH2RL6Hc64b8vtxuHwEd1fqy9J",
  "key23": "4EdUgBdw5QYBXEVoR98eazVLvcLQ8uRdQnqsd7FZtYHCZvKEYTQKW32peAbvwFStAzDiYPT3KqzmkRXtooMaW5MS",
  "key24": "34ftTWvHrrB4S1pLgF4EfHrwvdzuwr1CzHgSMDYRpo9jFWDCwVm4Y4B4355ybzH7GEufYco31p2QtVrNHVnfzKGd",
  "key25": "2oSTwGmSkcXCNLgeGgwaT3z74ApUEoTYMx3yVs84aJYxJQCbEvGX7vTCzJyYK8q274xwmsV7tZ7rHf1fYgzqBeFf",
  "key26": "5GK4EhrRcRAksuenxJEYFCiFcABbzikZe2SMLRVT9eHSqwWR1riRnp2KxcbqvozF8WJxeuhEEAWk2aq6JhkYVurL",
  "key27": "3gXArAP1p8kLTsBSTGyW3aUbsupaD3SsLzEDUtovxMXsnYVJAedQqbdWe8crGY6HwCDub9TzmdC8MnUVy2PThgj5",
  "key28": "37qT3u4aVq7oR5UJE3PVusN9EvpY3nF1agFDdczLdccq5KmNhVn66cdUNBTFWcER7pc3UcNLx21hoEzUBw3ayvpu",
  "key29": "2Wo1eekPrPCSiKnzHHcCoaaq6DHHABexs9EgmZjFyuYwFGbMyNMxNKajSzctM4t34UzV8UwEgRPM1xcywNDknD3n",
  "key30": "zoWEPXKxddwydbeWajp8ac2MjfRWjH78oSrnicZ1Ktp8cJbmX5fgLeTvs4QNRnDPHiQvKo2nU9QspzgVnvux8da",
  "key31": "3KZDN5j43aVzD3mH9c6x2whectiSDsFUZpBmw3KngUfWZkKYoq83EKVAmYT1fC1naTZ9Xrz7Uu3oh8pQQvyj2gGP",
  "key32": "28m2Kkz7FJFuteZWgC1QMpZcxBDz7KiRgzJxEaqs2XVGY8QNcD7FzXSVWiZPi2H7qbCSTTw7ygery9RkJD92mQWE",
  "key33": "BpYrc4Z2DTfq5XcKwZGQcA1H972f1aYsnHMpnaGokdBGMBsBCWu7ki8HZ8eK68vRXDmeY7xoVz8sVcvGM1qCkbb",
  "key34": "nCh4iP5qLbx8LkgFu4x15UQVfVNVkDPPbrZpVkoV7ZQ1PVosbzN6UC9te4ELJSUoi2tXkT1WabQReCxfH2CdZRv",
  "key35": "4xHag6EePhpdhWzHX4xrQ9mMR71Ws6va9LSL2fBJ8HBF1miRynTLcz9FHNcrU2H4q2FeHYUgQsQHV2nYa1tubFpK",
  "key36": "4bPeGdZTMcJbdGpq1GbiiszUhUgABwuXT4FKh1gXsgiu3hY4x9tKsWvyMhq9A6cg82rWYmqgKrKto655tyU4nFWP",
  "key37": "3RtUJ3yxwyjRpnb94US6j8DnATsnnQ4rprWbKhR6y7Ygs28kTvVkmuKViijikeFkdSeaXmzHMt6CvwtkPVMwYx3o",
  "key38": "3HHhNNkSZY9ank4fxKrEKTFukhwbBaW6nmSR2rUNyuDLH2SJMTEbxRVQafWyMK9KyBboJ9FJsZHMmNh1znKLynj5",
  "key39": "2rpmFrqyutLDoN4RkJzFTKVnfFHmxBanwvcYkwUnfzkyWsMbuah23JYrrL9smyuCjMGiWxyhsGtDVccoGaxwjY2r",
  "key40": "3pBKcvzgMjzsroD9KzRuPmVejSVGSGWsFM54PXcNMQeEVFUjfJDQ962zRbxv4sW8ikdzHLtViJ67XXiyJ2oSRdj",
  "key41": "gg9JQVN4ymdNPzYnoN6q2n4Y6MbrG4VTnXaKc35UZvb3M3G4htXHDoS6n86FPhiQM6tsj98Bm1inQ8RXNfjisRF",
  "key42": "3YFPXW8p3QJDXjnjJq1AaBQQS8PEf7JBrfs6bMAEiDyDj13oE1zUZ8NzeJhnS5AUYa13oHtrNBdyuVGmK5okoiLK",
  "key43": "2FUhwaWK5VbZ3C2UR1nZYaDctL98n1oprDc68acY5Nwk1Lungq7i8ftgXcKLxGAJnw9Yw8hLsZ1WmbMnKrAXoC5W",
  "key44": "3fv9AhnogowhzSjszNtyjp1dkExZKNtvpSTMkkFw6pZczPHkrnHbB9W8GGVmjyGtfbmjJH7mLvWMsW3Ky7HnAUKD",
  "key45": "MmfKisbTh9EGbh61koeSW7DZdPtEiSsC38EtphREdrVYmVdqKA6qdsCfYzTzE9HVZ2P3MwE84fYoSXqKwRrbnwc",
  "key46": "25rvcXMEnXFCaFtHGp7c5Mcs1F3mnyoLiki8m53TckZAifHdv8Q91nvRyLudWccQkjU6hejxkoovSSCZfsT4uTwd",
  "key47": "AxhgfMRGugGrsrrvikEYudRXZV5ApyDYih475Dfq3SaRzn7EKAbvsK8gJtyqkQFQTzZ92Ljq4G3gZk5g5UX7266",
  "key48": "AzFocjDDREhosY97KYF2hkdh918qV1eMsznC3Nj3iQMDWFBEUoHgyquwTWcXKAuSiBFuZqvcqQgi7mo8t3aTtLH"
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
