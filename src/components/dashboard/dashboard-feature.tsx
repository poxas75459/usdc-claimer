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
    "e4PHv87pkk7ijviSzTP7ea9hnxJtLpbjJUKJhVqe41jZN1prKxacXetwZ1SQJ9P3gtHgMvBasDLsP2WDdGqMya3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f3C5Fcjz6d1HNFuYVu6rBFMG2wpGsxreWc7UpvqkdFwEeiqHoHmavPxXBz1ecWKMbZyTnkirnTos8x3MXbzXB8U",
  "key1": "2v7Dgc7HRaw3BP5Xprw63Fiy8iaon3WNHsZHSqU52mx6uadBqCUezRyMU8VLVkF229abiTvZ49jP1DUQYKWcP8tU",
  "key2": "XRu6PVpqAxYRs2LjEQRWJRCzqSs8bme2WLCK4vfPNt4pi5FMyeFHa8ALJjHB1ootBE6NVXgT7TCoJq1GeYL8hUb",
  "key3": "5qeeAniAtV3bp3pw1qqPTVtawTMMFh7zrWu3A9VjmcFakXqCnDcJWCJRxkyzACGE2rWc5mqW5RXLuW9fq9CiMNNF",
  "key4": "2NfWDd54nJsfHSJFoNft5gMnNyniJdz8fcnMVVQMH9FG45QFzXEYVCUhbKKzUoCqPDL3W1ZA33SCeYw82hF1kwPv",
  "key5": "4YWo2qfJ4KaECrpZ8qsyp4H8Q7kXAHYZVMzGXjuxdbZXXgC73DY9hkmrpzUGRV2puFCLvtofFFoGzS1EhZzarGUj",
  "key6": "pQPdDwxPXzfSSfRY8Vpu3wPouueBfj1bo8YBL8VBC4dM29BYyDwd218UX9stHP8SfGWMQU5U4MMman6DcPTAsXk",
  "key7": "uZqw1V55r8PKKNZCU4LDpE27H71MaKGKWRjW7uKB6GvFJgnG1uaPaPQnj5BDRYPKsLb6a6XUe7267AUYN1YxG8Q",
  "key8": "4YaUvgB4eR8U4vUQS2sGKpdY9WciuhPFkP9ZdaFHNNab2yXRhbWQF3pSPpd7QrDtyXdcG9iWi8AkahQ7WqdXU8BL",
  "key9": "2iQ4HwqdZESDvsAHkpiWqu6JjDEsjR4bHiCPpWV9vFJGkmWnbzQfuyRWxKSVu5YB3ACWqSdp4tmKVqE3Pq26vGdj",
  "key10": "21RTH6x8c1HxdE6XCDp848ScJUPXXPBzabRBHojUVsuU7avU9D2hgKEUvxFrDREJmFJDXAGM9gHfB8dQcw1foiRv",
  "key11": "4GgbwEYsCYAW21yU87aRh1ZYdoRcTzZcwMd8RjGMSULuD2a5L1EVM4XEn8wU38CUz5EHh1nwRsWxYqjnopLfG4vM",
  "key12": "4oKM6E6juiFccbJiehHuhxDJHY7wzQKHE63SDhNUCDsMoX6hEeXUSBZBjaZTFCbbuMEXmpSmeYgFVkbanmBAXPyb",
  "key13": "5Z2TgyGmX7dBeikZsKmHfjBFXTcgSo5TpqforZyXsCxMayrYaU4zWD4DbPdmXcK3R3adnTs5dUKeGqUWhhftBJW8",
  "key14": "2tMrFtTeUnkLUDaRsm1BusxtrrAeorUmWhzzcxzmG4RHchbiKFTRA3hodxvw73Q7WWZf77cH86TKdgvkxpUiqdcV",
  "key15": "2QBtwPG5n2RtnbTwkALBuYhmS6H4CX5XcxrbKQm6pWiLZ6MRA7VYxSGSzdgVJxkpCzHRZaw4QakY7kPnhKxJt18d",
  "key16": "22kEvMcwuoPSpMESH72mCstML3csZGMbicyT3JC2Cih8DLNcRcFiby4S3KHb832NKUhqS4wrDznRQwF9FNaGeXAL",
  "key17": "2kavx6cFG6j1Ga7vhxsRrBxP3KrzrCwQyn88KcW5bJVBkJ2ztjQVcymruhkd5UABeFAxkY7iNneJSFrLgHoECUao",
  "key18": "5zvUft5Z24QXBEt9oP9gBqwSWfzovv5LDYcH2PMbBm7RsJcCyoFbxPKc41H11Be3ahisJ8j7sDv4FrN2nqeQ2uBN",
  "key19": "RHg4ihNrDsp9ZQeFf9xitzagmjJL9UMgqm5rr9HYqe5vTzDgAQ9giP8ijbDJawjH1bL6sDnZemXyPcV6anAfeQn",
  "key20": "5vgerdE6y3vzeP5jzAgdZzqqPP8txY7pUxkUFg5ZFGrBtyEPY5a2Wir8HMwdu8oeAEDYQGYUqTnjnGp8Csf4AXmL",
  "key21": "5aEVtsv1J2gguKqqoGM6No3jtKLWd1JAdrcTHgXwVTMQkigQ6Ru6YsQRcwh5fXuemW63Zk1g9KfU5Kq34jBaav7W",
  "key22": "5r6cfqrgrqQVPZAmFUjavNVtg2gkhHBhCJwb2mJYctJpUCHp8reyvCs2Wpp6QRtLEHGUQGEaqzythcRAUCRdiAwM",
  "key23": "26pGuVDEsN1NF72KmUNvQo3CQ2reqsMNaiZK8zzqpkgQtKa16URsuQszsjPxWZ4HoSuiSBCwNko4rG3RMjFEsRe5",
  "key24": "4HiCtWErcGfsVGHNbL7qZojihi9LhruAGxfgPPxG5KgF1GJ24UHDK3KmYw2e2CF9aD2nFSgP6thmL9mGbwd3UBvk",
  "key25": "377bp93ZYeEFForcb7n9rqnPQf6ttZQsAm6zfcU7awwbUQstJB9FFkNW4gUiDbQHCqTnpuZqB362akrP3tLLQ4D1",
  "key26": "5Gy2BmZdhxAgcYt1bPaXGMUQnwJr6qPDiBwSboyuhrXXQHHpfwL6BupY3QzpeBYS5ECGsGByca3GYbojyGQdHwwp",
  "key27": "meAnu8MfLe1zWqtP5Hvi22JuEUAyif2CEeSvhV4hWeKr8MvqvywX9jbnhjY9jqVr7HHnmPNqrCCrdA4ZRJHgF9U",
  "key28": "2Qbyg7htS4hFAdBkCu6tJm1u7uMr8TsDPLwEMQ2oUERosWD5UThtzfzJMF6iSKKH8b8B6UKehqL2QpTtejYuSei6",
  "key29": "2DhWzBGSBS6ZsW52srwkRa2e5LbUph2p5Uj7KjUoGdjZvHBhWeYGrqjv6pBoVj1ktqxFd9nUirCyvX7TaDPn1h98",
  "key30": "2PcNMo2tUZsoTcDr2FWjHAfEQ6fvvNWm1uRE8tzoHaoBjrXk4TjHEEf2eE5fCp8wxzcPuQjMwAWHSaUKtTWyh7GR",
  "key31": "5wXAr5988zULvicqCztUjM1AQd7Zs2EmQR1B5aAZZpc6cf23dCXYjH1uZnsSUgR3HRbA3g1aNsF2WgxXjWKKGnQD",
  "key32": "8mv9cwgNFT7FYEo4UnDA85znbxfSjprBmQSBHG3HAhV74fUHBaoHi81NAfhyvULeqkBGwo5erPDupE6TjDK5Hq1",
  "key33": "3PoWjFKxrRDvQarQDV2fpTmDqZedMjtuB9Pn7UMhhBJ7rsK12t1tfXUdRGkk3rktXpP74fgkp4KCC5jwhegExJ1o",
  "key34": "43uskx5DAPo5Fxuq4dTkukKGZdpft1QpUEBq8pYvxcSSneZv9e1NuTG3NxdSWgYh2mXWPUVHHqme97PWh3ZYSQKH",
  "key35": "5LnRtFMr9gfTwPxq317f1mjocEZFHg83ozFQsZrRLqWZ2nxyTJ34HitNKoYfnPVGFVQUsiVzEohkbrjzXGSHttNs",
  "key36": "2xVxaHt6bKBJYjXihvMcE8UpHMFrcVVy5wnXbCzg1tfid5fC2zhaszyLRGXQN8D5aBqjkDy8BRXPg67DTf6q55Xw",
  "key37": "5Ezg4FHvBkATHissqi7owAj1Q7s95oafWm6HZrqrCoTC7AP5fUm5BMU8V9E4tG4WQWM7SMUjTZGjhejob1Gix6Z6",
  "key38": "3eUj4wxh77o6Rx7tf3BVn8oYZYGnoRzUUTJ7tmsEf64aLbicxzsGtSqJbnfrozcFc8U4V79qUQyswo6PbqScHGT1",
  "key39": "2JLNgPCtQPmQ3kcJXMyyv9rPPhniVK3kJpwHsiVEiumaKUXoB5qa4cNd6hFQj6G3tyyXwQ6fCWrW42tbKmnzc4K6",
  "key40": "Vnqa4BUfS1RrztCUxW4VzXn4PirtBSqdARQ5NCLgrqmc5PDNAeLfb6zjNB3ZVKDbKEWBHh4gExg9VE31bYEdkVp",
  "key41": "66gHywU2wS8Y9u2yKVjj66fnh6jciJqq1SEPYDG3jbbBujRaEYcULPNjWowuebYQLnLs9D9Z8hvyGQXqjNo1LoFE",
  "key42": "449QuaV3QwgqY4MDxm4L9X3cyokeQEwntiXiW9eLgbm2WjZh3BvtmW3YwSP2bSFHLpUfX74M6vbHJLpSPia6iJyh",
  "key43": "5AeW1cXb3xavcSUeD13qACtqLBE72U3jWDSBoMXDbwRGPzZu7gouN4Eki8mXNqy2wD2xjNrXUAoXWxmHtEixGvv5",
  "key44": "3EtuYwzYRNT6469nhbLR586rHKd8Z5rpq5qKLTu14uigpkHAxP8ToPWUBb8bjqvLredo6yAcDyDnKXLjs6cLAHxW",
  "key45": "2aLEje7RoHmEGS3wnaG2bXZfFFyq3nAizuwtvegdV3XGj9cB868tT2GdUqKjL5CXBqTEnvScgUFd3gkWqRDJUU4Y"
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
