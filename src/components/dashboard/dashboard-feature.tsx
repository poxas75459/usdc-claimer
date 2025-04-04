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
    "3ppu6rc6hzdmXkBgsaQPcHDGfXkeVYZZ6EDSEPn83tnGkmdmegYtQfBUWQYyERNMfHwhoQsCBJaEjoVoPmNkijrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x5CamGm5CBozWnXzzmffpVDGJN3Byan2Ldh7CFU77Snq24TSjBBoHNZtoQt5npxASBsHcLJz5QEi9ZnpjzZDFQu",
  "key1": "vZTn39nK4cutFHRdbYVEjBRDiTfpYnpoaYptLuBfSk23wWFS4GKRT9aEEcdekuQRLGc6hbJ5ZxTNrRCPwP8h5Pn",
  "key2": "3YWmKuZ12xqRy9AG9qscAvyxNyhyPk1WvACLtiYs2jNKQVTdrskrXTYG5r8XntbmaTsBp16t45QApJUyAAaN6GtS",
  "key3": "2nM9gzZW3saLUapwprPMgkgJDRFnyRnnQb6VuQYUVUTq4xC2E7V6CQWGZ9atksPpgMmGbVcfE194jNGZnKbuWajq",
  "key4": "5ZhXG3sULxzwzd2LFaB4ypYdst9pEwUpKd4e1bejGQjRDm7wnfox1zP7uCarHAuwaDc88RDAaLYRD1djrYi5X1yp",
  "key5": "5TUiC69fJ8C8dgqDsnTah2ZhUpeDS9E3TUoje4fNrpcv47B3bK2FATxcAkcEyMpj3CW6mqK4mzoFgv5vNRAMxxjX",
  "key6": "2EXMwkyaY7YXvEHZBgqjuFGAuLTL3ndsvb1D6TY3saWfUr8FCSCYvrszQnGxv2ftHXsQAQc457oWz2hSadjZ5z2U",
  "key7": "5onYuCgr49wUL5XLGzKsf8CEUQi6gFUwiCZiCQsz7cM5YM9L3X37rPsG6Viwy7KCj9uEsvskR6NNeY7o1T2XXRsu",
  "key8": "4YTB4yDoppkwMEKGbtUyKcvB4vRzTBjs8PBfj3tJs3c5gYTjvpkJg2shVdHaf6FbuBLph9RT59ZVZKLYaRMKgHRn",
  "key9": "3AkGx7sR2Lbg2v8qAGwCX25qZo9M1wCVgcyEnoX8L2vWSR9YBsZosSdZthCwivaZJ8JUztUYJE3wZndydJK2Nx4B",
  "key10": "3XY3dbKvwfb3nQNWEiEo6dFEL2noCWgeiW11GL9TWQ4a13qWp8gWJejETpDsugunrbyKAmLQsNPH9i2QCC83Ah98",
  "key11": "45SBEzgzR7KMjG5u7hp9tGkdwCCQf486agVBE96eARw3vMqszJcBW3SrkoC2cfFd4gPtcTmZVZaM1u5bQMjHp18E",
  "key12": "49FUDHmRVXHnVx3VCMmBPhedm7Ns1ygAK5UZp5ajiocDM4mrrFDbRWGXuYu4UhxHpe5ygjLvodt8p5FdCwvAUJmG",
  "key13": "5TYb6XC6GhqGs6G3yvwSieHJmgUXkC74ohwiJbSKT1YnzsCiZtNwVqYQ2UbbY8jHdguA6CGCXYEBLW5uis3YM948",
  "key14": "4hpsJhF9pZVk7fHVXqh91Rpt2yq3RNpegryQFc8qYG5Q31QSwnXk8DV7MF3FCUtf82JC9x2X6CaxHw2g9mq7CLWd",
  "key15": "4aB4jbiM9LXH8YcGUXDuKBDEh3v6yQqofzS1naHFSV9tZ8SNi55nkvQD4vgT8TWY4yu49gjkE3HBrqZN4JfUtruc",
  "key16": "3P9tyzVZTxTDBDhVBUPUn9bux6rwL8cs1v7eXcPdpRNQxeUf8zToUx7QNKtTuvTpJ22b2b8knzyBs3tudauMPMs2",
  "key17": "2gaGU66wAoGyH2oUnwsNx1fbxdVKNBYCsy93BcE8SpEXKgEjjvrhzbwVftc4hZmFfmEEcmukZbU1w4mVWr8Ev51x",
  "key18": "59inLyNQKftMMF6bLE6hfVuiKM3Zbv4ngRxf24t7eUaeZqXDDzxQpByWxuE1Jn1dZYVu3AW9TU1RtvffrFGUZYuS",
  "key19": "3Q9szxj7nBazpDpNaxiBXRFuyAoHXqmu4aSDhnJ2SFFsazU576kvZc3nWJzQ94BnKYFGEdYyhaVtk3pynQTfcxWd",
  "key20": "3jrG5UGqWeytYX7PGKEJxuRUZEfCK29auyavoJMuZwbup5tXV3t41FEfmCmqpNvvHoLnR7X4CquhCAcNpT2Vbg8g",
  "key21": "44Pebpkqu1VdGxS9NDNjTuH6JPxs9sPSoG76bFV8mh9vsmMc2MQWc7ujXqxjskrLpYeWy7Y6yqVqNFd6hdaeFBdW",
  "key22": "4KnXEV5FCLUAGDTAnJEgKC21t7kTAKKaFdY34cacJWHo71iPrHZrbFf5tHUABwoPTshsMbv2582Ed2KhpWTZ8FBV",
  "key23": "CPSMyzKqsJD739x3fVeUCGhXY4DdKKasd2nTF1rudiwNLhxusT2QPN4ZfWGtxgkHFe5CcRniYauxCfH4wxZ4ahC",
  "key24": "2pVUQjkqNmna9Ksrx3vpKsihbMfjJmQFmwtVDdFPhDCkakecjhoqvRu6M83yLdJBiEALU7aKtKm9QZsM9udiUkvr",
  "key25": "3yCtw861pGn1cyPyfE7jpcWvTjyNyaz8BEVGTzZHCcZziHb1KfuEHLtmEGNa65tnsfLUYYHk2p1cwtgaLM7Kktru",
  "key26": "61mD1Wgb8jZjA357MQLJBF6X74CYHoimRrM5RTHTnKeNZTHzddqiXcBsqtg75E5VXfbEWToWXcALtA1EsSucZvtS",
  "key27": "65Bnioki5YaoNsBqJvveWyaQjdqAoDkBS2KtiRSwBed9jtiREwKC7wKsdgHpPoexKCX6DFjf4xfykXLkGFnQzBuT",
  "key28": "65cEuZzWJNBL27esmMxY5roJFukGptD8ZCeKg27Qzd4kawXxregSeXyLwXStuvCvAJvpzksy4ga6FXWfoPwmNf6D",
  "key29": "5RPyhvhTBsasSQ4P9uJzr1LkpRTc18Zo8LDevcAC4TFMqVpzRdAu7L2ERmKUHVqEWv3weUSGgCjTb7a7JRWWqkoe",
  "key30": "4hGPm1PqxZKXBucW33hZDzA43YhfMdSFsUsDoLCcPi9qR4ho54KDHjh2qRrpkQit1AEJPh6D3WdBNzJ5DUDfXtT8",
  "key31": "3cjsTFiMTjWk787PNgQhEo9KFJ5LJ9Phs45QkEEjFsPiuZ4iuoSYPsPC2zxoJ9AmjAV8ynPU1JX2w1cj81ZFXLWw",
  "key32": "mrw6jhbzFFZHbPZLgq29vFdKuVXweAJwp9an3cDnGC5eLb2pW2pVmwf8fxtvNEhijQhB2cGMq3c2z3aABa1QwjT",
  "key33": "4SsZxDUjF8LhsQQzYYPXNY1BRTkZfczrNUPqLUhwh8MBo7kDkAQpiQS9JSZg6D3MvcpEnsCqZuqmmMPqETZoEMpV",
  "key34": "2idVsQ9EQxVpdCNDrkKpmZFztjsN4aSUJeW52q9q5f9Wf5UP1M739kuTuixexHyUaPvP6qx1iDbfNbyjWZEnQszp",
  "key35": "3rz67RmCdDEZdigwJ6NEs9Ygn8iu5k8CjzgDfwXfXbUktpjcbYueyFB1vA7djXPRPu9DrN59ShsLNskW8LMJwxSL",
  "key36": "3WsX9kwhR8AFxfs7ao1DLDmkrHuhHw2Xcy4XrhdSNWTRUP1b1a5rENc4w5hy6zdSSvRBw4iUpYwRgDpEwxXho4CG",
  "key37": "4fKefk8YEUVm65pe2VNfUCriVuYy8jYeqXrBnhW6f1ZRVXppx1WPqVgdXWoVcYnD26MmCpGHq2e24FDaqgNErD1K",
  "key38": "3xEd3GD4Ke6FBbWXaFjAWzAjqtpSGnupjymwwddU6FmRopYt465iRLsJir2YNqeoEn31eTSceGj2HQa5UFFWvTxJ",
  "key39": "4DES8H6QoxVq3FXpVbK8WSdMRDTuqd736KsyCeMHPHhqs4w2Z1WLPG6GLUPvEh7VtiV3tNnK4G2DvTHY61fv4TV9",
  "key40": "4CbqdxbJH6RJbVWa7pMFHY2YubUYuKRahhoriPXD4mYC2ZPFT1yUyTZeTVkVviXxmj7QbumqRiW5EyiqKESqUV95",
  "key41": "21orLM5w6HcwHBVFcR2xnqwWS8dcwgaavyrut8Rqj3RGF4bZsYjLnL5uEzD56pvztPGdAZKNFXd4mHVgTN6c3D1H",
  "key42": "YfnejjyasF23hHn7ZwhDsVp4r85KtChthJ1NdXEcCLvkrL4zT3Uz7jL6k5QonpLjCE2FJEaCHLYAR11siqvWsP5",
  "key43": "4eW3hVhGx5Wb7WURzUMz26fXC4YUmNhsjAfHtPmcjWPLprr43NNieNmZx3rsThZqvTc8H5NkLugJw8fz5U1Hr3tH"
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
