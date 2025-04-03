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
    "4MpZehixNH7n67fExgSvR5BnQya2yPC12y7Z9CcK6BAt8kgeZNuHXeWPBjiBasJnqeht54Vr5E8m1s6KcQaH1A3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYSTkLAuc3azS8hMJzjrEzjMdYR1SaAfCf2FYPWcmnTTEuBNaNyDdJ8QPytag3XCkcEYWnVYFCReQ7h5pgcBy2C",
  "key1": "yfLa73MQ9od2mR1JQVkV98B9MKD4iJNsMqPLtjhwkdmfXdKEPaH3aFk4HwEc4bHgNonoFv1XUff3BDEHviDZy1T",
  "key2": "4yBEGCBnPs5NQ2355puMmR9UNUArWzDhduuvtXZ8qbj3jCq7vijNPp6WFmfwgPvJH651xVVFndWJQpsSiZQxytZF",
  "key3": "5z6yEKkHA1VDTHdwQSAwbkjVcAruuauWgwJETBoQf5UKKQkSmi5ntCJVZ5JKGaZdPR7PHnkTFT6L6u9E9oSS6UAN",
  "key4": "33NcG12fVUUf296DpAgLczFcwniKooF76mscFThVCiAMfyLYu63shp3XYb6zUvkxoztjRhgen75E6petwDzRLdiC",
  "key5": "5WpGGYhyNBD4UQPG3h4Q8UkG9iEBx99Gn4i3QKJMVkVKPG7pjit2VMy2hnSNzdDH8dqoiDmNmeWx126WYBWdTPHx",
  "key6": "5VLuYwR2Yj3fDf1DaL3YhqJQv5vKsMKNAY6NhFTMA39hvSxjAH1CWzsx6YPhppxSa2igAwk6ykhzCxBkUgY5QSLu",
  "key7": "UR7rWoQPaGPrYGJQBkKt6pjvC2W4WPo7oyFT9exVDPpThvyrv4LLA7X3XMYZFX1PmzcGJK8WHgKFKpNksMT23EP",
  "key8": "2BR1oaBPj1ceKoWWxJJPpyLxL3uqqMEjipJC7vmWPjA6PqJTfW5BDh7syhuKHMj3fNdXBAcyxSoDJaw9gZ447V4D",
  "key9": "WjGsxkuKLUAHyeNTKhWqr7KuPqgMf5bNBc54a8Fkubz17JZntb3tm8adgkq8KcRWriggsN2FJM2RJLMs5Br9vra",
  "key10": "Rg1iWEmvKBoFvPyVwKnrpUyBm8Upq7uWQxYxzHbz3ZhqLjZY3MUCjGFrGQ7L9rVvagyt8T9CXjNwhL4b1QBa4fi",
  "key11": "4rurFKvm7ybLZM5NmCvMcqzs36CKi4tZkEszz4AFBggpRzeDdX7LGxNSukzvSGUBpU6pYWNja7jQffELmXseibBd",
  "key12": "2ogbygyb9HMLVb1bgbBrEAG1SgAHFdQPqEfnnWCQgoky5EcbDrefhASSzjX2QKsbKTGEP1PVuiSdLjMqHobMmWgu",
  "key13": "2Zf2ydTb58P3LBubaecNqirR8n9UDs6c7Dekbvqy2Fvsn1SRE51XG1mKzwbJx2KkJBjGkuCgz6XkKHUBK4CLfsfi",
  "key14": "61QKiirEVLxUpNWfr9UeV2HicJftcCD1xDrZXSToP2PbccoQKMHWAiMRUmnwu1hJ7CnRAboHwWwVXXSNMoLXZmuY",
  "key15": "2aXCavbi1A3DrcZSVxW2EAuwovb1Z5AAE5TSMjK3bUTMXzhrHSDti6i5oEo6oXE4WtDB7CBgeiSFjQ9aTzKgxUUg",
  "key16": "4y2pH3fUsGwANobDZC2wv9Q1K6HwcuSAUn9VYcZZZTQgvob6fFoRnd1DfZgnEuhwvadt6FvZw7jBrfWGqafb5Jap",
  "key17": "2s3ZxTmQTGwtKajoqzHMZ4PrrK9wtWzed9HaaiejqveXkWyL2tCKt8YQsW8ZhQac7fsrRm7KSWUDpyaJRmUkxe4y",
  "key18": "5PNvhNdQGMkwRtXfVJ4mxW6Jx8s4V9zvySo144Xc3SjvTGnrsEqPE7KBqPpt6ZmJWvuB5SZ6QQ3kjD6vWpZaGJfZ",
  "key19": "5sqbto62ynhW18PnymeP2CWF7JyoJ1XxM6NJKcZ7nPmt7RKqchGRr2mDcUxyv6EC4V6QkBxfza4cTjQn7thDZmnG",
  "key20": "2H2HoMj4eLhky2PwTH43YTrERufta2ny5Ec6x4NEYNmskaEXW8W5b9BSzvNJJunc2TvBTieg9AhsRJao5fpythwg",
  "key21": "39a7tCi3rAjBpmXRg62Ppb8rfv7ehp1KCMgwbSkdiQpcHn3jN6e5kCcx8pK7DZ6hGgaJm5TJhETgBdofdrX4B4tC",
  "key22": "3uqnLK1DSpm8jbFdtnaozjbXR9RGkSKqL36pHBBFrP8HAVtmK8kAzbCZ7pdCAhPiGgJXCtHQx6Z5XTweHn3Mz5Lp",
  "key23": "4G38Gjkfq5HfwbVy3PTt5wyJEr1g9yyDW7SyL5RJorQjneWRptcEgyNk6Kvvi4jQB7kx9qaUfgNDzTi8RY6jQTAQ",
  "key24": "5qJ36ux3dxezcx32as3x1ShhUtT4VUTYXrXPaV5exwSxmbGuaUFg4UKNVWxtbNdsuDWk5huzhWwEV2f3TGrLH3uT",
  "key25": "43o6vAh6S9aESTCQhUNtVGLfnxvKenb934AuwhtQS2GtSKWmzsQ7bdUiY9hTFwj3AMx1wGZ747n4qfmY4jN1S4t6",
  "key26": "4uUDheBJxi6TYxnznjTFgiXVHP5xLEZ2UKohpyFiBJ2huRhaZNcK9hePMyPq79mXpLuUYnwvWTtYj9vjmczS74SC",
  "key27": "8psXZR9wSKpwTq77q5Mx3fZFBiVQCWLWiN86RYtp6KSVGRTxaBrm2BtunLDtUYQvSv7ZQUckSVFmuNeroVaxTL2"
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
