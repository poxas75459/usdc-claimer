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
    "4pUe6zJNhDuXY7TtYRqvYPzLLzzgFgZvKrm7Q9HCLSuta3NNL2u4zrcc6QyfEShDDh3TKARgbHmA9JSboWH1yEoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WUh6wj2tc5ZRSX6WqNZfvi9pMdKiWSmpiNDs9UAmRU7PcVMi8FcAkixMBEvSzC7wYTH2y2q3aRNBHEnj3pjpMGQ",
  "key1": "3r7ismt4ZnMK5N7ToY3hNiVijNgsnu8x2i89nJm5yLxdwugeiJrQy4x21d2M6qDR6X7Ecs2ikuzF4bXenStHW4uG",
  "key2": "2j1s7pNY4Fu8Sps2tCnowG2QaukVfS6kMNFtKXxtXzaNWQmfCbo7cAMi3dhG5jfcTSeGQqAT5rhG5pYzj2KsiX6U",
  "key3": "7dkRTxNtLHvV1ihHbT4fpD22y1vcYC7ve39iDUeMwHVJkAoFanP7b5cgqxLqBki27hvX89DiGuna1TtEpEFzXoU",
  "key4": "2GtQgc4L37FsvJBYUsTTqRTEjozCYsTdZ1LA5Wz5ssyqM9hUi8CMaum9QGUqgMmGkfGLQMYQsUCywX3QEJ85agns",
  "key5": "2cKXvzNczaRGwaaKj6U9au53HMFzfqVi5VY6b7gnPTxHK5KJsfLm1RgQrhVaNNX4LpAFyQDNTvXTpUB7Uf2ML9UE",
  "key6": "bLw7aUaZ7FV9Rp98qPkpQDeT2qKUaXiyExWp5g3JGqGhkzK23Ph6TCKMCGUg8VoASpMcqot9mxPru4YtBwojx5F",
  "key7": "6ihqNmfhFUGmBJjM1HKgQu1WZpBtfwdxodBzUrugJTMzQoZyEGS4w21iSCnSKmGaTbrmAgHykhWHn8sePy8tjvk",
  "key8": "5e1xdk2xrFKMgxEZRZoFquzyfdwWbBt5aPQCxMCnJaLg2LM3wZmXMATdKTuyQ67Gf3TvwhzjnwK1Jix4LqqZHeDm",
  "key9": "62e5iH9WeUWVkN3dp63VfXUyaEJP5wPZycPeLQ1fh4rxukXVG3k5kngCjb7W13pmdDhWLyRXsF6tAoEEfrRbzjEu",
  "key10": "511Vn5f3ac1aVhryAvQvqiQnM7jCefcKw8Stn6QKeh9AoMJD3zoFWmReqKkd9c7RVpcA4amEXnHK7zBpiHVPe9eT",
  "key11": "5Ax8wizUwLwmiXCyLsamBUD7fUXoqx7TqmFK2fmZLdXuJLxbcmri8QxfgKzpqANoZR2TWjZNdZfQ11jJsFWdTTeY",
  "key12": "4Ao6zCGFCnbkV6NCFxqjzJFUYnpoqq4Xasn3q3Gpm4Dn7jZweVMjRYykbTxzqsfLTmA6dmReRUfK4ZPEDaaQAnRz",
  "key13": "2k7NcfruxTHQZwGFxMVbUF3nFQuRayvG1Y2LBwNZip5JsycWQwBKTbgRxXk61DaKYBsDeZ7PnraALctAg6vQFTvo",
  "key14": "Fi39Yg9yrU2g1YrcYAFGWHLpFVqNHUCKJ4my2CRKnMSj1oE4ctyaJeg1cQSA9ppjPAn6ueYLJCrBsJxQdVLheva",
  "key15": "1L83cAfwGBUp5sYPS8sU3LFcFucuR5D2FkJjbpuKKC6oy3B73xwnw1DK1saKVmm4GXnJ3XddSenPkHpjaUJXQCp",
  "key16": "TZzYDydyGYj5Cfp4XffvcVekqZ8UkjTF1GYwew8qRK2cf8E8oTmh68GR4uEsQWSDg4LSgQ9aU18BgHTSoeCar1H",
  "key17": "21Ld8y65DcrpD22e9JRhvzPXV6sCsHqxMv1feTmX72Cr9vgXVrebTFVXJ8nbzCAeeiwWjHmuRhpu5FKXQGDapc3d",
  "key18": "57NSD2AZgdrmnhqqW2HNYm5d3eb4kASFh87zoXCJkkn5sajynTeXrMM346Do6XCBWPu2qvzYyH87uJsNYy47sKn5",
  "key19": "4mnnzMK9KzBNWxr8BQUBCoZ7VEJk7p7k6bMF7LkboYG3JcxGAvaYJLgVnpXePV7XJ6fHamzK97Fo7ewJHDjZgAKd",
  "key20": "49X9ukc3UwfbKGc3mCutS9ESm9VtpFxcaHPMkqA9UZr9uzBWifbbqKxFaW9y7o4e3H8iixnRbSVWK8FPBWeKPiNe",
  "key21": "3TqYoubeMu8AHzsfhqcAjo7kJSK8ocQRiYAWYQRHJm2J3vGk7r6bJus7UtAdiMkL4s1aBZ4w2YjvyqfmMJmLVZth",
  "key22": "5CGNNmVurg45YM7DTfP9Yd8dM6uuMTcyiAaKgGhQH2nVPV9dkGNYbeHinDPndpm2uV6dm69P6xmsg1hYHCx37e7M",
  "key23": "3GUyVpMdwNRkM1S8dwM7apiTV4ygqcCzw2QG1boZgTGhg5RJXydSURA31EFkUrQzch8dN82apzAaGRQKmNUns1EB",
  "key24": "2WxEobxdnc72EiN9PBvQQMPFqAStfo7joh8sLwYaDqPU2eW6G9UEt3zpJVQ5U9mkVsFY7hkmbmK6cntNLSxf48Tn",
  "key25": "XRda73eNdAfBYdotyjCGpuaZWrN2K4HWJT63eacPHdLGLEsww3PRGmSKAapp5gwaJvPTLy5bJBidtDzbQW8dPRJ",
  "key26": "3mqf3GWcQka5r9Z2pLBwoVwaRiDgc6wRZLUW4D8zWJcMScmfcxD6RfL1Yy1nzQsXgyfDJBDojJeP1sFXSZ4dyDBR",
  "key27": "3uQN3m7GRX4Hi4eFdjmUwxXmqXhKXvviBkeVXma9xpwhpp3rsJ9ZvdgfMaXPiReNaFVdbg2GRjYm7qjCpWy9emBR",
  "key28": "4f51EnApFo6eoa9GDSZZkTeNmG2aFew3KzYagQBsWTV7KA46eHHjiKytKuVe1jSPiVC5GmXjN1g2zAZoVThr7krv",
  "key29": "2vm3rbkAao9KBjPwCy5rw2GhPkHZEZ6uzV5MaZtZHXjEYciugXPrHQpAHRRgDsyNLtxGLZd9YDjXCGsm3a69HTjM",
  "key30": "2gpDMf6USjCsGGqn6WwdVGA1FECxcwe4LGEURKGP7tVc68EsMBJk8DyveHMMWSSv1y1adBE7uxndLt33tP3zJaEa",
  "key31": "4DZRtN6ze7Ps4qmF4ocU7FrFHvFGntpcGZawDDf4E3hQVsBrCuLU3FWgUXT1VVMVMNsEsftm1TJQSSaUMPfF63rD",
  "key32": "3bwRxAFEYEae3MZjK3WDeYVzLrv4sSbJFLXiMQVczCH11NWJqKk2gWergyGHYXLLFTxvaTQt9jGPgus8Mmic5vN9",
  "key33": "5SecAwgTamra4HLv9gpCcmeLQQkRVXUfyN4M9F2r76svXBc7c4hRve9n6NciDTphyVXpi1hx84pWXy9zxWcMTxFi",
  "key34": "2FL6LuEGYxvJwn3wL2UpXkGW5G9TwxYnwTbN2qfcR1rk5FMCrQPSKrVoQsn3V4CvWNuCnYt8Bc6mvbenESr56dwb",
  "key35": "2pD4jr1wQaaU1V8dXjULYqmkQ7AQ9YKmBe6vZjNgvTfhxwpnAejP6ZEX6sJmgsaUuAKFbj1fVeWVk4MHyoWGcPVH"
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
