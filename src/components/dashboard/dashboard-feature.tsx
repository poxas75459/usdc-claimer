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
    "rSKxuC3Yat2eEWwixqxNwcDFLYuT8ZBhyCW3nPmX6hyKfGdkitJEKJx4SdAYPPiL4uLxNfQFp8Mrw8268TDJmw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44RdmphTEcPiisYSNMEi4V6A33E5SrLpttt36VTrUoLbijFCe9Dv94kRXJz877wDGJFeK6mk2t4H3mmQBBASrSop",
  "key1": "37jmC8fS1a6ZfH6vbdzMxNrCm5fWqx36EYASGkNRo27HBhjzq8cn5va5qL72f7w5uNBbEP47j5VY7jEd2dT4efS3",
  "key2": "3HVtxxUXpQ5QQjRfs2QmzbVUkM5YSwJwuXg22sqSz6K1UBr2aBDmGY84bvALEBarSfBh8jD4uScuNyz8nZnZ7WT4",
  "key3": "5uYNnpXsB1z6JCGFjJ7fPys8zwrVjK73iFuTF4ddB2nNTJcTftccProyDwQD4E7DhyWshDwHi2fe5mDjyWMF5yq",
  "key4": "2mdDduFjvXF4Q6Ax1T9o6hF4iQyo1eCg5fRDFUCHLyQ1KY6qxoZVd1KeJbdnf515PFc4NvsKSNBkesHj4se1U6Fo",
  "key5": "gy8MoXLCa8qCSzN6h62ezL6ayEifYSxXytcrGxdRWqubvbuz4xkBr65unShuZgWpJfCuy7i4sMAcBU1Vac6rp2T",
  "key6": "o3E7fBDuW9FXBWJAYRCDMFiEscRVyw9fmt69CUK1w9SyoG4xAYWe2mC41uguf6oR2dLN5WuDB9cVEGzN98WaXk9",
  "key7": "2mNuBCjiGGX3ByGPkm1BpeH9WNmJnMeBaLYeBtRvjGDkBPF8B7hyNmhuLk7CMSkR3C762vQRmjiDRj4ftrWvwbG2",
  "key8": "4QxsjkAKntAk7KecEFBQCG8LHz3sDtQQL8oi5Tm8GYyJABetfckM4F5d4duaS8ucAJTP5DFyewkVaGewmW2jTAFY",
  "key9": "5gySsTu5s2HZKe6g24CZgQesTPSKm76dh12SdMnLzgaDbvQzfsPBkqm3UA1mHy9ZJtukxtkkzaMxVRSujNWTiqXj",
  "key10": "3J3GfERAboKu9JuVhixNbsZvFsAz8oByEfXnxu4bJzMZHu2FsG3DZAcWH9U7rzbgnF3oLF2BxpBKBjDC3yxefRra",
  "key11": "2XQPJJ5j71BAbv5bi21ByZDRpnHD9jz9dBNUQ9UbvqsM52g1YWdpDctLMbj5DkdQkNguRRz7jd8Z9WRjxFaD5Uoi",
  "key12": "5RKkjwo71f4n5bGBiZA7Ck7GuzD8PdYiT1GVVw5M9PBuCN8Gx8SwVrLSJMbtiTfnePt9cjGAPxX2f5cBRz9xVPpF",
  "key13": "3SLHuBKbFAM8jqmcPWpydsE5yrLjakzo1JL1BiyVQcY7rpvrSGEXE1YeHo7xgTQExwcMC5czP7EppeC1sqKCvSbe",
  "key14": "3RtYXCwxtttw71ECLx7JsUjHs86y1FEQB65z1Rdi6QWLhU3LV8fqoNiZ7RrzABEMYXhmdcZLar1WDjBrUkzT3wLU",
  "key15": "TrZDKJZ8BdisuRW7iGf2zBtFTQG18gLaSC7eXaCGqpe3WNezbW6HESzCN4pfen83TTjUYxpKZGaF918WX84EheN",
  "key16": "2C2dksKa3btC9pejahX3c6q5qApZUzxm6nZFvfk67bDrE94PHhCtbqVLbN9eVj48rUBSfbxMzYtqk6Quu3TMsWiS",
  "key17": "2xXZQNTX8XsXp9r7KchhdtwAp4nac3mEDKnoS7aUqcZ419E6MZJZFn7thAH7Cz3o6znd8YuFsP6xAaq17hzwXw7X",
  "key18": "2wbd2DNNDN4NBUgcXumt3jfCVqqoA8Y2TrjpvZkXzDE2P4GA7QkjV6gegSowvcgu4wgeRSNWLGdNQmFdu4zvNkdX",
  "key19": "3jfESR3bJWVTjTyKjci5T2fr2257dyb8PwhPgbWjWPingm1xEmBHftZPFFRDSD8vD1WPiuaSCNivyNrf7oBRLXeW",
  "key20": "58LGDmtX1rb9Z8Px1Ef1kvkfxb78f44DArWym1yKavf4pmqf3uoF1PXTUBhEuWwCCRCWhnKjmQRWt6M5gFMzdLDs",
  "key21": "2v5xA6C21UnqQaeuP7WMsBSoyTqBHJmHxmVDc98Lu3v2h2bCjrhBA1ci4mSuVpGjcG2VUedXaifkWAaoV4D82Z9",
  "key22": "4s4Fzv1HpzrToTHsehLKNyXunRJGh2f7Xw4wE7z56CCB73wtfKVyAixzVshVnic3zL3iS6tTtPKJQBj8BnJKPwWd",
  "key23": "5iY3Ke5Pz5kHK14poJ12ziWi8mrfsJ18Eb5vhEQTSmWmdLAJxRgLaccMGLDfiW51iMmNvpCGS4ymJzXHrnPmBcdz",
  "key24": "M4xcnFSty9XB8tSYQufZ8pApc6jTewAUugsfQfV5p3tq4yGxmVob1CcG72Pa1FC6nZ6yU6z32kNHHsqdMnemrqK",
  "key25": "3tia4feRc4oYNv7H95Bu4soJ5YNfqY1C1J2kuFdw6c44WrnybHc5CCRctnjz91badWYc4vAGDx6a6qKMkLn9jZS2",
  "key26": "2h2nyG7f8eyrYcck9RUfyu35VjAafAk8Wu9GXz2woCwfrhtQ7uux5jqW4myJ9Sr6XocS8xiGKkj7Veef4hLjuQYo",
  "key27": "5XNbsav9UHrjp5SQiyNHcDodV9TtToUZRX9pkZshDFTLdC2bMqBS7SPUc9U5yJ8WgVvcMtDNy4tx1YTHMYpvdzpo",
  "key28": "38eHBPyCiQreXaH6KTFjdq2gS4PhCa4UVEsBVvB62b5ioroURmAM6hfWHXm8EAXpMqw9TMAXwznQbPMDfaoNKvix",
  "key29": "5PLjS3JzCwYqncNVn3JEvkro1y7WDKZ7GRDjbML3r7EQfdZheBYAuzwkNHAQFELpaS5MLTQt5xMghZuuvKTw6uEP",
  "key30": "2KA5pB2sqERrC6QbF6iszvfnR4wHsmdbX3fcGVEZBCdDYAAVrnG9BKN1rVkHXoDzDgyzK4Zqq7QYMhAYpisP3f4e",
  "key31": "2wDBDvhawGPMvrTFi7kUrR1QybQVJEf6sh3kHzQTm7hPdSCv77ZUH8nPnCPykfPwTrR51fkgyA4yRo2eXnnHMdL6",
  "key32": "3BP45jjtELnzEZCLXFmZCS9S7zfeScDhbk6Qre8vTfP5eghdJRMwVUsqmPE9mQp5o3Hq4FitniMjJRR6kTtQ6DVs",
  "key33": "UDhuUhXHPeqCxDWV6QzNq2n3ht49touBr6yKckPjkz7ZUx6Y7de4DdpDTEKfqc61Jc4GVNBsu9gpv1Myk2r3PXB",
  "key34": "5yRxzfMA8VVeJ2PLy7S8jNmHt4PzMaoHQd8vW3HPis933scrDfKQdHsXUM67bsuJsEK2BqdiMRYU35qN5xe3CqQ1",
  "key35": "eRbaF4DKnD7WKo6Z91Mt4XHedEwWCeGfsN7My1kztiwiFwBENNa9UkaMyR56pYsG9Zce1vySraGqjz8xKX5NqtT",
  "key36": "4YsM775nbkTTCRHqT1s5631DT3ogRguMjzr2dpHhxFA3duf9sEgEhSNP2dGzzeYaMaSh9axXrfaoENS7qvR1Ro7K",
  "key37": "4rNw1kQNT9KvXwr6JHA3CgdtPfFcdzTLx1sHuMrPYNbCJmi9EphrMBZtQE2ZkUEKjVzHwHrhH4pc16F6sXSRq27P",
  "key38": "4t2hK3jR9Fo1CGCkxcfaT85deor3Q4ppvPutj2oqXUq53CPy2zhiSY1fht1oPPGZeb49Kg6z3ssaCXnZPENpvLnD",
  "key39": "2tPyGsaX78zEppZDzmEkhfZRgkGwpPLjzSsR7mTqzBWAG5pZSZXmz5qKXdU1dJ3cx5iR6igWwfwR5k36wKJmD7SX",
  "key40": "EpDXSkjr2DFb7ZKEYjM3kffv3tgxMFLMMbrKYY61dbfdXQW6UGAoxDqH2vKpTsDmVJDecDkPZJZT7D2yoxadyyn",
  "key41": "4MFFBnnwGX2ji7MPJE29CuYM2TtbxPh1qELzFqKFjmQp26amrfrYhs3CF8M9WpBESwCfVCHVi9qV9UVt6iYTskyi",
  "key42": "2h6o2CZfP1b7mChKcMJzoY9mEEywF5UU4277w8L2aRh4YN8fRzGZFuP9ZTdHAmbapTHTbpcQvhsMPsRkAbvE4J4U",
  "key43": "qpiqww5ob6k2Pj6Fx2SZT4hLWNzsKe9FdiNsycuDoYQt62UBoDtUowupxnJmLhD3UNwqk61kAJ4v2KeKyN9jW3N",
  "key44": "3go3uojY7ZWaqtjbvLvRKotQ2KRpppeHaGFCttix73AwMzYvc8K2QJmhVaLwzPrh3mBWmS55VtD7r6uxiPobMGLR",
  "key45": "EkULaz39VpVcPSTn1oAUsGHHgcgJvV6Krq1qCBH7a93npbEQcMdPy7qgfLxXtZTzUNoGjihbTvLJ6KyhUwrjfeu",
  "key46": "3PnT76AVjbDHLoipWC3jtghw3VnRMSVjPbqTC5TEEV4QYGY4AQSCZnNopmf5gytmFxNZvm9rsqunzHPovyvHoqyT",
  "key47": "5t4C6FLYDhE7aztVLwP5NVJsPsaruP3CMctUZTi8LAMcEqdKreYuDVFAM4UafDwVjUZYQY6czvHpcrEYNtLTude8"
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
