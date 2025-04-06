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
    "vLqhyn6ipGbnxNsqXvEaWuKXiYucrJGAUR3Guu2MXU4VviHtavxjKQVpfCJZJqUkr3JFz4JPafrgnj2vboTbDbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36yrJedQaFX36hC2B2MeSNpcxDDotZesYZdeZmnYKmvnAYLphh8JN2Y4rsgvDUTj5A2hiVsLSTZ4U4e8sz5bzNhu",
  "key1": "5ngnaZvNUKLGihU3oaFCVSo1CuSYng8PxN1Zoy2u3n48CX1mNbZjtEGwjFLR4qeUNMivhSUPUk2H4L22vSxQZ6tS",
  "key2": "24VHsrWPrF4AGtMfDQLAMpyvqFVJ7tyjHMV18SHFKRafv6LN7dEY61NYYFmnRsJWXND1jqJGtyC4E3u8tUZW1w2U",
  "key3": "4G6H8nxZTdELVEtMPFsXmCKFMGvv14RcfnHzEe3vPYmobMHcmPzjTLkDFkJmtizsoSXT9BpDi56FxwjNcpbrFABJ",
  "key4": "5q6aDtmC4Uea2WB7ZzKWLhnhazuBFdZTp8HrUufqr265yqwMo3XEFhugv5YCEP1YSaN6mdXd9Cw11FHVFQUnog95",
  "key5": "3kWUvzFZYKGLR4wpZpJJkUZNXNBDE6tMks86W6iNQq3eBcPFJSWXUWcd3NV7qirYbrVjDQUHMwpL3m4s7PReGYay",
  "key6": "4TwHZU6A3aGPK3da8Bz9hjix2BfuDGoWyPf19CuCknPKPFppSejiUHc53fmVi6otFafdzCxN6fsZ3nvfghBbKB82",
  "key7": "33PkDtXY242GAR16ycbBWwq2Xfw16g3isL1HtYE4fbkcnmKRogC97yqhUnmKVbcBvfNdQtySju3Xi9jdnedkgyZ9",
  "key8": "25SZqLVQxn9LmLgqd6A1mgrcSnvMAA11kNRd6w6TgaTSNFnKYG3TqbLXJruxCWaqW5nbYKQ53soHnrKTetFpCeyh",
  "key9": "2mgMXEHzj6x6T1G4wyAEu8VVXQdE2JbuyMdiySRmB64S8Ae4WnjSZQrWWAhb1h2mbyWss26feP8PffydJJriS3js",
  "key10": "2XiC4r8QCU2nTGR6YySV1CcTK5Fe73GU5h3QHXjEdKtkgf64Ciy9qp3VBqLYPYXhJcqgWwpDcz3bFiWJGvsv192g",
  "key11": "5B8vfdpttiHE3krJcuemLDM2UPjBJKcgQ2y255rJedi6hNQXVZxjiJYqNLV5Y7UEDXwkssmUu1cdLPrnYzZ9vSdG",
  "key12": "N3UNXPdJzXt4ucyekEbWKeCR62fTgriCnWzubisVmFyzMUWkxVyqY3A3zRwrHQ1eYG7ippxGrsjTRgoMSdnsB9u",
  "key13": "3mT65gJQ6VtkJgkxHz17jWUayxSo9BsgGDrAcPCXqM3H4kQqF5rjJpaPXpMz8VLdWky29uoPzJwPbssycVz1Cj2d",
  "key14": "2cQ8eF3ycvaiM74B4b7ryLJDW3TuBe2T31Sf2wtXfsFcPXVXGtYRgpBCeyEwup9Q8W1VJ6sA8BokRbqKotFfmYfi",
  "key15": "5dm5q2fi58tMjVV5SFBS64shvHqmwbCnNU865b1EiRY77c88aFkYjigGYme3Qre5Xgj93ET4w6pBSCYaeJmvunSH",
  "key16": "5L2beDBHURzFaR1jKWsvt1N4NT7YGQJFNqVdnt63qBeFxjRYfiNiTsRNGJYHFjbMjUtx9fQVr5fqpVenod1kYQtS",
  "key17": "3fWtfeF1LNFNiSqRPj6hjZpQwTPM5ukpP4juh2Ghn5zY5BG3w646j5fGZmHbKGVuFNvcHv386rLkbd3fVRX7UNk6",
  "key18": "3SydjtsvwCYYgEJPtuRCJ2K5SsGPdfHTxY44cvPxQS9P7vhp7vcKh68hPdoZBKpxVi9D7zW86JFGNgqXpbESAe3W",
  "key19": "XZDzqno7gD3AbdhcV25poT5xJP1sFUZ6KprcL3eMS4dxAD5RVfZGu4yRBRzGgFzvBCbVKcRa1CXAGUpQ93Kb4GW",
  "key20": "53tVVXbf15eUYz1Sz3Rd8qqtcQ1PKzb1RwyCTmrPktJ2Ej9DWpV25hsffL8aPKR242hyWdMCrLLqbcxchYzWTV3V",
  "key21": "3g8eRZVhsowVpBVRJHozKCuPWYn8fqPqmfYTtn7eKNE9LSwhBSHR5R9QZ1da5u8ox9F9kdohKr9PreEXxbmthxCb",
  "key22": "5ZhH8gozmKXDEcUtzpqTDAEY3vzdsTTsFA7dskuNJk7TpZNn5M5BqcdijRGZQkm4bPutsZ3yv49HSyWrPeRTAkYq",
  "key23": "2QnV1u4UkDaJgqxuNyfzdRC4FSGZF8qTBnFkkjDvXiRZxkmJUfjjahnE1nMR9ayw5tEp3WhpjhMeSbXnU9nGt5w4",
  "key24": "GPYcvDzC5QyAL1BaSXjp76AZ7VVCKEoVLcYmR9zDfBjx8eGTv8Pn5bLGBH1PpYCFCCnXciofWtwhG4upnVrmoea",
  "key25": "3FibeCNuhjq3VAmQWRfcAZm8v5LT6tckb2qy5jmyHKWhGzbYQKwGPzyPePJLZ4YPvDhpNRpDcQMsqL331HwoLpmg"
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
