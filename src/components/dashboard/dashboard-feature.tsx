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
    "2vAWtKQZAe6E2wyCXRsNabdCH3Su3oTWwvUEbDazy5nwNRLXHhc8hS2J1HfEQMmHTGR6i17vzs2wrEqk6ZMqHveb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQNDDFQxxPtJ7s7nuz6Y32PbebKgn3vhM4iFKv1ip7ou4sLT1j8CSxzJLSXBHNPuQ6hSmTL5saKMx9d2ghoesgU",
  "key1": "5P7GtaW6C7yYjQL7KQZWKxpuB5tBgkT3gaZJiGcHWw5AESJe74YpjqxxqD3GTag8SKw8m9LQr9CzVH2iuTgR1dCw",
  "key2": "4qZDoo15QKy2gZT4vkCAxU7dbypS8zRUVYCVosS4xDeDnL9TrezQmjrk36iLXLKHqVAfKJ8rL5ezj4hUQga3mD6D",
  "key3": "3o5u9Du5hP47eU66CnekeymxqzsdKkuR73WjaGnUzFHfNdyqNFF9bpFktMd6g3BWE69Hv89RBX6yMPEFPUzN5SKf",
  "key4": "wJfAs9GQZUifB8AHwJnJM9wE3Rvt268K6T1uX7ybZjuALScowrxSn1FdronKQosTrjQfG84GkmVhBnufBFkBUxW",
  "key5": "5Rh9jepXGR2z9NbCEmcQB1C9d6PXqnExPfUEdfCDoASuYssirH53MGbCC8DE8274h2k61Hq8QBFdQ6XwLeu29hW6",
  "key6": "pEUrsMxyeJHcMD5AEUaWayCEQB1C4bnTAHL6tLQrGakjUXoXzq2VeEePdYuBJhS8yf1WoFZVE11SncfNh6nEg18",
  "key7": "5GoR6sNwSCxu7JxWVfaC4wfRf6Nd9d5A1wXooUn9w8unM8gUTuuNzwMJrMpAGBzQdYQ1pNJ3qrpebkwfejE9aosn",
  "key8": "2eGBiD8Jpw9cHsEkQpjaxg4xkDybef5f6ua2cZxDurrKxGpvzeWedHWkmXENMP3cooEAJhA6rudS1rnMEHVt3iUv",
  "key9": "1M9b4np3fd8Mx9NauZXn2kk6YpodXnT27SQapHz76G3tDLEfY1ncoCTXLRMXvsDwirD7XAhci4nB7PWy6yVbyhg",
  "key10": "AmN7VXBYiCn7dJmXeV7tFKifYSEfCaRsfjnU1XYv6wCiZjTE27AWqq9SWeK4UoqFcpjHh3SLrrjD8T5D8BE35qV",
  "key11": "2Ya98h62sUDh4Kj1pToeJm2KYUxRwMnC5CYvNHS9ShLduD36CskAXFvrBAYGd9yTpbGRTRWRXsfFus3xXg86oyev",
  "key12": "5iPC7hsMgh6E2UUFzDV5Ha2ccXvpdvkY6eooBMpGopmiSTVUkSDNBuTHGHqri67PxPe7ebGLtfh2nKrLNaMtKE6t",
  "key13": "4bhW6sWSLJsyhakW1kvuCQdtj2uzLXrasEr5aaUV1fwbTUKKUPcqBKpnacpWyt4XwiN79MYhaaemNd3QMBuqUpMH",
  "key14": "Co6UD8MDpQV83RkQKU8PN3ThqsJCteDKUeHDy7cLsbXBrLs9HD97gurs2Pw6HW3QFsHQnCdms8Zw6axRveX9MjT",
  "key15": "6V59AMJ2uzRq4iKFvznE77cYLhR7ooMAfW8LDU9pG6uQizVc6fTd6JiCHSxTZiX8SJEtiAj3cHjEgcu72jHbieA",
  "key16": "5f6xrQyETpGSyhqRFUdtLv1MqZ6yR7nrFfMeEqF6hDC8XZyZjYPFtRAfALBucZ411y8DH5mbYvmLKEfsJNib1tPm",
  "key17": "2rEkUrPubAh5g1XbfEBMBnoZ1Fpm8n8eU2HSmmCc8GBs3mduCWNZhrJgmxd3UH5Twf5aJnGGwTN5V7QADfnptag5",
  "key18": "57wtfQDWEt9fAt89HpbraYJk3BYEvD2rVqBaVy96qcm1da6KKQqDw17sTJAPq1GUnt2KuKxdbT7NZTsX4rLcAFUi",
  "key19": "4h2P6LVDNjAPUS9iaRUsfxCtcG8M8iRLGAMttckoLxDCma32bN7nrHbh3jUaPRdu1214yNP1j4tiA2u6VwzxegBN",
  "key20": "2QrHPDWsiUVGMTVto39LSRAnrwhvasXZzzhq9S7VXeJi1QyjyQqP9vYMrzdzWVJb9T3dG44aC6jKTuh5ZyFbAZG9",
  "key21": "3enD5KJzSFopkwgQcRLaAEs1HdP8CgRrZiqRmHCjiSiWE2BkH4D7yVDcXHnHnymAjLnCDsUPNdsuAd2UCZcLNm5V",
  "key22": "P2aSaMGP1vS8BhsaSw1gAH6XdfJY2nfRSjvZJ63hyPutNjnQdGmybCLfW1hsJgWDzeSuo3suj8rfMr5i8pVEZnV",
  "key23": "4TwdoNkkVP3vaRtNfbCoKLTaFvGXh6YR9YbLLRkVH52RevLicaPuGE8JDV4cPmF6g92EujyrTeT7z4VT6rDmGLoJ",
  "key24": "33tCZZMjcMGDVzsaQET9KZJ6NyG8dR8htk2hu3gcpN1dJrn572dz42RnMtgupYPXufXZQVQe7V2B29H6tNys7xMx",
  "key25": "2YVRvg9YeyBR769B1vQSz1dNw3xNmBzRp3jowJ5vLgaNFFyYc3PK1UaCQkXJGAsUnBKtY66HkGb3GETqTop8SyDd",
  "key26": "34n5DfHhXVkkCUNwEAtmZ4AriL77A92ys6bpaFTGpThXYVEqstGgiwk9pKSTym7EHAWkrHZGsBoCqiqBff6ESE2L",
  "key27": "5yHH3hnZtWWSrPVKTy4LAs5PU8SSycTCBMhV1EWyBgU9vqoxxNbf8CymzDGYHDyCz6HzhPERZECJQmdwSvUDN3FU",
  "key28": "3mKq3KM84V2Mx7KU79eW75XsGhoAeywizVhoHhejg1dhqjKTsLtDGq1vfrmFMxY21Dzqr6TvPLh5zCET3skzjXk5",
  "key29": "2uVMPt38LvVLhPo5LeKktBqsWm6HYwcoWzehLGB5VUZJ1585PE4znaiGkLbrYqP2StpcqvLrBPwfBLVuLCyDhfVX",
  "key30": "2F8nErqeMo1VG689gyiDSkbq724aXVxycKmctWPnnchz5duCrURA8T92HELAMdHvfR6AZoDtKN9bcqTgE3jis5e7",
  "key31": "xAmKPGdLp4jsRE43BwkaKXo7QeiJqHjKSFtvXEYExQAWbmefi5NmWEvR5GpEG72RXEChQPKZRUbvYQtbGVAmdFY",
  "key32": "25cUf722cxUGHEZuEZHkpfFkxwmadMVuokaKcPyAP5tPpyVkvxsafrj5DBFDoEmUyrCvsUgVzbyNKVoNz9BHnJBW",
  "key33": "2ZGRviCtkaoX7LGioh6EM1NK4m7FN5iSggPcDAfSZjcgtaHJas9L13SbfJV9bYYCoEU8XXjxJ2vqhPTSXWQCATBD",
  "key34": "3BmoWfG5Dan6vmUVQ7uofWrNNC9b31YYxvTusAzjWs3bfAbygnmNuNmmgh1JTLQSR82n6Fza2F5JSioQx5Wvvw5t",
  "key35": "2uNRNqJz5nm8CE5EhLLn3ZRcgtCgjcyma9dGFkYc8k4CU7oZMoYDJE1DTaAfdALKsuYqqHfuiR2K4UMa86ar2DNe",
  "key36": "49AmA4tKSyasMjVz3HSfWVoZtXtbJKzCiYxECPxZ3LHqaKaGHkDYHB3juJwhnBddmNucFMoSRNkVBcWUv7HodkhF",
  "key37": "38eTqPdG5vQjXLnRySAayxhjjLooCANLFWkZwXkNLmfRfuvJouMMhZFzJWweZpMTjW4RnvTzRRrAdfYZTzCQX3vF",
  "key38": "2aHgMEwm1s9YXSVeV23cCPct3b19vxV5ZGXfmDuFajzHBCB3L5PRLTD1iWQVToKo6nLDDr3Ns8GzM5mANUhrJv1P",
  "key39": "2H7v7KperKJ5j1RzcNhudSa6zn8V4tofoPzs3zzXhYZnRwXWysCVnpxM12MfQQgpHLikySv99x3hJh7esZTqvQRQ"
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
