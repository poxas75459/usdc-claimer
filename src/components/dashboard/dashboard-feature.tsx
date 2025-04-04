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
    "2Uc1jnvAWbBo6J3hEVo4dosrn9fvXHxabZnyr1cJP8cUQkM6Y92WZiJZn3nkgzXnyL5gkPgAoinT8d2JPLtBM3s3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ASTBLfqGciwSLyLwqDjsprJJSni8QMGfDYjrSzkrZyGerXV4PRAv117jkCMi7BLczWX8RhwihMpe5u3DsaZdyzC",
  "key1": "4JzBsJQVSp9g2vJSxSk1Qx4sHbczvgFQzWJzeqAY8e6dqEFgiRGxDDdzsNNWyntBX45PJCsG1e8wczsBLuDuS5hE",
  "key2": "32ocTPGq1ExJAWJyC1FRMMBZdeJZuZqvunH4oomhZRofHdkzr1AJjJ17gNdE4k4iD2FLoLqz1LfhYE6HDZHGpuC4",
  "key3": "ZrXXbftowDEx1Qp1UqTgRgfcHscaQcGQKkK8N9BfxFwjN33SqikopTTqfo1pZYKN6EV5RPb6VnTvjgEkqs7fU4n",
  "key4": "JV5zzdeXbxqjW9DE2jejSVfNDbUUG6wrczHd2rLPvZwfA42GF1C4JY4gDFGQoGka9SLzbcwrAuL47wFVC6gDifN",
  "key5": "3aJxG72T4LUdSnWYKkwjFFb2Y565EcAZjJNagMVwbYtSxqXRKD3h6gHbS8p66oTd5d5bn4RM5KFQ4DBzF6T7vfvx",
  "key6": "5JBFNnD1m5PQvfJPbLxUtY68V9oYxsGDc5Ayrjt5YjfTaUJPQdm8t6cNR9h8SpE17kUgB9DPVLNSJQQF1UXnwDnS",
  "key7": "2hCF7Qcng95jefYJyrR3rfNm2G62xZ4DDj2L2SKBgMT46g6aET4ESUiuXgSCw17EfMxAjkMj7Py9wwc3EEd3jNwM",
  "key8": "3ZF5aXj8i5VXaKpKuF5L1XsEHydR7wFoTohBgMsEUoy2c7SAB7Zrg2pLJ7pnLgvDqiveWuqKeoAq4sZssaZ3spdK",
  "key9": "125T1kTyhzXcFp989THCpTYZW966tSFBrRyoSx3ZMtpcZY5j9ibUubBGBwDfQ648LXZnQVNnc56bQktFs8Aa2DzY",
  "key10": "5piWn3snVYpJLo3P4HajvtDAYb1s2Svz32SN2h2PBLJ7G5ASqywBAob6fFbmBsUqDa19aWTgwxCX1oQU8h21wGF6",
  "key11": "2ue2fTgJzeGjDcs4CX7hVWqhmPXMVSr4p42wT1t3d45DjR14Bkzx5j97ezxRW8ctNryM1U1Y5HSY9PW5ugQBtLkf",
  "key12": "2LNgqQNEZhBuBbgVyZ7kejAdiP5i6LTuxaARGeLzZJq4rBuo43EKgD5wtFBA3o9yqv8kax6tuKnVFykrfKPGGEGQ",
  "key13": "tXdcc8m1Sx3ZTYEU3ioW3VGnmWhpiNLsnMJo4CP7BtcTYZbdRrLLecBpV13rs2Y9jLVVRguz5K7vRkcCKwbw5DH",
  "key14": "2CZhp4pJq7fVRuzwBQhi7S4XdTNsnwHWStY5aSYrRAy9NwitpgHjW8cxHCSjM9DqwzEk5FrVQZ7Ae28j7syZ48qT",
  "key15": "2J7tehYCfWUuBbMcPfhJyZNvn3JSeDigHNEeEKEGLwLWeJf892qvzzot217m5ntoFG9YGaT3o423KRtzX2BfrX4A",
  "key16": "Zwsz7Hw4eWWhRjBTHkGYp91YT5TvZcSLdyfDJefMypgXgiPBZx5QgmM4n6xAaVXJWkLV1zSk9oFaNNoz2koYpxN",
  "key17": "2AeGyg5BW91ScHvEBXvtqz4zyn6qaLUGNrbVUMJQHXco7KZs3AfpSohL8FDyat8Wdnxf3nKj7oDK4Q6tExi8SKAf",
  "key18": "4rb8EN44uyv33LGJjDQksr79yM6ptJXzaUdELB8rZB6aB4B8qGepJ99rLP585LEo8TJmwn6H5YinS6jQRG8Fsf6G",
  "key19": "2iQhFwG8NASXUmc121GLuQzLsw8ZWJUwvvpupEqDA3ShhCswSPebcVX13CeGqYXZuYHRry9xwpnbaaR33tj3B6zQ",
  "key20": "sfW7ahqfGniRJcCE5aqKZ5THm8Nm588M2SkE8iPj9UtJxosFQVbWDqYBaaYrG6rgpjEwoxYWDqUFKg2TsFwNMnh",
  "key21": "26RUh6kVzT5kKm4qpkiUiDV34GF7JTGiYmS54FXHewbnw6azyG3kMeMTXicwCemSb6f4hsRFfPWh5uLdnrQYYX7A",
  "key22": "Ai7L778NrmwfePuAUEx9Brsyu2nW9ds4JXb2NKhk89pYVXsbzg9q2vVoW8Sf9AX8f77uKBsRjfaZnmnkDA4ymBL",
  "key23": "4PMwWEN8N4WvgX5WzTUHJNHLfQjXqbwbq1zTiCBMnDaNqyg9GmwHaRTcytphyv4xCKNXoSkGeVgW5cc8s4G8FepG",
  "key24": "3bpUoZWgS7KGXXgLHF6KSoJuxYfwQwGX7zjdK1Zj4GNXJTd2FXxBhhV2WvZ7DQhJBQBmjRfUbX5fxNjc7KJ9j2BS",
  "key25": "3NFx9CZHWgSSBrtoQYYEWoyRMySinRDfYzSbV1LiezK5dU1EFFzJR9EZVhe8VxaWypdTdufL71mseXafw7JKQbzW"
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
