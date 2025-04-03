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
    "52sdMqBdmmyBY9eec5jkAPKVcsTdPx6JoSRfStARouXF7n5fkfkBJQQSYoZeMD5uwB88AZ1cMS8nbj4ZfEGkswAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJHrtK9LQg64m1cB3xKCRQRfAoazc9ELMS5sVrhP3ZZsMb3LAVftXQMk9sAN89Cx1J1uCyBpjUGAiC4JHmX84Mx",
  "key1": "3iWnTxRkXLA4gmguS6PVrqBsVJ2cg8XanshZVCsSHL4PLYN8xnugpbQWFQWTRjUN7evWz6NpBZNQmYvNX7KQr6cK",
  "key2": "3Yp39UyJCoC8ypFD3tsbaCVkrKRU2zoy8BXQDq6ZZ7LV3ygjBFrY8v4wnu2obK3enWK93kUrcsH9xxyf4kF7idaH",
  "key3": "5XAk8UcRwtvCCtgAQMLZvfyaGdKmpDn1GaXjxMbh9opJCBHBDHUfhMCs5ZvjidfFTdrUDs8aKhmYAeAJQphAaBuQ",
  "key4": "AHhFdxC9wDv8F55ZhezMPRPvwQPCfXXZ8GNBVwqwTLxeHBpKYFkLjhCAvYGdrGJEc2ZWJDk4ssgJazBPbNYTniv",
  "key5": "5bESbKBDBL8U5kArH5QekbkY68QbooyhPRhjq6KdC8jeUt93c1xQtJZ74Avt3NtXEwh98VGrqktvG2aMysgR3Vc1",
  "key6": "2p7KNax5vGLS3k9w5RdHsFWrDjjtZawYbE9xk6MJKvYiycyPaoopcVqMHoH6akujKFZfqdao8CdD3uJfeS1YTdyi",
  "key7": "4ZHfiSxFKGjvwiDqH3revMJUa5L5fpfuqqPHAW5utsULqvCYrV8MxApahX1GFeEC45YN6hBneZdqsUfhSCgajmCK",
  "key8": "5Cq9yFrLgjpHw5swJsFN2X1UJgaVgwcsn1237HvTD6iFB3zoHyrUha38CWzDm8Tit1SGZFJNEAs75cXdaDJxxnzZ",
  "key9": "27fckQY8k2rVu7mCQoutU2cJWxJkYxwi8fAhepKZYPx91kMR2rguLAYxfbbArMrJJ3BGtti3ToVwrbt2WvvZzY1H",
  "key10": "2DLLU6LmWjCiqeUF9G3ZBweMeTUFn1fUdeZcUphEMwh4A1TH2GJtk2rKGY5uiMsJoJ4pCNMeo85oH2p5gB9nKizX",
  "key11": "4s3gLo6AgW8a5ZSaJ8DsB7CUpxSZH8Uxbk6X4rYRPZPTCzjchH2JkB9HCdQt8MuRggnyuRrdP3KGQHDBGQvfEkqG",
  "key12": "5UMM8kNoBK9LyMLaV1ncnVBGEm7uoyvxiZBSPDjU2MPBJR5T6X42fhLuTpwY7s9hrBi6B829fn4UAXivi7G6RTnd",
  "key13": "22JCdMiSuuQReB82aBZYFGnoJs51Jsz3azcUTHEWJdxrn8KZuqBXwXjpSSYjmzqDYQ1tNZ2aWLxSs3HKjeCPyGrw",
  "key14": "czJZJBBDwEg2qpGKQRfuvNiaDxe3bFnaFVRpRjesZmFcRZXfGN3WLFBzwyJjVpyuRjoAufqJRsW4R4U6Eoiuu6b",
  "key15": "4Yjz5xgzkPkNXUk1fNBDgYNwZPf9hYTkiE1zC6Tq1TuMUmEwM5LhKAjrboC1X7DBbXGzbqaU5m1TcSRytQZMYTke",
  "key16": "4Peqs6FroLe5dNeBzZp4zNpsTRwbsvJvo7k5Sn1mZLDecRWR3zHJAXaPXAFoQLrKgK4ufPe6pmiJ53YrLvRvQo5t",
  "key17": "4V3tzz3L7tp3UvDNZ6zEkEY6CtdthnHHC7Nwk4wZqoVPAcz9jWDp3u87isbZS1e1J7KMgwaEYroFUeSbkuowaJgt",
  "key18": "4ZqmVJ6aCoWC7iqkBuYu4spC7vkP1wqay712jL5aHojJwPC2TwMviMicYfPcFNkogBWAuZuYWPjA8maDSr3keipp",
  "key19": "4JSZPm2GmQ7nBaDMH8BRuXFai1ziGKnS3tN3suBc2cjC6N19y2vR7kQ5YhyURDRdjBast8jKwqT71Si7euKSdsAp",
  "key20": "4L1QU1MUCLQXdMhxKCYPpYLsjEt7nhXVXJMgmCGepRmojEykSU9QqyJq9yN7jQCEuLrHrYv2V3wz5BRQD416QkWd",
  "key21": "3ueHsbJjogLeasVBNaXjtScfTGFmnjGp6Pme2yo3AcreR4nYnBY1tYFNLWN5PPt36gJEPbA2PpdCYWg7mP9tTc8A",
  "key22": "2pSrW5npnbyPLsnJVfTX4zVVrxdeGsQwBqujx6uxhtL1UKwFAE5aHoYusmGwVTNz3UF5sJYu18efAZ6L14XCf2Aa",
  "key23": "3hwZprh9Rag9mUUMoKqyMhTayBGSQbrHXBbRYvn4c6ieNw9vu4kjz4mbM39aihAe6bCNaxnCUe2rog8jgHWmRSAy",
  "key24": "35YDPxPFNoFk9djgjSFAAMfS72XdwJa7QBRV2LqtCGPywPAVaMJghhWbcxSrWQTB5mEB3pRxpjd6yT8J5TfxpzPr",
  "key25": "7BhHowMsxz41TAbiz32wP98Ko44sXphYSDxUaVisLrpXW85MvMxeZ79tGQRkoNZqGqJjwbmNWSMxYadZWpfQJmG",
  "key26": "2fLLReinfNu4Zn3QcHLeTUX3j2NVcTCHvaQd1wHurZNfLV1YYxbJn1YZBrxgpbnr7jd2D8WB4vRaLYiacdvhYQvs",
  "key27": "3aGZZ9tqnoVLXxLX86HDcKa3V7fqw4kGGjD5D4aFgYjR9CF81eyx3jU6q8ofpvWaX654Uo9SnAem5DCPdNdjuoXU",
  "key28": "3UaJJuyEF5pukiDWhkJRzF9PNpaKBPExXd9XSHZPtrychRaxDF3sMrWH93nYKRqFoDZGnj9NQ5Rsiz6QzBBASJQX",
  "key29": "3rBnnRYzwftqsyWdqem1WQwrhhBTuwMJjfTqrAwcpkfcgkB6U1yjDZAEaaeKWhc5Nq9MV8rc5HL4W1qpgot3h5un",
  "key30": "21yhqh1SKYbDv3guGnLboUCjEH6UFC8FW1vrWMxyS7UX44Fr2ZDEHKnBpazGK5em4q171kmnrKEVXn6ymDfqGUgt",
  "key31": "4ED8aVgjsugmhZsz2smqcbzQTEn5vck9w9DD66asa49fJ8i5jrEQD8Yha5ETfomevFFCVG338iZxfawq6jm9hMom"
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
