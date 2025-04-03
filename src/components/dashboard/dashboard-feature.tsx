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
    "5E8WvuCTQuVSBgcB6i53JPNewKMYBsjkaxXxFZdkHbS3mWQ2oV9SrdhrJE3Azo5paapAsEUhDXj5nyk8HHdK8FaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kT3yFmvgnR4DyjN25qN27cwwgZVcf3eJNaj6kmZh7HkFnhZhwhJEukFMZoisiA75RLKp1RzxaNTRTyhQYTVhxCe",
  "key1": "3kp9wY7BdfLQL1uKKqWxCR71SNRqnWEyX27tbzuT5g1taFBgDkwfqMXsuXP4RvqXZduWsTcxNcj6VptPh52qvyki",
  "key2": "3HDyKFcwvWwz81hooTNziUvkxg26YugTqzModez8HToHrL31UyKSSNubgg1jzaL6ndQY5NFDYvZB8umD1QcAS8qP",
  "key3": "5fCHyG29QS7moieNEJywbdczov1UfLTeCFHEKCvA73SAe6v7finWJzsqESoxT22D4EJUeFBJCNeRSWxpvkiupV7M",
  "key4": "3NwCRVaDXUgy2Uwgjy6qDutZSR1axim5Q47EZGoCdMKp1gaFDLRyiBx6EmiCJ2hhQx9LyKc3wAoxHsBT5va73FxE",
  "key5": "8CLmnqL2W6B7WdYB6S7kteALgUUwpWV6FTe9teZBKGYEnWjVugwfo1oudDoHwfuSZ1LLLfGYD5MuzRV93wWCojh",
  "key6": "TdM24B5YGeLduwK6QKgvFEarH1JgZQLNK2XjSzecHVZXsQNBMKejtPvb6e5RmTDJdxnZiX5LCYcUXaP25VyAZ2k",
  "key7": "5nGeUAYWyqVvBhevkTDk1Yv4P8qoU67JpkJhVWYPq6DKVEn7fUAwqLb548qFX5o2QP7CCWDfSvpVTHuSX4Wm29Ky",
  "key8": "3G3yRPFEwsZgsYmpBv9U2d8rvitCTkRXW55pa2yPJ3eBcGdchfJTWvnVv24Z8oQhW36kE1EuzarG4AxGDfoAmdip",
  "key9": "2MkRdP6PPitdXgt961bYijTUMYA8XVR7FrGE9mBHpJS4kFXq137XtCSuuJr15mJHo7xhgypNoMmJktDJyoKMx2ZR",
  "key10": "6VvkuE1kk5RdCMrAgMFvjqZ1ovRtQqjd8SRoS54rZN5Krih5FfSPVRSRvKxNMCSJWL31xcRYg7d5Cfm4QftBhHY",
  "key11": "UrgViqXz1y1Pnx5ACNhmLSTKzhpjCWPsMkp37kdHv3GbGmUu2Q2XKqvNvrvjTGi2NVvYJJysCjPoaJdfrCmacbN",
  "key12": "2FSucvuuhkBfxGsxajknsWbcMYNUWLfW83BhhrPoNCLQPb1LEiiWBYST26kiH3oKjj9iTBmU8KrC8qjDKKGMjtfw",
  "key13": "2YFnX5mQbtW698iYzoq4oSchG3uy6GQvLUMhK6ewi8hdN8XijCittZdfThijGJR8BPjohksJDsMs9kPf4P9EEWEH",
  "key14": "4Zaok1EG4Ckc3pWbQoXd7NyGtWbLKHcf3UL43YkZKXNVFQA5w9TNP2q2t6VcPDTkGQxGr5E516TQ83VBGNrn9Rj3",
  "key15": "CZkahwWhXHKkD5TvSypWuMgURC6Tq8N83UDkjYsooYkoJPr613jvW3Kvsk7VmZZQwEFGQdSACia2oc9oJ8UK377",
  "key16": "5rrVySLYDqD2bCXmAf5D3UCj7uQ7QYzocH2sv5YkT5fahg7YekYJ1JTnDDCpDZKJ2xbxxuLPnb1Vuh7PDLb3SmtV",
  "key17": "3zYMH9QP11NPfb87SUsSiZg6N1XDmLvFaUmArqVmrKf4cLPAVuQrav75bdXYQA1LKBLLDXwk2JYy8hPXhtSWnkmj",
  "key18": "RU9K3j4jbS7wTwPkDm7RLTyj1ZA3gfzehkeo1urwpMaYiiV9Z4rmZpTqrrM8dKmKCkoWLcpg7agR2Tp92yBSo4U",
  "key19": "4V83JYzL2ohjxnQAVLkFAWvUrkrHycVru54oznzfeqAJEQU5zp1Z144m7DM1dC8LzfmjPTvgJkfhgDJAxZrmC2Wx",
  "key20": "3k8XuNoCwHsSSGPkie45QgKqknGbAh6bQrDSegDcYhLtZYFaCeUWruDxjxf9HRyDzBCRmfdHwYMgAoZsDDBPEQkp",
  "key21": "4Pe8mLirPJ6VbVTRiKgRqYhE7jDVQWnU1Zwggbtc8oKhEjkKX24o4LGf9t2TqfVUhfkint8gLCvdRiyR47S1Aces",
  "key22": "2dg86fibrfTjQ9FbCkszAzX4XFUTuPjRhzdQy2pq4PPw1DkjdEjHy3fu8jzJfQxy4os5SzNfxWGukmppksERgtSW",
  "key23": "3JL8W8fdtocmN2VFFgDo48waEeDvFiB1mbRmjBrs3mrdsHskJsYn6szfsUR8YrQcgKGuGiRPpMsQAcyXGVF8kX82",
  "key24": "3zz4mQ4MMB9ei5WWTjrQUdju8oxNVAH3aefuo6AHNJedinpjvuvsp5KLHDCtdGy9A4rxXzGgBXq8wfkcwqTxjcdg",
  "key25": "4ViyyxmuEVc6oUmQJByWz9LryiNcikdPfit4wVf5d74449wKCLNfHwgWVGT4WFjf6kZRQdYGfGyvVBu2XQY6LR3a",
  "key26": "3cqT3aTdJ2b7yjBR5r3hrCLhiPA9pW62W7Ns1zHZJf3Eav4cyJUobjFHVsdnVHoxjKfav2gepmhFmMX82BBvbV7",
  "key27": "5yM7SgPgsDPtPtUkB9qEuFhu3djTS1QnFz48MixHpYa19wwqZD3jR3ktXNwwmKq8h7WJ1NWK6mHbyWM2ygLzf9uR",
  "key28": "2i5ZGVH4dX8qnFxxGtQTBSsgUreYHdGsA5d86FWP9YjGccAfzHKw8DHeMHiffZ6FPHGb8q8K5wBoYTpaP2YHqZ4X",
  "key29": "4oc2KJ1nmG5nQq1TS4knWPSP3vcqfNF7QXEovXy1hZagXw2FFCr8ATRB4yUwqiEC5i4v8vATmffqJdkAW8WjTQVW",
  "key30": "5TY1XrEfmXwWVnpCeVL3WDoVCtmzvwyhGo7sYzW8oT9FQTTHvP6o48daWFyR2G9EPVvQxiENfcnbmoYD9bVQJubW",
  "key31": "j2Ferpud8BmC9dLnRynLMJwN5PCXraGGoinihGzaigMsr1L74Pojc263ndZ2yC9BBAqVb53QYyNFUzfBGxtnV5R",
  "key32": "5JzjpwZ4969k2m91cbhuUZvrfmFvV39bGi3mTYuJkaXwx4ijFXTaidjn8j9dx6B1UzTn8ZMdps8RWxLrF3xZ5Ggp",
  "key33": "3qwL7cCRqDxKQspn6RWmVSJnMado8UKsuX4feSgYZCxUVULy2d73YdTPyHdaBa1Ti5hf8P7vhf71UfEi3hnLBkLG",
  "key34": "3sprNqSAUVyb1pL9ZdTrwMFqxs9EnhHSJ24wgsz5qw9fKhY8FPBQJJ1eBoDYJJS4NiAq8TzrXRb6fziipe4Rvyso",
  "key35": "2z3TBRr8duD8gVjxsmcbiCnTnMWXWcV1t7uATj9AavR3qbg9QpE1tL9UJVBok3JvRNBHxcbNn4d2yKLRXkBejAp6",
  "key36": "3QnXnaVtnYYqy4zUxLZmxjVfqJedFfTzWAA9WvhGQbPCvpbNfe1qfES5EtAypNS2iTEZrJ9VVZuEQScJv3RqGfxW",
  "key37": "452EhrppBBZPsJqzEnozYoxmwZd1hhFVdUACfTuuQmvBx82Xe7xxCmyRtbNpykc9YUBHZsDCtbFsCGK79DbvH9GM",
  "key38": "5g4rQnGX3gojeRVSg56oZtDJr4b1prnwVj6DfAAgWxWhiCf4Wb8Mu1NW2GwyFFT194a51Sp6Cr5uetVSKitcJiZW"
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
