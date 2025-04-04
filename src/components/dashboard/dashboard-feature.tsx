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
    "5LgsA7JBgDDq7Ko4vg941AD8ZEWVRFKhn2ax9nwmcrXtQNti8ZNvjk5zbsUsoiK6u5ZtdT97FTxSbnCdqk1neL2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Vnuw1YTNm9FAExjyiM51kyAywyvhkcDap1TpSwbZY9ipovibJ4F3Kbprz7kZRyRXmBEtw692XGsmg1C919K91A",
  "key1": "4mAHDznH4vMpSDUp4L7kNwpDLjdEuVES2twUaowFKrgRYzeFJAjPyTHkubfjmh5aY3WA8s3m3qguoaiMkibGpYyt",
  "key2": "2HLSZToSxdXffyPaYrT94Ux7EQBsAKpe3T6ZzRH88gDS6sFe3Rm55r7JRzP4e9snUybMj7BfBKtSgBNmbbGZzzXH",
  "key3": "3tHovqPgrb7bZXTJebJUEQYXvepkWTepGcULbVhpGFToGbM2735KL2RxjJxHLqmnDmyJ66ZpGrTCUnff4jXFiEdo",
  "key4": "5w8fo4moJ95bAKabDWeFKXYz862az7is1EwDcrddXfrXxVa8vX4S4aj3QhXxZZHDsMufQKRTEBq6ApeE3yr5CWAD",
  "key5": "Bh3hrJwcccus6KRQTCyJ38pxYzqCnVW4oUppALWUEWKL37aLMCok3RNPYYQfhaNBA1Y1kepCmqnVzoteJEZr5Da",
  "key6": "7MmXBEyBkCWi9LXfCg1EWzkmPXMEpS5DozYQbhdNBxEJfo6KhoLy7FTJGE3U75gjF2R79ZxARZN1CvEvthSXX8H",
  "key7": "ZUJNoV55dcVixhZKvxZFpgJ5Jm27HLF8irApP4rmQ1gWga4ZfeTa9i8wsk8NyEvB2SFEJZiPXhMdVK5pCpUGfzQ",
  "key8": "2F7y9etKm5miCZpYm7KAGgatmaDiXYVck5QmN6MQZoVDo6maCogrerTm5LXDaLHEyPDddygS1c8PNaXHCbemfa92",
  "key9": "5wesAw6odBeEYepRS9VwN9knpdigkTjRLQUw1QRf5RhcFJs2gRKvHCJGwyQMBq8sPa2didmKvcQyN1b1o5ZzD8dB",
  "key10": "2XGcVosPwpEUwtNzq7PGPNtXWvH5rRU6RptJwUbXHT5icTRFTpHAsqkbW4f2zH3PjKskV5mZf2DxnxrCqbdh9mWn",
  "key11": "2kjYo6Zi7VDubnuNDKEh7YZdPycAmXtxZAEEhfAdGd9FQcGLwmnsjyRwd34gvV5qZrFj1Nm5nUT2c43Nww7kqpnt",
  "key12": "5XQxYRmYYHEcgsPFyMY9KBoB9hwerVv6WXY38DCtJLBfaGAPfhq1ARR5DnA5ueYt3F4mHWSNsUwShxDYFkyXdZdG",
  "key13": "5mSvdWFchPufCBiPCTPrGV1zYMkfRVRSgM9TehSn7g64FbrymjyKss4GeGeFWuySa9cPSCi1b1if15ZfNM9tm1F7",
  "key14": "2Ym4UsQUgf8ao2aMo9K1pqWozXUw7Rxuy6MxhPiZ4oZNkMd8vsxVJx6h4PvFti2DbfGuoZNmFd8Yn5cZAwS89QVA",
  "key15": "5aRCk5LLmnH9YbqxsELtjpV7N9yiS2ePjpvYnjmTC2hrjtRW3dKaA2cBkK7TN91WBChwRufpsusLd8avdV1jugd8",
  "key16": "4fBqimmPwYRUkBRM4rsGxku9QgK8a1Suh7cQQQjcFUbG1FP8QWuWV817LQF7REraCLSjYGoG5JBYh4UKaQ2Te4ND",
  "key17": "4p6gwESGk4fcAYajACzhUAdD1UMS5XYhG1bdzSEP9ea9cyx12WugEVmNa5r69ufG9579i4NtmEd9XYFqbEFgxnJt",
  "key18": "34VxkFqUtzAsbZDwww8JsH6RANtHt3gCfVxxjfsNnfdaiWfcUBmNc6ibQz5s3gVxWYgSMJ8pBrTYr4p6qaQwP24j",
  "key19": "45S2zf1Sj8yGfCE3pxWQqvBhuKDBnD6V9UjH5owNU7Vbof5Shgo9d7t1RHimPTw8qNetDaVjRTiC3nRBjDC4hcYs",
  "key20": "22EwnL1D1mfHSsz89pHBNoeYx8AuJq3dt9mRP6r1EhNDYSrdrof6J3GsgTxmGwCUHLfx4Xgm5SAaV74nRr7eeCU1",
  "key21": "K6F949c4h7n6W1ewMLDQHhyvCXPJY5utXzgU78oaRahJMsR7eX8w5DShPf43mr7bhsmzwzhkBTNqoxoLuHKvgm2",
  "key22": "5JhFHqJNCyYAZyLwyLN2csvmfp7i39kMJiFtNWaNgDvjQ7R4rd3DUq9b7bDPVvd5vuRyYukgpZyvdEZHXgQCSa12",
  "key23": "3iRT7L6nQBJJkBN9D4yfQUuDgPrQtbm1bxtpxtSUtkLN2XPH7UcAZCcdwtdk93U8etGLJRj7sDaZHtJP6scx29rQ",
  "key24": "43C6zToYX5FTHoX7sS2sNnkvNEGnHt7RXKo4qWLqQAw8iUc3q3y1QmX7m9qC195SPmkJmuv9PdHv8sE2nVnwJsBi",
  "key25": "3sPJSXLPRAki5H8e65tpHTbqouAuXGzbCpZj2WtQUWCTB8QL2x1KJZ2GqSQ3jRR9pgzHiYrSg3e9pMw7yJ1mXKJS",
  "key26": "3Q1gWapLMitAGrF3sQ3c8CxkrUV18sdKfExcMqCeRbL2PtaDizPthvSzegzPo9joXppANx966qp168zcdbNeSsXe",
  "key27": "5qJCBgjzSnA9Qt9qX1q6JzaFLSqT85AJLktsBJPgd6ThyyaQPQm3t2arPmByksWA3M1T1KPGvfpGT8MWi5CLHxfP",
  "key28": "3xAeqWnYqDyS7wHP4S2JVvLT5KE3fywAEGtshMg7WTkRSX22QmRjWwoq1mREi77byFyax7EootV1oombCpMWSHHD",
  "key29": "5yg5hhBZS9HzSWEpkihG6eFxohYo9wWwkifYkmmBJzEuFT2eGtJWxHDmGy4nTewWfJYD5gtDCWAzNb1AhHErCvop",
  "key30": "4R87hSJVyHqpWhYLzfGQ9HWge1J6RDzaCHafgbSbZze6JSjHopSu1WQcr8befTWuiUwdck2He5gH2GTYpbTC6Gov",
  "key31": "2soyRNT5NfSupdmSqNSip52KRjMGgqXTMtRbuzjN4Y1nYuiXpcVRvRiiUZaSXUjQBVcBB2NWFkDMAeqSv7YoBD8H",
  "key32": "M9VFjZ298Kd6jP7yKpUrnRTk7oCSwwKCznHJ9R7RHHW2YVKq84JozbntXduGaDEy672ezSbnyH5EGqPgSxi2ehS",
  "key33": "44HDoPpjNLwV2uoPy3q7k3dVcZGGCwWzDhtfEDqjGUwqpqKtRXH9GKrMvxzHQxV2Azc4YjpWQcZkoznbeBouvnrQ",
  "key34": "4dxyd734HReRoQ2gqpj9AmvawwkncQhS1svv6wcZsXEjeVdzfGoTHz2Az2dQxo6zzZduLyKC6sfwY5PwyTo4F2s1",
  "key35": "247kLzSWYPwu2PMdQLJUmf7QsSZVjhFw8AipdpMVCoqD7SdpqGVjLhU5Ex27nNWpydooHTga3FB3zjcu83ri5WKN",
  "key36": "441b5vBPCVA8vyRyN4XFpuhK9hLWF2fhUyWgjNhjqeP8wPbZKUcBMxcax5iNMarStjPdAhhGAwMpoFRnaHVxASr8",
  "key37": "53WYc8FcS2imML6ZjLYzz9i4RwT93YSEakDMZqFmXGyvLB2JQTd6f4z7HsohpWw3eAZkSf8N2X18c9TkXcBNUKAs",
  "key38": "2z7kJMjRJWeuURtToCHnE5y6XJNNLAUNCyah4Wm8GDRmYSo64UKfmczBuTJgehHhqvJGSbBLCT4ryfLHFP18gPcj",
  "key39": "3fdmtJfPJNGqsSS8iaejAtVooas5BVwXZvLDKS8fCnN7XVHUkHKmoSvRd8EnEoqcM4pcCdxp2UmER1XBAgdHCZth"
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
