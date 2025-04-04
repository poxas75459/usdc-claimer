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
    "4RrY8ctVNSv1svdm22oxdKc7h3JEQAGWqpz8bNaKyzzDPH2LmHFFAc1UHJ2S14mQk9FY38yPeEWWdGVoS2isXjcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dNrxunnxDSqiaxnwfsbLvE2bmJwtQQwDQuraFTHvgJVUayAZCu4q3N5F7RvEYjDEB31mr7qxgLxE6tpitvPey9a",
  "key1": "3eCuWGXkvJRcB1fiojqREboXVggWVDfKscxuJQmB3w9hvKPjkRgFnp9wbymjYFyQ9U5iKqJfYSuTmb1MsVpRm3kx",
  "key2": "5vzvubkt8CWj3LCFNvswb83KkV7zTP7qZbqR7fbd7G4gNknhYtyYuQKAQoExAskKQXrf244SiGnoV1vRf8EC4jTA",
  "key3": "2LvjjNCLzf55S9FSwRpdPs7ajAsopJ6HupLV58bEi8gXFjwJ8SjMw53yGM9xtqdfgmXtEyGmMWovgYix2yX16M7e",
  "key4": "39Cq5Z4DyM8SBurMxEM2fgB8yxefYxBxPLRdfXC3CiCz6mK9K6h7oiMqcNGSHcGw1G1sPoX1Tmm6n7qogpBgm8zJ",
  "key5": "AHMXECAZ6rfTHU6vPKtcRJUHCxT7iAPUu8HWGkqDmZxvD3fReXYBN4Gurj8bjko2Qcd5bw9oXhgyCUY1Mt3GAc7",
  "key6": "45mi5XkjNRkKST6zgngomUV5mFZseE56CyDGy9ukmPtc9gFZ7hYx478ppFe7idTgLbFNmRDbrXSL1bfLV4HNxKZ8",
  "key7": "4kaTSAiomQV56eAFJs5cxR88Y3sMMpK23VGTGKk6bggovEZksdXqJNGa8pC2RdKd9ZpcACfmJDtNv3EkeGb8o8Va",
  "key8": "5ZL6snzK9TXMNtJ2Ms7drf1feyjnNLiX5f9EZ14udvu2RUQ78i2QdEdFNyG8tCz4S1q1mG41k5H215oh5TNKVipm",
  "key9": "AtpQGS1EF8ZnGcodZg2LBcsTVtRJZBoZYz1uPr9fpByMigRnAatVPnzSwvAyBFwKNZeyAqEwQGJzFtE2MKbuspA",
  "key10": "2K8ATGAQaLw8tMqecQ8epGQoSGRU2TYRvQSJGouPV3rNhri6z4arStozM6BrqwxZj7pCWSiSaksV1ZUBVz79cSb3",
  "key11": "35UtHmNDVDBTATnvtMsGbz3tfu82Fth4YkG4F33nNQDMXCpQzvN91fgahjCKg1uFcxEnzjfqKuSbrxfW8a3ahGn2",
  "key12": "5z4CGhbsZc3yoAEuHChdeCSN47H3PQHNnKfjXfWv8utZshGpKuaw4v8maV8z8Cf6Lret2LFQxpVd1d4mRaVJZbk1",
  "key13": "5a7iNRJsNjZyKzkvkNmX9sNEu3T7kt6KoA4yxeg5JRV43XAF4hKMtdchdBLK5Y7iofMEaotq8heyvzPpx6hGEB4c",
  "key14": "5a3xtFudW5ruXr8zfBTLT42sgeJGzPLsSC13quBuGvDv5fno7Sh26XxGVHzVEMUMFqbe73vzCUkMjfTvpXFvyZCj",
  "key15": "M6HQk7cHL1PXXtotBz6T7ax9BNtwjfMgNdop5Cd37SsYuMGfSgdqB72tDU4sFMkxKgGM29PeDwHEzqRxXvVrHhk",
  "key16": "4XqWXs6MvVe8TRgE1EEjS2gTfbba3Si1YxUwzUxRTuWBQit5ugnVEokfy3EfR6R98UoHab1ctrvmg1VS61Swwico",
  "key17": "53qwDg4ZK6HmejnovYy5oGwSg1aNSUPSYoMgopCadxYpnY2L7ACz8AiFHNqUu8XCRHQBzvf8qWj5XA6GgdSMhoBo",
  "key18": "2ohbHA67yVhRt75WrhcNEF8uiJoBBA5zHsroE28txCeJB9urpaTgZK1fwmdq1W3QuTJLHKbaaR32SMWMc4Yof5NK",
  "key19": "38F3KdEM7nQcmso8moQHGdikHdpN8oGCcebPSFVxsR8EjFSnHE2erNTPR1EgSrRNKJC2mLCJvF1DGUCWFksj1zPp",
  "key20": "3nYHHPKq17ggjswyWDTye6qGKuNNxv6gihSK9AL2FECsK1C3UAGpz3ENjT5rD4zaXWPKAt38EJ5puxxuGhGgfRt2",
  "key21": "2pXAAqcPeqmbCCawnQ3txan7ZZgRP2wjuv8Bmk3im7rWWkt8G5ivdfe5G2MY8eDskX5vzu6tJENPHXxRm6eWZvDt",
  "key22": "2p6zHXcPb8v8pahbjoSoN5t6ga5rfZvqHAC1SnqtWqKS5Znf2P8MwFKzANhk2H6JQNaPxBRrjwwpgUrRiGxoRJxc",
  "key23": "3AqZJvijwMme4V71Fb1LDc19MDkFvNjWwe8wCsiLosPVmQxT5tHVgzrrjnP6tXpCCP5Jgoi4hZz7nDGSP7TQWehX",
  "key24": "2C7wbJPeH9RhTTv9ebNyhDH1fJKHYd3iPu1xBRPdvkgCzbDwwKJdbF8GoeCUQquVg7aTRML3BqAjJREGLiGnJaJX",
  "key25": "2HJmM2seBCxpCwuL2W6mkgXe85hZh7XHFcsxghvPRuRZV675SgyuycGSzcZRWS6eWHeiC4xjpqypwX5SosyyNp7p",
  "key26": "4cTCLTvGpJGXzsFnMxssUDfd2mhpBdFxgCF5VLi6WS231y8z577RoLPMVYQj5dLYqH9wPvNEEKXdtzPxWRbHKi3C",
  "key27": "2gT3TeDEBGum5ndemKoT3vnNw697R4BnfYPWLLGt2JDfVoo4XsaPci5i9Q9Mm2D3GHhPytSa8TkyyUHAEdxJMFd6",
  "key28": "4c2V7JQsGmWTCFS4kAGEoi443pWdwvS29KNRphpqhWtcWgVCvtUY3YgRiVQ7H12ZgKZYcu3UK57ZXmgRCsupuhSZ",
  "key29": "3kte1ZGDHtRQdm9yWYC1dL2VoMmgJCQZJ78A5Q6kLfsCiiuxV2E4dr64Md2Egx7DnpTvYrdUo4GeB3BmUxLhMk9A",
  "key30": "5qLjivDCK9YVxkoUfNt6LKxDvaM92tMBz6GNsVHjtGeGk7yQXBaq5AyUTzo6ZkH9mZJ6FbqADQt4YwmnB22mEQMb",
  "key31": "4TT5dZecmLdeiR2Si6eEfe4sLcsNHugBm7scXD9fGbpiNuF4qB36aPAceBJL7zFKA9Wf3NC3Kv237j6psdww3egR",
  "key32": "2chHj9GpcT69MvQq2NmdgMY7s353rYHCZvAd11aqtreMWQhy7JPG1cKTiyh9pBGer6q71a7vdzPTVFrZrGtm6Se7",
  "key33": "4QtWjiviNqCoNUqW6cumrXhcSekoSi2pYmMbBMAfqesYJczfrBvWWSxDVrNfzaamhMjnbbepnCbhrvmji9k4nkfU",
  "key34": "UT3sisb8BnXvp4R1J1cxg1ihzL5ygcbHFB9xdWF3sudBGvA3WPCX6kvH1TMfqqjf1PeEWyRhPUMo9r6WLLsTQbe",
  "key35": "3A4n3yVDsoiYpmZDRhRbJk8fki3UiNhzZK4WRqmUgFp6oL175fWEJAowzkxmafCQybaK2JpYchLMbxZXNspYM9bG",
  "key36": "3zrgwTtDW5joK1SErNkF3tupbeW8jbHf8FRYdk58JtAVnvmq5KvzATLjJUgdYvnh8zGdUP7ekyhYSeWmTCeeBQFm",
  "key37": "4DoDb2FfLz5r9g9mD3HPPNc68acuducwNafnBDpDAyAFG3PZbMFGqHWCm7psD8dp2Z9JRVRakYq93ko5iJSSUcrW",
  "key38": "5e2nMqHKGTh6uTJ4wwtSoNbeWfsX4VWJAWsoCU4dk85j4LpEQ4juHXP2eq8iU3QDDFLVoLdyrNgNYamqg3pqvxqc",
  "key39": "39RLnDeLyddiQEgfunGzD1gx3Dgz9za4qDxnNvTUqfxdY7mxnTam6QB2zsdj1RdQ9iez1ZwFfzX7duQ59Qg9LsoU",
  "key40": "MBDJzT9yVPPbv1JvmijPe4EfHBQ2cvcZojSXedmLB7g3N8Yqg7u1MmvTY7bTfF1NmAeLDAUp2yUuKqe4q5iL8xc",
  "key41": "2ro6yjiQUGeUqGDHYYa7MPMZukgiQKvnAuMTm8krSupN14VT5T5CXTonkGMDW9xtoVbJ9r3APpZEBVcTegittSkB",
  "key42": "3mryK6DGx86EcZVAHpkbmn2RvXEgsY7UFdEzrLiLAzJBvFpVQ1WCnYdopY83y8DbLbmrvLGxymJsMHS1Fhg6G5Y5",
  "key43": "4wkkjzq5R6vcHtn77odbbJUsQHVT3XDPuCfPZ2zPELfZ4hWcC73Uwu9vP3Wq6gi85CNJTNkxjCUDAxw5nF8HHrv3"
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
