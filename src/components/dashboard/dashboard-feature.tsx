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
    "3MN1Npn2toX9kbkEZXMLn1SqxDgQJtz9brVNMVFdSktCxx4CtYvFcm39vbdTrKLg9AukV5NLqZNg9XGiTVyuGUKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ed8dyWa2msxwJLqvjPP2ihBmDNqCCvuAaAP9d358C5xzs1rXUSRfqPsamCfN91dKpgj3zfSnhy51vzh3r5Mph7B",
  "key1": "5QFrAMV3Dqtn28AeK4v5nKU91mRzwFpg74A5yuZrc76tri7Egn9N7dD1HZchgPR6fLrqDhy1o5WpG3YpYdtDsijF",
  "key2": "2FQFakQeeB6JsdtHafHNc6F6gtYMQUx18UmdPoyhiKNmQ3hbaTRTXdRiVaHU926M4YJVCgvUhw5axcfFVLJ3cN72",
  "key3": "xpkduXbyht4Tf1LsuBN4nRC7SDfTNoFZRmNQyAMZVANK4NzHX4NPN8HmUzfhyvQdPXJs37Tj7AZ8a7P3Vxt9qLb",
  "key4": "5yur6DWxAqs3H6CYFwAAzYC3n8cPouN8NksAfpMky4oE8SEebKkk1mvh1bZPF7sXPJmmr2nEH2Tm536WMBsn1Cyx",
  "key5": "4efksKhH9A852tmVbhKuZRNmuLXLR61uTafkQkbXrLTnmR7mZ9XdYt3RZfyeEyTvvXY39guLsGeAV7dUfw8eaUDA",
  "key6": "3j3ck5T9ucEfpJ4TReoTWUwnscapCyWujMAg4g2rFvj4FsXzXKkidXi7keoP5SECdZGvCEUetqsZyH36WsogbTAw",
  "key7": "Wcp463avhvHZhCDdPVG9FGRM45Uaw3C7WNZSsYVEpNrmHwXZEPCdPmtWsa9LWi2ykVkzXRm6sLGmNABDYcCCnaH",
  "key8": "5pfMNrA7RfVhKXb9FWpA3vsoQkkVK1y2LvjvLbkq8SsthNQGgzxNnpx6tMPrWuc5opha9442CFRHTtXMwa7Bghu5",
  "key9": "62JZ7mKiY5WJeyWSHjV3aed987V6s28dGwrpm4to3ooQkdZ1grpby1kMJ3uhrL8FTHrm1dwBGjnvndDLiT9azhYG",
  "key10": "nKN7zvMpoc4enU6GU7bZ8GqpSX3z8keTcTiEs8V4QnDBS3GD2kdNtiBeWNBhZERfvrrBabAoMTkGH6LsDx7tQaF",
  "key11": "41n3fDB12Coewexr6YRWZcFHC1EGeXZfx4mWQHS2EvnkjDUnwWuBqcPzpM51La34UMQLCJhjAXE1nmrkhXjUT5S3",
  "key12": "52yEEmk6gdffpLR2mPtD1414s8ds8cjMUqGYqAncqbgQBdEiN4ptRw5sNZacz4S5w1sHqwvuhVfbvCM4U7c6h2wt",
  "key13": "4Dfu5X7XutgaxVKCDQRs9xPam4MpeL6cXYjNEC7cW17yUqwTJpLSvVR6xxxh47qKo7kcMM7DmcmX4qmr3sz6mFq3",
  "key14": "5eD2e6FF5F5X7yx6LJXFgwUNBvfDdJiTjtQnwih8VpcTccDUNY56V8afRSmTECpcXRY3Q1ZE4P6Sr1Ax1jeHEiv9",
  "key15": "4xPqx357LF66QGGbXGwLgee7cEGycZkmPvPSkzcetBPCrK5evhK8sAz1smgnwYfPmE7FytGGGbLsdjobHYCz93ye",
  "key16": "QE82CaXzD6urJ2DwgyjzV2izz75j5y2uehPLcNj7pMzWTDqAFag9NBqxwwE3bZb7QGQ1rXQ2PC4cvPJY3seaLUR",
  "key17": "4NDcSw1vDH7SJsoanWSN85eXKkEWb8GCVpWBuVDgDtGcaJae9GKviFX46qWZsVyzoZ796HC1JtzQZowCNYGGx2Ak",
  "key18": "5pYv8vgV3honeW72T8Rq6t2dvpT9di4GW4hagR9bY2Hy1bX9Twev9wVzzFh3ATVELUCaT1zm2uGtWKrXFWkg5Y9z",
  "key19": "4jpqysxrFZC5sPwNzMbKNx7seQt2PJoJVaFAHgdujipwA5XjdjnMDUccZNEXrynNnSGVej5yMdGifsLXBJ6BrYCh",
  "key20": "3q7VdRa3BN4uQbgWrq1uXgAKYNJ9KbYRc9wSwzqdezYJ9Un5yyb1C3uDFV7sMf4S5sCLVFqbq6H2n4Un5LGf46nY",
  "key21": "5QcJPf7Qt1jZ9Z4x3RTvhjPQ5HA9tHxsZ25eDByXLCfXBbPe6vCcgTR4U8cft8zSrukbnQZChcJjP417vaRNyrkh",
  "key22": "2LjuJeyYYqDqsqmCjrABkBnYhgN96n4KVCN5EVaqxdpc9aGWBvqsDztwPeabyJewEhTzHktoxRUc6DkwzHx9XXr4",
  "key23": "3xFqxcaycQuUKZgTHZqR2qJv58YshoRiZegxeWku7vDWn3xXDvZDbwP39QKUQ5K5kHAbx5Tkkoeaom8TJia4p2Wr",
  "key24": "5PTWRbPVvKVLfrmVJoK1egyfoFPT4Vganu3mTyiHysRSJkzDcTUbVK2aK9rwNu7byaS69gNgQJmdcv1xh86nJxq1",
  "key25": "2UjHfMBMY37oMug9kKwqWZEE53RVChQiQSar4j68ojVwPrZLn8TTHsFjfcPByUoEXPznCL3sX4ug33Bt6mo9Zz6E",
  "key26": "2yDyvKjPBL4A1jXPzxF6SiQf3M6Z9x7ygSGHwPUXFz1ETKSesKVfhqGqdMeE6QjUCcHZ8cqt318FFtQW4dc92vb",
  "key27": "3A4PEnQFyC2YkGtSAYMtF6WmdjuEZh7kJMMKpFeyFshrCFtatRCt4f5Wk6wGsVLziT4DPtivgnRUkxbkcrKG9DY8"
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
