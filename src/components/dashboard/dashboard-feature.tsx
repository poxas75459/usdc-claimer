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
    "2dQrr53qrURwkBN4UzBpVvoEg1KcjVzTQRSLXd98JP2wznkw1d31k96qST9a5JJp1tmzfmc7TLfGLc6vGxNtGen8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eSs9BQUoWFetRHUF8zKEE7QWx5CGo3KUNUmzTArGzkrvtTwGXBc4feJcr7255YNb42U3AYo8HX8KPdehs38y6rM",
  "key1": "LgaGffVtkdhGsBNgpYXMioXAshPhpU4kTRmtC8BAvrGHuSqxL18z2yqLFLy6KjC4goHNjSMmYVNtqVygZiwL9FD",
  "key2": "2UGbpRqpBVTV6DT9rm2AP2qggLunuQx8FCu4Sk9iH9fMPTdwsRvaKEpmvYMvMb8JGJWHPpfZeMVs1XNYiSYiw924",
  "key3": "3QaV4Hevj7ufusY4aNFr5w3uJVkBKvRFcLGazuwKxEG7weKCGACW5bFyEkVx6dL7aJERG8oV2DBTegiV75oQYEo4",
  "key4": "36zgRbbpUkeAhmRJnL28o1R4wzs2M35kQhWREYrved1zBDK5yamVRm7bqC7QCVc9Lu6U5fQ4tWM3q6aFiiwu6THs",
  "key5": "nW6zXJh9kBTz2kKxXh6GTwHuir5TDu6o3AuppbiG9vD7rfo8TSm5YNi3uKaSX4jjEkwGPdGDnJhCZsnfXS9anmP",
  "key6": "3avpNV5D9FmwcK583xaXgf8iD6FbFTVmCzr9xPna7u67F5T8vAFKiY3vdk98m45DoaWnF7WcAUbHicQ1981smX4q",
  "key7": "47zFpfeWkjoPxBk7krPYCaFsWZAYBkfkBGzuwA7tEKKzP4eRph1fxMvHHiBtmtssGJbM5E6uaCSrSB6AK57UZn2A",
  "key8": "3eT8zNwA8x5GeFbLaZ2m4SjELn9pezBEsj6ZmGVTPHoawGBX8reTvmWySLA3hQATnDvzwHcNQcmyNNZKa1okX1qS",
  "key9": "JWxkHdEj7pTATrnHnFhbsTCCYudq6edzrafSUvLopdCgEUgzLUcDtbZkh15vR7jmZPbTih4Dej24ewwQg2BNSch",
  "key10": "3mvSbhGGRchP1jVin7KoiTbMPDvdVYHUWXeR2xRasJ1LrSdZiX5xZmwvr3Hp89f9YXPipkngcGEvFHJdpwUhQBvZ",
  "key11": "5RsegQA7DB37TPHTE2eWTKQUABNRvDCM7hHJJf5M4tSBuuiaavZLQjJakiryX1D4iY2GxDXLhrz8TyAUrdTfMUHn",
  "key12": "67TG8HU3wmWV4vk8cQekRnRZdbo9yySxQqat3pYmmyieEJadGEWELXZ7htfCpZugxgzX5jPnfLXdbD1ptouPG3Lz",
  "key13": "2DHWD7Kkrm4Ww95skWGGT9xY5QLi7dBC8auJWMsPRQ9ddvUkMgFNE8hNFL9FEvX2ZMp8ZtNuYU9zPzqjRkh4sUXn",
  "key14": "qKG6J25ybaXESm8PcZiskWJaYhLVqzs55WaWFzqWnNcffnzi3rUUTCNGFDdrekTP1WcSmSZsjakiZh2tNNHdxjJ",
  "key15": "58eo9T2JGAWw3J5oGqerj7XFP3hVsMy1vMp6u1GJP4hVyBUDLHJ7vRUnMmoWj74g5EB9MAMWd8n8Jui8Rs11yHAW",
  "key16": "4GtRueYvdDDF4iEJdyLqf5QiEBMxnGm4kiw4TW1TURjhRub6ToTV1cS8wTz7mgvA5TEQF93rwoVRFLXeBhggJe8L",
  "key17": "3ydY5nmR3kxPMTebkaJKBV1J8j9gYBBkrJmkFQU1KnDKzYExaxmkWvALmjENUh61af2BYjVZM9tzmLum3QhzUraW",
  "key18": "XfVwVrFoqUihEuZpTmB6nhUFnT2avih8oSVmfxncRsLmw6UNUuNV8U5cVsjZG53moQwf78oAR94Qdhv2VWuEQeP",
  "key19": "35PthswqKUTMzXcWzMnNc3WcmTvefX2df5PExQCeqzoSRvNJ8qEGhZVwUKf5QsCXnJevMJhNXZn3mnvrB4FuNYn",
  "key20": "4789rwSvPJ8xrwAZvbN1mUqtTPmkuqWYmXZhi39oYM5VAsRVnvwba1dPN75e2W8PcZMS5Euh83ZkonyZaMkWhfEp",
  "key21": "4oBbyX7MwyLd8XFZ5a2DAuR58RbtzERGo8iRyEQBbADSdGfTyTo9yFUB6TVnt5diDNyddUfF7a8WeqzB37ATKVnQ",
  "key22": "3Z61cpDK6Vx9hR7RpQ346mFT2WmdSV2KRgpeYSbkLt1hfMGWjYbbLFUatxKsbShWWZj6yC7RSa299TWGfqurrUnh",
  "key23": "5NjSYtMu4gbxYYCrHhy95sEopCNoAKFc7TXFXSBvMbdkpUENaNG1Dgczy1UqCbwjzBPegfVXhQCoWt6ZyAyXmnq7",
  "key24": "5BBN81py2MG1XFVgLstdsRHJDFhoFiyqjeABFmrA2TsCHLXHi4D3TaqRwkmkvR6e9shMVknGv8qbwzm7ZNgjNaJF"
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
