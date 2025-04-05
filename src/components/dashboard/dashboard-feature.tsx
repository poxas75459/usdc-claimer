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
    "4Tn8T79mDDxYEvivYUWuQSCmwwRBjWp1WiCFoUXWukkehffW1M3DPRXaiwDLcTQoeaZJGvMFvoqm1TXNHFcbNSwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4myT8Wah1KAZ8JPfcohgvNVSvJDNin9Kj4EgPNHwweyEMKqpMhcp1reNcFXFYEeseg98RRkTRc4RxwdnxEyfmJMr",
  "key1": "3hXgWYzKuhgQHFy2WCouGbhcKdn4TUXuN8ciSpRWND2jc72P4baPuoFuj3SsQNZ1DzgkwRkNLyzFgU7NVx9BVC5h",
  "key2": "3JoYwoAUzFMn8FL7esyb4AvaiDWU5oXVhekPL6w3aWy5KVo4tRSV3uFFvSvvRCnKh2oUvfXjcwMfhKPUGXVjoP8X",
  "key3": "5AasQ1twox9GHNV4d8uXTuwEBER8YDdN2QG6gVnXvYyEnj3qXgsBVZrLnyXn7Yr2hzCj9DepjJJmLuW9zQEdBtiX",
  "key4": "3uMRjjc4YKXogEdQVSo1BpciTvEZBAcy2FePtkwSCeCUXnVGroiDdzs1ehpDrvBFuDYN6yB6NyycvmQdruaaDGTw",
  "key5": "2yfaytmid3fdRQ5FYPbVP2Bn9GEAVPHzFFoNHpNCKemccUvRqUFW1UupApLerYhGD9sFw6XztQJJHfsj9tmHwxfW",
  "key6": "4rndAa89RsYx8ehboi3KKP61fME2PqvEjxDz8mdM8bVyw8smGx7ZF9EY6whGGxxTFKMDRMKxFEq67WRbfqYcRxW4",
  "key7": "53nGJNRfwmjNZnmfREjYVjXmuEX2szHa4a5i1X4EbsHEQqQCk9xxvJgTFnntaY6u81PwwiseEVZhyvXoKSu8w3B4",
  "key8": "uS59BHRqDhN9RTDWST1pQpWDER4n8d76doqaER78KvRYKB2tEXGKabHbS7RHc36XAqXYvSDoALU91Si25DcaKGd",
  "key9": "4oQ7vvoNgNHGtpEYGYUMB1LccnXoZCZGGWT2VuJtTgqM4n4nXRZqUnSwVvXuHW2VuBboJ9AFerzgTjNac1ThJoBP",
  "key10": "2Y3cc7JxhrxWtwZF4UpDC45gP54mkwxjFnFwLNGWiMJ9jYhXHEVMivMcjpJ9PERVxewZGspN7xMEBYspousYhMCS",
  "key11": "5DSTJC3PHUMLQg385sBTbah5QEKatj46BFKedN5p7wPnnvbezQh6XSyPKA1bVqMhMwMvMKF1UvUTY9U8uNuEEevF",
  "key12": "3QhdptxdRemBC3pQQnKh1fhgNg1DBKcJdL72fJCPCeHphADcsPnsCzWcZ6jV9oncZHFfYT6CwaRsWRb6FFAb59wf",
  "key13": "zqFZoAwQg8wPRermy3vi5zGkzRsHM9eVEiSiZLseytpWPKauTVqPiMCbbTX6g2PrrXvKbiGYkkrmSBzHaugtvcC",
  "key14": "3XMT2xTQd6NpEeBSJGFHLWx7UKPH9xtprKz41AzsSPquQnKq3ra1DzsUMsF6F4YPUSgdBRrVzEpzA1FJYKHBZ11L",
  "key15": "4QTgC597YCsqKQveKKQpYHywtZ2aTACFdJuicm7qWwP9cDj9Pkz7qvSpHxNFUxdCDdKsRcbWi7WyjVfMjMn1ESqz",
  "key16": "eyrPiqjdSe4SztP3vbG6b9HJfdSZ5puni5KTBgLi4r8ed5XHf3phXABkAUCnpUKeiY4T3e6XgDzVD2A9bs2WdN4",
  "key17": "55gZLFf8yewuFentQ5HgB9yUHwxja83fZ44h1QxhhZ2DUN6fT2sK2gDicfFWwJYyqZw5Uqf5wV1VxL7dba4euLsq",
  "key18": "qiBvb1ut4LpjpuyU2PASTVK9yG9CMBKpr58iqhdTFSDukPbHyfDV2vYQjfoScMqapfiuDgTcyytsDUDuGeURGiw",
  "key19": "2ipFNStCzoeqmnkejAneLheU99jTbtTGv94BgFV2LX8NT6x5t2JieYuiAgWU6EPV44X9pqn9haMnau9MvFGtsSPj",
  "key20": "eR8Du4jEyyZXG7282FovyKHP6hjWevpMLsyv2wnuDPghY1hSjFK16q7NB6ZLJguFMcy7qEzwRWYkNpeemvJmZDS",
  "key21": "2UbvBAYjYGGH6Dxr2FT4BPZsNEubtscpybdK83heCe52p8uhvqpUbDfzWBkCvrmwtHbeBbSQcWoXn8isH9FhD1Fc",
  "key22": "icBpZMPTbmuS9Q8YGhvFze2dry3TzscybBLjmYrvZbBPG69MpPYRvVYaWhRvcUgPP5a8LxEHLzjervFBrjWFrXt",
  "key23": "4LHNPS2zsRpVM7poFCGQPk2M2DXD63D5t711oNLvo3PYUx8CXDZkXzDETJAg4zbqqmDVjDRK3BMHnBoPF69GHtKQ",
  "key24": "5ERcn19LjpAWsZwrnPqt64M3oqYGNGXQbgsRrN5zmw7VEYjjWhgagWnqFz6kn1rs2Kx1Dnm6fw9FBDNytsdXyqQw",
  "key25": "jBiQgwnjYqZ2wx17keV3MEJ9CT89rxvnfqLUKzrUWDksvoJZH92S9XJ9NJbUx3JupPj4ttT3xkHZAYJVF2JtgTk",
  "key26": "6743LT1QtR5RcAFPrDSCpP1dd2vCxuNFuUGcue6VEBRj69fBNJixHQqss1MqgLP7jYHF5mYutBin1FoxuexiMsKH",
  "key27": "2E6bJTzSyYGicFHHKGXrGnWZo3ArGSGdPssGDfyrYQTHB9UVGGdsyKifzZrELPXNVDBcHybXRbLir6czZ7XTwFxx",
  "key28": "GpeEv8bzXw2D7LdB2u1bdmkT3T4LGcVEvwLMeHWzRgrC7DvV9njs71TxoeDMvCngN6Hpx3e5fybU9ueXf4GtxVA",
  "key29": "4krZt8cYcKVTGdqvQraKYfdGQXJeBFkyL7gfpwX1RWDZszabRQgi6QTDcfD77xyeGdNVjtc16wG71wZjL3KVMoW",
  "key30": "cEEh1a2DQmMptFpYe8yym3QorrYrejMUAbowPVUA2Uhf33p5ewzvtxLChnu6DKpr7g51CdW6aDo9P2dxrwf9Hux",
  "key31": "5NAziDwbFGM6pXMpD2iX8dXNBuz6buwEeRGMau8M71snJ1eoqDcxSQiL2Kw3xFq1YEKjPNBPsSDf3D2YgT3zx4Ej",
  "key32": "4T6TmWK3xG3q2xFBod15HTZ2c1JK7i4wTaTEqwHvm8A6grNJGmrCryzT5AuFgrmyNvEt2gdYG2ZUKnmN5QzLdrzM",
  "key33": "2Y8Xvm6wmWFRjD9DcQ5qDn9YCsH9ir81iXSB9Xc1g6uLN2hRxQzyFTyXGAEj3tuMqPPPRcTKaJZ5HU57CyPGZJga",
  "key34": "2nQJ7xa3Gzc7qqWZycGpxry89oRvfFRnjXNQuqK7m7tyWUs3dt9DVrSjVNmK9a4cQvPnfHd3TitXYFp7rhQccMU4",
  "key35": "5TVve4CKPQCf59edxDf7mcX8emeu55CBZhgBUGxNomoyFvRuQdK34gneLbWPYz3RdUzic935g6MGNTuP8CJJPEAP",
  "key36": "Q1tKwZ9TdSGoGXFkp5QjMS6ot1XPFqWMEEa4xbStZMNpJnZYdNps2G5WCsCtCi4xhgwEsxbkhJsz3XPieWkhg7r"
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
