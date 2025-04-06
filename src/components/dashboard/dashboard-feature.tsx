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
    "5SemFo3q6RwM3hUQTiH8YDHpR8m8p7GXTvc6FGVzH15rEnLLZ44C6KgTak2otvb6BSCqwTcsrBFKkxkVctoCM3o7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49hNr2WDi24vY4gemDwxQHCgBhLCq9TEjXS9KauZ9KSiUzaGAvW8HZz7m5ooguxnidCa2Pw6ZN4vWMS99qXgnByY",
  "key1": "34BvpzCAYEyUaXvmCNGmaaWhmXbiQXyeTzZgL2Qtk9tmVxrs7QEYfJQ7H2nPaDGNtwEtyVLWdPBAsr5yCdo8tX7S",
  "key2": "5wnodUxvpNGMBF1N5JC5e5NkUwSFCLRYJvKAGvRiARja964V9YmsCQbopkjP5hpsxWMWoJKdc62KMN785qYzwUtm",
  "key3": "54vJp78QuJXUCU1nEfU1ZYnWnwkxeA1c41jUgyAyNn8KZZqoHeZFZP25w17EquTjnnxDLn2xrtVxKvArz7p2VLH5",
  "key4": "2KnBbZ5TbiCKomBaBTorNc3eHDoDqfddLTTgQv1HLwvmUKTqaFitqonmcgBooCf4GZynUaPQnH62UWFjVuyJov8X",
  "key5": "2yCe68APce89UGU9reRTe9jA6V4j27dnAQqhEqhfAeQWVkCj691kivjXU8LXHDDGAHLbiY9bBznmTyfn1RsdVc3Q",
  "key6": "5moByX42KLimEg4dJvTu5CPNdqQiPXhF9AShQoPkbCZbMtajEhp561iLb6gYFcDZ72pP9K4KSrT1BfjT4tPTCBth",
  "key7": "2j7gaA32HSTegj8ALHRiYezaDXEYtUj3jQD9KmjDyV9u8oQA2XfnT2y3XfAqtYx6XPAgntr2eC6xgPQ8KFkgtBYG",
  "key8": "4LHSErJzGGmEtm5q6t6RfzJ64Nw19R1RyittSSqCBMPjVYBXqtmKAkadJ27SPuw6GBfcE62uWiBo4NbyDm3ghihM",
  "key9": "3p5Tqp2QTYks7Lx5AVvpfNQrwSv4DTWZdC3MCNSRxFXBcP3ZjoR1R6cD9TjMUmnyvH3mUBvPoJQq4u89c9XyKVp6",
  "key10": "5DM7LWDe5mgNNteaH7mPg5N5UTdZW7M3npwEBKiNcwCkBq9GtRDcEbU6nMg8i6kNDkLTStjebJeF1UqR2mF3MLsT",
  "key11": "3PsLNzEZL1YBxJtsqeJWNau6GCmaV8736wM4uuUQXrgXTyLvWiFbNKSXAPL2Uw6WNZ8BPaP67mgZCxsksPkZ1znP",
  "key12": "65JqPzpgSfkGH1ZdQhWzZa8nKA9X2yHcSDPJEXt9GGKQmQuFDuDdyw5uRbir22bBqqtXRo429SJGrvn6gXMrdqBS",
  "key13": "5yamvjBd627dEJstZDbDKVz86Vck7KwwEX9KqkWwecLvmGtV7wT5LhqYbdSTz4EhUeXdsXdF7KHrdytP44fhPVk8",
  "key14": "Vb3vbgbCAteVNZHEwgiDcQRChHz2xbnCYbDDEFq5DTSJ8fDmz52nn326VyFww4tNATVL5a52RdrMnT4iXQdsNP8",
  "key15": "VKF3b46ukRbYbQTLAKHMcBb5zQ5iMCxA9ptkjTzo2q7mQB4jj2AqfTwpwBZQ2vz7K75j7KvChXQpdqS6Jcnk1TK",
  "key16": "4Vxx2HQfs6qto4WESFCVz24QPSUKVe5w8HxwqQ9NKtg9q4xG3CxphP5KSy6qtSF8kfehZfNb3hzh5B2rzFQuUDPc",
  "key17": "2xjLyHHZCn6rkZH7BamqqLoejMxkjt61ZRrEnU7x7EkH6qZo4iPXn87X1B85qprsJvcDLm7b8hKhRcQbqf9M9Jun",
  "key18": "agPaHh1kTCh4JAXbTrFcAKFxj4sWGwH8x4mQt6bQxh221G4mF6cmkm9kd1VXbFpudXcWqcpTPVGmCJvv5Bfht1D",
  "key19": "5ScN1CMtBNY9QNgc8BzagFCJRbkP9mctiZxjjd1bxyc6iCipnZuG2WFmo4nrcjxK9EsZnh6dvPkZV4YugdAhEZzY",
  "key20": "3FbvEHvBvxFtQ5tyGbS1Eqk3QvKtrw18RpyUoKCZeYDuHh6NuakFe8Ux5UkLoTdrkP2TBm37Q8N87PU6R6AJLWpg",
  "key21": "5DVxD8LnNuFY5echZyaycjJKGwMSeUumVrxiSK9wxVZbmLxjMAaSF1qPiSUuEKvv6Ps9fuvvKgeNEfJYVEitzAx",
  "key22": "4Wbk6oUGxZkKkzU4AEQJVHF9Zhinjv8PNUihSfNk6vZfR8U6uNMFkenEwJRHUznGqYR2jDtgZmCBDemvnaWBT4tk",
  "key23": "2VjgsJtKVkb77r8GnhW1E3CKDWQWHWykkv8wjJuHWKFKn97KwQ6usEzySbFKFcczFqP58aEfwAvK7xSCJcAK6yzK",
  "key24": "2KHrUFq1drXznmjTC8MgZZCSDvt5ynGzzTw3Rpahz3y213nMyNquDEQd8EqoQ9A9yMCUsGc1tqgQfL5YRhYXGTqJ",
  "key25": "3GFrCKM4ir57Dm6apwacivdRf1ppGJqTAvbX9uBTkG4JfvBivspcUVJhxvPaXnFXpmuyXqHH6juAU8zyznY7wPHL",
  "key26": "6jqysQDb3Y9x79F8grGyrxZ3F37qwXjbCRrkF2Rgx4F9RdZDF2Ld5KQCgVqy9yr884poSMpK8HRvYnfudLM5HEU",
  "key27": "5sgDJNY2LutZF7H6mq9qW4xWGCbGxKJAi3xfu1WE93FJxVs5Bseig14pUWxgfeSovDpqd393e3ks3ENyRUCfXYL7",
  "key28": "2ZhEB2Z4pSmNPQqmpbKp5MHXkzNJWq7g3sjJpbsULwctxQNGSyBC3tEuVsHNCTQC6GSDrEB9rpQQC1ZNNAKSQspD",
  "key29": "2hxzAjVPvsZTnPHwohp6sMkqQ6ojEdGDvTwLB8nL48qKpkKVvBXYNp5hL3hXphuqq9TcM11n1Xs2hPBFy7JwTZmi",
  "key30": "gkiXkWK4cK6g351LDuGiBshS7r2MXoMLtUTKR22y3AxYjHqCSCEZqMiaW3S67yMco86Yt8CFSTAPyhv6QdV7QUd",
  "key31": "3NJ1Jn7cz6hwUYUW5Z6hhbjoePXjb9GnhcyyviW4MgeJh3AeMpHZiZEQhtaLSm1BHotDzrd1btrfP7sfa923HRzt",
  "key32": "59z3zwbAZwsJse33pr3Pnmnqy5FocNyHaqctLddY5ffQSt4yjiQCn4xtUCTVgdhzuYcpcP5LC2wvF4zDQ4o63g8G",
  "key33": "5MQS4PMa3cY63XcyYH6qajZGoTDgZAV7UGvWHB9AcRVQ7Usq4jhvwUMFjuy2GPWBNrmFaNAj8UtSN6gYneZs4cLQ",
  "key34": "57Tki1mhCKdsHojwQNRt9kjk5gY3H7PkALVdzPaAgYPY1ysV69cP9wkxLkvzo95NEkSg2TUck2uyiw7ddmxnVKtw",
  "key35": "2hdCDcti8THk3yKUP3xKgu8W9ci3QoKazw1ahGP7Gh1YFhPMiCTyTQgXyo1viZQqbQiqdKpeJbdhDPFKbpqsWaAG",
  "key36": "4AyGAeGRiKsVfMauakgTHtbB6MJXtMGc4qeRuEAZHZW856jAGJENu5akLqv5f23BY9nmsKv5LRfpVu43K4qce8Pz",
  "key37": "2X7hWpdNEkzLtHYy6XdhmGd5hKA3MwfmQ2H2V5hnXrT7L4Xqo7LF9w81q7BQsxbwRYpW1cm5DYnC9fRgqNJoevGc",
  "key38": "56t2WDhM8td7Sdbi6oE8pxuKi8S2mKuAYiM6rGZxNALRuMp2EJq2mMVBcBzrjH1AHTk7dJkPWzEeBa21u4efaAWb",
  "key39": "46Do2EuVuVVuQQHgxzEZuQxLVpVJAB95y6PewSY8JMtcTjAq6Pv661Vrc9N6H7hf2RaiUNLBRMezKWoL1qs4Ma8M",
  "key40": "5uepz4Vr8aWMiowoqgm24wDgeU2n9ZYf43kzvNZYKzNekJAsGQCvCPTcPwpdVQz74NZocUBBvSgfVARvPWN2BWV3",
  "key41": "ccT6yJGzY3QhxtBho337EeMuQsxLz1o4dGrWTPZfmakJRa1QmQzhDtjqMgqvr7cecxexo57fLQM3ZgfB2e4FBxv",
  "key42": "4Zbi3FZi9s6CUBWhftbeMXCTu7j2dxF3n4NKwWRsRJoRyioFoLLm69YfDVCn9vD4VGLPnkNmvq2PRsUq5YKVGaZQ",
  "key43": "2PFTrTRgV2V8NvX4gny2fJk1JdpXyPTmUiE3L3AX2rab8t16fBfD2WuxJkDvmhVWebtc8v3Fn8xiQ722gwVmKjzK"
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
