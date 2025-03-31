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
    "2wgG5LVLU8pqwkzoBVxxZsTmsL7mPRq4eggsTCngH34mYhNrfp8sh1AVfBRCZ2gTMU3HTxei2SrDaRmiJrwUvn2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ad2avmZrNrH9QW6oVkChcEzdY3ZmQXPwzfNo4adiNU7XB8qyuo47FX8Wh3u3ZDForFuFFsyHmFmZFUE6TH2vBkg",
  "key1": "xTYVgJpx2zHkSLNfQDVVFbUXVtLz2JiWTFq8MDJhG8bhWXir1tqSgWw4ohyDSN3Z9kgehdT28DpNPWCaXCdX47B",
  "key2": "ywzHuhVyBeHPQK7X4uL9FLq8vFc94oqAfxKsBt4SL1Dm25w7MDTNom6RfosPBzag2PMm8SJgHrZHbT9k3sWTmey",
  "key3": "4EvjuKbNmFqbTK3dQH5Q6U2w4iYn3SnNVKJMDiohb5jEucYPYjKEYu9suaSgkEFPSKs9hxvJ2iyGjN1RWnDjmvse",
  "key4": "5997AMXKJdbkEbS9z7y1nZzPJ6AyyW4HX9qX64S9ZGT5LErHdAcyv85vvNewc13bSLEK78TDBkj9sLbH9uakdQzz",
  "key5": "3UC2YJ86LhdpzSXuLjzn1eZMrrvK34P8ShnURZ4FsmkYn2NrTv9TJkkYpGTXGMJNnkiR7jcyeYkQkenDg9JQkioW",
  "key6": "4JKprafQM6wAqNBwDQGzLCjwEYcNNcD8L7k9DyXgbCpmP6rpMthXJtTh1AXnHKDkK2u21U5q95mp69oR6dmz7yQ",
  "key7": "53T5Z2w81HkdSx3vE5pS7sJmMqUwatjxUcRkuyPf7jC7tJHJiMk7voo2KdSh6zTKMKYAnUkSXtp1ZUDCRek8kecN",
  "key8": "xsDoX84uexwHxfBkUQUxTipBeAAEzTrJjvMG8QqnkyNK8RVMo4ihPw1djaPLLvG72hY4pj7bdwugDckqXwJf3NG",
  "key9": "iRa6X4itSXHiScffzvzufTJztTuoY4Le9kPMQbJ83x3wR9kaRTT5CQBHNWVnHN3uZWCrUsgz85ePT3SMKWjTnVB",
  "key10": "22QhZEmA9AsJZdasauwP9wjwY7ibA1i6jHwCp3KjJdrMK9zXaUQJpTLKf9DLj4FVbkqsU25MHqxoVxyFsNdtf7zd",
  "key11": "3ScMcgLAJpkcBLYBwpWiUPZqXhC37UdiuYVtaQnda3YFsEFdPkKCRHu9uAbTJftLaphjaguU3raHvcxD4y9q1h9H",
  "key12": "oZ9W6C3pucvkhsmZcVgxFMqabTzVtdbT8WvqRjC4am15a6ngpNiqz2PTEho43UmYD7J2w7ip6EsU1FxMFtU825S",
  "key13": "5aVbj29qE1nJVZsCMK6hLHtAfGL22psLZCPv6PR6QH3AAmGBnhZV6cTaVXk3gRfA9RuPHnwAGMDhLe4CnFUyJh3g",
  "key14": "5tRirrcXF2iAJsFXc9DJoECHo5EB2LHxt357LJUBRTtAwYQ8cJqjYGyzsmRyEhqyCUpzi3iTrPEkLNiHHxdpueqH",
  "key15": "MakBJ2Z8yCkiVT45eYne5gigfu8DaVSxCCKAgGEGKPPAu4nax9sigwZj9XGyePPGMXyjghrbfY3eymbQUENCiEN",
  "key16": "Gq583GDFrUhBa2iqxFV9ryCTXAYqmsazZascZLEywCUqCM9p7X3r95mfQVQcsvK4Lu15qFuTNm5Tv3AGGUY6dr8",
  "key17": "4Zhwk74UHN4DxfN881stFJEGQwMCaBgWRJWGi9DDBZrxpV8oxsPRLpKkX7i6Wru8RYvBDS1fHjA26hV2qmqBaX7G",
  "key18": "5Y639C7aRu31dQoTFtddeE83UWvzHbSM6Aiq1RMKm8zDPqRRowJu6o3ZjzwrDoB2ESuwunhEAWGgXh5GVZyrg7VK",
  "key19": "4SHUcXc9shpLRoFPEaSyLx8ZK36T7PV1gJCLoHqHkPKy4d99vD5sWgiayHFu3h23p1nsYPXmRiFewWujLkks4a5z",
  "key20": "3hsfhZuiUWYs9eKQGh55syEYBfRr2UK5vXJWgUFmHuLLUVqPyjtQcSGVnEJAcZPrUpLBAL3HcktqR2XiFE2PgFve",
  "key21": "2JCvxU9jZRqkWztecbtTwvnQWUyZAmXPxn8kTdjzVXwzPcfWJicZTqTWj6pQEHNAMHwcGYZ5mPbDyxTUUQksNZS2",
  "key22": "4dTAF3dxMvugF4Y8bFuX5bZYaASfQidwMpECnjapAhThoDNmHGGjLFJsaTYocEzBcJwepwpFgTPoBAZWYmZSkaCo",
  "key23": "5SqDAy3gHkQJKe89dJXT9oxVztCqi2CAPQW1DirMzP4gor3UgpYrugn13ccA57DkJ7SGkQRJof3xiMzSrPkpACxc",
  "key24": "59mzAiVSdXx622DkhoNsHEFSD1cq9AbJP485L3K2TgDtXbkMNRuZfqRfa5wDux4jvmgR5WJA7DeLg4kAo6uSvyyY",
  "key25": "5UYsQxHDkLfJ8GgwQqpyFujAzYqPXw2UdzYstaxtQmKadQbD22xhhF6jCoCh2Z6AJVPzk94rRNvjNFAMaT6dhT76"
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
