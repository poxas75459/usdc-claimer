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
    "4zgnudkTpin8Fw3UYc9R79ZEuUVjNo4nKqzX8LQbiVDPJe9AhwZ2faNyvhvPFjRMduEs6h1vvaicA4U8Jr7KTh2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DET6TbqYnLuos1zHZQZUWgZBmPTW9QC947KEMw8FygsRw87hMRN6ULqgJcuvmzxRTpRE9ohinviYGDWiYrJq4Db",
  "key1": "5YzfZ93X6Lqk92amw8SAErqMFk6SdGQBbJDR34Fdr3d6gWGHrJXSN4uJZ5EjfBL1bCYKcze4LFCy9wCwSRfCxRpJ",
  "key2": "p2Wmo4hSHdJy9jy2TgjxTwhAJmsUL6ZBFLQyXb95TZcBrKeTDmHVz7d8P2uCF3H4ZHFvwwjDtJuXHMkEYrW4mux",
  "key3": "TbxupyYKsT9S43AWg78Qxnky8QKUqyoudknPwo3PBLnisorXtWy2amv7KTQzGyi2udNGzthwzdbno9Kt6RojuhP",
  "key4": "3giAvouBcXLopxiXkL5mThwFgMAEcZ7HrzTLxzr15nRLwenHZLqSfdu4NE3WBAArGnYcgArDTN82zE2FBdGeNLAq",
  "key5": "4uxX51Cp4MoSS2MEMVtnx5e9wwUf5dTjRGjin3fuVSafcGZLFwcyxUgan7iPPP67ECes8Jriq7boEE1PraDBrFAH",
  "key6": "4rN7Q78qFQb2qNgB1WquU43ENrjm4XnUd6Wj6FjDN1azktP5r6WkLB6os5esHuC4gf1LKrFeeZ9bWjeqv4XVn6nW",
  "key7": "4g7G2hkJLyE8TResYzms5uYpUcEVDAq5QmXFiyNFixWuhUPH5PXKwDgD6nQVxxEPNkuL9XKdaSJinFm2BVY71xZC",
  "key8": "4f1Sp5gDVdAKmoEz77bkEMDEqJWn93ioxJBKFp1QtHHeZCFZSy9E6NQGPKdq2s8734yubCSPQBgjidD1LAXGW2U",
  "key9": "4ZC8EqeM6j9v3HVyTnmGU8rhgi4eL7yBcVJcvEF4Cho4sChAv1okNKE2wy2y64WM5ohCrKfUvKQwJozkJfhPnUHN",
  "key10": "4KiXcqgTnURaSrJafjwsfcg9rvvaiyTtoT2H4HMKXshZFk8e4WFRXKceCnpR4ugrLBM3MLzucnemsiMYnsVKTx61",
  "key11": "2q7vgkJHHkWU6Jv74Xj1AFyL7CuiJ8LGGUo9Qf9rCkSkqAFHi4gN89GEb46GjmupRnoFXg8HzWouRWRKyDLfRVVk",
  "key12": "3SzeUy6Yxu99GDZK9ytJ1ZtuJi2Eg73EXq9UXP5paz4ZZTw4k1RMxUXBy5qqoxq3bhaY3NNwmP2bgVKjPoQHjcZM",
  "key13": "2FxmABSLJY2pbez69GvPuPoQChkBGJuYteTMRtCeGJqskUpdJt8cGWMsU17vXUWDJ3DUpdXUYph6Fk4vkYxrHWRD",
  "key14": "4odEashT88Zh5YzLYbFQizz2icGDWdqAzC2qqG4bqdNjPryuR7kiBoAuGQm698iFVStwyX8gMPE6cW43jSuKKnKp",
  "key15": "5SrLHQcNibSLCGVJvLqHT3ZsPk5qyAaBAaYNFLaeowiQwJ868VgFUB83Yxug4mDtRfyyurhYT6hKvRmRvbisF59W",
  "key16": "32NVg9yXXin3tFq2XcxaP8QUVsbQoHHM1g7cohmrJqqypuutARJqd5feQyFFHaqT93YvTw1vwVLgKYnNNo35TXBT",
  "key17": "3GASViLtYVVZL2bruNzFFp5JUWbanWAvUFA4MRXUNrG3bXcibAGNsGv1X5sBpW2Gb2wwdDHss1Suv4BesgvFx6ox",
  "key18": "4hPhH4PPbiPuXhvy8vRDuC9mFGzaygYq25WtD6WWh8esSNX1qCJdmE7TxgtALkHeGWvv5aJpukowYgnBgUDXTjYT",
  "key19": "42QHF2kY9q8ZkXc7hYEq1rUzro22znY77MK2GMQYPrake42PcLfEdZT93YMyHoQvi1GJFz6g4NbsrUb31EyMC8wM",
  "key20": "2Yfga7xF6y8M7ciBvASjRLdWd6Hn23BAytxYvJTLygQMKepD3S521KpUvMEvAgkewVZ3uK4JKdcnYKJ5cxNpzvBj",
  "key21": "3TWWsJP4dbvMQXCzsUoWG1dbamRCCc1sJNXpEnutGbnZ3aVbmADoefAuqs2VbezMbgYJF3dtaat1Uj9gtRbGw5To",
  "key22": "3pGTgbYkJpzesuAHFwnAafEVJtrJhcY2vqdigSRR4yXKJxR5MwppaBiDuVaXTmyvTAqtmoCGpThuvBWjHJQtu4j3",
  "key23": "5kXYB1LGfjWxixBSMBSQSTz8Sy7bhwUeJSfwDJJoqG9r3uQhVPvHTbQyVvegoVc2dsQjJnZd4xG6x8nqPmSYamUo",
  "key24": "2KyBiorJq8WEUA6ZJKgVmXLQrWwTeoYeuecLn7TZ9RzB1h4H1hHUZLiB8UXSSvvJat8WkgRUGCqsWy7gEBpjPE4n",
  "key25": "4m2Mru7GM1UhMAt96NoNK3B9RBSn67za4tbTfhJ2GqmFH8D1Q1HtndzSGt99iSrjLpuZVTLeG37J5TkT72GE66Rm",
  "key26": "3UWqHNeVD9odGwEeUn6EDPRsqUvYW8daKA9rjKz61FhjJQ1NxezzvuAKCFvsYZVtXuTVCyAmPGFxBjYzeGHiid3J",
  "key27": "36r3q7V32G4Vc15AtsaUy8k5E4MeKy7g2Sym5ZjCiK7mU6oPBTpgTkyvefiE8xYJDoeXDSKA756LV1a3ZrnKC8aM",
  "key28": "4BxT377WzhDei452xb9TDWUM15LW51wzzDcV1Tu5aniSNNRzbgrkzHxNmpHVur74L5YWSLhcU4xd5KZ2bYYZMM9W",
  "key29": "2sJDQsNsGD9LJjN8hLYHWP6BtqGXbby6LYhrBXeK1XrLBg4HjEm8LWDSU8QwNFqWtnj2JXZ917zHZ6obRmFn4bWK",
  "key30": "2vALk4ykS1Fn5NzbDidLm6JxV5KoXcvWDtcoBojoAhbxKqLxaiYtQZuxteLC1AYbdgNzyrMkUgoidt7XQE4hwH9u",
  "key31": "u23ybWQ9P4wbeFaZ8b8RJLSeXUig2i1gkktF1AKdriFwoBzhCHAq4YEKcAkU3ebwjGAj8dbxEQ4qWbDBCriw8qo",
  "key32": "VGjzD1UhYdQrPguAXa3znDTwfkzvosiA34tcSj1aGxA2nqBEagMTDMXYhAixNCLXxLPLXc4J142auGC9C632eaE",
  "key33": "3P75YtZwcsVDMiP2VNomM1mAAHaN2RppWEttigrfVtGYrAfbRzyab3zHDZz6vuSp1yEihm84U8obBd81vbAxBdK1",
  "key34": "4PRwaoRkF1qTZbShR4y55pMb6jrsxLvNDFouN9mznNxjC4Pj8sJSuiMHxvcs33JXTMyRoWat9PMYU8td8PVe2ydX",
  "key35": "5Q8LPHqW6fKTF3nDpuAVmzWqG5ZbDvrzrkX71d19csAYuhZQ282QdmDZNtho8UrkGB9VukzBpN9N1MEnGbX14yHR",
  "key36": "3KEe6Wwa7d5zpBZwxrk9V1jVq7nnxyohs4Y9s9VgR5x9T8tkiRVYnh1ffTt9dmexchqW4dy3PMrm5YyoDgGg2Mk7",
  "key37": "vSvPgzJNXJotpqsd9yXg7LaUJFV2NJgwtFUJrSX2Xbgi36k866mwdcS9akgUgt29xZCFVabS1zqyYh948EcqDjV"
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
