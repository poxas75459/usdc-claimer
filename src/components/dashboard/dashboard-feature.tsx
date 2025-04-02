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
    "34L3KAChTqzSbPNn8XermafkKbtm7qs7ciJntRjz1VcJJcrtVzgRNTnBGhSqAmvNMVnVyn56ziYfsin9DGS6GUGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49mmun3URXbu4MMrgJPGAx7iU8CAtmUVuz3hSKz1zFo6RX2GkiBw5uQLosAqcMBgn3q23XNWpnxVosMnTRJRCAvJ",
  "key1": "2Vi8DbJg1kkkh2FidzJRq7smRRVcB6rnWzrmD5J4JPQNGBUKLytfQPR26iU7oqhbCM7MgTCmdJyJkcf16fL8VLmr",
  "key2": "5R1ZvNLKTHs3L3hgTej71DjTM3HYDDQUdrNm1tzushUHJsqF1TEU8YDg3eCzdhyiS9RHUXyzLFVrG8E8hwJtJrEC",
  "key3": "HLDp8n6iNLnBwbBLfMdgqSsQkFamTgA5YNg71GmPYkiUVCcvoerSHTBEua1BZ9EwTEVNRDa3B88K53ff9muD53K",
  "key4": "c7FXpFT2ZVH78aGcj5dWNBb25LPSnEeVDgqTi8eToYasAYHkXPCgZL6Sn7tT6b17N7n5c3BwCcvNo1TQzETzUM8",
  "key5": "zXiiJrYAniJYZRbFLcnjRR8Zxdjr8GP7hJNc7qa9vzVZD2dn1evHzB8kbayUtHDQyMvWTZapXhgWoXLpvoQE6Z2",
  "key6": "4nJoJcBCMYYiHmmJcm1gXA7stJc1YUPwzJb8Zed3745Lk6C3oWJjgS9srKgpUzMixz1V6h9LJndkk11S7mYCsKnd",
  "key7": "mup7fJWuPFkfdzDQCCgKvxDN1XAQjt2RZoEkTHsTc6cqJBfw9PUfQDVhpwC3idrA7wdnPK9QRS92PEbqzhekHUC",
  "key8": "5ZU6YbPWhWGa8kk8pRYNsJBjU6VR6syMhvsMLmt6MYw8m85DE8QyLTt6uNXFxL2CgPXqupFAaGFkmEoT6C15KoEX",
  "key9": "2GdSib2FbBcT3o1538GHjZ2gpiKUVbzVyeyfbdZuEUarAAZu9UGoRjzZMMZb21RkWRKMpmDbVa4cZNUww2EfhbL",
  "key10": "4vqRER7CVd3eQ2mjzsrH3q6phQJewx69LHPj1bdRUTWyyX1R6a86a5QrFhmfD9wJTKeT9RSVsPq7hpYmbLhAGPnY",
  "key11": "3esHEfDAbyGPqboPCnAFtRW4rgFiB96Ttc42wf2ocDQoAEURE7b4cxB2grtUx2biN4tD6RF36SbRqDLnvepfrTj7",
  "key12": "4jQb93E83tyAWkimYqXoyiX2D4E8zbxc36q2Ff4bNQGs3YjXaWy4hbX2i14b9rLDosTBfX94SLYNDYvrqg7uq9K6",
  "key13": "5UbyV3KYBN9HJZCumRxvB3BvmopHFYXeQe4VSB3XTDnAVKP2haCz7d4nEwWmx3tKRU4g7W3J2vjtNZyb16oKLLKj",
  "key14": "3wkYq1ZJfKPhWNJYRwfVLzFJ9XnzPdrZ2ZUjVkL9FqvvR6XMHrAxPxaNrupMtQwEJTZwVttS5nvtJMy61jS8SnVc",
  "key15": "4nGyzf8Hwhehfgrwcdb3uE4aqDscVyJL5Nw9T8WF7qBGE2bZM8CsPheP9fXAoau237iCVvTL9L76MDts89udc2D7",
  "key16": "45AkrcVZeprbvW4vTL5MEDreNG1XvukhqfXeJ9nNmUNFYFPfxM8XuBq7GB3iQninqHL3dRYwsTFQLE8DGdGwwqG9",
  "key17": "2mDdbKGB6wfh1e1WN4HSY6aVzCPTMHDFhGJUZou7jLVZB7eP9b7UBMMWBhHJt7ttyGvj3YfSe1JNKoHTKcAgChPM",
  "key18": "5VRwkYQexCCRyH8rwkTfCNA57jKur8K2eLvmwnh2ckQjhX2UAc2sQ4ihiP2p5563CxNnD7C4hQkM3hqfQjywmDGv",
  "key19": "337nJoRycDQobqyZDurD2BkVcQMbRDJDg4PCvW2zB4GgmdR55qMkCs9RkGvmzpm3ia59pEo3ujT7yqYjwPLvb7wz",
  "key20": "5Te3N4w88qQfPhWL9bhDKbpbyz6zpvh6ZJhqAHYzLprma4NyQ78zWriLk5SeNZSiFS5BWX6GLVfDUW5aJETQyLpR",
  "key21": "4UTsLXykSukVEs16X64YuyYrtXR7RYftpyAczmaRB7fxv8mRNxovmSXmy2zaomPvL2YPecuu4FzSeBXwt4YyQh8f",
  "key22": "4Y7VdBt6cS8y4Cgc64JVW991kANVmFJVhx9i9GtTqMzjVXHKWUDwF7xuwrxepa6M9o23k4ytLrbqA23c9ATj8KJS",
  "key23": "3wfGy1HJUoFxV89Mjm64cYm2QnagqPd5HnmGFKcKpDj6fuBB851k37APi5jUUfUTBakT2B2uQbMsRQLGFTj6qS4E",
  "key24": "5tJLkMBKwmY6mk7bHaUnAead5RXK5LFFoiEPNjc9x7UfidWGHnrf9o94XPm4mmw7ByrPHaSsStDMQYiZKVyN797R",
  "key25": "5Rv3fgGXVw6tMZyx9TsCdY77UEsX99fAfmCCQjPyZdY3sF6EpE6QVi6mZxdwEux5Vhr4jVvLnYMXHWgpMDskRK84",
  "key26": "2Sp5pLZH7PNPe7S585VK9F2ChDDpsNszzudeeo1V1dyaukDJHZtDvtjJqAzCHWxwxPquUxLyhPkBs7XF61jUdgTp",
  "key27": "hUpN7W7ykX99PW51Zhck2bNJv3UgSvgMrrXi4KseBD4dtoFvkpLq5KQDjGMaZReWipnkUNCPahw6UAyL5ETTWxY",
  "key28": "4gcYdLVkWhBCrsU6UPaeRsdey4STCkq2mUAZ89nrgRDA5d6v8wj87mrUini5PoAcA4UprrfCnhoF5UDB1aBDboN4",
  "key29": "u8nwbLTHax2a87c4NzyREK8pT3gtjyycM8QwSn5nhLwYCoTvrVCgGHdrFJqBTXujW8YQ97oeUHxFUeySCHaKT9q",
  "key30": "5DtY1gW5mP9BgBRu4X8KRB1kuPtrg21SbBH4jrz8km46PaYq7pZJWrifTNhShWKTWkXL36kvGRgJAnEqeV3Wxga9",
  "key31": "WPFwiYhBzbM2aZCyCZGTGiS3ZQxcF9HDLcFTtcVjeF42PyQoSLhWjNGuTUAJTejSCe1KqG7YywAb8Z3YpmnWU39",
  "key32": "3pj6nAaHtrzxMQZXgyLm9Wm1pkqKjWRyjuZ7tCKCj6VukMykwe7cRXgxiGxYDgdZmiqo95bwzijKpwj8hrxoi8WL",
  "key33": "2CGcDEaaMGfEYzqky4YthjQAhKJG81Gtmd5NjuR7AFUptAFs6kSt1JTknyKzf9pMm915oDRcFLJbVgPTr4vRFqS1",
  "key34": "32WGPL9EU8qAbFkC1cZZwUzD28q9t7sR1mnmwpMW6419n1XkFfotM6V3GPrJsV67vLxCEmTz7TquMELut39axeNy",
  "key35": "2kQiXjivjFeFQGPq25GX2F2YAMUSfXbF8kBDZmFwpQQuWqaF2v6smaMtMUDUBPTpnJnEyA9VXkRWLqyKJZaZXUJs",
  "key36": "5YXtpB8vEAqEhsfCHkQoBkc7qcNv7Jdqrzo3opTX3xfzqXwxpYa6XjjrrVj3AYA5oiKBbMLpf22m5jaGjhWKprQL",
  "key37": "3ZZsKF5AxS7YWNZ3ZNvn9myLb4XwWVSXNZXDYNwT5NdzLQQ4B1X2rpJMYLUKMuYAWtdVmSCzaBT9woCiWvVXEkUF",
  "key38": "3t4tdLUffvvCKXAT6DapXarhodLe16Y6nPiPB7ZUZDuo9ELddKV2Ac3s8hPjrAyi8hf9J75YYB31sCHVA8XadC7A",
  "key39": "4NkDCZhjGg8vw9t5cawqvJkqNmNCRNUM3MDZdf8GEkkYVjgTZFueN6mzvWiTRv1DPV1PerKbeDpC7soZJxTPv2Rs",
  "key40": "41e1cjnUaxeNV8gXRFDHjSg3o1dh1WsjP9EE8qYkdfX9vNw3wt1ru4upX6ewKD9ryC7ErBsaRxVjnCSEbsLukNe6",
  "key41": "2dX1cSErfF3VX5HXw1AJU4E7hZd2ZxBEd1vXJ6pLAnj33WEgHzhD2BKKSQMHiTjPsBGYAXLBjHukLsid4KVTgf2N",
  "key42": "4h7dYZGyXLXfj3m4pWJrHjutbEsQ7eqMv3c4e983K3TYUXytxawdKXGBSXjUNeYuprm5CDcB4FybcpNi77T7f1Ek",
  "key43": "57Z4cnvircjyKmQSjbG1aR15kfvgGPnjxwrHefJkUUahb2KS8NAuJtDfRrGbEHXgYRruBevARij1yUNpCeEFaecg",
  "key44": "3XxZBCjp8Gv4eCGQfbPWRo64akoVyQj8UTyNcCo373hgr2Luu5VnsgeZyjSZwojrFkfQbVbvjAvR19TDa7fP9ZNh",
  "key45": "5dFtKMjxDYByb3k2dRAL57CEMi9imyW4MBjP5g7i6yvT7ErWMJKvHCCWVHBSSYV9qHkgnkrokRV85T1HjeyXz1Pd",
  "key46": "3gKTsS4Zig3ar97ZBXefRBTCWY7seyhgpVhrKJGj4uFSNyT5di7aB3fsnBkKo65TALDqdcgU3nFRrtF6HWXnEfYi"
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
