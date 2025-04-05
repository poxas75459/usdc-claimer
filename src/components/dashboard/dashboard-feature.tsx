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
    "2bjgYFRJK8td4WGFbHfbRHF6E3QqJSVBkcGJ3vPCx4wcEfKPzFjT7UNqV9fVP2TEHNg46ABFqKxb945BAw8S7Yor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLREDNe96fkSFneinB3eN2Grwypvk58djmJNEowPMbX3FGCtf92hW6oeZqxEKbj8tSRsotLaDiR18jD4ovRvsQs",
  "key1": "3VRQMv4nScBpzoKmh5DBA2bYU4WiJSyR3oRjMCVawmJAPbeFksefWS2jpFB52CXRVA3BF36eZGgunLde4j2CXmK8",
  "key2": "2Co2ivbffRJDapzVoAo7zocWpBqzgfqUbEdp5M4MWrHajC8XUPJVrCSGC5bzAZNbmKCESwZtzEqEV1RneNam2aEG",
  "key3": "5Y97gCiuTryJKwyqazcYRrsGHKnDD5zd4nf4T27YunxD5kT716tNEvr9zfYu7LUBZuMAySPWDwiF38b14G6LnPNG",
  "key4": "622jBEzjdn7djXChaPVYEiumRiUov2wA7oYvCmGfq1KyHHrnbWNRv55Cm2TBzauzD9V4qtyYJj68QY6KNVwqGHFu",
  "key5": "2y5nG6bddi4KPDec5gGZf5kLBLDsMCosiTnHSuZo6SeZy2sUenxDxPkv7g8Hk5YihUgDZcF7trz8grUiLXwso3uh",
  "key6": "5apDujKeUpR8LX61eMxy4ExxHC8tDrJ4ZQrAm1dmxsCFdJYNrraZ6QELfEiUMQxoFEjbXQiYonGLhcuXerHqjK92",
  "key7": "4CjTHCam5TXc5N9chJzUBox1n6nZEYzSvth7hSMt6WKKGgCqQopqBxkEw1JBnAyykT3DAwMd6P9G62ZzSebGksPi",
  "key8": "2i5qUCsXUXivisVingLfHSP5zxbDkAT9tmdujRqfmCbxxigyeuqnvAYbqfuLGVF75uSXfyxcQNH3GGotMrspGsiT",
  "key9": "5gNFrEbMRjmZNmcXrNgiQhZ95LUFPHdkpTC2izgQYvAgyS1pTLaYf9L1gykohPorWwktnvz2njNYzoa1Kd4sVvDL",
  "key10": "XwVpznHH28fXtqySLDxtRgMKUYAV3m2u3aFPvwm9eMU4AjhnzUdLD2M9iszK265AGNT8hohs7kFZjZLuoh2Cf3A",
  "key11": "2df7u8vnpPrCfDapHy8W5mKEAXSLx3rePg5FKtjkX46EhfeehvDXwGt9jUEQDnPhjZNGG7VAwpuxEoe35ZdqSyEG",
  "key12": "5Tg8QKShRCp3chn5KM8VM55EAtH5K8ys5WLQUwrG3XGJbwuRxmVCuDiSE76zm9L6ymEnrqcrS6zQ9VR4Ktz2jh7o",
  "key13": "3TZviGQGeW75kQ7GGVKsmNqVf3igBfUcfVGoBr7m6iVnH4wjj4Ap955N3deEs7tAufbmo6CSa64ETpA3bjQqSvc1",
  "key14": "41DeErw9Q1Kbzz7XqCt1kC3xyTyD5yjbJyLeYbiMXHnMy2D3MeJf4wizFjKjwRzDUwEVkvFGLxiVnuv4yTm9a5SD",
  "key15": "whischjS9Zw8XrUEdm6HCSdh9J6FJuPrhSJ2dsN6oErN1HaubPhWFsqWiS49Scghtgfqoz8aKYeoDsBr4CxnbCz",
  "key16": "5263y4U9r8pucZD7FuD7FcoBbRLmCRQJbxNxGQ4tCbgAbsn6B67RSySD6QFvrbGzHfDZoTkCWNmLs9jPUW48DNyp",
  "key17": "Vaj862qNhujb4zGNo3ypgFuSTjU1dTh6dKhKyir5Rg235pmvaSEHcdGgjGdzC8g6XbeuKt9rTaZFxN6CZCkCgky",
  "key18": "2rMzov6gYmpJB4inMmSYgXCQYJNzjfJzsVKnyk9qxCVK293MHcM2rcuivvskcTzGd83Ab31kQGVvVhHTWeSSDSi8",
  "key19": "3qLbhnUFkDdmdyH2YzoFxpg48KdP85ounTY4LYYTTywKnzo7q9ks1rUeXR9wj78QTbQHshN8LAjMLZMn8pjdVi6N",
  "key20": "qF1fbias7x1LPTvQHb9Hry4mQta9r2dVSRHtu54cERVQgZv3SSPXUL1QawdkVE4xHBvjbrVqaEsD6KmFEHSKwGh",
  "key21": "4HC9mREiFxzx7D4tfbH5qiZ5P64wDZNQQB8WdF4s4aXSh9DBv35tC6PLNAm42NCy63j4GdFnQnr6xtkHUtAW5dWg",
  "key22": "55Whw3LPEGSCWTReHGgtD1LpngNdWTT7MVdoHvtxQiXcEfDetuxtRxZRYMCLSNsXvBUnymAn45iduH2VY7QN3Y4g",
  "key23": "fJCPGG7obojX6p3ki4Bw1NqftM8yUxCdMFNJ2GXgUZTsSHW9z9Vt158XftkHbDeUe4rag8uPbA6g5STadcsaWsL",
  "key24": "2RaDQacrh4vPZm74Xfi95XByV8fsnNK8izZCf6BUk9rc6sGPGc1fd1rVBUkwAYiNqRLCZmUHZQAEgDkdcpWZptar",
  "key25": "2LWar5AWy61g4ehjyT4xvpQXg6Dv28UbcaLyxcUMHWzaQ1c9YSvYrFzJawAk8GdVi2AykdJJNepKsj8tkpjBmtWX",
  "key26": "21hFZ2SyEeVMgXYFYdnfU1manmQJUGqTaXrTeq5U7rHhP5ogzViVWp9BiYjeTBQGzACQW5HpuUPm3361SqB1ME48",
  "key27": "3xhZDVK4KcZrCppx3jqsHaitv3VzPwt2yxEhCPEd53fnEWUuBvxMT1gMZ9LtTkLuxq5hK3SnLAy6STbGGmzGiKV9",
  "key28": "xDZQvCCBSHYic5sS4aj3bZ8mxUTsfi5ynTWH3Prp2n8RKo8sSBiMARMgXQExQ9B11w9ENiSBNh5xBCixtwYXvBh"
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
