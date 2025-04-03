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
    "5nT2qGe4koFqGpkqG7F8EuLCUufkqNk65xCgJpvaq479zW4NbaBpWLnt8YcoTdDB2bi98MTW8eqEDs5kSXuhTAkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W18nU3Az9fqEPE5aX63RD41keLvSWQwV6yU3YmzFcYqgWhY8eHCsEqG4dLskZaxWkfEdLJLvM1sAQrYfYDUmij7",
  "key1": "3iFVujyKAcz8iHQeCp2Jpdd1puWSo1M7Dw7rB5AZWzAxZS5RxZG5iwMJbTBmvtsNm9RJeBMB2MpfP2vCiApiqpsF",
  "key2": "58vch68rSCJb1EPtjrFhjfo52rE7NwXohjafdLiXjyhkduaxAqruzkC9vYaWBViSTKouyA6CyXhmswHqs4PWh21n",
  "key3": "62uN97nNxUkToZvRBNXjmtzbXaDHoSFkxB9cLnAPPu2qTFYiGAdoju1QLCNYwGBqQpN4Ek6XU921NnzkW7H53uNN",
  "key4": "2AQxrTztTGfiUaRHvUPpgbYhKzDnhZ4ZnkPWaXUDxzihTtPb9KVJAfbd1GZJFUPmSK16M1qorssUakzwL9hmwiAh",
  "key5": "UWhKzhtSTYYiSEtnhfWENS1VVb23CCUseGWEFBXuWx5aMT6vB69UxcFGUivXkVzXBXhjhhfgXfQjpcxV3Xti3Ep",
  "key6": "4EKtFTXvTUUjpefVSHWaKJd9aJvbFeSvtcfWAKEx3RfBRsqTA9qc99B9dQv6UjY8tsgLnDXZHkdydTo8M7rjdvYm",
  "key7": "HDrdweoZAR5wuqXf4dHUA1DX1b9pM88jRaAUy4Zaiw3EykeztVpdkQzKaPcmd5WwzktsbgCKASCMLPAGxtcaFf9",
  "key8": "2LsrjFk8zR8qHMJ5d7LrKmE5o2PwAuquwhCQQnU3BMqQVaziKkg3FBXsLqaoaTaoLPo6N6EP7XpAc5iEejsNTyfe",
  "key9": "2moD1nuoqbJGV6EA9a8Rrw6aw6QmErWoRv6hEkZbLnJoX4aX6HjtAihv4sgf8hsUP3ynVV4BNhH8cb7H5Q2SpHRa",
  "key10": "5GPj1ViMTtic8StuwoRoaXSs2NtAXDcAZGX5XPVRAA8U8KS6bTSS9RgVLaGyXxquLhtm73mhfx9JiNdkBAssm9tb",
  "key11": "3cTE9wffwQ3pRU2hWYMufHzUvbbr73MuPvABA8aq6JKsgytTZvyRzNX39yt94T6wyJEf53UHhkGcHPZJgwk739ox",
  "key12": "4YwNfWfPNqVUeb4vXJs2HXAyA5dRwmpmnMACkf6jNgsk27PQ3aRX5gwgnvPuR6cQKa2KdcRKAD7Y4xRNm2ArNuGP",
  "key13": "3y1uyLvrcXf7DzdNmBewpFCRyf1LGiEQArLGocreCkNuPvyhEFnDHrMApvkiQUyTX32f3JJUDdZqaqe5N5ND4FHr",
  "key14": "59sv3sWYWQjreosX7zJc5BgqoW2JFjwUxKTWjRW4dDpPHb9PHtq5PvFUc2jXyQJg4XZE2TK7b6daqViiS5W3V9zS",
  "key15": "dXgFWxbuwR6MjnRcaqZDaBQytpmzJ88UzgJWp3bpA59J28QxxEUmBkeHK41sR2fGvWgQ8LTBuj3mzVVMR5tJgMy",
  "key16": "4YcbhVT1RyhzYBuhkxK7RNQTk9ncqsXiTp1fMSwVvL6SPkGs93pKqeuXqBn8MoP5a24g4ERcevJp2jXrmoaPpEx7",
  "key17": "3gnk7XT99k267VPjtj5QNJwEF2pzUHVuKPepDp8d7WPc1VieCKo8Lh36WdT4QcfrZv2XFbuoYfv7xKwJEBFXbRDG",
  "key18": "3NykXT9MnYfdzFBdqQhjXZBaAyamPeGKZmuLd39giNj9qTwLJXweij4h9nhGYxPXJmfVs9E3bUj8SmNXFVGGUjvM",
  "key19": "2uGi7LxeXH8tQi1m85zF8eVQnXyTwwFHndPM9uzYhgsBpUR1EbsCji5FQAMQYPZyaWzhxguAczGKPm65mKVVosuT",
  "key20": "AfSmZxFp7XyN5JXXhDJ8CBGNDy3rTK4sbaGBdEuoBh97qed9ZwWcthNYauXdtrJqhfJ3BdvDZK16D3jeoX7TKid",
  "key21": "3iN3SbL7jcFveS1wdC83vmHbjiRggp4xcb4BT6iYDYebmiMVnZxQnVfLgwGRBTKjNzttPwZmp3Z27Ak61m7nXwyo",
  "key22": "3TcFuqwyBkdWVmkCvWSoGf3Y4dF2oTeHk9K24uEkTjdA4Tx7qmEbDTKU1DAASC8tXbnysmKBwS553w8YqPLMh8cg",
  "key23": "2fRXiq2wQXvM8hV4THiLR2Spi39VHu8C64UDyPBDwRsGYuwCWMqM4qpRZ97UFD5eKpyogkys4s989gyHJ99TMkV",
  "key24": "5wVCwfNexzupnqcpP68oP9iYYbJZjx96jM5cnVJvRRm22aSFRRrcvqSLKFAtQ8Ng6PHnM9MijkVG4NdXKPQF8QBH",
  "key25": "qpuusCXVUt71RkuHaLVv9TGtJFXSy5UdmVB2XG3Jbj5DqiaLEwAsyMHwCKQNnVkh69Hufrm5EGyZV3P7Zc1SXay",
  "key26": "2EoNYdp1gvRiQ21yw36Q6w2LJxN79P64usHCZrjVEBbewUW2RymG49wTaz73wSUt22sMyLeKnbyutuc2Yd8dXZm7",
  "key27": "34tpD7323oJhjbtHrkkmDkpcjzEfzrQBKG8ZUtha5AwDAEaA5M17C95XHh7oUMwyHBDj7N3FcYb6fWJwtcVuQfjJ",
  "key28": "51NWYXojbXHW2VV8SyrH2k2CSj2rFBfC8MhkHnLkYf8BLB1M7Yd8BczsBf1qCXTgpzFSQgvWMotddePtTN8cgxGc",
  "key29": "2qVqpv7TCbcQK5CKR8iNTYihy4aeEpxnwzXVBpXLRHHtpxW1Qtdq6ppBQQHRyMHtoH6FHNWS3FME8pb2eBZiMEL9",
  "key30": "2tUc38tWqQoBwEjyquyhWqf8ToubRRckzKsCD13FHTX2VumoifgZPX2DRvziS3wP7nYtqKsc4fF6RkAz4UWKtxCx"
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
