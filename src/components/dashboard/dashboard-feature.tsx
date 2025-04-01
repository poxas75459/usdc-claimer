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
    "5z438Yg5N8juCBkRcA19vhoRxkRzNJFTBMntwpupVqcJqBbwLRrry6ZTH4ujGdnQ6TvjRWKVxy41NbbwbV9kLu68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hZ4vsZoDNRitvkLypSKtPXnejkNXqpdwhyFyTkrv8WZPTEPXKGE2AqzupqyvHMz47GAwspjsLi624EryY6d2Yib",
  "key1": "5g7VyUuXgijY1FEw3uvg9HVa96pZ6RLKbg59Z9D6MzVAwcLCv8T6ZtZ9dXaKmAkKzn8PRXq8FRH6yXZBVWfEsPRD",
  "key2": "vTVsu5XgNjUbbuehHEwxNJa6RLwEdmZGsG8zdYgH69r6uNfLpfdUgiHnaVDJG48gLZaF3miPR2YRkWuur1sZSqN",
  "key3": "5GpL3x2xsbmZqmdfJkWobfjYEsdi4AokoayoNPMH7LtiCfKX1g5CRRXYrW4oJF1DD1vx9T31vvByQeuCWhWkpuJi",
  "key4": "5QNTTUGtP8VjDj3iek9LxbutcRhAK7DRFX2aebeFQLSKi73yg6XM8zX4KXt8yHDrUuaXXniumkiSBYVuDU1rDXdP",
  "key5": "3YUo57YGvKwRts5hQvonVYmukHhTWPALDX6iuHNjrVs4fVnRKcMyBTJH32K2KfibjuZL7iu3kPgq2AJANzm14Z2c",
  "key6": "4cLsmYhxJG6xiXBYj3sLXFtL17bhbpQ9vbJwNh55gjKC3sqTxJajZeth9kwvWGtnf2C72e2jZW5ZQzF3JX1GZnNc",
  "key7": "5vwxBsq1LmJkzGCCWbgy4cjx93KkK4AKT593NKbq91kguE7MyTKa3U6VL9AjE8TdoPqzptEBu2TefY4ZtLTvuaDk",
  "key8": "3YXrnSZnRX7cJnV5UfrW17Fu4EVFC2uDqjWEL7RGECxjG4vUPSShMuwbE1N89WWVPKmM7gR1Vi551dPQ3sphP7zu",
  "key9": "4hqzvc5BzppY5MzzoKubRHUcPjQpm1cnTZFgmpYL324F1GZNTCrqq36ZnrNoq8F3A47hfgfoxH3no3mFYFgVErzF",
  "key10": "5DTRAc7VRwra5vWhUFb1oZMQfgWAg4VUPWbfEJVyixBApVW7C8DU6gRmXAxFpeGdAofBs8oY2BWYB8Z2NC72PygL",
  "key11": "3wiHRihvmc8iGZ6YiNfnBeo6ZJLwsxK6DjCg3NV6c6segGfQRrW7XpZ2kUkf4DHL8VD6erF51ANp8bDz1o2ZX2NG",
  "key12": "5odGAPpEBC2Pa27iBMB4n1R583xjtFBrhwrrsipDJTVZqmfaSL8y9oUr2g9sqGJKGR16JqMDhcmE9kWhVgqgv8CK",
  "key13": "2DWhxyXUodMFJLUuthLpZpb3V3dEqpnW5vznDs4he4jEEvDcvJqemzs6tk74AvXGLnTKbREpJL6rdVU9xBJzHAZx",
  "key14": "3GZrQVrYcecEA7VxkksdyukyKsuhc83QjwutSGqXebnoUF2fLEFymXhBKhKGUAJkLsSV69vQvV1zBhgVrbkx6BRr",
  "key15": "3fQHmdYhK9Kwi23hrLdrPda5EzPs4sNAhnnAFeLN3aoFhKTRAa7GfM9gxXXtTg284tpBf13Uo1E6uK4vWKBGziiX",
  "key16": "4qUi1RRn2dANBRJqgYTLyYvc1w5sqaHevP7dQpsPH1xehmwEkK2Bh3S76KxTBNxMeLeefo1rH2W6dedHFsEdoFKP",
  "key17": "3y87HP2GkYLqjtQJrc5gx26nRKbo5vvCF5AVTofibc5Y2Vw7ENaowZneiFRwGJtBcWWGwaRpfEhwaFdXXKvHsjwc",
  "key18": "2dFNYSP2W6QEJRsg1EN5vQa2Qot7S3C6fkUxw4kGBgqf26mkV7eST33LWV2ioygB9JFn6pRVqNaxHybomkDMdGuQ",
  "key19": "5g78ZfWrgVgnJKPwZDTv41VAuqq8yiE1uLTdqV3zgy3h6uFPi1gCjcEiKXs5a6oYiKqoGiL6dEuMh17SQdSnHrMc",
  "key20": "564GUw1hHWE7wwLwB8B1dBFNvfwAjJrs74ipjMGp8UoKK2JJPvZxnVLU86yuuuU3ZBixAeCCF6icAiChmyjZtxDA",
  "key21": "4KRgAEvtr72gpmbbafTrh2AU54rbVZJMaokeE67T3mSNXzBWerW3JcFaYaKprnq9cCiyxyaaGTopHk1K3US1WhTf",
  "key22": "3zKsPu6hqKaJs7AH3veioNDyD7jmSHv41goSCf2GaMczixwtzGNCXo7ZRXFSV477PRS3GtqJS9dmGLydk73v9xbf",
  "key23": "5j1xC1XpJtvJvyJT8Y9EjNgtF8WjVnAYr9mnavuVVEXtJ66djAPo4wND6x13fanD1prY3guFL6cE1kPthYkiZ3t7",
  "key24": "23ThMwGuPiW34BqMCbDdAAP5Euu4N5UUM8vng3Hy5F6MvJhwCTyW6YShfXbLoTVAb4t8N95WV78TXaYx4SWpo55z",
  "key25": "4CVGiVy6r3AfeWsNWUdpDSKYzGRr7nStm7jDHJw5Eq2kXTzr3RHNbiUN5PxA9M8wj6BnQZ6Qa6QJXSgC6Vc4ph5v",
  "key26": "519dTCMRdNZmXm6teWtBrJpVDcFoCaCXoHujXob22MrkHmNMx5XN2dqhgx6w25jPvfb7Yu6kGiPvGQyyW6QMq13N",
  "key27": "3A3foW4ygKECMyyYY2U3xWTop1YRpmTJdRed1NL2g9zL9aG6TJBn9FUS2ceNwkEejFFVxZSy9yhRFTjYDs7Djvti",
  "key28": "5QKFpNNaPNzrF3iC5yJLG8kW5Zqijc7XaLsGBMPYdAugjCrhWcahNCHbq1mWB2ofVFYb7e5yijHm5En2KiiZcgts"
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
