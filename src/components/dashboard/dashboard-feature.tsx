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
    "4jGCdVEUpTLPDVtnd6AFS6SVNGuLvtV84J5DAPXzdqp8P7gJRqL9aEaxoHUYvw3nqwowJs11VicVvgZP9RGhLBLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mnqVNkM18zGQdTv8pko5AbZmKomZVaUDMCVkjxLK1tDqyPy5nChEZD6GfJuZ4wBuMSferuYQK6j3vuwGBF4vaGc",
  "key1": "4sS8ikuK4cZJiFX696XHn4sSYy3j5NzjMzag75qHQWW5kTWoDcR7sugMD1TygBk1LdsGX6yEKRZx98LzBEuspzCZ",
  "key2": "2QzjHKMuNLJSiJ7Y43jwzPvEDeWaXy3ZUqtaG5Y5TWNmQY68tqLWcmiZZzrzq3EdzKG1Uf8w9fB87Q9ZDt9rJR57",
  "key3": "3xXvCML67BTAXx4nDbMvxWkcBjzbMtA5DYW9XWjnQqQUVnnchF198EaeyuVXvx7vpwXQr1WorNqHriBeJMqXKvCu",
  "key4": "4w4CfV2dq3SJ7TtavJMJYEF199yQxn9VcK3s6NNckftPPpXJCg8GkbZkZrzK5hvQkAh1cFC3KLcVrQS2zQNLf3y2",
  "key5": "5yyJNWwZWenQrv7kHSCHmhryTXtn8sB21wMw9ba8MprJ2Rqg2DqURPJswBkpRoLcphNR3JsAXPKKn2FQd6vk2oB",
  "key6": "4mbA3PvDheMg8QM5SqCBdU16BD7rsotDZgjpoHzwVDVtHkKUeTAfTrRPRBnPMynNBe45z38ujHvWXw2hUyEkeJ1j",
  "key7": "3HyuDbuUGUf4fHT4gXi8kh5KXSmT9rwDFLkydMntxrb1se5gc4buoBPzSr1jwZ15Qfi7AGxdUsT6bFCGug8tXqTF",
  "key8": "4ChgAvJCff3oS1dmzEKCrvHg74PYjuAgYSjNqiC9gfFYsayS37DpdJahWvUUYM3m3H41YjQGrhs6TpPbVeGBAy5t",
  "key9": "3NJff4q6gue9zr5n3yFPvJXS5a6conmLWA5w1p3PWPPtkuKN9rTs7L63WZSdNnbVRBWHV7HmvFzXbtCyTWPUux8A",
  "key10": "5ipD5apADCA2J8JvTE33iSU5ovy5gji6eyWoLRjeJ2fq8m9s7kCpb89Tuzx9NFaPaf7Pq2iqiQ5fjXPQ8j4vfaeu",
  "key11": "3iseB1drEZ26nBtRAdwZh1VgviakirUko7sTfrA97e6aTMBFqxzpZjNHZqKT6fCK1prDebNN37C1Y2fphh8jm6MX",
  "key12": "5bYJ2hc7voE9tT26FuVqRT8niNeZdzKkQq3FAjL4iF6TEQFBAsfRXLTeofiwmTXNUJYggeLGJkje3mFiRvuX6aHp",
  "key13": "oyvJPxYmFKB2v8XZQPiW35UfizoasCWUkwWepeYHP7ThziN3RsXzXJDCAgUsREGUjdaN1vy46TpLsDEGYVonPtL",
  "key14": "LoUPyG5eBKnufo2yKrEZ3FD3yztnARfWza4i61AH4jUzZKGdRoyVvecj6oxQ3g7M1DFjpDGYBKzkfbj12bWGTBS",
  "key15": "KZZcSjcNQXr5vnmC7rysUevhr9Pvwii2KZ9BBLN9sHWYWJKJeM1e1QhV3yZQeYFddDvKtgFktugvyB7SZt3jKjw",
  "key16": "5ZYQC449EkTHmXtdTsicbcuwpsmFVMYHHdAsUphZ47iYNED19VARMtBzmd1NQzV622x7hErj8s2YeJBZy6j9qQPC",
  "key17": "3h3d1U7QKLLVZnk7PFCNhWc12bDRfymZWpzQ98oYpUJ44tsFnuyyEUapiRitDgvk1d8SXc1AszfJ4tAGUBuV7pXW",
  "key18": "2G9yYDTyfgkLYV2evY2EEJFpPTrTXjG9bHjXS4enXuCJLMEgTSf69cvwMGrVXk9ukC7y3M5HL8t5pC7uFR4Nafga",
  "key19": "4YE3kc2nyJrVnTScsjqmB5f8J4VpBc7WAsRB3qnFwRjuo15QXDQFWPwtuCnU2qnAo5e38FQyS7nip9WjAQhiDLW2",
  "key20": "rDmV5RqwqXXR7Q861Ny2Wh1LMGviUw42B4wc1ApcevZ51WTDFUMgW34ici3AVeWfqyRVanNXRbau7gfkVkCfKTA",
  "key21": "AJzRS7mo7gSHrmSXa3acugXLaAMAGMBTwL75nKsD9MCKN48Lud4UdUoRY58vw7GupxTEbn8CT3EgxiRzSpwTQx2",
  "key22": "5VuQQVbqa7uDmVfGqDN9WCYVSvp9ojuNYQ56NYSHAdy1dgHuVdCgYAkJoFFhEpZWzSejVnSnVbTpKBVbWGpxob4X",
  "key23": "2fzjjjMeW1wvEBwB8Lw1aoHX44BwExASovyT7ozCyf8UmYWzkqcJFsmyANtJRHE849M5Rqpa9fhHmAVvtcXa2DQi",
  "key24": "22MH8yra58HCMDKHxXHrLU1D3vDYWLZG2Pd7qCzAY9BHPhXGbiaMD5gFANonCpR6ASeFPyT7jHxJgCNQATRmr98U",
  "key25": "ooonq6uBXvm8XJ9dvTW9RYrYuF3v2dLXj1Rw2wM8wuYDjyjg7XbBJNayTfPaZhSZAsLAPK6KRJCScQfbLiqjofR",
  "key26": "3fhvhrxEQkahQ2WSrhQQYzstwPSj2wrtnmwcc528whhGZWJbHecCStXJUzfwS9xQmqrW3JTkspeQCxDskgAnsUa",
  "key27": "5iSHjEAfKL8wav81cGp1vtucAnChqFdsZcd9NXjAcnWSKjWV5825s7M2CCaJHfuj5Bgwu2JCUR3spSCGsJSWBt2b",
  "key28": "2VReQpeiUPH1gUC3RCiyNyQqgs36KTA63udGNwfNd33gqErbrjYkgUWY5tSQ5sHDxN31B4tWStBqEbF914h2sqjb",
  "key29": "5xBMUcwfvZSoX8AELck1cix25r6Wwpt6k87oxu7cGuDPGn6qMDSe6k3kC4oRHakk7RCbBX2h2ivi68ncL4K9WMHt",
  "key30": "5qHkqpXd74s9f6SRZqwFsFA5k1MW1TVQdwKrpiALMujsXW6YJjLZwxqcMVJpK9TZGowrLxtCWq9M123W8CqX1bBx",
  "key31": "3qPQBZTYfj3qu5t1B1eZmypy6Ri7sVM1rDVJeZWYXvVXG8aqJyRh2h7dxsNUdeL1jvev6b6maxXZwzHGgpLBTgs1",
  "key32": "65nP2nKkiyPPgnLwCG3Untdgm3ywMQNb8ZEXHfj2yKRaPaczCbFq5t8o1wdcEWq93GvR1qr3WBEijh2N4a1n6Uxw",
  "key33": "yjCPSsRa4fYRJm4CWbjnPse9f2kbgtWPxsZsTVzcMTzSdEGLCMHuQchxjhFvmwjEZACZeHXhEw5X9AYhhLsyB1S",
  "key34": "4NkqSczwv8nnnL3iTpnCyL7vT9v8ZiMHqgXSAQeBZkZpWMvYurHhvxdroLu99innwryRrV8Fb77Yq2g3pSc2bZER",
  "key35": "gTNy9qUKik5XpPmmHvJH2m5swBJSg5MnReP29fur66BZCLTj1vKdBYypNSHP6MbBQMLfZyneQmJdM2CMHZjpx1N",
  "key36": "4JpURCrGhQtT2uRscTW21tZ6FYNdn8QLbXs1uGfhraofrcyHmA77fnsSBXY1z1hpRjRTyPX26smuD1A4KhpymrsM",
  "key37": "4T8qbzCSJEqPj3qCRjuXUMfUaBbSEFCqT1ff8bQqdcR9BepW1yJQ1Hx6SDGgdsYUoPA44QePXELdHW158nUbtCeu",
  "key38": "5NYrKzvNW8pXJkBHFmhzL9zckUgRmdBB97W8JQ4XSdXG3aEcpR95WXSzY61QwFqTMGFn3Tpxkz6Tty3qhia9yHsr",
  "key39": "5XT3JM9VCJXuviYb2C5GHaB5hLNF9eVgFzexZqwaf3Lu7Co1kti9PjJ4zMpJh99ZmoGTEJTSHvCmEyqZwDcew5Rk"
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
