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
    "4ujo8E7jmKqpYNGXcJ25HMLn8APpP87YiGLisQPcwsX5Mf9epzNjoDxZZpRX7iBRDCWwyDvSoZqF2NAk6MxVCEZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tBN8n6evmJnhgPSbpVZ2riZrBdX1WH5sXQCU74EU3wJNteuKyMaFbzc7HrAFtFWzKkU2VbV5fvfbjP2z21e6BTT",
  "key1": "49xu4of6f1wZqn7vSavu2HaaSN8s2Wybsh185Ez3t1y3GGDsQiezi7tAtBaZGWud3Zt6LHMAFq1XP97CtVrCHMyq",
  "key2": "5r8xWPCr784L3xppfiVWDrHytFhURHh3ViTz5Z5oX6uhxNPBQaDKpojz1Rhmxxo5FH9i7kg8gfA3YdSwjzUtFz9B",
  "key3": "47kvMPuH2bxZNXELWUU4yaq3u9hQWhX2JPj2VFaHsYrdBjs4FZh6fMX9wcVP2hpzuF53QMZc9LWdxQPKNs8tD926",
  "key4": "35cGxhvXEyuZgPip6Xh8qgyzKDV5UrmTDDHpsh1DzagNbgWm4DkR6hy22mpPDBmyPbhsduFpwSfpgAaCd5M7tfXN",
  "key5": "SXHAmu82tEC7U5q589x38oeigEAkaBTRyHANnM1xrTFqJkPZDWFNWxLEEpgeNvQdEPahmNDYirQjoWLvvQRsVyE",
  "key6": "4PcKjpNuCqDDUwEcn99sQziNwA6GthrbvSjDCNyJKNYBQyPB7kK2HQ63P54z3JdbYs5fDcMukY4M8GXf1rvdU84R",
  "key7": "3hWpToCZrhrdn6Aar2ztpLPRQb7ToBSt4F7jEeFCpsQtqr63mBQWi4vvwvqGFAGvguZRWpxbK7xywRVZMQDwPnd",
  "key8": "4baCqLtUMEzem4EHhwRuQK2y5nSxsXZiCHoJ9ZLvb9XTcjTSZyGUK8qxStq3aSfLGrx5fBsF56ggWpvUG8pTNvnP",
  "key9": "5vDVRZT2m5uwpbGe83wrY2tvXrDZDqu3JppgDRGjhjF1ekTeVXjvmKk5nNbSbRB8cDmjVX16LuNJvBU5qJDTmrQe",
  "key10": "5aBAT5hpcxfhjY6cSptqAJ9GUe7GWuUtc2hBAcw2gH8DjRygsEsGxonKRLx6w1wpWMdXA8idjmN7yBQwzhdG4iVP",
  "key11": "4osQQjdp5wk94zYCtchSrBPRUyy1uTHzWVPisvF7u7YVVDXcxH5Nyumgf5p7tvV788LxsVjNwcb3qDEBinRMwXmg",
  "key12": "2hkEBBfS8pe7R3sQdE3MxTsNB8riLNMWUZAwxqVeDUYqQ12fmUj7ttbMJHe1VG8Yqnra3NBXQJKGCiR1gduWwbiE",
  "key13": "5cUqxH33Fh4nnVJM1zUb2cbLY9EJhYsSTewKXV6pxnZg2XBmpm3vCBpmfdFhMNL6WvuAUv2o3z4MdBrnWRsavUSt",
  "key14": "3Tj47NFe9pg5HGxDQSduQKmEPo4tvVx9YXLZjgf3WRDB3RQDx5PfmBQDe7LZgoVGdTb4hhm1VjWxAkGMFRky5Qam",
  "key15": "3TpQogye3q3Pa4vao5funcTcq82UGoNM1WBu6joBRZPbKxWJbQNRSCoz9eCRUydQL6p3iKeFKU95fFi2s6HBzu3x",
  "key16": "61EqRiYLiBNU4k1oovgaPrYB2VRDV1rrPx3ZhzMKTjN6Qhk7rNxC5SGRE11a4nyTWLEU2unFWhx75DyiWugAqzf6",
  "key17": "27s5B8Vk2VWUhqsmYa9LaSmTSNFNGSwkgviScqsc4wXWygqgkh8CXZxGHGfoPJPHFA8y2puxrzwswm9vmrMQzFfc",
  "key18": "5Zk1X8ZsW1Qzy5ocvqiFTjehs26gx1fP9AFj9RCbBdmq8Lc6LHTTTYn3wVirofNhS4goZgiaeLdqmhR2cnRWjJMj",
  "key19": "2VWP2BU9xmg9CpV4uu2BtuWss6FCWGFyKUJ6XVM6gFFZonL2iED8zDBmXbhNecxzUUymssbD2r7TPcggcpgx4MTK",
  "key20": "2SJQkWyoiWpkhG3zoxwrNyPva6zKpWez47ZB5CdgozGStnAWx4AeenSxdophWbuaRGutwb5uRcVDtZgocmrfvJe",
  "key21": "3B7E77f9HpECKgfQxuaKgNHhrfmtnbByQKj43BfEupgYeD4rSUoboMg48XZSZDFLFkc4xqA6J6EZvXr539xDWQBh",
  "key22": "2VHEp7wdQJcyC6obdpzkxHmWfK9L2LgG465iH2cdHnHjPDYcHfVRCqPj5AC2bi6VqRcHbZ5LP4UYjBmXzJALdT9G",
  "key23": "5frcbLCqnycRAzDL8VgPJzw5vEg8KhFstP54ApuLfQgPhAdwtNKqosYygKDEq1juXpByDqW7qpoEDwqoUCLrZ9Jg",
  "key24": "2ztnbmbmV93nguPn4RdP4uMbytQuvHD7k6wePv2cjcYBU6vLzPGXo5qFLH656xEa4CJKkjuGhRN9S2eogWqVoacJ"
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
