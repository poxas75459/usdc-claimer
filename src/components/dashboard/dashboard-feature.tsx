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
    "396inpoR3UKuTz1KEuhBWaBGPzAA9zFfEsJ7JR5DCCMv4yXw4Vq6cCdAQwC1P5BQmnzYJPA8kmviuhHVAjECLWFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rVktmhnYtwexAaF6P3Xh91HhDavLgND8V5suYScYjKg9mt9Bj817E5agP9WjyE1qDBDfmyCoov4Qc9WzrERcTT",
  "key1": "vtYSxz3QRvQPiSL8KnTt68Q8o5jaTzmtbcPK1uRghb6hiKgw8KoeFHZ99Ghe8H7qjPsPbB6vwtohDmkCjBi45b3",
  "key2": "222kPRj63amuqUERo6HNVVtmiszsGG2CMo22Kw8jYMsEMHdVDRpkwRw4APkbXKP2ZqikuUUhyTJwuGfD2TaWcSfK",
  "key3": "mijKCwdbzEbe9oxRAEH3P6TnjomdcxNCCBXJVtLhJETZLzRoS4Kg7hpV5gKN5yzrVQLGASmdf1QrA7gSsMdAZN5",
  "key4": "3opm47PcW1qVgXkwBiV4MedEdNQSc3NHwaghgG7Wxp4qSNPKPG9hd2HTyD7BiaCZ867HhjUQeweNxPfts3Uw8F7A",
  "key5": "3gNxmXacuczKCm9ZDVk85FDvhjYyx3qzsjVMJPcke1nFWQEeNebPrUMnzSL4xxyrptg9kQZnsnMCuHvs4yVEJgAb",
  "key6": "5nPT9Cpu3FXdPPXXsbsqNGGaLvWAxYvTHcAQkVtq58RsY88TqoVyYnS74JLSJQoYVZ7NGvhySnJb3AtbJNqWWycs",
  "key7": "socmDKSUX6sbeB8RMF1mBQEBspFAEaHjUmLdRUKH3EnLyxHdkQR7MHfDekTXoXKXpDatdRyBnNgrgSLS4u2y7M1",
  "key8": "NmELRDkpzeXVzxC4XkSQSPANp1nJggSooNcVT4yyAuW9sgSHpQBn1rtinibkZeKzUAyPqmQqVdxZxR1wFSmuEJi",
  "key9": "5NvVhb9Gv2FJoYjuN5jP3VQDDTMMUBVBRkAY62DeZ4YTrd8XFCeizygNmwBESmdxU2qnHock5yHwPjTRUd6QUnWc",
  "key10": "5VYYgjfA9jNYQMYW6AnjtL7ckpdaB5wvDnL79VVis5SdqxE1kgoD4smQSmWbDvcaG9vk7BGXtaCaTV7n6hguGfjz",
  "key11": "3EFTgMAxbh67JuKjju9HSJokdtjjVo5wTEACyw9o48nuyCbR5jBFnMLBij48gdxxQnPHAdcf7SfjtWXJz22jkw78",
  "key12": "4cRcRcTin3CM8fgsrv9uZ13ByouUTG1GPiiU2tFNocBq325AJ6aR39BETfhPej2SsAxYu7YZ5KgVfZSQkAmuL92u",
  "key13": "4KWKjtbxrg6RmNju84XvhiU9qn7N1pBkHhT9hfauJazga6XzdMqqqWbjB61PZ5Xn9PaHTxMSUxYFyT4EfLWVp1yb",
  "key14": "5Tc99UM352ofFxcRPL8NcbKfStCEm8c6M33NqELzVsXnZEcDSdtaT6ib2D8YfjVW1KeAGVT9zadRftpg1UjhGgf9",
  "key15": "4LfVq9GL7UXRupxh7eQgNkikpepMhxGqqGY2JA91s65eGh2sQm7nj4GjqoGGnuAfpMD8wSw8cZx2jH74HyqkWvAW",
  "key16": "nHwB1Fsbgev2KtJpeiaAvYgeiCv56BqdEnnjvg86KcRGk1Eh7zXuJoRRrizGFaagfxP1WCNTFVSVWXSn3TzhpLx",
  "key17": "39m7CHNQY3fpvT9kcFiKWcG5cSpJkCUb4t9czsDfGCUsNFUw7JmLhnaoiLqVf5Fbptd8nCpw5nxvpL6EDatgkhVT",
  "key18": "pz6S8GR4BKisUzF1BoPpaxLkyUNhr9L6F8bYmkEUXqzQ8YHNXtPv4YEKzbxxYMmPG3dMwY9UkdyuH1dMxGGDAVb",
  "key19": "3pLhW8WHJsh51Haf9XVzaR326gRggsEypMw8zoL4tE6BQvarWYenmW7wyuHZYpGkpgcdEdYP6acQQxqAtBSAsjVZ",
  "key20": "47nko7K749QTf4WuYk9WFCPRnAFzviECTbs9r8nTFHZBqJjgSQH4y8thCUJERT96YLqyJaMgPzQGVwfFpb2dEQG4",
  "key21": "SxQVUzmeKXtQ18RARS2hJ41dBP6DcUq87w2Dzvdh3sbiZtagWmKebhJkpDDas2zArmacXeoabNbwLBZ8QMHWBK5",
  "key22": "4PbU8ZDvHXXs3TFj2JELkyBfetevNuQuZbh69WrrF3Rg9cMK556bU9aprkVSH5kDKUucZ933wHfjUHSNiWKDycE6",
  "key23": "5Ewtgge1eqJZmVRiNLkkgjEGpsoMfXrr3qpDRwPF4KtSembFFGZygiiJeGPizFFCik9DSBEpyS94HBj23uGj5299",
  "key24": "5gt77ErLYoyoSmAwKKZU46Z1oZnUExH7k8AqDyiKW1vsn2fmW3haEQqd415rDvP3QzqvFh2tvjSrpGb8Rb66HQme",
  "key25": "28K7DL9iWSM4R88hdhNtd9F7XZwagVNcPDoGPewkDJbrPX2b5G7PHzoKtzdqTTksfbSqEQ2GoXfHwGLppzWgKUQA",
  "key26": "26gPyetVbhNJpHFTepbhEb7UdZwx5gm6sjaNzpvemzdiipRVN4VWXaJTeUKDVjjL9v8xdKwPAE2dLuMWbFEi2h1C",
  "key27": "3V8wDjhTrWmasBLRQnXxGCZ9eearuoUVBniCzSSKqVkibTpWTFBGcUmfSAfdgDkSQTWY7MDcvDA5wbuT79MtmoQz",
  "key28": "3218K87DfABcdwVjmBqLddw3H7s9JMPdB2st1eELVSvEuR3iAb7tjvVUj8p7pCkA7FgXrgPzVFN6G4dTitgUwTLd",
  "key29": "57rc17YzpLYUCdxzLP7Y3tKKre1PAQUWkj8e5xNC2Vucye458EJDFUkWc1fDGvQFfrqNobBLa7iaLRGYNabViBkc",
  "key30": "5vrvc6hFHtE5qmq1sFxjYaPTLvahu5GGNMygkivCLj9wWf6w5L27yDejhcftiA59srBvd9qiZN7zX7CJRW7kfZSf",
  "key31": "4BJkvAeAh2wgHJXQgVKM86iLBaqjPeu45zY6xSgNAqp2pWxzyZtphvMtBfNT2GrVti9RCJwyisUSXoYbvEtD7QQw",
  "key32": "2ZzphYd9wg4Z7ihKhEo8aiZQ9hmz6PYSPpV3dah9GpiXhCQDCDNUchRHBnmU1KP2G8RECqK1HPWH4NAYW9D6Ho49",
  "key33": "3XgWH6vXehcMqCUeJ2bt6ymBMFHgQoCyzrGCCQnKbxw249mXYr76Te8QUP2NyBJmnAWJhcevAm6uXhUBMrNe5UKk",
  "key34": "4D91x5DEvQud8i6gkHrCbMDpnXE9HWvM5a6G88n1zVMr6iyXQenuCeWzxFUo4sop2PUaH6SWxgjyXvW6BGw2ad4u"
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
