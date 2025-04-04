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
    "2zjXPbW9QECHLkoY5CE1jAjPCkqvTeqHhbgvZc9qhbmaVYvThdt6knDo7F5GmctgHXcmDWqmL5DUntK9BAMm8HFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VypP1FNKd2aVbyXFeoXhp1yZPHVgFb6Yxgy95vFWFZmbjd14Bwhaigd7zVn1BaM5rD13UeLVrJgnLEyVb94tmd5",
  "key1": "4GwroBec5LVuan43EcrrfqqwErjYmYMDd35fTC2oXdk3oLoCbWEJfrTnaMmZFMYbUWwbhE4wHGKyCqwDukN4PZu3",
  "key2": "2Kpou1ScmQNM4U9fCDC2ss38Rdogb3MyS4sNrCKXVqYfHJTfbTfUMTEtX4ZooV34je1XHvKAcbMrGWaUyno4rpsk",
  "key3": "3pCeiGpJXrPe56mdvvDi9VkwsTGCwse7zxXX2YwsyanHyBrPbQMYZ9AhNgT1EiXu3yhqnw2boZ2SYPcXZ1Bcp7G8",
  "key4": "3wAJmGuh1XL9BJ9VmySQNMixm4oUs4uEVozMi5mugS5YFAwBjb29cVxpyyJE1LEzJWQPHcgMj49b4ibQ9bgTbFdE",
  "key5": "4mdNTtpMKofPWANXACPfWKe72pDrkEHrpYaGdmudHni6rRVdkYrQcNptYhQkeDodiRD98nM7ofK7YaUyKN3nJkaN",
  "key6": "5uco2GETfNe1UX9qzxDHLzepra5LUDkCK7tZY65vaMahk1sd31g8EdNN56wt8cG3LKADWryKGALBha9zf9Kobc4v",
  "key7": "35vpxs2oc37sPoscz3yPtkvAhsNAG5abMDJoZDjegY8SeY8JT1tg3AdjCNsbVgCwgUuNqHFk5keQGFnNFctuhaKb",
  "key8": "67WEpSbNp2A2YGrzayMoHJJtFTyApN7oprcFgCTSkum6RCeHyafhdzsdvHBNgbnFjvNPBf94CZyGznyNhrR8zUMi",
  "key9": "3k1xLnQUAtGvX6fbSEZZVPhMXsggVzLTzYoRcyZhXkGtWx7iwARzWsrwxmeubsS5kUnwgTMPsMJgyijMXRoxZpEW",
  "key10": "2DodXDuqfbAAKM9aB39auJ2EkD4BoqwDR4aDVitb6qZJMLkmgduq1ipxwxJHL4Fn8e3i2robQSAFsQHRXRsP5oHa",
  "key11": "3tFVLJctF8bE9Kt7x8c72dD9kSBFuMNf9NMbKiBJr5tNn5ikouJWkRhPhnbVh3c13GHPvVTby1vwp3eBqkeatbsk",
  "key12": "2NcEw7vEHXPKqPNYQMcx6qt7PvVdwzxT4vWhVdTD8sidgKkei8KEUbW6JYGJMhSc5LAaha8uaoNFNX42CgWyydXP",
  "key13": "3H7xtT7HFYawRfHcgZLw2PTQBUffo2DkCKetA8Hdkdz1Erqijz4KJmb3WKdhY1YvPX4X6exTb3JPkxdAQtjS5qJj",
  "key14": "3GbLdPEiZqCdkCdynubxByJxaZL9aeKLRvsiamQ53hsnzbXQsQ2qfCgEisrjgFBg6ucob6DQFDUHZZAQvfivRh9y",
  "key15": "2QdosYPY4SzuH42QYvipjgyhRZjbPJNz4vxpyJWs5UtNMv4RkgwaYMbNNGXwxj3LUA5UifzGWAtjS3PFcDNaPwcH",
  "key16": "3EzdjJy5mEhou7LT8R5B4KythY77Vuy66iR9NQdMw6KoGgoJapACRwcWAB7J8k9hJ6nSeDj7wUHCjodHbAn3QWZB",
  "key17": "4vnazzr62Qr83AnRVco2PitbKEfd4TFHL9bxMSL9Zu6uxpAGd9veDFNZkTYadjJDiMx5naoiFWTzgiaoCqSnTarv",
  "key18": "3n3Y3NDSAS1bKk63XFgxRsyCs6bNjjmcxjo37p8NrBjU2fqRAgdJkRqKPSim2scHm51nEWAafx8NL5rtMmjG3heV",
  "key19": "4t6NCG8874PGEFkyFQYEAWiy93TBUan1BwL6TYdczkajUGJTTZEXwcq4uTCHsjU9SpdmweaQKyZqz6CWi1KXCndn",
  "key20": "49fBoHwnHZQxZqpqi3hw8ZS9YAGSBHnTVvwRVV7vdffmsosZnQ79YDQjwXj88aUHZE7tcfC2s31vojoG8oB1YtJG",
  "key21": "597L6gUWJN5aktzYnGeEdGTdUAfZuheowQJFxZcVfEchMyDu2JuqSBdTHCEWmPPN64WnNAAzcznxECkbJrK7wTv8",
  "key22": "3TAw7eH5WbdXxEzQV1KcaK52hzvqyrvpM7qErwe6LqVkUGxB2K6nWrd7yCknModqhMDp91WF2NPeU4SPkeZuQLQ1",
  "key23": "3sZMeXy1qM1b8sc3M56fHzZjgPGMsmrHbffo5LeJuygCpnJUXkVLDZuXmoccTnJcEeNowKDCsAxS4eGjL8CjC3tR",
  "key24": "5DAKFv3Aa9Ed2j6kmMbvu7ztEntw1x6vhRaaXM6LKvbnRgyzLmHWR2Rt27TQBteoASSYVxtxiGuR4bTCNobAMJGs",
  "key25": "4iK9Gn76LJphpnCBePRiEp8PHzVZvRWntENwrPBnGAGq6Ghefdc1X19YDLFSZhguAmevkJTZVjzDLL1YFRo34FQY",
  "key26": "3hX49UWreCWod58v6qeZ7C3ZLnHUWrNthYsKPfN1kirt7GQ2h6oQ9N6K66aWM6cCwrctTuFX1vuzPmMi2dG2Zrvj",
  "key27": "28uoqfjAxKUFpj8M57Fveb66EyNeAVF7SdwprkgTMgugTeYFFf5UC8vTp6r1TaKehYoXTCJ5n9QyN6WTShYkdFRj",
  "key28": "3cRNfk3xmgsJoYdKduAeApYQtyHKsThK3czyuJsxej5ucyiHAK1rR1BDenftKeFmFYfenC4J7Wr4sD3L3RjN8mFH"
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
