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
    "3gSwjnnrVeuhQmko3svzJ3BpD2Df1m4MK4T7LYnxzJDAwtUvVhN9VVwAzE91RKpcrPtNPFvkAHNDUhtyrHWbbXB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFy5NzqYQuxegPZYznETPseD6oBQGMm5TkLWMac4dSsn4w3rvd6M8Qc4NqRDqGw2qRbFf8evY56GxMhzKrS8Jza",
  "key1": "2go4Faw2Sn4uJRSCj6S9iV1zaoRZA4BRBNda27dwDqFrKHc7mF7pSTDtLfsgYqHU3UX6qCZUAeS4SeGduwVKbY5n",
  "key2": "3DYFfPUTFWKcBnGoFHsVe3V31rJ1AykHj29VuFmd3qEi1gXgHPVSpHZPySDBFu6UuX681oo2uvvMwj9aX5sy4jQf",
  "key3": "2pc8kqJ1Wq5XjJf65QLPhboHitDCtp8yNvfK3MbHgWqYe2SVD5ZyVUDTSFwimmGRboNJUcsSRwpBBVMYPWcrqezQ",
  "key4": "1XHnVJzqRVyqDVjBLwJonpWSRt14HN5J9MmLKiYLGHs4Sp46ss3eAynjqmfECpbgseNsPEaWgvU5ZXhE2BJWCEZ",
  "key5": "4Ec1YoAi5FJk5mkeFLEUpA9n5v51wTmCQFffRN1e3zMnupFeLe6hahi2WJE1SQyWYXM9uYKvzGLsmKKCcg11VzQS",
  "key6": "4GEC6kUP5NbqjCGDEhu1croDns3ftSS97S89TH3M27Sq1F65JgUjZNDbLhk8ENGk47ueeWEZJMvqqad4RJnvyWuS",
  "key7": "3jtLbzsvQx5i5onpKDUCKS2uq8Kh6dSHfFX6FizdvQGVnsFFsuffQfQGGizsWBexxe8B3qayrEG9t9C4CfpjkZtP",
  "key8": "VpvHcmickPStEtTFcBoV183QE38YKWBHMu7g5ihMk5VEiFHe8oCSHFBozeV11UHfw4t4JR2t15FDP3acusqXGdu",
  "key9": "5Qc2AAQhAfgz44X5nHsjh3TK1xXsNLRkrbnGwQjupFxCCWZczb5iuhXzfVba3sMSeddp1tCjZc4UNKYcHkfk9c7J",
  "key10": "2txsn6EDcxnJ3mN3TgvHQdScSPhNKwbDRbAyT66oiWtcAHqW48DLUksQLRcQfYjvuaKJmrqXezHHhkjNME39WwWT",
  "key11": "56dTzukxavm7ex5wxCD9sYQJAGQbDcJhX7gVUPVRccZ5aYi4wHcvrMAgyenzijvXUQMRiCtcDPeoS6WaF8AzFvWR",
  "key12": "5TB4bAJTc6r5JXBuMGYM9HbHhnyCrmSVPyKH8ixuJow4e4HK6waEREJYifjbd362XeBPFRuqw3iqpkccoKfihyJ7",
  "key13": "25cmHtEKjxwzLYWeBNNyCZnwCvXZ84g3K9sUJqZ6oVaKzpZy91EDhioYk3qMxAg46v3478HdZ2bv1Cg4LV2D3QBB",
  "key14": "21bcaP9rXjjhXq1xev7FCa2YngJZaUo8z7KhHdd2U9DCY4airt1CXVvew9yiduzRgwwwQc7jGxWTvGVnXXfu8M7x",
  "key15": "2V79qhjtygfTzhC847T5RXeMS94dacktByNvqAq6mdvxoSPmqvpcRRma8BdeT91bhFdr7UWwZW3saSizNYn7ijnk",
  "key16": "4EXzTwJRP71CBmsXcg8SW7BaZ4u2Cv2HVYg7FrizwsRZXnupLE72UDkxyNxnJu73biw2wgTqx9c7kRiNYZ5jzfFm",
  "key17": "k42egGVQ7gQWF6SEgWHqV7bXHwRzvdbWHz1j7wowNqLSYHAK4j4Zb2m7DeLBnCeK3W6M2soveN4kQyBPQ8yz46S",
  "key18": "4kJZsVqthmYMpyaMkCEyz1kZpCYv1LTgNYTkJDH8L6L2MqaUG7jLWzBdrz9chxW8RTVNPdyVekZF3ekmTWEMqiTo",
  "key19": "4sf6d9r3QJKXodQiyoY45JmQohALzsZ2pJdkVReHvDGt8gu7kWs29GCjEQP8sXm7ujosCy5hzJAAiV7Eyci9wWLw",
  "key20": "3eCVCFGRpBPj9CUebXCQjmuBz2Dcd9qeYyvXm9D6RuEpHQuxohr3zzhcuHCnjxPd2Rp2AH2rvp7cyrBp3g9vNMVN",
  "key21": "5Yt3hngfAXjuZFcazsY1fzk8iy9QZ9CgnTC7SNjCVKo1oouLtpX6kj5dF6hTyRBct6wQFUVwQnvVSv4mzN9DgfRW",
  "key22": "59cWAMimNAkRs9416HpJer4sPwqoAeLyk5CcNiDGs5DWwnFxXZ5dVMAuzxfZz4Cbo2W6KMw3vFLZjmaQVEtuARNF",
  "key23": "42bsiPRDn2Ssfug6f9QAnBvXtcxDUX3UyfogUJsnXMnDZBw9b6DdQmPjyBVK8FynrUNUKgqUTBDdoWEGs8kfzrx7",
  "key24": "8zneNevJFCV26eFPVkqwUvphzFmCLCnUd94sSgsuXfBmsUs49qdXc8ZDYr6FG7oCp5sCgbiQXh92gbxBxLJ2deq",
  "key25": "DSrkVPrmDxnidjac6d3pnsrP6W4onGatEog6QdhViziKGXE5TdpH9K2DZTrem9bKab2GMjiYUuiSVLALjWtGmCg",
  "key26": "5kC5D94B7H68VKQLjgLs7mbnXmkbUKjtQGRhuQLpH6RRQGsuJsCbKqGFNQM8WbGr2FUTLVvFGbX8WZhNgrNoqYkt"
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
