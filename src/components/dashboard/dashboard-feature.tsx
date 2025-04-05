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
    "23RxqJCDgkfWXe6jrsZZ1bU9E4jeQU3ZYuTwzRwCQh3q25UuAtAKWV2FvGJiz1A2VKS47E1B8x2aVSBjGJujWjNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EpXLgjEwECx4CWioi1W9cf7uoEmb4U7bPRxuKYBQ8SmqyNL8jwUAzgPqkzDdm7LGxhZ2mtxCvhFLYAeyVBv1NXJ",
  "key1": "SDAbcsLykg4AVc45135iSULAioUStFH7gM1Bqv9vsxArFxf2vuNzN9HPXzehsaEdHEAwBkpVK5XgBSLDqU1zh4K",
  "key2": "5QLcmWJ8BpaxtnZUgCjMXp4omWEhZEAJtzRe2fTqJG78nFN2NZ3UczZ4zbDRpAhArKCvw5dJYFPH5i4Gq9Q3CikH",
  "key3": "63sndd3EiKKZMXrcHCwA5Jy8BxVrDeCySy298SP7yrY549JyeqU2xnurT1evgTcrUWc5mpMQdwRPqBko575MxSJF",
  "key4": "58Ue23PvKRBYcYXpg4H9VLLN6Kbr5jr8qfmSPZrmfJKoGtLAht6q2Cdij7KnEuzBUqvJhA3XMCtzUDoF4YF1ZqK5",
  "key5": "3LCb1MXztyb1ZHt1P8scaaXGz8eHmywkNxZf94niY3KAewaXV1NbtqJDttnaFDZmzMC7s4PTk5SagLBd8qpFkfzP",
  "key6": "3c8EMT7uiKcJfGmASkZacbG2XnGTF3cExrtoDZBidhGS2n9zfJvXFQJ6F26paDR2UhpSQ18oBG2bvgHyC61ev4an",
  "key7": "62N5aQjpwZXcdtkQAds8Viq45nn2FK2TcLkb6NtphVHJgN92fpVEUPexnJkqrdSzxXXhkxdwqSEZmAEMznKJiHAt",
  "key8": "PAohmzFFzUqpVuXDCNe76jqvfyEavXfBwLPSKVBe57gRREpjRzxp8uzXEecbKuZDtmayiUX6QSpnwefW1MRPGUi",
  "key9": "5wsmBY7R2eGPJqZf78UVecfWoayasajEQKAgq13Qx7m52c39jCYSv8a3BwPGnauPbf9Ex2BWW2gmZAxFvHNLh62u",
  "key10": "2JqUo26FCL4fkquwUBdYK7BcuPHesj7qz51CoFDQRHzdgydfQZWfsg8qU57Myj3SQ9JzkSvsimWrci6Aq3T1LXr2",
  "key11": "3GMnejqxfBzTF58ju3gUR575RdtpwmCjRZ7soF83ao7Q9eskZhyTqmxLsrJS6dCd1aboxdBr2VbaBc2ddArpPa2w",
  "key12": "3kDaAkqBkVK5cZL74kQJUNxnzq5P5pWTQt4P7w7bqixTvFUUM6b4sa1pwL8z6w9bFqaLLmL17FeSsitMRFeCkapk",
  "key13": "4BVh36pjix4pumVeS76jvdAxYtYKWZQ76J5Ky23tvHXiUG1C4R4cqyoaoJ9wFgPmTu9rYnk3SvYbvyybGDbw1RkK",
  "key14": "4muqwzesUW8jjnPwgkga8bMuM6DtDgjgJfK8Vkeax9WMqgtpFFB2LVNpAypFhpJQ3ZdSADuNzvizYQXfoqNyVXfN",
  "key15": "3S8p9CtHjR3oK29fsNDv39WCi8LLUsdLtAzmA5G7XG3Z3ukFfgs6KofDD5cokDDcan2Am2mfuadYamtPVY2B8TZM",
  "key16": "33V5FSTUQ7opceXNaSfpPKmZirPbcyTAwfeLuNLoh2AENJsF9KFDPqujjkVTpwLV2dBqzsgshpA5GcgLzTFn821K",
  "key17": "7gu9UrU5DxuGV8zSGk9P89qLRtQxVKSnmJnkaGfy9ejTFYydorqWVFKYSfVwPGjijYdVobGq2hFCkwJfLxmWPtL",
  "key18": "BSGB2G8RwKErgkCXwJTtxUCWZ4txu9wrcKyiLRtxbKq6fDq4apAwpHqxfS1X7mNDiQZWxpeLxuFqtB1WhLZZJWh",
  "key19": "F5fMg25zSS9spo1KzhQ7NxJAWLpcLN8sVsexx2wcg1FfSrBn4BesaTj5QcS4TqGLGcbLTZvGTaMhPSjws51cJC2",
  "key20": "3MYM2oAoa8tXywicQ3Pn6V5GhhnWZvtcLjrhViwiHw6M5dMysqghhbedgB1wM4VmDGer3JawNZCXYu4aDMezaePh",
  "key21": "4tS9bp9gmb88XhQ5CKhpumd3N4F6RP1eBNTWufjXVLCczoWTjWLHvHR64NpTqpxNzKGvyhjKD63d6wL6TuV1uUEL",
  "key22": "4oMJ5DfDAfwADRdFVnX63jtJgDxzTbDP9L2Kz9XebSzS5PGJia51uPkRhc9RjzGFDWTAXXzpkBsw4eFPRm4WESwP",
  "key23": "3tNSynr5iog7fqSM3aeugLNBh3V1zdCWwm1oEzuA456XerpJFFdCMgc66ktz3xWBhmLw8Eu88iBSHTzLcBoBUFSt",
  "key24": "4Qu8DLzYAnkuL1vDQCE7nMSEKkgdo3WnzZ2G5cwkebkwGWF3ugc8pjXWoXpHw9LnEngGRKqfmukt9Ga8zsEGY8iB",
  "key25": "266pNRYqw8G3PcwNgCuhhBDvfz8J9hsLVqu9bY3cZwdiTdofVxbsqfS8vqos3BJhhpDiW3Dr1sAbFSXj7AfdudrY"
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
