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
    "RXpAZNxYCt7zANsm7YUeSU9suajN1yPB8GoapqLqq35vhqXAGMDAyKmHTZ2q9F8M7FriQ9D8mF3QjS6eZsb11J6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zRgogXZXsEiuK2ouqQNMVfAecr37D1DVguUKRvAwcq9vNbQVZFARDsMBEfK7iueqUPzAttaDk9j93Ly3m9CiG6j",
  "key1": "4AdfRKKw86Tt4s6VFZb7WhCVBgsK4zVkXmVkZL8G3F9zPVQozCLS9ABVoTwRVfD8yy3Nh5TbhkWiVmiXqfRaP9Br",
  "key2": "KBFTL2iw4Qd2A3WpattniQ9fTpUEeoXU8b7zJuGH3QsVXGFmj2u8YyQB873HgNt7WiFhnLTQJSFPw2aLXGnhD2C",
  "key3": "i4phUX4yaJ6JhQjtXJECC2tDSwc3282zoVZCj3Le7etz5SYFqv5vsW2ntBi2doqQdUrCcoYiT4KrJqdb1KymuhU",
  "key4": "2xDGQjefcHUyGQ2e22TfpqmVnepixnBkLbCnzP1YceoCc28Hetb67k5ZvcXSCddMyRqgjgDsWK7drqcpenZpqPKb",
  "key5": "4f1QvnQFEPJdxcHEhLHXJJAuaEk4Vt1j74Yu3bp4qsEDwdF5EWviQfFqpQRbFErhvRxBJGb7GuRdNSqxmYLePfJP",
  "key6": "EtDFN2DUKtbpgp2TexQkdHdBbxRcHD2Xw5NzzhBF6WLryNsQqxqN9J8bJFQHaQSfkve8CsbbUXLdZBDwgSgnUzu",
  "key7": "q5pp5VF1kR8MRyyW2yTF9hEJcMV81qFMUFF9iieXpnooWdVakSxQVKugH8K61GXS8hjujbSNEuTxwAgZxbfN7wk",
  "key8": "3zukih2VrMMEvqo64GR6WLffCpWBrh6ocRwfMKafZVdSF5ntEbagn7wJimVK27SGa4g6vFtXEmccp2K8sUny63sg",
  "key9": "ECJAzWuXLeSkoSZYsZaTwwPb7AncnzcaCeh9XUXU35aMjktDaJstWpHFyojMNKhNqxEDmbNUrYtRmdZi4x546nY",
  "key10": "4yzdERNcwraSnnTSmDCYuff65q6Q9mRY64i4y8KzUn4MvruTDCMaWe3HxQsP4V1EZRLqBBG1s9bjQSFPtrZ8YDBL",
  "key11": "QTAviigwrBhVYE4LgYSd4Z5D8XbNT9nPFA6h1M4wgCEQSojBoFtQKAF9R9Mo8udmhy5i5EH7MxqW824WK9MMuyR",
  "key12": "4PUa1gwjDmEjSiFApkMFpVrDS99h842xBeBSUDnfMXcwUgAXK5PJ5ynfkuYV1nLkwW2dPbayD7kcsQa7YYxFKqsX",
  "key13": "2w7MxX9PzhkD4RjDQts7nuEh9XaUkwb68GsqWTxYyqC8SpY2gp1nWKRFyVcYVSRV3BdnbGMaiXySFZH4bj2kvj1C",
  "key14": "2bdii2RNXnVfAPQcMr53cYRCPkfX4Y4JDMrrLPAA8aayf4uC6TpokGXA6f7NbP1HbFh6LRrp3bSJePPXKgyZgRsM",
  "key15": "2J67kny4GR6PBEN2kX6Lhh5DCFrFPBYXsxDxQd8smKTzmhygepLWZXJ57NCu18TCVFg3wPwb4yjbJgvEBugNknno",
  "key16": "5KRVm1yfwbANX76xPHJAwAx6ZCCyzFnTGaB8TxX1ioD8Wf1Z27Cu8xWc3XKhfrS8UzAYwLfxuAssP9z35kLRRoHM",
  "key17": "3aa8T1xo7rGJFTLJqjYBEJeU6W7MxHwh3CceNrHHNHpAxd6H2itMjbog1tXqKxerfK5HedWySKwE81GPWTK4U8NE",
  "key18": "3s8V7gcCpiLYrhX5mYcpMxxMuD25NSe9c7MCcYpgNWPfV1tw5Dv8cmBAHqtGoQY76oJeQqmqb6PpMEkVPosjwGZ2",
  "key19": "8HshzemHaBPVJgVmU6PRbd7zUALG16jbhumCNEm6rdZ81qANDMe2r2SfsdX7whF19DGJxF7fGU4LoqsgPc2vu4R",
  "key20": "2HussGwXsdQWrbgWa6pTsKsfN2JWG9AjD8cRM97dV6vkxjGAFPBywzKvumShMTonw6DWYTFy24rrMgPd45VX9mh4",
  "key21": "5avxP1w4SHFNA1YSTp4dpSScjprd9hHfk6gfbMrSoEJKd28V6aAdN3YnoTzV9puyDP6tSW1oU8ccmKamx33rTM8o",
  "key22": "5jn792rWjJAtVxhy9JKcXc5aqqtedeGaTyxST8U9VaVUH2C3v2725bfpYh7d6KKGAfM3Hgdu7fzo3dCRRKYYmfnj",
  "key23": "3HEYPKqfaquWnxe1tyJuBe8UQa7jRK3Es1DAhMDULegxQSubTFfWXDbGf5cLxhhREHXSe5Dmtn71sqiYu1Ejd3mQ",
  "key24": "3uzxvixbaGU66aM86Z2sZj8n99HSUE6NTkp6FsoVhGh6MYsPVJbRQUtJDZyFwazS1Ym656GMUitrBqSqeXYKVf7L",
  "key25": "xkN5qwoWQWbSZojjXgCom6xrQ4irKRntbVXwfKtLXAMgBZHddnCNMtwJZVVZh1Da1JWvzmTqGFqjVQbS4VHWcXg",
  "key26": "53iy9hskaWjLUpNDRSeywJ5wsgqGwqUzfA6ABx3inbUCfJJ48Kas3cuRTQM4N1HzEy3J773bxiGqx5HW5iCeb76u",
  "key27": "2cmsBGr9Y5jdQDjYrDDFQ84PSazanu3zcdW9wrs71qZgt3G7wvsmsQE2uN9b9qZp6eEkX2Uck1EKkEyy1EYLnfEK",
  "key28": "5gVhioLRJwJxz2dmvQBSEAUKri87rXMjXNqXJjSKCA5UDW7j733rNrXwYR5RiR4jKX2yGJH6kPZ99GXTXtH68LCU",
  "key29": "3fY2ywtBxsjX4tmhEJWiVSQLSTnWiwqTCvWaX1piRzpcUP8QZ7nzWBe1NKSa5QZCmEqPRV2bbsppGqBRGmEkVx8V",
  "key30": "koMWFvj3MPFXPJPVd4CMba8pKhQAkeHGrzoNMJUoCc816chLrB5dRvHprCAvvcrLN3sUM8wi6yoyXoHoZ7g4R2a",
  "key31": "2YuGAwiPHhn3ebLTGkG8Ru3N94hAau544zECWhVPimPzduXhNWadQFX9HNJt33WMy2b4EqSwcCWwkKKMsueNE8vF",
  "key32": "2WPrWJKGppDLeTUxywrE23ptN5eacCFdFNbdz9PuyS1BUDSNKcRFbfCRaUrhwMff9ms3Ucg5f56DvAoMuoTJ2Dem",
  "key33": "3SpxREpX3wRzSCaxZBs18jMnXcDzvhEqkys7UJM5bApKTYnnqWtrZinAVXCeSeSJr5ZQwvRNsCCGUNY3rcBoVTpc",
  "key34": "2tt4ZK9M5v4ubi6ivKnrKp9NGPSag5ccu5M3KAUCMwEkrxs87C61fdu2AJ2qekcPvsrE8rWpNcvWquwZrbWs8zGV",
  "key35": "3zJ3USDQKbndjgGnsbTFNu2y5zsx1v1fBCKvRpYTgfvQhghjQ4gSNQgSVDbNVgHRjTAjBTsYBGhoCwpURubBNWDh",
  "key36": "2Z5Cpvsvj7hiBN9jT3DGcRwBXjJ1nFxDUiRyHL7Fegv2YFXJwVJWc6AF8Ac8KpT6Qmht7gS9rzDX4X4SdLEJ1BJ9",
  "key37": "2ZYiFYpoFocyZFJ8NJcdwpUdqpVLCipo6SC3gftsmXtybfRfKrxmPPKdQ3QYCS7iavXNw8BkkABUa5sDbh84FRS1",
  "key38": "4RDzGu6e4jgfnHRe5NXYsB8B1VWQZ4zbLPz3uTovvUeHkVcyos2xMrcCtDNqgU7q5GwJgvjYe9mJo54aYnHxSMG8",
  "key39": "5WKxJfSXZ9cGrdK6Pmwz8HdhFTpMH8cQCTsSqmZPBYgEzNuvWrssb5E8ZEmgaAs8MkziKF45Ga8Wps8QBxpYBf6G",
  "key40": "4eGT3EwNR2LP2tuXRqFjoRLJgzrdgX82zPoGU746ViA9YX1wxcBFBD5dMUCSvpbAboaew7FHL61MKe5tPBts5X79",
  "key41": "5P5FBr4zqMZwV9N7aaeYowHbuVRxzhrR9TUBkaNuqSGVrgJdsZp3WpvjibLW16xBbifnRK2gu5U6sHdvCiPD2x2m"
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
