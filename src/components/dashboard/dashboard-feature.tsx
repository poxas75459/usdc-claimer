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
    "2rm6kWywqG9bpmLrVqjTxY2X8gmMZa7G3oWV1yrmHFWhQghomjevFb7bpXUyDyCsikH2WEaZeZ7dTf1Yi7jYGe8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QX1Bj89YbwgXt2FPnVpAz4Q1pxhBchqWMTk97qDaFP6X26XCCkKaqszUWtk5mGiF99oFF8iN3vXga6CTdcsVyju",
  "key1": "2HnciLx9nByYzbmSmgGkFugk6Ta3Bhqot8hLhekUqYVzKp9f7rcW1fDHan8795Y522Q4npXgE3LdVktsBtJbmbi7",
  "key2": "4iAw5ZNg6k59utbP3D27AQi1T9RGqXFPvpSmxUS7pqjqufRkriLC9c7dJyWDEweiUjD5BuYEQBRv5Q6Mq8EmsAet",
  "key3": "mVrqb4NyMKsiA5AvFAmyBZD19LQfFUwDjdswYAK5v7kpmFMX6p1YM1pCCxNPS6VF6s7MPX4dSnHW5szgeZCAVks",
  "key4": "5Ch2xZg8yPBKmJFUG1FWCYqYGrGauHYj6YLeBZkpLQuiM9psfju1ZHZk5R13B7ARbgR3wn8LuRib5Ms8UHSoFEjf",
  "key5": "CUqdvWZpA5U1FEGjFFUzwrnK6ehMZmd3aUV2bzSGiuissVr7obkhbjaQLqELYooN9adRqBqBGdSVDo3B6YP4QG6",
  "key6": "3CvnQdNzxzJH6N55mtXAow9K8JVDTeRW1zGnE221tnJqdiKqjzQeNZUCpVwtouKpdmeDWtLvm1kShZ4nsF4hYy9T",
  "key7": "2vhZgGAzswxoMxmuWPVVUiGqcuQQCxNGpyhMwPX5ag4NUvtrSfUetfjn5fVuoCP6ytC8uWtv2baJWi7bitpNN1cZ",
  "key8": "5M2NsmUQeVaT1z25nEXV634fzEwpDNjsxMx8PwxoB7YZeod17ScKtNRxSURsngHSkFKvfvWN1J377JtMo4zBgXYS",
  "key9": "cFQaTEUiNa7CfMiGWucKU1igDUBbapCVWgysa9NgVN4sJ8tcsmbTSFoSWVwujhTgPWuNr73vohbbYVvfBfV4iSo",
  "key10": "2JPmoQJeCvKCd4FVemtPhqjvTTGoyyxs3TuuHGR3A5figYDCa7sX8PohzS5KYbxUcWAbpd2Kbm1ARfgxRnfdfYuB",
  "key11": "4jc2WiUxGysZEDV1Mqdk7QqH6TsATgNFfZHAVS3mJFz5hznH8fn3KwiBqxwPSEDFSGvTDYNEqgdnijJapNXw5487",
  "key12": "2yC1t3XF16ses41mKGPWJpxdyAqC8egP9iTZQG7aJ4AmaggmCYr16pya1zpP75DbdA8KWSrjhs8CbarriZV7bz5K",
  "key13": "24jZbTGDt5q1gjsnsD5yGT4A2ShDgowATc6byp3kM9mYXndqMLmoqKTmq7koSDzLRTPMdF2j7VwDSYnp28MVm4rh",
  "key14": "3SR4XMkbRWmxCRrzNjKCK7SvQFpSYYfDXgP4gCWATUr5prdXi6Pbvh3ZzqFfEbBKhPAV4562n8KjPaE6Z44UuETJ",
  "key15": "48HDmATgFYRSDGivXuXX9NBV7Whb3NSiazQcpKseMiVaBufrjzuhG5bp9YT6cFPJm4BkNjVeS4P9eaMKDWofVTsC",
  "key16": "2A5f1pi5PLw4Snz9uFYXgBjAGEdXN5kLYTFZdXTZoQctGsfmFXiBkGosJfqGBiB7Dc9yFSzjsKnbqqsXPD4bePKi",
  "key17": "614uqNvfQcXYCiBH6AFh8NfKhLtPKWMvc4zWiNQZ3YYfz8NpQzw6H66TvX4ZeUF27fBnRhVHrrY3RXFkzjDYMsgb",
  "key18": "5XkcdT8qbSEXi3sSsxpzDCRpbtidCXpp5LgiwTK1396T6tvZkAtV75PVqQZcrdq1PaTQcf6t7dpYEmyEZmqqu1yM",
  "key19": "47PXHiJmiC6HY3K8zmypzvy2FBGTBMTkYmd1jNJWpxUcvkcv8iHVJRVqLwfByboojfk1wXEkjYxMsz2EMPcSgsNo",
  "key20": "4W6jwqLTGahiekws6UrdtfJEECg7JcAbzrmqyvdwXiWdtAxGY7EbiEbaVn1TT9ywKtjTAy6HxWcZ3tS88DvtndAK",
  "key21": "2U91gFmVXmaUwcFRYjoy3cK3E68H6vizBUZKQdoWBmQMhgDjJjGa23uAR48LQEWYLCTnGMJTVGiAcS71666tWGd",
  "key22": "bQe1sTJsBf116eZNxmrAXXp27AAo96Fb4VjocSCriJX6nZ3jNQ87m1kTYD9xFvqbWLusxtnsW1U1HwQ1zh39hmJ",
  "key23": "UoVimb123ohLnze3GYn9MTBvuGsKJPtZiKVR7MRe9Q4vH229iEt6pHApmDbK1U5RJLuvj2vYC4FN9KzjVY9MGPA",
  "key24": "5cxDyHTrA3E84eQfZ7tYimJMDumsw9sBGCdKhAxcr7QVaJuVguU9k5kVUL2VHKdgLrmNVPTqcW44YsUPMuGDfa9N",
  "key25": "43gqoqNDRZEjVd85hSbteqXJ9osQoA7cEcLUG6io6pGE6bb1AXJ4DRMgChUJod39j7W7fNCy4xaQNKDrKf7iUo44",
  "key26": "2pgM213mRZooS7ss5k8diwS8ZsEumNWBo2PsvBgBEU8uabr5zvhChoTDGQh1XpCmmQXKWn2Vp74hr36DHqFfsuTv",
  "key27": "5ahi7NMp9WiD3StNSK3bXfYYSsSnBViBbEEnJ471eFQEvSR7U1ZWqyyyjecb1sMHTVX6Djydw4Evmqupp8dp1NgA"
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
