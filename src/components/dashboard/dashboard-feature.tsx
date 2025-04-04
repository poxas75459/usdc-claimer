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
    "2JnSHGdAwDJFY4VmYjcH3FRDCLaGYqMcZEqqGoLsJt3FUGMKKXqVbLc9rxQzmHoVmF4cXAzzhdcdKEEjb1k1y3bW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FFPHhwPGFQAwTonuMMiDaxKeMVg3ZF8DfwQw6PYwcoMYURA7vRnkEXor3Ysq1rsinazRoVQ5V9bUuonCRzG846L",
  "key1": "5xodQ92JtKXr1vkYVhGoAjRefr3pwmjxuUS2h81mSu2jshhr9CRaQEtocTfjzNSuGjLK2t4eerjQ9gLXvc1kc2Qa",
  "key2": "2zsvBAj4bLrRSyVzvjWouvHD85gbRzzhH21tcp3nKqVqWW55XV6qxhWMcSJMw83YVv72RKPe5d3ZbJYsTkVkJG2S",
  "key3": "4A1A4e89bZC86kN6aLHpmeTub1He9M5CZoNqeV4UwPvzBScxh3iK6EvSN2GiU2MbQnWatcH8116um7ex8ViAW93P",
  "key4": "3sJWaUgQcoF37tVoV6Xmqj6z1xmA1vtKadTLaVZEQRUtGuJuvxeD3F7uobtqtSqq1S4oj2wLgpWbeazHhEjCanhA",
  "key5": "63XBFMg1vMVFJkJiXddCJEQTdL1KLY1SAy24kFuJMwToWYMiBcNcfswavWoHhywH92dHBzvr7PTBin98NYuHfGgu",
  "key6": "5Rj2FVmFgKi9zgzENBDviUDNBh1ichXsmHkCCMNvKXdt37cpQKTh9YAobnGzqFJtSGSbkwo1kyCfidCD3iVGKPYn",
  "key7": "3RTK7mRwGzfaCQ9KvKA2kBqyuC6TG3zxYMV92A4ABzuVsCr8wcYm1bRgfreSgAZVyUnrKzPHsrWNPMjh7Uj9sQ6b",
  "key8": "3axYfhms7iMLMBg7faSYg2z4wxsbyCxzpGtXkfbGK5bpYgyksCU4DHsgdrBMfy4Y7xWF426XH34NFfvDiU9UG8To",
  "key9": "54h7tjxjhPQQ5QHAkhrJpknFAg3yFvY7DtWtTaKo3q1uVRLBprTgbZdN7GaG4hZTd8NVGRQ9EtQga8cbirksFTmy",
  "key10": "61fVc69oTRknvNTKJQSnmD1XQ3K3k3sKXwwuDj4efg5NwNX5yEhKpM6W73Ukki8iGr7fVksHSyeNYcEnojEPS7ii",
  "key11": "kGG5FmrnXGG3ZuNXaywNQrZCS756sZeL2M6C7sxHWn6hzoHi2sYqYCwQE9k5Qh3VDU6CBqRpdsSec4NfP13fAjw",
  "key12": "5VdqCU2W186WeNJQdDU6aaJwavTZaAtQ8EbpfAFZgCw85W8aDocUrJLTDauGrRxQnP37rYS67SREuVyrHBqtWevo",
  "key13": "57xXoiVtsjNrXdmVJxKcLqd1f64VocbnMNsdRUtMpvTWNK4KmRUdDTWMbgZbLkc8RVbRgoZNKcpGiM26GLAzv9Dr",
  "key14": "3oxnFgPNZMpt1KX5fZSQ96ZshJpPFqeztw1pTMfAckkdZpBGKDQoWS1nLcxkBAP79Lbkz1qAN7suCqLVJvWYuetk",
  "key15": "24z2vqYSB1dFQpUZwLV9Sn1reYNNCYyRzrweqpekwB4j5bE7s8zJaMK3zvC8ntPvTHuLyX3y8VdynjdudfXHFW4P",
  "key16": "4VjLHnESbNASqYFFmveKzFGrUThoS3S7KNWFbQe69QwUCdaAVqvhV1rKRHgsNpNBjFxF1oEvnhFcpNvh6ef9TaGA",
  "key17": "4xVSa5REK44iV4bLKEfywkzntL68quoZyDsCLXQ8Wx9tAoxJxg6Y5BXNB2wmckqEmzmuMafoDk17mNU96sscXi9E",
  "key18": "3xRKZWpSagFBxcYX4knjFt3MAqmq2QpeCBCFpRJGDYaFPM68PyFyj6XGZoPJ6USJsGaVCLnavnSXwwwqMqyiEyZg",
  "key19": "3TfMcuvpTv5X8kETTmfgkEAMmMTZB3fgdGjP1WrMUKi3oXKd4gXXw5d57Jw93GYfUNXe9rLXWMyVAnaaVSSUcZ4R",
  "key20": "qHsPmzY1qNWzNbbRDX93FZKHPyTb1tEtn2UeW1JPLb9DU3vR7D8GJY96SL2Z5ME6gRAo4XAVNLEBNx8cFSmZCEk",
  "key21": "4e1BR875CndDhS2VED1A58DNwmsm4Wd44sEcZgkqReNBuzDepbUYRf3s2QXGDs68MgaMjBYjpPf5YxskXYis26r7",
  "key22": "4Ue2Jbd8btvoVD3uMRhbXNNXPzGfZChu2LRKHHsUwV5s7i7qfCo5mVeZc9u9vAD9qdaBSxEHweZS7tWPm4bAJmEu",
  "key23": "2z27xEpZawNNusisZpxoE4hkSVhdU5wyKFhPSUY7mvVRPGvdVr2Q1aeUkpyqcSdCXTMfPkdtX7CQDEpN5MxANZdx",
  "key24": "pawiYV5KpyUUeDxKR87Y4RfPGPBo7kLacVftpuvEiMahLfNWptmw9hWQYoPQKmc4GodDoYELyB4C5NXfxHhA1BJ",
  "key25": "2XcQNFtYRsiCUH2DEBkN38dQ13p7CpHNpA5yhTSrnVVn2mJoNekr2PYQGPBxxpw4UJALLdbi7Ft97EwABojrr8MH",
  "key26": "2C9qn4Y1S4mB5Scn3GTEsHVK5enTrK3aBafybYRnpX6tmVw29rg6AFQPWdcvVZLujVgtTmjGBdX9vWQfzdeVJn1q",
  "key27": "t8L5KW5Qb5kAtuietgni2btNMxpDcipBxmcPr7zZFoMrxP7yKoiju9DzcNZN1SR1G15Eya2x78MfiMFwbuh1Dqd",
  "key28": "21NDHttLjp16yfpUafCWrnxbbLuDB2JHo6JjuEPNSebScm8pMKXHcZ6Lhqwq7vxm6wu7THszAKJ1WWLT4xiUQVMC",
  "key29": "5qCy1BsRUz9Ax2TSeJV1AvEwYeDuNNpmEAs2Ei4j2gzvo69ugGHSwfkKCmcPgW5jUiyBqgvjU353RoRcu7X8nZte",
  "key30": "3DSoYifooYCeKnw99xjUiv8H3etYkLz4jV7YNt5r7SgNzSTvfXsPChJvCo77mN2X6NBCLWXjXT1GGdKkdUhuLJTY",
  "key31": "2vg3z87ATvxb37qDDXiwVP3Dn6sQiHDAvDkQ6xh3rD5j5KhwASnNySwgkx1GiMjHrFXmXJu9SJYhLtqwYrtD2i6g",
  "key32": "2UV7VZvXLBSzZRSCuiwXnnUK7uwpm5BdZbV7KyrgziaAG1FbmaqmjE9FWuyz3tAwWSqWDEyP1tjWwakw7v9W5A7t",
  "key33": "2PGYXbV26XpdbbYyK4CFgKRzaqyTLVfEV59i9mKmxjkXFa4vT28bH1gcvpc3iJsdJjr9LXLgRkTBPf1R7GzdF87m",
  "key34": "mpxajfi14kiMyADdA7LinKd63aFH18h6cmzcVtAmMcQGngMbQx3dksBZDP1HrxT2dQJYHBktG1MLk6SiHpeN1Wt"
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
