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
    "31Zp2p6gX3jq7VWQ4jTooLmdLJTTXaptPBfNmKLmggupXJUqhMeGc2sjZDAyqGnmHuhpuXut9TA84NgeUybp2J5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "296GtvodRfA1b7phXyau1M51wg6Euh8mf3GsV1fbQuA5meZL2ea9S2Hp2jGnZbaWyDoiTJbyExt2AFY21io586En",
  "key1": "28A3YgtaLoqRoorqEnPW65jmMwFUfhuaKovaCuULy2UVU5y93c1BLuKz7EuLrAtr2h36sxNxXn5bQ1v4UW7eigbs",
  "key2": "2T9xGVSmphj7zkF8dAvUck36VSe4CtLSmwAR4g6FbwzHq7YQntKkmiG2GtQNCUGoEf4ysTpDB7oHSZP9zqRzj9mz",
  "key3": "297eY8cGEXzSVcTJ24tpPRcM1peHSubPVhQwFdkACrJNLVdc6owwQsFqNrPA1guzXxbyGCdfYaKDvb8NWTHHaotM",
  "key4": "675vUPi1MAbku8UVWPbJy33i9NYxSpJ9HhAKno6SYYvx2tVJCnjeqoLtQA2HGoUeXQ8tQZypVthX2CDwbv8xYWdt",
  "key5": "32iQBFnBGMgF57u3wje56RJ6pZcDJuNjHg6VEamatQEj64UCy13sXH4mn23sVdHxRDaV8CezNNUQ4wSfxAJHkmZp",
  "key6": "5KCP7VM9zxQ7CTLy2VwCQwNigTrvk9aHxht4y2c5EJuYqo8Dz6Nw1GsFBjjEqoVpAUZxo3tAWVr2GDzN3BpPs7mq",
  "key7": "4tEbuMwYFdcf6xzTihARMufza2EN2UjkdDxMRVpzKkCkmwdyhvc91oWjqTkxj1jDqKPdt9p3rrvYTnPtUzuA7LR5",
  "key8": "2F7xpen7FwodSyH9Lr8jBbUgdyyaZwZkUZJgNLZepor5nEtqE4RHWQsATdFswZhFaKKPaT7kzYkA2mKsa9XD6qBk",
  "key9": "Sz6BLRyTmCgvJn7tVo7yYN4aewU4Z5b12xRjHUibPb3ZWcwcQ4GPf2GUqiZVsX1xqX97ppxDNpbhGUzhGCxxYgK",
  "key10": "5NeNBsrjbsKHcVMeugVZUArdr4AnQSAaoNidsZKW7BEyiGR7GfLY21Ltj6bTEHAtofSttnmy2dSHPXbwChNkjcvG",
  "key11": "hGeL91RcepZGyCtPVuUeRkjiiP38TZeMUJ1xKJRYxB6pgzX2fcVPTuCGwd5tozUQsYDBZaZQ2rF847EbBF6fNzm",
  "key12": "38oY8BVbmWYJL6CFQYPDJnZuUENU2THc3X3JLqt5b1wiPyFjAm5V5icoMk59kKAnBXZPAX5JPPekyZ2YJBvLQsux",
  "key13": "2W3SVSsEpTYTHiAUWi4qybmS6bGCuEQAdP5gSh697e1SAhRn4urDkYSYAuxtsfSjdDwRDTjVAp2FKhhj2xiKA1KQ",
  "key14": "4SopnbM2xpVgQdjmhE7vW2iYtmwHNwU5TZXhvBjNdCWv894iiyFEWx5SF69oBguWwkDZixN6XnmB2wasVXFTf6oX",
  "key15": "2DmwVHFzXWXAbMnxx3eyMHZ31vUkEHfy8P32AgTpgUiM1VeeC9roqpZV5jNbifJL7ABX4DJGuo7V1TEkVE92XKRu",
  "key16": "5wy9WCVKbiW55EAftu4WD57rEXG9FQ8QnsuqhNG62XUSU8UzwHH3mxjLaDBBxQTCU4v9tr6d7rXqRkAob4t4Atf2",
  "key17": "4AAh6WpNPWwUmqA81f8ZrWLTuBxcZ5hBb4XnwrcQy2b5QRXHG33ogAN2jbYSDLCJjh68DZUCghfiPVUthrSfUuXB",
  "key18": "kxH9duU11aWnAHbVbVJaAwnkfrNCehnVYwgkxHbCqaeee3FDeD4t7us2qYJiTA255pJrhcZTnxTXZDLGcB8Qvmg",
  "key19": "3QawRiygpfoGyBttuwEfKhiKG5ztcVmWd7HNsWMsUCidSLKEfhdW5UBJrZwtYmaXZeXYAqCFZ1qinJr33CMpQ2ZS",
  "key20": "5Ve3sLnGay89fhohdqy69cqdVo6MP7SephS4YmV2ywd4A3hRkht2ZEK79FiKfgX1LmmshWTnbuJNbNvdgopokeS1",
  "key21": "b95NXX1vDUfWHTKRGMsGViyGZb55YQqYntFBk4x4Xg9vyyQHvyN1kULMaF6jmANY6x86hqDPpM42VkQPVzCjgxR",
  "key22": "46bTzuMApeYtmU3nd3TSgP92FtuKu1mogjLH8qygmaA11PvBmb7iQtztgAQKLGXyn6k1pgCfJTz7eVfR5gbM5QAa",
  "key23": "3z5ffW6PPkN69CBNcoLjdeWBgPNjKnSYhQsPUshU6nfqUdrHdzkdJbiLdWpbmYuX6ZFDhRxJkt7PDCU3VaZUGGFU",
  "key24": "41yicPRuu1Z76fSyvYtwS7CfiSUhU34xEa6QR7oXzzuiUfFp2N2KM9bTuUYfd78LRHZ6UGP4diBy7edVUCE9AWno",
  "key25": "4xaX4Yu9FLphw6oJvNjFrkoKD8rSrwBPgxToJGxG67vemK9s9M7dda1mkdqV3xmSrZ1gBKkpraM38KKSrTMCoSnv",
  "key26": "Dayf2UX4oGA3o7fq6jVDtggqdk8DJYsKYVBpb7kSXoS7NWPh8enZegdx8Yyw5GBG2jhNmsFN1MEfs71mUZGbK8c",
  "key27": "2UGbPTr1oVhkL6191AiPCT5U6jHb65gtYtAM3Yfh3TCvtLGVbmsU6J5JqWga4y3Vm3DDnywkREkYHzRqRNBgzkKH",
  "key28": "67MjxuHRJCm3Nbr1EBraVnzxEmdCGjXgiUfUeqGNJbSBw8oUcuZyBAnitwqp1UUe7mMjutmnnwFzLGS4nN94EYBS",
  "key29": "2UtThC28K1J1VtUDyTxm3xtWbGeqGM22iDgamSmSphP2xLcaX3nxmRDGRjinKz2nez91kMcBRWnFQ9SXjchSTENC",
  "key30": "jmnHk96QZCrc14rvqRzxf3dD1UruooQeDwkxMokkw63GL5C6YX1tMoGbZ6KxjEvVLpBZSzNLJWfVuzaF2tqQEHk",
  "key31": "2vyiJd5XeewfdVwq3RVXtFi46SvXPZBdaBNvDrEEQ6Lx9Kx43qtzzkWseDkKEFrofVcpvTTXfLF45mKPkZPm9PfQ",
  "key32": "rQQJo6eWVzy4B99C59CcUEFj66PNrSKfMrKGsCeSsnVuTXAxzwPxDwdzeTFiZ3dWQskQUd4P3F7WU8GvwKKFy3q",
  "key33": "2LRwo4VFYDopU9LWKYKydz8MxrPmEXTz6UBYyjEBdfggsmLjfLBTvDUVBtvQYDHkhUdE2oU4jofUw3CuGSPY23Pv",
  "key34": "4ykFmf3AWa4PR5CAShaGN6pCdQAJSLUuNMg4MmV9wkV2iKmkKppvZXMNyV3wTKbPKCAffkuYPXtTWNpZ9qGfPkXz",
  "key35": "RhXCuutz4aQsCe9Ji64FnNtFLuXe3iCfDc3SAfDHMRyazM7WqhKcNm22ZfDNzmzvTyzvARoRWtzJRj1uj9HuiQ2",
  "key36": "3MTnTNM89bcxX88xP8wshPLZBQkkb5uNmzKQn5EbJkEbnfAC6nAxG25kJ2WExbt2H12rbr7mk7oVVP4DLsEj9cLT",
  "key37": "2W3QFPadGCvBdccSeXQcJ7Ld1yKGB8x8SvX5Xboe9scBq61gmyBSWobBUhfdGkGoiJphKssDEzLY3DkRF2HodNwr"
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
