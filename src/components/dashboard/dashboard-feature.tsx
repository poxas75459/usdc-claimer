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
    "vftiqtYBZPgbNKvtaguTrjAejDi8xoCySC6LpuM3hG9ooSAftvpsVn9nJND9CxkLGsoz1ZQv8GHzKzAynbQKYjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crfFB9yjDNJCqRXM89x7zPCpfnFkgAmtu7keSXd9WyGGZMsAmtoHs2hDEyyBEEWvpKJC3gbcMcHB7sFC8UMyXTp",
  "key1": "gW4tWZ1jcozVLrTJK6a392N4Yn3rYFKX9d9GXAvA3ws56sSPAc7XhmYqpZwuXptUq8XcH8zUWLTeBLomHtQDvUS",
  "key2": "2Mb8pSxWbMdPLFVRnPHugY349yiChvLAipfPWtrEYJdJ2JkeZPGNp5PiFNvFaykJn7pMSYnArqJSw1dXQHsBS4wq",
  "key3": "5uC99Q6D5DNYmyWCVbrK1PuJ7yk6o1EDH7ynW3JYwx9rhVgBwikQN34BvEz92kbiKm7cqnCtuPB8WtgFqD56Vde",
  "key4": "5v1gyk53HBjCr7HjGEM3XwYHXqiuNVxUzpEmuLev61QWdmVwGi5TaJkZS9GrxKn9hcsH3bC8AAR1YpCwKGa1uRee",
  "key5": "5C1NPk5MHhjGimQzxQiKEzuHkv741E8JtyKPS9mJUsUp3ADbJA4CBxpjUyz8FuihCqGa3pNmysBj7gapZt9Gd9D5",
  "key6": "DvGuuKbt82xpeksL6TnLFSDCvWvZqCzVKdkHJzrscS7zatrzUMmmMveEShpQE1pwxmhcfK5DeajCE56L54mwaaf",
  "key7": "4HfUp82zCcWC1ZZdgeaTwCZpiiHaN6B3pLsGb4wJgb9VrcKx134bj3YaEoo7RBjq8hCSH1fFBg87K15hGw4D3zHD",
  "key8": "3KeQEieTFw8Bf9Q6V8UxEQ4bpFHYY78LBDBgwSg69KoFYPLmggqDBaayhzqskGPorVGTsnyLTCRMHJ2oJSMFmAsV",
  "key9": "88oxBcqZuzDAZhUxWSDWWaudbuNdKebhTUVk4F1YuyXtD9gAkCMudWd26htjiK1NkQ3VGxjuEsKJX3dpmKkfLXH",
  "key10": "tGM7e5JS2MrTKmdT9v2herFPbP3vY8KizVCXQtDLgAguozrsVZXzFwpHPEo8otWbTi2n3doKi3E2rLU7UMs4r6M",
  "key11": "31C3kTgZDYR3nEnqKK5Cs9FNW53g315CPurVWSEVLbc6A6orDZRQgpD64dvjhFwJxhRCQv2kn977Y9sxveDZNov3",
  "key12": "4ZBQT9n2q4nheP5qVfLvQXUzd4kDbVCM6bBkUNnTosvTmXweGNDgoLXfzHaU5D4cRFCGzAes8pHRHNUJCBkqP57j",
  "key13": "3422dX4V55eyuyQZn22WyyG2oXpAk9KyvdD4KFHxWgWLLjxCZSJ9qMPfnSuDYDoxBh7hazP6X2sscVpLj3ByY6aT",
  "key14": "2rKga7PN5WWq2xunvjcu1Hetfyi1Wifdv7SWoS79THR7BXmwmrR9a5VAaghJk3iEi23EnHfZ6zpixQdpMGuDa8C",
  "key15": "2EbGyReXPaqB5rWNxAAxVQiaGMd3CSMcvtLMEtPdqmSmo52bNgbw6Lrf6MPGkvMMzG9FTTeAbUit1b1HUgbcwXrH",
  "key16": "2aEuxJVijK6MJL9yhJP48WJsMRiiujMV1TnZvKCGxz23CHoTo9QVdyuKbrVEbxxgw6XrUXRAPsQLee4ABspBk7jZ",
  "key17": "q4bbxD58pMXBx2sdCWfGDHtYVMD8mcRjdMUP6RCdDdbwK7JzfrhKSjTQKQB16YYqadB2D7fdD2oMUps1dP3NJhq",
  "key18": "43EqpuBRR3CdS6DdTELPn8HkZpVhcn3tzc9MmZEVDdjZ2tLTPqpCbLsXWciMNhFhvJWfqnnCQywGvRmLzyLjs2iF",
  "key19": "KMUC6ER8Mydni9T2z9sVeK7uaW5fWetJAJX91XhNY5CDT7M8ZLFePTDi82ZGCXdXftSssMdsA4ow2bmK5ADbj9j",
  "key20": "2gGVd4oAKy6SyXo6PUG7YnM6YAgCrvpYs7CqTshH5R5DVbeSqxjaPC8AobPuNPiAGAenUje53BCdYXDYFbyvtrLv",
  "key21": "2ETGjK4BUaRrjUAHPYm6nMDYJQHuRFKZpYhtUKCXEpNA9SZ6MLJzKG4bpY4PjGLmwfYjSW8fAxqB9KnkF63MwJXJ",
  "key22": "58H8HAhDZo8yAJw2p6vUWT4riT2Mm2TeZ6inBCTr8WhHtPz6krNLLVbrMiTeyYcbtbcgcYHAZRZbPvBrn9yDuMYp",
  "key23": "3aqoZ7D2YmLHUXcQiuPjGCrYLNTg3M6S8w5x4RdFGQDqUNta8ctPN1VTR53BSJaj5Tghp2hSXZ6gpVdSVJHakUPu",
  "key24": "5wjxNhffePqU42tLm7G91D9KQ5Jd8cHG4fNDZZ1UBvPCL1bLEP9yhymFp5SPSrUahwGrmqUQq9FZFvVEHQLwfz1B",
  "key25": "4NVTYE5BJzbBJ9U6MHHMBnoinNhoifN61uiWrTAMy63f9HXt5r1HsfWv3uMPA7AEM7vMtT7Ct1ysnzuknbbnifH8",
  "key26": "5ZG77Jpxh1fQLGU2b5jMGP38M2gjgausvB86w8nh1iBT3xhSgL2X9H3SVsDdZnaYpmZzd9vPqJQYKCwCfxNoPzjX",
  "key27": "5tTUK41hbpC3daP7CobrMj6YK8K7wmucoJPsqGLRJkgRsegbYFNbwPkDtomYkoAJUqRdmgvBGNPDNi72P7SFGbQw",
  "key28": "3kcy5tiLZtPofuNSGgFQz2Vvi8SUEZYRQvJ61cZ3VGiDaygVSdNipWcfX8ikqz4c2xHt5NFiRubFvZavZLKmfJth",
  "key29": "4qhEvHLRRsvM4Vjxrcdwp7iPBtrqyiQ1gX9sqUWSxo2UBZ7RrVUaym5Wy2gCQgqQQx2tRikx4yQAPDjyF4zVpmgy",
  "key30": "4ysYgKyG8hPMHdgy2qQoF8m6YpiLzsVUnWYNUxWzFMJSUZPbQdwQaJUEH55AgUhUqX99YGy3cfaDK5gqwyDXYL11",
  "key31": "3hCBMDKM9JmbQktWCrAANyAn9tqTPezrFwRYS7PdDeUosDgsd8nrygcbpfo9cFYRd8QXtDaE8h35nxmdfhSusE6w",
  "key32": "4hTRM9DP8wse8RrtMZRS3mGqx2aqk4h5wUz17qdZ4rrAqrjww7QFY6K96f467mFxw38q7J3QXipMvpJYMQGN5nDM",
  "key33": "4sYgQvgbzeJXt8uvpGucQBXaPmre2U2B9gmRWtQn1wt9Vj5QPuXnMhBHwqwmuroa5HhqSytBntQJMTH1XApNVfMQ"
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
