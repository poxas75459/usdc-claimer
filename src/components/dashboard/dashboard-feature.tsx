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
    "3wmBwKQBwRqZjdpLacmuw5gX3RJFdbcxGkTCKmAh7bAvgzotFvJ61utZhefZ5uwgYGicUmqeRBVJVtvXnVguXKV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HEBe9r4rJqvyU5k73r9RRDYgDAUo7enpeBQNwnrpJqiZFwoMpPDaqNp6E5dgH4Awtwy9t9tht524yTnD4uMEu2U",
  "key1": "4D7K35B8wSyjT3rMghz5rV83uGYtEnsf3eLkRKBwaAGUDy1dpJdny8Ckn5VYG6gWE8qm47LBGPYGxdd4S8GQeB3a",
  "key2": "5LGi7E3HU3A9FmN3k1DDPZC1Y8Fhzj2d2sr1WJLs6GS3WSgUj8msaZF2n4U9F8u9pniTJrTPhqDb98yDteVfvinv",
  "key3": "qhMJbDTUkQaQhji6mq9sYUY3MuCbQDNhvVTmTvYScdsqEHSiXs2krcN8NtR32GRKM1Ac7jg66rSRWvA6KW2YzVg",
  "key4": "4tJsfeVvMK7KAv8jcUKXLdMKxWwkCPs8CYLXqLYJdzugy41JUzMJtJuYCocFxX1RmnAEHoTkVoMnkKxqqX8WoXZe",
  "key5": "5npWTWthK8etmb37Tsu4249tYSP6iL5uaATyBsCoqj6JhvkszTuCpSWvQ98Z6UcGbPrJshMLwiX2DrLaSDoAKHbH",
  "key6": "2p3PDqTfXdRjFS7Ayosc9EYnTH3Xa4o3XwsAHGdteSEmRo5Hoa6ytLWKD4AHSSiTCrbTRDRLzuggiejhExz1AJkc",
  "key7": "4PdQa6Qw8LKajp78Q4fcfYn1C1fvfiT8FTdYD4pNBVmw7V67KyktahmrNRVCNiFPNc75qZHeaseMMXe6zWuFnFGm",
  "key8": "5iZTcAYpzKZG6DzbhC8MQMKdNcXyQb6A3nKN2vUyXjsPeLs22X2kXboUN9ooiXGULVMo1zsuPRJvpZUBKTg9tHtd",
  "key9": "4wLtpyXggeeug6HNpAYYUbhrUXnMkbL1VhNja3JNREM2VDu4GHD6UxXfaHm2qpMmm81QWpVUJBSNDymXvto6nDAr",
  "key10": "4A1iWYpFRq4QvMASiTQ7zibiD45QyWePPtrJFtQnQJZMYSNA1rnhE7jNG9tpa7N3rF36fdBt1j46PHLqnEzXg54G",
  "key11": "26c9fN6xQuV2CmgJ1VtC3hVd2AxsHojqhpFfhNhsWL4mrRCPYdw41QZrvVaTc3WsDZaC4pQsY4hY3tNfbD3wuxE9",
  "key12": "42bvw1keKDTJY9HEExx9N7zA4LkhBji7uANvmEQR46suzb4Jcx5Hc5wm3krGpEDgt82paPfBCx1QBhGWtpX2pWzn",
  "key13": "2xzrjHLqJ1rLUxXVgZ82zc7qSCcfEPPiBLa8VeJUgMjatnJows7bPoPJnTUE7fiqR2ouq11TpDmn81Heb8zzP1LZ",
  "key14": "4Joj7xegGveRQoJoxM2Ds3QQV4eKJAbaMZiZ5eWqtLRsubfzf3jzzfJ5JtxZU9j2ffdF7NDzd5xnnUj4qPWgJGNs",
  "key15": "4supUmy4N6woNUidTdR3qFUwPeZZcTWFoMz8FPY8uCGxvNGfADbBWWajsJLyUsjVS3f6C5E6op4o6pibghVSuMvn",
  "key16": "2y7J91QaCW1ZDt6oGf8rVnj8nawitxNAZkXh5VRgihkBgWdX5sQidF9HVF5GWfBogF8NYHTEb9K8uvnnVEXoPKje",
  "key17": "3e12LfCExEXvLqhoyBLLnUSGeXMCXU6m95PVwCufSNnme6deeAPrb2ZRUs4W27rNQ4MyKqiLRegXnLNJAPCFZjco",
  "key18": "jevCFrriUUoDVibc8STDRwsEDyfEcZvyRBYAx6Zq5j6HfcELdJ6qz72D7fqkwWFT9zf55AUQFLCyNBAdVrVdDvN",
  "key19": "3tB1UT6rpxuGkaEJ9AAJ5oTiiULbJyPtv6HWnKzzdX2Fm2CypkmyGNFqs6geoqM3jjZYKRy2CAT36j7FYiRrzJhm",
  "key20": "kMNvn7e6AVPLKYsoGPwaDHFr1a7fCDMacsyqBVWBCSHPPzxZJYUhJTr4Pntx4sDyhKo6yE3diost82VtShAYJ6c",
  "key21": "3dNooTitUj33fNDS5xNQm1Jc5Yhi7DRzMhG3B3kEyGpUSxuNx8FJJ61QGtJNpBLiL7H4qsCwBfYVjvMVrP6jKB75",
  "key22": "4BqZUkzNkwmXosX2i99sJXypWughgBSgZuwad28mj96ztVLoX9Gj8ZKniXGk9kU1dBwoic5zPnxY2A9Y7g8h89M7",
  "key23": "246iTZqf2wpXKQMovdHYD5fxE4zcc6rEhqvuvwH6Ha9y1ZnLMWHczZJfb3HnzBXPXHZUU3jaPCi8pSYqjdarithd",
  "key24": "5XStcthM1PwFY6rxhYSoRiSvhyuVSB8zcJdb2abqayt3iM7iChux33ZzqgA8aggKhQn22DCz3hksZfGbir99jtDw",
  "key25": "2PC9CZkQnLF2PfrcFXk87sStgEZYDTW5Nqg6K8t6JMH2kkozFbPD6hqjyaugDajD1vVh4X7ixTXrEYsmTXC8Y6SE",
  "key26": "27k8UZidUFCwLf4WZEwPRqd6Npid2E51WP4DsCYasfkTeEJtcsUdBhUxEyeiNSgQ5tp5gF8uX2JxC5FqRxGwiNWf",
  "key27": "3Xme3FUkryriZssKCwG7siHN8Xm1Wxtqx2hQzvTjAxpY2RMBRP7yt1xdyPfu2Mxm8EYFfnCPguAGnTpV5MRxYq2t",
  "key28": "qzfUybuFHTRs6fL13jS4HYLrvZzzXCR9PzXauupNzu4Qjgp9aZ4jBbZpzH7N9jjA8psWjCErWPAbtGz9hW1t3rr",
  "key29": "2hw4S8t2YRUY42cqUD7BKntVrHBNXWhZtLS4rUHgfn6kcBsdsjaXAdzewRHVyaRHtK2j51pR5eCAQKfmbebZgCJz",
  "key30": "35msM7FpuuLrsRqog11ojmhPtqtMHzpPZoxgkg9LVC1Eirf7GRuiLDqQpw8gis4xHr3SfFRL2C8zYZMmYJ6txxVv"
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
