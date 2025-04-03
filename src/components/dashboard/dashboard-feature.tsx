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
    "4ssS4iFQTVyR94VvQfSiJmgYiUhwSp3W11MCLraXPeS1L9m9DCo8b1CwHWzkSqTwyHV6mcYhSBgBbf8DFLPaAht7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mUq7ZFRxuvhsXnmM6Gj5aeXXVyJrthB8Tjj1XagL7nFE8JW8C2p5kMPDK27A8XyYaioJX2m3qhZBGJtPiUMbs6v",
  "key1": "26ZBM3BLZ5bPyAZmC2ZFfHeNPdTTzzZPNeoektnAvswSVuLTrBxY1UKYoTqircL5sDDHsNEJLwA8WYrEhCmdanvu",
  "key2": "5xJdZVBArFp7CQNwG4mRTdUSCL1sVkmQBTRbFScZ555SMwjmu2w8tC46cS1nMKk6tAWP4ttfurwSidGFU6c3et4M",
  "key3": "Ffxkwm9JW8pw7rTqUgWMAdcrCXDtAH954J5EXWFHRephVS9d5SoV9tBzzhiSuDQQimewAh8p3Vi9tH3mXa8W8hk",
  "key4": "54wnwoz1JfSZi98KNeQX9u3pf2QQYERXWs2tPiJ3qiwUUesEmhtxnewpx1KtAumpD2kRiy1uUQujfeuf3zokvBC5",
  "key5": "5QorsnPBUkaT6yBt2MwJQHSUN8Ge7vzdHDauWGKqoUcmcfJwmjwRhqucqt7doci5vSovN5aGaDz9vwVXguchymSy",
  "key6": "66sPGrAETcpXy9GSJTnqac8fafj8eErbjpznxzb7BNrYSyqzymRfj7wtRsYyxWcGhNJpyJmrQ2r6581qMao13vU3",
  "key7": "ZGEM98LUVoZ81ja6fDiJJx71G1Yn1M8YNiuiQZpXpzDhWD2kwZMDWqiTT1NDRqzyVwj5j3PZX3rZ6tfKDcRmgzT",
  "key8": "2t8PDAbnqrJcBRT7efqME9248746chj6ST2wGkJxQqMnRS1ASBYKUyiqb7zkdk132Ep7PPjfRyUGk148BdbXmMdv",
  "key9": "zPUt2nVdqhhHygtHCeEbCQMNhj6gii9iwvxMXwFxmJxy4FcNBEtgEwv1qHzJwDPdnxQNsTUsrHBwiXwWqS9VYZB",
  "key10": "D5LHWteRzoRPZTycCMZMJrH5xq7HKf6ixhU5PCxjP6ps8odMvS1f7hcbQFSnLdFwyS32gackm6GegVi7BV4X5vK",
  "key11": "3DZZUzS3KVrypb7RoyVTemDLzf3mPvZFakZARR2gk7Wv9rYPJr7Qu8ZfodVCEVfuCjErB9Tak4HgyYD4meNdoZkE",
  "key12": "2KLaBfbAq2PzMByVgJswpaG39VPDkPhaCLPeKgHfuHd6SmRe8wSmZtMN7q47zpkLpKREwHPLCDp3RewnPnhPsvzH",
  "key13": "BRufT7vJGr2owFpjpfF33Jw5Y5kBFUNQRBeNjFxbfJFjKvoHT8AhdFBjdZ6oENwVy9tAqzQNTAh19VbmXrDUMGx",
  "key14": "5FaVSURp9PB2Md6fqAffTRBUbNxPESDzrkqmZfQwfB7f4dMvTrmhKL5X2UfZkA4ePXtrKijpHMKk6Ymwa9CpmXbC",
  "key15": "1ahF2dCUktLR6CsXcXWBtqqjR6tYaF35Vvq2FLYTXG2t9KwqfwLsfwdVec1bXvbi3vWdfeidMX7qJzVotb6Jj6K",
  "key16": "5nrLoKZHMzb3K9ndk1GAHJg4erNP3sQBNvZnLLqminiF798BdCzWEf6s9aY6xZRZ9XwpLXV39VusHvmv4QhaJ13g",
  "key17": "LffdNkF1ssVnPskTCMN8MaCDGmd9aqgSqEyTjSrMhHVpp5w5qb9VpVAiwgmvzJFgHguvY8XHK9f5WbMvryMhesL",
  "key18": "4hmpCkoxGkFbbXnpgi6CT5x2nMEvroHTDU3eFQT9PQaL7vdrnrmvEWyjFE3HxoAGC1NwYFJDbx2dhtXWWaBaw6ft",
  "key19": "3zLPHrLVTtp5znY4JAw2BneJ1FHgGHswSAXxRPua2E2MdxzEz3fnJBJAM8ndmhJouYZ27ZW6VDZhnnGtzQxDvwYB",
  "key20": "huQAEFMeuqyEvTigDNbSaFrdVUP4rwkbovafVtQJJXkJSLzWBYE7yyhNx8K27kzttoCXS6Cnw6bf587dVQihhfL",
  "key21": "4gyzCPWH9G7Kit22Lj4ioRmZT7gcxd6xArfgqk7W8zDFcYsws2ZC9CeVncaTA7GBKrivzD28efvkuQLAbjn5fjd",
  "key22": "2uvo3CL5yUkKDJmoH3XMFbbN5butptPwEE433PoEdfTiw14Bb6wKDsjV5zezJQHJHrc9hf4FgFVFTWhRynkUHaKe",
  "key23": "631VwTfwATvXaw17UM3Hyn7uRyq4ZCXiGrGmP8UhRzD26Pkg6iLj29VKxnBk34X6nMCYPg5pTzJhA1GnFpdZPXXY",
  "key24": "4UcVf3Fj9a7ABcGBHJhcUQ11V5Y7jazggdPf1HunxgfZrj791tpCCPMz5UVtTUB2gfwg3WTWb5esMyjqoqynmsj9",
  "key25": "5Q9rgTffJgRDfK7H1QcPjLmXG3pj8GzQB74H2GiQPiqvt4BByV9rHL5tMJPFodnkL2tw72EAA7g81Mxd2WUQ2WH7",
  "key26": "2r9pB5uM6Gj6d8CrtTvmfqnMXmcvAJXyAcmbAcUR4VkiJSr3QWQzxj5BZSUrduXbo3nbG3FYbgYsXfZ9Cj15kgEj",
  "key27": "kNJXujX9bwWMSRgrzfUucB3Jd23Srw6aCJ9h7m4QzZHK24qxpj33dbvsrE2PJDjTiK4U831QvYDdBBoZ8WGnBFJ",
  "key28": "5J1ChyEz298y6Rq8FtUUxri4MzksaWZ2mDYdmCbNBcq5rrkVSWfwzMBbNSLtJaKDQ9q4gnPT5koPPqcK1usHdd4N",
  "key29": "2zkmE5sJEqt1mAgoMGM7UqeYRyCUEm5wZ7kTZyPGmJAs2Ntj2k1W357mBTSvT9LWejydjV1DxsGUDrz6T4ssCR2C",
  "key30": "4GWH6uKv4QwQPseQvQEaRRtC4Zpnz21q2EjG5Ms7XVUFB7aqtXmhBRvLDgFGaubcNYeUH81ZGBqhPGejqmEWB58J",
  "key31": "3aUiAUbyBt8PbZq1eN3hs8SF1v6xY5XQ1AxCrLgntrcMzMoWVxybHmXttnNzmZrBZ7jJaFu9tFrznDsPNvhFEmNA",
  "key32": "275SCLFUaQtxWTcqCynLMnmCEAaQsUUKWcwWPHbHDgvXJRHnmXXG1nEBLyihJ9NMPQWMf1wFBfzpJUzQdceWqwtt"
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
