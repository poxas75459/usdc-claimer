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
    "2SKShpjidjygFLpYgDsJ7BWidaJEFETPGUnNfGPEqwwP5wo17fqNEch6SpjLfC1Dj95hxZpUBx4vQpTf3uftVA8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MPvwoBeex21LYoJxrQp9XbXrUZnnd1sdvTmFuiHavrX1WHRMUu1xPLyiJXQnWRP6GRiBBJoWWEi8jMSmVhEtpuq",
  "key1": "2pCL9wYjSedBak8554Rm7hyBNNwSRe4WrSVcndRcdX6XcUFJegw9N5pEFXGtGBV8WYVUaA7VYj4zjnWUnG9opymp",
  "key2": "2iRHFhydWXUysVwQ9ASAQNyCR9CPs3s7kdLLjaqrwziA5pgf8wKX9UBTK7B5H2p23iyKik959Gkg2ehBs6kzxmjC",
  "key3": "5HDgA4banaQAptfap7MTyXPZebYkSqN3pK8isrhSkNwzAGaxs8YQr8BzbsHEhhcW2sSLs51VRmKVAnNDw3Tg3T7A",
  "key4": "4CPj1hEdAb1ofDAyeFhFNHPkCxjgEHe2xDSmxKDTAegRPc4Vy4CC4AoYgystj1ebHkdRyz5V5xNLdmqX7v82Y51j",
  "key5": "5hfqxHiCHtPZ43wyEYnY8voeMGyKYM2LuQcs5gQmB7u3eQb737NKHL1ZptzfqcZXiFouFmg9HbxbNatzWtCLG1R3",
  "key6": "QTXi3Thkk2t2Xy4GABgaU6PTGUXZkvV3DHqhJ3ovbApiu5kngQSfQy1MbqBQwkzD1bdsZ7EWszo1BxGKQ7FsmPu",
  "key7": "4qd7FWJS9YBmCV9YczEqNjgFx75KxAmeePNi8MGJYoPRBCFEjZZrGnE5aGQ4BkqVKnHUyUJYaeJ3G7a5J2DHTjFq",
  "key8": "2HSwiWGnYywM3uDr6wDBqRSvVyUgwsZCRmynSuLkYU9B4dFTXG9kejdaDBxNUKgnnBYhbSAdtAumFipqrHrSN4AV",
  "key9": "5ZfA2uwHJRwYk8vP5xu2ixB7khbSdMhGWmWLgu7vWzSJjHyVhy26m16eCgtSDKchXfNioSe67LEt4MBDGqUS5oZP",
  "key10": "5dET1noqSMg8tSc6FiLsDok97epdJPn1mUTJUWvj9ayNTKrzBoYHWDkqZVFqTeiwwjntXAFk36pWd67GtBWaRjFy",
  "key11": "2AQvBepqv2xZa3NesergJaYLsPH2tpmDkQMaP9dNfeHnxk2vZ9W2HBeprDu9adnzQJEebQHjosJCpFRNkGLHjXnB",
  "key12": "3XgQSpEXPSVLVW3YhKEhhc11d8TrCay7bXgYmwga9nH5Bk1NGfPf6A8V15vstyH7vQu2MUvaN3XkCDCGXAfZPqft",
  "key13": "THyNDMaTDkgAB4iu1SwsDPU8jHXoFGJsofcPfjb7DcYUPxYicrXiRQqixP6k5ewaaViCMakxkQvxC1PnVGRy92S",
  "key14": "3aQVtZvnDEh6mznkVYg1WcnzJ8VqRbVUaKf4XgUuWLcsjJKrqVgSKTdb7GMKs5sr8K5vLyKHWdaPqYHrvHe6P1fP",
  "key15": "2McxMwN3uawS36jgNLVRFpmYWFeWJzGYF5y6dAxmNnJSz9nY5MxoLxFeS4QXyNtWC6CibgWucyNwjcPpSq2QsEX3",
  "key16": "4ptV5er9FW7L6RvMucwkkLAtdUooGBHtcJcBfjT8x6uFhTHET2huJtfAfcpp2S2u8D2J6pMKb7JEKru1gB3jKSoN",
  "key17": "3NjvjxbmLCf8sqRw63sbEGiE6kLJoEihjtz7F3b16M8opNBaZCZKT64DqgjBLcYK6uiQtDWz3bfZVSU5WYah7pmg",
  "key18": "46g3qAg5syQ9XRGsA2YzbL86fn8N2kjW7s9xGTJ6yGkW8ybjsHRmbnf5erA7quPDS6NCTxtqMrRe1NE2dYvB97hW",
  "key19": "59ZTh4AUyQBebnjcNLpkdc2MmgMYUmjnZQ9q44FDzWK9GeGWHz65QNCew9euyQBdkdQzZbZqxq97TvnLYEVGXKaZ",
  "key20": "5HKByQnyreLNDD65ioDizDUGi5jzCte8dcvmuBjgZmsxP7CD1AQhLPMZAQmV93v4abVkihtBLD1nZxMfDeoCQuAP",
  "key21": "2pxuNzsVtcmqJpnDxvJDvfhrHSrJpTfe2D7PifQEpmXF1dUMNEAyWD9NfK99WxDYwoqH9mKJcU7U5ErusPyTv64x",
  "key22": "5cdBppdVVT7h5ZWczBtvWvbgWjuYhnZ3aWwc8ddRk751t4DZ1nsMqgMTkZoJDLbez9GHWLZ16y1U3TwPVvtw5ta7",
  "key23": "Xxf85HeotmK9BqFyorWj8V76ZRDgPzx6v81ia3rjZu2q64RKKFMSQ7DrvsSTiwBDQ212Abru2ZHChzbLbeezcmH",
  "key24": "2iB9sh9bUb1NjZC35uEd5WBVwNMD21ian9it8eY7YU8Yu6HgWC2GFrNF1KJgThw3XkzLRXrTdTMvUNUq6HokexNr",
  "key25": "sURouDJjReK2fBbzj5BWcNKSqW9wFnLdUWRssdtL3h3PRMnjaDSBJek4tFgFFnZkGHaM358Gu81pvU29tAMkVoi",
  "key26": "3BroAjsN1KH61DgtCSZ2NksCeuFMAzDR5TriHJ3V84k6QKJFSFtVBgsA7MKpQ7pXKpbN1prQpURUeYLuv5FWRXxB",
  "key27": "5SdscVQBkCbtW8tKwdA1ydxgXoz1XhJ1nncAQZdZMQ9m8RJ2a9y3aCXvd39o7BYGwnHqGmf1PFKdzK7VfStwDW21",
  "key28": "3re9g9BVqT9Ue2svm97uRdHqWpsYigB6EYZaBkfXS1FHXeGKn7tdNK5aaq5aEP6QtyDh83YSXuGoMKGMYx14RXnw",
  "key29": "2wFznSaKoxd3RxvbUCZE19XLByCQPA22vDEXJPAnoJsqR319jqG6fJDa8TDF8319DX8bjTgVKwoXJ35DjR6SWctk",
  "key30": "3U6SHRnjqFPNS5VtfY6cCPU95Wsdbv8EtJvnwgmvRNMYCQMqD6CSiwkr2FAFEkXevmNuDX3vMyV9e1NWyEDKEusC",
  "key31": "5HuM7bxSxFFGLDu9aiu9giUZiVnP6wffQFrszbd58YpB6TXyLWTrFaRCzrdKHHkpKgbvBP7srujz2r6apoCupsDY",
  "key32": "62kMTMxVBVctLBpyW6GVQuVuVyvxEoPdvBq5GkhrM4fRhw1ugut4nhbQUJZFGnDGPzmAj9Vf3oSAVHxkZrd45kiC",
  "key33": "4XFnfZNnZniKQFv82wCn1MsCkkWNGTF9gHnL4TAd4mLVYumLn4xQRPHhusV3zkfuyPCDpQq4HH9jfozz537qoXdL",
  "key34": "4P2nxdjTFCq5xDzzUYGGBJZsjQga9WtX5DLN9tdWNPdzNvf598YhbRS8g7jCYnmFtnqqX37nJF4KNyW8pGhqEZcW",
  "key35": "Aaeg8KYivGvuvbgzrony42YoSCkLjGQ8Js8oRyDmmNJF1MZjpmD8QgQc57nZe1V6PKB8cqNzxbpgrCLpSAx22Q6",
  "key36": "5QZmL2fJu3T38X3VSBsTbD7ZE8qVHkpT7YKbxsoXewrSBvmW2wNwHxexKdBFV5BrHPpKtCd21ifPQPB9kGsVLVZy",
  "key37": "5g69chuYYGUQSD4yWdeJeuiDDXMvb1vxz3sW96pu1AKjyKvt7hBaRTrgqnjwNJFN74aCKhYJZGvxPy1d9YamBw85",
  "key38": "4t3tMaiitEPKFyuwoexWP9SWEQGtVjqyjZuLT51id9sJX9VsLRPm9RpvNVGfsid2E7SsE7V5rSPU14JoQ7Yaq5DJ",
  "key39": "MQ9xsz89MgnPiPj1sDMxRK4j7cqEUKWivLxgzfJ5HPuR1Tf8VMxohXSBvTvFv5RAJpzPi5QqvP9mXATjyf8EbXH",
  "key40": "4uo9saYt8ipaupZfYH5ictynQcGEDZAPEGLTCMQCCghFmzMJVJGDmUUj8cHLfxPTvyQVafKYzQF6bTBGvA6RHqUE"
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
