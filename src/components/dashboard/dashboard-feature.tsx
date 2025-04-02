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
    "4N2o2W8zWp8JNx148EgE3pB6XWD8CQytbySTGmm8mPbCMdjDAJ91W4pRvgw9Tsj3qxDUQLHhiwz8KDBdjcEY3sbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7qT8Rn3BHpWaRxHw4Wwm4Fv2UbbuoamtzjwRJMbxy5JhrPXHjGdRDmhr81hu7csebstvNtujm2FwAEnBYTwknWx",
  "key1": "3mxVQc5tzkT8dptZB9Ku94qB3YtrAMcjzBPECLRpHvXuDagUE8dArzDa1UtCvdg8RfWneTgdeFi5LDAjCVc7TkfN",
  "key2": "28phuigNzrrJzk3VNJg4xcNgty6ngnD3EnKiXQ3FFS1DtuSK18NyhMdEgVAQ5XLRju37ieLAQbFnU9AireGmvYu9",
  "key3": "3GSn6JzGztyaYvWXkTW2RtT6str2c5fTJp8LxdPdEEUZ23LiCwMqkZT2mVZuXxc6JawncNJYwoarWLKT2YPKZyTd",
  "key4": "4eQPX4eEHXET8VVKBei1Fzearev2xFcYFFCEQyote8Dbc4ron1srAL4zv6rkDxsGCG7nqsN913gWHavkJ4DbtzhX",
  "key5": "LLz3Kq8WZRRZJHydZqBAx8ugcqvz55uWP38zr3MNbLBqUKfZ8yYFVABSnzK36hQp7MH6ymyMhShczZyhK5bddqs",
  "key6": "2tyCTgPMo3RcfpkcoQwhB4DbWMPY2KfGj3mje5xsRUN1x6hpS1jhCF92gsZEBhxWJ9PaDjQErvuTee48un3Fi3Qt",
  "key7": "2YgXzA3NbH9QCCRocaGZx5KngU68PXB9MTnssE3wthu5GPfw6eB8CFSt9bnuQPHQsLJQJrQ12DMMc2CK4nuPhD6R",
  "key8": "4za2TkeAwf2CPi2MrMxabUvZVu75baqAVnJKWWJiebUiyRJnfZ7e1ZZJGPjZ3vyR7q4PNPggeWbcXQMSEduRqGfH",
  "key9": "5kfLY5NXD7mi4gv3ZAQ8suPupPT8BAN3WYqET3x11Hhz4uBkcswEB4suKjA5wFgV7fSYdZyUZVGsReNssqWF9ejU",
  "key10": "5YQhekuR9ftNnLKrqzoPQMw9YXwfnSfUBGPtGVm5sN5t3dpGE6B9DTmFcQDxbsw7kTYcCFwbXotxDCgPV2WvfWwh",
  "key11": "5uJVGQkFHTdHjAExHfoHPuWZvLsbRRSQHB7s17TFSnf4yNtzE2Zwh72NREGthReGwS16mqv1sWVC2NVzxLConCXm",
  "key12": "5qTqexS5g5xNH1zqtoqz6gX6XQddUHaph1M6LUpHu9stNfSMnzL6ucoCKWndzyqDUVS9A71YWky1peoFy2AGGn8p",
  "key13": "2Gg7RLcBv4DW5GrRsGYNnKkprL4ttUcyVuvipW2tkKJgPKSujscxLmSCjRShdk4cXb4WVXvyUuPakUYkcGYhDvPi",
  "key14": "61tbdFFFkpTXs7SDr6A834VqUsmjS278YGeowbu2TfNh8AroNPLMZdKJBiDKmVQVmZ43SCwFHHAjFW5XPMqqktr9",
  "key15": "2A8uFcy5jMUEMsPBpPWo8MVswyUGe1DJPenYhMQnFJs8dPDWuRuYA98uett79mwLJZcJ6D1WPoA6bZviDNcq73Y1",
  "key16": "2fkArWcr3PgJhMG6EMN1heTfGFGmcBJLM2Svh59b2i5QbcgLWicf5ZEgCjuLRt9XyCgytjF8yE4RSpCRGFwfhdvp",
  "key17": "Shg3y5tAnTFpaSWjWFtXXCvQ3HM2FFF4Z4V4uxYHFgz7iK5wkCBC2KMGmfSzCVxC3NZwNqLUvMh2XzxqW1LddgN",
  "key18": "4xMVNEJpszmTJKgyENy1A89ZZ32wT41nZnugZi6vvjKq6hXx3ixJ3cUaFxQT9uAHu6NRgtk65FbNveGgAABE92TY",
  "key19": "67iFy6ACKjjdSudJT1BeWkm6cHpCNF5wcXKjdwmp18HmjzKcjN5f9tTe3kNjEoZ3yJLiVb6uknFcudbF1uHwNfro",
  "key20": "MAoMEeQWtR2ji2G3Guct6RpPRHpukETVmgHshP3T54iZAGLjiuYrQia1NvesQ27dX8LnreooEnhURZBJWXdhZ8w",
  "key21": "9snL9GEqKX5ia14eWMeCmXgD86WGH3b1Uq1b5NuQQQK227XxNWZgK2TUsFhdZAQQsq88TgGQJkd98Hq3D3U4coz",
  "key22": "PBk46xrt61imozvWsQgHyEoMxZaHRSrjrwLbAEYQNUpbPNAiSHDPHr2p3mJaZ68qogyD27T8p8w5JgyHxuJo1oS",
  "key23": "3814exRjatPdenpWeADfB7acPY4yzKWnBKjr61URYEXjcxxYPWJF53tTR3KJx7ahmCryrHawqS7CDF68733JpX8B",
  "key24": "5AeWVaPf5cyGxWTA1mAm9Tw1tosrmKGKcuZJ2g5S4mYMvhDHruukgXhFCBdFFykE4CEWe4DXE8sqakY1fiiCdQPd",
  "key25": "3LbPKmxnmesxZRnpa4QuREM3GboqMieDDWaRQsrkdZ1MRgMrDnDLFc85Qo9UGAeivq1HVQTUyQNyFTYzXsBTKvMa",
  "key26": "nW7wyKCsgSQNnw3ENwTRDxQtGqs4owjc125zMw3fo9x7chWeov2Yxb8wGXFu4o9T6vz8mm5Ss1R5XfzkvgwGuLK",
  "key27": "4hcsWEzHGesx2JJgNBVqRHCLus3zTEEcPMmoWuHmhdoAEy9VDVnPm6eK5LcbTkXYmocRYcFDLoxQeT1jmYipYfzP",
  "key28": "4cpUaQ17SatuNkRWURiXsNYg1vmb2LVSBZiQELtH1PNtP41JbBkyFfMGcnr1DH74UfR85Q3G5H4RVESFYW3Akyjq",
  "key29": "4gKFLkcbAjSNnCJ6ADiZn35bXY11pfiwcSBXon6V1TN2zArVko9BrzT8iVfzr7JbgayMsmFRK85BThAwS3BDHkKp",
  "key30": "4tLSsNxjttUdoppz2R8PJ4s2rjfBdrP9ue5tf7wypZSGh2gtVDJd6KPi4y58pbENPbmsohYE8CA9g4kwKa9TepdF",
  "key31": "2jaVaAMsPzkxQ1DgEcXMrpLMWparUiW6QMinDCfKgphZhf3gnbS8ScfQvi5Qp38R8awHJgnrNQdJTmwEr2kb6TBx"
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
