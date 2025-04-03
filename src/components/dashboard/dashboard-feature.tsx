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
    "2YNWfkKWv4C77SefSZHag3g4RXw8vjZ9HSrySHzdLuQevjGQ1CBVuVj9hw3iA42yB3JSLhHCRLBb7gtBa6JWVCdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HarNmpiosvHRCkiKbwH5WD4UrEPH5oB47mhRwxnep82hHcCXPUA1aG5RgpnMmz51tSs4ZvmyjttRq2x8hyahMvA",
  "key1": "2yUsVZXxLtzGhViauruyraJY4VEbwkMEBnJJHSaWjfHyV59gM2redCwJapQyFZUezU9CA7FqKvSHbzaNKYxoUr5c",
  "key2": "5FzCzJbPr9z65BsvytWgcHQ25aDasF1soA1mknNSZRuibdm4ht2jzEL5j1ep6p4rLP9H4M54eCcXY3nwz8fS9Bqw",
  "key3": "ubHnR9h2NJvtb1A7pjBtSNbpXECXSPZHoXmQ2aTAhYnc2rnDgShKmmkA82SSzBKsFpDdYfG4hmMdVnB6maaBy5w",
  "key4": "3rWAYvMbBcooPvApTCH7QMNMGSivV816cxNjffQmtu2iothS1iEq9QbKEHPdQKwLSgw8mt6dgRoniDtHvEYP4YwT",
  "key5": "4PrH9NG21GFH8XeNQ7xdcBXWgohUHZa13Jx7scSiGy3Cbsa5oguHxatRDoxMJHomABjEDWfph8LDzDB2JpozXa7X",
  "key6": "4DvcVUHqpZVvt4Ab4YeCnNdbDWK9zXigc3vCDC4uN6vm6G5jh2zA69ZnfXTBWtKNeN8aouEWr1g3baN7xnkwqhxe",
  "key7": "3gre921MbBPiQfF5jjTBjt2PeVYWdcAtBTVm8U1VXVCqPoXWVasagENz8r8AbLynZPebmCHeDxH2rDo2RRVxqRE6",
  "key8": "3DvsMteRt2EMteRBAbKJx19mdLYsWpMkFCNAs9bfyvdpiSpG7bKSGW2WABTEsj6zvc12W38U26PV3YUR2bbUNwp8",
  "key9": "32EW57SXUjYea1EhCVBRLWu1cu9i388kA58KThRauSJSUx3C12hP2X1jdRHx1Un2US374Fqvm1TvDkBBkEFnyErS",
  "key10": "5VsuhB1ir3bWNfrpSgU7ohbFTSxqtt6tidGjPAKd7mTmbiz66usymjMuD2jmTsURGKvADYkyNd9B983tCznRn818",
  "key11": "2tpXgk6Bxxnzrw9sdUmfpC4emqtgaYv7TbdHedGXf6fLDA5oLvKJDoGjDJBFjCcTKM9G9WS6hLJfngESwJe6jiDv",
  "key12": "2LCkJzo1VAcviRVWvknfLTBid5GNh4ESV2Xrr1uhakKAG9E95MMQLqTsoFk8ao7JvR1bgWJtYeJE1KpVLXE9SXCH",
  "key13": "tFtAJF4iCowR2uYRvvac6BM7nkL4X8jsWtD4C1tVQAP7eKHvwF9oHUdttJmnPgcyFZRYd4KbGie8u4qHNJwPCvH",
  "key14": "2jDfh6VAtySG8556fMTLNqMRLybu6ERsAUDb8hw1HsxVqbsAtXjt1YwdpzkYjWZFhbtLsYzwtKowkwLxRmaWuSZe",
  "key15": "34QeBwuJP7qFsCp2bKtfN4an85a5wnCegQ8mojWWfiJkTYTWt4XtpoE6Y7aPEcQbkExstkCjuWMgHJUsdbEmwx84",
  "key16": "3hVX6Ya1HhJUmMoRCn5PKefBNNcHnR3o9pfX3pLHBxfQnmiqB7pshehCm65aVw44N3RVFskXToV4XXWb8dNbEiVR",
  "key17": "24WtpQsfQTjUNDF4xYvnRBBjMy1txEYU5Ro1wiXfQycbuwdrT7kdqtxzmsoVxJJwvS9gAnQuoN5s7DTvbu9hy1Pc",
  "key18": "LquDN8GXnMRcK6WxCruYGZRVYvNoHkZwfyKcMATFSnjMmH1CYuVwqByf7suZM4gAZ6HdKXiwVE37JgHKUT79HNc",
  "key19": "2mg5grHBxwu3agpzJgicDm6uZUcn4bPRWpTLH81wPQNWcixBQwc7PzNoMdCWqsibT3i6QZUFWQxhBASTxpNRjWyj",
  "key20": "4RoZGKue8x2s5qRufiuaxUjhXpjxcLaWFtixc66b97ziV2ci2EdREBodn4KhQC5mz9wQZc96bJDFCEpegjhG6siV",
  "key21": "4o11mtRvYAPyEvRnjh54CT4HiwsmcCS2tSWqKyTGeqwkKwQ3f7HHyYxtFRhBKRxZGB3eMQivFCm9ssiKV129PKGa",
  "key22": "4EEyZjNfPGMeCxzk6v2A8wbbkQ6bhASD2Gw4PbNWz9eRfVNm3QYTwFpbiJxczZtnntpm7uiGbU3ymfpEDpfcFZ82",
  "key23": "2noBoECcxVHQwFy4qeo65y2uHifTQfijr9Jpd5DUT63gBsPGRe6Y4biTMVgxoVgMosbZdfMqd9EUWsMbN8mkY287",
  "key24": "3ELq6CRgRDbsujPJNC1ekjUPL4JTzC8qPzf2bcH7b8veigPWNEpzgMHQtcwyo4V3JzHrWKMBjahaS2eXmYZDxULq",
  "key25": "3BSQSU5q4HFXSGZfdyoaoMwi22Qqqn93iiAyYtWLbr7JkUPV4SzkPLCuD2KW1LdzXpxGbR5YHGxYBwTk4Y9TaTn9",
  "key26": "4JdcyquwR3wRxzZtcUEcVDmpq4zbYjALkAQRgAtu4e6KqttrfcykyjYRU6r6pnFAc8gKPcgQSbehY4wFHT7K7zAQ",
  "key27": "4ryZZr1A39j48TggRHb4QVNzQUVwNPvjNhoCwruDP4dBzXAsBy7U8jFndnQs6Gyz1y5Va2PKcR8iwtQFkb1z8XaL",
  "key28": "gRuZKDLGDNoXfXKopNepW9oDLqu8dJ7XU1aEiANZw6bpPsHfwwMpqkFxTYauZqR9M8aL4wmKKHFnE4oT3VQpYxL",
  "key29": "4jyBDUDPEDmVXmYN5YTVtthYdvL5H8i1SbkVq4dDVqTLBv87qznQKLpXvhKXdLfgsLHufLVVR8cbjLgr2DTMj8v9"
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
