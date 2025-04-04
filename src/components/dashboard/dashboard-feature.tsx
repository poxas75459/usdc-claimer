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
    "4nk9rxbZ9rFbc3AseGwAtVbJLS9RCqApFmjKuFKmWxhU9VskaH5fyfh8de1LB7TDH2YNdMknXyvo16RSxLdaA9Hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tipTUR63CubvgM7mgg1bDHVN1w3RhYBtnsQhY1cTrPD5VoBuQvprVR4aroyB8wampwMXwUD7K5ceBrNEFkkuD9o",
  "key1": "35JWYQbAZwWEzC92nZDzeJhp385g35qE7hfsBWDGJhbDQ6GewVb3kShEzbNeDeVGW8AxYRzpwxNDgKdWUrUoXXHC",
  "key2": "3evSnEfXYJidAP3mmNB8mRjZtvCn3QdjLKRKdLRDy3mb9MHjufgWXuF2WzeMJpRkwmC8UZbtBJeZpmTSDkUAPsh6",
  "key3": "3sXrA1bBsG2o9MnBkmRBZYCfoRNxa3Dt8hjsdShHHdDVVLwCu7PrdZgJQgrcRZqFqnMUnS7CaMpxScAjC2Q9Xu87",
  "key4": "3TWJfvLKsZxhR3g48VLUcjJwB41iMAPR7T1XNCTPat77DtffgTnE4bpbMgL7KbVHDPQAsXPAJvdnvTgPFGXLa2wx",
  "key5": "3Ss8Z9bjAbjFamFWF4mfNGELKdodKmw3n2zgGgaQSufMKMxdBuUTmgAgc3D938CnHWyZoanuFi1JS21iozZMWcDW",
  "key6": "3tDmdiVnro6vN2aye4S5EFJWasx2FtEjVfcSVuRjn3eETQuohYVwZCL6oVQ9zcUAiABKeAoEoMV8PXT2ScPfRpcH",
  "key7": "5KgYp4e2gwYSfWwB2mDeiCyE8ipew5t1mt3FvW5CwMMmuEYMb7ot41B6HxLpyPd9pNzyxEysZyaMjua1QmAhhMcG",
  "key8": "4jiy9wPppGX5hndh3NSpCg7tQBARQjRjfrSL3GvVCJ9YacQra6xEHSX5izRbfdBmb16R75vKAFxFBYywBi2RVoxb",
  "key9": "41YxG8WH9zgZgenUJbUCrDQBmfgtBDupvXwovWSyNMXaeD29qqJ89xLRWCgwy1MrvVezLgQmJmPCaVcSgB5YDHrK",
  "key10": "S2jKjvhoZ13U7yojLK26aTBqMRXotXR85jNK59TbjiZkSxeSBNV3612DFZUqkAvjciD8DDhzUMChKMeKT4fkkV1",
  "key11": "oJkRxEBJ3AoAur2rAaNzTmRVLEvjxYy6QGmR64dVak9UZwaHLS1V1jFChwNnCsBXLAvYgC9i45sWewY6k7VuYd5",
  "key12": "3TZJcbmNssXSjqsjQ7A3VXDnpRfjSvQoCzGZkjbTbM85vqmVFNVinETy2GSt67NjmHBMjfaFNhEdFBdhwvRARdQ9",
  "key13": "2U4uC2L8iYDSjwFfudbmG4A6ryrYmyhTtKmresfSWovRV4XADSpkhkxMZVGhQHXibZDhK1gjj3bVh28TGbCyjZDH",
  "key14": "23ncyVBAc37EnpRCrn5dkhe8cDnerfTLv2StvwiRRAN49yyy2r4bBk2nd96dFdNN6PYpXjVUCyNrEFj71zAgiQ8z",
  "key15": "3Bg9aHStMTtZf1TFAHCpuyL7DSnwBM4zgS1HqVAFXD1FMhYDJA7NQrtyU2TcMJBo5nw1MLAHR1ynNkuwhdWVmkAS",
  "key16": "2FxjZT4znCQUpcKLH2nMRtAniMh2axAEUdrYRy26BKzTUgUARPzNF3kCGsunqLM9f6VPG9i9rpL1K1KwteBkU1Cr",
  "key17": "2xGd8fcdss6Nv3YspY74t3EGqA3NH6tSFmbMwg59AzERfkqchckCjDFPFyQZwNzLGFSrs3PA18NBmEnnpg4trZZ5",
  "key18": "3gCmcQuAwdUdbswFrYx3zH8k5FUhEW9Ee6ZnjkUD224bqZC8GHvVSrRXCdvciXVmoAhmryJZ4cbxchaabcmgmzMu",
  "key19": "2GtBVYnqMWHsbp5KMWrEgzyGApZEjrMoFQqXAH8EPC7PvCBXw5eDzpSGZwHGc9hr3dUMHXNipu5QRp7TwTcorkqL",
  "key20": "2vaRqF4CNEbfPrjJwfZxsGQAi1zqAQnbVpUyW9sL9XAgofvqMnFeyiVbt1WPWXMcfqhdnwpueBrpQHyKGMFCehnY",
  "key21": "4CxA1hb7RKv6xKQA1uF9nsGWSS7HZGWHq5FUA3WxdPnDm6ZSgxhu166csTgDJCgaL2rUJx3ABBd5vxJbRpV4dt32",
  "key22": "2b1fRMRS7t8k5aWD9Hv5W2kupETTccrsQc4NqKfPj6xsZhJF9Hgn82BoycVbsvhtaVNTaeDH8VJJsQDURrjqyfVT",
  "key23": "4qCJW8mchP2UCudmXUacWdtJqQT7V26E2PwHa4hp6yGBhxmWyYQeNrD1FNFzcFFSJo2yP3inFJzuDyBvWoQbgzF2",
  "key24": "CbQgVPQ7gyfMvN9cWxEN8tX3N9Hn9cb7FsATtQCKq9g9o2iLCAcUihHw7A5BahxErhMEvAb64eBBGZ8sWsLZ4iD",
  "key25": "7Qo8vW2W3Zf4zc92Asstp48HRsh2afMfGZPuGC5KjvanJGCtDtqBfvEDr3xru5HaKtgbtEQztUPhiP7QCU8cgGm",
  "key26": "4nV5Y2DcjVuVQ58fxbQfq2eaPFnif3PqEvk3diu4WpcW5yV1tdf4s7Q49e8ojCn2N2idim5KpCHWepYqr94STARs",
  "key27": "2HS2wr1U42DvU4HzCR2NJZKkQrrRfeQmbffy1tsTPQyF9fXzW78JeVAeHJzi7Y9G4riio3BN24mkSCKViaHHVsLV"
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
