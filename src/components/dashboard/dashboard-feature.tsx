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
    "2pBZHJRE4czfJoSY1gW4myUo4qP1wMYuxq9H4GswfWVRR1dPkFkRR7iDY2K2H9rKy7QcxcDBcXoxnQpgy7K6ZpdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qWaqVuk9U6f14xeSXn1A1dJj5VaMnKkMUmVDR9ogsebr9PrufbV3xipsYPeZiqhFibgzMgy4CHDsVWkjQW1tz6S",
  "key1": "XJwgQ8Db7MHp9r8Lb5ALFdEr2MxpfCVGfN4Hcgqm3a9HgkzipM6gcRnbtVfynbVGarHz733ipu5MfT3iojmHr5e",
  "key2": "QCuBjw1oQssMsMvmcSCFMzqXRFkWymBb45QbQzShRbSwgqRvswSCAJpYFnm1m1ZHyBfEjH2GMgotHUSC19sYsMa",
  "key3": "5VwULpDjzeZfmw5XmZD2zc4nP9ARywRbAEuaWKCH7Vxc74PSu5k338bXM5JQHD5cQ78e5PE55mMP8LdcRWapxg4e",
  "key4": "4tGayDAdMytQexbfR6A8qZ4NXekhPc8XurVCWTzVFiXkYkNuUUCss9SNzbTnzSjFJ3ByRNN7KRYNCxeDujw1iadx",
  "key5": "2SmwM1E37e34bcDW6LyCRczAX3kjhSjEJtDHq6TsdhgNcw6vMN1zeeHYe3svCBpnkQmitxRorqJReT5oSphpsJq3",
  "key6": "5f1CUz1ewBu6jkJ6ws247X9dZuo2y4oW8HUiYGovVD47tQ5xAEE8AuyXk2vChn1o1v8sBvvNu1M32TUdVs7jkiQi",
  "key7": "GVktSEuVwmGfdyfirvDRkM9XUMBCSXK82HM4oucKdk74JePpygUbv7y4eCig8ti8YtMRGL7HgTwzwoFV5hP5KK3",
  "key8": "qsBYSaP1PRqfkkXNcPNoGYK75tqxFL5C7s9Ygo21FwJVozdKpNuzT4GCfgnv3ReDeDLRsnAZRTfLwktNLAgzkyh",
  "key9": "2BoUToaxTn4WNrd2zL5pJTjFM67jTuqavVdqiM3LuJSGG67deTrc4TSMf9oxTNSLqSMioBr6BK9jLx7sLArf8jT2",
  "key10": "vacx5AwZ21sVRPptkFarbPSq63Lf1RQ12X6L47FMvVa7pPRm7qP1vFF5hVLUiHwsXqnysECMpBi4aTacQ5Dhcai",
  "key11": "4yyNtPi3eBstzb7vPMjXRvdRhA8TDfu59EudyxpScYjaCNLh7hEBhSGj2FZg3XitGVYaBfT1jt1JNSQRqAiypJbx",
  "key12": "5Ahy3aDPvSmfHyDxXW8ToR9J8PXvi7UTgUn5RPyZFR9po6qee9ar3oSx83ZnK9ub3ixhp6PMF1Yc3bZugxJRwNTc",
  "key13": "3ZQoaWE7BVq8jb7bZ9WjLyrtv3kQcWJboPfMkBw7XefAYSZ9AVckLS9U61xvxBhDuRM3bq4pvU2rm4gyHg4Fbhrp",
  "key14": "4HQWYxM1zR4P4KZoGtNuy9oxTfeq6fMPNmBbNKstD3ahdYnFWSVhY9UcZC4mBBq55D9VELgkMKdKnMFd6pcQ93yr",
  "key15": "3wkEJqHemaEV9zNgERpq8TnQwrnb1E7iLWF3BAsyDeaDzgD9UzLWq1QG4VACXkzQVwfYRFnpY5HufYxdBbju6ru",
  "key16": "45vTM1kDuFh9h3GDRU2vhHeWzjuj4ZqeUprZxaSzoAEnPTQRTC9wVhTPpHkBTWYCHJeapqkFhi4AnDBqXnTcArHz",
  "key17": "5KQP1pbV1Rovo7c6zQp1cHYF8z5wsRXD9Qa4rUJA3mGANDmFV4123iJDwhfCE7GK6yFEWpTLK76huu6GQ4N8QaQP",
  "key18": "bZ6X6v6eqSP17faBT5b6qookuY2dUmgY4UvNwe8vCx8dCd3oryGnCEJKFp65YjXQUj7hBZkGMYacW73LQripawW",
  "key19": "3ptDSPSLm1r7M6bkpwk22PW1J86ZbRNyHhmWEPCMGRr5NRS4XmHEt79ACr2A4T2a26aikx3oD4KGcF19zqeKdDFF",
  "key20": "5Za7vbhQkmytf159ZqoMFAo27DgQoRDNzmJZZXbQsXYnwJREe1jY3L3wAth8Y6zYdgAGGanJuorMS7M8NN2vtbhn",
  "key21": "3AiMQeMBnpzFoo9izKVe7d1qtaUo5spaiFncUYw29TnwR1459CJ9R9nSjxye6Lrjgge1HHV5VUfvdvkAJmrSaat1",
  "key22": "4pU6wAANjGEvw2rUtNMKHdVJ6PnwJZ3hqUAiZoGnvYXfmgfim6h8dC4UgPKtDs9kVGNJ85aKNDVPwvNH2UzhDqH6",
  "key23": "ELv4GSpCUBqpqWqv3KvRgeyjvRzLJSWxXCNbFVv56gNqtKHv53GZpapwBaUg9Xti6urdsgVeeEdazYrbzWT1onB",
  "key24": "4aKWhgbqeteKYvJYf1k2zN6rrEGwoXGdcdCrFT2UEHnmYCY1AgLGqgmnZ5F2jUsLywTMd1P7TTnFczzxDFDXZc52",
  "key25": "41vL6DuajjzNChVqBYH3uofBHsiza72hL3GP13hRqENLqKB7zAeDv4m6tfSsowKYuqjZjbeHQpp7QD6DkJE2Nkex",
  "key26": "5NUUVnVMezZZRus8wRRsD9MmbBdMnVSYY1yZ7uWg2k6Uqb3PsDykpKPQpmKri6wWvP9U9c8eHFfgewiWf2Na6Kjg",
  "key27": "66jV4ctPKP43zFoxZjU8T1LXahpKUCpGB6SDJxJEB7krjbLm9mx11xzSeh4PqyBzQCmyz6Jdy3ChKTmXLCesPmgP",
  "key28": "2jcF6QhrhdpQ76ZZLjG2xtsKnWPqsM3ggVzRKhryDZvyD8qfD2ZJHSSaTiVc57rz7CbtQYELw7f68benib6EG7sW",
  "key29": "3JPXvdwig4TeXbfh6FiWgMQrHYMwn3Qpbtf1yjKZnMmD74UWcEtkSntDVHDhP8SKgrYFrFZCfMyk9zuaeCAeQFTK",
  "key30": "2PwMJmiyAkvtpA95kYQQVmZuDmYGEqDtbJ7KSqJoJbdiYEwRqNYRzMr3AZCf8HfKFXCJsiecfRw6KewYhS6EZfap"
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
