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
    "4SUHSgmWG45KSUgaytSwuDkfs3KKjQwmgVrYsLePNW4TJ3GCKT5N4D8CVC7vYNeYGwXaWPXZZfLA1WmBoXUCEu11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DAmKsvxjJbV7BEKVu78aUzN7PtomWsPMm8itNPVG2q9FkSWzdoEGAz3baWSjVY45svv56Cg4BkxX2bcmN3ffCn6",
  "key1": "2oTaZyAwAdpL33vavA5fJBYfFYSTDCrpKo5KX3ymoGotRd527yvRMK1XocJi7pgs5ETAFw8d1JmzmgCVUpDqmkZw",
  "key2": "5NdBwCEcqrRWvX2FSuX2UdEJ2AEUTT1yBsKMnuRZNGh5j4pKjprRswfM4SArWBkjN9a8om2mLWGMmgupAhrALygE",
  "key3": "2fAM2bj8wKL8sk6CdL93yVigMCczsYKr8V8Y9vZwxFwEYTVgsHEqiKFBvibrwLgufQPNQfBERH7eZRo9HGmV7wE1",
  "key4": "22C41FgPV1FxWBqdYxK6efhMQQv3q4Z6nhMXhKTKKqTkTSGYSQj9tQ1WZshMkaTBGCXGBSwFLjkwmQZifk8tjbtz",
  "key5": "4LycJ58HfT3EA2mpL5JAsqS7Siy9bxVGsjP1bKc82uKNsETHfUHBuC6g9ur53Tu548Awk8Y335Mm5sdTHHa4YHtU",
  "key6": "2TTX9qPRDJ1siAaa3GWmUGrNoXjrPzau1XisJNqJwJd2hJ7Cvky7B2ffKfSHgtKsZr77jWbBAJGTfpdHWLcGuwZ",
  "key7": "5Wa3hHY3mBxL2264Vztysex2CEWDahFCXYYRgVEctJxY3jJBm6YHLxbd6C2oB6XsTBnti5v9ftg1T8QA4XviEDer",
  "key8": "Wn64ZGAoTTL5fs5uaaK2hS3inS1BSNHRsxcXsWwDfdQRHzPTTM4BzPrhckNXzMjNo2Gfci3muqnCeF4ppRPiXDp",
  "key9": "5FYzrp2bgbJHLVRVLHXbZXYomZtTfecfu9rsJAPhDu2gpw1sUqoXScsARU44R2AgeRsqoJ3YoHwWdJkdcPrR3ut1",
  "key10": "2GN8MXDdpyX4Crj7d5rFTwonAzHMHBCbX6vnSkEdT9j7YVJkgky2xuL84LQSjwJN3WYL8d2kmXgAVnsmG9odKFhh",
  "key11": "1CGZP79xTvC4pcttqfzgeL9Huae8RvTuXD9Yei8TdHuEbeaksuatYGyZTVRPq4f2jH3Ndtsk9eZn6w3cpjAUgPZ",
  "key12": "s7pjVYmwPL3PfMiTXGZPyfiv3yCyFE7XT3cZzRipv266Ub7UVChBrp1i8bpxj4y5eZoVTPrM1nb8D326eF4bRM7",
  "key13": "3fheVS5ubfqbipdYnAexZRHsHueCXCpEfvvzyF1PnprvNY44P55RiEwemvd8ae28n7NAeY1ggZi67VanpMuDxjpF",
  "key14": "4SaopUeBQVtoB4Zzo1BBK2cEjLjVPAtDKzqo2VKFKN6Vnn3DqJkjLw3khEvTE4bWUd43zkDW4CcGwZN2WKwmEM9Z",
  "key15": "2RaBohEWweLQwXmKLuQ8oc1eW61tqsDetH4XhWFEd1KTFaNsyGud7qUoNYGZEkED1sXJDonjThm8reDLPREEvf9X",
  "key16": "4sBKTNMERjunB454CjWpwvcYVEw2cry1sFPCx7FT4fZ9NKCX3Z5g8YHDCUqpSA1XY5AaXX38KTXy88syx57J9FoW",
  "key17": "34eQ2CoqEfG4fejZzdqZJ812oxY9q6FEsECqn1NgHzH2Cgmpdy1pBWKDHAvUsfQe8jfH2GCvpi6a56ZQDkzeXHtn",
  "key18": "byymLuvYsF676XWxntpdT2GH4PTbgqdKi8gjhZhtqPAg6m5wNTPjV65o32JzmKB8Kv4r7Pd52rMxXtdWkwgHBjW",
  "key19": "5yjsnDFzc4CuzsXtmTKJngCPSgr6w45fHsYPAmkZ4jmux9natHKPanqmugn1WTVWbAVeyNQnRY1zbegwmEnPPSf5",
  "key20": "5yo732i94SxZTRbhVJXCRmaShqnNU7F5CfaA9RfNjWeoUfRtYyyQM15qpQdM9Zr5PDVFAAjPTywTwkgeABx6x8yB",
  "key21": "4smbYS8wddH6pMtZH7RBSLp3vEQtNvJp4RkGCpeBKBioLuN3pFywZkvtU8pzP2VjBWfMvSUKxFeii1nbf61ooMJa",
  "key22": "4U5QRZNZEf1yUQwYP9puw6aPvBGGspYZqg3yVbv5fFLoc5sQGYk78ydBVJ45PugSQJB1Jdy8NY8NjWPqNdKs4uF5",
  "key23": "3UuutY92hNctEresWJMi9Vewfhnd5RCYhmPfvrdeKBi47hsqFeeLNLZXzy4cpTDFu6UL8QGDH4XTajAZA7dLTiQ4",
  "key24": "2TeQDdCMSmyV2NcmrPcQC5Jx6iAEFpZp6BYBy9Tn2iD7qBtWzd1X4CZRvuMYrUho8ktSrEzmVEzwMoN7wLVpWxAH",
  "key25": "Fk7aDDXqWbFxfiCQLpurCwDnjApBZai4MXdUHQt8rMzgYmWVSS8wWJjEeCHQ9UbVmpkEcjHBZTYstHEVaRqsoay",
  "key26": "4RmETZ7UTkiz1mq9Nqnz5Yje6h42LjGnh1vuAhWVbRM8egtaUvpFNPm9KH8k6X86hBaYDZCZbpPFU8HqgZeMKs7F",
  "key27": "2aX9rUeGLfpgnbxuGSQMrX3Cje9jLqWy14ocDqKkJsnEWdeX1mvXfLDgRTfqDAmvYbcQKFka7LTQxLQPtDXCnrQm",
  "key28": "5wK7jzGru6BteBzmeGHyVSTFrFZJXQKg34zwiaL5RNa5Cqds8s24EWg2xXhznsZzo5VdV1rAH4rwquLi2P2mdfYv",
  "key29": "5DHfH6GXWhjZJS6g4zmYeTC8KLZEHwJeu8oYh1ngUxqEL3M18jTUqdY9DDeZCy4K6GwGiN3TAjZm4nNzkzyQkC1W",
  "key30": "4UK6RGkwkrHjgQjLawHoQ8EX943WagZZXbfWnRKdyGhFk59BXuEotJPqZtKJMb1N4EgJd582dUCVexw8sm5ANG75",
  "key31": "3jGF6peg3kVPAWWnqadQYy1kwEArfeqWuQuNFgn5U9nzzZiDcLbmcBrE9biqu9RJXQ3VydVewSgmXczPuGZHeRM8"
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
