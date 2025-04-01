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
    "2i79sXdtowfShpARZJwVkiHNEedXTBvJBwz6vcfhS71G1UvdaMFD8yWGp6dXqujQ3CCHj9PC33PsDZ2g7taHAAaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gGbqXnutYcoGemCcNbWqeCnasS2DWRihCnpDaxZNnbj1NvENE5H5c1Nk4fkyigi7dnCotXLP2sLviCKVo3vfc6g",
  "key1": "4D5YcyKdXMQXs9XLLBSB5fXQSXNkeV7aLYdMtcQLyzuLMPdWRPDzjnM6dDT1ErEz5ExZkBJERFqRY6pdQfMuokfN",
  "key2": "3LLDBTYZCQ7cN3nirUJQv5Mh5BaBMjVw2isN8yZ6j6FUurQQ73V3de8iQDSBC3xp63Z3HFQWLukQ6SZ6TqgKtF1p",
  "key3": "2MbJZHC9bwsADwvSPJu6vYRtqtuvQ3A3RdLnEYXzKMehHAu8eFU995qEuq9T9UXyio4DvSZqXAr44fNmJvkTVxfs",
  "key4": "5PZBFDWd5VRMEDx79Ram6aPjryTgzyanJyiFQdYPPMNQqwiWh2kgindAGZxg19LN2YNergRrWnmy5wN6DmcgbKjH",
  "key5": "4Gw9bEDY6z3AMSwfuJW2Kty1qGr1f6jLPMDTjY7jfgSbAdCx9tmtqTyqQjXyf5g9bJvCxU3aQF3fvhzGLipTjmKr",
  "key6": "4MkawzxPVgoCwQ5iJAmbGa834EDACTXJh79GEESpzeWRW8GgZrgb2s44nREvU7JXKegRiPHJeHwgFQRAFCeMpo3m",
  "key7": "4GhWb5VxoGpzBj3m8Qz9stYq8WtxMmaCTDKAY7oGMKvFgR6s7HTFQQ1rcLg9b1GZ1ARST5EWkysom3Zjk5SUvPjV",
  "key8": "4brgyQCTUtEomhPYV7QATFAQ18v7Lepi8mxwBJfbuUm38K8sLrLiPGsuQ2jay9S5akp2pn962qJw3h3braTKbLQw",
  "key9": "W6TtMMRVqJ251eErjQng2amFszTzTsL1nnJbPaJZ2gusKd12Dd2LmQUW8UF7imM2DrD4ubFBfsJ6yWN7VvJqzp1",
  "key10": "5idydoHYAWM564h5JmdGDQXEDs6bMJyp6D2E22BtwKAHLBRRjBhrUA278ryiwHfFCbx8NA28Xsadec5QJBGJPBiW",
  "key11": "3QwC4A6XvpfAB1ffMaPeyvFwiMdVhbWiyybhMCJauEZYncJww6yMz8bJEbzPz5CezdBx7piL1fV6MdwGLfCnQhJd",
  "key12": "59XT1Py9csw1mah2FQwtB4FGSytJTQmSFvwvp3vLdetpuB6GXeHCxwVW2iwSvo5PxsZHkZ5rvA7jW2w5MT46x4wH",
  "key13": "3wWB1QV4b8QrPvfXeut5rp971khNFKo2JEyM732B7xjwnDnbstjrxYXU44FMKmc8QKnPm5b3NGgkhoAZqZrMUtZD",
  "key14": "4Udb7pa8Ti4Hh5VCr65SCzRwD1z4o9FBuJwjBLxZT81SsQGKL8Ka4L5uNzYbPVeh6bjLNBvdake5kepyReNwpagg",
  "key15": "4L3vRhWY7YnrHMVcFmcXGzN8LZhV5BcAtGqMKwXuFtMt3cAwCMTbuwVBHYBJg8UdnTuQ1f55JKinDa2TEqYNH91w",
  "key16": "5LjkMBV3LiUw9CZFzKCuQay7kfbr1CwosnW4J6bfZ3LZZykWaCgcwsSLzzfWih7pBBcHSDyupiWJtLnHcQssu1ps",
  "key17": "2MAhXJWu72N6jghqqwBRtUBPCZgzywZKHRdLi7BgNMLn7tscty6oMwuJZD4zSCEUDedLYV2mffg8Lhw5DGzU3VCQ",
  "key18": "5NFz9aYup9jYTTeKijUbdoiiuPoJykCVQKGdZgGJkgCqNR48gv7fsPYCjaGdDCh3icogF2eMvBG5WDHGm6E8c3Co",
  "key19": "259PEKFf45uP6P86CmpYFx6aun1DNDfU9HycpsVXeYxrBEG1LSWQkovsdM6Ky5uGzfMQFY4QQwMTqn2Hr5kZtE3f",
  "key20": "cSNoe8BWyC7op6b7hVuyGimzFNdTzLgJLMS5ZhCJ7mdYbcWv11VW7VPr3nkerFp15KwMyQLLMLuwU8L7Tx8VE4V",
  "key21": "56zq2YegYG9M6pM31qhUAbDoQvfgJMrziCbgqjhrXEF4NA95ZAZv4YuqhoXqvTZ668bdjXtDfRUQm8CF8UVJnNVC",
  "key22": "3t3WhaGs3q3oUrCTmABc2ZmaMZHZvZsbNPGTzkTzzGWUinaHvY8GzDvCBQhf6vSxiMFGr9nTuxyj6xf5EpQfYcT6",
  "key23": "2UiNmBeYGeuJmZimhVg6sWQ7fEn2bGfFHyuFPWXqqJSFgGgcDJLaBiJb3phM6Uxq8Ce6KEt2L4VHeWPD69VEzvey",
  "key24": "2o4yW8qbSvKGxrVwaa31zrQt8fLzSKQ2bwBFmJGfyVXJu3BUxnVAt3yHQrb1WKrj6zqBnWYAV2m4ZXY1h2HyzsE7",
  "key25": "3iUGxpuz6X3DJ5NSmJQsuxzYQcdF4fa2x5J2gGPVELuMStt8h1gAmxPLcgeAMajfc2sytXswx9xdCJvpLouDkiZK",
  "key26": "hAFjDMJ6LGtF7Pr7aie15YmDRq9DN7SPYydA2ZggoLKKp6VTrX78TgmgS4BviWNLNiZWjVPjpDAjKYzigxUNygz",
  "key27": "3RSx1fiFT7uZNkPLA18N5shNiZhwF19FvgjtQuLhgh5g1PJpZLyz4H5QvfKBCSgGY7umpbsjbfG71sGYBxEdW2QM",
  "key28": "2FzDCuF2RyDXhpAcb5oEKtFzqMe5L8ny2u2BeKrpXquNXXv5Vha25pmZ4ySv9LiZsLFJyAbYPMv4hLKaWV8CRsGs",
  "key29": "48qRzo4nV3Qig8N6Fqd7LT4Vjwz6vGq4N9VKDi24rfBBwyYJkY6NBhVwj8zfwfKbhJx39deq3b2hadD184vmzeNN",
  "key30": "2prBNWiHLhzrDAJwWxbTEJhLT6d7tAA2UeESJ27dCBb3FgxxNSzVzWrBBcqE6LqDBhid7Uz81797QbtuqwWrcuX6",
  "key31": "4sM67ngeRwmYJppsTbsxRx6Qqwiy4DhbzAJ3vqQj8trJQG8uNQCd8X3dRfKiW7js72C8PRbEJktLmqywJJiLmhxf",
  "key32": "2JUMcpt7zKMB6eZY4dvoDuweQnmhDmfj9Masu7eXwgQ3oPwruLZ7Aa2qJVMvHSnUh7UNKrBnVUMitfJouyjWsRnx",
  "key33": "RHrVauX4R1YKJ74xP57AozAoLBfriqTSoCXsBnGtBfzDrqeBMeeKtGxeJ6bwKW39vogLXhmbgcEpHhsADXj7sGi",
  "key34": "3T1U8u94Z2EdFrsX9v8xNXopieSM4GYziRT2kCj8Jz6Y3MY6uUYUDtY3xWgabW2USfbXM9uamjKCN31aQ3Xbzrqp",
  "key35": "3Wd715eiGgPjuuKWJ66oByBuYfdthf8WnoopXP87wssUDcWVsAYFSJx61EkUTbEFDSrVBjHH4CW3x6rn4RCx9SaD",
  "key36": "5RbbphRdURbCCxDj1RENQLVwh9MaCsi5qj5jfybxEmV7qB32J5r3bLQttc2L4W9XPzA65Hc1XP3hPZAsACnNp15R",
  "key37": "Ko35pvzwevj45XH7LFXoHdz9MhFWJEG796azm3g6M9zNRtDe6BEGx1jghJWcJ3VXZKTUNNhzqPATxVVWRgb1eei"
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
