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
    "2qvai4XgzkZFAMX3k9miWmeUuxghgF1wxkJpqSmjqStdgckfkLsKBDuuZfG5DGDmmu55j1EQ4ouuxQ5dt87Lp3Gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XUy6rTqRmGKXq6P3QDGCeSoXJ6mYdyXutuVmvs9pPrMXBS8krU7xCkJfGTS4Pmi8chF8i5gwRTjycZr4Nj4w9zu",
  "key1": "3bAVMvqvckxJpCVmsKdkXhp9ga3T1L8nG7jQJPbEKCQoChLnC7MC6VZ1aXcPe4oUs3v4uG3BjZpSc7ovCNgWn3rk",
  "key2": "4DJdWHThNrCq6s1k7YEFMFeAdcSASi6c3CdSp7DFo1664G82ZmT8WxPft6YszFfr2WcvdhGMTokKv7jhdsP5ticS",
  "key3": "22AcS2LQ2xJtxuYwdybz44darFR87FJ3xtRHcjo5E6JRnSzShNsgzCR5i2nEVhumfnjQ9msfjNDB4FZSKo9h4eAa",
  "key4": "4suh5j5Su4kHwLQ53YTFRFieB1aYS32GWEgdmcXd3az2DDiEtCSfS67i6JKznQbB7K2nQ9SYbiZ1R9aAXcHJ51G1",
  "key5": "3X6d84vVKkpCZoZ7a4sPbEP15XA9K6JfsQRfwepeMEWXuM43XmTfe2L4WEvKzVNSFUrXoGwTZus9kwbmUZgVTtoF",
  "key6": "4okyEpicKViYdwRUWLzPBz4mDsWkior6A7k2FjHhsXnBHgwWAthKwbkWHH5kHqaLZUvS6dp9KTiQ227NAB9aQrtc",
  "key7": "3ppVyy5PWb2J6WiPbvyRLvyUhVuiNmuoTo3MerWRbZHBD3JWTjFrUmrw9ukNR1K7rwAXEdoGxqyeYGT8y5EXKzvU",
  "key8": "5x2TwwEeLuAGKcxsE7YM8UQGSghnAMUJnNEfH913k8gQdWPFEAX75dbUy4sEnxxK7xU8fQJXsiGbMvTME1K7sxF6",
  "key9": "2jYxK7WKHsimdWkBvsuKwf8My3TfvP9eCTEEzhpDNWUkYWWaphubiB1PKAQrV1mPDtamwV7SfFhRJW8u2uXfTNw",
  "key10": "3subLXbLGVQrr9S9aEyiaYAJcBTbQcheBtdEVSq4vKkVhLadPfdXy5j32Ftm9wrixXQCyji9jC7jMyhg7uFyJGbw",
  "key11": "2QxfEfNKC28JYjwWzbcZW9q2xbjzJnidqS76UKje3AK7h2rUdAjRogGPrM1fmhKgm1Pqo2mcCh5eVQNnV8djnewm",
  "key12": "2eHWsor1j4sHSnikPZR8uuvuJwnpu4RxYwwi4geYHZCrC5iBXV5wXnZ7uz1Fp5ra9J2S2VhksnoKYJ9U53XwZ7bQ",
  "key13": "52gQSsdPKvAboMcbpgpqH84wH4hKfKyv9uvDS7PLJW1FzpfCLPwnrqcszcR56Gs3o6jwW8jetQ2L6htbmQMSvkxm",
  "key14": "3LCbQd4pqUxvxmq9KKrRTiwKnFHBa3LzxFLCAFxJn2a2kFJpDyrJWxBE51hrukqHx32RJU5HEi2Y8bWgoTWacJbe",
  "key15": "4Tqbt2x6796VVVkgAzYMriTnYoR69oVCazJijGSUpKQ86HuzryC54rG2r7DgMigMNauUqengtaGgf6ybh2DSubNr",
  "key16": "2z3nQWcFfTCRWeDYW5vmMLaaaJ7zX7yDMX1AoUH7oFRJhtA1TbbNEEug5gvDTeLbGDtNijKkcHTYkyA9wYmNayQY",
  "key17": "BzCzZTsFEmPAXbWKZih2ZQJ46skfrgouLyhwoqoXDDa6iRoy3hXesiczFuz66CrK7ULrkvt1egdXeLiRWe4X6c4",
  "key18": "512brnYvGUDmyC4eCMWb1ZHHquPX5YbWHhBr6qTR1bJ3ASEA2maznpFXA8N44nUddQEXkMzsnBDtiSZgWbPPtMf2",
  "key19": "4c5C7u1cWYkXhuNj7MNHATNTKpJnct4GYmD1Qj6ZjP2idTg8uB9EhfCa1UYy6LqDhhb5J2Y1PTSgEMsnEfBJjgzG",
  "key20": "5wtHS7QfkZnwEZKRy3XBsNdg63SuVDZq2sf5ShdNN9eriDJoskWKXK6UJMSBVSewUbnHbDjs5iUxSCr1aKC3ESLd",
  "key21": "4o5LTTMJ72zVX1TxbGgiqA5NRt9so2TvnQFKtBefceLL98BTLwSgVKAGzyGu78Luv7i4fnB25mMUaKEoqDpxGHCo",
  "key22": "56zLsipPjj8jhWZv6Eat4dTroU8C8fCx24hAVyaGXW61yQHeTujUgW1vxYtPPhZE6WFhR5BgopQEpmJcW78pnL2U",
  "key23": "2xSYC8a1t6giJYXMr9xyrTvgpNN4zocaFob3svxMcbtddCSf6GabggsnrCmcXYA4mFhd6DaPzkqi2tw5iK1pXeTR",
  "key24": "uqLskF9JAbzegrphHHqtoPofx8UBmN2SfsDwQLqHJRaov2abS2fucLJ44iLdhH2EAxHr4R3bccoiCP3AoxsMfQ7",
  "key25": "3pDuc9GVELsw3Zu9AdRCAjL3icP9fZjvcUcAfQzEeBX1huY5V6Upv4DweMGfXz4FhDNy8zHjmKpV7ees7uSYLLfs",
  "key26": "2WcWAFFTwkQt9moo5RLf9kk2mWrJGopSrmS11duLZ8z2MuDNfPq3o7UNF2SteetpcjT6kKnC46sgqmw1fAUSZMEc",
  "key27": "2XPtE1w75sNJ528WxtmyqmZU7c1DQcA38yE2rzPgCQEoYt3m3FeqREy3C5fcusWeoYopjPg2wU8xhuMPpqpH5yYj",
  "key28": "2WMzuLndELE11113YbTqHrRBf2aZ59AencSqVMNUoLgPpTLDuG7EGjkrX4MddksXFeC2nnnsA6WbQ3mamNK9wLbw",
  "key29": "394dB4hHXACvWy9EvMsqvoFR1X9ExzFoxfAeq3KYsx8ep481DaG7F2tTjdvB5pbkcNY3EzspDF49mNU8Y4b3BUEM",
  "key30": "2CgfkTW6LdwVwjUbGcG6LA5zVSZR92WKTPCyJw4MEoqz4s7ix9vYQejZSPsobdam4VtdmYN98xt1568626V4aby1",
  "key31": "4hA11SS5Z9yY3ZcUzqGFb4hSsatcw4dXhMVdtanJ8j3jPhC6Q64K2Tkz3sda8fpE6kcetByYzTjtVK3YCFZz24ra",
  "key32": "2Fi717vK8vANRptGcMBL9ax2b673QwrQP6UisZ8wcaBszoYPTRagceWvoMUk7JbspcapH2aZRJadBT9Lp6sWJqd7",
  "key33": "29MnkE6xsTMWAkHUBN8NTcqH2sm1rYpX3Kghuf65xn7ZjoyTuuX3mfqZfHo9eVL9Ea5kRh79bhjZYHzTGXWWTwfh",
  "key34": "2oM16FZuPLN6yowNRyarLwGEuGPj59CH92vsWUpJMufAYpr9gP5tfAGCNg3JiwmVbP1tXq8cWauXJmoS5CE5RwVa",
  "key35": "2seQkWuLtXD9vSAdpQ4F9xCGfARHipLuvqb4gJXM6C5Si2TkPAW8Z8gR56fbVK3T4copC3EZJqwEdQ4iZZpFn9Qn",
  "key36": "4CALeVxUQw5tdWB5f36paajmBhJY9ezLeFfsFSqf9mEJ1fhtr47ywCkbgPmD3zGhYhfsfLk9SeJFPdFNKZSiNkew",
  "key37": "2BnF1gqZqcP1b8MmCJFZBqXMNFEcAyu1hg8ip7PTTyGday4Bj4oSxupYLQwp1j3F4PpyPRumj3xqX8MU6SofuBYS",
  "key38": "5njLgYNDDdtgumQL5cZcqVuDnWxzDr8RLKG6SsURw2HXThZ7WHe3yq1HetQYxTTeeeH7pAa7wgqcsQ1MY6e7EkNx",
  "key39": "4JxKjwShK4JZ66jxfMkW1r2SHyiydH3vyNNCC6fC9rTkbKgyAu9BQSNfzTYePnvqndS1jaPrE8pA3STfNFf5HLtk",
  "key40": "5bHQESRgMvioAfLx9Ln1V5HsKwSkktRqVk1Hy8Tn1vWeqnAACnLXPAdA2nNQNF5K4rFj1rPkEzYwwhsS54VaEV8j",
  "key41": "5SZmWjWrY4SxRc3KHBVGzm6dQAFDfoxP855NvTX3grqUyZ6Mo5X8jDKerFQ9BvDZ8kWtWyQn95tMmtHWHXdm9yBU",
  "key42": "4hMkuPz2uGbrqWTaUaYDxU5o94qMB4JZWe4EP97X8C7Fkk5zpC23kCoG2fs6e49NvQmDAF4oTavQcjALHvw2XsaN"
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
