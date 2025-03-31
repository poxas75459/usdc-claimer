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
    "FjeMshAWqgRvrSBESThGANqCDzPajUS4FRcqUZQLNrsCLsZUdGTthxJi2gX1Aw29mKBbnkg5G9gNTjrSg5Bgzu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qx6kMT2WqD7PrJ3tAAvnKjgNnHMrL4wNMtwuZidFRwBNAEmtT7pV1y43LryyDW8xwLqLxVtZ1o94TGKbuaTqEG",
  "key1": "4V94UNBvC3vWgvgQMAGm4JwCGFbc7hZtbSP4EGkBpfSe3eHiDcekziEZzxDLEMZCbU39HMa44R5PeY64GABcUheH",
  "key2": "4RisGsveGxiuYTbJDxxpcVdDNhy7vxQopMEeT83NKW3gySNr15m3MfxaG1TPbZ2NXwx5VXE56N4PArNw66xdhqG",
  "key3": "2WWHxhFZDNoRTQsv3awBSQtCQgZTx4Pi99ak9AxukPtRn2zwdLfxMp6H18a46QWG7SdzciCAG8dGvqRsPTGzxp8b",
  "key4": "5cwPb4JhAnZ89h8ueGZ8134aVyv6B4c3XAWfCedXzDQ4ns6yKnaVcsq3irnT4rhHxRdsSkU2SdduJDUP2iME7dBo",
  "key5": "5nJY9ErT9a6YbHsUb4ptSioFBLPfq1wXNMfAK5QNP7Jdin8NFui4qMzJtpDBUXFBUhMqtMPc4SvAwFhFmggk2rJJ",
  "key6": "5HCzS4qSbRKLwzfCePAqAZXNfrQYh5GMBqqgRzaKzz32EVAU22x2pWTdvCNriGMepNie7bc3wEvk6ySL5aG7Mt6k",
  "key7": "3ZervhvKCutgUfwDFNRuP3BCdz2dDz2jjxBhhiDyQ9vQj1z151jKR9Q1MN3EADYDvP5R43McTWCz9jFfc7TzdWcM",
  "key8": "2MEZBpHecez3YQTyPVa5kGcW4mb3eB9gfoVVR6Q4kBJx9GcwB18tYWwNuFac2EvPp7ZEP73AFNk9GM92RQz915x5",
  "key9": "2DztqVFrd9xGU3cvTts8RNvKuZVZtmbf7c8TPgsoeVxySUr9efTrZgYYkr4r6x23gjACdnC18bwRdZ7sgFYCCWNR",
  "key10": "3A7n8kvTNejf7c2S2eKgmbsV3jKdLFHwtXvsQ36TtXuz6d9zajQPnUJ9T2mZRxVnf2bDLXUfHEJxEoo9xSZHwe9x",
  "key11": "52geaB87bUYuKzEjLEvRHwNj1HLCmtQi9LPXN4HYnaXS2TJaGECgV3GqJHsbiAmxbxTUWKFPAxM9Uau5AvXWpdzR",
  "key12": "bQc3fkio69ksoUssH9TdWLDyCVFiyxxseTmjzByzH85BEkr3q7hCtrTGYAx4HF4DfKGt7BvgavXgLZejDKc4sm7",
  "key13": "2Ex9SrNa3wgARYxxD4YBC4kKTk59RWaTntmYMpqvfmCcKTWCxArwVz5QzPa3otRUghFDwfiHm9gC8PEKZSfgnXgf",
  "key14": "3mFAXZVLPkP2ciHSbsGG1CpAud5kBP6fPJEUXCKepYk2US4QPw5MF9DCeiudhvHPGPt9732pdAauUrxt5YB8CXS1",
  "key15": "2x3m5YsgYSTm38WKd7b8bt17iEZPefgP3VyCkq7TXsxQxGfDLMiqtmCiPXYM2JZKMZZsZY6v9NLYXdYg2A3wZLXd",
  "key16": "41USTWdpuw17YEjcYeMNnqvTs3WCGLztbYR1EsgnoxybGeRXoFCaTGv36d868dNMih8ejJ2aJLiBz4m6ofenWdEQ",
  "key17": "XTg9DF6Y91LSrGvYruYbvwpR6xfKU6Fn37K8qzDkzj85fKhUqe5cFUBVKc5Kw37h6FchymnLyL2Cqyn3Bcnas82",
  "key18": "4QeZt8Ph4ZqYP7Cx81jXDbVJS9Ck6LiQdX8JrBkBbkP5sef6A56YHGgFL6grgyThTWycUnNbywx2G77i3b8xymbZ",
  "key19": "tjeADm4gWoG7NsBNdrVGJgHb3fyxcurroYghZtuCPxjMmb281Ha6KhafBYK7nDe52H7NjX2tUBdu9eqDK8qA5Q9",
  "key20": "CnKq6HXUX3mjG2bRnzBrVVXiZ5jbjtHT94Pz3NmY9oXTW7ar6vmg2wXTKsfwzscTYhih9JYpXy4X2ijaFhZig37",
  "key21": "3TGh9tyrRtshPXDhTneE6T6UtdGaFTKHXgLELc8ci2UTWyTCvFtnEMnBq2Ydqd1FfmTUJqXdS5xAsbsMFxKnRwKE",
  "key22": "5FZ6HNNwjXdtrRxJptyP6D6B8gY83cpVDNF28Y5m6UD4mgNy2WpgXozt7ezMVPQL9q184escwpqAWzCS4DMUzZkS",
  "key23": "524oimjr24T6nYS4p2AspuNpoV44HH4Ct4VDJnM1bVwVXRMmfr6T5FQ146sS95pTYAyKc2QuFyTneRtVCbHEu1SX",
  "key24": "48qjmQpHGTKt8UA72fvAamD5kcyNXpziVEosBAjxzDznun6PctMkxMUBbkri2FA1F9vkEPjy3urzK7iUZ7rSDXAr",
  "key25": "2e1j7pY6aPY4UNRYBjjLTfzEwTNqP5j6hQfEYs39nkN5ap9d6aHHn424rzo93MwjtEuQipuWBFU1TzYd26b1XtGM",
  "key26": "3FFYK3rFqKwZt2m5HAZ9bWNtQKVJzvvm6ryssWUYEbSEJBFCHDWbBpaK8uWESzj4jNDYX68HLViJ79XY3RQmG96t",
  "key27": "3WnBuuzeEkBkrNRyvsVLTZVQT5mqLs9s3jNZsXuaguDDn6iSi6aZkMT6LUNMsqovmQ81M2wFq7m3XAauzAXfphFB",
  "key28": "22bW3XDcHXYkY7YPoHeoUurw1DuKisBTQ5WHDgKQJekbnBmdqCrj1LELLv1Pe4daBmrfP7wf8k7xyowf8YXjrzz1",
  "key29": "4fcpcQjvxoTYjRAiLNdeEm2NyHeKRjqaHQwA3QB6q4WkL4WncQJt9TMbuYgPqJBUUfVVbzuSMzhH81k9FfuppYGF",
  "key30": "2j1P5DPNYSZEczVHXwWgvhk5aYiKQPgme4nH9sXwjT6EP4hHirbAT4T8c1mmcMJrx2GwEpHnASsQC6AuAn5KjHwK",
  "key31": "2T1VN5RppcJNr1soiPuyHyn5WaQWudMCccExibNvZQobg8RWdMatWsVCPWZjuCDEfgAGskdHjYNh4bg3SQY3y5TJ",
  "key32": "3tGoDbJyQ72J3SbuMPfU6AjKCKZbxweJ7iX3LXwaycUgR3bnvVtsrxE2Z7GSpiRh4ps6G7AsRQuaUK47ioExt7Aq",
  "key33": "4eczzvmMvG77BYAK8NMmD8DFojU9V8nPU9p5Ks4qXV6PrHomsVPQ1c2dTC88uN9qXRVb98pBfwhh7jgoGf7CQAm9",
  "key34": "2NSddKFDfK5v4cjUi8ujW8g3fK6ggFN7r4nqKMWefeieLaLrB2yj6vketsFu2pi9Ki5RHv4mvGyeokpc6gBvDDen",
  "key35": "XgPqQipT58LDib2gCsuBSvLKUs6VZjSNjZC4d77e6Mq54kABSsHAv4RoYWomaPdrJ6WdhPCq9EJsVjHKRA9XNwq",
  "key36": "53RJGgLd8Boi1sCRckXwxGZZ6hDf5cKgws8QKGEV5oSAfhTeaLayatM9RX5dV28zgyqH9Zz7EM8Ny5L81s7WeHG",
  "key37": "5FYke5xZofyL6kcbs1wTj6VdirzzNiJYGM2w4GHLJ1o232HY2XeHr85kYHMa9CPMCFfXuGzw82Cx6S5A19nRov17",
  "key38": "jUASyhmm7YSmPdFzGL6jnKN5WWDrGpGguddBu8z326YvShSTACaByT7jALTAqHts57gNZ4JCYbnYv21j6h8gsJ4",
  "key39": "27scN7pENgawyzSb7tSTSf5tp1NBNTWUPjamN5wD2VDb7BnU9eMSUmyG8kmFuXPeVwGWnEmynJcrwvft4mZ4Pj7n",
  "key40": "XdAVp8aXhLQAhjj8GQi5ZtoDLW5BzPGxk2YMriYYSoKj5rsJt3bn2GodQyinPpBbL5ftCyg2i6UcASFAbfopfcN",
  "key41": "33JqBGmZHeLrAEHkgjqZVg78P9KxtmHQTeFzNAarKaTYhBN2tv36xhZ8saKnmCY3hyWs3BKoVnenxVtAao7VWehA",
  "key42": "5YNr9rJFjscsKFKr8L8M8DoYB26VrBJKQVQY9x8NpH6sWBTGyJ4hemDeqCVPxBjiG2eEmrR7mddNginY5GRCqgQd",
  "key43": "65yzNQDnmiqtciKLzbFZZBBfgSss2ZPCUov9EhGu7mnYsJMkrGRD5i6L6C2kscNyi6ZSvwskGbnoiQ68ohK4jYaf",
  "key44": "4fr3h27jdBpMo8S24GADPRunLh3J36XpDAQkA49mMr2xwDDANm5m8yUp1LzCwrw3dCBpC3qGDw7AvL1bi6EvvQNF",
  "key45": "LUrgmPKDH64iUewT2XQyHpuhhwtTSBpcFYKFMe1ThnE3kj8dJbvCds9E34ReodhRqCV61teB1i7pZnHCuC3zb9M",
  "key46": "au2xxihyAQiUPWV2Etdqu7pcJbAuqDdkStn2BGQQ3L14oADQ1gYjQW1wXgSE3nNwi834WcjDsQUSZ6yrYGny6QD",
  "key47": "5Lr4CtV4ghHu7nxjqxiov9fU4Qshw9dBVCr7TD2JVy4XjUVub3QP7m2YKL3zJmVxYGrAirR42Gu2ZbEw98twKqZZ",
  "key48": "TPgTG7K59fW7eBHzJtegeyZkhopuCtj7Ky3KCEUbNVCZPG8VEvS2aJzhw2MWcU45AEBSTEgAZzuyKcndAF1CKW5"
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
