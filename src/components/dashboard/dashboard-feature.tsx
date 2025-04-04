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
    "5eK1EGuKAAZTNkxKtvchSPkTdzy7NeNrxg8Yp4VXc9mzJEvKPuHpoCCMRKvJZgEvH26G8SNW2ufnrBPN24ARMnJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mNvxrYV9Vi1XGXMu5P9eEyT55WPNMWanYg85DdXR7ou9TtRARY1sEJDPQrx6WDg4uX6RAprWeT75j5Bc7HgeTx2",
  "key1": "2HghxJpALzniVdgNNenEq54bM5aCYBvTxC6HofQFnKUpX72bSRzcLJPn46NKJ6zW9JNRpz82ggy2hrXjfG2ydtPS",
  "key2": "9EotfwJEcsvapuezCFeyoHGPHj7nby1vNinR1YQnqb7ENfRpCmThGWuxAdng9p3TbRMSaewApAi9MCSs7vh61cP",
  "key3": "62Ud7J3duQFqXmmsfA7zqjHPk2RbeZ2kZWK84KUejwXxPHJwbA5CYUct97J39nrBpqtADFrC3UZq2mST18E8NDoY",
  "key4": "3bQopDtjFmqD7YJzymSTyaGZ5EeWmd74sXD4bzJG8aSZmPq55F4tQNrkuUJY8Je8WPYnH7uLLWsUZsFivoDLg9cz",
  "key5": "3uckAQDmk5yPvLDoe6NHUqxXfcDvU6n8PZzxzMpx4v3EBG1i8y1VCghmgiLR9p8HYdAMGAtRkXm65xa2VL22CJvP",
  "key6": "2hV4jW8p676U2X9vvj5wASwfovHWNH4tLHrE4pJa4onxciTnVzgDWEd3y1vjEEJk7bmZPXfN3A7aNRRL732tgwvE",
  "key7": "2XATuac9EGii4Ebec5gFgpN9qQonMLDmUge9KzgANmkxVf8PpkZMUKnETzaVY1AadwY9wCyNNpPQNv3LSjrv7NvE",
  "key8": "25YucPEqF3QLYkegSchHHFxSoDsPzpfbS7DqP7tsnVMA1ntJA76CiR7LkMfvzGU6na8jQee3HCbUqfANLYCvEv8J",
  "key9": "2Ju5Xqp3TcVQYxvxX4Y6QxtKY1ApkEpDMwv1X7xRB1LVGmd5cJns9VBzY82d7h5MvFvL8yoJ94qsrA6btNueEXZM",
  "key10": "4ZbEjUpTq8LGLqUypfmEXn5WQfRDFB6ymxP3uFQLNxdJv3uN8uSSoUTA7KGsJx7bxYKVX7c7URs2NJ8uTePFcuFh",
  "key11": "25oyFxW4SkuwgQSkKVHHibnKdQ4iWbhTc11E3sgd4Xg65NeBmNsKSWZmsgV4YadMMBwQR892RmJMCnLDWrbLkhpN",
  "key12": "3Xxe2JjQMNYa5Hvmpff5HC6gsHHMhcL9bbYDxP2iDJiJeR19LGoUaxNFJ6SDGiXvZZYDPKtBRS1Hn8wFZcKXhWpg",
  "key13": "64TyfPH2n4PEUWx5qFFYEYhLWiqa257VDrQHjmT8c8vaeFq7hQLdsvwod4iyt8W5DZ31LWDETojeTCJpuiiFfYF8",
  "key14": "3vhEQ1LtizHeac8KQ7yQs9PrG9ZsMZzp4bWBhnGTE1m2FPiNRVFYrNNEEAH5QZMPEN5ChzB8y8QVRKy8r37zfeWy",
  "key15": "3Po9qUsiG7qQwvKWxzAKuuqNLayvbQ658DPey5hH4pmDLpFhrN5RMwBLF2sW8c9xTsn8xpd9KGwgqB9k6Z6ioTtH",
  "key16": "35UyvazKiES4gw1zsvh1ewMWit45iZXvh39vGEaExG7W9yDi6LjXdgZhiTTkRYUKFcmF4zMZUGVQdTFHJpW71iGQ",
  "key17": "2EQiVvKqVtvuKkQ7VeTdwBoBLQkpXCdGepB5CZNkCaNnUZuPwAv2zfc9C1jxFVMx54HGAh6ogVHtMkwBY4vsjBD",
  "key18": "4niGShK7cggFHcoiZpvu9ttHZV536ShTeyUfU34GUa4NYJrdrrwpiqpiJShp6vtJvQkdGbGSDHToqYH2SyMw9yMn",
  "key19": "44U3nK6NmgVxidjKTgm2R24yT6x2qi3ehbNSoMzD1dJ2KHhiVmeEL1JPD9eiPgBCcrcqUjrCmwHSNvaC9jaNTcuF",
  "key20": "dA5k4CdueyXurLed38xgrzdj6q2stTJcgJLYLBW94ifM85WSqotGtaDNsPzHAcvMx2JLUktL5dT6bgNko3jnVcJ",
  "key21": "tppUd5Mfx8hpr5KBRBrNkzSzNySc9P6y4KDnFEeiXvU9Ft4xbkbPziBYhKtFyrWCyM2TG9hvHNpxM1UGUsniVDf",
  "key22": "2zoLYSNt2FtKFbfeY3a8EPkrp3yAdfRcYWxw5jo4R3gzvaP14KQ4QybbvrKsHnsqrcZyvQrGTFLYX3gusE1BU4qB",
  "key23": "z5tNXWWU64iTXmPkrCUTcXBcwD77jDFhJTRn1rWDJirsX12oBvR8Ep2SPmXxW24FsrYLkpH8etnSPGgP5gFN57C",
  "key24": "43voKYP2o14XiChrBKj7Uv7PqoRm387USzjxbvFpgzPEkCegsp3t5ocBms17XwAJZdcJWWWnb97TfggiwA9Aek3v",
  "key25": "3cTiNkr1g5X8yP8R2uAapKRUsQqYLHUxvy6Kif6fQNfZXioCtB5QAWMgjaDgT6MVnxELoPvVHwdGUsuWGTQRwhqz",
  "key26": "395BGFctjCVpyaybKB5CABiZ8mrz1Fn9SArWXVbBe2wLLvZwtgSVH161BTYBPmo4H5zwyt8Cr6wrJN4R7gdBKHii",
  "key27": "BSgW5HcKPioqGnHVXf2rWWkH8XTu8ANzxExCUGYtQmTJZyZLxMmmLQXUBAdTgYAjQfmHAu1szW4aBZaoDAv5efS",
  "key28": "n5HofhTUXoswRbyS8nvY9esvu9eqdW1DmC44ZN8D2ZcRFvrFfCuHoyN7oSfMVjTSuAX2KNeUY2dZncqkt9fpgpM",
  "key29": "3wQLewc4ZTpWhL7hkDAQv53mybHLycYQ9NPLB4QnmomndU4CnFXhFQrfbaQe2Df1wBpTza2uS8mJBHaTw9ukXgSt",
  "key30": "53Yn88AbGRHqE27B4KjnDm9oqaPMb3VhEPLGgH8dLptY9MNvS38sbYe6APrsAzonjBTiwXkFE2V8UDBm7CLjEdXx",
  "key31": "2jJsDMA6EGzAhc4XwnkmRZNT5BNqGzpK17B6bndEjhHuN8V6owsPJ5nENoySbGVMoDWFftY4qT9jmBMNrxW7MfK3",
  "key32": "2B9h5n3gihtir6kka11kzYckZ7S4ATNymg1U8j7vLAYFgrq6FRDYbfnAxC51y2AC3w7ErKjnNbMKwxtR3nS9rqoG",
  "key33": "2ERSfbgEiqWhoR45UWiMws27UDDotHDnNKFd2iUkUAvbmxkuT8cYjtoSjTbavAVwz2r7VmoBXdPTQmZChBwFe9f2",
  "key34": "o5RfvUitdyskFfdcf2K1BnNNWH25kSxFK7u7dhg3zZWbWDFGnexVfTjLG2gqp8DajcSm2L4VkaYQLgVjSh1jiCN",
  "key35": "37t1L62Ti2SwEGtMGjVg1fNobRxUccsFDEaK5tfULsyHBega6iezGPhLCt2DGSnuuAX3QpdVLefemdK97BbyojUN",
  "key36": "2H5WTbsUWAQDvjoeun9RmejeZn4xzh6KzzidKWWmgurCHtsJmvBdJGf52hnTzhdNy8Zv4D8ToZNuyoCRAaLvdQq6",
  "key37": "28BY8TMDLbRVwLRtPqYJ2owD3Wr7EdGM7cNNGBhFHLMxaeZn4fw5CX5LPo7PYUkJG5GQsfJ3EoPi3uE7Ue8fCKep",
  "key38": "HwDzdSzLmcnJ2zeKEcuMCjVEej7yvRoXARrC52G687pgCvkEZXaHbBWLqcnuCEJUkWgz7HSKvCqh62YHwzcNqCk",
  "key39": "45BbcqNifykuZwTQiJxHtQqhKivEGuTq8mxoTwuq5aTbT4VuStzWoV2JadVNyaXQHW72u5NyGnz9XzcBxP5aRSBW"
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
