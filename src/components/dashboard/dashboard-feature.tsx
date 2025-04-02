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
    "4zyusJLjADUb895tUi54WwNWYwz1aXLurEHj2oevLGAhJUpxajMkhFpZ8E4FgWTJmk1mym7FVGyCPrUDu6SvKXoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xZxAbywXLnDB3AzzwjvntB7HZdvNcsgrcqLsyjvhDsNCcrZ9579GAjGJukJDwUMD7AYaSQMzwuckfeWPUBZm7vU",
  "key1": "5vuMwhvSj1E7JAx7MrcGeWn42RFeWaacUVUWB2z81ghF42MgtdcGYhHUcMHKSmkaHhW1bjijbYEFCTTtCHEPAjEA",
  "key2": "2PTBRQu4LZUX38nBdbRyStZbJ8rcZjpXobSDPM4mN6zZkFNQpoMmaxNHkAyvzCTFvvfPP4QFsSPSgdcPxe5dLRDt",
  "key3": "5yh7JT7ENafSY6iLbjVMjV3yhMFTVHrTs33FCmfoYvQGNyXsmQPbfvwHUMvvyv8axoFRhq9oungix28vjq8KLsqp",
  "key4": "3JGiXQaDAGi847WxagZiv4wiAP1M2Xd3MDAJqpzGiqXpyGGUWj98mfpMysVY48bF5S7pDB3UyEEdv5PRt6YjrLf7",
  "key5": "y9umxjamXjhvcAQCXvJgY3gW7PtRcFFrM6YqSmSrjScMKk9q4uZZmKXVoUB4TGg2s8sbS8EHpTN8PcWZiGA23yU",
  "key6": "K9evSZ1bx7aw7KFysRvDgUAPr6N58De9cLUMonYimBnnjJ53bFGRTovEUjLJr4ANuPGVKH9PeCrTCSTw5UWRPf6",
  "key7": "4GV9EgBhtLKZCxn3uhqeQsrFCR4P2dSLQrkugFzAU8ceVBPnnrwKCknPGqsySoVzCF1gJyQJ4JpMsLb59uXztcnv",
  "key8": "3YRuThYPU4bVBacP5P2JAhTzY55bmCV6QbBuuMrwY7qkzmEdU9MJvRw1MvVHy6LsfrdHv5tqkN6kbyRRdjfpnB5k",
  "key9": "sMNvzAnxUD9HBr7j7awDv7f5ofaismk7AevQom8zG6uzCGeyz3PhCupzmat2Cfm5i7A8LfWxiAHFR1Umywaa9nC",
  "key10": "28AbKxqaRygkNsCajeiMSPCMFLCGoC4e6ggmTrCBSCBRGVyxaKFp8hKZEm27TW2BasuHcweRkPgxY3EPTYrNNiGR",
  "key11": "4LgCMjWB98uEswyy54A9HhxsAcZSt7RPgXM8zf4WEYTgPgWuHLyUfMxiksuEuP26NADLXxjAdf4ZoTuK9RwoRHn4",
  "key12": "3639WqccGY3sSsQeHWzJq1GSjiBoHoeJZh8K78uFSAT3SgYVkHrKabHgoAayAkFtc7up7TcFPGHvwYd14ANWo81p",
  "key13": "4wiG7e5gYDUG856FdgT3chCwXFFWzqdbqx9VuF59L9DngGzEEQs7fvsYtqq81gRiUHCRzSA42HQMkBmCk9xGaJTg",
  "key14": "ZJqXWQuSo9uCiaSZksSZeSJgaQn5NMsv6feysHLd3grTdXjbNHjDz2VFhPtkwod8aiThHLfUGJGEXSi31ecJvqt",
  "key15": "2jYo7AgHA73Gric5MaGZtUdxWQ4wviP5sZ6qZ4uuCsjx8teHE6MrebAXhgFPVNYLJZGKW3zsy9iEfjUtetCBYY4T",
  "key16": "4VYHXJz4LkEEgKv1M3KBNUq1rnJhTZFSrLoK6jrFgagwNxQ4Xwvqujob3UKjozkxUB8t7ZYiVsvZmorA2kwN6PsY",
  "key17": "4hwnrje45QLXoyhunxSeWL6ePh7kfAtQEFR6c8bTHv4aNaMrGNKESZd79aG5KtzFfV1jFAbn62w1TJKUdkAR4DEv",
  "key18": "2UxVjE2qi41W9Bh218acwEUPHUBxehckgBVQcWp9zUtuPNiXbVxG8GaWNDYLs4eWVuGsrmM69F9wtVaeStFRduXB",
  "key19": "3CKPcLfEoZTchnZPhSpDFn72Hv2yQShSMiNM6zoYAsqA3MbPHZLBArkLnZt5dejX4otFmQS2NWWGVFuuRXmkxoRd",
  "key20": "4V4XYfG5mgfRyiozTBeo7WA91E94f4PCXKaZagBvXmgHEUXcqFNciwmngiLAiJ68snAjjJTrjYmm7N2FKrUAamo9",
  "key21": "3EGwP4Jd2ucac5Ab5cKqrmdH5AGtPHUTagtS7iX4kjmQL47nT22PBGVb4ckyNeqZSseNKGCF2ASPfucJSdaigW7X",
  "key22": "4h2W1XF6xREWekezTXgLWQRyuF8EQT8dMNivTHzT69vreCCDHUMMBPPEV9zgk16diwVWGnPzCRxbFUwAUamj5vMJ",
  "key23": "4kQyGKxdmLmqYiKmTcJ7qcVJhigatsoVCG3tzWKCXSHwQKY86RhwSN8XFMCQ5Q7oeUGbXm3VvxEwAYaBjTo2D9xw",
  "key24": "5DnYKqVrEXyJs8NbGBAfdin2YFaZEqjdmKxcJq8iKeFLCNiE2YuVRacVk8YEcQ6SkjrbfAA4KwhHeY8vWAyrvjY8",
  "key25": "4hwpTCqe5Z2SPcfuWUZ4mhdDYGWxji8rrt123Xuw8PXLW88S4XkWpGZ7JUz7KfcRocNVdGuUUzJeHSrjboKPNLmu",
  "key26": "22ETNR8NLhRhDAxtVvb3YAv3Uvz5cjcRoMxycJ7qQ7C83HxMFtgKJi6LqZ2Ksh56zDU3UnHuyEnS74jjRgFYK1Pq",
  "key27": "aRNfFhuy2vNW6oX8ySQYeGp5kXcw4wg2sRKiPw7HLQMKN1DAB87JydS3BVTmTu3UxbyBSuizkUd5nw4ZvhfRMit",
  "key28": "5trzQhs1GTTEz4dsqdRKrThb2cXKwDhMB5iJZ3dE8vE5rKi6Z9MCziygT98YUNToj8a8gkj6CQ33TBfcvubWQrCs",
  "key29": "42uMsKkXqoAYyTxenKnxF4Y1zGEMbcj8mBmFneChSNw5HAPbJkBsDVsTiF2fP7dEb2SJKR5M7cnV5YFu8YACvtqW",
  "key30": "2wfPS6RjyNT45vMoS2KK9tQmCypUp4pzVEmHihrdF7PEns54vTHiRwZwDNqeBJNoky4d4Mm5VqDeRxAmdspvajUX",
  "key31": "2ykceCmpmfqCjE1Xg9dtWJNUPxfSgBRwtarUCkNQPg7sAdXHWC5xt4Lki1JmTBCAKKEsEorJYS1vGtcdY6XPVcaU",
  "key32": "5X1NbaA9YspNfWDPbJYvUjjPN2r6adQnCQCc4HFm7xBbyLUnb1vENcHS2Yj8qJNQinwkSmMf8Cta3Qo3NLuNZHxo",
  "key33": "YK9fsB879hDAKdEEXMXD7Kce2LJFJiRXk54nX5EJkmRivHsATPAcT7voo78LHoWncfGnN279QfrsTHctpWCrwG4",
  "key34": "5dKwbK9CnGhkKFq3wozQfpMT526zQFjeMgBgP2uSgR2cFupFjdVHakonLVSDXgdbm76LeU3QMwpgrkPZAMkrvwuB",
  "key35": "byUjo5P9LGMVzKhEqR4K1T8nCettnnfQk1EXPQEZ8Zj8T52X6WSMjZ5qxVSrQv4fsCTWHnNGneDYzrfa2PAg7g9",
  "key36": "dAQdAoC36tzBHh6n3WJ9HE3VUciQDv1gnpbN7XZv1fqzy1j2Jky7paLwy9qeUuwChxdR8JyBWjpSB8cTFLZn9vH",
  "key37": "3HfeDoLRxbmWBZgjL1yN3PSx7u8ajFkiWJRDDCgmHXREQZgJaCRfgdNvpj9arrgBy2EPnXURTHBBmgcxg8FaVa4S",
  "key38": "32sZeczLAJdsE984VC1P6FeL4db4q7wfcPrybg2iEGhDc9PHyFLLmgqZACPafhjLMY8jvgQBCh5467QtZAmp6uJ7"
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
