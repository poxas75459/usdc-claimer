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
    "4PM8s92aDvThH9H2RE8XF53hQ9X24Lr9JhiMF4LKtEi1swL2K67NqCSowNP9tTv81b2dsctjWP7nKU9M548ha3Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44rPN9x5TwijA13VcPCKzusevVqcudfuiBzqravYMtHoXd3ixPm15ZcXdTAXuGn7ioNGKQwP9GrMP5cLPv6tpZsP",
  "key1": "3GbxW9WeCEymbfYHVdmoQcJYG4SXxxNeWEkXCvFJ9Ao35dAkdWnpJkW4qs5Nx61ySoMLkTd3pEtfRUjE191tKKFM",
  "key2": "r1yTPi4cZQhuADdNPHAVg37fpUQSD5j73C83zkCcSj1A787qmbJzr3yx8v5QSdYvLgNLhBtaSLLd631ZZRpDn5N",
  "key3": "294PUsjwStdi3oXDMaXUa5gjwWio63CjDXSwNyo1tqJufUVM6dh32wNRjGjQyrQrLG9TPvAwHQmGwvsqkevMheWc",
  "key4": "488uyAphB15XKA6ZDydaPwaqmTctkZtQn2ZrsvwWmVcRjD7egYvpFd7d6vQcEg8NzDkt3A617zwNTHqxCdz26Evb",
  "key5": "osbBtSvYy4uWd2Nnm8Au1wkRQz8VQrXnQJfSxGGgJzKbsyTFW9az159touWQHVyjHS8GSvtaBMcLUKuw1gphMhr",
  "key6": "3GRUwyLped6bLtqroduYKqkv5KZ97i8QfBsFDY4xPMrrJLb5jBmMYntiNX2dRsmLQd8ENMwDvo1HQyqUyM9taLZg",
  "key7": "3xVey2ZzT6HQeezXmbm6ugmxFrM4MYy6MAn24bptkhwtFoF4ZDm7hQay2MVUAMYNQrD8kz5ke1SEyPhKWxMANuNn",
  "key8": "3SFuiANYgVFhgVVVUmZC2ib4DZZSJ5pkDifuXpZp7JgZs1BVnD5Zv8ah4U4CxuARewYJLVSpSeERpNWZspjWa7BU",
  "key9": "2mc2BGGPjQ6HbEXAXoSg5cQtotMGvRAd3QEzHacGWj9JF7ADFRxvNPV3DTt7nDvxTvdUMZTroqBzDJRxuXMG8pYK",
  "key10": "4y2FvNLSy6pZD86teu47kzrP2SfqPtQqBu99SbcMjc1vGNnRiLocYH9MW7XNQoHkNJZobPphMZA3fWJHRmy7irJr",
  "key11": "xq2qJDbXhmYm4Gqu3qFb9DarhWpEqxM4vUGPfw3UA5TuJ6iUDNa1XdV7PZG7FyDYqzH8ED2qpdcymWVFnRRnhZd",
  "key12": "4PSHrwiztrujtWcMFKAKvxMsRdJhK5Yu4kmGndAjD2NeYzuTamhCkrkWNUJYQuaev1wPvZfpz9MaD3zprZJGhdr7",
  "key13": "WHtU9CnNBk3rHmr3qyeKZeoYFDRxq31zcRcLjxi6tWPEBYHZNbhHd9RiQsMxGnhERqXty8bMAvYfeSNChc6nFVk",
  "key14": "Ncg2eB182eoHjJhLf22uFfFwrHLqGeE4DfXmPBpyRY3o75VZmNZS8vSEnqAWuDgBv7AgmicFGQcF7UAon7Y2MH4",
  "key15": "4yUZBA22mSjJwsSEiQGnHwbcuFWGgSnnieopMmmcguMJ491sJobZV8ZnzHaS5u38LMVcKTJiY9QySzgmBwanJCmp",
  "key16": "4fziKef4PXg3pe8AMJwGoQX8iRTnjtCQYyhDozG5ZHu3JnFye3MPdcZ1V85tuWYGjUCpGgPQX1fv1JRhvSixE47Q",
  "key17": "wPkoKhRBNV3zUPfr3qt1GardSsUbhr3TPVXrjVwfm7LhENSDv3j4PTSXys3QVGx3vYjf2ebShH8MDHAV7w3oNrE",
  "key18": "jogMBvM7MocXuekMGwqLtmNV3G3xa8389mhoiH9GxpXkBG1sSMkn1zVmvk1RA1F4HBaiSkDubeshi6RiDZTXKkm",
  "key19": "62Qa4qfR27gUkoyhEkszxqmvtKPrhgFNZmd6uG1y4exwCmB8Ex1wT7upLVawMAFU3peBw4s2pMmFb7EQe1fh36Xy",
  "key20": "4WGaDi1N241DP1AJzaFcD1PdhH92wX527RVp8QqtK2mFsdBFbc2RrmRCcNfQNzXUA7ZZd8qBsmnys4VhQ2wax2Vt",
  "key21": "3uLNpzU1h5oUqsYCXRtqQ3Ca8UKmQC84PAgL66UvooxbQ39h4JFH4uTBHTqW5TDY4PFLpYQeRWhqX1KK9SbW3mvK",
  "key22": "63aHnvdAaCgSYwt3j7uj26zenRxAa6n33ETfU2xrmBieExmduytuT6DMPUmbgr8fZwMJrEuR6aSa9FYB4asv7LUo",
  "key23": "fwhvtWw7P8aPBxKQZ3eEuxjo1soeLaWBnCM3x4FccvU3apmnPtECrnrsYa5orqhq3hsF4ap1KsrJ1jpHEfVtcq8",
  "key24": "67pMMDGTxU5wEXANhKdApRvKN6xa83NnFgRnR8RXfiCmqS9g7C44gGvdj7mchx784BsmGH7LVsoZCx1oRhJz3n63",
  "key25": "5VGPAv8La9j1xD6cT31S3tUTBgiwR2Uhxo3eLSiP3jaoMSb2rajDgcCwC6ZvMutZmpW95mxw3o2QRhLr8ivS5Xp2",
  "key26": "YxzCnp5TMM72YVsswVqFCkjzcu1U4f9Dau1gi9MqkAFsYFERHmyk6fSsN6xvSRBHdddW9smuYiFWruTs6UhddAz",
  "key27": "2L6hNSoPxH9EnCLWukjg7DDk5PgPG91rMtnc9xj84uW67sskL32QGD4DUcHyT9m7JdF4m2QzdYexksYQ9fRUoXa5",
  "key28": "2KUF19nLJdHhw8aLC5eJsjW1s1iAMoBa9zodb2WPHqG8ynuXfvMCGy2dLeup8MpYwAx5Qy6xVKi5NkfC8NpTB4Z1",
  "key29": "3GEMG6wM2dj3TAVnayAkzEyioVmUVfMsJ8Yr6W9RbLdDbLeM2DdGcMvuZoVoMxuTpWME5SLt4zPXwNDBDTCUFEJp",
  "key30": "3mFdv1CLdamUpPZJxiBkuNjECjBA716oXLC8d6HVCZ3DFyZSzweJXgF1AWhFJymKgyajbdX37uSDssEarUdifMs7"
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
