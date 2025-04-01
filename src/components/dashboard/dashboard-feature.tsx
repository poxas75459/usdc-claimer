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
    "4U9n78ExBk4xaAxoTvk1FQdaJxhbUrphWmDc4WT9cVDYtbm2ZasjPwzpLCiKHHgz82DHjaFQrQ7kVM6dA5Mq2FyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XqPm5ePekgTs8xnaGFiMjXZTYAGtLvbnHCfkp5UfjnhNt5J5sC1C6joM4sFt4CQS2X7wS1BvRqzbzTxN9tTfAy",
  "key1": "4FLETaDeUTXwhfErjuU1Mm9sjZDCYn5fDjkxNAeKxnWmZWZdwDdZ6fxcQj5tA3GvJLumPvgvmiwo3QCKg6vs5uRD",
  "key2": "61NqR2tdSnN9tbQork8fJeyjoenZBSiiy1wNrW3oCcaHaUYQNSp19obBQzu9WzmPh1tcMDqWX1sJeatnRymV6Nme",
  "key3": "3tbqvCSASoY8h3EybtELRdNdZcFQsE9kzcjzYBrxW6q6f2gsR14hJYZu6u63Nuvn2UB47RkHoBXFyeNsbtpHYPSf",
  "key4": "4nv76CLXdkZTsEkwJWjQ3yTmKpasT2raxPCSX9LFVMVHArGZzenR8Zn1R4riL9sQZevyUfh18ThhfzMKcgh5mPUr",
  "key5": "4o9f3o7T6hNwH4LUbZUeymyW1XCDXxTxpjZDDsjsRy8stsrTa8Tsh4gW3H2jwWo46CvfMBHw2aq5LE3hPNPh9Uv4",
  "key6": "4Z9RdpBQkVcipsuZTjqA235L9GVQqGujELvzPAqVFiyjNfpnRSDB2dPP88AKuAdWAW3TDnymgSe3GW6Qu9LTwVju",
  "key7": "Hy4TwJ29s8xYXmE8bXUmj7Psm16FVcQDKx9dCq3389YTbmfESGJBwdxSiYRZR11JWJYVDGuurSMYLogEFQEUMZW",
  "key8": "36aD2584fKAhEVTgJDsAnW2HLvGwj5SWZSYeDuxvnh6PtmJRB3PQ6zMDbKg4Jn51LCpM8D2UFEd96CUQmwcrj2By",
  "key9": "3hQ6tbtCXu6GhXQ86HdABTGtSep6AMzKPNS5wZqh9tjrc5ZtKfZcQRiAzTCZHCWrBT2oNkc1zP8eRY9RiGRmrht7",
  "key10": "2hKcxBQgVuj8jg6trjgEk2gVdEPkxHC1CrViW7bZYNtjXHyMxaLHXiTwYXkrtB47gAEUBQuhFLxrax9pQCEXdfgj",
  "key11": "5RQdkzy5CvbnsBGju7tmqxQpeWeCrPcFMziTQXJXt8AgfC5PLcWpa9ADVsAumuYgruH3vmCnf6VX7QnmvEP8PWQj",
  "key12": "4GpeaKqqpyJuE8e5wktMTXHSEeLDJpZbvtT1wsxio496cwPJSEhpoCM1Ux3K1qUdyzaJXzrPovKj7XE5ruyoMS6x",
  "key13": "63S5S5LKSSBfwRnRxENByA4F1DTUQVezYWo9e5mNyDveNLhHweBKUhCCKaySfZdkBZBYgbGiNx77JT48mr61QZD8",
  "key14": "2qY5WMZDCj5exnsarpUeSXPBXBG6kbUBMpo4aJLDmWDDurKKPm3w2mLccdxsDYm7dCnBXMT6WXoLBu4fswu86EFT",
  "key15": "2tEu6XpFYDsQiH4GxYgRKzc7nLqiUHm7F26ZXFSoavMdzmGpUf1cfnmrSYFMQsrJVNivL7YnCfTo4FotjxGbXbfN",
  "key16": "4JzTnHxFFH4QtVMjwZa6c2jJRhwaMV1ThB55jUTgxToZRdqFSjyV2U13PmdWhYxAcppNHSVoDrm5pfAh9WmF5iPx",
  "key17": "56RunEeDBwVtbHRBsZYJBsgpyutpCTB6P7L4k3DSM67FKsFGrrBv5kiJvV5j5UdQbjzdUDZoMx9WMXtSegNMMEVQ",
  "key18": "2RczQN6aZUfQG7j9MoMNx4JgALynyFphcNyLBYcrrurNmSr58tfkzbdQLW8W8jAAx8FpGkcorK9ot3vwQkhMHWgS",
  "key19": "3pxMYwvzMjf1cwKzN51sV8udBgWAxMMczMHyTJvig8AZbfwnhgRHmcyxqUi1WQWV5hHy1qXkqJuwAc1bmwEz4mig",
  "key20": "5z7VKmNYMm5By37b5p92WLktjSdCf7MAhkoUHycC5LWSwbPuQinn1ShupgwopYemmHBzUBaoXHcnSCDEMpgnwA15",
  "key21": "5dNVQVqLrSVCtu6nVURum8aAf2FMta4FwqckAjMhzQ8qzuDabncLgkLaXnHXuxKBVU5peYVgSJWQJ9bDRX4YF9oe",
  "key22": "2P5QXWF91H6cTbzG4BMirNHPuNhWBYhhXuRGb7ydWUjdG8gWo5pGq5D3tcrE95gt5pjWwoeBAMFWyKswmwi5jMeF",
  "key23": "2u7bzHUKVAu1dGwx7Y9WWbEh3pvvR5r5Xvq7C62wWHQmbCi9csJCmx5cqCs8P8dJyxDu2CPVrptmCUArvuGoZMFw",
  "key24": "3H5uWkhEskqXVshc4mtg9tcvDU97czpcRQEC9KnCTxUHBrQmTTmHo5qydyiFuF94Assnh1F2aG2zAxFi1KoxH2WD",
  "key25": "49NqmcyYU4tpo2AKxe1SksK6CaneRM6TTiy7YdC3oEk7yUw42XJAcva5VX8dfYu7RdeJ3SMKtbmMoPBZS5HMdtZv",
  "key26": "3y3nyS4r7MCDeaZXAd1YwyBAe3oUXgq2NqvSsD9VKJ19Er3AhgfVE9JPekPsywiDd4GrpExkxLVY8bqNGE3NYLg6",
  "key27": "3g6P7kddkde8C94GbAcrXsF2ZGquJaK4QYMwjTBSRte62BhFcjje4pguGZUepyjS3CqVGBBhaaqPB7XCQPAk2UXS",
  "key28": "4WvvEu6rN88JbeYLYMpjxNUBAvFMcenXqBY1hpFmQHYPkmjqtHnV8LeEqZUaByz3vtcfHaAPeG3FW3TeStifBnMT",
  "key29": "3Hijtx1H2W3Qyb2Zm8PvQQoG26bSZfHqk8XwA1HT33K1Bz7A3vSD5iKhCkCFWzQXiQr6NZweSokMaUH44zVZnZsF",
  "key30": "3Sfp2kzaTDJNTQV6g7jsjAa3mEXGjkB5Vf4jYbUuShLEvXrQGbMt5yFBEHBjPrSogr87ZPKWQJ561ffDdHyJQERn",
  "key31": "EGzFYKPqTf7CScCF4Cthoc3x9RzXNW39vQP6AzstKJGgrof5HzznNxeiJXmc2bRspyrC8mvHrWtzoKsUkzpD9Fa",
  "key32": "4GG2N6EopmXUFgkhUr5Jx78mUbfFwDRaLU2VfdzHfK4ccBUPPZsTzqNDyhedde6mXbDZ6yN9dvfTuMDwnRM3TcZ6",
  "key33": "4YVP4oH5aVNWBjDfe7KLjwWaDouKzjij32AzpbknNbSwQtS4hMe3C6gZ9YT5etwMkonVFaRvrRTQPWmEpcrsu6Qf",
  "key34": "4peD4gnMhkroztbxUf46QFdBbhPXYh18pXk483jNjzWJKe2DSK42SyCKED5gyWxMCeTjcrb19DF4hgUc4PhVP37Q",
  "key35": "2b4Zjtz9DQRMBTSxPsKqBN8G853m7vg4fjJQYeKc4TnrxV278vxySPZ4qjTr2TaiQFfJ5gGqmD2A8LJP7hfgGkQF",
  "key36": "42jNzdtRCVuk8EJX6pTo59rwin822d3pdzQYckjyY9fHDWqWgpiGMoEjMucRKFHr9uLYB6N7RKtx5gQ9tXyBwYbT",
  "key37": "375XamEUpedoQuEU6FqNBSWQuntTCHnKSSUYV3DpFTAHadHo7ekMtmtMQDfVN7Hsh5cWLwUmqs7jrrNRJBvxnWFp",
  "key38": "5QYLh9kLyW58bwENmT5fg2BdNxmaJekbViFmKDr2Hp8oMzV5HzHbn6tuTZveMqJd2hRhHKL8Q5WYoeWBJMm857TV",
  "key39": "2oHWgLmCvDTJkv5cfNr1zN6Dpa3rgXTgjGXj5eJPrzP2CKsZzWAtfN2aJ4XkrMTbvME1npTSLm4XtrtfdSLBzoBz",
  "key40": "2wPJJmPgTsnH8qzp5TXRf41pxmzKq2JDtavm9SgjGbEeL5mYdSLT2VWDBdr7BmpWzifRDDydRQYzpoHQkhc23qsw"
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
