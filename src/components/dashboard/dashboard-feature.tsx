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
    "455iTDB46SGCZ1NUy5W8pCRdjCioxSCH7iqib8cc1uGFT6VUfiukNp6CJE2XGYsLxpMUNFUSgtoSjQvqSqRwF5SL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGEbtkfTQq8CV7UdekjpuhsBXCtzvTsdz4ZNkBDvrjuamtG1wzz2J6BaYaCggPZt7bx9dMfAtAycDPkgjXkDZ8B",
  "key1": "57ZTr9QYfDo5kUvX5Td4YxR4wjBZR4tySHFsQcXBQBKGuS3bEKaceCBUzafkbLm2mF3aNsJZPaG4hPqEK2bRWtTF",
  "key2": "38WkFHBHHeYqGtMk627fUinNjyrN3T6bmVkA9dHvXBmXJoJn2QXezYnyqWdfCfJNLKLuS5VegWzrZyoLGtoTNd5W",
  "key3": "tdVcya7vLQitZN82EsJpW8hqk4t4nCqcmNsLxhYwY61WJB8ijKacfJxC6kwffKWoTEqgwKdwR2zD1QtwpQ1hqEJ",
  "key4": "4XAuNvLPjQBrQnYGQNXDTc7KfekWfi49igJDmtBnk8ezrPZcNhsPv54qUugeUhKCpikXMRFx4fmJ9hVCYpQkywoN",
  "key5": "35dSJvrKrG6x78vwy2z91HMBXWSUArs175pZvpvb8WBHctVxn6XCmUpnx6MaAb9fdAGsgKutrWiQC6Lmx4ybGxN1",
  "key6": "33J5z4UAcreuoCyPYaAmMWwvrcSg5FiPDkki4PC2D9CxuAb2HfW2PiMDm37M8Doucs3xcgF2hmzdm2C7faCa7UN4",
  "key7": "4twcgoxUQZcX4XDgCnUJNc6nHvs9bmZ7viJ913bup1czi8BXJmuvdUmDtEGLmgsEnBKJqLv6yPZTe3q4CjDLVTER",
  "key8": "3UVKwthMGxMTyG5ESvGmuKBZQqBAYxQY2BLwjT3yENJx2zcnNRoYqc8DnbwKJrFu2Lqn9Epo8NW9qWFAWZRRcT6r",
  "key9": "5k7BrtPYogVU1BkzsMT9XpY4NVkLQ8SRNk1xz3kRwY8aFdzzHxRHwzwD8mxxiRrLvaNdMuYwhdvXAp6cEZjyJdQr",
  "key10": "53SXor6bKRRg1zUEv4voKNBPt3RtL3dHAhoZMTRkSmk3L6c22z5gsc22wwXdMKHZSd3qoroS7HgEDk8qEvwSxLm",
  "key11": "2GLCcWn7mCwq9ZdMD3o6JJbqao1hHmQGfSWEYu2j62UNn2K7zWSdTdhY3MqSQAYdcUcFE6HDqYAQKVKzS1A1jMUB",
  "key12": "2FYVcTDuedZCEPAfEKMAzFaFTfkJhnEpwfNg1Fgmaff7QHr1yX7wvhHMnwaUMc8cxoeHPSv2TE32rGasBSywFuvF",
  "key13": "3nbB7zcvq2RJvUZEmSAGChYvwq2Uft4yoPZUAnD4tQBosFVe7Qk74DeEepMCjvgmJ4jAnTYEMDiWt49ox6fy8tv",
  "key14": "2wvDPLnu4Sphye6YfDKYPjEq5byT7MKUK94TBAnKiKCas6QfgV2on7spEv6cBL6mVL82SCSvzg2b2Jsz2KFW89vi",
  "key15": "5HZ6yRFNJUJRbD8AVDqEsC8p1g4HggRphKWvACCAtqFm9rYUeMz7Uzx4MMAtEv4s7AfPjUzHTmDdNLKZz9P1kyXn",
  "key16": "yEoar1XxqitA8H3FMB2Wgu8NcRK1S4M8yZiZTGG4DyTNVDt5itgkFasDvzTBnyFdZwAZ9yt8XcSLKQKuhn5immN",
  "key17": "2wTp857zCHYRLd2fKLa4ahmjXPFMhhUA9YtK5soHXSJWrjsBX3uGGzoTuzeRP9QcSQUjmx7CnUKKhZGXnf3Urngw",
  "key18": "7Asn8cseeadh4sWv3Nq5HAygHDMn2pm826yfYAqVWX9TUkrF7tdQW2fe5qrrMJGm2siju8gWQML1XumMNUgcZYf",
  "key19": "3zAkQQTcsqgiChsnF4Xhr1v4ASDFeDwCkLNWYjzTLBsHtJ6X4WL4dap9ACdAjfdbKYWdTE4ov1X8wiZeGL7kJpur",
  "key20": "3UKRaMB4HrDjD9TaSJTPAZp1nFXRNJ26T3knsmaR7HYD9tuqSDzfG7jimAh4s5ovhLNDnPCC5ELtQ6xMtQSN8QSv",
  "key21": "4ecjpd2td9Qwynmwmb4vMtUpAnQMCYqvocP5u7FK5ZqvMr6nzHV3PN7wp1BqdPyDMdx1s7biZbytyveJtPwU1AkB",
  "key22": "kmoQGey2hqmTtkB9jJ8hSCK72ZDEj1d7FrRzM7DHEHKvxkfwSsQEjGewJ1dGWeUskbsoAyXCSBECEviWauEaDqy",
  "key23": "45SYABoMPRjQbSabjnEmXjU133LQLaVhp1V6xVYY2n9qT6XDn4Jw8T9GyonJaryhWSGgQhJi92CNbF7J8KjocM1K",
  "key24": "4BT6R5DePrNV2CcDmzXNbhBGGqmBDykgMD1Lvfep2eB9dR2RpXxVHSxymbvwNjs4ZvF6Xam5A5HBRJbE3CcBhsMT",
  "key25": "2kf2bJaHGektuN6L5g1jdRwyj1M1nJMpDFY3pmc5bVeNzjzroZgMmXxGV9px4rbnxsFZ5Vn6hE7m956ATWTfGbH1",
  "key26": "3BR1wCuVwbtER7Ui9iCbXmhP6APmJHCc2g6KeKiEouNpg6JRWQybUtSBMacH5dNoiSVaB72uuMhpxpuUwvGvsYLR",
  "key27": "26s4mZaW89Yx8tLEqLLPVq34s2trFsm8wBeAExDyzNruxvcNen2D2cEpLNQ6Cj5mUqEn7jggjUbKpGjUmWTubcJr",
  "key28": "2PVxb3EpWKRMzwX5r4j71q6uh4neaPHZagotVD2bWzQxBQPXc2ekihq5CBA98ZE1SFartY3cHFwgw69AFodWV5Az",
  "key29": "3N9LMJiUbV7EvamaQABTN2RJY3v7HuLH1t8k6wSaz95rCTzfMKBkmrrBsgknaSRJPG4xUZrFr5nbMJ78QbtLvCAY",
  "key30": "2vEPLkDT7uySJPoqpKasvLmunpsBqkGWyrkMmAeoWkfJNxRQdUT5G7vj5dgbo3Ye5mYm9y9Gkjw3oQFJABtgcmUK",
  "key31": "6nD5DMKBKeSRqEfWZoVgSg6vdxG8u2CxbAXKWvTq7xfD9fD2z7cvbpaEfKYC4rJbaAUXk5s4k7j4TH5PdBtXopQ",
  "key32": "3FSC9YEMenDKDKUMnYZt6TqkvNZxxjBrKEZagHqFGEKxJoqJXUcFxL8m1eDWoi9MHo3RnRT6wmZxyogu8iKbFhtj",
  "key33": "482T6PFuZiwFdHveiswiY7qVjmajVEUHC1kGiWaHMPDV9SAjrmxV26ZiQ4aN29D1AJtFsxURxZYnsz7DswtebWxL"
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
