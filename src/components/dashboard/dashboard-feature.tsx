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
    "5xR1QhthxRV4h9E1BzJUTiDDqTqEfN9PQDUWfwvoq6uWz9Nb3tHmAuUdLtxRhG2o9Rt2fJj4RnRYTG1yoFj1YaMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nAsZFRemzH8n6pPXVc1nd6iHoV7izJK81CkA3DzEKxMi9sf97bejujqziRkwiKHNT4deZLSW1vhFzYYU9oMzfGH",
  "key1": "3E3dk9VxkKNh6Jty8pfgJEc6HmUa1BtwRnnR5pYUvJ3Mfa4B9nZ2Jc84fWpGURs6bW4rzy7py85EAaJ5srvfr5oW",
  "key2": "5LvPtPcaxr3fN6P3mo5qWdtY1eMWRZRUopFTj3jZyYDf3acsBXN2Jk1M1GkRAJxkW9gG4z1xyXG4HNuwUqh2Hg4g",
  "key3": "3mKkiZFVukpx8jM2eAYR8oPZt9tz4rBu1z72rpi1sEuGNbZ1LSJYDatyFpjVsEsSScjLDCntek8xgkhxQ5dGhWgV",
  "key4": "4LGgrUxu1tgz2ko1vKzrdGZqnPq7YBxxN3EqRLYoju5ArCRpN3SFqehvmbxR3ZbnvpGsbHmJmaEvgEmykKXCkWS9",
  "key5": "4SWxAc5xgqqaQNSz35kjBxJuQTeSNjr3TgznuUETafMApQ5HYYCLWKK1H5aBGUdQyXa2SFLxYFKYCPk954ephAEq",
  "key6": "4RTBzKA2i1rCnmvQKGPAJ1Qgtjatb9TdPC5cRZpGgsaatsxkRNFxrLn5aWcEDiPkqfQ1TDpHdtN1tWmjXJWVPNQ2",
  "key7": "2ALqJvkgYzJWGq48Sd446ticqxXTG7bvKgi5oDFA325FtFc5qHX2AQ99w17SerUapqbwG1RGYWsaxpDqbZ5FMhbS",
  "key8": "5tZEZkEevtSL14BwSxNWL25rpyjmuXswhrUXUJgWsc16e9KhB7FdARQYuvWVKpPQ2uc5Ney9XJuyDcHdhjmama98",
  "key9": "5X5osXsyMGLxxuDbTEHbVLgUsk1CxtpUMAm6UTY7vR769iE9uZMneMpWPk3KtF2AouyCVDYYNpUtThBsVPgbvxPH",
  "key10": "5ZmNsvsoVjg3xrtCxvWSQRLi2FF215w3kjpWVHD9s3gPtvY7acCnecomrTkP5YEHLaNLZHDDn1BzwTrNiqNoKjNd",
  "key11": "o7cVwTd7XPu7x5K36BqZTLPNYcoFBiCu1BZ4tLiK88MkiiLjfkK2F5ZmrwMp9hDRVFCv3s3fjMMk21f49oT9zJJ",
  "key12": "r2Xwxv5DQ3uPX7ncXYJ8f76kfVfFxSnXiPEhCEnvjyRcExYQzwK9PDjn4kwPtK2wsULFa7FZTDVi6QRYZKZ3VQf",
  "key13": "5TTAUuJzu9aaFqLsGn4zok27UpJXx4Yz6D38rifFVhF5qfWAtbEARwdue6BLWAeXwUYWbTNnAWbKFC2vMYNVjnPz",
  "key14": "2d88UVgUXTeewbqJ9Hw8CUsw5zY9uUQA6T3A3wjS6L5fyduk7CLv5syHjhuG4To9dkfHyf9uS828Mb7UaxZPvdLk",
  "key15": "5KeeHWji9eojYmxquvC2eU4ZFJTN3FMUQp31YeL7PyzsTbzU5NCGqoUiMCFMm4TzN1fJa7ikvTNdLNHXFpW2WGNC",
  "key16": "5EASTS4CMCynDaHiqK4dsb4c7esJqfunRe3Qkjhs4JBQnQ7yv62au2KWiRae6AcreCQWWYcGLZ7qGCG3kEq43gGx",
  "key17": "3yNguHvToVqzmAG2PaSYSJAiurejUjUyoJWpZ5mhe4PuRAQDXcs3aKuShL6VVHebyTSxUqsCdk1ekR9FdeygBENs",
  "key18": "5B74pvr4FxGhQeT8ZKiwEHTkYvaofC9JXEaLGUXk1fU79xRFqYZY6tx77ESXXcTMty2QDt8wdfp7z3pwV75p3UYC",
  "key19": "4FS5zAosrsNgAno5YnooNEE4KPPF1w4a3GS6N4gUjQu9gWUUqGFk7S7p6vwdsJjZppKgvEtd5dAncVNGRaFC6uap",
  "key20": "43r1XQNSDgzULtRbCaXusNz37hmEzAEF5MAh3AqWGooX6NFeVb4znbDJGvJTN7L7dxvoYU1AzMD2kcqAYRHdeR79",
  "key21": "3x3YPxZsXf1AnajBhfrBHd78ii7w85rQcQAnf4guYY7qYE76Mjh5fDYErTWuJ4cy7P96ZoiHkYUKCp5bo8gXkiYC",
  "key22": "Ad7VbcC7Fjxfayj9ghrZzWfoWNWay1ztx7JqYJh9E9jzGubwJUySDtvjfjZSwRWTm787AUSGdmq8Ye86g7yYiMq",
  "key23": "q2U3scFRoukGdbg7kypGdvJ3Y4DhgXCHzhCjWdmdAqm1nXmhyZZBY9qUKhPXjnR7LLdbRpoE1SpsB9fDYjXKt3N",
  "key24": "2GV9ePCR35n3AECaotWATVGzQAHTGqzR6Zxd1t4DDvpbBZUafwA7Jh4aEmmuesrFtFePmJzbADM5TKqsR2sTGPhE",
  "key25": "2FgHHQsNKQFAZDJamgTiGEitrrVgFEnXUkSjQRQTTZ2VoCjDq6baVB7xAcYr2BGatRZsVE3QhFrwtxXiiaPQCW4S",
  "key26": "5U6ALBTYTr6nQJZPTz4v4D4FK8KbLZk7zw1mVCkeCZVXJqS8vNbyZuRmuaouGUijg7fY7nPReYyhnrWjuG2Wb3xf"
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
