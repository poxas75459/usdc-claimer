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
    "5fgcpf19tLu8MJoKmi6A78HtytoBCUqk58eX91tKfDuLdGzEmgkbMiHoa1ADEdi4dpmpbWwf4kzQ6wzAAxU9qkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YgenKUexFH9LSBcxnp4XMMWasWG9GnsnZciGpttKrB9xmPfqP2PBhwEofyNWc1Aar6MuVR2ByCHh5RDiCT8rrjy",
  "key1": "27XzhBqy5W7QQXmHW8pXmnWkzmiiKmJVXv6x6SxUie638V11GVBx8yKpYmfy8KmbpDdrmBJUUU2LZdfuR6a3SxFT",
  "key2": "5LKzTrSFNapC27wsdiUYAsCNr4pc3qfvh87NPYrptPwUrRhJXARU6hUsVL1U8QPRGNzaczYzwBWPgPmAPMkfQaLG",
  "key3": "vp3i73DFWxZshXK5E7WWCNZYTjZjwcHRqdouFX9Hny3xLzw4H6Qv8qW9cXievDXeq3bqbdQHF5wks5Gq4oz5sMk",
  "key4": "3ad25NMk4NpbMWYoApcaeumCxLJ6TRvjUhKLFWKrtC7Kj9ChoMNqnxGEaJNevWBhD1YUfdgpUhtWDsbnwFJ9fSsr",
  "key5": "4DQ7tpDCArZxs8mk3uZbhin7uGCta6WXuLtX9DqnziheHTk1J6Qwsc35oZxLuSUwJsnfZXanvRmwY5JsCQ4JATRB",
  "key6": "Qs3ivAf2X4uGuNqd2NBMYUxWDEiTokK8GGigPzN5mLWczHEzcWyxW6hcm7TvU4QKnhrpTDtmuQhSdcuqPXHwu7a",
  "key7": "5Qcw7UfSYqVLBB4c2HvSHcDZd1LuYm7LaQjaSRAsxqVTc7bptMpMv7fvZoPCdzsjGnW6WJCAFmWXSuuXkXLgLQpN",
  "key8": "4eSLoiE5yankJZJGcdDAujNMxvUMG5oG1sJK9xVGXNHRXuwtEqFDuoGwuVReZtxCGvDdkcRtkBYvNzYuwqoALKp5",
  "key9": "34Gb9iD4zN95dTtXhkb55omBZobHfrwKfomoKKrwEJP7W1i4yf95FfvadzrmXYeoCevccWq5jUnTu5iBh1BJFSa9",
  "key10": "4mmb6sRVcXJY2nVJnwCuYwwEEDZ895FXBRtQopwWQFkAXujWg5HMWeYrLUksPnnFPMDyhmae6Pm1V58sfrqeFrpr",
  "key11": "4mkUvybuQZwfVX9xs5uZFtKdy6EMKFmMdu2htQYT2HR1YHMEk3EVFQugQM6V6PWnTsqEKf7ui3qhPMfHzYC5rDsh",
  "key12": "3m9Fxcmqc69BdZVPePEsENrLVbL88mdWF5Ah3knbBfDKBF8Pt3H47CDoGSXzqC7JKsQ2E8nNqvS3Eicr6gCy3bm8",
  "key13": "5dF6MkswtM6ZaVvgbZvG9Zkcfv4cNxeH1kzupGqXBaQGsfQYtcL9K64NasMdRhHSyP3SD1kApxDCtT8BuQ6AZzA6",
  "key14": "dfTr7vJYhJjvYX9W12atJJbkJ5RcDpRQviWkqLA7dXsuZUsFpgS4U2dWDCmLkcDd2roj9ZMgYg8BtwGEFCr2q9u",
  "key15": "3VQsRwErdi8RpF1t5pQ4yKwGJWA4dzRfK91r23SxdVR1i8vbKbCDWc2gKqNGwsnLjwKzMicDGTEuAL7e7YYp3f7",
  "key16": "3jr6mbMYR8EnGo9aXnrzGQRtnq8xE1yYY9HnudWMMpgybyGF5RoCNQJVUzgA1Ab8cUxih6kNvSr9C7s7aHLmCWAn",
  "key17": "2j8FLKJmJKMUFurpXsV16wcJM29DT8mnCyAMh1jTeMhx6emnQYiqC8qvnP47pdsBLKxQG2fzcwPoXM2gLmjgHA4w",
  "key18": "3RR35wKbw9b4wj7rEyQATNCi5gjA413qogXMpYPf1mvX4fUFec1X22uKR2eJcdueZHnn8ECqsJHaB7LZQYJrHCqp",
  "key19": "3YgZGKbU1pYcmadkQsSgNhDBkAo2Zp7tfBXkoEGVGNdefZSEZw78fRWZQa6MeoJ2mNZmmUneT5SFSjToLDXi731p",
  "key20": "4zg7sHWk71zRgiMNxC7m9WQXtG97gC3fF5U7aTxHMiVnRd61pbZgVBR9cxfRwSwt9ddwi6ZHtGbecYLb4bRyQgJj",
  "key21": "2tqNmb8UmHWMBqzMbWJcV6qhvUzuaw26xVqiTz2gUfhyQutvjRZJpA8TBycadK5JFq3EhqAQJ9cBnLqUKpFhJsh2",
  "key22": "4rz8zNjU3r2Ni8T89Nd2ahZLsaUwAwiwde8pvvmzvvEjrEYPhmGBTtYsvcctsM6JMWHWuAFzFKS7jfWLWCyVaYMB",
  "key23": "48jdR25T2s1pdEjGqmeDk7A2uhLQ8HKE5BSNEfYHFQRqVYwULKjcTnM9C8q7gjM1ucEoQRXARRxpHcvYcgP3kAxQ",
  "key24": "5z2x2keJJ71vP59NMBwY7F4K4TTVDpuD6CsVaYGG1h1BzTTpHZWb84eaWbxgLg4QHFA6sYnWtV2Hgh5f1zBk2UAm",
  "key25": "3ZyySTyA8dsCcesWeJT1JL9TXczxJMU6Y9bkpp3KwPAh9hmMhMgsoRZ2rRQHorjKbGJXW49uDWDWCmvgct8SRjNz",
  "key26": "45ox2CdsaWDpcmgvc5qJGPTtFabix3cH1ga89w5bAnfnrAnz5HFAQDATT3N76LQMZPxQsvweFjjNXbzqDFh1JMVS",
  "key27": "vHCp4bRsvPbXrEXz25yHVeSSq6jgQsUGDU6rJv8nncYsU2szJV3iDWytXQM7RAoiFnfP74ubc1HNdoR18D8EHJY",
  "key28": "3iCe9YJj8CghxgLivSTcea1NipKRAzEM3DicKU857DTu9y72dzvh22Vzg2TB1NvAGuMe3Spy19tbDHKNPeknUfBe",
  "key29": "ZARUVgwQwAYSJXqu1mZVGzfe1ioGo9c5vM1xP6ToSrcLjzh2cXj3inCjGFUjMxqW8GnHv4K8rxVPLBmjeAHFzaj",
  "key30": "61SrutBSkqVLoDryYkY4nQXv31ewpArARFEpREkXALJqMuD8ZyQAwg7tpnxnw3w6M5x1kva5PDyguPg2cdce29KA",
  "key31": "9i7nbV7pZdjZA8kn5T4oET4zc5b93Qg9cgJzj2mi2duW6n45V5MYv43E88p3wsNXmxsphVDNVr9YQRFBFsGCrX2",
  "key32": "46S8YQEdAVEh1q8CpS9xrJaXCKsUhwbP8mDqQfSamqeRKdyM3rQ9rN5p863WrwrmwhY5cQccoQQbU4Ug9BYacH7x",
  "key33": "35DcNGhDwrUyGmgfoWFEdJSCEyr51XmF3xyNLso1qF3nJ3nXttfeWmThyWjsgicu1N7pJ8dEfgyRbCTAFkU1GXHD",
  "key34": "45snWxTXyS3m35xXJxPGmqSxATYhC8YJSsdR37hvSYgZdgaMiVaKHzSYEk558PpJMjhxbQZHrRHmsB3tRKbDuuqk",
  "key35": "4pT7RhZ6ap7jJ9R43o4QMC31ei35epcSSzLGvnPfhwFakgRcJUncbFqotGW7cNvH6cQdJcovgcHvnECZ2aTDyJcW",
  "key36": "4ME5rwUWzHjhH5sbrmq1iamXCHcUGYKUuCrvE8QUxXyjXNHm8kLfMFom2d3oxQBD8DWwrn7YDH1QQACqK9eDSt1W",
  "key37": "492EK4DB3yzLqHiMxjG1UK7r4fqbJLXmWdmqGg8sK3jbooYgV6WrpVCgwn1MT3vBoQmHjpbW4Q7vUVbQifWCkj3W",
  "key38": "xChryvA7uYrErPN5XPCCMiQQYfAoGbjGPwAF6d89TvFLac279bqAmCp6fdY7EHqbCTKrhGW9qDvuNnmUKRozeQx",
  "key39": "4FZ9TxGMv3Pt2NMKKcbTHekuCWMv4FzVYkfhBHjXKHidTbVXn5nah9KJqDhqZsqCCSqVawTVsaE3xaW272rSkDsS",
  "key40": "43PVaYz4YbM1aBY8a62g74PxK8VwNxqxcE9hJHXwV6s2qzmRTXq3f5Ci7RJTXaon9BppE7byJJrZui4qZLehdYB6",
  "key41": "3rkSVp6AsyJC5L411Ac64bzxYsKo1gs82XmFzk5dXv8Q34x7UnPtFuJQvYeNeLUn2G73hjenVAQULgAAWQv7LVK1",
  "key42": "cZkcmBSKsQNdJuRJ5H3VtqN4HGXhgJ5MBaTkPCYo4ZCj5GZAPiVi1nrdDUQ8yLDiFSqfnUnNW3GwKwcqDJ2Vbf7",
  "key43": "XoModtJjYk8DVfc7ac9eSgFFGrGG1KMtbCttfPxyxa1x4BUWLt2d8ewSVdLDVXiNhAHwW22BmdcTBWkB84v5NhL",
  "key44": "4tqqbcSsZNqeBBS6HvW4YgSUQvwukkYCXwCmtp2qnz2CNqWdcyVxU9rQfedfmSxLcnEHr1txnbEyKpXSLPfTvynv",
  "key45": "3baKh9SqzxDG6Sid3c4YwmTTpct59HaQoKDRSu2MmHLjs2s6SniZ5s2BkaGq5vuWJbSLb4BCsgBX1WW9EFdsxRn4",
  "key46": "AcgrPVTr6y6yVEZQZoFZhvdaMVbw4sffL8EAkXoKKhTem1yG2N4pDH3HV366prUJQetRHpXmzs2SVyaxN1JCBya",
  "key47": "2yL9G7VLt5EkQE88RWumXDjWgbA7yNmAfLhGA8Zf9MCjj9aWgs8ZbgL3sVR1ht8yFkbXabKr5RWWEJ89TbAZaFhS",
  "key48": "5qffnjJGW1NScTgphTU3cGpWvLTaK77VYty1B4snpH91ZLbQ6NaaMtrDwpbf9czUFGwQbt6MNZzA3bo1G7uoF8BG"
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
