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
    "3hUrBymfU1otB9rcL3sqLk5T6SAhcogtJTJxgeUV9ycbcAsSprs3ZTWC7HNFjZtX4XR7SyNmL2Fc3RzxDbpX64ou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WbjM6KgpRrdYhQKjJrFDk31AryFXYYDR3W3jp3bToHMvM8KQBrBCwH2XXWFRGB9nCfcwWVvG48hFi8br6MdiyvU",
  "key1": "2Xh53Lhevjf1nMMqvQLbMV2DMH7Yu3c99rz7zsQhyd5cNwUECbp3ivKgsnqk7VJ3s2wHxvDyYcCoa9aQohPD7tpf",
  "key2": "2a3NDcyUbpLNqUJYqoB81FzsM5cEJm3ZkqtkwTMyJD7fNDcic91HBDmwVyTVjMENxURmizG4rrSuM2uYZecCjXQY",
  "key3": "2NmeFLia6Yh3dEjmxujJWHUDkZsUB9BZwhKCKemuY92uxE3mFKbq3Pz4PCVHptW45KEzTog2WJ3Eh3W432gDmLHi",
  "key4": "4kyyNXqosyHM4jcfhzgx8AZszWdcCLVePMEjbd6uiRcTrjhgSTDNksSywSf4vLfU3PuLKDTjjwpvTNRvTBXfqjvV",
  "key5": "3oFHsYmveQVimpZ1cmUVoeKRGBCiChb6ogokf4c1nDzfoRXBuTKeXYFkvRASFK3XQe3du24KvFXJieC2fZTZRrUd",
  "key6": "2BWVkfMxJcAEGqp6p66Dxaty9nRVe4H3EWREUTs1AqcEWyHcJf1d77DPPoLRMeEtTTCFVVHT5HWZ6gDs52KiNZHb",
  "key7": "2g3R8e7V7ssNCwFk6E9LpJifWJqxq1HMiezgxojpE2eoUxmWDdddugHSuxcsrVk7fkk5rhuMo65Juuwpenii9rzh",
  "key8": "47tfQiA8H7g8ZN4od2EBnrU4UxuNWWBBGKgatbZc1SqFc2DGpNPix1TXgShVyaecLJE6V2TFsBNLXrUqtM2VKkFX",
  "key9": "5bAYe2B2ydHhiHf7rvHB32GXCd8YHg5XMKKPKSrcdRXAscVXxSuzdWyRAraBWBSHhkUHjb6vrVqSLhMYGdJ8LEHj",
  "key10": "5PyjBywiQNTZftmguPf1A87dvzHp4jawXcCgNoTVBwPc975Y1KArenhuDWFzu8oBbayfhZcRop18hqixTLrp2MNq",
  "key11": "FLTvEcoctYZ33Hc8rXcz8c3qVfRNwUVUhWyKnxXVLDkT97Dj3S9JZniFFd37X5HxyRc9Z2dgztxzpxQcnHpx7j6",
  "key12": "5s2pnNS5QSaRRknd4vjqYCMD3qD2oP3awm2BB5Epxpn7MXH78eDQbXPoUp79ztW3cBuko2wozbWWBrXoTXcRaGkK",
  "key13": "eBF1ear647xsqvxm1hdmA3jANszyffqQnH2MUFXuqBmFAcN6KLKjzXLW3naNDgTsctV2ZiwNXgH4ipFJEraazTJ",
  "key14": "4aRNW4gCJZ38dbtVMp6vyxSoeT4D6Zwyd291ncapNhLfVcrcPbiLQkFs73Q9o8S2WWgXvBQhKgY1d6RQr23bA8tp",
  "key15": "SBVZJX33j3nbgdDJVUSNQmPRKE5QDoaTcKa5LNP2RAP1y7DejDmof2FRQ1XRSnu6eg4JeKAMgCgnRhWEWWXUmYn",
  "key16": "3r1D4orzu1oTtagRUEzSucfGkTVoZs6DtZ3fFb4Sq3Xy1os8N2mW921La9Fu6hHpbD4mDaCKhxE5RpfrSYXKzwBK",
  "key17": "3gVL3i63NQZUfUFgQTGiGcxGgj5GXGAaUKvXAMVShB2XF2VAGqeG4g27w4AY27r1eKyshirDqfuPgPgbWZEebKtE",
  "key18": "5WgpptXbxzPFZBrv6PxBR4eapUTRkZzNLP9oT8iF5TNaLXWRWAoCzKwL2ZvNPueBLq1RBoqMM276JkgpzgVpAQHJ",
  "key19": "36y9K1naQuMLY1jkaTofo9K8NJenZqDg37Q3QDK8qbPV98CE2tGiLjSb3dh4xBNTPmSHqSB52oFUvDq9SWk7dLzc",
  "key20": "48Ew7e5rbkm18bxmvhnw797kYg64qc4gqPcexPwoGR3tduVqSVZoK9ETfWmBn1tpBbeqqozPeBiGSK7yChGfQhdR",
  "key21": "56tdPBdH4aWKRxQtj3BUgy7i3ynpoPueaYsQ8y63uq9r2UCQ5JVZCR5RSsoUEDDjeDvSG8v1LU8GZ3DMeb1vcFSQ",
  "key22": "24g63X1vkB82QkrUANNSq5nYtZV3YWEFzff1FJxftvU9ZXbtTa45bRqQnVUyuu6fsyN3JgZyAKjxsnHSy8UVzvUG",
  "key23": "3wgegQPr8oP2VnhFRLTV8tZZ8nSgk1kTvSnKW8UQ9s7SaPcsudww1YzowTzXuUWRzptfqpKMHEwi3c2VW2xTc2fn",
  "key24": "2RkNK9mnJDt6CsMhSTrQYW2RVfF4XYmm1mPeC7y7YK1TnRNjbouCEndv4UVu4dL8tqXUmjKuw5vAmNmayBXeC9uW",
  "key25": "2gUh8H2pabuS4L2c8jBdt5WKifhUBVVb7A4RhbZUA1EKpmNk7jrd1FXopLUWJrXczMdkDt2mV2aLbeYvrXUVaPfx",
  "key26": "3YS3zXBVfTf1DXRxzL3rSv7JZkgjH1kiL6fJrYqP3pqPioq93LP8pPXmJTEZX9gnfnn9yUUT2ezftN4oCKXrssL6",
  "key27": "3Grshh3yVzANYa9qDixn39WtMAHU9XXHEeJhCeMa8camHBH3xuo9u82PLGYiNomgYtf4xL3NwHqdcd61moGg4tN8",
  "key28": "4AZajeLr882Gw5VzjFQ2psExCjd2htWLXo7W4zeXTNG4gFKmZS5ZvSGQn8Xq7B3qpcxFhSjbJawbHUUymSGPZ3Ye",
  "key29": "4kfh3RJj4B2VFmwZaSJfCJefRjUZUYw3JSk3f5M53PneKzokp8QfhKT1zcsRgfuwr2qRFqXqt9f3vU8jUsnDRdQf",
  "key30": "21BAg5gSVC7xMaXaDWEK4ZRPyD9AzPv5v3GWXp3aFQhrKK6SDPoJkFbQk7PTzNDh2unBJc5EqFszrYXpbNNS3hME"
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
