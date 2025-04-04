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
    "2wFXAh8MHdL4MRoJSDx2Fo7kqhUKBNPgUiHoYACjhjAQkWaGpyBkvbmqAcsr4TfcXcgrX2cLoGST6Daz4aZTeY6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wcmp3AT6tc1kEEbMNXV25YZ9FGYnSdxdYrSqVttFeY9rRFmj3QYVdpP2JZysP5gw3aiuHJENJzEzqr1WbqAaWGb",
  "key1": "5jFyuaniEEmo1Xz4jQqxPaJ3PnEjorMmW97GmcBVCLzQoJBgYJX6vVuuz375Kv1Lpmgy3ysijUsTdYcJMeJVedyi",
  "key2": "NFMcLrFNF29GB41hPuE5xf9G9Z4rs86pMV2nGPd8tJuHNY8rfUR6Kj5L1JKhdmE5nBRh1nW73jbWJ9DdwwLJasV",
  "key3": "swqsJfWAkpFWfVcj63CireNfiKW5nMJC7DntNSAUXi41EHZeJz2TzviCn5Qp7f55gwWbydnga1ADBMZ9NhMH4iz",
  "key4": "5rhMir16umUasL2fxgGutyMfz63f3SHsQvkEM9mRBXJaXXtLx3jJo4ZRvGePdN4P1PBJGzz2BZfrb3Lszit8y8aM",
  "key5": "2W3SCxyc6EYC4qKuYKwwUdhb19Q9LzmigdmnHAusvssftxMRYNCg4VCLRuHW9m5BbsBjYjJXmX4QqAbGLimGuHV",
  "key6": "deLFdE6WVBUEi3DZycmA2Kcjta8U4FkEMU4FTnKf74VLLnGC9JUe4L55N5zxPs627bjF4DWoaAsQ3qfkssQ2yRB",
  "key7": "QhifQBqrWfNXVKYpE3w6mWKHevHhDvPsSsrRBkQkL3jbbby6hj4i5ovFbZqdNNx6QRc33CQRVD8F6cUVot9rPub",
  "key8": "FumCH3wpjj2F7qpowjM8GsjNaFCbpU1wLnKgANTWFuQm3BX4H7Y4h7fxvx2oZpJxEPAMi74nLnFkHu389ZzfyGA",
  "key9": "4VPYQJ1UjNshFYac6gHRRGMmryanLkbps17gau62oZrEk9539D5WSYNZhaVy6ZLB6C6rPNmNav2FqD2H8Apjjx5i",
  "key10": "4NkvD5kK8hLr4HHgGAqSo68qtp8pWFmTj8ihZL49JHb2Zq8zx4JiYiPxUV8Z6UzQvHFox1GBYVKFMNNtGih49gVy",
  "key11": "2MednBwgkqj3SyjnnSFK7YunuyxV8w8kzMeWfDELo8ganAxmbhtuRuMcGc8qPsVoVGt4DQS92pcKSDQE5KBxcRmX",
  "key12": "2tMXJSUTtXrvWzhSMwekCGEvxk4g8Wuv9vVz1nE4Wb6b6fBcT3Z1c2UkYhjSnV5V3xbkRu4wj5huJbUbWh7kwoqM",
  "key13": "kxz9dcjTYtQoMSVyRGHJLmVF2czc7jWyPy1SNdkLL2g2PBoM1V5qmMLCUetFZTrYKB6kEZ9UASxddPQhJWZMBtf",
  "key14": "4GtPzmUjuMYF1WjSSVST3MQPN3a7yv8LQXpM8xeA4eVoMhuwZJUsdxaVpbSHEJZQzq9rLkZ74BDCgRV77KrYSPms",
  "key15": "5jTHaHyDgo6LptnEEvdrrqoPHKhDiXGENTxGwY3tGa61y7vjAnuKygJxdfS4SwjEGJqK7rCSFEWzJAz11ypqUsy",
  "key16": "5e1DZxUWQWvby97aCnTYK1u3TaRuiFKaXFUWE55KLSEiNyKyB11N6T6VsCa1zUN7AruGw6HcnZYy8vVmiKD1i8e5",
  "key17": "5zewvNYZckmtnLqwtnt2KR6FkVmAPMb4KoiaJxh9YFCqPENvZUUY4PRjAmTjuy4FYkvsjXCZLByTi9SKRUeWAH1A",
  "key18": "2PBTXYewYzrvxu6cJwLZ9fSkNPQC8k1HTheZY1srWQx6CAxRqT527sBgz2QDDL1dc6EXKg1NEtJT4PBPs9wSwJ9T",
  "key19": "5FyuwEuNZmJJzeA4hCQLVfgorFZ2mpYKJCzBPvtQ6GbTFaRbeN5mf4fXvnsRCJuKkYQkq6HA6WE2Y7g9cMtijSTa",
  "key20": "5ZMakazyTWsUng2FTrr89WwZPqWWSBWmz3MMESU83epnuTFQswskzVU4j8BD6jkRDxciYVQg2kXY9R3EYzFngDqi",
  "key21": "b1XLR73wU6eosZms1GfVneRbPTGWr8LSnewXen1M8qvq9qMnhhhSwaVZwRnHqJpuDSgnR2uVBiAzwQzaRALPb4Y",
  "key22": "9jRR18JBPbthYvUbJLfiUcP9w1VRyEptSvBuCuc8bGT63HH9PTYhA6ZBVGg1uf69HEowwD3F4iM3HvnVMAM5Lpc",
  "key23": "4rnoKn7HVb5YnKNyBNGLxmkoqgNBRdkbKv5WzN41yFYWFe8D7WAAPGiggqDzYEE9GanF3XVLD1gPqmyCjZXAdJ4Y",
  "key24": "54SvyVuyrVGwhVsLLFoz6CJumpEwsV8ZnM4UkSssd1Ruex7FCCKAAe6c7yTnNnwof86jLakkyBjoVDSX5UDwZPm",
  "key25": "uU4HxkDNmN1Q58RQBzPbsHY46xjomS98a6Co5x4Na6yb6B2u8BhLBhfEN1E6GJ5wZCBEFZpoS1qee3hWZpgNNEY",
  "key26": "2jJav21yLWyVZyxCJKyVZkYgbRXwpM1ZzQxndNBGGeVev2aBRJ7ctSuchX4eZbsWxvSWrfEQNnRx1WyKJECcMmRj",
  "key27": "2zwWtuQZzkAM2EttFDhBKyBdNRSkbe76aSaDXR3nrmUqRQwT3Wj9HL3SsNyhyy5RMFqE87jsTXyKJ7axs1esAizp",
  "key28": "22gtf99FGjUYUSFwbrgtxERjcyggqZoFZDz2ZKh75Gu7PCVzcc91wWcftNBKf97me5ZW5Hb4GMzZsxapxoRKH2Sb",
  "key29": "294zcgoFYMzn5dd9eRVHu7ogSvPsBD4bREaMppcuMsWonBZhkUvLPQh6HbN2J1qS6BY3gTULYvBEr3KLMVanhEn2",
  "key30": "4mvar4zDWq1M2dd3PNu2tLBhw5AYstth5YX8ptHziqQ2vCTioExPzhMF9UTgiya7hDBmL5PP8BT8T2TpZc4quNZk"
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
