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
    "ohPAuwVVxFAD76mRV4jjVnfDb7ktTB4EFCZDFwGUd6PS7RN4ftjUAN9e5oLqA8HBZwe5AAZozNypXaqh5d9tRoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49YrutMFvnt4i6SVcV7Ce9cyM8CuAcAUmbLNxEjmo76JL5CEEVJizEJg61dnbmhb3zep6a5e6Gdeb5t1K2NgRbxy",
  "key1": "2giVcDD4qAC2JUhEKUW2TKESYR8GEBLozg3G6wohWmFkHpHSRwvixhQb4kFtLQHCWGcRagJSfCzw65ciAsQagxiK",
  "key2": "5YrsjhzFL8ay2vUxLDyTDphiwzZJYNx8UZKGKucBTyCptN4Hyb13G3EoWYeDGNPS6fkHdQ9SSUZjjYzCRTsCasxp",
  "key3": "2CEgroxQjrHgWinzgrJEFJAoKnbax76Ay5xuL3yYfKu1jpGaouQJJ1WjTA4PU9g8tc6BUUoLecZahoBPvPA4kZNt",
  "key4": "3g7vWEX8nM3yLMf7nQXSrAgaV3jM1QBVz2aK29ZfmQuouCXTNHnZFg2aAkZpha3fwkHZLyGABuwi6s3B3hgi3dnc",
  "key5": "A5zyVPnZMc7NDwDR5dAZi8V3rxonbD2P9NqmgWRQN3hKat5WLT6uMcMy6HQsakvhq2XBgN1wV4Kj7eMvpP7viAT",
  "key6": "3BCtwZPn4c4ScNGSPX43sQB6apNhmsxeRFYJ7B5YUcpKo7ALxHBcA41Kym5EddNX6U2WR7Dfg9CCu3dcbHw8dsK8",
  "key7": "2WunEXwtkH3DncY84NLM962bwjXN6S7fG5dfic339iMCpRr4Qe6x5myDMiMEGkP5mvqz3qoZmZTPJ2oSZJeQxVrg",
  "key8": "56sVJ5odzQZtPSyVjYJxgH2Jnqu3vEJtXwpjhg6mEHa48psnWQtp6cCsjJdZiCs9eSPuSvHVsSNjvYzXTd5mfU1u",
  "key9": "5R3JwZ29n9ieixGeNzWYhfsFUaeAngdionVjA1j2xvukSWLRp2nDrraKjFoj74noekyzPqVRcgnijz6vCs4qfdn7",
  "key10": "2JqSdE8iX96txCXBae2aVYu7Djh7E6wgnT31tLZG4eCv12Ena7SSDQ3wc5aG11KT9hcv2q7sr6T83RxejcbxKDGA",
  "key11": "3L6yKj7XbKfMi2fue7Yq11Aqi8SCaEoXt5ZqWnE7n6x5p6u6FqMcomFa3VdWAv55hcGk4T3Sc3u4AKhQB4Rcfhrs",
  "key12": "4ed7dye5pmZZbdUdHAuuQzbeWJoeSua3NzMhg7dXP6wsB9Ye9QGoVUZEwGQP7MfiDK8uVw6CSXG1akEABAbD9skH",
  "key13": "34pFZACXz5sUCJyQSULAPCUNtq28RwA1FFj28SttNs2ufEakhtAtQiAmCFvcmUhf5dwciPUBVNRE3uxBFnRe2z9u",
  "key14": "4AUxicYZNJnkfT58NfHdC2iQbLVR8YMypAz5WtWu5q6GjZX8V3WLqp3PfHiKqegu9XZExvsjBHo8ksNBmn4fTp3P",
  "key15": "4wyi6ky3t6XU1gknKa2v3b66hmqBa3N4vFcYSch5iTaL9UtNunGcYu4ZuhLdeow72PSE6vgd82LKyCxycJomnopQ",
  "key16": "3Yh3cp24x8oJABkNh3oUhT3i9vWNqBzVJMXFXPbf1yxT9f35j5YdEw4SFaumSJH13M6VynPKSX2iMD8KpuPUUeix",
  "key17": "5mWwECqfi7zoBCzcYuVfuCL6UfGG6Qx5amQTYBi6pdNaPcWc3ck5aTmyb52Txvr6dzc3e8PVBFVHzvLwdoWVnpBm",
  "key18": "6hkayJQTFsUYxBLmL2ibbCDZZP6u37AWtwBMh6mzuvpeep1JbvSXXAPTdBjWJNwHQYYSWGqD8U8wiVyydWZsPyi",
  "key19": "4FntK3gs2gGfgcKS3UAkcPiBso6nvw6d52moPdEDr4unbt6rngz4VSjapcNaiXg5V69nvzq2hfiRJmFFyDg3gPE5",
  "key20": "UHj1viZo5XztrJnV5pxBm79wi5H6HGB1bR3CszgKQhoU3Y2XkqPaszmMdci5TGhBikGrbkc8sfBuaLBgsq8xqv8",
  "key21": "qXPp2YbjG9EygMksexS1TUnMZ3CxX2n17Con1kEsDR85mMspRaCrtZWFafvZ1Sn2c2efC8xexMsTapMCqEvpdJh",
  "key22": "5A7uM2gQ48KetJDFdwzy4szp5yHiksEWeBcc8NYkHLJ4vHVMhHnF1DafyMLqyMX6z9frkm4XiMQQUCSGmZW1YAEQ",
  "key23": "42JpGZLDSpRGCd6ev4UEQCLQTfs85BiCRppUnTBRh5dFpKNp3FBPcAsbSdATyNygH3CSeiy5aJXYKQKTy7ub8EYP",
  "key24": "AitB5HC6YZ823cMMcoE3Kqic9vBh3FARU6pxVDvY8g5scqQopHNduPF1ox1n4cpu6fUXd21bcFFSWq2Zxotaep3",
  "key25": "5dLiSdjm4ghLznhYsHUkqkAh1e2dr2dXeNsLKDsnzY9Un2RZozTqg9HbDCoJckSuovNbEQJ3uDg21QDH8Afx7d2C"
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
