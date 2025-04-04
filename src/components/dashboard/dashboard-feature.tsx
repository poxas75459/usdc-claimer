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
    "nbmDieYYT5UCgDJyNDGG5oRAS97j1852fSptHJCCyHJkfXnELq25biHWFEX83BuvTkSPfL3284yo6VZkWvJT7Py"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AajZwKDhQPStWQkMmGQMY73m3XbygXBWJTV6ZmK52cmi1TAVED1TVbKtrWgPfHDqoB77mVmUYQMqjvGR8jnYgot",
  "key1": "521r3bHR3VC2RrucDErmdv2uhsvs6KRa9wTsiiJM4p3bVnFY928Z59H9bc7wsBz2JvQ2YqKfc1QyLz6icF9rMFVt",
  "key2": "2QEgjiNu1aK5jMir1AoJ8RydSHoaHcM1cWpr4CdJ9Va5j1cKuBMZ7zVd3L3YAzEiT67we3hYXuScdCyJ2VXJMjHL",
  "key3": "4kdju2HVswL8etqY4CoB7Ce3xt7D5XFGVqNegW9kRned4hpnSuVeKU9RZdPEEBFWD3nYsn59UPkjQPYbWhakssD",
  "key4": "3rbAuRB6skEqTY7k1HtXpCxtRuhFTVyKgqyb82p8RLF1jJp1iEP8dwmsg15djjgh5Sbrv3ZfaPdiFBBxPDBnRkFu",
  "key5": "2ZYJzciDfjHEEKb9vmzqNKx8eJBsYuJGmXZpUNmqFsXBRtjbLBvnucfk3AbtopKz4ddpGCNnHfUMDeCr6Jyar5BA",
  "key6": "3HNRp5r6f7zNKNyVG2VpdjBVp2QXS32uxQ6VqdrtTSjLr4LdYd2dKTXGXKDCbjYfh4MGe4Uf3ZyuvfkK75ZZBH9Z",
  "key7": "3uqyTmCT25unKojSb4pNdvc6nDB7R4npw26cAzfge9wNacWdMjS4xKnCArh5hif4o3LhMmqTqwsz8dHzk1LSv3ny",
  "key8": "56CJY1pKNtTkFXo4aq6VymuVFbffynrdbqeAd1RrPjowK13wBQALrszcmowBYm2tadS5ppqNfzhhcfNg5Nv7tzHX",
  "key9": "4wPBdPCCf5A3DtVRb4iVruvCMpAX1J53ZNr6EtE5Fxxb6ZBXTWd2tSJTeYfYXnKfk7nzMGDaiUVBaZ24fA9gcnys",
  "key10": "4yaM2guVXKe3jfUE914UK9hqBUkqakJb6x2psCv1ikm5jsSAYeb5nMGZfTgFqGGoc4YcMQozFXX4uJGzfTbPioGy",
  "key11": "5Kwf8pcXmukcUZwqEUkoYjN759Vk2c2qKvrAY7dyJ4cjRmB6JEhMXcrHZV3V5F2J2UASUvGVGchUZBUnawATsP9Y",
  "key12": "MRaGekaYhKkZNHtjNkJ1yFcybLPuK872cv9hVRNnKKvvRaEiMTWpsdoF7xi2L4Hr1vjTKrPgWbp2FKXfUWMcwVb",
  "key13": "2XPJBaMBrqLzzhhrpHYtn8wAPaBauThSGPNwLSsEjYezJnUHoM61mPLxFSMZifZrc996CSzxxNtwHSay8UBJfL2L",
  "key14": "nkGMjBaYTQaUaQzu1XQCDz9h81r5Cd2AeMRmhso9pCrLH6vwZhh7RPaNFbMqtA43K6iN4Y6Cc1bjnP3H57aHWuB",
  "key15": "4WeTh95R9iZWe2bwwoZGHGw3v8mDXKL9wZoYcWwywQC6XrYgd5Qa6yk2vsUkvWXZGxGb8vtxtXiYNdcdzEw5LC6s",
  "key16": "49YufqmWtVQ7dEzgDGEbDURXWeRBVWbuRC43RQiaNDJ9XzcjXxcBex3dWd3PRet5ra1smkxFUxH5QBqWnMECqjvV",
  "key17": "5DyKYUivZArstjrrwqBCdDZ6RAWUtkjVr81J8Z2z5mbWMiSeZhF95jq6dzNEgtrAna4gdcaDKu5vZxiwqAkQDhR",
  "key18": "2erQFTgod5oPNqCd2M8y3JouVzrJo8pLLkcVs4ctu1EBQcr5oBRu32qnzBksXFEBH9PHbm2E2oet9iziotshW2Z6",
  "key19": "14X6aPs31Kp3UgXAScuvDtrkfUQqqXVDffKaJkcJhWQor9ZCES3yVQBwGmFzEstsqSbEMRLMjjX5BCdie962DhY",
  "key20": "43j7zdCdpqSbg7HYRxD5kRHLMJXXvRDNPMAZVCrKiCSsruDZd9nyQL4HkD5mH2KMfEe3FWHXVi18t4MX7hNHw7rU",
  "key21": "5Sx2gdqB4vxtZg9fahKqq7qKohLj2N338BBW9WJJiy2g9eviahurQwMvyjMBUXgkXgHiMpxUJQjedeb9bKmKiMoR",
  "key22": "3gGQd695P3UtUxWgQUnKNyhfh3azYzG4nMNYJUTbx7w8yjrDHFUzQhyh9HzzDpBkmPzuztHRimxSTubbMWM88UzW",
  "key23": "2wZW9hFdCSDeP11Lae9XEYgHXZ61eMqCgSokKcpEDkib2Te5wNK5X7rBxvBFg9sc6zUxbHQ2ye9Wn4ykvQa9m4qM",
  "key24": "4hTDgQyYFZ1Uojr8nUaje3gDNAa6jmdEXNgyGgCV6cAC4F5e11WmBgbY1bdY4Acduyn9qpGSTefX7S7cyp1BzPxM",
  "key25": "48ZkaS7etV3WJfRSWYywUDLHq5b1v7xyadSye73mXEwRVWF49QY4hh5xyVsA9qk2Y1iZsxk8Bj3gZtNE1WvPzebz",
  "key26": "c9mKqniTrCSvaAoxDF95VzsXoAhP2GMjVbyUJhPWPmCnxRFn3sh6ijhF9cRRgEyYC9rBNE18RyKonS92KCiux4c",
  "key27": "2fvv6SyqagqZuwJk7VScb41dEJnwysQTiiMZa2yCzZWYDVg7mVq4pYFfDwJtXFBigwXHAaR4bsQHzVGYjpYV18zf"
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
