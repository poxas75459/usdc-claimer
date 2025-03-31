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
    "5dpjxssAmNWuz8WVdQeoSx9WJCKTBC7HY8TdLma7Ncp8SMDfWEvgB9dzQcA88D2R8kbg4o7JiMeTM1wYBVdS6Yoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29LS5XdvUpdEHgyp1V47N1gzpxVvduRCiCpmAX7pcoHgXYb8YHHogL3DYZeREFJbkMzViDLTQs4c4qyN5r9D3pcQ",
  "key1": "4gQEYyE43bwX7dXLcwAu6a8PiEYp9Vq1p3qJJAURG5BKuiuZZcMEwDEe7FfqyEHX2cZfPGCJLnyGHb8iRJLB1JDi",
  "key2": "3JLdtfLp9WbdYZ5kwgzKPVuYqZF1hSMQkxg9QE2jZMx58oEnVujVYyLxh7kmF9sM3EmcfNSrcqiLHXhRLAo7hbgf",
  "key3": "4Bhu81cmK9HEXHRo1UTcpJ4YnpAYCZ5nHr7jkSUUdFsRA6UVy9MmKrpxx7vY9qpWZ7BVBM65gN1tRMF4HNDfP73L",
  "key4": "4vRbUtJckt64TAEdRoAW9S1Xwo5txUx89nvpA6R33EZ5ZXUPasDkiDssQMCtavT4MwN6FEWY89qUKosuifCEiHSs",
  "key5": "3a78wTF8ssyRRXk4L1wLSS8A8jhptfNqP1BQ5KqqhjY3GT7B8oxDYkGA9Rg1sNVugQVFtzTJyzBPX7cw77za1ujr",
  "key6": "2sPSKNtHLv3HPZ6hJCcAnQEKZvtJXcPApihvp49X26VWFWiC31Y2d4PCi4n1b5TkiVfygHm6WRpVmHbKjzctnJfK",
  "key7": "4V2umhMiAiJmqFPcaJvThuz6wiTxUCZETnAabchD61rwD1oCF2tLYe2Nbmo9TZoujKrGhChimkHzRtp5vHmxjf1a",
  "key8": "5Crr1Ehics5roTXTu2mpvjL1VVgmuuEQLb9bzGwc4KK9uEuUAkuk24q2L7kCgqta4RVgRiZAKEo85VcqwLk8fikt",
  "key9": "4oq9hJV7KgRNT8EEoQLWhF6NhGMZJ3cRCTNbHvJcENNdqUHANi2DxBoRCs2FZPcCW5zqxqhcuEopi2se8z9zhA4T",
  "key10": "5d3L3pSQPcH5ppV5QyinczEhAKZbtcaseEDtdMvcHVi2pKU2Gw3FJFWpNB1f5y7r1ikDLMuPbipW8F3V8ddseSKX",
  "key11": "5orrvhGiK8chk6sp4mRHbRwvpbbtG21ssV1oyrg3rvdbc22QTPRbA1rjxoniZEYS3oQnztyCRUSZQhiFSsdxy3FK",
  "key12": "6V2GNTuE9j1VhgPyTrGNdc9QyDs7sNb46R7izeoMYvEUQjD9j19M39cgD4FtRihL1CvM74bCYn77WcAghRxwZ1K",
  "key13": "FGa3PtG3S9vzUHjYGDWxJTrJMtVA3QtZeKkxqzVAqJff7LNE5SrQKLUmuDXMPwQjvq6GmrFQBqtCw2MRfSFGehY",
  "key14": "2PxbdnUviBG9RPp1dLeJbeQeeTzBDN9hZYtT3UjY53qSyWPNioYPN5wzQ61NQMaPWus1cePgTZsVbedeG46gBHSp",
  "key15": "97m2vCs8YnzeUqdS7cVkHAtXm73aL2pC1i1K5yWBKwtrsn3aqbvUgBLpgg6ztqrbJG7Yi2D5jbrcjkC2aKmaKoZ",
  "key16": "2qt3Pasm1r5ePhcVQ85wBg11fbcEhoaJtyszgvEyGa6aN2sc6ee16Ei4SfgHyoJy6owMdHmu7M8FgqdneL1xEjfS",
  "key17": "2z8NLuB5R6uY3ZisWSASE6gm5aYgm8pSPyPLsNndCAAe9CD5t2m1bPZ5QrWoQ6MauMmDgSRmkt93EbMXNZirrMS2",
  "key18": "5Qu7pB3etp1aFiKL1RAabKt5MXCuen4R6Td4473LQFqMXCwnX184VeFhEfXBof9et2pD5PT9wwzX75jMz1snXkRH",
  "key19": "5qqjViDc6JNkjLBdbnMtbgsL36U6SGhDx8G7Ur6zX2L5e42b7ia5F1zQcJGppKc96KuY95tmdBtLaqFMtLxuNM15",
  "key20": "29Sax4UrqHAsqBtk4YfmQzByFJQhBw3XXwNN982pjsuVpkf9Z1PjvdmH8uhnMRTVJFeBQf4g7aqLbJCtHfbms6vb",
  "key21": "5Rgb9hcigPgApoCmALBvbNYyBBE67whviY6sc1qYnr36eKrAB5o2U61gQ9bdQiV6wFvcVFZsZAxjeFe5tzmqACf8",
  "key22": "2ayksYv8JWTxsgoK252rRfb6Yp2QmEjFY4aBBrRABiYrxUSBJgBXFmsoaMmYv1gVhBeusf2QU1gtnZfzZVg8v4pg",
  "key23": "5MRJ9Z1LL4SxwPNY1NmBMW6FxQAQc4n1SZ4bMHyyUgHW8zkL1DCgMUJCMh3WSQPWDZPq8B5FbtXhHQgdPdUiY9TZ",
  "key24": "4WzJdb4s4ARBVU2NAxKZaqSz8B3devKZ7StA4JjaFY5wmKRz5fQrjAnozqppCn1GkRwTQHZ9HptEgk9W8j5vKVN",
  "key25": "58F7Yjmqh3NqpeZN3AaYMv4sfmpx62VQxfam9kT3zsczFPvF78p3jNrrZAoMs46ZuKyqmKTHms6334D2kXgKkDRx",
  "key26": "fBZeNGJxNqxfsNEtinpUtjbhXPdUhgCFnNxwtNynTDkFVifGCvZeitnjqfS8egSV4ok9LKHH4jJBc9QhenySXR5"
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
