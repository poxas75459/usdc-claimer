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
    "66TTNjmVzKbzueRzDGmS5qShkzQzBbuFcEf9SvPHkEsttWjFpYm3Xv5V6i7ng4zC9WnQvuPGzanuzw38yUTyW7wA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7wQMTUhd88ENmLfCH14piDrB2HY7ZCLVBwYJD2kCSwdMfAAn1V2peudnTTmvyWWmwrBCdWs7z9de42kSjDW9Qe",
  "key1": "53PPU1aS7AVAqWtKV9aQAJdALnLrsbF2tgiwkEnXHjkX52TsVxvGddoLu3zJnZa4p1mxYAFWERro7HpNvRZVkrH4",
  "key2": "2GdWH7H6gF4123NrwUTsoXY8dxRYM2mAk4dJKY3oC8EGDUWLkQoid4khGGjds7TxZhGzmadWbfTnVdBzzgyPkUrY",
  "key3": "2z3PfVm3XxkW5uQoBUTiqM9XcGaf12pgFwUQKG8L4us4EJKqkCwTyhLvRoVB9dkJ5nD2Cm8rkVmcUVcScrpyboac",
  "key4": "2fKJfbGPHQ3ptVfLbsxa3acTgJADLv6Z1PUeMraniHY68m2kJgVS9hBVbP9dVejGnCNf2Qpv89ztDdBMiHV3fzmt",
  "key5": "5SjtV9RMW8fX28XUGrQTgSPqkGoSWMiGNByh9PfJbxSnrFz7LyTFFhXFzwESEZisZxsYDYs1uqpENVczfNghCsKh",
  "key6": "51pBYbbJuAGMAtmWaMahjjqtAQZsdoTbEVcwjUikmpjKYyNYdhyBKHEAmZLzff7gJEPT1pqyYTRBsSWcQBkLCHfA",
  "key7": "pAW4oMtz1Vb2CTTk6XxQrCMgTDFAzHjtFdkfFSJQVR8QEGxnfxr1MC2nT66kpgCVjctzDwyqUm4eafGgFiooiAq",
  "key8": "2jDE8RNRXeknNGdwxEUGzXMsKb2oorXfhJB88T2u2zQyS6CrV3v9BzFzkGGENPGohkKL782T7D4QeeMRkRiU99px",
  "key9": "554UWhJpCNgNkTk1vwQG2DDAxjcNhHWAQGRbQwyHnfMK6kxSNSfw9NDwM8sSXFLXq6m4FUc3fiHEufqs8sEqLzGZ",
  "key10": "5XDUeePWCrSCpWCPdHfV73YhRJqk2tKZbM4BYReAacGmH5RWDquU2WXmEVYnhNPvg18966wY8tREBXHEgMY3Yzts",
  "key11": "RCxA4GRg2No3ZPLuUUBjBg1ePXhdtFviVHt5LXxSjoJqewv4SzSgvkTBM9ZXMQ1kZatENGh5LoBusvZh1EqN9me",
  "key12": "367zeqbRg8a489qC7G72ufhMTUSXziSe9ijnjayW7DqTehnVvsPGqT4f4wwFb7u9qWqCvHh6fHBpVaLDS5rEo1mr",
  "key13": "JHWEXn4vsHHCCgiKNhrcygHtjVZydFBBGdGVcDwnYVYnZjbyXCLx9Bois53QRgpJcR4xFtwDjKuaSe5GqiMMbDS",
  "key14": "Tb1Y5wjYoBFFWXo6svLnm4tHNsE7TCMLadBmZUziQqQKvYSFvAHCMnX2HzNxNNScP1qWYrA1sQaAaaM43xqTehh",
  "key15": "65yrLehENTUcmr3iEv8t2v2zeXPoXjh4UF4YySpttWtV4wdmoUqBCvXK7ET5gLduhfqoHNeSydvG4K2MLb6W3yvG",
  "key16": "4ArkrCDLhAfPzpJDMLhGgtbjFyp8yL32w58P41jxt6JDQ6HSgJTbXcd3CjxQ2wy53LXKwJynHDHrRNv9qFtzWVCm",
  "key17": "KAXpLzLeGfUvthnMN4wEywP7JkMrGnvusZeJC2H7EKdcEPt7S2eftjY68pr7tkQ7scdsnbkyxoKDDEXZwvT2xTZ",
  "key18": "5QgfyMHFC3nvR7EEeVJzCst9CVVgb4twKnvBXqMDmdbFQXPdKdZyiQopVfsTGdvUTcDjqUb5ZkryNG5B3t3pBhqi",
  "key19": "2Wk8j5kvP3SAp4ucr4zkfSQxAsrminNsVvNDuDbJ1er21qrL4Rs74NyeAK7A3AuzbZ3frJ5o7e4uex5zVbzRVAdj",
  "key20": "5y7Wox6Tyv9nbtsXezx32FD89PnVqkH1ycMEXHsWVGc4Z2NsTzzGM3PR9myci2Agh7piUqxCbvQFU7EXxpezGZKN",
  "key21": "2bpcfmMTqHrkMQrp77yLbHLMa31tSRxpKcfQuWzQoMppbNoKig6mPguPtdbnDdBdzDFKTyEVuFTAXW2RQHBke7u",
  "key22": "2yNc3WfpKfWw6fLLGKGfvmxoc5q1bzkqpiiZKvEEUJPs15i7M3995YvppSMi5ZiHVQ7UE6wbxef9mUbdMwmgPbXP",
  "key23": "3Ai7T1GtnyLNt4xT3nD6BXd2Ek8jhY9U5PM9igCn957qsitJtkRhDtw89hXRdMqNRWcdj6msiuKFNpL7wsdPuB7U",
  "key24": "2GWBoLGH8UdYNjMU2ENyeTbcequwKqcxLNJrYe45tzUVPX9C5sqTqBJbdtYHFiwUxMzPA1bRsE8FbgHk5ayUutnV",
  "key25": "2CgT23ztAUV2cJF5sKshBnpTeHqLB9DoyyfnkYFsG4vNycuct1EiEHkjKBgYSwnatZ8h7A5jEnQn2HFwEj7QouGW",
  "key26": "2FskRBfD9X7zCNLm4S8Vz1A4TgBnL951RVQvmLaDFM7onjb5rJVc42hVx52SsZwoXoarGp6jCxVBytMxZxaXkujK",
  "key27": "4A7o9coybS5MVsW15HeuDAoEahhwD5ipWUq9tP389ocNEGUftD2iV3GjDXvvyhjLpNyohtcCGu2uSuw7WfLqtLaq",
  "key28": "53xDvcSqD3Pz1URYMzqz8k2oGNyMdgiNy2RVoA8TFzJBz2Pbm1m7s4RfM7TwtiZVj4K8hMQUEPS1rNNhThuQWmbM",
  "key29": "55xgz2yWM4gaduvCbHssu3fQasfU7MkWxWipJfDJjCWrA4dACjjnjNWSJVKi9Rt2Lf8stMjkWTCYLhiNftfHZLgu",
  "key30": "5zrCP5QphZ3RbE7YetrLtsr4m9nUJRsJRuAcDW9kBNQfLPRKbREp9MKTH8RjVKSSSJ3kVdHpbeGU24cke31Y4QcQ"
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
