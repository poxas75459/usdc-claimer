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
    "65bacVQ8wxcW3m725PcJHvuFCEB3mrz36ojoqfFB2TwZknFeNN5CXF7B4kJchwaU1VePrvUjjcgpNsxH3ekFbhsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rt19hvBd57J5EkJuTM8dZ3qG2VLHx8UkVyEqgXqJvMtvsLTPnSZB8vuuLxAW8xT9asT62f8TTFAdaqs2hbNSRUX",
  "key1": "2VX5g4UzFbCdMiggVUEf6RVHUWa7tPcdX7hwV3rswavJuR8gd4Dxv78gPZret2oCHAWJDvUhUWESAB6xTP35vZD4",
  "key2": "5AyvjSKg5drs9DZNc7Ao3MjVcjt1Mggp1uBuPF24TGzhmHhjJZXVSZTJfCLfy6EjDN3pirQgmnPkJingWjH8LMf4",
  "key3": "5UoNpGEhpREeSHTiSqcjXZ8Ejp4f8FV87BEH88JUmzWtuxEXkgetTLN2rQpJMxPjJ3dnXzdhVYWn3cKY5MCAiybS",
  "key4": "G4LoTND8RA614u9zuMmpYYGwHFj4TQUbZx3d3QoZTmdvYn8WQiRvaVMsL638itqH38sxbhLWRh1a4QC8Ze1xRjm",
  "key5": "47eQaEAxCR4D5C6mY94FQxsqP7uhKBdUCgwVByTpP7AKFWxs8PTStQNYZicH5BeuLYCdYPRg2c1H2MELd4ejuo5E",
  "key6": "2tueNNwNQCRnmhnzAqu9troRXgiUF2vdjGHQ2GB2QTptUCj2WPZV1nf2ir1uZHUaSXj8icRrZxaN1mLbRZVZ8miU",
  "key7": "pQ6FX9aez1vuoPbSewY9VfxbBt3epgA4A92BYFvQ8b21Sje1oHmJH8sMbbk9sAAaKMcn713AvJKPFmD4CN1dAfq",
  "key8": "2K1L5RhZU6GmGLSugP5WWfWgMqVVfmE6gBY19mCt8TupNfX7EpBje2jSpYQZbJVXK6shr7yW4dnTt3Qwxg13nVdv",
  "key9": "323KZdHRQd2zkWiqe6NWnxspJCwu26rq2MADpiBYx2Yhn7YxaeZvaDXiBpPNZU2VwPf9EP5XJscVRDZjJsDJgaxu",
  "key10": "5yMJWK8FkcdBWAXLHbYALssFLwtHBRa698aviYyYN81xvrQ6ENrcSA6UzC5rfTUwYFgKYbFLFTcDGeJrE3cH5Jts",
  "key11": "3dUKMH7sG4ox13JmiT5X6sxAX4g8rKQzsrdsGvgEPxEhdRNvEvrGuoLfwv7hz6sQXX4y2RrhGtKs5n7Fnnwpoc1r",
  "key12": "nZDi3kbG2TNbG4Lz1SFQhtU2rP3nu7YmUEMwF2uC4JowG9CRZRv9uX3xwB2bkcb1QxGQVSZpaevVMq3YwKCfJLE",
  "key13": "54CQ8bFtxrraA4wVPqR8JJ75bkSs8mzoquCYKbgpT822umv25X53kmMZcF85aPuDPtsEBkR6SYw5LgzKDM81nU3W",
  "key14": "3Rhicufpr2ea73CoxdHFQYsi9L4DszY3SgfrZbkokhMDneJMyV4VTM7QJFYADvf8Qi96Vug6Mi7kKd8VFon1ipEL",
  "key15": "3PtAysNHzDewA8L21QynMe1Wqey3Q71TTJgPWRbM5cccVgSF3oAPd81xx4hjhfw7YKfnU7FFTu8o2hS3JJJHmQds",
  "key16": "2MiEwSYpn2nHuKSuu3aEXq7HZd9MWqFkUWPLMHwcYv4gbwwEvYD6qvdes3qFp987ZrUSSFvo3J9qLhx9NZJTHUmi",
  "key17": "4SZAtCuc3vxD2NAXXauSVTdtbpQqveTpqUz1vDFygjB1k4iCkoxteibfN6Tp5FMz5a8f4vYgK5oa1s6EuSU3tsWr",
  "key18": "2z7aYyAqiJ3WJ3wprTB9ezNaw9JRQvKobUUQYAqPuQCS7G3AxcehjpJfNbdcdHj64ddZfKUKob93iVqg8pRtebkw",
  "key19": "5iNPzBrVC81BqGeFzyC6QkxkYLRuLymiSzTYkn1sHZvLRtcC4peDkPGn782RPtu6oNf3aYR5MLbjEGywgMVbxPNX",
  "key20": "5Vu6WjYGZJfDfiHTsjTHskB6uGNdUuxRmyAy5Pski3By8bBwDoA8JZ5BEdTyS3maizGWTjec9RofGT6b3uCPoxMu",
  "key21": "HyH4brgV7zMWKF71DzQoo4YZrUm5fAExDEYD8K1z2QJB7PkMsvj6x588MBZ7VfqRNZA5Bo2QUzFYaUi52XuWYre",
  "key22": "5gfqFiULbBoQqjfdcQkxFtcskoiXgeGL7FYjdW2v41KHXpqP6r23ekACTojBndP7T4c2YDwX1pjYe5fa5WHmkkEB",
  "key23": "9eDKbEE3oJ4RQNuo69LVW1n1fpSUBSrkjszzSoBTjd2p8NJoRSWdVYe7QUahquoq5nz8kQsyKJNVwrzF3TgBmey",
  "key24": "3QqDsgUbixZbkPbYWFiJgwY6z2p2aboEU3sataUQQZALKVPYiz7e3dsthxouR9WPsBCjWjpjnc2Z9KwJ8R74yLGB",
  "key25": "56ySycJG1PDTKKQdTVbZhyroeHBiiGMjkWbjQsCFqGrRdHtBH7qj2wwfPJoAVaqCHAVT8rwoikyE2kPMWYuapTSH",
  "key26": "5Du3eF7qpGRhN5u9t7m5NP2uD9EVc8GsyyrgHiSfBJLRBmn2Jao98srFWEkafaVhm2yySZczw2LraA7tnXumWDPY",
  "key27": "3ku7crJ4LVxf2kkCiQAiQKp4M5N2NWRgEYLfV1wSMbGEag3ucVDGcVLDYAoLsdjxgKaBkfgbsAJGNUZokgPp2Vqq",
  "key28": "BY58hZUpb1RKdNV3srsoVWyVHkWn4mguKpktbjompoeD1n9RAmKNedJPa2fDhpo6fS5EGhaRsax1tsty3q5REir",
  "key29": "4QQNXNMfGPyacWnwrtq4JcprqSXbygm25YNv4X8qPgEhadCJgwKr5r3fgUPiWwQiUPgd5QtMtrjCwigeD3yCVbLx"
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
