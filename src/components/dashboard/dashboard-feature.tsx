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
    "2CGUWGeGDdV6oYLewYATdUZXUKaKUovYsaFVUugWZCLdtq4ERf2uKWpXjw2cvfdXHNsija3nNXDG7mJzJJEkPwHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SbK1ZHwpWL8Dis1ZehsqgYh6atHWSgiDmCFmAh4M8WLgytoa49LVpjXd21EE14oapDTfUW7PzS2fEuyeyPjGgrb",
  "key1": "3zyNxFcHfvHP7jfLFVUoviP4L2RUB7JyNo5UcRMsR3o1jg6XTSshu6Pb2u1nkLbWZB8EQ98onT6cFZZKj49P4Pv4",
  "key2": "2Nv39jAxcXqHRUEhDaA2vLwuR8R5tM1o2ZtNVbZnxoZgxcTPneAvWUFzEKKpswX3EgFVZLzWKdwkVMiZjyeeviHj",
  "key3": "2F3b2THfaLuHLNVDoxQaEoJ9WPVP3XMwz4DUEbYhWK3nUc4knrxvgLTt3wqQasfFKzA6jzZFshBMgwEno9jjScPn",
  "key4": "2LR7HJgms9VDaw71QmJinPwMuSDsvgjg8XV53DVofJZuPU4Gg35NQHkba5tzWywr7wQc5nC2bvZ7vQVZnM8go8ag",
  "key5": "3Piu3ugLD5kwnJy5h4YkHNio7VvoDtqPuPFabE59U7VMJM1vaE5GcTSBfcz6jD2AvrZnhpoJB89a1c3T5qNn6jzy",
  "key6": "3zFJBq94EbihVxJiHNaLfdMQL7iE65Pq2EGsuRh5qqkgRAGfsGyRrzbfcWwFHsUc4KF2ebTBzNw8FWDKwuPMwnjM",
  "key7": "3yH9tBHf3BvsXd2adZouWDsgdtof1hnm9NaK3ejn6HJZDwjg2CX2fy3JQBf1t7zjq8gC3etmJoR8Ujf4tQD4t5uW",
  "key8": "WR1LpVQK6vP5fWZfAdY4FekWEKrDSKYbDwn8QwFPY79xRhnj12XTxPUcv4qijkvrK58U1tvbhAAwXwyHi93MJkm",
  "key9": "5zDU5RsUqhMscguCuTzRsdUxAxNv8bahC3stCwujVMyJ5PxjJKWozVzY7z4XMQEdDZdkgHe845gAn5MDuJdJY4ow",
  "key10": "28xsoTtNM8C45LZKrLXWV7ia9W5gSexcxiDFkN3hzCE3dQSc7HPJxdPuP6Fk731bTz5CrA2jTm78juKaCmKLSzuq",
  "key11": "5yGtqUjut7LXS6p3RKmDDfZsQo5pd1mCvPWpM2ByH9VXV1VR5SqQJrP9GwSTSbFJXbn1Ch4BWSsPtXdE5Cf1sUS5",
  "key12": "5tyuWzUshs9FfKzT1JrjT3trA4RjDZL2xD22cp2cE37itBQM2syt8cL5tfdQhq2U7vueLKTuUW9N53nu1y94yHFc",
  "key13": "4wNraVVW6mfAMdjswWBuaa8ys56p2Q7U4ufWfQJMHmyS3ZqUWVK2i2gv78F9vg223SUzCZqSXpYDDpXnCAfWUijR",
  "key14": "9Vy5DT5QBU6jMrNC2xP7VXHvZuN24BVUC8DUHFPTSn9wYhKyVQuZoCnDs17GicfFusk5HFHUBYvt1Vy5F5oNq5B",
  "key15": "4rrsrCNn88tw5FydYim5ZCCYXmXAvvwWHBxcyK4k97CjqGk9bM8h67bG8Zk6LDqnNi53i77skBtuTir1sYEJ77Ds",
  "key16": "5DUhi71e5xRJ1mZ8foY6jX1RQPQxEDVNRkMxv16xzZMWyBQ6TVa729GVqVsgeqt32MeVT6HKCBQcp5AqUtpyVvms",
  "key17": "5Aj7GjtPWquyocmexnbTRKmuJBTThXmUqvj2eKcFBdN2psTJF8ECbjbcqsEAWZ8j7pLSTxgGixKJ1JR1tzwQyUQh",
  "key18": "2HnaRpNfeVzCp6mKFPD23bLXA8aKMZjGmz2YeRfTxRZcqjYAM9zWk3gSnk8TfJ2zP12Z7uTdTQJgq6Xi99p8gTcU",
  "key19": "qCrSdkGUGUShmJSYAjUBY1XHy86ycz3T9ADwG1Vs4ux3wFha76kpr3B1gYrySumiCHMetTEWZ1gZ11oeKuYwFk2",
  "key20": "4XCdqM8XLsEKycxzRndEBmSDc3W2A7jhJnjX8XeVmUxjfFJjy2Dxg1E88KMHwBpwnZEy6FUjXTZsJRdgmCn27w6W",
  "key21": "5u66ncC1rL5U5rTtQZ8LHyz99ngHpjavLp7fvcYFfoiCe4jcTn5oE81HXWgyx1Jio4BFnqQQMpSoosxscWUSGyw8",
  "key22": "456oQWpdzkeQ73369z5ZjMGoxDLcaT73QVxynwDWVrGn61tcT6tqcgFbB2LcUQKuK7Jr5kF554jiczmb2MM2Fa8k",
  "key23": "2e7Zgu66ciWhmwcQmq7KSpmtMoN4QTQJ5bCYi1R4MRhKwTuwDW4o9qttszjah39KjtnFBHx2d6SvDeZsqDfR7Jp2",
  "key24": "5qdd1upnvaGkomyN96p37FHtJNeFkvFsD8EQy5JK8g4tHxkCxJMQBWuP9pWwnwtdBwULcYAyeaKr2rj3ac3pmWdj",
  "key25": "2r54erVVMazdheuLgEwzYG6PU7RgfbAvvnE4Em2QKtcNZRohqLB1SG9S9ArCTcnxVuxhPpufNiuEt2yFPPBMo4ui",
  "key26": "3PiZj5v6rNuL66oWwEJZrEQgtSJ1iA7mBozZEDpCCUMAQ7CS93WEogYqd4kQX3gxa79g1RA4y4JdiCdEquKVgFD8",
  "key27": "NiWutxAS8Q95RxWZStiMzkDfUKiN6qADNkg5naipHooQEu8EW4Ydc5XYLc31TCpQ1gWZZG2EZUsYwpK98Qaio2t",
  "key28": "2GnQLrrkvMtnGYTvBiu8wGLv5WokED9FDqcbxz4ex4LM3gzXtuLdYVUTjW8jVZJDFQF6CViYinWk3LMAcEGdg2Ti",
  "key29": "2HGnYAGcYWcqxwBDjRdNsvSqZQBFznufTrC9Mdm4imwgr5DmWJ7QEf4yBbz2jSMaarep4pp6mzoKrNwLth2pLib2",
  "key30": "zGeSV1ukxHqafiauasrT7PTL7SFuuQ4ZMxx951p9H9wtTEQ4EnNL6SZc236jxFiQyNu4x5LeQhmMePiwwH3RFz7",
  "key31": "566JdhwVkyda6Kmh9rQr72ze87awZZSSLjS2Kr32S7kubyqygWGXaVQhkJQGcb1s555RXL4x83Lc9gk7XKix4gdQ",
  "key32": "4A8cX5UEL82eQSnY1uN6p6s91UQhdd75Myqfg3btwb8efVAzESmNwTmYpF4E27VLjJW64NMzFcskgb7E8BTJBWua",
  "key33": "2CqsfJxgzpy4P3r5sbAc6kN6g8Ue4S6KXBQ8c1GXzjTpRkFBS62ZXoXQSqGmtbYc4yDYhqeu9cz2mEVavmk8x3Jp",
  "key34": "3T1mHnN56PMPgDUJ4DUJs8SJvRdG1Aaf9gDUsqqLwhsxWbpjt74q72q7yD5GgG3syZE2g7bKwFXbUQrYhZwaCgcX",
  "key35": "5nMDhiJScYN3bPR4xrzks1u7ESygjX7i6NEvZ1ATcefLwX8CAQpJJNapVEycV2sJW74rEzYEeigSi3MudsoGR4Dd"
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
