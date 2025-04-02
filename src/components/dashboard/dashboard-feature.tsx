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
    "5Rrzf2hiPBZD1NfBiLbpM5JzxmRVjHmSeBwDxLHRqsvpG8eqRYSn368gTzmvdJ2FS5QhugA7ckH5tUTqJTphRVcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LZMwifHahRpKSjDhvNPfoKzAmPtjNb42GcXo4MftWpH5JbqEv62G4arKn7d5MUy2nRJusmT2aozXZwbCDBEgNvW",
  "key1": "2vZ9WdbUfJdWjYcStEk1TKJRAwtc86yasWMCFvLxyw5gzcimxPnNGS4dy9QkRX6NtSbgNGuC2qy7LJ7e3tbM3awS",
  "key2": "RV4Na11HKQEicWDuozWxFkoY87zUgNZ2LbhYuiwqptHRLzXHLom4gxpGAvcrppHUkaY31MXSZxQ8ga2Gsjvicwn",
  "key3": "472Qq3t9KhZA2RVRdQLauAKZwVseeBCFVkbFA1dBdY5FHMJgDS1c5WvE6WTa8iFAVWWhdsSi8cA7YJgyTCh5rKzT",
  "key4": "3LfpuEYDPCaHM5brqvCDPE9xwSsmVZ3ekNdenFnieiEE3eJTxcXMvWNJnXUkryFm4NTRwKckgvTFVuUzV6EonBuz",
  "key5": "2Zm5ZZbpBsuYGyESU5rt747kQUQ9XKxeNCM7wB3hVjgSEeHqrfLnvA3Lw8Abdwj5eVqjbQmYmmbrhGcqrYFh5PzJ",
  "key6": "xUDY1G277JqbLkCJ6qqGjKAVuTYCYwTCCA2rDM89mNhWZjhGTpgEF26AiFJ1nBRcfRsd5YdMnwkSi6XAyejqaoy",
  "key7": "5hR1U4Vo4u6jS1jDBcXrTVFUq1YTsbbVDc1pC7zi6LVqt42JEyF1D14LEBsaEfjxaCN1ko6kHsqtqqc6vBbnfj8A",
  "key8": "3i75Rpjzy5skAdkUxMiVj5QPSzLjVD7d7V81FjGkxsk2B5KHF5JMG3izEiTw92tCecrwC8wGxKXikn2ABZhjLEhA",
  "key9": "T1ncjH18aCxjvWohu4gr8RKX9fXNd7kFv6r1d7iFTnXZfMru9L4NL5ePJ8y4q6WQvYqkUdJmh5fJ8SjhHwGJYy6",
  "key10": "3S6kmfLJhkVtcwvnQ8RF3vFvFSkEztJjugpV1vvW8uF2A7utUXeCL3ZcS9q8UJmpG5kcaJj4ppTQYJrUHPukzpKC",
  "key11": "3nV97CfVmPXtdEwv5NngaDexWHY3TyJpH4KXCYeo76iq2D7GxNxR17XPFZzP5sjG4jBHVapQz3c5djYCSuJ7AZq2",
  "key12": "5X8hDdZZHozUYrem8VaaEbetoUSqEWYExTSvFGdPGm2H77WcBw5ecfSvYnWWDxdy9hEUygQaMHKByuGguoGoqAoT",
  "key13": "3kNZQhsFjKvc15ja1mRfqkcqgZGahTov72fYVctsdq84BCSeEoK3g7oosmoszBntesKkK7pVn6WDskft4rz8R2Tg",
  "key14": "yhthfZMRawYQzyjqEegoJcEAEZYU5s3RokxSm8tScxuHPrT4Wn9WP35Cj2hyjDiq1GC5VGzxb9Bb6oAampszRq3",
  "key15": "5MS1475g8pB8HoBY8oBxVqfr8RfocVHrAoLhUNoEpz7Qto4A4CCTjNQy2pcRvaifZtyeXRtK6duN4S4RmeAkhNWF",
  "key16": "5kYwnVdGHZx4VRqW7YEBcjhuUiBqVsa8xkpWtt6WiCAhEmgaMJGWMpZevYWCDJ6F8eCU9jPEruwJEkhHNUPTwQgY",
  "key17": "4Qp4wdTmiTKX6ELWuBjhow8nF21p657kLX2YeWtyX8TypokSpckW5p5sKsDFsZkz8v16TPckCjBKqSRZHoqZcxXm",
  "key18": "EsWSrnk5zf1RHwyAPmGe68QKXHov4m9siAxiZCdXkDuHoPYmsu3dKJTpYWtvKsyGXkQZ4ES978vZZHzrMTKT8ve",
  "key19": "4P7Kwj45uBtjaBufQvKxW3HjqQ1yZLF441z4pgevhCDW85fDyu5kg35XVCocLafC4HpqfghF5A8JWVKBWctyU1dp",
  "key20": "5vQnm8PGpGR9SoExEZ2THzEtBKeXi7NhEiYYxSXTeN9XKgSZJ7opprRdVCUUvDJfxxmokN9XQf3xxt1dVUns36o9",
  "key21": "3WgwzLNgXMBbg8qNgSVShAHCuEaENLNRsdNPH6anv5fZvaUjV1kFK2PP4bC3pENbaAYVTXW73WjSxqJCFave7XJd",
  "key22": "3cGaGXqWU42zTRotSqPMZFWyzVRBCqzTReQx7hDg7JP7W3PSUpaA9BaCAB1HQp3mmdkHSfeaohTSSspnBBxzDSmY",
  "key23": "jGt6XTZKPtFp4EeQtSpRWjMBx8VuUBjmsE5UHXcyTBA1oXY7LiZRM1rfbiWjAf4KDtudCvbtRQSkd91819GX7cJ",
  "key24": "Zn6Sm3aDkYNoq1VLYpYbcZ4ZiVN6ZXCEXXAYZWnrj3vmih4CLWSu57955JiC3Nga7zVFv2vHjCA6rFVTZKac98V",
  "key25": "4fshSnSAxEUtxo25H6KujbwYTpvuJkUZ8DFF2VZp4UcFado3H3penXBdycPhU1nX5VHEbtDCCJNAMTfKLXtk343q",
  "key26": "6184x4WKfzFmma9oLRL1kSfPmCVnpfjJNSYXPfxV5RTmB6VavXpqUx9zknHMkcnzLsuWKDK2CNN88tiynkBaxvt3",
  "key27": "5ZqNuJNW4VoF68hDXHfW7Z8wjHm6yWZ8NpfZazhVwvqkiKFKhHPJzZhgJD6GTenmiarH7vHxViKVy8BnZKhg7aCb",
  "key28": "SH2GjKSbrZYuXGb2yf85PbgsrjbWKVjC5s45WbLZTNkyHCaEV1sJqawqsDDj1uEuQtyTsu4pewPyj56Zbzoigtk",
  "key29": "24EuDNjgtPiGYA7QRkF2VZGzi3To3m1r9f8X6Z6oUXN3p3RW8NBAvbM7kXwPin2EG5szgnnGSZzo13XUkFK87zUD",
  "key30": "4xDnSoejSegQe5pzeMMA73gWJ1PWrn88zGt14ru8NLB3PYv2efSPf4CsbyoZtEzWcLx6eEcntH5EdabSPxfL1y8e",
  "key31": "3A4Ncsj5RoQe54z3zhwaAtiDs2AJ89Gi7C7UEKFMbDDS5KzPfWXQ9XpUWeo2Lnbf3ume48fmdGLGQfgjQSp1Zeig",
  "key32": "5WFHH5MQymK69bidorvMvxMRekyQTrS9emR8X4TUYUoXSESwervZMXXiuNh2agahjqmejRuTxF2JdAHVQPY3CEa6",
  "key33": "2dZToxXKUvnBzkeV65YKvgBE865gpjdXHVM4dw2nMEB3zq6rUeqJviVhytDBXoTP8dTrVSrNRmvp8tNQi9kVvmpF",
  "key34": "TTDDjzSbsqkF3eriHgkT89s6u4zZbp8AW1tuRi3qpSiBCrKNGZgEayczs2wbzNNJ8YFMSrSjVjiwQFoZddRrb9L",
  "key35": "66CE7Ez4QBpTeZQUb5ZDPnsr8GjN8FwQpnHkuT9d19RE2Vr6V6zZVvisNAtfrGGtYNxyRKM7eVW25HHmo49LjcBg",
  "key36": "62xMqmfbupnCZFT3T5RRnK7msHWiDsTnxMWYoKkSmT1f6b9tGReUjyBJRvXY2779k7trtsenzKtgwSR3gZ5xjJg8",
  "key37": "5Sj5Kz7TwRSi4iS3VrpqRDNY6YKFUhsDp4eP8d3e8BDAXFwWoQEsWh1L8oVtadN4XSo6HkJVKj43W7AFkXGkCTmq",
  "key38": "4r5WQrrgwzK1RdRK3JT9svv4XqGmGighbK62NiaccYsTHtWs54rBDTeX92Yxf1GookXBbE3YsBUGiueGyBXjDQUS",
  "key39": "5TT14ZYCWseinn9s2VASWSVNCnQkx3mf3DaRGYt8NDwvBcxcNAvmaRdWdhcNWVJofYqFcoCJaQ6PcdSjydWZ9zJh",
  "key40": "3NYfXvURSAp1EwG2jNENWh6naqsNzPcAYSttmdFT7USFaNL27bx6VMuRYs9FvdECFskvBdZHYwLSpaxCs1mjDfpr"
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
