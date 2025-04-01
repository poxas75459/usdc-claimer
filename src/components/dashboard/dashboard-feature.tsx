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
    "47BLq2BLj8HZyyAn5FQ3PPXmqpFDvmKHm8YfjPFJGMPhPwjfRtQjien5AkfXiChi1YM45kp2i5VtX2V8yDSw6vs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jHgao7zs9wFvRj2Mx5tmYt8ym9inLq6W2KpwgbjTwUKjVjGjEKBxvduW7fqg6uq8JdWatmDdCnvbjT15QXaDQWB",
  "key1": "3arjqbU8ycpd7g64tPrWuivzwEbXTvpgSwdCVDUcTFt6boC5TNyE2NkcnHWKKNTTTAKA5k4J1etTj46UDv4fQubg",
  "key2": "2QDBXCqMwD2tcU5sKgHVfmUWTEpEyyCgYWWuYpcVbBJ7P5cMcBftKpgx9t4Re3ePHHjSYpKqjnjSefKZp7fFcyM4",
  "key3": "4dSZd62n1hoNyd9hPixJFX2E6GsF9i9vPCPtNqmMG24ppfRS7P3wwumBUTgW3cqLr3wkFBPzXnZbPZ48iWxVBNU7",
  "key4": "4q3y5J9ngS9jRvtFXDPMR8pkrYkXJC1wu4v2Uzya5QU44JUJwt7bTHiH4JYhpHugp3syYA2Z4vcXBjonT4eD38xH",
  "key5": "2fs7wyHZSpujJ76UyspXuXFShAs1s6aATvUSyUtZgNofwk692CN32kgLrGzUHWaaoZGD7Qq12NUiw1ZRdPAUYRwW",
  "key6": "3DjUZHdkM1Qo4DczKN219XT7e4xbiW7Katmh7uSgJgukwDaXnqhrTpNyCaHrE4soYLhksjDso615wibh7kjXZ5wR",
  "key7": "5qm1CraSWdRFQjL3fyYVyRyqZV2uWYSdJWzws2pudjJKN8ex1vxoG4MBQw4nEB4uUkfe9Y47p4JjJHT2Ne8m7ZgM",
  "key8": "5sxnbpzT8sDorpc65yrUs9P4egsUaEhe8NDNLjjXaPDF8NC3vCpDLDLUDH7HYHMnq3E4Ey6VMwT9bbrnAffG8HWP",
  "key9": "28nSZ33exKtxu5Wbut3Q7QbZvxxw58am5Xfkx9vvQ2jatUJeXHDz8akGXNxVbuSssCpabKs8SfF1KrTnP4xoDVov",
  "key10": "5mJR538awM1DaVK4HPipe35RN4ZJHpKP6VDU1mvsQuiJHWKxXyveYqneUDpU2neKnZS7RrkFCtUu8njKNWdi6zvP",
  "key11": "zbeZ6R7F5wQiAktu4neP9KGn5kdpd9nFV4MDJwkdEtBzkT2QbNijiEMgRQPA7U51NdbsBUeDDghNuByXKFbGmq5",
  "key12": "5JG5NkF4TM5ByzqAGBCGGQXC5qZbvSNA5XcEaX44HV1gysjjHR3gcjg28XpxxMrFjRY3XMvd1uy6sb7WxCmXN4J7",
  "key13": "24rV8oaKc1T9kYW4ZCfPjTj2ot41znNebMgVEkGUJdiV8YDvXcVKs8gMR16a7G9cbRkPF8XP97qenQEwKfJWPVsa",
  "key14": "4MDf4TfPydgCtsiZ6QhoEzoQtSEuErywcaVQsGLWk84VFqKNH3AtfD4EHxzTQPe5rauW8f8bwHNoD1mKR2H5YgTj",
  "key15": "5Rxj56LEx2wz2N4jq392FSJrFCWZKTtQvToMy5jPxAAbXrrH1pYhyqNepQPPHdVijdtmEeJCf1fhnHro14woRTrT",
  "key16": "4DYDnHFrav19KkgaFmToKDwjNBtB7Q2w8sKxyqJ9tTDQ5Bg4MsBMXUn2z6sP8jBrcCFTAeXvnZ2XifcFX8qhkW2P",
  "key17": "5DvahnA9pBGBkQYWpxFqW7p4ufPEpQM6cUfnHUPTnewEPny3xzPuVPYn9nn1QDY7tarim1tdESbsmEhirbxGMwZp",
  "key18": "3WoGfUW99nfw11AWX9vbuT4hgbLJJJ1wjK5z3H1PEFAYnM35i7Svy9z8CamNJx3vUvNa5i9hXhQFD1MLhpAMgUmN",
  "key19": "4FUh1Bqdkvtaj5b2BwvgqP5CNG4dNugfhJb2Ek7LFuzZoeWvXmUhzrGVA2BY5f2ZhBFoas2ZpFcXrkd4HmjQC1Kg",
  "key20": "2worvgjhRhuLtxqJdugw4UpvDCA6BdjYKRvxhaZ2iG93KwRQ938kZuaEurSYKFmast7Pn62DYycgyi4D44AVkbBz",
  "key21": "4YPWzwf42N1NfsNWusqUAQZnwyJ6vfH4fCurhgGcnDkhkaRWET7rUMJHi7qBJHGqmiKq85eijP3QCx4GdMKdtajK",
  "key22": "4QJKxer1Fza9UmNAxd9yzhK3sHEBzFsELwSSmzwctcVPY7mhx3gqn8oUu73Yssd5wBnGnxnZ5MSTyZaVJqjYytEa",
  "key23": "5JfCy2a1zBNQfhNcy19K7oynvVqPSKT3M5QvJmntSoJzxaZZyj3W9tsgi16D39XEDn9W54ptvJfxb3JpCo32F8dd",
  "key24": "61oM52iBjXascBontyXg3hA4JZpjmcmqphxZzgDe2Ec8bpmNTcfHMRH74XC6PHHiZgKWRtJTMtpwJkTnxew6VFt",
  "key25": "y3m6oaPqWxpraXgyiViwg3DyKRXgZreaY6fqmJCrBNasN8gwcrRjFX3iAYSFKND7sMJE4pCJufAFWJ1AJxH1a6Q",
  "key26": "3hVx5ExwAF2FQCNzL8ayzwaSa93ffgry75cfL65UrPizFjWSv9vW7d8LnE1geC7SXz5LWqe1qCT8km7vS75DpZxL",
  "key27": "39tEZoHtgc3DeDyH1GLsdJ9dDjmipYzPc3pk69vKMoVuSvM2fttWw9SHa8MPLrJgicZXRxyh75a4CDT1rFG7Wwfj",
  "key28": "3cZNnAQe65NUKdRYiqEzapTQnqLRqPf7aWEDahXyLpp3q6M6rqt2XaeRtZpcQn65t5zYmKukRUCcrKGNEmuvc6RJ",
  "key29": "4Difaf1AcxwsTfzVGUkSC4hAVDMPKN4W7jHbq3XRoAYFmWGsMAK31NBAAKjJoAkzQoZ6ETnvPuT9GwhRQZG6sWeG"
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
