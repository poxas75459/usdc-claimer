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
    "3R1hWBzDX4J7XSBbBGQ65wGxH8p6KCkwjZ6bkYKD5oL6GnBejzPt1QyD866U8dZ2fgE6XQM2w4CfqSkdfmMgiSP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aTQuEeePL4eoDsn8d2mJVYeqNnERESV7MxgWqCg8TM87zSQfqQV84vqrBC7QVNmzS95oAPHMSQquktFBm3wS4uh",
  "key1": "3AQsqJDQ8LnCyWowHuKv48tGjP1mAFp1XfMmjGYtxnCH8uqFJtM9eo8HiNMqnmQRgB7BXmvYkUqRxp6naFHQNDAV",
  "key2": "5j9at71vHuBUYiQVJmExMHNe5kgxby3pcALf99GvaRfsNFG4PTWuCk7pyn6QwnbzB51GCssZuf3fVDuVbPgHCfgq",
  "key3": "RE6ayequGyHnThtUaDYryaz183kYBbFaBtn3Vt1dA1Xp5XXF3Ri2ATtxWL7sFYsJSUgM2Yzb1MMKWcw4Dmzooze",
  "key4": "3mW4x6qsdxTnvtxvqpzBS4HkuUQpp8HffYgko7MYb7TCHbLyoXpCjihmjSST62Vtwap8KyG1wgqg9L3EgPqoT2KF",
  "key5": "3a221kwaf222MAKVkaCj64awhMngYgqT4Z3nsY1pz8ajVq2HLq3Djhkjpxf7rWTwXXJ7SApydEwiTmG7EMrfC8oa",
  "key6": "5ATGcM9DWx71XNdunUydxBZp4os6LZj8qgX5rDFPkrwNryttc3qeTm7vrmmReAzS6t6q8wBiDuUvdq4Nkghrz1Yx",
  "key7": "2QprNNbbJb1DxF7kNXgaQRYCnLKjMHNdG2ypmFx1nrD5CbCgrv23XgHYKTAiMkTKs8dWNiWVeembVsJvCkC8qW8t",
  "key8": "2vRYXRt1MNmauqCF9wttuZHd9if2FEbWJWFUawyMH63RKWsKQ8ZUHezUsL6NRKGDGvxCQso3YCArdvkAh3vTVds",
  "key9": "LNEwpkFQqd9qoe2fkR8PVbDHBmsw27k26QbdGxSFWjhGW6sNmm4gsXDA3DcEMFMkKk8xgBDjeDrd3u1rYux9spd",
  "key10": "gQqtGZB9Zmjyta5M7ev8upRrPmcZEUo44ErXhKP29MNLTnpXYgbVvo6kg7DP26g5kZ5BSSfpZhkZatRVvbupvmW",
  "key11": "4Rt4hMnWSGGMtZh4tAN2mtqkeXPHBzfTDDHNh9rDdBWTpYLBcULrX7zbWSyziyF91uhVttMf4Zgj8o2Hif2mZbVU",
  "key12": "29jMDMNzYtZMhVpnqX9rUb51oQpF7owDfSWAzPAPRL3CJ41BFVf9hiGwTNFoQ6RAVDGxjVVmuFtBgFETy1KyppJi",
  "key13": "rgqrpMcZW6sZtUeMMHxL4C63EGav8A5BzQVwyt5669c6ziw2S68iWzgM69GE43x2eaJY3uTmeLK3pXT4CJ74ZSd",
  "key14": "W7bnyoYA6kZpYqwXqmfQWB2XUanoZmKWGYmetTq6Xy1QHGYDiuUbRQAWtkpApRKYLoPdv3Qed95jY9uQQj7Vqsh",
  "key15": "9xQRq2JEYXnRYJM7LTCLRdbRUUvhqbQXdZnyGQ6G58nD7BaVp32sR5qAiZvgc82D2TqaPk55dEJXdjB1X7cDciX",
  "key16": "Qvh57PnKQ5UFMY9SFHqdW1VGhxA1hBdg2FY6eSaA64spwF6pCndJpa9pBoNCJiZLv8E9kNQbSS2U99HxE3uUwT3",
  "key17": "uqAo6eqYS2DJG3cEmqiMkXi7YdrH7TzjnqtxmaotrYesLQ7NpNX9pHYSga2GkLsgzqCLwLo8Q1WKzdYT9YXAUW9",
  "key18": "3UzwS4fSgD9zKvhbJQaQScVPzLVkpNncphhJEguYkuXKiHpTGBM7DFNt66D4DRVMM6G2Dsotbu9EuxCCToJ8Vom3",
  "key19": "24J8iDU8RCvhzY6mF7CkEJHLnwWkakwjoTj4dgA6AaaotecuCc96T2UYj2s2oBEWzNocwiwhwjarx2LKxzvb7HVG",
  "key20": "42i1G21WFJJyfA1Gki5D8tx61WFYqfssYNojJgGYh4zjzBc9fKrfRaUqegcJP3FjcdNhSCquPxCxJLSv1PBuP45e",
  "key21": "oyephVDKZNbNxEf5zA5y6TJxThdWBwBZX5Gv4j9adUV3DwRrCK7Gi1er5oiKnSwa5zVvvHKukwuLFD7eXnjyLb3",
  "key22": "2ucfwXHGAQhHUc55c3R23QuwWrnFkj5GZfY7MVncauKhhRPKmQYQcQPkRxhBJLRujgTAifkcU4peyWYPTNtSADKz",
  "key23": "6ZnBe3wdDZCKUqfNWtNyrY7JYaexWSSW2gC6x2rs1hGjV6io8amRc7jwvFVyjKxDyLGi4KgS3mXBAhXbtFUytrw",
  "key24": "4NVrgDu8VcQt8VFfgLLTmCNBJfLNbH2kUs7bqpKDqCd3vDCGg4zjFVnBRbpC8pNbiLsXCqe3Hp5L2KF8hiGV5mPB",
  "key25": "2SYCTDZytZzytJ86L9LfHXJKMF32QDq9wQxpyv5zBTCMqbWus7f4uwWFhRiKPiJpPSXKciNRbvYf2cjHdTyEBMbY",
  "key26": "8dPGhN11Rg6FCCv8tEmFEqzn6W93cv3k5bUKxUagVRnA618Y8nR9cuACQTLMBvZ3dhhqw3jyy16z96TTcTndQ4j",
  "key27": "5jP6aduhSqB9nGSfmof3ck6G3AGRUmLinHwL9KdhEHTtJXaFHPpzX8ne1h8GNk3b3ykkbBDwUigHrgP5vteDZDUu",
  "key28": "4T4skzacfftLb7gZMjrYU6TeahzwXSNUNcmfvnteoUSaqMktJwtUJ9oQv9LwGTdiAqa9feNkNDjNSYk6QEeBsLq4",
  "key29": "5khShuo4jYVtkA1gqnZqEqZVJMHDpXbwhTDGVnnbsnfSqqLEbfEdyJtPewRkC3dp5Bcv4foD9dRVMTQ4XxnTRc9N",
  "key30": "5xFMb9G1XaqsegfuKvJ1PnDmheia3V8ezDh3ZbEucskXsqPk9EzbZvjK88q1gPWMb7LCisDzLfb1YGqnyKbyzDBx",
  "key31": "475yviUwKATa6aPUP9wtWHaX6q984Xdj5KJu61zUy1s5u2MtaAoeFsGNWz38zu5nBWK5X6eQ4u3A7VfNjkp1dfPQ",
  "key32": "2TWVEwBopm8wsTX1LWJpnt4pxY5eJitg4JSDLw6FqHftscT6tNm2xxYajLCceZa8TQhp1Uaum8E5kE59UpEykTCu",
  "key33": "9ftosmC7k8mrgMZaEFpX7rUnVP458iPnSKsnmeNWy9VkdQ1eeL3XNYmbkoUZTNrAw7WnZF7r2Udas1UBA26izVW",
  "key34": "833jkpXXTggpjhyc6hrYqNoNnyFrgLQJ3TUgrf6i6hLn3B7Yp145we7dkqL63BZusvndW1K2sXebgGaR7wopAz2",
  "key35": "2tpqUvG9pMttGyDcZJz6EYGkRogeqJKqAiHhJmv2KvMkCaZdPzBAwXbR9r9Zanx8kzgGpT2fpbzi6AKJyQEfdWad",
  "key36": "41tdPopTFcPnrwdhfLmqZnFgy3Gnz8L1c74zJ1jT6eZ365gCfmbcPpJ6uYP1k2Stau59sHDFgWxymFhDHAyAGGvA",
  "key37": "5mpSdaNrbCgFUoJqETt7EgC8uyAiqGnfYK6GaNd2fz9AioxDyQZrdgwfN9ndHgRE69M2eN4QT7ccLojy7k5ryppS",
  "key38": "cVBekbM95kqVct8uhZxcE34upbFadYWi3np4nen5JLXqj5AZozQb97KE9hs4N8VLN2ggVNoHvFh2VPDcpnyWr98",
  "key39": "5VQD8sK5Emci8rf7BVBDBAfSdgKTHEb2e5gPqnzjo66AKvA7pupDyEuHEpvwPeNAfk629X7bDQSpEQpU13XB55Z9",
  "key40": "51GfyFCZYZNX6mFqjFzsvdYCynKS5YsstHWcrGkDdLzv25XvGSE1VjcNmK1EwmC9EE5xvo5LQYh1QUhcLD5vZk1Y",
  "key41": "597r4aQ5g8qvBqUxH2kJhQ6DwwDMX9bSK7ozVgY72VGNnUrcRx7aioPBnZVx42tggrvM1wkpwrzWgGFyrzwwWYF",
  "key42": "2FtQzXTTGQcwN69pVk5PJSM6Uh8ZmRTomaCmXwbiY9NtVxQnVwQfBaaDnUW6S2PDgwbxwNPyPN4hZT4bLx7CRa3A",
  "key43": "5KHXe9uPmGvPmpaH4Acdcnk3Wej46y4yXPDGwYEaSAUj28c2vRuyEbhqAa3GvQx6npdbv7cSFTcefn4S8A8aDgCb",
  "key44": "5EtvUV5JHX2ZDawnEswXbxnrJDWbcQL89AnXZ88Knem6cGpFxEuBH5Cta4agC7yhdECCVuorkXQZLT9jf4QxWHx1",
  "key45": "5KmTYxYp9azV81EitWgYcF5VsdysQLzZimVRWfvut5kGPyhTDpj11q2mTsvv7UyaTcMFzwExzZjtpQPfDKTiiiVX",
  "key46": "4zXykZRozFvmrHfbK4NJgwyXaakkuTwBFvzzRsT4bmFG9r1PAYA7TgChkKHAAAx9NEE64mTEYriyst1bis7frX6G"
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
