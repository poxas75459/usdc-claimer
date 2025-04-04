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
    "Dh8oZK5WprfWMqdbgpAv4omhTgcQXJL8cenEdMZvrAA6i3krnrRvJtYw3k4zEApoKwLDpGYEktEFU174Q1yw7C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L6jmMZszZv6R8g9VP17wSVcVoJJLBL53GVR4QdS3GAyv7WRYXNEN6jUhTdwLkE13z1QnhPg1KNRYaWEqvRkiM9s",
  "key1": "4CNCkbDfweKUnz9Agjc4baKpi9v1e7cCPgbQe54yQ8NimJKUDiogTZcpjnCBBGgpc3E1xGY2GBV2i1mxvY9NdTWz",
  "key2": "2qVhHu4qZkPgDDRdnHpjKoFsCzANUcWULybWiCUoSVpYacxpbnFxYRZmQ2vVtmeuXuMvweDdBVrrqBdcaNp5wYvM",
  "key3": "48qmQUfQ5Hs1mvqBD4dLmPwMDAGRXzFHgrBmJ4WQtE3F4rnzumXuJynUw2rx2ZwLkPnaHz4WzquXQa3do3o5rrzR",
  "key4": "3RBUBVdesFL8itTb89UjmBeedZMLSPq6zuQQfMFLFPEr3iBwaBcfktoFnEKNemfxVePCMGV6fT8FJtApSv1Uqgv2",
  "key5": "31GPFoEiowQFBhpRNb7nPnPnUfvH8VYcm44FFbD49MJiJYLeiDe9iAL6fnwke9XHoj4gh7qK8kUzhey3DNmFqURo",
  "key6": "3UhamB8pgqUYE7JSDFx9CM5HbTeevwGypNk56aGxTVSZrJVNVt7GpGHasxe24Xe52PGY2Ni8bgj7wpqowvwkAUvL",
  "key7": "2cA5Wz2SH4MQah7zgWG9p6ixLxPdpAqahgbvyskKNwtg23nb2YFDFjxoV5gNYWtVjRgdSijedwRYkrbe2xVyh7z5",
  "key8": "22Jef766mUiZ4MQrBmwXXhnhwf758DccJqvtg1XoAV6ucHSmvD2WMkXuWXAiws8offE3dLYdv9SQcftjFNQYqi5a",
  "key9": "4o9RjRJsJewsFiyG5ptQsPQUKnxAo5hrX5qF6btWgCB6T5kBJUnrgH9w2LdnFLBPa3DRyzvgX1ncLZT86edUt4jC",
  "key10": "3qR6ExZQLQFQ6xraY3YgYxYaBCwXLw1iC7gerfYuRLD7xeDDpkZGwje2tcKuzsnZKZvYvyeaF9d4T8ZUjPBSV6hm",
  "key11": "3fhSHAy1iGeSiXSHmje2zQdHXS3VmNE9pz6BbhzncDraGPzieybhf6bdYJvAGatH3nuRHrqSh5CQ5KzqXSp6XCBE",
  "key12": "55dmHM937JigYRwvCjC3dzCVB6eTYx85JqWNxbm1G4jHYjXcUwjyAizCKDSHgfvNcavmM6vPAvD2MfyevGLN6Q3W",
  "key13": "pethrSzDBzXz7iC5nxHR5WpTKJsRx5JUaFscLbypxAt6s9bRfy82sJiNA7zsUmszEDh9X1VX7Uqvm258D1voKiw",
  "key14": "2N7kxdq3VjXavf7uNfzWxbxrvde6ELsJ7974YNTuG4nVfDm3cnLYWMkBYusyXHLLHRXX8mSp631PD2RvCFs8ChsL",
  "key15": "4bgGYQ2RhwJQN8mDykjvwosKQqngqVnfxW3c5RQpkJErB4mzpgn3d1nQVFaiApuPGaXP6NSuvYg2Md4n9KiQMLgb",
  "key16": "Mfc7EPcRyaxuZNHjYARS75Eq2Xob2rhcJfQ3zCH7UXJXto9wyvTVWQBdXbcA6ekVZZDvU8E9bmsG2HsZGdhGSwr",
  "key17": "5jgUjc28Npcjjupoa8U2xsH3Kz8eZBT29oVx9qn5txe9JoYZpJTWtbEQSvN39GZ9rFCtsEE6o6V9RSXRyGtbDQE1",
  "key18": "4YXWysCtQcT1ZzdW9UYDTQ5rHty1zafYtwxfBSzwNWtoJh5KLYDU78oWA7G4td4HYQDWmk6GodjsmiE6D8mrLfn8",
  "key19": "SFBTLpAJtJLFT7VY82qNjRbcf9VdixZZbJhQhuBwSuv45hBFw1tCPjAeyybHtm8GueNFTQ7edtbqhhcELXNpgNK",
  "key20": "2iNXSF5aLLnNzsyaDSj4tfnH4Rkofja2QaFqPRTJ44PLLhp5yQZvesjkjAKcKRiWzFzCGXF6steEuWTuNC4Qg6p5",
  "key21": "3HqhuYCPGTj3rbHssu9Hq7gAmo4byJA4E8DXAvUu16bkX8AsKtNW9fJTNyJKv4isu655JwFSn4EcX88CXsDvBhFe",
  "key22": "5sjbqRAfMLDxcd8Kgo2kHQpyWKkudvDB9x1vescVCqpw4WNXUJTxb2Gy5Tw4CgUDw8qJqoKdu3Nubw6pMZAyC2d4",
  "key23": "TojMcayoC9w4ugYzisbGgvzerYnoVu751WkP8wh8kQrH1mokATJyQTbTfepC9HRTfMyspSs84tAFEucWHvm8Cc1",
  "key24": "Pg1QovVSGwb1ZH5qua1bXCmtEGdpBXAQWZ6CyA49A5yjnNtqR1YRAfnASocKCeWRmiYzeoBSNATVJGFhLSRWWTt",
  "key25": "4xBmjkuxpKvLzD81jpzmFePp1py9J8dk4uG489NBt5uCS2B1C5gKYtW2GCyfLi9T9gnzQsKDpFZp1jyYtcT7mK2b",
  "key26": "hNyknbqNRajJCwAA6hxVMvuHrJiNtY5rmMLjUkr57Y33YGAjbGJ3eNYVHhUbVsew1MqunrP9nBxQkpSAgbzdteC"
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
