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
    "39XGu5URKqLZRbmNnLvq7qvZuE3r71HS6hBDmWRcmTfsxHhK8ov5aBKXDrN6v4xV8VCEYqNpqSKfph7ghSz2goAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJFr6s8xh1bu2f6gjKtDJgjXeJRBgJGt2g9DPHv3An2EbXdviC5MUgLHwiUsocvEQUzMUNg6XqyfzjpbLfgZr15",
  "key1": "5ce1rYV6rVTwkajYHQe9BS8vSrgDmtJsxY9A4cSGrkbRH1zMbX2fe5dGz8gddYGp9pcbNy4bZQEFUKbhAGXaXio4",
  "key2": "5pA3JnBFPx7RuMghVddbju5JtkXCDxrxEHbUiw1vD2zX1VVvJwosRCHsKFn6MEWvNFTZeVMpCnZ8TvprjP7xLdQt",
  "key3": "2HPJj2MEqkSXij3X17jNgzHh9Wc6hBMwKSsKcDjRwc6PYgJfWAdnRLr6Vzjrm2pBDZMKGqM7MGS1qvtqXBsUNEJG",
  "key4": "3Fpksk62Ave9pVeCRm9tCzY7XZr23h5rhDbjvtYSE9Uq8giXdW68S73kiU8P6d3G5bj7ewAzPSfbTnUxWL5m66Nb",
  "key5": "64nJoEtM8bHgpK6yZ4ZAKBG6HbZfoMgQ5yBWoG3uruC4ESGk21gKsNL8KRbYFbUyoz3G6iQmupnVsnr4bPCtzFH7",
  "key6": "mJrj7WpRocR5M3QBXdW9PwUMk5wSFPuhoaVD4tAKTdouKMMmiDTBDdJNaehGQJJSePXurjrJxVfXQEZLdgPysJS",
  "key7": "4wxGyoKYrXYDy1m2HYYVXZ8E913ZAyYaAu21r49FzLnEBApSjXzjwJG1pAAskdEBbLneB6HW3eTM1AMiSDkA7Cuf",
  "key8": "4hH3t5ofbWbFiGbrjapqfLFsPYCABaHKyeJaZHvJDc3UzKVHMxgDMpBTuZu8244LYTwmfJE5Q5bPrvB9ma88u6ch",
  "key9": "51dnP2aZGHfKAjhrjWgu87fcYthqB8xmbMKpQzoYLPt34Tk8dmENWfCJtANSrWv58tzc6GQxN7ynEeaLuwZcFDQA",
  "key10": "2stJDcGGateqz1QDyKifR8XkcCwEpDrDQLSv8nQE6JaHahXoHFHTkfiXZVqmi2mPG7eiDXEjhTu52nRxsx2cfRv4",
  "key11": "3VixGcK4hXfsx82rptnFWffFc6G5fMpEZ4MpiPm2Zpwj8WyVzmj1b3oxnXEBkYEmBM8anvu5YVKuXKjBzi13LKi4",
  "key12": "9rCDpx8vXcDMrDa5FCyLwQL19Q7jyA7Pouz64ap9A5RU8cKnJzYvBQpDEs3pkWoDxnaav53BUsL4wNypnw3HveM",
  "key13": "378KC2oCSAfsCqc91pmy6ezotjvRJQCD5kGHqpLVTyE9bTzvE2922jBDhhAC9ohSkUiSWCLyhzGg4wxQDhjk8BmG",
  "key14": "PEwHqpckhKTj7r17KjiQBL7fRYChRcieTjBeL8v6Gkp63UcBEBbZbw31nC6AGfSeRxHcgMeg8wcUNtNPz1xxpFW",
  "key15": "2hvFac5qegeE3QP3N6KxpHe8upUGbMZATfdpSbnbGjfMYdAThyaiR8EAEtmMjazLqB9PojQF8cPQNCybGsXEHStc",
  "key16": "2W8cCaJXHqfQgVzoQFW9AViYL6ETgqvt4f6S6HQ1uBQJcPVLpQxVk5T46R7afcCcZbnV9sEGo9DVDyMpA3ePt5f6",
  "key17": "4w4oupW8ogd69ff5vhYGhac5ZZtWBRcww3F7KM6ZzWLaK72ms7A59WyvDz6ts38c1jxCbmpVXERftvR7SynibqJ1",
  "key18": "57rHM9ghebutRrMPXKgKk1TJxDnizoHJmP9KfY1c62V7EH7czj2AinSMf23cucDaqpELAAwh1GWQMoAaiPWJJL86",
  "key19": "2rrjD7bfrnNLh4ZbM95VMipQAULy18BmMgjySgQMninz3T1cpZT1pfL6NWT3Zk1RZRJpv6XJioc38EJaK65ioP1X",
  "key20": "5KVnFMAGCrDVgh3nuitPmEhbK6s4MToFQ8xU6ZnNZQaAynBhbW2oB7DYVRhasQx7G72ohgfePtMWFpc6s9kBNmAq",
  "key21": "28QBWZNcuLMBnfgmxaC9Bay6ppQfavtaf1r6w7Mv4UMiJSPDpByxaHPNwH7jhx1tiq1TPkEbF4NycTUiMYs1MT4Q",
  "key22": "3BDU75WQ71NEUyvgMQM2UH1B5Ui54ixYwmndDgXqBfGcBBYHfJiMt1wMBpB4Ectkknomka5Nah2i8TdshifKyGBV",
  "key23": "5niMAyZy7PuQi8cPCrjQkaq96s6mvAH8xu7JZwbjC3YF4RZvDebCBe7nZCL22USWeDzzPsA7yB62YsKwrR95cDov",
  "key24": "2Y31NwaxkvG88guwqfvaQqS8yJr7TLZ3gamopkmqgCi59L5ser9fwJiwV2VChxtRFKqoeomkY1vVg9MH1KkAkc7i",
  "key25": "2wCZZ8UxnVd1XgUTfVdNcT5zKiyqf6jLZHqbFrqDigrJyTtdHxA7j6oKKyUY9sCYyzrEBHQumwvrdXcBTxA1RQZM",
  "key26": "4vyioCMsdGNAvTMHqeLSvNpKvPDu6YmefgPq5XhsgBsbgcoLnnfatYVmSVFXyDThSbnnVPafRmy1pVk6zEpekXN5",
  "key27": "2yYHvtJnjunH9x33zrk2DgrUVxtd9dssEUCU8xzFJmANeaLt5FCdX9cbRXuqfBqYQBV6Wb5qBVmbqXjnADHSULsT"
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
