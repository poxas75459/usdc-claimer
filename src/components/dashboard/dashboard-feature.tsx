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
    "3bBpN9bBnQSWfK9svXQmQoJJGZ9BHxhAWbTFyEUfzE21LcJ6bBNB3UyKbf1BMfJKRDoyMcuR4rGXWhHHYZWnboBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkPwPyevrUG7jwEQ56U1iwZSrHW5CzracpEmxoKSoFv87iH96QqH6RFaaf2kP1u5G8JAhXg5sERRCNCczFJbd3T",
  "key1": "2j9XK4a4JfxCe5SWuzQkRAzJDwwiDWJGF73qiGfS2RVH4eGAo8oP5BWAem2EKzozAJ4Xiq4aFYtvUay19coMzhFX",
  "key2": "44eCbxFgr6RUuudPYWyTgjxdeAmQ1syfdduR9LjSuNLfQbAVireM8QLRQKDYM5cLcJeTxG9JNvFGPUAjotuwRs4R",
  "key3": "2LPQDPCXXF3PVA3hXyBGHoqP8YciCgrBemZVX4TTx7qbbHWkYYAcgZSBVRty2SDX5L631KfqiWWrDRP8jW3TTUXp",
  "key4": "3KzPz4ZHP2p4q1MEnxAhPwWWUDzccgGWZ6HC1h3bpDRpfgwN9BhbQsRveR6nWqvhHTvFRcWBSRAkjAVjfWLQFUfC",
  "key5": "7934Pdvssi7wRXehN7ecgx6K1XvwSuQbH75pukM1mWTysXgcudvLMxRdyxgjpCcCzmYzG59CFX9qN9YiZmnkvCR",
  "key6": "241V2okUkB6H3E8B8jtx2i3goAS2o8Lu7rstHzdGci7rB5SvCaKJDcPAXhCK1MpYU8P15C7WAE4nx1WJciTP3Dwc",
  "key7": "5K15sD7DNbPwbgB56yNTgRrjuaQjR6ZFzGZBiJJad9xEfrtg9vhQbHEvvt5qLGzqmxi4z1Pvc5MBMHaPNHoK7Vcj",
  "key8": "2H6dcPQcz4ZoRXa4uWMHPCsHvQA7LpppUBMC4sDJpUTkpmL6abdYz948QdceTyBjmwx7NRdGuux9haHGoGHKCNMY",
  "key9": "5X88W8X63epS9DhG8AeJrCUk5T3TnHijJ9U85naWtvusrMeUMBEDA7zicog7zVWw8rNEws9WtCZBDF1Tb5pFWiCJ",
  "key10": "5q4BKC2MJVYBQmTpSNLsJXsg6mhYdDmpVzmABfAfE2QmTsVbGFGnT6VQ5CvofQNwdQHZpsEbqJ1zh89tFJP2Yo1E",
  "key11": "2s2KGns9upTnAbWaLCt9Ygaqeq7jSBr9c9xNNpGAzwkR1jVFVsfzb884X3CFz81eoK4JvcGbMrtHz82hn5SsWYbX",
  "key12": "5xHq7CvdMNvkKtmnfHwwXkx3h39RqQi1Jr35yvobdHz7dYHKbt4PFWh5XB3apDaD1dK1TuC3McZrGAmBs5bCGnzx",
  "key13": "2jkKXC1oCCgFkVsyks7rd8e8jt4gbJ2DBuNRSRMJNWUinCE93wAZ7wdxd6dZpEEL1kJALJGAW85BmwvXWqd1mFDn",
  "key14": "gAjadkZzqSxYtHjxaZjMzccX8hmYriAVzHrT4gc8jSgo7BAh6qi3znLxiBXs9rK9zaSvkhKnwPCNScg8Xv8VAci",
  "key15": "3NqKKFJqpBu64hmvyVeyYb3D7VD8wCex1gStKt4q5aoqRikH6nqrsYRnJ7ERPK6kcPqRqgjTWjLVEpdPwazm1H2k",
  "key16": "3PsULVih7JMKENQ1RinFfZU2CdxSzfXt21WKsHkgMebNUQvUmdeptitnwFECH5WHCQowfMVrvTMLX5dQgaipZZTx",
  "key17": "5R9GqWDeZPkKzBTnr7AatHHzz3TjiDwC8ySz54gwB6YyLwBwFu24TTeqBRGGyvwnunSGhuPSFERharAXS9tQdCeC",
  "key18": "51NMQPRkjE4iSz3mft9UZe7Mn2V4GvtmfigsXkEPyZ3J2bcD1KfS5iNVqMmHcQHDeC3CDEbJVnPixvLGp91DMid5",
  "key19": "4FzzmjArhefqtnDznZjKL8n5aQjaSP3R37Go35YoadrqVyacVq6tJuH9FJ3UrgVX6wg4YZQCX4HLKJuHzuxpjQwS",
  "key20": "39ukgiii57adhH6mkhxEEZGjfjzM6krLpR2NbVquA8UF78djCjw8CWT8dRx3rE2XtCoXUr6jvBYnBXZQaYs8XuaP",
  "key21": "3qykRErg7uxs6MnaYgWHGkevgYHfuG1okfdZFeBApYqNmr8JCrThKd9Wv1fx7RmHbEHpuRRNhxVrrzHDnznkR2Jt",
  "key22": "jUHQXmsjBnwDUYWnRyJLNDgkKB2Xbp7ART7b8yqcBcwRWaDDSnaHoJDjqrRdYchHbW2UipWUt69Gj6pCpsapuGs",
  "key23": "4wWMK5JhRKCKd3HbCHnEEPVrkA5Ugzs7ZUDHYqEcRaH4gpkJodgfUpDyxq27ii9Mvh7ezuLHvkpVPaCRHaCbmSdC",
  "key24": "5JWXxY3bJLpXn61su17phmwQW69vF1beXXcbVdzAJPvxmdB46fc6pK2PM1dzKB31dMeDvYwZRCNW9y6FZdek2DQi",
  "key25": "4LFBPcAnXzqT8bvv6xdHHxVym9EEoFpWJsCLtNdU9pGUjchjF7u76TX6kfGoCEmXuWzqEDXJPaDx195L4uKiyCcw"
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
