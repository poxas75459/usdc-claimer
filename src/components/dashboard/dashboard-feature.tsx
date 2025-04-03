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
    "pkduT2mxAmqD724Pug3N4ND7x21xCcqkhbXoiogxkrm4D3HJnnP55ciL2LameJAct7xgzfQPerSFnyGaDDpqEE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32TTkmNATzeLQrGms1Chwj1iXN3nSQhVXyCu3V7CVYJCLmFwEhqGgq2twrwDPLdk8W2UrQZRhaxkiXhgqbxQ2ath",
  "key1": "5HwKwJWfYvxgyCGwGhsmCVjThERBDQ4htQYLUbNDzXuyVicKGf7W2qPG7f63hfVeP94ESatxqGziMXG9mdBFakvG",
  "key2": "5hBuFZEnu3XdVLVddrabv7xD9qJZhkt4RoEDNCuxV8Y3cMPnkXSxqfrWH5bKKGyfUVqXwCQmUcfidJH4YNjrK3v5",
  "key3": "3fsc81gCUDHtaMBRZ8qUJXtSWFRg1LZ3zK8BpAjRAFESNoFySuZfYk5kmPL2v5toeEcXzTum4w9tYn5tp4xEepM3",
  "key4": "4BzY3XHz1bhPistCTwbxZU4BrsE6hTedJEBocX2hEBgabakCmXaoFp7BR4XP1MLBF3SrKuykxCWRQYPNEjZeTFwS",
  "key5": "4Y2pAoPDRxjSY5AMAPmZesyVB9bTfYTpsZDP7AuUsbrnvfh5H9WMqq5QP2xg8nr1V6An8Ybkq7i8azH9TgbbkKrF",
  "key6": "2YXq3TGeYgrkfwkXi3NVtQdpf8zUqLM6q6wTk6swpKJJWpNi3uHyKJSMSDHEaYWHxHWihR5SNipDT5ztoF5HfWzk",
  "key7": "1VLhjaZsBMXWawY8SRQsbeCFET2hqM1aTtrXNRXqFs5bYaMQTXz5NMg3J9jN3V1fT88HeZ9sUPvKix5Jxa2xN9x",
  "key8": "5MsGXDi1NWvGQbP3yfGm9pVsc835rHL3TWKKweGMSNB4wMHakJPuaa283Sa8rQHKg6vUNUgnMj3usGQ7psdGtxKb",
  "key9": "3dPdjZk7z6dj3eATWSCWa3KrTwiU3EKnkeQq1TM2RmE38p6NS5pM84tBaU8Z3TkJSpUES5BxPqxDcakVHrXKdqGf",
  "key10": "3jk5Ys3t29UUdjt8ZMXnDzvJhQb56c2H2VyRN16J1qa2ycBnZf7eynDvF2nJZnivWApiagewZ2Az4EL4MXYyEuKM",
  "key11": "2w4fPQc6H2xNJoLzHnZHE5nfnfXSkmPo9K1SLmcR5ZYYq1zp1T5HWwcp9S5F5pxWF2knKeXbzWNDAgpaEgfzdays",
  "key12": "5R5WDPExKzL8Dv7MmJNbfm229KJFupCHAuBJX8gS2o1EdP5pHUT6gkjUHL8FXyCQV2e9dpN5bmPwH5JYYi9xpPkf",
  "key13": "4oSgk6tUrU5jjgYY4GKUxc3BbhV2aC7RtcDxsgvrMKcMZrk6kgwzBZ7sKxAPK95N3zkdArpk7vr6uCBSqGDoZR3j",
  "key14": "4vKhp1LBCnnPy6Ke6N9cBH5AScrKPfGUpPZQfdjguQbFH7jRJ2tk3wc3Gsy8vmmJbKSGcZSqk45wtkjUAniowmWo",
  "key15": "3rUcB1ccYPprGPFhU48Via6uJDUrCSLM6w82C3obCLGyw3vamr5c5p5NVbrWxFE3HSs586e1xgHRoR2VrtRMUgsu",
  "key16": "p49hJoZq3yhKhQv8Y3tiHZxspUJphoMLhJVgMwHFhanaM5bDohzppGy3ZXBh69m1QoNF7TYRJHRYmG5S5N8bwNz",
  "key17": "4vgqmWXFR7RWf8Rf5SoF8HWWr2NV5Kzfek8YWm4ZwsNzJ2kP7friBw4ej6L5nCMNVH6cSGsgEP1Q2kHpDad2KE1q",
  "key18": "3LruLabC1AGQCwGmbBJpQMcP1RSxCtZDEEhXBkbeYzUbLkM4u2U4eQiw7GXdJyh84pFFK8F3srbmS11zQWhZBS1Q",
  "key19": "4LfBKvZkaKjuxFuccrkdRW6duCYdF85omw5SPMkk9eMmbsYwhB5xiRzTNmceMFxouTzxd414ywZjirL7SYdt5BG5",
  "key20": "4mhhd66NaHDjAfnGSJuUh7XKoeYnk5851ADNDAQGpZyBbsbAvhrCRvGVLgQ7JeeV6LgYPc5fn2PUk9NN2ky3Uhk3",
  "key21": "3kaM7xHxpgeerxJcXxftZWRweerYoUNbBTsuMEQUyZLc159tjqMhAG81KzmsNxrwYtcAdiA4mmrBz5zW9H8AZnPA",
  "key22": "3dB7qD89MxUH4icTr5X9u7URLDvKNhn3XmY1hiQVuCF4M5jhc6UXBHNTWfmWXoqHhaqVKUS9DL8iqrjqPUeXd5zV",
  "key23": "54dSSbLFb9pWpJMVv6fpdbb1ahNL5aFHUNWgFWGZeGgVn5ngoB7weNQqv7pVEuXGx4Dc6hNiwWALCXwB4x7HpF51",
  "key24": "4zNhstU3EDWFh7N9eCJ21Zx68MbC4GCsEo5KNJAgXB138aMZEGpp9Ee6PSiguaKD1gNwDo84FdzuVsR9QqiYZ4tz"
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
