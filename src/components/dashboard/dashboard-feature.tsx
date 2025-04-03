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
    "3b3pKfSJHpSiUVJqzynB3c28C6TNPRh9M3YKL5kxXPkq1MExqq5pGnTrsNjo4LWU5jMSo4rzwxKYbx7awUCJSK1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmRsfmF5HxwkP5ohuLPhThrDjawznBesBNXntZXMwY7kFCovY5xPm6LsGV6HhfKaMgBMec8VNi34x8mFjAPCG9X",
  "key1": "cCjiLdUCQFdbCDm5DMiFg83QTBHArD9xNKXXRC2u2Af7LZkgcvMdZSGkrkZ8eFnM5K5SSNcXcqFaSd7BVDxodKb",
  "key2": "2kuikWHbLQqnTFqPFHaDSSga436mV9dCkrifS9hMqKxLfrDU7LzLLGUkgTFTBvYLhz2H6TDRF6LzWW8szYoPobJP",
  "key3": "38TjHHubaZX575gYgd8PRqjw1cGXpZBZWWrkyAgKK7eE8XBgkxF4k8h4gnFxon6B8k5fd3dXCtotZjh1noREu7mY",
  "key4": "QMF3q7htRghaKqjLoVtAQdhmQ7a9rZthSVdoy7YcEvDb9ZvnHTfBNNDyjNitvsQwNv4zJAo4pKBvRWe57AL3g2P",
  "key5": "2mM8F3apq2msy7SPUX3d5EK4cvhv3wpVaPqdAgeHZAumAKRx5f7VYq3UokrKRQcJ9whBQy21M7e35zApx9GkhASu",
  "key6": "4tL4d9RUQic6DPkW7pCx5HCnFpPqaqEGBAG63f5hDYtYNewA8SxDueQYL3Up5UeLjEDi6RdaM9s1VwUK9dvy1A9M",
  "key7": "XhyZBHoFCMCCaJTmymgsy7biSr3gzmZmNcFYv7hdFVjqdYcPUB5TT6ri88obBKXGEoyYkKpvnxkV549HZJdbdfQ",
  "key8": "JJdfQzzYaGQhojCeQhxCds98DKmNeZJN8YiHV3bEW96Ztxvr5ukDYAjpBK8XrSmCpovAuWT5Gaj3CVD4QyqjHNe",
  "key9": "5aWRUgsSCz86z3SAnHgx6nwjo6XGFMWJkj9srTzjb6dLYPZpzdboG7r2GNoTreu1ZLvdu5UqxfyexmawKmPZB1hG",
  "key10": "25kv4oW11iXen4aB1NQQtWr6PrRTWyWi8aA7ST7DXUZ2iv35hZFSEckd4svms7ap7F5Fb1xtfsjSZN2z7fxNRwqt",
  "key11": "419Q77ykUCA1nSohpv5umgoXZTCY17DEi7MDf12mHG3Eve5UFgRLRzpUo8arrFKFsGpS37gb4jo9xQsA1kLswZwo",
  "key12": "27JQZnm3uFz5gtjmz3A3sMJXJ7qRv3Wpgi8V6sBP8aCPSyynUdpC1pEVZyYWRo1fyCsbSef29in6HGKqbQLYg2jA",
  "key13": "5D8373URzsUhF7Z9SHwpPR2J4PNG9de6QwVUm7vwvSoZiYgwNPmV2okstswnPZimMyWseeuqcZUPpnGH8kCNyQbP",
  "key14": "2MWdgaVYZus3Zbq6Ey3Zcsd57DFLNcBBLsG8ACPqU8dsDuYnDu7qodqRd8kiPL9VpPiGbcVVMCDuYxBBpgzne6Zv",
  "key15": "2gk3JH9Z4nAMgaooJ1yPwebmrkbk2s33HWnkQ9FJQVCatwtgrHVJiK8N11LVpGe8DnZMFdQyUZAMFp7tV899qjm",
  "key16": "5KUazZFUTjtY1VJo7NaMXbrSGuuL2cHp8uQsKeJfGscp7iwTCwbo1WM6F3XfMiBgjgCj4Sdn4sCLnvS3isNmQuKm",
  "key17": "3EnahsKwhuB2FTXg6Es9sjt2Q7Gc2qNFST9wgvufHhhwRFdMfKzYzJLvcGWZt2SUEoj1DEB23bgSycCGyT2HpyZm",
  "key18": "nGGXeL2w3tAjg5Ddx9LDsPeqspUJzpJ6MSTddtzkLWwgvaB36L4ZGCn81rTniGZ6C2z7upZkCQnrDEzs5pJP3TP",
  "key19": "2S27TSnY8aVaAfx7nt99k37A2j1jPc3X8fr9E2UsK76GTXJJqxAueSc3cv4adRDiQq67tkeBSQeKUgsiBbnW4Ghz",
  "key20": "4JRwF29GStLPZ55gAdnPZ6Yvua5RNFPwhsGGuSgbweA4osX8ABjqa4h7HXmxG4UoTY5Jd2yabaSKbvLtes39vz3G",
  "key21": "bTJAWp2ZYuDVigNVsLph6aU1V7gcu78EmyLCJewX5zM9Jp2dTuRFVQbgnxxhDEad4pvuGBUiWTufzxCpTpaoDib",
  "key22": "4Cso81z9ygkjQz93wUC4VXybZktdGEWt9aFUGJXqG6uKf2ZpZDSun2ZBjAJkrQYUdV5wkKKgRuGSYPQKjXwn6nZR",
  "key23": "5pbNPudMPXNvJzCbSSQZ777zaAHxbwxjUqufLQDcXGmDS7NFawZHM4A8v8oKr7K5F3T3yRtdSCjzXyVQjBG3qE8B",
  "key24": "56arATRopYmT9Ar4k5aM7Jao5Yq2UKDsnrdZchLyMC43kzAX1pqsVY7KKiZKVn5YnwZ8ey7X6eMYdbmMW38TabwF",
  "key25": "4coVjDk9Xu8K5FFujwVZnF4shfjDQys5rbWZmnNv5h93UjwMezoXvPAhYed4324ncBdVGB2hyXxvP7oXvQT88dfr",
  "key26": "2LxNY646mULeuBy87kZ9k3DZDHxfhsoMT1RCezwrGWah4hrveL1dAm9gVtgRqynTioPKNbhdx9eWknCVcsLtQCDX",
  "key27": "63vwgh5EnWDJ1bY2Libxi7XH8TGCLJAQTD3QbSYMG2LmviDbrej7T3UkQwaCUQvx6MrHQG18pEzLWofbpXnUTcF9",
  "key28": "26oEL14j44THdiRxAq8wnYpLCGw1Sm8bBTbxjJu9vYjfM84J7f2VRkVeFjZLdzQitYzDNNnZKQshvn5fM8gdJncY",
  "key29": "3WmJCSuz4MpBtXP4LfS1NU48G83Nh4LxuZxb7zNyKkW9ou9T1kNLz2HG1atNcDT1aNmvZbKpX4b3WZsR2xyrL9d",
  "key30": "5mJ9hVoxqn8bVmK9XB9XFoGiR2LGnFTTkPaDFvGLx6ZT9hcZroe2LJGewVB85rVnGYP7FwbFKb2c2TWBn7mSoBK4",
  "key31": "3uG9qC6uX5TFFp6tBRnUrw6Mbcf5ZMCseqj7xe9rYAqVHwhGNQWTvTmciGLwK5QcN8ES49KfsfPejQo69wzRnubj",
  "key32": "3jWoq5gKCKvdb6Z9ceJpubwwUJeFW1SzFFxZ1ftDWHQSvpP3bhnVYHPHvZAiQcb7Hu6Ax4fEyjyud9k7cuKXfj5i",
  "key33": "4arNvzDfuE1tnHwULAKy4PCpwb3tjcHX3ctHf7HHPnddyXH6sm2fz88PNcqapEURmXtXB5DR9ZMDD4skLRhjNWot",
  "key34": "3fU9aSD5Fgk2zcMXk1CtvaiWkaF5Fkd4YbCdJT5neZDfie5NmTFF5yWRfUhgDsygkp54rXZRgYmFqcZTQ7VwudkJ",
  "key35": "42kJ7YWykBURVdGJXve4SJvpg6ft9FpJPnpSE9mHUX5zdUebKCVeD6gcR5XZxu74tf8Mo9UKerdBSqwC6UowRuP",
  "key36": "3pa7tJdDuF12SAnAca7BnxZrHGnJWFHszmKCCsjUtZxDcGUHdMp82kB2br9Es9Hv5qAr6hhuAkvvYezSWmFbHMFM",
  "key37": "4GpusptA3ZXNSXj7NJbDXefMEECimDLCJLM2hPWURV2Uv8fWimRsCRagtCVV9D2VSVUHSQnNXgKNVDkeVMkR8vDf"
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
