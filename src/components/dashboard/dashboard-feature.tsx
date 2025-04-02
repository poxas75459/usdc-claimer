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
    "4WdfwxhAjDm4kBQKWGdyjh7LP3RdaJwmA5ibz613S9gyENDK5gDH4tX6wGhoWDMigruxVzYDLN3bHd7vdmGXj2xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32yfb9m6LJVkjJwzwSRPD1sUWjV7PE8X3T1EAk7P5yykiRyfcDGmG8FNBhrzqbqZudrybDCUrLx553xMvnyUSXCE",
  "key1": "44bvqAonVDqX6P2FpewQwzSRh6oNLtF8uK5jo2B6sChxB5rtB2ZVqLxzBTA14Fv6gLY5muGVfYLUJNLjZJM6T5Lt",
  "key2": "2sGSvLTv8V8jG2RopXzL1zj8WyBFiGapsHoMvRaRouQnCs3fADt1Ddq7HimzwWGK3vByisHwiDkGuWW9bKrkmuPB",
  "key3": "2jsUfYhhcB2yzKXNoYoXBgyrwMXQfJ6WWddtWsubvQaMbDVWeC79HA9bnuegcgNwCa2ceuzwfKM1AM4P2G67niBu",
  "key4": "Fai7YNJtFsc6Mo2xfTZyXiqD1CFrpNnvszS6Lz4qv76Grmx8v1RLmt8uC8R9hz1XDbpnme2uhGYrtWkMaW46nRY",
  "key5": "528w2kYDyx3QHbLPRMS93cmrgxj2npQ44S93HVbM9BsuYMd74H8Q84VeptbSF5Y5gufm79VcTc7rFEKke6mCJ54A",
  "key6": "AM4Z9wQ3srvhK1Z7mLBAPfNB3FMNaRwnDDwT9CeaYivFdKB7wvFm99YyHfGPYZvdADuAKRgAdtSyKpv1aJoenZW",
  "key7": "5xm548fmUQjUSpUC1dvEXjVyjQvPjfEJ3yFJGMEFgAtu4hKhd8MCeH8MFsQWqYkPvVTuikekyYUmw3ggKwajqZYF",
  "key8": "5cuVnQie3yfBv2Dmd42GGHqe2VASmGnUR9rC9p4nXWuCsrVjJr9T4xrEMYRakosJLGvFyZSSyBF6LwegnZpTCwzK",
  "key9": "3GWS36b1p3g4WFq5AZbwB6XCabHYPy4qebAxYniwNg2oBjnxus6SpRJCTZgcReCCkRTuBiYfEhALHukVH6xhyVNR",
  "key10": "4wwLLEBZ56DaEYfQgmC2aRtYgCAmu5WRLNFXMQMjePoU7yjJVrb4MEMhbUcCtLffqKzzGiCHBoa3nihWzWH6MF3c",
  "key11": "5sETNzjugxMpqTcccem7GmmDpX6HFymFuyiyZs3G8pjzV5v2h2yAFjqqxZc3d7Xj1UZ6EfUEs1LHcL61vDTusva9",
  "key12": "3w6XFgC6R4YJHKfrTSo9qHRPyQ3uVfyCAd8B9VqVVbFVib5djLfBZusyvN2Zm3RTsz6Lrz2cSARsWiX7t9Lp1Sk2",
  "key13": "4FfMbuorbQHM7jCUzTCroYCQ8qUYJ83arVVE62mJJdLoHAjsJGwD9md75BnoEJqSqSZ6nd2sRd2tkHGndnrQHoXH",
  "key14": "5XUMaVSRm8yGV4Kn3H7njipDtyVBdbV221cye1NM44ua2i4sqpTpSqrz19F1xc3ePES6EygWotHwjDvHkVtdJCD3",
  "key15": "5QJ7EB9GhPQkzKrFVsZQnD7vdnABZkepq8arZCPRm1wbi3nPYhLfGGehHLgc6kGAb5Jp46qiGwRcTDgQLZu1FV7p",
  "key16": "hHNNcQRyeq9PZh7e6ih2uXLxbz8u71mB2cEszRGusd1XP8kkHxbHdWmEGASMw7uoCJ3gtoXjTDgURKaHjv6FDFp",
  "key17": "3Z6p2Kji8rRhafYxsSzSSJqnqJBAsktkGMLVsvEEs8FFpFTC2x9CNP5d7Q9tfsxxQHxFsGr7KcaibW8ZM6M7GHh",
  "key18": "3sTCayHdw4UctfG3xCVFvY6RTKDeQTNPRfQqSn51krpuZ7EfRAkase3rpzzE6pQYEBhunDdnCD5cqvE4KZNi2Pir",
  "key19": "wUbuGLfhStCNwKYnsTBeoefDWQSHFL1WPkyF75W6V621Niq1GChSfhqujxTjxD8T5ZQEvtbqGrz7YU2Z26tY8Hn",
  "key20": "3N9TpyNfjDSKMiUmjJ7qWxUQLaPZZ6A5XCHztgkSwcUP3fLbJhwRu7R2AFi5mcm5edbGikgbhYmjFsav75xyYzr4",
  "key21": "39wbjTWHdwVWDqn5NQvm1xwUFDJhTET4mMe544WsG9jrhCfhmooZMCr2UMabD4WqRDM3B58p4UpcyMF7XGRMnPxz",
  "key22": "4yvfDpPYCRYmzsXfgpuGjorkog6r3SBdga66v4MQG3RWiCEnnvUyP3VbhmtbzqmNEWbv79yXd1P95Z6pTtjnyJsH",
  "key23": "2zMmTMvjKTrpRSmdo5FsG1Euv3Y63Dudi6VXJmp93nCx8wBZFPXTMReZKTRh6sJ1NXVzMtK1fgdoyYCAahemVSD3",
  "key24": "3UkLs4VFvZGL44dF5etc3dVGKjUY87PJvNJNHfRwHvGdfhy9xbf1GwksF2aQWA73szad5ih71Ws1tZkYUVQCrhcY",
  "key25": "5uy6FTZrxHjDcv7P7ZbYXEqqrbLJDd1LLfsWESvw9FdtBf3sWxm8oRuZVJKnVyWJM91bTxVS4wm1icKnjYmB2YQ4"
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
