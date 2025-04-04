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
    "MnaS54MKws2QUkRB77sbWv5Dw5LGiHDHSBeCLiENYKZi24dSkacxP7UqtgodPzVSXzL96L5oqqnhUjA3vj3o1aK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rHKP841ziMd4NVZcAyak36rHSDBk6e43H5osmcHLF2oS9e6pBSjimbk3htBCioBGZGdf9RyESkWVevTrR77LZR1",
  "key1": "4YdqHaM2YoYS6WoCAUS2QGELqacXF5LsXSNJiGpWjJ2f9EPCBpMBkrBADk2RgWDoqWCRs4K2GnqeoBiYsocBLcFy",
  "key2": "2zmdjmgHkfz1rCiRZ35x9z9Gsvo5apL1W3EPdjBZYSVNHzVMAMp9qt95k1eHcnXeo6Wj9ugF35wgmd7ZpHrBN2Pn",
  "key3": "TrrZzssvPdAcMWMxnwWvMkNGjQLZ4SzDaympzT9koqhJSJU3dWUx7DiqUtHgKpwqfcSFrGtQRMkFuW8JvVycGov",
  "key4": "32prczjyTEnx474Ej4bBH3GUt8q8h86DyvF6u9gx9gokojp6M2ot3hXegCJ4pR6WYs6uLeezSFGMknR2yiS9Tj4h",
  "key5": "MzRKd2u39k7M1FW4WCz7r4cSzNRkcizn9eAiNMbgd2dJyuyENf5GruKhzXCyB9kgAeVnx8Ms3XZBtTQrNisnZBH",
  "key6": "4AgXRdyAkTZSz7w5oUdGmSD8zz4VAM787PUKrgEJ87LTvKNMPGWH5fVFXC4U2YkeU2fTnP3ApkjfEBesEzGHTss4",
  "key7": "rJmw3nPyLAobkKjmz286tZroZK4ykEKzGVR4ce3BbsXdmUtcSMjUDakD5aKZWZkpKUAE7yuPjo7w7gGbtPj7Zoj",
  "key8": "5EAaJj1BjjxRYXGR8aauG8VyXpGUWLhTuAaj8k6ZatfbuH9gNALMhsD7Cq584NyeTtXyPpLLVnbCLyGW9rRbRr4G",
  "key9": "5hKn616ak8DLEr51pHH2fyfymAi9bdbfVJgFskx6roGbHNLuP4JuqMWaxhi2VTrCUeE6YyNifTWa43okbyfG8zp9",
  "key10": "37riQPoHqnvRoUxHHkwofb8XhRtW5ALdzb3EGuGVj7PAcaWiw8npG44DMcoTeeim6dQi48iJsLaTuMD4wHV61G6f",
  "key11": "AJEm18YsR2ygQZqaAU8xAb7Hw1cMvaQdyT3VEmvLNawY6YcUcennCVUAgS3iysUd1NHCXsRYneBgJUbDv9MPfuJ",
  "key12": "hdRr85MZtBB7JVpiqSmZQLDpWKrZMMFFNzeXF3Ci9ruH7uMrNJaVxo2pue4BRfk7piizNMHKyveLR1fsG278Xwi",
  "key13": "77gw9WeyeZEGSzpy7eUXQHys7agBxTPKZxzEBZGP59RUnGLcxhVovt8fi8Z5JmtHne2u1NjfyENkohu7ajkcKk9",
  "key14": "5JC5R8GmbKp1DfSkV8AonUy34BiXn3k4Q9Fasah4XHdiRem5wu3P5sNmYTh5F7XqLdD4FVeXVTRGDUL8RueDw2jF",
  "key15": "4XDspAhSKEiDQ4VYNKkQhGvdftusxTvM4ykUbCC3ouWJ2dtUXoy845JU76rRg2Pny5TWA2uV8LUyakcjqmyBp25h",
  "key16": "5JscDCS4FmiHoXvZbH9J9qSGsW4WFg41g2QrrM8fXhozjkr9s6HoBFghierZwGrtEDdh1Qj4CsuXnangJ4Tygp9g",
  "key17": "3tCTr8HF6yqjUzA3DPNVcjAqyfwuNtQ5DHfqRrjTrAA1brow5xk7kf3ALikCYoKipTTscgBxF5MUmEMuBDDJeGzh",
  "key18": "2u9Uj2CYnTwXXCRLGGNWU6NmkNM94RQDjLVymgtxn5SGT8LHTc7T3xSNjwqJMaFN8GQ1ezh8E9uaoBLjMRPtT1Yu",
  "key19": "5tc6MXjT3nzFXECkp1po5CjSuCq2JApW9LcTZo9toJ67xd7CHZNNbgMmrsAJyvFEWigyEtm4QT2NbFUa1Bxu5X9M",
  "key20": "RoB8hzD9vdaLE6xhjYVyW5Uf3KCdRK6W7fjsMbFyJPQgPpLZ28H9GWbDYpV5f7eyDXtpbcpnmwrzY4xWWwrC7kr",
  "key21": "5jsSvYo8EwTRsAL1WWLt3jgvLVnuxA3WSqnPMCVti4yaVbpUFS8LVb7zrLUqfvRqzQ3qpFrfQKuPuzrBXjn9jncH",
  "key22": "2VKQK6mN2GdYXP2VEn2RNHd5bC5ujrJiypKyBv6od3jXZcm378tqp1Qtg5nnrnVcuXTHDnuhRiDmuqv3hUN3RjZJ",
  "key23": "3HFCYfHWFhoFbAaR2tRmHZPUFCdgs6Wni67ozYw6thnQs56GsinqpUTV2md12bVcgcbmi9xCmXZ4h5Ctmp2oUSZa",
  "key24": "5kv2QrreEJpug4qrKgjTbeMbnyZx2pW5nfp4hRfuZnA5tJzCa3H6L4V7sP6EAznTLFjnAmUpBYaqgaEdpJ8CmMdo",
  "key25": "49mvgN1tUE97kqbpnGzHu5TiRnQ6FkZ1kbSm5tuGcQ86oQBLkGqhYiSQSLRGXqfW2ZnMwdTVfdU9fcwfWJvMt6s9",
  "key26": "2seVmQzusobMooUb34HZZDpNcREfryLsUySum3uS83f833baqNzEcbyJ9xX4ewarW3j5TAsz89QVpe6D1esXqw8D"
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
