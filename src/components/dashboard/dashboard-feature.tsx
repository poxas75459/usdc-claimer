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
    "5YtR1FGuu2arjgsws8N6egDNVXYKpyraHpuSz4fmopeHaERcPCUrn3EdXsJK9CKhANgDcFwSYi6JeyfrxM6ce7hY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "usHAafKE3k3G7DLLwTUypcVGvNMcrmLCQcfS4aRCumBMdpoUUi55p2U671bhMDaPkyJDLxFFFDmUu1A5x9rGK4e",
  "key1": "3rcj1L7LvY6USjnDSkUD812hgqs8WVveF9GVLvFvFqntoYX3HKtN67REtGbyGWidn37XmjK8DLx4F4xLiKLLSVS5",
  "key2": "2nHai8rzdjxcZJkPzHMyfMuyQKdyiGXpYTdQmcfTk5ocxhJ6f116nHvH5tksbeQ1ZghQS6sgHwSBfTcxbc8t1kpa",
  "key3": "5nG7MVdBkP3Rkg1UsEdHeihwPgEWHGR24D9AznQChdpnwgiRgL1G6UMAKHZGisqTCB3AvDLs1Bz3MGrwbTkm2Uxy",
  "key4": "3qC4PcD13bm2FNZPUwGXPynrQqV891GkGuDUMVbX5mxCdZpdZW2P3eJUC1RFgSGThnN6rHM8DupN7x3PdF71rFA1",
  "key5": "5N7EJVjRUy5cXxz4nra6NWdwdMYUP6MUkxDkRn51odyTofXqppE3mSNJenRMNni6K4JDgMDW6j1Kad4C9S3rmMHZ",
  "key6": "4Mr4WJSMLbseX9YfaJidthSYhJMqqJDrbEkdHHv3fh1aUJ95NVKx4cAUSAvcYEKSYWJLJ2rt7Kn845XrUcPRGemG",
  "key7": "2VrnD4NdJNp7jTxrYbr6HjHpjcS7SSQvzehh2CfBqkHRKoSgU9NiySV1XHYuMvP7FsTZCQY772ggobZhmkDbNz2P",
  "key8": "E9a46FEMkU9W2asRHXTT1m293uSuknaXKSRmVXgYZc8LCYGfGjGaMzhxRb4ibACbpuKojLJ3QfcVqXYT2rBjUtd",
  "key9": "2XDMTdVNmJLvBjyAGewLDCLoA3MHBxT8CjUTSQ6SgZ5maVddMA3iNrUQ4XUwqqcP4Chyc5W6YYahCzegVWDfbcYJ",
  "key10": "3Aejcess8n5sGTyFLnDVsDVEJsojQHsG5UUHoRa9FMYB8rK3ZArQXuApGzakYNu7dfCJu8rhDmeqnBGiYsM6UaXW",
  "key11": "2T4YiZ9EFeYGXY5dX21SddXCm4rc6bzujJEtXCkrgS6VjZHaKTcDukhrHMRYMVy4t3HdVYDfsYRt3L1iKye8Fet3",
  "key12": "4rCuSSxhxFHeYYq3nRuH1RjnBEKGNRtnHY7hJbrto3Ch1eWn3Nf7w6D5xYJUVNRvmT2CZW9BZeffC7cMdSiRJZRm",
  "key13": "5g5AGcgDEWYAdbbcafv2XccJu5Z73aj3sHoE2rBtDw82zgMWkhjc94hdb52fMqMtR4LtYEw15WPa8QPjV5zfxqiK",
  "key14": "HgB3dvE1FV8Gm2N4NHCAUo3r1HLaUdT3PdNaSU8wcHM3UFpD5jwnar1EUEc8uCy9xs412fZ9k9P8bXyeC2W5qgx",
  "key15": "3bv4wFB7r4Xc6YPDo919YYqACoGFX7BxGprPTUDGioXGZwPRtfihyPzoPDwW5mTLH3E8MGMdMctaV7NmVwxL62t",
  "key16": "3STvQgvRKgP1gLFPpZvk8pnFY9R1PynxeoSsphimTn8838fLUzPNar1pRLGCymzMUJEr5ooNpj5TaHeoLQ2dVJBj",
  "key17": "5nSuaVZK6GzC5SgTP7C1CdRGns7wnTcT5tn5uDSFXQCM6t9PkMdouVKVnSmHJAXdPnobQZsyUgne2wBjDGHEEpE2",
  "key18": "UWHzXmJ7tDV5VzkQYj6ZEzbhRMrwjnCHojdNXxWNxPakiyeH1Nqw2CHJTsdU6Nt5bzvSXAJzCBv1ooRwasLJm65",
  "key19": "2t6jVDi699d4gqosMHy1npMM3anrDgX8eHFjLQSDgBTyui6ZnzhH6kQRAmUnjecZ8DG6ZufgXAY849b3pMEpXjpH",
  "key20": "3bDkh3oszuM4dCvwjXgTmqn3X44ko6uTkgwXoCWwCUF4BYjKacayFUpsPnvkD6MhwJ3uwbMqE771eck5c6SssEVR",
  "key21": "39aAELv9N7XU1hgwnmn28QVvp7gg6RM3JeN6yZ85B1csgSYZ7KkHi13KYMHCfs6fvnnF9k2b2Qg9aXX7rQ5bWmRn",
  "key22": "4Xi7yQsQYnaEXEn52pXjxwCRXdN5RCcjRq9JzP9fDgWFwki1PayLj97aC5VLp7AX5DFvEKTe34msqMe8so9kQGqH",
  "key23": "25m55f3gTUyC5CS4X65emeNQJLb8DiLr15LNx6JBsWv9ExBu71gqKxmfZQJ1xUkfCNVuSMPxzWwzxQHeHhhBJCK6",
  "key24": "4tNf7dF2EbKz2USjYyH2Q6nL6TADZVX2m6ssmwfK7rA5Rk4JwdCQxaUSoba5JoU538JU26mE7Hv3UTZZtP6C67Nb",
  "key25": "2yuXm5mpRQoRQzFZSoFH33ZoLHKeopnv8s7uPEnrBt57aTdLF2FuftMR3vFbWJdvTvopE48skaUKSZpHRf68EXyX",
  "key26": "1vsHPQBGW8mEK7uYy1RMepAzkrgptraEfzsSf6NeTFRFFeCHiw2EfhknLkVjDpVArnhyPnDZytGZj8rC435gqNa",
  "key27": "5UeYTfyvJnuFSRjtUoKmzuqxqwU2pjcCiw9w1FHCMCxnGFuSRi3GUnDg2qSwfnsTDYXfTc74bQENrzoWHAjQxUj3",
  "key28": "2VEJyLiCYZgPtRp7MVwJkUQ5QVHisXX1BApLAXti1V8WUTvr2oAB3wW2wKpkaPy5si7zFviZyFvbtjB2T5Hkt8p5",
  "key29": "5pHeyNHgYjz7GcB783oWQ6JwhGRd85jtbi8kErDQdS8tmpEgQrqrRaXVoxj7HF9S5J8q287qrvaoLKbuTxuarSFV",
  "key30": "Y3m6rBvDdwtMSNy8kvrERAYukVUtixPArBcU4Xdi3sp4jYxF46fKQMvfr79kgdxtnuSqhj4KwnDpM3Xvps4VEox",
  "key31": "5mawArJC1qxpFn9LYzec8BsyJSK1H9hQ321ykQVeweGeJFwExvyQsW27Do6gMocmn9hcfYKXvjeaKWy5U9Tj7Yt",
  "key32": "c3EVrTq8WdUTMgSYdENYLAyrJHpvdmcfwT8c9g7rFR82JDmuPmj1VvRH8dLx7sr19jW12cKghyGVmUWF99GGhB1",
  "key33": "4gyBJUF9W11hPe1oDdYcwVJQqixNm1dkx9XizH5apTjhAJ4PLynvieXbZtUAXaCsPmMMHdkf9oMp5WpGqDkqkLXK",
  "key34": "5hvCpz55bU9F4p62YWw7i8m1dbbE6QG3ZkHtnfdB9Lb8g8A7znoodyRGodjXKiyc9w3opq6pwsSaNkv4oCKzxE2y",
  "key35": "57BiJpFdwgn9tEaoM9DgfUv2GeHimm2rQj8AaDfNcigzX2AsnLEQwUuh6TLPSMZToW6cK7ALkb8ktBzpCBfdSD8X",
  "key36": "XfJgpyEC4i573TrncVUcCaSrQahYyWojPNMckTeQxtriXZAsqsjTK72SWTy55AuxKp6KA18iDjWpJhMmALBu321",
  "key37": "9mWdF1SbYkqYfrakNcHiYuoE2EJXMHGvsxaobxv9RWewZJRqWEZdL224iu6c4tYkwFxQVb6saSBt3KC4sT7ZfNK",
  "key38": "33ADwXht8XyTTpfJEbcCiC6GrnXbDBQnVgnRs4ogv4zJSuYmS4psGUtobhqwQyYemmdpJSafGXWriCYbuGRrYooz"
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
