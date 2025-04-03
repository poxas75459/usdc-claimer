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
    "28161S7tR1gqjNBNpP4uMfF6idyGDPdWcH6oZNaCrFGorNvFSvDyk1BGLMyyXwUZZWwNReUbkaHF73W6m6q2zDhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JuUAHrrdh44JcjyV8ahz4FwRJnNSt7dwmbSRZmCeTyg8tM6o9g5i1BBpxR9b5peMGg4FhuSN3rvgj3sCpRksRcv",
  "key1": "29NwZNg6egj5Pn2XKXFAU4DAYBRs3B5wuvjm9awqjE73ZkSbmpZUGBJfAhnfMHyEWLUx8yyDpVotSHdaNT1z5cHk",
  "key2": "4SitGvqX38stBnE9qYcvALHkWP85YGDKdyQ1R4ousfm6ww2kAXmivCoMFDCeQPqEYT2NdHsGwKTiZ2SxER6Hg87u",
  "key3": "4L6HD7hYmBGxNMm8iwU1VJubXbKk9sSLkhaHHLpAH41c81nZRJFKoUDdC2u5H8ToSUeodhqgQpdMef9BegtrnSfV",
  "key4": "5Dh5aKJcrqyn9cVvh8Sq9bdegzt7TBBE9RqJnxe2StJpShh1xSk8QsYyNNB7F8xCxZUbgKasLd71yGoFptZKrozu",
  "key5": "LPSEGFNbubAfdiXJJUiyFEMHwhsmZa7rUThkU2nCEM5LCynG39tnHuHfKeZBz6VDew1TXFcDRrEk64WaEnTVez1",
  "key6": "5LJoVJogDjbbF6dpa9KfHL8S7etoAobeyuZHn1uLVghz7YEnXhGMye8r4gVKG9WbaXpNtwYqZc9jyXroY6j2Ymwm",
  "key7": "xXG3aRvk5EuWtgD2S2EpVnjja7RVnpBZAHGeacuR9mRLuUYx57JUbPLLhzBKVUrqykP3TAZ2FPBH2zkChirjyXM",
  "key8": "5PGh5RrYSKSLvtTKzJqSXyfQRXXYyNY2Z96pxGaySjPxRrr6LnKoyfVTgjhL8mxDceJBL1UDsHbQheSVMbXaNybF",
  "key9": "kwk7bnayZLF8cfhN1MjVjDZdt5YFg54FW4EkaahmRzwcL45uGaoz24aGmsi5m8VV4VJRmq9FCiimB89dBGvpH3D",
  "key10": "31RcXWJyTo4WuBkymJ38kqP4F3GgLpr8zz2rw8cnH4W1HkmRvQ4KJXyTsse1ojJTwr12Qoy5Aaafj9UK5bGKA9iA",
  "key11": "br5e8YHxXBAQpd55mvRUahgQqiv4iz5ErDrHSLeKEhs2oQBsq5t8NRsrcC6XM9sDEgxSKpuTAtpxxXVdMgew76L",
  "key12": "ZcPzeRQuBcptZqcZyXRtxkZkZ7dNeXPDEKyNw5RtNqinoQ7k69J42BnoB4qQLXX4jbsAabrEjd12CDwZU8WZmFQ",
  "key13": "Fk1X3fW61wTsppr7dwg1BReAyaSvSwDQuu24ooEei2kk5VqUjteSt6EummwwRVkzyzijDnWsauMegxn14uvqNUu",
  "key14": "2tneJsRrUyN59yyoHDoBDhnKswrSLLx7uaHAZ3Bcfu68VbRmGsSHbJVPLvyTSJKNArqYpv4D4fymDpRR1BbwQyYN",
  "key15": "5Q7QtWjaVJo5g6R56UpzCM9QPGS3yHEBV96vQwSHwGsxvHXb47Xu1kBSpQUMGjP99RnrA3m4BqhabZ585zoxPz4A",
  "key16": "5kwLUPxWYRYYciCxq1Ax3GdKveev3QuRy6utgnmnhbTWdqvSUwFHV6QRFUhbEiGKZ95sxJqbDRHHv8UVbmFbWg1h",
  "key17": "5ZRzZM8qjHzaneKL7hLEbbMLV7qp9ZBNsRW83H4HFpbu7r1qPog1auCVzAhNjsMi9bmkAs7bkAkXNFGFgETd6eLW",
  "key18": "5hJfW7CDirm4RTwdCELsYi1M7NcFnG4BHW3xNQRpnzLZChugApqGWWTBT3HfWqq3EVM2DDYTybcfEZnS9dEwZT3o",
  "key19": "5NFVwC4G7ApVQ96s2rFZhBrTLQDAuQvff5WcdnnL3v6ExcFzk9vzeYr9QcLXjciJt5UD58GUD3StptL3B4Q4qMzz",
  "key20": "5uwLbhhfhbc4hFViQSKEgq8MekMFBG4Lyd2djQ9fpRtodNFNwSWijt5AzDXHos55WyewifQLh5wsSXcsHBZShRUv",
  "key21": "5MnBZeCqJShfSijdeDnshU8qJMZP23tY3E4C2fR4Ysb2KVdC2vvdA4J235rx5wqAMcShUe4FwudgjBcsU5QFn9ES",
  "key22": "5WVvYzAnrHUDAHyhLeNfUD1mMVwh7CWCCTz3nft3H4GJ6e2369wkmsW6jJWSnR8U3ELVofef5tZu9FWbnovu89oj",
  "key23": "2F6zK83WZ8xPNJJ1LuBcP1Kt4QKed23HXEKez28GrtpKaHivqwGVUSTFSf5EMxvsMM5XqoFh7AxVh38WbH8npzo5",
  "key24": "2NgPn5PWeAda7eKDEd9b3gzheMJ6JhBbYBK77FnT9y3VPP7sS76ue6ocfqCSM7kP5AwL922CsS1JVqYh2bmQ9mH5",
  "key25": "3FkoEPogvpyCkAAT9psHMyaaQ8QYG1Wvn5CDE9n69tbwhxjXnaL6hfU5scp9gvLStgCXW8sk3R22E1Qg8CrWQtq5",
  "key26": "Wkq2UBnhY4FmNgLByjjYym5GPaxHRqermkhw2EzS29cbkDaZegzzCkPTfZcJD6BF9vXC7Y3momYDp2VDD43h1JD",
  "key27": "3ni8EguJmcVzvpxk5r7QptPTCZjcueM2dzoqaJ8MxVZYftQNdMhyodNzJEM97NtSAArWZe9RXS4XhPGbYHtouEAj",
  "key28": "4kxuTdgi9KHeFegTUZaVpSKgNG6VSt4aeEaRtHeLiJDAvMbT6JXwvLfnhHGAr3WLqGngivtBC5uoGME3d5tS1iwy",
  "key29": "5rvzTGHNKu79eFW2XJZ1oJ6iXAMFPpdMqQmB6Q7jf3VaZSmyJbaxi9be7cwqdRatAMnPgcrSuQMPLQ4ZZ4WpRxz",
  "key30": "5W9yDS8uwyNVLk4DpEZUdH3ZjLV2gAvwVr57s2MRWZinBaJ1uf9ZQGVoddBmfWjnR2CC7cBF691mMQD735dVkc4u",
  "key31": "Y2D7L3hUXDFqRzbLwpY73kpdiJm1PW26g2DqxW38npdNZGrhaKL6tnw2Y2SrejaPnBvmqozwdGywrTvaSH9oMZY",
  "key32": "sS7LZ8NiK6G4VxoEzYYnW6xbknSQLq5RZNLVwHSwQdZu8mBToESiMQtjE1o3jZuHo3J7BXbgQJwjrhLPwwKRws2",
  "key33": "2radyU9BXYAJnzAqNZ4A273cxL1R1i8xTgjRt3YEfEjwbZrjbxj4qw8CPWwGEcbKQHZTT6UN3p2JZZpQFmuz6Qv7"
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
