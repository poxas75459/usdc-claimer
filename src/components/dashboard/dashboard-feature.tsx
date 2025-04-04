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
    "4N7yrBiPEUU2XDLm1QRf8DWajb7AEg8vtM7F7rSzxynGVAnFQEZMZ5aZA6DbLCygaJGMZDy2K3nW8SkBHgiyiCQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M5aHoK8dVN1T9Y4otBq79vmUhJJNRhHs8BTTgd3rFDwF21uBwa8fdAHzvXYeG8ZMpFz99pCp2JD38KrWWsYBLQm",
  "key1": "2E4RRPiPskLy8wPQiXgBvtJ2cGu1MREGE83TjfuG5cwQe6VhycX4cZGD1aeBCkStga6fR9WfyDE2apiawA6yxd87",
  "key2": "38YcdeMwVnhWowfoaZ95zn8Jd99CZyTcAC2MAEGetGs81SnouKAaWaiPbW3nUrdGF5fNjP9oZ8SabmvNQQDa1CYE",
  "key3": "hrEEQnkqbhRgzDhpHWz8c2Kp3zf4dUueFBBWH14DnbqSXLLj34UVLTSEKpufWXLVMnNo2eS1DmXsDTsbfdNp6mw",
  "key4": "362sqAqBsx6YRgEnjbg3rFoyAbn4uPDcJVYvVHZ4C8AxkbYzTwY8mBt4YVEQrnj6WPmAcWEotABP4srbZg6Wr3Nu",
  "key5": "4BF3tpSQbcvJVWCSH4BUWzLHhEhjToNU8hCwacGEDHUhgmh2HeP61SZmJ5HGAJX3D2o2keMPHZnSn5L5op9yUyyu",
  "key6": "2AS435RMbBoWQ739p9fB9rko9ywXbm1DYvMDTPUschWa232TzQAtZV7iZVgvtzQ3usjfbgU5ZKCEnX8TmaYHQhCM",
  "key7": "5huLz2exmSH4F3TjCEnFRHHog4yuhgPguXhoYLEMchkJYZxMyNU9t5anubuEf9ijgVnYvAYWC2XzTyaGVrrMALQy",
  "key8": "2WUKNbzGhiakHtUx1Bo4JMakHX7AEhXSiW9eBi7Hkpqstu63EEauucZiurrF7HctkPS5CuAhpz1JNLFxM1ce56ZC",
  "key9": "4m3tmyBGJb71kiukQ5dV4wTACxmNJDmUdBy61FRLhBdrwDT1uuQLRh5xaKqFuSPVgShsF4nT2Y4M4WRUJ4zWGjSC",
  "key10": "pEVG9SeSsfkcGkbRTKzibY1s1NYct4ZL4CFhULXDxYt1RRK2vkAtdEMtXDTqGpVS9c6A4pt5oEjYgNeFYeNZdpJ",
  "key11": "3V4MZV4GZHBx8bMgYRgbGqUsyd1wRD4S3szaKJ52zmpx9hT1sQN61KkANBM7FCjTzwLEyXseP6ZNGncaxwGxfWwH",
  "key12": "3ApKEhenVnCQgnttdgpcQYqfLjp9aRpXw7UapQoB549NtAxk7JWAGHKc96iNEZFFCtW9pYgEMh5SH9H4F2s6XemS",
  "key13": "2Aqyv2Q7UGWGv7XnfPJi1xYFKzFEXx4MtGE9ZpPX2cAAuiD8oc792sDSiqQZnnUXLvZ6CpnJhGpLTRPCuKZC8YT3",
  "key14": "YzTSq3JP96M6eryacVDX8CGPR7RTsJtPjQm4Fwr2fJHr3TeKgQx5LVLRDCiUVGZVeJvLNDGJR1sVJn4F3wQchMc",
  "key15": "RJXSTQXLG3QxJxch6JwjTkGkGDkTjSqfY9cA5hJauUs8Fu4vMQLccykgV38UuTi97VnsSLuBmZaBje1cqVJntgt",
  "key16": "2fpcGeY953fACbfLZPL38ZNzSaYf5RBxVi9HoeSWpStNtDHegiE8y4oLTK2HviAJJCCCNkbbVjrQPqeGfj6KJk9j",
  "key17": "kv31MXkd59RQ5mL8H9UqEqEpg17nWM8x7yy5PSqFwHXUjFhSWohBHqfPaHUsLoSHk8228ZWQeiSC4xtwgGYQntn",
  "key18": "N5UXKqpzNtSyeoB4nxG2rSH3nxW33cx6KL81MUiQUtnPr4vbuUf6mzMTRVCkxkuiLQpcGwsUk4qFFWjuk6M1eLE",
  "key19": "2P5RUzhBi1amsTfSuP4ubL2hZunSTc1uarzTkA6ZX8uTSTjkmaqdsMA9NKcgdELuHWY8yfT16oXbq4W9hiE1jedU",
  "key20": "5nw4nuG2TeCfquL4ACHTmkR15Wg4Kwbp4xt18tSXHiCU3Fi3em5sziBTjgK71NTNsoY4Jmc4LAWoYzte4RzC7kyT",
  "key21": "21PeYYioERwNM3N5mKJoCwqQX6Y2Fjbzo3jzNWzZXtccmTnDMTrhetWaHryotmQnvA58YsEGF73zmcymTjDS2Mny",
  "key22": "2ThVtc2urPmXpbMQ4QV1B4ukhEoXzaiBGqtkRDQax5VLgMU5h7bpy6Casz5tdA1oysfWKARiKkCTQ1LFKWz1UNHz",
  "key23": "3sNCkbpyn8nCyfoWmJ4ZUEv2e9hkin5jRh6e3t4yANNmDqjoP44ujzNxmztoPpvuu1ip3zbrmTA5brXSaW3oRfSq",
  "key24": "2nZ58MuK7eZTciy3dT1atK8E5iHQ9JWT8YrpNWbTPZCfp2MFkqcFPCoappqw2mKh78xw54WMCJQvfSD1ycDnPq5L",
  "key25": "SoAjEuvkFoopz18HSyJn3NoVChKDtirQWvW9UyeCxH4ChrercSeQr7iCXrEXJue3wWiEkVPmNVQ8UY28eqWUB7t",
  "key26": "4NLi1x5x1jVTdpyPx37EuwaUgE1Sd3rqFxWvLaKPQG7Wkaii6DQZXgNUGTmx6CVUQ27pKVRZHpKq8VxESKHkHCyH",
  "key27": "TeAcdX7ZgAFFD8h2qcEpwjRRKHjsmCtRvQrZizykm8ziAUYs74njLY2gyHfViv52RGHttTitUN8w2ZyusoBWeCw",
  "key28": "4FbJrs6UHh3E8BKPnx8HruDRn74Rw6tpDrGVXnggNsDnS6s1PZcQBWhNz2kpA1F9ymLJBdWM1poKKUGXZxw7Fx9X",
  "key29": "5YCsSTWjC8LXrXAref25112W18pxWWhvPDE7uTb2xcZkVSRF1rGsW8brj8XDdYQtUjuC4cbtHK912S9wP5g19qrJ",
  "key30": "RFauybLQ9uqxZwt6E5s1LyvD6q7UEuVw6A2RMhRQvU81KybxBbNZeDpqvu91uaB1dEp8hqaGv4WBfTukdJzVMyS",
  "key31": "4tWgesLS3daN3XiwuCWnjj1bB8vmjjLLRdksXhkhUcBkcXExrtsatGfBpWGpZ7V2dB3DhXsYM77KiVeQhoMAFqFE"
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
