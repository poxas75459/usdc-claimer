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
    "2vpAUgPPvzwp8bDMWHy1WdofaLAH8hrBMgazRvuL1ov4QGj6g3A3st48Wj5Fy76CLZ5cbXXRwcpz5ECQDFMn2ASE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XmZcKhuU474TkFk9uAv643ZCVA1ktUBdTveCVqCczaLWhdocBAbssLJmPMPD5U85WAZYDWA7mguL586AbFCm7BT",
  "key1": "bQ6ucVg2Gaw9MqYfrcpVAgVCZCxqxW16G8XWmoMthuWG49PY6UYfqssSNgGU59SbzoFkVWkz1UArtFe4jimamW7",
  "key2": "55HUTX3LMYp7ErP2ycZfHWHWjN8oyoXWyCHbehVbZ69jNQc6rkbVJimooaY1jD1Hi84fV6s7SJptCbDjbCadoQTS",
  "key3": "4buX2fwBMqzAe5AoXuq96uHz92trARqyNvxhnY4RmAwhYV3Ms5EdQrGsm54VGQuKjWZc7EqPwgGDA3RrLzyfTPru",
  "key4": "2rzKR4xofmxnApAZWfs4rnGVkPeroMv3SvwwEhdfD1b3oERr63mUa7MQN52rbWeKbv7sXiuGco3iBH5UGqu2dwgm",
  "key5": "3hnhR8EiDd88scc5TpusYEbuL7n5KjNdmSgBv6t1MKHTaVcAcN1jVrMxGuqx9Tmzo9iHVRTimUm5q4ZYh2KGHofq",
  "key6": "64FBdVJERsfQ6YJvxLYoSvbJKzwZGakPz6UNLcVV1LVC3JNcnXMBmBGfd2YMyvGk7JzXxvPV4iYbB3gPsdsMx11X",
  "key7": "2DUyoYLwifK7dDdSHdubLRcb1FnZXFb7Kup9p9pHaoSo5U7cjGwiAoE6sET8sgncXf2jZAzYc9Q2ZnmTva55jnLV",
  "key8": "29MAFFSjeQ2PeiNkGfcjhe2KhoLzTy5GgTZurtDNmC2XJHytVNnkP2u264ppqrMeX4Xw6ztKS24UnGK7KK8ZAQqC",
  "key9": "5CVpa24cLxbBHG2dvBbFX9Kk1hU22jTfD4ubYTjRcMRvBe62tTWxgQFnw2DRXepzsRFGtMaGTxzzvWRqNTXh8xm",
  "key10": "3UDwa8D4vQc5mXmYLuUhpA3dxY2uztJPQ2Pf1XtpqrKsMoUVupFMgDvtP8QT6SBnxBfKkqqC3NMeY6J3x6cJaLuo",
  "key11": "4947WzZV6YFCtAk3PsntozQUoWP8SvJMCefhRMAzp5ACpJNbgh7At2FfjKfkeuY8DkRg622GbxqnNrrnpvxf3tgv",
  "key12": "2Cjeq3KLKexbCY3UdKbnE5jJiJBm7UQgsCruayoB7qmqCUf3JMk8jGfEuFqcZfQ8o7PCzAimLxZnvqJowpiYWNPL",
  "key13": "5k31DmWqs9v8SUdNRrpRRw5LuqPsWwQfHHGno9UFibjguDoUED1mwMtZ8NQsxpq6hoUXy4n8AvZhRKWcQj4CjNcD",
  "key14": "5YR6mKaCweY1RZBxfbf81atBF5gWhvW49y6J5qRiWGYHCH5Mi1cC3HNgz1wngKCPTCSkhsYKjEaz5uPzR6hBuY2x",
  "key15": "4HVbKmBywrT4uKNMwzR6UmvaqA7atEDgjq8nU4Zn5jNBSnjiSN3VEoadtEBLYszbawxMgBP54UuKhRtTuups7QHT",
  "key16": "nmiaUZ8cSrr6ioYosQatG2Rgraty6a76GWrE4mVqrEGhHxTuuuerUZ6b8MycsXU2nbfMhih8sck69PJfX6iWwcA",
  "key17": "4piQNRCcZTVxCyDzcAkwdBunHbaAfZVSVPDWxz8nsm6SWBQL1A11qpkqCMaCbMNeEPVn7GBZyz8KooqZNJ6BXz3D",
  "key18": "2gg55WiFVMr1HHUcU8uHkr4yBMtUGteeZvizX9Gpv1JjwS9jjx9DBy3WTpKYSa9tmTNGEGUhMseE8dXvSkks5tvs",
  "key19": "2BrooGAuXbBVjM9XFAnjTLP1GJVH7suDKs5P1nqkr4P7tFWpfdomqbMAmCPS9wMgxv7uiWNgkA6BRz8CVDoFzEMk",
  "key20": "spMQ1JnVf4ntJFSggueyxXem4QPMkodbUrxbRxb728bmSG35CtXy2Z1w4BAqqniq168cSWpsFZZ7tHL8ThPnFQQ",
  "key21": "3BiMYwqedEw2iGh6RKTiYKVzyEUf9CRjNQJAo5yEHspuSnx6dfBKXByGqNsA9228X2h4Nhvpun7VEWHTtGreGsxj",
  "key22": "2ZAvd2cKA4T6eafeXfto22QYmc1w6DXJKBUeXfdz5YKRHSc76HbrmaZJvKCoW2mNudb3yY4SPdT17hoKJLm232zB",
  "key23": "2R1PULmFz8imG1gvktdVKdNtegUiVTYEVZfdvn1hGVvNqxx5x6ByJNCsZbS5HmCENuU1sVP1EBiNVYRLvBkcTE1f",
  "key24": "3DCLNbmcHzhQcsMbgerRjK2gp3GYFQx3VDkQes7fHupUp5T4fNhB5JN8SWpc8Xow6dbCjheLQ79FREfPziPgy4NC",
  "key25": "374N3N25jFwgRBWWEesSPJEkLSvZHYNi1hbCchXgJ5mTqWGjbRmJUJKsshiCYPEEc8SDeQHV1nSwPRJeqLjYKpVc",
  "key26": "3NBEH1B14Guyzq2KN9h4RWfnV57QMaj3im4YZQnuZpCLgJrU3t6hdSujYiDrjLXdEs4Eo4WhJQigexC1uTEVQqkQ",
  "key27": "417e6Tc8Yz9aXEvP9tM8KG3NQ5pSawTfp67F4vYX7QgqDijo3oB5bBdA5H62pd1BsS1wkaWW25jzDvcgGfU8Yoap",
  "key28": "5fPepC7NZwEoLuYesqjAahiGeC7VksNuunT5NawMaD5n3yAsRhkvGdf8C6h5WpypKDFKjA1YiYjmAqDWsfc3qEnA",
  "key29": "3MEeQFmh1M4Xay36BS3A4H6tMWEsaRVufm4x8sB1MgHDcm6jbTNhi6vRykUaXVQmv9epmxtcTxzLFqUBWuBmBRBd",
  "key30": "4pJYvjBcBPDLUW9BRacdYE8FfJRrBknZvArHDzX5vyXLyuGCNtWnQP9E4anbyN4b5QgiTQV3ucyJMDZhAubC8BBK",
  "key31": "FY8ZkEbRo1dJaE7EposkpDQS6dTwxoa6ZikHXZK2QMXQzWwZNjsQvStgfjRgDtjeU6ZJYawDR8tdXXjMVSVKxwC",
  "key32": "2N1RRXbqpbTMHvVmEhncqZpzdC58xKow6ZnKQKT4FnXSTWjyZYd5zgcNMs5LqsgjJzuf4TUHsEAkMvSXAGqUZvuv",
  "key33": "3hMpmJ1Z4PX3ZUne8RK2Bx8gyVPFhF6DhPwCcJdAzArqanxdEEANeZysG9iDfkmNAKf5bcC5GVqLtQxgovxJKfLj",
  "key34": "3zHzQQBnJQd5K26swzVNcoA14ttXfkxzwTxvq1oT8yBfVs8PhAKe6kCpYKWiC3CR2bKz6jKb5rq6Y6FoJkRHDGT8",
  "key35": "4NCqT3jkBBcZm3ByZrmwSuNRZx62X2FLamkXVuPPQNVnzX5fBzASiWkUhGBDfzWdpbVTCnbaoNm34aYr5KRNxv9T",
  "key36": "33b1PRNeKgLw66UaKPNe6erSq827ezNqsfa65q1y4AYa828TUr5vsTY5tD3GX1mwontehoW74YS9S29Z8shZkZng",
  "key37": "4kq84WrNWKLqkjhktMqXMMZbervBD9zJFGWyUXEcu9puFVKaCChJX8eh5ecoR65BFPYuuYr2hG7RbjVuqfftBYoA",
  "key38": "5cuGDKJ9UnKQFajCtreEjvN6TgKwvfhfvCZEbLvMFo4pvXyzaYnvvE9iF46fvUPox1Y9psEFzAmLqMHZ78rYV1su",
  "key39": "3KwGvqcEeFd51Zo3ZbQcgs4PSmnpfdLSijtWqimpnEr8mJa4EZW2HJY4q8UHGrAwUxVZX3FnSPTstxeBBctnNWvb",
  "key40": "464mDM5muFapcw66uTHyHc2tCXJznvEWohLmo1qeTRceDGuY1iD7Sp5HuQVp66kq5gxoXCaQr2yf8Q6KyHfffuPH",
  "key41": "4pDATn7nUqeRJa22rLPD5cG2j153SVN6PPz2yT2ZMzcDoG81Txm462M7QjhqXmS4Aft54mvQvsg7WtmSE3jcbzAi",
  "key42": "2DVaS3sFTSbdTnkKBcrbLvH3tBkg5PMGgUUx2GCZhLW3emcMRbKS6BbsoxNiWoSu3PCKAJANp1wQurEmP7hsDY2j"
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
