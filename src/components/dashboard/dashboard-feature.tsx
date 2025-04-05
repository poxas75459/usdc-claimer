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
    "4THjerRFVZDsVf9H9oQeUjNPhxVBqY1ZhneRZMH1K46qn4kcCnWy5LnPRhRqQzkmseFbSSHXSy2nmpHvb3Aki1ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zce5r6wfTG4oSE3PSGfDJS6KDcLsPFB2mQg8K1iN2BLReoUBuDN68yyC9XvVCWFoP4vxtFc5xBF397ZwayPh1vD",
  "key1": "5Fz8n6a4YMxxCnLZxU6YJmQu8V9pNgEzj4HatgDNesvevvDDoV6T3jRn2WiZRvaxAG92T5nxUqoQuXZHW6pV9nVi",
  "key2": "4aFzscL34YsLFAcwafwwv95Nxtn9bcGTZFWAq6WMDSntCrD1vukfmKWqzqpD3hUPNRKcxu57JBpBG9SXn95tcSgx",
  "key3": "3T9UZ6ppeFM7RApUPoVAWgX5UvAcyAx5UShtXJzs1TWL8J5Xao8cRnRDNdHA78XoWZqBfHuvv5fDjJtDnkVXzhF5",
  "key4": "598MRAs6kfYi7y7c2tXeJ2WhtpeaFSENM5YouoqgHpY2C8NP2eXervJZ9reZ56CXJkdBEZr37VTG33gKZVAxLQo1",
  "key5": "2uhvr6RMr3HEy9cznZKWwuV3E6e78DELVuryGaaMuCLG7vZwTTf3kDxhYEoozh9WpoXdgPRNvPkk4BcAkjnwkWCD",
  "key6": "4A4fuoMmeGgmJuPW8FCz2TzmRgPw8xyV9mafQqT3U2zWGNEmKu5dZoJURGLvrjEdkBEgBk4edCxzaXrxbLh2Mrfg",
  "key7": "6QNERGM91SxPHJosbynrddqUaeSetDvh7aCLL7K4Jtoxk5sUJnvheboadB1bT4VQ9hRQ5xSdxbxGvUVdaNY1r2P",
  "key8": "2caTWvQDxtbonKa28y96nw87omQptSVgdPKDM58MunPZiqmLrgGuFyTrGwACWDZpDwPLqLsDsH4xZ7Sb7Di5LoGo",
  "key9": "GHPdtwxM3CzzmBRueSkNHrtVVoenVxRyisg2HnskFkW4fxVPFhFA7JiXpewowFcTeodj25V58LLSFhgVAqQFtDQ",
  "key10": "5T72atVkbr6VPCcYW8RbR47UzFSHLhQbhNEBf7efWRuDgw8kVdJ8iYDaNXxBMsdtqrrzUrMmscoi6LjMAw6apEdF",
  "key11": "57uxdB3EkCZP8PxZcGTdCmbnPnKGFJzcvajqxLbTvPn3ovyFCxSX7AZNQXfV9qs6SUyFanFPx1XCWch1jiGvamXM",
  "key12": "3mJ8gQQSHisT9rKCF968Xk8ue51YyyquXKryqmiA7GuQwzWu24QUFcrGnE2EMxtuWMceoqY1hJPCaUpkbFjJRz4z",
  "key13": "627Q8xfc4fM9jmyrHyUjJVcT1ZqmZbKnE8djP5MJUMsTZYauSFmTD1hWosdrijXDwsnNV1ctMWRr82WBtF5Q1YHz",
  "key14": "2qjmDfJmKkoA9g55cV7MnGmDhYwme336aSzLWk9qqQmda5KFQkTjbPvRw4bQGUk5sf94vz7L1qaEwQpiukJrdzsu",
  "key15": "BwTWEdQkrwHHyKQWPZFTJjJ3gKAW1z9DZUVKzi64rAF497NpZzNV8WjjNBZQFLQbn5G1pfQzyDdtKZKonQmk8XZ",
  "key16": "3nTGnZBMQDSqsEwAnUrQqw23EnDuBh7XjjXws8rQyCbV6YuhqQQjvCCRC3gKBcQKVB8uSZK12bwLUkaHM5UgrNXr",
  "key17": "5b2vUjyGyfvXwMUq2ytfW8X46rd2SUrscT5BLz5nzjLtbWehEc8j2RNefuQ4EpqRhCt48qNi7U2KT7osBajFFbav",
  "key18": "312uwDoLhWtfYXs1JBYtkxVZMRf9Bi33PgxkB927NW9ZJqFA27GBfPJDUy9gvmLrs7DKGXTkwTuW4tCKKunbbPeJ",
  "key19": "5iXcVjiEtNsHgWZHupPDvNrfTAhX2N4gkkWM3yu4JhyeCa2J2LTuaZvGNZy9aJk4BnoeJmaEphX5u9zAJzvgCzb4",
  "key20": "4UyHuzFnye9BVVKix7nWu9nTEQhuSffoyndNqfzLXNdgjqgp3pdoSD4o85YfWZCimoEi93VQFXsh3pYTCWwapvkn",
  "key21": "5XyyYZNRiVit5He54SWT77tbFQrk4xw3uSxciGyRjfXbqcsupaPWdEHd1iRYvKXyJnJ186bQn7kang6rqcpE5Gn3",
  "key22": "AaZGVzSaTYQLhiy4vcN5kMdDMqerUhYpj16dGRawcrAhaP4M7CYjnzT1FzVesh4acUGoyR85W6hiq8jB8CLdnhC",
  "key23": "yFYugbvRCNoYWMkDB7pRUwii8fbckznF7xc7RSCzaj9jABwV6H8zhwexjPQ8hu5KByWqueK2nZRV3Hzovz3SNxU",
  "key24": "5wqte7Rw8Fz1MUjnfwj2c2jUKD41c4Yje18VvQByGjwcwKedKYeSByCXYKtX91JBKpmLAFUTVJYgFdP4Jy9XkLzL",
  "key25": "67cukZvmRTx1h2tCu2TCQenmvn4j71huCm9zQ9ynDBBhHYCWzqLPN4YUB7B7VkDML3k4QNxkufzHzViXjVepTW3S"
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
