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
    "5RPeM3XXR3R2AKXbNsCpocnwe734BvDcLt5seJE7WaHZSD2RfBKhs6zMVYtHZGbFz68TCginVm1oGqcZsxg8yeEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xYHGG6v9J1ii9UFKVPmzGQx6h8Lz6Up5VUgXzedrsCUrwvdvXLDoayt2XSCMtzvgXx2TCAP5AygjSGuzv9jmFh4",
  "key1": "r8vjg5ZUKhsjoKq2moLAUaWifMRGoqsBiZZ1LWFWfGywCwyS8CtqNmAEVAwq3jPTB1KrJXBhFt9gFFz12tGjJQh",
  "key2": "5Gn8UxjEB1oXxTeHhauwZmXYUWasVdxakZfvaExnY1CxstAYGRf9ff3jq7fZk9aGkViKQpT7ZzKaAuUHEk89tS3d",
  "key3": "4Ma4424VF1dsQtB7pfBDwGaQJkP4WHd4dd6QSj8D9XdPGUyTKAu4tXpmakcMrt9xHETm7awKV41Kri9TuyK9f8M1",
  "key4": "48WTfJVV3RNj3iwakJ9RV9Kh4RhhGxGkTUBXxfMpvo8zY7JW2WGZeZg5wvotszEfuUmzD427qVCo8cR32bLt4dUB",
  "key5": "7raBbxUTkEKFqJDnWAYHJ7GE2LnatJeREjPie7X87twUXwV6qxwxiWctRDXfyoJL1TTahXFFHUAqLwMMyV9QgkK",
  "key6": "5D7CXuWmCeSdEd3BwAPnThL51CrDMUPuhpn6kdWGwkzB2d1tYJbD62PfFzmhVuPmxGpHgEm1Jq9ttmwHiVm5ZQQc",
  "key7": "2GGSZRi5LwekEZTpK2op31MXVhMEX5GtMoF9PFerceLbqBj7T41kNDCQQfrxT17edwQiidUgGwr2yfv559qdcDXN",
  "key8": "5Z3p63pje4udSa8osD1uESBhbdWKii2gx7xFZjvvExZZkEVaX57MiypbhvQNLGrW8qYbhe8AnX8e25gwWHHf5V3Q",
  "key9": "55LzuzEEGrUd52eVow2Uemq4PHUC1CKZW4RcBn2YPSUkPLHRFr2UhfXstZA2eNqwizeB3mBo4FMudoCpjpmE6jDU",
  "key10": "2gNWcHFHksWTk8cB1evM9YguxyjuaaA4wqMAdXYFKPW8gLTLBRYFkhz51mYAMEtBMGchBMWsPvRTFjZUZrPk2Nup",
  "key11": "4k7QLj4X6kyeude73pTSKp47mXGVdk2dH82Pj3Tfzn4qPzedJqwsDuNfz2undBMyYg8hu24qspBkPwKXAPbVhBAS",
  "key12": "2CjnNo9gbxjScJZDXeHw9gB64c9ieuRVSdSSropmkSiK1rd2KX5HV53reUtnBPke37Gm8LjjQTXnxwapuEezLuhj",
  "key13": "46RgGEUVHGGUF7VfJdMinBjNGrbebJTGz3s3vy4mqWbgndc9z7n5QU6yDBpn9z4RCN76pZHkRo4k8XBC9hmnfTD1",
  "key14": "3HDEEfmue83MPnT2SFnzAFGzBR6dyKVoTHfjXnnbstGXC3KrHNBhdNLs1Qf12R8QT2dfVaWCpMURKsab7jxqX2ua",
  "key15": "3tuD3hccGW4T9T1t8dWYEB7UT22UprRg5aBDcfEaPzvzmDW9RjJfk4qsaeoNo3UEj9iLjGn2fTD5dSiaUMgWVSXg",
  "key16": "51ESiaSf48k68qs5n72jCnmS6DK59dMWtLPhagzJdLj6HntNTjsrTKjZjjBNMZDqJ6NzWRbn59yzSNs9h63h9WFC",
  "key17": "3BTpqbvoBcai7AkGKwhRz3JLVbdBWvSpJyopK7xbwWeEnBQfmXqqW4dCzd7wt4F7vNarXhsSiU6ZoE6H5vU1Y9ZT",
  "key18": "Y4iVBuyD3536fRPHA2JTT6zUNVnV4WUChMT3Yfr5joTLQjAGp4iZsYmmG3MQvurePzKpfBxH5CiBGopFJTEtJfx",
  "key19": "5123qZPzJ31JXy8TiX8KQKgLhX7rbpC7vZMLjcbtTgJx7MQbvbYHmpYhAdCF3tU21TKkRA4wP6MncyczofLeiRFs",
  "key20": "48Ho3hqn2Y9ZKwLLCWrUyLVsozWJFL4rVGWwApEGGf189c6c9dM8mfWUcfttbuGQym3QaoL7si51Z7GK6F9xyiP6",
  "key21": "2zdJFddRhrsRBjme9Lnyb6XJ2Cz4UvnVPC3BTMc4QecmnoF1PdSDkhXgB1Hu6P8tbQts6qWUxxJBwJRoHTBv1wYd",
  "key22": "2YYMRkGCLemCsom8UBxFoy45YFRn5o71H8w7NQ6u8jJGwPrvb5YhcRNXXSWk4AFHy3o2fDnwBr7AQBdfrv5weVCA",
  "key23": "51hCPFgARe8KDBHcau4f6LXvovE5tPFxNtEcL47CGCaMLNuvQK2StNuwZK7ELB7P6U8uJj9qyUzURvSW5FiqbJzg",
  "key24": "2b5gXpZ74G5P3EU5nyjAABXUi3Mhdm4xN63yWRKCtYPb2hqGqA1veneSuRp1qcgUanUQQujNDK8Q1diCUa1gVEG7",
  "key25": "kBgdzQsPvTfcLtmW6VVf6FJMhuymZSivnzPVnwDGhLzU8BJtQFaK3aLXfidV5uutEwkKmEQoDYBvXMpoQJdNSJQ",
  "key26": "3N6pukLU2Pb9twE8bdA8GCktj3ySgdvHaRfTqJPtqNPyLra8xCMkpwNp2qhaYABcBoroZmBRXhB1Tz2bpE61iC2q",
  "key27": "sX8xMqVA6wrEye7ybX99raxmF4hoMeJcAZaxE9wfDPgRy8vU7EqWWQk3qYThUPMZAu1cDw4jjryvoGzARp5UWb6",
  "key28": "44XwdazNroC54imngiNLxf9yHsRwCbMi7BHHiLjBiPo3GjoGF8A3wAnT9jcbVhMLPEhGDtd4oDKMiJRHwExRpSkt",
  "key29": "8ikCGj4cN5a8FBfgVy8jgjRVwcPWjmVwHC5ZbA7QjqzQtMfVKBQuwG7ebCb2XFfpSbi9puzYf3nwHSgUj7wRb4M",
  "key30": "55miFMurLTKbBLuAL6rQJtepsiXpJ66Jag6o7CkPw653ZBHi9gGxgCwREqg4dz2G8Na413Ch3pyatr4N5NymaMy3",
  "key31": "3kH9fhu6Urtu97vxRiQDbuo4p2kGb4UDku95XTFEHuCPFGxQrPe65Hj1Lb8FYnRz8Et49FCDKaqkcD314yJMcFqX",
  "key32": "2yNzzovnUjQAr9ZuTqGZAQBYQXTUmLweFm25eshyKbroDQiZ4egPhoA7srtWqzkEHB1CR87ie9N34Zfb5Hw6Vx6R",
  "key33": "WMQnh1NSj2YjbwJCgt1t6fQfYezNjian9TfbgHStoUto7bPC4oUsykRfEpWbnaJthUmk7gLbp2viEoaseT5pWMs",
  "key34": "u6YN4bmF6r3Fei4ahRbjjYMiKeM3tMt8J9xC4JqALjwYCp4inQvgh9BKwrg9RStza3XwozwFptze6zxidhf4WHy",
  "key35": "5VPWXvBzgrSbzEYGB2uvnLb7iav4KjEVzgkfoDfCGA3hHpxP1NBMP7ChmfYA7Aw2SXA2Mbzq7pF1atsB8fQckmHw",
  "key36": "Rvih1uEzZsHLcfiMdfvoZTfDoUQfiZi7a8H4XJx1vJzJw8efG8dLtQhXYxxku3vWQEa1MZmFGYsJu3LCifYZHuw",
  "key37": "3tck2DDSDPGku9kKa8VLZU2bcmTzHHeMu7kEw9tDUbdiVpm6arxLFPa1Y5moK8o9MfqRV2Q27zqY9dpK7fF2bc1z"
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
