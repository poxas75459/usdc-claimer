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
    "4EjEGDHNXmMY332XSEi3vkMaA2xzEaTZDwG3rq1UZBsZSTmnVHMzwEW18zGCW6z7RtpfZ2r5MF9TUwjtVrZGnfxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sbZ2kAprqecKvjMjeuxA6g9vXnyCWNc75QfY5BQAvvWnDB63FpxLXgcVidyvXj1aCLvqAPAqA9Uh2fjKb5L4m3R",
  "key1": "2BSHffw1PXCan1jRi1xgYp7Pn1XEQvaZsz6gNLuZzv1iypzm3G2YfFvoKukDHNLenbtWybZcHNMZyUMyFWoAx7Qf",
  "key2": "2GNaeLbQ3rgwNSMEjiLYd6cu6e85EakE8aqX3MuQZnFmt5ukM9dLLviiCsTqikWaVcpF5ZQicWSUNPZB5aPSozmw",
  "key3": "3SdriE3FKGdERnLSGDAuPGpDtvXdjrZq27dSsE4nykkQWpxJZafoKr6cXDNPD6kWhsP3PCcH9pwKaGnwUyLGMdjj",
  "key4": "3RFdv7ArLs3W6UEVJMnR7bUKRNyahp7aQvbcYQHuFFa6mkrE7GLJBEhnPanKSK9j2Dpv1Qq9Af7SVaGL6cZAxqaS",
  "key5": "4eUeAdZ6jRV9bh4EsEnxTHjxMUm4YrUpxLr3MYS4rr1hAVtB1K59phfHGQtpxU1Lz8xN6BMGCQXzL4BP11Hx6ZGR",
  "key6": "4NcHqt4Ncy5bW5Wm4Vnctj8FFng34xnjjEcCi54mUDWbRmjuFV6ieUrQE6keJi1vBawoEQoC51mprPUFqNVGSYv3",
  "key7": "ZKPx7WfDjkrkMvn4e8ASJUYii5dW65nNwFZZLGGwsisxUxCe2hJs7GA8An5uSRB9SwW6F5LLNhg2xm6sxx1GqD2",
  "key8": "5tHRevMRXjzVSKxL8C2h2aRwHVUenhUCHZijcU5NbyRv5HMbL5hZNBthvaJngAQ3txKn9uR4UoQP1LgW8T9b2DRS",
  "key9": "24PgxuzGZ3fbUxEwhRodpEE5VzxkpgXj7KAuSbkFWC2spD43RwD7K1VZ3vP7TbD6KtdSyVT5FaSaczg269Hoe6ru",
  "key10": "4Uke9uoYFmPUDPGggHTNtK6ULZUP5mvD3cnHDHi2WMaiKNCvqh7LaowRSRFn2aLoyzcSGjY8mxCDXEBShUNuaDXH",
  "key11": "2TT43ZRP9yhTymD5wYxvH5WEZw7Wa17YaUTvkUw5fwKFUEJTroRSf3XWzJ8SGzmCZUyL2xF3xVPa5DPxMFyiCZQ1",
  "key12": "ivgxHBpGyXz5dEm3uTbm8MuDGw2FWG9GFoj5g1rUBur1AE2Rag5dEnTQy6SJC3UekgLXm7cHAxgsJg1bmHV5fKL",
  "key13": "5sHJ4pdYS6MAZJdRUrQ5LZeCnWxHiMS6uC5ESt41KiVcerXcQBNchrgfBFL9w1kp94SzMyD5UFkKoFv2x39KAmpd",
  "key14": "2h5UvQCFKWkCbxaDRAvEhJenR9LoeXBpnUtNS9uPXp238TLAmqypgrCmkGBMH7ZGefZkufpUDqxw3ZNw2vZMvB5v",
  "key15": "7BKZg8juUAQofr5jBGTeQBTsDtUpzseML8VCJ7tCTduFo1m9AVms3GqzBAjGpz4SG9a3xLntbJVYWQPYJs7yTBn",
  "key16": "38N1u1gPijCT1oGuk57qow3xqLztbXrRYR6PbjHNsHzGM57eUF9sFetxgSeESu6D85z5HP6HmFnYU8E7gop6d1ah",
  "key17": "1wSZcZfdFBJNi7uDqJBy5CVRsMDshzigRZx3iegVyQE88J3q7Bk4vaTMs2FfFULTr4LZqbYGSZ6Aw8JKvzbTLUV",
  "key18": "5nK76qG2Jyn75fTQowXdETcY3BuWC8a91zyzAzC3qEP5URxJztZaGtYLX4AKJe82SDtRBrPpR7DZ95TYDiztwgaA",
  "key19": "AHsG4gkR86DUF5ZqxYJ3oYwd83tieDLrWCjZjT28BXmz4f4UbASLYqMoMvwFknw4NHFv4uiN8kTw1M2jJZCgJak",
  "key20": "R1pv9bsNf7JKFCDFeeM6jCjeoez2aL2jn9xNmvbd2gHN9MA1dYnTZvbEyJSb14nzM68B1n2xpbkvsNSQdGAFuYG",
  "key21": "5bMFdWW6QVsaffuuiF4Yc8iDenPsnmqJrLo9dzVeEq2hkdjAftN4BD3tFPSmXPE8njC7vN5ZoNMaub8LxL7uTNby",
  "key22": "2Ca5C8wX6vF7NkicqpH9LbSkQd2MrUeHbKsV1h3fbVFcwdjJHVGrXvLAasCTbg55xT6S1m3oLBAN1Uu5YUpQPnU7",
  "key23": "52ihCVWu7LnPPUMciBTbFHeY1ecLjYHYXSnehWerGiTTQGunKWZ66PFvnmCdyggVvHXETftpfavVnNZ9MtRo7ik3",
  "key24": "3FQTYh26CLZTndaiHLBbgF5qKpw76cgg3PGzPmHwF7vh3VjWTLBvE6x4A6Xf4WdBcs7Zj9EJ4UKwwArFM4vPzZtZ",
  "key25": "EKmkYcewDvEaax4Kmrz3gi56EEBp8M4KMekixfnyxtDYiSbJf5zTCFsLFBkEVpTgvgpw1REWz61g3G1ditxCERF",
  "key26": "51fUB1Rf6JuaEZqnQvyeNN2FA5U5zhdqmNrFGfKneuL2B7aGpsiCRPW4uKCvw3Dq3v1ReQSVpJzXR43Now5ABTT3",
  "key27": "5HFZjpVc3WWKfq2wcjakrZT4MouwL6jXeWgnKLpXmHwApfwRsxvnPYRsA8Vu7JYT1EZddY4Fc43wTys9TNPbEt8j",
  "key28": "3BBR5zfqXKLWt3jazE5mPR1CRCsjzpdxgE7BzE2AiA3VkjF53FR3r8S6eNM61QGbH9cQPLCRPeHAhkqin3z6jLyW",
  "key29": "4tTm192Y53jzCGnX2hbLfePijXvZda7U745oX9vQoMDu4xMSs9G8cKaJpK4nv4RAYrN1p9rHbUVsN3DtwKuXB6Lu",
  "key30": "3FPZaF6JacYTJncTbCLdMRyNkNEockN2ZhRJ4oVcoaUY2nhdoj81rp5GzUjkQ3SZBs8DcgniPjJq5gtS9Sg9GQGU",
  "key31": "4Emo8oydsU3Z1PnAtfNreLRfnjnySpv4cbhgoTCFxeip8xdU65jP3mxa3W6zLsoPL8VRk2HaiEuGyuUNKezoN1aS",
  "key32": "5GfmM25aJKPYQTU2XkLmJfEezBhp1xfPzFVGXj4h2SjnKubJFbzvXaw8Mub2Vd6nRmwQfqqpUJhqcUsXCKmHB95Z"
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
