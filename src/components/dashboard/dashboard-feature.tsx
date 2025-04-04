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
    "2XKvJNhQuQM9W7JiypT1SBwxwnQYPY1xowydx1w2P1VjTY2sgCcEt7tdybqifkjKBxEuhYw74VzyDJcaJ6RDG4zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q8KNVJ5wF7dS97cjvCrfv4NGPrhoEejVB77jAv6fwVqPhNkhXP8bgpsT7jmFyP23KjiJyX4iRQV18hw3B29rYbo",
  "key1": "3YSo8NSH4nJwAVVZmF3qM8n6BDRy7ABJNoWfjPCP95WowSejmBPy9tswbV1rHerMsaNTYgDXJFpNhkVtQ3xNNRcy",
  "key2": "555tfyztSUJ1Ph3FWdyDjyeV2suaLh2X4hzJu5fcCe2SNuZpwDTpijmtUmdoMK3YRxt16srWvaKdYwasvYK2qb7i",
  "key3": "5dic4P9cYwbG1NEeoMotkkDKRdqCYwckqjxyoz5Pk3GVLcCbT2UAe1a8wqsMioUL1oiyJNDSKRtaepZHyA4ucMTm",
  "key4": "Ta2J4XfBf8qsY6tvmi87VJ7ZxCcX4nVScc1CAMi36P7iv5hGwGV9C9jhMBaVzZ4CQNPHwAhKaJZFbRnAr4Q3zAU",
  "key5": "9FYZkic2ktaAcVEM7aS6516J1j1fgbWJ3MfHn88gq7673bqGVUyDBHxMd1BJaQuHwNqKDeW6UrHnY1a87qVsap1",
  "key6": "3DbFBidSgZNPcVVzcKBpK8PQmj2qeawh86PFanS5ZWZJQUiogF7xCfHJWXKZjaRiq3RsjzqTJ6V8WgNYKSfBq9E1",
  "key7": "4hJvjEyPxZb3sDz2yfQ5hue6J6hRcSgYaw5ChgAUUoNTiBQbX8nWTut7cZvk74codC5Q1rfH8nEhXYTXmrhUbkup",
  "key8": "5cgDi3Q4TqK4aTfAC7VctBUKjAEJ4MFTHMKHCMTcGndbFAEBzzPcPLxUbAaq9wuiiy63aZWJxt1KEbbpzPLhw7JE",
  "key9": "4sy5TMuxGMVE9Xt1fcqS94BgxPKNaJg8bvRYn6MWuQv3Mtou9Uqswun7pvYtcmvgjSrPbNxccMNezCfnyXZ8YV1z",
  "key10": "4LExJzGducCJe9u3CfyjZF3jLsBcGA3jMHAbFpyWxFPE37aeUnCpZKkuzQDfv3S1N1q3Wi8L6zhfPLy8YNBiABY5",
  "key11": "28akZAyji6EKob1Uft9x5cFrHjmGBdmwCpLA8GqjSsTaGwXvbCvDHbozCDR1aJhkQAuX35gLwv8f8YwVVgHhLGYS",
  "key12": "242bmdBJEXUkSjoSgSacZfjCWpeamsnwMyct9sbdZ5z85dtPHoyTRhWKftQyRbMKvFZh2NguygRBbGRYCx1KDCms",
  "key13": "sKAkguShrEwvADuTAxj7SaCeLrPAEALAMjtecr5eAVbzoG5u9vtCmVjRgxcdkeDZfTwNxpK2KXGYTxQ3YEQCVbb",
  "key14": "GY7KSLt4xxLftap1GTJCtejsS3bWDEuAHfbekSe21Go3YesdiHGkJwdHgt7nR6sYuzKn7pJ2fYGgmCwwPXJn6pp",
  "key15": "jToDkYRxLbWfBNFVnzKGKEHWg7o3r6deGEmV6dmfP7XNvmzQxyXsXLhLss3XdUhDioBqxE16KmNynF2XnAg2122",
  "key16": "2yD8NycZkV81trEwV58YRSpeN2QH6ZmeR1pVuYWxq1TUCauKNX5fcXPrQXSDE3krkRDhopgTCPiUBs5F94sD92Md",
  "key17": "3p5tRcNCSwrkn8jU7BJJE6zuhJtXCHmhxqHNnz1qLr47wmemD4gqZZKbuxyadumKK1h7cQZtbD7Cd6rLSQgNuVD3",
  "key18": "5oBKF3VvY12J9HunKyHD8WTz67J7W68UK57Cs1nMRuVcaaGdkmjdp6MD6jpZNMYegZLJeE1poCeaquB17AEaH2Mn",
  "key19": "2Z9bibPmo57rV5YDxyj7ngR2XHreQaZwxsVjKZ8xDDBNHYi2q4ky8w2BDDvgqY2NbxwsofYSNUAgvge71XB22awQ",
  "key20": "2em5H6edkdRyiMwZNJKV5z2KFuN5TbDEzqohMUgt6kEAfQeeQQYDrAafQZSvmD6HC9b4X8mcL16kgGnqtRhMUa4K",
  "key21": "3qngB1SFQicYrovi9WHAsatvp3LTuTSDtW1BRCXtWLP8c86uiGshvBDXvGq85VYVnvd1399ZxzzKTFzBGBrXK48s",
  "key22": "416ctj3NKpJcnVKNZZ9fPUJ7GqEP5AjVVic1J5cecWF5J4G92W9aNHS1dBuR1hsTUSKwRzUajNo8SwoBJkvQ4NAD",
  "key23": "3hcPocdstdgc6HSK1Xz8c1Df3hv39kCKmHAgkrTzMG4VFVdPL7Lz3Ptq6KEdjCgCNfLgHeGAVqoPXocguAr6orqH",
  "key24": "38aihh8c447viJRqFYY2njbaPigZ55QXb9KsLkjZNEvdsdUp8e3bbkXzHSGfpCDco9KgKqkEFZEPvvmD5iN8AusE",
  "key25": "3HDPEMBzC3HRGnC54p7BsKsDAERfUUYPmc5q3q6uB28uhUP7wvZSv1biAUTUvivYDFBbmskcw4WptMrikUbsHGBk",
  "key26": "2Bv3LFKC4FRHEyBrNTZgaPHaBwp9isSpNKTFz1rKESw5vyZHfvR6URSsZpr8gNBNpHAw36P9BBJ24f2pcXD2EXTF",
  "key27": "438arN9XPA2bJ6chbyx5PMgzB85HtSEWHTBN6Rjx5QeiZiNWM7VAUVMJ19CmTLTqNWtNUETkRs4wUbAcQEqofM6M",
  "key28": "rsUxtcG7ezX4V2xCcWUaEQ3bHiSNAYqNCcAPjoyoaQG5bEinrFroB4dJcRz33CU9hjoz5YGL5yjPz5HH6PrpXVM",
  "key29": "18gcrUo7jZDcaPFB5H5DECKDX5kwRXE9hzjgP7x6jLGXnMF2kKY8tCrHognUvsNjDsJdXNUP51QkwPojSSQH5G8",
  "key30": "26PjH8dWa4dSPg9wWrp2RrpdJvyh9XP2EAojpZvTz2zPJfHhNEt6bNZEKZpDUYuVASipGun569zy3xV2HQGJQA13"
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
