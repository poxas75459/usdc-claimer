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
    "5Fnx27nJgjULWbbH7NBL2YXFrPvvGQj6tsYhMKG9MtpRFjLsU63dc3TMQez3hhcJiQuGM8jxxamt3hadYUfnPwb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QkApWX6aVCnmvB695JsPabhjnVMkx7j25MnKD62w3sg8fwG5xc2XXsZJXwhLiztgMFmfakPQXkBSSArfU9PAonc",
  "key1": "257wdFs7Gar1Ub5eE4WxmG1ULe5SERkaBKnXETeoMYntQb369pJyGab3Zx7F2txPe8AWycqPQeK86ZgLKdFbQqo8",
  "key2": "4LaymzyrXCCv2VeoF9EZWcrVt58UkUBSLcsEcm8ZMVgB6zENtYYp6rTzdjAnT7NrogH3dFTKDUX3pazuDtSfnFEh",
  "key3": "4Fz6169fY5cDzaSQE7xeFm8XVSKCPHuUogtMpwCqw5aY1tjEiLY45Uof4JWPuTTgA1DiSwaFcQ14fpTnWPC2sWpE",
  "key4": "3Wu31jZ1n29iWr2bEGtCgNfEFj6wLb2jDJ9NYbK1FiCecY5LTNxUTcXKkeL2vp4mjBfcj2qjiNt7aVAaUGDzHKUx",
  "key5": "4EJgf6XjSiZ9XDdqCT6dUV6ZLdMncyFqrKmf9KtjYFZQz13CJyLhAqpjLGd2K5mkPT8JcGbSEWf3vP2oMtLqB4eF",
  "key6": "2gwBH9dPLcPpZeSBPi6ddSCZR8uumZRGsxUCivBRFFoygHkT3pqNEuRL1HRVWgVuajvmauhHGQ21KwXHM4w4iTFt",
  "key7": "3XhU2xkyRTBrLQqXb6ho7C51Ejoi3bc4GJNDGNmSJqhQfRdZ3WpguyYz4NCCGSqTJ1ctkuMuqZ2w5xFNA7EZUwYe",
  "key8": "4WcUwVgiSitPTsYRzg5Cg977DEKRtZmFY5MpCvu8coUtcfsd7yaWk8PoxkEaLshaYrcKg8koksYTNvVXcNhpoBfU",
  "key9": "2PNQSTd84Q79rRPRyFR1chmfafyaPxnv1cpfrFaYUQRcJhkfZnCNuTK6fUL4PpyGLfxqnszs4v5h5XEbqAmmZtSv",
  "key10": "4nrfXcaGXQqS2hyzyqm4V1WmdUgSWgDncP7D3XD7BqsonX96Hg2Hc1gyp9zXuZEqB9fqdsDjqUyKURTRfxYBm4wq",
  "key11": "KN4icZtzrQfgrCH59fu6CYoUadPHvAXQtXtNfUq5hEZFE6pn8vy1MZvxzMJyVjBTJ4JMFgo11gGtyK2RaUDaDpw",
  "key12": "5T2ncJwSPcAuGCaVyGnxyMHeKtg8pQ8fXx6bq3K6VYtFfaaW9bczs4ZB1v9Wi5EFocExeRXKof1K4RgAWf3d6bz6",
  "key13": "3Rh6dWRAh4afaKwbKKkVRcLRmk47FNaAisT6LCNqwNLfay6sQktEfGo6cUUD8XwNUKNfAmMLv6Z5Tn1nXr548sg3",
  "key14": "5f8gS7yUWjK9kTANLgVYF4UYVsnTUwWvdbuH7zF2GksJENwFFZ3Cx57aCxH5MbqDmyhiBA6TZXnBYSDKQWXs91J8",
  "key15": "5cEPJdkrAtRTMAxwydwkSW1WLEGvX7n68aT7dEXsFNurHFvMGLn7mKzuFT3amX1Wpctk4wqvmYuxBRKBaiK7phif",
  "key16": "5VYfJseVBPDgHKSN4e9Da66SzFXvoe4dH84PVJ2yH3toktSsP6nWmp42RHkSsaKaHpsP2iWu98NUXggWXZY7N6Fd",
  "key17": "1wa9S27pHLno8VrooZ6uAaRmK2UT6Xh1QNVEHgh9szkpysGKocL8PZtwRXs4F1UJNg29wkJ438RWmakHabNtsJw",
  "key18": "65W8kQVTWjFy6fMd3fzwReBqZPuLH146qEBGok5b5uX4WTX61XEEVW5axZCm1spAjAcMs9Tz2S2Bwd4oEXumijPt",
  "key19": "tBtxkLSJTZkJTp11x6S2yFB22NVNWHb47JZEi7XHwwEChsCKP6yYMXAsy9yHAuZJjHyV3n1JnHw8YSEig8KnD6H",
  "key20": "65EsQWwd3X79s2b37TrkbZED6G6iAnoXYn3mZShCnSTmQ7vsAFqXJrYZz3rWPJW3zuhifuBktWc17476G4yYponu",
  "key21": "TQZgU8Dazj64RbCJf3WVd7zPAL3w6aEEpMvNKk2Shpprf3sExFwwgo1afRFUiKN1asLnDh7Ni4njYe6Te2QNpgy",
  "key22": "3TJLdjzQqpfbWJqxxJpKH1i8taGC1kijmhyQCvL5R4BNkScx1t45XjCJCTxSS8BRRpxcWvW4wo7go3Dbbe1qfnRv",
  "key23": "2ZbWprAEGYJKzxCesvuwxgwPLjmG2ykcrRPJe8LhFm54RPhrsKisrw84DbXqAMsmM5t9xeM2aTNrVBMYXgsEFFJw",
  "key24": "44emWm7ue9G7GbqpXyMfbaVu28X7ACGvF8BwfYaB1m5hN5fxyRcN1S9ZJUYkRS8RDYLXpftQQmzE2jb6rE4Z9unH",
  "key25": "q23FLQG7ne7eqsCuDHRCp4ufjKhC1xWkyuYdmGKWfizmYKgbiQWDmZrHwXkKtDt252rKrgwpEpQFcfEGV1AYmSY",
  "key26": "637zXRanzdv25VwHSBb1RYQYeUSua5fPPd36oxLsR2oTxP3cCAiXqv355TT7qcvoCU7SkUU7kqvhQCB4vagLZHAL",
  "key27": "2y9Hi2hHUuf7ZURJGU6h773ZEwdMrpy2zQmWyjiXogS9hzDshegL2V1pjdMSbBSyBncdTk6dM48QQ3e2TxT3TTJ7",
  "key28": "2kYgGYwtfmCywUFsGeMP5DL5XZx5k3WvHHPfkxeXnn591cJb28553mYSMk6S5iMyYrZF1QmCaLedwNxtFZPHibUZ",
  "key29": "5tja2sDAwfbFLF7JPqUJJ9xJd83gRHB8YnAnvcYLbo7E7zA8EjxNZMet3xxrHPWnD6ANrfB8tpZRMrBxpYS8MKCo",
  "key30": "5YY4mJdZunFVw8GuqGwAvSNRoZXLQvNcMwP2W1phXpgegE8nzQDqUM94PcV2ic6kVNBj3SnpuZvQTu2uz7a76wv9",
  "key31": "28FdJQ4BBed5jcJZMVr6wViVFV3WXRRroQReCFgWnY1xJRSugFJEDQTUnZSUu4SLwZucNqdRQwfukqUBKCoVvmEb",
  "key32": "R5RaAZqkbrcddQfrJARsEu6JZDu7TkqYA8Dsu92MXfUuj1xTphjgDzv8EQDMBwG87M5fVZ83nnzo1bFp4rGT4Tb",
  "key33": "35xzfkpGZLs2AuXEfhgGGw8pTwmP9ockbdSzHbU3x8pTLC6KKn6ShMf6kVW2vMEvujayM9rpgkWTis35tqMxffXx",
  "key34": "5Ma1rzrk8auv5z93LhS6LKz54u9Z2gW1YLTfQdjNCpKhjtLxGSe5wYqDott2g9YgAzJk1rc3FPzWKhpwyAmVrekh",
  "key35": "3pjDvaQ5zVUfZ152qEaftC1Hbp7vHGCMSmtgmctua4UP5osxzgEnLdnTREwcmFp7YPjT7k8cBUF5PCe6KPY4hqvc"
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
