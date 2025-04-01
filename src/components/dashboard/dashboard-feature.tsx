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
    "AK9nDPd2F8q5mX55WnEtiZRkA8KmFv3yYPB7bBSy5BRAEB1LSJpqBs1gL6K2JeC3Pg99QQquwnFLuiSb7infN95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ouvS5zFVfGpX8avsaTS1x6t6ux2XovTQuo7CoaY7YsiBLghanzuFrCtoVAXjSXpDCMzr2jEf1tWaAaA3X4AaQ",
  "key1": "2ZekzZ32Lz5SE2wewbKovAKP4kYbJW15yP7CHBDpHeDWVw1uvujguQ828urHDSWioC8qzB17PiWFDMGADPSQt8rS",
  "key2": "4HCBuubBU1AYvKSqJMTtHgVWQ8997f9b4q1rbZa6yrhBCz8GfTpm4DgLGEVGgpqa9JrNcrPBhjYbjn2zqoChR2V3",
  "key3": "WTo5nMYwJaQWkZmU2NCmrKRdeo9yVFoYuoxh8qvp1US2kYnC462CRmcxNaYWZforePEUKtkotPDnayCf3poUjCF",
  "key4": "3y1d4W5X2i49DQpvv9zipdDr1T7WGbqSeKa7pja8LRsKrCLzFXu7MMFn4VhUrwdkrJapB2QUrhztvQQk1P4DMBJy",
  "key5": "4ayEyxsjeRymFqRfa2T6JtkR6QjDMhq6CkPF2JKUTFYEGVm8HjfUW3HD3crJkcgzycdTWUNLAvvD6sQmUBKr46Jq",
  "key6": "3zkqMVX4fDh35ZKLVazfN81CrugRrTRm485ZYYe687uwKDYY45bGdU1jKB67cjfWqDxJh5L8rfGriDLZGimH4P7S",
  "key7": "jQ8Q3Mw4JXoNjewAZVPBV92K78h4XPZYshB8Mx9a8k9GgTQwy4X53iZ3C2HBEzjJVTTcrdE626YFCTG3QiAJ8ey",
  "key8": "4XcaKY5VpX2nAnRabxir5rVZqeoogQHuq2W2whqjeZZLoc2JsfyS2WkE33F5URrDH8ZBtwKoU77sBdK3ZZJa5Rz9",
  "key9": "QTgHGFMCuVnqF573FKqzTgmqHGVUpA76hYJgFP9mzY8P4ZnftjzwgTFBQ75dpbz91YVc13rCp3CENeggjod5YL7",
  "key10": "35zQ97uujYdno1Us6ercUSK7NUr5or4RRQgCvGKGV7m1T76R9nv1KCxCLe26JFaPkJEY6JUG9yVG2RqHSG33bFap",
  "key11": "2P6JfctH4pnEzE7FC76xYxFf5AbsRyTwS9MsG42r3ye43gSsptBiHwJpYDwW2xai9RtPS8wRZspQ5hFz6zx2yM2v",
  "key12": "4pUysqptRjUgmfLXXUguR8BbVo5qXF7FbLZxpV6aGi7SKgicMEFTGZ54MvPvdepBWhSU4H6kdg96s9Xden7UTB7F",
  "key13": "6658MGnQGeSvvUEZz3uqgVAUTHT4Y6ZU41T56y2HW3SWSPbYHzWWwesMwQRm3hUsamgxBjfgy2mwqc8fchxy27NE",
  "key14": "2rHbUawSJJ5AKaYTr7eSZ9PptZ46umiBadve8fZMA12Vxn4oEkJ9uAtiZXP2qG2ePenGjfq1NhpSpqh6gYzF8qQz",
  "key15": "u6NpCzUFRep5QLXuoVhD9oZUUnH6xBN3x6uvo2v1LsQHXumkaaiSTLyk2jxmvLVeF4gh1kVLoRYZb4ZKwvkgoJS",
  "key16": "5WyBZBkLFX7f119WPHDc6LYjxVvg4b6Kvb2c4NePgYDy7W1MLhPWgfrZEZiAZXzZGhyKvQtiAfdYpQM7gXsKCy9E",
  "key17": "2KSDfAfn4DEHhdaeUr3j6uY4WFUwgX6nrpcax1LPELoDAv7dzagAf6asm2cMAgJ8qZvTKaP9vah5GArGLXvA9AfV",
  "key18": "2MgryM6nhgLkoc6htJH9AYXARSvdRK9LKgAHn9dGXbXVZwrF886tRwGhgKtxuC8DWBMf3qR5zqJ4L8HqasajzW1K",
  "key19": "VwUbsVSEoPqpE62N3Sph5WPgtBD2SpaWam6pNdsxtwkyZJuCz4Pd45UvsU2UAVwSPzzRmbVfLJnMQoa8KdKDy14",
  "key20": "HudCSfW9JFRUSeMao1P4uqx4pSZHvTvuei5CCKAtLCdaPdESgYzZcZ7itXjhBGVU9KpAfow2CUhXBeBmSrsDFtS",
  "key21": "2BX5gwHD8ZmmJkygKFQHiWTLML7PCDpjYAJT1gti4UKLfmGdfYzwwrVd6q7GuZN7cqxvuHVcNVXdmEe1saXDqrKC",
  "key22": "4M9c4okz8M9gAziGLQw5euiVjqNAB88aKZCYULLaswMSXTyZZ7X5e3Yutpf5nihwFd7RXxpHXjhAipBpUFYrZTAK",
  "key23": "2NY8cw78Wbrn4wJqaayegaPjaKy4SMWJtYGYC9KWAA1D5XDJbZv58RCBKFhNg1RkWba6pDiZnpDMqKYfYjwToVBv",
  "key24": "41YdLksn8Seu3wtNkquggyKkCrmwC58q18ndme5BVdZUANoULY11k9enyUMu79x4pdUjSfXrP4zeT4B4WNWb8uen"
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
