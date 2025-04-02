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
    "qpZGbjVbrDWwbzzpp1GKQzugyma5JRjVAJBe78HtGJw7fxYnN9UH369x7HVbpK3pcEVLfUoyDh43jLCS1m2y8Pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BkSYEANjfxVudetrgRWvcdtkgy4cuLTZwW1nnePE8cgSTAx4LegeeBYADPXNLbuCDuvveYLcNMutQtx4nhVCN7p",
  "key1": "3g64Da6vaLj6T7AfQvx7BM8MJdbCmbZF96M9VsHeZ2Dt9E5m8B2EkGcRs9CdBLQqHQnnCXHCC6BrnsUfRWArC8rW",
  "key2": "3hoEmrKGXNt2QTbxmv5kfVGiJUCskpRbbcJXd7Bq9vhAsXAEchmKDFxmoxeXUb7rt834QLQY9aAGWPoDkQNkwBFn",
  "key3": "m5dk3tVka6vusisqi6PyRYTAxWcchx7gt7tSmx3Njvmcvn6Uuw2e7fLRYZZwCuLfRZZm2tEAS9PcPtWffhqXDBF",
  "key4": "34VVKSz8r9jErM5wd3UjnPq5ZyzMiNBVZDCmzYhmsEC1PsJ253Mju2i7Mfj2rJW8oXtF3Ams7ka3vm5ePPccZ8XL",
  "key5": "5MkqXZt8Lq1HMsG6UJsETyXzvX8m5BZZWmdNatRvEnVHCByHdfG9Nt36cCyqaRzg7VnwvYYiu5mtCAD67AWjQFYM",
  "key6": "3m5EwGdfrEYFtSSnSNZBMQb68Uo6UkozFSkh8Pr1jX9ZcaG6fRkSLQrFESHrqcahibY4vKCEjnU5eWADjHEkx91u",
  "key7": "2KEopyLNPNhDbawYdnJFPyjDK2MRz1cwg9j8k82CakJ7mYyyNvKCKv9TrfzmrYNVnWYkfDepHvbMGiMVsj7zJUB4",
  "key8": "4R7TFREbTCwaU2Q4JBqjw1pCJUigRW68xovrL3pZ6uqjskskqoCr5fQrLtK3c3PcZ7t1fdr5jAXhhc84rdg2Kequ",
  "key9": "45j1uTHFEUrRhhrpi7u2cKdK6PPLiS7ig7LMc4BkhvQ3TjeHPjVXs7kwLUw72DGFipt4EViUtvLgotCJTrFMabQN",
  "key10": "668qKbayWjT5AftrFSkeoCnQYgmPGipnrBK3VXJL12hL3ir6jXyCiNG5kWNYP9i8Z8fkrGLkDysMMFL9Z3R3R2HV",
  "key11": "2mRoWGBRaXEzWhZ6Pw9JtR41zuCAYzn41QVZS3G8q75PtRQgfddCSDKPThuqVkjsTM7XtEZrXKs57L4Pbv6tSSg6",
  "key12": "4mLAXJFJyut1mLwvYjBA5B1gUuokVRJVe72fvRceg3idS2dzn4mSQqqsnd7EbGsfbtou4AhDmy23EUxH26TJQyXP",
  "key13": "cqBoM1QkT9DeQk7f2wtBXuvvVBME1jyge8UdEHxHyPyU3pWDsb7ompma8S7sAbVB6nKLqgiR6ZmkR1kMzpV7nx3",
  "key14": "5Whe8Kge7xKAP6W6XehS3hNJPL12SogtCosTfqv4d2d8UqXBTJojtSQtg2oFcxxrrkZBXny3dbDqJKDu3BqEcHE1",
  "key15": "22hYiuxUfkyd4haAbrB6NKou9YTqqJYTyNjL8WpfXd5Ksy7ARc7BzTAe4GLhoKroygxFt4nbUuuUBtno7A4aXUWk",
  "key16": "64XynfP4xkMjhSExbXKCFDvZK8yoNPUgbhqKHqQYd71CwETmUqqnUGcEV7WkVQxkDR38oKu5QvpXPUTzaycVPaqF",
  "key17": "5xUPEFu7BwMSPLTiqPf1Kq6Fu3tueRCj4oMQbaPuztTPUM22qZfHhrStUaTeJsBXiH2gtsARxtPTe3oDUi8MvqvA",
  "key18": "57y4dH2BAyDkLcY54gsFezdW93XeHHjeiRBo5PBnuDWmYWSA9YzMQcW92TXkGmysxLvQQy62Uu5j3zJLdzfRo6MH",
  "key19": "1NSyQFsux8Gc9UzFpG3vEnY4DhTd5FTdwqmdZFJ37H3g5PGfaz1ZXbKjKhnycBJg583oK4Jpu3Liy1dxVeyKY2k",
  "key20": "YfXHX1jumT9JokYxqFayBpfn8iBvRhsMd1HTYSg8urBWogt51dqA5zogsA2RA5zHHCSkB5M3Dib1zb6pzXbcx4p",
  "key21": "2vFkQpmWKZFJhH7V5WRB9sXkihX8aubAvgc56hGRfwgCXYUN2MYGHX8o8z8fcmTQ4haw9cxv6XWWZPUFiPWrUkAf",
  "key22": "4jvnDe7aEZTfmEWgfQrvS5sXKqgpRV2fmy2KsWgNdfqrQxjdKZ2VivDSkjH5CrtATgm4FfP8YhurqW79RtwRVBxX",
  "key23": "5FbGwSzCbaTruSm4xQ1VMgFVjE2kBwARhG9VzWreH4iG1PPCQ1uBWsffuC4ohLwMQW8qsYrh83ZCZ53HbvNAy6cm",
  "key24": "2cMthX4Q86S7n6euEXGpECt2V3mXWmN92FsZxEWKqGDagy4p8o6ZTABSPXbVGCY9MwNJWB7Ar4CJMznrrVmbcuZj",
  "key25": "665Z1ABE8NcVLk4Cm4K6uvjEbY5CcCMDQaTToFSDyqFhmhxJSQJaFdPj3t75cGUdfQB3pCVEwqtqQ8HCrnxWmh2p",
  "key26": "TDK8hiQkFx9wLXk4YiZfLsAUp1fH4EhoY62j7W5CJHSJW6Zx5tTSX2jVzDK18JF7j1kJhSCbA6Q5woLUpzTTN4B",
  "key27": "ydkAAQAybgL2KhKNZoqHXDWgbkTRKh93oZSvTkZ7NbRck1oBN5uaN6tdizjqpwW5jAqm52QREDzNDTUgXRodbsh",
  "key28": "g1gmyepHbwnLpXKxMDE3Us6YBVngRFAcLfQG6Zn8BKRoDBqwyc18kazhTf4opvAUUo66QsGyoeJXV9fWESK6XYy",
  "key29": "4ko5TrvPt4KYdwRw27LukPf18sBqobqBMEDLHGZ8EnVY79qkzwexN6vigSKsKSaLeiUv49YAk2gkMjPgXGra3CZv",
  "key30": "2NJcRPNvRd5R5UbZyaca7LjLzEUuGWVwTAf8uoscxDB8mYkiF3ES5tjWJEBjNRqat7xJbPGDGtQASF7fWwAaCE1J",
  "key31": "Q2rVe2u3tB3qRu9BMTH7SHRLQ6ec7r6AoL83AT9d6f5jr2YpSn9jcgoeBkygjLdhLNCLVsQZwfprCXVXyzvGTwa",
  "key32": "517YKjjBmFxJbB14XH5z9fJve9Wf7VULs363CBbLRCPm525H24564fYUjD9Q1pB8TUbHjNGubAniHHU7hczWNKf7",
  "key33": "3Q1Y9zFqtvKNXQWmfgota38dBUGPLv5tP8jGS7TzTBjyydMamG8LnysgGsKDyrxaKKJM7njKhQdg9UDMAYMX31i4",
  "key34": "2mAFjLUoAPbgJ6ZNPVdLMoXASuCfpFC31WRR3Mk64ozwUtjw6ZyyagtGWV4SPgHJk6zxAEqKyumCb181NUXhNGh5"
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
