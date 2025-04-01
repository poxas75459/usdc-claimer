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
    "b5Urbt5KvHPJLYLJ7csFedQTQ5oX2BuTuTkZhoSb3cVRa2wT57G1e77fTYTSyU3F7rBab2tybxiMCqyZG1wLyQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "651q7fRByy6kxAoFGtAhKsTBWruXDVhS7Pf2FGxpjzJuk5tGVvxgANHRsECrkPXVxKvT6cxmxep5kBBM4KM8LdeQ",
  "key1": "5uMWj5pVpjnp2b11m85Tur7fUsHgbZKAiL3bH3oZQgzBDvhbTKkEeXZb3e9jGNDYZux1FmCE7uMPDv2hPVFwh1jo",
  "key2": "2zxUJjacNV1oqpmSVPwpgGAnRWPzTzqQscUL4NTfR8MRALj9jwfXfWTXLBJCcFsYm63jdqpinYghFzG14at7TS5A",
  "key3": "4t5wBiXL5kqRtT1JGzA2WoL67GKTuVDr8igQpH51ooXgW5S3T8ciC6DnkCoRYpDDQsJNmBmLUBcUhYjuTVTVoZKL",
  "key4": "PYiqr4A1fhWL1CBGtUy2CTKA47uwAcHT9tw37UTWUwMu8XecoFwhBmMdaNxPDeucQZJFEhNdW3r7Rzox3GaEsck",
  "key5": "24jBqDvWbUvWKjysfrLP3qatd4qoRrxZQyZYVfNU1ucbktCq1d9jULxo5A3j9iU5MRHMDNm1uuhMrAyRxLdzbchN",
  "key6": "128tcE8QN9KVpAnWQuLcZCo1yABF6X5hiCGq2gADgY5cVkm9cHtiDRe815ELoQHQYUGBbWLvQ2NznsRp26cU9R8A",
  "key7": "2HKBjntjRLiutxhbLbma93nnhDboVZ7mEP4Fcniym7nEJ4zvr2P6KFZyqZFshw8mikz8i2oXR3n96t5Wi8HWvMGR",
  "key8": "4u9b83JGY3nRmdA94PLc31svKmWPEW35cJM4sYzNntCiDF1kz82EZ5RkyBQ2KmajxP3x1kwymgzxjvmsBBx17uE6",
  "key9": "2UtxvBjH7xzeuHN2SizY2zkP2wvR9ZZVenop3F7gTkDu66VwEBrcbiASQdHT1yZSzYwQpxryr3TpbUGbUZFho9zF",
  "key10": "4ovAEvek2EtjiGGXHpAPQLHhkzg48zhvBA4326TzLTVmY9fVBnQMtEcz2N5AFbPwCss3cb5HtQLBFu5x1jJPbbam",
  "key11": "3W6uNRsayPc7bqxMVrzmJWSvNUCDAN11zSipZ2XLuffJgUBLDSNbH2NtLvSX2UU2eptK9L87H4gpVsd2FX7uncdF",
  "key12": "3CG2AoY16iC3rexYjkWMa1juLw188S3THC6Jn4xmLuHihfx8z2WEPcNmWWFgajBxtFkQSvVMAxYopbieq5fy3VJi",
  "key13": "3K33uWWJHWdPbSLw33FuUEnt8BEs42SCx4gSnEEA1MxWwWpE5Y8meRR1o22gskwduutWLbuU98NYfsz6ozX8NbHg",
  "key14": "2kX6TWmJpzfvrTe1PsGxZbhrLs9cEppZJrZPDdsx4FF8tbvGi4mM5gMEbQgtYVYgcCgZa9e5mAYHd2iTYEw7pH3Q",
  "key15": "2JCBP6K4UfjzZXEzcTbBs6AonS7EQ325gNXxCpQ6YF2dVJQVkBhxpZcCACo6Tymc7NNXAV9ESzFmpGtT1toQsqzg",
  "key16": "2J5BLrts24TLqXapS5C3TQ1kfoVrHMeDu5SbbL7Z3kfBqWMcsnDgJFiqu6h9Hh6pEVtNT9VWriMVJdqrVEUkbH4D",
  "key17": "UNzFBCo7p8KixhhApzLA2bgxKGgxGnabx1WXH3sn8XhcdsdMea7zPmYi3Go4zvSaF2vM54ZCHeJ6xRGeMS8Xg7h",
  "key18": "2zr4Q17ta9eUUMkNYNHgLwDgRcGUocWrf3YqVc7UZb5ovDscZCnJ7TysrFLJz9JyQBVrMDvJ6VC15vBjDt9x7sWs",
  "key19": "nRhsCNqxEU9YJMrqYaCxAhbvkheFoJYoK1J4DMBRUenuPyNfTu8ixyKmm6kSCjV2PYeSHoNTaoyL9qGdnGZZGiR",
  "key20": "5rtQpojmtsxppK8VoRSmpHxNEd7ZrGZR3ocVMQsX3Sw3CDkRJ8GqccrUXRv3xbX43kqUQXTCwiwSaRzyF8vfx3Wd",
  "key21": "5zWmaDHT2jRfJ5oXEtwGrCs7Fj3UWSNrXLJQ15ufeGzWNC3UN4pFsZK4NZYFPRhSS6vqXBc8J5UbWf9JHcmptauL",
  "key22": "3cy4EfqnMkXHp6DA53bDhqJ2u8WKReVNz5EpukMsD17BUnumWbRk2XudWepjivkgkQGdx9i53KoC1E7ABN2c9dLE",
  "key23": "5316zaNkgRaH4u7oXYGKdx8YZm6mjw4ofE1UXn3tbv9JP2KPLunTmyWKuN9z3WPEjFizm9xqLSEExgXRJ3mmkdGq",
  "key24": "4wTPrMCTF4zCEL3r65vV1kVreN5ef1opD7n7EARGRAUAg667bV4AKjtYH5f7HKZM8b4Ldp8YLvTLTPcMTTzEpAxr",
  "key25": "3BF5UdQrdS1sRXwxD52jfrPqW3mitZ1Zk1mN6N3yuo4mycQGwMgub55MBSFZTqE8G2k49DoDqbRn8ZYfN4YrPCFq",
  "key26": "nbWeh1C2K7ycgjHF8FSqvyQJkDSMnhbX2EaU5R2onPPxLydSi3smPh2HQp1BSQQ8nUoP7QASRsfKHATfLJbvovU",
  "key27": "5z9aoz4uEEdbvVy9g6AqnXwhcjzkfrttGvbzFgvASZCeT5EZ7Sn1Z4LgsWeC2KtTidqBqeJzft2QaNDNtQsxxXDr",
  "key28": "62tWuBV2bgytdBcR8C81ip8sNS59DoWvSAvUzkFar7EJR8jZFUnsh9wyLHya88LFhwBBFaUPBNSYbJ7rrKXQgZ1P",
  "key29": "48zPEdePmtw3QaewxDCBsKFmVDxA8B3zKW1amjw4RTF1xtj1c8tGvunwd6WNpxquzUtQjAXxc2cQHaiS52YgcVTk",
  "key30": "4jQfibJ5HtQr2QsUkpKQorafvS5arRYsw8Sxb74wPP7Zx7GuFKoS9a1oS2vamwuNQLKu8bQaS7RRxrnN3ZeUqEwL",
  "key31": "37VgczPcSwGN7BcTXfHBg2Ts33fTpMb4NaUWnUBNJ6NZjfx7kYCAj56LG68Hz7eczBCuT6oTf2tUDgXDgREtZR1G",
  "key32": "4kVb6c5K287XNGfSeHC5cchANb8KnN8RSuZDpV9qjJ5aCNsZaReUqPWbB5nq8gQWubG8yQBMxGLeFPc2B1rS2G6y",
  "key33": "2YtWyKgz2QDFhLyJ4xWEZYE1Z6sAKp4SeEEHsWQHZWhAKT6C1EdEaE1wMjGV6cMZrWJ6As4GGjZ37K1AD9McqARe",
  "key34": "3TH5gJg9gM71skS9qbRPFjFUqW3wGdCKCHEeWKKj69KYJAYSZQ1DfrjMApqex3iZu1F5uxMafajTA19ENjXNZRxL",
  "key35": "5W932mNw6hTFGkzvLeTNYQgLjTywRceGv9SpnFgkvietCcR7eFnfHbaPZ52uLJTV4whrAFuj1fNoZty6uCu5aHhL",
  "key36": "52yDc132Xfs7fybMSKJZkPCMfXkFSzABkTKpesLbK2mUKiVmaN8YTtYPAB6K43ZgCkA5vFvETgkneU1DsT1ZRLGe",
  "key37": "4WHyeaa6vy3gJEXk6KK88t537dAYymEpSJnMtDXyZVeD3U9CHAKtfZ3Nz9YyrTKKUogGfdzuyPZNqf9wRfZp5UUd"
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
