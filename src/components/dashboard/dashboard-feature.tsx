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
    "5dpiZRU1iPH3DnRX2nq67UWjYUGq2VYaeRpzDFTZwZfqHTwLqat6gdBq8Syz8NEAaJd5YWQJPgk35gAVnwAEHgxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMavwSfaBnvSme9X9NJUcL7MCr9uLUJkqnkcHUFEVciub1reWpFcNLfuWCrrNCSdUXDyhqcZnys3QjJeM7AVmF8",
  "key1": "2iFouN4RxxPwYpAbAoQ6zLKXNJx1LtovZoGMtWiaFtVZEFaMrfacR33zbnmFj51aPDutfTefAJm32b9u96QQUMaP",
  "key2": "3mNM6GHubQPXFGfzTQDJjtpYKvkwhbDd9EphaYAqKfUFAhgsiFSgUaqVnBjhHqqAiaMjytvboXx8x3k36A2mMRvH",
  "key3": "264A7F8ouuizKCw6DCM1S851MwfXLBwcL52WvVDk3uePdoXoRYV2BRoW4hyNXw7uDB5TjNciZidmTxC5KX8y532k",
  "key4": "2fXYwpDwGxSemcHa2ihqTaynJRWbKopLakKg5qwpmH4YUN1NfAoHuYEzhj2CnD7ZBStrtgSiHJQEfhXukfeAgWdX",
  "key5": "45fXM3jvEsuR6NvGpGnDhvFxj5kvewQpwGxb2sZXgVNn6cEjewqoNd6GUR1yMSr6Fa1qYhPJGQurepfvZZUE1tNh",
  "key6": "WiT73wxo21Sx8FTWhMkMRJdmAjTFrVb5SiscyzoBf6eBXokVwDKsoGFVGHhB21rnMmVLy3MXa8tky3qC1cvrRoH",
  "key7": "4B5xAuxV6yEuvMayuMFn2ktMvJ8maUWgrtfqvWypJrqTB1W4yeRyoYxycGpw9ssJc8ihcpKLk3PfYBJdi4uVPXdx",
  "key8": "5iAWKMsfFsyExoX2u8AVFLnyk8pUTFkGkGMNye3HVRq6AKqnKkBTsbUX3Qkqmi4LCrRXCoaKyW2gBBvNSFphKDqU",
  "key9": "4v2ZoPwnYLCmeLiV85ksXWj8WwsSvKffp1GvZpZAeKDp1HFSUh2r5AQtvaWu33k2hwiGuRJX5PdLCLCptCZ6vYKR",
  "key10": "fC5z1wsvZCNw6p2draWkRjoTpZdLf8yjRfotwsqs7goDQZfBfYhxSih5aGyoJRiAEYRFL8WBDXeaH7QPAUP3hkL",
  "key11": "5Be14kH1yvNZW2LAEmeXcJGW3a9DtyQDZfbEVMsrN8i2NvoCUp3GuSfDdJipExh2HHb8nuhj3v48sE6a7kXQtUpA",
  "key12": "5dbMd732n7oGg3WTB3opM1F7DxEh3kzGFj9S5sohFek7aefe5vAdZdt4fdCNXXgFweKWu5cMjcSfyF4EXzHsyCfP",
  "key13": "21uLv75aSN4sNKHLErixSZqNRcedzdu4EReDyoCE4JQjwaBVs9anP4Bd7xs2oXbqkT2meGnmLtoJEaPhKxVhn34v",
  "key14": "4BsNp75HJa7ridQRbwwf6zsqhcKY1X2GTp34XXbejVvEtEjcL2KaVnT2ZYMrjFPCuiTceserBXT33gLc66qHJzJH",
  "key15": "2BCDYs9mDAQc6vodZqfPo5i3PpeaM4b38CyVozU95TantSYWW1n4aXvM5zx5AzmbcrtRfoEKRgjNFdqptHaCXD2w",
  "key16": "3Mis8YCbmkKGtnJofdFi7Dah2CKHPKgNvsRDcbppXHohdUJWiwCJqVDRHWnHgvWwomxvw1ao4b9JaojQJfbZoDBM",
  "key17": "2Zr1RqHmx4Md9QTsoJRjAc7LTLHV3BFUje4ycmrtaSyvVpSENhAKwxspnFWukNidtKosrXUeKBDHSky1Yb2AmWyj",
  "key18": "5kqYzqsx1Bst72H1ovjHDWnMwyDn4VjxXBPb5UBg6gL8PYuWfqfiCLzh8fCrkk9EgbXU1kmxgemUVqagvEMVsD7K",
  "key19": "5Hu2Ehm7AHHVPSuvzgqbpWk9Qwch2HGCtWexeG5kbotdrYyK4ysoqWouk3KMSiESaqg1wYYWfibZKkAkpBRJpGak",
  "key20": "rQy42BwTd5w2vPnafmXpMd7rTe4dCotEXDU3ufaDkFRZhDztRchVkknXm6Dwxh5spXcyM5dRs9YtKg4HWWYmq9G",
  "key21": "5WaeHUzBFrL5ogEwjzR2SAwCyJofzCCMdCoJxVfYJNTtYhDvTEhZTE2JuJBnnwn3b9t2QRE7pTkkPP6Ks5236Ro1",
  "key22": "4DmGgy5TSvb3F3SNxHpguZUeBWKMH2LXX5zCeponjAEFRXvgBLgpMfWwxL812MbSCJYB5VrQVimghZAuVar4Teri",
  "key23": "5b4z7MYqUGKhH5BkmPkw4CeUrcb1pjhfKvqjLVc5TQR6ps6W5yvkZKDJusZpksiJncawPDLxKj6shtE9of4AQTN1",
  "key24": "3T67cyiN3pHx3WYV7bSrUv72qMsv9VL6HmPGA2DmSidZC6BPZsF5V26KypurUSf5T33KkMosDZV8YALm1RYDh36x",
  "key25": "24k2MhLZE6fYhz8MfjkkfnAvZEGmLeV5ktt2BjUXoix6tEkTMu6UY6Vrm8LVTCmpywjYLtL9kM9hwGd1fcLuR4AB",
  "key26": "61cuPLw1jZA9NWP9qXjXCnGCf85ufcV2ia6sc7BJincUwXSjV8SYghLXDfqhdHNV6wcMyt9P5dKPZ6prBhiZntdY",
  "key27": "4HSVS5kHSFg6SAuw6ib65E2gEck2VVVxZHjHWPmAXqwwiTVw7Vv2GPxMDLjAJeP4MNvW1U9nSkk7fG4NZqGZwjaU",
  "key28": "3d2NqktX5RtkL9MHidyMEoCr6nPHUkjTWSnDS3RnmvUoPuoFNsroaKW3bZheanyJkJrqfeCmPH4ec4GYFbaDCrkh",
  "key29": "5tGJPhMn94snpHqxNwsgp9mBEgQV9jLvGzym3jW9khgpVRYTtYHoMQSdXbb6ttpFztpiJmd3ihcdpYmsc1mVXF2K",
  "key30": "3c1o3Vnqboi4BrjcQzCrN9ztJriTVcUfkrUjXFEoAQU7ekACyTeALN8xgb8vsmTmvpSCNRwt5ouZMYmkKLMsxUUy",
  "key31": "sBu3pX4D3ifCAfy9YLpSPHqCZoXfheCJUdakCPFEh7gehPqv1LtytZbnkXNK9d8NAL7R5ikG71KdYxgTxPN8pVu",
  "key32": "2dXGywJT5APXiugyTSzzVmgh8a8eM7nHNeqd9zqtu3dtJTgo7BaAAxX5pb4zjZFSwXt3qNWsjoUShrwaPLhC8uuQ",
  "key33": "vSYkesXWNFuU5DP2YPo8NBsSdjMZKs4o85v1SnxVerULupBqs3bUkYmQmPRpYGSpgDsGJKQSAjVDJAHxnXdUEvk",
  "key34": "21FtC2vM3ZBjzA8UjtMMyn4mxzrQjC7hD5CoNhjhBBtHfkuCTtnwaPfhQv8UbNBiMSDcuCH4qsZJu3q7CUmJFzdq",
  "key35": "5C9JFdhWiAA6nPTFfVngoAWVmZ9KyBFo5dUcZw3WeDK84GDSRnyyYNh3RLU2mNesjEyVEMC7ygTUh8NFxJhiG4Cf",
  "key36": "33shwrieJgGDRSazdUE8siUyTwkZ9vqJCvBFk9SPVXscBevcKJ2b2kES95MpuzNsRZnifDiqFmihk5ma5tp1jDZb",
  "key37": "45BDkydGYqpuFXM8VmCeXkH1Zy1Y6HArLXFMVJnYit58L4qnQMP1sboCuwWCfaQveYSvmoAeSMRqiyLZddRcUYZT",
  "key38": "47d1Ux2BsTCxxSXio8xdwjxSUBCTBJ83KkR3B1wDCB1VaUh8yaB2CbdWcPtopY6oLHkHDjZoUSqkNSySriWiDEFq",
  "key39": "3zyZGpPNw2sXkQ529N23YFabNuote565cBWLUzfzfzidzFC7yd3486YMuAqUQDJaxv1NDs8zoFRW9Ms8wy3Pw9DM",
  "key40": "3Uxk75H2Rgoaktqbo95GkL1gd2EdkCcPDuaffRabvzEAU8RaipAaiQYUaiedrhJFf2e4Ajp3x7Pjq36fkNnWLUCB",
  "key41": "4FtU9cQjouBAMG6FthnS2TvzDg1zV4qagGydJAk98kLmuD6oLV2QqPP1kx6vZHfpwvxaPgJYrfmGBBF9wb1GqCxc",
  "key42": "58845MDc3tiCp6mdCTAyyX7CaQ78wvsE1T3cKRKUqMYTziESoHzf7qiEakEhJpZurfCWPGyBV9GBUs9WFH7s5ave",
  "key43": "5SpV2bMPhrChh54aeoqg7D9FLv1Vju1nBZ3duyG8VyEuvRghw4rhktPJJ9YmouXoTccVCVxFjPgqKz9dSHrtYqCn",
  "key44": "4kvSKFYDVpnqWfvtq8T3NfUsG8mun9HxmNXSEUQqtCGFmeRHbLXRuFzu6pMWdHQHj7Yivv7cf7Fsd8MUGuz4CxLk",
  "key45": "4s4rm4CKP6kdLTbLG7rHjuF2yUcrB5jMPHABzSEBQvN8knCw4wUWiAVWZRq47wyFyRHxFgNoJTWCr5b5fjZpEanR",
  "key46": "4uf7xkabGH2SHzqC2bAPsCWyjNKPFpCLtcGPzxxQ82jqcekNg8h99p7iRD8nr6vbN58Z63bvmUHPCpyvUtHcme35",
  "key47": "2G5xYkwBi5HLVz3ZUsKHHUofsaWFosE1yaJ9uxyjupvydt1EGWmhuUwvAwrw8iJBafZ2tCsziVvUijxcxcv4x5x5",
  "key48": "fnQTGwTxxK7F56kQkCn8yTH2BCQ1KqL4XCuKTsozSkigEAnpBjcN3uHroqXAN86v3PeAyNQyvxhkvx2CA5j6QyW"
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
