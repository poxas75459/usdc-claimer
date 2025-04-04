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
    "4Yy23oR8F8iNFtCtvxVieGn1ubUBsXP9vbh24kS5ZBMgeYzbGgXSydzHMgLVFPBZCBmyX368eavy8R15BzBSjVGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZvNZEdEVNAbpvJK7yumezriMgqn1wCZbLZ5eNjcJLanmFr4AndJLSym72BfkEmausXUzyN6EmxAoLmdrEtniUGU",
  "key1": "3QjTtoA7qGJNgfozvhCx3f999t1hivsYSe3bQw7P6MuVqqnZMnS4fseYyvd5udLPLRdm5p9vQNhNdWs2EFnMZNMb",
  "key2": "3ymW89QDUQJsn6ptXMz8ReMCmPjTGLmytbvgNqwtpQPReHACMJgLoxaCrRF9TecSe5FjsdbZKLwVh6PzWTudbvnt",
  "key3": "4oGDR91qaFo234ruVdn3eNtQy5niTVvw7YtcJvds5c9iAMMRU2jYSX98wveamAqygoG8vdW9A94pekJBBVbb2XtE",
  "key4": "4UASTeH5NyD3f8GoirrNicNUbcnXWjxxgBtLWx9JdDNcBcZnSHjUCrMxhfKNXU3gV25oAV7qEECwn9DHSxEDPvpw",
  "key5": "PcGRQhb7tZuTvzXzQTTeDBWekzkgEDsdxsn6NDBbtnvJsHz5kijsh2vX9PcrJQxZtBVMJ1dn8RxJgmMgvMrUtRT",
  "key6": "5Ub1pWBueRc7NEiHmcRi1qkb2Knkeyxu985pxceXxgcJBUUEdt4Mehxp7ErPLDQtJELiVjtbg25iMnpjYpovEuSq",
  "key7": "hhSrfpC2YAMfrLpPMnhi5PpQhiqrNspdUWD9iK8pn858tTNhCQfG4Eow3GTqvVXpW1r6DddfTJciv7MqhVTS928",
  "key8": "2Fdwx6gARDZyL2uJZ76g2thJnEZSMhqmSdUJH8wa1HBfrfyZQRj9YjfmA3CP8Rjo58UFx6H93RBCHyc24qQqCXME",
  "key9": "2EyEJNB4bJdEA4UyVSY6AbYxd4xpCCg2bQof5tHv4mcLnnLoAYWC9KUNKBgWf7RMY4VgexAr5LhCYLTTGQhhfbnU",
  "key10": "2GjE34tYSFkFWp11cYEp8B4zuiAYLNLX7TFeC7FWzssW4ByuT5cBYar6f812xyChia6yESpCtE3n2En5hw2jV9rT",
  "key11": "5ZJvRzSGq4FaYs2a4h8d8jkkq3PeoTXjaHtLRmuH7PVa9vRbUykb7L7ZBWuMsRBwRu7ewsTMCzDXXhgRnoeYEQjP",
  "key12": "5wody6AZcZ2g7kPRuiWtQtLsjSkbxCBZD72NQtEoCbqGYnmjdcBWM4yAayf91EtoPe96qfdGzpcDWB9DVK8sw8Ny",
  "key13": "67T1GiYuFCuKa5h3PpwQgtg3Jtoe74EkRJPULnqAkJzp1zJzEx8N9r3UK29RoJdNx5Tkh4Y9k7Lp29g26UGGSG53",
  "key14": "3cmNg9NGaGmTyQiYTu3Vkzvpm5CzfTXK7cG6k8KS64MZLrmEECTAmoq6f8mb4iwnMgyw8yGeQ8es4ijRhBv141bn",
  "key15": "nxnqCdVMvc8Qx5aaJYVYDQ2DDnC2W8B4ZdiaLCBjPnZjT1mVPzhUfUWSyWrkoYTVnLnGv5Bc1Nhn1DNaNjZwfD3",
  "key16": "4HT1QvDw1Nc9qA4KivuQuGxKen8Euz5j8UiVCSAvbAELpJyvjq52oGCNrt9R5jEiHZ6BXnzLu1A1t8WZfJ8eDTtd",
  "key17": "5S8ECdewisXWg55u18uVgzFfDNTgfh1W3FC4F6UG4mVVdbivmhb9yJwnvWzENn9Xi35JAFYnrGeVtbDnufKDQkhq",
  "key18": "3Mv8qinn6scmRkBayK3u9YcNMK5U1MNQcLKkiGy7UMpDNGghZMD41LCoTw9siGbX34tnMoc6oyrXv1D1RBxz39h8",
  "key19": "2Nzqfas4RQAYgrCVQR2mZJHcbivaYcvj55FPMc2DPwdETJ3jQewcTRggEFrqSnR8NgEXjJZdS9KVdnCFDzCiBo3M",
  "key20": "3d1NynUkPQxMJTjKhzLxXPJaU83W89EhgmaZVFNi2oZ8sWFAy1k2zcv7t7Z8W2UdGzEVRW9XMEjcEYKxxYAMPnaf",
  "key21": "LZXQwungqss7KeEHAsLM4Rh6K2B8F3Xv6NW2fdys2yEaaS7UA5Lqg1uxKXg4JGfokHUWeTU67H6RXQJ5uoCLhjt",
  "key22": "39aPqhne4boAjey68W2Jc9qkcAb1GW9roMsNLhiairkno7riLTcTyXnSUstWg2LVqLQLMwmHCXEgtCL9g1uwYg5",
  "key23": "413tSyEZzDF9Gru9efjhhqsqceDEc2BkvSwky1NxRyhqAK3beMwTK5pJG268jgjrrWpti2ZvyhKFrEpKVYrweLRW",
  "key24": "3JaU6iMYgddRemtJu5kB23r2vbBouCQzeDLLkAF6y48XhsZW9bgbWU2DEsx1ad1UepYenF7p7kjynXBeqzYdPypN",
  "key25": "8pGfj6hWfHLa7M9RNRCT1RWGW5Qzi1PQ1j8ViyJdybMHqBfdF31TAgorEoodnUWYUmy99frXqqSBvusfY91aGrZ",
  "key26": "4U9z8XzrEKnHUxagXmUqKzCqtu1dW5q31ur81NyqzNzqNtzo1iUaypFRQ7Y4zKcWhmZQnaWZdBTNxV8XwN46duZS",
  "key27": "XPLLHZb7Jj18LLeVdKh36tbiDGSvmKi4S4KuRCYiKVd33UbBZFpfuFiwHp2ofa4YtzS5e9CUgF5tcr77y786AQn",
  "key28": "xY6Txa81vtGxiY7xZSEzus3pitHgVmK2eZKpPGDRR4BfCEmDyuCnCgSBfXPm4e2BC1rz4szicpaEMNwztzWqpbv",
  "key29": "43H4xbwrbSbvuKMT51mBM9hAdERRgD4N2pssht6FwaMek3FfxzjjBSnrtVyihmmu9sqoHHRJPMKLuezdcqRm2BGU",
  "key30": "3CB4DWM6PfBjcgNEmnUYzixXLbPwX2gCQ2LZTbiUTPpbi3nA9aaUATWSnEmui7Fjp94Qvuyvqpf7r6rEUwPALofS",
  "key31": "5SbFxvb1B6HzKRNjHtZ3vRNkQFAJAVKxVQRhrc7YrNQtYZzoDa1xpGyVp39CwLPJPpLUgQHE8wbz24fAYqD5XM6K"
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
