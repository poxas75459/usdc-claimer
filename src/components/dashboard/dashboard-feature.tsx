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
    "LnJiyUnxsDNFgWaHfwKWbzxxRXSuhNanv4VfmYrSh7ebrc3dYAtmFMawSYnWLNxiGNNTVBzT3hwsX6GtsXmT2ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vsGakXHtaMT2wkbxsRY4B7FfxAuvCgoNej2ioUbHAZ5vEZWbYkaDvbhHtqtpGYoKJcBLEzTwQYuaEexYcZXmrzq",
  "key1": "LiDguFqBPoXs2PLLkJvSGLkUBnHTqneDMoJvySfUUw76CzWwz3go9uaZ1mkXFzwTYy3hY8Snya311QLwp422eYh",
  "key2": "2A5sGKEnJ6UN4hVK7AeJPFupBnh2JskNmGGEmnVCg6xDMEAU2GygrZCZoxo9pttZN5GAgsyAuVWhV2rroeoEVE3U",
  "key3": "5bq2KmvXaUUMsDnpVSfg6A4E4se5RAxSp1uyg5QS3k6sUcPr1QhMTNVx3q26pJmvheuGYXZDfDziLaKSofwtTxcs",
  "key4": "2GMNfJzoadp5EFSVCj3YCQKxjqtpdnCtdhJaA8W1gvUy75ZJJbR4K1ZpCgqp5CfqwuwjoPgDv5rZfSz6dgernUoH",
  "key5": "2R5LPWziQnm9zESXEFJYDxghsqFze2rRCXVBnkgz56UjnhzMrhSaw22ZLW4RsMfCyXuD9rdSiFwhCUppzBBwM4su",
  "key6": "2KtbtZjtTtnW1W147RthxYbGDKYG7B936FJ8Twzi6PdCMVaK4n7gRgFEpu9p83sAsavrcv2spZp49jiqXTt81KsE",
  "key7": "5LzcUL4x7369xwVWjBYA99HpANo9gKbLGhWEM8v6WxBJoGw4LD3GQyM1F12mrSxZhcq9CcNr5A1M4Bqidmnw9meu",
  "key8": "3mFQt9AWkzAgCgYeGszQEPoQLXEWG3As9gMmssujGbNEX9YGfbScK3nz5Um6yq6vskwc3LvM7ACFkjj163Rry62",
  "key9": "36ouWEsEp6q53cVd1sDwjM9zdMoBDRerhWKgJo7bVBxacx6VMTXzqxgyEskuGdKGvpHYYXPw83bJ37G2H6R5x4B7",
  "key10": "iCJyEvY42iYDeJWEvRQpymFrRrpxev8tjLrvfudGNEaMfznYxbxiLtDMCkD3Ri931NRcRUtZxMmc1g4ANqCgCsi",
  "key11": "3my67jEDHAfjrFcYh1Z7ofvAKsmM3yAVMpDYDqncV75dzyAunLKzxqK6Q28LqKnVcgpkUtPBkUuaW8zetDCixxew",
  "key12": "3HkEZrvNT5cUncSkoQtpCZcmGeBAdov1hKwgFPDAQ9gWuqKhbNBYwhPVVPxHjTzvss9jm4sr5KXjEz2n5u3AsiEB",
  "key13": "61t8J7pkKGjcnsKmwXZqga42wqdJtJ5egD2U8dqac1cpxEZs2drNFJjJh2XzNcTJyi6TA14GAN7VRRo9eiCrL5vh",
  "key14": "5F1ey76VU3mbZxG5Q5byEd2yFTQzNhXfXo128bXuHMwzFsZtzpfREHn51LV9QgfEyXoPCa15XJpC1Evat1CBFuBg",
  "key15": "2gNfZMzF3q2Er6Ny57do5fUMkkUiG58oViw86ZiLFDfNSegjnWj8qvvwojjzQBw8oTW5BEhN5HgWc75nHMHMKHYg",
  "key16": "4fG48DQnaJes1FJFsBqVCg5ymBxB5LE2Ztqj2EwL5YC1quVBhzNqygmZkECYtYmNH7vAsj2yFpLx9mKNsgfNYuBi",
  "key17": "3ufNGr5gLkMJGxnKVD1cecCvvkVLoXnfqYP6MfHAds1K2jJUZ2HsywD6zoyiZCjcxQCvMSZdNGWepwvrUqZM2R7N",
  "key18": "BV3DYYqzcyb6aNhmimWe9JUDnQSK4VjHRKrNvCGPEjbp5nFagXKsXZdZWbZaukCie36LYsznCQHLgDmKFXJPBfK",
  "key19": "3f2PDZtznmSsuDRYUQadHRSAjpEmdWfYviPgAyguV7G5NYFMjU9kuqCtQxbyE6xpVrYDMyaR8Mi4zSt1jn24yQ5g",
  "key20": "4XQDY8GU8u3A6MFXZd7Rr7iNgcKZvoVSeU2jp9QpDEokAr16qadPy2GbUvvYhWEHkJoU8Yjzt3jAiiL9zaHkVcgz",
  "key21": "5vz8WbFD3Kr6eo6MYbTQbEGiVK1AQj5LbPqAM4uGNrqKPXzEPfS6WkUT6eFWygNSFWb8AAzHU9nZGwzHTQL4LNyB",
  "key22": "4HXnvdTE5gtnAM7XthRHyUsjy4gE1GRBkHiTrJaf4U2Mw1UkWLXjDttzHudYjhyiw8XTnnQ3VBTYXYGtLnC7y6js",
  "key23": "2BBkVXxV5xyByGUKzmreWi7vUmcQA58QEqDX7eSuVDRrYBq6cATmvgSV7t3vny5U9mZtoEv1VkDpJpe4dgpMGLob",
  "key24": "4sqCQCapZVybQRtRNpaXS2gZrStgLxBtFjixs5qmoE3ftrFQzE36YLrW7Wr96jjXuzSVqytAH3PfhHcJaXBeSLvp"
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
