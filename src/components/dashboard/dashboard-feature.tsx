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
    "RTxXdDgFSZ6zK6jTxS8m95txJXsS1EwqduPZpiNEdKAd1affoYvsA2pRX43xe2oPHmVP9oPJiMY9GTimbKxkD47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bFRe1LNbGapt9cpjxpqksdJeKrpFzuiWNJqyGAVdndnWdticMCkXuR6HbNw2LJjyinDRc7AR7HRDdYSA5MiopKU",
  "key1": "5PpYUJA1RdBocJttKozCmcLtWBAhz4FiNncz339MgCJyeDZejGtQ9tsViTHG14xKv9k3A15FYoMuXASWHQwCUma8",
  "key2": "5iaiG6HZAZKedfs5HqDEEDz6Ta9upE4wyXypFR9t2fzGK8ruj4s2udGDBZWuD5RP4fnBNjM3emHihfjYnrdBScre",
  "key3": "2u4NcbjqdJ7CDr94LAiJskf4711fsHJMs8PG1Ys7eeCgerSssskXqVp7SZv6MBbMx9PaNMu2hgzjFFjRxjhFoQw5",
  "key4": "35sU2maBHqUz5B5Xprc99FY5NP8NSNk5CCChfnALjK212Zi6mAxC8iERvgyuAVEWYEv9B7os1yoLQz2z4uh1N1Yv",
  "key5": "2mvwkTiqMcBZtGMHHVPtf875LvVw8ZPGSnm4dW2yaRDeiAXBEQAGV4YZQsKkHSacW5UN9x385AQVVM8sR5RBtUi4",
  "key6": "5wwbeizcjoXGJdoxDiu6Y9ueMbd3LqzYUCyMFSDH6oEcwAXEGgAwNP5XpPaWavHeA67KnKmK6rpFLDJWYTX9aDTb",
  "key7": "5KQB7naeuFaJvtn761k2Q2HUh5rMVDWYGwkpEp1GRUpvqpiG78xHV1uhKcNuexDdzccY5ddzoQ7cDuTcTjWS9WKr",
  "key8": "2gzm8mJHv7Gz6g4NeUxAmFJpJoCXii5oHcsq4mtBoptU2d46xdVGTFRmqajcWw1tHptLZNMwJ6b18wyat8mf4HNj",
  "key9": "3oLCKyRc45tor82jVYNXLNorVkseYP9NkYLbVcCMFnxbh7WrQSqeRvPfGZCMWrgiXLGiArsZvtU8u3qBtLUotBb2",
  "key10": "2KU5q1UNMnZkYg5rCde4Hy4FoeH4vZJfFA8fKmxTJukapubgzFXevX4G9vVzwP6vir17uSuEzDFJQzMCWEEDXCJz",
  "key11": "3NrXKpkyg2RcEJT94QXBqEQiVE5J4aunuKjH8utqKivf2DqyhqoxSk7VCV8iHHcn53GpfkGJt4jWPxLsRRDkCA1X",
  "key12": "2qTdYHk4yRZGLyyAhZCZdjWZ8UdLcd2m7Q37DZZr2aRLqZorTabSFNtACzMwiLJwnwGdPcxXuUvochLssgF1PHEk",
  "key13": "4DdD97CBAQzTFXtYUc6b7jqoPA9Sz22ZYyAexzNH4gdA5wSPrvbszh1atvkbBSELt3aCsTfBj6f9WY29RnjCHRYu",
  "key14": "4ZfRaQqmj3r9xPRePjSw8EQfQq8H93EGNfA8MT2n3gmyn7hMfkmjLQGvjpQu54ptfvuWMaZKYE5Y4MDeLKz8oYEu",
  "key15": "qmu16YbFsixnjxpfBH9i6ksxuZQgrHQb8JgfySV54hSeNSiAFKtyyysfs927sxMc2idQVYY9dnVFHUkGLyMZdxs",
  "key16": "3vdZmk4BnaC4FusAD1cifDFUFsroJtPP1mx9hqL7P4hEToxu5L2mktS4768eE7PeHJFW3APHUi3HeJBrws1zVQJL",
  "key17": "49KBb6ncTw9fVwTn5FLQfaigynuyfaq3QLP8fuuaCENecpGzFHvm3MZ2BQNneUBVUeLzvow7Eh6QU3CEF42svu9c",
  "key18": "5xHevE2W5etu5k2fRuwHuxRM1cmZV3Xy3Ws3hYMLJsP8T5H7ut2VeKffcX4tBQmcVrzvtNc3CvupRtXSBn26Xgkx",
  "key19": "313E1MeoAZLRTBN5mAAQ6Uj6qWWNqU2NSFmtiKRy5whpeTkBj5d6qYRh1m1kRAgek6jkmPtbF55mDbqxwqt2xUR6",
  "key20": "B4sPCwoMoX2esCDmQ1Jx884LUDuhrNHLkSUQ9SiQntyxaF3NBS8PByqJFubojkJzWyyn2VxCjy5ALTA8fHaMYvX",
  "key21": "2Bdb8hr7YNKxMGozNy7QtC4Yzoo9KdjJi1GNVi58EDxr7iMpgx7XoTkrGAtaEJMzZgRqmELH39cWzvYxudSsBC4o",
  "key22": "4UuhWMuMYzhgMzBcMSwpw8W3bga3H9mQqmty7AHEArbGtGcuU2gYb5vomy6Ti4fp3woAFNyp81ze299kD9btshBp",
  "key23": "4xmpgPKsiadriZbhbsfGSWc9MtNGdwvp95BxTEoZPhd5XGW3KHCe72kinbwCFAJzN6WVrqXSLjsuwb58Wj2PMSSS",
  "key24": "5aEePqGMohnMtvDwEq3YRer3i3pHoQPYxBS94arVd93NXhVXSzHVTELkRVB7qg3RmRpwD8fF5yzNkZfcG3eXiRAg",
  "key25": "VBtH1divGfgPzoETyYuYq2veQt9UtfrptPnVsspYtW1NnwCGQtUv7orgT2r3GyZ25oAzPrfQuYhVGEtLUtR3SB9",
  "key26": "1KPjsQDsELYYfYJ3TU7aeTHJDkyN7zhgZWXfMAiL8kmU6EaxnfGWj25hDBKYGdai5Z5dGZnx2BzDnBvdPNQcnKH",
  "key27": "4fTdckviQG548LFjHtjDqr7DQe3MtNjrVnZUFCHACAwVprX62mB54AZza2hMBKPpP2S2dQasNqZAmncd4JwSeeQW",
  "key28": "5Yw7Qm98WfYcrJUtYsoQTNEXTohnLXcBNKjnA4hME5LsJRc94Zns8yVJuZx2BNQ97iMiLg7Mm8vZLxogRktwrYTs",
  "key29": "6B7yJ8K9gDY7kLWKdganpU6E6H7htxamdK6HPVMjMDWHQF3nMWbs9vE7sgCCmFnn2fUT2CxqaBcVm9gjxxE8KgW"
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
