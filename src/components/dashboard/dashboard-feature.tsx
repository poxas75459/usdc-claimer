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
    "2rWQv6RinXjmjk3UPFDgd5fUWtK8PohWug6DZ4LxhguAkLtdNRVBYtL1vfUfm4seMjXkbNFCTVq75oydun6eVKvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6ogJmBKnzDFiW7ZT1hqkxhWaT94BBx2enTeGGeBuW3QUaygYCBjGwZtTaxkUDK4csW7LS3UrYnFrfpJS9dSt4z",
  "key1": "4Y2mjWRimyzK1tJMgpTpVwS1ULs3iKKf5VyQKna2vrqQCFFTYdP2vJPGbmAKbmaAaTg9HwpqZNN3kHgrNG2ghewq",
  "key2": "4ypncyjHrq2DvJiiJFGF74nhwfCNTAQQMFvFLyjESvZkdLb3enpRLBWF51KDoFxMFAaRfL3DroSLqUzWvFgemV5U",
  "key3": "3jSNwVa1aC75LQBGfbUL1CQ1ridMFYtp1s49WKaqSmYGyeJGppq2KU5BnHbYPs6CMwJCSmVEELVKf5LwcemVvjjk",
  "key4": "y2aqr1tFASfC5qgUgMiHUYtZ8pAdX5pF7dz1CX7Zx4mfGWfYaFoHGiA2RMMZ9112qGa3gD2uDqX1SgkcRT7mwqT",
  "key5": "CEaf4wHoACbup9paf57NRsivj9AxV95aeBwZDa1xjGwUQCxY3uxqXLriCmKAJa9RqkrZeWM15S3KGo46Rb3AhSy",
  "key6": "36vhhqfZMmE1MmdqtEX2Fe9znir9KHiLUfYPWSb35RYJxDUDgqL2S378Nx7HefPi7LCfcEWiMtNzLxrvPYG5aeMB",
  "key7": "4TCen5spaEv1hqoFBBj8FCMYVPTx2LbPS54HLhNX2UqNdDXb4T5WZf2scwredLx4j6LadGuAeeGRh4o7yapTgWVb",
  "key8": "5ELnBCuTwNvPqvTfYHgeQGBSbCzU5QUSWFN693jV7U3oyv8RbbmnccirjbZKR2RowRmMCBnXZNmfEoSr4rKzZHwJ",
  "key9": "2akJoHjY1RJY1M1wG7adPPkmCMfAt6sDSG6hvAAX2A3FbiNJCaqVwQqocp2RFYQ5ugrnE7zcEWo4TSJqsRton2RE",
  "key10": "37RSrnLNtXtkH47MkMVQoFh3ocr5QDqkqeFtWqoW8eG6kyDEQjE2ydNWbMrCnJ8UMg83a44azaP31aMrDzpyLjSG",
  "key11": "45j6wgsG4GJoGjVJdYueaemUsQq2f4emAcHGpYggWUDeTYkGZwUrJewA4FCf2AUiWr1eJC9ULW31B2b6THskyAxj",
  "key12": "5ByZnG1z5qbBBL49Tx5pbDiAGYGBCHT1FV8y3CuBS3Aut3b8qV5W8ntY3mbLmGLDqMksXuM9VVWG8AcNurBU1FDW",
  "key13": "2Ur5XaZUFzfe3xM5x2bEzVaCrHecY8qY9jeFZBkrwizS6jP9dTC64tuXKLqTFtKAiVMTmbNnzRU1KMuDkBcHwiaC",
  "key14": "DuUypKbdkawDJagCZNmCP4CkjGBMJAbuMsGNme5iFYk7k2HrottGcJ1t2TzphmX9dW48hvmjBhP9EvigP4dPUQp",
  "key15": "2g95X6VQK5Yt1hWw2cjiCm73EJ2kSKwuU8naqXKB34TwRhkLCjiAASgFrKZn6KRBEQND1CxPghqJbSnHC64G8tp1",
  "key16": "3fsyMteYfgMAu2PjgYRZ9fibvd6RVaSYwwAnS53Nj5pLkKQWCBED711UAsMbEG7t9N4iC7w86PV59vnTFPVV2LFn",
  "key17": "1216r3TspXBmw6SjoEdoqDcTS7SY3fX9nbS5B3mkxahnfVQjSTndv5fLUihSfgnNBmeT1FyNkJFN6y1EFqaP8QxB",
  "key18": "V5xGn4zpfkuXWVaaCfRdEDGSdCuQEbrvhb5XJJaeejLRyff9aK2nsZAotkfB5BdJfhhFksGeigaSfvNmmt7t8XC",
  "key19": "2SLb1XLbxBb4j9Ve8mVP1WUTv2xUj4q6nsHMGTF4bmAhjknYL7Hr9Zq9p5b4inDxajvRALhi4kwGABGoQiXWPUuG",
  "key20": "54agkZkia996Qe24AR96bLiJGbzUqUr4BvH2o9eSk65QP8rY1BPfv5EiRw2sXaYoa1MSdtASve8qCwFG8KzS99oc",
  "key21": "36aLR3rU4shMB5V7ojs7ztFSF5N5XgJ5jHko1ZMoy42HYsjvXve4CckHc9AqdyNDdAVEivHmy3oYuFinMETU5W3X",
  "key22": "94E2EuM5PyV9Wn6tdLN4ces835uQnohBW9ZWCFVcMoeBQHJ7sRXuvtEKNsS39Z5B6ePj1Ck6tCRZTgDKnW7QdHd",
  "key23": "2mT2qSZTq9gAreRk45J85UEjJHqnTBahMBNd4zgHiES1wvySgZhWJmv4XsmWG2AB75ypK65YtweB5aMYUgBgpmF3",
  "key24": "jMpVRBdCdovsxAVykL2hHVuaMvgWSm9ZoGwb37LiCqFngdjFAT4vs23bXzcMnySc2936yBRooEYiYHrZgydcjnZ",
  "key25": "2xqMmP9xhHoSYQQZAGnzF6aGdsB1NVn8vjKsCDwwMmY4bpvF5Z1T62yFtoBVWeW2p7PUcrb4CrfZ4snPNvFtTE1m",
  "key26": "5SuHeLsFFMzLDRHBvoCio3gK2hF37vNEnvVjpFAkgLv86DnBmMMYpRo8nZgZbfqSHCuyXBemhKdqtvxGpiyaav6J",
  "key27": "3AL3rEADnRbb6LcMXN7E2pQitbG6ZZHCVfXF17DnQjGukLa7kvWTKHTvvqVyaQ5Xy4Yz4EHvsLSXHfugGyJotuC9",
  "key28": "5E65hdu3kYAhovCofhJDCLCft3Dc56oVvctERuQKzTUTN5ePiduWv1LxZLgb3NYYFPDCj2Uot8sQyVMhnA3c23Gn",
  "key29": "2aa6TzJNbHgMzoHZXd5J3Sx8ZZKVSpeuffRjbi9mmjCZt7F8cBmgAXMCpwhubwqjowp9rEbGR3utKfwvU3bN2Hiy",
  "key30": "3TgfrDVjNJFr3SArLVQi8vRgE9svkpgtGtXPqzN5kqTNgq7w4yV3p1AKbKbbC6kBNfJX5ro8ZdM8DMZvzYwobUnv",
  "key31": "mGRWpQXwgR6WTh85QMU9hEFGCdj5hNjPA3v24s4VCYEYbNoLWWqd3e59gMN1bUwJpV3xEMT1LLNVcJXgJi4Mx7Y",
  "key32": "27vCSafyrCci7ToEZm1pXPiautrPSMyxEbtke4CMneuDkYokysKQmA6hrvRkdd3rnqket1McRaMbvFrKc25jSMv1",
  "key33": "2s5sLWz3EAFr6Mnu652JxGVW1ftEPGHyjAewZZxfoGdg2cr5FaznbMFx6y5p8kmT8vEpHsSCF9sHmyV9Wjgvscg8",
  "key34": "5GQeQEdhwSsQC22Mu5StLfi1ByruA236UDZjEk8A2pX66P4X58upcdDqYAtiBoNEiDQChR2vSP9UwhFNtTfkMiSU",
  "key35": "66z2irBXiUkPBEVuvNiLxVReWHeHzjxsWjFRim15RytAJDZaiGjVmt6rKCsZ74EfMXnmafR5YVNgkWYiFosUtDVN",
  "key36": "5TWmaxTb42Ff7K2k2yVJ6AhBWiQyfXUuKKdtJFyENwqq5iw4cMPAp4oYd6vw98UpU3h83Ujt6utMzvjRMxrw3NfS"
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
