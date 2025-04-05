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
    "5ecnLxPyzD2hN48vNhQ551X3DHDTYZpz72bRUjgBrtwstPEZdE3wmiH4S2JitqtGXkSmTCZZgp2pjuKkhBbwXTbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ziRRAdN913HdwLyZQsNQtnQWYPNhSz8cVNWTgZV9rmsXSmQeLPtPf9uBJxHJW5sPv4yfsvRgj19nVmoyh38Pscv",
  "key1": "2FBSBCrS8wYNtfTbT4WN5bLKjCaMimMPp337zTEibnwTW9xVbumj9992nhoYFhv7Q49uDNyR6mTcKZXv3PKHuQvc",
  "key2": "27zy7hrEdJGPRx1MJmVPkhrSsnnhTy7HuPk8sJqr48oTg2MuwfeMZpcSQSXT58LoysV4PZ1p8GQN4oMswHWQJGHo",
  "key3": "4T2VbZSrtPEL98kPcSQZkBRGhZfUmP1knYsMGHvkZdR8jhj6SW1mkxU7w8mRfRZe5eikT8mbjQiU3M7Z7MMjJioW",
  "key4": "5j3PotmZtvYoVQZLy4fj6N6yFLx3t9ojnyZV8QNYfNELrPFmf1PahBWtpSTEAYZvkSUgr3dF42qV7PWuMhepKJbP",
  "key5": "4cikSJvt45m9LPNmjLLyLEJy6eofefRziguqtut8gWoVoXY2g32artUyR1LjVRi1aHyP371SkHK61NnN2WfgNd3w",
  "key6": "3GD3y7HWDnEZbq4XusWHPQYNryCZFNFShTESQ1DfbMqnYzLktCv7xBgJQE7AZNBwVLbsnKwyyBVg8eLA9TQp2ap7",
  "key7": "4SRkZTBj1vCv5XPu6PnLHfwv54RDcZUJDAqkqF5vVdKKx6mvZiw3ybpcSUwbBu9XdWpSavPQniY7yUvfFxjK6hmz",
  "key8": "qVBDcYKDAThbJdn8bcrhq5YpvKuyGR2Y3apYauzgLz84L9qRJv1X4HPmqt73Sp7sqA2V8Uv8bQGs1Rz5pg5wgi9",
  "key9": "GY2rCW3gyCN66e2fyF7oWDRGbQJPrLpK7WnTaYEYfXzETQfgSNGDahYzCJFsGpd1KoCo6sUqL6jdA2E13ydntjQ",
  "key10": "5yMBr1XsYz4o7nkUPFDfUsTaZtLGYsvxv8DiM1e3FbSdTtX76kKivYzaMGdrKwwxZTTQBSzYAgCzngKcytswcWxa",
  "key11": "5h2nzXBpJL7ERsUp8EtYtuU1ZYSWEMUSAg3DDoyiaNuc65bVxucw3TXeWLuqPHXWcpWp6fDxpwSnHdVQv7pJScv1",
  "key12": "5kX7waCykPsqJ7Jy38MXm271DYp5xPGqc1pX7ZMcyxDbhewmYaFcRLn89tJqYiLF9865sRmgoVoQUaWaEdJL4B2E",
  "key13": "2G1ch4KDjxbtUYBHqHWMJucf712oykBozBpzSH3bZSsAM32cWtV4XfyCrumDq3XT3iDDpk6zjovDCumZtgrHszNV",
  "key14": "4TzWVneYkeCnLNn9xCaFaUfQ3DCCUsNw8HMuAX3SAXZCvA4MZzdv1Sw3Atn2wjmTfNz91im681CRrmKQKpEJ1ysj",
  "key15": "484NHCrsjv6yLHcXrCN7cQT6swEbGAS7CifF6esGzrq78CC4cSxF6k38kJprAy4zDribYG27tR6a9gYuoC8vmoPE",
  "key16": "4VdwuYA1unAU27uPVNZ9pmWD3hPgBve4HWQZCzMzWR5PqRktfYV6Xd9YxmNCAk471c6AWP6eqwaSXCrGjjRS95pg",
  "key17": "QBC9Uqz4RzCBaugm7dzU2ieaADW9aWtGKrr1u2PXGnUySbf3VnNBwLFC5yw4EuhuaKsiuNZZunqFd6RQcE9RYJZ",
  "key18": "FSf4PwyTvT4N1L2V1ArBpvztnYoYUvf4WCwzUiA2rfQvqyLjpzbjmLaSB39M8agai5hDkH9JDfxiaoB6iMdPuK6",
  "key19": "4vUbyKa2TV8tYSCmaRssQvVfn43fdt2NmR6ALzrznUXFGHweM6qcts48GiLaVhNktQBHVaqe9aHpEWExpf4WAgx2",
  "key20": "4VxBpBCRRVuiYwzMJiL99JKxciuqUNqDkXCZUWFR7nxZL8h7kLEHzqz9X7FqJmLenhDxCNS2pGYxJc6VSThrBFL7",
  "key21": "2SDuWXtPPDVoM83RTK6HhZiQhHVXf5gpiDAEdVcFmQPJ6uyHsFqNaXhJDfdMUmnDoWuZDbjro54q8MyMBDGEAwM8",
  "key22": "2sV1LpTbkA61deAiF1KcMqrCFbcAxxGQvRdsu3mVW7Qn9if2YRrhcZ9BvaV2egGvQUUzemmW6bYKxyseWwHyZPAY",
  "key23": "rEqGzqNasHPeiHR12jPH2rL2rXy4xMBEJCZyaamEY15kHeFF2BQUSNYryZ1BBTYrBt6wZieQGyNJRKH2Ceysfh1",
  "key24": "5mwkYovwoAkmhrkqVL7asZaPiadGBaE5C1QCGudjvtBx8ECMQjnuMU6r1HuY9ewacdLffs3XqWvaCVqui3jtSX53",
  "key25": "4RnVXbSXT6yakqUK3e93gojm8pSJ8bWNwwMnXPSX3uD8dm3ohGB37nEVhYpnGGhbc8VsBRkL5eaY4QpHNuYZP759",
  "key26": "2pS3Mo66XMedcQVLCrSYMB6hwmcZSnKGmiJKfTaRTU2KP3TKUD1FPK1ot3CwDdiMDVUy8cJkddnHs6aRJZ7wgwPq",
  "key27": "4WTUqz8PKDCBNhB5HDbNEYGyU3s2xHqzmcuoJyKip1hBMamu1Hv9vzWn4gFxCQ7j2sqU6roqX5Nodm5A3y8NnyTn",
  "key28": "4j6WLHDqyoAdLuys8yGjCzARP7ASHTTEEW6mHp7AH4eGbe2r5VFbfgiPx3yshQtWPuMeMhtZ1VNHX55Rc1Ma3CSZ",
  "key29": "3TwyMULoHKDozL9EnzDNfu6bAwaquj9CfUMuDpFLRWzJ2ZBcgWNHLaKfBFr4knVAqdqYdHHCDZQoMVHegxTW7qDE",
  "key30": "57QJRTZKcfKRoYFne1eCJ97r2j7YVWUuVdPAx8XApNB3p8MdLuMc7Qvf58WTg7DBt3KmygwNVCwHUGS6ndWRwqix"
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
