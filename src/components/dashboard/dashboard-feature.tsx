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
    "2MUXJjARHRoZqHYeEfHC76qumWgtb2BqK64t734HfaVUsU8Rc95tHQLygxBDDeJoy5Njxa2jzCdupqzQacraXkqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qavW8WGi4ewYZwoXLdaSRm6ESGjDxYjepZ5b5H9p2YyCDyZLRL24XvhWYUHRtNGeRqsN1bT9hVFQZtyfrKjhYQw",
  "key1": "2L6Tv5g1PC86ECwo8Q93uspGQuHovx1DneAwHLkbBmRxx2etzdbN4UctUXsLVwqFQnwEAzKiDUddzj667tsWqNtG",
  "key2": "3CtPpFDcw9ktAh6tYjJ4EZtmjtiUTEXygs1nHrmXpRq7F5iAHt8h5Wse8kFaG4a4njNGs8prfkrUr8MjAsA3qcsf",
  "key3": "3DKb7pep4GM2fA25v39m6LvLFy6uH9dQSMDXWSkWHW2FsjHkDHMEQDPLArxUqaD4kuJdHaDeLgdcp44mHEJBCTSv",
  "key4": "5Fsnd4WmCTASSerX4G2RnpQjrR1FnokNhKUms8HHofyfzLL4p4nKxffuMQUHVPCq4xSeXQAk5kBST7KoK56Ehho7",
  "key5": "5m8gZGLND2i4A7FVpwPQyiSYYsY5kpcgCZL2VLALYPdVGNGcpAUwNZgpiaSnJZ8SRFdURwejvE1AvrtyzkVqtgn6",
  "key6": "579E14E2RG8XLppPrjfXRFkBusC2KNUNndGXRoXizYmBeY94hvTUuWX9BDMgryatWzrcUL55MepECFSYHtc7Zc3s",
  "key7": "2rycJxwwpEuKmt3GCdHnKbGXFDxoRhWmGUYsQTBuuTJZBEmrd7SS7qPVtG7s8adkUcbQKR41xbEpeY9RHwUP1YGJ",
  "key8": "wMoYtJPijteMvNv3b7NUeoHDBx4jNWSZALESAsvmWvnm3PDQCC2XDCQSK2JLy7tkN8dAS9ee3hZF8DTt5nx7njU",
  "key9": "4curwFcJqTAvPHey1zhTtqMzzHxHfUnKR6cesEQoU5oQ9EipAUHgEzPWYAupQ1LUxDC48uryWWh6V8xM9E3zyYgQ",
  "key10": "4Qey4yedPbYJrtBsYX3V5qHb4m1TZjyiG6es9rETDnJyTnYYHRVZDGHxgXNNfuok3GaZhX3kJ96172NJp4WtUbd9",
  "key11": "qGKSF2n75Xgb56JdEjSyazgPJG4uRWDJ1KgXJUgn643Eg5dfaLzAQf6LU91exZ69TCEq1rHrAyafBN6DZE8ANtR",
  "key12": "2LNFDuxNow4i72rVgU9ZTxqTFbjUzY8PJesMggpjfYjKWH6TZnMCpmLhTCkTvqBXjjz9u1HsBeTTCwg4QzTR8c5m",
  "key13": "GZS4M8w8v7fh4gSuc8MB5AUJS62TwLRLtopTNofZMta85pDC4382MeeKUYyqz7A6G5fygf56897ZN6EuuhH9iVE",
  "key14": "cZnEwbDH2QT6JrT1LT6xPDWux2jK9dfSQkG7NSW5zmxx5Coyc7msRmHcDHJDzK7jGA1raN63jypagFZqDTu4imW",
  "key15": "3KWdRGR3kUB5d7iYXFtJ2M3UDae6DcAXYDjex6maTkYeJCkAY842UkZ9smBeXPiLYroVFpQ1pos9JJtYf8R6ps7G",
  "key16": "5nEnA47JoYGTj6KTYFAHYWU6oxXsBqabrvy76RNCNERCby6rQsykqgHxfyrWXpUkxqXZrdWWLr56xU6UqvdcBRyc",
  "key17": "31eDHC7wQUTXzhuC3M4TEDRNZMtQj2xbtaYGpKMJi6Eq3y4yEbbYs9H9MjncVwi3LAAZBiErZ7SnnPaXaiYYdTNN",
  "key18": "53kr1mv9tVoJ2SQH91Ms962VGSbouH8V8Dzr3ciKBBdadirT3p7BDyGMVYiEJ68wy4NTue3JvEGcAFto4TrsnBA3",
  "key19": "9U4rD3D7qTgX4qrccV96jmXZtxD4i7tMJviTRd8vDbcP5CaADpw38Tirit7d2TaGggcpQswoia3XL6Ay4hYNtsK",
  "key20": "QTSwdJ63rAP1grzhUPyNf7XA1SpyjyYSraoPSFmjHu7mqmcduEKkqyjyorBGye6hMdeNtv8jw4y76KcuEshHuZs",
  "key21": "2tyjveMGPZk7GoNPThv7BJEtKKU7MBAWuFF5uzABbSTQcNkqbyrA5Vv6npBDPMKcieQAcnaG5DRFUVpZY5QaYrV7",
  "key22": "ovanCwqERrf8st4vU22rBgkrfudid4ohuxBLSPSsboW1G2odFFtK9qeB6uots2Lg8o4ohtaXpGgsp2QkJMwjsbf",
  "key23": "5MHVY4haV7BK1jygL56fsTPopK9ZRXj8vRPMtCvq31iNk5wCJjfygCbVjjaRw26DPRVa2UYsU9MTeAiBTiN3ZV5x",
  "key24": "rfYkJXGxRdjsFGkuaXXAnJnHUTYevYtofCbALFG4PERzWwyzYrQLHDLKNer9HpsdHC8k4Wn2dW77r3TkhGvbM8p",
  "key25": "xPVHw15iRFHerNUnvyqqETGkzBTssRKkz44ihzS611UvF9GJBeeFAStYwqJg6YpKt53oo8yguWGb9Zg7pg7NQ1P",
  "key26": "3gprUho4MTzZmsy1PUpLPkk1TWThRrPQGygYezh7dsiPSZ53uKNSvG7yg1t5RYLdujZChdBm9Byb7o6rvvjpxU5C"
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
