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
    "3RJBPiDaZrBkqzSM2hXB4yBU8X27CDYXta8o5tPpXq9ZeMzYCt2sEwtWBnzJtXQ4xeqt8rprTz8MfbE2gUDSScNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rs7uck63wSRsAMS2JLdBacYuy5qS3d56BkPE8DoJD9BT4SSMA2dLk73E7bmwAk9KzXVXMwj4CBfwYkmKcyeTpRg",
  "key1": "2uQeFiCNkcDaqoy5rRPV15R2T5cuTUvKSZSu7xka3XnCB2CJshuz7voLz2BNo2TWNvStP4cjyXiUB7Y6eakPrGCB",
  "key2": "2pCmHcgGafpjwpjMrqs3vNchMc4MGY2ydEiXq9B3CHXHhdtqhCjqT7K1kinvEWtS13DZ3ETjmgA3QnFv9VyTUSgQ",
  "key3": "2qGypq1myHudPE81GqV33RzkgVixuLss3U3WLEkiKu5bLGc6KHhzVjNwWbuHiHFkHAxwQUfEmy7KW6MPsKwZPRsr",
  "key4": "4kue9NNJAuqxr8PmuJV11CLADbXUQqtjoPZJa6Wuae9bv6opNwXHcH3mbSDotZGE7ALzY59RBAwaoYE63m8W5TV8",
  "key5": "23BV415dRJEiRRXBrDR7oQL7Vj5Ky9MTq5oB1y6Rfg2xwUSj4mDV5DnqkEa2ibzBq8xwvDxXPbqHRKirnyZKMren",
  "key6": "2rQ5XJyQTndNzK3WC8KMKoT1eaiKwLHcfAZhKbn9qD6SBnEpaBdJv9XkLU1JjhhiqUh6QEXCb5N4xZmdaX6ZGPB5",
  "key7": "3GP1ynKMXHaaUUJkYpXmPuoLgXiyP6qKPw82awrue7h3mRY1qaYYmak4Ykhn5Ukx4SMTNuct7agyTWTJ7tEFhFb7",
  "key8": "8q65T2tvRjQf2292jLSPj3NfVTM8MCVnkhceNcRqLEFGiGCAtQePr8SJ8duYThkGizN6usNqEeVzHjNnhhkNxU2",
  "key9": "4Wy986WQhWdDsGUPzGbFkpMz8phNfSQdtSEZyR5MagpfEbn7RZJNp4h5wRfyaPCpkWhv7FrN4cquCXRoWfniofFx",
  "key10": "58biJSTn64w2hJLeHBW8k9xAM7JefhEDHPXsqUHR5QsiS617Qg6TV4rArqVswSWRqh1Bysz54bA4oqCb9PzVdHCC",
  "key11": "2QXRw3GR8mB4iA1k17YxnG4MJmVYqiu9qCib56FwZp2dUW662kJiymGwH4SQ6duEvvajEr4bq54uirPdjAER7V8J",
  "key12": "4svFDn4DJVeMqp2PQoNb4oP5fZBKV6RBpvCF3HZ8nE8tfXE42qQLRf4d1Wm9T9bHYBUPcBSh1Yy5hZ8mfDcYN97t",
  "key13": "5pfLzJZ8nveVBYQCLaU4oeFQ6aNMZMAqtqQdGdi2YoZ6SSLHjyMxSBz1wL31AUjz2yHaUGoSCBKAjpEGCywbhZWG",
  "key14": "zxLUzTDJtQ2sdXSXnkwYpBHNXVGHjfQvhULt28HS1zebfoukkaQFttQjdNWUF5d8quRCJbn8Acd3BM4qcs7qnuk",
  "key15": "3DiCivsbgLRfq7zoUan78FYGe1P8FARH3mAfPiWBUX7cA8WNXdwvLGD3qhDxTFLvuqLm9qbWR8kocJW9nd1SL2VR",
  "key16": "35NznCq9QQDHPAPA5BKdS5QxTzLW7NHa1gMUS6eFUSrhDAxBCzb2UcB1EcDGRtZArsAfZo3cXNSbF8MYYLKNwdWx",
  "key17": "2Z81mRwvQdNhZZQH79K8tt5qvEyf24BgA2oWpuyyoZK8JdwZGD2BtrhGSrr3ZmAH5FS8U9kTLTzh1svo8hQaanr1",
  "key18": "3DVvoCYqKZrbmZwTJ78Q5aTwqkvmnLWENx4HJzZcgwQMFTKd7e53GoRvGJhhZdeoizbLSVEuDgd1tFXZCxXMCeB",
  "key19": "4hChUqwwBPhCiEDG4N61f4z5jVi1sRfaxYC3EfEntrduuPbbrjVZkEDJADV46mmo6L2gVYPuGu1oR7Qs6KaUEMAC",
  "key20": "3fBPpQmTX2v5BYnW89Li1iwB58RH9zSsD356GqYaus1GHPGXAqztVWohj7GKTHbPKK75Hi8zzByUJyaoTh1kv6wD",
  "key21": "2erxy7PiAfGHoaSJbSqjjYb8V4xhiVkRMr27RhTSMWv2zsNQ9715Dq13Qypzhu5vW1zD5rdv7yE3MKHZuc56yGSJ",
  "key22": "2Hg9FoDZV8GDEh91vaEaNMKigzf9kFEeAG5drWdAJiJpAGun6K9MZszj67F2EZ7WemHsxGwoDWxjWYM55ZThxvN2",
  "key23": "3HZmTp6Mc5FHWuE4rq37b9geEPbH6s2JXoXTbE8QrVaZdC8TAdyH4DkF8sRgFe1gKAFi34kxMHP5ybXE7istuhmQ",
  "key24": "4sXCHsy615mdYr3AeZ4ZVY7MnMTGSrTy1XeLQgqpHv1zo6tKHv7SgujbNDSrxVXtpaHmh4pjVkRk64sKygRPedfB",
  "key25": "2xsxWMgGHZkfjFhD1HPj5h8ftwNh6M89N9oTTcP3ovDWpzZZS4TqYC7jSF4EMeHrLCfhQZ7tW4dM5uvjCrXgxNme",
  "key26": "ofkbsyt6w9E641eVcuNyscxJbEgcpKS5TTtYuGvqygFGQQqz8n2c5uF2tJwovwnkMtE1rDTmNcdWgrzrWwNrdVa",
  "key27": "66Y7jFiJrxiwkbkVnaqVEE8J5Vh9DMFYqywdPDJV1STU6zVnERVu43jJah4Q38LqS19Xbf3WxH1oVxx9r9As4Cr9",
  "key28": "46M1S9p2AAM6UVcWMjDKt6yty66WV1yidtrk3vdM8poKahuyCDV5abQm5WhQsmKCL3gtfUaZNeyjSxzrHTV44FBR",
  "key29": "5nxTstvJR2PvYEuntFwJbA6YrBH2gYwkqr6jvbt4AAgbDzFxF5cxZKMXbNburBHVbyRy1H287nqGg9DbcuyZ2ytD",
  "key30": "2UrUpNbrPCM1ShryMCpNZnEQRRnQVrinUa3SCWMzwEdnG8mq7J95j6RPu6HVUK5AzcNrYd7E22y8rLS4GyRic7Ko",
  "key31": "55fKDvNXcwXBnMK4dVq2DU4KVWMkfC1Ds3G7qZUAqo7LqoL9o4kFX1xx4rxiCNbpiMxveNPUSKBN3REVkRaJBr82",
  "key32": "4orLqC2bYGssf7GNqWRnGLm8sLyw9PyeW1urdqh9Cz9gQdWzKexSpf7epbFWSbqXmUXmdrfwY2bQKVQFicET8n3d",
  "key33": "2GQo98rjaDeGDyJuZR3KY7ei68WfAr4VjHtJXZuWrXJQJjZmVEyuGbTw9Zj9uSQUQNKFHehBAE99Qf3BRK2FSyDw",
  "key34": "66SRCYDCZerfXNxDf1xuAfBu8TpGWD9hdKYnN86eJdp4F7TR7Nwj3oFGzqsu2Ry99aSQWKEHiUsvkzKn4asMspYG",
  "key35": "gBbRWApzE1iTEd81yYqMnqQCu3dwncHHJcaXVBC91Wa7HpNytxY16iZbba1LsLjgWwVmEExQfAoZ1LukdTBGkvx",
  "key36": "2rM1QmoG9HEwQESixSMKn9T2vohhDp9QvE6xh3cjCqyz72ZAn8kRdZmmWFApRoKMmsPdeSsMVs3qzH6bY1UT6HwS",
  "key37": "3DW5mTQmuGXLegzgRFuMYM3cf7hegVRbhEy6Y57eAGJpb3DceACj7YoE1bZDbjHY7hw5GwNSg5fiXtQNyYFpGEt5",
  "key38": "5BM2P7M6ntjmp9H28UiP1pBdS4JBSTvvFJgFdQr5e5W9SPVwzFbKprcDHL85veFCpvUXEwygPtgJCTaKp1YND9rD"
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
