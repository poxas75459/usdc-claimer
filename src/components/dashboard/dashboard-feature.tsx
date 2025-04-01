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
    "q65n4cBqjcqRRpLKakSeYjxThwUJ5GqmHyfj1xSzTYRQnQnziouXixeqGN3MCTgijoGxd7eyDVU4RUfcVLBcewG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NXFZekFqrSzHpmxKrLUVk9Ts1kkhXhkosNdhic4tTyVhxZwJ7pqKq5DQqcA9iiN7fh2iU8UHwXkAVwrz1cynH1r",
  "key1": "pgySodcDa2uDQ629iaVQjPfMENReF6EPJ6iTX23HvzqUU3ThUsnvqA8EiguDkfpsUnDYkwTMwMcJrg6WGWNSDR7",
  "key2": "35GVnntmtJZyHf2yd36t7BrGkKDf4hqeEq598WVWZbjKN3CANHC8NWPuRvxzmKS8wAWrBm5oY7SY6ZCmxgNVM8tF",
  "key3": "xNmBWAHKLLHjxWEZ351TrfRgiVBVRUXWteFhLJmKEfbKqcqRg3UgcHBicrqzHiGJ53uqb5DEgka2MicE39zjw8S",
  "key4": "Dwkmx8GDeEoFo3dmQhabXcUkWbkuRcgDSpqt9qx3tizQWwjD7enoVm3GWNZ6f3jkydotZ7hBhXf72rZKqKafSDP",
  "key5": "tQNjojgZ5CyMW6hZ37o82EgPqepEQwAD6oPtNSNoerTK3iYb3yqC5bMm4nAEa6wSUXHp9yCJpmSfytkYn2wuK3W",
  "key6": "3EEgHHrsp8kAkWdTuDdySxLV781ThZQ44sWBGXQkHd53VKv8H4tNwUXzEmmWexR378qtjky6HfC9G74FbxV7sxB7",
  "key7": "DXtEahkXfwzsevqAkQcbhQ6g1x4ipd6R1YqZRpoXRNsisNxBUTT7rMgw3yigbrURYgcK64anAfAUt3JPZYYqyub",
  "key8": "2EGmYWVmdydykNWij2re6CyQnJPMWFp7gmaWcnqoRu7LA1vQWfXFQyx6yPmaBfSWSbk4XA2GcWFPucMUFarz8N1i",
  "key9": "5ud4NyAG2vzZ9YYaZbA44mRdzUE3pk2vhZAUAhraBMCyXKQT4J2ZgrQLenyBkSmLLPP89CtEQx3i5f83352kdsU5",
  "key10": "2SFXqcwXy4jAQQg6WcdfP7cqaz8z5BCbepgsXHuf4nEL3QwkP4BcPahZjt8fMNWAbMdQA61nmPCNTL1iRsqxxf7L",
  "key11": "2LjR3KLdRdKwiHyxE7ewJ5EF58o8kgKXyYu3xFgXppQrFuSsgBDpizcPktHBgw1Tq6BMY3cKxkpPLn9FPQmeoshR",
  "key12": "2vuQGg839GUGeEMN1PchWUqe7fiCQ8tjfyvu4EN7LKJqPLJxjAqBDDkuSut6kWw2bu495MZFXcHuMawrdNvQtHM",
  "key13": "38YZtUMWqFLnWdBYz4B3Cp6nhXag6dbwnVpZs2NGijWvSyPs9npyVqC1bekgJwJgU9gFzukuGXNcsM2oDNVFncNy",
  "key14": "55ZwF6QNPSKEA9t3t1Mc5PHPhHcfxbeVM6DDS9hnQjVvqA6wnscmDjvF1jfNq96Ht73ZSivXs1zXBRhfwKtogMSi",
  "key15": "qZ9mPRLhjaeJvcFvxkw4YJ2DRd7LWUStiSVGRmAfQca1ZkRg2sPHeh3pAneDnrQo9muQ8YkipB5gAQfWGTdMVz8",
  "key16": "VRMjXQ5Cy9CLBQJaUWDVxARGYTBxcVUXiW3AnmyMzEjvvWQuAPozoVCropEQVn5wzGJ5U6mC5wAgwRiMxzkrtEU",
  "key17": "cUiwkbALNGr4GiAmrvcqF3uCrFjM7AtdUSjndjseXDaVcYzXjXN963gvzAUCKUBXjkiUXgZmGQHQYXRxmN9hGy4",
  "key18": "2ziCEBELxiseN1iestJ5bQzeMaSUzVWYVySs1MSpeYUrDci2HaNJ3QRPnWWVqF7MZ7Ya4RnWbMmh2sky7F8NN3oz",
  "key19": "VX1noj8MckDMfAw5rz9YFyQN5QVkhtNLypL5JfCaVZB3V99YMfvrTZ5CHtTnsqm4rGvsDF7eJbhzq9FgwoTwB3F",
  "key20": "3KgrgvWHz9VQQFLGSTRYDQCTjnqHZMkeQia6VqBA8xrY6dBa4J6YhFGPWkpAtohHMyLd8JEDJ7VHG6erqnokmBk3",
  "key21": "3nrMvra7YRJmv7s4twRWA7i1uiAq8yHZeS67EHUQt6wii7pmR3qedgPFooJhn5tXQfXztjatGkSumqas6QDYHJVu",
  "key22": "5ipZKCtDn36WSVviBjMHd5ePPXavn5yobk1WTPGurLA6fk5XQnkL1HbtqnEGqMWiKti3PjjqBEMPWizTAUpH4HAR",
  "key23": "4CN2sRQx2huZU7oF43LKf6kX3n96F8aqC6oL3jqr3dkEeDAx7mc2eJpiFiRvwrqMmxBzCdqcuyeTaQyr2BspuvGD",
  "key24": "5CDsSkgiQkqEZswhFnUrjqzFTnVwzYZX4ZSBnZ7pDTUAJFjJkW48h1PFGEphcCR8urSAFrrbFcZfuK2s9p4y4za",
  "key25": "2tX77ic6RqqZahNmVppLouEZTYajaw7jh5W78t75GyMr2mVsB2o5w8EEhwxr3QGV72SstpN5uHR5pnrmiKn4dnuD",
  "key26": "5kPHrBqLfztANksb7JwzQ3uFfzfRV9X91hjSLfZ6mwGvNbcitHVpCeM64yAmW6a44SExEBc8gQNKYtAP4XAcqZMQ",
  "key27": "4PXFg64u7sLRq5yJodbRtsRkKKh39kHdAjvVUdehhQyPPUTzvZqxgtqBWdPWaxqWEcZyxo1CWYkYVrFXDNtSB3Y6",
  "key28": "3LYgWLCYN2iUbqzV21gEPZusHgLhYcvP9i45hT4CM6poWoZngXjJoT4hFSQxpMbVMJPrGXJVeSKMtGkBG6EvUy82",
  "key29": "tLB4JDgLASKPg8P5Cp2dfjF7kHRqpA8xPd8MCwVgkaT8vyoZQnWMLHSQYhDmSjEdbfsokmuQf6AkZ1EvzUdoAb1",
  "key30": "58aiFhyGs19u9GNYZPkvau8bosVGVwmxQRy4TEnQ3t8jSSe8VNQ3ZhAbzTzm4A1CALjV4miphaiyobHsJEiFNoYg",
  "key31": "5fbGyLT22X2hp1M5XyVgtpzfMkfH84sS4uDkBp77Y6g5U9BADevjhgnttoDUeeJmVPMdRSHEGTzAUxyUowtrreL4",
  "key32": "3pnKCCfwJBiwNVDfcXMT2zcyGeZgPYfaHtLEraqtJLEmV8sEDf1MSAAsy3L25F9VUtDibd82HqTX6PtpKxDEKhMu",
  "key33": "5ivXbYnq5LtsTLHWuHxrp239FR2kh5gt4amvdqWLcoDk111R1AfmhiaHFNnyFiwq6NFZt9QjRft5USd9j5MmaV4R",
  "key34": "2kGtbqjaa3tM7vLAjwTM64BrAJeMxtuhGcxpTNrycarjNsDzhmDSbdZMfVYsGoYBSqgMAEGEjmURvMp1PyXoLhze",
  "key35": "dBDZ3UzUS9mo4KfXn1SpoY24i86pMZbWWwyN9vtN7k1zgenSidsr5rfTffzHRLufDaUwr3nrvjb5HJ8mj5kqWZr",
  "key36": "2dRt56JeCiMzF9icm5bwqUDBWMZvBWqdrmAsFHTsT2h6xZxB24Nu1axUjs2i3xihuCW6ZNNHkBY2XFNx7gwVMHMR",
  "key37": "46spvDxg8aGyfB9KmWbJKR2Evghy3HwuRNC4LYzwzFAxsDqpiLU2EW7HgsYrJm9jgqWjC5iD4nbLSYK2YbDirFUF",
  "key38": "5292M6QB8yuCNY1GWEh881XA1PfZJXMKQ4tUbi5cdaATvhzbFLXKxHYfsZLC6nTM8AF6Nm175fqTeRXh13fWHxb1",
  "key39": "2mgK4AxHCx9Bxg2bBp5nqFtUS9SBt7Re3ZG1r7ixLMSnQmv9dNk28EFBAp81g5movAw1xrhGt12kpcQekLa9XAGy",
  "key40": "Y6QXtuFjcjrjnDSRLYhkrov9gHKghBt95dD6RTxkdB8A6PpxWihu7dKwqDypnJB3NWh4d27M8de2GyMmGRZSTmU",
  "key41": "49BfXPVJZubUsaRBvTzaY9mxYaXcCRZZh3m7cQeDNQWKkHbEcnXozx7ZfxPbjtpeozHz17DXuWH5u7xaYBCe7usx",
  "key42": "2TnQvKHqPpuWiPQcyxAxdQTTvW33ct69a6VELpiy9wMhDG2MFSKgJV3hyL9MZWYzzBvoj5nfhEbJ87fstySURUN1",
  "key43": "AqfF73SdwhpyhbXXajpnGDU8ZAuo5u16vXsVxZ2Ru1pzkvcxcqqMVkV5Wdo58sMwm2225hhQa19ZxJaj1mnxL8s",
  "key44": "3kjBhyPeFb613SdbpuHDtGERSnFmzJDoF35LZS8NaNKJoLtKZ9dVuo5kPCG6qDMdWyn42DW2TWm3wNxvBu3zt1Ky",
  "key45": "29fvprDfMYBogGd5rUDKK9YARHZ4SWCgWuq5nWqz3mmXyaEsJQKFTm3AusNBdC2W1oMAiaSQ9CUMQtkxf9bgKQEy"
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
