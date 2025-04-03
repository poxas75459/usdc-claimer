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
    "5pnoe1aTAVHcqAALfYnpJ31HPLCEtWW5vvvuNqdPgcQeMgDnDvpyZgkTjp2GjUyDHGUtL1qnJxBPPKJsTyrX3FYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WhKQZpSnhfWx7gTiXaacZFaki9FGXhHcZVHEsjgkziZnvgj1Qh8s8oJ9diSyCx9Wd3bqio1FFoa6jHh1anxtDpd",
  "key1": "o1AiBbbt4hn1kT61PBCJa4PrYs4TxKC4cQAQMMxyvxK6CRzDGkhuGyYFfqmfXeUezjuUuqo4UH3ywVQgJ3mF1wq",
  "key2": "3Htx3aeVDYKE8vjH9RjAgoptk2bnX8pm3fsvL6HEWqatnC7AhBvXjiTpRkTCNVNSv9wGemNQ729s7y69NtkYffUo",
  "key3": "22yczpywxGUAZzkDbSZenbQbJYn1guUXH2s6s9ZQCkujEZgsFkLDRSYMKGR6f6uDf56pVV9YE83ZjU66zR2smnCP",
  "key4": "2E4uA4TfB9o2pYZ6JCKMEEAcfyxVkJASGc3W77Khb1Ry2kEgJZMzXpkJwGqsZEXvrgkpqNCfoZgiSVGZqMwwupCt",
  "key5": "3ZJ3AYLxqR9FKPYWrzDZkE8hvABqpVumUQj5Zy2vLk9e6JjGA3BwU1gjK9x1idivqu5U2vdC2cLHpiCZ5qdvDndz",
  "key6": "WoYJJkAvECKch4WmoomXvCFpEEPWeFNpgU1RVibRniRyeVZ4w9cZs933w4PQWAaXYkrqjyUWNyVmGt3eCnWghnW",
  "key7": "2DBd8A7reU422rLWph7mXyG4XtPQbAr9fkoBrQeH393MJK9pUiE2rwJjX65obvxsptBCynu6RvFGn3fvRTeK9fp6",
  "key8": "5HkvHGsRqy2vh25wW2Ai38UpixiDfu2pTFEzwsrQLxvE1PRduaEgPyzUYZJLkZqhDHRvyejuxttr6sDJQBB1c9cD",
  "key9": "3mKAtwPh1K7CAR4Vk6gJozdg6Wrm34zkmLRnyeVCLEyTyG1cwyJu3hRHoh1BWt3fY6UuGrmizhrmiA5XqL83ViRA",
  "key10": "55x1ozLMjByBysAYT21FN1Xtb4oHKbBJs6q3pS87PbUUnPz5H8RBozMTwzhaApDBwAR3piwxdd83zUK4QQCKKXuS",
  "key11": "5QGqiuK7jwcJgFgdzLfdrxdhK8hcjGUtFHBJzftawkAxoXJS3wW7MdwrA9DpqbSJbJKf3fVk1TEMFF3ytD5Zrkik",
  "key12": "is32Pizhbtwnq6dNLTqmk8DJEuRP2zWwPWKYNsh9XPuMS9xa6y9h9KB3eLrh1TdV8eZ4Da6aaXembp3nUTHJcpe",
  "key13": "4m9GuqXzgovzGBsy8C5m76YiZj42WqS1rioj4WG5V7t628znYBtwoTZ36qxZyDRPB1zBAZ3hMCJ4CHCAHbWr7gSV",
  "key14": "2zQK6hknxVC9zKzwAKvTxHbCsmwJif91jERwRwwW4MvG9ZfqVQJaMusMAS1Hbpzy8sF6BpHXzJN7Vfthhbg9Z8je",
  "key15": "2wsjC48LV3Y84VESgwFzqP7kZ3kyc7uwzu4EuBFkUyfargs9oAyrSCa1qpV81RU4h43MDMf6pUGE3D9cNYSuThst",
  "key16": "3qqPLqireHVzqhc8uYBbPVunuziG7wjV3p1kfFrvnVjh1TR3TrMsMDnthmF7r9aidDXzEogyRMW2fEeDnUQrNMeT",
  "key17": "26wKV9h37mTS76ifSMyTS8JzZHjSTt5xjkf2LSBV4ubi6MfW4DBG44rQdYwscyx63Z9MZE9ELpfDk9EPEXFGAnq1",
  "key18": "2EYyLJTjci3pGijT6zKKptzS6cfY3BbpC2fATJgKyyU4GewFaRLmZx4ypXNDFwQDY9V7ta4nroQKwsRSF6oYmXpt",
  "key19": "2ncdnC3UXpR6JTdBCqY7syJ7phgUoiYHTaLg4iKW6QnDpCzzqSHV7oUNp4wKKhXetRJmZcsCms6fGXXciUBPx7kn",
  "key20": "3o9fqTJEpTsKhyz7nG47pnNTT6cjnbzHdZNooUX78xmJG2vCNy6biVwG2LgkXiSvZVvdTm1WomZbusbG4RqNxQ7w",
  "key21": "4WP9k6bQCAZGnkLFFEahYRVu5ye7Z4tdVPDY7pFLTqvUhVhgfTZ17ErU32yfce2p3wwsJTE4MVgHcf4d8CaNsmNC",
  "key22": "4ychsMxU7vn1it8AvtVovF5YqeWrDGVuyfxvS39dXywHqcwDCSuZmeH4UJ8pSqLdBmdnww3mFhNBPTP23jATC52X",
  "key23": "2nEMuDJvAeZmSJ2jW4QzxrBg9RfH6192noee5ahKWcH7evxXXk7n34GkcneQuBb1hg55Nuvk5LvZ4vdFypGmBX6x",
  "key24": "5SyMeGLdLXMNd7dMfBxc3fYDRB2M4A2b5akRPzeqnWA8FJ8ccJKGK5xJ4fZC6KRVV9YBezURXMFCzb1gxWdhU92c",
  "key25": "56382b22FABNFbhEAxM8zVF5vNSok7hUe351x9cWg11BXas9osBW5d4Nij5Lt3Zzifmdh73h4zvukm7pk69TkouT",
  "key26": "322J7jJe2Fa81LSCi16ypQk5mAK74P7BUwDTPhFDHSaWFsbUNKDqgonfn9SycPq5mSWrQryPVVr34LbFmYPmaMDW",
  "key27": "4GSqkJicFNHmPDDyPM2EFPJfrdTfWbTD7A4yNV1VVnCikY1xeTvEKsA5pkymphHUtMdkc2M1mFKGKT32kvrrftxo",
  "key28": "3SpPdbwZVC75wdedACbLyZmBWCUAzPAHf8VG5HYewt9Z8htXVHtcsHidcS2QMeAF2buiXpUB2k2YwZfiXUJ1nP5Z",
  "key29": "3WZh7W4AmJLVeW8ydR9DELSjFgF1f5j7wBZxDqWJvTSQETpkM9bagU1fjKzMvTJexBpfgxj6Duq9g6HPwTiKMfFQ",
  "key30": "4QenBhbGdEJ6vAr7Q9ZLWGJUAmT3iamx7gSdRhKQFWw9d9PSKM6eEd2LPWokqSKp8pDqhK8gCc2stSECU3h9QPwG",
  "key31": "5RskArgVL5sYMFMGBPj4uqtfnGfvAuG8AFXJtp4yaTjoDqPrL3db3iUYJoEnfw6C5nG37f3zZVKXwgFG4NXZGUZi",
  "key32": "4w4aieQY72MYp9YPs37K9pWe6uR2Lmua4LqYAsaoxnqsKJ7fvn2roAbDzcnJrCjYrNymxmiDPZRyRfvg9JxCLeVy",
  "key33": "3iLoigPuqS8Dt5SovtxjPger6V4pQ3aZawV7YkN9NVC3dtX93fNJrXk1JQx43oJHnCBct3WS2hkBZaV4rKBeK5mP",
  "key34": "RHV8QJtwgzrZk6xS4xCkmDCyEkCHJoHh8ciLE3p3oL24QqyyfoCh7hHL3KohNfgVkfSZVJZbHBQdKc3VMHQuiVr"
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
