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
    "5gba25hqYqtDDwgguhP3KMDC1jpDHYbxET4YNcCCZEE4go492WY7whGmtpMw5JeDziEnXx6gTUB8u1V4BdDsJ4Lm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57CkmRSDh6vyevEJ7n6a6nFR39Dd73Nj8yM7KLF9DGTfsMWrMBWgdpcmKgWeM5eLwjNFJtpwZM7ezTNkftNcTuSq",
  "key1": "2NiZ49cbQZ5vRTrsaEHA1qDyPfDCJ5RSEJ1HPe5ihoMz985zoKYEmBtSPspKyJ2aSCXVUWdZ3GCR85bkmPDbZtWZ",
  "key2": "3em7efRRDCBohQmue1XvJzdarEVpYCrSxyf1WS83zmU4h9ybsnRuoMxiEbXmjZYriNw6vWnxvnJpGq8WjybsC7j5",
  "key3": "2je9KWNTmSyKMnapGhnC82aCebL272w6ubbcHfNg3f7VAdG7vEarQMe6spFSdXD2g8xjzfLPmiJ2v22V5beZzjEX",
  "key4": "3c3gkCheS25vJfQrapX5QPFLcM2X1zTKJoQ6GuHnTkMEQfKqQcwBWkni5oiZtKasiqqJgFMzff8KjLddDwdPBU7X",
  "key5": "3g4RGxhFxkxkdC6U8Vv4xVDxpsNLoEHxQ9DKhCkvqY6bsjpr2LXhjjLQeqUXZGA2mBgyAE6nFyQs4D1tDR2SuxyT",
  "key6": "3FasSsHyc7oevBP3xcLTKcQASEXNqCSDKUxvvZcWukUH9CvuFciTry6qmUoZjj8jT2QVYyBSFmGKt9jfthS452Qp",
  "key7": "YVuioswEyDdKaGveQEFDYjWnwZ7ZKLQy3ePHgxvfrRiGo46wmVM3FE3vSJSYDM6GPAWVDvpUQEpmoLF77Nt1P5z",
  "key8": "3pUNzQyKVtWRioAfvH5KwS6ud1yiJeLdkezeLNi9nCYrv7nitWrcXpRKcZP4LbTm4xMpBK2gPfzVDWzo6pW5ZbbA",
  "key9": "22tZSCM6Lwyep4KszL8cjZ2JVVop5TGfJENx4sTKraTcZrtzo67HFVR3bFx9FbCcunNd5P3FvDcsbGthkDWGkmgf",
  "key10": "4ngTkKN11QyV3wyiW41C3V5hGGqe7htVWStBwJrwjW9F1e7fGWL1BkSsHNDMQb5tCAG6N2R6VRN9CrxBf4LTkoPL",
  "key11": "3czXWpQt6pSSqjnHidWGXkYCYNduLRKMz1qeFhxoQUkYUB5Up5nMXZkjoqStuKZU4kA2SQy8n8ZrbWkqSqS86KFs",
  "key12": "2Bv5TioREw48oRiwDzrWXmGSt87wTTsVr1VwiPYJFrFanFjwEZSZfko9RaSyJZYFZ6DTMkty6BLjuStdbc5Jgpn5",
  "key13": "5kWXC15RcGHC2xLCzvXdGgDMVt5iutJGKCLnTb7XCKfxtUJnupDGN1YRStywT8pyVHkgZjSsoAcG8ay8c4pr99V",
  "key14": "3uU2v5BaYsxQ6Tp9wZCH31miwQqDY8jkCrcfRTAQxhHFySQkESnCRUr4DpFTua1rR7n4qXSbBPdK3ikMagVjTjGp",
  "key15": "3SLhEPxd9FNupLrym34HHNLwipzXcxCJXanazHHegc6nR6HaMqTry4m77BNDxdHy5oNGyAzvGtQpHVbdpB9znQZu",
  "key16": "tB6Ci8dNH6naQbDQSapy7mrih7raG2YL8RtqV3K3d5Ck7HYQbmhn3WgKqhnADG1nWhk2p4mNNzAaE3KH8dGrzqj",
  "key17": "3MWXR5ZmcC295DzqcQvSzrWnphdFHcYqShCtMnT3ZS8vgjrh4F7d2EJ8DGA3qii9htFVCiDZLfmE6R2onvPKLSJg",
  "key18": "3PfL7GAkrrLXHmtQEL1GQFHQVHLrYFLEXY2Fba7Y4rcTCyjTSs7VAiEzqgi6UvP3aNLz2s4FxtKk1ey3cRTEnsYm",
  "key19": "4rZv82RCGgTAfbbgqznnBSDEM59BbwcVEv6QkE4435RTR6GT41LkAH75ma1vW5Dd9s4vnDRdUxbjtCMRQ9UwEQwk",
  "key20": "4Y83UqCnS4Nt16ZrVP8iwy7vy75ui3CsVJ9joXKj1irNSjQraiH47ZJjtsYkTf9aW7FoCufcGvPCztz9JVQAM95X",
  "key21": "2btYAXjrdEU467NMBwxkMVgQNdPZmX71rYmGWxfqjfdhZJ8acxjmYfCKpWwea1QLspjsSV5ZhzrNZ4Z56NQurgux",
  "key22": "5wbtVgGDFWibtWGVwAtr1621gpkYG1LNTc4SBhwojzbwFpEBg71UCfV8nPP3YYagC7u6AmrKVHvu1dNBRJ4V9QfM",
  "key23": "3racvpABTnVo8BFNSNdNYyCrTmHp9YDusYqpWRAdN2j47XicpYH9BmH72tVjo3ASYayFS8NQSCxPdKV7xxmu1iHJ",
  "key24": "dLL6nHSoBBTaqJRbyNeULGwoqgAbHEwSbTq2FfFmJKu2bUvy1e5FKbcRq41KPoXjNmaQ3FNnvTY5MvDkzkJfkR3",
  "key25": "4Lf8rEc89HhsvXDt2HrWfoEeS8bxeZ5TVA2NET2GA8rDaGt6xwPqZbxxrUcR9xNFfC5qFJi8Qd2aBzB4Kxhi87vo",
  "key26": "5Wo15vduas92uQ6Z1jvNVNMAmfdmW5vrdRjfeJi2ZgxjiaoEZQbMTiaQBnjhYi7RFV1v2xs548JFsH2fUNKvSA42",
  "key27": "4TCJcg4HAgHaDW1RLm6MxMzPJJsrQNK16LvA1GjxJG8xi9dTerrKKNL7LHWc2gRpaAaiWQAjtzs9VjnL3ptmHQnd",
  "key28": "7bfQj4UJdJLrCUZiRXYGtqftR12KHUWp3yCf6gdMjmcr3WJojvjT6htZSqLeqNJKukTjRwb6wBcsG9jeS1XjR3G",
  "key29": "5RaZ1dctiVt2DqPyHjZB9qMHGFMNPib9uDw8kwEqcFjX8cGuzMKzy7KiLNHXm7dN78jC27ASWGSPs9UBdBNTfGAJ",
  "key30": "4nsaCToTMQ75jdjmrjZ9HSWJ6xKG9TMCPQQQi5jFy4M8XhFe9U8Wj26uid3pRg75SqHRrAEZpDkJAn6ZB8PHfaN1",
  "key31": "639iD1ys5QudSeZVWX8KdzYtUNvXYJYE2ZLEUk3qrJezLQPTh65k4q9owjVkqLSqZtdE6xwv7nn2cnBpBkihKcSm",
  "key32": "4axNy4y8aJkdVEb8TuKXCfpJzCBgVojo7HHB8W4zo2xejWPCsJBRc4ShRA86ZYiwNMZpNtyqJH8pVNKVM6va4eRw",
  "key33": "37sw6VfKgG6ik925V3jtGQqxQQsu9LKB5F3xuVd3iQB7xLC6MAQhS4MUHsPuGQZFqZntZJGV5irqdDvAEPsCqJvf",
  "key34": "22YDTq3WBddNHdpPJbAZeqWy9i2ysnqqEYofNUogcQ6S27FYyecW5M1dGKuhHaXLAgS4422ts2ojoWs97bpwM6FK",
  "key35": "3VHFKjTWjGbEaL9qogkk7tfLR2NrAiT7napHZ92K14bdu2vFKUfJMi9zqUxZKF5uVWQcyXaN4VoWD4KsfnVaNZNu",
  "key36": "4DZCcyhTYkedTB1JvuzqZ2zeAtYrLPTodVuoVGxMfHwCDwHCQN5CZyT59gvQ7y8DzgvzcvNYFYB4J6HPAq6kvY8a",
  "key37": "67ghXfLivBMi4CLPwWLFauYcMvYb86fBbGJwjUe1DBQYdVLTSVVSQPpujuVH9VRnPRp2KnSKZwbNtUqPMS3JcZKZ",
  "key38": "4LccEaV3aJx1qL5dpY8iMZ22M3fbnPzzicT5hvaSSrLU7dNdv2yRxAYuAq8ecwgcRHL1ptqxQMyjQfev6sQjqktk",
  "key39": "zMe3aQyt9AAbL4kiztXRTPdXFxJYgFKiRJZAA6wXNpKPb42hsFeAaPY4LHKUH5qTQ2FBk5EAAL4ikT4AUgjtUWi",
  "key40": "4tKz47hwohY4Jqf42w7VVr6h9ZHrw1yA4s7WEqqwrtKHRfzUMz7h9Kj3qdzdkAUfD4169d685D2pqMyDNG3gjkak",
  "key41": "3qwMZAo9tWiE1FPeoz6TmSNSwnQYwvtMEzGX8k4pnNr9pq83QcKZFQG11uckQjZ5Ky3hkEHSMsXdNohqWguhfAUX",
  "key42": "5HwBbTTpY33YEUrPBkyvQHKdaUW8gLDPs2ePMVyE8BRHzxR5veX721LToabddAST4GuwZQnvQaSArysmxWL3Wddj"
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
