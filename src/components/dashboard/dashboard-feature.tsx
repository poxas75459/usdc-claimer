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
    "32yjpsRPUyW15xDN4s6W1aJ2ZLqFCGZTsGm1KiEJqM3HXeGY5m5kRSmHFNFR9QYNoFHAYf5VyGdfyAVdBGZZtwyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44MnxsUw54sUVBFhX9oDS9eXWQVDMjtTymV2XiqANaPJZidj41uDSHxLqrU4pceGio5HrfPWNLRKegUPVmVUNmGz",
  "key1": "3o2ZrNFTrsxi31X1NmhFFZEFPua27t6UsNSzzxPnc2kYxLwrKswZVYH98hbfLwLL1MtygZBgo2syYomcCkzEugAY",
  "key2": "46ywWQgrft2mTsGSbt6VxXAAcC9ka147XKpbMwsEdwZrKJSXHs31R81WLUeX2F9RGe5vTneCsiUHwqgqk6jibUPA",
  "key3": "3LMhwbjW6zqPngcszycDkpgudFmL5GzjNYv2YZUSj17Bjt9sdJVUhpp75jHsW58X14aXjtoxXvkgyuv9Cxzd35Rt",
  "key4": "3ZWeos5kSD2XmVSZpnivwAL7EC11HbzyEfDZfZhtLE3Cnu762BVbVbrvF42FEavpK2fqAqnoQuTtyrzYkBfjpEk6",
  "key5": "44v2dyZhrW5KCAS412m9Fa3kkpM6r9tMK57PtHwbJiSfFNJT3XGmip1X1dcnK1Mkmvy55AfBvf7hkZC4K9DDTL8F",
  "key6": "suUn3tyaTMyvewLyx543cPU9Epi4KYp8dkGAzUmCa3D2Z3EcnjU59qiKinokyJcYWpk5RVN6Dhzu9ZdmZx5tZhJ",
  "key7": "3PHUMQMZuVKfhdmsTNQ8vveN7ZPDokDsJGru2MjP1vsSXgYfWjKkP3KT7emJ9utXFBq42BC3MrAuKdM2b2ikbKTn",
  "key8": "3wgWBNcSH2ZV7wkXWBHwRAiQroKZdibSkZ19uMqgy9LVwsLeCc19rgud4h4CiPdHc75ENCda3tMfdv5tXZgqfKmZ",
  "key9": "4Z4GABUMfZfXXqVrP8Aj1Wvi4DKi4jpyhths66hU2K19RSVQ8de8wskRd5q3aRnZbb3nyxoeUzdT3yzwQ8L9djHC",
  "key10": "3qGZwH36d5npxZZGeU6pM9Ps3rGwrczGbrZ8TNWoUuc7zFdZUe4964aPchhzcTSfJEH9qdJBQULLZn7Ncp2NdZLr",
  "key11": "RhB3FB443ozJvQym28sFo7aqfo2PVTAtGhLRgdLGTc8BZ2d3hEpnWjLVQN1LpPrESkFRh1ujBevHnh4XFuGgdm3",
  "key12": "5G8ySF13XLbSnh87q8u5129AZxN5hSTJX9GqGRFZvALabchpEMDzGmdMoaYbL8q4ZzyfWgiYxyyHEnqeMjCSHpQj",
  "key13": "3ULmaP2LV8rTAVioyWfz1YxM9ghodUZ8H6fiBAMFNYH2qZzytjcisbgxFNxGfxi2PFE3vcKtjV9my6HoydnRaB6o",
  "key14": "43vcNFZfpBDbAwkstZR2KVW1DHeqDSzrTK1raJPoqd5WtVgDkB8ZyDvVAA4H3QHNKyX8T3XwBXD4cELk7D7xmAff",
  "key15": "22XdVQcDwNqjPUMseWTSP53VpEJ2ygLa5tFHmNdzH2cBmdzQBos8r2sATRYDnid6Lg7qAzBeBfPTFPDMADXE7jsv",
  "key16": "4vkHT89RLMnhji9aKmaGhrmSkcwqDxZSnGTNofE59ZevbjycdM7XTEhqdsKvYYocq7kRjVHdvr3TvXtxsNrEnUA2",
  "key17": "24NkoDK2dpZXgMsfeM5byv4jHWjj8MKqykg6vqttVAXrcyD4EhLHs1D4c4kBkomp7BF9Qx6XdJakNLQSewj2bWzq",
  "key18": "4TqFNisf4pP9CcwXBDz5qsUxyB9p5PF2DmQmdCVAfynT1R1LjCn3YfzNgqgPkaPTwaVYv9R6CAxB8pBnGPTt6ck7",
  "key19": "3RPEoNckBL48nN9qqd2PJxwGf5oGvseztgYm7aUNkuHRu73H9UvVCSiAMu8SX8ii5QrAo1zMVKWU4frvghdfnbPu",
  "key20": "5QaMwmUgJDMeVy4oi5XfUoWqQL79gNMFAx6kTBmJYNZoVrxqzDPMs5hnuBa6yf4pEfpqAakZz1Dbj5vsQ5t2wsoN",
  "key21": "UddPhds1wkvKu1MD9qpeRRxKc9Fegbg7aHXDmTwTCZsjUAFFDetCkwHQRwnHzoFBo9gWqvzTimZRPssw4KvmzJE",
  "key22": "596Nex7aZs1vJX3y2ybmEdW2j49NSodHARzvfTRpwFHcx3LSrtp6Vgo85qvQyxejwBFc9jQSAvARkir39WfZ8erA",
  "key23": "4kDHQv71McmKRDeFZWNmMVXMB9wFi9okQz6YLFHLAwCc5T2pu1TfEhK9sbdi8Po8hfknNEEP2qDVSa94RNkPgFWf",
  "key24": "2P5RG5ki2Ec3jk4UiR8bpefpPqrUQpQwQzWJ6yQBdUSscHu8YY49egny6nSfxXhdb7s8gzrTDjdcNrvobuQ9xmBd",
  "key25": "5jG4371oXUAvGtH3gn2yNYgmQL6xMvwWKtHeR1VQ7JX8G33fT1DabrgWdNLCcbmei87n19MKw163gA58cT7ySMpC",
  "key26": "XkMYdZUokv13EZiXQTBr5nqBkNn1xD29HJc7Dm6outxC4wvSieipFtsEf7hkcXx61fvHvfcMiX52AtHNr5QjJ87",
  "key27": "3UMn9r8mWjRe18G4PAddK53iuuZUSEV65Jpo1F2aJmSoEwnkzorPdkFyeZruU5c5R8cboQVzgQ3mcykL28twWAVF",
  "key28": "vxux7HSXJ221dHZp5ui9FYjBAfeZnPASpGg494knvVfJBGRosgyBg1CkeyfKyV3aNYwhfN2EsLVueb7ZFpyVabF",
  "key29": "4enSpdfUzg6uPEmAG2JAjQs8NELXNAwLYuCpp17WbS1DcEYM4QDd9UFu7vhR1hCdRMgedzwxeqQLi3LJ7G4h2UbU",
  "key30": "3deMZJMci26w9yDHK69Kb4K7DZ2BNfuSMmvRQKW5WS2Vw3LjB57gYwzdk29yabqkJpmRnBnpj6MLCQdrCm3bt6sr",
  "key31": "wUprs1r1j9N22PS1YPz1JvRbpDKmRYe3aKfc27aGJvVjaBV49b36Woxeau4iDDVQu1XTg2sKebRMx8NDjY8xbJw",
  "key32": "2ih78Ls6Rhi5iz62mLwrxEuw7dhxGsc36b848JXPRmQrop5p58B4w8giZEN1omwSy2q6uKKas7FDCVdkH8grWYrS",
  "key33": "Wtm74A1R3xpeDZk9zhaNWwPxoNuX11g9ojxdLM8jem6onbwbf3yLBEH7ut7vkbRek8HtSE6n3YY4dJNUukwx7mG",
  "key34": "2NS5BeELgv3CiEdZtFvQsiAkpLpYwDnMN7PJNK5iNW8JbhBRvnVDxF167fwTPRMxjHxANLCHSLWpMLuiQtDBqpSZ",
  "key35": "5bZ94sQfhBGvP2vyocV6LuPxgeL5sEJoFc6QARaZm2zUQas5NDyGVbvjfyz8RRnqRguoruqwJC1vPfBiocbDb4xr",
  "key36": "2zhPBZzKs2jDNgGbsJLmH31BbR7PUSFNfWr8eepJAoSpjnj5LX7d7n3TzQ5M3wWxnX3gpSxS3Hkpu6FQvaaGtAn9"
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
