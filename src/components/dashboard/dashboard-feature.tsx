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
    "2SjjZEY4BSvQa3dyQcwC4QukTRYRhxzuaGgCcg3GHyuxcfyNWdHA2i3MNMyLCkvLUKQvXz2cgMhEXpesMNHw2Kiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QWfSDahtvKpopSpL4Q17u1Hzuu4cQCtovyneLCXACv9v3ftTthbc5aZsTfXriWEGvzK3XyMEWoeFnrtZEXRN9jJ",
  "key1": "2bFpjTdTb1gayjwUDk1scLpbDD4utRFqVqJKhXid7ecLNUeCZGkNmiuYLVJaQQy94unWyVmR6PNPqVskNHAb1B3t",
  "key2": "241hxVcYyM2JirSjYRTBczz2ZPsHUFVUJetzHkRWoyndZAiRiFEqJUyk3oSn3S6Lzxqe4FyjWYNnZUMQWPfFnJga",
  "key3": "BqSbVD8TRZx2sSvt6HkSqHQaZWS2L6iVtzFzTtew3AGKUXLPif3aw74xaxD4YRKfQATqw1UfF69Dsqjc1wKWNLi",
  "key4": "ARTTU6McFh6u8Niph6EnRoXseLeEaoYgqXDKFPVQuQSNVBPRTENxTvdLSLWUL2XMnJTLL9zFNiFThyf1fizwcfH",
  "key5": "4hDGj82iwekB7mtgwhqxt9CyPQaVwrt2XL8Lv8vchUkcCYzg6srTK7C4R416Sxvn5NuDzyEahAxGGNxpzdidaiBE",
  "key6": "47bRsFuuRhFFYVAuBQsRuQgMHtGKBTwj41sQdVR4ATfJsjFo9fu42BveZYZ814dcfzGQNaQiyLZRMA4Wpfo5LUMD",
  "key7": "DDP5A44KkjwGeBWc7gfKjT93TrtCckqT45mvY7FVKAHBgkqqvvkFyaEme875CMp39zNMSQKrbbAWDFVMcpL9YnX",
  "key8": "4BfJm36e7xK56YYu6Y6YKJWWsqEDJHYrXQbXDUo71G22rapCEzxYsw5xXLWdoj43RQZ6hwGbfe1Epm5n3g98zGfs",
  "key9": "4jc3x4Vh2WGftBP29VJ1PP97zvFWAj8ZLzytb5djhKk3cRN1coe2xPqUFF3NMrt1jiRp6mCX7n3CFVRTfYBNTWz3",
  "key10": "57QPLGBniBNfGvfkRYPW149h7NgQhA6uQSQLLhsSrZQfhXRmeLi4q5QrDWgWxUDzyNm4EQvZNC245doxVeyZnXr6",
  "key11": "3yLuDju6xg9eK1M1tcJt4V6PerULzmHZ7DQFyRv3BxomktHSbuSKNMt6ZUdT6UfuChBb631Px6frc9hTXrvmpRTr",
  "key12": "22SowXRq4wNeAyemgs6r77SYRH5WRPDxp7NfUDjk8qsMQLnthNtcbHmXsYd2W2cEKYXUWmN24GVm7vc71ZrtAQ8F",
  "key13": "4U4sWEJjTACWpyMRZL2HKTQ5G7xSTDeWXmpxaj6xULQERWnakpPVGG8M44g7g7Zp3Mc4ybqKGMkXyn8s1PnLCLLG",
  "key14": "iq3HgR99dmb8cH2XHCRcnUee8x5YMB2wUtfQfc3F6VyYaTaaHyfwV519swkw5qnZ9FnrftxRM4fHWfjy3VkbzgX",
  "key15": "5yQEk6ii1onshxetZtM94qeof6PZjWLvYCQ8t14ZakZgvVyRKmgWfKzDiiHeApoSHmVhEkv8QDWtbsZrxygTxGfV",
  "key16": "62a894MbE7xASvLHWCHoDra63uuofHiHWAMXmBRHp2fVWa9uUHbjtXqpooA8nKt5LE74gLcdVZ2Q6hW2RsHxhsBi",
  "key17": "3tCBrKBbang4TrH57JaYY8s2pvj1gAZmCHzUK7BniZr2DfijFQXfriZN1NfuPSZ97QTxYMAse9iuu8PajzWxT9u9",
  "key18": "4BpikVHEppZKHx8HiSYsLanhQjqxc2rBoM6EESLqPXgtR48H8Ja9SvNdcRPbE6cUiw7t3adVqcFMfPvvRJij78Fp",
  "key19": "5wa3RrUqqwro9RfSubqYtUP7rTcNu1cV5L8w26poQWxyRwjA4KSUZtdcy2vuMJfqEM1unx7BnqymNx41edPH65wy",
  "key20": "3vHtPNrJRm55fYyjrXzzDepcDLZ47ewFgsuUfNoKSuy7mG4yt7gQ8iZ7Fu3mirPVDW6cR2oVJUksH8PYpuem3f4g",
  "key21": "4Hr5wKDDSfbzDPMBFu2g6xVwy5QNJpMWuAF5beTWRs94RfVz8GpjVSTMTbzcLod4EFVwLJP4NX424h1DgLQYz9fy",
  "key22": "GJYPVnoCNG1uaJURgGYCiTjbud3HrSMT1tdCZNWP6kkdzkYwXuKs39LHeohU8A7ftb47EWGY8eiS3hDooGCR26Q",
  "key23": "rvyixs9RvrLoAJdU5ys59H3qPdMy5fKoNRYxMkH3TZcePfBQqYvKsrdjG8FeXBhBhRPpXo7FCDLp3hK3oUoA1t8",
  "key24": "4oXqdBAtQ9dsDLEXDe9z3oX8CnvDDVWJhJMs1At8Kq9ci1LNGTNFC5gcayFJq4ReYuP14dEf64XiD2kSnCBtTP68",
  "key25": "5nSwvLmMx5dDwaWsL4cqbVNxRM8AJFztuhkbzpaoyv5K56bUeVmqcoX65QPpqe386T6xa4Zvwq1ckEPhjmSt6i61",
  "key26": "4PbEmwiz6mUttqhkM65uLVu8VkXSVQ9kA5fzc3NCX7cxs2fVUGuZe9xbFtVtgysgtvifEbb76UMDBnegdmhR3CxG",
  "key27": "38z6DLhAiV1uhgz2b1ekzNAJtk4tYMsKG3xcdgN8Wq8akDUdkvBrBF62AeZQ4Z9QAa4npJW9em9AA7zpJp5A6Fq8",
  "key28": "5qvnRYJrc1gEWUZKpGym8DbSRYrmgdThQcP1nC9xXJCg3i97dGbu7Wh4vPemr54ryq5U9QYnF5cKzfaZ3aLqRHHi",
  "key29": "8fpJfYyZHtWtwoQJEnN5fSuDjwxTwUDqPv8KSGDpNDo7jXY28gG7mYuHfmBf5KYJQxozUA2ENoXmfXHBKQLCi5Z",
  "key30": "2S2mxmMZidckPAAywcyi1h4jkuqAedshK7naK5UfMCqEPxM6akwBFkHqxNQijrGAhzCFrKuZz2e5F9bU5CQ3awX9",
  "key31": "Bdfac4Fdr5v44BkUH3iCXR463HNpnnbSTsUfahcQo5R2YhNWW8qF4SMsnbDL6cvM6QUDdha3DNPMu63pKXPXYMV",
  "key32": "4f47Nug3JLiBNSk1ZL2G1YLLbmM8VaejpRNzr4HgWed8XiQmeypkHutkXVhFj5A1jHdAAYDUCUmhZEmw4rrxDiUB",
  "key33": "5zmya8J7hDRUyp9Pn6qBxpFHzMiWrNvTXtXGPv5nAaAtZkHLNYuLobU31G2FgYNqFaLPd9TsPhufa8Az3XNVaVTf",
  "key34": "25yfaYibHhVwWQX9ybUd7rHLz3yk6THJoXJZCCX4zT2bBtFNaApjBbvsMU7HYetwjQE8Y2MUYTbjK6DAHD82zEcG",
  "key35": "3nJ3QZ4oVZsH3aPkV3o3tEPNZM2n4pgFsqA2LcCiDXPAybEEq968ckv6aH1bv19yWYYV3vYRHfhsUdUxaERP8ppQ",
  "key36": "2aNK6awsx6psfWrDQvz58eXkFcpeTVPM7i4WzzM7hmzcYHf95EmftRjZztJ7trqSDbn97sPhjqLE6oqVfCf4t535",
  "key37": "2tioPhCeUPpDRnPFGeHE17mHgYcT8zYA5fcbT5sWkpKvWbMi4jfsqiYtwXZTvZYzxmwuo2xq5iKHLGA95vhzwMtD",
  "key38": "jemmALJuzV4cpBHYqYPg9gQR72RY1UjFkUUavYFRcfc73dC6YZuPks2gDn71dKyefSoSmHHvLAZCsgCHkdzFoqm",
  "key39": "ueBPSK6CfvoDpEPtn9JDtSYo9vywNB1F8CSQWSyyG11abdsFH9hyrj7iXoPCqka6Abhyg6XH1dcShbj4qmfa6cb",
  "key40": "5FvPoghyEc2TjdHCBdSfAXi7ec3HiWKSfaKg3WtQFwUZqGdEXQnutxAeQ6Dd3nWvkv56dmQ1FcDPQcUnEAXhABEP",
  "key41": "TVTnutgpR4jXXto2cQ1ms2pYEW2uhJMurMgo45HxEijMg2v8TmcxUF5ih7v9SawLpE2LpK214PEKuYpuugPUSKQ",
  "key42": "zrJ22zp6aaECGqbGbjaeqGVnsCb6Qm1ccWaXNeLtM42y78yv9KeynTGHuh48tKqoC7UPqswhvTx1zKZ9LDFttMB"
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
