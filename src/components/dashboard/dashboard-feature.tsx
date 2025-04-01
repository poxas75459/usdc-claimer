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
    "J3H7S5iCsYdBZZnjrX38VakxEzXDm9tFu6ALEuEgGBwxUN38MSRWVsMGqHT5YZ965hZZ2FK8cxWffpnF6VYqrcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4foYsX1EB4LxmZJMBo7WGmfs4F9nfRZwhpScCfK8mQcfftbofz58e4raVuYutn5oo9JcW8VnxPiT4GXbHHAiikF",
  "key1": "3aFtfUXbmKjhqJ4o2NLGecag4LoKVpgLp6qrJYdz2bFTpjE9BsPK1Bimn7JK9z4pSMyJCWddtaZjM79cFDZchbZs",
  "key2": "HGvvt6FMKUwPAB7Nqtqz17rAXk12A25QcnYz7LSpFXusTv3tCJ4m4LVUpcK6oEVHRvT6oYZUJzNL3HAuJwnRbbm",
  "key3": "8VNnQjcbVjDrGuh1t2YeFMYpkEbbCkCeX3W5PBtMmX4bfrDGtFpNTQGisUywsGjRoPYPNSZz9RqpTo4oCwtBGT6",
  "key4": "3THbnzMgmzqwysBQcTRyQa8BT9n6Gk7CJCBtRikg7dtuEhwEBKE6xBuif4Yz7H1w9BAhYvdrySV7PxgUNTVXAsfy",
  "key5": "3GiUmpxgfvMvvF5DpMJztsXZYsHZvQRKKpiMhnf4a6DGwu5YmT2wBtCuVCq39dDqDTQ1xvwdTnh5D4SgnSYrpZDm",
  "key6": "4auGmhtzbvqFM3Vgxjr8FtqNZG1gWNtp6LWZic4nJqy5oMDXin8LrV1vPVf2354hSzUAcmPnPwq8HVcJdY1uhL7Z",
  "key7": "2kkR9hnLGRTJEzDJxqoEMJMHyECRn3wEpbSh1yeyCDcAvKRnvvEWKuUQQBe5LpJETU48H6RHWoq8R4qZuqf9bZsB",
  "key8": "LdcJZQQ78HHDxcegiZUHqM5f9PbLET3MB976Hworx3kSwC2hxcETdBrdaX9onBLTsWZUCTYDE9RdmzgTY68xwqX",
  "key9": "3Jdr63Buf6sBoKnyCtBwH2emaTnyjvwPD14xNuwLYPjwBFUjfXd2GSNWsiJXeqptv81jEGiurwfQtDtbwuVJdYQf",
  "key10": "3LEckGLfQ2NPpm4H69drbDN6iDeeUwtdq78JfG7NVnaUUsMYgsoC1AGPBFr39ixhpBDA8yrzUvXE5RpQBFxSgdyr",
  "key11": "sWLBNReS13GKcUMDCDsE7iW6JoLoxZA6biaUCBiizNxGgpkBdd1Pibq8wMtpsQg6QRFNnr6KvDGzdcmcHSH8Fzc",
  "key12": "2d2687vh4ghgcpV7hV8YrspwzsCAxoxuh5tTT8eCRsqRgKFKQSy7Q4acSzx4UUKUszpG4rZkXj7Vw5YbM1BwfPPU",
  "key13": "3Kf1i4nxzgNcNQa9eojmLiXzLbrscfwQ2HAYYg4PYrjZiYdRbRj2qBGcrx2bKvNtj4GPo6ZK66Sx1J5FMAHs1WSF",
  "key14": "2eboByBPrQohN6GrH5egbQw5EMufc3cYvxkzsxz4YbuC3Murx5jMy5QpbooomxYZwBEeYFXyNhzgJkSogFvcBMtN",
  "key15": "2KFbCx93XxvzsDt9GvFwW29rXtPWnXkx3MHtWAcVSo22NqRwNUtsAaHwM2JMmE7GQ7UqZHBvzW7N5hn7qMzzeydC",
  "key16": "2M6XbnqNxYPykMHDLjm8HaMpBnsY6BSfGpPMGB67de2QHdPZL8aLd9ovMe16qSfjGvQFe5Y9qhdoopxigMFbhqVY",
  "key17": "3WuksjHHXSUCH7kZDZbz2aAk1rxhJGHuWhu41gKgeCrfei7P4BZyjS4QTudCbFUCzXqdQNHrA9TAkZyCFbten9wY",
  "key18": "RX2E5rJ23uFNphWDQjPbge5ZMwE4s6EGCQQWKHNnxUysFJamDWa4NiJKUhbZDFUEJ5vm8CVcpuw34sxxZNxnqz5",
  "key19": "3j3JAqbYzLcG15snBRnkbSh5KBgXeGaSfT2iQj2TXmJNnQxqfgLj5sALjX1vLPWQYQse4SUoFnQX7LGVuH7gtCs",
  "key20": "5bmL8ar4CvDjQNWoifyvhKtW89mEhz4zhczUaFFt594GdE5nihvQSeH9GGsmiDrFet8hpuUyDjszf98ykQSbMvgH",
  "key21": "GGg2WFzpuYJirDmVKzYHgVweD78xvJijNWJfG24DQSSe9YtSQWYbVcihwBmM2i6X7WKScsbtYgciVvpegsRq5Lm",
  "key22": "zyyCX9nD48cxSHrJC6HmDBRtn6X4E9rkpXRLWZyXiUzAqDJMySXC2HQsv43NYemvX9TosLh3ifzuA6HgHGaFLEg",
  "key23": "yZE9exuBZc1jw9msTDBKNA1a8jYM2Q3HGjYrkhinW3zPrD7yiLSmCyDBZ12T3qQ7C43JokKfb3hz3VkkBFr72uh",
  "key24": "3rGtmfUgPhhfVxNaSy9TY1kd4HnwYBMyfMBHzRzKpi23Tcw8vqrtNqDMdDBQA43oRmGyHc4ASXzWyK7NxWS8hBY",
  "key25": "21DoDyN4tkk9zbxFYYKLLQ699rpDus4LTHxYpJWbJ18a9gbdmgcPmQ4NUQVfCiRwwrB3iasbpNyGxMEVqMigmy4m"
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
