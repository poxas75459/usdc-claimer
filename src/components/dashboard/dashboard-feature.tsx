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
    "5Fk7ceM7qgeMYP42uHd9E6TDuhsGhTKjLPDhwgJQmN9hgvxEstsc545KSbtdB5oRTzDSoZnX6kYwsuoisyXtoQTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Br1LC5DtcMjcxYXYdrWQRCDwvXwtpevq5qw1Ma97QPT4KYPkdsf2aBVp4pNKtuREU2jgh4CqXswRAKADeWnVAa1",
  "key1": "3ViPpNLnAUfaZrn3tXfhSG3STPbfNa5ftSbBHM1wD9M62Xz1Jisovs2Dj4cjXp7z5Uvv6JGGUmWuMNVkwFm44GDr",
  "key2": "3Pdger9hjySic27HsUUvakANQec2jCRd1KsuZpFXFDv9QQA8vP8CLuHgVjTcxdbibFrVy3jiAT4ipx4UBuZnhxHs",
  "key3": "4nbacCw2c2BBXLoujDuYsv9DqpABSb4UaZhoCQcKcDUBorQbthP1toM7HnC1AsKiCBReDcMNoxdqhQaYBgo7vWwu",
  "key4": "4R6usZMUjwzjA3F26YsJWUT4FBBjbU5wtKr4nWRFJjvgsQPdHQyMqoNRqk1jMvugjaVLzCW4RKAwU9EiwiJ8hVey",
  "key5": "2YGxSVKR9Y2iR6bPTQ8nvV4HrapZAB86PRR8gS4heoeRuydmvxs1X9ABHzJ8goMggxz5CqaBRWSLnD2oHBbEDSqZ",
  "key6": "3kfw8ftg6T5tSTJzUuLFkqU9LH4fTHWQ8zMrXMXptXuXn8NgXvEEupWunJ5gjvRqX7qQBWPJWuXcbth23cnCooEy",
  "key7": "3ZWpz9ixqq1uKFeJvn4UViipa9on8nAZ4pmSnrfiUrrNt6z3Wb8oA5g8LrtePrtEVvMaVyd8c3kMN5xRc6vfCTB",
  "key8": "2CMQrjN2DwhJgSFA2EWoBMG341CYfjVkJiowZhHvWXMGdzxofgQ68Z4YwqeP7YGdAT2WrA2gg6CLD82CF6RA5WGr",
  "key9": "QHNQD3ojdbyuaPF1EDEFYqeE438MtHnrsMMSXKHE4hJGF4AemUYKiVmASgFRZssCHJj4kq7A7AstgmXkEA7BMig",
  "key10": "31fA4c3rsbdz7tQeK8H1dxxr7nAxqFqnE1WqCQGvh1rf3z59mXPAKHbymtDFzimjTsGP7BJeVRX7BS5QUueV1wMV",
  "key11": "8WQDcQXFqzTH7pG1VGwp6rkwnwTSXxNFYgnbpxdXWyDVY4V8z9684qMiKBZT3Um4UFgcLbF4nVXz3BUq6LNaFKJ",
  "key12": "324a9mLBFset9Uo5eUhLYjxyyFoscqU1W8owNs2ciEt6cU2MwFqwLst5JzkxTMSBmUGCmtMt1pBy3viV7CAdmqj2",
  "key13": "5gkXTggkcJR4irmtsjDCsxf41QxHGmq2qVmQYisipgJDKidmmZqdtU5jeTSQUjXuihtFMA5LSAApRBCdLxbiCret",
  "key14": "4tz8XfvBre8cHeG9dPvLHgcQpy8vuDjbygzSVP1RQqwqpjsqBgiSMpFLCkp48w2jjF6mnoQqkgAGzqhWsVUnL3By",
  "key15": "4bpDZKurqY21rqKwZX8xkuhuJm7YJFanEtnZUUhqMgrfzdbWwEheWfV8MhuzwqoP5mAyhBDKf3uWoaCJdVRmund6",
  "key16": "tEEJiWytGoaL3c9oQrJpKWALp21Apyp4eu7hLi4kKr5RsFSscBeoRdRA7JBK7zC1Wis3zf2nb4QiLGFnGWvkusm",
  "key17": "4UZoxN4qbuynWDk8qbPxaBx6g9xy7QRbbxm9se7GGGczwWhhpjtERMagd9BKVLyfq3bGjErLXcwHuZZj6aJSbktw",
  "key18": "2wW2os7XoPyy62xL6BnM95PeCfPgM2i7Z8UtEHEzbRyFMKxR7H79Le4G6NTHJaYYu8sAjuPPyHKAZ6kmt9WFCg1j",
  "key19": "4DXs92d5NkJYUhiCR7cKuHnzYsanxWA2YZpMx8ohXNcGq3BMJ3TnNfWaVXSqmUTSQ9XQZUHph5rbCBNtWxwNqJKk",
  "key20": "2B3bX5WWPpqEgeLRQ1Ki8rUXLLpTen6TnBLK1JvAwMd1oMzGeKLL6D9KSPe63hPs28VTHFUiQUyp8yv4uswB5ooz",
  "key21": "5KbYSMP8TQYHvZrutRNAm9GC5anLXmhjkNYjUkmr3eGNq5G1NfaN7VVL1S6YiwFDnsJ7mHCLkEss4amVhxZJsveR",
  "key22": "3vjW6quYkKD1ZZ4Czc9e5VBv3ivS5uiqxYwaLRXo1wBiorVtieGWpfTSb13yntaHJ9Q89uaQCcynPGbYJvJGZtKv",
  "key23": "4UwWQQAcCDCqeWz8CXyB4xUZHbk28xokNwpaGFfaPfATRjHTQnV1wFK3GDCP29Dci86xGvsyqo9VPaCcuBZyqKVE",
  "key24": "5ZKaPaaiUNowtUwMkefBjpRxUM23YbDjp2R3b9t5US11Wvgz6KZdxrP3v8kEx482788h2edMFbu8NTMt1esLc62x",
  "key25": "4dU6i8jYamW1t2pzUYEj32pk2Rria2ynzmfywFzdSrD2ERwsu8vyQEbvxHJLDvSjX9AzoWN4ZWtH6bUjrHbnh5j"
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
