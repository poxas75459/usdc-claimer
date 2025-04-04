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
    "4NSN7gbu2wJX1hJErbuJ296hdsd1J5VhdLsHwePkA7fouQoCbHWTFNnQPPHCQYJQHBPw8Pegz2XwngvjpV4Nu3fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5esNFmfsM5D7Dh3jPZivvXTPCvKY6RgYZKWVW14HLkrmhTw9s8f76YwwJYbVG7hvBW1ZgCTyB44FokgaSUdMkm6E",
  "key1": "3tHU7Jt4w2GuiEBTjfGcQGrCsSoX9U6DWvgYCZFqyDbXq7CZJFVgYmVDmcnpJCEm1gxopV77vteYnwSjgQbmk4bL",
  "key2": "23hVLLoxMhWVc86MK3hTccQdyUnuABb2H3NwHJqDmBwCCwNNjb7gSUSfbHB2RFtg6SCCwaU8iLH1pykCe7vP6LP8",
  "key3": "4eXUTi8svsFLqBe3qg2xNW11qWiZ3cawNLF6MFTFD5FnwR6o4M2yjJnR7DhPrmUG1NvYjiau6miHfrNkL2gKw8hq",
  "key4": "2HnSCfRXviHGdTjWAVifLRJfyGuXd7eYwwELNqLGrHaoMJh7pDna2FK2RY7iUJWJXss8zWa9SjbUYCkGWdQmzt2B",
  "key5": "5VHT9mpHKBEUqXrJSQ26sDvn7251PkebcdeAQAUGPsmioXiC4AynpBgBdFrtWiyJFpiu562m98x9zj9AsrSwUXdY",
  "key6": "2EV28aG7gnGeAMt8T3Kk78txpG324UnmBAWkgrN1VpXYUVPQkRGDCPWiz8PQ5EQKEz49AvjGoATbbShj5H3cuCTK",
  "key7": "2kBTiRybcUVj7Kfy5iqxRfKCatbzhgW3YaWPsm2pwLiXJnKD3xwbE2Va9e68i6x3N9rgyB6fwKmZTgcYKKhSUwMA",
  "key8": "bStQBE4HkYq5YgXHpgnT4BuYzWM68dj116WzAJovLUqrDX3tMkUuYFyXnMj28vXFKT2Vm199hF6ZuiETW7fq7Uv",
  "key9": "5XceBxGgiakdnxKVQ6tPD93ULJW3Lc3Q2483nm1yip5jovKv1pRUiuPR27FEVQR6i4891jbLPp4u8v58jAf58xGV",
  "key10": "5CvXn8gr7QCHRQSmFEhHpGKPWsyyy3S29V7WDT79GDaATnJXdu1TS2CFgSN7DkVjyzhcwm4LdTi92mmwpjeFjQFr",
  "key11": "3XEHGr5LuTHAxQ3zQ6Eg42B4C4CRpez5D5WM6w9rzk9kN22kX2sathxYGVzumf3UcwdGxoRaXnQzT6GnCZ6iSJvR",
  "key12": "2Dh4pCEmyWEC324U4GXQF9wtEpriueGBBTNeCAeNyjpgSJTjbatjFpz3t5HxUY6iYp6msRbftiNwsFe1EiaPNRDK",
  "key13": "LJCDRRwxBKKJ2k2j7k12wSScthnHhTxmcBBZ8cq6zX5JHcevSCTTfK3L3gT9GNSQtpfbJQLVW796x7LmGMLEAF5",
  "key14": "5aH34oxpZGQfXngbbgyCVr48rNg1eF3xE7XL6F8pN6hwAJPosZRt2M73dL94asscB2QW7EmhCnRFem4wN6YCwssj",
  "key15": "3SFaFZtP8tZd9VQQ8zr7HwXkS8D8EYwSNwupC6djXgzMvdpG5Ey8GCZLmL6qB7rXwhT5f47TixaJKw9MxFxXask6",
  "key16": "4xFaeadkwpHMvjwk7aaZ9KuXAz4TdjR7H9pAoazU31GYgG9vMZfqBVJS1Z8XZ2gCVMt2DPQJd4RXW47oGL3ZfGnK",
  "key17": "4MbQdRfWWa897foyAeyMzu8amNy7YYkVeupGVeq5H6nX3fhNRSRJ3LeSingcdH3gNS4h3p6JTMK2UC5vBANoGEHc",
  "key18": "3J2NeqXUCdDiaHQEqCSaMkJ5pL8uY29CdqTnrhvZcRkSwkPKptU1peUao7HYwDur82BDa8N7Duz5YAUGx2Hz5eQ2",
  "key19": "2FkaY56o9FV77dm8cNBydoZai4TK5dVPmKKbC4s3qrENidiNbiUNcoY6m9ZWJQFTPinV7HfQd8gCURg5zWtCyxoi",
  "key20": "5FCTNtwrXiefLBoCWzaCCRWJdJTbkMVdhyZ8mhNyYQxLNSjzNnetyfgFyususGewDbtuh5tFFVvh6Fdjw3UYEyYL",
  "key21": "4xmDRfDy54HpPxTJLkUi5MDA9sX1mjRGnvLQHsbGwXXpjQdPNJksXceT88rqKckgdZxabncPprSJCB1upLLbknoG",
  "key22": "33T4faZVQW8yqri5WSfLyYde4kE38bVqfGWbnynfruuAN8QueSE14m6WedcMq3HcmuZxSCNmauN1ECqDo7BtBt72",
  "key23": "3TLmdS8BNjrhi9JJQANbGBXmVnnDunLEF2bCE5ZXXPY1M9YNRts82KZ5FxSZmnHjzRPwScukt31hajJf8K7CUt8H",
  "key24": "EPkjELwTNXJPdCFwrFCWt6coAQcZXQNp6SmjUqgbYNwxYaPUnjz97hLTB639YhQcwQ9dwSydfi1aJR3mr6U3yRh",
  "key25": "5Fh9a6xUjmbGUkGot12tuD6DSDQaaqTFBdK2RsWuysVoejn8jgyDuY4x3MuFEsZ2RfZFGia77uWwxdVhUdcmUtoE",
  "key26": "4KDFCxaUs5qrRPan4VTHNYQcLeTyYuKdd2Q2na5dFe78DMFbBG5bkjqCrWVMRvzqdyEbZnmFN2Cjj61dZP5URt8R",
  "key27": "3PYYuTfbGkjo5QUy6yvAtqqfkTqeoXTvkv7F6C1njQM7wtt1hSkwingE2PZkGJnrQQckkRTAaD2E8w5XCiTHndPC",
  "key28": "8ybwfm9QGAhSYaeoffZrLhq3qfWAwuSpvqcWXcVZ9D5tRJZFWiCWTUv9RfNonERhv4DLGuqHzND6aS6Z1NEEyYD",
  "key29": "3x8Xw7TYtzQUeyFHQo3krHqAGRBmFsT2MpPtLv3pChbeRZFvLw7n9iEikLatPXKvNkKTQkJoWbsVNi8c8dLE21b",
  "key30": "3DEgjaGaahPqw3ew7kskqSKYxbVrfy4voVHAexoRUKTdmGMs4hwZm2TRPTVMeveb4rLj1HjbYMxHxtqn8AYfPPrq",
  "key31": "5QDiovEf1GSgUhNxautMQFv863HmSVQCHmRKR8sSAMd7WEadjk166NxvyPp4kJDATpEWmAZvTkxLgbz8j26eSL1S",
  "key32": "5RBvhPY2vFtETV31zqopUaTeHXaK9RdW2RBxNRVnhAVKRJE7jabZ5jphXK2gLRbbDPD49oBqum2KsiR9LKn3osYy",
  "key33": "PjRTfsT8UvVd4R7Jzy2DkrLHfjJ6nuWM94SotLkJBngv1GhXGm5Cdfu8PuBgGV14NSEPeQJz8GKyQshaQy5WQvx",
  "key34": "3BsfKx79TLnjzd89e95Mqm5GEugML1wrP66bEspdk2CHVKWwFQKfrSNrJx9jLWv9mAq3rqa5vTwSepvjPPxtMVtZ",
  "key35": "3YSS5WVxWsfCs3ucrE8D9KbrqrVxVv67ZKh5etDuPJyc3j6Dnu5aqwbPqfyB9VZnttMstjSbYsYZE2Tg15KqHN93",
  "key36": "3MD4KvX8jqfvXv5Au3QeQM3FufsRGDwzDk3xarNNKpnWzrShpUcvTE3cXaPfByRLBaagAjdxyLRAFV4hJ1MhPajK",
  "key37": "3Jc9m7kiKk3xGZTXMTnh2rVhEQuuPkioW3gpGQMgRcAfPrCZr8ZuUvKcgUuYr4MauyBpdsL9QtqMiNmTSmsfYf8g",
  "key38": "4cKxXdJE3LSNRxLpqfhq2FtKiGN4ZvDevFHwrQDaJjsrnTZh1umWALgTaPfDWhHV398gANXdYi9YrGNX1F376Z3o",
  "key39": "a49rdcA5EW3z5A7uHSmmuCat2s9tYAHvVVSt3bHpvryPa2xxp62MLok7uDyM7zjB2ysYvbDrUML3mtpiEikcknm",
  "key40": "2Qw2TpbrhghgqRAka4qEEE95UYsXNmpFRTUKAgKLVcpxpg4MoveGjh2kMnpxMveMQYbuKtPEivHKDk9berW5Uwny",
  "key41": "2dAgJFFvJA3ePB4Biw3xwhVRHRPXeNkmE4Hko3qHiJZ8X7hBCCoEnzMvBYa2WRY67NMpMBrYMcLTuCGujo8nwEfL",
  "key42": "48a58tWCtMfZCwpVV5FT9ELoJ1TEpdK1RWTDbEJnp9uHbBJ9JzHGvEUjidGUncxfS8RA3oxrM1tEMsgafGudm7Wi",
  "key43": "2qnsZYSBjyC152p9x1qNjeLx2PbRCEiLXBWJqTZuoVKqLPetAuj5nE99sXxequSxe1L4N3casiSq222wJX2HWcrt",
  "key44": "4Vo4rXMv8m93UFujq7wg6dj878gPfRbAARz6xVpjb7ytFbSxm2eYbjZG8KJFTu7HUSW3irQyiwrLEsvPD6v9QDsM",
  "key45": "2sjDvPdJ9pdcJzcrbFmZgN8rXSuDacK145MdFXS6S5KR25pTd75qSJ3puX7afT21MjZT8nmCuhRjRbb83PXgM7ju",
  "key46": "3SCqBumzmPgPvjAF2S4bg1W4bZnYqbLySAxKq9Xm5kp1PUc2y69NK6upfKa7MpAHvDF7u1pRwcQA1iUMx5sa9Zk9"
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
