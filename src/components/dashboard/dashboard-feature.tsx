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
    "28oPpcyxbADhD7KiDZk3gjZU1UE3PBLVPicqUaqinhnF6LFcmqx2mTW8mM9ND3KxLKxjSHRTJc4tZ4qrvNowRa7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LchAPFnqXq7Yz3h6d9h9TxxBqN6LAWtkeU9h84wxxdKXyWBNkDkYaKdMeHFKRMgAFYRrY1cJCe62EsqkdtvgkNU",
  "key1": "3Rq5KbLVvUg67gH6zDRjmnDQXGdAg7ANLwdpXRfeJo7VvLG6XJrHA6G1pFqipqGeE5WjyBCJPw5eLkRWtX1oAgZ9",
  "key2": "5bfxCBjE3bWbn4TrymTYgzpt3TKY5dy24PM35ts84wYa1YZBYiB5BTjFr79acmWiA5kKPLGnTkykoQB4rUqYq5Nc",
  "key3": "4s3uiQEe9Z9UYv1cU3mY9SXU16WmuweE5HMfvZKj3MQoq9xtXa2QNg8mVwut9YzyQTSiUXoWG4G5mfmpSfjzVunY",
  "key4": "5SCZq1UPMFGNKof6jDCzUvoqv3xBBVzow15J6zDUNURYecEdHwMVj2pcuc1NmVYJ7aykwSU76cL5cWtxPCpAvEuw",
  "key5": "3KcequJi8pLog7NAZRbQzSgjrEeBVZR38jjoLggRd5Uv5zWTV7t4C7EPc5tQjVwboqA4SKQSvWV1ViPfo3YrW9Si",
  "key6": "4BUSedQo99zNNT8NJYAMZTRemNHHb2yrEy5FFiFyDnTYPvxXvCCPZAThz19YQKAzoHieUqU33JqpTkdxwztGgMNx",
  "key7": "5VFanTBERKEEFMcU8yLUxcser2RPXq6x1wFdNj6gWn5nxL39WuesoZ2ZFEUbXrUAV5JjWya9eoQMFjvCJGQpFhvc",
  "key8": "4c4oT8rBavJ55zaoCLMSSt5erBAAEbdGX4adAwo91iCR2zyyXGNpoPkxWFyB9jG1VLD1SXuSGugpy5exfLbneaFk",
  "key9": "2L49XFZhH5pDgihq6out9qguoHuPgWUio6dwYYaxqEADmDoYMgxB5erZfrEkKTDiRBzLDT6PbjxdFZfnEjKRAh5",
  "key10": "2vF5ZeYTVuyL7o8UZCzBGNJuNi8uGP5EkMkbZSDHxYZCUKMGQ9b1ZGq6rZhQHxgZGEVNFiSckPh9JAA1jo2nWEgf",
  "key11": "4iwwpLNyD1sswaw6WSx1KugoPWNUQsVpYZd9iQiEXD2arax3poHX3syVfAG8CX7fFJD8hPY4M85PKg2iBTxRjZs5",
  "key12": "6T3ymrroPyPWfdN1nEeTbsVAWob55rdMDsTxBAjcqCqpTesBbiWBseDhrnRJdSkXcqxrUa8aRH569qicvEhgCfA",
  "key13": "2524kqeFkc2a5n56TUkfarT1bKbQsj5qFAnp7g4VPvqUkPNvgs55JaSsiVN5ceqURNzZbgA24YaQxfikJTAzGxKq",
  "key14": "48c1WLGCxCQP6BMQdWRwUwNpzAocC6bTmV4P6KjwbrW9ANYq2e4EeCmbZz6aTi6BvBbeoY7xbeyE5RLozddCkUKf",
  "key15": "23NC4xNpwngVXPpwt6miAF2eretYpeaHJfK5SSbLGsgWFiLRj2VuJFRtJMmVJ1mKNGVwVm1PbiHehYYR4n1nJEvF",
  "key16": "ceKUgco3QNJyUzdKQ8Xg9uPunbgmA3v7FZ85ne1ehU3EKjxRoicCnmnWMgpYMqo7apRkp9MNA1LBaP86TzpskR1",
  "key17": "BKWkZ667unJi8SpiZfCn7c66q3DJm1Z6A4toBu4Yah23RYY6VRHR4URkXJHxduDniRturZkDpCWSQJsY4sNMPZK",
  "key18": "2sdpebsaxCRnQEwqgcRJg9tNeeS93nCw4LremGuM5VA4cka2ppHeYeHETuFqcFYgL9PyoW6ruHpmiYWJ5mTVu2Hh",
  "key19": "4UuEYMPDa1H4wWmwGPxp1AcnzgDJDc2ovT4ifh4LWmL2FAo6JM72GGkDpH257f9d7PLtXhc26VfBbre8b7sVjpqE",
  "key20": "5A2qPi2SwUVDPMcYYssHMxu9LSDB9wiexF9pk39XmHB2qp1TAx9h4aSPNx5anqU7f9M8S1yXm3RQNWLGfZhcAgTL",
  "key21": "5HLPR9BCXFWFHLsZwzkem8qf7AiGNe4pEQBzoc65aMX8Ma6KTUWNw2eprAuaMU1Umv5QiNDqQJaNJuLZtNs9pa7Q",
  "key22": "3NzzXwaBoX6BZyT1XL3DWmgXzohdHz93pJBq4mUnAZSV6zvC4YBcvru4Sj492SJUWqfPwykFkejYYPED5JrV3cTh",
  "key23": "2X3FXRf27vhbUaK6fsFBgHbHMcWBXUs6yeP1ULsH3Nfa2XhumV5bBHPiThzvyMEPLA2GkCgniR7A1yhyJHbyhAsf",
  "key24": "4Ef8SVSPUnuF9UjBLNmgXCPU2KgCWLdskPP96bRUeKpoqq8GydLsvSxYEoPndxLa9ecSHmDHwKZxi1huWgbA4upd",
  "key25": "2AyZPoTDp2v4rwuvKo9xJdkG3spn1qKWyphgiBg4H5DY2V8yj9HKdCQEfS7a2arCmp5DJpZMLCvR7tozo3w6kCMw",
  "key26": "5BfFu6BRQjHoQJzFAukDstAvEtW2oc6epCDZEPAa3YWqpPHdEqMn7VDPJyG3XhreSdu195pZppBxj87EfudHAsA4",
  "key27": "2snxF7PABKPLjCHQhTCrGfSgM6tFK992M4Heoa9ckvzBZU8ZkMETTaza7Rg6VrqN3fEreKzUfY2mfBTKXadzHXur",
  "key28": "2vrHQV4FKAPV2enkmdumHxMSTswfoP61KcfYehyMQhHMv4VuTiWLRnFiRJSYaoQ7yive1BaYvW4SkVXwu4WFcX19",
  "key29": "63zZVypemxfBMyp1c4W5rEyxWQm4KWzew2HUHCXTcNB2zdFxnRJ57T5fZH496ZTkqZSd7u3kkGr1JF4pmk7rKgZR",
  "key30": "2um7od77nvkpTvSPoM1meXdoTrvaBgEuWdtE6xK5mhTp1BioAMZTXtyQWeDEVvvnaVhKk793f9GarHT3d7q8ogHp"
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
