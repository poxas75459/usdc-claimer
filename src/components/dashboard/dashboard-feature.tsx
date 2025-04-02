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
    "2wfV4VCQ91rMnubiMaUxQEPC8VeSTwuw2RbKKDsuEvDxu5st3XJV8sBQHk333VLMmHcu9dhctqkNho2GyfVvbERY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZ3zHhgPDn4hm8LbbY41GiAXGCWdJzPW6GYxvwAxP3umCV7bS6UEj29vnJUUUvqbUhNqFkkQLkp5BuPfoeyBb3D",
  "key1": "2uQEtkVjcopfhDwcAEqm2gu1o6LSEQyBGcpnZwK7PS5dA9GWg9ykqo5Myrw9VUsKEt5z8VeRbwjvEDZ2GoietL4L",
  "key2": "4ZWp3xbm6APXN8zjM5zSyUK7hpVor7nHTePD5WRC9q5RyW8AVEC877psv49yRapQVnCB99ifUGFy2r4qAq7AC16Z",
  "key3": "bozLdkMpTNJFQJkop3CEBcWDiKuUwYNTQgLjde7oc1BSeE2H9DFdUk6zF1mEYJWHT3irk7X4RUfZqTncMp3594d",
  "key4": "sybLmXBBadCbrKJoGb9pAoEeSkLFBd6rFre4zPWxqT31sQP4dSbVDaaTSpohg4PLzgNHXYY6ejKXJHm8q9SLBCc",
  "key5": "2QAeMzQeeWsB9yRgDWGddeNFiWJy1G68idowsYKeRBEYwQ1w3ZeFSoNFELwBs6Rwd1zYoMibAJj6PfNvWndwRdpe",
  "key6": "3836q7ZmqQPW6Cqn76fURV1ZHLQtJXiGoyusjkwnXmWww3Mr2AKHp7RQWNkz21HKmgqBMCxH4HU2NpTfrhKXw1hk",
  "key7": "3cLb13HTrEZhC3go32Y8gnjxnWQNa3yyyuoEbthn7gjR5Jj2CsA7U1oUBSVTH4gJuLxNwG2RMqyktnFHJUpGah2N",
  "key8": "5NMuZcxFtFq1nRebAqAkZWLtQSWBueY6hmSgpskeLnCHfrE2raZK4duPg8NiF8kkrwKW2rrS32dXPoSAPzoGvBqv",
  "key9": "37nXPfWEs8RWZQ1a2YDQz93aGiD7hZpH9db2S7he3DDxkcHQQdxJ5Yf7AVCuLG3WKAgbqEFJQxQrVKt2RWt9kTT2",
  "key10": "5xfXQyJbhJ8AHSohA1VDxwJT2Y9wr45aT3Vdj8LqdfgfE4c7v5LXuEN4YFxH2eXE5gHbuJxPkcRdazT3DmqJhWvV",
  "key11": "Z2rWufh5Lvyxdiv2JUBPmns5pyq9GdAAoKph1E9xJe595HG2NDjTZpZ5v94PW9hEuYUThpfN4AcEtkiUCKdfW26",
  "key12": "24jtcFMKZNF76SarkdxijQF3QXyhcrkCkZWSU9Vs13YDMpdWED38eKMTmqkKLJxm593YtSS1VZpPbVoUaES4sUf3",
  "key13": "3BaoVWtQHwhPz1636io1MAf2eUWyQdjT5XJ4jqJ2LFtYaq6kREzCeEoQipVhYZHCBfi3ghqJm2ijMRrTQ3PL1V3w",
  "key14": "29P3wF1XLKE4aJkB7RR3wkCHTu799J5USLHrnf3aCemX85ffKHWeLGDkodVQCo6vg51NMoDjC8aDb8agVoruqRDk",
  "key15": "3mXHUGkSKVzWvbLFDA46AHZM7ZNjbMbFEgGULpdorWVZKitpi86v8DUX9czDYKpsWcuK8oYKgVR869adX5D9udF8",
  "key16": "2b6TUtNASSugeyk1x4C3V6Ce5AFw6xiqjDWwRpsN9VFEJr4WHcGSx3EAhzXfiV8JAhFDgBkNyNHrhUyifqKwWdQe",
  "key17": "bmjggRrhQ4KAKtiV1bHkW9V157iRBZbJyTfmYVUWLt1HBfu7bipDuQPK6YaBrJKZdRqQ4aooLsyuzZtpwvAhs4g",
  "key18": "3cFUAMDp7xPBfRKjW9Fw6AcjtPCQzAgM3B2eW9iKkQ9NGS6ASYsNur3dSvgDwEsj6wDuZPYGnQMwT85yK1zmxA9v",
  "key19": "3tAmAzWxYfKveyC1FTEc1MxXPs1bhriKb8sTQqzeX8tvwQRCE8uwMFRLKHzGuTZom8cgT2sM47HFs5D7VxL7xtZ8",
  "key20": "4na8dzYdncDWeN1fTN9JuuJWFe6s982f3A1GDLjuCeQ2bGMmiKdgn5eZSXmi9raEEKCbRUyWoyNE3twVmDW1e6QV",
  "key21": "2dqJsCtP5nSxTg2Ufom44iDEYxMqnDtb9o7qZby5D54nFNupynAzv4ZmVK6RNM8mFkAEADKweUtdnVmfiT3Gg4hr",
  "key22": "41svG4Lh8FyYJHdUhteLZTzr1N4k1hM6EJTM8WjZzS87kLeV7LAEsC5yMqNVcKnjovyP3FDy9iKW4e54UJxAjqAq",
  "key23": "3Hg7DY5DN92zppaJR1mZvbavYHn1xCncX7KMpUqRUxxhxrEs3CaNdPzfJ2xMnjzeYPLFLwZfR332E8Sxef8NDbDX",
  "key24": "5ZU697iyjywqQ9ZYm4dsXqRvKi8FDJzLrwjZemWgBnB5r7D6byHU5xiRHexGqmJEmfaSHV67Z5yLZz7ARo2fu7aH",
  "key25": "2z87DTUcGvuFK2rE62NDQKhBoQ69tXdJHLaVZuCrcFqCP1RniGggamrT1zRzbyEAjbwDPz8eDSgJ1K5AcVoT4Z1n",
  "key26": "4puC45mFn3NnfjtRLho1cMkpdyptnyHfkyk9ZWaDrWSKFBuWj8h1r4BBpwKh55eVsJxNnNxp8QLBwMrvhEGNAa1L",
  "key27": "5z1xkbUL1HPJidjUrbqEbAe1n8EVYyYq3TBnpisvuNRs7cYBCAeF7epH6KAEcKeAcxeHAbHiUxDyyJ89ff62HxHA",
  "key28": "3B6YpmCYcm9o6DuVRPxvL7yJEF4HZCo3uNHLWgw4Y4vydpHcScRk6hpw9Mz46yR8eUYr77msmwBGLaWSdswQBBHw",
  "key29": "49fPZCFS2BhT9Xu8Y71pMkj6zbKjECctgTovKP3S34pD4uiSZk6m7QyPJACxC7CcXujzn6fq2QgQuj3DA9Jvcxdj",
  "key30": "5UmMpdQeRMEQvuqPeyDnQdzgFt6aBhxs8Xu5GqpYTVd2tZ6APaz48W18KvbKHGrYhjqqEsHRBTtbs5AdaBQ4oCDh",
  "key31": "4vF3YXzpZVzES1UujciUHNpYj7HspLugJpdizBTMFqjaCzStVsWxbxS14rKAyW1weu4AG9UGj1tMrnbpZ3UKcD5W",
  "key32": "Prdq8trDdWQWQfGnagBin578VcsE4WzBqpArjYUVgwLYS5q3PNTtnqdiJXtF1p6d3N7No7BevbMwE1HNdm5iFsY",
  "key33": "4P6uT9x3hT6qQVLtxnPzEgQ8QDTYPWHe8k1EfCXKBzuX5FgPPvugK72bcH2myoxVxXrkjjpBpPDSmcHQpfyWvCjx",
  "key34": "3yX2v7tp3gUXoM6Acs2uqXFrHhbP3ttCicdrdyjCY7yrR6UL6nocCjfwY7GdmVnbpLJJ7ojYoPWxsz931ipvJNf2",
  "key35": "2GCtxafaDqp3pf9YXmDcp8GFiiYuJUDPKTNJvpsMMNXFqixQcp4A8zxgDPV8EGSzb8xCG3DPMj1cuNeFQg2PfjCU",
  "key36": "2T5r945QBjmgu1kWfGCv7662M9aMQqC6uRLNJ6WM2EPBXTTzbEkeLxyZg7yAFpBbovQGawtBt6hSrtPFWYVr9SQ9"
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
