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
    "5NjuMVgTmZ9XwmZ7FzAC3iJQQuLNZM83wu4e2w2WtFNmbVh5LGDFZ1G6jutZjak4s253WeEeWZMunRvaGNAEWwFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nt64SxXyypa9sraRXzbiAsuKCWVLgtUU3dN55QDqKGR2yKnAAGKcrb9Yu8W3vyQhuZx5yhZbrZXzLdS5agM4ow9",
  "key1": "2eyVfnsrJC2hV4Wd4jdmANcf7gpW4s8tcUnVUbBhAmdHRYyoiwVutGkq8G5Yoca81qRYn1t9duCFFaDrueVei2hJ",
  "key2": "kJuSxgAsnMYF4JvhdmCrk1khiJYh6rL3DNi8USoetPHbFs5nBYkQN3QCULf3dxJUA5ysqPRVQe9UZ3tCG3rUTFT",
  "key3": "2nnDgAEtPuA8qGfMs54JYdehkYPmBrVMZAUQN57zV2RYLEu43LfFtxVuiSkCPaxLFxsW1xHZJ8vBPGgGGCswX1Wu",
  "key4": "5K1K8SQYqNKm4fapRe2GN27cRfjrK8HC4dKwvEpEWNNR8Hu97ug68JQzr545Cj15uhSWxzVrgpDdBchryXpfeorQ",
  "key5": "UL68KfuGjVSuF9HnfVGsPKoG23CTxcE2pBSRZrWAFzSYFfnZYu74ycQg7zsBnt6rgXt2huGGjXxYz4YBVB9f36Z",
  "key6": "3yhGrMzPYDYTUmXmC8pyQvMT7pqzgtcypoXWHikqryFLELa9F8jNYxpaRfQsKPASjVhPApJqHRZSVL4zdZMHou5r",
  "key7": "3AAg4tFpTZpdHX8TKhZ7t7ZzoyDtWBV3CfSvMig4Kzo224PyvxZk5ffeFfXvMSMqBHbqs1wqkTfWQwdbQqUrsxRY",
  "key8": "3TtSeTns1cJqTaNF1rQDY6CKcX7qPrj6c8fkhQr5A99dsvC7Jm7pa14qdd7aSpKEYgEKAerTJNZrEqHSr4tDmaFA",
  "key9": "5xVKEc9G8FeXjZXKizmugQzgRUjLPmwFD2LPZdZ5MPDR67862m5VW1GkKEe6RYMZpLt17KqaWbTciKPwpMm33HB7",
  "key10": "3vuiBMKNGTgaj8fxryBpVPNJZr6NNPsJGum76jkZybsz4S2o7rTNwpQL9gAaTFK3pjCbXTBtAPVjcqJr1iSBCdNo",
  "key11": "vMttf6wQ2HX91n3DNFy8FrNV2nFZD5GtmQS3uq3T34erPsQXaKrf1reTxW7VkqF3FrqUavitpzwAQ3AJNk5GHfR",
  "key12": "5BPRyecSRSVyxcyGCqPVtScup9n93ktMFqTHU5mKyqLi59HQkzVhETd9CLqNueJHeMbk3XWFRotykWes8M3a7x6c",
  "key13": "41apdnJ3xQDjjrbT19eJZtvrQ1TFRKRj9R548S6zrQWKudbjLbug785fV4Ld93oJNfx9eXCA8dE5zGfMAYYXn6Jj",
  "key14": "3rGsQv2fZQvsjpAn2qCafCnRjhSe1VRjMPCgDS3LRBzdGfkdkyawcsWWVGD37pyT3g1xaakn59XJAXK8Dc7H9Rd6",
  "key15": "3Vt31N5Axxy8MvJMGPfUL6AKRUCovDpeiKMwg8iyThSpKd2DF9AdFmqxkgE96yMXog7VxTzHJFwkCPxcCnwkzL4c",
  "key16": "2WnTKZNX2Wd61gAv3J958gXpsM6XA7CvxJ7vkzwZra32GvtUeszs53S3W2PDG7HrYzPkJeNpyrL58ZUmbVUUwZCR",
  "key17": "WnmRnitk3guvK3fStji4jfZW6dEgaPuJc8jJpFkVuTEDUmvQPjsgM7UBE7uS9mzirGhy2j71ENHsBEfJy28ZDpv",
  "key18": "3RvBbwokJEb6iNa2N6xBKCRchbpPeU4EbMeFz3fYxNfvdbMWFneW53CfqMJ9j42C9pCVx6XZKpjcvNkH1pP59NmN",
  "key19": "4LqrYbxTYgepxP1YHutSxeLjdghPiHPEqs1xgjUmitFA6tRpqjjX3e7Bx3wTQ6nHUmMM92CCcrQasA8XUScMQDHG",
  "key20": "3Pbpea2AWu1BAtUDymoJA2QtNQqqK4VgMTE4PgrY8SA544L3uMt4FRQZeL1enGyE2yqqgg4FWNLKhNGMmX3FkK8j",
  "key21": "3ZwTFcTsi2kQjAjP69wwDMUagcdWoQ36vFyX7uuDEz2BaqJhyZqohQGGcYUHotCFCNLEYHuDP4wEtWQR6YdAw85q",
  "key22": "42HkDCf7yENgV8Y6F7tof1U2nmUjxsQHj16bQbtPfdQDLw3ufrvkQ7kGzuFiY7exyR6GpUD9a3XP7K97ZETyNtR3",
  "key23": "5T4HhMnqp1ea21w3F3fnaVRRAkE6JKBF9vBVyPoKvfHtXshYjCpVAwQD3ewfHCfmX4pMH7KWAyrAfzhEPc5enA6n",
  "key24": "2GBByQkfURpTwNvuqJVr25wtzYbH54naSY1bRahHVVMgmp5BsZ1u7PRFZ1yKQFueoTBz7y4rvDLKVYUeHSyDMnQh",
  "key25": "QPAX5mcNRbRnjSZpiR51Mu4thefaTBoWGNV9XgnB7cnEL8yVHKDzphFDfz75QzAYeTVxAoAv9S6zEXwBn3JXkio",
  "key26": "effDTwwSPuFSMFrdeAoii58AietUB32UCfsWYCa2R5DBjfi43tUVHyaK4JFm8PtDTRUoHFfUqrB7mJfcgMBFBpy",
  "key27": "4hBdVYy3NVDtmq8r4nSnvzQpshU5g97M7NFA4XMSGNDr6qi6KxaT6fUC77uvF6DdGe92CDpmdMUrv4Lo2jJkv99z",
  "key28": "JdEdVFD8BbfLK1Tmtunc4Kst5uKf3i4zQAu46YZejUsF96jgY4QAa7bWXJzS2ut6FTY5dJZAbpW2DNmrjcTDXgG",
  "key29": "UgFbRoefqZzc6FvLdQNQQ5LfTdTo5tYSK97gH2HUNGnebwsBdVnyuWQiJwAgkCNriKP31GAH1z1YxcY28DemEQu",
  "key30": "2KDxB68QUZoMTzenP1FbH6XKELLE4Xv5CHtQaW3HSv45jZAt1JonGuQTJZomkSkgk8qiS7Ruiqu5Ff8hjpbCVSNw",
  "key31": "5StgQgguBErGiezCeAY457DeSvm9kZ6xZSdNTtZEk2eCnPt2MjkMfxJBYSefktqCHr9KNoWJ3dG5VJYk2WrrCDE",
  "key32": "4EDSnMN7FrEHjgMhHWU9kEyFFUqDhrgDvBSn8o4qBu27LsSY6Caiqf4KBQ84PREwoPDCjRY2kLKfaSzzGbizXUNL",
  "key33": "5z54q21NHSyeGF9xKadngC8ZhWCUHkfgLMRvAvUABhrEabBXSkZJFfuUsMJnA6vYxAtKaEAPQyKJvLYu6Myy7yZh",
  "key34": "3FdaQpkJCeTjDsGqUs9vEcZEU7eGPNfKWESzdqKriDVmGU7bYmyW43JKxtiFpSrnS45oQrdyMomoCR8YAt7H3J9E",
  "key35": "66cQd2Vb1deVJgjbrYFyGmwSx3ED5vXz7er3oEoFe8avaFBkbhbmADgTh31QVvsXMPVmsPebqZxKNKiXCFe8eNFS",
  "key36": "75u8FYbqCZ59tHEK9vn52UTKH1SFPVPpucrQdZjFrE2qq2JU4VhNSaQsXBt2LTHuc4ZF9gP9cmed7Y5xmAHvDfX"
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
