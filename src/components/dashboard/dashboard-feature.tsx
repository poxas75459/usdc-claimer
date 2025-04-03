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
    "3wH81bfyUVm1k2YzXwCSKPXWyXu972W6rgrTSmw7en7msVsrvMdjfUobnoHL4KH2cGFML86quPsw6ZQmXaWSWibt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iP9UhSmDdFQGRtfMaZNCanDvyLMCyEnC4DnNohQdenAs1gTCm3o6zsUzCQb99Fdn4rsBNs2Q9Q2oYJEZGEDz8Ye",
  "key1": "4su962uWCQ13MMLEbaqacvxfE7ydKvmcumbC2i1Xr2tuCUy4WCJvn5jdCFV2Qt8sjiqquhSLJtukNtpiqqAF952T",
  "key2": "4SUU52XoVTUWAxXdNqyv4oVMmA3sy5xJBuwaqVgeQ2y6MrUeF9i8om5KQpPSJZpnxMT6q2viZYGg7xQDrohKd6P",
  "key3": "4dRwPhAbqdRq5k6go12pTCV2P27C9KXHshPAajPu6AHwBxnufLFYf4ucYWoeGwKsJKefVdZL7XGFLgPy3xps1Gv4",
  "key4": "4GCNwzoKFH4Kd1MJEAGMsVxwzDracNRBRZepu4XMXpm7vdXwNB4TsvxJSRrL4BNaBFWcocSwXNoN1cBxosSb9GNX",
  "key5": "V6AsGnAaWrfksa3Nrz1uPDL1gBULNdifsYS7CTx2TLeUmCofghHChxYPrYcpPt66ZDmSeAHi2EudNxbVEZDTDWf",
  "key6": "ZNyLXPmiJHDXRTn3ibadmPxLJYhqmggeJwmhwwFCBoYV3nnjMgSXkydUc7YVmUZaBEc6RBTaDssQ5RwyXom2Faf",
  "key7": "fj9pX2rYc8ZMJ7tKzbdySSjYcMgwCeFD8yWoNH1BYw4Ra1xkSjXgQEzgv2w8vkTFnuyzYNar6W4LwM5bjxg49Us",
  "key8": "3YtwUenXpjFLiAZkyzsoLY9ei1t1dWE9aUhxM2JJSA4paFoX4C7zM3gmav4vPWPbQqrDR2Ps7TGbcasuq9YpRGBP",
  "key9": "64bGRXAHtmTDYGgM9kqMg1Aw5TVG2xqdmdTspQbPUZAtfKbgTB9nDq7M7aEoeUF6XB79RGEFdyxxaJryoLM5JYRv",
  "key10": "4KCNMLX2ZNrsLDqwvXnKhCCdZ4bG5icyU5KhTTXJ5Y95RZtyCmUqKSQN2uEH1uoaXrCWG4GPhQGJkC8x4mKdXjTd",
  "key11": "dEATPVshF266ZqVSY8wzvg595nPKHH8fgPEsUpkThDMP9nwD15kskVbQt3rmr2UNNUGaZ8hXp98bm63XJZuWGV4",
  "key12": "56wb4VVUxV5aCxwEwvmSj8aCWPskg7J6fBNeXteY5Gd5qUzHCDhd9keiZWpqucVFUsLVb2TvFPPRxosgnSLZqPah",
  "key13": "5QLDZ3XeYqekGjBBsZSXysi3B3AwwntABFZooJghkYojxwSFKScrWTkmBfKBsuBu2uNj6E94aZfw34P5NKNj1LQo",
  "key14": "3YVzTgfvcwiMdd6tLWY2YVxj3feVKjihdRawrS1vt6ivp3epGLujVjco9T8mr3JXh6FrTUKz5vw8oTJ6drJYmYV9",
  "key15": "2icdsh7ZDRPQ314VjR3ickRz2KMoLmXhN8excWZobwEDovJoPAMQZJK2D9u9UcAVHXhCuKzXQEQGPa2HGB4PzNWf",
  "key16": "63cbRTGfeAYjTDi9SF1vrrxoY685akReKSJYWYqeHYsfVGjMW7ppKB1VFzbT67CELcN5LdVxXh7KSN2ap6hirUT1",
  "key17": "54Yy9D3bUcq1sr2ReZti9n4pWbxFip4gxcXCKR9RBoW7VBhCaW2XCWseZZbHdxKMPCwJ15aDx9XMaorTbfV5VAUj",
  "key18": "yFTE9yam9fQ7tj5eEiDsGQAQePrWiJEQTVx39giYLRKkG8U4pkyrTc8qPzbPvzDaYUbxbngzxihvCWSLcHLvjfU",
  "key19": "LPpGfn1jAZrAH8fz1HGDTQ7u22sTe1nTTceeoikmYdehWwWWuhXgA5io6bTSCoNbsQoahcReFJG2DxekxNtTFGL",
  "key20": "2ci6nrFpaH918vSD8Hi76WCSEpVomZ6UGe1cKBB3LyBAqnP3Bie7j9oiVEdpB2e89YQZ2PuMuJeHoNX87ne1VMUN",
  "key21": "5AwFvESfFiiNR3iycDnPEEutEvRYkR81CAFfvWK35E4rW6uoyiqK6pg9nZV9NWfz2RACkBDo5MDkGbBURefmhFGF",
  "key22": "Kh5RqyWccLMX5NDNmqEbGukgq8FHKxQfsFqoxDZQ8pKZwt5dAw5YNSR1dFEuzG8qbsocQv4uYiTRQZoSm2hseca",
  "key23": "62jEbJrwPTGntPJTHZ1Z9LoE57ATTT8ZuJKrSDvxQDHjUzjBho7EUbKMfYDDY3Q6VX2A3fmkyGFVFjt4iQnZwjr5",
  "key24": "8SzHgb4NVsR5aSYXgkJ3sGKgJ9Et1u2wqM7rLhhFvjWtQHD9RbeWMc7D8qY14KjQGWoWU4jU4AQVZNLuEfVe8bj",
  "key25": "21BuPF76N2URppAaiGMPbEgfzBDdGFxapbfnbmiREVEuMfhTBYw5CkH6c77BXQnhco6QmShjktUmAQJsYQMMTs8N",
  "key26": "2GSUkikg8LPwSiETJZsxKXKojGJ9MegKKixE7kSMA9bAdhHoub1SiAYSC2mU5uDiJo7T5ZwmHY8vCwxkxycy5JzT",
  "key27": "P1VWX9ELXZt2ZG6Bc9bNffbf6PwiHXppvHxuUWJR4FSuAUZMBbxwqp9dTRRAvwXjuAirtpbWaLs22qzNBpDPeio",
  "key28": "59J3RwHRFzWLbwDKEm4zcqG78b1QgKs3DoJ8C5s5SAM2HF4cJtNbvRDeLhxhKWC1bcT4Jde8PrJWJbU2HSAuSwsR",
  "key29": "34iY8DPScHFvHfoH92rB1f9o2g6oSzbX7fvKMPgibivQqCDrnGQH2sBazmyxpLqqz4qJMLJmLjjSKBHaXZD8MGvP",
  "key30": "5hmsdEssFThdAjwPWZUxVFzemjMFmXQLzHa1SbeayWigockGfYNP14f1wbsnSLEinqL9D4Cuwc6NsgMh6Jc1DCN9"
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
