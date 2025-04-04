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
    "2E1RSVuyE95sw3FKn6G8J4uZzhatCmx7Ca2j8PZZVSNNrtnyfAtrHnDBzQftAxYaHxWCoQfFWJaHEFvX7rpqHtor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Edu8ikv6skpZuCYqMe66cWgfnFDUtNBb5bw47zzaMDedfFXzVBrYM5D4KdE1WojaZnPtW2tnUXHQ9Q1hddCZmzv",
  "key1": "4o6KVPQ28GsSkR8kEbvzYy1SCXQvGuHiidtx3mHV77QFGeMdPWexnBwgZp6EGgDoNdwtuJkoEnarKobh9f4Uxrt7",
  "key2": "29D8RfFYw51SRfZkkkgdEdbPRUZTSchDPtM9v3LQ8UhovC9YHiCndAsbbXZjjxNPVmAPbLVXeVvDrg9Q2jmDdMJ4",
  "key3": "32CTDC2UV7Y4S1meNmhRyXV2StJX4ikjaeSdbEQ1eAPgBo5Yfn2ZPhSbP3jtQcxSaCLmrPzDiBbTSxrhkc9hL3kJ",
  "key4": "26RxneLL3awfXNfcLmCTcHFYvh6qwPAV2oD1dt3FUDgJsGhqC4dAaUnVKwKRQgBu1grJnGjZ7coAbuQaRRVzYKrA",
  "key5": "kbVpvTapeQTPQNQUq5jYeYxu11r4gmfHc8BwPQFV8FQTTFs71SspcRcZVo1SVKMhDctFwdY5P1huWJ61e1YeuT3",
  "key6": "khShwC7AtJkFpKARoq4d97rYnxZsMCsg4U9n4pmv3dWGrCvMjbYj7y5KF74ckfsKAFD7mnf5FaSQ1NJyboZnKAP",
  "key7": "2cAx1yT6VcaQwuShQEYLtX6oDUsrL2G8qtSpRc2yb98YWhZNsKF2oLKuJ4fTcD14BzGVE2WFPxn6s1aRGibx6Qb1",
  "key8": "52eG739khap62mH8YcKrCQB5PcxeageFDDbxAAPikCFnf7FvAmDfFaoe3DKUyRWCrmHKRKeKpKsGgguNp7HAZ1Sy",
  "key9": "5DXJeLFtqpa9NoV4SorXNX3pUUcr4YKijvToSg346vYfYktj3HdUyWbfvWCRgiUhzTYvgmj9ZAeKjtTzwEvZVZtM",
  "key10": "4JaKjTZuBmVVfCBx3e1bxacyJJhXjvFU2EZYoEn18A17194DhjfCcuTTzpy1g6aP1zgB2rt3dZccgj5h8f8XaFeV",
  "key11": "5tWhtrviVF4itSnPzbfwpFpZ7Hndpd1ZvPULTjDkHiqFdqLiswtgckgz9EmXGjepSNZpAkAEVVhMw54w2ZtxQPFF",
  "key12": "3soZnWjFKsLhwFDYvk9hTFVYUN3bSuYPQnzzDfx4zvmSTNsy7MBhVRa6kPNCKxYVjQLUTsi5L5nh6byk6cG6LRYa",
  "key13": "kTwvuoXA1g25dwpxqAuA8FPQDxSMxgQ2CC3bfnVAGHzWmjB8BDfB6iB3zRpGEkUUmtDyYujeVHdaAhQyaeG3Egy",
  "key14": "3uzjsQwkchB7RNLNcnWff1MaRir4VHgxiNN9Jc4hRQWwfizqXozd8XNioWcHpRQNXE79mPocg9PbX3ZvJX2zY4iF",
  "key15": "4uX95xYmcQyPUeSuDuCSSuVbT4ZrruX6fyPCu24D6TEVZQPDd6ikKk58JQX3dmXKVzgstLLUSZbgyccebGmmTPrm",
  "key16": "3t583XE7MrFw6uW321iFwFWq3xWfFQyMgbavBacTwrchw2SiQBvxwj973X9dCPsUsu9iryd2QERc2mHLkt7HaZdi",
  "key17": "3k1YYPKUoP7QCT1dQzJh4Lgv5UgmfDVmeSd9kZoFkbtaG6xmCcpWKHfWLDsVetX7D1W7py8hWWprbgX2KDMnYVxL",
  "key18": "4eNqZZQWwECXRa1yDveLjjuakiM7FkevFZ9myv5U78m16YZ6kq4fBRwXxjJuh4j5zjk9yMPTaa9EAp3Z2GAqKRXq",
  "key19": "5ZHEsnAMxXzoSwUeHJUxXNoQJM647rfYE2qiCrA72Vi1QNTQvfoYid6z7sMRCZPxp7w9CUW2iELxQc6kWrCu8KCM",
  "key20": "sM1AUgTy6A4XtgRkLrra4qJYxmEsag7MRuHJjmP5TkY5tacBNLpn8Fwis7REAyFsRAYV8kjpW24krdnJReihKSw",
  "key21": "3tYPcH3WpcCwSxYyrwMGKfiRNnbmxwrjUY94MGKXTtpswfu3DwXaY2J5i85sdqmLmhBG9xrp1qw6fjeyZaJ68Y9V",
  "key22": "4Csj8GnkW8b6Ju1pizrppeL2RRmcGU7fQcQ6E8MNNx9EJ4YMK79SbRZ1ztSZwZBf1eJuW5ZTBr4eT2MakojTELAj",
  "key23": "2BjPzUbBHA4DuXgn1Qnt4V5ugcU3sHSqkY4KpH1YKTiKsoKvJgbJSNs9jvgafegjvopSNw4cGUwQcfrwRieV9XnL",
  "key24": "aEaQwjXCSt985r4Uibjhd516bqd4f3dvqxRVoSURAd2tKK7a7Vfgg2ftko5Fb9XFMKdeqWko4f3ae2MtitkMPHa",
  "key25": "2LfCuPf45C7K6T6nSCbaYGq56DspbJV1KH2ffLXpLgrEAAc9XV9g75dwpPxs8f7xsBPHTQXJRE9vVrwTCCxpq4bZ",
  "key26": "3LBYqWghjC4t2WpXQwtPbEBvNRL14umj4AKJ1E4tWp1hncC6nDrNYVegrrCS588PtoEbUScEPy42yKqEM61JBgdb",
  "key27": "CexFBo3LqxvsE4xjevLApzoS9ytsWQeJLE5GifsH7BXGjG6UG3oK2k2K5GmbspWHiGjRjXzMVRh5oJNEUywsmVZ",
  "key28": "3nv9gmZ2Je2HhXkaTyRLgA1y8azBCPSygU9YCbvLQMqAvn767ramKqWz4cCe3boo1Q9stBn3LtPDoNbCAqZjyJNb",
  "key29": "5Ha1aaN5UJW3cwuM2sYRXQLdj9FqxvRqZThrf5y51i2ZNEmG5egkYpTXuy7EEyjZhs99o8x5cRn1V1ppiPbFCRL6",
  "key30": "42KWBjZYdtZTz4AgM1cyTvB2UGYeNLvs5ZyKZfNLtteBV2PSemi6oXu3vrS5JDUyWkL8GQeWE57ikKf4b9uHFE72",
  "key31": "42BJKF3w4hZrRoKfxXRPLVCaGGodVKu6efQb14pNPnZCTQC4tV2uFn99ipBvdLry3SPACyHASBdvGXWvQNxNzmrb",
  "key32": "46ibhGtiD2pDD8RXvcB6yDQHfaZNHatqM9W1scPfWa456aCXBPmowGC8nuvzHhSZqM6sfEw6W6WkyvTtWNQBmpwp",
  "key33": "5GDkgMJ4E8tcYrPWdqdQRchK7x69e3YTNdCbV6EF8qt2YGRkpS5mv72YLufUQrBu4KLqcS47rkD9VTKhqQnCitPA",
  "key34": "2YHAKLzMYspJVz4TcVgm5Kd5u2J3GxDGXXneuPXf4zCRU7nd9WA4W8b6nVmsq9VdqpN7f1XMmmrK7XJAqVHWYxnd",
  "key35": "q1xkGFo5VdL5h7DzajvCawyjK5wpQodMQuGL2YCXf9p33ZLNrYhvZxf3fpM8vqurKrLM9hdSKYAw7SDG9ZyYjFL",
  "key36": "PwtBpNL6fted374Vkh4UeUegpbegYUzj2XP9xQynu64FuWxvP6NgMPC8KXWYeJ49whWxGkNjgRPU1htFZpmXjZZ",
  "key37": "5ZfnchpqWTBu5fUdqPBzxEMPjjvKzm9Kiu3fCuU7ck3mzy7srF9xpcZjCkgSXajKGGdQYxdn3RFuKvc32XPmAxxm",
  "key38": "KMVdWC7yBGNNGefxfwZHKBH2o6hiSfvepY1yXFawaeSPNYAfEgpcBF5KHAtVcn4s8Y8pcLGDuKagA4UStneJzA9",
  "key39": "qze2ZoX61eMtdB7J7ZmTz4jPMEspce9Agt35Gy9EmMxjY5yEUpYCDwnAqeXQ5PRth4uHyP3YQxhDz4LEVyqTiLu",
  "key40": "5sVajMXwxkAKTT28LbRBYSYRvWaeVDjjYyhCtrBTKwFShKrZvn4THTmCQ2wwvuHfPWudABHFkEVaP2pWmDNeBgp5",
  "key41": "23xpXmatNCUxWDSH3Sz8ZXMYwJFgDMnkiiWBLQk5gshYX1AdDX8sV4gNRGygfUYexABxrF57c1vL3ZZiJrdiLQbs",
  "key42": "ZM8Ysi9XgTSzmjSAq541KZNRpafQheScML3ifsqT9kZF8LdF8oncH2ML386giaEtC63sr9KkzcnHcC1LxyUVyWf",
  "key43": "3anmC9phYrdnBFvvHYgP2wqsKWF71ZkQY9otvcBQHfg8TKtyGjitx8RqRVx3F5TxsZaWWYx9NAtWt6ERgHH89m8W",
  "key44": "CkKVgh4KGBBLx4sWYXNaJXir1R4szHAMhAKYyFiKTW28sgpizwt9ZvMkpaiJRsU6G4uQ7qiRznqLmC3FBfBPZNT"
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
