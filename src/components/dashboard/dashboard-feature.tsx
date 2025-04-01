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
    "2QuMC9E1BypJpYx4KqeTodrMHFXaJ69zZ67aL3dXzPYAzmyA1nToWA4GZCPgpWnCGmLc9dNewaRqynrNgLbn1Gcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fR11o3K9ZnQ8c9EsS59hkPo2AjV1HiQPwqB9ZPANMr5g4ywtf9bWTBfEUqjJJDp1PU8yUWxkf5JYwdTHEKp6Jz7",
  "key1": "45eyzCEdYYyzd7UCayWwAazr3KmarQfBLaaAK6MuKgguR1GEFLaqASyYWSnAMwLTwhBxHrY341gT1qU4LnjrzsR4",
  "key2": "2G8ewnxbBkB2Ca5FMY8eqqjdwEoQFe7A9RXJ5bCxtuGQrcDEUafp5RNCDTYYcP8YA4hz7PE3CZj5kyAXvcWgicsH",
  "key3": "2WGRZK1YUUS2LF78TddY7NQhNqbTpSJAAykid8vEf1n15yxDx7tsykJJvYj1AjiAupFGwEYLajsTDrwUc3KVNDLL",
  "key4": "3tgvidhmW17ngJSoZkXVfBQgyoq1ufx8qpZCSrFYNUR2avBnhnEKMG2ghrHqGGinHv6XPT7rCWYKM5Yd1gc93cLJ",
  "key5": "4LBXY6GiXhPovUwiUZ5CNkfTTXhAj6jBnkr9TpmpeiYNf7niUnk6PBX5wfzexKNDSjKWvbARghkQU9vuW6eWJhJ7",
  "key6": "opWnV6RKgFPen4kFKH14kT5VyRippXMyRguRE1f5QTdnc4NxA8CZMMarWsdhvHWur3WUbm4AH7EuubEQzJ76Q4j",
  "key7": "4Tg44Ti2ZfQHz8khWbQ157Z3bidDcweQXui2Gig1dCUFSNpzhJst8xJdXH5JwhQLkQETFvCurqE8KRBxLBKkZHM9",
  "key8": "Mnyxxn35431RHcaCH2DQwBGSgwYCCRj8USB4cJWtQRV66DAiAd5BmfAXpwySmS1DKca4vzXHnTafN1MXUt9btnP",
  "key9": "3kLJv3QssPZaGCygxGhErKFbTfV6L9rHWr4aziRuUqw3LUAWhthLnoaf2z1sRPYc6PTgx6fDtjGKrgP1wPmKz4im",
  "key10": "2htEA6Ad8yCDkkqNbchUAVbLKDktpyURbVBpe9xEpHSY3LUMnwrfkAHTAXunimFnLprGWz9JLkJ9Q3hwCWrWbPnH",
  "key11": "j7QsuKQB8AtEpYen92kkcD9rp3cUoGy5gnN1B8MtViLW8rWFAWh4hVuSSHYaUyLgzRV8yCnCHiNx9t1wJAoMfRM",
  "key12": "39vSYUmS8hdbhYSna258WJJnHMpYn9ttMeXhcuGsw33AaPP6YmAggZkHnHXjkdboKzK2Wf2NyhqpG4JMKNudUqC4",
  "key13": "55GcNtRpHRDRPe1YgPx57EoGYewKtF1QUnuH5xAuLufBLYQq76oHSacXi1eRz8TPBHhqomn47KRcXcpEWPgscgzW",
  "key14": "3nQDEVnGvBWMvjYkR5fGb9ZBw1T76RVzG2vbCQ3RJgVBwS9m2USjuWLHnBPHC2BqSYTVV7aCLG84GezPK7CEg4YV",
  "key15": "3BLaDGj2ArNdeMNWqU9xJw91tdJoxXjcvVmZ8J9buFMVtZaJouyBhC7bMk3MhXVHsaWYDMz2HnhNBtxZAbBXpABg",
  "key16": "3jo5f2mYEvkcqmfRygzVqkSmWN2QJhAYvfeY7Aasp8Fa6VkMxqZTYNfAYiEfnqK2AQwkbAvcTzC1yEVLF8JJqJwh",
  "key17": "61ReqDNK722XgeiMYJvanPLhybMBZPCTzhVEqZRJ9qx9A51kQLFJrrm4JNibb5pek92Ybfh3UtkgQhEdnMgfbJbc",
  "key18": "3Th4fwciHvqwmQrX8UJGqPVXwbvGGQRiQJGXp14vxGVHqYY6mG49jzs2CHaAfrcaKqqcwGZKGNb9pZYY5EwzsUXs",
  "key19": "SVcniag2ioniGuQeeCqcxo9Wzjbc2REvcjmiyQz5LM78gJzFhUSJT9zEzmqRctTmR8Qh4ZmwTMxXoJCj3nJwCTj",
  "key20": "5gBKfzwumsQ8p6rXcksgvcpNEDWuCRbbDBTzLqPuNMVjDhVPfCWWMCLW8cyHBdcZmtuWSSSJwBbyphma1fb3hcqV",
  "key21": "3daLRGGMdoN8yo1jnk7mdK9suH6RHae9tSUHiAUo4ALMxi7Bvky71k9reLJre4ngiA2eZs3wX7sj1xLvTEdAe6DQ",
  "key22": "GUFSUts63ztFu1by3KXEkyETPP7YcwdehnuyDVbuDbXnVYMRGo1ZoUpK9oGyPoy1YaSQjPTADsMR9AU2FtgEBV9",
  "key23": "2v3jSnEi5XdJgZr3ZfRZLHsDkNCVodHGFWBrU1UXq8PuQLqybV1cPee3pKdb5BNqXv1iXHXBxJbE1QRumqXzQd28",
  "key24": "2s2WzVpsLvFqUfARSTdFptagKfM2pTDkxcCngG8T15vXif5xRxd5MppXgsY6Dt7sCdbfrj1LCvvx6Foc6KFuWBQd",
  "key25": "3cLPjPuMiQURezKXpgKSbj8QJQSkQSABGACpuTjQg3Srzrii9bKZTT64684Mnohq7FsY2p7eVbCi73RGJ21NaJjw",
  "key26": "5eD1AKhBAmi5DjR24euWRhCS5FJbM4FT5Y6Bj3yKLcEBfySgD4bMQgszAxC7QDb34QL2967wdnG5cK84g6GJnQqP",
  "key27": "3x4imUCMrBjpp3moNCfhEfwfwG4UCHSnHh5PjAtp44dhHUrMDKAv8Ye9kAEAVg6CBbPuFmxHhQCeNH7NgcvnYxJ",
  "key28": "5Mbex56YS3bvxDdNzinb58MwgHbwvVrmiDHcyqtLE54ce1Pk5UeCE9EDE8K7nhi7svPahFNbAH9xWPHSVLBNFfvX",
  "key29": "4b8WgaYmBhTN5YPLZjEKLmVppWvUt3JsRB2TBUaGcocZfLqonMMgqwWuM4Ge3vDwHsyvMqd4XBs8N3hE1DwjksgG",
  "key30": "4Nu1V5DECCVE6kc13UMBHqhsXPk8Mpe9R7tFoH1hWVUnT2mvSp65QnQZXcoSkDuni3GpvrbyRYuf51FvoJZ1teBm",
  "key31": "3bNE1jwyypb317YphtBUwsio4oBL7dqh39A9V4VUZwjExtKD2kH1fyaVfvbe2sPbHqq5t9rN1BG6aqytMrL3zdbX",
  "key32": "3Bv7HKHyMbw2S4tD8K5h55BUNmBTYJiPQ4YvjbWyhdWmJdF13xbNCd4A2ycmnB4iDafqTrNCCgTLiMDNFWcUP15X",
  "key33": "nd7P8qME52gyykP4CqvF5fXSJbGjeMk2AXRCTTC5t5PgwVbKm6RdNCgxmTVZUsM2MULUPYojehkueYrDDSGtToe",
  "key34": "2rGe3HrSbouKDw6EX73n8YEf8VQuixktmvcFC9VfQbzdseeX6qqzgC3ajQ68K72uBqRbRNH9PKxu1k3UsfUC5ZH5",
  "key35": "3gUpP9GLJwMM4hy1gpq9BSszX5D85pCXD3uVD7d15ApiEedc54GCuSeP8kFmnEeH7QJPkP3dqcpZzGtgUiBX9BnS",
  "key36": "2DUomNHduRrUFnAxBtW8DnVy5TTrSdnrLnXUUp39HyExRs5o1V3jBfEVgx7PJAkKL7DVb4NnV2YtrKfLKPMYsJut",
  "key37": "5NVD9dKufExo9fWK5yMyW9J4RC7nLax4Jh1QrHweT9d6M7JLfn5U1Eps5LgCuMsqaGdhRefc4K3hD1sm7dSCVSdB",
  "key38": "2qn8mKV2Sc7Hwfvm73iHHqrfskCbxJebvgMnRf26CyTBJ37Xk7V3CXiYikMyxFejdSec7o6Wu7tEK1EiwtPqvRoe"
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
