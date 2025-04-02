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
    "2U7WbGQ4UrWHET7X4ZC1LecubZ8JJkkRvgEu8nRAcTKNPLkHMWuj7A4DJWdwDyXADxevn9MrrX3LKctjA22kPiLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xPv7hrnu84oqfNmW212UYe6SQkioNSpvFUyXJrNSDpjEvygSrjC4P52ajbYDAW215NEuCU3UqGonfsoT9Xryd97",
  "key1": "2CTDuesMZxbjrmqsJSkyihnbg829qPEzvUXQdZkboPDmWhkHwq11gxroaT7vvGU8BfSVU4dkhRX2pAR5SKptomRe",
  "key2": "3AWYXbgCfgpuUmBt36Y4ajY9a2yaQv8TeekfZhzFhJ4GKPcioT4oASFABDvsAqdm2G8w7oxuzKrgvcWe6w1x3yCa",
  "key3": "5pAiPWa6moi1h5acoPjyguTsPVf5rNY5gYvGHUmRBq3S7hKAAtDBPSbqvi4FZd2GUPHFzqsFT6SKohA18EjJ7WM3",
  "key4": "27SPyeEusTXbqKFWmAwuQykUhBnoNenTfBxuvodSkBp4WcUG5wnCSTzfCWwEgnpi4fGKqVqDu9jtK8WHvo2LEZ5k",
  "key5": "4W5G6siU5vPJnReoHBgcY3cwA9ReyP4f9DA6g6WsCBZUcABU3fE1UAy877ZUYJi3RXMvpEvyx2HND4CW5Dh52T5q",
  "key6": "4GpLPAXsymuonWgJj8DUycS6VLUUspQcTRaqG3Q65B1Ky2aTeeTcADR2GzQQVT5rmpyAJ725AN3Qbi3BNGBd4zoR",
  "key7": "2upJTbVtq4e7ptyM1yeeZ94ux4xDp1nTRFDphQaGi6SN5M9Jydo55wjBq77L7ofG4eLLVRYiRj5nZMJj5yfoxTw5",
  "key8": "4nf23SZaFfHBSkcQq5DJWtJmpYG7oXpJH31a2kykW597dUXoS3VpXAaTdjxm1ybYgQF4aG9CGwVKPWVuUBhVRbz6",
  "key9": "48RGYbVujQaKFf6533vjRxTU1ZPAF6QhGRzogVg7p74qVhqq2HWgP7Mi4XmX87JNDvUgU5Qt5DPZPzCp41o3xkS3",
  "key10": "4EguTyARuR5Y6KgPAzt12nnvQAZKhWFYgYx78ciFXh57TaiD4c2mkYqXHEgePGijvw6bnRLLn4k9USTM9cNhGxyU",
  "key11": "3XkCedkrqkYTXuVCgQvVashoSha13PkuVCMRzQgyrH8Praa3xmvMaYGvFdikYohoeji4ZrSajzSu7rxcda1BpeoV",
  "key12": "3zMcxGq37YweK79orNWQ5EE4M9rmmbmKR8FiEbQBYqywBTjxsQMi9chUTp1NDY6BLMbmehotiRyvfPAsP2HaPfWB",
  "key13": "GSFpK5EUqQvQmgWXZGhiZb84vfronuZWEf27X1fkqpdQQyWw44mK5n2yBQc3vk5Zpvtp6nFC4CVibnvGm4oReqz",
  "key14": "2XUj3BEadEWHSNknnCpf5Pka2C1VMRsBV98371oabEB7wDN58YxkHHSTAdnpkwZzSQkTuzJq5J78uHHKtvEwTvhZ",
  "key15": "42Y2fk56f9HkMFFRswe4oxyZTkwtoLpFR7TsrShVdsLrU5DGkUczXpQxyYj3by9ZhuRCqaYMvWTeFotUaCG8a2fC",
  "key16": "r2oiwBBYAXirS3z5XW3ha4Ldxc5GqWVoAuHUeUwrzuwBaD5Dpz3wSYHbDPMBEnZJhB2yFcXURPwzJNQxRvapMtv",
  "key17": "6LhAaRZFPDkWXmksp5DtVVbTaENZtqWesFLKC6C3uPnkExntEt7ayfE56iMzjzZas5PRzW98GFjH8jfBr2Lh7oS",
  "key18": "3QF7kNz7wZe2VuRTC75QCrbnwPBePfszA1Km4eyBZQukGxekQTUTFxmqFewkpxjuR9nqic4uoWBgvxi57YtWB1iT",
  "key19": "3DUvpwguYvv8WWi7a19LqoxX9mVSeD6xJc6sxWGAhZUz6oVtzJPQUFySTeEMfgSC7Kh9ACxCGBDR6R8ZFuQGustp",
  "key20": "3oZ2MpmozCkAPmppZ3fYvWDDodnv2fuRAid2btD1CbEvC2teFEgPDQiYJ9wjvyKedvvjrBVFNt8Cc88U59zYWdf5",
  "key21": "4nEUVbNet6ymHKkYCXNMx6jitgh9Yh5MJxnGSSbVXABjsDx9iBcqdKVtWaWaNpLpr53W1h8MmYh3vXqHrYYUaBaY",
  "key22": "MomewDojoLV2ezSZdLThtKEEfxQgEdAymNTR6tvjEr6DC1VgGhsM3rwfaWiEm14vrwyMTkJxL1kXmZsmWtvMehb",
  "key23": "4mBKWxc1kEphDeCQPGUmoitqR4GCESChb1xxnQiwPPG8zy19o7BxP3rMTtb7xiNTkZf33shoPJSuvRXssremePXx",
  "key24": "3iRoSkdVjYCc929EREafdydSnAMxvE12QQA6SH3eoAL75UqjBCNagNioo7bGVr6UZbgrw8YBq8MJrDBQEiGHmZtV"
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
