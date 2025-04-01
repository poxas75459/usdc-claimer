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
    "2FEL2R2o1tDnFHMn79qaZPBXgGtscetxLSSpuf7SnVmV24qYxXxgCpvfft6yDy87c9yADvMfNnZ7Rts3QWPXsmq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5czW7GZLogkrGza7sZwDFifVXsXoyw2BSjBqA1B1WDTxTYxRqBNBwjvdBtv2SYkGMQDvF7sMqKJem6F7oQKvQCxN",
  "key1": "3TQBGgyLE25NUjSPeD8FadUGbut9jStnzrM3XAgfKLMQSsMbu7z58MfJ3tp4yEMG8Z4zozUUgoTVA8GpZMxbDyd2",
  "key2": "47382QBmThwLBR5gmTEPbwyRHes8NjaTWZXSoEZ9Hmaw1MKVYZa5rdkz9YVkiCFeSysngUkti868TAW7TFJR57Xi",
  "key3": "4JfBA6rCr2yQ5fGTT8dk1eNgFdziwoD2bpV1cuywcLzNcBCYXJ6dSM3cnXF7cgxkveU6tr17F6tdLJCtB2YXJ8CS",
  "key4": "4y4FkAUvM93QyEFeisTJ5FGkDwkpt3TA2GZuTECVNdPLqwoJP5eFb9wfz6vVvPFJsB8W4jvHsFu1CPHnhwVBuvFH",
  "key5": "3SpmxYVtH5rJ5dcDQHKUAudWRdbuKv429tJwvK3yK5cBtE6DcDZ9Y2SFy2J3f1MYqG462WqXTf4Db5D6uFyUuLqc",
  "key6": "7VsqmLsHD4ho9188AjaPsBvxncERqtpcCmCL3wTAoD9282xuGskTjVmJztQ4cwop83RpTkizzZsTBThqS7ULyRL",
  "key7": "BdqnMG8Y67aiMMbv8NN8RwqRdeYtcNQKJoTgqnKtJysxc7bvTjQuLSDfidTH2KZPiAyPJJTYaVyoNFyeycqUP5J",
  "key8": "DmZNbzHFdE4BpgeQRLvyJAE5MErrabh1x14MbmkoWSd4mMTfYveKE4RavPTMyTgNHSvzpJMcGCo6xuPXKezY4oU",
  "key9": "mrtNGAZ18fK2oYCLTTiAQgMS2ceGLoUYBaKmY3ZsAgsj4rLibdYWq4yedq1MVn7gB2fuxRSRprcC5s97U9j2P3j",
  "key10": "3PMhaVT6W6HMGvt2sFBrBHByH4gd3ENg9iR31XN7nHTPSpYkJgzHQVh6h3grJShn7tdiBEzouKCaMheaRym3LvU1",
  "key11": "3gpZpGXpRGXJeigBPGMMAn3g5mgDsdvYGVR6psjrrMbDELvb5PJ3Eh5v9VEcUpuB1TSFvoFExTejR3CugPz8cfGv",
  "key12": "jhPGwMZAy9sj3hoxzA96A59yf5E8xMwhYpQCZnjN4Ppv5h1fpcg5KstwaNGBFiDPTL857Yk79QyHni1cGiRrpNY",
  "key13": "5vpDrLzF8yUZ5Ww3DNNCRNWVjmiRon7Ju9fjQNcCk2REUzsKWEi6obaBT39HWojwisRssQW4dy1z76hFNYuojQzq",
  "key14": "3qAQFo2KTdSnbCNAjQ1YKwAJzmXHij8HZagUznq4ZtyjZya7pChDDRtHc3gn14dJfnc8bMoijh2eDF9ZS8NEkg9V",
  "key15": "cbFXjCYihnNUDuQWADANxWj9mVLwvV2vGZoGLxoyLfhehqntkSCkF7b6BuLEmyLTMPxusif7dCJ87KopuRvwGqV",
  "key16": "2E7nAdZCE6QzeBNfpLC5cFZBnDXfuuqFJh1Yn74GKQEx46KaVDTapLFTnTybULCk4DqHYN6uhtwVDonYLw44BpfC",
  "key17": "36kQD2x7qnUUZMuwDN45onBZJZYdtoDUWBRamf24EHFHbtnvnqEVt2EhgYPsQ2RjqWejtmccy7sbm2PTPxSqi2KM",
  "key18": "2PTLdYPgSXUbiiGyJWzS6647UXWsbbGrvYQr2o8PESLymNbdy5knKqyYvGtFAjKf9AALx58ACmDX5E1G9YhUDwj4",
  "key19": "3PPRQrRN1Lchm7ENwsJ6VEW3LUSF9Do9vTzjmXr1jBRDdF6hF3pMgT2BCkDaTb1VDiedRK6gmVHdzmpmKEb9aJS1",
  "key20": "5JQfEBzrr3kHgvrHAo28fty7WgDS98NejvMT8YCahYsUgj4nvbLQg2sB3E2CGkqYehgFSLditjMDb9cJ5ojey8jS",
  "key21": "5SVfvNLmsZztG3YToYbUzcCCSqMe1vsZp4PFS8ytYgyR5DX5iry6v5bdWuRQjrcJRuhxMU2KjNiJyhko1ECgsvVf",
  "key22": "hmcwFv11FWqkzLsgzSeqBZd5Z5EvdeQdfrGtfZyrx9VWhe7cmhz9LSZjoxbpQgNExzn8Ht7wQ79RLtNyYgP4VW9",
  "key23": "3n9aUdzJdXSzc2oM16rUjnP8zCZG66DSwXLs3zjQTq5VC1hVXfR2Tz3mj7Z6gykWr4x1n4UJozp18nEqWcwujhdG",
  "key24": "2VqmhtzNXZVKE5YzJySEMnCzSvBuMYtgA5J4gr9xhn7wn8CP2gffhZDpQdGZz75itcBG6XEGLUxXWfoLZ8SJt9oy",
  "key25": "5ZcxSZjhCDJwoTCNbzvkUZWXhKUUTrNQWUN28v5NGCBwZfKSiKRA1PJWN3V62xErQqZqPqaksNQyCYrTmP6HCRN6"
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
