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
    "5CL92CcmXamTjAe4xLJ8J16tsADjcUnkz87gEucUtjGaFJYNRCU7qsV1NTdmc97nhsDtegEfnTCQcfhfySuXHnNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NMyRxrwNM5Ah5yLH8jaoSf5yv3WPiQeK87sHnYTKvSiimhtrNjhGhhuYwd2gP5ti73P9DWcMcHXVME9MnDD4jLv",
  "key1": "4VktPAVrM6zvsVEWbqa9YKdrwdcM1Go2UWkvJ2q5CsaG2kC8NNvhNVNK2yXzifMUzmQUCr36TpHaEcNcyCiU5EgE",
  "key2": "4xDvyhyeP1xe4tcpQGSWzduNfXyyauSsaAzfFwdfEdJKbMvRMfXKfu2WFvKpVua6q6JpPJvvfcptyTgGSpzMC5aT",
  "key3": "46k3qkDNJtQ2BJmmXM52DpeEp65FRdRyTcHBcd1orxjZqqT3srRxEecTUo8bwC1yyidQNidaShtP4tAHvGo3edGm",
  "key4": "3DaryueM1XVdH5rdmY6ucN7jN3uriyPAbxczca2mUceYNZkxbuojhuQwQwwRxe7g7iC6BQB7ebKY1MMZ8bQZuPBr",
  "key5": "5QCoJ8ygzHhvrhqSbPhwxAiLf2oDQgLAePzaHGjyVk2hyENkGRZDJkXjxM9q9P5FYu4rZpVw6CzNYjsW5dxHhB6C",
  "key6": "NawMDNXLSVkozytC4fLqNKf6kG7yKP8TgfdhRZpnGqyow3UCQLeFrmvBcGuxnjGfYSqdvSBxyTpSuVxmZxMb7PX",
  "key7": "wvf2X39yYjj5jN3jeyW3Btiy5ureUingHeYYJR9G8N1oyBBwYRo6j6vxMPvaSoB2xwK2QoDqvRpU6xfZgVRzYbj",
  "key8": "irAiZzhrTqP6VYZcdHvT6XPGDiXvHmKcM83GLFZVurBqqbfL1StvZFv2PSNa63JXqvfoqfwa36VV5TG4omBeA3y",
  "key9": "5jChjARmgSL6rncf4QoeebCGeo4SCTDgm4UzpoT6jjPvbx9NutTDm6TkZwqP9ZQH8YKdys3Y4w1z3wjNDiy21uqb",
  "key10": "25VG3MCcp6ukARpnbtyVqtB2pui9HX3eNe84ZofkcaKN7NHLq5PoG5mSydTxSXaaPqckTbbZwA1cEoj68RvG8RSs",
  "key11": "MTbVW7fSpECttrSRoRMLhXbpj55fnwqQFePvh2EXGUbs9nuuDWjwHgh14TjNZxKfqkxBCZ4tTtKUZuATTVPT9P1",
  "key12": "wLbPeZSD1E22utC4JpDXgGmSn4PGfv2rVmsfYaQyFJ7MbgYLj9NPLAqFuLCM52og9VTUmHB7FY4pQcTiu7nHpYq",
  "key13": "4Smz3aKHfcxe4mbhAYCkLq2Z7LsMZRQjS5nd9Y5USWaTJd8692ox4aB6sPCHfaWkW3SkiHwN2EuELhKJ8D8v7UyF",
  "key14": "23kkK8yUGuBTi7iA3W2fgWtuHjTQZkHJrMpGRGZRMYuFLqw83WrkVbDnqpEBm3utqZpMBsV8Co9aPK3KiN62znRE",
  "key15": "4VL2zoGKohevcsPfBGXEsbJKNxrViunHjvExE8zErTXYYwFMJHvJ5UfMiREZHjugznMEgvyh3RPyqXhDLgiLZHha",
  "key16": "4oq8BwxG51E7ARecAWevdEjJ2XjvfqhxpHoLvp5sYLjqC9eZYApwzzX7pJtSZyBB5V9GYFvzHfFWgZvc8YFM8BEi",
  "key17": "Zsi3uzk6UQyYn4pi9U36qs7Ps1AxD7QqASHiEejLX1u9X6DgmQRLQUuW3eJ3viNBkBDQWThNx1nwJJBZUxDDe4a",
  "key18": "4UVEpB9rGAa4Pzycf59C3vR4utG5srXRu1gP8vRSiJqejeGgLkYXudrGSUFARRjWVsu3GFJBrH1DgeUX7CSL3VZo",
  "key19": "2Xuf7n7ho3iUo2yNu7dbZ56EUYei1WRBKDpfaftL65j3C24cBAnuYUfjeACgDM97Z12qVbtwpKhvwKjWTMBUjuMT",
  "key20": "5CzenD5YqVW9WSsHHztaM5Ny2ZyXb86orno4SF52hidzff2HBFUMZk2rnioumo1QJkczPF4tfvgbH5UhCDTiBttk",
  "key21": "32MEwsEyZZAaFvbLfznN4vFUfHismA4x7rTNr3zaYPPSdxMbmciaCp2NPFJBwg3hfubGLhpVFMnCUsNpnGaqk6x8",
  "key22": "4t4EuuMhVi8Pu8E1xzyhqCfTExmy3srzXVstiqjSbUf2iHPtyMcxrsgPfnTzngcCBxBNb6xs4kyW1ekQTGnrAVPV",
  "key23": "XwEAEnnofbiUxM7M35Y4eM2U9AWHNXmTEdGLDQ6dLz55qFzAq7YCAiR3Qw1ZcQW9iAFTvTL6FjF3jYtAtKX7GjR",
  "key24": "4FPKkgQQgkago46mFt9e1b3jDJyGaubHVZQF3aMpbRwpcjkgZnycEBfJq2RkJn9di4LW9uAuG51aF4fMoMRrrV3d"
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
