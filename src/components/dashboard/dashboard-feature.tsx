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
    "21geNJHPu3csWCF8ijMi2ryefbTfz4R2v1gGzyWsyadPztWLFhLJm9DCCDjZVFE8j3cEw5HuxfbFpE4WjRPLrdyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J2gt7kh5dKMziG6w2VChqo7xgBpENyByh2Y5FYrL5JJwWwnSBxkG4GR9g5kwT4axmGmGE5NYLCfHRtxcHgNTBQv",
  "key1": "5M9jb2hsJGcgrcHwA85SfuswNLgmkvTvNuBD5rzJ5i54quQyspqkp4ojYoq3KdjZ4D2JyEJ1XSdgmGoXQa3xGYnS",
  "key2": "63XXDy8R3DYQrM4YmsN6J3numzYWN2XHhPkTuae7yxRwdzps64ibfJGhNCjTsig4tDGeJt47CzQGoFDw8MFm7h4x",
  "key3": "4gTgcTyuabuaL91T6gZbDGAwuXnsK1gU3LQHd16kboVzR4DpJhvyXhUBAEfA9ofkKkQo4NimfDW5nyu3d4pd4pHd",
  "key4": "3LaXdNZy7YMWEEA4N34WGB2jTHFuDBdzmpUTguYELoFnex8rPrDpwjMxVawHAPa8M7Tpiwp4zp1XeYhxpHG9LYsw",
  "key5": "2cB2ehV8tp1vGryxEGGhCjhGBhHDCa5SWFUVcCKefYg8Z9LNA54EjYHsQtTKDCJUiWwK756iDn5kGJsAs7Nscyht",
  "key6": "3Zxh2ZDzMdS4D4F4TNesR3kXVK1aZ1z3Q5b2kcoGougVZPK3KLzEnYhLFU7G9FYXhUcLtoMnKuHuMFn3g5hHzuF1",
  "key7": "4S5RthfUVjw1tD5yuQ99MAwZKEhn3jawCXo2CCR6GXrMWRqBQkxmrc8vpPeKxVfdtp2QP9ZTXrwXFwgDJSMxmSRc",
  "key8": "2QBuTsbqtQ7TsDECqTRhoS4ubaTtkvc22edAPfoE1RnEofZrCH42BYkqgb1UaomuASEFy3DUiLpHeb65vG4sEPno",
  "key9": "3BvK1p3ZmGhmTWkTUJiGzHnMnPhuiXAvNSAWL2MdRAey4uUjDaMx29KR2YXhiJEKqvULnRUkFR8PHV5pnAJUzmyF",
  "key10": "43TUkpJ6CBHXrgT2KZyTfCdvRZXyvUbMQsFQXPANGs6uNanTTcnkEshACXZ2w2fqZwdu889jfaPuMCtK4AmdM1Ee",
  "key11": "fRHuaiHNPCiqWDUCmU9v8XJJQ69WfEHke8xNKS4PELjD5Nc41Rx7cBo98yDrt5hJZpBKkW3ZgeLuZqCPn4WG9KH",
  "key12": "3DdFkkkKeEgzPAL8G4R7hRjszFVrxu1rcqNsfuRrMw9wsS8zgg3i2AKb9u9XQsVWN4YUwzUKHhSF1vymQ7psrbZ9",
  "key13": "48RJHy5r6p9UfkhBBhesafc2bfiRU8LpAtE8ztfP93EZEQrBFZVZNbfGjnbZfU5XbDSWypp2JdWb432gvk26Ts34",
  "key14": "27jDts94KTGy7r9wgvAXgad2mFGjHtm7TsKXFJ2aVfuGiJXTjPanwdbVTdvp8zpYCiPMpLbgxmrXhEEHwj3zKXT9",
  "key15": "3u3srHE2UFsPUVTYmXr6zBq7tU7CqSSxTGcFcmZHgwE59wZxNeMQTs3Z8eqd16e7UgpicQ6KBEbmMkTHEUzQizbx",
  "key16": "2yxP9SQuGnAaecWTq6QQVQiWz3Dshufk5hkzFqVTGYFvN5d5U4cTYe2NnAL5xzsfQAmx8eLSvgqZ7u72hM69G1LA",
  "key17": "RCYHsY6MffbdTcgqduY7QSVVm7xpbMEYVbz3BBGAoqvnHiJ8HHEnrqUdhRrPLFgMmbEqrExW1xEWCaAyYBeEP3V",
  "key18": "2XND7snzoY85kbVvqH4hd1GMZA2BsGSHkEAk5TQaA6rB8GrZGGDQJsv39dzYZbsjvJN6qxx1Fz3vNcLEzkW63VKV",
  "key19": "3JKEYjJbshJozVHnBuKUfQDonSQcHqrHBRqdTNmqJ9bZT3Zf55jfwXF9TJeyKS5i26GDRn27BLVodsGyDQrWhxwD",
  "key20": "Aoeh41sSMcnJw4woNKFVYy7hdkYx2n1RQ1cD2WUDdBzsi1dMt3mRvWpAn8gD5Yo7x6mRzEGq8JBw7mYJ96MzfEZ",
  "key21": "4cK9ZPaKk9a4gcdhMKutqYtLog2BSeU8xz6s8qKWQZuMgZvzypsBDFhxqn4VL8aXZSAfQQQQ39ZthWgS4DP6Ktr5",
  "key22": "5TxzceKjSUvX3f12NB1mgF5zmqMZFNy6hQGrDzQ3gLv5oofgPUx7uKhQoWzySVYkwcRyEXhUd2pTxZfMGDCFQdg4",
  "key23": "5zQ3AAVRRP4zKSMRAVtNpsR1Y6j1BQ7LcCuoDwqtVZxKhxyrHD7ohwUheh9zYmA55A8uqZcJVRsk2SEdg5xdc9eD",
  "key24": "3aXojCpkNnRJTxXHRX8HBoUCvRKkPLU41ngJ1M576oQFNyPKZyT3c3c85xi9i5MNjG7J8U9ckNWJyifhKhnYEdAp",
  "key25": "5U2uu99wiHjNNwdsZJ6Sr4eboVp4ENPm6JCFCXjqzM6wpq92e2dmTcEbkPnDTH5TvdknEQ2v6faATvsRFtYqhMvP",
  "key26": "5Jt33RSVME1UAHU7GJYK4GV62QqQaL3zGT1BFwzotoHqwP12UxN2FrgucTmqvcn62EJ9faXtmV8wWkY7L9MfLsj8",
  "key27": "3Z1Wr3nahnKZkLPrG2YAfn76thqTyRymKh62WCFgHRRRkHDRJFRqMK5PMaM2eY9fkXSWf1bttqfpK1AYkPehUD2B",
  "key28": "3dg4C5YQz7wJaa8uehkYdrnjdJVyX8xdrvSrV2Ch9vmtzVvCPeFdBuDTyGizWeyms13fh1CSk7yn5WG8rGZr6qu2",
  "key29": "9XV6dzSW7APnK1unDKLpiBvnq5Fw4SycPkcvgAJVkfjuERm4bWt8uyBuveHncP6vGH5HM8pryUB5TuhpH1ngvVE",
  "key30": "3fuo5e4SnXiotj8nBiL7Ki5RLy5CQ521kJfHeGYMvBoLYZS7uFcLH7VfPFyDgC2VqbiStqQrvQhiHD5CXoWCgX64",
  "key31": "4CxV4LKMW9bnfKd3THHRMaMaNH3joPFsQriDSBp6tW38s3tATV7AvHVneWK8RgVUPEtzv3GpodXPhxv7xqWDQs3f",
  "key32": "3TvSiyab4oUgfdx7mBjxbKxrrTYw6cHZbx7frbzgret5pp63MXh4rtDrAujXbmNWuHzgW36KYRk7zjdkvmXvfTD",
  "key33": "3w4VSBQvvucBhrt2tEtJriHBX6ugypawbT9KtTZutgMG8tdFpdYtKZyzt13uZKi1DtkZkMwWr35jkhBMCWA56Le2",
  "key34": "wxdU8kDfPpmCHtudJhVSdMsZmZTvfr6Tc4BsX1PReiaKejC81FWFRnu3AaWp7ABqqYddUKuXNAq4QHcaScSdeGH",
  "key35": "21gyRbhH4JfTuvmWtYz67wEbBGgyfU5n8M7r67Am74WQgWwmow8X8RKEvkJtpXgMN9HPHvtCoQHEeWazqXGqFKTB",
  "key36": "66SuXnCWGLEimGASikBRu6nmkhXS46Dqc72e7k9LGdSwMsXBwybVniYJKF6u6HeM4TRfmnCvHAKD4XxztAaNxvbh",
  "key37": "5iwR8RVYB9eB8d3ehcz9aV8ND6Xkg39uq3zUz8VDcNuaY9EMVFC8o6LtrAcf6EqUcv2h1oNRxxuRpe65Q4xLYnrN",
  "key38": "44dHyfkHQEz88nsVCKj9chiN2xqWFhHff6C1gRruHpogR2v98vW4LvjizbPGLEQApVdVyHoX5dE18dJ5cKNxkmaF",
  "key39": "28EchVyi7vHK2qtLMQXfxj21fkFkpuyqox3KQ1goQ4PbgkeDGd3CtjJ3DY3SpVxN9VU5NtAcPuECLWK7FhJQA74f",
  "key40": "4xeAxJrXt1J6ReQquU6reP7SdtVe3ZArYyJ8hsY6waLgUkaap8oSxbe9jojscaQcD5u5Cedk78yUztKm8SAMm1ey"
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
