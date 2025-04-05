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
    "2cHhH3G2R91172TdDKjt6yDmNLc3XVSe7LPY6FQYX6LW4n7gza9fy4kwFj1xbgbQJQctjJmJsU6A9Tc643VydDkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UA9AZDtJE1suNHkrpX8X2txcXH5HyFQbxpLFK4GSEUKjht9BFnri3uBnb2xdEodrBVVrYSdmwFsnomtWWjTPEcV",
  "key1": "5f7DZgrQXMS1eENvvokDrt32B7KpD5rLPHqiujhwp7FwkcQDwEUbsLKaFNGVs2mi5qUScfyFGXiQCsa2acXbd8pW",
  "key2": "66tVR7VAx1fdHVKYbJh1EbSixEmSfsdEvkspDpRS7VxkfX1bGJV48qdbVYyFdJzBT95DcxwTXFD8b2imCaGDr4Zc",
  "key3": "5z6GCL4bsEJappHdcztaahzfYac1f3Ef3GDMfa4cYEvyRASd3gTEbEgR7NYA7JL62jkWseeERAJLChWS3nxonR7z",
  "key4": "4TcjAk4aA1yXjXsEVRrS466hg5HmeYNZFiwnYQkTYQ5X8vd2RrqRi9AX8BupevtgmtfVDB1K6XvHECacxrMWqWWT",
  "key5": "34KZkKYyhtY8AkemVy3ad8tX1RYq6pumEZyw4jhhybACrr67PkMMPHR2cSg2iMpTomFuXtUh6WVogTYAfHiMEP5S",
  "key6": "47J72XQT8qEzSQVGEcjNEZZdVBjTaL9HP1Z1i83c75ZKSZec7QAgzTMzcoFTn9uQhFJpaY6ZBYciCBtN2odpxbPM",
  "key7": "4ACn6Qz9429Rc3NrsmUU3qCwLQFdJnzDwpnfSttizMv7GrzATQ4E4CsZ7E5MHR1dmsPq9cwazFzKHzCaeFr6cQEi",
  "key8": "2YVRdoJsRFfYigka8B29oUrbBzAHE67fjPiFQTBvoq2kTJhWn3JnAJYF4CKeussoAFWkgfARHX1TEwPmzjANT6hi",
  "key9": "3x867B1P9TucTedt8NLdpbAbSNXj9mxU8Z3LPCEa5kDa5VExtihfH7bCZB6M7QtUFxkvztCSUUHRbTUoqu89F4m8",
  "key10": "4uZCVYSSjiCQm9cDUzd2EPH659h3ZyAHvmDj9e7nTWE96upApKTWfn6qfuESWrfgjfeFtRCNSLW3R46h7KwrQKCr",
  "key11": "3DgTKM1HxuRGdRsiBgqdmDdxVEFM15QeSECc9nRwZjbmkb5gnegzhjmHN5NPbNyUYmXr1x6CbdYYpV5WnaWBtjPR",
  "key12": "3zbWKcUmED2SmE9EJ48KfhXAhnMnEMFNmoqNRBywBLsPNqbRBH8edfGS7cmEJnrAEyQkHQDjKNgNQmM59Gqy3Yjh",
  "key13": "5CnnoLdZm4aApU7P1iF3jRN8MBw29f76LhNhZgABNJEroEH4nKD2hvgCw6MBg5c5CyzvmhTWmvrPmb7Ea99czWK9",
  "key14": "Um3XBcjhsBW6R6w8PnBNeym1h7CzAJYeqUrz79n2xNXXTQJX7uWS6suDzfdieAQh4nWuGQgDR9KsbZruAPxsXKj",
  "key15": "Aq6hVqFZNMEzEuRsvvQLfsJuTu4haa8jpAxEpv8Um6u8XXT9z4nb9wKb1jdgi8B929rPDMF6mnyTSSU2K8K36wJ",
  "key16": "2Dt7fcGKYAC3TVjonKfnV6VPn54vEhtx2Uhzg1QzutK3815s5TRZdTKv8Dq6dFLhkF87wC3QHVYn8hdwmBqc5ipD",
  "key17": "3MJBGSA3bZUwCth46RpsHb6U6TazWZAKwLS3imWrSW2WVqi6qiTjCXbhvCYUeyiWYX5NHMjFvXsiGmeNaGKDdAdf",
  "key18": "5QN4UHzajdmD5v11pBXQ9BxBiCrNSm5DqHargUitear5QWsaJT2Rbt9DgFb5qNJetLZZSbi1ofU3yGfpAy5gkxg3",
  "key19": "3bNEFvPEeN5Bv38vqCAjPQyDvbPA6mMWLwC3cyPLn1GXmcxpuNNtRp9pWiFYe3F3Vj8vHVBoc2ZNoH7Dfu5j4WTM",
  "key20": "SR761xmJjBo5A8xeWLxsWshPwQpzZvgSyxtPCqa4swn17JYkcvqrZBQTt9hsSg9crdCq5kvJwTzAUko6bV6Gi2m",
  "key21": "3eN4skSQNRFY1yW7YY4Tmkgzqta8r3bgEeXnD5Y8PVSTuAdSGNMCReCWj3u7uuu7GCEpzk6kiRJhyS3XVYBKrYSV",
  "key22": "4kb5TmaiweEezaS1bsby9mNgphBx5zvsZK1HWJoeCdEKcYiWaJvHzUQpD1o51jYU18aEmUJKax3xxUkcRAVYs8hs",
  "key23": "5n9KtJN1NBetkXVhye2bfT5Z8MJmkZ3CfqoER1vXozvq2mm2MWeVtox7DYWm3XzAzuBYeV9BbW74je8zdHrzx68e",
  "key24": "5bDSrA6wLcCkXfvtZtkhrXYAzo4VB1T4tmUFi3GPySHweSCe2Yk83VMqCjyTCUwqAVpWAD664zwaDPUELoPKGYAd",
  "key25": "4zFWznZuWMKGkw835KHMZd6jJpEkFGJjpQdazLQZ2FrhnWS8o7wntt8j7uogZrigsfj1z3Wv28zaLHwf5h3e5Adi"
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
