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
    "2htDQ5uQAYrDQ1U9M165QHV6Ry7gdQRJ3Tep8KCBmk1JdKrBYreC7CtaBbPGQ7KUt25azKA7QEjYgSRqN4xD94i4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JotrjGgRuVkHcGShr2vHU553gnZ3HJ82DMDpmFQ7Dob9LXDCB2YcccEteNfFGfL6zcEygwNX699AdgQY6KD3axj",
  "key1": "3dYPZ7i35T8EFRKGYmwCywLh4YDHyyRTV3Un8HBNW6kusd1jGssRMa27FfUUxsHewwAkjgdVLgP4WVSnM2CDikwY",
  "key2": "3BWnUuKUv3ejYQDqw1Cy3VDcj1Y61kjh858czCHayY9FaYwyrYfQip6wp2rZBG9MFt9sx1V3cFVmf9czKP9q1Fdo",
  "key3": "2ERMMz8xQR93VhjVp3fo4hiSiPpGgJzEoLhAFeKFL5Zvq1jqDtKZvPk4wCe3wrJhfCgXNc3LVzgQSBFAqtAXFDZJ",
  "key4": "2wLroHTz6fuzakQd4KaCZpzzah45QD54z1XfE3qzi8cAGnBubTie6n6LrNrhQxT9bEkW8sJzmySQ1JfSWFhzZ81Q",
  "key5": "3w8xKmJTz8WNgG2hi2B5V3Kgbyiey6jsR56wZviF4QReXnst7vf9r7YdhevQZPgPjYz2mWBRJAwqHEaaqw97MXLV",
  "key6": "bBWeAyNu4hewntUKNc56EZAHkeZpVJ8xr7kTgS3VMEMDkn9fajGYSH1z622LxpZYPyKQ7xCREzt3b3qjr4PWPCD",
  "key7": "61BBgftS2A4hmBcrs4P6DJ7b2nZbgnr9QUGEWxCwwGNvCRXVADYeDCUmcFht7cEPU22JPDTChaPQUHzAFNtAdjz7",
  "key8": "VbEsGNEVTuocbbnCxGSsew1TkcNSkxwX1Go8iYks1c6xmVHZfdQMVwDtHKL7QAifwWUnDDLeLYd3FPo1ajBoURr",
  "key9": "HvGS7GVRYbuMHmzaccMhoWowJqCxWkWZ5kxjdHtHi1UWCe4YScc83VGvsxKBH9BUgrx66RXGLTuoMTogzi7mLpB",
  "key10": "3hgNmTSsn1HQf7GFpJq2Q4CW1j44rEJoac89WoBx13s2PnJ2FxrkMUxNNgH9dzEYbrfmyfBKBVUXGrQeor4K784B",
  "key11": "4ziQ5FsaNewhm447uUjmmeJ64bgzX25NGnsG6w8QkmqFLjAQMNKWpxeoGwvLfUYY2r8FGQkucoZ75PUcyTUXiqxH",
  "key12": "zWQggLf2QdiGsFLGz7UiWhaTDq9mtiExL4t8jmE3YDEniArfudQCK3DDBwPy4teBPjif4jkgmk5qmzsaSuq8caL",
  "key13": "2NysjkumQd3znjPhxpzAPh27UuEJNvU7rHP5EFP9zzN1pL2tHQzRK9eBiwCm58jRHqv5U7f6cjXyL2JABL9zu1rh",
  "key14": "2Gk8LdS4rPMjHKgTC1eXxRXNhPRf9JitPz7t4R3UWHCvccrcuQZKjp6f5BGRpehBB7sS1i3gqq8i6UJMZgj37L1v",
  "key15": "61yWr2muJWJLZ1HdNpU7AXjitog8KGXuC6bt8ydpf4revoCMY9M71a72B1MWExaMuBq5tx35BWQyYGCZ77hw1nQ2",
  "key16": "2aQXiuHS8qu5dMhJitBocGofJsA4zc6BmTUR1MnTzBdDJvGyq5K4ahLBmZinVPoFGzfd36wb8VcsMew9vvv3d4Ze",
  "key17": "poXbTzGugGybURurQddcH1vowvjdmhdZ98D7Y3t1LnN7RofJGcBxGLXyn4KAnL6Zzo7PxLQX1uSFC6qb9pBtUYj",
  "key18": "4TcmS98wLqJoaA7x12UNZsFEeNg3HLkgbYE6cn1nG2j52kS91EFMDURbqPhTdUnwk7XDg3ZrAA9Rv2qR2GzmiXCZ",
  "key19": "265jSSYy1V7MmYVLbHcgqXi17EjJuoLCacn5Ugqapg5ykNKnQeF3zV75jXg1rcTFFeGLBKZii7Mywztb3PCgd78w",
  "key20": "2TxoQdNUhsrHDpXEFpV8qLkrUxnYoYmqkMmVuj22PfhQnE793PqaUwLuYWB6VKmjohQZVbms67Nnubp98w5Yyajg",
  "key21": "3SGn2P9S2WPWn2fh7BHA8uBsXVH81qoVVxJEnSznn92cv2tYJtUWEEkbFcx58xFDW4gW6k26D6sqKugGXTge8FRi",
  "key22": "4o1FZj86b7p6TzXLohSXux2zjMdY6aC2fxRhUwH8dy9xn2QAf8c65T9UvWsi51VLzPaw9QYSZexKSzQQW15xesB1",
  "key23": "3wBsPUyqxarvfGHacd7uPHcPS9bXbqzXfz7fAuU7MUPsuuUNMQ7Vo7GHtLLDGSexXLtzScPqbgUFNsEkaeQjpCAv",
  "key24": "gd4FANRA29rWMjGi8hQ2ZeR4nYKtBA9fgGtbNoSKF1MDYq2YGs7kwYqZGxXrmsmoWHLXoQsT9SVjMZjjwsYLrFq",
  "key25": "2gjQMTAAmEcM5niPFtYFTpJfprzdjkvNU7UGzaFUYothWWh8FpLyqvB4icDyk73EFec67WwJDp268oNSMHoHVanH",
  "key26": "2CKFnaAfMquG35vWoXTT9aYfGH45kiqihkSJUy7BPyWbsWwXVPSSESh9tZfk8tWN4Vb79KgmTTZpDagPPVkzjNnQ"
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
