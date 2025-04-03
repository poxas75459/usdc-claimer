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
    "KtwVheFT8owSfszwPuL9eK451BYyPRvSipPfT9Bud35aoCyWcUni4UngUsdtpYoGjhndTuBjDnA1Gh2D8b3tyxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oss6U44i1n8DTMYxhLCFaUEEEdgVfbEFKTnbw9BnWRK8bpMngXtUk4YhNYexiAJKHQ7yjvW4xHov56RtDhZZSJi",
  "key1": "4zJ9Z2WioJE8EsMNJprQkvezmKSdVa56DT2zjyNevBrQfi2RfS1Tq3LXDzKDyHvDkKZ1RbqB8K96JsxRQQ1uWkXV",
  "key2": "3JMd6BBhnozVepwhapep9Jzk4RvzHNXpqNkx5hXy1EVcNg6dFt5iVQnQsVUnJGoFiSn88xwavwpv9A62sUUt9m8J",
  "key3": "3NK3BoAWoGRPMrcDdpXAvwL6Bz8SQAXBrasgDTyzEyoDfPEXcfRinZu2steJ9EepmsWqbsMMSxi9eoS63xv9JdXZ",
  "key4": "4rhCAVTmRrLURtnQ7DnfsKdJFbhqi36zis6aoXborEEny7pfD4TB5YhonrRhoayGi2Q1TvyhcaBWGyw9cwexvLwB",
  "key5": "YQiQBvDhsEVBfjRfMed3Rcs5HrTnhVG46QD7GMTNutBWd7Wes8S8deo3P2NbVNAFRF7b9PD7JZqPgK1NqFE5cCD",
  "key6": "2mgULCNzHJkB2i734mNZoYYoAtEM1jYM3FH1VrqrRVUfDzX2MYbCeD1ND4aBZpw9KARgs1uqcuUVSQdsEPKJUyj5",
  "key7": "dBedFRBPgyket5uKcUVDv2yojZFzQksXNsYwyJHK6R6rTQeHYYRjBJymN7BTBo3iUXpfbdadmh68EzS1cqDVy9u",
  "key8": "3LYX39GrGs8x2ME8c9tU7fiDTqoRenHah9iLQ4FJSmAxSCTuW9yGezWuQEnLya2yDoorjfAAn4fhQb919FRqQyRq",
  "key9": "5FCs7ZFyRok7HJ8DrKfvdozH4vwVScgC5VcUWYVbCTaVwEiFtWG6r5apGnvc5vhENtEmSeJHzu1knLYKQN6SRdFZ",
  "key10": "3fkce1M7pcv5gG7US9qDDdodH2SUBypxHs8FJ1N8A1L9jUy9v94ojLpxB215XBwrGxDUgErxL15o1Sj5qzdzgaBp",
  "key11": "5tQiVnE8DS7BmsLC6znpLiNDuqBGTrBDRGBAtH9dY9K6fTbHKyYgt4i5yjkZTsoWvFyLRWE4yZ6XRPTiuuWRjnAg",
  "key12": "24UhsaaVtTkGk7ipM384A7CHiT4ibQ913nxdXCqvL5beGeUBU4y1DxQPAgvUBfdn4Jvgp7Rp49hSbDNuNyKpYrL2",
  "key13": "3Du7fGG6JPPAuJqWBmuo47EUQGSqj1PRNfUfQf9hZbZtZ6eSrLUCrMVqqRwfH48soc3TJ3oKL7JkonyDxb5bdnTJ",
  "key14": "3UphKPKZUpNgPqWfPWmVBVkxcXo6jrDWB1yCJrKc7wRbpVzh2bMkanoZdNB34v8qtvrKvpaqifdxRvVsjwrt2mQS",
  "key15": "bcJEv5wJBp3TfKzFnMMnawUPg73u6qn2x1WsbrhphBaw3r7ZxTac2rWTHiMrLpFnbY5x5j875XEwQ3e7fyYbzxz",
  "key16": "3MtxnheQe7yxz1kK7uygCXH24mTJUgydam9xD6va5Q4vj7cQsCJe8Sq6zMFLun4ZEx7eUp15MfRv9bwhVBeZxFtc",
  "key17": "EpyQWHUzoexLTKydnucqCgnahXfTYmPotEEKEU9Pp5D9BXQh7YPUWjwsf9TNrHKSbPAnTPuLX1FFFXNgi331RFr",
  "key18": "NHiSWLrywGLMZN6KNWP1aU8YFmSBg1SmL8Sg8F85uyd8s9rwPuUjJkvgR6sAimH99NM9t2m5cLvFnj6K7Efs38r",
  "key19": "sSVxZudADVnr58ELSX6JdzCrVEd5BoEUm1bacX6FwxhqB8X5WjL5gVHHHWVvQqjUsvMFbywhbRk5STcirPspqsb",
  "key20": "5fypbWbnX6SX5nAaBC8RoGHrTQdQQioALZsT38jJQmdYarDi2x7sokVys4ci86WwN1h6p1bX8uPW2tjhwgLGP4Q6",
  "key21": "jdv1n7QaeDhTDKouRhvSNZ3oMFvzehfU726iZFwMPEncvBG9bvTKiypRwYsEHgGpCWqL57Sen1AjjWwaevbutV5",
  "key22": "37PnjTdicBjqch99cEwm9FwWBobzYz4cbrmEzcAorTQ4aVjHU9EDxpdLFh8AY85zfmAKWYcEbf6GjL3NkKa1wkTR",
  "key23": "3uUth2vv5tQ3Zx5BRQ1qPuaCRieDEPsMhtM8v49G2vLteX43iT8DXprZysGThyjbf2RRd22TFWRBQJ9zvgbKjz45",
  "key24": "65YPpDiDDW4bh36iHCRqVFAMisEr5y8LYU1Ac28JPJGoeCHJQVGGr1guv9VNXjceMmh5Pzws67kndqEfZTXypU5D",
  "key25": "4FQrbMu5BZfKcPox41hAnhEsG2fQfkfdZzDy6gWQhqdbp5XDJ1u9Duosa17qGPMW7xJfEBwpxurcfFLQ63PWt2rb",
  "key26": "azx2bwqcY9s4oxmthmLXYVuaqDjg8n7k4UfzBCvSh62C9jmcxXPAidDsWEeJf1BPMV2YLXWhZ7FNv6UgV9svPUT",
  "key27": "4k67zjGatkDbM73f1jsoBx4ba4LDtdDLr6bCC7NR7Ks1bFSR7Zf31BZdj7ZYhMivuW3Fbf2cVsUVXtcXkkiNMkvJ"
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
