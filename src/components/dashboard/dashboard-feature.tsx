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
    "2VMtqxrCjvwGqz4WhnVRE78cu1xVS7t7AxzxpBBBrv62ybvQTbL8352Ju19eeCn9iei8hVpF5J8w6YyLDqboeddC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M36utJXiMq8pcVDfWgZfhhQqu9iimfRVrmP6q2PrwbuBs8YHZCfrL8Vx6XCTSwfejCoN2WZVyAcntbUt2XfbSoC",
  "key1": "5Su5idSEUy3WY5jyGjyCmvuqUtWTyc4RN8bwYZMBuokWsPMpPK6SCiMLss4dUeoTaXX5mxUDLBG6yAaTj6criGfM",
  "key2": "4S5aUTRiJCWjAXQiMSPEvJEmNaSHYniTm8Rj5Qfjd2GiTJi1AoQ6ZP7daZXJ2iwkJa9tcsHff8x2B7iGMaDD3xFy",
  "key3": "251TTtnpNytSYGVmCr5i4mda1E1UrkWASqQyf6dKRkRrUiJajTx8tqq3ARrBqjNyuAGvBZrPxCsqFTruB2ymZ3Qf",
  "key4": "54sCZ8HfQyev2tBRHE7GwJhn2r5mHjznvxWFQVSj29sr5K78WmfmsJDuc8yo1YhwY8rNaiZq9aqxkda2Hf7EdswK",
  "key5": "1tbFixDpTNSGnQFsHLDQeUJjnp8Z8osFiFZCGhWFo7TB7HbHN2Uv4sfZgT3Mq3WcyZamn4x9pdg6GmZ8y65hxBg",
  "key6": "4LA4TabRaTVxozwv3LrnmEysF5fvXktmPn5qnLZn8nhuW2VP7RQfBqDNh5X9LigEmaTaim2Te9AhNJRVKKYaQzvA",
  "key7": "2L74J4fWR1TugXSFtH4TWG6qLtAeee7CUrDHgg6ymymyNgHN1Hn3nZEUn6Cfb2DFwN3q2dmMNevfCstpzPTRmnJZ",
  "key8": "3oCNXmAQga1fhcAJGu3PPi3KGvPj5iS9o55Ai5N75WEhaG34nurZkHMKqGxJUihjU1vJDNcnxNdubifTDT38vz37",
  "key9": "Gb4Ns981wAhBesKjch5KzurNUohQzkWqEi7HDY31NfEGQtG3p3FTcDSUCjGZ8K3EgGiHSFMPhJ6HV85C3tyVPRf",
  "key10": "5df4eLzeLTKDy59iUKsyiC7FNhGoFDdBTUoVxLeJV161in2AmW9y6qkzqAh2FHHKh9GQkDhpWgLFWHaDjs1a236D",
  "key11": "4CzgnuRb9ZGE1BuRhRJRv2Fac21dhrViHdMgiNjbKnJZWvq4fkWLsSofZh8fecTWKpnBdjaVo6pHGXKVnCDNyCuA",
  "key12": "2UHZ4jDmDn41zTWrvPiX34JJkPB9yCqoVu9s8xFW4FFUYpYu4sUNkhztW4ywnz7D7nAwfhomxo2fc8auFsKS9zzS",
  "key13": "JgtAi4VdBpaMZQTA4PoBQofsdkpmbMHzQLei8pzUg8Tie9Qkqj2N8FaM4bvboLA3KeKQohoAuidYKAx6Zfxc1sf",
  "key14": "48jW21upyGfijMQyX1agtvVBTu4UJ41aNJCNGugVazmMReSMCV4zfQLrsS5n89kJXJmZGSjDMwtMFcMeEdijSSJ8",
  "key15": "2vge3GTbpCfyfXgLx6jjoVNGdcwsq4ze4uTvkxzjnnuj5bizZXXjGVjqacWeMZzX9jcmLG6iYk2ixCxnEc1uuPyQ",
  "key16": "3RiFyB23ceB6LREVJaL9RTCoKVmbrnc8S9gJwVNBgkD2QVcHSqyN176ynH4MBKv1r75iXJfBZQUeW2Pi13RQtSai",
  "key17": "2umD2mFQbsEUiDDFPXeVnLKQSmVBPu9PMXHdB7pHjpGcbetncs5HcbZ6cfstsVX2PGmezbcgAEEezWaAtoEo1cFZ",
  "key18": "2DmJMUgV17hcXkrf3kaVx6tAqDnBpc4XJnP9vAg8aw4wF7aT77ZNxguMVfyLiDskfo3h8brAo88MfaKY9rrUToVV",
  "key19": "4jEf7gxB1LBBmYBi7XcQ8CfeqRvfxwjzhNFoBKF5dgC4t7dRTL9goNHEkbvPLvR7P9h7uhYRicJfSnvNqhzEYPko",
  "key20": "4bctuxQNGygvpxrvZC56SuWVnFerZkckESthh6Edv3kTniAAd8LU4hoNRvjt79reG6Cx8BfVHpEY3a5c1kVLcC9n",
  "key21": "5e77Z9YsDDBuWFBDenjBt81fixxt28uHAfQikMbdYEbM7ESNAmxK9zrdVS8X1u5rvevBQTNzYg15Ytu1QT9Au2Cn",
  "key22": "2QLjRHY8ZcP5HTKSyN5TuGZRWpdkEGrFSqGopcMSszEGpfioBT9vhPRLvG5Ff1fDQrxBWyMJKuyuQvi6WBwHKtJM",
  "key23": "5iKp6o4Vp7158KQC254d7znhs1anY1C9BeHyEN8xMSkbTZMwz7iRZzhCHkjRLH6AgEpJB4qznCke1zxmszCMJPjs",
  "key24": "gY3MPEEJbJPiuGuhi6bhBhcKykeKWrFpYsQdkqyVKE62LWqSeAzD3XxX8W3utZ4hLfoiaknv9Vo4kwERcEZdEHx",
  "key25": "4p2ukap29ihExYhM1KNMbnqSicE8W1siFG9iRoHNWXPy2HZr9EK49y59pFNbmY1eKdkuzVXcQgwCGxCEC8Racbzo",
  "key26": "2wv1TjvECRsYPVfyfpK1LF4CXhdBpXdRuBsU5YXwevjPRrzSmyLyHV8tSfF7DMG6rxmMRJAyJDmTS48LQHoh3hCx",
  "key27": "2nZwrHms1KuhXqEW7fceCFZtirFUpYDRJ3yZpH7iLLPfiP6VYbvaHkwdhG3sJWeQzVAsqPmdinnExFxRc9m8TSKD",
  "key28": "3H4BHSwhQvQNum9X6jZmdKd5XDutLPToJETt3ctJ4L81gjAc3fHUog8sjTXasz6svKqQmgHc9xkhYDGuZ7H2bfz8",
  "key29": "5Z7DJaX1A9S965Q4N6CoAgSzNzjh6H8dC6DGNegU5o72gvptc2aNsiurJpjze62XC1eBKgf2a5kMeia1Wz8HFbx2",
  "key30": "2gyTAgkWFcEKQdfKAmupKKsR3EuCxa2gffSKeMqf5LS2cqwBvXvpo2ssR6nCfyx38jvsbRCTmSKVoBSWrQYWT7ni",
  "key31": "23nvcMqCaLSsWLZXo5Mv9ne1FhvfVztbSxPSq1AgQ59Wwu1J6KKQpAX94LXz2a8S6FDvQwxm9fwLSSuyrgSLn2Sx",
  "key32": "3cgdHpQAUL5MGXf1ScGzYFzWoGcMkJhxDz952K3L7zPdSwfjgZM4ZLdzC8KhJdharCF8QGnVsjQApbGC9vNGEm7J",
  "key33": "2cu3WABLdGkyF8Rw31RhdrFhXL3EUgx8kpnoB3ee7HF538am2Fy2NNA2xdUFzeHT2Anha6fQ7J3WU7R4NQZ2zBj",
  "key34": "2g6DDmZrYA19vzbj636ZKkSfCxTr2LePSovbLmzqJhk27YRYd8Vfw3qjs72EmtixAAutKj5moxknZNzEiJzFNHxk",
  "key35": "5aUFeGWgkqCZWRCDKTRDt6zt79k3NSS7tgppNC2t7ypkijhtmjkSojrjPNQGt7WGZ8JD5ghVb1iZAK87eAGE85DG",
  "key36": "2k6ub7xB4GJ2LUhBNHi1g7qzpRrnQqmrsExVYUNiVJfAoRm7J33vK513oGXQ68Con7TJE5SZHzJTqNRcP4Kze8aZ",
  "key37": "4dCDZ8W5oYZ41Xot6RxzMwChoAJLFoDG5eH3oDcYJc6F56ckcsYQqjeL6d6BXkG9msXixnxvR3VZfCJ6Ec24KMfN",
  "key38": "4rH8gRc9fvNoPABGnGNNMKGzmDn7XXMcyV7mWoX1DqKxSRRtPjzAff2oh6EXtk5V818zxKvtgPa1GNrqiFCB9Ko9",
  "key39": "51uRoBPLWpRKtWJnAYeCSKqRrLMQEdE75sndhrMtX7mY2diFhh2kDwe42LysKMVPuwNYTan7kSLSYRkLLc59457z",
  "key40": "h4kKNvWfLbAjRDqf6YUCqCuq4jkV6FDsDZNapoyudCJRwtfzpuzMHZPH72GTfoF32otdW29YCJNaeMs29z2jcyr",
  "key41": "UibLUReQ4yT8G6n9eZmtCUBX28gkktfnqGvhjLTUo3zMhRuWx36H6q6RiFvmEjASuDQBuPMShLwEjXGt2SRzE6K",
  "key42": "35wdLPyNzoth8KcqC7LEWyf64xPDgRQh9SVFNddZ1hgC1vnGL3HA6Uv4SBUPgQdSphJa4kNvVtwUvNiFBaApieKj",
  "key43": "Yee1weL2PLUP62qvWLj6y7LzM7TqUDL1cY9Xzb5qPTpwivE56D1DyVMnv3mjS3VpwAVc9W6id2rnxuMXm4E2tWn"
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
