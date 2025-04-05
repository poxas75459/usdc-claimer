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
    "3avWBpCxMHiSAKTbeiYgAAoybhtxJ9sW9kRDVhBuALNSbPgLm5zg2TQ662UxPetta8dcdXcZk74FH2hPkBYvnJ3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iQDnV6AQt1ReY6tZVgaJGsDKDEmfUrYbZo9bS6RSqVFoL4ACy4e7JUp9JCvkRdxv6WEZHxHc4MeNxJr85RUFVtQ",
  "key1": "47t1nzLKK83YtzYWShTek1rNFph4ZGZfhSQHji1F1KxmFUjFE825C2sunWaN4HxYQt9uMLxU9C3JG7bAAE6KD29w",
  "key2": "5cwBy1r2axqWcdLUNBwRJhai93AeiDPWi37pz578nmQKp8WuJzACJCtdDTSXqrw5uuecYm53AzKs1j8Nm4GRj7H8",
  "key3": "2n6rgPgTuqgn2x52isGewdCzixRJDKEGa7Em4VtzZBGPe1jrSJH9Aub2jdrGYEA9FBLbSfvSTSkgHTfzYqpECk55",
  "key4": "3aAbK1i3ucNBd4foCBEnZ2aqWS5ocHdKkGbEGdF9R8ZfNVMaLpnofp6C1hxmveNQfgWnWqYUK53Qk79qEpRtgbs1",
  "key5": "4Qx5z8pgcD8Ce5nTtwvkm1hyb58zxpE7qgJZMuX7gzUJqBxJSgMV8Rm5hKcpP5oKksQeQJ35xmTon582UjGiWfyY",
  "key6": "MwSqBxaziz6hms1XVwkTouskhayiEZDTLjETS445Y1nTWM8n4kQHQEzcKUi3cqsyVZRabtjqdti2sSL3enW8QyS",
  "key7": "61waurZVPYb4Qddyn7pM5hkXCTyr1dSvGsxbzJERMNN6WHgyjpTtekxAHHgjFtuhLNegUCyxCap8pNjwPYhZnCie",
  "key8": "CU39uPujzdr8JeCepfJwM5RJS4e9ebmGAKy3nyFu9hMLyVH5TKPTHeCBzf7sq19PLXQQNJSiLKnypHYW5ZMwvwg",
  "key9": "2xoiMe8Ks3DtL6x6gVLuwrmZZXwBtCnWvhSmd3zbUPGz1vtWAtfqCG2tdZtrQ7FbuQfCyBg41o5oENqbNbKku5r3",
  "key10": "3iFeK7h7bPcvxNjcd57hejrfA8S3viHS4xQxAP7Ts6bKhcWifuxbMDgHLsRnLBFd53dqFqHczQNRQNHywKnQtrZc",
  "key11": "3yjCiYxYTmSMYAoivc3ZbBPCuAdj3pWzWkHjDfWHDLKKrvb8Wo2LFeXduUexCgRQahnmx4Vv4f3L3DhHvCjHiYzM",
  "key12": "bUsMhR7kQeq9zJqioFMDQueQEhKp5ePUhKiFPfmb38rbpmETRp8ZTAgy6hxYgqFTJH1K3rk5BdYttzHfVWeWFGj",
  "key13": "5T4yGM5CePof1CdXetJ2L211MMcujhKPKeGRkCkQEDghcbgbQ7TScmYpdcyTx4cgR4qjvR6YJJ4T5HQgYtDGn1oW",
  "key14": "2tgQp3c87CoWkdVHUtKDUoM71WhT1UkGj1gNjp4qhv4EtqCTWbKoMby7ccdtvfGWrQH7KP4yDXDt7CCSXSWRh8aU",
  "key15": "2thNFNwYE4mMQuW1tCmJDab5UBiQ4FKyNbKD3bUVYbSdCaUcLFgo1bzzFFEVe5Cq4x5JeAW4U8NYfy5sQVVsVV53",
  "key16": "4coogc8EoFyRVAWrT9w45rhgxw8z7cqGRYvV5yiEnwHy7qrBUyNFEd8LvJsCk1g5r7cLMTGKFEUggSpQB3dKzC9e",
  "key17": "3pVQSh2QSyoLczaTGvasJz3kmyBEdvCbtEv6Bh8QYDgXkW1kctRswMcSqRoDCn3AJsEevAofJVPsLCji33k6CpgL",
  "key18": "65qQg8kJmiXoRCZDNz1uMfN72eAWuQmS47NT8usZ63v25ntN6FHjy6J2af5XELdbkdkgeJ5Lre2i77AXQnBj8Uxx",
  "key19": "2vwZdvxhG6oddJw9ENMhaFxUocvB5rSWUGvyE9HBWuDfan28Po5HARh9YbfNXrooEGcp3aq61ZRPXB5DQiwSDaPq",
  "key20": "5HE7sx6auKY2q1oigLGC6MEjmStUkHFyPJkFiBSz2pbFBSUy7H43SU9rcZbzxfuJsURfinsezenAakw4RzqvbBq7",
  "key21": "5fURdTf9ncvFKPoo7GevzfS3nVA8mzce6q6sxEMNPPbtUZrVpAvrHXFpeHL64kPzPfBqD9YRjP5SxZTCL7Eds4t5",
  "key22": "41b5BSJkJ8nvgcYhNh8CXe66AJrcTfSi8bDqReuEnXVQFHwxw6ne5GV7e5Lj2JvkdtbLbhvoDaiT4FAsBUL7aPyD",
  "key23": "S12DRntW25XxNXWWgH168FAw3EwqZfKYiQCWLR5RTyCS9kz7Sw6Eg8Tdib8gJjeoAYTbDtn2QUUH9yqwkD4PydW",
  "key24": "3GQy9KV7foLhVVjurbjHfwyZxf3yzWVxXKgRpG5x9jvMZe9gF6ESdD3YNgHcstrK74twgmpeVtpxs6o8k6MSQnG1",
  "key25": "ohZoqh3xXpd25KRzs4zf6FXFUhbP8gWzcT89sZLhxZbDCuHbJzrHkou4w5QYoyqVnG6ehjzKD78HXPLx1QB61h4"
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
