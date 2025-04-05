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
    "hTabnS8PFM3ATpN2g5ix57P8DZ4RkMeUekU4DYhRq7xXfy5nmGAb557pRFtAsASvzJEyHqDFspBKUHbdZ7g7K4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nd7g5rZfuaCMQwADuqnJ3orhAF8h4t6793jns7Dc1TjfxpjrhLBti58osTYfExMGFeBtDmQ8g9SfUFjrk9nvGJ",
  "key1": "2ZPUZ31epo67dWYFpEesBBBHK7sk9MEKPx5gmfB4vcz7eDeL3vi1uqJpMekvsgCt36UjedJXYsJuNcxg68VqzEsg",
  "key2": "2fguj1rzLBcxfyAXbUfhUL1S2sg4s7CXaZSLgj1zhUJN3vA3Fdnb3QzVRGSbdXM71jhT87PwanuFYDEYKeGRJzib",
  "key3": "4hUBza8DkcbraUfdov69obf1FPQABtNR9EiZEzBekhTizxBL7eBq9vkYrEyYLTPrC6EndkPfGwRGkaC5wWjetaAr",
  "key4": "3cgUqzDwTyna6tXyAS2H1DskuKLfEyE6ApLbmoEuUSYyb7qHHpmWheXtmjC7jzeZbaZDaGPZWLYuNJszHzkW94U5",
  "key5": "2riY9KC9p9K6PYrSEW9etDkGfx22nwboJtAaxwX2AnUgwCKjSD3T6eZcuBKPmvUvmP9EmYxgSKJULgUvDMBv7N2U",
  "key6": "4JsmHozTo7dDomZvtT7uzxaPB17KGC76wsqDCCFwJqFH7DufkPKFvgY4w5MYvr4gHYGEn8qwBiCGgHS151E6DVX2",
  "key7": "2MJqVxtfe2bqj8rdoCQMBGfEJZAjiLsdH8KHcZcyRBrBT2gmA7px16N7E6Gkpmk1UBSYEjdKw2L7QLHzk5jtcqH6",
  "key8": "3VFvFCQ3MQBkxanKbvfXTAQDzn39wGmJfxHnEPgiXoCuEujzJkW8JvfHHk3YkxG1xHkVxUXoEmPB7BF9xcLfjKGz",
  "key9": "3ogCvFJh5AtnDNSuioTfeuVPf28vYbSD9LAcTGRip7DZmBFCpmwtnHXtLtFKccSWPvKwKeEABGZxiG7gJv61uuRW",
  "key10": "4FBRUjEFbshhmf97db4AHhQbZsRoqAeZRGWMATvju6JKVstLLuVS2NYDzMkqK2mZjNvRxe4n3aF8funruJARdMh3",
  "key11": "3DRGESs9QP5Gv3q89iGx3E32TWELBPEjCehhkBLDGbyusR6FBByw7W1QDLuF7Q4QRg8rj8muhacGSgqnKTNuYogo",
  "key12": "4uScDyy6pVg8CkuG7Jw8NVk1dnhF3CDsdTfkxEtZb8ucqpEggcPDw5WcYDUbKLZry1kTD66Fw7aTPzgjRKAE37DQ",
  "key13": "4WDCX7KNHuxUoku3PXKY1XnV3cvGecCXqRkfdZUDmWNz5CNrUdQV5C5VLztttbVEFdpLsQCx6rtVgNQBTMUsRyAf",
  "key14": "WoP2Ta6NVdxCaN6gPAuUmWvEb43rr3bHSamCfz1mpDyRPu8ApM2ASrJBxj2xiPbNSuCprG2vVtRBA6D7rGTPQMJ",
  "key15": "2WQkVCBnuZSxNQMprn4QV75Us6CSd1MEs1v5eL3iWe1Vhj53yg59ces1JZbZGcuHVN6VSnaJobceFwhJ1puwAWxZ",
  "key16": "UpdgAzNFezZZQmef95djMFFbvmm8DvxXUp4SqdhMrcFaP3LnchgPfoQ43Tk7sRuEWjupx8QLTsPJKJMVWNdXgeB",
  "key17": "EDPVZzvxg8msUeVsX3tCssSRPMRYEGrnJZJ5SL963EA9FqWrLFAqMMoevSPSXs2zN4566g8aBZ7vFfpfJtnyQpD",
  "key18": "5YCp3j6bGs5RinPzYMK7z4ECKE3T6LfWZD1idZrSPNqu3EK2MiCuhgW859ZYXafuLZjT4gZiLCdLcQyiVkRK14eW",
  "key19": "WivZjLXMz3yCWuoZwgbUFcP2V4gUuAfFMbRw7fr4UEycJLeP4xRqyBgN5KBTqNbE8hYL8aEWo3f84GCALYJxkGT",
  "key20": "64drVA2ZCHrCX9mZUHuMpXZeFxrj8KzYHaJHUFPHt74GhaJPG1HxSC1cAdpKdY7k7aNv37h1PMKjGM4ZXhxznpBT",
  "key21": "5iNvAbB6je3eijrWcEsdNj46vBYC5KiLXrU7pyXxqR8yH2gc5cvv8y5vwDNnVrxHwDWJ2A7zuJPdUvqzDaBVLWW1",
  "key22": "5iDn943mPUjheCj3YiZXTPS9KMHUfvzBxDU8jrGnyKGYBWjtHXvoN3k3t7rkCQzB3se1yKYG6gSaartZpvPkheto",
  "key23": "35hMbDAqxE1uz9bbC3NacoZ8cuCGVFacUMFxzcHhA7tFFt9oGe98fJnuTEiDcEd6deZCYgKZcG62iy4ZUo79HKRY",
  "key24": "4ytz3qFiUFXLy6P2P64RJ6e7ncy6oLzM4ZsXXXzGgq55x7p1HTHNRPeTNyr6ouTb4N1DraB1dWutpjze9EtqYg7w",
  "key25": "54wZHmTSdAiz8ieMogGBLtayhuGaS2mqUPiQsVg4Gg3FATJdALCcLvsTCdfc37rCfUvBQAsCb1esga15SNLCJt7G",
  "key26": "5xWTuuVnUiJhzrcPYfxcHSw2E9uMXtjye9ZKZUx4Yz8GxT57JGBiCm7fkGbxmDR74fprgx4TBbrXzt6awRyV11k9",
  "key27": "Kubwmx3rpUzR68xyW7FKgzq6beDHGTGMN2RySE29pJKAPRHzhUGQTfG3h3cH1ngbbSDH5rTDQgo8cbZpgwmcQHv"
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
