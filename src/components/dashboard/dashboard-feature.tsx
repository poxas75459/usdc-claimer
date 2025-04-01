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
    "328k1VuudVJ8VnvVErk8C7EmKbDAMZXVGaZg2Md6pUBSgkawb9UL51gMUWxt16dXXLn8aoH6gJtNUQDE1qv16yNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZMgpK5zvMuA3XXAvWea15yHh23rjsx7HG9dEgygM1ycAXi3grVycUppeXPwDL56itnqfLwyFhijb4dKD2DAVrx",
  "key1": "8HP96xTEjBui4B7S9KnbERf1ioWfhPmdNzjYXjUARiJbs1qiX4XWjQ3pAiCZkvXnYWypHUDZ6DnL45KqW3ftPMt",
  "key2": "2hemS9WxwwY2AEBVS4WyuuYMShRGSoehT2c44tCvp3WmSP65PapUFai94kxpZAJBUs9WEcsx8d55uzZ3QEUCppdf",
  "key3": "628tiY31n58i9TYQSGWyje2KkCrMFyq4hM6yv849Rhx4wtZhWBZT4Mw5AsasuerpASomda4yTRXPqiphGVYU5ZnS",
  "key4": "51j5AUqst2zp8xuYiR9w44BwAACj7eq82zetC5mGkCFaCERGTaKHWUkUASFFLLuuYvgpJwZe95MBTGrPab7xFpd8",
  "key5": "54hQ1SwrLAtbup5gLiqDjq82Gvb8BCwssUNeK4H2E22exPQb1q6AeFN7aJS1ZbrA9mHXRgiP2g6JebRz1NHYJx4i",
  "key6": "651JhHoA6pPEjWiomczraV4TUCf5MpHnmzQiwx1uD2u1f7KMMDUPpFAYCd63VZCLTgRAtYm6V5QobnaRXfbv2Zsk",
  "key7": "THy9J3M6KzRUYC6bZrXH6zfnk22CbB6xdDscvUmTnYam4wfSxvdg6fdbYhjy76owizGUGw1N3Lz1jwvmdCFQZsc",
  "key8": "5eMyoCXN5zssFpyoncgbEqTSsL3GHFXCa6sToZkSWQ6US1MKa5dBVLmaF41YE3datgs2nSDoU7YcvH1uNvLBtDqg",
  "key9": "5umCMW662vTP4nWEvoGB7uQc5DUHiS3rUXJd1kyyaxHw7YaJSiRAR7AgBtLrXf8BoAEadPdubfeKkP2qnSGx4nvG",
  "key10": "4nocMGuMQWojwCKsmauideTBafsX4rGX3Jj1ZP2kuGEJxW8ZCQyK1rZ1hxGvotNJEDQ4fv3XNCC9ioeY56XwKP7j",
  "key11": "2VB5UaCaAo2K8mZfdYReJ7daT3SbByDhypMZXMT5bMmZ87RY9tTYQttdwwFmKzKgKDbw1efs2HaPFXTrfgf6nqym",
  "key12": "3vfQuwJmcYRkhFVVyVqFTnoqq7MfiK5cxYrQBnbmDWPJbrW7m5bnz7Zwm1TVyTLWgnH9eGrC77r7hZfALoaMqJ4r",
  "key13": "3hEVfnHrPwE6CAXVGwv3EdWZrtg1PUjsVQj9kBkJBrrnnuYPvmWwrLb2ut29QAuET4adYTL6A51yJBEn1bjrb1ej",
  "key14": "3KHK5khv8y1MFcazG8Y4n9BhUDQHB75p5rRz2um989Gi5STACviUBZ9KspjWLcmw2dJF3YgZqNDQtNGhJXGJpraq",
  "key15": "22ya5Bb25cSx6bgRikJou7wLUkc9KLqdXjgT8ThxzuWnjt9iiPZP8x3ZQH5wL1QrVU5GNm9NEqYYLeLGCY5vzoEK",
  "key16": "4eBCYN4EhzuTnrFikJJisLBvto5PB32RUZRJ1ZeP9NJ8a7syMUvYUCvpQjD7zFwwY9Czt5DSmYcPt2wbpCvD5mQk",
  "key17": "5pPWU7BjTQmPS2YxU9UyRu2HfZ8HF5r51mohFycN4Wu1a69TtNqFBPeSVb5jefRmDPvmm3Daq1Tw39NpLJTNrgDy",
  "key18": "2cT5hE4s44SLtKFkjz7ckC6jF7WSkxQbN5a2VcburemLKGkEJ29QcjJDrFkVsqEiFW8Bc86qUWCZnnchk1GekBiQ",
  "key19": "Hexk6vEUxNd3xm6LHpLd776K9FRzXwoG7x2jeecrEzd3GgGR9voc4yAfvjPn1eqZ7Bd6xWMTeRroHHCKnhaUBYG",
  "key20": "5bqLfLwcEdsqGsMBFWfHP6ULwZvzwJBjonugwkoECdDCkBHJVJGDEdwfEvgdFf8dBA3XkSeDsCcjbs426xFHYN1n",
  "key21": "gZEThTBZQJcWekm4gumro8DUVYua8LLYtML7zXvP6ZakLE1VQTXs7TmU3xSCwGyhe74EPdFsBkXyxDvDpN5Yu5Z",
  "key22": "4YbMb7vrLArBSY8j2B8ndSoEYk8zaScusxdCBGXaYyPYJEijwLx2CAicTNtrKz32unfqfLDJo1RuZGzwZiRm9CfY",
  "key23": "5epg7PiTuL8SxETBHp2bp6CMwEbAHgtu2opPtoaB2v11cyQe1EMeMzUxDwmvfWScmSu8d5vRpAE1SjWAYnTN6qwA",
  "key24": "4AnMuyFPY6wV7mmQdf9zRmcJvEXiJxJPWPJECEJzSg2BBvaeTNrCo5K43acAbkkVYwxWFCJw8zaonMbbKvbehH6z",
  "key25": "x4mSWGgXVMWu4VrVqnghzrDaPSwSjDzz8zffmzbbtp1w1D4frKLSzTbnjZGTcBpMSXoznzJvhTXbKcRb9XWMxoU",
  "key26": "5tcpmx9BWDDAvRoAGrDVKogpPgdqsnFaLXXQRB8EftRR4XAv8bMiuZ657zMFtmRhUVV5evCUzQxDtTS2n21ZtALj",
  "key27": "39yR6hcmYzeEG6nsKYkwuC8g5QjC4bZUfoJdUwFsUGpBCALqxd8WiNaJbh8vAAivwHaqxtjTFPG6iBtcy8Tf8Du2",
  "key28": "FZhmpfyDKQohmzJCHsvkbtEqdQuNUijRXqaggNHs4knVoWncgEbLhcCPkjkoj4Dm6CfcDZhUSowqPZEEsgHQxo2",
  "key29": "4DUgFVapw6MqZTV1EXZXccVtM7C7Sen6eLPZCKcLtLSkbftNfiPkFwxVEeSmzcTBW1G9x5TFzzeNANzEE93nfp3R",
  "key30": "y7L7cKFyiKEX9zEsijx2GeKBPdtz8sJupchN3tiZz1AjABTfptMNTk7wxDeX6rH1BQivAHLHhjxCM2ef3FCg3Aa",
  "key31": "GmYucvh1SHYPXDQdf6upyaVMdaeaQZJ7sKkSR3BPhS6HBvomECSvwjKjo6EfkEoschryKokr9gPVCfEmcmpi7SP"
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
