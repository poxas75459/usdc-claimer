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
    "35nqJGxN6uvdDXacw2YBJ2D2XRZSS7vjgP7AjYaW7idxGBGZ3NKppHkdS1yWJRnknAxiFECbVHs9ALhwiShbCw5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51sB6Tfx4qjNTg1T2FF1Gh3qcKySCR4nL5b7dDk2J3AZKKKXVX9HY6fwjadrykW1NxGBeB2gq3zjXNZvva6WiA2w",
  "key1": "2AZhNKXFS2YXxAuY4aCTdxGJP9MZ2VPvoNENsbCGmKsbDFGv5xdfLudqqpZXALtfawfvt8BNWz6psuDvyJVEcUTu",
  "key2": "5rkQxRGGioumfPGQ3JyJes7zB9uB78Mn3zikDDjjcY6HhdyPDKcPEuat3Jr5i7Tv1QBMoD26qibVEzYc93raAw94",
  "key3": "5vWXqRNbTup4pnH9QSakB1LqhXtF5uSTNCkZuUzbvY7zTsChw3gbEbsXoRxNgdcwgSuvntHe9G8HvP589QXt5meu",
  "key4": "28kgYrV6vHk5612UcTyUncQwqJMMY3mJf5B9t3MkZRgsw4QLUuitqdmqDoLNmN8xKeo9StUQx1kySwr8AsRmNfuq",
  "key5": "3JjVUSWxENSsKEouyNLgVag1Xh8TjY92d3uCAYeKHAVkXMbjvSqYGjFMpvJGGjHFLN5vXShtqX6TEdbytvRkBo8S",
  "key6": "2RxHLruGjZmmGepUh7beCuZvq1RKWerUE94DxD2ukRMy5sGkwqeodY9aJppLeVLBHj4rDouu8AsmgV5ohrbYzhj5",
  "key7": "3kSe3gNQtqVcDLyRrRCohZyEDhuE9bva133xNkhW18L1bpteJBei4AKx6wj3ay4khDjWaeW3635e5uyHiVLfxmh7",
  "key8": "T2cUVYSUKTt7xw9wsncbF3igkKpLA9kvBVX7ZK6kqa5h6HJbXndDUBrtYaSnzH8gapQqgpaG4G67i8zs5PTbx8F",
  "key9": "3AdMeegvnZkQz3NZfJc2gqoLJesADEShAjbPVHaCqYcESXgrfNKPjTfdE34YKUa2yJtLoDpwJydKQhyCNefuybxQ",
  "key10": "4XnZKE64a1M67rCXWGS5d2JYr7pkgeWpgchZ9VfvuPevy8wQaRnhTEdag7h7CEYE4bWyTd2G7f7ASc2NY2cajFvA",
  "key11": "vDoaxRqeHeQr215qHUF1rzbyrsrxXfaeLYB8yQRj5c5eJQERh8vM5ir9jwxYUbVMk9Ngee1U4FX7KYqiQcJzegj",
  "key12": "42aezrr13FdfzmB5qoJNByL1szVstbsju425n9DH7JLuJziKhHdy8ETCgMRx9hpNZKaGiewDLuQeNhPLrDqA2Lce",
  "key13": "4pPLLSbjVvTf4iY6riX92Ae3DhqA6KBwNtY8PN3UQ11MaRTCHBQ43rkNPNffUcEaVn1g3Pwv6hEuXwFGDR1qNYXX",
  "key14": "3B2as8qVgfzoCSD8p28NKHPTMhfZTJ2VoH7PXZGTEFcy5V8MfLzE7Pzm3YmBPMwzDPQPnK8i22U4Lwrs7xpN8i1R",
  "key15": "5Kf7fQhcMbnnydEVH9BD4zNy6s52UtY4UNdzodRnRiQ61fXUjn22c1YWJEwDWHdc7oK3Kwx17m47L66n3rq4JhCU",
  "key16": "3ZoHyUuTuquNxNUZNRs28YcjFEngTa4vL728VpNwxV6caGnyY8JNqUnXXfJohAVV8EqqGvhbb8SfTkBGPkQuhiKd",
  "key17": "3FdpyobJsF4wshczGufio9YybYVZfsaX2Lh2JudzdmMU6mLWRpnonDWioFNvkvgxZ53WqVc3sAPpjGUdDMRLViRp",
  "key18": "YEE9XQT9dYxZjR375g1Yu35YgAvmnVXvwweqCY5S9qB82yNYqJHQ6NBRZeMmZmaxkwNhc1DTY6QYd6fQhdhKtdw",
  "key19": "5mwBopitepzTMXKwXAQgVXyt7vmHExSG3HBsSPxxeWEjpTtfpgZ7SBvZfBzmVCZVuyoevZnwo2w4oQhhD3fMUKs8",
  "key20": "4d3cxQh9BcCcfuTwe7UFtCZR62QJihMo5Bt2y4x1Es6jqDijr8rEz4aXCvWFrFYiVo8asx7iaFZ3XKMTEsE7731w",
  "key21": "2BHgUddmHSTpFtmQcWdTEwLpFXn1ufiAqLqftRhPMJmy2BVhaY2eDTFimuDFqikbqokeXxYAzE5FhQV9sfnSJy2L",
  "key22": "smhDf5MY41ayX7172Y64SmESZVMVVoBSdHvVPgmRAkd6BiHGvwv6A2CWWFoAKJHvxRWhV8Wk8MGpHCz9vmh97Wm",
  "key23": "dkA8htHJFhdSfNBMtJKUcY7SZWe6y7xKdDJcQ7hqK1tK8QMC8qePrVLSMeoBHWSm4rFrPfuaAN5uBn29LBUaEXZ",
  "key24": "4ds94MDZxrkK85gBTu5uHyEdkZjRUg8MvPAabqfqXSHFpz4YNAabZnE4kM3u1Knd7S97UL2NXrNKVgYsE8ChcQ9A",
  "key25": "5Z1q5vdRzVxMTFbkW4CMgQ7B228QjXXQWscyprjHHjZ6WTZLJ8bxNMuvCYnsRzDTtMiGsoQ5Ams5b6XtghXUtr7G",
  "key26": "3HXA5N8CtCPfv7unmBXwTfzKXc2LuJXYa9hNqQTEQva6s7PLYKgBnGfwmjoqc4sPyi6yYEYqkeGNHWgwqT9Um1r5",
  "key27": "3KvZFEAQaDt6oLciZpN4eq7p7mU3pyTtmbGWkCqjEFwYhoBnobkXvpHEsDaEWmFbBPKaDZXqrDXdJLDCTeufyUwT",
  "key28": "3wqRhkCQd9v33SBhFvQfdskUxeSEyR8HKGM7VP8eP2oJoCZn1FrVMKpof3n3ZgzzJ9e6uPMwCgaNrZXAG48x6qf1",
  "key29": "tPwe45RDQMdJsigPuBT4ZRj5TPcDsr1NK6Yh5TQbFQWZ4H24XmdQDYqCskvbCWtsF6vtRqKDXyZhPqXRDm4D4ZH",
  "key30": "2wBGaYCunNYimhCj812YfU2SjKPNDcp5NNj1Jei7BjBug2KZ61qDNesTHQxQpiXdfobHvtUAf57PR9fXxsF315JE",
  "key31": "5qiYsBaXzwmZQC58pcqzFcdGDwEpmLBQhTCDbfrdb6dktEEi6VhtGZVAcHSpSnJEoMBRafnapJQ5R7GSVms88YjN",
  "key32": "cATWj9T9uwpNaKoa5CJShVW4nFW2Y54YaCxyC2RbjLyJwVDvqHdHoGFu1jGBeBoPi6R6FBv4j9ZAzvgygXqmzCK",
  "key33": "2dqKL8rDeW2NAFLQxHjYimUtHjfygL2szXXsbRG22oUzaaAEdANPw21cEvYaFwuiJsgMRDgxYDCtT7QEW19JXnFR"
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
