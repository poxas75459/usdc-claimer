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
    "PqnrfiBgDyivpjD4uzwVNExjbmQW8t7MVzpnxe9aDW4zbdQVT3NSt5jpsm3B5TixmizhinZLmJB9r6LAk8ZBYEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QTUstXFjuBfxPkaqw7XPyuo8CoXq8826r9xg2da6SCANec9puox4TvcYcVGGRhTrm3ki1Z78bKVSGit1boMAjkr",
  "key1": "5HhjKdJ7wSRhwW6XSZfWkFhrjytLtt4ciKRYvviExMhqKcZMMUybYXC7eLVTxCMmbyAxgcKTJ7xtJatE6NQqWxcy",
  "key2": "2gJEZpUM7TShzZpGAf1Qb2r9L8mPBt176paaiU2oZHRxbCVKXAQeBBZZitCFt3WiCgfu1ZZNpBL9C2cU5xyNdUJ2",
  "key3": "46rwHmrfeGDeMZDpWAanBFD4ydEjdXDkD7wYycwyiGXisgA12RW6rYTiTwA2vmTYTtL5yXCQg94SyJT9x7sf2Jfi",
  "key4": "2ZgUK2zE7fN5TNUCoNMj8E2b2aoTaxvUbEYrGTnftkjrGXVPekveyA1fMMFwhdKNCCUtox7kj8CWGXQYTBLcWg6q",
  "key5": "3y6npX9rFZHGthUo4h5PTanXfMt9N69ZrdT7yFjyovF4fGTeLmRYX29YRypad9pGp9iearYW6GB2pVqUXDww9gGr",
  "key6": "3qMRmWaZYc8kNY7Hskx92VJmY4U6rCXRsnwGzxiyBfLbrREuvVuPxVPytmKnwZx6VZg6PssgUpLeE3NqzDCntN15",
  "key7": "3uGSMz48x3A7Ju2W85TaVHrJm6y6dHKzNSE1hFcuofmHkMpSaAG2qPM6wNEzmJHHvjzWsCDhXH8fykqjdnV2vRv3",
  "key8": "E9rp75axqRFVdogHXjmSzZpSMgc34wiZecpaNjuiEomET6LtRtmjpr54aieWV87u9Q1u1C15wraRwzSuB1MSFhg",
  "key9": "33SnxX4oThMdzhSpgSpfoX5Wj8M18tfRyLPvSipF8PyhoqczuumXjKXYvtWpQGTwYTN1qwVGCByyfDHTv3WJzfED",
  "key10": "3CsQ12SKArcxp3JpaeV9HoBrdQmxfeWCGKQSJJEnox1kzsmpQJzwvTCGHkTUrrmfwGmpjzxQCSnxrNHcoWSHfLqt",
  "key11": "4DqaCwrpauqRWtEsJFmVLW6znbzeAg9CUF2daifLGdEqsTqoySejWkDxFkiVDtxE3yVgCfrxGv66ps6i2Ym8EMMj",
  "key12": "2DjMSQqqKjnHj4i31ew4f85ykxjZde3FUB3Pv1g3355D1vwCz4jaBbVsCh6guDhAus9hPfTHLrDpciKQSvEyZNRQ",
  "key13": "4AAY1jaFfnCdURLme9UCj6QxRuLaVmF1RceoADgpy6ELjCPKoFHkHVRhnGVZnpxqJN33MDcF4pTa8WerqZtMJZRT",
  "key14": "3YsGJFeuaQq33BAcaug3U68cjNV1vDGYR2QdjEurutCXbufwsUZzW2UYGnvCXJ3HzHzdxGK3LQFEm5qTGbhdwwqy",
  "key15": "4Pu1oyxdmF9KhYC6oguFNpwsd4QBdUoaZRBGgPqA18WFS1hTPoGAsmdMPURsSLwT5QrLhq3P3cA3vsSjDDTNUcLg",
  "key16": "2T8kJr9vnxYGbnueCtnWLWHzxnQkDHwyCfnfmPcT1hr1GYBg7aBqYvhfXsssSkwWHuyhSQdLKLdN9PNDABxk9Nry",
  "key17": "5pBXBuwUQJ12pceXuU34kXsToWn8qYbyxMkmuRm2HZyaciuF8sffvXZhfutRU3HzuY7nv6VcAfVY65xYgy2pjzEy",
  "key18": "aJRL6SKY9WiJoMnossCaTA5AFFjegHem4NZBh5YZo2geKHcUpLaDQdESyMoCzQj68eYJmZDWQxaNn8kJMSeLcnu",
  "key19": "54enMkMdUT414VD97rBuJ69xhrsxGtyGJ8CeqLMfbUbWjVP8haJUgzJEDyt9m8bdM8URoPFeeACjkVdQpv5vzuwk",
  "key20": "3hvqZDWAgk46XdvGHknSbnC4RVbkp6Tr7n3sB425UWAhMNEeYC2XBEt9yYSLuKYjwfC1RpnjD76Cw6CpifQHcUxR",
  "key21": "2Kz3j3rwYtyppSfqJ1TWeHrJoonBTibZqKx87bjhVPX8MCmmUKKWc1kUZUA6S8K5jRyn2W1MjvSkeM6TQdytesSX",
  "key22": "5gWrnhnMHhz5Soe7Kh2CzLM5XGWDJBcexGRmtnCgFitdAWbSrzmkS6KJ36E7oN3HPa5aykTGujxKGDfKqA2C7x9L",
  "key23": "2Lxa9t3mukfTRpyjjHRbiZNP9ePd7Ku4uPPM7ePGDMi5XWRkbp8QwGVHT3a38rJ5Rc7DGaGBgtWfRvkgw2JgKhau",
  "key24": "5tSRrr37vEaNuuxY392hJbtxP8EutaztCjsT3eAPkeiKSnDHmFCrfDTb2W4tgejJe5TKP4VeEX3Nx9nbn4czF4ag",
  "key25": "5KUNWtMK9XCNQck81cyGGLF2zffrjctcTjft2yHCwM7JGjmcfCX9XBqJsto3XpxhKTG6e9KuAwT21SS5YGANE4Y8",
  "key26": "351NDatFu35fKAxWcapnriAqVEo9ZMLKGGYXHsmqaiacPVRB9gzKbXVnM6JgfQst6hYhYXtcBrdZVZTZ1VjYNFXK",
  "key27": "2QUvVrZTmSaduwVVvFf4u6UJdmT75gm699V8Gq9CtDjcKkbXgdpTkMMaB34choVyZNikoG89fpptQapR8d26iK67",
  "key28": "4RkfLRLZrQPXm6f4PzyJkP3gipDA5ADgJ6FX96XEQHrtuzyVbFZAtzB4BjsXGjmRDrFXsqrDSqDkVyU9CLwWCuGf",
  "key29": "BRF1exAycw2dAsBsZeBiWNQhz8cF8hiHSRpM1uj9C3akhsYvCVqZPhbZHEei18aw7VduWTTd6U9h4vfpSkiafWA",
  "key30": "38gPHrthH1YPJ4dCpSXvdiA4FcTWjR7eun1atFJqbDJpgWPa4mt7a1gKtg3k4PCrKFpBaUrTA9MGbHLRfa6xioFw",
  "key31": "4yzy4nuBXbk4vxpvyG6bhGDS73DLeAc7CuE8qEvdjhhzoUEwbBCtbRnSoArGQM1uvfDPT2tm6MrLoAAQTtLuUSMr",
  "key32": "ciMLgivparTCvpr6jKKjwwKfufvU13HoZNfMpu5qHr5up9MXB1MbWDcsNSK925jvjHNpwVHiLgqmzneN4dEvUeQ",
  "key33": "4DS2sMUPiMM93AsckBD7qonBqCAmCCkZzXqYosevKfgCVE5EEN4uK3PZky37pX4Kx1ErRMA8TXoQrej6rtX1SWVZ",
  "key34": "4bBFBYwwLmidrrZ9rKtNhsSe674G5f2Y2aL3zxPMund76ESRkgcevC6poVuPJkMLHMdKL8QGU2gWJpERimvVoa3g",
  "key35": "35rrhdHDSd3hmRHhjYRgfFNfexepF8U41VDwhyvBMRsBDpYQaBdQyk8gi8vmGPYwiekhETqumdBRiWBtukqebV4Y",
  "key36": "3dWVDyifLpEk2F4fEsNSB67XYk2KTd5EZfyCLiPKqd3A41aZJcNPqXdAqUiqj8zoSgAPKC3v3J9dMdRrkmrFzFKc",
  "key37": "2DMrPhXF184W8YU7FWYhHUgPwLYBHEmH122s1WAApmkFG98tSeGUyQ8jLhae3wBjbu7dgtCmS1o5Vr7dw9s2m9dP",
  "key38": "5WYynTmAzkwMCCozeteJWV9WPEAjFKc1kDHn8uu669SyyRvMwb6QEQ43i5k7yCBV9VDvwjyNuR6hr9DZy5rjVirW",
  "key39": "zMX76R6DQRrDHqx6tVucfsfAWUUJtFa8QVRxEBi9233JAfkEoMHr4eiLez1X9dVYnrzbWmFHsxatfmvEarPWJs2"
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
