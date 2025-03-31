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
    "3bke2vT9TzmDr3ndyprpaEkuqUcjF5GXNV4v7TeW6pTYTdqviFrNZxAzfwLsZ4yXbWPDQBvL1asvpGHUQy4SCVmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a99PZnrsfnubtf8U5pikbsWXxkRDV7V93FXKsbHjth4a2wC2cHS5mdyP1ravLvMwFwsj17kAagm9SJQuBgaCWgq",
  "key1": "26nRUSVBZSUFtFKJ5Nx4pPtDEidA4Wp6qdbuVtHtLiNJcYtfESQTSFEQm4ikd9sYa7QUk1X4TzQTJeyH3LPkUmdn",
  "key2": "4k6jh3yMGZ3HnnzJwLZB2i3EpEwH7dPHqts35CtwEAFRJCScAcHqBEg4XJCLmkkmeJ6GEo1mwP8qBX4SdnVeVjjT",
  "key3": "3BCRfdm4bGXkNpD1QGvL8Pfiw9fi7ozkHTsq9uQPQr2uttpSUCQKi1uKE9iyPhAyRVr2ssEuwRJTn6FAiUAmc6kB",
  "key4": "5hCNvJ2qdoUW3oXSxBFUXj9JKweLK5d9XR3EB2RY4ojuQzVCtdAZvd9PcCibuCYRxZX8SdpAS7pi8QrGfFnrkwpy",
  "key5": "3fbojuwKiBtt1UgtHa2yvSuBjFP7bZPRxg2YjkmjsDVMuKrrkwmbepVgK9HiTMaHRrxuhXNdTDFXiVZN1m79SrdJ",
  "key6": "3Ro1JF88jrzmuDJRtR4tW6k3nmpXKT5akxw4iLE3vJ4SNLZZeg5dRxE7zC164ZJZyjFhmtGQnxQcwzNCe7bVGNPL",
  "key7": "5VBt2hBS4DBudmTRxeAPiLoVBnxpX9CWF6wddgG1CdFgYtyzoqB8cMAC3t678Zre2ehubgD3ZXwS6pR6GPKPM2dp",
  "key8": "4WJA65R1Bctu33rBixQDbyHVYx55JzrzXGQsnCovWuocShXpgHKthFgvDciPz5FQjnNi2dBBDQFcxBkrjMMEnUym",
  "key9": "4TsuY4PKQYJT7y1DqdtXepCdKr1EMcPQs7cWPWN8zBawFtjA9BZ5CDD7EUkZgTBmZa2CcnM1kNqTbYsdDQP8sTyw",
  "key10": "3ZDcBubsMQga8KTbG3VHPEBbp2Q3NCS991C5XaBU9hTnrYdnqyXZYvuV6EQjv3UjXUekVrcSZuWfZMoU9yRrrYtp",
  "key11": "5i7a29j4W1HaczraH7fNaFLsJDHhcxLF3ybHY8A67bHWrMq8e9iUurhawdPJYrAEYxJLdG9eH6ydqrk6zg3C8oRx",
  "key12": "5MRP75VBmo76XoNcGTrGM74cqf1E5tjfbhfQ6vijbDLfZsYMdaJ9dNfK1Dbbif8Rbp5kEMFCecwktj3XBKzw7q5",
  "key13": "34AVBnEkeuexAvebwATWeasuT92mnkjs5ZFE78tbQXkRFMxetzXL8CunTHdZtgBDDmNYZQBHX5sMdvW4CDcTBpVx",
  "key14": "NaxJoVce3zvwHtxDKxs3dPs7Jt6V9sZ8mGrFbvFnBr4meFiMdtcN4FS1xwACZwD6RfESmQGcU1XebYTerhBo6ek",
  "key15": "5oFVGjT5MVKbnjbfZKzbyG3vtZWRpD8aSMHZCCYNXF9y5Je9sR2R5Ldictwuk6JPe61nZjBSdeqR9nTmjd7WxFn3",
  "key16": "3K8XSbdmp5QuJwiPktRyz9CimCXEcWv9mwQwo3KbtQNWUfHdvpR3XCaxsnRW7ynYcwDKU4B6ztcos2AoF1j5HziD",
  "key17": "2YxY8C4zqAJZG8FXLhdbgJUyu9BqKVRPViMH7LBuor2YZD6N3cWdvVb94D5ooLPg8wwaVqsK2xGLB1bghZYLBB7h",
  "key18": "62Mfm94JvbkZaq9bEZP2L2gchyRVopvEjYN45UXaeGrPaQm5HYyXQPHG3KzA8qrShRhWqM7ueQEEncMrJw9qHhjn",
  "key19": "4ZrbbrPfYhuH23SS39EZPXiYWBJdLq6SjzZNVfXPPG1s6h882LjaQK8CvgrTB8kjoRcQB3vNXUggeH6isvrEYnkR",
  "key20": "4nHvNVQNWaeBj4vZS7jHwvm2tnddNit7QSx5qdxKekASu1t5triuAMQYT825STYvMtc6MK5GXEgDqzH3J5GPqWPa",
  "key21": "3nnicuvNeLuKz3Xq3xjcTqqdhuo6wKQ5Kh2JM4oLbR4mW9A2gVt2zQzJ6EmE54Q83SLqfafzhCp5j9anfD7RTQo2",
  "key22": "2eCxrVQrD1TeWwpbRHka7VDPH8oqhQcriJyoUXeUb3q3cmPMGxt9b2nuxYdFNayz5y6vimBtFrxiNRGqqLXKiFbh",
  "key23": "3FEhroyHtgqDGYsm4u8rbMH4Cri2y7bj6JhixwzRFrVsyiFJD8dURUjjm9q7G5Xa9skmLRf4jc9XYSA59B1pcCfX",
  "key24": "esAJmN5EashDvzGDP7uKNvCRC5CKPJLB6Wfw5uo4Lfyd58JNGBv1TBctbMb4HF2X6h8wd7BHqHWbkTtM81HPAVP",
  "key25": "1FtMYoBvcLyAyRCWmLyi6Segd1f9exHGCGFXD1Zg1c2HJ6HSr1AkJAYebMtmRfstaGyydxi3VsRytHVZXv7ncGT"
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
