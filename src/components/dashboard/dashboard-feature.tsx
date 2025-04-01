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
    "4E42rvCX9suxubaumjD1ppEKGKQzdth3wVZ4Baj7sMAiJqBcVGm13BRW6Vu8CgaqGGsB12kaEc6aHQB2szC2ykb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R7KN15N2AAyJLFJNT6pvLpc8NACNrYbVVsgosj5oJXtetHADh6jhq4XtrwtSKFttvJfQAM2wCgV1hqS9FepG9wu",
  "key1": "3WoZcRRQapwiKe8RS2RRLE73zMFiM7rfHoKkyJu2shHodbfY8CiBUgjGUovsG6QnTzB8EgEv9PFK52ovYMVNjgD5",
  "key2": "327t4yU9gx2Cg7CRfAPxgghphj6Q5RhxY4VGHKRVGdyAUFjWjUjbzEQ2ZhSgmFV2EiExVJ8KaDt9aJx6BaxsRUqN",
  "key3": "fsr2FP7ycd59mA44txuRYBM4cqQs1Vdw8e1umC6DwZf3Dx4LaAvto7eSeVPTWJpF7yA4FzBAHpTp6SpFP7nnJKM",
  "key4": "4mNhSc1UWUY1vc9iiBmJ9BYf6tdcc5k7oszgLPvzfuJyS6yLqcrtJwbKq4dKKdTv5thyLH2Yr6eGsxwa8ixzJ1Kg",
  "key5": "5rwxvg3JXsve5rLwvTBjhAbc3MaVix4LhgpGQn2r5MgXv2wXoZogTJTWt9KD7JPkunbT9Gp8AUATNs3aEewtibep",
  "key6": "tbH6LB1npUkAZREa4CM6Zg45P9G98J5mjs5tim1uHbcnJ9zusZzj4xFMRWX3WiTXgTjAkQ29x9M9aikHNUxWHzN",
  "key7": "4AL5g7tEqFTmCdqbrBq8x7KL9YvB5esThynRCnvw4HGMxPNBgJ9Y3hPBHmSeTmgTcBjmQX8mrGNrLf3V9VPW9Z1P",
  "key8": "N692NQ872UWCR6CcCi5rCYQTJBi1BVpdsni8WEQx3HurNbVcWvv4WFeKdxUcgbBUthRW2mgCvmLeUPZmE6ZiahW",
  "key9": "r4MUdyh7VUDtmNtvgDjxVYwZDBMZSPzRaJrYHcnCyRDe2nYHytfMcR8zVjqGy7d7KrHkTSq7umTkhmUu1x2tPv4",
  "key10": "5Qet5rJijiy9XMg3W7izVPuzRBuNzCX4GLJR2fLxMq499UVztAt8XYhN92YmPNxhTQdBpPKJ5ucUeMPxLFeu83Z5",
  "key11": "2ZyhFA1CMsS3Js1UGG4U3rLq89q846MLazgPBgVVg9YTKsyvQEchChRQzkY8UV8ATDC4BfmmmGcGjA7Q4KPhfdBk",
  "key12": "dXfJguTzPN23bVu9YWZhBUiSCYwE6oUXuNH8tVFBm86LVA9719MckpyhcDmQCtwvYChWGaSaJot6FvQPvN3WTNS",
  "key13": "5EKGSDEivRdJZ98cX4T2J8omtBZKHVEWaqygsXrwLdQfv9zbBFpQFJiLivLJgVfH5rRuXqSYSSLHzDCeW2wq7tcu",
  "key14": "36ZHXHXCvzN4QTTEU4VsyKAqkFxkb3zTbV8WPqawGDSdr4zMXUMMzBRsNddgcxbAhBfe7mXEB11VmQ5YUG2Y6w1j",
  "key15": "5FEcyPaLScuendy1q1GkrH1cMoXJ58PdGxwtH35XcDdRBayLYjfdLPws1QVEBmn47w6UdJz4WbfWPt6aq2zmawjQ",
  "key16": "2xBgX4V3dUnKqHxCWPfCe2RXcCEuYamG1WQ3HToYdBp4d5mpTPjUCzcSdwkUHd4JtQjZNqZVRQX2wHEAhnSU8urx",
  "key17": "3Shg9qbKe1S1HB98tkouyTab2DpUBNBRWvm5Q6U8z8T14uqEKkxTTQxELXhndXMbJaXumUBnkQZcsiEgVRwUgPEh",
  "key18": "3JYebZMZnDEwnXRnKjYKQcsEoGaG5v2ZsWAxQcy7URTKxYyiocM6KkCv6oFTyVcDTWSz658cQix8Zgbqx7eP8sis",
  "key19": "fSiBK5UM7tLLUnkhk3t6ZaGiYUKSNxgTcMHEoGUvSyyBXb88HKfK6n2BDwrKny5GJ4mU89E34ByPBK12AJfa1MJ",
  "key20": "v7pZkPzdYquew6KTm6DhM1BHpT1hnRsyBqzPDbcje1v4YoSPR62tAyFe5zwpM6AHDUSQe8t1NNQ3FHLpPeY5JwZ",
  "key21": "4DqFgZq7ZYT49GBR3ikeqb8YzRHVsd52Mx7WzVU8Qox51BG7ahiGvxjg7FPLMRRZui2uv7eLKk9ZggxZo4GxHNSd",
  "key22": "3MVDe3nDJRKNEGi3vrshig5VZvtuDbxvrweGyrFc82dgFhsjeDQP9hYh86VKJgxrRpAS2HLkfyvZPXyMuMryUc2e",
  "key23": "5SFoJxd3im2ti7dQ4qTA6Me31iC8K6MGcxYkdibktSBzQrsU2bo1WU1HRuScACFRd3NNNhUqDojPkQii8t6dLCxc",
  "key24": "MaTsKr7ztv3jmTfWwGJRPq8KLSh1ujrTdNKtd5TEJrnXqtoWBddKeQZJT39nnV9Pugxd2aGTowFW1Z8WC4pEpqT",
  "key25": "3k3YhWWhe6JivZAJE9m7cch122n9ss5LeD2QTJKjhJSVUXRf2kXGER5cBmLb14MrxcV1BRvCYDAr8BkfcWApwQsR",
  "key26": "3pz6Rih4cLpgsaFANZmJeNkjzrggkxKv6NJhATJsCG24xPwXLmRZgkw44KNACiV32EmRmBvWwQeTtg5ffoEXwpKf",
  "key27": "2YFN7R5Rerv3CPjS5JHEGwqtjANQyXiDYmjYH2dpXwpwSFotD2oQFRHMThKQ16QyebpJYNcgJiFyFgHTEekbYnch",
  "key28": "4VPHcedfsJ5EGHRgkvKyGCAAC76DriAdDVvRiPv45qo2Md4sg85MJnjMGBDegjXTQFufFgdUNYxUqAxMheM7ADv1",
  "key29": "4VUomAnWLb9SknJVy6HfQh4bisJDPjpMNPBhcJPsDU5R8YrMk9i7xwy6RdMn9Etvz4gFf1gamShCe1etXasCgAiv",
  "key30": "QnmYpUSrFDu2vDSJNEVmqghhCSqL25QQx5ru2TaJvPHZPQWBjsxdi61RW2YPuBZQkS5bjtKM19Dom7yAyoVX41x",
  "key31": "4jshUArK8ahP8kAjncShTAVxg7WyMjnsCqoVeqGm1k28GaPSup8jA9JUVZLg7u1wgozG6tbHzCtgw3PSzK28uUr",
  "key32": "3uu6iFekuo96vU8dfQc2FuMA3SgE5e8DJ1MzSY7HwA9DYJkoALnXzMCk73F2M9dMtbwDa67esDRzKMBz7KWndwda",
  "key33": "4vMaZQC19t9XnHVGXeF4U8L9shh5gyP4SUfzYxtV1DVMg6vcBAd22QcpbxRpRgpxSC4SX1menzgoPVMnvzgKVXYF",
  "key34": "2ev9ehWz99wLutZjNQV66awJ8zuDVGBLcYNt73VznJgzeCN7DT8kaVv45gvCfjSA68LR28bsK4sJ9rJKLcJLox9N",
  "key35": "2dpcjoGwchjCrbb3hSa3xois7P4zs1hJM7SnaqmQ2tjZJMrhQsyZHkado3XzP96dvHfgSMuEWjkdRbKgKC2XeYQb",
  "key36": "RWL8acFbKm4bznCmFM6PquFsiN9xf2CfNQEgj5coV8SULEaRhU6jM21zJprkk83NoWD8jWpmRkqc4KDnrziKJXM",
  "key37": "22eLNThPCjYAoy1NCjFn83gmkdh4o27SWYa8mAhYzSGkEUpTw69fKfB32quCY4a9TiiGN5iu8rFj78HHEnDRChCt",
  "key38": "24fTYZH2fxhFTohywtBZajokYiAvVs5diw6kJPZSnPNXmytKGAPrxZxSCh3ahbr1kkzKpMixwqCDdCjmxDr35tAu",
  "key39": "5Qm3vkXpgozVk6P7ufW3zNguLCSwjVnWpbsjokiqtk3j9eCssRf2WSZPjbiJK1EpqopjXugx7XzZ8mJar5vAkCeG",
  "key40": "4Af23xjjVE73LidcJ23e9PhV9AUUwdLNA8wH2wLBYbzc5xfc3r9PQ397RUCce7eaDcWkqHMddswd5SzhQEWLe94Z",
  "key41": "2LrASruhr8q12Ay8J3aTihPjTgKS4EZB4UQyq1kJN1tVTLdP7P7QH4n9Eu879LAe3xNuV9GEeR1uhqZNaEHZA3vb"
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
