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
    "3qFXtQWr4vMLj1k53U8YwpdWosxYfdCUjHspXnZ9XEPuBJ2ve8VRgEnVs1Cdetow9fYeutJNCDRF9AasKi9MQPSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stBpFFuU4wHyf6ZejvoUNfhGMnChvoRJmVT5vprANpGwSZtnyf2ozN8CMvPo5q4RucnovnK4njmUVDrkTr3zAYS",
  "key1": "2NwuSUDxCuM44ajqCAttqQws7BvKXiwCMWibUA6Ahyj8weGpsRCUmkThaLkqjsJhJxuxQP1PYdxsFMQaBwTpnjzt",
  "key2": "63TKsQNbC3a1fBCiTK48SCf6cd9RRNvfP9q2FZJr7CzavMK9Luq1mK9cNVVcZK3V5Eb8XkuXeJ6aaE9ZWRsA8xDF",
  "key3": "4Pz21pUu5vcWEiGR5Hni3sNDq5yGJonX3WXFQw8Wv2BNVyoMTPwbntvxJ5XJ8bkMNzNTurxdZToeR2rGHUjdRQob",
  "key4": "4tMVDJZ2Y9wDswyvFd9kYPkmqYRYY3eTQ3STqwdSoZXbSE1mqQwJDVFQV4jUpcAPwdesN2PBGG8v1NDJHEcbXS2M",
  "key5": "LV7pArrkYwGxsK6KNbekd3e2yGqzVggQ4HjM9Wf4ubm7xjheb6hnG79pcd5xv3M8aj3ZPNg4pDDrs2ukV4eFwTx",
  "key6": "4oMSuTuRTg7Chkkv5UXGjfiDB7rt91s6nkRVWXYAx7QxbiAzU41JWfFnZHotH8RALftfUw4yucGHUPsKk3sTPurn",
  "key7": "3tVddgDLJoHwVNFV5pxP6k9Ggpb3PFB1tLHqKRgraXrfZDp82j9NHfLVuWchcC7BeqKK7Z3B5ZU4bkWa5WkdCdpo",
  "key8": "34Snm4RRNvmLjYHkVUUr7B4Fz6xPpHxRYoFWPxkDq3Zauue9wedsrsfUfAiHuWZHtdnczjYX2GGFJgmhSH8SP1wQ",
  "key9": "5KHUQfjPGUXABKxtPahozw4kEm7zXcxW3PoUiyvT5xPA17QtaE2nqeKt1y1iBsc4jnYqBSRWMyopN2L7SQAr1gdH",
  "key10": "5tZNjzSLhtRWBdY22iBpBWUNdBkbCcRkg3YPfbx6MqR3qmCxmo1eFwuVcYJ1uUyrT14ixG7VPwVj9ZaNh2sWTdZA",
  "key11": "2gFGQmLqJC3KFEwnF5HgkzmkmxRoEVKqVkJA2N5iyRvQfZey3KA1sJNh93krtQX7Af8pRTd5VLMpn7LNPPnJxcj7",
  "key12": "5i42GR3hZzTDhixYsMi56t7VH8oKEiE735k1jwSqpH2YeLNnk5xC2cucocfL7urcFinXzkZm3miih78muHHZsGSe",
  "key13": "2XhqfK7FdURMdJYpnrDZoNhcJWT4nADe6gHvgU8ZJkBGGcp2PTMw4uvYjnMnSEL7WQR8oAZEinngTTv2jNzVwsa6",
  "key14": "uWJ5ZFurUTeaGxJ6vh3qg5Zn7tfMjbwMQtwSYVnMp2KbZzJhYwc57p8Sd449nAZZ94LUeMVwkCxFUzizDE951Fx",
  "key15": "388f8VZU9PR3JJjfj3XTeLT4nu2iayryoHui27BuEYX97cTi7nJi2PrY59um8jDfYtPmFgvgbqVtLQywmhVyMn2B",
  "key16": "5uBzoZo6L8sagxYEuJiFg4zfYrwmxWnKumKNQqbZtFTPPsRVypvPUQJ8ggMXgPcRjsD4BbfcPxTo1QKQjJ4fL3hB",
  "key17": "63Ds6hJyA5QFoRxk8LVJcb2NAhfQi51X58vF9YuZ9JPU6bgVHB896AQQ7UMz3VweaMh7KM22JevS1qNN6F9oSDiq",
  "key18": "4TwkiCqEY8pM67opzqLJcJTWR27hbHmhXV3wWqMWPPW5cgajx7njiwnnKigJiVATcEDtcvHHnXghN82dEJqAokq9",
  "key19": "LTnt6K9LCBg4hTnB4eAnTLQf28XxjJz1VwarNKytuVZqumZRteSGHYuFX88CkNUcQ286LzP2fnmRJuy9VPXQdGv",
  "key20": "5goSErKtWZz5Fmjeus6XEiS1PXjXg6cYEUwi74ptNpr7h4pn977L4aABoUB25xyhq7d5SyHygHiTHZS3GomXXQN1",
  "key21": "2owcUAQu449NWJSVZqnyjhxRu7reRRVK6cwxZYizzjhPjkjD71dLBkGdpzRZvWddaXmGey2W1xk9JqTwsKJ21Dif",
  "key22": "WLoUxEzyErzL9B3VDAFipLsjYp8tGrtnvChUCR9cjYU5Y4C7EXNiZcXgn5GLLvCVFtxf2Bwk8g745iZNSJuUixr",
  "key23": "4yKrbbCPNeN9fi4jW4GdJ6HNq1LtnW3Gbit2mwYf2WeEAhwqCq5dPHvQnwpYvg71wDkW5c3QFBJBzxCfHPkGeemQ",
  "key24": "35dSzeDq7tYWekqkuYRWPERZ5v24YYXraPFTb6Uasq2ea3KXsKihcfF6AUsPxomaDHR8FuM4PL3gUgsnkpJ1HtLw",
  "key25": "2rpYozDV4bNvnizycmv72FhBPkchUtgz5bPRevE3q4xUEGty1fB56dRUAXHQZNyikGXdt9WrJV3zj7RSzZjoWyxw",
  "key26": "5HSd8GMveFVW66CUaQ8BXonwCvf17apjEV4QGQrwUnF5kKLA6y3CECYrc2eAXVUjqqvCnnLi71kgs55U2aZxKxWL",
  "key27": "4ayxat3ZYPESnMhZVGM6kLwgbxAJEZPtEdWsPi1QUqrseLCjVdkfkD9cvyRXAeUcjUTr4bmWymfEq4qbhLzPvcJA",
  "key28": "3MgbrR2zjJT35WarfN5YbdXxgxPuh9Fpisew6TKBBJYp2i9UE46dqYLVLYjQrW93asJhhrD89tRzAMwmmx6zSctM",
  "key29": "4FR8decpUQpPhijrr66zE8xniQ34d1dDSenWamm5YeSoXiDD5qNbpSYznKRwE3b7YFidgB5x5QyncmVHybLEXATo",
  "key30": "2Lu4Hd73fcFaSbHirX8hV5YesnPLZfEpJb3aMZ51BxELW8JeF5CjyDMUHP9Qqahh29u7epRTPrr8RGdATVaeeM4q",
  "key31": "4CsmRZSd5wxfD5jYzHxFuZ93cTgkKefBxouuY39anshvrzk1oW3d6nyBmzpfWHU9tKtYeurwdh83C3uEB3me6pZa",
  "key32": "d7jktkdZPBXYZx5qkEGXASSF6EDJcV8EmX1973DatiBEALQq2BdcQpf599YATamF898SZTBaos83tNMzjHMDox1",
  "key33": "bdAs2buZMJECD7qsEmh39GQizdoqB7jVCo6spaYo2LEs4sHG7b7hFo8eQjQmxyHuP8p4ZcmCXQRTq3Wm48CdRK5",
  "key34": "5MKsa8FiXTsNhfvcZknfr1dcSBYpwCZWdUwLaQZwdx5he6eQhkbyxq59L4qNrLomKksuTdMnW7GsfetM4u3tY42C",
  "key35": "w8LN7sws51XDLFBeqPDEEtNyTqbabmfqZ15fntLUkeQ77yxuSkPk5E9kuQbhpgGQgvGFMnK44uEw9fNiNMUwheJ",
  "key36": "inwSxomoB1C1GG2GpvYpPSiRuF8YufsW15tD3BKNXgnVHwRttWg51dvTsqkPoDXQz6GfSYfxtxtEy83BsQHUvgK",
  "key37": "3sg74TLELZME52EaVpmh1H4s66zTZ1DJP2oVj6VSaBNMpCtTvhdg4ga6E4Knh4ividTLiuLuFW4pmdZpqPWERh38",
  "key38": "2ubUJvJ6kKThftpBY6eKRb3W2yV7XBSpZq5naNEGpN63RkjES3jVpioVi2n1U32XuER1gHoLG3r9RQkfsRC4BZFs",
  "key39": "5GhamTB2uRa3ipy9fMaYA8w7YDfUf1ECLULLVSN9ELNDhCjG3VaWmmDkq7zs3TVmZ1kaGMPaTomw2zXnh1ufgpE9"
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
