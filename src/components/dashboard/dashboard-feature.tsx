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
    "42ZXrzYm1zRzcAPe4KMVxkar7Sr2HFGdXkvG4oa6nvBBBXWK3ci64JSHpBn6om3Bk1xNtuqt8WEfoqvQ8rDpi9bR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N8ujyyJJKjspXCqAbFA3UdFebHJ7UbALmtccvdCHjVBnjUTcGrcSWAhxtBx9yBd9QKjALgahWw98vFNa7tUf9nS",
  "key1": "23QBxJgfwwxDwrDMyntLufKsZxLLmKUU4V3PMXoZ8kVrsf6WrJzGtDwfwzpUZUPdf2Le3gNAKFw6zuwypToxu1Y8",
  "key2": "aYhe3YGd2kbd5CkLdyTQtYYjmdPagJYndabqHsGB3mjDXkkKi2Kk45fneLidbLUEUHiNEhLtco4ovCNhcWxh8Mu",
  "key3": "2KTiT5G8Wtb476airxNbTMjkX4a8UNMM1Qnt6EQ7HD3tVF7NHyKyD6Ku6GhXo5bmNTQqEkA84m115dLfpbAc6YRb",
  "key4": "4dwZsmrq7QcM74rcaHrET6vfwDzPUbuu2Y9hKSDSZsk3CTv6uowj3S63xhbSNgyJnWPgYj26Ev3pP12255DRajuD",
  "key5": "4wVWna1sm1hMc4TnKGcPrPBLVJ43pijxA646LYu5VJ1qKi7a1Q33r2WzSgoi3YLkrTAVzGk2nf87Ag5YQ7pktkrU",
  "key6": "2D2vDiEudNYbSywAPhCz11nfZtEgauA4tLxxKBwejDPXvpKivpfWEoCy22XhHVwcBUyCpnxczghAdcNs3ZJ3SNcs",
  "key7": "36FMPjTMPauzcKgtbsZmNqTPfRCHhtwhrs1Ts5sYsLcWCvz82in88eCVm1Qu3JQWRVxn6uE2HpC9DUNKuYmevK2A",
  "key8": "2DVDkkZMAkpzgCqBGRUQptmnYbiWfmwJV7aoUStdvZcoyMb7UVwBGNJoJwBpLcHJyK8KznMbQ32KGgxsmNzwZ1hX",
  "key9": "2Gu6mcohJk7EZubfLMA54vxpkL8wxgymyuA5XiKCJw9yGneTSwQ4L4Uyu1fsFM9iRWJ9zHnURMjWSC4isYvZEDMn",
  "key10": "wph5scL5AaWmLwXdH1iduBZWeAmwSV9FU9yymxks4CbgChiqGASRw3bsxP8vATeFhRFcSEooTXUMyS7YjovXnN9",
  "key11": "vZe9kJWEYiaUTJ1dmdQ9nyeuAbN17CkDQZWpPnTB5vgGBQnZDrVauR2NATuPc474MtJF8kPVCDWsDLYBDcWVUS4",
  "key12": "4tcBbcy9ZPE9Ta3qZHM4bmrJrCV8VWg4zaf9dH6ovRpZoDoeNbhzsS8uez1ifsymToSct2skYUgrgGQnu7BZZ6jg",
  "key13": "sA7iXZ9LhHnGb8Lxa1nyeDnjZHeGYg4rCzYsBuHysWd8qWT71UmjxPHBxPbam3aDT8DeBu4HFw35EqAaomXrU4b",
  "key14": "2mrFUytgPoP7wSREuh8DHbcY7yaSvJT1hfuwxjV8ScELUpYPpTM5rKSW1iYyDicdM1L6eH5XBrFnnqVJvyMWQtxR",
  "key15": "2SrK3JcVWfg11WhySPmcFxTk92M4ypjV4Du7MaQe2y2ph84AciwEhu7dUhqhyzyRftbWqYoWdpRdKVGJxEywLwGN",
  "key16": "58zeEzUCjYoSgB2bed95JwNwES7wvhqpmz4DYoLPJZDbY8gBUQVUb195micHKySoyDJTkjZ6GQGT5DbAbYYksC36",
  "key17": "4fgjL5t2QZDJXKjRzezutncjWMUx69H1W1NgEXbzKxGKX1S9WFLoajszTKhWRhmhTFaEjjNPC1PcRjyfPREzuCh1",
  "key18": "7FVVD2Hs3SFmkt2cpkDBxUFEJB89cwDRqnSYgiQD4TzchSKosmLDXUNdPksAfZdcXEDSeDASf52mh9WN8Po5nz1",
  "key19": "4sTCBdqChb2xWLMCtRa5UyFDhcra6e9rBeFhwfwKzocAfPUPni54y1ahiksZNDMs12hNYsq39LRQVBTdGp5jbXkS",
  "key20": "JLookBFs1AGtB84ZUEG6xPhG6WRCoWbWmSgSZeRYEP5YMueKh7bP2cEbiErYjeo9e4aQxXCFP3VVG1MDpJrto8q",
  "key21": "3HBvyx4hzGQCWNkvvbguoWSVDgy493uJykPgTXkbMrwNE5NrEUwn8BFJtNTC3w64UBFYaDqsceAUefYNiagjQprp",
  "key22": "5HMA755kNT1ZSRDfSW2rHLXdhx2hysethTT2SvAgngxC7aGRtVmnVgbnmqQm5zzCE849Vd8skCe9wigD71JjG8RV",
  "key23": "5jGZpVKDQTPT6nGyFa97zLJL4TF78x6k7fcQQBsxj3kGV1S4NiDtjRuAZGZh98xj2QkdJGRBc7DAHpiijQ3Jf1pS",
  "key24": "2Nv7gMMRyWz95GNjB2KvtgcqMe9yK7xknJPtshcLJqGHmVJKWCj4BBwi3LQKgePFLAVTkMs4P9mutPNkrruVEt2z",
  "key25": "3K548jqbuLd7hiDZBotAFRfPAkRY3REFPM4LTiEKNojYGnK8SVE58fTzjkvxmxudTxFsX1VWKNQQEfivWjZdNStD",
  "key26": "4f9MzhUiCMVZimYpi4yat4TJ6v7kM1YZPdw8Mo5FWNcifThgWiVe94XQy4K6C9pAmsCSi8t5UuJ2F4MvxsxA9DnV",
  "key27": "5yBh1bJQxHhpsEjYMGFsXxoV7guar7eESqwEF2XSZBwBUSaYsvSV1yZwEXc89Cts6ZU6VziVarWoJKvzyS3qaaq5",
  "key28": "5PRdLjig1dtkq2gjxod34PGjdwj2fwFq7Xa13AAg4wAi3wNB76EhfbKq1ifjvyFqKkf2vw7dQvct65GZ8x4fpQXd",
  "key29": "5xcjsky7Ev29z6Uf4PqJjuNz6sZ3rZGzdoR8G5GfkT1MTJMrAFnzEwjdDkHNQkHcLHa9FnnFHv1EXB1icGXMgoJX",
  "key30": "jfGkcXaV4gbbgXfR81HLN6dN7gg3hEK5EWab7mTyNSw41VcPhxw7Ka6QgXekdFrPPZREGGfwpbAECbKJDW5a6Tx",
  "key31": "rk2YPsduC48wU5TZBvMgH2CjSt7f4BAvCt5eSGK3mT1vcahuhjmCCrx2NDLkUN4MgPpAuAEHEG6edJ4FnoGQivC",
  "key32": "3RaQ77b7HDeGsk6aN5DKJGEg4qhJjR4UT8gNynXKfqA9HH4tGjY3YRyMrdJpSmvbxd6mHu8P3iAgfE3PbiWaFkSe",
  "key33": "9qZwBP8yHkd5fjx4Zd5BhT8PYzhuLZMsTkEm2Y8QmTkgxPbokXha63QvqoJZS3j2GSYraPzS89RhYpH485URpMU",
  "key34": "5bajPzc9RyvmqsiZGdqso7EHR46MAMZVu3SVfXdp1jQ75H4HEV9KEzpG2QxbtheauaCd7qE82tUDFLEa82AFMgoB",
  "key35": "XXKXLuxQ6atDQbEdD112ekVLENjHoYE1CPPSjXNiARqZZNcqMJRgRiUsNMQ7JJvQuiXaxN4SoR2fip3wqQL95vo",
  "key36": "5SojXUFZz1Zt2E4BKVCqtZf5TzhYYwdPrFP8MzzKgPmUqSiybG2s9PAcp1fFoa6z4WT7nnq4qEn4t4i4psvnZ26d",
  "key37": "5UCx2mxWLZB9XWWYtyxFo16HKax8WXhXneqRxuc5JiAqXBM82CzBt1AR9t3o29t1yxLbctzmn5EqWFMxBmBpF6PP",
  "key38": "8wN4xZazcwZe58qd5gyh1KMKZP9cznwNrgQwrgUgmAikZTSaLFgCbgMB1orwUXsxyLM7khRJ9mK875ufrHHuocP",
  "key39": "2N9DDHvNBNVx2VmaVMQ4cm7b6S3bCE39YFFkqFTAf7k6X3JLgrW1UhFswQBbKVQiW5eLh26i2mHDxvbNLj7JjvjW",
  "key40": "4uwDoE2CJ3z2jiJbmZ4gs1wpNqsJ3Ub4U9jdqJ1jyuBC8JwRwBzpnLJcFXhzeGbz81HhwVPikRYHjZg14kocfbMx"
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
