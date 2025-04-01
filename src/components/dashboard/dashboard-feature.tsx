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
    "SU7TTSp8MT37xEcd3vvKqFtaJsWUuEmAgH3JpGMLiaoJvaDYt187MgoAGjy2Ug3wpA81pwJZhR9xCGRcR9C1vxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tnkVjvwG7WRFmApzHfspZG55pDWzxN9QwEj6SUxvWNSfj1YS2Ej9Ez7NU2E1SReXjid6vQSaQ5C7o3FABrth2W",
  "key1": "32x7YLcFA7x5VuaUnvNJ3Ggfv2rE7DELiu6FiepyWDYuzmRrF2Vwsoz3HLdAy5FaVLdVm5Xy5yygzv3DzsYvt7eb",
  "key2": "46ZxkjXk41j4Pn1vwUYkmrSVoTFPPdd1h4s2wSaCP6uY8HQJfS6f8J9xeGVbzcaEU9LBGWb6fXxPLqV6vmNua4sZ",
  "key3": "YREHMVHeG9wipwhHjv93i3w8bSQivokJh52dKft6T4z7N7QN7tPmtV8zMm9aWhFKUTqviqMsL6pVpeRkrXxfjmo",
  "key4": "2KG6EB8J1mk1ebis5sJ7dXd1WwJ3TLYhqrEZqbvcz36rrBNaW6RzwL5yKAVEaJ2m6D9cxdQnx6d5K5gdwPpfvXaN",
  "key5": "3LibCkEBT192eKsbbNktYmZAXnoxKEqJfHJP3Ajm5Eia8WhfYKhoX8cLVfKi2VxG9yjpDWBPpXMV5GV9NWQ3Nc4i",
  "key6": "4EDgg3XFdz8HM4Fuw9dKHGi8X19fjxaiwpcX3p2HpvybwQqzM56HhPJGyxWUXXhESARcNWD47MVVF8ncfC4vD9RF",
  "key7": "5pZ5J69gLUCEUB7ZyfrC1s1CLi7mfJmqwiTfCEJMhgohkJKhZEA2cuodPydmvJcy1eeH4J34DKfehb3MxmpQyfGA",
  "key8": "3dfhkatizRdLS55Leuuw2Ckf5PzfDBvVx8dzoaGwTei4jk6h6YSHi2RWXvizuaKhZi5tv6znCXJ6MadWnAR6zMHz",
  "key9": "fMHPSPCqrkbELa5LkKnStEFSfXCj5KuY4VKjJsE2V8wctTLFrE64BRMktbWJgWFmfDqj64sNT2HD8S6pkjZN3ZF",
  "key10": "3WphthbNSqfzw9meBjAJQv9oCkijbRnEfHxGvAd37YGFwoCa97YC3VmxTJTnKz4JjbWA6auHPL2hu6YpmRzbeJQA",
  "key11": "2x5Hk2tmpyZfzPvp5J9hu6BmttweRN5pzjmjPhJhBtmTJiLReLFmU2kJR1vX9aTztYiNXqZRfewrZ3PA4BNgF9fp",
  "key12": "5dLz1pgWcacWgfosxyWkc3rvSXenrV5XE1CHcsPnGGoGAPiHfXMRfnS7JggiFCwP21aotY9ckLF9uNwDs4HMDeZn",
  "key13": "4EQuB32tRZKeKQEf8z42gBEkHUtWPLPc9daW7jYQQTE2448tayc3m3P1Nov1HcxhhvkHKJhbb7KGYSQFv1wcjZRy",
  "key14": "qcRqXxwZDUG14xAGD7Zfvnn5wy7rqCPDRYL5u3ou6w1ZqdJKkSagxjtkAgR2KQPdPXs7ePbtekWtGTwdPy11TjD",
  "key15": "4cm4mjgDAhjMCDrpqnjaiuMVVLVn6377auHXTeb6xawLVzAnDixBadaEiXktXCmCiVzUp5KKxStjDA5U93hsKELV",
  "key16": "5nufcF4inLJ75y7BBjVYXZd1HApxNWyisQhAD687X6Smh2Ce5F47fSKNayWUwExDJQPbXGJuQUnDuQmh23tR2fym",
  "key17": "32i24PxReiUEqMoomcLpE32Fmy2uGqssVyWZYRPKiwb9obmcRvrmSef56sDCDpAcghXSiKHgkBGTo2KvTXq4LWba",
  "key18": "2F3CqmukbWXxqZHjy4RQJ2GZaNg4wM1JSadbPeG7xDenFu6fXekt4iEPZTjPXzwZ32NMSTwGmNKgix3ABctt7Kb8",
  "key19": "5M4cUnMoJcKBDNhJ721DaUsNib82YA5BCAx7FX1UGtHUzDoVXJuA5BCPYaTYPa68zqKKy9pimybQTk1gZWJ2Q7ni",
  "key20": "5EHZ2rdY1L1WNEo9TwGus4mRu4ydviP48MLdSFaR1p3yvNWwUZkn3ubJEoLWYC3zUjU7pK2YJ8oPV8fuDx5WSzRG",
  "key21": "48hG4zF6XxLkfSKV2dGHmnrF8TXmBKorSBLipdZEvghdZRyk9Y6f4GKXJcicqf6YX7bJ8yhDxtiyWPU3HSiMSmFd",
  "key22": "4YoAtr2rRFiRnbcYT5amF8cfFz8xpM8oXWp3hYZU5tobnzJwRZ99LrGaJSHBDBdzvc2eA2UBMqvRAfS76Jv6FQvC",
  "key23": "53J2GPUFYBBHRXC9VEZceve5yWFNmfrvqjedpdbKwz83Cs8Crsc5iCCd2WbNFRVCpKscmg98Zz5z6p9yct6jWRNU",
  "key24": "3G5p61JPG4DV1EFobenjQDMsAngmLLfN4afAouBK1uP3vkoyvPPn4inqoDZKb6FQvZD7odwi1ZerfWdJK2MDHfeM",
  "key25": "4HLZoYxQ6TxdAM7Ts3gZh9tGH5vbiTXxXWE8VbUGkbdM9FTF3HkiXQUgWYfWZHM25YAkonHmTfC6NmDbaLdhCBif",
  "key26": "5J6sFx9YdeckDERureq41uogcMAhEkeiH8cs5mq1SKM476wZcabaq3vdRmHZuMBp6qq6cjvDoNLcQeLPrncFy1j2",
  "key27": "2AtJdsKV6ZU8vLCn2vRH81irizNfHLG1fsChSfkutT6VdqGjLizMZgbBaoQ8FvgRz2PUC1v8zfUUhh2j3Guzd1TS",
  "key28": "4K2fEVJyeddiJejfvKL1BktT6DzErL8fkP4RaLtRZEKZv1jXjueGTXQ5FquNs5jPJTEYFLNvfqX71YqEYVSxBHyi",
  "key29": "213Sod2KdkXmZbj2piL7FE8uQddg5vwqY2GdMSepwxPgFLRmgeDyKg6DGDyGyU6Zcfza7uXPELTQzzcrk9SuLT1w",
  "key30": "35EbnJyk7h8xeqg4atZJ1CwAhna7h6eyEoYdSyrSbktskBpKofTRJcedcann96dTWF7t4hZwP5XXSCsP49cUiybU",
  "key31": "56FX3XQJzkEdbTqESZRo8UUKocYP6YHohnucTQfVcZvax6y1H1wZcnzh1v6xzcZKrkEFKdTVGWnJ8xd9RfUcDna4",
  "key32": "2yaborwjawJp5tqdVmojXvoX6jq12FwqnJYMXLNMTzHLHkKmUHoya4M7aMGDAs92j5hUabStAFtHonF3dFx7cdx6",
  "key33": "4bV6qmrKPAzqG514rokSN3U3iBWaG47keLPpVMGkhZHZkqpzG4YaTZ2XGoCFPM3YcTrXyrhpDEMnrxUFccNZiwCo",
  "key34": "52AvGEajgFAwZdutBkJxd7yFAK8FEruTSHHgfrtUczZnNy88FXA8BvfQKSd1DoYfJYWvpGfuPwRumi8DsuFdJHrF",
  "key35": "2dSBYgn1HHDiSbcE2tpFxHULyjSVNvinpGvLygk99w73LSLPk5c74zRXjUuV49ZU3YcURAYuKaF6h84Jibds5wNv",
  "key36": "5ujeM6v4GhUnutp6ygapakbqgEAgA8mdDRzsyoEJRLPuGJNRiVusVT3BL2sEevEsS9uEZTauT6hbhTCjRCQxt5JD",
  "key37": "23Epbi6gX3T4E7rDkbgTynCwQ9d7T1hjjkKFkziKka9FV4wW3DPh7jPLyc9MoLMBrvQ9GiQrw887byq2VgctFzqL"
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
