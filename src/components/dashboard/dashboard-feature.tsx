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
    "2pgCRH1paYPZcX9thAQXppiHqCBz5WSk8JaXtZtAFPowa1LEKnn3R7kSEDz5dqZXgXiUoiHawRqqdF1QThM9gmYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uax2dvvwzScppUntsdk9er74XgETb5eKHM4QfM1WY787rZQ3n4EKB8dad58MsiQCq16q7DM3k4gLYiguuWhAFF9",
  "key1": "4uojZP6WZVP2J9989ynsepaBDQTFM792CLMqHEqSkATnGiWxwfXcvrfj3u9eGZFxRDksXfPkAkC8BJpwd4YxaNti",
  "key2": "3sXmsJf6S89RvxAEhzTDATEiTkH43NWU1YxmGiTbRuqWWB7nTBJpCT6YuZV52RFcVYCTC7oVEo9Vw2R6YBgWErLU",
  "key3": "BGs7cYxBVJgLuzHtiKm1WY751k8zTHNUCc1bcx4S4yfHjhGoTrqyTEJKdG288sAAHH2x5gejhZ1AYj3myZcGe2X",
  "key4": "4NqGwA9WmXwMSUqQk5x34CeYvnRyAT5NcFzzDv44YHxqYFtF9C74hiGiHwNRDYtXFin7p2M9R9B2TwXif4nJCN5T",
  "key5": "5fkCEJeh9tureCfUHJxfu7Zc6Bk5UwcNVq5NFXggkqRF5cDZn6h3hkgePwF9cUHgYfDgufnfiGijTQDrM8UZ5aXs",
  "key6": "NWyEA8tjSZ83tHqzJwMsgML4Wf4gng6xSDvYYFHt19sfoWQo5FXkQg7ZGFDSHYKh4jV3qYdB5mZNDJahK7R8vX9",
  "key7": "5ARRJdG8Adpsk6YXpfdP7UVNpyn5bdbzMyDMr4gXGUwGH7n48AQZBMUiYxYLrBouY2zb7hHKkyDHzzuHEj9UJjki",
  "key8": "3yKPTAEgo7vvgocsSiU9BAaFHko2uwCkhe4Afb1nGnpRf2ejkcwiFVKFUGtxez3mb37nhhjUyJiDMTEgLSeLLYmF",
  "key9": "3HTuh1pAeUWwYDMUiLKUbSBCGgjwtDFNuuPQQnTVhKrV6sVWBFpxH38YN2Kuf8972LTc2yDiV72yZaEHb8JTn86i",
  "key10": "5qKmWZdxMZieqMbFixFNc98dH4vEh9dQc2Qiu7fG6u2esTS3bWPSjw2DYfj87U8yDgvoE8tZnSdDSPzhw2yKdYv5",
  "key11": "3YNJNAeUVT8v9WWxnjt2RYkotFZqjV3dbTWSvHsBzVhrZRRDJ31D6uDaedugCYicMY5DJo7b1RJAYoR1jmSTDVVT",
  "key12": "4W92Edz8AbHC1x5mrSJNqGD77mDVYhyo92FV5mCxvTULJn5XcxGdGkyn8WQL6g1XVdBdbfruKKM8SmchfXWqAsD3",
  "key13": "2W7sssFVUtrnMh9abCpmxRZAnZwndZnD6QzDvkwH5mj7iR8Kwv4oZiFxBmU3PwuirE8YdMevatZbtg2eRqbE69ES",
  "key14": "2KYnMRjSNkTeoEqh5hP9nBUY6mSsrQiWW4mHx8nKL2m7ftf5Eckgjgh6ckUCYWaGtL92YfCt9REGb3yqZqe2Son5",
  "key15": "2Km5fGbVqPEoTGGZ2o9HXs28wuAZHy7zu2NF8Aq36haaqFk3Fkvj9QfRVopCgd365G7vq4K1t8o91k2Pn4VfwsaA",
  "key16": "2iezVi8vSdwMBSUv4DznAfLKzm1dqQ3SmsCzmmqha27VJqYtLJmtH6F6XtZCT9BWbm5MJYZNnME5VCHt1VsS2vBJ",
  "key17": "2KLTUk8J1xnDWY7TLysztXnYSrLZJPYq9ByfCP4MC1W15n6dCr3PCYXCCK8XwQpEMhAnZHX6kycRURr6wXVT9X8W",
  "key18": "5S576ckGeKuz53qrZZ9W26gVBRqa4ZjEnD1NAqVw6sjoRr1299QHUyu7uZjbhQmneBaPdCoDcngJ3uY5PtLxB4Nb",
  "key19": "3pyWiBUVBrJA33npKJorCDZGCJQZg9J23vhF7Kh3eMmgpEfnA8tZfMgCmCXgoYsXEpCugasaVHkEVw7pD29Vw17v",
  "key20": "2dqtYCEcNbRaNiGuDFaGHwnJhy1zJy1UpGQsv59krZVNr1SaLiEGBAe8rzi4iPKXatm1kYFwD9YhtDvBvCwNh34",
  "key21": "5vWxTkvbCD7B3v5Qc3sQiNKRT7x1B7DrGb8rtNbjtwt5wDmYFTse7PB9UGMDnySBLEuxdTgBpRz8fhany1AGZ92P",
  "key22": "3YGrGpdReaKAWCVEL2YRgTkPugzeP2m1u3A1DDb5vCBQh3dT2ZbdxeRUzXhuevGg6Kmrosojnvjdqrm6o6rBpihv",
  "key23": "2gpDqjPhY6EKGK3SndUCtsJ7eQ2dJUSwcTV6HowKyeHinTsdHD6jNuozgJuNZVbmXVQ7AG7d7QxFswxbcCAkm7sT",
  "key24": "5dyiWv4nFEsSSo6URb7rzPBDzAexG1JaoQBLWfcRt8VCmDzTr1BrR3es2kyfX38ejgAzsK2VmeAbeR9KaF6HMAfw",
  "key25": "2q9gYSMAayc6yKt1TdajcisRqDC8caoNRtTPpQo9ynLRbVc7wxTSh5XASysAMK16SzvkUyKXCfvLNJmfLbKRu55H",
  "key26": "3ByqkBygW9fUi8TQgPVHu1vxk5J4E4mNduxKBXpgT1NvarD4TTz5Ap8YbNVQpDzQy28k73CUoyMSSDQTFWYUUYyp",
  "key27": "3irPnNEAqentmqMQaSF45Mbadw7mx1zn4psXWKYX6wdejH7MfBXDH2oPqnU3qxC9kY9FVEwKmKsg31kvh9gJZttq",
  "key28": "64k89WyvHtsgocJr4gujeZbQ1T4aTwyQT3nZzWTamGhfxSzpoT245z8e6b9m184FLQLAodb1YrE6SSSr1QzukBuN"
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
