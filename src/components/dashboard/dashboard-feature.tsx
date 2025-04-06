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
    "5kwpHHEunXLpA48Dc7nyaMRnFThS9qYghUscdrjiSdPZX8SZAeGZVQmJ5fcF1ctAmjyPPVuvUqAo16quY79ZeFi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4pXQZBmvYoBJskSV9jfJ5YK8PV674FxyQH3Vuewawn9Bh4s2gA1M12Gj2WMZPD733vdECGzK5hTk4acKSfxRh",
  "key1": "5opii8t4z9syjekprV5hGv7XNLJiNpkm3F8eLQr4ENXrq2Xh3NRE38UMDrvaJKLShHPz2wqhc6YpzTpLNG6Z4BvL",
  "key2": "fjkCp4U13gKuQSGD9yNBHPTJM6QE9rt6eQbxQKUtypfAHSNjteD1tZYs8n4rkwnWXjG4oog88Zjyq4Qut73r1BE",
  "key3": "2xid3boypQP6pXHhuQ4d18efUCTZBEzBRGwcxpBAqcftHHpn93jcbS6dvhhRh8cexZcdohN1MwUrJTj7usx3GKwb",
  "key4": "5GWknGK9KAzRMYgnDhKb11cdyjNe9EcXfRijgKrjwGs4MCmUwZoGZc53PsDsoVsE2SxZBMEGMmyq3rKqNLHRz4t9",
  "key5": "5EkAmBV7DYNonv8Yv79aK3Zyr679H98jPcw2uXqqkcoFynTkhkWabQPN3WoJc2PRr5roUVjr4tMCC3rWk6Bwjwyd",
  "key6": "2xfcP3GPSvr54d4kbwVzCUt2cLK8McB3ZT8vbzXFrFuAAXV1hnAVFg7jc2ENuMPNFGT1E4HKswx7zHrZPmTpoeoS",
  "key7": "2Tzsp2vFCxUypqf41iUvysF3Jsnyy8s5RvARoBrPy8RwNjUtVC6Wri3ATqT7RxRd1MQ9gfS8ZNbtvC5ki6vixqTv",
  "key8": "2d1sGNJAtVQ8sYNR3wqWm9FpScv3Ws6MbGSLBP7AqeCFsgi7sy4Eg4imhtTtKvA9YuuYX18bvzzdMYmMazfYAKU7",
  "key9": "ZXgx3ruAPb1FAHrdrAVYfcsvzgVx8GSv7v7EkNxtpZorxeQA2i8peK4kHyWLXBbJce9CEWtyKx4TNiPimQTMEKz",
  "key10": "57Wq5FGTHyMnWcu85UmYo9PMaYA23xTpSJUYuBtTXQKuTb9PZYcXbzE5etyjxLCiqEq31Ln4unnZwYQbg9LTbhab",
  "key11": "5D3iw5jWPEwprYUWMVmcgUjMrF2jfMoX4esfce7VD2cEJmHwmJUeTRsPQLFSXuuBMsUCQpNF53t4q3KHWAkMzRzL",
  "key12": "4AUyVFWdXdvJK1BrHUkCAUybivKmehC2dbiXStVyhaipHcXxrCrs4wAujYrhUFNaYnvx3Qd1YKjqk9g7CZtKJUzm",
  "key13": "kqLaEJn4LeVVCuiqHeYRqZ5oVVEkgGubF7RrNqGVs9N9N8iiEoeN83TWr1Vv4Fd6KUK6yEbwcDcTLKZ1jAe9p9i",
  "key14": "5G6b1ZbtCMGUYj8cdXxzPNUwZM5pRgnAxbTtGXYDerhVLBHgY98cUaLgpRj2vAQXZwo2zWZ4hksHmrR2b2J2j4vf",
  "key15": "33Jy6HP4cfJiRZPkMvw3wfq5SFTcGPWoocgmX8g9VqUtnQCs8mtbBkuucuDhxswC6qjQ7ZfGWzCzrQa2BZDAZ18b",
  "key16": "4XZ9X1XR7inopPvuyhysBSDxnSTDmWphVdiBeoFfDkERZy72YcxtdcHghQ5qAzsP7gntgH9BmK3hJCPkbxvG3xS9",
  "key17": "66faSf55fkR57CTbP284U38pVwrLqrEtsfJ8WWgVXQGMhtuZezPg2A1xeZVt6qS48yidcsCgso52NcTcLBz7RkBC",
  "key18": "8f3btwFrBTMPrQDgCQDHLFVzy31va3bHwKJ1GPEtjomhP63aDtguhKFYCaVh3we48NpUE3FxG4Xu1esMSuVBRS2",
  "key19": "o73sgFs8oWimBFAUgophLAa7irCWpM5DLm6yDgWBKWUYJcCCgp94EPxetYPMjLnZjHz3wkQRE8Aa23xukVMHUJZ",
  "key20": "5kkzKZMbxkPdGukYDPh7pP3v49DSdcA3MdE4X6NpbM2NEVwWnJkffmeB3PXr1YuYLGDmKDLv1aCG27eRUhxG6mni",
  "key21": "3G18W7JY9NynUMtXgWadywmmL3DYdm3uLSHMHLUcmV8kPYP5QfyZqZ2XruUbrykSJ7Ly6dE9hHxXESak2kKvYZsH",
  "key22": "4bKdTPQufTKRxWrZUi8GB5pVKYSfSSrCp1AEEMU5g4bwNCymRHbwKkFs5z2KgJxswjXEsNhWJoGJSeMwt2NwQ47t",
  "key23": "4pkoYwtL3LoDQhsL4qZo2WVJ4kMyg4k44gxDoELohMaJXF6JK3fKLf2UZrd6Cfd4HEjeCCErgaqWMzhfaqsFfMvY",
  "key24": "4F9nUouv4o3xKUJbCTXEEevQp5k8XM1aYnH5svS4abHgYdXLVEM36df4hqBeAPr9JaHDW3WG8sVoEumoYxapZVYC"
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
