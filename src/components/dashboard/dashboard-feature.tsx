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
    "2LgE8QYMKW1W6sTQcByp7crbh4MpDjLJ5LaJXpR6PP7VUhHFCLGcpEmjyFjfxPUNY3uh9evzwLx1EHdKfTBCGXBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNHnFboLGD991fY1DRniPMDD6GwswwD7b3EaoLv597dPEMf9Q1rAezEHHifH1LmDxZMS5cpD5t9553MEafHLuAc",
  "key1": "3r7fPg5CuSbch58Urs2VZsChKqorrWpnnUcP7MC8aaG2tBtGqqWTcDdNzXwoAzC6ihi5KEdk1KfMd9hMvjbJCkSE",
  "key2": "4eMj5DmLSK4ibmAiakLi5XZ4j3MuUseeEaSFvEGcGTFZxnajwmek8Fz1227f6cmQdHDZTuhdkP3UaMjF6HcFNRfQ",
  "key3": "2veXUVByPm4t1SVGh9NXoLTGBXrknD8mrmjBrrzASirUjW4P2MCAqTEnkc4jrJWjthfSYrCLxuJpSqFBc3cb5mPa",
  "key4": "2jZgQ1C7KFjBStW2AYcTytdnyKZQoktu3Ewx9Jf8TBG1C9kzPXCenA7FHRcS8NZmJFsjy9kaaxinKDKHYi2P3a5R",
  "key5": "4H83eDNxUrz3h6C6QHxyNKq5ra5cxx8uoh25dZAeARtCu4RftDdQyDoobwBaS8GUPa73ykDawQApdr6WyCaQGNa8",
  "key6": "eJ9ub4F3mW1h2hiWoGKNY19f5FoMZXR4v9QuoHX546T14rc22wHb9AiGbmGd2CyPC8uqb7q4BX97ADSSRQGBLyc",
  "key7": "33XdE3cHcRAabopLa2np7gs75vzN8ofv1DUwPVwjQh8nkWoRXkL8g3xf7mrrxbRJ9DiMi1i9ghHbm7m4yYPntPpf",
  "key8": "fL9X6AQ8jNzzipNzK4cgFdM6aXkyzd3C5nRj9FG8R4qxznfRfGDh4ke1gDb5kHGvNM9yVtD87VSA13parESnmnT",
  "key9": "5QoDBTxbmmjLX8CjhHoRg9r4X1JsXADFHZKS6tcRe2WQM2rPfQMpnwCYD62PFYQwykgnFKBAJsGZH36LJqLsLPBW",
  "key10": "RhfVeTM4xYtVB3zMN8pNZxVAfYFhNMh2BqEyZkQq1zL5zPJVSswt7SVQSJEngngLSCPPnXTJpaokdsPQRSYnmGF",
  "key11": "9Hjx5WHjpcFeiu5boTpPePPEZo1QPpQCSP4Zxo74JseJjm1U5xyp7sF2dQWBNiUE1aVigA8FydujqNv4tYQGerK",
  "key12": "32c5BL8iCyo6vbbjqDgxxDS8RimD8oS2BqXsmiARoSVQoCwGhUmPcZHtQdisXAXoegriQG5351eEXa1aphfu3w63",
  "key13": "4xasc1XaraBYvWgFJ3yh8y1KG4sFiubnuuVvhowuXFwwphYGYcNMVG9XFULTy682VvbYm2UoGxsXfZ8cLh6buKcx",
  "key14": "3Kz1H8RDiDSyTBfCU8nrCmkXEctmYw4uCC4RurcrhmfKn7Jqb1QX8h1B9mZqEEf92wrKqzQG3xxeErCTqSwthQ9b",
  "key15": "2csxhMAmQ9nJVFuoW3D8gCJz4CQagtDvHPTRVNtdQcGjPvoH2WZ5a7suUJWQiw8LDmXXLw7489HEcG4TwyL9MrZs",
  "key16": "5wBHQRRAe5jCXCZ2vnLWpuhWZRJFS4EAqBPHTLpSUprZL1JYyFzVK2vMLqyvES6f15T1AdYdwgQWwResdcT24Jed",
  "key17": "3tRR9ZVnv4F19wYQusW7RuDDifZ9N6i1JkHgUYPyWoLfXqVoeC4cCnk4bvNyuCs1xutD8ThgzmVCJk4QtyRq1zt6",
  "key18": "HS5mpQ1bUXgPVqfFNPBM4rwdy5GxtVgUHpD3kxrBtviYf5hwJPhJkDTZ13MpYvUhoJscdgXoD4h2AdLjhiV96T9",
  "key19": "35vrkgvis863osY3soEUJ8m6nbDdPoe8ASjnEjPQZLjbN8wEQ64KWqHk7m3aq6Qqr7KcM3M24gGtzRkhdcZUCB2K",
  "key20": "RozPSEhbSTCsbbXgc1Rv5paXTCzviaNmzX4xt7mpshgzEa2LQEsc6kVBtauVNbtn6nEUZAZ6kVrZrjAcyHrn8xq",
  "key21": "2ydVhhDHBi1uXBe4N7Joe2mia5gvaYVqZXwiEZ3A7xbb9BmJKzFfVkqXGCTp4qeKTS8QgeqSAaxSxeVBtNo2oW2E",
  "key22": "aS5WHs5WhTaz3SeNVRMSyNButm1NFk8ETkgWwYjFrUbR4eTRjTYUCPcb6FSAsjHKPHtzev8B4bARrWsgF1GhQGH",
  "key23": "3QiHx3GE71LfNrKZMQNVAvxVGjFtebyocpDVjNCexX9ueCekx2CPh3fXN7vKvAYw3beu5FPG9d9oq3gg8dJbDc8N",
  "key24": "25avyX2zscvH5h9gnVMYtLDmPLq7wgf3dgvk9c64CHnpqMP4yQUKrPoZZW7a4CkURPTHZgTpuiKMwk9zRseZQjmf",
  "key25": "2rWQS6oAwZHz9krW2uBCCBRgZZQGt2D8aZXxBKz1c1DhHjJdzdidKrQhGW8UmBArBz64iSxVsduECLsPqL4WvCCy"
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
