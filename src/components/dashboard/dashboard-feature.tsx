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
    "snLDkSgx7g6taU4YLENrZciQ8xdmQ1MPipM9UZ1fiWKx2LG8xyJ4bS2YKR8jKZF8reGu4dpJJc8X9gyATxVAM7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sEqHepyhV1HcsgvLjpJZP5fVbAw5kYbYcVfi3weiu9w7bkdkM3cEzDhpncZVvw18CpJACihUCnejYFo5wkK13mn",
  "key1": "2VS71bokrYGKsx5YjrK7Q1abE5Cn9DZ5Eikq6YYJ6Mm6y3vBBnKkP6VeDsUUKuzxaenJNsPnFYMhntrcD69KJwbc",
  "key2": "2DuUWia9aKuEzsSUx8H8mKoYTX1cJsJQwZPL9NeW6tRGgDkDjgRNkXCaj2QgYQbQqP5tFWiEQX2Hd5wBhdDnsZ4n",
  "key3": "3r8yaPbPrq7gngqMFbGU1w3bXp9qZC69BLrjBhytotVWdDRba7ctoFPfv6BKHiaUjfLcPjN5bGVUFAuDWyTCgxwd",
  "key4": "VneQ9zx3qwBZCfnVqiLcYNR7bBQXYfbBHecr77KWbi8U3hbGytmTHiCMG2mufZ8tFyyEgJSCGkNEFps2AX9CrN2",
  "key5": "4LQPM16M7xD78QGx4ucCo6P5Wj4EWtUKqkaZmhPdTSMBv1YYcdT6ff9VpX8fNg9ayLeCjU771UUkVdNTbRaAhk2X",
  "key6": "4KoDZyvzcMA3DcHJ2ekJafWFPtkGUg548cqc6UWqiDGZ8JSLNQDCJBApXsi8dxSmrsxu734WLnXvp7gV41wNoMht",
  "key7": "3Mabo3iPDWUhLbEamx8BzWQ4RmjgZVe2UPVhBkgAXAFnpUntBsmJUKnYDecsrzWHrHzHopuaAoz2iGAezqvWCSnB",
  "key8": "5e1xZJCjSgd68FKG52dBBdRmyLMwD99h24e71EqdbqWN2oFqkcuAA1fqmXaMi1T7xVHkC2a5RBmSwgvVJS8yKKZs",
  "key9": "5D1hM48nyFtcrafbVDqb1WKe7n1i4cy2aTjt9bjuLfDoAgRfRdcG5kNVPgdrDPvzhjXdauqe7W19uuwx8zikZLyo",
  "key10": "26fvpZJedfEkE9WUJcQjvZ9NVG81ndd5qySDV4uWm4vhz8Z7Fhu8BuiJs6v8d3bWJMYc1jJd9tWCrJoho6hwTG4u",
  "key11": "45MqANVxqr5CfskjWiFpfZNVRfVUFubgxeFtYop6MsJ96qD8XWuCMKDWYpX3gLX5r9fXsegzAcoVBRemNrvir5Fk",
  "key12": "4r96GLLwQgeLH2fRFQLFNqdWJqtJjXokiRt4GzTQgxrW9owhgwZCjEzkYsKPZCNojwKktGYaaeuz1rGfngWQ4Nfx",
  "key13": "29qSQVttQpGZNEMJMhKMo6yhjEq51qUGyYo4zvbCkRhcT3Jo3vG9wH6bvhmK9HW79KY4gNzAU6UAaXSTysYkCbzL",
  "key14": "5sxtm61pBPxudgSS9mrEKRP7eb8gniJ18Z6e7sysgmUgbc9oNxsfYPEvgQvX9CZnLzD7gaaND7nXYvUSfVsWFKmD",
  "key15": "E6d5gZNyqeUDWVznqFnMX9ULn4wy3jaNtbSNKsfx9VtVtb2L7xzJCHMUsQgNy7JYahjMeDBU6gcw6iTRhVHqiru",
  "key16": "3Zc26mUei9fcrLTSHFzs3FQqrynKD1RDRk3QVZsUDNSUeiCt6UdMBmLcjzBPYv7AvUYmVzaZujU1Ty1kWDutBggU",
  "key17": "hjZ5JFjkvahaMJMM3eREuLw4F2KM841DXauGzMY2yjrkwU9ZXu1uKvo8roo5yF6CnBEpe1atbD7MjhSEDGVFuDn",
  "key18": "2MabeAWXCcRwa5Fy2a65cnJuEvKbEDhK9J9qHjFwGBri5byg4qK7fovNRF7toBRDMj59hS4HZhbsBmWM8MULj6YX",
  "key19": "6FEHo2i9GFoRvNM3286cQ5UXQAVfBTSN1BV6AdKzWC4J9rrCUsmUqUmU5sEkcAEEWmSi9Mp8LmUBtyqW7Ep6xKR",
  "key20": "Wn9CjtsZQhN5o7cYzpRc5h8FJjzPFGjZLfXYzuhhfxkuhWSuMWkRYWqjjP5xWuppnM9DR4YNpLTMEm3WzwaEtJJ",
  "key21": "3BY5FhzywbvwMpuksmRvtS2qSd8xrmH5EYjEre12c4EkdFhjsm5rTQ33HkeYXXa5knq1bCpFE6LvERf7kBscGmm5",
  "key22": "2yV5pWZitv6Xd5yGPPkfUA7c4gy4agKRM6cyuhCLV8tUgKqEP4PQrBG4SJ5v65LYn7XtF5Q6puo7m5jtDU7xjkYE",
  "key23": "3wvjJdNpUQZMMhYMvFV8sG21FCDhwY3hkGKGearpirDzUf6AFBkBScXAjtapsBknsHsD35gxD29Ec81hoEAX4nUm",
  "key24": "2sKd5izokaVJr6jh78zz3NVRdrsEP2SR3Y5FeAHQNzT45WUJjU8QSC9xBhXNK7TPc4g6Fa118ZagNACeJJsAQ1pC",
  "key25": "2F2At9pTDtbo5h3tgptDxFhfMNNjJNHJj6BFWNGJMQprDC6bHXGZpgEjwLRcCpsyDW2ZyZLYhzfKFhaZ1ALM1hzp",
  "key26": "4gsADKV9kvC1voRVjY77hubijkXxgn8M2L8TWW57RixXw1wXQ4tHw562YDE97P4gBFdtnHRikXDK79AFNs2nZhVC",
  "key27": "4tU41ggsK8XYprZ3GYLMJVvxJri3czV3qHWrgwsyvD9Y6ha6Je9itvMFpupY5tS66B6wnCVc6qhiAmoAaN5BnvAY",
  "key28": "2xdMkKnMYFwRP3NdtrquvWSJSHim6sVFoi9J6TK6vXRxfhYqbKy9HZVBKHsCYU6sDN97FNAE81hJXy1o2gYkmf4e",
  "key29": "3gjCXQkpt9hTR3v6BwhhTCKmKRPadE6MhfCghEv8FqDDWWm8GWiSHHPuE5JxDDA7cNh9dodHPSKsffvux7zXGkHZ",
  "key30": "2E1e5iWDspPeJkyBqK3EDWfabp5H7vvqCXYZbi9RjwwfRNUY9ZoTsmPH9HgEgxMRDqsZS353jw1dRGo8tbBN5XZu",
  "key31": "MMGopZXw9cSGQer67wyR3GCJraznf3Qx7PhtNsZ1kkj2hfNPg9o4oKhsxXmofMjb1tXKGGoDcrFAUas1RvBrLsK",
  "key32": "4pbAoi7947aTVnaGT2yQ3RZR9kWtsyn6oRELg5NHxrFm2PEYXWYnrzmv9uW7no8fXRxmawDu1sbjKhAAygRsWKz4"
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
