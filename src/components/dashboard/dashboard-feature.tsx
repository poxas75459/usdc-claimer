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
    "5Jcqs8d6KkfFJhLYBV2Aq2xMRv5vyvBQ7e1qLDZWXKzkWon3NvMf7vxuK3zbi5bBJsYoFLQX96ibYuJXqv27hM3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C2PykuDncVrRq5GBoUoMbgzivTELKYbVxHMz9K68P7iAyRAXgLN3Vyw9osrYmSU7TTnVp77KeZRgkoeYQdQN91N",
  "key1": "4GfpQ1tnsN76W1UfFuhf68dZDjSpnWBDZsGWDfarmUZzG2sRLZNvSkmeaoXZCWdEd2Sxv1eiLaUL7Awa29794Gwo",
  "key2": "2qegjFtxRVo7ZrF7b6mbXDietgdEo9VSyVAeCkWudfYQo3dXx2iuY59mm9cDy6jF3G5G38sQDmNLtgqGnRwNZx7q",
  "key3": "2JSSXZrhhAWYKBLaEx9rMYX6w3RxbVVYspbpFdmiyPtQNs8cBSHqTvfNU1tA4GSiBUiARPgAyBfAZVbxQ3ybnvPb",
  "key4": "3ZPAMwMguD1ToWL8QpmyuahhjJJ4UKAoLZVXGUsKnFbXtanQGjmvNnnjCxrvR216A1jrzPosvfhLu5e9d12K38yZ",
  "key5": "2vhm3Pzu4i9QXU62KNX3efDymnh92PJ8xTdWta33E67v79ZsufroaZ2dGv3CZkAfP6TzDNgXPG4Rq3o7vyMszvPZ",
  "key6": "2tL5cRAeyiFQsJibFGYks469DxaENJ3Lq17cPuhqPX9qakjUzEc4PMpGLpkZ2eW4bkBLh279zkSV81CoQGWpBRod",
  "key7": "43phNN2RMe3pHqg3rLaPKaZjP4hJKLJwbH6izKE2KyYMvgBz32xEVUHXuZL6NTCxNauAMsYvzJdNWQCHDYB8LShM",
  "key8": "kXVhcRDb8RnwpQy2MZdxDqZfiJAsAvVyMFFowNVZUZZvMdL7uNdwpE1myjoz8Hcki3Kj5bkC1ykDpV57x4M2rcU",
  "key9": "2HadQWDLt4jBUrcA5TYEysbXpRM113f3kF6LycbRznxxTPrLGEQztawKbfz9pq2TKb25yWzK25P7JeWX4Zc2sGnQ",
  "key10": "4o7Ak2avtpe9WiWByVAZMk9qQ3tcxDkujCGYTdtRsP2ML84UXg6FAEcvZLQ6S2wbBMGzRUnNa25ETFsVffEsNkpM",
  "key11": "kwQZSv4qMW3o9PH9zB9KFSPfiiaVRygpjjKSMZDER4cqf1mkJn2oVKXKXHUhw9KvZXyqMx3ouvyrQgpYGthVgc4",
  "key12": "21Kz9cjicSuD4Td8WnHgchFA9xgfPRQsdHWXCNL4R6WnWBwRkZASRq9LMEsxX9ofqME98kfEK5EJ41ZrviiRW7Zm",
  "key13": "25x2Axvg9JgcYq6YSBaw4v9iR5jYiyg62jbUanMwTyXkmdJvATgcfUxxa8snuVD17s19dEPWsDLpiKaLkYpNMNMb",
  "key14": "31W7YsASSaicpGf7oUmvvoDdyw5oBMxe6PgaxjXXTaMUN24TBmiTtVRSv8dHnDgR4V4yTFXFXtGtuhjSJsWrpggL",
  "key15": "64uQ3RWF8Ljo3qnfHsv7XMAm8a5iHKDnKCbsV4kQEhUi8h878zacDJRT3CCpYouWtvux3WUSmFwEu8NyPXwgDWVC",
  "key16": "2oW8X17DZmpK76q5tg7C3nx6HGP95ihvz2ofgubKF9nvXp1bXsMyZbvc8Qp4mtBh5CoAAc4AvM9PzsiYasF9jqoz",
  "key17": "5FdSZnp2N8XGMEXDzH5Fiy9ui6JDkmb165uWQ5BfvMSyQ89RnuSbUYJMtxkqJxgMotJA1pa8yHvUweQQFBzfQARG",
  "key18": "488H7ypWFn7b1GBTfNUnYvfnMVogWAsQ2GX4Ddq8fCTAETTDRh8qU4q2UpKUY1YvGSo6wSnHmTKPz9Nh9DQBjDds",
  "key19": "jMuZW7W1XZj5JkzoThMFSYisHzeSoKeNWSG8Hd9kLkAFSBvzNGLgvKTXeS11hXd5omUqzZNj91VwrvRmTg5MKgE",
  "key20": "5y8u7roJ94zKWN6eeYBtrbstDmBWykLQqN2Yv2dAru4zk5VrpL45sTQYMV5kenUZjCHYhNQBdA3JSGRpEb1KTXSL",
  "key21": "3UHKewWF7Xy9P9HiFvpRZjTNGjrzFXySmnjf6P4b1bEXUd9hinsfTWpQ5N22cfBi6aNrPuZ8z39fsKv7tTpoaHaZ",
  "key22": "3nXGAZjVAzCDZr7MDyy2hevrz7WzXTgZS37pYK2MdVadRoFXKXaixmWaCTBq9FTJvm5WtZJyfg3yoTQ68Fvb9tYU",
  "key23": "3V2VsHApaF7FvZ1sSMJhDe5AoMk38cFyViWW1UhXeTgu6pT4qVZDiQjh8aeYqpuiTBquKNzpYExnLo1WRfjhoebL",
  "key24": "2fBDFMgTnsKLhUw3x3dsTJDarzWZPbn6sqWN8yUP2vmens1DEe7oGBFP8jPzjsihMUBgcNQPSc5QunKD7R6m3gJe",
  "key25": "4J5XjEFQT5uY5pzezAfehgS2NNsWeCBFXcGxfgiwFpmtjzRUZa1peH9JyAs9abCAm2FtPuWH8SMAiDpHzNt6K6JH",
  "key26": "4pomJ4Tsf8Wf2Hh8QkGYBK38aBK1NG2odUUAESZnAVnjFWXQRpNhVbKyDjsXjXwyCPCTpLFBRuSqnYkGxQsiWxSF",
  "key27": "fAKn7hYvgjzsc4Fjj8N4cQJ7cnc2nYyob796uUpa9pxcKaZ9mj3jcvbJ9UF8sJtSzjtDn4KksbA7RhSsgE8TCFK",
  "key28": "4RufSRUcTS35JPdHc8rYNvqzAuHCPQ5RGSjQKS4WdrKyLukMjbB9FnqZFBZUMDhfzApuWPuYtPP1nSiPGM62pbL4",
  "key29": "4Bt2VxZoniYATAH6BAxbyGPM92uVW22ovMx1eR5cx43MTePsJ2BUYkwPWPXjVZR81HUfA9sQw1V6SnALixEaVEKv"
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
