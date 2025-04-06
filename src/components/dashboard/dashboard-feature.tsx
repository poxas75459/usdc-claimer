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
    "4uVdyn4dv6SvQjAw7ydnf6fcKGLZB3pNmbP7yvdbt3hFoNoN8nCwYPYj1gBKzxHJMJXjWnbkNBHgNxrQA34vSXe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RDrcDJVi5mrA9ChM7Z5zD1aDUcB5u7G5JaU68SDX7VdinNs8Xc9SjG6BPpMsprxe2Ui3WtgJeAcYMegDUbRkQHy",
  "key1": "anVFdUbR29swYdGjDd7PUu5kAadEdcmio4zMLxqKHhgqJiLBFXWxUmUC3iGbc6cFD7j1QKSqEaWhGQ9NaMF3sXY",
  "key2": "5LFAwG1mUYbnSUsFcejMqew5x3kgwgzhSCtKZsm16ABKnJWZjM3nm27HcZUWEbRhgH2qBUDGP8mk99DobXacpV9V",
  "key3": "4JdqE5n3RmCyvhduLhALtutRsAf9NFtNQuyhArPknTrnWgPi8T396whGEtYTydZj1BPzrEEqkJHLrXjjnb2a3dHW",
  "key4": "5EuoHQcMng63YoxvpkwwTZGrQYUoKNwrw75FtRGRfnpstBeazVtF34JFJr4FsJxwWwJnJ5vSk8z2E8wgCjck6P1a",
  "key5": "95FtRzqrpC3KuaVT558LLLP4QKATvoggCgbcLZsmJ4d9dDPPsow7XWnWCFFLbGsGJNwtcxLicuoAvVG88TQPUt1",
  "key6": "5GihMWULnsX5M8NqhBM8whwNAYf9XwCVnb5nn46LQu8LZFQKspWCgmmUdfJZchCDekP8E5Q5oE7ecjFcFGN4vN73",
  "key7": "29DmEJDoqzoubCBNQWTtAvYeQ3xtMYH8VDnNLEFQWbsVbJQcPmByWR1gXLutyzUniLHqoSUgC4Je3xBFqd4AS134",
  "key8": "4dLvdarfSd8JsdUg87LnUwd8TBSYfdJo8vqXJbh7766XywSgYm1tKFtMRVzdiEJepipKM6DCkgjT4e8sb8HDU3Cq",
  "key9": "NEixBQRQvrr8qpi3FxQk6Vh7J5HEZT4hjEBQTWpV92zt4fbXckcqnxxk3ZxSPoAHbFm9ma5LVDUqiBR8r1TTtaV",
  "key10": "2z4SFf24SdL3Yen4simGgeRriNbCjDeECfNnLGuW8LsWvruadC49QK2rmed1EQ44knftaesDMW6kYAHdk82zk4TM",
  "key11": "4GLMMYRriueotdBzWuGPDRvZiPBaazzGTNXxgYxc2fmnwt6HHKTR1sktr6kgjV4X1uH2UuuTu4EzUYvY32WEeXHh",
  "key12": "3TyAeiECy7vGV1B83ZqH9zFLzREY1v8AdvcMWWsME5qayWgmSKdmk9xBHH1pEJTjsu6SfYmWJamdPZyJJPv9tJjw",
  "key13": "xN4yFVDx1S28zqcDw4HAJPg1x8P7fsjccjGu8TgQ8pE2pk9ML6yCZTnRPk2dTHX7r76ZpKxDYggEHwVCXQR26pK",
  "key14": "bYMMtByFPeffWD426si9YX2ASnYp85pfpbSpFCHYCdSyghMP5UJ6tpzjac5tqqV1N1V7Js6E5nKrpoWgdUPbFLw",
  "key15": "2tD4xrsJUdiQRSpVJJKAi4E9QMeWYkrt3CFPc4bJArDb4LV231UPNZphtNKL9HpsN7G9VSwcithz7w8ha6nKApPJ",
  "key16": "2nk5rBWUV9ryc88nLZSSgHJJ8LFgzn1DWqXAVRV52VEKh3LX3wYHM8CWJL2ooEQfwRaywPBCJpyQbL2ADkNLEutZ",
  "key17": "jgEdw9q1JWnJpvdiAGK8a1QMxFRpcMymREVmEPktdk5ehBKWP7dq9ByJAZvfjWgEwvtHRG6Mw78sxTUZHubL7x9",
  "key18": "3iPM61RWu5j4nW5Nw2vdeVTf6Xw5EUsgDQ23Vtf8qa1HM8ETjcbG3tL1h1gisfKnniCeY7BikphmqRsqEHybebM3",
  "key19": "2E6hW7jAtkY9nKdDMpkmxjruxfFnEF5BymHGnmLVzoGGiAhkNJmKAobRJNYWsZKJQapWsNwFJbTMAUbt1RtGL15Q",
  "key20": "F2Rg5dQT7MhjAyiZQCmQFQREn4FztxYYhuoVMjTygVurXK72wRLLN6ELgHfqjiZyoagbcc1FjNha5V59jXEaVFD",
  "key21": "5JKHnm4SBRqA4cjnWtwnA9zXiBFZyHdDZfHAZStrBLYqQCJrzv3qccbdmSc8MDTwZF1i4Qq8XBUWKtPUWCLGVJfJ",
  "key22": "5qqK9hsZA5Sm68BoEto1GNdeHrDeFBh52JVUQKCvk3h9ssGRCUxDtipw4sezre24VF5ZBoZ6ffcxm1ffMGDZQ9Wf",
  "key23": "GSa5raf3eQsEWNj4cJbowQFHKnTqyrw9HhLqEpsSQ7Cf4z8JfH5N8rV1PCxJWdNsjQipVWwtCsKV4CjozAG9s9U",
  "key24": "53DFDc6WBk1Ct9NF3Qz6pgHREQqE2ze1zUNkjuuANyQaZC2Au9tK4D2rrbAaYNesaox6cNP55JrcLWSZKR6dB2Cu",
  "key25": "5M5YR6xHsJQgmcMn421Bnn8RwRZiZVqRoW4F7Luf6HkTme6RJjLbaY2hxwT3j5w9ZchbaxsSmbNQfCooiqj8vx3h",
  "key26": "p4oy3R98y5yUpMFwCMbjvLzmey9tVPbJGPraDd7R8kLKChGq68sGGanFX9JkGtdAfwffawccwdvb7griHKmmT3k",
  "key27": "weHsUZkdhm1x1KY1qnz6hWM6Hoe33EQgKRK5APnSLLEnD4r4Kq1eyeCkVZDB44FPDJqWP4vukbLW36dCPWmbopM",
  "key28": "4UQw5qLvwinEshuPKHzX6JD9HiRaZe92DgvWTo518jrVgy18vyEeyppYt4unHNcggRNif9mX6BEG5AK347qd39iE",
  "key29": "5RCQEvj5rLLZBR3UJ5GvSB4mUvFD2ZFBJYZAusJwPAjL6z3VhtBQmbonLVVjEwYkH2x4tBzSvNxTsNnYnNchQdtK",
  "key30": "3XbPSo2jdK9i7GKsQSk9ocFy1MyU2bJ53Z4Wf5FP2hLRqvdM9FX2XLZSTj6RCWvq183jD8LjJ74nXNegMdGsRj74",
  "key31": "2ZvYPbuBjwwL51gZEwQq1vZVejPU7D3EfNUTyPaGeo5rnTgt1VfFyVtPn5CGfctwTWygP9LvYDwvKeC8c7EaJGEa",
  "key32": "59NFbP3wugaVazojw9vt8KnhF4z2LNjsscnxvdL84Wo5dyNLPntfZy2xa6P75wtArXA9Bts6YYwerBNNNocnW1XM",
  "key33": "JgCxcQdkzU4uf6ftNTEGj7KwVqYGQcrC7wMgAFpZgQmR6MPofiKaux6MzXthwSCLBKjvvUN8inpYFUifiNt4utR",
  "key34": "5ABBjshKFh9MHztxk9wbAF1U2vVUVhEvwXKvswCRoabaUSen1t6KNL6KmtbZJX5AB2WFQiZwGFXQrNkiP2uLqE1e",
  "key35": "2ZDZDoWzjuihzxKsJfGHFxUr2JQbYN541jLTb7UAQbSEBLE9mjR1Kcpc6xX4rQT2yr6WXkRFtiViCY7B1G8Bkuq1",
  "key36": "4wChnYc3dAGHM2JJi7bH4gQRTi11exp6twLqSr5jsUJcWQaaRgotgGfrmnRTEWaY7rYzuvvJ94GWczpgxCEHFxEc",
  "key37": "3p8KCDBUi87xU69esEXkDXJzms7Pp2z4LPAJfks5U9bWCogZUFNE1dKN8dEh4i4MiJohdgPeaXjz6BZu1DVeCPti",
  "key38": "2EKxFEbhC4Dp2mUXYxiHLZhKW3AhnbSzD9z4LqkiqhxHZw6G9Qrpr4sroudDLKha6q961grkJub2wYwgE3rEEHAw",
  "key39": "56HYRwfXj2Cy8j4QbWFoEkWm7d3kJA8wasL8zaqfqAUuRj4DBMKuVyHMQ7PPtXoXsaByw9qvNHBVFaCRiEQ4KyPZ",
  "key40": "3AaBkGQEKVLHtdiNusju4de1APFEsNCenVj8V6GnjUUbFK32mf4f4kW6g7gt1kzNanpgqkRDZ6WBqowehbMssPCJ",
  "key41": "4FUh4Yb8YLwiBg1Kkg9ptk257ucCq6YG5ugc7kSc4ZgkQwhKMRJoYx5MRSLCJR8DjEz7rZc2kDjgHyg1LcpGu9bm",
  "key42": "4hHzuXqEFiubwkauqSFkYxUwkg6KMvFyLjXpBZuhiFTwB8p1GMAJKUa4VdNejeZYKDCFuB1hes39BxUwwLWpXHtm",
  "key43": "s5EAFnLCFACa7C4dZ3k8WytWuhp7UFX8pAB9QkzJEwKXr9nyemdn1rSFxmWUjz5j8fQBKyA76M5U8qAJ77nuj72",
  "key44": "5aMMKaf4cz41iNyCWU75BHbx9FN44aKQ1C3yanmLkAzLrVfWBiTFESztdNyKt3FFEaCnAQViZmpRzayGKvzoAUUE",
  "key45": "5JsYRWpaZ6oXtmwrF8qGw1aTz1w1rv7rt5oTdANdbKaTLLb96JFYk2iLxnvCWtucB8abuTATExypxt7o5VTXawS2"
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
