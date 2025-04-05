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
    "5BWTovsP7YC6KVT9nvkagtUqbUQmz2Cdn2vCjFWyNUyKPFWAESWA727RiB7fifTfC2VJygicNufdfqyx3fSes1Me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmXPJcs1UJSFUapeeLum7UddQ8DFzSU8XxPcQ3TfeKYnDQg2L3iorpR9dzwpPrxAQKz7aMwCvecvNbixxhmJPUg",
  "key1": "3vvfDsh4oaNWhUvGmcLwtnxYCP4YTdTjWm23Sfo8af4pE9xK2T8SkrugWxr2k4eZwUkgzMfZ8LAT1gdpvt8sDcgM",
  "key2": "4BUkZjUracb6RSwEnCx4nUiG3sUnMBdcvq23G47CRLun9n6hJQxK4d6jLFaECgDS46rcF3tH5BUkNCfCPdmmxhbT",
  "key3": "2TBZfEcUFwGdobMEzGjBt9b2csQ3X1R1qXbP2Jdzz5euk7VbdLiLN34BJBCqyvBxxegTmQWJcLEULQhnBmznzUui",
  "key4": "29q8CtSyZcRTqhUYUCRjeX7hXLjZ6rPAvnwD3UsMH8YDWmeLysdAwMqdnBovJfc3uc1WproRPCXV9xCLV3eRQAdg",
  "key5": "3uwDzRNP8HwpoUg75LfiQRb99HLomjDDhMVNY6C69hiP2A54cykVe1DHhNKACoZxMBRaFSniSjLy5qL977Ra2TjK",
  "key6": "SsiCt5XMHAJc7yj62jQ4QKFxJCdC9c3vZu21C2qYUrXn5QBe2rctBiYtGp8JsYHFRbc44TkgvKRCMT4dL845mzu",
  "key7": "5bjAPcamrLASneCt2YYpCB7Pudj9CwmNoRhuieMmASpaUDHhhbBSXzVxoDG17rxSNQE9FWMTsJaRyd4QBfwNRKVX",
  "key8": "2m347MjEwFmo9TDRSXg4sxycgNCMFEchs8i61jmKpL7bJVeGweetJHjg3odQ3PEKnhWHeA1ssNq1sbJ9EmwmYTTZ",
  "key9": "2KuHKqCwBZPU1DbgVh9DwWe1fNnfhmzLV7tpYYu6B1dnW3dz9PNs7tTBzp1FvH5XUMzgu82Qp9WxmERnV4m1mEUB",
  "key10": "5wCU3gTnnvHTwH1abeoLz7hUz9nWVzSstumTQdj4LWk94HRokC6WKQqxmyEF4RvAJTugL13Q9aka7PtGoKK2JNQG",
  "key11": "2XKjFnepXEBFEeAK7HvVky3mteTdPkF3LaC5PacLQmpuAFx43TkFyKaStiCkH5jGfuJRuAu5f8XsrFpDjqmTQYXG",
  "key12": "3Atku3eG66dxWg9b9LXXcg7xmiqC7PWCMPSQ5mWapT6knw8BEVQ5yjPuXCJ91crtA5q7Qdid8GJQ5bmjfnnguYbU",
  "key13": "2fUyQUCEAbi4LoZL7sHyRkmzUdnGaVgRLhVMZjmHPPp1eY2pJLpHA5BH2k44dnmnPZALZkQqRRjitj7LViFM3KtK",
  "key14": "5QUhgcoWALbV3Sb9e7H4UvRDCqUjgZXA7pPMRKayEcHhs4vBxJatun4eiv8Xp76K28uw3T7ttvZDti9p5iZQYQYj",
  "key15": "277fCHFn3vqXFCwBmdVET7jQ4bXEMT52X18E7XVbpMvVhNHkjJ8AeAMszFimhM69kiV1iCx11YrjTUwZtherfAe7",
  "key16": "2sQt3wrdj2sgJ1SUWeh6V4PdsftpJwsJPnppGCaAUrKQ2CEByiFV364AaQ5R7YJhK47jGoyhzg9cj2rrmB9voPF4",
  "key17": "2p5QNh9JCozb9AirFzrHWCqb3T9Hv78xfPzKnRL7vWQsQrkSuEArwiJh5VF5QsFCMEuuuEMYCVnipQ9dJsJDehTz",
  "key18": "XxjmGmF2z3Qc4KTCZR4cJpHQW1sDPLRHBHhzzn9ne7bpCGt5nQn4J5fPtxM8ypj6yGgwrTGap7CwkNS3JYSWND2",
  "key19": "61X8zbXCU5QTZQEw2J2otR17kss1b3h3gah7WWTtWZNcmhjP1oq5AkphbTpJ8imFfaaN3SahMoB1qnwM8aEGvXcL",
  "key20": "23CzDpdtGEBemEDgUQPXVeb8s8euuYheiNBA5SjKXwqgy6GiBLaZp4Em7njR8jgnwUxeFzdHS1bELmjrHHR74L4L",
  "key21": "PKzJcfK3XLV9ooJurh6RmbZAz1tjMmzA4LqmSReUiA4zPqTVfMoJXrPtKRaGsuFKax6H5hK1nkjEpy5KDurKLAD",
  "key22": "5aSxfJmRyVZ5nLWGArxwHWWcSEopJRDztxeU5vu79NjX8Cxt74pcSZ2oR6RU5N6P7p66sjBNANYa1c9f9pE36HFN",
  "key23": "4swjZddPVJHE1q47GJZ5A8pV6ohJgj3iwHmrGNFPkEfFWYL5mjWD73XaA3Ho9NwB7NC9d32JM54LGYouXrxTFCc7",
  "key24": "2qDM7jSPkPVkK4NTxtB2pVsUurXv3huLciKSHxPgbp1NibTFU5pvtUVRmQy5dxWRr4S7VrkQ4r98nZfw4u35SBNd",
  "key25": "3dLPGNBi7aRsvLNCSMYKJqUeKJ68zDrJgMXfZo7kaPpjtPyKnVD6HKgNmUJAZ3VS9QcuiaVVHks4z7GJ3NsbV6Q9",
  "key26": "5KAz4ZveZEp3PBQ5NwEC9C7Bbpj3vQupqJKH3Rstru5FJZtqV9Kzna26YSuSpsxNmEBzbLFbi9nLCYxh1bfNBpvv",
  "key27": "2Vb2SVJacxpFG7PXG63GkzziobkJaMD8uXSeDd5sQhJ792f75pA5uYr3AxYCNEs8zq24yX7e47gLpZQ7DEjBVTHm",
  "key28": "3GPoT3nvwYsm4M7SkqRFyu7idP9W12e98KBFuiyEZd4GWuneLwEnLM5YFrmyj8hyHQ88a8FoT5LQgeyoHprTYT7Q",
  "key29": "24EiPhFQ6JYGYMu77S7aGhJ7Mk4bQq47QnfQBDz5nZGyqNKMCdPqS8FaXSkun7HadcfR9QeJJvvhdMeAzQpFMwfY",
  "key30": "4eo1fAu6TdoubP8Pb467JFTCa7tDXUYmCQS1aW1LcmDyKZ5cGjAbyWUASnrXSuiTUT5fWd9u5ZJfHE9XnKZkpHeA",
  "key31": "2awo2sgugSaMMMRSKjZf6GvGACs22xu6YpwubKEQY2Zs8JgvGSYvachGkZvT1qQdAW5xJYHQ9ZnNxFuZXMGeJfFo",
  "key32": "3sUUgU8bmrtFMEwUxSUcnjCG2RWWv4F3JXdYgydy2oaEnCzqsnuaMEt6aHotxeqexSxixErF8G5BNixhFz8CSuWc",
  "key33": "HW5g68EaLiW4ripMrNW9gm5D79fVKDHpTkuoVq3wRZhHtGn77a9xgcTSF7em7vBEcGvkDYmntmwkLcaBkMpdrYQ",
  "key34": "58QjdGr2EvcWjciLpi4NMpNSFWZ1FDKKxCyG9JAA4gu5c1RfjcmTRi6bACDsfWtVxFi7RSJV1UvP7sekS6aumbda",
  "key35": "3eUhkbWYJNEHPzHHHRnG4tr96ZGA1LRwuhuW81iDg6son76ZfWucQLtQh3UMUhtLdFRiJQ28kkzpPp7sLhKet8rq",
  "key36": "2S4DuSe46yeCFHcFdEBQW6tZ1zQjH1iBJ86KVdgaXmTXy7FCAT6fmoVXYPRTmMTB31izHUPRyyEP3TRUV37YPnyV",
  "key37": "2P4Qfsk1FaGomKyhdxZVYqAFGrQbiJb7bRg6ErVbCmzKdLYkja8C3QetvhJj2YvcqoZCWh7MXd2iJRXL2oxPBiWh",
  "key38": "ic7FB3jpzvvd7xEHSCYWt7Dec2ryZ9tjguEGxfGpwRXbdcsQXcoFREbzLqUmvi1HBNDm19RMdHMp8W645467C1d",
  "key39": "4dC56EKczjjZTTC5C1BvkeznbrVWaRYJVT6Q7pKQyD4DwGRckw7Mg85iEpi6yHboAmEX2CSoAdMJSRD3FJGj7GS"
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
