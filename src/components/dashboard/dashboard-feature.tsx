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
    "3UVMca4TwzC9xkVTQ3SAuF2JyGTUXvm2YikDWdkaZRsquPTfCBKTuxds2fKwyi9eKgUzbz8ooC3YFFsk3BWhNyuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DAx1dEapcrvXbPCesF8BJpAtgfhAaVbEjf23U42AZ5U6hLM3RnzgAgDB5iyM5b5KYoSWt6r74ycrEriEdQurUzB",
  "key1": "2MtZLq8WEEN7FZAYHCZrAHTN9mJy6fLV9TQ627uNnkJ53NVoUqWzJZDLNLPVcFu4eNNMnhePAZqqcN6GHSLrHAWE",
  "key2": "5vm24hvQqcgRpbacqFiYSbgDEhzs6ADBURDRdEYXSZrNuAGRnC8SUzxfgLreR6VWCsX7aDMY36vFy8NkXPUsd4kG",
  "key3": "5uLDpTtrqfeFo4yUXaqtdia6Lvx64216iwMhgGMGaDRmHfTimk5FQFGY73rhzCpwy6YUXdd7NKbpEBMe6mbR3fD6",
  "key4": "5nCFvTr4brnFs3i5RtenMihD8hX99rH936DBUSUt991K3snkkhqBwDK1ogn19e1Cwah3jsBUibAwoDeg8NFdx76A",
  "key5": "3CTxbAPHNjo1ZrRr2wnQEvFQSeM7AWUFXxNn8fxK8DEwSqkjEh9ocEPy9iYCM21YdkDSrA4eVnrQkivUkPqASgf3",
  "key6": "EuWsS57KgAZgQGDaFt9dujqR2qbHJmXoq2TFZa46mUQPY5VXYiGchasf9vwKWDkahGf8k2kfbp3A91MBr5pQtEo",
  "key7": "2iN1nqLmWxGpg75DxyMkoam5hhB99SguTHNSc8HN7HctfYM8bipPNwjtu1pnGzFcxSrJ4Jn5BakpRpQTkJyHRBag",
  "key8": "2aG6pP3cAFZW2b5vBTvM1S7DEfP6FHCWegtD6a9c7tW1SHeZJUTqq14RED1kTLnhvQ5JguMFCTnUwR7Ey5urwNn6",
  "key9": "45Qr6YaYi7SSLnR7R4mX7e1Scfe6tgwiRekxUhMZ143p4FEkx5wyh8cNPzUWcmLUGJ8PW8rEULYRkhapWzXV8i2n",
  "key10": "v9NLVYFTLszXen8jS8JUBRsKu1XSQxerXiZAGAP75vf8DC5PvNv8MX2Srb7DTzWakivSi9pBoqs3feGsUyJye6y",
  "key11": "4AgLrFgdxz3V6jUqAC9uByRvbkKbqZ7C4UygLA7xuvGcXtYaV9p12CusV3LN95XT2RVGA96ufqD1yqz2vngC9o2",
  "key12": "4xXrju4p8jiLmzWsYk7S8uAgzYfK6W86xG23FkCUE7Lf17sAmsXzJxcbQP3tT3ebydf5Xg7zBoiGHYYxEFvsFsQA",
  "key13": "59NVMD26zYAZQ9SZk6GWWytdZvzKrVymxD9S3sSQRTMXu5DGBnYrVYYQ5kXbNJaRFocFBFhKHSGPZr262PYttDZ8",
  "key14": "34HA82uTRvoq5haGFfGxmmVs4f8ikcjoQFhXBkHQYVG5Dj8Z4tuPAzTRsZ7yRsVETzJQbsDmEKgizuEHytd3ZLGK",
  "key15": "4Bzcq1xsswM2yzHFsioWL4aoALKfgYCcTihihhaswJrs5Lhu7FUX1cTCy3UhnY6xZk4XrUvrdSmErxxgLAoTZZjf",
  "key16": "3PaPJDEbyJcnRB2VefmDnARMWy8QATKuBLf1keYGt8n9NpTaTDA23mDR3D9L3K3x2ZPxJRDB71aDcDHLVB4BNL7b",
  "key17": "5qG69dwuiHKRJ3vrisFABiQWgn1LLHLEXjjiEuiBdbkWjChR5NTwefsoMgXmLkrWLDXnnifzpjUsrMWQw7mbCBaa",
  "key18": "3KRxegw1UyhBvPNxpg8Vjqd3qKmg11wxTL5H4By8oppVCgg7sf4CGbZdsKaq8zA7R4mxhpkt4hW5xtdGuAdGoVcf",
  "key19": "2bQMBmr64xudKnAXwnRvykN2FZTN4PrYSKxawYoqP4NuoqXGVrhJdNE5TWoytKgQa2EnLyyxsqCCX1H3rHGWL9jp",
  "key20": "38ynpSbUFGckvc3tsfmmCLp5t3LgUT1VTgXXksjvA33Bo2L5q6t1A2bUksAFiovSqrDW3vCRAYF4n2svzHcc1cy2",
  "key21": "2qrgy1WRhbAv9r4xzYjdVz324oFqzycv1oG99iUj6uovQXawoWBBkk6o68ncFfRJhSMhnCa8q3jXBqPWuonBw6J5",
  "key22": "4sdvaKJBxWzNMfLMxmxkqR1tAsoCRAMvESBU9HNhZyzttrcFX1Jy1bsQyroWemAnQMsURQkps3Faj2UzL7EHb2pC",
  "key23": "61AsTiTTdccGAUJgrsmPw6VVs1oFp3SGqQXkHwipVcXqGcq51ej21LYjpFAwk9pcrnUd7PMCht1uFW3DYwe1s4UV",
  "key24": "2RxE4ip1GGiGL5bCEAyq1KvuXwU1emQMttk8jbNgFt9aah3fTm5Deg92PXDjYW2LYTyehw3dAArTBzbGCUceP5er",
  "key25": "4wzwoyv3G7ADB9Znqar87f917AiyVW2HM5BruTnEV3xwTzQYUYXZSLRXupevmq21xxST5db3sjRGMhgRU61AgZdK",
  "key26": "59MXC7DVGtujBSvRNXoEbcgJqhbHZoGcoFEkMPGjVRZ4gNW8hQjXrGF7MPt6wrNQgxS42QU4WfSk79RMYynupErF",
  "key27": "67CoW5fS6LFh1B5RKz4cbYjPiyEekyKmB4p6Ur4J3NWDdrNqS38AJTwb69w3igz3fL5yAxSXWxQCNApSjWJpBhdZ",
  "key28": "39aM3Ms233JNTDUa7sJa4YqH3X3mdFiRHo6ChCMjbEJCxrazjMHvMZMuEcMZjpxa9fi3S2AfnGUprus632VqXDDW",
  "key29": "4oWwCWdApRpoTpjrQidFt9Q5EJT9z1C7wqmygFp1J92s96f2Nqj3NuCEf5iExMoP6sYna5YiaqyfG2jrjKRm5Kzz",
  "key30": "4a2EjdD9DhikJL5P2T5t78qFCmV8YVmvVjmpKkhEuUHVhafuPcTQG2JqxS8wWSQeCH1E9zxbYcbnZDvLPrriUzN3",
  "key31": "3xcg5iUhFHmtQ3Qt6Kz6dszz6nYPHMTVEASN9fj8teW8RDCHT2vUoXCw1ksDtw1gwBBHeuRdFjVNiocsEvYEXitp"
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
