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
    "5Bftn9dHCQrDpZvJeDjAtRMLV3iTAebM2mgZiagHTQiHgdbS3zt9fmRDEmFGVhTz97jLY3EZNT9awfens18Db8ZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TFFKMb4h5ykxWckmECNuSedruKQNNhtB1HBVbaJAACXds8n3ZNeapkAP6LeKHXDvgURoxHjkt8E21BD8g8GP2d8",
  "key1": "5Xc8ZTPBHWcwKntw7xJG2EpUMe18xgLc8gFxBjMHvd3Wzu3tGMDGzAij7FBMfoLhUJ6zfkefzgZe35iPcYcRqoPo",
  "key2": "Hri37LtSgUjxu7LxwVCUVo6sBz9WZcrCbJCZn5zhNji9ibGRLxqVdPeLakcCJcEu1tnhGJV9Bmv4gybU7nKaxYz",
  "key3": "4b4qQ6QEyNxdYyoNqUtCYAJJri1tEqTjsuKxU2KuHZTMvnFn69rPc4FJXtY37mddGJcxQLMLWb5vf3BVwsFdFLmY",
  "key4": "49U9joXk7iYAe75ojhiE82SM1vwmBHny6zWw9bd7FEfFgvRhUvLfLHgFQ6WLRP5ZSxRTp2LgmJ4AhasjDESjL9zJ",
  "key5": "cvUtWHKA34a9c2BXNpMJPmQ2vhYstuWKTaeKC1ZBjhzQnH7V8wxWbr5JWqJpSmvVo2VvqQ1VAAGLH7Q9UBpf1rw",
  "key6": "2AH3KeSXdiHPE9AfGu2GAFgKMGPFR9R5sRFjyJ9NePSidFathzAzfhGj1SqAmVHBTsepoCpiQB9EHLiDkeGuj2SH",
  "key7": "21HqzY1jubCdNTDTkZjRqipEaQt5k2rikPbeoRGBmYs3pBy8vcgvVCZmqQ4dnUQH68dJ2Qm9izVqU8a6mxWtVxcb",
  "key8": "exk1UjEqyTUvXthpYUKq7bRuHMKSEhv8A72em8jcLb9h6FZ7wbTCRGAUvX9krhoFxXoihvcJxbufMh34udf37Fc",
  "key9": "5uMg8bbRabLk3Vs8i77uXrWK3axQTYJLo5ULk9cChpbQ33xbepa2qceuf9qTyeQLgiyiTqT7KPLrjzT1LuPpxV6r",
  "key10": "2o8Ghzas2atsUGSzhESQvwKGc5VgXfLTWJrHZf1GrszC72jecJj7Mj19kJZvVWehQ8adx3t1rFnXRTe1F9KxjDpe",
  "key11": "jrW9jC96VmbBKj6ewoopGMYnubm1oXbg41YuhQV3frDBkhaDdKPdDnJPixRFbU3pjTuhxGA5tQ1cvGFDdtkNYi4",
  "key12": "3mKyVc92EvHKiBJUcapMqpQzWBwJRHPPR8FaXJuvsnP13kseaeNJMUVyH2FM64C5A3iYoy5jdhHGwqxVef9GDYHk",
  "key13": "4Tno8HSCycm3v39FSRYgNL13UhmVXi5movNmvmmZzuJbv83KyXZmjQiUhf2Ea8uzNY8SrCPPyvBr5Qz1VeDj91oH",
  "key14": "4nq8WHjTLxHmevg4zJUYS8PGxP6bbvcjVhNMFJ4MFaCmeiNCn2c25n3gwQrijKxmkT384jEHj1mab4UPCZkY6c6v",
  "key15": "4j1vr6bRUfdTFQ9LaCu4xdGe8TNkxjgs6ewuvGS9BZmf6Ty5c2YwQhsqqjymtQFhZwWj5e69XfcsYT3D4uJmpbBr",
  "key16": "4GEAFVEncYb3XXCSFAirPUowd4qH94daiEWCv5ZuPpGeKjw6nrYFTiomd6DTe7H1L7pvLKYQ2VJTWCjcTq1H2ac6",
  "key17": "ErSYJhcpzJ3FjuWtfZHujHSPrHMF1jQs5ZntPhV2XDA8JVA7nGkntngyobWuXN2HMKyvURfANpXah8hgCiUiCFo",
  "key18": "nUvx1t6qPDMAKQ6S7413DJEbaRNJkL1m3FVGdpGsswZKPB5QUHaqJcMzwMpKxif6NEmvLeenK5BgKY9CupoygiK",
  "key19": "UEevpm4UFdNQKvwAPCr3fWc3zQNBLK6RNSv6mZBe24deGWzujjVPdpi8Y3DSeNCEPGPLp1ZzCG9N9pKAsG2M69k",
  "key20": "61zSFp6RqAoSxdvBut4BWp2VKjXcDC7PkznuNWoxHFciewRhRkGF31v6DJEPimi1PLyiC4AEoeacoGWZbsRoi3L1",
  "key21": "iARrKMvh4ie8Y7omadLPbevYmBrh9uQoPwQi6BCnmducGGZMxxFJKKjHqHVkmbcczJN9K4kVTvdex3nsaKc4RAa",
  "key22": "4aSAhj3CrKKLtaaQUNa5gsjYQNxfrPLibeDx1ZMNCPSXSizA2JKLwxEPFtfoGCqL5nu5zVE7SKYGRLnHHHAi3M1f",
  "key23": "4dGJ7fUCPMLu9g1qWkYHRbYQsz7SsFiCJx8XoNmhpBXkoCqdbbHUTHR8HUQXHGqjC8z3wASAHNe95JGRkjGCveut",
  "key24": "59GbPoXBpse1yg7nnEBE8tZ4MRqKhYTgtEpSqk7FSPW2GV8zsatdWG5Y5hSyVSo2ujD49VxYaHtQoKNjiurGnVBo",
  "key25": "bY3Mr77CG49AuovyNHSrzBPrjvHZZbeBw2haQxf8goAmZJSozAd5G3FcMkzVdfr5FsVLDPwNMYVG25A6jSyVCGW",
  "key26": "5oJgMZJbfJ2JXGau5aokUVL8ox76YHamLiEu876oCFfmzHTSm3VLfDonNHuSAN49PR6efqJRooc6K8HqAqk5kxX7",
  "key27": "h9iV21oD8VQvDCXTz4CLgQHvhU3QG1pQTnNvsi7vm7QXwh5Jg4B225cdpq8JwhBxbn3r7fBRVHHou54cxFZ9y3i",
  "key28": "NqpMFrdsk9bmrhKGe7SJyMiyWZypWqubiCZDWw8uwxwsvKvbdiS3k3EmS3QMzAkUqoQQjXcy2qMhqv5UKyFHBMd",
  "key29": "26bCPmcKQwnbziNwUJaBzRh6JugdN2aTyv6SpVuTzvtABVxAn7u2P8nzcj639EFZkkZxPEKdC3PMVJhQpfK7KGwj",
  "key30": "2KAodBuuC9bCMGGL7VPkyfERbwCNHR6EsZeQ3VBNm1CkTM4hzCSLGdcVjGJ5RzB4sX419bdGaDJJRs8n5oEYFCDN",
  "key31": "2ck1kPeVQERZB3amjBkVCNhi5BekQ4ujFb4CiQxdWSW4d6LMQ9oEeAVPvJGQqvq9orvmau2ASki55shv5nGaXWwz",
  "key32": "3fCEBayjFzu43k8g4Q3AaQEi4YBEdBecadG5PHdC1sZtdLpLqZ9pwWE8CqNQcxPXbxgRiVifbt6cTUvWeZEGCmoY",
  "key33": "2o7MpnbR39GvLVAVEAdtcs7vfhMQsdfmcLQxADUCbQsn3TGPkNAA9EbcQQE7BjoeY5M9owc9ai2hn2MB9uatefAY",
  "key34": "khPn2BRegi9pdWNbgkc1SFEDc3BEmhQ8UZjm3WjDKuRAuJbLGaXnmy6JgVsHXKjNwQLNWmhmc1k41XyCVQx991J",
  "key35": "2z75XK1dg2rNnNUCBiK2e7bKUNvqe8LaVCSzQSnoTbxnqgQyUtYaEMwuaif8HtgAExPJM4reADoMjHyHrjGBsK2i",
  "key36": "3JXH2dqLheoUmLC9C8YGKwQeoPyZx5xs6mnMoQGfWehtFRDL78HopX4vtguTTRcwb8QzpPJskEJZVUYG3o31L3kj",
  "key37": "3y2JHgXzGVt4fJDMbqoif3VmwzZS71NY596cytpZMSwe5VjgdQSwRjchKw72MzdVnUAhdRSUeeREgSXcFkfZv9U6",
  "key38": "36iy6vCEa2GezEpg4pBpK1MM7Zso1TWRp1cM1ZwfzFiAEdoomfkRncpcBbScvxGJh17MQ7epVRR5mmojsnkvePV4",
  "key39": "5N18TbusbKJfETqRRvg8M2NGaSJ8Qp13Em5ZxaP2cbbzJBVXf5JknTUf4yWjDH8fUfkAXU36f6UegLt54SNQCSAc",
  "key40": "3yoZxpDhaiSg2dwuicDTPndvmgfbdnxwvrEaBk1FxKNHq4WEonN5HfPiJpVBYp3TgtAdQ3DQveTDxCgSWBCRUeVy",
  "key41": "5t3imC3qbjruxcg3b7xvFZCghj4a91NWQ9ArdwMgdaRLScSij4rrLRUpeRE7YZSqnB8cGzNrXBnYWTZbR6RzVpyX",
  "key42": "2VTAN3Xufgbzqhu1LaZZEXvsnJnrsFJH8mF9XTRtWxVYLZEaAkSx6RbTKCBVWKvrjNLgbZXuGPrJve8zxJ8x2xeL",
  "key43": "4JHqKPf8cWRhq6hx9GSiWRpiEQgw6jzuMxxzZnUXL6ZoxVUpZnz1vDirNBXff844iT3RdafyAeY7ms8q7Rb5Equk"
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
