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
    "5gwmWXeo42wWnyWnCpnLCB5Dxm8GLpcSAtqjr3dbbJWcvYAKzrGKnT6JPZVs11Nd3ux4zE48PS52z85TDb8P7bH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H214e8Qsxv9cBAue5ANEZdLpeUSARLyV3JLpuAihvdK9vhe9nYmiWHqpG2E3afmX8vHDmRJmG5PTZgX4QfdCWAY",
  "key1": "3xXqe4orCcxQJDHL6YJJRXcMsPE6Ls5TVG7Nm17hfZjd8Fdwt7trsQaNAhvv1RyVVy4XEoMUNizoGaaJoysfMtdu",
  "key2": "5wW36vJixrwdBoFpsa7sF1SYfgM3N5DJjTDDQz2qKhVDPy652u5DzHXxEvN4cSDEJqkzxTnWkWMkKzPy5URmTqGA",
  "key3": "3EnDxptuxhMKK4DrJG1a2NSPHxS9HBoxHMGk9V3ngTznzyz9SdwCURxAJ3kZ6BJ6fFBReztETjesRL7VXoJzTtsE",
  "key4": "xBXDnwT1BjDKdbbbTTQiUtsHdByEWo5y7HkkJshtYxhFnmtf7mAGjBBEvxZiBWUSTvj9cQKExTLVKZ6DWaueA2V",
  "key5": "5HcaoC8tFFvuVW1Rp8T183jmxQpSYnkkgGDq87bzzC3rvoBTpSJNAwR8b7qCzAb1TU7QjhYDiqN8Qek3KktLFsHz",
  "key6": "3ZMDcXggaQdKqMahoGPn6eRB3PFiei8tX5Pe3UuGJytuqymKs1NWuHxKVGVY7JY8XtJyTfBi9dkHwd2CfakouW67",
  "key7": "UAmMuS7qWr4yWijFJ4EbGC27SbUdqmLepFkHkccFhyca6GhVjBCjxxKZoXoCSTymMgXGSpGShtuSFgfpZ13Ghw5",
  "key8": "4pMivCRPoT3TcrEFrwpF31E8dzhANfDSVkbasGL1bDRvYG9KrsowmDXND9aKSmTkL4qavWEDdcrYfFmZ5dQJ5XP1",
  "key9": "bMeFn6A5ti1Bzds76g5ddpMgYkh8nHMybwpbY65QDALKJo46ZyXRwxbsgnUwP6xGS7MpDUUs3sMp7zTU5KK227R",
  "key10": "Tm9NgkjtjaeZVnbvwP6GBGtaLSAFhdouma7vhcUPtFLgX2JsEGsRvj2RnhA5rvzX9no4XYukas3rRETER1gEkWr",
  "key11": "2XeQSNJmnJEcQMzqiGEHhdqfMmP4BQx3LEqYQuzPaXUaY9fVHEdAq4uZHVPLLuqhGJsE3hfyJ6xqteUKXbhZHm2T",
  "key12": "5a4q68fjqJw1GQn2kduqaGwTMyUV8Qk42DK2fagfRTC8AFGkqohzzB52AWkcthD4AERdjTat4pQPq7zL3PA3ZFn5",
  "key13": "4g8KuxZm93G6sXeSfRy9wnw1PA2MFKUuE3b8nitKhWvjQyKgrYYphZNV7B83LeuzR97wrkQ3FPS4gMZ575tZWXpY",
  "key14": "4sT51CMd3vCdzT2dezZznCBM5iokrk6toQYErYxiNGQkboUh89CezHcR7ipomcx2cpPhaW62mQk6fkM8nKAiwnLT",
  "key15": "3FHz6YyPf6K4Tpvk5aTk7hsjY1i7XWq8y1hZXn7p3MxvSXMZJfC4FtJSTTrYhgLspC9ycKEZeamMnMJLUs8Qiiiv",
  "key16": "5GjxchLPD6oMTVZPP2chsKe7g6pchPWXVCCETqQ3vfuYNSdysu1Dru9UwRegwPvyizXmAoKBTY332dNcVSWBVTtJ",
  "key17": "2wU6vZz1AF8gyaueknahg18acE9vWpTKsshvJ9Cr6CWX7g72JAkFJHuPM1Y5kF3qMuyRYEcvsUaVKxERGNr8MAG6",
  "key18": "5q9xB1EwzmYsCx7gnffD59PgMAAHr9H8P1Mv8k3HrLUdxyqMDKaZvZPNZSbVUZ7vkia3Kfmx2oak8nszU7kdqL5C",
  "key19": "4oEyyts3N2mqce4XCdZiEf1w2ZdPATqd296UZA7omuvtTGWv9Sxq7woeF8JpkeGpyX9qRKmYAk3ajVdBAA7mrRpR",
  "key20": "2kWbBjVieDahfDUjtU945c4E3AKLzz7uPwGKn9L11sZNmUN9CLWawyqH7m5Kfa9AnHqQUM2M1fVeYEWzSnfby46k",
  "key21": "2undeQJsJtFyHg2wiHoBcDzjifeDsHjVrdz1BnnPwGhBKbM3zaUx3wdnHmP8LZTW6NxqdBjkKwQLQwu9GQ1hjbfd",
  "key22": "3F8nvnR64r1RSbat8q9bjHcuRRBYZDdMZrBbPRACSj2VA36FJbKMkamcuStw3BfocLVoY4iVJYyiuuwumdW263z6",
  "key23": "4FH8RxhtcReV3GYuaWtjDVmZmvEFJ4uikJDi4cahV5pJtUwCFWZvYZkSXNu48BeXfdU3oaAuj1P7kkhMaBGd6czM",
  "key24": "2YosAzEDoCDJiMKrdTaNR3eZhE5WSP1gDfjSnLH2EmXz5MoQcT2vF7LDWyfPBCQCdCRwAfjbWQaV7nm21aYFTgih"
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
